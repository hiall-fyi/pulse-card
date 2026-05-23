/**
 * @module pulse-weather/sections/meteogram
 * @description Professional time-series weather chart showing temperature,
 * precipitation, cloud cover, and wind simultaneously on a shared time axis.
 * yr.no-style overlay layout: precip bars behind temperature curve.
 * Single SVG, single viewBox, uniform scaling — no preserveAspectRatio="none".
 */

import { tempToColor, conditionIcon, escapeHtml, sanitizeCssValue, filterFinite, futureHourly, finiteNumber, uniqueSvgId } from '../weather-primitives.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';

/**
 * @typedef {object} MeteogramPoint
 * @property {number} temp - Temperature value.
 * @property {number} precip - Precipitation probability (0–100).
 * @property {number} precipMm - Precipitation amount in mm.
 * @property {string} precipType - 'rain' or 'snow'.
 * @property {string} condition - Weather condition string.
 * @property {number|null} cloudCover - Total cloud cover (0–100) or null.
 * @property {number|null} cloudLow - Low cloud cover or null.
 * @property {number|null} cloudMid - Mid cloud cover or null.
 * @property {number|null} cloudHigh - High cloud cover or null.
 * @property {number|null} windSpeed - Wind speed or null.
 * @property {number|null} windBearing - Wind bearing (degrees) or null.
 * @property {string} timeLabel - Formatted hour label.
 * @property {string} datetime - ISO datetime string.
 */

/**
 * @typedef {object} MeteogramData
 * @property {MeteogramPoint[]} points - Data points array.
 * @property {number} n - Number of data points.
 * @property {number} min - Minimum temperature.
 * @property {number} max - Maximum temperature.
 * @property {number} minIdx - Index of minimum temperature.
 * @property {number} maxIdx - Index of maximum temperature.
 * @property {number} maxPrecipMm - Maximum precipitation in mm.
 * @property {boolean} hasCloud - Whether cloud data is available.
 * @property {boolean} hasLayeredCloud - Whether layered cloud data is available.
 * @property {boolean} hasWind - Whether wind data is available.
 */

const VB_WIDTH = 600;
const VB_HEIGHT = 280;
const CHART_PAD_X = 8;

/* Sky-ground vertical layout (y coords):
     Sky zone     0-80   — cond / wind / temp labels float just above their
                            curve point (per-hour, not fixed y)
     Curve zone   80-200 — temperature curve + area fill
     Ground zone  200-220 — precipitation bars grow up from y=220
     Axis zone    240-272 — time labels at y=254, sunset / sunrise italics at y=272 */
const CURVE_Y_START = 80;
const CURVE_Y_END = 200;
const PRECIP_BASELINE_Y = 220;
const TIME_LABEL_Y = 254;
const CLUSTER_OFFSET_ABOVE_CURVE = 12;  // px above the curve point
const CLUSTER_WIND_OFFSET = 30;         // wind barb sits a bit higher than the
                                        // text labels so the stem (18u) plus
                                        // any barbs don't hit the curve line

const PRECIP_BAR_WIDTH_RATIO = 0.9;
const LABEL_INTERVAL = 3;

/**
 * Compute X position for hour index. Single source of truth for all layers.
 * @param {number} i - Hour index (0-based).
 * @param {number} n - Total number of data points.
 * @returns {number} X coordinate in viewBox units.
 */
export function slotX(i, n) {
  if (n <= 1) return VB_WIDTH / 2;
  return CHART_PAD_X + (i / (n - 1)) * (VB_WIDTH - 2 * CHART_PAD_X);
}

/**
 * Map temperature to Y coordinate in curve zone.
 * Higher temperature = lower Y (top of zone).
 * @param {number} temp - Temperature value.
 * @param {number} min - Minimum temperature in dataset.
 * @param {number} max - Maximum temperature in dataset.
 * @returns {number} Y coordinate in viewBox units.
 */
export function tempY(temp, min, max) {
  // If any input is non-finite (bad forecast data slipped past the filter),
  // anchor the Y coordinate mid-curve rather than emitting NaN into path d=.
  if (!Number.isFinite(temp) || !Number.isFinite(min) || !Number.isFinite(max)) {
    return (CURVE_Y_START + CURVE_Y_END) / 2;
  }
  const range = max - min || 1;
  return CURVE_Y_START + ((max - temp) / range) * (CURVE_Y_END - CURVE_Y_START);
}

/**
 * Format hour from ISO datetime string. Uses getHours() — no locale dependency.
 * @param {string} dt - ISO datetime string.
 * @returns {string} HH format (24-hour, zero-padded).
 */
function formatHourLabel(dt) {
  try {
    const d = new Date(dt);
    if (isNaN(d.getTime())) return '';
    return String(d.getHours()).padStart(2, '0');
  } catch {
    return '';
  }
}

/** Safety cap: pathological extended-forecast arrays can carry thousands of
 * entries; spreading all of them into Math.min/max hits V8's argument limit.
 * 500 is well above the hourly.hours upper bound of 48, with generous
 * headroom for higher-granularity sources. */
const MAX_RAW_FORECAST_ENTRIES = 500;

/**
 * Build meteogram data from hourly forecast.
 * @param {Array<Record<string, *>>} hourlyData - Raw hourly forecast data.
 * @param {number} [hours] - Number of hours to display.
 * @returns {MeteogramData|null} Processed data or null if insufficient data.
 */
export function buildMeteogramData(hourlyData, hours = 24) {
  if (!Array.isArray(hourlyData)) return null;
  // Cap the input array first so the filter/sort/spread below can never fan
  // tens of thousands of args into Math.min(...arr).
  const capped = hourlyData.slice(0, MAX_RAW_FORECAST_ENTRIES);
  const future = futureHourly(capped, new Date());

  const raw = future.slice(0, hours);
  if (raw.length < 2) return null;

  const sample = raw[0];
  const hasCloud = 'cloud_cover' in sample;
  const hasLayeredCloud = 'cloud_cover_low' in sample && 'cloud_cover_mid' in sample && 'cloud_cover_high' in sample;
  const hasWind = 'wind_speed' in sample && ('wind_bearing' in sample || 'wind_direction' in sample);

  const rawPoints = raw.map((h) => {
    const temp = Number(h.temperature);
    const precip = finiteNumber(h.precipitation_probability, 0);
    const snowfall = finiteNumber(h.snowfall, 0);
    const rain = finiteNumber(h.rain, 0);
    const showers = finiteNumber(h.showers, 0);
    const condition = String(h.condition || '');
    const precipType = snowfall > 0 || condition === 'snowy' || condition === 'snowy-rainy' ? 'snow' : 'rain';
    const precipMm = precipType === 'snow' ? snowfall : rain + showers;

    return {
      temp,
      precip,
      precipMm,
      precipType,
      condition,
      cloudCover: hasCloud ? finiteNumber(h.cloud_cover, 0) : null,
      cloudLow: hasLayeredCloud ? finiteNumber(h.cloud_cover_low, 0) : null,
      cloudMid: hasLayeredCloud ? finiteNumber(h.cloud_cover_mid, 0) : null,
      cloudHigh: hasLayeredCloud ? finiteNumber(h.cloud_cover_high, 0) : null,
      windSpeed: hasWind ? finiteNumber(h.wind_speed, 0) : null,
      windBearing: hasWind ? finiteNumber(h.wind_bearing ?? h.wind_direction, 0) : null,
      timeLabel: formatHourLabel(String(h.datetime || '')),
      datetime: String(h.datetime || ''),
    };
  });

  // Drop entries where temperature isn't finite — one NaN poisons Math.min/max
  // and flows NaN into every SVG coordinate downstream.
  const points = filterFinite(rawPoints, (p) => p.temp);
  if (points.length < 2) return null;

  const temps = points.map((p) => p.temp);
  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);
  const maxPrecipMm = Math.max(...points.map((p) => p.precipMm), 0);
  return {
    points,
    n: points.length,
    min: minTemp,
    max: maxTemp,
    minIdx: temps.indexOf(minTemp),
    maxIdx: temps.indexOf(maxTemp),
    maxPrecipMm,
    hasCloud,
    hasLayeredCloud,
    hasWind,
  };
}

/**
 * Render cloud cover as full-section absolute-positioned background.
 * Lives outside the chart SVG so the cloud band stretches edge-to-edge
 * (above the time labels and below the section header) instead of being
 * clipped to the SVG's aspect-ratio-derived height.
 * Slot positions are emitted as percentages of viewBox width so each
 * column lines up with the precip bar / curve point above it.
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} HTML string (empty when no cloud data).
 */
function renderCloudStripBg(data) {
  const { points, n, hasLayeredCloud } = data;
  if (n <= 0) return '';
  const halfSlot = n > 1 ? (VB_WIDTH - 2 * CHART_PAD_X) / (n - 1) / 2 : VB_WIDTH / 2;
  let html = '';

  for (let i = 0; i < n; i++) {
    const cx = slotX(i, n);
    const x = i === 0 ? 0 : cx - halfSlot;
    const xEnd = i === n - 1 ? VB_WIDTH : cx + halfSlot;
    const w = xEnd - x;
    const leftPct = (x / VB_WIDTH) * 100;
    const widthPct = (w / VB_WIDTH) * 100;

    let opacity;
    if (hasLayeredCloud) {
      const high = (Number(points[i].cloudHigh) || 0) / 100 * 0.06;
      const mid = (Number(points[i].cloudMid) || 0) / 100 * 0.08;
      const low = (Number(points[i].cloudLow) || 0) / 100 * 0.1;
      opacity = Math.min(high + mid + low, 0.15);
    } else {
      opacity = (Number(points[i].cloudCover) || 0) / 100 * 0.12;
    }
    if (opacity <= 0) continue;
    html += `<div class="pw-meteogram-cloud-slot" style="left:${leftPct.toFixed(2)}%;width:${widthPct.toFixed(2)}%;opacity:${opacity.toFixed(3)}"></div>`;
  }
  return html ? `<div class="pw-meteogram-cloud-bg" aria-hidden="true">${html}</div>` : '';
}

/**
 * Render precipitation bars in the ground zone — grow up from
 * PRECIP_BASELINE_Y (y=220), max height 20px so they never invade the
 * curve zone above.
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} SVG string.
 */
function renderPrecipBars(data) {
  const { points, n, maxPrecipMm } = data;
  const maxBarHeight = PRECIP_BASELINE_Y - CURVE_Y_END;   // 20px
  const barW = (VB_WIDTH - 2 * CHART_PAD_X) / (n - 1) * PRECIP_BAR_WIDTH_RATIO;
  const useMm = maxPrecipMm > 0;
  const precipCeil = useMm ? Math.max(maxPrecipMm, 2) : 100;
  let svg = '';

  for (let i = 0; i < n; i++) {
    const { precipMm, precip, precipType } = points[i];
    const value = useMm ? precipMm : precip;
    if (value <= 0) continue;

    const height = (value / precipCeil) * maxBarHeight;
    let x = slotX(i, n) - barW / 2;
    let w = barW;
    if (x < 0) { w += x; x = 0; }
    if (x + w > VB_WIDTH) { w = VB_WIDTH - x; }
    const y = PRECIP_BASELINE_Y - height;
    const color = precipType === 'snow'
      ? 'rgba(200,220,240,0.45)'
      : 'rgba(90,200,250,0.4)';

    svg += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${height.toFixed(1)}" fill="${color}" rx="1"/>`;
  }
  return svg;
}

/**
 * Render precipitation labels just above each bar.
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} SVG string.
 */
function renderPrecipLabels(data) {
  const { points, n, maxPrecipMm } = data;
  const maxBarHeight = PRECIP_BASELINE_Y - CURVE_Y_END;
  const useMm = maxPrecipMm > 0;
  const precipCeil = useMm ? Math.max(maxPrecipMm, 2) : 100;
  let svg = '';

  for (let i = 0; i < n; i++) {
    const { precipMm, precip } = points[i];
    const value = useMm ? precipMm : precip;
    if (value <= 0) continue;

    const x = slotX(i, n);
    const barHeight = (value / precipCeil) * maxBarHeight;
    const y = PRECIP_BASELINE_Y - barHeight - 2;
    const label = useMm
      ? (precipMm >= 10 ? String(Math.round(precipMm)) : precipMm.toFixed(1))
      : `${Math.round(precip)}%`;
    svg += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="13" font-weight="600">${escapeHtml(label)}</text>`;
  }
  return svg;
}

/**
 * Render temperature curve with area fill and min/max labels.
 * @param {MeteogramData} data
 * @returns {string} SVG string.
 */
function renderTempCurve(data) {
  const { points, n, min, max } = data;

  // Round temperatures to 1dp for consistent display, color, and curve positioning.
  // Without this, 17.6 and 18.4 both display as "18°" but get different colors
  // because tempToColor uses raw float against tier boundaries.
  const rounded = points.map((p) => parseFloat(p.temp.toFixed(1)));

  const coords = points.map((p, i) => ({
    x: slotX(i, n),
    y: tempY(rounded[i], min, max),
  }));

  const linePath = coords.map((c, i) =>
    `${i === 0 ? 'M' : 'L'}${c.x.toFixed(1)},${c.y.toFixed(1)}`,
  ).join(' ');

  const areaPath = `${linePath} L${coords[coords.length - 1].x.toFixed(1)},${CURVE_Y_END} L${coords[0].x.toFixed(1)},${CURVE_Y_END} Z`;

  const gradId = uniqueSvgId('pw-meteogram-grad');
  const maxColor = tempToColor(max);
  const minColor = tempToColor(min);

  let svg = `<defs><linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">`;
  svg += `<stop offset="0%" stop-color="${sanitizeCssValue(maxColor)}" stop-opacity="0.25"/>`;
  svg += `<stop offset="100%" stop-color="${sanitizeCssValue(minColor)}" stop-opacity="0.03"/>`;
  svg += `</linearGradient></defs>`;
  svg += `<path d="${areaPath}" fill="url(#${gradId})"/>`;
  svg += `<path d="${linePath}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  // Hourly temperature labels live in the staggered cluster below
  // the curve — see clusterLabels below.

  return svg;
}


/**
 * Render time axis labels.
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} SVG string.
 */
function renderTimeLabels(data) {
  const { points, n } = data;
  let svg = '';

  for (let i = 0; i < n; i += LABEL_INTERVAL) {
    const x = slotX(i, n);
    const anchor = 'middle';

    svg += `<text x="${x.toFixed(1)}" y="${TIME_LABEL_Y}" text-anchor="${anchor}" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${escapeHtml(points[i].timeLabel)}</text>`;
  }
  return svg;
}

/**
 * Render a single NWS wind barb at the given coordinate.
 * Stem points downwind. Half barb = 5 kt, full = 10 kt, pennant = 50 kt.
 * Speed input is km/h.
 * @param {number} x - SVG x coordinate of stem origin.
 * @param {number} y - SVG y coordinate of stem origin.
 * @param {number} kmh - Wind speed in km/h.
 * @param {number} bearing - Bearing in degrees (0=N, 90=E, 180=S, 270=W).
 * @returns {string} SVG fragment.
 */
function renderWindBarbAt(x, y, kmh, bearing) {
  const knots = kmh / 1.852;
  // Stem points downwind: bearing 0° (N) means wind blows N→S, stem points S = SVG 90°.
  // SVG 0° is right (east). Convert bearing → SVG rotation: stemRotation = (bearing + 180) % 360 - 90.
  const stemRotation = (((bearing + 180) % 360) - 90 + 360) % 360;
  let remaining = Math.round(knots / 5) * 5;
  const pennants = Math.floor(remaining / 50); remaining -= pennants * 50;
  const fullBarbs = Math.floor(remaining / 10); remaining -= fullBarbs * 10;
  const halfBarbs = Math.floor(remaining / 5);
  // ViewBox is 600 wide and scales down to ~320-400px on dashboards / phones.
  // 18-unit stem + 1.4-unit stroke render at ~10-12px screen, which is the
  // smallest the barb can shrink to and still read as a proper NWS glyph.
  const stemLen = 18;
  const stroke = 'var(--pw-ink-cream-muted)';
  let barbs = '';
  let barbY = -stemLen;
  for (let p = 0; p < pennants; p++) {
    barbs += `<polygon points="0,${barbY.toFixed(1)} 9,${(barbY + 3).toFixed(1)} 0,${(barbY + 6).toFixed(1)}" fill="${stroke}"/>`;
    barbY += 6;
  }
  for (let f = 0; f < fullBarbs; f++) {
    barbs += `<line x1="0" y1="${barbY.toFixed(1)}" x2="9" y2="${(barbY + 4.5).toFixed(1)}" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round"/>`;
    barbY += 4.5;
  }
  for (let h = 0; h < halfBarbs; h++) {
    barbs += `<line x1="0" y1="${barbY.toFixed(1)}" x2="4.5" y2="${(barbY + 2.25).toFixed(1)}" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round"/>`;
  }
  return `<g transform="translate(${x.toFixed(1)},${y}) rotate(${stemRotation})"><line x1="0" y1="0" x2="0" y2="${-stemLen}" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round"/>${barbs}</g>`;
}

/**
 * Render the hourly staggered metric cluster floating just above the
 * temperature curve (sky zone). Each hour renders exactly one of
 * temp / condition / wind, rotating, so a given metric naturally
 * resurfaces every 3 hours at a different hour offset. Min and max
 * temperature hours always show as temp regardless of their slot in
 * the cycle.
 * @param {MeteogramData} data
 * @returns {string} SVG fragment.
 */
function renderStaggeredCluster(data) {
  const { points, n, min, max, minIdx, maxIdx } = data;
  const TEMP = 0, COND = 1, WIND = 2;
  let svg = '';
  for (let i = 0; i < n; i++) {
    const isExtreme = (i === minIdx || i === maxIdx);
    const kind = isExtreme ? TEMP : (i % 3);
    const x = slotX(i, n);
    const yCurve = tempY(points[i].temp, min, max);
    if (kind === TEMP) {
      const temp = points[i].temp;
      const label = isExtreme ? String(Math.round(temp)) : temp.toFixed(1);
      const colour = i === minIdx ? 'var(--pw-wind)' : i === maxIdx ? 'var(--pw-vermilion)' : 'var(--pw-ink-cream)';
      const fontSize = isExtreme ? 17 : 15;
      const ty = yCurve - CLUSTER_OFFSET_ABOVE_CURVE;
      // Klee One only ships at weight 600; other weights synthesise to system serif fallback.
      svg += `<text x="${x.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" fill="${colour}" font-size="${fontSize}" font-weight="600">${label}°</text>`;
    } else if (kind === COND) {
      const icon = conditionIcon(points[i].condition);
      const ty = yCurve - CLUSTER_OFFSET_ABOVE_CURVE;
      svg += `<text x="${x.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" font-size="20">${icon}</text>`;
    } else if (kind === WIND) {
      const speed = Number(points[i].windSpeed);
      const bearing = Number(points[i].windBearing);
      if (!Number.isFinite(speed) || speed < 1 || !Number.isFinite(bearing)) continue;
      const ty = yCurve - CLUSTER_WIND_OFFSET;
      svg += renderWindBarbAt(x, ty, speed, bearing);
    }
  }
  return svg;
}

/**
 * Render the meteogram section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string|null} HTML string or null if no data.
 */
export function renderMeteogram({ config, forecastData }) {
  const hourly = forecastData?.hourly || [];
  if (hourly.length < 2) return null;

  // Meteogram exposes a horizon toggle (12h ↔ 24h) on the brand mark.
  // The legacy `config.hours` setting still wins when explicitly set in
  // YAML; otherwise we drive horizon from `config.horizon` ('short' |
  // 'long') and translate to a numeric value the chart can consume.
  const explicitHours = Number(config.hours);
  const horizon = config.horizon === 'long' ? 'long' : 'short';
  const hoursForData = Number.isFinite(explicitHours) && explicitHours > 0
    ? Math.max(4, Math.min(48, explicitHours))
    : (horizon === 'long' ? 24 : 12);
  const data = buildMeteogramData(/** @type {Array<Record<string, unknown>>} */ (hourly), hoursForData);
  if (!data) return null;

  const showCloud = config.show_cloud === 'auto' || config.show_cloud === undefined
    ? data.hasCloud
    : Boolean(config.show_cloud);

  // Cloud band lives outside the SVG so it can stretch to the section
  // edges (above the time labels, below the header). Aspect-ratio
  // scaling on the chart SVG would otherwise leave a gap top and
  // bottom.
  const cloudBgHtml = (showCloud && data.hasCloud) ? renderCloudStripBg(data) : '';

  // Drive brand-mark variant from the current hour's condition
  const variant = brandMarkVariant(data.points[0]?.condition || 'sunny', false);

  // Layer order inside SVG: precip → curve → staggered cluster → axis
  // The old condition-icon and wind-arrow renderers are unused under the new layout.
  const layers = [];
  layers.push(renderPrecipBars(data));
  layers.push(renderPrecipLabels(data));
  layers.push(renderTempCurve(data));
  layers.push(renderStaggeredCluster(data));
  // Now-line: 朱 dashed vertical at the first hour, label sits in the axis row
  const nowX = slotX(0, data.n).toFixed(1);
  layers.push(`<line x1="${nowX}" y1="0" x2="${nowX}" y2="${PRECIP_BASELINE_Y}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`);
  layers.push(renderTimeLabels(data));

  const horizonHours = data.n;
  const ariaLabel = `${horizonHours}-hour meteogram showing temperature, condition, wind, and precipitation`;
  const kickerText = horizonHours <= 12 ? 'next twelve hours' : `next ${horizonHours === 24 ? 'twenty-four' : horizonHours} hours`;
  const titleId = uniqueSvgId('pw-meteogram-title');

  const body = `
        <div class="pw-meteogram-chart" aria-labelledby="${titleId}">
          <svg viewBox="0 0 ${VB_WIDTH} ${VB_HEIGHT}" style="width:100%; height:auto" role="img" aria-label="${escapeHtml(ariaLabel)}">
            <title id="${titleId}">${escapeHtml(ariaLabel)}</title>
            ${layers.join('\n')}
          </svg>
        </div>`;

  return renderSectionShell({
    sectionClass: 'pw-meteogram-v2',
    ariaLabel,
    brandVariant: variant,
    kicker: kickerText,
    preContent: cloudBgHtml,
    body,
    proAction: 'meteo-horizon',
    // proInitial reflects the EFFECTIVE rendered horizon (driven by
    // hoursForData), not just `config.horizon`. A user with explicit
    // `hours: 24` and no `horizon` should see the brand mark in the
    // "long" state because the chart is already showing 24 hours —
    // otherwise the first click flips an invisible boolean and the
    // chart appears stuck.
    proInitial: hoursForData >= 18,
    proAriaLabel: 'Toggle 12-hour and 24-hour view',
    pro: config.pro !== false,
  });
}

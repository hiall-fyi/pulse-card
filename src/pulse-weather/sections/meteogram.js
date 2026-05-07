/**
 * @module pulse-weather/sections/meteogram
 * @description Professional time-series weather chart showing temperature,
 * precipitation, cloud cover, and wind simultaneously on a shared time axis.
 * yr.no-style overlay layout: precip bars behind temperature curve.
 * Single SVG, single viewBox, uniform scaling — no preserveAspectRatio="none".
 */

import { tempToColor, conditionIcon, escapeHtml, sanitizeCssValue } from '../weather-primitives.js';

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

// ── ViewBox Constants ───────────────────────────────────────────────

const VB_WIDTH = 300;
const VB_HEIGHT = 180;
const CHART_PAD_X = 8;

// ── Zone Boundaries (Y) ─────────────────────────────────────────────
// yr.no golden layout: curve dominates, precip overlays from bottom,
// wind barbs between curve and time axis

const CURVE_Y_START = 12;
const CURVE_Y_END = 140;
const TIME_LABEL_Y = 172;

// ── Rendering Constants ─────────────────────────────────────────────

const PRECIP_BAR_WIDTH_RATIO = 0.9;
const LABEL_INTERVAL = 3;

// ── 16-point Compass Labels ─────────────────────────────────────────

const COMPASS_16 = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

// ── Core Coordinate Functions ───────────────────────────────────────

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
  const range = max - min || 1;
  return CURVE_Y_START + ((max - temp) / range) * (CURVE_Y_END - CURVE_Y_START);
}

// ── Data Transformation ─────────────────────────────────────────────

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

/**
 * Build meteogram data from hourly forecast.
 * @param {Array<Record<string, unknown>>} hourlyData - Raw hourly forecast entries.
 * @param {number} hours - Number of hours to display (default 24).
 * @returns {{points: Array<object>, n: number, min: number, max: number, minIdx: number, maxIdx: number, maxPrecipMm: number, hasCloud: boolean, hasLayeredCloud: boolean, hasWind: boolean}|null}
 */
/**
 * Build meteogram data from hourly forecast.
 * @param {Array<Record<string, *>>} hourlyData - Raw hourly forecast data.
 * @param {number} [hours] - Number of hours to display.
 * @returns {MeteogramData|null} Processed data or null if insufficient data.
 */
export function buildMeteogramData(hourlyData, hours = 24) {
  const nowMs = Date.now();
  const future = hourlyData.filter((h) => {
    const dt = new Date(String(h.datetime || ''));
    return !isNaN(dt.getTime()) && dt.getTime() >= nowMs - 3600000;
  });

  const raw = future.slice(0, hours);
  if (raw.length < 2) return null;

  const sample = raw[0];
  const hasCloud = 'cloud_cover' in sample;
  const hasLayeredCloud = 'cloud_cover_low' in sample && 'cloud_cover_mid' in sample && 'cloud_cover_high' in sample;
  const hasWind = 'wind_speed' in sample && ('wind_bearing' in sample || 'wind_direction' in sample);

  const points = raw.map((h) => {
    const temp = Number(h.temperature) || 0;
    const precip = Number(h.precipitation_probability) || 0;
    const snowfall = Number(h.snowfall) || 0;
    const rain = Number(h.rain) || 0;
    const showers = Number(h.showers) || 0;
    const condition = String(h.condition || '');
    const precipType = snowfall > 0 || condition === 'snowy' || condition === 'snowy-rainy' ? 'snow' : 'rain';
    const precipMm = precipType === 'snow' ? snowfall : rain + showers;

    return {
      temp,
      precip,
      precipMm,
      precipType,
      condition,
      cloudCover: hasCloud ? Number(h.cloud_cover) || 0 : null,
      cloudLow: hasLayeredCloud ? Number(h.cloud_cover_low) || 0 : null,
      cloudMid: hasLayeredCloud ? Number(h.cloud_cover_mid) || 0 : null,
      cloudHigh: hasLayeredCloud ? Number(h.cloud_cover_high) || 0 : null,
      windSpeed: hasWind ? Number(h.wind_speed) || 0 : null,
      windBearing: hasWind ? Number(h.wind_bearing ?? h.wind_direction) || 0 : null,
      timeLabel: formatHourLabel(String(h.datetime || '')),
      datetime: String(h.datetime || ''),
    };
  });

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

// ── Layer Renderers ─────────────────────────────────────────────────

/**
 * Render cloud cover as full-height background (bottom layer, fills entire chart).
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} SVG string.
 */
function renderCloudStrip(data) {
  const { points, n, hasLayeredCloud } = data;
  let svg = '';
  const halfSlot = n > 1 ? (VB_WIDTH - 2 * CHART_PAD_X) / (n - 1) / 2 : VB_WIDTH / 2;

  for (let i = 0; i < n; i++) {
    const cx = slotX(i, n);
    const x = i === 0 ? 0 : cx - halfSlot;
    const xEnd = i === n - 1 ? VB_WIDTH : cx + halfSlot;
    const w = xEnd - x;

    if (hasLayeredCloud) {
      const high = (Number(points[i].cloudHigh) || 0) / 100 * 0.06;
      const mid = (Number(points[i].cloudMid) || 0) / 100 * 0.08;
      const low = (Number(points[i].cloudLow) || 0) / 100 * 0.1;
      const combined = Math.min(high + mid + low, 0.15);
      svg += `<rect x="${x.toFixed(1)}" y="0" width="${w.toFixed(1)}" height="${VB_HEIGHT}" fill="rgba(180,190,200,1)" opacity="${combined.toFixed(3)}"/>`;
    } else {
      const opacity = (Number(points[i].cloudCover) || 0) / 100 * 0.12;
      svg += `<rect x="${x.toFixed(1)}" y="0" width="${w.toFixed(1)}" height="${VB_HEIGHT}" fill="rgba(180,190,200,1)" opacity="${opacity.toFixed(3)}"/>`;
    }
  }
  return svg;
}

/**
 * Render precipitation bars overlaid in the curve zone (grow up from CURVE_Y_END).
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} SVG string.
 */
function renderPrecipBars(data) {
  const { points, n, maxPrecipMm } = data;
  const maxBarHeight = (CURVE_Y_END - CURVE_Y_START) * 0.7;
  const barW = (VB_WIDTH - 2 * CHART_PAD_X) / (n - 1) * PRECIP_BAR_WIDTH_RATIO;
  // Use actual mm if available, otherwise fall back to probability
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
    const y = CURVE_Y_END - height;
    const color = precipType === 'snow'
      ? 'rgba(200,220,240,0.45)'
      : 'rgba(90,200,250,0.4)';

    svg += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${height.toFixed(1)}" fill="${color}" rx="1"/>`;
  }
  return svg;
}

/**
 * Render precipitation labels at top of each bar.
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} SVG string.
 */
function renderPrecipLabels(data) {
  const { points, n, maxPrecipMm } = data;
  const maxBarHeight = (CURVE_Y_END - CURVE_Y_START) * 0.7;
  const useMm = maxPrecipMm > 0;
  const precipCeil = useMm ? Math.max(maxPrecipMm, 2) : 100;
  let svg = '';

  for (let i = 0; i < n; i++) {
    const { precipMm, precip } = points[i];
    const value = useMm ? precipMm : precip;
    if (value <= 0) continue;

    const x = slotX(i, n);
    const barHeight = (value / precipCeil) * maxBarHeight;
    const y = CURVE_Y_END - barHeight - 2;
    const label = useMm
      ? (precipMm >= 10 ? String(Math.round(precipMm)) : precipMm.toFixed(1))
      : `${Math.round(precip)}%`;
    svg += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="7" font-family="var(--ha-card-header-font-family, inherit)">${escapeHtml(label)}</text>`;
  }
  return svg;
}

/**
 * Render temperature curve with area fill and min/max labels.
 * @param {MeteogramData} data - Meteogram data object.
 * @param {boolean} _showDots - Whether to show dots (reserved for future use).
 * @returns {string} SVG string.
 */
function renderTempCurve(data, _showDots) {
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

  const gradId = 'pw-meteogram-grad';
  const maxColor = tempToColor(max);
  const minColor = tempToColor(min);

  let svg = `<defs><linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">`;
  svg += `<stop offset="0%" stop-color="${sanitizeCssValue(maxColor)}" stop-opacity="0.25"/>`;
  svg += `<stop offset="100%" stop-color="${sanitizeCssValue(minColor)}" stop-opacity="0.03"/>`;
  svg += `</linearGradient></defs>`;
  svg += `<path d="${areaPath}" fill="url(#${gradId})"/>`;
  svg += `<path d="${linePath}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  // Hourly temperature labels above curve (every 2nd hour, starting from index 1 to avoid clipping at left edge)
  for (let i = 1; i < coords.length; i += 2) {
    const tx = coords[i].x;
    const ty = coords[i].y - 2;
    const t1dp = rounded[i];
    const label = t1dp === Math.round(t1dp) ? `${Math.round(t1dp)}\u00B0` : `${t1dp}\u00B0`;
    svg += `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" fill="${sanitizeCssValue(tempToColor(t1dp))}" font-size="9" font-weight="500">${label}</text>`;
  }

  return svg;
}

/**
 * Render weather condition icons below each temperature curve point.
 * @param {MeteogramData} data - Meteogram data object.
 * @returns {string} SVG string.
 */
function renderConditionIcons(data) {
  const { points, n, min, max } = data;
  let svg = '';

  for (let i = 0; i < n; i += 2) {
    const { condition, temp } = points[i];
    if (!condition) continue;

    const x = slotX(i, n);
    const y = tempY(temp, min, max) + 14;
    const icon = conditionIcon(condition);
    svg += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" font-size="12">${icon}</text>`;
  }
  return svg;
}

/**
 * Render wind barbs between precip bars and time labels (yr.no style).
 * @param {MeteogramData} data - Meteogram data object.
 * @param {number} interval - Render every Nth point.
 * @returns {string} SVG string.
 */
function renderWindArrows(data, interval) {
  const { points, n } = data;
  const windY = (CURVE_Y_END + TIME_LABEL_Y) / 2;
  let svg = '';

  for (let i = 0; i < n; i += interval) {
    const { windSpeed, windBearing } = points[i];
    if (windSpeed === null || windBearing === null) continue;
    if (Number(windSpeed) < 1) continue;

    const x = slotX(i, n);
    const bearing = ((Number(windBearing) % 360) + 360) % 360;
    const compassIdx = Math.round(bearing / 22.5) % 16;
    const compassLabel = COMPASS_16[compassIdx];
    const speed = Number(windSpeed);

    const len = 5;
    const strokeColor = 'rgba(255,255,255,0.5)';
    svg += `<g transform="translate(${x.toFixed(1)},${windY.toFixed(1)}) rotate(${bearing.toFixed(0)})" aria-label="Wind from ${escapeHtml(compassLabel)} at ${Math.round(speed)} km/h">`;
    svg += `<line x1="0" y1="${len}" x2="0" y2="${-len}" stroke="${strokeColor}" stroke-width="0.8" stroke-linecap="round"/>`;
    const fullBarbs = Math.floor(speed / 10);
    const halfBarb = speed % 10 >= 5 ? 1 : 0;
    let barbY = -len;
    for (let b = 0; b < fullBarbs && b < 5; b++) {
      svg += `<line x1="0" y1="${barbY.toFixed(1)}" x2="3" y2="${(barbY - 2).toFixed(1)}" stroke="${strokeColor}" stroke-width="0.8" stroke-linecap="round"/>`;
      barbY += 2;
    }
    if (halfBarb) {
      svg += `<line x1="0" y1="${barbY.toFixed(1)}" x2="2" y2="${(barbY - 1.5).toFixed(1)}" stroke="${strokeColor}" stroke-width="0.8" stroke-linecap="round"/>`;
    }
    svg += `</g>`;
  }
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

    svg += `<text x="${x.toFixed(1)}" y="${TIME_LABEL_Y}" text-anchor="${anchor}" fill="var(--primary-text-color, rgba(255,255,255,0.6))" font-size="9" font-family="var(--ha-card-header-font-family, inherit)">${escapeHtml(points[i].timeLabel)}</text>`;
  }
  return svg;
}

// ── Main Render Function ────────────────────────────────────────────

/**
 * Render the meteogram section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string|null} HTML string or null if no data.
 */
export function renderMeteogram({ config, forecastData }) {
  const hourly = forecastData?.hourly || [];
  if (hourly.length < 2) return null;

  const data = buildMeteogramData(/** @type {Array<Record<string, unknown>>} */ (hourly), Math.max(4, Math.min(48, Number(config.hours) || 12)));
  if (!data) return null;

  const windInterval = 1;
  const showDots = config.show_dots !== false;
  const showCloud = config.show_cloud === 'auto' || config.show_cloud === undefined
    ? data.hasCloud
    : Boolean(config.show_cloud);
  const showWind = config.show_wind === 'auto' || config.show_wind === undefined
    ? data.hasWind
    : Boolean(config.show_wind);

  // Layer order: cloud bg → precip bars (behind) → temp area/curve → conditions → wind → labels
  const layers = [];
  if (showCloud && data.hasCloud) layers.push(renderCloudStrip(data));
  layers.push(renderPrecipBars(data));
  layers.push(renderPrecipLabels(data));
  layers.push(renderTempCurve(data, showDots));
  layers.push(renderConditionIcons(data));
  if (showWind && data.hasWind) layers.push(renderWindArrows(data, windInterval));
  layers.push(renderTimeLabels(data));

  const ariaLabel = '24-hour meteogram showing temperature, precipitation, cloud cover, and wind';
  const titleText = `Temperature ranges from ${Math.round(data.min)}\u00B0C to ${Math.round(data.max)}\u00B0C over the next 24 hours`;

  const heightStyle = config.meteogram_height && config.meteogram_height !== 'auto'
    ? ` style="height: ${sanitizeCssValue(String(config.meteogram_height))}"`
    : '';

  return `
    <div class="pw-section pw-meteogram">
      <div class="pw-section-header">
        <span class="pw-section-title" id="pw-meteogram-title">Meteogram</span>
      </div>
      <div class="pw-meteogram-chart" aria-labelledby="pw-meteogram-title"${heightStyle}>
        <svg viewBox="0 0 ${VB_WIDTH} ${VB_HEIGHT}" style="width:100%; height:auto" role="img" aria-label="${escapeHtml(ariaLabel)}">
          <title>${escapeHtml(titleText)}</title>
          ${layers.join('\n')}
        </svg>
      </div>
    </div>`;
}

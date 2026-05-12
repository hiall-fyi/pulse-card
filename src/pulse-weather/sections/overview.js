/**
 * @module pulse-weather/sections/overview
 * @description Hero temperature, atmospheric FX, stats grid, UV/pressure bars,
 * contextual weather summary, day progress arc, and tier-coloured stats.
 */

import { tempToColor, uvColor, windTierColor, beaufort, compassLabel, escapeHtml, sanitizeCssValue, formatCondition, statHtml, cloudCoverColor, dewPointComfortColor, getSkyTheme, SKY_THEMES, uniqueSvgId, futureHourly as filterFutureHourly } from '../weather-primitives.js';
import { intensityRatio, tensionGlow, tensionVignette } from '../../shared/visual-tension.js';
import { ATMOS_CE_TIER_MAP } from './atmosphere.js';
import { LIFTED_INDEX_TIERS } from '../constants.js';

/**
 * Condition-to-gradient mapping for atmospheric backgrounds.
 * @type {Readonly<Record<string, string>>}
 */
const CONDITION_GRADIENTS = {
  'sunny': 'linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)',
  'clear-night': 'linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)',
  'partlycloudy': 'linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)',
  'cloudy': 'linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)',
  'rainy': 'linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)',
  'pouring': 'linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)',
  'snowy': 'linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)',
  'snowy-rainy': 'linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)',
  'hail': 'linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)',
  'lightning': 'linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)',
  'lightning-rainy': 'linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)',
  'fog': 'linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)',
  'windy': 'linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)',
  'windy-variant': 'linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)',
  'exceptional': 'linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)',
};

const DEFAULT_GRADIENT = 'linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)';

/**
 * Insight tier colour map for visibility and dew-point comfort labels.
 * @type {Readonly<Record<string, string>>}
 */
const INSIGHT_TIER_COLORS = /** @type {const} */ ({
  dry: '#30d158', comfortable: '#30d158',
  slightly_humid: '#ffd60a', humid: '#ff9f0a', oppressive: '#ff453a',
  clear: '#30d158', good: '#30d158',
  moderate: '#ffd60a', poor: '#ff9f0a', fog: '#ff453a',
});

// ── Pure Tier Colour Functions ───────────────────────────────────────
// cloudCoverColor moved to weather-primitives.js for shared access

/**
 * Map relative humidity to NWS-aligned comfort tier colour.
 * @param {number} rh - Relative humidity 0–100%.
 * @returns {string} Hex colour.
 */
export function humidityColor(rh) {
  if (rh <= 30) return '#5ac8fa';
  if (rh <= 60) return '#30d158';
  if (rh <= 80) return '#ff9f0a';
  return '#ff453a';
}

// dewPointComfortColor moved to weather-primitives.js for shared access

/**
 * Map 3h pressure change to WMO SYNOP tendency description.
 * @param {number|null|undefined} change3h - 3h pressure change in hPa.
 * @param {string} trendState - Sensor state: 'rising'|'falling'|'steady'.
 * @returns {string} WMO tendency description or 'Press' fallback.
 */
export function pressureTendencyLabel(change3h, trendState) {
  if (change3h === null || change3h === undefined) return 'Press';
  const abs = Math.abs(Number(change3h));
  if (abs <= 1.0) return 'Press';
  const dir = trendState === 'rising' ? 'Rising' : trendState === 'falling' ? 'Falling' : 'Press';
  if (abs > 3.0) return `${dir} rapidly`;
  return dir;
}

/**
 * Build contextual weather summary sentence with NWS terminology.
 * @param {object} params - Summary input data.
 * @param {number} params.precipNow - Current precipitation value.
 * @param {string} params.precipLabel - Pre-built precipitation label.
 * @param {Array<Record<string, unknown>>} params.slots - Hourly forecast slots.
 * @param {number} params.windSpeed - Wind speed in km/h.
 * @param {number} params.uvIndex - UV index value.
 * @param {string} params.stabilityState - Atmos CE stability_assessment state.
 * @returns {{icon: string, text: string}} Summary icon and text.
 */
export function buildWeatherSummary({ precipNow, precipLabel, slots, windSpeed, uvIndex, stabilityState }) {
  if (precipNow > 0) return { icon: '\u{1F327}', text: precipLabel };
  const next2h = slots.slice(0, 2);
  for (const h of next2h) {
    if ((Number(h.precipitation_probability) || 0) >= 60) {
      const type = Number(h.snowfall) > 0 ? 'Snow' : 'Rain';
      return { icon: '\u{1F327}', text: `${type} likely within ${next2h.indexOf(h) + 1}h` };
    }
  }
  for (const h of next2h) {
    if ((Number(h.precipitation_probability) || 0) >= 40) {
      const type = Number(h.snowfall) > 0 ? 'Snow' : 'Rain';
      return { icon: '\u{1F327}', text: `${type} possible within ${next2h.indexOf(h) + 1}h` };
    }
  }
  const stormTiers = ['slight', 'enhanced', 'moderate', 'high'];
  if (stabilityState && stormTiers.includes(stabilityState)) {
    const peakCape = Math.max(...next2h.map((h) => Number(h.cape) || 0));
    if (peakCape > 1000) return { icon: '\u26A1', text: `Thunderstorms possible \u2014 CAPE ${peakCape}J/kg` };
  }
  if (windSpeed >= 39) return { icon: '\u{1F4A8}', text: `Strong winds ${Math.round(windSpeed)} km/h` };
  if (uvIndex >= 6) return { icon: '\u2600\uFE0F', text: 'High UV \u2014 protection needed' };
  let clearHours = 0;
  for (const h of slots) {
    if ((Number(h.precipitation_probability) || 0) < 20) clearHours++;
    else break;
  }
  if (clearHours >= 2) return { icon: '\u2713', text: `Clear for the next ${clearHours}h` };
  return { icon: '', text: '' };
}

/**
 * Build SVG path data for hourly CAPE sparkline.
 * @param {Array<Record<string, unknown>>} slots - Hourly forecast slots with cape values.
 * @param {number} width - SVG width in pixels.
 * @param {number} height - SVG height in pixels.
 * @returns {{svgPath: string, areaPath: string, peakValue: number, peakIndex: number, maxCape: number}} Sparkline data.
 */
export function buildCapeSparklineSvg(slots, width, height) {
  // Coerce NaN/Infinity to 0 before Math.max — Math.max(...[NaN]) is NaN
  // which poisons every downstream coordinate.
  const values = slots.map((h) => {
    const n = Number(h.cape);
    return Number.isFinite(n) ? n : 0;
  });
  const maxCape = Math.max(...values, 300);
  const peakValue = Math.max(...values);
  const peakIndex = values.indexOf(peakValue);
  const points = values.map((v, i) => ({
    x: (i / Math.max(slots.length - 1, 1)) * width,
    y: height - (v / maxCape) * height,
  }));
  const svgPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPath = `${svgPath} L${width},${height} L0,${height} Z`;
  return { svgPath, areaPath, peakValue, peakIndex, maxCape };
}

/**
 * Build precipitation type label with snow-first ordering.
 * @param {number} precipNow - Total precipitation value.
 * @param {string} precipUnit - Total precipitation unit.
 * @param {number} rainNow - Rain value.
 * @param {string} rainUnit - Rain unit.
 * @param {number} showersNow - Showers value.
 * @param {string} showersUnit - Showers unit.
 * @param {number} snowfallNow - Snowfall value.
 * @param {string} snowfallUnit - Snowfall unit.
 * @returns {string} Escaped HTML label.
 */
export function buildPrecipLabel(precipNow, precipUnit, rainNow, rainUnit, showersNow, showersUnit, snowfallNow, snowfallUnit) {
  const types = [];
  if (snowfallNow > 0) types.push({ name: 'Snow', value: snowfallNow, unit: snowfallUnit });
  if (rainNow > 0) types.push({ name: 'Rain', value: rainNow, unit: rainUnit });
  if (showersNow > 0) types.push({ name: 'Showers', value: showersNow, unit: showersUnit });

  if (types.length > 0) {
    const parts = types.map((t) => `${escapeHtml(t.name)} ${escapeHtml(t.value.toFixed(1))} ${escapeHtml(t.unit)}`);
    return `${parts.join(' \u00b7 ')} now`;
  }
  if (precipNow > 0) {
    return `Precipitation \u2014 next 12h \u00b7 ${escapeHtml(precipNow.toFixed(1))} ${escapeHtml(precipUnit)} now`;
  }
  return 'Precipitation \u2014 next 12h';
}


/**
 * Format a Date as HH:MM string, or empty string for null/invalid dates.
 * @param {Date|null} date - Date to format.
 * @returns {string} HH:MM string or empty string.
 */
function fmtTime(date) {
  if (!date || isNaN(date.getTime())) return '';
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}


/**
 * Render the overview section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string} HTML string.
 */
export function renderOverview({ hass, config: _config, discovery, weatherEntity, forecastData }) {
  const attrs = weatherEntity.attributes;
  const ce = discovery.atmosCe;
  const condition = weatherEntity.state || 'sunny';

  const isNight = condition === 'clear-night'
    || (hass.states['sun.sun']?.state === 'below_horizon');

  /**
   * Read a value from Atmos CE sensor first, then fall back to weather entity attribute.
   * @param {string} sensorKey - Atmos CE sensor key.
   * @param {string} attrKey - Weather entity attribute key.
   * @returns {number}
   */
  function val(sensorKey, attrKey) {
    if (ce[sensorKey]) {
      const v = Number(hass.states[ce[sensorKey]]?.state);
      if (!isNaN(v)) return v;
    }
    return Number(attrs[attrKey] ?? 0) || 0;
  }

  const temp = val('temperature', 'temperature');
  const feelsLike = val('apparent_temperature', 'apparent_temperature') || temp;
  const humidity = val('humidity', 'humidity');
  const windSpeed = val('wind_speed', 'wind_speed');
  const windBearing = val('wind_direction', 'wind_bearing');
  const windGusts = val('wind_gusts', 'wind_gusts');
  const dewPoint = val('dew_point', 'dew_point');
  const visibility = val('visibility', 'visibility');
  const pressure = val('pressure', 'pressure');

  /**
   * Read unit_of_measurement from Atmos CE sensor, fallback to default.
   * @param {string} sensorKey
   * @param {string} fallback
   * @returns {string}
   */
  function unit(sensorKey, fallback) {
    if (ce[sensorKey]) {
      return /** @type {string} */ (hass.states[ce[sensorKey]]?.attributes?.unit_of_measurement || fallback);
    }
    return fallback;
  }

  const tempUnit = unit('temperature', '°C');
  const visUnit = unit('visibility', 'km');
  const pressUnit = unit('pressure', 'hPa');
  const dewUnit = unit('dew_point', '°C');
  // Resolve today's L / H. Preference order:
  //   1. Daily forecast slot [0] — HA's standard shape exposes
  //      `templow` (day min) + `temperature` (day max) for daily type.
  //   2. Scan hourly forecast for today's entries and take min/max.
  //   3. Legacy attrs.forecast (only populated on a few older
  //      integrations; hourly attrs flat-out have no templow and
  //      `temperature` ≈ current, which causes L === H bug).
  //   4. Collapse to current temp when nothing usable — better than
  //      fabricating a ±5° range that misleads users.
  const dailyForecast = /** @type {Array<Record<string, unknown>>|undefined} */ (forecastData?.daily);
  const hourlyForecast = /** @type {Array<Record<string, unknown>>|undefined} */ (forecastData?.hourly);
  const legacyForecast = /** @type {Array<Record<string, unknown>>|undefined} */ (attrs.forecast);

  /** @type {number} */
  let tempLow = temp;
  /** @type {number} */
  let tempHigh = temp;

  if (dailyForecast && dailyForecast.length > 0) {
    // Daily forecast shape: templow = min, temperature = max for that day.
    const d0 = dailyForecast[0];
    const dLow = Number(d0.templow);
    const dHigh = Number(d0.temperature);
    if (Number.isFinite(dLow) && Number.isFinite(dHigh)) {
      tempLow = Math.min(dLow, dHigh);
      tempHigh = Math.max(dLow, dHigh);
    }
  } else if (hourlyForecast && hourlyForecast.length > 0) {
    // Derive today's window from hourly forecasts. Scan the next
    // 24 slots (or until we cross midnight) and pick min / max of
    // the `temperature` field.
    const now = Date.now();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const endMs = endOfDay.getTime();
    let mn = Infinity;
    let mx = -Infinity;
    for (const slot of hourlyForecast.slice(0, 24)) {
      const slotTs = Date.parse(String(slot.datetime ?? ''));
      if (Number.isFinite(slotTs) && (slotTs < now || slotTs > endMs)) continue;
      const v = Number(slot.temperature);
      if (!Number.isFinite(v)) continue;
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
    if (Number.isFinite(mn) && Number.isFinite(mx) && mn !== mx) {
      tempLow = Math.min(mn, temp);
      tempHigh = Math.max(mx, temp);
    }
  } else if (legacyForecast && legacyForecast.length > 0) {
    const f0 = legacyForecast[0];
    const fLow = Number(f0.templow);
    const fHigh = Number(f0.temperature);
    if (Number.isFinite(fLow) && Number.isFinite(fHigh)) {
      tempLow = Math.min(fLow, fHigh);
      tempHigh = Math.max(fLow, fHigh);
    }
  }

  // UV from Atmos CE or weather entity
  const uvSensor = discovery.atmosCe.uv_index;
  const uvIndex = uvSensor
    ? Number(hass.states[uvSensor]?.state) || 0
    : Number(attrs.uv_index ?? 0);

  // Real-time precipitation from Atmos CE
  const precipSensor = ce.precipitation ? hass.states[ce.precipitation] : null;
  const precipNow = precipSensor ? Number(precipSensor.state) || 0 : 0;
  const precipUnit = /** @type {string} */ (precipSensor?.attributes?.unit_of_measurement || 'mm');

  // Precipitation type breakdown
  const rainSensor = ce.rain ? hass.states[ce.rain] : null;
  const showersSensor = ce.showers ? hass.states[ce.showers] : null;
  const snowfallSensor = ce.snowfall ? hass.states[ce.snowfall] : null;
  const rainNow = rainSensor ? Number(rainSensor.state) || 0 : 0;
  const showersNow = showersSensor ? Number(showersSensor.state) || 0 : 0;
  const snowfallNow = snowfallSensor ? Number(snowfallSensor.state) || 0 : 0;
  const rainUnit = /** @type {string} */ (rainSensor?.attributes?.unit_of_measurement || 'mm');
  const showersUnit = /** @type {string} */ (showersSensor?.attributes?.unit_of_measurement || 'mm');
  const snowfallUnit = /** @type {string} */ (snowfallSensor?.attributes?.unit_of_measurement || 'cm');

  // Clear-sky UV
  const uvClearSkySensor = ce.uv_index_clear_sky ? hass.states[ce.uv_index_clear_sky] : null;
  const uvClearSky = uvClearSkySensor ? Number(uvClearSkySensor.state) || 0 : 0;

  // Derived insight sensors
  const dewComfortSensor = ce.dew_point_comfort ? hass.states[ce.dew_point_comfort] : null;
  const visibilityCatSensor = ce.visibility_category ? hass.states[ce.visibility_category] : null;
  const feelsContextSensor = ce.feels_like_context ? hass.states[ce.feels_like_context] : null;
  const pressureTrendSensor = ce.pressure_trend ? hass.states[ce.pressure_trend] : null;

  // Golden hour / blue hour sensors for phase-aware day arc
  const goldenAmStart = ce.golden_hour_morning_start ? new Date(String(hass.states[ce.golden_hour_morning_start]?.state)) : null;
  const goldenPmStart = ce.golden_hour_evening_start ? new Date(String(hass.states[ce.golden_hour_evening_start]?.state)) : null;
  const goldenPmEnd = ce.golden_hour_evening_end ? new Date(String(hass.states[ce.golden_hour_evening_end]?.state)) : null;
  const blueAmRaw = ce.blue_hour_morning_start ? new Date(String(hass.states[ce.blue_hour_morning_start]?.state)) : null;
  const bluePmRaw = ce.blue_hour_evening_start ? new Date(String(hass.states[ce.blue_hour_evening_start]?.state)) : null;

  // Cloud cover from Atmos CE
  let cloudCover = null;
  if (discovery.atmosCe.cloud_cover) {
    cloudCover = {
      total: Number(hass.states[discovery.atmosCe.cloud_cover]?.state) || 0,
      low: Number(hass.states[discovery.atmosCe.cloud_cover_low]?.state) || 0,
      mid: Number(hass.states[discovery.atmosCe.cloud_cover_mid]?.state) || 0,
      high: Number(hass.states[discovery.atmosCe.cloud_cover_high]?.state) || 0,
    };
  }

  // ── New sensor reads (Task 2.2) ─────────────────────────────────
  const freezeSensor = ce.freezing_level_height ? hass.states[ce.freezing_level_height] : null;
  const freezeLevel = freezeSensor ? Number(freezeSensor.state) || 0 : 0;

  const stabilitySensor = ce.stability_assessment ? hass.states[ce.stability_assessment] : null;
  const stabilityState = stabilitySensor?.state || '';

  const liSensor = ce.lifted_index ? hass.states[ce.lifted_index] : null;
  const liValue = liSensor ? Number(liSensor.state) || 0 : 0;

  const gradient = sanitizeCssValue(CONDITION_GRADIENTS[condition] || DEFAULT_GRADIENT);

  // Temperature arc position
  const range = Math.max(tempHigh - tempLow, 1);
  const arcPct = Math.max(0, Math.min(100, ((temp - tempLow) / range) * 100));

  // Compass direction (16-point via compassLabel, 8-point fallback)
  const dirLabel = compassLabel(windBearing);

  // FX layer
  const fxAttr = `data-condition="${escapeHtml(condition)}" data-night="${isNight}" data-cloud='${escapeHtml(JSON.stringify(cloudCover || ''))}'`;

  // ── Temperature tension ───────────────────────────────────────────
  const hotIntensity = intensityRatio(temp, 20, 42);
  const coldIntensity = intensityRatio(temp, 15, -10);
  const tempIntensity = Math.max(hotIntensity, coldIntensity);
  const tempColor = tempToColor(temp);
  const heroGlow = tempIntensity > 0.05 ? `text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${tensionGlow(tempColor, tempIntensity)}` : 'text-shadow: 0 2px 20px rgba(0,0,0,0.3)';
  const vignetteGrad = tensionVignette(tempIntensity);
  const vignetteHtml = vignetteGrad ? `<div class="pw-tension-vignette" style="background: ${sanitizeCssValue(vignetteGrad)}"></div>` : '';

  // ── Snowfall badge ─────────────────────────────────────────────────
  const snowBadgeHtml = snowfallNow > 0
    ? `<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${escapeHtml(snowfallNow.toFixed(1))} ${escapeHtml(snowfallUnit)}</div>`
    : '';

  // ── Feels like context ────────────────────────────────────────────
  const feelsContext = feelsContextSensor?.state || '';
  const feelsDiff = feelsContextSensor?.attributes?.difference;
  let feelsContextHtml = '';
  if (feelsContext === 'wind_chill' && feelsDiff !== null && feelsDiff !== undefined) {
    feelsContextHtml = `<div class="pw-feels-context">Wind chill ${escapeHtml(String(Math.round(Number(feelsDiff))))}\u00b0</div>`;
  } else if (feelsContext === 'heat_index' && feelsDiff !== null && feelsDiff !== undefined) {
    feelsContextHtml = `<div class="pw-feels-context">Heat index +${escapeHtml(String(Math.round(Number(feelsDiff))))}\u00b0</div>`;
  }

  // ── Stability quick badge (Task 3) ────────────────────────────────
  const badgeTiers = ['marginal', 'slight', 'enhanced', 'moderate', 'high'];
  let stabilityBadgeHtml = '';
  if (stabilityState && badgeTiers.includes(stabilityState)) {
    const tierInfo = ATMOS_CE_TIER_MAP[stabilityState];
    if (tierInfo) {
      const badgeColor = sanitizeCssValue(tierInfo.color);
      let badgeText = `\u26A1 ${escapeHtml(tierInfo.label)}`;
      // LI value in badge — only when LI itself indicates instability (negative = unstable)
      if (liSensor && liValue < 0) {
        const liTier = LIFTED_INDEX_TIERS.find((t) => liValue >= t.min) || LIFTED_INDEX_TIERS[LIFTED_INDEX_TIERS.length - 1];
        badgeText += ` \u00b7 <span style="color:${sanitizeCssValue(liTier.color)}">LI ${escapeHtml(String(liValue))}</span>`;
      }
      stabilityBadgeHtml = ` <span class="pw-stability-badge" style="background:${badgeColor}33; color:${badgeColor}">${badgeText}</span>`;
    }
  }

  // ── Stats row computed values ─────────────────────────────────────
  const visCat = visibilityCatSensor?.state || '';
  const visCatColor = visCat && !['unavailable', 'unknown'].includes(visCat)
    ? INSIGHT_TIER_COLORS[visCat] || ''
    : '';

  const dewComfort = dewComfortSensor?.state || '';
  const dewColor = dewComfort && !['unavailable', 'unknown'].includes(dewComfort)
    ? INSIGHT_TIER_COLORS[dewComfort] || ''
    : '';

  const trendSymbol = pressureTrendSensor?.attributes?.trend_symbol || '';
  const trendColor = pressureTrendSensor?.state === 'rising' ? '#30d158'
    : pressureTrendSensor?.state === 'falling' ? '#ff9f0a'
    : pressureTrendSensor?.state === 'steady' ? '#5ac8fa' : '';
  const showClearSky = uvClearSkySensor && Math.abs(uvClearSky - uvIndex) >= 0.5;

  // ── Pressure tendency label (Task 9.3) ────────────────────────────
  const change3h = pressureTrendSensor?.attributes?.change_3h;
  let pressLabel = pressureTendencyLabel(
    change3h !== null && change3h !== undefined ? Number(change3h) : null,
    pressureTrendSensor?.state || '',
  );
  // Fallback: if change_3h unavailable but sensor state is valid, use state directly
  if (pressLabel === 'Press' && pressureTrendSensor?.state) {
    const st = pressureTrendSensor.state;
    if (st === 'rising') pressLabel = 'Rising';
    else if (st === 'falling') pressLabel = 'Falling';
  }

  // Pressure stat colour — trend-based with neutral fallback
  const pressColor = trendColor || (pressureTrendSensor ? '#5ac8fa' : '');

  // ── Wind consolidation (Task 7) ───────────────────────────────────
  const windColor = windTierColor(windSpeed);
  const bft = beaufort(windSpeed);
  const showGust = windGusts > windSpeed + 5;
  const gustBold = windSpeed > 0 && windGusts / windSpeed > 1.5;
  const gustStr = showGust
    ? (gustBold ? ` / <b>${escapeHtml(Math.round(windGusts))}</b>` : ` / ${escapeHtml(Math.round(windGusts))}`)
    : '';
  // Number(undefined) === NaN makes CSS drop the whole transform; use the
  // || 0 fallback so the compass still renders as N rather than unrotated.
  const compassSvg = `<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(windBearing) || 0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${sanitizeCssValue(windColor)}" opacity="0.8"/></svg>`;
  const windValue = `${escapeHtml(Math.round(windSpeed))}${gustStr} ${compassSvg}${escapeHtml(dirLabel)}`;

  // ── Dynamic temp arc (Task 4) ─────────────────────────────────────
  const arcGradient = `linear-gradient(to right, ${sanitizeCssValue(tempToColor(tempLow))}, ${sanitizeCssValue(tempToColor(tempHigh))})`;

  // Freezing level marker on temp arc (Task 4.3)
  let freezeMarkerHtml = '';
  if (freezeSensor && freezeLevel < 5000 && tempLow <= 0) {
    const freezePct = Math.max(0, Math.min(100, ((0 - tempLow) / range) * 100));
    const frzUnit = /** @type {string} */ (freezeSensor?.attributes?.unit_of_measurement || 'm');
    freezeMarkerHtml = `<div class="pw-arc-freeze" style="left:${Number(freezePct)}%">
            <div class="pw-arc-freeze-label">\u2744 ${escapeHtml(String(Math.round(freezeLevel)))}${escapeHtml(frzUnit)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`;
  }

  // ── Phase-aware day arc ─────────────────────────────────────────
  let dayArcHtml = '';
  const sunEntity = hass.states['sun.sun'];
  if (sunEntity) {
    const nextRising = sunEntity.attributes?.next_rising;
    const nextSetting = sunEntity.attributes?.next_setting;
    if (nextRising && nextSetting) {
      const nextRise = new Date(/** @type {string} */ (nextRising));
      const nextSet = new Date(/** @type {string} */ (nextSetting));
      const now = new Date();

      // Derive today's sunrise/sunset from next_rising/next_setting.
      // Same logic as astro.js — next_rising is tomorrow when sun is up.
      let todaySunrise = nextRise.getTime() > now.getTime()
        ? new Date(nextRise.getTime() - 86400000)
        : nextRise;
      let todaySunset = nextSet.getTime() > now.getTime()
        ? nextSet
        : new Date(nextSet.getTime() - 86400000);
      if (todaySunset.getTime() > todaySunrise.getTime() + 86400000) {
        todaySunset = new Date(todaySunset.getTime() - 86400000);
      }
      if (todaySunrise.getTime() > todaySunset.getTime()) {
        todaySunrise = new Date(todaySunrise.getTime() - 86400000);
      }

      const themeIdx = getSkyTheme(now, todaySunrise, todaySunset, goldenAmStart, goldenPmEnd, blueAmRaw, bluePmRaw, goldenPmStart);
      const theme = SKY_THEMES[themeIdx];
      const isDaytime = sunEntity.state === 'above_horizon';

      // Phase-aware fill percentage — progress within current phase boundaries
      let fillPct = 0;
      const srMs = todaySunrise.getTime();
      const ssMs = todaySunset.getTime();
      const nowMs = now.getTime();
      if (themeIdx === 3) {
        // Daytime: sunrise → sunset
        const dayLength = ssMs - srMs;
        if (dayLength > 0) fillPct = Math.max(0, Math.min(100, ((nowMs - srMs) / dayLength) * 100));
      } else if (themeIdx === 1) {
        // Blue Hour AM
        const start = blueAmRaw ? blueAmRaw.getTime() : srMs - 3600000;
        const end = goldenAmStart ? goldenAmStart.getTime() : srMs - 1800000;
        const dur = end - start;
        if (dur > 0) fillPct = Math.max(0, Math.min(100, ((nowMs - start) / dur) * 100));
      } else if (themeIdx === 2) {
        // Golden Hour AM
        const start = goldenAmStart ? goldenAmStart.getTime() : srMs - 1800000;
        const dur = srMs - start;
        if (dur > 0) fillPct = Math.max(0, Math.min(100, ((nowMs - start) / dur) * 100));
      } else if (themeIdx === 4) {
        // Golden Hour PM
        const end = goldenPmEnd ? goldenPmEnd.getTime() : ssMs + 1800000;
        const dur = end - ssMs;
        if (dur > 0) fillPct = Math.max(0, Math.min(100, ((nowMs - ssMs) / dur) * 100));
      } else if (themeIdx === 5) {
        // Blue Hour PM
        const start = goldenPmEnd ? goldenPmEnd.getTime() : ssMs + 1800000;
        const end = goldenPmEnd ? goldenPmEnd.getTime() + 3600000 : (bluePmRaw ? bluePmRaw.getTime() + 1800000 : ssMs + 3600000);
        const dur = end - start;
        if (dur > 0) fillPct = Math.max(0, Math.min(100, ((nowMs - start) / dur) * 100));
      }
      // themeIdx 0 (Night): fillPct stays 0

      // Phase-aware fill colour
      let fillStyle = '';
      switch (themeIdx) {
        case 1: fillStyle = `background: #5ac8fa`; break;
        case 2: fillStyle = `background: #ff9f0a`; break;
        case 3: fillStyle = `background: linear-gradient(to right, #ff9f0a, #ffd60a)`; break;
        case 4: fillStyle = `background: #ff6b35`; break;
        case 5: fillStyle = `background: #5ac8fa`; break;
        // default (Night): fillStyle stays empty — CSS default applies
      }

      // Phase-aware labels — mirror astro.js horizon label logic
      let leftLabel = '';
      let rightLabel = '';
      let labelColor = '';
      switch (themeIdx) {
        case 0: // Night — no labels
          break;
        case 1: // Blue Hour AM
          leftLabel = fmtTime(blueAmRaw);
          rightLabel = fmtTime(goldenAmStart);
          labelColor = '#5ac8fa';
          break;
        case 2: // Golden Hour AM
          leftLabel = fmtTime(goldenAmStart);
          rightLabel = fmtTime(todaySunrise);
          labelColor = '#ff9f0a';
          break;
        case 3: // Daytime
          leftLabel = fmtTime(todaySunrise);
          rightLabel = fmtTime(todaySunset);
          break;
        case 4: // Golden Hour PM
          leftLabel = fmtTime(goldenPmStart || todaySunset);
          rightLabel = fmtTime(goldenPmEnd);
          labelColor = '#ff6b35';
          break;
        case 5: // Blue Hour PM
          leftLabel = fmtTime(bluePmRaw);
          rightLabel = fmtTime(goldenPmEnd ? new Date(goldenPmEnd.getTime() + 3600000) : null);
          labelColor = '#5ac8fa';
          break;
      }

      const markerLeft = fillPct;
      const markerIcon = isDaytime ? '' : (themeIdx === 0 ? '\u{1F319}' : '');
      const arcOpacity = themeIdx === 0 ? '0.7' : '1';
      const markerStyle = `left:${Number(markerLeft)}%; background:${sanitizeCssValue(theme.labelColor)}; box-shadow: 0 0 6px ${sanitizeCssValue(theme.labelColor)}66`;
      const labelStyle = labelColor ? ` style="color:${sanitizeCssValue(labelColor)}"` : '';

      dayArcHtml = `
      <div class="pw-day-arc" style="opacity:${arcOpacity}">
        <span class="pw-day-arc-label"${labelStyle}>${escapeHtml(leftLabel)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(fillPct)}%${fillStyle ? '; ' + fillStyle : ''}"></div>
          <div class="pw-day-arc-marker" style="${markerStyle}">${markerIcon}</div>
        </div>
        <span class="pw-day-arc-label"${labelStyle}>${escapeHtml(rightLabel)}</span>
      </div>`;
    }
  }

  // ── Hourly data processing ────────────────────────────────────────
  let precipBarHtml = '';
  let capeBarHtml = '';
  let comfortBarHtml = '';
  let summaryHtml = '';
  const hourly = forecastData?.hourly || [];
  if (hourly.length > 0) {
    const now = new Date();
    // Shared helper: include current hour (1h buffer), drop unparseable
    // datetimes. Matches forecast.js and meteogram.js so the "next" hour
    // shown across sections is consistent.
    const futureHourly = filterFutureHourly(
      /** @type {Array<Record<string, *>>} */ (hourly),
      now,
    );
    const slots = futureHourly.slice(0, 12);
    const hasAnyPrecip = slots.some((h) => Number(h.precipitation_probability) > 0);

    // ── Weather summary (Task 6) ──────────────────────────────────
    const precipLabel = buildPrecipLabel(precipNow, precipUnit, rainNow, rainUnit, showersNow, showersUnit, snowfallNow, snowfallUnit);
    const summary = buildWeatherSummary({
      precipNow, precipLabel, slots, windSpeed, uvIndex, stabilityState,
    });
    if (summary.text) {
      summaryHtml = `
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">${escapeHtml(summary.icon)}</span> ${escapeHtml(summary.text)}
      </div>`;
    }

    // ── Precipitation bar (Task 10) ─────────────────────────────────
    if (hasAnyPrecip) {
      const slotHtml = slots.map((h) => {
        const prob = Math.min(100, Math.max(0, Number(h.precipitation_probability) || 0));
        const hourSnow = Number(h.snowfall) || 0;
        const hourRain = (Number(h.rain) || 0) + (Number(h.showers) || 0);
        const isSnow = hourSnow > 0;
        const isMixed = isSnow && hourRain > 0;
        if (isMixed) {
          const total = hourSnow + hourRain;
          const snowPct = Math.round(prob * hourSnow / total);
          const rainPct = prob - snowPct;
          return `<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number(rainPct)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number(snowPct)}%"></div></div>`;
        }
        const fillClass = isSnow ? 'pulse-precip-fill pw-precip-snow' : 'pulse-precip-fill';
        return `<div class="pulse-precip-slot"><div class="${fillClass}" style="height: ${prob}%"></div></div>`;
      }).join('');



      // Time markers (Task 10.2)
      const midSlot = slots[Math.floor(slots.length / 2)];
      const midHours = midSlot ? `+${Math.floor(slots.length / 2)}h` : '';

      precipBarHtml = `
      <div style="position: relative; z-index: 2; margin: 16px 20px 0;">
        <div class="pw-precip-label">${precipLabel}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${slotHtml}</div>
        <div class="pw-precip-times"><span>Now</span><span>${escapeHtml(midHours)}</span><span>+${escapeHtml(String(slots.length))}h</span></div>
      </div>`;
    }

    // ── CAPE sparkline (Task 11) ────────────────────────────────────
    const hasCapeData = slots.some((h) => Number(h.cape) > 300);
    if (hasCapeData) {
      const sparkW = 200;
      const sparkH = 24;
      const spark = buildCapeSparklineSvg(slots, sparkW, sparkH);
      const peakX = (spark.peakIndex / Math.max(slots.length - 1, 1)) * sparkW;
      const peakLabel = spark.peakValue >= 1000
        ? `${(spark.peakValue / 1000).toFixed(1)}k`
        : String(Math.round(spark.peakValue));
      const peakDt = slots[spark.peakIndex]?.datetime
        ? new Date(/** @type {string} */ (slots[spark.peakIndex].datetime))
        : null;
      const peakTime = peakDt
        ? `${String(peakDt.getHours()).padStart(2, '0')}:${String(peakDt.getMinutes()).padStart(2, '0')}`
        : '';

      const capeGradId = uniqueSvgId('pw-cape-grad');
      capeBarHtml = `
      <div style="position: relative; z-index: 2; margin: 4px 20px 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="${sparkH}" viewBox="0 0 ${sparkW} ${sparkH}" preserveAspectRatio="none">
            <defs>
              <linearGradient id="${capeGradId}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${spark.areaPath}" fill="url(#${capeGradId})"/>
            <path d="${spark.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${spark.peakValue > 0 ? `<div class="pw-cape-peak" style="left:${Number(peakX)}px">${escapeHtml(peakLabel)} ${escapeHtml(peakTime)}</div>` : ''}
        </div>
      </div>`;
    }

    // ── Dew point comfort timeline (Task 12) ────────────────────────
    const hasDewData = slots.some((h) => h.dew_point !== undefined && h.dew_point !== null);
    if (hasDewData) {
      const comfortSlots = slots.map((h) => {
        const dp = Number(h.dew_point) || 0;
        return `<div class="pw-comfort-slot" style="background:${sanitizeCssValue(dewPointComfortColor(dp))}"></div>`;
      }).join('');
      comfortBarHtml = `
      <div style="position: relative; z-index: 2; margin: 2px 20px 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${comfortSlots}</div>
      </div>`;
    }
  }

  // ── Stats rows (Task 7, 8, 9) ─────────────────────────────────────
  // Row 1: Wind (combined), Feels, Vis, Dew
  const feelsColor = tempToColor(feelsLike);
  const cloudColor = cloudCover !== null ? cloudCoverColor(cloudCover.total) : '';
  const humidColor = humidityColor(humidity);

  // Pressure value — number + unit + trend symbol
  const pressValue = `${escapeHtml(Math.round(pressure))} ${escapeHtml(pressUnit)}${trendSymbol ? ` <span style="color:${sanitizeCssValue(trendColor)}">${escapeHtml(trendSymbol)}</span>` : ''}`;

  // UV value with clear-sky comparison
  const uvValue = `${escapeHtml(Math.round(uvIndex))}${showClearSky ? ` <span style="opacity:0.5">/ ${escapeHtml(String(Math.round(uvClearSky)))}</span>` : ''}`;

  return `
    <div class="pw-section pw-atmosphere" style="background: ${gradient}; min-height: 280px;">
      ${vignetteHtml}
      <div class="pw-fx" ${fxAttr} role="img" aria-label="${escapeHtml(condition)} weather effects"></div>
      <div class="pw-section-header">
        <span class="pw-section-title">Weather</span>
      </div>
      <div class="pw-hero">
        <div class="pw-hero-temp" style="color: ${sanitizeCssValue(tempToColor(temp))}; ${heroGlow}">${escapeHtml(temp.toFixed(1))}${escapeHtml(tempUnit)}</div>
        <div class="pw-hero-condition">${escapeHtml(formatCondition(condition))}${stabilityBadgeHtml}</div>
        ${snowBadgeHtml}
        ${feelsContextHtml}
      </div>
      <div class="pw-temp-arc">
        <span class="pw-arc-label" style="color:${sanitizeCssValue(tempToColor(tempLow))}">L:${escapeHtml(Math.round(tempLow))}\u00b0</span>
        <div class="pw-arc-bar" style="background:${arcGradient}" role="img" aria-label="Temperature range ${Math.round(tempLow)}${escapeHtml(tempUnit)} to ${Math.round(tempHigh)}${escapeHtml(tempUnit)}">
          <div class="pw-arc-marker" style="left: ${Number(arcPct)}%"></div>
          ${freezeMarkerHtml}
        </div>
        <span class="pw-arc-label" style="color:${sanitizeCssValue(tempToColor(tempHigh))}">H:${escapeHtml(Math.round(tempHigh))}\u00b0</span>
      </div>
      ${dayArcHtml}
      ${summaryHtml}
      ${precipBarHtml}
      ${comfortBarHtml}
      ${capeBarHtml}
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2; border-top: none; padding-top: 8px;" role="img" aria-label="Wind and surface observations">
        ${statHtml(windValue, bft.name, windColor)}
        ${statHtml(`${escapeHtml(feelsLike.toFixed(1))}${escapeHtml(tempUnit)}`, 'Feels', feelsColor)}
        ${statHtml(`${escapeHtml(Math.round(visibility))} ${escapeHtml(visUnit)}`, 'Vis', visCatColor)}
        ${statHtml(`${escapeHtml(dewPoint.toFixed(1))}${escapeHtml(dewUnit)}`, 'Dew', dewColor)}
      </div>
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2; padding-bottom: 16px; border-top: none; padding-top: 4px;" role="img" aria-label="Atmospheric conditions">
        ${statHtml(cloudCover !== null ? escapeHtml(Math.round(cloudCover.total) + '%') : '--', 'Cloud', cloudColor)}
        ${statHtml(`${escapeHtml(Math.round(humidity))}%`, 'Humid', humidColor)}
        ${statHtml(pressValue, pressLabel, pressColor)}
        ${statHtml(uvValue, 'UV', uvColor(uvIndex))}
      </div>
    </div>`;
}

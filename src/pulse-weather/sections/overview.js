/**
 * @module pulse-weather/sections/overview
 * @description Hero temperature, atmospheric FX, stats grid, UV/pressure bars,
 * contextual weather summary, day progress arc, and tier-coloured stats.
 */

import { tempToColor, windTierColor, beaufort, compassLabel, escapeHtml, sanitizeCssValue, formatCondition, cloudCoverColor, dewPointComfortColor, uniqueSvgId, futureHourly as filterFutureHourly, deriveTodaySunBoundaries, readCeOrAttr, readCeUnit, readSensorValue, deriveBrandVariant, formatHHMM, resolveHassTimeZone } from '../weather-primitives.js';
import { intensityRatio, tensionGlow, tensionVignette } from '../../shared/visual-tension.js';
import { ATMOS_CE_TIER_MAP } from './atmosphere.js';
import { LIFTED_INDEX_TIERS } from '../constants.js';
import { composeNarrative } from '../narrative.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';
import { t } from '../type-system.js';

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
    const parts = types.map((p) => `${escapeHtml(p.name)} ${escapeHtml(p.value.toFixed(1))} ${escapeHtml(p.unit)}`);
    return `${parts.join(' \u00b7 ')} now`;
  }
  if (precipNow > 0) {
    return `Precipitation \u2014 next 12h \u00b7 ${escapeHtml(precipNow.toFixed(1))} ${escapeHtml(precipUnit)} now`;
  }
  return 'Precipitation \u2014 next 12h';
}


/**
 * Render the overview section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string} HTML string.
 */
export function renderOverview({ hass, config, discovery, weatherEntity, forecastData }) {
  const attrs = weatherEntity.attributes;
  const ce = discovery.atmosCe;
  const sunEntityId = discovery.sunEntityId || '';
  // Render all clock labels in the HA-configured zone (falls back to
  // browser zone when the user's profile prefers 'local'). Resolved once
  // here and threaded into every formatHHMM below so a user physically
  // abroad still sees their home wall-clock. See #timezone fix.
  const timeZone = resolveHassTimeZone(hass);
  const { condition, isNight } = deriveBrandVariant(hass, weatherEntity, discovery);

  const val = (/** @type {string} */ s, /** @type {string} */ a) => readCeOrAttr(hass, ce, attrs, s, a);
  const unit = (/** @type {string} */ s, /** @type {string} */ f) => readCeUnit(hass, ce, s, f);

  const temp = val('temperature', 'temperature');
  const feelsLike = val('apparent_temperature', 'apparent_temperature') || temp;
  const humidity = val('humidity', 'humidity');
  const windSpeed = val('wind_speed', 'wind_speed');
  const windBearing = val('wind_direction', 'wind_bearing');
  /* Gust attribute name varies by integration: HA's standard is
     `wind_gust_speed` (OpenWeatherMap, met.no, others); older Atmos CE
     composite sensors expose `wind_gusts`. Read both so the 4-col Gust
     stat stays consistent with Wind section's rose. */
  const windGusts = val('wind_gusts', 'wind_gust_speed') || val('wind_gusts', 'wind_gusts');
  const dewPoint = val('dew_point', 'dew_point');
  const visibility = val('visibility', 'visibility');
  const pressure = val('pressure', 'pressure');

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

  const uvSensor = discovery.atmosCe.uv_index;
  const uvIndex = uvSensor
    ? Number(hass.states[uvSensor]?.state) || 0
    : Number(attrs.uv_index ?? 0);

  const { value: precipNow, unit: precipUnitRaw } = readSensorValue(hass, ce.precipitation);
  const precipUnit = /** @type {string} */ (precipUnitRaw || 'mm');

  const { value: rainNow, unit: rainUnitRaw } = readSensorValue(hass, ce.rain);
  const { value: showersNow, unit: showersUnitRaw } = readSensorValue(hass, ce.showers);
  const { value: snowfallNow, unit: snowfallUnitRaw } = readSensorValue(hass, ce.snowfall);
  const rainUnit = /** @type {string} */ (rainUnitRaw || 'mm');
  const showersUnit = /** @type {string} */ (showersUnitRaw || 'mm');
  const snowfallUnit = /** @type {string} */ (snowfallUnitRaw || 'cm');

  const { value: uvClearSky, entity: uvClearSkySensor } = readSensorValue(hass, ce.uv_index_clear_sky);

  const dewComfortSensor = ce.dew_point_comfort ? hass.states[ce.dew_point_comfort] : null;
  const visibilityCatSensor = ce.visibility_category ? hass.states[ce.visibility_category] : null;
  const feelsContextSensor = ce.feels_like_context ? hass.states[ce.feels_like_context] : null;
  const pressureTrendSensor = ce.pressure_trend ? hass.states[ce.pressure_trend] : null;

  // Derive today's sunrise / sunset + anchor Atmos CE event-time
  // sensors via shared helpers. See weather-primitives.js for the
  // full rationale (HA next-event semantics + 24h anchor pattern).
  const nowForPhase = new Date();
  const sunStateForPhase = sunEntityId ? hass.states[sunEntityId] : null;
  const nextRising = /** @type {string|undefined} */ (sunStateForPhase?.attributes?.next_rising);
  const nextSetting = /** @type {string|undefined} */ (sunStateForPhase?.attributes?.next_setting);
  const { todaySunrise: todaySunriseForPhase, todaySunset: todaySunsetForPhase, tomorrowSunrise: tomorrowSunriseForPhase } =
    deriveTodaySunBoundaries(nowForPhase, nextRising, nextSetting);

  let cloudCover = null;
  if (discovery.atmosCe.cloud_cover) {
    cloudCover = {
      total: Number(hass.states[discovery.atmosCe.cloud_cover]?.state) || 0,
      low: Number(hass.states[discovery.atmosCe.cloud_cover_low]?.state) || 0,
      mid: Number(hass.states[discovery.atmosCe.cloud_cover_mid]?.state) || 0,
      high: Number(hass.states[discovery.atmosCe.cloud_cover_high]?.state) || 0,
    };
  }

  const freezeSensor = ce.freezing_level_height ? hass.states[ce.freezing_level_height] : null;
  const freezeLevel = freezeSensor ? Number(freezeSensor.state) || 0 : 0;

  const stabilitySensor = ce.stability_assessment ? hass.states[ce.stability_assessment] : null;
  const stabilityState = stabilitySensor?.state || '';

  const liSensor = ce.lifted_index ? hass.states[ce.lifted_index] : null;
  const liValue = liSensor ? Number(liSensor.state) || 0 : 0;

  // eslint-disable-next-line no-unused-vars
  const gradient = sanitizeCssValue(CONDITION_GRADIENTS[condition] || DEFAULT_GRADIENT);

  const range = Math.max(tempHigh - tempLow, 1);
  // eslint-disable-next-line no-unused-vars
  const arcPct = Math.max(0, Math.min(100, ((temp - tempLow) / range) * 100));

  // Compass direction (16-point via compassLabel, 8-point fallback)
  const dirLabel = compassLabel(windBearing);

  const fxAttr = `data-condition="${escapeHtml(condition)}" data-night="${isNight}" data-cloud='${escapeHtml(JSON.stringify(cloudCover || ''))}'`;

  const hotIntensity = intensityRatio(temp, 20, 42);
  const coldIntensity = intensityRatio(temp, 15, -10);
  const tempIntensity = Math.max(hotIntensity, coldIntensity);
  const tempColor = tempToColor(temp);
  // eslint-disable-next-line no-unused-vars
  const heroGlow = tempIntensity > 0.05 ? `text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${tensionGlow(tempColor, tempIntensity)}` : 'text-shadow: 0 2px 20px rgba(0,0,0,0.3)';
  const vignetteGrad = tensionVignette(tempIntensity);
  const vignetteHtml = vignetteGrad ? `<div class="pw-tension-vignette" style="background: ${sanitizeCssValue(vignetteGrad)}"></div>` : '';

  // eslint-disable-next-line no-unused-vars
  const snowBadgeHtml = snowfallNow > 0
    ? `<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${escapeHtml(snowfallNow.toFixed(1))} ${escapeHtml(snowfallUnit)}</div>`
    : '';

  const feelsContext = feelsContextSensor?.state || '';
  const feelsDiff = feelsContextSensor?.attributes?.difference;
  let feelsContextHtml = '';
  if (feelsContext === 'wind_chill' && feelsDiff !== null && feelsDiff !== undefined) {
    feelsContextHtml = `<div class="pw-feels-context">Wind chill ${escapeHtml(String(Math.round(Number(feelsDiff))))}\u00b0</div>`;
  } else if (feelsContext === 'heat_index' && feelsDiff !== null && feelsDiff !== undefined) {
    feelsContextHtml = `<div class="pw-feels-context">Heat index +${escapeHtml(String(Math.round(Number(feelsDiff))))}\u00b0</div>`;
  }

  const badgeTiers = ['marginal', 'slight', 'enhanced', 'moderate', 'high'];
  let stabilityBadgeHtml = '';
  if (stabilityState && badgeTiers.includes(stabilityState)) {
    const tierInfo = ATMOS_CE_TIER_MAP[stabilityState];
    if (tierInfo) {
      const badgeColor = sanitizeCssValue(tierInfo.color);
      let badgeText = `\u26A1 ${escapeHtml(tierInfo.label)}`;
      // LI value in badge — only when LI itself indicates instability (negative = unstable)
      if (liSensor && liValue < 0) {
        const liTier = LIFTED_INDEX_TIERS.find((tier) => liValue >= tier.min) || LIFTED_INDEX_TIERS[LIFTED_INDEX_TIERS.length - 1];
        badgeText += ` \u00b7 <span style="color:${sanitizeCssValue(liTier.color)}">LI ${escapeHtml(String(liValue))}</span>`;
      }
      // eslint-disable-next-line no-unused-vars
      stabilityBadgeHtml = ` <span class="pw-stability-badge" style="background:${badgeColor}33; color:${badgeColor}">${badgeText}</span>`;
    }
  }

  const visCat = visibilityCatSensor?.state || '';
  // eslint-disable-next-line no-unused-vars
  const visCatColor = visCat && !['unavailable', 'unknown'].includes(visCat)
    ? INSIGHT_TIER_COLORS[visCat] || ''
    : '';

  const dewComfort = dewComfortSensor?.state || '';
  // eslint-disable-next-line no-unused-vars
  const dewColor = dewComfort && !['unavailable', 'unknown'].includes(dewComfort)
    ? INSIGHT_TIER_COLORS[dewComfort] || ''
    : '';

  const trendSymbol = pressureTrendSensor?.attributes?.trend_symbol || '';
  const trendColor = pressureTrendSensor?.state === 'rising' ? '#30d158'
    : pressureTrendSensor?.state === 'falling' ? '#ff9f0a'
    : pressureTrendSensor?.state === 'steady' ? '#5ac8fa' : '';
  const showClearSky = uvClearSkySensor && Math.abs(uvClearSky - uvIndex) >= 0.5;

  const change3h = pressureTrendSensor?.attributes?.change_3h;
  let pressLabel = pressureTendencyLabel(
    change3h !== null && change3h !== undefined ? Number(change3h) : null,
    pressureTrendSensor?.state || '',
  );
  // Fallback: if change_3h unavailable but sensor state is valid, use state directly
  if (pressLabel === 'Press' && pressureTrendSensor?.state) {
    const st = pressureTrendSensor.state;
    // eslint-disable-next-line no-useless-assignment
    if (st === 'rising') pressLabel = 'Rising';
    // eslint-disable-next-line no-useless-assignment
    else if (st === 'falling') pressLabel = 'Falling';
  }

  // Pressure stat colour — trend-based with neutral fallback
  // eslint-disable-next-line no-unused-vars
  const pressColor = trendColor || (pressureTrendSensor ? '#5ac8fa' : '');

  const windColor = windTierColor(windSpeed);
  // eslint-disable-next-line no-unused-vars
  const bft = beaufort(windSpeed);
  const showGust = windGusts > windSpeed + 5;
  const gustBold = windSpeed > 0 && windGusts / windSpeed > 1.5;
  const gustStr = showGust
    ? (gustBold ? ` / <b>${escapeHtml(Math.round(windGusts))}</b>` : ` / ${escapeHtml(Math.round(windGusts))}`)
    : '';
  // Number(undefined) === NaN makes CSS drop the whole transform; use the
  // || 0 fallback so the compass still renders as N rather than unrotated.
  const compassSvg = `<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(windBearing) || 0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${sanitizeCssValue(windColor)}" opacity="0.8"/></svg>`;
  // eslint-disable-next-line no-unused-vars
  const windValue = `${escapeHtml(Math.round(windSpeed))}${gustStr} ${compassSvg}${escapeHtml(dirLabel)}`;

  // eslint-disable-next-line no-unused-vars
  const arcGradient = `linear-gradient(to right, ${sanitizeCssValue(tempToColor(tempLow))}, ${sanitizeCssValue(tempToColor(tempHigh))})`;

  /* Freezing level marker on the temperature arc — anchored at 0 °C. */
  let freezeMarkerHtml = '';
  if (freezeSensor && freezeLevel < 5000 && tempLow <= 0) {
    const freezePct = Math.max(0, Math.min(100, ((0 - tempLow) / range) * 100));
    const frzUnit = /** @type {string} */ (freezeSensor?.attributes?.unit_of_measurement || 'm');
    // eslint-disable-next-line no-unused-vars
    freezeMarkerHtml = `<div class="pw-arc-freeze" style="left:${Number(freezePct)}%">
            <div class="pw-arc-freeze-label">\u2744 ${escapeHtml(String(Math.round(freezeLevel)))}${escapeHtml(frzUnit)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`;
  }

  // Two phases only — no golden / blue split. sun.sun is the single
  // source of truth: above_horizon → Day (sunrise → sunset, amber
  // gradient), below_horizon → Night (today's sunset → tomorrow's
  // sunrise, cool blue). The previous 6-theme cascade was a long
  // tail of edge-case bugs; this version has a single branch.
  let dayArcHtml = '';
  const sunEntity = sunEntityId ? hass.states[sunEntityId] : null;
  if (sunEntity && todaySunriseForPhase && todaySunsetForPhase && tomorrowSunriseForPhase) {
    const nowMs = nowForPhase.getTime();
    const isDaytime = sunEntity.state === 'above_horizon';
    let fillPct;
    let leftLabel;
    let rightLabel;
    let fillStyle;
    let labelColor;
    if (isDaytime) {
      const srMs = todaySunriseForPhase.getTime();
      const ssMs = todaySunsetForPhase.getTime();
      const dur = Math.max(ssMs - srMs, 1);
      fillPct = Math.max(0, Math.min(100, ((nowMs - srMs) / dur) * 100));
      leftLabel = formatHHMM(todaySunriseForPhase, timeZone);
      rightLabel = formatHHMM(todaySunsetForPhase, timeZone);
      fillStyle = 'background: linear-gradient(to right, #ff9f0a, #ffd60a)';
      labelColor = '#ff9f0a';
    } else {
      // Night — sunset to tomorrow's sunrise. If the user is looking
      // pre-sunrise, today's sunset is ~yesterday; deriveTodaySunBoundaries
      // already returns the most-recent sunset so the math holds.
      const startMs = todaySunsetForPhase.getTime();
      const endMs = tomorrowSunriseForPhase.getTime();
      const dur = Math.max(endMs - startMs, 1);
      fillPct = Math.max(0, Math.min(100, ((nowMs - startMs) / dur) * 100));
      leftLabel = formatHHMM(todaySunsetForPhase, timeZone);
      rightLabel = formatHHMM(tomorrowSunriseForPhase, timeZone);
      fillStyle = 'background: linear-gradient(to right, #1a3050, #5ac8fa)';
      labelColor = '#5ac8fa';
    }
    const markerStyle = `left:${Number(fillPct)}%; background:${sanitizeCssValue(labelColor)}; box-shadow: 0 0 6px ${sanitizeCssValue(labelColor)}66`;
    const labelStyle = ` style="color:${sanitizeCssValue(labelColor)}"`;
    const arcOpacity = isDaytime ? '1' : '0.85';
    const markerIcon = isDaytime ? '' : '\u{1F319}';

    dayArcHtml = `
      <div class="pw-day-arc" style="opacity:${arcOpacity}">
        <span class="pw-day-arc-label"${labelStyle}>${escapeHtml(leftLabel)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(fillPct)}%; ${fillStyle}"></div>
          <div class="pw-day-arc-marker" style="${markerStyle}">${markerIcon}</div>
        </div>
        <span class="pw-day-arc-label"${labelStyle}>${escapeHtml(rightLabel)}</span>
      </div>`;
  }

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

    const precipLabel = buildPrecipLabel(precipNow, precipUnit, rainNow, rainUnit, showersNow, showersUnit, snowfallNow, snowfallUnit);
    // Real-time precip overrides narrative so users get an actionable
    // first line during active rain instead of a forecast-shaped sentence.
    if (precipNow > 0) {
      summaryHtml = `
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">\u{1F327}</span> ${precipLabel}
      </div>`;
    } else {
      const narrative = composeNarrative({
        now: new Date(),
        cloudCoverNow: cloudCover ? cloudCover.total : 0,
        conditionNow: condition,
        slots,
        windSpeed,
        uvIndex,
        stabilityState,
        timeZone,
      });
      summaryHtml = `
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        ${escapeHtml(narrative.sentence)}
      </div>`;
    }

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



      const midSlot = slots[Math.floor(slots.length / 2)];
      const midHours = midSlot ? `+${Math.floor(slots.length / 2)}h` : '';

      // eslint-disable-next-line no-unused-vars
      precipBarHtml = `
      <div style="position: relative; z-index: 2; margin: 16px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label">${precipLabel}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${slotHtml}</div>
        <div class="pw-precip-times"><span>Now</span><span>${escapeHtml(midHours)}</span><span>+${escapeHtml(String(slots.length))}h</span></div>
      </div>`;
    }

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
      const peakTime = peakDt ? formatHHMM(peakDt, timeZone) : '';

      const capeGradId = uniqueSvgId('pw-cape-grad');
      // eslint-disable-next-line no-unused-vars
      capeBarHtml = `
      <div style="position: relative; z-index: 2; margin: 4px var(--pulse-space-card-wide) 0;">
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

    const hasDewData = slots.some((h) => h.dew_point !== undefined && h.dew_point !== null);
    if (hasDewData) {
      const comfortSlots = slots.map((h) => {
        const dp = Number(h.dew_point) || 0;
        return `<div class="pw-comfort-slot" style="background:${sanitizeCssValue(dewPointComfortColor(dp))}"></div>`;
      }).join('');
      // eslint-disable-next-line no-unused-vars
      comfortBarHtml = `
      <div style="position: relative; z-index: 2; margin: 2px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${comfortSlots}</div>
      </div>`;
    }
  }

  // Row 1: Wind (combined), Feels, Vis, Dew
  // eslint-disable-next-line no-unused-vars
  const feelsColor = tempToColor(feelsLike);
  // eslint-disable-next-line no-unused-vars
  const cloudColor = cloudCover !== null ? cloudCoverColor(cloudCover.total) : '';
  // eslint-disable-next-line no-unused-vars
  const humidColor = humidityColor(humidity);

  // Pressure value — number + unit + trend symbol
  // eslint-disable-next-line no-unused-vars
  const pressValue = `${escapeHtml(Math.round(pressure))} ${escapeHtml(pressUnit)}${trendSymbol ? ` <span style="color:${sanitizeCssValue(trendColor)}">${escapeHtml(trendSymbol)}</span>` : ''}`;

  // UV value with clear-sky comparison
  // eslint-disable-next-line no-unused-vars
  const uvValue = `${escapeHtml(Math.round(uvIndex))}${showClearSky ? ` <span style="opacity:0.5">/ ${escapeHtml(String(Math.round(uvClearSky)))}</span>` : ''}`;

  // \u2500\u2500 Hero first + narrative caption + 4-col stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  const conditionLabel = formatCondition(condition);
  const variant = brandMarkVariant(condition, isNight);
  const locationLabel = config?.location_label || 'Now';
  // Strip HTML tags from feels-context block \u2014 we want plain text in the
  // hero condition line, not the existing pill markup.
  const feelsPlain = feelsContextHtml ? feelsContextHtml.replace(/<[^>]*>/g, '').trim() : '';
  // Strip the pre-built summary div wrapper to extract the narrative text.
  const narrativeText = summaryHtml ? summaryHtml.replace(/<[^>]*>/g, '').trim() : '';
  const cloudPct = cloudCover ? Math.round(cloudCover.total) + '%' : '--';

  const heroFragment = `
        <div class="pw-loc-stamp">${escapeHtml(locationLabel)} \u00b7 ${escapeHtml(formatHHMM(new Date(), timeZone))}</div>
        <div class="pw-hero-block">
          ${t.display(Math.round(temp), { suffix: tempUnit })}
          ${t.gloss(`${conditionLabel}${feelsPlain ? ' \u00b7 ' + feelsPlain : ''}`)}
        </div>`;

  const statsFragment = t.statsRow([
    t.stat(`${Math.round(tempLow)}/${Math.round(tempHigh)}\u00b0`, 'range'),
    t.stat(`${Math.round(windSpeed)}${showGust ? ` / ${Math.round(windGusts)}` : ''} ${dirLabel}`, showGust ? 'wind / gust' : 'wind'),
    t.stat(Math.round(uvIndex), 'uv'),
    t.stat(cloudPct, 'cloud'),
  ], { columns: 4 });

  // \u2500\u2500 Pro view: arcs + 7-day spark + stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  // Build a 7-day temperature sparkline from the daily forecast. Each
  // point is the day's high; min/max scale to the week's range so the
  // curve shows the warmest day relative to the others. A cream "now"
  // marker at index 0 picks out today.
  const daily = (forecastData?.daily || []).slice(0, 7);
  let sparkSvg = '';
  if (daily.length >= 2) {
    const w = 320;
    const h = 38;
    const highs = daily.map((d) => Number(d.temperature) || 0);
    const lows = daily.map((d) => Number(d.templow ?? d.temperature) || 0);
    const min = Math.min(...lows);
    const max = Math.max(...highs);
    const span = Math.max(max - min, 1);
    const ptX = (/** @type {number} */ i) => (i / (daily.length - 1)) * w;
    const ptY = (/** @type {number} */ v) => h - ((v - min) / span) * (h - 4) - 2;
    const lineD = highs.map((v, i) => `${i === 0 ? 'M' : 'L'}${ptX(i).toFixed(1)},${ptY(v).toFixed(1)}`).join(' ');
    const areaD = `${lineD} L${w},${h} L0,${h} Z`;
    sparkSvg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <path d="${areaD}" fill="rgba(168,61,42,0.08)"/>
      <path d="${lineD}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`;
  }
  const sparkBlock = sparkSvg
    ? `<div class="pw-overview-spark-block">
        ${t.chartCaption('7-day temperature trend')}
        <div class="pw-overview-spark">${sparkSvg}</div>
      </div>`
    : '';

  // Extended stats row (humidity / dew point / pressure trend /
  // visibility category) appears below the standard stats whenever
  // at least two of the four fields are available. No toggle —
  // information density is the default for the Overview section.
  const visCategory = visibilityCatSensor?.state || '';
  const pressureTrend = pressureTrendSensor?.state || '';
  const extendedAvailable = [
    Number.isFinite(humidity) && humidity > 0,
    Number.isFinite(dewPoint) && dewPoint !== 0,
    Boolean(visCategory),
    Boolean(pressureTrend),
  ].filter(Boolean).length >= 2;
  let extendedStatsRow = '';
  if (extendedAvailable) {
    const humStat = Number.isFinite(humidity) && humidity > 0
      ? t.stat(`${Math.round(humidity)}%`, dewComfort || 'humidity')
      : t.stat('—', 'humidity');
    const dewStat = Number.isFinite(dewPoint)
      ? t.stat(`${Math.round(dewPoint)}${dewUnit}`, 'dew point')
      : t.stat('—', 'dew point');
    const pressStat = Number.isFinite(pressure) && pressure > 0
      ? t.stat(`${Math.round(pressure)}`, pressureTrend ? `${pressUnit} ${pressureTrend}` : pressUnit)
      : t.stat('—', 'pressure');
    const visStat = Number.isFinite(visibility) && visibility > 0
      ? t.stat(`${visibility.toFixed(visibility < 10 ? 1 : 0)}${visUnit}`, visCategory || 'visibility')
      : t.stat('—', 'visibility');
    extendedStatsRow = t.statsRow([humStat, dewStat, pressStat, visStat], { columns: 4 });
  }

  const body = `
        ${heroFragment}
        ${t.narrative(narrativeText)}
        ${dayArcHtml}
        ${sparkBlock}
        ${statsFragment}
        ${extendedStatsRow}`;

  return renderSectionShell({
    sectionClass: 'pw-overview-v2',
    ariaLabel: 'Current weather overview',
    brandVariant: variant,
    preContent: `${vignetteHtml}<div class="pw-fx" ${fxAttr} role="img" aria-label="${escapeHtml(condition)} weather effects"></div>`,
    body,
    pro: config?.pro !== false,
  });
}

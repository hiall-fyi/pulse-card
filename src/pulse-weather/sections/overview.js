/**
 * @module pulse-weather/sections/overview
 * @description Hero temperature, atmospheric FX, stats grid, UV/pressure bars.
 */

import { tempToColor, uvColor, uvLabel, escapeHtml, sanitizeCssValue } from '../weather-primitives.js';
import { intensityRatio, tensionGlow, tensionVignette } from '../../shared/visual-tension.js';

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
  const forecast = /** @type {Array<Record<string, unknown>>|undefined} */ (attrs.forecast);
  const tempLow = Number(forecast?.[0]?.templow ?? temp - 5);
  const tempHigh = Number(forecast?.[0]?.temperature ?? temp + 5);

  // UV from Atmos CE or weather entity
  const uvSensor = discovery.atmosCe.uv_index;
  const uvIndex = uvSensor
    ? Number(hass.states[uvSensor]?.state) || 0
    : Number(attrs.uv_index ?? 0);

  // UV clear-sky ghost marker
  const uvClearSkySensor = discovery.atmosCe.uv_index_clear_sky;
  const uvClearSky = uvClearSkySensor
    ? Number(hass.states[uvClearSkySensor]?.state)
    : null;

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

  const gradient = sanitizeCssValue(CONDITION_GRADIENTS[condition] || DEFAULT_GRADIENT);

  // Temperature arc position
  const range = Math.max(tempHigh - tempLow, 1);
  const arcPct = Math.max(0, Math.min(100, ((temp - tempLow) / range) * 100));

  // UV bar position
  const uvPct = Math.min(100, (uvIndex / 11) * 100);
  const uvGhostPct = uvClearSky !== null ? Math.min(100, (uvClearSky / 11) * 100) : null;

  // Pressure bar (950–1050 hPa range)
  const pressurePct = Math.max(0, Math.min(100, ((pressure - 950) / 100) * 100));

  // Compass direction label
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const dirLabel = dirs[Math.round(windBearing / 45) % 8] || '';

  // FX layer — build in card shell via replaceChildren for live cards,
  // but for HTML string output we note the condition for the card shell
  const fxAttr = `data-condition="${escapeHtml(condition)}" data-night="${isNight}" data-cloud='${escapeHtml(JSON.stringify(cloudCover || ''))}'`;

  // ── Temperature tension ───────────────────────────────────────────
  const hotIntensity = intensityRatio(temp, 20, 42);
  const coldIntensity = intensityRatio(temp, 15, -10);
  const tempIntensity = Math.max(hotIntensity, coldIntensity);
  const tempColor = tempToColor(temp);
  const heroGlow = tempIntensity > 0.05 ? `text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${tensionGlow(tempColor, tempIntensity)}` : 'text-shadow: 0 2px 20px rgba(0,0,0,0.3)';
  const vignetteGrad = tensionVignette(tempIntensity);
  const vignetteHtml = vignetteGrad ? `<div class="pw-tension-vignette" style="background: ${sanitizeCssValue(vignetteGrad)}"></div>` : '';

  // ── Precipitation bar (Dark Sky signature) ────────────────────────
  let precipBarHtml = '';
  const hourly = forecastData?.hourly || [];
  if (hourly.length > 0) {
    // Take first 12 entries for next-hour view
    const slots = hourly.slice(0, 12);
    const hasAnyPrecip = slots.some((h) => Number(h.precipitation_probability) > 0);
    if (hasAnyPrecip) {
      const slotHtml = slots.map((h) => {
        const prob = Math.min(100, Math.max(0, Number(h.precipitation_probability) || 0));
        return `<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height: ${prob}%"></div></div>`;
      }).join('');
      precipBarHtml = `
      <div style="position: relative; z-index: 2; margin: 16px 20px 0;">
        <div class="pw-precip-label">Precipitation — next hours</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability">${slotHtml}</div>
      </div>`;
    }
  }

  return `
    <div class="pw-section pw-atmosphere" style="background: ${gradient}; min-height: 280px;">
      ${vignetteHtml}
      <div class="pw-fx" ${fxAttr} role="img" aria-label="${escapeHtml(condition)} weather effects"></div>
      <div class="pw-section-header">
        <span class="pw-section-title">Weather</span>
      </div>
      <div class="pw-hero">
        <div class="pw-hero-temp" style="color: ${sanitizeCssValue(tempToColor(temp))}; ${heroGlow}">${escapeHtml(temp.toFixed(1))}${escapeHtml(tempUnit)}</div>
        <div class="pw-hero-condition">${escapeHtml(condition.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))}</div>
        <div class="pw-hero-feels">Feels like ${escapeHtml(feelsLike.toFixed(1))}${escapeHtml(tempUnit)}</div>
      </div>
      <div class="pw-temp-arc">
        <span class="pw-arc-label">${escapeHtml(Math.round(tempLow))}${escapeHtml(tempUnit)}</span>
        <div class="pw-arc-bar" role="img" aria-label="Temperature range ${Math.round(tempLow)}${escapeHtml(tempUnit)} to ${Math.round(tempHigh)}${escapeHtml(tempUnit)}">
          <div class="pw-arc-marker" style="left: ${Number(arcPct)}%"></div>
        </div>
        <span class="pw-arc-label">${escapeHtml(Math.round(tempHigh))}${escapeHtml(tempUnit)}</span>
      </div>
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2;" role="img" aria-label="Weather statistics">
        <div class="stat">
          <div class="pw-stat-value">${escapeHtml(Math.round(humidity))}%</div>
          <div class="pw-stat-label">Humid</div>
        </div>
        <div class="stat">
          <div class="pw-stat-value">${escapeHtml(Math.round(windSpeed))} ${escapeHtml(dirLabel)}</div>
          <div class="pw-stat-label">Wind</div>
        </div>
        <div class="stat">
          <div class="pw-stat-value">${escapeHtml(dewPoint.toFixed(1))}${escapeHtml(dewUnit)}</div>
          <div class="pw-stat-label">Dew</div>
        </div>
        <div class="stat">
          <div class="pw-stat-value">${escapeHtml(Math.round(visibility))} ${escapeHtml(visUnit)}</div>
          <div class="pw-stat-label">Vis</div>
        </div>
      </div>
      ${precipBarHtml}
      <div class="pw-bottom-row" style="position: relative; z-index: 2; padding: 12px 20px 16px;">
        <div class="pw-bottom-card">
          <div class="pw-bottom-header">
            <span class="pw-bottom-label">UV Index</span>
            <span class="pw-bottom-value" style="color: ${sanitizeCssValue(uvColor(uvIndex))}">${escapeHtml(Math.round(uvIndex))} ${escapeHtml(uvLabel(uvIndex))}</span>
          </div>
          <div class="pw-mini-bar" role="img" aria-label="UV index ${Math.round(uvIndex)}">
            <div class="pw-mini-fill" style="width: ${Number(uvPct)}%; background: ${sanitizeCssValue(uvColor(uvIndex))}"></div>
          </div>
          ${uvGhostPct !== null && uvClearSky !== null ? `<div class="pw-arc-ghost" style="left: ${Number(uvGhostPct)}%; position: relative; top: -8px;" title="Clear-sky UV: ${escapeHtml(String(Math.round(uvClearSky)))}"></div>` : ''}
        </div>
        <div class="pw-bottom-card">
          <div class="pw-bottom-header">
            <span class="pw-bottom-label">Pressure</span>
            <span class="pw-bottom-value">${escapeHtml(Math.round(pressure))} ${escapeHtml(pressUnit)}</span>
          </div>
          <div class="pw-mini-bar" role="img" aria-label="Pressure ${Math.round(pressure)} ${escapeHtml(pressUnit)}">
            <div class="pw-mini-fill" style="width: ${Number(pressurePct)}%; background: #5ac8fa"></div>
          </div>
        </div>
      </div>
    </div>`;
}

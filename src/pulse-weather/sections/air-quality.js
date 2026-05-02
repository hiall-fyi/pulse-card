/**
 * @module pulse-weather/sections/air-quality
 * @description AQI gauge, pollutant table, and PM-driven atmospheric FX.
 */

import { aqiColor, escapeHtml, sanitizeCssValue } from '../weather-primitives.js';
import { intensityRatio, tensionWash, breatheDuration, tensionVignette } from '../../shared/visual-tension.js';
import { EU_AQI_CATEGORIES, US_AQI_CATEGORIES, POLLUTANTS } from '../constants.js';

/**
 * Look up AQI category info from value and scale.
 * @param {number} value - AQI value.
 * @param {string} scale - 'eu' or 'us'.
 * @param {string|null} ceCategory - Atmos CE category string.
 * @param {string|null} ceColor - Atmos CE CSS named color.
 * @returns {{label: string, color: string, desc: string}}
 */
function lookupCategory(value, scale, ceCategory, ceColor) {
  if (ceCategory && ceColor) {
    const cats = scale === 'us' ? US_AQI_CATEGORIES : EU_AQI_CATEGORIES;
    const match = cats.find((c) => c.label.toLowerCase() === ceCategory.toLowerCase());
    return {
      label: ceCategory,
      color: ceColor,
      desc: match?.desc || '',
    };
  }
  const cats = scale === 'us' ? US_AQI_CATEGORIES : EU_AQI_CATEGORIES;
  for (const cat of cats) {
    if (value <= cat.max) return cat;
  }
  return cats[cats.length - 1];
}

/**
 * Pollutant dot color based on value relative to max.
 * @param {number} value - Current value.
 * @param {number} max - Max threshold.
 * @returns {string} CSS hex color.
 */
function pollutantDotColor(value, max) {
  const ratio = value / max;
  if (ratio < 0.3) return '#30d158';
  if (ratio < 0.6) return '#ff9f0a';
  return '#ff453a';
}

/**
 * Render the air quality section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string|null} HTML string or null if no AQI data.
 */
export function renderAirQuality({ hass, config, discovery, weatherEntity: _weatherEntity }) {
  const scale = config.scale || 'eu';
  const aqiKey = scale === 'us' ? 'us_aqi' : 'european_aqi';

  // Resolve AQI entity
  const aqiEntityId = config.aqi_entity || discovery.atmosCe[aqiKey];
  if (!aqiEntityId || !hass.states[aqiEntityId]) return null;

  const aqiEntity = hass.states[aqiEntityId];
  const aqiValue = Number(aqiEntity.state) || 0;
  const ceCategory = /** @type {string|null} */ (aqiEntity.attributes?.category || null);
  const ceColor = /** @type {string|null} */ (aqiEntity.attributes?.color || null);

  const category = lookupCategory(aqiValue, scale, ceCategory, ceColor);
  const color = aqiColor(aqiValue, ceCategory, ceColor);

  // Gauge arc — clamp at 100% for values above highest threshold
  const maxScale = scale === 'us' ? 300 : 100;
  const fillPct = Math.min(100, (aqiValue / maxScale) * 100);

  // ── AQI tension — compute early so gaugeSvg can use gaugeDur ────
  const aqiIntensity = intensityRatio(aqiValue, 0, maxScale);
  const gaugeDur = breatheDuration(aqiIntensity, 3, 0.8).toFixed(2);

  // SVG semi-circle gauge — matching prototype dimensions
  const gaugeR = 88;
  const gaugeCx = 110;
  const gaugeCy = 110;
  const gaugeStroke = 12;
  const halfCirc = Math.PI * gaugeR;
  const dashLen = (fillPct / 100) * halfCirc;
  const arcD = `M${gaugeCx - gaugeR},${gaugeCy} A${gaugeR},${gaugeR} 0 0 1 ${gaugeCx + gaugeR},${gaugeCy}`;

  // Gauge SVG with glow on the whole SVG element (matching prototype)
  const gaugeSvg = `
    <div class="pw-aqi-gauge-unit" role="img" aria-label="Air quality index ${aqiValue}, ${escapeHtml(category.label)}">
      <svg width="220" height="120" viewBox="0 0 220 120" style="display:block;--gc:${sanitizeCssValue(color)};--glow-color:${sanitizeCssValue(color)};animation:pw-gaugeGlow ${gaugeDur}s ease-in-out infinite">
        <title>AQI gauge: ${escapeHtml(String(aqiValue))} - ${escapeHtml(category.label)}</title>
        <path d="${arcD}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="${gaugeStroke}" stroke-linecap="round"/>
        <path d="${arcD}" fill="none" stroke="${sanitizeCssValue(color)}" stroke-width="${gaugeStroke}" stroke-linecap="round"
          stroke-dasharray="${dashLen.toFixed(1)} ${halfCirc.toFixed(1)}"/>
      </svg>
      <div class="pw-aqi-gauge-center">
        <div class="pw-aqi-value" style="color: ${sanitizeCssValue(color)}">${escapeHtml(String(aqiValue))}</div>
        <div class="pw-aqi-scale-label">${escapeHtml(scale === 'us' ? 'US AQI' : 'European AQI')}</div>
      </div>
    </div>`;

  // Scale tabs
  const tabs = ['eu', 'us'].map((s) =>
    `<button class="pw-tab" role="tab" aria-selected="${s === scale}" tabindex="${s === scale ? '0' : '-1'}" data-scale="${escapeHtml(s)}">${escapeHtml(s.toUpperCase())}</button>`,
  ).join('');

  // Pollutant chips — include both AQI indices + 7 pollutants = 9 chips (3×3 grid)
  const chips = [];

  // Pollutant chips (EU/US AQI values already shown in gauge — skip here)
  for (const p of POLLUTANTS) {
    const sensorId = discovery.atmosCe[p.key];
    if (!sensorId || !hass.states[sensorId]) continue;
    const value = Number(hass.states[sensorId].state) || 0;
    const dotColor = pollutantDotColor(value, p.maxEu);
    chips.push(`
      <div class="stat">
        <div class="pw-stat-value">${escapeHtml(value.toFixed(1))}</div>
        <div class="pw-stat-label"><span style="background: ${sanitizeCssValue(dotColor)}; display:inline-block; width:5px; height:5px; border-radius:50%; margin-right:3px; vertical-align:middle"></span>${escapeHtml(p.label)}</div>
      </div>`);
  }

  const pollutantGrid = chips.length > 0 ? chips.join('') : '';

  // FX data attributes for PM-driven haze
  const pm25Id = discovery.atmosCe.pm2_5;
  const pm10Id = discovery.atmosCe.pm10;
  const pm25 = pm25Id ? Number(hass.states[pm25Id]?.state) || 0 : 0;
  const pm10 = pm10Id ? Number(hass.states[pm10Id]?.state) || 0 : 0;

  // ── AQI tension wash and vignette ─────────────────────────────────
  const aqiWash = aqiIntensity < 0.15 ? tensionWash('#30d158', 0.12) : tensionWash(color, aqiIntensity);
  const vignetteGrad = tensionVignette(aqiIntensity, '80,70,50');
  const vignetteHtml = vignetteGrad ? `<div class="pw-tension-vignette" style="background: ${sanitizeCssValue(vignetteGrad)}"></div>` : '';

  return `
    <div class="pw-section pw-aqi" data-pm25="${Number(pm25)}" data-pm10="${Number(pm10)}" style="background: ${sanitizeCssValue(aqiWash)}">
      ${vignetteHtml}
      <div class="pw-section-header">
        <span class="pw-section-title">Air Quality</span>
        <div class="pw-tabs" role="tablist">${tabs}</div>
      </div>
      <div class="pw-fx" role="img" aria-label="Air quality atmospheric effects"></div>
      ${gaugeSvg}
      <div class="pw-aqi-category" style="color: ${sanitizeCssValue(color)}">${escapeHtml(category.label)}</div>
      <div class="pw-aqi-desc">${escapeHtml(category.desc)}</div>
      ${pollutantGrid ? `<div class="pulse-stats-row" style="margin: 16px 20px 0; padding-top: 12px">${pollutantGrid}</div>` : ''}
    </div>`;
}

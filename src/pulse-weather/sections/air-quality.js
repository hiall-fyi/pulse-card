/**
 * @module pulse-weather/sections/air-quality
 * @description AQI gauge, pollutant table, and PM-driven atmospheric FX.
 */

import { EU_AQI_CATEGORIES, US_AQI_CATEGORIES } from '../constants.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';
import { t } from '../type-system.js';
import { sanitizeCssValue } from '../weather-primitives.js';

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
 * Map AQI category label to a tier-key used by the v2 narrative + colour map.
 * Both EU and US scale labels are normalised to the same 5-tier vocabulary.
 * @param {string} label - Category label, e.g. "Moderate", "Unhealthy for Sensitive Groups".
 * @returns {string} Tier key.
 */
function categoryLabelToTierKey(label) {
  const l = (label || '').toLowerCase();
  if (l.includes('very unhealthy') || l.includes('hazardous') || l.includes('extremely poor')) return 'very_unhealthy';
  if (l.includes('sensitive')) return 'unhealthy_sg';
  if (l.includes('unhealthy') || l.includes('very poor')) return 'unhealthy';
  // EU's bare "Poor" (health effects possible for everyone) is genuinely
  // worse than "Fair"/"Moderate" and must not share their bucket.
  if (l.includes('poor')) return 'unhealthy_sg';
  if (l.includes('moderate') || l.includes('fair')) return 'moderate';
  if (l.includes('good')) return 'good';
  return 'unknown';
}

const AQI_TIER_COLOURS = Object.freeze({
  good: 'var(--pw-good-green)',
  moderate: 'var(--pw-warn-yellow)',
  unhealthy_sg: 'var(--pw-warn-amber)',
  unhealthy: 'var(--pw-warn-red)',
  very_unhealthy: '#8b0000',
  unknown: 'var(--pw-ink-cream)',
});

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
  const aqiValue = Number(aqiEntity.state);
  // An unavailable/unknown AQI entity must not read as AQI 0 ("Good"),
  // the best possible reading, when there's no data at all.
  if (!Number.isFinite(aqiValue)) return null;
  const ceCategory = /** @type {string|null} */ (aqiEntity.attributes?.category || null);
  const ceColor = /** @type {string|null} */ (aqiEntity.attributes?.color || null);

  const category = lookupCategory(aqiValue, scale, ceCategory, ceColor);

  /** @param {string} key @returns {number|null} */
  const readPollutant = (key) => {
    const eid = discovery.atmosCe[key];
    if (!eid || !hass.states[eid]) return null;
    const v = Number(hass.states[eid].state);
    return Number.isFinite(v) ? v : null;
  };
  const pm25 = readPollutant('pm2_5');
  const pm10 = readPollutant('pm10');
  const o3 = readPollutant('ozone');
  const no2 = readPollutant('nitrogen_dioxide');
  const so2 = readPollutant('sulphur_dioxide');
  const co = readPollutant('carbon_monoxide');

  const aqiTier = categoryLabelToTierKey(category.label);
  const tierColour = /** @type {string} */ (AQI_TIER_COLOURS[/** @type {keyof typeof AQI_TIER_COLOURS} */ (aqiTier)] || AQI_TIER_COLOURS.unknown);
  const variant = brandMarkVariant('cloudy', false);
  const inUsScale = scale === 'us';

  // EU AQI tops out at 100, US/EPA at 300. The band labels and
  // gradient stay EPA-styled (5-tier good → very unhealthy) but the
  // marker position normalises to whichever scale the user picked,
  // so an EU AQI of 80 lands at 80% of the band, not 27%.
  const scaleMax = inUsScale ? 300 : 100;
  const markerLeft = Math.min(100, Math.max(0, (aqiValue / scaleMax) * 100));

  // Kicker reads "air quality" or "air quality · us" so the user
  // knows which scale is active without a separate toggle pill.
  const kickerText = inUsScale ? 'air quality · us' : 'air quality';

  const heroHtml = t.heroBlock({
    value: Math.round(aqiValue),
    valueColor: tierColour,
    tier: category.label,
    tierFlavor: 'aqi',
    tierColor: tierColour,
  });
  const bandHtml = `
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${sanitizeCssValue(`${markerLeft.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`;
  const pollutantsRow = t.statsRow([
    pm25 !== null ? t.stat(Math.round(pm25), 'PM2.5', { data: true }) : '',
    pm10 !== null ? t.stat(Math.round(pm10), 'PM10', { data: true }) : '',
    o3 !== null ? t.stat(Math.round(o3), 'O₃', { data: true }) : '',
    no2 !== null ? t.stat(Math.round(no2), 'NO₂', { data: true }) : '',
    so2 !== null ? t.stat(Math.round(so2), 'SO₂', { data: true }) : '',
    co !== null ? t.stat(co.toFixed(1), 'CO', { data: true }) : '',
  ], { columns: 3 });
  const body = `
        ${heroHtml}
        ${bandHtml}
        ${pollutantsRow}`;

  return renderSectionShell({
    sectionClass: 'pw-air-quality-v2',
    ariaLabel: 'Air quality index',
    brandVariant: variant,
    kicker: kickerText,
    body,
    proAction: 'aqi-scale',
    proInitial: inUsScale,
    proAriaLabel: 'Toggle EU and US AQI scale',
    pro: config.pro !== false,
  });
}

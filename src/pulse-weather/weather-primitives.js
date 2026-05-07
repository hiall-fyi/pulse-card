/**
 * @module pulse-weather/weather-primitives
 * @description Shared SVG builders, color mapping functions, and rendering
 * primitives used by all Pulse Weather Card sections.
 */

import {
  TEMP_TIERS,
  WIND_TIERS,
  BEAUFORT,
  UV_COLORS,
  CAPE_TIERS,
  COMPASS_LABELS,
  TIER_COLORS,
  EU_AQI_CATEGORIES,
  US_AQI_CATEGORIES,
  CONDITION_ICONS,
} from './constants.js';

import { escapeHtml, sanitizeCssValue } from '../shared/utils.js';
export { escapeHtml, sanitizeCssValue };

// ── Color Mapping ───────────────────────────────────────────────────

/**
 * Map temperature to CSS hex color.
 * Tiers: ≤5°C blue, ≤12°C green, ≤18°C orange, >18°C red.
 * @param {number} temp - Temperature in °C.
 * @returns {string} CSS hex color.
 */
export function tempToColor(temp) {
  const t = Number(temp);
  for (const tier of TEMP_TIERS) {
    if (t <= tier.max) return tier.color;
  }
  return TEMP_TIERS[TEMP_TIERS.length - 1].color;
}

/**
 * Map wind speed to tier name.
 * calm ≤11, moderate ≤38, strong ≤61, gale >61.
 * @param {number} speed - Wind speed in km/h.
 * @returns {string} Tier name.
 */
export function windTier(speed) {
  const s = Number(speed);
  for (const tier of WIND_TIERS) {
    if (s <= tier.max) return tier.tier;
  }
  return WIND_TIERS[WIND_TIERS.length - 1].tier;
}

/**
 * Map wind tier name to hex color.
 * @param {number} speed - Wind speed in km/h.
 * @returns {string} CSS hex color.
 */
export function windTierColor(speed) {
  return /** @type {string} */ (TIER_COLORS[/** @type {keyof typeof TIER_COLORS} */ (windTier(speed))]) || TIER_COLORS.calm;
}

/**
 * Look up Beaufort scale entry by speed.
 * @param {number} speed - Wind speed in km/h.
 * @returns {{max: number, n: number, name: string, desc: string}} Beaufort entry.
 */
export function beaufort(speed) {
  const s = Number(speed);
  for (const entry of BEAUFORT) {
    if (s <= entry.max) return entry;
  }
  return BEAUFORT[BEAUFORT.length - 1];
}

/**
 * 16-point compass label from bearing degrees.
 * @param {number} deg - Bearing in degrees (0°=N, clockwise).
 * @returns {string} Compass label (e.g. 'N', 'NNE', 'SW').
 */
export function compassLabel(deg) {
  const d = ((Number(deg) % 360) + 360) % 360;
  const index = Math.round(d / 22.5) % 16;
  return COMPASS_LABELS[index];
}

/**
 * Convert compass bearing (0°=N, CW) to screen radians (0=right, CW).
 * @param {number} deg - Bearing in degrees.
 * @returns {number} Angle in radians.
 */
export function bearingToRad(deg) {
  return ((Number(deg) - 90) * Math.PI) / 180;
}

/**
 * Wind direction unit vector in CSS coords (+x right, +y down).
 * Points in the direction the wind is blowing FROM → TO.
 * @param {number} bearingDeg - Wind bearing in degrees (direction wind comes FROM).
 * @returns {{x: number, y: number}} Unit vector.
 */
export function windVector(bearingDeg) {
  const rad = bearingToRad(Number(bearingDeg));
  return { x: Math.cos(rad), y: Math.sin(rad) };
}

/**
 * Map AQI value to CSS color string.
 * Prefers Atmos CE category/color attributes when available.
 * @param {number} value - AQI numeric value.
 * @param {string|null} [category] - Atmos CE category string.
 * @param {string|null} [atmosCeColor] - Atmos CE CSS named color.
 * @returns {string} CSS color string.
 */
export function aqiColor(value, category, atmosCeColor) {
  if (atmosCeColor) return atmosCeColor;
  const v = Number(value);
  const categories = v <= 100 ? EU_AQI_CATEGORIES : US_AQI_CATEGORIES;
  for (const cat of categories) {
    if (v <= cat.max) return cat.color;
  }
  return categories[categories.length - 1].color;
}

/**
 * Map UV index to CSS hex color.
 * @param {number} index - UV index value.
 * @returns {string} CSS hex color.
 */
export function uvColor(index) {
  const i = Number(index);
  for (const tier of UV_COLORS) {
    if (i <= tier.max) return tier.color;
  }
  return UV_COLORS[UV_COLORS.length - 1].color;
}

/**
 * Map UV index to label string.
 * @param {number} index - UV index value.
 * @returns {string} Label (e.g. 'Low', 'High', 'Extreme').
 */
export function uvLabel(index) {
  const i = Number(index);
  for (const tier of UV_COLORS) {
    if (i <= tier.max) return tier.label;
  }
  return UV_COLORS[UV_COLORS.length - 1].label;
}

/**
 * Map CAPE value to severity color.
 * @param {number} cape - CAPE value in J/kg.
 * @returns {string} CSS hex color.
 */
export function capeColor(cape) {
  const c = Number(cape);
  for (const tier of CAPE_TIERS) {
    if (c <= tier.max) return tier.color;
  }
  return CAPE_TIERS[CAPE_TIERS.length - 1].color;
}

// ── Cloud / Humidity / Comfort ───────────────────────────────────────

/**
 * Map cloud cover percentage to WMO okta-aligned tier colour.
 * @param {number} pct - Cloud cover 0–100%.
 * @returns {string} Hex colour.
 */
export function cloudCoverColor(pct) {
  if (pct <= 12) return '#30d158';
  if (pct <= 50) return '#5ac8fa';
  if (pct <= 87) return '#ff9f0a';
  return '#ff453a';
}

/**
 * Map dew point to Atmos CE 5-tier comfort colour.
 * @param {number} dp - Dew point in °C.
 * @returns {string} Hex colour.
 */
export function dewPointComfortColor(dp) {
  if (dp < 10) return '#5ac8fa';
  if (dp < 16) return '#30d158';
  if (dp < 19) return '#ffd60a';
  if (dp < 22) return '#ff9f0a';
  return '#ff453a';
}

// ── Sky Phase ───────────────────────────────────────────────────────

/** @type {ReadonlyArray<{name: string, gradient: string, labelColor: string, stars: boolean, isDay: boolean}>} */
export const SKY_THEMES = [
  { name: 'Night',       gradient: 'linear-gradient(180deg, #050510, #0a0a1a 50%, transparent)', labelColor: '#636366', stars: true, isDay: false },
  { name: 'Blue Hour',   gradient: 'linear-gradient(180deg, #0a1628, #1a3050 60%, transparent)', labelColor: '#5ac8fa', stars: true, isDay: false },
  { name: 'Golden Hour', gradient: 'linear-gradient(180deg, #1a2a4a, #3a4a5a 40%, #6a4a30)', labelColor: '#ff9f0a', stars: false, isDay: true },
  { name: 'Daytime',     gradient: 'linear-gradient(180deg, #1a3a5f, #2c5a8e 50%, transparent)', labelColor: '#ffd60a', stars: false, isDay: true },
  { name: 'Golden Hour', gradient: 'linear-gradient(180deg, #2a2a3a, #5a3a2a 50%, #8a4a1a)', labelColor: '#ff6b35', stars: false, isDay: true },
  { name: 'Blue Hour',   gradient: 'linear-gradient(180deg, #0a1020, #1a2a40 60%, transparent)', labelColor: '#5ac8fa', stars: true, isDay: false },
];

/**
 * Determine current sky phase index from time and astronomical boundaries.
 * @param {Date} now - Current time.
 * @param {Date} sunrise - Today's sunrise.
 * @param {Date} sunset - Today's sunset.
 * @param {Date|null} goldenAmStart - Golden hour morning start (null = estimate).
 * @param {Date|null} goldenPmEnd - Golden hour evening end (null = estimate).
 * @param {Date|null} blueAm - Blue hour morning start (null = estimate).
 * @param {Date|null} bluePm - Blue hour evening start (null = estimate).
 * @param {Date|null} [goldenPmStart] - Golden hour evening start (null = estimate from sunset).
 * @returns {number} Theme index 0–5.
 */
export function getSkyTheme(now, sunrise, sunset, goldenAmStart, goldenPmEnd, blueAm, bluePm, goldenPmStart) {
  const t = now.getTime(), sr = sunrise.getTime(), ss = sunset.getTime();
  const blueAmT = blueAm ? blueAm.getTime() : sr - 3600000;
  const goldenAmT = goldenAmStart ? goldenAmStart.getTime() : sr - 1800000;
  const goldenPmStartT = goldenPmStart ? goldenPmStart.getTime() : ss - 1800000;
  const goldenPmT = goldenPmEnd ? goldenPmEnd.getTime() : ss + 1800000;
  const bluePmT = goldenPmEnd ? goldenPmEnd.getTime() + 3600000 : (bluePm ? bluePm.getTime() + 1800000 : ss + 3600000);
  if (t < blueAmT) return 0;
  if (t < goldenAmT) return 1;
  if (t < sr) return 2;
  if (t < goldenPmStartT) return 3;
  if (t < goldenPmT) return 4;
  if (t < bluePmT) return 5;
  return 0;
}

// ── SVG Helpers ─────────────────────────────────────────────────────

/**
 * Build an SVG element string with attributes and optional content.
 * @param {string} tag - SVG element tag name.
 * @param {Object<string, string|number>} [attrs] - Attribute key-value pairs.
 * @param {string} [content] - Inner content (HTML/SVG string).
 * @returns {string} SVG element string.
 */
export function svgEl(tag, attrs, content) {
  const attrStr = attrs
    ? Object.entries(attrs)
        .map(([k, v]) => ` ${k}="${v}"`)
        .join('')
    : '';
  if (content !== undefined && content !== null) {
    return `<${tag}${attrStr}>${content}</${tag}>`;
  }
  return `<${tag}${attrStr}/>`;
}

/**
 * Compute point on circle at given angle and radius from center.
 * @param {number} cx - Center X.
 * @param {number} cy - Center Y.
 * @param {number} rad - Angle in radians.
 * @param {number} radius - Circle radius.
 * @returns {{x: number, y: number}} Point coordinates.
 */
export function circlePoint(cx, cy, rad, radius) {
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

/**
 * Map HA weather condition string to emoji icon.
 * @param {string} condition - HA weather condition string.
 * @returns {string} Emoji icon.
 */
export function conditionIcon(condition) {
  return CONDITION_ICONS[condition] || '🌤️';
}

// ── Stat HTML Helper ────────────────────────────────────────────────

/**
 * Build a stat cell with optional tier colour text and 8% opacity background tint.
 * Shared across all Pulse Weather sections for visual consistency.
 * @param {string} value - Pre-escaped HTML value string.
 * @param {string} label - Stat label text (will be escaped).
 * @param {string} color - Hex tier colour (empty string = no colour/tint).
 * @returns {string} HTML string for stat div.
 */
export function statHtml(value, label, color) {
  const colorStyle = color ? ` style="color:${sanitizeCssValue(color)}"` : '';
  const bgStyle = color ? ` style="background:${sanitizeCssValue(color)}14; border-radius:6px"` : '';
  return `<div class="stat"${bgStyle}>
          <div class="pw-stat-value"${colorStyle}>${value}</div>
          <div class="pw-stat-label">${escapeHtml(label)}</div>
        </div>`;
}

/**
 * Display names for known HA weather conditions.
 * Explicit mapping avoids regex issues with concatenated compounds (e.g. "partlycloudy").
 * @type {Readonly<Record<string, string>>}
 */
const CONDITION_DISPLAY = /** @type {const} */ ({
  'clear-night': 'Clear Night',
  'cloudy': 'Cloudy',
  'exceptional': 'Exceptional',
  'fog': 'Fog',
  'hail': 'Hail',
  'lightning': 'Lightning',
  'lightning-rainy': 'Lightning Rainy',
  'partlycloudy': 'Partly Cloudy',
  'pouring': 'Pouring',
  'rainy': 'Rainy',
  'snowy': 'Snowy',
  'snowy-rainy': 'Snowy Rainy',
  'sunny': 'Sunny',
  'windy': 'Windy',
  'windy-variant': 'Windy Variant',
});

/**
 * Format a HA weather condition string for display.
 * Uses explicit mapping for known conditions, falls back to hyphen-split + title-case.
 * @param {string} condition - HA weather condition string.
 * @returns {string} Formatted display string.
 */
export function formatCondition(condition) {
  if (Object.hasOwn(CONDITION_DISPLAY, condition)) return CONDITION_DISPLAY[condition];
  return condition.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** @type {Readonly<Record<string, string>>} */
const MOON_PHASE_ICONS = {
  'New Moon': '🌑',
  'Waxing Crescent': '🌒',
  'First Quarter': '🌓',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Waning Gibbous': '🌖',
  'Last Quarter': '🌗',
  'Waning Crescent': '🌘',
};

/**
 * Get moon phase emoji for a phase name.
 * @param {string|null} phaseName - Moon phase name (e.g. "Full Moon").
 * @returns {string} Moon phase emoji, or '🌙' fallback.
 */
export function moonPhaseIcon(phaseName) {
  return MOON_PHASE_ICONS[phaseName || ''] || '🌙';
}

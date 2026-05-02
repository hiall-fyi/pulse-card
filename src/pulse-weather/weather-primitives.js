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

export { escapeHtml, sanitizeCssValue } from '../shared/utils.js';

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

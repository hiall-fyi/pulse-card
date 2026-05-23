/**
 * @module pulse-weather/utils
 * @description Config normalization and utility helpers for Pulse Weather Card.
 */

import { SECTION_TYPES } from './constants.js';

/**
 * @typedef {import('./types.js').PulseWeatherConfig} PulseWeatherConfig
 * @typedef {import('./types.js').SectionConfig} SectionConfig
 */

/** Default section config when none specified. */
const DEFAULT_SECTIONS = [{ type: 'overview' }];

/**
 * Section-specific default options.
 * @type {Readonly<Record<string, object>>}
 */
const SECTION_DEFAULTS = {
  overview: {},
  forecast: { mode: 'both' },
  wind: { speed_mode: 'speed' },
  air_quality: { scale: 'eu' },
  astro: {},
  alerts: {},
  atmosphere: {},
};

/**
 * Normalize a section config entry with defaults.
 * @param {SectionConfig} section - Raw section config.
 * @returns {SectionConfig} Normalized section config.
 */
function normalizeSection(section) {
  if (!section || typeof section !== 'object') return { type: 'overview' };
  const type = SECTION_TYPES.includes(/** @type {any} */ (section.type))
    ? section.type
    : 'overview';
  const defaults = SECTION_DEFAULTS[type] || {};
  return { ...defaults, ...section, type };
}

/**
 * Normalize card config with sensible defaults.
 * A minimal config of `{ type: 'custom:pulse-weather-card' }` renders overview.
 * @param {Record<string, unknown>} config - Raw card config.
 * @returns {PulseWeatherConfig} Normalized config.
 */
export function normalizeWeatherConfig(config) {
  if (!config || typeof config !== 'object') {
    return {
      type: 'custom:pulse-weather-card',
      sections: DEFAULT_SECTIONS.map(normalizeSection),
    };
  }

  const raw = /** @type {Record<string, unknown>} */ (config);
  const sections = Array.isArray(raw.sections) && raw.sections.length > 0
    ? raw.sections.map(normalizeSection)
    : DEFAULT_SECTIONS.map(normalizeSection);

  return {
    type: /** @type {string} */ (raw.type) || 'custom:pulse-weather-card',
    weather_entity: /** @type {string|undefined} */ (raw.weather_entity) || undefined,
    atmos_source: /** @type {string|undefined} */ (raw.atmos_source) || undefined,
    sections,
  };
}

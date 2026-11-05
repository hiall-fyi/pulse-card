/**
 * @module pulse-climate/outdoor-temp
 * @description Single resolver for outside temperature, shared by hero
 * (card-level) and radial (section-level). Resolution chain:
 *
 *   1. config.outdoor_temp_entity (explicit user override)
 *   2. discovery.hubEntities.outside_temp (Tado CE auto-discovered)
 *   3. First weather.* entity in states (generic HA fallback, reads
 *      attributes.temperature)
 */

import { isUnavailableState, resolveTempUnit, formatNumericDisplay } from '../shared/utils.js';

/**
 * @typedef {object} ResolvedOutdoor
 * @property {number|null} value - Numeric temperature, or null if unavailable.
 * @property {string} unit - Unit of measurement (default '°C').
 * @property {string|null} entityId - Source entity ID, or null if no source resolved.
 */

/**
 * Entity id the chain picks (config, hub, first weather.*), whether or not it exists in states.
 * @param {{outdoor_temp_entity?: string}|null|undefined} config
 * @param {import('./types.js').TadoDiscovery|null|undefined} discovery
 * @param {Record<string, *>|null|undefined} states
 * @returns {string|null}
 */
function pickOutdoorEntityId(config, discovery, states) {
  const picked = config?.outdoor_temp_entity || discovery?.hubEntities?.outside_temp || null;
  if (picked) return picked;
  for (const id of Object.keys(states || {})) {
    if (id.startsWith('weather.') && states?.[id]?.attributes?.temperature !== undefined) return id;
  }
  return null;
}

/**
 * Entity ids a surface showing the outdoor value must watch: the resolved temperature source plus the section humidity entity.
 *
 * @param {{outdoor_temp_entity?: string}|null|undefined} config - Card config.
 * @param {{outdoor_temp_entity?: string, outdoor_humidity_entity?: string}|null|undefined} sectionConfig
 * @param {import('./types.js').TadoDiscovery|null|undefined} discovery
 * @param {Record<string, *>} states
 * @returns {string[]}
 */
export function outdoorWatchIds(config, sectionConfig, discovery, states) {
  const effective = { outdoor_temp_entity: sectionConfig?.outdoor_temp_entity || config?.outdoor_temp_entity };
  const ids = [pickOutdoorEntityId(effective, discovery, states), sectionConfig?.outdoor_humidity_entity];
  return [...new Set(/** @type {string[]} */ (ids.filter(Boolean)))];
}

/**
 * Outdoor temperature as display text (one-decimal rule plus unit), or null when there is no numeric value.
 *
 * @param {{outdoor_temp_entity?: string}|null|undefined} config
 * @param {import('./types.js').TadoDiscovery|null|undefined} discovery
 * @param {Record<string, *>} states
 * @returns {string|null}
 */
export function formatOutdoorTemp(config, discovery, states) {
  const outdoor = resolveOutdoorTemp(config, discovery, states);
  if (outdoor.value === null) return null;
  return `${formatNumericDisplay(outdoor.value)}${outdoor.unit}`;
}

/**
 * Resolve outside temperature from card or section config + discovery + states.
 *
 * @param {{outdoor_temp_entity?: string}|null|undefined} config
 * @param {import('./types.js').TadoDiscovery|null|undefined} discovery
 * @param {Record<string, *>} states
 * @returns {ResolvedOutdoor}
 */
export function resolveOutdoorTemp(config, discovery, states) {
  const empty = { value: null, unit: resolveTempUnit(null), entityId: null };
  if (!states) return empty;

  const entityId = pickOutdoorEntityId(config, discovery, states);
  if (!entityId || !states[entityId]) return empty;

  const s = states[entityId];
  if (isUnavailableState(s)) {
    return { value: null, unit: resolveTempUnit(null), entityId };
  }

  const raw = s.attributes?.temperature !== undefined ? s.attributes.temperature : s.state;
  const value = Number.parseFloat(raw);
  const unit = resolveTempUnit(s.attributes);

  return {
    value: Number.isFinite(value) ? value : null,
    unit,
    entityId,
  };
}

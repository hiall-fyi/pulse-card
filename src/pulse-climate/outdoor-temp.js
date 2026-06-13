/**
 * @module pulse-climate/outdoor-temp
 * @description Single resolver for outside temperature, shared by hero
 * (card-level) and radial (section-level). Resolution chain:
 *
 *   1. config.outdoor_temp_entity (explicit user override)
 *   2. discovery.hubEntities.outside_temp (Tado CE auto-discovered)
 *   3. First weather.* entity in states (generic HA fallback — reads
 *      attributes.temperature)
 */

import { isUnavailableState } from '../shared/utils.js';

/**
 * @typedef {object} ResolvedOutdoor
 * @property {number|null} value - Numeric temperature, or null if unavailable.
 * @property {string} unit - Unit of measurement (default '°C').
 * @property {string|null} entityId - Source entity ID, or null if no source resolved.
 */

/**
 * Resolve outside temperature from card or section config + discovery + states.
 *
 * @param {{outdoor_temp_entity?: string}|null|undefined} config
 * @param {import('./types.js').TadoDiscovery|null|undefined} discovery
 * @param {Record<string, *>} states
 * @returns {ResolvedOutdoor}
 */
export function resolveOutdoorTemp(config, discovery, states) {
  const empty = { value: null, unit: '°C', entityId: null };
  if (!states) return empty;

  let entityId = config?.outdoor_temp_entity || discovery?.hubEntities?.outside_temp || null;

  if (!entityId) {
    for (const id of Object.keys(states)) {
      if (id.startsWith('weather.') && states[id]?.attributes?.temperature !== undefined) {
        entityId = id;
        break;
      }
    }
  }

  if (!entityId || !states[entityId]) return empty;

  const s = states[entityId];
  if (isUnavailableState(s)) {
    return { value: null, unit: '°C', entityId };
  }

  const raw = s.attributes?.temperature !== undefined ? s.attributes.temperature : s.state;
  const value = Number.parseFloat(raw);
  const unit = s.attributes?.unit_of_measurement || '°C';

  return {
    value: Number.isFinite(value) ? value : null,
    unit,
    entityId,
  };
}

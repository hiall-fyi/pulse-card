/**
 * @module pulse-climate/sensor-resolver
 * @description Shared history sensor resolution for all history-based sections.
 * Implements the 4-level resolution chain so every consumer (graph, thermal strip,
 * comfort strip, zone sparklines, history fetch) resolves sensors identically.
 */

/**
 * Result of resolving a history sensor entity.
 * @typedef {object} ResolvedSensor
 * @property {string} entityId - The resolved sensor entity ID to use for history data.
 * @property {'yaml_override'|'external'|'discovery'|'climate_fallback'} source
 *   - Which level of the resolution chain provided the entity.
 */

/**
 * Check if a value is a usable non-empty string.
 * Rejects empty strings, non-strings (numbers, objects, null, undefined).
 * @param {*} val
 * @returns {val is string}
 */
function isNonEmptyString(val) {
  return typeof val === 'string' && val.length > 0;
}

/**
 * Resolve the best temperature sensor entity for history data.
 *
 * Resolution chain (first non-empty match wins):
 * 1. zoneConfig.temperature_entity  (YAML override — no existence check; user intent wins)
 * 2. climate attributes.external_temp_sensor  (Tado CE external sensor)
 * 3. discovery.zoneEntities[zoneName].temperature  (auto-discovered)
 * 4. climateEntityId  (climate entity fallback)
 *
 * @param {string} climateEntityId - The climate.* entity ID for this zone.
 * @param {Record<string, *>} states - hass.states object.
 * @param {Record<string, string>} zoneEntities - discovery.zoneEntities[zoneName] map.
 * @param {import('./types.js').ZoneConfig} [zoneConfig] - Per-zone config (may have temperature_entity override).
 * @returns {ResolvedSensor}
 */
export function resolveHistoryTempSensor(climateEntityId, states, zoneEntities, zoneConfig) {
  if (isNonEmptyString(zoneConfig?.temperature_entity)) {
    return { entityId: /** @type {string} */ (zoneConfig.temperature_entity), source: 'yaml_override' };
  }

  const attrs = states[climateEntityId]?.attributes;
  const externalId = attrs?.external_temp_sensor;
  if (isNonEmptyString(externalId) && states[externalId]) {
    return { entityId: externalId, source: 'external' };
  }

  if (isNonEmptyString(zoneEntities?.temperature)) {
    return { entityId: zoneEntities.temperature, source: 'discovery' };
  }

  return { entityId: climateEntityId, source: 'climate_fallback' };
}

/**
 * Resolve the best humidity sensor entity for history data.
 *
 * Resolution chain (first non-empty match wins):
 * 1. zoneConfig.humidity_entity  (YAML override — no existence check; user intent wins)
 * 2. climate attributes.external_humidity_sensor  (Tado CE external sensor)
 * 3. discovery.zoneEntities[zoneName].humidity  (auto-discovered)
 * 4. null  (no humidity data available)
 *
 * @param {string} climateEntityId - The climate.* entity ID for this zone.
 * @param {Record<string, *>} states - hass.states object.
 * @param {Record<string, string>} zoneEntities - discovery.zoneEntities[zoneName] map.
 * @param {import('./types.js').ZoneConfig} [zoneConfig] - Per-zone config (may have humidity_entity override).
 * @returns {ResolvedSensor|null} - null when no humidity sensor is available.
 */
export function resolveHistoryHumSensor(climateEntityId, states, zoneEntities, zoneConfig) {
  if (isNonEmptyString(zoneConfig?.humidity_entity)) {
    return { entityId: /** @type {string} */ (zoneConfig.humidity_entity), source: 'yaml_override' };
  }

  const attrs = states[climateEntityId]?.attributes;
  const externalId = attrs?.external_humidity_sensor;
  if (isNonEmptyString(externalId) && states[externalId]) {
    return { entityId: externalId, source: 'external' };
  }

  if (isNonEmptyString(zoneEntities?.humidity)) {
    return { entityId: zoneEntities.humidity, source: 'discovery' };
  }

  return null;
}



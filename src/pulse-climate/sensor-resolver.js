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
 * 1. zoneConfig.temperature_entity  (YAML override)
 * 2. climate attributes.external_temp_sensor  (Tado CE external sensor)
 * 3. discovery.zoneEntities[zoneName].temperature  (auto-discovered)
 * 4. climateEntityId  (climate entity fallback)
 *
 * Step 1 (YAML override) intentionally does NOT validate entity existence.
 * This is a deliberate design choice — the user explicitly configured this
 * entity ID, so we respect their intent even if the entity is temporarily
 * unavailable. This differs from step 2 (external sensor) which validates
 * existence because it's auto-detected, not user-specified.
 *
 * @param {string} climateEntityId - The climate.* entity ID for this zone.
 * @param {Record<string, *>} states - hass.states object.
 * @param {Record<string, string>} zoneEntities - discovery.zoneEntities[zoneName] map.
 * @param {import('./types.js').ZoneConfig} [zoneConfig] - Per-zone config (may have temperature_entity override).
 * @returns {ResolvedSensor}
 */
export function resolveHistoryTempSensor(climateEntityId, states, zoneEntities, zoneConfig) {
  // 1. YAML override — highest priority, no existence check (user explicit choice)
  if (isNonEmptyString(zoneConfig?.temperature_entity)) {
    return { entityId: /** @type {string} */ (zoneConfig.temperature_entity), source: 'yaml_override' };
  }

  // 2. External sensor from Tado CE climate entity attributes
  const attrs = states[climateEntityId]?.attributes;
  const externalId = attrs?.external_temp_sensor;
  if (isNonEmptyString(externalId) && states[externalId]) {
    return { entityId: externalId, source: 'external' };
  }

  // 3. Discovered Tado CE sensor
  if (isNonEmptyString(zoneEntities?.temperature)) {
    return { entityId: zoneEntities.temperature, source: 'discovery' };
  }

  // 4. Climate entity fallback
  return { entityId: climateEntityId, source: 'climate_fallback' };
}

/**
 * Resolve the best humidity sensor entity for history data.
 *
 * Resolution chain (first non-empty match wins):
 * 1. zoneConfig.humidity_entity  (YAML override)
 * 2. climate attributes.external_humidity_sensor  (Tado CE external sensor)
 * 3. discovery.zoneEntities[zoneName].humidity  (auto-discovered)
 * 4. null  (no humidity data available)
 *
 * Step 1 (YAML override) intentionally does NOT validate entity existence —
 * same rationale as resolveHistoryTempSensor.
 *
 * @param {string} climateEntityId - The climate.* entity ID for this zone.
 * @param {Record<string, *>} states - hass.states object.
 * @param {Record<string, string>} zoneEntities - discovery.zoneEntities[zoneName] map.
 * @param {import('./types.js').ZoneConfig} [zoneConfig] - Per-zone config (may have humidity_entity override).
 * @returns {ResolvedSensor|null} - null when no humidity sensor is available.
 */
export function resolveHistoryHumSensor(climateEntityId, states, zoneEntities, zoneConfig) {
  // 1. YAML override — highest priority, no existence check (user explicit choice)
  if (isNonEmptyString(zoneConfig?.humidity_entity)) {
    return { entityId: /** @type {string} */ (zoneConfig.humidity_entity), source: 'yaml_override' };
  }

  // 2. External sensor from Tado CE climate entity attributes
  const attrs = states[climateEntityId]?.attributes;
  const externalId = attrs?.external_humidity_sensor;
  if (isNonEmptyString(externalId) && states[externalId]) {
    return { entityId: externalId, source: 'external' };
  }

  // 3. Discovered Tado CE sensor
  if (isNonEmptyString(zoneEntities?.humidity)) {
    return { entityId: zoneEntities.humidity, source: 'discovery' };
  }

  // 4. No humidity data
  return null;
}


/**
 * Build a source indicator HTML snippet for external sensor sources.
 * Returns empty string for non-external sources (discovery, climate_fallback, yaml_override).
 * @param {ResolvedSensor|null} resolved - Resolved sensor result.
 * @param {Record<string, *>} states - hass.states for friendly name lookup.
 * @returns {string} HTML string (empty if not external source).
 */
export function buildSourceIndicator(resolved, states) {
  if (!resolved || resolved.source !== 'external') return '';
  const friendlyName = states[resolved.entityId]?.attributes?.friendly_name || resolved.entityId;
  // Use shared/utils escapeHtml inline to avoid circular import
  const safe = String(friendlyName).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const safeId = String(resolved.entityId).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return ` <span class="source-indicator" title="${safeId}">${safe}</span>`;
}

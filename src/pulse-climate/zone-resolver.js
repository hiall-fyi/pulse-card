/**
 * @module zone-resolver
 * @description Auto-discover related entities for climate zones.
 * Supports i18n-safe discovery via HA entity registry (translation_key + platform)
 * with fallback to entity_id suffix matching for non-registry environments.
 */

// ── Translation Key Maps ────────────────────────────────────────────
// Primary discovery mechanism: match by translation_key + platform === "tado_ce".
// These are stable English strings that never change across HA languages.

/**
 * Hub-level translation_key → logical key mapping.
 * @type {Record<string, string>}
 */
const HUB_TRANSLATION_KEYS = {
  api_usage: 'api_usage',
  api_limit: 'api_limit',
  api_status: 'api_status',
  api_reset: 'api_reset',
  token_status: 'token_status',
  polling_interval: 'polling_interval',
  call_history: 'call_history',
  api_breakdown: 'api_breakdown',
  last_sync: 'last_sync',
  next_sync: 'next_sync',
  outside_temp: 'outside_temp',
  solar_intensity: 'solar_intensity',
  weather: 'weather',
  home_state: 'home',
  bridge_connected: 'bridge_connected',
  boiler_flow_temp: 'boiler_flow_temp',
  wc_target_flow: 'wc_target_flow_temp',
  wc_status: 'wc_status',
  boiler_max_output: 'boiler_max_output_temp',
  homekit_connected: 'homekit_connected',
  homekit_reads_saved: 'homekit_reads_saved',
  homekit_writes_saved: 'homekit_writes_saved',
  bridge_capabilities: 'bridge_capabilities',
  bridge_schema_version: 'bridge_schema_version',
  zone_count: 'zone_count',
  home_id: 'home_id',
  home_insights: 'home_insights',
};

/**
 * Zone-level translation_key → logical key mapping.
 * @type {Record<string, string>}
 */
const ZONE_TRANSLATION_KEYS = {
  temperature: 'temperature',
  humidity: 'humidity',
  heating_power: 'heating_power',
  ac_power: 'ac_power',
  target_temp: 'target',
  overlay: 'overlay',
  mold_risk: 'mold_risk',
  mold_risk_pct: 'mold_risk_pct',
  condensation: 'condensation_risk',
  surface_temp: 'surface_temp',
  dew_point: 'dew_point',
  comfort_level: 'comfort_level',
  thermal_inertia: 'thermal_inertia',
  heating_rate: 'heating_rate',
  preheat_time: 'preheat_time',
  confidence: 'confidence',
  heat_accel: 'heat_accel',
  approach_factor: 'approach_factor',
  schedule_deviation: 'schedule_deviation',
  next_schedule: 'next_schedule',
  next_sched_temp: 'next_sched_temp',
  preheat_advisor: 'preheat_advisor',
  comfort_target: 'comfort_target',
  open_window: 'window',
  preheat_now: 'preheat_now',
  window_predicted: 'window_predicted',
  battery: 'battery',
  connection: 'connection',
  insights: 'insights',
};


/**
 * Device-level translation_key → logical key mapping.
 * Device-level entities (battery, connection) use unique_id pattern
 * tado_ce_{home_id}_device_{serial}_{suffix} and are discovered via device_id matching.
 * @type {Record<string, string>}
 */
const DEVICE_TRANSLATION_KEYS = {
  battery: 'battery',
  connection: 'connection',
};

// ── Fallback: Entity ID Suffix Patterns ─────────────────────────────
// Used when hass.entities is unavailable or for non-Tado-CE integrations.

/**
 * Tado CE entity suffixes to scan for each zone (fallback).
 * @type {Record<string, {platform: string, suffixes: string[]}>}
 */
const TADO_ZONE_PATTERNS = {
  temperature:        { platform: 'sensor', suffixes: ['_temp', '_temperature'] },
  humidity:           { platform: 'sensor', suffixes: ['_humidity'] },
  heating_power:      { platform: 'sensor', suffixes: ['_heating', '_heating_power'] },
  ac_power:           { platform: 'sensor', suffixes: ['_ac', '_ac_power'] },
  target_temp:        { platform: 'sensor', suffixes: ['_ce_target', '_target'] },
  overlay:            { platform: 'sensor', suffixes: ['_ce_overlay', '_mode'] },
  mold_risk:          { platform: 'sensor', suffixes: ['_ce_mold_risk', '_mold_risk'] },
  mold_risk_pct:      { platform: 'sensor', suffixes: ['_ce_mold_risk_pct', '_mold_risk_percentage'] },
  condensation:       { platform: 'sensor', suffixes: ['_ce_condensation', '_condensation_risk'] },
  surface_temp:       { platform: 'sensor', suffixes: ['_ce_surface_temp', '_surface_temperature'] },
  dew_point:          { platform: 'sensor', suffixes: ['_ce_dew_point', '_dew_point'] },
  comfort_level:      { platform: 'sensor', suffixes: ['_ce_comfort_level', '_comfort_level'] },
  thermal_inertia:    { platform: 'sensor', suffixes: ['_ce_thermal_inertia', '_thermal_inertia'] },
  heating_rate:       { platform: 'sensor', suffixes: ['_ce_heating_rate', '_avg_heating_rate'] },
  preheat_time:       { platform: 'sensor', suffixes: ['_ce_preheat_time', '_preheat_time'] },
  confidence:         { platform: 'sensor', suffixes: ['_ce_confidence', '_analysis_confidence'] },
  schedule_deviation: { platform: 'sensor', suffixes: ['_ce_schedule_deviation', '_historical_deviation'] },
  next_schedule:      { platform: 'sensor', suffixes: ['_ce_next_schedule', '_next_schedule_time'] },
  next_sched_temp:    { platform: 'sensor', suffixes: ['_ce_next_sched_temp', '_next_schedule_temp'] },
  preheat_advisor:    { platform: 'sensor', suffixes: ['_ce_preheat_advisor', '_preheat_advisor'] },
  comfort_target:     { platform: 'sensor', suffixes: ['_ce_comfort_target', '_smart_comfort_target'] },
  heat_accel:         { platform: 'sensor', suffixes: ['_ce_heat_accel', '_heat_acceleration'] },
  approach_factor:    { platform: 'sensor', suffixes: ['_ce_approach_factor', '_approach_factor'] },
  open_window:        { platform: 'binary_sensor', suffixes: ['_window', '_open_window'] },
  preheat_now:        { platform: 'binary_sensor', suffixes: ['_ce_preheat_now', '_preheat_now'] },
  window_predicted:   { platform: 'binary_sensor', suffixes: ['_ce_window_predicted', '_window_predicted'] },
  battery:            { platform: 'sensor', suffixes: ['_ce_battery', '_battery'] },
  connection:         { platform: 'binary_sensor', suffixes: ['_ce_connection', '_connection'] },
  insights:           { platform: 'sensor', suffixes: ['_ce_insights', '_insights'] },
};

/**
 * Tado CE hub entity patterns (fallback).
 * @type {Record<string, {platform: string, suffixes: string[]}>}
 */
const TADO_HUB_PATTERNS = {
  api_usage:         { platform: 'sensor', suffixes: ['_api_usage'] },
  api_limit:         { platform: 'sensor', suffixes: ['_api_limit'] },
  api_status:        { platform: 'sensor', suffixes: ['_api_status'] },
  api_reset:         { platform: 'sensor', suffixes: ['_api_reset'] },
  token_status:      { platform: 'sensor', suffixes: ['_token_status'] },
  polling_interval:  { platform: 'sensor', suffixes: ['_polling_interval'] },
  call_history:      { platform: 'sensor', suffixes: ['_call_history'] },
  api_breakdown:     { platform: 'sensor', suffixes: ['_api_breakdown', '_api_call_breakdown'] },
  last_sync:         { platform: 'sensor', suffixes: ['_last_sync'] },
  next_sync:         { platform: 'sensor', suffixes: ['_next_sync'] },
  outside_temp:      { platform: 'sensor', suffixes: ['_outside_temp'] },
  solar_intensity:   { platform: 'sensor', suffixes: ['_solar_intensity'] },
  weather:           { platform: 'sensor', suffixes: ['_weather', '_weather_state'] },
  home_state:        { platform: 'binary_sensor', suffixes: ['_home'] },
  bridge_connected:  { platform: 'binary_sensor', suffixes: ['_bridge_connected', '_bridge'] },
  boiler_flow_temp:  { platform: 'sensor', suffixes: ['_boiler_flow_temp'] },
  wc_target_flow:    { platform: 'sensor', suffixes: ['_wc_target_flow_temp'] },
  wc_status:         { platform: 'sensor', suffixes: ['_wc_status'] },
  boiler_max_output: { platform: 'number', suffixes: ['_boiler_max_output_temp'] },
  homekit_connected: { platform: 'binary_sensor', suffixes: ['_homekit_connected'] },
  homekit_reads_saved:  { platform: 'sensor', suffixes: ['_homekit_reads_saved'] },
  homekit_writes_saved: { platform: 'sensor', suffixes: ['_homekit_writes_saved'] },
  bridge_capabilities:  { platform: 'sensor', suffixes: ['_bridge_capabilities'] },
  bridge_schema_version: { platform: 'sensor', suffixes: ['_bridge_schema_version'] },
  zone_count:           { platform: 'sensor', suffixes: ['_zone_count', '_zones_count'] },
  home_id:              { platform: 'sensor', suffixes: ['_home_id'] },
  home_insights:        { platform: 'sensor', suffixes: ['_home_insights'] },
};


// ── Registry-Based Discovery (i18n-safe) ────────────────────────────

/**
 * Build a lookup index from hass.entities: translation_key → entity_id
 * for all Tado CE entities. This is O(n) once, then O(1) per lookup.
 * @param {Record<string, import('./types.js').HassEntityRegistryEntry>} entities - hass.entities registry.
 * @returns {{byTranslationKey: Map<string, string>, byUniqueIdSuffix: Map<string, string>}}
 */
function buildRegistryIndex(entities) {
  /** @type {Map<string, string>} translation_key → entity_id */
  const byTranslationKey = new Map();
  /** @type {Map<string, string>} unique_id suffix → entity_id */
  const byUniqueIdSuffix = new Map();

  for (const [entityId, entry] of Object.entries(entities)) {
    if (entry.platform !== 'tado_ce') continue;
    if (entry.translation_key) {
      // Multiple entities may share a translation_key (e.g. per-zone "temperature").
      // Store all of them — zone matching will filter by unique_id suffix later.
      // For hub entities (only one per translation_key), first match wins.
      if (!byTranslationKey.has(entry.translation_key)) {
        byTranslationKey.set(entry.translation_key, entityId);
      }
    }
    if (entry.unique_id) {
      // Extract suffix after the prefix portion of the unique_id.
      // v3+: tado_ce_{home_id}_{suffix...} — home_id is numeric
      // v2:  tado_ce_{suffix...} — no home_id, suffix starts immediately after "tado_ce_"
      const parts = entry.unique_id.split('_');
      // Find the first segment after "tado" and "ce" that isn't purely numeric (= start of suffix)
      const idx = parts.findIndex((p, i) => i >= 2 && !/^\d+$/.test(p));
      if (idx > 0) {
        const suffix = parts.slice(idx).join('_');
        byUniqueIdSuffix.set(suffix, entityId);
      }
    }
  }

  return { byTranslationKey, byUniqueIdSuffix };
}

/**
 * Discover hub entities using the entity registry (i18n-safe).
 * @param {Record<string, import('./types.js').HassEntityRegistryEntry>} entities - hass.entities.
 * @param {{byTranslationKey: Map<string, string>, byUniqueIdSuffix: Map<string, string>}} index - Pre-built registry index.
 * @returns {Record<string, string>} Logical key → entity_id map.
 */
function discoverHubViaRegistry(entities, index) {
  /** @type {Record<string, string>} */
  const hubEntities = {};

  for (const [logicalKey, translationKey] of Object.entries(HUB_TRANSLATION_KEYS)) {
    // Primary: translation_key match
    const byTk = index.byTranslationKey.get(translationKey);
    if (byTk) { hubEntities[logicalKey] = byTk; continue; }

    // Secondary: unique_id suffix match (for entities without translation_key)
    const bySuffix = index.byUniqueIdSuffix.get(translationKey);
    if (bySuffix) { hubEntities[logicalKey] = bySuffix; }
  }

  return hubEntities;
}

/**
 * Discover zone entities using the entity registry (i18n-safe).
 * Zone entities have unique_id pattern: tado_ce_{home_id}_zone_{zone_id}_{suffix}
 * We match by finding Tado CE entities whose unique_id contains the zone's climate
 * entity's zone_id and ends with the expected suffix.
 * @param {Record<string, import('./types.js').HassEntityRegistryEntry>} entities - hass.entities.
 * @param {string[]} zoneNames - Zone name prefixes from climate entity IDs.
 * @param {Record<string, *>} states - hass.states for existence check.
 * @returns {Record<string, Record<string, string>>} zoneName → {logicalKey → entity_id}.
 */
function discoverZonesViaRegistry(entities, zoneNames, states) {
  // Build a per-zone lookup: for each zone, find its climate entity's unique_id
  // to extract the zone_id, then find all zone-level sensors by unique_id suffix.

  // First, build a map of all Tado CE entities grouped by their zone_id
  // unique_id pattern: tado_ce_{home_id}_zone_{zone_id}_{suffix} (v3+)
  //                 or tado_ce_zone_{zone_id}_{suffix} (v2.x upgrades)
  /** @type {Map<string, {suffix: string, entityId: string}[]>} zone_id → entries */
  const zoneIdMap = new Map();

  for (const [entityId, entry] of Object.entries(entities)) {
    if (entry.platform !== 'tado_ce' || !entry.unique_id) continue;
    const match = entry.unique_id.match(/^tado_ce_(?:\d+_)?zone_(\d+)_(.+)$/);
    if (!match) continue;
    const [, zoneId, suffix] = match;
    if (!zoneIdMap.has(zoneId)) zoneIdMap.set(zoneId, []);
    /** @type {*} */ (zoneIdMap.get(zoneId)).push({ suffix, entityId });
  }

  // For each configured zone, find its zone_id from the climate entity's unique_id
  /** @type {Record<string, Record<string, string>>} */
  const zoneEntities = {};

  for (const zoneName of zoneNames) {
    zoneEntities[zoneName] = {};

    // Try to find the climate entity's registry entry to get zone_id
    const climateEntityId = `climate.${zoneName}`;
    const climateEntry = entities[climateEntityId];
    let zoneId = null;

    if (climateEntry?.platform === 'tado_ce' && climateEntry.unique_id) {
      // Pattern: tado_ce_{home_id}_zone_{zone_id}_climate (v3+)
      //       or tado_ce_zone_{zone_id}_climate (v2.x upgrades)
      const climateMatch = climateEntry.unique_id.match(/^tado_ce_(?:\d+_)?zone_(\d+)_/);
      if (climateMatch) zoneId = climateMatch[1];
    }

    if (zoneId && zoneIdMap.has(zoneId)) {
      const entries = /** @type {*[]} */ (zoneIdMap.get(zoneId));
      // Build suffix → logicalKey reverse map from ZONE_TRANSLATION_KEYS
      // Zone unique_id suffixes match the values in ZONE_TRANSLATION_KEYS
      // (e.g. suffix "temp" for temperature, "humidity" for humidity)
      for (const [logicalKey, translationKey] of Object.entries(ZONE_TRANSLATION_KEYS)) {
        // Match by translation_key on the registry entry (most reliable)
        const byTk = entries.find((e) => {
          const regEntry = entities[e.entityId];
          return regEntry?.translation_key === translationKey;
        });
        if (byTk && states[byTk.entityId]) {
          zoneEntities[zoneName][logicalKey] = byTk.entityId;
        }
      }
    }
  }

  // Device-level discovery: battery, connection share device_id with climate entity
  for (const zoneName of zoneNames) {
    const climateEntityId = `climate.${zoneName}`;
    const climateEntry = entities[climateEntityId];
    if (!climateEntry?.device_id) continue;

    const deviceId = climateEntry.device_id;

    for (const [entityId, entry] of Object.entries(entities)) {
      if (entry.platform !== 'tado_ce' || entry.device_id !== deviceId) continue;
      if (!entry.translation_key || !states[entityId]) continue;

      for (const [logicalKey, tkPrefix] of Object.entries(DEVICE_TRANSLATION_KEYS)) {
        if (entry.translation_key === tkPrefix) {
          // Primary device entity (e.g. "battery")
          if (!zoneEntities[zoneName][logicalKey]) {
            zoneEntities[zoneName][logicalKey] = entityId;
          }
        } else if (entry.translation_key === `${tkPrefix}_suffixed`) {
          // Secondary device entity (e.g. "battery_suffixed")
          const suffixedKey = `${logicalKey}_2`;
          if (!zoneEntities[zoneName][suffixedKey]) {
            zoneEntities[zoneName][suffixedKey] = entityId;
          }
        }
      }
    }
  }

  return zoneEntities;
}

// ── Fallback: Entity ID Suffix Discovery ────────────────────────────

/**
 * Discover hub entities via entity_id suffix matching (fallback for non-registry).
 * @param {Record<string, *>} states - hass.states.
 * @returns {Record<string, string>} Logical key → entity_id map.
 */
function discoverHubViaSuffix(states) {
  /** @type {Record<string, string>} */
  const hubEntities = {};
  const allEntityIds = Object.keys(states);

  for (const [key, { platform, suffixes }] of Object.entries(TADO_HUB_PATTERNS)) {
    for (const suffix of suffixes) {
      const found = allEntityIds.find((eid) =>
        eid.startsWith(`${platform}.tado_ce`) && eid.endsWith(suffix),
      );
      if (found) { hubEntities[key] = found; break; }
    }
  }

  return hubEntities;
}

/**
 * Discover zone entities via entity_id suffix matching (fallback for non-registry).
 * @param {Record<string, *>} states - hass.states.
 * @param {string[]} zoneNames - Zone name prefixes.
 * @returns {Record<string, Record<string, string>>} zoneName → {logicalKey → entity_id}.
 */
function discoverZonesViaSuffix(states, zoneNames) {
  /** @type {Record<string, Record<string, string>>} */
  const zoneEntities = {};

  for (const zoneName of zoneNames) {
    zoneEntities[zoneName] = {};
    for (const [key, { platform, suffixes }] of Object.entries(TADO_ZONE_PATTERNS)) {
      for (const suffix of suffixes) {
        const eid = `${platform}.${zoneName}${suffix}`;
        if (states[eid]) { zoneEntities[zoneName][key] = eid; break; }
      }
    }
  }

  return zoneEntities;
}

// ── Shared Discovery Cache ──────────────────────────────────────────
// Module-level cache so multiple card instances on the same page reuse
// a single discovery scan instead of each scanning independently.

/** @type {{ states: Record<string, *>|null, zoneNames: string[]|null, result: import('./types.js').TadoDiscovery|null }} */
let _discoveryCache = { states: null, zoneNames: null, result: null };

// ── Public API ──────────────────────────────────────────────────────

/**
 * Discover all Tado CE entities using i18n-safe registry lookup with
 * entity_id suffix fallback.
 * @param {Record<string, *>} states - hass.states object.
 * @param {string[]} zoneNames - Zone name prefixes derived from climate entity IDs.
 * @param {Record<string, import('./types.js').HassEntityRegistryEntry>} [entities] - hass.entities registry (optional).
 * @returns {import('./types.js').TadoDiscovery}
 */
export function discoverTadoEntities(states, zoneNames, entities) {
  // Cache hit: same states object reference AND same zone names → return cached result
  if (_discoveryCache.result
      && _discoveryCache.states === states
      && _discoveryCache.zoneNames !== null
      && _discoveryCache.zoneNames.length === zoneNames.length
      && _discoveryCache.zoneNames.every((n, i) => n === zoneNames[i])) {
    return _discoveryCache.result;
  }

  // 1. Check if Tado CE is present — try registry first, fall back to entity_id scan
  let isTadoCE = false;
  let useRegistry = false;

  if (entities) {
    isTadoCE = Object.values(entities).some((e) => e.platform === 'tado_ce');
    useRegistry = isTadoCE;
  }
  if (!isTadoCE) {
    isTadoCE = Object.keys(states).some((eid) => eid.startsWith('sensor.tado_ce_'));
  }

  // 2. Discover hub entities
  /** @type {Record<string, string>} */
  let hubEntities = {};
  if (isTadoCE) {
    if (useRegistry) {
      const index = buildRegistryIndex(/** @type {Record<string, import('./types.js').HassEntityRegistryEntry>} */ (entities));
      hubEntities = discoverHubViaRegistry(/** @type {Record<string, import('./types.js').HassEntityRegistryEntry>} */ (entities), index);

      // Merge any entities found by suffix that registry missed
      // (covers edge cases where translation_key is absent)
      const suffixHub = discoverHubViaSuffix(states);
      for (const [key, eid] of Object.entries(suffixHub)) {
        if (!hubEntities[key]) hubEntities[key] = eid;
      }
    } else {
      hubEntities = discoverHubViaSuffix(states);
    }
  }

  // 3. Discover per-zone entities
  /** @type {Record<string, Record<string, string>>} */
  let zoneEntities;
  if (useRegistry) {
    zoneEntities = discoverZonesViaRegistry(/** @type {Record<string, import('./types.js').HassEntityRegistryEntry>} */ (entities), zoneNames, states);

    // Merge any zone entities found by suffix that registry missed
    const suffixZones = discoverZonesViaSuffix(states, zoneNames);
    for (const zoneName of zoneNames) {
      if (!zoneEntities[zoneName]) zoneEntities[zoneName] = {};
      const suffixZone = suffixZones[zoneName] || {};
      for (const [key, eid] of Object.entries(suffixZone)) {
        if (!zoneEntities[zoneName][key]) zoneEntities[zoneName][key] = eid;
      }
    }
  } else {
    zoneEntities = discoverZonesViaSuffix(states, zoneNames);
  }

  // 4. Compute missing hub keys for caller to log
  const missingHubKeys = Object.keys(HUB_TRANSLATION_KEYS).filter((k) => !hubEntities[k]);

  const result = { isTadoCE, hubEntities, zoneEntities, missingHubKeys };

  // Debug logging for discovery diagnostics
  if (isTadoCE) {
    for (const [zoneName, ze] of Object.entries(zoneEntities)) {
      const keys = Object.keys(ze);
      if (keys.length === 0) {
        console.debug('Pulse Climate: zone "%s" — no entities discovered (check unique_id format)', zoneName);
      }
    }
  }

  // Update cache — store a copy of zoneNames to prevent external mutation
  _discoveryCache = { states, zoneNames: [...zoneNames], result };

  return result;
}

/**
 * Reset the discovery cache (for testing).
 */
export function resetDiscoveryCache() {
  _discoveryCache = { states: null, zoneNames: null, result: null };
}

/**
 * Extract zone name prefix from a climate entity ID.
 * e.g. 'climate.living_room' → 'living_room'
 * @param {string} entityId
 * @returns {string}
 */
export function extractZoneName(entityId) {
  return entityId.replace(/^(climate|sensor|binary_sensor)\./, '');
}

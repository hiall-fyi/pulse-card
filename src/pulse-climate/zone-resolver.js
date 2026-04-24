/**
 * @module zone-resolver
 * @description Auto-discover related entities for climate zones.
 * Supports Tado CE entity patterns with generic climate fallback.
 */

/**
 * Tado CE entity suffixes to scan for each zone.
 * Key = logical name, value = array of possible entity_id suffixes.
 * Tries v3.0+ fresh install patterns first, then v2.3.1 legacy.
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
  battery:            { platform: 'sensor', suffixes: ['_battery'] },
  connection:         { platform: 'binary_sensor', suffixes: ['_connection'] },
  insights:           { platform: 'sensor', suffixes: ['_ce_insights', '_insights'] },
};

/**
 * Tado CE hub entity patterns (not per-zone).
 * @type {Record<string, {platform: string, suffixes: string[]}>}
 */
const TADO_HUB_PATTERNS = {
  // Hub entity suffixes — match any entity ending with these suffixes
  // HA may generate entity_ids with or without "_hub_" depending on device name
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

/**
 * Discover all Tado CE entities from hass.states.
 * @param {Record<string, *>} states - hass.states object.
 * @param {string[]} zoneNames - Zone name prefixes derived from climate entity IDs.
 * @returns {import('./types.js').TadoDiscovery}
 */
export function discoverTadoEntities(states, zoneNames) {
  // 1. Check if Tado CE is present
  const isTadoCE = Object.keys(states).some(eid => eid.startsWith('sensor.tado_ce_'));

  // 2. Discover hub entities via suffix matching
  // HA entity_ids vary (with/without _hub_ prefix) so we match by suffix
  /** @type {Record<string, string>} */
  const hubEntities = {};
  /** @type {string[]} */
  let missingHubKeys = [];
  if (isTadoCE) {
    const allEntityIds = Object.keys(states);
    for (const [key, { platform, suffixes }] of Object.entries(TADO_HUB_PATTERNS)) {
      for (const suffix of suffixes) {
        const found = allEntityIds.find((eid) =>
          eid.startsWith(`${platform}.tado_ce`) && eid.endsWith(suffix),
        );
        if (found) { hubEntities[key] = found; break; }
      }
    }
    // Compute missing hub keys for caller to log
    missingHubKeys = Object.keys(TADO_HUB_PATTERNS).filter((k) => !hubEntities[k]);
  }

  // 3. Discover per-zone entities
  /** @type {Record<string, Record<string, string>>} */
  const zoneEntities = {};
  for (const zoneName of zoneNames) {
    /** @type {Record<string, string>} */
    zoneEntities[zoneName] = {};
    for (const [key, { platform, suffixes }] of Object.entries(TADO_ZONE_PATTERNS)) {
      for (const suffix of suffixes) {
        const eid = `${platform}.${zoneName}${suffix}`;
        if (states[eid]) { zoneEntities[zoneName][key] = eid; break; }
      }
    }
  }

  return { isTadoCE, hubEntities, zoneEntities, missingHubKeys };
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

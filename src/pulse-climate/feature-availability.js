/**
 * @module pulse-climate/feature-availability
 * @description Shared feature availability checks for Tado CE exclusive metrics.
 *
 * Universal metrics (temp, humidity, power) are always available from
 * resolveZoneState(). This module handles Tado CE exclusive metrics that
 * require discovered sensor entities — currently comfort_level.
 *
 * Use isMetricAvailable() for section-level gating (e.g. "show Comfort tab?").
 * Use resolveMetricValue() for zone-level value lookup.
 */

import { extractZoneName } from './zone-resolver.js';

/**
 * Tado CE exclusive metric definitions.
 * Maps metric key → discovery entity key used in zoneEntities.
 * @type {Record<string, string>}
 */
const TADO_CE_METRICS = {
  comfort: 'comfort_level',
};

/**
 * Check if a Tado CE exclusive metric is available for at least one zone.
 *
 * Returns true if any zone has the corresponding discovered entity with
 * a valid (non-unavailable) state. For universal metrics (temp, humidity,
 * power) this always returns true — they don't need discovery.
 *
 * @param {string} metricKey - Metric key: 'power', 'temp', 'humidity', or 'comfort'.
 * @param {import('./types.js').ZoneConfig[]} zones - Zone configs.
 * @param {import('./types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {Record<string, *>} states - hass.states object.
 * @returns {boolean}
 */
export function isMetricAvailable(metricKey, zones, discovery, states) {
  // Universal metrics — always available from climate entity attributes
  if (!(metricKey in TADO_CE_METRICS)) return true;

  const entityKey = TADO_CE_METRICS[metricKey];
  if (!zones || zones.length === 0) return false;

  for (const zoneConfig of zones) {
    const zoneName = extractZoneName(zoneConfig.entity);
    const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
    const entityId = zoneEntities[entityKey];
    if (entityId && states[entityId] && states[entityId].state !== 'unavailable') {
      return true;
    }
  }
  return false;
}

/**
 * Resolve a Tado CE exclusive metric value for a specific zone.
 *
 * For comfort: reads `temperature` and `comfort_target` from the
 * comfort_level sensor attributes and computes a 0–100 score based on
 * deviation from the ASHRAE/seasonal comfort target. Deviation 0 = 100,
 * deviation ±10 = 0.
 *
 * @param {string} metricKey - Metric key (must be in TADO_CE_METRICS).
 * @param {string} zoneName - Zone name (extracted from entity ID).
 * @param {import('./types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {Record<string, *>} states - hass.states object.
 * @returns {number|null}
 */
export function resolveMetricValue(metricKey, zoneName, discovery, states) {
  const entityKey = TADO_CE_METRICS[metricKey];
  if (!entityKey) return null;

  const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
  const entityId = zoneEntities[entityKey];
  if (!entityId) return null;

  const state = states[entityId];
  if (!state || state.state === 'unavailable' || state.state === 'unknown') return null;

  // Comfort: score from deviation between actual temp and comfort target
  // Both values are in the sensor's extra_state_attributes
  if (metricKey === 'comfort') {
    const attrs = state.attributes || {};
    const temp = parseFloat(attrs.temperature);
    const target = parseFloat(attrs.comfort_target);
    if (!Number.isFinite(temp) || !Number.isFinite(target)) return null;
    const deviation = Math.abs(temp - target);
    return Math.max(0, Math.min(100, Math.round(100 - deviation * 10)));
  }

  const val = parseFloat(state.state);
  return Number.isFinite(val) ? val : null;
}

/**
 * Get the list of available ranking metrics for the current setup.
 *
 * Always includes power, temp, humidity. Includes comfort only when
 * at least one zone has a discovered comfort_level entity.
 *
 * @param {import('./types.js').ZoneConfig[]} zones - Zone configs.
 * @param {import('./types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {Record<string, *>} states - hass.states object.
 * @returns {string[]} Array of available metric keys.
 */
export function getAvailableMetrics(zones, discovery, states) {
  const metrics = ['power', 'temp', 'humidity'];
  if (isMetricAvailable('comfort', zones, discovery, states)) {
    metrics.push('comfort');
  }
  return metrics;
}

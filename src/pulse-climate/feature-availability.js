/**
 * @module pulse-climate/feature-availability
 * @description Shared availability checks for Zone Ranking metrics.
 *
 * Temp, humidity and power are always available. Comfort is available when
 * at least one zone produces a Comfort score, for any climate entity; a
 * Tado CE comfort_level entity only adds the level term to that score.
 *
 * Use isMetricAvailable() for section-level gating (e.g. "show Comfort tab?").
 */

import { computeComfortScore, resolveComfortInputs } from './sections/comfort-strip.js';
import { resolveZoneContext } from './utils.js';

/**
 * Check if a ranking metric is available for at least one zone.
 *
 * Comfort is available when any available zone has a current temperature and
 * a target; the other metrics are always available.
 *
 * @param {string} metricKey - Metric key: 'power', 'temp', 'humidity', or 'comfort'.
 * @param {import('./types.js').ZoneConfig[]} zones - Zone configs.
 * @param {import('./types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {Record<string, *>} states - hass.states object.
 * @returns {boolean}
 */
export function isMetricAvailable(metricKey, zones, discovery, states) {
  if (metricKey !== 'comfort') return true;
  if (!zones || zones.length === 0) return false;

  for (const zoneConfig of zones) {
    const ctx = resolveZoneContext(zoneConfig, discovery, states);
    if (ctx.zoneState.isUnavailable) continue;
    const c = resolveComfortInputs(zoneConfig, ctx, states);
    if (computeComfortScore(c.temp, c.target, c.humidity, c.level) !== null) return true;
  }
  return false;
}

/**
 * Get the list of available ranking metrics for the current setup.
 *
 * Always includes power, temp, humidity. Includes comfort only when
 * at least one zone produces a Comfort score.
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

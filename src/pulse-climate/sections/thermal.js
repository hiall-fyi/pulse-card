/**
 * @module pulse-climate/sections/thermal
 * @description Render per-zone thermal analytics section for Tado CE.
 */

import { escapeHtml } from '../../shared/utils.js';
import { extractZoneName } from '../zone-resolver.js';

/**
 * Render thermal section HTML for all zones.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @returns {string} HTML string (empty if no thermal entities found).
 */
export function renderThermalSection(zones, states, discovery) {
  let hasAny = false;
  let html = `<div class="pc-section pc-section-thermal">`;
  html += `<div class="pulse-section-label">Thermal Analytics</div>`;

  for (const zoneConfig of zones) {
    const zoneName = extractZoneName(zoneConfig.entity);
    const entities = discovery?.zoneEntities?.[zoneName] || {};
    const hasRate = entities.heating_rate && states[entities.heating_rate];
    const hasInertia = entities.thermal_inertia && states[entities.thermal_inertia];
    const hasPreheat = entities.preheat_time && states[entities.preheat_time];
    const hasConf = entities.confidence && states[entities.confidence];
    const hasAccel = entities.heat_accel && states[entities.heat_accel];
    const hasApproach = entities.approach_factor && states[entities.approach_factor];

    if (!hasRate && !hasInertia && !hasPreheat && !hasConf && !hasAccel && !hasApproach) continue;
    hasAny = true;

    const friendlyName = zoneConfig.name || states[zoneConfig.entity]?.attributes?.friendly_name || zoneName;
    html += `<div class="pc-system-row"><span class="pc-system-label">${escapeHtml(friendlyName)}</span>`;
    html += `<div class="pc-zone-chips">`;

    if (hasRate) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(entities.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${escapeHtml(states[entities.heating_rate].state)}${escapeHtml(states[entities.heating_rate]?.attributes?.unit_of_measurement || '°C/hr')}</span>`;
    }
    if (hasInertia) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(entities.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${escapeHtml(states[entities.thermal_inertia].state)}</span>`;
    }
    if (hasPreheat) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(entities.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${escapeHtml(states[entities.preheat_time].state)} min</span>`;
    }
    if (hasConf) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(entities.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${escapeHtml(states[entities.confidence].state)}%</span>`;
    }
    if (hasAccel) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(entities.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${escapeHtml(states[entities.heat_accel].state)}${escapeHtml(states[entities.heat_accel]?.attributes?.unit_of_measurement || '')}</span>`;
    }
    if (hasApproach) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(entities.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${escapeHtml(states[entities.approach_factor].state)}${escapeHtml(states[entities.approach_factor]?.attributes?.unit_of_measurement || '')}</span>`;
    }

    html += `</div></div>`;
  }

  html += `</div>`;
  return hasAny ? html : '';
}


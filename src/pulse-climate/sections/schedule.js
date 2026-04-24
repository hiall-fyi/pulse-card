/**
 * @module pulse-climate/sections/schedule
 * @description Render per-zone schedule section for Tado CE.
 */

import { escapeHtml } from '../../shared/utils.js';
import { extractZoneName } from '../zone-resolver.js';

/**
 * Render schedule section HTML for all zones.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @returns {string} HTML string (empty if no schedule entities found).
 */
export function renderScheduleSection(zones, states, discovery) {
  let hasAny = false;
  let html = `<div class="section section-schedule">`;
  html += `<div class="section-label">Schedule</div>`;

  for (const zoneConfig of zones) {
    const zoneName = extractZoneName(zoneConfig.entity);
    const entities = discovery?.zoneEntities?.[zoneName] || {};
    const hasNext = entities.next_schedule && states[entities.next_schedule];
    const hasDeviation = entities.schedule_deviation && states[entities.schedule_deviation];
    const hasAdvisor = entities.preheat_advisor && states[entities.preheat_advisor];
    const hasComfort = entities.comfort_target && states[entities.comfort_target];

    if (!hasNext && !hasDeviation && !hasAdvisor && !hasComfort) continue;
    hasAny = true;

    const friendlyName = zoneConfig.name || states[zoneConfig.entity]?.attributes?.friendly_name || zoneName;
    html += `<div class="system-row"><span class="system-label">${escapeHtml(friendlyName)}</span>`;
    html += `<div class="zone-chips">`;

    if (hasNext) {
      const nextTemp = entities.next_sched_temp && states[entities.next_sched_temp]
        ? ` → ${escapeHtml(states[entities.next_sched_temp].state)}${states[entities.next_sched_temp]?.attributes?.unit_of_measurement || '°C'}`
        : '';
      html += `<span class="chip" data-entity="${escapeHtml(entities.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${escapeHtml(states[entities.next_schedule].state)}${nextTemp}</span>`;
    }
    if (hasDeviation) {
      html += `<span class="chip" data-entity="${escapeHtml(entities.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${escapeHtml(states[entities.schedule_deviation].state)}${states[entities.schedule_deviation]?.attributes?.unit_of_measurement || '°C'}</span>`;
    }
    if (hasAdvisor) {
      html += `<span class="chip" data-entity="${escapeHtml(entities.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${escapeHtml(states[entities.preheat_advisor].state)}</span>`;
    }
    if (hasComfort) {
      html += `<span class="chip" data-entity="${escapeHtml(entities.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${escapeHtml(states[entities.comfort_target].state)}${states[entities.comfort_target]?.attributes?.unit_of_measurement || '°C'}</span>`;
    }

    html += `</div></div>`;
  }

  html += `</div>`;
  return hasAny ? html : '';
}


/**
 * @module pulse-climate/sections/environment
 * @description Render per-zone environment health section for Tado CE.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { resolveRiskColor } from '../utils.js';
import { extractZoneName } from '../zone-resolver.js';

/**
 * Render environment section HTML for all zones.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @returns {string} HTML string (empty if no environment entities found).
 */
export function renderEnvironmentSection(zones, states, discovery) {
  let hasAny = false;
  let html = `<div class="section section-environment">`;
  html += `<div class="section-label">Environment</div>`;

  for (const zoneConfig of zones) {
    const zoneName = extractZoneName(zoneConfig.entity);
    const entities = discovery?.zoneEntities?.[zoneName] || {};
    const hasMold = entities.mold_risk && states[entities.mold_risk];
    const hasCond = entities.condensation && states[entities.condensation];
    const hasComfort = entities.comfort_level && states[entities.comfort_level];
    const hasSurface = entities.surface_temp && states[entities.surface_temp];
    const hasDew = entities.dew_point && states[entities.dew_point];

    if (!hasMold && !hasCond && !hasComfort && !hasSurface && !hasDew) continue;
    hasAny = true;

    const friendlyName = zoneConfig.name || states[zoneConfig.entity]?.attributes?.friendly_name || zoneName;
    html += `<div class="system-row"><span class="system-label">${escapeHtml(friendlyName)}</span>`;
    html += `<div class="zone-chips">`;

    if (hasMold) {
      const val = states[entities.mold_risk].state;
      const color = resolveRiskColor(val);
      html += `<span class="chip" data-entity="${escapeHtml(entities.mold_risk)}" style="color:${sanitizeCssValue(color.fallback)}">`;
      html += `<ha-icon icon="mdi:mushroom"></ha-icon>${escapeHtml(val)}</span>`;
    }
    if (hasCond) {
      const val = states[entities.condensation].state;
      const color = resolveRiskColor(val);
      html += `<span class="chip" data-entity="${escapeHtml(entities.condensation)}" style="color:${sanitizeCssValue(color.fallback)}">`;
      html += `<ha-icon icon="mdi:water-alert"></ha-icon>${escapeHtml(val)}</span>`;
    }
    if (hasComfort) {
      html += `<span class="chip" data-entity="${escapeHtml(entities.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${escapeHtml(states[entities.comfort_level].state)}</span>`;
    }
    if (hasSurface) {
      html += `<span class="chip" data-entity="${escapeHtml(entities.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${escapeHtml(states[entities.surface_temp].state)}${states[entities.surface_temp]?.attributes?.unit_of_measurement || '°C'}</span>`;
    }
    if (hasDew) {
      html += `<span class="chip" data-entity="${escapeHtml(entities.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${escapeHtml(states[entities.dew_point].state)}${states[entities.dew_point]?.attributes?.unit_of_measurement || '°C'}</span>`;
    }

    html += `</div></div>`;
  }

  html += `</div>`;
  return hasAny ? html : '';
}


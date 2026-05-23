/**
 * @module pulse-climate/sections/bridge
 * @description Render Bridge section with connection health and diagnostics
 * from the bridge_connected entity's attributes.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { temperatureToColor, renderSparklineHtml } from '../chart-primitives.js';

/**
 * Render Bridge section HTML.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache.
 * @returns {string} HTML string (empty if no entities found).
 */
export function renderBridgeSection(hubEntities, states, historyCache) {
  if (!hubEntities.bridge_connected) return '';

  const connState = states[hubEntities.bridge_connected];
  if (!connState) return '';
  const connected = connState.state === 'on';
  const connColor = connected
    ? 'var(--pulse-status-green)'
    : 'var(--pulse-status-red)';
  const connLabel = connected ? 'Connected' : 'Disconnected';
  const dotClass = connected ? 'pc-pulse-dot pc-connected' : 'pc-pulse-dot pc-disconnected';

  const attrs = connState.attributes || {};
  const responseTime = attrs.response_time_ms;
  const failures = attrs.consecutive_failures;
  const lastError = attrs.last_error;
  const tempUnit = hubEntities.boiler_flow_temp ? (states[hubEntities.boiler_flow_temp]?.attributes?.unit_of_measurement || '°C') : '°C';

  let html = `<div class="pc-section pc-section-bridge">`;
  html += `<div class="pulse-section-label">Bridge</div>`;

  html += `<div class="pc-zone-chips">`;
  html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}" style="color:${sanitizeCssValue(connColor)}">`;
  html += `<span class="${dotClass}"></span>`;
  html += `${escapeHtml(connLabel)}</span>`;
  if (responseTime !== undefined) {
    html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}">${escapeHtml(Math.round(responseTime))}ms</span>`;
  }
  if (failures !== undefined && failures > 0) {
    html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}" style="color:var(--pulse-status-red)">Failures: ${escapeHtml(failures)}</span>`;
  }
  html += `</div>`;

  if (hubEntities.boiler_flow_temp && states[hubEntities.boiler_flow_temp]) {
    const temp = parseFloat(states[hubEntities.boiler_flow_temp].state);
    const tempStr = states[hubEntities.boiler_flow_temp].state;
    const tempColor = !isNaN(temp) ? temperatureToColor(temp) : 'var(--pulse-text-primary)';

    html += `<div style="display:flex;align-items:center;gap:8px;margin-top:4px">`;
    html += `<span class="pc-flow-temp-value" style="color:${sanitizeCssValue(tempColor)}">${escapeHtml(tempStr)}${escapeHtml(tempUnit)}</span>`;

    if (historyCache) {
      const data = historyCache.data?.[hubEntities.boiler_flow_temp] || [];
      const sparkHtml = renderSparklineHtml(data, 120, 30, tempColor, 'bridge-flow-grad', 'Boiler flow temperature history');
      if (sparkHtml) {
        html += `<div class="pc-flow-sparkline">${sparkHtml}</div>`;
      }
    }
    html += `</div>`;
  }

  const hasWc = hubEntities.wc_status && states[hubEntities.wc_status];
  const hasWcTarget = hubEntities.wc_target_flow && states[hubEntities.wc_target_flow];
  if (hasWc || hasWcTarget) {
    html += `<div class="pc-zone-chips">`;
    if (hasWc) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.wc_status)}">${escapeHtml(states[hubEntities.wc_status].state)}</span>`;
    }
    if (hasWcTarget) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.wc_target_flow)}">Target: ${escapeHtml(states[hubEntities.wc_target_flow].state)}${escapeHtml(tempUnit)}</span>`;
    }
    html += `</div>`;
  }

  /* boiler_max_output is a number entity — chip is tappable to open the more-info dialog. */
  if (hubEntities.boiler_max_output && states[hubEntities.boiler_max_output]) {
    const maxTemp = states[hubEntities.boiler_max_output].state;
    if (maxTemp !== 'unavailable' && maxTemp !== 'unknown') {
      html += `<div class="pc-zone-chips">`;
      html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.boiler_max_output)}">`;
      html += `<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${escapeHtml(maxTemp)}${escapeHtml(tempUnit)}</span>`;
      html += `</div>`;
    }
  }

  if (lastError && lastError !== 'None' && lastError !== 'null') {
    html += `<div class="pc-zone-chips">`;
    html += `<span class="pc-chip" style="color:var(--pulse-status-red)">Error: ${escapeHtml(lastError)}</span>`;
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}



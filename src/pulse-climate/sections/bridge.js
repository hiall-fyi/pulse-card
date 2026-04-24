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
    ? 'var(--label-badge-green, #4CAF50)'
    : 'var(--label-badge-red, #F44336)';
  const connLabel = connected ? 'Connected' : 'Disconnected';
  const dotClass = connected ? 'pulse-dot connected' : 'pulse-dot disconnected';

  const attrs = connState.attributes || {};
  const responseTime = attrs.response_time_ms;
  const failures = attrs.consecutive_failures;
  const lastError = attrs.last_error;
  const tempUnit = hubEntities.boiler_flow_temp ? (states[hubEntities.boiler_flow_temp]?.attributes?.unit_of_measurement || '°C') : '°C';

  let html = `<div class="section section-bridge">`;
  html += `<div class="section-label">Bridge</div>`;

  // Connection badge with pulse dot
  html += `<div class="zone-chips">`;
  html += `<span class="chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}" style="color:${sanitizeCssValue(connColor)}">`;
  html += `<span class="${dotClass}"></span>`;
  html += `${escapeHtml(connLabel)}</span>`;
  if (responseTime !== undefined) {
    html += `<span class="chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}">${escapeHtml(Math.round(responseTime))}ms</span>`;
  }
  if (failures !== undefined && failures > 0) {
    html += `<span class="chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}" style="color:var(--label-badge-red, #F44336)">Failures: ${escapeHtml(failures)}</span>`;
  }
  html += `</div>`;

  // Boiler flow temperature with inline sparkline
  if (hubEntities.boiler_flow_temp && states[hubEntities.boiler_flow_temp]) {
    const temp = parseFloat(states[hubEntities.boiler_flow_temp].state);
    const tempStr = states[hubEntities.boiler_flow_temp].state;
    const tempColor = !isNaN(temp) ? temperatureToColor(temp) : 'var(--primary-text-color)';

    html += `<div style="display:flex;align-items:center;gap:8px;margin-top:4px">`;
    html += `<span class="flow-temp-value" style="color:${sanitizeCssValue(tempColor)}">${escapeHtml(tempStr)}${escapeHtml(tempUnit)}</span>`;

    if (historyCache) {
      const data = historyCache.data?.[hubEntities.boiler_flow_temp] || [];
      const sparkHtml = renderSparklineHtml(data, 120, 30, tempColor, 'bridge-flow-grad', 'Boiler flow temperature history');
      if (sparkHtml) {
        html += `<div class="flow-sparkline">${sparkHtml}</div>`;
      }
    }
    html += `</div>`;
  }

  // WC status chips
  const hasWc = hubEntities.wc_status && states[hubEntities.wc_status];
  const hasWcTarget = hubEntities.wc_target_flow && states[hubEntities.wc_target_flow];
  if (hasWc || hasWcTarget) {
    html += `<div class="zone-chips">`;
    if (hasWc) {
      html += `<span class="chip" data-entity="${escapeHtml(hubEntities.wc_status)}">${escapeHtml(states[hubEntities.wc_status].state)}</span>`;
    }
    if (hasWcTarget) {
      html += `<span class="chip" data-entity="${escapeHtml(hubEntities.wc_target_flow)}">Target: ${escapeHtml(states[hubEntities.wc_target_flow].state)}${escapeHtml(tempUnit)}</span>`;
    }
    html += `</div>`;
  }

  // Boiler max output temperature (number entity — tap to adjust)
  if (hubEntities.boiler_max_output && states[hubEntities.boiler_max_output]) {
    const maxTemp = states[hubEntities.boiler_max_output].state;
    if (maxTemp !== 'unavailable' && maxTemp !== 'unknown') {
      html += `<div class="zone-chips">`;
      html += `<span class="chip" data-entity="${escapeHtml(hubEntities.boiler_max_output)}">`;
      html += `<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${escapeHtml(maxTemp)}${escapeHtml(tempUnit)}</span>`;
      html += `</div>`;
    }
  }

  // Last error
  if (lastError && lastError !== 'None' && lastError !== 'null') {
    html += `<div class="zone-chips">`;
    html += `<span class="chip" style="color:var(--label-badge-red, #F44336)">Error: ${escapeHtml(lastError)}</span>`;
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}



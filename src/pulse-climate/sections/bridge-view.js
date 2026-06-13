/**
 * @module pulse-climate/sections/bridge-view
 * @description Body renderer + availability predicate for the Bridge section
 * and the Bridge tab inside system_health_group. Caller renders the
 * section header.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { temperatureToColor, renderSparklineHtml } from '../chart-primitives.js';

/**
 * Returns true when the bridge entity needed for rendering is discoverable.
 *
 * @param {Record<string, string>|null|undefined} hubEntities
 * @returns {boolean}
 */
export function isBridgeAvailable(hubEntities) {
  return Boolean(hubEntities?.bridge_connected);
}

/**
 * Render the Bridge body (no section header — caller's responsibility).
 *
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @param {*} historyCache
 * @returns {string} HTML body fragment, or '' when not available.
 */
export function renderBridgeView(hubEntities, states, historyCache) {
  if (!isBridgeAvailable(hubEntities)) return '';

  const connState = states[hubEntities.bridge_connected];
  if (!connState) return '';
  const connected = connState.state === 'on';
  const connColor = connected
    ? 'var(--pulse-tier-moderate)'
    : 'var(--pulse-tier-gale)';
  const connLabel = connected ? 'Connected' : 'Disconnected';
  const dotClass = connected ? 'pc-pulse-dot pc-connected' : 'pc-pulse-dot pc-disconnected';

  const attrs = connState.attributes || {};
  const responseTime = attrs.response_time_ms;
  const failures = attrs.consecutive_failures;
  const lastError = attrs.last_error;
  const tempUnit = hubEntities.boiler_flow_temp ? (states[hubEntities.boiler_flow_temp]?.attributes?.unit_of_measurement || '°C') : '°C';

  let html = '';
  html += `<div class="pc-zone-chips">`;
  html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}" style="color:${sanitizeCssValue(connColor)}">`;
  html += `<span class="${dotClass}"></span>`;
  html += `${escapeHtml(connLabel)}</span>`;
  if (responseTime !== undefined) {
    html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}">${escapeHtml(Math.round(responseTime))}ms</span>`;
  }
  if (failures !== undefined && failures > 0) {
    html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.bridge_connected)}" style="color:var(--pulse-tier-gale)">Failures: ${escapeHtml(failures)}</span>`;
  }
  html += `</div>`;

  if (hubEntities.boiler_flow_temp && states[hubEntities.boiler_flow_temp]) {
    const temp = parseFloat(states[hubEntities.boiler_flow_temp].state);
    const tempStr = states[hubEntities.boiler_flow_temp].state;
    const tempColor = !isNaN(temp) ? temperatureToColor(temp) : 'var(--pulse-text-primary)';

    html += `<div class="pc-flow-temp-row">`;
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
    html += `<span class="pc-chip" style="color:var(--pulse-tier-gale)">Error: ${escapeHtml(lastError)}</span>`;
    html += `</div>`;
  }

  return html;
}

/**
 * @module pulse-climate/sections/homekit
 * @description Render HomeKit section with connection status, efficiency
 * metrics, and saved calls sparkline.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { renderSparklineHtml } from '../chart-primitives.js';

/** HomeKit identity color — green to match connection status. */
const HK_COLOR = 'var(--label-badge-green, #4CAF50)';
/** Secondary color for writes (distinct from reads). */
const HK_WRITE_COLOR = 'var(--accent-color, #9C27B0)';

/**
 * Render HomeKit section HTML.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache for sparkline.
 * @returns {string} HTML string (empty if no entities found).
 */
export function renderHomekitSection(hubEntities, states, historyCache) {
  if (!hubEntities.homekit_connected) return '';

  const connState = states[hubEntities.homekit_connected];
  if (!connState) return '';
  const connected = connState.state === 'on';
  const connColor = connected
    ? HK_COLOR
    : 'var(--label-badge-red, #F44336)';
  const connLabel = connected ? 'Connected' : 'Disconnected';
  const dotClass = connected ? 'pulse-dot connected' : 'pulse-dot disconnected';

  const attrs = connState.attributes || {};
  const uptime = attrs.uptime || '';
  const mappedZones = attrs.mapped_zones;
  const reconnectCount = attrs.reconnect_count;

  // Reads/writes saved — prefer standalone entities (Tado CE beta.9+), fall back to attributes
  const readsEntity = hubEntities.homekit_reads_saved ? states[hubEntities.homekit_reads_saved] : null;
  const writesEntity = hubEntities.homekit_writes_saved ? states[hubEntities.homekit_writes_saved] : null;
  const readsSaved = readsEntity ? (Number(readsEntity.state) || 0) : (Number(attrs.reads_saved_today) || 0);
  const writesSaved = writesEntity ? (Number(writesEntity.state) || 0) : (Number(attrs.writes_saved_today) || 0);
  const totalSaved = readsSaved + writesSaved;

  // Section header — include total saved when available
  let html = `<div class="section section-homekit">`;
  const totalLabel = totalSaved > 0 ? ` · ${totalSaved} saved` : '';
  html += `<div class="section-label">HomeKit${escapeHtml(totalLabel)}</div>`;

  // Connection status with pulse dot + uptime
  html += `<div class="zone-chips">`;
  html += `<span class="chip" data-entity="${escapeHtml(hubEntities.homekit_connected)}" style="color:${sanitizeCssValue(connColor)}">`;
  html += `<span class="${dotClass}"></span>`;
  html += `${escapeHtml(connLabel)}`;
  if (uptime) html += ` <span style="opacity:0.6;font-size:10px">${escapeHtml(uptime)}</span>`;
  html += `</span>`;
  if (mappedZones !== undefined) {
    html += `<span class="chip">${escapeHtml(mappedZones)} zones</span>`;
  }
  if (reconnectCount !== undefined && reconnectCount > 0) {
    html += `<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Reconnects: ${escapeHtml(reconnectCount)}</span>`;
  }
  html += `</div>`;

  // Saved calls section
  if (readsSaved > 0 || writesSaved > 0) {
    const readsPct = totalSaved > 0 ? (readsSaved / totalSaved) * 100 : 100;

    // Reads/writes bar — green for reads, purple for writes
    html += `<div style="margin-top:4px">`;
    html += `<div class="power-bar-container">`;
    html += `<div class="power-bar-track"></div>`;
    html += `<div class="power-bar-fill" style="width:100%;background:${sanitizeCssValue(HK_WRITE_COLOR)}"></div>`;
    html += `<div class="power-bar-fill" style="width:${sanitizeCssValue(readsPct.toFixed(1))}%;background:${sanitizeCssValue(HK_COLOR)}"></div>`;
    html += `</div>`;
    html += `</div>`;

    // Sparkline — green to match HomeKit identity
    const sparkEntityId = hubEntities.homekit_reads_saved;
    if (sparkEntityId && historyCache) {
      const data = historyCache.data?.[sparkEntityId] || [];
      html += renderSparklineHtml(data, 200, 30, HK_COLOR, 'hk-spark-grad', 'HomeKit saved calls history');
    }

    // Reads/writes chips
    html += `<div class="zone-chips">`;
    const readsDataEntity = hubEntities.homekit_reads_saved || '';
    const writesDataEntity = hubEntities.homekit_writes_saved || '';
    html += `<span class="chip"${readsDataEntity ? ` data-entity="${escapeHtml(readsDataEntity)}"` : ''} style="color:${sanitizeCssValue(HK_COLOR)}">Reads: ${escapeHtml(readsSaved)}</span>`;
    if (writesSaved > 0) {
      html += `<span class="chip"${writesDataEntity ? ` data-entity="${escapeHtml(writesDataEntity)}"` : ''} style="color:${sanitizeCssValue(HK_WRITE_COLOR)}">Writes: ${escapeHtml(writesSaved)}</span>`;
    }
    html += `</div>`;
  }

  // Write details — only show when there's actual write activity
  const writeAttempts = Number(attrs.write_attempts) || 0;
  const writeSuccesses = Number(attrs.write_successes) || 0;
  const writeFallbacks = Number(attrs.write_fallbacks) || 0;
  const writeLatency = Number(attrs.write_avg_latency_ms) || 0;
  if (writeAttempts > 0 || writeSuccesses > 0 || writeFallbacks > 0) {
    html += `<div class="zone-chips">`;
    if (writeAttempts > 0) html += `<span class="chip">Attempts: ${escapeHtml(writeAttempts)}</span>`;
    if (writeSuccesses > 0) html += `<span class="chip">Successes: ${escapeHtml(writeSuccesses)}</span>`;
    if (writeFallbacks > 0) html += `<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Fallbacks: ${escapeHtml(writeFallbacks)}</span>`;
    if (writeLatency > 0) html += `<span class="chip">Latency: ${escapeHtml(writeLatency)}ms</span>`;
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

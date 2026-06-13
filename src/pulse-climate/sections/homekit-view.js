/**
 * @module pulse-climate/sections/homekit-view
 * @description Body renderer + availability predicate for the HomeKit
 * section and the HomeKit tab inside system_health_group. Caller renders
 * the section header. Also exports computeHomekitSavedLabel for the
 * "HomeKit · N saved" suffix in the standalone-section header.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { renderSparklineHtml } from '../chart-primitives.js';

const HK_COLOR = 'var(--pulse-tier-moderate)';
const HK_WRITE_COLOR = 'var(--pulse-accent)';

/**
 * @param {Record<string, string>|null|undefined} hubEntities
 * @returns {boolean}
 */
export function isHomekitAvailable(hubEntities) {
  return Boolean(hubEntities?.homekit_connected);
}

/**
 * Compute the "· N saved" suffix for the HomeKit section header. Returns
 * empty string when no entities are present or no calls have been saved.
 *
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @returns {string}
 */
export function computeHomekitSavedLabel(hubEntities, states) {
  if (!isHomekitAvailable(hubEntities)) return '';
  const connState = states[hubEntities.homekit_connected];
  if (!connState) return '';
  const attrs = connState.attributes || {};
  const readsEntity = hubEntities.homekit_reads_saved ? states[hubEntities.homekit_reads_saved] : null;
  const writesEntity = hubEntities.homekit_writes_saved ? states[hubEntities.homekit_writes_saved] : null;
  const readsSaved = readsEntity ? (Number(readsEntity.state) || 0) : (Number(attrs.reads_saved_today) || 0);
  const writesSaved = writesEntity ? (Number(writesEntity.state) || 0) : (Number(attrs.writes_saved_today) || 0);
  const totalSaved = readsSaved + writesSaved;
  return totalSaved > 0 ? ` · ${totalSaved} saved` : '';
}

/**
 * Render the HomeKit body (no section header — caller's responsibility).
 *
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @param {*} historyCache
 * @returns {string}
 */
export function renderHomekitView(hubEntities, states, historyCache) {
  if (!isHomekitAvailable(hubEntities)) return '';

  const connState = states[hubEntities.homekit_connected];
  if (!connState) return '';
  const connected = connState.state === 'on';
  const connColor = connected ? HK_COLOR : 'var(--pulse-tier-gale)';
  const connLabel = connected ? 'Connected' : 'Disconnected';
  const dotClass = connected ? 'pc-pulse-dot pc-connected' : 'pc-pulse-dot pc-disconnected';

  const attrs = connState.attributes || {};
  const uptime = attrs.uptime || '';
  const mappedZones = attrs.mapped_zones;
  const reconnectCount = attrs.reconnect_count;

  const readsEntity = hubEntities.homekit_reads_saved ? states[hubEntities.homekit_reads_saved] : null;
  const writesEntity = hubEntities.homekit_writes_saved ? states[hubEntities.homekit_writes_saved] : null;
  const readsSaved = readsEntity ? (Number(readsEntity.state) || 0) : (Number(attrs.reads_saved_today) || 0);
  const writesSaved = writesEntity ? (Number(writesEntity.state) || 0) : (Number(attrs.writes_saved_today) || 0);
  const totalSaved = readsSaved + writesSaved;

  let html = '';
  html += `<div class="pc-zone-chips">`;
  html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.homekit_connected)}" style="color:${sanitizeCssValue(connColor)}">`;
  html += `<span class="${dotClass}"></span>`;
  html += `${escapeHtml(connLabel)}`;
  if (uptime) html += ` <span class="pc-chip-aside">${escapeHtml(uptime)}</span>`;
  html += `</span>`;
  if (mappedZones !== undefined) {
    html += `<span class="pc-chip">${escapeHtml(mappedZones)} zones</span>`;
  }
  if (reconnectCount !== undefined && reconnectCount > 0) {
    html += `<span class="pc-chip" style="color:var(--pulse-tier-strong)">Reconnects: ${escapeHtml(reconnectCount)}</span>`;
  }
  html += `</div>`;

  if (readsSaved > 0 || writesSaved > 0) {
    const readsPct = totalSaved > 0 ? (readsSaved / totalSaved) * 100 : 100;
    html += `<div class="pc-homekit-bar-stack">`;
    html += `<div class="pc-power-bar-container">`;
    html += `<div class="pc-power-bar-track"></div>`;
    html += `<div class="pc-power-bar-fill" style="width:100%;background:${sanitizeCssValue(HK_WRITE_COLOR)}"></div>`;
    html += `<div class="pc-power-bar-fill" style="width:${sanitizeCssValue(readsPct.toFixed(1))}%;background:${sanitizeCssValue(HK_COLOR)}"></div>`;
    html += `</div>`;
    html += `</div>`;

    const sparkEntityId = hubEntities.homekit_reads_saved;
    if (sparkEntityId && historyCache) {
      const data = historyCache.data?.[sparkEntityId] || [];
      html += renderSparklineHtml(data, 200, 30, HK_COLOR, 'hk-spark-grad', 'HomeKit saved calls history');
    }

    html += `<div class="pc-zone-chips">`;
    const readsDataEntity = hubEntities.homekit_reads_saved || '';
    const writesDataEntity = hubEntities.homekit_writes_saved || '';
    html += `<span class="pc-chip"${readsDataEntity ? ` data-entity="${escapeHtml(readsDataEntity)}"` : ''} style="color:${sanitizeCssValue(HK_COLOR)}">Reads: ${escapeHtml(readsSaved)}</span>`;
    if (writesSaved > 0) {
      html += `<span class="pc-chip"${writesDataEntity ? ` data-entity="${escapeHtml(writesDataEntity)}"` : ''} style="color:${sanitizeCssValue(HK_WRITE_COLOR)}">Writes: ${escapeHtml(writesSaved)}</span>`;
    }
    html += `</div>`;
  }

  // Write details — only show when there's actual write activity
  const writeAttempts = Number(attrs.write_attempts) || 0;
  const writeSuccesses = Number(attrs.write_successes) || 0;
  const writeFallbacks = Number(attrs.write_fallbacks) || 0;
  const writeLatency = Number(attrs.write_avg_latency_ms) || 0;
  if (writeAttempts > 0 || writeSuccesses > 0 || writeFallbacks > 0) {
    html += `<div class="pc-zone-chips">`;
    if (writeAttempts > 0) html += `<span class="pc-chip">Attempts: ${escapeHtml(writeAttempts)}</span>`;
    if (writeSuccesses > 0) html += `<span class="pc-chip">Successes: ${escapeHtml(writeSuccesses)}</span>`;
    if (writeFallbacks > 0) html += `<span class="pc-chip" style="color:var(--pulse-tier-strong)">Fallbacks: ${escapeHtml(writeFallbacks)}</span>`;
    if (writeLatency > 0) html += `<span class="pc-chip">Latency: ${escapeHtml(writeLatency)}ms</span>`;
    html += `</div>`;
  }

  return html;
}

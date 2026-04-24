/**
 * @module pulse-climate/sections/api
 * @description Render API usage dashboard for Tado CE.
 * Rich visual layout: usage gauge, history sparkline, call breakdown donut,
 * and status chips. Uses shared chart-primitives for consistent visual identity.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue, isReducedMotion } from '../../shared/utils.js';
import { buildArcPath, buildDonutArcs, buildLegendChips, renderSparklineHtml, resolveBreakdownSegments } from '../chart-primitives.js';
import { CHART_PALETTE } from '../constants.js';

/**
 * Resolve severity color for API usage percentage.
 * @param {number} pct - Usage percentage 0-100.
 * @returns {string} CSS color.
 */
function resolveApiColor(pct) {
  if (pct > 95) return 'var(--label-badge-red, #F44336)';
  if (pct > 80) return 'var(--label-badge-yellow, #FF9800)';
  return 'var(--label-badge-green, #4CAF50)';
}

/**
 * Resolve status chip color.
 * @param {string} status - API status string.
 * @returns {string} CSS color.
 */
function resolveStatusColor(status) {
  const s = (status || '').toLowerCase();
  if (s === 'ok' || s === 'healthy') return 'var(--label-badge-green, #4CAF50)';
  if (s === 'warning') return 'var(--label-badge-yellow, #FF9800)';
  return 'var(--label-badge-red, #F44336)';
}

/**
 * Render usage gauge as SVG arc.
 * @param {number} usage - Current usage count.
 * @param {number} limit - Usage limit.
 * @returns {string} HTML string for gauge component.
 */
function renderUsageGauge(usage, limit) {
  const pct = limit > 0 ? Math.min(100, (usage / limit) * 100) : 0;
  const color = resolveApiColor(pct);
  const size = 80;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 4;
  const innerR = outerR * 0.7;

  // Background arc (full circle, grey)
  const bgArc = buildArcPath(cx, cy, innerR, outerR, -90, 269.9);
  // Fill arc (proportional to usage)
  const fillAngle = -90 + (pct / 100) * 360;
  const fillArc = pct > 0 ? buildArcPath(cx, cy, innerR, outerR, -90, Math.min(fillAngle, 269.9)) : '';

  // Dynamic pulse: >95% = urgent (1s), >80% = warning (2.5s), else static
  const isUrgent = pct > 95;
  const isWarning = pct > 80;
  const needsGlow = isUrgent || isWarning;

  let html = `<div class="usage-gauge">`;
  html += `<svg viewBox="0 0 ${size} ${size}" role="img" aria-label="API usage: ${Math.round(usage)} of ${Math.round(limit)}" style="width:${size}px;height:${size}px">`;
  if (needsGlow) {
    html += `<defs><filter id="gauge-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
  }
  html += `<path d="${bgArc}" fill="var(--divider-color, rgba(0,0,0,0.12))" />`;
  if (fillArc) {
    html += `<path d="${fillArc}" fill="${sanitizeCssValue(color)}"${needsGlow ? ' filter="url(#gauge-glow)"' : ''}>`;
    html += `<title>API usage: ${Math.round(pct)}%</title>`;
    if (needsGlow) {
      const dur = isUrgent ? '1' : '2.5';
      if (!isReducedMotion()) {
        html += `<animate attributeName="opacity" values="1;0.5;1" dur="${dur}s" repeatCount="indefinite"/>`;
      }
    }
    html += `</path>`;
  }
  html += `</svg>`;
  html += `<div class="gauge-center">${escapeHtml(Math.round(usage))}<br><span style="font-size:10px;opacity:0.6">/ ${escapeHtml(Math.round(limit))}</span></div>`;
  html += `</div>`;
  return html;
}

/**
 * Render API history sparkline.
 * @param {string} entityId - call_history entity ID.
 * @param {import('../types.js').HistoryCache} historyCache - History cache.
 * @param {string} color - CSS color for sparkline stroke/fill.
 * @returns {string} HTML string.
 */
function renderHistorySparkline(entityId, historyCache, color) {
  const data = historyCache?.data?.[entityId] || [];
  return renderSparklineHtml(data, 200, 40, color, 'api-hist-grad', 'API usage history');
}

/**
 * Render API call breakdown donut.
 * @param {Record<string, *>} attrs - Breakdown entity attributes.
 * @returns {string} HTML string.
 */
function renderBreakdownDonut(attrs) {
  const segments = resolveBreakdownSegments(attrs, CHART_PALETTE);
  if (segments.length === 0) return '';

  const size = 60;
  const arcs = buildDonutArcs(segments, size);
  const total = segments.reduce((s, seg) => s + seg.value, 0);

  // Wrap donut + legend in flex row
  let html = `<div style="display:flex;align-items:center;gap:12px">`;
  html += `<div class="donut-container" style="width:${size}px;height:${size}px;flex-shrink:0;margin:0">`;
  html += `<svg viewBox="0 0 ${size} ${size}" role="img" aria-label="API call breakdown">`;
  const oR = size / 2 - 2;
  const iR = oR * 0.6;
  html += `<circle cx="${size / 2}" cy="${size / 2}" r="${((oR + iR) / 2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(oR - iR).toFixed(1)}" />`;
  for (const arc of arcs) {
    html += `<path d="${arc.d}" fill="${sanitizeCssValue(arc.color)}"><title>${escapeHtml(arc.label)}: ${Math.round(arc.angle / 360 * total)}</title></path>`;
  }
  html += `</svg>`;
  html += `<div class="donut-center" style="font-size:12px">${escapeHtml(Math.round(total))}</div>`;
  html += `</div>`;
  // Legend inline next to donut
  html += buildLegendChips(segments.map((s) => ({ label: s.label, color: s.color, value: String(Math.round(s.value)) })));
  html += `</div>`;
  return html;
}

/**
 * Render API section HTML as a rich dashboard.
 * @param {Record<string, string>} hubEntities - Discovered hub entity map.
 * @param {Record<string, *>} states - hass.states.
 * @param {Record<string, *>} [sectionConfig] - Section config.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache.
 * @returns {string} HTML string (empty if no entities found).
 */
export function renderApiSection(hubEntities, states, sectionConfig, historyCache) {
  if (!hubEntities.api_usage || !hubEntities.api_limit) return '';

  const usage = parseFloat(states[hubEntities.api_usage]?.state) || 0;
  const limit = parseFloat(states[hubEntities.api_limit]?.state) || 100;
  const pct = limit > 0 ? Math.min(100, (usage / limit) * 100) : 0;
  const gaugeColor = resolveApiColor(pct);
  const status = states[hubEntities.api_status]?.state || 'unknown';
  const statusColor = resolveStatusColor(status);

  let html = `<div class="section section-api">`;
  html += `<div class="section-label">API Usage</div>`;
  html += `<div class="api-dashboard">`;

  // Row 1: Gauge + History sparkline (use api_usage for reset-aware history)
  html += `<div class="api-row">`;
  html += renderUsageGauge(usage, limit);
  const historyEntity = hubEntities.api_usage;
  if (historyEntity && historyCache) {
    html += renderHistorySparkline(historyEntity, historyCache, gaugeColor);
  }
  html += `</div>`;

  // Row 2: Breakdown donut
  if (hubEntities.api_breakdown && states[hubEntities.api_breakdown]) {
    html += `<div class="api-row">`;
    html += renderBreakdownDonut(states[hubEntities.api_breakdown].attributes || {});
    html += `</div>`;
  }

  // Row 3: Status chips — Rate | Poll | Next Sync (countdown) | Reset | Token | Status
  html += `<div class="zone-chips">`;
  if (hubEntities.call_history && states[hubEntities.call_history]) {
    const callsPerHour = states[hubEntities.call_history].attributes?.calls_per_hour;
    if (callsPerHour !== undefined && callsPerHour !== null && Number(callsPerHour) > 0) {
      html += `<span class="chip" data-entity="${escapeHtml(hubEntities.call_history)}">`;
      html += `<ha-icon icon="mdi:speedometer"></ha-icon>${escapeHtml(Math.round(Number(callsPerHour)))}/hr</span>`;
    }
  }
  if (hubEntities.polling_interval && states[hubEntities.polling_interval]) {
    const pollState = states[hubEntities.polling_interval];
    const pollUnit = pollState.attributes?.unit_of_measurement || '';
    html += `<span class="chip" data-entity="${escapeHtml(hubEntities.polling_interval)}">Poll: ${escapeHtml(pollState.state)}${pollUnit ? escapeHtml(pollUnit) : ''}</span>`;
  }
  if (hubEntities.next_sync && states[hubEntities.next_sync]) {
    const nextRaw = states[hubEntities.next_sync].state;
    let nextDisplay = nextRaw;
    let targetMs = 0;
    if (nextRaw && nextRaw.includes('T')) {
      try {
        const d = new Date(nextRaw);
        targetMs = d.getTime();
        const diffMs = targetMs - Date.now();
        if (diffMs > 0 && diffMs < 3600000) {
          const mins = Math.floor(diffMs / 60000);
          const secs = Math.floor((diffMs % 60000) / 1000);
          nextDisplay = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
        } else {
          nextDisplay = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
        }
      } catch { /* keep raw */ }
    }
    html += `<span class="chip chip-next-sync" data-entity="${escapeHtml(hubEntities.next_sync)}" data-target="${targetMs}">Next: ${escapeHtml(nextDisplay)}</span>`;
  }
  if (hubEntities.api_reset && states[hubEntities.api_reset]) {
    const resetRaw = states[hubEntities.api_reset].state;
    let resetDisplay = resetRaw;
    if (resetRaw && resetRaw.includes('T')) {
      try {
        const d = new Date(resetRaw);
        resetDisplay = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      } catch { /* keep raw */ }
    }
    html += `<span class="chip" data-entity="${escapeHtml(hubEntities.api_reset)}">Reset: ${escapeHtml(resetDisplay)}</span>`;
  }
  if (hubEntities.token_status && states[hubEntities.token_status]) {
    html += `<span class="chip" data-entity="${escapeHtml(hubEntities.token_status)}">Token: ${escapeHtml(states[hubEntities.token_status].state)}</span>`;
  }
  html += `<span class="chip" data-entity="${hubEntities.api_status ? escapeHtml(hubEntities.api_status) : ''}" style="color:${sanitizeCssValue(statusColor)}">${escapeHtml(status)}</span>`;
  html += `</div>`;

  html += `</div>`;
  html += `</div>`;
  return html;
}

/**
 * Update API section DOM differentially.
 * @param {HTMLElement} sectionEl - The .section-api element.
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 */
export function updateApiSection(sectionEl, hubEntities, states) {
  if (!sectionEl || !hubEntities.api_usage) return;
  // Gauge center text update
  const usage = parseFloat(states[hubEntities.api_usage]?.state) || 0;
  const limit = parseFloat(states[hubEntities.api_limit]?.state) || 100;
  const centerEl = /** @type {HTMLElement|null} */ (sectionEl.querySelector('.gauge-center'));
  if (centerEl) {
    centerEl.innerHTML = `${escapeHtml(Math.round(usage))}<br><span style="font-size:10px;opacity:0.6">/ ${escapeHtml(Math.round(limit))}</span>`;
  }
}

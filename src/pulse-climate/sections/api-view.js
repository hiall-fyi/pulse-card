/**
 * @module pulse-climate/sections/api-view
 * @description Body renderer + availability predicate for the API section
 * and the API tab inside system_health_group. Caller renders the
 * section header.
 */

import { escapeHtml, sanitizeCssValue, isReducedMotion, formatHHMM } from '../../shared/utils.js';
import { buildArcPath, buildBloomFilter, buildLegendChips, renderDonut, renderSparklineHtml, resolveBreakdownSegments } from '../chart-primitives.js';
import { CHART_PALETTE } from '../constants.js';

/**
 * @param {Record<string, string>|null|undefined} hubEntities
 * @returns {boolean}
 */
export function isApiAvailable(hubEntities) {
  return Boolean(hubEntities?.api_usage && hubEntities?.api_limit);
}

/** @param {number} pct @returns {string} */
function resolveApiColor(pct) {
  if (pct > 95) return 'var(--pulse-tier-gale)';
  if (pct > 80) return 'var(--pulse-tier-strong)';
  return 'var(--pulse-tier-moderate)';
}

/** @param {string} status @returns {string} */
function resolveStatusColor(status) {
  const s = (status || '').toLowerCase();
  if (s === 'ok' || s === 'healthy') return 'var(--pulse-tier-moderate)';
  if (s === 'warning') return 'var(--pulse-tier-strong)';
  return 'var(--pulse-tier-gale)';
}

/**
 * @param {number} usage
 * @param {number} limit
 * @returns {string}
 */
function renderUsageGauge(usage, limit) {
  const pct = limit > 0 ? Math.min(100, (usage / limit) * 100) : 0;
  const color = resolveApiColor(pct);
  const size = 80;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 4;
  const innerR = outerR * 0.7;

  const bgArc = buildArcPath(cx, cy, innerR, outerR, -90, 269.9);
  const fillAngle = -90 + (pct / 100) * 360;
  const fillArc = pct > 0 ? buildArcPath(cx, cy, innerR, outerR, -90, Math.min(fillAngle, 269.9)) : '';

  const isUrgent = pct > 95;
  const isWarning = pct > 80;
  const needsGlow = isUrgent || isWarning;

  let html = `<div class="pc-usage-gauge">`;
  html += `<svg viewBox="0 0 ${size} ${size}" role="img" aria-label="API usage: ${Math.round(usage)} of ${Math.round(limit)}" style="width:${size}px;height:${size}px">`;
  if (needsGlow) {
    html += `<defs>${buildBloomFilter('gauge-glow', 2)}</defs>`;
  }
  html += `<path d="${bgArc}" fill="var(--pulse-border-divider)" />`;
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
  const usageText = escapeHtml(Math.round(usage));
  const limitText = escapeHtml(Math.round(limit));
  html += `<div class="pc-gauge-center">${usageText}<br><span class="pc-gauge-center-limit">/ ${limitText}</span></div>`;
  html += `</div>`;
  return html;
}

/**
 * @param {string} entityId
 * @param {*} historyCache
 * @param {string} color
 * @returns {string}
 */
function renderHistorySparkline(entityId, historyCache, color) {
  const data = historyCache?.data?.[entityId] || [];
  return renderSparklineHtml(data, 200, 40, color, 'api-hist-grad', 'API usage history');
}

/**
 * @param {Record<string, *>} attrs
 * @returns {string}
 */
function renderBreakdownDonut(attrs) {
  const segments = resolveBreakdownSegments(attrs, CHART_PALETTE);
  if (segments.length === 0) return '';

  const size = 60;

  let html = `<div class="pc-api-breakdown-row">`;
  html += `<div class="pc-donut-container pc-api-breakdown-donut" style="width:${size}px;height:${size}px">`;
  const { html: donutHtml } = renderDonut(segments, {
    size,
    ariaLabel: 'API call breakdown',
    centerNumStyle: 'font-size:var(--pulse-font-body)',
  });
  html += donutHtml;
  html += `</div>`;
  html += buildLegendChips(segments.map((s) => ({ label: s.label, color: s.color, value: String(Math.round(s.value)) })));
  html += `</div>`;
  return html;
}

/**
 * Render the API body (no section header — caller's responsibility).
 *
 * @param {Record<string, string>} hubEntities
 * @param {Record<string, *>} states
 * @param {*} sectionConfig
 * @param {*} historyCache
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local next/reset times.
 * @returns {string}
 */
export function renderApiView(hubEntities, states, sectionConfig, historyCache, timeZone) {
  if (!isApiAvailable(hubEntities)) return '';

  const usage = parseFloat(states[hubEntities.api_usage]?.state) || 0;
  const limit = parseFloat(states[hubEntities.api_limit]?.state) || 100;
  const pct = limit > 0 ? Math.min(100, (usage / limit) * 100) : 0;
  const gaugeColor = resolveApiColor(pct);
  const status = states[hubEntities.api_status]?.state || 'unknown';
  const statusColor = resolveStatusColor(status);

  let html = `<div class="pc-api-dashboard">`;

  /* Row 1: Gauge + history sparkline. */
  html += `<div class="pc-api-row">`;
  html += renderUsageGauge(usage, limit);
  const historyEntity = hubEntities.api_usage;
  if (historyEntity && historyCache) {
    html += renderHistorySparkline(historyEntity, historyCache, gaugeColor);
  }
  html += `</div>`;

  if (hubEntities.api_breakdown && states[hubEntities.api_breakdown]) {
    html += `<div class="pc-api-row">`;
    html += renderBreakdownDonut(states[hubEntities.api_breakdown].attributes || {});
    html += `</div>`;
  }

  /* Status chips, in render order: Rate | Poll | Next Sync | Reset | Token | Status. */
  html += `<div class="pc-zone-chips">`;
  if (hubEntities.call_history && states[hubEntities.call_history]) {
    const callsPerHour = states[hubEntities.call_history].attributes?.calls_per_hour;
    if (callsPerHour !== undefined && callsPerHour !== null && Number(callsPerHour) > 0) {
      html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.call_history)}">`;
      html += `<ha-icon icon="mdi:speedometer"></ha-icon>${escapeHtml(Math.round(Number(callsPerHour)))}/hr</span>`;
    }
  }
  if (hubEntities.polling_interval && states[hubEntities.polling_interval]) {
    const pollState = states[hubEntities.polling_interval];
    const pollUnit = pollState.attributes?.unit_of_measurement || '';
    html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.polling_interval)}">Poll: ${escapeHtml(pollState.state)}${pollUnit ? escapeHtml(pollUnit) : ''}</span>`;
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
          nextDisplay = formatHHMM(d, timeZone);
        }
      } catch { /* keep raw display */ }
    }
    html += `<span class="pc-chip chip-next-sync" data-entity="${escapeHtml(hubEntities.next_sync)}" data-target="${targetMs}">Next: ${escapeHtml(nextDisplay)}</span>`;
  }
  if (hubEntities.api_reset && states[hubEntities.api_reset]) {
    const resetRaw = states[hubEntities.api_reset].state;
    let resetDisplay = resetRaw;
    if (resetRaw && resetRaw.includes('T')) {
      try {
        const d = new Date(resetRaw);
        resetDisplay = formatHHMM(d, timeZone);
      } catch { /* keep raw display */ }
    }
    html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.api_reset)}">Reset: ${escapeHtml(resetDisplay)}</span>`;
  }
  if (hubEntities.token_status && states[hubEntities.token_status]) {
    html += `<span class="pc-chip" data-entity="${escapeHtml(hubEntities.token_status)}">Token: ${escapeHtml(states[hubEntities.token_status].state)}</span>`;
  }
  html += `<span class="pc-chip" data-entity="${hubEntities.api_status ? escapeHtml(hubEntities.api_status) : ''}" style="color:${sanitizeCssValue(statusColor)}">${escapeHtml(status)}</span>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}

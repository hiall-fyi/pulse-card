/**
 * @module pulse-weather/sections/alerts
 * @description Radar display, severity wash, and alert list with countdown.
 */

import { escapeHtml, sanitizeCssValue } from '../weather-primitives.js';
import { intensityRatio, tensionWash, breatheDuration, sweepDuration } from '../../shared/visual-tension.js';
import { ALERT_ICON_MAP, ALERT_COLOR_MAP, ALERT_FAR_FUTURE_DAYS } from '../constants.js';

/**
 * Parse alert data from Atmos CE sensor attributes.
 * @param {HassEntity} entity - Alert sensor entity state.
 * @param {boolean} isActive - Whether this is an active alert sensor.
 * @returns {Array<import('../types.js').AlertData>}
 */
function parseAlerts(entity, isActive) {
  // Skip entities with no active alert data
  // Atmos CE uses "None" (capital N) when no alert is present
  const state = (entity?.state || '').toLowerCase();
  if (!entity || state === 'none' || state === 'no alerts' || state === 'unavailable' || state === '0' || state === 'off') return [];

  // Skip alert_count and binary_sensor entities — they don't contain alert details
  const eid = /** @type {string} */ (entity.entity_id || '');
  if (eid.endsWith('_alert_count') || eid.startsWith('binary_sensor.')) return [];

  const attrs = entity.attributes;

  // Atmos CE stores alert data in attributes
  const alerts = [];
  const type = /** @type {string} */ (attrs.alert_type || attrs.type || 'wind');
  const severity = Number(attrs.level) || 1;
  const color = /** @type {string} */ (attrs.color || ALERT_COLOR_MAP[/** @type {keyof typeof ALERT_COLOR_MAP} */ (severity)] || ALERT_COLOR_MAP[1]);
  const icon = /** @type {string} */ (ALERT_ICON_MAP[type] || 'mdi:alert');
  const progress = Number(attrs.progress) || 0;
  const locations = /** @type {Array<string>} */ (Array.isArray(attrs.locations) ? attrs.locations : []);
  const endTime = /** @type {string} */ (attrs.end_time ?? '');

  // "Until further notice" detection
  let hoursLeft = null;
  let hoursUntil = null;
  let isUntilFurtherNotice = false;

  if (endTime === '') {
    isUntilFurtherNotice = true;
  } else if (endTime) {
    const endDate = new Date(endTime);
    const now = new Date();
    const diffMs = endDate.getTime() - now.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    if (diffDays > ALERT_FAR_FUTURE_DAYS) {
      isUntilFurtherNotice = true;
    } else if (isActive) {
      hoursLeft = Math.max(0, diffMs / (1000 * 60 * 60));
    } else {
      const startTime = /** @type {string|undefined} */ (attrs.start_time || attrs.datetime);
      if (startTime) {
        const startDate = new Date(String(startTime));
        hoursUntil = Math.max(0, (startDate.getTime() - now.getTime()) / (1000 * 60 * 60));
      }
    }
  }

  alerts.push({
    type,
    icon,
    severity,
    color,
    summary: String(attrs.headline || attrs.summary || entity.state || ''),
    desc: String(attrs.description || ''),
    active: isActive,
    hoursLeft,
    hoursUntil,
    progress,
    locations,
    link: attrs.link ? String(attrs.link) : null,
    endTime: String(endTime),
    isUntilFurtherNotice,
  });

  return alerts;
}

/**
 * Render the alerts section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string} HTML string.
 */
export function renderAlerts({ hass, config: _config, discovery }) {
  // Collect alerts from discovered entities
  const alerts = [];
  const ce = discovery.atmosCe;

  // Atmos CE active/upcoming alert sensors
  if (ce.active_alert && hass.states[discovery.atmosCe.active_alert]) {
    // active_alert is in atmosCe map but entity ID is in alertEntityIds
  }

  for (const eid of discovery.alertEntityIds) {
    const entity = hass.states[eid];
    if (!entity) continue;
    const isActive = eid.includes('active') || entity.state === 'on';
    alerts.push(...parseAlerts(entity, isActive));
  }

  const hasAlerts = alerts.length > 0;
  const worstSeverity = hasAlerts
    ? alerts.reduce((worst, a) => a.severity > worst.severity ? a : worst, alerts[0]).severity
    : 0;
  const worstColor = hasAlerts
    ? alerts.reduce((worst, a) => a.severity > worst.severity ? a : worst, alerts[0]).color
    : '#30d158';

  // ── Severity tension ──────────────────────────────────────────────
  const severityRatio = intensityRatio(worstSeverity, 0, 4);
  const alertCompound = hasAlerts ? Math.min(1.5, 1 + (alerts.length - 1) * 0.15) : 1;
  const sweepDur = sweepDuration(severityRatio, 3, 1.2).toFixed(2);
  const breatheDur = breatheDuration(severityRatio).toFixed(2);
  const dotDur = breatheDuration(severityRatio, 2, 0.6).toFixed(2);
  const alertWash = hasAlerts ? tensionWash(worstColor, severityRatio * alertCompound) : tensionWash('#30d158', 0.08);

  // Radar — CRT green phosphor style, severity-colored
  const radarSize = 140;
  const cx = radarSize / 2;
  const cy = radarSize / 2;

  // CRT color scheme per severity
  const crtColors = hasAlerts
    ? { bgInner: worstSeverity >= 4 ? '#1a0000' : worstSeverity >= 3 ? '#1a0e00' : '#1a1500',
        bgOuter: worstSeverity >= 4 ? '#0a0000' : worstSeverity >= 3 ? '#0a0500' : '#0a0800',
        ring: sanitizeCssValue(worstColor.replace(')', ',0.15)').replace('rgb(', 'rgba(')),
        line: sanitizeCssValue(worstColor.replace(')', ',0.08)').replace('rgb(', 'rgba(')),
        sweep: sanitizeCssValue(worstColor.replace(')', ',0.4)').replace('rgb(', 'rgba(')) }
    : { bgInner: '#001a00', bgOuter: '#000800',
        ring: 'rgba(80,255,0,0.15)', line: 'rgba(80,255,0,0.08)', sweep: 'rgba(80,255,0,0.35)' };

  // Alert blips
  const blipsHtml = alerts.map((a, i) => {
    const dist = a.active ? 18 + i * 7 : 40 + i * 7;
    const angle = (i * 137.5) * Math.PI / 180;
    const bx = cx + Math.cos(angle) * dist;
    const by = cy + Math.sin(angle) * dist;
    const blipDelay = ((i * 137.5) % 360 / 360 * Number(sweepDur)).toFixed(2);
    return a.active
      ? `<div class="pw-radar-blip" style="left:${bx.toFixed(1)}px;top:${by.toFixed(1)}px;--pw-blip-color:${sanitizeCssValue(a.color)};animation-delay:${blipDelay}s"></div>`
      : `<div style="position:absolute;left:${bx.toFixed(1)}px;top:${by.toFixed(1)}px;width:4px;height:4px;border-radius:50%;background:${sanitizeCssValue(a.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`;
  }).join('');

  const radarHtml = `
    <div style="display:flex;justify-content:center;padding:12px 20px;position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${crtColors.bgInner};--pw-radar-bg-outer:${crtColors.bgOuter};--pw-radar-color:${crtColors.ring};--pw-radar-line:${crtColors.line};--pw-radar-sweep:${crtColors.sweep};--pw-radar-dur:${sweepDur}s" role="img" aria-label="${hasAlerts ? `${alerts.length} weather alerts` : 'No active alerts'}">
        ${blipsHtml}
      </div>
    </div>`;

  // Severity dot
  const severityDot = `<span class="pw-severity-dot" style="background: ${sanitizeCssValue(worstColor)}; animation-duration: ${dotDur}s"></span>`;

  // Red-level visual escalation
  const isRed = worstSeverity >= 4;

  // Alert list rows — Pulse DNA style
  const alertRows = alerts.map((a) => {
    const timeLabel = a.isUntilFurtherNotice
      ? 'Until further notice'
      : a.active && a.hoursLeft !== null
        ? `${Math.round(a.hoursLeft)}h left`
        : a.hoursUntil !== null
          ? `${Math.round(a.hoursUntil)}h until`
          : '';

    const rowClass = a.active ? 'active' : 'upcoming';
    const alertColor = a.active ? `--pw-alert-color:${sanitizeCssValue(a.color)}` : '';

    return `
      <div class="pw-alert-row ${rowClass}" style="${alertColor}">
        <div class="pw-alert-dot" style="background:${sanitizeCssValue(a.color)}"></div>
        <div class="pw-alert-body">
          <div class="pw-alert-headline">${escapeHtml(a.summary)}</div>
          <div class="pw-alert-type">${escapeHtml(a.type)}</div>
          ${a.desc ? `<div class="pw-alert-desc">${escapeHtml(a.desc)}</div>` : ''}
          ${a.locations.length > 0 ? `<div class="pw-alert-locations">${escapeHtml(a.locations.join(', '))}</div>` : ''}
        </div>
        <span class="pw-alert-time">${escapeHtml(timeLabel)}</span>
      </div>`;
  }).join('');

  const redBorderStyle = isRed ? ` style="border-top: 2px solid ${sanitizeCssValue(worstColor)}"` : '';

  return `
    <div class="pw-section pw-alerts"${redBorderStyle}>
      <div class="pw-tension-wash${hasAlerts ? ' breathing' : ''}" style="background: ${sanitizeCssValue(alertWash)}; --breathe-dur: ${breatheDur}s"></div>
      <div class="pw-alerts-content">
        <div class="pw-section-header">
          <span class="pw-section-title">Alerts</span>
          ${severityDot}
        </div>
        ${radarHtml}
        ${!hasAlerts ? '<div class="pw-all-clear">All Clear</div>' : ''}
        ${alertRows ? `<div class="pw-alert-list">${alertRows}</div>` : ''}
      </div>
    </div>`;
}

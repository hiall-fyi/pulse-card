/**
 * @module pulse-weather/sections/alerts
 * @description Radar display, severity wash, and alert list with countdown.
 */

import { escapeHtml, sanitizeCssValue, hexToRgba } from '../weather-primitives.js';
import { intensityRatio, tensionWash, breatheDuration, sweepDuration } from '../../shared/visual-tension.js';
import { ALERT_ICON_MAP, ALERT_COLOR_MAP, ALERT_FAR_FUTURE_DAYS } from '../constants.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';

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
  // Level is contractually numeric (Atmos CE: 1–4). `Number(attrs.level)`
  // alone swallows non-numeric strings as NaN and `|| 1` would silently
  // downgrade a truthy-but-unparseable value to "low" — use explicit
  // finite check so the fallback path is auditable.
  const rawLevel = Number(attrs.level);
  const severity = Number.isFinite(rawLevel) && rawLevel > 0 ? rawLevel : 1;
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
 * Build a ticker row HTML fragment for one alert.
 * Derives segments from the parseAlerts() output shape — see the task brief.
 * @param {import('../types.js').AlertData} alert
 * @returns {string}
 */
function buildTickerRow(alert) {
  const tone = alert.severity >= 4 ? 'red' : 'amber';
  let windowSegment = '';
  if (alert.isUntilFurtherNotice) windowSegment = 'UNTIL FURTHER NOTICE';
  else if (alert.active && alert.hoursLeft !== null) windowSegment = `${Math.round(alert.hoursLeft)}H LEFT`;
  else if (alert.hoursUntil !== null) windowSegment = `IN ${Math.round(alert.hoursUntil)}H`;
  else if (alert.active) windowSegment = 'ACTIVE';

  const typeSegment = String(alert.type || '').toUpperCase();
  const headlineSegment = String(alert.summary || alert.desc || '').toUpperCase().trim();
  const locSegment = alert.locations.length > 0
    ? alert.locations.join(', ').toUpperCase()
    : '';

  const segments = [windowSegment, typeSegment, headlineSegment, locSegment].filter(Boolean);
  const text = segments.join(' · ');

  return `
    <div class="pw-alert-ticker pw-alert-${tone}">
      <span class="pw-alert-tri">▶</span>
      <span class="pw-alert-text">${escapeHtml(text)}</span>
    </div>`;
}

/**
 * Render the alerts section.
 * @param {import('../types.js').RenderContext} ctx - Render context.
 * @returns {string} HTML string.
 */
export function renderAlerts({ hass, config, discovery, proPersisted = false }) {
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

  const severityRatio = intensityRatio(worstSeverity, 0, 4);
  const alertCompound = hasAlerts ? Math.min(1.5, 1 + (alerts.length - 1) * 0.15) : 1;
  const sweepDur = sweepDuration(severityRatio, 3, 1.2).toFixed(2);
  const breatheDur = breatheDuration(severityRatio).toFixed(2);
  const alertWash = hasAlerts ? tensionWash(worstColor, severityRatio * alertCompound) : tensionWash('#30d158', 0.08);

  // Radar — CRT green phosphor style, severity-colored
  const radarSize = 140;
  const cx = radarSize / 2;
  const cy = radarSize / 2;

  const crtColors = hasAlerts
    ? { bgInner: worstSeverity >= 4 ? '#1a0000' : worstSeverity >= 3 ? '#1a0e00' : '#1a1500',
        bgOuter: worstSeverity >= 4 ? '#0a0000' : worstSeverity >= 3 ? '#0a0500' : '#0a0800',
        ring: sanitizeCssValue(hexToRgba(worstColor, 0.15)),
        line: sanitizeCssValue(hexToRgba(worstColor, 0.08)),
        sweep: sanitizeCssValue(hexToRgba(worstColor, 0.4)) }
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
      : `<div style="position:absolute;left:${bx.toFixed(1)}px;top:${by.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${sanitizeCssValue(a.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`;
  }).join('');

  const radarHtml = `
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${crtColors.bgInner};--pw-radar-bg-outer:${crtColors.bgOuter};--pw-radar-color:${crtColors.ring};--pw-radar-line:${crtColors.line};--pw-radar-sweep:${crtColors.sweep};--pw-radar-dur:${sweepDur}s" role="img" aria-label="${hasAlerts ? `${alerts.length} weather alerts` : 'No active alerts'}">
        ${blipsHtml}
      </div>
    </div>`;

  const latestExpiry = (() => {
    if (!hasAlerts) return '';
    let latest = null;
    for (const a of alerts) {
      if (a.isUntilFurtherNotice) return 'further notice';
      if (a.endTime) {
        const d = new Date(a.endTime);
        if (!isNaN(d.getTime()) && (!latest || d > latest)) latest = d;
      }
    }
    return latest ? latest.toLocaleString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' }) : 'further notice';
  })();

  const variant = brandMarkVariant(hasAlerts ? 'rainy' : 'sunny', false);

  const tickerRows = alerts.map(buildTickerRow).join('');
  const allClearHtml = !hasAlerts
    ? `<div class="pw-all-clear-v2"><strong>All Clear</strong>last 7 days clean</div>`
    : '';
  const timestampHtml = hasAlerts
    ? `<div class="pw-alert-timestamp pw-alert-${worstSeverity >= 4 ? 'red' : 'amber'}">${alerts.length} active · valid through ${escapeHtml(latestExpiry)}</div>`
    : '';

  const isRed = worstSeverity >= 4;
  const redBorderStyle = isRed ? `border-top: 2px solid ${sanitizeCssValue(worstColor)};` : '';
  const toneClass = worstSeverity >= 4 ? 'pw-alerts-red' : worstSeverity > 0 ? 'pw-alerts-amber' : 'pw-alerts-green';
  const washHtml = `<div class="pw-tension-wash${hasAlerts ? ' breathing' : ''}" style="background: ${sanitizeCssValue(alertWash)}; --breathe-dur: ${breatheDur}s"></div>`;

  const body = `
        ${radarHtml}
        ${allClearHtml}
        ${tickerRows ? `<div class="pw-alert-list">${tickerRows}</div>` : ''}
        ${timestampHtml}`;

  /* Pro view — the default ticker compresses each alert to a one-line keyword
     sequence; pro lays out full headline, meta (issue/expiry/severity),
     description prose, and any reported locations. Falls back to All Clear
     when there's nothing active. */
  const proAlertCards = alerts.map((a) => {
    const tone = a.severity >= 4 ? 'red' : 'amber';
    const headline = a.summary || a.desc || a.type;
    const metaParts = [];
    if (a.isUntilFurtherNotice) metaParts.push('until further notice');
    else if (a.active && a.hoursLeft !== null) metaParts.push(`${Math.round(a.hoursLeft)}h left`);
    else if (a.hoursUntil !== null) metaParts.push(`in ${Math.round(a.hoursUntil)}h`);
    if (a.severity > 0) metaParts.push(`severity ${a.severity}`);
    if (a.type) metaParts.push(a.type);
    const metaLine = metaParts.join(' · ');
    const descPara = a.desc && a.desc !== a.summary
      ? `<div class="pw-alert-detail-desc">${escapeHtml(a.desc)}</div>`
      : '';
    const locLine = a.locations.length > 0
      ? `<div class="pw-alert-detail-loc">${escapeHtml(a.locations.join(' · '))}</div>`
      : '';
    return `
        <div class="pw-alert-detail pw-alert-${tone}">
          <div class="pw-alert-detail-head">${escapeHtml(headline)}</div>
          ${metaLine ? `<div class="pw-alert-detail-meta">${escapeHtml(metaLine)}</div>` : ''}
          ${descPara}
          ${locLine}
        </div>`;
  }).join('');

  // Pro view only adds value when there ARE alerts to expand: the
  // ticker→detail-cards swap. With zero alerts both views render the
  // same "All Clear" card, so the brand mark click would flip data-pro
  // but visually nothing changes. Skip the proView in that case so
  // section-shell renders the brand mark as a non-interactive div
  // instead of a confusing toggle button.
  const proView = hasAlerts
    ? `
        ${radarHtml}
        ${allClearHtml}
        ${proAlertCards}
        ${timestampHtml}`
    : undefined;

  return renderSectionShell({
    sectionClass: 'pw-alerts-v2',
    extraSectionClass: toneClass,
    ariaLabel: 'Active weather alerts',
    brandVariant: variant,
    kicker: hasAlerts ? `active alerts (${alerts.length})` : 'no active alerts',
    preContent: washHtml,
    sectionStyle: redBorderStyle,
    body,
    proView,
    proInitial: proPersisted,
    pro: config?.pro !== false,
  });
}

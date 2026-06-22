/**
 * @module pulse-weather/sections/alerts
 * @description Radar display, severity wash, and alert list with countdown.
 */

import { escapeHtml, sanitizeCssValue, hexToRgba } from '../weather-primitives.js';
import { intensityRatio, tensionWash, breatheDuration, sweepDuration } from '../../shared/visual-tension.js';
import { ALERT_ICON_MAP, ALERT_COLOR_MAP, ALERT_SEVERITY_STRING_COLOR_MAP, ALERT_FAR_FUTURE_DAYS } from '../constants.js';
import { brandMarkVariant } from '../brand-mark.js';
import { renderSectionShell } from '../section-shell.js';

// Radar blip geometry. Distance from centre maps an alert's time-away to a
// radius; angle is a stable hash so blips never stack. See blipDistance /
// blipAngle.
const BLIP_MIN_RADIUS = 18;   // active / imminent alerts sit here
const BLIP_MAX_RADIUS = 62;   // radar is r=70; leave margin so blips don't touch the edge
const BLIP_TIME_CAP_H = 168;  // 7 days: alerts starting this far out (or more) sit at the edge

/**
 * Hours until an alert is the "current concern":
 * 0 for active alerts (they're happening now), else hours until it starts.
 * @param {import('../types.js').AlertData} a
 * @returns {number}
 */
function blipHoursAway(a) {
  if (a.active) return 0;
  return typeof a.hoursUntil === 'number' && a.hoursUntil > 0 ? a.hoursUntil : 0;
}

/**
 * Radial distance for an alert's blip: near the centre when active/imminent,
 * out toward the edge the further in the future it starts (clamped at the
 * 7-day cap so nothing flies off the radar).
 * @param {import('../types.js').AlertData} a
 * @returns {number}
 */
function blipDistance(a) {
  const ratio = Math.min(blipHoursAway(a), BLIP_TIME_CAP_H) / BLIP_TIME_CAP_H;
  return BLIP_MIN_RADIUS + ratio * (BLIP_MAX_RADIUS - BLIP_MIN_RADIUS);
}

/**
 * Stable angle (radians, 0–2π) hashed from an alert's identity so two blips
 * spread across the dial instead of stacking, and the position is the same
 * on every re-render (no Math.random jitter). Identity = summary + type +
 * endTime, the fields that distinguish concurrent alerts.
 * @param {import('../types.js').AlertData} a
 * @returns {number}
 */
function blipAngle(a) {
  const seed = `${a.summary || ''}|${a.type || ''}|${a.endTime || ''}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 360;
  }
  return (hash / 360) * 2 * Math.PI;
}

/**
 * Build one AlertData object from an alert-attribute object.
 * Source-agnostic: `attrs` is the shape Atmos CE's _alert_attributes emits
 * (a single alert's fields). Used for each element of the all_alerts list.
 * @param {Record<string, any>} attrs - One alert's attribute fields.
 * @param {boolean} isActive - Whether this alert is currently in effect.
 * @returns {import('../types.js').AlertData}
 */
export function buildAlert(attrs, isActive) {
  const type = /** @type {string} */ (attrs.alert_type || attrs.type || 'wind');
  // Level is contractually numeric (Atmos CE: 1–4). Explicit finite check
  // so a non-numeric value falls back to 1 audibly rather than NaN.
  const rawLevel = Number(attrs.level);
  const severity = Number.isFinite(rawLevel) && rawLevel > 0 ? rawLevel : 1;
  const severityStr = typeof attrs.severity === 'string' ? attrs.severity.toLowerCase() : '';
  const color = /** @type {string} */ (
    ALERT_SEVERITY_STRING_COLOR_MAP[/** @type {keyof typeof ALERT_SEVERITY_STRING_COLOR_MAP} */ (severityStr)]
    || ALERT_COLOR_MAP[/** @type {keyof typeof ALERT_COLOR_MAP} */ (severity)]
    || ALERT_COLOR_MAP[1]
  );
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

  return {
    type,
    icon,
    severity,
    color,
    summary: String(attrs.headline || attrs.summary || ''),
    desc: String(attrs.description || ''),
    active: isActive,
    hoursLeft,
    hoursUntil,
    progress,
    locations,
    link: attrs.link ? String(attrs.link) : null,
    endTime: String(endTime),
    isUntilFurtherNotice,
  };
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
  // Collect alerts from the single Atmos CE sensor that carries the full
  // all_alerts list. Reading one list source (not per-sensor single
  // alerts) renders every active + upcoming warning and avoids
  // double-counting the same alert from two sensors.
  //
  // INVARIANT (locked by predicate audit 2026-06-22, D3): only the
  // ActiveAlertSensor exposes `all_alerts`; the upcoming/count sensors do
  // not. The `break` below relies on this — if Atmos CE ever adds
  // `all_alerts` to a second sensor, this loop must switch from
  // "first match wins" to picking the active-alert sensor explicitly.
  const alerts = [];
  for (const eid of discovery.alertEntityIds) {
    const entity = hass.states[eid];
    const list = entity?.attributes?.all_alerts;
    if (!Array.isArray(list)) continue;
    for (const element of list) {
      alerts.push(buildAlert(element, element.active === true));
    }
    break; // only one sensor carries all_alerts (see INVARIANT above)
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

  // Alert blips. Distance from centre encodes TIME (active alerts sit near
  // the centre; the further in the future an upcoming alert starts, the
  // further out it sits, clamped to the radar edge). Angle is a stable
  // per-alert hash so blips spread across all 360° and never stack on one
  // point or a single radial line — and, being deterministic, they don't
  // jump position on every re-render the way Math.random() would.
  const blipsHtml = alerts.map((a) => {
    const bx = cx + Math.cos(blipAngle(a)) * blipDistance(a);
    const by = cy + Math.sin(blipAngle(a)) * blipDistance(a);
    const blipDelay = (blipAngle(a) / (2 * Math.PI) * Number(sweepDur)).toFixed(2);
    return a.active
      ? `<div class="pw-radar-blip" style="left:${bx.toFixed(1)}px;top:${by.toFixed(1)}px;--pw-blip-color:${sanitizeCssValue(a.color)};animation-delay:${blipDelay}s"></div>`
      : `<div style="position:absolute;left:${bx.toFixed(1)}px;top:${by.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${sanitizeCssValue(a.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`;
  }).join('');

  const radarHtml = `
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${crtColors.bgInner};--pw-radar-bg-outer:${crtColors.bgOuter};--pw-radar-color:${crtColors.ring};--pw-radar-line:${crtColors.line};--pw-radar-sweep:${crtColors.sweep};--pw-radar-dur:${sweepDur}s" role="img" aria-label="${hasAlerts ? `${alerts.length} weather alerts` : 'No weather alerts'}">
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
    ? `<div class="pw-alert-timestamp pw-alert-${worstSeverity >= 4 ? 'red' : 'amber'}">${alerts.length} ${alerts.length === 1 ? 'alert' : 'alerts'} · valid through ${escapeHtml(latestExpiry)}</div>`
    : '';

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
    ariaLabel: 'Weather alerts',
    brandVariant: variant,
    kicker: hasAlerts ? `weather alerts (${alerts.length})` : 'no weather alerts',
    preContent: washHtml,
    body,
    proView,
    proInitial: proPersisted,
    pro: config?.pro !== false,
  });
}

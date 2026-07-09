/**
 * @module pulse-climate/sections/state-timeline-view
 * @description Body renderer for the State tab inside timeline-group. 48 cells
 * per zone (30-min slots × 24h). Cell colour = HVAC state, opacity tier =
 * power level within state. Pure renderer; emits rows + axis + footer summary
 * with no section-level header (the host owns the label and tab strip).
 *
 * History data: reads historyCache.stateData[entityId] populated by the
 * card's hvac_action + heating_power fetch path. Missing/empty history
 * degrades gracefully — every slot renders idle so the grid still tells
 * the user "no demand here" rather than rendering a blank box.
 */

import { escapeHtml, formatHHMM } from '../../shared/utils.js';
import { resolveZoneContext, rowStateClass } from '../utils.js';

const SLOT_COUNT = 48;
const POWER_MID = 30;
const POWER_FULL = 70;

/**
 * Bucket history into N × 30-min slots. Each slot picks the dominant state
 * (heating > cooling > idle > off — heating wins ties because the user
 * almost always cares about heat demand first) and the average power
 * within that state.
 *
 * @param {Array<{t: number, state: string, power: number}>|null|undefined} history
 * @param {number} slotCount
 * @returns {Array<{state: string, power: number}>}
 */
export function computeStateSlots(history, slotCount) {
  const now = Date.now();
  const windowMs = 24 * 3600 * 1000;
  const slotMs = windowMs / slotCount;
  const start = now - windowMs;
  const slots = Array.from({ length: slotCount }, () => ({ state: 'idle', power: 0 }));

  if (!Array.isArray(history) || history.length === 0) return slots;

  for (let i = 0; i < slotCount; i++) {
    const slotStart = start + i * slotMs;
    const slotEnd = slotStart + slotMs;
    const inSlot = history.filter((h) => h && h.t >= slotStart && h.t < slotEnd);
    if (inSlot.length === 0) continue;

    /** @type {Record<string, number>} */
    const counts = { heating: 0, cooling: 0, idle: 0, off: 0 };
    let powerSum = 0;
    let powerCount = 0;
    for (const h of inSlot) {
      if (counts[h.state] !== undefined) counts[h.state] += 1;
      if ((h.state === 'heating' || h.state === 'cooling') && Number.isFinite(h.power)) {
        powerSum += h.power;
        powerCount += 1;
      }
    }
    /* Priority order ensures heating beats cooling beats idle beats off
       on tied counts — the user wants to know about active demand first. */
    const dominant = ['heating', 'cooling', 'idle', 'off']
      .reduce((/** @type {string} */ best, /** @type {string} */ s) => counts[s] > counts[best] ? s : best, 'idle');
    const avgPower = powerCount > 0 ? powerSum / powerCount : 0;
    slots[i] = { state: dominant, power: avgPower };
  }
  return slots;
}

/**
 * Map a slot's state + power tier to a CSS modifier class.
 * @param {{state: string, power: number}} slot
 * @returns {string}
 */
function cellClassForSlot(slot) {
  let modifier = 'idle';
  if (slot.state === 'heating') {
    if (slot.power >= POWER_FULL) modifier = 'heat';
    else if (slot.power >= POWER_MID) modifier = 'heat-mid';
    else modifier = 'heat-low';
  } else if (slot.state === 'cooling') {
    if (slot.power >= POWER_FULL) modifier = 'cool';
    else if (slot.power >= POWER_MID) modifier = 'cool-mid';
    else modifier = 'cool-low';
  } else if (slot.state === 'off') {
    modifier = 'off';
  }
  return `pc-state-cell-${modifier}`;
}

/**
 * Sum heat / cool minutes from slot list. Each slot is 30 minutes.
 * @param {Array<{state: string, power: number}>} slots
 * @returns {{heatMin: number, coolMin: number}}
 */
function aggregateMinutes(slots) {
  let heatMin = 0;
  let coolMin = 0;
  for (const s of slots) {
    if (s.state === 'heating') heatMin += 30;
    else if (s.state === 'cooling') coolMin += 30;
  }
  return { heatMin, coolMin };
}

/**
 * Longest contiguous run of active demand (heating or cooling). Returns
 * minutes (slots × 30) and which mode dominated the streak. Streaks
 * mixing heat + cool count together — the user usually wants total
 * "system was working" duration, not a per-mode split.
 * @param {Array<{state: string, power: number}>} slots
 * @returns {{minutes: number, mode: 'heat' | 'cool' | 'mixed' | 'none'}}
 */
export function longestActiveStreak(slots) {
  let bestRun = 0;
  let bestHeat = 0;
  let bestCool = 0;
  let curRun = 0;
  let curHeat = 0;
  let curCool = 0;
  for (const s of slots) {
    const isActive = s.state === 'heating' || s.state === 'cooling';
    if (isActive) {
      curRun += 1;
      if (s.state === 'heating') curHeat += 1;
      else curCool += 1;
      if (curRun > bestRun) {
        bestRun = curRun;
        bestHeat = curHeat;
        bestCool = curCool;
      }
    } else {
      curRun = 0; curHeat = 0; curCool = 0;
    }
  }
  if (bestRun === 0) return { minutes: 0, mode: 'none' };
  let mode = /** @type {'heat'|'cool'|'mixed'} */ ('mixed');
  if (bestHeat > 0 && bestCool === 0) mode = 'heat';
  else if (bestCool > 0 && bestHeat === 0) mode = 'cool';
  return { minutes: bestRun * 30, mode };
}

/**
 * Hour-of-day with the most active slots across the 24h window. Returns the
 * absolute start-of-hour timestamp of that bucket (so the caller renders it
 * with the zone-aware formatHHMM, not a browser-zone getHours) plus the
 * minutes of demand inside it. Each hour holds two slots, so max is 60 min.
 * @param {Array<{state: string, power: number}>} slots
 * @returns {{ts: number, minutes: number} | null}
 */
export function busiestHour(slots) {
  if (slots.length === 0) return null;
  const slotsPerHour = slots.length / 24;
  /** @type {number[]} */
  const counts = Array.from({ length: 24 }, () => 0);
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i];
    if (s.state === 'heating' || s.state === 'cooling') {
      const hourIdx = Math.floor(i / slotsPerHour);
      counts[hourIdx] += 1;
    }
  }
  let bestHour = -1;
  let bestCount = 0;
  for (let h = 0; h < 24; h++) {
    if (counts[h] > bestCount) {
      bestCount = counts[h];
      bestHour = h;
    }
  }
  if (bestHour < 0) return null;
  /* Bucket 0 = the hour starting 24h ago. Anchor the window to a clean hour
     boundary, then add bestHour hours to get the bucket's absolute start
     timestamp — the caller formats it in the HA-configured zone. */
  const windowStart = new Date(Date.now() - 24 * 3600 * 1000);
  windowStart.setMinutes(0, 0, 0);
  const ts = windowStart.getTime() + bestHour * 3600 * 1000;
  return { ts, minutes: Math.round(bestCount * 30) };
}

/**
 * Format heat/cool durations into the row stat. Em-dash when both zero —
 * keeps the column tabular and visually quiet for idle zones.
 * @param {number} heatMin
 * @param {number} coolMin
 * @returns {string}
 */
function formatRowDuration(heatMin, coolMin) {
  if (heatMin === 0 && coolMin === 0) return '—';
  const total = heatMin + coolMin;
  const hours = Math.floor(total / 60);
  const mins = total % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}

/**
 * @param {number} heatMin
 * @param {number} coolMin
 * @returns {string}
 */
function rowDurationClass(heatMin, coolMin) {
  if (heatMin > coolMin && heatMin > 0) return 'pc-state-active-heat';
  if (coolMin > 0) return 'pc-state-active-cool';
  return '';
}

/**
 * Format a slot index back to its 30-minute time label. Slot 0 = 24h ago,
 * slot 47 = the most recent half-hour. Returns "HH:MM" so the cell tooltip
 * carries the same shape as heatmap cells (handler reads data-hour).
 * @param {number} slotIdx 0..47
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local.
 * @returns {string}
 */
function slotTimeLabel(slotIdx, timeZone) {
  const slotMs = 30 * 60 * 1000;
  const start = Date.now() - 24 * 3600 * 1000;
  return formatHHMM(new Date(start + slotIdx * slotMs), timeZone);
}

/**
 * Map a slot back to its tooltip text — matches the heatmap "HH:MM: value"
 * shape so the same tooltip handler handles both tabs.
 * @param {{state: string, power: number}} slot
 * @returns {string}
 */
function slotScoreText(slot) {
  if (slot.state === 'heating' || slot.state === 'cooling') {
    const label = slot.state === 'heating' ? 'heat' : 'cool';
    return slot.power > 0 ? `${label} ${Math.round(slot.power)}%` : label;
  }
  if (slot.state === 'off') return 'off';
  return 'idle';
}

/**
 * @param {{entity: string}[]} zones
 * @param {Record<string, *>} states
 * @param {*} discovery
 * @param {*} historyCache
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local cell labels.
 * @returns {string}
 */
export function renderStateTimelineView(zones, states, discovery, historyCache, timeZone) {
  let html = '<div class="pc-strip-rows">';
  html += '<div class="pc-strip-crosshair"></div>';
  let totalHeatMin = 0;
  let totalCoolMin = 0;

  for (const zoneConfig of zones) {
    const { entityId, zoneName, zoneState } = resolveZoneContext(zoneConfig, discovery, states);
    const stateHistory = historyCache?.stateData?.[entityId] || [];
    const slots = computeStateSlots(stateHistory, SLOT_COUNT);
    const { heatMin, coolMin } = aggregateMinutes(slots);
    totalHeatMin += heatMin;
    totalCoolMin += coolMin;

    const durationLabel = formatRowDuration(heatMin, coolMin);
    const durationClass = rowDurationClass(heatMin, coolMin);

    const rowClass = rowStateClass(zoneState);
    html += `<div class="pc-timeline-group-row pc-state-row${rowClass}" `
          + `data-entity="${escapeHtml(entityId)}" `
          + `data-zone="${escapeHtml(zoneName)}">`;
    html += `<span class="pc-timeline-group-name">${escapeHtml(zoneState.name)}</span>`;
    html += `<div class="pc-state-timeline-cells pc-cells">`;
    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i];
      const label = slotTimeLabel(i, timeZone);
      const score = slotScoreText(slot);
      html += `<span class="pc-state-cell pc-cell ${cellClassForSlot(slot)}" data-hour="${escapeHtml(label)}" data-score="${escapeHtml(score)}"></span>`;
    }
    html += `</div>`;
    html += `<span class="pc-timeline-group-stat ${durationClass}">${escapeHtml(durationLabel)}</span>`;
    html += `</div>`;
  }

  html += '</div>';
  html += renderTimeAxis();
  html += renderFooter(totalHeatMin, totalCoolMin, zones.length);
  return html;
}

function renderTimeAxis() {
  return `<div class="pc-timeline-group-axis">`
    + `<span></span>`
    + `<div class="ticks"><span>−24h</span><span>−18h</span><span>−12h</span><span>−6h</span><span>now</span></div>`
    + `<span></span>`
    + `</div>`;
}

/**
 * @param {number} min
 * @returns {string}
 */
function formatDurationCompact(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}

/**
 * @param {number} totalHeatMin
 * @param {number} totalCoolMin
 * @param {number} zoneCount
 * @returns {string}
 */
function renderFooter(totalHeatMin, totalCoolMin, zoneCount) {
  const heatLabel = totalHeatMin > 0 ? `${formatDurationCompact(totalHeatMin)} heat` : '';
  const coolLabel = totalCoolMin > 0 ? `${formatDurationCompact(totalCoolMin)} cool` : '';
  const parts = [heatLabel, coolLabel].filter(Boolean).join(' · ');
  const display = parts || '—';
  return `<div class="pc-timeline-group-footer">`
    + renderLegend()
    + `<span><strong>${escapeHtml(display)}</strong> · ${zoneCount} zones</span>`
    + `</div>`;
}

function renderLegend() {
  return `<span class="pc-state-legend">`
    + `<span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-heat"></span>Heat</span>`
    + `<span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-cool"></span>Cool</span>`
    + `<span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-idle"></span>Idle</span>`
    + `<span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-off"></span>Off</span>`
    + `</span>`;
}

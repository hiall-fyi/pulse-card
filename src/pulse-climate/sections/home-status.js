/**
 * @module pulse-climate/sections/home-status
 * @description Pure renderer for the Home Status section. Displays a hero status
 * indicator, sorted zone rows with deviation bars, and a summary footer.
 */

import { escapeHtml, sanitizeCssValue, formatNumericDisplay, celsiusDeltaToUnit } from '../../shared/utils.js';
import { resolveZoneContext, rowStateClass, zoneActionWord, formatTemperature, averageZonePower } from '../utils.js';

/** @param {{isUnavailable?: boolean, hvacAction?: string, targetTemp?: number|null}} zs @returns {boolean} */
const isListedActive = (zs) => !zs.isUnavailable && zs.hvacAction !== 'off'
  && (Number.isFinite(zs.targetTemp) || ['heating', 'cooling', 'drying', 'fan'].includes(/** @type {string} */ (zs.hvacAction)));

/** Maximum deviation for bar scale (±5 units). */
const MAX_DELTA = 5;

/** Hero icon map. */
const HERO_ICONS = {
  green: 'mdi:check-circle',
  amber: 'mdi:progress-clock',
  red: 'mdi:alert-circle',
};

// Modes other than heat and cool stay symmetric because either side can be the problem.
/** @param {{currentTemp?: number|null, targetTemp?: number|null, hvacMode?: string, targetRange?: {low: number, high: number}|null}} zone */
function targetShortfall(zone) {
  const { currentTemp, targetTemp } = zone;
  if (currentTemp === null || currentTemp === undefined
    || targetTemp === null || targetTemp === undefined) {
    return Infinity;
  }
  if (zone.hvacMode === 'cool') return Math.max(0, currentTemp - targetTemp);
  if (zone.hvacMode === 'heat') return Math.max(0, targetTemp - currentTemp);
  if (zone.targetRange) return Math.max(0, zone.targetRange.low - currentTemp, currentTemp - zone.targetRange.high);
  return Math.abs(currentTemp - targetTemp);
}

/** @param {{currentTemp?: number|null, targetTemp?: number|null, hvacMode?: string, targetRange?: {low: number, high: number}|null}} zone */
function isShortOfTarget(zone) {
  return targetShortfall(zone) > celsiusDeltaToUnit(1);
}

/**
 * Compute hero status from active zones.
 * @param {Array<{currentTemp: number|null, targetTemp: number|null, isUnavailable?: boolean}>} activeZones
 * @param {Array<{isUnavailable?: boolean}>} [allZones] - Every zone, to tell an offline home from one that is all off.
 * @returns {{ label: string, color: 'green'|'amber'|'red', detail: string }}
 */
export function computeHeroStatus(activeZones, allZones = activeZones) {
  if (activeZones.length === 0) {
    if (allZones.length > 0 && allZones.every((z) => z.isUnavailable)) {
      return { label: 'Unavailable', color: 'amber', detail: 'No zone is reporting' };
    }
    return { label: 'All Good', color: 'green', detail: 'All zones off' };
  }
  const offTarget = activeZones.filter((z) => isShortOfTarget(z));
  const total = activeZones.length;
  const notOnTarget = offTarget.length;
  const onTarget = total - notOnTarget;
  const ratio = onTarget / total;
  const isAbove = (/** @type {{currentTemp: number|null, targetTemp: number|null}} */ z) => /** @type {number} */ (z.currentTemp) > /** @type {number} */ (z.targetTemp);
  const allAbove = notOnTarget > 0 && offTarget.every(isAbove);
  const side = allAbove ? 'above' : offTarget.some(isAbove) ? 'away from' : 'short of';

  if (ratio >= 0.8) {
    return { label: 'All Good', color: 'green', detail: `${onTarget} of ${total} zones at or past target` };
  }
  if (ratio >= 0.4) {
    return {
      label: allAbove ? 'Cooling Down' : 'Warming Up',
      color: 'amber',
      detail: `${notOnTarget} zone${notOnTarget !== 1 ? 's' : ''} still ${side} target`,
    };
  }
  return { label: allAbove ? 'Too Warm' : 'Cold Start', color: 'red', detail: `${notOnTarget} of ${total} zones still ${side} target` };
}

/**
 * Sort zone states for display: active (by deviation desc) → off → unavailable.
 * @param {Array<{isUnavailable: boolean, hvacAction: string, targetTemp: number|null, currentTemp: number|null, name: string}>} zoneStates
 * @returns {Array<*>}
 */
export function sortZonesForDisplay(zoneStates) {
  const active = [];
  const off = [];
  const unavailable = [];
  for (const z of zoneStates) {
    if (z.isUnavailable) {
      unavailable.push(z);
    } else if (!isListedActive(z)) {
      off.push(z);
    } else {
      active.push(z);
    }
  }
  active.sort((a, b) => {
    const devA = a.currentTemp !== null && a.currentTemp !== undefined && a.targetTemp !== null
      ? Math.abs(a.currentTemp - a.targetTemp) : 0;
    const devB = b.currentTemp !== null && b.currentTemp !== undefined && b.targetTemp !== null
      ? Math.abs(b.currentTemp - b.targetTemp) : 0;
    return devB - devA;
  });
  off.sort((a, b) => a.name.localeCompare(b.name));
  unavailable.sort((a, b) => a.name.localeCompare(b.name));
  return [...active, ...off, ...unavailable];
}

/**
 * Compute summary footer statistics from active zones.
 * @param {Array<{currentTemp: number|null, targetTemp: number|null, heatingPower: number, coolingPower?: number, hasPowerData?: boolean, hvacAction?: string, unit: string}>} activeZones
 * @returns {{ onTarget: string, avgActual: string, avgTarget: string, avgPower: string }}
 */
export function computeSummary(activeZones) {
  if (activeZones.length === 0) {
    return { onTarget: '--', avgActual: '--', avgTarget: '--', avgPower: '--' };
  }
  const onTarget = activeZones.filter(
    (z) => Number.isFinite(z.currentTemp) && Number.isFinite(z.targetTemp) && !isShortOfTarget(z),
  ).length;
  const total = activeZones.length;
  const unit = activeZones[0].unit || '°C';
  const meanTemp = (/** @type {'currentTemp'|'targetTemp'} */ key) => {
    const vals = /** @type {number[]} */ (activeZones.map((z) => z[key]).filter((v) => Number.isFinite(v)));
    return vals.length > 0 ? formatTemperature(vals.reduce((s, v) => s + v, 0) / vals.length, unit) : '--';
  };
  const avgActual = meanTemp('currentTemp');
  const avgTarget = meanTemp('targetTemp');
  const power = averageZonePower(activeZones.map((z) => ({
    isUnavailable: false, hvacAction: z.hvacAction, power: z.heatingPower || z.coolingPower || 0, hasPowerData: z.hasPowerData !== false,
  })));
  const avgPower = power === null ? '--' : `${power}%`;
  return {
    onTarget: `${onTarget}/${total}`,
    avgActual,
    avgTarget,
    avgPower,
  };
}

/**
 * Render a single zone row HTML.
 * @param {*} zs - Zone state from resolveZoneState.
 * @returns {string}
 */
function renderZoneRow(zs) {
  const entityAttr = escapeHtml(zs.entityId);
  const name = escapeHtml(zs.name);
  const rawUnit = zs.unit || '°C';
  const isActive = isListedActive(zs);

  let tempsHtml;
  let deltaHtml;

  if (zs.isUnavailable) {
    tempsHtml = `<span class="pc-home-status-actual pc-off">--</span>`
      + `<span class="pc-home-status-arrow">→</span>`
      + `<span class="pc-home-status-target">Unavailable</span>`;
    deltaHtml = `<div class="pc-home-status-delta">`
      + `<div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div>`
      + `<span class="pc-home-status-delta-text">--</span>`
      + `</div>`;
  } else if (!isActive) {
    const actualDisplay = escapeHtml(formatTemperature(zs.currentTemp, rawUnit));
    tempsHtml = `<span class="pc-home-status-actual pc-off">${actualDisplay}</span>`
      + `<span class="pc-home-status-arrow"></span>`
      + `<span class="pc-home-status-target">${escapeHtml(zoneActionWord(zs))}</span>`;
    deltaHtml = `<div class="pc-home-status-delta">`
      + `<div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div>`
      + `<span class="pc-home-status-delta-text">${escapeHtml(zoneActionWord(zs))}</span>`
      + `</div>`;
  } else {
    const actualDisplay = escapeHtml(formatTemperature(zs.currentTemp, rawUnit));
    tempsHtml = `<span class="pc-home-status-actual">${actualDisplay}</span>`
      + `<span class="pc-home-status-arrow">→</span>`
      + `<span class="pc-home-status-target">${Number.isFinite(zs.targetTemp) ? escapeHtml(formatTemperature(zs.targetTemp, rawUnit)) : '--'}</span>`;

    if (zs.currentTemp !== null && zs.currentTemp !== undefined && Number.isFinite(zs.targetTemp)) {
      const delta = zs.currentTemp - zs.targetTemp;
      const absDelta = Math.abs(delta);
      const pct = Math.min(absDelta / celsiusDeltaToUnit(MAX_DELTA), 1) * 50;
      const barLeft = delta < 0 ? `${sanitizeCssValue(50 - pct)}%` : '50%';
      const barWidth = `${sanitizeCssValue(pct)}%`;
      const shortfall = targetShortfall(zs);
      const barColorKey = !isShortOfTarget(zs) ? 'green' : shortfall <= celsiusDeltaToUnit(2.5) ? 'amber' : 'red';
      const absText = formatNumericDisplay(absDelta);
      const sign = absText === '0' ? '' : delta >= 0 ? '+' : '−';
      const deltaText = `${sign}${escapeHtml(absText + rawUnit)}`;

      deltaHtml = `<div class="pc-home-status-delta">`
        + `<div class="pc-home-status-bar-track">`
        + `<div class="pc-home-status-bar-center"></div>`
        + `<div class="pc-home-status-bar-fill pc-status-${barColorKey}" style="left:${barLeft};width:${barWidth}"></div>`
        + `</div>`
        + `<span class="pc-home-status-delta-text pc-status-${barColorKey}">${deltaText}</span>`
        + `</div>`;
    } else {
      deltaHtml = `<div class="pc-home-status-delta">`
        + `<div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div>`
        + `<span class="pc-home-status-delta-text">--</span>`
        + `</div>`;
    }
  }

  const rowClass = rowStateClass(zs);
  return `<div class="pc-home-status-row${rowClass}" role="button" tabindex="0" data-entity="${entityAttr}">`
    + `<span class="pc-home-status-zone-name">${name}</span>`
    + `<div class="pc-home-status-temps">${tempsHtml}</div>`
    + deltaHtml
    + `</div>`;
}

/**
 * Render Home Status section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs from card config.
 * @param {Record<string, *>} states - hass.states object.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {{show_hero?: boolean}} [cardConfig] - When show_hero !== false the
 *   card-level hero already covers this role; the inner hero block is omitted
 *   to avoid two competing focal points.
 * @returns {string} HTML string (empty if zones array is empty).
 */
export function renderHomeStatusSection(zones, states, discovery, cardConfig) {
  if (!zones || zones.length === 0) return '';

  const zoneStates = zones.map((zoneConfig) => resolveZoneContext(zoneConfig, discovery, states).zoneState);

  const activeZones = zoneStates.filter(
    (z) => isListedActive(z) && Number.isFinite(z.targetTemp),
  );

  const hero = computeHeroStatus(activeZones, zoneStates);
  const heroIcon = HERO_ICONS[hero.color];

  const sorted = sortZonesForDisplay(zoneStates);
  const summary = computeSummary(activeZones);

  let html = `<div class="pc-section pc-section-home-status">`;
  html += `<div class="pulse-section-label">Home Status</div>`;

  // Defer to the card-level hero: render the inner hero only when show_hero is false, to avoid two focal points.
  if (cardConfig?.show_hero === false) {
    html += `<div class="pc-home-status-hero">`;
    html += `<ha-icon class="pc-home-status-icon pc-status-${hero.color}" icon="${escapeHtml(heroIcon)}"></ha-icon>`;
    html += `<div class="pc-home-status-label pc-status-${hero.color}">${escapeHtml(hero.label)}</div>`;
    html += `<div class="pc-home-status-detail">${escapeHtml(hero.detail)}</div>`;
    html += `</div>`;
  }

  html += `<div class="pc-home-status-zones">`;
  for (const zs of sorted) {
    html += renderZoneRow(zs);
  }
  html += `</div>`;

  html += `<div class="pc-home-status-summary">`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.onTarget)}</div><div class="pc-stat-label">On Target</div></div>`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.avgActual)}</div><div class="pc-stat-label">Avg Actual</div></div>`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.avgTarget)}</div><div class="pc-stat-label">Avg Target</div></div>`;
  html += `<div class="pc-stat"><div class="pc-stat-value">${escapeHtml(summary.avgPower)}</div><div class="pc-stat-label">Avg Power</div></div>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}

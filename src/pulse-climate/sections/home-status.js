/**
 * @module pulse-climate/sections/home-status
 * @description Pure renderer for the Home Status section. Displays a hero status
 * indicator, sorted zone rows with deviation bars, and a summary footer.
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';
import { resolveZoneContext, rowStateClass } from '../utils.js';

/** Maximum deviation for bar scale (±5 units). */
const MAX_DELTA = 5;

/** Colour map — tier tokens for visual coherence with hero. */
const STATUS_COLORS = {
  green: 'var(--pulse-tier-moderate)',
  amber: 'var(--pulse-tier-strong)',
  red: 'var(--pulse-tier-gale)',
};

/** Hero icon map. */
const HERO_ICONS = {
  green: 'mdi:check-circle',
  amber: 'mdi:progress-clock',
  red: 'mdi:alert-circle',
};

/**
 * Compute hero status from active zones.
 * @param {Array<{currentTemp: number|null, targetTemp: number|null}>} activeZones
 * @returns {{ label: string, color: 'green'|'amber'|'red', detail: string }}
 */
export function computeHeroStatus(activeZones) {
  if (activeZones.length === 0) {
    return { label: 'All Good', color: 'green', detail: 'All zones off' };
  }
  const onTarget = activeZones.filter(
    (z) => z.currentTemp !== null && z.currentTemp !== undefined
      && z.targetTemp !== null && z.targetTemp !== undefined
      && Math.abs(z.currentTemp - z.targetTemp) <= 1,
  ).length;
  const total = activeZones.length;
  const ratio = onTarget / total;
  const notOnTarget = total - onTarget;

  if (ratio >= 0.8) {
    return { label: 'All Good', color: 'green', detail: `${onTarget} of ${total} zones at target` };
  }
  if (ratio >= 0.4) {
    return {
      label: 'Warming Up',
      color: 'amber',
      detail: `${notOnTarget} zone${notOnTarget !== 1 ? 's' : ''} still catching up`,
    };
  }
  return { label: 'Cold Start', color: 'red', detail: `${notOnTarget} of ${total} zones below target` };
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
    } else if (z.hvacAction === 'off' || !z.targetTemp) {
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
 * @param {Array<{currentTemp: number|null, targetTemp: number|null, heatingPower: number, unit: string}>} activeZones
 * @returns {{ onTarget: string, avgActual: string, avgTarget: string, avgPower: string }}
 */
export function computeSummary(activeZones) {
  if (activeZones.length === 0) {
    return { onTarget: '--', avgActual: '--', avgTarget: '--', avgPower: '--' };
  }
  const onTarget = activeZones.filter(
    (z) => z.currentTemp !== null && z.currentTemp !== undefined
      && z.targetTemp !== null && z.targetTemp !== undefined
      && Math.abs(z.currentTemp - z.targetTemp) <= 1,
  ).length;
  const total = activeZones.length;
  const avgActual = (activeZones.reduce((s, z) => s + (z.currentTemp ?? 0), 0) / total).toFixed(1);
  const avgTarget = (activeZones.reduce((s, z) => s + (z.targetTemp ?? 0), 0) / total).toFixed(1);
  const avgPower = Math.round(activeZones.reduce((s, z) => s + z.heatingPower, 0) / total);
  const unit = activeZones[0].unit || '°C';
  return {
    onTarget: `${onTarget}/${total}`,
    avgActual: `${avgActual}${unit}`,
    avgTarget: `${avgTarget}${unit}`,
    avgPower: `${avgPower}%`,
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
  const unit = escapeHtml(zs.unit || '°C');
  const isActive = !zs.isUnavailable && zs.hvacAction !== 'off' && zs.targetTemp;

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
    const actualDisplay = zs.currentTemp !== null && zs.currentTemp !== undefined
      ? `${escapeHtml(zs.currentTemp)}${unit}` : '--';
    tempsHtml = `<span class="pc-home-status-actual pc-off">${actualDisplay}</span>`
      + `<span class="pc-home-status-arrow"></span>`
      + `<span class="pc-home-status-target">Off</span>`;
    deltaHtml = `<div class="pc-home-status-delta">`
      + `<div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div>`
      + `<span class="pc-home-status-delta-text">Off</span>`
      + `</div>`;
  } else {
    const actualDisplay = zs.currentTemp !== null && zs.currentTemp !== undefined
      ? `${escapeHtml(zs.currentTemp)}${unit}` : '--';
    tempsHtml = `<span class="pc-home-status-actual">${actualDisplay}</span>`
      + `<span class="pc-home-status-arrow">→</span>`
      + `<span class="pc-home-status-target">${escapeHtml(zs.targetTemp)}${unit}</span>`;

    if (zs.currentTemp !== null && zs.currentTemp !== undefined) {
      const delta = zs.currentTemp - zs.targetTemp;
      const absDelta = Math.abs(delta);
      const pct = Math.min(absDelta / MAX_DELTA, 1) * 50;
      const barLeft = delta < 0 ? `${sanitizeCssValue(50 - pct)}%` : '50%';
      const barWidth = `${sanitizeCssValue(pct)}%`;
      const barColorKey = absDelta < 1 ? 'green' : absDelta <= 2.5 ? 'amber' : 'red';
      const barColor = STATUS_COLORS[barColorKey];
      const sign = delta >= 0 ? '+' : '−';
      const deltaText = `${sign}${escapeHtml(absDelta.toFixed(1))}°`;

      deltaHtml = `<div class="pc-home-status-delta">`
        + `<div class="pc-home-status-bar-track">`
        + `<div class="pc-home-status-bar-center"></div>`
        + `<div class="pc-home-status-bar-fill" style="left:${barLeft};width:${barWidth};background:${sanitizeCssValue(barColor)}"></div>`
        + `</div>`
        + `<span class="pc-home-status-delta-text" style="color:${sanitizeCssValue(barColor)}">${deltaText}</span>`
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
    (z) => !z.isUnavailable && z.hvacAction !== 'off' && z.targetTemp,
  );

  const hero = computeHeroStatus(activeZones);
  const heroColor = STATUS_COLORS[hero.color];
  const heroIcon = HERO_ICONS[hero.color];

  const sorted = sortZonesForDisplay(zoneStates);
  const summary = computeSummary(activeZones);

  let html = `<div class="pc-section pc-section-home-status">`;
  html += `<div class="pulse-section-label">Home Status</div>`;

  /* Defer to the card-level hero when enabled — render the inner hero only
     when show_hero is explicitly disabled, so we don't show two focal points. */
  if (cardConfig?.show_hero === false) {
    html += `<div class="pc-home-status-hero">`;
    html += `<ha-icon class="pc-home-status-icon" icon="${escapeHtml(heroIcon)}" style="color:${sanitizeCssValue(heroColor)}"></ha-icon>`;
    html += `<div class="pc-home-status-label" style="color:${sanitizeCssValue(heroColor)}">${escapeHtml(hero.label)}</div>`;
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

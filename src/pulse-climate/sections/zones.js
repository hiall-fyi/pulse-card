/**
 * @module pulse-climate/sections/zones
 * @description Render zone rows with temperature gauge, heating power bar,
 * status chips, and sparkline modes (overlay, prominent, pulse).
 * Uses shared chart-primitives for consistent visual identity.
 */

import { escapeHtml, sanitizeCssValue, formatNumericDisplay } from '../../shared/utils.js';
import { resolveZoneState, resolveHvacVisual, tempToPosition, computeGlowStdDev } from '../utils.js';
import { extractZoneName } from '../zone-resolver.js';
import { resolveHistoryTempSensor } from '../sensor-resolver.js';
import { temperatureToColor, buildFilledSparkline, buildSparklineDataAttr, buildBloomFilter } from '../chart-primitives.js';
import { buildSparklinePath } from '../../shared/utils.js';

/**
 * Render a single zone row HTML.
 * @param {import('../types.js').ZoneState} zs - Resolved zone state.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Per-zone config.
 * @param {import('../types.js').PulseClimateConfig} cardConfig - Card config.
 * @param {{t: number, v: number}[]} [sparklineData] - History data for sparkline.
 * @returns {string} HTML string.
 */
function renderZoneRow(zs, zoneConfig, cardConfig, sparklineData) {
  const showTempBar = zoneConfig.show_temp_bar ?? cardConfig.show_temp_bar ?? true;
  const showPowerBar = zoneConfig.show_power_bar ?? cardConfig.show_power_bar ?? true;
  const unavailableClass = zs.isUnavailable ? ' pc-unavailable' : '';

  /* Per-state row class + inline state tag — drives row backdrop, target highlight, and tag pill. */
  const atTarget = !zs.isUnavailable
    && zs.currentTemp !== null && zs.currentTemp !== undefined
    && zs.targetTemp !== null && zs.targetTemp !== undefined
    && Math.abs(zs.currentTemp - zs.targetTemp) <= 0.3;
  let stateClass;
  let stateTag;
  if (zs.isUnavailable) {
    stateClass = ' pc-row-unavail';
    stateTag = '<span class="pc-state-tag pc-tag-unavail">Unavail</span>';
  } else if (zs.hvacAction === 'heating') {
    stateClass = ' pc-row-heat';
    stateTag = '<span class="pc-state-tag pc-tag-heat">Heat</span>';
  } else if (zs.hvacAction === 'cooling') {
    stateClass = ' pc-row-cool';
    stateTag = '<span class="pc-state-tag pc-tag-cool">Cool</span>';
  } else if (zs.hvacAction === 'off') {
    stateClass = ' pc-row-off';
    stateTag = '<span class="pc-state-tag pc-tag-off">Off</span>';
  } else if (atTarget) {
    stateClass = ' pc-row-at-target';
    stateTag = '<span class="pc-state-tag pc-tag-at-target">At target</span>';
  } else {
    stateClass = ' pc-row-idle';
    stateTag = '<span class="pc-state-tag pc-tag-idle">Idle</span>';
  }

  const tempDisplay = zs.isUnavailable
    ? 'Unavailable'
    : zs.currentTemp !== null
      ? `${formatNumericDisplay(zs.currentTemp)}${escapeHtml(zs.unit)}`
      : '--';
  const targetDisplay = (!zs.isUnavailable && zs.targetTemp !== null)
    ? `<span class="pc-zone-target">→ ${formatNumericDisplay(zs.targetTemp)}${escapeHtml(zs.unit)}</span>`
    : '';

  // Humidity inline with zone name — e.g. "💧 53% Dining"
  const humidityDisplay = (!zs.isUnavailable && zs.humidity !== null)
    ? ` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(zs.humidity)}%</span>`
    : '';

  const ariaLabel = zs.isUnavailable
    ? `${escapeHtml(zs.name)}: Unavailable`
    : `${escapeHtml(zs.name)}: ${tempDisplay}${zs.targetTemp !== null ? `, target ${formatNumericDisplay(zs.targetTemp)}${zs.unit}` : ''}${zs.humidity !== null ? `, ${Math.round(zs.humidity)}% humidity` : ''}, ${zs.hvacAction}`;

  let html = `<div class="pc-zone-row${unavailableClass}${stateClass}" tabindex="0" role="button"
    aria-label="${escapeHtml(ariaLabel)}" data-entity="${escapeHtml(zs.entityId)}">`;
  html += `<div class="pc-zone-header">`;
  html += `<span class="pc-zone-name">${zs.icon && zs.icon !== 'mdi:thermometer' ? `<ha-icon icon="${escapeHtml(zs.icon)}"></ha-icon> ` : ''}${escapeHtml(zs.name)}${humidityDisplay}</span>`;
  html += `<span class="pc-zone-temp">${tempDisplay}${targetDisplay}${stateTag}</span>`;
  html += `</div>`;

  // Temperature gauge bar — gradient background via temperatureToColor
  if (showTempBar && !zs.isUnavailable) {
    const currentPos = zs.currentTemp !== null
      ? tempToPosition(zs.currentTemp, zs.minTemp, zs.maxTemp)
      : 50;
    const targetPos = zs.targetTemp !== null
      ? tempToPosition(zs.targetTemp, zs.minTemp, zs.maxTemp)
      : null;

    const coldColor = temperatureToColor(zs.minTemp);
    const warmColor = temperatureToColor((zs.minTemp + zs.maxTemp) / 2);
    const hotColor = temperatureToColor(zs.maxTemp);
    const gradientBg = `linear-gradient(to right, ${sanitizeCssValue(coldColor)}, ${sanitizeCssValue(warmColor)}, ${sanitizeCssValue(hotColor)})`;

    html += `<div class="pc-temp-gauge">`;
    html += `<div class="pc-temp-gauge-bg" style="background:${gradientBg}"></div>`;
    html += `<div class="pc-temp-gauge-current" style="left:${sanitizeCssValue(currentPos.toFixed(1))}%"></div>`;
    if (targetPos !== null) {
      html += `<div class="pc-temp-gauge-target" style="left:${sanitizeCssValue(targetPos.toFixed(1))}%"></div>`;
    }
    html += `</div>`;
  }

  if (showPowerBar && !zs.isUnavailable) {
    const power = zs.heatingPower || zs.coolingPower || 0;
    const hvacVis = resolveHvacVisual(zs.hvacAction);
    const barColor = hvacVis.token || hvacVis.fallback;

    if (power > 0 || zs.hvacAction === 'heating' || zs.hvacAction === 'cooling') {
      const fillWidth = Math.min(100, Math.max(0, power));
      const activeClass = power > 0 ? ' pc-bar-active' : '';
      html += `<div class="pc-power-bar-container">`;
      html += `<div class="pc-power-bar-track"></div>`;
      html += `<div class="pc-power-bar-fill${activeClass}" style="width:${sanitizeCssValue(fillWidth.toFixed(1))}%;background:${sanitizeCssValue(barColor)};--pc-bar-glow:${sanitizeCssValue(hvacVis.fallback)}40"></div>`;
      html += `</div>`;
    }
  }

  if (zs.chips.length > 0) {
    html += `<div class="pc-zone-chips">`;
    for (const chip of zs.chips) {
      const severityClass = chip.severity ? ` pc-severity-${chip.severity.toLowerCase()}` : '';
      const colorStyle = chip.color ? ` style="color:${sanitizeCssValue(chip.color)}"` : '';
      const entityAttr = chip.entityId ? ` data-entity="${escapeHtml(chip.entityId)}"` : '';
      html += `<span class="pc-chip${severityClass}"${colorStyle}${entityAttr} data-chip-type="${escapeHtml(chip.type)}">`;
      html += `<ha-icon icon="${escapeHtml(chip.icon)}"></ha-icon>`;
      html += `${escapeHtml(chip.label)}`;
      html += `</span>`;
    }
    html += `</div>`;
  }

  const sparklineMode = /** @type {*} */ (zoneConfig.sparkline)?.mode || 'overlay';

  // Pulse mode: completely different zone row layout — waveform as background
  if (sparklineMode === 'pulse' && !zs.isUnavailable) {
    return renderPulseZoneRow(zs, zoneConfig, sparklineData);
  }

  if (!zs.isUnavailable && sparklineData && sparklineData.length >= 2) {
    const sparkHvacVis = resolveHvacVisual(zs.hvacAction);
    const lineColor = zoneConfig.color || sparkHvacVis.fallback;

    if (sparklineMode === 'prominent') {
      // Prominent mode: filled sparkline using shared primitive
      html += renderProminentSparkline(lineColor, sparklineData, zs.unit, zs.entityId);
    }
    // overlay mode: no standalone sparkline block (rendered inside gauge if applicable)
  }

  html += `</div>`;
  return html;
}


/**
 * Render a pulse-mode zone row:
 * waveform SVG as background, zone info overlaid on top.
 * @param {import('../types.js').ZoneState} zs - Zone state.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Zone config.
 * @param {{t: number, v: number}[]} [sparklineData] - Sparkline data.
 * @returns {string} HTML string for the complete zone row.
 */
function renderPulseZoneRow(zs, zoneConfig, sparklineData) {
  const hvacVis = resolveHvacVisual(zs.hvacAction);
  const isHeating = zs.heatingPower > 0 || zs.hvacAction === 'heating';
  const isCooling = zs.hvacAction === 'cooling';
  const isActive = isHeating || isCooling;

  // Idle: subtle white line. Active: HVAC color (orange for heating, blue for cooling).
  const lineColor = isActive
    ? (zoneConfig.color || hvacVis.fallback)
    : 'var(--pulse-text-secondary)';
  const safeColor = sanitizeCssValue(lineColor);
  const entitySlug = escapeHtml(zs.entityId).replace(/\./g, '-');
  const power = zs.heatingPower || zs.coolingPower || 0;
  const actionText = zs.hvacAction === 'heating' ? `Heating ${Math.round(power)}%`
    : zs.hvacAction === 'cooling' ? `Cooling ${Math.round(power)}%`
    : 'Idle';

  const tempDisplay = zs.currentTemp !== null ? `${formatNumericDisplay(zs.currentTemp)}${escapeHtml(zs.unit)}` : '--';
  const targetDisplay = zs.targetTemp !== null ? `→ ${formatNumericDisplay(zs.targetTemp)}${escapeHtml(zs.unit)}` : '';

  const ariaLabel = `${escapeHtml(zs.name)}: ${tempDisplay}, ${actionText}`;
  const rowClass = `pc-zone-row pc-zone-row-pulse${isHeating ? ' pc-heating' : ''}`;

  const dataAttr = buildSparklineDataAttr(sparklineData || [], 24, zs.unit);
  let html = `<div class="${rowClass}" tabindex="0" role="button"
    aria-label="${escapeHtml(ariaLabel)}" data-entity="${escapeHtml(zs.entityId)}"${dataAttr ? ` data-sparkline='${escapeHtml(dataAttr)}'` : ''}>`;

  if (sparklineData && sparklineData.length >= 2) {
    const result = buildFilledSparkline(sparklineData, 360, 56, 60);
    if (result) {
      const gradId = `pulse-grad-${entitySlug}`;
      const filterId = `pulse-glow-${entitySlug}`;
      const glowClass = isActive ? ' pc-heating-glow' : '';

      // Active: vivid fill (0.55 top). Idle: subtle fill (0.2 top).
      const fillTopOpacity = isActive ? '0.55' : '0.2';
      const fillBottomOpacity = isActive ? '0.05' : '0.02';

      // Active: bold line. Idle: thin + dim.
      const strokeWidth = isActive ? '2' : '1.5';
      const strokeOpacity = isActive ? '1' : '0.5';

      html += `<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">`;
      html += `<defs>`;
      html += `<linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">`;
      html += `<stop offset="0%" stop-color="${safeColor}" stop-opacity="${fillTopOpacity}"/>`;
      html += `<stop offset="100%" stop-color="${safeColor}" stop-opacity="${fillBottomOpacity}"/>`;
      html += `</linearGradient>`;
      if (isActive) {
        html += buildBloomFilter(filterId, computeGlowStdDev(360, 360).toFixed(1));
      }
      html += `</defs>`;
      html += `<path d="${result.areaPath}" fill="url(#${gradId})" />`;
      html += `<path d="${result.linePath}" fill="none" stroke="${safeColor}" stroke-width="${strokeWidth}" opacity="${strokeOpacity}"`;
      if (isActive) html += ` filter="url(#${filterId})" class="${glowClass}"`;
      html += ` />`;
      html += `</svg>`;
    }
  }

  html += `<div class="pc-pulse-info">`;
  html += `<div class="pc-pulse-info-left">`;
  html += `<div class="pc-zone-name">${zs.icon && zs.icon !== 'mdi:thermometer' ? `<ha-icon icon="${escapeHtml(zs.icon)}"></ha-icon> ` : ''}${escapeHtml(zs.name)}</div>`;
  html += `<div class="pc-pulse-status">`;
  html += `<span class="pc-status-dot" style="background:${safeColor}"></span>`;
  html += `${escapeHtml(actionText)}`;
  html += `</div>`;
  html += `</div>`;
  html += `<div class="pc-pulse-info-right">`;
  html += `<span class="pc-pulse-current">${escapeHtml(tempDisplay)}</span>`;
  if (targetDisplay) {
    html += `<span class="pc-zone-target">${targetDisplay}</span>`;
  }
  html += `</div>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}


/**
 * Render a prominent (filled area) sparkline below the zone header.
 * @param {string} lineColor - CSS colour for the line and fill gradient.
 * @param {{t: number, v: number}[]} data - History data points.
 * @param {string} unit - Temperature unit (passed through to data attribute for tooltip).
 * @param {string} [entityId] - Entity ID, hashed for the gradient id to prevent
 *   colour bleeding between zones in the same shadow root.
 * @returns {string} HTML string, empty when path build fails completely.
 */
function renderProminentSparkline(lineColor, data, unit, entityId) {
  const result = buildFilledSparkline(data, 300, 40, 48);
  if (!result) {
    /* Fallback: filled-area build failed (insufficient data) — degrade to line-only. */
    const path = buildSparklinePath(data, 300, 40, 48, 'avg', true);
    if (!path) return '';
    return `<div class="pc-sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${path}" fill="none" stroke="${sanitizeCssValue(lineColor)}" stroke-width="1.5" opacity="0.7" /></svg></div>`;
  }

  // Use entity ID hash for unique gradient ID — prevents color bleeding between zones
  const gradSuffix = entityId ? entityId.replace(/[^a-z0-9]/gi, '-') : String(Math.random()).slice(2, 8);
  const gradId = `prom-grad-${gradSuffix}`;
  const safeColor = sanitizeCssValue(lineColor);
  const dataAttr = buildSparklineDataAttr(data, 24, unit);
  let html = `<div class="pc-sparkline-filled" style="height:40px"${dataAttr ? ` data-sparkline='${escapeHtml(dataAttr)}'` : ''}>`;
  html += `<svg viewBox="0 0 300 40" preserveAspectRatio="none">`;
  html += `<defs><linearGradient id="${escapeHtml(gradId)}" x1="0" y1="0" x2="0" y2="1">`;
  html += `<stop offset="0%" stop-color="${safeColor}" stop-opacity="0.3"/>`;
  html += `<stop offset="100%" stop-color="${safeColor}" stop-opacity="0"/>`;
  html += `</linearGradient></defs>`;
  html += `<path d="${result.areaPath}" fill="url(#${escapeHtml(gradId)})" />`;
  html += `<path d="${result.linePath}" fill="none" stroke="${safeColor}" stroke-width="1.5" opacity="0.7" />`;
  html += `</svg></div>`;
  return html;
}

/**
 * Render the zones section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {import('../types.js').PulseClimateConfig} config - Card config.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache for sparklines.
 * @returns {string} HTML string.
 */
export function renderZonesSection(zones, config, states, discovery, historyCache) {
  if (!zones || zones.length === 0) return '';

  const columns = Number(config.columns) || 1;
  const columnsClass = columns > 1 ? ' pc-columns' : '';
  const gridStyle = columns > 1
    ? ` style="grid-template-columns:repeat(${Number(columns)}, 1fr)"`
    : '';

  let html = `<div class="pc-section pc-section-zones${columnsClass}"${gridStyle}>`;

  // Section header with optional Home/Away presence badge
  const homeEntity = discovery?.hubEntities?.home_state;
  const homeState = homeEntity ? states[homeEntity] : null;
  if (homeState && homeState.state !== 'unavailable') {
    const isHome = homeState.state === 'on';
    const homeIcon = isHome ? 'mdi:home' : 'mdi:home-export-outline';
    const homeLabel = isHome ? 'Home' : 'Away';
    const homeColor = isHome ? 'var(--pulse-status-green)' : 'var(--pulse-text-secondary)';
    html += `<div style="display:flex;justify-content:space-between;align-items:center">`;
    html += `<div class="pulse-section-label">Zones</div>`;
    html += `<span class="pc-chip" data-entity="${escapeHtml(homeEntity)}" style="color:${sanitizeCssValue(homeColor)}">`;
    html += `<ha-icon icon="${escapeHtml(homeIcon)}"></ha-icon>${escapeHtml(homeLabel)}</span>`;
    html += `</div>`;
  } else {
    html += `<div class="pulse-section-label">Zones</div>`;
  }

  for (const zoneConfig of zones) {
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const discoveredEntities = discovery?.zoneEntities?.[zoneName] || {};
    const zoneState = resolveZoneState(entityId, discoveredEntities, states, zoneConfig, config);
    // History is keyed by sensor entity ID (not climate entity ID) — use shared resolver
    const tempResolved = resolveHistoryTempSensor(entityId, states, discoveredEntities, zoneConfig);
    const sparklineData = historyCache?.data?.[tempResolved.entityId] || historyCache?.data?.[entityId] || [];
    html += renderZoneRow(zoneState, zoneConfig, config, sparklineData);
  }

  html += `</div>`;
  return html;
}

/**
 * Update zones section DOM differentially.
 * @param {HTMLElement} sectionEl - The .section-zones element.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {import('../types.js').PulseClimateConfig} config - Card config.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {Record<string, *>} prevStates - Previous states for change detection.
 */
export function updateZonesSection(sectionEl, zones, config, states, discovery, prevStates) {
  if (!sectionEl || !zones) return;

  const zoneRows = sectionEl.querySelectorAll('.pc-zone-row');

  for (let i = 0; i < zones.length; i++) {
    const zoneConfig = zones[i];
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const discoveredEntities = discovery?.zoneEntities?.[zoneName] || {};

    const currentState = states[entityId];
    const prevState = prevStates[entityId];
    if (currentState === prevState && zoneRows[i]) continue;

    const zoneState = resolveZoneState(entityId, discoveredEntities, states, zoneConfig, config);
    const row = zoneRows[i];
    if (!row) continue;

    const tempEl = row.querySelector('.pc-zone-temp');
    if (tempEl) {
      const tempDisplay = zoneState.isUnavailable
        ? 'Unavailable'
        : zoneState.currentTemp !== null
          ? `${formatNumericDisplay(zoneState.currentTemp)}${zoneState.unit}`
          : '--';
      const targetDisplay = (!zoneState.isUnavailable && zoneState.targetTemp !== null)
        ? `<span class="pc-zone-target">→ ${formatNumericDisplay(zoneState.targetTemp)}${escapeHtml(zoneState.unit)}</span>`
        : '';
      // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped (escapeHtml + formatNumericDisplay)
      tempEl.innerHTML = `${escapeHtml(tempDisplay)}${targetDisplay}`;
    }

    const fillEl = /** @type {HTMLElement|null} */ (row.querySelector('.pc-power-bar-fill'));
    if (fillEl) {
      const power = zoneState.heatingPower || zoneState.coolingPower || 0;
      const hvacVis = resolveHvacVisual(zoneState.hvacAction);
      const barColor = hvacVis.token || hvacVis.fallback;
      fillEl.style.width = `${Math.min(100, Math.max(0, power)).toFixed(1)}%`;
      fillEl.style.background = barColor;
      fillEl.style.setProperty('--pc-bar-glow', `${hvacVis.fallback}40`);
      fillEl.classList.toggle('pc-bar-active', power > 0);
    }

    const currentMarker = /** @type {HTMLElement|null} */ (row.querySelector('.pc-temp-gauge-current'));
    if (currentMarker && zoneState.currentTemp !== null) {
      const pos = tempToPosition(zoneState.currentTemp, zoneState.minTemp, zoneState.maxTemp);
      currentMarker.style.left = `${pos.toFixed(1)}%`;
    }

    const targetMarker = /** @type {HTMLElement|null} */ (row.querySelector('.pc-temp-gauge-target'));
    if (targetMarker && zoneState.targetTemp !== null) {
      const pos = tempToPosition(zoneState.targetTemp, zoneState.minTemp, zoneState.maxTemp);
      targetMarker.style.left = `${pos.toFixed(1)}%`;
    }

    const gaugeBg = /** @type {HTMLElement|null} */ (row.querySelector('.pc-temp-gauge-bg'));
    if (gaugeBg && !zoneState.isUnavailable) {
      const coldColor = temperatureToColor(zoneState.minTemp);
      const warmColor = temperatureToColor((zoneState.minTemp + zoneState.maxTemp) / 2);
      const hotColor = temperatureToColor(zoneState.maxTemp);
      gaugeBg.style.background = `linear-gradient(to right, ${coldColor}, ${warmColor}, ${hotColor})`;
    }

    if (zoneState.isUnavailable) {
      row.classList.add('pc-unavailable');
    } else {
      row.classList.remove('pc-unavailable');
    }
  }
}

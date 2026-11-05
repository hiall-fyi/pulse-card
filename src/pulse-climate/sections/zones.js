/**
 * @module pulse-climate/sections/zones
 * @description Render zone rows with temperature gauge, heating power bar,
 * status chips, and sparkline modes (overlay, prominent, pulse).
 * Uses shared chart-primitives for consistent visual identity.
 */

import { escapeHtml, sanitizeCssValue, isUnavailableState } from '../../shared/utils.js';
import { formatTemperature, formatPercent, resolveZoneContext, resolveHvacVisual, tempToPosition, computeGlowStdDev, zoneActivityLabel, zoneActionWord, zoneStateKey, isZoneDemanding } from '../utils.js';
import { resolveHistoryTempSensor } from '../sensor-resolver.js';
import { zoneBoundEntityIds } from '../zone-resolver.js';
import { temperatureToColor, buildFilledSparkline, buildSparklineDataAttr, buildBloomFilter } from '../chart-primitives.js';

// The only severities styles.js actually paints (pc-severity-high/-medium/-critical).
const VALID_SEVERITIES = new Set(['high', 'medium', 'critical']);

// Every HVAC_VISUALS tier value, cleared in patchZoneRow because the power bar is a persistent DOM node.
const HVAC_TIER_CLASSES = ['amber', 'blue', 'drying', 'fan', 'disabled'];

// Every row-state class a standard zone row can carry.
const ROW_STATE_CLASSES = ['pc-row-unavail', 'pc-row-heat', 'pc-row-cool', 'pc-row-off', 'pc-row-at-target', 'pc-row-idle'];

/**
 * Everything a standard zone row shows, shared by the fresh render and the live update.
 * @param {import('../types.js').ZoneState} zs - Resolved zone state.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Per-zone config.
 * @param {import('../types.js').PulseClimateConfig} cardConfig - Card config.
 * @returns {{stateClass: string, nameHtml: string, tempHtml: string, ariaLabel: string, powerBar: ({fillWidth: number, activeClass: string, tierClass: string}|null), gauge: ({gradient: string, currentPos: string, targetPos: (string|null)}|null), chipsHtml: string}}
 */
function zoneRowView(zs, zoneConfig, cardConfig) {
  const showPowerBar = zoneConfig.show_power_bar ?? cardConfig.show_power_bar ?? true;
  const showTempBar = zoneConfig.show_temp_bar ?? cardConfig.show_temp_bar ?? true;

  /* Per-state row class + inline state tag: drives row backdrop, target highlight, and tag pill. */
  // Zones rows have no sensor state, so the sensor branch is skipped to keep their classes unchanged.
  const stateKey = zoneStateKey({ ...zs, hvacMode: undefined });
  const stateClass = `pc-row-${stateKey}`;
  const tagText = stateKey === 'at-target' ? 'At target' : escapeHtml(zoneActionWord(zs));
  const stateTag = `<span class="pc-state-tag pc-tag-${stateKey}">${tagText}</span>`;

  const tempRaw = zs.currentTemp !== null ? formatTemperature(zs.currentTemp, zs.unit) : '--';
  const tempDisplay = zs.isUnavailable ? '' : escapeHtml(tempRaw);
  const targetDisplay = (!zs.isUnavailable && zs.targetTemp !== null)
    ? `<span class="pc-zone-target">→ ${escapeHtml(formatTemperature(zs.targetTemp, zs.unit))}</span>`
    : '';

  // Humidity inline with zone name: e.g. "💧 53% Dining"
  const humidityDisplay = (!zs.isUnavailable && zs.humidity !== null)
    ? ` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${formatPercent(zs.humidity)}</span>`
    : '';

  const ariaLabel = zs.isUnavailable
    ? `${zs.name}: Unavailable`
    : `${zs.name}: ${tempRaw}${zs.targetTemp !== null ? `, target ${formatTemperature(zs.targetTemp, zs.unit)}` : ''}${zs.humidity !== null ? `, ${formatPercent(zs.humidity)} humidity` : ''}, ${zoneActionWord(zs)}`;

  let powerBar = null;
  if (showPowerBar && !zs.isUnavailable) {
    const power = zs.heatingPower || zs.coolingPower || 0;
    const hvacVis = resolveHvacVisual(zs.hvacAction);
    if (isZoneDemanding({ power, hvacAction: zs.hvacAction })) {
      powerBar = {
        fillWidth: Math.min(100, Math.max(0, power)),
        activeClass: power > 0 ? ' pc-bar-active' : '',
        tierClass: hvacVis.tier ? ` pc-status-${hvacVis.tier}` : '',
      };
    }
  }

  let gauge = null;
  if (showTempBar && !zs.isUnavailable) {
    const currentPos = zs.currentTemp !== null ? tempToPosition(zs.currentTemp, zs.minTemp, zs.maxTemp) : 50;
    const targetPos = zs.targetTemp !== null ? tempToPosition(zs.targetTemp, zs.minTemp, zs.maxTemp) : null;
    const coldColor = temperatureToColor(zs.minTemp);
    const warmColor = temperatureToColor((zs.minTemp + zs.maxTemp) / 2);
    const hotColor = temperatureToColor(zs.maxTemp);
    gauge = {
      gradient: `linear-gradient(to right, ${sanitizeCssValue(coldColor)}, ${sanitizeCssValue(warmColor)}, ${sanitizeCssValue(hotColor)})`,
      currentPos: sanitizeCssValue(currentPos.toFixed(1)),
      targetPos: targetPos !== null ? sanitizeCssValue(targetPos.toFixed(1)) : null,
    };
  }

  return {
    stateClass,
    nameHtml: `${zs.icon && zs.icon !== 'mdi:thermometer' ? `<ha-icon icon="${escapeHtml(zs.icon)}"></ha-icon> ` : ''}${escapeHtml(zs.name)}${humidityDisplay}`,
    tempHtml: `${tempDisplay}${targetDisplay}${stateTag}`,
    ariaLabel,
    powerBar,
    gauge,
    chipsHtml: chipsHtml(zs),
  };
}

/**
 * Temperature gauge markup for a zone row view.
 * @param {NonNullable<ReturnType<typeof zoneRowView>['gauge']>} gauge - Gauge facts.
 * @returns {string} HTML string.
 */
function gaugeHtml(gauge) {
  return `<div class="pc-temp-gauge"><div class="pc-temp-gauge-bg" style="background:${gauge.gradient}"></div>`
    + `<div class="pc-temp-gauge-current" style="left:${gauge.currentPos}%"></div>`
    + (gauge.targetPos !== null ? `<div class="pc-temp-gauge-target" style="left:${gauge.targetPos}%"></div>` : '')
    + `</div>`;
}

/**
 * Chip container markup for a zone, empty when the zone has no chips.
 * @param {import('../types.js').ZoneState} zs - Resolved zone state.
 * @returns {string} HTML string.
 */
function chipsHtml(zs) {
  if (zs.chips.length === 0) return '';
  let html = `<div class="pc-zone-chips">`;
  for (const chip of zs.chips) {
    const sev = chip.severity ? String(chip.severity).toLowerCase() : '';
    const severityClass = VALID_SEVERITIES.has(sev) ? ` pc-severity-${sev}` : '';
    const tierClass = chip.tier ? ` pc-status-${chip.tier}` : '';
    const entityAttr = chip.entityId ? ` data-entity="${escapeHtml(chip.entityId)}"` : '';
    html += `<span class="pc-chip${severityClass}${tierClass}"${entityAttr} data-chip-type="${escapeHtml(chip.type)}">`;
    html += `<ha-icon icon="${escapeHtml(chip.icon)}"></ha-icon>`;
    html += `${escapeHtml(chip.label)}`;
    html += `</span>`;
  }
  return `${html}</div>`;
}

/**
 * Power bar markup for a zone row view.
 * @param {NonNullable<ReturnType<typeof zoneRowView>['powerBar']>} bar - Power bar facts.
 * @returns {string} HTML string.
 */
function powerBarHtml(bar) {
  return `<div class="pc-power-bar-container"><div class="pc-power-bar-track"></div>`
    + `<div class="pc-power-bar-fill${bar.activeClass}${bar.tierClass}" style="width:${sanitizeCssValue(bar.fillWidth.toFixed(1))}%"></div></div>`;
}

/**
 * Whether a fresh render gives this zone the pulse layout (pulse mode and available).
 * @param {import('../types.js').ZoneConfig} zoneConfig - Per-zone config.
 * @param {import('../types.js').ZoneState} zs - Resolved zone state.
 * @returns {boolean} True for the pulse layout.
 */
function expectsPulseLayout(zoneConfig, zs) {
  return /** @type {*} */ (zoneConfig.sparkline)?.mode === 'pulse' && !zs.isUnavailable;
}

/** @param {import('../types.js').ZoneConfig} zoneConfig @param {import('../types.js').ZoneState} zs @param {{t: number, v: number}[]} [series] @returns {boolean} True when a standard row shows the prominent sparkline. */
function expectsProminentSparkline(zoneConfig, zs, series) {
  return /** @type {*} */ (zoneConfig.sparkline)?.mode === 'prominent' && !zs.isUnavailable && !!series && buildFilledSparkline(series, 300, 40, 48) !== null;
}

/**
 * Render a single zone row HTML.
 * @param {import('../types.js').ZoneState} zs - Resolved zone state.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Per-zone config.
 * @param {import('../types.js').PulseClimateConfig} cardConfig - Card config.
 * @param {{t: number, v: number}[]} [sparklineData] - History data for sparkline.
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local sparkline tooltip times.
 * @returns {string} HTML string.
 */
function renderZoneRow(zs, zoneConfig, cardConfig, sparklineData, timeZone) {
  const unavailableClass = zs.isUnavailable ? ' pc-unavailable' : '';
  const view = zoneRowView(zs, zoneConfig, cardConfig);

  let html = `<div class="pc-zone-row${unavailableClass} ${view.stateClass}" tabindex="0" role="button"
    aria-label="${escapeHtml(view.ariaLabel)}" data-entity="${escapeHtml(zs.entityId)}">`;
  html += `<div class="pc-row-ribbon"></div>`;
  html += `<div class="pc-zone-header">`;
  html += `<span class="pc-zone-name">${view.nameHtml}</span>`;
  html += `<span class="pc-zone-temp">${view.tempHtml}</span>`;
  html += `</div>`;

  if (view.gauge) html += gaugeHtml(view.gauge);

  if (view.powerBar) html += powerBarHtml(view.powerBar);

  html += view.chipsHtml;

  // Pulse mode: completely different zone row layout: waveform as background
  if (expectsPulseLayout(zoneConfig, zs)) {
    return renderPulseZoneRow(zs, zoneConfig, sparklineData, timeZone);
  }

  if (expectsProminentSparkline(zoneConfig, zs, sparklineData)) {
    const lineColor = zoneConfig.color || resolveHvacVisual(zs.hvacAction).fallback;
    html += renderProminentSparkline(lineColor, /** @type {*} */ (sparklineData), zs.unit, zs.entityId, timeZone);
  }

  html += `</div>`;
  return html;
}


/**
 * Everything a pulse row shows, shared by the fresh render and the live update.
 * @param {import('../types.js').ZoneState} zs - Zone state.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Zone config.
 * @returns {{ariaLabel: string, isHeating: boolean, isActive: boolean, lineColor: string, statusText: string, tempText: string, targetText: string}}
 */
function pulseRowView(zs, zoneConfig) {
  const hvacVis = resolveHvacVisual(zs.hvacAction);
  const isHeating = zs.heatingPower > 0 || zs.hvacAction === 'heating';
  const isActive = isHeating || zs.hvacAction === 'cooling';

  // Idle: subtle white line. Active: HVAC color (orange for heating, blue for cooling).
  const lineColor = isActive
    ? (zoneConfig.color || hvacVis.fallback)
    : 'var(--pulse-text-secondary)';
  const statusText = zoneActivityLabel(zs, zs.heatingPower || zs.coolingPower || 0);
  const tempText = zs.currentTemp !== null ? formatTemperature(zs.currentTemp, zs.unit) : '--';
  const targetText = zs.targetTemp !== null ? `→ ${formatTemperature(zs.targetTemp, zs.unit)}` : '';

  return {
    ariaLabel: `${zs.name}: ${tempText}, ${statusText}`,
    isHeating,
    isActive,
    lineColor,
    statusText,
    tempText,
    targetText,
  };
}

/**
 * Background waveform SVG of a pulse row, empty when there is no usable series.
 * @param {ReturnType<typeof pulseRowView>} view - Pulse row view.
 * @param {import('../types.js').ZoneState} zs - Zone state.
 * @param {{t: number, v: number}[]} [sparklineData] - Sparkline data.
 * @returns {string} HTML string.
 */
function pulseBgHtml(view, zs, sparklineData) {
  if (!sparklineData || sparklineData.length < 2) return '';
  const result = buildFilledSparkline(sparklineData, 360, 56, 60);
  if (!result) return '';

  const { isActive } = view;
  const safeColor = sanitizeCssValue(view.lineColor);
  const entitySlug = escapeHtml(zs.entityId).replace(/\./g, '-');
  const gradId = `pulse-grad-${entitySlug}`;
  const filterId = `pulse-glow-${entitySlug}`;
  const glowClass = isActive ? ' pc-heating-glow' : '';

  // Active: vivid fill (0.55 top). Idle: subtle fill (0.2 top).
  const fillTopOpacity = isActive ? '0.55' : '0.2';
  const fillBottomOpacity = isActive ? '0.05' : '0.02';

  // Active: bold line. Idle: thin + dim.
  const strokeWidth = isActive ? '2' : '1.5';
  const strokeOpacity = isActive ? '1' : '0.5';

  let html = `<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">`;
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
  return html;
}

/**
 * Render a pulse-mode zone row:
 * waveform SVG as background, zone info overlaid on top.
 * @param {import('../types.js').ZoneState} zs - Zone state.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Zone config.
 * @param {{t: number, v: number}[]} [sparklineData] - Sparkline data.
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local tooltip times.
 * @returns {string} HTML string for the complete zone row.
 */
function renderPulseZoneRow(zs, zoneConfig, sparklineData, timeZone) {
  const view = pulseRowView(zs, zoneConfig);
  const safeColor = sanitizeCssValue(view.lineColor);
  const rowClass = `pc-zone-row pc-zone-row-pulse${view.isHeating ? ' pc-heating' : ''}`;

  const dataAttr = buildSparklineDataAttr(sparklineData || [], 24, zs.unit, timeZone);
  let html = `<div class="${rowClass}" tabindex="0" role="button"
    aria-label="${escapeHtml(view.ariaLabel)}" data-entity="${escapeHtml(zs.entityId)}" data-pulse-line="${escapeHtml(pulseLineKey(view))}"${dataAttr ? ` data-sparkline='${escapeHtml(dataAttr)}'` : ''}>`;

  html += pulseBgHtml(view, zs, sparklineData);

  html += `<div class="pc-pulse-info">`;
  html += `<div class="pc-pulse-info-left">`;
  html += `<div class="pc-zone-name">${zs.icon && zs.icon !== 'mdi:thermometer' ? `<ha-icon icon="${escapeHtml(zs.icon)}"></ha-icon> ` : ''}${escapeHtml(zs.name)}</div>`;
  html += `<div class="pc-pulse-status">`;
  html += `<span class="pc-status-dot" style="background:${safeColor}"></span>`;
  html += `${escapeHtml(view.statusText)}`;
  html += `</div>`;
  html += `</div>`;
  html += `<div class="pc-pulse-info-right">`;
  html += `<span class="pc-pulse-current">${escapeHtml(view.tempText)}</span>`;
  if (view.targetText) {
    html += `<span class="pc-zone-target">${escapeHtml(view.targetText)}</span>`;
  }
  html += `</div>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}

/**
 * Key naming the colour and activity the background SVG was drawn with.
 * @param {ReturnType<typeof pulseRowView>} view - Pulse row view.
 * @returns {string} Key stored on the row as data-pulse-line.
 */
function pulseLineKey(view) {
  return `${view.lineColor}|${view.isActive}`;
}

/**
 * Patch an existing pulse row so it matches a fresh render of the view.
 * @param {Element} row - The .pc-zone-row-pulse element (kept, never replaced).
 * @param {ReturnType<typeof pulseRowView>} view - Pulse row view for the new state.
 * @param {string|null} bgHtml - New background SVG markup, or null to leave the SVG alone.
 * @returns {void}
 */
function patchPulseRow(row, view, bgHtml) {
  row.setAttribute('aria-label', view.ariaLabel);
  row.classList.toggle('pc-heating', view.isHeating);

  const status = row.querySelector('.pc-pulse-status');
  const dot = status?.querySelector('.pc-status-dot');
  dot?.setAttribute('style', `background:${sanitizeCssValue(view.lineColor)}`);
  status?.replaceChildren(...(dot ? [dot] : []), view.statusText);

  const current = row.querySelector('.pc-pulse-current');
  if (current) current.textContent = view.tempText;

  const target = row.querySelector('.pc-zone-target');
  if (!view.targetText) {
    target?.remove();
  } else if (target) {
    target.textContent = view.targetText;
  } else if (current) {
    const el = document.createElement('span');
    el.className = 'pc-zone-target';
    el.textContent = view.targetText;
    current.after(el);
  }

  const key = pulseLineKey(view);
  if (bgHtml === null || row.getAttribute('data-pulse-line') === key) return;
  row.setAttribute('data-pulse-line', key);
  const svg = row.querySelector('svg.pc-pulse-bg');
  if (!bgHtml) {
    svg?.remove();
  } else if (svg) {
    // eslint-disable-next-line no-unsanitized/property -- pulseBgHtml emits only sanitized colours and numeric paths
    svg.outerHTML = bgHtml;
  } else {
    // eslint-disable-next-line no-unsanitized/method -- pulseBgHtml emits only sanitized colours and numeric paths
    row.insertAdjacentHTML('afterbegin', bgHtml);
  }
}


/**
 * Render a prominent (filled area) sparkline below the zone header.
 * @param {string} lineColor - CSS colour for the line and fill gradient.
 * @param {{t: number, v: number}[]} data - History data points.
 * @param {string} unit - Temperature unit (passed through to data attribute for tooltip).
 * @param {string} [entityId] - Entity ID, hashed for the gradient id to prevent
 *   colour bleeding between zones in the same shadow root.
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local tooltip times.
 * @returns {string} HTML string, empty when path build fails completely.
 */
function renderProminentSparkline(lineColor, data, unit, entityId, timeZone) {
  const result = buildFilledSparkline(data, 300, 40, 48);
  if (!result) return '';

  // Use entity ID hash for unique gradient ID: prevents color bleeding between zones
  const gradSuffix = entityId ? entityId.replace(/[^a-z0-9]/gi, '-') : String(Math.random()).slice(2, 8);
  const gradId = `prom-grad-${gradSuffix}`;
  const safeColor = sanitizeCssValue(lineColor);
  const dataAttr = buildSparklineDataAttr(data, 24, unit, timeZone);
  let html = `<div class="pc-sparkline-filled pc-sparkline-prominent"${dataAttr ? ` data-sparkline='${escapeHtml(dataAttr)}'` : ''}>`;
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
 * History series for a zone, keyed by its resolved temperature sensor with the climate entity as fallback.
 * @param {string} entityId - Climate entity ID.
 * @param {Record<string, *>} states - hass.states.
 * @param {*} zoneEntities - Discovered entities of the zone.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Zone config.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache.
 * @returns {{t: number, v: number}[]} Series, empty when none.
 */
function zoneSparklineSeries(entityId, states, zoneEntities, zoneConfig, historyCache) {
  const tempResolved = resolveHistoryTempSensor(entityId, states, zoneEntities, zoneConfig);
  return historyCache?.data?.[tempResolved.entityId] || historyCache?.data?.[entityId] || [];
}

// With the header badge shown, an auto per-zone preset chip would repeat it; an explicit chips list still wins.
/** @param {import('../types.js').ZoneConfig} zoneConfig @param {import('../types.js').PulseClimateConfig} config @param {Record<string, *>} states @param {import('../types.js').TadoDiscovery} discovery */
function zoneContextForRow(zoneConfig, config, states, discovery) {
  const ctx = resolveZoneContext(zoneConfig, discovery, states, config);
  const homeEntity = discovery?.hubEntities?.home_state;
  const showsHomeAwayBadge = !isUnavailableState(homeEntity ? states[homeEntity] : null);
  if (showsHomeAwayBadge && !(zoneConfig.chips || config.chips)) {
    ctx.zoneState.chips = ctx.zoneState.chips.filter((chip) => chip.type !== 'preset');
  }
  return ctx;
}

/**
 * Render the zones section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {import('../types.js').PulseClimateConfig} config - Card config.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache for sparklines.
 * @param {string} [timeZone] - IANA zone from resolveHassTimeZone; undefined → browser-local sparkline tooltip times.
 * @returns {string} HTML string.
 */
export function renderZonesSection(zones, config, states, discovery, historyCache, timeZone) {
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
  const showsHomeAwayBadge = !isUnavailableState(homeState);
  if (showsHomeAwayBadge) {
    const isHome = homeState.state === 'on';
    const homeIcon = isHome ? 'mdi:home' : 'mdi:home-export-outline';
    const homeLabel = isHome ? 'Home' : 'Away';
    const homeTierClass = isHome ? ' pc-status-green' : '';
    html += `<div class="pc-section-header pc-section-header-center">`;
    html += `<div class="pulse-section-label">Zones</div>`;
    html += `<span class="pc-chip${homeTierClass}" data-entity="${escapeHtml(homeEntity)}">`;
    html += `<ha-icon icon="${escapeHtml(homeIcon)}"></ha-icon>${escapeHtml(homeLabel)}</span>`;
    html += `</div>`;
  } else {
    html += `<div class="pulse-section-label">Zones</div>`;
  }

  for (const zoneConfig of zones) {
    const { entityId, zoneEntities, zoneState } = zoneContextForRow(zoneConfig, config, states, discovery);
    html += renderZoneRow(zoneState, zoneConfig, config, zoneSparklineSeries(entityId, states, zoneEntities, zoneConfig, historyCache), timeZone);
  }

  html += `</div>`;
  return html;
}

/**
 * Patch an existing standard zone row so it matches a fresh render of the view.
 * @param {Element} row - The .pc-zone-row element (kept, never replaced).
 * @param {ReturnType<typeof zoneRowView>} view - Row view for the new state.
 * @returns {boolean} True when the chips container was created, replaced or removed.
 */
function patchZoneRow(row, view) {
  row.classList.remove(...ROW_STATE_CLASSES);
  row.classList.add(view.stateClass);
  row.setAttribute('aria-label', view.ariaLabel);

  const nameEl = row.querySelector('.pc-zone-name');
  // eslint-disable-next-line no-unsanitized/property -- built by zoneRowView with escapeHtml
  if (nameEl) nameEl.innerHTML = view.nameHtml;
  const tempEl = row.querySelector('.pc-zone-temp');
  // eslint-disable-next-line no-unsanitized/property -- built by zoneRowView with escapeHtml + formatNumericDisplay
  if (tempEl) tempEl.innerHTML = view.tempHtml;

  // Gauge: created, removed or updated exactly as the fresh render would have it.
  const gaugeEl = row.querySelector('.pc-temp-gauge');
  if (!view.gauge) {
    gaugeEl?.remove();
  } else if (!gaugeEl) {
    // eslint-disable-next-line no-unsanitized/method -- gaugeHtml emits only sanitized numbers and colours
    row.querySelector('.pc-zone-header')?.insertAdjacentHTML('afterend', gaugeHtml(view.gauge));
  } else {
    const bg = /** @type {HTMLElement|null} */ (gaugeEl.querySelector('.pc-temp-gauge-bg'));
    if (bg) bg.style.background = view.gauge.gradient;
    const current = /** @type {HTMLElement|null} */ (gaugeEl.querySelector('.pc-temp-gauge-current'));
    if (current) current.style.left = `${view.gauge.currentPos}%`;
    const target = /** @type {HTMLElement|null} */ (gaugeEl.querySelector('.pc-temp-gauge-target'));
    if (view.gauge.targetPos === null) {
      target?.remove();
    } else if (target) {
      target.style.left = `${view.gauge.targetPos}%`;
    } else {
      // eslint-disable-next-line no-unsanitized/method -- fixed markup with a sanitized number
      (current || bg)?.insertAdjacentHTML('afterend', `<div class="pc-temp-gauge-target" style="left:${view.gauge.targetPos}%"></div>`);
    }
  }

  // Power bar.
  const container = row.querySelector('.pc-power-bar-container');
  if (!view.powerBar) {
    container?.remove();
  } else if (!container) {
    const anchor = row.querySelector('.pc-temp-gauge') || row.querySelector('.pc-zone-header');
    // eslint-disable-next-line no-unsanitized/method -- powerBarHtml emits only sanitized numbers and fixed class names
    anchor?.insertAdjacentHTML('afterend', powerBarHtml(view.powerBar));
  } else {
    const fillEl = /** @type {HTMLElement|null} */ (container.querySelector('.pc-power-bar-fill'));
    if (fillEl) {
      fillEl.style.width = `${view.powerBar.fillWidth.toFixed(1)}%`;
      for (const tier of HVAC_TIER_CLASSES) fillEl.classList.remove(`pc-status-${tier}`);
      fillEl.classList.toggle('pc-bar-active', view.powerBar.activeClass !== '');
      const tier = view.powerBar.tierClass.trim();
      if (tier) fillEl.classList.add(tier);
    }
  }

  // Chips: the container is replaced wholesale, so the caller must rebind chip taps.
  const chipsEl = row.querySelector('.pc-zone-chips');
  if (!view.chipsHtml) {
    chipsEl?.remove();
    return chipsEl !== null;
  }
  if (chipsEl) {
    // Compare chip content only: tap binding adds a ripple child, has-ripple and a cursor style that a fresh render lacks.
    const chipSig = (/** @type {Element} */ c) => [c.className.replace(/\bhas-ripple\b/, '').trim(), c.getAttribute('data-entity'), c.getAttribute('data-chip-type'), c.querySelector('ha-icon')?.getAttribute('icon'), c.textContent].join('|');
    const fresh = document.createElement('template');
    // eslint-disable-next-line no-unsanitized/property -- chipsHtml escapes every dynamic value
    fresh.innerHTML = view.chipsHtml;
    const freshChips = [...(fresh.content.firstElementChild?.children || [])];
    const liveChips = [...chipsEl.children];
    if (freshChips.length === liveChips.length && freshChips.every((c, i) => chipSig(c) === chipSig(liveChips[i]))) return false;
    // eslint-disable-next-line no-unsanitized/property -- chipsHtml escapes every dynamic value
    chipsEl.outerHTML = view.chipsHtml;
  } else {
    const anchor = row.querySelector('.pc-power-bar-container') || row.querySelector('.pc-temp-gauge') || row.querySelector('.pc-zone-header');
    // eslint-disable-next-line no-unsanitized/method -- chipsHtml escapes every dynamic value
    anchor?.insertAdjacentHTML('afterend', view.chipsHtml);
  }
  return true;
}

/**
 * Give the existing prominent sparkline the colour a fresh render would use, keeping its node and tooltip data.
 * @param {Element} row - Standard zone row.
 * @param {import('../types.js').ZoneConfig} zoneConfig - Per-zone config.
 * @param {import('../types.js').ZoneState} zs - Resolved zone state.
 * @param {{t: number, v: number}[]} series - History series.
 * @returns {void}
 */
function recolourProminentSparkline(row, zoneConfig, zs, series) {
  if (!expectsProminentSparkline(zoneConfig, zs, series)) return;
  const block = /** @type {Element} */ (row.querySelector('.pc-sparkline-prominent'));
  const color = sanitizeCssValue(zoneConfig.color || resolveHvacVisual(zs.hvacAction).fallback);
  for (const stop of block.querySelectorAll('stop')) stop.setAttribute('stop-color', color);
  block.querySelector('path[stroke]')?.setAttribute('stroke', color);
}

/**
 * Update zones section DOM differentially.
 * @param {HTMLElement} sectionEl - The .section-zones element.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {import('../types.js').PulseClimateConfig} config - Card config.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {Record<string, *>} prevStates - Previous states for change detection.
 * @param {import('../types.js').HistoryCache} [historyCache] - History cache that supplies a pulse row's background series.
 * @param {string} [timeZone] - IANA zone for the tooltip times of a row that is replaced by a fresh render.
 * @returns {boolean} True when a row was replaced or its chip container was created, replaced or removed (zone and chip taps need rebinding).
 */
export function updateZonesSection(sectionEl, zones, config, states, discovery, prevStates, historyCache, timeZone) {
  if (!sectionEl || !zones) return false;

  let chipsChanged = false;
  const zoneRows = sectionEl.querySelectorAll('.pc-zone-row');

  for (let i = 0; i < zones.length; i++) {
    const zoneConfig = zones[i];
    const entityId = zoneConfig.entity;

    const currentState = states[entityId];
    const prevState = prevStates[entityId];
    const boundChanged = zoneBoundEntityIds(zoneConfig, discovery).some((id) => states[id] !== prevStates[id]);
    if (currentState === prevState && !boundChanged && zoneRows[i]) continue;

    const { entityId: resolvedId, zoneEntities, zoneState } = zoneContextForRow(zoneConfig, config, states, discovery);
    const row = zoneRows[i];
    if (!row) continue;

    const series = zoneSparklineSeries(resolvedId, states, zoneEntities, zoneConfig, historyCache);
    const isPulseRow = row.classList.contains('pc-zone-row-pulse');
    const hasProminent = !!row.querySelector('.pc-sparkline-prominent');
    if (isPulseRow !== expectsPulseLayout(zoneConfig, zoneState) || hasProminent !== expectsProminentSparkline(zoneConfig, zoneState, series)) {
      // The layouts and the prominent block differ in DOM, so swap in a fresh row; the caller rebinds its taps.
      const fresh = document.createElement('template');
      // eslint-disable-next-line no-unsanitized/property -- renderZoneRow escapes every dynamic value
      fresh.innerHTML = renderZoneRow(zoneState, zoneConfig, config, series, timeZone);
      const freshRow = /** @type {Element} */ (fresh.content.firstElementChild);
      const cleanup = /** @type {*} */ (row).__pulseCleanup;
      if (typeof cleanup === 'function') cleanup();
      row.replaceWith(freshRow);
      chipsChanged = true;
      continue;
    }

    if (isPulseRow) {
      const view = pulseRowView(zoneState, zoneConfig);
      patchPulseRow(row, view, series.length >= 2 ? pulseBgHtml(view, zoneState, series) : null);
    } else {
      if (patchZoneRow(row, zoneRowView(zoneState, zoneConfig, config))) chipsChanged = true;
      recolourProminentSparkline(row, zoneConfig, zoneState, series);
    }

    if (zoneState.isUnavailable) {
      row.classList.add('pc-unavailable');
    } else {
      row.classList.remove('pc-unavailable');
    }
  }
  return chipsChanged;
}

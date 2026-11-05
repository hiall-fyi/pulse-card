/**
 * @module pulse-climate/sections/radial
 * @description Render a circular climate compass with temperature and/or
 * humidity arcs. Attribute config controls which rings are shown:
 * 'temperature' (default), 'humidity', or 'both'.
 * Pure renderer: no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue, isReducedMotion, isUnavailableState } from '../../shared/utils.js';
import { temperatureToColor, humidityToColor, buildBloomFilter } from '../chart-primitives.js';
import { formatOutdoorTemp } from '../outdoor-temp.js';
import { formatTemperature, formatPercent, resolveZoneContext, rowStateClass, computeGlowStdDev, computeShimmerScale, zoneActivityLabel, isZoneDemanding } from '../utils.js';

/** Humidity arc thickness in SVG units. */
const HUMIDITY_ARC_THICKNESS = 6;

/** Gap between temperature and humidity arcs when showing both. */
const DUAL_ARC_GAP = 2;

/**
 * Build an SVG arc path (annular sector).
 * @param {number} cx - Center X.
 * @param {number} cy - Center Y.
 * @param {number} outerR - Outer radius.
 * @param {number} innerR - Inner radius.
 * @param {number} startDeg - Start angle in degrees.
 * @param {number} endDeg - End angle in degrees.
 * @returns {string} SVG path d attribute.
 */
function arcPath(cx, cy, outerR, innerR, startDeg, endDeg) {
  const s = (startDeg * Math.PI) / 180;
  const e = (endDeg * Math.PI) / 180;
  const la = (endDeg - startDeg) > 180 ? 1 : 0;
  return `M${(cx + outerR * Math.cos(s)).toFixed(2)},${(cy + outerR * Math.sin(s)).toFixed(2)} ` +
    `A${outerR.toFixed(2)},${outerR.toFixed(2)} 0 ${la} 1 ${(cx + outerR * Math.cos(e)).toFixed(2)},${(cy + outerR * Math.sin(e)).toFixed(2)} ` +
    `L${(cx + innerR * Math.cos(e)).toFixed(2)},${(cy + innerR * Math.sin(e)).toFixed(2)} ` +
    `A${innerR.toFixed(2)},${innerR.toFixed(2)} 0 ${la} 0 ${(cx + innerR * Math.cos(s)).toFixed(2)},${(cy + innerR * Math.sin(s)).toFixed(2)} Z`;
}

/**
 * Unescaped centre text the Radial shows when no zone is selected.
 * @param {{attribute: string, outdoorTempText: string|null, outdoorHumidityText: string|null}} input
 * @returns {{center: string, centerSub: string}}
 */
export function radialCenterDefaults({ attribute, outdoorTempText, outdoorHumidityText }) {
  const hasHumidity = outdoorHumidityText !== null && outdoorHumidityText !== undefined;
  if (attribute === 'humidity') return { center: hasHumidity ? `${outdoorHumidityText}%` : '--', centerSub: '' };
  return { center: outdoorTempText ?? '--', centerSub: attribute === 'both' && hasHumidity ? `${outdoorHumidityText}%` : '' };
}

/**
 * Render Radial section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones
 * @param {Record<string, *>} sectionConfig
 * @param {Record<string, *>} states
 * @param {import('../types.js').TadoDiscovery} discovery
 * @param {import('../types.js').HistoryCache} [_historyCache]
 * @returns {string} HTML string.
 */
export function renderRadialSection(zones, sectionConfig, states, discovery, _historyCache) {
  if (!zones || zones.length === 0) return '';

  const reducedMotion = isReducedMotion();

  const size = Number(sectionConfig?.size) || 280;
  const attribute = sectionConfig?.attribute || 'temperature';
  const showTemp = attribute === 'temperature' || attribute === 'both';
  const showHumidity = attribute === 'humidity' || attribute === 'both';
  const cx = size / 2;
  const cy = size / 2;
  const baseOuterR = size * 120 / 280;
  const gapDeg = 1.5;
  const totalGap = gapDeg * zones.length;
  const available = 360 - totalGap;
  const arcAngle = available / zones.length;

  /** @type {{name: string, temp: number|null, target: number|null, power: number, hasPowerData: boolean, humidity: number|null, hvacAction: string, isUnavailable: boolean, entityId: string, unit: string, rowClass: string, shimmer: number}[]} */
  const zoneData = [];
  for (const zoneConfig of zones) {
    const { entityId, zoneState: zs } = resolveZoneContext(zoneConfig, discovery, states);
    const power = zs.heatingPower || zs.coolingPower || 0;
    zoneData.push({
      name: zs.name, temp: zs.currentTemp, target: zs.targetTemp,
      power, hasPowerData: zs.hasPowerData, humidity: zs.humidity,
      hvacAction: zs.hvacAction, isUnavailable: zs.isUnavailable, entityId, unit: zs.unit,
      rowClass: rowStateClass(zs),
      // Heat haze is a heating effect, so a cooling zone never gets it
      shimmer: zs.hvacAction === 'cooling' ? 0 : computeShimmerScale(power, size),
    });
  }

  const outsideTempEntityConfig = sectionConfig?.outdoor_temp_entity;
  const outsideTemp = formatOutdoorTemp(sectionConfig, discovery, states);

  const outsideHumEntityConfig = sectionConfig?.outdoor_humidity_entity;
  let outsideHumidity = null;
  if (outsideHumEntityConfig && states[outsideHumEntityConfig]) {
    const s = states[outsideHumEntityConfig];
    if (!isUnavailableState(s)) {
      outsideHumidity = s.attributes?.humidity !== undefined
        ? String(s.attributes.humidity) : s.state;
    }
  }

  const defaults = radialCenterDefaults({ attribute, outdoorTempText: outsideTemp, outdoorHumidityText: outsideHumidity });
  const centerValue = escapeHtml(defaults.center);
  const centerSub = escapeHtml(defaults.centerSub);

  /** @type {Record<string, string>} */
  const labelMap = { temperature: 'Home Thermal View', humidity: 'Home Humidity View', both: 'Home Climate View' };
  const sectionLabel = labelMap[attribute] || 'Home Thermal View';

  let html = `<div class="pc-section pc-section-radial" data-attribute="${escapeHtml(attribute)}"${outsideTempEntityConfig ? ` data-outdoor-temp-entity="${escapeHtml(outsideTempEntityConfig)}"` : ''}${outsideHumEntityConfig ? ` data-outdoor-humidity-entity="${escapeHtml(outsideHumEntityConfig)}"` : ''}>`;
  html += `<div class="pulse-section-label">${escapeHtml(sectionLabel)}</div>`;
  html += `<div class="pc-radial-container">`;

  // Per-render unique suffix prevents <defs> id collisions across multiple
  // card instances on the same dashboard. Without this, two cards on one
  // page share `id="radial-glow"` and url(#radial-glow) in the second card
  // resolves to the first card's filter (wrong stdDeviation if sizes differ).
  const instanceId = `r${Math.random().toString(36).slice(2, 9)}`;
  const glowId = `radial-glow-${instanceId}`;
  const shimmerId = (/** @type {number} */ i) => `heat-shimmer-${instanceId}-${i}`;

  html += `<svg class="pc-radial-svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="${escapeHtml(sectionLabel)}">`;
  html += `<defs>`;
  html += buildBloomFilter(glowId, computeGlowStdDev(size, 280).toFixed(1));

  // Heat shimmer filters: per-zone <filter> with <feTurbulence> + <feDisplacementMap>
  if (!reducedMotion) {
    for (let i = 0; i < zoneData.length; i++) {
      const z = zoneData[i];
      const shimmerScale = z.shimmer;
      if (shimmerScale <= 0) continue;

      // Scale baseFrequency proportionally to arc angular size (reference: 45° arc)
      const freqScale = 45 / Math.max(arcAngle, 10);
      const bfX = (0.02 * freqScale).toFixed(4);
      const bfY = (0.04 * freqScale).toFixed(4);

      html += `<filter id="${shimmerId(i)}" x="-5%" y="-5%" width="110%" height="110%">`;
      html += `<feTurbulence type="turbulence" baseFrequency="${bfX} ${bfY}" numOctaves="2" result="turb">`;
      html += `<animate attributeName="baseFrequency" values="${bfX} ${bfY};${(parseFloat(bfX) * 1.5).toFixed(4)} ${bfY};${bfX} ${bfY}" dur="4s" repeatCount="indefinite"/>`;
      html += `</feTurbulence>`;
      html += `<feDisplacementMap in="SourceGraphic" in2="turb" scale="${shimmerScale.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`;
      html += `</filter>`;
    }
  }

  html += `</defs>`;

  for (let i = 0; i < zoneData.length; i++) {
    const z = zoneData[i];
    const startAngle = i * (arcAngle + gapDeg) - 90;
    const endAngle = startAngle + arcAngle;
    const isActive = isZoneDemanding(z);
    const activeClass = isActive ? ' pc-arc-active' : '';

    const titleParts = [z.name];
    if (showTemp) titleParts.push(formatTemperature(z.temp, z.unit));
    if (showHumidity && z.humidity !== null) titleParts.push(formatPercent(z.humidity));
    titleParts.push(zoneActivityLabel(z, z.power));
    const titleText = escapeHtml(titleParts.join(', '));

    html += `<g class="pc-arc-group${activeClass}" data-idx="${i}">`;

    // Invisible hit area: wider than visible arcs for easier touch targeting
    const hitOuterR = showHumidity && attribute === 'both'
      ? baseOuterR + DUAL_ARC_GAP + HUMIDITY_ARC_THICKNESS + 4
      : baseOuterR + 4;
    const hitInnerR = baseOuterR - 28 - 4;
    const hitD = arcPath(cx, cy, hitOuterR, hitInnerR, startAngle - gapDeg / 2, endAngle + gapDeg / 2);
    html += `<path d="${hitD}" fill="transparent" class="pc-arc-hit"/>`;

    if (showTemp) {
      const tempColor = z.temp !== null ? temperatureToColor(z.temp) : 'var(--pulse-disabled)';
      const tempThickness = 8 + (z.power / 100) * 20;
      const tempInnerR = baseOuterR - tempThickness;
      const tempD = arcPath(cx, cy, baseOuterR, tempInnerR, startAngle, endAngle);

      html += `<path d="${tempD}" fill="${sanitizeCssValue(tempColor)}" class="pc-arc-path"`;
      // Shimmer takes precedence over glow for high-power zones
      const shimmerScale = z.shimmer;
      if (shimmerScale > 0 && !reducedMotion) {
        html += ` filter="url(#${shimmerId(i)})"`;
      } else if (isActive) {
        html += ` filter="url(#${glowId})"`;
      }
      html += `><title>${titleText}</title>`;
      if (isActive && !reducedMotion) {
        const dur = z.power > 0 ? (4.5 - (z.power / 100) * 3).toFixed(1) : '5.0';
        html += `<animate attributeName="opacity" values="1;0.82;1" dur="${dur}s" repeatCount="indefinite"/>`;
      }
      html += `</path>`;
    }

    if (showHumidity && z.humidity !== null) {
      const humColor = humidityToColor(z.humidity);
      let humOuterR, humInnerR;
      if (attribute === 'both') {
        // Side-by-side: humidity outside temperature
        humOuterR = baseOuterR + DUAL_ARC_GAP + HUMIDITY_ARC_THICKNESS;
        humInnerR = baseOuterR + DUAL_ARC_GAP;
      } else {
        // Humidity only: use same radius as temperature would
        const humThickness = 8 + (z.power / 100) * 20;
        humOuterR = baseOuterR;
        humInnerR = baseOuterR - humThickness;
      }
      const humD = arcPath(cx, cy, humOuterR, humInnerR, startAngle, endAngle);
      html += `<path d="${humD}" fill="${sanitizeCssValue(humColor)}" class="pc-arc-path" opacity="0.8">`;
      html += `<title>${titleText}</title>`;
      html += `</path>`;
    }

    html += `</g>`;
  }

  html += `</svg>`;

  // Center info: sized so glass touches the inner edge of the deepest arc.
  // Per-zone arc thickness = 8 + (power/100) × 20 (range 8-28px). Compute the
  // actual max across zones at render time so glass extends to the inner edge
  // of the thickest arc, not the worst-case 28px. Min 8px applies for showHumidity-only modes.
  let maxThickness = 8;
  if (showTemp) {
    for (const z of zoneData) {
      const t = 8 + (z.power / 100) * 20;
      if (t > maxThickness) maxThickness = t;
    }
  }
  const centerDiameter = Math.round((baseOuterR - maxThickness) * 2);
  html += `<div class="pc-center-info" id="radial-center" style="width:${centerDiameter}px;height:${centerDiameter}px">`;
  html += `<div class="pc-center-sheen" id="radial-sheen"></div>`;
  html += `<div class="pc-center-value">${centerValue}</div>`;
  html += `<div class="pc-center-label">Outdoor</div>`;
  html += `<div class="pc-center-sub">${centerSub}</div>`;
  html += `</div>`;
  html += `</div>`;

  html += `<div class="pc-zone-detail" id="radial-detail"></div>`;

  html += `<div class="pc-radial-legend">`;
  for (let i = 0; i < zoneData.length; i++) {
    const z = zoneData[i];
    const dotColor = attribute === 'humidity'
      ? (z.humidity !== null ? humidityToColor(z.humidity) : 'var(--pulse-disabled)')
      : (z.temp !== null ? temperatureToColor(z.temp) : 'var(--pulse-disabled)');
    let valueText = '';
    if (showTemp) valueText += formatTemperature(z.temp, z.unit);
    if (showTemp && showHumidity) valueText += ' · ';
    if (showHumidity) valueText += formatPercent(z.humidity);
    html += `<div class="pc-legend-item${z.rowClass}" data-idx="${i}">`;
    html += `<span class="pc-legend-dot" style="background:${sanitizeCssValue(dotColor)}"></span>`;
    html += `<span class="pc-legend-name">${escapeHtml(z.name)}</span> <span class="pc-legend-temp">${escapeHtml(valueText)}</span>`;
    html += `</div>`;
  }
  html += `</div>`;

  html += `</div>`;
  return html;
}

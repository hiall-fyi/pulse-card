/**
 * @module pulse-climate/sections/radial
 * @description Render a circular climate compass with temperature and/or
 * humidity arcs. Attribute config controls which rings are shown:
 * 'temperature' (default), 'humidity', or 'both'.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue, isReducedMotion } from '../../shared/utils.js';
import { temperatureToColor, humidityToColor } from '../chart-primitives.js';
import { resolveZoneState, computeGlowStdDev, computeShimmerScale } from '../utils.js';
import { extractZoneName } from '../zone-resolver.js';

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

  // Resolve zone data
  /** @type {{name: string, temp: number|null, target: number|null, power: number, humidity: number|null, hvacAction: string, entityId: string, unit: string}[]} */
  const zoneData = [];
  for (const zoneConfig of zones) {
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
    const zs = resolveZoneState(entityId, zoneEntities, states, zoneConfig, /** @type {*} */ ({}));
    zoneData.push({
      name: zs.name, temp: zs.currentTemp, target: zs.targetTemp,
      power: zs.heatingPower, humidity: zs.humidity,
      hvacAction: zs.hvacAction, entityId, unit: zs.unit,
    });
  }

  // Outside temperature
  const outsideTempEntityConfig = sectionConfig?.outdoor_temp_entity;
  const outsideTempEntity = outsideTempEntityConfig || discovery?.hubEntities?.outside_temp;
  let outsideTemp = null;
  if (outsideTempEntity && states[outsideTempEntity]) {
    const s = states[outsideTempEntity];
    if (s.state !== 'unavailable' && s.state !== 'unknown') {
      outsideTemp = s.attributes?.temperature !== undefined
        ? String(s.attributes.temperature) : s.state;
    }
  }
  const outsideUnit = outsideTempEntity ? (states[outsideTempEntity]?.attributes?.unit_of_measurement || '°C') : '°C';

  // Outside humidity
  const outsideHumEntityConfig = sectionConfig?.outdoor_humidity_entity;
  let outsideHumidity = null;
  if (outsideHumEntityConfig && states[outsideHumEntityConfig]) {
    const s = states[outsideHumEntityConfig];
    if (s.state !== 'unavailable' && s.state !== 'unknown') {
      outsideHumidity = s.attributes?.humidity !== undefined
        ? String(s.attributes.humidity) : s.state;
    }
  }

  // Center display — depends on attribute mode
  let centerSub = '';
  const centerValue = attribute === 'humidity'
    ? (outsideHumidity !== null ? `${escapeHtml(outsideHumidity)}%` : '--')
    : (outsideTemp !== null ? `${escapeHtml(outsideTemp)}${escapeHtml(outsideUnit)}` : '--');
  if (attribute !== 'humidity' && showHumidity && outsideHumidity !== null) {
    centerSub = `${escapeHtml(outsideHumidity)}%`;
  }

  // Section label
  /** @type {Record<string, string>} */
  const labelMap = { temperature: 'Home Thermal View', humidity: 'Home Humidity View', both: 'Home Climate View' };
  const sectionLabel = labelMap[attribute] || 'Home Thermal View';

  let html = `<div class="section section-radial" data-attribute="${escapeHtml(attribute)}"${outsideTempEntityConfig ? ` data-outdoor-temp-entity="${escapeHtml(outsideTempEntityConfig)}"` : ''}${outsideHumEntityConfig ? ` data-outdoor-humidity-entity="${escapeHtml(outsideHumEntityConfig)}"` : ''}>`;
  html += `<div class="section-label">${escapeHtml(sectionLabel)}</div>`;
  html += `<div class="radial-container">`;

  html += `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="${escapeHtml(sectionLabel)}" style="display:block;margin:0 auto">`;
  html += `<defs>`;
  html += `<filter id="radial-glow"><feGaussianBlur stdDeviation="${computeGlowStdDev(size, 280).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;

  // Heat shimmer filters — per-zone <filter> with <feTurbulence> + <feDisplacementMap>
  if (!reducedMotion) {
    for (let i = 0; i < zoneData.length; i++) {
      const z = zoneData[i];
      const shimmerScale = computeShimmerScale(z.power, size);
      if (shimmerScale <= 0) continue;

      // Scale baseFrequency proportionally to arc angular size (reference: 45° arc)
      const freqScale = 45 / Math.max(arcAngle, 10);
      const bfX = (0.02 * freqScale).toFixed(4);
      const bfY = (0.04 * freqScale).toFixed(4);

      html += `<filter id="heat-shimmer-${i}" x="-5%" y="-5%" width="110%" height="110%">`;
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
    const isActive = z.power > 0 || z.hvacAction === 'heating' || z.hvacAction === 'cooling';
    const activeClass = isActive ? ' arc-active' : '';

    // Build title text
    const titleParts = [escapeHtml(z.name)];
    if (showTemp) titleParts.push(z.temp !== null ? `${z.temp}${z.unit}` : '--');
    if (showHumidity && z.humidity !== null) titleParts.push(`${Math.round(z.humidity)}%`);
    titleParts.push(isActive ? `${z.hvacAction === 'cooling' ? 'Cooling' : 'Heating'} ${z.power}%` : 'Idle');
    const titleText = titleParts.join(', ');

    html += `<g class="arc-group${activeClass}" data-idx="${i}">`;

    // Invisible hit area — wider than visible arcs for easier touch targeting
    const hitOuterR = showHumidity && attribute === 'both'
      ? baseOuterR + DUAL_ARC_GAP + HUMIDITY_ARC_THICKNESS + 4
      : baseOuterR + 4;
    const hitInnerR = baseOuterR - 28 - 4;
    const hitD = arcPath(cx, cy, hitOuterR, hitInnerR, startAngle - gapDeg / 2, endAngle + gapDeg / 2);
    html += `<path d="${hitD}" fill="transparent" class="arc-hit"/>`;

    // Temperature arc
    if (showTemp) {
      const tempColor = z.temp !== null ? temperatureToColor(z.temp) : 'var(--disabled-color, #9E9E9E)';
      const tempThickness = 8 + (z.power / 100) * 20;
      const tempInnerR = baseOuterR - tempThickness;
      const tempD = arcPath(cx, cy, baseOuterR, tempInnerR, startAngle, endAngle);

      html += `<path d="${tempD}" fill="${sanitizeCssValue(tempColor)}" class="arc-path"`;
      // Shimmer takes precedence over glow for high-power zones
      const shimmerScale = computeShimmerScale(z.power, size);
      if (shimmerScale > 0 && !reducedMotion) {
        html += ` filter="url(#heat-shimmer-${i})"`;
      } else if (isActive) {
        html += ` filter="url(#radial-glow)"`;
      }
      html += `><title>${titleText}</title>`;
      if (isActive && !reducedMotion) {
        const dur = z.power > 0 ? (4.5 - (z.power / 100) * 3).toFixed(1) : '5.0';
        html += `<animate attributeName="opacity" values="1;0.82;1" dur="${dur}s" repeatCount="indefinite"/>`;
      }
      html += `</path>`;
    }

    // Humidity arc
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
      html += `<path d="${humD}" fill="${sanitizeCssValue(humColor)}" class="arc-path" opacity="0.8">`;
      html += `<title>${titleText}</title>`;
      html += `</path>`;
    }

    html += `</g>`;
  }

  html += `</svg>`;

  // Center info — fixed circular size based on inner arc radius
  // Smallest inner radius = baseOuterR - 28 (at max power). Leave 8px gap.
  const centerDiameter = Math.round((baseOuterR - 28 - 8) * 2);
  html += `<div class="center-info" id="radial-center" style="width:${centerDiameter}px;height:${centerDiameter}px">`;
  html += `<div class="center-sheen" id="radial-sheen"></div>`;
  html += `<div class="center-value">${centerValue}</div>`;
  html += `<div class="center-label">Outdoor</div>`;
  html += `<div class="center-sub">${centerSub}</div>`;
  html += `</div>`;
  html += `</div>`;

  // Detail panel placeholder
  html += `<div class="zone-detail" id="radial-detail"></div>`;

  // Legend
  html += `<div class="radial-legend">`;
  for (let i = 0; i < zoneData.length; i++) {
    const z = zoneData[i];
    const dotColor = attribute === 'humidity'
      ? (z.humidity !== null ? humidityToColor(z.humidity) : 'var(--disabled-color, #9E9E9E)')
      : (z.temp !== null ? temperatureToColor(z.temp) : 'var(--disabled-color, #9E9E9E)');
    let valueText = '';
    if (showTemp) valueText += z.temp !== null ? `${z.temp}${z.unit}` : '--';
    if (showTemp && showHumidity) valueText += ' · ';
    if (showHumidity) valueText += z.humidity !== null ? `${Math.round(z.humidity)}%` : '--';
    html += `<div class="legend-item" data-idx="${i}">`;
    html += `<span class="legend-dot" style="background:${sanitizeCssValue(dotColor)}"></span>`;
    html += `${escapeHtml(z.name)} <span class="legend-temp">${escapeHtml(valueText)}</span>`;
    html += `</div>`;
  }
  html += `</div>`;

  html += `</div>`;
  return html;
}

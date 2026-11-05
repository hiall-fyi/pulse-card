/**
 * @module pulse-climate/sections/energy-flow
 * @description Render Sankey-style ribbons from boiler source to zone
 * destinations. Ribbon width ∝ heating power, 3-stop horizontal gradient,
 * pulse animation for active ribbons.
 * Pure renderer: no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue, isReducedMotion } from '../../shared/utils.js';
import { HVAC_VISUALS } from '../constants.js';
import { formatTemperature, averageZonePower, resolveZoneContext, zoneActivityLabel, isZoneDemanding, computeGlowStdDev, computeParticleCount, computeParticleDuration, computeParticleRadius } from '../utils.js';
import { buildBloomFilter } from '../chart-primitives.js';

/**
 * Build a cubic Bézier ribbon path.
 * @param {number} sourceY - Source center Y.
 * @param {number} destY - Destination center Y.
 * @param {number} sourceHalfW - Half-width at source.
 * @param {number} destHalfW - Half-width at destination.
 * @param {number} svgWidth - Total SVG width.
 * @param {number} sourceX - Source X position.
 * @param {number} destX - Destination X position.
 * @returns {string} SVG path d attribute.
 */
function buildRibbonPath(sourceY, destY, sourceHalfW, destHalfW, svgWidth, sourceX, destX) {
  const cp1x = sourceX + (destX - sourceX) * 0.35;
  const cp2x = sourceX + (destX - sourceX) * 0.65;
  const topY1 = sourceY - sourceHalfW;
  const topY2 = destY - destHalfW;
  const botY1 = sourceY + sourceHalfW;
  const botY2 = destY + destHalfW;

  let d = `M${sourceX},${topY1.toFixed(1)}`;
  d += ` C${cp1x.toFixed(1)},${topY1.toFixed(1)} ${cp2x.toFixed(1)},${topY2.toFixed(1)} ${destX},${topY2.toFixed(1)}`;
  d += ` L${destX},${botY2.toFixed(1)}`;
  d += ` C${cp2x.toFixed(1)},${botY2.toFixed(1)} ${cp1x.toFixed(1)},${botY1.toFixed(1)} ${sourceX},${botY1.toFixed(1)}`;
  d += ' Z';
  return d;
}

/**
 * Build the center-line cubic Bézier path for particle motion.
 * @param {number} sourceY - Source center Y.
 * @param {number} destY - Destination center Y.
 * @param {number} sourceX - Source X.
 * @param {number} destX - Destination X.
 * @returns {string} SVG path d for animateMotion.
 */
function buildRibbonCenterPath(sourceY, destY, sourceX, destX) {
  const cp1x = sourceX + (destX - sourceX) * 0.35;
  const cp2x = sourceX + (destX - sourceX) * 0.65;
  return `M${sourceX},${sourceY.toFixed(1)} C${cp1x.toFixed(1)},${sourceY.toFixed(1)} ${cp2x.toFixed(1)},${destY.toFixed(1)} ${destX},${destY.toFixed(1)}`;
}

/** Downward cubic Bézier center line from the AC vent to a zone label. @param {number} startX @param {number} startY @param {number} endX @param {number} endY @returns {string} */
function buildVerticalRibbonPath(startX, startY, endX, endY) {
  const dy = endY - startY;
  return `M${startX.toFixed(1)},${startY.toFixed(1)} C${startX.toFixed(1)},${(startY + dy * 0.55).toFixed(1)} ${endX.toFixed(1)},${(startY + dy * 0.4).toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`;
}

const HEATING_TINT = { fill: 'rgba(255, 152, 0, 0.15)', stroke: 'rgba(255, 152, 0, 0.25)' };

const VERT_SVG_W = 360;
const VERT_PER_ROW_MAX = 4;
const BOILER_HUB_MIN_ZONES = 5;
const HUB_SVG_W = 400;
const HUB_RX = 162;
const HUB_RY = 145;
const HUB_UNIT_TOP = 14;
const HUB_TOP_LABEL_Y = 60;
const HUB_BELOW = 28;
const HUB_FIRST_DEG = 66;
// Where the first label sits for the counts whose labels would otherwise land just below the boiler but off to the side.
const HUB_FIRST_DEG_BY_COUNT = /** @type {Record<number, number>} */ ({ 5: 58, 6: 78 });
const HUB_SPOKE_HALF_W = 36;
const HUB_SPOKE_HALF_H = 22;
const HUB_SPOKE_GAP = 6;
const HUB_START_GAP = 2;
const HUB_CURVE_PULL = 0.45;
const VERT_UNIT_W = 150;
const VERT_UNIT_H = 34;
const VERT_UNIT_Y = 8;
const VERT_FIRST_NAME_Y = 118;
const VERT_ROW_PITCH = 74;
const VERT_LABEL_BELOW = 56;
const VERT_RIBBON_END_GAP = 14;
const VERT_RIBBON_MIN_W = 2;
const VERT_RIBBON_MAX_W = 16;
const VERT_RIBBON_NODATA_W = 9;
const VERT_NODATA_DOTS = 3;
const VERT_VENT_GAP = 2;
const VERT_IDLE_FILL = 'color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)';
const VERT_IDLE_STROKE = 'color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)';

/** @typedef {{layout: 'auto'|'vertical', vent: boolean, label: string, source: string, aria: string, empty: string, titleSuffix: string, prefix: string, dataVariant: string, power: (zs: *) => number, hasPower: (zs: *) => boolean, color: (isCooling: boolean) => string, tint: (isCooling: boolean) => {fill: string, stroke: string}, hasData: (zs: *, zoneEntities: *, state: *) => *}} FlowVariant */

/** @type {Record<string, FlowVariant>} Wording, power field, colour and SVG id prefix per flow variant. */
const FLOW_VARIANTS = {
  heating: {
    layout: 'auto',
    vent: false,
    label: 'Energy Flow',
    source: 'Boiler',
    aria: 'Energy flow from boiler to zones',
    empty: 'No heating data',
    titleSuffix: 'heating power',
    prefix: 'flow',
    dataVariant: '',
    power: (zs) => zs.heatingPower,
    hasPower: (zs) => zs.hasHeatingPowerData,
    color: () => HVAC_VISUALS.heating.fallback,
    tint: () => HEATING_TINT,
    hasData: (zs, zoneEntities, state) => zs.hasHeatingPowerData || zs.heatingPower > 0 || zoneEntities.heating_power || state?.attributes?.heating_power !== undefined,
  },
  ac: {
    layout: 'vertical',
    vent: true,
    label: 'AC Flow',
    source: 'AC',
    aria: 'Energy flow from AC units to zones',
    empty: 'No AC data',
    titleSuffix: 'AC power',
    prefix: 'flow-ac',
    dataVariant: ' data-variant="ac"',
    power: (zs) => zs.coolingPower,
    hasPower: (zs) => zs.hasAcPowerData,
    color: (isCooling) => (isCooling ?HVAC_VISUALS.cooling.fallback : HVAC_VISUALS.heating.fallback),
    tint: (isCooling) => (isCooling
      ? { fill: `color-mix(in srgb, ${HVAC_VISUALS.cooling.fallback} 15%, transparent)`, stroke: `color-mix(in srgb, ${HVAC_VISUALS.cooling.fallback} 25%, transparent)` }
      : HEATING_TINT),
    hasData: (zs) => !zs.isUnavailable,
  },
};

// Render and update share this so the layout cannot drift between them.
/** @param {FlowVariant} v @param {number} count @returns {'horizontal'|'vertical'|'radial'} */
function flowLayout(v, count) {
  if (v.layout === 'vertical') return 'vertical';
  return count >= BOILER_HUB_MIN_ZONES ? 'radial' : 'horizontal';
}

// Render and update share this so the hover text cannot drift between them.
/** @param {{name: string, power: number, hasPowerData: boolean}} zone @param {FlowVariant} v @returns {string} */
function ribbonTitleText(zone, v) {
  return zone.hasPowerData
    ? `${zone.name}: ${Math.round(zone.power)}% ${v.titleSuffix}`
    : `${zone.name}: no power data`;
}

/** @typedef {{name: string, entityId: string, power: number, hasPowerData: boolean, temp: number|null, unit: string, hvacAction: string, isUnavailable: boolean}} FlowZone */

/** @param {FlowZone} zone @param {number} i @param {string} role @returns {string} */
const zoneTextAttrs = (zone, i, role) => `class="pc-flow-zone-text" data-role="${role}" data-zone-idx="${i}" data-entity="${escapeHtml(zone.entityId)}"`;

// Dots follow power when known; an active zone with no power data gets a fixed few.
/** @param {FlowZone} z @returns {boolean} */
const zoneNeedsDots = (z) => z.power > 0 || (isZoneDemanding(z) && !z.hasPowerData);

// Dot count, loop time and radius of one zone's particle group; the key lets the update spot a stale group.
/** @param {number} power @param {number} ribbonW @param {number} maxRibbonW @param {number} groupCount @returns {{count: number, dur: number, r: number, key: string}} */
function particleSpec(power, ribbonW, maxRibbonW, groupCount) {
  const count = power > 0 ? computeParticleCount(power, 20, groupCount) : VERT_NODATA_DOTS;
  // Half-second and half-unit steps keep a 1% power change from redrawing the dots.
  const dur = Math.round(computeParticleDuration(power > 0 ? power : 0) * 2) / 2;
  const r = Math.round(computeParticleRadius(ribbonW, maxRibbonW) * 2) / 2;
  return { count, dur, r, key: `${count}|${dur.toFixed(1)}|${r.toFixed(1)}` };
}

const HORIZ_RIBBON_MIN_W = 2;
const HORIZ_RIBBON_MAX_W = 22;

/** @param {FlowZone} z @returns {number} */
function horizontalRibbonWidth(z) {
  if (z.power > 0) return HORIZ_RIBBON_MIN_W + (z.power / 100) * (HORIZ_RIBBON_MAX_W - HORIZ_RIBBON_MIN_W);
  return isZoneDemanding(z) && !z.hasPowerData ? HORIZ_RIBBON_MIN_W + (HORIZ_RIBBON_MAX_W - HORIZ_RIBBON_MIN_W) / 2 : HORIZ_RIBBON_MIN_W;
}

/** @param {FlowZone} z @returns {number} */
function verticalRibbonWidth(z) {
  if (z.power > 0) return VERT_RIBBON_MIN_W + (z.power / 100) * (VERT_RIBBON_MAX_W - VERT_RIBBON_MIN_W);
  return isZoneDemanding(z) && !z.hasPowerData ? VERT_RIBBON_NODATA_W : VERT_RIBBON_MIN_W;
}

/** @param {FlowZone} z @returns {string} */
const verticalSubText = (z) => zoneActivityLabel(z, z.power);

/** @param {FlowZone} z @returns {string} */
const verticalTempText = (z) => formatTemperature(z.temp, z.unit);

/** @param {number} count @returns {{svgW: number, zoneSpacing: number, startY: number, svgH: number, boilerH: number, boilerW: number, sourceX: number, destX: number, sourceY: number, fanSpacing: number}} */
function horizontalGeometry(count) {
  const svgW = 360;
  const zoneSpacing = 46;
  const startY = 15;
  const svgH = Math.max(80, count * zoneSpacing + 30);
  const contentH = count * zoneSpacing;
  const boilerH = Math.max(40, Math.min(contentH * 0.7, contentH - 16));
  const boilerW = Math.max(36, boilerH * 0.6);
  const sourceX = Math.max(50, boilerW / 2 + 14);
  const destX = svgW - 76;
  const sourceY = svgH / 2;
  const fanSpacing = boilerH / Math.max(count, 1) * 0.7;
  return { svgW, zoneSpacing, startY, svgH, boilerH, boilerW, sourceX, destX, sourceY, fanSpacing };
}

/** @param {number} i @param {number} count @returns {{x: number, nameY: number, startX: number, startY: number, endY: number, d: string}} */
function verticalZoneGeometry(i, count) {
  const perRow = Math.min(count, VERT_PER_ROW_MAX);
  const colW = VERT_SVG_W / perRow;
  const row = Math.floor(i / perRow);
  const inRow = Math.min(perRow, count - row * perRow);
  const x = (perRow - inRow) * colW / 2 + (i % perRow) * colW + colW / 2;
  const nameY = VERT_FIRST_NAME_Y + row * VERT_ROW_PITCH;
  const ventX = VERT_SVG_W / 2;
  const startX = ventX + ((x - ventX) / VERT_SVG_W) * 26 * 0.5;
  const startY = VERT_UNIT_Y + VERT_UNIT_H + VERT_VENT_GAP;
  const endY = nameY - VERT_RIBBON_END_GAP;
  return { x, nameY, startX, startY, endY, d: buildVerticalRibbonPath(startX, startY, x, endY) };
}

/** @param {number} count @returns {number} */
const verticalSvgHeight = (count) => VERT_FIRST_NAME_Y + (Math.ceil(count / Math.min(count, VERT_PER_ROW_MAX)) - 1) * VERT_ROW_PITCH + VERT_LABEL_BELOW;

/** @typedef {{x: number, nameY: number, startX: number, startY: number, endX: number, endY: number, d: string, gradient: {x1: number, y1: number, x2: number, y2: number}}} HubGeometry */

const round1 = (/** @type {number} */ n) => Math.round(n * 10) / 10;

// The boiler keeps the 4-zone side-by-side size; the open gap at the top puts the first label at HUB_FIRST_DEG, and the arc centre puts it at HUB_TOP_LABEL_Y.
/** @param {number} count @returns {{gap: number, arcY: number, boilerW: number, boilerH: number, cy: number}} */
function radialFrame(count) {
  const { boilerW, boilerH } = horizontalGeometry(4);
  const first = HUB_FIRST_DEG_BY_COUNT[count] ?? HUB_FIRST_DEG;
  const gap = (first * count - 180) / (count - 1);
  return { gap, arcY: HUB_TOP_LABEL_Y + HUB_RY * Math.cos((first * Math.PI) / 180), boilerW, boilerH, cy: HUB_UNIT_TOP + boilerH / 2 };
}

/** @param {{x: number, y: number}} start @param {{x: number, y: number}} end @param {'left'|'right'|'top'|'bottom'} face @returns {string} */
function buildHubRibbonPath(start, end, face) {
  const pull = HUB_CURVE_PULL * Math.hypot(end.x - start.x, end.y - start.y);
  const dx = face === 'left' ? -1 : face === 'right' ? 1 : 0;
  const dy = face === 'top' ? -1 : face === 'bottom' ? 1 : 0;
  const p = (/** @type {number} */ n) => n.toFixed(1);
  // Leaves the face along its outward normal and arrives along that same axis.
  return `M${p(start.x)} ${p(start.y)} C${p(start.x + dx * pull)} ${p(start.y + dy * pull)} ${p(end.x - dx * pull)} ${p(end.y - dy * pull)} ${p(end.x)} ${p(end.y)}`;
}

/** @param {number} count @returns {number} */
const radialSvgHeight = (count) => radialFrame(count).arcY + HUB_RY + HUB_BELOW;

// Labels sit on an arc open at the top, evenly spread clockwise; each flow curves from the boiler border to just short of its label box.
/** @param {number} i @param {number} count @returns {HubGeometry} */
function radialZoneGeometry(i, count) {
  const { gap, arcY, boilerW, boilerH, cy } = radialFrame(count);
  const theta = ((gap + ((360 - 2 * gap) * (i + 0.5)) / count) * Math.PI) / 180;
  const x = round1(HUB_SVG_W / 2 + HUB_RX * Math.sin(theta));
  const ly = round1(arcY - HUB_RY * Math.cos(theta));
  const dx = x - HUB_SVG_W / 2;
  const dy = ly - cy;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const edge = Math.min(ux === 0 ? Infinity : HUB_SPOKE_HALF_W / Math.abs(ux), uy === 0 ? Infinity : HUB_SPOKE_HALF_H / Math.abs(uy));
  const back = edge + HUB_SPOKE_GAP;
  const sideT = ux === 0 ? Infinity : boilerW / 2 / Math.abs(ux);
  const capT = uy === 0 ? Infinity : boilerH / 2 / Math.abs(uy);
  const exit = Math.min(sideT, capT) + HUB_START_GAP;
  const face = sideT <= capT ? (ux < 0 ? 'left' : 'right') : (uy < 0 ? 'top' : 'bottom');
  const startX = round1(HUB_SVG_W / 2 + ux * exit);
  const startY = round1(cy + uy * exit);
  const endX = round1(x - ux * back);
  const endY = round1(ly - uy * back);
  return { x, nameY: round1(ly - 8), startX, startY, endX, endY, d: buildHubRibbonPath({ x: startX, y: startY }, { x: endX, y: endY }, face), gradient: { x1: startX, y1: startY, x2: endX, y2: endY } };
}

/** @param {number} count @returns {{x: number, y: number, w: number, h: number, rx: number, labelX: number, labelY: number}} */
function radialUnit(count) {
  const { boilerW, boilerH, cy } = radialFrame(count);
  return { x: (HUB_SVG_W - boilerW) / 2, y: HUB_UNIT_TOP, w: boilerW, h: boilerH, rx: 8, labelX: HUB_SVG_W / 2, labelY: cy + 4 };
}

/** @param {'vertical'|'radial'} layout @param {number} i @param {number} count @returns {HubGeometry} */
function hubGeometry(layout, i, count) {
  if (layout === 'radial') return radialZoneGeometry(i, count);
  const g = verticalZoneGeometry(i, count);
  return { ...g, endX: g.x, gradient: { x1: 0, y1: g.startY, x2: 0, y2: g.endY } };
}

/** @param {'vertical'|'radial'} layout @param {number} count @returns {number} */
const hubSvgHeight = (layout, count) => (layout === 'radial' ? radialSvgHeight(count) : verticalSvgHeight(count));

/** @param {'vertical'|'radial'} layout @returns {number} */
const hubSvgWidth = (layout) => (layout === 'radial' ? HUB_SVG_W : VERT_SVG_W);

/** @param {'vertical'|'radial'} layout @param {number} count @returns {{x: number, y: number, w: number, h: number, rx: number, labelX: number, labelY: number}} */
function hubUnit(layout, count) {
  if (layout === 'radial') return radialUnit(count);
  return { x: (VERT_SVG_W - VERT_UNIT_W) / 2, y: VERT_UNIT_Y, w: VERT_UNIT_W, h: VERT_UNIT_H, rx: 10, labelX: VERT_SVG_W / 2, labelY: VERT_UNIT_Y + 17 };
}

/** @param {FlowZone[]} zoneData @param {FlowVariant} v @returns {{fill: string, stroke: string}} */
function verticalUnitColors(zoneData, v) {
  if (!zoneData.some(isZoneDemanding)) return { fill: VERT_IDLE_FILL, stroke: VERT_IDLE_STROKE };
  const color = v.color(zoneData.some((z) => z.hvacAction === 'cooling'));
  return { fill: v.tint(zoneData.some((z) => z.hvacAction === 'cooling')).fill, stroke: color };
}

/** Unit-and-labels diagram SVG: AC unit on top with ribbons down, or the boiler hub at the top with curved flows out. @param {FlowZone[]} zoneData @param {FlowVariant} v @param {boolean} reducedMotion @param {'vertical'|'radial'} layout @returns {string} */
function renderVerticalDiagram(zoneData, v, reducedMotion, layout) {
  const count = zoneData.length;
  const svgH = hubSvgHeight(layout, count);
  const svgW = hubSvgWidth(layout);
  const idleColor = 'var(--pulse-disabled)';
  const dotted = zoneData.filter(zoneNeedsDots).length;
  const unit = verticalUnitColors(zoneData, v);
  const hu = hubUnit(layout, count);
  const unitX = hu.x;

  let html = `<svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="${v.aria}" style="width:100%;height:${sanitizeCssValue(svgH)}px;display:block">`;
  html += `<defs>`;
  // User-space filter region: a straight vertical ribbon has a zero-width bounding box
  html += buildBloomFilter(`${v.prefix}-glow`, computeGlowStdDev(svgW, 360).toFixed(1))
    .replace('<filter ', `<filter filterUnits="userSpaceOnUse" x="0" y="0" width="${svgW}" height="${svgH}" `);
  for (let i = 0; i < count; i++) {
    const zone = zoneData[i];
    const active = isZoneDemanding(zone);
    const color = active ? v.color(zone.hvacAction === 'cooling') : idleColor;
    const { gradient: g } = hubGeometry(layout, i, count);
    html += `<linearGradient id="${v.prefix}-g${i}" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}">`;
    if (active) {
      const dur = zone.power > 0 ? (4.5 - (zone.power / 100) * 3.3).toFixed(1) : '5.0';
      html += `<stop offset="0%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.3"/>`;
      html += `<stop offset="50%" stop-color="${sanitizeCssValue(color)}" stop-opacity="1.0"/>`;
      html += `<stop offset="100%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.3"/>`;
      if (!reducedMotion) {
        const hx = (g.x2 - g.x1) / 2;
        const hy = (g.y2 - g.y1) / 2;
        for (const [attr, base, shift] of /** @type {[string, number, number][]} */ ([['x1', g.x1, hx], ['y1', g.y1, hy], ['x2', g.x2, hx], ['y2', g.y2, hy]])) {
          if (shift !== 0) html += `<animate attributeName="${attr}" from="${Math.round((base - shift) * 100) / 100}" to="${Math.round((base + shift) * 100) / 100}" dur="${dur}s" repeatCount="indefinite"/>`;
        }
      }
    } else {
      html += `<stop offset="0%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.15"/>`;
      html += `<stop offset="50%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.25"/>`;
      html += `<stop offset="100%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.1"/>`;
    }
    html += `</linearGradient>`;
  }
  html += `</defs>`;

  for (let i = 0; i < count; i++) {
    const zone = zoneData[i];
    const active = isZoneDemanding(zone);
    const { d } = hubGeometry(layout, i, count);
    const w = verticalRibbonWidth(zone);
    const zoneColor = v.color(zone.hvacAction === 'cooling');
    html += `<path d="${d}" fill="none" stroke="url(#${v.prefix}-g${i})" stroke-width="${w.toFixed(1)}" stroke-linecap="round"${active ? ' class="pc-ribbon-active"' : ''}${active ? ` filter="url(#${v.prefix}-glow)"` : ''} data-zone="${escapeHtml(zone.name)}" data-zone-idx="${i}">`;
    html += `<title>${escapeHtml(ribbonTitleText(zone, v))}</title></path>`;

    if (zoneNeedsDots(zone) && !reducedMotion) {
      const { count: dotCount, dur, r, key } = particleSpec(zone.power, w, VERT_RIBBON_MAX_W, dotted);
      const glowR = (r * 0.8).toFixed(1);
      html += `<g class="pc-flow-particles" data-zone="${escapeHtml(zone.name)}" data-zone-idx="${i}" data-particle-key="${key}" style="will-change:transform">`;
      for (let p = 0; p < dotCount; p++) {
        html += `<circle r="${r.toFixed(1)}" fill="${sanitizeCssValue(zoneColor)}" opacity="0.8" filter="drop-shadow(0 0 ${glowR}px ${sanitizeCssValue(zoneColor)})">`;
        html += `<animateMotion dur="${dur.toFixed(1)}s" begin="${(p * (dur / dotCount)).toFixed(2)}s" repeatCount="indefinite" path="${d}"/>`;
        html += `</circle>`;
      }
      html += `</g>`;
    }
  }

  html += `<rect data-role="ac-unit" x="${unitX}" y="${hu.y}" width="${hu.w}" height="${hu.h}" rx="${hu.rx}" fill="${sanitizeCssValue(unit.fill)}" stroke="${sanitizeCssValue(unit.stroke)}" stroke-width="1"/>`;
  if (v.vent) html += `<rect data-role="ac-vent" x="${unitX + 16}" y="${hu.y + hu.h - 9}" width="${hu.w - 32}" height="4" rx="2" fill="none" stroke="${sanitizeCssValue(unit.stroke)}" stroke-opacity="0.5"/>`;
  html += `<text data-role="ac-label" x="${hu.labelX}" y="${hu.labelY}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">${v.source}</text>`;

  for (let i = 0; i < count; i++) {
    const zone = zoneData[i];
    const active = isZoneDemanding(zone);
    const { x, nameY } = hubGeometry(layout, i, count);
    const zoneColor = v.color(zone.hvacAction === 'cooling');
    html += `<text ${zoneTextAttrs(zone, i, 'zone-name')} x="${x}" y="${nameY}" text-anchor="middle" font-size="13" fill="${active ? 'var(--pulse-text-primary)' : 'var(--pulse-text-secondary)'}"${active ? ' font-weight="500"' : ''}>${escapeHtml(zone.name)}</text>`;
    html += `<text ${zoneTextAttrs(zone, i, 'zone-sub')} x="${x}" y="${nameY + 13}" text-anchor="middle" font-size="9.5" fill="${active ? sanitizeCssValue(zoneColor) : 'var(--pulse-text-secondary)'}">${escapeHtml(verticalSubText(zone))}</text>`;
    html += `<text ${zoneTextAttrs(zone, i, 'zone-temp')} x="${x}" y="${nameY + 25}" text-anchor="middle" font-size="9.5" fill="var(--pulse-text-secondary)">${escapeHtml(verticalTempText(zone))}</text>`;
  }

  html += `</svg>`;
  return html;
}

/** Update the unit-and-labels diagram in place, finding nodes by data-role, data-zone-idx or id. @param {Element} svg @param {FlowZone[]} zoneData @param {FlowVariant} v @param {'vertical'|'radial'} layout */
function updateVerticalDiagram(svg, zoneData, v, layout) {
  const count = zoneData.length;
  const idleColor = 'var(--pulse-disabled)';
  const unit = verticalUnitColors(zoneData, v);
  const unitEl = svg.querySelector('[data-role="ac-unit"]');
  if (unitEl) {
    unitEl.setAttribute('fill', unit.fill);
    unitEl.setAttribute('stroke', unit.stroke);
  }
  svg.querySelector('[data-role="ac-vent"]')?.setAttribute('stroke', unit.stroke);

  for (let i = 0; i < count; i++) {
    const zone = zoneData[i];
    const active = isZoneDemanding(zone);
    const zoneColor = v.color(zone.hvacAction === 'cooling');
    const { d } = hubGeometry(layout, i, count);

    const ribbon = svg.querySelector(`path[data-zone-idx="${i}"]`);
    if (ribbon) {
      ribbon.setAttribute('d', d);
      ribbon.setAttribute('stroke-width', verticalRibbonWidth(zone).toFixed(1));
      if (active) {
        ribbon.classList.add('pc-ribbon-active');
        ribbon.setAttribute('filter', `url(#${v.prefix}-glow)`);
      } else {
        ribbon.classList.remove('pc-ribbon-active');
        ribbon.removeAttribute('filter');
      }
      const titleEl = ribbon.querySelector('title');
      if (titleEl) titleEl.textContent = ribbonTitleText(zone, v);
    }

    const group = svg.querySelector(`g.pc-flow-particles[data-zone-idx="${i}"]`);
    if (group) {
      /** @type {HTMLElement} */ (group).style.display = zoneNeedsDots(zone) ? '' : 'none';
      for (const dot of group.querySelectorAll('circle')) {
        dot.setAttribute('fill', sanitizeCssValue(zoneColor));
        dot.setAttribute('filter', `drop-shadow(0 0 ${(parseFloat(dot.getAttribute('r') || '0') * 0.8).toFixed(1)}px ${sanitizeCssValue(zoneColor)})`);
      }
    }

    const gradEl = svg.querySelector(`#${v.prefix}-g${i}`);
    if (gradEl) {
      const color = active ? zoneColor : idleColor;
      const opacities = active ? ['0.3', '1.0', '0.3'] : ['0.15', '0.25', '0.1'];
      const stops = gradEl.querySelectorAll('stop');
      if (stops.length >= 3) {
        stops.forEach((stop, s) => { stop.setAttribute('stop-color', color); stop.setAttribute('stop-opacity', opacities[s] ?? '0.1'); });
      }
      if (active) {
        const dur = zone.power > 0 ? (4.5 - (zone.power / 100) * 3.3).toFixed(1) : '5.0';
        gradEl.querySelectorAll('animate').forEach((anim) => anim.setAttribute('dur', `${dur}s`));
      } else {
        gradEl.querySelectorAll('animate').forEach((anim) => anim.remove());
      }
    }

    const nameEl = svg.querySelector(`text[data-role="zone-name"][data-zone-idx="${i}"]`);
    if (nameEl) {
      nameEl.textContent = zone.name;
      nameEl.setAttribute('fill', active ? 'var(--pulse-text-primary)' : 'var(--pulse-text-secondary)');
      if (active) nameEl.setAttribute('font-weight', '500');
      else nameEl.removeAttribute('font-weight');
    }
    const subEl = svg.querySelector(`text[data-role="zone-sub"][data-zone-idx="${i}"]`);
    if (subEl) {
      subEl.textContent = verticalSubText(zone);
      subEl.setAttribute('fill', active ? zoneColor : 'var(--pulse-text-secondary)');
    }
    const tempEl = svg.querySelector(`text[data-role="zone-temp"][data-zone-idx="${i}"]`);
    if (tempEl) tempEl.textContent = verticalTempText(zone);
  }
}

/**
 * Render Energy Flow section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {'heating'|'ac'} [variant] - Flow variant.
 * @returns {string} HTML string.
 */
export function renderEnergyFlowSection(zones, states, discovery, variant = 'heating') {
  if (!zones || zones.length === 0) return '';
  const v = FLOW_VARIANTS[variant] || FLOW_VARIANTS.heating;

  const reducedMotion = isReducedMotion();

  /** @type {{name: string, entityId: string, power: number, hasPowerData: boolean, temp: number|null, target: number|null, unit: string, hvacAction: string, isUnavailable: boolean}[]} */
  const zoneData = [];
  let hasAttribute = false;

  for (const zoneConfig of zones) {
    const { entityId, zoneEntities, zoneState: zs } = resolveZoneContext(zoneConfig, discovery, states);

    if (v.hasData(zs, zoneEntities, states[entityId])) {
      hasAttribute = true;
    }

    zoneData.push({ name: zs.name, entityId, power: v.power(zs), hasPowerData: v.hasPower(zs), temp: zs.currentTemp, target: zs.targetTemp, unit: zs.unit, hvacAction: zs.hvacAction, isUnavailable: zs.isUnavailable });
  }

  const dataZones = zoneData.filter((z) => z.hasPowerData);
  const totalPower = averageZonePower(zoneData) ?? 0;

  const anyCooling = zoneData.some((z) => z.hvacAction === 'cooling');

  let html = `<div class="pc-section pc-section-energy-flow"${v.dataVariant}>`;
  html += `<div class="pc-section-header">`;
  html += `<div class="pulse-section-label">${v.label}</div>`;
  if (hasAttribute && dataZones.length > 0) {
    html += `<span class="pc-energy-flow-header-value" style="color:${sanitizeCssValue(v.color(anyCooling))}">${escapeHtml(totalPower)}% avg</span>`;
  }
  html += `</div>`;

  if (!hasAttribute) {
    html += `<div class="pc-chart-empty">${v.empty}</div></div>`;
    return html;
  }

  const layout = flowLayout(v, zoneData.length);
  if (layout !== 'horizontal') {
    html += renderVerticalDiagram(zoneData, v, reducedMotion, layout);
    html += `</div>`;
    return html;
  }

  const { svgW, zoneSpacing, startY, svgH, boilerH, boilerW, sourceX, destX, sourceY, fanSpacing } = horizontalGeometry(zoneData.length);

  const idleColor = 'var(--pulse-disabled)';
  const hasAnyHeating = zoneData.some(isZoneDemanding);
  const activeZoneCount = zoneData.filter((z) => z.power > 0).length;

  html += `<svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="${v.aria}" style="width:100%;height:${sanitizeCssValue(svgH)}px;display:block">`;

  html += `<defs>`;
  html += buildBloomFilter(`${v.prefix}-glow`, computeGlowStdDev(svgW, 360).toFixed(1));
  for (let i = 0; i < zoneData.length; i++) {
    const active = isZoneDemanding(zoneData[i]);
    const color = active ? v.color(zoneData[i].hvacAction === 'cooling') : idleColor;
    const power = zoneData[i].power;

    if (active) {
      // Animated flow gradient: band moves boiler → zone, dur 100% → 1.2s, 10% → 4s, 0% with hvacAction → 5s
      const dur = power > 0 ? (4.5 - (power / 100) * 3.3).toFixed(1) : '5.0';
      html += `<linearGradient id="${v.prefix}-g${i}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`;
      html += `<stop offset="0%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.3"/>`;
      html += `<stop offset="50%" stop-color="${sanitizeCssValue(color)}" stop-opacity="1.0"/>`;
      html += `<stop offset="100%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.3"/>`;
      if (!reducedMotion) {
        html += `<animate attributeName="x1" from="-0.5" to="0.5" dur="${dur}s" repeatCount="indefinite"/>`;
        html += `<animate attributeName="x2" from="0.5" to="1.5" dur="${dur}s" repeatCount="indefinite"/>`;
      }
      html += `</linearGradient>`;
    } else {
      // Static idle gradient: subtle but visible on both light and dark themes
      html += `<linearGradient id="${v.prefix}-g${i}" x1="0" y1="0" x2="1" y2="0">`;
      html += `<stop offset="0%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.15"/>`;
      html += `<stop offset="50%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.25"/>`;
      html += `<stop offset="100%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.1"/>`;
      html += `</linearGradient>`;
    }
  }
  html += `</defs>`;

  // Source node (boiler): warm tint when any zone is heating
  const tint = v.tint(anyCooling);
  const boilerFill = hasAnyHeating ? tint.fill : 'color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)';
  const boilerStroke = hasAnyHeating ? tint.stroke : 'color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)';
  html += `<rect x="${sourceX - boilerW / 2}" y="${sourceY - boilerH / 2}" width="${boilerW}" height="${boilerH}" rx="8" fill="${sanitizeCssValue(boilerFill)}" stroke="${sanitizeCssValue(boilerStroke)}" stroke-width="1"/>`;
  html += `<text x="${sourceX}" y="${sourceY - boilerH / 2 - 6}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">${v.source}</text>`;

  for (let i = 0; i < zoneData.length; i++) {
    const zone = zoneData[i];
    const destY = startY + i * zoneSpacing + 20;
    const active = isZoneDemanding(zone);
    // An active zone with no power data gets a fixed mid-width ribbon.
    const ribbonW = horizontalRibbonWidth(zone);
    const ribbonClass = active ? ' class="pc-ribbon-active"' : '';

    // Source Y offset per zone for fan-out effect: proportional to boiler height
    const fanSourceY = sourceY + (i - (zoneData.length - 1) / 2) * fanSpacing;
    const ribbonPath = buildRibbonPath(fanSourceY, destY, ribbonW / 2, ribbonW / 2, svgW, sourceX + boilerW / 2, destX - 12);

    const zoneColor = v.color(zone.hvacAction === 'cooling');
    html += `<path d="${ribbonPath}" fill="url(#${v.prefix}-g${i})"${ribbonClass}${active ? ` filter="url(#${v.prefix}-glow)"` : ''} data-zone="${escapeHtml(zone.name)}" data-zone-idx="${i}">`;
    html += `<title>${escapeHtml(ribbonTitleText(zone, v))}</title></path>`;

    // Particles: animated dots along the ribbon center path
    if (zone.power > 0 && !reducedMotion) {
      const { count, dur, r, key } = particleSpec(zone.power, ribbonW, HORIZ_RIBBON_MAX_W, activeZoneCount);
      const glowR = (r * 0.8).toFixed(1);
      const motionPath = buildRibbonCenterPath(fanSourceY, destY, sourceX + boilerW / 2, destX - 12);

      html += `<g class="pc-flow-particles" data-zone="${escapeHtml(zone.name)}" data-zone-idx="${i}" data-particle-key="${key}" style="will-change:transform">`;
      for (let p = 0; p < count; p++) {
        const beginOffset = (p * (dur / count)).toFixed(2);
        html += `<circle r="${r.toFixed(1)}" fill="${sanitizeCssValue(zoneColor)}" opacity="0.8"`;
        html += ` filter="drop-shadow(0 0 ${glowR}px ${sanitizeCssValue(zoneColor)})">`;
        html += `<animateMotion dur="${dur.toFixed(1)}s" begin="${beginOffset}s" repeatCount="indefinite"`;
        html += ` path="${motionPath}"/>`;
        html += `</circle>`;
      }
      html += `</g>`;
    }

    const nameFill = active ? 'var(--pulse-text-primary)' : 'var(--pulse-text-secondary)';
    const nameWeight = active ? ' font-weight="500"' : '';
    html += `<text ${zoneTextAttrs(zone, i, 'zone-name')} x="${destX}" y="${(destY - 1).toFixed(1)}" font-size="14" fill="${sanitizeCssValue(nameFill)}"${nameWeight}>${escapeHtml(zone.name)}</text>`;
    const subFill = active ? sanitizeCssValue(zoneColor) : 'var(--pulse-text-secondary)';
    html += `<text ${zoneTextAttrs(zone, i, 'zone-sub')} x="${destX}" y="${(destY + 12).toFixed(1)}" font-size="10" fill="${subFill}">${escapeHtml(verticalSubText(zone))}</text>`;
    html += `<text ${zoneTextAttrs(zone, i, 'zone-temp')} x="${destX}" y="${(destY + 24).toFixed(1)}" font-size="10" fill="var(--pulse-text-secondary)">${escapeHtml(verticalTempText(zone))}</text>`;
  }

  html += `</svg>`;
  html += `</div>`;
  return html;
}

/**
 * Differential update for Energy Flow section: updates text labels, ribbon
 * widths, gradient colors, and animation speeds in-place without replacing
 * the SVG element. Preserves ongoing `<animate>` flow animations.
 * @param {HTMLElement} sectionEl - The .pc-section-energy-flow element.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @param {'heating'|'ac'} [variant] - Flow variant.
 * @returns {boolean} True if update was applied, false if full re-render needed.
 */
export function updateEnergyFlowSection(sectionEl, zones, states, discovery, variant = 'heating') {
  if (!sectionEl || !zones || zones.length === 0) return false;
  const v = FLOW_VARIANTS[variant] || FLOW_VARIANTS.heating;

  const svg = sectionEl.querySelector('svg');
  if (!svg) return false;

  /** @type {FlowZone[]} */
  const zoneData = [];
  let hasAttribute = false;
  for (const zoneConfig of zones) {
    const { entityId, zoneEntities, zoneState: zs } = resolveZoneContext(zoneConfig, discovery, states);
    if (v.hasData(zs, zoneEntities, states[entityId])) hasAttribute = true;
    zoneData.push({ name: zs.name, entityId, power: v.power(zs), hasPowerData: v.hasPower(zs), temp: zs.currentTemp, unit: zs.unit, hvacAction: zs.hvacAction, isUnavailable: zs.isUnavailable });
  }

  const ribbons = svg.querySelectorAll('path[data-zone]');
  if (ribbons.length !== zoneData.length) return false; // Zone count changed: need full re-render
  if (!hasAttribute) return false; // Render would show the empty state

  const dataZones = zoneData.filter((z) => z.hasPowerData);
  const headerSpan = sectionEl.querySelector('.pc-energy-flow-header-value');
  if (!!headerSpan !== (dataZones.length > 0)) return false; // Header span appears or disappears: need full re-render
  const layout = flowLayout(v, zoneData.length);
  const isVertical = layout !== 'horizontal';
  const needsGroup = isVertical ? zoneNeedsDots : (/** @type {FlowZone} */ z) => z.power > 0;
  if (!isReducedMotion()) {
    const dotted = zoneData.filter(zoneNeedsDots).length;
    const powered = zoneData.filter((z) => z.power > 0).length;
    for (let i = 0; i < zoneData.length; i++) {
      const z = zoneData[i];
      if (!needsGroup(z)) continue;
      const particleGroup = svg.querySelector(`g.pc-flow-particles[data-zone-idx="${i}"]`);
      if (!particleGroup) return false; // Particle groups are only built by a full render
      const spec = isVertical ? particleSpec(z.power, verticalRibbonWidth(z), VERT_RIBBON_MAX_W, dotted) : particleSpec(z.power, horizontalRibbonWidth(z), HORIZ_RIBBON_MAX_W, powered);
      if (particleGroup.getAttribute('data-particle-key') !== spec.key) return false; // Dots are drawn once: new count, speed or size needs a full render
    }
  }

  const idleColor = 'var(--pulse-disabled)';
  const hasAnyHeating = zoneData.some(isZoneDemanding);
  const anyCooling = zoneData.some((z) => z.hvacAction === 'cooling');
  const tint = v.tint(anyCooling);

  const { svgW, zoneSpacing, startY, boilerW, sourceX, destX, sourceY, fanSpacing } = horizontalGeometry(zoneData.length);

  if (headerSpan) {
    const totalPower = averageZonePower(zoneData) ?? 0;
    headerSpan.textContent = `${totalPower}% avg`;
    /** @type {HTMLElement} */ (headerSpan).style.color = v.color(anyCooling);
  }

  if (layout !== 'horizontal') {
    updateVerticalDiagram(svg, zoneData, v, layout);
    return true;
  }

  const boilerRect = svg.querySelector('rect');
  if (boilerRect) {
    boilerRect.setAttribute('fill', hasAnyHeating ? tint.fill : 'color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)');
    boilerRect.setAttribute('stroke', hasAnyHeating ? tint.stroke :'color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)');
    boilerRect.setAttribute('stroke-width', hasAnyHeating ? '0.5' : '1');
  }

  for (let i = 0; i < zoneData.length; i++) {
    const zone = zoneData[i];
    const ribbon = ribbons[i];
    const active = isZoneDemanding(zone);

    const destY = startY + i * zoneSpacing + 20;
    const ribbonW = horizontalRibbonWidth(zone);
    const fanSourceY = sourceY + (i - (zoneData.length - 1) / 2) * fanSpacing;
    const newPath = buildRibbonPath(fanSourceY, destY, ribbonW / 2, ribbonW / 2, svgW, sourceX + boilerW / 2, destX - 12);
    ribbon.setAttribute('d', newPath);

    if (active) {
      ribbon.classList.add('pc-ribbon-active');
      ribbon.setAttribute('filter', `url(#${v.prefix}-glow)`);
    } else {
      ribbon.classList.remove('pc-ribbon-active');
      ribbon.removeAttribute('filter');
    }

    const titleEl = ribbon.querySelector('title');
    if (titleEl) titleEl.textContent = ribbonTitleText(zone, v);

    // Update particle group visibility: select by integer index to avoid CSS selector injection from zone names.
    const particleGroup = svg.querySelector(`g.pc-flow-particles[data-zone-idx="${i}"]`);
    if (particleGroup) {
      /** @type {HTMLElement} */ (particleGroup).style.display = zone.power > 0 ? '' : 'none';
    }

    const zoneColor = v.color(zone.hvacAction === 'cooling');
    const gradEl = svg.querySelector(`#${v.prefix}-g${i}`);
    if (gradEl) {
      const color = active ? zoneColor : idleColor;
      const stops = gradEl.querySelectorAll('stop');
      const animates = gradEl.querySelectorAll('animate');

      if (active) {
        const dur = zone.power > 0 ? (4.5 - (zone.power / 100) * 3.3).toFixed(1) : '5.0';
        if (stops.length >= 3) {
          stops[0].setAttribute('stop-color', color);
          stops[0].setAttribute('stop-opacity', '0.3');
          stops[1].setAttribute('stop-color', color);
          stops[1].setAttribute('stop-opacity', '1.0');
          stops[2].setAttribute('stop-color', color);
          stops[2].setAttribute('stop-opacity', '0.3');
        }
        for (const anim of animates) {
          anim.setAttribute('dur', `${dur}s`);
        }
        // Idle-path gradients have no <animate> children, so the update can't add them and it stays static until re-render.
        gradEl.setAttribute('gradientUnits', 'objectBoundingBox');
      } else {
        // Static idle gradient
        if (stops.length >= 3) {
          stops[0].setAttribute('stop-color', color);
          stops[0].setAttribute('stop-opacity', '0.15');
          stops[1].setAttribute('stop-color', color);
          stops[1].setAttribute('stop-opacity', '0.25');
          stops[2].setAttribute('stop-color', color);
          stops[2].setAttribute('stop-opacity', '0.1');
        }
        for (const anim of animates) {
          anim.remove();
        }
      }
    }

    const nameEl = svg.querySelector(`text[data-role="zone-name"][data-zone-idx="${i}"]`);
    const subEl = svg.querySelector(`text[data-role="zone-sub"][data-zone-idx="${i}"]`);
    const tempEl = svg.querySelector(`text[data-role="zone-temp"][data-zone-idx="${i}"]`);
    if (!nameEl || !subEl || !tempEl) return false; // Old two-line DOM: need full re-render

    nameEl.textContent = zone.name;
    nameEl.setAttribute('fill', active ? 'var(--pulse-text-primary)' : 'var(--pulse-text-secondary)');
    if (active) {
      nameEl.setAttribute('font-weight', '500');
    } else {
      nameEl.removeAttribute('font-weight');
    }
    subEl.textContent = verticalSubText(zone);
    subEl.setAttribute('fill', active ? zoneColor : 'var(--pulse-text-secondary)');
    tempEl.textContent = verticalTempText(zone);
  }

  return true;
}

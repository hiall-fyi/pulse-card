/**
 * @module pulse-climate/sections/energy-flow
 * @description Render Sankey-style ribbons from boiler source to zone
 * destinations. Ribbon width ∝ heating power, 3-stop horizontal gradient,
 * pulse animation for active ribbons.
 * Pure renderer — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue, isReducedMotion } from '../../shared/utils.js';
import { HVAC_VISUALS } from '../constants.js';
import { resolveZoneState, computeGlowStdDev, computeParticleCount, computeParticleDuration, computeParticleRadius } from '../utils.js';
import { extractZoneName } from '../zone-resolver.js';

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

/**
 * Render Energy Flow section HTML.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @returns {string} HTML string.
 */
export function renderEnergyFlowSection(zones, states, discovery) {
  if (!zones || zones.length === 0) return '';

  const reducedMotion = isReducedMotion();

  /** @type {{name: string, power: number, temp: number|null, target: number|null, unit: string, hvacAction: string}[]} */
  const zoneData = [];
  let hasAttribute = false;

  for (const zoneConfig of zones) {
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
    const zs = resolveZoneState(entityId, zoneEntities, states, zoneConfig, /** @type {*} */ ({}));

    if (zs.heatingPower > 0 || zoneEntities.heating_power || states[entityId]?.attributes?.heating_power !== undefined) {
      hasAttribute = true;
    }

    zoneData.push({ name: zs.name, power: zs.heatingPower, temp: zs.currentTemp, target: zs.targetTemp, unit: zs.unit, hvacAction: zs.hvacAction });
  }

  // Total power for header
  const totalPower = zoneData.length > 0
    ? Math.round(zoneData.reduce((s, z) => s + z.power, 0) / zoneData.length)
    : 0;

  let html = `<div class="section section-energy-flow">`;
  html += `<div style="display:flex;justify-content:space-between;align-items:baseline">`;
  html += `<div class="section-label">Energy Flow</div>`;
  if (hasAttribute) {
    html += `<span style="font-size:11px;color:${sanitizeCssValue(HVAC_VISUALS.heating.fallback)};font-weight:500">${escapeHtml(totalPower)}% avg</span>`;
  }
  html += `</div>`;

  if (!hasAttribute) {
    html += `<div class="chart-empty">No heating data</div></div>`;
    return html;
  }

  // Layout — adaptive spacing based on zone count
  const svgW = 360;
  const zoneSpacing = zoneData.length <= 3 ? 44 : zoneData.length <= 6 ? 38 : 34;
  const startY = 15;
  const svgH = Math.max(80, zoneData.length * zoneSpacing + 30);

  // Boiler node — both width and height scale with zone count
  const contentH = zoneData.length * zoneSpacing;
  const boilerH = Math.max(40, Math.min(contentH * 0.7, contentH - 16));
  const boilerW = Math.max(36, boilerH * 0.6);

  const sourceX = Math.max(50, boilerW / 2 + 14);
  const destX = svgW - 60;
  const sourceY = svgH / 2;
  const maxRibbonW = 22;
  const minRibbonW = 2;

  // Fan-out spacing — proportional to boiler height
  const fanSpacing = boilerH / Math.max(zoneData.length, 1) * 0.7;

  const heatingColor = HVAC_VISUALS.heating.fallback;
  const idleColor = 'var(--disabled-color, #9E9E9E)';
  const hasAnyHeating = zoneData.some((z) => z.power > 0 || z.hvacAction === 'heating' || z.hvacAction === 'cooling');
  const activeZoneCount = zoneData.filter((z) => z.power > 0).length;

  html += `<svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${sanitizeCssValue(svgH)}px;display:block">`;

  // Gradient + glow filter defs
  html += `<defs>`;
  html += `<filter id="flow-glow"><feGaussianBlur stdDeviation="${computeGlowStdDev(svgW, 360).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  for (let i = 0; i < zoneData.length; i++) {
    const active = zoneData[i].power > 0 || zoneData[i].hvacAction === 'heating' || zoneData[i].hvacAction === 'cooling';
    const color = active ? heatingColor : idleColor;
    const power = zoneData[i].power;

    if (active) {
      // Animated flow gradient — bright band moves boiler → zone, speed ∝ power
      // dur: 100% → 1.2s (fast), 10% → 4s (slow), 0% with hvacAction → 5s (crawl)
      const dur = power > 0 ? (4.5 - (power / 100) * 3.3).toFixed(1) : '5.0';
      html += `<linearGradient id="flow-g${i}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`;
      html += `<stop offset="0%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.3"/>`;
      html += `<stop offset="50%" stop-color="${sanitizeCssValue(color)}" stop-opacity="1.0"/>`;
      html += `<stop offset="100%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.3"/>`;
      if (!reducedMotion) {
        html += `<animate attributeName="x1" from="-0.5" to="0.5" dur="${dur}s" repeatCount="indefinite"/>`;
        html += `<animate attributeName="x2" from="0.5" to="1.5" dur="${dur}s" repeatCount="indefinite"/>`;
      }
      html += `</linearGradient>`;
    } else {
      // Static idle gradient — subtle but visible on both light and dark themes
      html += `<linearGradient id="flow-g${i}" x1="0" y1="0" x2="1" y2="0">`;
      html += `<stop offset="0%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.15"/>`;
      html += `<stop offset="50%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.25"/>`;
      html += `<stop offset="100%" stop-color="${sanitizeCssValue(color)}" stop-opacity="0.1"/>`;
      html += `</linearGradient>`;
    }
  }
  html += `</defs>`;

  // Source node (boiler) — warm tint when any zone is heating
  const boilerFill = hasAnyHeating ? 'rgba(255, 152, 0, 0.15)' : 'color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)';
  const boilerStroke = hasAnyHeating ? 'rgba(255, 152, 0, 0.25)' : 'color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)';
  html += `<rect x="${sourceX - boilerW / 2}" y="${sourceY - boilerH / 2}" width="${boilerW}" height="${boilerH}" rx="8" fill="${sanitizeCssValue(boilerFill)}" stroke="${sanitizeCssValue(boilerStroke)}" stroke-width="1"/>`;
  html += `<text x="${sourceX}" y="${sourceY - boilerH / 2 - 6}" text-anchor="middle" font-size="10" fill="var(--secondary-text-color, #8e8e93)">Boiler</text>`;

  // Ribbons + destination labels
  for (let i = 0; i < zoneData.length; i++) {
    const zone = zoneData[i];
    const destY = startY + i * zoneSpacing + 20;
    const ribbonW = zone.power > 0
      ? minRibbonW + (zone.power / 100) * (maxRibbonW - minRibbonW)
      : minRibbonW;
    const active = zone.power > 0 || zone.hvacAction === 'heating' || zone.hvacAction === 'cooling';
    const ribbonClass = active ? ' class="ribbon-active"' : '';

    // Source Y offset per zone for fan-out effect — proportional to boiler height
    const fanSourceY = sourceY + (i - (zoneData.length - 1) / 2) * fanSpacing;
    const ribbonPath = buildRibbonPath(fanSourceY, destY, ribbonW / 2, ribbonW / 2, svgW, sourceX + boilerW / 2, destX - 12);

    html += `<path d="${ribbonPath}" fill="url(#flow-g${i})"${ribbonClass}${active ? ' filter="url(#flow-glow)"' : ''} data-zone="${escapeHtml(zone.name)}">`;
    html += `<title>${escapeHtml(zone.name)}: ${Math.round(zone.power)}% heating power</title></path>`;

    // Particles — animated dots along the ribbon center path
    if (zone.power > 0 && !reducedMotion) {
      const count = computeParticleCount(zone.power, 20, activeZoneCount);
      const dur = computeParticleDuration(zone.power);
      const r = computeParticleRadius(ribbonW, maxRibbonW);
      const glowR = (r * 0.8).toFixed(1);
      const motionPath = buildRibbonCenterPath(fanSourceY, destY, sourceX + boilerW / 2, destX - 12);

      html += `<g class="flow-particles" data-zone="${escapeHtml(zone.name)}" style="will-change:transform">`;
      for (let p = 0; p < count; p++) {
        const beginOffset = (p * (dur / count)).toFixed(2);
        html += `<circle r="${r.toFixed(1)}" fill="${sanitizeCssValue(heatingColor)}" opacity="0.8"`;
        html += ` filter="drop-shadow(0 0 ${glowR}px ${sanitizeCssValue(heatingColor)})">`;
        html += `<animateMotion dur="${dur.toFixed(1)}s" begin="${beginOffset}s" repeatCount="indefinite"`;
        html += ` path="${motionPath}"/>`;
        html += `</circle>`;
      }
      html += `</g>`;
    }

    // Zone name — bold for active zones
    const nameFill = active ? 'var(--primary-text-color, #e5e5e7)' : 'var(--secondary-text-color, #a1a1a6)';
    const nameWeight = active ? ' font-weight="600"' : '';
    html += `<text x="${destX}" y="${(destY - 1).toFixed(1)}" font-size="11" fill="${sanitizeCssValue(nameFill)}"${nameWeight}>${escapeHtml(zone.name)}</text>`;
    // Sub-text — heating color for active zones
    const subFill = active ? sanitizeCssValue(heatingColor) : 'var(--secondary-text-color, #8e8e93)';
    const subText = active
      ? `${zone.hvacAction === 'cooling' ? 'Cooling' : 'Heating'} ${Math.round(zone.power)}%${zone.temp !== null ? ` · ${zone.temp}${zone.unit}` : ''}`
      : `Idle${zone.temp !== null ? ` · ${zone.temp}${zone.unit}` : ''}`;
    html += `<text x="${destX}" y="${(destY + 12).toFixed(1)}" font-size="9" fill="${subFill}">${escapeHtml(subText)}</text>`;
  }

  html += `</svg>`;
  html += `</div>`;
  return html;
}

/**
 * Differential update for Energy Flow section — updates text labels, ribbon
 * widths, gradient colors, and animation speeds in-place without replacing
 * the SVG element. Preserves ongoing `<animate>` flow animations.
 * @param {HTMLElement} sectionEl - The .section-energy-flow element.
 * @param {import('../types.js').ZoneConfig[]} zones - Zone configs.
 * @param {Record<string, *>} states - hass.states.
 * @param {import('../types.js').TadoDiscovery} discovery - Discovered entities.
 * @returns {boolean} True if update was applied, false if full re-render needed.
 */
export function updateEnergyFlowSection(sectionEl, zones, states, discovery) {
  if (!sectionEl || !zones || zones.length === 0) return false;

  const svg = sectionEl.querySelector('svg');
  if (!svg) return false;

  // Resolve current zone data
  /** @type {{name: string, power: number, temp: number|null, unit: string, hvacAction: string}[]} */
  const zoneData = [];
  for (const zoneConfig of zones) {
    const entityId = zoneConfig.entity;
    const zoneName = extractZoneName(entityId);
    const zoneEntities = discovery?.zoneEntities?.[zoneName] || {};
    const zs = resolveZoneState(entityId, zoneEntities, states, zoneConfig, /** @type {*} */ ({}));
    zoneData.push({ name: zs.name, power: zs.heatingPower, temp: zs.currentTemp, unit: zs.unit, hvacAction: zs.hvacAction });
  }

  const ribbons = svg.querySelectorAll('path[data-zone]');
  if (ribbons.length !== zoneData.length) return false; // Zone count changed — need full re-render

  const heatingColor = HVAC_VISUALS.heating.fallback;
  const idleColor = 'var(--disabled-color, #9E9E9E)';
  const hasAnyHeating = zoneData.some((z) => z.power > 0 || z.hvacAction === 'heating' || z.hvacAction === 'cooling');

  // Layout constants (must match renderEnergyFlowSection)
  const svgW = 360;
  const zoneSpacing = zoneData.length <= 3 ? 44 : zoneData.length <= 6 ? 38 : 34;
  const startY = 15;
  const svgH = Math.max(80, zoneData.length * zoneSpacing + 30);
  const contentH = zoneData.length * zoneSpacing;
  const boilerH = Math.max(40, Math.min(contentH * 0.7, contentH - 16));
  const boilerW = Math.max(36, boilerH * 0.6);
  const sourceX = Math.max(50, boilerW / 2 + 14);
  const destX = svgW - 60;
  const sourceY = svgH / 2;
  const maxRibbonW = 22;
  const minRibbonW = 2;
  const fanSpacing = boilerH / Math.max(zoneData.length, 1) * 0.7;

  // Update header avg power
  const totalPower = Math.round(zoneData.reduce((s, z) => s + z.power, 0) / zoneData.length);
  const headerSpan = sectionEl.querySelector('.section-label + span, div > span');
  if (headerSpan) headerSpan.textContent = `${totalPower}% avg`;

  // Update boiler node tint
  const boilerRect = svg.querySelector('rect');
  if (boilerRect) {
    boilerRect.setAttribute('fill', hasAnyHeating ? 'rgba(255, 152, 0, 0.15)' : 'color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)');
    boilerRect.setAttribute('stroke', hasAnyHeating ? 'rgba(255, 152, 0, 0.25)' : 'color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)');
    boilerRect.setAttribute('stroke-width', hasAnyHeating ? '0.5' : '1');
  }

  // Update each ribbon + labels
  const textEls = svg.querySelectorAll('text');
  // Text elements: [0]=Boiler, then per zone: [1+i*2]=name, [2+i*2]=sub-text
  for (let i = 0; i < zoneData.length; i++) {
    const zone = zoneData[i];
    const ribbon = ribbons[i];
    const active = zone.power > 0 || zone.hvacAction === 'heating' || zone.hvacAction === 'cooling';

    // Update ribbon path (width changes with power)
    const destY = startY + i * zoneSpacing + 20;
    const ribbonW = zone.power > 0
      ? minRibbonW + (zone.power / 100) * (maxRibbonW - minRibbonW)
      : minRibbonW;
    const fanSourceY = sourceY + (i - (zoneData.length - 1) / 2) * fanSpacing;
    const newPath = buildRibbonPath(fanSourceY, destY, ribbonW / 2, ribbonW / 2, svgW, sourceX + boilerW / 2, destX - 12);
    ribbon.setAttribute('d', newPath);

    // Update ribbon class + filter
    if (active) {
      ribbon.classList.add('ribbon-active');
      ribbon.setAttribute('filter', 'url(#flow-glow)');
    } else {
      ribbon.classList.remove('ribbon-active');
      ribbon.removeAttribute('filter');
    }

    // Update title
    const titleEl = ribbon.querySelector('title');
    if (titleEl) titleEl.textContent = `${zone.name}: ${Math.round(zone.power)}% heating power`;

    // Update particle group visibility
    const particleGroup = svg.querySelector(`g.flow-particles[data-zone="${zone.name}"]`);
    if (particleGroup) {
      /** @type {HTMLElement} */ (particleGroup).style.display = zone.power > 0 ? '' : 'none';
    }

    // Update gradient — swap between animated and static
    const gradEl = svg.querySelector(`#flow-g${i}`);
    if (gradEl) {
      const color = active ? heatingColor : idleColor;
      const stops = gradEl.querySelectorAll('stop');
      const animates = gradEl.querySelectorAll('animate');

      if (active) {
        const dur = zone.power > 0 ? (4.5 - (zone.power / 100) * 3.3).toFixed(1) : '5.0';
        // Update stop colors and opacities for active gradient
        if (stops.length >= 3) {
          stops[0].setAttribute('stop-color', color);
          stops[0].setAttribute('stop-opacity', '0.3');
          stops[1].setAttribute('stop-color', color);
          stops[1].setAttribute('stop-opacity', '1.0');
          stops[2].setAttribute('stop-color', color);
          stops[2].setAttribute('stop-opacity', '0.3');
        }
        // Update animation duration (speed changes with power)
        for (const anim of animates) {
          anim.setAttribute('dur', `${dur}s`);
        }
        // If no animates exist (was idle), we can't add them without re-render
        // — the gradient will still show the correct color, just without animation
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
        // Remove animations for idle state
        for (const anim of animates) {
          anim.remove();
        }
      }
    }

    // Update text labels — zone name (1 + i*2) and sub-text (2 + i*2)
    const nameIdx = 1 + i * 2;
    const subIdx = 2 + i * 2;
    const nameEl = textEls[nameIdx];
    const subEl = textEls[subIdx];

    if (nameEl) {
      nameEl.textContent = zone.name;
      nameEl.setAttribute('fill', active ? 'var(--primary-text-color, #e5e5e7)' : 'var(--secondary-text-color, #a1a1a6)');
      if (active) {
        nameEl.setAttribute('font-weight', '600');
      } else {
        nameEl.removeAttribute('font-weight');
      }
    }

    if (subEl) {
      const subText = active
        ? `${zone.hvacAction === 'cooling' ? 'Cooling' : 'Heating'} ${Math.round(zone.power)}%${zone.temp !== null ? ` · ${zone.temp}${zone.unit}` : ''}`
        : `Idle${zone.temp !== null ? ` · ${zone.temp}${zone.unit}` : ''}`;
      subEl.textContent = subText;
      subEl.setAttribute('fill', active ? heatingColor : 'var(--secondary-text-color, #8e8e93)');
    }
  }

  return true;
}

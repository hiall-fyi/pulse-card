/**
 * @module pulse-climate/chart-primitives
 * @description Reusable SVG chart rendering functions shared across section types.
 * Pure functions — no side effects, no DOM access.
 */

import { escapeHtml, sanitizeCssValue } from '../shared/utils.js';

// ── Multi-Line Paths ────────────────────────────────────────────────

/**
 * Downsample data into fixed time slots with averaging.
 * @param {{t: number, v: number}[]} data - Sorted by t.
 * @param {number} slots - Number of output slots.
 * @returns {{x: number, v: number}[]} Evenly-spaced points with x in [0..1].
 */
function downsample(data, slots) {
  if (data.length === 0 || slots < 1) return [];
  const minT = data[0].t;
  const maxT = data[data.length - 1].t;
  const rangeT = maxT - minT || 1;
  const slotSize = rangeT / slots;
  /** @type {{x: number, v: number}[]} */
  const result = [];
  let di = 0;
  let lastV = data[0].v;
  for (let s = 0; s < slots; s++) {
    const sEnd = minT + (s + 1) * slotSize;
    let sum = 0;
    let count = 0;
    while (di < data.length && data[di].t < sEnd) {
      sum += data[di].v;
      count++;
      di++;
    }
    if (count > 0) lastV = sum / count;
    result.push({ x: s / (slots - 1 || 1), v: lastV });
  }
  return result;
}

/**
 * Build a smooth SVG path from sampled points using midpoint + quadratic Bézier.
 * @param {{x: number, v: number}[]} sampled - Evenly-spaced points.
 * @param {number} width - SVG viewBox width.
 * @param {number} height - SVG viewBox height.
 * @param {number} minV - Y-axis minimum.
 * @param {number} maxV - Y-axis maximum.
 * @returns {string} SVG path d attribute.
 */
function buildSmoothPath(sampled, width, height, minV, maxV) {
  const pad = 2;
  const drawH = height - pad * 2;
  const rangeV = maxV - minV || 1;
  /** @type {{x: number, y: number}[]} */
  const pts = sampled.map((d) => ({
    x: d.x * width,
    y: pad + drawH - ((d.v - minV) / rangeV) * drawH,
  }));

  if (pts.length < 2) return '';
  if (pts.length === 2) {
    return `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}L${pts[1].x.toFixed(1)},${pts[1].y.toFixed(1)}`;
  }

  // Midpoint + quadratic Bézier smoothing
  let last = pts[0];
  let d = `M${last.x.toFixed(1)},${last.y.toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const next = pts[i];
    const mx = (last.x + next.x) / 2;
    const my = (last.y + next.y) / 2;
    d += ` ${mx.toFixed(1)},${my.toFixed(1)}`;
    d += ` Q${next.x.toFixed(1)},${next.y.toFixed(1)}`;
    last = next;
  }
  d += ` ${last.x.toFixed(1)},${last.y.toFixed(1)}`;
  return d;
}

/**
 * Build smooth SVG path `d` strings for multiple line series on a shared axis.
 * @param {import('./types.js').LineSeriesInput[]} series - Array of line series.
 * @param {number} width - SVG viewBox width.
 * @param {number} height - SVG viewBox height.
 * @param {number} [slots=48] - Downsample slot count.
 * @returns {{entityId: string, color: string, d: string}[]} Path descriptors.
 */
export function buildMultiLinePaths(series, width, height, slots = 48) {
  if (!series || series.length === 0) return [];

  // Find global Y range across all series for shared axis
  let globalMin = Infinity;
  let globalMax = -Infinity;
  for (const s of series) {
    for (const pt of s.data) {
      if (!isFinite(pt.v)) continue;
      if (pt.v < globalMin) globalMin = pt.v;
      if (pt.v > globalMax) globalMax = pt.v;
    }
  }
  if (!isFinite(globalMin)) globalMin = 0;
  if (!isFinite(globalMax)) globalMax = 100;

  return series.map((s) => {
    // Filter non-finite data points
    const clean = s.data.filter((pt) => isFinite(pt.v));
    if (clean.length < 2) {
      return { entityId: s.entityId, color: s.color, d: '' };
    }
    const sampled = downsample(clean, slots);
    const d = buildSmoothPath(sampled, width, height, globalMin, globalMax);
    return { entityId: s.entityId, color: s.color, d };
  });
}

// ── Donut Arcs ──────────────────────────────────────────────────────

/**
 * Build SVG arc path `d` strings for a donut/ring chart.
 * @param {import('./types.js').DonutSegmentInput[]} segments - Segment data.
 * @param {number} size - SVG viewBox width and height (square).
 * @param {number} [outerRadius] - Outer radius (default: size/2 - 2).
 * @param {number} [innerRadius] - Inner radius (default: outerRadius * 0.6).
 * @returns {{label: string, color: string, d: string, angle: number}[]} Arc path descriptors.
 */
export function buildDonutArcs(segments, size, outerRadius, innerRadius) {
  if (!segments || segments.length === 0) return [];

  const oR = outerRadius ?? (size / 2 - 2);
  const iR = innerRadius ?? (oR * 0.6);
  const cx = size / 2;
  const cy = size / 2;

  // Clamp negative values to 0 and compute total
  const values = segments.map((s) => Math.max(0, s.value));
  const total = values.reduce((sum, v) => sum + v, 0);
  if (total === 0) return [];

  /** @type {{label: string, color: string, d: string, angle: number}[]} */
  const arcs = [];
  let startAngle = -90; // Start from top (12 o'clock)

  for (let i = 0; i < segments.length; i++) {
    if (values[i] === 0) continue;

    let angle = (values[i] / total) * 360;
    // SVG arc with start=end renders nothing — cap at 359.9° for full circle
    if (angle >= 360) angle = 359.9;
    const endAngle = startAngle + angle;

    const d = buildArcPath(cx, cy, iR, oR, startAngle, endAngle);

    arcs.push({ label: segments[i].label, color: segments[i].color, d, angle });
    startAngle = endAngle;
  }

  return arcs;
}

// ── Legend Chips ─────────────────────────────────────────────────────

/**
 * Build HTML string of legend chip elements.
 * @param {import('./types.js').LegendChipInput[]} items - Legend items.
 * @returns {string} HTML string of chip elements.
 */
export function buildLegendChips(items) {
  if (!items || items.length === 0) return '';
  let html = '<div class="chart-legend">';
  for (const item of items) {
    const color = sanitizeCssValue(item.color);
    const label = escapeHtml(item.label);
    const value = item.value !== undefined && item.value !== null ? ` ${escapeHtml(item.value)}` : '';
    html += `<span class="legend-chip"><span class="legend-dot" style="background:${color}"></span>${label}${value}</span>`;
  }
  html += '</div>';
  return html;
}

// ── Color Mapping ───────────────────────────────────────────────────

/**
 * Map a temperature value to a CSS color string.
 * Uses discrete color stops for vivid,
 * distinct colors at each temperature range.
 * Pure function — no side effects, no DOM access.
 * @param {number} temp - Temperature in degrees.
 * @returns {string} Hex color string.
 */
export function temperatureToColor(temp) {
  if (temp <= 14) return '#1565C0';
  if (temp <= 16) return '#4FC3F7';
  if (temp <= 17) return '#4DB6AC';
  if (temp <= 18) return '#81C784';
  if (temp <= 19) return '#AED581';
  if (temp <= 20) return '#C5E1A5';
  if (temp <= 21) return '#FFF176';
  if (temp <= 22) return '#FFB74D';
  if (temp <= 23) return '#FF8A65';
  if (temp <= 24) return '#EF5350';
  return '#C62828';
}

/**
 * Map humidity percentage to a color.
 * Red (dry) → green (comfortable 40–60%) → blue (humid).
 * @param {number} humidity - Humidity percentage (0–100).
 * @returns {string} Hex color string.
 */
export function humidityToColor(humidity) {
  if (humidity <= 20) return '#C62828';
  if (humidity <= 30) return '#EF5350';
  if (humidity <= 35) return '#FF8A65';
  if (humidity <= 40) return '#FFB74D';
  if (humidity <= 45) return '#AED581';
  if (humidity <= 55) return '#4CAF50';
  if (humidity <= 60) return '#AED581';
  if (humidity <= 65) return '#4DB6AC';
  if (humidity <= 70) return '#4FC3F7';
  if (humidity <= 80) return '#1E88E5';
  return '#1565C0';
}

// ── Arc Path ────────────────────────────────────────────────────────

/**
 * Build a single SVG arc path between two angles with variable inner/outer radii.
 * Pure function — no side effects, no DOM access.
 * @param {number} cx - Center X.
 * @param {number} cy - Center Y.
 * @param {number} innerR - Inner radius.
 * @param {number} outerR - Outer radius.
 * @param {number} startAngle - Start angle in degrees (-90 = 12 o'clock).
 * @param {number} endAngle - End angle in degrees.
 * @returns {string} SVG path d attribute.
 */
export function buildArcPath(cx, cy, innerR, outerR, startAngle, endAngle) {
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const angle = endAngle - startAngle;
  const largeArc = Math.abs(angle) > 180 ? 1 : 0;

  // Outer arc: start → end (clockwise)
  const ox1 = cx + outerR * Math.cos(startRad);
  const oy1 = cy + outerR * Math.sin(startRad);
  const ox2 = cx + outerR * Math.cos(endRad);
  const oy2 = cy + outerR * Math.sin(endRad);

  // Inner arc: end → start (counter-clockwise)
  const ix1 = cx + innerR * Math.cos(endRad);
  const iy1 = cy + innerR * Math.sin(endRad);
  const ix2 = cx + innerR * Math.cos(startRad);
  const iy2 = cy + innerR * Math.sin(startRad);

  return [
    `M${ox1.toFixed(2)},${oy1.toFixed(2)}`,
    `A${outerR.toFixed(2)},${outerR.toFixed(2)} 0 ${largeArc} 1 ${ox2.toFixed(2)},${oy2.toFixed(2)}`,
    `L${ix1.toFixed(2)},${iy1.toFixed(2)}`,
    `A${innerR.toFixed(2)},${innerR.toFixed(2)} 0 ${largeArc} 0 ${ix2.toFixed(2)},${iy2.toFixed(2)}`,
    'Z',
  ].join(' ');
}

// ── Filled Sparkline ────────────────────────────────────────────────

/**
 * Build a filled-area sparkline (line path + closed area path).
 * Returns both paths for rendering line stroke + gradient fill.
 * Pure function — no side effects, no DOM access.
 * @param {{t: number, v: number}[]} data - Time-value pairs sorted by t.
 * @param {number} width - SVG viewBox width.
 * @param {number} height - SVG viewBox height.
 * @param {number} [slots=48] - Downsample slot count.
 * @returns {{linePath: string, areaPath: string} | null} Paths or null if insufficient data.
 */
export function buildFilledSparkline(data, width, height, slots = 48) {
  if (!data || data.length < 2) return null;

  // Filter non-finite values
  const clean = data.filter((pt) => isFinite(pt.v));
  if (clean.length < 2) return null;

  // Ensure data extends to "now" — carry forward last value if gap > 10 min
  const now = Date.now();
  const last = clean[clean.length - 1];
  if (now - last.t > 600000) {
    clean.push({ t: now, v: last.v });
  }

  const sampled = downsample(clean, slots);
  if (sampled.length < 2) return null;

  // Find Y range
  let minV = Infinity;
  let maxV = -Infinity;
  for (const pt of sampled) {
    if (pt.v < minV) minV = pt.v;
    if (pt.v > maxV) maxV = pt.v;
  }
  if (!isFinite(minV)) minV = 0;
  if (!isFinite(maxV)) maxV = 100;

  const linePath = buildSmoothPath(sampled, width, height, minV, maxV);
  if (!linePath) return null;

  // Close the path to form a filled area: line path → bottom-right → bottom-left → close
  const areaPath = `${linePath} L${width.toFixed(1)},${height.toFixed(1)} L0,${height.toFixed(1)} Z`;

  return { linePath, areaPath };
}

/**
 * Build a compact data-sparkline JSON attribute value from history data.
 * Downsamples to the given number of points for efficient DOM storage.
 * @param {{t: number, v: number}[]} data - Raw history data.
 * @param {number} [points=24] - Number of output points.
 * @param {string} [unit=''] - Unit suffix for tooltip display (e.g. '°', '%', ' calls').
 * @returns {string} JSON string suitable for a data attribute, or empty string if insufficient data.
 */
export function buildSparklineDataAttr(data, points = 24, unit = '') {
  if (!data || data.length < 2) return '';
  const clean = data.filter((pt) => isFinite(pt.v));
  if (clean.length < 2) return '';
  const sampled = downsample(clean, points);
  const minT = clean[0].t;
  const maxT = clean[clean.length - 1].t;
  // Detect if source data is integer-valued (e.g. API call counts)
  const isInteger = clean.every((pt) => Number.isInteger(pt.v));
  /** @type {*} */
  const result = { u: unit, d: [] };
  result.d = sampled.map((pt) => {
    const t = minT + pt.x * (maxT - minT);
    const d = new Date(t);
    const label = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    const v = isInteger ? Math.round(pt.v) : Math.round(pt.v * 10) / 10;
    return { l: label, v };
  });
  return JSON.stringify(result);
}

/**
 * Render a filled-area sparkline as an HTML string (gradient area + line).
 * Shared by bridge, homekit, weather, and API sections.
 * @param {{t: number, v: number}[]} data - Time-value pairs sorted by t.
 * @param {number} width - SVG viewBox width.
 * @param {number} height - SVG viewBox height.
 * @param {string} color - CSS color for stroke and gradient.
 * @param {string} gradientId - Unique SVG gradient ID (must be unique per card instance).
 * @param {string} [ariaLabel=''] - Accessible label for the SVG.
 * @returns {string} HTML string, or empty string if insufficient data.
 */
export function renderSparklineHtml(data, width, height, color, gradientId, ariaLabel = '') {
  if (!data || data.length < 2) return '';
  const result = buildFilledSparkline(data, width, height, 24);
  if (!result) return '';
  const safeColor = sanitizeCssValue(color);
  let html = `<div class="sparkline-filled" style="height:${height}px">`;
  html += `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(ariaLabel)}" preserveAspectRatio="none" style="width:100%;height:${height}px;display:block">`;
  html += `<defs><linearGradient id="${escapeHtml(gradientId)}" x1="0" y1="0" x2="0" y2="1">`;
  html += `<stop offset="0%" stop-color="${safeColor}" stop-opacity="0.3"/>`;
  html += `<stop offset="100%" stop-color="${safeColor}" stop-opacity="0"/>`;
  html += `</linearGradient></defs>`;
  html += `<path d="${result.areaPath}" fill="url(#${escapeHtml(gradientId)})" />`;
  html += `<path d="${result.linePath}" fill="none" stroke="${safeColor}" stroke-width="1.5" />`;
  html += `</svg></div>`;
  return html;
}

// ── Breakdown Segment Resolution ────────────────────────────────────

/** Attribute keys to skip when resolving flat breakdown attributes. */
const SKIP_ATTRS = new Set(['friendly_name', 'icon', 'unit_of_measurement', 'device_class']);

/**
 * Resolve breakdown segments from entity attributes.
 * Tries chart_data array → breakdown_24h object → flat attributes fallback.
 * Shared by API section inline donut and standalone donut section.
 * @param {Record<string, *>} attrs - Entity attributes.
 * @param {string[]} palette - Color palette.
 * @returns {import('./types.js').ResolvedSegment[]}
 */
export function resolveBreakdownSegments(attrs, palette) {
  /** @type {import('./types.js').ResolvedSegment[]} */
  const segments = [];
  let idx = 0;

  if (Array.isArray(attrs.chart_data) && attrs.chart_data.length > 0) {
    for (const item of attrs.chart_data) {
      if (item.type && typeof item.count === 'number') {
        segments.push({ label: item.type, value: Math.max(0, item.count), color: palette[idx % palette.length] });
        idx++;
      }
    }
    return segments;
  }

  if (attrs.breakdown_24h && typeof attrs.breakdown_24h === 'object') {
    for (const [key, val] of Object.entries(attrs.breakdown_24h)) {
      const num = Number(val);
      if (!isNaN(num) && num > 0) {
        segments.push({ label: key, value: num, color: palette[idx % palette.length] });
        idx++;
      }
    }
    return segments;
  }

  for (const [key, val] of Object.entries(attrs)) {
    if (SKIP_ATTRS.has(key)) continue;
    const num = Number(val);
    if (isNaN(num)) continue;
    segments.push({ label: key, value: Math.max(0, num), color: palette[idx % palette.length] });
    idx++;
  }
  return segments;
}

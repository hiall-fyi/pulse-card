/**
 * @module pulse-climate/sections/slot-engine
 * @description Shared slot computation, strip rendering, and tooltip utilities
 * for thermal timeline and comfort heatmap sections.
 * Pure functions — no side effects, no DOM access (except tooltip factory).
 */

import { escapeHtml, sanitizeCssValue } from '../../shared/utils.js';

// ── Slot Computation ────────────────────────────────────────────────

/**
 * @typedef {object} SlotData
 * @property {number|null} value - Averaged value for this slot.
 * @property {number} time - Slot midpoint timestamp (ms).
 * @property {string} label - Human-readable time label (e.g. "14:30").
 */

/**
 * Average time-series data into fixed time slots with carry-forward for gaps.
 * Uses single-pass pointer (data must be sorted by t) for O(n+m) performance.
 * @param {{t: number, v: number}[]} data - Sorted time-value pairs.
 * @param {number} slots - Number of output slots.
 * @param {number} windowMs - Time window in milliseconds (e.g. 24 * 3600000).
 * @returns {SlotData[]}
 */
export function computeSlots(data, slots, windowMs) {
  const now = Date.now();
  const windowStart = now - windowMs;
  const slotSize = windowMs / slots;

  /** @type {SlotData[]} */
  const result = [];
  let di = 0;

  // Seed lastVal from the most recent data point before the window starts.
  // Without this, early slots show null (black cells) even when a valid
  // reading exists just before the window boundary.
  let lastVal = null;
  while (di < data.length && data[di].t < windowStart) {
    if (isFinite(data[di].v)) lastVal = Math.round(data[di].v * 10) / 10;
    di++;
  }

  for (let s = 0; s < slots; s++) {
    const sStart = windowStart + s * slotSize;
    const sEnd = sStart + slotSize;
    const sMid = sStart + slotSize / 2;

    let sum = 0;
    let count = 0;
    while (di < data.length && data[di].t < sEnd) {
      if (data[di].t >= sStart && isFinite(data[di].v)) {
        sum += data[di].v;
        count++;
      }
      di++;
    }
    if (count > 0) {
      lastVal = Math.round((sum / count) * 10) / 10;
    }

    const d = new Date(sMid);
    const label = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;

    result.push({ value: lastVal, time: sMid, label });
  }
  return result;
}

// ── Strip Renderers ─────────────────────────────────────────────────

/**
 * @typedef {object} StripOptions
 * @property {string} [ariaLabel] - Accessible label for the strip.
 * @property {number} [nowPct] - Now marker position as percentage (0–100). Omit to hide.
 * @property {string} [emptyColor] - Color for null-value slots (default: 'var(--disabled-color, #9E9E9E)').
 * @property {number} [emptyOpacity] - Opacity for null-value slots (default: 0.3).
 */

/**
 * Render a continuous SVG strip from slot data (timeline mode).
 * @param {SlotData[]} slotData
 * @param {function(number): string} colorFn - Maps value → CSS color string.
 * @param {StripOptions} [options]
 * @returns {string} HTML string for the strip container.
 */
export function renderTimelineStrip(slotData, colorFn, options = {}) {
  const slots = slotData.length;
  if (slots === 0) return '<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">No data</div></div>';

  const emptyColor = options.emptyColor || 'var(--disabled-color, #9E9E9E)';
  const emptyOpacity = options.emptyOpacity ?? 0.3;
  const ariaLabel = options.ariaLabel || '';
  const slotsJson = JSON.stringify(slotData.map((s) => ({ v: s.value, l: s.label })));

  let html = `<div class="strip-container" data-slots='${escapeHtml(slotsJson)}'>`;
  html += `<svg viewBox="0 0 ${slots} 1" preserveAspectRatio="none" role="img" aria-label="${escapeHtml(ariaLabel)}" style="width:100%;height:100%;display:block">`;

  for (let s = 0; s < slots; s++) {
    const val = slotData[s].value;
    const color = val !== null ? colorFn(val) : emptyColor;
    const opacity = val !== null ? 1 : emptyOpacity;
    html += `<rect x="${s}" y="0" width="1.05" height="1" fill="${sanitizeCssValue(color)}" opacity="${opacity}"/>`;
  }
  html += `</svg>`;

  if (options.nowPct !== undefined) {
    const pct = Math.min(100, Math.max(0, options.nowPct));
    html += `<div class="now-marker" style="left:${pct.toFixed(1)}%"></div>`;
  }
  html += `</div>`;
  return html;
}

/**
 * Render a grid of HTML div cells from slot data (heatmap mode).
 * @param {SlotData[]} slotData
 * @param {function(number): string} colorFn - Maps value → CSS color string.
 * @param {StripOptions} [_options]
 * @returns {string} HTML string for the cells container.
 */
export function renderHeatmapStrip(slotData, colorFn, _options = {}) {
  const slots = slotData.length;
  if (slots === 0) return '<div class="cells"><div class="chart-empty" style="height:16px;font-size:10px">No data</div></div>';

  const slotsJson = JSON.stringify(slotData.map((s) => ({ v: s.value, l: s.label })));
  let html = `<div class="cells" data-slots='${escapeHtml(slotsJson)}'>`;
  for (let s = 0; s < slots; s++) {
    const val = slotData[s].value;
    const label = slotData[s].label;
    if (val !== null) {
      const color = colorFn(val);
      html += `<div class="cell" style="background:${sanitizeCssValue(color)}" data-hour="${escapeHtml(label)}" data-score="${val}"></div>`;
    } else {
      html += `<div class="cell cell-empty" data-hour="${escapeHtml(label)}"></div>`;
    }
  }
  html += `</div>`;
  return html;
}

// ── Tooltip ─────────────────────────────────────────────────────────

/**
 * Create a reusable floating tooltip element for strip/cell hover.
 * Uses absolute positioning — append to a container without overflow:hidden.
 * @returns {{show: (refRect: DOMRect, x: number, text: string) => void, hide: () => void, element: HTMLElement}}
 */
export function createStripTooltip() {
  const el = document.createElement('div');
  el.className = 'strip-tooltip';
  el.style.display = 'none';

  /** @type {ReturnType<typeof setTimeout>|null} */
  let hideTimer = null;

  return {
    element: el,
    show(refRect, x, text) {
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      el.textContent = text;
      el.style.display = '';
      el.style.left = `${x}px`;
    },
    hide() {
      hideTimer = setTimeout(() => { el.style.display = 'none'; }, 50);
    },
  };
}

/**
 * Create a viewport-fixed tooltip that escapes all overflow:hidden ancestors.
 * Append the element to the shadow root (not a clipped container).
 * @returns {{show: (anchorRect: DOMRect, clientX: number, text: string) => void, hide: () => void, element: HTMLElement}}
 */
export function createFixedTooltip() {
  const el = document.createElement('div');
  el.className = 'strip-tooltip strip-tooltip-fixed';
  el.style.display = 'none';

  /** @type {ReturnType<typeof setTimeout>|null} */
  let hideTimer = null;

  return {
    element: el,
    show(anchorRect, clientX, text) {
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      el.textContent = text;
      el.style.display = '';
      el.style.left = `${clientX}px`;
      el.style.top = `${anchorRect.top - 28}px`;
    },
    hide() {
      hideTimer = setTimeout(() => { el.style.display = 'none'; }, 50);
    },
  };
}

// ── Time Axis ───────────────────────────────────────────────────────

/**
 * Render time axis labels for a time window.
 * @param {number} windowMs - Window duration in ms.
 * @param {number} [labels=5] - Number of labels (last one is "now").
 * @returns {string} HTML string of time label spans.
 */
export function renderTimeLabels(windowMs, labels = 5) {
  const now = new Date();
  const windowStart = Date.now() - windowMs;
  let html = '';
  for (let i = 0; i < labels - 1; i++) {
    const t = new Date(windowStart + (i / (labels - 1)) * windowMs);
    html += `<span class="time-label">${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}</span>`;
  }
  html += `<span class="time-label">${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}</span>`;
  return html;
}

// ── Drag Selection ──────────────────────────────────────────────────

/**
 * Convert a pointer clientX to a slot index within a strip/cells container.
 * @param {number} clientX - Pointer X position.
 * @param {DOMRect} containerRect - Bounding rect of the strip/cells container.
 * @param {number} totalSlots - Total number of slots.
 * @returns {number} Slot index (clamped to 0..totalSlots-1).
 */
export function pointerToSlotIndex(clientX, containerRect, totalSlots) {
  const pct = Math.max(0, Math.min(1, (clientX - containerRect.left) / containerRect.width));
  return Math.min(totalSlots - 1, Math.floor(pct * totalSlots));
}


// ── Crosshair Binding ───────────────────────────────────────────────

/** Auto-hide delay for touch crosshair/tooltip (ms). */
const TOUCH_AUTOHIDE_MS = 2000;

/**
 * Bind a vertical crosshair line to a container.
 * Desktop: follows pointermove (hover). Mobile: tap-to-pin with auto-hide.
 * @param {Element} parentEl - Element to listen for pointer events on.
 * @param {HTMLElement} crosshairEl - The .strip-crosshair element.
 * @param {Element} refEl - Reference element for X coordinate calculation (e.g. first strip).
 * @param {number} labelOffset - Pixel offset from parentEl left to refEl left.
 */
export function bindCrosshair(parentEl, crosshairEl, refEl, labelOffset) {
  /** @type {ReturnType<typeof setTimeout>|null} */
  let touchTimer = null;

  const showAt = (/** @type {number} */ clientX) => {
    const refRect = refEl.getBoundingClientRect();
    const x = clientX - refRect.left;
    if (x >= 0 && x <= refRect.width) {
      crosshairEl.style.left = `${labelOffset + x}px`;
      crosshairEl.style.display = '';
    }
  };

  const hide = () => {
    crosshairEl.style.display = 'none';
    if (touchTimer) { clearTimeout(touchTimer); touchTimer = null; }
  };

  // Desktop: hover
  parentEl.addEventListener('pointermove', (/** @type {*} */ ev) => {
    if (ev.pointerType === 'touch') return;
    showAt(ev.clientX);
  });
  parentEl.addEventListener('pointerleave', hide);

  // Mobile: tap-to-pin with auto-hide
  parentEl.addEventListener('pointerdown', (/** @type {*} */ ev) => {
    if (ev.pointerType !== 'touch') return;
    showAt(ev.clientX);
    if (touchTimer) clearTimeout(touchTimer);
    touchTimer = setTimeout(hide, TOUCH_AUTOHIDE_MS);
  });
  parentEl.addEventListener('pointerup', (/** @type {*} */ ev) => {
    if (ev.pointerType !== 'touch') return;
    // Keep crosshair visible — auto-hide timer will clean up
  });
}

// ── Drag Selection Binding ──────────────────────────────────────────

/**
 * Bind drag-to-select time range on a strip/cells container.
 * Reusable across thermal timeline and comfort heatmap sections.
 * @param {Element} container - The strip-container or cells element.
 * @param {*[]|null} slots - Parsed slot data array.
 * @param {{show: (rect: DOMRect, x: number, text: string) => void, hide: () => void}} tooltip - Tooltip instance.
 * @param {string} [unit=''] - Unit suffix for tooltip display.
 */
export function bindDragSelect(container, slots, tooltip, unit = '') {
  if (!slots || slots.length === 0) return;
  const totalSlots = slots.length;

  /** @type {number|null} */
  let dragStartIdx = null;
  /** @type {HTMLElement|null} */
  let highlight = null;

  container.addEventListener('pointerdown', (/** @type {*} */ ev) => {
    if (ev.pointerType === 'touch' && ev.isPrimary === false) return;
    const rect = container.getBoundingClientRect();
    dragStartIdx = pointerToSlotIndex(ev.clientX, rect, totalSlots);
    /** @type {HTMLElement} */ (container).setPointerCapture(ev.pointerId);
    if (!highlight) {
      highlight = document.createElement('div');
      highlight.className = 'strip-drag-highlight';
      /** @type {HTMLElement} */ (container).style.position = 'relative';
      container.appendChild(highlight);
    }
    highlight.style.display = '';
    highlight.style.left = `${(dragStartIdx / totalSlots * 100).toFixed(1)}%`;
    highlight.style.width = '0%';
  });

  container.addEventListener('pointermove', (/** @type {*} */ ev) => {
    if (dragStartIdx === null || !highlight) return;
    const rect = container.getBoundingClientRect();
    const dragEndIdx = pointerToSlotIndex(ev.clientX, rect, totalSlots);
    const minIdx = Math.min(dragStartIdx, dragEndIdx);
    const maxIdx = Math.max(dragStartIdx, dragEndIdx);
    highlight.style.left = `${(minIdx / totalSlots * 100).toFixed(1)}%`;
    highlight.style.width = `${((maxIdx - minIdx + 1) / totalSlots * 100).toFixed(1)}%`;
  });

  container.addEventListener('pointerup', (/** @type {*} */ ev) => {
    if (dragStartIdx === null) { dragStartIdx = null; return; }
    const rect = container.getBoundingClientRect();
    const dragEndIdx = pointerToSlotIndex(ev.clientX, rect, totalSlots);
    const minIdx = Math.min(dragStartIdx, dragEndIdx);
    const maxIdx = Math.max(dragStartIdx, dragEndIdx);
    const rangeSlots = slots.slice(minIdx, maxIdx + 1).filter((/** @type {*} */ s) => s.v !== null);
    if (rangeSlots.length > 0) {
      const vals = rangeSlots.map((/** @type {*} */ s) => s.v);
      const avg = (vals.reduce((/** @type {number} */ a, /** @type {number} */ b) => a + b, 0) / vals.length).toFixed(1);
      const min = Math.min(...vals);
      const max = Math.max(...vals);
      const startLabel = slots[minIdx]?.l || '';
      const endLabel = slots[maxIdx]?.l || '';
      const text = `${startLabel} – ${endLabel}: avg ${avg}${unit}, ${min}${unit} – ${max}${unit}`;
      const parentRect = container.getBoundingClientRect();
      tooltip.show(parentRect, (minIdx + maxIdx) / 2 / totalSlots * parentRect.width, text);
      setTimeout(() => tooltip.hide(), 3000);
    }
    dragStartIdx = null;
  });
}

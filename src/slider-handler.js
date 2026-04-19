/**
 * @module slider-handler
 * @description Pointer event handling for Pulse Card slider mode —
 * drag/tap interaction, optimistic UI updates, and HA service dispatch.
 * Separated from action-handler.js for clean separation of concerns.
 *
 * IMPORTANT: All hass access goes through cardEl._hass (not a closure capture)
 * because HA replaces the hass object on every state change. A captured reference
 * would go stale immediately.
 */

import {
  snapToStep,
  resolveSliderService,
  resolveSliderRange,
  resolveUnit,
  warn,
} from './utils.js';

/** Delay (ms) before clearing __pulseSliding flag after commit. */
const SLIDING_FLAG_DELAY = 50;

/**
 * Clean up slider listeners on a bar row.
 * @param {HTMLElement} rowEl - The .bar-row element.
 */
export function cleanupSliderListeners(rowEl) {
  const cleanup = /** @type {*} */ (rowEl).__pulseSliderCleanup;
  if (typeof cleanup === 'function') cleanup();
}

/**
 * Bind slider pointer listeners to a bar row's .bar-container element.
 * Uses cardEl._hass for live hass access (never captures hass in closure).
 * @param {HTMLElement} rowEl - The .bar-row element.
 * @param {{_hass: import('./types.js').Hass|null}} cardEl - Card element with _hass property.
 * @param {import('./types.js').PulseCardConfig} cfg - Card config.
 * @param {import('./types.js').EntityConfig} ec - Entity config.
 */
export function bindSliderListeners(rowEl, cardEl, cfg, ec) {
  cleanupSliderListeners(rowEl);

  const containerEl = /** @type {HTMLElement|null} */ (rowEl.querySelector('.bar-container'));
  if (!containerEl) return;
  const container = /** @type {HTMLElement} */ (containerEl);

  const controller = new AbortController();
  const { signal } = controller;

  /** @type {ReturnType<typeof setTimeout>|null} */
  let flagTimer = null;

  // Store cleanup
  /** @type {*} */ (rowEl).__pulseSliderCleanup = () => {
    controller.abort();
    if (flagTimer) clearTimeout(flagTimer);
    if (repeatTimer) clearInterval(repeatTimer);
    delete /** @type {*} */ (rowEl).__pulseSliderCleanup;
  };

  // Resolve interactive config (boolean or object)
  const interactiveCfg = typeof ec.interactive === 'object' ? ec.interactive
    : typeof cfg.interactive === 'object' ? cfg.interactive
      : undefined;

  // State saved on pointerdown for revert
  /** @type {{fillWidth: string, displayValue: string, pointerId: number, startX: number} | null} */
  let dragState = null;

  /**
   * Map a clientX position to a snapped slider value.
   * @param {number} clientX
   * @returns {number}
   */
  function clientXToValue(clientX) {
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = rect.width > 0 ? x / rect.width : 0;
    const hass = cardEl._hass;
    const state = hass?.states[ec.entity];
    const { min, max, step } = resolveSliderRange(ec.entity, state, interactiveCfg, ec);
    const raw = min + pct * (max - min);
    return snapToStep(raw, min, max, step);
  }

  /**
   * Update bar fill and display value optimistically.
   * @param {number} value - Snapped value.
   */
  function updateUI(value) {
    const hass = cardEl._hass;
    const state = hass?.states[ec.entity];
    const { min, max, step } = resolveSliderRange(ec.entity, state, interactiveCfg, ec);
    const range = max - min;
    const pct = range > 0 ? ((value - min) / range) * 100 : 0;

    const fillEl = /** @type {HTMLElement|null} */ (container.querySelector('.bar-fill'));
    if (fillEl) fillEl.style.width = `${pct}%`;

    const unit = resolveUnit(ec, state);
    const decimal = (String(step).split('.')[1] || '').length;
    const formatted = decimal > 0 ? value.toFixed(decimal) : String(Math.round(value));
    const display = unit ? `${formatted}${unit}` : formatted;

    const valueEls = rowEl.querySelectorAll('.bar-value');
    for (const el of valueEls) el.textContent = display;
  }

  /**
   * Revert bar to saved state.
   */
  function revertUI() {
    if (!dragState) return;
    const fillEl = /** @type {HTMLElement|null} */ (container.querySelector('.bar-fill'));
    if (fillEl) {
      fillEl.style.transition = '';
      fillEl.style.width = dragState.fillWidth;
    }
    const valueEls = rowEl.querySelectorAll('.bar-value');
    for (const el of valueEls) el.textContent = dragState.displayValue;
  }

  /**
   * Commit a value: call HA service, handle success/failure.
   * @param {number} value
   */
  function commitValue(value) {
    const resolved = resolveSliderService(ec.entity, value, interactiveCfg);
    if (!resolved) {
      warn('No slider service mapping for %s', ec.entity);
      revertUI();
      return;
    }

    const hass = cardEl._hass;
    if (!hass) {
      revertUI();
      return;
    }

    hass.callService(resolved.domain, resolved.service, resolved.data)
      .catch((/** @type {*} */ err) => {
        warn('Slider service call failed for %s: %O', ec.entity, err);
        revertUI();
      });
  }

  // --- Pointer events on .bar-container ---

  container.addEventListener('pointerdown', (ev) => {
    if (!cardEl._hass) return;
    ev.preventDefault();

    const fillEl = /** @type {HTMLElement|null} */ (container.querySelector('.bar-fill'));
    const valueEl = rowEl.querySelector('.bar-value');

    dragState = {
      fillWidth: fillEl?.style.width || '0%',
      displayValue: valueEl?.textContent || '',
      pointerId: ev.pointerId,
      startX: ev.clientX,
    };

    // Set sliding flag
    /** @type {*} */ (rowEl).__pulseSliding = true;

    // Capture pointer for tracking outside element
    container.setPointerCapture(ev.pointerId);

    // Add visual feedback
    rowEl.classList.add('sliding');

    // Disable CSS transition for instant tracking
    if (fillEl) fillEl.style.transition = 'none';

    // Immediate UI update at pointer position
    const value = clientXToValue(ev.clientX);
    updateUI(value);
  }, { signal });

  container.addEventListener('pointermove', (ev) => {
    if (!dragState || ev.pointerId !== dragState.pointerId) return;
    ev.preventDefault();
    const value = clientXToValue(ev.clientX);
    updateUI(value);
  }, { signal });

  container.addEventListener('pointerup', (ev) => {
    if (!dragState || ev.pointerId !== dragState.pointerId) return;
    ev.preventDefault();

    const fillEl = /** @type {HTMLElement|null} */ (container.querySelector('.bar-fill'));

    // Re-enable CSS transition
    if (fillEl) fillEl.style.transition = '';

    // Remove visual feedback
    rowEl.classList.remove('sliding');

    // Release capture
    container.releasePointerCapture(ev.pointerId);

    // Final value
    const value = clientXToValue(ev.clientX);
    updateUI(value);
    commitValue(value);

    // Clear drag state
    dragState = null;

    // Clear sliding flag after delay (prevents click handler from firing tap_action)
    flagTimer = setTimeout(() => {
      /** @type {*} */ (rowEl).__pulseSliding = false;
    }, SLIDING_FLAG_DELAY);
  }, { signal });

  container.addEventListener('pointercancel', (ev) => {
    if (!dragState || ev.pointerId !== dragState.pointerId) return;

    const fillEl = /** @type {HTMLElement|null} */ (container.querySelector('.bar-fill'));
    if (fillEl) fillEl.style.transition = '';

    rowEl.classList.remove('sliding');
    container.releasePointerCapture(ev.pointerId);
    revertUI();

    dragState = null;
    /** @type {*} */ (rowEl).__pulseSliding = false;
  }, { signal });

  // --- Step buttons (+/-) ---

  /** @type {ReturnType<typeof setInterval>|null} */
  let repeatTimer = null;

  /**
   * Adjust value by one step in the given direction.
   * @param {number} direction - 1 for increase, -1 for decrease.
   */
  function adjustByStep(direction) {
    const hass = cardEl._hass;
    if (!hass) return;
    const state = hass.states[ec.entity];
    const { min, max, step } = resolveSliderRange(ec.entity, state, interactiveCfg, ec);
    const current = ec.attribute
      ? parseFloat(state?.attributes?.[ec.attribute])
      : parseFloat(state?.state);
    if (isNaN(current)) return;
    const newValue = snapToStep(current + direction * step, min, max, step);
    if (newValue === current) return;
    updateUI(newValue);
    commitValue(newValue);
  }

  const stepBtns = rowEl.querySelectorAll('.bar-step-btn');
  for (const btn of stepBtns) {
    const dir = Number(/** @type {HTMLElement} */ (btn).dataset.step);

    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      adjustByStep(dir);
    }, { signal });

    // Long press repeat
    btn.addEventListener('pointerdown', (ev) => {
      ev.stopPropagation();
      if (repeatTimer) clearInterval(repeatTimer);
      repeatTimer = setInterval(() => adjustByStep(dir), 200);
    }, { signal });

    const stopRepeat = () => {
      if (repeatTimer) { clearInterval(repeatTimer); repeatTimer = null; }
    };
    btn.addEventListener('pointerup', stopRepeat, { signal });
    btn.addEventListener('pointercancel', stopRepeat, { signal });
    btn.addEventListener('pointerleave', stopRepeat, { signal });
  }

  // --- Keyboard support ---

  rowEl.addEventListener('keydown', (ev) => {
    const hass = cardEl._hass;
    if (!hass) return;
    if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowUp' &&
        ev.key !== 'ArrowLeft' && ev.key !== 'ArrowDown') return;

    ev.preventDefault();
    const state = hass.states[ec.entity];
    const { min, max, step } = resolveSliderRange(ec.entity, state, interactiveCfg, ec);
    const current = ec.attribute
      ? parseFloat(state?.attributes?.[ec.attribute])
      : parseFloat(state?.state);
    if (isNaN(current)) return;

    const direction = (ev.key === 'ArrowRight' || ev.key === 'ArrowUp') ? 1 : -1;
    const newValue = snapToStep(current + direction * step, min, max, step);
    if (newValue === current) return;

    updateUI(newValue);
    commitValue(newValue);
  }, { signal });
}

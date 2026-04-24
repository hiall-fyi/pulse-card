/**
 * @module action-handler
 * @description Tap, hold, and double-tap action handling for Pulse Card —
 * resolves action config and dispatches HA events.
 */

import { warn } from './utils.js';
import { executeAction, DOUBLE_TAP_WINDOW, HOLD_THRESHOLD } from './shared/action-handler.js';

/**
 * Resolve action config with fallback chain: entity → card → default.
 * @param {'tap_action'|'hold_action'|'double_tap_action'} actionType
 * @param {import('./types.js').EntityConfig} entityConfig - Per-entity config.
 * @param {import('./types.js').PulseCardConfig} cardConfig - Card-level config.
 * @returns {import('./types.js').ActionConfig} Resolved action config.
 */
function resolveAction(actionType, entityConfig, cardConfig) {
  /** @type {import('./types.js').ActionConfig|undefined} */
  const ecAction = entityConfig?.[actionType];
  /** @type {import('./types.js').ActionConfig|undefined} */
  const cardAction = cardConfig?.[actionType];
  return (
    ecAction ||
    cardAction ||
    { action: actionType === 'tap_action' ? 'more-info' : 'none' }
  );
}

/**
 * Handle an action on a bar row element.
 * Resolves the action type and executes it.
 * @param {HTMLElement} element - Card root element.
 * @param {import('./types.js').Hass} hass - Home Assistant instance.
 * @param {import('./types.js').PulseCardConfig} cardConfig - Card-level config.
 * @param {import('./types.js').EntityConfig} entityConfig - Per-entity config.
 * @param {'tap_action'|'hold_action'|'double_tap_action'} actionType
 */
export function handleAction(element, hass, cardConfig, entityConfig, actionType) {
  const config = resolveAction(actionType, entityConfig, cardConfig);
  executeAction(element, hass, config, entityConfig.entity, warn);
}

/**
 * Clean up action listeners previously bound to a bar row element.
 * Clears pending timers and removes all event listeners via AbortController.
 * @param {HTMLElement} rowEl - The .bar-row element.
 */
export function cleanupActionListeners(rowEl) {
  const cleanup = /** @type {*} */ (rowEl).__pulseCleanup;
  if (typeof cleanup === 'function') cleanup();
}

/**
 * Bind tap, hold, and double-tap listeners to a bar row element.
 * Stores a cleanup function on the element for disconnectedCallback.
 * @param {HTMLElement} rowEl - The .bar-row element.
 * @param {{_hass: import('./types.js').Hass|null}} cardEl - Card element with _hass property.
 * @param {import('./types.js').Hass|null} _hass - Unused (kept for signature compat). Use cardEl._hass instead.
 * @param {import('./types.js').PulseCardConfig} cardConfig - Card-level config.
 * @param {import('./types.js').EntityConfig} entityConfig - Per-entity config.
 */
export function bindActionListeners(rowEl, cardEl, _hass, cardConfig, entityConfig) {
  // Clean up any previous listeners on this element
  cleanupActionListeners(rowEl);

  const controller = new AbortController();
  const { signal } = controller;
  let clickCount = 0;
  /** @type {ReturnType<typeof setTimeout>|null} */
  let clickTimer = null;
  /** @type {ReturnType<typeof setTimeout>|null} */
  let holdTimer = null;
  let held = false;

  // Store cleanup function on element for disconnectedCallback
  /** @type {*} */ (rowEl).__pulseCleanup = () => {
    controller.abort();
    if (clickTimer) clearTimeout(clickTimer);
    if (holdTimer) clearTimeout(holdTimer);
    delete /** @type {*} */ (rowEl).__pulseCleanup;
  };

  // Make bar rows keyboard-focusable and accessible
  rowEl.setAttribute('tabindex', '0');

  // Keyboard activation — Enter/Space triggers tap action
  rowEl.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      if (cardEl._hass) handleAction(/** @type {*} */ (cardEl), cardEl._hass, cardConfig, entityConfig, 'tap_action');
    }
  }, { signal });

  // Tap / double-tap via click
  rowEl.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (held) { held = false; return; }
    if (/** @type {*} */ (rowEl).__pulseSliding) return;
    clickCount++;
    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
        if (cardEl._hass) handleAction(/** @type {*} */ (cardEl), cardEl._hass, cardConfig, entityConfig, 'tap_action');
      }, DOUBLE_TAP_WINDOW);
    } else if (clickCount === 2) {
      if (clickTimer) clearTimeout(clickTimer);
      clickCount = 0;
      if (cardEl._hass) handleAction(/** @type {*} */ (cardEl), cardEl._hass, cardConfig, entityConfig, 'double_tap_action');
    }
  }, { signal });

  // Hold via pointerdown/pointerup
  rowEl.addEventListener('pointerdown', () => {
    held = false;
    holdTimer = setTimeout(() => {
      held = true;
      if (cardEl._hass) handleAction(/** @type {*} */ (cardEl), cardEl._hass, cardConfig, entityConfig, 'hold_action');
    }, HOLD_THRESHOLD);
  }, { signal });

  const cancelHold = () => { if (holdTimer) clearTimeout(holdTimer); };
  rowEl.addEventListener('pointerup', cancelHold, { signal });
  rowEl.addEventListener('pointercancel', cancelHold, { signal });

  // Prevent context menu on long press
  rowEl.addEventListener('contextmenu', (ev) => ev.preventDefault(), { signal });
}

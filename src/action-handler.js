/**
 * @module action-handler
 * @description Tap, hold, and double-tap action handling for Pulse Card —
 * resolves action config and dispatches HA events.
 */

/** Double-tap detection window in ms. */
const DOUBLE_TAP_WINDOW = 250;

/** Hold detection threshold in ms. */
const HOLD_THRESHOLD = 500;

/**
 * Dispatch a CustomEvent that bubbles through Shadow DOM.
 * @param {HTMLElement} element - Element to dispatch from.
 * @param {string} type - Event type.
 * @param {Record<string, *>} detail - Event detail payload.
 */
export function fireEvent(element, type, detail) {
  element.dispatchEvent(
    new CustomEvent(type, { bubbles: true, composed: true, detail })
  );
}

/**
 * Execute an action based on the resolved action config.
 * @param {HTMLElement} element - Card element (for event dispatch).
 * @param {import('./types.js').Hass} hass - Home Assistant instance.
 * @param {import('./types.js').ActionConfig} actionConfig - Action config object.
 * @param {string} entityId - Default entity ID for more-info.
 */
function executeAction(element, hass, actionConfig, entityId) {
  if (!actionConfig || actionConfig.action === 'none') return;

  switch (actionConfig.action) {
    case 'more-info':
      fireEvent(element, 'hass-more-info', {
        entityId: actionConfig.entity || entityId,
      });
      break;
    case 'navigate':
      history.pushState(null, '', actionConfig.navigation_path);
      fireEvent(element, 'location-changed', { replace: false });
      break;
    case 'call-service':
    case 'perform-action': {
      const svc = actionConfig.service || actionConfig.perform_action;
      if (!svc) break;
      const [domain, service] = svc.split('.');
      hass.callService(domain, service, actionConfig.service_data || actionConfig.data);
      break;
    }
    case 'url':
      if (actionConfig.url_path) window.open(actionConfig.url_path, '_blank');
      break;
  }
}

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
  executeAction(element, hass, config, entityConfig.entity);
}

/**
 * Bind tap, hold, and double-tap listeners to a bar row element.
 * @param {HTMLElement} rowEl - The .bar-row element.
 * @param {HTMLElement} cardEl - Card root element (for event dispatch).
 * @param {import('./types.js').Hass|null} hass - Home Assistant instance.
 * @param {import('./types.js').PulseCardConfig} cardConfig - Card-level config.
 * @param {import('./types.js').EntityConfig} entityConfig - Per-entity config.
 */
export function bindActionListeners(rowEl, cardEl, hass, cardConfig, entityConfig) {
  let clickCount = 0;
  /** @type {ReturnType<typeof setTimeout>|null} */
  let clickTimer = null;
  /** @type {ReturnType<typeof setTimeout>|null} */
  let holdTimer = null;
  let held = false;

  // Make bar rows keyboard-focusable and accessible
  rowEl.setAttribute('tabindex', '0');

  // Keyboard activation — Enter/Space triggers tap action
  rowEl.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      if (hass) handleAction(cardEl, hass, cardConfig, entityConfig, 'tap_action');
    }
  });

  // Tap / double-tap via click
  rowEl.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (held) { held = false; return; }
    clickCount++;
    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
        if (hass) handleAction(cardEl, hass, cardConfig, entityConfig, 'tap_action');
      }, DOUBLE_TAP_WINDOW);
    } else if (clickCount === 2) {
      if (clickTimer) clearTimeout(clickTimer);
      clickCount = 0;
      if (hass) handleAction(cardEl, hass, cardConfig, entityConfig, 'double_tap_action');
    }
  });

  // Hold via pointerdown/pointerup
  rowEl.addEventListener('pointerdown', () => {
    held = false;
    holdTimer = setTimeout(() => {
      held = true;
      if (hass) handleAction(cardEl, hass, cardConfig, entityConfig, 'hold_action');
    }, HOLD_THRESHOLD);
  });

  const cancelHold = () => { if (holdTimer) clearTimeout(holdTimer); };
  rowEl.addEventListener('pointerup', cancelHold);
  rowEl.addEventListener('pointercancel', cancelHold);

  // Prevent context menu on long press
  rowEl.addEventListener('contextmenu', (ev) => ev.preventDefault());
}

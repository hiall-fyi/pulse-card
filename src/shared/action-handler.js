/**
 * @module shared/action-handler
 * @description Shared action execution for all Pulse Card family members.
 * Handles more-info, navigate, call-service/perform-action, url, and toggle
 * actions with consistent event dispatch and error handling.
 */

/** Double-tap detection window in ms. */
export const DOUBLE_TAP_WINDOW = 250;

/** Hold detection threshold in ms. */
export const HOLD_THRESHOLD = 500;

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
 * @param {HTMLElement} element - Element to dispatch events from.
 * @param {{callService: function(string, string, Record<string, *>=): Promise<*>}} hass - Home Assistant instance with callService method.
 * @param {Record<string, *>} actionConfig - Action config object.
 * @param {string} entityId - Default entity ID for more-info / toggle.
 * @param {function(string, ...*): void} warnFn - Warning logger function (card-specific prefix).
 */
export function executeAction(element, hass, actionConfig, entityId, warnFn) {
  if (!actionConfig || actionConfig.action === 'none') return;

  switch (actionConfig.action) {
    case 'more-info':
      fireEvent(element, 'hass-more-info', {
        entityId: actionConfig.entity || entityId,
      });
      break;
    case 'navigate':
      if (actionConfig.navigation_path) {
        history.pushState(null, '', actionConfig.navigation_path);
        fireEvent(element, 'location-changed', { replace: false });
      }
      break;
    case 'call-service':
    case 'perform-action': {
      const svc = actionConfig.service || actionConfig.perform_action;
      if (!svc) break;
      const [domain, service] = svc.split('.');
      hass.callService(domain, service, actionConfig.service_data || actionConfig.data)
        .catch((/** @type {*} */ err) => warnFn('Service call %s failed: %O', svc, err));
      break;
    }
    case 'url':
      if (actionConfig.url_path) window.open(actionConfig.url_path, '_blank', 'noopener,noreferrer');
      break;
    case 'toggle':
      hass.callService('homeassistant', 'toggle', {
        entity_id: actionConfig.entity || entityId,
      }).catch((/** @type {*} */ err) => warnFn('Toggle %s failed: %O', actionConfig.entity || entityId, err));
      break;
  }
}

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
 * Make a non-semantic element (`div` / `span`) keyboard-operable: sets `role` +
 * `tabindex` and binds Enter/Space to `onActivate`.
 *
 * `role` and `tabindex` are set unconditionally, so a wrong pre-existing role is
 * corrected. `preventDefault` is already called; nested activatables must
 * `stopPropagation` themselves or the ancestor also fires. Ripple is not
 * attached — call `attachRipple` separately where tap feedback is wanted.
 *
 * @param {HTMLElement} el - Element to make operable.
 * @param {(ev: KeyboardEvent) => void} onActivate - Invoked on Enter/Space.
 * @param {object} [options]
 * @param {AbortSignal} [options.signal] - Ties the listener to the caller's AbortController.
 * @param {string} [options.role='button'] - ARIA role ('button', 'tab', ...).
 */
export function makeActivatable(el, onActivate, { signal, role = 'button' } = {}) {
  el.setAttribute('role', role);
  el.setAttribute('tabindex', '0');
  el.addEventListener('keydown', (ev) => {
    const kev = /** @type {KeyboardEvent} */ (ev);
    if (kev.key !== 'Enter' && kev.key !== ' ') return;
    kev.preventDefault();
    onActivate(kev);
  }, signal ? { signal } : undefined);
}

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
 * Whitelist URL schemes that `action: url` may open in a new tab.
 * User config reaches the new-tab opener — anything outside this set is
 * rejected so a malicious YAML can't smuggle `javascript:`, `data:`, or
 * `vbscript:`.
 * @param {string} url
 * @returns {boolean}
 */
function isSafeUrl(url) {
  if (typeof url !== 'string' || url.length === 0) return false;
  const trimmed = url.trim();
  // Relative URLs (starts with /, ., or a letter that's NOT followed by a scheme separator before a path char)
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return true;
  if (trimmed.startsWith('./') || trimmed.startsWith('../') || trimmed.startsWith('#')) return true;
  // Absolute URLs: only http / https / mailto / tel
  try {
    const parsed = new URL(trimmed, window.location.href);
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Whitelist navigation paths — must be same-origin relative paths. Rejects
 * protocol-relative (`//host`) and scheme URLs to stop navigation hijack
 * via a malicious `navigation_path` YAML value.
 * @param {string} path
 * @returns {boolean}
 */
function isSafeNavigationPath(path) {
  if (typeof path !== 'string' || path.length === 0) return false;
  const trimmed = path.trim();
  if (trimmed.startsWith('//')) return false; // protocol-relative
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) return false; // any scheme
  return true;
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
      if (actionConfig.navigation_path && isSafeNavigationPath(actionConfig.navigation_path)) {
        history.pushState(null, '', actionConfig.navigation_path);
        fireEvent(element, 'location-changed', { replace: false });
      } else if (actionConfig.navigation_path) {
        warnFn('navigation_path rejected — must be a same-origin relative path: %s', actionConfig.navigation_path);
      }
      break;
    case 'call-service':
    case 'perform-action': {
      const svc = actionConfig.service || actionConfig.perform_action;
      if (!svc || typeof svc !== 'string') break;
      const dotIdx = svc.indexOf('.');
      if (dotIdx <= 0 || dotIdx === svc.length - 1) {
        warnFn('Service rejected — expected "domain.service" format, got: %s', svc);
        break;
      }
      const domain = svc.slice(0, dotIdx);
      const service = svc.slice(dotIdx + 1);
      hass.callService(domain, service, actionConfig.service_data || actionConfig.data)
        .catch((/** @type {*} */ err) => warnFn('Service call %s failed: %O', svc, err));
      break;
    }
    case 'url':
      if (actionConfig.url_path && isSafeUrl(actionConfig.url_path)) {
        window.open(actionConfig.url_path, '_blank', 'noopener,noreferrer');
      } else if (actionConfig.url_path) {
        warnFn('url_path rejected — only http/https/mailto/tel schemes or relative paths are allowed: %s', actionConfig.url_path);
      }
      break;
    case 'toggle':
      hass.callService('homeassistant', 'toggle', {
        entity_id: actionConfig.entity || entityId,
      }).catch((/** @type {*} */ err) => warnFn('Toggle %s failed: %O', actionConfig.entity || entityId, err));
      break;
  }
}

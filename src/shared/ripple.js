/**
 * @module shared/ripple
 * @description Attach HA's built-in ha-ripple element to interactive elements.
 * Falls back gracefully on HA versions without ha-ripple (pre-2024).
 */

/**
 * Attach ha-ripple to an interactive element for Material Design tap feedback.
 * Adds `.has-ripple` class on success so CSS can gate `:active` fallback.
 * No-op if ha-ripple custom element is not registered (older HA versions).
 * @param {HTMLElement} el - Element to attach ripple to.
 */
export function attachRipple(el) {
  if (!customElements.get('ha-ripple')) return;
  // Avoid duplicate ripple if already attached
  if (el.querySelector('ha-ripple')) return;
  const ripple = document.createElement('ha-ripple');
  el.appendChild(ripple);
  el.classList.add('has-ripple');
}

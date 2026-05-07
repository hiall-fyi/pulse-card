/**
 * @module shared/utils
 * @description Shared utility functions across all Pulse Card family members.
 */

/**
 * Escape HTML special characters to prevent XSS.
 * @param {*} str
 * @returns {string}
 */
export function escapeHtml(str) {
  const s = String(str);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitize a CSS value to prevent style injection.
 * @param {*} value
 * @returns {string}
 */
export function sanitizeCssValue(value) {
  if (value === undefined || value === null || value === '') return '';
  const str = String(value);
  return str
    .replace(/[;{}]/g, '')
    .replace(/url\s*\(/gi, '')
    .replace(/expression\s*\(/gi, '')
    .replace(/-moz-binding\s*:/gi, '');
}

/**
 * Clamp a value between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Ensure a CSS dimension value has a unit.
 * @param {*} value
 * @returns {string}
 */
export function cssValue(value) {
  if (value === undefined || value === null || value === '') return '';
  const str = String(value);
  if (/^\d+(\.\d+)?$/.test(str)) return `${str}px`;
  return str;
}

/**
 * Check if user prefers reduced motion.
 * Safe for non-browser environments (SSR, tests) — returns false.
 * @returns {boolean}
 */
export function isReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

/**
 * Format a numeric value for display, removing floating-point noise.
 * Rounds to the specified number of decimal places (default 1) and strips
 * trailing zeros. Non-numeric values pass through unchanged.
 * @param {*} value - Value to format.
 * @param {number} [decimals=1] - Maximum decimal places to show.
 * @returns {string} Formatted string.
 */
export function formatNumericDisplay(value, decimals = 1) {
  if (value === null || value === undefined) return '--';
  if (typeof value !== 'number') return String(value);
  if (!isFinite(value)) return '--';
  return String(parseFloat(value.toFixed(decimals)));
}

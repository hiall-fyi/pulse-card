/**
 * @module shared/color
 * @description Shared colour parsing + interpolation for all Pulse Card family
 * members. Pure functions — hex / rgb string in, colour value out. No DOM, no
 * state.
 *
 * `parseHexColor` is the single parse core; the three card-specific output
 * shapes (rgb() for Bar gradients, #rrggbb for Climate band interpolation,
 * rgba() for Weather alpha washes) are thin wrappers built on it.
 */

/**
 * Parse a hex colour (`#rgb`, `#rrggbb`, or the same without the leading `#`)
 * into integer RGB channels. Returns null for any non-hex input (named
 * colours, `rgb()`, `hsl()`) so callers can branch / pass through.
 * @param {string} hex
 * @returns {{r:number, g:number, b:number}|null}
 */
export function parseHexColor(hex) {
  if (typeof hex !== 'string') return null;
  let h = hex.trim().replace(/^#/, '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  if (h.length !== 6 || /[^0-9a-f]/i.test(h)) return null;
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

/**
 * Linearly interpolate two channel triples at factor t (0..1).
 * @param {{r:number, g:number, b:number}} c1
 * @param {{r:number, g:number, b:number}} c2
 * @param {number} t
 * @returns {{r:number, g:number, b:number}}
 */
function mixChannels(c1, c2, t) {
  return {
    r: Math.round(c1.r + (c2.r - c1.r) * t),
    g: Math.round(c1.g + (c2.g - c1.g) * t),
    b: Math.round(c1.b + (c2.b - c1.b) * t),
  };
}

/**
 * Interpolate between two hex colours and return a CSS `rgb()` string.
 * Used by the Bar card's severity gradient. Returns empty string if either
 * input is not a parseable hex colour.
 * @param {string} hex1
 * @param {string} hex2
 * @param {number} t - Interpolation factor 0..1.
 * @returns {string} `rgb(r, g, b)` or empty string.
 */
export function mixToRgbString(hex1, hex2, t) {
  const c1 = parseHexColor(hex1);
  const c2 = parseHexColor(hex2);
  if (!c1 || !c2) return '';
  const { r, g, b } = mixChannels(c1, c2, t);
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Interpolate between two hex colours and return a `#rrggbb` string.
 * Used by the Climate card's temperature-band interpolation. Returns the
 * first input unchanged if either colour is not parseable.
 * @param {string} hex1
 * @param {string} hex2
 * @param {number} t - Interpolation factor 0..1.
 * @returns {string} `#rrggbb`.
 */
export function mixToHex(hex1, hex2, t) {
  const c1 = parseHexColor(hex1);
  const c2 = parseHexColor(hex2);
  if (!c1 || !c2) return hex1;
  const { r, g, b } = mixChannels(c1, c2, t);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Convert a colour to a CSS `rgba()` string with the given alpha.
 * Supports `#rgb`, `#rrggbb`, and `rgb(r,g,b)` inputs. Unknown / unsupported
 * formats (named colours, HSL, currentColor) fall through unchanged — callers
 * cannot expect those to carry an alpha override.
 * @param {string} color
 * @param {number} alpha - 0..1 (clamped).
 * @returns {string}
 */
export function hexToRgba(color, alpha) {
  if (typeof color !== 'string') return String(color);
  const a = Math.max(0, Math.min(1, Number(alpha)));
  const parsed = parseHexColor(color);
  if (parsed) return `rgba(${parsed.r},${parsed.g},${parsed.b},${a})`;
  const m = /^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(color.trim());
  if (m) return `rgba(${m[1]},${m[2]},${m[3]},${a})`;
  return color;
}

/**
 * @module pulse-weather/brand-mark
 * @description Pulse weather card brand mark — circle + horizon + dot,
 * with 4 condition variants. Renders as an inline SVG string for use
 * inside any section's top-right corner.
 */

const ACCENT = '#a83d2a';
const ACCENT_NIGHT = '#7a2d20';
const INK = '#fdf6e3';

const BASE_HEAD = '<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">';
const BASE_TAIL = '</svg>';

/**
 * Render the brand mark SVG for a given condition.
 *
 * The mark is always rendered with stable element classes (`.mc` for
 * the main circle, `.mh` for the horizon line, `.md` for the central
 * dot, `.mg` for any per-variant glyph). Default / pro fill state is
 * controlled entirely by CSS (see styles.js, Pro toggle
 * scaffolding) — this function never branches on toggle state.
 *
 * @param {'day'|'cloudy'|'rain'|'night'|string} variant
 * @returns {string} SVG markup as a string.
 */
export function brandMarkSvg(variant) {
  const v = ['day', 'cloudy', 'rain', 'night'].includes(variant) ? variant : 'day';

  const circleFill = v === 'night' ? ACCENT_NIGHT : ACCENT;
  const circle = `<circle class="mc" cx="20" cy="20" r="18" fill="${circleFill}" opacity="0.92"/>`;
  const horizon = `<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${INK}" stroke-width="0.8" opacity="0.85"/>`;

  let glyph = '';
  if (v === 'day') {
    glyph = `<circle class="md" cx="20" cy="14" r="2.4" fill="${INK}" opacity="0.95"/>`;
  } else if (v === 'cloudy') {
    glyph = `<circle class="md" cx="20" cy="14" r="2.4" fill="${INK}" opacity="0.45"/>`;
  } else if (v === 'rain') {
    glyph = [
      `<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${INK}" stroke-width="0.7" opacity="0.55"/>`,
      `<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${INK}" stroke-width="0.7" opacity="0.55"/>`,
      `<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${INK}" stroke-width="0.7" opacity="0.55"/>`,
    ].join('');
  } else if (v === 'night') {
    glyph =
      `<circle class="md" cx="20" cy="14" r="2.4" fill="${INK}" opacity="0.95"/>` +
      `<circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${ACCENT_NIGHT}"/>`;
  }

  return `${BASE_HEAD}${circle}${horizon}${glyph}${BASE_TAIL}`;
}

/**
 * Resolve a HA condition string to a brand-mark variant.
 * @param {string} condition - HA weather entity condition.
 * @param {boolean} isNight - Whether sun is below horizon.
 * @returns {'day'|'cloudy'|'rain'|'night'}
 */
export function brandMarkVariant(condition, isNight) {
  if (isNight) return 'night';
  if (['rainy', 'pouring', 'snowy', 'snowy-rainy', 'hail', 'lightning-rainy'].includes(condition)) {
    return 'rain';
  }
  if (['cloudy', 'fog'].includes(condition)) return 'cloudy';
  return 'day';
}

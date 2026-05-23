/**
 * @module pulse-weather/type-system
 * @description Single source of truth for the type system.
 *
 * Every text element in the weather sections is one of a small set
 * of canonical roles (kicker, hero-tier, narrative, gloss, meta,
 * stat-value, stat-label, chart-caption, data-token, ticker). Each
 * role pins a specific case + tracking + size + weight combination
 * so the sections read as one family.
 *
 * Role table (kept in sync with the .pw-t-* CSS in styles.js):
 *
 *   kicker         UPPERCASE 0.32em · kicker 12 · top-marg anchor
 *   hero-tier      Title Case        · title 32 / body-sm 14 · section hero label
 *   narrative      Sentence case     · body 17 · top-marg / sub-line narrative
 *   gloss          lowercase italic  · body-sm 14 · hero-condition gloss
 *   meta           Sentence italic   · micro 11 · meta caption under a chart
 *   stat-value     data              · caption 13 · numeric stat
 *   stat-label     lowercase 0.14em  · micro 11 · the label under a stat-value
 *   chart-caption  lowercase 0.14em  · micro 11 · header above a chart
 *   data-token     preserve          · micro 11 · chemical formulae, source acronyms
 *   ticker         UPPERCASE 0.08em  · caption 13 mono · airport ticker exception
 *
 * Section render functions should never write `font-size: 14px` or a
 * one-off `text-transform` rule. Reach for `t.*` instead, and if a new
 * role is needed, add it here and to styles.js together.
 */

import { escapeHtml, sanitizeCssValue } from '../shared/utils.js';

/**
 * Lowercase wrapper for narrative composition. The CSS already lowercases
 * via text-transform but composing strings directly with `text.toLowerCase()`
 * keeps screen-reader output and copy-paste consistent with what's seen.
 * Used by callers that mix narrative content into a stat label etc.
 * @param {string} text
 * @returns {string}
 */
export function lower(text) {
  return String(text || '').toLowerCase();
}

/**
 * The shared text builders. Every section should compose its DOM
 * from these instead of writing class names by hand.
 *
 * All builders escape their inputs except the `dataToken` builder, which
 * is intended for content like "PM2.5" / "O₃" that already comes from a
 * trusted constant, not user state.
 */
export const t = {
  /**
   * Section anchor — top-marg kicker.
   * @param {string} text
   * @returns {string}
   */
  kicker(text) {
    return `<div class="pw-t-kicker">${escapeHtml(text)}</div>`;
  },

  /**
   * Hero tier label (Atmosphere "Slight", Air quality "Moderate"). The
   * Atmosphere flavour is rendered at title size with `--accent` colour;
   * Air quality at body-sm. Pass `flavor: 'atmos'` to opt into the larger
   * hero treatment; default is the smaller AQI-style label.
   * @param {string} text
   * @param {{ flavor?: 'atmos'|'aqi', color?: string }} [opts]
   * @returns {string}
   */
  heroTier(text, { flavor = 'aqi', color = '' } = {}) {
    const cls = flavor === 'atmos' ? 'pw-t-hero-tier-atmos' : 'pw-t-hero-tier-aqi';
    const style = color ? ` style="color:${sanitizeCssValue(color)}"` : '';
    return `<div class="pw-t-hero-tier ${cls}"${style}>${escapeHtml(text)}</div>`;
  },

  /**
   * Display number (hero temp, AQI hero number). Numeric content; caller
   * controls colour via the `color` option.
   * @param {string|number} value
   * @param {{ color?: string, suffix?: string }} [opts]
   * @returns {string}
   */
  display(value, { color = '', suffix = '' } = {}) {
    const style = color ? ` style="color:${sanitizeCssValue(color)}"` : '';
    const suf = suffix ? `<span class="pw-t-display-suf">${escapeHtml(suffix)}</span>` : '';
    return `<div class="pw-t-display"${style}>${escapeHtml(String(value))}${suf}</div>`;
  },

  /**
   * Narrative line (Forecast "Warming through midweek"; Atmosphere
   * "Storm risk peaks 16:00…"). Sentence case content composed by the
   * caller — this builder doesn't transform case.
   * @param {string} text
   * @returns {string}
   */
  narrative(text) {
    return `<div class="pw-t-narrative">${escapeHtml(text)}</div>`;
  },

  /**
   * Italic gloss (Overview "partly cloudy · feels 23°"). Lowercase italic
   * body-sm with subtle tracking.
   * @param {string} text
   * @returns {string}
   */
  gloss(text) {
    return `<div class="pw-t-gloss">${escapeHtml(text)}</div>`;
  },

  /**
   * Italic meta caption (Atmosphere "six-hour outlook · pro overlay…").
   * Smaller than gloss, sits as a footer under a chart.
   * @param {string} text
   * @returns {string}
   */
  meta(text) {
    return `<div class="pw-t-meta">${escapeHtml(text)}</div>`;
  },

  /**
   * Chart caption (Pro view "7-day temperature trend"). Lowercase 0.14em
   * micro, intended to sit ABOVE the chart it labels.
   * @param {string} text
   * @returns {string}
   */
  chartCaption(text) {
    return `<div class="pw-t-chart-caption">${escapeHtml(text)}</div>`;
  },

  /**
   * Single stat tile = value on top, label under. Pass `data: true`
   * when the label is a chemical formula or other data token (PM2.5,
   * O₃, NO₂) — the CSS skips lowercase text-transform so the
   * formula renders as-given. The label is always HTML-escaped:
   * subscript / superscript characters survive escapeHtml unchanged,
   * so there's no need to bypass escaping for the visual to work.
   * @param {string|number} value
   * @param {string} label
   * @param {{ data?: boolean, valueColor?: string }} [opts]
   * @returns {string}
   */
  stat(value, label, { data = false, valueColor = '' } = {}) {
    const valueStyle = valueColor ? ` style="color:${sanitizeCssValue(valueColor)}"` : '';
    const labelClass = data ? 'pw-t-stat-l pw-t-data' : 'pw-t-stat-l';
    return `<div class="pw-t-stat">`
      + `<div class="pw-t-stat-v"${valueStyle}>${escapeHtml(String(value))}</div>`
      + `<div class="${labelClass}">${escapeHtml(label)}</div>`
      + `</div>`;
  },

  /**
   * Label-only stat (e.g. "golden", "blue" magic-hour markers).
   * @param {string} text
   * @returns {string}
   */
  statLabel(text) {
    return `<span class="pw-t-stat-l">${escapeHtml(text)}</span>`;
  },

  /**
   * Pre-trusted data token (chemical formula, sensor source acronym).
   * Caller is responsible for the value being safe — this builder
   * intentionally does NOT escape, so subscripts (O₃) and superscripts
   * survive.
   * @param {string} preEscaped
   * @returns {string}
   */
  dataToken(preEscaped) {
    return `<span class="pw-t-data">${preEscaped}</span>`;
  },

  /**
   * Hero block — heroTier + display value (with optional unit suffix)
   * + narrative line, all stacked + centred. Sections that need a
   * different rhythm (e.g. left-aligned, no narrative) compose the
   * primitives manually instead.
   *
   * @param {object} opts
   * @param {string} [opts.tier] - heroTier label (omit for no tier).
   * @param {'atmos'|'aqi'} [opts.tierFlavor] - heroTier flavour.
   * @param {string} [opts.tierColor] - heroTier colour override.
   * @param {string|number} [opts.value] - display number.
   * @param {string} [opts.valueSuffix] - unit suffix on the display.
   * @param {string} [opts.valueColor] - display colour override.
   * @param {string} [opts.narrative] - narrative line under the value.
   * @returns {string}
   */
  heroBlock({ tier = '', tierFlavor = 'aqi', tierColor = '', value = '', valueSuffix = '', valueColor = '', narrative = '' } = {}) {
    const tierHtml = tier ? this.heroTier(tier, { flavor: tierFlavor, color: tierColor }) : '';
    const valueHtml = value !== '' ? this.display(value, { color: valueColor, suffix: valueSuffix }) : '';
    const narrativeHtml = narrative ? this.narrative(narrative) : '';
    return `<div class="pw-hero-block">${tierHtml}${valueHtml}${narrativeHtml}</div>`;
  },

  /**
   * Stats row — grid of stat tiles emitted by `t.stat(...)`. Wrapper
   * uses the shared `.pulse-stats-row` class with `data-cols` /
   * `data-divided` attributes so layout is the same across cards.
   *
   * @param {Array<string>} stats - HTML fragments from t.stat(...).
   * @param {object} [opts]
   * @param {3|4} [opts.columns] - column count (default 4).
   * @param {boolean} [opts.divided] - top hairline divider (default false).
   * @returns {string}
   */
  statsRow(stats, { columns = 4, divided = false } = {}) {
    const filtered = stats.filter(Boolean);
    if (!filtered.length) return '';
    return `<div class="pulse-stats-row" data-cols="${columns}"${divided ? ' data-divided="true"' : ''}>${filtered.join('')}</div>`;
  },
};

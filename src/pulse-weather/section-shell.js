/**
 * @module pulse-weather/section-shell
 * @description Shared cartouche shell for weather sections.
 *
 * Builds the standard cartouche envelope (frame, brand-mark corner
 * button, content slot, optional kicker + narrative top-marg, optional
 * pre-content wash/effect layer).
 *
 * Sections that have a pro view pass both `body` (default) and
 * `proView`; the shell wraps each in `.pw-view-default` / `.pw-view-pro`
 * and the [data-pro] CSS rules in styles.js handle the swap. Sections
 * without a pro view pass only `body` — the shell renders it directly
 * and the `data-pro` attribute has no effect.
 */

import { brandMarkSvg } from './brand-mark.js';
import { escapeHtml } from '../shared/utils.js';
import { t } from './type-system.js';

/* sectionStyle reaches this shell already sanitised — callers run sanitizeCssValue. */

/**
 * Render a v2 cartouche section shell.
 *
 * @param {object} ctx
 * @param {string} ctx.sectionClass - Per-section class, e.g. 'pw-meteogram-v2'.
 * @param {string} ctx.ariaLabel - role="region" aria-label.
 * @param {string} ctx.brandVariant - brandMarkVariant() result.
 * @param {string} [ctx.kicker] - Optional kicker text.
 * @param {string} [ctx.narrative] - Optional narrative line under the kicker.
 * @param {string} [ctx.preContent] - Optional HTML before .pw-content (cloud bg, tension wash).
 * @param {string} [ctx.extraSectionClass] - Extra class for the section root (severity tone, etc).
 * @param {string} [ctx.sectionStyle] - Optional inline style for the section root.
 * @param {string} ctx.body - Default-view content.
 * @param {string} [ctx.proView] - Pro-view content. When present, the shell wraps both views.
 * @param {boolean} [ctx.proInitial] - Initial data-pro state (default false). Sections like
 *   Wind that drive the mark from a config field set this each render so the visual stays
 *   in sync with the underlying setting.
 * @param {'view-swap'|'wind-mode'|'meteo-horizon'|'aqi-scale'} [ctx.proAction] - What the click handler should do.
 *   `view-swap` (default): flip data-pro on the section root, CSS swaps the views.
 *   `wind-mode`: dispatch a config update (speed_mode toggle) and trigger a full re-render.
 *   `meteo-horizon`: dispatch a config update (horizon 'short' ↔ 'long') and trigger a full re-render.
 *   `aqi-scale`: dispatch a config update (scale 'eu' ↔ 'us') and trigger a full re-render.
 * @param {string} [ctx.proAriaLabel] - aria-label for the brand-mark button. Defaults
 *   to "Toggle pro view"; Wind uses "Toggle speed and gust mode".
 * @param {boolean} [ctx.pro] - Set to false to demote the brand-mark to a
 *   non-interactive div (drops both proView and any custom proAction).
 *   Sections forward `config.pro !== false` so users can opt out per-section
 *   in YAML without losing the visual brand mark.
 * @returns {string} HTML string.
 */
export function renderSectionShell({
  sectionClass,
  ariaLabel,
  brandVariant,
  kicker = '',
  narrative = '',
  preContent = '',
  extraSectionClass = '',
  sectionStyle = '',
  body,
  proView = '',
  proInitial = false,
  proAction = 'view-swap',
  proAriaLabel = 'Toggle pro view',
  pro = true,
}) {
  /* Per-section opt-out (`pro: false` in YAML): drop the toggle entirely by
     clearing proView and forcing the default action. The isInteractive check
     below then demotes the brand mark to a static div. */
  if (pro === false) {
    proView = '';
    proAction = 'view-swap';
    proInitial = false;
  }
  const sectionStyleAttr = sectionStyle ? ` style="${sectionStyle}"` : '';
  const rootClass = `pw-section pw-cartouche ${sectionClass}${extraSectionClass ? ` ${extraSectionClass}` : ''}`;
  const markSvg = brandMarkSvg(brandVariant);
  const margBody = [
    kicker ? t.kicker(kicker) : '',
    narrative ? t.narrative(narrative) : '',
  ].filter(Boolean).join('');
  const margHtml = margBody
    ? `<div class="pw-t-marg">${margBody}</div>`
    : '';
  /* Brand mark becomes an interactive button when the section either provides a
     proView (view-swap action) OR opts into a custom action (e.g. Wind's
     wind-mode toggle). Otherwise it stays a non-interactive div. */
  const hasPro = Boolean(proView);
  const isInteractive = hasPro || proAction !== 'view-swap';
  const viewBody = hasPro
    ? `<div class="pw-view pw-view-default">${body}</div><div class="pw-view pw-view-pro">${proView}</div>`
    : body;
  const proStr = proInitial ? 'true' : 'false';
  const brandCorner = isInteractive
    ? `<button class="pw-brand-mark-corner" aria-label="${escapeHtml(proAriaLabel)}" aria-pressed="${proStr}" type="button">${markSvg}</button>`
    : `<div class="pw-brand-mark-corner" aria-hidden="true">${markSvg}</div>`;
  return `
    <div class="${rootClass}" data-pro="${proStr}" data-pro-action="${proAction}"${sectionStyleAttr} role="region" aria-label="${escapeHtml(ariaLabel)}">
      ${preContent}
      ${brandCorner}
      <div class="pw-content">
        ${margHtml}
        ${viewBody}
      </div>
    </div>`;
}

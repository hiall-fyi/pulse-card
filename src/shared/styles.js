/**
 * @module shared/styles
 * @description Shared CSS design tokens and utility classes for all Pulse Card
 * family members. Defines the visual identity system — theme colors, glass
 * panels, typography scale, shape, spacing, and interactive state patterns.
 *
 * Token categories:
 * - **Theme colors** — text, backgrounds, borders, accent, status, disabled
 * - **Glass panel** — frosted glass overlay (background, blur, border)
 * - **Typography** — semantic font-size scale and weight tokens
 * - **Shape** — border-radius tokens for cards, panels, bars, pills
 * - **Spacing** — gap tokens for card, section, element, tight
 *
 * Usage: import and prepend to each card's own STYLES export.
 * ```js
 * import { SHARED_STYLES } from '../shared/styles.js';
 * export const STYLES = `${SHARED_STYLES} ...card-specific CSS...`;
 * ```
 *
 * Override cascade:
 * 1. SHARED_STYLES `:host` defines defaults via `var(--ha-*, fallback)`
 * 2. Card's own `:host` block can override any `--pulse-*` token
 * 3. User's HA theme or card-mod can override any `--pulse-*` token
 */

/**
 * Shared CSS design tokens and utility classes for all Pulse cards.
 * @type {string}
 */
export const SHARED_STYLES = `
/* ══════════════════════════════════════════════════════════════════
 * Pulse Card Family — Shared Design Tokens
 * ══════════════════════════════════════════════════════════════════ */

:host {
  /* ── Text ──────────────────────────────────────────────────────── */
  --pulse-text-primary: var(--primary-text-color);
  --pulse-text-secondary: var(--secondary-text-color);
  --pulse-text-disabled: var(--disabled-text-color, var(--secondary-text-color));

  /* ── Backgrounds ───────────────────────────────────────────────── */
  --pulse-bg-card: var(--ha-card-background, var(--card-background-color));
  --pulse-bg-secondary: var(--secondary-background-color);
  --pulse-bg-elevated: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-bg-hover: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
  --pulse-bg-selected: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent);

  /* ── Borders ───────────────────────────────────────────────────── */
  --pulse-border-divider: var(--divider-color);
  --pulse-border-subtle: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-border-medium: color-mix(in srgb, var(--primary-text-color) 10%, transparent);

  /* ── Accent ────────────────────────────────────────────────────── */
  --pulse-accent: var(--primary-color, #03A9F4);

  /* ── Status ────────────────────────────────────────────────────── */
  --pulse-status-green: var(--label-badge-green, #4CAF50);
  --pulse-status-red: var(--label-badge-red, #F44336);
  --pulse-status-yellow: var(--label-badge-yellow, #FF9800);

  /* ── Disabled ──────────────────────────────────────────────────── */
  --pulse-disabled: var(--disabled-color, #bdbdbd);

  /* ── Glass Panel ───────────────────────────────────────────────── */
  --pulse-glass-bg: var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75)));
  --pulse-glass-blur: 8px;
  --pulse-glass-border: transparent;

  /* ── Typography Scale ──────────────────────────────────────────── */
  --pulse-font-title: 16px;
  --pulse-font-body: 14px;
  --pulse-font-label: 11px;
  --pulse-font-caption: 10px;
  --pulse-font-micro: 9px;

  /* ── Font Weights ──────────────────────────────────────────────── */
  --pulse-weight-hero: 100;
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* ── Border Radius ─────────────────────────────────────────────── */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-small: 4px;
  --pulse-radius-pill: 6px;
  --pulse-radius-bar: 2px;

  /* ── Spacing ───────────────────────────────────────────────────── */
  --pulse-space-card: 16px;
  --pulse-space-section: 12px;
  --pulse-space-element: 8px;
  --pulse-space-tight: 4px;
}

/* ══════════════════════════════════════════════════════════════════
 * Utility Classes
 * ══════════════════════════════════════════════════════════════════ */

/* Card title — 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label — uppercase, small, secondary */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* Glass panel — frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stat value — light weight, tabular numbers */
.pulse-stat-value {
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}

/* Stat label — caption size, uppercase */
.pulse-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Interactive base — pointer, tap-highlight, focus ring */
.pulse-interactive {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

.pulse-interactive:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}

/* Unavailable / disabled state */
.pulse-unavailable {
  opacity: 0.5;
}

/* Hero value — ultra-thin weight for large numbers (Dark Sky DNA) */
.pulse-hero-value {
  font-weight: var(--pulse-weight-hero, 100);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

/* Flat stats row — Dark Sky style, border-top separator */
.pulse-stats-row {
  display: flex;
  justify-content: space-between;
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}

.pulse-stats-row .stat {
  flex: 1;
  text-align: center;
}

/* Ultra-muted label */
.pulse-muted-label {
  color: var(--pulse-text-secondary);
  opacity: 0.25;
}

/* Precipitation bar — Dark Sky signature element */
.pulse-precip-bar {
  height: 32px;
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-pill);
  display: flex;
  overflow: hidden;
}

.pulse-precip-slot {
  flex: 1;
  position: relative;
}

.pulse-precip-fill {
  position: absolute;
  bottom: 0;
  left: 1px;
  right: 1px;
  border-radius: 2px 2px 0 0;
  background: #5ac8fa;
}
`;

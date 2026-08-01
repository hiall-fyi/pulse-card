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
  --pulse-status-blue: var(--label-badge-blue, #2196F3);

  /* ── Info / Disabled ───────────────────────────────────────────── */
  --pulse-info-color: var(--info-color, #5AC8FA);
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
  --pulse-weight-thin: 200;
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* ── Extended typography scale ─────────────────────────────────── */
  --pulse-font-display: 64px;        /* Weather hero temp; future Climate display numbers */
  --pulse-font-hero: 32px;           /* Climate radial centre; secondary hero */
  --pulse-font-summary: 24px;        /* summary stat numbers (home-status, ranking) */
  --pulse-font-large: 20px;          /* large hero-adjacent numbers (zone pulse, home-status label) */
  --pulse-font-stat: 18px;           /* mid-emphasis stat values (flow temp, home-status zone actual) */
  --pulse-font-section-title: 17px;  /* Weather pw-status-label equivalent */
  --pulse-font-kicker: 12px;         /* uppercase top-of-section labels */

  /* ── Letter-spacing scale ──────────────────────────────────────── */
  --pulse-ls-display: -1.5px;
  --pulse-ls-hero: -1px;
  --pulse-ls-title: -0.8px;
  --pulse-ls-kicker: 0.32em;
  --pulse-ls-micro: 0.14em;

  /* ── Tier colours (Apple system, promoted from Weather) ──────── */
  --pulse-tier-calm: #5ac8fa;
  --pulse-tier-moderate: #30d158;
  --pulse-tier-strong: #ff9f0a;
  --pulse-tier-gale: #ff453a;

  /* ── Border Radius ─────────────────────────────────────────────── */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-cartouche: 24px;            /* outer frame on Climate hearth + Weather cartouche */
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-pill: 6px;
  --pulse-radius-small: 4px;
  --pulse-radius-tight: 3px;                 /* state tags, slim chips */
  --pulse-radius-bar: 2px;
  --pulse-radius-hairline: 1px;              /* sub-pixel cells, day arc, slot bars */
  --pulse-radius-circle: 50%;                /* dots, donut centres, circular markers */

  /* ── Spacing ───────────────────────────────────────────────────── */
  --pulse-space-card-wide: 20px;     /* weather chrome — wider inset for hero/cartouche layouts */
  --pulse-space-card: 16px;          /* card-edge padding, section margins */
  --pulse-space-panel: 14px;         /* glass-panel inner pad, cartouche inset */
  --pulse-space-section: 12px;       /* between section blocks */
  --pulse-space-row: 10px;           /* between row items */
  --pulse-space-element: 8px;        /* between elements within a row */
  --pulse-space-chip: 6px;           /* chip gap, dense flex gap */
  --pulse-space-tight: 4px;          /* labels, status tags */
  --pulse-space-hairline: 2px;       /* sub-pixel cell gaps, micro padding */
  --pulse-space-pin: 1px;            /* one-pixel anchor offsets */

  /* ── Animation timing ──────────────────────────────────────────── */
  --pulse-anim-instant: 0.05s;     /* flash, sub-frame feedback */
  --pulse-anim-fast: 0.15s;        /* hover backgrounds, ripple onset */
  --pulse-anim-base: 0.2s;         /* default colour / opacity transitions */
  --pulse-anim-medium: 0.25s;      /* transform / font-size easing */
  --pulse-anim-mode: 0.3s;         /* mode swap, max-height reveal */
  --pulse-anim-slow: 0.35s;        /* expand panels, large transitions */
  --pulse-anim-color: 0.4s;        /* slow colour cross-fade */
  --pulse-anim-reveal: 0.6s;       /* bar-width fills, sparkline grow */
  --pulse-anim-fill: 0.8s;         /* heating bar width grow */
}

/* ══════════════════════════════════════════════════════════════════
 * Utility Classes
 * ══════════════════════════════════════════════════════════════════ */

/* Keyboard focus ring for every focusable element in the family. Keyed off
   [tabindex] so anything focusable is covered, whether the attribute comes from
   markup or from makeActivatable at runtime.

   No border-radius: an outline already follows the element's own radius, so
   declaring one here would reshape the element while focused. */
:host [tabindex]:focus-visible,
:host([tabindex]):focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}

/* Card title — 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label — uppercase, small, secondary tone.
   No opacity multiplier: --pulse-text-secondary is already the dimmed token,
   stacking 0.7 on top dropped light-theme contrast below WCAG-large threshold. */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
}

/* Glass panel — frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stats row — grid layout primitive shared across the Pulse card
   family. Children are stat tiles emitted by each card's own type
   builder (e.g. pulse-weather's pt.stat). The row controls only
   layout: column count, divider, gap, margin.
   - data-cols: "3" | "4" — column count (default 4)
   - data-divided: "true" — adds a 1px hairline at the top so the row
     reads as a footer rather than a flush block. */
.pulse-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--pulse-space-tight) var(--pulse-space-element);
  margin-top: var(--pulse-space-section);
}
.pulse-stats-row[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pulse-stats-row[data-divided="true"] {
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}
`;

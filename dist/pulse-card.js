var $e=`
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pulse Card Family: Shared Design Tokens
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

:host {
  /* \u2500\u2500 Text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-text-primary: var(--primary-text-color);
  --pulse-text-secondary: var(--secondary-text-color);
  --pulse-text-disabled: var(--disabled-text-color, var(--secondary-text-color));

  /* \u2500\u2500 Backgrounds \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-bg-card: var(--ha-card-background, var(--card-background-color));
  --pulse-bg-secondary: var(--secondary-background-color);
  --pulse-bg-elevated: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-bg-hover: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
  --pulse-bg-selected: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent);

  /* \u2500\u2500 Borders \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-border-divider: var(--divider-color);
  --pulse-border-subtle: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-border-medium: color-mix(in srgb, var(--primary-text-color) 10%, transparent);

  /* \u2500\u2500 Accent \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-accent: var(--primary-color, #03A9F4);

  /* \u2500\u2500 Status \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-status-green: var(--label-badge-green, #4CAF50);
  --pulse-status-red: var(--label-badge-red, #F44336);
  --pulse-status-yellow: var(--label-badge-yellow, #FF9800);
  --pulse-status-blue: var(--label-badge-blue, #2196F3);

  /* \u2500\u2500 Info / Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-info-color: var(--info-color, #5AC8FA);
  --pulse-disabled: var(--disabled-color, #bdbdbd);

  /* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-glass-bg: var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75)));
  --pulse-glass-blur: 8px;
  --pulse-glass-border: transparent;

  /* \u2500\u2500 Typography Scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-title: 16px;
  --pulse-font-body: 14px;
  --pulse-font-label: 11px;
  --pulse-font-caption: 10px;
  --pulse-font-micro: 9px;

  /* \u2500\u2500 Font Weights \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-weight-hero: 100;
  --pulse-weight-thin: 200;
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Extended typography scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-display: 64px;        /* Weather hero temp; future Climate display numbers */
  --pulse-font-hero: 32px;           /* Climate radial centre; secondary hero */
  --pulse-font-summary: 24px;        /* summary stat numbers (home-status, ranking) */
  --pulse-font-large: 20px;          /* large hero-adjacent numbers (zone pulse, home-status label) */
  --pulse-font-stat: 18px;           /* mid-emphasis stat values (flow temp, home-status zone actual) */
  --pulse-font-section-title: 17px;  /* Weather pw-status-label equivalent */
  --pulse-font-kicker: 12px;         /* uppercase top-of-section labels */

  /* \u2500\u2500 Letter-spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-ls-display: -1.5px;
  --pulse-ls-hero: -1px;
  --pulse-ls-title: -0.8px;
  --pulse-ls-kicker: 0.32em;
  --pulse-ls-micro: 0.14em;

  /* \u2500\u2500 Tier colours (Apple system, promoted from Weather) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-tier-calm: #5ac8fa;
  --pulse-tier-moderate: #30d158;
  --pulse-tier-strong: #ff9f0a;
  --pulse-tier-gale: #ff453a;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card-wide: 20px;     /* weather chrome: wider inset for hero/cartouche layouts */
  --pulse-space-card: 16px;          /* card-edge padding, section margins */
  --pulse-space-panel: 14px;         /* glass-panel inner pad, cartouche inset */
  --pulse-space-section: 12px;       /* between section blocks */
  --pulse-space-row: 10px;           /* between row items */
  --pulse-space-element: 8px;        /* between elements within a row */
  --pulse-space-chip: 6px;           /* chip gap, dense flex gap */
  --pulse-space-tight: 4px;          /* labels, status tags */
  --pulse-space-hairline: 2px;       /* sub-pixel cell gaps, micro padding */
  --pulse-space-pin: 1px;            /* one-pixel anchor offsets */

  /* \u2500\u2500 Animation timing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Utility Classes
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

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

/* Card title: 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label: uppercase, small, secondary tone.
   No opacity multiplier: --pulse-text-secondary is already the dimmed token,
   stacking 0.7 on top dropped light-theme contrast below WCAG-large threshold. */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
}

/* Glass panel: frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stats row: grid layout primitive shared across the Pulse card
   family. Children are stat tiles emitted by each card's own type
   builder (e.g. pulse-weather's pt.stat). The row controls only
   layout: column count, divider, gap, margin.
   - data-cols: "3" | "4": column count (default 4)
   - data-divided: "true": adds a 1px hairline at the top so the row
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
`;var pr=`${$e}
  :host {
    display: block;

    /* Card-local design tokens, override via card-mod or HA theme.
       Family-shared concerns live on --pulse-* via SHARED_STYLES. */
    --pb-columns: 1;
    --pb-track-opacity: 0.12;
    --pb-animation-speed: var(--pulse-anim-fill);
  }

  ha-card {
    overflow: hidden;
    padding: var(--pulse-space-card);
    background: var(--pulse-bg-card);
    container-type: inline-size;
  }

  .pb-card {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-space-element, 12px);
  }

  /* Multi-column grid, responsive: auto-collapse on narrow screens */
  .pb-card[class*="columns-"] {
    display: grid;
    grid-template-columns: repeat(var(--pb-columns), 1fr);
    gap: var(--pulse-space-element, 16px);
  }

  @container (max-width: 300px) {
    .pb-card[class*="columns-"] {
      grid-template-columns: 1fr;
    }
  }

  /* Bar row, one per entity */
  .pb-row {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-space-chip);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  /* Labels row (outside mode, default) */
  .pb-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px;
  }

  .pb-label-left, .pb-label-right {
    display: flex;
    align-items: center;
    gap: var(--pulse-space-chip);
  }

  .pb-label-left {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .pb-name {
    font-size: var(--pulse-font-body);
    color: var(--pulse-text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pb-value {
    font-size: var(--pulse-font-body);
    font-weight: var(--pulse-weight-medium);
    color: var(--pulse-text-primary);
    white-space: nowrap;
  }

  /* Stacks the optional target-label row above the bar container, so the
     label gets real layout height instead of a clipped negative offset. */
  .pb-bar-stack {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* Reserves the height .pb-target-label sits in. */
  .pb-target-label-row {
    position: relative;
    height: 14px;
    margin-bottom: 2px;
  }

  /* Bar container */
  .pb-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    container-type: size;
  }

  /* Track (background) */
  .pb-track {
    position: absolute;
    inset: 0;
    background: var(--pulse-accent);
    opacity: var(--pb-track-opacity);
    border-radius: inherit;
  }

  /* Fill */
  .pb-fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--pulse-accent);
    border-radius: inherit;
    transition: width var(--pb-animation-speed) ease,
                background-color var(--pulse-anim-mode) ease;
  }

  /* Content overlay (classic/inside mode) */
  .pb-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 100%;
    z-index: 3;
    /* Auto-scale font to bar height: 30% of container, clamped 10px\u201316px */
    font-size: var(--pulse-font-body, clamp(10px, 40cqh, 16px));
  }

  /* Target marker, visually distinct from fill */
  .pb-target {
    position: absolute;
    top: -1px;
    bottom: -1px;
    width: 2px;
    background: var(--pulse-text-primary);
    opacity: 0.6;
    border-radius: var(--pulse-radius-hairline);
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 0 0 1px var(--pulse-bg-card);
  }

  /* Target label. left is set inline per-instance, matching .pb-target's own. */
  .pb-target-label {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    font-size: var(--pulse-font-caption);
    font-weight: var(--pulse-weight-medium);
    color: var(--pulse-text-primary);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0.7;
  }

  /* Indicator */
  .pb-indicator {
    font-size: var(--pulse-font-kicker);
    font-weight: var(--pulse-weight-medium);
    color: var(--pb-indicator-color);
  }
  .pb-indicator.up { color: var(--pb-indicator-color, var(--pulse-status-green)); }
  .pb-indicator.down { color: var(--pb-indicator-color, var(--pulse-status-red)); }
  .pb-indicator.neutral { color: var(--pb-indicator-color, var(--pulse-text-secondary)); }

  /* Inverted indicator: up is bad, down is good (CPU, memory, disk usage) */
  .pb-indicator.inverted.up { color: var(--pb-indicator-color, var(--pulse-status-red)); }
  .pb-indicator.inverted.down { color: var(--pb-indicator-color, var(--pulse-status-green)); }

  /* Icon */
  .pb-icon {
    --mdc-icon-size: 1.3em;
    font-size: var(--pulse-font-body);
    color: var(--pulse-text-secondary);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    line-height: 0;
  }
  .pb-content .pb-icon {
    color: var(--pulse-text-primary);
  }

  /* Unavailable state */
  .pb-row.unavailable .pb-fill {
    background: var(--pulse-disabled) !important;
    width: 100% !important;
    opacity: 0.2;
  }
  .pb-row.unavailable .pb-name,
  .pb-row.unavailable .pb-value {
    opacity: 0.5;
  }

  /* Charge animation */
  @keyframes pb-charge {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }
  .pb-fill.charge {
    animation: pb-charge 2s ease-in-out infinite;
  }

  /* Entity row mode */
  .entity-row {
    padding: 8px 0;
  }

  /* Title: adds layout padding on top of shared typography. */
  .pulse-title { padding-bottom: 4px; }

  /* Hover feedback */
  .pb-row:not(.has-ripple):active {
    opacity: 0.8;
  }
  @media (hover: hover) {
    .pb-row:hover .pb-fill {
      filter: brightness(1.1);
    }
  }

  /* Secondary info group: wraps name + secondary line */
  .pb-name-group {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: var(--pulse-space-pin);
  }

  /* Secondary info text */
  .pb-secondary {
    font-size: 0.75em;
    opacity: 0.85;
    color: var(--pulse-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Inside bar: inherit text color from parent, reduce opacity */
  .pb-content .pb-secondary {
    color: inherit;
    opacity: 0.6;
  }

  /* Sparkline overlay */
  .pb-sparkline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.45;
    color: var(--pb-sparkline-color, var(--pulse-text-primary));
  }
  .pb-sparkline path {
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Interactive slider bars */
  .pb-row[data-interactive] .pb-container {
    touch-action: none;
    cursor: pointer;
  }
  .pb-row[data-interactive].sliding .pb-container {
    cursor: grabbing;
  }
  .pb-row[data-interactive].sliding .pb-fill {
    transition: none;
  }

  /* Step buttons for interactive bars */
  .pb-step-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    min-width: 28px;
    height: 100%;
    cursor: pointer;
    opacity: 0.6;
    color: var(--pulse-text-primary);
    font-size: var(--pulse-font-stat);
    font-weight: var(--pulse-weight-medium);
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    overflow: hidden;
    transition: opacity var(--pulse-anim-fast);
  }
  .pb-step-btn:hover {
    opacity: 1;
  }
  .pb-step-btn:not(.has-ripple):active {
    opacity: 0.4;
  }

  /* Interactive bar row layout: pb-container between step buttons */
  .pb-row[data-interactive] .pb-interactive-row {
    display: flex;
    align-items: stretch;
    gap: var(--pulse-space-hairline);
  }
  .pb-row[data-interactive] .pb-interactive-row .pb-bar-stack {
    flex: 1;
    min-width: 0;
  }

  /* Compact mode */
  ha-card:has(.compact) {
    padding: var(--pulse-space-row);
  }
  .pb-card.compact {
    gap: var(--pulse-space-element, 6px);
  }
  .compact .pb-row {
    gap: var(--pulse-space-tight);
  }
  .compact .pb-labels {
    padding: 0;
  }
  .compact .pb-name {
    font-size: var(--pulse-font-body, 12px);
  }
  .compact .pb-value {
    font-size: var(--pulse-font-body, 12px);
  }
  .compact .pb-indicator {
    font-size: var(--pulse-font-caption);
  }

  /* !important: .pb-fill's width transition is driven by an inline
     --pb-animation-speed, which outranks a plain declaration. */
  @media (prefers-reduced-motion: reduce) {
    :host,
    :host *,
    :host *::before,
    :host *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;var Se="1.10.0";var dr=Se,ur="Pulse Card:",It={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function f(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(t){return t==null||t===""?"":String(t).replace(/[;{}&"'`<>\\\u0000-\u001f\u007f]/g,"").replace(/(url|expression)(?:\s*\()+/gi,"$1").replace(/(-moz-binding)(?:\s*:)+/gi,"$1")}function Tt(t,e,o){return Math.min(Math.max(t,e),o)}function de(t){return{columns:12,min_columns:t,rows:"auto"}}var ll=32;function ke(t){if(t==null||t==="")return"";let e=String(t);if(e.length>ll)return e;let o=e.split(".");if(o.length>2)return e;for(let n of o){if(n.length===0)return e;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r<48||r>57)return e}}return`${e}px`}function mt(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function ht(t,e=1){return t==null?"--":typeof t!="number"?String(t):isFinite(t)?String(parseFloat(t.toFixed(e))):"--"}function it(t){let e=t?.config?.time_zone;if(e&&t?.locale?.time_zone!=="local")return e}function Ht(t,e,o){return!t||isNaN(t.getTime())?"":new Intl.DateTimeFormat("en-GB",{...o,timeZone:e}).format(t)}function G(t,e){return Ht(t,e,{hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}function bo(t){return(e,...o)=>console.warn(`${t} ${e}`,...o)}var cl=new Set(["unavailable","unknown","error"]);function Q(t){return t?cl.has(t.state??""):!0}var In="\xB0C";function wo(t){let e=t?.config?.unit_system?.temperature;In=typeof e=="string"&&e?e:"\xB0C"}function pt(t){return t?.unit_of_measurement||t?.temperature_unit||In}var Ln=()=>In.includes("F");function Ze(t){return Ln()&&Number.isFinite(t)?(t-32)*5/9:t}function ee(t){return Ln()&&Number.isFinite(t)?t*9/5+32:t}function Xt(t){return Ln()&&Number.isFinite(t)?t*1.8:t}var Fn=0;function Te(t="pulse-id"){return Fn=Fn+1>>>0,`${t}-${Fn.toString(36)}`}var vo="Pulse sparkline:";async function Ye(t,e,o=24){let n={};if(!t?.callWS||e.length===0)return n;let i=new Date,r=new Date(i.getTime()-o*60*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let s of e)try{let l=a?.[s];if(!l||l.length<2){n[s]=[];continue}let p=[];for(let d of l){let c=parseFloat(d.s);if(!isNaN(c)){let m=d.lu??d.last_updated,u=typeof m=="number"?m*1e3:new Date(m).getTime();isFinite(u)&&p.push({t:u,v:c})}}n[s]=p}catch(l){console.warn(`${vo} parse failed for %s: %O`,s,l),n[s]=[]}}catch(a){console.warn(`${vo} fetch failed: %O`,a);for(let s of e)n[s]=[]}return n}async function hr(t,e,o=24){let n={};if(!t?.callWS||e.length===0)return n;let i=new Date,r=new Date(i.getTime()-o*60*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!1});for(let s of e)try{let l=a?.[s];if(!Array.isArray(l)||l.length===0){n[s]=[];continue}let p=[];for(let d of l){let c=d.lu??d.last_updated,m=typeof c=="number"?c*1e3:new Date(c).getTime();if(!isFinite(m))continue;let u=String(d.s??d.state??"").toLowerCase(),h="idle";u==="heat"||u==="heating"?h="heating":u==="cool"||u==="cooling"?h="cooling":u==="off"&&(h="off");let g=h==="heating"||h==="cooling"?50:0;p.push({t:m,state:h,power:g})}n[s]=p}catch(l){console.warn(`${vo} state-history parse failed for %s: %O`,s,l),n[s]=[]}}catch(a){console.warn(`${vo} state-history fetch failed: %O`,a);for(let s of e)n[s]=[]}return n}var mr={avg:t=>t.reduce((e,o)=>e+o,0)/t.length,min:t=>Math.min(...t),max:t=>Math.max(...t),median:t=>{let e=[...t].sort((n,i)=>n-i),o=Math.floor(e.length/2);return e.length%2?e[o]:(e[o-1]+e[o])/2},first:t=>t[0],last:t=>t[t.length-1],sum:t=>t.reduce((e,o)=>e+o,0),delta:t=>Math.max(...t)-Math.min(...t),diff:t=>t[t.length-1]-t[0]};function pl(t,e,o="avg"){if(t.length===0||e<1)return[];if(t.length<=e){let c=t[0].t,m=t[t.length-1].t-c||1;return t.map(u=>({x:(u.t-c)/m,v:u.v}))}let n=mr[o]||mr.avg,i=t[0].t,s=(t[t.length-1].t-i||1)/e,l=[],p=0,d=t[0].v;for(let c=0;c<e;c++){let m=i+(c+1)*s,u=[];for(;p<t.length&&t[p].t<m;)u.push(t[p].v),p++;u.length>0&&(d=n(u)),l.push({x:c/(e-1||1),v:d})}return l}function yo(t,e,o,n=24,i="avg",r=!0){if(t.length<2)return"";let a=pl(t,n,i);if(a.length<2)return"";let s=a[0].v,l=a[0].v;for(let u=1;u<a.length;u++)a[u].v<s&&(s=a[u].v),a[u].v>l&&(l=a[u].v);let p=l-s||1,d=2,c=o-d*2,m=a.map(u=>({x:u.x*e,y:d+c-(u.v-s)/p*c}));return Nn(m,r)}function Nn(t,e=!0){if(!t||t.length<2)return"";if(t.length===2||!e){let i=`M${t[0].x.toFixed(1)},${t[0].y.toFixed(1)}`;for(let r=1;r<t.length;r++)i+=`L${t[r].x.toFixed(1)},${t[r].y.toFixed(1)}`;return i}let o=t[0],n=`M${o.x.toFixed(1)},${o.y.toFixed(1)}`;for(let i=1;i<t.length;i++){let r=t[i],a=(o.x+r.x)/2,s=(o.y+r.y)/2;n+=` ${a.toFixed(1)},${s.toFixed(1)}`,n+=` Q${r.x.toFixed(1)},${r.y.toFixed(1)}`,o=r}return n+=` ${o.x.toFixed(1)},${o.y.toFixed(1)}`,n}function Ae(t){if(typeof t!="string")return null;let e=t.trim().replace(/^#/,"");return e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6||/[^0-9a-f]/i.test(e)?null:{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}function fr(t,e,o){return{r:Math.round(t.r+(e.r-t.r)*o),g:Math.round(t.g+(e.g-t.g)*o),b:Math.round(t.b+(e.b-t.b)*o)}}function gr(t,e,o){let n=Ae(t),i=Ae(e);if(!n||!i)return"";let{r,g:a,b:s}=fr(n,i,o);return`rgb(${r}, ${a}, ${s})`}function vr(t,e,o){let n=Ae(t),i=Ae(e);if(!n||!i)return t;let{r,g:a,b:s}=fr(n,i,o);return`#${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`}function oe(t,e){if(typeof t!="string")return String(t);let o=Math.max(0,Math.min(1,Number(e))),n=Ae(t);if(n)return`rgba(${n.r},${n.g},${n.b},${o})`;let i=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(t.trim());return i?`rgba(${i[1]},${i[2]},${i[3]},${o})`:t}var dl=new Set(["on","open","home","locked","playing","active"]),ul=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function wr(t,e,o){if(typeof t!="string")return null;let n=t.toLowerCase();return dl.has(n)?o:ul.has(n)?e:null}function ml(t,e){let o=String(t),n=o.charAt(0).toUpperCase()+o.slice(1);return e?`${n}${e}`:n}function hl(t,e,o,n=!1){let i=wr(t,e,o),r=i!==null?i:parseFloat(t);if(isNaN(r))return 0;let a=o-e;if(a<=0)return 0;let s=n?o-r:r;return Tt((s-e)/a,0,1)*100}function fl(t,e){if(!e||e.length===0)return null;let o=parseFloat(t);if(isNaN(o))return null;for(let n of e)if(o>=n.from&&o<=n.to)return n;return null}function gl(t,e,o){return gr(t,e,o)}function vl(t,e){if(!e||e.length<2)return null;let o=parseFloat(t);if(isNaN(o))return null;let n=e[0].from<=e[e.length-1].from?e:[...e].sort((i,r)=>i.from-r.from);for(let i=0;i<n.length-1;i++){let r=n[i],a=n[i+1];if(o>=r.from&&o<=a.from){let s=a.from-r.from,l=s>0?(o-r.from)/s:0;return gl(r.color,a.color,Tt(l,0,1))}}return o<=n[0].from?n[0].color:n[n.length-1].color}function bl(t,e,o){let n=t.min??o?.min,i=t.max??o?.max;return n==null&&(n=e?.attributes?.min??e?.attributes?.min_temp??It.min),i==null&&(i=e?.attributes?.max??e?.attributes?.max_temp??It.max),{min:parseFloat(String(n)),max:parseFloat(String(i))}}function _o(t,e,o){return t.decimal??e.decimal??o?.entities?.[t.entity]?.display_precision??null}function Ce(t,e){return t.unit_of_measurement??e?.attributes?.unit_of_measurement??""}function wl(t){return!isFinite(t)||t<0?"0":t>=1e9?`${(t/1e9).toFixed(1)}G`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString()}function yl(t,e,o){let n=parseFloat(t);if(isNaN(n))return String(t);let i=e!=null?n.toFixed(e):n.toString();return o?`${i}${o}`:i}function yr(t,e){if(e==null)return{direction:"neutral",delta:0};let o=parseFloat(t),n=parseFloat(e);if(isNaN(o)||isNaN(n))return{direction:"neutral",delta:0};if(!isFinite(o)||!isFinite(n))return{direction:"neutral",delta:0};let i=Math.abs(o-n),r=Math.max(Math.abs(o),1);if(i>r*1e3)return{direction:"neutral",delta:0};let a=Math.round((o-n)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function zn(t,e,o,n,i){let r=t==="up"?"\u25B2":t==="down"?"\u25BC":"\u25B6";if(!o)return{arrow:r,text:r};let a=n!=null?e.toFixed(n):String(Math.round(e*100)/100),s=e>0?"+":"";return{arrow:r,text:`${r} ${s}${a}${i||""}`}}var qt=bo(ur);async function _r(t,e,o=60){let n={};if(!t?.callWS||e.length===0)return n;let i=new Date,r=new Date(i.getTime()-o*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let s of e){let l=a?.[s];if(!l||l.length===0){n[s]=null;continue}let p=parseFloat(l[0].s);n[s]=isNaN(p)?null:p}}catch(a){qt("Failed to fetch history for %s: %O",e.join(", "),a);for(let s of e)n[s]=null}return n}function br(t){return!Array.isArray(t)||t.length<2?t:[...t].sort((e,o)=>e.from-o.from)}function xr(t){if(!t)throw new Error("Please define an entity or entities");if(!t.entity&&!t.entities)throw new Error("Please define an entity or entities");let e={...It,...t,animation:{...It.animation,...t.animation},positions:{...It.positions,...t.positions}};e.columns!==null&&e.columns!==void 0&&(e.columns=Number(e.columns)||1),e.animation.speed!==null&&e.animation.speed!==void 0&&(e.animation.speed=Number(e.animation.speed)||It.animation.speed),e.severity&&(e.severity=br(e.severity)),e.indicator?.show===!0&&e.positions.indicator==="off"&&(e.positions={...e.positions,indicator:"outside"}),e.entities=t.entities?t.entities.map(n=>{let i=typeof n=="string"?{entity:n}:{...n};return i.severity&&(i.severity=br(i.severity)),!i.secondary_info&&e.secondary_info&&(i._cardSecondaryInfo=e.secondary_info),i.indicator?.show===!0&&i.positions&&i.positions.indicator==="off"?i.positions={...i.positions,indicator:"outside"}:i.indicator?.show===!0&&!i.positions?.indicator&&(i.positions={...i.positions||{},indicator:"outside"}),i}):[{entity:t.entity}];let o=new Set;for(let n of e.entities)o.has(n.entity)&&qt('Duplicate entity "%s" in config: only the last bar will update dynamically',n.entity),o.add(n.entity);return e}function Rn(t){return typeof t=="string"?t:t&&typeof t=="object"&&typeof t.value=="string"?t.value:null}function xo(t,e){if(t==null)return{value:null,showLabel:!1};if(typeof t=="number")return{value:isNaN(t)?null:t,showLabel:!1};if(typeof t=="string"){let o=e?.states[t];if(!o)return{value:null,showLabel:!1};let n=parseFloat(o.state);return{value:isNaN(n)?null:n,showLabel:!1}}return typeof t=="object"&&t.value!==void 0?{value:xo(t.value,e).value,showLabel:t.show_label===!0}:{value:null,showLabel:!1}}function Hn(t,e,o){let n=o?.states[t.entity],i=Q(n),{min:r,max:a}=bl(t,n,e),s=t.attribute?n?.attributes?.[t.attribute]:n?.state,l=t.attribute?null:wr(s,r,a),p=l!==null,d=p?l:parseFloat(s),c=t.complementary??e.complementary,m=i?0:hl(s,r,a,c),u=Ce(t,n),h=_o(t,e,o),v=(t.limit_value??e.limit_value)&&!isNaN(d)?Tt(d,r,a):s,w=i?"Unavailable":t.state_map?.[s]?t.state_map[s]:p?ml(s,u):yl(v,h,u),b=t.name??n?.attributes?.friendly_name??t.entity,y="",_="";if(!i){let M=t.state_color,I=n?.state;if(M&&I&&M[I])y=M[I];else{let L=t.attribute_color??e.attribute_color;if(L?.attribute&&L?.map){let T=n?.attributes?.[L.attribute];if(T!=null){let C=L.map[String(T)];C&&(y=C)}}if(!y){let T=t.severity??e.severity;if(T&&T.length>0)if(T.some(x=>x.mode==="gradient")){let x=vl(d,T);x&&(y=x)}else{let x=fl(d,T);x&&(y=x.color,x.icon&&(_=x.icon))}}}}let S=y||t.color||e.color||"",$=t.icon||n?.attributes?.icon||"";return{isUnavailable:i,min:r,max:a,numValue:d,fill:m,displayValue:w,name:b,color:S,resolvedIcon:_||$}}function Ee(t,e){let o=t.bar_width??e.bar_width;return o!=null?Math.max(1,Math.min(100,o))/100:1}function Dn(t,e){if(!t.visibility)return!0;let o=e?.states[t.entity];if(!o)return!1;let n=t.visibility,i=t.attribute?o.attributes?.[t.attribute]:o.state;if(!t.attribute&&Q(o))return n.state_equal!==void 0&&String(n.state_equal)===o.state;let r=parseFloat(i);return!(n.state_above!==void 0&&(isNaN(r)||r<=n.state_above)||n.state_below!==void 0&&(isNaN(r)||r>=n.state_below)||n.state_equal!==void 0&&String(i)!==String(n.state_equal)||n.state_not_equal!==void 0&&String(i)===String(n.state_not_equal))}var $r={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:t=>t/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function $o(t,e,o,n){if(n<=0)return Tt(t,e,o);let i=Math.round((t-e)/n)*n+e,r=(String(n).split(".")[1]||"").length,a=Number(i.toFixed(r));return Tt(a,e,o)}function Sr(t,e,o){if(o?.service){let a=o.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let s={entity_id:t};if(o.data)for(let[l,p]of Object.entries(o.data))s[l]=p==="$value"?e:p;return{domain:a[0],service:a[1],data:s}}let n=t.split(".")[0],i=$r[n];if(!i)return null;let r=i.transform?i.transform(e):e;return{domain:n,service:i.service,data:{entity_id:t,[i.dataKey]:r}}}function Xe(t,e,o,n){let i=t.split(".")[0],a=$r[i]?.fixedRange,s=e?.attributes,l=n?.min??s?.min??s?.min_temp??a?.min??0,p=n?.max??s?.max??s?.max_temp??a?.max??100,d=o?.step??s?.step??s?.target_temp_step??s?.percentage_step??a?.step??1;return{min:Number(l),max:Number(p),step:Number(d)||1}}function _l(t){if(!t)return"";let e=new Date(t).getTime();if(isNaN(e))return"";let o=Date.now()-e;if(o<0)return"just now";let n=Math.floor(o/1e3);if(n<60)return"just now";let i=Math.floor(n/60);if(i<60)return`${i} min ago`;let r=Math.floor(i/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function On(t,e){let o=t.secondary_info??t._cardSecondaryInfo;if(!o)return"";if(o.text!==void 0&&o.text!==null&&o.text!=="")return String(o.text);let n=e?.states[t.entity];if(!n)return"";if(o.template)return o.template.replace(/\{(\w+)\}/g,(i,r)=>{let a=n.attributes?.[r];return a==null?"":(r==="bytes"||r==="packets")&&typeof a=="number"?wl(a):String(a)});if(o.attribute){let i=n.attributes?.[o.attribute];return i!=null?String(i):""}return o.type==="last_changed"?_l(n.last_changed):""}function At(t,e,{signal:o,role:n="button"}={}){t.setAttribute("role",n),t.setAttribute("tabindex","0"),t.addEventListener("keydown",i=>{let r=i;r.key!=="Enter"&&r.key!==" "||(r.preventDefault(),e(r))},o?{signal:o}:void 0)}function So(t,e,o){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:o}))}function xl(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();if(e.startsWith("/")&&!e.startsWith("//")||e.startsWith("./")||e.startsWith("../")||e.startsWith("#"))return!0;try{let o=new URL(e,window.location.href);return["http:","https:","mailto:","tel:"].includes(o.protocol)}catch{return!1}}function $l(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();return!(e.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(e))}function ue(t,e,o,n,i){if(!(!o||o.action==="none"))switch(o.action){case"more-info":So(t,"hass-more-info",{entityId:o.entity||n});break;case"navigate":o.navigation_path&&$l(o.navigation_path)?(history.pushState(null,"",o.navigation_path),So(t,"location-changed",{replace:!1})):o.navigation_path&&i("navigation_path rejected: must be a same-origin relative path: %s",o.navigation_path);break;case"call-service":case"perform-action":{let r=o.service||o.perform_action;if(!r||typeof r!="string")break;let a=r.indexOf(".");if(a<=0||a===r.length-1){i('Service rejected: expected "domain.service" format, got: %s',r);break}let s=r.slice(0,a),l=r.slice(a+1);e.callService(s,l,o.service_data||o.data).catch(p=>i("Service call %s failed: %O",r,p));break}case"url":o.url_path&&xl(o.url_path)?window.open(o.url_path,"_blank","noopener,noreferrer"):o.url_path&&i("url_path rejected: only http/https/mailto/tel schemes or relative paths are allowed: %s",o.url_path);break;case"toggle":e.callService("homeassistant","toggle",{entity_id:o.entity||n}).catch(r=>i("Toggle %s failed: %O",o.entity||n,r));break}}function Sl(t,e,o){let n=e?.[t],i=o?.[t];return n||i||{action:t==="tap_action"?"more-info":"none"}}function ko(t,e,o,n,i){let r=Sl(i,n,o);ue(t,e,r,n.entity,qt)}function Bn(t){let e=t.__pulseCleanup;typeof e=="function"&&e()}function kr(t,e,o,n,i){Bn(t);let r=new AbortController,{signal:a}=r,s=0,l=null,p=null,d=!1;t.__pulseCleanup=()=>{r.abort(),l&&clearTimeout(l),p&&clearTimeout(p),delete t.__pulseCleanup},At(t,()=>{e._hass&&ko(e,e._hass,n,i,"tap_action")},{signal:a,role:t.getAttribute("role")||"button"}),t.addEventListener("click",m=>{if(m.preventDefault(),d){d=!1;return}t.__pulseSliding||(s++,s===1?l=setTimeout(()=>{s=0,e._hass&&ko(e,e._hass,n,i,"tap_action")},250):s===2&&(l&&clearTimeout(l),s=0,e._hass&&ko(e,e._hass,n,i,"double_tap_action")))},{signal:a}),t.addEventListener("pointerdown",()=>{d=!1,p=setTimeout(()=>{d=!0,e._hass&&ko(e,e._hass,n,i,"hold_action")},500)},{signal:a});let c=()=>{p&&clearTimeout(p)};t.addEventListener("pointerup",c,{signal:a}),t.addEventListener("pointercancel",c,{signal:a}),t.addEventListener("contextmenu",m=>m.preventDefault(),{signal:a})}var kl=50;function qn(t){let e=t.__pulseSliderCleanup;typeof e=="function"&&e()}function Tr(t,e,o,n){qn(t);let i=t.querySelector(".pb-container");if(!i)return;let r=i,a=new AbortController,{signal:s}=a,l=null;t.__pulseSliderCleanup=()=>{a.abort(),l&&clearTimeout(l),g&&clearInterval(g),delete t.__pulseSliderCleanup};let p=typeof n.interactive=="object"?n.interactive:typeof o.interactive=="object"?o.interactive:void 0,d=null;function c(b){let y=r.getBoundingClientRect(),_=Math.max(0,Math.min(b-y.left,y.width)),S=y.width>0?_/y.width:0,A=e._hass?.states[n.entity],{min:M,max:I,step:L}=Xe(n.entity,A,p,n),T=M+S*(I-M);return $o(T,M,I,L)}function m(b){let _=e._hass?.states[n.entity],{min:S,max:$,step:A}=Xe(n.entity,_,p,n),M=$-S,I=M>0?(b-S)/M*100:0,L=r.querySelector(".pb-fill");L&&(L.style.width=`${I}%`);let T=Ce(n,_),C=(String(A).split(".")[1]||"").length,x=C>0?b.toFixed(C):String(Math.round(b)),E=T?`${x}${T}`:x,F=t.querySelectorAll(".pb-value");for(let N of F)N.textContent=E}function u(){if(!d)return;let b=r.querySelector(".pb-fill");b&&(b.style.transition="",b.style.width=d.fillWidth);let y=t.querySelectorAll(".pb-value");for(let _ of y)_.textContent=d.displayValue}function h(b){let y=Sr(n.entity,b,p);if(!y){qt("No slider service mapping for %s",n.entity),u();return}let _=e._hass;if(!_){u();return}_.callService(y.domain,y.service,y.data).catch(S=>{qt("Slider service call failed for %s: %O",n.entity,S),u()})}r.addEventListener("pointerdown",b=>{if(!e._hass)return;b.preventDefault();let y=r.querySelector(".pb-fill"),_=t.querySelector(".pb-value");d={fillWidth:y?.style.width||"0%",displayValue:_?.textContent||"",pointerId:b.pointerId,startX:b.clientX},t.__pulseSliding=!0,r.setPointerCapture(b.pointerId),t.classList.add("sliding"),y&&(y.style.transition="none");let S=c(b.clientX);m(S)},{signal:s}),r.addEventListener("pointermove",b=>{if(!d||b.pointerId!==d.pointerId)return;b.preventDefault();let y=c(b.clientX);m(y)},{signal:s}),r.addEventListener("pointerup",b=>{if(!d||b.pointerId!==d.pointerId)return;b.preventDefault();let y=r.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),r.releasePointerCapture(b.pointerId);let _=c(b.clientX);m(_),h(_),d=null,l=setTimeout(()=>{t.__pulseSliding=!1},kl)},{signal:s}),r.addEventListener("pointercancel",b=>{if(!d||b.pointerId!==d.pointerId)return;let y=r.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),r.releasePointerCapture(b.pointerId),u(),d=null,t.__pulseSliding=!1},{signal:s});let g=null;function v(b){let y=e._hass;if(!y)return;let _=y.states[n.entity],{min:S,max:$,step:A}=Xe(n.entity,_,p,n),M=n.attribute?parseFloat(_?.attributes?.[n.attribute]):parseFloat(_?.state);if(isNaN(M))return;let I=$o(M+b*A,S,$,A);I!==M&&(m(I),h(I))}let w=t.querySelectorAll(".pb-step-btn");for(let b of w){let y=Number(b.dataset.step);At(b,S=>{S.stopPropagation(),v(y)},{signal:s}),b.addEventListener("click",S=>{S.stopPropagation(),v(y)},{signal:s}),b.addEventListener("pointerdown",S=>{S.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>v(y),200)},{signal:s});let _=()=>{g&&(clearInterval(g),g=null)};b.addEventListener("pointerup",_,{signal:s}),b.addEventListener("pointercancel",_,{signal:s}),b.addEventListener("pointerleave",_,{signal:s})}t.addEventListener("keydown",b=>{let y=e._hass;if(!y||b.key!=="ArrowRight"&&b.key!=="ArrowUp"&&b.key!=="ArrowLeft"&&b.key!=="ArrowDown")return;b.preventDefault();let _=y.states[n.entity],{min:S,max:$,step:A}=Xe(n.entity,_,p,n),M=n.attribute?parseFloat(_?.attributes?.[n.attribute]):parseFloat(_?.state);if(isNaN(M))return;let I=b.key==="ArrowRight"||b.key==="ArrowUp"?1:-1,L=$o(M+I*A,S,$,A);L!==M&&(m(L),h(L))},{signal:s})}function Dt(t){if(!customElements.get("ha-ripple")||t.querySelector("ha-ripple"))return;let e=document.createElement("ha-ripple");t.appendChild(e),t.classList.add("has-ripple")}var Ar=Se,Ao="pulse-climate-card",Cr="pulse-climate-card-editor",me="Pulse Climate Card:",Un=.3,Kt={heating:{icon:"mdi:fire",token:"var(--pulse-tier-strong)",fallback:"#ff9f0a",label:"Heating",tier:"amber"},cooling:{icon:"mdi:snowflake",token:"var(--pulse-tier-calm)",fallback:"#5ac8fa",label:"Cooling",tier:"blue"},drying:{icon:"mdi:water-off",token:null,fallback:"#9C27B0",label:"Drying",tier:"drying"},fan:{icon:"mdi:fan",token:null,fallback:"#607D8B",label:"Fan",tier:"fan"},preheating:{icon:"mdi:radiator",token:null,fallback:"#ff9f0a",label:"Preheating",tier:"amber"},defrosting:{icon:"mdi:snowflake-melt",token:null,fallback:"#5ac8fa",label:"Defrosting",tier:"blue"},idle:{icon:"mdi:clock-outline",token:"var(--pulse-text-secondary)",fallback:"#9E9E9E",label:"Idle",tier:null},off:{icon:"mdi:power",token:"var(--pulse-disabled)",fallback:"#616161",label:"Off",tier:"disabled"}},Wn={None:{token:"var(--pulse-tier-moderate)",fallback:"#30d158",tier:"green"},Low:{token:"var(--pulse-tier-moderate)",fallback:"#30d158",tier:"green"},Medium:{token:"var(--pulse-tier-strong)",fallback:"#ff9f0a",tier:"amber"},High:{token:"var(--pulse-tier-gale)",fallback:"#ff453a",tier:"red"},Critical:{token:"var(--pulse-tier-gale)",fallback:"#ff453a",tier:"red"}},Er=["zones"];var Ut=["var(--pulse-tier-calm)","var(--pulse-tier-gale)","var(--pulse-tier-moderate)","var(--pulse-tier-strong)","var(--pulse-accent)","var(--pulse-info-color)","var(--pulse-tier-strong)","var(--success-color, #8BC34A)"],ne={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},Mr={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{},energy_flow_ac:{}};var Vn=`${$e}
/* Master pulse phase: typed CSS variable interpolated by :host animation.
   Sub-elements that breathe read calc(... * var(--pc-pulse-phase)) so all
   motion stays in lockstep without any JS timer. Reduced-motion locks the
   variable at its initial value (0.5, mid-state) and suspends the host
   animation so identity is preserved but motion ceases. */
@property --pc-pulse-phase {
  syntax: "<number>";
  inherits: true;
  initial-value: 0.5;
}

@keyframes pc-master-pulse {
  0%, 100% { --pc-pulse-phase: 0; }
  50%      { --pc-pulse-phase: 1; }
}

:host {
  animation: pc-master-pulse 4s ease-in-out infinite;
}

:host {
  display: block;

  /* Card-local design tokens: override via card-mod or HA theme.
     Family-shared concerns (text colour, body type size, card chrome
     background, surface tint) live on --pulse-* and are inherited via
     SHARED_STYLES; only Climate-specific knobs declare locally. */
  --pc-bar-height: 8px;
  --pc-bar-radius: 4px;
  --pc-chart-line-width: 1.5;
  --pc-gap: var(--pulse-space-card);
  --pc-gauge-height: 6px;
  --pc-gauge-radius: 3px;
  --pc-graph-height: 80px;

  /* Hearth wash: static bottom-edge ember glow over --pulse-bg-card.
     Atmosphere module (state-driven conic gradient) animates over the top. */
  --pc-hearth-glow-inner: rgba(255, 138, 70, 0.10);
  --pc-hearth-glow-mid:   rgba(180, 70, 50, 0.04);

  /* Section-local typography, values used by only one section, kept card-local
     so they don't pollute the shared token surface. */
  --pc-detail-name: 15px;   /* zone detail panel: clicked-zone heading */
  --pc-detail-stat: 22px;   /* zone detail panel: primary stat value */
}

ha-card {
  overflow: hidden;
  padding: var(--pulse-space-card);
  background:
    radial-gradient(ellipse 80% 60% at 50% 100%,
      var(--pc-hearth-glow-inner) 0%,
      var(--pc-hearth-glow-mid) 35%,
      transparent 70%),
    var(--pulse-bg-card);
  container-type: inline-size;
  color: var(--pulse-text-primary);
}

/* Title: adds layout margin on top of shared typography. */
.pulse-title { margin-bottom: 12px; }

/* Section container */
.pc-section { margin-top: 12px; }
.pc-section:first-child { margin-top: 0; }
.pulse-section-label { margin-bottom: 6px; }

.pc-section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--pulse-space-element);
}
.pc-section-header .pulse-section-label { margin-bottom: 0; }
.pc-section-header.pc-section-header-center { align-items: center; }

.pc-section-subtitle {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
}

.pc-energy-flow-header-value {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-medium);
}

.pc-comparison-legend {
  display: flex;
  gap: var(--pulse-space-element);
  margin-top: 4px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Zone row */
.pc-zone-row {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-tight);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding-left: 12px;     /* leaves room for the leading state ribbon */
  -webkit-tap-highlight-color: transparent;
}

/* Leading state ribbon: colour set by .pc-row-{state} below */
.pc-row-ribbon {
  position: absolute;
  left: 0; top: 6px; bottom: 6px;
  width: 3px;
  border-radius: 2px;
  background: var(--pc-row-ribbon, transparent);
  transition: background var(--pulse-anim-base) ease-out;
}

.pc-zone-row.pc-row-heat   { --pc-row-ribbon: var(--pulse-tier-strong); }
.pc-zone-row.pc-row-cool   { --pc-row-ribbon: var(--pulse-tier-calm); }
.pc-zone-row.pc-row-idle,
.pc-zone-row.pc-row-at-target { --pc-row-ribbon: rgba(255, 255, 255, 0.15); }
.pc-zone-row.pc-row-off,
.pc-zone-row.pc-row-unavail   { --pc-row-ribbon: rgba(255, 255, 255, 0.06); }
.pc-zone-row.pc-unavailable { opacity: 0.5; }
.pc-zone-row.pc-unavailable .pc-power-bar-fill {
  background: var(--pulse-disabled) !important;
  width: 100% !important;
  opacity: 0.2;
}


.pc-zone-row.pc-row-off { opacity: 0.55; }
.pc-zone-row.pc-row-unavail { opacity: 0.4; }

.pc-state-tag {
  display: inline-block;
  font-size: var(--pulse-font-micro);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 6px;
  margin-left: 8px;
  border-radius: var(--pulse-radius-tight);
  font-weight: var(--pulse-weight-medium);
  vertical-align: middle;
}
.pc-tag-heat { background: color-mix(in srgb, var(--pulse-tier-strong) 18%, transparent); color: var(--pulse-tier-strong); }
.pc-tag-cool { background: color-mix(in srgb, var(--pulse-tier-calm) 18%, transparent); color: var(--pulse-tier-calm); }
.pc-tag-idle { color: var(--pulse-text-secondary); opacity: 0.7; }
.pc-tag-at-target { color: var(--pulse-tier-moderate); opacity: 0.9; }
.pc-tag-off { color: var(--pulse-text-secondary); opacity: 0.6; }
.pc-tag-unavail { background: color-mix(in srgb, var(--pulse-tier-gale) 12%, transparent); color: color-mix(in srgb, var(--pulse-tier-gale) 80%, white); }

/* State-tinted current temperature on rows */
.pc-zone-row.pc-row-heat .pc-zone-temp { color: var(--pulse-tier-strong); }
.pc-zone-row.pc-row-cool .pc-zone-temp { color: var(--pulse-tier-calm); }
.pc-zone-row.pc-row-off .pc-zone-temp,
.pc-zone-row.pc-row-unavail .pc-zone-temp { color: var(--pulse-text-secondary); }

/* Zone header: name + current temp */
.pc-zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: var(--pulse-space-tight);
  min-width: 0;
}
.pc-zone-name {
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

/* State hierarchy aggregator: driven by rowStateClass() in utils.js.
   Granular pc-row-heat / -cool / -off etc. stay for ribbon colour and
   per-state visual cues; aggregators (active / mid / quiet) drive the
   unified text + dim treatment across every section. */
.pc-row-active .pc-zone-name,
.pc-row-active .pc-rank-name,
.pc-row-active .pc-home-status-zone-name,
.pc-row-active .pc-timeline-group-name,
.pc-row-active .pc-zone-label,
.pc-row-active.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-row-mid .pc-zone-name,
.pc-row-mid .pc-rank-name,
.pc-row-mid .pc-home-status-zone-name,
.pc-row-mid .pc-timeline-group-name,
.pc-row-mid .pc-zone-label,
.pc-row-mid.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-regular);
}

.pc-row-quiet .pc-zone-name,
.pc-row-quiet .pc-rank-name,
.pc-row-quiet .pc-home-status-zone-name,
.pc-row-quiet .pc-timeline-group-name,
.pc-row-quiet .pc-zone-label,
.pc-row-quiet.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-secondary);
  font-weight: var(--pulse-weight-regular);
}

/* Quiet rows dim the whole row so right-side stats (value, slider, delta
   text) follow the name's brightness. .pc-zone-row keeps its own opacity
   from the legacy ribbon path. */
.pc-rank-row.pc-row-quiet,
.pc-home-status-row.pc-row-quiet,
.pc-timeline-row.pc-row-quiet,
.pc-state-row.pc-row-quiet,
.pc-heatmap-row.pc-row-quiet {
  opacity: 0.6;
}
.pc-zone-temp {
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-primary);
  white-space: nowrap;
  flex-shrink: 0;
}
.pc-zone-target {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.pc-zone-humidity {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-regular);
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-pin);
  margin-left: 4px;
}
.pc-zone-humidity ha-icon {
  --mdc-icon-size: 12px;
}

/* Temperature gauge bar */
.pc-temp-gauge {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pc-gauge-height, 6px);
  border-radius: var(--pc-gauge-radius, 3px);
}
.pc-temp-gauge-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.25;
}
.pc-temp-gauge-current {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 3px;
  background: var(--pulse-text-primary);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--pulse-bg-card);
}
.pc-temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--pulse-text-primary);
  opacity: 0.5;
  border-radius: var(--pulse-radius-hairline);
  z-index: 1;
  box-shadow: 0 0 0 1px var(--pulse-bg-card);
}

/* Heating/cooling power bar */
.pc-power-bar-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pc-bar-height, 8px);
  border-radius: var(--pc-bar-radius, 4px);
}
.pc-power-bar-track {
  position: absolute;
  inset: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: inherit;
}
.pc-power-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  transition: width var(--pulse-anim-fill) ease, background-color var(--pulse-anim-mode) ease;
  background: var(--pc-status-color, var(--pulse-text-secondary));
}
/* HomeKit saved-calls bar: a static full-width accent track behind the
   reads-proportion fill, nothing here is ever dynamic. */
.pc-power-bar-fill.pc-hk-write-track { width: 100%; --pc-status-color: var(--pulse-accent); }
.pc-power-bar-fill.pc-bar-active {
  box-shadow: 0 0 8px 1px var(--pc-bar-glow, rgba(255, 152, 0, 0.4));
  animation: pc-bar-pulse 2.5s ease-in-out infinite;
}
@keyframes pc-bar-pulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--pc-bar-glow, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--pc-bar-glow, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.pc-zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pulse-space-chip);
  padding: 2px 0;
}
.pc-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pc-status-color, var(--pulse-text-secondary));
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  /* Padding stays horizontal so chip width tracks its label. */
  min-height: 24px;
  padding: 0 2px;
  box-sizing: border-box;
}
.pc-chip ha-icon { --mdc-icon-size: 14px; }
.pc-chip.pc-severity-high { color: var(--pulse-tier-gale); }
.pc-chip.pc-severity-medium { color: var(--pulse-tier-strong); }
.pc-chip.pc-severity-critical { color: var(--pulse-tier-gale); font-weight: var(--pulse-weight-semibold); }

.pc-chip-aside {
  font-size: var(--pulse-font-caption);
  opacity: 0.6;
}

/* Multi-column zone grid */
.pc-section-zones.pc-columns {
  display: grid;
  gap: var(--pc-gap, 16px);
}

@container (max-width: 300px) {
  .pc-section-zones.pc-columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.pc-compact .pc-zone-row { gap: var(--pulse-space-hairline); }
.pc-compact .pc-zone-name { font-size: var(--pulse-font-kicker); }
.pc-compact .pc-zone-chips { gap: var(--pulse-space-tight); }
.pc-compact .pc-chip { font-size: var(--pulse-font-caption); }

/* System section rows */
.pc-system-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
  padding: 4px 2px;
}
.pc-system-label {
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  min-width: 72px;
  font-weight: var(--pulse-weight-regular);
}
/* \u2500\u2500 Chart Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Graph container */
.pc-chart-container {
  position: relative;
  width: 100%;
  height: var(--pc-graph-height, 80px);
  overflow: hidden;
  border-radius: var(--pulse-radius-small);
}
.pc-chart-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.pc-chart-svg path {
  stroke-width: var(--pc-chart-line-width, 1.5);
  vector-effect: non-scaling-stroke;
}
.pc-chart-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
  opacity: 0.6;
}

/* Legend chips */
.pc-chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pulse-space-element);
  padding: 4px 0;
}
.pc-legend-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  white-space: nowrap;
}
.pc-legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}

/* Donut container */
.pc-donut-container {
  position: relative;
  margin: 8px auto;
}
.pc-donut-container.pc-api-breakdown-donut {
  flex-shrink: 0;
  margin: 0;
}

/* API breakdown row inside the API tab: donut + legend chips side by side */
.pc-api-breakdown-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-card);
}
.pc-donut-container svg {
  width: 100%;
  height: 100%;
}
.pc-donut-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
}
.pc-donut-center-num {
  font-size: var(--pulse-font-hero);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: var(--pulse-ls-hero);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  line-height: 1;
}
.pc-donut-center-label {
  font-size: var(--pulse-font-micro);
  text-transform: uppercase;
  letter-spacing: var(--pulse-ls-kicker);
  color: var(--pulse-text-secondary);
  margin-top: 4px;
}

/* Donut arcs: largest auto-blooms via inline filter attr (per-instance unique
   id from renderDonut), idle dim 0.6. CSS does not set filter so inline attr
   wins. Hover lifts opacity only, bloom stays anchored to active. */
.pc-donut-arc {
  opacity: 0.6;
  transition: opacity var(--pulse-anim-medium);
  cursor: pointer;
}
.pc-donut-arc.pc-donut-arc-active {
  opacity: 1;
}
.pc-donut-arc:hover {
  opacity: 1;
}

/* Responsive: hide legend at narrow widths */
@container (max-width: 200px) {
  .pc-chart-legend { display: none; }
  .pc-chart-container { height: 50px; }
}

/* \u2500\u2500 Visual Identity Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Filled sparkline (shared by pulse mode, graph, bridge, api) */
.pc-sparkline-filled {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--pulse-radius-small);
  touch-action: pan-y;
}
.pc-sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}
.pc-sparkline-filled.pc-sparkline-prominent { height: 40px; }

/* Zone Pulse mode: waveform as row background */
.pc-zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: var(--pulse-radius-row);
  overflow: hidden;
  background: var(--pulse-bg-secondary);
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y;
}
.pc-zone-row-pulse .pc-pulse-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
}
.pc-zone-row-pulse .pc-pulse-info {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pc-pulse-info-left { display: flex; flex-direction: column; gap: var(--pulse-space-hairline); }
.pc-pulse-info-right { display: flex; align-items: baseline; gap: var(--pulse-space-chip); }
.pc-pulse-current {
  font-size: var(--pulse-font-large);
  font-weight: var(--pulse-weight-light);
  color: var(--pulse-text-primary);
  font-variant-numeric: tabular-nums;
}
.pc-pulse-status {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}
.pc-status-dot {
  width: 5px;
  height: 5px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}
@keyframes pc-glow-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.pc-heating-glow { animation: pc-glow-pulse 3s ease-in-out infinite; }

/* Heating row glow: warm border shadow */
.pc-zone-row-pulse.pc-heating {
  animation: pc-row-glow 3s ease-in-out infinite;
}
@keyframes pc-row-glow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Strip rows: shared by thermal-strip's .pc-timeline-row and
   comfort-strip's .pc-heatmap-row. */
.pc-section-thermal-strip .pc-timeline-row,
.pc-section-comfort-strip .pc-heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: var(--pulse-radius-pill);
  padding: 2px 0;
  position: relative;
  overflow: visible;
  transition: background var(--pulse-anim-fast);
}
.pc-section-thermal-strip .pc-timeline-row:hover,
.pc-section-comfort-strip .pc-heatmap-row:hover { background: var(--pulse-bg-hover); }
.pc-section-thermal-strip .pc-timeline-row.pc-selected,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-strip-container,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-strip-container { height: 18px; }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-zone-label,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-zone-label {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-section-thermal-strip .pc-zone-label,
.pc-section-comfort-strip .pc-zone-label {
  width: 72px;
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--pulse-anim-base);
}
/* Strip container: shared by thermal strip and comfort strip (timeline mode) */
.pc-section-thermal-strip .pc-strip-container,
.pc-section-comfort-strip .pc-strip-container {
  flex: 1;
  height: 14px;
  border-radius: var(--pulse-radius-small);
  overflow: visible;
  position: relative;
  touch-action: pan-y;
}
.pc-section-thermal-strip .pc-now-marker,
.pc-section-comfort-strip .pc-now-marker {
  position: absolute;
  top: -3px;
  bottom: -3px;
  width: 1.5px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
  z-index: 3;
}
.pc-section-thermal-strip .pc-time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
  margin-left: 72px;
}
.pc-section-thermal-strip .pc-time-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Strip tooltip: shared by timeline and heatmap */
.pc-strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-primary);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  padding: 2px 8px;
  border-radius: var(--pulse-radius-small);
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  transform: translateX(-50%);
}
.pc-strip-tooltip-fixed {
  position: fixed;
  top: auto;
  z-index: 9999;
}

.pc-strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--pulse-text-primary);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
  display: none;
}

/* Drag selection highlight */
.pc-strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: var(--pulse-radius-bar);
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap: HTML div cells for hover/click */
.pc-section-comfort-strip .pc-heatmap-body { padding: 4px 0; position: relative; }

/* Heatmap cells: shared by comfort strip, thermal strip (heatmap mode),
   and timeline-group's Thermal tab. */
.pc-section-comfort-strip .pc-cells,
.pc-section-thermal-strip .pc-cells,
.pc-section-timeline-group .pc-cells {
  display: flex;
  gap: var(--pulse-space-pin);
  flex: 1;
  touch-action: pan-y;
}
.pc-section-comfort-strip .pc-cell,
.pc-section-thermal-strip .pc-cell,
.pc-section-timeline-group .pc-cell {
  flex: 1;
  height: 16px;
  border-radius: var(--pulse-radius-bar);
  transition: transform var(--pulse-anim-fast), height var(--pulse-anim-base), box-shadow var(--pulse-anim-base);
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-cell,
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-cell { height: 20px; }
.pc-section-comfort-strip .pc-cell:hover,
.pc-section-thermal-strip .pc-cell:hover {
  transform: scaleY(1.4);
  box-shadow: 0 0 8px currentColor;
  z-index: 2;
}
.pc-section-comfort-strip .pc-cell-empty,
.pc-section-thermal-strip .pc-cell-empty {
  background: repeating-linear-gradient(
    45deg,
    var(--pulse-border-subtle) 0px,
    var(--pulse-border-subtle) 2px,
    transparent 2px,
    transparent 4px
  );
}
.pc-heatmap-legend {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-row);
  padding: 4px 0;
  justify-content: center;
}
.pc-heatmap-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
}
.pc-heatmap-legend .pc-legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-bar);
}
.pc-legend-swatch-good { background: color-mix(in srgb, var(--pulse-tier-moderate) 70%, transparent); }
.pc-legend-swatch-fair { background: color-mix(in srgb, var(--pulse-tier-strong) 65%, transparent); }
.pc-legend-swatch-poor { background: color-mix(in srgb, var(--pulse-tier-gale) 60%, transparent); }
.pc-heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 72px;
  padding: 4px 0 14px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Energy Flow */
.pc-ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.pc-flow-zone-text { cursor: pointer; }
.pc-ribbon { cursor: pointer; transition: opacity var(--pulse-anim-base); }
.pc-ribbon:hover { opacity: 1 !important; }
.pc-ribbon.pc-dimmed { opacity: 0.2; }

/* Radial */
.pc-section-radial { text-align: center; }
.pc-radial-svg { display: block; margin: 0 auto; }
.pc-radial-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.pc-center-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: opacity var(--pulse-anim-medium);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: var(--pulse-radius-circle);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.pc-center-sheen {
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  pointer-events: none;
  background: radial-gradient(circle farthest-side at 0 0, rgba(255,255,255,0) 88%, rgba(255,255,255,0.5) 96%, rgba(255,255,255,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.pc-center-sheen.light-theme {
  background: radial-gradient(circle farthest-side at 0 0, rgba(0,0,0,0) 88%, rgba(0,0,0,0.12) 96%, rgba(0,0,0,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.pc-center-value {
  font-size: var(--pulse-font-hero);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: var(--pulse-ls-hero);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  transition: font-size var(--pulse-anim-medium);
}
.pc-center-label {
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  letter-spacing: var(--pulse-ls-kicker);
  text-transform: uppercase;
  margin-top: 6px;
}
.pc-center-sub {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  margin-top: 4px;
  font-variant-numeric: tabular-nums;
}
.pc-arc-group {
  cursor: pointer;
  transition: opacity var(--pulse-anim-base);
  opacity: 0.6;
}
.pc-arc-group.pc-arc-active { opacity: 1; }
.pc-arc-group:hover { opacity: 1 !important; }
.pc-arc-group.pc-dimmed { opacity: 0.2 !important; }
.pc-arc-group.pc-selected { opacity: 1 !important; }
.pc-arc-path {
  cursor: pointer;
}
.pc-arc-path:hover { opacity: 1 !important; }

/* Radial legend */
.pc-radial-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 16px;
  justify-content: center;
}
.pc-radial-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  cursor: pointer;
  padding: 4px 4px;
  min-height: 24px;
  box-sizing: border-box;
  border-radius: var(--pulse-radius-small);
  position: relative;
  overflow: hidden;
  transition: background var(--pulse-anim-fast), color var(--pulse-anim-fast);
}
.pc-radial-legend .pc-legend-item:hover { background: color-mix(in srgb, var(--pulse-accent) 8%, transparent); }
.pc-radial-legend .pc-legend-item.pc-selected { background: color-mix(in srgb, var(--pulse-accent) 16%, transparent); color: var(--pulse-text-primary); }
.pc-radial-legend .pc-legend-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}
.pc-legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.pc-zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height var(--pulse-anim-slow) ease, opacity var(--pulse-anim-medium) ease, padding var(--pulse-anim-slow) ease;
  padding: 0;
}
.pc-zone-detail.pc-active {
  max-height: 240px;
  opacity: 1;
  padding: 14px 0 16px;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: var(--pulse-radius-element);
}
.pc-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.pc-detail-name { font-size: var(--pc-detail-name); font-weight: var(--pulse-weight-medium); }
.pc-detail-close {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  min-height: 24px;
  box-sizing: border-box;
  border-radius: var(--pulse-radius-pill);
  transition: background var(--pulse-anim-fast);
}
.pc-detail-close:hover { background: color-mix(in srgb, var(--pulse-accent) 10%, transparent); }
.pc-detail-stats { display: flex; gap: var(--pulse-space-card); }
.pc-stat { flex: 1; }
.pc-stat-value {
  font-size: var(--pc-detail-stat);
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}
.pc-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.pc-stat-sub {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  margin-top: 1px;
}
.pc-detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: var(--pulse-radius-tight);
  background: var(--pulse-bg-secondary);
  overflow: hidden;
}
.pc-detail-bar-fill {
  height: 100%;
  border-radius: var(--pulse-radius-tight);
  transition: width var(--pulse-anim-color) ease;
}
.pc-detail-sparkline {
  border-radius: var(--pulse-radius-pill);
  overflow: hidden;
}

/* API Dashboard */
.pc-api-dashboard {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-element);
}
.pc-api-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
}
.pc-usage-gauge {
  position: relative;
  flex-shrink: 0;
}
.pc-gauge-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-secondary);
  text-align: center;
  line-height: 1.2;
}
.pc-gauge-center-limit {
  font-size: var(--pulse-font-caption);
  opacity: 0.6;
}

/* HomeKit pulse dot */
.pc-pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-circle);
  margin-right: 4px;
  vertical-align: middle;
}
.pc-pulse-dot.pc-connected {
  background: var(--pulse-tier-moderate);
  animation: pc-pulse-dot-glow 2s ease-in-out infinite;
}
.pc-pulse-dot.pc-disconnected {
  background: var(--pulse-tier-gale);
}
@keyframes pc-pulse-dot-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.pc-flow-temp-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  margin-top: 4px;
}
.pc-homekit-bar-stack { margin-top: 4px; }

.pc-strip-rows { position: relative; }
.pc-flow-temp-value {
  font-size: var(--pulse-font-stat);
  font-weight: var(--pulse-weight-semibold);
}
.pc-flow-sparkline {
  display: inline-block;
  vertical-align: middle;
}

/* Home Status section */
.pc-section-home-status { }
.pc-home-status-hero {
  text-align: center;
  padding: 16px 0 20px;
}
.pc-home-status-icon {
  --mdc-icon-size: 36px;
  display: block;
  margin: 0 auto 6px;
  color: var(--pc-status-color, var(--pulse-text-primary));
}
.pc-home-status-label {
  font-size: var(--pulse-font-large);
  font-weight: var(--pulse-weight-medium);
  margin-bottom: 4px;
  color: var(--pc-status-color, var(--pulse-text-primary));
}
/* Finite status enum: colour set here, never via inline style.
   --pc-bar-glow mirrors HVAC_VISUALS' fallback hex, only ever read by
   .pc-power-bar-fill.pc-bar-active's box-shadow. */
.pc-status-green    { --pc-status-color: var(--pulse-tier-moderate); --pc-bar-glow: #30d15840; }
.pc-status-amber    { --pc-status-color: var(--pulse-tier-strong);   --pc-bar-glow: #ff9f0a40; }
.pc-status-red      { --pc-status-color: var(--pulse-tier-gale);     --pc-bar-glow: #ff453a40; }
.pc-status-accent   { --pc-status-color: var(--pulse-accent); }
.pc-status-blue     { --pc-status-color: var(--pulse-tier-calm);     --pc-bar-glow: #5ac8fa40; }
.pc-status-disabled { --pc-status-color: var(--pulse-disabled);      --pc-bar-glow: #61616140; }
.pc-status-drying   { --pc-status-color: #9C27B0; --pc-bar-glow: #9C27B040; }
.pc-status-fan      { --pc-status-color: #607D8B; --pc-bar-glow: #607D8B40; }
.pc-home-status-detail {
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
}
.pc-home-status-zones {
  display: flex;
  flex-direction: column;
}
.pc-home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-home-status-row:last-child { border-bottom: none; }
.pc-home-status-row:hover {
  background: var(--pulse-bg-hover);
}
.pc-home-status-zone-name {
  width: 72px;
  flex-shrink: 0;
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-chip);
}
.pc-home-status-actual {
  font-size: var(--pulse-font-stat);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.3px;
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  min-width: 56px;
}
.pc-home-status-actual.pc-off {
  color: var(--pulse-text-secondary);
}
.pc-home-status-arrow {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}
.pc-home-status-target {
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.pc-home-status-delta {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
}
.pc-home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: var(--pulse-radius-tight);
  background: var(--pulse-border-medium);
  overflow: hidden;
}
.pc-home-status-bar-center {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: color-mix(in srgb, white 15%, transparent);
}
.pc-home-status-bar-fill {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: var(--pulse-radius-tight);
  background: var(--pc-status-color, var(--pulse-text-secondary));
}
.pc-home-status-delta-text {
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
  color: var(--pc-status-color, var(--pulse-text-secondary));
}
.pc-home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--pulse-border-medium);
  padding-top: 14px;
  margin-top: 16px;
}
.pc-home-status-summary .pc-stat { text-align: center; }
.pc-home-status-summary .pc-stat-value {
  font-size: var(--pulse-font-summary);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.pc-home-status-summary .pc-stat-label {
  font-size: var(--pulse-font-micro);
  letter-spacing: var(--pulse-ls-kicker);
  margin-top: 6px;
}

/* Zone Ranking section */
.pc-section-zone-ranking { }
.pc-ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.pc-ranking-tabs {
  display: flex;
  gap: var(--pulse-space-panel);
}
.pc-ranking-tab {
  font-size: var(--pulse-font-caption);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-secondary);
  padding: 7px 8px;
  min-height: 24px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid transparent;
  background: none;
  border-radius: 0;
  cursor: pointer;
  transition: color var(--pulse-anim-fast), border-bottom-color var(--pulse-anim-fast);
  user-select: none;
}
.pc-ranking-tab:hover { color: var(--pulse-text-primary); }
.pc-ranking-tab.pc-active {
  color: var(--pulse-tier-strong);
  border-bottom-color: var(--pulse-tier-strong);
}
.pc-ranking-list { }
.pc-rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: var(--pulse-radius-element);
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-rank-row:hover {
  background: var(--pulse-border-subtle);
}
.pc-rank-num {
  width: 24px;
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-medium);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-secondary);
  flex-shrink: 0;
}
.pc-rank-num.pc-top { color: var(--pulse-tier-strong); }
.pc-rank-name {
  flex: 1;
  font-size: var(--pulse-font-body);
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-rank-bar-track {
  flex: 2;
  height: 8px;
  background: var(--pulse-border-medium);
  border-radius: var(--pulse-radius-small);
  margin: 0 12px;
  overflow: hidden;
}
.pc-rank-bar-fill {
  height: 100%;
  border-radius: var(--pulse-radius-small);
  transition: width var(--pulse-anim-reveal) ease, background var(--pulse-anim-color) ease;
  background: var(--pc-status-color, transparent);
}
.pc-rank-value {
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-medium);
  font-variant-numeric: tabular-nums;
  width: 50px;
  text-align: right;
  flex-shrink: 0;
}
.pc-ranking-summary {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--pulse-border-medium);
}
.pc-ranking-summary .pc-stat { text-align: center; }
.pc-ranking-summary .pc-stat-value {
  font-size: var(--pulse-font-summary);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.pc-ranking-summary .pc-stat-label {
  font-size: var(--pulse-font-micro);
  letter-spacing: var(--pulse-ls-kicker);
  margin-top: 6px;
}

/* Responsive degradation for new sections */
@container (max-width: 200px) {
  .pc-section-thermal-strip .pc-time-axis { display: none; }
  .pc-section-comfort-strip svg text { display: none; }
  .pc-api-row { flex-direction: column; }
}

/* Temperature transition glow: brief brightness flash on temp change */
.pc-temp-transitioning {
  filter: brightness(1.4);
  transition: filter var(--pulse-anim-mode) ease-in, filter var(--pulse-anim-fill) ease-out var(--pulse-anim-mode);
}

/* \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pc-hero {
  display: flex; flex-direction: column;
  padding: 4px 0 16px;
  gap: var(--pulse-space-section);
}

.pc-hero-top-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--pulse-space-section);
  flex-wrap: wrap;
}

.pc-hero-temp-block {
  display: flex; flex-direction: column;
  gap: var(--pulse-space-tight);
  min-width: 0;
}

.pc-hero-label {
  font-size: var(--pulse-font-micro); text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--pulse-text-secondary);
}

.pc-hero-temp {
  font-size: 44px; font-weight: var(--pulse-weight-thin); letter-spacing: var(--pulse-ls-display);
  line-height: 1; color: var(--pulse-text-primary);
  font-variant-numeric: tabular-nums;
}

.pc-hero.pc-state-off .pc-hero-temp,
.pc-hero.pc-state-idle .pc-hero-temp { color: var(--pulse-text-secondary); }

.pc-hero-right {
  display: flex; flex-direction: column; align-items: flex-end;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-caption); color: var(--pulse-text-secondary);
  text-align: right; line-height: 1.5;
  flex-shrink: 0;
}

.pc-hero-status {
  display: flex; align-items: center; gap: var(--pulse-space-tight);
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-hero-outside {
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  font-variant-numeric: tabular-nums;
}

/* Per-zone dot cluster: breathes via master pulse phase */
.pc-hero-dots {
  display: flex; align-items: center;
  gap: 10px; flex: 0 1 auto;
  flex-wrap: wrap;
  max-width: 280px;
}

.pc-hero-zone-dot {
  width: 10px; height: 10px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.5);
  transition: opacity var(--pulse-anim-base) ease;
}

.pc-hero-zone-dot.pc-hero-dot-heating {
  background: var(--pulse-tier-strong);
  box-shadow: 0 0 12px var(--pulse-tier-strong);
  opacity: calc(0.7 + 0.3 * var(--pc-pulse-phase));
}

.pc-hero-zone-dot.pc-hero-dot-cooling {
  background: var(--pulse-tier-calm);
  box-shadow: 0 0 12px var(--pulse-tier-calm);
  opacity: calc(0.7 + 0.3 * var(--pc-pulse-phase));
}

.pc-hero-zone-dot.pc-hero-dot-idle    { background: rgba(255,255,255,0.5); opacity: 0.5; }
.pc-hero-zone-dot.pc-hero-dot-off,
.pc-hero-zone-dot.pc-hero-dot-unavail { background: rgba(255,255,255,0.15); opacity: 0.3; }

/* Per-zone strip block: N rows of 24 cells, left-edge state ribbon */
.pc-hero-strips {
  display: flex; flex-direction: column;
  gap: 3px;
  margin-top: 6px;
}

.pc-hero-zone-strip {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 10px;
  align-items: center;
}

.pc-hero-zone-strip-label {
  font-size: var(--pulse-font-caption); font-weight: var(--pulse-weight-medium);
  text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--pulse-text-primary);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.pc-hero-zone-strip-cells {
  display: flex; gap: var(--pulse-space-pin);
  height: 7px;
  flex: 1;
  border-radius: var(--pulse-radius-small);
  overflow: hidden;
  position: relative;
}

.pc-hero-zone-strip-cells::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px;
  background: var(--pc-strip-edge, transparent);
  z-index: 2;
}

.pc-hero-zone-strip-cells span { flex: 1; }
.pc-hero-zone-strip-cell-ghost { background: var(--pulse-bg-card-strong, rgba(255, 255, 255, 0.04)); }

.pc-hero-zone-strip.pc-row-heat   { --pc-strip-edge: var(--pulse-tier-strong); }
.pc-hero-zone-strip.pc-row-cool   { --pc-strip-edge: var(--pulse-tier-calm); }
.pc-hero-zone-strip.pc-row-idle   { --pc-strip-edge: rgba(255,255,255,0.15); }
.pc-hero-zone-strip.pc-row-off,
.pc-hero-zone-strip.pc-row-unavail { --pc-strip-edge: rgba(255,255,255,0.06); }
.pc-hero-zone-strip.pc-row-off .pc-hero-zone-strip-cells { opacity: 0.3; }

.pc-hero-zone-strip-overflow .pc-hero-zone-strip-label {
  color: var(--pulse-text-secondary);
  font-style: italic;
}

@container (max-width: 280px) {
  .pc-hero-top-row { flex-direction: column; align-items: flex-start; }
  .pc-hero-right { align-items: flex-start; text-align: left; }
}

/* \u2500\u2500 Atmosphere wash \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 * Single radial wash that flips with home state: heating sweeps down
 * from the top, cooling sweeps up from the bottom, mixed shows both
 * with reduced intensity. Idle/off render no markup at all (handled
 * in atmosphere.js); the wash element only exists for active states. */

.pc-atmosphere-wash {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
  overflow: hidden;
  opacity: var(--pc-atmosphere-opacity, 0.4);
  transition: opacity var(--pulse-anim-reveal) ease,
              background var(--pulse-anim-reveal) ease;
}

.pc-atmosphere-wash.pc-state-heating {
  background: radial-gradient(ellipse 80% 50% at 50% -30%,
    rgba(255, 159, 10, 0.5), transparent 60%);
}

.pc-atmosphere-wash.pc-state-cooling {
  background: radial-gradient(ellipse 80% 50% at 50% 130%,
    rgba(90, 200, 250, 0.5), transparent 60%);
}

.pc-atmosphere-wash.pc-state-mixed {
  background:
    radial-gradient(ellipse 80% 50% at 50% -30%, rgba(255, 159, 10, 0.35), transparent 60%),
    radial-gradient(ellipse 80% 50% at 50% 130%, rgba(90, 200, 250, 0.25), transparent 60%);
}

.pc-atmosphere-wash.pc-intensity-subtle { --pc-atmosphere-opacity: 0.25; }
.pc-atmosphere-wash.pc-intensity-medium { --pc-atmosphere-opacity: 0.4; }
.pc-atmosphere-wash.pc-intensity-bold   { --pc-atmosphere-opacity: 0.6; }

/* Card content sits above backdrop */
.pc-card-content {
  position: relative;
  z-index: 1;
}

/* Scoped to :host, not .pc-card-content, the atmosphere wash is a sibling of
   that wrapper and the master pulse animates the host itself. Pinning the phase
   to 0.5 rests pulsing elements at their neutral size. */
@media (prefers-reduced-motion: reduce) {
  :host,
  :host *,
  :host *::before,
  :host *::after {
    animation: none !important;
    transition: none !important;
  }
  :host { --pc-pulse-phase: 0.5; }
  .pc-temp-transitioning { filter: none; }
  .pc-atmosphere-wash { --pc-atmosphere-opacity: 0.3; }
}

/* \u2500\u2500 Timeline group \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 * Shared row grid for both Thermal and State tabs inside timeline_group.
 * Layout: 70px name \xB7 1fr cells \xB7 60px stat. State and thermal views render
 * row-by-row using this grid so zones stay vertically aligned across tab
 * switches. Body renderers also drive system_health_group rows; the host
 * owns the section header + tab strip. */

.pc-section-timeline-group {
  display: flex; flex-direction: column;
  gap: var(--pulse-space-tight);
}


.pc-timeline-group-tabs,
.pc-system-health-group-tabs {
  display: flex; gap: 0;
  font-size: var(--pulse-font-caption);
  margin-bottom: 6px;
  border-bottom: 1px solid color-mix(in srgb, var(--pulse-text-primary) 6%, transparent);
}

.pc-timeline-group-tab,
.pc-system-health-group-tab {
  padding: 8px 14px; cursor: pointer;
  color: var(--pulse-text-secondary);
  border-bottom: 1px solid transparent;
  text-transform: uppercase; letter-spacing: 0.6px;
  font-weight: var(--pulse-weight-semibold);
  transition: color var(--pulse-anim-fast), border-bottom-color var(--pulse-anim-fast);
  user-select: none;
}

.pc-timeline-group-tab:hover,
.pc-system-health-group-tab:hover { color: var(--pulse-text-primary); }

.pc-timeline-group-tab.pc-active,
.pc-system-health-group-tab.pc-active {
  color: var(--pulse-tier-strong);
  border-bottom-color: var(--pulse-tier-strong);
}

.pc-timeline-group-row {
  display: grid;
  grid-template-columns: 72px 1fr 56px;
  gap: 6px;
  align-items: center;
  font-size: var(--pulse-font-body);
  margin-bottom: 4px;
}

.pc-timeline-group-name {
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.pc-timeline-group-stat {
  text-align: right;
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-secondary);
}

.pc-timeline-group-stat.pc-state-active-heat { color: var(--pulse-tier-strong); }
.pc-timeline-group-stat.pc-state-active-cool { color: var(--pulse-tier-calm); }

.pc-timeline-group-axis {
  margin-top: 6px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  display: grid;
  grid-template-columns: 72px 1fr 56px;
  gap: 6px;
}

.pc-timeline-group-axis .ticks {
  display: flex; justify-content: space-between;
}

.pc-timeline-group-stat-head {
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-disabled);
}

.pc-timeline-group-footer {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid color-mix(in srgb, var(--pulse-text-primary) 4%, transparent);
  display: flex; justify-content: space-between;
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  flex-wrap: wrap;
  gap: var(--pulse-space-element);
}

.pc-timeline-group-footer strong {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-state-legend {
  display: flex; gap: var(--pulse-space-element);
  flex-wrap: wrap;
}

.pc-state-legend-pill {
  display: inline-flex; align-items: center;
  gap: var(--pulse-space-tight);
}

.pc-state-legend-pip {
  display: inline-block;
  width: 10px; height: 10px;
  border-radius: 2px;
}

.pc-state-legend-pip-heat { background: var(--pulse-tier-strong); }
.pc-state-legend-pip-cool { background: var(--pulse-tier-calm); }
.pc-state-legend-pip-idle { background: rgba(255, 255, 255, 0.08); }
.pc-state-legend-pip-off  { background: rgba(255, 255, 255, 0.025); }

/* State row tap-for-details: single-zone drill-down. Compare overlay is
   intentionally not offered (categorical state timelines don't read
   stacked; the multi-row layout itself is the compare view). */
.pc-state-row { cursor: pointer; border-radius: var(--pulse-radius-pill); transition: background var(--pulse-anim-fast); }
.pc-state-row:hover { background: var(--pulse-bg-hover); }
.pc-state-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}

.pc-state-detail-footer {
  margin-top: var(--pulse-space-element);
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-align: right;
}

/* Thermal tab temperature legend: colour pips paired with anchor temps */
.pc-temp-legend {
  display: flex; gap: var(--pulse-space-element);
  flex-wrap: wrap;
}

.pc-temp-legend-pill {
  display: inline-flex; align-items: center;
  gap: var(--pulse-space-tight);
  font-variant-numeric: tabular-nums;
}

.pc-temp-legend-pip {
  display: inline-block;
  width: 10px; height: 10px;
  border-radius: 2px;
}
/* One rule per TEMP_COLOR_BANDS entry (chart-primitives.js), indexed by
   array position, keep both in sync if the band colours ever change. */
.pc-temp-legend-pip.pc-temp-band-0  { background: #1565C0; }
.pc-temp-legend-pip.pc-temp-band-1  { background: #4FC3F7; }
.pc-temp-legend-pip.pc-temp-band-2  { background: #4DB6AC; }
.pc-temp-legend-pip.pc-temp-band-3  { background: #81C784; }
.pc-temp-legend-pip.pc-temp-band-4  { background: #AED581; }
.pc-temp-legend-pip.pc-temp-band-5  { background: #C5E1A5; }
.pc-temp-legend-pip.pc-temp-band-6  { background: #FFF176; }
.pc-temp-legend-pip.pc-temp-band-7  { background: #FFB74D; }
.pc-temp-legend-pip.pc-temp-band-8  { background: #FF8A65; }
.pc-temp-legend-pip.pc-temp-band-9  { background: #FF7043; }
.pc-temp-legend-pip.pc-temp-band-10 { background: #F4511E; }
.pc-temp-legend-pip.pc-temp-band-11 { background: #EF5350; }
.pc-temp-legend-pip.pc-temp-band-12 { background: #EC407A; }
.pc-temp-legend-pip.pc-temp-band-13 { background: #E91E63; }
.pc-temp-legend-pip.pc-temp-band-14 { background: #D81B60; }
.pc-temp-legend-pip.pc-temp-band-15 { background: #C2185B; }
.pc-temp-legend-pip.pc-temp-band-16 { background: #AD1457; }
.pc-temp-legend-pip.pc-temp-band-17 { background: #880E4F; }

/* State timeline cells (consumed by state-timeline-view) */
.pc-state-timeline-cells {
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  gap: 1px;
  height: 16px;
  border-radius: 2px;
  overflow: hidden;
}

.pc-state-cell { display: block; }
.pc-state-cell.pc-state-cell-heat     { background: var(--pulse-tier-strong); }
.pc-state-cell.pc-state-cell-heat-mid { background: rgba(255, 159, 10, 0.55); }
.pc-state-cell.pc-state-cell-heat-low { background: rgba(255, 159, 10, 0.30); }
.pc-state-cell.pc-state-cell-cool     { background: var(--pulse-tier-calm); }
.pc-state-cell.pc-state-cell-cool-mid { background: rgba(90, 200, 250, 0.55); }
.pc-state-cell.pc-state-cell-cool-low { background: rgba(90, 200, 250, 0.30); }
.pc-state-cell.pc-state-cell-idle     { background: rgba(255, 255, 255, 0.08); }
.pc-state-cell.pc-state-cell-off      { background: rgba(255, 255, 255, 0.025); }

`;function Fr(t){!t||t.__pcPhaseAttached||(t.__pcPhaseAttached=!0)}var Nr={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},Tl={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",battery:"battery",connection:"connection",insights:"insights",heating_circuit:"heating_circuit"},Al={battery:"battery",connection:"connection"},Cl={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]},heating_circuit:{platform:"select",suffixes:["_heating_circuit"]}},El={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function Ml(t){let e=new Map;for(let[o,n]of Object.entries(t))n.platform==="tado_ce"&&n.translation_key&&(e.has(n.translation_key)||e.set(n.translation_key,o));return{byTranslationKey:e}}function Fl(t,e){let o={};for(let[n,i]of Object.entries(Nr)){let r=e.byTranslationKey.get(i);r&&(o[n]=r)}return o}function Il(t,e,o){let n={},i={...Tl,...Al};for(let r of e){n[r]={};let a=t[`climate.${r}`]??t[`water_heater.${r}`];if(!a?.device_id||a.platform!=="tado_ce")continue;let s=a.device_id;for(let[l,p]of Object.entries(t)){if(p.platform!=="tado_ce"||p.device_id!==s||!p.translation_key||!o[l])continue;let d=p.translation_key;if(d.endsWith("_suffixed")){let c=d.replace("_suffixed",""),m=Object.keys(i).find(u=>i[u]===c);if(!m)continue;if(!n[r][m])n[r][m]=l;else{let u=2;for(;n[r][`${m}_${u}`];)u++;n[r][`${m}_${u}`]=l}}else{let c=Object.keys(i).find(m=>i[m]===d);if(!c)continue;n[r][c]||(n[r][c]=l)}}}return n}function Ir(t){let e={},o=Object.keys(t);for(let[n,{platform:i,suffixes:r}]of Object.entries(El))for(let a of r){let s=o.find(l=>l.startsWith(`${i}.tado_ce`)&&l.endsWith(a));if(s){e[n]=s;break}}return e}function Lr(t,e){let o={};for(let n of e){o[n]={};for(let[i,{platform:r,suffixes:a}]of Object.entries(Cl))for(let s of a){let l=`${r}.${n}${s}`;if(t[l]){o[n][i]=l;break}}}return o}var he={states:null,zoneNames:null,result:null};function zr(t,e,o){if(he.result&&he.states===t&&he.zoneNames!==null&&he.zoneNames.length===e.length&&he.zoneNames.every((p,d)=>p===e[d]))return he.result;let n=!1,i=!1;o&&(n=Object.values(o).some(p=>p.platform==="tado_ce"),i=n),n||(n=Object.keys(t).some(p=>p.startsWith("sensor.tado_ce_")));let r={};if(n)if(i){let p=Ml(o);r=Fl(o,p);let d=Ir(t);for(let[c,m]of Object.entries(d))r[c]||(r[c]=m)}else r=Ir(t);let a;if(i){a=Il(o,e,t);let p=Lr(t,e);for(let d of e){a[d]||(a[d]={});let c=p[d]||{};for(let[m,u]of Object.entries(c))a[d][m]||(a[d][m]=u)}}else a=Lr(t,e);let s=Object.keys(Nr).filter(p=>!r[p]),l={isTadoCE:n,hubEntities:r,zoneEntities:a,missingHubKeys:s};if(n)for(let[p,d]of Object.entries(a))Object.keys(d).length===0&&console.debug(`${me} zone "${p}", no Tado CE entities discovered. Check entity_id matches sensor.<zone>_temperature pattern, or use temperature_entity / set_point_entity overrides.`);return he={states:t,zoneNames:[...e],result:l},l}function X(t){return t.replace(/^(climate|water_heater|sensor|binary_sensor)\./,"")}var Ll=["heating_power_entity","open_window_entity","battery_entity","mold_risk_entity"];function Ke(t,e){let o=Object.values(e?.zoneEntities?.[X(t.entity)]||{}),n=Ll.map(i=>t[i]);return[...new Set([t.entity,...n,...o].filter(i=>typeof i=="string"&&i))]}var Ct=bo(me);function ft(t){let e=Me(t);return e==="unavail"||e==="sensor"||e==="off"?` pc-row-${e} pc-row-quiet`:e==="heat"||e==="cool"?` pc-row-${e} pc-row-active`:` pc-row-${e} pc-row-mid`}var Nl={heating:"Heating",cooling:"Cooling",drying:"Drying",fan:"Fan",preheating:"Preheating",defrosting:"Defrosting",idle:"Idle",off:"Off"};function Ot(t){return t.isUnavailable?"Unavailable":Nl[t.hvacAction]??"Idle"}function st(t){return(t.power??0)>0||t.hvacAction==="heating"||t.hvacAction==="cooling"}function Jt(t,e){return t.isUnavailable?"Unavailable":st({power:e,hvacAction:t.hvacAction})?Rl(t.hvacAction,e,!!t.hasPowerData):Ot(t)}function Me(t){return t?.isUnavailable?"unavail":t?.hvacMode==="sensor"?"sensor":t?.hvacAction==="heating"?"heat":t?.hvacAction==="cooling"?"cool":t?.hvacAction==="off"?"off":["drying","fan","preheating","defrosting"].includes(t?.hvacAction)||t?.targetTemp===null||t?.targetTemp===void 0?"idle":t?.currentTemp!==null&&t?.currentTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=Xt(Un)+1e-9?"at-target":"idle"}function tt(t,e,o,n){let i=t.entity,r=X(i),a=e?.zoneEntities?.[r]||{},s=ie(i,a,o,t,n||{});return{entityId:i,zoneName:r,zoneEntities:a,zoneState:s}}var Rr=new Set;function Co(t,e,o,n){if(!o||n[o])return;let i=`${t}|${e}|${o}`;Rr.has(i)||(Rr.add(i),Ct(`zone "%s": ${e} override points at missing entity "%s", chip will not render`,t,o))}function Fe(t){let e=Kt[t]||Kt.idle;return{...e,glow:t==="heating"||t==="cooling"?e.fallback:null}}function Je(t){let e=t.filter(r=>!r.isUnavailable);if(e.length===0)return"off";let o=0,n=0,i=0;for(let r of e)r.hvacAction==="heating"?o+=1:r.hvacAction==="cooling"?n+=1:r.hvacAction==="off"&&(i+=1);return o>0&&n>0?"mixed":o>0?"heating":n>0?"cooling":i===e.length?"off":"idle"}function Qe(t,e,o,n){let i=ie(t,n||{},e,o||{entity:t},{});return{name:i.name,temp:i.currentTemp??void 0,target:i.targetTemp??void 0,humidity:i.humidity??void 0,hvacAction:i.hvacAction,unit:i.unit}}function Eo(t){let e=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();return Wn[e]||Wn.Low}function jn(t,e,o){return o<=e?50:Tt((t-e)/(o-e),0,1)*100}function zl(t,e,o,n){let i=[],r=!n,a=l=>r||n.includes(l);if(n&&a("humidity")&&t.humidity!==null&&i.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(t.humidity)}%`}),n&&a("hvac_action")){let l=Fe(t.hvacAction);i.push({type:"hvac_action",icon:l.icon,label:l.label,tier:l.tier??void 0})}if(a("overlay")&&t.overlayType&&!(r&&t.overlayType==="Off")){let l=t.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";i.push({type:"overlay",icon:l,label:t.overlayType,entityId:e.overlay})}if(a("preset")&&t.presetMode){let l=t.presetMode==="away"?"mdi:home-export-outline":"mdi:home";i.push({type:"preset",icon:l,label:t.presetMode==="away"?"Away":"Home"})}let s=(l,p,d)=>{if(!a(l)||!e[d])return;let c=o[e[d]];if(!Q(c)&&c.state.toLowerCase()!=="none"){let m=Eo(c.state);i.push({type:l,icon:p,label:c.state,tier:m.tier,severity:c.state,entityId:e[d]})}};if(a("open_window")&&e.open_window){let l=o[e.open_window];if(l&&!Q(l)){let p=l.state==="on";i.push({type:"open_window",icon:p?"mdi:window-open":"mdi:window-closed",label:p?"Open":"Closed",tier:p?"red":void 0,entityId:e.open_window})}}if(s("mold_risk","mdi:mushroom","mold_risk"),s("condensation","mdi:water-alert","condensation"),a("comfort_level")&&e.comfort_level){let l=o[e.comfort_level];Q(l)||i.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:e.comfort_level})}if(a("preheat_now")&&e.preheat_now){let l=o[e.preheat_now];l&&l.state==="on"&&i.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",tier:"amber",entityId:e.preheat_now})}if(a("battery")||a("battery_all")){let l=n&&n.includes("battery_all"),p=[],d=["battery"],c=2;for(;e[`battery_${c}`];)d.push(`battery_${c}`),c++;for(let m of d){let u=e[m];if(!u)continue;let h=o[u];Q(h)||p.push({eid:u,state:h.state,lower:h.state.toLowerCase()})}if(p.length>0)if(l)for(let m=0;m<p.length;m++){let u=p[m],h=u.lower==="low"||u.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=u.lower==="critical"?"red":u.lower==="low"?"amber":void 0;i.push({type:`battery${m>0?`_${m+1}`:""}`,icon:h,label:u.state,tier:g,entityId:u.eid})}else{let m={critical:3,low:2,normal:1},u=p[0];for(let v of p)(m[v.lower]||0)>(m[u.lower]||0)&&(u=v);let h=u.lower==="low"||u.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=u.lower==="critical"?"red":u.lower==="low"?"amber":void 0;i.push({type:"battery",icon:h,label:u.state,tier:g,entityId:u.eid})}}if(a("valve_control")){let p=o[t.entityId]?.attributes||{},d=p.valve_control_active,c=p.valve_target,m=p.valve_control_backed_off,u=p.valve_control_enabled;m===!0?i.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",tier:"disabled"}):d===!0&&c!==void 0?i.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${ht(c)}${t.unit}`,tier:"amber"}):u===!0&&i.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Idle",tier:"disabled"})}if(n&&a("temp_source")){let p=o[t.entityId]?.attributes?.temperature_source;if(p&&p!=="cloud"){let d=p==="external"?"mdi:thermometer-probe":p==="homekit"?"mdi:apple":"mdi:cloud-outline";i.push({type:"temp_source",icon:d,label:p.charAt(0).toUpperCase()+p.slice(1)})}}if(n&&a("heating_circuit")&&e.heating_circuit){let l=o[e.heating_circuit];if(l&&!Q(l)&&l.state!=="no_heating_circuit"){let p=l.state,d=p.startsWith("circuit_")?`Circuit ${p.slice(8)}`:`Circuit: ${p.length>=8?`${p.slice(0,4)}\u2026${p.slice(-3)}`:p}`;i.push({type:"heating_circuit",icon:"mdi:radiator",label:d,entityId:e.heating_circuit})}}return i}function K(t,e){return t==null||!Number.isFinite(t)?"--":`${ht(t)}${e}`}function Et(t){return t==null||!Number.isFinite(t)?"--":`${Math.round(t)}%`}function Rl(t,e,o){let n=t==="cooling"?"Cooling":"Heating";return o?`${n} ${Math.round(e)}%`:n}function fe(t){let e=t.filter(o=>!o.isUnavailable&&o.hvacAction!=="off"&&o.hasPowerData);return e.length===0?null:Math.round(e.reduce((o,n)=>o+n.power,0)/e.length)}function Hl(t,e,o,n,i,r,a){if(e)return"idle";if(t==="dry")return"drying";if(t==="fan_only")return"fan";if(a)return i>0?"heating":r<=0?"idle":t==="heat"?"heating":t==="cool"?"cooling":typeof n=="number"&&o&&n<o.low?"heating":"cooling";if(typeof n!="number"||!o)return"idle";let s=t==="heat"||t==="auto"||t==="heat_cool",l=t==="cool"||t==="auto"||t==="heat_cool",p=Xt(Un)+1e-9;return s&&o.low-n>p?"heating":l&&n-o.high>p?"cooling":"idle"}function Gn(t){let e=parseFloat(t);return Number.isFinite(e)?Tt(e,0,100):null}function ie(t,e,o,n,i){let r=o[t],a=Q(r),s=r?.attributes||{},l=t.startsWith("sensor."),p=l?a?null:Number.isFinite(parseFloat(r?.state))?parseFloat(r?.state):null:s.current_temperature??null,d=Number(s.min_temp??ee(5)),c=!l&&r?.state==="heat"&&Object.keys(e||{}).length>0&&typeof s.temperature=="number"&&s.temperature<=d&&typeof s.hvac_action=="string"&&s.hvac_action!==""&&s.hvac_action!=="heating",m=typeof s.temperature!="number"&&typeof s.target_temp_low=="number"&&typeof s.target_temp_high=="number",u=m&&typeof p=="number"&&Math.abs(p-s.target_temp_high)<Math.abs(p-s.target_temp_low)?s.target_temp_high:s.target_temp_low,h=a||r?.state==="off"||c?null:m?u:s.temperature??null,g=null;m?g={low:s.target_temp_low,high:s.target_temp_high}:typeof s.temperature=="number"&&(g={low:s.temperature,high:s.temperature});let v=l?null:s.current_humidity??null,w=l?"sensor":r?.state||"off",b=s.preset_mode||"",y=Number(s.max_temp??ee(35)),_=Number(s.target_temp_step??.5),S=pt(s),$=null,A=n.heating_power_entity||e.heating_power;if(n.heating_power_entity&&Co(n.name||t,"heating_power_entity",n.heating_power_entity,o),A){let U=o[A];Q(U)||($=Gn(U.state))}else s.heating_power!==void 0&&($=Gn(s.heating_power));let M=$??0,I=null;if(e.ac_power){let U=o[e.ac_power];Q(U)||(I=Gn(U.state))}let L=I??0,T=$!==null,C=I!==null,x=T||C,E=!l&&r?.state==="off",F=l?"idle":E||c?"off":s.hvac_action||Hl(r?.state,a,g,p,M,L,x),N=E?"off":s.hvac_action||(l?"":F);N&&N!=="heating"&&N!=="cooling"?(M=0,L=0):N==="cooling"&&(M=0);let z="";if(e.overlay){let U=o[e.overlay];Q(U)||(z=U.state)}else s.overlay_type&&(z=s.overlay_type);let R=n.name||s.friendly_name||X(t),O=n.icon||s.icon||"mdi:thermometer",V=n.chips||i.chips||null,q={...e},D=n.name||t;n.open_window_entity&&(q.open_window=n.open_window_entity,Co(D,"open_window_entity",n.open_window_entity,o)),n.battery_entity&&(q.battery=n.battery_entity,Co(D,"battery_entity",n.battery_entity,o)),n.mold_risk_entity&&(q.mold_risk=n.mold_risk_entity,Co(D,"mold_risk_entity",n.mold_risk_entity,o));let P=m&&!a&&r?.state!=="off"?{low:s.target_temp_low,high:s.target_temp_high}:null,H={entityId:t,name:R,icon:O,isUnavailable:a,currentTemp:p,targetTemp:h,targetRange:P,humidity:v,heatingPower:M,coolingPower:L,hasPowerData:x,hasHeatingPowerData:T,hasAcPowerData:C,hvacAction:F,hvacMode:w,presetMode:b,overlayType:z,minTemp:d,maxTemp:y,tempStep:_,unit:S,chips:[]};return H.chips=zl(H,q,o,V),H}var Hr=280;function Dr(t,e=Hr){return t<=50?0:(2+(t-50)/50*3)*(e/Hr)}function Or(t,e=20,o=1){if(o<=0)return 0;let n=Math.min(4,Math.max(2,Math.round(t/30))),i=Math.floor(e/o);return Math.min(n,i)}function Pr(t){return 4-t/100*2.5}function Br(t,e){return 1.5+t/e*1.5}function ge(t,e){return 3*(t/e)}function qr(t){if(!t)throw new Error("Please define an entity or zones");if(!t.entity&&!t.zones)throw new Error("Please define an entity or zones");if(t.entity&&typeof t.entity=="string"&&!t.entity.startsWith("climate.")&&!t.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let e;t.zones?e=t.zones.map(r=>typeof r=="string"?{entity:r}:{...r}):e=[{entity:t.entity}];for(let r of e)if(!r.entity||typeof r.entity!="string")throw new Error("Each zone must have an entity ID");let o=t.atmosphere_intensity,n=o==="subtle"||o==="bold"?o:"medium",i={...t,columns:Number(t.columns)||ne.columns,layout:t.layout||ne.layout,show_temp_bar:t.show_temp_bar??ne.show_temp_bar,show_power_bar:t.show_power_bar??ne.show_power_bar,show_atmosphere:t.show_atmosphere!==!1,atmosphere_intensity:n,show_hero:t.show_hero===!0,hero_show_thermal_strip:t.hero_show_thermal_strip!==!1,hero_show_outside:t.hero_show_outside!==!1,tap_action:t.tap_action||{...ne.tap_action},hold_action:t.hold_action||{...ne.hold_action},double_tap_action:t.double_tap_action||{...ne.double_tap_action},sections:t.sections||[...Er],_zones:e};return Array.isArray(i.sections)&&(i.sections=i.sections.map(r=>{let a=typeof r=="string"?{type:r}:{...r},s=Mr[a.type];if(s){for(let[l,p]of Object.entries(s))if(a[l]===void 0||a[l]===null)a[l]=p;else if(typeof p=="number"){let d=Number(a[l]);Number.isFinite(d)?a[l]=d||p:(Ct('section "%s": %s=%o is not numeric, using default %o',a.type,l,a[l],p),a[l]=p)}}return a})),i}function Zn(t,e,o){let n=new Map;if(!Array.isArray(t))return n;for(let i of t){if(!i?.entity)continue;let r=o?o(i.entity):i.entity;n.set(i.entity,e?.data?.[r]||[])}return n}function Ie(t){return typeof t=="string"&&t.length>0}function ct(t,e,o,n){if(Ie(n?.temperature_entity))return{entityId:n.temperature_entity,source:"yaml_override"};let r=e[t]?.attributes?.external_temp_sensor;return Ie(r)&&e[r]?{entityId:r,source:"external"}:Ie(o?.temperature)?{entityId:o.temperature,source:"discovery"}:{entityId:t,source:"climate_fallback"}}function Wt(t,e,o,n){if(Ie(n?.humidity_entity))return{entityId:n.humidity_entity,source:"yaml_override"};let r=e[t]?.attributes?.external_humidity_sensor;return Ie(r)&&e[r]?{entityId:r,source:"external"}:Ie(o?.humidity)?{entityId:o.humidity,source:"discovery"}:null}var Mo={timestamp:0,data:{},stateData:{},fetchedAt:{}};function Ur(){return Mo}function Wr(t,e){return Mo=Xn(Mo,t,e),Mo}function Vr(){return{timestamp:0,data:{},stateData:{},fetchedAt:{}}}function Yn(t,e,o=[],n=Date.now()){let i=t.fetchedAt||{},r=a=>i[a]>0&&n-i[a]<3e5;return e.every(r)&&o.every(a=>r("state:"+a))}function Xn(t,e,o){let n=Date.now(),i={...t.data},r={...t.stateData},a={...t.fetchedAt};for(let[s,l]of Object.entries(e))l.length>0&&(i[s]=l,a[s]=n);for(let[s,l]of Object.entries(o||{}))Array.isArray(l)&&l.length>0&&(r[s]=l,a["state:"+s]=n);return{...t,timestamp:n,data:i,stateData:r,fetchedAt:a}}function jr(t,e){if(t.length===0||e<1)return[];let o=t[0].t,r=(t[t.length-1].t-o||1)/e,a=[],s=0,l=t[0].v;for(let p=0;p<e;p++){let d=o+(p+1)*r,c=0,m=0;for(;s<t.length&&t[s].t<d;)c+=t[s].v,m++,s++;m>0&&(l=c/m),a.push({x:p/(e-1||1),v:l})}return a}function Dl(t,e,o,n,i){let a=o-4,s=i-n||1,l=t.map(p=>({x:p.x*e,y:2+a-(p.v-n)/s*a}));return Nn(l)}function Ol(t,e,o,n){if(!t||t.length===0)return[];let i=o??e/2-2,r=n??i*.6,a=e/2,s=e/2,l=t.map(m=>Math.max(0,m.value)),p=l.reduce((m,u)=>m+u,0);if(p===0)return[];let d=[],c=-90;for(let m=0;m<t.length;m++){if(l[m]===0)continue;let u=l[m]/p*360;u>=360&&(u=359.9);let h=c+u,g=Io(a,s,r,i,c,h);d.push({label:t[m].label,color:t[m].color,d:g,angle:u}),c=h}return d}function Kn(t="pc-bloom"){return Te(t)}function Lt(t,e=1.5,o){let n=o||"-30%",i=o==="-5%"?"110%":"160%",r=o===void 0?"":` x="${n}" y="${n}" width="${i}" height="${i}"`;return`<filter id="${t}"${r}><feGaussianBlur stdDeviation="${e}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`}function Fo(t,e={}){let o=e.size||120,n=e.ariaLabel||t.map(w=>`${w.label} ${w.value}`).join(", "),i=e.centerNumStyle||"",r=e.centerLabel,a=Ol(t,o),s=t.reduce((w,b)=>w+b.value,0);if(t.length===0)return{html:"",total:0};let l=Kn("donut-bloom"),p=0,d=-1;for(let w=0;w<a.length;w++){let b=t[w]?.value||0;b>p&&(p=b,d=w)}let c=o<=80?1.5:3,m=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="${f(n)}">`;m+=`<defs>${Lt(l,c,"-30%")}</defs>`;let u=o/2-2,h=u*.6;m+=`<circle cx="${o/2}" cy="${o/2}" r="${((u+h)/2).toFixed(1)}" fill="none" stroke="var(--pulse-border-divider)" stroke-width="${(u-h).toFixed(1)}" />`;for(let w=0;w<a.length;w++){let b=a[w],y=w===d,_=y?"pc-donut-arc pc-donut-arc-active":"pc-donut-arc",S=y?` filter="url(#${l})"`:"";m+=`<path d="${b.d}" fill="${k(b.color)}" class="${_}"${S} data-segment="${f(b.label)}"><title>${f(b.label)}: ${Math.round(b.angle/360*s)}</title></path>`}m+="</svg>";let g='<div class="pc-donut-center">',v=i?` style="${k(i)}"`:"";return g+=`<div class="pc-donut-center-num"${v}>${f(Math.round(s))}</div>`,r!=null&&(g+=`<div class="pc-donut-center-label">${f(r)}</div>`),g+="</div>",{html:m+g,total:s}}function Le(t){if(!t||t.length===0)return"";let e='<div class="pc-chart-legend">';for(let o of t){let n=k(o.color),i=f(o.label),r=o.value!==void 0&&o.value!==null?` ${f(o.value)}`:"";e+=`<span class="pc-legend-chip"><span class="pc-legend-dot" style="background:${n}"></span>${i}${r}</span>`}return e+="</div>",e}var Ne=[{upper:14,color:"#1565C0"},{upper:16,color:"#4FC3F7"},{upper:17,color:"#4DB6AC"},{upper:18,color:"#81C784"},{upper:19,color:"#AED581"},{upper:20,color:"#C5E1A5"},{upper:21,color:"#FFF176"},{upper:22,color:"#FFB74D"},{upper:23,color:"#FF8A65"},{upper:24,color:"#FF7043"},{upper:25,color:"#F4511E"},{upper:26,color:"#EF5350"},{upper:27,color:"#EC407A"},{upper:28,color:"#E91E63"},{upper:30,color:"#D81B60"},{upper:32,color:"#C2185B"},{upper:34,color:"#AD1457"},{upper:null,color:"#880E4F"}];function dt(t){let e=Ze(t);for(let o of Ne)if(o.upper===null||e<=o.upper)return o.color;return"#C62828"}function to(t){return t<=20?"#C62828":t<=30?"#EF5350":t<=35?"#FF8A65":t<=40?"#FFB74D":t<=45?"#AED581":t<=55?"#4CAF50":t<=60?"#AED581":t<=65?"#4DB6AC":t<=70?"#4FC3F7":t<=80?"#1E88E5":"#1565C0"}function Io(t,e,o,n,i,r){let a=i*Math.PI/180,s=r*Math.PI/180,l=r-i,p=Math.abs(l)>180?1:0,d=t+n*Math.cos(a),c=e+n*Math.sin(a),m=t+n*Math.cos(s),u=e+n*Math.sin(s),h=t+o*Math.cos(s),g=e+o*Math.sin(s),v=t+o*Math.cos(a),w=e+o*Math.sin(a);return[`M${d.toFixed(2)},${c.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${p} 1 ${m.toFixed(2)},${u.toFixed(2)}`,`L${h.toFixed(2)},${g.toFixed(2)}`,`A${o.toFixed(2)},${o.toFixed(2)} 0 ${p} 0 ${v.toFixed(2)},${w.toFixed(2)}`,"Z"].join(" ")}function Pt(t,e,o,n=48){if(!t||t.length<2)return null;let i=t.filter(m=>isFinite(m.v));if(i.length<2)return null;let r=Date.now(),a=i[i.length-1];r-a.t>6e5&&i.push({t:r,v:a.v});let s=jr(i,n);if(s.length<2)return null;let l=1/0,p=-1/0;for(let m of s)m.v<l&&(l=m.v),m.v>p&&(p=m.v);isFinite(l)||(l=0),isFinite(p)||(p=100);let d=Dl(s,e,o,l,p);if(!d)return null;let c=`${d} L${e.toFixed(1)},${o.toFixed(1)} L0,${o.toFixed(1)} Z`;return{linePath:d,areaPath:c}}function Jn(t,e=24,o="",n){if(!t||t.length<2)return"";let i=t.filter(d=>isFinite(d.v));if(i.length<2)return"";let r=jr(i,e),a=i[0].t,s=i[i.length-1].t,l=i.every(d=>Number.isInteger(d.v)),p={u:o,d:[]};return p.d=r.map(d=>{let c=a+d.x*(s-a),m=G(new Date(c),n),u=l?Math.round(d.v):Math.round(d.v*10)/10;return{l:m,v:u}}),JSON.stringify(p)}function re(t,e,o,n,i,r=""){if(!t||t.length<2)return"";let a=Pt(t,e,o,24);if(!a)return"";let s=k(n),l=`<div class="pc-sparkline-filled" style="height:${o}px">`;return l+=`<svg viewBox="0 0 ${e} ${o}" role="img" aria-label="${f(r)}" preserveAspectRatio="none" style="width:100%;height:${o}px;display:block">`,l+=`<defs><linearGradient id="${f(i)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${s}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${s}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${a.areaPath}" fill="url(#${f(i)})" />`,l+=`<path d="${a.linePath}" fill="none" stroke="${s}" stroke-width="1.5" />`,l+="</svg></div>",l}var Pl=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function Lo(t,e){let o=[],n=0;if(Array.isArray(t.chart_data)&&t.chart_data.length>0){for(let i of t.chart_data)i.type&&typeof i.count=="number"&&(o.push({label:i.type,value:Math.max(0,i.count),color:e[n%e.length]}),n++);return o}if(t.breakdown_24h&&typeof t.breakdown_24h=="object"){for(let[i,r]of Object.entries(t.breakdown_24h)){let a=Number(r);!isNaN(a)&&a>0&&(o.push({label:i,value:a,color:e[n%e.length]}),n++)}return o}for(let[i,r]of Object.entries(t)){if(Pl.has(i))continue;let a=Number(r);isNaN(a)||(o.push({label:i,value:Math.max(0,a),color:e[n%e.length]}),n++)}return o}var Gr={heating:{cold:"#171717",hot:"#ff9f0a"},cooling:{cold:"#171717",hot:"#5ac8fa"},idle:{cold:"#171717",hot:"#525252"},off:{cold:"#171717",hot:"#262626"}};function Zr(t,e,o){let n=o&&Gr[o]||Gr.off,i=(e?.maxTemp??30)-(e?.minTemp??0);if(i<=0)return n.cold;let r=Math.max(0,Math.min(1,(t-(e?.minTemp??0))/i));return vr(n.cold,n.hot,r)}var Bl=new Set(["high","medium","critical"]),ql=["amber","blue","drying","fan","disabled"],Ul=["pc-row-unavail","pc-row-heat","pc-row-cool","pc-row-off","pc-row-at-target","pc-row-idle"];function Yr(t,e,o){let n=e.show_power_bar??o.show_power_bar??!0,i=e.show_temp_bar??o.show_temp_bar??!0,r=Me({...t,hvacMode:void 0}),a=`pc-row-${r}`,s=r==="at-target"?"At target":f(Ot(t)),l=`<span class="pc-state-tag pc-tag-${r}">${s}</span>`,p=t.currentTemp!==null?K(t.currentTemp,t.unit):"--",d=t.isUnavailable?"":f(p),c=!t.isUnavailable&&t.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${f(K(t.targetTemp,t.unit))}</span>`:"",m=!t.isUnavailable&&t.humidity!==null?` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Et(t.humidity)}</span>`:"",u=t.isUnavailable?`${t.name}: Unavailable`:`${t.name}: ${p}${t.targetTemp!==null?`, target ${K(t.targetTemp,t.unit)}`:""}${t.humidity!==null?`, ${Et(t.humidity)} humidity`:""}, ${Ot(t)}`,h=null;if(n&&!t.isUnavailable){let v=t.heatingPower||t.coolingPower||0,w=Fe(t.hvacAction);st({power:v,hvacAction:t.hvacAction})&&(h={fillWidth:Math.min(100,Math.max(0,v)),activeClass:v>0?" pc-bar-active":"",tierClass:w.tier?` pc-status-${w.tier}`:""})}let g=null;if(i&&!t.isUnavailable){let v=t.currentTemp!==null?jn(t.currentTemp,t.minTemp,t.maxTemp):50,w=t.targetTemp!==null?jn(t.targetTemp,t.minTemp,t.maxTemp):null,b=dt(t.minTemp),y=dt((t.minTemp+t.maxTemp)/2),_=dt(t.maxTemp);g={gradient:`linear-gradient(to right, ${k(b)}, ${k(y)}, ${k(_)})`,currentPos:k(v.toFixed(1)),targetPos:w!==null?k(w.toFixed(1)):null}}return{stateClass:a,nameHtml:`${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${f(t.icon)}"></ha-icon> `:""}${f(t.name)}${m}`,tempHtml:`${d}${c}${l}`,ariaLabel:u,powerBar:h,gauge:g,chipsHtml:Wl(t)}}function Xr(t){return`<div class="pc-temp-gauge"><div class="pc-temp-gauge-bg" style="background:${t.gradient}"></div><div class="pc-temp-gauge-current" style="left:${t.currentPos}%"></div>`+(t.targetPos!==null?`<div class="pc-temp-gauge-target" style="left:${t.targetPos}%"></div>`:"")+"</div>"}function Wl(t){if(t.chips.length===0)return"";let e='<div class="pc-zone-chips">';for(let o of t.chips){let n=o.severity?String(o.severity).toLowerCase():"",i=Bl.has(n)?` pc-severity-${n}`:"",r=o.tier?` pc-status-${o.tier}`:"",a=o.entityId?` data-entity="${f(o.entityId)}"`:"";e+=`<span class="pc-chip${i}${r}"${a} data-chip-type="${f(o.type)}">`,e+=`<ha-icon icon="${f(o.icon)}"></ha-icon>`,e+=`${f(o.label)}`,e+="</span>"}return`${e}</div>`}function Kr(t){return`<div class="pc-power-bar-container"><div class="pc-power-bar-track"></div><div class="pc-power-bar-fill${t.activeClass}${t.tierClass}" style="width:${k(t.fillWidth.toFixed(1))}%"></div></div>`}function Jr(t,e){return t.sparkline?.mode==="pulse"&&!e.isUnavailable}function Qn(t,e,o){return t.sparkline?.mode==="prominent"&&!e.isUnavailable&&!!o&&Pt(o,300,40,48)!==null}function Qr(t,e,o,n,i){let r=t.isUnavailable?" pc-unavailable":"",a=Yr(t,e,o),s=`<div class="pc-zone-row${r} ${a.stateClass}" tabindex="0" role="button"
    aria-label="${f(a.ariaLabel)}" data-entity="${f(t.entityId)}">`;if(s+='<div class="pc-row-ribbon"></div>',s+='<div class="pc-zone-header">',s+=`<span class="pc-zone-name">${a.nameHtml}</span>`,s+=`<span class="pc-zone-temp">${a.tempHtml}</span>`,s+="</div>",a.gauge&&(s+=Xr(a.gauge)),a.powerBar&&(s+=Kr(a.powerBar)),s+=a.chipsHtml,Jr(e,t))return Vl(t,e,n,i);if(Qn(e,t,n)){let l=e.color||Fe(t.hvacAction).fallback;s+=jl(l,n,t.unit,t.entityId,i)}return s+="</div>",s}function ta(t,e){let o=Fe(t.hvacAction),n=t.heatingPower>0||t.hvacAction==="heating",i=n||t.hvacAction==="cooling",r=i?e.color||o.fallback:"var(--pulse-text-secondary)",a=Jt(t,t.heatingPower||t.coolingPower||0),s=t.currentTemp!==null?K(t.currentTemp,t.unit):"--",l=t.targetTemp!==null?`\u2192 ${K(t.targetTemp,t.unit)}`:"";return{ariaLabel:`${t.name}: ${s}, ${a}`,isHeating:n,isActive:i,lineColor:r,statusText:a,tempText:s,targetText:l}}function ea(t,e,o){if(!o||o.length<2)return"";let n=Pt(o,360,56,60);if(!n)return"";let{isActive:i}=t,r=k(t.lineColor),a=f(e.entityId).replace(/\./g,"-"),s=`pulse-grad-${a}`,l=`pulse-glow-${a}`,p=i?" pc-heating-glow":"",d=i?"0.55":"0.2",c=i?"0.05":"0.02",m=i?"2":"1.5",u=i?"1":"0.5",h='<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">';return h+="<defs>",h+=`<linearGradient id="${s}" x1="0" y1="0" x2="0" y2="1">`,h+=`<stop offset="0%" stop-color="${r}" stop-opacity="${d}"/>`,h+=`<stop offset="100%" stop-color="${r}" stop-opacity="${c}"/>`,h+="</linearGradient>",i&&(h+=Lt(l,ge(360,360).toFixed(1))),h+="</defs>",h+=`<path d="${n.areaPath}" fill="url(#${s})" />`,h+=`<path d="${n.linePath}" fill="none" stroke="${r}" stroke-width="${m}" opacity="${u}"`,i&&(h+=` filter="url(#${l})" class="${p}"`),h+=" />",h+="</svg>",h}function Vl(t,e,o,n){let i=ta(t,e),r=k(i.lineColor),a=`pc-zone-row pc-zone-row-pulse${i.isHeating?" pc-heating":""}`,s=Jn(o||[],24,t.unit,n),l=`<div class="${a}" tabindex="0" role="button"
    aria-label="${f(i.ariaLabel)}" data-entity="${f(t.entityId)}" data-pulse-line="${f(oa(i))}"${s?` data-sparkline='${f(s)}'`:""}>`;return l+=ea(i,t,o),l+='<div class="pc-pulse-info">',l+='<div class="pc-pulse-info-left">',l+=`<div class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${f(t.icon)}"></ha-icon> `:""}${f(t.name)}</div>`,l+='<div class="pc-pulse-status">',l+=`<span class="pc-status-dot" style="background:${r}"></span>`,l+=`${f(i.statusText)}`,l+="</div>",l+="</div>",l+='<div class="pc-pulse-info-right">',l+=`<span class="pc-pulse-current">${f(i.tempText)}</span>`,i.targetText&&(l+=`<span class="pc-zone-target">${f(i.targetText)}</span>`),l+="</div>",l+="</div>",l+="</div>",l}function oa(t){return`${t.lineColor}|${t.isActive}`}function Gl(t,e,o){t.setAttribute("aria-label",e.ariaLabel),t.classList.toggle("pc-heating",e.isHeating);let n=t.querySelector(".pc-pulse-status"),i=n?.querySelector(".pc-status-dot");i?.setAttribute("style",`background:${k(e.lineColor)}`),n?.replaceChildren(...i?[i]:[],e.statusText);let r=t.querySelector(".pc-pulse-current");r&&(r.textContent=e.tempText);let a=t.querySelector(".pc-zone-target");if(!e.targetText)a?.remove();else if(a)a.textContent=e.targetText;else if(r){let p=document.createElement("span");p.className="pc-zone-target",p.textContent=e.targetText,r.after(p)}let s=oa(e);if(o===null||t.getAttribute("data-pulse-line")===s)return;t.setAttribute("data-pulse-line",s);let l=t.querySelector("svg.pc-pulse-bg");o?l?l.outerHTML=o:t.insertAdjacentHTML("afterbegin",o):l?.remove()}function jl(t,e,o,n,i){let r=Pt(e,300,40,48);if(!r)return"";let s=`prom-grad-${n?n.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,l=k(t),p=Jn(e,24,o,i),d=`<div class="pc-sparkline-filled pc-sparkline-prominent"${p?` data-sparkline='${f(p)}'`:""}>`;return d+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',d+=`<defs><linearGradient id="${f(s)}" x1="0" y1="0" x2="0" y2="1">`,d+=`<stop offset="0%" stop-color="${l}" stop-opacity="0.3"/>`,d+=`<stop offset="100%" stop-color="${l}" stop-opacity="0"/>`,d+="</linearGradient></defs>",d+=`<path d="${r.areaPath}" fill="url(#${f(s)})" />`,d+=`<path d="${r.linePath}" fill="none" stroke="${l}" stroke-width="1.5" opacity="0.7" />`,d+="</svg></div>",d}function na(t,e,o,n,i){let r=ct(t,e,o,n);return i?.data?.[r.entityId]||i?.data?.[t]||[]}function ia(t,e,o,n){let i=tt(t,n,o,e),r=n?.hubEntities?.home_state;return!Q(r?o[r]:null)&&!(t.chips||e.chips)&&(i.zoneState.chips=i.zoneState.chips.filter(s=>s.type!=="preset")),i}function ti(t,e,o,n,i,r){if(!t||t.length===0)return"";let a=Number(e.columns)||1,s=a>1?" pc-columns":"",l=a>1?` style="grid-template-columns:repeat(${Number(a)}, 1fr)"`:"",p=`<div class="pc-section pc-section-zones${s}"${l}>`,d=n?.hubEntities?.home_state,c=d?o[d]:null;if(!Q(c)){let u=c.state==="on",h=u?"mdi:home":"mdi:home-export-outline",g=u?"Home":"Away",v=u?" pc-status-green":"";p+='<div class="pc-section-header pc-section-header-center">',p+='<div class="pulse-section-label">Zones</div>',p+=`<span class="pc-chip${v}" data-entity="${f(d)}">`,p+=`<ha-icon icon="${f(h)}"></ha-icon>${f(g)}</span>`,p+="</div>"}else p+='<div class="pulse-section-label">Zones</div>';for(let u of t){let{entityId:h,zoneEntities:g,zoneState:v}=ia(u,e,o,n);p+=Qr(v,u,e,na(h,o,g,u,i),r)}return p+="</div>",p}function Zl(t,e){t.classList.remove(...Ul),t.classList.add(e.stateClass),t.setAttribute("aria-label",e.ariaLabel);let o=t.querySelector(".pc-zone-name");o&&(o.innerHTML=e.nameHtml);let n=t.querySelector(".pc-zone-temp");n&&(n.innerHTML=e.tempHtml);let i=t.querySelector(".pc-temp-gauge");if(!e.gauge)i?.remove();else if(!i)t.querySelector(".pc-zone-header")?.insertAdjacentHTML("afterend",Xr(e.gauge));else{let s=i.querySelector(".pc-temp-gauge-bg");s&&(s.style.background=e.gauge.gradient);let l=i.querySelector(".pc-temp-gauge-current");l&&(l.style.left=`${e.gauge.currentPos}%`);let p=i.querySelector(".pc-temp-gauge-target");e.gauge.targetPos===null?p?.remove():p?p.style.left=`${e.gauge.targetPos}%`:(l||s)?.insertAdjacentHTML("afterend",`<div class="pc-temp-gauge-target" style="left:${e.gauge.targetPos}%"></div>`)}let r=t.querySelector(".pc-power-bar-container");if(!e.powerBar)r?.remove();else if(!r)(t.querySelector(".pc-temp-gauge")||t.querySelector(".pc-zone-header"))?.insertAdjacentHTML("afterend",Kr(e.powerBar));else{let s=r.querySelector(".pc-power-bar-fill");if(s){s.style.width=`${e.powerBar.fillWidth.toFixed(1)}%`;for(let p of ql)s.classList.remove(`pc-status-${p}`);s.classList.toggle("pc-bar-active",e.powerBar.activeClass!=="");let l=e.powerBar.tierClass.trim();l&&s.classList.add(l)}}let a=t.querySelector(".pc-zone-chips");if(!e.chipsHtml)return a?.remove(),a!==null;if(a){let s=c=>[c.className.replace(/\bhas-ripple\b/,"").trim(),c.getAttribute("data-entity"),c.getAttribute("data-chip-type"),c.querySelector("ha-icon")?.getAttribute("icon"),c.textContent].join("|"),l=document.createElement("template");l.innerHTML=e.chipsHtml;let p=[...l.content.firstElementChild?.children||[]],d=[...a.children];if(p.length===d.length&&p.every((c,m)=>s(c)===s(d[m])))return!1;a.outerHTML=e.chipsHtml}else(t.querySelector(".pc-power-bar-container")||t.querySelector(".pc-temp-gauge")||t.querySelector(".pc-zone-header"))?.insertAdjacentHTML("afterend",e.chipsHtml);return!0}function Yl(t,e,o,n){if(!Qn(e,o,n))return;let i=t.querySelector(".pc-sparkline-prominent"),r=k(e.color||Fe(o.hvacAction).fallback);for(let a of i.querySelectorAll("stop"))a.setAttribute("stop-color",r);i.querySelector("path[stroke]")?.setAttribute("stroke",r)}function ra(t,e,o,n,i,r,a,s){if(!t||!e)return!1;let l=!1,p=t.querySelectorAll(".pc-zone-row");for(let d=0;d<e.length;d++){let c=e[d],m=c.entity,u=n[m],h=r[m],g=Ke(c,i).some(A=>n[A]!==r[A]);if(u===h&&!g&&p[d])continue;let{entityId:v,zoneEntities:w,zoneState:b}=ia(c,o,n,i),y=p[d];if(!y)continue;let _=na(v,n,w,c,a),S=y.classList.contains("pc-zone-row-pulse"),$=!!y.querySelector(".pc-sparkline-prominent");if(S!==Jr(c,b)||$!==Qn(c,b,_)){let A=document.createElement("template");A.innerHTML=Qr(b,c,o,_,s);let M=A.content.firstElementChild,I=y.__pulseCleanup;typeof I=="function"&&I(),y.replaceWith(M),l=!0;continue}if(S){let A=ta(b,c);Gl(y,A,_.length>=2?ea(A,b,_):null)}else Zl(y,Yr(b,c,o))&&(l=!0),Yl(y,c,b,_);b.isUnavailable?y.classList.add("pc-unavailable"):y.classList.remove("pc-unavailable")}return l}function eo(t){return!!(t?.api_usage&&t?.api_limit)}function aa(t){return t>95?"var(--pulse-tier-gale)":t>80?"var(--pulse-tier-strong)":"var(--pulse-tier-moderate)"}function Xl(t){let e=(t||"").toLowerCase();return e==="ok"||e==="healthy"?"green":e==="warning"?"amber":"red"}function Kl(t,e){let o=e>0?Math.min(100,t/e*100):0,n=aa(o),i=80,r=i/2,a=i/2,s=i/2-4,l=s*.7,p=Io(r,a,l,s,-90,269.9),d=-90+o/100*360,c=o>0?Io(r,a,l,s,-90,Math.min(d,269.9)):"",m=o>95,u=o>80,h=m||u,g='<div class="pc-usage-gauge">';if(g+=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="API usage: ${Math.round(t)} of ${Math.round(e)}" style="width:${i}px;height:${i}px">`,h&&(g+=`<defs>${Lt("gauge-glow",2)}</defs>`),g+=`<path d="${p}" fill="var(--pulse-border-divider)" />`,c){if(g+=`<path d="${c}" fill="${k(n)}"${h?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(o)}%</title>`,h){let b=m?"1":"2.5";mt()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${b}s" repeatCount="indefinite"/>`)}g+="</path>"}g+="</svg>";let v=f(Math.round(t)),w=f(Math.round(e));return g+=`<div class="pc-gauge-center">${v}<br><span class="pc-gauge-center-limit">/ ${w}</span></div>`,g+="</div>",g}function Jl(t,e,o){let n=e?.data?.[t]||[];return re(n,200,40,o,"api-hist-grad","API usage history")}function Ql(t){let e=Lo(t,Ut);if(e.length===0)return"";let o=60,n='<div class="pc-api-breakdown-row">';n+=`<div class="pc-donut-container pc-api-breakdown-donut" style="width:${o}px;height:${o}px">`;let{html:i}=Fo(e,{size:o,ariaLabel:"API call breakdown",centerNumStyle:"font-size:var(--pulse-font-body)"});return n+=i,n+="</div>",n+=Le(e.map(r=>({label:r.label,color:r.color,value:String(Math.round(r.value))}))),n+="</div>",n}function No(t,e,o,n,i){if(!eo(t))return"";let r=parseFloat(e[t.api_usage]?.state)||0,a=parseFloat(e[t.api_limit]?.state)||100,s=a>0?Math.min(100,r/a*100):0,l=aa(s),p=e[t.api_status]?.state||"unknown",d=Xl(p),c='<div class="pc-api-dashboard">';c+='<div class="pc-api-row">',c+=Kl(r,a);let m=t.api_usage;if(m&&n&&(c+=Jl(m,n,l)),c+="</div>",t.api_breakdown&&e[t.api_breakdown]&&(c+='<div class="pc-api-row">',c+=Ql(e[t.api_breakdown].attributes||{}),c+="</div>"),c+='<div class="pc-zone-chips">',t.call_history&&e[t.call_history]){let u=e[t.call_history].attributes?.calls_per_hour;u!=null&&Number(u)>0&&(c+=`<span class="pc-chip" data-entity="${f(t.call_history)}">`,c+=`<ha-icon icon="mdi:speedometer"></ha-icon>${f(Math.round(Number(u)))}/hr</span>`)}if(t.polling_interval&&e[t.polling_interval]){let u=e[t.polling_interval],h=u.attributes?.unit_of_measurement||"";c+=`<span class="pc-chip" data-entity="${f(t.polling_interval)}">Poll: ${f(u.state)}${h?f(h):""}</span>`}if(t.next_sync&&e[t.next_sync]){let u=e[t.next_sync].state,h=u,g=0;if(u&&u.includes("T")){let v=new Date(u);if(!Number.isNaN(v.getTime())){g=v.getTime();let w=g-Date.now();if(w>0&&w<36e5){let b=Math.floor(w/6e4),y=Math.floor(w%6e4/1e3);h=b>0?`${b}m ${y}s`:`${y}s`}else h=G(v,i)}}c+=`<span class="pc-chip chip-next-sync" data-entity="${f(t.next_sync)}" data-target="${g}">Next: ${f(h)}</span>`}if(t.api_reset&&e[t.api_reset]){let u=e[t.api_reset].state,h=u;if(u&&u.includes("T")){let g=new Date(u);Number.isNaN(g.getTime())||(h=G(g,i))}c+=`<span class="pc-chip" data-entity="${f(t.api_reset)}">Reset: ${f(h)}</span>`}return t.token_status&&e[t.token_status]&&(c+=`<span class="pc-chip" data-entity="${f(t.token_status)}">Token: ${f(e[t.token_status].state)}</span>`),c+=`<span class="pc-chip pc-status-${d}" data-entity="${t.api_status?f(t.api_status):""}">${f(p)}</span>`,c+="</div>",c+="</div>",c}function ei(t,e,o,n,i){if(!eo(t))return"";let r='<div class="pc-section pc-section-api">';return r+='<div class="pulse-section-label">API Usage</div>',r+=No(t,e,o,n,i),r+="</div>",r}function oo(t){return!!t?.bridge_connected}function zo(t,e,o){if(!oo(t))return"";let n=e[t.bridge_connected];if(!n)return"";let i=n.state==="on",r=i?"green":"red",a=i?"Connected":"Disconnected",s=i?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},p=l.response_time_ms,d=l.consecutive_failures,c=l.last_error,m=t.boiler_flow_temp&&e[t.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",u="";if(u+='<div class="pc-zone-chips">',u+=`<span class="pc-chip pc-status-${r}" data-entity="${f(t.bridge_connected)}">`,u+=`<span class="${s}"></span>`,u+=`${f(a)}</span>`,p!==void 0&&(u+=`<span class="pc-chip" data-entity="${f(t.bridge_connected)}">${f(Math.round(p))}ms</span>`),d!==void 0&&d>0&&(u+=`<span class="pc-chip pc-status-red" data-entity="${f(t.bridge_connected)}">Failures: ${f(d)}</span>`),u+="</div>",t.boiler_flow_temp&&e[t.boiler_flow_temp]){let v=parseFloat(e[t.boiler_flow_temp].state),w=e[t.boiler_flow_temp].state,b=isNaN(v)?"var(--pulse-text-primary)":dt(v);if(u+='<div class="pc-flow-temp-row">',u+=`<span class="pc-flow-temp-value" style="color:${k(b)}">${f(w)}${f(m)}</span>`,o){let y=o.data?.[t.boiler_flow_temp]||[],_=re(y,120,30,b,"bridge-flow-grad","Boiler flow temperature history");_&&(u+=`<div class="pc-flow-sparkline">${_}</div>`)}u+="</div>"}let h=t.wc_status&&e[t.wc_status],g=t.wc_target_flow&&e[t.wc_target_flow];if((h||g)&&(u+='<div class="pc-zone-chips">',h&&(u+=`<span class="pc-chip" data-entity="${f(t.wc_status)}">${f(e[t.wc_status].state)}</span>`),g&&(u+=`<span class="pc-chip" data-entity="${f(t.wc_target_flow)}">Target: ${f(e[t.wc_target_flow].state)}${f(m)}</span>`),u+="</div>"),t.boiler_max_output&&e[t.boiler_max_output]){let v=e[t.boiler_max_output].state;v!=="unavailable"&&v!=="unknown"&&(u+='<div class="pc-zone-chips">',u+=`<span class="pc-chip" data-entity="${f(t.boiler_max_output)}">`,u+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${f(v)}${f(m)}</span>`,u+="</div>")}return c&&c!=="None"&&c!=="null"&&(u+='<div class="pc-zone-chips">',u+=`<span class="pc-chip pc-status-red">Error: ${f(c)}</span>`,u+="</div>"),u}function oi(t,e,o){if(!oo(t))return"";let n='<div class="pc-section pc-section-bridge">';return n+='<div class="pulse-section-label">Bridge</div>',n+=zo(t,e,o),n+="</div>",n}var tc="var(--pulse-tier-moderate)";function ze(t){return!!t?.homekit_connected}function Ro(t,e){if(!ze(t))return"";let o=e[t.homekit_connected];if(!o)return"";let n=o.attributes||{},i=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,r=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,a=i?Number(i.state)||0:Number(n.reads_saved_today)||0,s=r?Number(r.state)||0:Number(n.writes_saved_today)||0,l=a+s;return l>0?` \xB7 ${l} saved`:""}function Ho(t,e,o){if(!ze(t))return"";let n=e[t.homekit_connected];if(!n)return"";let i=n.state==="on",r=i?"green":"red",a=i?"Connected":"Disconnected",s=i?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},p=l.uptime||"",d=l.mapped_zones,c=l.reconnect_count,m=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,u=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,h=m?Number(m.state)||0:Number(l.reads_saved_today)||0,g=u?Number(u.state)||0:Number(l.writes_saved_today)||0,v=h+g,w="";if(w+='<div class="pc-zone-chips">',w+=`<span class="pc-chip pc-status-${r}" data-entity="${f(t.homekit_connected)}">`,w+=`<span class="${s}"></span>`,w+=`${f(a)}`,p&&(w+=` <span class="pc-chip-aside">${f(p)}</span>`),w+="</span>",d!==void 0&&(w+=`<span class="pc-chip">${f(d)} zones</span>`),c!==void 0&&c>0&&(w+=`<span class="pc-chip pc-status-amber">Reconnects: ${f(c)}</span>`),w+="</div>",h>0||g>0){let $=v>0?h/v*100:100;w+='<div class="pc-homekit-bar-stack">',w+='<div class="pc-power-bar-container">',w+='<div class="pc-power-bar-track"></div>',w+='<div class="pc-power-bar-fill pc-hk-write-track"></div>',w+=`<div class="pc-power-bar-fill pc-status-green" style="width:${k($.toFixed(1))}%"></div>`,w+="</div>",w+="</div>";let A=t.homekit_reads_saved;if(A&&o){let L=o.data?.[A]||[];w+=re(L,200,30,tc,"hk-spark-grad","HomeKit saved calls history")}w+='<div class="pc-zone-chips">';let M=t.homekit_reads_saved||"",I=t.homekit_writes_saved||"";w+=`<span class="pc-chip pc-status-green"${M?` data-entity="${f(M)}"`:""}>Reads: ${f(h)}</span>`,g>0&&(w+=`<span class="pc-chip pc-status-accent"${I?` data-entity="${f(I)}"`:""}>Writes: ${f(g)}</span>`),w+="</div>"}let b=Number(l.write_attempts)||0,y=Number(l.write_successes)||0,_=Number(l.write_fallbacks)||0,S=Number(l.write_avg_latency_ms)||0;return(b>0||y>0||_>0)&&(w+='<div class="pc-zone-chips">',b>0&&(w+=`<span class="pc-chip">Attempts: ${f(b)}</span>`),y>0&&(w+=`<span class="pc-chip">Successes: ${f(y)}</span>`),_>0&&(w+=`<span class="pc-chip pc-status-amber">Fallbacks: ${f(_)}</span>`),S>0&&(w+=`<span class="pc-chip">Latency: ${f(S)}ms</span>`),w+="</div>"),w}function ni(t,e,o){if(!ze(t))return"";let n=Ro(t,e),i='<div class="pc-section pc-section-homekit">';return i+=`<div class="pulse-section-label">HomeKit${f(n)}</div>`,i+=Ho(t,e,o),i+="</div>",i}function ec(t){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(t||"").toLowerCase()]||"mdi:weather-cloudy"}function ii(t,e,o){if(!t.outside_temp)return"";let n=e[t.outside_temp]?.state,i=e[t.weather]?.state||"",r=t.solar_intensity?e[t.solar_intensity]?.state:null,a='<div class="pc-section pc-section-weather">';a+='<div class="pulse-section-label">Weather</div>',a+='<div class="pc-zone-chips">',i&&(a+=`<span class="pc-chip"${t.weather?` data-entity="${f(t.weather)}"`:""}><ha-icon icon="${f(ec(i))}"></ha-icon>${f(i)}</span>`),n!=null&&(a+=`<span class="pc-chip" data-entity="${f(t.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${f(n)}${f(e[t.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),r!=null&&(a+=`<span class="pc-chip"${t.solar_intensity?` data-entity="${f(t.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${f(r)}%</span>`),a+="</div>";let s=t.outside_temp;if(s&&o){let l=o.data?.[s]||[],p=parseFloat(n||"0"),d=isNaN(p)?"var(--pulse-text-primary)":dt(p);a+=re(l,200,30,d,"weather-spark-grad","Outdoor temperature history")}return a+="</div>",a}function ri(t,e,o){let n=!1,i='<div class="pc-section pc-section-environment">';i+='<div class="pulse-section-label">Environment</div>';for(let r of t){let a=X(r.entity),s=o?.zoneEntities?.[a]||{},l=s.mold_risk&&e[s.mold_risk],p=s.condensation&&e[s.condensation],d=s.comfort_level&&e[s.comfort_level],c=s.surface_temp&&e[s.surface_temp],m=s.dew_point&&e[s.dew_point];if(!l&&!p&&!d&&!c&&!m)continue;n=!0;let u=r.name||e[r.entity]?.attributes?.friendly_name||a;if(i+=`<div class="pc-system-row"><span class="pc-system-label">${f(u)}</span>`,i+='<div class="pc-zone-chips">',l){let h=e[s.mold_risk].state,g=Eo(h);i+=`<span class="pc-chip pc-status-${g.tier}" data-entity="${f(s.mold_risk)}">`,i+=`<ha-icon icon="mdi:mushroom"></ha-icon>${f(h)}</span>`}if(p){let h=e[s.condensation].state,g=Eo(h);i+=`<span class="pc-chip pc-status-${g.tier}" data-entity="${f(s.condensation)}">`,i+=`<ha-icon icon="mdi:water-alert"></ha-icon>${f(h)}</span>`}d&&(i+=`<span class="pc-chip" data-entity="${f(s.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${f(e[s.comfort_level].state)}</span>`),c&&(i+=`<span class="pc-chip" data-entity="${f(s.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${f(e[s.surface_temp].state)}${f(e[s.surface_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),m&&(i+=`<span class="pc-chip" data-entity="${f(s.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${f(e[s.dew_point].state)}${f(e[s.dew_point]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),i+="</div></div>"}return i+="</div>",n?i:""}function ai(t,e,o){let n=!1,i='<div class="pc-section pc-section-thermal">';i+='<div class="pulse-section-label">Thermal Analytics</div>';for(let r of t){let a=X(r.entity),s=o?.zoneEntities?.[a]||{},l=s.heating_rate&&e[s.heating_rate],p=s.thermal_inertia&&e[s.thermal_inertia],d=s.preheat_time&&e[s.preheat_time],c=s.confidence&&e[s.confidence],m=s.heat_accel&&e[s.heat_accel],u=s.approach_factor&&e[s.approach_factor];if(!l&&!p&&!d&&!c&&!m&&!u)continue;n=!0;let h=r.name||e[r.entity]?.attributes?.friendly_name||a;i+=`<div class="pc-system-row"><span class="pc-system-label">${f(h)}</span>`,i+='<div class="pc-zone-chips">',l&&(i+=`<span class="pc-chip" data-entity="${f(s.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${f(e[s.heating_rate].state)}${f(e[s.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr")}</span>`),p&&(i+=`<span class="pc-chip" data-entity="${f(s.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${f(e[s.thermal_inertia].state)}</span>`),d&&(i+=`<span class="pc-chip" data-entity="${f(s.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${f(e[s.preheat_time].state)} min</span>`),c&&(i+=`<span class="pc-chip" data-entity="${f(s.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${f(e[s.confidence].state)}%</span>`),m&&(i+=`<span class="pc-chip" data-entity="${f(s.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${f(e[s.heat_accel].state)}${f(e[s.heat_accel]?.attributes?.unit_of_measurement||"")}</span>`),u&&(i+=`<span class="pc-chip" data-entity="${f(s.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${f(e[s.approach_factor].state)}${f(e[s.approach_factor]?.attributes?.unit_of_measurement||"")}</span>`),i+="</div></div>"}return i+="</div>",n?i:""}function si(t,e,o){let n=!1,i='<div class="pc-section pc-section-schedule">';i+='<div class="pulse-section-label">Schedule</div>';for(let r of t){let a=X(r.entity),s=o?.zoneEntities?.[a]||{},l=s.next_schedule&&e[s.next_schedule],p=s.schedule_deviation&&e[s.schedule_deviation],d=s.preheat_advisor&&e[s.preheat_advisor],c=s.comfort_target&&e[s.comfort_target];if(!l&&!p&&!d&&!c)continue;n=!0;let m=r.name||e[r.entity]?.attributes?.friendly_name||a;if(i+=`<div class="pc-system-row"><span class="pc-system-label">${f(m)}</span>`,i+='<div class="pc-zone-chips">',l){let u=s.next_sched_temp&&e[s.next_sched_temp]?` \u2192 ${f(e[s.next_sched_temp].state)}${f(e[s.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C")}`:"";i+=`<span class="pc-chip" data-entity="${f(s.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${f(e[s.next_schedule].state)}${u}</span>`}p&&(i+=`<span class="pc-chip" data-entity="${f(s.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${f(e[s.schedule_deviation].state)}${f(e[s.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),d&&(i+=`<span class="pc-chip" data-entity="${f(s.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${f(e[s.preheat_advisor].state)}</span>`),c&&(i+=`<span class="pc-chip" data-entity="${f(s.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${f(e[s.comfort_target].state)}${f(e[s.comfort_target]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),i+="</div></div>"}return i+="</div>",n?i:""}function oc(){return Te("graph-grad")}function nc(t,e){let o=e&&e.length>0?e:Ut;return o[t%o.length]}function ic(t,e,o){let i=[];for(let l of t){let p=Pt(l.data,300,e,48);p&&i.push({...p,color:l.color,entityId:l.entityId})}if(i.length===0)return'<div class="pc-chart-empty">No data available</div>';let r=i.map(()=>oc()),a=Kn("graph-glow"),s=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${f(o)}" class="pc-chart-svg" preserveAspectRatio="none">`;s+="<defs>";for(let l=0;l<i.length;l++)s+=`<linearGradient id="${r[l]}" x1="0" y1="0" x2="0" y2="1">`,s+=`<stop offset="0%" stop-color="${k(i[l].color)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${k(i[l].color)}" stop-opacity="0"/>`,s+="</linearGradient>";s+=Lt(a,.6),s+="</defs>";for(let l=0;l<i.length;l++){let p=i[l];s+=`<path d="${p.areaPath}" fill="url(#${r[l]})" />`,s+=`<path d="${p.linePath}" fill="none" stroke="${k(p.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" filter="url(#${a})" data-entity="${f(p.entityId)}" />`}return s+="</svg>",s}function ci(t,e,o,n,i){let r=t.attribute||"current_temperature",a=t.stacked===!0,s=Number(t.height)||80,l=t.palette||void 0,p=t.entities||e.map(c=>c.entity);if(p.length===0)return"";let d='<div class="pc-section pc-section-graph">';return a?(d+=li(p,"current_temperature","Temperature",s,l,o,n,i,e),d+=li(p,"current_humidity","Humidity",s,l,o,n,i,e)):d+=li(p,r,r==="current_humidity"?"Humidity":"Temperature",s,l,o,n,i,e),d+="</div>",d}function pi(t,e,o,n){let i=o?.zoneEntities?.[X(t)]||{},r=n?.find(a=>a.entity===t);return{temp:ct(t,e,i,r),hum:Wt(t,e,i,r)}}function li(t,e,o,n,i,r,a,s,l){let p=[],d=[],c=e==="current_humidity"||e==="humidity";for(let g=0;g<t.length;g++){let v=t[g],w=nc(g,i),b=X(v),y=l?.find(T=>T.entity===v),_=pi(v,a,s,l),$=(c?_.hum:_.temp)?.entityId||v,A=r.data[$]||[],M=y?.name||a[v]?.attributes?.friendly_name||b,I=a[v]?.attributes?.[e],L=c?"%":pt(a[v]?.attributes);p.push({entityId:$,data:A,color:w}),d.push({label:M,color:w,value:I!=null?`${I}${L}`:"--"})}let m=d.map(g=>g.label).join(", "),u=`${o} history for ${m}`,h=`<div class="pulse-section-label">${f(o)}</div>`;return h+=`<div class="pc-chart-container" style="height:${k(n)}px">`,h+=ic(p,n,u),h+="</div>",h+=Le(d),h}function di(t,e,o){let n=Number(t.size)||120,i=t.source,r=[];if(i==="api_breakdown"?r=rc(e,o):i==="homekit_saved"?r=ac(e,o):t.segments&&(r=sc(t.segments,o)),r.length===0)return"";let a='<div class="pc-section pc-section-donut">',s={api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"},l={api_breakdown:"Calls",homekit_saved:"Saved"},p=i&&s[i]||"Breakdown",d=i&&l[i]||"Total";a+=`<div class="pulse-section-label">${f(p)}</div>`,a+=`<div class="pc-donut-container" style="width:${k(n)}px;height:${k(n)}px">`;let{html:c}=Fo(r,{size:n,centerLabel:d});a+=c,a+="</div>";let m=r.map(u=>({label:u.label,color:u.color,value:String(Math.round(u.value))}));return a+=Le(m),a+="</div>",a}function rc(t,e){let o=t.api_breakdown;if(!o||!e[o])return[];let n=e[o].attributes;return!n||typeof n!="object"?(Ct("api_call_breakdown entity has no attributes"),[]):Lo(n,Ut)}function ac(t,e){if(!t.homekit_connected)return[];let o=e[t.homekit_connected];if(!o)return[];let n=o.attributes||{},i=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,r=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,a=i?Number(i.state)||0:Number(n.reads_saved_today)||0,s=r?Number(r.state)||0:Number(n.writes_saved_today)||0,l=[];return(a>0||s>0)&&(l.push({label:"Reads Saved",value:a,color:Ut[0]}),l.push({label:"Writes Saved",value:s,color:Ut[1]})),l}function sc(t,e){return t.map((o,n)=>({label:o.label||o.entity,value:Math.max(0,Number(e[o.entity]?.state)||0),color:o.color||Ut[n%Ut.length]}))}function Do(t,e,o,n){let r=Date.now()-o,a=o/e,s=[],l=0,p=null;for(;l<t.length&&t[l].t<r;)isFinite(t[l].v)&&(p=Math.round(t[l].v*10)/10),l++;for(let d=0;d<e;d++){let c=r+d*a,m=c+a,u=c+a/2,h=0,g=0;for(;l<t.length&&t[l].t<m;)t[l].t>=c&&isFinite(t[l].v)&&(h+=t[l].v,g++),l++;g>0&&(p=Math.round(h/g*10)/10),s.push({value:p,time:u,label:G(new Date(u),n)})}return s}function Oo(t,e,o={}){let n=t.length;if(n===0)return'<div class="pc-strip-container"><div class="pc-chart-empty">No data</div></div>';let i=o.emptyColor||"var(--pulse-disabled)",r=o.emptyOpacity??.3,a=o.ariaLabel||"",s=JSON.stringify(t.map(p=>({v:p.value,l:p.label}))),l=`<div class="pc-strip-container" data-slots='${f(s)}'>`;l+=`<svg viewBox="0 0 ${n} 1" preserveAspectRatio="none" role="img" aria-label="${f(a)}" style="width:100%;height:100%;display:block">`;for(let p=0;p<n;p++){let d=t[p].value,c=d!==null?e(d):i,m=d!==null?1:r;l+=`<rect x="${p}" y="0" width="1.05" height="1" fill="${k(c)}" opacity="${m}"/>`}if(l+="</svg>",o.nowPct!==void 0){let p=Math.min(100,Math.max(0,o.nowPct));l+=`<div class="pc-now-marker" style="left:${p.toFixed(1)}%"></div>`}return l+="</div>",l}function Re(t,e,o={}){let n=t.length;if(n===0)return'<div class="pc-cells"><div class="pc-chart-empty">No data</div></div>';let i=JSON.stringify(t.map(a=>({v:a.value,l:a.label}))),r=`<div class="pc-cells" data-slots='${f(i)}'>`;for(let a=0;a<n;a++){let s=t[a].value,l=t[a].label;if(s!==null){let p=e(s),d=k(p);r+=`<div class="pc-cell" style="background:${d};color:${d}" data-hour="${f(l)}" data-score="${s}"></div>`}else r+=`<div class="pc-cell pc-cell-empty" data-hour="${f(l)}"></div>`}return r+="</div>",r}function Po(){let t=document.createElement("div");t.className="pc-strip-tooltip",t.style.display="none";let e=null;return{element:t,show(o,n,i){e&&(clearTimeout(e),e=null),t.textContent=i,t.style.display="",t.style.left=`${n}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function sa(){let t=document.createElement("div");t.className="pc-strip-tooltip pc-strip-tooltip-fixed",t.style.display="none";let e=null;return{element:t,show(o,n,i){e&&(clearTimeout(e),e=null),t.textContent=i,t.style.display="",t.style.left=`${n}px`,t.style.top=`${o.top-28}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function Bo(t,e,o=5){let n=new Date,i=Date.now()-t,r="";for(let a=0;a<o-1;a++){let s=new Date(i+a/(o-1)*t);r+=`<span class="pc-time-label">${G(s,e)}</span>`}return r+=`<span class="pc-time-label">${G(n,e)}</span>`,r}function ae(t,e,o){let n=Math.max(0,Math.min(1,(t-e.left)/e.width));return Math.min(o-1,Math.floor(n*o))}var lc=2e3;function ui(t,e,o,n,i){let r=null,a=l=>{let p=o.getBoundingClientRect(),d=l-p.left;d>=0&&d<=p.width&&(e.style.left=`${n+d}px`,e.style.display="")},s=()=>{e.style.display="none",r&&(clearTimeout(r),r=null)};i?.addEventListener("abort",()=>{r&&(clearTimeout(r),r=null)},{once:!0}),t.addEventListener("pointermove",l=>{l.pointerType!=="touch"&&a(l.clientX)},{signal:i}),t.addEventListener("pointerleave",s,{signal:i}),t.addEventListener("pointerdown",l=>{l.pointerType==="touch"&&(a(l.clientX),r&&clearTimeout(r),r=setTimeout(s,lc))},{signal:i})}function mi(t,e,o,n="",i){if(!e||e.length===0)return;let r=e.length,a=null,s=null,l=null;i?.addEventListener("abort",()=>{l&&(clearTimeout(l),l=null),s&&(s.remove(),s=null)},{once:!0}),t.addEventListener("pointerdown",p=>{if(p.pointerType==="touch"&&p.isPrimary===!1)return;let d=t.getBoundingClientRect();a=ae(p.clientX,d,r),t.setPointerCapture(p.pointerId),s||(s=document.createElement("div"),s.className="pc-strip-drag-highlight",t.style.position="relative",t.appendChild(s)),s.style.display="",s.style.left=`${(a/r*100).toFixed(1)}%`,s.style.width="0%"},{signal:i}),t.addEventListener("pointermove",p=>{if(a===null||!s)return;let d=t.getBoundingClientRect(),c=ae(p.clientX,d,r),m=Math.min(a,c),u=Math.max(a,c);s.style.left=`${(m/r*100).toFixed(1)}%`,s.style.width=`${((u-m+1)/r*100).toFixed(1)}%`},{signal:i}),t.addEventListener("pointerup",p=>{if(a===null){a=null;return}let d=t.getBoundingClientRect(),c=ae(p.clientX,d,r),m=Math.min(a,c),u=Math.max(a,c),h=e.slice(m,u+1).filter(g=>g.v!==null);if(h.length>0){let g=h.map(A=>A.v),v=ht(g.reduce((A,M)=>A+M,0)/g.length),w=ht(Math.min(...g)),b=ht(Math.max(...g)),y=e[m]?.l||"",_=e[u]?.l||"",S=`${y} \u2013 ${_}: avg ${v}${n}, ${w}${n} \u2013 ${b}${n}`,$=t.getBoundingClientRect();o.show($,(m+u)/2/r*$.width,S),l&&clearTimeout(l),l=setTimeout(()=>o.hide(),3e3)}a=null},{signal:i})}var hi=24,cc=hi;function pc(t){if(!Array.isArray(t)||t.length===0)return null;let e=Date.now()-hi*3600*1e3,o=t.filter(i=>i&&i.t>=e&&Number.isFinite(i.v));return o.length===0?null:o.reduce((i,r)=>i+r.v,0)/o.length}function qo(t,e,o,n,i){let r='<div class="pc-strip-rows">';r+='<div class="pc-strip-crosshair"></div>';let a=0,s=0,l=pt(null),p=1/0,d=-1/0;for(let m of t){let{entityId:u,zoneName:h,zoneEntities:g,zoneState:v}=tt(m,o,e),b=ct(u,e,g,m)?.entityId||u,y=n?.data?.[b]||[];v.unit&&(l=v.unit);let _=Do(y,cc,hi*3600*1e3,i);for(let I of _)I.value!==null&&Number.isFinite(I.value)&&(I.value<p&&(p=I.value),I.value>d&&(d=I.value));let S=Re(_,dt),$=pc(y);$!==null&&(a+=$,s+=1);let A=$===null?"--":`${ht($)}${f(v.unit||"\xB0C")}`,M=ft(v);r+=`<div class="pc-timeline-group-row pc-timeline-row${M}" data-entity="${f(u)}" data-zone="${f(h)}">`,r+=`<span class="pc-timeline-group-name pc-zone-label">${f(v.name)}</span>`,r+=S,r+=`<span class="pc-timeline-group-stat">${f(A)}</span>`,r+="</div>"}r+="</div>",r+=dc();let c=p<=d?{min:Ze(p),max:Ze(d)}:null;return r+=uc(a,s,l,t.length,c),r}function dc(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span class="pc-timeline-group-stat-head">24h avg</span></div>'}function uc(t,e,o,n,i){let r=e>0?t/e:null,a=r===null?"\u2014":`${ht(r)}${f(o)}`;return'<div class="pc-timeline-group-footer">'+mc(o,i)+`<span><strong>Home avg ${f(a)}</strong> \xB7 ${n} zones \xB7 24h</span></div>`}function mc(t,e){let o=s=>Math.round(ee(s)),n=Ne.map((s,l)=>{if(!e)return!0;let p=l===0?-1/0:Ne[l-1].upper;return(s.upper===null?1/0:s.upper)>=e.min&&p<=e.max}),i=n.indexOf(!0),r=n.lastIndexOf(!0),a='<span class="pc-temp-legend">';for(let s=i;s<=r;s++){let l=Ne[s],p=s===0?null:Ne[s-1].upper,d;s===i?d=l.upper===null?`\u2265${p!==null?o(p):""}${t}`:`\u2264${o(l.upper)}${t}`:s===r?d=`\u2265${p!==null?o(p):0}${t}`:d=`${p!==null?o(p):0}\u2013${o(l.upper)}${t}`,a+=`<span class="pc-temp-legend-pill"><span class="pc-temp-legend-pip pc-temp-band-${s}"></span>${f(d)}</span>`}return a+="</span>",a}function la(t,e,o,n,i,r){if(!t||t.length===0)return"";let a=Number(e?.hours_to_show)||24,s=e?.mode||"timeline",l=Number(e?.slots_per_hour)||2,d=(e?.attribute||"temperature")==="humidity",c=d?to:dt,m=s==="heatmap"?a:a*l,u=a*36e5,h=Date.now()-u,g=(Date.now()-h)/u*100,v=d?"Humidity":"Thermal",w=s==="heatmap"?"Heatmap":"Timeline",b='<div class="pc-section pc-section-thermal-strip">';if(b+='<div class="pc-section-header">',b+=`<div class="pulse-section-label">${f(String(Number(a)))}h ${f(v)} ${f(w)}</div>`,b+='<span class="pc-section-subtitle">Tap a zone for details</span>',b+="</div>",s==="heatmap"&&!d)return b+='<div class="pc-zone-detail" id="timeline-detail"></div>',b+=qo(t,o,n,i,r),b+="</div>",b;b+='<div class="pc-zone-detail" id="timeline-detail"></div>',b+='<div class="pc-strip-rows">',b+='<div class="pc-strip-crosshair"></div>';for(let y of t){let{entityId:_,zoneName:S,zoneEntities:$,zoneState:A}=tt(y,n,o),I=(d?Wt(_,o,$,y):ct(_,o,$,y))?.entityId||_,L=y.name||o[_]?.attributes?.friendly_name||S,T=i?.data?.[I]||[],C=ft(A);if(b+=`<div class="pc-timeline-row${C}" data-zone="${f(S)}" data-entity="${f(_)}">`,b+=`<span class="pc-zone-label">${f(L)}</span>`,T.length<2){let x=!!o[I],E=I in(i?.data||{});b+=`<div class="pc-strip-container"><div class="pc-chart-empty">${f(x&&!E?"Waiting for data":"No data")}</div></div>`}else{let x=Do(T,m,u,r),F=`${L} ${d?"humidity":"temperature"} over ${a}h`;s==="heatmap"?b+=Re(x,c,{ariaLabel:F}):b+=Oo(x,c,{ariaLabel:F,nowPct:g})}b+="</div>"}return b+="</div>",b+='<div class="pc-time-axis">',b+=Bo(u,r),b+="</div>",b+="</div>",b}var hc={Comfortable:100,Warm:70,Cool:70,Hot:35,Cold:35,Sweltering:10,Freezing:10};function He(t,e,o,n){if(t==null||e===null||e===void 0||isNaN(t)||isNaN(e))return null;let i=100;if(i-=Math.min(50,Math.abs(t-e)/Xt(1)*10),o!=null&&(i-=Math.min(25,Math.abs(o-45)*.5)),n!=null){let r=n.split(" ")[0],a=hc[r]??50;i=i*.7+a*.3}return Math.max(0,Math.min(100,Math.round(i)))}function pa(t,e){let o=t?.comfort_level;return o&&!Q(e[o])?e[o].state:null}function Wo(t,e,o){let{entityId:n,zoneEntities:i,zoneState:r}=e,a=(p,d)=>{if(p===n)return d;if(Q(o[p]))return null;let c=Number.parseFloat(o[p].state);return Number.isFinite(c)?c:null},s=ct(n,o,i,t).entityId,l=Wt(n,o,i,t)?.entityId;return{temp:a(s,r.currentTemp),humidity:l?a(l,r.humidity):r.humidity,target:r.targetTemp??null,level:pa(i,o)}}function ca(t){if(t>=80)return`rgba(52, 199, 89, ${(.35+t/100*.55).toFixed(2)})`;if(t>=50){let e=(t-50)/30;return`rgba(${Math.round(255-e*50)}, ${Math.round(159+e*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-t)/50*.5).toFixed(2)})`}function Uo(t,e,o=72e5){if(t.length===0)return null;let n=0,i=t.length-1;for(;n<i;){let s=n+i>>1;t[s].t<e?n=s+1:i=s}let r=null,a=1/0;for(let s=Math.max(0,n-1);s<=Math.min(t.length-1,n);s++){let l=Math.abs(t[s].t-e);l<a&&isFinite(t[s].v)&&(a=l,r=t[s].v)}return a<=o?r:null}function da(t,e,o,n,i,r){if(!t||t.length===0)return"";let a=Number(e?.slots_per_hour)||1,s=Number(e?.hours_to_show)||24,l=e?.mode||"heatmap",p=a*s,d=s*36e5,c=Date.now()-d,m=(Date.now()-c)/d*100,u=l==="timeline"?"Comfort Timeline":"Comfort Heatmap",h='<div class="pc-section pc-section-comfort-strip">';h+='<div class="pc-section-header">',h+=`<div class="pulse-section-label">${f(String(Number(s)))}h ${f(u)}</div>`,h+='<span class="pc-section-subtitle">Tap a zone for details</span>',h+="</div>",h+='<div class="pc-zone-detail" id="heatmap-detail"></div>',h+='<div class="pc-heatmap-body">',h+='<div class="pc-strip-crosshair"></div>';for(let g=0;g<t.length;g++){let v=t[g],{entityId:w,zoneName:b,zoneEntities:y,zoneState:_}=tt(v,n,o),S=v.name||o[w]?.attributes?.friendly_name||b,A=ct(w,o,y,v).entityId,I=Wt(w,o,y,v)?.entityId||null,L=i?.data?.[A]||[],T=I?i?.data?.[I]||[]:[],C=_.targetTemp??null,x=pa(y,o),E=[],F=d/p,N=null;if(L.length>0){let O=Uo(L,c,1/0),V=T.length>0?Uo(T,c,1/0):null;O!==null&&(N=He(O,C,V,x))}for(let O=0;O<p;O++){let q=c+O*F+F/2,D=Uo(L,q),W=Uo(T,q),P=He(D,C,W,x);P!==null&&(N=P);let H=new Date(q),U=G(H,r);E.push({value:N,time:q,label:U})}let z=ft(_);h+=`<div class="pc-heatmap-row${z}" data-zone="${f(b)}" data-idx="${g}">`,h+=`<span class="pc-zone-label">${f(S)}</span>`;let R=`${S} comfort over ${s}h`;l==="timeline"?h+=Oo(E,ca,{ariaLabel:R,nowPct:m}):h+=Re(E,ca,{ariaLabel:R}),h+="</div>"}return h+="</div>",h+='<div class="pc-heatmap-time-axis">',h+=Bo(d,r),h+="</div>",h+='<div class="pc-heatmap-legend">',h+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-good"></div>\u226580</div>',h+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-fair"></div>50\u201379</div>',h+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-poor"></div>&lt;50</div>',h+="</div>",h+="</div>",h}function ha(t,e,o,n,i,r,a){let s=r+(a-r)*.35,l=r+(a-r)*.65,p=t-o,d=e-n,c=t+o,m=e+n,u=`M${r},${p.toFixed(1)}`;return u+=` C${s.toFixed(1)},${p.toFixed(1)} ${l.toFixed(1)},${d.toFixed(1)} ${a},${d.toFixed(1)}`,u+=` L${a},${m.toFixed(1)}`,u+=` C${l.toFixed(1)},${m.toFixed(1)} ${s.toFixed(1)},${c.toFixed(1)} ${r},${c.toFixed(1)}`,u+=" Z",u}function fc(t,e,o,n){let i=o+(n-o)*.35,r=o+(n-o)*.65;return`M${o},${t.toFixed(1)} C${i.toFixed(1)},${t.toFixed(1)} ${r.toFixed(1)},${e.toFixed(1)} ${n},${e.toFixed(1)}`}function gc(t,e,o,n){let i=n-e;return`M${t.toFixed(1)},${e.toFixed(1)} C${t.toFixed(1)},${(e+i*.55).toFixed(1)} ${o.toFixed(1)},${(e+i*.4).toFixed(1)} ${o.toFixed(1)},${n.toFixed(1)}`}var ua={fill:"rgba(255, 152, 0, 0.15)",stroke:"rgba(255, 152, 0, 0.25)"},De=360,fa=4,vc=5,Oe=400,bc=162,bi=145,ga=14,wc=60,yc=28,_c=66,xc={5:58,6:78},$c=36,Sc=22,kc=6,Tc=2,Ac=.45,ma=150,va=34,gi=8,ba=118,wa=74,Cc=56,Ec=14,fi=2,wi=16,Mc=9,Fc=3,Ic=2,Lc="color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)",Nc="color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)",Go={heating:{layout:"auto",vent:!1,label:"Energy Flow",source:"Boiler",aria:"Energy flow from boiler to zones",empty:"No heating data",titleSuffix:"heating power",prefix:"flow",dataVariant:"",power:t=>t.heatingPower,hasPower:t=>t.hasHeatingPowerData,color:()=>Kt.heating.fallback,tint:()=>ua,hasData:(t,e,o)=>t.hasHeatingPowerData||t.heatingPower>0||e.heating_power||o?.attributes?.heating_power!==void 0},ac:{layout:"vertical",vent:!0,label:"AC Flow",source:"AC",aria:"Energy flow from AC units to zones",empty:"No AC data",titleSuffix:"AC power",prefix:"flow-ac",dataVariant:' data-variant="ac"',power:t=>t.coolingPower,hasPower:t=>t.hasAcPowerData,color:t=>t?Kt.cooling.fallback:Kt.heating.fallback,tint:t=>t?{fill:`color-mix(in srgb, ${Kt.cooling.fallback} 15%, transparent)`,stroke:`color-mix(in srgb, ${Kt.cooling.fallback} 25%, transparent)`}:ua,hasData:t=>!t.isUnavailable}};function ya(t,e){return t.layout==="vertical"?"vertical":e>=vc?"radial":"horizontal"}function Yo(t,e){return t.hasPowerData?`${t.name}: ${Math.round(t.power)}% ${e.titleSuffix}`:`${t.name}: no power data`}var Pe=(t,e,o)=>`class="pc-flow-zone-text" data-role="${o}" data-zone-idx="${e}" data-entity="${f(t.entityId)}"`,io=t=>t.power>0||st(t)&&!t.hasPowerData;function jo(t,e,o,n){let i=t>0?Or(t,20,n):Fc,r=Math.round(Pr(t>0?t:0)*2)/2,a=Math.round(Br(e,o)*2)/2;return{count:i,dur:r,r:a,key:`${i}|${r.toFixed(1)}|${a.toFixed(1)}`}}var no=2,Zo=22;function vi(t){return t.power>0?no+t.power/100*(Zo-no):st(t)&&!t.hasPowerData?no+(Zo-no)/2:no}function yi(t){return t.power>0?fi+t.power/100*(wi-fi):st(t)&&!t.hasPowerData?Mc:fi}var Xo=t=>Jt(t,t.power),Ko=t=>K(t.temp,t.unit);function _i(t){let i=Math.max(80,t*46+30),r=t*46,a=Math.max(40,Math.min(r*.7,r-16)),s=Math.max(36,a*.6),l=Math.max(50,s/2+14),p=284,d=i/2,c=a/Math.max(t,1)*.7;return{svgW:360,zoneSpacing:46,startY:15,svgH:i,boilerH:a,boilerW:s,sourceX:l,destX:p,sourceY:d,fanSpacing:c}}function zc(t,e){let o=Math.min(e,fa),n=De/o,i=Math.floor(t/o),r=Math.min(o,e-i*o),a=(o-r)*n/2+t%o*n+n/2,s=ba+i*wa,l=De/2,p=l+(a-l)/De*26*.5,d=gi+va+Ic,c=s-Ec;return{x:a,nameY:s,startX:p,startY:d,endY:c,d:gc(p,d,a,c)}}var Rc=t=>ba+(Math.ceil(t/Math.min(t,fa))-1)*wa+Cc,ve=t=>Math.round(t*10)/10;function xi(t){let{boilerW:e,boilerH:o}=_i(4),n=xc[t]??_c;return{gap:(n*t-180)/(t-1),arcY:wc+bi*Math.cos(n*Math.PI/180),boilerW:e,boilerH:o,cy:ga+o/2}}function Hc(t,e,o){let n=Ac*Math.hypot(e.x-t.x,e.y-t.y),i=o==="left"?-1:o==="right"?1:0,r=o==="top"?-1:o==="bottom"?1:0,a=s=>s.toFixed(1);return`M${a(t.x)} ${a(t.y)} C${a(t.x+i*n)} ${a(t.y+r*n)} ${a(e.x-i*n)} ${a(e.y-r*n)} ${a(e.x)} ${a(e.y)}`}var Dc=t=>xi(t).arcY+bi+yc;function Oc(t,e){let{gap:o,arcY:n,boilerW:i,boilerH:r,cy:a}=xi(e),s=(o+(360-2*o)*(t+.5)/e)*Math.PI/180,l=ve(Oe/2+bc*Math.sin(s)),p=ve(n-bi*Math.cos(s)),d=l-Oe/2,c=p-a,m=Math.hypot(d,c)||1,u=d/m,h=c/m,v=Math.min(u===0?1/0:$c/Math.abs(u),h===0?1/0:Sc/Math.abs(h))+kc,w=u===0?1/0:i/2/Math.abs(u),b=h===0?1/0:r/2/Math.abs(h),y=Math.min(w,b)+Tc,_=w<=b?u<0?"left":"right":h<0?"top":"bottom",S=ve(Oe/2+u*y),$=ve(a+h*y),A=ve(l-u*v),M=ve(p-h*v);return{x:l,nameY:ve(p-8),startX:S,startY:$,endX:A,endY:M,d:Hc({x:S,y:$},{x:A,y:M},_),gradient:{x1:S,y1:$,x2:A,y2:M}}}function Pc(t){let{boilerW:e,boilerH:o,cy:n}=xi(t);return{x:(Oe-e)/2,y:ga,w:e,h:o,rx:8,labelX:Oe/2,labelY:n+4}}function Vo(t,e,o){if(t==="radial")return Oc(e,o);let n=zc(e,o);return{...n,endX:n.x,gradient:{x1:0,y1:n.startY,x2:0,y2:n.endY}}}var Bc=(t,e)=>t==="radial"?Dc(e):Rc(e),qc=t=>t==="radial"?Oe:De;function Uc(t,e){return t==="radial"?Pc(e):{x:(De-ma)/2,y:gi,w:ma,h:va,rx:10,labelX:De/2,labelY:gi+17}}function _a(t,e){if(!t.some(st))return{fill:Lc,stroke:Nc};let o=e.color(t.some(n=>n.hvacAction==="cooling"));return{fill:e.tint(t.some(n=>n.hvacAction==="cooling")).fill,stroke:o}}function Wc(t,e,o,n){let i=t.length,r=Bc(n,i),a=qc(n),s="var(--pulse-disabled)",l=t.filter(io).length,p=_a(t,e),d=Uc(n,i),c=d.x,m=`<svg viewBox="0 0 ${a} ${r}" role="img" aria-label="${e.aria}" style="width:100%;height:${k(r)}px;display:block">`;m+="<defs>",m+=Lt(`${e.prefix}-glow`,ge(a,360).toFixed(1)).replace("<filter ",`<filter filterUnits="userSpaceOnUse" x="0" y="0" width="${a}" height="${r}" `);for(let u=0;u<i;u++){let h=t[u],g=st(h),v=g?e.color(h.hvacAction==="cooling"):s,{gradient:w}=Vo(n,u,i);if(m+=`<linearGradient id="${e.prefix}-g${u}" gradientUnits="userSpaceOnUse" x1="${w.x1}" y1="${w.y1}" x2="${w.x2}" y2="${w.y2}">`,g){let b=h.power>0?(4.5-h.power/100*3.3).toFixed(1):"5.0";if(m+=`<stop offset="0%" stop-color="${k(v)}" stop-opacity="0.3"/>`,m+=`<stop offset="50%" stop-color="${k(v)}" stop-opacity="1.0"/>`,m+=`<stop offset="100%" stop-color="${k(v)}" stop-opacity="0.3"/>`,!o){let y=(w.x2-w.x1)/2,_=(w.y2-w.y1)/2;for(let[S,$,A]of[["x1",w.x1,y],["y1",w.y1,_],["x2",w.x2,y],["y2",w.y2,_]])A!==0&&(m+=`<animate attributeName="${S}" from="${Math.round(($-A)*100)/100}" to="${Math.round(($+A)*100)/100}" dur="${b}s" repeatCount="indefinite"/>`)}}else m+=`<stop offset="0%" stop-color="${k(v)}" stop-opacity="0.15"/>`,m+=`<stop offset="50%" stop-color="${k(v)}" stop-opacity="0.25"/>`,m+=`<stop offset="100%" stop-color="${k(v)}" stop-opacity="0.1"/>`;m+="</linearGradient>"}m+="</defs>";for(let u=0;u<i;u++){let h=t[u],g=st(h),{d:v}=Vo(n,u,i),w=yi(h),b=e.color(h.hvacAction==="cooling");if(m+=`<path d="${v}" fill="none" stroke="url(#${e.prefix}-g${u})" stroke-width="${w.toFixed(1)}" stroke-linecap="round"${g?' class="pc-ribbon-active"':""}${g?` filter="url(#${e.prefix}-glow)"`:""} data-zone="${f(h.name)}" data-zone-idx="${u}">`,m+=`<title>${f(Yo(h,e))}</title></path>`,io(h)&&!o){let{count:y,dur:_,r:S,key:$}=jo(h.power,w,wi,l),A=(S*.8).toFixed(1);m+=`<g class="pc-flow-particles" data-zone="${f(h.name)}" data-zone-idx="${u}" data-particle-key="${$}" style="will-change:transform">`;for(let M=0;M<y;M++)m+=`<circle r="${S.toFixed(1)}" fill="${k(b)}" opacity="0.8" filter="drop-shadow(0 0 ${A}px ${k(b)})">`,m+=`<animateMotion dur="${_.toFixed(1)}s" begin="${(M*(_/y)).toFixed(2)}s" repeatCount="indefinite" path="${v}"/>`,m+="</circle>";m+="</g>"}}m+=`<rect data-role="ac-unit" x="${c}" y="${d.y}" width="${d.w}" height="${d.h}" rx="${d.rx}" fill="${k(p.fill)}" stroke="${k(p.stroke)}" stroke-width="1"/>`,e.vent&&(m+=`<rect data-role="ac-vent" x="${c+16}" y="${d.y+d.h-9}" width="${d.w-32}" height="4" rx="2" fill="none" stroke="${k(p.stroke)}" stroke-opacity="0.5"/>`),m+=`<text data-role="ac-label" x="${d.labelX}" y="${d.labelY}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">${e.source}</text>`;for(let u=0;u<i;u++){let h=t[u],g=st(h),{x:v,nameY:w}=Vo(n,u,i),b=e.color(h.hvacAction==="cooling");m+=`<text ${Pe(h,u,"zone-name")} x="${v}" y="${w}" text-anchor="middle" font-size="13" fill="${g?"var(--pulse-text-primary)":"var(--pulse-text-secondary)"}"${g?' font-weight="500"':""}>${f(h.name)}</text>`,m+=`<text ${Pe(h,u,"zone-sub")} x="${v}" y="${w+13}" text-anchor="middle" font-size="9.5" fill="${g?k(b):"var(--pulse-text-secondary)"}">${f(Xo(h))}</text>`,m+=`<text ${Pe(h,u,"zone-temp")} x="${v}" y="${w+25}" text-anchor="middle" font-size="9.5" fill="var(--pulse-text-secondary)">${f(Ko(h))}</text>`}return m+="</svg>",m}function Vc(t,e,o,n){let i=e.length,r="var(--pulse-disabled)",a=_a(e,o),s=t.querySelector('[data-role="ac-unit"]');s&&(s.setAttribute("fill",a.fill),s.setAttribute("stroke",a.stroke)),t.querySelector('[data-role="ac-vent"]')?.setAttribute("stroke",a.stroke);for(let l=0;l<i;l++){let p=e[l],d=st(p),c=o.color(p.hvacAction==="cooling"),{d:m}=Vo(n,l,i),u=t.querySelector(`path[data-zone-idx="${l}"]`);if(u){u.setAttribute("d",m),u.setAttribute("stroke-width",yi(p).toFixed(1)),d?(u.classList.add("pc-ribbon-active"),u.setAttribute("filter",`url(#${o.prefix}-glow)`)):(u.classList.remove("pc-ribbon-active"),u.removeAttribute("filter"));let y=u.querySelector("title");y&&(y.textContent=Yo(p,o))}let h=t.querySelector(`g.pc-flow-particles[data-zone-idx="${l}"]`);if(h){h.style.display=io(p)?"":"none";for(let y of h.querySelectorAll("circle"))y.setAttribute("fill",k(c)),y.setAttribute("filter",`drop-shadow(0 0 ${(parseFloat(y.getAttribute("r")||"0")*.8).toFixed(1)}px ${k(c)})`)}let g=t.querySelector(`#${o.prefix}-g${l}`);if(g){let y=d?c:r,_=d?["0.3","1.0","0.3"]:["0.15","0.25","0.1"],S=g.querySelectorAll("stop");if(S.length>=3&&S.forEach(($,A)=>{$.setAttribute("stop-color",y),$.setAttribute("stop-opacity",_[A]??"0.1")}),d){let $=p.power>0?(4.5-p.power/100*3.3).toFixed(1):"5.0";g.querySelectorAll("animate").forEach(A=>A.setAttribute("dur",`${$}s`))}else g.querySelectorAll("animate").forEach($=>$.remove())}let v=t.querySelector(`text[data-role="zone-name"][data-zone-idx="${l}"]`);v&&(v.textContent=p.name,v.setAttribute("fill",d?"var(--pulse-text-primary)":"var(--pulse-text-secondary)"),d?v.setAttribute("font-weight","500"):v.removeAttribute("font-weight"));let w=t.querySelector(`text[data-role="zone-sub"][data-zone-idx="${l}"]`);w&&(w.textContent=Xo(p),w.setAttribute("fill",d?c:"var(--pulse-text-secondary)"));let b=t.querySelector(`text[data-role="zone-temp"][data-zone-idx="${l}"]`);b&&(b.textContent=Ko(p))}}function Jo(t,e,o,n="heating"){if(!t||t.length===0)return"";let i=Go[n]||Go.heating,r=mt(),a=[],s=!1;for(let x of t){let{entityId:E,zoneEntities:F,zoneState:N}=tt(x,o,e);i.hasData(N,F,e[E])&&(s=!0),a.push({name:N.name,entityId:E,power:i.power(N),hasPowerData:i.hasPower(N),temp:N.currentTemp,target:N.targetTemp,unit:N.unit,hvacAction:N.hvacAction,isUnavailable:N.isUnavailable})}let l=a.filter(x=>x.hasPowerData),p=fe(a)??0,d=a.some(x=>x.hvacAction==="cooling"),c=`<div class="pc-section pc-section-energy-flow"${i.dataVariant}>`;if(c+='<div class="pc-section-header">',c+=`<div class="pulse-section-label">${i.label}</div>`,s&&l.length>0&&(c+=`<span class="pc-energy-flow-header-value" style="color:${k(i.color(d))}">${f(p)}% avg</span>`),c+="</div>",!s)return c+=`<div class="pc-chart-empty">${i.empty}</div></div>`,c;let m=ya(i,a.length);if(m!=="horizontal")return c+=Wc(a,i,r,m),c+="</div>",c;let{svgW:u,zoneSpacing:h,startY:g,svgH:v,boilerH:w,boilerW:b,sourceX:y,destX:_,sourceY:S,fanSpacing:$}=_i(a.length),A="var(--pulse-disabled)",M=a.some(st),I=a.filter(x=>x.power>0).length;c+=`<svg viewBox="0 0 ${u} ${v}" role="img" aria-label="${i.aria}" style="width:100%;height:${k(v)}px;display:block">`,c+="<defs>",c+=Lt(`${i.prefix}-glow`,ge(u,360).toFixed(1));for(let x=0;x<a.length;x++){let E=st(a[x]),F=E?i.color(a[x].hvacAction==="cooling"):A,N=a[x].power;if(E){let z=N>0?(4.5-N/100*3.3).toFixed(1):"5.0";c+=`<linearGradient id="${i.prefix}-g${x}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,c+=`<stop offset="0%" stop-color="${k(F)}" stop-opacity="0.3"/>`,c+=`<stop offset="50%" stop-color="${k(F)}" stop-opacity="1.0"/>`,c+=`<stop offset="100%" stop-color="${k(F)}" stop-opacity="0.3"/>`,r||(c+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${z}s" repeatCount="indefinite"/>`,c+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${z}s" repeatCount="indefinite"/>`),c+="</linearGradient>"}else c+=`<linearGradient id="${i.prefix}-g${x}" x1="0" y1="0" x2="1" y2="0">`,c+=`<stop offset="0%" stop-color="${k(F)}" stop-opacity="0.15"/>`,c+=`<stop offset="50%" stop-color="${k(F)}" stop-opacity="0.25"/>`,c+=`<stop offset="100%" stop-color="${k(F)}" stop-opacity="0.1"/>`,c+="</linearGradient>"}c+="</defs>";let L=i.tint(d),T=M?L.fill:"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)",C=M?L.stroke:"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)";c+=`<rect x="${y-b/2}" y="${S-w/2}" width="${b}" height="${w}" rx="8" fill="${k(T)}" stroke="${k(C)}" stroke-width="1"/>`,c+=`<text x="${y}" y="${S-w/2-6}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">${i.source}</text>`;for(let x=0;x<a.length;x++){let E=a[x],F=g+x*h+20,N=st(E),z=vi(E),R=N?' class="pc-ribbon-active"':"",O=S+(x-(a.length-1)/2)*$,V=ha(O,F,z/2,z/2,u,y+b/2,_-12),q=i.color(E.hvacAction==="cooling");if(c+=`<path d="${V}" fill="url(#${i.prefix}-g${x})"${R}${N?` filter="url(#${i.prefix}-glow)"`:""} data-zone="${f(E.name)}" data-zone-idx="${x}">`,c+=`<title>${f(Yo(E,i))}</title></path>`,E.power>0&&!r){let{count:H,dur:U,r:Y,key:j}=jo(E.power,z,Zo,I),et=(Y*.8).toFixed(1),rt=fc(O,F,y+b/2,_-12);c+=`<g class="pc-flow-particles" data-zone="${f(E.name)}" data-zone-idx="${x}" data-particle-key="${j}" style="will-change:transform">`;for(let lt=0;lt<H;lt++){let kt=(lt*(U/H)).toFixed(2);c+=`<circle r="${Y.toFixed(1)}" fill="${k(q)}" opacity="0.8"`,c+=` filter="drop-shadow(0 0 ${et}px ${k(q)})">`,c+=`<animateMotion dur="${U.toFixed(1)}s" begin="${kt}s" repeatCount="indefinite"`,c+=` path="${rt}"/>`,c+="</circle>"}c+="</g>"}let D=N?"var(--pulse-text-primary)":"var(--pulse-text-secondary)",W=N?' font-weight="500"':"";c+=`<text ${Pe(E,x,"zone-name")} x="${_}" y="${(F-1).toFixed(1)}" font-size="14" fill="${k(D)}"${W}>${f(E.name)}</text>`;let P=N?k(q):"var(--pulse-text-secondary)";c+=`<text ${Pe(E,x,"zone-sub")} x="${_}" y="${(F+12).toFixed(1)}" font-size="10" fill="${P}">${f(Xo(E))}</text>`,c+=`<text ${Pe(E,x,"zone-temp")} x="${_}" y="${(F+24).toFixed(1)}" font-size="10" fill="var(--pulse-text-secondary)">${f(Ko(E))}</text>`}return c+="</svg>",c+="</div>",c}function xa(t,e,o,n,i="heating"){if(!t||!e||e.length===0)return!1;let r=Go[i]||Go.heating,a=t.querySelector("svg");if(!a)return!1;let s=[],l=!1;for(let C of e){let{entityId:x,zoneEntities:E,zoneState:F}=tt(C,n,o);r.hasData(F,E,o[x])&&(l=!0),s.push({name:F.name,entityId:x,power:r.power(F),hasPowerData:r.hasPower(F),temp:F.currentTemp,unit:F.unit,hvacAction:F.hvacAction,isUnavailable:F.isUnavailable})}let p=a.querySelectorAll("path[data-zone]");if(p.length!==s.length||!l)return!1;let d=s.filter(C=>C.hasPowerData),c=t.querySelector(".pc-energy-flow-header-value");if(!!c!=d.length>0)return!1;let m=ya(r,s.length),u=m!=="horizontal",h=u?io:C=>C.power>0;if(!mt()){let C=s.filter(io).length,x=s.filter(E=>E.power>0).length;for(let E=0;E<s.length;E++){let F=s[E];if(!h(F))continue;let N=a.querySelector(`g.pc-flow-particles[data-zone-idx="${E}"]`);if(!N)return!1;let z=u?jo(F.power,yi(F),wi,C):jo(F.power,vi(F),Zo,x);if(N.getAttribute("data-particle-key")!==z.key)return!1}}let g="var(--pulse-disabled)",v=s.some(st),w=s.some(C=>C.hvacAction==="cooling"),b=r.tint(w),{svgW:y,zoneSpacing:_,startY:S,boilerW:$,sourceX:A,destX:M,sourceY:I,fanSpacing:L}=_i(s.length);if(c){let C=fe(s)??0;c.textContent=`${C}% avg`,c.style.color=r.color(w)}if(m!=="horizontal")return Vc(a,s,r,m),!0;let T=a.querySelector("rect");T&&(T.setAttribute("fill",v?b.fill:"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)"),T.setAttribute("stroke",v?b.stroke:"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)"),T.setAttribute("stroke-width",v?"0.5":"1"));for(let C=0;C<s.length;C++){let x=s[C],E=p[C],F=st(x),N=S+C*_+20,z=vi(x),R=I+(C-(s.length-1)/2)*L,O=ha(R,N,z/2,z/2,y,A+$/2,M-12);E.setAttribute("d",O),F?(E.classList.add("pc-ribbon-active"),E.setAttribute("filter",`url(#${r.prefix}-glow)`)):(E.classList.remove("pc-ribbon-active"),E.removeAttribute("filter"));let V=E.querySelector("title");V&&(V.textContent=Yo(x,r));let q=a.querySelector(`g.pc-flow-particles[data-zone-idx="${C}"]`);q&&(q.style.display=x.power>0?"":"none");let D=r.color(x.hvacAction==="cooling"),W=a.querySelector(`#${r.prefix}-g${C}`);if(W){let Y=F?D:g,j=W.querySelectorAll("stop"),et=W.querySelectorAll("animate");if(F){let rt=x.power>0?(4.5-x.power/100*3.3).toFixed(1):"5.0";j.length>=3&&(j[0].setAttribute("stop-color",Y),j[0].setAttribute("stop-opacity","0.3"),j[1].setAttribute("stop-color",Y),j[1].setAttribute("stop-opacity","1.0"),j[2].setAttribute("stop-color",Y),j[2].setAttribute("stop-opacity","0.3"));for(let lt of et)lt.setAttribute("dur",`${rt}s`);W.setAttribute("gradientUnits","objectBoundingBox")}else{j.length>=3&&(j[0].setAttribute("stop-color",Y),j[0].setAttribute("stop-opacity","0.15"),j[1].setAttribute("stop-color",Y),j[1].setAttribute("stop-opacity","0.25"),j[2].setAttribute("stop-color",Y),j[2].setAttribute("stop-opacity","0.1"));for(let rt of et)rt.remove()}}let P=a.querySelector(`text[data-role="zone-name"][data-zone-idx="${C}"]`),H=a.querySelector(`text[data-role="zone-sub"][data-zone-idx="${C}"]`),U=a.querySelector(`text[data-role="zone-temp"][data-zone-idx="${C}"]`);if(!P||!H||!U)return!1;P.textContent=x.name,P.setAttribute("fill",F?"var(--pulse-text-primary)":"var(--pulse-text-secondary)"),F?P.setAttribute("font-weight","500"):P.removeAttribute("font-weight"),H.textContent=Xo(x),H.setAttribute("fill",F?D:"var(--pulse-text-secondary)"),U.textContent=Ko(x)}return!0}function $a(t,e,o){let n=t?.outdoor_temp_entity||e?.hubEntities?.outside_temp||null;if(n)return n;for(let i of Object.keys(o||{}))if(i.startsWith("weather.")&&o?.[i]?.attributes?.temperature!==void 0)return i;return null}function ro(t,e,o,n){let i={outdoor_temp_entity:e?.outdoor_temp_entity||t?.outdoor_temp_entity},r=[$a(i,o,n),e?.outdoor_humidity_entity];return[...new Set(r.filter(Boolean))]}function Qo(t,e,o){let n=tn(t,e,o);return n.value===null?null:`${ht(n.value)}${n.unit}`}function tn(t,e,o){let n={value:null,unit:pt(null),entityId:null};if(!o)return n;let i=$a(t,e,o);if(!i||!o[i])return n;let r=o[i];if(Q(r))return{value:null,unit:pt(null),entityId:i};let a=r.attributes?.temperature!==void 0?r.attributes.temperature:r.state,s=Number.parseFloat(a),l=pt(r.attributes);return{value:Number.isFinite(s)?s:null,unit:l,entityId:i}}var Sa=6,$i=2;function Si(t,e,o,n,i,r){let a=i*Math.PI/180,s=r*Math.PI/180,l=r-i>180?1:0;return`M${(t+o*Math.cos(a)).toFixed(2)},${(e+o*Math.sin(a)).toFixed(2)} A${o.toFixed(2)},${o.toFixed(2)} 0 ${l} 1 ${(t+o*Math.cos(s)).toFixed(2)},${(e+o*Math.sin(s)).toFixed(2)} L${(t+n*Math.cos(s)).toFixed(2)},${(e+n*Math.sin(s)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 0 ${(t+n*Math.cos(a)).toFixed(2)},${(e+n*Math.sin(a)).toFixed(2)} Z`}function ki({attribute:t,outdoorTempText:e,outdoorHumidityText:o}){let n=o!=null;return t==="humidity"?{center:n?`${o}%`:"--",centerSub:""}:{center:e??"--",centerSub:t==="both"&&n?`${o}%`:""}}function Ti(t,e,o,n,i){if(!t||t.length===0)return"";let r=mt(),a=Number(e?.size)||280,s=e?.attribute||"temperature",l=s==="temperature"||s==="both",p=s==="humidity"||s==="both",d=a/2,c=a/2,m=a*120/280,u=1.5,v=(360-u*t.length)/t.length,w=[];for(let z of t){let{entityId:R,zoneState:O}=tt(z,n,o),V=O.heatingPower||O.coolingPower||0;w.push({name:O.name,temp:O.currentTemp,target:O.targetTemp,power:V,hasPowerData:O.hasPowerData,humidity:O.humidity,hvacAction:O.hvacAction,isUnavailable:O.isUnavailable,entityId:R,unit:O.unit,rowClass:ft(O),shimmer:O.hvacAction==="cooling"?0:Dr(V,a)})}let b=e?.outdoor_temp_entity,y=Qo(e,n,o),_=e?.outdoor_humidity_entity,S=null;if(_&&o[_]){let z=o[_];Q(z)||(S=z.attributes?.humidity!==void 0?String(z.attributes.humidity):z.state)}let $=ki({attribute:s,outdoorTempText:y,outdoorHumidityText:S}),A=f($.center),M=f($.centerSub),L={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[s]||"Home Thermal View",T=`<div class="pc-section pc-section-radial" data-attribute="${f(s)}"${b?` data-outdoor-temp-entity="${f(b)}"`:""}${_?` data-outdoor-humidity-entity="${f(_)}"`:""}>`;T+=`<div class="pulse-section-label">${f(L)}</div>`,T+='<div class="pc-radial-container">';let C=`r${Math.random().toString(36).slice(2,9)}`,x=`radial-glow-${C}`,E=z=>`heat-shimmer-${C}-${z}`;if(T+=`<svg class="pc-radial-svg" viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" role="img" aria-label="${f(L)}">`,T+="<defs>",T+=Lt(x,ge(a,280).toFixed(1)),!r)for(let z=0;z<w.length;z++){let O=w[z].shimmer;if(O<=0)continue;let V=45/Math.max(v,10),q=(.02*V).toFixed(4),D=(.04*V).toFixed(4);T+=`<filter id="${E(z)}" x="-5%" y="-5%" width="110%" height="110%">`,T+=`<feTurbulence type="turbulence" baseFrequency="${q} ${D}" numOctaves="2" result="turb">`,T+=`<animate attributeName="baseFrequency" values="${q} ${D};${(parseFloat(q)*1.5).toFixed(4)} ${D};${q} ${D}" dur="4s" repeatCount="indefinite"/>`,T+="</feTurbulence>",T+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${O.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,T+="</filter>"}T+="</defs>";for(let z=0;z<w.length;z++){let R=w[z],O=z*(v+u)-90,V=O+v,q=st(R),D=q?" pc-arc-active":"",W=[R.name];l&&W.push(K(R.temp,R.unit)),p&&R.humidity!==null&&W.push(Et(R.humidity)),W.push(Jt(R,R.power));let P=f(W.join(", "));T+=`<g class="pc-arc-group${D}" data-idx="${z}">`;let H=p&&s==="both"?m+$i+Sa+4:m+4,U=m-28-4,Y=Si(d,c,H,U,O-u/2,V+u/2);if(T+=`<path d="${Y}" fill="transparent" class="pc-arc-hit"/>`,l){let j=R.temp!==null?dt(R.temp):"var(--pulse-disabled)",et=8+R.power/100*20,rt=m-et,lt=Si(d,c,m,rt,O,V);if(T+=`<path d="${lt}" fill="${k(j)}" class="pc-arc-path"`,R.shimmer>0&&!r?T+=` filter="url(#${E(z)})"`:q&&(T+=` filter="url(#${x})"`),T+=`><title>${P}</title>`,q&&!r){let Rt=R.power>0?(4.5-R.power/100*3).toFixed(1):"5.0";T+=`<animate attributeName="opacity" values="1;0.82;1" dur="${Rt}s" repeatCount="indefinite"/>`}T+="</path>"}if(p&&R.humidity!==null){let j=to(R.humidity),et,rt;if(s==="both")et=m+$i+Sa,rt=m+$i;else{let kt=8+R.power/100*20;et=m,rt=m-kt}let lt=Si(d,c,et,rt,O,V);T+=`<path d="${lt}" fill="${k(j)}" class="pc-arc-path" opacity="0.8">`,T+=`<title>${P}</title>`,T+="</path>"}T+="</g>"}T+="</svg>";let F=8;if(l)for(let z of w){let R=8+z.power/100*20;R>F&&(F=R)}let N=Math.round((m-F)*2);T+=`<div class="pc-center-info" id="radial-center" style="width:${N}px;height:${N}px">`,T+='<div class="pc-center-sheen" id="radial-sheen"></div>',T+=`<div class="pc-center-value">${A}</div>`,T+='<div class="pc-center-label">Outdoor</div>',T+=`<div class="pc-center-sub">${M}</div>`,T+="</div>",T+="</div>",T+='<div class="pc-zone-detail" id="radial-detail"></div>',T+='<div class="pc-radial-legend">';for(let z=0;z<w.length;z++){let R=w[z],O=s==="humidity"?R.humidity!==null?to(R.humidity):"var(--pulse-disabled)":R.temp!==null?dt(R.temp):"var(--pulse-disabled)",V="";l&&(V+=K(R.temp,R.unit)),l&&p&&(V+=" \xB7 "),p&&(V+=Et(R.humidity)),T+=`<div class="pc-legend-item${R.rowClass}" data-idx="${z}">`,T+=`<span class="pc-legend-dot" style="background:${k(O)}"></span>`,T+=`<span class="pc-legend-name">${f(R.name)}</span> <span class="pc-legend-temp">${f(V)}</span>`,T+="</div>"}return T+="</div>",T+="</div>",T}var Ai=t=>!t.isUnavailable&&t.hvacAction!=="off"&&(Number.isFinite(t.targetTemp)||["heating","cooling","drying","fan"].includes(t.hvacAction)),Gc=5,jc={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function ka(t){let{currentTemp:e,targetTemp:o}=t;return e==null||o===null||o===void 0?1/0:t.hvacMode==="cool"?Math.max(0,e-o):t.hvacMode==="heat"?Math.max(0,o-e):t.targetRange?Math.max(0,t.targetRange.low-e,e-t.targetRange.high):Math.abs(e-o)}function Ci(t){return ka(t)>Xt(1)}function Zc(t,e=t){if(t.length===0)return e.length>0&&e.every(d=>d.isUnavailable)?{label:"Unavailable",color:"amber",detail:"No zone is reporting"}:{label:"All Good",color:"green",detail:"All zones off"};let o=t.filter(d=>Ci(d)),n=t.length,i=o.length,r=n-i,a=r/n,s=d=>d.currentTemp>d.targetTemp,l=i>0&&o.every(s),p=l?"above":o.some(s)?"away from":"short of";return a>=.8?{label:"All Good",color:"green",detail:`${r} of ${n} zones at or past target`}:a>=.4?{label:l?"Cooling Down":"Warming Up",color:"amber",detail:`${i} zone${i!==1?"s":""} still ${p} target`}:{label:l?"Too Warm":"Cold Start",color:"red",detail:`${i} of ${n} zones still ${p} target`}}function Yc(t){let e=[],o=[],n=[];for(let i of t)i.isUnavailable?n.push(i):Ai(i)?e.push(i):o.push(i);return e.sort((i,r)=>{let a=i.currentTemp!==null&&i.currentTemp!==void 0&&i.targetTemp!==null?Math.abs(i.currentTemp-i.targetTemp):0;return(r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null?Math.abs(r.currentTemp-r.targetTemp):0)-a}),o.sort((i,r)=>i.name.localeCompare(r.name)),n.sort((i,r)=>i.name.localeCompare(r.name)),[...e,...o,...n]}function Xc(t){if(t.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let e=t.filter(p=>Number.isFinite(p.currentTemp)&&Number.isFinite(p.targetTemp)&&!Ci(p)).length,o=t.length,n=t[0].unit||"\xB0C",i=p=>{let d=t.map(c=>c[p]).filter(c=>Number.isFinite(c));return d.length>0?K(d.reduce((c,m)=>c+m,0)/d.length,n):"--"},r=i("currentTemp"),a=i("targetTemp"),s=fe(t.map(p=>({isUnavailable:!1,hvacAction:p.hvacAction,power:p.heatingPower||p.coolingPower||0,hasPowerData:p.hasPowerData!==!1}))),l=s===null?"--":`${s}%`;return{onTarget:`${e}/${o}`,avgActual:r,avgTarget:a,avgPower:l}}function Kc(t){let e=f(t.entityId),o=f(t.name),n=t.unit||"\xB0C",i=Ai(t),r,a;if(t.isUnavailable)r='<span class="pc-home-status-actual pc-off">--</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">Unavailable</span>',a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';else if(!i)r=`<span class="pc-home-status-actual pc-off">${f(K(t.currentTemp,n))}</span><span class="pc-home-status-arrow"></span><span class="pc-home-status-target">${f(Ot(t))}</span>`,a=`<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">${f(Ot(t))}</span></div>`;else if(r=`<span class="pc-home-status-actual">${f(K(t.currentTemp,n))}</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">${Number.isFinite(t.targetTemp)?f(K(t.targetTemp,n)):"--"}</span>`,t.currentTemp!==null&&t.currentTemp!==void 0&&Number.isFinite(t.targetTemp)){let p=t.currentTemp-t.targetTemp,d=Math.abs(p),c=Math.min(d/Xt(Gc),1)*50,m=p<0?`${k(50-c)}%`:"50%",u=`${k(c)}%`,h=ka(t),g=Ci(t)?h<=Xt(2.5)?"amber":"red":"green",v=ht(d),b=`${v==="0"?"":p>=0?"+":"\u2212"}${f(v+n)}`;a=`<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div><div class="pc-home-status-bar-fill pc-status-${g}" style="left:${m};width:${u}"></div></div><span class="pc-home-status-delta-text pc-status-${g}">${b}</span></div>`}else a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';return`<div class="pc-home-status-row${ft(t)}" role="button" tabindex="0" data-entity="${e}"><span class="pc-home-status-zone-name">${o}</span><div class="pc-home-status-temps">${r}</div>`+a+"</div>"}function Ei(t,e,o,n){if(!t||t.length===0)return"";let i=t.map(c=>tt(c,o,e).zoneState),r=i.filter(c=>Ai(c)&&Number.isFinite(c.targetTemp)),a=Zc(r,i),s=jc[a.color],l=Yc(i),p=Xc(r),d='<div class="pc-section pc-section-home-status">';d+='<div class="pulse-section-label">Home Status</div>',n?.show_hero===!1&&(d+='<div class="pc-home-status-hero">',d+=`<ha-icon class="pc-home-status-icon pc-status-${a.color}" icon="${f(s)}"></ha-icon>`,d+=`<div class="pc-home-status-label pc-status-${a.color}">${f(a.label)}</div>`,d+=`<div class="pc-home-status-detail">${f(a.detail)}</div>`,d+="</div>"),d+='<div class="pc-home-status-zones">';for(let c of l)d+=Kc(c);return d+="</div>",d+='<div class="pc-home-status-summary">',d+=`<div class="pc-stat"><div class="pc-stat-value">${f(p.onTarget)}</div><div class="pc-stat-label">On Target</div></div>`,d+=`<div class="pc-stat"><div class="pc-stat-value">${f(p.avgActual)}</div><div class="pc-stat-label">Avg Actual</div></div>`,d+=`<div class="pc-stat"><div class="pc-stat-value">${f(p.avgTarget)}</div><div class="pc-stat-label">Avg Target</div></div>`,d+=`<div class="pc-stat"><div class="pc-stat-value">${f(p.avgPower)}</div><div class="pc-stat-label">Avg Power</div></div>`,d+="</div>",d+="</div>",d}function Jc(t,e,o,n){if(t!=="comfort")return!0;if(!e||e.length===0)return!1;for(let i of e){let r=tt(i,o,n);if(r.zoneState.isUnavailable)continue;let a=Wo(i,r,n);if(He(a.temp,a.target,a.humidity,a.level)!==null)return!0}return!1}function Ta(t,e,o){let n=["power","temp","humidity"];return Jc("comfort",t,e,o)&&n.push("comfort"),n}function Qc(t){return t<=40?"green":t<=70?"amber":"red"}function tp(t){return t>=80?"green":t>=50?"amber":"red"}var Aa={power:{label:"Power",unit:"%",max:100,tierFn:Qc},temp:{label:"Temp",unit:null,max:null,tierFn:()=>"blue"},humidity:{label:"Humidity",unit:"%",max:100,tierFn:()=>"blue"},comfort:{label:"Comfort",unit:"",max:100,tierFn:tp}};function ep(t,e,o,n){let i=o.zoneState;if(i.isUnavailable)return null;switch(t){case"power":return i.hasPowerData?i.heatingPower||i.coolingPower||0:null;case"temp":return i.currentTemp;case"humidity":return i.humidity;case"comfort":{let r=Wo(e,o,n);return He(r.temp,r.target,r.humidity,r.level)}default:return null}}function op(t,e,o){let n=t.filter(d=>d!=null);if(n.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let i=o!==void 0?o:n.reduce((d,c)=>d+c,0)/n.length,r=Math.max(...n),a=Math.min(...n),s=r-a,l=e||"",p=d=>l==="%"?Et(d):K(d,l);return{avg:i===null?"--":p(i),high:p(r),low:p(a),spread:p(s)}}function en(t,e,o,n="power"){if(!t||t.length===0)return"";let i=Ta(t,o,e),r=i.includes(n)?n:"power",a=Aa[r];if(!a)return"";let s=[];for(let g of t){let v=tt(g,o,e),{entityId:w,zoneState:b}=v,y=ep(r,g,v,e);s.push({entityId:w,name:b.name,value:y,unit:b.unit||"\xB0C",rowClass:ft(b),isUnavailable:b.isUnavailable,hvacAction:b.hvacAction,hasPowerData:!!b.hasPowerData})}s.sort((g,v)=>g.value===null&&v.value===null?0:g.value===null?1:v.value===null?-1:v.value-g.value);let l=s.map(g=>g.value).filter(g=>g!==null),p=a.max;p===null&&(p=l.length>0?Math.max(...l,30):30);let d=a.unit!==null?a.unit:s[0]?.unit||"\xB0C",c=`<div class="pc-section pc-section-zone-ranking" data-metric="${f(r)}">`;c+='<div class="pc-ranking-header">',c+='<div class="pulse-section-label">Zone Ranking</div>',c+='<div class="pc-ranking-tabs" role="tablist">';for(let g of i){let v=Aa[g];if(!v)continue;c+=`<div class="pc-ranking-tab${g===r?" pc-active":""}" role="tab" tabindex="0" aria-selected="${g===r}" data-metric="${f(g)}">${f(v.label)}</div>`}c+="</div></div>",c+='<div class="pc-ranking-list">';for(let g=0;g<s.length;g++){let v=s[g],w=g+1,b=w===1&&v.value!==null?" pc-top":"",y=v.value!==null&&p>0?Math.round(v.value/p*100):0,_=v.value!==null?a.tierFn(v.value):null,S=v.value!==null?`${y}%`:"0%",$;v.value===null?$="--":r==="temp"?$=K(v.value,v.unit):d==="%"?$=Et(v.value):$=`${v.value}${d}`,c+=`<div class="pc-rank-row${v.rowClass}" role="button" tabindex="0" data-entity="${f(v.entityId)}">`,c+=`<div class="pc-rank-num${b}">${w}</div>`,c+=`<div class="pc-rank-name">${f(v.name)}</div>`,c+=`<div class="pc-rank-bar-track"><div class="pc-rank-bar-fill${_?` pc-status-${_}`:""}" style="width:${k(S)}"></div></div>`,c+=`<div class="pc-rank-value">${f($)}</div>`,c+="</div>"}c+="</div>";let m=s.map(g=>g.value),u=r==="power"?fe(s.map(g=>({...g,power:g.value??0}))):void 0,h=op(m,d,u);return c+='<div class="pc-ranking-summary">',c+=`<div class="pc-stat"><div class="pc-stat-value">${f(h.avg)}</div><div class="pc-stat-label">Average</div></div>`,c+=`<div class="pc-stat"><div class="pc-stat-value">${f(h.high)}</div><div class="pc-stat-label">Highest</div></div>`,c+=`<div class="pc-stat"><div class="pc-stat-value">${f(h.low)}</div><div class="pc-stat-label">Lowest</div></div>`,c+=`<div class="pc-stat"><div class="pc-stat-value">${f(h.spread)}</div><div class="pc-stat-label">Spread</div></div>`,c+="</div>",c+="</div>",c}var np=48,Ca=30,Ea=70;function Mi(t,e){let o=Date.now(),n=24*3600*1e3,i=n/e,r=o-n,a=Array.from({length:e},()=>({state:"idle",power:0}));if(!Array.isArray(t)||t.length===0)return a;for(let s=0;s<e;s++){let l=r+s*i,p=l+i,d=t.filter(v=>v&&v.t>=l&&v.t<p);if(d.length===0)continue;let c={heating:0,cooling:0,idle:0,off:0},m=0,u=0;for(let v of d)c[v.state]!==void 0&&(c[v.state]+=1),(v.state==="heating"||v.state==="cooling")&&Number.isFinite(v.power)&&(m+=v.power,u+=1);let h=["heating","cooling","idle","off"].reduce((v,w)=>c[w]>c[v]?w:v,"idle"),g=u>0?m/u:0;a[s]={state:h,power:g}}return a}function ip(t){let e="idle";return t.state==="heating"?t.power>=Ea?e="heat":t.power>=Ca?e="heat-mid":e="heat-low":t.state==="cooling"?t.power>=Ea?e="cool":t.power>=Ca?e="cool-mid":e="cool-low":t.state==="off"&&(e="off"),`pc-state-cell-${e}`}function rp(t){let e=0,o=0;for(let n of t)n.state==="heating"?e+=30:n.state==="cooling"&&(o+=30);return{heatMin:e,coolMin:o}}function Fa(t){let e=0,o=0,n=0,i=0,r=0,a=0;for(let l of t)l.state==="heating"||l.state==="cooling"?(i+=1,l.state==="heating"?r+=1:a+=1,i>e&&(e=i,o=r,n=a)):(i=0,r=0,a=0);if(e===0)return{minutes:0,mode:"none"};let s="mixed";return o>0&&n===0?s="heat":n>0&&o===0&&(s="cool"),{minutes:e*30,mode:s}}function Ia(t){if(t.length===0)return null;let e=t.length/24,o=Array.from({length:24},()=>0);for(let s=0;s<t.length;s++){let l=t[s];if(l.state==="heating"||l.state==="cooling"){let p=Math.floor(s/e);o[p]+=1}}let n=-1,i=0;for(let s=0;s<24;s++)o[s]>i&&(i=o[s],n=s);if(n<0)return null;let r=new Date(Date.now()-24*3600*1e3);return r.setMinutes(0,0,0),{ts:r.getTime()+n*3600*1e3,minutes:Math.round(i*30)}}function ap(t,e){if(t===0&&e===0)return"\u2014";let o=t+e,n=Math.floor(o/60),i=o%60;return i===0?`${n}h`:`${n}h ${i}m`}function sp(t,e){return t>e&&t>0?"pc-state-active-heat":e>0?"pc-state-active-cool":""}function lp(t,e){let n=Date.now()-864e5;return G(new Date(n+t*18e5),e)}function cp(t){if(t.state==="heating"||t.state==="cooling"){let e=t.state==="heating"?"heat":"cool";return t.power>0?`${e} ${Math.round(t.power)}%`:e}return t.state==="off"?"off":"idle"}function La(t,e,o,n,i){let r='<div class="pc-strip-rows">';r+='<div class="pc-strip-crosshair"></div>';let a=0,s=0;for(let l of t){let{entityId:p,zoneName:d,zoneState:c}=tt(l,o,e),m=n?.stateData?.[p]||[],u=Mi(m,np),{heatMin:h,coolMin:g}=rp(u);a+=h,s+=g;let v=ap(h,g),w=sp(h,g),b=ft(c);r+=`<div class="pc-timeline-group-row pc-state-row${b}" data-entity="${f(p)}" data-zone="${f(d)}">`,r+=`<span class="pc-timeline-group-name">${f(c.name)}</span>`,r+='<div class="pc-state-timeline-cells pc-cells">';for(let y=0;y<u.length;y++){let _=u[y],S=lp(y,i),$=cp(_);r+=`<span class="pc-state-cell pc-cell ${ip(_)}" data-hour="${f(S)}" data-score="${f($)}"></span>`}r+="</div>",r+=`<span class="pc-timeline-group-stat ${w}">${f(v)}</span>`,r+="</div>"}return r+="</div>",r+=pp(),r+=dp(a,s,t.length),r}function pp(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span></span></div>'}function Ma(t){let e=Math.floor(t/60),o=t%60;return o===0?`${e}h`:`${e}h ${o}m`}function dp(t,e,o){let n=t>0?`${Ma(t)} heat`:"",i=e>0?`${Ma(e)} cool`:"",a=[n,i].filter(Boolean).join(" \xB7 ")||"\u2014";return'<div class="pc-timeline-group-footer">'+up()+`<span><strong>${f(a)}</strong> \xB7 ${o} zones</span></div>`}function up(){return'<span class="pc-state-legend"><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-heat"></span>Heat</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-cool"></span>Cool</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-idle"></span>Idle</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-off"></span>Off</span></span>'}var mp=new Set(["thermal","state"]),Na={thermal:{label:"Thermal",subtitle:"Tap a zone for details"},state:{label:"State",subtitle:"Heat / cool demand by zone"}};function Fi(t,e,o,n,i,r){if(!e||e.length===0)return"";let a=t?.active_tab,s=typeof a=="string"&&mp.has(a)?a:"thermal",l=`<div class="pc-section pc-section-timeline-group" data-active-tab="${f(s)}">`;l+='<div class="pc-section-header">',l+='<div class="pulse-section-label">24h Timeline</div>';let p=f(Na[s].subtitle);l+=`<span class="pc-section-subtitle">${p}</span>`,l+="</div>",l+='<div class="pc-timeline-group-tabs" role="tablist">';for(let d of["thermal","state"])l+=`<div class="pc-timeline-group-tab${d===s?" pc-active":""}" role="tab" tabindex="0" aria-selected="${d===s}" data-tab="${f(d)}">${f(Na[d].label)}</div>`;return l+="</div>",l+='<div class="pc-zone-detail" id="timeline-detail"></div>',l+='<div class="pc-timeline-group-body">',l+=s==="thermal"?qo(e,o,n,i,r):La(e,o,n,i,r),l+="</div>",l+="</div>",l}var hp=[{key:"bridge",label:"Bridge",soloHeader:(t,e)=>"Bridge",predicate:oo,render:(t,e,o,n)=>zo(t,e,n)},{key:"homekit",label:"HomeKit",soloHeader:(t,e)=>`HomeKit${Ro(t,e)}`,predicate:ze,render:(t,e,o,n)=>Ho(t,e,n)},{key:"api",label:"API",soloHeader:(t,e)=>"API Usage",predicate:eo,render:(t,e,o,n,i)=>No(t,e,o,n,i)}];function Ii(t,e,o,n,i){let r=hp.filter(c=>c.predicate(e));if(r.length===0)return"";if(r.length===1){let c=r[0],m='<div class="pc-section pc-section-system-health-group">';return m+=`<div class="pulse-section-label">${f(c.soloHeader(e,o))}</div>`,m+='<div class="pc-system-health-group-body">',m+=c.render(e,o,t,n,i),m+="</div>",m+="</div>",m}let a=t?.active_tab,l=r.some(c=>c.key===a)?a:r[0].key,p=r.find(c=>c.key===l)||r[0],d=`<div class="pc-section pc-section-system-health-group" data-active-tab="${f(l)}">`;d+='<div class="pc-section-header">',d+='<div class="pulse-section-label">System Health</div>',d+="</div>",d+='<div class="pc-system-health-group-tabs" role="tablist">';for(let c of r){let m=c.key===l?" pc-active":"";d+=`<div class="pc-system-health-group-tab${m}" role="tab" tabindex="0" aria-selected="${c.key===l}" data-tab="${f(c.key)}">${f(c.label)}</div>`}return d+="</div>",d+='<div class="pc-system-health-group-body">',d+=p.render(e,o,t,n,i),d+="</div>",d+="</div>",d}var fp=new Set(["heating","cooling","mixed"]),gp=new Set(["subtle","medium","bold"]);function Li(t,e){if(!t||!fp.has(t))return"";let o=e&&gp.has(e)?e:"medium";return`<div class="pc-atmosphere-wash pc-state-${t} pc-intensity-${o}" aria-hidden="true"></div>`}var vp={heating:"Heating",cooling:"Cooling",mixed:"Mixed",idle:"Idle",off:"Off"},bp=6;function wp(t){let e=Me({...t,hvacMode:void 0});return`pc-hero-dot-${e==="unavail"?"unavail":e==="heat"?"heating":e==="cool"?"cooling":e==="off"?"off":"idle"}`}function yp(t){let e=Me({...t,hvacMode:void 0});return`pc-row-${["unavail","heat","cool","off"].includes(e)?e:"idle"}`}function Ni(t,e,o,n){if(!Array.isArray(t)||t.length===0)return"";let i=t.filter(b=>!b.isUnavailable),r=Je(t),a=t.filter(b=>!b.isUnavailable&&typeof b.currentTemp=="number"&&Number.isFinite(b.currentTemp)),s=a.length>0?a.reduce((b,y)=>b+y.currentTemp,0)/a.length:null,l=t[0]&&t[0].unit||"\xB0C",p=i.filter(b=>b.hvacAction==="heating").length,d=i.filter(b=>b.hvacAction==="cooling").length,c=vp[r]||"Idle",m=s===null?"\u2014":f(K(s,l)),u=`<div class="pc-hero pc-state-${r}">`;u+='<div class="pc-hero-top-row">',u+='<div class="pc-hero-temp-block">',u+='<div class="pc-hero-label">Home avg</div>',u+=`<div class="pc-hero-temp">${m}</div>`,u+="</div>",u+='<div class="pc-hero-dots">';for(let b of t){let y=wp(b),_=[f(b.name),f(Ot(b))];u+=`<span class="pc-hero-zone-dot ${y}" data-entity="${f(b.entityId)}" title="${_.join(", ")}"></span>`}u+="</div>",u+='<div class="pc-hero-right">';let h=p+d,g=h>0?`${f(c)} \xB7 ${h} active`:`${f(c)} \xB7 ${i.length} ${i.length===1?"zone":"zones"}`;if(u+=`<div class="pc-hero-status">${g}</div>`,e?.hero_show_outside!==!1&&n&&typeof n.value=="number"&&Number.isFinite(n.value)){let b=n;u+='<div class="pc-hero-outside">',u+=`Outside ${ht(b.value)}${f(b.unit)}`,u+="</div>"}if(u+="</div>",u+="</div>",e?.hero_show_thermal_strip!==!1){let b=_p(t,o);b&&(u+=b)}return u+="</div>",u}function _p(t,e){let n=t.slice(0,bp),i=t.length-n.length,r=!1;for(let s of n){let l=e?.get?.(s.entityId);if(Array.isArray(l)&&l.length>=2){r=!0;break}}if(!r)return"";let a='<div class="pc-hero-strips">';for(let s of n)a+=xp(s,e?.get?.(s.entityId)||[],24);return i>0&&(a+='<div class="pc-hero-zone-strip pc-hero-zone-strip-overflow">',a+=`<div class="pc-hero-zone-strip-label">+${i} more</div>`,a+="</div>"),a+="</div>",a}function xp(t,e,o){let n=yp(t),i="";if(Array.isArray(e)&&e.length>=2){let r={minTemp:t.minTemp??ee(18),maxTemp:t.maxTemp??ee(26)},a=t.isUnavailable?"off":t.hvacAction,s=Math.max(1,Math.floor(e.length/o));for(let l=0;l<o;l++){let p=e[Math.min(e.length-1,l*s)],d=Zr(p.v,r,a);i+=`<span style="background:${k(d)}"></span>`}}else for(let r=0;r<o;r++)i+='<span class="pc-hero-zone-strip-cell-ghost"></span>';return`<div class="pc-hero-zone-strip ${n}" data-entity="${f(t.entityId)}"><div class="pc-hero-zone-strip-label">${f(t.name)}</div><div class="pc-hero-zone-strip-cells">${i}</div></div>`}var za=!1,Sp=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),Ra=Sp?(()=>{let t=new CSSStyleSheet;return t.replaceSync(Vn),t})():null;function be(t,e,o){let n=e?.zoneEntities?.[X(t.entity)]||{};return[...new Set([t.entity,t.heating_power_entity,...o.map(i=>n[i])].filter(Boolean))]}function zi(t,e,o){let n=e?.zoneEntities?.[X(t.entity)]||{},i=ct(t.entity,o,n,t).entityId,r=Wt(t.entity,o,n,t)?.entityId;return[i,r].filter(Boolean)}function on(t,e){return!t&&!e?!1:!t||t.state!==e?.state||t.last_updated!==e?.last_updated}function Ri(t,e,o){return(t._zones||[]).map(n=>{let i=e.zoneEntities?.[X(n.entity)]||{};return ie(n.entity,i,o,n,t)})}var kp=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut","timeline_group","system_health_group"]),Tp=6e4,Ap=".pc-timeline-row, .pc-state-row",Cp=[".pc-section-comfort-strip",".pc-section-thermal-strip",".pc-section-timeline-group",".pc-section-zone-ranking",".pc-section-energy-flow"],Ha=".pc-heatmap-row, .pc-timeline-row, .pc-state-row",nn={zones:".pc-section-zones",api:".pc-section-api",graph:".pc-section-graph",bridge:".pc-section-bridge",thermal_strip:".pc-section-thermal-strip",comfort_strip:".pc-section-comfort-strip",homekit:".pc-section-homekit",weather:".pc-section-weather",radial:".pc-section-radial",donut:".pc-section-donut",environment:".pc-section-environment",thermal:".pc-section-thermal",schedule:".pc-section-schedule",energy_flow:".pc-section-energy-flow",energy_flow_ac:'.pc-section-energy-flow[data-variant="ac"]',home_status:".pc-section-home-status",zone_ranking:".pc-section-zone-ranking",timeline_group:".pc-section-timeline-group",system_health_group:".pc-section-system-health-group"},Hi=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_trailTimer=null;_lastUpdateTime=0;_lastDiscoveryAt=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_stateTimelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_zoneRankingTabsAbort=null;_timelineGroupTabsAbort=null;_timelineGroupCellTooltipAbort=null;_systemHealthGroupTabsAbort=null;_sparklinePathCache=new Map;_radialAnimState={shimmer:!1,sheen:!1};_radialSelectedIdx=null;_historyGen=0;_historyLastAttempt=0;_lastHeroOutdoorId=void 0;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=Vr()}setConfig(e){this._stopRadialAnimations(),this._radialSelectedIdx=null,this._historyGen++,this._historyLastAttempt=0,this._lastHeroOutdoorId=void 0,this._config=qr(e),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(e){if(this._hass=e,wo(e),!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||this._trailTimer||(this._rafId=requestAnimationFrame(()=>{this._rafId=null,this._runUpdate()}))}}_runUpdate(){if(!this.isConnected||!this._hass||!this._config||!this._discovery)return;let e=Date.now()-this._lastUpdateTime,o=e<0?0:200-e;if(o>0){this._trailTimer=setTimeout(()=>{this._trailTimer=null,this._runUpdate()},o);return}if(this._lastUpdateTime=Date.now(),this._lastUpdateTime-this._lastDiscoveryAt>=Tp){this._lastDiscoveryAt=this._lastUpdateTime;let c=this._computeDiscovery(),m=u=>JSON.stringify([u.isTadoCE,Object.entries(u.hubEntities).sort(),Object.entries(u.zoneEntities).map(([h,g])=>[h,Object.entries(g).sort()]).sort()]);if(m(c)!==m(this._discovery)){let u=this._captureUiState();this._runDiscovery(c),this._fullRender(),this._refreshHistoryIfNeeded(),this._restoreUiState(u);return}}let n=this._hass.states,i=this._discovery,r=this._config._zones||[],s=r.some(c=>n[c.entity]!==this._prevStates[c.entity])||r.some(c=>Ke(c,i).some(m=>n[m]!==this._prevStates[m]));s&&this._updateZones(),this._updateSections();let[l]=ro(this._config,null,i,n),d=this._lastHeroOutdoorId!==void 0&&this._lastHeroOutdoorId!==l||!!l&&on(this._prevStates[l],n[l]);(s||d)&&this._updateHero(),s&&this._updateAtmosphere(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates(),this._lastHeroOutdoorId=l??null}_updateAtmosphere(){if(!this._config||!this._hass||!this._discovery||this._config.show_atmosphere===!1)return;let e=this._config,o=Je(Ri(e,this._discovery,this._hass.states)),n=Li(o,e.atmosphere_intensity),i=this._shadow.querySelector(".pc-atmosphere-wash");if(!n){i?.remove();return}let r=document.createElement("template");r.innerHTML=n;let a=r.content.firstElementChild;if(a)if(i)i.className!==a.className&&i.replaceWith(a);else{let s=this._shadow.querySelector(".pc-card-content");s&&s.parentNode?.insertBefore(a,s)}}_computeDiscovery(){let o=(this._config?._zones||[]).map(n=>X(n.entity));return zr(this._hass?.states||{},o,this._hass?.entities)}_runDiscovery(e){if(!(!this._hass||!this._config)){if(this._lastDiscoveryAt=Date.now(),this._historyGen++,this._historyFetchInProgress=!1,this._historyLastAttempt=0,this._discovery=e||this._computeDiscovery(),!za&&this._discovery.isTadoCE){za=!0;let o=Object.entries(this._discovery.hubEntities).map(([n,i])=>`${n}=${i}`);console.info(`${me} Tado CE hub discovery, found: ${o.join(", ")}`),this._discovery.missingHubKeys.length>0&&console.warn(`${me} Tado CE hub discovery, missing: ${this._discovery.missingHubKeys.join(", ")}. Affected sections may render with degraded data.`)}this._buildRerenderTargets()}}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let e=this._historyCache?.data;if(e)for(let[o,n]of Object.entries(e)){if(!n||n.length<2)continue;let i=Pt(n,340,36,48);i&&this._sparklinePathCache.set(o,i)}}_withCardOutdoor(e){let o=this._config?.outdoor_temp_entity;return{...e,outdoor_temp_entity:e?.outdoor_temp_entity||o}}_radialOutdoorIds(){let o=(this._config?.sections||[]).filter(n=>(typeof n=="string"?n:n.type)==="radial");return[...new Set((o.length?o:[null]).flatMap(n=>ro(this._config,typeof n=="object"?n:null,this._discovery,this._hass?.states||{})))]}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let e=this._discovery,o=e.hubEntities,n=this._config._zones||[],i=[o.api_usage,o.api_limit,o.api_status,o.next_sync,o.token_status].filter(Boolean),r=[o.homekit_connected,o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean),a=[o.bridge_connected,o.boiler_flow_temp,o.wc_status,o.wc_target_flow].filter(Boolean),s=n.flatMap(c=>be(c,e,["heating_power","ac_power"])),l=()=>[...new Set(n.flatMap(c=>[...be(c,e,["heating_power","ac_power","comfort_level"]),...zi(c,e,this._hass?.states||{})]))],p=(c,m)=>{let u=(this._config?.sections||[])[m];return u&&(typeof u=="string"?u:u.type)===c?u:void 0},d=(c,m)=>({selector:nn[c],watchIds:m,render:u=>{let h=p(c,u);return h?this._renderSection(h,n,this._hass?.states||{},e):""}});this._rerenderTargets=[{selector:".pc-section-zones",watchIds:[o.home_state].filter(Boolean),render:()=>{let c=this._config,m=this._hass?.states||{};return ti(n,c,m,e,this._historyCache,it(this._hass))}},{selector:".pc-section-api",watchIds:i,render:c=>{let m=this._hass?.states||{},u=p("api",c);return u?ei(o,m,u,this._historyCache,it(this._hass)):""}},{selector:".pc-section-homekit",watchIds:r,render:()=>{let c=this._hass?.states||{};return ni(o,c,this._historyCache)}},{selector:".pc-section-bridge",watchIds:a,render:()=>{let c=this._hass?.states||{};return oi(o,c,this._historyCache)}},{selector:".pc-section-weather",watchIds:[o.outside_temp,o.weather,o.solar_intensity].filter(Boolean),render:()=>{let c=this._hass?.states||{};return ii(o,c,this._historyCache)}},{selector:".pc-section-environment",watchIds:n.flatMap(c=>{let m=X(c.entity),u=e.zoneEntities?.[m]||{};return[u.mold_risk,u.condensation,u.comfort_level,u.surface_temp,u.dew_point].filter(Boolean)}),render:()=>{let c=this._hass?.states||{};return ri(n,c,e)}},{selector:".pc-section-thermal",watchIds:n.flatMap(c=>{let m=X(c.entity),u=e.zoneEntities?.[m]||{};return[u.heating_rate,u.thermal_inertia,u.preheat_time,u.confidence].filter(Boolean)}),render:()=>{let c=this._hass?.states||{};return ai(n,c,e)}},{selector:".pc-section-schedule",watchIds:n.flatMap(c=>{let m=X(c.entity),u=e.zoneEntities?.[m]||{};return[u.next_schedule,u.next_sched_temp,u.schedule_deviation,u.preheat_advisor,u.comfort_target].filter(Boolean)}),render:()=>{let c=this._hass?.states||{};return si(n,c,e)}},{selector:".pc-section-radial",watchIds:()=>[...n.flatMap(c=>be(c,e,["heating_power","ac_power"])),...this._radialOutdoorIds()],render:c=>{let m=this._hass?.states||{},u=p("radial",c);return u?Ti(n,this._withCardOutdoor(u),m,e,this._historyCache):""}},{selector:".pc-section-donut",watchIds:(()=>{let m=(this._config?.sections||[]).filter(u=>(typeof u=="string"?u:u.type)==="donut");return[...new Set(m.flatMap(u=>{let h=u?.source;return h==="api_breakdown"&&o.api_breakdown?[o.api_breakdown]:h==="homekit_saved"?[o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean):[]}))]})(),render:c=>{let m=this._hass?.states||{},u=p("donut",c);return u?di(u,o,m):""}},{selector:".pc-section-graph",watchIds:()=>[...new Set(n.flatMap(c=>[...be(c,e,[]),...zi(c,e,this._hass?.states||{})]))],render:c=>{let m=this._hass?.states||{},u=p("graph",c);return u?ci(u,n,this._historyCache,m,e):""}},{selector:".pc-section-home-status",watchIds:s,render:()=>{let c=this._hass?.states||{};return Ei(n,c,e,this._config||{})}},{selector:".pc-section-zone-ranking",watchIds:l,render:(c,m)=>{let u=this._hass?.states||{},h=m?.getAttribute("data-metric")||"power";return en(n,u,e,h)}},d("system_health_group",[...new Set([...i,...r,...a])]),d("comfort_strip",n.flatMap(c=>be(c,e,["heating_power","ac_power","comfort_level"])))]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,o=this._hass.states,n=this._discovery,i=e._zones||[],r=e.layout==="compact",a=e.entity_row===!0,s="";Ra?this._shadow.adoptedStyleSheets=[Ra]:s+=`<style>${Vn}</style>`;let l=Ri(e,n,o),p=Je(l);if(this._lastHeroOutdoorId=ro(e,null,n,o)[0]??null,a||(s+=`<ha-card${r?' class="pc-compact"':""}>`),e.show_atmosphere!==!1&&(s+=Li(p,e.atmosphere_intensity)),s+='<div class="pc-card-content">',e.title&&(s+=`<div class="pulse-title">${f(e.title)}</div>`),e.show_hero!==!1){let c=tn(e,n,o),m=h=>{let g=i.findIndex(_=>_.entity===h);if(g<0)return h;let v=i[g],w=X(h),b=n?.zoneEntities?.[w]||{};return ct(h,o,b,v)?.entityId||h},u=Zn(i,this._historyCache,m);s+=Ni(l,e,u,c)}let d=e.sections||[{type:"zones"}];for(let c=0;c<d.length;c++){let m=d[c],u=this._renderSection(m,i,o,n);s+=u.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${c}"`)}s+="</div>",a||(s+="</ha-card>"),this._shadow.innerHTML=s,this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let e=this._shadow.querySelectorAll(".pc-zone-row"),o=this._config._zones||[];for(let n=0;n<e.length&&n<o.length;n++){let i=e[n],r=o[n],a=r.entity,s=i.__pulseCleanup;typeof s=="function"&&s();let l=new AbortController,{signal:p}=l,d=0,c=null,m=null,u=!1;i.__pulseCleanup=()=>{l.abort(),c&&clearTimeout(c),m&&clearTimeout(m),delete i.__pulseCleanup},At(i,()=>{this._fireAction(a,r,"tap_action")},{signal:p}),i.addEventListener("click",g=>{if(g.preventDefault(),u){u=!1;return}d++,d===1?c=setTimeout(()=>{d=0,this._fireAction(a,r,"tap_action")},250):d===2&&(c&&clearTimeout(c),d=0,this._fireAction(a,r,"double_tap_action"))},{signal:p}),i.addEventListener("pointerdown",()=>{u=!1,m=setTimeout(()=>{u=!0,this._fireAction(a,r,"hold_action")},500)},{signal:p});let h=()=>{m&&clearTimeout(m)};i.addEventListener("pointerup",h,{signal:p}),i.addEventListener("pointercancel",h,{signal:p}),i.addEventListener("contextmenu",g=>g.preventDefault(),{signal:p}),Dt(i)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs(),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindStateTimelineInteractions(),this._bindSystemHealthGroupTabs()}_bindChipActions(){if(!this._config||!this._hass)return;let e=this._resetAbort("_chipAbort"),o=this._config._zones||[],n=this._shadow.querySelectorAll(".pc-zone-row");for(let i=0;i<n.length&&i<o.length;i++){let r=o[i],a=r.entity,s=n[i].querySelectorAll(".pc-chip");for(let l of s){let p=l,d=p.dataset.chipType||"",c=p.dataset.entity||a,m=r.chip_actions,u=this._config.chip_actions,h=m?.[d]||u?.[d]||{},g=h.tap_action||{action:"more-info",entity:c},v=h.hold_action||{action:"none"};p.style.cursor="pointer",Dt(p),At(p,b=>{b.stopPropagation(),this._hass&&ue(this,this._hass,g,c,Ct)},{signal:e}),p.addEventListener("click",b=>{b.stopPropagation(),this._hass&&ue(this,this._hass,g,c,Ct)},{signal:e});let w=null;e.addEventListener("abort",()=>{w&&clearTimeout(w)},{once:!0}),p.addEventListener("pointerdown",b=>{b.stopPropagation(),w=setTimeout(()=>{!this._hass||v.action==="none"||ue(this,this._hass,v,c,Ct)},500)},{signal:e}),p.addEventListener("pointerup",b=>{b.stopPropagation(),w&&clearTimeout(w)},{signal:e}),p.addEventListener("pointercancel",()=>{w&&clearTimeout(w)},{signal:e}),p.addEventListener("contextmenu",b=>b.preventDefault(),{signal:e})}}}_bindSectionChipActions(){let e=this._resetAbort("_sectionChipAbort"),o=this._shadow.querySelectorAll(".pc-section [data-entity]");for(let n of o){let i=n;if(i.closest(".pc-zone-row")&&i.classList.contains("pc-chip")||i.classList.contains("pc-zone-row")||i.matches(Ap))continue;i.style.cursor="pointer",Dt(i);let r=()=>{let a=i.dataset.entity;a&&So(this,"hass-more-info",{entityId:a})};At(i,a=>{a.stopPropagation(),r()},{signal:e}),i.addEventListener("click",a=>{a.stopPropagation(),r()},{signal:e})}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let e=this._shadow.querySelector(".chip-next-sync");if(!e)return;let o=Number(e.getAttribute("data-target"));if(!o||!isFinite(o))return;let n=()=>{let i=o-Date.now();if(i<=0){e.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let r=Math.floor(i/6e4),a=Math.floor(i%6e4/1e3);e.textContent=r>0?`Next: ${r}m ${a}s`:`Next: ${a}s`};n(),this._countdownTimer=setInterval(n,1e3)}_bindRadialInteractions(){let e=this._resetAbort("_radialAbort"),o=this._shadow.querySelectorAll(".pc-arc-group"),n=this._shadow.querySelectorAll(".pc-radial-legend .pc-legend-item"),i=this._shadow.querySelector("#radial-center"),r=this._shadow.querySelector("#radial-detail"),a=this._shadow.querySelector(".pc-section-radial svg");if(o.length===0||!i)return;let l=(a&&Number(a.getAttribute("width"))||280)/2,p=this._config?._zones||[],d=null,c=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-temp-entity"),m=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-attribute")||"temperature",u=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-humidity-entity"),h=()=>{let b=this._hass?.states||{},y=this._discovery,_=null;if(u&&b[u]){let $=b[u];Q($)||(_=String($.attributes?.humidity!==void 0?$.attributes.humidity:$.state))}let S=Qo({outdoor_temp_entity:c||void 0},y,b);return ki({attribute:m,outdoorTempText:S,outdoorHumidityText:_})},g=b=>{let y=this._hass?.states||{},_=this._discovery;if(d===b){v();return}d=b,this._radialSelectedIdx=b;let S=p[b];if(!S)return;let $=S.entity,A=X($),M=_?.zoneEntities?.[A]||{},I=Qe($,y,S,M),{name:L,temp:T,target:C,humidity:x}=I,E=ie($,M,y,S,{}),F=E.heatingPower||E.coolingPower||0,N=Jt(E,F),z=i.querySelector(".pc-center-value"),R=i.querySelector(".pc-center-label"),O=i.querySelector(".pc-center-sub");z&&(z.textContent=T!==void 0?K(T,I.unit):"--"),R&&(R.textContent=L);let V=x!==void 0?` \xB7 ${Et(x)}`:"";O&&(O.textContent=`${N}${V}`),o.forEach((q,D)=>{q.classList.toggle("pc-dimmed",D!==b),q.classList.toggle("pc-selected",D===b),D===b?q.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):q.removeAttribute("transform")}),n.forEach((q,D)=>{q.classList.toggle("pc-selected",D===b)}),r&&(r.innerHTML=`<div class="pc-detail-stats">
          <div class="pc-stat"><div class="pc-stat-value">${f(K(C,I.unit))}</div><div class="pc-stat-label">Target</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${f(Et(x))}</div><div class="pc-stat-label">Humidity</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${f(Ot(E))}</div><div class="pc-stat-label">Action</div></div>
        </div>`,r.classList.add("pc-active"))},v=()=>{d=null,this._radialSelectedIdx=null;let{center:b,centerSub:y}=h(),_=i.querySelector(".pc-center-value"),S=i.querySelector(".pc-center-label"),$=i.querySelector(".pc-center-sub");_&&(_.textContent=b),S&&(S.textContent="Outdoor"),$&&($.textContent=y),o.forEach(A=>{A.classList.remove("pc-dimmed","pc-selected"),A.removeAttribute("transform")}),n.forEach(A=>{A.classList.remove("pc-selected")}),r&&(r.classList.remove("pc-active"),r.innerHTML="")};o.forEach((b,y)=>{b.addEventListener("click",()=>g(y),{signal:e})}),n.forEach((b,y)=>{Dt(b),b.addEventListener("click",()=>g(y),{signal:e})});let w=this._radialSelectedIdx;if(this._radialSelectedIdx=null,w!==null&&w<p.length&&o[w]){let b=p[w],y=this._discovery?.zoneEntities?.[X(b.entity)]||{};ie(b.entity,y,this._hass?.states||{},b,{}).isUnavailable||g(w)}if(o.length>1&&!mt()){this._radialAnimState.shimmer=!0;let b=0,y=1,_=()=>{if(e.aborted||!this._radialAnimState.shimmer)return;if(d!==null){setTimeout(_,500);return}let S=o[b];if(!S){setTimeout(_,300);return}if(S.style.filter="brightness(1.8)",S.style.transition="filter 0.3s ease-in",setTimeout(()=>{S.style.filter="",S.style.transition="filter 0.5s ease-out"},250),b+=y,b>=o.length||b<0){b=y>0?0:o.length-1;let $=1e3+Math.random()*2e3;Math.random()<.4&&(y*=-1),setTimeout(_,$)}else{let $=80+Math.random()*170;setTimeout(_,$)}};setTimeout(_,1500)}if(!mt()){let b=this._shadow.querySelector("#radial-sheen");if(b){let _=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(_?(.299*Number(_[1])+.587*Number(_[2])+.114*Number(_[3]))/255>=.5:!1)?b.classList.add("light-theme"):b.classList.remove("light-theme"),this._radialAnimState.sheen=!0;let $=()=>{if(e.aborted||!this._radialAnimState.sheen)return;let A=Math.random()>.5,M=A?"-100% 50%":"200% 50%",I=A?"200% 50%":"-100% 50%",L=1.2+Math.random()*1.5;b.style.transition="none",b.style.backgroundPosition=M,b.offsetWidth,b.style.transition=`background-position ${L}s ease-in-out`,b.style.backgroundPosition=I,setTimeout(()=>{let T=4e3+Math.random()*6e3;setTimeout($,T)},L*1e3)};setTimeout($,2e3+Math.random()*3e3)}}}_stopRadialAnimations(){this._radialAnimState.shimmer=!1,this._radialAnimState.sheen=!1,this._radialAbort?.abort()}_resetAbort(e){let o=this[e];o&&o.abort();let n=new AbortController;return this[e]=n,n.signal}_bindTimelineInteractions(){let e=this._resetAbort("_timelineAbort"),o=this._shadow.querySelectorAll(".pc-section-thermal-strip, .pc-section-timeline-group");if(o.length===0)return;let n=this._config?._zones||[],i=pt(this._hass?.states?.[n[0]?.entity]?.attributes);for(let r of o){let a=r.querySelectorAll(".pc-timeline-row");if(a.length===0)continue;let s=r.querySelector(".pc-section-subtitle"),l="Tap a zone for details",p=[...a].findIndex(u=>u.classList.contains("pc-selected")),d=p>=0?p:null,c=null,m=u=>{c=null;let h=u.querySelector(".pc-comparison-path");h&&h.remove();let g=u.querySelector(".pc-comparison-legend");g&&g.remove()};a.forEach((u,h)=>{Dt(u),u.addEventListener("click",()=>{let g=this._hass?.states||{},v=this._discovery,w=this._historyCache;if(r.querySelectorAll(".pc-strip-drag-highlight").forEach(D=>{D.style.display="none"}),d!==null&&d!==h){let D=r.querySelector(".pc-zone-detail"),W=D?.querySelector(".pc-detail-sparkline svg");if(D&&W){if(c===h){m(D);return}m(D),c=h;let P=n[h];if(!P)return;let H=P.entity,U=X(H),Y=v?.zoneEntities?.[U]||{},j=ct(H,g,Y,P).entityId,et=w?.data?.[j]||[];if(et.length>=2){let jt=this._sparklinePathCache.get(j)||Pt(et,340,36,48);if(jt){let _t=document.createElementNS("http://www.w3.org/2000/svg","path");_t.setAttribute("d",jt.linePath),_t.setAttribute("fill","none"),_t.setAttribute("stroke","var(--pulse-info-color)"),_t.setAttribute("stroke-width","1.5"),_t.setAttribute("opacity","0.5"),_t.classList.add("pc-comparison-path"),W.appendChild(_t)}}let rt=n[d],lt=Qe(rt?.entity||"",g,rt).name,kt=Qe(H,g,P).name,Rt=document.createElement("div");Rt.className="pc-comparison-legend",Rt.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:currentColor;margin-right:4px"></span>${f(lt)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:var(--pulse-info-color);margin-right:4px"></span>${f(kt)}</span>`,D.appendChild(Rt);return}}if(d===h){d=null,c=null,a.forEach(W=>W.classList.remove("pc-selected"));let D=r.querySelector(".pc-zone-detail");D&&D.classList.remove("pc-active"),s&&(s.textContent=l);return}d=h,a.forEach((D,W)=>D.classList.toggle("pc-selected",W===h));let b=n[h];if(!b)return;let y=b.entity,_=Qe(y,g,b,this._discovery?.zoneEntities?.[X(y)]),{name:S,temp:$,target:A,humidity:M}=_;s&&(s.textContent=S);let I=X(y),L=v?.zoneEntities?.[I]||{},T=ct(y,g,L,b).entityId,C=w?.data?.[T]||[],x="";if(C.length>=2){let D=C[C.length-1],W=C[C.length-2],P=D.v-W.v,H=(D.t-W.t)/36e5;if(H>0&&isFinite(P)&&isFinite(H)){let U=P/H;x=`${U>=0?"+":""}${U.toFixed(1)}${_.unit}/hr`}}let E=ie(y,L,g,b,{}),F=E.hvacAction,N=E.heatingPower||E.coolingPower||0,z=Jt(E,N),R="";if(C.length>=2){let D=1/0,W=-1/0;for(let P of C)isFinite(P.v)&&(P.v<D&&(D=P.v),P.v>W&&(W=P.v));isFinite(D)&&isFinite(W)&&(R=`${K(D,_.unit)} \u2013 ${K(W,_.unit)} today`)}let O="";if(C.length>=2){let D=F==="heating"?"var(--pulse-tier-strong)":$!==void 0&&isFinite(Number($))?dt(Number($)):"var(--pulse-text-primary)",W=k(D),P=this._sparklinePathCache.get(T)||Pt(C,340,36,48);if(P){let H=`tl-detail-grad-${h}`;O=`<div class="pc-detail-sparkline pc-sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${f(H)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${W}" stop-opacity="0.3"/><stop offset="100%" stop-color="${W}" stop-opacity="0"/></linearGradient></defs><path d="${P.areaPath}" fill="url(#${f(H)})" /><path d="${P.linePath}" fill="none" stroke="${W}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let V=r.querySelector(".pc-zone-detail");if(!V)return;V.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${f(S)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${f(K($,_.unit))}</div><div class="pc-stat-label">Current</div>${x?`<div class="pc-stat-sub">${f(x)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${f(K(A,_.unit))}</div><div class="pc-stat-label">Target</div>${z?`<div class="pc-stat-sub">${f(z)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${f(Et(M))}</div><div class="pc-stat-label">Humidity</div>${R?`<div class="pc-stat-sub">${f(R)}</div>`:""}</div>
          </div>${O}`,V.classList.add("pc-active");let q=V.querySelector(".pc-detail-close");q&&q.addEventListener("click",D=>{D.stopPropagation(),d=null,c=null,a.forEach(W=>W.classList.remove("pc-selected")),V.classList.remove("pc-active"),s&&(s.textContent=l)},{signal:e})},{signal:e})}),r.classList.contains("pc-section-thermal-strip")&&this._bindThermalStripHandlers(r,e,i)}}_bindThermalStripHandlers(e,o,n){let i=Po();i.element.dataset.owner="strip";let r=e.querySelector(".pc-strip-rows");r&&(r.style.position="relative",r.querySelectorAll(':scope > .pc-strip-tooltip[data-owner="strip"]').forEach(p=>p.remove()),r.appendChild(i.element),o.addEventListener("abort",()=>i.element.remove(),{once:!0})),e.querySelectorAll(".pc-strip-container").forEach(p=>{let d=p.getAttribute("data-slots"),c=null;try{d&&(c=JSON.parse(d))}catch{}p.addEventListener("pointermove",m=>{if(m.pointerType==="touch"||!c)return;let u=p.getBoundingClientRect(),h=ae(m.clientX,u,c.length),g=c[h];if(g){let v=g.v!==null?`${g.l}: ${g.v}${n}`:`${g.l}: --`;i.show(u,m.clientX-u.left,v)}},{signal:o}),p.addEventListener("pointerleave",()=>i.hide(),{signal:o}),p.addEventListener("pointerdown",m=>{if(m.pointerType!=="touch"||!c)return;let u=p.getBoundingClientRect(),h=ae(m.clientX,u,c.length),g=c[h];if(g){let v=g.v!==null?`${g.l}: ${g.v}${n}`:`${g.l}: --`;i.show(u,m.clientX-u.left,v),setTimeout(()=>i.hide(),2e3)}},{signal:o})});let s=r?.querySelectorAll(".pc-strip-container");if(r&&s&&s.length>0){let p=r.querySelector(".pc-strip-crosshair"),d=s[0];if(p&&d){let c=d.getBoundingClientRect().left-r.getBoundingClientRect().left;ui(r,p,d,c,o)}}e.querySelectorAll(".pc-strip-container, .pc-cells").forEach(p=>{let d=p.getAttribute("data-slots"),c=null;try{d&&(c=JSON.parse(d))}catch{}mi(p,c,i,n,o)})}_bindStateTimelineInteractions(){let e=this._resetAbort("_stateTimelineAbort"),o=this._shadow.querySelectorAll(".pc-section-timeline-group");if(o.length!==0)for(let n of o){let i=n.querySelectorAll(".pc-state-row");if(i.length===0)continue;let r=n.querySelector(".pc-zone-detail");if(!r)continue;let a=n.querySelector(".pc-section-subtitle"),s="Heat / cool demand by zone",l=[...i].findIndex(d=>d.classList.contains("pc-selected")),p=l>=0?l:null;i.forEach((d,c)=>{Dt(d),d.addEventListener("click",()=>{if(p===c){p=null,i.forEach(H=>H.classList.remove("pc-selected")),r.classList.remove("pc-active"),a&&(a.textContent=s);return}p=c,i.forEach((H,U)=>H.classList.toggle("pc-selected",U===c));let m=this._hass?.states||{},u=this._discovery,h=this._historyCache,v=(this._config?._zones||[])[c];if(!v)return;let w=v.entity,b=X(w),y=u?.zoneEntities?.[b]||{},_=ie(w,y,m,v,{});a&&(a.textContent=_.name);let S=h?.stateData?.[w]||[],$=Mi(S,48),A=0,M=0,I=0,L=0;for(let H of $)H.state==="heating"?A+=30:H.state==="cooling"?M+=30:H.state==="off"?L+=30:I+=30;let T=A+M,C=Fa($),x=Ia($),E=H=>{if(H===0)return"0m";let U=Math.floor(H/60),Y=H%60;return U===0?`${Y}m`:Y===0?`${U}h`:`${U}h ${Y}m`},F=T>0?E(T):"no demand",N=[];A>0&&N.push(`${E(A)} heat`),M>0&&N.push(`${E(M)} cool`);let z=N.join(" \xB7 "),R="";C.minutes>0&&(R=`${C.mode==="heat"?"heating":C.mode==="cool"?"cooling":"active"} run`);let O=C.minutes>0?E(C.minutes):"\u2014",V="\u2014",q="";x&&x.minutes>0&&(V=G(new Date(x.ts),it(this._hass)),q=`${E(x.minutes)} demand`);let D=`${E(I)} idle`,W=L>0?` \xB7 ${E(L)} off`:"";r.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${f(_.name)}</span><span class="pc-detail-close">\u2715 Close</span></div><div class="pc-detail-stats"><div class="pc-stat"><div class="pc-stat-value">${f(F)}</div><div class="pc-stat-label">24h Demand</div>`+(z?`<div class="pc-stat-sub">${f(z)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${f(O)}</div><div class="pc-stat-label">Longest Run</div>`+(R?`<div class="pc-stat-sub">${f(R)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${f(V)}</div><div class="pc-stat-label">Busiest Hour</div>`+(q?`<div class="pc-stat-sub">${f(q)}</div>`:"")+`</div></div><div class="pc-state-detail-footer">${f(D+W)}</div>`,r.classList.add("pc-active");let P=r.querySelector(".pc-detail-close");P&&P.addEventListener("click",H=>{H.stopPropagation(),p=null,i.forEach(U=>U.classList.remove("pc-selected")),r.classList.remove("pc-active"),a&&(a.textContent=s)},{signal:e})},{signal:e})})}}_bindHeatmapInteractions(){let e=this._resetAbort("_heatmapAbort"),o=this._shadow.querySelectorAll(".pc-section-comfort-strip .pc-heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(o.length===0||!n)return;let i=[...o].findIndex(h=>h.classList.contains("pc-selected")),r=i>=0?i:null;o.forEach((h,g)=>{Dt(h),h.addEventListener("click",()=>{let v=this._shadow.querySelector(".pc-section-comfort-strip");if(v&&v.querySelectorAll(".pc-strip-drag-highlight").forEach(C=>{C.style.display="none"}),r===g){r=null,o.forEach(C=>C.classList.remove("pc-selected")),n.classList.remove("pc-active");return}r=g,o.forEach((C,x)=>C.classList.toggle("pc-selected",x===g));let w=h.querySelectorAll(".pc-cell"),b=[],y=[];if(w.length>0)w.forEach(C=>{let x=C.getAttribute("data-score");x&&(b.push(Number(x)),y.push(C.getAttribute("data-hour")||"--"))});else{let x=h.querySelector(".pc-strip-container")?.getAttribute("data-slots");if(x)try{let E=JSON.parse(x);for(let F of E)F.v!==null&&F.v!==void 0&&(b.push(F.v),y.push(F.l||"--"))}catch{}}if(b.length===0)return;let _=Math.round(b.reduce((C,x)=>C+x,0)/b.length),S=0,$=0;for(let C=1;C<b.length;C++)b[C]>b[S]&&(S=C),b[C]<b[$]&&($=C);let A=y[S]||"--",M=y[$]||"--",I=_>=80?"var(--pulse-tier-moderate)":_>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)",L=h.querySelector(".pc-zone-label")?.textContent||"";n.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${f(L)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${_}</div><div class="pc-stat-label">Avg Score</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${f(A)}</div><div class="pc-stat-label">Best Hour</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${f(M)}</div><div class="pc-stat-label">Worst Hour</div></div>
          </div>
          <div class="pc-detail-bar"><div class="pc-detail-bar-fill" style="width:${_}%;background:${k(I)}"></div></div>`,n.classList.add("pc-active");let T=n.querySelector(".pc-detail-close");T&&T.addEventListener("click",C=>{C.stopPropagation(),r=null,o.forEach(x=>x.classList.remove("pc-selected")),n.classList.remove("pc-active")},{signal:e})},{signal:e})});let a=this._shadow.querySelector(".pc-section-comfort-strip");if(!a)return;let s=Po();s.element.dataset.owner="heatmap";let l=a.querySelector(".pc-heatmap-body");l&&(l.style.position="relative",l.querySelectorAll(':scope > .pc-strip-tooltip[data-owner="heatmap"]').forEach(h=>h.remove()),l.appendChild(s.element),e.addEventListener("abort",()=>s.element.remove(),{once:!0}));let p=l?.querySelector(".pc-cells")||l?.querySelector(".pc-strip-container");a.querySelectorAll(".pc-cells").forEach(h=>{h.addEventListener("pointermove",g=>{if(g.pointerType==="touch")return;let v=g.target?.closest?.(".pc-cell");if(!v){s.hide();return}let w=v.getAttribute("data-hour")||"",b=v.getAttribute("data-score"),y=b?`${w}: Score ${b}`:`${w}: --`,_=p?.getBoundingClientRect();_&&s.show(_,g.clientX-_.left,y)},{signal:e}),h.addEventListener("pointerleave",()=>s.hide(),{signal:e}),h.addEventListener("pointerdown",g=>{if(g.pointerType!=="touch")return;let v=g.target?.closest?.(".pc-cell");if(!v)return;let w=v.getAttribute("data-hour")||"",b=v.getAttribute("data-score"),y=b?`${w}: Score ${b}`:`${w}: --`,_=p?.getBoundingClientRect();_&&(s.show(_,g.clientX-_.left,y),setTimeout(()=>s.hide(),2e3))},{signal:e})}),a.querySelectorAll(".pc-strip-container").forEach(h=>{let g=h.getAttribute("data-slots"),v=null;try{g&&(v=JSON.parse(g))}catch{}h.addEventListener("pointermove",w=>{if(w.pointerType==="touch"||!v)return;let b=h.getBoundingClientRect(),y=ae(w.clientX,b,v.length),_=v[y];if(_){let S=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;s.show(b,w.clientX-b.left,S)}},{signal:e}),h.addEventListener("pointerleave",()=>s.hide(),{signal:e}),h.addEventListener("pointerdown",w=>{if(w.pointerType!=="touch"||!v)return;let b=h.getBoundingClientRect(),y=ae(w.clientX,b,v.length),_=v[y];if(_){let S=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;s.show(b,w.clientX-b.left,S),setTimeout(()=>s.hide(),2e3)}},{signal:e})});let m=l?.querySelector(".pc-strip-crosshair");if(l&&m&&p){let h=p.getBoundingClientRect().left-l.getBoundingClientRect().left;ui(l,m,p,h,e)}a.querySelectorAll(".pc-cells, .pc-strip-container").forEach(h=>{let g=h.getAttribute("data-slots"),v=null;try{g&&(v=JSON.parse(g))}catch{}mi(h,v,s,"",e)})}_bindEnergyFlowInteractions(){let e=this._resetAbort("_energyFlowAbort");for(let o of this._shadow.querySelectorAll(".pc-section-energy-flow")){let n=o.querySelectorAll("path[data-zone]");if(n.length===0)continue;let i=[...n].some(r=>r.classList.contains("pc-dimmed"))?[...n].find(r=>!r.classList.contains("pc-dimmed"))?.getAttribute("data-zone")??null:null;n.forEach(r=>{r.classList.add("pc-ribbon"),r.addEventListener("click",()=>{let a=r.getAttribute("data-zone");if(a){if(i===a){i=null,n.forEach(s=>s.classList.remove("pc-dimmed"));return}i=a,n.forEach(s=>{s.classList.toggle("pc-dimmed",s.getAttribute("data-zone")!==a)})}},{signal:e})})}}_bindSparklineCrosshairs(){let e=this._resetAbort("_sparklineAbort");this._shadow.querySelectorAll(".pc-strip-tooltip-fixed").forEach(i=>i.remove()),this._shadow.querySelectorAll(".pc-sparkline-crosshair").forEach(i=>i.remove());let o=this._shadow.querySelectorAll(".pc-section-zones .pc-sparkline-filled, .pc-section-zones .pc-zone-row-pulse");if(o.length===0)return;let n=sa();this._shadow.appendChild(n.element),o.forEach(i=>{let r=i;r.style.position="relative";let a=document.createElement("div");a.className="pc-strip-crosshair pc-sparkline-crosshair",a.style.display="none",a.style.top="0",a.style.bottom="0",r.appendChild(a);let s=r.getAttribute("data-sparkline"),l=null;try{s&&(l=JSON.parse(s))}catch{}r.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let c=r.getBoundingClientRect(),m=d.clientX-c.left;if(!(m<0||m>c.width)&&(a.style.left=`${m}px`,a.style.display="",l)){let u=l.d,h=l.u||"",g=Math.min(u.length-1,Math.floor(m/c.width*u.length)),v=u[g];if(v){let w=v.v!==null?`${v.l}: ${v.v}${h}`:`${v.l}: --`;n.show(c,d.clientX,w)}}},{signal:e}),r.addEventListener("pointerleave",()=>{a.style.display="none",n.hide()},{signal:e});let p=null;r.addEventListener("pointerdown",d=>{if(d.pointerType!=="touch")return;let c=r.getBoundingClientRect(),m=d.clientX-c.left;if(!(m<0||m>c.width)){if(a.style.left=`${m}px`,a.style.display="",l){let u=l.d,h=l.u||"",g=Math.min(u.length-1,Math.floor(m/c.width*u.length)),v=u[g];if(v){let w=v.v!==null?`${v.l}: ${v.v}${h}`:`${v.l}: --`;n.show(c,d.clientX,w)}}p&&clearTimeout(p),p=setTimeout(()=>{a.style.display="none",n.hide(),p=null},2e3)}},{signal:e})})}_bindZoneRankingTabs(){let e=this._resetAbort("_zoneRankingTabsAbort"),o=this._shadow.querySelector(".pc-section-zone-ranking");if(!o)return;let n=o.querySelectorAll(".pc-ranking-tab");if(n.length===0)return;let i=this._config?._zones||[],r=this._discovery;if(r)for(let a of n){let s=()=>{let l=a.dataset.metric;if(!l)return;let p=this._hass?.states||{},d=en(i,p,r,l);if(!d)return;let c=document.createElement("template");c.innerHTML=d;let m=c.content.firstElementChild;m&&(o.replaceWith(m),this._bindZoneRankingTabs(),this._bindSectionChipActions())};At(a,s,{signal:e,role:"tab"}),a.addEventListener("click",s,{signal:e})}}_bindTimelineGroupTabs(){let e=this._resetAbort("_timelineGroupTabsAbort"),o=this._shadow.querySelectorAll(".pc-section-timeline-group");if(o.length===0)return;let n=this._config?._zones||[],i=this._discovery;if(i)for(let r of o){let a=Number(r.dataset.sectionIndex);if(Number.isNaN(a))continue;let s=r.querySelectorAll(".pc-timeline-group-tab");for(let l of s){let p=()=>{let d=l.dataset.tab;if(!d||!["thermal","state"].includes(d))return;let c=[...this._config?.sections||[]],m=c[a];if(!m||typeof m=="string"||m.type!=="timeline_group")return;let u={...m,active_tab:d};c[a]=u,this._config={...this._config,sections:c};let h=this._hass?.states||{},g=this._historyCache,v=Fi(u,n,h,i,g,it(this._hass));if(!v)return;let w=v.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${a}"`),b=document.createElement("template");b.innerHTML=w;let y=b.content.firstElementChild;y&&(r.replaceWith(y),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions())};At(l,p,{signal:e,role:"tab"}),l.addEventListener("click",p,{signal:e})}}}_bindTimelineGroupCellTooltip(){let e=this._resetAbort("_timelineGroupCellTooltipAbort");this._shadow.querySelectorAll('.pc-strip-rows > .pc-strip-tooltip[data-owner="cells"]').forEach(i=>i.remove());let o=this._shadow.querySelectorAll(".pc-strip-rows");if(o.length===0)return;let n=pt(this._hass?.states?.[(this._config?._zones||[])[0]?.entity]?.attributes);for(let i of o){let r=i.querySelectorAll(".pc-cells");if(r.length===0)continue;let a=!!i.querySelector(".pc-state-timeline-cells"),s=i.querySelector(".pc-strip-crosshair"),l=Po();l.element.dataset.owner="cells",i.style.position="relative",i.appendChild(l.element),e.addEventListener("abort",()=>l.element.remove(),{once:!0});for(let p of r)p.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let c=d.target?.closest?.(".pc-cell");if(!c){l.hide(),s&&(s.style.display="none");return}let m=c.getAttribute("data-hour")||"",u=c.getAttribute("data-score"),h=u?a?`${m}: ${u}`:`${m}: ${u}${n}`:`${m}: --`,g=p.getBoundingClientRect();if(l.show(g,d.clientX-g.left,h),s){let v=i.getBoundingClientRect();s.style.left=`${d.clientX-v.left}px`,s.style.display=""}},{signal:e}),p.addEventListener("pointerleave",()=>{l.hide(),s&&(s.style.display="none")},{signal:e}),p.addEventListener("pointerdown",d=>{if(d.pointerType!=="touch")return;let c=d.target?.closest?.(".pc-cell");if(!c)return;let m=c.getAttribute("data-hour")||"",u=c.getAttribute("data-score"),h=u?a?`${m}: ${u}`:`${m}: ${u}${n}`:`${m}: --`,g=p.getBoundingClientRect();if(l.show(g,d.clientX-g.left,h),s){let v=i.getBoundingClientRect();s.style.left=`${d.clientX-v.left}px`,s.style.display=""}setTimeout(()=>{l.hide(),s&&(s.style.display="none")},2e3)},{signal:e})}}_bindSystemHealthGroupTabs(){let e=this._resetAbort("_systemHealthGroupTabsAbort"),o=this._shadow.querySelectorAll(".pc-section-system-health-group");if(o.length===0)return;let n=this._discovery;if(n)for(let i of o){let r=Number(i.dataset.sectionIndex);if(Number.isNaN(r))continue;let a=i.querySelectorAll(".pc-system-health-group-tab");for(let s of a){let l=()=>{let p=s.dataset.tab;if(!p||!["bridge","homekit","api"].includes(p))return;let d=[...this._config?.sections||[]],c=d[r];if(!c||typeof c=="string"||c.type!=="system_health_group")return;let m={...c,active_tab:p};d[r]=m,this._config={...this._config,sections:d};let u=this._hass?.states||{},h=this._historyCache,g=Ii(m,n?.hubEntities||{},u,h,it(this._hass));if(!g)return;let v=g.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${r}"`),w=document.createElement("template");w.innerHTML=v;let b=w.content.firstElementChild;b&&(i.replaceWith(b),this._bindSystemHealthGroupTabs(),this._startCountdownTimer(),this._bindSectionChipActions())};At(s,l,{signal:e,role:"tab"}),s.addEventListener("click",l,{signal:e})}}}_renderSection(e,o,n,i){let r=typeof e=="string"?e:e.type,a=this._config,s=i.hubEntities,l=this._historyCache,p=it(this._hass);switch(r){case"zones":return ti(o,a,n,i,l,p);case"api":return ei(s,n,e,l,p);case"graph":return ci(e,o,l,n,i);case"donut":return di(e,s,n);case"bridge":return oi(s,n,l);case"homekit":return ni(s,n,l);case"weather":return ii(s,n,l);case"environment":return ri(o,n,i);case"thermal":return ai(o,n,i);case"schedule":return si(o,n,i);case"thermal_strip":return la(o,e,n,i,l,p);case"comfort_strip":return da(o,e,n,i,l,p);case"energy_flow":return Jo(o,n,i);case"energy_flow_ac":return Jo(o,n,i,"ac");case"radial":return Ti(o,this._withCardOutdoor(e),n,i,l);case"home_status":return Ei(o,n,i,this._config||{});case"zone_ranking":return en(o,n,i);case"timeline_group":return Fi(e,o,n,i,l,p);case"system_health_group":return Ii(e,i?.hubEntities||{},n,l,p);default:return""}}_fireAction(e,o,n){if(!this._hass)return;let i=o[n]||this._config?.[n]||(n==="tap_action"?{action:"more-info"}:{action:"none"});ue(this,this._hass,i,e,Ct)}_applyTransitionGlow(e){let o=a=>{a&&(a.classList.add("pc-temp-transitioning"),setTimeout(()=>a.classList.remove("pc-temp-transitioning"),1100))},n=this._shadow.querySelectorAll(".pc-zone-row");n[e]&&o(n[e].querySelector(".pc-power-bar-fill"));let i=this._shadow.querySelectorAll(".pc-zone-row-pulse");o(i[e]||null);let r=this._shadow.querySelectorAll(".pc-arc-group");r[e]&&o(r[e].querySelector(".pc-arc-path"))}_updateZones(){if(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)return;if(!mt()){let o=this._config._zones||[],n=this._hass.states;for(let i=0;i<o.length;i++){let r=o[i].entity,a=this._prevStates[r],s=n[r];if(!a||!s)continue;let l=a.attributes?.current_temperature,p=s.attributes?.current_temperature;l!==void 0&&p!==void 0&&l!==p&&this._applyTransitionGlow(i)}}ra(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates,this._historyCache,it(this._hass))&&(this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs())}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let e=this._hass.states,o=this._discovery,n=this._config._zones||[],i=this._rerenderTargets;if(!i)return;let r=new Set,a=this._captureUiState();if(n.some(d=>be(d,o,["heating_power","ac_power"]).some(c=>on(this._prevStates[c],e[c]))))for(let d of this._shadow.querySelectorAll(".pc-section-thermal-strip, .pc-section-timeline-group"))d.querySelectorAll(".pc-timeline-row, .pc-state-row").forEach((c,m)=>{if(!n[m])return;let u=ft(tt(n[m],o,e).zoneState).trim().split(" ");c.classList.remove(...[...c.classList].filter(h=>h.startsWith("pc-row-"))),c.classList.add(...u)});for(let d of i){let c=this._shadow.querySelectorAll(d.selector);if(c.length===0)continue;let m=typeof d.watchIds=="function"?d.watchIds():d.watchIds;if(!(m.length===0||!m.some(h=>{let g=e[h],v=this._prevStates[h];return on(v,g)})))for(let h of c){let g=h.getAttribute("data-section-index"),v=d.render(Number(g??-1),h);if(!v)continue;let w=document.createElement("template");w.innerHTML=v;let b=w.content.firstElementChild;b&&(g!==null&&b.setAttribute("data-section-index",g),h.replaceWith(b),r.add(d.selector))}}let l=Object.keys(nn).filter(d=>r.has(nn[d]));l.length>0&&this._rebindAfterReplace(l);let p=!1;for(let d of this._shadow.querySelectorAll(".pc-section-energy-flow")){let c=d.dataset.variant==="ac"?"ac":"heating";if(n.some(u=>be(u,o,["heating_power","ac_power"]).some(h=>{let g=e[h],v=this._prevStates[h];return on(v,g)}))&&!xa(d,n,e,o,c)){let h=Jo(n,e,o,c);if(h){let g=document.createElement("template");g.innerHTML=h;let v=g.content.firstElementChild;v&&(d.replaceWith(v),r.add(".pc-section-energy-flow"),p=!0)}}}p&&(this._bindEnergyFlowInteractions(),this._bindSectionChipActions()),this._restoreUiState(a)}_updateHero(){if(!this._config||!this._hass||!this._discovery||this._config.show_hero===!1)return;let e=this._shadow.querySelector(".pc-hero");if(!e)return;let o=this._config,n=this._hass.states,i=this._discovery,r=o._zones||[],a=Ri(o,i,n),s=tn(o,i,n),l=u=>{let h=r.findIndex(y=>y.entity===u);if(h<0)return u;let g=r[h],v=X(u),w=i?.zoneEntities?.[v]||{};return ct(u,n,w,g)?.entityId||u},p=Zn(r,this._historyCache,l),d=Ni(a,o,p,s);if(!d)return;let c=document.createElement("template");c.innerHTML=d;let m=c.content.firstElementChild;m&&m.outerHTML!==e.outerHTML&&e.replaceWith(m)}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,o=this._hass.states,n=this._discovery,i=e._zones||[],r=e.sections||[{type:"zones"}],a=[],s=this._captureUiState();for(let l=0;l<r.length;l++){let p=r[l],d=typeof p=="string"?p:p.type;if(!kp.has(d))continue;let c=nn[d];if(!c)continue;let m=this._shadow.querySelector(`${c}[data-section-index="${l}"]`);if(!m)continue;let u=this._renderSection(p,i,o,n);if(!u)continue;let h=u.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${l}"`),g=document.createElement("template");g.innerHTML=h;let v=g.content.firstElementChild;v&&(m.replaceWith(v),a.push(d))}a.length!==0&&(this._rebindAfterReplace(a),this._restoreUiState(s))}_captureUiState(){return Cp.flatMap(e=>[...this._shadow.querySelectorAll(e)].map((o,n)=>({selector:e,ordinal:n,row:[...o.querySelectorAll(Ha)].findIndex(i=>i.classList.contains("pc-selected")),metric:o.getAttribute("data-metric"),zone:o.querySelector("path[data-zone].pc-dimmed")?o.querySelector("path[data-zone]:not(.pc-dimmed)")?.getAttribute("data-zone")??null:null}))).filter(e=>e.row>=0||e.metric||e.zone)}_restoreUiState(e){for(let{selector:o,ordinal:n,row:i,metric:r,zone:a}of e){let s=this._shadow.querySelectorAll(o)[n];if(!s)continue;if(a){let p=[...s.querySelectorAll("path[data-zone]")].find(c=>c.getAttribute("data-zone")===a),d=!!s.querySelector("path[data-zone].pc-dimmed")&&!p?.classList.contains("pc-dimmed");p&&!d&&p.dispatchEvent(new Event("click"));continue}r&&s.getAttribute("data-metric")!==r&&[...s.querySelectorAll(".pc-ranking-tab")].find(p=>p.dataset.metric===r)?.dispatchEvent(new Event("click"));let l=i>=0?s.querySelectorAll(Ha)[i]:null;l&&!l.classList.contains("pc-selected")&&l.dispatchEvent(new Event("click"))}}_rebindAfterReplace(e){let o=i=>e.includes(i);o("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),o("api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api")),(o("api")||o("system_health_group"))&&this._startCountdownTimer(),o("radial")&&this._bindRadialInteractions(),o("zone_ranking")&&this._bindZoneRankingTabs(),o("thermal_strip")&&(this._bindTimelineInteractions(),this._bindTimelineGroupCellTooltip()),o("comfort_strip")&&this._bindHeatmapInteractions(),o("timeline_group")&&(this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions()),o("system_health_group")&&this._bindSystemHealthGroupTabs();let n=["zones","api","bridge","homekit","weather","environment","thermal","schedule","home_status","zone_ranking","thermal_strip","timeline_group","system_health_group","graph"];e.some(i=>n.includes(i))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config)return;let e;try{e=this._collectHistoryIds()}catch(a){Ct("History id collection failed: %O",a);return}let{validIds:o,validClimateIds:n}=e;if(o.length===0||Yn(this._historyCache,o,n))return;let i=Ur();if(Yn(i,o,n)){this._historyCache=i,this._rebuildSparklinePathCache(),Object.values(i.data).filter(s=>s.length>=2).length>0&&(this._updateHistorySections(),this._updateHero());return}if(Date.now()-this._historyLastAttempt<3e5||this._historyFetchInProgress)return;this._historyLastAttempt=Date.now(),this._historyFetchInProgress=!0;let r=this._historyGen;try{await this._fetchHistory()}catch(a){Ct("History fetch failed, using cached data: %O",a)}finally{r===this._historyGen&&(this._historyFetchInProgress=!1)}}_collectHistoryIds(){if(!this._hass||!this._config)return{validIds:[],validClimateIds:[]};let e=this._config._zones||[],o=[],n=this._hass.states;for(let p of e){let d=X(p.entity),c=this._discovery?.zoneEntities?.[d]||{},m=ct(p.entity,n,c,p);o.push(m.entityId);let u=Wt(p.entity,n,c,p);u&&o.push(u.entityId)}this._discovery?.hubEntities?.call_history&&o.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&o.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&o.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&o.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&o.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&o.push(this._discovery.hubEntities.outside_temp);for(let p of this._config?.sections||[]){let d=typeof p=="string"?null:p?.entities;if(Array.isArray(d))for(let c of d){if(typeof c!="string")continue;let{temp:m,hum:u}=pi(c,n,this._discovery,e);o.push(m.entityId),u&&o.push(u.entityId)}}let i=[...new Set(o.filter(p=>p&&typeof p=="string"&&p.includes(".")))],a=(this._config?.sections||[]).some(p=>(typeof p=="string"?p:p?.type)==="timeline_group"),s=[];if(a)for(let p of e)typeof p?.entity=="string"&&p.entity.startsWith("climate.")&&s.push(p.entity);let l=[...new Set(s.filter(p=>p.includes(".")))];return{validIds:i,validClimateIds:l}}async _fetchHistory(){if(!this._hass||!this._config)return;let e=this._historyGen,{validIds:o,validClimateIds:n}=this._collectHistoryIds();if(o.length!==0)try{let[i,r]=await Promise.all([Ye(this._hass,o,24),n.length>0?hr(this._hass,n,24):Promise.resolve({})]);if(e!==this._historyGen){Ct("History fetch result discarded; config changed during fetch");return}if(this._historyCache=Xn(this._historyCache,i,r),this._rebuildSparklinePathCache(),Wr(i,r),!this.isConnected)return;let a=Object.values(i).filter(l=>l.length>=2).length,s=Object.values(r).filter(l=>l.length>=1).length;(a>0||s>0)&&(this._updateHistorySections(),this._updateHero())}catch(i){Ct("History fetch failed, using cached data: %O",i)}}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let e=this._hass.states,o=this._config._zones||[],n=this._discovery.hubEntities,i={};for(let r of o)for(let a of Ke(r,this._discovery))e[a]&&(i[a]=e[a]);for(let r of o)for(let a of zi(r,this._discovery,e))e[a]&&(i[a]=e[a]);for(let r of Object.values(n))r&&e[r]&&(i[r]=e[r]);for(let r of[...ro(this._config,null,this._discovery,e),...this._radialOutdoorIds()])e[r]&&(i[r]=e[r]);this._prevStates=i}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._trailTimer&&(clearTimeout(this._trailTimer),this._trailTimer=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._stateTimelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort(),this._zoneRankingTabsAbort?.abort(),this._timelineGroupTabsAbort?.abort(),this._timelineGroupCellTooltipAbort?.abort(),this._systemHealthGroupTabsAbort?.abort(),this._stopRadialAnimations();let e=this._shadow?.querySelectorAll(".pc-zone-row")||[];for(let o of e){let n=o.__pulseCleanup;typeof n=="function"&&n()}}connectedCallback(){Fr(this),this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer()),this._config&&this._hass&&this._discovery&&!this._rafId&&!this._trailTimer&&(this._rafId=requestAnimationFrame(()=>{this._rafId=null,this._runUpdate()}))}getCardSize(){let e=this._config?._zones?.length||1,o=this._config?.sections?.length||1;return Math.max(1,e+o)}getGridOptions(){return de(3)}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(Cr)}static getStubConfig(e){return{entity:Object.keys(e.states).find(n=>n.startsWith("climate."))||"climate.living_room"}}};customElements.get(Ao)||customElements.define(Ao,Hi);window.customCards=window.customCards||[];window.customCards.push({type:Ao,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${Ar} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Da=Se,Be="pulse-weather-card",Oa="pulse-weather-card-editor",Nt="Pulse Weather Card:",Pa=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],rn={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},an=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],sn=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],ln=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var Di=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],Oi=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var qe=80,Ba=35;var Pi=.6,qa=90,Ua=60,Wa=40,Bi=8;var qi=1800*1e3,Va=7,Ga=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],ja={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"};function ao(t){return t>=4?"red":t===3?"amber":"yellow"}var Za={yellow:"#FFFF00",amber:"#FF9F0A",red:"#FF0000"};var Ya=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],Xa=["active_alert","upcoming_alert","alert_count"],Ui="_weather",Ka=3;var Ja={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},$t=29.53,Qa=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var ts=`${""}

${$e}
/* \u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host {
  display: block;

  /* Weather-specific glass intensity */
  --pulse-glass-blur: 20px;

  /* Typography */
  --pw-hero-size: 72px;
  --pw-hero-weight: 100;
  --pw-section-label-size: 11px;


  /* Semantic colors */
  --pw-color-freeze: #5ac8fa;
  --pw-color-stable: #30d158;
  --pw-text-overlay: #d0d0d0;
  --pw-shadow-overlay: 0 1px 3px rgba(0,0,0,0.6);

  /* Transitions */
  --pw-bg-transition: var(--pulse-anim-fill);

  /* \u2500\u2500 Wabi palette (sumi / nezumi / senmai / shu) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-sky-top: #1d2530;
  --pw-sky-mid: #384452;
  /* The bottom stop is the lightest point of the sky and therefore the contrast
     floor for all cream text. Do not lighten without re-running
     tests/pulse-weather/styles-tokens.test.js. */
  --pw-sky-bot: #413d35;
  --pw-ink-cream: #fdf6e3;
  --pw-ink-cream-muted: rgba(229, 217, 194, 0.85);
  /* 0.72 is the lowest alpha that clears 4.5:1 against --pw-sky-bot. */
  --pw-ink-cream-dim: rgba(229, 217, 194, 0.72);
  --pw-vermilion: #a83d2a;
  --pw-wind: #5ac8fa;
  --pw-warn-amber: #ff9f0a;
  --pw-warn-red: #ff453a;
  --pw-warn-yellow: #ffd60a;
  --pw-good-green: #30d158;

  /* Card-local: Weather is the only consumer at this size; everything else
     uses the shared --pulse-font-* scale. */
  --pw-font-caption: 13px;

  /* \u2500\u2500 Spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-pad-x:     24px;   /* section left/right padding            */
  --pw-pad-y:     22px;   /* section top/bottom padding            */
  --pw-gap-block: 14px;   /* between sub-blocks                    */
  --pw-gap-tight:  6px;   /* within tight clusters                 */
}

/* \u2500\u2500 Card Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-card {
  overflow: hidden;
  min-width: 0;
  /* Match cartouche radius (24px). Default HA card 12px is smaller than the
     cartouche frame's 24px, leaving a corner slice of pw-card background bleed
     through in light theme. Aligning here means cartouche fills card edge-to-edge. */
  border-radius: var(--pulse-radius-cartouche);
  background: var(--pulse-bg-card);
  color: var(--pulse-text-primary);
  /* font-family inherits from the HA frame, same as pulse-climate-card. */
  container-type: inline-size;
}

/* \u2500\u2500 Cartouche frame primitive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Default sky gradient: applies to every section unless that section
   paints its own background (atmosphere, air-quality). Promoted from
   per-section duplication so alerts / wind no longer leak light theme
   pw-card cream backdrop in light mode. */
.pw-cartouche {
  position: relative;
  border-radius: var(--pulse-radius-cartouche);
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(180deg,
    var(--pw-sky-top) 0%,
    var(--pw-sky-mid) 45%,
    var(--pw-sky-bot) 100%);
}

.pw-cartouche::before {
  content: "";
  position: absolute;
  inset: 14px;
  border: 1px solid rgba(229, 217, 194, 0.18);
  border-radius: 18px;
  z-index: 3;
  pointer-events: none;
}

/* Section content sits above the cartouche border */
.pw-cartouche > .pw-content {
  position: relative;
  z-index: 4;
}

/* \u2500\u2500 Section Shared \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-section { position: relative; min-width: 0; }
.pw-section + .pw-section { border-top: 1px solid var(--pulse-border-subtle); }

/* \u2500\u2500 Shared Status Label \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-status-label {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 var(--pulse-space-card-wide);
  transition: color var(--pulse-anim-color);
  position: relative;
  z-index: 2;
}

/* \u2500\u2500 Mode Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Atmosphere Layer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx,
.pw-smog-overlay,
.pw-haze-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx { overflow: hidden; }
.pw-fx,
.pw-wind-streaks { z-index: 1; }

/* \u2500\u2500 Hero Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Temperature Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Bottom Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* CAPE storm risk bar */

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-hourly-strip {
  display: flex;
  gap: var(--pulse-space-hairline);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  margin: 0 var(--pulse-space-card-wide);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.pw-hourly-strip::-webkit-scrollbar { display: none; }

/* \u2500\u2500 Wind Rose \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-streak {
  position: absolute;
  height: 1px;
  border-radius: var(--pulse-radius-hairline);
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  animation: pw-streakTravel linear infinite;
  animation-fill-mode: backwards;
}

.pw-rose-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.pw-gust-sweep {
  animation: pw-gustPulse var(--gust-dur, 2s) ease-in-out infinite;
}

.pw-wind-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  pointer-events: none;
}

.pw-wind-speed {
  font-size: 28px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pw-wind-unit {
  font-size: 12px;
  color: var(--pw-ink-cream-dim);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pw-ink-cream-dim);
}

/* \u2500\u2500 AQI Gauge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-aqi { padding: 0 0 16px; position: relative; overflow: hidden; }

/* \u2500\u2500 Alerts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-alert-list { display: flex; flex-direction: column; gap: var(--pulse-space-element); padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  gap: var(--pulse-space-row);
  padding: var(--pulse-space-row);
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-row);
  border-left: 3px solid;
}

/* \u2500\u2500 Atmosphere Column \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-atmos-column-wrap {
  display: flex;
  align-items: stretch;
  padding: 8px var(--pulse-space-card-wide) 0;
  gap: var(--pulse-space-section);
  height: var(--pw-atmos-column-height, 200px);
  position: relative;
  z-index: 2;
}

.pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  text-align: right;
  padding: 4px 0;
}

.pw-atmos-scale-label {
  font-size: 9px;
  /* No opacity here: the parent .pw-atmos-scale already sets 0.5. */
  color: var(--pw-ink-cream-dim);
  font-variant-numeric: tabular-nums;
}

.pw-atmos-column {
  flex: 1;
  position: relative;
  border-radius: var(--pulse-radius-row);
  overflow: hidden;
  background: linear-gradient(to top, var(--pulse-bg-elevated) 0%, transparent 100%);
  border: 1px solid var(--pulse-border-subtle);
}

/* CAPE energy fill */
.pw-atmos-cape-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 9px 9px;
  transition: height var(--pulse-anim-fill) ease;
}

/* Thermal particles */
.pw-thermal-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  opacity: 0;
  animation: pw-thermalRise var(--rise-dur, 4s) ease-out infinite;
}

@keyframes pw-thermalRise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: var(--peak-op, 0.4); }
  80% { opacity: var(--peak-op, 0.4); transform: translateY(var(--rise-dist, -80px)) scale(0.5); }
  100% { opacity: 0; transform: translateY(var(--rise-dist, -100px)) scale(0.3); }
}

/* Freezing level marker */
.pw-atmos-freeze-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: var(--pw-color-freeze);
  opacity: 0.4;
}

.pw-atmos-freeze-label {
  font-size: 10px;
  color: var(--pw-color-freeze);
  opacity: 0.6;
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* LCL height marker (dashed line, grey, distinct from freeze marker) */
.pw-atmos-lcl-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(160,160,160,0.4);
}

.pw-atmos-lcl-label {
  font-size: 10px;
  color: var(--pw-text-overlay);
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  text-shadow: var(--pw-shadow-overlay);
}

.pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  color: var(--pw-text-overlay);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: var(--pw-shadow-overlay);
}

/* Tap-to-expand detail panel */

.pw-atmos-detail {
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--pulse-anim-mode) ease;
  margin: 0 var(--pulse-space-card-wide);
}

.pw-atmos-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  padding: 12px 0;
  border-top: 1px solid var(--pulse-border-subtle);
}

.pw-atmos-detail-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
}

.pw-atmos-detail-indicator {
  width: 4px;
  height: 24px;
  border-radius: var(--pulse-radius-bar);
  flex-shrink: 0;
}

.pw-atmos-detail-label {
  font-size: 10px;
  color: var(--pw-ink-cream-dim);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.pw-atmos-detail-value {
  font-size: 14px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-detail-desc {
  font-size: 9px;
  color: var(--pw-ink-cream-dim);
}

/* \u2500\u2500 Severity Dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 FX Keyframes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes pw-rainFall {
  0% { transform: translateY(-20px); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 0.8; }
  100% { transform: translateY(300px); opacity: 0; }
}

@keyframes pw-snowFall {
  0% { transform: translateY(-10px) translateX(0) rotate(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { transform: translateY(300px) translateX(30px) rotate(360deg); opacity: 0; }
}

@keyframes pw-flash {
  0%,100% { opacity: 0; }
  4% { opacity: 0.8; }
  6% { opacity: 0; }
  8% { opacity: 0.5; }
  10% { opacity: 0; }
}

@keyframes pw-boltStrike {
  0% { opacity: 0; filter: none; }
  3% { opacity: 0; }
  4% { opacity: 1; filter: drop-shadow(0 0 12px rgba(200,220,255,0.9)) drop-shadow(0 0 4px #fff); }
  6% { opacity: 0; filter: none; }
  8% { opacity: 0.7; filter: drop-shadow(0 0 6px rgba(200,220,255,0.5)); }
  10% { opacity: 0; filter: none; }
  100% { opacity: 0; }
}

@keyframes pw-fogDrift {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@keyframes pw-rayPulse {
  0%,100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes pw-cloudDrift {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(500px); }
}

@keyframes pw-twinkle {
  0%,100% { opacity: 0.2; }
  50% { opacity: 0.9; }
}

@keyframes pw-shimmer {
  0% { background-position: 0% 0%; opacity: 0.4; }
  50% { background-position: 0% 100%; opacity: 0.8; }
  100% { background-position: 0% 0%; opacity: 0.4; }
}

@keyframes pw-rippleWave {
  0%, 100% { transform: scaleY(1) translateY(0); }
  50% { transform: scaleY(1.1) translateY(-3px); }
}

@keyframes pw-streakTravel {
  0% { translate: var(--sx) var(--sy); opacity: 0; }
  10% { opacity: var(--peak, 0.4); }
  90% { opacity: var(--peak, 0.4); }
  100% { translate: var(--ex) var(--ey); opacity: 0; }
}

@keyframes pw-arrowSway {
  0%   { transform: rotate(var(--sway-back)); }
  35%  { transform: rotate(var(--sway-fwd)); }
  65%  { transform: rotate(var(--sway-fwd)); }
  100% { transform: rotate(var(--sway-back)); }
}

@keyframes pw-roseShake {
  0%, 100% { translate: 0px 0px; }
  20%  { translate: var(--dx) var(--dy); }
  40%  { translate: calc(-0.6 * var(--dx)) calc(-0.6 * var(--dy)); }
  60%  { translate: calc(0.8 * var(--dx)) calc(0.8 * var(--dy)); }
  80%  { translate: calc(-0.3 * var(--dx)) calc(-0.3 * var(--dy)); }
}

@keyframes pw-gustPulse {
  0%   { opacity: 0.04; transform: scale(0.85); }
  40%  { opacity: var(--gust-peak, 0.2); transform: scale(1.05); }
  70%  { opacity: var(--gust-peak, 0.2); transform: scale(1.0); }
  100% { opacity: 0.04; transform: scale(0.85); }
}

@keyframes pw-breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes pw-dotPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@keyframes pw-sweepRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pw-blipRing {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes pw-blipPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}

@keyframes pw-sunGlow {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(255,200,50,0.4)); }
  50% { filter: drop-shadow(0 0 16px rgba(255,200,50,0.7)); }
}

@keyframes pw-moonGlow {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(200,210,255,0.3)); }
  50% { filter: drop-shadow(0 0 12px rgba(200,210,255,0.5)); }
}

@keyframes pw-gaugeGlow {
  0%, 100% { filter: drop-shadow(0 0 4px var(--glow-color, rgba(255,255,255,0.2))); }
  50% { filter: drop-shadow(0 0 10px var(--glow-color, rgba(255,255,255,0.4))); }
}

/* \u2500\u2500 Air Haze FX \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-dust-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: rgba(180,160,120,0.3);
  animation: pw-dustFloat 8s ease-in-out infinite;
}

@keyframes pw-dustFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.pw-haze-blob {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: radial-gradient(ellipse, rgba(160,140,100,0.08), transparent 70%);
  animation: pw-hazeFloat 12s ease-in-out infinite;
}

@keyframes pw-hazeFloat {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(30px); opacity: 0.6; }
}

/* \u2500\u2500 Radar (CRT green phosphor style) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-radar {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: var(--pulse-radius-circle);
  overflow: hidden;
  background:
    repeating-radial-gradient(
      transparent, transparent 15%,
      var(--pw-radar-color, rgba(80,255,0,0.15)) 15.5%, transparent 16%
    ),
    linear-gradient(
      transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    linear-gradient(
      to right, transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    radial-gradient(var(--pw-radar-bg-inner, #001a00), var(--pw-radar-bg-outer, #000800));
}

.pw-radar::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background-image: conic-gradient(transparent 85%, var(--pw-radar-sweep, rgba(80,255,0,0.35)));
  animation: pw-sweepRotate var(--pw-radar-dur, 2.5s) linear infinite;
  will-change: transform;
}

.pw-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background:
    radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
    radial-gradient(circle, transparent 55%, rgba(0,0,0,0.6) 100%);
  z-index: 3;
  pointer-events: none;
}

@keyframes pw-radarBlink {
  2%, 20% { background-color: var(--pw-blip-color, rgba(80,255,0,0.85)); box-shadow: 0 0 4px var(--pw-blip-color, rgba(80,255,0,0.6)); }
  90% { background-color: transparent; box-shadow: none; }
}

.pw-radar-blip {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: var(--pulse-radius-circle);
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: pw-radarBlink var(--pw-radar-dur, 2.5s) ease-out infinite;
}

/* \u2500\u2500 Alert rows: Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: var(--pulse-space-row);
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: var(--pulse-space-element); padding: 4px var(--pulse-space-card-wide) 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pw-ink-cream-dim); font-variant-numeric: tabular-nums; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: var(--pulse-radius-hairline); background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: var(--pulse-radius-hairline); background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: var(--pulse-radius-circle); border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* Backstop for animation declared in markup. weather-fx.js and wind.js set
   animation as an inline style, which outranks a plain declaration, hence
   !important. The primary gate skips generating FX entirely, in
   pulse-weather-card.js _postRender. */
@media (prefers-reduced-motion: reduce) {
  :host,
  :host *,
  :host *::before,
  :host *::after {
    animation: none !important;
    transition: none !important;
  }
}

/* \u2500\u2500 Tension Overlays \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-tension-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.pw-tension-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.pw-tension-wash.breathing {
  animation: pw-breathe var(--breathe-dur, 4s) ease-in-out infinite;
}

@keyframes pw-vignettePulse {
  0%, 100% { opacity: var(--vignette-min, 0.5); }
  50% { opacity: var(--vignette-max, 1); }
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-meteogram { padding: 0 0 16px; position: relative; overflow: hidden; }
.pw-meteogram-chart { display: block; width: 100%; height: auto; margin: 8px 0 0; position: relative; z-index: 2; }
/* Cloud strip fills the entire section so the band reads as edge-to-edge
   atmosphere rather than a strip floating inside the SVG. */
.pw-meteogram-cloud-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.pw-meteogram-cloud-slot {
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgb(180, 190, 200);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Type-system primitives (single source of truth)
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Every section composes its DOM from t.* builders in type-system.js,
 * which emit one of these classes. Per-section CSS blocks below are
 * layout-only (padding, grid, gradient, brand-mark corner offset),
 * they should never restate font-size / font-weight
 * / text-transform. To add a new role, add it here AND in
 * type-system.js together.
 */

/* Hero block: wraps heroTier + display + narrative. Sections that
   compose their hero via t.heroBlock get the centred stacked layout
   for free; sections that need a different rhythm compose the
   primitives manually. */
.pw-hero-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--pw-gap-tight);
}
.pw-hero-block .pw-t-narrative { margin-top: 0; }

/* Top-marg wrapper: reserves the right gutter for the brand mark. */
.pw-t-marg { padding-right: 36px; }
/* Narrative directly under a kicker sits a tight gap below. */
.pw-t-marg .pw-t-kicker + .pw-t-narrative { margin-top: var(--pw-gap-tight); }

/* Section anchor: UPPERCASE 0.32em kicker. */
.pw-t-kicker {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: var(--pulse-ls-kicker);
  text-transform: uppercase;
  opacity: 0.6;
  line-height: 1;
}
.pw-t-kicker::after { content: " \xB7"; opacity: 0.5; }

/* Hero numbers: display size, tabular numerals. */
.pw-t-display {
  font-weight: 600;
  font-size: var(--pulse-font-display);
  letter-spacing: var(--pulse-ls-display);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
  text-shadow: 0 6px 36px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.pw-t-display-suf {
  font-size: 0.48em;
  vertical-align: super;
  margin-left: -3px;
  text-shadow: none;
}

/* Hero tier: Atmosphere uses the larger title flavour, AQI the
   smaller body-sm flavour. Title Case: no text-transform. */
.pw-t-hero-tier {
  font-weight: 600;
  text-align: center;
}
.pw-t-hero-tier-atmos {
  font-size: var(--pulse-font-hero);
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
}
.pw-t-hero-tier-aqi {
  font-size: var(--pulse-font-body);
  letter-spacing: 0.04em;
  margin-top: 3px;
}

/* Narrative: Sentence case body. Centred caption that fills the
   section width; copy is short enough that wrapping happens only on
   narrow phones. Sections that need a different rhythm override. */
.pw-t-narrative {
  font-weight: 400;
  font-size: var(--pulse-font-section-title);
  line-height: 1.45;
  color: var(--pw-ink-cream-muted);
  text-align: center;
  margin-top: var(--pw-gap-tight);
}

/* Italic gloss: lowercase italic body-sm. */
.pw-t-gloss {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: var(--pw-ink-cream-dim);
  text-align: center;
}

/* Italic meta caption: sentence-case italic micro. */
.pw-t-meta {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  text-align: center;
  color: var(--pw-ink-cream-dim);
}

/* Stat tile primitive (value + label). */
.pw-t-stat { text-align: center; padding: 6px 4px; }
.pw-t-stat-v {
  font-weight: 600;
  font-size: var(--pw-font-caption);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}
.pw-t-stat-l {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.55;
  margin-top: 5px;
}
/* Data tokens (chemical formulae, source acronyms) render as-given. */
.pw-t-data,
.pw-t-stat-l.pw-t-data {
  text-transform: none;
}

/* Chart caption: header above a chart. Lowercase 0.14em micro. */
.pw-t-chart-caption {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.5;
  margin-top: var(--pw-gap-block);
  margin-bottom: 4px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pro toggle scaffolding
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Brand-mark corner becomes a <button>. data-pro on the section root
 * swaps default \u2194 pro view. Shared filled-disc visual lives here so
 * every section gets the same toggle visual without redeclaring it.
 *
 * Phase A.1 lands the scaffolding only; per-section pro views land
 * in Phase B as the shells migrate.
 */

button.pw-brand-mark-corner {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  border-radius: var(--pulse-radius-circle);
  transition: transform var(--pulse-anim-fast) ease;
}
button.pw-brand-mark-corner:hover {
  transform: scale(1.08);
}
button.pw-brand-mark-corner:focus-visible {
  outline: 2px solid var(--pulse-accent, var(--pw-vermilion));
  outline-offset: 3px;
}
/* Decorative brand mark (sections without a click action, Forecast,
   Atmosphere) sits at lower opacity so users don't try to tap it.
   Interactive marks live at full opacity, gain hover scale + focus
   ring above. */
div.pw-brand-mark-corner {
  opacity: 0.55;
}

/* Pro state: brand-mark circle fills as a solid \u6731 disc + dot dims. */
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .mc {
  fill: var(--pw-vermilion);
  stroke-width: 0;
  opacity: 1;
}
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .md {
  opacity: 0.7;
}

/* Default-vs-pro view swap (in-place fade replace). Sections that
   only have a default view today work fine, the rule has no effect
   without a sibling .pw-view-pro.
   The view wrapper inherits the same flex-column layout the content
   slot uses, so children inside a view keep their gap rhythm. */
.pw-view {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  transition: opacity var(--pulse-anim-medium) ease;
}
.pw-section[data-pro="false"] .pw-view-pro,
.pw-section[data-pro="true"]  .pw-view-default {
  display: none;
}

/* \u2500\u2500 Overview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-overview-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Location stamp: same anatomy as kicker but tighter tracking and
   smaller-cap aesthetic; rendered in Overview only via plain markup,
   not via t.kicker (which would add the trailing " \xB7"). */
.pw-overview-v2 .pw-loc-stamp {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.55;
  text-align: center;
}
.pw-overview-v2 .pw-hero-block {
  text-align: center;
  margin: 0;
}
/* Overview stats use vertical dividers between columns instead of a
   top hairline: gives a calmer visual rhythm under the busy hero
   block. */
.pw-overview-v2 .pulse-stats-row .pw-t-stat {
  padding: 7px 4px;
  border-right: 1px solid rgba(229, 217, 194, 0.1);
}
.pw-overview-v2 .pulse-stats-row .pw-t-stat:last-child {
  border-right: none;
}
.pw-overview-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: 7-day temperature spark sits between the day arc and the
   stats grid. Caption above, sparkline below, same anatomy as a
   chart-caption + chart pair anywhere else in the family. */
.pw-overview-v2 .pw-overview-spark-block {
  margin: 0;
}
.pw-overview-v2 .pw-overview-spark {
  height: 38px;
}
.pw-overview-v2 .pw-overview-storm {
  height: 24px;
}
.pw-overview-v2 .pw-overview-spark svg,
.pw-overview-v2 .pw-overview-storm svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-meteogram-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-meteogram-v2 .pw-meteogram-chart {
  position: relative;
  z-index: 2;
}
.pw-meteogram-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-forecast-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-forecast-v2 .pw-fc-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 0;
}
.pw-forecast-v2 .pw-fc-row {
  display: grid;
  grid-template-columns: 60px 24px 36px 1fr 60px;
  align-items: center;
  gap: var(--pulse-space-element);
  padding: 5px 0;
  font-size: var(--pw-font-caption);
}
.pw-forecast-v2 .pw-fc-row.is-today .pw-fc-day {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-day {
  color: var(--pw-ink-cream-dim);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-icon { text-align: center; font-size: 16px; }
.pw-forecast-v2 .pw-fc-pop {
  text-align: right;
  color: var(--pw-vermilion);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  font-size: var(--pulse-font-label);
}
.pw-forecast-v2 .pw-fc-pop:empty { visibility: hidden; }
.pw-forecast-v2 .pw-fc-bar {
  position: relative;
  height: 5px;
  background: rgba(229, 217, 194, 0.08);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-bar-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  /* Cool-to-warm temperature range gradient. The two cool stops are this
     bar's only consumers, so they stay raw hex rather than card tokens.
     #827a6a coincides with --pw-sky-bot's value but is a different concept
     (range-bar cool end, not sky), so binding to that token would couple the
     two and let a sky-colour change bleed into the forecast bar. */
  background: linear-gradient(90deg, #5e6776 0%, #827a6a 50%, var(--pw-vermilion) 100%);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-now {
  position: absolute;
  top: -3px;
  width: 6px;
  height: 11px;
  background: var(--pw-ink-cream);
  border-radius: var(--pulse-radius-bar);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-forecast-v2 .pw-fc-range {
  display: flex;
  justify-content: space-between;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.2px;
  gap: var(--pulse-space-chip);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-lo { color: var(--pw-ink-cream-dim); }
.pw-forecast-v2 .pw-fc-hi {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Astro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
/* (Night override below paints a deeper midnight palette.) */
/* After sunset / before sunrise the section paints a deeper midnight
   palette so the moon arc reads against night colour, not day. */
.pw-astro-v2.is-night {
  background: linear-gradient(180deg, #0a0e1f 0%, #131a35 55%, #1f2548 100%);
}
/* Sunrise/sunset labels are still informative at night ("here's when
   the sun will be back"), but they shouldn't dominate. Drop their
   contrast a touch. */
.pw-astro-v2.is-night .pw-t-kicker { opacity: 0.5; }
.pw-astro-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* \u2500\u2500 Hero (Daylight / Night + duration) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-hero {
  display: flex;
  align-items: baseline;
  gap: var(--pulse-space-panel);
  flex-wrap: wrap;
}
.pw-astro-v2 .pw-astro-hero-tier {
  font-size: var(--pulse-font-hero);
  font-weight: 500;
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
  color: var(--pw-warn-amber);
  text-transform: capitalize;
}
.pw-astro-v2.is-night .pw-astro-hero-tier { color: var(--pw-wind); }
.pw-astro-v2 .pw-astro-hero-num {
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}

/* \u2500\u2500 Moon hero row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-moon-hero {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-section);
  padding: var(--pw-gap-tight) 0;
}
.pw-astro-v2 .pw-astro-moon-glyph {
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px rgba(232, 224, 208, 0.25));
}
.pw-astro-v2 .pw-astro-moon-text {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-hairline);
}
.pw-astro-v2 .pw-astro-moon-name {
  font-size: var(--pulse-font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--pw-ink-cream-muted);
}
.pw-astro-v2 .pw-astro-moon-meta {
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
}
.pw-astro-v2 .pw-astro-moon-illum {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--pw-ink-cream-muted);
}

/* \u2500\u2500 24h ribbon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-rb {
  position: relative;
  height: 84px;
  border-radius: var(--pulse-radius-row);
  overflow: visible;
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-astro-rb-track {
  position: absolute;
  inset: 22px 0 24px 0;
  border-radius: var(--pulse-radius-element);
  box-shadow: inset 0 0 0 1px rgba(229, 217, 194, 0.1);
}
.pw-astro-v2 .pw-astro-rb-now {
  position: absolute;
  top: 14px;
  bottom: 16px;
  width: 2px;
  margin-left: -1px;
  background: var(--pw-ink-cream);
  box-shadow: 0 0 8px rgba(253, 246, 227, 0.7);
  z-index: 3;
}
/* Axis labels are absolutely positioned at their actual hour
   percentages (0 / 25 / 50 / 75 / 100) so the visual position of
   each tick matches the underlying timeline. A grid-based layout
   would centre intermediate labels inside their grid cells (30%
   / 50% / 70%) and create a 4\u20135% drift between label position and
   actual time: making NOW-cursor look misaligned even when its
   percentage is correct. */
.pw-astro-v2 .pw-astro-rb-axis {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.2em;
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
}
.pw-astro-v2 .pw-astro-rb-axis span {
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
}
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(1) { left: 0; transform: translateX(0); }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(2) { left: 25%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(3) { left: 50%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(4) { left: 75%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(5) { left: 100%; transform: translateX(-100%); }

/* The second stats row sits flush under the first, no divider, no
   extra margin: so they read as one block. */
.pw-astro-v2 .pulse-stats-row + .pulse-stats-row {
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Atmosphere \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmosphere-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(168, 61, 42, 0.14) 0%, transparent 70%),
    linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, #2a2a3a 100%);
}
.pw-atmosphere-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Vertical column visualisation: atmospheric profile up to 5km
   (auto-scales when freeze level or LCL exceed 4km). The CAPE fill
   grows from the surface up; the freeze level and LCL markers are
   absolutely-positioned tags + lines at their altitude bottom-%. */
.pw-atmosphere-v2 .pw-atmos-column-wrap {
  display: flex;
  gap: var(--pulse-space-panel);
  align-items: stretch;
  height: 200px;
  margin-top: var(--pw-gap-tight);
  padding: 0 4px;
}
.pw-atmosphere-v2 .pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.5;
  font-variant-numeric: tabular-nums;
}
.pw-atmosphere-v2 .pw-atmos-column {
  flex: 1;
  position: relative;
  background: rgba(229, 217, 194, 0.04);
  border-radius: var(--pulse-radius-pill);
  border: 1px solid rgba(229, 217, 194, 0.1);
  overflow: hidden;
}
.pw-atmosphere-v2 .pw-atmos-cape-fill {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  border-top: 1px solid var(--pw-vermilion);
}
.pw-atmosphere-v2 .pw-atmos-freeze-marker,
.pw-atmosphere-v2 .pw-atmos-lcl-marker {
  position: absolute;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-chip);
  padding-left: 6px;
}
.pw-atmosphere-v2 .pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: rgba(90, 200, 250, 0.5);
}
.pw-atmosphere-v2 .pw-atmos-freeze-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: var(--pw-wind);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(208, 208, 208, 0.45);
}
.pw-atmosphere-v2 .pw-atmos-lcl-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: rgba(208, 208, 208, 0.85);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.45;
}
.pw-atmosphere-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Wind (cartouche wrap only: rose preserved) \u2500 */
.pw-wind-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-wind-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Air quality \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-air-quality-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(255, 214, 10, 0.06) 0%, transparent 70%),
    linear-gradient(180deg, #2a2a1a 0%, #1a1a0a 50%, #0a0a0a 100%);
}
.pw-air-quality-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-air-quality-v2 .pw-aq-band {
  position: relative;
  height: 8px;
  background: linear-gradient(90deg,
    var(--pw-good-green) 0%,
    var(--pw-warn-yellow) 25%,
    var(--pw-warn-amber) 50%,
    var(--pw-warn-red) 75%,
    #8b0000 100%);
  border-radius: var(--pulse-radius-small);
}
.pw-air-quality-v2 .pw-aq-marker {
  position: absolute;
  top: -3px;
  width: 3px;
  height: 14px;
  background: var(--pw-ink-cream);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-air-quality-v2 .pw-aq-band-labels {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.08em;
  text-transform: lowercase;
  opacity: 0.6;
}
/* Pollutant tiles use the larger body size, the value here is a
   hero stat, not a chip. The grid layout itself comes from the
   shared .pulse-stats-row primitive. */
.pw-air-quality-v2 .pulse-stats-row .pw-t-stat-v {
  font-size: var(--pulse-font-section-title);
}
.pw-air-quality-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Alerts (airport ticker rows) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alerts-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-alerts-v2 .pw-alert-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 4px;
}
.pw-alerts-v2 .pw-alert-ticker {
  background: #000;
  border: 1px solid;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-row);
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  box-shadow: inset 0 0 12px;
}
.pw-alerts-v2 .pw-alert-tri {
  font-size: var(--pulse-font-body);
  animation: pw-alertBlink 1s step-end infinite;
}
.pw-alerts-v2 .pw-alert-yellow .pw-alert-tri { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-amber .pw-alert-tri { color: var(--pw-warn-amber); }
.pw-alerts-v2 .pw-alert-red .pw-alert-tri { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-alert-text {
  font-weight: 700;
  font-size: var(--pw-font-caption);
  letter-spacing: 0.08em;
  line-height: 1.4;
}
.pw-alerts-v2 .pw-alert-yellow .pw-alert-text {
  color: var(--pw-warn-yellow);
  text-shadow: 0 0 6px rgba(255, 214, 10, 0.5);
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-text {
  color: var(--pw-warn-amber);
  text-shadow: 0 0 6px rgba(255, 159, 10, 0.5);
}
.pw-alerts-v2 .pw-alert-red .pw-alert-text {
  color: var(--pw-warn-red);
  text-shadow: 0 0 6px rgba(255, 69, 58, 0.5);
}
.pw-alerts-v2 .pw-alert-timestamp {
  text-align: right;
  margin-top: 4px;
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  /* Secondary line: dim the tone token rather than baking a per-tier alpha
     into a hardcoded rgba, so the colour stays in sync with the family token. */
  opacity: 0.65;
}
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-yellow { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-amber { color: var(--pw-warn-amber); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-red { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-all-clear-v2 {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  color: var(--pw-ink-cream-dim);
  font-style: italic;
  letter-spacing: 0.04em;
  margin-top: 4px;
}
.pw-alerts-v2 .pw-all-clear-v2 strong {
  color: var(--pw-good-green);
  font-style: normal;
  font-weight: 600;
  display: block;
  font-size: var(--pulse-font-section-title);
  margin-bottom: 2px;
}
.pw-alerts-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: per-alert detail card. Each card stacks headline +
   meta line + description + locations vertically; the tone modifier
   (.pw-alert-yellow / .pw-alert-amber / .pw-alert-red) drives border +
   headline colour. */
.pw-alerts-v2 .pw-alert-detail {
  background: rgba(229, 217, 194, 0.04);
  border: 1px solid;
  border-radius: var(--pulse-radius-pill);
  padding: 10px 12px;
  margin-top: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-yellow {
  border-color: rgba(255, 214, 10, 0.3);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber {
  border-color: rgba(255, 159, 10, 0.3);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red {
  border-color: rgba(255, 69, 58, 0.45);
}
.pw-alerts-v2 .pw-alert-detail-head {
  font-weight: 600;
  font-size: var(--pulse-font-section-title);
  line-height: 1.3;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-yellow .pw-alert-detail-head {
  color: var(--pw-warn-yellow);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber .pw-alert-detail-head {
  color: var(--pw-warn-amber);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red .pw-alert-detail-head {
  color: var(--pw-warn-red);
}
.pw-alerts-v2 .pw-alert-detail-meta {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.55;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-desc {
  font-size: var(--pw-font-caption);
  line-height: 1.5;
  color: var(--pw-ink-cream-muted);
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-loc {
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  opacity: 0.6;
}
@keyframes pw-alertBlink {
  50% { opacity: 0.3; }
}
`;var es=[{type:"overview"}],Mp={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function cn(t){if(!t)return{type:"overview"};if(typeof t=="string")return cn({type:t});if(typeof t!="object")return{type:"overview"};let e=Pa.includes(t.type)?t.type:"overview";return{...Mp[e]||{},...t,type:e}}function os(t){if(!t||typeof t!="object")return{type:"custom:pulse-weather-card",sections:es.map(cn)};let e=t,o=Array.isArray(e.sections)&&e.sections.length>0?e.sections.map(cn):es.map(cn);return{type:e.type||"custom:pulse-weather-card",weather_entity:e.weather_entity||void 0,atmos_source:e.atmos_source||void 0,sections:o}}function Wi(t){let e=t.replace(/^weather\./,"");return e.endsWith(Ui)&&(e=e.slice(0,-Ui.length)),e}function ns(t,e){let o=e.weather_entity||Object.keys(t).find(p=>p.startsWith("weather."))||"",n=e.atmos_source||Wi(o),i={};for(let p of Ya){let d=`sensor.${n}_${p}`;d in t&&(i[p]=d)}let r=Object.keys(i).length>=Ka,a=r?i:{},s=[];if(e.alert_entities&&e.alert_entities.length>0)for(let p of e.alert_entities)p in t&&s.push(p);else if(r){for(let c of Xa){let m=`sensor.${n}_${c}`,u=`sensor.${n}_warnings_${c}`;m in t?s.push(m):u in t&&s.push(u)}let p=`binary_sensor.${n}_alert_active`,d=`binary_sensor.${n}_warnings_alert_active`;p in t?s.push(p):d in t&&s.push(d)}let l="sun.sun"in t?"sun.sun":null;return{weatherEntityId:o,atmosCe:a,sunEntityId:l,atmosSource:r?n:null,alertEntityIds:s}}function rs(t,e){return t.filter(o=>Number.isFinite(e(o)))}function gt(t,e=0){let o=Number(t);return Number.isFinite(o)?o:e}function pn(t,e,o,n,i,r=0){if(e?.[n]){let a=Number(t?.states?.[e[n]]?.state);if(Number.isFinite(a))return a}return Number(o?.[i]??r)||r}function as(t,e,o,n){return e?.[o]&&t?.states?.[e[o]]?.attributes?.unit_of_measurement||n}function so(t,e,o=0){let n=e?t?.states?.[e]:null;if(!n)return{value:o,unit:void 0,entity:null};let i=Number(n.state);return{value:Number.isFinite(i)?i:o,unit:n.attributes?.unit_of_measurement,entity:n}}function dn(t,e,o){let n=e?.state||"sunny",i=o?.sunEntityId?t?.states?.[o.sunEntityId]?.state:null;return{condition:n,isNight:n==="clear-night"||i==="below_horizon"}}function lo(t="pw-id"){return Te(t)}function ss(t){return`${t}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function un(t,e,o=36e5){let n=(e?e.getTime():Date.now())-o;return t.filter(i=>{let r=i.datetime;if(!r)return!1;let a=new Date(r).getTime();return Number.isFinite(a)&&a>=n})}function Vi(t){let e=Number(t);for(let o of an)if(e<=o.max)return o.color;return an[an.length-1].color}function ls(t){let e=Number(t);for(let o of sn)if(e<=o.max)return o.tier;return sn[sn.length-1].tier}function cs(t){let e=Number(t);for(let o of ln)if(e<=o.max)return o;return ln[ln.length-1]}function mn(t){let e=(Number(t)%360+360)%360,o=Math.round(e/22.5)%16;return Ga[o]}function Ue(t,e,o){if(!e||!o)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let n=new Date(e),i=new Date(o);if(isNaN(n.getTime())||isNaN(i.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let r=n.getTime()>t.getTime()?new Date(n.getTime()-864e5):n,a=i.getTime()>t.getTime()?i:new Date(i.getTime()-864e5);a.getTime()>r.getTime()+864e5&&(a=new Date(a.getTime()-864e5)),r.getTime()>a.getTime()&&(r=new Date(r.getTime()-864e5));let s=n.getTime()>t.getTime()?n:new Date(n.getTime()+864e5);return{todaySunrise:r,todaySunset:a,tomorrowSunrise:s}}function wt(t,e){if(!t||isNaN(t.getTime()))return null;if(!e)return t;let o=e.getTime(),n=[t,new Date(t.getTime()-864e5),new Date(t.getTime()+864e5)],i=n[0],r=Math.abs(i.getTime()-o);for(let a=1;a<n.length;a+=1){let s=Math.abs(n[a].getTime()-o);s<r&&(i=n[a],r=s)}return i}function zt(t,e,o){let n=e?Object.entries(e).map(([i,r])=>` ${i}="${r}"`).join(""):"";return o!=null?`<${t}${n}>${o}</${t}>`:`<${t}${n}/>`}function hn(t){return Ja[t]||"\u{1F324}\uFE0F"}var is={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function ps(t){return Object.hasOwn(is,t)?is[t]:t.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function Mt(t,e){let o=document.createElement(t);return o.className=e,o}function Z(t,e){return Math.random()*(e-t)+t}function co(t,e=60,o=1,n=2){let i=Math.min(e,qa);for(let r=0;r<i;r++){let a=Mt("div","pw-rain-drop"),s=Z(15,30),l=Z(.4,.8)/o;Object.assign(a.style,{left:`${Z(0,100)}%`,top:`${Z(-10,20)}%`,width:`${n}px`,height:`${s}px`,borderRadius:`0 0 ${n}px ${n}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${l}s linear ${Z(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(a)}}function Gi(t,e=40){let o=Math.min(e,Ua);for(let n=0;n<o;n++){let i=Mt("div","pw-snowflake"),r=Z(2,5);Object.assign(i.style,{left:`${Z(0,100)}%`,top:`${Z(-5,10)}%`,width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${Z(3,6)}s linear ${Z(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(i)}}function Fp(t){for(let e=0;e<4;e++){let o=Mt("div","pw-fog-layer");Object.assign(o.style,{position:"absolute",width:"200%",height:"40px",top:`${30+e*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${Z(15,25)}s linear ${e*2}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function fn(t){for(let e=0;e<8;e++){let o=Mt("div","pw-sun-ray");Object.assign(o.style,{position:"absolute",top:"-20px",left:`${10+e*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+e*4}deg)`,animation:`pw-rayPulse ${Z(3,5)}s ease-in-out ${Z(0,2)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function yt(t,e=4,o=1){let n=Math.min(e,Bi);for(let i=0;i<n;i++){let r=Mt("div","pw-cloud"),a=Z(80,160),s=Z(30,60),l=Z(20,40)/o;Object.assign(r.style,{position:"absolute",width:`${a}px`,height:`${s}px`,top:`${Z(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${l}s linear ${Z(0,15)}s infinite`,animationFillMode:"backwards"}),t.appendChild(r)}}function ji(t){for(let e=0;e<Wa;e++){let o=Mt("div","pw-star"),n=Z(1,3);Object.assign(o.style,{position:"absolute",left:`${Z(0,100)}%`,top:`${Z(0,70)}%`,width:`${n}px`,height:`${n}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${Z(2,5)}s ease-in-out ${Z(0,3)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function Ip(t,e){let o=[],n=t,i=0,r=Math.floor(Z(4,8)),a=e/r;o.push(`${n},${i}`);for(let s=0;s<r;s++)n+=Z(-15,15),i+=a,o.push(`${n},${i}`);return o.join(" ")}function ds(t,e=2,o){let n=o||Array.from({length:e},(r,a)=>a*3),i=Mt("div","pw-lightning-flash");Object.assign(i.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${n[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),t.appendChild(i);for(let r=0;r<e;r++){let a="http://www.w3.org/2000/svg",s=document.createElementNS(a,"svg");s.setAttribute("class","pw-lightning-bolt"),s.setAttribute("width","60"),s.setAttribute("height","200"),s.setAttribute("viewBox","0 0 60 200"),s.style.position="absolute",s.style.top="0",s.style.left=`${Z(15,75)}%`,s.style.pointerEvents="none",s.style.zIndex="2",s.style.animation=`pw-boltStrike 6s ease-in-out ${n[r]||0}s infinite`,s.style.animationFillMode="backwards";let l=Ip(30,180),p=document.createElementNS(a,"polyline");p.setAttribute("points",l),p.setAttribute("fill","none"),p.setAttribute("stroke","rgba(200,220,255,0.4)"),p.setAttribute("stroke-width","6"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),s.appendChild(p);let d=document.createElementNS(a,"polyline");d.setAttribute("points",l),d.setAttribute("fill","none"),d.setAttribute("stroke","#fff"),d.setAttribute("stroke-width","2"),d.setAttribute("stroke-linecap","round"),d.setAttribute("stroke-linejoin","round"),s.appendChild(d),t.appendChild(s)}}function Lp(t){let e=Mt("div","pw-heat-shimmer");Object.assign(e.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),t.appendChild(e);let o=Mt("div","pw-heat-ripple");Object.assign(o.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),t.appendChild(o)}function us(t,e,o){let n=Math.min(1,(e/75+o/150)/2);if(n<.05)return;let i=Mt("div","pw-smog-overlay");i.style.background=`rgba(120,110,80,${.05+n*.15})`,t.appendChild(i);let r=Mt("div","pw-haze-vignette");if(r.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${n*.3}) 100%)`,t.appendChild(r),mt())return;let a=Math.floor(n*20);for(let l=0;l<a;l++){let p=Mt("div","pw-dust-particle"),d=Z(1,3+n*3);Object.assign(p.style,{left:`${Z(0,100)}%`,top:`${Z(10,90)}%`,width:`${d}px`,height:`${d}px`,animationDelay:`${Z(0,8)}s`,animationFillMode:"backwards"}),t.appendChild(p)}let s=Math.floor(n*5);for(let l=0;l<s;l++){let p=Mt("div","pw-haze-blob"),d=Z(60,120);Object.assign(p.style,{left:`${Z(-10,80)}%`,top:`${Z(10,70)}%`,width:`${d}px`,height:`${d*.6}px`,animationDelay:`${Z(0,12)}s`,animationFillMode:"backwards"}),t.appendChild(p)}}function ms(t,e,o){let n=document.createDocumentFragment();if(mt())return n;try{e&&ji(n);let i=o?Math.round(o.total/100*Bi):0;switch(t){case"sunny":e||fn(n),o&&i>0&&yt(n,i);break;case"clear-night":o&&i>0&&yt(n,i);break;case"partlycloudy":e||fn(n),yt(n,o?i:3);break;case"cloudy":yt(n,o?Math.max(i,4):6);break;case"rainy":co(n,40,1,2),yt(n,o?Math.max(i,3):4);break;case"pouring":co(n,80,1.5,3),yt(n,o?Math.max(i,5):6);break;case"snowy":Gi(n,40),yt(n,o?Math.max(i,3):4);break;case"snowy-rainy":Gi(n,20),co(n,20,.8,1),yt(n,o?Math.max(i,3):4);break;case"hail":co(n,30,1.2,3),Gi(n,15),yt(n,o?Math.max(i,4):5);break;case"lightning":ds(n,2,[0,3]),yt(n,o?Math.max(i,5):6);break;case"lightning-rainy":ds(n,3,[0,2,4]),co(n,60,1.3,2),yt(n,o?Math.max(i,5):6);break;case"fog":Fp(n);break;case"windy":case"windy-variant":yt(n,o?i:3,1.5);break;case"exceptional":Lp(n);break;default:o&&i>0&&yt(n,i);break}}catch(i){console.warn(`${Nt} buildConditionFx threw: atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,i)}return n}function po(t,e,o){return o===e?0:Math.max(0,Math.min(1,(t-e)/(o-e)))}function Zi(t,e,o="ellipse"){let n=Math.max(0,Math.min(1,e)),i=Math.round(3+n*50),r=Math.round(2+n*25),a=Math.round(50+n*30),s=l=>l.toString(16).padStart(2,"0");return`radial-gradient(${o} at 50% 30%, ${t}${s(i)} 0%, ${t}${s(r)} ${a}%, transparent 90%)`}function hs(t,e=6,o=1.2){let n=Math.max(0,Math.min(1,t));return e-n*(e-o)}function fs(t,e="0,0,0"){let o=Math.max(0,Math.min(1,t));if(o<.1)return"";let n=Math.round(60-o*30),i=(o*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${n}%, rgba(${e},${i}) 100%)`}function gs(t,e=8,o=2){let n=Math.max(0,Math.min(1,t));return e-n*(e-o)}function vs(t,e){let o=e?Number(Ht(t,e,{hour:"2-digit",hourCycle:"h23"})):t.getHours();return o>=6&&o<12?"this morning":o>=12&&o<17?"this afternoon":o>=17&&o<21?"this evening":"tonight"}function Np(t,e){return t==="sunny"||t==="clear-night"?"Clear skies":t==="rainy"||t==="pouring"?"Rain":t==="snowy"||t==="snowy-rainy"?"Snow":t==="lightning"||t==="lightning-rainy"?"Storms":t==="fog"?"Fog":e>=88?"Overcast":e>=50?"Mostly cloudy":e>=12?"Some sun":"Sunny"}function zp(t){let e=t.slots.slice(0,6);if(e.length===0)return null;let o=Number(e[e.length-1].cloud_coverage),n=Number.isFinite(o)?o-t.cloudCoverNow:0,i=e.reduce((p,d)=>Math.max(p,Number(d.precipitation_probability)||0),0),r=e.reduce((p,d)=>Math.max(p,Number(d.snowfall)||0),0),s=e.reduce((p,d)=>Math.max(p,Number(d.wind_speed)||0),t.windSpeed)-t.windSpeed;return["moderate","high"].includes(t.stabilityState)?"with thunderstorms developing":i>=60?r>0?"with snow likely":"with rain likely":i>=40?r>0?"with snow possible":"with a brief shower or two":n>=30?"then increasing clouds":n<=-30?"then clearing":s>=8?"with wind firming":null}function bs(t){let e=Np(t.conditionNow,Number(t.cloudCoverNow)||0),o=zp(t),n=o?vs(t.now,t.timeZone):null,i;return o?o.startsWith("then ")?i=`${e}, ${o} ${n}.`:i=`${e}, then ${o} ${n}.`:i=`${e} ${vs(t.now,t.timeZone)}.`,{initial:e,transition:o,anchor:n,sentence:i}}var Rp="#a83d2a",ws="#7a2d20",we="#fdf6e3",Hp='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',Dp="</svg>";function ys(t){let e=["day","cloudy","rain","night"].includes(t)?t:"day",n=`<circle class="mc" cx="20" cy="20" r="18" fill="${e==="night"?ws:Rp}" opacity="0.92"/>`,i=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${we}" stroke-width="0.8" opacity="0.85"/>`,r="";return e==="day"?r=`<circle class="md" cx="20" cy="14" r="2.4" fill="${we}" opacity="0.95"/>`:e==="cloudy"?r=`<circle class="md" cx="20" cy="14" r="2.4" fill="${we}" opacity="0.45"/>`:e==="rain"?r=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${we}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${we}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${we}" stroke-width="0.7" opacity="0.55"/>`].join(""):e==="night"&&(r=`<circle class="md" cx="20" cy="14" r="2.4" fill="${we}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${ws}"/>`),`${Hp}${n}${i}${r}${Dp}`}function St(t,e){return e?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(t)?"rain":["cloudy","fog"].includes(t)?"cloudy":"day"}var B={kicker(t){return`<div class="pw-t-kicker">${f(t)}</div>`},heroTier(t,{flavor:e="aqi",color:o=""}={}){let n=e==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",i=o?` style="color:${k(o)}"`:"";return`<div class="pw-t-hero-tier ${n}"${i}>${f(t)}</div>`},display(t,{color:e="",suffix:o=""}={}){let n=e?` style="color:${k(e)}"`:"",i=o?`<span class="pw-t-display-suf">${f(o)}</span>`:"";return`<div class="pw-t-display"${n}>${f(String(t))}${i}</div>`},narrative(t){return`<div class="pw-t-narrative">${f(t)}</div>`},gloss(t){return`<div class="pw-t-gloss">${f(t)}</div>`},meta(t){return`<div class="pw-t-meta">${f(t)}</div>`},chartCaption(t){return`<div class="pw-t-chart-caption">${f(t)}</div>`},stat(t,e,{data:o=!1,valueColor:n=""}={}){let i=n?` style="color:${k(n)}"`:"",r=o?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${i}>${f(String(t))}</div><div class="${r}">${f(e)}</div></div>`},statLabel(t){return`<span class="pw-t-stat-l">${f(t)}</span>`},dataToken(t){return`<span class="pw-t-data">${t}</span>`},heroBlock({tier:t="",tierFlavor:e="aqi",tierColor:o="",value:n="",valueSuffix:i="",valueColor:r="",narrative:a=""}={}){let s=t?this.heroTier(t,{flavor:e,color:o}):"",l=n!==""?this.display(n,{color:r,suffix:i}):"",p=a?this.narrative(a):"";return`<div class="pw-hero-block">${s}${l}${p}</div>`},statsRow(t,{columns:e=4,divided:o=!1}={}){let n=t.filter(Boolean);return n.length?`<div class="pulse-stats-row" data-cols="${e}"${o?' data-divided="true"':""}>${n.join("")}</div>`:""}};function vt({sectionClass:t,ariaLabel:e,brandVariant:o,kicker:n="",narrative:i="",preContent:r="",extraSectionClass:a="",sectionStyle:s="",body:l,proView:p="",proInitial:d=!1,proAction:c="view-swap",proAriaLabel:m="Toggle pro view",pro:u=!0}){u===!1&&(p="",c="view-swap",d=!1);let h=s?` style="${s}"`:"",g=`pw-section pw-cartouche ${t}${a?` ${a}`:""}`,v=ys(o),w=[n?B.kicker(n):"",i?B.narrative(i):""].filter(Boolean).join(""),b=w?`<div class="pw-t-marg">${w}</div>`:"",y=!!p,_=y||c!=="view-swap",S=y?`<div class="pw-view pw-view-default">${l}</div><div class="pw-view pw-view-pro">${p}</div>`:l,$=d?"true":"false",A=_?`<button class="pw-brand-mark-corner" aria-label="${f(m)}" aria-pressed="${$}" type="button">${v}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${v}</div>`;return`
    <div class="${g}" data-pro="${$}" data-pro-action="${c}"${h} role="region" aria-label="${f(e)}">
      ${r}
      ${A}
      <div class="pw-content">
        ${b}
        ${S}
      </div>
    </div>`}function Op(t,e,o){let n=t.map(d=>{let c=Number(d.cape);return Number.isFinite(c)?c:0}),i=Math.max(...n,300),r=Math.max(...n),a=n.indexOf(r),l=n.map((d,c)=>({x:c/Math.max(t.length-1,1)*e,y:o-d/i*o})).map((d,c)=>`${c===0?"M":"L"}${d.x.toFixed(1)},${d.y.toFixed(1)}`).join(" "),p=`${l} L${e},${o} L0,${o} Z`;return{svgPath:l,areaPath:p,peakValue:r,peakIndex:a,maxCape:i}}function Pp(t,e,o,n,i,r,a,s){let l=[];return a>0&&l.push({name:"Snow",value:a,unit:s}),o>0&&l.push({name:"Rain",value:o,unit:n}),i>0&&l.push({name:"Showers",value:i,unit:r}),l.length>0?`${l.map(d=>`${f(d.name)} ${f(d.value.toFixed(1))} ${f(d.unit)}`).join(" \xB7 ")} now`:t>0?`Precipitation: next 12h \xB7 ${f(t.toFixed(1))} ${f(e)} now`:"Precipitation: next 12h"}function _s({hass:t,config:e,discovery:o,weatherEntity:n,forecastData:i}){let r=n.attributes,a=o.atmosCe,s=o.sunEntityId||"",l=it(t),{condition:p,isNight:d}=dn(t,n,o),c=(ot,nt)=>pn(t,a,r,ot,nt),m=(ot,nt)=>as(t,a,ot,nt),u=c("temperature","temperature"),h=c("humidity","humidity"),g=c("wind_speed","wind_speed"),v=c("wind_direction","wind_bearing"),w=c("wind_gusts","wind_gust_speed")||c("wind_gusts","wind_gusts"),b=c("dew_point","dew_point"),y=c("visibility","visibility"),_=c("pressure","pressure"),S=pt(r),$=m("temperature",S),A=m("visibility","km"),M=m("pressure","hPa"),I=m("dew_point",S),L=i?.daily,T=i?.hourly,C=r.forecast,x=u,E=u;if(L&&L.length>0){let ot=L[0],nt=Number(ot.templow),J=Number(ot.temperature);Number.isFinite(nt)&&Number.isFinite(J)&&(x=Math.min(nt,J),E=Math.max(nt,J))}else if(T&&T.length>0){let ot=Date.now(),nt=new Date;nt.setHours(23,59,59,999);let J=nt.getTime(),bt=1/0,ut=-1/0;for(let Zt of T.slice(0,24)){let at=Date.parse(String(Zt.datetime??""));if(Number.isFinite(at)&&(at<ot||at>J))continue;let Ft=Number(Zt.temperature);Number.isFinite(Ft)&&(Ft<bt&&(bt=Ft),Ft>ut&&(ut=Ft))}Number.isFinite(bt)&&Number.isFinite(ut)&&bt!==ut&&(x=Math.min(bt,u),E=Math.max(ut,u))}else if(C&&C.length>0){let ot=C[0],nt=Number(ot.templow),J=Number(ot.temperature);Number.isFinite(nt)&&Number.isFinite(J)&&(x=Math.min(nt,J),E=Math.max(nt,J))}let F=o.atmosCe.uv_index,N=Number(F?t.states[F]?.state:r.uv_index),z=Number.isFinite(N)?N:null,{value:R,unit:O}=so(t,a.precipitation),V=O||"mm",{value:q,unit:D}=so(t,a.rain),{value:W,unit:P}=so(t,a.showers),{value:H,unit:U}=so(t,a.snowfall),Y=D||"mm",j=P||"mm",et=U||"cm",rt=a.dew_point_comfort?t.states[a.dew_point_comfort]:null,lt=a.visibility_category?t.states[a.visibility_category]:null,kt=a.feels_like_context?t.states[a.feels_like_context]:null,Rt=a.pressure_trend?t.states[a.pressure_trend]:null,jt=new Date,_t=s?t.states[s]:null,yn=_t?.attributes?.next_rising,_n=_t?.attributes?.next_setting,{todaySunrise:Ge,todaySunset:le,tomorrowSunrise:je}=Ue(jt,yn,_n),Qt=null;o.atmosCe.cloud_cover&&(Qt={total:Number(t.states[o.atmosCe.cloud_cover]?.state)||0,low:Number(t.states[o.atmosCe.cloud_cover_low]?.state)||0,mid:Number(t.states[o.atmosCe.cloud_cover_mid]?.state)||0,high:Number(t.states[o.atmosCe.cloud_cover_high]?.state)||0});let xn=(a.stability_assessment?t.states[a.stability_assessment]:null)?.state||"",$n=mn(v),Sn=`data-condition="${f(p)}" data-night="${d}" data-cloud='${f(JSON.stringify(Qt||""))}'`,kn=po(u,20,42),Tn=po(u,15,-10),te=Math.max(kn,Tn),_e=fs(te),er=_e?`<div class="pw-tension-vignette" style="background: ${k(_e)}"></div>`:"",or=kt?.state||"",An=kt?.attributes?.difference,fo="";if(An!=null){let ot=Math.round(Number(An));or==="wind_chill"?fo=`Wind chill ${ot}\xB0`:or==="heat_index"&&(fo=`Heat index +${ot}\xB0`)}let Js=rt?.state||"",nr=w>g+5,ir="",rr=s?t.states[s]:null;if(rr&&Ge&&le&&je){let ot=jt.getTime(),nt=rr.state==="above_horizon",J,bt,ut,Zt,at;if(nt){let Yt=Ge.getTime(),xt=le.getTime(),xe=Math.max(xt-Yt,1);J=Math.max(0,Math.min(100,(ot-Yt)/xe*100)),bt=G(Ge,l),ut=G(le,l),Zt="background: linear-gradient(to right, #ff9f0a, #ffd60a)",at="#ff9f0a"}else{let Yt=le.getTime(),xt=je.getTime(),xe=Math.max(xt-Yt,1);J=Math.max(0,Math.min(100,(ot-Yt)/xe*100)),bt=G(le,l),ut=G(je,l),Zt="background: linear-gradient(to right, #1a3050, #5ac8fa)",at="#5ac8fa"}let Ft=`left:${Number(J)}%; background:${k(at)}; box-shadow: 0 0 6px ${k(at)}66`,ce=` style="color:${k(at)}"`,pe=nt?"":"\u{1F319}";ir=`
      <div class="pw-day-arc">
        <span class="pw-day-arc-label"${ce}>${f(bt)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(J)}%; ${Zt}"></div>
          <div class="pw-day-arc-marker" style="${Ft}">${pe}</div>
        </div>
        <span class="pw-day-arc-label"${ce}>${f(ut)}</span>
      </div>`}let Cn="",ar="",sr=i?.hourly||[];if(sr.length>0){let J=un(sr,new Date).slice(0,12),bt=Pp(R,V,q,Y,W,j,H,et);if(R>0?Cn=bt:Cn=bs({now:new Date,cloudCoverNow:Qt?Qt.total:0,conditionNow:p,slots:J,windSpeed:g,uvIndex:z,stabilityState:xn,timeZone:l}).sentence,J.some(ut=>Number(ut.cape)>300)){let at=Op(J,320,24),Ft=J[at.peakIndex]?.datetime?new Date(J[at.peakIndex].datetime):null,ce=at.peakValue>=1e3?`${(at.peakValue/1e3).toFixed(1)}k`:String(Math.round(at.peakValue)),pe=Ft?`storm risk \xB7 peak ${ce} J/kg at ${G(Ft,l)}`:`storm risk \xB7 peak ${ce} J/kg`,Yt=lo("pw-cape-grad");ar=`<div class="pw-overview-spark-block">
        ${B.chartCaption(pe)}
        <div class="pw-overview-storm">
          <svg viewBox="0 0 320 24" preserveAspectRatio="none" role="img" aria-label="${f(pe)}">
            <defs>
              <linearGradient id="${Yt}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--pw-warn-amber)" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="var(--pw-warn-amber)" stop-opacity="0.04"/>
              </linearGradient>
            </defs>
            <path d="${at.areaPath}" fill="url(#${Yt})"/>
            <path d="${at.svgPath}" fill="none" stroke="var(--pw-warn-amber)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>`}}let Qs=ps(p),tl=St(p,d),el=e?.location_label||"Now",ol=Qt?Math.round(Qt.total)+"%":"--",nl=`
        <div class="pw-loc-stamp">${f(el)} \xB7 ${f(G(new Date,l))}</div>
        <div class="pw-hero-block">
          ${B.display(Math.round(u),{suffix:$})}
          ${B.gloss(`${Qs}${fo?" \xB7 "+fo:""}`)}
        </div>`,il=B.statsRow([B.stat(`${Math.round(x)}/${Math.round(E)}\xB0`,"range"),B.stat(`${Math.round(g)}${nr?` / ${Math.round(w)}`:""} ${$n}`,nr?"wind / gust":"wind"),B.stat(z!==null?Math.round(z):"--","uv"),B.stat(ol,"cloud")],{columns:4}),go=(i?.daily||[]).slice(0,7),En="";if(go.length>=2){let J=go.map(xt=>Number(xt.temperature)||0),bt=go.map(xt=>Number(xt.templow??xt.temperature)||0),ut=Math.min(...bt),Zt=Math.max(...J),at=Math.max(Zt-ut,1),Ft=xt=>xt/(go.length-1)*320,ce=xt=>38-(xt-ut)/at*34-2,pe=J.map((xt,xe)=>`${xe===0?"M":"L"}${Ft(xe).toFixed(1)},${ce(xt).toFixed(1)}`).join(" ");En=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${pe} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${pe}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let rl=En?`<div class="pw-overview-spark-block">
        ${B.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${En}</div>
      </div>`:"",lr=lt?.state||"",Mn=Rt?.state||"",al=[Number.isFinite(h)&&h>0,Number.isFinite(b)&&b!==0,!!lr,!!Mn].filter(Boolean).length>=2,cr="";if(al){let ot=Number.isFinite(h)&&h>0?B.stat(`${Math.round(h)}%`,Js||"humidity"):B.stat("\u2014","humidity"),nt=Number.isFinite(b)?B.stat(`${Math.round(b)}${I}`,"dew point"):B.stat("\u2014","dew point"),J=Number.isFinite(_)&&_>0?B.stat(`${Math.round(_)}`,Mn?`${M} ${Mn}`:M):B.stat("\u2014","pressure"),bt=Number.isFinite(y)&&y>0?B.stat(`${y.toFixed(y<10?1:0)}${A}`,lr||"visibility"):B.stat("\u2014","visibility");cr=B.statsRow([ot,nt,J,bt],{columns:4})}let sl=`
        ${nl}
        ${B.narrative(Cn)}
        ${ir}
        ${rl}
        ${ar}
        ${il}
        ${cr}`;return vt({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:tl,preContent:`${er}<div class="pw-fx" ${Sn} role="img" aria-label="${f(p)} weather effects"></div>`,body:sl,pro:e?.pro!==!1})}function Bp(t,e){if(!t||t.length===0)return"Forecast unavailable";let o=0;for(let s=1;s<t.length;s++)Number(t[s].temperature)>Number(t[o].temperature)&&(o=s);let n=t.findIndex(s=>Number(s.precipitation_probability)>=50),i=s=>s===0?"today":Ht(new Date(String(t[s].datetime||"")),e,{weekday:"short"}).toLowerCase(),r=i(o),a=Math.round(Number(t[o].temperature));return n>=0&&n!==o?`Warmest ${r} (${a}\xB0) \xB7 rain ${i(n)}`:n>=0?`Wet stretch \xB7 warmest ${r} (${a}\xB0)`:`Warmest ${r} (${a}\xB0) \xB7 dry through the week`}function xs({hass:t,config:e,discovery:o,forecastData:n,weatherEntity:i}){let r=n?.daily||[];if(r.length===0)return null;let a=it(t),s=o.atmosCe,l=s.temperature?t.states[s.temperature]:null,p=pt({unit_of_measurement:l?.attributes?.unit_of_measurement,temperature_unit:i?.attributes?.temperature_unit}),d=r.slice(0,7),c=d.flatMap($=>[gt($.temperature,0),gt($.templow,0)]),m=Math.min(...c),u=Math.max(...c),h=Math.max(u-m,1),g=Number(i?.attributes?.temperature),v=d.map(($,A)=>{let M=gt($.temperature,0),I=gt($.templow,0),L=Math.round(Number($.precipitation_probability)||0),T=A===0,C=T?"today":Ht(new Date(String($.datetime||"")),a,{weekday:"short"}).toLowerCase(),x=hn(String($.condition||"")),E=L>=50?`<span class="pw-fc-pop">${f(String(L))}%</span>`:'<span class="pw-fc-pop"></span>',F=(I-m)/h*100,N=(M-I)/h*100,z=T&&Number.isFinite(g)?`<span class="pw-fc-now" style="left:${k(((g-m)/h*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${T?" is-today":""}">
        <span class="pw-fc-day">${f(C)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${x}</span>
        ${E}
        <span class="pw-fc-bar" aria-label="High ${Math.round(M)}${f(p)}, low ${Math.round(I)}${f(p)}">
          <span class="pw-fc-bar-fill" style="left:${k(F.toFixed(2)+"%")};width:${k(N.toFixed(2)+"%")}"></span>
          ${z}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${f(String(Math.round(I)))}\xB0</span>
          <span class="pw-fc-hi">${f(String(Math.round(M)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:w,isNight:b}=dn(t,i,o),y=St(w,b),_=Bp(d,a),S=`
        <div class="pw-fc-list" role="list">
          ${v}
        </div>`;return vt({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:y,kicker:"the week ahead",narrative:_,body:S,pro:e?.pro!==!1})}var We=240,Vt=We/2,Gt=We/2,uo=90,$s=.12,gn=6,vn=.5,Ss=.25,qp=.3,Up=6,ks=.7,Wp=.2,Vp=4,Gp=3.3,jp=15,Zp=35,Yp=.08,Xp=.2,Kp=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function Ts(t){return(t-90)*Math.PI/180}function Jp(t){let e=t*Math.PI/180;return{x:Math.sin(e),y:-Math.cos(e)}}function se(t,e){return{x:Vt+e*Math.cos(t),y:Gt+e*Math.sin(t)}}function Qp(t,e,o,n){let i=Math.min(t/qe,1)*uo,r=se(e-Ss,i),a=se(e+Ss,i),s=o>qp?"pw-gust-sweep":"",l=Math.max(.6,2.5-o*2).toFixed(2),p=(.15+o*.3).toFixed(2),d=`transform-origin:${Vt}px ${Gt}px;--gust-dur:${l}s;--gust-peak:${p}`;return zt("path",{class:s,d:`M${Vt},${Gt} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${a.x.toFixed(1)},${a.y.toFixed(1)} Z`,fill:n,opacity:.15,style:d})}function td(t,e,o,n){let i=Math.min(t/qe,1)*uo,r=se(e,i),a=se(e-$s,i*.7),s=se(e+$s,i*.7),l={x:r.x-gn*Math.cos(e-vn),y:r.y-gn*Math.sin(e-vn)},p={x:r.x-gn*Math.cos(e+vn),y:r.y-gn*Math.sin(e+vn)},d=o*Up,c=Math.max(.4,4-o*3.6),m=d>Wp?`animation:pw-arrowSway ${c.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(d*ks).toFixed(2)}deg;--sway-back:${(-d*(1-ks)).toFixed(2)}deg`:"",u=`transform-origin:${Vt}px ${Gt}px;filter:drop-shadow(0 0 6px ${oe(n,.38)});${m}`,h=zt("path",{d:`M${Vt},${Gt} L${a.x.toFixed(1)},${a.y.toFixed(1)} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${s.x.toFixed(1)},${s.y.toFixed(1)} Z`,fill:n,opacity:.5}),g=zt("line",{x1:Vt,y1:Gt,x2:r.x.toFixed(1),y2:r.y.toFixed(1),stroke:n,"stroke-width":2.5,"stroke-linecap":"round"}),v=zt("path",{d:`M${r.x.toFixed(1)},${r.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)} Z`,fill:n});return zt("g",{style:u},h+g+v)}function As({hass:t,config:e,discovery:o,weatherEntity:n}){let i=n.attributes,r=o.atmosCe,a=e.speed_mode||"speed",s=(P,H)=>pn(t,r,i,P,H),l=s("wind_speed","wind_speed"),p=s("wind_gusts","wind_gust_speed")||s("wind_gusts","wind_gusts")||l,d=s("wind_direction","wind_bearing"),m=(r.wind_speed?t.states[r.wind_speed]:null)?.attributes?.unit_of_measurement||i.wind_speed_unit||"km/h",u=a==="gust"?p:l,h=Math.min(l/qe,1),g=cs(u),v=ls(u),w=rn[v]||rn.calm,b=mn(d),y=Ts(d),_=Jp(d),S=Math.round(h*Ba),$=Vp-h*Gp,A=Yp+h*Xp,M=jp+h*Zp,I=-_.y,L=_.x,T=[];for(let P=0;P<S;P++){let H=(Math.random()-.5)*400,U=-120-Math.random()*60,Y=420+Math.random()*60,j=(M*(.6+Math.random()*.8)).toFixed(1),et=($+Math.random()*$*.5).toFixed(2),rt=(Math.random()*3).toFixed(2),lt=(A*(.5+Math.random()*.5)).toFixed(3),kt=(U*_.x+H*I).toFixed(1),Rt=(U*_.y+H*L).toFixed(1),jt=(Y*_.x+H*I).toFixed(1),_t=(Y*_.y+H*L).toFixed(1);T.push(`<div class="pw-streak" style="left:50%;top:50%;width:${j}px;height:1px;transform:rotate(${d-90}deg);animation-duration:${et}s;animation-delay:${rt}s;opacity:${lt};background:linear-gradient(to right, transparent, ${oe(w,.27)}, transparent);--sx:${kt}px;--sy:${Rt}px;--ex:${jt}px;--ey:${_t}px"></div>`)}let C=[];for(let P=1;P<=3;P++)C.push(zt("circle",{cx:Vt,cy:Gt,r:P*30,fill:"none",stroke:w,"stroke-width":.5,opacity:.08+P*.02}));for(let P of Kp){let H=Ts(P.a),U=se(H,20),Y=se(H,uo+4),j=se(H,uo+16),et=P.l.length===1;C.push(zt("line",{x1:U.x.toFixed(1),y1:U.y.toFixed(1),x2:Y.x.toFixed(1),y2:Y.y.toFixed(1),stroke:w,"stroke-width":.5,opacity:.12})),C.push(zt("text",{x:j.x.toFixed(1),y:j.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:et?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":et?11:9,"font-weight":et?600:400},f(P.l)))}C.push(Qp(p,y,h,w)),C.push(td(u,y,h,w)),(u>qe||p>qe)&&C.push(zt("circle",{cx:Vt,cy:Gt,r:uo+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),C.push(zt("circle",{cx:Vt,cy:Gt,r:18,fill:w,opacity:.06})),C.push(zt("circle",{cx:Vt,cy:Gt,r:3,fill:w}));let E=h>Pi?(h-Pi)*5:0,F=Math.max(.15,.4-h*.25),N="";E>.1&&(N=`--dx:${(E*_.x).toFixed(2)}px;--dy:${(E*_.y).toFixed(2)}px;animation:pw-roseShake ${F.toFixed(2)}s ease-in-out infinite`);let z=Math.round(12+h*50).toString(16).padStart(2,"0"),R=Math.round(6+h*25).toString(16).padStart(2,"0"),O=ss(`radial-gradient(ellipse at 50% 50%, ${w}${z} 0%, ${w}${R} 40%, transparent 85%)`),V=St(n?.state||"sunny",!1),q=a==="gust",D=q?"wind \xB7 gust":"wind",W=`
        <div class="pw-wind-streaks">${T.join("")}</div>
        <div class="pw-rose-wrap" style="${N}">
          <svg class="pw-rose-svg" width="${We}" height="${We}" viewBox="0 0 ${We} ${We}" style="display:block" role="img" aria-label="Wind compass rose showing ${f(Math.round(u))} ${f(m)} from ${f(b)}">
            <title>Wind direction compass</title>
            ${C.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${k(w)}">${f(Math.round(u))}</div>
            <div class="pw-wind-unit">${f(m)} \xB7 ${f(Math.round(d))}\xB0 ${f(b)}</div>
            <div class="pw-wind-beaufort" style="color: ${k(w)}">${f(g.name)}</div>
            <div class="pw-wind-beaufort-desc">${f(g.desc)}</div>
          </div>
        </div>`;return vt({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:V,kicker:D,sectionStyle:`background: ${k(O)}`,body:W,proAction:"wind-mode",proInitial:q,proAriaLabel:"Toggle speed and gust mode",pro:e.pro!==!1})}function ed(t,e,o,n){if(o&&n){let a=(e==="us"?Oi:Di).find(s=>s.label.toLowerCase()===o.toLowerCase());return{label:o,color:n,desc:a?.desc||""}}let i=e==="us"?Oi:Di;for(let r of i)if(t<=r.max)return r;return i[i.length-1]}function od(t){let e=(t||"").toLowerCase();return e.includes("very unhealthy")||e.includes("hazardous")||e.includes("extremely poor")?"very_unhealthy":e.includes("sensitive")?"unhealthy_sg":e.includes("unhealthy")||e.includes("very poor")?"unhealthy":e.includes("poor")?"unhealthy_sg":e.includes("moderate")||e.includes("fair")?"moderate":e.includes("good")?"good":"unknown"}var Cs=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function Es({hass:t,config:e,discovery:o,weatherEntity:n}){let i=e.scale||"eu",r=i==="us"?"us_aqi":"european_aqi",a=e.aqi_entity||o.atmosCe[r];if(!a||!t.states[a])return null;let s=t.states[a],l=Number(s.state);if(!Number.isFinite(l))return null;let p=s.attributes?.category||null,d=s.attributes?.color||null,c=ed(l,i,p,d),m=E=>{let F=o.atmosCe[E];if(!F||!t.states[F])return null;let N=Number(t.states[F].state);return Number.isFinite(N)?N:null},u=m("pm2_5"),h=m("pm10"),g=m("ozone"),v=m("nitrogen_dioxide"),w=m("sulphur_dioxide"),b=m("carbon_monoxide"),y=od(c.label),_=Cs[y]||Cs.unknown,S=St("cloudy",!1),$=i==="us",M=Math.min(100,Math.max(0,l/($?300:100)*100)),I=$?"air quality \xB7 us":"air quality",L=B.heroBlock({value:Math.round(l),valueColor:_,tier:c.label,tierFlavor:"aqi",tierColor:_}),T=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${k(`${M.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,C=B.statsRow([u!==null?B.stat(Math.round(u),"PM2.5",{data:!0}):"",h!==null?B.stat(Math.round(h),"PM10",{data:!0}):"",g!==null?B.stat(Math.round(g),"O\u2083",{data:!0}):"",v!==null?B.stat(Math.round(v),"NO\u2082",{data:!0}):"",w!==null?B.stat(Math.round(w),"SO\u2082",{data:!0}):"",b!==null?B.stat(b.toFixed(1),"CO",{data:!0}):""],{columns:3}),x=`
        ${L}
        ${T}
        ${C}`;return vt({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:S,kicker:I,body:x,proAction:"aqi-scale",proInitial:$,proAriaLabel:"Toggle EU and US AQI scale",pro:e.pro!==!1})}function nd(t){let e=(t%$t+$t)%$t;return Qa[Math.floor(e/$t*8)%8]}function id(t){return(t%$t+$t)%$t<$t/2}var Yi=864e5;function rd(t,e,o,n,i){if(n==null)return`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#c8d0e0"/>`;let r=Math.max(0,Math.min(1,n/100)),a=i!=null?id(i):!0,s=`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#2a2a3a"/>`;if(r>=.99)s+=`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#e8e0d0"/>`;else if(r>.01){let l=e-o,p=e+o,d=(o*Math.abs(2*r-1)).toFixed(1),c=r>.5?1:0,m;a?m=`M${t.toFixed(1)},${l.toFixed(1)} A${o},${o} 0 0 1 ${t.toFixed(1)},${p.toFixed(1)} A${d},${o} 0 0 ${c} ${t.toFixed(1)},${l.toFixed(1)} Z`:m=`M${t.toFixed(1)},${l.toFixed(1)} A${o},${o} 0 0 0 ${t.toFixed(1)},${p.toFixed(1)} A${d},${o} 0 0 ${1-c} ${t.toFixed(1)},${l.toFixed(1)} Z`,s+=`<path d="${m}" fill="#e8e0d0"/>`}return s}var bn="#050510",Ms="#0a1226",Fs="#172b4f",Is="#1f3d6e",Ls="#3a6fa8",Ns="#d97a3a",zs="#ff9f0a",Rs="#ffc560",Hs="#7eaedb",Ds="#2c5a8e",Os="#ffd60a";function ad(t,e,o,n,i,r,a,s,l,p){let d=new Date(t.getTime());d.setHours(0,0,0,0);let c=t.getTime(),m=e.getTime(),u=(o??new Date(c-35*6e4)).getTime(),h=(n??new Date(c-30*6e4)).getTime(),g=(i??new Date(c-6*6e4)).getTime(),v=(r??new Date(c+30*6e4)).getTime(),w=(a??new Date(m-30*6e4)).getTime(),b=(s??new Date(m+6*6e4)).getTime(),y=(l??new Date(m+30*6e4)).getTime(),_=(p??new Date(m+35*6e4)).getTime(),S=(c+m)/2,$=x=>Math.max(0,Math.min(100,x)),A=x=>$((x-d.getTime())/Yi*100),M=(x,E)=>A((x+E)/2),I=Math.min(60,(m-c)/8)*6e4,L=S-I,T=S+I;return`linear-gradient(to right, ${[`${bn} 0%`,`${bn} ${A(u).toFixed(2)}%`,`${Ms} ${M(u,h).toFixed(2)}%`,`${Fs} ${A(h).toFixed(2)}%`,`${Is} ${M(h,g).toFixed(2)}%`,`${Ls} ${A(g).toFixed(2)}%`,`${Ns} ${M(g,c).toFixed(2)}%`,`${zs} ${A(c).toFixed(2)}%`,`${Rs} ${M(c,v).toFixed(2)}%`,`${Hs} ${A(v).toFixed(2)}%`,`${Ds} ${M(v,L).toFixed(2)}%`,`${Os} ${A(L).toFixed(2)}%`,`${Os} ${A(T).toFixed(2)}%`,`${Ds} ${M(T,w).toFixed(2)}%`,`${Hs} ${A(w).toFixed(2)}%`,`${Rs} ${M(w,m).toFixed(2)}%`,`${zs} ${A(m).toFixed(2)}%`,`${Ns} ${M(m,b).toFixed(2)}%`,`${Ls} ${A(b).toFixed(2)}%`,`${Is} ${M(b,y).toFixed(2)}%`,`${Fs} ${A(y).toFixed(2)}%`,`${Ms} ${M(y,_).toFixed(2)}%`,`${bn} ${A(_).toFixed(2)}%`,`${bn} 100%`].join(", ")})`}function Ps(t){if(!t||isNaN(t)||t<=0)return"--";let e=Math.round(t/6e4),o=Math.floor(e/60),n=e%60;return`${o}h ${String(n).padStart(2,"0")}m`}function Bs({hass:t,config:e,discovery:o}){let n=new Date,i=it(t),r=o.sunEntityId?t.states[o.sunEntityId]:null;if(!r)return null;let a=r.attributes||{},s=a.next_rising||a.sunrise,l=a.next_setting||a.sunset;if(!s||!l)return null;let p=new Date(n);p.setHours(12,0,0,0);let d=wt(new Date(s),p),c=wt(new Date(l),p);if(!d||!c||isNaN(d.getTime())||isNaN(c.getTime()))return null;let m=o.atmosCe,u=te=>m[te]?new Date(String(t.states[m[te]]?.state)):null,h=wt(u("golden_hour_morning_start"),d),g=wt(u("golden_hour_morning_end"),d),v=wt(u("blue_hour_morning_start"),d),w=wt(u("golden_hour_evening_start"),c),b=wt(u("golden_hour_evening_end"),c),y=wt(u("blue_hour_evening_end"),c),_=a.next_dawn,S=a.next_dusk,$=_?wt(new Date(_),d):null,A=S?wt(new Date(S),c):null,M=m.moon_phase?t.states[m.moon_phase]:null,I=M?.attributes||{},L=I.moon_age!==void 0?Number(I.moon_age):null,T=I.illumination!==void 0?Number(I.illumination):null,C=L!==null?nd(L):M?.state||null,x=wt(u("moonrise"),n),E=wt(u("moonset"),n),F=n.getTime()>=d.getTime()&&n.getTime()<=c.getTime(),N=G(d,i),z=G(c,i),R=(d.getTime()+c.getTime())/2,O=G(new Date(R),i),V=c.getTime()-d.getTime(),q=Yi-V,D=Ps(V),W=Ps(q),P=F?"Daylight":"Night",H=F?D:W,U=new Date(d.getTime());U.setHours(0,0,0,0);let Y=Math.max(0,Math.min(100,(n.getTime()-U.getTime())/Yi*100)),j=ad(d,c,$,v,h,g,w,b,y,A),rt=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${k(j)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${Y.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,lt=T!=null?Math.round(T):null,kt=C||"Moon",Rt=rd(24,24,22,T,L),jt=lt!==null?`<span class="pw-astro-moon-illum">${f(`${lt}%`)}</span> illuminated`:"",_t=L!=null?`${L.toFixed(1)}d old`:"",yn=L!=null?(()=>{let te=$t/2,_e=(L%$t+$t)%$t;return`${(_e<=te?te-_e:$t-_e+te).toFixed(1)}d to full`})():"",_n=[jt,_t,yn].filter(Boolean).join(" \xB7 "),Ge=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${Rt}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${f(kt)}</div>
          <div class="pw-astro-moon-meta">${_n}</div>
        </div>
      </div>`,le=F?`Sun rose ${N}, sets ${z} \xB7 solar noon ${O}.`:`Sun set ${z}, rises ${N} \xB7 solar noon ${O}.`,je=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${f(P)}</div>
        <div class="pw-astro-hero-num">${f(H)}</div>
      </div>
      ${B.narrative(le)}`,Qt=G(x,i),tr=G(E,i),xn=B.statsRow([B.stat(G($,i),"civil dawn"),B.stat(G(h,i),"golden start",{valueColor:"var(--pw-warn-amber)"}),B.stat(G(v,i),"blue start",{valueColor:"var(--pw-wind)"}),B.stat(Qt,"moonrise")],{columns:4,divided:!0}),$n=B.statsRow([B.stat(G(A,i),"civil dusk"),B.stat(G(b,i),"golden end",{valueColor:"var(--pw-warn-amber)"}),B.stat(G(y,i),"blue end",{valueColor:"var(--pw-wind)"}),B.stat(tr,"moonset")],{columns:4,divided:!0}),Sn=`
      ${je}
      ${Ge}
      ${rt}
      ${xn}
      ${$n}`,kn=St(F?"sunny":"clear-night",!F),Tn=`<div class="pw-fx" data-astro-stars="${!F}" data-astro-day="${F}" role="img" aria-label="Sky atmospheric effects"></div>`;return vt({sectionClass:"pw-astro-v2",extraSectionClass:F?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:kn,kicker:"today's sky",preContent:Tn,body:Sn,pro:e?.pro!==!1})}var qs=18,sd=62,Us=168;function ld(t){return t.active?0:typeof t.hoursUntil=="number"&&t.hoursUntil>0?t.hoursUntil:0}function Ws(t){let e=Math.min(ld(t),Us)/Us;return qs+e*(sd-qs)}function Xi(t){let e=`${t.summary||""}|${t.type||""}|${t.endTime||""}`,o=0;for(let n=0;n<e.length;n+=1)o=(o*31+e.charCodeAt(n))%360;return o/360*2*Math.PI}function cd(t,e){let o=t.alert_type||t.type||"wind",n=Number(t.level),i=Number.isFinite(n)&&n>0?n:1,r=Za[ao(i)],a=ja[o]||"mdi:alert",s=Number(t.progress)||0,l=Array.isArray(t.locations)?t.locations:[],p=t.end_time??"",d=null,c=null,m=!1;if(p==="")m=!0;else if(p){let u=new Date(p),h=new Date,g=u.getTime()-h.getTime();if(g/(1e3*60*60*24)>Va)m=!0;else if(e)d=Math.max(0,g/(1e3*60*60));else{let w=t.start_time||t.datetime;if(w){let b=new Date(String(w));c=Math.max(0,(b.getTime()-h.getTime())/(1e3*60*60))}}}return{type:o,icon:a,severity:i,color:r,summary:String(t.headline||t.summary||""),desc:String(t.description||""),active:e,hoursLeft:d,hoursUntil:c,progress:s,locations:l,link:t.link?String(t.link):null,endTime:String(p),isUntilFurtherNotice:m}}function pd(t){let e=ao(t.severity),o="";t.isUntilFurtherNotice?o="UNTIL FURTHER NOTICE":t.active&&t.hoursLeft!==null?o=`${Math.round(t.hoursLeft)}H LEFT`:t.hoursUntil!==null?o=`IN ${Math.round(t.hoursUntil)}H`:t.active&&(o="ACTIVE");let n=String(t.type||"").toUpperCase(),i=String(t.summary||t.desc||"").toUpperCase().trim(),r=t.locations.length>0?t.locations.join(", ").toUpperCase():"",s=[o,n,i,r].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${e}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${f(s)}</span>
    </div>`}function Vs({hass:t,config:e,discovery:o,proPersisted:n=!1}){let i=[];for(let x of o.alertEntityIds){let F=t.states[x]?.attributes?.all_alerts;if(Array.isArray(F)){for(let N of F)i.push(cd(N,N.active===!0));break}}let r=i.length>0,a=r?i.reduce((x,E)=>E.severity>x.severity?E:x,i[0]).severity:0,s=r?i.reduce((x,E)=>E.severity>x.severity?E:x,i[0]).color:"#30d158",l=po(a,0,4),p=r?Math.min(1.5,1+(i.length-1)*.15):1,d=gs(l,3,1.2).toFixed(2),c=hs(l).toFixed(2),m=r?Zi(s,l*p):Zi("#30d158",.08),u=140,h=u/2,g=u/2,v=r?{bgInner:a>=4?"#1a0000":a>=3?"#1a0e00":"#1a1500",bgOuter:a>=4?"#0a0000":a>=3?"#0a0500":"#0a0800",ring:k(oe(s,.15)),line:k(oe(s,.08)),sweep:k(oe(s,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},w=i.map(x=>{let E=h+Math.cos(Xi(x))*Ws(x),F=g+Math.sin(Xi(x))*Ws(x),N=(Xi(x)/(2*Math.PI)*Number(d)).toFixed(2);return x.active?`<div class="pw-radar-blip" style="left:${E.toFixed(1)}px;top:${F.toFixed(1)}px;--pw-blip-color:${k(x.color)};animation-delay:${N}s"></div>`:`<div style="position:absolute;left:${E.toFixed(1)}px;top:${F.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${k(x.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),b=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${v.bgInner};--pw-radar-bg-outer:${v.bgOuter};--pw-radar-color:${v.ring};--pw-radar-line:${v.line};--pw-radar-sweep:${v.sweep};--pw-radar-dur:${d}s" role="img" aria-label="${r?`${i.length} weather alerts`:"No weather alerts"}">
        ${w}
      </div>
    </div>`,y=(()=>{if(!r)return"";let x=null;for(let E of i){if(E.isUntilFurtherNotice)return"further notice";if(E.endTime){let F=new Date(E.endTime);!isNaN(F.getTime())&&(!x||F>x)&&(x=F)}}return x?Ht(x,it(t),{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric",hourCycle:"h23"}):"further notice"})(),_=St(r?"rainy":"sunny",!1),S=i.map(pd).join(""),$=r?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>no active or upcoming warnings</div>',A=i.length===1?"alert":"alerts",M=r?`<div class="pw-alert-timestamp pw-alert-${ao(a)}">${i.length} ${A} \xB7 valid through ${f(y)}</div>`:"",I=`<div class="pw-tension-wash${r?" breathing":""}" style="background: ${k(m)}; --breathe-dur: ${c}s"></div>`,L=`
        ${b}
        ${$}
        ${S?`<div class="pw-alert-list">${S}</div>`:""}
        ${M}`,T=i.map(x=>{let E=ao(x.severity),F=x.summary||x.desc||x.type,N=[];x.isUntilFurtherNotice?N.push("until further notice"):x.active&&x.hoursLeft!==null?N.push(`${Math.round(x.hoursLeft)}h left`):x.hoursUntil!==null&&N.push(`in ${Math.round(x.hoursUntil)}h`),x.severity>0&&N.push(`severity ${x.severity}`),x.type&&N.push(x.type);let z=N.join(" \xB7 "),R=x.desc&&x.desc!==x.summary?`<div class="pw-alert-detail-desc">${f(x.desc)}</div>`:"",O=x.locations.length>0?`<div class="pw-alert-detail-loc">${f(x.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${E}">
          <div class="pw-alert-detail-head">${f(F)}</div>
          ${z?`<div class="pw-alert-detail-meta">${f(z)}</div>`:""}
          ${R}
          ${O}
        </div>`}).join(""),C=r?`
        ${b}
        ${$}
        ${T}
        ${M}`:void 0;return vt({sectionClass:"pw-alerts-v2",ariaLabel:"Weather alerts",brandVariant:_,kicker:r?`weather alerts (${i.length})`:"no weather alerts",preContent:I,body:L,proView:C,proInitial:n,pro:e?.pro!==!1})}var dd=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),ud=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function md(t,e){let o=Math.min(100,t/4e3*100),n=Math.min(100,Math.max(0,(6-e)/12*100));return Math.round(o*.6+n*.4)}function hd(t){return t<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:t<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:t<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:t<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function fd(t,e){let o=e.atmosCe,n=o.cape&&t.states[o.cape]?Number(t.states[o.cape].state):NaN,i=o.lifted_index&&t.states[o.lifted_index]?Number(t.states[o.lifted_index].state):NaN,r=Number.isFinite(n),a=Number.isFinite(i),s=r?n:0,l=a?i:0,p=r||a?md(s,l):null;if(o.stability_assessment&&t.states[o.stability_assessment]){let c=t.states[o.stability_assessment].state,m=t.states[o.stability_assessment].attributes||{},u=dd[c];if(u){let h=ud[c]??0;return{tierKey:c,...u,score:h,source:"composite",attrs:m,capeValue:s,liValue:l,hasCape:r,hasLI:a}}}let d=p!==null?hd(p):null;return{tierKey:d?.tierKey||"unknown",label:d?.label||"Unknown",color:d?.color||"#888888",desc:d?.desc||"",score:p,source:"fallback",attrs:null,capeValue:s,liValue:l,hasCape:r,hasLI:a}}function gd(t){return Math.max(0,Math.min(100,t))}function Gs(t,e=5e3){return e<=0?0:Math.max(0,Math.min(100,t/e*100))}function vd(t,e){let r=Math.max(t,e),a=5e3;r>5e3*.8&&(a=Math.max(5e3,Math.ceil(r*1.25/1e3)*1e3));let s=Math.ceil(a/5e3)*1e3;a=Math.ceil(a/s)*s;let l=[];for(let p=a;p>=0;p-=s)l.push(p);return{scaleMax:a,labelInterval:s,labels:l}}var bd=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function wd(t){if(!t)return null;let e=o=>bd[String(t[o]||"none")]??0;return{maxThermal:Math.max(e("cape_tier"),e("lifted_index_tier"),e("lapse_rate_tier")),shearTier:e("wind_shear_tier")}}function yd({tierKey:t,tierDesc:e,hourly:o,now:n,todaySunset:i,attrs:r,timeZone:a}){if(t==="none"||t==="unknown")return"Atmosphere settled \xB7 no convective signals";let s=wd(r);if(s&&s.maxThermal===0&&s.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let l=i&&!isNaN(i.getTime())?i.getTime():null,p=n.getTime(),d=l!==null&&p>=l,c=Array.isArray(o)?o.slice(0,6):[],m=c.map(y=>Number(y&&y.cape)||0),u=m.some(y=>Number.isFinite(y)&&y>0),h=null,g=null;if(u){let y=Math.max(...m);if(y>0){let _=c[m.indexOf(y)],S=_?_.datetime:null,$=S?new Date(String(S)):null;$&&!isNaN($.getTime())&&(h=G($,a),g=$.getTime())}}if(h===null||g===null){let y=e||"Storm risk active";return d?`${y} \xB7 calming overnight`:y}let v=1800*1e3,w=g<p-v,b=g>=p-v&&g<=p+v;return w?d?`Storm risk easing: peaked ${h}, calming overnight`:`Storm risk easing: peaked ${h}`:b?d?"Storm risk peaking now, calming overnight":l!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":l!==null&&g<l?`Storm risk peaks ${h}, calming after sunset`:l!==null?`Storm risk peaks ${h} (after sunset)`:`Storm risk peaks ${h}`}var wg=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var yg=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function _d(t){let e=Math.max(0,Math.min(100,t)),o=e/100;return{count:e<=10?0:Math.round(2+o*6),minSize:2+Math.round(o),maxSize:3+Math.round(o),minDur:4-o*2.2,maxDur:4-o*1.2}}function js(t,e,o=Math.random){let n=document.createDocumentFragment(),i=_d(t);if(i.count===0)return n;let r=k(e);for(let a=0;a<i.count;a++){let s=document.createElement("div");s.className="pw-thermal-particle";let l=i.minSize+o()*(i.maxSize-i.minSize),p=10+o()*80,d=o()*30,c=i.minDur+o()*(i.maxDur-i.minDur),m=o()*c,u=.4+o()*.3,h=-(50+o()*60);s.setAttribute("style",[`width:${l.toFixed(1)}px`,`height:${l.toFixed(1)}px`,`left:${p.toFixed(1)}%`,`bottom:${d.toFixed(1)}%`,`background:${r}`,`--rise-dur:${c.toFixed(2)}s`,`--rise-dist:${h.toFixed(0)}px`,`--peak-op:${u.toFixed(2)}`,`animation-delay:${m.toFixed(2)}s`].join(";")),n.appendChild(s)}return n}function Zs({hass:t,config:e,discovery:o,forecastData:n}){let i=o.atmosCe;if(!i.cape&&!i.lifted_index&&!i.freezing_level_height)return console.debug(`${Nt} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height): section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let r=fd(t,o),{capeValue:a,liValue:s,hasCape:l,hasLI:p,score:d}=r,c=H=>{let U=i[H];if(!U||!t.states[U])return{value:null,unit:""};let Y=Number(t.states[U].state);if(!Number.isFinite(Y))return{value:null,unit:""};let j=String(t.states[U].attributes?.unit_of_measurement||"");return{value:Y,unit:j}},m=c("wind_shear_0_6_km"),u=c("lapse_rate_700_500_hpa"),h=c("freezing_level_height"),g=c("lcl_height"),v=r.tierKey,w={label:r.label,color:r.color,desc:r.desc},y=["slight","enhanced","moderate","high"].includes(v)?"rain":"cloudy",_=new Date,S=o.sunEntityId?t.states[o.sunEntityId]:null,{todaySunset:$}=Ue(_,S?.attributes?.next_rising,S?.attributes?.next_setting),A=yd({tierKey:v,tierDesc:w.desc,hourly:n?.hourly||[],now:_,todaySunset:$,attrs:r.attrs,timeZone:it(t)}),M=h.value??0,I=g.value??0,{scaleMax:L,labels:T}=vd(M,I),C=d!==null?gd(d):0,x=w.color,E=l||p?`
          <div class="pw-atmos-cape-fill" style="height:${Number(C)}%;background:linear-gradient(to top, ${k(x)}66, ${k(x)}11)"></div>`:"",F=h.unit||"m",N=h.value!==null?(()=>{let H=Gs(h.value,L);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(H)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${f(String(Math.round(h.value)))}${f(F)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",z=g.unit||"m",R=g.value!==null?(()=>{let H=Gs(g.value,L);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(H)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${f(String(Math.round(g.value)))}${f(z)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",V=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${T.map(H=>`<span class="pw-atmos-scale-label">${H>=1e3?`${H/1e3}km`:String(H)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${E}
            ${N}
            ${R}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,q=B.heroBlock({tier:w.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:A}),D=[l?B.stat(`${Math.round(a)}`,"cape J/kg"):"",p?B.stat(s.toFixed(1),"lifted idx"):"",m.value!==null?B.stat(`${Math.round(m.value)}`,`shear ${m.unit||"km/h"}`):"",u.value!==null?B.stat(u.value.toFixed(1),`lapse ${u.unit||"\xB0C/km"}`):""],W=B.statsRow(D,{columns:4,divided:!0}),P=`
        ${q}
        ${V}
        ${W}`;return vt({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:y,kicker:"atmospheric stability",body:P,pro:e?.pro!==!1})}var Bt=600,xd=280,wn=8,Ki=80,Ve=200,mo=220,$d=254,Ys=12,Sd=30,kd=.9,Td=3;function ye(t,e){return e<=1?Bt/2:wn+t/(e-1)*(Bt-2*wn)}function Xs(t,e,o){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(o))return(Ki+Ve)/2;let n=o-e||1;return Ki+(o-t)/n*(Ve-Ki)}function Ad(t,e){let o=new Date(t);return Ht(o,e,{hour:"2-digit",hourCycle:"h23"})}var Cd=500;function Ed(t,e=24,o){if(!Array.isArray(t))return null;let n=t.slice(0,Cd),r=un(n,new Date).slice(0,e);if(r.length<2)return null;let a=r[0],s="cloud_cover"in a,l="cloud_cover_low"in a&&"cloud_cover_mid"in a&&"cloud_cover_high"in a,p="wind_speed"in a&&("wind_bearing"in a||"wind_direction"in a),d=r.map(v=>{let w=Number(v.temperature),b=gt(v.precipitation_probability,0),y=gt(v.snowfall,0),_=gt(v.rain,0),S=gt(v.showers,0),$=String(v.condition||""),A=y>0||$==="snowy"||$==="snowy-rainy"?"snow":"rain",M=A==="snow"?y:_+S;return{temp:w,precip:b,precipMm:M,precipType:A,condition:$,cloudCover:s?gt(v.cloud_cover,0):null,cloudLow:l?gt(v.cloud_cover_low,0):null,cloudMid:l?gt(v.cloud_cover_mid,0):null,cloudHigh:l?gt(v.cloud_cover_high,0):null,windSpeed:p?gt(v.wind_speed,0):null,windBearing:p?gt(v.wind_bearing??v.wind_direction,0):null,timeLabel:Ad(String(v.datetime||""),o),datetime:String(v.datetime||"")}}),c=rs(d,v=>v.temp);if(c.length<2)return null;let m=c.map(v=>v.temp),u=Math.min(...m),h=Math.max(...m),g=Math.max(...c.map(v=>v.precipMm),0);return{points:c,n:c.length,min:u,max:h,minIdx:m.indexOf(u),maxIdx:m.indexOf(h),maxPrecipMm:g,hasCloud:s,hasLayeredCloud:l,hasWind:p}}function Md(t){let{points:e,n:o,hasLayeredCloud:n}=t;if(o<=0)return"";let i=o>1?(Bt-2*wn)/(o-1)/2:Bt/2,r="";for(let a=0;a<o;a++){let s=ye(a,o),l=a===0?0:s-i,d=(a===o-1?Bt:s+i)-l,c=l/Bt*100,m=d/Bt*100,u;if(n){let h=(Number(e[a].cloudHigh)||0)/100*.06,g=(Number(e[a].cloudMid)||0)/100*.08,v=(Number(e[a].cloudLow)||0)/100*.1;u=Math.min(h+g+v,.15)}else u=(Number(e[a].cloudCover)||0)/100*.12;u<=0||(r+=`<div class="pw-meteogram-cloud-slot" style="left:${c.toFixed(2)}%;width:${m.toFixed(2)}%;opacity:${u.toFixed(3)}"></div>`)}return r?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${r}</div>`:""}function Fd(t){let{points:e,n:o,maxPrecipMm:n}=t,i=mo-Ve,r=(Bt-2*wn)/(o-1)*kd,a=n>0,s=a?Math.max(n,2):100,l="";for(let p=0;p<o;p++){let{precipMm:d,precip:c,precipType:m}=e[p],u=a?d:c;if(u<=0)continue;let h=u/s*i,g=ye(p,o)-r/2,v=r;g<0&&(v+=g,g=0),g+v>Bt&&(v=Bt-g);let w=mo-h,b=m==="snow"?"rgba(200,220,240,0.45)":"color-mix(in srgb, var(--pw-wind) 40%, transparent)";l+=`<rect x="${g.toFixed(1)}" y="${w.toFixed(1)}" width="${v.toFixed(1)}" height="${h.toFixed(1)}" fill="${b}" rx="1"/>`}return l}function Id(t){let{points:e,n:o,maxPrecipMm:n}=t,i=mo-Ve,r=n>0,a=r?Math.max(n,2):100,s="";for(let l=0;l<o;l++){let{precipMm:p,precip:d}=e[l],c=r?p:d;if(c<=0)continue;let m=ye(l,o),u=c/a*i,h=mo-u-2,g=r?p>=10?String(Math.round(p)):p.toFixed(1):`${Math.round(d)}%`;s+=`<text x="${m.toFixed(1)}" y="${h.toFixed(1)}" text-anchor="middle" fill="color-mix(in srgb, var(--pw-wind) 90%, transparent)" font-size="13" font-weight="600">${f(g)}</text>`}return s}function Ld(t){let{points:e,n:o,min:n,max:i}=t,r=e.map(u=>parseFloat(u.temp.toFixed(1))),a=e.map((u,h)=>({x:ye(h,o),y:Xs(r[h],n,i)})),s=a.map((u,h)=>`${h===0?"M":"L"}${u.x.toFixed(1)},${u.y.toFixed(1)}`).join(" "),l=`${s} L${a[a.length-1].x.toFixed(1)},${Ve} L${a[0].x.toFixed(1)},${Ve} Z`,p=lo("pw-meteogram-grad"),d=Vi(i),c=Vi(n),m=`<defs><linearGradient id="${p}" x1="0" y1="0" x2="0" y2="1">`;return m+=`<stop offset="0%" stop-color="${k(d)}" stop-opacity="0.25"/>`,m+=`<stop offset="100%" stop-color="${k(c)}" stop-opacity="0.03"/>`,m+="</linearGradient></defs>",m+=`<path d="${l}" fill="url(#${p})"/>`,m+=`<path d="${s}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,m}function Nd(t){let{points:e,n:o}=t,n="";for(let i=0;i<o;i+=Td){let r=ye(i,o);n+=`<text x="${r.toFixed(1)}" y="${$d}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${f(e[i].timeLabel)}</text>`}return n}function zd(t,e,o,n){let i=o/1.852,r=((n+180)%360-90+360)%360,a=Math.round(i/5)*5,s=Math.floor(a/50);a-=s*50;let l=Math.floor(a/10);a-=l*10;let p=Math.floor(a/5),d=18,c="var(--pw-ink-cream-muted)",m="",u=-d;for(let h=0;h<s;h++)m+=`<polygon points="0,${u.toFixed(1)} 9,${(u+3).toFixed(1)} 0,${(u+6).toFixed(1)}" fill="${c}"/>`,u+=6;for(let h=0;h<l;h++)m+=`<line x1="0" y1="${u.toFixed(1)}" x2="9" y2="${(u+4.5).toFixed(1)}" stroke="${c}" stroke-width="1.4" stroke-linecap="round"/>`,u+=4.5;for(let h=0;h<p;h++)m+=`<line x1="0" y1="${u.toFixed(1)}" x2="4.5" y2="${(u+2.25).toFixed(1)}" stroke="${c}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${t.toFixed(1)},${e}) rotate(${r})"><line x1="0" y1="0" x2="0" y2="${-d}" stroke="${c}" stroke-width="1.4" stroke-linecap="round"/>${m}</g>`}function Rd(t){let{points:e,n:o,min:n,max:i,minIdx:r,maxIdx:a}=t,s=0,l=1,p=2,d="";for(let c=0;c<o;c++){let m=c===r||c===a,u=m?s:c%3,h=ye(c,o),g=Xs(e[c].temp,n,i);if(u===s){let v=e[c].temp,w=m?String(Math.round(v)):v.toFixed(1),b=c===r?"var(--pw-wind)":c===a?"var(--pw-vermilion)":"var(--pw-ink-cream)",y=m?17:15,_=g-Ys;d+=`<text x="${h.toFixed(1)}" y="${_.toFixed(1)}" text-anchor="middle" fill="${b}" font-size="${y}" font-weight="600">${w}\xB0</text>`}else if(u===l){let v=hn(e[c].condition),w=g-Ys;d+=`<text x="${h.toFixed(1)}" y="${w.toFixed(1)}" text-anchor="middle" font-size="20">${v}</text>`}else if(u===p){let v=Number(e[c].windSpeed),w=Number(e[c].windBearing);if(!Number.isFinite(v)||v<1||!Number.isFinite(w))continue;let b=g-Sd;d+=zd(h,b,v,w)}}return d}function Ks({hass:t,config:e,forecastData:o}){let n=o?.hourly||[];if(n.length<2)return null;let i=it(t),r=Number(e.hours),a=e.horizon==="long"?"long":"short",s=Number.isFinite(r)&&r>0?Math.max(4,Math.min(48,r)):a==="long"?24:12,l=Ed(n,s,i);if(!l)return null;let d=(e.show_cloud==="auto"||e.show_cloud===void 0?l.hasCloud:!!e.show_cloud)&&l.hasCloud?Md(l):"",c=St(l.points[0]?.condition||"sunny",!1),m=[];m.push(Fd(l)),m.push(Id(l)),m.push(Ld(l)),m.push(Rd(l));let u=ye(0,l.n).toFixed(1);m.push(`<line x1="${u}" y1="0" x2="${u}" y2="${mo}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),m.push(Nd(l));let h=l.n,g=`${h}-hour meteogram showing temperature, condition, wind, and precipitation`,v=h<=12?"next twelve hours":`next ${h===24?"twenty-four":h} hours`,w=lo("pw-meteogram-title"),b=`
        <div class="pw-meteogram-chart" aria-labelledby="${w}">
          <svg viewBox="0 0 ${Bt} ${xd}" style="width:100%; height:auto" role="img" aria-label="${f(g)}">
            <title id="${w}">${f(g)}</title>
            ${m.join(`
`)}
          </svg>
        </div>`;return vt({sectionClass:"pw-meteogram-v2",ariaLabel:g,brandVariant:c,kicker:v,preContent:d,body:b,proAction:"meteo-horizon",proInitial:s>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:e.pro!==!1})}function Ji(t,e){return console.warn(`${Nt} ${t}`,e),null}var Hd={overview:_s,forecast:xs,wind:As,air_quality:Es,astro:Bs,alerts:Vs,atmosphere:Zs,meteogram:Ks},Qi=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastEntityId=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._atmosRegistryWarned=!1,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=os(e),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){let e=this._discovery?.weatherEntityId;return(!this._discovery||e&&!(e in this._hass.states))&&(this._discovery=ns(this._hass.states,this._config)),this._discovery}_getCeFingerprint(e){let o=this._getDiscovery(),n=o.atmosCe,i=[];for(let r of Object.keys(n)){let a=n[r],s=e.states[a];s&&i.push(`${r}=${s.state}`)}for(let r of o.alertEntityIds){let a=e.states[r];a&&i.push(`${r}=${a.state}`)}return i.join("|")}_warnIfAtmosCeMissing(e,o){let n=new Set(["atmosphere","air_quality","meteogram"]);if(!e.some(l=>n.has(l.type))||Object.keys(o.atmosCe).length>0)return;let r=this._config,a=r.atmos_source||Wi(o.weatherEntityId||"");if(this._warnedMissingAtmosCe===a)return;this._warnedMissingAtmosCe=a;let s=r.atmos_source?`Set atmos_source matches no sensor.${a}_* entities. Check the slug.`:`Derived slug "${a}" matches no sensor.${a}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${Nt} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${s}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(e){if(this._hass=e,wo(e),!this._config)return;let o=this._config.weather_entity,n=o||Object.keys(e.states).find(l=>l.startsWith("weather."))||"",i=e.states[n];if(!i){o&&this._warnedMissingEntity!==o&&(console.warn(`${Nt} weather_entity "${o}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=o);return}let r=this._getCeFingerprint(e),a=`${i.state}|${JSON.stringify(i.attributes)}|${r}`;a!==this._lastWeatherState&&(this._lastWeatherState=a,this._fullRender()),this._subscribeForecast(e,n)}async _subscribeForecast(e,o){let n=Date.now()-this._forecastLastFetch>=qi;if(!(this._subscribedEntityId===o&&this._forecastData&&!n)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=o,this._forecastEntityId!==o&&(this._forecastData=null,this._forecastEntityId=null);try{if(!e.callWS)return;let i=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let h=(await e.callWS({type:"config/entity_registry/list"}).catch(g=>(this._atmosRegistryWarned||(this._atmosRegistryWarned=!0,console.warn(`${Nt} entity registry lookup failed, extended forecast unavailable (admin rights required)`,g)),[]))).find(g=>g.platform==="atmos_ce");this._atmosConfigEntryId=h?.config_entry_id||null}if(this._atmosConfigEntryId){let g=(await e.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(v=>Ji("extended forecast fetch failed, falling back to standard hourly",v)))?.response;g?.forecast&&(i=g.forecast)}}catch(u){console.warn(`${Nt} extended forecast fetch failed, falling back to standard hourly`,u)}let r=!1,a=!1,s=null;o&&e.states[o]&&(s=await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"daily"},return_response:!0}).catch(u=>(r=!0,Ji("daily forecast fetch failed",u))));let l=null;!i&&o&&e.states[o]&&(l=(await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"hourly"},return_response:!0}).catch(w=>(a=!0,Ji("hourly forecast fetch failed",w))))?.response?.[o]?.forecast||[]);let c=s?.response?.[o],m=this._forecastEntityId===o?this._forecastData:null;if(this._forecastData={hourly:i||(m&&a?m.hourly:l||[]),daily:m&&r?m.daily:c?.forecast||[]},this._forecastEntityId=o,this._forecastLastFetch=Date.now(),!this.isConnected)return;this._fullRender()}catch(i){console.warn(`${Nt} forecast fetch failed; retries throttled to ${qi/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,i),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}connectedCallback(){this._config&&this._hass&&this._fullRender()}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let e=this._getDiscovery(),o=this._hass.states[e.weatherEntityId];if(!o)return;let n=["<style>",ts,"</style>",'<div class="pw-card">'],i=this._config.sections||[];this._warnIfAtmosCeMissing(i,e);for(let r=0;r<i.length;r++){let a=i[r],s=Hd[a.type];if(s)try{let l=s({hass:this._hass,config:a,discovery:e,weatherEntity:o,forecastData:this._forecastEntityId===e.weatherEntityId?this._forecastData:null,sectionIndex:r,proPersisted:!!this._proState[r]});l&&n.push(l)}catch(l){console.warn(`${Nt} section "${a?.type}" renderer threw: section will be skipped, other sections continue. Please share the error below when reporting.`,l)}}n.push("</div>"),this.shadowRoot.innerHTML=n.join(""),this._postRender(e),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let r=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!r){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let a=Number(r.dataset.target)-Date.now();if(a<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let s=Math.floor(a/1e3),l=Math.floor(s/3600),p=Math.floor(s%3600/60),d=s%60;r.textContent=(l>0?l+"h "+p+"m":p+"m "+d+"s")+(r.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let e=this._getDiscovery(),o=e.atmosCe,n=this._hass.states[e.sunEntityId||""];if(!n)return;let i=new Date,r=i.getTime(),a=[],s=n.attributes?.next_rising,l=n.attributes?.next_setting,{todaySunrise:p,todaySunset:d}=Ue(i,s,l),c=n.attributes?.next_rising?new Date(n.attributes.next_rising).getTime():NaN,m=n.attributes?.next_setting?new Date(n.attributes.next_setting).getTime():NaN;Number.isFinite(c)&&c>r&&a.push(c),Number.isFinite(m)&&m>r&&a.push(m);let u={golden_hour_morning_start:p,golden_hour_morning_end:p,blue_hour_morning_start:p,blue_hour_morning_end:p,golden_hour_evening_start:d,golden_hour_evening_end:d,blue_hour_evening_start:d,blue_hour_evening_end:d};for(let[v,w]of Object.entries(u)){if(!o[v])continue;let b=new Date(String(this._hass.states[o[v]]?.state||""));if(isNaN(b.getTime()))continue;let y=wt(b,w);if(!y)continue;let _=y.getTime();_>r&&a.push(_);let S=_+864e5;S>r&&a.push(S)}if(a.length===0)return;let g=Math.min(...a)-r+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},g)}_postRender(e){if(!this.shadowRoot||!this._hass)return;let o=mt(),n=o?[]:this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let c of n){let m=c.getAttribute("data-condition")||"",u=c.getAttribute("data-night")==="true",h=null;try{let v=c.getAttribute("data-cloud");v&&v!=='""'&&v!==""&&(h=JSON.parse(v))}catch{}let g=ms(m,u,h);c.replaceChildren(g)}let i=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let c of i){let m=Number(c.getAttribute("data-pm25"))||0,u=Number(c.getAttribute("data-pm10"))||0,h=c.querySelector(".pw-fx");if(h&&(m>0||u>0)){let g=document.createDocumentFragment();us(g,m,u),h.replaceChildren(g)}}let r=o?[]:this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let c of r){let m=c.getAttribute("data-astro-stars")==="true",u=c.getAttribute("data-astro-day")==="true",h=document.createDocumentFragment();m&&ji(h),u&&(yt(h,3,.5),fn(h)),c.replaceChildren(h)}let a=o?[]:this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let c of a){let m=Number(c.getAttribute("data-atmos-score"))||0,u=c.getAttribute("data-atmos-color")||"#30d158",h=js(m,u);c.replaceChildren(h)}let s=[...this.shadowRoot.querySelectorAll(".pw-section")],l=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let c of l)c.addEventListener("click",m=>{let u=m.currentTarget,h=u.closest(".pw-section");if(!h||!this._config)return;let g=s.indexOf(h);if(g<0)return;let v=h.dataset.proAction||"view-swap";if(v==="wind-mode"||v==="meteo-horizon"||v==="aqi-scale"){let b=(this._config.sections||[]).map((_,S)=>S===g?{..._}:_),y=b[g];if(!y)return;if(v==="wind-mode"&&y.type==="wind")y.speed_mode=y.speed_mode==="gust"?"speed":"gust";else if(v==="meteo-horizon"&&y.type==="meteogram"){let _=Number(y.hours),S=Number.isFinite(_)&&_>0?_>=18:y.horizon==="long";y.horizon=S?"short":"long","hours"in y&&delete y.hours}else v==="aqi-scale"&&y.type==="air_quality"&&(y.scale=y.scale==="us"?"eu":"us");this._config={...this._config,sections:b},this._fullRender();return}let w=h.dataset.pro==="true"?"false":"true";h.dataset.pro=w,u.setAttribute("aria-pressed",w),this._proState[g]=w==="true"});let p=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let c of p){let m=!1,u=0,h=0,g=c;g.setAttribute("tabindex","0"),g.setAttribute("role","group"),g.hasAttribute("aria-label")||g.setAttribute("aria-label","Hourly forecast, scrollable"),c.addEventListener("mousedown",v=>{m=!0,u=v.pageX-c.offsetLeft,h=c.scrollLeft,c.style.cursor="grabbing"}),c.addEventListener("mouseleave",()=>{m=!1,c.style.cursor=""}),c.addEventListener("mouseup",()=>{m=!1,c.style.cursor=""}),c.addEventListener("mousemove",v=>{if(!m)return;v.preventDefault();let w=v.pageX-c.offsetLeft;c.scrollLeft=h-(w-u)}),c.addEventListener("touchstart",v=>{v.stopPropagation()},{passive:!0}),c.addEventListener("touchmove",v=>{v.stopPropagation()},{passive:!0}),c.addEventListener("wheel",v=>{let w=v;Math.abs(w.deltaX)<Math.abs(w.deltaY)&&(v.preventDefault(),c.scrollLeft+=w.deltaY)},{passive:!1})}let d=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(d){let c=this.shadowRoot.querySelector(".pw-atmos-detail");if(c){this._atmosExpanded&&(c.style.maxHeight=`${c.scrollHeight}px`,d.setAttribute("aria-expanded","true"));let m=()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(c.style.maxHeight=`${c.scrollHeight}px`,d.setAttribute("aria-expanded","true")):(c.style.maxHeight="0",d.setAttribute("aria-expanded","false"))};At(d,m),d.hasAttribute("aria-expanded")||d.setAttribute("aria-expanded","false"),d.addEventListener("click",m)}}}getCardSize(){let e=this._config?.sections?.length||1;return Math.max(3,e*3)}getGridOptions(){return de(6)}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(Oa)}static getStubConfig(e){let o=Object.keys(e.states).find(n=>n.startsWith("weather."));return{type:`custom:${Be}`,weather_entity:o||"weather.home",sections:[{type:"overview"}]}}};customElements.get(Be)||(customElements.define(Be,Qi),console.info(`%c ${Be.toUpperCase()} %c v${Da} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:Be,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});var ho=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_fetchGen=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=pr,this._shadow.appendChild(e)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let e=this._shadow.querySelectorAll(".pb-row");for(let o of e)Bn(o),qn(o)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(e){this._config=xr(e),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._fetchGen++,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(e){if(this._hass=e,!this._config)return;let o=!1;for(let n of this._cfg.entities){let i=e.states[n.entity],r=this._prevStates[n.entity];if(!r||r.state!==i?.state||r.last_updated!==i?.last_updated){o=!0;break}let a=Rn(n.target??this._cfg.target);if(a){let s=e.states[a],l=this._prevStates[`__target__${a}`];if(!l||l.state!==s?.state||l.last_updated!==s?.last_updated){o=!0;break}}}o&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let e=this._cfg;if(!e)return;let o=e.columns??1,n=o>1?` columns-${o}`:"",i=e.entity_row?" entity-row":"",r=e.layout==="compact"?" compact":"",a=[];o>1&&a.push(`--pb-columns:${o}`),e.gap!==void 0&&a.push(`--pulse-space-element:${k(ke(e.gap))}`),e.font_size!==void 0&&a.push(`--pulse-font-body:${k(ke(e.font_size))}`);let s=a.length>0?` style="${a.join(";")}"`:"",l="";e.title&&(l+=`<div class="pulse-title">${f(e.title)}</div>`),l+=`<div class="pb-card${n}${i}${r}"${s}>`;for(let m of e.entities)l+=this._renderBarRow(m);l+="</div>";let p=e.entity_row?l:`<ha-card>${l}</ha-card>`,d=this._shadow.querySelector("ha-card, .pb-card");d&&d.remove();let c=document.createElement("template");c.innerHTML=p,this._shadow.appendChild(c.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pb-card"),this._cacheBarElements();for(let m of e.entities){let u=this._elements.rows?.[m.entity];u&&(u.style.display=Dn(m,this._hass)?"":"none")}}_renderBarRow(e){let o=this._cfg,n=Hn(e,o,this._hass),i=e.positions?.name??o.positions?.name??It.positions.name,r=e.positions?.value??o.positions?.value??It.positions.value,a=e.positions?.icon??o.positions?.icon??It.positions.icon,s=e.positions?.indicator??o.positions?.indicator??It.positions.indicator,l=e.animation??{},p=l.speed??o.animation.speed,d=l.effect??o.animation.effect,c=l.state??o.animation.state,m=this._buildIndicatorHtml(e,o,s),u=On(e,this._hass),h=this._buildPositionHtml(n,i,r,a,s,m,"outside",u),g=this._buildPositionHtml(n,i,r,a,s,m,"inside",u),v=k(ke(e.height??o.height)),w=k(ke(e.border_radius??o.border_radius)),b=n.color?`background-color:${k(n.color)};`:"",y=d==="charge"&&!n.isUnavailable?" charge":"",_=c==="off"?"transition:none;":"",S=Ee(e,o),A=`width:${n.fill*S}%;${_}${b}`,{lineHtml:M,labelRowHtml:I}=this._buildTargetHtml(e,o,n.min,n.max),L=this._buildSparklineHtml(e,o),T=`
      <div class="pb-bar-stack">
        ${I}
        <div class="pb-container" style="height:${v};border-radius:${w};--pb-animation-speed:${p}s;">
          <div class="pb-track"></div>
          ${L}
          <div class="pb-fill${y}" data-entity="${f(e.entity)}" style="${A}"></div>
          ${M}
          ${g}
        </div>
      </div>`,C=!!(e.interactive??o.interactive),x=C?`<div class="pb-interactive-row"><div class="pb-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${T}<div class="pb-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:T,E=C?"slider":"progressbar",F=n.isUnavailable?`role="${E}" aria-valuenow="0" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${f(n.name)}: Unavailable"`:`role="${E}" aria-valuenow="${n.numValue}" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${f(n.name)}: ${f(n.displayValue)}"`,N=n.isUnavailable?" unavailable":"",z=C?" data-interactive":"",R=n.isUnavailable?'data-state="unavailable"':`data-state="${f(n.numValue)}"`,O=n.color?` data-severity-color="${f(n.color)}"`:"";return`<div class="pb-row${N}" data-entity="${f(e.entity)}"${z} ${R}${O} ${F}>${h}${x}</div>`}_buildIndicatorHtml(e,o,n){if(n==="off")return"";let i=e.indicator??o.indicator,r=this._indicators[e.entity],a=r?.direction??"neutral",s=i?.show_delta===!0&&!!r,l=this._hass?.states[e.entity],p=Ce(e,l),d=_o(e,o,this._hass),{text:c}=zn(a,r?.delta??0,s,d,p),m=i?.inverted===!0?" inverted":"";return`<span class="pb-indicator ${a}${m}">${c}</span>`}_buildPositionHtml(e,o,n,i,r,a,s,l){if(o!==s&&n!==s&&i!==s&&r!==s)return"";let d=`<div class="${s==="outside"?"pb-labels":"pb-content"}"><div class="pb-label-left">`;return i===s&&e.resolvedIcon&&(d+=`<ha-icon class="pb-icon" icon="${f(e.resolvedIcon)}"></ha-icon>`),o===s&&(l?(d+='<div class="pb-name-group">',d+=`<span class="pb-name">${f(e.name)}</span>`,d+=`<span class="pb-secondary">${f(l)}</span>`,d+="</div>"):d+=`<span class="pb-name">${f(e.name)}</span>`),d+='</div><div class="pb-label-right">',n===s&&(d+=`<span class="pb-value">${f(e.displayValue)}</span>`),r===s&&a&&(d+=a),d+="</div></div>",d}_buildTargetHtml(e,o,n,i){let r=e.target??o.target,{value:a,showLabel:s}=xo(r,this._hass);if(a===null)return{lineHtml:"",labelRowHtml:""};let l=Tt((a-n)/(i-n),0,1)*100,p=Ee(e,o),d=`left:${l*p}%`,c=`<div class="pb-target" style="${d}"></div>`,m=s?`<div class="pb-target-label-row"><span class="pb-target-label" style="${d}">${f(a)}</span></div>`:"";return{lineHtml:c,labelRowHtml:m}}_updateBars(){let e=this._cfg;for(let o of e.entities){let n=Hn(o,e,this._hass),i=Ee(o,e),r=this._elements.rows?.[o.entity];if(!r||r.__pulseSliding)continue;let a=Dn(o,this._hass);if(r.style.display=a?"":"none",!a)continue;r.classList.toggle("unavailable",n.isUnavailable);let s=r.querySelector(".pb-fill");if(s){let g=`${n.fill*i}%`;s.style.width=g,s.style.backgroundColor=k(n.color);let v=r.querySelector(".pb-sparkline");v&&(v.style.width=`${i*100}%`);let w=r.querySelector(".pb-icon");w&&n.resolvedIcon&&w.setAttribute("icon",n.resolvedIcon)}let l=r.querySelectorAll(".pb-name");for(let g of l)g.textContent=n.name;let p=r.querySelectorAll(".pb-value");for(let g of p)g.textContent=n.displayValue;let d=r.querySelectorAll(".pb-secondary");if(d.length>0){let g=On(o,this._hass);for(let v of d)v.textContent=g}r.setAttribute("aria-valuenow",n.isUnavailable?"0":String(n.numValue)),r.setAttribute("aria-valuemin",String(n.min)),r.setAttribute("aria-valuemax",String(n.max)),r.setAttribute("aria-label",`${f(n.name)}: ${f(n.displayValue)}`),r.setAttribute("data-state",n.isUnavailable?"unavailable":String(n.numValue)),n.color?r.setAttribute("data-severity-color",n.color):r.removeAttribute("data-severity-color");let c=r.querySelector(".pb-target"),m=r.querySelector(".pb-target-label"),u=o.target??e.target,{value:h}=xo(u,this._hass);if(h!==null){let v=`${Tt((h-n.min)/(n.max-n.min),0,1)*100*i}%`;if(c&&(c.style.left=v,c.style.display=""),m){m.style.left=v,m.textContent=String(h);let w=m.closest(".pb-target-label-row");w&&(w.style.display="")}}else{c&&(c.style.display="none");let g=r.querySelector(".pb-target-label-row");g&&(g.style.display="none")}}}_scheduleIndicatorFetch(){let e=this._cfg;!e||!e.entities.some(n=>(n.indicator??e.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let e=this._cfg;if(!e)return;let o=this._fetchGen;try{let n=new Map;for(let r of e.entities)n.set(r.entity,r);let i=new Map;for(let r of e.entities){let a=r.indicator??e.indicator;if(!a?.show)continue;let s=a.period??60;i.has(s)||i.set(s,[]),i.get(s).push({entity:r.entity,icfg:a})}for(let[r,a]of i){let s=a.map(p=>p.entity),l=await _r(this._hass,s,r);if(o!==this._fetchGen)return;for(let{entity:p,icfg:d}of a){let c=n.get(p),m=this._hass?.states[p],u=c?.attribute?m?.attributes?.[c.attribute]:m?.state,h=yr(u,l[p]);this._indicators[p]=h;let g=this._elements.rows?.[p];if(!g)continue;let v=g.querySelector(".pb-indicator");if(v&&c){let w=this._hass?.states[p],b=Ce(c,w),y=_o(c,e,this._hass),{text:_}=zn(h.direction,h.delta,d.show_delta===!0,y,b),S=d.inverted===!0?" inverted":"";v.textContent=_,v.className=`pb-indicator ${h.direction}${S}`}}}}catch(n){qt("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(e,o){let n=e.sparkline??o.sparkline;if(!n)return null;let i=n===!0?{}:n.show?n:null;if(!i)return null;let r=i.hours_to_show??24,a=i.points_per_hour??1;return{hours:r,pointsPerHour:a,slots:Math.max(r*a,2),aggregateFunc:i.aggregate_func??"avg",smoothing:i.smoothing!==!1,strokeWidth:Number(i.line_width??i.stroke_width??1.5)||1.5,color:i.color??null,updateInterval:i.update_interval??300}}_buildSparklineMarkup(e,o,n=!1){let i=`${o*100}%`,r=e.color?`color:${k(e.color)};`:"";return`<svg${n?' xmlns="http://www.w3.org/2000/svg"':""} class="pb-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${i};${r}"><path d="${e.path}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_buildSparklineHtml(e,o){let n=this._resolveSparklineConfig(e,o);if(!n)return"";let i=this._sparklineData[e.entity];if(!i||i.length<2)return"";let r=yo(i,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!r)return"";let a=Ee(e,o);return this._buildSparklineMarkup({path:r,strokeWidth:n.strokeWidth,color:n.color},a,!1)}_scheduleSparklineFetch(){let e=this._cfg;if(!e||!e.entities.some(r=>!!this._resolveSparklineConfig(r,e)))return;let n=300;for(let r of e.entities){let a=this._resolveSparklineConfig(r,e);a&&a.updateInterval<n&&(n=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<n&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let e=this._cfg;if(!e)return;let o=this._fetchGen;try{let n=new Map;for(let i of e.entities){let r=this._resolveSparklineConfig(i,e);if(!r)continue;let a=r.hours;n.has(a)||n.set(a,[]),n.get(a).push(i.entity)}for(let[i,r]of n){let a=await Ye(this._hass,r,i);if(o!==this._fetchGen)return;for(let s of r)a[s]?.length&&(this._sparklineData[s]=a[s])}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){qt("Sparkline fetch failed: %O",n)}}_updateSparklines(){let e=this._cfg;if(e)for(let o of e.entities){let n=this._resolveSparklineConfig(o,e);if(!n)continue;let i=this._elements.rows?.[o.entity];if(!i)continue;let r=this._sparklineData[o.entity];if(!r||r.length<2)continue;let a=yo(r,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!a)continue;let s=i.querySelector(".pb-sparkline"),l=Ee(o,e),p=`${l*100}%`;if(s){let d=s.querySelector("path");d&&d.setAttribute("d",a),s.style.width=p}else{let d=i.querySelector(".pb-container");if(!d)continue;let c=this._buildSparklineMarkup({path:a,strokeWidth:n.strokeWidth,color:n.color},l,!0),m=new DOMParser().parseFromString(c,"image/svg+xml"),u=document.importNode(m.documentElement,!0),h=d.querySelector(".pb-track");h&&h.nextSibling?d.insertBefore(u,h.nextSibling):d.appendChild(u)}}}_cacheStates(){let e=this._cfg;this._prevStates={};for(let o of e.entities){let n=this._hass?.states[o.entity];n&&(this._prevStates[o.entity]={state:n.state,last_updated:n.last_updated});let i=Rn(o.target??e.target);if(i){let r=this._hass?.states[i];r&&(this._prevStates[`__target__${i}`]={state:r.state,last_updated:r.last_updated})}}}_cacheBarElements(){let e=this._cfg;this._elements.rows={};let o=new Map;for(let i of e.entities)o.set(i.entity,i);let n=this._shadow.querySelectorAll(".pb-row");for(let i of n){let r=i.dataset.entity;if(r){this._elements.rows[r]=i;let a=o.get(r);a&&(kr(i,this,this._hass,e,a),(a.interactive??e.interactive)&&Tr(i,this,e,a)),Dt(i);for(let s of i.querySelectorAll(".pb-step-btn"))Dt(s)}}}getCardSize(){let e=this._config?.entities?.length||1,o=this._config?.columns||1;return Math.ceil(e/o)+(this._config?.title?1:0)}getGridOptions(){return de(3)}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-bar-card-editor")}static getStubConfig(e){return{entity:Object.keys(e.states).filter(n=>{let i=e.states[n];return n.startsWith("sensor.")&&!isNaN(parseFloat(i.state))})[0]||"sensor.example"}}};customElements.get("pulse-bar-card")||customElements.define("pulse-bar-card",ho);customElements.get("pulse-card")||customElements.define("pulse-card",class extends ho{});window.customCards=window.customCards||[];window.customCards.push({type:"pulse-bar-card",name:"Pulse Bar Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-BAR-CARD %c v${dr} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Jg=ho;export{Jg as default};

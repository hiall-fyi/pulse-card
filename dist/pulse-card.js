var Rt=`
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pulse Card Family \u2014 Shared Design Tokens
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
  --pulse-space-card-wide: 20px;     /* weather chrome \u2014 wider inset for hero/cartouche layouts */
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

/* Card title \u2014 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label \u2014 uppercase, small, secondary tone.
   No opacity multiplier: --pulse-text-secondary is already the dimmed token,
   stacking 0.7 on top dropped light-theme contrast below WCAG-large threshold. */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stats row \u2014 grid layout primitive shared across the Pulse card
   family. Children are stat tiles emitted by each card's own type
   builder (e.g. pulse-weather's pt.stat). The row controls only
   layout: column count, divider, gap, margin.
   - data-cols: "3" | "4" \u2014 column count (default 4)
   - data-divided: "true" \u2014 adds a 1px hairline at the top so the row
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

/* Precipitation bar \u2014 Dark Sky signature element */
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
  border-radius: var(--pulse-radius-bar) var(--pulse-radius-bar) 0 0;
  background: var(--pulse-info-color);
}
`;var je=`${Rt}
  :host {
    display: block;

    /* Card-local design tokens \u2014 override via card-mod or HA theme.
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

  /* Multi-column grid \u2014 responsive: auto-collapse on narrow screens */
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

  /* Bar row \u2014 each entity */
  .pb-row {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-space-chip);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  /* Labels row (outside mode \u2014 default) */
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

  /* Target marker \u2014 visually distinct from fill */
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

  /* Target label */
  .pb-target-label {
    position: absolute;
    top: -18px;
    left: 50%;
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

  /* Inverted indicator \u2014 up is bad, down is good (CPU, memory, disk usage) */
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

  /* Title \u2014 adds layout padding on top of shared typography. */
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

  /* Keyboard focus indicator */
  .pb-row:focus-visible {
    outline: 2px solid var(--pulse-accent);
    outline-offset: 2px;
    border-radius: var(--pulse-radius-small);
  }

  /* Secondary info group \u2014 wraps name + secondary line */
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

  /* Inside bar \u2014 inherit text color from parent, reduce opacity */
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

  /* Interactive bar row layout \u2014 pb-container between step buttons */
  .pb-row[data-interactive] .pb-interactive-row {
    display: flex;
    align-items: stretch;
    gap: var(--pulse-space-hairline);
  }
  .pb-row[data-interactive] .pb-interactive-row .pb-container {
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

  /* Reduced motion \u2014 respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .pb-fill.charge { animation: none; }
    .pb-fill, .pb-row { transition: none; }
  }
`;var Ge="1.6.0",Ze="Pulse Card:",tt={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function m(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function et(t,e,i){return Math.min(Math.max(t,e),i)}var Yn=32;function _t(t){if(t==null||t==="")return"";let e=String(t);if(e.length>Yn)return e;let i=e.split(".");if(i.length>2)return e;for(let n of i){if(n.length===0)return e;for(let o=0;o<n.length;o++){let a=n.charCodeAt(o);if(a<48||a>57)return e}}return`${e}px`}function it(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function U(t,e=1){return t==null?"--":typeof t!="number"?String(t):isFinite(t)?String(parseFloat(t.toFixed(e))):"--"}var Ke="Pulse sparkline:";async function It(t,e,i=24){let n={};if(!t?.callWS||e.length===0)return n;let o=new Date,a=new Date(o.getTime()-i*60*60*1e3);try{let r=await t.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:o.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let s of e)try{let l=r?.[s];if(!l||l.length<2){n[s]=[];continue}let c=[];for(let p of l){let u=parseFloat(p.s);if(!isNaN(u)){let h=p.lu??p.last_updated,d=typeof h=="number"?h*1e3:new Date(h).getTime();isFinite(d)&&c.push({t:d,v:u})}}n[s]=c}catch(l){console.warn(`${Ke} parse failed for %s: %O`,s,l),n[s]=[]}}catch(r){console.warn(`${Ke} fetch failed: %O`,r);for(let s of e)n[s]=[]}return n}var Ye={avg:t=>t.reduce((e,i)=>e+i,0)/t.length,min:t=>Math.min(...t),max:t=>Math.max(...t),median:t=>{let e=[...t].sort((n,o)=>n-o),i=Math.floor(e.length/2);return e.length%2?e[i]:(e[i-1]+e[i])/2},first:t=>t[0],last:t=>t[t.length-1],sum:t=>t.reduce((e,i)=>e+i,0),delta:t=>Math.max(...t)-Math.min(...t),diff:t=>t[t.length-1]-t[0]};function Xn(t,e,i="avg"){if(t.length===0||e<1)return[];if(t.length<=e){let u=t[0].t,h=t[t.length-1].t-u||1;return t.map(d=>({x:(d.t-u)/h,v:d.v}))}let n=Ye[i]||Ye.avg,o=t[0].t,s=(t[t.length-1].t-o||1)/e,l=[],c=0,p=t[0].v;for(let u=0;u<e;u++){let h=o+(u+1)*s,d=[];for(;c<t.length&&t[c].t<h;)d.push(t[c].v),c++;d.length>0&&(p=n(d)),l.push({x:u/(e-1||1),v:p})}return l}function yt(t,e,i,n=24,o="avg",a=!0){if(t.length<2)return"";let r=Xn(t,n,o);if(r.length<2)return"";let s=r[0].v,l=r[0].v;for(let v=1;v<r.length;v++)r[v].v<s&&(s=r[v].v),r[v].v>l&&(l=r[v].v);let c=l-s||1,p=2,u=i-p*2,h=r.map(v=>({x:v.x*e,y:p+u-(v.v-s)/c*u}));if(h.length===2||!a){let v=`M${h[0].x.toFixed(1)},${h[0].y.toFixed(1)}`;for(let b=1;b<h.length;b++)v+=`L${h[b].x.toFixed(1)},${h[b].y.toFixed(1)}`;return v}let d=h[0],f=`M${d.x.toFixed(1)},${d.y.toFixed(1)}`;for(let v=1;v<h.length;v++){let b=h[v],g=(d.x+b.x)/2,_=(d.y+b.y)/2;f+=` ${g.toFixed(1)},${_.toFixed(1)}`,f+=` Q${b.x.toFixed(1)},${b.y.toFixed(1)}`,d=b}return f+=` ${d.x.toFixed(1)},${d.y.toFixed(1)}`,f}var Jn=new Set(["on","open","home","locked","playing","active"]),Qn=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function Qe(t,e,i){if(typeof t!="string")return null;let n=t.toLowerCase();return Jn.has(n)?i:Qn.has(n)?e:null}function to(t,e){let i=String(t),n=i.charAt(0).toUpperCase()+i.slice(1);return e?`${n}${e}`:n}function eo(t,e,i,n=!1){let o=Qe(t,e,i),a=o!==null?o:parseFloat(t);if(isNaN(a))return 0;let r=i-e;if(r<=0)return 0;let s=n?i-a:a;return et((s-e)/r,0,1)*100}function no(t,e){if(!e||e.length===0)return null;let i=parseFloat(t);if(isNaN(i))return null;for(let n of e)if(i>=n.from&&i<=n.to)return n;return null}function Xe(t){let e=t.replace("#","");return e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16)}}function oo(t,e,i){let n=Xe(t),o=Xe(e),a=Math.round(n.r+(o.r-n.r)*i),r=Math.round(n.g+(o.g-n.g)*i),s=Math.round(n.b+(o.b-n.b)*i);return`rgb(${a}, ${r}, ${s})`}function io(t,e){if(!e||e.length<2)return null;let i=parseFloat(t);if(isNaN(i))return null;let n=e[0].from<=e[e.length-1].from?e:[...e].sort((o,a)=>o.from-a.from);for(let o=0;o<n.length-1;o++){let a=n[o],r=n[o+1];if(i>=a.from&&i<=r.to){let s=r.from-a.from,l=s>0?(i-a.from)/s:0;return oo(a.color,r.color,et(l,0,1))}}return i<=n[0].from?n[0].color:n[n.length-1].color}function so(t,e,i){let n=t.min??i?.min,o=t.max??i?.max;return n==null&&(n=e?.attributes?.min??e?.attributes?.min_temp??tt.min),o==null&&(o=e?.attributes?.max??e?.attributes?.max_temp??tt.max),{min:parseFloat(String(n)),max:parseFloat(String(o))}}function Dt(t,e,i){return t.decimal??e.decimal??i?.entities?.[t.entity]?.display_precision??null}function wt(t,e){return t.unit_of_measurement??e?.attributes?.unit_of_measurement??""}function ao(t){return!isFinite(t)||t<0?"0":t>=1e9?`${(t/1e9).toFixed(1)}G`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString()}function ro(t,e,i){let n=parseFloat(t);if(isNaN(n))return String(t);let o=e!=null?n.toFixed(e):n.toString();return i?`${o}${i}`:o}function tn(t,e){if(e==null)return{direction:"neutral",delta:0};let i=parseFloat(t),n=parseFloat(e);if(isNaN(i)||isNaN(n))return{direction:"neutral",delta:0};if(!isFinite(i)||!isFinite(n))return{direction:"neutral",delta:0};let o=Math.abs(i-n),a=Math.max(Math.abs(i),1);if(o>a*1e3)return{direction:"neutral",delta:0};let r=Math.round((i-n)*100)/100;return{direction:r>0?"up":r<0?"down":"neutral",delta:r}}function oe(t,e,i,n,o){let a=t==="up"?"\u25B2":t==="down"?"\u25BC":"\u25B6";if(!i)return{arrow:a,text:a};let r=n!=null?e.toFixed(n):String(Math.round(e*100)/100),s=e>0?"+":"";return{arrow:a,text:`${a} ${s}${r}${o||""}`}}function st(t,...e){console.warn(`${Ze} ${t}`,...e)}async function en(t,e,i=60){let n={};if(!t?.callWS||e.length===0)return n;let o=new Date,a=new Date(o.getTime()-i*60*1e3);try{let r=await t.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:o.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let s of e){let l=r?.[s];if(!l||l.length===0){n[s]=null;continue}let c=parseFloat(l[0].s);n[s]=isNaN(c)?null:c}}catch(r){st("Failed to fetch history for %s: %O",e.join(", "),r);for(let s of e)n[s]=null}return n}function Je(t){return!Array.isArray(t)||t.length<2?t:[...t].sort((e,i)=>e.from-i.from)}function nn(t){if(!t)throw new Error("Please define an entity or entities");if(!t.entity&&!t.entities)throw new Error("Please define an entity or entities");let e={...tt,...t,animation:{...tt.animation,...t.animation},positions:{...tt.positions,...t.positions}};e.columns!==null&&e.columns!==void 0&&(e.columns=Number(e.columns)||1),e.animation.speed!==null&&e.animation.speed!==void 0&&(e.animation.speed=Number(e.animation.speed)||tt.animation.speed),e.severity&&(e.severity=Je(e.severity)),e.indicator?.show===!0&&e.positions.indicator==="off"&&(e.positions={...e.positions,indicator:"outside"}),e.entities=t.entities?t.entities.map(n=>{let o=typeof n=="string"?{entity:n}:{...n};return o.severity&&(o.severity=Je(o.severity)),!o.secondary_info&&e.secondary_info&&(o._cardSecondaryInfo=e.secondary_info),o.indicator?.show===!0&&o.positions&&o.positions.indicator==="off"?o.positions={...o.positions,indicator:"outside"}:o.indicator?.show===!0&&!o.positions?.indicator&&(o.positions={...o.positions||{},indicator:"outside"}),o}):[{entity:t.entity}];let i=new Set;for(let n of e.entities)i.has(n.entity)&&st('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',n.entity),i.add(n.entity);return e}function Pt(t,e){if(t==null)return{value:null,showLabel:!1};if(typeof t=="number")return{value:isNaN(t)?null:t,showLabel:!1};if(typeof t=="string"){let i=e?.states[t];if(!i)return{value:null,showLabel:!1};let n=parseFloat(i.state);return{value:isNaN(n)?null:n,showLabel:!1}}return typeof t=="object"&&t.value!==void 0?{value:Pt(t.value,e).value,showLabel:t.show_label===!0}:{value:null,showLabel:!1}}function ie(t,e,i){let n=i?.states[t.entity],o=!n||n.state==="unavailable"||n.state==="unknown"||n.state==="error",{min:a,max:r}=so(t,n,e),s=t.attribute?n?.attributes?.[t.attribute]:n?.state,l=t.attribute?null:Qe(s,a,r),c=l!==null,p=c?l:parseFloat(s),u=t.complementary??e.complementary,h=o?0:eo(s,a,r,u),d=wt(t,n),f=Dt(t,e,i),b=(t.limit_value??e.limit_value)&&!isNaN(p)?et(p,a,r):s,g=o?"Unavailable":t.state_map?.[s]?t.state_map[s]:c?to(s,d):ro(b,f,d),_=t.name??n?.attributes?.friendly_name??t.entity,y="",x="";if(!o){let T=t.state_color,I=n?.state;if(T&&I&&T[I])y=T[I];else{let E=t.attribute_color??e.attribute_color;if(E?.attribute&&E?.map){let $=n.attributes?.[E.attribute];if($!=null){let w=E.map[String($)];w&&(y=w)}}if(!y){let $=t.severity??e.severity;if($&&$.length>0)if($.some(M=>M.mode==="gradient")){let M=io(p,$);M&&(y=M)}else{let M=no(p,$);M&&(y=M.color,M.icon&&(x=M.icon))}}}}let S=y||t.color||e.color||"",C=t.icon||n?.attributes?.icon||"";return{isUnavailable:o,min:a,max:r,numValue:p,fill:h,displayValue:g,name:_,color:S,resolvedIcon:x||C}}function xt(t,e){let i=t.bar_width??e.bar_width;return i!=null?Math.max(1,Math.min(100,i))/100:1}function se(t,e){if(!t.visibility)return!0;let i=e?.states[t.entity];if(!i)return!1;let n=t.visibility,o=t.attribute?i.attributes?.[t.attribute]:i.state;if(!t.attribute&&(i.state==="unavailable"||i.state==="unknown"||i.state==="error"))return n.state_equal!==void 0&&String(n.state_equal)===i.state;let a=parseFloat(o);return!(n.state_above!==void 0&&(isNaN(a)||a<=n.state_above)||n.state_below!==void 0&&(isNaN(a)||a>=n.state_below)||n.state_equal!==void 0&&String(o)!==String(n.state_equal)||n.state_not_equal!==void 0&&String(o)===String(n.state_not_equal))}var on={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:t=>t/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function Ot(t,e,i,n){if(n<=0)return et(t,e,i);let o=Math.round((t-e)/n)*n+e,a=(String(n).split(".")[1]||"").length,r=Number(o.toFixed(a));return et(r,e,i)}function sn(t,e,i){if(i?.service){let r=i.service.split(".");if(r.length<2||!r[0]||!r[1])return null;let s={entity_id:t};if(i.data)for(let[l,c]of Object.entries(i.data))s[l]=c==="$value"?e:c;return{domain:r[0],service:r[1],data:s}}let n=t.split(".")[0],o=on[n];if(!o)return null;let a=o.transform?o.transform(e):e;return{domain:n,service:o.service,data:{entity_id:t,[o.dataKey]:a}}}function Ft(t,e,i,n){let o=t.split(".")[0],r=on[o]?.fixedRange,s=e?.attributes,l=n?.min??s?.min??s?.min_temp??r?.min??0,c=n?.max??s?.max??s?.max_temp??r?.max??100,p=i?.step??s?.step??s?.target_temp_step??s?.percentage_step??r?.step??1;return{min:Number(l),max:Number(c),step:Number(p)||1}}function lo(t){if(!t)return"";let e=new Date(t).getTime();if(isNaN(e))return"";let i=Date.now()-e;if(i<0)return"just now";let n=Math.floor(i/1e3);if(n<60)return"just now";let o=Math.floor(n/60);if(o<60)return`${o} min ago`;let a=Math.floor(o/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function ae(t,e){let i=t.secondary_info??t._cardSecondaryInfo;if(!i)return"";if(i.text!==void 0&&i.text!==null&&i.text!=="")return String(i.text);let n=e?.states[t.entity];if(!n)return"";if(i.template)return i.template.replace(/\{(\w+)\}/g,(o,a)=>{let r=n.attributes?.[a];return r==null?"":(a==="bytes"||a==="packets")&&typeof r=="number"?ao(r):String(r)});if(i.attribute){let o=n.attributes?.[i.attribute];return o!=null?String(o):""}return i.type==="last_changed"?lo(n.last_changed):""}function qt(t,e,i){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:i}))}function co(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();if(e.startsWith("/")&&!e.startsWith("//")||e.startsWith("./")||e.startsWith("../")||e.startsWith("#"))return!0;try{let i=new URL(e,window.location.href);return["http:","https:","mailto:","tel:"].includes(i.protocol)}catch{return!1}}function po(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();return!(e.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(e))}function $t(t,e,i,n,o){if(!(!i||i.action==="none"))switch(i.action){case"more-info":qt(t,"hass-more-info",{entityId:i.entity||n});break;case"navigate":i.navigation_path&&po(i.navigation_path)?(history.pushState(null,"",i.navigation_path),qt(t,"location-changed",{replace:!1})):i.navigation_path&&o("navigation_path rejected \u2014 must be a same-origin relative path: %s",i.navigation_path);break;case"call-service":case"perform-action":{let a=i.service||i.perform_action;if(!a||typeof a!="string")break;let r=a.indexOf(".");if(r<=0||r===a.length-1){o('Service rejected \u2014 expected "domain.service" format, got: %s',a);break}let s=a.slice(0,r),l=a.slice(r+1);e.callService(s,l,i.service_data||i.data).catch(c=>o("Service call %s failed: %O",a,c));break}case"url":i.url_path&&co(i.url_path)?window.open(i.url_path,"_blank","noopener,noreferrer"):i.url_path&&o("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",i.url_path);break;case"toggle":e.callService("homeassistant","toggle",{entity_id:i.entity||n}).catch(a=>o("Toggle %s failed: %O",i.entity||n,a));break}}function uo(t,e,i){let n=e?.[t],o=i?.[t];return n||o||{action:t==="tap_action"?"more-info":"none"}}function Bt(t,e,i,n,o){let a=uo(o,n,i);$t(t,e,a,n.entity,st)}function le(t){let e=t.__pulseCleanup;typeof e=="function"&&e()}function an(t,e,i,n,o){le(t);let a=new AbortController,{signal:r}=a,s=0,l=null,c=null,p=!1;t.__pulseCleanup=()=>{a.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete t.__pulseCleanup},t.setAttribute("tabindex","0"),t.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),e._hass&&Bt(e,e._hass,n,o,"tap_action"))},{signal:r}),t.addEventListener("click",h=>{if(h.preventDefault(),p){p=!1;return}t.__pulseSliding||(s++,s===1?l=setTimeout(()=>{s=0,e._hass&&Bt(e,e._hass,n,o,"tap_action")},250):s===2&&(l&&clearTimeout(l),s=0,e._hass&&Bt(e,e._hass,n,o,"double_tap_action")))},{signal:r}),t.addEventListener("pointerdown",()=>{p=!1,c=setTimeout(()=>{p=!0,e._hass&&Bt(e,e._hass,n,o,"hold_action")},500)},{signal:r});let u=()=>{c&&clearTimeout(c)};t.addEventListener("pointerup",u,{signal:r}),t.addEventListener("pointercancel",u,{signal:r}),t.addEventListener("contextmenu",h=>h.preventDefault(),{signal:r})}var ho=50;function ce(t){let e=t.__pulseSliderCleanup;typeof e=="function"&&e()}function rn(t,e,i,n){ce(t);let o=t.querySelector(".pb-container");if(!o)return;let a=o,r=new AbortController,{signal:s}=r,l=null;t.__pulseSliderCleanup=()=>{r.abort(),l&&clearTimeout(l),v&&clearInterval(v),delete t.__pulseSliderCleanup};let c=typeof n.interactive=="object"?n.interactive:typeof i.interactive=="object"?i.interactive:void 0,p=null;function u(_){let y=a.getBoundingClientRect(),x=Math.max(0,Math.min(_-y.left,y.width)),S=y.width>0?x/y.width:0,A=e._hass?.states[n.entity],{min:T,max:I,step:E}=Ft(n.entity,A,c,n),$=T+S*(I-T);return Ot($,T,I,E)}function h(_){let x=e._hass?.states[n.entity],{min:S,max:C,step:A}=Ft(n.entity,x,c,n),T=C-S,I=T>0?(_-S)/T*100:0,E=a.querySelector(".pb-fill");E&&(E.style.width=`${I}%`);let $=wt(n,x),w=(String(A).split(".")[1]||"").length,M=w>0?_.toFixed(w):String(Math.round(_)),L=$?`${M}${$}`:M,N=t.querySelectorAll(".pb-value");for(let Z of N)Z.textContent=L}function d(){if(!p)return;let _=a.querySelector(".pb-fill");_&&(_.style.transition="",_.style.width=p.fillWidth);let y=t.querySelectorAll(".pb-value");for(let x of y)x.textContent=p.displayValue}function f(_){let y=sn(n.entity,_,c);if(!y){st("No slider service mapping for %s",n.entity),d();return}let x=e._hass;if(!x){d();return}x.callService(y.domain,y.service,y.data).catch(S=>{st("Slider service call failed for %s: %O",n.entity,S),d()})}a.addEventListener("pointerdown",_=>{if(!e._hass)return;_.preventDefault();let y=a.querySelector(".pb-fill"),x=t.querySelector(".pb-value");p={fillWidth:y?.style.width||"0%",displayValue:x?.textContent||"",pointerId:_.pointerId,startX:_.clientX},t.__pulseSliding=!0,a.setPointerCapture(_.pointerId),t.classList.add("sliding"),y&&(y.style.transition="none");let S=u(_.clientX);h(S)},{signal:s}),a.addEventListener("pointermove",_=>{if(!p||_.pointerId!==p.pointerId)return;_.preventDefault();let y=u(_.clientX);h(y)},{signal:s}),a.addEventListener("pointerup",_=>{if(!p||_.pointerId!==p.pointerId)return;_.preventDefault();let y=a.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),a.releasePointerCapture(_.pointerId);let x=u(_.clientX);h(x),f(x),p=null,l=setTimeout(()=>{t.__pulseSliding=!1},ho)},{signal:s}),a.addEventListener("pointercancel",_=>{if(!p||_.pointerId!==p.pointerId)return;let y=a.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),a.releasePointerCapture(_.pointerId),d(),p=null,t.__pulseSliding=!1},{signal:s});let v=null;function b(_){let y=e._hass;if(!y)return;let x=y.states[n.entity],{min:S,max:C,step:A}=Ft(n.entity,x,c,n),T=n.attribute?parseFloat(x?.attributes?.[n.attribute]):parseFloat(x?.state);if(isNaN(T))return;let I=Ot(T+_*A,S,C,A);I!==T&&(h(I),f(I))}let g=t.querySelectorAll(".pb-step-btn");for(let _ of g){let y=Number(_.dataset.step);_.addEventListener("click",S=>{S.stopPropagation(),b(y)},{signal:s}),_.addEventListener("pointerdown",S=>{S.stopPropagation(),v&&clearInterval(v),v=setInterval(()=>b(y),200)},{signal:s});let x=()=>{v&&(clearInterval(v),v=null)};_.addEventListener("pointerup",x,{signal:s}),_.addEventListener("pointercancel",x,{signal:s}),_.addEventListener("pointerleave",x,{signal:s})}t.addEventListener("keydown",_=>{let y=e._hass;if(!y||_.key!=="ArrowRight"&&_.key!=="ArrowUp"&&_.key!=="ArrowLeft"&&_.key!=="ArrowDown")return;_.preventDefault();let x=y.states[n.entity],{min:S,max:C,step:A}=Ft(n.entity,x,c,n),T=n.attribute?parseFloat(x?.attributes?.[n.attribute]):parseFloat(x?.state);if(isNaN(T))return;let I=_.key==="ArrowRight"||_.key==="ArrowUp"?1:-1,E=Ot(T+I*A,S,C,A);E!==T&&(h(E),f(E))},{signal:s})}function at(t){if(!customElements.get("ha-ripple")||t.querySelector("ha-ripple"))return;let e=document.createElement("ha-ripple");t.appendChild(e),t.classList.add("has-ripple")}var ln="1.6.0",Ut="pulse-climate-card",cn="pulse-climate-card-editor",gt="Pulse Climate Card:",vt={heating:{icon:"mdi:fire",token:"var(--pulse-status-yellow)",fallback:"#FF9800",label:"Heating"},cooling:{icon:"mdi:snowflake",token:"var(--pulse-status-blue)",fallback:"#2196F3",label:"Cooling"},drying:{icon:"mdi:water-off",token:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",token:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",token:"var(--pulse-text-secondary)",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",token:"var(--pulse-disabled)",fallback:"#616161",label:"Off"}},pe={None:{token:"var(--pulse-status-green)",fallback:"#4CAF50"},Low:{token:"var(--pulse-status-green)",fallback:"#8BC34A"},Medium:{token:"var(--pulse-status-yellow)",fallback:"#FF9800"},High:{token:"var(--pulse-status-red)",fallback:"#F44336"},Critical:{token:"var(--pulse-status-red)",fallback:"#B71C1C"}},pn=["zones"];var rt=["var(--pulse-status-blue)","var(--pulse-status-red)","var(--pulse-status-green)","var(--pulse-status-yellow)","var(--pulse-accent)","var(--pulse-info-color)","var(--pulse-status-yellow)","var(--success-color, #8BC34A)"],dt={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},dn={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var de=`${Rt}
:host {
  display: block;

  /* Card-local design tokens \u2014 override via card-mod or HA theme.
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

  /* Hearth wash \u2014 static bottom-edge ember glow over --pulse-bg-card.
     Atmosphere module (state-driven conic gradient) animates over the top. */
  --pc-hearth-glow-inner: rgba(255, 138, 70, 0.10);
  --pc-hearth-glow-mid:   rgba(180, 70, 50, 0.04);

  /* Section-local typography \u2014 values used by only one section, kept card-local
     so they don't pollute the shared token surface. */
  --pc-rank-text: 13px;     /* zone-ranking row name + value */
  --pc-detail-name: 15px;   /* zone detail panel \u2014 clicked-zone heading */
  --pc-detail-stat: 22px;   /* zone detail panel \u2014 primary stat value */
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

/* Title \u2014 adds layout margin on top of shared typography. */
.pulse-title { margin-bottom: 12px; }

/* Section container */
.pc-section { margin-top: 12px; }
.pc-section:first-child { margin-top: 0; }
.pulse-section-label { margin-bottom: 6px; }

/* Zone row */
.pc-zone-row {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-tight);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-zone-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}
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
.pc-tag-heat { background: color-mix(in srgb, var(--pulse-status-yellow) 18%, transparent); color: var(--pulse-status-yellow); }
.pc-tag-cool { background: color-mix(in srgb, var(--pulse-tier-calm) 18%, transparent); color: var(--pulse-tier-calm); }
.pc-tag-idle { color: var(--pulse-text-secondary); opacity: 0.7; }
.pc-tag-at-target { color: var(--pulse-status-green); opacity: 0.9; }
.pc-tag-off { color: var(--pulse-text-secondary); opacity: 0.6; }
.pc-tag-unavail { background: color-mix(in srgb, var(--pulse-status-red) 12%, transparent); color: color-mix(in srgb, var(--pulse-status-red) 80%, white); }

/* State-tinted current temperature on rows */
.pc-zone-row.pc-row-heat .pc-zone-temp { color: var(--pulse-status-yellow); }
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
.pc-zone-temp {
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-primary);
  white-space: nowrap;
  flex-shrink: 0;
}
.pc-zone-target {
  font-size: 0.8em;
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.pc-zone-humidity {
  font-size: 0.8em;
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
}
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
  color: var(--pulse-text-secondary);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-chip ha-icon { --mdc-icon-size: 14px; }
.pc-chip.pc-severity-high { color: var(--pulse-status-red); }
.pc-chip.pc-severity-medium { color: var(--pulse-status-yellow); }
.pc-chip.pc-severity-critical { color: var(--pulse-status-red); font-weight: var(--pulse-weight-semibold); }

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
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
  min-width: 80px;
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

/* Donut arcs \u2014 largest auto-blooms via inline filter attr (per-instance unique
   id from renderDonut), idle dim 0.6. CSS does not set filter so inline attr
   wins. Hover lifts opacity only \u2014 bloom stays anchored to active. */
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

/* Zone Pulse mode \u2014 waveform as row background */
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
.pc-zone-row-pulse:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
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

/* Heating row glow \u2014 warm border shadow */
.pc-zone-row-pulse.pc-heating {
  animation: pc-row-glow 3s ease-in-out infinite;
}
@keyframes pc-row-glow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Thermal Timeline layout */
.pc-section-thermal-strip .pc-timeline-row {
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
.pc-section-thermal-strip .pc-timeline-row:hover {
  background: var(--pulse-bg-hover);
}
.pc-section-thermal-strip .pc-timeline-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-strip-container,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-strip-container { height: 18px; }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-zone-label { color: var(--pulse-text-primary); font-weight: var(--pulse-weight-medium); }
.pc-section-thermal-strip .pc-zone-label {
  width: 76px;
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  text-align: right;
  padding-right: 10px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Strip container \u2014 shared by thermal strip and comfort strip (timeline mode) */
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
}
.pc-section-thermal-strip .pc-time-label {
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* Strip tooltip \u2014 shared by timeline and heatmap */
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

/* Strip crosshair \u2014 vertical line across all zone rows */
.pc-strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--pulse-text-primary);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
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

/* Comfort Heatmap \u2014 HTML div cells for hover/click */
.pc-section-comfort-strip .pc-heatmap-body { padding: 4px 0; }
.pc-section-comfort-strip .pc-heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: var(--pulse-radius-pill);
  padding: 2px 0;
  position: relative;
  overflow: visible;
  transition: background var(--pulse-anim-fast);
}
.pc-section-comfort-strip .pc-heatmap-row:hover { background: var(--pulse-bg-hover); }
.pc-section-comfort-strip .pc-heatmap-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}
.pc-section-comfort-strip .pc-zone-label {
  width: 66px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  transition: color var(--pulse-anim-base);
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-zone-label {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

/* Heatmap cells \u2014 shared by comfort strip and thermal strip (heatmap mode) */
.pc-section-comfort-strip .pc-cells,
.pc-section-thermal-strip .pc-cells {
  display: flex;
  gap: var(--pulse-space-pin);
  flex: 1;
  touch-action: pan-y;
}
.pc-section-comfort-strip .pc-cell,
.pc-section-thermal-strip .pc-cell {
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
.pc-heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 66px;
  padding: 4px 0 14px;
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
}

/* Energy Flow */
.pc-ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.pc-ribbon { cursor: pointer; transition: opacity var(--pulse-anim-base); }
.pc-ribbon:hover { opacity: 1 !important; }
.pc-ribbon.pc-dimmed { opacity: 0.2; }

/* Radial */
.pc-section-radial { text-align: center; }
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
  padding: 2px 4px;
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
  padding: 4px 8px;
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
  background: var(--pulse-status-green);
  animation: pc-pulse-dot-glow 2s ease-in-out infinite;
}
.pc-pulse-dot.pc-disconnected {
  background: var(--pulse-status-red);
}
@keyframes pc-pulse-dot-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
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
}
.pc-home-status-label {
  font-size: var(--pulse-font-large);
  font-weight: var(--pulse-weight-medium);
  margin-bottom: 4px;
}
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
.pc-home-status-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}
.pc-home-status-zone-name {
  width: 70px;
  flex-shrink: 0;
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
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
}
.pc-home-status-delta-text {
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
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
  font-size: var(--pulse-font-micro);
  text-transform: uppercase;
  letter-spacing: var(--pulse-ls-kicker);
  color: var(--pulse-text-secondary);
  opacity: 0.6;
  padding: 4px 0;
  border: none;
  border-bottom: 1.5px solid transparent;
  background: none;
  border-radius: 0;
  cursor: pointer;
  transition: color var(--pulse-anim-base), border-color var(--pulse-anim-base), opacity var(--pulse-anim-base);
}
.pc-ranking-tab:hover {
  color: var(--pulse-text-primary);
  background: none;
  opacity: 1;
}
.pc-ranking-tab.pc-active {
  color: var(--pulse-text-primary);
  background: none;
  border-bottom-color: var(--pulse-accent);
  opacity: 1;
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
.pc-rank-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
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
  font-size: var(--pc-rank-text);
  font-weight: var(--pulse-weight-medium);
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
}
.pc-rank-value {
  font-size: var(--pc-rank-text);
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

/* Temperature transition glow \u2014 brief brightness flash on temp change */
.pc-temp-transitioning {
  filter: brightness(1.4);
  transition: filter var(--pulse-anim-mode) ease-in, filter var(--pulse-anim-fill) ease-out var(--pulse-anim-mode);
}

/* \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pc-hero { display: flex; align-items: flex-end; justify-content: space-between; padding: 4px 0 16px; gap: var(--pulse-space-section); flex-wrap: wrap; }
.pc-hero-left { display: flex; flex-direction: column; gap: var(--pulse-space-tight); min-width: 0; }
.pc-hero-label { font-size: 9px; text-transform: uppercase; letter-spacing: 0.6px; color: var(--pulse-text-secondary); }
.pc-hero-temp { font-size: 44px; font-weight: 200; letter-spacing: -1.5px; line-height: 1; color: var(--pulse-text-primary); font-variant-numeric: tabular-nums; }
.pc-hero-right { display: flex; flex-direction: column; align-items: flex-end; gap: var(--pulse-space-tight); font-size: 10px; color: var(--pulse-text-secondary); text-align: right; line-height: 1.5; flex-shrink: 0; }
.pc-hero-status { display: flex; align-items: center; gap: var(--pulse-space-tight); }
.pc-hero-dot { display: inline-block; width: 6px; height: 6px; border-radius: var(--pulse-radius-circle); background: var(--pulse-text-secondary); flex-shrink: 0; }
.pc-hero-dot.pc-hero-dot-active { background: var(--pulse-accent); box-shadow: 0 0 8px var(--pulse-accent); animation: pc-hero-dot-blink 1.6s ease-in-out infinite; }
@keyframes pc-hero-dot-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
.pc-hero-breakdown { opacity: 0.7; }
.pc-hero-strip { display: flex; gap: var(--pulse-space-pin); height: 8px; margin: 0 0 14px; border-radius: var(--pulse-radius-bar); overflow: hidden; flex-basis: 100%; }
.pc-hero-strip span { flex: 1; }
.pc-hero-outside {
  display: flex; justify-content: space-between; align-items: baseline;
  padding-top: 8px; flex-basis: 100%;
  border-top: 1px solid var(--pulse-border-subtle);
}
.pc-hero-outside-label {
  font-size: var(--pulse-font-micro); text-transform: uppercase;
  letter-spacing: var(--pulse-ls-kicker);
  color: var(--pulse-text-secondary); opacity: 0.7;
}
.pc-hero-outside-value {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  font-variant-numeric: tabular-nums;
}
.pc-hero.pc-state-off .pc-hero-temp,
.pc-hero.pc-state-idle .pc-hero-temp { color: var(--pulse-text-secondary); }
@container (max-width: 280px) {
  .pc-hero { flex-direction: column; align-items: flex-start; }
  .pc-hero-right { align-items: flex-start; text-align: left; }
}

/* \u2500\u2500 Atmosphere backdrop \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pc-atmosphere-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
  overflow: hidden;
  opacity: var(--pc-atmosphere-opacity, 0.7);
  transition: opacity var(--pulse-anim-reveal) ease;
}
.pc-atmosphere-backdrop::before {
  content: '';
  position: absolute;
  inset: -10%;
  background: var(--pc-atmosphere-gradient, transparent);
  filter: blur(34px);
  animation: pc-atmosphere-rotate var(--pc-atmosphere-rotate, 30s) linear infinite;
}
@keyframes pc-atmosphere-rotate {
  from { transform: rotate(0deg) scale(1.25); }
  to   { transform: rotate(360deg) scale(1.25); }
}

/* Intensity tiers */
.pc-atmosphere-backdrop.pc-intensity-subtle  { --pc-atmosphere-opacity: 0.4; }
.pc-atmosphere-backdrop.pc-intensity-medium  { --pc-atmosphere-opacity: 0.7; }
.pc-atmosphere-backdrop.pc-intensity-bold    { --pc-atmosphere-opacity: 1.0; }

/* State palettes \u2014 rgba kept inline for bundle size; override via --pc-atmosphere-gradient */
.pc-atmosphere-backdrop.pc-state-heating {
  --pc-atmosphere-gradient: conic-gradient(from 220deg at 30% 70%,
    rgba(255,90,40,0.22) 0deg, rgba(255,140,60,0.14) 90deg,
    rgba(80,120,200,0.08) 200deg, rgba(255,90,40,0.22) 360deg);
}
.pc-atmosphere-backdrop.pc-state-cooling {
  --pc-atmosphere-gradient: conic-gradient(from 220deg at 70% 30%,
    rgba(74,144,226,0.22) 0deg, rgba(126,192,255,0.14) 90deg,
    rgba(120,90,200,0.08) 200deg, rgba(74,144,226,0.22) 360deg);
}
.pc-atmosphere-backdrop.pc-state-mixed {
  --pc-atmosphere-gradient: conic-gradient(from 0deg at 50% 50%,
    rgba(255,90,40,0.18) 0deg, rgba(255,140,60,0.12) 90deg,
    rgba(74,144,226,0.18) 180deg, rgba(126,192,255,0.12) 270deg,
    rgba(255,90,40,0.18) 360deg);
  --pc-atmosphere-rotate: 28s;
}
.pc-atmosphere-backdrop.pc-state-idle {
  --pc-atmosphere-gradient: radial-gradient(ellipse 80% 60% at 50% 30%,
    rgba(255,255,255,0.06) 0%, transparent 70%);
}
.pc-atmosphere-backdrop.pc-state-idle::before { animation: none; }
.pc-atmosphere-backdrop.pc-state-off {
  --pc-atmosphere-gradient: radial-gradient(ellipse 80% 60% at 50% 50%,
    rgba(255,255,255,0.04) 0%, transparent 70%);
  --pc-atmosphere-opacity: 0.5;
}
.pc-atmosphere-backdrop.pc-state-off::before { animation: none; }

/* Card content sits above backdrop */
.pc-card-content {
  position: relative;
  z-index: 1;
}

/* Reduced motion \u2014 respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  .pc-power-bar-fill.pc-bar-active { animation: none; }
  .pc-heating-glow { animation: none; }
  .pc-zone-row-pulse.pc-heating { animation: none; }
  .pc-pulse-dot.pc-connected { animation: none; }
  .pc-temp-transitioning { filter: none; transition: none; }
  .pc-atmosphere-backdrop::before { animation: none; }
  .pc-hero-dot.pc-hero-dot-active { animation: none; box-shadow: none; }
}
`;function lt(t,...e){console.warn(`${gt} ${t}`,...e)}var un=new Set;function ue(t,e,i,n){if(!i||n[i])return;let o=`${t}|${e}|${i}`;un.has(o)||(un.add(o),lt(`zone "%s": ${e} override points at missing entity "%s" \u2014 chip will not render`,t,i))}function St(t){return vt[t]||vt.idle}function Wt(t){let e=t.filter(a=>!a.isUnavailable);if(e.length===0)return"off";let i=0,n=0,o=0;for(let a of e)a.hvacAction==="heating"?i+=1:a.hvacAction==="cooling"?n+=1:a.hvacAction==="off"&&(o+=1);return i>0&&n>0?"mixed":i>0?"heating":n>0?"cooling":o===e.length?"off":"idle"}function Et(t,e,i){let n=J(t,{},e,i||{entity:t},{});return{name:n.name,temp:n.currentTemp??void 0,target:n.targetTemp??void 0,humidity:n.humidity??void 0,hvacAction:n.hvacAction,unit:n.unit}}function jt(t){let e=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();return pe[e]||pe.Low}function Mt(t,e,i){return i<=e?50:et((t-e)/(i-e),0,1)*100}function mo(t,e,i,n){let o=[],a=!n,r=l=>a||n.includes(l);if(n&&r("humidity")&&t.humidity!==null&&o.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(t.humidity)}%`}),r("hvac_action")){let l=St(t.hvacAction);o.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(r("overlay")&&t.overlayType){let l=t.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";o.push({type:"overlay",icon:l,label:t.overlayType,entityId:e.overlay})}if(r("preset")&&t.presetMode){let l=t.presetMode==="away"?"mdi:home-export-outline":"mdi:home";o.push({type:"preset",icon:l,label:t.presetMode==="away"?"Away":"Home"})}let s=(l,c,p)=>{if(!r(l)||!e[p])return;let u=i[e[p]];if(u&&!["unavailable","unknown","none"].includes(u.state.toLowerCase())){let h=jt(u.state);o.push({type:l,icon:c,label:u.state,color:h.token,severity:u.state,entityId:e[p]})}};if(r("open_window")&&e.open_window){let l=i[e.open_window];if(l){let c=l.state==="on";o.push({type:"open_window",icon:c?"mdi:window-open":"mdi:window-closed",label:c?"Open":"Closed",color:c?"var(--pulse-status-red)":void 0,entityId:e.open_window})}}if(r("window_predicted")&&e.window_predicted){let l=i[e.window_predicted];l&&l.state==="on"&&o.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"var(--pulse-status-yellow)",entityId:e.window_predicted})}if(s("mold_risk","mdi:mushroom","mold_risk"),s("condensation","mdi:water-alert","condensation"),r("comfort_level")&&e.comfort_level){let l=i[e.comfort_level];l&&l.state!=="unavailable"&&o.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:e.comfort_level})}if(r("preheat_now")&&e.preheat_now){let l=i[e.preheat_now];l&&l.state==="on"&&o.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"var(--pulse-status-yellow)",entityId:e.preheat_now})}if(r("battery")||r("battery_all")){let l=n&&n.includes("battery_all"),c=[],p=["battery"],u=2;for(;e[`battery_${u}`];)p.push(`battery_${u}`),u++;for(let h of p){let d=e[h];if(!d)continue;let f=i[d];!f||f.state==="unavailable"||c.push({eid:d,state:f.state,lower:f.state.toLowerCase()})}if(c.length>0)if(l)for(let h=0;h<c.length;h++){let d=c[h],f=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",v=d.lower==="critical"?"var(--pulse-status-red)":d.lower==="low"?"var(--pulse-status-yellow)":void 0;o.push({type:`battery${h>0?`_${h+1}`:""}`,icon:f,label:d.state,color:v,entityId:d.eid})}else{let h={critical:3,low:2,normal:1},d=c[0];for(let b of c)(h[b.lower]||0)>(h[d.lower]||0)&&(d=b);let f=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",v=d.lower==="critical"?"var(--pulse-status-red)":d.lower==="low"?"var(--pulse-status-yellow)":void 0;o.push({type:"battery",icon:f,label:d.state,color:v,entityId:d.eid})}}if(r("valve_control")){let c=i[t.entityId]?.attributes||{},p=c.valve_control_active,u=c.valve_target,h=c.valve_control_backed_off,d=c.valve_control_enabled;h===!0?o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"var(--pulse-disabled)"}):p===!0&&u!==void 0?o.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${U(u)}${t.unit}`,color:"var(--pulse-status-yellow)"}):d===!0&&o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Idle",color:"var(--pulse-disabled)"})}if(n&&r("temp_source")){let c=i[t.entityId]?.attributes?.temperature_source;if(c&&c!=="cloud"){let p=c==="external"?"mdi:thermometer-probe":c==="homekit"?"mdi:apple":"mdi:cloud-outline";o.push({type:"temp_source",icon:p,label:c.charAt(0).toUpperCase()+c.slice(1)})}}return o}function J(t,e,i,n,o){let a=i[t],r=!a||a.state==="unavailable"||a.state==="unknown",s=a?.attributes||{},l=t.startsWith("sensor."),c=l?r?null:parseFloat(a?.state)||null:s.current_temperature??null,p=r||a?.state==="off"?null:s.temperature??null,u=l?null:s.current_humidity??null,h=l?"idle":s.hvac_action||(a?.state==="off"?"off":"idle"),d=l?"sensor":a?.state||"off",f=s.preset_mode||"",v=Number(s.min_temp??5),b=Number(s.max_temp??35),g=Number(s.target_temp_step??.5),_=s.unit_of_measurement||"\xB0C",y=0;if(e.heating_power){let w=i[e.heating_power];w&&w.state!=="unavailable"&&(y=parseFloat(w.state)||0)}else s.heating_power!==void 0&&(y=parseFloat(s.heating_power)||0);let x=0;if(e.ac_power){let w=i[e.ac_power];w&&w.state!=="unavailable"&&(x=parseFloat(w.state)||0)}let S="";if(e.overlay){let w=i[e.overlay];w&&w.state!=="unavailable"&&(S=w.state)}else s.overlay_type&&(S=s.overlay_type);let C=n.name||s.friendly_name||t.replace(/^(climate|sensor)\./,""),A=n.icon||s.icon||"mdi:thermometer",T=n.chips||o.chips||null,I={...e},E=n.name||t;n.open_window_entity&&(I.open_window=n.open_window_entity,ue(E,"open_window_entity",n.open_window_entity,i)),n.battery_entity&&(I.battery=n.battery_entity,ue(E,"battery_entity",n.battery_entity,i)),n.mold_risk_entity&&(I.mold_risk=n.mold_risk_entity,ue(E,"mold_risk_entity",n.mold_risk_entity,i));let $={entityId:t,name:C,icon:A,isUnavailable:r,currentTemp:c,targetTemp:p,humidity:u,heatingPower:y,coolingPower:x,hvacAction:h,hvacMode:d,presetMode:f,overlayType:S,minTemp:v,maxTemp:b,tempStep:g,unit:_,chips:[]};return $.chips=mo($,I,i,T),$}var hn=280;function he(t,e=hn){return t<=50?0:(2+(t-50)/50*3)*(e/hn)}function mn(t,e=20,i=1){if(i<=0)return 0;let n=Math.min(4,Math.max(2,Math.round(t/30))),o=Math.floor(e/i);return Math.min(n,o)}function fn(t){return 4-t/100*2.5}function gn(t,e){return 1.5+t/e*1.5}function kt(t,e){return 3*(t/e)}function vn(t){if(!t)throw new Error("Please define an entity or zones");if(!t.entity&&!t.zones)throw new Error("Please define an entity or zones");if(t.entity&&typeof t.entity=="string"&&!t.entity.startsWith("climate.")&&!t.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let e;t.zones?e=t.zones.map(a=>typeof a=="string"?{entity:a}:{...a}):e=[{entity:t.entity}];for(let a of e)if(!a.entity||typeof a.entity!="string")throw new Error("Each zone must have an entity ID");let i=t.atmosphere_intensity,n=i==="subtle"||i==="bold"?i:"medium",o={...t,columns:Number(t.columns)||dt.columns,layout:t.layout||dt.layout,show_temp_bar:t.show_temp_bar??dt.show_temp_bar,show_power_bar:t.show_power_bar??dt.show_power_bar,show_atmosphere:t.show_atmosphere!==!1,atmosphere_intensity:n,show_hero:t.show_hero===!0,hero_show_thermal_strip:t.hero_show_thermal_strip!==!1,hero_show_outside:t.hero_show_outside!==!1,tap_action:t.tap_action||{...dt.tap_action},hold_action:t.hold_action||{...dt.hold_action},double_tap_action:t.double_tap_action||{...dt.double_tap_action},sections:t.sections||[...pn],_zones:e};return Array.isArray(o.sections)&&(o.sections=o.sections.map(a=>{let r=typeof a=="string"?{type:a}:{...a},s=dn[r.type];if(s){for(let[l,c]of Object.entries(s))if(r[l]===void 0||r[l]===null)r[l]=c;else if(typeof c=="number"){let p=Number(r[l]);Number.isFinite(p)?r[l]=p||c:(lt('section "%s": %s=%o is not numeric \u2014 using default %o',r.type,l,r[l],c),r[l]=c)}}return r})),o}var yn={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},fo={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},go={battery:"battery",connection:"connection"},vo={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},bo={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function _o(t){let e=new Map;for(let[i,n]of Object.entries(t))n.platform==="tado_ce"&&n.translation_key&&(e.has(n.translation_key)||e.set(n.translation_key,i));return{byTranslationKey:e}}function yo(t,e){let i={};for(let[n,o]of Object.entries(yn)){let a=e.byTranslationKey.get(o);a&&(i[n]=a)}return i}function wo(t,e,i){let n={},o={...fo,...go};for(let a of e){n[a]={};let r=`climate.${a}`,s=t[r];if(!s?.device_id||s.platform!=="tado_ce")continue;let l=s.device_id;for(let[c,p]of Object.entries(t)){if(p.platform!=="tado_ce"||p.device_id!==l||!p.translation_key||!i[c])continue;let u=p.translation_key;if(u.endsWith("_suffixed")){let h=u.replace("_suffixed",""),d=Object.keys(o).find(f=>o[f]===h);if(!d)continue;if(!n[a][d])n[a][d]=c;else{let f=2;for(;n[a][`${d}_${f}`];)f++;n[a][`${d}_${f}`]=c}}else{let h=Object.keys(o).find(d=>o[d]===u);if(!h)continue;n[a][h]||(n[a][h]=c)}}}return n}function bn(t){let e={},i=Object.keys(t);for(let[n,{platform:o,suffixes:a}]of Object.entries(bo))for(let r of a){let s=i.find(l=>l.startsWith(`${o}.tado_ce`)&&l.endsWith(r));if(s){e[n]=s;break}}return e}function _n(t,e){let i={};for(let n of e){i[n]={};for(let[o,{platform:a,suffixes:r}]of Object.entries(vo))for(let s of r){let l=`${a}.${n}${s}`;if(t[l]){i[n][o]=l;break}}}return i}var bt={states:null,zoneNames:null,result:null};function wn(t,e,i){if(bt.result&&bt.states===t&&bt.zoneNames!==null&&bt.zoneNames.length===e.length&&bt.zoneNames.every((c,p)=>c===e[p]))return bt.result;let n=!1,o=!1;i&&(n=Object.values(i).some(c=>c.platform==="tado_ce"),o=n),n||(n=Object.keys(t).some(c=>c.startsWith("sensor.tado_ce_")));let a={};if(n)if(o){let c=_o(i);a=yo(i,c);let p=bn(t);for(let[u,h]of Object.entries(p))a[u]||(a[u]=h)}else a=bn(t);let r;if(o){r=wo(i,e,t);let c=_n(t,e);for(let p of e){r[p]||(r[p]={});let u=c[p]||{};for(let[h,d]of Object.entries(u))r[p][h]||(r[p][h]=d)}}else r=_n(t,e);let s=Object.keys(yn).filter(c=>!a[c]),l={isTadoCE:n,hubEntities:a,zoneEntities:r,missingHubKeys:s};if(n)for(let[c,p]of Object.entries(r))Object.keys(p).length===0&&console.debug(`${gt} zone "${c}" \u2014 no Tado CE entities discovered. Check entity_id matches sensor.<zone>_temperature pattern, or use temperature_entity / set_point_entity overrides.`);return bt={states:t,zoneNames:[...e],result:l},l}function H(t){return t.replace(/^(climate|sensor|binary_sensor)\./,"")}function At(t){return typeof t=="string"&&t.length>0}function nt(t,e,i,n){if(At(n?.temperature_entity))return{entityId:n.temperature_entity,source:"yaml_override"};let a=e[t]?.attributes?.external_temp_sensor;return At(a)&&e[a]?{entityId:a,source:"external"}:At(i?.temperature)?{entityId:i.temperature,source:"discovery"}:{entityId:t,source:"climate_fallback"}}function ut(t,e,i,n){if(At(n?.humidity_entity))return{entityId:n.humidity_entity,source:"yaml_override"};let a=e[t]?.attributes?.external_humidity_sensor;return At(a)&&e[a]?{entityId:a,source:"external"}:At(i?.humidity)?{entityId:i.humidity,source:"discovery"}:null}var Gt={timestamp:0,data:{}};function xn(){return Gt}function $n(t){let e={...Gt.data};for(let[i,n]of Object.entries(t))n.length>0&&(e[i]=n);return Gt={timestamp:Date.now(),data:e},Gt}function Sn(){return{timestamp:0,data:{}}}function me(t){return t.timestamp>0&&Date.now()-t.timestamp<3e5}function kn(t,e){let i={...t.data};for(let[n,o]of Object.entries(e))o.length>0&&(i[n]=o);return{timestamp:Date.now(),data:i}}function ge(t,e){if(t.length===0||e<1)return[];let i=t[0].t,a=(t[t.length-1].t-i||1)/e,r=[],s=0,l=t[0].v;for(let c=0;c<e;c++){let p=i+(c+1)*a,u=0,h=0;for(;s<t.length&&t[s].t<p;)u+=t[s].v,h++,s++;h>0&&(l=u/h),r.push({x:c/(e-1||1),v:l})}return r}function An(t,e,i,n,o){let r=i-4,s=o-n||1,l=t.map(u=>({x:u.x*e,y:2+r-(u.v-n)/s*r}));if(l.length<2)return"";if(l.length===2)return`M${l[0].x.toFixed(1)},${l[0].y.toFixed(1)}L${l[1].x.toFixed(1)},${l[1].y.toFixed(1)}`;let c=l[0],p=`M${c.x.toFixed(1)},${c.y.toFixed(1)}`;for(let u=1;u<l.length;u++){let h=l[u],d=(c.x+h.x)/2,f=(c.y+h.y)/2;p+=` ${d.toFixed(1)},${f.toFixed(1)}`,p+=` Q${h.x.toFixed(1)},${h.y.toFixed(1)}`,c=h}return p+=` ${c.x.toFixed(1)},${c.y.toFixed(1)}`,p}function Cn(t,e,i,n=48){if(!t||t.length===0)return[];let o=1/0,a=-1/0;for(let r of t)for(let s of r.data)isFinite(s.v)&&(s.v<o&&(o=s.v),s.v>a&&(a=s.v));return isFinite(o)||(o=0),isFinite(a)||(a=100),t.map(r=>{let s=r.data.filter(p=>isFinite(p.v));if(s.length<2)return{entityId:r.entityId,color:r.color,d:""};let l=ge(s,n),c=An(l,e,i,o,a);return{entityId:r.entityId,color:r.color,d:c}})}function xo(t,e,i,n){if(!t||t.length===0)return[];let o=i??e/2-2,a=n??o*.6,r=e/2,s=e/2,l=t.map(h=>Math.max(0,h.value)),c=l.reduce((h,d)=>h+d,0);if(c===0)return[];let p=[],u=-90;for(let h=0;h<t.length;h++){if(l[h]===0)continue;let d=l[h]/c*360;d>=360&&(d=359.9);let f=u+d,v=Kt(r,s,a,o,u,f);p.push({label:t[h].label,color:t[h].color,d:v,angle:d}),u=f}return p}var fe=0;function ve(t="pc-bloom"){return fe=fe+1>>>0,`${t}-${fe.toString(36)}`}function ot(t,e=1.5,i){let n=i||"-30%",o=i==="-5%"?"110%":"160%",a=i===void 0?"":` x="${n}" y="${n}" width="${o}" height="${o}"`;return`<filter id="${t}"${a}><feGaussianBlur stdDeviation="${e}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`}function Zt(t,e={}){let i=e.size||120,n=e.ariaLabel||t.map(g=>`${g.label} ${g.value}`).join(", "),o=e.centerNumStyle||"",a=e.centerLabel,r=xo(t,i),s=t.reduce((g,_)=>g+_.value,0);if(t.length===0)return{html:"",total:0};let l=ve("donut-bloom"),c=0,p=-1;for(let g=0;g<r.length;g++){let _=t[g]?.value||0;_>c&&(c=_,p=g)}let u=i<=80?1.5:3,h=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="${m(n)}">`;h+=`<defs>${ot(l,u,"-30%")}</defs>`;let d=i/2-2,f=d*.6;h+=`<circle cx="${i/2}" cy="${i/2}" r="${((d+f)/2).toFixed(1)}" fill="none" stroke="var(--pulse-border-divider)" stroke-width="${(d-f).toFixed(1)}" />`;for(let g=0;g<r.length;g++){let _=r[g],y=g===p,x=y?"pc-donut-arc pc-donut-arc-active":"pc-donut-arc",S=y?` filter="url(#${l})"`:"";h+=`<path d="${_.d}" fill="${k(_.color)}" class="${x}"${S} data-segment="${m(_.label)}"><title>${m(_.label)}: ${Math.round(_.angle/360*s)}</title></path>`}h+="</svg>";let v='<div class="pc-donut-center">',b=o?` style="${o}"`:"";return v+=`<div class="pc-donut-center-num"${b}>${m(Math.round(s))}</div>`,a!=null&&(v+=`<div class="pc-donut-center-label">${m(a)}</div>`),v+="</div>",{html:h+v,total:s}}function Ct(t){if(!t||t.length===0)return"";let e='<div class="pc-chart-legend">';for(let i of t){let n=k(i.color),o=m(i.label),a=i.value!==void 0&&i.value!==null?` ${m(i.value)}`:"";e+=`<span class="pc-legend-chip"><span class="pc-legend-dot" style="background:${n}"></span>${o}${a}</span>`}return e+="</div>",e}function G(t){return t<=14?"#1565C0":t<=16?"#4FC3F7":t<=17?"#4DB6AC":t<=18?"#81C784":t<=19?"#AED581":t<=20?"#C5E1A5":t<=21?"#FFF176":t<=22?"#FFB74D":t<=23?"#FF8A65":t<=24?"#EF5350":"#C62828"}function zt(t){return t<=20?"#C62828":t<=30?"#EF5350":t<=35?"#FF8A65":t<=40?"#FFB74D":t<=45?"#AED581":t<=55?"#4CAF50":t<=60?"#AED581":t<=65?"#4DB6AC":t<=70?"#4FC3F7":t<=80?"#1E88E5":"#1565C0"}function Kt(t,e,i,n,o,a){let r=o*Math.PI/180,s=a*Math.PI/180,l=a-o,c=Math.abs(l)>180?1:0,p=t+n*Math.cos(r),u=e+n*Math.sin(r),h=t+n*Math.cos(s),d=e+n*Math.sin(s),f=t+i*Math.cos(s),v=e+i*Math.sin(s),b=t+i*Math.cos(r),g=e+i*Math.sin(r);return[`M${p.toFixed(2)},${u.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${c} 1 ${h.toFixed(2)},${d.toFixed(2)}`,`L${f.toFixed(2)},${v.toFixed(2)}`,`A${i.toFixed(2)},${i.toFixed(2)} 0 ${c} 0 ${b.toFixed(2)},${g.toFixed(2)}`,"Z"].join(" ")}function ct(t,e,i,n=48){if(!t||t.length<2)return null;let o=t.filter(h=>isFinite(h.v));if(o.length<2)return null;let a=Date.now(),r=o[o.length-1];a-r.t>6e5&&o.push({t:a,v:r.v});let s=ge(o,n);if(s.length<2)return null;let l=1/0,c=-1/0;for(let h of s)h.v<l&&(l=h.v),h.v>c&&(c=h.v);isFinite(l)||(l=0),isFinite(c)||(c=100);let p=An(s,e,i,l,c);if(!p)return null;let u=`${p} L${e.toFixed(1)},${i.toFixed(1)} L0,${i.toFixed(1)} Z`;return{linePath:p,areaPath:u}}function be(t,e=24,i=""){if(!t||t.length<2)return"";let n=t.filter(c=>isFinite(c.v));if(n.length<2)return"";let o=ge(n,e),a=n[0].t,r=n[n.length-1].t,s=n.every(c=>Number.isInteger(c.v)),l={u:i,d:[]};return l.d=o.map(c=>{let p=a+c.x*(r-a),u=new Date(p),h=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`,d=s?Math.round(c.v):Math.round(c.v*10)/10;return{l:h,v:d}}),JSON.stringify(l)}function ht(t,e,i,n,o,a=""){if(!t||t.length<2)return"";let r=ct(t,e,i,24);if(!r)return"";let s=k(n),l=`<div class="pc-sparkline-filled" style="height:${i}px">`;return l+=`<svg viewBox="0 0 ${e} ${i}" role="img" aria-label="${m(a)}" preserveAspectRatio="none" style="width:100%;height:${i}px;display:block">`,l+=`<defs><linearGradient id="${m(o)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${s}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${s}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${r.areaPath}" fill="url(#${m(o)})" />`,l+=`<path d="${r.linePath}" fill="none" stroke="${s}" stroke-width="1.5" />`,l+="</svg></div>",l}var $o=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function Yt(t,e){let i=[],n=0;if(Array.isArray(t.chart_data)&&t.chart_data.length>0){for(let o of t.chart_data)o.type&&typeof o.count=="number"&&(i.push({label:o.type,value:Math.max(0,o.count),color:e[n%e.length]}),n++);return i}if(t.breakdown_24h&&typeof t.breakdown_24h=="object"){for(let[o,a]of Object.entries(t.breakdown_24h)){let r=Number(a);!isNaN(r)&&r>0&&(i.push({label:o,value:r,color:e[n%e.length]}),n++)}return i}for(let[o,a]of Object.entries(t)){if($o.has(o))continue;let r=Number(a);isNaN(r)||(i.push({label:o,value:Math.max(0,r),color:e[n%e.length]}),n++)}return i}function So(t,e,i,n){let o=e.show_temp_bar??i.show_temp_bar??!0,a=e.show_power_bar??i.show_power_bar??!0,r=t.isUnavailable?" pc-unavailable":"",s=!t.isUnavailable&&t.currentTemp!==null&&t.currentTemp!==void 0&&t.targetTemp!==null&&t.targetTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=.3,l,c;t.isUnavailable?(l=" pc-row-unavail",c='<span class="pc-state-tag pc-tag-unavail">Unavail</span>'):t.hvacAction==="heating"?(l=" pc-row-heat",c='<span class="pc-state-tag pc-tag-heat">Heat</span>'):t.hvacAction==="cooling"?(l=" pc-row-cool",c='<span class="pc-state-tag pc-tag-cool">Cool</span>'):t.hvacAction==="off"?(l=" pc-row-off",c='<span class="pc-state-tag pc-tag-off">Off</span>'):s?(l=" pc-row-at-target",c='<span class="pc-state-tag pc-tag-at-target">At target</span>'):(l=" pc-row-idle",c='<span class="pc-state-tag pc-tag-idle">Idle</span>');let p=t.isUnavailable?"Unavailable":t.currentTemp!==null?`${U(t.currentTemp)}${m(t.unit)}`:"--",u=!t.isUnavailable&&t.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${U(t.targetTemp)}${m(t.unit)}</span>`:"",h=!t.isUnavailable&&t.humidity!==null?` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(t.humidity)}%</span>`:"",d=t.isUnavailable?`${m(t.name)}: Unavailable`:`${m(t.name)}: ${p}${t.targetTemp!==null?`, target ${U(t.targetTemp)}${t.unit}`:""}${t.humidity!==null?`, ${Math.round(t.humidity)}% humidity`:""}, ${t.hvacAction}`,f=`<div class="pc-zone-row${r}${l}" tabindex="0" role="button"
    aria-label="${m(d)}" data-entity="${m(t.entityId)}">`;if(f+='<div class="pc-zone-header">',f+=`<span class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${m(t.icon)}"></ha-icon> `:""}${m(t.name)}${h}</span>`,f+=`<span class="pc-zone-temp">${p}${u}${c}</span>`,f+="</div>",o&&!t.isUnavailable){let b=t.currentTemp!==null?Mt(t.currentTemp,t.minTemp,t.maxTemp):50,g=t.targetTemp!==null?Mt(t.targetTemp,t.minTemp,t.maxTemp):null,_=G(t.minTemp),y=G((t.minTemp+t.maxTemp)/2),x=G(t.maxTemp),S=`linear-gradient(to right, ${k(_)}, ${k(y)}, ${k(x)})`;f+='<div class="pc-temp-gauge">',f+=`<div class="pc-temp-gauge-bg" style="background:${S}"></div>`,f+=`<div class="pc-temp-gauge-current" style="left:${k(b.toFixed(1))}%"></div>`,g!==null&&(f+=`<div class="pc-temp-gauge-target" style="left:${k(g.toFixed(1))}%"></div>`),f+="</div>"}if(a&&!t.isUnavailable){let b=t.heatingPower||t.coolingPower||0,g=St(t.hvacAction),_=g.token||g.fallback;if(b>0||t.hvacAction==="heating"||t.hvacAction==="cooling"){let y=Math.min(100,Math.max(0,b)),x=b>0?" pc-bar-active":"";f+='<div class="pc-power-bar-container">',f+='<div class="pc-power-bar-track"></div>',f+=`<div class="pc-power-bar-fill${x}" style="width:${k(y.toFixed(1))}%;background:${k(_)};--pc-bar-glow:${k(g.fallback)}40"></div>`,f+="</div>"}}if(t.chips.length>0){f+='<div class="pc-zone-chips">';for(let b of t.chips){let g=b.severity?` pc-severity-${b.severity.toLowerCase()}`:"",_=b.color?` style="color:${k(b.color)}"`:"",y=b.entityId?` data-entity="${m(b.entityId)}"`:"";f+=`<span class="pc-chip${g}"${_}${y} data-chip-type="${m(b.type)}">`,f+=`<ha-icon icon="${m(b.icon)}"></ha-icon>`,f+=`${m(b.label)}`,f+="</span>"}f+="</div>"}let v=e.sparkline?.mode||"overlay";if(v==="pulse"&&!t.isUnavailable)return ko(t,e,n);if(!t.isUnavailable&&n&&n.length>=2){let b=St(t.hvacAction),g=e.color||b.fallback;v==="prominent"&&(f+=Ao(g,n,t.unit,t.entityId))}return f+="</div>",f}function ko(t,e,i){let n=St(t.hvacAction),o=t.heatingPower>0||t.hvacAction==="heating",a=t.hvacAction==="cooling",r=o||a,s=r?e.color||n.fallback:"var(--pulse-text-secondary)",l=k(s),c=m(t.entityId).replace(/\./g,"-"),p=t.heatingPower||t.coolingPower||0,u=t.hvacAction==="heating"?`Heating ${Math.round(p)}%`:t.hvacAction==="cooling"?`Cooling ${Math.round(p)}%`:"Idle",h=t.currentTemp!==null?`${U(t.currentTemp)}${m(t.unit)}`:"--",d=t.targetTemp!==null?`\u2192 ${U(t.targetTemp)}${m(t.unit)}`:"",f=`${m(t.name)}: ${h}, ${u}`,v=`pc-zone-row pc-zone-row-pulse${o?" pc-heating":""}`,b=be(i||[],24,t.unit),g=`<div class="${v}" tabindex="0" role="button"
    aria-label="${m(f)}" data-entity="${m(t.entityId)}"${b?` data-sparkline='${m(b)}'`:""}>`;if(i&&i.length>=2){let _=ct(i,360,56,60);if(_){let y=`pulse-grad-${c}`,x=`pulse-glow-${c}`,S=r?" pc-heating-glow":"",C=r?"0.55":"0.2",A=r?"0.05":"0.02",T=r?"2":"1.5",I=r?"1":"0.5";g+='<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',g+="<defs>",g+=`<linearGradient id="${y}" x1="0" y1="0" x2="0" y2="1">`,g+=`<stop offset="0%" stop-color="${l}" stop-opacity="${C}"/>`,g+=`<stop offset="100%" stop-color="${l}" stop-opacity="${A}"/>`,g+="</linearGradient>",r&&(g+=ot(x,kt(360,360).toFixed(1))),g+="</defs>",g+=`<path d="${_.areaPath}" fill="url(#${y})" />`,g+=`<path d="${_.linePath}" fill="none" stroke="${l}" stroke-width="${T}" opacity="${I}"`,r&&(g+=` filter="url(#${x})" class="${S}"`),g+=" />",g+="</svg>"}}return g+='<div class="pc-pulse-info">',g+='<div class="pc-pulse-info-left">',g+=`<div class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${m(t.icon)}"></ha-icon> `:""}${m(t.name)}</div>`,g+='<div class="pc-pulse-status">',g+=`<span class="pc-status-dot" style="background:${l}"></span>`,g+=`${m(u)}`,g+="</div>",g+="</div>",g+='<div class="pc-pulse-info-right">',g+=`<span class="pc-pulse-current">${m(h)}</span>`,d&&(g+=`<span class="pc-zone-target">${d}</span>`),g+="</div>",g+="</div>",g+="</div>",g}function Ao(t,e,i,n){let o=ct(e,300,40,48);if(!o){let p=yt(e,300,40,48,"avg",!0);return p?`<div class="pc-sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${p}" fill="none" stroke="${k(t)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let r=`prom-grad-${n?n.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,s=k(t),l=be(e,24,i),c=`<div class="pc-sparkline-filled" style="height:40px"${l?` data-sparkline='${m(l)}'`:""}>`;return c+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',c+=`<defs><linearGradient id="${m(r)}" x1="0" y1="0" x2="0" y2="1">`,c+=`<stop offset="0%" stop-color="${s}" stop-opacity="0.3"/>`,c+=`<stop offset="100%" stop-color="${s}" stop-opacity="0"/>`,c+="</linearGradient></defs>",c+=`<path d="${o.areaPath}" fill="url(#${m(r)})" />`,c+=`<path d="${o.linePath}" fill="none" stroke="${s}" stroke-width="1.5" opacity="0.7" />`,c+="</svg></div>",c}function _e(t,e,i,n,o){if(!t||t.length===0)return"";let a=Number(e.columns)||1,r=a>1?" pc-columns":"",s=a>1?` style="grid-template-columns:repeat(${Number(a)}, 1fr)"`:"",l=`<div class="pc-section pc-section-zones${r}"${s}>`,c=n?.hubEntities?.home_state,p=c?i[c]:null;if(p&&p.state!=="unavailable"){let u=p.state==="on",h=u?"mdi:home":"mdi:home-export-outline",d=u?"Home":"Away",f=u?"var(--pulse-status-green)":"var(--pulse-text-secondary)";l+='<div style="display:flex;justify-content:space-between;align-items:center">',l+='<div class="pulse-section-label">Zones</div>',l+=`<span class="pc-chip" data-entity="${m(c)}" style="color:${k(f)}">`,l+=`<ha-icon icon="${m(h)}"></ha-icon>${m(d)}</span>`,l+="</div>"}else l+='<div class="pulse-section-label">Zones</div>';for(let u of t){let h=u.entity,d=H(h),f=n?.zoneEntities?.[d]||{},v=J(h,f,i,u,e),b=nt(h,i,f,u),g=o?.data?.[b.entityId]||o?.data?.[h]||[];l+=So(v,u,e,g)}return l+="</div>",l}function Tn(t,e,i,n,o,a){if(!t||!e)return;let r=t.querySelectorAll(".pc-zone-row");for(let s=0;s<e.length;s++){let l=e[s],c=l.entity,p=H(c),u=o?.zoneEntities?.[p]||{},h=n[c],d=a[c];if(h===d&&r[s])continue;let f=J(c,u,n,l,i),v=r[s];if(!v)continue;let b=v.querySelector(".pc-zone-temp");if(b){let S=f.isUnavailable?"Unavailable":f.currentTemp!==null?`${U(f.currentTemp)}${f.unit}`:"--",C=!f.isUnavailable&&f.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${U(f.targetTemp)}${m(f.unit)}</span>`:"";b.innerHTML=`${m(S)}${C}`}let g=v.querySelector(".pc-power-bar-fill");if(g){let S=f.heatingPower||f.coolingPower||0,C=St(f.hvacAction),A=C.token||C.fallback;g.style.width=`${Math.min(100,Math.max(0,S)).toFixed(1)}%`,g.style.background=A,g.style.setProperty("--pc-bar-glow",`${C.fallback}40`),g.classList.toggle("pc-bar-active",S>0)}let _=v.querySelector(".pc-temp-gauge-current");if(_&&f.currentTemp!==null){let S=Mt(f.currentTemp,f.minTemp,f.maxTemp);_.style.left=`${S.toFixed(1)}%`}let y=v.querySelector(".pc-temp-gauge-target");if(y&&f.targetTemp!==null){let S=Mt(f.targetTemp,f.minTemp,f.maxTemp);y.style.left=`${S.toFixed(1)}%`}let x=v.querySelector(".pc-temp-gauge-bg");if(x&&!f.isUnavailable){let S=G(f.minTemp),C=G((f.minTemp+f.maxTemp)/2),A=G(f.maxTemp);x.style.background=`linear-gradient(to right, ${S}, ${C}, ${A})`}f.isUnavailable?v.classList.add("pc-unavailable"):v.classList.remove("pc-unavailable")}}function In(t){return t>95?"var(--pulse-status-red)":t>80?"var(--pulse-status-yellow)":"var(--pulse-status-green)"}function Co(t){let e=(t||"").toLowerCase();return e==="ok"||e==="healthy"?"var(--pulse-status-green)":e==="warning"?"var(--pulse-status-yellow)":"var(--pulse-status-red)"}function To(t,e){let i=e>0?Math.min(100,t/e*100):0,n=In(i),o=80,a=o/2,r=o/2,s=o/2-4,l=s*.7,c=Kt(a,r,l,s,-90,269.9),p=-90+i/100*360,u=i>0?Kt(a,r,l,s,-90,Math.min(p,269.9)):"",h=i>95,d=i>80,f=h||d,v='<div class="pc-usage-gauge">';if(v+=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="API usage: ${Math.round(t)} of ${Math.round(e)}" style="width:${o}px;height:${o}px">`,f&&(v+=`<defs>${ot("gauge-glow",2)}</defs>`),v+=`<path d="${c}" fill="var(--pulse-border-divider)" />`,u){if(v+=`<path d="${u}" fill="${k(n)}"${f?' filter="url(#gauge-glow)"':""}>`,v+=`<title>API usage: ${Math.round(i)}%</title>`,f){let b=h?"1":"2.5";it()||(v+=`<animate attributeName="opacity" values="1;0.5;1" dur="${b}s" repeatCount="indefinite"/>`)}v+="</path>"}return v+="</svg>",v+=`<div class="pc-gauge-center">${m(Math.round(t))}<br><span style="font-size:10px;opacity:0.6">/ ${m(Math.round(e))}</span></div>`,v+="</div>",v}function Io(t,e,i){let n=e?.data?.[t]||[];return ht(n,200,40,i,"api-hist-grad","API usage history")}function Fo(t){let e=Yt(t,rt);if(e.length===0)return"";let i=60,n='<div style="display:flex;align-items:center;gap:12px">';n+=`<div class="pc-donut-container" style="width:${i}px;height:${i}px;flex-shrink:0;margin:0">`;let{html:o}=Zt(e,{size:i,ariaLabel:"API call breakdown",centerNumStyle:"font-size:14px"});return n+=o,n+="</div>",n+=Ct(e.map(a=>({label:a.label,color:a.color,value:String(Math.round(a.value))}))),n+="</div>",n}function ye(t,e,i,n){if(!t.api_usage||!t.api_limit)return"";let o=parseFloat(e[t.api_usage]?.state)||0,a=parseFloat(e[t.api_limit]?.state)||100,r=a>0?Math.min(100,o/a*100):0,s=In(r),l=e[t.api_status]?.state||"unknown",c=Co(l),p='<div class="pc-section pc-section-api">';p+='<div class="pulse-section-label">API Usage</div>',p+='<div class="pc-api-dashboard">',p+='<div class="pc-api-row">',p+=To(o,a);let u=t.api_usage;if(u&&n&&(p+=Io(u,n,s)),p+="</div>",t.api_breakdown&&e[t.api_breakdown]&&(p+='<div class="pc-api-row">',p+=Fo(e[t.api_breakdown].attributes||{}),p+="</div>"),p+='<div class="pc-zone-chips">',t.call_history&&e[t.call_history]){let h=e[t.call_history].attributes?.calls_per_hour;h!=null&&Number(h)>0&&(p+=`<span class="pc-chip" data-entity="${m(t.call_history)}">`,p+=`<ha-icon icon="mdi:speedometer"></ha-icon>${m(Math.round(Number(h)))}/hr</span>`)}if(t.polling_interval&&e[t.polling_interval]){let h=e[t.polling_interval],d=h.attributes?.unit_of_measurement||"";p+=`<span class="pc-chip" data-entity="${m(t.polling_interval)}">Poll: ${m(h.state)}${d?m(d):""}</span>`}if(t.next_sync&&e[t.next_sync]){let h=e[t.next_sync].state,d=h,f=0;if(h&&h.includes("T"))try{let v=new Date(h);f=v.getTime();let b=f-Date.now();if(b>0&&b<36e5){let g=Math.floor(b/6e4),_=Math.floor(b%6e4/1e3);d=g>0?`${g}m ${_}s`:`${_}s`}else d=`${String(v.getHours()).padStart(2,"0")}:${String(v.getMinutes()).padStart(2,"0")}`}catch{}p+=`<span class="pc-chip chip-next-sync" data-entity="${m(t.next_sync)}" data-target="${f}">Next: ${m(d)}</span>`}if(t.api_reset&&e[t.api_reset]){let h=e[t.api_reset].state,d=h;if(h&&h.includes("T"))try{let f=new Date(h);d=`${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}`}catch{}p+=`<span class="pc-chip" data-entity="${m(t.api_reset)}">Reset: ${m(d)}</span>`}return t.token_status&&e[t.token_status]&&(p+=`<span class="pc-chip" data-entity="${m(t.token_status)}">Token: ${m(e[t.token_status].state)}</span>`),p+=`<span class="pc-chip" data-entity="${t.api_status?m(t.api_status):""}" style="color:${k(c)}">${m(l)}</span>`,p+="</div>",p+="</div>",p+="</div>",p}function we(t,e,i){if(!t.bridge_connected)return"";let n=e[t.bridge_connected];if(!n)return"";let o=n.state==="on",a=o?"var(--pulse-status-green)":"var(--pulse-status-red)",r=o?"Connected":"Disconnected",s=o?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},c=l.response_time_ms,p=l.consecutive_failures,u=l.last_error,h=t.boiler_flow_temp&&e[t.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",d='<div class="pc-section pc-section-bridge">';if(d+='<div class="pulse-section-label">Bridge</div>',d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${m(t.bridge_connected)}" style="color:${k(a)}">`,d+=`<span class="${s}"></span>`,d+=`${m(r)}</span>`,c!==void 0&&(d+=`<span class="pc-chip" data-entity="${m(t.bridge_connected)}">${m(Math.round(c))}ms</span>`),p!==void 0&&p>0&&(d+=`<span class="pc-chip" data-entity="${m(t.bridge_connected)}" style="color:var(--pulse-status-red)">Failures: ${m(p)}</span>`),d+="</div>",t.boiler_flow_temp&&e[t.boiler_flow_temp]){let b=parseFloat(e[t.boiler_flow_temp].state),g=e[t.boiler_flow_temp].state,_=isNaN(b)?"var(--pulse-text-primary)":G(b);if(d+='<div style="display:flex;align-items:center;gap:8px;margin-top:4px">',d+=`<span class="pc-flow-temp-value" style="color:${k(_)}">${m(g)}${m(h)}</span>`,i){let y=i.data?.[t.boiler_flow_temp]||[],x=ht(y,120,30,_,"bridge-flow-grad","Boiler flow temperature history");x&&(d+=`<div class="pc-flow-sparkline">${x}</div>`)}d+="</div>"}let f=t.wc_status&&e[t.wc_status],v=t.wc_target_flow&&e[t.wc_target_flow];if((f||v)&&(d+='<div class="pc-zone-chips">',f&&(d+=`<span class="pc-chip" data-entity="${m(t.wc_status)}">${m(e[t.wc_status].state)}</span>`),v&&(d+=`<span class="pc-chip" data-entity="${m(t.wc_target_flow)}">Target: ${m(e[t.wc_target_flow].state)}${m(h)}</span>`),d+="</div>"),t.boiler_max_output&&e[t.boiler_max_output]){let b=e[t.boiler_max_output].state;b!=="unavailable"&&b!=="unknown"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${m(t.boiler_max_output)}">`,d+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${m(b)}${m(h)}</span>`,d+="</div>")}return u&&u!=="None"&&u!=="null"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" style="color:var(--pulse-status-red)">Error: ${m(u)}</span>`,d+="</div>"),d+="</div>",d}var Xt="var(--pulse-status-green)",Fn="var(--pulse-accent)";function xe(t,e,i){if(!t.homekit_connected)return"";let n=e[t.homekit_connected];if(!n)return"";let o=n.state==="on",a=o?Xt:"var(--pulse-status-red)",r=o?"Connected":"Disconnected",s=o?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},c=l.uptime||"",p=l.mapped_zones,u=l.reconnect_count,h=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,d=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,f=h?Number(h.state)||0:Number(l.reads_saved_today)||0,v=d?Number(d.state)||0:Number(l.writes_saved_today)||0,b=f+v,g='<div class="pc-section pc-section-homekit">',_=b>0?` \xB7 ${b} saved`:"";if(g+=`<div class="pulse-section-label">HomeKit${m(_)}</div>`,g+='<div class="pc-zone-chips">',g+=`<span class="pc-chip" data-entity="${m(t.homekit_connected)}" style="color:${k(a)}">`,g+=`<span class="${s}"></span>`,g+=`${m(r)}`,c&&(g+=` <span style="opacity:0.6;font-size:10px">${m(c)}</span>`),g+="</span>",p!==void 0&&(g+=`<span class="pc-chip">${m(p)} zones</span>`),u!==void 0&&u>0&&(g+=`<span class="pc-chip" style="color:var(--pulse-status-yellow)">Reconnects: ${m(u)}</span>`),g+="</div>",f>0||v>0){let A=b>0?f/b*100:100;g+='<div style="margin-top:4px">',g+='<div class="pc-power-bar-container">',g+='<div class="pc-power-bar-track"></div>',g+=`<div class="pc-power-bar-fill" style="width:100%;background:${k(Fn)}"></div>`,g+=`<div class="pc-power-bar-fill" style="width:${k(A.toFixed(1))}%;background:${k(Xt)}"></div>`,g+="</div>",g+="</div>";let T=t.homekit_reads_saved;if(T&&i){let $=i.data?.[T]||[];g+=ht($,200,30,Xt,"hk-spark-grad","HomeKit saved calls history")}g+='<div class="pc-zone-chips">';let I=t.homekit_reads_saved||"",E=t.homekit_writes_saved||"";g+=`<span class="pc-chip"${I?` data-entity="${m(I)}"`:""} style="color:${k(Xt)}">Reads: ${m(f)}</span>`,v>0&&(g+=`<span class="pc-chip"${E?` data-entity="${m(E)}"`:""} style="color:${k(Fn)}">Writes: ${m(v)}</span>`),g+="</div>"}let y=Number(l.write_attempts)||0,x=Number(l.write_successes)||0,S=Number(l.write_fallbacks)||0,C=Number(l.write_avg_latency_ms)||0;return(y>0||x>0||S>0)&&(g+='<div class="pc-zone-chips">',y>0&&(g+=`<span class="pc-chip">Attempts: ${m(y)}</span>`),x>0&&(g+=`<span class="pc-chip">Successes: ${m(x)}</span>`),S>0&&(g+=`<span class="pc-chip" style="color:var(--pulse-status-yellow)">Fallbacks: ${m(S)}</span>`),C>0&&(g+=`<span class="pc-chip">Latency: ${m(C)}ms</span>`),g+="</div>"),g+="</div>",g}function Eo(t){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(t||"").toLowerCase()]||"mdi:weather-cloudy"}function $e(t,e,i){if(!t.outside_temp)return"";let n=e[t.outside_temp]?.state,o=e[t.weather]?.state||"",a=t.solar_intensity?e[t.solar_intensity]?.state:null,r='<div class="pc-section pc-section-weather">';r+='<div class="pulse-section-label">Weather</div>',r+='<div class="pc-zone-chips">',o&&(r+=`<span class="pc-chip"${t.weather?` data-entity="${m(t.weather)}"`:""}><ha-icon icon="${m(Eo(o))}"></ha-icon>${m(o)}</span>`),n!=null&&(r+=`<span class="pc-chip" data-entity="${m(t.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${m(n)}${m(e[t.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),a!=null&&(r+=`<span class="pc-chip"${t.solar_intensity?` data-entity="${m(t.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${m(a)}%</span>`),r+="</div>";let s=t.outside_temp;if(s&&i){let l=i.data?.[s]||[],c=parseFloat(n||"0"),p=isNaN(c)?"var(--pulse-text-primary)":G(c);r+=ht(l,200,30,p,"weather-spark-grad","Outdoor temperature history")}return r+="</div>",r}function Se(t,e,i){let n=!1,o='<div class="pc-section pc-section-environment">';o+='<div class="pulse-section-label">Environment</div>';for(let a of t){let r=H(a.entity),s=i?.zoneEntities?.[r]||{},l=s.mold_risk&&e[s.mold_risk],c=s.condensation&&e[s.condensation],p=s.comfort_level&&e[s.comfort_level],u=s.surface_temp&&e[s.surface_temp],h=s.dew_point&&e[s.dew_point];if(!l&&!c&&!p&&!u&&!h)continue;n=!0;let d=a.name||e[a.entity]?.attributes?.friendly_name||r;if(o+=`<div class="pc-system-row"><span class="pc-system-label">${m(d)}</span>`,o+='<div class="pc-zone-chips">',l){let f=e[s.mold_risk].state,v=jt(f);o+=`<span class="pc-chip" data-entity="${m(s.mold_risk)}" style="color:${k(v.fallback)}">`,o+=`<ha-icon icon="mdi:mushroom"></ha-icon>${m(f)}</span>`}if(c){let f=e[s.condensation].state,v=jt(f);o+=`<span class="pc-chip" data-entity="${m(s.condensation)}" style="color:${k(v.fallback)}">`,o+=`<ha-icon icon="mdi:water-alert"></ha-icon>${m(f)}</span>`}p&&(o+=`<span class="pc-chip" data-entity="${m(s.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${m(e[s.comfort_level].state)}</span>`),u&&(o+=`<span class="pc-chip" data-entity="${m(s.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${m(e[s.surface_temp].state)}${m(e[s.surface_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),h&&(o+=`<span class="pc-chip" data-entity="${m(s.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${m(e[s.dew_point].state)}${m(e[s.dew_point]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function ke(t,e,i){let n=!1,o='<div class="pc-section pc-section-thermal">';o+='<div class="pulse-section-label">Thermal Analytics</div>';for(let a of t){let r=H(a.entity),s=i?.zoneEntities?.[r]||{},l=s.heating_rate&&e[s.heating_rate],c=s.thermal_inertia&&e[s.thermal_inertia],p=s.preheat_time&&e[s.preheat_time],u=s.confidence&&e[s.confidence],h=s.heat_accel&&e[s.heat_accel],d=s.approach_factor&&e[s.approach_factor];if(!l&&!c&&!p&&!u&&!h&&!d)continue;n=!0;let f=a.name||e[a.entity]?.attributes?.friendly_name||r;o+=`<div class="pc-system-row"><span class="pc-system-label">${m(f)}</span>`,o+='<div class="pc-zone-chips">',l&&(o+=`<span class="pc-chip" data-entity="${m(s.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${m(e[s.heating_rate].state)}${m(e[s.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr")}</span>`),c&&(o+=`<span class="pc-chip" data-entity="${m(s.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${m(e[s.thermal_inertia].state)}</span>`),p&&(o+=`<span class="pc-chip" data-entity="${m(s.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${m(e[s.preheat_time].state)} min</span>`),u&&(o+=`<span class="pc-chip" data-entity="${m(s.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${m(e[s.confidence].state)}%</span>`),h&&(o+=`<span class="pc-chip" data-entity="${m(s.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${m(e[s.heat_accel].state)}${m(e[s.heat_accel]?.attributes?.unit_of_measurement||"")}</span>`),d&&(o+=`<span class="pc-chip" data-entity="${m(s.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${m(e[s.approach_factor].state)}${m(e[s.approach_factor]?.attributes?.unit_of_measurement||"")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function Ae(t,e,i){let n=!1,o='<div class="pc-section pc-section-schedule">';o+='<div class="pulse-section-label">Schedule</div>';for(let a of t){let r=H(a.entity),s=i?.zoneEntities?.[r]||{},l=s.next_schedule&&e[s.next_schedule],c=s.schedule_deviation&&e[s.schedule_deviation],p=s.preheat_advisor&&e[s.preheat_advisor],u=s.comfort_target&&e[s.comfort_target];if(!l&&!c&&!p&&!u)continue;n=!0;let h=a.name||e[a.entity]?.attributes?.friendly_name||r;if(o+=`<div class="pc-system-row"><span class="pc-system-label">${m(h)}</span>`,o+='<div class="pc-zone-chips">',l){let d=s.next_sched_temp&&e[s.next_sched_temp]?` \u2192 ${m(e[s.next_sched_temp].state)}${m(e[s.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C")}`:"";o+=`<span class="pc-chip" data-entity="${m(s.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${m(e[s.next_schedule].state)}${d}</span>`}c&&(o+=`<span class="pc-chip" data-entity="${m(s.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${m(e[s.schedule_deviation].state)}${m(e[s.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),p&&(o+=`<span class="pc-chip" data-entity="${m(s.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${m(e[s.preheat_advisor].state)}</span>`),u&&(o+=`<span class="pc-chip" data-entity="${m(s.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${m(e[s.comfort_target].state)}${m(e[s.comfort_target]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}var Ce=0;function Mo(){return Ce=Ce+1>>>0,`graph-grad-${Ce.toString(36)}`}function zo(t,e){let i=e&&e.length>0?e:rt;return i[t%i.length]}function Lo(t,e,i){let o=[];for(let l of t){let c=ct(l.data,300,e,48);c&&o.push({...c,color:l.color,entityId:l.entityId})}if(o.length===0){let l=Cn(t,300,e);if(!l.some(u=>u.d!==""))return'<div class="pc-chart-empty">No data available</div>';let p=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${m(i)}" class="pc-chart-svg" preserveAspectRatio="none">`;for(let u of l)u.d!==""&&(p+=`<path d="${u.d}" fill="none" stroke="${k(u.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" data-entity="${m(u.entityId)}" />`);return p+="</svg>",p}let a=o.map(()=>Mo()),r=ve("graph-glow"),s=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${m(i)}" class="pc-chart-svg" preserveAspectRatio="none">`;s+="<defs>";for(let l=0;l<o.length;l++)s+=`<linearGradient id="${a[l]}" x1="0" y1="0" x2="0" y2="1">`,s+=`<stop offset="0%" stop-color="${k(o[l].color)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${k(o[l].color)}" stop-opacity="0"/>`,s+="</linearGradient>";s+=ot(r,.6),s+="</defs>";for(let l=0;l<o.length;l++){let c=o[l];s+=`<path d="${c.areaPath}" fill="url(#${a[l]})" />`,s+=`<path d="${c.linePath}" fill="none" stroke="${k(c.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" filter="url(#${r})" data-entity="${m(c.entityId)}" />`}return s+="</svg>",s}function Ie(t,e,i,n,o){let a=t.attribute||"current_temperature",r=t.stacked===!0,s=Number(t.height)||80,l=t.palette||void 0,c=t.entities||e.map(u=>u.entity);if(c.length===0)return"";let p='<div class="pc-section pc-section-graph">';return r?(p+=Te(c,"current_temperature","Temperature",s,l,i,n,o,e),p+=Te(c,"current_humidity","Humidity",s,l,i,n,o,e)):p+=Te(c,a,a==="current_humidity"?"Humidity":"Temperature",s,l,i,n,o,e),p+="</div>",p}function Te(t,e,i,n,o,a,r,s,l){let c=[],p=[],u=e==="current_humidity"||e==="humidity";for(let v=0;v<t.length;v++){let b=t[v],g=zo(v,o),_=H(b),y=s?.zoneEntities?.[_]||{},x=l?.find($=>$.entity===b),C=(u?ut(b,r,y,x):nt(b,r,y,x))?.entityId||b,A=a.data[C]||[],T=x?.name||r[b]?.attributes?.friendly_name||_,I=r[b]?.attributes?.[e],E=u?"%":r[b]?.attributes?.unit_of_measurement||"\xB0C";c.push({entityId:C,data:A,color:g}),p.push({label:T,color:g,value:I!=null?`${I}${E}`:"--"})}let h=p.map(v=>v.label).join(", "),d=`${i} history for ${h}`,f=`<div class="pulse-section-label">${m(i)}</div>`;return f+=`<div class="pc-chart-container" style="height:${k(n)}px">`,f+=Lo(c,n,d),f+="</div>",f+=Ct(p),f}function Fe(t,e,i){let n=Number(t.size)||120,o=t.source,a=[];if(o==="api_breakdown"?a=No(e,i):o==="homekit_saved"?a=Ho(e,i):t.segments&&(a=Ro(t.segments,i)),a.length===0)return"";let r='<div class="pc-section pc-section-donut">',s={api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"},l={api_breakdown:"Calls",homekit_saved:"Saved"},c=o&&s[o]||"Breakdown",p=o&&l[o]||"Total";r+=`<div class="pulse-section-label">${m(c)}</div>`,r+=`<div class="pc-donut-container" style="width:${k(n)}px;height:${k(n)}px">`;let{html:u}=Zt(a,{size:n,centerLabel:p});r+=u,r+="</div>";let h=a.map(d=>({label:d.label,color:d.color,value:String(Math.round(d.value))}));return r+=Ct(h),r+="</div>",r}function No(t,e){let i=t.api_breakdown;if(!i||!e[i])return[];let n=e[i].attributes;return!n||typeof n!="object"?(lt("api_call_breakdown entity has no attributes"),[]):Yt(n,rt)}function Ho(t,e){if(!t.homekit_connected)return[];let i=e[t.homekit_connected];if(!i)return[];let n=i.attributes||{},o=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,a=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,r=o?Number(o.state)||0:Number(n.reads_saved_today)||0,s=a?Number(a.state)||0:Number(n.writes_saved_today)||0,l=[];return(r>0||s>0)&&(l.push({label:"Reads Saved",value:r,color:rt[0]}),l.push({label:"Writes Saved",value:s,color:rt[1]})),l}function Ro(t,e){return t.map((i,n)=>({label:i.label||i.entity,value:Math.max(0,Number(e[i.entity]?.state)||0),color:i.color||rt[n%rt.length]}))}function En(t,e,i){let o=Date.now()-i,a=i/e,r=[],s=0,l=null;for(;s<t.length&&t[s].t<o;)isFinite(t[s].v)&&(l=Math.round(t[s].v*10)/10),s++;for(let c=0;c<e;c++){let p=o+c*a,u=p+a,h=p+a/2,d=0,f=0;for(;s<t.length&&t[s].t<u;)t[s].t>=p&&isFinite(t[s].v)&&(d+=t[s].v,f++),s++;f>0&&(l=Math.round(d/f*10)/10);let v=new Date(h),b=`${String(v.getHours()).padStart(2,"0")}:${String(v.getMinutes()).padStart(2,"0")}`;r.push({value:l,time:h,label:b})}return r}function Jt(t,e,i={}){let n=t.length;if(n===0)return'<div class="pc-strip-container"><div class="pc-chart-empty" style="height:14px;font-size:10px">No data</div></div>';let o=i.emptyColor||"var(--pulse-disabled)",a=i.emptyOpacity??.3,r=i.ariaLabel||"",s=JSON.stringify(t.map(c=>({v:c.value,l:c.label}))),l=`<div class="pc-strip-container" data-slots='${m(s)}'>`;l+=`<svg viewBox="0 0 ${n} 1" preserveAspectRatio="none" role="img" aria-label="${m(r)}" style="width:100%;height:100%;display:block">`;for(let c=0;c<n;c++){let p=t[c].value,u=p!==null?e(p):o,h=p!==null?1:a;l+=`<rect x="${c}" y="0" width="1.05" height="1" fill="${k(u)}" opacity="${h}"/>`}if(l+="</svg>",i.nowPct!==void 0){let c=Math.min(100,Math.max(0,i.nowPct));l+=`<div class="pc-now-marker" style="left:${c.toFixed(1)}%"></div>`}return l+="</div>",l}function Qt(t,e,i={}){let n=t.length;if(n===0)return'<div class="pc-cells"><div class="pc-chart-empty" style="height:16px;font-size:10px">No data</div></div>';let o=JSON.stringify(t.map(r=>({v:r.value,l:r.label}))),a=`<div class="pc-cells" data-slots='${m(o)}'>`;for(let r=0;r<n;r++){let s=t[r].value,l=t[r].label;if(s!==null){let c=e(s),p=k(c);a+=`<div class="pc-cell" style="background:${p};color:${p}" data-hour="${m(l)}" data-score="${s}"></div>`}else a+=`<div class="pc-cell pc-cell-empty" data-hour="${m(l)}"></div>`}return a+="</div>",a}function Ee(){let t=document.createElement("div");t.className="pc-strip-tooltip",t.style.display="none";let e=null;return{element:t,show(i,n,o){e&&(clearTimeout(e),e=null),t.textContent=o,t.style.display="",t.style.left=`${n}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function Mn(){let t=document.createElement("div");t.className="pc-strip-tooltip pc-strip-tooltip-fixed",t.style.display="none";let e=null;return{element:t,show(i,n,o){e&&(clearTimeout(e),e=null),t.textContent=o,t.style.display="",t.style.left=`${n}px`,t.style.top=`${i.top-28}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function te(t,e=5){let i=new Date,n=Date.now()-t,o="";for(let a=0;a<e-1;a++){let r=new Date(n+a/(e-1)*t);o+=`<span class="pc-time-label">${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}</span>`}return o+=`<span class="pc-time-label">${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}</span>`,o}function mt(t,e,i){let n=Math.max(0,Math.min(1,(t-e.left)/e.width));return Math.min(i-1,Math.floor(n*i))}var Do=2e3;function Me(t,e,i,n){let o=null,a=s=>{let l=i.getBoundingClientRect(),c=s-l.left;c>=0&&c<=l.width&&(e.style.left=`${n+c}px`,e.style.display="")},r=()=>{e.style.display="none",o&&(clearTimeout(o),o=null)};t.addEventListener("pointermove",s=>{s.pointerType!=="touch"&&a(s.clientX)}),t.addEventListener("pointerleave",r),t.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&(a(s.clientX),o&&clearTimeout(o),o=setTimeout(r,Do))}),t.addEventListener("pointerup",s=>{s.pointerType})}function ze(t,e,i,n=""){if(!e||e.length===0)return;let o=e.length,a=null,r=null;t.addEventListener("pointerdown",s=>{if(s.pointerType==="touch"&&s.isPrimary===!1)return;let l=t.getBoundingClientRect();a=mt(s.clientX,l,o),t.setPointerCapture(s.pointerId),r||(r=document.createElement("div"),r.className="pc-strip-drag-highlight",t.style.position="relative",t.appendChild(r)),r.style.display="",r.style.left=`${(a/o*100).toFixed(1)}%`,r.style.width="0%"}),t.addEventListener("pointermove",s=>{if(a===null||!r)return;let l=t.getBoundingClientRect(),c=mt(s.clientX,l,o),p=Math.min(a,c),u=Math.max(a,c);r.style.left=`${(p/o*100).toFixed(1)}%`,r.style.width=`${((u-p+1)/o*100).toFixed(1)}%`}),t.addEventListener("pointerup",s=>{if(a===null){a=null;return}let l=t.getBoundingClientRect(),c=mt(s.clientX,l,o),p=Math.min(a,c),u=Math.max(a,c),h=e.slice(p,u+1).filter(d=>d.v!==null);if(h.length>0){let d=h.map(S=>S.v),f=(d.reduce((S,C)=>S+C,0)/d.length).toFixed(1),v=Math.min(...d),b=Math.max(...d),g=e[p]?.l||"",_=e[u]?.l||"",y=`${g} \u2013 ${_}: avg ${f}${n}, ${v}${n} \u2013 ${b}${n}`,x=t.getBoundingClientRect();i.show(x,(p+u)/2/o*x.width,y),setTimeout(()=>i.hide(),3e3)}a=null})}function zn(t,e,i,n,o){if(!t||t.length===0)return"";let a=Number(e?.hours_to_show)||24,r=e?.mode||"timeline",s=Number(e?.slots_per_hour)||2,c=(e?.attribute||"temperature")==="humidity",p=c?zt:G,u=r==="heatmap"?a:a*s,h=a*36e5,d=Date.now()-h,f=(Date.now()-d)/h*100,v=c?"Humidity":"Thermal",b=r==="heatmap"?"Heatmap":"Timeline",g='<div class="pc-section pc-section-thermal-strip">';g+='<div style="display:flex;justify-content:space-between;align-items:baseline">',g+=`<div class="pulse-section-label">${m(String(Number(a)))}h ${m(v)} ${m(b)}</div>`,g+='<span class="pc-card-subtitle pc-section-subtitle" style="font-size:11px;color:var(--pulse-text-secondary)">Tap a zone for details</span>',g+="</div>",g+='<div class="pc-zone-detail" id="timeline-detail"></div>',g+='<div class="pc-strip-rows" style="position:relative">',g+='<div class="pc-strip-crosshair" style="display:none"></div>';for(let _ of t){let y=_.entity,x=H(y),S=n?.zoneEntities?.[x]||{},A=(c?ut(y,i,S,_):nt(y,i,S,_))?.entityId||y,T=_.name||i[y]?.attributes?.friendly_name||x,I=o?.data?.[A]||[];if(g+=`<div class="pc-timeline-row" data-zone="${m(x)}" data-entity="${m(y)}">`,g+=`<span class="pc-zone-label">${m(T)}</span>`,I.length<2){let E=!!i[A],$=A in(o?.data||{});g+=`<div class="pc-strip-container"><div class="pc-chart-empty" style="height:14px;font-size:10px">${m(E&&!$?"Waiting for data":"No data")}</div></div>`}else{let E=En(I,u,h),w=`${T} ${c?"humidity":"temperature"} over ${a}h`;r==="heatmap"?g+=Qt(E,p,{ariaLabel:w}):g+=Jt(E,p,{ariaLabel:w,nowPct:f})}g+="</div>"}return g+="</div>",g+='<div class="pc-time-axis" style="margin-left:76px">',g+=te(h),g+="</div>",g+="</div>",g}var Po={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function Ln(t,e,i,n){if(t==null||e===null||e===void 0||isNaN(t)||isNaN(e))return null;let o=100;if(o-=Math.min(50,Math.abs(t-e)*10),i!=null&&(o-=Math.min(25,Math.abs(i-45)*.5)),n!=null){let a=Po[n]??50;o=o*.7+a*.3}return Math.max(0,Math.min(100,Math.round(o)))}function Nn(t){if(t>=80)return`rgba(52, 199, 89, ${(.35+t/100*.55).toFixed(2)})`;if(t>=50){let e=(t-50)/30;return`rgba(${Math.round(255-e*50)}, ${Math.round(159+e*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-t)/50*.5).toFixed(2)})`}function ee(t,e,i=72e5){if(t.length===0)return null;let n=0,o=t.length-1;for(;n<o;){let s=n+o>>1;t[s].t<e?n=s+1:o=s}let a=null,r=1/0;for(let s=Math.max(0,n-1);s<=Math.min(t.length-1,n);s++){let l=Math.abs(t[s].t-e);l<r&&isFinite(t[s].v)&&(r=l,a=t[s].v)}return r<=i?a:null}function Hn(t,e,i,n,o){if(!t||t.length===0)return"";let a=Number(e?.slots_per_hour)||1,r=Number(e?.hours_to_show)||24,s=e?.mode||"heatmap",l=a*r,c=r*36e5,p=Date.now()-c,u=(Date.now()-p)/c*100,h=s==="timeline"?"Comfort Timeline":"Comfort Heatmap",d='<div class="pc-section pc-section-comfort-strip">';d+='<div style="display:flex;justify-content:space-between;align-items:baseline">',d+=`<div class="pulse-section-label">${m(String(Number(r)))}h ${m(h)}</div>`,d+='<span class="pc-card-subtitle" style="font-size:11px;color:var(--pulse-text-secondary)">Tap a zone for details</span>',d+="</div>",d+='<div class="pc-zone-detail" id="heatmap-detail"></div>',d+='<div class="pc-heatmap-body" style="position:relative">',d+='<div class="pc-strip-crosshair" style="display:none"></div>';for(let f=0;f<t.length;f++){let v=t[f],b=v.entity,g=H(b),_=n?.zoneEntities?.[g]||{},y=v.name||i[b]?.attributes?.friendly_name||g,S=nt(b,i,_,v).entityId,A=ut(b,i,_,v)?.entityId||null,T=o?.data?.[S]||[],I=A?o?.data?.[A]||[]:[],E=i[b]?.attributes?.temperature??null,$=_.comfort_level,w=$&&i[$]?.state||null,M=[],L=c/l,N=null;if(T.length>0){let V=ee(T,p,1/0),z=I.length>0?ee(I,p,1/0):null;V!==null&&(N=Ln(V,E,z,w))}for(let V=0;V<l;V++){let F=p+V*L+L/2,B=ee(T,F),R=ee(I,F),P=Ln(B,E,R,w);P!==null&&(N=P);let Y=new Date(F),K=`${String(Y.getHours()).padStart(2,"0")}:${String(Y.getMinutes()).padStart(2,"0")}`;M.push({value:N,time:F,label:K})}d+=`<div class="pc-heatmap-row" data-zone="${m(g)}" data-idx="${f}">`,d+=`<span class="pc-zone-label">${m(y)}</span>`;let Z=`${y} comfort over ${r}h`;s==="timeline"?d+=Jt(M,Nn,{ariaLabel:Z,nowPct:u}):d+=Qt(M,Nn,{ariaLabel:Z}),d+="</div>"}return d+="</div>",d+='<div class="pc-heatmap-time-axis">',d+=te(c),d+="</div>",d+='<div class="pc-heatmap-legend">',d+='<div class="pc-legend-item"><div class="pc-legend-swatch" style="background:rgba(52,199,89,0.7)"></div>\u226580</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch" style="background:rgba(255,159,10,0.65)"></div>50\u201379</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch" style="background:rgba(255,69,58,0.6)"></div>&lt;50</div>',d+="</div>",d+="</div>",d}function Rn(t,e,i,n,o,a,r){let s=a+(r-a)*.35,l=a+(r-a)*.65,c=t-i,p=e-n,u=t+i,h=e+n,d=`M${a},${c.toFixed(1)}`;return d+=` C${s.toFixed(1)},${c.toFixed(1)} ${l.toFixed(1)},${p.toFixed(1)} ${r},${p.toFixed(1)}`,d+=` L${r},${h.toFixed(1)}`,d+=` C${l.toFixed(1)},${h.toFixed(1)} ${s.toFixed(1)},${u.toFixed(1)} ${a},${u.toFixed(1)}`,d+=" Z",d}function Oo(t,e,i,n){let o=i+(n-i)*.35,a=i+(n-i)*.65;return`M${i},${t.toFixed(1)} C${o.toFixed(1)},${t.toFixed(1)} ${a.toFixed(1)},${e.toFixed(1)} ${n},${e.toFixed(1)}`}function Le(t,e,i){if(!t||t.length===0)return"";let n=it(),o=[],a=!1;for(let $ of t){let w=$.entity,M=H(w),L=i?.zoneEntities?.[M]||{},N=J(w,L,e,$,{});(N.heatingPower>0||L.heating_power||e[w]?.attributes?.heating_power!==void 0)&&(a=!0),o.push({name:N.name,power:N.heatingPower,temp:N.currentTemp,target:N.targetTemp,unit:N.unit,hvacAction:N.hvacAction})}let r=o.length>0?Math.round(o.reduce(($,w)=>$+w.power,0)/o.length):0,s='<div class="pc-section pc-section-energy-flow">';if(s+='<div style="display:flex;justify-content:space-between;align-items:baseline">',s+='<div class="pulse-section-label">Energy Flow</div>',a&&(s+=`<span class="pc-energy-flow-header-value" style="font-size:11px;color:${k(vt.heating.fallback)};font-weight:500">${m(r)}% avg</span>`),s+="</div>",!a)return s+='<div class="pc-chart-empty">No heating data</div></div>',s;let l=360,c=o.length<=3?44:o.length<=6?38:34,p=15,u=Math.max(80,o.length*c+30),h=o.length*c,d=Math.max(40,Math.min(h*.7,h-16)),f=Math.max(36,d*.6),v=Math.max(50,f/2+14),b=l-60,g=u/2,_=22,y=2,x=d/Math.max(o.length,1)*.7,S=vt.heating.fallback,C="var(--pulse-disabled)",A=o.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),T=o.filter($=>$.power>0).length;s+=`<svg viewBox="0 0 ${l} ${u}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${k(u)}px;display:block">`,s+="<defs>",s+=ot("flow-glow",kt(l,360).toFixed(1));for(let $=0;$<o.length;$++){let w=o[$].power>0||o[$].hvacAction==="heating"||o[$].hvacAction==="cooling",M=w?S:C,L=o[$].power;if(w){let N=L>0?(4.5-L/100*3.3).toFixed(1):"5.0";s+=`<linearGradient id="flow-g${$}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,s+=`<stop offset="0%" stop-color="${k(M)}" stop-opacity="0.3"/>`,s+=`<stop offset="50%" stop-color="${k(M)}" stop-opacity="1.0"/>`,s+=`<stop offset="100%" stop-color="${k(M)}" stop-opacity="0.3"/>`,n||(s+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${N}s" repeatCount="indefinite"/>`,s+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${N}s" repeatCount="indefinite"/>`),s+="</linearGradient>"}else s+=`<linearGradient id="flow-g${$}" x1="0" y1="0" x2="1" y2="0">`,s+=`<stop offset="0%" stop-color="${k(M)}" stop-opacity="0.15"/>`,s+=`<stop offset="50%" stop-color="${k(M)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${k(M)}" stop-opacity="0.1"/>`,s+="</linearGradient>"}s+="</defs>";let I=A?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)",E=A?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)";s+=`<rect x="${v-f/2}" y="${g-d/2}" width="${f}" height="${d}" rx="8" fill="${k(I)}" stroke="${k(E)}" stroke-width="1"/>`,s+=`<text x="${v}" y="${g-d/2-6}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">Boiler</text>`;for(let $=0;$<o.length;$++){let w=o[$],M=p+$*c+20,L=w.power>0?y+w.power/100*(_-y):y,N=w.power>0||w.hvacAction==="heating"||w.hvacAction==="cooling",Z=N?' class="pc-ribbon-active"':"",V=g+($-(o.length-1)/2)*x,z=Rn(V,M,L/2,L/2,l,v+f/2,b-12);if(s+=`<path d="${z}" fill="url(#flow-g${$})"${Z}${N?' filter="url(#flow-glow)"':""} data-zone="${m(w.name)}" data-zone-idx="${$}">`,s+=`<title>${m(w.name)}: ${Math.round(w.power)}% heating power</title></path>`,w.power>0&&!n){let Y=mn(w.power,20,T),K=fn(w.power),Q=gn(L,_),W=(Q*.8).toFixed(1),j=Oo(V,M,v+f/2,b-12);s+=`<g class="pc-flow-particles" data-zone="${m(w.name)}" data-zone-idx="${$}" style="will-change:transform">`;for(let D=0;D<Y;D++){let O=(D*(K/Y)).toFixed(2);s+=`<circle r="${Q.toFixed(1)}" fill="${k(S)}" opacity="0.8"`,s+=` filter="drop-shadow(0 0 ${W}px ${k(S)})">`,s+=`<animateMotion dur="${K.toFixed(1)}s" begin="${O}s" repeatCount="indefinite"`,s+=` path="${j}"/>`,s+="</circle>"}s+="</g>"}let F=N?"var(--pulse-text-primary)":"var(--pulse-text-secondary)",B=N?' font-weight="600"':"";s+=`<text x="${b}" y="${(M-1).toFixed(1)}" font-size="11" fill="${k(F)}"${B}>${m(w.name)}</text>`;let R=N?k(S):"var(--pulse-text-secondary)",P=N?`${w.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(w.power)}%${w.temp!==null?` \xB7 ${U(w.temp)}${w.unit}`:""}`:`Idle${w.temp!==null?` \xB7 ${U(w.temp)}${w.unit}`:""}`;s+=`<text x="${b}" y="${(M+12).toFixed(1)}" font-size="9" fill="${R}">${m(P)}</text>`}return s+="</svg>",s+="</div>",s}function Dn(t,e,i,n){if(!t||!e||e.length===0)return!1;let o=t.querySelector("svg");if(!o)return!1;let a=[];for(let $ of e){let w=$.entity,M=H(w),L=n?.zoneEntities?.[M]||{},N=J(w,L,i,$,{});a.push({name:N.name,power:N.heatingPower,temp:N.currentTemp,unit:N.unit,hvacAction:N.hvacAction})}let r=o.querySelectorAll("path[data-zone]");if(r.length!==a.length)return!1;let s=vt.heating.fallback,l="var(--pulse-disabled)",c=a.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),p=360,u=a.length<=3?44:a.length<=6?38:34,h=15,d=Math.max(80,a.length*u+30),f=a.length*u,v=Math.max(40,Math.min(f*.7,f-16)),b=Math.max(36,v*.6),g=Math.max(50,b/2+14),_=p-60,y=d/2,x=22,S=2,C=v/Math.max(a.length,1)*.7,A=Math.round(a.reduce(($,w)=>$+w.power,0)/a.length),T=t.querySelector(".energy-flow-header-value");T&&(T.textContent=`${A}% avg`);let I=o.querySelector("rect");I&&(I.setAttribute("fill",c?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)"),I.setAttribute("stroke",c?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)"),I.setAttribute("stroke-width",c?"0.5":"1"));let E=o.querySelectorAll("text");for(let $=0;$<a.length;$++){let w=a[$],M=r[$],L=w.power>0||w.hvacAction==="heating"||w.hvacAction==="cooling",N=h+$*u+20,Z=w.power>0?S+w.power/100*(x-S):S,V=y+($-(a.length-1)/2)*C,z=Rn(V,N,Z/2,Z/2,p,g+b/2,_-12);M.setAttribute("d",z),L?(M.classList.add("pc-ribbon-active"),M.setAttribute("filter","url(#flow-glow)")):(M.classList.remove("pc-ribbon-active"),M.removeAttribute("filter"));let F=M.querySelector("title");F&&(F.textContent=`${w.name}: ${Math.round(w.power)}% heating power`);let B=o.querySelector(`g.flow-particles[data-zone-idx="${$}"]`);B&&(B.style.display=w.power>0?"":"none");let R=o.querySelector(`#flow-g${$}`);if(R){let W=L?s:l,j=R.querySelectorAll("stop"),D=R.querySelectorAll("animate");if(L){let O=w.power>0?(4.5-w.power/100*3.3).toFixed(1):"5.0";j.length>=3&&(j[0].setAttribute("stop-color",W),j[0].setAttribute("stop-opacity","0.3"),j[1].setAttribute("stop-color",W),j[1].setAttribute("stop-opacity","1.0"),j[2].setAttribute("stop-color",W),j[2].setAttribute("stop-opacity","0.3"));for(let q of D)q.setAttribute("dur",`${O}s`);R.setAttribute("gradientUnits","objectBoundingBox")}else{j.length>=3&&(j[0].setAttribute("stop-color",W),j[0].setAttribute("stop-opacity","0.15"),j[1].setAttribute("stop-color",W),j[1].setAttribute("stop-opacity","0.25"),j[2].setAttribute("stop-color",W),j[2].setAttribute("stop-opacity","0.1"));for(let O of D)O.remove()}}let P=1+$*2,Y=2+$*2,K=E[P],Q=E[Y];if(K&&(K.textContent=w.name,K.setAttribute("fill",L?"var(--pulse-text-primary)":"var(--pulse-text-secondary)"),L?K.setAttribute("font-weight","600"):K.removeAttribute("font-weight")),Q){let W=L?`${w.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(w.power)}%${w.temp!==null?` \xB7 ${U(w.temp)}${w.unit}`:""}`:`Idle${w.temp!==null?` \xB7 ${U(w.temp)}${w.unit}`:""}`;Q.textContent=W,Q.setAttribute("fill",L?s:"var(--pulse-text-secondary)")}}return!0}var Pn=6,Ne=2;function He(t,e,i,n,o,a){let r=o*Math.PI/180,s=a*Math.PI/180,l=a-o>180?1:0;return`M${(t+i*Math.cos(r)).toFixed(2)},${(e+i*Math.sin(r)).toFixed(2)} A${i.toFixed(2)},${i.toFixed(2)} 0 ${l} 1 ${(t+i*Math.cos(s)).toFixed(2)},${(e+i*Math.sin(s)).toFixed(2)} L${(t+n*Math.cos(s)).toFixed(2)},${(e+n*Math.sin(s)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 0 ${(t+n*Math.cos(r)).toFixed(2)},${(e+n*Math.sin(r)).toFixed(2)} Z`}function Re(t,e,i,n,o){if(!t||t.length===0)return"";let a=it(),r=Number(e?.size)||280,s=e?.attribute||"temperature",l=s==="temperature"||s==="both",c=s==="humidity"||s==="both",p=r/2,u=r/2,h=r*120/280,d=1.5,b=(360-d*t.length)/t.length,g=[];for(let z of t){let F=z.entity,B=H(F),R=n?.zoneEntities?.[B]||{},P=J(F,R,i,z,{});g.push({name:P.name,temp:P.currentTemp,target:P.targetTemp,power:P.heatingPower,humidity:P.humidity,hvacAction:P.hvacAction,entityId:F,unit:P.unit})}let _=e?.outdoor_temp_entity,y=_||n?.hubEntities?.outside_temp,x=null;if(y&&i[y]){let z=i[y];z.state!=="unavailable"&&z.state!=="unknown"&&(x=z.attributes?.temperature!==void 0?String(z.attributes.temperature):z.state)}let S=y&&i[y]?.attributes?.unit_of_measurement||"\xB0C",C=e?.outdoor_humidity_entity,A=null;if(C&&i[C]){let z=i[C];z.state!=="unavailable"&&z.state!=="unknown"&&(A=z.attributes?.humidity!==void 0?String(z.attributes.humidity):z.state)}let T="",I=s==="humidity"?A!==null?`${m(A)}%`:"--":x!==null?`${m(x)}${m(S)}`:"--";s!=="humidity"&&c&&A!==null&&(T=`${m(A)}%`);let $={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[s]||"Home Thermal View",w=`<div class="pc-section pc-section-radial" data-attribute="${m(s)}"${_?` data-outdoor-temp-entity="${m(_)}"`:""}${C?` data-outdoor-humidity-entity="${m(C)}"`:""}>`;w+=`<div class="pulse-section-label">${m($)}</div>`,w+='<div class="pc-radial-container">';let M=`r${Math.random().toString(36).slice(2,9)}`,L=`radial-glow-${M}`,N=z=>`heat-shimmer-${M}-${z}`;if(w+=`<svg viewBox="0 0 ${r} ${r}" width="${r}" height="${r}" role="img" aria-label="${m($)}" style="display:block;margin:0 auto">`,w+="<defs>",w+=ot(L,kt(r,280).toFixed(1)),!a)for(let z=0;z<g.length;z++){let F=g[z],B=he(F.power,r);if(B<=0)continue;let R=45/Math.max(b,10),P=(.02*R).toFixed(4),Y=(.04*R).toFixed(4);w+=`<filter id="${N(z)}" x="-5%" y="-5%" width="110%" height="110%">`,w+=`<feTurbulence type="turbulence" baseFrequency="${P} ${Y}" numOctaves="2" result="turb">`,w+=`<animate attributeName="baseFrequency" values="${P} ${Y};${(parseFloat(P)*1.5).toFixed(4)} ${Y};${P} ${Y}" dur="4s" repeatCount="indefinite"/>`,w+="</feTurbulence>",w+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${B.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,w+="</filter>"}w+="</defs>";for(let z=0;z<g.length;z++){let F=g[z],B=z*(b+d)-90,R=B+b,P=F.power>0||F.hvacAction==="heating"||F.hvacAction==="cooling",Y=P?" pc-arc-active":"",K=[m(F.name)];l&&K.push(F.temp!==null?`${U(F.temp)}${F.unit}`:"--"),c&&F.humidity!==null&&K.push(`${Math.round(F.humidity)}%`),K.push(P?`${F.hvacAction==="cooling"?"Cooling":"Heating"} ${F.power}%`:"Idle");let Q=K.join(", ");w+=`<g class="pc-arc-group${Y}" data-idx="${z}">`;let W=c&&s==="both"?h+Ne+Pn+4:h+4,j=h-28-4,D=He(p,u,W,j,B-d/2,R+d/2);if(w+=`<path d="${D}" fill="transparent" class="pc-arc-hit"/>`,l){let O=F.temp!==null?G(F.temp):"var(--pulse-disabled)",q=8+F.power/100*20,X=h-q,pt=He(p,u,h,X,B,R);if(w+=`<path d="${pt}" fill="${k(O)}" class="pc-arc-path"`,he(F.power,r)>0&&!a?w+=` filter="url(#${N(z)})"`:P&&(w+=` filter="url(#${L})"`),w+=`><title>${Q}</title>`,P&&!a){let Nt=F.power>0?(4.5-F.power/100*3).toFixed(1):"5.0";w+=`<animate attributeName="opacity" values="1;0.82;1" dur="${Nt}s" repeatCount="indefinite"/>`}w+="</path>"}if(c&&F.humidity!==null){let O=zt(F.humidity),q,X;if(s==="both")q=h+Ne+Pn,X=h+Ne;else{let Tt=8+F.power/100*20;q=h,X=h-Tt}let pt=He(p,u,q,X,B,R);w+=`<path d="${pt}" fill="${k(O)}" class="pc-arc-path" opacity="0.8">`,w+=`<title>${Q}</title>`,w+="</path>"}w+="</g>"}w+="</svg>";let Z=8;if(l)for(let z of g){let F=8+z.power/100*20;F>Z&&(Z=F)}let V=Math.round((h-Z)*2);w+=`<div class="pc-center-info" id="radial-center" style="width:${V}px;height:${V}px">`,w+='<div class="pc-center-sheen" id="radial-sheen"></div>',w+=`<div class="pc-center-value">${I}</div>`,w+='<div class="pc-center-label">Outdoor</div>',w+=`<div class="pc-center-sub">${T}</div>`,w+="</div>",w+="</div>",w+='<div class="pc-zone-detail" id="radial-detail"></div>',w+='<div class="pc-radial-legend">';for(let z=0;z<g.length;z++){let F=g[z],B=s==="humidity"?F.humidity!==null?zt(F.humidity):"var(--pulse-disabled)":F.temp!==null?G(F.temp):"var(--pulse-disabled)",R="";l&&(R+=F.temp!==null?`${U(F.temp)}${F.unit}`:"--"),l&&c&&(R+=" \xB7 "),c&&(R+=F.humidity!==null?`${Math.round(F.humidity)}%`:"--"),w+=`<div class="pc-legend-item" data-idx="${z}">`,w+=`<span class="pc-legend-dot" style="background:${k(B)}"></span>`,w+=`${m(F.name)} <span class="pc-legend-temp">${m(R)}</span>`,w+="</div>"}return w+="</div>",w+="</div>",w}var qo=5,On={green:"var(--pulse-tier-moderate)",amber:"var(--pulse-tier-strong)",red:"var(--pulse-tier-gale)"},Bo={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function Vo(t){if(t.length===0)return{label:"All Good",color:"green",detail:"All zones off"};let e=t.filter(a=>a.currentTemp!==null&&a.currentTemp!==void 0&&a.targetTemp!==null&&a.targetTemp!==void 0&&Math.abs(a.currentTemp-a.targetTemp)<=1).length,i=t.length,n=e/i,o=i-e;return n>=.8?{label:"All Good",color:"green",detail:`${e} of ${i} zones at target`}:n>=.4?{label:"Warming Up",color:"amber",detail:`${o} zone${o!==1?"s":""} still catching up`}:{label:"Cold Start",color:"red",detail:`${o} of ${i} zones below target`}}function Uo(t){let e=[],i=[],n=[];for(let o of t)o.isUnavailable?n.push(o):o.hvacAction==="off"||!o.targetTemp?i.push(o):e.push(o);return e.sort((o,a)=>{let r=o.currentTemp!==null&&o.currentTemp!==void 0&&o.targetTemp!==null?Math.abs(o.currentTemp-o.targetTemp):0;return(a.currentTemp!==null&&a.currentTemp!==void 0&&a.targetTemp!==null?Math.abs(a.currentTemp-a.targetTemp):0)-r}),i.sort((o,a)=>o.name.localeCompare(a.name)),n.sort((o,a)=>o.name.localeCompare(a.name)),[...e,...i,...n]}function Wo(t){if(t.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let e=t.filter(s=>s.currentTemp!==null&&s.currentTemp!==void 0&&s.targetTemp!==null&&s.targetTemp!==void 0&&Math.abs(s.currentTemp-s.targetTemp)<=1).length,i=t.length,n=(t.reduce((s,l)=>s+(l.currentTemp??0),0)/i).toFixed(1),o=(t.reduce((s,l)=>s+(l.targetTemp??0),0)/i).toFixed(1),a=Math.round(t.reduce((s,l)=>s+l.heatingPower,0)/i),r=t[0].unit||"\xB0C";return{onTarget:`${e}/${i}`,avgActual:`${n}${r}`,avgTarget:`${o}${r}`,avgPower:`${a}%`}}function jo(t){let e=m(t.entityId),i=m(t.name),n=m(t.unit||"\xB0C"),o=!t.isUnavailable&&t.hvacAction!=="off"&&t.targetTemp,a,r;if(t.isUnavailable)a='<span class="pc-home-status-actual pc-off">--</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">Unavailable</span>',r='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text" style="color:var(--pulse-text-secondary)">--</span></div>';else if(!o)a=`<span class="pc-home-status-actual pc-off">${t.currentTemp!==null&&t.currentTemp!==void 0?`${m(t.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow"></span><span class="pc-home-status-target">Off</span>`,r='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text" style="color:var(--pulse-text-secondary)">Off</span></div>';else if(a=`<span class="pc-home-status-actual">${t.currentTemp!==null&&t.currentTemp!==void 0?`${m(t.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">${m(t.targetTemp)}${n}</span>`,t.currentTemp!==null&&t.currentTemp!==void 0){let l=t.currentTemp-t.targetTemp,c=Math.abs(l),p=Math.min(c/qo,1)*50,u=l<0?`${k(50-p)}%`:"50%",h=`${k(p)}%`,d=c<1?"green":c<=2.5?"amber":"red",f=On[d],b=`${l>=0?"+":"\u2212"}${m(c.toFixed(1))}\xB0`;r=`<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div><div class="pc-home-status-bar-fill" style="left:${u};width:${h};background:${k(f)}"></div></div><span class="pc-home-status-delta-text" style="color:${k(f)}">${b}</span></div>`}else r='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text" style="color:var(--pulse-text-secondary)">--</span></div>';return`<div class="pc-home-status-row" role="button" tabindex="0" data-entity="${e}"><span class="pc-home-status-zone-name">${i}</span><div class="pc-home-status-temps">${a}</div>`+r+"</div>"}function De(t,e,i,n){if(!t||t.length===0)return"";let o=t.map(h=>{let d=h.entity,f=H(d),v=i?.zoneEntities?.[f]||{};return J(d,v,e,h,{})}),a=o.filter(h=>!h.isUnavailable&&h.hvacAction!=="off"&&h.targetTemp),r=Vo(a),s=On[r.color],l=Bo[r.color],c=Uo(o),p=Wo(a),u='<div class="pc-section pc-section-home-status">';u+='<div class="pulse-section-label">Home Status</div>',n?.show_hero===!1&&(u+='<div class="pc-home-status-hero">',u+=`<ha-icon class="pc-home-status-icon" icon="${m(l)}" style="color:${k(s)}"></ha-icon>`,u+=`<div class="pc-home-status-label" style="color:${k(s)}">${m(r.label)}</div>`,u+=`<div class="pc-home-status-detail">${m(r.detail)}</div>`,u+="</div>"),u+='<div class="pc-home-status-zones">';for(let h of c)u+=jo(h);return u+="</div>",u+='<div class="pc-home-status-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.onTarget)}</div><div class="pc-stat-label">On Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.avgActual)}</div><div class="pc-stat-label">Avg Actual</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.avgTarget)}</div><div class="pc-stat-label">Avg Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.avgPower)}</div><div class="pc-stat-label">Avg Power</div></div>`,u+="</div>",u+="</div>",u}var Pe={comfort:"comfort_level"};function Go(t,e,i,n){if(!(t in Pe))return!0;let o=Pe[t];if(!e||e.length===0)return!1;for(let a of e){let r=H(a.entity),l=(i?.zoneEntities?.[r]||{})[o];if(l&&n[l]&&n[l].state!=="unavailable")return!0}return!1}function qn(t,e,i,n){let o=Pe[t];if(!o)return null;let r=(i?.zoneEntities?.[e]||{})[o];if(!r)return null;let s=n[r];if(!s||s.state==="unavailable"||s.state==="unknown")return null;if(t==="comfort"){let c=s.attributes||{},p=parseFloat(c.temperature),u=parseFloat(c.comfort_target);if(!Number.isFinite(p)||!Number.isFinite(u))return null;let h=Math.abs(p-u);return Math.max(0,Math.min(100,Math.round(100-h*10)))}let l=parseFloat(s.state);return Number.isFinite(l)?l:null}function Bn(t,e,i){let n=["power","temp","humidity"];return Go("comfort",t,e,i)&&n.push("comfort"),n}var Vn="var(--pulse-tier-calm)";function Zo(t){return t<=40?"var(--pulse-tier-moderate)":t<=70?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}function Ko(t){return t>=80?"var(--pulse-tier-moderate)":t>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}var Un={power:{label:"Power",unit:"%",max:100,colorFn:Zo},temp:{label:"Temp",unit:null,max:null,colorFn:()=>Vn},humidity:{label:"Humidity",unit:"%",max:100,colorFn:()=>Vn},comfort:{label:"Comfort",unit:"",max:100,colorFn:Ko}};function Yo(t,e,i,n,o){if(e.isUnavailable)return null;switch(t){case"power":return e.heatingPower;case"temp":return e.currentTemp;case"humidity":return e.humidity;case"comfort":return qn("comfort",i,n,o);default:return null}}function Xo(t,e){let i=t.filter(l=>l!=null);if(i.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let n=(i.reduce((l,c)=>l+c,0)/i.length).toFixed(1),o=Math.max(...i),a=Math.min(...i),r=(o-a).toFixed(1),s=e||"";return{avg:`${n}${s}`,high:`${Number.isInteger(o)?o:o.toFixed(1)}${s}`,low:`${Number.isInteger(a)?a:a.toFixed(1)}${s}`,spread:`${r}${s}`}}function ne(t,e,i,n="power"){if(!t||t.length===0)return"";let o=Bn(t,i,e),a=o.includes(n)?n:"power",r=Un[a];if(!r)return"";let s=[];for(let f of t){let v=f.entity,b=H(v),g=i?.zoneEntities?.[b]||{},_=J(v,g,e,f,{}),y=Yo(a,_,b,i,e);s.push({entityId:v,name:_.name,value:y,unit:_.unit||"\xB0C"})}s.sort((f,v)=>f.value===null&&v.value===null?0:f.value===null?1:v.value===null?-1:v.value-f.value);let l=s.map(f=>f.value).filter(f=>f!==null),c=r.max;c===null&&(c=l.length>0?Math.max(...l,30):30);let p=r.unit!==null?r.unit:s[0]?.unit||"\xB0C",u=`<div class="pc-section pc-section-zone-ranking" data-metric="${m(a)}">`;u+='<div class="pc-ranking-header">',u+='<div class="pulse-section-label">Zone Ranking</div>',u+='<div class="pc-ranking-tabs">';for(let f of o){let v=Un[f];if(!v)continue;u+=`<div class="pc-ranking-tab${f===a?" pc-active":""}" data-metric="${m(f)}">${m(v.label)}</div>`}u+="</div></div>",u+='<div class="pc-ranking-list">';for(let f=0;f<s.length;f++){let v=s[f],b=f+1,g=b===1&&v.value!==null?" pc-top":"",_=v.value!==null&&c>0?Math.round(v.value/c*100):0,y=v.value!==null?r.colorFn(v.value):"",x=v.value!==null?`${_}%`:"0%",S;v.value===null?S="--":a==="temp"?S=`${v.value}${v.unit}`:S=`${v.value}${p}`,u+=`<div class="pc-rank-row" role="button" tabindex="0" data-entity="${m(v.entityId)}">`,u+=`<div class="pc-rank-num${g}">${b}</div>`,u+=`<div class="pc-rank-name">${m(v.name)}</div>`,u+=`<div class="pc-rank-bar-track"><div class="pc-rank-bar-fill" style="width:${k(x)};background:${k(y)}"></div></div>`,u+=`<div class="pc-rank-value">${m(S)}</div>`,u+="</div>"}u+="</div>";let h=s.map(f=>f.value),d=Xo(h,p);return u+='<div class="pc-ranking-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.avg)}</div><div class="pc-stat-label">Average</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.high)}</div><div class="pc-stat-label">Highest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.low)}</div><div class="pc-stat-label">Lowest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.spread)}</div><div class="pc-stat-label">Spread</div></div>`,u+="</div>",u+="</div>",u}var Jo=new Set(["heating","cooling","mixed","idle","off"]),Qo=new Set(["subtle","medium","bold"]);function Wn(t,e){if(t==null||!Jo.has(t))return"";let i=e!==void 0&&Qo.has(e)?e:"medium";return`<div class="pc-atmosphere-backdrop pc-state-${t} pc-intensity-${i}" aria-hidden="true"></div>`}var ti={heating:"Heating",cooling:"Cooling",mixed:"Mixed",idle:"Idle",off:"Off"};function Oe(t,e,i,n){if(!Array.isArray(t)||t.length===0)return"";let o=t.filter(A=>!A.isUnavailable),a=Wt(t),r=o.filter(A=>typeof A.currentTemp=="number"&&Number.isFinite(A.currentTemp)),s=r.length>0?r.reduce((A,T)=>A+T.currentTemp,0)/r.length:null,l=t[0]&&t[0].unit||"\xB0C",c=o.filter(A=>A.hvacAction==="heating").length,p=o.filter(A=>A.hvacAction==="cooling").length,u=o.filter(A=>A.hvacAction==="idle").length,h=o.filter(A=>A.hvacAction==="off").length,d=t.length-o.length,f=ti[a]||"Idle",v=s===null?"\u2014":`${U(s)}${m(l)}`,b=`<div class="pc-hero pc-state-${a}">`;b+='<div class="pc-hero-left">',b+='<div class="pc-hero-label">Home avg</div>',b+=`<div class="pc-hero-temp">${v}</div>`,b+="</div>",b+='<div class="pc-hero-right">';let g=a==="heating"||a==="cooling"||a==="mixed"?" pc-hero-dot-active":"",_=c+p,y=_>0?`${m(f)} \xB7 ${_} active`:`${m(f)} \xB7 ${o.length} ${o.length===1?"zone":"zones"}`;b+=`<div class="pc-hero-status"><span class="pc-hero-dot${g}"></span>${y}</div>`;let x=[];if(c&&x.push(`${c} heat`),p&&x.push(`${p} cool`),u&&x.push(`${u} idle`),h&&x.push(`${h} off`),d&&x.push(`${d} unavail`),x.length>0&&(b+=`<div class="pc-hero-breakdown">${x.map(A=>m(A)).join(" \xB7 ")}</div>`),b+="</div>",e?.hero_show_outside!==!1&&n&&typeof n.value=="number"&&Number.isFinite(n.value)){let A=n;b+='<div class="pc-hero-outside">',b+='<span class="pc-hero-outside-label">Last 24h</span>',b+=`<span class="pc-hero-outside-value">Outside ${U(A.value)}${m(A.unit)}</span>`,b+="</div>"}if(e?.hero_show_thermal_strip!==!1&&Array.isArray(i)&&i.length>=2){let T=Math.max(1,Math.floor(i.length/24)),I="";for(let E=0;E<24;E++){let $=i[Math.min(i.length-1,E*T)],w=G($.v);I+=`<span style="background:${k(w)}"></span>`}b+=`<div class="pc-hero-strip" aria-hidden="true">${I}</div>`}return b+="</div>",b}function qe(t,e,i){let n={value:null,unit:"\xB0C",entityId:null};if(!i)return n;let o=t?.outdoor_temp_entity||e?.hubEntities?.outside_temp||null;if(!o){for(let c of Object.keys(i))if(c.startsWith("weather.")&&i[c]?.attributes?.temperature!==void 0){o=c;break}}if(!o||!i[o])return n;let a=i[o];if(a.state==="unavailable"||a.state==="unknown")return{value:null,unit:"\xB0C",entityId:o};let r=a.attributes?.temperature!==void 0?a.attributes.temperature:a.state,s=Number.parseFloat(r),l=a.attributes?.unit_of_measurement||"\xB0C";return{value:Number.isFinite(s)?s:null,unit:l,entityId:o}}var jn=!1,ei=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),Gn=ei?(()=>{let t=new CSSStyleSheet;return t.replaceSync(de),t})():null,ni=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut"]),oi={zones:".pc-section-zones",api:".pc-section-api",graph:".pc-section-graph",bridge:".pc-section-bridge",thermal_strip:".pc-section-thermal-strip",comfort_strip:".pc-section-comfort-strip",homekit:".pc-section-homekit",weather:".pc-section-weather",radial:".pc-section-radial",donut:".pc-section-donut",environment:".pc-section-environment",thermal:".pc-section-thermal",schedule:".pc-section-schedule",energy_flow:".pc-section-energy-flow",home_status:".pc-section-home-status",zone_ranking:".pc-section-zone-ranking"},Be=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_sparklinePathCache=new Map;_radialAnimState={shimmer:!1,sheen:!1};_historyGen=0;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=Sn()}setConfig(e){this._stopRadialAnimations(),this._historyGen++,this._config=vn(e),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(e){if(this._hass=e,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let i=Date.now();if(i-this._lastUpdateTime<200)return;this._lastUpdateTime=i;let n=this._hass.states,o=(this._config._zones||[]).some(a=>n[a.entity]!==this._prevStates[a.entity]);o&&this._updateZones(),this._updateSections(),o&&this._updateHero(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;this._historyGen++;let i=(this._config._zones||[]).map(n=>H(n.entity));if(this._discovery=wn(this._hass.states,i,this._hass.entities),!jn&&this._discovery.isTadoCE){jn=!0;let n=Object.entries(this._discovery.hubEntities).map(([o,a])=>`${o}=${a}`);console.info(`${gt} Tado CE hub discovery \u2014 found: ${n.join(", ")}`),this._discovery.missingHubKeys.length>0&&console.warn(`${gt} Tado CE hub discovery \u2014 missing: ${this._discovery.missingHubKeys.join(", ")}. Affected sections may render with degraded data.`)}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let e=this._historyCache?.data;if(e)for(let[i,n]of Object.entries(e)){if(!n||n.length<2)continue;let o=ct(n,340,36,48);o&&this._sparklinePathCache.set(i,o)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let e=this._discovery,i=e.hubEntities,n=this._config._zones||[];this._rerenderTargets=[{selector:".pc-section-zones",watchIds:[i.home_state].filter(Boolean),render:()=>{let o=this._config,a=this._hass?.states||{};return _e(n,o,a,e,this._historyCache)}},{selector:".pc-section-api",watchIds:[i.api_usage,i.api_limit,i.api_status,i.next_sync,i.token_status].filter(Boolean),render:()=>{let o=this._hass?.states||{},r=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="api")||{};return ye(i,o,r,this._historyCache)}},{selector:".pc-section-homekit",watchIds:[i.homekit_connected,i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean),render:()=>{let o=this._hass?.states||{};return xe(i,o,this._historyCache)}},{selector:".pc-section-bridge",watchIds:[i.bridge_connected,i.boiler_flow_temp,i.wc_status,i.wc_target_flow].filter(Boolean),render:()=>{let o=this._hass?.states||{};return we(i,o,this._historyCache)}},{selector:".pc-section-weather",watchIds:[i.outside_temp,i.weather,i.solar_intensity].filter(Boolean),render:()=>{let o=this._hass?.states||{};return $e(i,o,this._historyCache)}},{selector:".pc-section-environment",watchIds:n.flatMap(o=>{let a=H(o.entity),r=e.zoneEntities?.[a]||{};return[r.mold_risk,r.condensation,r.comfort_level,r.surface_temp,r.dew_point].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return Se(n,o,e)}},{selector:".pc-section-thermal",watchIds:n.flatMap(o=>{let a=H(o.entity),r=e.zoneEntities?.[a]||{};return[r.heating_rate,r.thermal_inertia,r.preheat_time,r.confidence].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return ke(n,o,e)}},{selector:".pc-section-schedule",watchIds:n.flatMap(o=>{let a=H(o.entity),r=e.zoneEntities?.[a]||{};return[r.next_schedule,r.next_sched_temp,r.schedule_deviation,r.preheat_advisor,r.comfort_target].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return Ae(n,o,e)}},{selector:".pc-section-radial",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},r=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="radial")||{};return Re(n,r,o,e,this._historyCache)}},{selector:".pc-section-donut",watchIds:(()=>{let r=(this._config?.sections||[]).find(s=>(typeof s=="string"?s:s.type)==="donut")?.source;return r==="api_breakdown"&&i.api_breakdown?[i.api_breakdown]:r==="homekit_saved"?[i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let o=this._hass?.states||{},r=(this._config?.sections||[]).find(s=>(typeof s=="string"?s:s.type)==="donut")||{};return Fe(r,i,o)}},{selector:".pc-section-graph",watchIds:[],render:()=>{let o=this._hass?.states||{},r=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="graph")||{};return Ie(r,n,this._historyCache,o,e)}},{selector:".pc-section-home-status",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{};return De(n,o,e,this._config||{})}},{selector:".pc-section-zone-ranking",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},r=this._shadow.querySelector(".pc-section-zone-ranking")?.getAttribute("data-metric")||"power";return ne(n,o,e,r)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,i=this._hass.states,n=this._discovery,o=e._zones||[],a=e.layout==="compact",r=e.entity_row===!0,s="";Gn?this._shadow.adoptedStyleSheets=[Gn]:s+=`<style>${de}</style>`;let l=o.map(u=>{let h=H(u.entity),d=n.zoneEntities?.[h]||{};return J(u.entity,d,i,u,e)}),c=Wt(l);if(r||(s+=`<ha-card${a?' class="pc-compact"':""}>`),e.show_atmosphere!==!1&&(s+=Wn(c,e.atmosphere_intensity)),s+='<div class="pc-card-content">',e.title&&(s+=`<div class="pulse-title">${m(e.title)}</div>`),e.show_hero!==!1){let u=qe(e,n,i);s+=Oe(l,e,this._getHomeAvgHistory(l),u)}let p=e.sections||[{type:"zones"}];for(let u of p)s+=this._renderSection(u,o,i,n);s+="</div>",r||(s+="</ha-card>"),this._shadow.innerHTML=s,this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let e=this._shadow.querySelectorAll(".pc-zone-row"),i=this._config._zones||[];for(let n=0;n<e.length&&n<i.length;n++){let o=e[n],a=i[n],r=a.entity,s=o.__pulseCleanup;typeof s=="function"&&s();let l=new AbortController,{signal:c}=l,p=0,u=null,h=null,d=!1;o.__pulseCleanup=()=>{l.abort(),u&&clearTimeout(u),h&&clearTimeout(h),delete o.__pulseCleanup},o.addEventListener("keydown",v=>{let b=v;(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),this._fireAction(r,a,"tap_action"))},{signal:c}),o.addEventListener("click",v=>{if(v.preventDefault(),d){d=!1;return}p++,p===1?u=setTimeout(()=>{p=0,this._fireAction(r,a,"tap_action")},250):p===2&&(u&&clearTimeout(u),p=0,this._fireAction(r,a,"double_tap_action"))},{signal:c}),o.addEventListener("pointerdown",()=>{d=!1,h=setTimeout(()=>{d=!0,this._fireAction(r,a,"hold_action")},500)},{signal:c});let f=()=>{h&&clearTimeout(h)};o.addEventListener("pointerup",f,{signal:c}),o.addEventListener("pointercancel",f,{signal:c}),o.addEventListener("contextmenu",v=>v.preventDefault(),{signal:c}),at(o)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs()}_bindChipActions(){if(!this._config||!this._hass)return;this._chipAbort&&this._chipAbort.abort(),this._chipAbort=new AbortController;let{signal:e}=this._chipAbort,i=this._config._zones||[],n=this._shadow.querySelectorAll(".pc-zone-row");for(let o=0;o<n.length&&o<i.length;o++){let a=i[o],r=a.entity,s=n[o].querySelectorAll(".pc-chip");for(let l of s){let c=l,p=c.dataset.chipType||"",u=c.dataset.entity||r,h=a.chip_actions,d=this._config.chip_actions,f=h?.[p]||d?.[p]||{},v=f.tap_action||{action:"more-info",entity:u},b=f.hold_action||{action:"none"};c.style.cursor="pointer",at(c),c.addEventListener("click",_=>{_.stopPropagation(),this._hass&&$t(this,this._hass,v,u,lt)},{signal:e});let g=null;c.addEventListener("pointerdown",_=>{_.stopPropagation(),g=setTimeout(()=>{!this._hass||b.action==="none"||$t(this,this._hass,b,u,lt)},500)},{signal:e}),c.addEventListener("pointerup",_=>{_.stopPropagation(),g&&clearTimeout(g)},{signal:e}),c.addEventListener("pointercancel",()=>{g&&clearTimeout(g)},{signal:e}),c.addEventListener("contextmenu",_=>_.preventDefault(),{signal:e})}}}_bindSectionChipActions(){this._sectionChipAbort&&this._sectionChipAbort.abort(),this._sectionChipAbort=new AbortController;let{signal:e}=this._sectionChipAbort,i=this._shadow.querySelectorAll(".pc-section [data-entity]");for(let n of i){let o=n;o.closest(".pc-zone-row")&&o.classList.contains("pc-chip")||o.classList.contains("pc-zone-row")||(o.style.cursor="pointer",at(o),o.addEventListener("click",a=>{a.stopPropagation();let r=o.dataset.entity;r&&qt(this,"hass-more-info",{entityId:r})},{signal:e}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let e=this._shadow.querySelector(".chip-next-sync");if(!e)return;let i=Number(e.getAttribute("data-target"));if(!i||!isFinite(i))return;let n=()=>{let o=i-Date.now();if(o<=0){e.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let a=Math.floor(o/6e4),r=Math.floor(o%6e4/1e3);e.textContent=a>0?`Next: ${a}m ${r}s`:`Next: ${r}s`};n(),this._countdownTimer=setInterval(n,1e3)}_bindRadialInteractions(){this._radialAbort&&this._radialAbort.abort(),this._radialAbort=new AbortController;let{signal:e}=this._radialAbort,i=this._shadow.querySelectorAll(".pc-arc-group"),n=this._shadow.querySelectorAll(".pc-radial-legend .pc-legend-item"),o=this._shadow.querySelector("#radial-center"),a=this._shadow.querySelector("#radial-detail"),r=this._shadow.querySelector(".pc-section-radial svg");if(i.length===0||!o)return;let l=(r&&Number(r.getAttribute("width"))||280)/2,c=this._config?._zones||[],p=null,u=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-temp-entity"),h=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-attribute")||"temperature",d=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-humidity-entity"),f=()=>{let g=this._hass?.states||{},_=this._discovery,y=u||_?.hubEntities?.outside_temp,x="--",S="";if(h!=="humidity"&&y&&g[y]){let C=g[y];C.state!=="unavailable"&&C.state!=="unknown"&&(x=`${C.attributes?.temperature!==void 0?C.attributes.temperature:C.state}${C.attributes?.unit_of_measurement||"\xB0C"}`)}if(d&&g[d]){let C=g[d];if(C.state!=="unavailable"&&C.state!=="unknown"){let A=C.attributes?.humidity!==void 0?C.attributes.humidity:C.state;h==="humidity"?x=`${A}%`:S=`${A}%`}}return{center:x,centerSub:S}},v=g=>{let _=this._hass?.states||{},y=this._discovery;if(p===g){b();return}p=g;let x=c[g];if(!x)return;let S=x.entity,C=H(S),A=y?.zoneEntities?.[C]||{},T=Et(S,_,x),{name:I,temp:E,target:$,humidity:w}=T,M=T.hvacAction,L=0;if(A.heating_power){let R=_[A.heating_power];R&&R.state!=="unavailable"&&(L=parseFloat(R.state)||0)}else _[S]?.attributes?.heating_power!==void 0&&(L=parseFloat(_[S].attributes.heating_power)||0);let Z=L>0||M==="heating"||M==="cooling"?`${M==="cooling"?"Cooling":"Heating"} ${Math.round(L)}%`:"Idle",V=o.querySelector(".pc-center-value"),z=o.querySelector(".pc-center-label"),F=o.querySelector(".pc-center-sub");V&&(V.textContent=E!==void 0?`${U(E)}${T.unit}`:"--"),z&&(z.textContent=I);let B=w!==void 0?` \xB7 ${w}%`:"";F&&(F.textContent=`${Z}${B}`),i.forEach((R,P)=>{R.classList.toggle("pc-dimmed",P!==g),R.classList.toggle("pc-selected",P===g),P===g?R.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):R.removeAttribute("transform")}),n.forEach((R,P)=>{R.classList.toggle("pc-selected",P===g)}),a&&(a.innerHTML=`<div class="pc-detail-stats">
          <div class="pc-stat"><div class="pc-stat-value">${$!==void 0?m($)+m(T.unit):"--"}</div><div class="pc-stat-label">Target</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${w!==void 0?m(w)+"%":"--"}</div><div class="pc-stat-label">Humidity</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${m(M)}</div><div class="pc-stat-label">Action</div></div>
        </div>`,a.classList.add("pc-active"))},b=()=>{p=null;let{center:g,centerSub:_}=f(),y=o.querySelector(".pc-center-value"),x=o.querySelector(".pc-center-label"),S=o.querySelector(".pc-center-sub");y&&(y.textContent=g),x&&(x.textContent="Outdoor"),S&&(S.textContent=_),i.forEach(C=>{C.classList.remove("pc-dimmed","pc-selected"),C.removeAttribute("transform")}),n.forEach(C=>{C.classList.remove("pc-selected")}),a&&(a.classList.remove("pc-active"),a.innerHTML="")};if(i.forEach((g,_)=>{g.addEventListener("click",()=>v(_),{signal:e})}),n.forEach((g,_)=>{at(g),g.addEventListener("click",()=>v(_),{signal:e})}),this._stopRadialAnimations(),i.length>1&&!it()){this._radialAnimState.shimmer=!0;let g=0,_=1,y=()=>{if(!this._radialAnimState.shimmer)return;if(p!==null){setTimeout(y,500);return}let x=i[g];if(!x){setTimeout(y,300);return}if(x.style.filter="brightness(1.8)",x.style.transition="filter 0.3s ease-in",setTimeout(()=>{x.style.filter="",x.style.transition="filter 0.5s ease-out"},250),g+=_,g>=i.length||g<0){g=_>0?0:i.length-1;let S=1e3+Math.random()*2e3;Math.random()<.4&&(_*=-1),setTimeout(y,S)}else{let S=80+Math.random()*170;setTimeout(y,S)}};setTimeout(y,1500)}if(!it()){let g=this._shadow.querySelector("#radial-sheen");if(g){let y=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(y?(.299*Number(y[1])+.587*Number(y[2])+.114*Number(y[3]))/255>=.5:!1)?g.classList.add("light-theme"):g.classList.remove("light-theme"),this._radialAnimState.sheen=!0;let S=()=>{if(!this._radialAnimState.sheen)return;let C=Math.random()>.5,A=C?"-100% 50%":"200% 50%",T=C?"200% 50%":"-100% 50%",I=1.2+Math.random()*1.5;g.style.transition="none",g.style.backgroundPosition=A,g.offsetWidth,g.style.transition=`background-position ${I}s ease-in-out`,g.style.backgroundPosition=T,setTimeout(()=>{let E=4e3+Math.random()*6e3;setTimeout(S,E)},I*1e3)};setTimeout(S,2e3+Math.random()*3e3)}}}_stopRadialAnimations(){this._radialAnimState.shimmer=!1,this._radialAnimState.sheen=!1}_bindTimelineInteractions(){this._timelineAbort&&this._timelineAbort.abort(),this._timelineAbort=new AbortController;let{signal:e}=this._timelineAbort,i=this._shadow.querySelectorAll(".pc-section-thermal-strip .pc-timeline-row"),n=this._shadow.querySelector(".pc-section-thermal-strip");if(i.length===0||!n)return;let o=this._config?._zones||[],a=n.querySelector(".pc-section-subtitle"),r="Tap a zone for details",s=this._hass?.states?.[o[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C",l=null,c=null,p=_=>{c=null;let y=_.querySelector(".pc-comparison-path");y&&y.remove();let x=_.querySelector(".pc-comparison-legend");x&&x.remove()};i.forEach((_,y)=>{at(_),_.addEventListener("click",()=>{let x=this._hass?.states||{},S=this._discovery,C=this._historyCache;if(n.querySelectorAll(".pc-strip-drag-highlight").forEach(D=>{D.style.display="none"}),l!==null&&l!==y){let D=n.querySelector(".pc-zone-detail"),O=D?.querySelector(".pc-detail-sparkline svg");if(D&&O){if(c===y){p(D);return}p(D),c=y;let q=o[y];if(!q)return;let X=q.entity,pt=H(X),Tt=S?.zoneEntities?.[pt]||{},Nt=q.temperature_entity||Tt.temperature||X,Ve=C?.data?.[Nt]||[];if(Ve.length>=2){let We=this._sparklinePathCache.get(Nt)||ct(Ve,340,36,48);if(We){let ft=document.createElementNS("http://www.w3.org/2000/svg","path");ft.setAttribute("d",We.linePath),ft.setAttribute("fill","none"),ft.setAttribute("stroke","var(--pulse-info-color)"),ft.setAttribute("stroke-width","1.5"),ft.setAttribute("opacity","0.5"),ft.classList.add("pc-comparison-path"),O.appendChild(ft)}}let Ue=o[l],Zn=Et(Ue?.entity||"",x,Ue).name,Kn=Et(X,x,q).name,Ht=document.createElement("div");Ht.className="pc-comparison-legend",Ht.style.cssText="display:flex;gap:12px;font-size:10px;margin-top:4px;color:var(--pulse-text-secondary)",Ht.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:currentColor;margin-right:4px"></span>${m(Zn)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:var(--pulse-info-color);margin-right:4px"></span>${m(Kn)}</span>`,D.appendChild(Ht);return}}if(l===y){l=null,c=null,i.forEach(O=>O.classList.remove("pc-selected"));let D=n.querySelector(".pc-zone-detail");D&&D.classList.remove("pc-active"),a&&(a.textContent=r);return}l=y,i.forEach((D,O)=>D.classList.toggle("pc-selected",O===y));let A=o[y];if(!A)return;let T=A.entity,I=x[T]?.attributes||{},E=Et(T,x,A),{name:$,temp:w,target:M,humidity:L,hvacAction:N}=E;a&&(a.textContent=$);let Z=H(T),V=S?.zoneEntities?.[Z]||{},z=A.temperature_entity||V.temperature||T,F=C?.data?.[z]||[],B="";if(F.length>=2){let D=F[F.length-1],O=F[F.length-2],q=D.v-O.v,X=(D.t-O.t)/36e5;if(X>0&&isFinite(q)&&isFinite(X)){let pt=q/X;B=`${pt>=0?"+":""}${pt.toFixed(1)}${E.unit}/hr`}}let R=0;if(V.heating_power){let D=x[V.heating_power];D&&D.state!=="unavailable"&&(R=parseFloat(D.state)||0)}else I.heating_power!==void 0&&(R=parseFloat(I.heating_power)||0);let Y=R>0||N==="heating"||N==="cooling"?`${N==="cooling"?"Cooling":"Heating"} ${Math.round(R)}%`:"Idle",K="";if(F.length>=2){let D=1/0,O=-1/0;for(let q of F)isFinite(q.v)&&(q.v<D&&(D=q.v),q.v>O&&(O=q.v));isFinite(D)&&isFinite(O)&&(K=`${D.toFixed(1)}${E.unit} \u2013 ${O.toFixed(1)}${E.unit} today`)}let Q="";if(F.length>=2){let D=N==="heating"?"var(--pulse-status-yellow)":w!==void 0&&isFinite(Number(w))?G(Number(w)):"var(--pulse-text-primary)",O=k(D),q=this._sparklinePathCache.get(z)||ct(F,340,36,48);if(q){let X=`tl-detail-grad-${y}`;Q=`<div class="pc-detail-sparkline pc-sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${m(X)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${O}" stop-opacity="0.3"/><stop offset="100%" stop-color="${O}" stop-opacity="0"/></linearGradient></defs><path d="${q.areaPath}" fill="url(#${m(X)})" /><path d="${q.linePath}" fill="none" stroke="${O}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let W=n.querySelector(".pc-zone-detail");W||(W=document.createElement("div"),W.className="pc-zone-detail",n.insertBefore(W,n.querySelector(".pc-timeline-row"))),W.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${m($)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${w!==void 0?m(w)+m(E.unit):"--"}</div><div class="pc-stat-label">Current</div>${B?`<div class="pc-stat-sub">${m(B)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${M!==void 0?m(M)+m(E.unit):"--"}</div><div class="pc-stat-label">Target</div>${Y?`<div class="pc-stat-sub">${m(Y)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${L!==void 0?m(L)+"%":"--"}</div><div class="pc-stat-label">Humidity</div>${K?`<div class="pc-stat-sub">${m(K)}</div>`:""}</div>
          </div>${Q}`,W.classList.add("pc-active");let j=W.querySelector(".pc-detail-close");j&&j.addEventListener("click",D=>{D.stopPropagation(),l=null,c=null,i.forEach(O=>O.classList.remove("pc-selected")),W.classList.remove("pc-active"),a&&(a.textContent=r)},{signal:e})},{signal:e})});let u=Ee(),h=n.querySelector(".pc-strip-rows");h&&(h.style.position="relative",h.appendChild(u.element)),n.querySelectorAll(".pc-strip-container").forEach(_=>{let y=_.getAttribute("data-slots"),x=null;try{y&&(x=JSON.parse(y))}catch{}_.addEventListener("pointermove",S=>{if(S.pointerType==="touch"||!x)return;let C=_.getBoundingClientRect(),A=mt(S.clientX,C,x.length),T=x[A];if(T){let I=T.v!==null?`${T.l}: ${T.v}${s}`:`${T.l}: --`;u.show(C,S.clientX-C.left,I)}},{signal:e}),_.addEventListener("pointerleave",()=>u.hide(),{signal:e}),_.addEventListener("pointerdown",S=>{if(S.pointerType!=="touch"||!x)return;let C=_.getBoundingClientRect(),A=mt(S.clientX,C,x.length),T=x[A];if(T){let I=T.v!==null?`${T.l}: ${T.v}${s}`:`${T.l}: --`;u.show(C,S.clientX-C.left,I),setTimeout(()=>u.hide(),2e3)}},{signal:e})}),n.querySelectorAll(".pc-cells").forEach(_=>{_.addEventListener("pointermove",y=>{if(y.pointerType==="touch")return;let x=y.target?.closest?.(".pc-cell");if(!x){u.hide();return}let S=x.getAttribute("data-hour")||"",C=x.getAttribute("data-score"),A=C?`${S}: ${C}${s}`:`${S}: --`,T=_.getBoundingClientRect();u.show(T,y.clientX-T.left,A)},{signal:e}),_.addEventListener("pointerleave",()=>u.hide(),{signal:e}),_.addEventListener("pointerdown",y=>{if(y.pointerType!=="touch")return;let x=y.target?.closest?.(".pc-cell");if(!x)return;let S=x.getAttribute("data-hour")||"",C=x.getAttribute("data-score"),A=C?`${S}: ${C}${s}`:`${S}: --`,T=_.getBoundingClientRect();u.show(T,y.clientX-T.left,A),setTimeout(()=>u.hide(),2e3)},{signal:e})});let v=h?.querySelector(".pc-strip-crosshair"),b=h?.querySelector(".pc-strip-container")||h?.querySelector(".pc-cells");if(h&&v&&b){let _=b.getBoundingClientRect().left-h.getBoundingClientRect().left;Me(h,v,b,_)}n.querySelectorAll(".pc-strip-container, .pc-cells").forEach(_=>{let y=_.getAttribute("data-slots"),x=null;try{y&&(x=JSON.parse(y))}catch{}ze(_,x,u,s)})}_bindHeatmapInteractions(){this._heatmapAbort&&this._heatmapAbort.abort(),this._heatmapAbort=new AbortController;let{signal:e}=this._heatmapAbort,i=this._shadow.querySelectorAll(".pc-section-comfort-strip .pc-heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(i.length===0||!n)return;let o=null;i.forEach((d,f)=>{at(d),d.addEventListener("click",()=>{let v=this._shadow.querySelector(".pc-section-comfort-strip");if(v&&v.querySelectorAll(".pc-strip-drag-highlight").forEach($=>{$.style.display="none"}),o===f){o=null,i.forEach($=>$.classList.remove("pc-selected")),n.classList.remove("pc-active");return}o=f,i.forEach(($,w)=>$.classList.toggle("pc-selected",w===f));let b=d.querySelectorAll(".pc-cell"),g=[],_=[];if(b.length>0)b.forEach($=>{let w=$.getAttribute("data-score");w&&(g.push(Number(w)),_.push($.getAttribute("data-hour")||"--"))});else{let w=d.querySelector(".pc-strip-container")?.getAttribute("data-slots");if(w)try{let M=JSON.parse(w);for(let L of M)L.v!==null&&L.v!==void 0&&(g.push(L.v),_.push(L.l||"--"))}catch{}}if(g.length===0)return;let y=Math.round(g.reduce(($,w)=>$+w,0)/g.length),x=0,S=0;for(let $=1;$<g.length;$++)g[$]>g[x]&&(x=$),g[$]<g[S]&&(S=$);let C=_[x]||"--",A=_[S]||"--",T=y>=80?"var(--pulse-status-green)":y>=50?"var(--pulse-status-yellow)":"var(--pulse-status-red)",I=d.querySelector(".pc-zone-label")?.textContent||"";n.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${m(I)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${y}</div><div class="pc-stat-label">Avg Score</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${m(C)}</div><div class="pc-stat-label">Best Hour</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${m(A)}</div><div class="pc-stat-label">Worst Hour</div></div>
          </div>
          <div class="pc-detail-bar"><div class="pc-detail-bar-fill" style="width:${y}%;background:${k(T)}"></div></div>`,n.classList.add("pc-active");let E=n.querySelector(".pc-detail-close");E&&E.addEventListener("click",$=>{$.stopPropagation(),o=null,i.forEach(w=>w.classList.remove("pc-selected")),n.classList.remove("pc-active")},{signal:e})},{signal:e})});let a=this._shadow.querySelector(".pc-section-comfort-strip");if(!a)return;let r=Ee(),s=a.querySelector(".pc-heatmap-body");s&&(s.style.position="relative",s.appendChild(r.element));let l=s?.querySelector(".pc-cells")||s?.querySelector(".pc-strip-container");a.querySelectorAll(".pc-cells").forEach(d=>{d.addEventListener("pointermove",f=>{if(f.pointerType==="touch")return;let v=f.target?.closest?.(".pc-cell");if(!v){r.hide();return}let b=v.getAttribute("data-hour")||"",g=v.getAttribute("data-score"),_=g?`${b}: Score ${g}`:`${b}: --`,y=l?.getBoundingClientRect();y&&r.show(y,f.clientX-y.left,_)},{signal:e}),d.addEventListener("pointerleave",()=>r.hide(),{signal:e}),d.addEventListener("pointerdown",f=>{if(f.pointerType!=="touch")return;let v=f.target?.closest?.(".pc-cell");if(!v)return;let b=v.getAttribute("data-hour")||"",g=v.getAttribute("data-score"),_=g?`${b}: Score ${g}`:`${b}: --`,y=l?.getBoundingClientRect();y&&(r.show(y,f.clientX-y.left,_),setTimeout(()=>r.hide(),2e3))},{signal:e})}),a.querySelectorAll(".pc-strip-container").forEach(d=>{let f=d.getAttribute("data-slots"),v=null;try{f&&(v=JSON.parse(f))}catch{}d.addEventListener("pointermove",b=>{if(b.pointerType==="touch"||!v)return;let g=d.getBoundingClientRect(),_=mt(b.clientX,g,v.length),y=v[_];if(y){let x=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;r.show(g,b.clientX-g.left,x)}},{signal:e}),d.addEventListener("pointerleave",()=>r.hide(),{signal:e}),d.addEventListener("pointerdown",b=>{if(b.pointerType!=="touch"||!v)return;let g=d.getBoundingClientRect(),_=mt(b.clientX,g,v.length),y=v[_];if(y){let x=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;r.show(g,b.clientX-g.left,x),setTimeout(()=>r.hide(),2e3)}},{signal:e})});let u=s?.querySelector(".pc-strip-crosshair");if(s&&u&&l){let d=l.getBoundingClientRect().left-s.getBoundingClientRect().left;Me(s,u,l,d)}a.querySelectorAll(".pc-cells, .pc-strip-container").forEach(d=>{let f=d.getAttribute("data-slots"),v=null;try{f&&(v=JSON.parse(f))}catch{}ze(d,v,r)})}_bindEnergyFlowInteractions(){this._energyFlowAbort&&this._energyFlowAbort.abort(),this._energyFlowAbort=new AbortController;let{signal:e}=this._energyFlowAbort,i=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),n=this._shadow.querySelector(".section-energy-flow");if(i.length===0||!n)return;let o=null;i.forEach(a=>{a.classList.add("pc-ribbon"),a.addEventListener("click",()=>{let r=a.getAttribute("data-zone");if(r){if(o===r){o=null,i.forEach(s=>s.classList.remove("pc-dimmed"));return}o=r,i.forEach(s=>{s.classList.toggle("pc-dimmed",s.getAttribute("data-zone")!==r)})}},{signal:e})})}_bindSparklineCrosshairs(){this._sparklineAbort&&this._sparklineAbort.abort(),this._sparklineAbort=new AbortController;let{signal:e}=this._sparklineAbort;this._shadow.querySelectorAll(".pc-strip-tooltip-fixed").forEach(o=>o.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(o=>o.remove());let i=this._shadow.querySelectorAll(".pc-section-zones .pc-sparkline-filled, .pc-section-zones .pc-zone-row-pulse");if(i.length===0)return;let n=Mn();this._shadow.appendChild(n.element),i.forEach(o=>{let a=o;a.style.position="relative";let r=document.createElement("div");r.className="pc-strip-crosshair pc-sparkline-crosshair",r.style.display="none",r.style.top="0",r.style.bottom="0",a.appendChild(r);let s=a.getAttribute("data-sparkline"),l=null;try{s&&(l=JSON.parse(s))}catch{}a.addEventListener("pointermove",p=>{if(p.pointerType==="touch")return;let u=a.getBoundingClientRect(),h=p.clientX-u.left;if(!(h<0||h>u.width)&&(r.style.left=`${h}px`,r.style.display="",l)){let d=l.d,f=l.u||"",v=Math.min(d.length-1,Math.floor(h/u.width*d.length)),b=d[v];if(b){let g=b.v!==null?`${b.l}: ${b.v}${f}`:`${b.l}: --`;n.show(u,p.clientX,g)}}},{signal:e}),a.addEventListener("pointerleave",()=>{r.style.display="none",n.hide()},{signal:e});let c=null;a.addEventListener("pointerdown",p=>{if(p.pointerType!=="touch")return;let u=a.getBoundingClientRect(),h=p.clientX-u.left;if(!(h<0||h>u.width)){if(r.style.left=`${h}px`,r.style.display="",l){let d=l.d,f=l.u||"",v=Math.min(d.length-1,Math.floor(h/u.width*d.length)),b=d[v];if(b){let g=b.v!==null?`${b.l}: ${b.v}${f}`:`${b.l}: --`;n.show(u,p.clientX,g)}}c&&clearTimeout(c),c=setTimeout(()=>{r.style.display="none",n.hide(),c=null},2e3)}},{signal:e})})}_bindZoneRankingTabs(){let e=this._shadow.querySelector(".pc-section-zone-ranking");if(!e)return;let i=e.querySelectorAll(".pc-ranking-tab");if(i.length===0)return;let n=this._config?._zones||[],o=this._discovery;if(o)for(let a of i)a.addEventListener("click",()=>{let r=a.dataset.metric;if(!r)return;let s=this._hass?.states||{},l=ne(n,s,o,r);if(!l)return;let c=document.createElement("template");c.innerHTML=l;let p=c.content.firstElementChild;p&&(e.replaceWith(p),this._bindZoneRankingTabs(),this._bindSectionChipActions())})}_renderSection(e,i,n,o){let a=typeof e=="string"?e:e.type,r=this._config,s=o.hubEntities,l=this._historyCache;switch(a){case"zones":return _e(i,r,n,o,l);case"api":return ye(s,n,e,l);case"graph":return Ie(e,i,l,n,o);case"donut":return Fe(e,s,n);case"bridge":return we(s,n,l);case"homekit":return xe(s,n,l);case"weather":return $e(s,n,l);case"environment":return Se(i,n,o);case"thermal":return ke(i,n,o);case"schedule":return Ae(i,n,o);case"thermal_strip":return zn(i,e,n,o,l);case"comfort_strip":return Hn(i,e,n,o,l);case"energy_flow":return Le(i,n,o);case"radial":return Re(i,e,n,o,l);case"home_status":return De(i,n,o,this._config||{});case"zone_ranking":return ne(i,n,o);default:return""}}_fireAction(e,i,n){if(!this._hass)return;let o=i[n]||this._config?.[n]||(n==="tap_action"?{action:"more-info"}:{action:"none"});$t(this,this._hass,o,e,lt)}_applyTransitionGlow(e){let i=r=>{r&&(r.classList.add("pc-temp-transitioning"),setTimeout(()=>r.classList.remove("pc-temp-transitioning"),1100))},n=this._shadow.querySelectorAll(".pc-zone-row");n[e]&&i(n[e].querySelector(".pc-power-bar-fill"));let o=this._shadow.querySelectorAll(".pc-zone-row-pulse");i(o[e]||null);let a=this._shadow.querySelectorAll(".pc-arc-group");a[e]&&i(a[e].querySelector(".pc-arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!it()){let e=this._config._zones||[],i=this._hass.states;for(let n=0;n<e.length;n++){let o=e[n].entity,a=this._prevStates[o],r=i[o];if(!a||!r)continue;let s=a.attributes?.current_temperature,l=r.attributes?.current_temperature;s!==void 0&&l!==void 0&&s!==l&&this._applyTransitionGlow(n)}}Tn(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let e=this._hass.states,i=this._discovery,n=this._config._zones||[],o=this._rerenderTargets;if(!o)return;let a=new Set;for(let c of o){let p=this._shadow.querySelector(c.selector);if(!p||c.watchIds.length===0||!c.watchIds.some(v=>{let b=e[v],g=this._prevStates[v];return!g||g.state!==b?.state||g.last_updated!==b?.last_updated}))continue;let h=c.render();if(!h)continue;let d=document.createElement("template");d.innerHTML=h;let f=d.content.firstElementChild;f&&(p.replaceWith(f),a.add(c.selector))}let r=new Set([".pc-section-zones",".pc-section-api",".pc-section-bridge",".pc-section-homekit",".pc-section-weather",".pc-section-environment",".pc-section-thermal",".pc-section-schedule",".pc-section-home-status",".pc-section-zone-ranking"]);[...a].some(c=>r.has(c))&&this._bindSectionChipActions(),a.has(".pc-section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions()),a.has(".pc-section-api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),a.has(".pc-section-radial")&&this._bindRadialInteractions(),a.has(".pc-section-zone-ranking")&&this._bindZoneRankingTabs();let l=this._shadow.querySelector(".section-energy-flow");if(l&&n.some(p=>{let u=H(p.entity),h=i.zoneEntities?.[u]||{};return[p.entity,h.heating_power,h.ac_power].filter(Boolean).some(f=>{let v=e[f],b=this._prevStates[f];return!b||b.state!==v?.state||b.last_updated!==v?.last_updated})})&&!Dn(l,n,e,i)){let u=Le(n,e,i);if(u){let h=document.createElement("template");h.innerHTML=u;let d=h.content.firstElementChild;d&&(l.replaceWith(d),a.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHero(){if(!this._config||!this._hass||!this._discovery||this._config.show_hero===!1)return;let e=this._shadow.querySelector(".pc-hero");if(!e)return;let i=this._config,n=this._hass.states,o=this._discovery,r=(i._zones||[]).map(u=>{let h=H(u.entity),d=o.zoneEntities?.[h]||{};return J(u.entity,d,n,u,i)}),s=qe(i,o,n),l=Oe(r,i,this._getHomeAvgHistory(r),s);if(!l)return;let c=document.createElement("template");c.innerHTML=l;let p=c.content.firstElementChild;p&&e.replaceWith(p)}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,i=this._hass.states,n=this._discovery,o=e._zones||[],a=e.sections||[{type:"zones"}],r=[];for(let l of a){let c=typeof l=="string"?l:l.type;if(!ni.has(c))continue;let p=oi[c];if(!p)continue;let u=this._shadow.querySelector(p);if(!u)continue;let h=this._renderSection(l,o,i,n);if(!h)continue;let d=document.createElement("template");d.innerHTML=h;let f=d.content.firstElementChild;f&&(u.replaceWith(f),r.push(c))}if(r.length===0)return;r.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),r.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),r.includes("radial")&&this._bindRadialInteractions(),r.includes("thermal_strip")&&this._bindTimelineInteractions(),r.includes("comfort_strip")&&this._bindHeatmapInteractions(),r.includes("energy_flow")&&this._bindEnergyFlowInteractions(),r.some(l=>["zones","api","bridge","homekit","weather"].includes(l))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||me(this._historyCache))return;let e=xn();if(me(e)){this._historyCache=e,this._rebuildSparklinePathCache(),Object.values(e.data).filter(l=>l.length>=2).length>0&&(this._updateHistorySections(),this._updateHero());return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let i=this._historyGen,n=this._config._zones||[],o=[],a=this._hass.states;for(let s of n){let l=H(s.entity),c=this._discovery?.zoneEntities?.[l]||{},p=nt(s.entity,a,c,s);o.push(p.entityId);let u=ut(s.entity,a,c,s);u&&o.push(u.entityId)}if(this._discovery?.hubEntities?.call_history&&o.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&o.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&o.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&o.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&o.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&o.push(this._discovery.hubEntities.outside_temp),o.length===0){this._historyFetchInProgress=!1;return}let r=[...new Set(o.filter(s=>s&&typeof s=="string"&&s.includes(".")))];if(r.length===0){this._historyFetchInProgress=!1;return}try{let s=await It(this._hass,r,24);if(i!==this._historyGen){lt("History fetch result discarded \u2014 config changed during fetch");return}this._historyCache=kn(this._historyCache,s),this._rebuildSparklinePathCache(),$n(s),Object.values(s).filter(c=>c.length>=2).length>0&&(this._updateHistorySections(),this._updateHero())}catch(s){lt("History fetch failed, using cached data: %O",s)}finally{this._historyFetchInProgress=!1}}_getHomeAvgHistory(e){let i=this._historyCache?.data,n=this._hass?.states,o=this._discovery;if(!i||!n||!o||e.length===0)return[];let a=[],r=this._config?._zones||[];for(let l of e){if(l.isUnavailable)continue;let c=H(l.entityId),p=o.zoneEntities?.[c]||{},u=r.find(f=>f.entity===l.entityId)||{entity:l.entityId},h=nt(l.entityId,n,p,u),d=i[h.entityId];Array.isArray(d)&&d.length>=2&&a.push(d)}return a.length===0?[]:a[0].map((l,c)=>{let p=[];for(let h of a){let d=h[Math.min(c,h.length-1)];d&&typeof d.v=="number"&&Number.isFinite(d.v)&&p.push(d.v)}let u=p.length>0?p.reduce((h,d)=>h+d,0)/p.length:l.v;return{t:l.t,v:u}})}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let e=this._hass.states,i=this._config._zones||[],n=this._discovery.hubEntities,o={};for(let a of i){let r=a.entity;e[r]&&(o[r]=e[r]);let s=H(r),l=this._discovery.zoneEntities?.[s]||{};for(let c of Object.values(l))c&&e[c]&&(o[c]=e[c])}for(let a of Object.values(n))a&&e[a]&&(o[a]=e[a]);this._prevStates=o}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort(),this._stopRadialAnimations();let e=this._shadow?.querySelectorAll(".pc-zone-row")||[];for(let i of e){let n=i.__pulseCleanup;typeof n=="function"&&n()}}connectedCallback(){this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer())}getCardSize(){let e=this._config?._zones?.length||1,i=this._config?.sections?.length||1;return Math.max(1,e+i)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(cn)}static getStubConfig(e){return{entity:Object.keys(e.states).find(n=>n.startsWith("climate."))||"climate.living_room"}}};customElements.get(Ut)||customElements.define(Ut,Be);window.customCards=window.customCards||[];window.customCards.push({type:Ut,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${ln} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Lt=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=je,this._shadow.appendChild(e)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let e=this._shadow.querySelectorAll(".pb-row");for(let i of e)le(i),ce(i)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(e){this._config=nn(e),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(e){if(this._hass=e,!this._config)return;let i=!1;for(let n of this._cfg.entities){let o=e.states[n.entity],a=this._prevStates[n.entity];if(!a||a.state!==o?.state||a.last_updated!==o?.last_updated){i=!0;break}let r=n.target??this._cfg.target;if(typeof r=="string"){let s=e.states[r],l=this._prevStates[`__target__${r}`];if(!l||l.state!==s?.state||l.last_updated!==s?.last_updated){i=!0;break}}}i&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let e=this._cfg;if(!e)return;let i=e.columns??1,n=i>1?` columns-${i}`:"",o=e.entity_row?" entity-row":"",a=e.layout==="compact"?" compact":"",r=[];i>1&&r.push(`--pb-columns:${i}`),e.gap!==void 0&&r.push(`--pulse-space-element:${k(_t(e.gap))}`),e.font_size!==void 0&&r.push(`--pulse-font-body:${k(_t(e.font_size))}`);let s=r.length>0?` style="${r.join(";")}"`:"",l="";e.title&&(l+=`<div class="pulse-title">${m(e.title)}</div>`),l+=`<div class="pb-card${n}${o}${a}"${s}>`;for(let h of e.entities)l+=this._renderBarRow(h);l+="</div>";let c=e.entity_row?l:`<ha-card>${l}</ha-card>`,p=this._shadow.querySelector("ha-card, .pb-card");p&&p.remove();let u=document.createElement("template");u.innerHTML=c,this._shadow.appendChild(u.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pb-card"),this._cacheBarElements();for(let h of e.entities){let d=this._elements.rows?.[h.entity];d&&(d.style.display=se(h,this._hass)?"":"none")}}_renderBarRow(e){let i=this._cfg,n=ie(e,i,this._hass),o=e.positions?.name??i.positions?.name??tt.positions.name,a=e.positions?.value??i.positions?.value??tt.positions.value,r=e.positions?.icon??i.positions?.icon??tt.positions.icon,s=e.positions?.indicator??i.positions?.indicator??tt.positions.indicator,l=e.animation??{},c=l.speed??i.animation.speed,p=l.effect??i.animation.effect,u=l.state??i.animation.state,h=this._buildIndicatorHtml(e,i,s),d=ae(e,this._hass),f=this._buildPositionHtml(n,o,a,r,s,h,"outside",d),v=this._buildPositionHtml(n,o,a,r,s,h,"inside",d),b=k(_t(e.height??i.height)),g=k(_t(e.border_radius??i.border_radius)),_=n.color?`background-color:${k(n.color)};`:"",y=p==="charge"&&!n.isUnavailable?" charge":"",x=u==="off"?"transition:none;":"",S=xt(e,i),A=`width:${n.fill*S}%;${x}${_}`,T=this._buildTargetHtml(e,i,n.min,n.max),I=this._buildSparklineHtml(e,i),E=`
      <div class="pb-container" style="height:${b};border-radius:${g};--pb-animation-speed:${c}s;">
        <div class="pb-track"></div>
        ${I}
        <div class="pb-fill${y}" data-entity="${m(e.entity)}" style="${A}"></div>
        ${T}
        ${v}
      </div>`,$=!!(e.interactive??i.interactive),w=$?`<div class="pb-interactive-row"><div class="pb-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${E}<div class="pb-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:E,M=$?"slider":"progressbar",L=n.isUnavailable?`role="${M}" aria-valuenow="0" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${m(n.name)}: Unavailable"`:`role="${M}" aria-valuenow="${n.numValue}" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${m(n.name)}: ${m(n.displayValue)}"`,N=n.isUnavailable?" unavailable":"",Z=$?" data-interactive":"",V=n.isUnavailable?'data-state="unavailable"':`data-state="${m(n.numValue)}"`,z=n.color?` data-severity-color="${m(n.color)}"`:"";return`<div class="pb-row${N}" data-entity="${m(e.entity)}"${Z} ${V}${z} ${L}>${f}${w}</div>`}_buildIndicatorHtml(e,i,n){if(n==="off")return"";let o=e.indicator??i.indicator,a=this._indicators[e.entity],r=a?.direction??"neutral",s=o?.show_delta===!0&&!!a,l=this._hass?.states[e.entity],c=wt(e,l),p=Dt(e,i,this._hass),{text:u}=oe(r,a?.delta??0,s,p,c),h=o?.inverted===!0?" inverted":"";return`<span class="pb-indicator ${r}${h}">${u}</span>`}_buildPositionHtml(e,i,n,o,a,r,s,l){if(i!==s&&n!==s&&o!==s&&a!==s)return"";let p=`<div class="${s==="outside"?"pb-labels":"pb-content"}"><div class="pb-label-left">`;return o===s&&e.resolvedIcon&&(p+=`<ha-icon class="pb-icon" icon="${m(e.resolvedIcon)}"></ha-icon>`),i===s&&(l?(p+='<div class="pb-name-group">',p+=`<span class="pb-name">${m(e.name)}</span>`,p+=`<span class="pb-secondary">${m(l)}</span>`,p+="</div>"):p+=`<span class="pb-name">${m(e.name)}</span>`),p+='</div><div class="pb-label-right">',n===s&&(p+=`<span class="pb-value">${m(e.displayValue)}</span>`),a===s&&r&&(p+=r),p+="</div></div>",p}_buildTargetHtml(e,i,n,o){let a=e.target??i.target,{value:r,showLabel:s}=Pt(a,this._hass);if(r===null)return"";let l=et((r-n)/(o-n),0,1)*100,c=xt(e,i),p=`left:${l*c}%`,u=s?`<span class="pb-target-label">${m(r)}</span>`:"";return`<div class="pb-target" style="${p}">${u}</div>`}_updateBars(){let e=this._cfg;for(let i of e.entities){let n=ie(i,e,this._hass),o=xt(i,e),a=this._elements.rows?.[i.entity];if(!a||a.__pulseSliding)continue;let r=se(i,this._hass);if(a.style.display=r?"":"none",!r)continue;a.classList.toggle("unavailable",n.isUnavailable);let s=a.querySelector(".pb-fill");if(s){let f=`${n.fill*o}%`;s.style.width=f,s.style.backgroundColor=n.color||"";let v=a.querySelector(".pb-sparkline");v&&(v.style.width=`${o*100}%`);let b=a.querySelector(".pb-icon");b&&n.resolvedIcon&&b.setAttribute("icon",n.resolvedIcon)}let l=a.querySelectorAll(".pb-name");for(let f of l)f.textContent=n.name;let c=a.querySelectorAll(".pb-value");for(let f of c)f.textContent=n.displayValue;let p=a.querySelectorAll(".pb-secondary");if(p.length>0){let f=ae(i,this._hass);for(let v of p)v.textContent=f}a.setAttribute("aria-valuenow",n.isUnavailable?"0":String(n.numValue)),a.setAttribute("aria-valuemin",String(n.min)),a.setAttribute("aria-valuemax",String(n.max)),a.setAttribute("aria-label",`${m(n.name)}: ${m(n.displayValue)}`),a.setAttribute("data-state",n.isUnavailable?"unavailable":String(n.numValue)),n.color?a.setAttribute("data-severity-color",n.color):a.removeAttribute("data-severity-color");let u=a.querySelector(".pb-target"),h=i.target??e.target,{value:d}=Pt(h,this._hass);if(d!==null){let f=et((d-n.min)/(n.max-n.min),0,1)*100;if(u){u.style.left=`${f*o}%`,u.style.display="";let v=u.querySelector(".pb-target-label");v&&(v.textContent=String(d))}}else u&&(u.style.display="none")}}_scheduleIndicatorFetch(){let e=this._cfg;!e||!e.entities.some(n=>(n.indicator??e.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let e=this._cfg;if(e)try{let i=new Map;for(let o of e.entities)i.set(o.entity,o);let n=new Map;for(let o of e.entities){let a=o.indicator??e.indicator;if(!a?.show)continue;let r=a.period??60;n.has(r)||n.set(r,[]),n.get(r).push({entity:o.entity,icfg:a})}for(let[o,a]of n){let r=a.map(l=>l.entity),s=await en(this._hass,r,o);for(let{entity:l,icfg:c}of a){let p=i.get(l),u=this._hass?.states[l],h=p?.attribute?u?.attributes?.[p.attribute]:u?.state,d=tn(h,s[l]);this._indicators[l]=d;let f=this._elements.rows?.[l];if(!f)continue;let v=f.querySelector(".pb-indicator");if(v&&p){let b=this._hass?.states[l],g=wt(p,b),_=Dt(p,e,this._hass),{text:y}=oe(d.direction,d.delta,c.show_delta===!0,_,g),x=c.inverted===!0?" inverted":"";v.textContent=y,v.className=`pb-indicator ${d.direction}${x}`}}}}catch(i){st("Indicator fetch failed: %O",i)}}_resolveSparklineConfig(e,i){let n=e.sparkline??i.sparkline;if(!n)return null;let o=n===!0?{}:n.show?n:null;if(!o)return null;let a=o.hours_to_show??24,r=o.points_per_hour??1;return{hours:a,pointsPerHour:r,slots:Math.max(a*r,2),aggregateFunc:o.aggregate_func??"avg",smoothing:o.smoothing!==!1,strokeWidth:Number(o.line_width??o.stroke_width??1.5)||1.5,color:o.color??null,updateInterval:o.update_interval??300}}_buildSparklineMarkup(e,i,n=!1){let o=`${i*100}%`,a=e.color?`color:${k(e.color)};`:"";return`<svg${n?' xmlns="http://www.w3.org/2000/svg"':""} class="pb-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${o};${a}"><path d="${e.path}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_buildSparklineHtml(e,i){let n=this._resolveSparklineConfig(e,i);if(!n)return"";let o=this._sparklineData[e.entity];if(!o||o.length<2)return"";let a=yt(o,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!a)return"";let r=xt(e,i);return this._buildSparklineMarkup({path:a,strokeWidth:n.strokeWidth,color:n.color},r,!1)}_scheduleSparklineFetch(){let e=this._cfg;if(!e||!e.entities.some(a=>!!this._resolveSparklineConfig(a,e)))return;let n=300;for(let a of e.entities){let r=this._resolveSparklineConfig(a,e);r&&r.updateInterval<n&&(n=r.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<n&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let e=this._cfg;if(e)try{let i=new Map;for(let n of e.entities){let o=this._resolveSparklineConfig(n,e);if(!o)continue;let a=o.hours;i.has(a)||i.set(a,[]),i.get(a).push(n.entity)}for(let[n,o]of i){let a=await It(this._hass,o,n);for(let r of o)this._sparklineData[r]=a[r]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(i){st("Sparkline fetch failed: %O",i)}}_updateSparklines(){let e=this._cfg;if(e)for(let i of e.entities){let n=this._resolveSparklineConfig(i,e);if(!n)continue;let o=this._elements.rows?.[i.entity];if(!o)continue;let a=this._sparklineData[i.entity];if(!a||a.length<2)continue;let r=yt(a,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!r)continue;let s=o.querySelector(".pb-sparkline"),l=xt(i,e),c=`${l*100}%`;if(s){let p=s.querySelector("path");p&&p.setAttribute("d",r),s.style.width=c}else{let p=o.querySelector(".pb-container");if(!p)continue;let u=this._buildSparklineMarkup({path:r,strokeWidth:n.strokeWidth,color:n.color},l,!0),h=new DOMParser().parseFromString(u,"image/svg+xml"),d=document.importNode(h.documentElement,!0),f=p.querySelector(".pb-track");f&&f.nextSibling?p.insertBefore(d,f.nextSibling):p.appendChild(d)}}}_cacheStates(){let e=this._cfg;this._prevStates={};for(let i of e.entities){let n=this._hass?.states[i.entity];n&&(this._prevStates[i.entity]={state:n.state,last_updated:n.last_updated});let o=i.target??e.target;if(typeof o=="string"){let a=this._hass?.states[o];a&&(this._prevStates[`__target__${o}`]={state:a.state,last_updated:a.last_updated})}}}_cacheBarElements(){let e=this._cfg;this._elements.rows={};let i=new Map;for(let o of e.entities)i.set(o.entity,o);let n=this._shadow.querySelectorAll(".pb-row");for(let o of n){let a=o.dataset.entity;if(a){this._elements.rows[a]=o;let r=i.get(a);r&&(an(o,this,this._hass,e,r),(r.interactive??e.interactive)&&rn(o,this,e,r)),at(o);for(let s of o.querySelectorAll(".pb-step-btn"))at(s)}}}getCardSize(){let e=this._config?.entities?.length||1,i=this._config?.columns||1;return Math.ceil(e/i)+(this._config?.title?1:0)}getGridOptions(){let e=this._config?.entities?.length||1,i=this._config?.columns||1,n=Math.ceil(e/i);return{columns:12,min_columns:3,rows:Math.max(1,n),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-bar-card-editor")}static getStubConfig(e){return{entity:Object.keys(e.states).filter(n=>{let o=e.states[n];return n.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-bar-card")||customElements.define("pulse-bar-card",Lt);customElements.get("pulse-card")||customElements.define("pulse-card",class extends Lt{});window.customCards=window.customCards||[];window.customCards.push({type:"pulse-bar-card",name:"Pulse Bar Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-BAR-CARD %c v${Ge} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Ua=Lt;export{Ua as default};

var pe=`
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
`;var Si=`${pe}
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
`;var ki="1.8.3",Ti="Pulse Card:",Tt={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function h(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function At(t,e,o){return Math.min(Math.max(t,e),o)}var Cs=32;function de(t){if(t==null||t==="")return"";let e=String(t);if(e.length>Cs)return e;let o=e.split(".");if(o.length>2)return e;for(let n of o){if(n.length===0)return e;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r<48||r>57)return e}}return`${e}px`}function Rt(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function Z(t,e=1){return t==null?"--":typeof t!="number"?String(t):isFinite(t)?String(parseFloat(t.toFixed(e))):"--"}function dt(t){return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function ro(t){return(e,...o)=>console.warn(`${t} ${e}`,...o)}var Ms=new Set(["unavailable","unknown","error"]);function Q(t){return t?Ms.has(t.state??""):!0}var rn=0;function ue(t="pulse-id"){return rn=rn+1>>>0,`${t}-${rn.toString(36)}`}var io="Pulse sparkline:";async function He(t,e,o=24){let n={};if(!t?.callWS||e.length===0)return n;let i=new Date,r=new Date(i.getTime()-o*60*60*1e3);try{let s=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let a of e)try{let l=s?.[a];if(!l||l.length<2){n[a]=[];continue}let p=[];for(let c of l){let u=parseFloat(c.s);if(!isNaN(u)){let m=c.lu??c.last_updated,d=typeof m=="number"?m*1e3:new Date(m).getTime();isFinite(d)&&p.push({t:d,v:u})}}n[a]=p}catch(l){console.warn(`${io} parse failed for %s: %O`,a,l),n[a]=[]}}catch(s){console.warn(`${io} fetch failed: %O`,s);for(let a of e)n[a]=[]}return n}async function Ci(t,e,o=24){let n={};if(!t?.callWS||e.length===0)return n;let i=new Date,r=new Date(i.getTime()-o*60*60*1e3);try{let s=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!1});for(let a of e)try{let l=s?.[a];if(!Array.isArray(l)||l.length===0){n[a]=[];continue}let p=[];for(let c of l){let u=c.lu??c.last_updated,m=typeof u=="number"?u*1e3:new Date(u).getTime();if(!isFinite(m))continue;let d=String(c.s??c.state??"").toLowerCase(),f="idle";d==="heat"||d==="heating"?f="heating":d==="cool"||d==="cooling"?f="cooling":d==="off"&&(f="off");let g=f==="heating"||f==="cooling"?50:0;p.push({t:m,state:f,power:g})}n[a]=p}catch(l){console.warn(`${io} state-history parse failed for %s: %O`,a,l),n[a]=[]}}catch(s){console.warn(`${io} state-history fetch failed: %O`,s);for(let a of e)n[a]=[]}return n}var Ai={avg:t=>t.reduce((e,o)=>e+o,0)/t.length,min:t=>Math.min(...t),max:t=>Math.max(...t),median:t=>{let e=[...t].sort((n,i)=>n-i),o=Math.floor(e.length/2);return e.length%2?e[o]:(e[o-1]+e[o])/2},first:t=>t[0],last:t=>t[t.length-1],sum:t=>t.reduce((e,o)=>e+o,0),delta:t=>Math.max(...t)-Math.min(...t),diff:t=>t[t.length-1]-t[0]};function Es(t,e,o="avg"){if(t.length===0||e<1)return[];if(t.length<=e){let u=t[0].t,m=t[t.length-1].t-u||1;return t.map(d=>({x:(d.t-u)/m,v:d.v}))}let n=Ai[o]||Ai.avg,i=t[0].t,a=(t[t.length-1].t-i||1)/e,l=[],p=0,c=t[0].v;for(let u=0;u<e;u++){let m=i+(u+1)*a,d=[];for(;p<t.length&&t[p].t<m;)d.push(t[p].v),p++;d.length>0&&(c=n(d)),l.push({x:u/(e-1||1),v:c})}return l}function me(t,e,o,n=24,i="avg",r=!0){if(t.length<2)return"";let s=Es(t,n,i);if(s.length<2)return"";let a=s[0].v,l=s[0].v;for(let d=1;d<s.length;d++)s[d].v<a&&(a=s[d].v),s[d].v>l&&(l=s[d].v);let p=l-a||1,c=2,u=o-c*2,m=s.map(d=>({x:d.x*e,y:c+u-(d.v-a)/p*u}));return an(m,r)}function an(t,e=!0){if(!t||t.length<2)return"";if(t.length===2||!e){let i=`M${t[0].x.toFixed(1)},${t[0].y.toFixed(1)}`;for(let r=1;r<t.length;r++)i+=`L${t[r].x.toFixed(1)},${t[r].y.toFixed(1)}`;return i}let o=t[0],n=`M${o.x.toFixed(1)},${o.y.toFixed(1)}`;for(let i=1;i<t.length;i++){let r=t[i],s=(o.x+r.x)/2,a=(o.y+r.y)/2;n+=` ${s.toFixed(1)},${a.toFixed(1)}`,n+=` Q${r.x.toFixed(1)},${r.y.toFixed(1)}`,o=r}return n+=` ${o.x.toFixed(1)},${o.y.toFixed(1)}`,n}function he(t){if(typeof t!="string")return null;let e=t.trim().replace(/^#/,"");return e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6||/[^0-9a-f]/i.test(e)?null:{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}function Mi(t,e,o){return{r:Math.round(t.r+(e.r-t.r)*o),g:Math.round(t.g+(e.g-t.g)*o),b:Math.round(t.b+(e.b-t.b)*o)}}function Ei(t,e,o){let n=he(t),i=he(e);if(!n||!i)return"";let{r,g:s,b:a}=Mi(n,i,o);return`rgb(${r}, ${s}, ${a})`}function Fi(t,e,o){let n=he(t),i=he(e);if(!n||!i)return t;let{r,g:s,b:a}=Mi(n,i,o);return`#${r.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`}function Xt(t,e){if(typeof t!="string")return String(t);let o=Math.max(0,Math.min(1,Number(e))),n=he(t);if(n)return`rgba(${n.r},${n.g},${n.b},${o})`;let i=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(t.trim());return i?`rgba(${i[1]},${i[2]},${i[3]},${o})`:t}var Fs=new Set(["on","open","home","locked","playing","active"]),Is=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function Ni(t,e,o){if(typeof t!="string")return null;let n=t.toLowerCase();return Fs.has(n)?o:Is.has(n)?e:null}function Ns(t,e){let o=String(t),n=o.charAt(0).toUpperCase()+o.slice(1);return e?`${n}${e}`:n}function zs(t,e,o,n=!1){let i=Ni(t,e,o),r=i!==null?i:parseFloat(t);if(isNaN(r))return 0;let s=o-e;if(s<=0)return 0;let a=n?o-r:r;return At((a-e)/s,0,1)*100}function Ls(t,e){if(!e||e.length===0)return null;let o=parseFloat(t);if(isNaN(o))return null;for(let n of e)if(o>=n.from&&o<=n.to)return n;return null}function Rs(t,e,o){return Ei(t,e,o)}function Hs(t,e){if(!e||e.length<2)return null;let o=parseFloat(t);if(isNaN(o))return null;let n=e[0].from<=e[e.length-1].from?e:[...e].sort((i,r)=>i.from-r.from);for(let i=0;i<n.length-1;i++){let r=n[i],s=n[i+1];if(o>=r.from&&o<=s.to){let a=s.from-r.from,l=a>0?(o-r.from)/a:0;return Rs(r.color,s.color,At(l,0,1))}}return o<=n[0].from?n[0].color:n[n.length-1].color}function Ds(t,e,o){let n=t.min??o?.min,i=t.max??o?.max;return n==null&&(n=e?.attributes?.min??e?.attributes?.min_temp??Tt.min),i==null&&(i=e?.attributes?.max??e?.attributes?.max_temp??Tt.max),{min:parseFloat(String(n)),max:parseFloat(String(i))}}function ao(t,e,o){return t.decimal??e.decimal??o?.entities?.[t.entity]?.display_precision??null}function fe(t,e){return t.unit_of_measurement??e?.attributes?.unit_of_measurement??""}function Os(t){return!isFinite(t)||t<0?"0":t>=1e9?`${(t/1e9).toFixed(1)}G`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString()}function Ps(t,e,o){let n=parseFloat(t);if(isNaN(n))return String(t);let i=e!=null?n.toFixed(e):n.toString();return o?`${i}${o}`:i}function zi(t,e){if(e==null)return{direction:"neutral",delta:0};let o=parseFloat(t),n=parseFloat(e);if(isNaN(o)||isNaN(n))return{direction:"neutral",delta:0};if(!isFinite(o)||!isFinite(n))return{direction:"neutral",delta:0};let i=Math.abs(o-n),r=Math.max(Math.abs(o),1);if(i>r*1e3)return{direction:"neutral",delta:0};let s=Math.round((o-n)*100)/100;return{direction:s>0?"up":s<0?"down":"neutral",delta:s}}function sn(t,e,o,n,i){let r=t==="up"?"\u25B2":t==="down"?"\u25BC":"\u25B6";if(!o)return{arrow:r,text:r};let s=n!=null?e.toFixed(n):String(Math.round(e*100)/100),a=e>0?"+":"";return{arrow:r,text:`${r} ${a}${s}${i||""}`}}var Ht=ro(Ti);async function Li(t,e,o=60){let n={};if(!t?.callWS||e.length===0)return n;let i=new Date,r=new Date(i.getTime()-o*60*1e3);try{let s=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let a of e){let l=s?.[a];if(!l||l.length===0){n[a]=null;continue}let p=parseFloat(l[0].s);n[a]=isNaN(p)?null:p}}catch(s){Ht("Failed to fetch history for %s: %O",e.join(", "),s);for(let a of e)n[a]=null}return n}function Ii(t){return!Array.isArray(t)||t.length<2?t:[...t].sort((e,o)=>e.from-o.from)}function Ri(t){if(!t)throw new Error("Please define an entity or entities");if(!t.entity&&!t.entities)throw new Error("Please define an entity or entities");let e={...Tt,...t,animation:{...Tt.animation,...t.animation},positions:{...Tt.positions,...t.positions}};e.columns!==null&&e.columns!==void 0&&(e.columns=Number(e.columns)||1),e.animation.speed!==null&&e.animation.speed!==void 0&&(e.animation.speed=Number(e.animation.speed)||Tt.animation.speed),e.severity&&(e.severity=Ii(e.severity)),e.indicator?.show===!0&&e.positions.indicator==="off"&&(e.positions={...e.positions,indicator:"outside"}),e.entities=t.entities?t.entities.map(n=>{let i=typeof n=="string"?{entity:n}:{...n};return i.severity&&(i.severity=Ii(i.severity)),!i.secondary_info&&e.secondary_info&&(i._cardSecondaryInfo=e.secondary_info),i.indicator?.show===!0&&i.positions&&i.positions.indicator==="off"?i.positions={...i.positions,indicator:"outside"}:i.indicator?.show===!0&&!i.positions?.indicator&&(i.positions={...i.positions||{},indicator:"outside"}),i}):[{entity:t.entity}];let o=new Set;for(let n of e.entities)o.has(n.entity)&&Ht('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',n.entity),o.add(n.entity);return e}function so(t,e){if(t==null)return{value:null,showLabel:!1};if(typeof t=="number")return{value:isNaN(t)?null:t,showLabel:!1};if(typeof t=="string"){let o=e?.states[t];if(!o)return{value:null,showLabel:!1};let n=parseFloat(o.state);return{value:isNaN(n)?null:n,showLabel:!1}}return typeof t=="object"&&t.value!==void 0?{value:so(t.value,e).value,showLabel:t.show_label===!0}:{value:null,showLabel:!1}}function ln(t,e,o){let n=o?.states[t.entity],i=Q(n),{min:r,max:s}=Ds(t,n,e),a=t.attribute?n?.attributes?.[t.attribute]:n?.state,l=t.attribute?null:Ni(a,r,s),p=l!==null,c=p?l:parseFloat(a),u=t.complementary??e.complementary,m=i?0:zs(a,r,s,u),d=fe(t,n),f=ao(t,e,o),w=(t.limit_value??e.limit_value)&&!isNaN(c)?At(c,r,s):a,v=i?"Unavailable":t.state_map?.[a]?t.state_map[a]:p?Ns(a,d):Ps(w,f,d),b=t.name??n?.attributes?.friendly_name??t.entity,y="",_="";if(!i){let M=t.state_color,F=n?.state;if(M&&F&&M[F])y=M[F];else{let I=t.attribute_color??e.attribute_color;if(I?.attribute&&I?.map){let k=n?.attributes?.[I.attribute];if(k!=null){let x=I.map[String(k)];x&&(y=x)}}if(!y){let k=t.severity??e.severity;if(k&&k.length>0)if(k.some(A=>A.mode==="gradient")){let A=Hs(c,k);A&&(y=A)}else{let A=Ls(c,k);A&&(y=A.color,A.icon&&(_=A.icon))}}}}let $=y||t.color||e.color||"",C=t.icon||n?.attributes?.icon||"";return{isUnavailable:i,min:r,max:s,numValue:c,fill:m,displayValue:v,name:b,color:$,resolvedIcon:_||C}}function ge(t,e){let o=t.bar_width??e.bar_width;return o!=null?Math.max(1,Math.min(100,o))/100:1}function cn(t,e){if(!t.visibility)return!0;let o=e?.states[t.entity];if(!o)return!1;let n=t.visibility,i=t.attribute?o.attributes?.[t.attribute]:o.state;if(!t.attribute&&Q(o))return n.state_equal!==void 0&&String(n.state_equal)===o.state;let r=parseFloat(i);return!(n.state_above!==void 0&&(isNaN(r)||r<=n.state_above)||n.state_below!==void 0&&(isNaN(r)||r>=n.state_below)||n.state_equal!==void 0&&String(i)!==String(n.state_equal)||n.state_not_equal!==void 0&&String(i)===String(n.state_not_equal))}var Hi={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:t=>t/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function lo(t,e,o,n){if(n<=0)return At(t,e,o);let i=Math.round((t-e)/n)*n+e,r=(String(n).split(".")[1]||"").length,s=Number(i.toFixed(r));return At(s,e,o)}function Di(t,e,o){if(o?.service){let s=o.service.split(".");if(s.length<2||!s[0]||!s[1])return null;let a={entity_id:t};if(o.data)for(let[l,p]of Object.entries(o.data))a[l]=p==="$value"?e:p;return{domain:s[0],service:s[1],data:a}}let n=t.split(".")[0],i=Hi[n];if(!i)return null;let r=i.transform?i.transform(e):e;return{domain:n,service:i.service,data:{entity_id:t,[i.dataKey]:r}}}function De(t,e,o,n){let i=t.split(".")[0],s=Hi[i]?.fixedRange,a=e?.attributes,l=n?.min??a?.min??a?.min_temp??s?.min??0,p=n?.max??a?.max??a?.max_temp??s?.max??100,c=o?.step??a?.step??a?.target_temp_step??a?.percentage_step??s?.step??1;return{min:Number(l),max:Number(p),step:Number(c)||1}}function Bs(t){if(!t)return"";let e=new Date(t).getTime();if(isNaN(e))return"";let o=Date.now()-e;if(o<0)return"just now";let n=Math.floor(o/1e3);if(n<60)return"just now";let i=Math.floor(n/60);if(i<60)return`${i} min ago`;let r=Math.floor(i/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function pn(t,e){let o=t.secondary_info??t._cardSecondaryInfo;if(!o)return"";if(o.text!==void 0&&o.text!==null&&o.text!=="")return String(o.text);let n=e?.states[t.entity];if(!n)return"";if(o.template)return o.template.replace(/\{(\w+)\}/g,(i,r)=>{let s=n.attributes?.[r];return s==null?"":(r==="bytes"||r==="packets")&&typeof s=="number"?Os(s):String(s)});if(o.attribute){let i=n.attributes?.[o.attribute];return i!=null?String(i):""}return o.type==="last_changed"?Bs(n.last_changed):""}function co(t,e,o){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:o}))}function qs(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();if(e.startsWith("/")&&!e.startsWith("//")||e.startsWith("./")||e.startsWith("../")||e.startsWith("#"))return!0;try{let o=new URL(e,window.location.href);return["http:","https:","mailto:","tel:"].includes(o.protocol)}catch{return!1}}function Vs(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();return!(e.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(e))}function ve(t,e,o,n,i){if(!(!o||o.action==="none"))switch(o.action){case"more-info":co(t,"hass-more-info",{entityId:o.entity||n});break;case"navigate":o.navigation_path&&Vs(o.navigation_path)?(history.pushState(null,"",o.navigation_path),co(t,"location-changed",{replace:!1})):o.navigation_path&&i("navigation_path rejected \u2014 must be a same-origin relative path: %s",o.navigation_path);break;case"call-service":case"perform-action":{let r=o.service||o.perform_action;if(!r||typeof r!="string")break;let s=r.indexOf(".");if(s<=0||s===r.length-1){i('Service rejected \u2014 expected "domain.service" format, got: %s',r);break}let a=r.slice(0,s),l=r.slice(s+1);e.callService(a,l,o.service_data||o.data).catch(p=>i("Service call %s failed: %O",r,p));break}case"url":o.url_path&&qs(o.url_path)?window.open(o.url_path,"_blank","noopener,noreferrer"):o.url_path&&i("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",o.url_path);break;case"toggle":e.callService("homeassistant","toggle",{entity_id:o.entity||n}).catch(r=>i("Toggle %s failed: %O",o.entity||n,r));break}}function Ws(t,e,o){let n=e?.[t],i=o?.[t];return n||i||{action:t==="tap_action"?"more-info":"none"}}function po(t,e,o,n,i){let r=Ws(i,n,o);ve(t,e,r,n.entity,Ht)}function un(t){let e=t.__pulseCleanup;typeof e=="function"&&e()}function Oi(t,e,o,n,i){un(t);let r=new AbortController,{signal:s}=r,a=0,l=null,p=null,c=!1;t.__pulseCleanup=()=>{r.abort(),l&&clearTimeout(l),p&&clearTimeout(p),delete t.__pulseCleanup},t.setAttribute("tabindex","0"),t.addEventListener("keydown",m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),e._hass&&po(e,e._hass,n,i,"tap_action"))},{signal:s}),t.addEventListener("click",m=>{if(m.preventDefault(),c){c=!1;return}t.__pulseSliding||(a++,a===1?l=setTimeout(()=>{a=0,e._hass&&po(e,e._hass,n,i,"tap_action")},250):a===2&&(l&&clearTimeout(l),a=0,e._hass&&po(e,e._hass,n,i,"double_tap_action")))},{signal:s}),t.addEventListener("pointerdown",()=>{c=!1,p=setTimeout(()=>{c=!0,e._hass&&po(e,e._hass,n,i,"hold_action")},500)},{signal:s});let u=()=>{p&&clearTimeout(p)};t.addEventListener("pointerup",u,{signal:s}),t.addEventListener("pointercancel",u,{signal:s}),t.addEventListener("contextmenu",m=>m.preventDefault(),{signal:s})}var Us=50;function mn(t){let e=t.__pulseSliderCleanup;typeof e=="function"&&e()}function Pi(t,e,o,n){mn(t);let i=t.querySelector(".pb-container");if(!i)return;let r=i,s=new AbortController,{signal:a}=s,l=null;t.__pulseSliderCleanup=()=>{s.abort(),l&&clearTimeout(l),g&&clearInterval(g),delete t.__pulseSliderCleanup};let p=typeof n.interactive=="object"?n.interactive:typeof o.interactive=="object"?o.interactive:void 0,c=null;function u(b){let y=r.getBoundingClientRect(),_=Math.max(0,Math.min(b-y.left,y.width)),$=y.width>0?_/y.width:0,E=e._hass?.states[n.entity],{min:M,max:F,step:I}=De(n.entity,E,p,n),k=M+$*(F-M);return lo(k,M,F,I)}function m(b){let _=e._hass?.states[n.entity],{min:$,max:C,step:E}=De(n.entity,_,p,n),M=C-$,F=M>0?(b-$)/M*100:0,I=r.querySelector(".pb-fill");I&&(I.style.width=`${F}%`);let k=fe(n,_),x=(String(E).split(".")[1]||"").length,A=x>0?b.toFixed(x):String(Math.round(b)),T=k?`${A}${k}`:A,L=t.querySelectorAll(".pb-value");for(let O of L)O.textContent=T}function d(){if(!c)return;let b=r.querySelector(".pb-fill");b&&(b.style.transition="",b.style.width=c.fillWidth);let y=t.querySelectorAll(".pb-value");for(let _ of y)_.textContent=c.displayValue}function f(b){let y=Di(n.entity,b,p);if(!y){Ht("No slider service mapping for %s",n.entity),d();return}let _=e._hass;if(!_){d();return}_.callService(y.domain,y.service,y.data).catch($=>{Ht("Slider service call failed for %s: %O",n.entity,$),d()})}r.addEventListener("pointerdown",b=>{if(!e._hass)return;b.preventDefault();let y=r.querySelector(".pb-fill"),_=t.querySelector(".pb-value");c={fillWidth:y?.style.width||"0%",displayValue:_?.textContent||"",pointerId:b.pointerId,startX:b.clientX},t.__pulseSliding=!0,r.setPointerCapture(b.pointerId),t.classList.add("sliding"),y&&(y.style.transition="none");let $=u(b.clientX);m($)},{signal:a}),r.addEventListener("pointermove",b=>{if(!c||b.pointerId!==c.pointerId)return;b.preventDefault();let y=u(b.clientX);m(y)},{signal:a}),r.addEventListener("pointerup",b=>{if(!c||b.pointerId!==c.pointerId)return;b.preventDefault();let y=r.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),r.releasePointerCapture(b.pointerId);let _=u(b.clientX);m(_),f(_),c=null,l=setTimeout(()=>{t.__pulseSliding=!1},Us)},{signal:a}),r.addEventListener("pointercancel",b=>{if(!c||b.pointerId!==c.pointerId)return;let y=r.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),r.releasePointerCapture(b.pointerId),d(),c=null,t.__pulseSliding=!1},{signal:a});let g=null;function w(b){let y=e._hass;if(!y)return;let _=y.states[n.entity],{min:$,max:C,step:E}=De(n.entity,_,p,n),M=n.attribute?parseFloat(_?.attributes?.[n.attribute]):parseFloat(_?.state);if(isNaN(M))return;let F=lo(M+b*E,$,C,E);F!==M&&(m(F),f(F))}let v=t.querySelectorAll(".pb-step-btn");for(let b of v){let y=Number(b.dataset.step);b.addEventListener("click",$=>{$.stopPropagation(),w(y)},{signal:a}),b.addEventListener("pointerdown",$=>{$.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>w(y),200)},{signal:a});let _=()=>{g&&(clearInterval(g),g=null)};b.addEventListener("pointerup",_,{signal:a}),b.addEventListener("pointercancel",_,{signal:a}),b.addEventListener("pointerleave",_,{signal:a})}t.addEventListener("keydown",b=>{let y=e._hass;if(!y||b.key!=="ArrowRight"&&b.key!=="ArrowUp"&&b.key!=="ArrowLeft"&&b.key!=="ArrowDown")return;b.preventDefault();let _=y.states[n.entity],{min:$,max:C,step:E}=De(n.entity,_,p,n),M=n.attribute?parseFloat(_?.attributes?.[n.attribute]):parseFloat(_?.state);if(isNaN(M))return;let F=b.key==="ArrowRight"||b.key==="ArrowUp"?1:-1,I=lo(M+F*E,$,C,E);I!==M&&(m(I),f(I))},{signal:a})}function Et(t){if(!customElements.get("ha-ripple")||t.querySelector("ha-ripple"))return;let e=document.createElement("ha-ripple");t.appendChild(e),t.classList.add("has-ripple")}var Bi="1.8.3",mo="pulse-climate-card",qi="pulse-climate-card-editor",oe="Pulse Climate Card:",ne={heating:{icon:"mdi:fire",token:"var(--pulse-tier-strong)",fallback:"#ff9f0a",label:"Heating"},cooling:{icon:"mdi:snowflake",token:"var(--pulse-tier-calm)",fallback:"#5ac8fa",label:"Cooling"},drying:{icon:"mdi:water-off",token:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",token:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",token:"var(--pulse-text-secondary)",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",token:"var(--pulse-disabled)",fallback:"#616161",label:"Off"}},hn={None:{token:"var(--pulse-tier-moderate)",fallback:"#30d158"},Low:{token:"var(--pulse-tier-moderate)",fallback:"#30d158"},Medium:{token:"var(--pulse-tier-strong)",fallback:"#ff9f0a"},High:{token:"var(--pulse-tier-gale)",fallback:"#ff453a"},Critical:{token:"var(--pulse-tier-gale)",fallback:"#ff453a"}},Vi=["zones"];var Dt=["var(--pulse-tier-calm)","var(--pulse-tier-gale)","var(--pulse-tier-moderate)","var(--pulse-tier-strong)","var(--pulse-accent)","var(--pulse-info-color)","var(--pulse-tier-strong)","var(--success-color, #8BC34A)"],Zt={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},Wi={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var fn=`${pe}
/* Master pulse phase \u2014 typed CSS variable interpolated by :host animation.
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

/* Leading state ribbon \u2014 colour set by .pc-row-{state} below */
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

/* State hierarchy aggregator \u2014 driven by rowStateClass() in utils.js.
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

/* API breakdown row inside the API tab \u2014 donut + legend chips side by side */
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
.pc-sparkline-filled.pc-sparkline-prominent { height: 40px; }

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

/* Strip rows \u2014 shared by thermal-strip's .pc-timeline-row and
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
  margin-left: 72px;
}
.pc-section-thermal-strip .pc-time-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
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

/* Comfort Heatmap \u2014 HTML div cells for hover/click */
.pc-section-comfort-strip .pc-heatmap-body { padding: 4px 0; position: relative; }

/* Heatmap cells \u2014 shared by comfort strip, thermal strip (heatmap mode),
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
}
.pc-home-status-delta-text {
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
  color: var(--pulse-text-secondary);
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
  padding: 6px 8px;
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

/* Temperature transition glow \u2014 brief brightness flash on temp change */
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

/* Per-zone dot cluster \u2014 breathes via master pulse phase */
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

/* Per-zone strip block \u2014 N rows of 24 cells, left-edge state ribbon */
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

/* Reduced motion \u2014 respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  :host { animation: none; }
  .pc-power-bar-fill.pc-bar-active { animation: none; }
  .pc-heating-glow { animation: none; }
  .pc-zone-row-pulse.pc-heating { animation: none; }
  .pc-pulse-dot.pc-connected { animation: none; }
  .pc-temp-transitioning { filter: none; transition: none; }
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

/* State row tap-for-details \u2014 single-zone drill-down. Compare overlay is
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

/* Thermal tab temperature legend \u2014 colour pips paired with anchor temps */
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

`;function Ui(t){!t||t.__pcPhaseAttached||(t.__pcPhaseAttached=!0)}var Xi={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},js={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},Gs={battery:"battery",connection:"connection"},Xs={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},Zs={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function Ys(t){let e=new Map;for(let[o,n]of Object.entries(t))n.platform==="tado_ce"&&n.translation_key&&(e.has(n.translation_key)||e.set(n.translation_key,o));return{byTranslationKey:e}}function Ks(t,e){let o={};for(let[n,i]of Object.entries(Xi)){let r=e.byTranslationKey.get(i);r&&(o[n]=r)}return o}function Js(t,e,o){let n={},i={...js,...Gs};for(let r of e){n[r]={};let s=`climate.${r}`,a=t[s];if(!a?.device_id||a.platform!=="tado_ce")continue;let l=a.device_id;for(let[p,c]of Object.entries(t)){if(c.platform!=="tado_ce"||c.device_id!==l||!c.translation_key||!o[p])continue;let u=c.translation_key;if(u.endsWith("_suffixed")){let m=u.replace("_suffixed",""),d=Object.keys(i).find(f=>i[f]===m);if(!d)continue;if(!n[r][d])n[r][d]=p;else{let f=2;for(;n[r][`${d}_${f}`];)f++;n[r][`${d}_${f}`]=p}}else{let m=Object.keys(i).find(d=>i[d]===u);if(!m)continue;n[r][m]||(n[r][m]=p)}}}return n}function ji(t){let e={},o=Object.keys(t);for(let[n,{platform:i,suffixes:r}]of Object.entries(Zs))for(let s of r){let a=o.find(l=>l.startsWith(`${i}.tado_ce`)&&l.endsWith(s));if(a){e[n]=a;break}}return e}function Gi(t,e){let o={};for(let n of e){o[n]={};for(let[i,{platform:r,suffixes:s}]of Object.entries(Xs))for(let a of s){let l=`${r}.${n}${a}`;if(t[l]){o[n][i]=l;break}}}return o}var ie={states:null,zoneNames:null,result:null};function Zi(t,e,o){if(ie.result&&ie.states===t&&ie.zoneNames!==null&&ie.zoneNames.length===e.length&&ie.zoneNames.every((p,c)=>p===e[c]))return ie.result;let n=!1,i=!1;o&&(n=Object.values(o).some(p=>p.platform==="tado_ce"),i=n),n||(n=Object.keys(t).some(p=>p.startsWith("sensor.tado_ce_")));let r={};if(n)if(i){let p=Ys(o);r=Ks(o,p);let c=ji(t);for(let[u,m]of Object.entries(c))r[u]||(r[u]=m)}else r=ji(t);let s;if(i){s=Js(o,e,t);let p=Gi(t,e);for(let c of e){s[c]||(s[c]={});let u=p[c]||{};for(let[m,d]of Object.entries(u))s[c][m]||(s[c][m]=d)}}else s=Gi(t,e);let a=Object.keys(Xi).filter(p=>!r[p]),l={isTadoCE:n,hubEntities:r,zoneEntities:s,missingHubKeys:a};if(n)for(let[p,c]of Object.entries(s))Object.keys(c).length===0&&console.debug(`${oe} zone "${p}" \u2014 no Tado CE entities discovered. Check entity_id matches sensor.<zone>_temperature pattern, or use temperature_entity / set_point_entity overrides.`);return ie={states:t,zoneNames:[...e],result:l},l}function Y(t){return t.replace(/^(climate|sensor|binary_sensor)\./,"")}var Ot=ro(oe);function wt(t){return t?.isUnavailable?" pc-row-unavail pc-row-quiet":t?.hvacMode==="sensor"?" pc-row-sensor pc-row-quiet":t?.hvacAction==="heating"?" pc-row-heat pc-row-active":t?.hvacAction==="cooling"?" pc-row-cool pc-row-active":t?.hvacAction==="off"||t?.targetTemp===null||t?.targetTemp===void 0?" pc-row-off pc-row-quiet":t?.currentTemp!==null&&t?.currentTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=.3?" pc-row-at-target pc-row-mid":" pc-row-idle pc-row-mid"}function rt(t,e,o,n){let i=t.entity,r=Y(i),s=e?.zoneEntities?.[r]||{},a=we(i,s,o,t,n||{});return{entityId:i,zoneName:r,zoneEntities:s,zoneState:a}}var Yi=new Set;function ho(t,e,o,n){if(!o||n[o])return;let i=`${t}|${e}|${o}`;Yi.has(i)||(Yi.add(i),Ot(`zone "%s": ${e} override points at missing entity "%s" \u2014 chip will not render`,t,o))}function be(t){let e=ne[t]||ne.idle;return{...e,glow:t==="heating"||t==="cooling"?e.fallback:null}}function fo(t){let e=t.filter(r=>!r.isUnavailable);if(e.length===0)return"off";let o=0,n=0,i=0;for(let r of e)r.hvacAction==="heating"?o+=1:r.hvacAction==="cooling"?n+=1:r.hvacAction==="off"&&(i+=1);return o>0&&n>0?"mixed":o>0?"heating":n>0?"cooling":i===e.length?"off":"idle"}function Oe(t,e,o){let n=we(t,{},e,o||{entity:t},{});return{name:n.name,temp:n.currentTemp??void 0,target:n.targetTemp??void 0,humidity:n.humidity??void 0,hvacAction:n.hvacAction,unit:n.unit}}function go(t){let e=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();return hn[e]||hn.Low}function Pe(t,e,o){return o<=e?50:At((t-e)/(o-e),0,1)*100}function Qs(t,e,o,n){let i=[],r=!n,s=l=>r||n.includes(l);if(n&&s("humidity")&&t.humidity!==null&&i.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(t.humidity)}%`}),s("hvac_action")){let l=be(t.hvacAction);i.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(s("overlay")&&t.overlayType){let l=t.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";i.push({type:"overlay",icon:l,label:t.overlayType,entityId:e.overlay})}if(s("preset")&&t.presetMode){let l=t.presetMode==="away"?"mdi:home-export-outline":"mdi:home";i.push({type:"preset",icon:l,label:t.presetMode==="away"?"Away":"Home"})}let a=(l,p,c)=>{if(!s(l)||!e[c])return;let u=o[e[c]];if(!Q(u)&&u.state.toLowerCase()!=="none"){let m=go(u.state);i.push({type:l,icon:p,label:u.state,color:m.token,severity:u.state,entityId:e[c]})}};if(s("open_window")&&e.open_window){let l=o[e.open_window];if(l){let p=l.state==="on";i.push({type:"open_window",icon:p?"mdi:window-open":"mdi:window-closed",label:p?"Open":"Closed",color:p?"var(--pulse-tier-gale)":void 0,entityId:e.open_window})}}if(s("window_predicted")&&e.window_predicted){let l=o[e.window_predicted];l&&l.state==="on"&&i.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"var(--pulse-tier-strong)",entityId:e.window_predicted})}if(a("mold_risk","mdi:mushroom","mold_risk"),a("condensation","mdi:water-alert","condensation"),s("comfort_level")&&e.comfort_level){let l=o[e.comfort_level];Q(l)||i.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:e.comfort_level})}if(s("preheat_now")&&e.preheat_now){let l=o[e.preheat_now];l&&l.state==="on"&&i.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"var(--pulse-tier-strong)",entityId:e.preheat_now})}if(s("battery")||s("battery_all")){let l=n&&n.includes("battery_all"),p=[],c=["battery"],u=2;for(;e[`battery_${u}`];)c.push(`battery_${u}`),u++;for(let m of c){let d=e[m];if(!d)continue;let f=o[d];Q(f)||p.push({eid:d,state:f.state,lower:f.state.toLowerCase()})}if(p.length>0)if(l)for(let m=0;m<p.length;m++){let d=p[m],f=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=d.lower==="critical"?"var(--pulse-tier-gale)":d.lower==="low"?"var(--pulse-tier-strong)":void 0;i.push({type:`battery${m>0?`_${m+1}`:""}`,icon:f,label:d.state,color:g,entityId:d.eid})}else{let m={critical:3,low:2,normal:1},d=p[0];for(let w of p)(m[w.lower]||0)>(m[d.lower]||0)&&(d=w);let f=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=d.lower==="critical"?"var(--pulse-tier-gale)":d.lower==="low"?"var(--pulse-tier-strong)":void 0;i.push({type:"battery",icon:f,label:d.state,color:g,entityId:d.eid})}}if(s("valve_control")){let p=o[t.entityId]?.attributes||{},c=p.valve_control_active,u=p.valve_target,m=p.valve_control_backed_off,d=p.valve_control_enabled;m===!0?i.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"var(--pulse-disabled)"}):c===!0&&u!==void 0?i.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${Z(u)}${t.unit}`,color:"var(--pulse-tier-strong)"}):d===!0&&i.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Idle",color:"var(--pulse-disabled)"})}if(n&&s("temp_source")){let p=o[t.entityId]?.attributes?.temperature_source;if(p&&p!=="cloud"){let c=p==="external"?"mdi:thermometer-probe":p==="homekit"?"mdi:apple":"mdi:cloud-outline";i.push({type:"temp_source",icon:c,label:p.charAt(0).toUpperCase()+p.slice(1)})}}return i}function we(t,e,o,n,i){let r=o[t],s=Q(r),a=r?.attributes||{},l=t.startsWith("sensor."),p=l?s?null:parseFloat(r?.state)||null:a.current_temperature??null,c=s||r?.state==="off"?null:a.temperature??null,u=l?null:a.current_humidity??null,m=l?"idle":a.hvac_action||(r?.state==="off"?"off":"idle"),d=l?"sensor":r?.state||"off",f=a.preset_mode||"",g=Number(a.min_temp??5),w=Number(a.max_temp??35),v=Number(a.target_temp_step??.5),b=a.unit_of_measurement||"\xB0C",y=0,_=n.heating_power_entity||e.heating_power;if(n.heating_power_entity&&ho(n.name||t,"heating_power_entity",n.heating_power_entity,o),_){let A=o[_];Q(A)||(y=parseFloat(A.state)||0)}else a.heating_power!==void 0&&(y=parseFloat(a.heating_power)||0);let $=0;if(e.ac_power){let A=o[e.ac_power];Q(A)||($=parseFloat(A.state)||0)}let C="";if(e.overlay){let A=o[e.overlay];Q(A)||(C=A.state)}else a.overlay_type&&(C=a.overlay_type);let E=n.name||a.friendly_name||t.replace(/^(climate|sensor)\./,""),M=n.icon||a.icon||"mdi:thermometer",F=n.chips||i.chips||null,I={...e},k=n.name||t;n.open_window_entity&&(I.open_window=n.open_window_entity,ho(k,"open_window_entity",n.open_window_entity,o)),n.battery_entity&&(I.battery=n.battery_entity,ho(k,"battery_entity",n.battery_entity,o)),n.mold_risk_entity&&(I.mold_risk=n.mold_risk_entity,ho(k,"mold_risk_entity",n.mold_risk_entity,o));let x={entityId:t,name:E,icon:M,isUnavailable:s,currentTemp:p,targetTemp:c,humidity:u,heatingPower:y,coolingPower:$,hvacAction:m,hvacMode:d,presetMode:f,overlayType:C,minTemp:g,maxTemp:w,tempStep:v,unit:b,chips:[]};return x.chips=Qs(x,I,o,F),x}var Ki=280;function gn(t,e=Ki){return t<=50?0:(2+(t-50)/50*3)*(e/Ki)}function Ji(t,e=20,o=1){if(o<=0)return 0;let n=Math.min(4,Math.max(2,Math.round(t/30))),i=Math.floor(e/o);return Math.min(n,i)}function Qi(t){return 4-t/100*2.5}function tr(t,e){return 1.5+t/e*1.5}function ye(t,e){return 3*(t/e)}function er(t){if(!t)throw new Error("Please define an entity or zones");if(!t.entity&&!t.zones)throw new Error("Please define an entity or zones");if(t.entity&&typeof t.entity=="string"&&!t.entity.startsWith("climate.")&&!t.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let e;t.zones?e=t.zones.map(r=>typeof r=="string"?{entity:r}:{...r}):e=[{entity:t.entity}];for(let r of e)if(!r.entity||typeof r.entity!="string")throw new Error("Each zone must have an entity ID");let o=t.atmosphere_intensity,n=o==="subtle"||o==="bold"?o:"medium",i={...t,columns:Number(t.columns)||Zt.columns,layout:t.layout||Zt.layout,show_temp_bar:t.show_temp_bar??Zt.show_temp_bar,show_power_bar:t.show_power_bar??Zt.show_power_bar,show_atmosphere:t.show_atmosphere!==!1,atmosphere_intensity:n,show_hero:t.show_hero===!0,hero_show_thermal_strip:t.hero_show_thermal_strip!==!1,hero_show_outside:t.hero_show_outside!==!1,tap_action:t.tap_action||{...Zt.tap_action},hold_action:t.hold_action||{...Zt.hold_action},double_tap_action:t.double_tap_action||{...Zt.double_tap_action},sections:t.sections||[...Vi],_zones:e};return Array.isArray(i.sections)&&(i.sections=i.sections.map(r=>{let s=typeof r=="string"?{type:r}:{...r},a=Wi[s.type];if(a){for(let[l,p]of Object.entries(a))if(s[l]===void 0||s[l]===null)s[l]=p;else if(typeof p=="number"){let c=Number(s[l]);Number.isFinite(c)?s[l]=c||p:(Ot('section "%s": %s=%o is not numeric \u2014 using default %o',s.type,l,s[l],p),s[l]=p)}}return s})),i}function vn(t,e,o){let n=new Map;if(!Array.isArray(t))return n;for(let i of t){if(!i?.entity)continue;let r=o?o(i.entity):i.entity;n.set(i.entity,e?.data?.[r]||[])}return n}function _e(t){return typeof t=="string"&&t.length>0}function ht(t,e,o,n){if(_e(n?.temperature_entity))return{entityId:n.temperature_entity,source:"yaml_override"};let r=e[t]?.attributes?.external_temp_sensor;return _e(r)&&e[r]?{entityId:r,source:"external"}:_e(o?.temperature)?{entityId:o.temperature,source:"discovery"}:{entityId:t,source:"climate_fallback"}}function Yt(t,e,o,n){if(_e(n?.humidity_entity))return{entityId:n.humidity_entity,source:"yaml_override"};let r=e[t]?.attributes?.external_humidity_sensor;return _e(r)&&e[r]?{entityId:r,source:"external"}:_e(o?.humidity)?{entityId:o.humidity,source:"discovery"}:null}var Be={timestamp:0,data:{},stateData:{}};function or(){return Be}function nr(t,e){let o={...Be.data};for(let[i,r]of Object.entries(t))r.length>0&&(o[i]=r);let n={...Be.stateData};if(e)for(let[i,r]of Object.entries(e))Array.isArray(r)&&r.length>0&&(n[i]=r);return Be={timestamp:Date.now(),data:o,stateData:n},Be}function ir(){return{timestamp:0,data:{},stateData:{}}}function bn(t){return t.timestamp>0&&Date.now()-t.timestamp<3e5}function rr(t,e){let o={...t.data};for(let[n,i]of Object.entries(e))i.length>0&&(o[n]=i);return{timestamp:Date.now(),data:o}}function wn(t,e){if(t.length===0||e<1)return[];let o=t[0].t,r=(t[t.length-1].t-o||1)/e,s=[],a=0,l=t[0].v;for(let p=0;p<e;p++){let c=o+(p+1)*r,u=0,m=0;for(;a<t.length&&t[a].t<c;)u+=t[a].v,m++,a++;m>0&&(l=u/m),s.push({x:p/(e-1||1),v:l})}return s}function sr(t,e,o,n,i){let s=o-4,a=i-n||1,l=t.map(p=>({x:p.x*e,y:2+s-(p.v-n)/a*s}));return an(l)}function lr(t,e,o,n=48){if(!t||t.length===0)return[];let i=1/0,r=-1/0;for(let s of t)for(let a of s.data)isFinite(a.v)&&(a.v<i&&(i=a.v),a.v>r&&(r=a.v));return isFinite(i)||(i=0),isFinite(r)||(r=100),t.map(s=>{let a=s.data.filter(c=>isFinite(c.v));if(a.length<2)return{entityId:s.entityId,color:s.color,d:""};let l=wn(a,n),p=sr(l,e,o,i,r);return{entityId:s.entityId,color:s.color,d:p}})}function tl(t,e,o,n){if(!t||t.length===0)return[];let i=o??e/2-2,r=n??i*.6,s=e/2,a=e/2,l=t.map(m=>Math.max(0,m.value)),p=l.reduce((m,d)=>m+d,0);if(p===0)return[];let c=[],u=-90;for(let m=0;m<t.length;m++){if(l[m]===0)continue;let d=l[m]/p*360;d>=360&&(d=359.9);let f=u+d,g=bo(s,a,r,i,u,f);c.push({label:t[m].label,color:t[m].color,d:g,angle:d}),u=f}return c}function yn(t="pc-bloom"){return ue(t)}function Ft(t,e=1.5,o){let n=o||"-30%",i=o==="-5%"?"110%":"160%",r=o===void 0?"":` x="${n}" y="${n}" width="${i}" height="${i}"`;return`<filter id="${t}"${r}><feGaussianBlur stdDeviation="${e}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`}function vo(t,e={}){let o=e.size||120,n=e.ariaLabel||t.map(v=>`${v.label} ${v.value}`).join(", "),i=e.centerNumStyle||"",r=e.centerLabel,s=tl(t,o),a=t.reduce((v,b)=>v+b.value,0);if(t.length===0)return{html:"",total:0};let l=yn("donut-bloom"),p=0,c=-1;for(let v=0;v<s.length;v++){let b=t[v]?.value||0;b>p&&(p=b,c=v)}let u=o<=80?1.5:3,m=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="${h(n)}">`;m+=`<defs>${Ft(l,u,"-30%")}</defs>`;let d=o/2-2,f=d*.6;m+=`<circle cx="${o/2}" cy="${o/2}" r="${((d+f)/2).toFixed(1)}" fill="none" stroke="var(--pulse-border-divider)" stroke-width="${(d-f).toFixed(1)}" />`;for(let v=0;v<s.length;v++){let b=s[v],y=v===c,_=y?"pc-donut-arc pc-donut-arc-active":"pc-donut-arc",$=y?` filter="url(#${l})"`:"";m+=`<path d="${b.d}" fill="${S(b.color)}" class="${_}"${$} data-segment="${h(b.label)}"><title>${h(b.label)}: ${Math.round(b.angle/360*a)}</title></path>`}m+="</svg>";let g='<div class="pc-donut-center">',w=i?` style="${i}"`:"";return g+=`<div class="pc-donut-center-num"${w}>${h(Math.round(a))}</div>`,r!=null&&(g+=`<div class="pc-donut-center-label">${h(r)}</div>`),g+="</div>",{html:m+g,total:a}}function xe(t){if(!t||t.length===0)return"";let e='<div class="pc-chart-legend">';for(let o of t){let n=S(o.color),i=h(o.label),r=o.value!==void 0&&o.value!==null?` ${h(o.value)}`:"";e+=`<span class="pc-legend-chip"><span class="pc-legend-dot" style="background:${n}"></span>${i}${r}</span>`}return e+="</div>",e}var $e=[{upper:14,color:"#1565C0"},{upper:16,color:"#4FC3F7"},{upper:17,color:"#4DB6AC"},{upper:18,color:"#81C784"},{upper:19,color:"#AED581"},{upper:20,color:"#C5E1A5"},{upper:21,color:"#FFF176"},{upper:22,color:"#FFB74D"},{upper:23,color:"#FF8A65"},{upper:24,color:"#FF7043"},{upper:25,color:"#F4511E"},{upper:26,color:"#EF5350"},{upper:27,color:"#EC407A"},{upper:28,color:"#E91E63"},{upper:30,color:"#D81B60"},{upper:32,color:"#C2185B"},{upper:34,color:"#AD1457"},{upper:null,color:"#880E4F"}];function at(t){for(let e of $e)if(e.upper===null||t<=e.upper)return e.color;return"#C62828"}function qe(t){return t<=20?"#C62828":t<=30?"#EF5350":t<=35?"#FF8A65":t<=40?"#FFB74D":t<=45?"#AED581":t<=55?"#4CAF50":t<=60?"#AED581":t<=65?"#4DB6AC":t<=70?"#4FC3F7":t<=80?"#1E88E5":"#1565C0"}function bo(t,e,o,n,i,r){let s=i*Math.PI/180,a=r*Math.PI/180,l=r-i,p=Math.abs(l)>180?1:0,c=t+n*Math.cos(s),u=e+n*Math.sin(s),m=t+n*Math.cos(a),d=e+n*Math.sin(a),f=t+o*Math.cos(a),g=e+o*Math.sin(a),w=t+o*Math.cos(s),v=e+o*Math.sin(s);return[`M${c.toFixed(2)},${u.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${p} 1 ${m.toFixed(2)},${d.toFixed(2)}`,`L${f.toFixed(2)},${g.toFixed(2)}`,`A${o.toFixed(2)},${o.toFixed(2)} 0 ${p} 0 ${w.toFixed(2)},${v.toFixed(2)}`,"Z"].join(" ")}function Pt(t,e,o,n=48){if(!t||t.length<2)return null;let i=t.filter(m=>isFinite(m.v));if(i.length<2)return null;let r=Date.now(),s=i[i.length-1];r-s.t>6e5&&i.push({t:r,v:s.v});let a=wn(i,n);if(a.length<2)return null;let l=1/0,p=-1/0;for(let m of a)m.v<l&&(l=m.v),m.v>p&&(p=m.v);isFinite(l)||(l=0),isFinite(p)||(p=100);let c=sr(a,e,o,l,p);if(!c)return null;let u=`${c} L${e.toFixed(1)},${o.toFixed(1)} L0,${o.toFixed(1)} Z`;return{linePath:c,areaPath:u}}function _n(t,e=24,o=""){if(!t||t.length<2)return"";let n=t.filter(p=>isFinite(p.v));if(n.length<2)return"";let i=wn(n,e),r=n[0].t,s=n[n.length-1].t,a=n.every(p=>Number.isInteger(p.v)),l={u:o,d:[]};return l.d=i.map(p=>{let c=r+p.x*(s-r),u=new Date(c),m=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`,d=a?Math.round(p.v):Math.round(p.v*10)/10;return{l:m,v:d}}),JSON.stringify(l)}function Kt(t,e,o,n,i,r=""){if(!t||t.length<2)return"";let s=Pt(t,e,o,24);if(!s)return"";let a=S(n),l=`<div class="pc-sparkline-filled" style="height:${o}px">`;return l+=`<svg viewBox="0 0 ${e} ${o}" role="img" aria-label="${h(r)}" preserveAspectRatio="none" style="width:100%;height:${o}px;display:block">`,l+=`<defs><linearGradient id="${h(i)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${a}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${a}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${s.areaPath}" fill="url(#${h(i)})" />`,l+=`<path d="${s.linePath}" fill="none" stroke="${a}" stroke-width="1.5" />`,l+="</svg></div>",l}var el=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function wo(t,e){let o=[],n=0;if(Array.isArray(t.chart_data)&&t.chart_data.length>0){for(let i of t.chart_data)i.type&&typeof i.count=="number"&&(o.push({label:i.type,value:Math.max(0,i.count),color:e[n%e.length]}),n++);return o}if(t.breakdown_24h&&typeof t.breakdown_24h=="object"){for(let[i,r]of Object.entries(t.breakdown_24h)){let s=Number(r);!isNaN(s)&&s>0&&(o.push({label:i,value:s,color:e[n%e.length]}),n++)}return o}for(let[i,r]of Object.entries(t)){if(el.has(i))continue;let s=Number(r);isNaN(s)||(o.push({label:i,value:Math.max(0,s),color:e[n%e.length]}),n++)}return o}var ar={heating:{cold:"#171717",hot:"#ff9f0a"},cooling:{cold:"#171717",hot:"#5ac8fa"},idle:{cold:"#171717",hot:"#525252"},off:{cold:"#171717",hot:"#262626"}};function cr(t,e,o){let n=o&&ar[o]||ar.off,i=(e?.maxTemp??30)-(e?.minTemp??0);if(i<=0)return n.cold;let r=Math.max(0,Math.min(1,(t-(e?.minTemp??0))/i));return Fi(n.cold,n.hot,r)}function ol(t,e,o,n){let i=e.show_temp_bar??o.show_temp_bar??!0,r=e.show_power_bar??o.show_power_bar??!0,s=t.isUnavailable?" pc-unavailable":"",a=!t.isUnavailable&&t.currentTemp!==null&&t.currentTemp!==void 0&&t.targetTemp!==null&&t.targetTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=.3,l,p;t.isUnavailable?(l=" pc-row-unavail",p='<span class="pc-state-tag pc-tag-unavail">Unavail</span>'):t.hvacAction==="heating"?(l=" pc-row-heat",p='<span class="pc-state-tag pc-tag-heat">Heat</span>'):t.hvacAction==="cooling"?(l=" pc-row-cool",p='<span class="pc-state-tag pc-tag-cool">Cool</span>'):t.hvacAction==="off"?(l=" pc-row-off",p='<span class="pc-state-tag pc-tag-off">Off</span>'):a?(l=" pc-row-at-target",p='<span class="pc-state-tag pc-tag-at-target">At target</span>'):(l=" pc-row-idle",p='<span class="pc-state-tag pc-tag-idle">Idle</span>');let c=t.isUnavailable?"":t.currentTemp!==null?`${Z(t.currentTemp)}${h(t.unit)}`:"--",u=!t.isUnavailable&&t.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${Z(t.targetTemp)}${h(t.unit)}</span>`:"",m=!t.isUnavailable&&t.humidity!==null?` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(t.humidity)}%</span>`:"",d=t.isUnavailable?`${h(t.name)}: Unavailable`:`${h(t.name)}: ${c}${t.targetTemp!==null?`, target ${Z(t.targetTemp)}${t.unit}`:""}${t.humidity!==null?`, ${Math.round(t.humidity)}% humidity`:""}, ${t.hvacAction}`,f=`<div class="pc-zone-row${s}${l}" tabindex="0" role="button"
    aria-label="${h(d)}" data-entity="${h(t.entityId)}">`;if(f+='<div class="pc-row-ribbon"></div>',f+='<div class="pc-zone-header">',f+=`<span class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${h(t.icon)}"></ha-icon> `:""}${h(t.name)}${m}</span>`,f+=`<span class="pc-zone-temp">${c}${u}${p}</span>`,f+="</div>",i&&!t.isUnavailable){let w=t.currentTemp!==null?Pe(t.currentTemp,t.minTemp,t.maxTemp):50,v=t.targetTemp!==null?Pe(t.targetTemp,t.minTemp,t.maxTemp):null,b=at(t.minTemp),y=at((t.minTemp+t.maxTemp)/2),_=at(t.maxTemp),$=`linear-gradient(to right, ${S(b)}, ${S(y)}, ${S(_)})`;f+='<div class="pc-temp-gauge">',f+=`<div class="pc-temp-gauge-bg" style="background:${$}"></div>`,f+=`<div class="pc-temp-gauge-current" style="left:${S(w.toFixed(1))}%"></div>`,v!==null&&(f+=`<div class="pc-temp-gauge-target" style="left:${S(v.toFixed(1))}%"></div>`),f+="</div>"}if(r&&!t.isUnavailable){let w=t.heatingPower||t.coolingPower||0,v=be(t.hvacAction),b=v.token||v.fallback;if(w>0||t.hvacAction==="heating"||t.hvacAction==="cooling"){let y=Math.min(100,Math.max(0,w)),_=w>0?" pc-bar-active":"";f+='<div class="pc-power-bar-container">',f+='<div class="pc-power-bar-track"></div>',f+=`<div class="pc-power-bar-fill${_}" style="width:${S(y.toFixed(1))}%;background:${S(b)};--pc-bar-glow:${S(v.fallback)}40"></div>`,f+="</div>"}}if(t.chips.length>0){f+='<div class="pc-zone-chips">';for(let w of t.chips){let v=w.severity?` pc-severity-${w.severity.toLowerCase()}`:"",b=w.color?` style="color:${S(w.color)}"`:"",y=w.entityId?` data-entity="${h(w.entityId)}"`:"";f+=`<span class="pc-chip${v}"${b}${y} data-chip-type="${h(w.type)}">`,f+=`<ha-icon icon="${h(w.icon)}"></ha-icon>`,f+=`${h(w.label)}`,f+="</span>"}f+="</div>"}let g=e.sparkline?.mode||"overlay";if(g==="pulse"&&!t.isUnavailable)return nl(t,e,n);if(!t.isUnavailable&&n&&n.length>=2){let w=be(t.hvacAction),v=e.color||w.fallback;g==="prominent"&&(f+=il(v,n,t.unit,t.entityId))}return f+="</div>",f}function nl(t,e,o){let n=be(t.hvacAction),i=t.heatingPower>0||t.hvacAction==="heating",r=t.hvacAction==="cooling",s=i||r,a=s?e.color||n.fallback:"var(--pulse-text-secondary)",l=S(a),p=h(t.entityId).replace(/\./g,"-"),c=t.heatingPower||t.coolingPower||0,u=t.hvacAction==="heating"?`Heating ${Math.round(c)}%`:t.hvacAction==="cooling"?`Cooling ${Math.round(c)}%`:"Idle",m=t.currentTemp!==null?`${Z(t.currentTemp)}${h(t.unit)}`:"--",d=t.targetTemp!==null?`\u2192 ${Z(t.targetTemp)}${h(t.unit)}`:"",f=`${h(t.name)}: ${m}, ${u}`,g=`pc-zone-row pc-zone-row-pulse${i?" pc-heating":""}`,w=_n(o||[],24,t.unit),v=`<div class="${g}" tabindex="0" role="button"
    aria-label="${h(f)}" data-entity="${h(t.entityId)}"${w?` data-sparkline='${h(w)}'`:""}>`;if(o&&o.length>=2){let b=Pt(o,360,56,60);if(b){let y=`pulse-grad-${p}`,_=`pulse-glow-${p}`,$=s?" pc-heating-glow":"",C=s?"0.55":"0.2",E=s?"0.05":"0.02",M=s?"2":"1.5",F=s?"1":"0.5";v+='<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',v+="<defs>",v+=`<linearGradient id="${y}" x1="0" y1="0" x2="0" y2="1">`,v+=`<stop offset="0%" stop-color="${l}" stop-opacity="${C}"/>`,v+=`<stop offset="100%" stop-color="${l}" stop-opacity="${E}"/>`,v+="</linearGradient>",s&&(v+=Ft(_,ye(360,360).toFixed(1))),v+="</defs>",v+=`<path d="${b.areaPath}" fill="url(#${y})" />`,v+=`<path d="${b.linePath}" fill="none" stroke="${l}" stroke-width="${M}" opacity="${F}"`,s&&(v+=` filter="url(#${_})" class="${$}"`),v+=" />",v+="</svg>"}}return v+='<div class="pc-pulse-info">',v+='<div class="pc-pulse-info-left">',v+=`<div class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${h(t.icon)}"></ha-icon> `:""}${h(t.name)}</div>`,v+='<div class="pc-pulse-status">',v+=`<span class="pc-status-dot" style="background:${l}"></span>`,v+=`${h(u)}`,v+="</div>",v+="</div>",v+='<div class="pc-pulse-info-right">',v+=`<span class="pc-pulse-current">${h(m)}</span>`,d&&(v+=`<span class="pc-zone-target">${d}</span>`),v+="</div>",v+="</div>",v+="</div>",v}function il(t,e,o,n){let i=Pt(e,300,40,48);if(!i){let c=me(e,300,40,48,"avg",!0);return c?`<div class="pc-sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${c}" fill="none" stroke="${S(t)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let s=`prom-grad-${n?n.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,a=S(t),l=_n(e,24,o),p=`<div class="pc-sparkline-filled pc-sparkline-prominent"${l?` data-sparkline='${h(l)}'`:""}>`;return p+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',p+=`<defs><linearGradient id="${h(s)}" x1="0" y1="0" x2="0" y2="1">`,p+=`<stop offset="0%" stop-color="${a}" stop-opacity="0.3"/>`,p+=`<stop offset="100%" stop-color="${a}" stop-opacity="0"/>`,p+="</linearGradient></defs>",p+=`<path d="${i.areaPath}" fill="url(#${h(s)})" />`,p+=`<path d="${i.linePath}" fill="none" stroke="${a}" stroke-width="1.5" opacity="0.7" />`,p+="</svg></div>",p}function xn(t,e,o,n,i){if(!t||t.length===0)return"";let r=Number(e.columns)||1,s=r>1?" pc-columns":"",a=r>1?` style="grid-template-columns:repeat(${Number(r)}, 1fr)"`:"",l=`<div class="pc-section pc-section-zones${s}"${a}>`,p=n?.hubEntities?.home_state,c=p?o[p]:null;if(Q(c))l+='<div class="pulse-section-label">Zones</div>';else{let u=c.state==="on",m=u?"mdi:home":"mdi:home-export-outline",d=u?"Home":"Away",f=u?"var(--pulse-tier-moderate)":"var(--pulse-text-secondary)";l+='<div class="pc-section-header pc-section-header-center">',l+='<div class="pulse-section-label">Zones</div>',l+=`<span class="pc-chip" data-entity="${h(p)}" style="color:${S(f)}">`,l+=`<ha-icon icon="${h(m)}"></ha-icon>${h(d)}</span>`,l+="</div>"}for(let u of t){let{entityId:m,zoneEntities:d,zoneState:f}=rt(u,n,o,e),g=ht(m,o,d,u),w=i?.data?.[g.entityId]||i?.data?.[m]||[];l+=ol(f,u,e,w)}return l+="</div>",l}function pr(t,e,o,n,i,r){if(!t||!e)return;let s=t.querySelectorAll(".pc-zone-row");for(let a=0;a<e.length;a++){let l=e[a],p=l.entity,c=n[p],u=r[p];if(c===u&&s[a])continue;let{zoneState:m}=rt(l,i,n,o),d=s[a];if(!d)continue;let f=d.querySelector(".pc-zone-temp");if(f){let y=m.isUnavailable?"":m.currentTemp!==null?`${Z(m.currentTemp)}${m.unit}`:"--",_=!m.isUnavailable&&m.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${Z(m.targetTemp)}${h(m.unit)}</span>`:"";f.innerHTML=`${h(y)}${_}`}let g=d.querySelector(".pc-power-bar-fill");if(g){let y=m.heatingPower||m.coolingPower||0,_=be(m.hvacAction),$=_.token||_.fallback;g.style.width=`${Math.min(100,Math.max(0,y)).toFixed(1)}%`,g.style.background=$,g.style.setProperty("--pc-bar-glow",`${_.fallback}40`),g.classList.toggle("pc-bar-active",y>0)}let w=d.querySelector(".pc-temp-gauge-current");if(w&&m.currentTemp!==null){let y=Pe(m.currentTemp,m.minTemp,m.maxTemp);w.style.left=`${y.toFixed(1)}%`}let v=d.querySelector(".pc-temp-gauge-target");if(v&&m.targetTemp!==null){let y=Pe(m.targetTemp,m.minTemp,m.maxTemp);v.style.left=`${y.toFixed(1)}%`}let b=d.querySelector(".pc-temp-gauge-bg");if(b&&!m.isUnavailable){let y=at(m.minTemp),_=at((m.minTemp+m.maxTemp)/2),$=at(m.maxTemp);b.style.background=`linear-gradient(to right, ${y}, ${_}, ${$})`}m.isUnavailable?d.classList.add("pc-unavailable"):d.classList.remove("pc-unavailable")}}function Ve(t){return!!(t?.api_usage&&t?.api_limit)}function dr(t){return t>95?"var(--pulse-tier-gale)":t>80?"var(--pulse-tier-strong)":"var(--pulse-tier-moderate)"}function rl(t){let e=(t||"").toLowerCase();return e==="ok"||e==="healthy"?"var(--pulse-tier-moderate)":e==="warning"?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}function al(t,e){let o=e>0?Math.min(100,t/e*100):0,n=dr(o),i=80,r=i/2,s=i/2,a=i/2-4,l=a*.7,p=bo(r,s,l,a,-90,269.9),c=-90+o/100*360,u=o>0?bo(r,s,l,a,-90,Math.min(c,269.9)):"",m=o>95,d=o>80,f=m||d,g='<div class="pc-usage-gauge">';if(g+=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="API usage: ${Math.round(t)} of ${Math.round(e)}" style="width:${i}px;height:${i}px">`,f&&(g+=`<defs>${Ft("gauge-glow",2)}</defs>`),g+=`<path d="${p}" fill="var(--pulse-border-divider)" />`,u){if(g+=`<path d="${u}" fill="${S(n)}"${f?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(o)}%</title>`,f){let b=m?"1":"2.5";Rt()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${b}s" repeatCount="indefinite"/>`)}g+="</path>"}g+="</svg>";let w=h(Math.round(t)),v=h(Math.round(e));return g+=`<div class="pc-gauge-center">${w}<br><span class="pc-gauge-center-limit">/ ${v}</span></div>`,g+="</div>",g}function sl(t,e,o){let n=e?.data?.[t]||[];return Kt(n,200,40,o,"api-hist-grad","API usage history")}function ll(t){let e=wo(t,Dt);if(e.length===0)return"";let o=60,n='<div class="pc-api-breakdown-row">';n+=`<div class="pc-donut-container pc-api-breakdown-donut" style="width:${o}px;height:${o}px">`;let{html:i}=vo(e,{size:o,ariaLabel:"API call breakdown",centerNumStyle:"font-size:var(--pulse-font-body)"});return n+=i,n+="</div>",n+=xe(e.map(r=>({label:r.label,color:r.color,value:String(Math.round(r.value))}))),n+="</div>",n}function yo(t,e,o,n){if(!Ve(t))return"";let i=parseFloat(e[t.api_usage]?.state)||0,r=parseFloat(e[t.api_limit]?.state)||100,s=r>0?Math.min(100,i/r*100):0,a=dr(s),l=e[t.api_status]?.state||"unknown",p=rl(l),c='<div class="pc-api-dashboard">';c+='<div class="pc-api-row">',c+=al(i,r);let u=t.api_usage;if(u&&n&&(c+=sl(u,n,a)),c+="</div>",t.api_breakdown&&e[t.api_breakdown]&&(c+='<div class="pc-api-row">',c+=ll(e[t.api_breakdown].attributes||{}),c+="</div>"),c+='<div class="pc-zone-chips">',t.call_history&&e[t.call_history]){let m=e[t.call_history].attributes?.calls_per_hour;m!=null&&Number(m)>0&&(c+=`<span class="pc-chip" data-entity="${h(t.call_history)}">`,c+=`<ha-icon icon="mdi:speedometer"></ha-icon>${h(Math.round(Number(m)))}/hr</span>`)}if(t.polling_interval&&e[t.polling_interval]){let m=e[t.polling_interval],d=m.attributes?.unit_of_measurement||"";c+=`<span class="pc-chip" data-entity="${h(t.polling_interval)}">Poll: ${h(m.state)}${d?h(d):""}</span>`}if(t.next_sync&&e[t.next_sync]){let m=e[t.next_sync].state,d=m,f=0;if(m&&m.includes("T"))try{let g=new Date(m);f=g.getTime();let w=f-Date.now();if(w>0&&w<36e5){let v=Math.floor(w/6e4),b=Math.floor(w%6e4/1e3);d=v>0?`${v}m ${b}s`:`${b}s`}else d=dt(g)}catch{}c+=`<span class="pc-chip chip-next-sync" data-entity="${h(t.next_sync)}" data-target="${f}">Next: ${h(d)}</span>`}if(t.api_reset&&e[t.api_reset]){let m=e[t.api_reset].state,d=m;if(m&&m.includes("T"))try{let f=new Date(m);d=dt(f)}catch{}c+=`<span class="pc-chip" data-entity="${h(t.api_reset)}">Reset: ${h(d)}</span>`}return t.token_status&&e[t.token_status]&&(c+=`<span class="pc-chip" data-entity="${h(t.token_status)}">Token: ${h(e[t.token_status].state)}</span>`),c+=`<span class="pc-chip" data-entity="${t.api_status?h(t.api_status):""}" style="color:${S(p)}">${h(l)}</span>`,c+="</div>",c+="</div>",c}function $n(t,e,o,n){if(!Ve(t))return"";let i='<div class="pc-section pc-section-api">';return i+='<div class="pulse-section-label">API Usage</div>',i+=yo(t,e,o,n),i+="</div>",i}function We(t){return!!t?.bridge_connected}function _o(t,e,o){if(!We(t))return"";let n=e[t.bridge_connected];if(!n)return"";let i=n.state==="on",r=i?"var(--pulse-tier-moderate)":"var(--pulse-tier-gale)",s=i?"Connected":"Disconnected",a=i?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},p=l.response_time_ms,c=l.consecutive_failures,u=l.last_error,m=t.boiler_flow_temp&&e[t.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",d="";if(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${h(t.bridge_connected)}" style="color:${S(r)}">`,d+=`<span class="${a}"></span>`,d+=`${h(s)}</span>`,p!==void 0&&(d+=`<span class="pc-chip" data-entity="${h(t.bridge_connected)}">${h(Math.round(p))}ms</span>`),c!==void 0&&c>0&&(d+=`<span class="pc-chip" data-entity="${h(t.bridge_connected)}" style="color:var(--pulse-tier-gale)">Failures: ${h(c)}</span>`),d+="</div>",t.boiler_flow_temp&&e[t.boiler_flow_temp]){let w=parseFloat(e[t.boiler_flow_temp].state),v=e[t.boiler_flow_temp].state,b=isNaN(w)?"var(--pulse-text-primary)":at(w);if(d+='<div class="pc-flow-temp-row">',d+=`<span class="pc-flow-temp-value" style="color:${S(b)}">${h(v)}${h(m)}</span>`,o){let y=o.data?.[t.boiler_flow_temp]||[],_=Kt(y,120,30,b,"bridge-flow-grad","Boiler flow temperature history");_&&(d+=`<div class="pc-flow-sparkline">${_}</div>`)}d+="</div>"}let f=t.wc_status&&e[t.wc_status],g=t.wc_target_flow&&e[t.wc_target_flow];if((f||g)&&(d+='<div class="pc-zone-chips">',f&&(d+=`<span class="pc-chip" data-entity="${h(t.wc_status)}">${h(e[t.wc_status].state)}</span>`),g&&(d+=`<span class="pc-chip" data-entity="${h(t.wc_target_flow)}">Target: ${h(e[t.wc_target_flow].state)}${h(m)}</span>`),d+="</div>"),t.boiler_max_output&&e[t.boiler_max_output]){let w=e[t.boiler_max_output].state;w!=="unavailable"&&w!=="unknown"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${h(t.boiler_max_output)}">`,d+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${h(w)}${h(m)}</span>`,d+="</div>")}return u&&u!=="None"&&u!=="null"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" style="color:var(--pulse-tier-gale)">Error: ${h(u)}</span>`,d+="</div>"),d}function Sn(t,e,o){if(!We(t))return"";let n='<div class="pc-section pc-section-bridge">';return n+='<div class="pulse-section-label">Bridge</div>',n+=_o(t,e,o),n+="</div>",n}var xo="var(--pulse-tier-moderate)",ur="var(--pulse-accent)";function Se(t){return!!t?.homekit_connected}function $o(t,e){if(!Se(t))return"";let o=e[t.homekit_connected];if(!o)return"";let n=o.attributes||{},i=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,r=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,s=i?Number(i.state)||0:Number(n.reads_saved_today)||0,a=r?Number(r.state)||0:Number(n.writes_saved_today)||0,l=s+a;return l>0?` \xB7 ${l} saved`:""}function So(t,e,o){if(!Se(t))return"";let n=e[t.homekit_connected];if(!n)return"";let i=n.state==="on",r=i?xo:"var(--pulse-tier-gale)",s=i?"Connected":"Disconnected",a=i?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},p=l.uptime||"",c=l.mapped_zones,u=l.reconnect_count,m=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,d=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,f=m?Number(m.state)||0:Number(l.reads_saved_today)||0,g=d?Number(d.state)||0:Number(l.writes_saved_today)||0,w=f+g,v="";if(v+='<div class="pc-zone-chips">',v+=`<span class="pc-chip" data-entity="${h(t.homekit_connected)}" style="color:${S(r)}">`,v+=`<span class="${a}"></span>`,v+=`${h(s)}`,p&&(v+=` <span class="pc-chip-aside">${h(p)}</span>`),v+="</span>",c!==void 0&&(v+=`<span class="pc-chip">${h(c)} zones</span>`),u!==void 0&&u>0&&(v+=`<span class="pc-chip" style="color:var(--pulse-tier-strong)">Reconnects: ${h(u)}</span>`),v+="</div>",f>0||g>0){let C=w>0?f/w*100:100;v+='<div class="pc-homekit-bar-stack">',v+='<div class="pc-power-bar-container">',v+='<div class="pc-power-bar-track"></div>',v+=`<div class="pc-power-bar-fill" style="width:100%;background:${S(ur)}"></div>`,v+=`<div class="pc-power-bar-fill" style="width:${S(C.toFixed(1))}%;background:${S(xo)}"></div>`,v+="</div>",v+="</div>";let E=t.homekit_reads_saved;if(E&&o){let I=o.data?.[E]||[];v+=Kt(I,200,30,xo,"hk-spark-grad","HomeKit saved calls history")}v+='<div class="pc-zone-chips">';let M=t.homekit_reads_saved||"",F=t.homekit_writes_saved||"";v+=`<span class="pc-chip"${M?` data-entity="${h(M)}"`:""} style="color:${S(xo)}">Reads: ${h(f)}</span>`,g>0&&(v+=`<span class="pc-chip"${F?` data-entity="${h(F)}"`:""} style="color:${S(ur)}">Writes: ${h(g)}</span>`),v+="</div>"}let b=Number(l.write_attempts)||0,y=Number(l.write_successes)||0,_=Number(l.write_fallbacks)||0,$=Number(l.write_avg_latency_ms)||0;return(b>0||y>0||_>0)&&(v+='<div class="pc-zone-chips">',b>0&&(v+=`<span class="pc-chip">Attempts: ${h(b)}</span>`),y>0&&(v+=`<span class="pc-chip">Successes: ${h(y)}</span>`),_>0&&(v+=`<span class="pc-chip" style="color:var(--pulse-tier-strong)">Fallbacks: ${h(_)}</span>`),$>0&&(v+=`<span class="pc-chip">Latency: ${h($)}ms</span>`),v+="</div>"),v}function kn(t,e,o){if(!Se(t))return"";let n=$o(t,e),i='<div class="pc-section pc-section-homekit">';return i+=`<div class="pulse-section-label">HomeKit${h(n)}</div>`,i+=So(t,e,o),i+="</div>",i}function cl(t){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(t||"").toLowerCase()]||"mdi:weather-cloudy"}function Tn(t,e,o){if(!t.outside_temp)return"";let n=e[t.outside_temp]?.state,i=e[t.weather]?.state||"",r=t.solar_intensity?e[t.solar_intensity]?.state:null,s='<div class="pc-section pc-section-weather">';s+='<div class="pulse-section-label">Weather</div>',s+='<div class="pc-zone-chips">',i&&(s+=`<span class="pc-chip"${t.weather?` data-entity="${h(t.weather)}"`:""}><ha-icon icon="${h(cl(i))}"></ha-icon>${h(i)}</span>`),n!=null&&(s+=`<span class="pc-chip" data-entity="${h(t.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${h(n)}${h(e[t.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),r!=null&&(s+=`<span class="pc-chip"${t.solar_intensity?` data-entity="${h(t.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${h(r)}%</span>`),s+="</div>";let a=t.outside_temp;if(a&&o){let l=o.data?.[a]||[],p=parseFloat(n||"0"),c=isNaN(p)?"var(--pulse-text-primary)":at(p);s+=Kt(l,200,30,c,"weather-spark-grad","Outdoor temperature history")}return s+="</div>",s}function An(t,e,o){let n=!1,i='<div class="pc-section pc-section-environment">';i+='<div class="pulse-section-label">Environment</div>';for(let r of t){let s=Y(r.entity),a=o?.zoneEntities?.[s]||{},l=a.mold_risk&&e[a.mold_risk],p=a.condensation&&e[a.condensation],c=a.comfort_level&&e[a.comfort_level],u=a.surface_temp&&e[a.surface_temp],m=a.dew_point&&e[a.dew_point];if(!l&&!p&&!c&&!u&&!m)continue;n=!0;let d=r.name||e[r.entity]?.attributes?.friendly_name||s;if(i+=`<div class="pc-system-row"><span class="pc-system-label">${h(d)}</span>`,i+='<div class="pc-zone-chips">',l){let f=e[a.mold_risk].state,g=go(f);i+=`<span class="pc-chip" data-entity="${h(a.mold_risk)}" style="color:${S(g.fallback)}">`,i+=`<ha-icon icon="mdi:mushroom"></ha-icon>${h(f)}</span>`}if(p){let f=e[a.condensation].state,g=go(f);i+=`<span class="pc-chip" data-entity="${h(a.condensation)}" style="color:${S(g.fallback)}">`,i+=`<ha-icon icon="mdi:water-alert"></ha-icon>${h(f)}</span>`}c&&(i+=`<span class="pc-chip" data-entity="${h(a.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${h(e[a.comfort_level].state)}</span>`),u&&(i+=`<span class="pc-chip" data-entity="${h(a.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${h(e[a.surface_temp].state)}${h(e[a.surface_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),m&&(i+=`<span class="pc-chip" data-entity="${h(a.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${h(e[a.dew_point].state)}${h(e[a.dew_point]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),i+="</div></div>"}return i+="</div>",n?i:""}function Cn(t,e,o){let n=!1,i='<div class="pc-section pc-section-thermal">';i+='<div class="pulse-section-label">Thermal Analytics</div>';for(let r of t){let s=Y(r.entity),a=o?.zoneEntities?.[s]||{},l=a.heating_rate&&e[a.heating_rate],p=a.thermal_inertia&&e[a.thermal_inertia],c=a.preheat_time&&e[a.preheat_time],u=a.confidence&&e[a.confidence],m=a.heat_accel&&e[a.heat_accel],d=a.approach_factor&&e[a.approach_factor];if(!l&&!p&&!c&&!u&&!m&&!d)continue;n=!0;let f=r.name||e[r.entity]?.attributes?.friendly_name||s;i+=`<div class="pc-system-row"><span class="pc-system-label">${h(f)}</span>`,i+='<div class="pc-zone-chips">',l&&(i+=`<span class="pc-chip" data-entity="${h(a.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${h(e[a.heating_rate].state)}${h(e[a.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr")}</span>`),p&&(i+=`<span class="pc-chip" data-entity="${h(a.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${h(e[a.thermal_inertia].state)}</span>`),c&&(i+=`<span class="pc-chip" data-entity="${h(a.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${h(e[a.preheat_time].state)} min</span>`),u&&(i+=`<span class="pc-chip" data-entity="${h(a.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${h(e[a.confidence].state)}%</span>`),m&&(i+=`<span class="pc-chip" data-entity="${h(a.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${h(e[a.heat_accel].state)}${h(e[a.heat_accel]?.attributes?.unit_of_measurement||"")}</span>`),d&&(i+=`<span class="pc-chip" data-entity="${h(a.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${h(e[a.approach_factor].state)}${h(e[a.approach_factor]?.attributes?.unit_of_measurement||"")}</span>`),i+="</div></div>"}return i+="</div>",n?i:""}function Mn(t,e,o){let n=!1,i='<div class="pc-section pc-section-schedule">';i+='<div class="pulse-section-label">Schedule</div>';for(let r of t){let s=Y(r.entity),a=o?.zoneEntities?.[s]||{},l=a.next_schedule&&e[a.next_schedule],p=a.schedule_deviation&&e[a.schedule_deviation],c=a.preheat_advisor&&e[a.preheat_advisor],u=a.comfort_target&&e[a.comfort_target];if(!l&&!p&&!c&&!u)continue;n=!0;let m=r.name||e[r.entity]?.attributes?.friendly_name||s;if(i+=`<div class="pc-system-row"><span class="pc-system-label">${h(m)}</span>`,i+='<div class="pc-zone-chips">',l){let d=a.next_sched_temp&&e[a.next_sched_temp]?` \u2192 ${h(e[a.next_sched_temp].state)}${h(e[a.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C")}`:"";i+=`<span class="pc-chip" data-entity="${h(a.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${h(e[a.next_schedule].state)}${d}</span>`}p&&(i+=`<span class="pc-chip" data-entity="${h(a.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${h(e[a.schedule_deviation].state)}${h(e[a.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),c&&(i+=`<span class="pc-chip" data-entity="${h(a.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${h(e[a.preheat_advisor].state)}</span>`),u&&(i+=`<span class="pc-chip" data-entity="${h(a.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${h(e[a.comfort_target].state)}${h(e[a.comfort_target]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),i+="</div></div>"}return i+="</div>",n?i:""}function pl(){return ue("graph-grad")}function dl(t,e){let o=e&&e.length>0?e:Dt;return o[t%o.length]}function ul(t,e,o){let i=[];for(let l of t){let p=Pt(l.data,300,e,48);p&&i.push({...p,color:l.color,entityId:l.entityId})}if(i.length===0){let l=lr(t,300,e);if(!l.some(u=>u.d!==""))return'<div class="pc-chart-empty">No data available</div>';let c=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${h(o)}" class="pc-chart-svg" preserveAspectRatio="none">`;for(let u of l)u.d!==""&&(c+=`<path d="${u.d}" fill="none" stroke="${S(u.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" data-entity="${h(u.entityId)}" />`);return c+="</svg>",c}let r=i.map(()=>pl()),s=yn("graph-glow"),a=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${h(o)}" class="pc-chart-svg" preserveAspectRatio="none">`;a+="<defs>";for(let l=0;l<i.length;l++)a+=`<linearGradient id="${r[l]}" x1="0" y1="0" x2="0" y2="1">`,a+=`<stop offset="0%" stop-color="${S(i[l].color)}" stop-opacity="0.25"/>`,a+=`<stop offset="100%" stop-color="${S(i[l].color)}" stop-opacity="0"/>`,a+="</linearGradient>";a+=Ft(s,.6),a+="</defs>";for(let l=0;l<i.length;l++){let p=i[l];a+=`<path d="${p.areaPath}" fill="url(#${r[l]})" />`,a+=`<path d="${p.linePath}" fill="none" stroke="${S(p.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" filter="url(#${s})" data-entity="${h(p.entityId)}" />`}return a+="</svg>",a}function Fn(t,e,o,n,i){let r=t.attribute||"current_temperature",s=t.stacked===!0,a=Number(t.height)||80,l=t.palette||void 0,p=t.entities||e.map(u=>u.entity);if(p.length===0)return"";let c='<div class="pc-section pc-section-graph">';return s?(c+=En(p,"current_temperature","Temperature",a,l,o,n,i,e),c+=En(p,"current_humidity","Humidity",a,l,o,n,i,e)):c+=En(p,r,r==="current_humidity"?"Humidity":"Temperature",a,l,o,n,i,e),c+="</div>",c}function En(t,e,o,n,i,r,s,a,l){let p=[],c=[],u=e==="current_humidity"||e==="humidity";for(let g=0;g<t.length;g++){let w=t[g],v=dl(g,i),b=Y(w),y=a?.zoneEntities?.[b]||{},_=l?.find(k=>k.entity===w),C=(u?Yt(w,s,y,_):ht(w,s,y,_))?.entityId||w,E=r.data[C]||[],M=_?.name||s[w]?.attributes?.friendly_name||b,F=s[w]?.attributes?.[e],I=u?"%":s[w]?.attributes?.unit_of_measurement||"\xB0C";p.push({entityId:C,data:E,color:v}),c.push({label:M,color:v,value:F!=null?`${F}${I}`:"--"})}let m=c.map(g=>g.label).join(", "),d=`${o} history for ${m}`,f=`<div class="pulse-section-label">${h(o)}</div>`;return f+=`<div class="pc-chart-container" style="height:${S(n)}px">`,f+=ul(p,n,d),f+="</div>",f+=xe(c),f}function In(t,e,o){let n=Number(t.size)||120,i=t.source,r=[];if(i==="api_breakdown"?r=ml(e,o):i==="homekit_saved"?r=hl(e,o):t.segments&&(r=fl(t.segments,o)),r.length===0)return"";let s='<div class="pc-section pc-section-donut">',a={api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"},l={api_breakdown:"Calls",homekit_saved:"Saved"},p=i&&a[i]||"Breakdown",c=i&&l[i]||"Total";s+=`<div class="pulse-section-label">${h(p)}</div>`,s+=`<div class="pc-donut-container" style="width:${S(n)}px;height:${S(n)}px">`;let{html:u}=vo(r,{size:n,centerLabel:c});s+=u,s+="</div>";let m=r.map(d=>({label:d.label,color:d.color,value:String(Math.round(d.value))}));return s+=xe(m),s+="</div>",s}function ml(t,e){let o=t.api_breakdown;if(!o||!e[o])return[];let n=e[o].attributes;return!n||typeof n!="object"?(Ot("api_call_breakdown entity has no attributes"),[]):wo(n,Dt)}function hl(t,e){if(!t.homekit_connected)return[];let o=e[t.homekit_connected];if(!o)return[];let n=o.attributes||{},i=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,r=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,s=i?Number(i.state)||0:Number(n.reads_saved_today)||0,a=r?Number(r.state)||0:Number(n.writes_saved_today)||0,l=[];return(s>0||a>0)&&(l.push({label:"Reads Saved",value:s,color:Dt[0]}),l.push({label:"Writes Saved",value:a,color:Dt[1]})),l}function fl(t,e){return t.map((o,n)=>({label:o.label||o.entity,value:Math.max(0,Number(e[o.entity]?.state)||0),color:o.color||Dt[n%Dt.length]}))}function ko(t,e,o){let i=Date.now()-o,r=o/e,s=[],a=0,l=null;for(;a<t.length&&t[a].t<i;)isFinite(t[a].v)&&(l=Math.round(t[a].v*10)/10),a++;for(let p=0;p<e;p++){let c=i+p*r,u=c+r,m=c+r/2,d=0,f=0;for(;a<t.length&&t[a].t<u;)t[a].t>=c&&isFinite(t[a].v)&&(d+=t[a].v,f++),a++;f>0&&(l=Math.round(d/f*10)/10),s.push({value:l,time:m,label:dt(new Date(m))})}return s}function To(t,e,o={}){let n=t.length;if(n===0)return'<div class="pc-strip-container"><div class="pc-chart-empty">No data</div></div>';let i=o.emptyColor||"var(--pulse-disabled)",r=o.emptyOpacity??.3,s=o.ariaLabel||"",a=JSON.stringify(t.map(p=>({v:p.value,l:p.label}))),l=`<div class="pc-strip-container" data-slots='${h(a)}'>`;l+=`<svg viewBox="0 0 ${n} 1" preserveAspectRatio="none" role="img" aria-label="${h(s)}" style="width:100%;height:100%;display:block">`;for(let p=0;p<n;p++){let c=t[p].value,u=c!==null?e(c):i,m=c!==null?1:r;l+=`<rect x="${p}" y="0" width="1.05" height="1" fill="${S(u)}" opacity="${m}"/>`}if(l+="</svg>",o.nowPct!==void 0){let p=Math.min(100,Math.max(0,o.nowPct));l+=`<div class="pc-now-marker" style="left:${p.toFixed(1)}%"></div>`}return l+="</div>",l}function ke(t,e,o={}){let n=t.length;if(n===0)return'<div class="pc-cells"><div class="pc-chart-empty">No data</div></div>';let i=JSON.stringify(t.map(s=>({v:s.value,l:s.label}))),r=`<div class="pc-cells" data-slots='${h(i)}'>`;for(let s=0;s<n;s++){let a=t[s].value,l=t[s].label;if(a!==null){let p=e(a),c=S(p);r+=`<div class="pc-cell" style="background:${c};color:${c}" data-hour="${h(l)}" data-score="${a}"></div>`}else r+=`<div class="pc-cell pc-cell-empty" data-hour="${h(l)}"></div>`}return r+="</div>",r}function Ao(){let t=document.createElement("div");t.className="pc-strip-tooltip",t.style.display="none";let e=null;return{element:t,show(o,n,i){e&&(clearTimeout(e),e=null),t.textContent=i,t.style.display="",t.style.left=`${n}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function mr(){let t=document.createElement("div");t.className="pc-strip-tooltip pc-strip-tooltip-fixed",t.style.display="none";let e=null;return{element:t,show(o,n,i){e&&(clearTimeout(e),e=null),t.textContent=i,t.style.display="",t.style.left=`${n}px`,t.style.top=`${o.top-28}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function Co(t,e=5){let o=new Date,n=Date.now()-t,i="";for(let r=0;r<e-1;r++){let s=new Date(n+r/(e-1)*t);i+=`<span class="pc-time-label">${dt(s)}</span>`}return i+=`<span class="pc-time-label">${dt(o)}</span>`,i}function Jt(t,e,o){let n=Math.max(0,Math.min(1,(t-e.left)/e.width));return Math.min(o-1,Math.floor(n*o))}var gl=2e3;function Nn(t,e,o,n){let i=null,r=a=>{let l=o.getBoundingClientRect(),p=a-l.left;p>=0&&p<=l.width&&(e.style.left=`${n+p}px`,e.style.display="")},s=()=>{e.style.display="none",i&&(clearTimeout(i),i=null)};t.addEventListener("pointermove",a=>{a.pointerType!=="touch"&&r(a.clientX)}),t.addEventListener("pointerleave",s),t.addEventListener("pointerdown",a=>{a.pointerType==="touch"&&(r(a.clientX),i&&clearTimeout(i),i=setTimeout(s,gl))}),t.addEventListener("pointerup",a=>{a.pointerType})}function zn(t,e,o,n=""){if(!e||e.length===0)return;let i=e.length,r=null,s=null;t.addEventListener("pointerdown",a=>{if(a.pointerType==="touch"&&a.isPrimary===!1)return;let l=t.getBoundingClientRect();r=Jt(a.clientX,l,i),t.setPointerCapture(a.pointerId),s||(s=document.createElement("div"),s.className="pc-strip-drag-highlight",t.style.position="relative",t.appendChild(s)),s.style.display="",s.style.left=`${(r/i*100).toFixed(1)}%`,s.style.width="0%"}),t.addEventListener("pointermove",a=>{if(r===null||!s)return;let l=t.getBoundingClientRect(),p=Jt(a.clientX,l,i),c=Math.min(r,p),u=Math.max(r,p);s.style.left=`${(c/i*100).toFixed(1)}%`,s.style.width=`${((u-c+1)/i*100).toFixed(1)}%`}),t.addEventListener("pointerup",a=>{if(r===null){r=null;return}let l=t.getBoundingClientRect(),p=Jt(a.clientX,l,i),c=Math.min(r,p),u=Math.max(r,p),m=e.slice(c,u+1).filter(d=>d.v!==null);if(m.length>0){let d=m.map($=>$.v),f=(d.reduce(($,C)=>$+C,0)/d.length).toFixed(1),g=Math.min(...d),w=Math.max(...d),v=e[c]?.l||"",b=e[u]?.l||"",y=`${v} \u2013 ${b}: avg ${f}${n}, ${g}${n} \u2013 ${w}${n}`,_=t.getBoundingClientRect();o.show(_,(c+u)/2/i*_.width,y),setTimeout(()=>o.hide(),3e3)}r=null})}var Ln=24,vl=Ln;function bl(t){if(!Array.isArray(t)||t.length===0)return null;let e=Date.now()-Ln*3600*1e3,o=t.filter(i=>i&&i.t>=e&&Number.isFinite(i.v));return o.length===0?null:o.reduce((i,r)=>i+r.v,0)/o.length}function Mo(t,e,o,n){let i='<div class="pc-strip-rows">';i+='<div class="pc-strip-crosshair"></div>';let r=0,s=0,a="\xB0C",l=1/0,p=-1/0;for(let u of t){let{entityId:m,zoneName:d,zoneEntities:f,zoneState:g}=rt(u,o,e),v=ht(m,e,f,u)?.entityId||m,b=n?.data?.[v]||[];g.unit&&(a=g.unit);let y=ko(b,vl,Ln*3600*1e3);for(let M of y)M.value!==null&&Number.isFinite(M.value)&&(M.value<l&&(l=M.value),M.value>p&&(p=M.value));let _=ke(y,at),$=bl(b);$!==null&&(r+=$,s+=1);let C=$===null?"--":`${Z($)}${h(g.unit||"\xB0C")}`,E=wt(g);i+=`<div class="pc-timeline-group-row pc-timeline-row${E}" data-entity="${h(m)}" data-zone="${h(d)}">`,i+=`<span class="pc-timeline-group-name pc-zone-label">${h(g.name)}</span>`,i+=_,i+=`<span class="pc-timeline-group-stat">${h(C)}</span>`,i+="</div>"}i+="</div>",i+=wl();let c=l<=p?{min:l,max:p}:null;return i+=yl(r,s,a,t.length,c),i}function wl(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span class="pc-timeline-group-stat-head">24h avg</span></div>'}function yl(t,e,o,n,i){let r=e>0?t/e:null,s=r===null?"\u2014":`${Z(r)}${h(o)}`;return'<div class="pc-timeline-group-footer">'+_l(o,i)+`<span><strong>Home avg ${h(s)}</strong> \xB7 ${n} zones \xB7 24h</span></div>`}function _l(t,e){let o=t?.includes("F"),n=l=>o?Math.round(l*9/5+32):l,i=$e.map((l,p)=>{if(!e)return!0;let c=p===0?-1/0:$e[p-1].upper;return(l.upper===null?1/0:l.upper)>=e.min&&c<=e.max}),r=i.indexOf(!0),s=i.lastIndexOf(!0),a='<span class="pc-temp-legend">';for(let l=r;l<=s;l++){let p=$e[l],c=l===0?null:$e[l-1].upper,u;l===r?u=p.upper===null?`\u2265${c!==null?n(c):""}${t}`:`\u2264${n(p.upper)}${t}`:l===s?u=`\u2265${c!==null?n(c):0}${t}`:u=`${c!==null?n(c):0}\u2013${n(p.upper)}${t}`,a+=`<span class="pc-temp-legend-pill"><span class="pc-temp-legend-pip" style="background:${S(p.color)}"></span>${h(u)}</span>`}return a+="</span>",a}function hr(t,e,o,n,i){if(!t||t.length===0)return"";let r=Number(e?.hours_to_show)||24,s=e?.mode||"timeline",a=Number(e?.slots_per_hour)||2,p=(e?.attribute||"temperature")==="humidity",c=p?qe:at,u=s==="heatmap"?r:r*a,m=r*36e5,d=Date.now()-m,f=(Date.now()-d)/m*100,g=p?"Humidity":"Thermal",w=s==="heatmap"?"Heatmap":"Timeline",v='<div class="pc-section pc-section-thermal-strip">';if(v+='<div class="pc-section-header">',v+=`<div class="pulse-section-label">${h(String(Number(r)))}h ${h(g)} ${h(w)}</div>`,v+='<span class="pc-section-subtitle">Tap a zone for details</span>',v+="</div>",s==="heatmap"&&!p)return v+='<div class="pc-zone-detail" id="timeline-detail"></div>',v+=Mo(t,o,n,i),v+="</div>",v;v+='<div class="pc-zone-detail" id="timeline-detail"></div>',v+='<div class="pc-strip-rows">',v+='<div class="pc-strip-crosshair"></div>';for(let b of t){let{entityId:y,zoneName:_,zoneEntities:$,zoneState:C}=rt(b,n,o),M=(p?Yt(y,o,$,b):ht(y,o,$,b))?.entityId||y,F=b.name||o[y]?.attributes?.friendly_name||_,I=i?.data?.[M]||[],k=wt(C);if(v+=`<div class="pc-timeline-row${k}" data-zone="${h(_)}" data-entity="${h(y)}">`,v+=`<span class="pc-zone-label">${h(F)}</span>`,I.length<2){let x=!!o[M],A=M in(i?.data||{});v+=`<div class="pc-strip-container"><div class="pc-chart-empty">${h(x&&!A?"Waiting for data":"No data")}</div></div>`}else{let x=ko(I,u,m),T=`${F} ${p?"humidity":"temperature"} over ${r}h`;s==="heatmap"?v+=ke(x,c,{ariaLabel:T}):v+=To(x,c,{ariaLabel:T,nowPct:f})}v+="</div>"}return v+="</div>",v+='<div class="pc-time-axis">',v+=Co(m),v+="</div>",v+="</div>",v}var xl={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function fr(t,e,o,n){if(t==null||e===null||e===void 0||isNaN(t)||isNaN(e))return null;let i=100;if(i-=Math.min(50,Math.abs(t-e)*10),o!=null&&(i-=Math.min(25,Math.abs(o-45)*.5)),n!=null){let r=xl[n]??50;i=i*.7+r*.3}return Math.max(0,Math.min(100,Math.round(i)))}function gr(t){if(t>=80)return`rgba(52, 199, 89, ${(.35+t/100*.55).toFixed(2)})`;if(t>=50){let e=(t-50)/30;return`rgba(${Math.round(255-e*50)}, ${Math.round(159+e*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-t)/50*.5).toFixed(2)})`}function Eo(t,e,o=72e5){if(t.length===0)return null;let n=0,i=t.length-1;for(;n<i;){let a=n+i>>1;t[a].t<e?n=a+1:i=a}let r=null,s=1/0;for(let a=Math.max(0,n-1);a<=Math.min(t.length-1,n);a++){let l=Math.abs(t[a].t-e);l<s&&isFinite(t[a].v)&&(s=l,r=t[a].v)}return s<=o?r:null}function vr(t,e,o,n,i){if(!t||t.length===0)return"";let r=Number(e?.slots_per_hour)||1,s=Number(e?.hours_to_show)||24,a=e?.mode||"heatmap",l=r*s,p=s*36e5,c=Date.now()-p,u=(Date.now()-c)/p*100,m=a==="timeline"?"Comfort Timeline":"Comfort Heatmap",d='<div class="pc-section pc-section-comfort-strip">';d+='<div class="pc-section-header">',d+=`<div class="pulse-section-label">${h(String(Number(s)))}h ${h(m)}</div>`,d+='<span class="pc-section-subtitle">Tap a zone for details</span>',d+="</div>",d+='<div class="pc-zone-detail" id="heatmap-detail"></div>',d+='<div class="pc-heatmap-body">',d+='<div class="pc-strip-crosshair"></div>';for(let f=0;f<t.length;f++){let g=t[f],{entityId:w,zoneName:v,zoneEntities:b,zoneState:y}=rt(g,n,o),_=g.name||o[w]?.attributes?.friendly_name||v,C=ht(w,o,b,g).entityId,M=Yt(w,o,b,g)?.entityId||null,F=i?.data?.[C]||[],I=M?i?.data?.[M]||[]:[],k=o[w]?.attributes?.temperature??null,x=b.comfort_level,A=x&&o[x]?.state||null,T=[],L=p/l,O=null;if(F.length>0){let N=Eo(F,c,1/0),B=I.length>0?Eo(I,c,1/0):null;N!==null&&(O=fr(N,k,B,A))}for(let N=0;N<l;N++){let q=c+N*L+L/2,H=Eo(F,q),V=Eo(I,q),z=fr(H,k,V,A);z!==null&&(O=z);let D=new Date(q),U=dt(D);T.push({value:O,time:q,label:U})}let W=wt(y);d+=`<div class="pc-heatmap-row${W}" data-zone="${h(v)}" data-idx="${f}">`,d+=`<span class="pc-zone-label">${h(_)}</span>`;let R=`${_} comfort over ${s}h`;a==="timeline"?d+=To(T,gr,{ariaLabel:R,nowPct:u}):d+=ke(T,gr,{ariaLabel:R}),d+="</div>"}return d+="</div>",d+='<div class="pc-heatmap-time-axis">',d+=Co(p),d+="</div>",d+='<div class="pc-heatmap-legend">',d+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-good"></div>\u226580</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-fair"></div>50\u201379</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-poor"></div>&lt;50</div>',d+="</div>",d+="</div>",d}function br(t,e,o,n,i,r,s){let a=r+(s-r)*.35,l=r+(s-r)*.65,p=t-o,c=e-n,u=t+o,m=e+n,d=`M${r},${p.toFixed(1)}`;return d+=` C${a.toFixed(1)},${p.toFixed(1)} ${l.toFixed(1)},${c.toFixed(1)} ${s},${c.toFixed(1)}`,d+=` L${s},${m.toFixed(1)}`,d+=` C${l.toFixed(1)},${m.toFixed(1)} ${a.toFixed(1)},${u.toFixed(1)} ${r},${u.toFixed(1)}`,d+=" Z",d}function $l(t,e,o,n){let i=o+(n-o)*.35,r=o+(n-o)*.65;return`M${o},${t.toFixed(1)} C${i.toFixed(1)},${t.toFixed(1)} ${r.toFixed(1)},${e.toFixed(1)} ${n},${e.toFixed(1)}`}function Rn(t,e,o){if(!t||t.length===0)return"";let n=Rt(),i=[],r=!1;for(let k of t){let{entityId:x,zoneEntities:A,zoneState:T}=rt(k,o,e);(T.heatingPower>0||A.heating_power||e[x]?.attributes?.heating_power!==void 0)&&(r=!0),i.push({name:T.name,power:T.heatingPower,temp:T.currentTemp,target:T.targetTemp,unit:T.unit,hvacAction:T.hvacAction})}let s=i.length>0?Math.round(i.reduce((k,x)=>k+x.power,0)/i.length):0,a='<div class="pc-section pc-section-energy-flow">';if(a+='<div class="pc-section-header">',a+='<div class="pulse-section-label">Energy Flow</div>',r&&(a+=`<span class="pc-energy-flow-header-value" style="color:${S(ne.heating.fallback)}">${h(s)}% avg</span>`),a+="</div>",!r)return a+='<div class="pc-chart-empty">No heating data</div></div>',a;let l=360,p=i.length<=3?44:i.length<=6?38:34,c=15,u=Math.max(80,i.length*p+30),m=i.length*p,d=Math.max(40,Math.min(m*.7,m-16)),f=Math.max(36,d*.6),g=Math.max(50,f/2+14),w=l-60,v=u/2,b=22,y=2,_=d/Math.max(i.length,1)*.7,$=ne.heating.fallback,C="var(--pulse-disabled)",E=i.some(k=>k.power>0||k.hvacAction==="heating"||k.hvacAction==="cooling"),M=i.filter(k=>k.power>0).length;a+=`<svg viewBox="0 0 ${l} ${u}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${S(u)}px;display:block">`,a+="<defs>",a+=Ft("flow-glow",ye(l,360).toFixed(1));for(let k=0;k<i.length;k++){let x=i[k].power>0||i[k].hvacAction==="heating"||i[k].hvacAction==="cooling",A=x?$:C,T=i[k].power;if(x){let L=T>0?(4.5-T/100*3.3).toFixed(1):"5.0";a+=`<linearGradient id="flow-g${k}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,a+=`<stop offset="0%" stop-color="${S(A)}" stop-opacity="0.3"/>`,a+=`<stop offset="50%" stop-color="${S(A)}" stop-opacity="1.0"/>`,a+=`<stop offset="100%" stop-color="${S(A)}" stop-opacity="0.3"/>`,n||(a+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${L}s" repeatCount="indefinite"/>`,a+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${L}s" repeatCount="indefinite"/>`),a+="</linearGradient>"}else a+=`<linearGradient id="flow-g${k}" x1="0" y1="0" x2="1" y2="0">`,a+=`<stop offset="0%" stop-color="${S(A)}" stop-opacity="0.15"/>`,a+=`<stop offset="50%" stop-color="${S(A)}" stop-opacity="0.25"/>`,a+=`<stop offset="100%" stop-color="${S(A)}" stop-opacity="0.1"/>`,a+="</linearGradient>"}a+="</defs>";let F=E?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)",I=E?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)";a+=`<rect x="${g-f/2}" y="${v-d/2}" width="${f}" height="${d}" rx="8" fill="${S(F)}" stroke="${S(I)}" stroke-width="1"/>`,a+=`<text x="${g}" y="${v-d/2-6}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">Boiler</text>`;for(let k=0;k<i.length;k++){let x=i[k],A=c+k*p+20,T=x.power>0?y+x.power/100*(b-y):y,L=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",O=L?' class="pc-ribbon-active"':"",W=v+(k-(i.length-1)/2)*_,R=br(W,A,T/2,T/2,l,g+f/2,w-12);if(a+=`<path d="${R}" fill="url(#flow-g${k})"${O}${L?' filter="url(#flow-glow)"':""} data-zone="${h(x.name)}" data-zone-idx="${k}">`,a+=`<title>${h(x.name)}: ${Math.round(x.power)}% heating power</title></path>`,x.power>0&&!n){let V=Ji(x.power,20,M),z=Qi(x.power),D=tr(T,b),U=(D*.8).toFixed(1),G=$l(W,A,g+f/2,w-12);a+=`<g class="pc-flow-particles" data-zone="${h(x.name)}" data-zone-idx="${k}" style="will-change:transform">`;for(let tt=0;tt<V;tt++){let et=(tt*(z/V)).toFixed(2);a+=`<circle r="${D.toFixed(1)}" fill="${S($)}" opacity="0.8"`,a+=` filter="drop-shadow(0 0 ${U}px ${S($)})">`,a+=`<animateMotion dur="${z.toFixed(1)}s" begin="${et}s" repeatCount="indefinite"`,a+=` path="${G}"/>`,a+="</circle>"}a+="</g>"}let N=L?"var(--pulse-text-primary)":"var(--pulse-text-secondary)",B=L?' font-weight="500"':"";a+=`<text x="${w}" y="${(A-1).toFixed(1)}" font-size="14" fill="${S(N)}"${B}>${h(x.name)}</text>`;let q=L?S($):"var(--pulse-text-secondary)",H=L?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`;a+=`<text x="${w}" y="${(A+14).toFixed(1)}" font-size="10" fill="${q}">${h(H)}</text>`}return a+="</svg>",a+="</div>",a}function wr(t,e,o,n){if(!t||!e||e.length===0)return!1;let i=t.querySelector("svg");if(!i)return!1;let r=[];for(let k of e){let{zoneState:x}=rt(k,n,o);r.push({name:x.name,power:x.heatingPower,temp:x.currentTemp,unit:x.unit,hvacAction:x.hvacAction})}let s=i.querySelectorAll("path[data-zone]");if(s.length!==r.length)return!1;let a=ne.heating.fallback,l="var(--pulse-disabled)",p=r.some(k=>k.power>0||k.hvacAction==="heating"||k.hvacAction==="cooling"),c=360,u=r.length<=3?44:r.length<=6?38:34,m=15,d=Math.max(80,r.length*u+30),f=r.length*u,g=Math.max(40,Math.min(f*.7,f-16)),w=Math.max(36,g*.6),v=Math.max(50,w/2+14),b=c-60,y=d/2,_=22,$=2,C=g/Math.max(r.length,1)*.7,E=Math.round(r.reduce((k,x)=>k+x.power,0)/r.length),M=t.querySelector(".pc-energy-flow-header-value");M&&(M.textContent=`${E}% avg`);let F=i.querySelector("rect");F&&(F.setAttribute("fill",p?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)"),F.setAttribute("stroke",p?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)"),F.setAttribute("stroke-width",p?"0.5":"1"));let I=i.querySelectorAll("text");for(let k=0;k<r.length;k++){let x=r[k],A=s[k],T=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",L=m+k*u+20,O=x.power>0?$+x.power/100*(_-$):$,W=y+(k-(r.length-1)/2)*C,R=br(W,L,O/2,O/2,c,v+w/2,b-12);A.setAttribute("d",R),T?(A.classList.add("pc-ribbon-active"),A.setAttribute("filter","url(#flow-glow)")):(A.classList.remove("pc-ribbon-active"),A.removeAttribute("filter"));let N=A.querySelector("title");N&&(N.textContent=`${x.name}: ${Math.round(x.power)}% heating power`);let B=i.querySelector(`g.flow-particles[data-zone-idx="${k}"]`);B&&(B.style.display=x.power>0?"":"none");let q=i.querySelector(`#flow-g${k}`);if(q){let U=T?a:l,G=q.querySelectorAll("stop"),tt=q.querySelectorAll("animate");if(T){let et=x.power>0?(4.5-x.power/100*3.3).toFixed(1):"5.0";G.length>=3&&(G[0].setAttribute("stop-color",U),G[0].setAttribute("stop-opacity","0.3"),G[1].setAttribute("stop-color",U),G[1].setAttribute("stop-opacity","1.0"),G[2].setAttribute("stop-color",U),G[2].setAttribute("stop-opacity","0.3"));for(let lt of tt)lt.setAttribute("dur",`${et}s`);q.setAttribute("gradientUnits","objectBoundingBox")}else{G.length>=3&&(G[0].setAttribute("stop-color",U),G[0].setAttribute("stop-opacity","0.15"),G[1].setAttribute("stop-color",U),G[1].setAttribute("stop-opacity","0.25"),G[2].setAttribute("stop-color",U),G[2].setAttribute("stop-opacity","0.1"));for(let et of tt)et.remove()}}let H=1+k*2,V=2+k*2,z=I[H],D=I[V];if(z&&(z.textContent=x.name,z.setAttribute("fill",T?"var(--pulse-text-primary)":"var(--pulse-text-secondary)"),T?z.setAttribute("font-weight","500"):z.removeAttribute("font-weight")),D){let U=T?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`;D.textContent=U,D.setAttribute("fill",T?a:"var(--pulse-text-secondary)")}}return!0}var yr=6,Hn=2;function Dn(t,e,o,n,i,r){let s=i*Math.PI/180,a=r*Math.PI/180,l=r-i>180?1:0;return`M${(t+o*Math.cos(s)).toFixed(2)},${(e+o*Math.sin(s)).toFixed(2)} A${o.toFixed(2)},${o.toFixed(2)} 0 ${l} 1 ${(t+o*Math.cos(a)).toFixed(2)},${(e+o*Math.sin(a)).toFixed(2)} L${(t+n*Math.cos(a)).toFixed(2)},${(e+n*Math.sin(a)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 0 ${(t+n*Math.cos(s)).toFixed(2)},${(e+n*Math.sin(s)).toFixed(2)} Z`}function On(t,e,o,n,i){if(!t||t.length===0)return"";let r=Rt(),s=Number(e?.size)||280,a=e?.attribute||"temperature",l=a==="temperature"||a==="both",p=a==="humidity"||a==="both",c=s/2,u=s/2,m=s*120/280,d=1.5,w=(360-d*t.length)/t.length,v=[];for(let R of t){let{entityId:N,zoneState:B}=rt(R,n,o);v.push({name:B.name,temp:B.currentTemp,target:B.targetTemp,power:B.heatingPower,humidity:B.humidity,hvacAction:B.hvacAction,entityId:N,unit:B.unit,rowClass:wt(B)})}let b=e?.outdoor_temp_entity,y=b||n?.hubEntities?.outside_temp,_=null;if(y&&o[y]){let R=o[y];Q(R)||(_=R.attributes?.temperature!==void 0?String(R.attributes.temperature):R.state)}let $=y&&o[y]?.attributes?.unit_of_measurement||"\xB0C",C=e?.outdoor_humidity_entity,E=null;if(C&&o[C]){let R=o[C];Q(R)||(E=R.attributes?.humidity!==void 0?String(R.attributes.humidity):R.state)}let M="",F=a==="humidity"?E!==null?`${h(E)}%`:"--":_!==null?`${h(_)}${h($)}`:"--";a!=="humidity"&&p&&E!==null&&(M=`${h(E)}%`);let k={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[a]||"Home Thermal View",x=`<div class="pc-section pc-section-radial" data-attribute="${h(a)}"${b?` data-outdoor-temp-entity="${h(b)}"`:""}${C?` data-outdoor-humidity-entity="${h(C)}"`:""}>`;x+=`<div class="pulse-section-label">${h(k)}</div>`,x+='<div class="pc-radial-container">';let A=`r${Math.random().toString(36).slice(2,9)}`,T=`radial-glow-${A}`,L=R=>`heat-shimmer-${A}-${R}`;if(x+=`<svg class="pc-radial-svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}" role="img" aria-label="${h(k)}">`,x+="<defs>",x+=Ft(T,ye(s,280).toFixed(1)),!r)for(let R=0;R<v.length;R++){let N=v[R],B=gn(N.power,s);if(B<=0)continue;let q=45/Math.max(w,10),H=(.02*q).toFixed(4),V=(.04*q).toFixed(4);x+=`<filter id="${L(R)}" x="-5%" y="-5%" width="110%" height="110%">`,x+=`<feTurbulence type="turbulence" baseFrequency="${H} ${V}" numOctaves="2" result="turb">`,x+=`<animate attributeName="baseFrequency" values="${H} ${V};${(parseFloat(H)*1.5).toFixed(4)} ${V};${H} ${V}" dur="4s" repeatCount="indefinite"/>`,x+="</feTurbulence>",x+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${B.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,x+="</filter>"}x+="</defs>";for(let R=0;R<v.length;R++){let N=v[R],B=R*(w+d)-90,q=B+w,H=N.power>0||N.hvacAction==="heating"||N.hvacAction==="cooling",V=H?" pc-arc-active":"",z=[h(N.name)];l&&z.push(N.temp!==null?`${Z(N.temp)}${N.unit}`:"--"),p&&N.humidity!==null&&z.push(`${Math.round(N.humidity)}%`),z.push(H?`${N.hvacAction==="cooling"?"Cooling":"Heating"} ${N.power}%`:"Idle");let D=z.join(", ");x+=`<g class="pc-arc-group${V}" data-idx="${R}">`;let U=p&&a==="both"?m+Hn+yr+4:m+4,G=m-28-4,tt=Dn(c,u,U,G,B-d/2,q+d/2);if(x+=`<path d="${tt}" fill="transparent" class="pc-arc-hit"/>`,l){let et=N.temp!==null?at(N.temp):"var(--pulse-disabled)",lt=8+N.power/100*20,vt=m-lt,St=Dn(c,u,m,vt,B,q);if(x+=`<path d="${St}" fill="${S(et)}" class="pc-arc-path"`,gn(N.power,s)>0&&!r?x+=` filter="url(#${L(R)})"`:H&&(x+=` filter="url(#${T})"`),x+=`><title>${D}</title>`,H&&!r){let Mt=N.power>0?(4.5-N.power/100*3).toFixed(1):"5.0";x+=`<animate attributeName="opacity" values="1;0.82;1" dur="${Mt}s" repeatCount="indefinite"/>`}x+="</path>"}if(p&&N.humidity!==null){let et=qe(N.humidity),lt,vt;if(a==="both")lt=m+Hn+yr,vt=m+Hn;else{let it=8+N.power/100*20;lt=m,vt=m-it}let St=Dn(c,u,lt,vt,B,q);x+=`<path d="${St}" fill="${S(et)}" class="pc-arc-path" opacity="0.8">`,x+=`<title>${D}</title>`,x+="</path>"}x+="</g>"}x+="</svg>";let O=8;if(l)for(let R of v){let N=8+R.power/100*20;N>O&&(O=N)}let W=Math.round((m-O)*2);x+=`<div class="pc-center-info" id="radial-center" style="width:${W}px;height:${W}px">`,x+='<div class="pc-center-sheen" id="radial-sheen"></div>',x+=`<div class="pc-center-value">${F}</div>`,x+='<div class="pc-center-label">Outdoor</div>',x+=`<div class="pc-center-sub">${M}</div>`,x+="</div>",x+="</div>",x+='<div class="pc-zone-detail" id="radial-detail"></div>',x+='<div class="pc-radial-legend">';for(let R=0;R<v.length;R++){let N=v[R],B=a==="humidity"?N.humidity!==null?qe(N.humidity):"var(--pulse-disabled)":N.temp!==null?at(N.temp):"var(--pulse-disabled)",q="";l&&(q+=N.temp!==null?`${Z(N.temp)}${N.unit}`:"--"),l&&p&&(q+=" \xB7 "),p&&(q+=N.humidity!==null?`${Math.round(N.humidity)}%`:"--"),x+=`<div class="pc-legend-item${N.rowClass}" data-idx="${R}">`,x+=`<span class="pc-legend-dot" style="background:${S(B)}"></span>`,x+=`<span class="pc-legend-name">${h(N.name)}</span> <span class="pc-legend-temp">${h(q)}</span>`,x+="</div>"}return x+="</div>",x+="</div>",x}var Sl=5,_r={green:"var(--pulse-tier-moderate)",amber:"var(--pulse-tier-strong)",red:"var(--pulse-tier-gale)"},kl={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function Tl(t){if(t.length===0)return{label:"All Good",color:"green",detail:"All zones off"};let e=t.filter(r=>r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null&&r.targetTemp!==void 0&&Math.abs(r.currentTemp-r.targetTemp)<=1).length,o=t.length,n=e/o,i=o-e;return n>=.8?{label:"All Good",color:"green",detail:`${e} of ${o} zones at target`}:n>=.4?{label:"Warming Up",color:"amber",detail:`${i} zone${i!==1?"s":""} still catching up`}:{label:"Cold Start",color:"red",detail:`${i} of ${o} zones below target`}}function Al(t){let e=[],o=[],n=[];for(let i of t)i.isUnavailable?n.push(i):i.hvacAction==="off"||!i.targetTemp?o.push(i):e.push(i);return e.sort((i,r)=>{let s=i.currentTemp!==null&&i.currentTemp!==void 0&&i.targetTemp!==null?Math.abs(i.currentTemp-i.targetTemp):0;return(r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null?Math.abs(r.currentTemp-r.targetTemp):0)-s}),o.sort((i,r)=>i.name.localeCompare(r.name)),n.sort((i,r)=>i.name.localeCompare(r.name)),[...e,...o,...n]}function Cl(t){if(t.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let e=t.filter(a=>a.currentTemp!==null&&a.currentTemp!==void 0&&a.targetTemp!==null&&a.targetTemp!==void 0&&Math.abs(a.currentTemp-a.targetTemp)<=1).length,o=t.length,n=(t.reduce((a,l)=>a+(l.currentTemp??0),0)/o).toFixed(1),i=(t.reduce((a,l)=>a+(l.targetTemp??0),0)/o).toFixed(1),r=Math.round(t.reduce((a,l)=>a+l.heatingPower,0)/o),s=t[0].unit||"\xB0C";return{onTarget:`${e}/${o}`,avgActual:`${n}${s}`,avgTarget:`${i}${s}`,avgPower:`${r}%`}}function Ml(t){let e=h(t.entityId),o=h(t.name),n=h(t.unit||"\xB0C"),i=!t.isUnavailable&&t.hvacAction!=="off"&&t.targetTemp,r,s;if(t.isUnavailable)r='<span class="pc-home-status-actual pc-off">--</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">Unavailable</span>',s='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';else if(!i)r=`<span class="pc-home-status-actual pc-off">${t.currentTemp!==null&&t.currentTemp!==void 0?`${h(t.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow"></span><span class="pc-home-status-target">Off</span>`,s='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">Off</span></div>';else if(r=`<span class="pc-home-status-actual">${t.currentTemp!==null&&t.currentTemp!==void 0?`${h(t.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">${h(t.targetTemp)}${n}</span>`,t.currentTemp!==null&&t.currentTemp!==void 0){let p=t.currentTemp-t.targetTemp,c=Math.abs(p),u=Math.min(c/Sl,1)*50,m=p<0?`${S(50-u)}%`:"50%",d=`${S(u)}%`,f=c<1?"green":c<=2.5?"amber":"red",g=_r[f],v=`${p>=0?"+":"\u2212"}${h(c.toFixed(1))}\xB0`;s=`<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div><div class="pc-home-status-bar-fill" style="left:${m};width:${d};background:${S(g)}"></div></div><span class="pc-home-status-delta-text" style="color:${S(g)}">${v}</span></div>`}else s='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';return`<div class="pc-home-status-row${wt(t)}" role="button" tabindex="0" data-entity="${e}"><span class="pc-home-status-zone-name">${o}</span><div class="pc-home-status-temps">${r}</div>`+s+"</div>"}function Pn(t,e,o,n){if(!t||t.length===0)return"";let i=t.map(m=>rt(m,o,e).zoneState),r=i.filter(m=>!m.isUnavailable&&m.hvacAction!=="off"&&m.targetTemp),s=Tl(r),a=_r[s.color],l=kl[s.color],p=Al(i),c=Cl(r),u='<div class="pc-section pc-section-home-status">';u+='<div class="pulse-section-label">Home Status</div>',n?.show_hero===!1&&(u+='<div class="pc-home-status-hero">',u+=`<ha-icon class="pc-home-status-icon" icon="${h(l)}" style="color:${S(a)}"></ha-icon>`,u+=`<div class="pc-home-status-label" style="color:${S(a)}">${h(s.label)}</div>`,u+=`<div class="pc-home-status-detail">${h(s.detail)}</div>`,u+="</div>"),u+='<div class="pc-home-status-zones">';for(let m of p)u+=Ml(m);return u+="</div>",u+='<div class="pc-home-status-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.onTarget)}</div><div class="pc-stat-label">On Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.avgActual)}</div><div class="pc-stat-label">Avg Actual</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.avgTarget)}</div><div class="pc-stat-label">Avg Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.avgPower)}</div><div class="pc-stat-label">Avg Power</div></div>`,u+="</div>",u+="</div>",u}var Bn={comfort:"comfort_level"};function El(t,e,o,n){if(!(t in Bn))return!0;let i=Bn[t];if(!e||e.length===0)return!1;for(let r of e){let s=Y(r.entity),l=(o?.zoneEntities?.[s]||{})[i];if(l&&!Q(n[l]))return!0}return!1}function xr(t,e,o,n){let i=Bn[t];if(!i)return null;let s=(o?.zoneEntities?.[e]||{})[i];if(!s)return null;let a=n[s];if(Q(a))return null;if(t==="comfort"){let p=a.attributes||{},c=parseFloat(p.temperature),u=parseFloat(p.comfort_target);if(!Number.isFinite(c)||!Number.isFinite(u))return null;let m=Math.abs(c-u);return Math.max(0,Math.min(100,Math.round(100-m*10)))}let l=parseFloat(a.state);return Number.isFinite(l)?l:null}function $r(t,e,o){let n=["power","temp","humidity"];return El("comfort",t,e,o)&&n.push("comfort"),n}var Sr="var(--pulse-tier-calm)";function Fl(t){return t<=40?"var(--pulse-tier-moderate)":t<=70?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}function Il(t){return t>=80?"var(--pulse-tier-moderate)":t>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}var kr={power:{label:"Power",unit:"%",max:100,colorFn:Fl},temp:{label:"Temp",unit:null,max:null,colorFn:()=>Sr},humidity:{label:"Humidity",unit:"%",max:100,colorFn:()=>Sr},comfort:{label:"Comfort",unit:"",max:100,colorFn:Il}};function Nl(t,e,o,n,i){if(e.isUnavailable)return null;switch(t){case"power":return e.heatingPower;case"temp":return e.currentTemp;case"humidity":return e.humidity;case"comfort":return xr("comfort",o,n,i);default:return null}}function zl(t,e){let o=t.filter(l=>l!=null);if(o.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let n=o.reduce((l,p)=>l+p,0)/o.length,i=Math.max(...o),r=Math.min(...o),s=i-r,a=e||"";return{avg:`${Z(n)}${a}`,high:`${Z(i)}${a}`,low:`${Z(r)}${a}`,spread:`${Z(s)}${a}`}}function Fo(t,e,o,n="power"){if(!t||t.length===0)return"";let i=$r(t,o,e),r=i.includes(n)?n:"power",s=kr[r];if(!s)return"";let a=[];for(let f of t){let{entityId:g,zoneName:w,zoneState:v}=rt(f,o,e),b=Nl(r,v,w,o,e);a.push({entityId:g,name:v.name,value:b,unit:v.unit||"\xB0C",rowClass:wt(v)})}a.sort((f,g)=>f.value===null&&g.value===null?0:f.value===null?1:g.value===null?-1:g.value-f.value);let l=a.map(f=>f.value).filter(f=>f!==null),p=s.max;p===null&&(p=l.length>0?Math.max(...l,30):30);let c=s.unit!==null?s.unit:a[0]?.unit||"\xB0C",u=`<div class="pc-section pc-section-zone-ranking" data-metric="${h(r)}">`;u+='<div class="pc-ranking-header">',u+='<div class="pulse-section-label">Zone Ranking</div>',u+='<div class="pc-ranking-tabs">';for(let f of i){let g=kr[f];if(!g)continue;u+=`<div class="pc-ranking-tab${f===r?" pc-active":""}" data-metric="${h(f)}">${h(g.label)}</div>`}u+="</div></div>",u+='<div class="pc-ranking-list">';for(let f=0;f<a.length;f++){let g=a[f],w=f+1,v=w===1&&g.value!==null?" pc-top":"",b=g.value!==null&&p>0?Math.round(g.value/p*100):0,y=g.value!==null?s.colorFn(g.value):"",_=g.value!==null?`${b}%`:"0%",$;g.value===null?$="--":r==="temp"?$=`${g.value}${g.unit}`:$=`${g.value}${c}`,u+=`<div class="pc-rank-row${g.rowClass}" role="button" tabindex="0" data-entity="${h(g.entityId)}">`,u+=`<div class="pc-rank-num${v}">${w}</div>`,u+=`<div class="pc-rank-name">${h(g.name)}</div>`,u+=`<div class="pc-rank-bar-track"><div class="pc-rank-bar-fill" style="width:${S(_)};background:${S(y)}"></div></div>`,u+=`<div class="pc-rank-value">${h($)}</div>`,u+="</div>"}u+="</div>";let m=a.map(f=>f.value),d=zl(m,c);return u+='<div class="pc-ranking-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.avg)}</div><div class="pc-stat-label">Average</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.high)}</div><div class="pc-stat-label">Highest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.low)}</div><div class="pc-stat-label">Lowest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.spread)}</div><div class="pc-stat-label">Spread</div></div>`,u+="</div>",u+="</div>",u}var Ll=48,Tr=30,Ar=70;function qn(t,e){let o=Date.now(),n=24*3600*1e3,i=n/e,r=o-n,s=Array.from({length:e},()=>({state:"idle",power:0}));if(!Array.isArray(t)||t.length===0)return s;for(let a=0;a<e;a++){let l=r+a*i,p=l+i,c=t.filter(w=>w&&w.t>=l&&w.t<p);if(c.length===0)continue;let u={heating:0,cooling:0,idle:0,off:0},m=0,d=0;for(let w of c)u[w.state]!==void 0&&(u[w.state]+=1),(w.state==="heating"||w.state==="cooling")&&Number.isFinite(w.power)&&(m+=w.power,d+=1);let f=["heating","cooling","idle","off"].reduce((w,v)=>u[v]>u[w]?v:w,"idle"),g=d>0?m/d:0;s[a]={state:f,power:g}}return s}function Rl(t){let e="idle";return t.state==="heating"?t.power>=Ar?e="heat":t.power>=Tr?e="heat-mid":e="heat-low":t.state==="cooling"?t.power>=Ar?e="cool":t.power>=Tr?e="cool-mid":e="cool-low":t.state==="off"&&(e="off"),`pc-state-cell-${e}`}function Hl(t){let e=0,o=0;for(let n of t)n.state==="heating"?e+=30:n.state==="cooling"&&(o+=30);return{heatMin:e,coolMin:o}}function Mr(t){let e=0,o=0,n=0,i=0,r=0,s=0;for(let l of t)l.state==="heating"||l.state==="cooling"?(i+=1,l.state==="heating"?r+=1:s+=1,i>e&&(e=i,o=r,n=s)):(i=0,r=0,s=0);if(e===0)return{minutes:0,mode:"none"};let a="mixed";return o>0&&n===0?a="heat":n>0&&o===0&&(a="cool"),{minutes:e*30,mode:a}}function Er(t){if(t.length===0)return null;let e=t.length/24,o=Array.from({length:24},()=>0);for(let a=0;a<t.length;a++){let l=t[a];if(l.state==="heating"||l.state==="cooling"){let p=Math.floor(a/e);o[p]+=1}}let n=-1,i=0;for(let a=0;a<24;a++)o[a]>i&&(i=o[a],n=a);return n<0?null:{hour:(new Date(Date.now()-24*3600*1e3).getHours()+n)%24,minutes:Math.round(i*30)}}function Dl(t,e){if(t===0&&e===0)return"\u2014";let o=t+e,n=Math.floor(o/60),i=o%60;return i===0?`${n}h`:`${n}h ${i}m`}function Ol(t,e){return t>e&&t>0?"pc-state-active-heat":e>0?"pc-state-active-cool":""}function Pl(t){let o=Date.now()-864e5;return dt(new Date(o+t*18e5))}function Bl(t){if(t.state==="heating"||t.state==="cooling"){let e=t.state==="heating"?"heat":"cool";return t.power>0?`${e} ${Math.round(t.power)}%`:e}return t.state==="off"?"off":"idle"}function Fr(t,e,o,n){let i='<div class="pc-strip-rows">';i+='<div class="pc-strip-crosshair"></div>';let r=0,s=0;for(let a of t){let{entityId:l,zoneName:p,zoneState:c}=rt(a,o,e),u=n?.stateData?.[l]||[],m=qn(u,Ll),{heatMin:d,coolMin:f}=Hl(m);r+=d,s+=f;let g=Dl(d,f),w=Ol(d,f),v=wt(c);i+=`<div class="pc-timeline-group-row pc-state-row${v}" data-entity="${h(l)}" data-zone="${h(p)}">`,i+=`<span class="pc-timeline-group-name">${h(c.name)}</span>`,i+='<div class="pc-state-timeline-cells pc-cells">';for(let b=0;b<m.length;b++){let y=m[b],_=Pl(b),$=Bl(y);i+=`<span class="pc-state-cell pc-cell ${Rl(y)}" data-hour="${h(_)}" data-score="${h($)}"></span>`}i+="</div>",i+=`<span class="pc-timeline-group-stat ${w}">${h(g)}</span>`,i+="</div>"}return i+="</div>",i+=ql(),i+=Vl(r,s,t.length),i}function ql(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span></span></div>'}function Cr(t){let e=Math.floor(t/60),o=t%60;return o===0?`${e}h`:`${e}h ${o}m`}function Vl(t,e,o){let n=t>0?`${Cr(t)} heat`:"",i=e>0?`${Cr(e)} cool`:"",s=[n,i].filter(Boolean).join(" \xB7 ")||"\u2014";return'<div class="pc-timeline-group-footer">'+Wl()+`<span><strong>${h(s)}</strong> \xB7 ${o} zones</span></div>`}function Wl(){return'<span class="pc-state-legend"><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-heat"></span>Heat</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-cool"></span>Cool</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-idle"></span>Idle</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-off"></span>Off</span></span>'}var Ul=new Set(["thermal","state"]),Ir={thermal:{label:"Thermal",subtitle:"Tap a zone for details"},state:{label:"State",subtitle:"Heat / cool demand by zone"}};function Vn(t,e,o,n,i){if(!e||e.length===0)return"";let r=t?.active_tab,s=typeof r=="string"&&Ul.has(r)?r:"thermal",a=`<div class="pc-section pc-section-timeline-group" data-active-tab="${h(s)}">`;a+='<div class="pc-section-header">',a+='<div class="pulse-section-label">24h Timeline</div>';let l=h(Ir[s].subtitle);a+=`<span class="pc-section-subtitle">${l}</span>`,a+="</div>",a+='<div class="pc-timeline-group-tabs" role="tablist">';for(let p of["thermal","state"])a+=`<div class="pc-timeline-group-tab${p===s?" pc-active":""}" role="tab" tabindex="0" aria-selected="${p===s}" data-tab="${h(p)}">${h(Ir[p].label)}</div>`;return a+="</div>",a+='<div class="pc-zone-detail" id="timeline-detail"></div>',a+='<div class="pc-timeline-group-body">',a+=s==="thermal"?Mo(e,o,n,i):Fr(e,o,n,i),a+="</div>",a+="</div>",a}var jl=[{key:"bridge",label:"Bridge",soloHeader:(t,e)=>"Bridge",predicate:We,render:(t,e,o,n)=>_o(t,e,n)},{key:"homekit",label:"HomeKit",soloHeader:(t,e)=>`HomeKit${$o(t,e)}`,predicate:Se,render:(t,e,o,n)=>So(t,e,n)},{key:"api",label:"API",soloHeader:(t,e)=>"API Usage",predicate:Ve,render:(t,e,o,n)=>yo(t,e,o,n)}];function Wn(t,e,o,n){let i=jl.filter(c=>c.predicate(e));if(i.length===0)return"";if(i.length===1){let c=i[0],u='<div class="pc-section pc-section-system-health-group">';return u+=`<div class="pulse-section-label">${h(c.soloHeader(e,o))}</div>`,u+='<div class="pc-system-health-group-body">',u+=c.render(e,o,t,n),u+="</div>",u+="</div>",u}let r=t?.active_tab,a=i.some(c=>c.key===r)?r:i[0].key,l=i.find(c=>c.key===a)||i[0],p=`<div class="pc-section pc-section-system-health-group" data-active-tab="${h(a)}">`;p+='<div class="pc-section-header">',p+='<div class="pulse-section-label">System Health</div>',p+="</div>",p+='<div class="pc-system-health-group-tabs" role="tablist">';for(let c of i){let u=c.key===a?" pc-active":"";p+=`<div class="pc-system-health-group-tab${u}" role="tab" tabindex="0" aria-selected="${c.key===a}" data-tab="${h(c.key)}">${h(c.label)}</div>`}return p+="</div>",p+='<div class="pc-system-health-group-body">',p+=l.render(e,o,t,n),p+="</div>",p+="</div>",p}var Gl=new Set(["heating","cooling","mixed"]),Xl=new Set(["subtle","medium","bold"]);function Nr(t,e){if(!t||!Gl.has(t))return"";let o=e&&Xl.has(e)?e:"medium";return`<div class="pc-atmosphere-wash pc-state-${t} pc-intensity-${o}" aria-hidden="true"></div>`}var Zl={heating:"Heating",cooling:"Cooling",mixed:"Mixed",idle:"Idle",off:"Off"},Yl=6;function Kl(t){let e="idle";return t.isUnavailable?e="unavail":t.hvacAction==="heating"?e="heating":t.hvacAction==="cooling"?e="cooling":t.hvacAction==="off"&&(e="off"),`pc-hero-dot-${e}`}function Jl(t){let e="idle";return t.isUnavailable?e="unavail":t.hvacAction==="heating"?e="heat":t.hvacAction==="cooling"?e="cool":t.hvacAction==="off"&&(e="off"),`pc-row-${e}`}function Un(t,e,o,n){if(!Array.isArray(t)||t.length===0)return"";let i=t.filter(b=>!b.isUnavailable),r=fo(t),s=t.filter(b=>!b.isUnavailable&&typeof b.currentTemp=="number"&&Number.isFinite(b.currentTemp)),a=s.length>0?s.reduce((b,y)=>b+y.currentTemp,0)/s.length:null,l=t[0]&&t[0].unit||"\xB0C",p=i.filter(b=>b.hvacAction==="heating").length,c=i.filter(b=>b.hvacAction==="cooling").length,u=Zl[r]||"Idle",m=a===null?"\u2014":`${Z(a)}${h(l)}`,d=`<div class="pc-hero pc-state-${r}">`;d+='<div class="pc-hero-top-row">',d+='<div class="pc-hero-temp-block">',d+='<div class="pc-hero-label">Home avg</div>',d+=`<div class="pc-hero-temp">${m}</div>`,d+="</div>",d+='<div class="pc-hero-dots">';for(let b of t){let y=Kl(b),_=[h(b.name)];!b.isUnavailable&&b.hvacAction&&_.push(h(b.hvacAction)),d+=`<span class="pc-hero-zone-dot ${y}" data-entity="${h(b.entityId)}" title="${_.join(" \u2014 ")}"></span>`}d+="</div>",d+='<div class="pc-hero-right">';let f=p+c,g=f>0?`${h(u)} \xB7 ${f} active`:`${h(u)} \xB7 ${i.length} ${i.length===1?"zone":"zones"}`;if(d+=`<div class="pc-hero-status">${g}</div>`,e?.hero_show_outside!==!1&&n&&typeof n.value=="number"&&Number.isFinite(n.value)){let b=n;d+='<div class="pc-hero-outside">',d+=`Outside ${Z(b.value)}${h(b.unit)}`,d+="</div>"}if(d+="</div>",d+="</div>",e?.hero_show_thermal_strip!==!1){let b=Ql(t,o);b&&(d+=b)}return d+="</div>",d}function Ql(t,e){let n=t.slice(0,Yl),i=t.length-n.length,r=!1;for(let a of n){let l=e?.get?.(a.entityId);if(Array.isArray(l)&&l.length>=2){r=!0;break}}if(!r)return"";let s='<div class="pc-hero-strips">';for(let a of n)s+=tc(a,e?.get?.(a.entityId)||[],24);return i>0&&(s+='<div class="pc-hero-zone-strip pc-hero-zone-strip-overflow">',s+=`<div class="pc-hero-zone-strip-label">+${i} more</div>`,s+="</div>"),s+="</div>",s}function tc(t,e,o){let n=Jl(t),i="";if(Array.isArray(e)&&e.length>=2){let r={minTemp:t.minTemp??18,maxTemp:t.maxTemp??26},s=t.isUnavailable?"off":t.hvacAction,a=Math.max(1,Math.floor(e.length/o));for(let l=0;l<o;l++){let p=e[Math.min(e.length-1,l*a)],c=cr(p.v,r,s);i+=`<span style="background:${S(c)}"></span>`}}else for(let r=0;r<o;r++)i+='<span class="pc-hero-zone-strip-cell-ghost"></span>';return`<div class="pc-hero-zone-strip ${n}" data-entity="${h(t.entityId)}"><div class="pc-hero-zone-strip-label">${h(t.name)}</div><div class="pc-hero-zone-strip-cells">${i}</div></div>`}function jn(t,e,o){let n={value:null,unit:"\xB0C",entityId:null};if(!o)return n;let i=t?.outdoor_temp_entity||e?.hubEntities?.outside_temp||null;if(!i){for(let p of Object.keys(o))if(p.startsWith("weather.")&&o[p]?.attributes?.temperature!==void 0){i=p;break}}if(!i||!o[i])return n;let r=o[i];if(Q(r))return{value:null,unit:"\xB0C",entityId:i};let s=r.attributes?.temperature!==void 0?r.attributes.temperature:r.state,a=Number.parseFloat(s),l=r.attributes?.unit_of_measurement||"\xB0C";return{value:Number.isFinite(a)?a:null,unit:l,entityId:i}}var zr=!1,ec=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),Lr=ec?(()=>{let t=new CSSStyleSheet;return t.replaceSync(fn),t})():null,oc=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut","timeline_group","system_health_group"]),nc={zones:".pc-section-zones",api:".pc-section-api",graph:".pc-section-graph",bridge:".pc-section-bridge",thermal_strip:".pc-section-thermal-strip",comfort_strip:".pc-section-comfort-strip",homekit:".pc-section-homekit",weather:".pc-section-weather",radial:".pc-section-radial",donut:".pc-section-donut",environment:".pc-section-environment",thermal:".pc-section-thermal",schedule:".pc-section-schedule",energy_flow:".pc-section-energy-flow",home_status:".pc-section-home-status",zone_ranking:".pc-section-zone-ranking",timeline_group:".pc-section-timeline-group",system_health_group:".pc-section-system-health-group"},Gn=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_stateTimelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_zoneRankingTabsAbort=null;_timelineGroupTabsAbort=null;_timelineGroupCellTooltipAbort=null;_systemHealthGroupTabsAbort=null;_sparklinePathCache=new Map;_radialAnimState={shimmer:!1,sheen:!1};_historyGen=0;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=ir()}setConfig(e){this._stopRadialAnimations(),this._historyGen++,this._config=er(e),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(e){if(this._hass=e,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let o=Date.now();if(o-this._lastUpdateTime<200)return;this._lastUpdateTime=o;let n=this._hass.states,i=(this._config._zones||[]).some(r=>n[r.entity]!==this._prevStates[r.entity]);i&&this._updateZones(),this._updateSections(),i&&this._updateHero(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;this._historyGen++;let o=(this._config._zones||[]).map(n=>Y(n.entity));if(this._discovery=Zi(this._hass.states,o,this._hass.entities),!zr&&this._discovery.isTadoCE){zr=!0;let n=Object.entries(this._discovery.hubEntities).map(([i,r])=>`${i}=${r}`);console.info(`${oe} Tado CE hub discovery \u2014 found: ${n.join(", ")}`),this._discovery.missingHubKeys.length>0&&console.warn(`${oe} Tado CE hub discovery \u2014 missing: ${this._discovery.missingHubKeys.join(", ")}. Affected sections may render with degraded data.`)}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let e=this._historyCache?.data;if(e)for(let[o,n]of Object.entries(e)){if(!n||n.length<2)continue;let i=Pt(n,340,36,48);i&&this._sparklinePathCache.set(o,i)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let e=this._discovery,o=e.hubEntities,n=this._config._zones||[];this._rerenderTargets=[{selector:".pc-section-zones",watchIds:[o.home_state].filter(Boolean),render:()=>{let i=this._config,r=this._hass?.states||{};return xn(n,i,r,e,this._historyCache)}},{selector:".pc-section-api",watchIds:[o.api_usage,o.api_limit,o.api_status,o.next_sync,o.token_status].filter(Boolean),render:()=>{let i=this._hass?.states||{},s=(this._config?.sections||[{type:"zones"}]).find(a=>(typeof a=="string"?a:a.type)==="api")||{};return $n(o,i,s,this._historyCache)}},{selector:".pc-section-homekit",watchIds:[o.homekit_connected,o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean),render:()=>{let i=this._hass?.states||{};return kn(o,i,this._historyCache)}},{selector:".pc-section-bridge",watchIds:[o.bridge_connected,o.boiler_flow_temp,o.wc_status,o.wc_target_flow].filter(Boolean),render:()=>{let i=this._hass?.states||{};return Sn(o,i,this._historyCache)}},{selector:".pc-section-weather",watchIds:[o.outside_temp,o.weather,o.solar_intensity].filter(Boolean),render:()=>{let i=this._hass?.states||{};return Tn(o,i,this._historyCache)}},{selector:".pc-section-environment",watchIds:n.flatMap(i=>{let r=Y(i.entity),s=e.zoneEntities?.[r]||{};return[s.mold_risk,s.condensation,s.comfort_level,s.surface_temp,s.dew_point].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return An(n,i,e)}},{selector:".pc-section-thermal",watchIds:n.flatMap(i=>{let r=Y(i.entity),s=e.zoneEntities?.[r]||{};return[s.heating_rate,s.thermal_inertia,s.preheat_time,s.confidence].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return Cn(n,i,e)}},{selector:".pc-section-schedule",watchIds:n.flatMap(i=>{let r=Y(i.entity),s=e.zoneEntities?.[r]||{};return[s.next_schedule,s.next_sched_temp,s.schedule_deviation,s.preheat_advisor,s.comfort_target].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return Mn(n,i,e)}},{selector:".pc-section-radial",watchIds:n.map(i=>i.entity),render:()=>{let i=this._hass?.states||{},s=(this._config?.sections||[{type:"zones"}]).find(a=>(typeof a=="string"?a:a.type)==="radial")||{};return On(n,s,i,e,this._historyCache)}},{selector:".pc-section-donut",watchIds:(()=>{let s=(this._config?.sections||[]).find(a=>(typeof a=="string"?a:a.type)==="donut")?.source;return s==="api_breakdown"&&o.api_breakdown?[o.api_breakdown]:s==="homekit_saved"?[o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let i=this._hass?.states||{},s=(this._config?.sections||[]).find(a=>(typeof a=="string"?a:a.type)==="donut")||{};return In(s,o,i)}},{selector:".pc-section-graph",watchIds:[],render:()=>{let i=this._hass?.states||{},s=(this._config?.sections||[{type:"zones"}]).find(a=>(typeof a=="string"?a:a.type)==="graph")||{};return Fn(s,n,this._historyCache,i,e)}},{selector:".pc-section-home-status",watchIds:n.map(i=>i.entity),render:()=>{let i=this._hass?.states||{};return Pn(n,i,e,this._config||{})}},{selector:".pc-section-zone-ranking",watchIds:n.map(i=>i.entity),render:()=>{let i=this._hass?.states||{},s=this._shadow.querySelector(".pc-section-zone-ranking")?.getAttribute("data-metric")||"power";return Fo(n,i,e,s)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,o=this._hass.states,n=this._discovery,i=e._zones||[],r=e.layout==="compact",s=e.entity_row===!0,a="";Lr?this._shadow.adoptedStyleSheets=[Lr]:a+=`<style>${fn}</style>`;let l=i.map(u=>{let m=Y(u.entity),d=n.zoneEntities?.[m]||{};return we(u.entity,d,o,u,e)}),p=fo(l);if(s||(a+=`<ha-card${r?' class="pc-compact"':""}>`),e.show_atmosphere!==!1&&(a+=Nr(p,e.atmosphere_intensity)),a+='<div class="pc-card-content">',e.title&&(a+=`<div class="pulse-title">${h(e.title)}</div>`),e.show_hero!==!1){let u=jn(e,n,o),m=f=>{let g=i.findIndex(_=>_.entity===f);if(g<0)return f;let w=i[g],v=Y(f),b=n?.zoneEntities?.[v]||{};return ht(f,o,b,w)?.entityId||f},d=vn(i,this._historyCache,m);a+=Un(l,e,d,u)}let c=e.sections||[{type:"zones"}];for(let u=0;u<c.length;u++){let m=c[u],d=this._renderSection(m,i,o,n);a+=d.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${u}"`)}a+="</div>",s||(a+="</ha-card>"),this._shadow.innerHTML=a,this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let e=this._shadow.querySelectorAll(".pc-zone-row"),o=this._config._zones||[];for(let n=0;n<e.length&&n<o.length;n++){let i=e[n],r=o[n],s=r.entity,a=i.__pulseCleanup;typeof a=="function"&&a();let l=new AbortController,{signal:p}=l,c=0,u=null,m=null,d=!1;i.__pulseCleanup=()=>{l.abort(),u&&clearTimeout(u),m&&clearTimeout(m),delete i.__pulseCleanup},i.addEventListener("keydown",g=>{let w=g;(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),this._fireAction(s,r,"tap_action"))},{signal:p}),i.addEventListener("click",g=>{if(g.preventDefault(),d){d=!1;return}c++,c===1?u=setTimeout(()=>{c=0,this._fireAction(s,r,"tap_action")},250):c===2&&(u&&clearTimeout(u),c=0,this._fireAction(s,r,"double_tap_action"))},{signal:p}),i.addEventListener("pointerdown",()=>{d=!1,m=setTimeout(()=>{d=!0,this._fireAction(s,r,"hold_action")},500)},{signal:p});let f=()=>{m&&clearTimeout(m)};i.addEventListener("pointerup",f,{signal:p}),i.addEventListener("pointercancel",f,{signal:p}),i.addEventListener("contextmenu",g=>g.preventDefault(),{signal:p}),Et(i)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs(),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindStateTimelineInteractions(),this._bindSystemHealthGroupTabs()}_bindChipActions(){if(!this._config||!this._hass)return;let e=this._resetAbort("_chipAbort"),o=this._config._zones||[],n=this._shadow.querySelectorAll(".pc-zone-row");for(let i=0;i<n.length&&i<o.length;i++){let r=o[i],s=r.entity,a=n[i].querySelectorAll(".pc-chip");for(let l of a){let p=l,c=p.dataset.chipType||"",u=p.dataset.entity||s,m=r.chip_actions,d=this._config.chip_actions,f=m?.[c]||d?.[c]||{},g=f.tap_action||{action:"more-info",entity:u},w=f.hold_action||{action:"none"};p.style.cursor="pointer",Et(p),p.addEventListener("click",b=>{b.stopPropagation(),this._hass&&ve(this,this._hass,g,u,Ot)},{signal:e});let v=null;p.addEventListener("pointerdown",b=>{b.stopPropagation(),v=setTimeout(()=>{!this._hass||w.action==="none"||ve(this,this._hass,w,u,Ot)},500)},{signal:e}),p.addEventListener("pointerup",b=>{b.stopPropagation(),v&&clearTimeout(v)},{signal:e}),p.addEventListener("pointercancel",()=>{v&&clearTimeout(v)},{signal:e}),p.addEventListener("contextmenu",b=>b.preventDefault(),{signal:e})}}}_bindSectionChipActions(){let e=this._resetAbort("_sectionChipAbort"),o=this._shadow.querySelectorAll(".pc-section [data-entity]");for(let n of o){let i=n;i.closest(".pc-zone-row")&&i.classList.contains("pc-chip")||i.classList.contains("pc-zone-row")||(i.style.cursor="pointer",Et(i),i.addEventListener("click",r=>{r.stopPropagation();let s=i.dataset.entity;s&&co(this,"hass-more-info",{entityId:s})},{signal:e}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let e=this._shadow.querySelector(".chip-next-sync");if(!e)return;let o=Number(e.getAttribute("data-target"));if(!o||!isFinite(o))return;let n=()=>{let i=o-Date.now();if(i<=0){e.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let r=Math.floor(i/6e4),s=Math.floor(i%6e4/1e3);e.textContent=r>0?`Next: ${r}m ${s}s`:`Next: ${s}s`};n(),this._countdownTimer=setInterval(n,1e3)}_bindRadialInteractions(){let e=this._resetAbort("_radialAbort"),o=this._shadow.querySelectorAll(".pc-arc-group"),n=this._shadow.querySelectorAll(".pc-radial-legend .pc-legend-item"),i=this._shadow.querySelector("#radial-center"),r=this._shadow.querySelector("#radial-detail"),s=this._shadow.querySelector(".pc-section-radial svg");if(o.length===0||!i)return;let l=(s&&Number(s.getAttribute("width"))||280)/2,p=this._config?._zones||[],c=null,u=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-temp-entity"),m=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-attribute")||"temperature",d=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-humidity-entity"),f=()=>{let v=this._hass?.states||{},b=this._discovery,y=u||b?.hubEntities?.outside_temp,_="--",$="";if(m!=="humidity"&&y&&v[y]){let C=v[y];Q(C)||(_=`${C.attributes?.temperature!==void 0?C.attributes.temperature:C.state}${C.attributes?.unit_of_measurement||"\xB0C"}`)}if(d&&v[d]){let C=v[d];if(!Q(C)){let E=C.attributes?.humidity!==void 0?C.attributes.humidity:C.state;m==="humidity"?_=`${E}%`:$=`${E}%`}}return{center:_,centerSub:$}},g=v=>{let b=this._hass?.states||{},y=this._discovery;if(c===v){w();return}c=v;let _=p[v];if(!_)return;let $=_.entity,C=Y($),E=y?.zoneEntities?.[C]||{},M=Oe($,b,_),{name:F,temp:I,target:k,humidity:x}=M,A=M.hvacAction,T=0;if(E.heating_power){let q=b[E.heating_power];Q(q)||(T=parseFloat(q.state)||0)}else b[$]?.attributes?.heating_power!==void 0&&(T=parseFloat(b[$].attributes.heating_power)||0);let O=T>0||A==="heating"||A==="cooling"?`${A==="cooling"?"Cooling":"Heating"} ${Math.round(T)}%`:"Idle",W=i.querySelector(".pc-center-value"),R=i.querySelector(".pc-center-label"),N=i.querySelector(".pc-center-sub");W&&(W.textContent=I!==void 0?`${Z(I)}${M.unit}`:"--"),R&&(R.textContent=F);let B=x!==void 0?` \xB7 ${x}%`:"";N&&(N.textContent=`${O}${B}`),o.forEach((q,H)=>{q.classList.toggle("pc-dimmed",H!==v),q.classList.toggle("pc-selected",H===v),H===v?q.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):q.removeAttribute("transform")}),n.forEach((q,H)=>{q.classList.toggle("pc-selected",H===v)}),r&&(r.innerHTML=`<div class="pc-detail-stats">
          <div class="pc-stat"><div class="pc-stat-value">${k!==void 0?h(k)+h(M.unit):"--"}</div><div class="pc-stat-label">Target</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${x!==void 0?h(x)+"%":"--"}</div><div class="pc-stat-label">Humidity</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${h(A)}</div><div class="pc-stat-label">Action</div></div>
        </div>`,r.classList.add("pc-active"))},w=()=>{c=null;let{center:v,centerSub:b}=f(),y=i.querySelector(".pc-center-value"),_=i.querySelector(".pc-center-label"),$=i.querySelector(".pc-center-sub");y&&(y.textContent=v),_&&(_.textContent="Outdoor"),$&&($.textContent=b),o.forEach(C=>{C.classList.remove("pc-dimmed","pc-selected"),C.removeAttribute("transform")}),n.forEach(C=>{C.classList.remove("pc-selected")}),r&&(r.classList.remove("pc-active"),r.innerHTML="")};if(o.forEach((v,b)=>{v.addEventListener("click",()=>g(b),{signal:e})}),n.forEach((v,b)=>{Et(v),v.addEventListener("click",()=>g(b),{signal:e})}),this._stopRadialAnimations(),o.length>1&&!Rt()){this._radialAnimState.shimmer=!0;let v=0,b=1,y=()=>{if(!this._radialAnimState.shimmer)return;if(c!==null){setTimeout(y,500);return}let _=o[v];if(!_){setTimeout(y,300);return}if(_.style.filter="brightness(1.8)",_.style.transition="filter 0.3s ease-in",setTimeout(()=>{_.style.filter="",_.style.transition="filter 0.5s ease-out"},250),v+=b,v>=o.length||v<0){v=b>0?0:o.length-1;let $=1e3+Math.random()*2e3;Math.random()<.4&&(b*=-1),setTimeout(y,$)}else{let $=80+Math.random()*170;setTimeout(y,$)}};setTimeout(y,1500)}if(!Rt()){let v=this._shadow.querySelector("#radial-sheen");if(v){let y=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(y?(.299*Number(y[1])+.587*Number(y[2])+.114*Number(y[3]))/255>=.5:!1)?v.classList.add("light-theme"):v.classList.remove("light-theme"),this._radialAnimState.sheen=!0;let $=()=>{if(!this._radialAnimState.sheen)return;let C=Math.random()>.5,E=C?"-100% 50%":"200% 50%",M=C?"200% 50%":"-100% 50%",F=1.2+Math.random()*1.5;v.style.transition="none",v.style.backgroundPosition=E,v.offsetWidth,v.style.transition=`background-position ${F}s ease-in-out`,v.style.backgroundPosition=M,setTimeout(()=>{let I=4e3+Math.random()*6e3;setTimeout($,I)},F*1e3)};setTimeout($,2e3+Math.random()*3e3)}}}_stopRadialAnimations(){this._radialAnimState.shimmer=!1,this._radialAnimState.sheen=!1}_resetAbort(e){let o=this[e];o&&o.abort();let n=new AbortController;return this[e]=n,n.signal}_bindTimelineInteractions(){let e=this._resetAbort("_timelineAbort"),o=this._shadow.querySelectorAll(".pc-section-thermal-strip, .pc-section-timeline-group");if(o.length===0)return;let n=this._config?._zones||[],i=this._hass?.states?.[n[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C";for(let r of o){let s=r.querySelectorAll(".pc-timeline-row");if(s.length===0)continue;let a=r.querySelector(".pc-section-subtitle"),l="Tap a zone for details",p=null,c=null,u=m=>{c=null;let d=m.querySelector(".pc-comparison-path");d&&d.remove();let f=m.querySelector(".pc-comparison-legend");f&&f.remove()};s.forEach((m,d)=>{Et(m),m.addEventListener("click",()=>{let f=this._hass?.states||{},g=this._discovery,w=this._historyCache;if(r.querySelectorAll(".pc-strip-drag-highlight").forEach(H=>{H.style.display="none"}),p!==null&&p!==d){let H=r.querySelector(".pc-zone-detail"),V=H?.querySelector(".pc-detail-sparkline svg");if(H&&V){if(c===d){u(H);return}u(H),c=d;let z=n[d];if(!z)return;let D=z.entity,U=Y(D),G=g?.zoneEntities?.[U]||{},tt=z.temperature_entity||G.temperature||D,et=w?.data?.[tt]||[];if(et.length>=2){let Mt=this._sparklinePathCache.get(tt)||Pt(et,340,36,48);if(Mt){let bt=document.createElementNS("http://www.w3.org/2000/svg","path");bt.setAttribute("d",Mt.linePath),bt.setAttribute("fill","none"),bt.setAttribute("stroke","var(--pulse-info-color)"),bt.setAttribute("stroke-width","1.5"),bt.setAttribute("opacity","0.5"),bt.classList.add("pc-comparison-path"),V.appendChild(bt)}}let lt=n[p],vt=Oe(lt?.entity||"",f,lt).name,St=Oe(D,f,z).name,it=document.createElement("div");it.className="pc-comparison-legend",it.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:currentColor;margin-right:4px"></span>${h(vt)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:var(--pulse-info-color);margin-right:4px"></span>${h(St)}</span>`,H.appendChild(it);return}}if(p===d){p=null,c=null,s.forEach(V=>V.classList.remove("pc-selected"));let H=r.querySelector(".pc-zone-detail");H&&H.classList.remove("pc-active"),a&&(a.textContent=l);return}p=d,s.forEach((H,V)=>H.classList.toggle("pc-selected",V===d));let v=n[d];if(!v)return;let b=v.entity,y=f[b]?.attributes||{},_=Oe(b,f,v),{name:$,temp:C,target:E,humidity:M,hvacAction:F}=_;a&&(a.textContent=$);let I=Y(b),k=g?.zoneEntities?.[I]||{},x=v.temperature_entity||k.temperature||b,A=w?.data?.[x]||[],T="";if(A.length>=2){let H=A[A.length-1],V=A[A.length-2],z=H.v-V.v,D=(H.t-V.t)/36e5;if(D>0&&isFinite(z)&&isFinite(D)){let U=z/D;T=`${U>=0?"+":""}${U.toFixed(1)}${_.unit}/hr`}}let L=0;if(k.heating_power){let H=f[k.heating_power];Q(H)||(L=parseFloat(H.state)||0)}else y.heating_power!==void 0&&(L=parseFloat(y.heating_power)||0);let W=L>0||F==="heating"||F==="cooling"?`${F==="cooling"?"Cooling":"Heating"} ${Math.round(L)}%`:"Idle",R="";if(A.length>=2){let H=1/0,V=-1/0;for(let z of A)isFinite(z.v)&&(z.v<H&&(H=z.v),z.v>V&&(V=z.v));isFinite(H)&&isFinite(V)&&(R=`${H.toFixed(1)}${_.unit} \u2013 ${V.toFixed(1)}${_.unit} today`)}let N="";if(A.length>=2){let H=F==="heating"?"var(--pulse-tier-strong)":C!==void 0&&isFinite(Number(C))?at(Number(C)):"var(--pulse-text-primary)",V=S(H),z=this._sparklinePathCache.get(x)||Pt(A,340,36,48);if(z){let D=`tl-detail-grad-${d}`;N=`<div class="pc-detail-sparkline pc-sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${h(D)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${V}" stop-opacity="0.3"/><stop offset="100%" stop-color="${V}" stop-opacity="0"/></linearGradient></defs><path d="${z.areaPath}" fill="url(#${h(D)})" /><path d="${z.linePath}" fill="none" stroke="${V}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let B=r.querySelector(".pc-zone-detail");if(!B)return;B.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h($)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${C!==void 0?h(C)+h(_.unit):"--"}</div><div class="pc-stat-label">Current</div>${T?`<div class="pc-stat-sub">${h(T)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${E!==void 0?h(E)+h(_.unit):"--"}</div><div class="pc-stat-label">Target</div>${W?`<div class="pc-stat-sub">${h(W)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${M!==void 0?h(M)+"%":"--"}</div><div class="pc-stat-label">Humidity</div>${R?`<div class="pc-stat-sub">${h(R)}</div>`:""}</div>
          </div>${N}`,B.classList.add("pc-active");let q=B.querySelector(".pc-detail-close");q&&q.addEventListener("click",H=>{H.stopPropagation(),p=null,c=null,s.forEach(V=>V.classList.remove("pc-selected")),B.classList.remove("pc-active"),a&&(a.textContent=l)},{signal:e})},{signal:e})}),r.classList.contains("pc-section-thermal-strip")&&this._bindThermalStripHandlers(r,e,i)}}_bindThermalStripHandlers(e,o,n){let i=Ao(),r=e.querySelector(".pc-strip-rows");r&&(r.style.position="relative",r.appendChild(i.element)),e.querySelectorAll(".pc-strip-container").forEach(p=>{let c=p.getAttribute("data-slots"),u=null;try{c&&(u=JSON.parse(c))}catch{}p.addEventListener("pointermove",m=>{if(m.pointerType==="touch"||!u)return;let d=p.getBoundingClientRect(),f=Jt(m.clientX,d,u.length),g=u[f];if(g){let w=g.v!==null?`${g.l}: ${g.v}${n}`:`${g.l}: --`;i.show(d,m.clientX-d.left,w)}},{signal:o}),p.addEventListener("pointerleave",()=>i.hide(),{signal:o}),p.addEventListener("pointerdown",m=>{if(m.pointerType!=="touch"||!u)return;let d=p.getBoundingClientRect(),f=Jt(m.clientX,d,u.length),g=u[f];if(g){let w=g.v!==null?`${g.l}: ${g.v}${n}`:`${g.l}: --`;i.show(d,m.clientX-d.left,w),setTimeout(()=>i.hide(),2e3)}},{signal:o})});let a=r?.querySelectorAll(".pc-strip-container");if(r&&a&&a.length>0){let p=r.querySelector(".pc-strip-crosshair"),c=a[0];if(p&&c){let u=c.getBoundingClientRect().left-r.getBoundingClientRect().left;Nn(r,p,c,u)}}e.querySelectorAll(".pc-strip-container, .pc-cells").forEach(p=>{let c=p.getAttribute("data-slots"),u=null;try{c&&(u=JSON.parse(c))}catch{}zn(p,u,i,n)})}_bindStateTimelineInteractions(){let e=this._resetAbort("_stateTimelineAbort"),o=this._shadow.querySelectorAll(".pc-section-timeline-group");if(o.length!==0)for(let n of o){let i=n.querySelectorAll(".pc-state-row");if(i.length===0)continue;let r=n.querySelector(".pc-zone-detail");if(!r)continue;let s=n.querySelector(".pc-section-subtitle"),a="Heat / cool demand by zone",l=null;i.forEach((p,c)=>{Et(p),p.addEventListener("click",()=>{if(l===c){l=null,i.forEach(z=>z.classList.remove("pc-selected")),r.classList.remove("pc-active"),s&&(s.textContent=a);return}l=c,i.forEach((z,D)=>z.classList.toggle("pc-selected",D===c));let u=this._hass?.states||{},m=this._discovery,d=this._historyCache,g=(this._config?._zones||[])[c];if(!g)return;let w=g.entity,v=Y(w),b=m?.zoneEntities?.[v]||{},y=we(w,b,u,g,{});s&&(s.textContent=y.name);let _=d?.stateData?.[w]||[],$=qn(_,48),C=0,E=0,M=0,F=0;for(let z of $)z.state==="heating"?C+=30:z.state==="cooling"?E+=30:z.state==="off"?F+=30:M+=30;let I=C+E,k=Mr($),x=Er($),A=z=>{if(z===0)return"0m";let D=Math.floor(z/60),U=z%60;return D===0?`${U}m`:U===0?`${D}h`:`${D}h ${U}m`},T=I>0?A(I):"no demand",L=[];C>0&&L.push(`${A(C)} heat`),E>0&&L.push(`${A(E)} cool`);let O=L.join(" \xB7 "),W="";k.minutes>0&&(W=`${k.mode==="heat"?"heating":k.mode==="cool"?"cooling":"active"} run`);let R=k.minutes>0?A(k.minutes):"\u2014",N="\u2014",B="";x&&x.minutes>0&&(N=`${String(x.hour).padStart(2,"0")}:00`,B=`${A(x.minutes)} demand`);let q=`${A(M)} idle`,H=F>0?` \xB7 ${A(F)} off`:"";r.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h(y.name)}</span><span class="pc-detail-close">\u2715 Close</span></div><div class="pc-detail-stats"><div class="pc-stat"><div class="pc-stat-value">${h(T)}</div><div class="pc-stat-label">24h Demand</div>`+(O?`<div class="pc-stat-sub">${h(O)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${h(R)}</div><div class="pc-stat-label">Longest Run</div>`+(W?`<div class="pc-stat-sub">${h(W)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${h(N)}</div><div class="pc-stat-label">Busiest Hour</div>`+(B?`<div class="pc-stat-sub">${h(B)}</div>`:"")+`</div></div><div class="pc-state-detail-footer">${h(q+H)}</div>`,r.classList.add("pc-active");let V=r.querySelector(".pc-detail-close");V&&V.addEventListener("click",z=>{z.stopPropagation(),l=null,i.forEach(D=>D.classList.remove("pc-selected")),r.classList.remove("pc-active"),s&&(s.textContent=a)},{signal:e})},{signal:e})})}}_bindHeatmapInteractions(){let e=this._resetAbort("_heatmapAbort"),o=this._shadow.querySelectorAll(".pc-section-comfort-strip .pc-heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(o.length===0||!n)return;let i=null;o.forEach((d,f)=>{Et(d),d.addEventListener("click",()=>{let g=this._shadow.querySelector(".pc-section-comfort-strip");if(g&&g.querySelectorAll(".pc-strip-drag-highlight").forEach(k=>{k.style.display="none"}),i===f){i=null,o.forEach(k=>k.classList.remove("pc-selected")),n.classList.remove("pc-active");return}i=f,o.forEach((k,x)=>k.classList.toggle("pc-selected",x===f));let w=d.querySelectorAll(".pc-cell"),v=[],b=[];if(w.length>0)w.forEach(k=>{let x=k.getAttribute("data-score");x&&(v.push(Number(x)),b.push(k.getAttribute("data-hour")||"--"))});else{let x=d.querySelector(".pc-strip-container")?.getAttribute("data-slots");if(x)try{let A=JSON.parse(x);for(let T of A)T.v!==null&&T.v!==void 0&&(v.push(T.v),b.push(T.l||"--"))}catch{}}if(v.length===0)return;let y=Math.round(v.reduce((k,x)=>k+x,0)/v.length),_=0,$=0;for(let k=1;k<v.length;k++)v[k]>v[_]&&(_=k),v[k]<v[$]&&($=k);let C=b[_]||"--",E=b[$]||"--",M=y>=80?"var(--pulse-tier-moderate)":y>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)",F=d.querySelector(".pc-zone-label")?.textContent||"";n.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h(F)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${y}</div><div class="pc-stat-label">Avg Score</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${h(C)}</div><div class="pc-stat-label">Best Hour</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${h(E)}</div><div class="pc-stat-label">Worst Hour</div></div>
          </div>
          <div class="pc-detail-bar"><div class="pc-detail-bar-fill" style="width:${y}%;background:${S(M)}"></div></div>`,n.classList.add("pc-active");let I=n.querySelector(".pc-detail-close");I&&I.addEventListener("click",k=>{k.stopPropagation(),i=null,o.forEach(x=>x.classList.remove("pc-selected")),n.classList.remove("pc-active")},{signal:e})},{signal:e})});let r=this._shadow.querySelector(".pc-section-comfort-strip");if(!r)return;let s=Ao(),a=r.querySelector(".pc-heatmap-body");a&&(a.style.position="relative",a.appendChild(s.element));let l=a?.querySelector(".pc-cells")||a?.querySelector(".pc-strip-container");r.querySelectorAll(".pc-cells").forEach(d=>{d.addEventListener("pointermove",f=>{if(f.pointerType==="touch")return;let g=f.target?.closest?.(".pc-cell");if(!g){s.hide();return}let w=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${w}: Score ${v}`:`${w}: --`,y=l?.getBoundingClientRect();y&&s.show(y,f.clientX-y.left,b)},{signal:e}),d.addEventListener("pointerleave",()=>s.hide(),{signal:e}),d.addEventListener("pointerdown",f=>{if(f.pointerType!=="touch")return;let g=f.target?.closest?.(".pc-cell");if(!g)return;let w=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${w}: Score ${v}`:`${w}: --`,y=l?.getBoundingClientRect();y&&(s.show(y,f.clientX-y.left,b),setTimeout(()=>s.hide(),2e3))},{signal:e})}),r.querySelectorAll(".pc-strip-container").forEach(d=>{let f=d.getAttribute("data-slots"),g=null;try{f&&(g=JSON.parse(f))}catch{}d.addEventListener("pointermove",w=>{if(w.pointerType==="touch"||!g)return;let v=d.getBoundingClientRect(),b=Jt(w.clientX,v,g.length),y=g[b];if(y){let _=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;s.show(v,w.clientX-v.left,_)}},{signal:e}),d.addEventListener("pointerleave",()=>s.hide(),{signal:e}),d.addEventListener("pointerdown",w=>{if(w.pointerType!=="touch"||!g)return;let v=d.getBoundingClientRect(),b=Jt(w.clientX,v,g.length),y=g[b];if(y){let _=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;s.show(v,w.clientX-v.left,_),setTimeout(()=>s.hide(),2e3)}},{signal:e})});let u=a?.querySelector(".pc-strip-crosshair");if(a&&u&&l){let d=l.getBoundingClientRect().left-a.getBoundingClientRect().left;Nn(a,u,l,d)}r.querySelectorAll(".pc-cells, .pc-strip-container").forEach(d=>{let f=d.getAttribute("data-slots"),g=null;try{f&&(g=JSON.parse(f))}catch{}zn(d,g,s)})}_bindEnergyFlowInteractions(){let e=this._resetAbort("_energyFlowAbort"),o=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),n=this._shadow.querySelector(".section-energy-flow");if(o.length===0||!n)return;let i=null;o.forEach(r=>{r.classList.add("pc-ribbon"),r.addEventListener("click",()=>{let s=r.getAttribute("data-zone");if(s){if(i===s){i=null,o.forEach(a=>a.classList.remove("pc-dimmed"));return}i=s,o.forEach(a=>{a.classList.toggle("pc-dimmed",a.getAttribute("data-zone")!==s)})}},{signal:e})})}_bindSparklineCrosshairs(){let e=this._resetAbort("_sparklineAbort");this._shadow.querySelectorAll(".pc-strip-tooltip-fixed").forEach(i=>i.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(i=>i.remove());let o=this._shadow.querySelectorAll(".pc-section-zones .pc-sparkline-filled, .pc-section-zones .pc-zone-row-pulse");if(o.length===0)return;let n=mr();this._shadow.appendChild(n.element),o.forEach(i=>{let r=i;r.style.position="relative";let s=document.createElement("div");s.className="pc-strip-crosshair pc-sparkline-crosshair",s.style.display="none",s.style.top="0",s.style.bottom="0",r.appendChild(s);let a=r.getAttribute("data-sparkline"),l=null;try{a&&(l=JSON.parse(a))}catch{}r.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let u=r.getBoundingClientRect(),m=c.clientX-u.left;if(!(m<0||m>u.width)&&(s.style.left=`${m}px`,s.style.display="",l)){let d=l.d,f=l.u||"",g=Math.min(d.length-1,Math.floor(m/u.width*d.length)),w=d[g];if(w){let v=w.v!==null?`${w.l}: ${w.v}${f}`:`${w.l}: --`;n.show(u,c.clientX,v)}}},{signal:e}),r.addEventListener("pointerleave",()=>{s.style.display="none",n.hide()},{signal:e});let p=null;r.addEventListener("pointerdown",c=>{if(c.pointerType!=="touch")return;let u=r.getBoundingClientRect(),m=c.clientX-u.left;if(!(m<0||m>u.width)){if(s.style.left=`${m}px`,s.style.display="",l){let d=l.d,f=l.u||"",g=Math.min(d.length-1,Math.floor(m/u.width*d.length)),w=d[g];if(w){let v=w.v!==null?`${w.l}: ${w.v}${f}`:`${w.l}: --`;n.show(u,c.clientX,v)}}p&&clearTimeout(p),p=setTimeout(()=>{s.style.display="none",n.hide(),p=null},2e3)}},{signal:e})})}_bindZoneRankingTabs(){let e=this._resetAbort("_zoneRankingTabsAbort"),o=this._shadow.querySelector(".pc-section-zone-ranking");if(!o)return;let n=o.querySelectorAll(".pc-ranking-tab");if(n.length===0)return;let i=this._config?._zones||[],r=this._discovery;if(r)for(let s of n)s.addEventListener("click",()=>{let a=s.dataset.metric;if(!a)return;let l=this._hass?.states||{},p=Fo(i,l,r,a);if(!p)return;let c=document.createElement("template");c.innerHTML=p;let u=c.content.firstElementChild;u&&(o.replaceWith(u),this._bindZoneRankingTabs(),this._bindSectionChipActions())},{signal:e})}_bindTimelineGroupTabs(){let e=this._resetAbort("_timelineGroupTabsAbort"),o=this._shadow.querySelectorAll(".pc-section-timeline-group");if(o.length===0)return;let n=this._config?._zones||[],i=this._discovery;if(i)for(let r of o){let s=Number(r.dataset.sectionIndex);if(Number.isNaN(s))continue;let a=r.querySelectorAll(".pc-timeline-group-tab");for(let l of a)l.addEventListener("click",()=>{let p=l.dataset.tab;if(!p||!["thermal","state"].includes(p))return;let c=[...this._config?.sections||[]],u=c[s];if(!u||typeof u=="string"||u.type!=="timeline_group")return;let m={...u,active_tab:p};c[s]=m,this._config={...this._config,sections:c};let d=this._hass?.states||{},f=this._historyCache,g=Vn(m,n,d,i,f);if(!g)return;let w=g.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${s}"`),v=document.createElement("template");v.innerHTML=w;let b=v.content.firstElementChild;b&&(r.replaceWith(b),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions())},{signal:e})}}_bindTimelineGroupCellTooltip(){let e=this._resetAbort("_timelineGroupCellTooltipAbort");this._shadow.querySelectorAll(".pc-strip-rows .pc-strip-tooltip").forEach(i=>i.remove());let o=this._shadow.querySelectorAll(".pc-strip-rows");if(o.length===0)return;let n=this._hass?.states?.[(this._config?._zones||[])[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C";for(let i of o){let r=i.querySelectorAll(".pc-cells");if(r.length===0)continue;let s=!!i.querySelector(".pc-state-timeline-cells"),a=i.querySelector(".pc-strip-crosshair"),l=Ao();i.style.position="relative",i.appendChild(l.element);for(let p of r)p.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let u=c.target?.closest?.(".pc-cell");if(!u){l.hide(),a&&(a.style.display="none");return}let m=u.getAttribute("data-hour")||"",d=u.getAttribute("data-score"),f=d?s?`${m}: ${d}`:`${m}: ${d}${n}`:`${m}: --`,g=p.getBoundingClientRect();if(l.show(g,c.clientX-g.left,f),a){let w=i.getBoundingClientRect();a.style.left=`${c.clientX-w.left}px`,a.style.display=""}},{signal:e}),p.addEventListener("pointerleave",()=>{l.hide(),a&&(a.style.display="none")},{signal:e}),p.addEventListener("pointerdown",c=>{if(c.pointerType!=="touch")return;let u=c.target?.closest?.(".pc-cell");if(!u)return;let m=u.getAttribute("data-hour")||"",d=u.getAttribute("data-score"),f=d?s?`${m}: ${d}`:`${m}: ${d}${n}`:`${m}: --`,g=p.getBoundingClientRect();if(l.show(g,c.clientX-g.left,f),a){let w=i.getBoundingClientRect();a.style.left=`${c.clientX-w.left}px`,a.style.display=""}setTimeout(()=>{l.hide(),a&&(a.style.display="none")},2e3)},{signal:e})}}_bindSystemHealthGroupTabs(){let e=this._resetAbort("_systemHealthGroupTabsAbort"),o=this._shadow.querySelectorAll(".pc-section-system-health-group");if(o.length===0)return;let n=this._discovery;if(n)for(let i of o){let r=Number(i.dataset.sectionIndex);if(Number.isNaN(r))continue;let s=i.querySelectorAll(".pc-system-health-group-tab");for(let a of s)a.addEventListener("click",()=>{let l=a.dataset.tab;if(!l||!["bridge","homekit","api"].includes(l))return;let p=[...this._config?.sections||[]],c=p[r];if(!c||typeof c=="string"||c.type!=="system_health_group")return;let u={...c,active_tab:l};p[r]=u,this._config={...this._config,sections:p};let m=this._hass?.states||{},d=this._historyCache,f=Wn(u,n?.hubEntities||{},m,d);if(!f)return;let g=f.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${r}"`),w=document.createElement("template");w.innerHTML=g;let v=w.content.firstElementChild;v&&(i.replaceWith(v),this._bindSystemHealthGroupTabs(),this._startCountdownTimer())},{signal:e})}}_renderSection(e,o,n,i){let r=typeof e=="string"?e:e.type,s=this._config,a=i.hubEntities,l=this._historyCache;switch(r){case"zones":return xn(o,s,n,i,l);case"api":return $n(a,n,e,l);case"graph":return Fn(e,o,l,n,i);case"donut":return In(e,a,n);case"bridge":return Sn(a,n,l);case"homekit":return kn(a,n,l);case"weather":return Tn(a,n,l);case"environment":return An(o,n,i);case"thermal":return Cn(o,n,i);case"schedule":return Mn(o,n,i);case"thermal_strip":return hr(o,e,n,i,l);case"comfort_strip":return vr(o,e,n,i,l);case"energy_flow":return Rn(o,n,i);case"radial":return On(o,e,n,i,l);case"home_status":return Pn(o,n,i,this._config||{});case"zone_ranking":return Fo(o,n,i);case"timeline_group":return Vn(e,o,n,i,l);case"system_health_group":return Wn(e,i?.hubEntities||{},n,l);default:return""}}_fireAction(e,o,n){if(!this._hass)return;let i=o[n]||this._config?.[n]||(n==="tap_action"?{action:"more-info"}:{action:"none"});ve(this,this._hass,i,e,Ot)}_applyTransitionGlow(e){let o=s=>{s&&(s.classList.add("pc-temp-transitioning"),setTimeout(()=>s.classList.remove("pc-temp-transitioning"),1100))},n=this._shadow.querySelectorAll(".pc-zone-row");n[e]&&o(n[e].querySelector(".pc-power-bar-fill"));let i=this._shadow.querySelectorAll(".pc-zone-row-pulse");o(i[e]||null);let r=this._shadow.querySelectorAll(".pc-arc-group");r[e]&&o(r[e].querySelector(".pc-arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!Rt()){let e=this._config._zones||[],o=this._hass.states;for(let n=0;n<e.length;n++){let i=e[n].entity,r=this._prevStates[i],s=o[i];if(!r||!s)continue;let a=r.attributes?.current_temperature,l=s.attributes?.current_temperature;a!==void 0&&l!==void 0&&a!==l&&this._applyTransitionGlow(n)}}pr(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let e=this._hass.states,o=this._discovery,n=this._config._zones||[],i=this._rerenderTargets;if(!i)return;let r=new Set;for(let p of i){let c=this._shadow.querySelector(p.selector);if(!c||p.watchIds.length===0||!p.watchIds.some(g=>{let w=e[g],v=this._prevStates[g];return!v||v.state!==w?.state||v.last_updated!==w?.last_updated}))continue;let m=p.render();if(!m)continue;let d=document.createElement("template");d.innerHTML=m;let f=d.content.firstElementChild;f&&(c.replaceWith(f),r.add(p.selector))}let s=new Set([".pc-section-zones",".pc-section-api",".pc-section-bridge",".pc-section-homekit",".pc-section-weather",".pc-section-environment",".pc-section-thermal",".pc-section-schedule",".pc-section-home-status",".pc-section-zone-ranking"]);[...r].some(p=>s.has(p))&&this._bindSectionChipActions(),r.has(".pc-section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions()),r.has(".pc-section-api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),r.has(".pc-section-radial")&&this._bindRadialInteractions(),r.has(".pc-section-zone-ranking")&&this._bindZoneRankingTabs();let l=this._shadow.querySelector(".section-energy-flow");if(l&&n.some(c=>{let u=Y(c.entity),m=o.zoneEntities?.[u]||{};return[c.entity,m.heating_power,m.ac_power].filter(Boolean).some(f=>{let g=e[f],w=this._prevStates[f];return!w||w.state!==g?.state||w.last_updated!==g?.last_updated})})&&!wr(l,n,e,o)){let u=Rn(n,e,o);if(u){let m=document.createElement("template");m.innerHTML=u;let d=m.content.firstElementChild;d&&(l.replaceWith(d),r.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHero(){if(!this._config||!this._hass||!this._discovery||this._config.show_hero===!1)return;let e=this._shadow.querySelector(".pc-hero");if(!e)return;let o=this._config,n=this._hass.states,i=this._discovery,r=o._zones||[],s=r.map(d=>{let f=Y(d.entity),g=i.zoneEntities?.[f]||{};return we(d.entity,g,n,d,o)}),a=jn(o,i,n),l=d=>{let f=r.findIndex(y=>y.entity===d);if(f<0)return d;let g=r[f],w=Y(d),v=i?.zoneEntities?.[w]||{};return ht(d,n,v,g)?.entityId||d},p=vn(r,this._historyCache,l),c=Un(s,o,p,a);if(!c)return;let u=document.createElement("template");u.innerHTML=c;let m=u.content.firstElementChild;m&&e.replaceWith(m)}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,o=this._hass.states,n=this._discovery,i=e._zones||[],r=e.sections||[{type:"zones"}],s=[];for(let l=0;l<r.length;l++){let p=r[l],c=typeof p=="string"?p:p.type;if(!oc.has(c))continue;let u=nc[c];if(!u)continue;let m=this._shadow.querySelector(u);if(!m)continue;let d=this._renderSection(p,i,o,n);if(!d)continue;let f=d.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${l}"`),g=document.createElement("template");g.innerHTML=f;let w=g.content.firstElementChild;w&&(m.replaceWith(w),s.push(c))}if(s.length===0)return;s.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),s.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),s.includes("radial")&&this._bindRadialInteractions(),s.includes("thermal_strip")&&(this._bindTimelineInteractions(),this._bindTimelineGroupCellTooltip()),s.includes("comfort_strip")&&this._bindHeatmapInteractions(),s.includes("timeline_group")&&(this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions()),s.includes("system_health_group")&&(this._bindSystemHealthGroupTabs(),this._startCountdownTimer()),s.some(l=>["zones","api","bridge","homekit","weather"].includes(l))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||bn(this._historyCache))return;let o=(this._config?.sections||[]).some(f=>(typeof f=="string"?f:f?.type)==="timeline_group"),n=or(),i=!o||n.stateData&&Object.values(n.stateData).some(f=>f.length>0);if(bn(n)&&i){this._historyCache=n,this._rebuildSparklinePathCache(),Object.values(n.data).filter(g=>g.length>=2).length>0&&(this._updateHistorySections(),this._updateHero());return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let r=this._historyGen,s=this._config._zones||[],a=[],l=this._hass.states;for(let f of s){let g=Y(f.entity),w=this._discovery?.zoneEntities?.[g]||{},v=ht(f.entity,l,w,f);a.push(v.entityId);let b=Yt(f.entity,l,w,f);b&&a.push(b.entityId)}if(this._discovery?.hubEntities?.call_history&&a.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&a.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&a.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&a.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&a.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&a.push(this._discovery.hubEntities.outside_temp),a.length===0){this._historyFetchInProgress=!1;return}let p=[...new Set(a.filter(f=>f&&typeof f=="string"&&f.includes(".")))];if(p.length===0){this._historyFetchInProgress=!1;return}let u=(this._config?.sections||[]).some(f=>(typeof f=="string"?f:f?.type)==="timeline_group"),m=[];if(u)for(let f of s)typeof f?.entity=="string"&&f.entity.startsWith("climate.")&&m.push(f.entity);let d=[...new Set(m.filter(f=>f.includes(".")))];try{let[f,g]=await Promise.all([He(this._hass,p,24),d.length>0?Ci(this._hass,d,24):Promise.resolve({})]);if(r!==this._historyGen){Ot("History fetch result discarded \u2014 config changed during fetch");return}this._historyCache=rr(this._historyCache,f);let w={...this._historyCache.stateData||{}};for(let[y,_]of Object.entries(g))Array.isArray(_)&&_.length>0&&(w[y]=_);this._historyCache={...this._historyCache,stateData:w},this._rebuildSparklinePathCache(),nr(f,g);let v=Object.values(f).filter(y=>y.length>=2).length,b=Object.values(g).filter(y=>y.length>=1).length;(v>0||b>0)&&(this._updateHistorySections(),this._updateHero())}catch(f){Ot("History fetch failed, using cached data: %O",f)}finally{this._historyFetchInProgress=!1}}_getHomeAvgHistory(e){let o=this._historyCache?.data,n=this._hass?.states,i=this._discovery;if(!o||!n||!i||e.length===0)return[];let r=[],s=this._config?._zones||[];for(let l of e){if(l.isUnavailable)continue;let p=Y(l.entityId),c=i.zoneEntities?.[p]||{},u=s.find(f=>f.entity===l.entityId)||{entity:l.entityId},m=ht(l.entityId,n,c,u),d=o[m.entityId];Array.isArray(d)&&d.length>=2&&r.push(d)}return r.length===0?[]:r[0].map((l,p)=>{let c=[];for(let m of r){let d=m[Math.min(p,m.length-1)];d&&typeof d.v=="number"&&Number.isFinite(d.v)&&c.push(d.v)}let u=c.length>0?c.reduce((m,d)=>m+d,0)/c.length:l.v;return{t:l.t,v:u}})}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let e=this._hass.states,o=this._config._zones||[],n=this._discovery.hubEntities,i={};for(let r of o){let s=r.entity;e[s]&&(i[s]=e[s]);let a=Y(s),l=this._discovery.zoneEntities?.[a]||{};for(let p of Object.values(l))p&&e[p]&&(i[p]=e[p])}for(let r of Object.values(n))r&&e[r]&&(i[r]=e[r]);this._prevStates=i}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._stateTimelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort(),this._zoneRankingTabsAbort?.abort(),this._timelineGroupTabsAbort?.abort(),this._timelineGroupCellTooltipAbort?.abort(),this._systemHealthGroupTabsAbort?.abort(),this._stopRadialAnimations();let e=this._shadow?.querySelectorAll(".pc-zone-row")||[];for(let o of e){let n=o.__pulseCleanup;typeof n=="function"&&n()}}connectedCallback(){Ui(this),this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer())}getCardSize(){let e=this._config?._zones?.length||1,o=this._config?.sections?.length||1;return Math.max(1,e+o)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(qi)}static getStubConfig(e){return{entity:Object.keys(e.states).find(n=>n.startsWith("climate."))||"climate.living_room"}}};customElements.get(mo)||customElements.define(mo,Gn);window.customCards=window.customCards||[];window.customCards.push({type:mo,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${Bi} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Rr="1.8.2",Te="pulse-weather-card",Hr="pulse-weather-card-editor",Bt="Pulse Weather Card:",Dr=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],Ae={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},Io=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],No=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],zo=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var Xn=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],Zn=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var Ue=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],Ce=80,Or=35;var Yn=.6,Pr=90,Br=60,qr=40,Kn=8;var Jn=1800*1e3,Vr=7,Wr=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Ur={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"},Qn={1:"#FFFF00",2:"#FFA500",3:"#FF9F0A",4:"#FF0000"},jr={yellow:"#FFFF00",amber:"#FF9F0A",red:"#FF0000"};var Gr=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],Xr=["active_alert","upcoming_alert","alert_count"],ti="_weather",Zr=3;var Yr={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},yt=29.53,Kr=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var Jr=`${""}

${pe}
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
  --pw-sky-bot: #827a6a;
  --pw-ink-cream: #fdf6e3;
  --pw-ink-cream-muted: rgba(229, 217, 194, 0.85);
  --pw-ink-cream-dim: rgba(229, 217, 194, 0.55);
  --pw-vermilion: #a83d2a;
  --pw-wind: #5ac8fa;
  --pw-warn-amber: #ff9f0a;
  --pw-warn-red: #ff453a;
  --pw-warn-yellow: #ffd60a;
  --pw-good-green: #30d158;

  /* Card-local \u2014 Weather is the only consumer at this size; everything else
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
  /* font-family inherits from the HA frame \u2014 same as pulse-climate-card. */
  container-type: inline-size;
}

/* \u2500\u2500 Cartouche frame primitive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Default sky gradient \u2014 applies to every section unless that section
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

/* Precipitation bar label */
.pw-precip-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-bottom: 6px;
}

/* Snow badge */
.pw-snow-badge {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  position: relative;
  z-index: 2;
  text-shadow: var(--pw-shadow-overlay);
}

/* Feels like context */
.pw-feels-context {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Snow precip fill \u2014 white gradient (bottom opaque \u2192 top transparent) */
.pw-precip-snow {
  background: linear-gradient(to top, var(--pw-text-overlay, #d0d0d0), transparent) !important;
}

/* Rain precip fill \u2014 gradient (bottom opaque \u2192 top fade) */
.pulse-precip-fill {
  background: linear-gradient(to top, #5ac8fa, rgba(90,200,250,0.15));
}

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
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
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

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 3px;
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
  color: var(--pulse-text-secondary);
  opacity: 0.7;
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

/* LCL height marker (dashed line, grey \u2014 distinct from freeze marker) */
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
  color: var(--pulse-text-secondary);
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
  color: var(--pulse-text-secondary);
  opacity: 0.6;
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

/* \u2500\u2500 Alert rows \u2014 Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: var(--pulse-space-row);
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.5;
  margin-top: 3px;
}

/* \u2500\u2500 Weather Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-weather-summary { font-size: 13px; font-weight: 400; text-align: center; padding: 4px var(--pulse-space-card-wide) 8px; color: var(--pulse-text-primary); position: relative; z-index: 2; opacity: 0.85; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: var(--pulse-space-element); padding: 4px var(--pulse-space-card-wide) 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pulse-text-secondary); font-variant-numeric: tabular-nums; opacity: 0.6; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: var(--pulse-radius-hairline); background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: var(--pulse-radius-hairline); background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: var(--pulse-radius-circle); border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* \u2500\u2500 Stability Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-stability-badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: var(--pulse-radius-element); margin-left: 6px; vertical-align: middle; }

/* \u2500\u2500 Precip Time Markers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-precip-times { display: flex; justify-content: space-between; font-size: 9px; color: var(--pulse-text-secondary); opacity: 0.6; margin-top: 2px; }

/* \u2500\u2500 Freezing Level Marker (Temp Arc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-arc-freeze { position: absolute; top: -6px; bottom: -6px; width: 1px; transform: translateX(-50%); }
.pw-arc-freeze-line { width: 1px; height: 100%; background: var(--pw-color-freeze); opacity: 0.5; }
.pw-arc-freeze-label { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* \u2500\u2500 CAPE Sparkline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-cape-sparkline { display: block; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-cape-peak { position: absolute; top: -12px; transform: translateX(-50%); font-size: 8px; color: var(--pulse-tier-strong); white-space: nowrap; font-variant-numeric: tabular-nums; }

/* \u2500\u2500 Comfort Bar (Dew Point) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-comfort-bar { display: flex; gap: var(--pulse-space-hairline); height: 4px; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-comfort-slot { flex: 1; border-radius: var(--pulse-radius-hairline); }

@media (prefers-reduced-motion: reduce) {
  .pw-streak,
  .pw-dust-particle,
  .pw-haze-blob,
  .pw-tension-wash.breathing,
  .pw-tension-vignette,
  .pw-radar::after,
  .pw-radar-blip,
  .pw-thermal-particle {
    animation: none !important;
  }
  .pw-atmos-detail {
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
 * layout-only (padding, grid, gradient, brand-mark corner offset) \u2014
 * they should never restate font-size / font-weight
 * / text-transform. To add a new role, add it here AND in
 * type-system.js together.
 */

/* Hero block \u2014 wraps heroTier + display + narrative. Sections that
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

/* Top-marg wrapper \u2014 reserves the right gutter for the brand mark. */
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

/* Hero numbers \u2014 display size, tabular numerals. */
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

/* Hero tier \u2014 Atmosphere uses the larger title flavour, AQI the
   smaller body-sm flavour. Title Case \u2014 no text-transform. */
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

/* Narrative \u2014 Sentence case body. Centred caption that fills the
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

/* Italic gloss \u2014 lowercase italic body-sm. */
.pw-t-gloss {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: var(--pw-ink-cream-dim);
  text-align: center;
}

/* Italic meta caption \u2014 sentence-case italic micro. */
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

/* Chart caption \u2014 header above a chart. Lowercase 0.14em micro. */
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
/* Decorative brand mark (sections without a click action \u2014 Forecast,
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
   only have a default view today work fine \u2014 the rule has no effect
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
/* Location stamp \u2014 same anatomy as kicker but tighter tracking and
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
   top hairline \u2014 gives a calmer visual rhythm under the busy hero
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
   stats grid. Caption above, sparkline below \u2014 same anatomy as a
   chart-caption + chart pair anywhere else in the family. */
.pw-overview-v2 .pw-overview-spark-block {
  margin: 0;
}
.pw-overview-v2 .pw-overview-spark {
  height: 38px;
}
.pw-overview-v2 .pw-overview-spark svg {
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
   actual time \u2014 making NOW-cursor look misaligned even when its
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

/* The second stats row sits flush under the first \u2014 no divider, no
   extra margin \u2014 so they read as one block. */
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
/* Vertical column visualisation \u2014 atmospheric profile up to 5km
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

/* \u2500\u2500 Wind (cartouche wrap only \u2014 rose preserved) \u2500 */
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
/* Pollutant tiles use the larger body size \u2014 the value here is a
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
.pw-alerts-v2 .pw-alert-amber .pw-alert-tri { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-red .pw-alert-tri { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-alert-text {
  font-weight: 700;
  font-size: var(--pw-font-caption);
  letter-spacing: 0.08em;
  line-height: 1.4;
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-text {
  color: var(--pw-warn-yellow);
  text-shadow: 0 0 6px rgba(255, 214, 10, 0.5);
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
}
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-amber { color: rgba(255, 159, 10, 0.55); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-red { color: rgba(255, 69, 58, 0.7); }
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
   (.pw-alert-amber / .pw-alert-red) drives border + headline colour. */
.pw-alerts-v2 .pw-alert-detail {
  background: rgba(229, 217, 194, 0.04);
  border: 1px solid;
  border-radius: var(--pulse-radius-pill);
  padding: 10px 12px;
  margin-top: var(--pw-gap-tight);
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
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber .pw-alert-detail-head {
  color: var(--pw-warn-yellow);
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
`;var Qr=[{type:"overview"}],rc={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function Lo(t){if(!t)return{type:"overview"};if(typeof t=="string")return Lo({type:t});if(typeof t!="object")return{type:"overview"};let e=Dr.includes(t.type)?t.type:"overview";return{...rc[e]||{},...t,type:e}}function ta(t){if(!t||typeof t!="object")return{type:"custom:pulse-weather-card",sections:Qr.map(Lo)};let e=t,o=Array.isArray(e.sections)&&e.sections.length>0?e.sections.map(Lo):Qr.map(Lo);return{type:e.type||"custom:pulse-weather-card",weather_entity:e.weather_entity||void 0,atmos_source:e.atmos_source||void 0,sections:o}}function ei(t){let e=t.replace(/^weather\./,"");return e.endsWith(ti)&&(e=e.slice(0,-ti.length)),e}function ea(t,e){let o=e.weather_entity||Object.keys(t).find(p=>p.startsWith("weather."))||"",n=e.atmos_source||ei(o),i={};for(let p of Gr){let c=`sensor.${n}_${p}`;c in t&&(i[p]=c)}let r=Object.keys(i).length>=Zr,s=r?i:{},a=[];if(e.alert_entities&&e.alert_entities.length>0)for(let p of e.alert_entities)p in t&&a.push(p);else if(r){for(let u of Xr){let m=`sensor.${n}_${u}`,d=`sensor.${n}_warnings_${u}`;m in t?a.push(m):d in t&&a.push(d)}let p=`binary_sensor.${n}_alert_active`,c=`binary_sensor.${n}_warnings_alert_active`;p in t?a.push(p):c in t&&a.push(c)}let l="sun.sun"in t?"sun.sun":null;return{weatherEntityId:o,atmosCe:s,sunEntityId:l,atmosSource:r?n:null,alertEntityIds:a}}function na(t,e){return t.filter(o=>Number.isFinite(e(o)))}function ut(t,e=0){let o=Number(t);return Number.isFinite(o)?o:e}function Ro(t,e,o,n,i,r=0){if(e?.[n]){let s=Number(t?.states?.[e[n]]?.state);if(Number.isFinite(s))return s}return Number(o?.[i]??r)||r}function ia(t,e,o,n){return e?.[o]&&t?.states?.[e[o]]?.attributes?.unit_of_measurement||n}function Me(t,e,o=0){let n=e?t?.states?.[e]:null;if(!n)return{value:o,unit:void 0,entity:null};let i=Number(n.state);return{value:Number.isFinite(i)?i:o,unit:n.attributes?.unit_of_measurement,entity:n}}function Ho(t,e,o){let n=e?.state||"sunny",i=o?.sunEntityId?t?.states?.[o.sunEntityId]?.state:null;return{condition:n,isNight:n==="clear-night"||i==="below_horizon"}}function je(t="pw-id"){return ue(t)}function ra(t){return`${t}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function Do(t,e,o=36e5){let n=(e?e.getTime():Date.now())-o;return t.filter(i=>{let r=i.datetime;if(!r)return!1;let s=new Date(r).getTime();return Number.isFinite(s)&&s>=n})}function Qt(t){let e=Number(t);for(let o of Io)if(e<=o.max)return o.color;return Io[Io.length-1].color}function oi(t){let e=Number(t);for(let o of No)if(e<=o.max)return o.tier;return No[No.length-1].tier}function aa(t){return Ae[oi(t)]||Ae.calm}function Oo(t){let e=Number(t);for(let o of zo)if(e<=o.max)return o;return zo[zo.length-1]}function Po(t){let e=(Number(t)%360+360)%360,o=Math.round(e/22.5)%16;return Wr[o]}function sa(t){return t<=12?"#30d158":t<=50?"#5ac8fa":t<=87?"#ff9f0a":"#ff453a"}function la(t){return t<10?"#5ac8fa":t<16?"#30d158":t<19?"#ffd60a":t<22?"#ff9f0a":"#ff453a"}function Ee(t,e,o){if(!e||!o)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let n=new Date(e),i=new Date(o);if(isNaN(n.getTime())||isNaN(i.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let r=n.getTime()>t.getTime()?new Date(n.getTime()-864e5):n,s=i.getTime()>t.getTime()?i:new Date(i.getTime()-864e5);s.getTime()>r.getTime()+864e5&&(s=new Date(s.getTime()-864e5)),r.getTime()>s.getTime()&&(r=new Date(r.getTime()-864e5));let a=n.getTime()>t.getTime()?n:new Date(n.getTime()+864e5);return{todaySunrise:r,todaySunset:s,tomorrowSunrise:a}}function ft(t,e){if(!t||isNaN(t.getTime()))return null;if(!e)return t;let o=e.getTime(),n=[t,new Date(t.getTime()-864e5),new Date(t.getTime()+864e5)],i=n[0],r=Math.abs(i.getTime()-o);for(let s=1;s<n.length;s+=1){let a=Math.abs(n[s].getTime()-o);a<r&&(i=n[s],r=a)}return i}function Ct(t,e,o){let n=e?Object.entries(e).map(([i,r])=>` ${i}="${r}"`).join(""):"";return o!=null?`<${t}${n}>${o}</${t}>`:`<${t}${n}/>`}function Bo(t){return Yr[t]||"\u{1F324}\uFE0F"}var oa={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function ca(t){return Object.hasOwn(oa,t)?oa[t]:t.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function $t(t,e,o){let n=document.createElement(t);if(n.className=e,o)for(let[i,r]of Object.entries(o))n.style.setProperty(i,r);return n}function X(t,e){return Math.random()*(e-t)+t}function Ge(t,e=60,o=1,n=2){let i=Math.min(e,Pr);for(let r=0;r<i;r++){let s=$t("div","pw-rain-drop"),a=X(15,30),l=X(.4,.8)/o;Object.assign(s.style,{left:`${X(0,100)}%`,top:`${X(-10,20)}%`,width:`${n}px`,height:`${a}px`,borderRadius:`0 0 ${n}px ${n}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${l}s linear ${X(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(s)}}function ni(t,e=40){let o=Math.min(e,Br);for(let n=0;n<o;n++){let i=$t("div","pw-snowflake"),r=X(2,5);Object.assign(i.style,{left:`${X(0,100)}%`,top:`${X(-5,10)}%`,width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${X(3,6)}s linear ${X(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(i)}}function ac(t){for(let e=0;e<4;e++){let o=$t("div","pw-fog-layer");Object.assign(o.style,{position:"absolute",width:"200%",height:"40px",top:`${30+e*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${X(15,25)}s linear ${e*2}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function qo(t){for(let e=0;e<8;e++){let o=$t("div","pw-sun-ray");Object.assign(o.style,{position:"absolute",top:"-20px",left:`${10+e*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+e*4}deg)`,animation:`pw-rayPulse ${X(3,5)}s ease-in-out ${X(0,2)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function gt(t,e=4,o=1){let n=Math.min(e,Kn);for(let i=0;i<n;i++){let r=$t("div","pw-cloud"),s=X(80,160),a=X(30,60),l=X(20,40)/o;Object.assign(r.style,{position:"absolute",width:`${s}px`,height:`${a}px`,top:`${X(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${l}s linear ${X(0,15)}s infinite`,animationFillMode:"backwards"}),t.appendChild(r)}}function ii(t){for(let e=0;e<qr;e++){let o=$t("div","pw-star"),n=X(1,3);Object.assign(o.style,{position:"absolute",left:`${X(0,100)}%`,top:`${X(0,70)}%`,width:`${n}px`,height:`${n}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${X(2,5)}s ease-in-out ${X(0,3)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function sc(t,e){let o=[],n=t,i=0,r=Math.floor(X(4,8)),s=e/r;o.push(`${n},${i}`);for(let a=0;a<r;a++)n+=X(-15,15),i+=s,o.push(`${n},${i}`);return o.join(" ")}function pa(t,e=2,o){let n=o||Array.from({length:e},(r,s)=>s*3),i=$t("div","pw-lightning-flash");Object.assign(i.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${n[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),t.appendChild(i);for(let r=0;r<e;r++){let s="http://www.w3.org/2000/svg",a=document.createElementNS(s,"svg");a.setAttribute("class","pw-lightning-bolt"),a.setAttribute("width","60"),a.setAttribute("height","200"),a.setAttribute("viewBox","0 0 60 200"),a.style.position="absolute",a.style.top="0",a.style.left=`${X(15,75)}%`,a.style.pointerEvents="none",a.style.zIndex="2",a.style.animation=`pw-boltStrike 6s ease-in-out ${n[r]||0}s infinite`,a.style.animationFillMode="backwards";let l=sc(30,180),p=document.createElementNS(s,"polyline");p.setAttribute("points",l),p.setAttribute("fill","none"),p.setAttribute("stroke","rgba(200,220,255,0.4)"),p.setAttribute("stroke-width","6"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),a.appendChild(p);let c=document.createElementNS(s,"polyline");c.setAttribute("points",l),c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("stroke-width","2"),c.setAttribute("stroke-linecap","round"),c.setAttribute("stroke-linejoin","round"),a.appendChild(c),t.appendChild(a)}}function lc(t){let e=$t("div","pw-heat-shimmer");Object.assign(e.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),t.appendChild(e);let o=$t("div","pw-heat-ripple");Object.assign(o.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),t.appendChild(o)}function da(t,e,o){let n=Math.min(1,(e/75+o/150)/2);if(n<.05)return;let i=$t("div","pw-smog-overlay");i.style.background=`rgba(120,110,80,${.05+n*.15})`,t.appendChild(i);let r=$t("div","pw-haze-vignette");r.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${n*.3}) 100%)`,t.appendChild(r);let s=Math.floor(n*20);for(let l=0;l<s;l++){let p=$t("div","pw-dust-particle"),c=X(1,3+n*3);Object.assign(p.style,{left:`${X(0,100)}%`,top:`${X(10,90)}%`,width:`${c}px`,height:`${c}px`,animationDelay:`${X(0,8)}s`,animationFillMode:"backwards"}),t.appendChild(p)}let a=Math.floor(n*5);for(let l=0;l<a;l++){let p=$t("div","pw-haze-blob"),c=X(60,120);Object.assign(p.style,{left:`${X(-10,80)}%`,top:`${X(10,70)}%`,width:`${c}px`,height:`${c*.6}px`,animationDelay:`${X(0,12)}s`,animationFillMode:"backwards"}),t.appendChild(p)}}function ua(t,e,o){let n=document.createDocumentFragment();try{e&&ii(n);let i=o?Math.round(o.total/100*Kn):0;switch(t){case"sunny":e||qo(n),o&&i>0&&gt(n,i);break;case"clear-night":o&&i>0&&gt(n,i);break;case"partlycloudy":e||qo(n),gt(n,o?i:3);break;case"cloudy":gt(n,o?Math.max(i,4):6);break;case"rainy":Ge(n,40,1,2),gt(n,o?Math.max(i,3):4);break;case"pouring":Ge(n,80,1.5,3),gt(n,o?Math.max(i,5):6);break;case"snowy":ni(n,40),gt(n,o?Math.max(i,3):4);break;case"snowy-rainy":ni(n,20),Ge(n,20,.8,1),gt(n,o?Math.max(i,3):4);break;case"hail":Ge(n,30,1.2,3),ni(n,15),gt(n,o?Math.max(i,4):5);break;case"lightning":pa(n,2,[0,3]),gt(n,o?Math.max(i,5):6);break;case"lightning-rainy":pa(n,3,[0,2,4]),Ge(n,60,1.3,2),gt(n,o?Math.max(i,5):6);break;case"fog":ac(n);break;case"windy":case"windy-variant":gt(n,o?i:3,1.5);break;case"exceptional":lc(n);break;default:o&&i>0&&gt(n,i);break}}catch(i){console.warn(`${Bt} buildConditionFx threw \u2014 atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,i)}return n}function Xe(t,e,o){return o===e?0:Math.max(0,Math.min(1,(t-e)/(o-e)))}function ri(t,e,o="ellipse"){let n=Math.max(0,Math.min(1,e)),i=Math.round(3+n*50),r=Math.round(2+n*25),s=Math.round(50+n*30),a=l=>l.toString(16).padStart(2,"0");return`radial-gradient(${o} at 50% 30%, ${t}${a(i)} 0%, ${t}${a(r)} ${s}%, transparent 90%)`}function ma(t,e=6,o=1.2){let n=Math.max(0,Math.min(1,t));return e-n*(e-o)}function ha(t,e){let o=Math.max(0,Math.min(1,e)),n=Math.round(4+o*20),i=Math.round(o*8),s=Math.round((.15+o*.55)*255).toString(16).padStart(2,"0");return`0 0 ${n}px ${i}px ${t}${s}`}function fa(t,e="0,0,0"){let o=Math.max(0,Math.min(1,t));if(o<.1)return"";let n=Math.round(60-o*30),i=(o*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${n}%, rgba(${e},${i}) 100%)`}function ga(t,e=8,o=2){let n=Math.max(0,Math.min(1,t));return e-n*(e-o)}var cc="#a83d2a",va="#7a2d20",re="#fdf6e3",pc='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',dc="</svg>";function ba(t){let e=["day","cloudy","rain","night"].includes(t)?t:"day",n=`<circle class="mc" cx="20" cy="20" r="18" fill="${e==="night"?va:cc}" opacity="0.92"/>`,i=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${re}" stroke-width="0.8" opacity="0.85"/>`,r="";return e==="day"?r=`<circle class="md" cx="20" cy="14" r="2.4" fill="${re}" opacity="0.95"/>`:e==="cloudy"?r=`<circle class="md" cx="20" cy="14" r="2.4" fill="${re}" opacity="0.45"/>`:e==="rain"?r=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${re}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${re}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${re}" stroke-width="0.7" opacity="0.55"/>`].join(""):e==="night"&&(r=`<circle class="md" cx="20" cy="14" r="2.4" fill="${re}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${va}"/>`),`${pc}${n}${i}${r}${dc}`}function _t(t,e){return e?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(t)?"rain":["cloudy","fog"].includes(t)?"cloudy":"day"}var P={kicker(t){return`<div class="pw-t-kicker">${h(t)}</div>`},heroTier(t,{flavor:e="aqi",color:o=""}={}){let n=e==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",i=o?` style="color:${S(o)}"`:"";return`<div class="pw-t-hero-tier ${n}"${i}>${h(t)}</div>`},display(t,{color:e="",suffix:o=""}={}){let n=e?` style="color:${S(e)}"`:"",i=o?`<span class="pw-t-display-suf">${h(o)}</span>`:"";return`<div class="pw-t-display"${n}>${h(String(t))}${i}</div>`},narrative(t){return`<div class="pw-t-narrative">${h(t)}</div>`},gloss(t){return`<div class="pw-t-gloss">${h(t)}</div>`},meta(t){return`<div class="pw-t-meta">${h(t)}</div>`},chartCaption(t){return`<div class="pw-t-chart-caption">${h(t)}</div>`},stat(t,e,{data:o=!1,valueColor:n=""}={}){let i=n?` style="color:${S(n)}"`:"",r=o?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${i}>${h(String(t))}</div><div class="${r}">${h(e)}</div></div>`},statLabel(t){return`<span class="pw-t-stat-l">${h(t)}</span>`},dataToken(t){return`<span class="pw-t-data">${t}</span>`},heroBlock({tier:t="",tierFlavor:e="aqi",tierColor:o="",value:n="",valueSuffix:i="",valueColor:r="",narrative:s=""}={}){let a=t?this.heroTier(t,{flavor:e,color:o}):"",l=n!==""?this.display(n,{color:r,suffix:i}):"",p=s?this.narrative(s):"";return`<div class="pw-hero-block">${a}${l}${p}</div>`},statsRow(t,{columns:e=4,divided:o=!1}={}){let n=t.filter(Boolean);return n.length?`<div class="pulse-stats-row" data-cols="${e}"${o?' data-divided="true"':""}>${n.join("")}</div>`:""}};function mt({sectionClass:t,ariaLabel:e,brandVariant:o,kicker:n="",narrative:i="",preContent:r="",extraSectionClass:s="",sectionStyle:a="",body:l,proView:p="",proInitial:c=!1,proAction:u="view-swap",proAriaLabel:m="Toggle pro view",pro:d=!0}){d===!1&&(p="",u="view-swap",c=!1);let f=a?` style="${a}"`:"",g=`pw-section pw-cartouche ${t}${s?` ${s}`:""}`,w=ba(o),v=[n?P.kicker(n):"",i?P.narrative(i):""].filter(Boolean).join(""),b=v?`<div class="pw-t-marg">${v}</div>`:"",y=!!p,_=y||u!=="view-swap",$=y?`<div class="pw-view pw-view-default">${l}</div><div class="pw-view pw-view-pro">${p}</div>`:l,C=c?"true":"false",E=_?`<button class="pw-brand-mark-corner" aria-label="${h(m)}" aria-pressed="${C}" type="button">${w}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${w}</div>`;return`
    <div class="${g}" data-pro="${C}" data-pro-action="${u}"${f} role="region" aria-label="${h(e)}">
      ${r}
      ${E}
      <div class="pw-content">
        ${b}
        ${$}
      </div>
    </div>`}var ai=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),uc=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function mc(t,e){let o=Math.min(100,t/4e3*100),n=Math.min(100,Math.max(0,(6-e)/12*100));return Math.round(o*.6+n*.4)}function hc(t){return t<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:t<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:t<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:t<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function fc(t,e){let o=e.atmosCe,n=o.cape&&t.states[o.cape]&&Number(t.states[o.cape].state)||0,i=o.lifted_index&&t.states[o.lifted_index]&&Number(t.states[o.lifted_index].state)||0,r=!!(o.cape&&t.states[o.cape]),s=!!(o.lifted_index&&t.states[o.lifted_index]),a=r||s?mc(n,i):null;if(o.stability_assessment&&t.states[o.stability_assessment]){let p=t.states[o.stability_assessment].state,c=t.states[o.stability_assessment].attributes||{},u=ai[p];if(u){let m=uc[p]??0;return{tierKey:p,...u,score:m,source:"composite",attrs:c,capeValue:n,liValue:i,hasCape:r,hasLI:s}}}let l=a!==null?hc(a):null;return{tierKey:l?.tierKey||"unknown",label:l?.label||"Unknown",color:l?.color||"#888888",desc:l?.desc||"",score:a,source:"fallback",attrs:null,capeValue:n,liValue:i,hasCape:r,hasLI:s}}function gc(t){return Math.max(0,Math.min(100,t))}function wa(t,e=5e3){return e<=0?0:Math.max(0,Math.min(100,t/e*100))}function vc(t,e){let r=Math.max(t,e),s=5e3;r>5e3*.8&&(s=Math.max(5e3,Math.ceil(r*1.25/1e3)*1e3));let a=Math.ceil(s/5e3)*1e3;s=Math.ceil(s/a)*a;let l=[];for(let p=s;p>=0;p-=a)l.push(p);return{scaleMax:s,labelInterval:a,labels:l}}var bc=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function wc(t){if(!t)return null;let e=o=>bc[String(t[o]||"none")]??0;return{maxThermal:Math.max(e("cape_tier"),e("lifted_index_tier"),e("lapse_rate_tier")),shearTier:e("wind_shear_tier")}}function yc({tierKey:t,tierDesc:e,hourly:o,now:n,todaySunset:i,attrs:r}){if(t==="none"||t==="unknown")return"Atmosphere settled \xB7 no convective signals";let s=wc(r);if(s&&s.maxThermal===0&&s.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let a=i&&!isNaN(i.getTime())?i.getTime():null,l=n.getTime(),p=a!==null&&l>=a,c=Array.isArray(o)?o.slice(0,6):[],u=c.map(b=>Number(b&&b.cape)||0),m=u.some(b=>Number.isFinite(b)&&b>0),d=null,f=null;if(m){let b=Math.max(...u);if(b>0){let y=c[u.indexOf(b)],_=y?y.datetime:null,$=_?new Date(String(_)):null;$&&!isNaN($.getTime())&&(d=$.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),f=$.getTime())}}if(d===null||f===null){let b=e||"Storm risk active";return p?`${b} \xB7 calming overnight`:b}let g=1800*1e3,w=f<l-g,v=f>=l-g&&f<=l+g;return w?p?`Storm risk easing \u2014 peaked ${d}, calming overnight`:`Storm risk easing \u2014 peaked ${d}`:v?p?"Storm risk peaking now, calming overnight":a!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":a!==null&&f<a?`Storm risk peaks ${d}, calming after sunset`:a!==null?`Storm risk peaks ${d} (after sunset)`:`Storm risk peaks ${d}`}var wh=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var yh=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function _c(t){let e=Math.max(0,Math.min(100,t)),o=e/100;return{count:e<=10?0:Math.round(2+o*6),minSize:2+Math.round(o),maxSize:3+Math.round(o),minDur:4-o*2.2,maxDur:4-o*1.2}}function ya(t,e,o=Math.random){let n=document.createDocumentFragment(),i=_c(t);if(i.count===0)return n;let r=S(e);for(let s=0;s<i.count;s++){let a=document.createElement("div");a.className="pw-thermal-particle";let l=i.minSize+o()*(i.maxSize-i.minSize),p=10+o()*80,c=o()*30,u=i.minDur+o()*(i.maxDur-i.minDur),m=o()*u,d=.4+o()*.3,f=-(50+o()*60);a.setAttribute("style",[`width:${l.toFixed(1)}px`,`height:${l.toFixed(1)}px`,`left:${p.toFixed(1)}%`,`bottom:${c.toFixed(1)}%`,`background:${r}`,`--rise-dur:${u.toFixed(2)}s`,`--rise-dist:${f.toFixed(0)}px`,`--peak-op:${d.toFixed(2)}`,`animation-delay:${m.toFixed(2)}s`].join(";")),n.appendChild(a)}return n}function _a({hass:t,config:e,discovery:o,forecastData:n}){let i=o.atmosCe;if(!i.cape&&!i.lifted_index&&!i.freezing_level_height)return console.debug(`${Bt} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height) \u2014 section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let r=fc(t,o),{capeValue:s,liValue:a,hasCape:l,hasLI:p,score:c}=r,u=D=>{let U=i[D];if(!U||!t.states[U])return{value:null,unit:""};let G=Number(t.states[U].state);if(!Number.isFinite(G))return{value:null,unit:""};let tt=String(t.states[U].attributes?.unit_of_measurement||"");return{value:G,unit:tt}},m=u("wind_shear_0_6_km"),d=u("lapse_rate_700_500_hpa"),f=u("freezing_level_height"),g=u("lcl_height"),w=r.tierKey,v={label:r.label,color:r.color,desc:r.desc},y=["slight","enhanced","moderate","high"].includes(w)?"rain":"cloudy",_=new Date,$=o.sunEntityId?t.states[o.sunEntityId]:null,{todaySunset:C}=Ee(_,$?.attributes?.next_rising,$?.attributes?.next_setting),E=yc({tierKey:w,tierDesc:v.desc,hourly:n?.hourly||[],now:_,todaySunset:C,attrs:r.attrs}),M=f.value??0,F=g.value??0,{scaleMax:I,labels:k}=vc(M,F),x=c!==null?gc(c):0,A=v.color,T=l||p?`
          <div class="pw-atmos-cape-fill" style="height:${Number(x)}%;background:linear-gradient(to top, ${S(A)}66, ${S(A)}11)"></div>`:"",L=f.unit||"m",O=f.value!==null?(()=>{let D=wa(f.value,I);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(D)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${h(String(Math.round(f.value)))}${h(L)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",W=g.unit||"m",R=g.value!==null?(()=>{let D=wa(g.value,I);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(D)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${h(String(Math.round(g.value)))}${h(W)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",B=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${k.map(D=>`<span class="pw-atmos-scale-label">${D>=1e3?`${D/1e3}km`:String(D)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${T}
            ${O}
            ${R}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,q=P.heroBlock({tier:v.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:E}),H=[l?P.stat(`${Math.round(s)}`,"cape J/kg"):"",p?P.stat(a.toFixed(1),"lifted idx"):"",m.value!==null?P.stat(`${Math.round(m.value)}`,`shear ${m.unit||"km/h"}`):"",d.value!==null?P.stat(d.value.toFixed(1),`lapse ${d.unit||"\xB0C/km"}`):""],V=P.statsRow(H,{columns:4,divided:!0}),z=`
        ${q}
        ${B}
        ${V}`;return mt({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:y,kicker:"atmospheric stability",body:z,pro:e?.pro!==!1})}function xa(t){let e=t.getHours();return e>=6&&e<12?"this morning":e>=12&&e<17?"this afternoon":e>=17&&e<21?"this evening":"tonight"}function xc(t,e){return t==="sunny"||t==="clear-night"?"Clear skies":t==="rainy"||t==="pouring"?"Rain":t==="snowy"||t==="snowy-rainy"?"Snow":t==="lightning"||t==="lightning-rainy"?"Storms":t==="fog"?"Fog":e>=88?"Overcast":e>=50?"Mostly cloudy":e>=12?"Some sun":"Sunny"}function $c(t){let e=t.slots.slice(0,6);if(e.length===0)return null;let o=Number(e[e.length-1].cloud_coverage),n=Number.isFinite(o)?o-t.cloudCoverNow:0,i=e.reduce((p,c)=>Math.max(p,Number(c.precipitation_probability)||0),0),r=e.reduce((p,c)=>Math.max(p,Number(c.snowfall)||0),0),a=e.reduce((p,c)=>Math.max(p,Number(c.wind_speed)||0),t.windSpeed)-t.windSpeed;return["moderate","high"].includes(t.stabilityState)?"with thunderstorms developing":i>=60?r>0?"with snow likely":"with rain likely":i>=40?r>0?"with snow possible":"with a brief shower or two":n>=30?"then increasing clouds":n<=-30?"then clearing":a>=8?"with wind firming":null}function $a(t){let e=xc(t.conditionNow,Number(t.cloudCoverNow)||0),o=$c(t),n=o?xa(t.now):null,i;return o?o.startsWith("then ")?i=`${e}, ${o} ${n}.`:i=`${e}, then ${o} ${n}.`:i=`${e} ${xa(t.now)}.`,{initial:e,transition:o,anchor:n,sentence:i}}var Sc={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},kc="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",Sa={dry:"#30d158",comfortable:"#30d158",slightly_humid:"#ffd60a",humid:"#ff9f0a",oppressive:"#ff453a",clear:"#30d158",good:"#30d158",moderate:"#ffd60a",poor:"#ff9f0a",fog:"#ff453a"};function Tc(t){return t<=30?"#5ac8fa":t<=60?"#30d158":t<=80?"#ff9f0a":"#ff453a"}function Ac(t,e){if(t==null)return"Press";let o=Math.abs(Number(t));if(o<=1)return"Press";let n=e==="rising"?"Rising":e==="falling"?"Falling":"Press";return o>3?`${n} rapidly`:n}function Cc(t,e,o){let n=t.map(c=>{let u=Number(c.cape);return Number.isFinite(u)?u:0}),i=Math.max(...n,300),r=Math.max(...n),s=n.indexOf(r),l=n.map((c,u)=>({x:u/Math.max(t.length-1,1)*e,y:o-c/i*o})).map((c,u)=>`${u===0?"M":"L"}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" "),p=`${l} L${e},${o} L0,${o} Z`;return{svgPath:l,areaPath:p,peakValue:r,peakIndex:s,maxCape:i}}function Mc(t,e,o,n,i,r,s,a){let l=[];return s>0&&l.push({name:"Snow",value:s,unit:a}),o>0&&l.push({name:"Rain",value:o,unit:n}),i>0&&l.push({name:"Showers",value:i,unit:r}),l.length>0?`${l.map(c=>`${h(c.name)} ${h(c.value.toFixed(1))} ${h(c.unit)}`).join(" \xB7 ")} now`:t>0?`Precipitation \u2014 next 12h \xB7 ${h(t.toFixed(1))} ${h(e)} now`:"Precipitation \u2014 next 12h"}function Vo(t){return!t||isNaN(t.getTime())?"":dt(t)}function ka({hass:t,config:e,discovery:o,weatherEntity:n,forecastData:i}){let r=n.attributes,s=o.atmosCe,a=o.sunEntityId||"",{condition:l,isNight:p}=Ho(t,n,o),c=(K,J)=>Ro(t,s,r,K,J),u=(K,J)=>ia(t,s,K,J),m=c("temperature","temperature"),d=c("apparent_temperature","apparent_temperature")||m,f=c("humidity","humidity"),g=c("wind_speed","wind_speed"),w=c("wind_direction","wind_bearing"),v=c("wind_gusts","wind_gust_speed")||c("wind_gusts","wind_gusts"),b=c("dew_point","dew_point"),y=c("visibility","visibility"),_=c("pressure","pressure"),$=u("temperature","\xB0C"),C=u("visibility","km"),E=u("pressure","hPa"),M=u("dew_point","\xB0C"),F=i?.daily,I=i?.hourly,k=r.forecast,x=m,A=m;if(F&&F.length>0){let K=F[0],J=Number(K.templow),j=Number(K.temperature);Number.isFinite(J)&&Number.isFinite(j)&&(x=Math.min(J,j),A=Math.max(J,j))}else if(I&&I.length>0){let K=Date.now(),J=new Date;J.setHours(23,59,59,999);let j=J.getTime(),ct=1/0,pt=-1/0;for(let Wt of I.slice(0,24)){let kt=Date.parse(String(Wt.datetime??""));if(Number.isFinite(kt)&&(kt<K||kt>j))continue;let ot=Number(Wt.temperature);Number.isFinite(ot)&&(ot<ct&&(ct=ot),ot>pt&&(pt=ot))}Number.isFinite(ct)&&Number.isFinite(pt)&&ct!==pt&&(x=Math.min(ct,m),A=Math.max(pt,m))}else if(k&&k.length>0){let K=k[0],J=Number(K.templow),j=Number(K.temperature);Number.isFinite(J)&&Number.isFinite(j)&&(x=Math.min(J,j),A=Math.max(J,j))}let T=o.atmosCe.uv_index,L=T?Number(t.states[T]?.state)||0:Number(r.uv_index??0),{value:O,unit:W}=Me(t,s.precipitation),R=W||"mm",{value:N,unit:B}=Me(t,s.rain),{value:q,unit:H}=Me(t,s.showers),{value:V,unit:z}=Me(t,s.snowfall),D=B||"mm",U=H||"mm",G=z||"cm",{value:tt,entity:et}=Me(t,s.uv_index_clear_sky),lt=s.dew_point_comfort?t.states[s.dew_point_comfort]:null,vt=s.visibility_category?t.states[s.visibility_category]:null,St=s.feels_like_context?t.states[s.feels_like_context]:null,it=s.pressure_trend?t.states[s.pressure_trend]:null,Mt=new Date,bt=a?t.states[a]:null,Xo=bt?.attributes?.next_rising,Zo=bt?.attributes?.next_setting,{todaySunrise:Ne,todaySunset:ee,tomorrowSunrise:ze}=Ee(Mt,Xo,Zo),zt=null;o.atmosCe.cloud_cover&&(zt={total:Number(t.states[o.atmosCe.cloud_cover]?.state)||0,low:Number(t.states[o.atmosCe.cloud_cover_low]?.state)||0,mid:Number(t.states[o.atmosCe.cloud_cover_mid]?.state)||0,high:Number(t.states[o.atmosCe.cloud_cover_high]?.state)||0});let se=s.freezing_level_height?t.states[s.freezing_level_height]:null,Je=se&&Number(se.state)||0,le=(s.stability_assessment?t.states[s.stability_assessment]:null)?.state||"",Le=s.lifted_index?t.states[s.lifted_index]:null,Lt=Le&&Number(Le.state)||0,Qe=S(Sc[l]||kc),Yo=Math.max(A-x,1),gp=Math.max(0,Math.min(100,(m-x)/Yo*100)),ui=Po(w),Qa=`data-condition="${h(l)}" data-night="${p}" data-cloud='${h(JSON.stringify(zt||""))}'`,ts=Xe(m,20,42),es=Xe(m,15,-10),Ko=Math.max(ts,es),os=Qt(m),vp=Ko>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${ha(os,Ko)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",mi=fa(Ko),ns=mi?`<div class="pw-tension-vignette" style="background: ${S(mi)}"></div>`:"",bp=V>0?`<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${h(V.toFixed(1))} ${h(G)}</div>`:"",hi=St?.state||"",ce=St?.attributes?.difference,to="";hi==="wind_chill"&&ce!==null&&ce!==void 0?to=`<div class="pw-feels-context">Wind chill ${h(String(Math.round(Number(ce))))}\xB0</div>`:hi==="heat_index"&&ce!==null&&ce!==void 0&&(to=`<div class="pw-feels-context">Heat index +${h(String(Math.round(Number(ce))))}\xB0</div>`);let is=["marginal","slight","enhanced","moderate","high"],rs="";if(le&&is.includes(le)){let K=ai[le];if(K){let J=S(K.color),j=`\u26A1 ${h(K.label)}`;if(Le&&Lt<0){let ct=Ue.find(pt=>Lt>=pt.min)||Ue[Ue.length-1];j+=` \xB7 <span style="color:${S(ct.color)}">LI ${h(String(Lt))}</span>`}rs=` <span class="pw-stability-badge" style="background:${J}33; color:${J}">${j}</span>`}}let Jo=vt?.state||"",wp=Jo&&!["unavailable","unknown"].includes(Jo)&&Sa[Jo]||"",eo=lt?.state||"",yp=eo&&!["unavailable","unknown"].includes(eo)&&Sa[eo]||"",fi=it?.attributes?.trend_symbol||"",gi=it?.state==="rising"?"#30d158":it?.state==="falling"?"#ff9f0a":it?.state==="steady"?"#5ac8fa":"",as=et&&Math.abs(tt-L)>=.5,Qo=it?.attributes?.change_3h,tn=Ac(Qo!=null?Number(Qo):null,it?.state||"");if(tn==="Press"&&it?.state){let K=it.state;K==="rising"?tn="Rising":K==="falling"&&(tn="Falling")}let _p=gi||(it?"#5ac8fa":""),ss=aa(g),xp=Oo(g),en=v>g+5,ls=g>0&&v/g>1.5,cs=en?ls?` / <b>${h(Math.round(v))}</b>`:` / ${h(Math.round(v))}`:"",ps=`<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(w)||0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${S(ss)}" opacity="0.8"/></svg>`,$p=`${h(Math.round(g))}${cs} ${ps}${h(ui)}`,Sp=`linear-gradient(to right, ${S(Qt(x))}, ${S(Qt(A))})`,ds="";if(se&&Je<5e3&&x<=0){let K=Math.max(0,Math.min(100,(0-x)/Yo*100)),J=se?.attributes?.unit_of_measurement||"m";ds=`<div class="pw-arc-freeze" style="left:${Number(K)}%">
            <div class="pw-arc-freeze-label">\u2744 ${h(String(Math.round(Je)))}${h(J)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`}let vi="",bi=a?t.states[a]:null;if(bi&&Ne&&ee&&ze){let K=Mt.getTime(),J=bi.state==="above_horizon",j,ct,pt,Wt,kt;if(J){let nt=Ne.getTime(),xt=ee.getTime(),Gt=Math.max(xt-nt,1);j=Math.max(0,Math.min(100,(K-nt)/Gt*100)),ct=Vo(Ne),pt=Vo(ee),Wt="background: linear-gradient(to right, #ff9f0a, #ffd60a)",kt="#ff9f0a"}else{let nt=ee.getTime(),xt=ze.getTime(),Gt=Math.max(xt-nt,1);j=Math.max(0,Math.min(100,(K-nt)/Gt*100)),ct=Vo(ee),pt=Vo(ze),Wt="background: linear-gradient(to right, #1a3050, #5ac8fa)",kt="#5ac8fa"}let ot=`left:${Number(j)}%; background:${S(kt)}; box-shadow: 0 0 6px ${S(kt)}66`,jt=` style="color:${S(kt)}"`,st=J?"1":"0.85",Ut=J?"":"\u{1F319}";vi=`
      <div class="pw-day-arc" style="opacity:${st}">
        <span class="pw-day-arc-label"${jt}>${h(ct)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(j)}%; ${Wt}"></div>
          <div class="pw-day-arc-marker" style="${ot}">${Ut}</div>
        </div>
        <span class="pw-day-arc-label"${jt}>${h(pt)}</span>
      </div>`}let us="",ms="",hs="",oo="",wi=i?.hourly||[];if(wi.length>0){let j=Do(wi,new Date).slice(0,12),ct=j.some(ot=>Number(ot.precipitation_probability)>0),pt=Mc(O,R,N,D,q,U,V,G);if(O>0)oo=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">\u{1F327}</span> ${pt}
      </div>`;else{let ot=$a({now:new Date,cloudCoverNow:zt?zt.total:0,conditionNow:l,slots:j,windSpeed:g,uvIndex:L,stabilityState:le});oo=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        ${h(ot.sentence)}
      </div>`}if(ct){let ot=j.map(Ut=>{let nt=Math.min(100,Math.max(0,Number(Ut.precipitation_probability)||0)),xt=Number(Ut.snowfall)||0,Gt=(Number(Ut.rain)||0)+(Number(Ut.showers)||0),Re=xt>0;if(Re&&Gt>0){let Ts=xt+Gt,$i=Math.round(nt*xt/Ts),As=nt-$i;return`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number(As)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number($i)}%"></div></div>`}return`<div class="pulse-precip-slot"><div class="${Re?"pulse-precip-fill pw-precip-snow":"pulse-precip-fill"}" style="height: ${nt}%"></div></div>`}).join(""),st=j[Math.floor(j.length/2)]?`+${Math.floor(j.length/2)}h`:"";us=`
      <div style="position: relative; z-index: 2; margin: 16px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label">${pt}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${ot}</div>
        <div class="pw-precip-times"><span>Now</span><span>${h(st)}</span><span>+${h(String(j.length))}h</span></div>
      </div>`}if(j.some(ot=>Number(ot.cape)>300)){let st=Cc(j,200,24),Ut=st.peakIndex/Math.max(j.length-1,1)*200,nt=st.peakValue>=1e3?`${(st.peakValue/1e3).toFixed(1)}k`:String(Math.round(st.peakValue)),xt=j[st.peakIndex]?.datetime?new Date(j[st.peakIndex].datetime):null,Gt=xt?dt(xt):"",Re=je("pw-cape-grad");ms=`
      <div style="position: relative; z-index: 2; margin: 4px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="${Re}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${st.areaPath}" fill="url(#${Re})"/>
            <path d="${st.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${st.peakValue>0?`<div class="pw-cape-peak" style="left:${Number(Ut)}px">${h(nt)} ${h(Gt)}</div>`:""}
        </div>
      </div>`}j.some(ot=>ot.dew_point!==void 0&&ot.dew_point!==null)&&(hs=`
      <div style="position: relative; z-index: 2; margin: 2px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${j.map(jt=>{let st=Number(jt.dew_point)||0;return`<div class="pw-comfort-slot" style="background:${S(la(st))}"></div>`}).join("")}</div>
      </div>`)}let kp=Qt(d),Tp=zt!==null?sa(zt.total):"",Ap=Tc(f),Cp=`${h(Math.round(_))} ${h(E)}${fi?` <span style="color:${S(gi)}">${h(fi)}</span>`:""}`,Mp=`${h(Math.round(L))}${as?` <span style="opacity:0.5">/ ${h(String(Math.round(tt)))}</span>`:""}`;function fs(){return dt(new Date)}let gs=ca(l),vs=_t(l,p),bs=e?.location_label||"Now",yi=to?to.replace(/<[^>]*>/g,"").trim():"",ws=oo?oo.replace(/<[^>]*>/g,"").trim():"",ys=zt?Math.round(zt.total)+"%":"--",_s=`
        <div class="pw-loc-stamp">${h(bs)} \xB7 ${h(fs())}</div>
        <div class="pw-hero-block">
          ${P.display(Math.round(m),{suffix:$})}
          ${P.gloss(`${gs}${yi?" \xB7 "+yi:""}`)}
        </div>`,xs=P.statsRow([P.stat(`${Math.round(x)}/${Math.round(A)}\xB0`,"range"),P.stat(`${Math.round(g)}${en?` / ${Math.round(v)}`:""} ${ui}`,en?"wind / gust":"wind"),P.stat(Math.round(L),"uv"),P.stat(ys,"cloud")],{columns:4}),no=(i?.daily||[]).slice(0,7),on="";if(no.length>=2){let j=no.map(nt=>Number(nt.temperature)||0),ct=no.map(nt=>Number(nt.templow??nt.temperature)||0),pt=Math.min(...ct),Wt=Math.max(...j),kt=Math.max(Wt-pt,1),ot=nt=>nt/(no.length-1)*320,jt=nt=>38-(nt-pt)/kt*34-2,st=j.map((nt,xt)=>`${xt===0?"M":"L"}${ot(xt).toFixed(1)},${jt(nt).toFixed(1)}`).join(" ");on=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${st} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${st}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let $s=on?`<div class="pw-overview-spark-block">
        ${P.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${on}</div>
      </div>`:"",_i=vt?.state||"",nn=it?.state||"",Ss=[Number.isFinite(f)&&f>0,Number.isFinite(b)&&b!==0,!!_i,!!nn].filter(Boolean).length>=2,xi="";if(Ss){let K=Number.isFinite(f)&&f>0?P.stat(`${Math.round(f)}%`,eo||"humidity"):P.stat("\u2014","humidity"),J=Number.isFinite(b)?P.stat(`${Math.round(b)}${M}`,"dew point"):P.stat("\u2014","dew point"),j=Number.isFinite(_)&&_>0?P.stat(`${Math.round(_)}`,nn?`${E} ${nn}`:E):P.stat("\u2014","pressure"),ct=Number.isFinite(y)&&y>0?P.stat(`${y.toFixed(y<10?1:0)}${C}`,_i||"visibility"):P.stat("\u2014","visibility");xi=P.statsRow([K,J,j,ct],{columns:4})}let ks=`
        ${_s}
        ${P.narrative(ws)}
        ${vi}
        ${$s}
        ${xs}
        ${xi}`;return mt({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:vs,preContent:`${ns}<div class="pw-fx" ${Qa} role="img" aria-label="${h(l)} weather effects"></div>`,body:ks,pro:e?.pro!==!1})}function Ec(t){if(!t||t.length===0)return"Forecast unavailable";let e=0;for(let s=1;s<t.length;s++)Number(t[s].temperature)>Number(t[e].temperature)&&(e=s);let o=t.findIndex(s=>Number(s.precipitation_probability)>=50),n=s=>s===0?"today":new Date(String(t[s].datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),i=n(e),r=Math.round(Number(t[e].temperature));return o>=0&&o!==e?`Warmest ${i} (${r}\xB0) \xB7 rain ${n(o)}`:o>=0?`Wet stretch \xB7 warmest ${i} (${r}\xB0)`:`Warmest ${i} (${r}\xB0) \xB7 dry through the week`}function Ta({hass:t,config:e,discovery:o,forecastData:n,weatherEntity:i}){let r=n?.daily||[];if(r.length===0)return null;let s=o.atmosCe,l=(s.temperature?t.states[s.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",p=r.slice(0,7),c=p.flatMap($=>[ut($.temperature,0),ut($.templow,0)]),u=Math.min(...c),m=Math.max(...c),d=Math.max(m-u,1),f=Number(i?.attributes?.temperature),g=p.map(($,C)=>{let E=ut($.temperature,0),M=ut($.templow,0),F=Math.round(Number($.precipitation_probability)||0),I=C===0,k=I?"today":new Date(String($.datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),x=Bo(String($.condition||"")),A=F>=50?`<span class="pw-fc-pop">${h(String(F))}%</span>`:'<span class="pw-fc-pop"></span>',T=(M-u)/d*100,L=(E-M)/d*100,O=I&&Number.isFinite(f)?`<span class="pw-fc-now" style="left:${S(((f-u)/d*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${I?" is-today":""}">
        <span class="pw-fc-day">${h(k)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${x}</span>
        ${A}
        <span class="pw-fc-bar" aria-label="High ${Math.round(E)}${h(l)}, low ${Math.round(M)}${h(l)}">
          <span class="pw-fc-bar-fill" style="left:${S(T.toFixed(2)+"%")};width:${S(L.toFixed(2)+"%")}"></span>
          ${O}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${h(String(Math.round(M)))}\xB0</span>
          <span class="pw-fc-hi">${h(String(Math.round(E)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:w,isNight:v}=Ho(t,i,o),b=_t(w,v),y=Ec(p),_=`
        <div class="pw-fc-list" role="list">
          ${g}
        </div>`;return mt({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:b,kicker:"the week ahead",narrative:y,body:_,pro:e?.pro!==!1})}var Fe=240,qt=Fe/2,Vt=Fe/2,Ze=90,Aa=.12,Wo=6,Uo=.5,Ca=.25,Fc=.3,Ic=6,Ma=.7,Nc=.2,zc=4,Lc=3.3,Rc=15,Hc=35,Dc=.08,Oc=.2,Pc=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function Ea(t){return(t-90)*Math.PI/180}function Bc(t){let e=t*Math.PI/180;return{x:Math.sin(e),y:-Math.cos(e)}}function te(t,e){return{x:qt+e*Math.cos(t),y:Vt+e*Math.sin(t)}}function qc(t,e,o,n){let i=Math.min(t/Ce,1)*Ze,r=te(e-Ca,i),s=te(e+Ca,i),a=o>Fc?"pw-gust-sweep":"",l=Math.max(.6,2.5-o*2).toFixed(2),p=(.15+o*.3).toFixed(2),c=`transform-origin:${qt}px ${Vt}px;--gust-dur:${l}s;--gust-peak:${p}`;return Ct("path",{class:a,d:`M${qt},${Vt} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${s.x.toFixed(1)},${s.y.toFixed(1)} Z`,fill:n,opacity:.15,style:c})}function Vc(t,e,o,n){let i=Math.min(t/Ce,1)*Ze,r=te(e,i),s=te(e-Aa,i*.7),a=te(e+Aa,i*.7),l={x:r.x-Wo*Math.cos(e-Uo),y:r.y-Wo*Math.sin(e-Uo)},p={x:r.x-Wo*Math.cos(e+Uo),y:r.y-Wo*Math.sin(e+Uo)},c=o*Ic,u=Math.max(.4,4-o*3.6),m=c>Nc?`animation:pw-arrowSway ${u.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(c*Ma).toFixed(2)}deg;--sway-back:${(-c*(1-Ma)).toFixed(2)}deg`:"",d=`transform-origin:${qt}px ${Vt}px;filter:drop-shadow(0 0 6px ${Xt(n,.38)});${m}`,f=Ct("path",{d:`M${qt},${Vt} L${s.x.toFixed(1)},${s.y.toFixed(1)} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${a.x.toFixed(1)},${a.y.toFixed(1)} Z`,fill:n,opacity:.5}),g=Ct("line",{x1:qt,y1:Vt,x2:r.x.toFixed(1),y2:r.y.toFixed(1),stroke:n,"stroke-width":2.5,"stroke-linecap":"round"}),w=Ct("path",{d:`M${r.x.toFixed(1)},${r.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)} Z`,fill:n});return Ct("g",{style:d},f+g+w)}function Fa({hass:t,config:e,discovery:o,weatherEntity:n}){let i=n.attributes,r=o.atmosCe,s=e.speed_mode||"speed",a=(z,D)=>Ro(t,r,i,z,D),l=a("wind_speed","wind_speed"),p=a("wind_gusts","wind_gust_speed")||a("wind_gusts","wind_gusts")||l,c=a("wind_direction","wind_bearing"),m=(r.wind_speed?t.states[r.wind_speed]:null)?.attributes?.unit_of_measurement||i.wind_speed_unit||"km/h",d=s==="gust"?p:l,f=Math.min(l/Ce,1),g=Oo(d),w=oi(d),v=Ae[w]||Ae.calm,b=Po(c),y=Ea(c),_=Bc(c),$=Math.round(f*Or),C=zc-f*Lc,E=Dc+f*Oc,M=Rc+f*Hc,F=-_.y,I=_.x,k=[];for(let z=0;z<$;z++){let D=(Math.random()-.5)*400,U=-120-Math.random()*60,G=420+Math.random()*60,tt=(M*(.6+Math.random()*.8)).toFixed(1),et=(C+Math.random()*C*.5).toFixed(2),lt=(Math.random()*3).toFixed(2),vt=(E*(.5+Math.random()*.5)).toFixed(3),St=(U*_.x+D*F).toFixed(1),it=(U*_.y+D*I).toFixed(1),Mt=(G*_.x+D*F).toFixed(1),bt=(G*_.y+D*I).toFixed(1);k.push(`<div class="pw-streak" style="left:50%;top:50%;width:${tt}px;height:1px;transform:rotate(${c-90}deg);animation-duration:${et}s;animation-delay:${lt}s;opacity:${vt};background:linear-gradient(to right, transparent, ${Xt(v,.27)}, transparent);--sx:${St}px;--sy:${it}px;--ex:${Mt}px;--ey:${bt}px"></div>`)}let x=[];for(let z=1;z<=3;z++)x.push(Ct("circle",{cx:qt,cy:Vt,r:z*30,fill:"none",stroke:v,"stroke-width":.5,opacity:.08+z*.02}));for(let z of Pc){let D=Ea(z.a),U=te(D,20),G=te(D,Ze+4),tt=te(D,Ze+16),et=z.l.length===1;x.push(Ct("line",{x1:U.x.toFixed(1),y1:U.y.toFixed(1),x2:G.x.toFixed(1),y2:G.y.toFixed(1),stroke:v,"stroke-width":.5,opacity:.12})),x.push(Ct("text",{x:tt.x.toFixed(1),y:tt.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:et?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":et?11:9,"font-weight":et?600:400},h(z.l)))}x.push(qc(p,y,f,v)),x.push(Vc(d,y,f,v)),(d>Ce||p>Ce)&&x.push(Ct("circle",{cx:qt,cy:Vt,r:Ze+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),x.push(Ct("circle",{cx:qt,cy:Vt,r:18,fill:v,opacity:.06})),x.push(Ct("circle",{cx:qt,cy:Vt,r:3,fill:v}));let T=f>Yn?(f-Yn)*5:0,L=Math.max(.15,.4-f*.25),O="";T>.1&&(O=`--dx:${(T*_.x).toFixed(2)}px;--dy:${(T*_.y).toFixed(2)}px;animation:pw-roseShake ${L.toFixed(2)}s ease-in-out infinite`);let W=Math.round(12+f*50).toString(16).padStart(2,"0"),R=Math.round(6+f*25).toString(16).padStart(2,"0"),N=ra(`radial-gradient(ellipse at 50% 50%, ${v}${W} 0%, ${v}${R} 40%, transparent 85%)`),B=_t(n?.state||"sunny",!1),q=s==="gust",H=q?"wind \xB7 gust":"wind",V=`
        <div class="pw-wind-streaks">${k.join("")}</div>
        <div class="pw-rose-wrap" style="${O}">
          <svg class="pw-rose-svg" width="${Fe}" height="${Fe}" viewBox="0 0 ${Fe} ${Fe}" style="display:block" role="img" aria-label="Wind compass rose showing ${h(Math.round(d))} ${h(m)} from ${h(b)}">
            <title>Wind direction compass</title>
            ${x.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${S(v)}">${h(Math.round(d))}</div>
            <div class="pw-wind-unit">${h(m)} \xB7 ${h(Math.round(c))}\xB0 ${h(b)}</div>
            <div class="pw-wind-beaufort" style="color: ${S(v)}">${h(g.name)}</div>
            <div class="pw-wind-beaufort-desc">${h(g.desc)}</div>
          </div>
        </div>`;return mt({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:B,kicker:H,sectionStyle:`background: ${S(N)}`,body:V,proAction:"wind-mode",proInitial:q,proAriaLabel:"Toggle speed and gust mode",pro:e.pro!==!1})}function Wc(t,e,o,n){if(o&&n){let s=(e==="us"?Zn:Xn).find(a=>a.label.toLowerCase()===o.toLowerCase());return{label:o,color:n,desc:s?.desc||""}}let i=e==="us"?Zn:Xn;for(let r of i)if(t<=r.max)return r;return i[i.length-1]}function Uc(t){let e=(t||"").toLowerCase();return e.includes("very unhealthy")||e.includes("hazardous")||e.includes("extremely poor")?"very_unhealthy":e.includes("sensitive")?"unhealthy_sg":e.includes("unhealthy")||e.includes("very poor")?"unhealthy":e.includes("moderate")||e.includes("fair")||e.includes("poor")?"moderate":e.includes("good")?"good":"unknown"}var Ia=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function Na({hass:t,config:e,discovery:o,weatherEntity:n}){let i=e.scale||"eu",r=i==="us"?"us_aqi":"european_aqi",s=e.aqi_entity||o.atmosCe[r];if(!s||!t.states[s])return null;let a=t.states[s],l=Number(a.state)||0,p=a.attributes?.category||null,c=a.attributes?.color||null,u=Wc(l,i,p,c),m=T=>{let L=o.atmosCe[T];if(!L||!t.states[L])return null;let O=Number(t.states[L].state);return Number.isFinite(O)?O:null},d=m("pm2_5"),f=m("pm10"),g=m("ozone"),w=m("nitrogen_dioxide"),v=m("sulphur_dioxide"),b=m("carbon_monoxide"),y=Uc(u.label),_=Ia[y]||Ia.unknown,$=_t("cloudy",!1),C=i==="us",M=Math.min(100,Math.max(0,l/(C?300:100)*100)),F=C?"air quality \xB7 us":"air quality",I=P.heroBlock({value:Math.round(l),valueColor:_,tier:u.label,tierFlavor:"aqi",tierColor:_}),k=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${S(`${M.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,x=P.statsRow([d!==null?P.stat(Math.round(d),"PM2.5",{data:!0}):"",f!==null?P.stat(Math.round(f),"PM10",{data:!0}):"",g!==null?P.stat(Math.round(g),"O\u2083",{data:!0}):"",w!==null?P.stat(Math.round(w),"NO\u2082",{data:!0}):"",v!==null?P.stat(Math.round(v),"SO\u2082",{data:!0}):"",b!==null?P.stat(b.toFixed(1),"CO",{data:!0}):""],{columns:3}),A=`
        ${I}
        ${k}
        ${x}`;return mt({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:$,kicker:F,body:A,proAction:"aqi-scale",proInitial:C,proAriaLabel:"Toggle EU and US AQI scale",pro:e.pro!==!1})}function jc(t){let e=(t%yt+yt)%yt;return Kr[Math.floor(e/yt*8)%8]}function Gc(t){return(t%yt+yt)%yt<yt/2}var si=864e5;function It(t){return!t||isNaN(t.getTime())?"--:--":t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}function Xc(t,e,o,n,i){if(n==null)return`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#c8d0e0"/>`;let r=Math.max(0,Math.min(1,n/100)),s=i!=null?Gc(i):!0,a=`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#2a2a3a"/>`;if(r>=.99)a+=`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#e8e0d0"/>`;else if(r>.01){let l=e-o,p=e+o,c=(o*Math.abs(2*r-1)).toFixed(1),u=r>.5?1:0,m;s?m=`M${t.toFixed(1)},${l.toFixed(1)} A${o},${o} 0 0 1 ${t.toFixed(1)},${p.toFixed(1)} A${c},${o} 0 0 ${u} ${t.toFixed(1)},${l.toFixed(1)} Z`:m=`M${t.toFixed(1)},${l.toFixed(1)} A${o},${o} 0 0 0 ${t.toFixed(1)},${p.toFixed(1)} A${c},${o} 0 0 ${1-u} ${t.toFixed(1)},${l.toFixed(1)} Z`,a+=`<path d="${m}" fill="#e8e0d0"/>`}return a}var jo="#050510",za="#0a1226",La="#172b4f",Ra="#1f3d6e",Ha="#3a6fa8",Da="#d97a3a",Oa="#ff9f0a",Pa="#ffc560",Ba="#7eaedb",qa="#2c5a8e",Va="#ffd60a";function Zc(t,e,o,n,i,r,s,a,l,p){let c=new Date(t.getTime());c.setHours(0,0,0,0);let u=t.getTime(),m=e.getTime(),d=(o??new Date(u-35*6e4)).getTime(),f=(n??new Date(u-30*6e4)).getTime(),g=(i??new Date(u-6*6e4)).getTime(),w=(r??new Date(u+30*6e4)).getTime(),v=(s??new Date(m-30*6e4)).getTime(),b=(a??new Date(m+6*6e4)).getTime(),y=(l??new Date(m+30*6e4)).getTime(),_=(p??new Date(m+35*6e4)).getTime(),$=(u+m)/2,C=A=>Math.max(0,Math.min(100,A)),E=A=>C((A-c.getTime())/si*100),M=(A,T)=>E((A+T)/2),F=Math.min(60,(m-u)/8)*6e4,I=$-F,k=$+F;return`linear-gradient(to right, ${[`${jo} 0%`,`${jo} ${E(d).toFixed(2)}%`,`${za} ${M(d,f).toFixed(2)}%`,`${La} ${E(f).toFixed(2)}%`,`${Ra} ${M(f,g).toFixed(2)}%`,`${Ha} ${E(g).toFixed(2)}%`,`${Da} ${M(g,u).toFixed(2)}%`,`${Oa} ${E(u).toFixed(2)}%`,`${Pa} ${M(u,w).toFixed(2)}%`,`${Ba} ${E(w).toFixed(2)}%`,`${qa} ${M(w,I).toFixed(2)}%`,`${Va} ${E(I).toFixed(2)}%`,`${Va} ${E(k).toFixed(2)}%`,`${qa} ${M(k,v).toFixed(2)}%`,`${Ba} ${E(v).toFixed(2)}%`,`${Pa} ${M(v,m).toFixed(2)}%`,`${Oa} ${E(m).toFixed(2)}%`,`${Da} ${M(m,b).toFixed(2)}%`,`${Ha} ${E(b).toFixed(2)}%`,`${Ra} ${M(b,y).toFixed(2)}%`,`${La} ${E(y).toFixed(2)}%`,`${za} ${M(y,_).toFixed(2)}%`,`${jo} ${E(_).toFixed(2)}%`,`${jo} 100%`].join(", ")})`}function Wa(t){if(!t||isNaN(t)||t<=0)return"--";let e=Math.round(t/6e4),o=Math.floor(e/60),n=e%60;return`${o}h ${String(n).padStart(2,"0")}m`}function Ua({hass:t,config:e,discovery:o}){let n=new Date,i=o.sunEntityId?t.states[o.sunEntityId]:null;if(!i)return null;let r=i.attributes||{},s=r.next_rising||r.sunrise,a=r.next_setting||r.sunset;if(!s||!a)return null;let l=new Date(n);l.setHours(12,0,0,0);let p=ft(new Date(s),l),c=ft(new Date(a),l);if(!p||!c||isNaN(p.getTime())||isNaN(c.getTime()))return null;let u=o.atmosCe,m=Lt=>u[Lt]?new Date(String(t.states[u[Lt]]?.state)):null,d=ft(m("golden_hour_morning_start"),p),f=ft(m("golden_hour_morning_end"),p),g=ft(m("blue_hour_morning_start"),p),w=ft(m("golden_hour_evening_start"),c),v=ft(m("golden_hour_evening_end"),c),b=ft(m("blue_hour_evening_end"),c),y=r.next_dawn,_=r.next_dusk,$=y?ft(new Date(y),p):null,C=_?ft(new Date(_),c):null,E=u.moon_phase?t.states[u.moon_phase]:null,M=E?.attributes||{},F=M.moon_age!==void 0?Number(M.moon_age):null,I=M.illumination!==void 0?Number(M.illumination):null,k=F!==null?jc(F):E?.state||null,x=ft(m("moonrise"),n),A=ft(m("moonset"),n),T=n.getTime()>=p.getTime()&&n.getTime()<=c.getTime(),L=It(p),O=It(c),W=(p.getTime()+c.getTime())/2,R=It(new Date(W)),N=c.getTime()-p.getTime(),B=si-N,q=Wa(N),H=Wa(B),V=T?"Daylight":"Night",z=T?q:H,D=new Date(p.getTime());D.setHours(0,0,0,0);let U=Math.max(0,Math.min(100,(n.getTime()-D.getTime())/si*100)),G=Zc(p,c,$,g,d,f,w,v,b,C),et=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${S(G)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${U.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,lt=I!=null?Math.round(I):null,vt=k||"Moon",St=Xc(24,24,22,I,F),it=lt!==null?`<span class="pw-astro-moon-illum">${h(`${lt}%`)}</span> illuminated`:"",Mt=F!=null?`${F.toFixed(1)}d old`:"",bt=F!=null?(()=>{let Lt=yt/2,Qe=(F%yt+yt)%yt;return`${(Qe<=Lt?Lt-Qe:yt-Qe+Lt).toFixed(1)}d to full`})():"",Xo=[it,Mt,bt].filter(Boolean).join(" \xB7 "),Zo=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${St}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${h(vt)}</div>
          <div class="pw-astro-moon-meta">${Xo}</div>
        </div>
      </div>`,Ne=T?`Sun rose ${L}, sets ${O} \xB7 solar noon ${R}.`:`Sun set ${O}, rises ${L} \xB7 solar noon ${R}.`,ee=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${h(V)}</div>
        <div class="pw-astro-hero-num">${h(z)}</div>
      </div>
      ${P.narrative(Ne)}`,ze=It(x),zt=It(A),se=P.statsRow([P.stat(It($),"civil dawn"),P.stat(It(d),"golden start",{valueColor:"var(--pw-warn-amber)"}),P.stat(It(g),"blue start",{valueColor:"var(--pw-wind)"}),P.stat(ze,"moonrise")],{columns:4,divided:!0}),Je=P.statsRow([P.stat(It(C),"civil dusk"),P.stat(It(v),"golden end",{valueColor:"var(--pw-warn-amber)"}),P.stat(It(b),"blue end",{valueColor:"var(--pw-wind)"}),P.stat(zt,"moonset")],{columns:4,divided:!0}),di=`
      ${ee}
      ${Zo}
      ${et}
      ${se}
      ${Je}`,le=_t(T?"sunny":"clear-night",!T),Le=`<div class="pw-fx" data-astro-stars="${!T}" data-astro-day="${T}" role="img" aria-label="Sky atmospheric effects"></div>`;return mt({sectionClass:"pw-astro-v2",extraSectionClass:T?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:le,kicker:"today's sky",preContent:Le,body:di,pro:e?.pro!==!1})}var ja=18,Yc=62,Ga=168;function Kc(t){return t.active?0:typeof t.hoursUntil=="number"&&t.hoursUntil>0?t.hoursUntil:0}function Xa(t){let e=Math.min(Kc(t),Ga)/Ga;return ja+e*(Yc-ja)}function li(t){let e=`${t.summary||""}|${t.type||""}|${t.endTime||""}`,o=0;for(let n=0;n<e.length;n+=1)o=(o*31+e.charCodeAt(n))%360;return o/360*2*Math.PI}function Jc(t,e){let o=t.alert_type||t.type||"wind",n=Number(t.level),i=Number.isFinite(n)&&n>0?n:1,r=typeof t.severity=="string"?t.severity.toLowerCase():"",s=jr[r]||Qn[i]||Qn[1],a=Ur[o]||"mdi:alert",l=Number(t.progress)||0,p=Array.isArray(t.locations)?t.locations:[],c=t.end_time??"",u=null,m=null,d=!1;if(c==="")d=!0;else if(c){let f=new Date(c),g=new Date,w=f.getTime()-g.getTime();if(w/(1e3*60*60*24)>Vr)d=!0;else if(e)u=Math.max(0,w/(1e3*60*60));else{let b=t.start_time||t.datetime;if(b){let y=new Date(String(b));m=Math.max(0,(y.getTime()-g.getTime())/(1e3*60*60))}}}return{type:o,icon:a,severity:i,color:s,summary:String(t.headline||t.summary||""),desc:String(t.description||""),active:e,hoursLeft:u,hoursUntil:m,progress:l,locations:p,link:t.link?String(t.link):null,endTime:String(c),isUntilFurtherNotice:d}}function Qc(t){let e=t.severity>=4?"red":"amber",o="";t.isUntilFurtherNotice?o="UNTIL FURTHER NOTICE":t.active&&t.hoursLeft!==null?o=`${Math.round(t.hoursLeft)}H LEFT`:t.hoursUntil!==null?o=`IN ${Math.round(t.hoursUntil)}H`:t.active&&(o="ACTIVE");let n=String(t.type||"").toUpperCase(),i=String(t.summary||t.desc||"").toUpperCase().trim(),r=t.locations.length>0?t.locations.join(", ").toUpperCase():"",a=[o,n,i,r].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${e}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${h(a)}</span>
    </div>`}function Za({hass:t,config:e,discovery:o,proPersisted:n=!1}){let i=[];for(let T of o.alertEntityIds){let O=t.states[T]?.attributes?.all_alerts;if(Array.isArray(O)){for(let W of O)i.push(Jc(W,W.active===!0));break}}let r=i.length>0,s=r?i.reduce((T,L)=>L.severity>T.severity?L:T,i[0]).severity:0,a=r?i.reduce((T,L)=>L.severity>T.severity?L:T,i[0]).color:"#30d158",l=Xe(s,0,4),p=r?Math.min(1.5,1+(i.length-1)*.15):1,c=ga(l,3,1.2).toFixed(2),u=ma(l).toFixed(2),m=r?ri(a,l*p):ri("#30d158",.08),d=140,f=d/2,g=d/2,w=r?{bgInner:s>=4?"#1a0000":s>=3?"#1a0e00":"#1a1500",bgOuter:s>=4?"#0a0000":s>=3?"#0a0500":"#0a0800",ring:S(Xt(a,.15)),line:S(Xt(a,.08)),sweep:S(Xt(a,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},v=i.map(T=>{let L=f+Math.cos(li(T))*Xa(T),O=g+Math.sin(li(T))*Xa(T),W=(li(T)/(2*Math.PI)*Number(c)).toFixed(2);return T.active?`<div class="pw-radar-blip" style="left:${L.toFixed(1)}px;top:${O.toFixed(1)}px;--pw-blip-color:${S(T.color)};animation-delay:${W}s"></div>`:`<div style="position:absolute;left:${L.toFixed(1)}px;top:${O.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${S(T.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),b=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${w.bgInner};--pw-radar-bg-outer:${w.bgOuter};--pw-radar-color:${w.ring};--pw-radar-line:${w.line};--pw-radar-sweep:${w.sweep};--pw-radar-dur:${c}s" role="img" aria-label="${r?`${i.length} weather alerts`:"No weather alerts"}">
        ${v}
      </div>
    </div>`,y=(()=>{if(!r)return"";let T=null;for(let L of i){if(L.isUntilFurtherNotice)return"further notice";if(L.endTime){let O=new Date(L.endTime);!isNaN(O.getTime())&&(!T||O>T)&&(T=O)}}return T?T.toLocaleString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"}):"further notice"})(),_=_t(r?"rainy":"sunny",!1),$=i.map(Qc).join(""),C=r?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>last 7 days clean</div>',E=i.length===1?"alert":"alerts",M=r?`<div class="pw-alert-timestamp pw-alert-${s>=4?"red":"amber"}">${i.length} ${E} \xB7 valid through ${h(y)}</div>`:"",F=s>=4?"pw-alerts-red":s>0?"pw-alerts-amber":"pw-alerts-green",I=`<div class="pw-tension-wash${r?" breathing":""}" style="background: ${S(m)}; --breathe-dur: ${u}s"></div>`,k=`
        ${b}
        ${C}
        ${$?`<div class="pw-alert-list">${$}</div>`:""}
        ${M}`,x=i.map(T=>{let L=T.severity>=4?"red":"amber",O=T.summary||T.desc||T.type,W=[];T.isUntilFurtherNotice?W.push("until further notice"):T.active&&T.hoursLeft!==null?W.push(`${Math.round(T.hoursLeft)}h left`):T.hoursUntil!==null&&W.push(`in ${Math.round(T.hoursUntil)}h`),T.severity>0&&W.push(`severity ${T.severity}`),T.type&&W.push(T.type);let R=W.join(" \xB7 "),N=T.desc&&T.desc!==T.summary?`<div class="pw-alert-detail-desc">${h(T.desc)}</div>`:"",B=T.locations.length>0?`<div class="pw-alert-detail-loc">${h(T.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${L}">
          <div class="pw-alert-detail-head">${h(O)}</div>
          ${R?`<div class="pw-alert-detail-meta">${h(R)}</div>`:""}
          ${N}
          ${B}
        </div>`}).join(""),A=r?`
        ${b}
        ${C}
        ${x}
        ${M}`:void 0;return mt({sectionClass:"pw-alerts-v2",extraSectionClass:F,ariaLabel:"Weather alerts",brandVariant:_,kicker:r?`weather alerts (${i.length})`:"no weather alerts",preContent:I,body:k,proView:A,proInitial:n,pro:e?.pro!==!1})}var Nt=600,tp=280,Go=8,ci=80,Ie=200,Ye=220,ep=254,Ya=12,op=30,np=.9,ip=3;function ae(t,e){return e<=1?Nt/2:Go+t/(e-1)*(Nt-2*Go)}function Ka(t,e,o){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(o))return(ci+Ie)/2;let n=o-e||1;return ci+(o-t)/n*(Ie-ci)}function rp(t){try{let e=new Date(t);return isNaN(e.getTime())?"":String(e.getHours()).padStart(2,"0")}catch{return""}}var ap=500;function sp(t,e=24){if(!Array.isArray(t))return null;let o=t.slice(0,ap),i=Do(o,new Date).slice(0,e);if(i.length<2)return null;let r=i[0],s="cloud_cover"in r,a="cloud_cover_low"in r&&"cloud_cover_mid"in r&&"cloud_cover_high"in r,l="wind_speed"in r&&("wind_bearing"in r||"wind_direction"in r),p=i.map(g=>{let w=Number(g.temperature),v=ut(g.precipitation_probability,0),b=ut(g.snowfall,0),y=ut(g.rain,0),_=ut(g.showers,0),$=String(g.condition||""),C=b>0||$==="snowy"||$==="snowy-rainy"?"snow":"rain",E=C==="snow"?b:y+_;return{temp:w,precip:v,precipMm:E,precipType:C,condition:$,cloudCover:s?ut(g.cloud_cover,0):null,cloudLow:a?ut(g.cloud_cover_low,0):null,cloudMid:a?ut(g.cloud_cover_mid,0):null,cloudHigh:a?ut(g.cloud_cover_high,0):null,windSpeed:l?ut(g.wind_speed,0):null,windBearing:l?ut(g.wind_bearing??g.wind_direction,0):null,timeLabel:rp(String(g.datetime||"")),datetime:String(g.datetime||"")}}),c=na(p,g=>g.temp);if(c.length<2)return null;let u=c.map(g=>g.temp),m=Math.min(...u),d=Math.max(...u),f=Math.max(...c.map(g=>g.precipMm),0);return{points:c,n:c.length,min:m,max:d,minIdx:u.indexOf(m),maxIdx:u.indexOf(d),maxPrecipMm:f,hasCloud:s,hasLayeredCloud:a,hasWind:l}}function lp(t){let{points:e,n:o,hasLayeredCloud:n}=t;if(o<=0)return"";let i=o>1?(Nt-2*Go)/(o-1)/2:Nt/2,r="";for(let s=0;s<o;s++){let a=ae(s,o),l=s===0?0:a-i,c=(s===o-1?Nt:a+i)-l,u=l/Nt*100,m=c/Nt*100,d;if(n){let f=(Number(e[s].cloudHigh)||0)/100*.06,g=(Number(e[s].cloudMid)||0)/100*.08,w=(Number(e[s].cloudLow)||0)/100*.1;d=Math.min(f+g+w,.15)}else d=(Number(e[s].cloudCover)||0)/100*.12;d<=0||(r+=`<div class="pw-meteogram-cloud-slot" style="left:${u.toFixed(2)}%;width:${m.toFixed(2)}%;opacity:${d.toFixed(3)}"></div>`)}return r?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${r}</div>`:""}function cp(t){let{points:e,n:o,maxPrecipMm:n}=t,i=Ye-Ie,r=(Nt-2*Go)/(o-1)*np,s=n>0,a=s?Math.max(n,2):100,l="";for(let p=0;p<o;p++){let{precipMm:c,precip:u,precipType:m}=e[p],d=s?c:u;if(d<=0)continue;let f=d/a*i,g=ae(p,o)-r/2,w=r;g<0&&(w+=g,g=0),g+w>Nt&&(w=Nt-g);let v=Ye-f,b=m==="snow"?"rgba(200,220,240,0.45)":"rgba(90,200,250,0.4)";l+=`<rect x="${g.toFixed(1)}" y="${v.toFixed(1)}" width="${w.toFixed(1)}" height="${f.toFixed(1)}" fill="${b}" rx="1"/>`}return l}function pp(t){let{points:e,n:o,maxPrecipMm:n}=t,i=Ye-Ie,r=n>0,s=r?Math.max(n,2):100,a="";for(let l=0;l<o;l++){let{precipMm:p,precip:c}=e[l],u=r?p:c;if(u<=0)continue;let m=ae(l,o),d=u/s*i,f=Ye-d-2,g=r?p>=10?String(Math.round(p)):p.toFixed(1):`${Math.round(c)}%`;a+=`<text x="${m.toFixed(1)}" y="${f.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="13" font-weight="600">${h(g)}</text>`}return a}function dp(t){let{points:e,n:o,min:n,max:i}=t,r=e.map(d=>parseFloat(d.temp.toFixed(1))),s=e.map((d,f)=>({x:ae(f,o),y:Ka(r[f],n,i)})),a=s.map((d,f)=>`${f===0?"M":"L"}${d.x.toFixed(1)},${d.y.toFixed(1)}`).join(" "),l=`${a} L${s[s.length-1].x.toFixed(1)},${Ie} L${s[0].x.toFixed(1)},${Ie} Z`,p=je("pw-meteogram-grad"),c=Qt(i),u=Qt(n),m=`<defs><linearGradient id="${p}" x1="0" y1="0" x2="0" y2="1">`;return m+=`<stop offset="0%" stop-color="${S(c)}" stop-opacity="0.25"/>`,m+=`<stop offset="100%" stop-color="${S(u)}" stop-opacity="0.03"/>`,m+="</linearGradient></defs>",m+=`<path d="${l}" fill="url(#${p})"/>`,m+=`<path d="${a}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,m}function up(t){let{points:e,n:o}=t,n="";for(let i=0;i<o;i+=ip){let r=ae(i,o);n+=`<text x="${r.toFixed(1)}" y="${ep}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${h(e[i].timeLabel)}</text>`}return n}function mp(t,e,o,n){let i=o/1.852,r=((n+180)%360-90+360)%360,s=Math.round(i/5)*5,a=Math.floor(s/50);s-=a*50;let l=Math.floor(s/10);s-=l*10;let p=Math.floor(s/5),c=18,u="var(--pw-ink-cream-muted)",m="",d=-c;for(let f=0;f<a;f++)m+=`<polygon points="0,${d.toFixed(1)} 9,${(d+3).toFixed(1)} 0,${(d+6).toFixed(1)}" fill="${u}"/>`,d+=6;for(let f=0;f<l;f++)m+=`<line x1="0" y1="${d.toFixed(1)}" x2="9" y2="${(d+4.5).toFixed(1)}" stroke="${u}" stroke-width="1.4" stroke-linecap="round"/>`,d+=4.5;for(let f=0;f<p;f++)m+=`<line x1="0" y1="${d.toFixed(1)}" x2="4.5" y2="${(d+2.25).toFixed(1)}" stroke="${u}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${t.toFixed(1)},${e}) rotate(${r})"><line x1="0" y1="0" x2="0" y2="${-c}" stroke="${u}" stroke-width="1.4" stroke-linecap="round"/>${m}</g>`}function hp(t){let{points:e,n:o,min:n,max:i,minIdx:r,maxIdx:s}=t,a=0,l=1,p=2,c="";for(let u=0;u<o;u++){let m=u===r||u===s,d=m?a:u%3,f=ae(u,o),g=Ka(e[u].temp,n,i);if(d===a){let w=e[u].temp,v=m?String(Math.round(w)):w.toFixed(1),b=u===r?"var(--pw-wind)":u===s?"var(--pw-vermilion)":"var(--pw-ink-cream)",y=m?17:15,_=g-Ya;c+=`<text x="${f.toFixed(1)}" y="${_.toFixed(1)}" text-anchor="middle" fill="${b}" font-size="${y}" font-weight="600">${v}\xB0</text>`}else if(d===l){let w=Bo(e[u].condition),v=g-Ya;c+=`<text x="${f.toFixed(1)}" y="${v.toFixed(1)}" text-anchor="middle" font-size="20">${w}</text>`}else if(d===p){let w=Number(e[u].windSpeed),v=Number(e[u].windBearing);if(!Number.isFinite(w)||w<1||!Number.isFinite(v))continue;let b=g-op;c+=mp(f,b,w,v)}}return c}function Ja({config:t,forecastData:e}){let o=e?.hourly||[];if(o.length<2)return null;let n=Number(t.hours),i=t.horizon==="long"?"long":"short",r=Number.isFinite(n)&&n>0?Math.max(4,Math.min(48,n)):i==="long"?24:12,s=sp(o,r);if(!s)return null;let l=(t.show_cloud==="auto"||t.show_cloud===void 0?s.hasCloud:!!t.show_cloud)&&s.hasCloud?lp(s):"",p=_t(s.points[0]?.condition||"sunny",!1),c=[];c.push(cp(s)),c.push(pp(s)),c.push(dp(s)),c.push(hp(s));let u=ae(0,s.n).toFixed(1);c.push(`<line x1="${u}" y1="0" x2="${u}" y2="${Ye}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),c.push(up(s));let m=s.n,d=`${m}-hour meteogram showing temperature, condition, wind, and precipitation`,f=m<=12?"next twelve hours":`next ${m===24?"twenty-four":m} hours`,g=je("pw-meteogram-title"),w=`
        <div class="pw-meteogram-chart" aria-labelledby="${g}">
          <svg viewBox="0 0 ${Nt} ${tp}" style="width:100%; height:auto" role="img" aria-label="${h(d)}">
            <title id="${g}">${h(d)}</title>
            ${c.join(`
`)}
          </svg>
        </div>`;return mt({sectionClass:"pw-meteogram-v2",ariaLabel:d,brandVariant:p,kicker:f,preContent:l,body:w,proAction:"meteo-horizon",proInitial:r>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:t.pro!==!1})}var fp={overview:ka,forecast:Ta,wind:Fa,air_quality:Na,astro:Ua,alerts:Za,atmosphere:_a,meteogram:Ja},pi=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=ta(e),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){return this._discovery||(this._discovery=ea(this._hass.states,this._config)),this._discovery}_getCeFingerprint(e){let n=this._getDiscovery().atmosCe,i=[];for(let r of Object.keys(n)){let s=n[r],a=e.states[s];a&&i.push(`${r}=${a.state}`)}return i.join("|")}_warnIfAtmosCeMissing(e,o){let n=new Set(["atmosphere","air_quality","meteogram"]);if(!e.some(l=>n.has(l.type))||Object.keys(o.atmosCe).length>0)return;let r=this._config,s=r.atmos_source||ei(o.weatherEntityId||"");if(this._warnedMissingAtmosCe===s)return;this._warnedMissingAtmosCe=s;let a=r.atmos_source?`Set atmos_source matches no sensor.${s}_* entities \u2014 check the slug.`:`Derived slug "${s}" matches no sensor.${s}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${Bt} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${a}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(e){if(this._hass=e,!this._config)return;let o=this._config.weather_entity,n=o||Object.keys(e.states).find(l=>l.startsWith("weather."))||"",i=e.states[n];if(!i){o&&this._warnedMissingEntity!==o&&(console.warn(`${Bt} weather_entity "${o}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=o);return}let r=this._getCeFingerprint(e),s=`${i.state}|${JSON.stringify(i.attributes)}|${r}`;s!==this._lastWeatherState&&(this._lastWeatherState=s,this._fullRender()),this._subscribeForecast(e,n)}async _subscribeForecast(e,o){let n=Date.now()-this._forecastLastFetch>=Jn;if(!(this._subscribedEntityId===o&&this._forecastData&&!n)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=o;try{if(!e.callWS)return;let i=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let u=(await e.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(m=>m.platform==="atmos_ce");this._atmosConfigEntryId=u?.config_entry_id||null}if(this._atmosConfigEntryId){let m=(await e.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;m?.forecast&&(i=m.forecast)}}catch(c){console.debug(`${Bt} extended forecast fetch failed, falling back to standard hourly`,c)}let r=null;o&&e.states[o]&&(r=await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let s=null;!i&&o&&e.states[o]&&(s=(await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[o]?.forecast||[]);let p=r?.response?.[o];this._forecastData={hourly:i||s||[],daily:p?.forecast||[]},this._forecastLastFetch=Date.now(),this._fullRender()}catch(i){console.warn(`${Bt} forecast fetch failed; retries throttled to ${Jn/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,i),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let e=this._getDiscovery(),o=this._hass.states[e.weatherEntityId];if(!o)return;let n=["<style>",Jr,"</style>",'<div class="pw-card">'],i=this._config.sections||[];this._warnIfAtmosCeMissing(i,e);for(let r=0;r<i.length;r++){let s=i[r],a=fp[s.type];if(a)try{let l=a({hass:this._hass,config:s,discovery:e,weatherEntity:o,forecastData:this._forecastData,sectionIndex:r,proPersisted:!!this._proState[r]});l&&n.push(l)}catch(l){console.warn(`${Bt} section "${s?.type}" renderer threw \u2014 section will be skipped, other sections continue. Please share the error below when reporting.`,l)}}n.push("</div>"),this.shadowRoot.innerHTML=n.join(""),this._postRender(e),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let r=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!r){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let s=Number(r.dataset.target)-Date.now();if(s<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let a=Math.floor(s/1e3),l=Math.floor(a/3600),p=Math.floor(a%3600/60),c=a%60;r.textContent=(l>0?l+"h "+p+"m":p+"m "+c+"s")+(r.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let e=this._getDiscovery(),o=e.atmosCe,n=this._hass.states[e.sunEntityId||""];if(!n)return;let i=new Date,r=i.getTime(),s=[],a=n.attributes?.next_rising,l=n.attributes?.next_setting,{todaySunrise:p,todaySunset:c}=Ee(i,a,l),u=n.attributes?.next_rising?new Date(n.attributes.next_rising).getTime():NaN,m=n.attributes?.next_setting?new Date(n.attributes.next_setting).getTime():NaN;Number.isFinite(u)&&u>r&&s.push(u),Number.isFinite(m)&&m>r&&s.push(m);let d={golden_hour_morning_start:p,golden_hour_morning_end:p,blue_hour_morning_start:p,blue_hour_morning_end:p,golden_hour_evening_start:c,golden_hour_evening_end:c,blue_hour_evening_start:c,blue_hour_evening_end:c};for(let[w,v]of Object.entries(d)){if(!o[w])continue;let b=new Date(String(this._hass.states[o[w]]?.state||""));if(isNaN(b.getTime()))continue;let y=ft(b,v);if(!y)continue;let _=y.getTime();_>r&&s.push(_);let $=_+864e5;$>r&&s.push($)}if(s.length===0)return;let g=Math.min(...s)-r+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},g)}_postRender(e){if(!this.shadowRoot||!this._hass)return;let o=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let c of o){let u=c.getAttribute("data-condition")||"",m=c.getAttribute("data-night")==="true",d=null;try{let g=c.getAttribute("data-cloud");g&&g!=='""'&&g!==""&&(d=JSON.parse(g))}catch{}let f=ua(u,m,d);c.replaceChildren(f)}let n=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let c of n){let u=Number(c.getAttribute("data-pm25"))||0,m=Number(c.getAttribute("data-pm10"))||0,d=c.querySelector(".pw-fx");if(d&&(u>0||m>0)){let f=document.createDocumentFragment();da(f,u,m),d.replaceChildren(f)}}let i=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let c of i){let u=c.getAttribute("data-astro-stars")==="true",m=c.getAttribute("data-astro-day")==="true",d=document.createDocumentFragment();u&&ii(d),m&&(gt(d,3,.5),qo(d)),c.replaceChildren(d)}let r=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let c of r){let u=Number(c.getAttribute("data-atmos-score"))||0,m=c.getAttribute("data-atmos-color")||"#30d158",d=ya(u,m);c.replaceChildren(d)}let s=[...this.shadowRoot.querySelectorAll(".pw-section")],a=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let c of a)c.addEventListener("click",u=>{let m=u.currentTarget,d=m.closest(".pw-section");if(!d||!this._config)return;let f=s.indexOf(d);if(f<0)return;let g=d.dataset.proAction||"view-swap";if(g==="wind-mode"||g==="meteo-horizon"||g==="aqi-scale"){let v=(this._config.sections||[]).map((y,_)=>_===f?{...y}:y),b=v[f];if(!b)return;if(g==="wind-mode"&&b.type==="wind")b.speed_mode=b.speed_mode==="gust"?"speed":"gust";else if(g==="meteo-horizon"&&b.type==="meteogram"){let y=Number(b.hours),_=Number.isFinite(y)&&y>0?y>=18:b.horizon==="long";b.horizon=_?"short":"long","hours"in b&&delete b.hours}else g==="aqi-scale"&&b.type==="air_quality"&&(b.scale=b.scale==="us"?"eu":"us");this._config={...this._config,sections:v},this._fullRender();return}let w=d.dataset.pro==="true"?"false":"true";d.dataset.pro=w,m.setAttribute("aria-pressed",w),this._proState[f]=w==="true"});let l=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let c of l){let u=!1,m=0,d=0;c.addEventListener("mousedown",f=>{u=!0,m=f.pageX-c.offsetLeft,d=c.scrollLeft,c.style.cursor="grabbing"}),c.addEventListener("mouseleave",()=>{u=!1,c.style.cursor=""}),c.addEventListener("mouseup",()=>{u=!1,c.style.cursor=""}),c.addEventListener("mousemove",f=>{if(!u)return;f.preventDefault();let g=f.pageX-c.offsetLeft;c.scrollLeft=d-(g-m)}),c.addEventListener("touchstart",f=>{f.stopPropagation()},{passive:!0}),c.addEventListener("touchmove",f=>{f.stopPropagation()},{passive:!0}),c.addEventListener("wheel",f=>{let g=f;Math.abs(g.deltaX)<Math.abs(g.deltaY)&&(f.preventDefault(),c.scrollLeft+=g.deltaY)},{passive:!1})}let p=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(p){let c=this.shadowRoot.querySelector(".pw-atmos-detail");c&&(this._atmosExpanded&&(c.style.maxHeight=`${c.scrollHeight}px`,p.setAttribute("aria-expanded","true")),p.addEventListener("click",()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(c.style.maxHeight=`${c.scrollHeight}px`,p.setAttribute("aria-expanded","true")):(c.style.maxHeight="0",p.setAttribute("aria-expanded","false"))}))}}getCardSize(){let e=this._config?.sections?.length||1;return Math.max(3,e*3)}getGridOptions(){return{columns:12,min_columns:6,rows:this.getCardSize(),min_rows:3}}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(Hr)}static getStubConfig(e){let o=Object.keys(e.states).find(n=>n.startsWith("weather."));return{type:`custom:${Te}`,weather_entity:o||"weather.home",sections:[{type:"overview"}]}}};customElements.get(Te)||(customElements.define(Te,pi),console.info(`%c ${Te.toUpperCase()} %c v${Rr} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:Te,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});var Ke=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=Si,this._shadow.appendChild(e)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let e=this._shadow.querySelectorAll(".pb-row");for(let o of e)un(o),mn(o)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(e){this._config=Ri(e),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(e){if(this._hass=e,!this._config)return;let o=!1;for(let n of this._cfg.entities){let i=e.states[n.entity],r=this._prevStates[n.entity];if(!r||r.state!==i?.state||r.last_updated!==i?.last_updated){o=!0;break}let s=n.target??this._cfg.target;if(typeof s=="string"){let a=e.states[s],l=this._prevStates[`__target__${s}`];if(!l||l.state!==a?.state||l.last_updated!==a?.last_updated){o=!0;break}}}o&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let e=this._cfg;if(!e)return;let o=e.columns??1,n=o>1?` columns-${o}`:"",i=e.entity_row?" entity-row":"",r=e.layout==="compact"?" compact":"",s=[];o>1&&s.push(`--pb-columns:${o}`),e.gap!==void 0&&s.push(`--pulse-space-element:${S(de(e.gap))}`),e.font_size!==void 0&&s.push(`--pulse-font-body:${S(de(e.font_size))}`);let a=s.length>0?` style="${s.join(";")}"`:"",l="";e.title&&(l+=`<div class="pulse-title">${h(e.title)}</div>`),l+=`<div class="pb-card${n}${i}${r}"${a}>`;for(let m of e.entities)l+=this._renderBarRow(m);l+="</div>";let p=e.entity_row?l:`<ha-card>${l}</ha-card>`,c=this._shadow.querySelector("ha-card, .pb-card");c&&c.remove();let u=document.createElement("template");u.innerHTML=p,this._shadow.appendChild(u.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pb-card"),this._cacheBarElements();for(let m of e.entities){let d=this._elements.rows?.[m.entity];d&&(d.style.display=cn(m,this._hass)?"":"none")}}_renderBarRow(e){let o=this._cfg,n=ln(e,o,this._hass),i=e.positions?.name??o.positions?.name??Tt.positions.name,r=e.positions?.value??o.positions?.value??Tt.positions.value,s=e.positions?.icon??o.positions?.icon??Tt.positions.icon,a=e.positions?.indicator??o.positions?.indicator??Tt.positions.indicator,l=e.animation??{},p=l.speed??o.animation.speed,c=l.effect??o.animation.effect,u=l.state??o.animation.state,m=this._buildIndicatorHtml(e,o,a),d=pn(e,this._hass),f=this._buildPositionHtml(n,i,r,s,a,m,"outside",d),g=this._buildPositionHtml(n,i,r,s,a,m,"inside",d),w=S(de(e.height??o.height)),v=S(de(e.border_radius??o.border_radius)),b=n.color?`background-color:${S(n.color)};`:"",y=c==="charge"&&!n.isUnavailable?" charge":"",_=u==="off"?"transition:none;":"",$=ge(e,o),E=`width:${n.fill*$}%;${_}${b}`,M=this._buildTargetHtml(e,o,n.min,n.max),F=this._buildSparklineHtml(e,o),I=`
      <div class="pb-container" style="height:${w};border-radius:${v};--pb-animation-speed:${p}s;">
        <div class="pb-track"></div>
        ${F}
        <div class="pb-fill${y}" data-entity="${h(e.entity)}" style="${E}"></div>
        ${M}
        ${g}
      </div>`,k=!!(e.interactive??o.interactive),x=k?`<div class="pb-interactive-row"><div class="pb-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${I}<div class="pb-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:I,A=k?"slider":"progressbar",T=n.isUnavailable?`role="${A}" aria-valuenow="0" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${h(n.name)}: Unavailable"`:`role="${A}" aria-valuenow="${n.numValue}" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${h(n.name)}: ${h(n.displayValue)}"`,L=n.isUnavailable?" unavailable":"",O=k?" data-interactive":"",W=n.isUnavailable?'data-state="unavailable"':`data-state="${h(n.numValue)}"`,R=n.color?` data-severity-color="${h(n.color)}"`:"";return`<div class="pb-row${L}" data-entity="${h(e.entity)}"${O} ${W}${R} ${T}>${f}${x}</div>`}_buildIndicatorHtml(e,o,n){if(n==="off")return"";let i=e.indicator??o.indicator,r=this._indicators[e.entity],s=r?.direction??"neutral",a=i?.show_delta===!0&&!!r,l=this._hass?.states[e.entity],p=fe(e,l),c=ao(e,o,this._hass),{text:u}=sn(s,r?.delta??0,a,c,p),m=i?.inverted===!0?" inverted":"";return`<span class="pb-indicator ${s}${m}">${u}</span>`}_buildPositionHtml(e,o,n,i,r,s,a,l){if(o!==a&&n!==a&&i!==a&&r!==a)return"";let c=`<div class="${a==="outside"?"pb-labels":"pb-content"}"><div class="pb-label-left">`;return i===a&&e.resolvedIcon&&(c+=`<ha-icon class="pb-icon" icon="${h(e.resolvedIcon)}"></ha-icon>`),o===a&&(l?(c+='<div class="pb-name-group">',c+=`<span class="pb-name">${h(e.name)}</span>`,c+=`<span class="pb-secondary">${h(l)}</span>`,c+="</div>"):c+=`<span class="pb-name">${h(e.name)}</span>`),c+='</div><div class="pb-label-right">',n===a&&(c+=`<span class="pb-value">${h(e.displayValue)}</span>`),r===a&&s&&(c+=s),c+="</div></div>",c}_buildTargetHtml(e,o,n,i){let r=e.target??o.target,{value:s,showLabel:a}=so(r,this._hass);if(s===null)return"";let l=At((s-n)/(i-n),0,1)*100,p=ge(e,o),c=`left:${l*p}%`,u=a?`<span class="pb-target-label">${h(s)}</span>`:"";return`<div class="pb-target" style="${c}">${u}</div>`}_updateBars(){let e=this._cfg;for(let o of e.entities){let n=ln(o,e,this._hass),i=ge(o,e),r=this._elements.rows?.[o.entity];if(!r||r.__pulseSliding)continue;let s=cn(o,this._hass);if(r.style.display=s?"":"none",!s)continue;r.classList.toggle("unavailable",n.isUnavailable);let a=r.querySelector(".pb-fill");if(a){let f=`${n.fill*i}%`;a.style.width=f,a.style.backgroundColor=n.color||"";let g=r.querySelector(".pb-sparkline");g&&(g.style.width=`${i*100}%`);let w=r.querySelector(".pb-icon");w&&n.resolvedIcon&&w.setAttribute("icon",n.resolvedIcon)}let l=r.querySelectorAll(".pb-name");for(let f of l)f.textContent=n.name;let p=r.querySelectorAll(".pb-value");for(let f of p)f.textContent=n.displayValue;let c=r.querySelectorAll(".pb-secondary");if(c.length>0){let f=pn(o,this._hass);for(let g of c)g.textContent=f}r.setAttribute("aria-valuenow",n.isUnavailable?"0":String(n.numValue)),r.setAttribute("aria-valuemin",String(n.min)),r.setAttribute("aria-valuemax",String(n.max)),r.setAttribute("aria-label",`${h(n.name)}: ${h(n.displayValue)}`),r.setAttribute("data-state",n.isUnavailable?"unavailable":String(n.numValue)),n.color?r.setAttribute("data-severity-color",n.color):r.removeAttribute("data-severity-color");let u=r.querySelector(".pb-target"),m=o.target??e.target,{value:d}=so(m,this._hass);if(d!==null){let f=At((d-n.min)/(n.max-n.min),0,1)*100;if(u){u.style.left=`${f*i}%`,u.style.display="";let g=u.querySelector(".pb-target-label");g&&(g.textContent=String(d))}}else u&&(u.style.display="none")}}_scheduleIndicatorFetch(){let e=this._cfg;!e||!e.entities.some(n=>(n.indicator??e.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let e=this._cfg;if(e)try{let o=new Map;for(let i of e.entities)o.set(i.entity,i);let n=new Map;for(let i of e.entities){let r=i.indicator??e.indicator;if(!r?.show)continue;let s=r.period??60;n.has(s)||n.set(s,[]),n.get(s).push({entity:i.entity,icfg:r})}for(let[i,r]of n){let s=r.map(l=>l.entity),a=await Li(this._hass,s,i);for(let{entity:l,icfg:p}of r){let c=o.get(l),u=this._hass?.states[l],m=c?.attribute?u?.attributes?.[c.attribute]:u?.state,d=zi(m,a[l]);this._indicators[l]=d;let f=this._elements.rows?.[l];if(!f)continue;let g=f.querySelector(".pb-indicator");if(g&&c){let w=this._hass?.states[l],v=fe(c,w),b=ao(c,e,this._hass),{text:y}=sn(d.direction,d.delta,p.show_delta===!0,b,v),_=p.inverted===!0?" inverted":"";g.textContent=y,g.className=`pb-indicator ${d.direction}${_}`}}}}catch(o){Ht("Indicator fetch failed: %O",o)}}_resolveSparklineConfig(e,o){let n=e.sparkline??o.sparkline;if(!n)return null;let i=n===!0?{}:n.show?n:null;if(!i)return null;let r=i.hours_to_show??24,s=i.points_per_hour??1;return{hours:r,pointsPerHour:s,slots:Math.max(r*s,2),aggregateFunc:i.aggregate_func??"avg",smoothing:i.smoothing!==!1,strokeWidth:Number(i.line_width??i.stroke_width??1.5)||1.5,color:i.color??null,updateInterval:i.update_interval??300}}_buildSparklineMarkup(e,o,n=!1){let i=`${o*100}%`,r=e.color?`color:${S(e.color)};`:"";return`<svg${n?' xmlns="http://www.w3.org/2000/svg"':""} class="pb-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${i};${r}"><path d="${e.path}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_buildSparklineHtml(e,o){let n=this._resolveSparklineConfig(e,o);if(!n)return"";let i=this._sparklineData[e.entity];if(!i||i.length<2)return"";let r=me(i,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!r)return"";let s=ge(e,o);return this._buildSparklineMarkup({path:r,strokeWidth:n.strokeWidth,color:n.color},s,!1)}_scheduleSparklineFetch(){let e=this._cfg;if(!e||!e.entities.some(r=>!!this._resolveSparklineConfig(r,e)))return;let n=300;for(let r of e.entities){let s=this._resolveSparklineConfig(r,e);s&&s.updateInterval<n&&(n=s.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<n&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let e=this._cfg;if(e)try{let o=new Map;for(let n of e.entities){let i=this._resolveSparklineConfig(n,e);if(!i)continue;let r=i.hours;o.has(r)||o.set(r,[]),o.get(r).push(n.entity)}for(let[n,i]of o){let r=await He(this._hass,i,n);for(let s of i)this._sparklineData[s]=r[s]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(o){Ht("Sparkline fetch failed: %O",o)}}_updateSparklines(){let e=this._cfg;if(e)for(let o of e.entities){let n=this._resolveSparklineConfig(o,e);if(!n)continue;let i=this._elements.rows?.[o.entity];if(!i)continue;let r=this._sparklineData[o.entity];if(!r||r.length<2)continue;let s=me(r,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!s)continue;let a=i.querySelector(".pb-sparkline"),l=ge(o,e),p=`${l*100}%`;if(a){let c=a.querySelector("path");c&&c.setAttribute("d",s),a.style.width=p}else{let c=i.querySelector(".pb-container");if(!c)continue;let u=this._buildSparklineMarkup({path:s,strokeWidth:n.strokeWidth,color:n.color},l,!0),m=new DOMParser().parseFromString(u,"image/svg+xml"),d=document.importNode(m.documentElement,!0),f=c.querySelector(".pb-track");f&&f.nextSibling?c.insertBefore(d,f.nextSibling):c.appendChild(d)}}}_cacheStates(){let e=this._cfg;this._prevStates={};for(let o of e.entities){let n=this._hass?.states[o.entity];n&&(this._prevStates[o.entity]={state:n.state,last_updated:n.last_updated});let i=o.target??e.target;if(typeof i=="string"){let r=this._hass?.states[i];r&&(this._prevStates[`__target__${i}`]={state:r.state,last_updated:r.last_updated})}}}_cacheBarElements(){let e=this._cfg;this._elements.rows={};let o=new Map;for(let i of e.entities)o.set(i.entity,i);let n=this._shadow.querySelectorAll(".pb-row");for(let i of n){let r=i.dataset.entity;if(r){this._elements.rows[r]=i;let s=o.get(r);s&&(Oi(i,this,this._hass,e,s),(s.interactive??e.interactive)&&Pi(i,this,e,s)),Et(i);for(let a of i.querySelectorAll(".pb-step-btn"))Et(a)}}}getCardSize(){let e=this._config?.entities?.length||1,o=this._config?.columns||1;return Math.ceil(e/o)+(this._config?.title?1:0)}getGridOptions(){let e=this._config?.entities?.length||1,o=this._config?.columns||1,n=Math.ceil(e/o);return{columns:12,min_columns:3,rows:Math.max(1,n),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-bar-card-editor")}static getStubConfig(e){return{entity:Object.keys(e.states).filter(n=>{let i=e.states[n];return n.startsWith("sensor.")&&!isNaN(parseFloat(i.state))})[0]||"sensor.example"}}};customElements.get("pulse-bar-card")||customElements.define("pulse-bar-card",Ke);customElements.get("pulse-card")||customElements.define("pulse-card",class extends Ke{});window.customCards=window.customCards||[];window.customCards.push({type:"pulse-bar-card",name:"Pulse Bar Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-BAR-CARD %c v${ki} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Lf=Ke;export{Lf as default};

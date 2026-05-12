var Mt=`
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

  /* \u2500\u2500 Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-small: 4px;
  --pulse-radius-pill: 6px;
  --pulse-radius-bar: 2px;

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card: 16px;
  --pulse-space-section: 12px;
  --pulse-space-element: 8px;
  --pulse-space-tight: 4px;
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

/* Section label \u2014 uppercase, small, secondary */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stat value \u2014 light weight, tabular numbers */
.pulse-stat-value {
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}

/* Stat label \u2014 caption size, uppercase */
.pulse-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Interactive base \u2014 pointer, tap-highlight, focus ring */
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

/* Hero value \u2014 ultra-thin weight for large numbers (Dark Sky DNA) */
.pulse-hero-value {
  font-weight: var(--pulse-weight-hero, 100);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

/* Flat stats row \u2014 Dark Sky style, border-top separator */
.pulse-stats-row {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}

.pulse-stats-row .stat {
  flex: 1;
  text-align: center;
  padding: 6px 0;
}

/* Ultra-muted label */
.pulse-muted-label {
  color: var(--pulse-text-secondary);
  opacity: 0.25;
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
  border-radius: 2px 2px 0 0;
  background: var(--info-color, #5ac8fa);
}
`;var Pe=`${Mt}
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
    container-type: inline-size;
  }

  .pulse-card {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-gap, 12px);
  }

  /* Multi-column grid \u2014 responsive: auto-collapse on narrow screens */
  .pulse-card[class*="columns-"] {
    display: grid;
    grid-template-columns: repeat(var(--pulse-columns, 1), 1fr);
    gap: var(--pulse-gap, 16px);
  }

  @container (max-width: 300px) {
    .pulse-card[class*="columns-"] {
      grid-template-columns: 1fr;
    }
  }

  /* Bar row \u2014 each entity */
  .bar-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  /* Labels row (outside mode \u2014 default) */
  .bar-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px;
  }

  .bar-label-left, .bar-label-right {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bar-label-left {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .bar-name {
    font-size: var(--pulse-font-size, 14px);
    color: var(--pulse-name-color, var(--primary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-value {
    font-size: var(--pulse-font-size, 14px);
    font-weight: 500;
    color: var(--pulse-value-color, var(--primary-text-color));
    white-space: nowrap;
  }

  /* Bar container */
  .bar-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    container-type: size;
  }

  /* Track (background) */
  .bar-track {
    position: absolute;
    inset: 0;
    background: var(--primary-color, #03A9F4);
    opacity: var(--pulse-track-opacity, 0.12);
    border-radius: inherit;
  }

  /* Fill */
  .bar-fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--primary-color, #03A9F4);
    border-radius: inherit;
    transition: width var(--pulse-animation-speed, 0.8s) ease,
                background-color 0.3s ease;
  }

  /* Content overlay (classic/inside mode) */
  .bar-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 100%;
    z-index: 3;
    /* Auto-scale font to bar height: 30% of container, clamped 10px\u201316px */
    font-size: var(--pulse-font-size, clamp(10px, 40cqh, 16px));
  }

  /* Target marker \u2014 visually distinct from fill */
  .bar-target {
    position: absolute;
    top: -1px;
    bottom: -1px;
    width: 2px;
    background: var(--primary-text-color, #333);
    opacity: 0.6;
    border-radius: 1px;
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
  }

  /* Target label */
  .bar-target-label {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: 500;
    color: var(--primary-text-color, #333);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0.7;
  }

  /* Indicator */
  .bar-indicator {
    font-size: 12px;
    font-weight: 500;
    color: var(--pulse-indicator-color);
  }
  .bar-indicator.up { color: var(--pulse-indicator-color, var(--pulse-status-green)); }
  .bar-indicator.down { color: var(--pulse-indicator-color, var(--pulse-status-red)); }
  .bar-indicator.neutral { color: var(--pulse-indicator-color, var(--pulse-text-secondary)); }

  /* Inverted indicator \u2014 up is bad, down is good (CPU, memory, disk usage) */
  .bar-indicator.inverted.up { color: var(--pulse-indicator-color, var(--pulse-status-red)); }
  .bar-indicator.inverted.down { color: var(--pulse-indicator-color, var(--pulse-status-green)); }

  /* Icon */
  .bar-icon {
    --mdc-icon-size: 1.3em;
    font-size: var(--pulse-font-size, 14px);
    color: var(--pulse-icon-color, var(--secondary-text-color));
    flex-shrink: 0;
    display: flex;
    align-items: center;
    line-height: 0;
  }
  .bar-content .bar-icon {
    color: var(--pulse-icon-color, var(--pulse-name-color, var(--primary-text-color)));
  }

  /* Unavailable state */
  .bar-row.unavailable .bar-fill {
    background: var(--pulse-disabled) !important;
    width: 100% !important;
    opacity: 0.2;
  }
  .bar-row.unavailable .bar-name,
  .bar-row.unavailable .bar-value {
    opacity: 0.5;
  }

  /* Charge animation */
  @keyframes pulse-charge {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }
  .bar-fill.charge {
    animation: pulse-charge 2s ease-in-out infinite;
  }

  /* Entity row mode */
  .entity-row {
    padding: 8px 0;
  }

  /* Title header */
  .pulse-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    padding-bottom: 4px;
  }

  /* Hover feedback */
  .bar-row:not(.has-ripple):active {
    opacity: 0.8;
  }
  @media (hover: hover) {
    .bar-row:hover .bar-fill {
      filter: brightness(1.1);
    }
  }

  /* Keyboard focus indicator */
  .bar-row:focus-visible {
    outline: 2px solid var(--pulse-accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Secondary info group \u2014 wraps name + secondary line */
  .bar-name-group {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 1px;
  }

  /* Secondary info text */
  .bar-secondary {
    font-size: 0.75em;
    opacity: 0.85;
    color: var(--pulse-secondary-color, var(--pulse-text-secondary));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Inside bar \u2014 inherit text color from parent, reduce opacity */
  .bar-content .bar-secondary {
    color: var(--pulse-secondary-color, inherit);
    opacity: 0.6;
  }

  /* Sparkline overlay */
  .bar-sparkline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.45;
    color: var(--pulse-sparkline-color, var(--primary-text-color));
  }
  .bar-sparkline path {
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Interactive slider bars */
  .bar-row[data-interactive] .bar-container {
    touch-action: none;
    cursor: pointer;
  }
  .bar-row[data-interactive].sliding .bar-container {
    cursor: grabbing;
  }
  .bar-row[data-interactive].sliding .bar-fill {
    transition: none;
  }

  /* Step buttons for interactive bars */
  .bar-step-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    min-width: 28px;
    height: 100%;
    cursor: pointer;
    opacity: 0.6;
    color: var(--primary-text-color);
    font-size: 18px;
    font-weight: 500;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    overflow: hidden;
    transition: opacity 0.15s;
  }
  .bar-step-btn:hover {
    opacity: 1;
  }
  .bar-step-btn:not(.has-ripple):active {
    opacity: 0.4;
  }

  /* Interactive bar row layout \u2014 bar-container between step buttons */
  .bar-row[data-interactive] .bar-interactive-row {
    display: flex;
    align-items: stretch;
    gap: 2px;
  }
  .bar-row[data-interactive] .bar-interactive-row .bar-container {
    flex: 1;
    min-width: 0;
  }

  /* Compact mode */
  ha-card:has(.compact) {
    padding: 10px;
  }
  .pulse-card.compact {
    gap: var(--pulse-gap, 6px);
  }
  .compact .bar-row {
    gap: 3px;
  }
  .compact .bar-labels {
    padding: 0;
  }
  .compact .bar-name {
    font-size: var(--pulse-font-size, 12px);
  }
  .compact .bar-value {
    font-size: var(--pulse-font-size, 12px);
  }
  .compact .bar-indicator {
    font-size: 10px;
  }

  /* Reduced motion \u2014 respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .bar-fill.charge { animation: none; }
    .bar-fill, .bar-row { transition: none; }
  }
`;var qe="1.4.0",Oe="Pulse Card:",Q={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function h(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function tt(e,t,i){return Math.min(Math.max(e,t),i)}var Vn=32;function vt(e){if(e==null||e==="")return"";let t=String(e);if(t.length>Vn)return t;let i=t.split(".");if(i.length>2)return t;for(let n of i){if(n.length===0)return t;for(let o=0;o<n.length;o++){let s=n.charCodeAt(o);if(s<48||s>57)return t}}return`${t}px`}function ot(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function j(e,t=1){return e==null?"--":typeof e!="number"?String(e):isFinite(e)?String(parseFloat(e.toFixed(t))):"--"}var Bn=new Set(["on","open","home","locked","playing","active"]),Un=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function We(e,t,i){if(typeof e!="string")return null;let n=e.toLowerCase();return Bn.has(n)?i:Un.has(n)?t:null}function Wn(e,t){let i=String(e),n=i.charAt(0).toUpperCase()+i.slice(1);return t?`${n}${t}`:n}function jn(e,t,i,n=!1){let o=We(e,t,i),s=o!==null?o:parseFloat(e);if(isNaN(s))return 0;let a=i-t;if(a<=0)return 0;let r=n?i-s:s;return tt((r-t)/a,0,1)*100}function Gn(e,t){if(!t||t.length===0)return null;let i=parseFloat(e);if(isNaN(i))return null;for(let n of t)if(i>=n.from&&i<=n.to)return n;return null}function Ve(e){let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function Zn(e,t,i){let n=Ve(e),o=Ve(t),s=Math.round(n.r+(o.r-n.r)*i),a=Math.round(n.g+(o.g-n.g)*i),r=Math.round(n.b+(o.b-n.b)*i);return`rgb(${s}, ${a}, ${r})`}function Kn(e,t){if(!t||t.length<2)return null;let i=parseFloat(e);if(isNaN(i))return null;let n=t[0].from<=t[t.length-1].from?t:[...t].sort((o,s)=>o.from-s.from);for(let o=0;o<n.length-1;o++){let s=n[o],a=n[o+1];if(i>=s.from&&i<=a.to){let r=a.from-s.from,l=r>0?(i-s.from)/r:0;return Zn(s.color,a.color,tt(l,0,1))}}return i<=n[0].from?n[0].color:n[n.length-1].color}function Yn(e,t,i){let n=e.min??i?.min,o=e.max??i?.max;return n==null&&(n=t?.attributes?.min??t?.attributes?.min_temp??Q.min),o==null&&(o=t?.attributes?.max??t?.attributes?.max_temp??Q.max),{min:parseFloat(String(n)),max:parseFloat(String(o))}}function zt(e,t,i){return e.decimal??t.decimal??i?.entities?.[e.entity]?.display_precision??null}function bt(e,t){return e.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function Xn(e){return!isFinite(e)||e<0?"0":e>=1e9?`${(e/1e9).toFixed(1)}G`:e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString()}function Jn(e,t,i){let n=parseFloat(e);if(isNaN(n))return String(e);let o=t!=null?n.toFixed(t):n.toString();return i?`${o}${i}`:o}function je(e,t){if(t==null)return{direction:"neutral",delta:0};let i=parseFloat(e),n=parseFloat(t);if(isNaN(i)||isNaN(n))return{direction:"neutral",delta:0};if(!isFinite(i)||!isFinite(n))return{direction:"neutral",delta:0};let o=Math.abs(i-n),s=Math.max(Math.abs(i),1);if(o>s*1e3)return{direction:"neutral",delta:0};let a=Math.round((i-n)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function Qt(e,t,i,n,o){let s=e==="up"?"\u25B2":e==="down"?"\u25BC":"\u25B6";if(!i)return{arrow:s,text:s};let a=n!=null?t.toFixed(n):String(Math.round(t*100)/100),r=t>0?"+":"";return{arrow:s,text:`${s} ${r}${a}${o||""}`}}function et(e,...t){console.warn(`${Oe} ${e}`,...t)}async function Ge(e,t,i=60){let n={};if(!e?.callWS||t.length===0)return n;let o=new Date,s=new Date(o.getTime()-i*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let r of t){let l=a?.[r];if(!l||l.length===0){n[r]=null;continue}let c=parseFloat(l[0].s);n[r]=isNaN(c)?null:c}}catch(a){et("Failed to fetch history for %s: %O",t.join(", "),a);for(let r of t)n[r]=null}return n}function Be(e){return!Array.isArray(e)||e.length<2?e:[...e].sort((t,i)=>t.from-i.from)}function Ze(e){if(!e)throw new Error("Please define an entity or entities");if(!e.entity&&!e.entities)throw new Error("Please define an entity or entities");let t={...Q,...e,animation:{...Q.animation,...e.animation},positions:{...Q.positions,...e.positions}};t.columns!==null&&t.columns!==void 0&&(t.columns=Number(t.columns)||1),t.animation.speed!==null&&t.animation.speed!==void 0&&(t.animation.speed=Number(t.animation.speed)||Q.animation.speed),t.severity&&(t.severity=Be(t.severity)),t.entities=e.entities?e.entities.map(n=>{let o=typeof n=="string"?{entity:n}:{...n};return o.severity&&(o.severity=Be(o.severity)),!o.secondary_info&&t.secondary_info&&(o._cardSecondaryInfo=t.secondary_info),o}):[{entity:e.entity}];let i=new Set;for(let n of t.entities)i.has(n.entity)&&et('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',n.entity),i.add(n.entity);return t}function Lt(e,t){if(e==null)return{value:null,showLabel:!1};if(typeof e=="number")return{value:isNaN(e)?null:e,showLabel:!1};if(typeof e=="string"){let i=t?.states[e];if(!i)return{value:null,showLabel:!1};let n=parseFloat(i.state);return{value:isNaN(n)?null:n,showLabel:!1}}return typeof e=="object"&&e.value!==void 0?{value:Lt(e.value,t).value,showLabel:e.show_label===!0}:{value:null,showLabel:!1}}function te(e,t,i){let n=i?.states[e.entity],o=!n||n.state==="unavailable"||n.state==="unknown"||n.state==="error",{min:s,max:a}=Yn(e,n,t),r=e.attribute?n?.attributes?.[e.attribute]:n?.state,l=e.attribute?null:We(r,s,a),c=l!==null,d=c?l:parseFloat(r),u=e.complementary??t.complementary,f=o?0:jn(r,s,a,u),p=bt(e,n),m=zt(e,t,i),y=(e.limit_value??t.limit_value)&&!isNaN(d)?tt(d,s,a):r,v=o?"Unavailable":e.state_map?.[r]?e.state_map[r]:c?Wn(r,p):Jn(y,m,p),b=e.name??n?.attributes?.friendly_name??e.entity,_="",w="";if(!o){let C=e.state_color,F=n?.state;if(C&&F&&C[F])_=C[F];else{let M=e.attribute_color??t.attribute_color;if(M?.attribute&&M?.map){let $=n.attributes?.[M.attribute];if($!=null){let x=M.map[String($)];x&&(_=x)}}if(!_){let $=e.severity??t.severity;if($&&$.length>0)if($.some(E=>E.mode==="gradient")){let E=Kn(d,$);E&&(_=E)}else{let E=Gn(d,$);E&&(_=E.color,E.icon&&(w=E.icon))}}}}let S=_||e.color||t.color||"",A=e.icon||n?.attributes?.icon||"";return{isUnavailable:o,min:s,max:a,numValue:d,fill:f,displayValue:v,name:b,color:S,resolvedIcon:w||A}}function _t(e,t){let i=e.bar_width??t.bar_width;return i!=null?Math.max(1,Math.min(100,i))/100:1}async function Nt(e,t,i=24){let n={};if(!e?.callWS||t.length===0)return n;let o=new Date,s=new Date(o.getTime()-i*60*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let r of t)try{let l=a?.[r];if(!l||l.length<2){n[r]=[];continue}let c=[];for(let d of l){let u=parseFloat(d.s);if(!isNaN(u)){let f=d.lu??d.last_updated,p=typeof f=="number"?f*1e3:new Date(f).getTime();isFinite(p)&&c.push({t:p,v:u})}}n[r]=c}catch(l){et("Sparkline parse failed for %s: %O",r,l),n[r]=[]}}catch(a){et("Sparkline fetch failed: %O",a);for(let r of t)n[r]=[]}return n}var Ue={avg:e=>e.reduce((t,i)=>t+i,0)/e.length,min:e=>Math.min(...e),max:e=>Math.max(...e),median:e=>{let t=[...e].sort((n,o)=>n-o),i=Math.floor(t.length/2);return t.length%2?t[i]:(t[i-1]+t[i])/2},first:e=>e[0],last:e=>e[e.length-1],sum:e=>e.reduce((t,i)=>t+i,0),delta:e=>Math.max(...e)-Math.min(...e),diff:e=>e[e.length-1]-e[0]};function Qn(e,t,i="avg"){if(e.length===0||t<1)return[];if(e.length<=t){let u=e[0].t,f=e[e.length-1].t-u||1;return e.map(p=>({x:(p.t-u)/f,v:p.v}))}let n=Ue[i]||Ue.avg,o=e[0].t,r=(e[e.length-1].t-o||1)/t,l=[],c=0,d=e[0].v;for(let u=0;u<t;u++){let f=o+(u+1)*r,p=[];for(;c<e.length&&e[c].t<f;)p.push(e[c].v),c++;p.length>0&&(d=n(p)),l.push({x:u/(t-1||1),v:d})}return l}function kt(e,t,i,n=24,o="avg",s=!0){if(e.length<2)return"";let a=Qn(e,n,o);if(a.length<2)return"";let r=a[0].v,l=a[0].v;for(let g=1;g<a.length;g++)a[g].v<r&&(r=a[g].v),a[g].v>l&&(l=a[g].v);let c=l-r||1,d=2,u=i-d*2,f=a.map(g=>({x:g.x*t,y:d+u-(g.v-r)/c*u}));if(f.length===2||!s){let g=`M${f[0].x.toFixed(1)},${f[0].y.toFixed(1)}`;for(let y=1;y<f.length;y++)g+=`L${f[y].x.toFixed(1)},${f[y].y.toFixed(1)}`;return g}let p=f[0],m=`M${p.x.toFixed(1)},${p.y.toFixed(1)}`;for(let g=1;g<f.length;g++){let y=f[g],v=(p.x+y.x)/2,b=(p.y+y.y)/2;m+=` ${v.toFixed(1)},${b.toFixed(1)}`,m+=` Q${y.x.toFixed(1)},${y.y.toFixed(1)}`,p=y}return m+=` ${p.x.toFixed(1)},${p.y.toFixed(1)}`,m}function ee(e,t){if(!e.visibility)return!0;let i=t?.states[e.entity];if(!i)return!1;let n=e.visibility,o=e.attribute?i.attributes?.[e.attribute]:i.state;if(!e.attribute&&(i.state==="unavailable"||i.state==="unknown"||i.state==="error"))return n.state_equal!==void 0&&String(n.state_equal)===i.state;let s=parseFloat(o);return!(n.state_above!==void 0&&(isNaN(s)||s<=n.state_above)||n.state_below!==void 0&&(isNaN(s)||s>=n.state_below)||n.state_equal!==void 0&&String(o)!==String(n.state_equal)||n.state_not_equal!==void 0&&String(o)===String(n.state_not_equal))}var Ke={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:e=>e/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function Ht(e,t,i,n){if(n<=0)return tt(e,t,i);let o=Math.round((e-t)/n)*n+t,s=(String(n).split(".")[1]||"").length,a=Number(o.toFixed(s));return tt(a,t,i)}function Ye(e,t,i){if(i?.service){let a=i.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let r={entity_id:e};if(i.data)for(let[l,c]of Object.entries(i.data))r[l]=c==="$value"?t:c;return{domain:a[0],service:a[1],data:r}}let n=e.split(".")[0],o=Ke[n];if(!o)return null;let s=o.transform?o.transform(t):t;return{domain:n,service:o.service,data:{entity_id:e,[o.dataKey]:s}}}function At(e,t,i,n){let o=e.split(".")[0],a=Ke[o]?.fixedRange,r=t?.attributes,l=n?.min??r?.min??r?.min_temp??a?.min??0,c=n?.max??r?.max??r?.max_temp??a?.max??100,d=i?.step??r?.step??r?.target_temp_step??r?.percentage_step??a?.step??1;return{min:Number(l),max:Number(c),step:Number(d)||1}}function to(e){if(!e)return"";let t=new Date(e).getTime();if(isNaN(t))return"";let i=Date.now()-t;if(i<0)return"just now";let n=Math.floor(i/1e3);if(n<60)return"just now";let o=Math.floor(n/60);if(o<60)return`${o} min ago`;let s=Math.floor(o/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function ne(e,t){let i=e.secondary_info??e._cardSecondaryInfo;if(!i)return"";if(i.text!==void 0&&i.text!==null&&i.text!=="")return String(i.text);let n=t?.states[e.entity];if(!n)return"";if(i.template)return i.template.replace(/\{(\w+)\}/g,(o,s)=>{let a=n.attributes?.[s];return a==null?"":(s==="bytes"||s==="packets")&&typeof a=="number"?Xn(a):String(a)});if(i.attribute){let o=n.attributes?.[i.attribute];return o!=null?String(o):""}return i.type==="last_changed"?to(n.last_changed):""}function Rt(e,t,i){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:i}))}function eo(e){if(typeof e!="string"||e.length===0)return!1;let t=e.trim();if(t.startsWith("/")&&!t.startsWith("//")||t.startsWith("./")||t.startsWith("../")||t.startsWith("#"))return!0;try{let i=new URL(t,window.location.href);return["http:","https:","mailto:","tel:"].includes(i.protocol)}catch{return!1}}function no(e){if(typeof e!="string"||e.length===0)return!1;let t=e.trim();return!(t.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t))}function yt(e,t,i,n,o){if(!(!i||i.action==="none"))switch(i.action){case"more-info":Rt(e,"hass-more-info",{entityId:i.entity||n});break;case"navigate":i.navigation_path&&no(i.navigation_path)?(history.pushState(null,"",i.navigation_path),Rt(e,"location-changed",{replace:!1})):i.navigation_path&&o("navigation_path rejected \u2014 must be a same-origin relative path: %s",i.navigation_path);break;case"call-service":case"perform-action":{let s=i.service||i.perform_action;if(!s||typeof s!="string")break;let a=s.indexOf(".");if(a<=0||a===s.length-1){o('Service rejected \u2014 expected "domain.service" format, got: %s',s);break}let r=s.slice(0,a),l=s.slice(a+1);t.callService(r,l,i.service_data||i.data).catch(c=>o("Service call %s failed: %O",s,c));break}case"url":i.url_path&&eo(i.url_path)?window.open(i.url_path,"_blank","noopener,noreferrer"):i.url_path&&o("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",i.url_path);break;case"toggle":t.callService("homeassistant","toggle",{entity_id:i.entity||n}).catch(s=>o("Toggle %s failed: %O",i.entity||n,s));break}}function oo(e,t,i){let n=t?.[e],o=i?.[e];return n||o||{action:e==="tap_action"?"more-info":"none"}}function Dt(e,t,i,n,o){let s=oo(o,n,i);yt(e,t,s,n.entity,et)}function ie(e){let t=e.__pulseCleanup;typeof t=="function"&&t()}function Xe(e,t,i,n,o){ie(e);let s=new AbortController,{signal:a}=s,r=0,l=null,c=null,d=!1;e.__pulseCleanup=()=>{s.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete e.__pulseCleanup},e.setAttribute("tabindex","0"),e.addEventListener("keydown",f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),t._hass&&Dt(t,t._hass,n,o,"tap_action"))},{signal:a}),e.addEventListener("click",f=>{if(f.preventDefault(),d){d=!1;return}e.__pulseSliding||(r++,r===1?l=setTimeout(()=>{r=0,t._hass&&Dt(t,t._hass,n,o,"tap_action")},250):r===2&&(l&&clearTimeout(l),r=0,t._hass&&Dt(t,t._hass,n,o,"double_tap_action")))},{signal:a}),e.addEventListener("pointerdown",()=>{d=!1,c=setTimeout(()=>{d=!0,t._hass&&Dt(t,t._hass,n,o,"hold_action")},500)},{signal:a});let u=()=>{c&&clearTimeout(c)};e.addEventListener("pointerup",u,{signal:a}),e.addEventListener("pointercancel",u,{signal:a}),e.addEventListener("contextmenu",f=>f.preventDefault(),{signal:a})}var io=50;function re(e){let t=e.__pulseSliderCleanup;typeof t=="function"&&t()}function Je(e,t,i,n){re(e);let o=e.querySelector(".bar-container");if(!o)return;let s=o,a=new AbortController,{signal:r}=a,l=null;e.__pulseSliderCleanup=()=>{a.abort(),l&&clearTimeout(l),g&&clearInterval(g),delete e.__pulseSliderCleanup};let c=typeof n.interactive=="object"?n.interactive:typeof i.interactive=="object"?i.interactive:void 0,d=null;function u(b){let _=s.getBoundingClientRect(),w=Math.max(0,Math.min(b-_.left,_.width)),S=_.width>0?w/_.width:0,T=t._hass?.states[n.entity],{min:C,max:F,step:M}=At(n.entity,T,c,n),$=C+S*(F-C);return Ht($,C,F,M)}function f(b){let w=t._hass?.states[n.entity],{min:S,max:A,step:T}=At(n.entity,w,c,n),C=A-S,F=C>0?(b-S)/C*100:0,M=s.querySelector(".bar-fill");M&&(M.style.width=`${F}%`);let $=bt(n,w),x=(String(T).split(".")[1]||"").length,E=x>0?b.toFixed(x):String(Math.round(b)),N=$?`${E}${$}`:E,L=e.querySelectorAll(".bar-value");for(let Z of L)Z.textContent=N}function p(){if(!d)return;let b=s.querySelector(".bar-fill");b&&(b.style.transition="",b.style.width=d.fillWidth);let _=e.querySelectorAll(".bar-value");for(let w of _)w.textContent=d.displayValue}function m(b){let _=Ye(n.entity,b,c);if(!_){et("No slider service mapping for %s",n.entity),p();return}let w=t._hass;if(!w){p();return}w.callService(_.domain,_.service,_.data).catch(S=>{et("Slider service call failed for %s: %O",n.entity,S),p()})}s.addEventListener("pointerdown",b=>{if(!t._hass)return;b.preventDefault();let _=s.querySelector(".bar-fill"),w=e.querySelector(".bar-value");d={fillWidth:_?.style.width||"0%",displayValue:w?.textContent||"",pointerId:b.pointerId,startX:b.clientX},e.__pulseSliding=!0,s.setPointerCapture(b.pointerId),e.classList.add("sliding"),_&&(_.style.transition="none");let S=u(b.clientX);f(S)},{signal:r}),s.addEventListener("pointermove",b=>{if(!d||b.pointerId!==d.pointerId)return;b.preventDefault();let _=u(b.clientX);f(_)},{signal:r}),s.addEventListener("pointerup",b=>{if(!d||b.pointerId!==d.pointerId)return;b.preventDefault();let _=s.querySelector(".bar-fill");_&&(_.style.transition=""),e.classList.remove("sliding"),s.releasePointerCapture(b.pointerId);let w=u(b.clientX);f(w),m(w),d=null,l=setTimeout(()=>{e.__pulseSliding=!1},io)},{signal:r}),s.addEventListener("pointercancel",b=>{if(!d||b.pointerId!==d.pointerId)return;let _=s.querySelector(".bar-fill");_&&(_.style.transition=""),e.classList.remove("sliding"),s.releasePointerCapture(b.pointerId),p(),d=null,e.__pulseSliding=!1},{signal:r});let g=null;function y(b){let _=t._hass;if(!_)return;let w=_.states[n.entity],{min:S,max:A,step:T}=At(n.entity,w,c,n),C=n.attribute?parseFloat(w?.attributes?.[n.attribute]):parseFloat(w?.state);if(isNaN(C))return;let F=Ht(C+b*T,S,A,T);F!==C&&(f(F),m(F))}let v=e.querySelectorAll(".bar-step-btn");for(let b of v){let _=Number(b.dataset.step);b.addEventListener("click",S=>{S.stopPropagation(),y(_)},{signal:r}),b.addEventListener("pointerdown",S=>{S.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>y(_),200)},{signal:r});let w=()=>{g&&(clearInterval(g),g=null)};b.addEventListener("pointerup",w,{signal:r}),b.addEventListener("pointercancel",w,{signal:r}),b.addEventListener("pointerleave",w,{signal:r})}e.addEventListener("keydown",b=>{let _=t._hass;if(!_||b.key!=="ArrowRight"&&b.key!=="ArrowUp"&&b.key!=="ArrowLeft"&&b.key!=="ArrowDown")return;b.preventDefault();let w=_.states[n.entity],{min:S,max:A,step:T}=At(n.entity,w,c,n),C=n.attribute?parseFloat(w?.attributes?.[n.attribute]):parseFloat(w?.state);if(isNaN(C))return;let F=b.key==="ArrowRight"||b.key==="ArrowUp"?1:-1,M=Ht(C+F*T,S,A,T);M!==C&&(f(M),m(M))},{signal:r})}function it(e){if(!customElements.get("ha-ripple")||e.querySelector("ha-ripple"))return;let t=document.createElement("ha-ripple");e.appendChild(t),e.classList.add("has-ripple")}var Qe="1.4.0",qt="pulse-climate-card",tn="pulse-climate-card-editor",en="Pulse Climate Card:",mt={heating:{icon:"mdi:fire",cssVar:"--label-badge-yellow",fallback:"#FF9800",label:"Heating"},cooling:{icon:"mdi:snowflake",cssVar:"--label-badge-blue",fallback:"#2196F3",label:"Cooling"},drying:{icon:"mdi:water-off",cssVar:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",cssVar:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",cssVar:"--secondary-text-color",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",cssVar:"--disabled-color",fallback:"#616161",label:"Off"}},se={None:{cssVar:"--label-badge-green",fallback:"#4CAF50"},Low:{cssVar:"--label-badge-green",fallback:"#8BC34A"},Medium:{cssVar:"--label-badge-yellow",fallback:"#FF9800"},High:{cssVar:"--label-badge-red",fallback:"#F44336"},Critical:{cssVar:"--label-badge-red",fallback:"#B71C1C"}},nn=["zones"];var rt=["var(--label-badge-blue, #2196F3)","var(--label-badge-red, #F44336)","var(--label-badge-green, #4CAF50)","var(--label-badge-yellow, #FF9800)","var(--accent-color, #9C27B0)","var(--info-color, #00BCD4)","var(--warning-color, #FF5722)","var(--success-color, #8BC34A)"],ct={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},on={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var ae=`${Mt}
:host { display: block; }

ha-card {
  overflow: hidden;
  padding: 16px;
  background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
  container-type: inline-size;
  color: var(--primary-text-color);
}

/* Title */
.pulse-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--pulse-text-primary);
  margin-bottom: 12px;
}

/* Section container */
.section { margin-top: 12px; }
.section:first-child { margin-top: 0; }
.section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

/* Zone row */
.zone-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.zone-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.zone-row.unavailable { opacity: 0.5; }
.zone-row.unavailable .power-bar-fill {
  background: var(--pulse-disabled) !important;
  width: 100% !important;
  opacity: 0.2;
}

/* Zone header: name + current temp */
.zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: 4px;
  min-width: 0;
}
.zone-name {
  font-size: var(--pulse-font-size, 14px);
  color: var(--pulse-name-color, var(--primary-text-color));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
.zone-temp {
  font-size: var(--pulse-font-size, 14px);
  font-weight: 600;
  color: var(--pulse-value-color, var(--primary-text-color));
  white-space: nowrap;
  flex-shrink: 0;
}
.zone-target {
  font-size: 0.8em;
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.zone-humidity {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 1px;
  margin-left: 4px;
}
.zone-humidity ha-icon {
  --mdc-icon-size: 12px;
}

/* Temperature gauge bar */
.temp-gauge {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-gauge-height, 6px);
  border-radius: var(--pulse-gauge-radius, 3px);
}
.temp-gauge-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.25;
}
.temp-gauge-current {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 3px;
  background: var(--primary-text-color);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}
.temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--primary-text-color);
  opacity: 0.5;
  border-radius: 1px;
  z-index: 1;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}

/* Heating/cooling power bar */
.power-bar-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-bar-height, 8px);
  border-radius: var(--pulse-bar-radius, 4px);
}
.power-bar-track {
  position: absolute;
  inset: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: inherit;
}
.power-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  transition: width 0.8s ease, background-color 0.3s ease;
}
.power-bar-fill.bar-active {
  box-shadow: 0 0 8px 1px var(--bar-glow-color, rgba(255, 152, 0, 0.4));
  animation: barPulse 2.5s ease-in-out infinite;
}
@keyframes barPulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--bar-glow-color, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--bar-glow-color, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 2px 0;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--pulse-chip-color, var(--pulse-text-secondary));
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.chip ha-icon { --mdc-icon-size: 14px; }
.chip.severity-high { color: var(--pulse-status-red); }
.chip.severity-medium { color: var(--pulse-status-yellow); }
.chip.severity-critical { color: var(--label-badge-red, #B71C1C); font-weight: 600; }

/* Multi-column zone grid */
.section-zones.columns {
  display: grid;
  gap: var(--pulse-gap, 16px);
}

@container (max-width: 300px) {
  .section-zones.columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.compact .zone-row { gap: 2px; }
.compact .zone-name { font-size: 12px; }
.compact .zone-chips { gap: 4px; }
.compact .chip { font-size: 10px; }

/* System section rows */
.system-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
}
.system-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  min-width: 80px;
}
/* \u2500\u2500 Chart Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Graph container */
.chart-container {
  position: relative;
  width: 100%;
  height: var(--pulse-graph-height, 80px);
  overflow: hidden;
  border-radius: 4px;
}
.chart-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.chart-svg path {
  stroke-width: var(--pulse-chart-line-width, 1.5);
  vector-effect: non-scaling-stroke;
}
.chart-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  color: var(--secondary-text-color);
  opacity: 0.6;
}

/* Legend chips */
.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 0;
}
.legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--secondary-text-color);
  white-space: nowrap;
}
.legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Donut container */
.donut-container {
  position: relative;
  margin: 8px auto;
}
.donut-container svg {
  width: 100%;
  height: 100%;
}
.donut-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
}

/* Responsive: hide legend at narrow widths */
@container (max-width: 200px) {
  .chart-legend { display: none; }
  .chart-container { height: 50px; }
}

/* \u2500\u2500 Visual Identity Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Filled sparkline (shared by pulse mode, graph, bridge, api) */
.sparkline-filled {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  touch-action: pan-y;
}
.sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Zone Pulse mode \u2014 waveform as row background */
.zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--pulse-row-bg, var(--secondary-background-color, rgba(58, 58, 60, 0.6)));
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y;
}
.zone-row-pulse:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.zone-row-pulse .pulse-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
}
.zone-row-pulse .pulse-info {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pulse-info-left { display: flex; flex-direction: column; gap: 2px; }
.pulse-info-right { display: flex; align-items: baseline; gap: 6px; }
.pulse-current {
  font-size: 20px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}
.pulse-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--secondary-text-color);
}
.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.heating-glow { animation: glowPulse 3s ease-in-out infinite; }

/* Heating row glow \u2014 warm border shadow */
.zone-row-pulse.heating {
  animation: rowGlow 3s ease-in-out infinite;
}
@keyframes rowGlow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Thermal Timeline layout */
.section-thermal-strip .timeline-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.section-thermal-strip .timeline-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.section-thermal-strip .timeline-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-thermal-strip .timeline-row.selected .strip-container,
.section-comfort-strip .heatmap-row.selected .strip-container { height: 18px; }
.section-thermal-strip .timeline-row.selected .zone-label { color: var(--primary-text-color, #e5e5e7); font-weight: 500; }
.section-thermal-strip .zone-label {
  width: 76px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 10px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Strip container \u2014 shared by thermal strip and comfort strip (timeline mode) */
.section-thermal-strip .strip-container,
.section-comfort-strip .strip-container {
  flex: 1;
  height: 14px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
}
.section-thermal-strip .now-marker,
.section-comfort-strip .now-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: var(--primary-text-color, #333);
  opacity: 0.4;
  z-index: 2;
}
.section-thermal-strip .time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
}
.section-thermal-strip .time-label {
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
  opacity: 0.7;
}

/* Strip tooltip \u2014 shared by timeline and heatmap */
.strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: 10px;
  color: var(--pulse-text-primary, #e5e5e7);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  transform: translateX(-50%);
}
.strip-tooltip-fixed {
  position: fixed;
  top: auto;
  z-index: 9999;
}

/* Strip crosshair \u2014 vertical line across all zone rows */
.strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--primary-text-color, #333);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
}

/* Drag selection highlight */
.strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--primary-color, #03A9F4);
  opacity: 0.12;
  border-radius: 2px;
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap \u2014 HTML div cells for hover/click */
.section-comfort-strip .heatmap-body { padding: 4px 0; }
.section-comfort-strip .heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.section-comfort-strip .heatmap-row:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent); }
.section-comfort-strip .heatmap-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-comfort-strip .zone-label {
  width: 66px;
  font-size: 10px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  transition: color 0.2s;
}
.section-comfort-strip .heatmap-row.selected .zone-label {
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Heatmap cells \u2014 shared by comfort strip and thermal strip (heatmap mode) */
.section-comfort-strip .cells,
.section-thermal-strip .cells {
  display: flex;
  gap: 1px;
  flex: 1;
  touch-action: pan-y;
}
.section-comfort-strip .cell,
.section-thermal-strip .cell {
  flex: 1;
  height: 16px;
  border-radius: 2px;
  transition: transform 0.15s, height 0.2s;
}
.section-comfort-strip .heatmap-row.selected .cell,
.section-thermal-strip .timeline-row.selected .cell { height: 20px; }
.section-comfort-strip .cell:hover,
.section-thermal-strip .cell:hover { transform: scaleY(1.2); z-index: 1; }
.section-comfort-strip .cell-empty,
.section-thermal-strip .cell-empty {
  background: repeating-linear-gradient(
    45deg,
    var(--divider-color, rgba(255,255,255,0.06)) 0px,
    var(--divider-color, rgba(255,255,255,0.06)) 2px,
    transparent 2px,
    transparent 4px
  );
}
.heatmap-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  justify-content: center;
}
.heatmap-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--secondary-text-color, #8e8e93);
}
.heatmap-legend .legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}
.heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 66px;
  padding: 4px 0 14px;
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
}

/* Energy Flow */
.ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.ribbon { cursor: pointer; transition: opacity 0.2s; }
.ribbon:hover { opacity: 1 !important; }
.ribbon.dimmed { opacity: 0.2; }

/* Radial */
.section-radial { text-align: center; }
.radial-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.center-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: opacity 0.25s;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.center-sheen {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle farthest-side at 0 0, rgba(255,255,255,0) 88%, rgba(255,255,255,0.5) 96%, rgba(255,255,255,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.center-sheen.light-theme {
  background: radial-gradient(circle farthest-side at 0 0, rgba(0,0,0,0) 88%, rgba(0,0,0,0.12) 96%, rgba(0,0,0,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.center-value {
  font-size: 28px;
  font-weight: 300;
  color: var(--primary-text-color);
  transition: font-size 0.25s;
}
.center-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
}
.center-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 2px;
}
.arc-group {
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: 0.6;
}
.arc-group.arc-active { opacity: 1; }
.arc-group:hover { opacity: 1 !important; }
.arc-group.dimmed { opacity: 0.2 !important; }
.arc-group.selected { opacity: 1 !important; }
.arc-path {
  cursor: pointer;
}
.arc-path:hover { opacity: 1 !important; }

/* Radial legend */
.radial-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 16px;
  justify-content: center;
}
.radial-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;
}
.radial-legend .legend-item:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 8%, transparent); }
.radial-legend .legend-item.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 16%, transparent); color: var(--primary-text-color); }
.radial-legend .legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
  padding: 0;
}
.zone-detail.active {
  max-height: 240px;
  opacity: 1;
  padding: 14px 0 16px;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 8px;
}
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.detail-name { font-size: 15px; font-weight: 500; }
.detail-close {
  font-size: 11px;
  color: var(--secondary-text-color, #636366);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.detail-close:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 10%, transparent); }
.detail-stats { display: flex; gap: 16px; }
.stat { flex: 1; }
.stat-value {
  font-size: 22px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.stat-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 1px;
}
.detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: 3px;
  background: var(--pulse-row-bg, var(--secondary-background-color, #3a3a3c));
  overflow: hidden;
}
.detail-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}
.detail-sparkline {
  border-radius: 6px;
  overflow: hidden;
}

/* API Dashboard */
.api-dashboard {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.api-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.usage-gauge {
  position: relative;
  flex-shrink: 0;
}
.gauge-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
  line-height: 1.2;
}

/* HomeKit pulse dot */
.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.pulse-dot.connected {
  background: var(--pulse-status-green);
  animation: pulse-glow 2s ease-in-out infinite;
}
.pulse-dot.disconnected {
  background: var(--pulse-status-red);
}
@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.flow-temp-value {
  font-size: 18px;
  font-weight: 600;
}
.flow-sparkline {
  display: inline-block;
  vertical-align: middle;
}

/* Home Status section */
.section-home-status { }
.home-status-hero {
  text-align: center;
  padding: 16px 0 20px;
}
.home-status-icon {
  --mdc-icon-size: 36px;
  display: block;
  margin: 0 auto 6px;
}
.home-status-label {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
}
.home-status-detail {
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-zones {
  display: flex;
  flex-direction: column;
}
.home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.home-status-row:last-child { border-bottom: none; }
.home-status-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.home-status-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.home-status-zone-name {
  width: 70px;
  flex-shrink: 0;
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
}
.home-status-actual {
  font-size: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  min-width: 52px;
}
.home-status-actual.off {
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-arrow {
  font-size: 11px;
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-target {
  font-size: 13px;
  color: var(--secondary-text-color, #9E9E9E);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.home-status-delta {
  display: flex;
  align-items: center;
  gap: 4px;
}
.home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  overflow: hidden;
}
.home-status-bar-center {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: color-mix(in srgb, white 15%, transparent);
}
.home-status-bar-fill {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 3px;
}
.home-status-delta-text {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
}
.home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  padding-top: 14px;
  margin-top: 16px;
}
.home-status-summary .stat { text-align: center; }
.home-status-summary .stat-value {
  font-size: 18px;
  font-weight: 300;
}
.home-status-summary .stat-label {
  font-size: 9px;
}

/* Zone Ranking section */
.section-zone-ranking { }
.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.ranking-tabs {
  display: flex;
  gap: 4px;
}
.ranking-tab {
  font-size: 10px;
  color: var(--secondary-text-color, #9E9E9E);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.ranking-tab:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.ranking-tab.active {
  background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  color: var(--primary-text-color);
  border-color: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.ranking-list { }
.rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.rank-row:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.rank-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.rank-num {
  width: 24px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--secondary-text-color, #9E9E9E);
  flex-shrink: 0;
}
.rank-num.top { color: var(--label-badge-yellow, #FFD60A); }
.rank-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rank-bar-track {
  flex: 2;
  height: 8px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  border-radius: 4px;
  margin: 0 12px;
  overflow: hidden;
}
.rank-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease, background 0.4s ease;
}
.rank-value {
  font-size: 13px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  width: 50px;
  text-align: right;
  flex-shrink: 0;
}
.ranking-summary {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.ranking-summary .stat { text-align: center; }
.ranking-summary .stat-value {
  font-size: 18px;
  font-weight: 300;
}
.ranking-summary .stat-label {
  font-size: 9px;
}

/* Responsive degradation for new sections */
@container (max-width: 200px) {
  .section-thermal-strip .time-axis { display: none; }
  .section-comfort-strip svg text { display: none; }
  .api-row { flex-direction: column; }
}

/* Temperature transition glow \u2014 brief brightness flash on temp change */
.temp-transitioning {
  filter: brightness(1.4);
  transition: filter 0.3s ease-in, filter 0.8s ease-out 0.3s;
}

/* Reduced motion \u2014 respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  .power-bar-fill.bar-active { animation: none; }
  .heating-glow { animation: none; }
  .zone-row-pulse.heating { animation: none; }
  .pulse-dot.connected { animation: none; }
  .temp-transitioning { filter: none; transition: none; }
}
`;function st(e,...t){console.warn(`${en} ${e}`,...t)}var rn=new Set;function le(e,t,i,n){if(!i||n[i])return;let o=`${e}|${t}|${i}`;rn.has(o)||(rn.add(o),st(`zone "%s": ${t} override points at missing entity "%s" \u2014 chip will not render`,e,i))}function xt(e){return mt[e]||mt.idle}function Ct(e,t,i){let n=J(e,{},t,i||{entity:e},{});return{name:n.name,temp:n.currentTemp??void 0,target:n.targetTemp??void 0,humidity:n.humidity??void 0,hvacAction:n.hvacAction,unit:n.unit}}function Ot(e){let t=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();return se[t]||se.Low}function Tt(e,t,i){return i<=t?50:tt((e-t)/(i-t),0,1)*100}function ro(e,t,i,n){let o=[],s=!n,a=l=>s||n.includes(l);if(n&&a("humidity")&&e.humidity!==null&&o.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(e.humidity)}%`}),a("hvac_action")){let l=xt(e.hvacAction);o.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(a("overlay")&&e.overlayType){let l=e.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";o.push({type:"overlay",icon:l,label:e.overlayType,entityId:t.overlay})}if(a("preset")&&e.presetMode){let l=e.presetMode==="away"?"mdi:home-export-outline":"mdi:home";o.push({type:"preset",icon:l,label:e.presetMode==="away"?"Away":"Home"})}let r=(l,c,d)=>{if(!a(l)||!t[d])return;let u=i[t[d]];if(u&&!["unavailable","unknown","none"].includes(u.state.toLowerCase())){let f=Ot(u.state);o.push({type:l,icon:c,label:u.state,color:`var(${f.cssVar}, ${f.fallback})`,severity:u.state,entityId:t[d]})}};if(a("open_window")&&t.open_window){let l=i[t.open_window];if(l){let c=l.state==="on";o.push({type:"open_window",icon:c?"mdi:window-open":"mdi:window-closed",label:c?"Open":"Closed",color:c?"var(--label-badge-red, #F44336)":void 0,entityId:t.open_window})}}if(a("window_predicted")&&t.window_predicted){let l=i[t.window_predicted];l&&l.state==="on"&&o.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"var(--label-badge-yellow, #FF9800)",entityId:t.window_predicted})}if(r("mold_risk","mdi:mushroom","mold_risk"),r("condensation","mdi:water-alert","condensation"),a("comfort_level")&&t.comfort_level){let l=i[t.comfort_level];l&&l.state!=="unavailable"&&o.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:t.comfort_level})}if(a("preheat_now")&&t.preheat_now){let l=i[t.preheat_now];l&&l.state==="on"&&o.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"var(--label-badge-yellow, #FF9800)",entityId:t.preheat_now})}if(a("battery")||a("battery_all")){let l=n&&n.includes("battery_all"),c=[],d=["battery"],u=2;for(;t[`battery_${u}`];)d.push(`battery_${u}`),u++;for(let f of d){let p=t[f];if(!p)continue;let m=i[p];!m||m.state==="unavailable"||c.push({eid:p,state:m.state,lower:m.state.toLowerCase()})}if(c.length>0)if(l)for(let f=0;f<c.length;f++){let p=c[f],m=p.lower==="low"||p.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=p.lower==="critical"?"var(--label-badge-red, #F44336)":p.lower==="low"?"var(--label-badge-yellow, #FF9800)":void 0;o.push({type:`battery${f>0?`_${f+1}`:""}`,icon:m,label:p.state,color:g,entityId:p.eid})}else{let f={critical:3,low:2,normal:1},p=c[0];for(let y of c)(f[y.lower]||0)>(f[p.lower]||0)&&(p=y);let m=p.lower==="low"||p.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=p.lower==="critical"?"var(--label-badge-red, #F44336)":p.lower==="low"?"var(--label-badge-yellow, #FF9800)":void 0;o.push({type:"battery",icon:m,label:p.state,color:g,entityId:p.eid})}}if(a("valve_control")){let c=i[e.entityId]?.attributes||{},d=c.valve_control_active,u=c.valve_target,f=c.valve_control_backed_off,p=c.valve_control_enabled;f===!0?o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"var(--disabled-color, #9E9E9E)"}):d===!0&&u!==void 0?o.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${j(u)}${e.unit}`,color:"var(--label-badge-yellow, #FF9800)"}):p===!0&&o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Idle",color:"var(--disabled-color, #9E9E9E)"})}if(n&&a("temp_source")){let c=i[e.entityId]?.attributes?.temperature_source;if(c&&c!=="cloud"){let d=c==="external"?"mdi:thermometer-probe":c==="homekit"?"mdi:apple":"mdi:cloud-outline";o.push({type:"temp_source",icon:d,label:c.charAt(0).toUpperCase()+c.slice(1)})}}return o}function J(e,t,i,n,o){let s=i[e],a=!s||s.state==="unavailable"||s.state==="unknown",r=s?.attributes||{},l=e.startsWith("sensor."),c=l?a?null:parseFloat(s?.state)||null:r.current_temperature??null,d=a||s?.state==="off"?null:r.temperature??null,u=l?null:r.current_humidity??null,f=l?"idle":r.hvac_action||(s?.state==="off"?"off":"idle"),p=l?"sensor":s?.state||"off",m=r.preset_mode||"",g=Number(r.min_temp??5),y=Number(r.max_temp??35),v=Number(r.target_temp_step??.5),b=r.unit_of_measurement||"\xB0C",_=0;if(t.heating_power){let x=i[t.heating_power];x&&x.state!=="unavailable"&&(_=parseFloat(x.state)||0)}else r.heating_power!==void 0&&(_=parseFloat(r.heating_power)||0);let w=0;if(t.ac_power){let x=i[t.ac_power];x&&x.state!=="unavailable"&&(w=parseFloat(x.state)||0)}let S="";if(t.overlay){let x=i[t.overlay];x&&x.state!=="unavailable"&&(S=x.state)}else r.overlay_type&&(S=r.overlay_type);let A=n.name||r.friendly_name||e.replace(/^(climate|sensor)\./,""),T=n.icon||r.icon||"mdi:thermometer",C=n.chips||o.chips||null,F={...t},M=n.name||e;n.open_window_entity&&(F.open_window=n.open_window_entity,le(M,"open_window_entity",n.open_window_entity,i)),n.battery_entity&&(F.battery=n.battery_entity,le(M,"battery_entity",n.battery_entity,i)),n.mold_risk_entity&&(F.mold_risk=n.mold_risk_entity,le(M,"mold_risk_entity",n.mold_risk_entity,i));let $={entityId:e,name:A,icon:T,isUnavailable:a,currentTemp:c,targetTemp:d,humidity:u,heatingPower:_,coolingPower:w,hvacAction:f,hvacMode:p,presetMode:m,overlayType:S,minTemp:g,maxTemp:y,tempStep:v,unit:b,chips:[]};return $.chips=ro($,F,i,C),$}var sn=280;function ce(e,t=sn){return e<=50?0:(2+(e-50)/50*3)*(t/sn)}function an(e,t=20,i=1){if(i<=0)return 0;let n=Math.min(4,Math.max(2,Math.round(e/30))),o=Math.floor(t/i);return Math.min(n,o)}function ln(e){return 4-e/100*2.5}function cn(e,t){return 1.5+e/t*1.5}function wt(e,t){return 3*(e/t)}function dn(e){if(!e)throw new Error("Please define an entity or zones");if(!e.entity&&!e.zones)throw new Error("Please define an entity or zones");if(e.entity&&typeof e.entity=="string"&&!e.entity.startsWith("climate.")&&!e.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let t;e.zones?t=e.zones.map(n=>typeof n=="string"?{entity:n}:{...n}):t=[{entity:e.entity}];for(let n of t)if(!n.entity||typeof n.entity!="string")throw new Error("Each zone must have an entity ID");let i={...e,columns:Number(e.columns)||ct.columns,layout:e.layout||ct.layout,show_temp_bar:e.show_temp_bar??ct.show_temp_bar,show_power_bar:e.show_power_bar??ct.show_power_bar,tap_action:e.tap_action||{...ct.tap_action},hold_action:e.hold_action||{...ct.hold_action},double_tap_action:e.double_tap_action||{...ct.double_tap_action},sections:e.sections||[...nn],_zones:t};return Array.isArray(i.sections)&&(i.sections=i.sections.map(n=>{let o=typeof n=="string"?{type:n}:{...n},s=on[o.type];if(s){for(let[a,r]of Object.entries(s))if(o[a]===void 0||o[a]===null)o[a]=r;else if(typeof r=="number"){let l=Number(o[a]);Number.isFinite(l)?o[a]=l||r:(st('section "%s": %s=%o is not numeric \u2014 using default %o',o.type,a,o[a],r),o[a]=r)}}return o})),i}var hn={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},so={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},ao={battery:"battery",connection:"connection"},lo={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},co={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function po(e){let t=new Map;for(let[i,n]of Object.entries(e))n.platform==="tado_ce"&&n.translation_key&&(t.has(n.translation_key)||t.set(n.translation_key,i));return{byTranslationKey:t}}function uo(e,t){let i={};for(let[n,o]of Object.entries(hn)){let s=t.byTranslationKey.get(o);s&&(i[n]=s)}return i}function ho(e,t,i){let n={},o={...so,...ao};for(let s of t){n[s]={};let a=`climate.${s}`,r=e[a];if(!r?.device_id||r.platform!=="tado_ce")continue;let l=r.device_id;for(let[c,d]of Object.entries(e)){if(d.platform!=="tado_ce"||d.device_id!==l||!d.translation_key||!i[c])continue;let u=d.translation_key;if(u.endsWith("_suffixed")){let f=u.replace("_suffixed",""),p=Object.keys(o).find(m=>o[m]===f);if(!p)continue;if(!n[s][p])n[s][p]=c;else{let m=2;for(;n[s][`${p}_${m}`];)m++;n[s][`${p}_${m}`]=c}}else{let f=Object.keys(o).find(p=>o[p]===u);if(!f)continue;n[s][f]||(n[s][f]=c)}}}return n}function pn(e){let t={},i=Object.keys(e);for(let[n,{platform:o,suffixes:s}]of Object.entries(co))for(let a of s){let r=i.find(l=>l.startsWith(`${o}.tado_ce`)&&l.endsWith(a));if(r){t[n]=r;break}}return t}function un(e,t){let i={};for(let n of t){i[n]={};for(let[o,{platform:s,suffixes:a}]of Object.entries(lo))for(let r of a){let l=`${s}.${n}${r}`;if(e[l]){i[n][o]=l;break}}}return i}var gt={states:null,zoneNames:null,result:null};function fn(e,t,i){if(gt.result&&gt.states===e&&gt.zoneNames!==null&&gt.zoneNames.length===t.length&&gt.zoneNames.every((c,d)=>c===t[d]))return gt.result;let n=!1,o=!1;i&&(n=Object.values(i).some(c=>c.platform==="tado_ce"),o=n),n||(n=Object.keys(e).some(c=>c.startsWith("sensor.tado_ce_")));let s={};if(n)if(o){let c=po(i);s=uo(i,c);let d=pn(e);for(let[u,f]of Object.entries(d))s[u]||(s[u]=f)}else s=pn(e);let a;if(o){a=ho(i,t,e);let c=un(e,t);for(let d of t){a[d]||(a[d]={});let u=c[d]||{};for(let[f,p]of Object.entries(u))a[d][f]||(a[d][f]=p)}}else a=un(e,t);let r=Object.keys(hn).filter(c=>!s[c]),l={isTadoCE:n,hubEntities:s,zoneEntities:a,missingHubKeys:r};if(n)for(let[c,d]of Object.entries(a))Object.keys(d).length===0&&console.debug('Pulse Climate: zone "%s" \u2014 no Tado CE entities discovered',c);return gt={states:e,zoneNames:[...t],result:l},l}function D(e){return e.replace(/^(climate|sensor|binary_sensor)\./,"")}function $t(e){return typeof e=="string"&&e.length>0}function at(e,t,i,n){if($t(n?.temperature_entity))return{entityId:n.temperature_entity,source:"yaml_override"};let s=t[e]?.attributes?.external_temp_sensor;return $t(s)&&t[s]?{entityId:s,source:"external"}:$t(i?.temperature)?{entityId:i.temperature,source:"discovery"}:{entityId:e,source:"climate_fallback"}}function dt(e,t,i,n){if($t(n?.humidity_entity))return{entityId:n.humidity_entity,source:"yaml_override"};let s=t[e]?.attributes?.external_humidity_sensor;return $t(s)&&t[s]?{entityId:s,source:"external"}:$t(i?.humidity)?{entityId:i.humidity,source:"discovery"}:null}var Vt={timestamp:0,data:{}};function mn(){return Vt}function gn(e){let t={...Vt.data};for(let[i,n]of Object.entries(e))n.length>0&&(t[i]=n);return Vt={timestamp:Date.now(),data:t},Vt}function vn(){return{timestamp:0,data:{}}}function de(e){return e.timestamp>0&&Date.now()-e.timestamp<3e5}function bn(e,t){let i={...e.data};for(let[n,o]of Object.entries(t))o.length>0&&(i[n]=o);return{timestamp:Date.now(),data:i}}function pe(e,t){if(e.length===0||t<1)return[];let i=e[0].t,s=(e[e.length-1].t-i||1)/t,a=[],r=0,l=e[0].v;for(let c=0;c<t;c++){let d=i+(c+1)*s,u=0,f=0;for(;r<e.length&&e[r].t<d;)u+=e[r].v,f++,r++;f>0&&(l=u/f),a.push({x:c/(t-1||1),v:l})}return a}function _n(e,t,i,n,o){let a=i-4,r=o-n||1,l=e.map(u=>({x:u.x*t,y:2+a-(u.v-n)/r*a}));if(l.length<2)return"";if(l.length===2)return`M${l[0].x.toFixed(1)},${l[0].y.toFixed(1)}L${l[1].x.toFixed(1)},${l[1].y.toFixed(1)}`;let c=l[0],d=`M${c.x.toFixed(1)},${c.y.toFixed(1)}`;for(let u=1;u<l.length;u++){let f=l[u],p=(c.x+f.x)/2,m=(c.y+f.y)/2;d+=` ${p.toFixed(1)},${m.toFixed(1)}`,d+=` Q${f.x.toFixed(1)},${f.y.toFixed(1)}`,c=f}return d+=` ${c.x.toFixed(1)},${c.y.toFixed(1)}`,d}function yn(e,t,i,n=48){if(!e||e.length===0)return[];let o=1/0,s=-1/0;for(let a of e)for(let r of a.data)isFinite(r.v)&&(r.v<o&&(o=r.v),r.v>s&&(s=r.v));return isFinite(o)||(o=0),isFinite(s)||(s=100),e.map(a=>{let r=a.data.filter(d=>isFinite(d.v));if(r.length<2)return{entityId:a.entityId,color:a.color,d:""};let l=pe(r,n),c=_n(l,t,i,o,s);return{entityId:a.entityId,color:a.color,d:c}})}function Bt(e,t,i,n){if(!e||e.length===0)return[];let o=i??t/2-2,s=n??o*.6,a=t/2,r=t/2,l=e.map(f=>Math.max(0,f.value)),c=l.reduce((f,p)=>f+p,0);if(c===0)return[];let d=[],u=-90;for(let f=0;f<e.length;f++){if(l[f]===0)continue;let p=l[f]/c*360;p>=360&&(p=359.9);let m=u+p,g=Ut(a,r,s,o,u,m);d.push({label:e[f].label,color:e[f].color,d:g,angle:p}),u=m}return d}function St(e){if(!e||e.length===0)return"";let t='<div class="chart-legend">';for(let i of e){let n=k(i.color),o=h(i.label),s=i.value!==void 0&&i.value!==null?` ${h(i.value)}`:"";t+=`<span class="legend-chip"><span class="legend-dot" style="background:${n}"></span>${o}${s}</span>`}return t+="</div>",t}function G(e){return e<=14?"#1565C0":e<=16?"#4FC3F7":e<=17?"#4DB6AC":e<=18?"#81C784":e<=19?"#AED581":e<=20?"#C5E1A5":e<=21?"#FFF176":e<=22?"#FFB74D":e<=23?"#FF8A65":e<=24?"#EF5350":"#C62828"}function Ft(e){return e<=20?"#C62828":e<=30?"#EF5350":e<=35?"#FF8A65":e<=40?"#FFB74D":e<=45?"#AED581":e<=55?"#4CAF50":e<=60?"#AED581":e<=65?"#4DB6AC":e<=70?"#4FC3F7":e<=80?"#1E88E5":"#1565C0"}function Ut(e,t,i,n,o,s){let a=o*Math.PI/180,r=s*Math.PI/180,l=s-o,c=Math.abs(l)>180?1:0,d=e+n*Math.cos(a),u=t+n*Math.sin(a),f=e+n*Math.cos(r),p=t+n*Math.sin(r),m=e+i*Math.cos(r),g=t+i*Math.sin(r),y=e+i*Math.cos(a),v=t+i*Math.sin(a);return[`M${d.toFixed(2)},${u.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${c} 1 ${f.toFixed(2)},${p.toFixed(2)}`,`L${m.toFixed(2)},${g.toFixed(2)}`,`A${i.toFixed(2)},${i.toFixed(2)} 0 ${c} 0 ${y.toFixed(2)},${v.toFixed(2)}`,"Z"].join(" ")}function lt(e,t,i,n=48){if(!e||e.length<2)return null;let o=e.filter(f=>isFinite(f.v));if(o.length<2)return null;let s=Date.now(),a=o[o.length-1];s-a.t>6e5&&o.push({t:s,v:a.v});let r=pe(o,n);if(r.length<2)return null;let l=1/0,c=-1/0;for(let f of r)f.v<l&&(l=f.v),f.v>c&&(c=f.v);isFinite(l)||(l=0),isFinite(c)||(c=100);let d=_n(r,t,i,l,c);if(!d)return null;let u=`${d} L${t.toFixed(1)},${i.toFixed(1)} L0,${i.toFixed(1)} Z`;return{linePath:d,areaPath:u}}function ue(e,t=24,i=""){if(!e||e.length<2)return"";let n=e.filter(c=>isFinite(c.v));if(n.length<2)return"";let o=pe(n,t),s=n[0].t,a=n[n.length-1].t,r=n.every(c=>Number.isInteger(c.v)),l={u:i,d:[]};return l.d=o.map(c=>{let d=s+c.x*(a-s),u=new Date(d),f=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`,p=r?Math.round(c.v):Math.round(c.v*10)/10;return{l:f,v:p}}),JSON.stringify(l)}function pt(e,t,i,n,o,s=""){if(!e||e.length<2)return"";let a=lt(e,t,i,24);if(!a)return"";let r=k(n),l=`<div class="sparkline-filled" style="height:${i}px">`;return l+=`<svg viewBox="0 0 ${t} ${i}" role="img" aria-label="${h(s)}" preserveAspectRatio="none" style="width:100%;height:${i}px;display:block">`,l+=`<defs><linearGradient id="${h(o)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${a.areaPath}" fill="url(#${h(o)})" />`,l+=`<path d="${a.linePath}" fill="none" stroke="${r}" stroke-width="1.5" />`,l+="</svg></div>",l}var fo=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function Wt(e,t){let i=[],n=0;if(Array.isArray(e.chart_data)&&e.chart_data.length>0){for(let o of e.chart_data)o.type&&typeof o.count=="number"&&(i.push({label:o.type,value:Math.max(0,o.count),color:t[n%t.length]}),n++);return i}if(e.breakdown_24h&&typeof e.breakdown_24h=="object"){for(let[o,s]of Object.entries(e.breakdown_24h)){let a=Number(s);!isNaN(a)&&a>0&&(i.push({label:o,value:a,color:t[n%t.length]}),n++)}return i}for(let[o,s]of Object.entries(e)){if(fo.has(o))continue;let a=Number(s);isNaN(a)||(i.push({label:o,value:Math.max(0,a),color:t[n%t.length]}),n++)}return i}function mo(e,t,i,n){let o=t.show_temp_bar??i.show_temp_bar??!0,s=t.show_power_bar??i.show_power_bar??!0,a=e.isUnavailable?" unavailable":"",r=e.isUnavailable?"Unavailable":e.currentTemp!==null?`${j(e.currentTemp)}${h(e.unit)}`:"--",l=!e.isUnavailable&&e.targetTemp!==null?`<span class="zone-target">\u2192 ${j(e.targetTemp)}${h(e.unit)}</span>`:"",c=!e.isUnavailable&&e.humidity!==null?` <span class="zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(e.humidity)}%</span>`:"",d=e.isUnavailable?`${h(e.name)}: Unavailable`:`${h(e.name)}: ${r}${e.targetTemp!==null?`, target ${j(e.targetTemp)}${e.unit}`:""}${e.humidity!==null?`, ${Math.round(e.humidity)}% humidity`:""}, ${e.hvacAction}`,u=`<div class="zone-row${a}" tabindex="0" role="button"
    aria-label="${h(d)}" data-entity="${h(e.entityId)}">`;if(u+='<div class="zone-header">',u+=`<span class="zone-name">${e.icon&&e.icon!=="mdi:thermometer"?`<ha-icon icon="${h(e.icon)}"></ha-icon> `:""}${h(e.name)}${c}</span>`,u+=`<span class="zone-temp">${r}${l}</span>`,u+="</div>",o&&!e.isUnavailable){let p=e.currentTemp!==null?Tt(e.currentTemp,e.minTemp,e.maxTemp):50,m=e.targetTemp!==null?Tt(e.targetTemp,e.minTemp,e.maxTemp):null,g=G(e.minTemp),y=G((e.minTemp+e.maxTemp)/2),v=G(e.maxTemp),b=`linear-gradient(to right, ${k(g)}, ${k(y)}, ${k(v)})`;u+='<div class="temp-gauge">',u+=`<div class="temp-gauge-bg" style="background:${b}"></div>`,u+=`<div class="temp-gauge-current" style="left:${k(p.toFixed(1))}%"></div>`,m!==null&&(u+=`<div class="temp-gauge-target" style="left:${k(m.toFixed(1))}%"></div>`),u+="</div>"}if(s&&!e.isUnavailable){let p=e.heatingPower||e.coolingPower||0,m=xt(e.hvacAction),g=m.cssVar?`var(${m.cssVar}, ${m.fallback})`:m.fallback;if(p>0||e.hvacAction==="heating"||e.hvacAction==="cooling"){let y=Math.min(100,Math.max(0,p)),v=p>0?" bar-active":"";u+='<div class="power-bar-container">',u+='<div class="power-bar-track"></div>',u+=`<div class="power-bar-fill${v}" style="width:${k(y.toFixed(1))}%;background:${k(g)};--bar-glow-color:${k(m.fallback)}40"></div>`,u+="</div>"}}if(e.chips.length>0){u+='<div class="zone-chips">';for(let p of e.chips){let m=p.severity?` severity-${p.severity.toLowerCase()}`:"",g=p.color?` style="color:${k(p.color)}"`:"",y=p.entityId?` data-entity="${h(p.entityId)}"`:"";u+=`<span class="chip${m}"${g}${y} data-chip-type="${h(p.type)}">`,u+=`<ha-icon icon="${h(p.icon)}"></ha-icon>`,u+=`${h(p.label)}`,u+="</span>"}u+="</div>"}let f=t.sparkline?.mode||"overlay";if(f==="pulse"&&!e.isUnavailable)return go(e,t,n);if(!e.isUnavailable&&n&&n.length>=2){let p=xt(e.hvacAction),m=t.color||p.fallback;f==="prominent"&&(u+=vo(m,n,e.unit,e.entityId))}return u+="</div>",u}function go(e,t,i){let n=xt(e.hvacAction),o=e.heatingPower>0||e.hvacAction==="heating",s=e.hvacAction==="cooling",a=o||s,r=a?t.color||n.fallback:"var(--secondary-text-color, #9E9E9E)",l=k(r),c=h(e.entityId).replace(/\./g,"-"),d=e.heatingPower||e.coolingPower||0,u=e.hvacAction==="heating"?`Heating ${Math.round(d)}%`:e.hvacAction==="cooling"?`Cooling ${Math.round(d)}%`:"Idle",f=e.currentTemp!==null?`${j(e.currentTemp)}${h(e.unit)}`:"--",p=e.targetTemp!==null?`\u2192 ${j(e.targetTemp)}${h(e.unit)}`:"",m=`${h(e.name)}: ${f}, ${u}`,g=`zone-row zone-row-pulse${o?" heating":""}`,y=ue(i||[],24,e.unit),v=`<div class="${g}" tabindex="0" role="button"
    aria-label="${h(m)}" data-entity="${h(e.entityId)}"${y?` data-sparkline='${h(y)}'`:""}>`;if(i&&i.length>=2){let b=lt(i,360,56,60);if(b){let _=`pulse-grad-${c}`,w=`pulse-glow-${c}`,S=a?" heating-glow":"",A=a?"0.55":"0.2",T=a?"0.05":"0.02",C=a?"2":"1.5",F=a?"1":"0.5";v+='<svg class="pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',v+="<defs>",v+=`<linearGradient id="${_}" x1="0" y1="0" x2="0" y2="1">`,v+=`<stop offset="0%" stop-color="${l}" stop-opacity="${A}"/>`,v+=`<stop offset="100%" stop-color="${l}" stop-opacity="${T}"/>`,v+="</linearGradient>",a&&(v+=`<filter id="${w}"><feGaussianBlur stdDeviation="${wt(360,360).toFixed(1)}" result="b"/>`,v+='<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'),v+="</defs>",v+=`<path d="${b.areaPath}" fill="url(#${_})" />`,v+=`<path d="${b.linePath}" fill="none" stroke="${l}" stroke-width="${C}" opacity="${F}"`,a&&(v+=` filter="url(#${w})" class="${S}"`),v+=" />",v+="</svg>"}}return v+='<div class="pulse-info">',v+='<div class="pulse-info-left">',v+=`<div class="zone-name">${e.icon&&e.icon!=="mdi:thermometer"?`<ha-icon icon="${h(e.icon)}"></ha-icon> `:""}${h(e.name)}</div>`,v+='<div class="pulse-status">',v+=`<span class="status-dot" style="background:${l}"></span>`,v+=`${h(u)}`,v+="</div>",v+="</div>",v+='<div class="pulse-info-right">',v+=`<span class="pulse-current">${h(f)}</span>`,p&&(v+=`<span class="zone-target">${p}</span>`),v+="</div>",v+="</div>",v+="</div>",v}function vo(e,t,i,n){let o=lt(t,300,40,48);if(!o){let d=kt(t,300,40,48,"avg",!0);return d?`<div class="sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${d}" fill="none" stroke="${k(e)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let a=`prom-grad-${n?n.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,r=k(e),l=ue(t,24,i),c=`<div class="sparkline-filled" style="height:40px"${l?` data-sparkline='${h(l)}'`:""}>`;return c+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',c+=`<defs><linearGradient id="${h(a)}" x1="0" y1="0" x2="0" y2="1">`,c+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,c+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,c+="</linearGradient></defs>",c+=`<path d="${o.areaPath}" fill="url(#${h(a)})" />`,c+=`<path d="${o.linePath}" fill="none" stroke="${r}" stroke-width="1.5" opacity="0.7" />`,c+="</svg></div>",c}function he(e,t,i,n,o){if(!e||e.length===0)return"";let s=Number(t.columns)||1,a=s>1?" columns":"",r=s>1?` style="grid-template-columns:repeat(${Number(s)}, 1fr)"`:"",l=`<div class="section section-zones${a}"${r}>`,c=n?.hubEntities?.home_state,d=c?i[c]:null;if(d&&d.state!=="unavailable"){let u=d.state==="on",f=u?"mdi:home":"mdi:home-export-outline",p=u?"Home":"Away",m=u?"var(--label-badge-green, #4CAF50)":"var(--secondary-text-color)";l+='<div style="display:flex;justify-content:space-between;align-items:center">',l+='<div class="section-label">Zones</div>',l+=`<span class="chip" data-entity="${h(c)}" style="color:${k(m)}">`,l+=`<ha-icon icon="${h(f)}"></ha-icon>${h(p)}</span>`,l+="</div>"}else l+='<div class="section-label">Zones</div>';for(let u of e){let f=u.entity,p=D(f),m=n?.zoneEntities?.[p]||{},g=J(f,m,i,u,t),y=at(f,i,m,u),v=o?.data?.[y.entityId]||o?.data?.[f]||[];l+=mo(g,u,t,v)}return l+="</div>",l}function xn(e,t,i,n,o,s){if(!e||!t)return;let a=e.querySelectorAll(".zone-row");for(let r=0;r<t.length;r++){let l=t[r],c=l.entity,d=D(c),u=o?.zoneEntities?.[d]||{},f=n[c],p=s[c];if(f===p&&a[r])continue;let m=J(c,u,n,l,i),g=a[r];if(!g)continue;let y=g.querySelector(".zone-temp");if(y){let S=m.isUnavailable?"Unavailable":m.currentTemp!==null?`${j(m.currentTemp)}${m.unit}`:"--",A=!m.isUnavailable&&m.targetTemp!==null?`<span class="zone-target">\u2192 ${j(m.targetTemp)}${h(m.unit)}</span>`:"";y.innerHTML=`${h(S)}${A}`}let v=g.querySelector(".power-bar-fill");if(v){let S=m.heatingPower||m.coolingPower||0,A=xt(m.hvacAction),T=A.cssVar?`var(${A.cssVar}, ${A.fallback})`:A.fallback;v.style.width=`${Math.min(100,Math.max(0,S)).toFixed(1)}%`,v.style.background=T,v.style.setProperty("--bar-glow-color",`${A.fallback}40`),v.classList.toggle("bar-active",S>0)}let b=g.querySelector(".temp-gauge-current");if(b&&m.currentTemp!==null){let S=Tt(m.currentTemp,m.minTemp,m.maxTemp);b.style.left=`${S.toFixed(1)}%`}let _=g.querySelector(".temp-gauge-target");if(_&&m.targetTemp!==null){let S=Tt(m.targetTemp,m.minTemp,m.maxTemp);_.style.left=`${S.toFixed(1)}%`}let w=g.querySelector(".temp-gauge-bg");if(w&&!m.isUnavailable){let S=G(m.minTemp),A=G((m.minTemp+m.maxTemp)/2),T=G(m.maxTemp);w.style.background=`linear-gradient(to right, ${S}, ${A}, ${T})`}m.isUnavailable?g.classList.add("unavailable"):g.classList.remove("unavailable")}}function wn(e){return e>95?"var(--label-badge-red, #F44336)":e>80?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-green, #4CAF50)"}function bo(e){let t=(e||"").toLowerCase();return t==="ok"||t==="healthy"?"var(--label-badge-green, #4CAF50)":t==="warning"?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function _o(e,t){let i=t>0?Math.min(100,e/t*100):0,n=wn(i),o=80,s=o/2,a=o/2,r=o/2-4,l=r*.7,c=Ut(s,a,l,r,-90,269.9),d=-90+i/100*360,u=i>0?Ut(s,a,l,r,-90,Math.min(d,269.9)):"",f=i>95,p=i>80,m=f||p,g='<div class="usage-gauge">';if(g+=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="API usage: ${Math.round(e)} of ${Math.round(t)}" style="width:${o}px;height:${o}px">`,m&&(g+='<defs><filter id="gauge-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'),g+=`<path d="${c}" fill="var(--divider-color, rgba(0,0,0,0.12))" />`,u){if(g+=`<path d="${u}" fill="${k(n)}"${m?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(i)}%</title>`,m){let y=f?"1":"2.5";ot()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${y}s" repeatCount="indefinite"/>`)}g+="</path>"}return g+="</svg>",g+=`<div class="gauge-center">${h(Math.round(e))}<br><span style="font-size:10px;opacity:0.6">/ ${h(Math.round(t))}</span></div>`,g+="</div>",g}function yo(e,t,i){let n=t?.data?.[e]||[];return pt(n,200,40,i,"api-hist-grad","API usage history")}function xo(e){let t=Wt(e,rt);if(t.length===0)return"";let i=60,n=Bt(t,i),o=t.reduce((l,c)=>l+c.value,0),s='<div style="display:flex;align-items:center;gap:12px">';s+=`<div class="donut-container" style="width:${i}px;height:${i}px;flex-shrink:0;margin:0">`,s+=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="API call breakdown">`;let a=i/2-2,r=a*.6;s+=`<circle cx="${i/2}" cy="${i/2}" r="${((a+r)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(a-r).toFixed(1)}" />`;for(let l of n)s+=`<path d="${l.d}" fill="${k(l.color)}"><title>${h(l.label)}: ${Math.round(l.angle/360*o)}</title></path>`;return s+="</svg>",s+=`<div class="donut-center" style="font-size:12px">${h(Math.round(o))}</div>`,s+="</div>",s+=St(t.map(l=>({label:l.label,color:l.color,value:String(Math.round(l.value))}))),s+="</div>",s}function fe(e,t,i,n){if(!e.api_usage||!e.api_limit)return"";let o=parseFloat(t[e.api_usage]?.state)||0,s=parseFloat(t[e.api_limit]?.state)||100,a=s>0?Math.min(100,o/s*100):0,r=wn(a),l=t[e.api_status]?.state||"unknown",c=bo(l),d='<div class="section section-api">';d+='<div class="section-label">API Usage</div>',d+='<div class="api-dashboard">',d+='<div class="api-row">',d+=_o(o,s);let u=e.api_usage;if(u&&n&&(d+=yo(u,n,r)),d+="</div>",e.api_breakdown&&t[e.api_breakdown]&&(d+='<div class="api-row">',d+=xo(t[e.api_breakdown].attributes||{}),d+="</div>"),d+='<div class="zone-chips">',e.call_history&&t[e.call_history]){let f=t[e.call_history].attributes?.calls_per_hour;f!=null&&Number(f)>0&&(d+=`<span class="chip" data-entity="${h(e.call_history)}">`,d+=`<ha-icon icon="mdi:speedometer"></ha-icon>${h(Math.round(Number(f)))}/hr</span>`)}if(e.polling_interval&&t[e.polling_interval]){let f=t[e.polling_interval],p=f.attributes?.unit_of_measurement||"";d+=`<span class="chip" data-entity="${h(e.polling_interval)}">Poll: ${h(f.state)}${p?h(p):""}</span>`}if(e.next_sync&&t[e.next_sync]){let f=t[e.next_sync].state,p=f,m=0;if(f&&f.includes("T"))try{let g=new Date(f);m=g.getTime();let y=m-Date.now();if(y>0&&y<36e5){let v=Math.floor(y/6e4),b=Math.floor(y%6e4/1e3);p=v>0?`${v}m ${b}s`:`${b}s`}else p=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`}catch(g){console.debug("Pulse Climate: api date parse fallback",g)}d+=`<span class="chip chip-next-sync" data-entity="${h(e.next_sync)}" data-target="${m}">Next: ${h(p)}</span>`}if(e.api_reset&&t[e.api_reset]){let f=t[e.api_reset].state,p=f;if(f&&f.includes("T"))try{let m=new Date(f);p=`${String(m.getHours()).padStart(2,"0")}:${String(m.getMinutes()).padStart(2,"0")}`}catch(m){console.debug("Pulse Climate: api date parse fallback",m)}d+=`<span class="chip" data-entity="${h(e.api_reset)}">Reset: ${h(p)}</span>`}return e.token_status&&t[e.token_status]&&(d+=`<span class="chip" data-entity="${h(e.token_status)}">Token: ${h(t[e.token_status].state)}</span>`),d+=`<span class="chip" data-entity="${e.api_status?h(e.api_status):""}" style="color:${k(c)}">${h(l)}</span>`,d+="</div>",d+="</div>",d+="</div>",d}function me(e,t,i){if(!e.bridge_connected)return"";let n=t[e.bridge_connected];if(!n)return"";let o=n.state==="on",s=o?"var(--label-badge-green, #4CAF50)":"var(--label-badge-red, #F44336)",a=o?"Connected":"Disconnected",r=o?"pulse-dot connected":"pulse-dot disconnected",l=n.attributes||{},c=l.response_time_ms,d=l.consecutive_failures,u=l.last_error,f=e.boiler_flow_temp&&t[e.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",p='<div class="section section-bridge">';if(p+='<div class="section-label">Bridge</div>',p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${h(e.bridge_connected)}" style="color:${k(s)}">`,p+=`<span class="${r}"></span>`,p+=`${h(a)}</span>`,c!==void 0&&(p+=`<span class="chip" data-entity="${h(e.bridge_connected)}">${h(Math.round(c))}ms</span>`),d!==void 0&&d>0&&(p+=`<span class="chip" data-entity="${h(e.bridge_connected)}" style="color:var(--label-badge-red, #F44336)">Failures: ${h(d)}</span>`),p+="</div>",e.boiler_flow_temp&&t[e.boiler_flow_temp]){let y=parseFloat(t[e.boiler_flow_temp].state),v=t[e.boiler_flow_temp].state,b=isNaN(y)?"var(--primary-text-color)":G(y);if(p+='<div style="display:flex;align-items:center;gap:8px;margin-top:4px">',p+=`<span class="flow-temp-value" style="color:${k(b)}">${h(v)}${h(f)}</span>`,i){let _=i.data?.[e.boiler_flow_temp]||[],w=pt(_,120,30,b,"bridge-flow-grad","Boiler flow temperature history");w&&(p+=`<div class="flow-sparkline">${w}</div>`)}p+="</div>"}let m=e.wc_status&&t[e.wc_status],g=e.wc_target_flow&&t[e.wc_target_flow];if((m||g)&&(p+='<div class="zone-chips">',m&&(p+=`<span class="chip" data-entity="${h(e.wc_status)}">${h(t[e.wc_status].state)}</span>`),g&&(p+=`<span class="chip" data-entity="${h(e.wc_target_flow)}">Target: ${h(t[e.wc_target_flow].state)}${h(f)}</span>`),p+="</div>"),e.boiler_max_output&&t[e.boiler_max_output]){let y=t[e.boiler_max_output].state;y!=="unavailable"&&y!=="unknown"&&(p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${h(e.boiler_max_output)}">`,p+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${h(y)}${h(f)}</span>`,p+="</div>")}return u&&u!=="None"&&u!=="null"&&(p+='<div class="zone-chips">',p+=`<span class="chip" style="color:var(--label-badge-red, #F44336)">Error: ${h(u)}</span>`,p+="</div>"),p+="</div>",p}var jt="var(--label-badge-green, #4CAF50)",$n="var(--accent-color, #9C27B0)";function ge(e,t,i){if(!e.homekit_connected)return"";let n=t[e.homekit_connected];if(!n)return"";let o=n.state==="on",s=o?jt:"var(--label-badge-red, #F44336)",a=o?"Connected":"Disconnected",r=o?"pulse-dot connected":"pulse-dot disconnected",l=n.attributes||{},c=l.uptime||"",d=l.mapped_zones,u=l.reconnect_count,f=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,p=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,m=f?Number(f.state)||0:Number(l.reads_saved_today)||0,g=p?Number(p.state)||0:Number(l.writes_saved_today)||0,y=m+g,v='<div class="section section-homekit">',b=y>0?` \xB7 ${y} saved`:"";if(v+=`<div class="section-label">HomeKit${h(b)}</div>`,v+='<div class="zone-chips">',v+=`<span class="chip" data-entity="${h(e.homekit_connected)}" style="color:${k(s)}">`,v+=`<span class="${r}"></span>`,v+=`${h(a)}`,c&&(v+=` <span style="opacity:0.6;font-size:10px">${h(c)}</span>`),v+="</span>",d!==void 0&&(v+=`<span class="chip">${h(d)} zones</span>`),u!==void 0&&u>0&&(v+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Reconnects: ${h(u)}</span>`),v+="</div>",m>0||g>0){let T=y>0?m/y*100:100;v+='<div style="margin-top:4px">',v+='<div class="power-bar-container">',v+='<div class="power-bar-track"></div>',v+=`<div class="power-bar-fill" style="width:100%;background:${k($n)}"></div>`,v+=`<div class="power-bar-fill" style="width:${k(T.toFixed(1))}%;background:${k(jt)}"></div>`,v+="</div>",v+="</div>";let C=e.homekit_reads_saved;if(C&&i){let $=i.data?.[C]||[];v+=pt($,200,30,jt,"hk-spark-grad","HomeKit saved calls history")}v+='<div class="zone-chips">';let F=e.homekit_reads_saved||"",M=e.homekit_writes_saved||"";v+=`<span class="chip"${F?` data-entity="${h(F)}"`:""} style="color:${k(jt)}">Reads: ${h(m)}</span>`,g>0&&(v+=`<span class="chip"${M?` data-entity="${h(M)}"`:""} style="color:${k($n)}">Writes: ${h(g)}</span>`),v+="</div>"}let _=Number(l.write_attempts)||0,w=Number(l.write_successes)||0,S=Number(l.write_fallbacks)||0,A=Number(l.write_avg_latency_ms)||0;return(_>0||w>0||S>0)&&(v+='<div class="zone-chips">',_>0&&(v+=`<span class="chip">Attempts: ${h(_)}</span>`),w>0&&(v+=`<span class="chip">Successes: ${h(w)}</span>`),S>0&&(v+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Fallbacks: ${h(S)}</span>`),A>0&&(v+=`<span class="chip">Latency: ${h(A)}ms</span>`),v+="</div>"),v+="</div>",v}function wo(e){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(e||"").toLowerCase()]||"mdi:weather-cloudy"}function ve(e,t,i){if(!e.outside_temp)return"";let n=t[e.outside_temp]?.state,o=t[e.weather]?.state||"",s=e.solar_intensity?t[e.solar_intensity]?.state:null,a='<div class="section section-weather">';a+='<div class="section-label">Weather</div>',a+='<div class="zone-chips">',o&&(a+=`<span class="chip"${e.weather?` data-entity="${h(e.weather)}"`:""}><ha-icon icon="${h(wo(o))}"></ha-icon>${h(o)}</span>`),n!=null&&(a+=`<span class="chip" data-entity="${h(e.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${h(n)}${h(t[e.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),s!=null&&(a+=`<span class="chip"${e.solar_intensity?` data-entity="${h(e.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${h(s)}%</span>`),a+="</div>";let r=e.outside_temp;if(r&&i){let l=i.data?.[r]||[],c=parseFloat(n||"0"),d=isNaN(c)?"var(--primary-text-color)":G(c);a+=pt(l,200,30,d,"weather-spark-grad","Outdoor temperature history")}return a+="</div>",a}function be(e,t,i){let n=!1,o='<div class="section section-environment">';o+='<div class="section-label">Environment</div>';for(let s of e){let a=D(s.entity),r=i?.zoneEntities?.[a]||{},l=r.mold_risk&&t[r.mold_risk],c=r.condensation&&t[r.condensation],d=r.comfort_level&&t[r.comfort_level],u=r.surface_temp&&t[r.surface_temp],f=r.dew_point&&t[r.dew_point];if(!l&&!c&&!d&&!u&&!f)continue;n=!0;let p=s.name||t[s.entity]?.attributes?.friendly_name||a;if(o+=`<div class="system-row"><span class="system-label">${h(p)}</span>`,o+='<div class="zone-chips">',l){let m=t[r.mold_risk].state,g=Ot(m);o+=`<span class="chip" data-entity="${h(r.mold_risk)}" style="color:${k(g.fallback)}">`,o+=`<ha-icon icon="mdi:mushroom"></ha-icon>${h(m)}</span>`}if(c){let m=t[r.condensation].state,g=Ot(m);o+=`<span class="chip" data-entity="${h(r.condensation)}" style="color:${k(g.fallback)}">`,o+=`<ha-icon icon="mdi:water-alert"></ha-icon>${h(m)}</span>`}d&&(o+=`<span class="chip" data-entity="${h(r.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${h(t[r.comfort_level].state)}</span>`),u&&(o+=`<span class="chip" data-entity="${h(r.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${h(t[r.surface_temp].state)}${h(t[r.surface_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),f&&(o+=`<span class="chip" data-entity="${h(r.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${h(t[r.dew_point].state)}${h(t[r.dew_point]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function _e(e,t,i){let n=!1,o='<div class="section section-thermal">';o+='<div class="section-label">Thermal Analytics</div>';for(let s of e){let a=D(s.entity),r=i?.zoneEntities?.[a]||{},l=r.heating_rate&&t[r.heating_rate],c=r.thermal_inertia&&t[r.thermal_inertia],d=r.preheat_time&&t[r.preheat_time],u=r.confidence&&t[r.confidence],f=r.heat_accel&&t[r.heat_accel],p=r.approach_factor&&t[r.approach_factor];if(!l&&!c&&!d&&!u&&!f&&!p)continue;n=!0;let m=s.name||t[s.entity]?.attributes?.friendly_name||a;o+=`<div class="system-row"><span class="system-label">${h(m)}</span>`,o+='<div class="zone-chips">',l&&(o+=`<span class="chip" data-entity="${h(r.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${h(t[r.heating_rate].state)}${h(t[r.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr")}</span>`),c&&(o+=`<span class="chip" data-entity="${h(r.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${h(t[r.thermal_inertia].state)}</span>`),d&&(o+=`<span class="chip" data-entity="${h(r.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${h(t[r.preheat_time].state)} min</span>`),u&&(o+=`<span class="chip" data-entity="${h(r.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${h(t[r.confidence].state)}%</span>`),f&&(o+=`<span class="chip" data-entity="${h(r.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${h(t[r.heat_accel].state)}${h(t[r.heat_accel]?.attributes?.unit_of_measurement||"")}</span>`),p&&(o+=`<span class="chip" data-entity="${h(r.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${h(t[r.approach_factor].state)}${h(t[r.approach_factor]?.attributes?.unit_of_measurement||"")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function ye(e,t,i){let n=!1,o='<div class="section section-schedule">';o+='<div class="section-label">Schedule</div>';for(let s of e){let a=D(s.entity),r=i?.zoneEntities?.[a]||{},l=r.next_schedule&&t[r.next_schedule],c=r.schedule_deviation&&t[r.schedule_deviation],d=r.preheat_advisor&&t[r.preheat_advisor],u=r.comfort_target&&t[r.comfort_target];if(!l&&!c&&!d&&!u)continue;n=!0;let f=s.name||t[s.entity]?.attributes?.friendly_name||a;if(o+=`<div class="system-row"><span class="system-label">${h(f)}</span>`,o+='<div class="zone-chips">',l){let p=r.next_sched_temp&&t[r.next_sched_temp]?` \u2192 ${h(t[r.next_sched_temp].state)}${h(t[r.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C")}`:"";o+=`<span class="chip" data-entity="${h(r.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${h(t[r.next_schedule].state)}${p}</span>`}c&&(o+=`<span class="chip" data-entity="${h(r.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${h(t[r.schedule_deviation].state)}${h(t[r.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),d&&(o+=`<span class="chip" data-entity="${h(r.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${h(t[r.preheat_advisor].state)}</span>`),u&&(o+=`<span class="chip" data-entity="${h(r.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${h(t[r.comfort_target].state)}${h(t[r.comfort_target]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}var xe=0;function $o(){return xe=xe+1>>>0,`graph-grad-${xe.toString(36)}`}function So(e,t){let i=t&&t.length>0?t:rt;return i[e%i.length]}function ko(e,t,i){let o=[];for(let r of e){let l=lt(r.data,300,t,48);l&&o.push({...l,color:r.color,entityId:r.entityId})}if(o.length===0){let r=yn(e,300,t);if(!r.some(d=>d.d!==""))return'<div class="chart-empty">No data available</div>';let c=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${h(i)}" class="chart-svg" preserveAspectRatio="none">`;for(let d of r)d.d!==""&&(c+=`<path d="${d.d}" fill="none" stroke="${k(d.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${h(d.entityId)}" />`);return c+="</svg>",c}let s=o.map(()=>$o()),a=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${h(i)}" class="chart-svg" preserveAspectRatio="none">`;a+="<defs>";for(let r=0;r<o.length;r++)a+=`<linearGradient id="${s[r]}" x1="0" y1="0" x2="0" y2="1">`,a+=`<stop offset="0%" stop-color="${k(o[r].color)}" stop-opacity="0.25"/>`,a+=`<stop offset="100%" stop-color="${k(o[r].color)}" stop-opacity="0"/>`,a+="</linearGradient>";a+="</defs>";for(let r=0;r<o.length;r++){let l=o[r];a+=`<path d="${l.areaPath}" fill="url(#${s[r]})" />`,a+=`<path d="${l.linePath}" fill="none" stroke="${k(l.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${h(l.entityId)}" />`}return a+="</svg>",a}function $e(e,t,i,n,o){let s=e.attribute||"current_temperature",a=e.stacked===!0,r=Number(e.height)||80,l=e.palette||void 0,c=e.entities||t.map(u=>u.entity);if(c.length===0)return"";let d='<div class="section section-graph">';return a?(d+=we(c,"current_temperature","Temperature",r,l,i,n,o,t),d+=we(c,"current_humidity","Humidity",r,l,i,n,o,t)):d+=we(c,s,s==="current_humidity"?"Humidity":"Temperature",r,l,i,n,o,t),d+="</div>",d}function we(e,t,i,n,o,s,a,r,l){let c=[],d=[],u=t==="current_humidity"||t==="humidity";for(let g=0;g<e.length;g++){let y=e[g],v=So(g,o),b=D(y),_=r?.zoneEntities?.[b]||{},w=l?.find($=>$.entity===y),A=(u?dt(y,a,_,w):at(y,a,_,w))?.entityId||y,T=s.data[A]||[],C=w?.name||a[y]?.attributes?.friendly_name||b,F=a[y]?.attributes?.[t],M=u?"%":a[y]?.attributes?.unit_of_measurement||"\xB0C";c.push({entityId:A,data:T,color:v}),d.push({label:C,color:v,value:F!=null?`${F}${M}`:"--"})}let f=d.map(g=>g.label).join(", "),p=`${i} history for ${f}`,m=`<div class="section-label">${h(i)}</div>`;return m+=`<div class="chart-container" style="height:${k(n)}px">`,m+=ko(c,n,p),m+="</div>",m+=St(d),m}function Se(e,t,i){let n=Number(e.size)||120,o=e.source,s=[];if(o==="api_breakdown"?s=Ao(t,i):o==="homekit_saved"?s=Co(t,i):e.segments&&(s=To(e.segments,i)),s.length===0)return"";let a=s.reduce((g,y)=>g+y.value,0),r=Bt(s,n),l='<div class="section section-donut">',d=o&&{api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"}[o]||"Breakdown";l+=`<div class="section-label">${h(d)}</div>`;let u=s.map(g=>`${g.label} ${g.value}`).join(", ");l+=`<div class="donut-container" style="width:${k(n)}px;height:${k(n)}px">`,l+=`<svg viewBox="0 0 ${n} ${n}" role="img" aria-label="${h(u)}">`;let f=n/2-2,p=f*.6;l+=`<circle cx="${n/2}" cy="${n/2}" r="${((f+p)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(f-p).toFixed(1)}" />`;for(let g of r)l+=`<path d="${g.d}" fill="${k(g.color)}" data-segment="${h(g.label)}"><title>${h(g.label)}: ${Math.round(g.angle/360*a)}</title></path>`;l+="</svg>",l+=`<div class="donut-center">${h(Math.round(a))}</div>`,l+="</div>";let m=s.map(g=>({label:g.label,color:g.color,value:String(Math.round(g.value))}));return l+=St(m),l+="</div>",l}function Ao(e,t){let i=e.api_breakdown;if(!i||!t[i])return[];let n=t[i].attributes;return!n||typeof n!="object"?(st("api_call_breakdown entity has no attributes"),[]):Wt(n,rt)}function Co(e,t){if(!e.homekit_connected)return[];let i=t[e.homekit_connected];if(!i)return[];let n=i.attributes||{},o=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,s=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,a=o?Number(o.state)||0:Number(n.reads_saved_today)||0,r=s?Number(s.state)||0:Number(n.writes_saved_today)||0,l=[];return(a>0||r>0)&&(l.push({label:"Reads Saved",value:a,color:rt[0]}),l.push({label:"Writes Saved",value:r,color:rt[1]})),l}function To(e,t){return e.map((i,n)=>({label:i.label||i.entity,value:Math.max(0,Number(t[i.entity]?.state)||0),color:i.color||rt[n%rt.length]}))}function Sn(e,t,i){let o=Date.now()-i,s=i/t,a=[],r=0,l=null;for(;r<e.length&&e[r].t<o;)isFinite(e[r].v)&&(l=Math.round(e[r].v*10)/10),r++;for(let c=0;c<t;c++){let d=o+c*s,u=d+s,f=d+s/2,p=0,m=0;for(;r<e.length&&e[r].t<u;)e[r].t>=d&&isFinite(e[r].v)&&(p+=e[r].v,m++),r++;m>0&&(l=Math.round(p/m*10)/10);let g=new Date(f),y=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`;a.push({value:l,time:f,label:y})}return a}function Gt(e,t,i={}){let n=e.length;if(n===0)return'<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">No data</div></div>';let o=i.emptyColor||"var(--disabled-color, #9E9E9E)",s=i.emptyOpacity??.3,a=i.ariaLabel||"",r=JSON.stringify(e.map(c=>({v:c.value,l:c.label}))),l=`<div class="strip-container" data-slots='${h(r)}'>`;l+=`<svg viewBox="0 0 ${n} 1" preserveAspectRatio="none" role="img" aria-label="${h(a)}" style="width:100%;height:100%;display:block">`;for(let c=0;c<n;c++){let d=e[c].value,u=d!==null?t(d):o,f=d!==null?1:s;l+=`<rect x="${c}" y="0" width="1.05" height="1" fill="${k(u)}" opacity="${f}"/>`}if(l+="</svg>",i.nowPct!==void 0){let c=Math.min(100,Math.max(0,i.nowPct));l+=`<div class="now-marker" style="left:${c.toFixed(1)}%"></div>`}return l+="</div>",l}function Zt(e,t,i={}){let n=e.length;if(n===0)return'<div class="cells"><div class="chart-empty" style="height:16px;font-size:10px">No data</div></div>';let o=JSON.stringify(e.map(a=>({v:a.value,l:a.label}))),s=`<div class="cells" data-slots='${h(o)}'>`;for(let a=0;a<n;a++){let r=e[a].value,l=e[a].label;if(r!==null){let c=t(r);s+=`<div class="cell" style="background:${k(c)}" data-hour="${h(l)}" data-score="${r}"></div>`}else s+=`<div class="cell cell-empty" data-hour="${h(l)}"></div>`}return s+="</div>",s}function ke(){let e=document.createElement("div");e.className="strip-tooltip",e.style.display="none";let t=null;return{element:e,show(i,n,o){t&&(clearTimeout(t),t=null),e.textContent=o,e.style.display="",e.style.left=`${n}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function kn(){let e=document.createElement("div");e.className="strip-tooltip strip-tooltip-fixed",e.style.display="none";let t=null;return{element:e,show(i,n,o){t&&(clearTimeout(t),t=null),e.textContent=o,e.style.display="",e.style.left=`${n}px`,e.style.top=`${i.top-28}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function Kt(e,t=5){let i=new Date,n=Date.now()-e,o="";for(let s=0;s<t-1;s++){let a=new Date(n+s/(t-1)*e);o+=`<span class="time-label">${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}</span>`}return o+=`<span class="time-label">${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}</span>`,o}function ut(e,t,i){let n=Math.max(0,Math.min(1,(e-t.left)/t.width));return Math.min(i-1,Math.floor(n*i))}var Fo=2e3;function Ae(e,t,i,n){let o=null,s=r=>{let l=i.getBoundingClientRect(),c=r-l.left;c>=0&&c<=l.width&&(t.style.left=`${n+c}px`,t.style.display="")},a=()=>{t.style.display="none",o&&(clearTimeout(o),o=null)};e.addEventListener("pointermove",r=>{r.pointerType!=="touch"&&s(r.clientX)}),e.addEventListener("pointerleave",a),e.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(s(r.clientX),o&&clearTimeout(o),o=setTimeout(a,Fo))}),e.addEventListener("pointerup",r=>{r.pointerType})}function Ce(e,t,i,n=""){if(!t||t.length===0)return;let o=t.length,s=null,a=null;e.addEventListener("pointerdown",r=>{if(r.pointerType==="touch"&&r.isPrimary===!1)return;let l=e.getBoundingClientRect();s=ut(r.clientX,l,o),e.setPointerCapture(r.pointerId),a||(a=document.createElement("div"),a.className="strip-drag-highlight",e.style.position="relative",e.appendChild(a)),a.style.display="",a.style.left=`${(s/o*100).toFixed(1)}%`,a.style.width="0%"}),e.addEventListener("pointermove",r=>{if(s===null||!a)return;let l=e.getBoundingClientRect(),c=ut(r.clientX,l,o),d=Math.min(s,c),u=Math.max(s,c);a.style.left=`${(d/o*100).toFixed(1)}%`,a.style.width=`${((u-d+1)/o*100).toFixed(1)}%`}),e.addEventListener("pointerup",r=>{if(s===null){s=null;return}let l=e.getBoundingClientRect(),c=ut(r.clientX,l,o),d=Math.min(s,c),u=Math.max(s,c),f=t.slice(d,u+1).filter(p=>p.v!==null);if(f.length>0){let p=f.map(S=>S.v),m=(p.reduce((S,A)=>S+A,0)/p.length).toFixed(1),g=Math.min(...p),y=Math.max(...p),v=t[d]?.l||"",b=t[u]?.l||"",_=`${v} \u2013 ${b}: avg ${m}${n}, ${g}${n} \u2013 ${y}${n}`,w=e.getBoundingClientRect();i.show(w,(d+u)/2/o*w.width,_),setTimeout(()=>i.hide(),3e3)}s=null})}function An(e,t,i,n,o){if(!e||e.length===0)return"";let s=Number(t?.hours_to_show)||24,a=t?.mode||"timeline",r=Number(t?.slots_per_hour)||2,c=(t?.attribute||"temperature")==="humidity",d=c?Ft:G,u=a==="heatmap"?s:s*r,f=s*36e5,p=Date.now()-f,m=(Date.now()-p)/f*100,g=c?"Humidity":"Thermal",y=a==="heatmap"?"Heatmap":"Timeline",v='<div class="section section-thermal-strip">';v+='<div style="display:flex;justify-content:space-between;align-items:baseline">',v+=`<div class="section-label">${h(String(Number(s)))}h ${h(g)} ${h(y)}</div>`,v+='<span class="card-subtitle section-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',v+="</div>",v+='<div class="zone-detail" id="timeline-detail"></div>',v+='<div class="strip-rows" style="position:relative">',v+='<div class="strip-crosshair" style="display:none"></div>';for(let b of e){let _=b.entity,w=D(_),S=n?.zoneEntities?.[w]||{},T=(c?dt(_,i,S,b):at(_,i,S,b))?.entityId||_,C=b.name||i[_]?.attributes?.friendly_name||w,F=o?.data?.[T]||[];if(v+=`<div class="timeline-row" data-zone="${h(w)}" data-entity="${h(_)}">`,v+=`<span class="zone-label">${h(C)}</span>`,F.length<2){let M=!!i[T],$=T in(o?.data||{});v+=`<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">${h(M&&!$?"Waiting for data":"No data")}</div></div>`}else{let M=Sn(F,u,f),x=`${C} ${c?"humidity":"temperature"} over ${s}h`;a==="heatmap"?v+=Zt(M,d,{ariaLabel:x}):v+=Gt(M,d,{ariaLabel:x,nowPct:m})}v+="</div>"}return v+="</div>",v+='<div class="time-axis" style="margin-left:76px">',v+=Kt(f),v+="</div>",v+="</div>",v}var Eo={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function Cn(e,t,i,n){if(e==null||t===null||t===void 0||isNaN(e)||isNaN(t))return null;let o=100;if(o-=Math.min(50,Math.abs(e-t)*10),i!=null&&(o-=Math.min(25,Math.abs(i-45)*.5)),n!=null){let s=Eo[n]??50;o=o*.7+s*.3}return Math.max(0,Math.min(100,Math.round(o)))}function Tn(e){if(e>=80)return`rgba(52, 199, 89, ${(.35+e/100*.55).toFixed(2)})`;if(e>=50){let t=(e-50)/30;return`rgba(${Math.round(255-t*50)}, ${Math.round(159+t*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-e)/50*.5).toFixed(2)})`}function Yt(e,t,i=72e5){if(e.length===0)return null;let n=0,o=e.length-1;for(;n<o;){let r=n+o>>1;e[r].t<t?n=r+1:o=r}let s=null,a=1/0;for(let r=Math.max(0,n-1);r<=Math.min(e.length-1,n);r++){let l=Math.abs(e[r].t-t);l<a&&isFinite(e[r].v)&&(a=l,s=e[r].v)}return a<=i?s:null}function Fn(e,t,i,n,o){if(!e||e.length===0)return"";let s=Number(t?.slots_per_hour)||1,a=Number(t?.hours_to_show)||24,r=t?.mode||"heatmap",l=s*a,c=a*36e5,d=Date.now()-c,u=(Date.now()-d)/c*100,f=r==="timeline"?"Comfort Timeline":"Comfort Heatmap",p='<div class="section section-comfort-strip">';p+='<div style="display:flex;justify-content:space-between;align-items:baseline">',p+=`<div class="section-label">${h(String(Number(a)))}h ${h(f)}</div>`,p+='<span class="card-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',p+="</div>",p+='<div class="zone-detail" id="heatmap-detail"></div>',p+='<div class="heatmap-body" style="position:relative">',p+='<div class="strip-crosshair" style="display:none"></div>';for(let m=0;m<e.length;m++){let g=e[m],y=g.entity,v=D(y),b=n?.zoneEntities?.[v]||{},_=g.name||i[y]?.attributes?.friendly_name||v,S=at(y,i,b,g).entityId,T=dt(y,i,b,g)?.entityId||null,C=o?.data?.[S]||[],F=T?o?.data?.[T]||[]:[],M=i[y]?.attributes?.temperature??null,$=b.comfort_level,x=$&&i[$]?.state||null,E=[],N=c/l,L=null;if(C.length>0){let I=Yt(C,d,1/0),z=F.length>0?Yt(F,d,1/0):null;I!==null&&(L=Cn(I,M,z,x))}for(let I=0;I<l;I++){let P=d+I*N+N/2,O=Yt(C,P),H=Yt(F,P),W=Cn(O,M,H,x);W!==null&&(L=W);let Y=new Date(P),K=`${String(Y.getHours()).padStart(2,"0")}:${String(Y.getMinutes()).padStart(2,"0")}`;E.push({value:L,time:P,label:K})}p+=`<div class="heatmap-row" data-zone="${h(v)}" data-idx="${m}">`,p+=`<span class="zone-label">${h(_)}</span>`;let Z=`${_} comfort over ${a}h`;r==="timeline"?p+=Gt(E,Tn,{ariaLabel:Z,nowPct:u}):p+=Zt(E,Tn),p+="</div>"}return p+="</div>",p+='<div class="heatmap-time-axis">',p+=Kt(c),p+="</div>",p+='<div class="heatmap-legend">',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(52,199,89,0.7)"></div>\u226580</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,159,10,0.65)"></div>50\u201379</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,69,58,0.6)"></div>&lt;50</div>',p+="</div>",p+="</div>",p}function En(e,t,i,n,o,s,a){let r=s+(a-s)*.35,l=s+(a-s)*.65,c=e-i,d=t-n,u=e+i,f=t+n,p=`M${s},${c.toFixed(1)}`;return p+=` C${r.toFixed(1)},${c.toFixed(1)} ${l.toFixed(1)},${d.toFixed(1)} ${a},${d.toFixed(1)}`,p+=` L${a},${f.toFixed(1)}`,p+=` C${l.toFixed(1)},${f.toFixed(1)} ${r.toFixed(1)},${u.toFixed(1)} ${s},${u.toFixed(1)}`,p+=" Z",p}function Io(e,t,i,n){let o=i+(n-i)*.35,s=i+(n-i)*.65;return`M${i},${e.toFixed(1)} C${o.toFixed(1)},${e.toFixed(1)} ${s.toFixed(1)},${t.toFixed(1)} ${n},${t.toFixed(1)}`}function Te(e,t,i){if(!e||e.length===0)return"";let n=ot(),o=[],s=!1;for(let $ of e){let x=$.entity,E=D(x),N=i?.zoneEntities?.[E]||{},L=J(x,N,t,$,{});(L.heatingPower>0||N.heating_power||t[x]?.attributes?.heating_power!==void 0)&&(s=!0),o.push({name:L.name,power:L.heatingPower,temp:L.currentTemp,target:L.targetTemp,unit:L.unit,hvacAction:L.hvacAction})}let a=o.length>0?Math.round(o.reduce(($,x)=>$+x.power,0)/o.length):0,r='<div class="section section-energy-flow">';if(r+='<div style="display:flex;justify-content:space-between;align-items:baseline">',r+='<div class="section-label">Energy Flow</div>',s&&(r+=`<span class="energy-flow-header-value" style="font-size:11px;color:${k(mt.heating.fallback)};font-weight:500">${h(a)}% avg</span>`),r+="</div>",!s)return r+='<div class="chart-empty">No heating data</div></div>',r;let l=360,c=o.length<=3?44:o.length<=6?38:34,d=15,u=Math.max(80,o.length*c+30),f=o.length*c,p=Math.max(40,Math.min(f*.7,f-16)),m=Math.max(36,p*.6),g=Math.max(50,m/2+14),y=l-60,v=u/2,b=22,_=2,w=p/Math.max(o.length,1)*.7,S=mt.heating.fallback,A="var(--disabled-color, #9E9E9E)",T=o.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),C=o.filter($=>$.power>0).length;r+=`<svg viewBox="0 0 ${l} ${u}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${k(u)}px;display:block">`,r+="<defs>",r+=`<filter id="flow-glow"><feGaussianBlur stdDeviation="${wt(l,360).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;for(let $=0;$<o.length;$++){let x=o[$].power>0||o[$].hvacAction==="heating"||o[$].hvacAction==="cooling",E=x?S:A,N=o[$].power;if(x){let L=N>0?(4.5-N/100*3.3).toFixed(1):"5.0";r+=`<linearGradient id="flow-g${$}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,r+=`<stop offset="0%" stop-color="${k(E)}" stop-opacity="0.3"/>`,r+=`<stop offset="50%" stop-color="${k(E)}" stop-opacity="1.0"/>`,r+=`<stop offset="100%" stop-color="${k(E)}" stop-opacity="0.3"/>`,n||(r+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${L}s" repeatCount="indefinite"/>`,r+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${L}s" repeatCount="indefinite"/>`),r+="</linearGradient>"}else r+=`<linearGradient id="flow-g${$}" x1="0" y1="0" x2="1" y2="0">`,r+=`<stop offset="0%" stop-color="${k(E)}" stop-opacity="0.15"/>`,r+=`<stop offset="50%" stop-color="${k(E)}" stop-opacity="0.25"/>`,r+=`<stop offset="100%" stop-color="${k(E)}" stop-opacity="0.1"/>`,r+="</linearGradient>"}r+="</defs>";let F=T?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)",M=T?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)";r+=`<rect x="${g-m/2}" y="${v-p/2}" width="${m}" height="${p}" rx="8" fill="${k(F)}" stroke="${k(M)}" stroke-width="1"/>`,r+=`<text x="${g}" y="${v-p/2-6}" text-anchor="middle" font-size="10" fill="var(--secondary-text-color, #8e8e93)">Boiler</text>`;for(let $=0;$<o.length;$++){let x=o[$],E=d+$*c+20,N=x.power>0?_+x.power/100*(b-_):_,L=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",Z=L?' class="ribbon-active"':"",I=v+($-(o.length-1)/2)*w,z=En(I,E,N/2,N/2,l,g+m/2,y-12);if(r+=`<path d="${z}" fill="url(#flow-g${$})"${Z}${L?' filter="url(#flow-glow)"':""} data-zone="${h(x.name)}" data-zone-idx="${$}">`,r+=`<title>${h(x.name)}: ${Math.round(x.power)}% heating power</title></path>`,x.power>0&&!n){let Y=an(x.power,20,C),K=ln(x.power),nt=cn(N,b),B=(nt*.8).toFixed(1),U=Io(I,E,g+m/2,y-12);r+=`<g class="flow-particles" data-zone="${h(x.name)}" data-zone-idx="${$}" style="will-change:transform">`;for(let R=0;R<Y;R++){let q=(R*(K/Y)).toFixed(2);r+=`<circle r="${nt.toFixed(1)}" fill="${k(S)}" opacity="0.8"`,r+=` filter="drop-shadow(0 0 ${B}px ${k(S)})">`,r+=`<animateMotion dur="${K.toFixed(1)}s" begin="${q}s" repeatCount="indefinite"`,r+=` path="${U}"/>`,r+="</circle>"}r+="</g>"}let P=L?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)",O=L?' font-weight="600"':"";r+=`<text x="${y}" y="${(E-1).toFixed(1)}" font-size="11" fill="${k(P)}"${O}>${h(x.name)}</text>`;let H=L?k(S):"var(--secondary-text-color, #8e8e93)",W=L?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${j(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${j(x.temp)}${x.unit}`:""}`;r+=`<text x="${y}" y="${(E+12).toFixed(1)}" font-size="9" fill="${H}">${h(W)}</text>`}return r+="</svg>",r+="</div>",r}function In(e,t,i,n){if(!e||!t||t.length===0)return!1;let o=e.querySelector("svg");if(!o)return!1;let s=[];for(let $ of t){let x=$.entity,E=D(x),N=n?.zoneEntities?.[E]||{},L=J(x,N,i,$,{});s.push({name:L.name,power:L.heatingPower,temp:L.currentTemp,unit:L.unit,hvacAction:L.hvacAction})}let a=o.querySelectorAll("path[data-zone]");if(a.length!==s.length)return!1;let r=mt.heating.fallback,l="var(--disabled-color, #9E9E9E)",c=s.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),d=360,u=s.length<=3?44:s.length<=6?38:34,f=15,p=Math.max(80,s.length*u+30),m=s.length*u,g=Math.max(40,Math.min(m*.7,m-16)),y=Math.max(36,g*.6),v=Math.max(50,y/2+14),b=d-60,_=p/2,w=22,S=2,A=g/Math.max(s.length,1)*.7,T=Math.round(s.reduce(($,x)=>$+x.power,0)/s.length),C=e.querySelector(".energy-flow-header-value");C&&(C.textContent=`${T}% avg`);let F=o.querySelector("rect");F&&(F.setAttribute("fill",c?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)"),F.setAttribute("stroke",c?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)"),F.setAttribute("stroke-width",c?"0.5":"1"));let M=o.querySelectorAll("text");for(let $=0;$<s.length;$++){let x=s[$],E=a[$],N=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",L=f+$*u+20,Z=x.power>0?S+x.power/100*(w-S):S,I=_+($-(s.length-1)/2)*A,z=En(I,L,Z/2,Z/2,d,v+y/2,b-12);E.setAttribute("d",z),N?(E.classList.add("ribbon-active"),E.setAttribute("filter","url(#flow-glow)")):(E.classList.remove("ribbon-active"),E.removeAttribute("filter"));let P=E.querySelector("title");P&&(P.textContent=`${x.name}: ${Math.round(x.power)}% heating power`);let O=o.querySelector(`g.flow-particles[data-zone-idx="${$}"]`);O&&(O.style.display=x.power>0?"":"none");let H=o.querySelector(`#flow-g${$}`);if(H){let B=N?r:l,U=H.querySelectorAll("stop"),R=H.querySelectorAll("animate");if(N){let q=x.power>0?(4.5-x.power/100*3.3).toFixed(1):"5.0";U.length>=3&&(U[0].setAttribute("stop-color",B),U[0].setAttribute("stop-opacity","0.3"),U[1].setAttribute("stop-color",B),U[1].setAttribute("stop-opacity","1.0"),U[2].setAttribute("stop-color",B),U[2].setAttribute("stop-opacity","0.3"));for(let V of R)V.setAttribute("dur",`${q}s`);H.setAttribute("gradientUnits","objectBoundingBox")}else{U.length>=3&&(U[0].setAttribute("stop-color",B),U[0].setAttribute("stop-opacity","0.15"),U[1].setAttribute("stop-color",B),U[1].setAttribute("stop-opacity","0.25"),U[2].setAttribute("stop-color",B),U[2].setAttribute("stop-opacity","0.1"));for(let q of R)q.remove()}}let W=1+$*2,Y=2+$*2,K=M[W],nt=M[Y];if(K&&(K.textContent=x.name,K.setAttribute("fill",N?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)"),N?K.setAttribute("font-weight","600"):K.removeAttribute("font-weight")),nt){let B=N?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${j(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${j(x.temp)}${x.unit}`:""}`;nt.textContent=B,nt.setAttribute("fill",N?r:"var(--secondary-text-color, #8e8e93)")}}return!0}var Mn=6,Fe=2;function Ee(e,t,i,n,o,s){let a=o*Math.PI/180,r=s*Math.PI/180,l=s-o>180?1:0;return`M${(e+i*Math.cos(a)).toFixed(2)},${(t+i*Math.sin(a)).toFixed(2)} A${i.toFixed(2)},${i.toFixed(2)} 0 ${l} 1 ${(e+i*Math.cos(r)).toFixed(2)},${(t+i*Math.sin(r)).toFixed(2)} L${(e+n*Math.cos(r)).toFixed(2)},${(t+n*Math.sin(r)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 0 ${(e+n*Math.cos(a)).toFixed(2)},${(t+n*Math.sin(a)).toFixed(2)} Z`}function Ie(e,t,i,n,o){if(!e||e.length===0)return"";let s=ot(),a=Number(t?.size)||280,r=t?.attribute||"temperature",l=r==="temperature"||r==="both",c=r==="humidity"||r==="both",d=a/2,u=a/2,f=a*120/280,p=1.5,y=(360-p*e.length)/e.length,v=[];for(let I of e){let z=I.entity,P=D(z),O=n?.zoneEntities?.[P]||{},H=J(z,O,i,I,{});v.push({name:H.name,temp:H.currentTemp,target:H.targetTemp,power:H.heatingPower,humidity:H.humidity,hvacAction:H.hvacAction,entityId:z,unit:H.unit})}let b=t?.outdoor_temp_entity,_=b||n?.hubEntities?.outside_temp,w=null;if(_&&i[_]){let I=i[_];I.state!=="unavailable"&&I.state!=="unknown"&&(w=I.attributes?.temperature!==void 0?String(I.attributes.temperature):I.state)}let S=_&&i[_]?.attributes?.unit_of_measurement||"\xB0C",A=t?.outdoor_humidity_entity,T=null;if(A&&i[A]){let I=i[A];I.state!=="unavailable"&&I.state!=="unknown"&&(T=I.attributes?.humidity!==void 0?String(I.attributes.humidity):I.state)}let C="",F=r==="humidity"?T!==null?`${h(T)}%`:"--":w!==null?`${h(w)}${h(S)}`:"--";r!=="humidity"&&c&&T!==null&&(C=`${h(T)}%`);let $={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[r]||"Home Thermal View",x=`<div class="section section-radial" data-attribute="${h(r)}"${b?` data-outdoor-temp-entity="${h(b)}"`:""}${A?` data-outdoor-humidity-entity="${h(A)}"`:""}>`;x+=`<div class="section-label">${h($)}</div>`,x+='<div class="radial-container">';let E=`r${Math.random().toString(36).slice(2,9)}`,N=`radial-glow-${E}`,L=I=>`heat-shimmer-${E}-${I}`;if(x+=`<svg viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" role="img" aria-label="${h($)}" style="display:block;margin:0 auto">`,x+="<defs>",x+=`<filter id="${N}"><feGaussianBlur stdDeviation="${wt(a,280).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`,!s)for(let I=0;I<v.length;I++){let z=v[I],P=ce(z.power,a);if(P<=0)continue;let O=45/Math.max(y,10),H=(.02*O).toFixed(4),W=(.04*O).toFixed(4);x+=`<filter id="${L(I)}" x="-5%" y="-5%" width="110%" height="110%">`,x+=`<feTurbulence type="turbulence" baseFrequency="${H} ${W}" numOctaves="2" result="turb">`,x+=`<animate attributeName="baseFrequency" values="${H} ${W};${(parseFloat(H)*1.5).toFixed(4)} ${W};${H} ${W}" dur="4s" repeatCount="indefinite"/>`,x+="</feTurbulence>",x+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${P.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,x+="</filter>"}x+="</defs>";for(let I=0;I<v.length;I++){let z=v[I],P=I*(y+p)-90,O=P+y,H=z.power>0||z.hvacAction==="heating"||z.hvacAction==="cooling",W=H?" arc-active":"",Y=[h(z.name)];l&&Y.push(z.temp!==null?`${j(z.temp)}${z.unit}`:"--"),c&&z.humidity!==null&&Y.push(`${Math.round(z.humidity)}%`),Y.push(H?`${z.hvacAction==="cooling"?"Cooling":"Heating"} ${z.power}%`:"Idle");let K=Y.join(", ");x+=`<g class="arc-group${W}" data-idx="${I}">`;let nt=c&&r==="both"?f+Fe+Mn+4:f+4,B=f-28-4,U=Ee(d,u,nt,B,P-p/2,O+p/2);if(x+=`<path d="${U}" fill="transparent" class="arc-hit"/>`,l){let R=z.temp!==null?G(z.temp):"var(--disabled-color, #9E9E9E)",q=8+z.power/100*20,V=f-q,X=Ee(d,u,f,V,P,O);if(x+=`<path d="${X}" fill="${k(R)}" class="arc-path"`,ce(z.power,a)>0&&!s?x+=` filter="url(#${L(I)})"`:H&&(x+=` filter="url(#${N})"`),x+=`><title>${K}</title>`,H&&!s){let Et=z.power>0?(4.5-z.power/100*3).toFixed(1):"5.0";x+=`<animate attributeName="opacity" values="1;0.82;1" dur="${Et}s" repeatCount="indefinite"/>`}x+="</path>"}if(c&&z.humidity!==null){let R=Ft(z.humidity),q,V;if(r==="both")q=f+Fe+Mn,V=f+Fe;else{let ht=8+z.power/100*20;q=f,V=f-ht}let X=Ee(d,u,q,V,P,O);x+=`<path d="${X}" fill="${k(R)}" class="arc-path" opacity="0.8">`,x+=`<title>${K}</title>`,x+="</path>"}x+="</g>"}x+="</svg>";let Z=Math.round((f-28)*2);x+=`<div class="center-info" id="radial-center" style="width:${Z}px;height:${Z}px">`,x+='<div class="center-sheen" id="radial-sheen"></div>',x+=`<div class="center-value">${F}</div>`,x+='<div class="center-label">Outdoor</div>',x+=`<div class="center-sub">${C}</div>`,x+="</div>",x+="</div>",x+='<div class="zone-detail" id="radial-detail"></div>',x+='<div class="radial-legend">';for(let I=0;I<v.length;I++){let z=v[I],P=r==="humidity"?z.humidity!==null?Ft(z.humidity):"var(--disabled-color, #9E9E9E)":z.temp!==null?G(z.temp):"var(--disabled-color, #9E9E9E)",O="";l&&(O+=z.temp!==null?`${j(z.temp)}${z.unit}`:"--"),l&&c&&(O+=" \xB7 "),c&&(O+=z.humidity!==null?`${Math.round(z.humidity)}%`:"--"),x+=`<div class="legend-item" data-idx="${I}">`,x+=`<span class="legend-dot" style="background:${k(P)}"></span>`,x+=`${h(z.name)} <span class="legend-temp">${h(O)}</span>`,x+="</div>"}return x+="</div>",x+="</div>",x}var Mo=5,zn={green:"var(--label-badge-green, #4CAF50)",amber:"var(--label-badge-yellow, #FF9800)",red:"var(--label-badge-red, #F44336)"},zo={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function Lo(e){if(e.length===0)return{label:"All Good",color:"green",detail:"All zones off"};let t=e.filter(s=>s.currentTemp!==null&&s.currentTemp!==void 0&&s.targetTemp!==null&&s.targetTemp!==void 0&&Math.abs(s.currentTemp-s.targetTemp)<=1).length,i=e.length,n=t/i,o=i-t;return n>=.8?{label:"All Good",color:"green",detail:`${t} of ${i} zones at target`}:n>=.4?{label:"Warming Up",color:"amber",detail:`${o} zone${o!==1?"s":""} still catching up`}:{label:"Cold Start",color:"red",detail:`${o} of ${i} zones below target`}}function No(e){let t=[],i=[],n=[];for(let o of e)o.isUnavailable?n.push(o):o.hvacAction==="off"||!o.targetTemp?i.push(o):t.push(o);return t.sort((o,s)=>{let a=o.currentTemp!==null&&o.currentTemp!==void 0&&o.targetTemp!==null?Math.abs(o.currentTemp-o.targetTemp):0;return(s.currentTemp!==null&&s.currentTemp!==void 0&&s.targetTemp!==null?Math.abs(s.currentTemp-s.targetTemp):0)-a}),i.sort((o,s)=>o.name.localeCompare(s.name)),n.sort((o,s)=>o.name.localeCompare(s.name)),[...t,...i,...n]}function Ho(e){if(e.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let t=e.filter(r=>r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null&&r.targetTemp!==void 0&&Math.abs(r.currentTemp-r.targetTemp)<=1).length,i=e.length,n=(e.reduce((r,l)=>r+(l.currentTemp??0),0)/i).toFixed(1),o=(e.reduce((r,l)=>r+(l.targetTemp??0),0)/i).toFixed(1),s=Math.round(e.reduce((r,l)=>r+l.heatingPower,0)/i),a=e[0].unit||"\xB0C";return{onTarget:`${t}/${i}`,avgActual:`${n}${a}`,avgTarget:`${o}${a}`,avgPower:`${s}%`}}function Ro(e){let t=h(e.entityId),i=h(e.name),n=h(e.unit||"\xB0C"),o=!e.isUnavailable&&e.hvacAction!=="off"&&e.targetTemp,s,a;if(e.isUnavailable)s='<span class="home-status-actual off">--</span><span class="home-status-arrow">\u2192</span><span class="home-status-target">Unavailable</span>',a='<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div></div><span class="home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">--</span></div>';else if(!o)s=`<span class="home-status-actual off">${e.currentTemp!==null&&e.currentTemp!==void 0?`${h(e.currentTemp)}${n}`:"--"}</span><span class="home-status-arrow"></span><span class="home-status-target">Off</span>`,a='<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div></div><span class="home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">Off</span></div>';else if(s=`<span class="home-status-actual">${e.currentTemp!==null&&e.currentTemp!==void 0?`${h(e.currentTemp)}${n}`:"--"}</span><span class="home-status-arrow">\u2192</span><span class="home-status-target">${h(e.targetTemp)}${n}</span>`,e.currentTemp!==null&&e.currentTemp!==void 0){let l=e.currentTemp-e.targetTemp,c=Math.abs(l),d=Math.min(c/Mo,1)*50,u=l<0?`${k(50-d)}%`:"50%",f=`${k(d)}%`,p=c<1?"green":c<=2.5?"amber":"red",m=zn[p],y=`${l>=0?"+":"\u2212"}${h(c.toFixed(1))}\xB0`;a=`<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div><div class="home-status-bar-fill" style="left:${u};width:${f};background:${k(m)}"></div></div><span class="home-status-delta-text" style="color:${k(m)}">${y}</span></div>`}else a='<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div></div><span class="home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">--</span></div>';return`<div class="home-status-row" role="button" tabindex="0" data-entity="${t}"><span class="home-status-zone-name">${i}</span><div class="home-status-temps">${s}</div>`+a+"</div>"}function Me(e,t,i){if(!e||e.length===0)return"";let n=e.map(u=>{let f=u.entity,p=D(f),m=i?.zoneEntities?.[p]||{};return J(f,m,t,u,{})}),o=n.filter(u=>!u.isUnavailable&&u.hvacAction!=="off"&&u.targetTemp),s=Lo(o),a=zn[s.color],r=zo[s.color],l=No(n),c=Ho(o),d='<div class="section section-home-status">';d+='<div class="section-label">Home Status</div>',d+='<div class="home-status-hero">',d+=`<ha-icon class="home-status-icon" icon="${h(r)}" style="color:${k(a)}"></ha-icon>`,d+=`<div class="home-status-label" style="color:${k(a)}">${h(s.label)}</div>`,d+=`<div class="home-status-detail">${h(s.detail)}</div>`,d+="</div>",d+='<div class="home-status-zones">';for(let u of l)d+=Ro(u);return d+="</div>",d+='<div class="home-status-summary">',d+=`<div class="stat"><div class="stat-value">${h(c.onTarget)}</div><div class="stat-label">On Target</div></div>`,d+=`<div class="stat"><div class="stat-value">${h(c.avgActual)}</div><div class="stat-label">Avg Actual</div></div>`,d+=`<div class="stat"><div class="stat-value">${h(c.avgTarget)}</div><div class="stat-label">Avg Target</div></div>`,d+=`<div class="stat"><div class="stat-value">${h(c.avgPower)}</div><div class="stat-label">Avg Power</div></div>`,d+="</div>",d+="</div>",d}var ze={comfort:"comfort_level"};function Do(e,t,i,n){if(!(e in ze))return!0;let o=ze[e];if(!t||t.length===0)return!1;for(let s of t){let a=D(s.entity),l=(i?.zoneEntities?.[a]||{})[o];if(l&&n[l]&&n[l].state!=="unavailable")return!0}return!1}function Ln(e,t,i,n){let o=ze[e];if(!o)return null;let a=(i?.zoneEntities?.[t]||{})[o];if(!a)return null;let r=n[a];if(!r||r.state==="unavailable"||r.state==="unknown")return null;if(e==="comfort"){let c=r.attributes||{},d=parseFloat(c.temperature),u=parseFloat(c.comfort_target);if(!Number.isFinite(d)||!Number.isFinite(u))return null;let f=Math.abs(d-u);return Math.max(0,Math.min(100,Math.round(100-f*10)))}let l=parseFloat(r.state);return Number.isFinite(l)?l:null}function Nn(e,t,i){let n=["power","temp","humidity"];return Do("comfort",e,t,i)&&n.push("comfort"),n}var Hn="var(--info-color, #5AC8FA)";function Po(e){return e<=40?"var(--label-badge-green, #4CAF50)":e<=70?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function qo(e){return e>=80?"var(--label-badge-green, #4CAF50)":e>=50?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}var Rn={power:{label:"Power",unit:"%",max:100,colorFn:Po},temp:{label:"Temp",unit:null,max:null,colorFn:()=>Hn},humidity:{label:"Humidity",unit:"%",max:100,colorFn:()=>Hn},comfort:{label:"Comfort",unit:"",max:100,colorFn:qo}};function Oo(e,t,i,n,o){if(t.isUnavailable)return null;switch(e){case"power":return t.heatingPower;case"temp":return t.currentTemp;case"humidity":return t.humidity;case"comfort":return Ln("comfort",i,n,o);default:return null}}function Vo(e,t){let i=e.filter(l=>l!=null);if(i.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let n=(i.reduce((l,c)=>l+c,0)/i.length).toFixed(1),o=Math.max(...i),s=Math.min(...i),a=(o-s).toFixed(1),r=t||"";return{avg:`${n}${r}`,high:`${Number.isInteger(o)?o:o.toFixed(1)}${r}`,low:`${Number.isInteger(s)?s:s.toFixed(1)}${r}`,spread:`${a}${r}`}}function Xt(e,t,i,n="power"){if(!e||e.length===0)return"";let o=Nn(e,i,t),s=o.includes(n)?n:"power",a=Rn[s];if(!a)return"";let r=[];for(let m of e){let g=m.entity,y=D(g),v=i?.zoneEntities?.[y]||{},b=J(g,v,t,m,{}),_=Oo(s,b,y,i,t);r.push({entityId:g,name:b.name,value:_,unit:b.unit||"\xB0C"})}r.sort((m,g)=>m.value===null&&g.value===null?0:m.value===null?1:g.value===null?-1:g.value-m.value);let l=r.map(m=>m.value).filter(m=>m!==null),c=a.max;c===null&&(c=l.length>0?Math.max(...l,30):30);let d=a.unit!==null?a.unit:r[0]?.unit||"\xB0C",u=`<div class="section section-zone-ranking" data-metric="${h(s)}">`;u+='<div class="ranking-header">',u+='<div class="section-label">Zone Ranking</div>',u+='<div class="ranking-tabs">';for(let m of o){let g=Rn[m];if(!g)continue;u+=`<div class="ranking-tab${m===s?" active":""}" data-metric="${h(m)}">${h(g.label)}</div>`}u+="</div></div>",u+='<div class="ranking-list">';for(let m=0;m<r.length;m++){let g=r[m],y=m+1,v=y===1&&g.value!==null?" top":"",b=g.value!==null&&c>0?Math.round(g.value/c*100):0,_=g.value!==null?a.colorFn(g.value):"",w=g.value!==null?`${b}%`:"0%",S;g.value===null?S="--":s==="temp"?S=`${g.value}${g.unit}`:S=`${g.value}${d}`,u+=`<div class="rank-row" role="button" tabindex="0" data-entity="${h(g.entityId)}">`,u+=`<div class="rank-num${v}">${y}</div>`,u+=`<div class="rank-name">${h(g.name)}</div>`,u+=`<div class="rank-bar-track"><div class="rank-bar-fill" style="width:${k(w)};background:${k(_)}"></div></div>`,u+=`<div class="rank-value">${h(S)}</div>`,u+="</div>"}u+="</div>";let f=r.map(m=>m.value),p=Vo(f,d);return u+='<div class="ranking-summary">',u+=`<div class="stat"><div class="stat-value">${h(p.avg)}</div><div class="stat-label">Average</div></div>`,u+=`<div class="stat"><div class="stat-value">${h(p.high)}</div><div class="stat-label">Highest</div></div>`,u+=`<div class="stat"><div class="stat-value">${h(p.low)}</div><div class="stat-label">Lowest</div></div>`,u+=`<div class="stat"><div class="stat-value">${h(p.spread)}</div><div class="stat-label">Spread</div></div>`,u+="</div>",u+="</div>",u}var Dn=!1,Bo=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),Pn=Bo?(()=>{let e=new CSSStyleSheet;return e.replaceSync(ae),e})():null,Uo=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut"]),Wo={zones:".section-zones",api:".section-api",graph:".section-graph",bridge:".section-bridge",thermal_strip:".section-thermal-strip",comfort_strip:".section-comfort-strip",homekit:".section-homekit",weather:".section-weather",radial:".section-radial",donut:".section-donut",environment:".section-environment",thermal:".section-thermal",schedule:".section-schedule",energy_flow:".section-energy-flow",home_status:".section-home-status",zone_ranking:".section-zone-ranking"},Le=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_sparklinePathCache=new Map;_radialAnimState={shimmer:!1,sheen:!1};_historyGen=0;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=vn()}setConfig(t){this._stopRadialAnimations(),this._historyGen++,this._config=dn(t),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(t){if(this._hass=t,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let i=Date.now();if(i-this._lastUpdateTime<200)return;this._lastUpdateTime=i;let n=this._hass.states;(this._config._zones||[]).some(s=>n[s.entity]!==this._prevStates[s.entity])&&this._updateZones(),this._updateSections(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;this._historyGen++;let i=(this._config._zones||[]).map(n=>D(n.entity));if(this._discovery=fn(this._hass.states,i,this._hass.entities),!Dn&&this._discovery.isTadoCE){Dn=!0;let n=Object.entries(this._discovery.hubEntities).map(([o,s])=>`${o}=${s}`);console.info("Pulse Climate: hub discovery \u2014 found:",n.join(", ")),this._discovery.missingHubKeys.length>0&&console.warn("Pulse Climate: hub discovery \u2014 missing:",this._discovery.missingHubKeys.join(", "))}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let t=this._historyCache?.data;if(t)for(let[i,n]of Object.entries(t)){if(!n||n.length<2)continue;let o=lt(n,340,36,48);o&&this._sparklinePathCache.set(i,o)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let t=this._discovery,i=t.hubEntities,n=this._config._zones||[];this._rerenderTargets=[{selector:".section-zones",watchIds:[i.home_state].filter(Boolean),render:()=>{let o=this._config,s=this._hass?.states||{};return he(n,o,s,t,this._historyCache)}},{selector:".section-api",watchIds:[i.api_usage,i.api_limit,i.api_status,i.next_sync,i.token_status].filter(Boolean),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="api")||{};return fe(i,o,a,this._historyCache)}},{selector:".section-homekit",watchIds:[i.homekit_connected,i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean),render:()=>{let o=this._hass?.states||{};return ge(i,o,this._historyCache)}},{selector:".section-bridge",watchIds:[i.bridge_connected,i.boiler_flow_temp,i.wc_status,i.wc_target_flow].filter(Boolean),render:()=>{let o=this._hass?.states||{};return me(i,o,this._historyCache)}},{selector:".section-weather",watchIds:[i.outside_temp,i.weather,i.solar_intensity].filter(Boolean),render:()=>{let o=this._hass?.states||{};return ve(i,o,this._historyCache)}},{selector:".section-environment",watchIds:n.flatMap(o=>{let s=D(o.entity),a=t.zoneEntities?.[s]||{};return[a.mold_risk,a.condensation,a.comfort_level,a.surface_temp,a.dew_point].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return be(n,o,t)}},{selector:".section-thermal",watchIds:n.flatMap(o=>{let s=D(o.entity),a=t.zoneEntities?.[s]||{};return[a.heating_rate,a.thermal_inertia,a.preheat_time,a.confidence].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return _e(n,o,t)}},{selector:".section-schedule",watchIds:n.flatMap(o=>{let s=D(o.entity),a=t.zoneEntities?.[s]||{};return[a.next_schedule,a.next_sched_temp,a.schedule_deviation,a.preheat_advisor,a.comfort_target].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return ye(n,o,t)}},{selector:".section-radial",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="radial")||{};return Ie(n,a,o,t,this._historyCache)}},{selector:".section-donut",watchIds:(()=>{let a=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")?.source;return a==="api_breakdown"&&i.api_breakdown?[i.api_breakdown]:a==="homekit_saved"?[i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")||{};return Se(a,i,o)}},{selector:".section-graph",watchIds:[],render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="graph")||{};return $e(a,n,this._historyCache,o,t)}},{selector:".section-home-status",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{};return Me(n,o,t)}},{selector:".section-zone-ranking",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},a=this._shadow.querySelector(".section-zone-ranking")?.getAttribute("data-metric")||"power";return Xt(n,o,t,a)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,i=this._hass.states,n=this._discovery,o=t._zones||[],s=t.layout==="compact",a=t.entity_row===!0,r="";Pn?this._shadow.adoptedStyleSheets=[Pn]:r+=`<style>${ae}</style>`,a||(r+=`<ha-card${s?' class="compact"':""}>`),t.title&&(r+=`<div class="pulse-title">${h(t.title)}</div>`);let l=t.sections||[{type:"zones"}];for(let c of l)r+=this._renderSection(c,o,i,n);a||(r+="</ha-card>"),this._shadow.innerHTML=r,this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._elements.apiSection=this._shadow.querySelector(".section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let t=this._shadow.querySelectorAll(".zone-row"),i=this._config._zones||[];for(let n=0;n<t.length&&n<i.length;n++){let o=t[n],s=i[n],a=s.entity,r=o.__pulseCleanup;typeof r=="function"&&r();let l=new AbortController,{signal:c}=l,d=0,u=null,f=null,p=!1;o.__pulseCleanup=()=>{l.abort(),u&&clearTimeout(u),f&&clearTimeout(f),delete o.__pulseCleanup},o.addEventListener("keydown",g=>{let y=g;(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),this._fireAction(a,s,"tap_action"))},{signal:c}),o.addEventListener("click",g=>{if(g.preventDefault(),p){p=!1;return}d++,d===1?u=setTimeout(()=>{d=0,this._fireAction(a,s,"tap_action")},250):d===2&&(u&&clearTimeout(u),d=0,this._fireAction(a,s,"double_tap_action"))},{signal:c}),o.addEventListener("pointerdown",()=>{p=!1,f=setTimeout(()=>{p=!0,this._fireAction(a,s,"hold_action")},500)},{signal:c});let m=()=>{f&&clearTimeout(f)};o.addEventListener("pointerup",m,{signal:c}),o.addEventListener("pointercancel",m,{signal:c}),o.addEventListener("contextmenu",g=>g.preventDefault(),{signal:c}),it(o)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs()}_bindChipActions(){if(!this._config||!this._hass)return;this._chipAbort&&this._chipAbort.abort(),this._chipAbort=new AbortController;let{signal:t}=this._chipAbort,i=this._config._zones||[],n=this._shadow.querySelectorAll(".zone-row");for(let o=0;o<n.length&&o<i.length;o++){let s=i[o],a=s.entity,r=n[o].querySelectorAll(".chip");for(let l of r){let c=l,d=c.dataset.chipType||"",u=c.dataset.entity||a,f=s.chip_actions,p=this._config.chip_actions,m=f?.[d]||p?.[d]||{},g=m.tap_action||{action:"more-info",entity:u},y=m.hold_action||{action:"none"};c.style.cursor="pointer",it(c),c.addEventListener("click",b=>{b.stopPropagation(),this._hass&&yt(this,this._hass,g,u,st)},{signal:t});let v=null;c.addEventListener("pointerdown",b=>{b.stopPropagation(),v=setTimeout(()=>{!this._hass||y.action==="none"||yt(this,this._hass,y,u,st)},500)},{signal:t}),c.addEventListener("pointerup",b=>{b.stopPropagation(),v&&clearTimeout(v)},{signal:t}),c.addEventListener("pointercancel",()=>{v&&clearTimeout(v)},{signal:t}),c.addEventListener("contextmenu",b=>b.preventDefault(),{signal:t})}}}_bindSectionChipActions(){this._sectionChipAbort&&this._sectionChipAbort.abort(),this._sectionChipAbort=new AbortController;let{signal:t}=this._sectionChipAbort,i=this._shadow.querySelectorAll(".section [data-entity]");for(let n of i){let o=n;o.closest(".zone-row")&&o.classList.contains("chip")||o.classList.contains("zone-row")||(o.style.cursor="pointer",it(o),o.addEventListener("click",s=>{s.stopPropagation();let a=o.dataset.entity;a&&Rt(this,"hass-more-info",{entityId:a})},{signal:t}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let t=this._shadow.querySelector(".chip-next-sync");if(!t)return;let i=Number(t.getAttribute("data-target"));if(!i||!isFinite(i))return;let n=()=>{let o=i-Date.now();if(o<=0){t.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let s=Math.floor(o/6e4),a=Math.floor(o%6e4/1e3);t.textContent=s>0?`Next: ${s}m ${a}s`:`Next: ${a}s`};n(),this._countdownTimer=setInterval(n,1e3)}_bindRadialInteractions(){this._radialAbort&&this._radialAbort.abort(),this._radialAbort=new AbortController;let{signal:t}=this._radialAbort,i=this._shadow.querySelectorAll(".arc-group"),n=this._shadow.querySelectorAll(".radial-legend .legend-item"),o=this._shadow.querySelector("#radial-center"),s=this._shadow.querySelector("#radial-detail"),a=this._shadow.querySelector(".section-radial svg");if(i.length===0||!o)return;let l=(a&&Number(a.getAttribute("width"))||280)/2,c=this._config?._zones||[],d=null,u=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-temp-entity"),f=this._shadow.querySelector(".section-radial")?.getAttribute("data-attribute")||"temperature",p=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-humidity-entity"),m=()=>{let v=this._hass?.states||{},b=this._discovery,_=u||b?.hubEntities?.outside_temp,w="--",S="";if(f!=="humidity"&&_&&v[_]){let A=v[_];A.state!=="unavailable"&&A.state!=="unknown"&&(w=`${A.attributes?.temperature!==void 0?A.attributes.temperature:A.state}${A.attributes?.unit_of_measurement||"\xB0C"}`)}if(p&&v[p]){let A=v[p];if(A.state!=="unavailable"&&A.state!=="unknown"){let T=A.attributes?.humidity!==void 0?A.attributes.humidity:A.state;f==="humidity"?w=`${T}%`:S=`${T}%`}}return{center:w,centerSub:S}},g=v=>{let b=this._hass?.states||{},_=this._discovery;if(d===v){y();return}d=v;let w=c[v];if(!w)return;let S=w.entity,A=D(S),T=_?.zoneEntities?.[A]||{},C=Ct(S,b,w),{name:F,temp:M,target:$,humidity:x}=C,E=C.hvacAction,N=0;if(T.heating_power){let H=b[T.heating_power];H&&H.state!=="unavailable"&&(N=parseFloat(H.state)||0)}else b[S]?.attributes?.heating_power!==void 0&&(N=parseFloat(b[S].attributes.heating_power)||0);let Z=N>0||E==="heating"||E==="cooling"?`${E==="cooling"?"Cooling":"Heating"} ${Math.round(N)}%`:"Idle",I=o.querySelector(".center-value"),z=o.querySelector(".center-label"),P=o.querySelector(".center-sub");I&&(I.textContent=M!==void 0?`${j(M)}${C.unit}`:"--"),z&&(z.textContent=F);let O=x!==void 0?` \xB7 ${x}%`:"";P&&(P.textContent=`${Z}${O}`),i.forEach((H,W)=>{H.classList.toggle("dimmed",W!==v),H.classList.toggle("selected",W===v),W===v?H.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):H.removeAttribute("transform")}),n.forEach((H,W)=>{H.classList.toggle("selected",W===v)}),s&&(s.innerHTML=`<div class="detail-stats">
          <div class="stat"><div class="stat-value">${$!==void 0?h($)+h(C.unit):"--"}</div><div class="stat-label">Target</div></div>
          <div class="stat"><div class="stat-value">${x!==void 0?h(x)+"%":"--"}</div><div class="stat-label">Humidity</div></div>
          <div class="stat"><div class="stat-value">${h(E)}</div><div class="stat-label">Action</div></div>
        </div>`,s.classList.add("active"))},y=()=>{d=null;let{center:v,centerSub:b}=m(),_=o.querySelector(".center-value"),w=o.querySelector(".center-label"),S=o.querySelector(".center-sub");_&&(_.textContent=v),w&&(w.textContent="Outdoor"),S&&(S.textContent=b),i.forEach(A=>{A.classList.remove("dimmed","selected"),A.removeAttribute("transform")}),n.forEach(A=>{A.classList.remove("selected")}),s&&(s.classList.remove("active"),s.innerHTML="")};if(i.forEach((v,b)=>{v.addEventListener("click",()=>g(b),{signal:t})}),n.forEach((v,b)=>{it(v),v.addEventListener("click",()=>g(b),{signal:t})}),this._stopRadialAnimations(),i.length>1&&!ot()){this._radialAnimState.shimmer=!0;let v=0,b=1,_=()=>{if(!this._radialAnimState.shimmer)return;if(d!==null){setTimeout(_,500);return}let w=i[v];if(!w){setTimeout(_,300);return}if(w.style.filter="brightness(1.8)",w.style.transition="filter 0.3s ease-in",setTimeout(()=>{w.style.filter="",w.style.transition="filter 0.5s ease-out"},250),v+=b,v>=i.length||v<0){v=b>0?0:i.length-1;let S=1e3+Math.random()*2e3;Math.random()<.4&&(b*=-1),setTimeout(_,S)}else{let S=80+Math.random()*170;setTimeout(_,S)}};setTimeout(_,1500)}if(!ot()){let v=this._shadow.querySelector("#radial-sheen");if(v){let _=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(_?(.299*Number(_[1])+.587*Number(_[2])+.114*Number(_[3]))/255>=.5:!1)?v.classList.add("light-theme"):v.classList.remove("light-theme"),this._radialAnimState.sheen=!0;let S=()=>{if(!this._radialAnimState.sheen)return;let A=Math.random()>.5,T=A?"-100% 50%":"200% 50%",C=A?"200% 50%":"-100% 50%",F=1.2+Math.random()*1.5;v.style.transition="none",v.style.backgroundPosition=T,v.offsetWidth,v.style.transition=`background-position ${F}s ease-in-out`,v.style.backgroundPosition=C,setTimeout(()=>{let M=4e3+Math.random()*6e3;setTimeout(S,M)},F*1e3)};setTimeout(S,2e3+Math.random()*3e3)}}}_stopRadialAnimations(){this._radialAnimState.shimmer=!1,this._radialAnimState.sheen=!1}_bindTimelineInteractions(){this._timelineAbort&&this._timelineAbort.abort(),this._timelineAbort=new AbortController;let{signal:t}=this._timelineAbort,i=this._shadow.querySelectorAll(".section-thermal-strip .timeline-row"),n=this._shadow.querySelector(".section-thermal-strip");if(i.length===0||!n)return;let o=this._config?._zones||[],s=n.querySelector(".section-subtitle"),a="Tap a zone for details",r=this._hass?.states?.[o[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C",l=null,c=null,d=b=>{c=null;let _=b.querySelector(".comparison-path");_&&_.remove();let w=b.querySelector(".comparison-legend");w&&w.remove()};i.forEach((b,_)=>{it(b),b.addEventListener("click",()=>{let w=this._hass?.states||{},S=this._discovery,A=this._historyCache;if(n.querySelectorAll(".strip-drag-highlight").forEach(R=>{R.style.display="none"}),l!==null&&l!==_){let R=n.querySelector(".zone-detail"),q=R?.querySelector(".detail-sparkline svg");if(R&&q){if(c===_){d(R);return}d(R),c=_;let V=o[_];if(!V)return;let X=V.entity,ht=D(X),Et=S?.zoneEntities?.[ht]||{},Ne=V.temperature_entity||Et.temperature||X,He=A?.data?.[Ne]||[];if(He.length>=2){let De=this._sparklinePathCache.get(Ne)||lt(He,340,36,48);if(De){let ft=document.createElementNS("http://www.w3.org/2000/svg","path");ft.setAttribute("d",De.linePath),ft.setAttribute("fill","none"),ft.setAttribute("stroke","var(--info-color, #4FC3F7)"),ft.setAttribute("stroke-width","1.5"),ft.setAttribute("opacity","0.5"),ft.classList.add("comparison-path"),q.appendChild(ft)}}let Re=o[l],qn=Ct(Re?.entity||"",w,Re).name,On=Ct(X,w,V).name,It=document.createElement("div");It.className="comparison-legend",It.style.cssText="display:flex;gap:12px;font-size:10px;margin-top:4px;color:var(--secondary-text-color,#8e8e93)",It.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;margin-right:4px"></span>${h(qn)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--info-color, #4FC3F7);margin-right:4px"></span>${h(On)}</span>`,R.appendChild(It);return}}if(l===_){l=null,c=null,i.forEach(q=>q.classList.remove("selected"));let R=n.querySelector(".zone-detail");R&&R.classList.remove("active"),s&&(s.textContent=a);return}l=_,i.forEach((R,q)=>R.classList.toggle("selected",q===_));let T=o[_];if(!T)return;let C=T.entity,F=w[C]?.attributes||{},M=Ct(C,w,T),{name:$,temp:x,target:E,humidity:N,hvacAction:L}=M;s&&(s.textContent=$);let Z=D(C),I=S?.zoneEntities?.[Z]||{},z=T.temperature_entity||I.temperature||C,P=A?.data?.[z]||[],O="";if(P.length>=2){let R=P[P.length-1],q=P[P.length-2],V=R.v-q.v,X=(R.t-q.t)/36e5;if(X>0&&isFinite(V)&&isFinite(X)){let ht=V/X;O=`${ht>=0?"+":""}${ht.toFixed(1)}${M.unit}/hr`}}let H=0;if(I.heating_power){let R=w[I.heating_power];R&&R.state!=="unavailable"&&(H=parseFloat(R.state)||0)}else F.heating_power!==void 0&&(H=parseFloat(F.heating_power)||0);let Y=H>0||L==="heating"||L==="cooling"?`${L==="cooling"?"Cooling":"Heating"} ${Math.round(H)}%`:"Idle",K="";if(P.length>=2){let R=1/0,q=-1/0;for(let V of P)isFinite(V.v)&&(V.v<R&&(R=V.v),V.v>q&&(q=V.v));isFinite(R)&&isFinite(q)&&(K=`${R.toFixed(1)}${M.unit} \u2013 ${q.toFixed(1)}${M.unit} today`)}let nt="";if(P.length>=2){let R=L==="heating"?"var(--label-badge-yellow, #FF9800)":x!==void 0&&isFinite(Number(x))?G(Number(x)):"var(--primary-text-color)",q=k(R),V=this._sparklinePathCache.get(z)||lt(P,340,36,48);if(V){let X=`tl-detail-grad-${_}`;nt=`<div class="detail-sparkline sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${h(X)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${q}" stop-opacity="0.3"/><stop offset="100%" stop-color="${q}" stop-opacity="0"/></linearGradient></defs><path d="${V.areaPath}" fill="url(#${h(X)})" /><path d="${V.linePath}" fill="none" stroke="${q}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let B=n.querySelector(".zone-detail");B||(B=document.createElement("div"),B.className="zone-detail",n.insertBefore(B,n.querySelector(".timeline-row"))),B.innerHTML=`<div class="detail-header"><span class="detail-name">${h($)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${x!==void 0?h(x)+h(M.unit):"--"}</div><div class="stat-label">Current</div>${O?`<div class="stat-sub">${h(O)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${E!==void 0?h(E)+h(M.unit):"--"}</div><div class="stat-label">Target</div>${Y?`<div class="stat-sub">${h(Y)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${N!==void 0?h(N)+"%":"--"}</div><div class="stat-label">Humidity</div>${K?`<div class="stat-sub">${h(K)}</div>`:""}</div>
          </div>${nt}`,B.classList.add("active");let U=B.querySelector(".detail-close");U&&U.addEventListener("click",R=>{R.stopPropagation(),l=null,c=null,i.forEach(q=>q.classList.remove("selected")),B.classList.remove("active"),s&&(s.textContent=a)},{signal:t})},{signal:t})});let u=ke(),f=n.querySelector(".strip-rows");f&&(f.style.position="relative",f.appendChild(u.element)),n.querySelectorAll(".strip-container").forEach(b=>{let _=b.getAttribute("data-slots"),w=null;try{_&&(w=JSON.parse(_))}catch{}b.addEventListener("pointermove",S=>{if(S.pointerType==="touch"||!w)return;let A=b.getBoundingClientRect(),T=ut(S.clientX,A,w.length),C=w[T];if(C){let F=C.v!==null?`${C.l}: ${C.v}${r}`:`${C.l}: --`;u.show(A,S.clientX-A.left,F)}},{signal:t}),b.addEventListener("pointerleave",()=>u.hide(),{signal:t}),b.addEventListener("pointerdown",S=>{if(S.pointerType!=="touch"||!w)return;let A=b.getBoundingClientRect(),T=ut(S.clientX,A,w.length),C=w[T];if(C){let F=C.v!==null?`${C.l}: ${C.v}${r}`:`${C.l}: --`;u.show(A,S.clientX-A.left,F),setTimeout(()=>u.hide(),2e3)}},{signal:t})}),n.querySelectorAll(".cells").forEach(b=>{b.addEventListener("pointermove",_=>{if(_.pointerType==="touch")return;let w=_.target?.closest?.(".cell");if(!w){u.hide();return}let S=w.getAttribute("data-hour")||"",A=w.getAttribute("data-score"),T=A?`${S}: ${A}${r}`:`${S}: --`,C=b.getBoundingClientRect();u.show(C,_.clientX-C.left,T)},{signal:t}),b.addEventListener("pointerleave",()=>u.hide(),{signal:t}),b.addEventListener("pointerdown",_=>{if(_.pointerType!=="touch")return;let w=_.target?.closest?.(".cell");if(!w)return;let S=w.getAttribute("data-hour")||"",A=w.getAttribute("data-score"),T=A?`${S}: ${A}${r}`:`${S}: --`,C=b.getBoundingClientRect();u.show(C,_.clientX-C.left,T),setTimeout(()=>u.hide(),2e3)},{signal:t})});let g=f?.querySelector(".strip-crosshair"),y=f?.querySelector(".strip-container")||f?.querySelector(".cells");if(f&&g&&y){let b=y.getBoundingClientRect().left-f.getBoundingClientRect().left;Ae(f,g,y,b)}n.querySelectorAll(".strip-container, .cells").forEach(b=>{let _=b.getAttribute("data-slots"),w=null;try{_&&(w=JSON.parse(_))}catch{}Ce(b,w,u,r)})}_bindHeatmapInteractions(){this._heatmapAbort&&this._heatmapAbort.abort(),this._heatmapAbort=new AbortController;let{signal:t}=this._heatmapAbort,i=this._shadow.querySelectorAll(".section-comfort-strip .heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(i.length===0||!n)return;let o=null;i.forEach((p,m)=>{it(p),p.addEventListener("click",()=>{let g=this._shadow.querySelector(".section-comfort-strip");if(g&&g.querySelectorAll(".strip-drag-highlight").forEach($=>{$.style.display="none"}),o===m){o=null,i.forEach($=>$.classList.remove("selected")),n.classList.remove("active");return}o=m,i.forEach(($,x)=>$.classList.toggle("selected",x===m));let y=p.querySelectorAll(".cell"),v=[],b=[];if(y.length>0)y.forEach($=>{let x=$.getAttribute("data-score");x&&(v.push(Number(x)),b.push($.getAttribute("data-hour")||"--"))});else{let x=p.querySelector(".strip-container")?.getAttribute("data-slots");if(x)try{let E=JSON.parse(x);for(let N of E)N.v!==null&&N.v!==void 0&&(v.push(N.v),b.push(N.l||"--"))}catch{}}if(v.length===0)return;let _=Math.round(v.reduce(($,x)=>$+x,0)/v.length),w=0,S=0;for(let $=1;$<v.length;$++)v[$]>v[w]&&(w=$),v[$]<v[S]&&(S=$);let A=b[w]||"--",T=b[S]||"--",C=_>=80?"var(--label-badge-green, #34c759)":_>=50?"var(--label-badge-yellow, #ff9f0a)":"var(--label-badge-red, #ff453a)",F=p.querySelector(".zone-label")?.textContent||"";n.innerHTML=`<div class="detail-header"><span class="detail-name">${h(F)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${_}</div><div class="stat-label">Avg Score</div></div>
            <div class="stat"><div class="stat-value">${h(A)}</div><div class="stat-label">Best Hour</div></div>
            <div class="stat"><div class="stat-value">${h(T)}</div><div class="stat-label">Worst Hour</div></div>
          </div>
          <div class="detail-bar"><div class="detail-bar-fill" style="width:${_}%;background:${k(C)}"></div></div>`,n.classList.add("active");let M=n.querySelector(".detail-close");M&&M.addEventListener("click",$=>{$.stopPropagation(),o=null,i.forEach(x=>x.classList.remove("selected")),n.classList.remove("active")},{signal:t})},{signal:t})});let s=this._shadow.querySelector(".section-comfort-strip");if(!s)return;let a=ke(),r=s.querySelector(".heatmap-body");r&&(r.style.position="relative",r.appendChild(a.element));let l=r?.querySelector(".cells")||r?.querySelector(".strip-container");s.querySelectorAll(".cells").forEach(p=>{p.addEventListener("pointermove",m=>{if(m.pointerType==="touch")return;let g=m.target?.closest?.(".cell");if(!g){a.hide();return}let y=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${y}: Score ${v}`:`${y}: --`,_=l?.getBoundingClientRect();_&&a.show(_,m.clientX-_.left,b)},{signal:t}),p.addEventListener("pointerleave",()=>a.hide(),{signal:t}),p.addEventListener("pointerdown",m=>{if(m.pointerType!=="touch")return;let g=m.target?.closest?.(".cell");if(!g)return;let y=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${y}: Score ${v}`:`${y}: --`,_=l?.getBoundingClientRect();_&&(a.show(_,m.clientX-_.left,b),setTimeout(()=>a.hide(),2e3))},{signal:t})}),s.querySelectorAll(".strip-container").forEach(p=>{let m=p.getAttribute("data-slots"),g=null;try{m&&(g=JSON.parse(m))}catch{}p.addEventListener("pointermove",y=>{if(y.pointerType==="touch"||!g)return;let v=p.getBoundingClientRect(),b=ut(y.clientX,v,g.length),_=g[b];if(_){let w=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;a.show(v,y.clientX-v.left,w)}},{signal:t}),p.addEventListener("pointerleave",()=>a.hide(),{signal:t}),p.addEventListener("pointerdown",y=>{if(y.pointerType!=="touch"||!g)return;let v=p.getBoundingClientRect(),b=ut(y.clientX,v,g.length),_=g[b];if(_){let w=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;a.show(v,y.clientX-v.left,w),setTimeout(()=>a.hide(),2e3)}},{signal:t})});let u=r?.querySelector(".strip-crosshair");if(r&&u&&l){let p=l.getBoundingClientRect().left-r.getBoundingClientRect().left;Ae(r,u,l,p)}s.querySelectorAll(".cells, .strip-container").forEach(p=>{let m=p.getAttribute("data-slots"),g=null;try{m&&(g=JSON.parse(m))}catch{}Ce(p,g,a)})}_bindEnergyFlowInteractions(){this._energyFlowAbort&&this._energyFlowAbort.abort(),this._energyFlowAbort=new AbortController;let{signal:t}=this._energyFlowAbort,i=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),n=this._shadow.querySelector(".section-energy-flow");if(i.length===0||!n)return;let o=null;i.forEach(s=>{s.classList.add("ribbon"),s.addEventListener("click",()=>{let a=s.getAttribute("data-zone");if(a){if(o===a){o=null,i.forEach(r=>r.classList.remove("dimmed"));return}o=a,i.forEach(r=>{r.classList.toggle("dimmed",r.getAttribute("data-zone")!==a)})}},{signal:t})})}_bindSparklineCrosshairs(){this._sparklineAbort&&this._sparklineAbort.abort(),this._sparklineAbort=new AbortController;let{signal:t}=this._sparklineAbort;this._shadow.querySelectorAll(".strip-tooltip-fixed").forEach(o=>o.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(o=>o.remove());let i=this._shadow.querySelectorAll(".section-zones .sparkline-filled, .section-zones .zone-row-pulse");if(i.length===0)return;let n=kn();this._shadow.appendChild(n.element),i.forEach(o=>{let s=o;s.style.position="relative";let a=document.createElement("div");a.className="strip-crosshair sparkline-crosshair",a.style.display="none",a.style.top="0",a.style.bottom="0",s.appendChild(a);let r=s.getAttribute("data-sparkline"),l=null;try{r&&(l=JSON.parse(r))}catch{}s.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let u=s.getBoundingClientRect(),f=d.clientX-u.left;if(!(f<0||f>u.width)&&(a.style.left=`${f}px`,a.style.display="",l)){let p=l.d,m=l.u||"",g=Math.min(p.length-1,Math.floor(f/u.width*p.length)),y=p[g];if(y){let v=y.v!==null?`${y.l}: ${y.v}${m}`:`${y.l}: --`;n.show(u,d.clientX,v)}}},{signal:t}),s.addEventListener("pointerleave",()=>{a.style.display="none",n.hide()},{signal:t});let c=null;s.addEventListener("pointerdown",d=>{if(d.pointerType!=="touch")return;let u=s.getBoundingClientRect(),f=d.clientX-u.left;if(!(f<0||f>u.width)){if(a.style.left=`${f}px`,a.style.display="",l){let p=l.d,m=l.u||"",g=Math.min(p.length-1,Math.floor(f/u.width*p.length)),y=p[g];if(y){let v=y.v!==null?`${y.l}: ${y.v}${m}`:`${y.l}: --`;n.show(u,d.clientX,v)}}c&&clearTimeout(c),c=setTimeout(()=>{a.style.display="none",n.hide(),c=null},2e3)}},{signal:t})})}_bindZoneRankingTabs(){let t=this._shadow.querySelector(".section-zone-ranking");if(!t)return;let i=t.querySelectorAll(".ranking-tab");if(i.length===0)return;let n=this._config?._zones||[],o=this._discovery;if(o)for(let s of i)s.addEventListener("click",()=>{let a=s.dataset.metric;if(!a)return;let r=this._hass?.states||{},l=Xt(n,r,o,a);if(!l)return;let c=document.createElement("template");c.innerHTML=l;let d=c.content.firstElementChild;d&&(t.replaceWith(d),this._bindZoneRankingTabs(),this._bindSectionChipActions())})}_renderSection(t,i,n,o){let s=typeof t=="string"?t:t.type,a=this._config,r=o.hubEntities,l=this._historyCache;switch(s){case"zones":return he(i,a,n,o,l);case"api":return fe(r,n,t,l);case"graph":return $e(t,i,l,n,o);case"donut":return Se(t,r,n);case"bridge":return me(r,n,l);case"homekit":return ge(r,n,l);case"weather":return ve(r,n,l);case"environment":return be(i,n,o);case"thermal":return _e(i,n,o);case"schedule":return ye(i,n,o);case"thermal_strip":return An(i,t,n,o,l);case"comfort_strip":return Fn(i,t,n,o,l);case"energy_flow":return Te(i,n,o);case"radial":return Ie(i,t,n,o,l);case"home_status":return Me(i,n,o);case"zone_ranking":return Xt(i,n,o);default:return""}}_fireAction(t,i,n){if(!this._hass)return;let o=i[n]||this._config?.[n]||(n==="tap_action"?{action:"more-info"}:{action:"none"});yt(this,this._hass,o,t,st)}_applyTransitionGlow(t){let i=a=>{a&&(a.classList.add("temp-transitioning"),setTimeout(()=>a.classList.remove("temp-transitioning"),1100))},n=this._shadow.querySelectorAll(".zone-row");n[t]&&i(n[t].querySelector(".power-bar-fill"));let o=this._shadow.querySelectorAll(".zone-row-pulse");i(o[t]||null);let s=this._shadow.querySelectorAll(".arc-group");s[t]&&i(s[t].querySelector(".arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!ot()){let t=this._config._zones||[],i=this._hass.states;for(let n=0;n<t.length;n++){let o=t[n].entity,s=this._prevStates[o],a=i[o];if(!s||!a)continue;let r=s.attributes?.current_temperature,l=a.attributes?.current_temperature;r!==void 0&&l!==void 0&&r!==l&&this._applyTransitionGlow(n)}}xn(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let t=this._hass.states,i=this._discovery,n=this._config._zones||[],o=this._rerenderTargets;if(!o)return;let s=new Set;for(let c of o){let d=this._shadow.querySelector(c.selector);if(!d||c.watchIds.length===0||!c.watchIds.some(g=>{let y=t[g],v=this._prevStates[g];return!v||v.state!==y?.state||v.last_updated!==y?.last_updated}))continue;let f=c.render();if(!f)continue;let p=document.createElement("template");p.innerHTML=f;let m=p.content.firstElementChild;m&&(d.replaceWith(m),s.add(c.selector))}let a=new Set([".section-zones",".section-api",".section-bridge",".section-homekit",".section-weather",".section-environment",".section-thermal",".section-schedule",".section-home-status",".section-zone-ranking"]);[...s].some(c=>a.has(c))&&this._bindSectionChipActions(),s.has(".section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._bindZoneActions(),this._bindChipActions()),s.has(".section-api")&&(this._elements.apiSection=this._shadow.querySelector(".section-api"),this._startCountdownTimer()),s.has(".section-radial")&&this._bindRadialInteractions(),s.has(".section-zone-ranking")&&this._bindZoneRankingTabs();let l=this._shadow.querySelector(".section-energy-flow");if(l&&n.some(d=>{let u=D(d.entity),f=i.zoneEntities?.[u]||{};return[d.entity,f.heating_power,f.ac_power].filter(Boolean).some(m=>{let g=t[m],y=this._prevStates[m];return!y||y.state!==g?.state||y.last_updated!==g?.last_updated})})&&!In(l,n,t,i)){let u=Te(n,t,i);if(u){let f=document.createElement("template");f.innerHTML=u;let p=f.content.firstElementChild;p&&(l.replaceWith(p),s.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,i=this._hass.states,n=this._discovery,o=t._zones||[],s=t.sections||[{type:"zones"}],a=[];for(let l of s){let c=typeof l=="string"?l:l.type;if(!Uo.has(c))continue;let d=Wo[c];if(!d)continue;let u=this._shadow.querySelector(d);if(!u)continue;let f=this._renderSection(l,o,i,n);if(!f)continue;let p=document.createElement("template");p.innerHTML=f;let m=p.content.firstElementChild;m&&(u.replaceWith(m),a.push(c))}if(a.length===0)return;a.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),a.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".section-api"),this._startCountdownTimer()),a.includes("radial")&&this._bindRadialInteractions(),a.includes("thermal_strip")&&this._bindTimelineInteractions(),a.includes("comfort_strip")&&this._bindHeatmapInteractions(),a.includes("energy_flow")&&this._bindEnergyFlowInteractions(),a.some(l=>["zones","api","bridge","homekit","weather"].includes(l))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||de(this._historyCache))return;let t=mn();if(de(t)){this._historyCache=t,this._rebuildSparklinePathCache(),Object.values(t.data).filter(l=>l.length>=2).length>0&&this._updateHistorySections();return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let i=this._historyGen,n=this._config._zones||[],o=[],s=this._hass.states;for(let r of n){let l=D(r.entity),c=this._discovery?.zoneEntities?.[l]||{},d=at(r.entity,s,c,r);o.push(d.entityId);let u=dt(r.entity,s,c,r);u&&o.push(u.entityId)}if(this._discovery?.hubEntities?.call_history&&o.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&o.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&o.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&o.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&o.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&o.push(this._discovery.hubEntities.outside_temp),o.length===0){this._historyFetchInProgress=!1;return}let a=[...new Set(o.filter(r=>r&&typeof r=="string"&&r.includes(".")))];if(a.length===0){this._historyFetchInProgress=!1;return}try{let r=await Nt(this._hass,a,24);if(i!==this._historyGen){st("History fetch result discarded \u2014 config changed during fetch");return}this._historyCache=bn(this._historyCache,r),this._rebuildSparklinePathCache(),gn(r),Object.values(r).filter(c=>c.length>=2).length>0&&this._updateHistorySections()}catch(r){st("History fetch failed, using cached data: %O",r)}finally{this._historyFetchInProgress=!1}}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let t=this._hass.states,i=this._config._zones||[],n=this._discovery.hubEntities,o={};for(let s of i){let a=s.entity;t[a]&&(o[a]=t[a]);let r=D(a),l=this._discovery.zoneEntities?.[r]||{};for(let c of Object.values(l))c&&t[c]&&(o[c]=t[c])}for(let s of Object.values(n))s&&t[s]&&(o[s]=t[s]);this._prevStates=o}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort(),this._stopRadialAnimations();let t=this._shadow?.querySelectorAll(".zone-row")||[];for(let i of t){let n=i.__pulseCleanup;typeof n=="function"&&n()}}connectedCallback(){this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer())}getCardSize(){let t=this._config?._zones?.length||1,i=this._config?.sections?.length||1;return Math.max(1,t+i)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(tn)}static getStubConfig(t){return{entity:Object.keys(t.states).find(n=>n.startsWith("climate."))||"climate.living_room"}}};customElements.get(qt)||customElements.define(qt,Le);window.customCards=window.customCards||[];window.customCards.push({type:qt,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${Qe} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Jt=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=Pe,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let i of t)ie(i),re(i)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(t){this._config=Ze(t),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(t){if(this._hass=t,!this._config)return;let i=!1;for(let n of this._cfg.entities){let o=t.states[n.entity],s=this._prevStates[n.entity];if(!s||s.state!==o?.state||s.last_updated!==o?.last_updated){i=!0;break}let a=n.target??this._cfg.target;if(typeof a=="string"){let r=t.states[a],l=this._prevStates[`__target__${a}`];if(!l||l.state!==r?.state||l.last_updated!==r?.last_updated){i=!0;break}}}i&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let i=t.columns??1,n=i>1?` columns-${i}`:"",o=t.entity_row?" entity-row":"",s=t.layout==="compact"?" compact":"",a=[];i>1&&a.push(`--pulse-columns:${i}`),t.gap!==void 0&&a.push(`--pulse-gap:${k(vt(t.gap))}`),t.font_size!==void 0&&a.push(`--pulse-font-size:${k(vt(t.font_size))}`);let r=a.length>0?` style="${a.join(";")}"`:"",l="";t.title&&(l+=`<div class="pulse-title">${h(t.title)}</div>`),l+=`<div class="pulse-card${n}${o}${s}"${r}>`;for(let f of t.entities)l+=this._renderBarRow(f);l+="</div>";let c=t.entity_row?l:`<ha-card>${l}</ha-card>`,d=this._shadow.querySelector("ha-card, .pulse-card");d&&d.remove();let u=document.createElement("template");u.innerHTML=c,this._shadow.appendChild(u.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let f of t.entities){let p=this._elements.rows?.[f.entity];p&&(p.style.display=ee(f,this._hass)?"":"none")}}_renderBarRow(t){let i=this._cfg,n=te(t,i,this._hass),o=t.positions?.name??i.positions?.name??Q.positions.name,s=t.positions?.value??i.positions?.value??Q.positions.value,a=t.positions?.icon??i.positions?.icon??Q.positions.icon,r=t.positions?.indicator??i.positions?.indicator??Q.positions.indicator,c=(t.indicator??i.indicator)?.show===!0&&r==="off"?"outside":r,d=t.animation??{},u=d.speed??i.animation.speed,f=d.effect??i.animation.effect,p=d.state??i.animation.state,m=this._buildIndicatorHtml(t,i,c),g=ne(t,this._hass),y=this._buildPositionHtml(n,o,s,a,c,m,"outside",g),v=this._buildPositionHtml(n,o,s,a,c,m,"inside",g),b=k(vt(t.height??i.height)),_=k(vt(t.border_radius??i.border_radius)),w=n.color?`background-color:${k(n.color)};`:"",S=f==="charge"&&!n.isUnavailable?" charge":"",A=p==="off"?"transition:none;":"",T=_t(t,i),F=`width:${n.fill*T}%;${A}${w}`,M=this._buildTargetHtml(t,i,n.min,n.max),$=this._buildSparklineHtml(t,i),x=`
      <div class="bar-container" style="height:${b};border-radius:${_};--pulse-animation-speed:${u}s;">
        <div class="bar-track"></div>
        ${$}
        <div class="bar-fill${S}" data-entity="${h(t.entity)}" style="${F}"></div>
        ${M}
        ${v}
      </div>`,E=!!(t.interactive??i.interactive),N=E?`<div class="bar-interactive-row"><div class="bar-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${x}<div class="bar-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:x,L=E?"slider":"progressbar",Z=n.isUnavailable?`role="${L}" aria-valuenow="0" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${h(n.name)}: Unavailable"`:`role="${L}" aria-valuenow="${n.numValue}" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${h(n.name)}: ${h(n.displayValue)}"`,I=n.isUnavailable?" unavailable":"",z=E?" data-interactive":"",P=n.isUnavailable?'data-state="unavailable"':`data-state="${h(n.numValue)}"`,O=n.color?` data-severity-color="${h(n.color)}"`:"";return`<div class="bar-row${I}" data-entity="${h(t.entity)}"${z} ${P}${O} ${Z}>${y}${N}</div>`}_buildIndicatorHtml(t,i,n){let o=t.indicator??i.indicator;if(!(o?.show===!0&&n!=="off"))return"";let a=this._indicators[t.entity],r=a?.direction??"neutral",l=o?.show_delta===!0&&!!a,c=this._hass?.states[t.entity],d=bt(t,c),u=zt(t,i,this._hass),{text:f}=Qt(r,a?.delta??0,l,u,d),p=o?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${r}${p}">${f}</span>`}_buildPositionHtml(t,i,n,o,s,a,r,l){if(i!==r&&n!==r&&o!==r&&s!==r)return"";let d=`<div class="${r==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return o===r&&t.resolvedIcon&&(d+=`<ha-icon class="bar-icon" icon="${h(t.resolvedIcon)}"></ha-icon>`),i===r&&(l?(d+='<div class="bar-name-group">',d+=`<span class="bar-name">${h(t.name)}</span>`,d+=`<span class="bar-secondary">${h(l)}</span>`,d+="</div>"):d+=`<span class="bar-name">${h(t.name)}</span>`),d+='</div><div class="bar-label-right">',n===r&&(d+=`<span class="bar-value">${h(t.displayValue)}</span>`),s===r&&a&&(d+=a),d+="</div></div>",d}_buildTargetHtml(t,i,n,o){let s=t.target??i.target,{value:a,showLabel:r}=Lt(s,this._hass);if(a===null)return"";let l=tt((a-n)/(o-n),0,1)*100,c=_t(t,i),d=`left:${l*c}%`,u=r?`<span class="bar-target-label">${h(a)}</span>`:"";return`<div class="bar-target" style="${d}">${u}</div>`}_updateBars(){let t=this._cfg;for(let i of t.entities){let n=te(i,t,this._hass),o=_t(i,t),s=this._elements.rows?.[i.entity];if(!s||s.__pulseSliding)continue;let a=ee(i,this._hass);if(s.style.display=a?"":"none",!a)continue;s.classList.toggle("unavailable",n.isUnavailable);let r=s.querySelector(".bar-fill");if(r){let m=`${n.fill*o}%`;r.style.width=m,r.style.backgroundColor=n.color||"";let g=s.querySelector(".bar-sparkline");g&&(g.style.width=`${o*100}%`);let y=s.querySelector(".bar-icon");y&&n.resolvedIcon&&y.setAttribute("icon",n.resolvedIcon)}let l=s.querySelectorAll(".bar-name");for(let m of l)m.textContent=n.name;let c=s.querySelectorAll(".bar-value");for(let m of c)m.textContent=n.displayValue;let d=s.querySelectorAll(".bar-secondary");if(d.length>0){let m=ne(i,this._hass);for(let g of d)g.textContent=m}s.setAttribute("aria-valuenow",n.isUnavailable?"0":String(n.numValue)),s.setAttribute("aria-valuemin",String(n.min)),s.setAttribute("aria-valuemax",String(n.max)),s.setAttribute("aria-label",`${h(n.name)}: ${h(n.displayValue)}`),s.setAttribute("data-state",n.isUnavailable?"unavailable":String(n.numValue)),n.color?s.setAttribute("data-severity-color",n.color):s.removeAttribute("data-severity-color");let u=s.querySelector(".bar-target"),f=i.target??t.target,{value:p}=Lt(f,this._hass);if(p!==null){let m=tt((p-n.min)/(n.max-n.min),0,1)*100;if(u){u.style.left=`${m*o}%`,u.style.display="";let g=u.querySelector(".bar-target-label");g&&(g.textContent=String(p))}}else u&&(u.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(n=>(n.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let i=new Map;for(let o of t.entities)i.set(o.entity,o);let n=new Map;for(let o of t.entities){let s=o.indicator??t.indicator;if(!s?.show)continue;let a=s.period??60;n.has(a)||n.set(a,[]),n.get(a).push({entity:o.entity,icfg:s})}for(let[o,s]of n){let a=s.map(l=>l.entity),r=await Ge(this._hass,a,o);for(let{entity:l,icfg:c}of s){let d=i.get(l),u=this._hass?.states[l],f=d?.attribute?u?.attributes?.[d.attribute]:u?.state,p=je(f,r[l]);this._indicators[l]=p;let m=this._elements.rows?.[l];if(!m)continue;let g=m.querySelector(".bar-indicator");if(g&&d){let y=this._hass?.states[l],v=bt(d,y),b=zt(d,t,this._hass),{text:_}=Qt(p.direction,p.delta,c.show_delta===!0,b,v),w=c.inverted===!0?" inverted":"";g.textContent=_,g.className=`bar-indicator ${p.direction}${w}`}}}}catch(i){et("Indicator fetch failed: %O",i)}}_resolveSparklineConfig(t,i){let n=t.sparkline??i.sparkline;if(!n)return null;let o=n===!0?{}:n.show?n:null;if(!o)return null;let s=o.hours_to_show??24,a=o.points_per_hour??1;return{hours:s,pointsPerHour:a,slots:Math.max(s*a,2),aggregateFunc:o.aggregate_func??"avg",smoothing:o.smoothing!==!1,strokeWidth:Number(o.line_width??o.stroke_width??1.5)||1.5,color:o.color??null,updateInterval:o.update_interval??300}}_buildSparklineMarkup(t,i,n=!1){let o=`${i*100}%`,s=t.color?`color:${k(t.color)};`:"";return`<svg${n?' xmlns="http://www.w3.org/2000/svg"':""} class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${o};${s}"><path d="${t.path}" fill="none" stroke="currentColor" stroke-width="${t.strokeWidth}" /></svg>`}_buildSparklineHtml(t,i){let n=this._resolveSparklineConfig(t,i);if(!n)return"";let o=this._sparklineData[t.entity];if(!o||o.length<2)return"";let s=kt(o,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!s)return"";let a=_t(t,i);return this._buildSparklineMarkup({path:s,strokeWidth:n.strokeWidth,color:n.color},a,!1)}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(s=>!!this._resolveSparklineConfig(s,t)))return;let n=300;for(let s of t.entities){let a=this._resolveSparklineConfig(s,t);a&&a.updateInterval<n&&(n=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<n&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let i=new Map;for(let n of t.entities){let o=this._resolveSparklineConfig(n,t);if(!o)continue;let s=o.hours;i.has(s)||i.set(s,[]),i.get(s).push(n.entity)}for(let[n,o]of i){let s=await Nt(this._hass,o,n);for(let a of o)this._sparklineData[a]=s[a]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(i){et("Sparkline fetch failed: %O",i)}}_updateSparklines(){let t=this._cfg;if(t)for(let i of t.entities){let n=this._resolveSparklineConfig(i,t);if(!n)continue;let o=this._elements.rows?.[i.entity];if(!o)continue;let s=this._sparklineData[i.entity];if(!s||s.length<2)continue;let a=kt(s,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!a)continue;let r=o.querySelector(".bar-sparkline"),l=_t(i,t),c=`${l*100}%`;if(r){let d=r.querySelector("path");d&&d.setAttribute("d",a),r.style.width=c}else{let d=o.querySelector(".bar-container");if(!d)continue;let u=this._buildSparklineMarkup({path:a,strokeWidth:n.strokeWidth,color:n.color},l,!0),f=new DOMParser().parseFromString(u,"image/svg+xml"),p=document.importNode(f.documentElement,!0),m=d.querySelector(".bar-track");m&&m.nextSibling?d.insertBefore(p,m.nextSibling):d.appendChild(p)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let i of t.entities){let n=this._hass?.states[i.entity];n&&(this._prevStates[i.entity]={state:n.state,last_updated:n.last_updated});let o=i.target??t.target;if(typeof o=="string"){let s=this._hass?.states[o];s&&(this._prevStates[`__target__${o}`]={state:s.state,last_updated:s.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let i=new Map;for(let o of t.entities)i.set(o.entity,o);let n=this._shadow.querySelectorAll(".bar-row");for(let o of n){let s=o.dataset.entity;if(s){this._elements.rows[s]=o;let a=i.get(s);a&&(Xe(o,this,this._hass,t,a),(a.interactive??t.interactive)&&Je(o,this,t,a)),it(o);for(let r of o.querySelectorAll(".bar-step-btn"))it(r)}}}getCardSize(){let t=this._config?.entities?.length||1,i=this._config?.columns||1;return Math.ceil(t/i)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,i=this._config?.columns||1,n=Math.ceil(t/i);return{columns:12,min_columns:3,rows:Math.max(1,n),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(n=>{let o=t.states[n];return n.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",Jt);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${qe} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var xs=Jt;export{xs as default};

# Contributing to Pulse Card

Thanks for your interest in contributing.

## Development Setup

```bash
git clone https://github.com/hiall-fyi/pulse-card.git
cd pulse-card
npm install
```

## Build

```bash
npm run build              # Build all cards → dist/
npm run build:pulse-card   # Build Bar Card + Climate/Weather editors
npm run build:pulse-weather # Build Weather Card only
npm run dev                # Watch mode (Pulse Card)
```

To test locally in Home Assistant, copy the built files from `dist/` to your HA `config/www/` directory and add them as dashboard resources.

## Testing

```bash
npm run lint       # Lint source files (eslint)
npm run typecheck  # Type check via JSDoc + tsc
```

## Project Structure

Each card lives in its own `src/pulse-{name}/` folder; family-shared
primitives live in `src/shared/`. Every card's entry file registers its
custom element and pushes to `window.customCards`.

```
src/
├── global.d.ts                     # Ambient types for the whole bundle
├── shared/                         # Shared across all cards
│   ├── version.js                  #   FAMILY_VERSION — one source for Bar/Climate/Weather
│   ├── styles.js                   #   --pulse-* design tokens + .pulse-* utility classes
│   ├── utils.js                    #   escapeHtml, sanitizeCssValue, buildGridOptions, history fetch
│   ├── action-handler.js           #   Shared tap/hold/double-tap execution
│   ├── editor-helpers.js           #   Visual editor utilities + SHARED_EDITOR_STYLES
│   ├── ripple.js                   #   Tap ripple effect
│   ├── color.js                    #   Hex parse + RGB mixing
│   ├── visual-tension.js           #   Layout tension helpers
│   └── types.js                    #   Shared JSDoc typedefs
├── pulse-bar/                      # Pulse Bar Card
│   ├── pulse-bar-card.js           #   Main class — registers the element
│   ├── pulse-bar-card-editor.js    #   Visual editor
│   ├── styles.js                   #   CSS (--pb-* tokens, .pb-* classes)
│   ├── constants.js                #   Defaults + VERSION (re-exports FAMILY_VERSION)
│   ├── utils.js                    #   Bar fill, severity, indicators
│   ├── slider-handler.js           #   Interactive slider
│   ├── action-handler.js           #   Tap/hold/double-tap binding
│   └── types.js                    #   JSDoc typedefs
├── pulse-climate/                  # Pulse Climate Card
│   ├── pulse-climate-card.js       #   Main class
│   ├── pulse-climate-editor.js     #   Visual editor
│   ├── styles.js                   #   CSS (--pc-* tokens, .pc-* classes)
│   ├── constants.js                #   Defaults, HVAC visuals, section types + VERSION
│   ├── chart-primitives.js         #   SVG rendering (arcs, sparklines, bloom filters)
│   ├── zone-resolver.js            #   Tado CE entity auto-discovery
│   ├── sensor-resolver.js          #   History sensor resolution chain
│   ├── history.js                  #   History cache management
│   ├── feature-availability.js     #   Per-section capability gating
│   └── sections/                   #   One file per section type (zones, radial,
│       └── …                       #   energy-flow, thermal, donut, slot-engine, …)
└── pulse-weather/                  # Pulse Weather Card
    ├── pulse-weather-card.js       #   Main class
    ├── pulse-weather-card-editor.js#   Visual editor
    ├── styles.js                   #   CSS (--pw-* tokens, .pw-* classes)
    ├── constants.js                #   Section types, scales, sensor keys + VERSION
    ├── type-system.js              #   `t` text/layout builder (kicker, hero, stats)
    ├── section-shell.js            #   Section frame with brand-mark corner toggle
    ├── weather-fx.js               #   Atmospheric effect layers
    ├── weather-resolver.js         #   Atmos CE auto-discovery
    └── sections/                   #   overview, forecast, meteogram, wind, astro,
        └── …                       #   air-quality, alerts, atmosphere
```

## Pull Request Guidelines

- Keep PRs focused on a single change
- Add tests for new functionality
- Run `npm run lint` and `npm run typecheck` before submitting
- Follow existing code style (vanilla JS, JSDoc comments, no frameworks)
- Update CHANGELOG.md with your changes

## Code Style

- Pure vanilla JavaScript (ES2022+)
- No runtime dependencies (Lit is a dev dependency for the editor only)
- JSDoc comments on all public functions and classes
- Shadow DOM for style encapsulation
- All colours use HA CSS custom properties with fallbacks — never hardcode theme-specific values
- Animations respect `prefers-reduced-motion` — use the shared `isReducedMotion()` helper
- Reuse shared utilities from `src/shared/` and `src/pulse-climate/utils.js` instead of duplicating logic

## Reporting Issues

Please use [GitHub Issues](https://github.com/hiall-fyi/pulse-card/issues) and include:
- Your HA version
- Card config (YAML)
- Browser and version
- Steps to reproduce

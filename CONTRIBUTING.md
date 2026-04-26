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
npm run build:pulse-card   # Build Pulse Card only
npm run build:pulse-climate # Build Pulse Climate Card only
npm run dev                # Watch mode (Pulse Card)
```

To test locally in Home Assistant, copy the built files from `dist/` to your HA `config/www/` directory and add them as dashboard resources.

## Testing

```bash
npm run lint       # Lint source files (eslint)
npm run typecheck  # Type check via JSDoc + tsc
```

## Project Structure

```
src/
├── pulse-card.js              # Pulse Card — main class
├── editor.js                  # Pulse Card — visual editor
├── styles.js                  # Pulse Card — CSS styles
├── utils.js                   # Pulse Card — utility functions
├── constants.js               # Pulse Card — defaults and version
├── slider-handler.js          # Pulse Card — interactive slider
├── action-handler.js          # Pulse Card — tap/hold/double-tap
├── shared/                    # Shared across all cards
│   ├── utils.js               #   escapeHtml, sanitizeCssValue, isReducedMotion
│   ├── action-handler.js      #   Shared action execution
│   ├── editor-helpers.js      #   Visual editor utilities
│   └── ripple.js              #   Tap ripple effect
├── pulse-climate/             # Pulse Climate Card
│   ├── pulse-climate-card.js  #   Main class
│   ├── editor.js              #   Visual editor
│   ├── styles.js              #   CSS styles
│   ├── utils.js               #   Climate utilities + animation helpers
│   ├── constants.js           #   Defaults, HVAC visuals, section types
│   ├── chart-primitives.js    #   Shared SVG rendering (arcs, sparklines, colors)
│   ├── zone-resolver.js       #   Tado CE entity auto-discovery
│   ├── sensor-resolver.js     #   History sensor resolution chain (external sensor auto-detection)
│   ├── history.js             #   History cache management
│   └── sections/              #   One file per section type
│       ├── zones.js, radial.js, energy-flow.js, ...
│       └── slot-engine.js     #   Shared timeline/heatmap rendering
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

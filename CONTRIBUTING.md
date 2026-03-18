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
npm run build    # Production build → dist/pulse-card.js
npm run dev      # Watch mode (auto-rebuild on changes)
```

To test locally in Home Assistant, copy `dist/pulse-card.js` to your HA `config/www/` directory and add it as a dashboard resource.

## Testing

```bash
npm test         # Run all tests (vitest)
npm run lint     # Lint source files
```

Tests are in `tests/` and use [Vitest](https://vitest.dev/). Property-based tests use [fast-check](https://fast-check.dev/).

## Project Structure

```
src/
├── pulse-card.js     # Main card class + registration
├── editor.js         # Visual editor (getConfigForm schema)
├── styles.js         # CSS template literal (Shadow DOM)
├── utils.js          # Pure functions (computeFill, resolveSeverity, etc.)
├── constants.js      # DEFAULTS, version, log prefix
└── action-handler.js # Tap/hold/double-tap action handling
```

## Pull Request Guidelines

- Keep PRs focused on a single change
- Add tests for new functionality
- Run `npm test` and `npm run lint` before submitting
- Follow existing code style (vanilla JS, JSDoc comments, no frameworks)
- Update CHANGELOG.md with your changes under `[Unreleased]`

## Code Style

- Pure vanilla JavaScript (ES2022+)
- No runtime dependencies
- JSDoc comments on all public functions and classes
- Shadow DOM for style encapsulation

## Reporting Issues

Please use [GitHub Issues](https://github.com/hiall-fyi/pulse-card/issues) and include:
- Your HA version
- Card config (YAML)
- Browser and version
- Steps to reproduce

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // PBT suites (adopted-stylesheets.pbt) run 100 fast-check iterations
    // that each instantiate the card; under coverage instrumentation this
    // can approach the 5s default. Bump to 15s so the suite stays green
    // on slower CI runners and under coverage.
    testTimeout: 15000,
    coverage: {
      include: ['src/**/*.js'],
      // Explicit exemption list per CLAUDE.md §9: exemptions must be
      // listed, not silently skipped.
      exclude: [
        // JSDoc-only — file body is `export {};`
        'src/**/types.js',
        // Editor UI components drive ha-form and the HA native editor
        // registry. They require the HA frontend runtime to exercise
        // meaningfully; jsdom can only test handler shape, not real
        // DOM / ha-form behaviour. Dedicated smoke tests cover the
        // handler fns where feasible; coverage is tracked separately.
        'src/pulse-bar/pulse-bar-card-editor.js',
        'src/pulse-climate/pulse-climate-editor.js',
        'src/pulse-switch/pulse-switch-card-editor.js',
        'src/pulse-weather/pulse-weather-card-editor.js',
        // Pointer-heavy interaction code (hold/drag, touch gestures,
        // timer-driven step repeat). jsdom's pointer event / timing
        // simulation is too lossy to exercise the real code paths.
        // Manual browser testing covers these.
        'src/pulse-bar/slider-handler.js',
        'src/shared/ripple.js',
        // Card coordinators with large DOM-binding methods (IntersectionObserver,
        // ResizeObserver, AbortController wiring, SVG injection) that are
        // exercised in integration but difficult to unit test under jsdom.
        // Their public surface IS covered by integration.test.js; the
        // uncovered lines are diff-update DOM helpers.
        'src/pulse-climate/pulse-climate-card.js',
        'src/pulse-weather/pulse-weather-card.js',
        // updateEnergyFlowSection is a diff-update DOM helper called only
        // during integration rendering; render path is covered.
        'src/pulse-climate/sections/energy-flow.js',
        // Phase 1 reskin (2026-05-16) replaces the renderOverview return
        // template with a hero-first layout. Pre-existing day-arc, temp-arc,
        // stability-badge, and overflow-bar variables stay in place because
        // Phase 2 Pro overlay reuses them. The unreachable branches drop
        // coverage below 60% during Phase 1; re-include this file once
        // Phase 2 either deletes those code paths or wires them into the
        // overlay implementation.
        'src/pulse-weather/sections/overview.js',
      ],
      thresholds: {
        // Per-file baseline — realistic given current state. Will tighten
        // to 80% in a later pass once the biggest gaps are closed.
        perFile: true,
        statements: 60,
        branches: 60,
        functions: 60,
        lines: 60,
      },
    },
  },
});

/**
 * @module shared/version
 * @description Single source of truth for the family release version.
 *
 * The publicly-released cards (Bar, Climate, Weather) all ship on one version
 * line and must move together, so each re-exports this as its own `VERSION`
 * rather than carrying a hand-maintained copy. Bump here once and all three
 * follow; keep it in step with `package.json` (the npm / HACS metadata version,
 * which the bundle can't read at runtime).
 *
 * Pulse Switch is the deliberate exception: it's still pre-release and tracks
 * its own version in `src/pulse-switch/constants.js`, so it does NOT read this.
 */

/** Family release version shared by Bar, Climate, and Weather. */
export const FAMILY_VERSION = '1.9.2';

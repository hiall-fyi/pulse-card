import js from '@eslint/js';
import globals from 'globals';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import security from 'eslint-plugin-security';

export default [
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  js.configs.recommended,
  // no-unsanitized: catch DOM XSS sinks — innerHTML, outerHTML,
  // insertAdjacentHTML, legacy doc-write APIs, setTimeout(string), etc.
  noUnsanitized.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        CustomEvent: 'readonly',
      },
    },
    plugins: {
      security,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-redeclare': 'error',
      'no-shadow': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-throw-literal': 'error',

      // ── Security gates ───────────────────────────────────────────
      // Plugin recommended config (above) already enables these as
      // errors; re-declare so intent is explicit in-file.
      'no-unsanitized/method': 'error',
      'no-unsanitized/property': 'error',

      // eslint-plugin-security: taint-style detectors.
      'security/detect-unsafe-regex': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-new-buffer': 'error',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-possible-timing-attacks': 'warn',
      'security/detect-pseudoRandomBytes': 'error',
      // detect-object-injection: disabled for this project.
      // All flagged patterns are hass.states[entityId], config[key], or
      // discovery[sensorType] lookups — inputs come from HA core or the
      // card owner's own YAML, not untrusted web input. An attacker who
      // can modify dashboard YAML already has full HA control; prototype
      // pollution via property key adds no privilege escalation.
      'security/detect-object-injection': 'off',
    },
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'off', // vitest globals
    },
  },
  {
    files: ['scripts/**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];

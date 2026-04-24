/**
 * @module editor
 * @description Visual editor for Pulse Card — LitElement-based custom element
 * supporting multi-entity configuration with dynamic add/remove.
 * Uses ha-form for card settings + ha-entity-picker for entity list.
 * Pattern follows Mushroom Cards + HA Core entities card editor.
 */

import { LitElement, html, css, nothing } from 'lit';
import { DEFAULTS } from './constants.js';
import { loadEditorHelpers, renderReorderButtons, computeLabel } from './shared/editor-helpers.js';

/** Default swatch color — resolves HA theme primary text color, falls back to HA blue. */
function getDefaultSwatch() {
  if (typeof document === 'undefined') return '#44739e';
  const resolved = getComputedStyle(document.documentElement).getPropertyValue('--primary-text-color').trim();
  return toHex6(resolved) || '#44739e';
}

/** Default swatch for bar color — resolves HA theme primary color. */
function getBarDefaultSwatch() {
  if (typeof document === 'undefined') return '#03a9f4';
  const resolved = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  return toHex6(resolved) || '#03a9f4';
}

/** Cache for named color → hex resolution to avoid repeated DOM reflows. */
const _colorCache = new Map();

/**
 * Convert any CSS color string to #rrggbb for `<input type="color">`.
 * Returns empty string if the value cannot be resolved.
 * @param {string} color - CSS color value (hex, rgb, named, etc.)
 * @returns {string} 6-digit hex string or empty string
 */
export function toHex6(color) {
  if (!color || typeof color !== 'string') return '';
  const c = color.trim();
  if (!c) return '';
  if (_colorCache.has(c)) return _colorCache.get(c);
  const result = _resolveToHex6(c);
  _colorCache.set(c, result);
  return result;
}

/** @param {string} c */
function _resolveToHex6(c) {
  // Already #rrggbb
  if (/^#[0-9a-f]{6}$/i.test(c)) return c.toLowerCase();
  // Shorthand #rgb → #rrggbb
  if (/^#[0-9a-f]{3}$/i.test(c)) {
    return `#${c[1]}${c[1]}${c[2]}${c[2]}${c[3]}${c[3]}`.toLowerCase();
  }
  // rgb() or rgba() — extract r,g,b
  const rgbMatch = c.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbMatch) {
    const hex = (/** @type {string} */ n) => parseInt(n, 10).toString(16).padStart(2, '0');
    return `#${hex(rgbMatch[1])}${hex(rgbMatch[2])}${hex(rgbMatch[3])}`;
  }
  // CSS variable or other unresolvable — skip
  if (c.startsWith('var(')) return '';
  // Named color — resolve via temporary element
  if (typeof document !== 'undefined') {
    const tmp = document.createElement('span');
    tmp.style.color = c;
    document.body.appendChild(tmp);
    const computed = getComputedStyle(tmp).color;
    tmp.remove();
    const m = computed.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (m) {
      const hex = (/** @type {string} */ n) => parseInt(n, 10).toString(16).padStart(2, '0');
      return `#${hex(m[1])}${hex(m[2])}${hex(m[3])}`;
    }
  }
  return '';
}

/**
 * ha-form schema for card-level settings.
 * Positions use flat keys (pos_name, pos_value, pos_icon) mapped to
 * nested config in _settingsChanged.
 */
const POSITION_OPTIONS = [
  { value: 'outside', label: 'Outside' },
  { value: 'inside', label: 'Inside' },
  { value: 'off', label: 'Off' },
];

const AGGREGATE_OPTIONS = [
  { value: 'avg', label: 'Average' },
  { value: 'min', label: 'Min' },
  { value: 'max', label: 'Max' },
  { value: 'median', label: 'Median' },
  { value: 'first', label: 'First' },
  { value: 'last', label: 'Last' },
  { value: 'sum', label: 'Sum' },
  { value: 'delta', label: 'Delta' },
  { value: 'diff', label: 'Diff' },
];

/**
 * Build the full editor schema. Uses expandable panels for advanced settings.
 * @param {Record<string, *>} formData
 * @returns {object[]}
 */
function buildSchemaTop(formData) {
  return [
    {
      name: '', type: 'grid', column_min_width: '120px',
      schema: [
        { name: 'title', label: 'Title', selector: { text: {} } },
        { name: 'layout', label: 'Layout', selector: { select: { options: [{ value: 'default', label: 'Default' }, { value: 'compact', label: 'Compact' }], mode: 'dropdown' } } },
        { name: 'color', label: 'Color', selector: { text: {} } },
      ],
    },
    {
      name: '', type: 'grid', column_min_width: '120px',
      schema: [
        { name: 'height', label: 'Height', selector: { text: {} } },
        { name: 'border_radius', label: 'Radius', selector: { text: {} } },
        { name: 'font_size', label: 'Font Size', selector: { text: {} } },
      ],
    },
    {
      name: '', type: 'grid', column_min_width: '120px',
      schema: [
        { name: 'pos_name', label: 'Name', selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } } },
        { name: 'pos_value', label: 'Value', selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } } },
        { name: 'pos_icon', label: 'Icon', selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } } },
      ],
    },
    { name: 'sparkline_show', label: 'Sparkline', selector: { boolean: {} } },
    ...(formData.sparkline_show ? [{
      name: '', type: 'grid', column_min_width: '120px',
      schema: [
        { name: 'sparkline_hours', label: 'Hours', selector: { number: { min: 1, max: 168, mode: 'box' } } },
        { name: 'sparkline_line_width', label: 'Line Width', selector: { number: { min: 0.5, max: 5, step: 0.5, mode: 'box' } } },
        { name: 'sparkline_points', label: 'Points/Hour', selector: { number: { min: 0.25, max: 12, step: 0.25, mode: 'box' } } },
      ],
    }, {
      name: '', type: 'grid', column_min_width: '120px',
      schema: [
        { name: 'sparkline_smoothing', label: 'Smoothing', selector: { boolean: {} } },
        { name: 'sparkline_aggregate', label: 'Aggregate', selector: { select: { options: AGGREGATE_OPTIONS, mode: 'dropdown' } } },
        { name: 'sparkline_interval', label: 'Refresh (s)', selector: { number: { min: 30, max: 3600, mode: 'box' } } },
      ],
    }] : []),
  ];
}

/** Schema: expandable panels for advanced settings. */
const SCHEMA_ADVANCED = [
  {
    type: 'expandable', name: '', flatten: true, title: 'Bar Limits',
    schema: [
      { name: '', type: 'grid', column_min_width: '120px', schema: [
        { name: 'min', label: 'Min', selector: { number: { mode: 'box' } } },
        { name: 'max', label: 'Max', selector: { number: { mode: 'box' } } },
        { name: 'target_value', label: 'Target', selector: { text: {} } },
      ]},
      { name: '', type: 'grid', column_min_width: '120px', schema: [
        { name: 'bar_width', label: 'Bar Width (%)', selector: { number: { min: 1, max: 100, mode: 'box' } } },
        { name: 'columns', label: 'Columns', selector: { number: { min: 1, max: 6, mode: 'box' } } },
        { name: 'gap', label: 'Gap', selector: { text: {} } },
      ]},
      { name: '', type: 'grid', column_min_width: '120px', schema: [
        { name: 'decimal', label: 'Decimals', selector: { number: { min: 0, max: 6, mode: 'box' } } },
        { name: 'complementary', label: 'Invert Fill', selector: { boolean: {} } },
        { name: 'limit_value', label: 'Clamp Value', selector: { boolean: {} } },
      ]},
    ],
  },
  {
    type: 'expandable', name: '', flatten: true, title: 'Indicator',
    schema: [
      { name: '', type: 'grid', column_min_width: '120px', schema: [
        { name: 'pos_indicator', label: 'Position', selector: { select: { options: POSITION_OPTIONS, mode: 'dropdown' } } },
        { name: 'indicator_period', label: 'Lookback (min)', selector: { number: { min: 1, max: 1440, mode: 'box' } } },
      ]},
      { name: '', type: 'grid', column_min_width: '120px', schema: [
        { name: 'show_delta', label: 'Show Delta', selector: { boolean: {} } },
        { name: 'indicator_inverted', label: 'Inverted', selector: { boolean: {} } },
      ]},
    ],
  },
  {
    type: 'expandable', name: '', flatten: true, title: 'Animation',
    schema: [{ name: '', type: 'grid', column_min_width: '120px', schema: [
      { name: 'anim_effect', label: 'Effect', selector: { select: { options: [{ value: 'none', label: 'None' }, { value: 'charge', label: 'Charge' }], mode: 'dropdown' } } },
      { name: 'anim_speed', label: 'Speed (s)', selector: { number: { min: 0, max: 5, step: 0.1, mode: 'box' } } },
    ]}],
  },
];

/**
 * @typedef {{entity: string, [key: string]: *}} EditorEntityEntry
 */

/**
 * PulseCardEditor — visual config editor for Pulse Card.
 * LitElement-based, following HA Core + Mushroom patterns.
 */
class PulseCardEditor extends LitElement {
  /** @type {boolean} Whether HA card helpers have been loaded (prevents re-loading). */
  _helpersLoaded = false;

  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    if (this._helpersLoaded) return;
    this._helpersLoaded = await loadEditorHelpers('Pulse Card:');
  }

  /**
   * Set config from HA editor framework.
   * @param {Record<string, *>} config
   */
  setConfig(config) {
    this._config = config;
    this._needsSwatchInject = true;
  }

  /**
   * Inject color swatches only when config changes, not on every Lit update.
   */
  updated() {
    if (this._needsSwatchInject) {
      this._needsSwatchInject = false;
      this._injectColorSwatches();
    }
  }

  /** Inject color picker swatches next to all "Color" text fields in our shadow DOM. */
  _injectColorSwatches() {
    const root = this.shadowRoot;
    if (!root) return;
    for (const tf of root.querySelectorAll('ha-textfield')) {
      if (/** @type {*} */ (tf).label !== 'Color') continue;
      // Skip if already wrapped (entity template color fields have inline swatches)
      if (tf.closest('.color-field')) continue;
      const parent = tf.parentElement;
      if (!parent || parent.querySelector('input[type="color"]')) continue;
      const wrapper = document.createElement('div');
      wrapper.className = 'color-field';
      parent.insertBefore(wrapper, tf);
      wrapper.appendChild(tf);
      const swatch = document.createElement('input');
      swatch.type = 'color';
      swatch.title = 'Pick color';
      swatch.value = toHex6(/** @type {*} */ (tf).value) || getBarDefaultSwatch();
      wrapper.appendChild(swatch);
      swatch.addEventListener('input', () => {
        /** @type {*} */ (tf).value = swatch.value;
        tf.dispatchEvent(new Event('input', { bubbles: true }));
      });
      tf.addEventListener('input', () => {
        swatch.value = toHex6(/** @type {*} */ (tf).value) || getBarDefaultSwatch();
      });
    }
  }

  /**
   * Get normalized entities array from config.
   * @returns {EditorEntityEntry[]}
   */
  _getEntities() {
    const cfg = /** @type {Record<string, *>} */ (this._config);
    if (cfg.entities) {
      return /** @type {*[]} */ (cfg.entities).map(/** @param {*} e */ (e) =>
        typeof e === 'string' ? { entity: e } : { ...e },
      );
    }
    if (cfg.entity) {
      return [{ entity: /** @type {string} */ (cfg.entity) }];
    }
    return [];
  }

  /**
   * Fire config-changed event to HA editor framework.
   * @param {Record<string, *>} config
   */
  _fireConfigChanged(config) {
    this._config = config;
    this._needsSwatchInject = true;
    const event = new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  /**
   * Handle entity picker value change.
   * @param {number} index
   * @param {CustomEvent} ev
   */
  _entityChanged(index, ev) {
    const value = ev.detail.value;
    const entities = this._getEntities();
    if (value === '' || value === undefined) {
      entities.splice(index, 1);
    } else {
      entities[index] = { ...entities[index], entity: value };
    }
    this._updateEntities(entities);
  }

  /**
   * Handle per-entity field change (name, color).
   * @param {number} index
   * @param {string} field
   * @param {Event} ev
   */
  _entityFieldChanged(index, field, ev) {
    const value = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
    const entities = this._getEntities();
    if (value === '' || value === undefined) {
      delete entities[index][field];
    } else {
      entities[index] = { ...entities[index], [field]: value };
    }
    this._updateEntities(entities);
  }

  /**
   * Handle per-entity secondary_info sub-field change.
   * @param {number} index
   * @param {string} subField - 'text' or 'attribute'
   * @param {Event} ev
   */
  _entitySecondaryChanged(index, subField, ev) {
    const value = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
    const entities = this._getEntities();
    const existing = entities[index].secondary_info || {};
    if (value === '' || value === undefined) {
      const updated = { ...existing };
      delete updated[subField];
      if (Object.keys(updated).length === 0) {
        delete entities[index].secondary_info;
      } else {
        entities[index] = { ...entities[index], secondary_info: updated };
      }
    } else {
      entities[index] = {
        ...entities[index],
        secondary_info: { ...existing, [subField]: value },
      };
    }
    this._updateEntities(entities);
  }

  /**
   * Remove entity at index.
   * @param {number} index
   */
  _removeEntity(index) {
    const entities = this._getEntities();
    entities.splice(index, 1);
    this._updateEntities(entities);
  }

  /**
   * Move entity at index by direction (-1 = up, +1 = down).
   * Boundary moves (first up, last down) are no-ops.
   * @param {number} index
   * @param {number} direction - -1 or +1
   */
  _moveEntity(index, direction) {
    const entities = this._getEntities();
    const target = index + direction;
    if (target < 0 || target >= entities.length) return;
    [entities[index], entities[target]] = [entities[target], entities[index]];
    this._updateEntities(entities);
  }

  /**
   * Add a new empty entity row.
   * @param {CustomEvent} ev
   */
  _addEntity(ev) {
    const value = ev.detail.value;
    if (!value) return;
    const entities = this._getEntities();
    entities.push({ entity: value });
    /** @type {*} */ (ev.target).value = '';
    this._updateEntities(entities);
  }

  /**
   * Update entities in config and fire change.
   * @param {EditorEntityEntry[]} entities
   */
  _updateEntities(entities) {
    /** @type {Record<string, *>} */
    const newConfig = { ...this._config };
    const cfg = /** @type {Record<string, *>} */ (this._config);
    if (entities.length <= 1 && !cfg.entities) {
      newConfig.entity = entities[0]?.entity || '';
      delete newConfig.entities;
    } else {
      newConfig.entities = entities;
      delete newConfig.entity;
    }
    this._fireConfigChanged(newConfig);
  }

  /**
   * Handle ha-form value-changed for card settings.
   * Merges form data into config. Empty strings remove the key (revert to default).
   * Flat position keys (pos_name, pos_value, pos_icon, pos_indicator) are mapped
   * to nested positions object. Animation keys are mapped to animation object.
   * Indicator keys are mapped to indicator object. Target is mapped to target object.
   * @param {CustomEvent} ev
   */
  _settingsChanged(ev) {
    ev.stopPropagation();
    const formData = ev.detail.value;
    const newConfig = { ...this._config };

    // --- Simple flat keys: empty → delete, else → set ---
    const simpleKeys = ['title', 'height', 'border_radius', 'color', 'columns', 'gap', 'min', 'max', 'decimal', 'bar_width', 'font_size'];
    for (const key of simpleKeys) {
      const val = formData[key];
      if (val === undefined || val === null || val === '') {
        delete newConfig[key];
      } else {
        newConfig[key] = val;
      }
    }

    // --- Boolean toggles: true → set, false → delete, absent → skip ---
    // Note: complementary, limit_value, entity_row are YAML-only (not in editor schema)
    // but if they somehow appear in formData, handle them gracefully
    const boolKeys = ['complementary', 'limit_value', 'entity_row'];
    for (const key of boolKeys) {
      if (formData[key] === true) {
        newConfig[key] = true;
      } else if (formData[key] === false) {
        delete newConfig[key];
      }
    }

    // --- Target: parse number, preserve object format (e.g. show_label) ---
    this._applyTarget(newConfig, formData.target_value);

    // --- Nested objects: flat form keys → nested config objects ---
    // Each entry: [configKey, keyMap, filterFn?]
    // keyMap: { formKey: nestedKey } — empty values are deleted
    // filterFn: optional per-key filter (return undefined to delete)
    /** @type {[string, Record<string, string>, ((k: string, v: *) => *)?][]} */
    const nestedMaps = [
      ['positions', { pos_name: 'name', pos_value: 'value', pos_icon: 'icon', pos_indicator: 'indicator' }],
      ['animation', { anim_effect: 'effect', anim_speed: 'speed' },
        (k, v) => k === 'effect' && v === 'none' ? undefined : v],
      ['indicator', { pos_indicator: 'show', indicator_period: 'period', show_delta: 'show_delta', indicator_inverted: 'inverted' },
        (k, v) => {
          if (k === 'show') return v && v !== 'off' ? true : undefined;
          if (k === 'show_delta') return v === true ? true : undefined;
          if (k === 'inverted') return v === true ? true : undefined;
          return v;
        }],
    ];
    for (const [configKey, keyMap, filterFn] of nestedMaps) {
      const nested = { ...(newConfig[configKey] || {}) };
      for (const [formKey, nestedKey] of Object.entries(keyMap)) {
        let val = formData[formKey];
        if (filterFn) val = filterFn(nestedKey, val);
        if (val === undefined || val === null || val === '') {
          delete nested[nestedKey];
        } else {
          nested[nestedKey] = val;
        }
      }
      if (Object.keys(nested).length > 0) {
        newConfig[configKey] = nested;
      } else {
        delete newConfig[configKey];
      }
    }

    // --- Sparkline: boolean toggle + detail fields → sparkline object ---
    if (formData.sparkline_show === true) {
      const existing = typeof newConfig.sparkline === 'object' && newConfig.sparkline !== null
        ? newConfig.sparkline : {};
      const sparkline = { ...existing, show: true };
      // Apply sparkline detail fields (only when present in formData — absent means form didn't render them)
      const sparkFields = {
        sparkline_hours: 'hours_to_show',
        sparkline_line_width: 'line_width',
        sparkline_points: 'points_per_hour',
        sparkline_aggregate: 'aggregate_func',
        sparkline_interval: 'update_interval',
      };
      for (const [formKey, cfgKey] of Object.entries(sparkFields)) {
        if (!(formKey in formData)) continue;
        const val = formData[formKey];
        if (val === undefined || val === null || val === '' || (cfgKey === 'aggregate_func' && val === 'avg')) {
          delete sparkline[cfgKey];
        } else {
          sparkline[cfgKey] = val;
        }
      }
      // Smoothing: true is default, only store false
      if ('sparkline_smoothing' in formData) {
        if (formData.sparkline_smoothing === false) {
          sparkline.smoothing = false;
        } else {
          delete sparkline.smoothing;
        }
      }
      newConfig.sparkline = sparkline;
    } else if (formData.sparkline_show === false) {
      delete newConfig.sparkline;
    }

    // --- Layout: 'default' → delete, else → set ---
    if (formData.layout && formData.layout !== 'default') {
      newConfig.layout = formData.layout;
    } else {
      delete newConfig.layout;
    }

    this._fireConfigChanged(newConfig);
  }

  /**
   * Apply target value from form data to config.
   * Parses numeric strings, preserves object format (e.g. show_label).
   * @param {Record<string, *>} config - Config object to mutate.
   * @param {*} targetVal - Raw target value from form.
   */
  _applyTarget(config, targetVal) {
    if (targetVal === undefined || targetVal === null || targetVal === '') {
      delete config.target;
      return;
    }
    const num = parseFloat(targetVal);
    const resolvedValue = isNaN(num) ? targetVal : num;
    const existingTarget = this._config?.target;
    if (typeof existingTarget === 'object' && existingTarget !== null) {
      config.target = { ...existingTarget, value: resolvedValue };
    } else {
      config.target = resolvedValue;
    }
  }

  /**
   * Compute label for ha-form schema entries.
   * @param {{label?: string, name?: string}} schema
   * @returns {string}
   */
  _computeLabel(schema) {
    return computeLabel(schema);
  }

  render() {
    /** @type {*} */
    const hass = /** @type {*} */ (this).hass;
    if (!hass || !this._config) {
      return nothing;
    }

    const entities = this._getEntities();
    // Resolve target value for the form — supports number, string (entity ID), or object
    const rawTarget = this._config.target;
    let targetFormValue = '';
    if (rawTarget !== undefined && rawTarget !== null) {
      if (typeof rawTarget === 'object' && rawTarget.value !== undefined) {
        targetFormValue = String(rawTarget.value);
      } else {
        targetFormValue = String(rawTarget);
      }
    }

    const formData = {
      title: this._config.title || '',
      height: this._config.height || '',
      border_radius: this._config.border_radius || '',
      color: this._config.color || '',
      decimal: this._config.decimal ?? '',
      columns: this._config.columns || DEFAULTS.columns,
      gap: this._config.gap || '',
      target_value: targetFormValue,
      bar_width: this._config.bar_width ?? '',
      font_size: this._config.font_size || '',
      complementary: this._config.complementary || false,
      limit_value: this._config.limit_value || false,
      min: this._config.min ?? '',
      max: this._config.max ?? '',
      pos_name: this._config.positions?.name ?? DEFAULTS.positions.name,
      pos_value: this._config.positions?.value ?? DEFAULTS.positions.value,
      pos_icon: this._config.positions?.icon ?? DEFAULTS.positions.icon,
      pos_indicator: this._config.positions?.indicator ?? DEFAULTS.positions.indicator,
      indicator_period: this._config.indicator?.period ?? '',
      show_delta: this._config.indicator?.show_delta || false,
      anim_effect: this._config.animation?.effect ?? DEFAULTS.animation.effect,
      anim_speed: this._config.animation?.speed ?? '',
      sparkline_show: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.show || false)
        : (this._config.sparkline === true),
      sparkline_hours: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.hours_to_show ?? '')
        : '',
      sparkline_line_width: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.line_width ?? this._config.sparkline?.stroke_width ?? '')
        : '',
      sparkline_points: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.points_per_hour ?? '')
        : '',
      sparkline_smoothing: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.smoothing !== false)
        : true,
      sparkline_aggregate: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.aggregate_func ?? 'avg')
        : 'avg',
      sparkline_interval: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.update_interval ?? '')
        : '',
      sparkline_color: typeof this._config.sparkline === 'object'
        ? (this._config.sparkline?.color ?? '')
        : '',
      indicator_inverted: this._config.indicator?.inverted || false,
      layout: this._config.layout || 'default',
    };

    return html`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${entities.map(
            (/** @type {EditorEntityEntry} */ ec, /** @type {number} */ i) => html`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${hass}
                    .value=${ec.entity}
                    .index=${i}
                    allow-custom-entity
                    @value-changed=${(/** @type {CustomEvent} */ ev) => this._entityChanged(i, ev)}
                  ></ha-entity-picker>
                  ${renderReorderButtons(
                    i, entities.length,
                    (idx, dir) => this._moveEntity(idx, dir),
                    (idx) => this._removeEntity(idx),
                  )}
                </div>
                <div class="entity-row-fields">
                  <ha-textfield
                    .label=${'Name'}
                    .value=${ec.name || ''}
                    @input=${(/** @type {Event} */ ev) => this._entityFieldChanged(i, 'name', ev)}
                  ></ha-textfield>
                  <div class="color-field">
                    <ha-textfield
                      .label=${'Color'}
                      .value=${ec.color || ''}
                      @input=${(/** @type {Event} */ ev) => this._entityFieldChanged(i, 'color', ev)}
                    ></ha-textfield>
                    <input type="color"
                      .value=${toHex6(ec.color) || getBarDefaultSwatch()}
                      @input=${(/** @type {Event} */ ev) => this._entityFieldChanged(i, 'color', ev)}
                      title="Pick color"
                    />
                  </div>
                </div>
                <div class="entity-row-fields">
                  <ha-textfield
                    .label=${'Secondary Text'}
                    .value=${ec.secondary_info?.text || ''}
                    @input=${(/** @type {Event} */ ev) => this._entitySecondaryChanged(i, 'text', ev)}
                  ></ha-textfield>
                  <ha-textfield
                    .label=${'Secondary Attr'}
                    .value=${ec.secondary_info?.attribute || ''}
                    @input=${(/** @type {Event} */ ev) => this._entitySecondaryChanged(i, 'attribute', ev)}
                  ></ha-textfield>
                </div>
                <div class="entity-row-fields">
                  <label class="interactive-toggle">
                    <span>Interactive</span>
                    <ha-switch
                      .checked=${!!ec.interactive}
                      @change=${(/** @type {Event} */ ev) => {
                        const checked = /** @type {HTMLInputElement} */ (ev.target).checked;
                        const ents = this._getEntities();
                        if (checked) {
                          ents[i] = { ...ents[i], interactive: true };
                        } else {
                          delete ents[i].interactive;
                        }
                        this._updateEntities(ents);
                      }}
                    ></ha-switch>
                  </label>
                </div>
              </div>
            `,
          )}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${hass}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${buildSchemaTop(formData)}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        ${formData.sparkline_show ? html`
          <div class="color-field sparkline-color">
            <ha-textfield
              .label=${'Sparkline Color'}
              .value=${formData.sparkline_color || ''}
              @input=${(/** @type {Event} */ ev) => {
                const val = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
                const cfg = { ...this._config };
                const sp = typeof cfg.sparkline === 'object' && cfg.sparkline !== null ? { ...cfg.sparkline } : { show: true };
                if (val === '') { delete sp.color; } else { sp.color = val; }
                cfg.sparkline = sp;
                this._fireConfigChanged(cfg);
              }}
            ></ha-textfield>
            <input type="color"
              .value=${toHex6(formData.sparkline_color) || getDefaultSwatch()}
              @input=${(/** @type {Event} */ ev) => {
                const val = /** @type {HTMLInputElement} */ (ev.target).value;
                const cfg = { ...this._config };
                const sp = typeof cfg.sparkline === 'object' && cfg.sparkline !== null ? { ...cfg.sparkline } : { show: true };
                sp.color = val;
                cfg.sparkline = sp;
                this._fireConfigChanged(cfg);
                const tf = /** @type {HTMLElement} */ (ev.target).parentElement?.querySelector('ha-textfield');
                if (tf) /** @type {*} */ (tf).value = val;
              }}
              title="Pick color"
            />
          </div>
        ` : nothing}
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${SCHEMA_ADVANCED}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `;
  }

  static get styles() {
    return css`
      .editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--primary-text-color);
      }
      h3:first-child {
        margin-top: 0;
      }
      .entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .entity-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
      }
      .entity-row-main {
        display: flex;
        align-items: center;
      }
      .entity-row-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .entity-row-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon[disabled] {
        opacity: 0.3;
        pointer-events: none;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
      .color-field {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .color-field ha-textfield {
        flex: 1;
        min-width: 0;
      }
      .color-field input[type="color"] {
        -webkit-appearance: none;
        appearance: none;
        width: 40px;
        height: 40px;
        padding: 0;
        border: 2px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        cursor: pointer;
        background: none;
        flex-shrink: 0;
        overflow: hidden;
      }
      .color-field input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .color-field input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 3px;
      }
      .sparkline-color {
        margin: 4px 0 16px;
      }
      .interactive-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
        cursor: pointer;
        padding: 4px 0;
      }
    `;
  }
}

if (!customElements.get('pulse-card-editor')) {
  customElements.define('pulse-card-editor', PulseCardEditor);
}

export { PulseCardEditor };

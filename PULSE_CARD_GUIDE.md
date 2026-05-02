[← Back to README](README.md)

# Pulse Card — Configuration Guide

Pulse Card is a compact horizontal bar chart card for Home Assistant. It replaces the discontinued bar-card with a modern, lightweight alternative that works out of the box — sensible defaults, a visual editor, and a single bundled file under 50KB.

This guide covers every configuration option, style presets, migration from bar-card, CSS custom properties, and known limitations.

---

## Configuration Reference

### Basic

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | The sensor to display (e.g. `sensor.battery_level`) |
| `entities` | list | — | Show multiple sensors in one card (see [examples below](#multiple-entities)) |
| `name` | string | auto | Custom label — defaults to the entity's friendly name |
| `icon` | string | auto | Custom icon (e.g. `mdi:battery`) — defaults to the entity's icon |
| `title` | string | — | Card title shown above the bars |

### Bar Appearance

| Option | Type | Default | Description |
|---|---|---|---|
| `color` | string | theme color | Bar color (e.g. `red`, `#4CAF50`, `rgb(0,150,0)`) |
| `height` | string | `8px` | How tall the bar is (e.g. `40px` for a chunky bar) |
| `border_radius` | string | `4px` | Corner rounding (e.g. `0px` for sharp corners, `20px` for pill shape) |
| `decimal` | number | auto | How many decimal places to show (e.g. `1` → "23.5°C"). When not set, the card uses Home Assistant's display precision for the sensor. If HA has no precision configured either, the raw value is shown as-is |
| `unit_of_measurement` | string | auto | Override the unit shown after the value |

### Value Range

| Option | Type | Default | Description |
|---|---|---|---|
| `min` | number | `0` | The value where the bar is empty. Can be set at card level (applies to all bars) or per-entity to override |
| `max` | number | `100` | The value where the bar is full. Can be set at card level or per-entity to override |
| `complementary` | boolean | `false` | Flip the bar — show what's left instead of what's used. Useful for "remaining" displays (e.g. disk space free) |
| `limit_value` | boolean | `false` | If the value goes beyond min/max, cap the displayed number. Without this, a value of 120 with max 100 still shows "120" |
| `attribute` | string | — | Read a specific attribute instead of the main state (e.g. `brightness` from a light entity) |

Per-entity min/max override — useful when most bars share one range but a few need their own:

```yaml
type: custom:pulse-card
min: -5
max: 25
entities:
  - entity: sensor.outside_temperature
  - entity: sensor.living_room_temperature
  - entity: input_number.base_temperature
    min: 15
    max: 25
```

### Layout

| Option | Type | Default | Description |
|---|---|---|---|
| `columns` | number | `1` | Arrange bars in a grid — e.g. `2` for two bars side by side |
| `gap` | string/number | — | Space between bars (e.g. `8` or `8px`) |
| `bar_width` | number | `100` | How much of the bar track the fill can use (1–100). Set to `70` to keep the fill from overlapping inside labels at high values |
| `entity_row` | boolean | `false` | Embed mode — removes the card border so the bar can sit inside an `entities` card as a row |
| `font_size` | number/string | auto | Base font size for name, value, and icon (e.g. `12` or `12px`). Inside bars auto-scale to the bar height when not set |

### Target Marker

A vertical line on the bar showing a goal or reference value.

| Option | Type | Default | Description |
|---|---|---|---|
| `target` | number/string/object | — | A fixed number (e.g. `80`), an entity ID (e.g. `input_number.goal`), or an object (see below) |

Object format for more control:

```yaml
target:
  value: 80              # fixed number or entity ID
  show_label: true       # show the target value as a label above the line
```

### Trend Indicator

Shows an arrow (▲ up / ▼ down) by comparing the current value to what it was some time ago. Requires the HA recorder to be enabled.

| Option | Type | Default | Description |
|---|---|---|---|
| `indicator.show` | boolean | `false` | Turn on the trend arrow |
| `indicator.period` | number | `60` | How many minutes to look back (e.g. `30` = compare to 30 min ago) |
| `indicator.show_delta` | boolean | `false` | Show the actual change next to the arrow (e.g. ▲ +0.3%) |
| `indicator.inverted` | boolean | `false` | Flip arrow colors — up shows red, down shows green. Use for sensors where rising is bad (CPU, memory, disk usage) |

```yaml
indicator:
  show: true
  period: 60
  show_delta: true
  inverted: true    # CPU going up = bad (red), going down = good (green)
```

Don't forget to set the indicator position so it's visible:

```yaml
positions:
  indicator: outside    # or "inside"
```

### Positions

Control where the name, value, icon, and trend arrow appear relative to the bar.

| Position | Options | Default | What it controls |
|---|---|---|---|
| `positions.name` | `outside` / `inside` / `off` | `outside` | The sensor name label |
| `positions.value` | `outside` / `inside` / `off` | `outside` | The current value (e.g. "75%") |
| `positions.icon` | `outside` / `inside` / `off` | `off` | The sensor icon |
| `positions.indicator` | `outside` / `inside` / `off` | `off` | The trend arrow (▲/▼) |

- `outside` = above the bar
- `inside` = overlaid on the bar (works best with taller bars, e.g. `height: 40px`)
- `off` = hidden

### Animation

| Option | Type | Default | Description |
|---|---|---|---|
| `animation.state` | string | `on` | `on` = smooth transitions, `off` = instant updates |
| `animation.speed` | number | `0.8` | Transition speed in seconds |
| `animation.effect` | string | `none` | `charge` = pulsing glow effect on the bar fill |

### Severity (Color by Value)

Automatically change the bar color (and optionally the icon) based on the current value.

```yaml
severity:
  - from: 0
    to: 20
    color: "#F44336"           # red
    icon: "mdi:battery-alert"  # optional: change icon too
  - from: 21
    to: 50
    color: "#FF9800"           # orange
  - from: 51
    to: 100
    color: "#4CAF50"           # green
```

For smooth color blending between ranges, add `mode: gradient` to each entry.

### Sparkline

A mini trend line rendered behind the bar, showing recent history at a glance. Replaces the need for a separate mini-graph-card. The sparkline stretches to your `bar_width` setting, so the trend stays visible even when the current value is low.

The on/off toggle, hours, line width, points per hour, smoothing, aggregation function, refresh interval, and color are all in the visual editor.

| Option | Type | Default | Description |
|---|---|---|---|
| `sparkline` | boolean/object | `false` | `true` to enable with defaults, or an object for fine control |
| `sparkline.show` | boolean | `false` | Enable sparkline |
| `sparkline.hours_to_show` | number | `24` | How many hours of history to display |
| `sparkline.points_per_hour` | number | `1` | How many data points per hour. Higher = more detail, lower = smoother. Default 1 matches mini-graph-card |
| `sparkline.aggregate_func` | string | `avg` | How to combine values in each time slot: `avg`, `min`, `max`, `median`, `first`, `last`, `sum`, `delta`, `diff` |
| `sparkline.smoothing` | boolean | `true` | Smooth curves (true) or raw straight lines (false) |
| `sparkline.color` | string | text color | Override sparkline color (e.g. `"rgba(255,255,255,0.4)"`) |
| `sparkline.line_width` | number | `1.5` | Line thickness |
| `sparkline.update_interval` | number | `300` | How often to refresh history data, in seconds. Set higher for slow-changing sensors like battery |

```yaml
# Simple — just turn it on
type: custom:pulse-card
entity: sensor.temperature
sparkline: true

# Advanced — custom lookback and refresh
type: custom:pulse-card
entity: sensor.battery_level
sparkline:
  show: true
  hours_to_show: 48
  points_per_hour: 0.5
  aggregate_func: max
  update_interval: 1800    # 30 min — battery doesn't change fast
  line_width: 2
  color: "rgba(255, 255, 255, 0.4)"
```

Per-entity sparkline overrides work too:

```yaml
type: custom:pulse-card
sparkline: true
entities:
  - entity: sensor.cpu_usage
    sparkline:
      hours_to_show: 6
      update_interval: 120    # CPU changes fast — refresh every 2 min
  - entity: sensor.battery_level
    sparkline:
      hours_to_show: 48
      update_interval: 1800   # battery is slow — refresh every 30 min
```

### Conditional Visibility

Show or hide individual bars based on their current value. Only bars that meet the condition are displayed — the card shrinks automatically.

| Option | Type | Description |
|---|---|---|
| `visibility.state_above` | number | Show only when value > threshold |
| `visibility.state_below` | number | Show only when value < threshold |
| `visibility.state_equal` | string | Show only when state equals this string |
| `visibility.state_not_equal` | string | Show only when state does not equal this string |

Multiple conditions are AND-ed — all must be true. Unavailable/unknown entities are hidden by default.

```yaml
# Alert dashboard — only show sensors above 80%
type: custom:pulse-card
title: Alerts
entities:
  - entity: sensor.cpu_usage
    name: CPU
    visibility:
      state_above: 80
  - entity: sensor.memory_usage
    name: Memory
    visibility:
      state_above: 80
  - entity: sensor.disk_usage
    name: Disk
    visibility:
      state_above: 90
severity:
  - from: 80
    to: 90
    color: "#FF9800"
  - from: 90
    to: 100
    color: "#F44336"
```

When all sensors are healthy (below threshold), the card shows empty — just the title.

### Layout Mode

| Option | Type | Default | Description |
|---|---|---|---|
| `layout` | string | `default` | `compact` reduces padding, gaps, and font sizes for dense dashboards |

```yaml
# Compact mode — fits more data in less space
type: custom:pulse-card
title: Room Sensors
layout: compact
columns: 2
entities:
  - entity: sensor.temperature
    name: Temp
  - entity: sensor.humidity
    name: Humidity
  - entity: sensor.co2
    name: CO₂
  - entity: sensor.pm25
    name: PM2.5
```

### Tap Actions

What happens when you interact with a bar.

| Option | Default | Description |
|---|---|---|
| `tap_action` | `more-info` | Single tap — opens the entity detail popup by default |
| `hold_action` | `none` | Long press |
| `double_tap_action` | `none` | Double tap |

Available actions: `more-info`, `navigate`, `call-service`, `url`, `toggle`, `none`

Each entity in a multi-entity card can have its own tap actions.

### Slider Mode

Turn any bar into an interactive slider. Tap anywhere to jump to a value, or drag to fine-tune it.

| Option | Type | Default | Description |
|---|---|---|---|
| `interactive` | boolean/object | `false` | `true` to enable with auto-detected service, or an object for custom control |
| `interactive.step` | number | auto | Override the step increment (e.g. `0.5` for half-degree steps) |
| `interactive.service` | string | auto | Custom service call (e.g. `climate.set_temperature`) |
| `interactive.data` | object | auto | Custom service data. Use `$value` as a placeholder for the slider value |

Set `interactive: true` at the card level to make all entities interactive, or per-entity for a mix of read-only and interactive bars.

Supported entity types (auto-detected): `input_number`, `number`, `light` (brightness), `cover` (position), `fan` (percentage), `media_player` (volume), `climate` (target temperature).

```yaml
# Simple — auto-detect everything
type: custom:pulse-card
interactive: true
entities:
  - entity: input_number.heating_threshold
  - entity: number.lcd_brightness

# Climate — point at the temperature attribute
- entity: climate.living_room
  attribute: temperature
  interactive: true

# Custom service override
- entity: climate.living_room
  attribute: temperature
  interactive:
    service: climate.set_temperature
    data:
      temperature: "$value"
```

### Secondary Info

Show a second line of text below the entity name — an attribute value, static text, or when the entity last changed.

| Option | Type | Description |
|---|---|---|
| `secondary_info.text` | string | Static text (e.g. `"input · drop"`) |
| `secondary_info.attribute` | string | Show an entity attribute value (e.g. `hvac_action`) |
| `secondary_info.type` | string | `last_changed` — show relative time since last state change |

Priority when multiple are set: `text` > `attribute` > `type`.

```yaml
- entity: climate.dining
  name: Dining
  secondary_info:
    attribute: hvac_action    # shows "heating", "idle", or "off"
```

### Custom State Labels

Map entity state strings to custom display text.

| Option | Type | Description |
|---|---|---|
| `state_map` | object | Map state strings to display labels |

```yaml
- entity: switch.firewall_rule
  state_map:
    'on': Enabled
    'off': Disabled
```

### State-Based Colors

Set bar color based on the entity's state string, independent of the numeric value. Takes priority over severity.

| Option | Type | Description |
|---|---|---|
| `state_color` | object | Map state strings to bar colors |

```yaml
- entity: climate.dining
  attribute: temperature
  state_color:
    'off': '#546E7A'     # grey when HVAC is off
    'heat': '#FFA726'    # orange when heating
```

---

## Style Presets

Pulse Card ships with a minimal default (8px thin bar, labels outside). Here are ready-to-use presets for common styles.

### Default — Minimal Thin Bar

```yaml
type: custom:pulse-card
entity: sensor.battery_level
```

```
  Battery                              75%
  ┌████████████████████████████░░░░░░░░░░┐   ← 8px bar
```

### Classic — bar-card Style

Matches the original bar-card look with a chunky bar and labels inside.

```yaml
type: custom:pulse-card
entity: sensor.battery_level
height: "40px"
positions:
  icon: outside
  name: inside
  value: inside
```

```
  🔋 ┌─────────────────────────────────────┐
     │ Battery                        75%  │   ← 40px bar, text inside
     └─────────────────────────────────────┘
```

### Compact — Dashboard Overview

Ideal for packing many sensors into a small card.

```yaml
type: custom:pulse-card
title: System
columns: 2
entities:
  - sensor.cpu_usage
  - sensor.memory_usage
  - sensor.disk_usage
  - sensor.swap_usage
```

### Severity Colors

Color-coded ranges that change automatically based on value.

```yaml
type: custom:pulse-card
entity: sensor.battery_level
severity:
  - from: 0
    to: 20
    color: "#F44336"
    icon: "mdi:battery-alert"
  - from: 21
    to: 50
    color: "#FF9800"
    icon: "mdi:battery-50"
  - from: 51
    to: 100
    color: "#4CAF50"
    icon: "mdi:battery"
positions:
  icon: outside
```

### Gradient Mode

Smooth color interpolation between severity stops.

```yaml
type: custom:pulse-card
entity: sensor.temperature
min: 15
max: 35
severity:
  - from: 15
    to: 20
    color: "#2196F3"
    mode: gradient
  - from: 20
    to: 25
    color: "#4CAF50"
    mode: gradient
  - from: 25
    to: 35
    color: "#F44336"
    mode: gradient
```

### With Target Marker

Shows a reference line on the bar (e.g. target temperature).

```yaml
type: custom:pulse-card
entity: sensor.temperature
min: 15
max: 35
target:
  value: 22
  show_label: true
```

### Embed Mode (Entity Row)

Use inside an `entities` card — renders the bar without a card wrapper so it blends in as a row.

```yaml
type: entities
entities:
  - entity: light.living_room
  - type: custom:pulse-card
    entity: sensor.living_room_temperature
    entity_row: true
  - entity: switch.fan
```

### With Change Indicator

Shows trend arrow (▲/▼) comparing current value to a previous period.

```yaml
type: custom:pulse-card
entity: sensor.temperature
indicator:
  show: true
  period: 60
  show_delta: true
positions:
  indicator: outside
```

### Show Remaining (Complementary)

Flips the bar to show what's left instead of what's used. Great for "free space" or "remaining capacity" displays.

```yaml
type: custom:pulse-card
title: Disk Free
entity: sensor.disk_usage
complementary: true
severity:
  - from: 0
    to: 30
    color: "#F44336"
  - from: 30
    to: 60
    color: "#FF9800"
  - from: 60
    to: 100
    color: "#4CAF50"
```

If disk usage is 80%, the bar shows 20% (the free space) — and severity colors apply to the remaining value.

### Severity with Icon Override

Different value ranges can show different icons — useful for battery levels or signal strength.

```yaml
type: custom:pulse-card
entity: sensor.battery_level
positions:
  icon: outside
severity:
  - from: 0
    to: 20
    color: "#F44336"
    icon: "mdi:battery-alert"
  - from: 21
    to: 50
    color: "#FF9800"
    icon: "mdi:battery-50"
  - from: 51
    to: 80
    color: "#8BC34A"
    icon: "mdi:battery-70"
  - from: 81
    to: 100
    color: "#4CAF50"
    icon: "mdi:battery"
```

### Target from Another Entity

Use a dynamic target that follows another sensor or input number — the target line moves as the reference value changes.

```yaml
type: custom:pulse-card
entity: sensor.living_room_temperature
min: 15
max: 35
target:
  value: input_number.target_temperature
  show_label: true
```

### Compact 2-Column with Custom Gap

Pack more data into less space with a multi-column grid and custom spacing.

```yaml
type: custom:pulse-card
title: System Overview
columns: 2
gap: 12
entities:
  - entity: sensor.cpu_usage
    name: CPU
    color: "#2196F3"
  - entity: sensor.memory_usage
    name: Memory
    color: "#9C27B0"
  - entity: sensor.disk_usage
    name: Disk
    color: "#FF5722"
  - entity: sensor.swap_usage
    name: Swap
    color: "#009688"
```

### Mixed — Severity + Target + Indicator

Combine multiple features for a full-featured monitoring bar.

```yaml
type: custom:pulse-card
title: Server Health
entities:
  - entity: sensor.cpu_usage
    name: CPU
  - entity: sensor.memory_usage
    name: Memory
  - entity: sensor.disk_usage
    name: Disk
target:
  value: 75
  show_label: true
severity:
  - from: 0
    to: 50
    color: "#4CAF50"
    mode: gradient
  - from: 50
    to: 80
    color: "#FF9800"
    mode: gradient
  - from: 80
    to: 100
    color: "#F44336"
    mode: gradient
indicator:
  show: true
  show_delta: true
  period: 30
positions:
  indicator: outside
```

### Inverted Indicator — "Less is Better"

For sensors where rising values are bad (CPU, memory, disk usage), flip the indicator colors so up = red and down = green.

```yaml
type: custom:pulse-card
title: System Monitor
columns: 3
height: "30px"
positions:
  name: inside
  value: inside
  indicator: inside
indicator:
  show: true
  show_delta: true
  inverted: true
severity:
  - from: 0
    to: 50
    color: "#7E57C2"
    mode: gradient
  - from: 50
    to: 75
    color: "#AB47BC"
    mode: gradient
  - from: 75
    to: 100
    color: "#E91E63"
    mode: gradient
entities:
  - entity: sensor.cpu_usage
    name: CPU
  - entity: sensor.memory_usage
    name: Memory
  - entity: sensor.disk_usage
    name: Disk
```

Per-entity override — mix inverted and normal indicators in one card:

```yaml
entities:
  - entity: sensor.cpu_usage
    name: CPU
    # inherits inverted: true from card level
  - entity: sensor.battery_level
    name: Battery
    indicator:
      inverted: false   # battery up = good, override card default
```

### Sparkline — See the Trend

Add a mini history line behind the bar. No extra card needed.

```yaml
type: custom:pulse-card
title: Temperature Trend
entity: sensor.temperature
sparkline: true
height: "30px"
```

### Alert Dashboard — Conditional Visibility

Only show sensors that need attention. The card stays clean when everything is healthy.

```yaml
type: custom:pulse-card
title: System Alerts
entities:
  - entity: sensor.cpu_usage
    name: CPU
    visibility:
      state_above: 80
  - entity: sensor.memory_usage
    name: Memory
    visibility:
      state_above: 80
  - entity: sensor.disk_usage
    name: Disk
    visibility:
      state_above: 90
severity:
  - from: 80
    to: 90
    color: "#FF9800"
  - from: 90
    to: 100
    color: "#F44336"
```

### Compact Tile — Dense Dashboard

Pack more data into a small card. Works well in sections view at narrow column widths.

```yaml
type: custom:pulse-card
title: Room Sensors
layout: compact
columns: 2
entities:
  - entity: sensor.temperature
    name: Temp
  - entity: sensor.humidity
    name: Humidity
  - entity: sensor.co2
    name: CO₂
  - entity: sensor.pm25
    name: PM2.5
```

---

## bar-card Migration

Pulse Card accepts bar-card's core config keys. To migrate, change `type` to `custom:pulse-card`:

```yaml
# Before (bar-card)
type: custom:bar-card
entity: sensor.battery
severity:
  - from: 0
    to: 20
    color: red

# After (Pulse Card)
type: custom:pulse-card
entity: sensor.battery
severity:
  - from: 0
    to: 20
    color: red
```

**Key differences from bar-card:**
- Default bar height is `8px` (bar-card was `40px`)
- Default positions: name/value `outside`, icon `off`
- `rounding` is renamed to `border_radius`
- `width`, `saturation`, `hue`, `entity_config` are not supported

---

## CSS Custom Properties

Fine-tune the card's appearance using CSS custom properties. Set them via `card-mod` or in your HA theme.

| Variable | Controls | Default |
|---|---|---|
| `--pulse-card-background` | Card background color | HA theme card background |
| `--pulse-icon-color` | Icon color | `--secondary-text-color` |
| `--pulse-name-color` | Name label color | `--primary-text-color` |
| `--pulse-value-color` | Value label color | `--primary-text-color` |
| `--pulse-indicator-color` | Indicator arrow color (overrides directional colors) | Auto (green/red by direction) |
| `--pulse-track-opacity` | Bar track background opacity | `0.12` |
| `--pulse-sparkline-color` | Sparkline line color | `--primary-text-color` |
| `--pulse-secondary-color` | Secondary info text color | `--secondary-text-color` (outside), inherited (inside) |
| `--pulse-font-size` | Base font size for name, value, icon | `14px` (auto-scales inside bars) |

```yaml
type: custom:pulse-card
entity: sensor.cpu_usage
card_mod:
  style: |
    :host {
      --pulse-card-background: rgba(139, 92, 222, 0.15);
      --pulse-icon-color: #fff;
      --pulse-name-color: rgba(255, 255, 255, 0.9);
      --pulse-track-opacity: 0.08;
    }
```

### Data Attributes for card-mod

Each bar row exposes data attributes you can target with card-mod:

- `data-state` — the current numeric value (or `"unavailable"`)
- `data-entity` — the entity ID
- `data-severity-color` — the resolved severity/state color (e.g. `"#4CAF50"`)
- `data-interactive` — present when the bar is in slider mode

```yaml
type: custom:pulse-card
entity: sensor.cpu_usage
card_mod:
  style: |
    .bar-row[data-state="unavailable"] {
      opacity: 0.3;
    }
    .bar-row[data-severity-color="#F44336"] {
      /* extra styling for red severity bars */
    }
```

---

## Known Limitations

- Per-entity severity ranges are YAML-only — severity involves arrays of value ranges with colors and optional icons, which doesn't map well to a simple editor form. The visual editor handles per-entity name, color, secondary info, and interactive toggle
- `state_map`, `state_color`, and `secondary_info.type` are YAML-only — the editor supports secondary info text and attribute fields
- Conditional visibility is YAML-only — conditions are per-entity with multiple possible operators (above, below, equal, not equal) that combine with AND logic. Better expressed in YAML than a form
- Slider mode with `complementary` is not supported — if both are set, `interactive` takes priority
- The color picker uses your browser's native picker, which only supports solid hex colors. For rgba() with transparency or CSS variables, type the value directly in the text field
- Sparkline and the trend indicator both need the HA recorder component to be enabled (it is by default)
- `width`, `saturation`, `hue`, and `entity_config` from bar-card are not supported

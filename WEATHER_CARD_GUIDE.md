[← Back to README](README.md)

# Pulse Weather Card — Configuration Guide

Pulse Weather Card is a weather visualisation card for Home Assistant. It works with any `weather.*` entity and builds up progressively — a single entity gives you the essentials, and pairing it with the [Atmos CE](https://github.com/hiall-fyi/atmos_ce) integration unlocks atmospheric stability, air quality, astronomy, and weather alerts with zero extra configuration.

---

## Quick Start

Point the card at a weather entity — that's all you need:

```yaml
type: custom:pulse-weather-card
weather_entity: weather.home
sections:
  - type: overview
```

Drop `weather_entity` entirely and the card picks up the first `weather.*` entity it finds in your HA instance.

---

## Card-Level Configuration

| Option | Type | Default | Description |
|---|---|---|---|
| `weather_entity` | string | auto | Primary weather entity ID (e.g. `weather.met_office`). Auto-detects if omitted |
| `atmos_source` | string | auto | Atmos CE source slug override (e.g. `met_office`). Only needed when auto-discovery fails |
| `sections` | list | `[{type: overview}]` | Which sections to show and in what order |

### Sections

Sections are the building blocks of the card. Add them in the order you want them to appear:

```yaml
sections:
  - type: overview
  - type: forecast
  - type: meteogram
  - type: wind
  - type: astro
  - type: air_quality
  - type: alerts
  - type: atmosphere
```

### Section Compatibility

| Section | Standard weather entity | Needs Atmos CE |
|---|---|---|
| `overview` | ✅ | — (enriched with Atmos CE) |
| `forecast` | ✅ | — |
| `meteogram` | ✅ | — (enriched with Atmos CE) |
| `wind` | ✅ | — (enriched with Atmos CE) |
| `astro` | ✅ (needs `sun.sun`) | — (enriched with Atmos CE) |
| `air_quality` | — | ✅ |
| `alerts` | — | ✅ |
| `atmosphere` | — | ✅ |

Sections marked "Needs Atmos CE" require entities from the [Atmos CE](https://github.com/hiall-fyi/atmos_ce) integration. Without them the sections return nothing and take up no space.

---

## Sections

### overview

The hero section: current temperature in large type, a contextual weather summary, a day/night progress arc, a 7-day temperature sparkline, and a stats grid. It reads the Beaufort wind scale, dew-point comfort, visibility category, pressure trend, UV index, and cloud cover when Atmos CE sensors are available, and falls back gracefully to standard weather entity attributes.

| Option | Type | Default | Description |
|---|---|---|---|
| `location_label` | string | `Now` | Label shown next to the timestamp in the top-left corner of the section |
| `pro` | boolean | `true` | The brand-mark corner acts as a toggle between the default compact view and a pro view with the 7-day sparkline and extended stats. Set to `false` to make the brand mark a static decoration |

```yaml
sections:
  - type: overview
    location_label: Home
```

The day/night arc shows progress from sunrise to sunset (daytime, amber) or from sunset to tomorrow's sunrise (night, blue). Colour-coded precipitation probability bars appear below the summary when rain is in the next 12 hours. A storm-risk sparkline appears when CAPE data is available from Atmos CE.

### forecast

A 7-day forecast list. Each row shows the day, condition icon, precipitation probability (when ≥50%), a temperature range bar normalised across the week, and low/high temperatures. A current-temperature dot on today's bar shows where you are right now within today's range.

The section has no configurable options:

```yaml
sections:
  - type: forecast
```

The narrative line above the list highlights the warmest day in the week and flags any wet day (≥50% precipitation probability). Returns nothing if forecast data is unavailable.

### meteogram

A professional yr.no-style time-series chart on a shared time axis. Shows temperature as a coloured curve with area fill, precipitation as bars growing up from the baseline, cloud cover as a translucent background wash, and wind barbs (NWS standard notation) — all in one SVG.

| Option | Type | Default | Description |
|---|---|---|---|
| `horizon` | string | `short` | Time window to display. `short` = 12 hours, `long` = 24 hours |
| `hours` | number | — | Override the horizon with an explicit hour count (4–48). When set, this takes priority over `horizon` |
| `show_cloud` | boolean / `auto` | `auto` | Whether to show the cloud cover background band. `auto` shows it only when cloud data is available from Atmos CE |
| `show_wind` | boolean / `auto` | `auto` | Whether to show wind barbs on the staggered cluster. `auto` shows them when wind data is available |
| `pro` | boolean | `true` | The brand-mark corner toggles between 12-hour and 24-hour view at runtime |

```yaml
sections:
  - type: meteogram
    horizon: long
```

The staggered cluster above the temperature curve rotates through temperature labels, condition icons, and wind barbs every three hours, so the chart never gets crowded. The minimum and maximum temperature hours always show their temperature value regardless of the rotation cycle.

### wind

An animated compass rose showing wind speed and direction. The arrow and a gust cone point in the wind direction; length scales with speed. Animated wind streaks flow through the background. The centre shows speed, unit, bearing, and Beaufort scale classification.

| Option | Type | Default | Description |
|---|---|---|---|
| `speed_mode` | string | `speed` | Whether the rose centre shows wind speed (`speed`) or gust speed (`gust`) |
| `pro` | boolean | `true` | The brand-mark corner toggles between speed and gust mode at runtime |

```yaml
sections:
  - type: wind
    speed_mode: gust
```

When wind speed exceeds 80 km/h, a dashed red ring appears at the outer edge of the rose to indicate that the arrow has hit its visual cap and the real speed is higher.

### astro

A 24-hour sky-phase ribbon spanning midnight to midnight, coloured across civil twilight, blue hour, golden hour, and daytime. Shows daylight duration (or night duration when below the horizon), a moon phase hero with illumination percentage and days-to-full, and stat tiles for civil dawn/dusk, golden-hour start/end, blue-hour start/end, moonrise, and moonset.

The section has no configurable options:

```yaml
sections:
  - type: astro
```

Requires `sun.sun` in your HA instance. The twilight tile times (golden hour, blue hour) are populated from Atmos CE sensors when available; without them the ribbon still renders using sunrise and sunset as anchors.

### air_quality

An AQI gauge with a colour-coded band, pollutant breakdown, and a PM-driven atmospheric haze FX. Supports both EU AQI (0–100) and US EPA AQI (0–300) scales.

| Option | Type | Default | Description |
|---|---|---|---|
| `scale` | string | `eu` | Which AQI scale to use — `eu` (European, 0–100) or `us` (US EPA, 0–300) |
| `aqi_entity` | string | auto | Override the AQI entity. Defaults to the Atmos CE `european_aqi` or `us_aqi` sensor depending on scale |
| `pro` | boolean | `true` | The brand-mark corner toggles between EU and US scale at runtime |

```yaml
sections:
  - type: air_quality
    scale: us
```

Requires Atmos CE. Returns nothing if no AQI entity is found. The pollutant breakdown (PM2.5, PM10, NO₂, O₃, SO₂, CO) populates when individual Atmos CE pollutant sensors are present.

### alerts

A radar-style display with active weather alerts from Atmos CE's Meteoalarm integration. The radar sweep speed and colour shift with severity. Alert rows show type, time window, and affected locations.

| Option | Type | Default | Description |
|---|---|---|---|
| `alert_entities` | list | auto | Override the entity IDs to read alerts from. Auto-discovers `sensor.<slug>_active_alert`, `sensor.<slug>_upcoming_alert`, and related entities |
| `pro` | boolean | `true` | The brand-mark corner switches between a compact ticker view (default) and a full detail-card view with headline, description, and location |

```yaml
sections:
  - type: alerts
    alert_entities:
      - sensor.met_office_warnings_active_alert
      - sensor.met_office_warnings_upcoming_alert
```

When there are no active alerts, the section shows an "All Clear" radar with a calm green sweep. The pro view is only available when at least one alert is active.

### atmosphere

An atmospheric stability column visualisation showing CAPE, Lifted Index, freezing level, LCL (cloud base), wind shear, and lapse rate. A vertical column fills from the surface upward based on instability score, with the freeze level and LCL height marked as horizontal lines.

The section has no configurable options:

```yaml
sections:
  - type: atmosphere
```

Requires Atmos CE sensors: at minimum `cape`, `lifted_index`, or `freezing_level_height`. Returns nothing if none are found, with a console debug message explaining why.

The storm-risk narrative in the section header is time-aware: it names the forecast CAPE peak time when Atmos CE extended forecast is available, and adapts its wording based on whether the peak is past, imminent, or after sunset. When wind shear is the primary driver (thermal indicators all stable), the narrative names shear specifically rather than implying convective storms.

---

## Atmos CE Auto-Discovery

If you have [Atmos CE](https://github.com/hiall-fyi/atmos_ce) installed, the card detects your sensors automatically. It derives a source slug from your weather entity ID and looks for `sensor.<slug>_<key>` entities across around 50 known sensor keys.

**How slug derivation works.** For `weather.met_office_weather`, the card strips `weather.` and `_weather` to produce `met_office`, then scans for `sensor.met_office_temperature`, `sensor.met_office_cape`, and so on. If it finds fewer than 3 matching sensors, it assumes you don't have Atmos CE and falls back to standard weather entity attributes.

**When you need `atmos_source`.** If you renamed your weather entity after installing Atmos CE, the derived slug may no longer match your sensor namespace. In that case, set `atmos_source` explicitly:

```yaml
type: custom:pulse-weather-card
weather_entity: weather.my_renamed_entity
atmos_source: met_office
```

The card logs a console warning when Atmos CE-dependent sections are configured but no sensors are found, with the slug it tried.

### Extended Forecast

When Atmos CE is present, the card fetches the extended hourly forecast via `atmos_ce.get_extended_forecast` before falling back to the standard `weather.get_forecasts` service. The extended forecast adds dew point, CAPE, cloud cover layers, and precipitation type breakdown to each hourly slot, which the meteogram and overview CAPE sparkline use directly.

---

## Styling with `card-mod`

The Weather Card exposes three layers for `card-mod` or theme overrides: CSS custom properties, class selectors, and the card's own design token set.

### CSS Custom Properties

**Family tokens** (shared with every Pulse card — override once, all cards update):

| Variable | Controls | Default |
|---|---|---|
| `--pulse-bg-card` | Card background colour | HA theme card background |
| `--pulse-text-primary` | Primary text colour | HA theme primary text |
| `--pulse-text-secondary` | Secondary text colour | HA theme secondary text |
| `--pulse-glass-blur` | Frosted glass blur radius | `20px` (Weather overrides the 8px shared default) |

**Weather Card tokens (`--pw-*`):**

| Variable | Controls | Default |
|---|---|---|
| `--pw-sky-top` | Top of the cartouche sky gradient | `#1d2530` |
| `--pw-sky-mid` | Middle of the sky gradient | `#384452` |
| `--pw-sky-bot` | Bottom of the sky gradient | `#827a6a` |
| `--pw-ink-cream` | Primary text on the dark sky background | `#fdf6e3` |
| `--pw-ink-cream-muted` | Muted text (labels, axis ticks) | `rgba(229, 217, 194, 0.85)` |
| `--pw-ink-cream-dim` | Dim text (secondary labels) | `rgba(229, 217, 194, 0.55)` |
| `--pw-vermilion` | Accent colour (now-line, max temp) | `#a83d2a` |
| `--pw-wind` | Wind / min-temp / blue-hour accent | `#5ac8fa` |
| `--pw-warn-amber` | Amber warning (golden hour, moderate risk) | `#ff9f0a` |
| `--pw-warn-red` | Red warning (high severity) | `#ff453a` |
| `--pw-warn-yellow` | Yellow warning (moderate AQI) | `#ffd60a` |
| `--pw-good-green` | Good / stable indicator | `#30d158` |
| `--pw-hero-size` | Hero temperature font size | `72px` |
| `--pw-pad-x` | Section left/right padding | `24px` |
| `--pw-pad-y` | Section top/bottom padding | `22px` |

```yaml
type: custom:pulse-weather-card
weather_entity: weather.home
sections:
  - type: overview
card_mod:
  style: |
    :host {
      --pw-sky-top: #0a1020;
      --pw-sky-bot: #6a5a4a;
      --pw-hero-size: 64px;
    }
```

### Class Selectors

**Card shell:**

| Selector | What it targets |
|---|---|
| `.pw-card` | The outer card wrapper (inside `<ha-card>`) |
| `.pw-section` | Each section root — one per section in your config |
| `.pw-cartouche` | The inner frame for each section (sky-gradient background with an inset border) |

**Section containers:**

| Selector | What it targets |
|---|---|
| `.pw-overview-v2` | Overview section root |
| `.pw-forecast-v2` | Forecast section root |
| `.pw-wind-v2` | Wind section root |
| `.pw-air-quality-v2` | Air quality section root |
| `.pw-astro-v2` | Astro section root |
| `.pw-alerts-v2` | Alerts section root |
| `.pw-atmosphere-v2` | Atmosphere section root |
| `.pw-meteogram-v2` | Meteogram section root |

**Overview:**

| Selector | What it targets |
|---|---|
| `.pw-loc-stamp` | Location label and timestamp line |
| `.pw-hero-block` | Hero temperature and condition line |
| `.pw-day-arc` | The sunrise/sunset progress arc |
| `.pw-overview-spark` | The 7-day sparkline container (pro view) |

**Forecast:**

| Selector | What it targets |
|---|---|
| `.pw-fc-list` | The day-row list |
| `.pw-fc-row` | One forecast day row |
| `.pw-fc-row.is-today` | Today's row |
| `.pw-fc-day` | Day label (e.g. "today", "mon") |
| `.pw-fc-bar`, `.pw-fc-bar-fill` | Temperature range bar and its fill |
| `.pw-fc-now` | The current-temperature dot on today's bar |
| `.pw-fc-lo`, `.pw-fc-hi` | Low and high temperature labels |
| `.pw-fc-pop` | Precipitation probability label |

**Wind:**

| Selector | What it targets |
|---|---|
| `.pw-rose-wrap` | The compass rose wrapper (receives the shake animation) |
| `.pw-rose-svg` | The SVG rose |
| `.pw-wind-center` | The centre overlay with speed, unit, bearing, and Beaufort |
| `.pw-wind-speed` | Speed number |
| `.pw-wind-unit` | Unit + bearing label |
| `.pw-wind-beaufort` | Beaufort scale name |
| `.pw-wind-beaufort-desc` | Beaufort description |
| `.pw-wind-streaks` | Wind streak animation layer |

**Air quality:**

| Selector | What it targets |
|---|---|
| `.pw-aq-band` | The 5-tier AQI colour band |
| `.pw-aq-marker` | The current value marker on the band |
| `.pw-aq-band-labels` | The band labels (good, moderate, etc.) |

**Astro:**

| Selector | What it targets |
|---|---|
| `.pw-astro-rb` | The 24-hour sky-phase ribbon |
| `.pw-astro-rb-track` | The gradient track inside the ribbon |
| `.pw-astro-rb-now` | The current-time marker on the ribbon |
| `.pw-astro-moon-hero` | The moon glyph + phase name row |
| `.pw-astro-hero` | The daylight/night duration hero |
| `.pw-astro-v2.is-night` | Astro section when below the horizon |

**Alerts:**

| Selector | What it targets |
|---|---|
| `.pw-alerts-green` | Alerts section when all-clear |
| `.pw-alerts-amber` | Alerts section when severity 1–3 alerts are active |
| `.pw-alerts-red` | Alerts section when severity 4 alerts are active |
| `.pw-radar` | The radar display |
| `.pw-radar-blip` | An active alert blip on the radar |
| `.pw-alert-ticker` | One compressed alert ticker row |
| `.pw-alert-amber`, `.pw-alert-red` | Tone modifier on ticker rows |
| `.pw-alert-detail` | One full detail card (pro view) |

**Atmosphere:**

| Selector | What it targets |
|---|---|
| `.pw-atmos-column` | The vertical stability column |
| `.pw-atmos-cape-fill` | The CAPE fill inside the column |
| `.pw-atmos-freeze-marker` | The freezing level horizontal marker |
| `.pw-atmos-lcl-marker` | The LCL (cloud base) horizontal marker |
| `.pw-atmos-scale` | The altitude scale labels on the left |
| `.pw-atmos-detail-grid` | The tap-to-expand detail panel |

**Meteogram:**

| Selector | What it targets |
|---|---|
| `.pw-meteogram-chart` | The chart container |
| `.pw-meteogram-cloud-bg` | The cloud cover background band (outside the SVG) |

```yaml
type: custom:pulse-weather-card
weather_entity: weather.home
sections:
  - type: overview
card_mod:
  style: |
    .pw-section + .pw-section {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .pw-alerts-v2.pw-alerts-red .pw-radar {
      box-shadow: 0 0 20px rgba(255, 69, 58, 0.3);
    }
```

---

## The Brand-Mark Toggle

Each section has a small brand-mark in the corner. On sections that support it, the brand mark is a button that swaps between two views or modes at runtime without changing your YAML config. The current behaviour per section:

| Section | Toggle action |
|---|---|
| `overview` | Default compact view ↔ pro view (7-day sparkline + extended stats) |
| `forecast` | Static decoration (no toggle) |
| `wind` | Speed mode ↔ gust mode |
| `air_quality` | EU AQI scale ↔ US AQI scale |
| `astro` | Static decoration (no toggle) |
| `alerts` | Compact ticker ↔ full detail cards (only when alerts are active) |
| `atmosphere` | Static decoration (no toggle) |
| `meteogram` | 12-hour view ↔ 24-hour view |

Set `pro: false` on any section to convert the brand mark to a static decorator and disable the toggle. The toggle state resets on page reload — it is runtime-only.

---

## Known Limitations

- **History-based features need a sensor entity** — sparklines and CAPE trend data read from Atmos CE's extended forecast or the standard `weather.get_forecasts` service. Climate entities don't expose hourly history the same way sensors do
- **Atmos CE extended forecast is hourly only** — daily forecast data always comes from the standard `weather.get_forecasts` (daily) service regardless of whether Atmos CE is installed
- **`show_wind` in the meteogram** only controls the wind barbs in the staggered cluster; wind streaks in the wind section are always shown when wind data is available
- **Forecast data refreshes every 30 minutes** — the card does not subscribe to forecast push updates, so the chart lags behind real-time changes by up to 30 minutes. Reloading the page forces an immediate refresh
- **Alerts rely on Atmos CE Meteoalarm** — the standard HA `weather.*` entity does not carry alert data. Without Atmos CE, the `alerts` section has nothing to display
- **Moon phase is approximate** — the phase glyph and illumination percentage come from Atmos CE `moon_phase` sensor attributes. Without Atmos CE, the astro section still shows sunrise/sunset and the 24-hour ribbon, but the moon row shows a plain disc with no illumination data
- **Multiple cards on the same view** — works, but each card makes its own forecast fetch independently. If you need several weather cards on one view, consider using a single card with multiple sections instead

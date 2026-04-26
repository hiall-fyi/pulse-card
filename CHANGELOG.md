# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.2.0] - 2026-04-26

**External sensor auto-detection, discovery fixes, and visual polish.**

### New

- **External sensor auto-detection** ([#29](https://github.com/hiall-fyi/pulse-card/issues/29) - @Si-Hill) — if you've configured an external temperature or humidity sensor in Tado CE (e.g. Sonoff Zigbee SNZB-02D), the card now picks it up automatically and uses it for graphs, thermal strips, comfort heatmaps, and sparklines. External sensors typically report every few minutes, so your history charts will be noticeably denser. No YAML changes needed — the card reads the `external_temp_sensor` and `external_humidity_sensor` attributes from your climate entity
- **Source indicator on history sections** — when a zone's history data comes from an external sensor, a small label appears next to the zone name showing the sensor's friendly name. Hover for the full entity ID. Helps you understand why your graphs might differ from the Tado app
- **"Waiting for data" vs "No data"** — when an external sensor is configured but hasn't accumulated history yet (e.g. just paired), the card shows "Waiting for data" instead of "No data" so you know it's working, just needs time
- **Zone icons** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — custom icons set via `icon: mdi:sofa` in your zone config now render next to the zone name

### Bug Fixes

- **Thermal strip no longer shows black cells at the start** — the first few time slots in thermal and comfort strips appeared black when history data started slightly before the visible window. The card now carries forward the last known reading, so early slots show the correct temperature colour
- **Empty heatmap cells are now visually distinct** — cells with no data now show a subtle diagonal stripe pattern instead of a solid dark colour that looked like a temperature reading
- **Tado CE sensors discovered for v2.x upgrade users** ([#29](https://github.com/hiall-fyi/pulse-card/issues/29) - @Si-Hill, [Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — if you first installed Tado CE before v3.0, your sensors kept the old internal identifiers. The card now recognises both old and new formats, so temperature, humidity, mold risk, and all other zone sensors are discovered correctly
- **Multi-valve zones show all battery chips** — rooms with two or more TRVs now show a battery chip for each valve, not just the first one found
- **Prominent sparkline colors no longer bleed between zones** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — each zone's prominent sparkline now uses its own SVG gradient, so setting different colors per zone works as expected
- **History fetch deduplication** — when an external sensor entity matches the discovered sensor, the card no longer fetches the same entity twice

## [1.1.0] - 2026-04-25

**Performance, reliability, and international compatibility.**

### Bug Fixes

- **Charts and sparklines now load on page refresh** ([#29](https://github.com/hiall-fyi/pulse-card/issues/29) - @Si-Hill) — history-based sections (graphs, thermal strips, comfort heatmaps, sparklines) showed empty data after refreshing the dashboard. The card now re-fetches history on reconnect and preserves cached data across page navigations
- **Radial shimmer and interactions survive updates** — the arc glow animation and tap-to-select stopped working after a zone's temperature changed. Now they re-bind correctly after each update
- **Entity discovery now works in any language** ([#28](https://github.com/hiall-fyi/pulse-card/issues/28) - @dragorex71) — if your Home Assistant is set to Italian, German, or any non-English language, Tado CE sensors get translated names and the card couldn't find them. The card now looks up sensors by their stable internal identifier instead of matching names, so all sections work regardless of your HA language
- **Battery and connection chip discovery** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — battery and connection sensors are now discovered correctly. These are device-level entities with a different naming pattern that the previous scanner missed. Multi-device zones (e.g. a room with two TRVs) show both battery sensors
- **Battery chip icons now match the actual state** — the battery chip was comparing against uppercase states ("LOW") but Tado CE reports Title Case ("Low"). Icons and colors now resolve correctly for Normal, Low, and Critical states
- **Condensation chip no longer shows when there's no risk** — heating zones report "None" when condensation risk is zero. The chip now hides in that case instead of showing a meaningless "None" label

### Improvements

- **Dramatically lower CPU usage on multi-card dashboards** ([#27](https://github.com/hiall-fyi/pulse-card/issues/27) - @hapklaar) — dashboards with many climate cards no longer spike CPU to 200%. Updates are now throttled and batched, and the card only tracks entities it actually uses instead of watching everything
- **Cards on the same page share history data** — multiple climate cards no longer make separate data requests for the same sensors. The first card to fetch shares its data with all other cards on the page
- **Cards on the same page share sensor discovery** — the scan that finds your Tado CE sensors now runs once and is shared across all cards, instead of each card scanning independently
- **Zone updates skip when nothing changed** — the card now checks if any zone actually changed before doing work. On a dashboard with 15 zones and 50 cards, this avoids thousands of unnecessary checks per second
- **History refresh preserves your interactions** — the 5-minute data refresh no longer rebuilds environment, thermal, and schedule sections. If you had a panel expanded or an item selected, it stays exactly as you left it
- **Detail panel sparklines render instantly** — tapping a zone in the thermal strip or comfort heatmap now shows the sparkline immediately. The chart paths are prepared in advance when data arrives, not computed on every tap
- **Tapping a zone always shows the latest data** — if you tap a zone 5 minutes after the last refresh, the detail panel now shows the current temperature and history, not stale data from the last refresh
- **No more listener buildup on long-running dashboards** — re-rendering a section now cleanly removes old interactions before adding new ones, preventing slowdowns on dashboards that stay open for hours
- **Smarter refresh targeting** — updating a section that doesn't have tappable chips (like a graph) no longer triggers unnecessary work on unrelated sections
- **Styles shared across all cards** — on modern browsers, the card's stylesheet is parsed once and shared across all instances instead of each card parsing its own copy. Older browsers work exactly as before

### Documentation

- **Section compatibility table** ([#28](https://github.com/hiall-fyi/pulse-card/issues/28) - @dragorex71) — the Climate Card Guide now has a clear table showing which sections work with any climate entity and which need Tado CE
- **Donut section requires a source** — the guide now explains that you need to specify `source: api_breakdown`, `source: homekit_saved`, or custom `segments` for the donut chart to render
- **Tado CE sections list required entities** — each Tado CE section now documents which `sensor.tado_ce_*` entities it needs

## [1.0.0] - 2026-04-24

**Pulse Climate Card — your climate dashboard in one card.**

This release introduces Pulse Climate Card alongside Pulse Card. Both cards ship in a single install and share the same Pulse DNA — clean typography, HA theme integration, and a visual editor — but each has its own personality. Pulse Card is minimal and compact. Pulse Climate Card is expressive and data-rich, with glowing power bars, animated energy flow with particles, heat shimmer, frosted glass panels, and a radial thermal compass.

### Pulse Climate Card (New)

- **Your whole climate system at a glance** — see every zone's temperature, target, humidity, HVAC status, and heating power on one card. Works with any thermostat — Tado, Ecobee, Nest, or a generic `climate.*` entity
- **14 ways to visualise your data** — pick from zones, temperature graph, radial thermal compass, energy flow animation, thermal strip, comfort heatmap, donut chart, and seven Tado CE sections. Drag them into any order you like
- **Tado CE? Zero setup** — the card scans for your Tado CE sensors and fills in mold risk, comfort levels, open window alerts, battery status, and more. You don't configure anything — it just appears
- **Tap and drag to set temperature** — turn on the interactive slider and adjust your target temperature right from the card. Tap to jump, drag to fine-tune
- **Three sparkline styles** — a subtle overlay behind the gauge, a prominent filled chart below the header, or the full pulse mode where the waveform becomes the zone's background and active zones glow
- **Energy flow with particle animation** — watch tiny dots travel along the energy flow lines from your boiler to each zone. Particle size and speed scale with heating power — busier zones get bigger, faster particles
- **Heat shimmer on high-power zones** — in the radial view, zones heating above 50% show a subtle wavy distortion on their arcs, like hot air rising
- **Frosted glass panels** — the radial center display, zone detail panels, and tooltips use a frosted glass effect. You can customise the blur and background colour — see the [Configuration Guide](CLIMATE_CARD_GUIDE.md#css-custom-properties)
- **Temperature change flash** — when a zone's temperature changes, its power bar and radial arc briefly flash brighter, so you can spot changes at a glance
- **Respects reduced motion** — if you have "reduce motion" enabled in your OS settings, all animations are disabled automatically. No config needed
- **Works on light and dark themes** — all colours, glows, and effects look right on any HA theme
- **Visual editor** — add zones, pick sections from grouped panels, and tweak settings like graph hours and outside temperature entity — all without touching YAML
- **Tap, hold, and double-tap** — every zone row and chip responds to your touch. Tap a chip to open its source entity, hold a zone to navigate somewhere, or double-tap for a custom action
- **Full configuration guide** — everything you need is in [CLIMATE_CARD_GUIDE.md](CLIMATE_CARD_GUIDE.md)

### Pulse Card

- **Build your own labels with templates** — use `{attribute_name}` placeholders in secondary info to show dynamic text from entity attributes. `{bytes}` and `{packets}` are automatically formatted as human-readable numbers. Set it once at card level and every entity inherits the same format
- **Auto-color bars by attribute** — set `attribute_color` at card level to colour bars based on an entity attribute. Map firewall `action: drop` to red and `action: accept` to green — every entity picks up its colour automatically
- **Card-level secondary info default** — set `secondary_info` once and all entities inherit it. Per-entity overrides still work when you need something different
- **Icons sit where they should** ([#24](https://github.com/hiall-fyi/pulse-card/issues/24) - @ChrisMarriott38) — icons inside and outside bars are now properly centred with the text
- **Card-level min/max now works** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @Si-Hill) — setting min and max in the Bar Limits section now applies to all bars as expected. Previously only per-entity min/max worked
- **Tap feedback** — bar rows now show a ripple effect when you tap them, matching the feel of built-in HA cards
- **Full configuration guide** — moved to [PULSE_CARD_GUIDE.md](PULSE_CARD_GUIDE.md). The README is now a concise landing page for both cards

### Under the Hood

- **Faster dashboard loads** — editor code only loads when you open the editor, so the cards themselves are lighter
- **Shared foundations** — both cards share the same action handling and editor helpers, so they behave the same way everywhere

## [0.5.0] - 2026-04-19

**Slider mode, step buttons, and state-based colors**

### Added

- **Slider mode** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2), [Discussion #19](https://github.com/hiall-fyi/pulse-card/discussions/19) - @ChrisMarriott38) — add `interactive: true` to any entity and the bar becomes a slider. Tap anywhere to jump to a value, or drag to fine-tune it. Works with input numbers, number helpers, lights (brightness), covers (position), fans (speed), media players (volume), and climate entities (target temperature). Min, max, and step are picked up from the entity automatically
- **Step buttons** ([Discussion #19](https://github.com/hiall-fyi/pulse-card/discussions/19) - @ChrisMarriott38) — interactive bars now have − and + buttons on each side for precise adjustments. Tap for a single step, hold to repeat. Step size follows the entity's attributes (e.g. 0.5°C for Tado TRVs) or your `interactive: { step: 0.5 }` override
- **State-based bar colors (`state_color`)** — set bar colors based on the entity's state string, independent of the numeric value. Useful for climate entities where you want "off" zones greyed out while active zones keep their severity colors
- **Custom service override** — for entity types not in the built-in list, you can specify the service call directly: `interactive: { service: "climate.set_temperature", data: { temperature: "$value" } }`

### Improved

- **Climate entity support** — bars for climate entities now correctly use `min_temp` and `max_temp` from the entity attributes for the fill range. The slider auto-detects `climate.set_temperature` and reads `target_temp_step` for the step size
- **Secondary info readability** — the secondary text inside colored bars now inherits the parent text color instead of using hardcoded white, so it's readable in both light and dark themes
- **Sparkline color** — removed a hardcoded dark fallback color that could make sparklines invisible on dark themes

### Fixed

- **Actions always use the latest entity state** — tap, hold, double-tap, and slider interactions now read the current Home Assistant state at the moment you interact, not a stale snapshot from when the card first loaded

## [0.4.0] - 2026-04-18

**Binary entities, secondary info, and custom state labels**

### Added

- **Binary/switch entity support** — Pulse Card now handles on/off entities natively. Switches, input booleans, locks, covers, and media players display as filled bars with meaningful text ("On", "Off", "Open", "Closed") instead of showing "Unavailable". Severity colors work automatically — set green for on, red for off
- **Secondary info line** — show extra context below the entity name. Use `secondary_info: { text: "input · drop" }` for static text, `secondary_info: { attribute: "chain" }` to show an entity attribute, or `secondary_info: { type: "last_changed" }` to show when the entity last changed state. Configurable in the visual editor
- **Custom state labels (`state_map`)** — map state strings to your own display text. Show "Enabled"/"Disabled" instead of "On"/"Off" for firewall rules, or "Armed"/"Disarmed" for alarms
- **Toggle action** — use `tap_action: { action: toggle }` to toggle switches directly from the card without writing a full `call-service` config
- **Responsive columns** — multi-column layouts automatically collapse to a single column on narrow screens (under 300px card width), so bars stay readable on phones
- **Severity data attribute** — each bar row now carries `data-severity-color` with the resolved severity color, so card-mod users can target specific severity states with custom CSS

## [0.3.2] - 2026-04-14

### Fixed

- **Sparkline now appears immediately after enabling** — previously you had to refresh the page after toggling sparkline on in the editor. The card now fetches history data as soon as the config changes
- **Stale data cleared on config change** — switching entities no longer leaves old sparkline or indicator data lingering in memory

### Improved

- **Numeric config values are now coerced** — animation speed, columns, and sparkline line width are guaranteed to be numbers even if your YAML has them as strings, preventing potential rendering issues

## [0.3.1] - 2026-04-09

### Fixed

- **HACS download now works correctly** ([#21](https://github.com/hiall-fyi/pulse-card/issues/21) - @ChrisMarriott38) — the v0.3.0 release was missing the built JS files as release assets, so HACS downloaded the raw source instead of the bundled card. This caused 404 errors and the card not loading. The release process is now fixed

## [0.3.0] - 2026-04-08

### Added

- **Color Picker** ([#8](https://github.com/hiall-fyi/pulse-card/issues/8), [Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @ChrisMarriott38) — pick bar colors visually instead of typing hex codes. A color swatch sits next to every color field — click it to open your browser's color picker, or keep typing values directly
- **Sparkline in the Editor** — the visual editor now has all the most common sparkline settings: on/off, hours to show, line width, points per hour, smoothing, aggregation function, refresh interval, and color. Toggle Sparkline on and the fields appear right below
- **More Settings in the Editor** — indicator inverted mode, clamp value, and invert fill are now in the visual editor. Previously these were YAML-only
- **State Data Attribute** — each bar row now carries a `data-state` attribute with the current numeric value (or `"unavailable"`), so you can target specific states with card-mod

### Improved

- **Sparkline fills to bar width** ([#21](https://github.com/hiall-fyi/pulse-card/issues/21) - @ChrisMarriott38) — the sparkline trend line now stretches to your `bar_width` setting instead of shrinking with the current value. A sensor at 10% still shows the full trend across the bar track area
- **Editor redesigned** — settings are now organized with expandable panels for Bar Limits, Indicator, and Animation. Common settings (title, layout, color, height, positions, sparkline) stay visible at the top, advanced options are tucked away until you need them
- **Fewer redundant calculations** — bar width scaling and bar state are now computed once per entity instead of multiple times per update cycle
- **New brand identity** — refreshed icon and logo with a richer, layered design. Dark mode variants included

## [0.2.1] - 2026-04-06

### Fixed

- **Sparkline no longer spills past the bar** ([#18](https://github.com/hiall-fyi/pulse-card/issues/18) - @ChrisMarriott38) — the trend line now stays inside the colored portion of the bar instead of stretching across the empty track area

## [0.2.0] - 2026-04-05

### Added

- **Sparkline Trend Line** — see recent history right behind the bar, no extra card needed. Turn it on with `sparkline: true` and customize how far back to look (`hours_to_show`), how smooth the line is (`points_per_hour`), how values are combined (`aggregate_func`: avg, min, max, median), line thickness (`line_width`), and color. Per-entity overrides let you show 6 hours for CPU but 7 days for battery — all in one card
- **Conditional Visibility** — show bars only when they meet a condition. Set `visibility: { state_above: 80 }` on an entity and it only appears when the value crosses that threshold. Combine multiple conditions (AND logic) and pair with severity colors for an "alerts only" dashboard that stays clean when everything is healthy
- **Compact Mode** — `layout: compact` tightens padding, gaps, and font sizes so you can fit more bars into less space. Works well in sections view at narrow column widths
- **Font Size Control** — `font_size` sets the base text size for name, value, and icon. Or leave it unset and inside-bar text auto-scales to fit the bar height
- **Sparkline Color Variable** — new `--pulse-sparkline-color` CSS custom property for theme-level sparkline color control

### Improved

- Visual editor redesigned with a compact 3-column layout — all settings now fit on screen without scrolling, even in Sections view. Font Size, Invert Fill, and Clamp Value are no longer YAML-only
- Icons inside bars now match the text color instead of grey — much easier to read on colored fills
- Icon size scales with text size instead of staying fixed — stays proportional whether you're using default, compact, or custom font sizes
- Inside-bar text and icons now auto-scale to the bar height — a 30px bar gets smaller text, a 60px bar gets larger text, no manual tuning needed
- Tap action errors (e.g. calling a service that doesn't exist) are now caught and logged instead of silently failing

## [0.1.8] - 2026-04-02

### Added

- **Inverted Indicator Colors** — new `indicator.inverted` option flips the trend arrow colors so "up" shows red and "down" shows green. Ideal for CPU, memory, and disk usage where rising values are bad. Works at card level or per-entity
- **CSS Custom Properties** — you can now fine-tune colors and opacity without `card-mod` hacks. Available variables: `--pulse-card-background`, `--pulse-icon-color`, `--pulse-name-color`, `--pulse-value-color`, `--pulse-indicator-color`, `--pulse-track-opacity`

### Improved

- Change indicator now shows the unit of measurement (e.g. `▲ +0.3%` instead of `▲ +0.3`) and respects the decimal precision setting
- Change indicator no longer shows nonsense values when a sensor's unit was changed in HA (e.g. bytes → GB) — the card detects the mismatch and shows neutral instead

## [0.1.7] - 2026-03-26

### Improved

- Sensor values now respect Home Assistant's display precision setting — if you've configured decimal places for a sensor in HA (or the integration provides a default), the card uses that automatically instead of showing raw floats like "10.0992555831266%". You can still override with the `decimal` config option
- The card now loads faster on your dashboard — the visual editor and its dependencies are only loaded when you actually open the editor, not on every page view
- Entities in an `error` state are now handled the same as `unavailable` and `unknown` — showing "Unavailable" instead of a broken bar

## [0.1.6] - 2026-03-23

### Added

- **Bar Width Limit** ([#12](https://github.com/hiall-fyi/pulse-card/issues/12) - @ChrisMarriott38) — new `bar_width` setting (1–100) controls how much of the bar track the fill can use. Keeps the colored bar from overlapping your value text and change indicators at high percentages. Available in the visual editor next to Target, or per-entity in YAML
- **Entity Reorder** ([#8](https://github.com/hiall-fyi/pulse-card/issues/8) - @ChrisMarriott38) — you can now move entities up and down in the visual editor using ▲/▼ buttons. No more cutting and pasting in the code editor to rearrange bars

### Improved

- Name and Color fields in the visual editor now update the preview as you type, matching the behavior of other Card Settings fields ([#8](https://github.com/hiall-fyi/pulse-card/issues/8) - @ChrisMarriott38)

## [0.1.5] - 2026-03-22

### Added

- Visual editor now shows Name and Color fields for each entity — you can set per-entity display names and colors without switching to YAML

### Improved

- Your config values are now validated before rendering — the card won't break from unexpected characters in color, height, or gap settings

## [0.1.4] - 2026-03-20

### Fixed

- Inside mode layout now matches outside mode — name, value, icon, and indicator are properly grouped left/right instead of spreading into equal columns ([#9](https://github.com/hiall-fyi/pulse-card/issues/9))

## [0.1.3] - 2026-03-20

### Added

- Visual editor now supports more settings — Decimals, Target value, Indicator on/off, Indicator position, Lookback period, Show Change Amount, and Animation speed can all be configured without YAML
- Version number now shows in the browser console (e.g. `PULSE-CARD v0.1.3`) for easier troubleshooting

### Improved

- Visual editor is now organized into three clear sections: Card Settings, Layout, and Display — no more scrolling through one long list
- Visual editor labels are simpler — "Name", "Value", "Icon" instead of "Name Position", "Value Position", etc.
- Cards with multiple entities and indicators load faster — history data is now fetched in one go instead of one call per entity
- External URLs opened via tap actions are now handled more securely
- Loading the card resource twice no longer causes an error
- If the editor's helper components fail to load, the editor still works instead of breaking
- Icons no longer show a broken placeholder when the value is empty

### Fixed

- Visual editor no longer writes `animation: { effect: "none" }` to your config when the effect is set to the default — keeps your YAML clean
- Visual editor now preserves `target.show_label` when you edit the target value — previously switching between YAML and the visual editor would lose the label setting
- Entity names with special characters now display correctly

## [0.1.2] - 2026-03-19

### Fixed

- Gap setting now works when you type a plain number like `8` — it's automatically treated as `8px` ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))
- Card now takes up the full width in Sections view instead of only half

## [0.1.1] - 2026-03-19

### Added

- New `gap` setting to control the space between bars — configurable via the visual editor or YAML (e.g. `gap: 8` or `gap: 16px`) ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))

### Removed

- Vertical bar direction (`direction: up`) has been removed — the feature was experimental and not well suited for a bar card. Use a dedicated charting card for vertical layouts ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))

## [0.1.0] - 2026-03-18

### Added

- Horizontal bar display for any numeric sensor
- Multiple entities in a single card with per-entity overrides
- Severity-based color ranges with gradient mode
- Visual editor for card settings and entity management
- Target marker overlay (static value or entity ID)
- Change indicator (▲/▼) comparing current value to history
- Tap, hold, and double-tap actions
- Charge animation effect
- Entity row mode (for use inside entities card)
- Multi-column grid layout
- Sections view and masonry view support
- Auto-detect min/max from entity attributes
- Display entity attributes instead of state
- Configurable bar height, border radius, and animation speed
- Dark and light theme support
- Keyboard and screen reader accessibility
- HACS installation support

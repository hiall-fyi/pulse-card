var tr="1.10.0";var rr=tr,Ie="pulse-weather-card",ar="pulse-weather-card-editor",ne="Pulse Weather Card:",or=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],tt={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},rt=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],at=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],ot=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var Ft=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],At=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var Oe=80,nr=35;var Et=.6,ir=90,sr=60,lr=40,Ct=8;var Nt=1800*1e3,cr=7,pr=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],dr={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"};function Ve(e){return e>=4?"red":e===3?"amber":"yellow"}var ur={yellow:"#FFFF00",amber:"#FF9F0A",red:"#FF0000"};var mr=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],fr=["active_alert","upcoming_alert","alert_count"],Rt="_weather",hr=3;var wr={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},J=29.53,gr=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var br=`
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pulse Card Family: Shared Design Tokens
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

:host {
  /* \u2500\u2500 Text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-text-primary: var(--primary-text-color);
  --pulse-text-secondary: var(--secondary-text-color);
  --pulse-text-disabled: var(--disabled-text-color, var(--secondary-text-color));

  /* \u2500\u2500 Backgrounds \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-bg-card: var(--ha-card-background, var(--card-background-color));
  --pulse-bg-secondary: var(--secondary-background-color);
  --pulse-bg-elevated: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-bg-hover: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
  --pulse-bg-selected: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent);

  /* \u2500\u2500 Borders \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-border-divider: var(--divider-color);
  --pulse-border-subtle: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-border-medium: color-mix(in srgb, var(--primary-text-color) 10%, transparent);

  /* \u2500\u2500 Accent \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-accent: var(--primary-color, #03A9F4);

  /* \u2500\u2500 Status \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-status-green: var(--label-badge-green, #4CAF50);
  --pulse-status-red: var(--label-badge-red, #F44336);
  --pulse-status-yellow: var(--label-badge-yellow, #FF9800);
  --pulse-status-blue: var(--label-badge-blue, #2196F3);

  /* \u2500\u2500 Info / Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-info-color: var(--info-color, #5AC8FA);
  --pulse-disabled: var(--disabled-color, #bdbdbd);

  /* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-glass-bg: var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75)));
  --pulse-glass-blur: 8px;
  --pulse-glass-border: transparent;

  /* \u2500\u2500 Typography Scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-title: 16px;
  --pulse-font-body: 14px;
  --pulse-font-label: 11px;
  --pulse-font-caption: 10px;
  --pulse-font-micro: 9px;

  /* \u2500\u2500 Font Weights \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-weight-hero: 100;
  --pulse-weight-thin: 200;
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Extended typography scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-display: 64px;        /* Weather hero temp; future Climate display numbers */
  --pulse-font-hero: 32px;           /* Climate radial centre; secondary hero */
  --pulse-font-summary: 24px;        /* summary stat numbers (home-status, ranking) */
  --pulse-font-large: 20px;          /* large hero-adjacent numbers (zone pulse, home-status label) */
  --pulse-font-stat: 18px;           /* mid-emphasis stat values (flow temp, home-status zone actual) */
  --pulse-font-section-title: 17px;  /* Weather pw-status-label equivalent */
  --pulse-font-kicker: 12px;         /* uppercase top-of-section labels */

  /* \u2500\u2500 Letter-spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-ls-display: -1.5px;
  --pulse-ls-hero: -1px;
  --pulse-ls-title: -0.8px;
  --pulse-ls-kicker: 0.32em;
  --pulse-ls-micro: 0.14em;

  /* \u2500\u2500 Tier colours (Apple system, promoted from Weather) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-tier-calm: #5ac8fa;
  --pulse-tier-moderate: #30d158;
  --pulse-tier-strong: #ff9f0a;
  --pulse-tier-gale: #ff453a;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-cartouche: 24px;            /* outer frame on Climate hearth + Weather cartouche */
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-pill: 6px;
  --pulse-radius-small: 4px;
  --pulse-radius-tight: 3px;                 /* state tags, slim chips */
  --pulse-radius-bar: 2px;
  --pulse-radius-hairline: 1px;              /* sub-pixel cells, day arc, slot bars */
  --pulse-radius-circle: 50%;                /* dots, donut centres, circular markers */

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card-wide: 20px;     /* weather chrome: wider inset for hero/cartouche layouts */
  --pulse-space-card: 16px;          /* card-edge padding, section margins */
  --pulse-space-panel: 14px;         /* glass-panel inner pad, cartouche inset */
  --pulse-space-section: 12px;       /* between section blocks */
  --pulse-space-row: 10px;           /* between row items */
  --pulse-space-element: 8px;        /* between elements within a row */
  --pulse-space-chip: 6px;           /* chip gap, dense flex gap */
  --pulse-space-tight: 4px;          /* labels, status tags */
  --pulse-space-hairline: 2px;       /* sub-pixel cell gaps, micro padding */
  --pulse-space-pin: 1px;            /* one-pixel anchor offsets */

  /* \u2500\u2500 Animation timing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-anim-instant: 0.05s;     /* flash, sub-frame feedback */
  --pulse-anim-fast: 0.15s;        /* hover backgrounds, ripple onset */
  --pulse-anim-base: 0.2s;         /* default colour / opacity transitions */
  --pulse-anim-medium: 0.25s;      /* transform / font-size easing */
  --pulse-anim-mode: 0.3s;         /* mode swap, max-height reveal */
  --pulse-anim-slow: 0.35s;        /* expand panels, large transitions */
  --pulse-anim-color: 0.4s;        /* slow colour cross-fade */
  --pulse-anim-reveal: 0.6s;       /* bar-width fills, sparkline grow */
  --pulse-anim-fill: 0.8s;         /* heating bar width grow */
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Utility Classes
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* Keyboard focus ring for every focusable element in the family. Keyed off
   [tabindex] so anything focusable is covered, whether the attribute comes from
   markup or from makeActivatable at runtime.

   No border-radius: an outline already follows the element's own radius, so
   declaring one here would reshape the element while focused. */
:host [tabindex]:focus-visible,
:host([tabindex]):focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}

/* Card title: 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label: uppercase, small, secondary tone.
   No opacity multiplier: --pulse-text-secondary is already the dimmed token,
   stacking 0.7 on top dropped light-theme contrast below WCAG-large threshold. */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
}

/* Glass panel: frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stats row: grid layout primitive shared across the Pulse card
   family. Children are stat tiles emitted by each card's own type
   builder (e.g. pulse-weather's pt.stat). The row controls only
   layout: column count, divider, gap, margin.
   - data-cols: "3" | "4": column count (default 4)
   - data-divided: "true": adds a 1px hairline at the top so the row
     reads as a footer rather than a flush block. */
.pulse-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--pulse-space-tight) var(--pulse-space-element);
  margin-top: var(--pulse-space-section);
}
.pulse-stats-row[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pulse-stats-row[data-divided="true"] {
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}
`;var vr=`${""}

${br}
/* \u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host {
  display: block;

  /* Weather-specific glass intensity */
  --pulse-glass-blur: 20px;

  /* Typography */
  --pw-hero-size: 72px;
  --pw-hero-weight: 100;
  --pw-section-label-size: 11px;


  /* Semantic colors */
  --pw-color-freeze: #5ac8fa;
  --pw-color-stable: #30d158;
  --pw-text-overlay: #d0d0d0;
  --pw-shadow-overlay: 0 1px 3px rgba(0,0,0,0.6);

  /* Transitions */
  --pw-bg-transition: var(--pulse-anim-fill);

  /* \u2500\u2500 Wabi palette (sumi / nezumi / senmai / shu) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-sky-top: #1d2530;
  --pw-sky-mid: #384452;
  /* The bottom stop is the lightest point of the sky and therefore the contrast
     floor for all cream text. Do not lighten without re-running
     tests/pulse-weather/styles-tokens.test.js. */
  --pw-sky-bot: #413d35;
  --pw-ink-cream: #fdf6e3;
  --pw-ink-cream-muted: rgba(229, 217, 194, 0.85);
  /* 0.72 is the lowest alpha that clears 4.5:1 against --pw-sky-bot. */
  --pw-ink-cream-dim: rgba(229, 217, 194, 0.72);
  --pw-vermilion: #a83d2a;
  --pw-wind: #5ac8fa;
  --pw-warn-amber: #ff9f0a;
  --pw-warn-red: #ff453a;
  --pw-warn-yellow: #ffd60a;
  --pw-good-green: #30d158;

  /* Card-local: Weather is the only consumer at this size; everything else
     uses the shared --pulse-font-* scale. */
  --pw-font-caption: 13px;

  /* \u2500\u2500 Spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-pad-x:     24px;   /* section left/right padding            */
  --pw-pad-y:     22px;   /* section top/bottom padding            */
  --pw-gap-block: 14px;   /* between sub-blocks                    */
  --pw-gap-tight:  6px;   /* within tight clusters                 */
}

/* \u2500\u2500 Card Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-card {
  overflow: hidden;
  min-width: 0;
  /* Match cartouche radius (24px). Default HA card 12px is smaller than the
     cartouche frame's 24px, leaving a corner slice of pw-card background bleed
     through in light theme. Aligning here means cartouche fills card edge-to-edge. */
  border-radius: var(--pulse-radius-cartouche);
  background: var(--pulse-bg-card);
  color: var(--pulse-text-primary);
  /* font-family inherits from the HA frame, same as pulse-climate-card. */
  container-type: inline-size;
}

/* \u2500\u2500 Cartouche frame primitive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Default sky gradient: applies to every section unless that section
   paints its own background (atmosphere, air-quality). Promoted from
   per-section duplication so alerts / wind no longer leak light theme
   pw-card cream backdrop in light mode. */
.pw-cartouche {
  position: relative;
  border-radius: var(--pulse-radius-cartouche);
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(180deg,
    var(--pw-sky-top) 0%,
    var(--pw-sky-mid) 45%,
    var(--pw-sky-bot) 100%);
}

.pw-cartouche::before {
  content: "";
  position: absolute;
  inset: 14px;
  border: 1px solid rgba(229, 217, 194, 0.18);
  border-radius: 18px;
  z-index: 3;
  pointer-events: none;
}

/* Section content sits above the cartouche border */
.pw-cartouche > .pw-content {
  position: relative;
  z-index: 4;
}

/* \u2500\u2500 Section Shared \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-section { position: relative; min-width: 0; }
.pw-section + .pw-section { border-top: 1px solid var(--pulse-border-subtle); }

/* \u2500\u2500 Shared Status Label \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-status-label {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 var(--pulse-space-card-wide);
  transition: color var(--pulse-anim-color);
  position: relative;
  z-index: 2;
}

/* \u2500\u2500 Mode Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Atmosphere Layer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx,
.pw-smog-overlay,
.pw-haze-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx { overflow: hidden; }
.pw-fx,
.pw-wind-streaks { z-index: 1; }

/* \u2500\u2500 Hero Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Temperature Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Bottom Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* CAPE storm risk bar */

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-hourly-strip {
  display: flex;
  gap: var(--pulse-space-hairline);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  margin: 0 var(--pulse-space-card-wide);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.pw-hourly-strip::-webkit-scrollbar { display: none; }

/* \u2500\u2500 Wind Rose \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-streak {
  position: absolute;
  height: 1px;
  border-radius: var(--pulse-radius-hairline);
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  animation: pw-streakTravel linear infinite;
  animation-fill-mode: backwards;
}

.pw-rose-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.pw-gust-sweep {
  animation: pw-gustPulse var(--gust-dur, 2s) ease-in-out infinite;
}

.pw-wind-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  pointer-events: none;
}

.pw-wind-speed {
  font-size: 28px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pw-wind-unit {
  font-size: 12px;
  color: var(--pw-ink-cream-dim);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pw-ink-cream-dim);
}

/* \u2500\u2500 AQI Gauge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-aqi { padding: 0 0 16px; position: relative; overflow: hidden; }

/* \u2500\u2500 Alerts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-alert-list { display: flex; flex-direction: column; gap: var(--pulse-space-element); padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  gap: var(--pulse-space-row);
  padding: var(--pulse-space-row);
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-row);
  border-left: 3px solid;
}

/* \u2500\u2500 Atmosphere Column \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-atmos-column-wrap {
  display: flex;
  align-items: stretch;
  padding: 8px var(--pulse-space-card-wide) 0;
  gap: var(--pulse-space-section);
  height: var(--pw-atmos-column-height, 200px);
  position: relative;
  z-index: 2;
}

.pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  text-align: right;
  padding: 4px 0;
}

.pw-atmos-scale-label {
  font-size: 9px;
  /* No opacity here: the parent .pw-atmos-scale already sets 0.5. */
  color: var(--pw-ink-cream-dim);
  font-variant-numeric: tabular-nums;
}

.pw-atmos-column {
  flex: 1;
  position: relative;
  border-radius: var(--pulse-radius-row);
  overflow: hidden;
  background: linear-gradient(to top, var(--pulse-bg-elevated) 0%, transparent 100%);
  border: 1px solid var(--pulse-border-subtle);
}

/* CAPE energy fill */
.pw-atmos-cape-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 9px 9px;
  transition: height var(--pulse-anim-fill) ease;
}

/* Thermal particles */
.pw-thermal-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  opacity: 0;
  animation: pw-thermalRise var(--rise-dur, 4s) ease-out infinite;
}

@keyframes pw-thermalRise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: var(--peak-op, 0.4); }
  80% { opacity: var(--peak-op, 0.4); transform: translateY(var(--rise-dist, -80px)) scale(0.5); }
  100% { opacity: 0; transform: translateY(var(--rise-dist, -100px)) scale(0.3); }
}

/* Freezing level marker */
.pw-atmos-freeze-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: var(--pw-color-freeze);
  opacity: 0.4;
}

.pw-atmos-freeze-label {
  font-size: 10px;
  color: var(--pw-color-freeze);
  opacity: 0.6;
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* LCL height marker (dashed line, grey, distinct from freeze marker) */
.pw-atmos-lcl-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(160,160,160,0.4);
}

.pw-atmos-lcl-label {
  font-size: 10px;
  color: var(--pw-text-overlay);
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  text-shadow: var(--pw-shadow-overlay);
}

.pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  color: var(--pw-text-overlay);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: var(--pw-shadow-overlay);
}

/* Tap-to-expand detail panel */

.pw-atmos-detail {
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--pulse-anim-mode) ease;
  margin: 0 var(--pulse-space-card-wide);
}

.pw-atmos-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  padding: 12px 0;
  border-top: 1px solid var(--pulse-border-subtle);
}

.pw-atmos-detail-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
}

.pw-atmos-detail-indicator {
  width: 4px;
  height: 24px;
  border-radius: var(--pulse-radius-bar);
  flex-shrink: 0;
}

.pw-atmos-detail-label {
  font-size: 10px;
  color: var(--pw-ink-cream-dim);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.pw-atmos-detail-value {
  font-size: 14px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-detail-desc {
  font-size: 9px;
  color: var(--pw-ink-cream-dim);
}

/* \u2500\u2500 Severity Dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 FX Keyframes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes pw-rainFall {
  0% { transform: translateY(-20px); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 0.8; }
  100% { transform: translateY(300px); opacity: 0; }
}

@keyframes pw-snowFall {
  0% { transform: translateY(-10px) translateX(0) rotate(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { transform: translateY(300px) translateX(30px) rotate(360deg); opacity: 0; }
}

@keyframes pw-flash {
  0%,100% { opacity: 0; }
  4% { opacity: 0.8; }
  6% { opacity: 0; }
  8% { opacity: 0.5; }
  10% { opacity: 0; }
}

@keyframes pw-boltStrike {
  0% { opacity: 0; filter: none; }
  3% { opacity: 0; }
  4% { opacity: 1; filter: drop-shadow(0 0 12px rgba(200,220,255,0.9)) drop-shadow(0 0 4px #fff); }
  6% { opacity: 0; filter: none; }
  8% { opacity: 0.7; filter: drop-shadow(0 0 6px rgba(200,220,255,0.5)); }
  10% { opacity: 0; filter: none; }
  100% { opacity: 0; }
}

@keyframes pw-fogDrift {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@keyframes pw-rayPulse {
  0%,100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes pw-cloudDrift {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(500px); }
}

@keyframes pw-twinkle {
  0%,100% { opacity: 0.2; }
  50% { opacity: 0.9; }
}

@keyframes pw-shimmer {
  0% { background-position: 0% 0%; opacity: 0.4; }
  50% { background-position: 0% 100%; opacity: 0.8; }
  100% { background-position: 0% 0%; opacity: 0.4; }
}

@keyframes pw-rippleWave {
  0%, 100% { transform: scaleY(1) translateY(0); }
  50% { transform: scaleY(1.1) translateY(-3px); }
}

@keyframes pw-streakTravel {
  0% { translate: var(--sx) var(--sy); opacity: 0; }
  10% { opacity: var(--peak, 0.4); }
  90% { opacity: var(--peak, 0.4); }
  100% { translate: var(--ex) var(--ey); opacity: 0; }
}

@keyframes pw-arrowSway {
  0%   { transform: rotate(var(--sway-back)); }
  35%  { transform: rotate(var(--sway-fwd)); }
  65%  { transform: rotate(var(--sway-fwd)); }
  100% { transform: rotate(var(--sway-back)); }
}

@keyframes pw-roseShake {
  0%, 100% { translate: 0px 0px; }
  20%  { translate: var(--dx) var(--dy); }
  40%  { translate: calc(-0.6 * var(--dx)) calc(-0.6 * var(--dy)); }
  60%  { translate: calc(0.8 * var(--dx)) calc(0.8 * var(--dy)); }
  80%  { translate: calc(-0.3 * var(--dx)) calc(-0.3 * var(--dy)); }
}

@keyframes pw-gustPulse {
  0%   { opacity: 0.04; transform: scale(0.85); }
  40%  { opacity: var(--gust-peak, 0.2); transform: scale(1.05); }
  70%  { opacity: var(--gust-peak, 0.2); transform: scale(1.0); }
  100% { opacity: 0.04; transform: scale(0.85); }
}

@keyframes pw-breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes pw-dotPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@keyframes pw-sweepRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pw-blipRing {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes pw-blipPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}

@keyframes pw-sunGlow {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(255,200,50,0.4)); }
  50% { filter: drop-shadow(0 0 16px rgba(255,200,50,0.7)); }
}

@keyframes pw-moonGlow {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(200,210,255,0.3)); }
  50% { filter: drop-shadow(0 0 12px rgba(200,210,255,0.5)); }
}

@keyframes pw-gaugeGlow {
  0%, 100% { filter: drop-shadow(0 0 4px var(--glow-color, rgba(255,255,255,0.2))); }
  50% { filter: drop-shadow(0 0 10px var(--glow-color, rgba(255,255,255,0.4))); }
}

/* \u2500\u2500 Air Haze FX \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-dust-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: rgba(180,160,120,0.3);
  animation: pw-dustFloat 8s ease-in-out infinite;
}

@keyframes pw-dustFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.pw-haze-blob {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: radial-gradient(ellipse, rgba(160,140,100,0.08), transparent 70%);
  animation: pw-hazeFloat 12s ease-in-out infinite;
}

@keyframes pw-hazeFloat {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(30px); opacity: 0.6; }
}

/* \u2500\u2500 Radar (CRT green phosphor style) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-radar {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: var(--pulse-radius-circle);
  overflow: hidden;
  background:
    repeating-radial-gradient(
      transparent, transparent 15%,
      var(--pw-radar-color, rgba(80,255,0,0.15)) 15.5%, transparent 16%
    ),
    linear-gradient(
      transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    linear-gradient(
      to right, transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    radial-gradient(var(--pw-radar-bg-inner, #001a00), var(--pw-radar-bg-outer, #000800));
}

.pw-radar::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background-image: conic-gradient(transparent 85%, var(--pw-radar-sweep, rgba(80,255,0,0.35)));
  animation: pw-sweepRotate var(--pw-radar-dur, 2.5s) linear infinite;
  will-change: transform;
}

.pw-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background:
    radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
    radial-gradient(circle, transparent 55%, rgba(0,0,0,0.6) 100%);
  z-index: 3;
  pointer-events: none;
}

@keyframes pw-radarBlink {
  2%, 20% { background-color: var(--pw-blip-color, rgba(80,255,0,0.85)); box-shadow: 0 0 4px var(--pw-blip-color, rgba(80,255,0,0.6)); }
  90% { background-color: transparent; box-shadow: none; }
}

.pw-radar-blip {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: var(--pulse-radius-circle);
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: pw-radarBlink var(--pw-radar-dur, 2.5s) ease-out infinite;
}

/* \u2500\u2500 Alert rows: Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: var(--pulse-space-row);
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: var(--pulse-space-element); padding: 4px var(--pulse-space-card-wide) 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pw-ink-cream-dim); font-variant-numeric: tabular-nums; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: var(--pulse-radius-hairline); background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: var(--pulse-radius-hairline); background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: var(--pulse-radius-circle); border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* Backstop for animation declared in markup. weather-fx.js and wind.js set
   animation as an inline style, which outranks a plain declaration, hence
   !important. The primary gate skips generating FX entirely, in
   pulse-weather-card.js _postRender. */
@media (prefers-reduced-motion: reduce) {
  :host,
  :host *,
  :host *::before,
  :host *::after {
    animation: none !important;
    transition: none !important;
  }
}

/* \u2500\u2500 Tension Overlays \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-tension-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.pw-tension-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.pw-tension-wash.breathing {
  animation: pw-breathe var(--breathe-dur, 4s) ease-in-out infinite;
}

@keyframes pw-vignettePulse {
  0%, 100% { opacity: var(--vignette-min, 0.5); }
  50% { opacity: var(--vignette-max, 1); }
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-meteogram { padding: 0 0 16px; position: relative; overflow: hidden; }
.pw-meteogram-chart { display: block; width: 100%; height: auto; margin: 8px 0 0; position: relative; z-index: 2; }
/* Cloud strip fills the entire section so the band reads as edge-to-edge
   atmosphere rather than a strip floating inside the SVG. */
.pw-meteogram-cloud-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.pw-meteogram-cloud-slot {
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgb(180, 190, 200);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Type-system primitives (single source of truth)
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Every section composes its DOM from t.* builders in type-system.js,
 * which emit one of these classes. Per-section CSS blocks below are
 * layout-only (padding, grid, gradient, brand-mark corner offset),
 * they should never restate font-size / font-weight
 * / text-transform. To add a new role, add it here AND in
 * type-system.js together.
 */

/* Hero block: wraps heroTier + display + narrative. Sections that
   compose their hero via t.heroBlock get the centred stacked layout
   for free; sections that need a different rhythm compose the
   primitives manually. */
.pw-hero-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--pw-gap-tight);
}
.pw-hero-block .pw-t-narrative { margin-top: 0; }

/* Top-marg wrapper: reserves the right gutter for the brand mark. */
.pw-t-marg { padding-right: 36px; }
/* Narrative directly under a kicker sits a tight gap below. */
.pw-t-marg .pw-t-kicker + .pw-t-narrative { margin-top: var(--pw-gap-tight); }

/* Section anchor: UPPERCASE 0.32em kicker. */
.pw-t-kicker {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: var(--pulse-ls-kicker);
  text-transform: uppercase;
  opacity: 0.6;
  line-height: 1;
}
.pw-t-kicker::after { content: " \xB7"; opacity: 0.5; }

/* Hero numbers: display size, tabular numerals. */
.pw-t-display {
  font-weight: 600;
  font-size: var(--pulse-font-display);
  letter-spacing: var(--pulse-ls-display);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
  text-shadow: 0 6px 36px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.pw-t-display-suf {
  font-size: 0.48em;
  vertical-align: super;
  margin-left: -3px;
  text-shadow: none;
}

/* Hero tier: Atmosphere uses the larger title flavour, AQI the
   smaller body-sm flavour. Title Case: no text-transform. */
.pw-t-hero-tier {
  font-weight: 600;
  text-align: center;
}
.pw-t-hero-tier-atmos {
  font-size: var(--pulse-font-hero);
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
}
.pw-t-hero-tier-aqi {
  font-size: var(--pulse-font-body);
  letter-spacing: 0.04em;
  margin-top: 3px;
}

/* Narrative: Sentence case body. Centred caption that fills the
   section width; copy is short enough that wrapping happens only on
   narrow phones. Sections that need a different rhythm override. */
.pw-t-narrative {
  font-weight: 400;
  font-size: var(--pulse-font-section-title);
  line-height: 1.45;
  color: var(--pw-ink-cream-muted);
  text-align: center;
  margin-top: var(--pw-gap-tight);
}

/* Italic gloss: lowercase italic body-sm. */
.pw-t-gloss {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: var(--pw-ink-cream-dim);
  text-align: center;
}

/* Italic meta caption: sentence-case italic micro. */
.pw-t-meta {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  text-align: center;
  color: var(--pw-ink-cream-dim);
}

/* Stat tile primitive (value + label). */
.pw-t-stat { text-align: center; padding: 6px 4px; }
.pw-t-stat-v {
  font-weight: 600;
  font-size: var(--pw-font-caption);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}
.pw-t-stat-l {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.55;
  margin-top: 5px;
}
/* Data tokens (chemical formulae, source acronyms) render as-given. */
.pw-t-data,
.pw-t-stat-l.pw-t-data {
  text-transform: none;
}

/* Chart caption: header above a chart. Lowercase 0.14em micro. */
.pw-t-chart-caption {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.5;
  margin-top: var(--pw-gap-block);
  margin-bottom: 4px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pro toggle scaffolding
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Brand-mark corner becomes a <button>. data-pro on the section root
 * swaps default \u2194 pro view. Shared filled-disc visual lives here so
 * every section gets the same toggle visual without redeclaring it.
 *
 * Phase A.1 lands the scaffolding only; per-section pro views land
 * in Phase B as the shells migrate.
 */

button.pw-brand-mark-corner {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  border-radius: var(--pulse-radius-circle);
  transition: transform var(--pulse-anim-fast) ease;
}
button.pw-brand-mark-corner:hover {
  transform: scale(1.08);
}
button.pw-brand-mark-corner:focus-visible {
  outline: 2px solid var(--pulse-accent, var(--pw-vermilion));
  outline-offset: 3px;
}
/* Decorative brand mark (sections without a click action, Forecast,
   Atmosphere) sits at lower opacity so users don't try to tap it.
   Interactive marks live at full opacity, gain hover scale + focus
   ring above. */
div.pw-brand-mark-corner {
  opacity: 0.55;
}

/* Pro state: brand-mark circle fills as a solid \u6731 disc + dot dims. */
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .mc {
  fill: var(--pw-vermilion);
  stroke-width: 0;
  opacity: 1;
}
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .md {
  opacity: 0.7;
}

/* Default-vs-pro view swap (in-place fade replace). Sections that
   only have a default view today work fine, the rule has no effect
   without a sibling .pw-view-pro.
   The view wrapper inherits the same flex-column layout the content
   slot uses, so children inside a view keep their gap rhythm. */
.pw-view {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  transition: opacity var(--pulse-anim-medium) ease;
}
.pw-section[data-pro="false"] .pw-view-pro,
.pw-section[data-pro="true"]  .pw-view-default {
  display: none;
}

/* \u2500\u2500 Overview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-overview-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Location stamp: same anatomy as kicker but tighter tracking and
   smaller-cap aesthetic; rendered in Overview only via plain markup,
   not via t.kicker (which would add the trailing " \xB7"). */
.pw-overview-v2 .pw-loc-stamp {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.55;
  text-align: center;
}
.pw-overview-v2 .pw-hero-block {
  text-align: center;
  margin: 0;
}
/* Overview stats use vertical dividers between columns instead of a
   top hairline: gives a calmer visual rhythm under the busy hero
   block. */
.pw-overview-v2 .pulse-stats-row .pw-t-stat {
  padding: 7px 4px;
  border-right: 1px solid rgba(229, 217, 194, 0.1);
}
.pw-overview-v2 .pulse-stats-row .pw-t-stat:last-child {
  border-right: none;
}
.pw-overview-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: 7-day temperature spark sits between the day arc and the
   stats grid. Caption above, sparkline below, same anatomy as a
   chart-caption + chart pair anywhere else in the family. */
.pw-overview-v2 .pw-overview-spark-block {
  margin: 0;
}
.pw-overview-v2 .pw-overview-spark {
  height: 38px;
}
.pw-overview-v2 .pw-overview-storm {
  height: 24px;
}
.pw-overview-v2 .pw-overview-spark svg,
.pw-overview-v2 .pw-overview-storm svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-meteogram-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-meteogram-v2 .pw-meteogram-chart {
  position: relative;
  z-index: 2;
}
.pw-meteogram-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-forecast-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-forecast-v2 .pw-fc-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 0;
}
.pw-forecast-v2 .pw-fc-row {
  display: grid;
  grid-template-columns: 60px 24px 36px 1fr 60px;
  align-items: center;
  gap: var(--pulse-space-element);
  padding: 5px 0;
  font-size: var(--pw-font-caption);
}
.pw-forecast-v2 .pw-fc-row.is-today .pw-fc-day {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-day {
  color: var(--pw-ink-cream-dim);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-icon { text-align: center; font-size: 16px; }
.pw-forecast-v2 .pw-fc-pop {
  text-align: right;
  color: var(--pw-vermilion);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  font-size: var(--pulse-font-label);
}
.pw-forecast-v2 .pw-fc-pop:empty { visibility: hidden; }
.pw-forecast-v2 .pw-fc-bar {
  position: relative;
  height: 5px;
  background: rgba(229, 217, 194, 0.08);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-bar-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  /* Cool-to-warm temperature range gradient. The two cool stops are this
     bar's only consumers, so they stay raw hex rather than card tokens.
     #827a6a coincides with --pw-sky-bot's value but is a different concept
     (range-bar cool end, not sky), so binding to that token would couple the
     two and let a sky-colour change bleed into the forecast bar. */
  background: linear-gradient(90deg, #5e6776 0%, #827a6a 50%, var(--pw-vermilion) 100%);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-now {
  position: absolute;
  top: -3px;
  width: 6px;
  height: 11px;
  background: var(--pw-ink-cream);
  border-radius: var(--pulse-radius-bar);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-forecast-v2 .pw-fc-range {
  display: flex;
  justify-content: space-between;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.2px;
  gap: var(--pulse-space-chip);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-lo { color: var(--pw-ink-cream-dim); }
.pw-forecast-v2 .pw-fc-hi {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Astro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
/* (Night override below paints a deeper midnight palette.) */
/* After sunset / before sunrise the section paints a deeper midnight
   palette so the moon arc reads against night colour, not day. */
.pw-astro-v2.is-night {
  background: linear-gradient(180deg, #0a0e1f 0%, #131a35 55%, #1f2548 100%);
}
/* Sunrise/sunset labels are still informative at night ("here's when
   the sun will be back"), but they shouldn't dominate. Drop their
   contrast a touch. */
.pw-astro-v2.is-night .pw-t-kicker { opacity: 0.5; }
.pw-astro-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* \u2500\u2500 Hero (Daylight / Night + duration) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-hero {
  display: flex;
  align-items: baseline;
  gap: var(--pulse-space-panel);
  flex-wrap: wrap;
}
.pw-astro-v2 .pw-astro-hero-tier {
  font-size: var(--pulse-font-hero);
  font-weight: 500;
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
  color: var(--pw-warn-amber);
  text-transform: capitalize;
}
.pw-astro-v2.is-night .pw-astro-hero-tier { color: var(--pw-wind); }
.pw-astro-v2 .pw-astro-hero-num {
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}

/* \u2500\u2500 Moon hero row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-moon-hero {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-section);
  padding: var(--pw-gap-tight) 0;
}
.pw-astro-v2 .pw-astro-moon-glyph {
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px rgba(232, 224, 208, 0.25));
}
.pw-astro-v2 .pw-astro-moon-text {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-hairline);
}
.pw-astro-v2 .pw-astro-moon-name {
  font-size: var(--pulse-font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--pw-ink-cream-muted);
}
.pw-astro-v2 .pw-astro-moon-meta {
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
}
.pw-astro-v2 .pw-astro-moon-illum {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--pw-ink-cream-muted);
}

/* \u2500\u2500 24h ribbon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-rb {
  position: relative;
  height: 84px;
  border-radius: var(--pulse-radius-row);
  overflow: visible;
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-astro-rb-track {
  position: absolute;
  inset: 22px 0 24px 0;
  border-radius: var(--pulse-radius-element);
  box-shadow: inset 0 0 0 1px rgba(229, 217, 194, 0.1);
}
.pw-astro-v2 .pw-astro-rb-now {
  position: absolute;
  top: 14px;
  bottom: 16px;
  width: 2px;
  margin-left: -1px;
  background: var(--pw-ink-cream);
  box-shadow: 0 0 8px rgba(253, 246, 227, 0.7);
  z-index: 3;
}
/* Axis labels are absolutely positioned at their actual hour
   percentages (0 / 25 / 50 / 75 / 100) so the visual position of
   each tick matches the underlying timeline. A grid-based layout
   would centre intermediate labels inside their grid cells (30%
   / 50% / 70%) and create a 4\u20135% drift between label position and
   actual time: making NOW-cursor look misaligned even when its
   percentage is correct. */
.pw-astro-v2 .pw-astro-rb-axis {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.2em;
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
}
.pw-astro-v2 .pw-astro-rb-axis span {
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
}
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(1) { left: 0; transform: translateX(0); }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(2) { left: 25%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(3) { left: 50%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(4) { left: 75%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(5) { left: 100%; transform: translateX(-100%); }

/* The second stats row sits flush under the first, no divider, no
   extra margin: so they read as one block. */
.pw-astro-v2 .pulse-stats-row + .pulse-stats-row {
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Atmosphere \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmosphere-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(168, 61, 42, 0.14) 0%, transparent 70%),
    linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, #2a2a3a 100%);
}
.pw-atmosphere-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Vertical column visualisation: atmospheric profile up to 5km
   (auto-scales when freeze level or LCL exceed 4km). The CAPE fill
   grows from the surface up; the freeze level and LCL markers are
   absolutely-positioned tags + lines at their altitude bottom-%. */
.pw-atmosphere-v2 .pw-atmos-column-wrap {
  display: flex;
  gap: var(--pulse-space-panel);
  align-items: stretch;
  height: 200px;
  margin-top: var(--pw-gap-tight);
  padding: 0 4px;
}
.pw-atmosphere-v2 .pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.5;
  font-variant-numeric: tabular-nums;
}
.pw-atmosphere-v2 .pw-atmos-column {
  flex: 1;
  position: relative;
  background: rgba(229, 217, 194, 0.04);
  border-radius: var(--pulse-radius-pill);
  border: 1px solid rgba(229, 217, 194, 0.1);
  overflow: hidden;
}
.pw-atmosphere-v2 .pw-atmos-cape-fill {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  border-top: 1px solid var(--pw-vermilion);
}
.pw-atmosphere-v2 .pw-atmos-freeze-marker,
.pw-atmosphere-v2 .pw-atmos-lcl-marker {
  position: absolute;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-chip);
  padding-left: 6px;
}
.pw-atmosphere-v2 .pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: rgba(90, 200, 250, 0.5);
}
.pw-atmosphere-v2 .pw-atmos-freeze-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: var(--pw-wind);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(208, 208, 208, 0.45);
}
.pw-atmosphere-v2 .pw-atmos-lcl-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: rgba(208, 208, 208, 0.85);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.45;
}
.pw-atmosphere-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Wind (cartouche wrap only: rose preserved) \u2500 */
.pw-wind-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-wind-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Air quality \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-air-quality-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(255, 214, 10, 0.06) 0%, transparent 70%),
    linear-gradient(180deg, #2a2a1a 0%, #1a1a0a 50%, #0a0a0a 100%);
}
.pw-air-quality-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-air-quality-v2 .pw-aq-band {
  position: relative;
  height: 8px;
  background: linear-gradient(90deg,
    var(--pw-good-green) 0%,
    var(--pw-warn-yellow) 25%,
    var(--pw-warn-amber) 50%,
    var(--pw-warn-red) 75%,
    #8b0000 100%);
  border-radius: var(--pulse-radius-small);
}
.pw-air-quality-v2 .pw-aq-marker {
  position: absolute;
  top: -3px;
  width: 3px;
  height: 14px;
  background: var(--pw-ink-cream);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-air-quality-v2 .pw-aq-band-labels {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.08em;
  text-transform: lowercase;
  opacity: 0.6;
}
/* Pollutant tiles use the larger body size, the value here is a
   hero stat, not a chip. The grid layout itself comes from the
   shared .pulse-stats-row primitive. */
.pw-air-quality-v2 .pulse-stats-row .pw-t-stat-v {
  font-size: var(--pulse-font-section-title);
}
.pw-air-quality-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Alerts (airport ticker rows) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alerts-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-alerts-v2 .pw-alert-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 4px;
}
.pw-alerts-v2 .pw-alert-ticker {
  background: #000;
  border: 1px solid;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-row);
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  box-shadow: inset 0 0 12px;
}
.pw-alerts-v2 .pw-alert-tri {
  font-size: var(--pulse-font-body);
  animation: pw-alertBlink 1s step-end infinite;
}
.pw-alerts-v2 .pw-alert-yellow .pw-alert-tri { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-amber .pw-alert-tri { color: var(--pw-warn-amber); }
.pw-alerts-v2 .pw-alert-red .pw-alert-tri { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-alert-text {
  font-weight: 700;
  font-size: var(--pw-font-caption);
  letter-spacing: 0.08em;
  line-height: 1.4;
}
.pw-alerts-v2 .pw-alert-yellow .pw-alert-text {
  color: var(--pw-warn-yellow);
  text-shadow: 0 0 6px rgba(255, 214, 10, 0.5);
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-text {
  color: var(--pw-warn-amber);
  text-shadow: 0 0 6px rgba(255, 159, 10, 0.5);
}
.pw-alerts-v2 .pw-alert-red .pw-alert-text {
  color: var(--pw-warn-red);
  text-shadow: 0 0 6px rgba(255, 69, 58, 0.5);
}
.pw-alerts-v2 .pw-alert-timestamp {
  text-align: right;
  margin-top: 4px;
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  /* Secondary line: dim the tone token rather than baking a per-tier alpha
     into a hardcoded rgba, so the colour stays in sync with the family token. */
  opacity: 0.65;
}
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-yellow { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-amber { color: var(--pw-warn-amber); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-red { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-all-clear-v2 {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  color: var(--pw-ink-cream-dim);
  font-style: italic;
  letter-spacing: 0.04em;
  margin-top: 4px;
}
.pw-alerts-v2 .pw-all-clear-v2 strong {
  color: var(--pw-good-green);
  font-style: normal;
  font-weight: 600;
  display: block;
  font-size: var(--pulse-font-section-title);
  margin-bottom: 2px;
}
.pw-alerts-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: per-alert detail card. Each card stacks headline +
   meta line + description + locations vertically; the tone modifier
   (.pw-alert-yellow / .pw-alert-amber / .pw-alert-red) drives border +
   headline colour. */
.pw-alerts-v2 .pw-alert-detail {
  background: rgba(229, 217, 194, 0.04);
  border: 1px solid;
  border-radius: var(--pulse-radius-pill);
  padding: 10px 12px;
  margin-top: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-yellow {
  border-color: rgba(255, 214, 10, 0.3);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber {
  border-color: rgba(255, 159, 10, 0.3);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red {
  border-color: rgba(255, 69, 58, 0.45);
}
.pw-alerts-v2 .pw-alert-detail-head {
  font-weight: 600;
  font-size: var(--pulse-font-section-title);
  line-height: 1.3;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-yellow .pw-alert-detail-head {
  color: var(--pw-warn-yellow);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber .pw-alert-detail-head {
  color: var(--pw-warn-amber);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red .pw-alert-detail-head {
  color: var(--pw-warn-red);
}
.pw-alerts-v2 .pw-alert-detail-meta {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.55;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-desc {
  font-size: var(--pw-font-caption);
  line-height: 1.5;
  color: var(--pw-ink-cream-muted);
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-loc {
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  opacity: 0.6;
}
@keyframes pw-alertBlink {
  50% { opacity: 0.3; }
}
`;var xr=[{type:"overview"}],Ra={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function nt(e){if(!e)return{type:"overview"};if(typeof e=="string")return nt({type:e});if(typeof e!="object")return{type:"overview"};let t=or.includes(e.type)?e.type:"overview";return{...Ra[t]||{},...e,type:t}}function yr(e){if(!e||typeof e!="object")return{type:"custom:pulse-weather-card",sections:xr.map(nt)};let t=e,r=Array.isArray(t.sections)&&t.sections.length>0?t.sections.map(nt):xr.map(nt);return{type:t.type||"custom:pulse-weather-card",weather_entity:t.weather_entity||void 0,atmos_source:t.atmos_source||void 0,sections:r}}function g(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(e){return e==null||e===""?"":String(e).replace(/[;{}&"'`<>\\\u0000-\u001f\u007f]/g,"").replace(/(url|expression)(?:\s*\()+/gi,"$1").replace(/(-moz-binding)(?:\s*:)+/gi,"$1")}function _r(e){return{columns:12,min_columns:e,rows:"auto"}}function qe(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function te(e){let t=e?.config?.time_zone;if(t&&e?.locale?.time_zone!=="local")return t}function se(e,t,r){return!e||isNaN(e.getTime())?"":new Intl.DateTimeFormat("en-GB",{...r,timeZone:t}).format(e)}function H(e,t){return se(e,t,{hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}var $r="\xB0C";function kr(e){let t=e?.config?.unit_system?.temperature;$r=typeof t=="string"&&t?t:"\xB0C"}function it(e){return e?.unit_of_measurement||e?.temperature_unit||$r}var Lt=0;function Sr(e="pulse-id"){return Lt=Lt+1>>>0,`${e}-${Lt.toString(36)}`}function Mr(e,t,{signal:r,role:a="button"}={}){e.setAttribute("role",a),e.setAttribute("tabindex","0"),e.addEventListener("keydown",o=>{let n=o;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),t(n))},r?{signal:r}:void 0)}function Dt(e){let t=e.replace(/^weather\./,"");return t.endsWith(Rt)&&(t=t.slice(0,-Rt.length)),t}function Tr(e,t){let r=t.weather_entity||Object.keys(e).find(d=>d.startsWith("weather."))||"",a=t.atmos_source||Dt(r),o={};for(let d of mr){let p=`sensor.${a}_${d}`;p in e&&(o[d]=p)}let n=Object.keys(o).length>=hr,i=n?o:{},s=[];if(t.alert_entities&&t.alert_entities.length>0)for(let d of t.alert_entities)d in e&&s.push(d);else if(n){for(let l of fr){let u=`sensor.${a}_${l}`,f=`sensor.${a}_warnings_${l}`;u in e?s.push(u):f in e&&s.push(f)}let d=`binary_sensor.${a}_alert_active`,p=`binary_sensor.${a}_warnings_alert_active`;d in e?s.push(d):p in e&&s.push(p)}let c="sun.sun"in e?"sun.sun":null;return{weatherEntityId:r,atmosCe:i,sunEntityId:c,atmosSource:n?a:null,alertEntityIds:s}}function La(e){if(typeof e!="string")return null;let t=e.trim().replace(/^#/,"");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6||/[^0-9a-f]/i.test(t)?null:{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function ye(e,t){if(typeof e!="string")return String(e);let r=Math.max(0,Math.min(1,Number(t))),a=La(e);if(a)return`rgba(${a.r},${a.g},${a.b},${r})`;let o=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(e.trim());return o?`rgba(${o[1]},${o[2]},${o[3]},${r})`:e}function Ar(e,t){return e.filter(r=>Number.isFinite(t(r)))}function V(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function st(e,t,r,a,o,n=0){if(t?.[a]){let i=Number(e?.states?.[t[a]]?.state);if(Number.isFinite(i))return i}return Number(r?.[o]??n)||n}function Er(e,t,r,a){return t?.[r]&&e?.states?.[t[r]]?.attributes?.unit_of_measurement||a}function Ge(e,t,r=0){let a=t?e?.states?.[t]:null;if(!a)return{value:r,unit:void 0,entity:null};let o=Number(a.state);return{value:Number.isFinite(o)?o:r,unit:a.attributes?.unit_of_measurement,entity:a}}function lt(e,t,r){let a=t?.state||"sunny",o=r?.sunEntityId?e?.states?.[r.sunEntityId]?.state:null;return{condition:a,isNight:a==="clear-night"||o==="below_horizon"}}function Xe(e="pw-id"){return Sr(e)}function Cr(e){return`${e}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function ct(e,t,r=36e5){let a=(t?t.getTime():Date.now())-r;return e.filter(o=>{let n=o.datetime;if(!n)return!1;let i=new Date(n).getTime();return Number.isFinite(i)&&i>=a})}function It(e){let t=Number(e);for(let r of rt)if(t<=r.max)return r.color;return rt[rt.length-1].color}function Nr(e){let t=Number(e);for(let r of at)if(t<=r.max)return r.tier;return at[at.length-1].tier}function Rr(e){let t=Number(e);for(let r of ot)if(t<=r.max)return r;return ot[ot.length-1]}function pt(e){let t=(Number(e)%360+360)%360,r=Math.round(t/22.5)%16;return pr[r]}function ze(e,t,r){if(!t||!r)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let a=new Date(t),o=new Date(r);if(isNaN(a.getTime())||isNaN(o.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let n=a.getTime()>e.getTime()?new Date(a.getTime()-864e5):a,i=o.getTime()>e.getTime()?o:new Date(o.getTime()-864e5);i.getTime()>n.getTime()+864e5&&(i=new Date(i.getTime()-864e5)),n.getTime()>i.getTime()&&(n=new Date(n.getTime()-864e5));let s=a.getTime()>e.getTime()?a:new Date(a.getTime()+864e5);return{todaySunrise:n,todaySunset:i,tomorrowSunrise:s}}function K(e,t){if(!e||isNaN(e.getTime()))return null;if(!t)return e;let r=t.getTime(),a=[e,new Date(e.getTime()-864e5),new Date(e.getTime()+864e5)],o=a[0],n=Math.abs(o.getTime()-r);for(let i=1;i<a.length;i+=1){let s=Math.abs(a[i].getTime()-r);s<n&&(o=a[i],n=s)}return o}function ie(e,t,r){let a=t?Object.entries(t).map(([o,n])=>` ${o}="${n}"`).join(""):"";return r!=null?`<${e}${a}>${r}</${e}>`:`<${e}${a}/>`}function dt(e){return wr[e]||"\u{1F324}\uFE0F"}var Fr={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function Lr(e){return Object.hasOwn(Fr,e)?Fr[e]:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function re(e,t){let r=document.createElement(e);return r.className=t,r}function F(e,t){return Math.random()*(t-e)+e}function Ye(e,t=60,r=1,a=2){let o=Math.min(t,ir);for(let n=0;n<o;n++){let i=re("div","pw-rain-drop"),s=F(15,30),c=F(.4,.8)/r;Object.assign(i.style,{left:`${F(0,100)}%`,top:`${F(-10,20)}%`,width:`${a}px`,height:`${s}px`,borderRadius:`0 0 ${a}px ${a}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${c}s linear ${F(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(i)}}function Ot(e,t=40){let r=Math.min(t,sr);for(let a=0;a<r;a++){let o=re("div","pw-snowflake"),n=F(2,5);Object.assign(o.style,{left:`${F(0,100)}%`,top:`${F(-5,10)}%`,width:`${n}px`,height:`${n}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${F(3,6)}s linear ${F(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(o)}}function Da(e){for(let t=0;t<4;t++){let r=re("div","pw-fog-layer");Object.assign(r.style,{position:"absolute",width:"200%",height:"40px",top:`${30+t*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${F(15,25)}s linear ${t*2}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function ut(e){for(let t=0;t<8;t++){let r=re("div","pw-sun-ray");Object.assign(r.style,{position:"absolute",top:"-20px",left:`${10+t*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+t*4}deg)`,animation:`pw-rayPulse ${F(3,5)}s ease-in-out ${F(0,2)}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function Z(e,t=4,r=1){let a=Math.min(t,Ct);for(let o=0;o<a;o++){let n=re("div","pw-cloud"),i=F(80,160),s=F(30,60),c=F(20,40)/r;Object.assign(n.style,{position:"absolute",width:`${i}px`,height:`${s}px`,top:`${F(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${c}s linear ${F(0,15)}s infinite`,animationFillMode:"backwards"}),e.appendChild(n)}}function zt(e){for(let t=0;t<lr;t++){let r=re("div","pw-star"),a=F(1,3);Object.assign(r.style,{position:"absolute",left:`${F(0,100)}%`,top:`${F(0,70)}%`,width:`${a}px`,height:`${a}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${F(2,5)}s ease-in-out ${F(0,3)}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function Ia(e,t){let r=[],a=e,o=0,n=Math.floor(F(4,8)),i=t/n;r.push(`${a},${o}`);for(let s=0;s<n;s++)a+=F(-15,15),o+=i,r.push(`${a},${o}`);return r.join(" ")}function Dr(e,t=2,r){let a=r||Array.from({length:t},(n,i)=>i*3),o=re("div","pw-lightning-flash");Object.assign(o.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${a[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),e.appendChild(o);for(let n=0;n<t;n++){let i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"svg");s.setAttribute("class","pw-lightning-bolt"),s.setAttribute("width","60"),s.setAttribute("height","200"),s.setAttribute("viewBox","0 0 60 200"),s.style.position="absolute",s.style.top="0",s.style.left=`${F(15,75)}%`,s.style.pointerEvents="none",s.style.zIndex="2",s.style.animation=`pw-boltStrike 6s ease-in-out ${a[n]||0}s infinite`,s.style.animationFillMode="backwards";let c=Ia(30,180),d=document.createElementNS(i,"polyline");d.setAttribute("points",c),d.setAttribute("fill","none"),d.setAttribute("stroke","rgba(200,220,255,0.4)"),d.setAttribute("stroke-width","6"),d.setAttribute("stroke-linecap","round"),d.setAttribute("stroke-linejoin","round"),s.appendChild(d);let p=document.createElementNS(i,"polyline");p.setAttribute("points",c),p.setAttribute("fill","none"),p.setAttribute("stroke","#fff"),p.setAttribute("stroke-width","2"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),s.appendChild(p),e.appendChild(s)}}function Oa(e){let t=re("div","pw-heat-shimmer");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),e.appendChild(t);let r=re("div","pw-heat-ripple");Object.assign(r.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),e.appendChild(r)}function Ir(e,t,r){let a=Math.min(1,(t/75+r/150)/2);if(a<.05)return;let o=re("div","pw-smog-overlay");o.style.background=`rgba(120,110,80,${.05+a*.15})`,e.appendChild(o);let n=re("div","pw-haze-vignette");if(n.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${a*.3}) 100%)`,e.appendChild(n),qe())return;let i=Math.floor(a*20);for(let c=0;c<i;c++){let d=re("div","pw-dust-particle"),p=F(1,3+a*3);Object.assign(d.style,{left:`${F(0,100)}%`,top:`${F(10,90)}%`,width:`${p}px`,height:`${p}px`,animationDelay:`${F(0,8)}s`,animationFillMode:"backwards"}),e.appendChild(d)}let s=Math.floor(a*5);for(let c=0;c<s;c++){let d=re("div","pw-haze-blob"),p=F(60,120);Object.assign(d.style,{left:`${F(-10,80)}%`,top:`${F(10,70)}%`,width:`${p}px`,height:`${p*.6}px`,animationDelay:`${F(0,12)}s`,animationFillMode:"backwards"}),e.appendChild(d)}}function Or(e,t,r){let a=document.createDocumentFragment();if(qe())return a;try{t&&zt(a);let o=r?Math.round(r.total/100*Ct):0;switch(e){case"sunny":t||ut(a),r&&o>0&&Z(a,o);break;case"clear-night":r&&o>0&&Z(a,o);break;case"partlycloudy":t||ut(a),Z(a,r?o:3);break;case"cloudy":Z(a,r?Math.max(o,4):6);break;case"rainy":Ye(a,40,1,2),Z(a,r?Math.max(o,3):4);break;case"pouring":Ye(a,80,1.5,3),Z(a,r?Math.max(o,5):6);break;case"snowy":Ot(a,40),Z(a,r?Math.max(o,3):4);break;case"snowy-rainy":Ot(a,20),Ye(a,20,.8,1),Z(a,r?Math.max(o,3):4);break;case"hail":Ye(a,30,1.2,3),Ot(a,15),Z(a,r?Math.max(o,4):5);break;case"lightning":Dr(a,2,[0,3]),Z(a,r?Math.max(o,5):6);break;case"lightning-rainy":Dr(a,3,[0,2,4]),Ye(a,60,1.3,2),Z(a,r?Math.max(o,5):6);break;case"fog":Da(a);break;case"windy":case"windy-variant":Z(a,r?o:3,1.5);break;case"exceptional":Oa(a);break;default:r&&o>0&&Z(a,o);break}}catch(o){console.warn(`${ne} buildConditionFx threw: atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,o)}return a}function Ke(e,t,r){return r===t?0:Math.max(0,Math.min(1,(e-t)/(r-t)))}function Ht(e,t,r="ellipse"){let a=Math.max(0,Math.min(1,t)),o=Math.round(3+a*50),n=Math.round(2+a*25),i=Math.round(50+a*30),s=c=>c.toString(16).padStart(2,"0");return`radial-gradient(${r} at 50% 30%, ${e}${s(o)} 0%, ${e}${s(n)} ${i}%, transparent 90%)`}function zr(e,t=6,r=1.2){let a=Math.max(0,Math.min(1,e));return t-a*(t-r)}function Hr(e,t="0,0,0"){let r=Math.max(0,Math.min(1,e));if(r<.1)return"";let a=Math.round(60-r*30),o=(r*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${a}%, rgba(${t},${o}) 100%)`}function Pr(e,t=8,r=2){let a=Math.max(0,Math.min(1,e));return t-a*(t-r)}function Wr(e,t){let r=t?Number(se(e,t,{hour:"2-digit",hourCycle:"h23"})):e.getHours();return r>=6&&r<12?"this morning":r>=12&&r<17?"this afternoon":r>=17&&r<21?"this evening":"tonight"}function za(e,t){return e==="sunny"||e==="clear-night"?"Clear skies":e==="rainy"||e==="pouring"?"Rain":e==="snowy"||e==="snowy-rainy"?"Snow":e==="lightning"||e==="lightning-rainy"?"Storms":e==="fog"?"Fog":t>=88?"Overcast":t>=50?"Mostly cloudy":t>=12?"Some sun":"Sunny"}function Ha(e){let t=e.slots.slice(0,6);if(t.length===0)return null;let r=Number(t[t.length-1].cloud_coverage),a=Number.isFinite(r)?r-e.cloudCoverNow:0,o=t.reduce((d,p)=>Math.max(d,Number(p.precipitation_probability)||0),0),n=t.reduce((d,p)=>Math.max(d,Number(p.snowfall)||0),0),s=t.reduce((d,p)=>Math.max(d,Number(p.wind_speed)||0),e.windSpeed)-e.windSpeed;return["moderate","high"].includes(e.stabilityState)?"with thunderstorms developing":o>=60?n>0?"with snow likely":"with rain likely":o>=40?n>0?"with snow possible":"with a brief shower or two":a>=30?"then increasing clouds":a<=-30?"then clearing":s>=8?"with wind firming":null}function Br(e){let t=za(e.conditionNow,Number(e.cloudCoverNow)||0),r=Ha(e),a=r?Wr(e.now,e.timeZone):null,o;return r?r.startsWith("then ")?o=`${t}, ${r} ${a}.`:o=`${t}, then ${r} ${a}.`:o=`${t} ${Wr(e.now,e.timeZone)}.`,{initial:t,transition:r,anchor:a,sentence:o}}var Pa="#a83d2a",Ur="#7a2d20",Fe="#fdf6e3",Wa='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',Ba="</svg>";function jr(e){let t=["day","cloudy","rain","night"].includes(e)?e:"day",a=`<circle class="mc" cx="20" cy="20" r="18" fill="${t==="night"?Ur:Pa}" opacity="0.92"/>`,o=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${Fe}" stroke-width="0.8" opacity="0.85"/>`,n="";return t==="day"?n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Fe}" opacity="0.95"/>`:t==="cloudy"?n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Fe}" opacity="0.45"/>`:t==="rain"?n=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${Fe}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${Fe}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${Fe}" stroke-width="0.7" opacity="0.55"/>`].join(""):t==="night"&&(n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Fe}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${Ur}"/>`),`${Wa}${a}${o}${n}${Ba}`}function ee(e,t){return t?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(e)?"rain":["cloudy","fog"].includes(e)?"cloudy":"day"}var y={kicker(e){return`<div class="pw-t-kicker">${g(e)}</div>`},heroTier(e,{flavor:t="aqi",color:r=""}={}){let a=t==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",o=r?` style="color:${S(r)}"`:"";return`<div class="pw-t-hero-tier ${a}"${o}>${g(e)}</div>`},display(e,{color:t="",suffix:r=""}={}){let a=t?` style="color:${S(t)}"`:"",o=r?`<span class="pw-t-display-suf">${g(r)}</span>`:"";return`<div class="pw-t-display"${a}>${g(String(e))}${o}</div>`},narrative(e){return`<div class="pw-t-narrative">${g(e)}</div>`},gloss(e){return`<div class="pw-t-gloss">${g(e)}</div>`},meta(e){return`<div class="pw-t-meta">${g(e)}</div>`},chartCaption(e){return`<div class="pw-t-chart-caption">${g(e)}</div>`},stat(e,t,{data:r=!1,valueColor:a=""}={}){let o=a?` style="color:${S(a)}"`:"",n=r?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${o}>${g(String(e))}</div><div class="${n}">${g(t)}</div></div>`},statLabel(e){return`<span class="pw-t-stat-l">${g(e)}</span>`},dataToken(e){return`<span class="pw-t-data">${e}</span>`},heroBlock({tier:e="",tierFlavor:t="aqi",tierColor:r="",value:a="",valueSuffix:o="",valueColor:n="",narrative:i=""}={}){let s=e?this.heroTier(e,{flavor:t,color:r}):"",c=a!==""?this.display(a,{color:n,suffix:o}):"",d=i?this.narrative(i):"";return`<div class="pw-hero-block">${s}${c}${d}</div>`},statsRow(e,{columns:t=4,divided:r=!1}={}){let a=e.filter(Boolean);return a.length?`<div class="pulse-stats-row" data-cols="${t}"${r?' data-divided="true"':""}>${a.join("")}</div>`:""}};function q({sectionClass:e,ariaLabel:t,brandVariant:r,kicker:a="",narrative:o="",preContent:n="",extraSectionClass:i="",sectionStyle:s="",body:c,proView:d="",proInitial:p=!1,proAction:l="view-swap",proAriaLabel:u="Toggle pro view",pro:f=!0}){f===!1&&(d="",l="view-swap",p=!1);let m=s?` style="${s}"`:"",w=`pw-section pw-cartouche ${e}${i?` ${i}`:""}`,h=jr(r),b=[a?y.kicker(a):"",o?y.narrative(o):""].filter(Boolean).join(""),$=b?`<div class="pw-t-marg">${b}</div>`:"",x=!!d,_=x||l!=="view-swap",M=x?`<div class="pw-view pw-view-default">${c}</div><div class="pw-view pw-view-pro">${d}</div>`:c,k=p?"true":"false",E=_?`<button class="pw-brand-mark-corner" aria-label="${g(u)}" aria-pressed="${k}" type="button">${h}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${h}</div>`;return`
    <div class="${w}" data-pro="${k}" data-pro-action="${l}"${m} role="region" aria-label="${g(t)}">
      ${n}
      ${E}
      <div class="pw-content">
        ${$}
        ${M}
      </div>
    </div>`}function Ua(e,t,r){let a=e.map(p=>{let l=Number(p.cape);return Number.isFinite(l)?l:0}),o=Math.max(...a,300),n=Math.max(...a),i=a.indexOf(n),c=a.map((p,l)=>({x:l/Math.max(e.length-1,1)*t,y:r-p/o*r})).map((p,l)=>`${l===0?"M":"L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" "),d=`${c} L${t},${r} L0,${r} Z`;return{svgPath:c,areaPath:d,peakValue:n,peakIndex:i,maxCape:o}}function ja(e,t,r,a,o,n,i,s){let c=[];return i>0&&c.push({name:"Snow",value:i,unit:s}),r>0&&c.push({name:"Rain",value:r,unit:a}),o>0&&c.push({name:"Showers",value:o,unit:n}),c.length>0?`${c.map(p=>`${g(p.name)} ${g(p.value.toFixed(1))} ${g(p.unit)}`).join(" \xB7 ")} now`:e>0?`Precipitation: next 12h \xB7 ${g(e.toFixed(1))} ${g(t)} now`:"Precipitation: next 12h"}function Vr({hass:e,config:t,discovery:r,weatherEntity:a,forecastData:o}){let n=a.attributes,i=r.atmosCe,s=r.sunEntityId||"",c=te(e),{condition:d,isNight:p}=lt(e,a,r),l=(P,W)=>st(e,i,n,P,W),u=(P,W)=>Er(e,i,P,W),f=l("temperature","temperature"),m=l("humidity","humidity"),w=l("wind_speed","wind_speed"),h=l("wind_direction","wind_bearing"),b=l("wind_gusts","wind_gust_speed")||l("wind_gusts","wind_gusts"),$=l("dew_point","dew_point"),x=l("visibility","visibility"),_=l("pressure","pressure"),M=it(n),k=u("temperature",M),E=u("visibility","km"),C=u("pressure","hPa"),z=u("dew_point",M),N=o?.daily,D=o?.hourly,I=n.forecast,v=f,T=f;if(N&&N.length>0){let P=N[0],W=Number(P.templow),L=Number(P.temperature);Number.isFinite(W)&&Number.isFinite(L)&&(v=Math.min(W,L),T=Math.max(W,L))}else if(D&&D.length>0){let P=Date.now(),W=new Date;W.setHours(23,59,59,999);let L=W.getTime(),Y=1/0,j=-1/0;for(let fe of D.slice(0,24)){let U=Date.parse(String(fe.datetime??""));if(Number.isFinite(U)&&(U<P||U>L))continue;let oe=Number(fe.temperature);Number.isFinite(oe)&&(oe<Y&&(Y=oe),oe>j&&(j=oe))}Number.isFinite(Y)&&Number.isFinite(j)&&Y!==j&&(v=Math.min(Y,f),T=Math.max(j,f))}else if(I&&I.length>0){let P=I[0],W=Number(P.templow),L=Number(P.temperature);Number.isFinite(W)&&Number.isFinite(L)&&(v=Math.min(W,L),T=Math.max(W,L))}let A=r.atmosCe.uv_index,R=Number(A?e.states[A]?.state:n.uv_index),G=Number.isFinite(R)?R:null,{value:ce,unit:me}=Ge(e,i.precipitation),we=me||"mm",{value:ge,unit:$e}=Ge(e,i.rain),{value:ke,unit:B}=Ge(e,i.showers),{value:O,unit:X}=Ge(e,i.snowfall),ae=$e||"mm",pe=B||"mm",be=X||"cm",We=i.dew_point_comfort?e.states[i.dew_point_comfort]:null,Ee=i.visibility_category?e.states[i.visibility_category]:null,Ce=i.feels_like_context?e.states[i.feels_like_context]:null,Be=i.pressure_trend?e.states[i.pressure_trend]:null,Ne=new Date,Re=s?e.states[s]:null,gt=Re?.attributes?.next_rising,bt=Re?.attributes?.next_setting,{todaySunrise:Ue,todaySunset:Se,tomorrowSunrise:je}=ze(Ne,gt,bt),ve=null;r.atmosCe.cloud_cover&&(ve={total:Number(e.states[r.atmosCe.cloud_cover]?.state)||0,low:Number(e.states[r.atmosCe.cloud_cover_low]?.state)||0,mid:Number(e.states[r.atmosCe.cloud_cover_mid]?.state)||0,high:Number(e.states[r.atmosCe.cloud_cover_high]?.state)||0});let vt=(i.stability_assessment?e.states[i.stability_assessment]:null)?.state||"",xt=pt(h),yt=`data-condition="${g(d)}" data-night="${p}" data-cloud='${g(JSON.stringify(ve||""))}'`,_t=Ke(f,20,42),$t=Ke(f,15,-10),xe=Math.max(_t,$t),Le=Hr(xe),qt=Le?`<div class="pw-tension-vignette" style="background: ${S(Le)}"></div>`:"",Gt=Ce?.state||"",kt=Ce?.attributes?.difference,Je="";if(kt!=null){let P=Math.round(Number(kt));Gt==="wind_chill"?Je=`Wind chill ${P}\xB0`:Gt==="heat_index"&&(Je=`Heat index +${P}\xB0`)}let _a=We?.state||"",Xt=b>w+5,Yt="",Kt=s?e.states[s]:null;if(Kt&&Ue&&Se&&je){let P=Ne.getTime(),W=Kt.state==="above_horizon",L,Y,j,fe,U;if(W){let he=Ue.getTime(),Q=Se.getTime(),De=Math.max(Q-he,1);L=Math.max(0,Math.min(100,(P-he)/De*100)),Y=H(Ue,c),j=H(Se,c),fe="background: linear-gradient(to right, #ff9f0a, #ffd60a)",U="#ff9f0a"}else{let he=Se.getTime(),Q=je.getTime(),De=Math.max(Q-he,1);L=Math.max(0,Math.min(100,(P-he)/De*100)),Y=H(Se,c),j=H(je,c),fe="background: linear-gradient(to right, #1a3050, #5ac8fa)",U="#5ac8fa"}let oe=`left:${Number(L)}%; background:${S(U)}; box-shadow: 0 0 6px ${S(U)}66`,Me=` style="color:${S(U)}"`,Te=W?"":"\u{1F319}";Yt=`
      <div class="pw-day-arc">
        <span class="pw-day-arc-label"${Me}>${g(Y)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(L)}%; ${fe}"></div>
          <div class="pw-day-arc-marker" style="${oe}">${Te}</div>
        </div>
        <span class="pw-day-arc-label"${Me}>${g(j)}</span>
      </div>`}let St="",Zt="",Qt=o?.hourly||[];if(Qt.length>0){let L=ct(Qt,new Date).slice(0,12),Y=ja(ce,we,ge,ae,ke,pe,O,be);if(ce>0?St=Y:St=Br({now:new Date,cloudCoverNow:ve?ve.total:0,conditionNow:d,slots:L,windSpeed:w,uvIndex:G,stabilityState:vt,timeZone:c}).sentence,L.some(j=>Number(j.cape)>300)){let U=Ua(L,320,24),oe=L[U.peakIndex]?.datetime?new Date(L[U.peakIndex].datetime):null,Me=U.peakValue>=1e3?`${(U.peakValue/1e3).toFixed(1)}k`:String(Math.round(U.peakValue)),Te=oe?`storm risk \xB7 peak ${Me} J/kg at ${H(oe,c)}`:`storm risk \xB7 peak ${Me} J/kg`,he=Xe("pw-cape-grad");Zt=`<div class="pw-overview-spark-block">
        ${y.chartCaption(Te)}
        <div class="pw-overview-storm">
          <svg viewBox="0 0 320 24" preserveAspectRatio="none" role="img" aria-label="${g(Te)}">
            <defs>
              <linearGradient id="${he}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--pw-warn-amber)" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="var(--pw-warn-amber)" stop-opacity="0.04"/>
              </linearGradient>
            </defs>
            <path d="${U.areaPath}" fill="url(#${he})"/>
            <path d="${U.svgPath}" fill="none" stroke="var(--pw-warn-amber)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>`}}let $a=Lr(d),ka=ee(d,p),Sa=t?.location_label||"Now",Ma=ve?Math.round(ve.total)+"%":"--",Ta=`
        <div class="pw-loc-stamp">${g(Sa)} \xB7 ${g(H(new Date,c))}</div>
        <div class="pw-hero-block">
          ${y.display(Math.round(f),{suffix:k})}
          ${y.gloss(`${$a}${Je?" \xB7 "+Je:""}`)}
        </div>`,Fa=y.statsRow([y.stat(`${Math.round(v)}/${Math.round(T)}\xB0`,"range"),y.stat(`${Math.round(w)}${Xt?` / ${Math.round(b)}`:""} ${xt}`,Xt?"wind / gust":"wind"),y.stat(G!==null?Math.round(G):"--","uv"),y.stat(Ma,"cloud")],{columns:4}),et=(o?.daily||[]).slice(0,7),Mt="";if(et.length>=2){let L=et.map(Q=>Number(Q.temperature)||0),Y=et.map(Q=>Number(Q.templow??Q.temperature)||0),j=Math.min(...Y),fe=Math.max(...L),U=Math.max(fe-j,1),oe=Q=>Q/(et.length-1)*320,Me=Q=>38-(Q-j)/U*34-2,Te=L.map((Q,De)=>`${De===0?"M":"L"}${oe(De).toFixed(1)},${Me(Q).toFixed(1)}`).join(" ");Mt=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${Te} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${Te}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let Aa=Mt?`<div class="pw-overview-spark-block">
        ${y.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${Mt}</div>
      </div>`:"",Jt=Ee?.state||"",Tt=Be?.state||"",Ea=[Number.isFinite(m)&&m>0,Number.isFinite($)&&$!==0,!!Jt,!!Tt].filter(Boolean).length>=2,er="";if(Ea){let P=Number.isFinite(m)&&m>0?y.stat(`${Math.round(m)}%`,_a||"humidity"):y.stat("\u2014","humidity"),W=Number.isFinite($)?y.stat(`${Math.round($)}${z}`,"dew point"):y.stat("\u2014","dew point"),L=Number.isFinite(_)&&_>0?y.stat(`${Math.round(_)}`,Tt?`${C} ${Tt}`:C):y.stat("\u2014","pressure"),Y=Number.isFinite(x)&&x>0?y.stat(`${x.toFixed(x<10?1:0)}${E}`,Jt||"visibility"):y.stat("\u2014","visibility");er=y.statsRow([P,W,L,Y],{columns:4})}let Ca=`
        ${Ta}
        ${y.narrative(St)}
        ${Yt}
        ${Aa}
        ${Zt}
        ${Fa}
        ${er}`;return q({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:ka,preContent:`${qt}<div class="pw-fx" ${yt} role="img" aria-label="${g(d)} weather effects"></div>`,body:Ca,pro:t?.pro!==!1})}function Va(e,t){if(!e||e.length===0)return"Forecast unavailable";let r=0;for(let s=1;s<e.length;s++)Number(e[s].temperature)>Number(e[r].temperature)&&(r=s);let a=e.findIndex(s=>Number(s.precipitation_probability)>=50),o=s=>s===0?"today":se(new Date(String(e[s].datetime||"")),t,{weekday:"short"}).toLowerCase(),n=o(r),i=Math.round(Number(e[r].temperature));return a>=0&&a!==r?`Warmest ${n} (${i}\xB0) \xB7 rain ${o(a)}`:a>=0?`Wet stretch \xB7 warmest ${n} (${i}\xB0)`:`Warmest ${n} (${i}\xB0) \xB7 dry through the week`}function qr({hass:e,config:t,discovery:r,forecastData:a,weatherEntity:o}){let n=a?.daily||[];if(n.length===0)return null;let i=te(e),s=r.atmosCe,c=s.temperature?e.states[s.temperature]:null,d=it({unit_of_measurement:c?.attributes?.unit_of_measurement,temperature_unit:o?.attributes?.temperature_unit}),p=n.slice(0,7),l=p.flatMap(k=>[V(k.temperature,0),V(k.templow,0)]),u=Math.min(...l),f=Math.max(...l),m=Math.max(f-u,1),w=Number(o?.attributes?.temperature),h=p.map((k,E)=>{let C=V(k.temperature,0),z=V(k.templow,0),N=Math.round(Number(k.precipitation_probability)||0),D=E===0,I=D?"today":se(new Date(String(k.datetime||"")),i,{weekday:"short"}).toLowerCase(),v=dt(String(k.condition||"")),T=N>=50?`<span class="pw-fc-pop">${g(String(N))}%</span>`:'<span class="pw-fc-pop"></span>',A=(z-u)/m*100,R=(C-z)/m*100,G=D&&Number.isFinite(w)?`<span class="pw-fc-now" style="left:${S(((w-u)/m*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${D?" is-today":""}">
        <span class="pw-fc-day">${g(I)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${v}</span>
        ${T}
        <span class="pw-fc-bar" aria-label="High ${Math.round(C)}${g(d)}, low ${Math.round(z)}${g(d)}">
          <span class="pw-fc-bar-fill" style="left:${S(A.toFixed(2)+"%")};width:${S(R.toFixed(2)+"%")}"></span>
          ${G}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${g(String(Math.round(z)))}\xB0</span>
          <span class="pw-fc-hi">${g(String(Math.round(C)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:b,isNight:$}=lt(e,o,r),x=ee(b,$),_=Va(p,i),M=`
        <div class="pw-fc-list" role="list">
          ${h}
        </div>`;return q({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:x,kicker:"the week ahead",narrative:_,body:M,pro:t?.pro!==!1})}var He=240,de=He/2,ue=He/2,Ze=90,Gr=.12,mt=6,ft=.5,Xr=.25,qa=.3,Ga=6,Yr=.7,Xa=.2,Ya=4,Ka=3.3,Za=15,Qa=35,Ja=.08,eo=.2,to=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function Kr(e){return(e-90)*Math.PI/180}function ro(e){let t=e*Math.PI/180;return{x:Math.sin(t),y:-Math.cos(t)}}function _e(e,t){return{x:de+t*Math.cos(e),y:ue+t*Math.sin(e)}}function ao(e,t,r,a){let o=Math.min(e/Oe,1)*Ze,n=_e(t-Xr,o),i=_e(t+Xr,o),s=r>qa?"pw-gust-sweep":"",c=Math.max(.6,2.5-r*2).toFixed(2),d=(.15+r*.3).toFixed(2),p=`transform-origin:${de}px ${ue}px;--gust-dur:${c}s;--gust-peak:${d}`;return ie("path",{class:s,d:`M${de},${ue} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${i.x.toFixed(1)},${i.y.toFixed(1)} Z`,fill:a,opacity:.15,style:p})}function oo(e,t,r,a){let o=Math.min(e/Oe,1)*Ze,n=_e(t,o),i=_e(t-Gr,o*.7),s=_e(t+Gr,o*.7),c={x:n.x-mt*Math.cos(t-ft),y:n.y-mt*Math.sin(t-ft)},d={x:n.x-mt*Math.cos(t+ft),y:n.y-mt*Math.sin(t+ft)},p=r*Ga,l=Math.max(.4,4-r*3.6),u=p>Xa?`animation:pw-arrowSway ${l.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(p*Yr).toFixed(2)}deg;--sway-back:${(-p*(1-Yr)).toFixed(2)}deg`:"",f=`transform-origin:${de}px ${ue}px;filter:drop-shadow(0 0 6px ${ye(a,.38)});${u}`,m=ie("path",{d:`M${de},${ue} L${i.x.toFixed(1)},${i.y.toFixed(1)} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${s.x.toFixed(1)},${s.y.toFixed(1)} Z`,fill:a,opacity:.5}),w=ie("line",{x1:de,y1:ue,x2:n.x.toFixed(1),y2:n.y.toFixed(1),stroke:a,"stroke-width":2.5,"stroke-linecap":"round"}),h=ie("path",{d:`M${n.x.toFixed(1)},${n.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} L${d.x.toFixed(1)},${d.y.toFixed(1)} Z`,fill:a});return ie("g",{style:f},m+w+h)}function Zr({hass:e,config:t,discovery:r,weatherEntity:a}){let o=a.attributes,n=r.atmosCe,i=t.speed_mode||"speed",s=(B,O)=>st(e,n,o,B,O),c=s("wind_speed","wind_speed"),d=s("wind_gusts","wind_gust_speed")||s("wind_gusts","wind_gusts")||c,p=s("wind_direction","wind_bearing"),u=(n.wind_speed?e.states[n.wind_speed]:null)?.attributes?.unit_of_measurement||o.wind_speed_unit||"km/h",f=i==="gust"?d:c,m=Math.min(c/Oe,1),w=Rr(f),h=Nr(f),b=tt[h]||tt.calm,$=pt(p),x=Kr(p),_=ro(p),M=Math.round(m*nr),k=Ya-m*Ka,E=Ja+m*eo,C=Za+m*Qa,z=-_.y,N=_.x,D=[];for(let B=0;B<M;B++){let O=(Math.random()-.5)*400,X=-120-Math.random()*60,ae=420+Math.random()*60,pe=(C*(.6+Math.random()*.8)).toFixed(1),be=(k+Math.random()*k*.5).toFixed(2),We=(Math.random()*3).toFixed(2),Ee=(E*(.5+Math.random()*.5)).toFixed(3),Ce=(X*_.x+O*z).toFixed(1),Be=(X*_.y+O*N).toFixed(1),Ne=(ae*_.x+O*z).toFixed(1),Re=(ae*_.y+O*N).toFixed(1);D.push(`<div class="pw-streak" style="left:50%;top:50%;width:${pe}px;height:1px;transform:rotate(${p-90}deg);animation-duration:${be}s;animation-delay:${We}s;opacity:${Ee};background:linear-gradient(to right, transparent, ${ye(b,.27)}, transparent);--sx:${Ce}px;--sy:${Be}px;--ex:${Ne}px;--ey:${Re}px"></div>`)}let I=[];for(let B=1;B<=3;B++)I.push(ie("circle",{cx:de,cy:ue,r:B*30,fill:"none",stroke:b,"stroke-width":.5,opacity:.08+B*.02}));for(let B of to){let O=Kr(B.a),X=_e(O,20),ae=_e(O,Ze+4),pe=_e(O,Ze+16),be=B.l.length===1;I.push(ie("line",{x1:X.x.toFixed(1),y1:X.y.toFixed(1),x2:ae.x.toFixed(1),y2:ae.y.toFixed(1),stroke:b,"stroke-width":.5,opacity:.12})),I.push(ie("text",{x:pe.x.toFixed(1),y:pe.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:be?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":be?11:9,"font-weight":be?600:400},g(B.l)))}I.push(ao(d,x,m,b)),I.push(oo(f,x,m,b)),(f>Oe||d>Oe)&&I.push(ie("circle",{cx:de,cy:ue,r:Ze+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),I.push(ie("circle",{cx:de,cy:ue,r:18,fill:b,opacity:.06})),I.push(ie("circle",{cx:de,cy:ue,r:3,fill:b}));let T=m>Et?(m-Et)*5:0,A=Math.max(.15,.4-m*.25),R="";T>.1&&(R=`--dx:${(T*_.x).toFixed(2)}px;--dy:${(T*_.y).toFixed(2)}px;animation:pw-roseShake ${A.toFixed(2)}s ease-in-out infinite`);let G=Math.round(12+m*50).toString(16).padStart(2,"0"),ce=Math.round(6+m*25).toString(16).padStart(2,"0"),me=Cr(`radial-gradient(ellipse at 50% 50%, ${b}${G} 0%, ${b}${ce} 40%, transparent 85%)`),we=ee(a?.state||"sunny",!1),ge=i==="gust",$e=ge?"wind \xB7 gust":"wind",ke=`
        <div class="pw-wind-streaks">${D.join("")}</div>
        <div class="pw-rose-wrap" style="${R}">
          <svg class="pw-rose-svg" width="${He}" height="${He}" viewBox="0 0 ${He} ${He}" style="display:block" role="img" aria-label="Wind compass rose showing ${g(Math.round(f))} ${g(u)} from ${g($)}">
            <title>Wind direction compass</title>
            ${I.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${S(b)}">${g(Math.round(f))}</div>
            <div class="pw-wind-unit">${g(u)} \xB7 ${g(Math.round(p))}\xB0 ${g($)}</div>
            <div class="pw-wind-beaufort" style="color: ${S(b)}">${g(w.name)}</div>
            <div class="pw-wind-beaufort-desc">${g(w.desc)}</div>
          </div>
        </div>`;return q({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:we,kicker:$e,sectionStyle:`background: ${S(me)}`,body:ke,proAction:"wind-mode",proInitial:ge,proAriaLabel:"Toggle speed and gust mode",pro:t.pro!==!1})}function no(e,t,r,a){if(r&&a){let i=(t==="us"?At:Ft).find(s=>s.label.toLowerCase()===r.toLowerCase());return{label:r,color:a,desc:i?.desc||""}}let o=t==="us"?At:Ft;for(let n of o)if(e<=n.max)return n;return o[o.length-1]}function io(e){let t=(e||"").toLowerCase();return t.includes("very unhealthy")||t.includes("hazardous")||t.includes("extremely poor")?"very_unhealthy":t.includes("sensitive")?"unhealthy_sg":t.includes("unhealthy")||t.includes("very poor")?"unhealthy":t.includes("poor")?"unhealthy_sg":t.includes("moderate")||t.includes("fair")?"moderate":t.includes("good")?"good":"unknown"}var Qr=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function Jr({hass:e,config:t,discovery:r,weatherEntity:a}){let o=t.scale||"eu",n=o==="us"?"us_aqi":"european_aqi",i=t.aqi_entity||r.atmosCe[n];if(!i||!e.states[i])return null;let s=e.states[i],c=Number(s.state);if(!Number.isFinite(c))return null;let d=s.attributes?.category||null,p=s.attributes?.color||null,l=no(c,o,d,p),u=T=>{let A=r.atmosCe[T];if(!A||!e.states[A])return null;let R=Number(e.states[A].state);return Number.isFinite(R)?R:null},f=u("pm2_5"),m=u("pm10"),w=u("ozone"),h=u("nitrogen_dioxide"),b=u("sulphur_dioxide"),$=u("carbon_monoxide"),x=io(l.label),_=Qr[x]||Qr.unknown,M=ee("cloudy",!1),k=o==="us",C=Math.min(100,Math.max(0,c/(k?300:100)*100)),z=k?"air quality \xB7 us":"air quality",N=y.heroBlock({value:Math.round(c),valueColor:_,tier:l.label,tierFlavor:"aqi",tierColor:_}),D=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${S(`${C.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,I=y.statsRow([f!==null?y.stat(Math.round(f),"PM2.5",{data:!0}):"",m!==null?y.stat(Math.round(m),"PM10",{data:!0}):"",w!==null?y.stat(Math.round(w),"O\u2083",{data:!0}):"",h!==null?y.stat(Math.round(h),"NO\u2082",{data:!0}):"",b!==null?y.stat(Math.round(b),"SO\u2082",{data:!0}):"",$!==null?y.stat($.toFixed(1),"CO",{data:!0}):""],{columns:3}),v=`
        ${N}
        ${D}
        ${I}`;return q({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:M,kicker:z,body:v,proAction:"aqi-scale",proInitial:k,proAriaLabel:"Toggle EU and US AQI scale",pro:t.pro!==!1})}function so(e){let t=(e%J+J)%J;return gr[Math.floor(t/J*8)%8]}function lo(e){return(e%J+J)%J<J/2}var Pt=864e5;function co(e,t,r,a,o){if(a==null)return`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#c8d0e0"/>`;let n=Math.max(0,Math.min(1,a/100)),i=o!=null?lo(o):!0,s=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#2a2a3a"/>`;if(n>=.99)s+=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#e8e0d0"/>`;else if(n>.01){let c=t-r,d=t+r,p=(r*Math.abs(2*n-1)).toFixed(1),l=n>.5?1:0,u;i?u=`M${e.toFixed(1)},${c.toFixed(1)} A${r},${r} 0 0 1 ${e.toFixed(1)},${d.toFixed(1)} A${p},${r} 0 0 ${l} ${e.toFixed(1)},${c.toFixed(1)} Z`:u=`M${e.toFixed(1)},${c.toFixed(1)} A${r},${r} 0 0 0 ${e.toFixed(1)},${d.toFixed(1)} A${p},${r} 0 0 ${1-l} ${e.toFixed(1)},${c.toFixed(1)} Z`,s+=`<path d="${u}" fill="#e8e0d0"/>`}return s}var ht="#050510",ea="#0a1226",ta="#172b4f",ra="#1f3d6e",aa="#3a6fa8",oa="#d97a3a",na="#ff9f0a",ia="#ffc560",sa="#7eaedb",la="#2c5a8e",ca="#ffd60a";function po(e,t,r,a,o,n,i,s,c,d){let p=new Date(e.getTime());p.setHours(0,0,0,0);let l=e.getTime(),u=t.getTime(),f=(r??new Date(l-35*6e4)).getTime(),m=(a??new Date(l-30*6e4)).getTime(),w=(o??new Date(l-6*6e4)).getTime(),h=(n??new Date(l+30*6e4)).getTime(),b=(i??new Date(u-30*6e4)).getTime(),$=(s??new Date(u+6*6e4)).getTime(),x=(c??new Date(u+30*6e4)).getTime(),_=(d??new Date(u+35*6e4)).getTime(),M=(l+u)/2,k=v=>Math.max(0,Math.min(100,v)),E=v=>k((v-p.getTime())/Pt*100),C=(v,T)=>E((v+T)/2),z=Math.min(60,(u-l)/8)*6e4,N=M-z,D=M+z;return`linear-gradient(to right, ${[`${ht} 0%`,`${ht} ${E(f).toFixed(2)}%`,`${ea} ${C(f,m).toFixed(2)}%`,`${ta} ${E(m).toFixed(2)}%`,`${ra} ${C(m,w).toFixed(2)}%`,`${aa} ${E(w).toFixed(2)}%`,`${oa} ${C(w,l).toFixed(2)}%`,`${na} ${E(l).toFixed(2)}%`,`${ia} ${C(l,h).toFixed(2)}%`,`${sa} ${E(h).toFixed(2)}%`,`${la} ${C(h,N).toFixed(2)}%`,`${ca} ${E(N).toFixed(2)}%`,`${ca} ${E(D).toFixed(2)}%`,`${la} ${C(D,b).toFixed(2)}%`,`${sa} ${E(b).toFixed(2)}%`,`${ia} ${C(b,u).toFixed(2)}%`,`${na} ${E(u).toFixed(2)}%`,`${oa} ${C(u,$).toFixed(2)}%`,`${aa} ${E($).toFixed(2)}%`,`${ra} ${C($,x).toFixed(2)}%`,`${ta} ${E(x).toFixed(2)}%`,`${ea} ${C(x,_).toFixed(2)}%`,`${ht} ${E(_).toFixed(2)}%`,`${ht} 100%`].join(", ")})`}function pa(e){if(!e||isNaN(e)||e<=0)return"--";let t=Math.round(e/6e4),r=Math.floor(t/60),a=t%60;return`${r}h ${String(a).padStart(2,"0")}m`}function da({hass:e,config:t,discovery:r}){let a=new Date,o=te(e),n=r.sunEntityId?e.states[r.sunEntityId]:null;if(!n)return null;let i=n.attributes||{},s=i.next_rising||i.sunrise,c=i.next_setting||i.sunset;if(!s||!c)return null;let d=new Date(a);d.setHours(12,0,0,0);let p=K(new Date(s),d),l=K(new Date(c),d);if(!p||!l||isNaN(p.getTime())||isNaN(l.getTime()))return null;let u=r.atmosCe,f=xe=>u[xe]?new Date(String(e.states[u[xe]]?.state)):null,m=K(f("golden_hour_morning_start"),p),w=K(f("golden_hour_morning_end"),p),h=K(f("blue_hour_morning_start"),p),b=K(f("golden_hour_evening_start"),l),$=K(f("golden_hour_evening_end"),l),x=K(f("blue_hour_evening_end"),l),_=i.next_dawn,M=i.next_dusk,k=_?K(new Date(_),p):null,E=M?K(new Date(M),l):null,C=u.moon_phase?e.states[u.moon_phase]:null,z=C?.attributes||{},N=z.moon_age!==void 0?Number(z.moon_age):null,D=z.illumination!==void 0?Number(z.illumination):null,I=N!==null?so(N):C?.state||null,v=K(f("moonrise"),a),T=K(f("moonset"),a),A=a.getTime()>=p.getTime()&&a.getTime()<=l.getTime(),R=H(p,o),G=H(l,o),ce=(p.getTime()+l.getTime())/2,me=H(new Date(ce),o),we=l.getTime()-p.getTime(),ge=Pt-we,$e=pa(we),ke=pa(ge),B=A?"Daylight":"Night",O=A?$e:ke,X=new Date(p.getTime());X.setHours(0,0,0,0);let ae=Math.max(0,Math.min(100,(a.getTime()-X.getTime())/Pt*100)),pe=po(p,l,k,h,m,w,b,$,x,E),We=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${S(pe)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${ae.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,Ee=D!=null?Math.round(D):null,Ce=I||"Moon",Be=co(24,24,22,D,N),Ne=Ee!==null?`<span class="pw-astro-moon-illum">${g(`${Ee}%`)}</span> illuminated`:"",Re=N!=null?`${N.toFixed(1)}d old`:"",gt=N!=null?(()=>{let xe=J/2,Le=(N%J+J)%J;return`${(Le<=xe?xe-Le:J-Le+xe).toFixed(1)}d to full`})():"",bt=[Ne,Re,gt].filter(Boolean).join(" \xB7 "),Ue=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${Be}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${g(Ce)}</div>
          <div class="pw-astro-moon-meta">${bt}</div>
        </div>
      </div>`,Se=A?`Sun rose ${R}, sets ${G} \xB7 solar noon ${me}.`:`Sun set ${G}, rises ${R} \xB7 solar noon ${me}.`,je=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${g(B)}</div>
        <div class="pw-astro-hero-num">${g(O)}</div>
      </div>
      ${y.narrative(Se)}`,ve=H(v,o),Vt=H(T,o),vt=y.statsRow([y.stat(H(k,o),"civil dawn"),y.stat(H(m,o),"golden start",{valueColor:"var(--pw-warn-amber)"}),y.stat(H(h,o),"blue start",{valueColor:"var(--pw-wind)"}),y.stat(ve,"moonrise")],{columns:4,divided:!0}),xt=y.statsRow([y.stat(H(E,o),"civil dusk"),y.stat(H($,o),"golden end",{valueColor:"var(--pw-warn-amber)"}),y.stat(H(x,o),"blue end",{valueColor:"var(--pw-wind)"}),y.stat(Vt,"moonset")],{columns:4,divided:!0}),yt=`
      ${je}
      ${Ue}
      ${We}
      ${vt}
      ${xt}`,_t=ee(A?"sunny":"clear-night",!A),$t=`<div class="pw-fx" data-astro-stars="${!A}" data-astro-day="${A}" role="img" aria-label="Sky atmospheric effects"></div>`;return q({sectionClass:"pw-astro-v2",extraSectionClass:A?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:_t,kicker:"today's sky",preContent:$t,body:yt,pro:t?.pro!==!1})}var ua=18,uo=62,ma=168;function mo(e){return e.active?0:typeof e.hoursUntil=="number"&&e.hoursUntil>0?e.hoursUntil:0}function fa(e){let t=Math.min(mo(e),ma)/ma;return ua+t*(uo-ua)}function Wt(e){let t=`${e.summary||""}|${e.type||""}|${e.endTime||""}`,r=0;for(let a=0;a<t.length;a+=1)r=(r*31+t.charCodeAt(a))%360;return r/360*2*Math.PI}function fo(e,t){let r=e.alert_type||e.type||"wind",a=Number(e.level),o=Number.isFinite(a)&&a>0?a:1,n=ur[Ve(o)],i=dr[r]||"mdi:alert",s=Number(e.progress)||0,c=Array.isArray(e.locations)?e.locations:[],d=e.end_time??"",p=null,l=null,u=!1;if(d==="")u=!0;else if(d){let f=new Date(d),m=new Date,w=f.getTime()-m.getTime();if(w/(1e3*60*60*24)>cr)u=!0;else if(t)p=Math.max(0,w/(1e3*60*60));else{let b=e.start_time||e.datetime;if(b){let $=new Date(String(b));l=Math.max(0,($.getTime()-m.getTime())/(1e3*60*60))}}}return{type:r,icon:i,severity:o,color:n,summary:String(e.headline||e.summary||""),desc:String(e.description||""),active:t,hoursLeft:p,hoursUntil:l,progress:s,locations:c,link:e.link?String(e.link):null,endTime:String(d),isUntilFurtherNotice:u}}function ho(e){let t=Ve(e.severity),r="";e.isUntilFurtherNotice?r="UNTIL FURTHER NOTICE":e.active&&e.hoursLeft!==null?r=`${Math.round(e.hoursLeft)}H LEFT`:e.hoursUntil!==null?r=`IN ${Math.round(e.hoursUntil)}H`:e.active&&(r="ACTIVE");let a=String(e.type||"").toUpperCase(),o=String(e.summary||e.desc||"").toUpperCase().trim(),n=e.locations.length>0?e.locations.join(", ").toUpperCase():"",s=[r,a,o,n].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${t}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${g(s)}</span>
    </div>`}function ha({hass:e,config:t,discovery:r,proPersisted:a=!1}){let o=[];for(let v of r.alertEntityIds){let A=e.states[v]?.attributes?.all_alerts;if(Array.isArray(A)){for(let R of A)o.push(fo(R,R.active===!0));break}}let n=o.length>0,i=n?o.reduce((v,T)=>T.severity>v.severity?T:v,o[0]).severity:0,s=n?o.reduce((v,T)=>T.severity>v.severity?T:v,o[0]).color:"#30d158",c=Ke(i,0,4),d=n?Math.min(1.5,1+(o.length-1)*.15):1,p=Pr(c,3,1.2).toFixed(2),l=zr(c).toFixed(2),u=n?Ht(s,c*d):Ht("#30d158",.08),f=140,m=f/2,w=f/2,h=n?{bgInner:i>=4?"#1a0000":i>=3?"#1a0e00":"#1a1500",bgOuter:i>=4?"#0a0000":i>=3?"#0a0500":"#0a0800",ring:S(ye(s,.15)),line:S(ye(s,.08)),sweep:S(ye(s,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},b=o.map(v=>{let T=m+Math.cos(Wt(v))*fa(v),A=w+Math.sin(Wt(v))*fa(v),R=(Wt(v)/(2*Math.PI)*Number(p)).toFixed(2);return v.active?`<div class="pw-radar-blip" style="left:${T.toFixed(1)}px;top:${A.toFixed(1)}px;--pw-blip-color:${S(v.color)};animation-delay:${R}s"></div>`:`<div style="position:absolute;left:${T.toFixed(1)}px;top:${A.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${S(v.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),$=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${h.bgInner};--pw-radar-bg-outer:${h.bgOuter};--pw-radar-color:${h.ring};--pw-radar-line:${h.line};--pw-radar-sweep:${h.sweep};--pw-radar-dur:${p}s" role="img" aria-label="${n?`${o.length} weather alerts`:"No weather alerts"}">
        ${b}
      </div>
    </div>`,x=(()=>{if(!n)return"";let v=null;for(let T of o){if(T.isUntilFurtherNotice)return"further notice";if(T.endTime){let A=new Date(T.endTime);!isNaN(A.getTime())&&(!v||A>v)&&(v=A)}}return v?se(v,te(e),{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric",hourCycle:"h23"}):"further notice"})(),_=ee(n?"rainy":"sunny",!1),M=o.map(ho).join(""),k=n?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>no active or upcoming warnings</div>',E=o.length===1?"alert":"alerts",C=n?`<div class="pw-alert-timestamp pw-alert-${Ve(i)}">${o.length} ${E} \xB7 valid through ${g(x)}</div>`:"",z=`<div class="pw-tension-wash${n?" breathing":""}" style="background: ${S(u)}; --breathe-dur: ${l}s"></div>`,N=`
        ${$}
        ${k}
        ${M?`<div class="pw-alert-list">${M}</div>`:""}
        ${C}`,D=o.map(v=>{let T=Ve(v.severity),A=v.summary||v.desc||v.type,R=[];v.isUntilFurtherNotice?R.push("until further notice"):v.active&&v.hoursLeft!==null?R.push(`${Math.round(v.hoursLeft)}h left`):v.hoursUntil!==null&&R.push(`in ${Math.round(v.hoursUntil)}h`),v.severity>0&&R.push(`severity ${v.severity}`),v.type&&R.push(v.type);let G=R.join(" \xB7 "),ce=v.desc&&v.desc!==v.summary?`<div class="pw-alert-detail-desc">${g(v.desc)}</div>`:"",me=v.locations.length>0?`<div class="pw-alert-detail-loc">${g(v.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${T}">
          <div class="pw-alert-detail-head">${g(A)}</div>
          ${G?`<div class="pw-alert-detail-meta">${g(G)}</div>`:""}
          ${ce}
          ${me}
        </div>`}).join(""),I=n?`
        ${$}
        ${k}
        ${D}
        ${C}`:void 0;return q({sectionClass:"pw-alerts-v2",ariaLabel:"Weather alerts",brandVariant:_,kicker:n?`weather alerts (${o.length})`:"no weather alerts",preContent:z,body:N,proView:I,proInitial:a,pro:t?.pro!==!1})}var wo=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),go=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function bo(e,t){let r=Math.min(100,e/4e3*100),a=Math.min(100,Math.max(0,(6-t)/12*100));return Math.round(r*.6+a*.4)}function vo(e){return e<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:e<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:e<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:e<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function xo(e,t){let r=t.atmosCe,a=r.cape&&e.states[r.cape]?Number(e.states[r.cape].state):NaN,o=r.lifted_index&&e.states[r.lifted_index]?Number(e.states[r.lifted_index].state):NaN,n=Number.isFinite(a),i=Number.isFinite(o),s=n?a:0,c=i?o:0,d=n||i?bo(s,c):null;if(r.stability_assessment&&e.states[r.stability_assessment]){let l=e.states[r.stability_assessment].state,u=e.states[r.stability_assessment].attributes||{},f=wo[l];if(f){let m=go[l]??0;return{tierKey:l,...f,score:m,source:"composite",attrs:u,capeValue:s,liValue:c,hasCape:n,hasLI:i}}}let p=d!==null?vo(d):null;return{tierKey:p?.tierKey||"unknown",label:p?.label||"Unknown",color:p?.color||"#888888",desc:p?.desc||"",score:d,source:"fallback",attrs:null,capeValue:s,liValue:c,hasCape:n,hasLI:i}}function yo(e){return Math.max(0,Math.min(100,e))}function wa(e,t=5e3){return t<=0?0:Math.max(0,Math.min(100,e/t*100))}function _o(e,t){let n=Math.max(e,t),i=5e3;n>5e3*.8&&(i=Math.max(5e3,Math.ceil(n*1.25/1e3)*1e3));let s=Math.ceil(i/5e3)*1e3;i=Math.ceil(i/s)*s;let c=[];for(let d=i;d>=0;d-=s)c.push(d);return{scaleMax:i,labelInterval:s,labels:c}}var $o=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function ko(e){if(!e)return null;let t=r=>$o[String(e[r]||"none")]??0;return{maxThermal:Math.max(t("cape_tier"),t("lifted_index_tier"),t("lapse_rate_tier")),shearTier:t("wind_shear_tier")}}function So({tierKey:e,tierDesc:t,hourly:r,now:a,todaySunset:o,attrs:n,timeZone:i}){if(e==="none"||e==="unknown")return"Atmosphere settled \xB7 no convective signals";let s=ko(n);if(s&&s.maxThermal===0&&s.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let c=o&&!isNaN(o.getTime())?o.getTime():null,d=a.getTime(),p=c!==null&&d>=c,l=Array.isArray(r)?r.slice(0,6):[],u=l.map(x=>Number(x&&x.cape)||0),f=u.some(x=>Number.isFinite(x)&&x>0),m=null,w=null;if(f){let x=Math.max(...u);if(x>0){let _=l[u.indexOf(x)],M=_?_.datetime:null,k=M?new Date(String(M)):null;k&&!isNaN(k.getTime())&&(m=H(k,i),w=k.getTime())}}if(m===null||w===null){let x=t||"Storm risk active";return p?`${x} \xB7 calming overnight`:x}let h=1800*1e3,b=w<d-h,$=w>=d-h&&w<=d+h;return b?p?`Storm risk easing: peaked ${m}, calming overnight`:`Storm risk easing: peaked ${m}`:$?p?"Storm risk peaking now, calming overnight":c!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":c!==null&&w<c?`Storm risk peaks ${m}, calming after sunset`:c!==null?`Storm risk peaks ${m} (after sunset)`:`Storm risk peaks ${m}`}var di=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var ui=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function Mo(e){let t=Math.max(0,Math.min(100,e)),r=t/100;return{count:t<=10?0:Math.round(2+r*6),minSize:2+Math.round(r),maxSize:3+Math.round(r),minDur:4-r*2.2,maxDur:4-r*1.2}}function ga(e,t,r=Math.random){let a=document.createDocumentFragment(),o=Mo(e);if(o.count===0)return a;let n=S(t);for(let i=0;i<o.count;i++){let s=document.createElement("div");s.className="pw-thermal-particle";let c=o.minSize+r()*(o.maxSize-o.minSize),d=10+r()*80,p=r()*30,l=o.minDur+r()*(o.maxDur-o.minDur),u=r()*l,f=.4+r()*.3,m=-(50+r()*60);s.setAttribute("style",[`width:${c.toFixed(1)}px`,`height:${c.toFixed(1)}px`,`left:${d.toFixed(1)}%`,`bottom:${p.toFixed(1)}%`,`background:${n}`,`--rise-dur:${l.toFixed(2)}s`,`--rise-dist:${m.toFixed(0)}px`,`--peak-op:${f.toFixed(2)}`,`animation-delay:${u.toFixed(2)}s`].join(";")),a.appendChild(s)}return a}function ba({hass:e,config:t,discovery:r,forecastData:a}){let o=r.atmosCe;if(!o.cape&&!o.lifted_index&&!o.freezing_level_height)return console.debug(`${ne} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height): section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let n=xo(e,r),{capeValue:i,liValue:s,hasCape:c,hasLI:d,score:p}=n,l=O=>{let X=o[O];if(!X||!e.states[X])return{value:null,unit:""};let ae=Number(e.states[X].state);if(!Number.isFinite(ae))return{value:null,unit:""};let pe=String(e.states[X].attributes?.unit_of_measurement||"");return{value:ae,unit:pe}},u=l("wind_shear_0_6_km"),f=l("lapse_rate_700_500_hpa"),m=l("freezing_level_height"),w=l("lcl_height"),h=n.tierKey,b={label:n.label,color:n.color,desc:n.desc},x=["slight","enhanced","moderate","high"].includes(h)?"rain":"cloudy",_=new Date,M=r.sunEntityId?e.states[r.sunEntityId]:null,{todaySunset:k}=ze(_,M?.attributes?.next_rising,M?.attributes?.next_setting),E=So({tierKey:h,tierDesc:b.desc,hourly:a?.hourly||[],now:_,todaySunset:k,attrs:n.attrs,timeZone:te(e)}),C=m.value??0,z=w.value??0,{scaleMax:N,labels:D}=_o(C,z),I=p!==null?yo(p):0,v=b.color,T=c||d?`
          <div class="pw-atmos-cape-fill" style="height:${Number(I)}%;background:linear-gradient(to top, ${S(v)}66, ${S(v)}11)"></div>`:"",A=m.unit||"m",R=m.value!==null?(()=>{let O=wa(m.value,N);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(O)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${g(String(Math.round(m.value)))}${g(A)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",G=w.unit||"m",ce=w.value!==null?(()=>{let O=wa(w.value,N);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(O)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${g(String(Math.round(w.value)))}${g(G)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",we=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${D.map(O=>`<span class="pw-atmos-scale-label">${O>=1e3?`${O/1e3}km`:String(O)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${T}
            ${R}
            ${ce}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,ge=y.heroBlock({tier:b.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:E}),$e=[c?y.stat(`${Math.round(i)}`,"cape J/kg"):"",d?y.stat(s.toFixed(1),"lifted idx"):"",u.value!==null?y.stat(`${Math.round(u.value)}`,`shear ${u.unit||"km/h"}`):"",f.value!==null?y.stat(f.value.toFixed(1),`lapse ${f.unit||"\xB0C/km"}`):""],ke=y.statsRow($e,{columns:4,divided:!0}),B=`
        ${ge}
        ${we}
        ${ke}`;return q({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:x,kicker:"atmospheric stability",body:B,pro:t?.pro!==!1})}var le=600,To=280,wt=8,Bt=80,Pe=200,Qe=220,Fo=254,va=12,Ao=30,Eo=.9,Co=3;function Ae(e,t){return t<=1?le/2:wt+e/(t-1)*(le-2*wt)}function xa(e,t,r){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(r))return(Bt+Pe)/2;let a=r-t||1;return Bt+(r-e)/a*(Pe-Bt)}function No(e,t){let r=new Date(e);return se(r,t,{hour:"2-digit",hourCycle:"h23"})}var Ro=500;function Lo(e,t=24,r){if(!Array.isArray(e))return null;let a=e.slice(0,Ro),n=ct(a,new Date).slice(0,t);if(n.length<2)return null;let i=n[0],s="cloud_cover"in i,c="cloud_cover_low"in i&&"cloud_cover_mid"in i&&"cloud_cover_high"in i,d="wind_speed"in i&&("wind_bearing"in i||"wind_direction"in i),p=n.map(h=>{let b=Number(h.temperature),$=V(h.precipitation_probability,0),x=V(h.snowfall,0),_=V(h.rain,0),M=V(h.showers,0),k=String(h.condition||""),E=x>0||k==="snowy"||k==="snowy-rainy"?"snow":"rain",C=E==="snow"?x:_+M;return{temp:b,precip:$,precipMm:C,precipType:E,condition:k,cloudCover:s?V(h.cloud_cover,0):null,cloudLow:c?V(h.cloud_cover_low,0):null,cloudMid:c?V(h.cloud_cover_mid,0):null,cloudHigh:c?V(h.cloud_cover_high,0):null,windSpeed:d?V(h.wind_speed,0):null,windBearing:d?V(h.wind_bearing??h.wind_direction,0):null,timeLabel:No(String(h.datetime||""),r),datetime:String(h.datetime||"")}}),l=Ar(p,h=>h.temp);if(l.length<2)return null;let u=l.map(h=>h.temp),f=Math.min(...u),m=Math.max(...u),w=Math.max(...l.map(h=>h.precipMm),0);return{points:l,n:l.length,min:f,max:m,minIdx:u.indexOf(f),maxIdx:u.indexOf(m),maxPrecipMm:w,hasCloud:s,hasLayeredCloud:c,hasWind:d}}function Do(e){let{points:t,n:r,hasLayeredCloud:a}=e;if(r<=0)return"";let o=r>1?(le-2*wt)/(r-1)/2:le/2,n="";for(let i=0;i<r;i++){let s=Ae(i,r),c=i===0?0:s-o,p=(i===r-1?le:s+o)-c,l=c/le*100,u=p/le*100,f;if(a){let m=(Number(t[i].cloudHigh)||0)/100*.06,w=(Number(t[i].cloudMid)||0)/100*.08,h=(Number(t[i].cloudLow)||0)/100*.1;f=Math.min(m+w+h,.15)}else f=(Number(t[i].cloudCover)||0)/100*.12;f<=0||(n+=`<div class="pw-meteogram-cloud-slot" style="left:${l.toFixed(2)}%;width:${u.toFixed(2)}%;opacity:${f.toFixed(3)}"></div>`)}return n?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${n}</div>`:""}function Io(e){let{points:t,n:r,maxPrecipMm:a}=e,o=Qe-Pe,n=(le-2*wt)/(r-1)*Eo,i=a>0,s=i?Math.max(a,2):100,c="";for(let d=0;d<r;d++){let{precipMm:p,precip:l,precipType:u}=t[d],f=i?p:l;if(f<=0)continue;let m=f/s*o,w=Ae(d,r)-n/2,h=n;w<0&&(h+=w,w=0),w+h>le&&(h=le-w);let b=Qe-m,$=u==="snow"?"rgba(200,220,240,0.45)":"color-mix(in srgb, var(--pw-wind) 40%, transparent)";c+=`<rect x="${w.toFixed(1)}" y="${b.toFixed(1)}" width="${h.toFixed(1)}" height="${m.toFixed(1)}" fill="${$}" rx="1"/>`}return c}function Oo(e){let{points:t,n:r,maxPrecipMm:a}=e,o=Qe-Pe,n=a>0,i=n?Math.max(a,2):100,s="";for(let c=0;c<r;c++){let{precipMm:d,precip:p}=t[c],l=n?d:p;if(l<=0)continue;let u=Ae(c,r),f=l/i*o,m=Qe-f-2,w=n?d>=10?String(Math.round(d)):d.toFixed(1):`${Math.round(p)}%`;s+=`<text x="${u.toFixed(1)}" y="${m.toFixed(1)}" text-anchor="middle" fill="color-mix(in srgb, var(--pw-wind) 90%, transparent)" font-size="13" font-weight="600">${g(w)}</text>`}return s}function zo(e){let{points:t,n:r,min:a,max:o}=e,n=t.map(f=>parseFloat(f.temp.toFixed(1))),i=t.map((f,m)=>({x:Ae(m,r),y:xa(n[m],a,o)})),s=i.map((f,m)=>`${m===0?"M":"L"}${f.x.toFixed(1)},${f.y.toFixed(1)}`).join(" "),c=`${s} L${i[i.length-1].x.toFixed(1)},${Pe} L${i[0].x.toFixed(1)},${Pe} Z`,d=Xe("pw-meteogram-grad"),p=It(o),l=It(a),u=`<defs><linearGradient id="${d}" x1="0" y1="0" x2="0" y2="1">`;return u+=`<stop offset="0%" stop-color="${S(p)}" stop-opacity="0.25"/>`,u+=`<stop offset="100%" stop-color="${S(l)}" stop-opacity="0.03"/>`,u+="</linearGradient></defs>",u+=`<path d="${c}" fill="url(#${d})"/>`,u+=`<path d="${s}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,u}function Ho(e){let{points:t,n:r}=e,a="";for(let o=0;o<r;o+=Co){let n=Ae(o,r);a+=`<text x="${n.toFixed(1)}" y="${Fo}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${g(t[o].timeLabel)}</text>`}return a}function Po(e,t,r,a){let o=r/1.852,n=((a+180)%360-90+360)%360,i=Math.round(o/5)*5,s=Math.floor(i/50);i-=s*50;let c=Math.floor(i/10);i-=c*10;let d=Math.floor(i/5),p=18,l="var(--pw-ink-cream-muted)",u="",f=-p;for(let m=0;m<s;m++)u+=`<polygon points="0,${f.toFixed(1)} 9,${(f+3).toFixed(1)} 0,${(f+6).toFixed(1)}" fill="${l}"/>`,f+=6;for(let m=0;m<c;m++)u+=`<line x1="0" y1="${f.toFixed(1)}" x2="9" y2="${(f+4.5).toFixed(1)}" stroke="${l}" stroke-width="1.4" stroke-linecap="round"/>`,f+=4.5;for(let m=0;m<d;m++)u+=`<line x1="0" y1="${f.toFixed(1)}" x2="4.5" y2="${(f+2.25).toFixed(1)}" stroke="${l}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${e.toFixed(1)},${t}) rotate(${n})"><line x1="0" y1="0" x2="0" y2="${-p}" stroke="${l}" stroke-width="1.4" stroke-linecap="round"/>${u}</g>`}function Wo(e){let{points:t,n:r,min:a,max:o,minIdx:n,maxIdx:i}=e,s=0,c=1,d=2,p="";for(let l=0;l<r;l++){let u=l===n||l===i,f=u?s:l%3,m=Ae(l,r),w=xa(t[l].temp,a,o);if(f===s){let h=t[l].temp,b=u?String(Math.round(h)):h.toFixed(1),$=l===n?"var(--pw-wind)":l===i?"var(--pw-vermilion)":"var(--pw-ink-cream)",x=u?17:15,_=w-va;p+=`<text x="${m.toFixed(1)}" y="${_.toFixed(1)}" text-anchor="middle" fill="${$}" font-size="${x}" font-weight="600">${b}\xB0</text>`}else if(f===c){let h=dt(t[l].condition),b=w-va;p+=`<text x="${m.toFixed(1)}" y="${b.toFixed(1)}" text-anchor="middle" font-size="20">${h}</text>`}else if(f===d){let h=Number(t[l].windSpeed),b=Number(t[l].windBearing);if(!Number.isFinite(h)||h<1||!Number.isFinite(b))continue;let $=w-Ao;p+=Po(m,$,h,b)}}return p}function ya({hass:e,config:t,forecastData:r}){let a=r?.hourly||[];if(a.length<2)return null;let o=te(e),n=Number(t.hours),i=t.horizon==="long"?"long":"short",s=Number.isFinite(n)&&n>0?Math.max(4,Math.min(48,n)):i==="long"?24:12,c=Lo(a,s,o);if(!c)return null;let p=(t.show_cloud==="auto"||t.show_cloud===void 0?c.hasCloud:!!t.show_cloud)&&c.hasCloud?Do(c):"",l=ee(c.points[0]?.condition||"sunny",!1),u=[];u.push(Io(c)),u.push(Oo(c)),u.push(zo(c)),u.push(Wo(c));let f=Ae(0,c.n).toFixed(1);u.push(`<line x1="${f}" y1="0" x2="${f}" y2="${Qe}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),u.push(Ho(c));let m=c.n,w=`${m}-hour meteogram showing temperature, condition, wind, and precipitation`,h=m<=12?"next twelve hours":`next ${m===24?"twenty-four":m} hours`,b=Xe("pw-meteogram-title"),$=`
        <div class="pw-meteogram-chart" aria-labelledby="${b}">
          <svg viewBox="0 0 ${le} ${To}" style="width:100%; height:auto" role="img" aria-label="${g(w)}">
            <title id="${b}">${g(w)}</title>
            ${u.join(`
`)}
          </svg>
        </div>`;return q({sectionClass:"pw-meteogram-v2",ariaLabel:w,brandVariant:l,kicker:h,preContent:p,body:$,proAction:"meteo-horizon",proInitial:s>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:t.pro!==!1})}function Ut(e,t){return console.warn(`${ne} ${e}`,t),null}var Bo={overview:Vr,forecast:qr,wind:Zr,air_quality:Jr,astro:da,alerts:ha,atmosphere:ba,meteogram:ya},jt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastEntityId=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._atmosRegistryWarned=!1,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=yr(t),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){let t=this._discovery?.weatherEntityId;return(!this._discovery||t&&!(t in this._hass.states))&&(this._discovery=Tr(this._hass.states,this._config)),this._discovery}_getCeFingerprint(t){let r=this._getDiscovery(),a=r.atmosCe,o=[];for(let n of Object.keys(a)){let i=a[n],s=t.states[i];s&&o.push(`${n}=${s.state}`)}for(let n of r.alertEntityIds){let i=t.states[n];i&&o.push(`${n}=${i.state}`)}return o.join("|")}_warnIfAtmosCeMissing(t,r){let a=new Set(["atmosphere","air_quality","meteogram"]);if(!t.some(c=>a.has(c.type))||Object.keys(r.atmosCe).length>0)return;let n=this._config,i=n.atmos_source||Dt(r.weatherEntityId||"");if(this._warnedMissingAtmosCe===i)return;this._warnedMissingAtmosCe=i;let s=n.atmos_source?`Set atmos_source matches no sensor.${i}_* entities. Check the slug.`:`Derived slug "${i}" matches no sensor.${i}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${ne} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${s}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(t){if(this._hass=t,kr(t),!this._config)return;let r=this._config.weather_entity,a=r||Object.keys(t.states).find(c=>c.startsWith("weather."))||"",o=t.states[a];if(!o){r&&this._warnedMissingEntity!==r&&(console.warn(`${ne} weather_entity "${r}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=r);return}let n=this._getCeFingerprint(t),i=`${o.state}|${JSON.stringify(o.attributes)}|${n}`;i!==this._lastWeatherState&&(this._lastWeatherState=i,this._fullRender()),this._subscribeForecast(t,a)}async _subscribeForecast(t,r){let a=Date.now()-this._forecastLastFetch>=Nt;if(!(this._subscribedEntityId===r&&this._forecastData&&!a)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=r,this._forecastEntityId!==r&&(this._forecastData=null,this._forecastEntityId=null);try{if(!t.callWS)return;let o=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let m=(await t.callWS({type:"config/entity_registry/list"}).catch(w=>(this._atmosRegistryWarned||(this._atmosRegistryWarned=!0,console.warn(`${ne} entity registry lookup failed, extended forecast unavailable (admin rights required)`,w)),[]))).find(w=>w.platform==="atmos_ce");this._atmosConfigEntryId=m?.config_entry_id||null}if(this._atmosConfigEntryId){let w=(await t.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(h=>Ut("extended forecast fetch failed, falling back to standard hourly",h)))?.response;w?.forecast&&(o=w.forecast)}}catch(f){console.warn(`${ne} extended forecast fetch failed, falling back to standard hourly`,f)}let n=!1,i=!1,s=null;r&&t.states[r]&&(s=await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:r},service_data:{type:"daily"},return_response:!0}).catch(f=>(n=!0,Ut("daily forecast fetch failed",f))));let c=null;!o&&r&&t.states[r]&&(c=(await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:r},service_data:{type:"hourly"},return_response:!0}).catch(b=>(i=!0,Ut("hourly forecast fetch failed",b))))?.response?.[r]?.forecast||[]);let l=s?.response?.[r],u=this._forecastEntityId===r?this._forecastData:null;if(this._forecastData={hourly:o||(u&&i?u.hourly:c||[]),daily:u&&n?u.daily:l?.forecast||[]},this._forecastEntityId=r,this._forecastLastFetch=Date.now(),!this.isConnected)return;this._fullRender()}catch(o){console.warn(`${ne} forecast fetch failed; retries throttled to ${Nt/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,o),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}connectedCallback(){this._config&&this._hass&&this._fullRender()}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let t=this._getDiscovery(),r=this._hass.states[t.weatherEntityId];if(!r)return;let a=["<style>",vr,"</style>",'<div class="pw-card">'],o=this._config.sections||[];this._warnIfAtmosCeMissing(o,t);for(let n=0;n<o.length;n++){let i=o[n],s=Bo[i.type];if(s)try{let c=s({hass:this._hass,config:i,discovery:t,weatherEntity:r,forecastData:this._forecastEntityId===t.weatherEntityId?this._forecastData:null,sectionIndex:n,proPersisted:!!this._proState[n]});c&&a.push(c)}catch(c){console.warn(`${ne} section "${i?.type}" renderer threw: section will be skipped, other sections continue. Please share the error below when reporting.`,c)}}a.push("</div>"),this.shadowRoot.innerHTML=a.join(""),this._postRender(t),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let n=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!n){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let i=Number(n.dataset.target)-Date.now();if(i<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let s=Math.floor(i/1e3),c=Math.floor(s/3600),d=Math.floor(s%3600/60),p=s%60;n.textContent=(c>0?c+"h "+d+"m":d+"m "+p+"s")+(n.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let t=this._getDiscovery(),r=t.atmosCe,a=this._hass.states[t.sunEntityId||""];if(!a)return;let o=new Date,n=o.getTime(),i=[],s=a.attributes?.next_rising,c=a.attributes?.next_setting,{todaySunrise:d,todaySunset:p}=ze(o,s,c),l=a.attributes?.next_rising?new Date(a.attributes.next_rising).getTime():NaN,u=a.attributes?.next_setting?new Date(a.attributes.next_setting).getTime():NaN;Number.isFinite(l)&&l>n&&i.push(l),Number.isFinite(u)&&u>n&&i.push(u);let f={golden_hour_morning_start:d,golden_hour_morning_end:d,blue_hour_morning_start:d,blue_hour_morning_end:d,golden_hour_evening_start:p,golden_hour_evening_end:p,blue_hour_evening_start:p,blue_hour_evening_end:p};for(let[h,b]of Object.entries(f)){if(!r[h])continue;let $=new Date(String(this._hass.states[r[h]]?.state||""));if(isNaN($.getTime()))continue;let x=K($,b);if(!x)continue;let _=x.getTime();_>n&&i.push(_);let M=_+864e5;M>n&&i.push(M)}if(i.length===0)return;let w=Math.min(...i)-n+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},w)}_postRender(t){if(!this.shadowRoot||!this._hass)return;let r=qe(),a=r?[]:this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let l of a){let u=l.getAttribute("data-condition")||"",f=l.getAttribute("data-night")==="true",m=null;try{let h=l.getAttribute("data-cloud");h&&h!=='""'&&h!==""&&(m=JSON.parse(h))}catch{}let w=Or(u,f,m);l.replaceChildren(w)}let o=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let l of o){let u=Number(l.getAttribute("data-pm25"))||0,f=Number(l.getAttribute("data-pm10"))||0,m=l.querySelector(".pw-fx");if(m&&(u>0||f>0)){let w=document.createDocumentFragment();Ir(w,u,f),m.replaceChildren(w)}}let n=r?[]:this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let l of n){let u=l.getAttribute("data-astro-stars")==="true",f=l.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();u&&zt(m),f&&(Z(m,3,.5),ut(m)),l.replaceChildren(m)}let i=r?[]:this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let l of i){let u=Number(l.getAttribute("data-atmos-score"))||0,f=l.getAttribute("data-atmos-color")||"#30d158",m=ga(u,f);l.replaceChildren(m)}let s=[...this.shadowRoot.querySelectorAll(".pw-section")],c=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let l of c)l.addEventListener("click",u=>{let f=u.currentTarget,m=f.closest(".pw-section");if(!m||!this._config)return;let w=s.indexOf(m);if(w<0)return;let h=m.dataset.proAction||"view-swap";if(h==="wind-mode"||h==="meteo-horizon"||h==="aqi-scale"){let $=(this._config.sections||[]).map((_,M)=>M===w?{..._}:_),x=$[w];if(!x)return;if(h==="wind-mode"&&x.type==="wind")x.speed_mode=x.speed_mode==="gust"?"speed":"gust";else if(h==="meteo-horizon"&&x.type==="meteogram"){let _=Number(x.hours),M=Number.isFinite(_)&&_>0?_>=18:x.horizon==="long";x.horizon=M?"short":"long","hours"in x&&delete x.hours}else h==="aqi-scale"&&x.type==="air_quality"&&(x.scale=x.scale==="us"?"eu":"us");this._config={...this._config,sections:$},this._fullRender();return}let b=m.dataset.pro==="true"?"false":"true";m.dataset.pro=b,f.setAttribute("aria-pressed",b),this._proState[w]=b==="true"});let d=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let l of d){let u=!1,f=0,m=0,w=l;w.setAttribute("tabindex","0"),w.setAttribute("role","group"),w.hasAttribute("aria-label")||w.setAttribute("aria-label","Hourly forecast, scrollable"),l.addEventListener("mousedown",h=>{u=!0,f=h.pageX-l.offsetLeft,m=l.scrollLeft,l.style.cursor="grabbing"}),l.addEventListener("mouseleave",()=>{u=!1,l.style.cursor=""}),l.addEventListener("mouseup",()=>{u=!1,l.style.cursor=""}),l.addEventListener("mousemove",h=>{if(!u)return;h.preventDefault();let b=h.pageX-l.offsetLeft;l.scrollLeft=m-(b-f)}),l.addEventListener("touchstart",h=>{h.stopPropagation()},{passive:!0}),l.addEventListener("touchmove",h=>{h.stopPropagation()},{passive:!0}),l.addEventListener("wheel",h=>{let b=h;Math.abs(b.deltaX)<Math.abs(b.deltaY)&&(h.preventDefault(),l.scrollLeft+=b.deltaY)},{passive:!1})}let p=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(p){let l=this.shadowRoot.querySelector(".pw-atmos-detail");if(l){this._atmosExpanded&&(l.style.maxHeight=`${l.scrollHeight}px`,p.setAttribute("aria-expanded","true"));let u=()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(l.style.maxHeight=`${l.scrollHeight}px`,p.setAttribute("aria-expanded","true")):(l.style.maxHeight="0",p.setAttribute("aria-expanded","false"))};Mr(p,u),p.hasAttribute("aria-expanded")||p.setAttribute("aria-expanded","false"),p.addEventListener("click",u)}}}getCardSize(){let t=this._config?.sections?.length||1;return Math.max(3,t*3)}getGridOptions(){return _r(6)}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(ar)}static getStubConfig(t){let r=Object.keys(t.states).find(a=>a.startsWith("weather."));return{type:`custom:${Ie}`,weather_entity:r||"weather.home",sections:[{type:"overview"}]}}};customElements.get(Ie)||(customElements.define(Ie,jt),console.info(`%c ${Ie.toUpperCase()} %c v${rr} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:Ie,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});export{jt as PulseWeatherCard};

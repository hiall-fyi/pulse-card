var ma="1.8.2",He="pulse-weather-card",fa="pulse-weather-card-editor",me="Pulse Weather Card:",ha=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],Be={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},pt=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],dt=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],ut=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var zt=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],Dt=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var Qe=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],We=80,ga=35;var Ot=.6,wa=90,ba=60,va=40,Pt=8;var Ht=1800*1e3,xa=7,ya=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],_a={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"},Bt={1:"#FFFF00",2:"#FFA500",3:"#FF9F0A",4:"#FF0000"},$a={yellow:"#FFFF00",amber:"#FF9F0A",red:"#FF0000"};var ka=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],Sa=["active_alert","upcoming_alert","alert_count"],Wt="_weather",Ma=3;var Ta={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},J=29.53,Fa=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var Aa=`
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pulse Card Family \u2014 Shared Design Tokens
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
  --pulse-space-card-wide: 20px;     /* weather chrome \u2014 wider inset for hero/cartouche layouts */
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

/* Card title \u2014 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label \u2014 uppercase, small, secondary tone.
   No opacity multiplier: --pulse-text-secondary is already the dimmed token,
   stacking 0.7 on top dropped light-theme contrast below WCAG-large threshold. */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stats row \u2014 grid layout primitive shared across the Pulse card
   family. Children are stat tiles emitted by each card's own type
   builder (e.g. pulse-weather's pt.stat). The row controls only
   layout: column count, divider, gap, margin.
   - data-cols: "3" | "4" \u2014 column count (default 4)
   - data-divided: "true" \u2014 adds a 1px hairline at the top so the row
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

/* Precipitation bar \u2014 Dark Sky signature element */
.pulse-precip-bar {
  height: 32px;
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-pill);
  display: flex;
  overflow: hidden;
}

.pulse-precip-slot {
  flex: 1;
  position: relative;
}

.pulse-precip-fill {
  position: absolute;
  bottom: 0;
  left: 1px;
  right: 1px;
  border-radius: var(--pulse-radius-bar) var(--pulse-radius-bar) 0 0;
  background: var(--pulse-info-color);
}
`;var Ca=`${""}

${Aa}
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
  --pw-sky-bot: #827a6a;
  --pw-ink-cream: #fdf6e3;
  --pw-ink-cream-muted: rgba(229, 217, 194, 0.85);
  --pw-ink-cream-dim: rgba(229, 217, 194, 0.55);
  --pw-vermilion: #a83d2a;
  --pw-wind: #5ac8fa;
  --pw-warn-amber: #ff9f0a;
  --pw-warn-red: #ff453a;
  --pw-warn-yellow: #ffd60a;
  --pw-good-green: #30d158;

  /* Card-local \u2014 Weather is the only consumer at this size; everything else
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
  /* font-family inherits from the HA frame \u2014 same as pulse-climate-card. */
  container-type: inline-size;
}

/* \u2500\u2500 Cartouche frame primitive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Default sky gradient \u2014 applies to every section unless that section
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

/* Precipitation bar label */
.pw-precip-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-bottom: 6px;
}

/* Snow badge */
.pw-snow-badge {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  position: relative;
  z-index: 2;
  text-shadow: var(--pw-shadow-overlay);
}

/* Feels like context */
.pw-feels-context {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Snow precip fill \u2014 white gradient (bottom opaque \u2192 top transparent) */
.pw-precip-snow {
  background: linear-gradient(to top, var(--pw-text-overlay, #d0d0d0), transparent) !important;
}

/* Rain precip fill \u2014 gradient (bottom opaque \u2192 top fade) */
.pulse-precip-fill {
  background: linear-gradient(to top, #5ac8fa, rgba(90,200,250,0.15));
}

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
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
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

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 3px;
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
  color: var(--pulse-text-secondary);
  opacity: 0.7;
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

/* LCL height marker (dashed line, grey \u2014 distinct from freeze marker) */
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
  color: var(--pulse-text-secondary);
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
  color: var(--pulse-text-secondary);
  opacity: 0.6;
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

/* \u2500\u2500 Alert rows \u2014 Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: var(--pulse-space-row);
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.5;
  margin-top: 3px;
}

/* \u2500\u2500 Weather Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-weather-summary { font-size: 13px; font-weight: 400; text-align: center; padding: 4px var(--pulse-space-card-wide) 8px; color: var(--pulse-text-primary); position: relative; z-index: 2; opacity: 0.85; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: var(--pulse-space-element); padding: 4px var(--pulse-space-card-wide) 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pulse-text-secondary); font-variant-numeric: tabular-nums; opacity: 0.6; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: var(--pulse-radius-hairline); background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: var(--pulse-radius-hairline); background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: var(--pulse-radius-circle); border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* \u2500\u2500 Stability Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-stability-badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: var(--pulse-radius-element); margin-left: 6px; vertical-align: middle; }

/* \u2500\u2500 Precip Time Markers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-precip-times { display: flex; justify-content: space-between; font-size: 9px; color: var(--pulse-text-secondary); opacity: 0.6; margin-top: 2px; }

/* \u2500\u2500 Freezing Level Marker (Temp Arc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-arc-freeze { position: absolute; top: -6px; bottom: -6px; width: 1px; transform: translateX(-50%); }
.pw-arc-freeze-line { width: 1px; height: 100%; background: var(--pw-color-freeze); opacity: 0.5; }
.pw-arc-freeze-label { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* \u2500\u2500 CAPE Sparkline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-cape-sparkline { display: block; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-cape-peak { position: absolute; top: -12px; transform: translateX(-50%); font-size: 8px; color: var(--pulse-tier-strong); white-space: nowrap; font-variant-numeric: tabular-nums; }

/* \u2500\u2500 Comfort Bar (Dew Point) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-comfort-bar { display: flex; gap: var(--pulse-space-hairline); height: 4px; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-comfort-slot { flex: 1; border-radius: var(--pulse-radius-hairline); }

@media (prefers-reduced-motion: reduce) {
  .pw-streak,
  .pw-dust-particle,
  .pw-haze-blob,
  .pw-tension-wash.breathing,
  .pw-tension-vignette,
  .pw-radar::after,
  .pw-radar-blip,
  .pw-thermal-particle {
    animation: none !important;
  }
  .pw-atmos-detail {
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
 * layout-only (padding, grid, gradient, brand-mark corner offset) \u2014
 * they should never restate font-size / font-weight
 * / text-transform. To add a new role, add it here AND in
 * type-system.js together.
 */

/* Hero block \u2014 wraps heroTier + display + narrative. Sections that
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

/* Top-marg wrapper \u2014 reserves the right gutter for the brand mark. */
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

/* Hero numbers \u2014 display size, tabular numerals. */
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

/* Hero tier \u2014 Atmosphere uses the larger title flavour, AQI the
   smaller body-sm flavour. Title Case \u2014 no text-transform. */
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

/* Narrative \u2014 Sentence case body. Centred caption that fills the
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

/* Italic gloss \u2014 lowercase italic body-sm. */
.pw-t-gloss {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: var(--pw-ink-cream-dim);
  text-align: center;
}

/* Italic meta caption \u2014 sentence-case italic micro. */
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

/* Chart caption \u2014 header above a chart. Lowercase 0.14em micro. */
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
/* Decorative brand mark (sections without a click action \u2014 Forecast,
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
   only have a default view today work fine \u2014 the rule has no effect
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
/* Location stamp \u2014 same anatomy as kicker but tighter tracking and
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
   top hairline \u2014 gives a calmer visual rhythm under the busy hero
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
   stats grid. Caption above, sparkline below \u2014 same anatomy as a
   chart-caption + chart pair anywhere else in the family. */
.pw-overview-v2 .pw-overview-spark-block {
  margin: 0;
}
.pw-overview-v2 .pw-overview-spark {
  height: 38px;
}
.pw-overview-v2 .pw-overview-spark svg {
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
   actual time \u2014 making NOW-cursor look misaligned even when its
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

/* The second stats row sits flush under the first \u2014 no divider, no
   extra margin \u2014 so they read as one block. */
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
/* Vertical column visualisation \u2014 atmospheric profile up to 5km
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

/* \u2500\u2500 Wind (cartouche wrap only \u2014 rose preserved) \u2500 */
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
/* Pollutant tiles use the larger body size \u2014 the value here is a
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
.pw-alerts-v2 .pw-alert-amber .pw-alert-tri { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-red .pw-alert-tri { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-alert-text {
  font-weight: 700;
  font-size: var(--pw-font-caption);
  letter-spacing: 0.08em;
  line-height: 1.4;
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-text {
  color: var(--pw-warn-yellow);
  text-shadow: 0 0 6px rgba(255, 214, 10, 0.5);
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
}
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-amber { color: rgba(255, 159, 10, 0.55); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-red { color: rgba(255, 69, 58, 0.7); }
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
   (.pw-alert-amber / .pw-alert-red) drives border + headline colour. */
.pw-alerts-v2 .pw-alert-detail {
  background: rgba(229, 217, 194, 0.04);
  border: 1px solid;
  border-radius: var(--pulse-radius-pill);
  padding: 10px 12px;
  margin-top: var(--pw-gap-tight);
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
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber .pw-alert-detail-head {
  color: var(--pw-warn-yellow);
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
`;var Ea=[{type:"overview"}],lo={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function mt(e){if(!e)return{type:"overview"};if(typeof e=="string")return mt({type:e});if(typeof e!="object")return{type:"overview"};let t=ha.includes(e.type)?e.type:"overview";return{...lo[t]||{},...e,type:t}}function Na(e){if(!e||typeof e!="object")return{type:"custom:pulse-weather-card",sections:Ea.map(mt)};let t=e,a=Array.isArray(t.sections)&&t.sections.length>0?t.sections.map(mt):Ea.map(mt);return{type:t.type||"custom:pulse-weather-card",weather_entity:t.weather_entity||void 0,atmos_source:t.atmos_source||void 0,sections:a}}function g(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function Ze(e){return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}var Ut=0;function Ra(e="pulse-id"){return Ut=Ut+1>>>0,`${e}-${Ut.toString(36)}`}function Vt(e){let t=e.replace(/^weather\./,"");return t.endsWith(Wt)&&(t=t.slice(0,-Wt.length)),t}function La(e,t){let a=t.weather_entity||Object.keys(e).find(c=>c.startsWith("weather."))||"",r=t.atmos_source||Vt(a),o={};for(let c of ka){let s=`sensor.${r}_${c}`;s in e&&(o[c]=s)}let i=Object.keys(o).length>=Ma,n=i?o:{},l=[];if(t.alert_entities&&t.alert_entities.length>0)for(let c of t.alert_entities)c in e&&l.push(c);else if(i){for(let d of Sa){let u=`sensor.${r}_${d}`,m=`sensor.${r}_warnings_${d}`;u in e?l.push(u):m in e&&l.push(m)}let c=`binary_sensor.${r}_alert_active`,s=`binary_sensor.${r}_warnings_alert_active`;c in e?l.push(c):s in e&&l.push(s)}let p="sun.sun"in e?"sun.sun":null;return{weatherEntityId:a,atmosCe:n,sunEntityId:p,atmosSource:i?r:null,alertEntityIds:l}}function co(e){if(typeof e!="string")return null;let t=e.trim().replace(/^#/,"");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6||/[^0-9a-f]/i.test(t)?null:{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function ke(e,t){if(typeof e!="string")return String(e);let a=Math.max(0,Math.min(1,Number(t))),r=co(e);if(r)return`rgba(${r.r},${r.g},${r.b},${a})`;let o=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(e.trim());return o?`rgba(${o[1]},${o[2]},${o[3]},${a})`:e}function za(e,t){return e.filter(a=>Number.isFinite(t(a)))}function G(e,t=0){let a=Number(e);return Number.isFinite(a)?a:t}function ft(e,t,a,r,o,i=0){if(t?.[r]){let n=Number(e?.states?.[t[r]]?.state);if(Number.isFinite(n))return n}return Number(a?.[o]??i)||i}function Da(e,t,a,r){return t?.[a]&&e?.states?.[t[a]]?.attributes?.unit_of_measurement||r}function Ue(e,t,a=0){let r=t?e?.states?.[t]:null;if(!r)return{value:a,unit:void 0,entity:null};let o=Number(r.state);return{value:Number.isFinite(o)?o:a,unit:r.attributes?.unit_of_measurement,entity:r}}function ht(e,t,a){let r=t?.state||"sunny",o=a?.sunEntityId?e?.states?.[a.sunEntityId]?.state:null;return{condition:r,isNight:r==="clear-night"||o==="below_horizon"}}function Je(e="pw-id"){return Ra(e)}function Oa(e){return`${e}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function gt(e,t,a=36e5){let r=(t?t.getTime():Date.now())-a;return e.filter(o=>{let i=o.datetime;if(!i)return!1;let n=new Date(i).getTime();return Number.isFinite(n)&&n>=r})}function Se(e){let t=Number(e);for(let a of pt)if(t<=a.max)return a.color;return pt[pt.length-1].color}function jt(e){let t=Number(e);for(let a of dt)if(t<=a.max)return a.tier;return dt[dt.length-1].tier}function Pa(e){return Be[jt(e)]||Be.calm}function wt(e){let t=Number(e);for(let a of ut)if(t<=a.max)return a;return ut[ut.length-1]}function bt(e){let t=(Number(e)%360+360)%360,a=Math.round(t/22.5)%16;return ya[a]}function Ha(e){return e<=12?"#30d158":e<=50?"#5ac8fa":e<=87?"#ff9f0a":"#ff453a"}function Ba(e){return e<10?"#5ac8fa":e<16?"#30d158":e<19?"#ffd60a":e<22?"#ff9f0a":"#ff453a"}function Ve(e,t,a){if(!t||!a)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let r=new Date(t),o=new Date(a);if(isNaN(r.getTime())||isNaN(o.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let i=r.getTime()>e.getTime()?new Date(r.getTime()-864e5):r,n=o.getTime()>e.getTime()?o:new Date(o.getTime()-864e5);n.getTime()>i.getTime()+864e5&&(n=new Date(n.getTime()-864e5)),i.getTime()>n.getTime()&&(i=new Date(i.getTime()-864e5));let l=r.getTime()>e.getTime()?r:new Date(r.getTime()+864e5);return{todaySunrise:i,todaySunset:n,tomorrowSunrise:l}}function Y(e,t){if(!e||isNaN(e.getTime()))return null;if(!t)return e;let a=t.getTime(),r=[e,new Date(e.getTime()-864e5),new Date(e.getTime()+864e5)],o=r[0],i=Math.abs(o.getTime()-a);for(let n=1;n<r.length;n+=1){let l=Math.abs(r[n].getTime()-a);l<i&&(o=r[n],i=l)}return o}function ne(e,t,a){let r=t?Object.entries(t).map(([o,i])=>` ${o}="${i}"`).join(""):"";return a!=null?`<${e}${r}>${a}</${e}>`:`<${e}${r}/>`}function vt(e){return Ta[e]||"\u{1F324}\uFE0F"}var Ia={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function Wa(e){return Object.hasOwn(Ia,e)?Ia[e]:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function re(e,t,a){let r=document.createElement(e);if(r.className=t,a)for(let[o,i]of Object.entries(a))r.style.setProperty(o,i);return r}function A(e,t){return Math.random()*(t-e)+e}function et(e,t=60,a=1,r=2){let o=Math.min(t,wa);for(let i=0;i<o;i++){let n=re("div","pw-rain-drop"),l=A(15,30),p=A(.4,.8)/a;Object.assign(n.style,{left:`${A(0,100)}%`,top:`${A(-10,20)}%`,width:`${r}px`,height:`${l}px`,borderRadius:`0 0 ${r}px ${r}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${p}s linear ${A(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(n)}}function qt(e,t=40){let a=Math.min(t,ba);for(let r=0;r<a;r++){let o=re("div","pw-snowflake"),i=A(2,5);Object.assign(o.style,{left:`${A(0,100)}%`,top:`${A(-5,10)}%`,width:`${i}px`,height:`${i}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${A(3,6)}s linear ${A(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(o)}}function po(e){for(let t=0;t<4;t++){let a=re("div","pw-fog-layer");Object.assign(a.style,{position:"absolute",width:"200%",height:"40px",top:`${30+t*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${A(15,25)}s linear ${t*2}s infinite`,animationFillMode:"backwards"}),e.appendChild(a)}}function xt(e){for(let t=0;t<8;t++){let a=re("div","pw-sun-ray");Object.assign(a.style,{position:"absolute",top:"-20px",left:`${10+t*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+t*4}deg)`,animation:`pw-rayPulse ${A(3,5)}s ease-in-out ${A(0,2)}s infinite`,animationFillMode:"backwards"}),e.appendChild(a)}}function K(e,t=4,a=1){let r=Math.min(t,Pt);for(let o=0;o<r;o++){let i=re("div","pw-cloud"),n=A(80,160),l=A(30,60),p=A(20,40)/a;Object.assign(i.style,{position:"absolute",width:`${n}px`,height:`${l}px`,top:`${A(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${p}s linear ${A(0,15)}s infinite`,animationFillMode:"backwards"}),e.appendChild(i)}}function Gt(e){for(let t=0;t<va;t++){let a=re("div","pw-star"),r=A(1,3);Object.assign(a.style,{position:"absolute",left:`${A(0,100)}%`,top:`${A(0,70)}%`,width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${A(2,5)}s ease-in-out ${A(0,3)}s infinite`,animationFillMode:"backwards"}),e.appendChild(a)}}function uo(e,t){let a=[],r=e,o=0,i=Math.floor(A(4,8)),n=t/i;a.push(`${r},${o}`);for(let l=0;l<i;l++)r+=A(-15,15),o+=n,a.push(`${r},${o}`);return a.join(" ")}function Ua(e,t=2,a){let r=a||Array.from({length:t},(i,n)=>n*3),o=re("div","pw-lightning-flash");Object.assign(o.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${r[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),e.appendChild(o);for(let i=0;i<t;i++){let n="http://www.w3.org/2000/svg",l=document.createElementNS(n,"svg");l.setAttribute("class","pw-lightning-bolt"),l.setAttribute("width","60"),l.setAttribute("height","200"),l.setAttribute("viewBox","0 0 60 200"),l.style.position="absolute",l.style.top="0",l.style.left=`${A(15,75)}%`,l.style.pointerEvents="none",l.style.zIndex="2",l.style.animation=`pw-boltStrike 6s ease-in-out ${r[i]||0}s infinite`,l.style.animationFillMode="backwards";let p=uo(30,180),c=document.createElementNS(n,"polyline");c.setAttribute("points",p),c.setAttribute("fill","none"),c.setAttribute("stroke","rgba(200,220,255,0.4)"),c.setAttribute("stroke-width","6"),c.setAttribute("stroke-linecap","round"),c.setAttribute("stroke-linejoin","round"),l.appendChild(c);let s=document.createElementNS(n,"polyline");s.setAttribute("points",p),s.setAttribute("fill","none"),s.setAttribute("stroke","#fff"),s.setAttribute("stroke-width","2"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),l.appendChild(s),e.appendChild(l)}}function mo(e){let t=re("div","pw-heat-shimmer");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),e.appendChild(t);let a=re("div","pw-heat-ripple");Object.assign(a.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),e.appendChild(a)}function Va(e,t,a){let r=Math.min(1,(t/75+a/150)/2);if(r<.05)return;let o=re("div","pw-smog-overlay");o.style.background=`rgba(120,110,80,${.05+r*.15})`,e.appendChild(o);let i=re("div","pw-haze-vignette");i.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${r*.3}) 100%)`,e.appendChild(i);let n=Math.floor(r*20);for(let p=0;p<n;p++){let c=re("div","pw-dust-particle"),s=A(1,3+r*3);Object.assign(c.style,{left:`${A(0,100)}%`,top:`${A(10,90)}%`,width:`${s}px`,height:`${s}px`,animationDelay:`${A(0,8)}s`,animationFillMode:"backwards"}),e.appendChild(c)}let l=Math.floor(r*5);for(let p=0;p<l;p++){let c=re("div","pw-haze-blob"),s=A(60,120);Object.assign(c.style,{left:`${A(-10,80)}%`,top:`${A(10,70)}%`,width:`${s}px`,height:`${s*.6}px`,animationDelay:`${A(0,12)}s`,animationFillMode:"backwards"}),e.appendChild(c)}}function ja(e,t,a){let r=document.createDocumentFragment();try{t&&Gt(r);let o=a?Math.round(a.total/100*Pt):0;switch(e){case"sunny":t||xt(r),a&&o>0&&K(r,o);break;case"clear-night":a&&o>0&&K(r,o);break;case"partlycloudy":t||xt(r),K(r,a?o:3);break;case"cloudy":K(r,a?Math.max(o,4):6);break;case"rainy":et(r,40,1,2),K(r,a?Math.max(o,3):4);break;case"pouring":et(r,80,1.5,3),K(r,a?Math.max(o,5):6);break;case"snowy":qt(r,40),K(r,a?Math.max(o,3):4);break;case"snowy-rainy":qt(r,20),et(r,20,.8,1),K(r,a?Math.max(o,3):4);break;case"hail":et(r,30,1.2,3),qt(r,15),K(r,a?Math.max(o,4):5);break;case"lightning":Ua(r,2,[0,3]),K(r,a?Math.max(o,5):6);break;case"lightning-rainy":Ua(r,3,[0,2,4]),et(r,60,1.3,2),K(r,a?Math.max(o,5):6);break;case"fog":po(r);break;case"windy":case"windy-variant":K(r,a?o:3,1.5);break;case"exceptional":mo(r);break;default:a&&o>0&&K(r,o);break}}catch(o){console.warn(`${me} buildConditionFx threw \u2014 atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,o)}return r}function tt(e,t,a){return a===t?0:Math.max(0,Math.min(1,(e-t)/(a-t)))}function Xt(e,t,a="ellipse"){let r=Math.max(0,Math.min(1,t)),o=Math.round(3+r*50),i=Math.round(2+r*25),n=Math.round(50+r*30),l=p=>p.toString(16).padStart(2,"0");return`radial-gradient(${a} at 50% 30%, ${e}${l(o)} 0%, ${e}${l(i)} ${n}%, transparent 90%)`}function qa(e,t=6,a=1.2){let r=Math.max(0,Math.min(1,e));return t-r*(t-a)}function Ga(e,t){let a=Math.max(0,Math.min(1,t)),r=Math.round(4+a*20),o=Math.round(a*8),n=Math.round((.15+a*.55)*255).toString(16).padStart(2,"0");return`0 0 ${r}px ${o}px ${e}${n}`}function Xa(e,t="0,0,0"){let a=Math.max(0,Math.min(1,e));if(a<.1)return"";let r=Math.round(60-a*30),o=(a*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${r}%, rgba(${t},${o}) 100%)`}function Ya(e,t=8,a=2){let r=Math.max(0,Math.min(1,e));return t-r*(t-a)}var fo="#a83d2a",Ka="#7a2d20",Ce="#fdf6e3",ho='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',go="</svg>";function Qa(e){let t=["day","cloudy","rain","night"].includes(e)?e:"day",r=`<circle class="mc" cx="20" cy="20" r="18" fill="${t==="night"?Ka:fo}" opacity="0.92"/>`,o=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${Ce}" stroke-width="0.8" opacity="0.85"/>`,i="";return t==="day"?i=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ce}" opacity="0.95"/>`:t==="cloudy"?i=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ce}" opacity="0.45"/>`:t==="rain"?i=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${Ce}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${Ce}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${Ce}" stroke-width="0.7" opacity="0.55"/>`].join(""):t==="night"&&(i=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ce}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${Ka}"/>`),`${ho}${r}${o}${i}${go}`}function ee(e,t){return t?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(e)?"rain":["cloudy","fog"].includes(e)?"cloudy":"day"}var y={kicker(e){return`<div class="pw-t-kicker">${g(e)}</div>`},heroTier(e,{flavor:t="aqi",color:a=""}={}){let r=t==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",o=a?` style="color:${k(a)}"`:"";return`<div class="pw-t-hero-tier ${r}"${o}>${g(e)}</div>`},display(e,{color:t="",suffix:a=""}={}){let r=t?` style="color:${k(t)}"`:"",o=a?`<span class="pw-t-display-suf">${g(a)}</span>`:"";return`<div class="pw-t-display"${r}>${g(String(e))}${o}</div>`},narrative(e){return`<div class="pw-t-narrative">${g(e)}</div>`},gloss(e){return`<div class="pw-t-gloss">${g(e)}</div>`},meta(e){return`<div class="pw-t-meta">${g(e)}</div>`},chartCaption(e){return`<div class="pw-t-chart-caption">${g(e)}</div>`},stat(e,t,{data:a=!1,valueColor:r=""}={}){let o=r?` style="color:${k(r)}"`:"",i=a?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${o}>${g(String(e))}</div><div class="${i}">${g(t)}</div></div>`},statLabel(e){return`<span class="pw-t-stat-l">${g(e)}</span>`},dataToken(e){return`<span class="pw-t-data">${e}</span>`},heroBlock({tier:e="",tierFlavor:t="aqi",tierColor:a="",value:r="",valueSuffix:o="",valueColor:i="",narrative:n=""}={}){let l=e?this.heroTier(e,{flavor:t,color:a}):"",p=r!==""?this.display(r,{color:i,suffix:o}):"",c=n?this.narrative(n):"";return`<div class="pw-hero-block">${l}${p}${c}</div>`},statsRow(e,{columns:t=4,divided:a=!1}={}){let r=e.filter(Boolean);return r.length?`<div class="pulse-stats-row" data-cols="${t}"${a?' data-divided="true"':""}>${r.join("")}</div>`:""}};function X({sectionClass:e,ariaLabel:t,brandVariant:a,kicker:r="",narrative:o="",preContent:i="",extraSectionClass:n="",sectionStyle:l="",body:p,proView:c="",proInitial:s=!1,proAction:d="view-swap",proAriaLabel:u="Toggle pro view",pro:m=!0}){m===!1&&(c="",d="view-swap",s=!1);let f=l?` style="${l}"`:"",h=`pw-section pw-cartouche ${e}${n?` ${n}`:""}`,v=Qa(a),x=[r?y.kicker(r):"",o?y.narrative(o):""].filter(Boolean).join(""),w=x?`<div class="pw-t-marg">${x}</div>`:"",$=!!c,_=$||d!=="view-swap",S=$?`<div class="pw-view pw-view-default">${p}</div><div class="pw-view pw-view-pro">${c}</div>`:p,D=s?"true":"false",F=_?`<button class="pw-brand-mark-corner" aria-label="${g(u)}" aria-pressed="${D}" type="button">${v}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${v}</div>`;return`
    <div class="${h}" data-pro="${D}" data-pro-action="${d}"${f} role="region" aria-label="${g(t)}">
      ${i}
      ${F}
      <div class="pw-content">
        ${w}
        ${S}
      </div>
    </div>`}var Yt=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),wo=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function bo(e,t){let a=Math.min(100,e/4e3*100),r=Math.min(100,Math.max(0,(6-t)/12*100));return Math.round(a*.6+r*.4)}function vo(e){return e<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:e<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:e<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:e<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function xo(e,t){let a=t.atmosCe,r=a.cape&&e.states[a.cape]&&Number(e.states[a.cape].state)||0,o=a.lifted_index&&e.states[a.lifted_index]&&Number(e.states[a.lifted_index].state)||0,i=!!(a.cape&&e.states[a.cape]),n=!!(a.lifted_index&&e.states[a.lifted_index]),l=i||n?bo(r,o):null;if(a.stability_assessment&&e.states[a.stability_assessment]){let c=e.states[a.stability_assessment].state,s=e.states[a.stability_assessment].attributes||{},d=Yt[c];if(d){let u=wo[c]??0;return{tierKey:c,...d,score:u,source:"composite",attrs:s,capeValue:r,liValue:o,hasCape:i,hasLI:n}}}let p=l!==null?vo(l):null;return{tierKey:p?.tierKey||"unknown",label:p?.label||"Unknown",color:p?.color||"#888888",desc:p?.desc||"",score:l,source:"fallback",attrs:null,capeValue:r,liValue:o,hasCape:i,hasLI:n}}function yo(e){return Math.max(0,Math.min(100,e))}function Za(e,t=5e3){return t<=0?0:Math.max(0,Math.min(100,e/t*100))}function _o(e,t){let i=Math.max(e,t),n=5e3;i>5e3*.8&&(n=Math.max(5e3,Math.ceil(i*1.25/1e3)*1e3));let l=Math.ceil(n/5e3)*1e3;n=Math.ceil(n/l)*l;let p=[];for(let c=n;c>=0;c-=l)p.push(c);return{scaleMax:n,labelInterval:l,labels:p}}var $o=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function ko(e){if(!e)return null;let t=a=>$o[String(e[a]||"none")]??0;return{maxThermal:Math.max(t("cape_tier"),t("lifted_index_tier"),t("lapse_rate_tier")),shearTier:t("wind_shear_tier")}}function So({tierKey:e,tierDesc:t,hourly:a,now:r,todaySunset:o,attrs:i}){if(e==="none"||e==="unknown")return"Atmosphere settled \xB7 no convective signals";let n=ko(i);if(n&&n.maxThermal===0&&n.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let l=o&&!isNaN(o.getTime())?o.getTime():null,p=r.getTime(),c=l!==null&&p>=l,s=Array.isArray(a)?a.slice(0,6):[],d=s.map(w=>Number(w&&w.cape)||0),u=d.some(w=>Number.isFinite(w)&&w>0),m=null,f=null;if(u){let w=Math.max(...d);if(w>0){let $=s[d.indexOf(w)],_=$?$.datetime:null,S=_?new Date(String(_)):null;S&&!isNaN(S.getTime())&&(m=S.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),f=S.getTime())}}if(m===null||f===null){let w=t||"Storm risk active";return c?`${w} \xB7 calming overnight`:w}let h=1800*1e3,v=f<p-h,x=f>=p-h&&f<=p+h;return v?c?`Storm risk easing \u2014 peaked ${m}, calming overnight`:`Storm risk easing \u2014 peaked ${m}`:x?c?"Storm risk peaking now, calming overnight":l!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":l!==null&&f<l?`Storm risk peaks ${m}, calming after sunset`:l!==null?`Storm risk peaks ${m} (after sunset)`:`Storm risk peaks ${m}`}var gi=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var wi=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function Mo(e){let t=Math.max(0,Math.min(100,e)),a=t/100;return{count:t<=10?0:Math.round(2+a*6),minSize:2+Math.round(a),maxSize:3+Math.round(a),minDur:4-a*2.2,maxDur:4-a*1.2}}function Ja(e,t,a=Math.random){let r=document.createDocumentFragment(),o=Mo(e);if(o.count===0)return r;let i=k(t);for(let n=0;n<o.count;n++){let l=document.createElement("div");l.className="pw-thermal-particle";let p=o.minSize+a()*(o.maxSize-o.minSize),c=10+a()*80,s=a()*30,d=o.minDur+a()*(o.maxDur-o.minDur),u=a()*d,m=.4+a()*.3,f=-(50+a()*60);l.setAttribute("style",[`width:${p.toFixed(1)}px`,`height:${p.toFixed(1)}px`,`left:${c.toFixed(1)}%`,`bottom:${s.toFixed(1)}%`,`background:${i}`,`--rise-dur:${d.toFixed(2)}s`,`--rise-dist:${f.toFixed(0)}px`,`--peak-op:${m.toFixed(2)}`,`animation-delay:${u.toFixed(2)}s`].join(";")),r.appendChild(l)}return r}function er({hass:e,config:t,discovery:a,forecastData:r}){let o=a.atmosCe;if(!o.cape&&!o.lifted_index&&!o.freezing_level_height)return console.debug(`${me} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height) \u2014 section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let i=xo(e,a),{capeValue:n,liValue:l,hasCape:p,hasLI:c,score:s}=i,d=P=>{let Q=o[P];if(!Q||!e.states[Q])return{value:null,unit:""};let te=Number(e.states[Q].state);if(!Number.isFinite(te))return{value:null,unit:""};let pe=String(e.states[Q].attributes?.unit_of_measurement||"");return{value:te,unit:pe}},u=d("wind_shear_0_6_km"),m=d("lapse_rate_700_500_hpa"),f=d("freezing_level_height"),h=d("lcl_height"),v=i.tierKey,x={label:i.label,color:i.color,desc:i.desc},$=["slight","enhanced","moderate","high"].includes(v)?"rain":"cloudy",_=new Date,S=a.sunEntityId?e.states[a.sunEntityId]:null,{todaySunset:D}=Ve(_,S?.attributes?.next_rising,S?.attributes?.next_setting),F=So({tierKey:v,tierDesc:x.desc,hourly:r?.hourly||[],now:_,todaySunset:D,attrs:i.attrs}),C=f.value??0,R=h.value??0,{scaleMax:O,labels:W}=_o(C,R),E=s!==null?yo(s):0,b=x.color,M=p||c?`
          <div class="pw-atmos-cape-fill" style="height:${Number(E)}%;background:linear-gradient(to top, ${k(b)}66, ${k(b)}11)"></div>`:"",N=f.unit||"m",L=f.value!==null?(()=>{let P=Za(f.value,O);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(P)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${g(String(Math.round(f.value)))}${g(N)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",le=h.unit||"m",ce=h.value!==null?(()=>{let P=Za(h.value,O);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(P)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${g(String(Math.round(h.value)))}${g(le)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",Te=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${W.map(P=>`<span class="pw-atmos-scale-label">${P>=1e3?`${P/1e3}km`:String(P)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${M}
            ${L}
            ${ce}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,ye=y.heroBlock({tier:x.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:F}),Fe=[p?y.stat(`${Math.round(n)}`,"cape J/kg"):"",c?y.stat(l.toFixed(1),"lifted idx"):"",u.value!==null?y.stat(`${Math.round(u.value)}`,`shear ${u.unit||"km/h"}`):"",m.value!==null?y.stat(m.value.toFixed(1),`lapse ${m.unit||"\xB0C/km"}`):""],we=y.statsRow(Fe,{columns:4,divided:!0}),U=`
        ${ye}
        ${Te}
        ${we}`;return X({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:$,kicker:"atmospheric stability",body:U,pro:t?.pro!==!1})}function tr(e){let t=e.getHours();return t>=6&&t<12?"this morning":t>=12&&t<17?"this afternoon":t>=17&&t<21?"this evening":"tonight"}function To(e,t){return e==="sunny"||e==="clear-night"?"Clear skies":e==="rainy"||e==="pouring"?"Rain":e==="snowy"||e==="snowy-rainy"?"Snow":e==="lightning"||e==="lightning-rainy"?"Storms":e==="fog"?"Fog":t>=88?"Overcast":t>=50?"Mostly cloudy":t>=12?"Some sun":"Sunny"}function Fo(e){let t=e.slots.slice(0,6);if(t.length===0)return null;let a=Number(t[t.length-1].cloud_coverage),r=Number.isFinite(a)?a-e.cloudCoverNow:0,o=t.reduce((c,s)=>Math.max(c,Number(s.precipitation_probability)||0),0),i=t.reduce((c,s)=>Math.max(c,Number(s.snowfall)||0),0),l=t.reduce((c,s)=>Math.max(c,Number(s.wind_speed)||0),e.windSpeed)-e.windSpeed;return["moderate","high"].includes(e.stabilityState)?"with thunderstorms developing":o>=60?i>0?"with snow likely":"with rain likely":o>=40?i>0?"with snow possible":"with a brief shower or two":r>=30?"then increasing clouds":r<=-30?"then clearing":l>=8?"with wind firming":null}function ar(e){let t=To(e.conditionNow,Number(e.cloudCoverNow)||0),a=Fo(e),r=a?tr(e.now):null,o;return a?a.startsWith("then ")?o=`${t}, ${a} ${r}.`:o=`${t}, then ${a} ${r}.`:o=`${t} ${tr(e.now)}.`,{initial:t,transition:a,anchor:r,sentence:o}}var Ao={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},Co="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",rr={dry:"#30d158",comfortable:"#30d158",slightly_humid:"#ffd60a",humid:"#ff9f0a",oppressive:"#ff453a",clear:"#30d158",good:"#30d158",moderate:"#ffd60a",poor:"#ff9f0a",fog:"#ff453a"};function Eo(e){return e<=30?"#5ac8fa":e<=60?"#30d158":e<=80?"#ff9f0a":"#ff453a"}function No(e,t){if(e==null)return"Press";let a=Math.abs(Number(e));if(a<=1)return"Press";let r=t==="rising"?"Rising":t==="falling"?"Falling":"Press";return a>3?`${r} rapidly`:r}function Ro(e,t,a){let r=e.map(s=>{let d=Number(s.cape);return Number.isFinite(d)?d:0}),o=Math.max(...r,300),i=Math.max(...r),n=r.indexOf(i),p=r.map((s,d)=>({x:d/Math.max(e.length-1,1)*t,y:a-s/o*a})).map((s,d)=>`${d===0?"M":"L"}${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(" "),c=`${p} L${t},${a} L0,${a} Z`;return{svgPath:p,areaPath:c,peakValue:i,peakIndex:n,maxCape:o}}function Lo(e,t,a,r,o,i,n,l){let p=[];return n>0&&p.push({name:"Snow",value:n,unit:l}),a>0&&p.push({name:"Rain",value:a,unit:r}),o>0&&p.push({name:"Showers",value:o,unit:i}),p.length>0?`${p.map(s=>`${g(s.name)} ${g(s.value.toFixed(1))} ${g(s.unit)}`).join(" \xB7 ")} now`:e>0?`Precipitation \u2014 next 12h \xB7 ${g(e.toFixed(1))} ${g(t)} now`:"Precipitation \u2014 next 12h"}function yt(e){return!e||isNaN(e.getTime())?"":Ze(e)}function or({hass:e,config:t,discovery:a,weatherEntity:r,forecastData:o}){let i=r.attributes,n=a.atmosCe,l=a.sunEntityId||"",{condition:p,isNight:c}=ht(e,r,a),s=(I,z)=>ft(e,n,i,I,z),d=(I,z)=>Da(e,n,I,z),u=s("temperature","temperature"),m=s("apparent_temperature","apparent_temperature")||u,f=s("humidity","humidity"),h=s("wind_speed","wind_speed"),v=s("wind_direction","wind_bearing"),x=s("wind_gusts","wind_gust_speed")||s("wind_gusts","wind_gusts"),w=s("dew_point","dew_point"),$=s("visibility","visibility"),_=s("pressure","pressure"),S=d("temperature","\xB0C"),D=d("visibility","km"),F=d("pressure","hPa"),C=d("dew_point","\xB0C"),R=o?.daily,O=o?.hourly,W=i.forecast,E=u,b=u;if(R&&R.length>0){let I=R[0],z=Number(I.templow),T=Number(I.temperature);Number.isFinite(z)&&Number.isFinite(T)&&(E=Math.min(z,T),b=Math.max(z,T))}else if(O&&O.length>0){let I=Date.now(),z=new Date;z.setHours(23,59,59,999);let T=z.getTime(),j=1/0,q=-1/0;for(let ve of O.slice(0,24)){let oe=Date.parse(String(ve.datetime??""));if(Number.isFinite(oe)&&(oe<I||oe>T))continue;let H=Number(ve.temperature);Number.isFinite(H)&&(H<j&&(j=H),H>q&&(q=H))}Number.isFinite(j)&&Number.isFinite(q)&&j!==q&&(E=Math.min(j,u),b=Math.max(q,u))}else if(W&&W.length>0){let I=W[0],z=Number(I.templow),T=Number(I.temperature);Number.isFinite(z)&&Number.isFinite(T)&&(E=Math.min(z,T),b=Math.max(z,T))}let M=a.atmosCe.uv_index,N=M?Number(e.states[M]?.state)||0:Number(i.uv_index??0),{value:L,unit:le}=Ue(e,n.precipitation),ce=le||"mm",{value:ge,unit:Te}=Ue(e,n.rain),{value:ye,unit:Fe}=Ue(e,n.showers),{value:we,unit:U}=Ue(e,n.snowfall),P=Te||"mm",Q=Fe||"mm",te=U||"cm",{value:pe,entity:be}=Ue(e,n.uv_index_clear_sky),Ne=n.dew_point_comfort?e.states[n.dew_point_comfort]:null,Re=n.visibility_category?e.states[n.visibility_category]:null,Le=n.feels_like_context?e.states[n.feels_like_context]:null,Z=n.pressure_trend?e.states[n.pressure_trend]:null,Ie=new Date,ze=l?e.states[l]:null,Mt=ze?.attributes?.next_rising,Tt=ze?.attributes?.next_setting,{todaySunrise:Ge,todaySunset:Ae,tomorrowSunrise:Xe}=Ve(Ie,Mt,Tt),de=null;a.atmosCe.cloud_cover&&(de={total:Number(e.states[a.atmosCe.cloud_cover]?.state)||0,low:Number(e.states[a.atmosCe.cloud_cover_low]?.state)||0,mid:Number(e.states[a.atmosCe.cloud_cover_mid]?.state)||0,high:Number(e.states[a.atmosCe.cloud_cover_high]?.state)||0});let De=n.freezing_level_height?e.states[n.freezing_level_height]:null,ot=De&&Number(De.state)||0,Oe=(n.stability_assessment?e.states[n.stability_assessment]:null)?.state||"",Ye=n.lifted_index?e.states[n.lifted_index]:null,ue=Ye&&Number(Ye.state)||0,nt=k(Ao[p]||Co),Ft=Math.max(b-E,1),_n=Math.max(0,Math.min(100,(u-E)/Ft*100)),ta=bt(v),Nr=`data-condition="${g(p)}" data-night="${c}" data-cloud='${g(JSON.stringify(de||""))}'`,Rr=tt(u,20,42),Lr=tt(u,15,-10),At=Math.max(Rr,Lr),Ir=Se(u),$n=At>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${Ga(Ir,At)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",aa=Xa(At),zr=aa?`<div class="pw-tension-vignette" style="background: ${k(aa)}"></div>`:"",kn=we>0?`<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${g(we.toFixed(1))} ${g(te)}</div>`:"",ra=Le?.state||"",Pe=Le?.attributes?.difference,it="";ra==="wind_chill"&&Pe!==null&&Pe!==void 0?it=`<div class="pw-feels-context">Wind chill ${g(String(Math.round(Number(Pe))))}\xB0</div>`:ra==="heat_index"&&Pe!==null&&Pe!==void 0&&(it=`<div class="pw-feels-context">Heat index +${g(String(Math.round(Number(Pe))))}\xB0</div>`);let Dr=["marginal","slight","enhanced","moderate","high"],Or="";if(Oe&&Dr.includes(Oe)){let I=Yt[Oe];if(I){let z=k(I.color),T=`\u26A1 ${g(I.label)}`;if(Ye&&ue<0){let j=Qe.find(q=>ue>=q.min)||Qe[Qe.length-1];T+=` \xB7 <span style="color:${k(j.color)}">LI ${g(String(ue))}</span>`}Or=` <span class="pw-stability-badge" style="background:${z}33; color:${z}">${T}</span>`}}let Ct=Re?.state||"",Sn=Ct&&!["unavailable","unknown"].includes(Ct)&&rr[Ct]||"",st=Ne?.state||"",Mn=st&&!["unavailable","unknown"].includes(st)&&rr[st]||"",oa=Z?.attributes?.trend_symbol||"",na=Z?.state==="rising"?"#30d158":Z?.state==="falling"?"#ff9f0a":Z?.state==="steady"?"#5ac8fa":"",Pr=be&&Math.abs(pe-N)>=.5,Et=Z?.attributes?.change_3h,Nt=No(Et!=null?Number(Et):null,Z?.state||"");if(Nt==="Press"&&Z?.state){let I=Z.state;I==="rising"?Nt="Rising":I==="falling"&&(Nt="Falling")}let Tn=na||(Z?"#5ac8fa":""),Hr=Pa(h),Fn=wt(h),Rt=x>h+5,Br=h>0&&x/h>1.5,Wr=Rt?Br?` / <b>${g(Math.round(x))}</b>`:` / ${g(Math.round(x))}`:"",Ur=`<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(v)||0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${k(Hr)}" opacity="0.8"/></svg>`,An=`${g(Math.round(h))}${Wr} ${Ur}${g(ta)}`,Cn=`linear-gradient(to right, ${k(Se(E))}, ${k(Se(b))})`,Vr="";if(De&&ot<5e3&&E<=0){let I=Math.max(0,Math.min(100,(0-E)/Ft*100)),z=De?.attributes?.unit_of_measurement||"m";Vr=`<div class="pw-arc-freeze" style="left:${Number(I)}%">
            <div class="pw-arc-freeze-label">\u2744 ${g(String(Math.round(ot)))}${g(z)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`}let ia="",sa=l?e.states[l]:null;if(sa&&Ge&&Ae&&Xe){let I=Ie.getTime(),z=sa.state==="above_horizon",T,j,q,ve,oe;if(z){let B=Ge.getTime(),ae=Ae.getTime(),$e=Math.max(ae-B,1);T=Math.max(0,Math.min(100,(I-B)/$e*100)),j=yt(Ge),q=yt(Ae),ve="background: linear-gradient(to right, #ff9f0a, #ffd60a)",oe="#ff9f0a"}else{let B=Ae.getTime(),ae=Xe.getTime(),$e=Math.max(ae-B,1);T=Math.max(0,Math.min(100,(I-B)/$e*100)),j=yt(Ae),q=yt(Xe),ve="background: linear-gradient(to right, #1a3050, #5ac8fa)",oe="#5ac8fa"}let H=`left:${Number(T)}%; background:${k(oe)}; box-shadow: 0 0 6px ${k(oe)}66`,_e=` style="color:${k(oe)}"`,V=z?"1":"0.85",xe=z?"":"\u{1F319}";ia=`
      <div class="pw-day-arc" style="opacity:${V}">
        <span class="pw-day-arc-label"${_e}>${g(j)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(T)}%; ${ve}"></div>
          <div class="pw-day-arc-marker" style="${H}">${xe}</div>
        </div>
        <span class="pw-day-arc-label"${_e}>${g(q)}</span>
      </div>`}let jr="",qr="",Gr="",lt="",la=o?.hourly||[];if(la.length>0){let T=gt(la,new Date).slice(0,12),j=T.some(H=>Number(H.precipitation_probability)>0),q=Lo(L,ce,ge,P,ye,Q,we,te);if(L>0)lt=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">\u{1F327}</span> ${q}
      </div>`;else{let H=ar({now:new Date,cloudCoverNow:de?de.total:0,conditionNow:p,slots:T,windSpeed:h,uvIndex:N,stabilityState:Oe});lt=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        ${g(H.sentence)}
      </div>`}if(j){let H=T.map(xe=>{let B=Math.min(100,Math.max(0,Number(xe.precipitation_probability)||0)),ae=Number(xe.snowfall)||0,$e=(Number(xe.rain)||0)+(Number(xe.showers)||0),Ke=ae>0;if(Ke&&$e>0){let no=ae+$e,ua=Math.round(B*ae/no),io=B-ua;return`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number(io)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number(ua)}%"></div></div>`}return`<div class="pulse-precip-slot"><div class="${Ke?"pulse-precip-fill pw-precip-snow":"pulse-precip-fill"}" style="height: ${B}%"></div></div>`}).join(""),V=T[Math.floor(T.length/2)]?`+${Math.floor(T.length/2)}h`:"";jr=`
      <div style="position: relative; z-index: 2; margin: 16px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label">${q}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${H}</div>
        <div class="pw-precip-times"><span>Now</span><span>${g(V)}</span><span>+${g(String(T.length))}h</span></div>
      </div>`}if(T.some(H=>Number(H.cape)>300)){let V=Ro(T,200,24),xe=V.peakIndex/Math.max(T.length-1,1)*200,B=V.peakValue>=1e3?`${(V.peakValue/1e3).toFixed(1)}k`:String(Math.round(V.peakValue)),ae=T[V.peakIndex]?.datetime?new Date(T[V.peakIndex].datetime):null,$e=ae?Ze(ae):"",Ke=Je("pw-cape-grad");qr=`
      <div style="position: relative; z-index: 2; margin: 4px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="${Ke}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${V.areaPath}" fill="url(#${Ke})"/>
            <path d="${V.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${V.peakValue>0?`<div class="pw-cape-peak" style="left:${Number(xe)}px">${g(B)} ${g($e)}</div>`:""}
        </div>
      </div>`}T.some(H=>H.dew_point!==void 0&&H.dew_point!==null)&&(Gr=`
      <div style="position: relative; z-index: 2; margin: 2px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${T.map(_e=>{let V=Number(_e.dew_point)||0;return`<div class="pw-comfort-slot" style="background:${k(Ba(V))}"></div>`}).join("")}</div>
      </div>`)}let En=Se(m),Nn=de!==null?Ha(de.total):"",Rn=Eo(f),Ln=`${g(Math.round(_))} ${g(F)}${oa?` <span style="color:${k(na)}">${g(oa)}</span>`:""}`,In=`${g(Math.round(N))}${Pr?` <span style="opacity:0.5">/ ${g(String(Math.round(pe)))}</span>`:""}`;function Xr(){return Ze(new Date)}let Yr=Wa(p),Kr=ee(p,c),Qr=t?.location_label||"Now",ca=it?it.replace(/<[^>]*>/g,"").trim():"",Zr=lt?lt.replace(/<[^>]*>/g,"").trim():"",Jr=de?Math.round(de.total)+"%":"--",eo=`
        <div class="pw-loc-stamp">${g(Qr)} \xB7 ${g(Xr())}</div>
        <div class="pw-hero-block">
          ${y.display(Math.round(u),{suffix:S})}
          ${y.gloss(`${Yr}${ca?" \xB7 "+ca:""}`)}
        </div>`,to=y.statsRow([y.stat(`${Math.round(E)}/${Math.round(b)}\xB0`,"range"),y.stat(`${Math.round(h)}${Rt?` / ${Math.round(x)}`:""} ${ta}`,Rt?"wind / gust":"wind"),y.stat(Math.round(N),"uv"),y.stat(Jr,"cloud")],{columns:4}),ct=(o?.daily||[]).slice(0,7),Lt="";if(ct.length>=2){let T=ct.map(B=>Number(B.temperature)||0),j=ct.map(B=>Number(B.templow??B.temperature)||0),q=Math.min(...j),ve=Math.max(...T),oe=Math.max(ve-q,1),H=B=>B/(ct.length-1)*320,_e=B=>38-(B-q)/oe*34-2,V=T.map((B,ae)=>`${ae===0?"M":"L"}${H(ae).toFixed(1)},${_e(B).toFixed(1)}`).join(" ");Lt=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${V} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${V}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let ao=Lt?`<div class="pw-overview-spark-block">
        ${y.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${Lt}</div>
      </div>`:"",pa=Re?.state||"",It=Z?.state||"",ro=[Number.isFinite(f)&&f>0,Number.isFinite(w)&&w!==0,!!pa,!!It].filter(Boolean).length>=2,da="";if(ro){let I=Number.isFinite(f)&&f>0?y.stat(`${Math.round(f)}%`,st||"humidity"):y.stat("\u2014","humidity"),z=Number.isFinite(w)?y.stat(`${Math.round(w)}${C}`,"dew point"):y.stat("\u2014","dew point"),T=Number.isFinite(_)&&_>0?y.stat(`${Math.round(_)}`,It?`${F} ${It}`:F):y.stat("\u2014","pressure"),j=Number.isFinite($)&&$>0?y.stat(`${$.toFixed($<10?1:0)}${D}`,pa||"visibility"):y.stat("\u2014","visibility");da=y.statsRow([I,z,T,j],{columns:4})}let oo=`
        ${eo}
        ${y.narrative(Zr)}
        ${ia}
        ${ao}
        ${to}
        ${da}`;return X({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:Kr,preContent:`${zr}<div class="pw-fx" ${Nr} role="img" aria-label="${g(p)} weather effects"></div>`,body:oo,pro:t?.pro!==!1})}function Io(e){if(!e||e.length===0)return"Forecast unavailable";let t=0;for(let n=1;n<e.length;n++)Number(e[n].temperature)>Number(e[t].temperature)&&(t=n);let a=e.findIndex(n=>Number(n.precipitation_probability)>=50),r=n=>n===0?"today":new Date(String(e[n].datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),o=r(t),i=Math.round(Number(e[t].temperature));return a>=0&&a!==t?`Warmest ${o} (${i}\xB0) \xB7 rain ${r(a)}`:a>=0?`Wet stretch \xB7 warmest ${o} (${i}\xB0)`:`Warmest ${o} (${i}\xB0) \xB7 dry through the week`}function nr({hass:e,config:t,discovery:a,forecastData:r,weatherEntity:o}){let i=r?.daily||[];if(i.length===0)return null;let n=a.atmosCe,p=(n.temperature?e.states[n.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",c=i.slice(0,7),s=c.flatMap(S=>[G(S.temperature,0),G(S.templow,0)]),d=Math.min(...s),u=Math.max(...s),m=Math.max(u-d,1),f=Number(o?.attributes?.temperature),h=c.map((S,D)=>{let F=G(S.temperature,0),C=G(S.templow,0),R=Math.round(Number(S.precipitation_probability)||0),O=D===0,W=O?"today":new Date(String(S.datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),E=vt(String(S.condition||"")),b=R>=50?`<span class="pw-fc-pop">${g(String(R))}%</span>`:'<span class="pw-fc-pop"></span>',M=(C-d)/m*100,N=(F-C)/m*100,L=O&&Number.isFinite(f)?`<span class="pw-fc-now" style="left:${k(((f-d)/m*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${O?" is-today":""}">
        <span class="pw-fc-day">${g(W)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${E}</span>
        ${b}
        <span class="pw-fc-bar" aria-label="High ${Math.round(F)}${g(p)}, low ${Math.round(C)}${g(p)}">
          <span class="pw-fc-bar-fill" style="left:${k(M.toFixed(2)+"%")};width:${k(N.toFixed(2)+"%")}"></span>
          ${L}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${g(String(Math.round(C)))}\xB0</span>
          <span class="pw-fc-hi">${g(String(Math.round(F)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:v,isNight:x}=ht(e,o,a),w=ee(v,x),$=Io(c),_=`
        <div class="pw-fc-list" role="list">
          ${h}
        </div>`;return X({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:w,kicker:"the week ahead",narrative:$,body:_,pro:t?.pro!==!1})}var je=240,fe=je/2,he=je/2,at=90,ir=.12,_t=6,$t=.5,sr=.25,zo=.3,Do=6,lr=.7,Oo=.2,Po=4,Ho=3.3,Bo=15,Wo=35,Uo=.08,Vo=.2,jo=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function cr(e){return(e-90)*Math.PI/180}function qo(e){let t=e*Math.PI/180;return{x:Math.sin(t),y:-Math.cos(t)}}function Me(e,t){return{x:fe+t*Math.cos(e),y:he+t*Math.sin(e)}}function Go(e,t,a,r){let o=Math.min(e/We,1)*at,i=Me(t-sr,o),n=Me(t+sr,o),l=a>zo?"pw-gust-sweep":"",p=Math.max(.6,2.5-a*2).toFixed(2),c=(.15+a*.3).toFixed(2),s=`transform-origin:${fe}px ${he}px;--gust-dur:${p}s;--gust-peak:${c}`;return ne("path",{class:l,d:`M${fe},${he} L${i.x.toFixed(1)},${i.y.toFixed(1)} L${n.x.toFixed(1)},${n.y.toFixed(1)} Z`,fill:r,opacity:.15,style:s})}function Xo(e,t,a,r){let o=Math.min(e/We,1)*at,i=Me(t,o),n=Me(t-ir,o*.7),l=Me(t+ir,o*.7),p={x:i.x-_t*Math.cos(t-$t),y:i.y-_t*Math.sin(t-$t)},c={x:i.x-_t*Math.cos(t+$t),y:i.y-_t*Math.sin(t+$t)},s=a*Do,d=Math.max(.4,4-a*3.6),u=s>Oo?`animation:pw-arrowSway ${d.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(s*lr).toFixed(2)}deg;--sway-back:${(-s*(1-lr)).toFixed(2)}deg`:"",m=`transform-origin:${fe}px ${he}px;filter:drop-shadow(0 0 6px ${ke(r,.38)});${u}`,f=ne("path",{d:`M${fe},${he} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${i.x.toFixed(1)},${i.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} Z`,fill:r,opacity:.5}),h=ne("line",{x1:fe,y1:he,x2:i.x.toFixed(1),y2:i.y.toFixed(1),stroke:r,"stroke-width":2.5,"stroke-linecap":"round"}),v=ne("path",{d:`M${i.x.toFixed(1)},${i.y.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} Z`,fill:r});return ne("g",{style:m},f+h+v)}function pr({hass:e,config:t,discovery:a,weatherEntity:r}){let o=r.attributes,i=a.atmosCe,n=t.speed_mode||"speed",l=(U,P)=>ft(e,i,o,U,P),p=l("wind_speed","wind_speed"),c=l("wind_gusts","wind_gust_speed")||l("wind_gusts","wind_gusts")||p,s=l("wind_direction","wind_bearing"),u=(i.wind_speed?e.states[i.wind_speed]:null)?.attributes?.unit_of_measurement||o.wind_speed_unit||"km/h",m=n==="gust"?c:p,f=Math.min(p/We,1),h=wt(m),v=jt(m),x=Be[v]||Be.calm,w=bt(s),$=cr(s),_=qo(s),S=Math.round(f*ga),D=Po-f*Ho,F=Uo+f*Vo,C=Bo+f*Wo,R=-_.y,O=_.x,W=[];for(let U=0;U<S;U++){let P=(Math.random()-.5)*400,Q=-120-Math.random()*60,te=420+Math.random()*60,pe=(C*(.6+Math.random()*.8)).toFixed(1),be=(D+Math.random()*D*.5).toFixed(2),Ne=(Math.random()*3).toFixed(2),Re=(F*(.5+Math.random()*.5)).toFixed(3),Le=(Q*_.x+P*R).toFixed(1),Z=(Q*_.y+P*O).toFixed(1),Ie=(te*_.x+P*R).toFixed(1),ze=(te*_.y+P*O).toFixed(1);W.push(`<div class="pw-streak" style="left:50%;top:50%;width:${pe}px;height:1px;transform:rotate(${s-90}deg);animation-duration:${be}s;animation-delay:${Ne}s;opacity:${Re};background:linear-gradient(to right, transparent, ${ke(x,.27)}, transparent);--sx:${Le}px;--sy:${Z}px;--ex:${Ie}px;--ey:${ze}px"></div>`)}let E=[];for(let U=1;U<=3;U++)E.push(ne("circle",{cx:fe,cy:he,r:U*30,fill:"none",stroke:x,"stroke-width":.5,opacity:.08+U*.02}));for(let U of jo){let P=cr(U.a),Q=Me(P,20),te=Me(P,at+4),pe=Me(P,at+16),be=U.l.length===1;E.push(ne("line",{x1:Q.x.toFixed(1),y1:Q.y.toFixed(1),x2:te.x.toFixed(1),y2:te.y.toFixed(1),stroke:x,"stroke-width":.5,opacity:.12})),E.push(ne("text",{x:pe.x.toFixed(1),y:pe.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:be?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":be?11:9,"font-weight":be?600:400},g(U.l)))}E.push(Go(c,$,f,x)),E.push(Xo(m,$,f,x)),(m>We||c>We)&&E.push(ne("circle",{cx:fe,cy:he,r:at+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),E.push(ne("circle",{cx:fe,cy:he,r:18,fill:x,opacity:.06})),E.push(ne("circle",{cx:fe,cy:he,r:3,fill:x}));let M=f>Ot?(f-Ot)*5:0,N=Math.max(.15,.4-f*.25),L="";M>.1&&(L=`--dx:${(M*_.x).toFixed(2)}px;--dy:${(M*_.y).toFixed(2)}px;animation:pw-roseShake ${N.toFixed(2)}s ease-in-out infinite`);let le=Math.round(12+f*50).toString(16).padStart(2,"0"),ce=Math.round(6+f*25).toString(16).padStart(2,"0"),ge=Oa(`radial-gradient(ellipse at 50% 50%, ${x}${le} 0%, ${x}${ce} 40%, transparent 85%)`),Te=ee(r?.state||"sunny",!1),ye=n==="gust",Fe=ye?"wind \xB7 gust":"wind",we=`
        <div class="pw-wind-streaks">${W.join("")}</div>
        <div class="pw-rose-wrap" style="${L}">
          <svg class="pw-rose-svg" width="${je}" height="${je}" viewBox="0 0 ${je} ${je}" style="display:block" role="img" aria-label="Wind compass rose showing ${g(Math.round(m))} ${g(u)} from ${g(w)}">
            <title>Wind direction compass</title>
            ${E.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${k(x)}">${g(Math.round(m))}</div>
            <div class="pw-wind-unit">${g(u)} \xB7 ${g(Math.round(s))}\xB0 ${g(w)}</div>
            <div class="pw-wind-beaufort" style="color: ${k(x)}">${g(h.name)}</div>
            <div class="pw-wind-beaufort-desc">${g(h.desc)}</div>
          </div>
        </div>`;return X({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:Te,kicker:Fe,sectionStyle:`background: ${k(ge)}`,body:we,proAction:"wind-mode",proInitial:ye,proAriaLabel:"Toggle speed and gust mode",pro:t.pro!==!1})}function Yo(e,t,a,r){if(a&&r){let n=(t==="us"?Dt:zt).find(l=>l.label.toLowerCase()===a.toLowerCase());return{label:a,color:r,desc:n?.desc||""}}let o=t==="us"?Dt:zt;for(let i of o)if(e<=i.max)return i;return o[o.length-1]}function Ko(e){let t=(e||"").toLowerCase();return t.includes("very unhealthy")||t.includes("hazardous")||t.includes("extremely poor")?"very_unhealthy":t.includes("sensitive")?"unhealthy_sg":t.includes("unhealthy")||t.includes("very poor")?"unhealthy":t.includes("moderate")||t.includes("fair")||t.includes("poor")?"moderate":t.includes("good")?"good":"unknown"}var dr=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function ur({hass:e,config:t,discovery:a,weatherEntity:r}){let o=t.scale||"eu",i=o==="us"?"us_aqi":"european_aqi",n=t.aqi_entity||a.atmosCe[i];if(!n||!e.states[n])return null;let l=e.states[n],p=Number(l.state)||0,c=l.attributes?.category||null,s=l.attributes?.color||null,d=Yo(p,o,c,s),u=M=>{let N=a.atmosCe[M];if(!N||!e.states[N])return null;let L=Number(e.states[N].state);return Number.isFinite(L)?L:null},m=u("pm2_5"),f=u("pm10"),h=u("ozone"),v=u("nitrogen_dioxide"),x=u("sulphur_dioxide"),w=u("carbon_monoxide"),$=Ko(d.label),_=dr[$]||dr.unknown,S=ee("cloudy",!1),D=o==="us",C=Math.min(100,Math.max(0,p/(D?300:100)*100)),R=D?"air quality \xB7 us":"air quality",O=y.heroBlock({value:Math.round(p),valueColor:_,tier:d.label,tierFlavor:"aqi",tierColor:_}),W=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${k(`${C.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,E=y.statsRow([m!==null?y.stat(Math.round(m),"PM2.5",{data:!0}):"",f!==null?y.stat(Math.round(f),"PM10",{data:!0}):"",h!==null?y.stat(Math.round(h),"O\u2083",{data:!0}):"",v!==null?y.stat(Math.round(v),"NO\u2082",{data:!0}):"",x!==null?y.stat(Math.round(x),"SO\u2082",{data:!0}):"",w!==null?y.stat(w.toFixed(1),"CO",{data:!0}):""],{columns:3}),b=`
        ${O}
        ${W}
        ${E}`;return X({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:S,kicker:R,body:b,proAction:"aqi-scale",proInitial:D,proAriaLabel:"Toggle EU and US AQI scale",pro:t.pro!==!1})}function Qo(e){let t=(e%J+J)%J;return Fa[Math.floor(t/J*8)%8]}function Zo(e){return(e%J+J)%J<J/2}var Kt=864e5;function ie(e){return!e||isNaN(e.getTime())?"--:--":e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}function Jo(e,t,a,r,o){if(r==null)return`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${a}" fill="#c8d0e0"/>`;let i=Math.max(0,Math.min(1,r/100)),n=o!=null?Zo(o):!0,l=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${a}" fill="#2a2a3a"/>`;if(i>=.99)l+=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${a}" fill="#e8e0d0"/>`;else if(i>.01){let p=t-a,c=t+a,s=(a*Math.abs(2*i-1)).toFixed(1),d=i>.5?1:0,u;n?u=`M${e.toFixed(1)},${p.toFixed(1)} A${a},${a} 0 0 1 ${e.toFixed(1)},${c.toFixed(1)} A${s},${a} 0 0 ${d} ${e.toFixed(1)},${p.toFixed(1)} Z`:u=`M${e.toFixed(1)},${p.toFixed(1)} A${a},${a} 0 0 0 ${e.toFixed(1)},${c.toFixed(1)} A${s},${a} 0 0 ${1-d} ${e.toFixed(1)},${p.toFixed(1)} Z`,l+=`<path d="${u}" fill="#e8e0d0"/>`}return l}var kt="#050510",mr="#0a1226",fr="#172b4f",hr="#1f3d6e",gr="#3a6fa8",wr="#d97a3a",br="#ff9f0a",vr="#ffc560",xr="#7eaedb",yr="#2c5a8e",_r="#ffd60a";function en(e,t,a,r,o,i,n,l,p,c){let s=new Date(e.getTime());s.setHours(0,0,0,0);let d=e.getTime(),u=t.getTime(),m=(a??new Date(d-35*6e4)).getTime(),f=(r??new Date(d-30*6e4)).getTime(),h=(o??new Date(d-6*6e4)).getTime(),v=(i??new Date(d+30*6e4)).getTime(),x=(n??new Date(u-30*6e4)).getTime(),w=(l??new Date(u+6*6e4)).getTime(),$=(p??new Date(u+30*6e4)).getTime(),_=(c??new Date(u+35*6e4)).getTime(),S=(d+u)/2,D=b=>Math.max(0,Math.min(100,b)),F=b=>D((b-s.getTime())/Kt*100),C=(b,M)=>F((b+M)/2),R=Math.min(60,(u-d)/8)*6e4,O=S-R,W=S+R;return`linear-gradient(to right, ${[`${kt} 0%`,`${kt} ${F(m).toFixed(2)}%`,`${mr} ${C(m,f).toFixed(2)}%`,`${fr} ${F(f).toFixed(2)}%`,`${hr} ${C(f,h).toFixed(2)}%`,`${gr} ${F(h).toFixed(2)}%`,`${wr} ${C(h,d).toFixed(2)}%`,`${br} ${F(d).toFixed(2)}%`,`${vr} ${C(d,v).toFixed(2)}%`,`${xr} ${F(v).toFixed(2)}%`,`${yr} ${C(v,O).toFixed(2)}%`,`${_r} ${F(O).toFixed(2)}%`,`${_r} ${F(W).toFixed(2)}%`,`${yr} ${C(W,x).toFixed(2)}%`,`${xr} ${F(x).toFixed(2)}%`,`${vr} ${C(x,u).toFixed(2)}%`,`${br} ${F(u).toFixed(2)}%`,`${wr} ${C(u,w).toFixed(2)}%`,`${gr} ${F(w).toFixed(2)}%`,`${hr} ${C(w,$).toFixed(2)}%`,`${fr} ${F($).toFixed(2)}%`,`${mr} ${C($,_).toFixed(2)}%`,`${kt} ${F(_).toFixed(2)}%`,`${kt} 100%`].join(", ")})`}function $r(e){if(!e||isNaN(e)||e<=0)return"--";let t=Math.round(e/6e4),a=Math.floor(t/60),r=t%60;return`${a}h ${String(r).padStart(2,"0")}m`}function kr({hass:e,config:t,discovery:a}){let r=new Date,o=a.sunEntityId?e.states[a.sunEntityId]:null;if(!o)return null;let i=o.attributes||{},n=i.next_rising||i.sunrise,l=i.next_setting||i.sunset;if(!n||!l)return null;let p=new Date(r);p.setHours(12,0,0,0);let c=Y(new Date(n),p),s=Y(new Date(l),p);if(!c||!s||isNaN(c.getTime())||isNaN(s.getTime()))return null;let d=a.atmosCe,u=ue=>d[ue]?new Date(String(e.states[d[ue]]?.state)):null,m=Y(u("golden_hour_morning_start"),c),f=Y(u("golden_hour_morning_end"),c),h=Y(u("blue_hour_morning_start"),c),v=Y(u("golden_hour_evening_start"),s),x=Y(u("golden_hour_evening_end"),s),w=Y(u("blue_hour_evening_end"),s),$=i.next_dawn,_=i.next_dusk,S=$?Y(new Date($),c):null,D=_?Y(new Date(_),s):null,F=d.moon_phase?e.states[d.moon_phase]:null,C=F?.attributes||{},R=C.moon_age!==void 0?Number(C.moon_age):null,O=C.illumination!==void 0?Number(C.illumination):null,W=R!==null?Qo(R):F?.state||null,E=Y(u("moonrise"),r),b=Y(u("moonset"),r),M=r.getTime()>=c.getTime()&&r.getTime()<=s.getTime(),N=ie(c),L=ie(s),le=(c.getTime()+s.getTime())/2,ce=ie(new Date(le)),ge=s.getTime()-c.getTime(),Te=Kt-ge,ye=$r(ge),Fe=$r(Te),we=M?"Daylight":"Night",U=M?ye:Fe,P=new Date(c.getTime());P.setHours(0,0,0,0);let Q=Math.max(0,Math.min(100,(r.getTime()-P.getTime())/Kt*100)),te=en(c,s,S,h,m,f,v,x,w,D),be=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${k(te)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${Q.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,Ne=O!=null?Math.round(O):null,Re=W||"Moon",Le=Jo(24,24,22,O,R),Z=Ne!==null?`<span class="pw-astro-moon-illum">${g(`${Ne}%`)}</span> illuminated`:"",Ie=R!=null?`${R.toFixed(1)}d old`:"",ze=R!=null?(()=>{let ue=J/2,nt=(R%J+J)%J;return`${(nt<=ue?ue-nt:J-nt+ue).toFixed(1)}d to full`})():"",Mt=[Z,Ie,ze].filter(Boolean).join(" \xB7 "),Tt=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${Le}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${g(Re)}</div>
          <div class="pw-astro-moon-meta">${Mt}</div>
        </div>
      </div>`,Ge=M?`Sun rose ${N}, sets ${L} \xB7 solar noon ${ce}.`:`Sun set ${L}, rises ${N} \xB7 solar noon ${ce}.`,Ae=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${g(we)}</div>
        <div class="pw-astro-hero-num">${g(U)}</div>
      </div>
      ${y.narrative(Ge)}`,Xe=ie(E),de=ie(b),De=y.statsRow([y.stat(ie(S),"civil dawn"),y.stat(ie(m),"golden start",{valueColor:"var(--pw-warn-amber)"}),y.stat(ie(h),"blue start",{valueColor:"var(--pw-wind)"}),y.stat(Xe,"moonrise")],{columns:4,divided:!0}),ot=y.statsRow([y.stat(ie(D),"civil dusk"),y.stat(ie(x),"golden end",{valueColor:"var(--pw-warn-amber)"}),y.stat(ie(w),"blue end",{valueColor:"var(--pw-wind)"}),y.stat(de,"moonset")],{columns:4,divided:!0}),ea=`
      ${Ae}
      ${Tt}
      ${be}
      ${De}
      ${ot}`,Oe=ee(M?"sunny":"clear-night",!M),Ye=`<div class="pw-fx" data-astro-stars="${!M}" data-astro-day="${M}" role="img" aria-label="Sky atmospheric effects"></div>`;return X({sectionClass:"pw-astro-v2",extraSectionClass:M?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:Oe,kicker:"today's sky",preContent:Ye,body:ea,pro:t?.pro!==!1})}var Sr=18,tn=62,Mr=168;function an(e){return e.active?0:typeof e.hoursUntil=="number"&&e.hoursUntil>0?e.hoursUntil:0}function Tr(e){let t=Math.min(an(e),Mr)/Mr;return Sr+t*(tn-Sr)}function Qt(e){let t=`${e.summary||""}|${e.type||""}|${e.endTime||""}`,a=0;for(let r=0;r<t.length;r+=1)a=(a*31+t.charCodeAt(r))%360;return a/360*2*Math.PI}function rn(e,t){let a=e.alert_type||e.type||"wind",r=Number(e.level),o=Number.isFinite(r)&&r>0?r:1,i=typeof e.severity=="string"?e.severity.toLowerCase():"",n=$a[i]||Bt[o]||Bt[1],l=_a[a]||"mdi:alert",p=Number(e.progress)||0,c=Array.isArray(e.locations)?e.locations:[],s=e.end_time??"",d=null,u=null,m=!1;if(s==="")m=!0;else if(s){let f=new Date(s),h=new Date,v=f.getTime()-h.getTime();if(v/(1e3*60*60*24)>xa)m=!0;else if(t)d=Math.max(0,v/(1e3*60*60));else{let w=e.start_time||e.datetime;if(w){let $=new Date(String(w));u=Math.max(0,($.getTime()-h.getTime())/(1e3*60*60))}}}return{type:a,icon:l,severity:o,color:n,summary:String(e.headline||e.summary||""),desc:String(e.description||""),active:t,hoursLeft:d,hoursUntil:u,progress:p,locations:c,link:e.link?String(e.link):null,endTime:String(s),isUntilFurtherNotice:m}}function on(e){let t=e.severity>=4?"red":"amber",a="";e.isUntilFurtherNotice?a="UNTIL FURTHER NOTICE":e.active&&e.hoursLeft!==null?a=`${Math.round(e.hoursLeft)}H LEFT`:e.hoursUntil!==null?a=`IN ${Math.round(e.hoursUntil)}H`:e.active&&(a="ACTIVE");let r=String(e.type||"").toUpperCase(),o=String(e.summary||e.desc||"").toUpperCase().trim(),i=e.locations.length>0?e.locations.join(", ").toUpperCase():"",l=[a,r,o,i].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${t}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${g(l)}</span>
    </div>`}function Fr({hass:e,config:t,discovery:a,proPersisted:r=!1}){let o=[];for(let b of a.alertEntityIds){let N=e.states[b]?.attributes?.all_alerts;if(Array.isArray(N)){for(let L of N)o.push(rn(L,L.active===!0));break}}let i=o.length>0,n=i?o.reduce((b,M)=>M.severity>b.severity?M:b,o[0]).severity:0,l=i?o.reduce((b,M)=>M.severity>b.severity?M:b,o[0]).color:"#30d158",p=tt(n,0,4),c=i?Math.min(1.5,1+(o.length-1)*.15):1,s=Ya(p,3,1.2).toFixed(2),d=qa(p).toFixed(2),u=i?Xt(l,p*c):Xt("#30d158",.08),m=140,f=m/2,h=m/2,v=i?{bgInner:n>=4?"#1a0000":n>=3?"#1a0e00":"#1a1500",bgOuter:n>=4?"#0a0000":n>=3?"#0a0500":"#0a0800",ring:k(ke(l,.15)),line:k(ke(l,.08)),sweep:k(ke(l,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},x=o.map(b=>{let M=f+Math.cos(Qt(b))*Tr(b),N=h+Math.sin(Qt(b))*Tr(b),L=(Qt(b)/(2*Math.PI)*Number(s)).toFixed(2);return b.active?`<div class="pw-radar-blip" style="left:${M.toFixed(1)}px;top:${N.toFixed(1)}px;--pw-blip-color:${k(b.color)};animation-delay:${L}s"></div>`:`<div style="position:absolute;left:${M.toFixed(1)}px;top:${N.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${k(b.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),w=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${v.bgInner};--pw-radar-bg-outer:${v.bgOuter};--pw-radar-color:${v.ring};--pw-radar-line:${v.line};--pw-radar-sweep:${v.sweep};--pw-radar-dur:${s}s" role="img" aria-label="${i?`${o.length} weather alerts`:"No weather alerts"}">
        ${x}
      </div>
    </div>`,$=(()=>{if(!i)return"";let b=null;for(let M of o){if(M.isUntilFurtherNotice)return"further notice";if(M.endTime){let N=new Date(M.endTime);!isNaN(N.getTime())&&(!b||N>b)&&(b=N)}}return b?b.toLocaleString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"}):"further notice"})(),_=ee(i?"rainy":"sunny",!1),S=o.map(on).join(""),D=i?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>last 7 days clean</div>',F=i?`<div class="pw-alert-timestamp pw-alert-${n>=4?"red":"amber"}">${o.length} ${o.length===1?"alert":"alerts"} \xB7 valid through ${g($)}</div>`:"",C=n>=4?"pw-alerts-red":n>0?"pw-alerts-amber":"pw-alerts-green",R=`<div class="pw-tension-wash${i?" breathing":""}" style="background: ${k(u)}; --breathe-dur: ${d}s"></div>`,O=`
        ${w}
        ${D}
        ${S?`<div class="pw-alert-list">${S}</div>`:""}
        ${F}`,W=o.map(b=>{let M=b.severity>=4?"red":"amber",N=b.summary||b.desc||b.type,L=[];b.isUntilFurtherNotice?L.push("until further notice"):b.active&&b.hoursLeft!==null?L.push(`${Math.round(b.hoursLeft)}h left`):b.hoursUntil!==null&&L.push(`in ${Math.round(b.hoursUntil)}h`),b.severity>0&&L.push(`severity ${b.severity}`),b.type&&L.push(b.type);let le=L.join(" \xB7 "),ce=b.desc&&b.desc!==b.summary?`<div class="pw-alert-detail-desc">${g(b.desc)}</div>`:"",ge=b.locations.length>0?`<div class="pw-alert-detail-loc">${g(b.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${M}">
          <div class="pw-alert-detail-head">${g(N)}</div>
          ${le?`<div class="pw-alert-detail-meta">${g(le)}</div>`:""}
          ${ce}
          ${ge}
        </div>`}).join(""),E=i?`
        ${w}
        ${D}
        ${W}
        ${F}`:void 0;return X({sectionClass:"pw-alerts-v2",extraSectionClass:C,ariaLabel:"Weather alerts",brandVariant:_,kicker:i?`weather alerts (${o.length})`:"no weather alerts",preContent:R,body:O,proView:E,proInitial:r,pro:t?.pro!==!1})}var se=600,nn=280,St=8,Zt=80,qe=200,rt=220,sn=254,Ar=12,ln=30,cn=.9,pn=3;function Ee(e,t){return t<=1?se/2:St+e/(t-1)*(se-2*St)}function Cr(e,t,a){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(a))return(Zt+qe)/2;let r=a-t||1;return Zt+(a-e)/r*(qe-Zt)}function dn(e){try{let t=new Date(e);return isNaN(t.getTime())?"":String(t.getHours()).padStart(2,"0")}catch{return""}}var un=500;function mn(e,t=24){if(!Array.isArray(e))return null;let a=e.slice(0,un),o=gt(a,new Date).slice(0,t);if(o.length<2)return null;let i=o[0],n="cloud_cover"in i,l="cloud_cover_low"in i&&"cloud_cover_mid"in i&&"cloud_cover_high"in i,p="wind_speed"in i&&("wind_bearing"in i||"wind_direction"in i),c=o.map(h=>{let v=Number(h.temperature),x=G(h.precipitation_probability,0),w=G(h.snowfall,0),$=G(h.rain,0),_=G(h.showers,0),S=String(h.condition||""),D=w>0||S==="snowy"||S==="snowy-rainy"?"snow":"rain",F=D==="snow"?w:$+_;return{temp:v,precip:x,precipMm:F,precipType:D,condition:S,cloudCover:n?G(h.cloud_cover,0):null,cloudLow:l?G(h.cloud_cover_low,0):null,cloudMid:l?G(h.cloud_cover_mid,0):null,cloudHigh:l?G(h.cloud_cover_high,0):null,windSpeed:p?G(h.wind_speed,0):null,windBearing:p?G(h.wind_bearing??h.wind_direction,0):null,timeLabel:dn(String(h.datetime||"")),datetime:String(h.datetime||"")}}),s=za(c,h=>h.temp);if(s.length<2)return null;let d=s.map(h=>h.temp),u=Math.min(...d),m=Math.max(...d),f=Math.max(...s.map(h=>h.precipMm),0);return{points:s,n:s.length,min:u,max:m,minIdx:d.indexOf(u),maxIdx:d.indexOf(m),maxPrecipMm:f,hasCloud:n,hasLayeredCloud:l,hasWind:p}}function fn(e){let{points:t,n:a,hasLayeredCloud:r}=e;if(a<=0)return"";let o=a>1?(se-2*St)/(a-1)/2:se/2,i="";for(let n=0;n<a;n++){let l=Ee(n,a),p=n===0?0:l-o,s=(n===a-1?se:l+o)-p,d=p/se*100,u=s/se*100,m;if(r){let f=(Number(t[n].cloudHigh)||0)/100*.06,h=(Number(t[n].cloudMid)||0)/100*.08,v=(Number(t[n].cloudLow)||0)/100*.1;m=Math.min(f+h+v,.15)}else m=(Number(t[n].cloudCover)||0)/100*.12;m<=0||(i+=`<div class="pw-meteogram-cloud-slot" style="left:${d.toFixed(2)}%;width:${u.toFixed(2)}%;opacity:${m.toFixed(3)}"></div>`)}return i?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${i}</div>`:""}function hn(e){let{points:t,n:a,maxPrecipMm:r}=e,o=rt-qe,i=(se-2*St)/(a-1)*cn,n=r>0,l=n?Math.max(r,2):100,p="";for(let c=0;c<a;c++){let{precipMm:s,precip:d,precipType:u}=t[c],m=n?s:d;if(m<=0)continue;let f=m/l*o,h=Ee(c,a)-i/2,v=i;h<0&&(v+=h,h=0),h+v>se&&(v=se-h);let x=rt-f,w=u==="snow"?"rgba(200,220,240,0.45)":"rgba(90,200,250,0.4)";p+=`<rect x="${h.toFixed(1)}" y="${x.toFixed(1)}" width="${v.toFixed(1)}" height="${f.toFixed(1)}" fill="${w}" rx="1"/>`}return p}function gn(e){let{points:t,n:a,maxPrecipMm:r}=e,o=rt-qe,i=r>0,n=i?Math.max(r,2):100,l="";for(let p=0;p<a;p++){let{precipMm:c,precip:s}=t[p],d=i?c:s;if(d<=0)continue;let u=Ee(p,a),m=d/n*o,f=rt-m-2,h=i?c>=10?String(Math.round(c)):c.toFixed(1):`${Math.round(s)}%`;l+=`<text x="${u.toFixed(1)}" y="${f.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="13" font-weight="600">${g(h)}</text>`}return l}function wn(e){let{points:t,n:a,min:r,max:o}=e,i=t.map(m=>parseFloat(m.temp.toFixed(1))),n=t.map((m,f)=>({x:Ee(f,a),y:Cr(i[f],r,o)})),l=n.map((m,f)=>`${f===0?"M":"L"}${m.x.toFixed(1)},${m.y.toFixed(1)}`).join(" "),p=`${l} L${n[n.length-1].x.toFixed(1)},${qe} L${n[0].x.toFixed(1)},${qe} Z`,c=Je("pw-meteogram-grad"),s=Se(o),d=Se(r),u=`<defs><linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1">`;return u+=`<stop offset="0%" stop-color="${k(s)}" stop-opacity="0.25"/>`,u+=`<stop offset="100%" stop-color="${k(d)}" stop-opacity="0.03"/>`,u+="</linearGradient></defs>",u+=`<path d="${p}" fill="url(#${c})"/>`,u+=`<path d="${l}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,u}function bn(e){let{points:t,n:a}=e,r="";for(let o=0;o<a;o+=pn){let i=Ee(o,a);r+=`<text x="${i.toFixed(1)}" y="${sn}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${g(t[o].timeLabel)}</text>`}return r}function vn(e,t,a,r){let o=a/1.852,i=((r+180)%360-90+360)%360,n=Math.round(o/5)*5,l=Math.floor(n/50);n-=l*50;let p=Math.floor(n/10);n-=p*10;let c=Math.floor(n/5),s=18,d="var(--pw-ink-cream-muted)",u="",m=-s;for(let f=0;f<l;f++)u+=`<polygon points="0,${m.toFixed(1)} 9,${(m+3).toFixed(1)} 0,${(m+6).toFixed(1)}" fill="${d}"/>`,m+=6;for(let f=0;f<p;f++)u+=`<line x1="0" y1="${m.toFixed(1)}" x2="9" y2="${(m+4.5).toFixed(1)}" stroke="${d}" stroke-width="1.4" stroke-linecap="round"/>`,m+=4.5;for(let f=0;f<c;f++)u+=`<line x1="0" y1="${m.toFixed(1)}" x2="4.5" y2="${(m+2.25).toFixed(1)}" stroke="${d}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${e.toFixed(1)},${t}) rotate(${i})"><line x1="0" y1="0" x2="0" y2="${-s}" stroke="${d}" stroke-width="1.4" stroke-linecap="round"/>${u}</g>`}function xn(e){let{points:t,n:a,min:r,max:o,minIdx:i,maxIdx:n}=e,l=0,p=1,c=2,s="";for(let d=0;d<a;d++){let u=d===i||d===n,m=u?l:d%3,f=Ee(d,a),h=Cr(t[d].temp,r,o);if(m===l){let v=t[d].temp,x=u?String(Math.round(v)):v.toFixed(1),w=d===i?"var(--pw-wind)":d===n?"var(--pw-vermilion)":"var(--pw-ink-cream)",$=u?17:15,_=h-Ar;s+=`<text x="${f.toFixed(1)}" y="${_.toFixed(1)}" text-anchor="middle" fill="${w}" font-size="${$}" font-weight="600">${x}\xB0</text>`}else if(m===p){let v=vt(t[d].condition),x=h-Ar;s+=`<text x="${f.toFixed(1)}" y="${x.toFixed(1)}" text-anchor="middle" font-size="20">${v}</text>`}else if(m===c){let v=Number(t[d].windSpeed),x=Number(t[d].windBearing);if(!Number.isFinite(v)||v<1||!Number.isFinite(x))continue;let w=h-ln;s+=vn(f,w,v,x)}}return s}function Er({config:e,forecastData:t}){let a=t?.hourly||[];if(a.length<2)return null;let r=Number(e.hours),o=e.horizon==="long"?"long":"short",i=Number.isFinite(r)&&r>0?Math.max(4,Math.min(48,r)):o==="long"?24:12,n=mn(a,i);if(!n)return null;let p=(e.show_cloud==="auto"||e.show_cloud===void 0?n.hasCloud:!!e.show_cloud)&&n.hasCloud?fn(n):"",c=ee(n.points[0]?.condition||"sunny",!1),s=[];s.push(hn(n)),s.push(gn(n)),s.push(wn(n)),s.push(xn(n));let d=Ee(0,n.n).toFixed(1);s.push(`<line x1="${d}" y1="0" x2="${d}" y2="${rt}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),s.push(bn(n));let u=n.n,m=`${u}-hour meteogram showing temperature, condition, wind, and precipitation`,f=u<=12?"next twelve hours":`next ${u===24?"twenty-four":u} hours`,h=Je("pw-meteogram-title"),v=`
        <div class="pw-meteogram-chart" aria-labelledby="${h}">
          <svg viewBox="0 0 ${se} ${nn}" style="width:100%; height:auto" role="img" aria-label="${g(m)}">
            <title id="${h}">${g(m)}</title>
            ${s.join(`
`)}
          </svg>
        </div>`;return X({sectionClass:"pw-meteogram-v2",ariaLabel:m,brandVariant:c,kicker:f,preContent:p,body:v,proAction:"meteo-horizon",proInitial:i>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:e.pro!==!1})}var yn={overview:or,forecast:nr,wind:pr,air_quality:ur,astro:kr,alerts:Fr,atmosphere:er,meteogram:Er},Jt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=Na(t),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){return this._discovery||(this._discovery=La(this._hass.states,this._config)),this._discovery}_getCeFingerprint(t){let r=this._getDiscovery().atmosCe,o=[];for(let i of Object.keys(r)){let n=r[i],l=t.states[n];l&&o.push(`${i}=${l.state}`)}return o.join("|")}_warnIfAtmosCeMissing(t,a){let r=new Set(["atmosphere","air_quality","meteogram"]);if(!t.some(p=>r.has(p.type))||Object.keys(a.atmosCe).length>0)return;let i=this._config,n=i.atmos_source||Vt(a.weatherEntityId||"");if(this._warnedMissingAtmosCe===n)return;this._warnedMissingAtmosCe=n;let l=i.atmos_source?`Set atmos_source matches no sensor.${n}_* entities \u2014 check the slug.`:`Derived slug "${n}" matches no sensor.${n}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${me} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${l}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(t){if(this._hass=t,!this._config)return;let a=this._config.weather_entity,r=a||Object.keys(t.states).find(p=>p.startsWith("weather."))||"",o=t.states[r];if(!o){a&&this._warnedMissingEntity!==a&&(console.warn(`${me} weather_entity "${a}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=a);return}let i=this._getCeFingerprint(t),n=`${o.state}|${JSON.stringify(o.attributes)}|${i}`;n!==this._lastWeatherState&&(this._lastWeatherState=n,this._fullRender()),this._subscribeForecast(t,r)}async _subscribeForecast(t,a){let r=Date.now()-this._forecastLastFetch>=Ht;if(!(this._subscribedEntityId===a&&this._forecastData&&!r)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=a;try{if(!t.callWS)return;let o=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let d=(await t.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(u=>u.platform==="atmos_ce");this._atmosConfigEntryId=d?.config_entry_id||null}if(this._atmosConfigEntryId){let u=(await t.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;u?.forecast&&(o=u.forecast)}}catch(s){console.debug(`${me} extended forecast fetch failed, falling back to standard hourly`,s)}let i=null;a&&t.states[a]&&(i=await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:a},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let n=null;!o&&a&&t.states[a]&&(n=(await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:a},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[a]?.forecast||[]);let c=i?.response?.[a];this._forecastData={hourly:o||n||[],daily:c?.forecast||[]},this._forecastLastFetch=Date.now(),this._fullRender()}catch(o){console.warn(`${me} forecast fetch failed; retries throttled to ${Ht/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,o),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let t=this._getDiscovery(),a=this._hass.states[t.weatherEntityId];if(!a)return;let r=["<style>",Ca,"</style>",'<div class="pw-card">'],o=this._config.sections||[];this._warnIfAtmosCeMissing(o,t);for(let i=0;i<o.length;i++){let n=o[i],l=yn[n.type];if(l)try{let p=l({hass:this._hass,config:n,discovery:t,weatherEntity:a,forecastData:this._forecastData,sectionIndex:i,proPersisted:!!this._proState[i]});p&&r.push(p)}catch(p){console.warn(`${me} section "${n?.type}" renderer threw \u2014 section will be skipped, other sections continue. Please share the error below when reporting.`,p)}}r.push("</div>"),this.shadowRoot.innerHTML=r.join(""),this._postRender(t),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let i=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!i){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let n=Number(i.dataset.target)-Date.now();if(n<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let l=Math.floor(n/1e3),p=Math.floor(l/3600),c=Math.floor(l%3600/60),s=l%60;i.textContent=(p>0?p+"h "+c+"m":c+"m "+s+"s")+(i.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let t=this._getDiscovery(),a=t.atmosCe,r=this._hass.states[t.sunEntityId||""];if(!r)return;let o=new Date,i=o.getTime(),n=[],l=r.attributes?.next_rising,p=r.attributes?.next_setting,{todaySunrise:c,todaySunset:s}=Ve(o,l,p),d=r.attributes?.next_rising?new Date(r.attributes.next_rising).getTime():NaN,u=r.attributes?.next_setting?new Date(r.attributes.next_setting).getTime():NaN;Number.isFinite(d)&&d>i&&n.push(d),Number.isFinite(u)&&u>i&&n.push(u);let m={golden_hour_morning_start:c,golden_hour_morning_end:c,blue_hour_morning_start:c,blue_hour_morning_end:c,golden_hour_evening_start:s,golden_hour_evening_end:s,blue_hour_evening_start:s,blue_hour_evening_end:s};for(let[v,x]of Object.entries(m)){if(!a[v])continue;let w=new Date(String(this._hass.states[a[v]]?.state||""));if(isNaN(w.getTime()))continue;let $=Y(w,x);if(!$)continue;let _=$.getTime();_>i&&n.push(_);let S=_+864e5;S>i&&n.push(S)}if(n.length===0)return;let h=Math.min(...n)-i+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},h)}_postRender(t){if(!this.shadowRoot||!this._hass)return;let a=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let s of a){let d=s.getAttribute("data-condition")||"",u=s.getAttribute("data-night")==="true",m=null;try{let h=s.getAttribute("data-cloud");h&&h!=='""'&&h!==""&&(m=JSON.parse(h))}catch{}let f=ja(d,u,m);s.replaceChildren(f)}let r=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let s of r){let d=Number(s.getAttribute("data-pm25"))||0,u=Number(s.getAttribute("data-pm10"))||0,m=s.querySelector(".pw-fx");if(m&&(d>0||u>0)){let f=document.createDocumentFragment();Va(f,d,u),m.replaceChildren(f)}}let o=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let s of o){let d=s.getAttribute("data-astro-stars")==="true",u=s.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();d&&Gt(m),u&&(K(m,3,.5),xt(m)),s.replaceChildren(m)}let i=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let s of i){let d=Number(s.getAttribute("data-atmos-score"))||0,u=s.getAttribute("data-atmos-color")||"#30d158",m=Ja(d,u);s.replaceChildren(m)}let n=[...this.shadowRoot.querySelectorAll(".pw-section")],l=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let s of l)s.addEventListener("click",d=>{let u=d.currentTarget,m=u.closest(".pw-section");if(!m||!this._config)return;let f=n.indexOf(m);if(f<0)return;let h=m.dataset.proAction||"view-swap";if(h==="wind-mode"||h==="meteo-horizon"||h==="aqi-scale"){let x=(this._config.sections||[]).map(($,_)=>_===f?{...$}:$),w=x[f];if(!w)return;if(h==="wind-mode"&&w.type==="wind")w.speed_mode=w.speed_mode==="gust"?"speed":"gust";else if(h==="meteo-horizon"&&w.type==="meteogram"){let $=Number(w.hours),_=Number.isFinite($)&&$>0?$>=18:w.horizon==="long";w.horizon=_?"short":"long","hours"in w&&delete w.hours}else h==="aqi-scale"&&w.type==="air_quality"&&(w.scale=w.scale==="us"?"eu":"us");this._config={...this._config,sections:x},this._fullRender();return}let v=m.dataset.pro==="true"?"false":"true";m.dataset.pro=v,u.setAttribute("aria-pressed",v),this._proState[f]=v==="true"});let p=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let s of p){let d=!1,u=0,m=0;s.addEventListener("mousedown",f=>{d=!0,u=f.pageX-s.offsetLeft,m=s.scrollLeft,s.style.cursor="grabbing"}),s.addEventListener("mouseleave",()=>{d=!1,s.style.cursor=""}),s.addEventListener("mouseup",()=>{d=!1,s.style.cursor=""}),s.addEventListener("mousemove",f=>{if(!d)return;f.preventDefault();let h=f.pageX-s.offsetLeft;s.scrollLeft=m-(h-u)}),s.addEventListener("touchstart",f=>{f.stopPropagation()},{passive:!0}),s.addEventListener("touchmove",f=>{f.stopPropagation()},{passive:!0}),s.addEventListener("wheel",f=>{let h=f;Math.abs(h.deltaX)<Math.abs(h.deltaY)&&(f.preventDefault(),s.scrollLeft+=h.deltaY)},{passive:!1})}let c=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(c){let s=this.shadowRoot.querySelector(".pw-atmos-detail");s&&(this._atmosExpanded&&(s.style.maxHeight=`${s.scrollHeight}px`,c.setAttribute("aria-expanded","true")),c.addEventListener("click",()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(s.style.maxHeight=`${s.scrollHeight}px`,c.setAttribute("aria-expanded","true")):(s.style.maxHeight="0",c.setAttribute("aria-expanded","false"))}))}}getCardSize(){let t=this._config?.sections?.length||1;return Math.max(3,t*3)}getGridOptions(){return{columns:12,min_columns:6,rows:this.getCardSize(),min_rows:3}}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(fa)}static getStubConfig(t){let a=Object.keys(t.states).find(r=>r.startsWith("weather."));return{type:`custom:${He}`,weather_entity:a||"weather.home",sections:[{type:"overview"}]}}};customElements.get(He)||(customElements.define(He,Jt),console.info(`%c ${He.toUpperCase()} %c v${ma} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:He,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});export{Jt as PulseWeatherCard};

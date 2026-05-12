"use strict";(()=>{var ri=Object.defineProperty;var ro=(t,a)=>()=>(t&&(a=t(t=0)),a);var ni=(t,a)=>{for(var o in a)ri(t,o,{get:a[o],enumerable:!0})};var Lo,se,he,Fe,le,Ne,ze,Re,De,we,xe,Ie,jt,Le,Oo,no,Ho,Po,Wo,so,Uo,jo,Bo,Go,lo,Vo,qo,Yo,co,Xo,Ko,Dt,Qo,ft=ro(()=>{"use strict";Lo="0.1.1",se="pulse-weather-card",he="pulse-weather-card-editor",Fe=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],le={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},Ne=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],ze=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],Re=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}],De=[{max:2,color:"#30d158",label:"Low"},{max:5,color:"#ffd60a",label:"Moderate"},{max:7,color:"#ff9f0a",label:"High"},{max:10,color:"#ff453a",label:"Very High"},{max:1/0,color:"#bf5af2",label:"Extreme"}],we=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],xe=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}],Ie=[{max:300,color:"#30d158",label:"Stable"},{max:1e3,color:"#ffd60a",label:"Marginal"},{max:2500,color:"#ff9f0a",label:"Moderate"},{max:1/0,color:"#ff453a",label:"High"}],jt=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],Le=80,Oo=35,no=.6,Ho=90,Po=60,Wo=40,so=8,Uo=1800*1e3,jo=7,Bo=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Go={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"},lo={1:"#FFFF00",2:"#FFA500",3:"#FF0000",4:"#8B0000"},Vo=[{key:"pm2_5",label:"PM2.5",unit:"\xB5g/m\xB3",maxEu:75},{key:"pm10",label:"PM10",unit:"\xB5g/m\xB3",maxEu:150},{key:"nitrogen_dioxide",label:"NO\u2082",unit:"\xB5g/m\xB3",maxEu:400},{key:"ozone",label:"O\u2083",unit:"\xB5g/m\xB3",maxEu:240},{key:"sulphur_dioxide",label:"SO\u2082",unit:"\xB5g/m\xB3",maxEu:500},{key:"carbon_monoxide",label:"CO",unit:"\xB5g/m\xB3",maxEu:2e4},{key:"carbon_dioxide",label:"CO\u2082",unit:"ppm",maxEu:5e3}],qo=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],Yo=["active_alert","upcoming_alert","alert_count"],co="_weather",Xo=3,Ko={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},Dt=29.53,Qo=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"]});function l(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function h(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}var Oe=ro(()=>{"use strict"});var Ha={};ni(Ha,{PulseWeatherCardEditor:()=>Qe});var Qe,Pa=ro(()=>{"use strict";ft();Oe();Qe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null}setConfig(a){this._config={...a},this._render()}set hass(a){this._hass=a}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_render(){if(!this.shadowRoot||!this._config)return;let o=(this._config.sections||[{type:"overview"}]).map((i,r)=>`
      <div class="editor-section-row" data-index="${r}">
        <select class="editor-select" data-index="${r}" data-field="type">
          ${Fe.map(n=>`<option value="${l(n)}" ${n===i.type?"selected":""}>${l(n)}</option>`).join("")}
        </select>
        ${i.type==="atmosphere"?'<span class="editor-note">Requires Atmos CE sensors</span>':""}
        <button class="editor-btn editor-remove" data-index="${r}" title="Remove section">\u2715</button>
      </div>
    `).join("");this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; padding: 16px; }
        .editor-field { margin-bottom: 12px; }
        .editor-label { font-size: 12px; font-weight: 500; margin-bottom: 4px; display: block; }
        .editor-input, .editor-select {
          width: 100%; padding: 8px; border: 1px solid var(--divider-color, #e0e0e0);
          border-radius: 4px; font-size: 14px; background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #333); box-sizing: border-box;
        }
        .editor-section-row {
          display: flex; align-items: center; gap: 8px; margin-bottom: 4px;
        }
        .editor-section-row .editor-select { flex: 1; }
        .editor-btn {
          padding: 4px 8px; border: 1px solid var(--divider-color, #e0e0e0);
          border-radius: 4px; cursor: pointer; font-size: 12px;
          background: var(--card-background-color, #fff); color: var(--primary-text-color, #333);
        }
        .editor-btn:hover { background: var(--primary-color, #03a9f4); color: #fff; }
        .editor-remove { color: #ff453a; border-color: #ff453a; }
        .editor-note { font-size: 10px; color: var(--secondary-text-color, #888); font-style: italic; }
        .editor-add { margin-top: 8px; }
      </style>
      <div class="editor-field">
        <label class="editor-label">Weather Entity</label>
        <input class="editor-input" type="text" value="${l(String(this._config.weather_entity||""))}" data-field="weather_entity" placeholder="weather.home"/>
      </div>
      <div class="editor-field">
        <label class="editor-label">Atmos CE Source (optional)</label>
        <input class="editor-input" type="text" value="${l(String(this._config.atmos_source||""))}" data-field="atmos_source" placeholder="Auto-detect"/>
      </div>
      <div class="editor-field">
        <label class="editor-label">Sections</label>
        ${o}
        <button class="editor-btn editor-add">+ Add Section</button>
      </div>
    `,this.shadowRoot.querySelectorAll(".editor-input").forEach(i=>{i.addEventListener("change",r=>{if(!this._config)return;let n=r.target.dataset.field;n&&(this._config[n]=r.target.value||void 0,this._fireConfigChanged())})}),this.shadowRoot.querySelectorAll(".editor-select").forEach(i=>{i.addEventListener("change",r=>{if(!this._config)return;let n=Number(r.target.dataset.index),c=[...this._config.sections||[]];c[n]={...c[n],type:r.target.value},this._config.sections=c,this._fireConfigChanged(),this._render()})}),this.shadowRoot.querySelectorAll(".editor-remove").forEach(i=>{i.addEventListener("click",r=>{if(!this._config)return;let n=Number(r.target.dataset.index),c=[...this._config.sections||[]];c.splice(n,1),this._config.sections=c.length>0?c:[{type:"overview"}],this._fireConfigChanged(),this._render()})});let e=this.shadowRoot.querySelector(".editor-add");e&&e.addEventListener("click",()=>{if(!this._config)return;let i=[...this._config.sections||[]];i.push({type:"overview"}),this._config.sections=i,this._fireConfigChanged(),this._render()})}};customElements.get(he)||customElements.define(he,Qe)});ft();var Zo=`
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

  /* \u2500\u2500 Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-small: 4px;
  --pulse-radius-pill: 6px;
  --pulse-radius-bar: 2px;

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card: 16px;
  --pulse-space-section: 12px;
  --pulse-space-element: 8px;
  --pulse-space-tight: 4px;
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

/* Section label \u2014 uppercase, small, secondary */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stat value \u2014 light weight, tabular numbers */
.pulse-stat-value {
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}

/* Stat label \u2014 caption size, uppercase */
.pulse-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Interactive base \u2014 pointer, tap-highlight, focus ring */
.pulse-interactive {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

.pulse-interactive:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}

/* Unavailable / disabled state */
.pulse-unavailable {
  opacity: 0.5;
}

/* Hero value \u2014 ultra-thin weight for large numbers (Dark Sky DNA) */
.pulse-hero-value {
  font-weight: var(--pulse-weight-hero, 100);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

/* Flat stats row \u2014 Dark Sky style, border-top separator */
.pulse-stats-row {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}

.pulse-stats-row .stat {
  flex: 1;
  text-align: center;
  padding: 6px 0;
}

/* Ultra-muted label */
.pulse-muted-label {
  color: var(--pulse-text-secondary);
  opacity: 0.25;
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
  border-radius: 2px 2px 0 0;
  background: var(--info-color, #5ac8fa);
}
`;var Jo=`${Zo}
/* \u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host {
  display: block;

  /* Weather-specific glass intensity */
  --pulse-glass-blur: 20px;

  /* Typography */
  --pw-hero-size: 72px;
  --pw-hero-weight: 100;
  --pw-label-size: 11px;
  --pw-stat-size: 16px;
  --pw-section-label-size: 11px;

  /* Tier colors */
  --pw-tier-calm: #5ac8fa;
  --pw-tier-moderate: #30d158;
  --pw-tier-strong: #ff9f0a;
  --pw-tier-gale: #ff453a;

  /* Semantic colors */
  --pw-color-freeze: #5ac8fa;
  --pw-color-lcl: #d0d0d0;
  --pw-color-stable: #30d158;
  --pw-text-overlay: #d0d0d0;
  --pw-shadow-overlay: 0 1px 3px rgba(0,0,0,0.6);

  /* Transitions */
  --pw-bg-transition: 0.8s;
  --pw-color-transition: 0.4s;
}

/* \u2500\u2500 Card Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-card {
  overflow: hidden;
  min-width: 0;
  border-radius: var(--ha-card-border-radius, 12px);
  background: var(--pulse-bg-card);
  color: var(--pulse-text-primary);
  font-family: var(--ha-card-font-family, -apple-system, BlinkMacSystemFont, 'SF Pro', system-ui, sans-serif);
  container-type: inline-size;
}

/* \u2500\u2500 Section Shared \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-section { position: relative; min-width: 0; }
.pw-section + .pw-section { border-top: 1px solid var(--pulse-border-subtle); }

.pw-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0;
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
}

.pw-section-title {
  font-size: var(--pw-section-label-size);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* \u2500\u2500 Shared Status Label \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-status-label {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 20px;
  transition: color 0.4s;
  position: relative;
  z-index: 2;
}

.pw-status-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  text-align: center;
  margin-top: 2px;
  padding: 0 20px;
}

/* \u2500\u2500 Mode Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-tabs {
  display: flex;
  gap: 2px;
  background: var(--pulse-bg-elevated);
  border-radius: 6px;
  padding: 2px;
}

.pw-tab {
  padding: 3px 8px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: var(--pulse-text-secondary);
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.pw-tab:hover { color: var(--pulse-text-primary); opacity: 0.7; }
.pw-tab:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 1px;
}
.pw-tab[aria-selected="true"] {
  background: var(--pulse-bg-selected);
  color: var(--pulse-text-primary);
}

/* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 14px;
  padding: 14px 16px;
}

/* \u2500\u2500 Stats Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.pw-stat { text-align: center; padding: 6px 0; }
.pw-stat-value {
  font-size: var(--pw-stat-size);
  font-weight: 400;
  font-variant-numeric: tabular-nums;
}
.pw-stat-label {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-top: 2px;
}

/* \u2500\u2500 Atmosphere Layer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmosphere {
  position: relative;
  overflow: hidden;
  transition: background var(--pw-bg-transition);
}

.pw-fx {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

/* \u2500\u2500 Hero Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-hero {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 24px 20px 20px;
}

.pw-hero-temp {
  font-size: var(--pw-hero-size);
  font-weight: var(--pw-hero-weight);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.pw-hero-condition {
  font-size: 17px;
  font-weight: 500;
  color: var(--pulse-text-primary);
  margin-top: 4px;
}

.pw-hero-feels {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

/* \u2500\u2500 Temperature Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-temp-arc {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 20px 16px;
}

.pw-arc-label {
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  opacity: 0.6;
}

.pw-arc-bar {
  width: 120px;
  height: 4px;
  border-radius: 2px;
  position: relative;
  background: linear-gradient(to right, var(--pw-tier-calm), var(--pw-tier-moderate), var(--pw-tier-strong), var(--pw-tier-gale));
  opacity: 0.8;
}

.pw-arc-marker {
  position: absolute;
  top: -4px;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.3);
  transform: translateX(-50%);
  box-shadow: 0 1px 6px rgba(0,0,0,0.4);
}

.pw-arc-ghost {
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  transform: translateX(-50%);
  opacity: 0.5;
}

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
.pw-cape-bar {
  display: flex;
  gap: 2px;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
}
.pw-cape-slot {
  flex: 1;
  border-radius: 1px;
}

.pw-bottom-row { display: flex; gap: 8px; }

.pw-bottom-card {
  flex: 1;
  background: var(--pulse-bg-elevated);
  border-radius: 10px;
  padding: 10px 12px;
}

.pw-bottom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.pw-bottom-label { font-size: 10px; color: var(--pulse-text-secondary); }
.pw-bottom-value { font-size: 13px; font-weight: 500; }

.pw-mini-bar {
  height: 3px;
  background: var(--pulse-bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}

.pw-mini-fill { height: 100%; border-radius: 2px; }

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-forecast { padding: 0 0 16px; }

.pw-hourly-strip {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  margin: 0 20px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.pw-hourly-strip::-webkit-scrollbar { display: none; }

.pw-hour-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  padding: 8px 4px;
  border-radius: 10px;
  transition: background 0.2s;
}

.pw-hour-col:hover { background: var(--pulse-bg-elevated); }

.pw-hour-col.pw-current {
  background: rgba(90,200,250,0.08);
  border: 1px solid rgba(90,200,250,0.15);
}

.pw-hour-time { font-size: 10px; color: var(--pulse-text-secondary); margin-bottom: 6px; }
.pw-hour-icon { font-size: 20px; margin-bottom: 6px; }
.pw-hour-temp { font-size: 14px; font-weight: 300; font-variant-numeric: tabular-nums; }
.pw-hour-precip { font-size: 9px; color: var(--pw-color-freeze); margin-top: 4px; min-height: 12px; }

.pw-sparkline-wrap {
  padding: 0 20px;
  margin: 0 0 12px;
  height: 40px;
}

.pw-daily-rows { display: flex; flex-direction: column; gap: 4px; padding: 0 20px; }

.pw-daily-row {
  display: grid;
  grid-template-columns: 48px 24px 32px 1fr 32px 32px;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  font-size: 13px;
}

.pw-daily-day { font-weight: 400; }
.pw-daily-icon { font-size: 16px; text-align: center; }
.pw-daily-precip { font-size: 10px; color: var(--pw-color-freeze); text-align: right; }

.pw-daily-bar-wrap {
  height: 4px;
  background: var(--pulse-bg-elevated);
  border-radius: 2px;
  position: relative;
}

.pw-daily-bar {
  position: absolute;
  height: 100%;
  border-radius: 2px;
}

.pw-daily-low, .pw-daily-high {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.pw-daily-low { color: var(--pulse-text-secondary); }

/* \u2500\u2500 Wind Rose \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-wind {
  position: relative;
  overflow: hidden;
}

.pw-wind-streaks {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.pw-streak {
  position: absolute;
  height: 1px;
  border-radius: 1px;
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

.pw-aqi-gauge-unit {
  position: relative;
  z-index: 2;
  width: 220px;
  height: 140px;
  margin: 0 auto 12px;
}

.pw-aqi-gauge-center {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
}

.pw-aqi-value {
  font-size: 52px;
  font-weight: 100;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  transition: color 0.4s;
}

.pw-aqi-scale-label {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 1px;
}

.pw-aqi-category {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  padding: 0 20px;
  transition: color 0.4s;
}

.pw-aqi-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  text-align: center;
  margin-top: 2px;
  padding: 0 20px;
}

.pw-pollutant-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 12px;
  padding: 0 20px;
}

.pw-pollutant-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 4px;
  background: var(--pulse-bg-elevated);
  border-radius: 8px;
}

.pw-pollutant-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.pw-pollutant-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.pw-pollutant-label { color: var(--pulse-text-secondary); font-size: 10px; }
.pw-pollutant-value { font-size: 13px; font-weight: 500; font-variant-numeric: tabular-nums; }

/* \u2500\u2500 Astro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro {
  position: relative;
  overflow: hidden;
  padding: 0 0 16px;
}

.pw-sky-wash {
  position: absolute;
  inset: 0;
  transition: background var(--pw-bg-transition);
  z-index: 0;
}

.pw-astro-content { position: relative; z-index: 2; }

/* Stars layer above content in astro section */
.pw-astro > .pw-fx { z-index: 3; }

.pw-arc-wrap {
  width: 100%;
  overflow: visible;
}

/* \u2500\u2500 Astro Layout (three-column redesign) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-layout {
  display: flex;
  align-items: stretch;
}

.pw-twilight-arc {
  position: absolute;
  width: 18px;
  height: 89px;
  top: 55px;
}

.pw-twilight-arc-am { left: 4px; }
.pw-twilight-arc-pm { right: 4px; }

.pw-twilight-col {
  position: relative;
  width: 110px;
  flex-shrink: 0;
  padding-top: 42px;
}

.pw-twilight-am .pw-twilight-time-golden { margin-left: 16px; }
.pw-twilight-am .pw-twilight-label-golden { margin-top: 1px; margin-left: 14px; }
.pw-twilight-am .pw-twilight-time-blue { margin-top: 2px; margin-left: 18px; }
.pw-twilight-am .pw-twilight-label-blue { margin-top: 1px; margin-left: 24px; }
.pw-twilight-am .pw-twilight-time-end { margin-top: 2px; margin-left: 29px; }

.pw-twilight-pm { text-align: right; }
.pw-twilight-pm .pw-twilight-time-golden { margin-right: 16px; }
.pw-twilight-pm .pw-twilight-label-golden { margin-top: 1px; margin-right: 14px; }
.pw-twilight-pm .pw-twilight-time-blue { margin-top: 2px; margin-right: 18px; }
.pw-twilight-pm .pw-twilight-label-blue { margin-top: 1px; margin-right: 24px; }
.pw-twilight-pm .pw-twilight-time-end { margin-top: 2px; margin-right: 29px; }

.pw-twilight-time {
  font-size: 17px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
  color: var(--primary-text-color);
}

.pw-twilight-label {
  font-size: 13px;
  color: var(--pulse-text-secondary);
  font-weight: 400;
  line-height: 1.4;
  text-transform: uppercase;
}

.pw-arc-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.pw-sunrise-sunset {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -8px;
}

.pw-sun-time {
  width: 84px;
  text-align: center;
}

.pw-sun-time-value {
  font-size: 17px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}

.pw-sun-time-label {
  font-size: 14px;
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
}

.pw-moon-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid var(--pulse-border-subtle, rgba(255,255,255,0.06));
}

/* \u2500\u2500 Alerts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alerts {
  position: relative;
  overflow: hidden;
  padding: 0 0 16px;
}

.pw-severity-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  animation: pw-breathe 4s ease-in-out infinite;
}

.pw-alerts-content { position: relative; z-index: 2; }

.pw-radar-wrap {
  display: flex;
  justify-content: center;
  padding: 16px 20px;
}

.pw-alert-list { display: flex; flex-direction: column; gap: 8px; padding: 0 20px; }

.pw-alert-row {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: var(--pulse-bg-elevated);
  border-radius: 10px;
  border-left: 3px solid;
}

.pw-alert-icon { font-size: 20px; flex-shrink: 0; }

.pw-alert-body { flex: 1; min-width: 0; }

.pw-alert-headline {
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.pw-alert-badge {
  font-size: 9px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 3px;
  text-transform: uppercase;
}

.pw-alert-desc {
  font-size: 11px;
  color: var(--pulse-text-secondary);
  margin-top: 3px;
  line-height: 1.4;
}

.pw-alert-link {
  display: inline-block;
  margin-top: 4px;
  font-size: 11px;
  color: var(--pulse-accent-primary);
  text-decoration: none;
  border-bottom: 1px dashed currentColor;
}
.pw-alert-link:hover { color: var(--pulse-accent-hover); }

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 3px;
}

.pw-alert-time {
  font-size: 11px;
  color: var(--pulse-text-secondary);
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
}

.pw-alert-progress {
  height: 2px;
  background: var(--pulse-bg-elevated);
  border-radius: 1px;
  margin-top: 6px;
  overflow: hidden;
}

.pw-alert-progress-fill { height: 100%; border-radius: 1px; }

.pw-all-clear {
  text-align: center;
  padding: 20px 0;
  font-size: 17px;
  font-weight: 500;
  color: var(--pw-color-stable);
}

/* \u2500\u2500 Atmosphere Column \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmos { padding: 0 0 16px; position: relative; overflow: hidden; }

.pw-atmos-tier-desc {
  font-size: 12px;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  text-align: center;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.pw-atmos-column-wrap {
  display: flex;
  align-items: stretch;
  padding: 8px 20px 0;
  gap: 12px;
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
  border-radius: 10px;
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
  transition: height 0.8s ease;
}

/* FX container inside CAPE fill (for thermal particles) */
.pw-atmos-fx {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

/* Thermal particles */
.pw-thermal-particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  animation: pw-thermalRise var(--rise-dur, 4s) ease-out infinite;
}

@keyframes pw-thermalRise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: var(--peak-op, 0.4); }
  80% { opacity: var(--peak-op, 0.4); transform: translateY(var(--rise-dist, -80px)) scale(0.5); }
  100% { opacity: 0; transform: translateY(var(--rise-dist, -100px)) scale(0.3); }
}

/* Column inner glow */
.pw-atmos-column-glow {
  position: absolute;
  inset: 0;
  border-radius: 9px;
  pointer-events: none;
  box-shadow: inset 0 0 20px var(--glow-color, transparent);
}

.pw-atmos-column-glow.pulsing {
  animation: pw-columnPulse var(--pulse-dur, 3s) ease-in-out infinite;
}

@keyframes pw-columnPulse {
  0%, 100% { box-shadow: inset 0 0 20px var(--glow-color, transparent); }
  50% { box-shadow: inset 0 0 40px var(--glow-color, transparent); }
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

.pw-atmos-shear-arrow {
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}

.pw-atmos-lapse-overlay {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 10px;
  z-index: 1;
}

.pw-atmos-lapse-label {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-shadow: var(--pw-shadow-overlay);
}

/* Cloud layer bands */
.pw-atmos-cloud-band {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
  border-radius: 4px;
}

/* High cloud top-edge indicator */
.pw-atmos-cloud-high {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  z-index: 1;
  pointer-events: none;
  border-radius: 9px 9px 0 0;
}

/* Shear arrow value label */
.pw-atmos-shear-label {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-shadow: var(--pw-shadow-overlay);
}

/* Tap-to-expand detail panel */
.pw-atmos-tappable {
  cursor: pointer;
}
.pw-atmos-tappable:active {
  opacity: 0.85;
}

.pw-atmos-detail {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
  margin: 0 20px;
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
  gap: 8px;
}

.pw-atmos-detail-indicator {
  width: 4px;
  height: 24px;
  border-radius: 2px;
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
.pw-severity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pw-dotPulse 2s ease-in-out infinite;
}

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
.pw-smog-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pw-haze-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pw-dust-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(180,160,120,0.3);
  animation: pw-dustFloat 8s ease-in-out infinite;
}

@keyframes pw-dustFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.pw-haze-blob {
  position: absolute;
  border-radius: 50%;
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
  border-radius: 50%;
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
  border-radius: 50%;
  background-image: conic-gradient(transparent 85%, var(--pw-radar-sweep, rgba(80,255,0,0.35)));
  animation: pw-sweepRotate var(--pw-radar-dur, 2.5s) linear infinite;
  will-change: transform;
}

.pw-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
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
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: pw-radarBlink var(--pw-radar-dur, 2.5s) ease-out infinite;
}

/* \u2500\u2500 Alert rows \u2014 Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 20px; }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }
.pw-alert-row.upcoming { opacity: 0.5; }
.pw-alert-row.active .pw-alert-headline { color: var(--pw-alert-color); }
.pw-alert-row.active .pw-alert-time { color: var(--pw-alert-color); }

.pw-alert-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 5px;
}

.pw-alert-body { flex: 1; min-width: 0; }

.pw-alert-headline {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
}

.pw-alert-type {
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.3;
  margin-top: 1px;
}

.pw-alert-desc {
  font-size: 11px;
  font-weight: 300;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  margin-top: 3px;
  line-height: 1.4;
}

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.5;
  margin-top: 3px;
}

.pw-alert-time {
  font-size: 10px;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  opacity: 0.6;
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.pw-all-clear {
  text-align: center;
  padding: 4px 0;
  font-size: 17px;
  font-weight: 500;
  color: var(--pw-color-stable);
}

/* \u2500\u2500 Weather Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-weather-summary { font-size: 13px; font-weight: 400; text-align: center; padding: 4px 20px 8px; color: var(--pulse-text-primary); position: relative; z-index: 2; opacity: 0.85; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: 8px; padding: 4px 20px 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pulse-text-secondary); font-variant-numeric: tabular-nums; opacity: 0.6; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: 1px; background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: 1px; background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: 50%; border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* \u2500\u2500 Stability Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-stability-badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 8px; margin-left: 6px; vertical-align: middle; }

/* \u2500\u2500 Precip Time Markers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-precip-times { display: flex; justify-content: space-between; font-size: 9px; color: var(--pulse-text-secondary); opacity: 0.6; margin-top: 2px; }

/* \u2500\u2500 Rain Start Indicator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-rain-start { position: absolute; top: -14px; transform: translateX(-50%); text-align: center; }
.pw-rain-start-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--pw-color-freeze); margin: 0 auto 2px; }
.pw-rain-start-label { font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* \u2500\u2500 Freezing Level Marker (Temp Arc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-arc-freeze { position: absolute; top: -6px; bottom: -6px; width: 1px; transform: translateX(-50%); }
.pw-arc-freeze-line { width: 1px; height: 100%; background: var(--pw-color-freeze); opacity: 0.5; }
.pw-arc-freeze-label { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* \u2500\u2500 CAPE Sparkline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-cape-sparkline { display: block; border-radius: 2px; overflow: hidden; }
.pw-cape-peak { position: absolute; top: -12px; transform: translateX(-50%); font-size: 8px; color: var(--pw-tier-strong); white-space: nowrap; font-variant-numeric: tabular-nums; }

/* \u2500\u2500 Comfort Bar (Dew Point) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-comfort-bar { display: flex; gap: 2px; height: 4px; border-radius: 2px; overflow: hidden; }
.pw-comfort-slot { flex: 1; border-radius: 1px; }

@media (prefers-reduced-motion: reduce) {
  .pw-streak,
  .pw-wind-arrow,
  .pw-gust-cone,
  .pw-rose-container.pw-shaking,
  .pw-severity-wash,
  .pw-severity-dot,
  .pw-dust-particle,
  .pw-haze-blob,
  .pw-tension-wash.breathing,
  .pw-tension-vignette,
  .pw-radar::after,
  .pw-radar-blip,
  .pw-thermal-particle,
  .pw-atmos-column-glow.pulsing {
    animation: none !important;
  }
  .pw-atmos-column-glow.pulsing {
    box-shadow: inset 0 0 30px var(--glow-color, transparent) !important;
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
.pw-meteogram { padding: 0 0 16px; position: relative; }
.pw-meteogram-chart { display: block; width: 100%; height: auto; margin: 8px 0 0; }
.pw-meteogram-footer { padding: 4px 20px 0; }
.pw-meteogram-legend { display: flex; gap: 12px; justify-content: center; font-size: 8px; opacity: 0.5; padding: 4px 0; color: var(--pulse-text-secondary); }
.pw-meteogram-strip { display: flex; gap: 0; height: 4px; border-radius: 2px; overflow: hidden; margin-top: 6px; position: relative; }
.pw-meteogram-strip::before { content: attr(data-label); position: absolute; left: -20px; top: -2px; font-size: 8px; opacity: 0.4; color: var(--pulse-text-secondary); }
.pw-meteogram-strip > span { flex: 1; }
`;ft();var ta=[{type:"overview"}],si={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function po(t){if(!t||typeof t!="object")return{type:"overview"};let a=Fe.includes(t.type)?t.type:"overview";return{...si[a]||{},...t,type:a}}function ea(t){if(!t||typeof t!="object")return{type:"custom:pulse-weather-card",sections:ta.map(po)};let a=t,o=Array.isArray(a.sections)&&a.sections.length>0?a.sections.map(po):ta.map(po);return{type:a.type||"custom:pulse-weather-card",weather_entity:a.weather_entity||void 0,atmos_source:a.atmos_source||void 0,sections:o}}Oe();ft();function li(t){let a=t.replace(/^weather\./,"");return a.endsWith(co)&&(a=a.slice(0,-co.length)),a}function uo(t,a){let o=a.weather_entity||Object.keys(t).find(s=>s.startsWith("weather."))||"",e=a.atmos_source||li(o),i={};for(let s of qo){let p=`sensor.${e}_${s}`;p in t&&(i[s]=p)}let r=Object.keys(i).length>=Xo,n=r?i:{},c=[];if(a.alert_entities&&a.alert_entities.length>0)for(let s of a.alert_entities)s in t&&c.push(s);else if(r){for(let g of Yo){let m=`sensor.${e}_${g}`,u=`sensor.${e}_warnings_${g}`;m in t?c.push(m):u in t&&c.push(u)}let s=`binary_sensor.${e}_alert_active`,p=`binary_sensor.${e}_warnings_alert_active`;s in t?c.push(s):p in t&&c.push(p)}let d="sun.sun"in t?"sun.sun":null;return{weatherEntityId:o,atmosCe:n,sunEntityId:d,atmosSource:r?e:null,alertEntityIds:c}}ft();function gt(t,a,o){let e=document.createElement(t);if(e.className=a,o)for(let[i,r]of Object.entries(o))e.style.setProperty(i,r);return e}function E(t,a){return Math.random()*(a-t)+t}function be(t,a=60,o=1,e=2){let i=Math.min(a,Ho);for(let r=0;r<i;r++){let n=gt("div","pw-rain-drop"),c=E(15,30),d=E(.4,.8)/o;Object.assign(n.style,{left:`${E(0,100)}%`,top:`${E(-10,20)}%`,width:`${e}px`,height:`${c}px`,borderRadius:`0 0 ${e}px ${e}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${d}s linear ${E(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(n)}}function mo(t,a=40){let o=Math.min(a,Po);for(let e=0;e<o;e++){let i=gt("div","pw-snowflake"),r=E(2,5);Object.assign(i.style,{left:`${E(0,100)}%`,top:`${E(-5,10)}%`,width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${E(3,6)}s linear ${E(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(i)}}function ci(t){for(let a=0;a<4;a++){let o=gt("div","pw-fog-layer");Object.assign(o.style,{position:"absolute",width:"200%",height:"40px",top:`${30+a*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${E(15,25)}s linear ${a*2}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function He(t){for(let a=0;a<8;a++){let o=gt("div","pw-sun-ray");Object.assign(o.style,{position:"absolute",top:"-20px",left:`${10+a*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+a*4}deg)`,animation:`pw-rayPulse ${E(3,5)}s ease-in-out ${E(0,2)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function st(t,a=4,o=1){let e=Math.min(a,so);for(let i=0;i<e;i++){let r=gt("div","pw-cloud"),n=E(80,160),c=E(30,60),d=E(20,40)/o;Object.assign(r.style,{position:"absolute",width:`${n}px`,height:`${c}px`,top:`${E(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${d}s linear ${E(0,15)}s infinite`,animationFillMode:"backwards"}),t.appendChild(r)}}function fo(t){for(let a=0;a<Wo;a++){let o=gt("div","pw-star"),e=E(1,3);Object.assign(o.style,{position:"absolute",left:`${E(0,100)}%`,top:`${E(0,70)}%`,width:`${e}px`,height:`${e}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${E(2,5)}s ease-in-out ${E(0,3)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function pi(t,a){let o=[],e=t,i=0,r=Math.floor(E(4,8)),n=a/r;o.push(`${e},${i}`);for(let c=0;c<r;c++)e+=E(-15,15),i+=n,o.push(`${e},${i}`);return o.join(" ")}function oa(t,a=2,o){let e=o||Array.from({length:a},(r,n)=>n*3),i=gt("div","pw-lightning-flash");Object.assign(i.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${e[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),t.appendChild(i);for(let r=0;r<a;r++){let n="http://www.w3.org/2000/svg",c=document.createElementNS(n,"svg");c.setAttribute("class","pw-lightning-bolt"),c.setAttribute("width","60"),c.setAttribute("height","200"),c.setAttribute("viewBox","0 0 60 200"),c.style.position="absolute",c.style.top="0",c.style.left=`${E(15,75)}%`,c.style.pointerEvents="none",c.style.zIndex="2",c.style.animation=`pw-boltStrike 6s ease-in-out ${e[r]||0}s infinite`,c.style.animationFillMode="backwards";let d=pi(30,180),s=document.createElementNS(n,"polyline");s.setAttribute("points",d),s.setAttribute("fill","none"),s.setAttribute("stroke","rgba(200,220,255,0.4)"),s.setAttribute("stroke-width","6"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),c.appendChild(s);let p=document.createElementNS(n,"polyline");p.setAttribute("points",d),p.setAttribute("fill","none"),p.setAttribute("stroke","#fff"),p.setAttribute("stroke-width","2"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),c.appendChild(p),t.appendChild(c)}}function di(t){let a=gt("div","pw-heat-shimmer");Object.assign(a.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),t.appendChild(a);let o=gt("div","pw-heat-ripple");Object.assign(o.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),t.appendChild(o)}function aa(t,a,o){let e=Math.min(1,(a/75+o/150)/2);if(e<.05)return;let i=gt("div","pw-smog-overlay");i.style.background=`rgba(120,110,80,${.05+e*.15})`,t.appendChild(i);let r=gt("div","pw-haze-vignette");r.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${e*.3}) 100%)`,t.appendChild(r);let n=Math.floor(e*20);for(let d=0;d<n;d++){let s=gt("div","pw-dust-particle"),p=E(1,3+e*3);Object.assign(s.style,{left:`${E(0,100)}%`,top:`${E(10,90)}%`,width:`${p}px`,height:`${p}px`,animationDelay:`${E(0,8)}s`,animationFillMode:"backwards"}),t.appendChild(s)}let c=Math.floor(e*5);for(let d=0;d<c;d++){let s=gt("div","pw-haze-blob"),p=E(60,120);Object.assign(s.style,{left:`${E(-10,80)}%`,top:`${E(10,70)}%`,width:`${p}px`,height:`${p*.6}px`,animationDelay:`${E(0,12)}s`,animationFillMode:"backwards"}),t.appendChild(s)}}function ia(t,a,o){let e=document.createDocumentFragment();try{a&&fo(e);let i=o?Math.round(o.total/100*so):0;switch(t){case"sunny":a||He(e),o&&i>0&&st(e,i);break;case"clear-night":o&&i>0&&st(e,i);break;case"partlycloudy":a||He(e),st(e,o?i:3);break;case"cloudy":st(e,o?Math.max(i,4):6);break;case"rainy":be(e,40,1,2),st(e,o?Math.max(i,3):4);break;case"pouring":be(e,80,1.5,3),st(e,o?Math.max(i,5):6);break;case"snowy":mo(e,40),st(e,o?Math.max(i,3):4);break;case"snowy-rainy":mo(e,20),be(e,20,.8,1),st(e,o?Math.max(i,3):4);break;case"hail":be(e,30,1.2,3),mo(e,15),st(e,o?Math.max(i,4):5);break;case"lightning":oa(e,2,[0,3]),st(e,o?Math.max(i,5):6);break;case"lightning-rainy":oa(e,3,[0,2,4]),be(e,60,1.3,2),st(e,o?Math.max(i,5):6);break;case"fog":ci(e);break;case"windy":case"windy-variant":st(e,o?i:3,1.5);break;case"exceptional":di(e);break;default:o&&i>0&&st(e,i);break}}catch(i){console.warn("Pulse Weather: buildConditionFx threw, returning partial fragment",i)}return e}ft();Oe();function Pe(t,a){return t.filter(o=>Number.isFinite(a(o)))}function K(t,a=0){let o=Number(t);return Number.isFinite(o)?o:a}function It(t,a){if(typeof t!="string")return String(t);let o=Math.max(0,Math.min(1,Number(a))),e=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t);return e?`rgba(${parseInt(e[1],16)},${parseInt(e[2],16)},${parseInt(e[3],16)},${o})`:(e=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t),e?`rgba(${parseInt(e[1]+e[1],16)},${parseInt(e[2]+e[2],16)},${parseInt(e[3]+e[3],16)},${o})`:(e=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(t),e?`rgba(${e[1]},${e[2]},${e[3]},${o})`:t))}var go=0;function Et(t="pw-id"){return go=go+1>>>0,`${t}-${go.toString(36)}`}function ce(t,a,o=36e5){let e=(a?a.getTime():Date.now())-o;return t.filter(i=>{let r=i.datetime;if(!r)return!1;let n=new Date(r).getTime();return Number.isFinite(n)&&n>=e})}function q(t){let a=Number(t);for(let o of Ne)if(a<=o.max)return o.color;return Ne[Ne.length-1].color}function ho(t){let a=Number(t);for(let o of ze)if(a<=o.max)return o.tier;return ze[ze.length-1].tier}function na(t){return le[ho(t)]||le.calm}function We(t){let a=Number(t);for(let o of Re)if(a<=o.max)return o;return Re[Re.length-1]}function Ue(t){let a=(Number(t)%360+360)%360,o=Math.round(a/22.5)%16;return Bo[o]}function sa(t,a,o){if(o)return o;let e=Number(t),i=e<=100?we:xe;for(let r of i)if(e<=r.max)return r.color;return i[i.length-1].color}function la(t){let a=Number(t);for(let o of De)if(a<=o.max)return o.color;return De[De.length-1].color}function wo(t){let a=Number(t);for(let o of Ie)if(a<=o.max)return o.color;return Ie[Ie.length-1].color}function ca(t){return t<=12?"#30d158":t<=50?"#5ac8fa":t<=87?"#ff9f0a":"#ff453a"}function pa(t){return t<10?"#5ac8fa":t<16?"#30d158":t<19?"#ffd60a":t<22?"#ff9f0a":"#ff453a"}var je=[{name:"Night",gradient:"linear-gradient(180deg, #050510, #0a0a1a 50%, transparent)",labelColor:"#636366",stars:!0,isDay:!1},{name:"Blue Hour",gradient:"linear-gradient(180deg, #0a1628, #1a3050 60%, transparent)",labelColor:"#5ac8fa",stars:!0,isDay:!1},{name:"Golden Hour",gradient:"linear-gradient(180deg, #1a2a4a, #3a4a5a 40%, #6a4a30)",labelColor:"#ff9f0a",stars:!1,isDay:!0},{name:"Daytime",gradient:"linear-gradient(180deg, #1a3a5f, #2c5a8e 50%, transparent)",labelColor:"#ffd60a",stars:!1,isDay:!0},{name:"Golden Hour",gradient:"linear-gradient(180deg, #2a2a3a, #5a3a2a 50%, #8a4a1a)",labelColor:"#ff6b35",stars:!1,isDay:!0},{name:"Blue Hour",gradient:"linear-gradient(180deg, #0a1020, #1a2a40 60%, transparent)",labelColor:"#5ac8fa",stars:!0,isDay:!1}];function Be(t,a,o,e,i,r,n,c){let d=t.getTime(),s=a.getTime(),p=o.getTime(),g=r?r.getTime():s-36e5,m=e?e.getTime():s-18e5,u=c?c.getTime():p-18e5,w=i?i.getTime():p+18e5,f=i?i.getTime()+36e5:n?n.getTime()+18e5:p+36e5;return d<g?0:d<m?1:d<s?2:d<u?3:d<w?4:d<f?5:0}function Mt(t,a,o){let e=a?Object.entries(a).map(([i,r])=>` ${i}="${r}"`).join(""):"";return o!=null?`<${t}${e}>${o}</${t}>`:`<${t}${e}/>`}function ve(t){return Ko[t]||"\u{1F324}\uFE0F"}function j(t,a,o){let e=o?` style="color:${h(o)}"`:"";return`<div class="stat"${o?` style="background:${h(o)}14; border-radius:6px"`:""}>
          <div class="pw-stat-value"${e}>${t}</div>
          <div class="pw-stat-label">${l(a)}</div>
        </div>`}var ra={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function da(t){return Object.hasOwn(ra,t)?ra[t]:t.replace(/-/g," ").replace(/\b\w/g,a=>a.toUpperCase())}function _t(t,a,o){return o===a?0:Math.max(0,Math.min(1,(t-a)/(o-a)))}function ht(t,a,o="ellipse"){let e=Math.max(0,Math.min(1,a)),i=Math.round(3+e*50),r=Math.round(2+e*25),n=Math.round(50+e*30),c=d=>d.toString(16).padStart(2,"0");return`radial-gradient(${o} at 50% 30%, ${t}${c(i)} 0%, ${t}${c(r)} ${n}%, transparent 90%)`}function Bt(t,a=6,o=1.2){let e=Math.max(0,Math.min(1,t));return a-e*(a-o)}function ye(t,a){let o=Math.max(0,Math.min(1,a)),e=Math.round(4+o*20),i=Math.round(o*8),n=Math.round((.15+o*.55)*255).toString(16).padStart(2,"0");return`0 0 ${e}px ${i}px ${t}${n}`}function Ge(t,a="0,0,0"){let o=Math.max(0,Math.min(1,t));if(o<.1)return"";let e=Math.round(60-o*30),i=(o*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${e}%, rgba(${a},${i}) 100%)`}function ua(t,a=8,o=2){let e=Math.max(0,Math.min(1,t));return a-e*(a-o)}ft();var Tt=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),ui=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function ma(t){for(let a of jt)if(t>=a.min)return a;return jt[jt.length-1]}function mi(t,a){let o=Math.min(100,t/4e3*100),e=Math.min(100,Math.max(0,(6-a)/12*100));return Math.round(o*.6+e*.4)}function fi(t){return t<=10?{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:t<=30?{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:t<=55?{label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:t<=80?{label:"High",color:"#ff453a",desc:"Severe storms expected"}:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function gi(t,a){let o=a.atmosCe,e=o.cape&&t.states[o.cape]&&Number(t.states[o.cape].state)||0,i=o.lifted_index&&t.states[o.lifted_index]&&Number(t.states[o.lifted_index].state)||0,r=!!(o.cape&&t.states[o.cape]),n=!!(o.lifted_index&&t.states[o.lifted_index]),c=r||n?mi(e,i):null;if(o.stability_assessment&&t.states[o.stability_assessment]){let s=t.states[o.stability_assessment].state,p=t.states[o.stability_assessment].attributes||{},g=Tt[s];if(g){let m=ui[s]??0;return{...g,score:m,source:"composite",attrs:p,capeValue:e,liValue:i,hasCape:r,hasLI:n}}}return{...(c!==null?fi(c):null)||{label:"Unknown",color:"#888888",desc:""},score:c,source:"fallback",attrs:null,capeValue:e,liValue:i,hasCape:r,hasLI:n}}function hi(t){return Math.max(0,Math.min(100,t))}function Qt(t,a=5e3){return a<=0?0:Math.max(0,Math.min(100,t/a*100))}function wi(t,a){let r=Math.max(t,a),n=5e3;r>5e3*.8&&(n=Math.max(5e3,Math.ceil(r*1.25/1e3)*1e3));let c=Math.ceil(n/5e3)*1e3,d=[];for(let s=n;s>=0;s-=c)d.push(s);return d[d.length-1]!==0&&d.push(0),{scaleMax:n,labelInterval:c,labels:d}}function xo(t){return Math.max(0,Math.min(100,t))/100*.35}var xi=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);function fa(t,a){if(a&&typeof a.wind_shear_tier=="string"){let o=a.wind_shear_tier,e=Tt[o];if(e)return{color:e.color,tier:o}}for(let{max:o,tier:e}of xi)if(t<o)return{color:Tt[e]?.color||"#888888",tier:e};return{color:Tt.high?.color||"#8b0000",tier:"high"}}var bi=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function bo(t,a){if(a&&typeof a.lapse_rate_tier=="string"){let o=a.lapse_rate_tier,e=Tt[o];if(e)return{color:e.color,tier:o}}for(let{max:o,tier:e}of bi)if(t<o)return{color:Tt[e]?.color||"#888888",tier:e};return{color:Tt.high?.color||"#8b0000",tier:"high"}}function vi(t,a,o,e){let i=o.atmosCe,r=[];if(t.hasCape){let u=wo(t.capeValue);r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${h(u)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${h(u)}">${l(String(Math.round(t.capeValue)))} J/kg</div>
      <div class="pw-atmos-detail-label">CAPE</div>
      <div class="pw-atmos-detail-desc">${l(t.desc||"")}</div></div>
    </div>`)}if(t.hasLI){let u=ma(t.liValue);r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${h(u.color)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${h(u.color)}">${l(t.liValue>=0?"+":"")}${l(t.liValue.toFixed(1))}</div>
      <div class="pw-atmos-detail-label">Lifted Index</div>
      <div class="pw-atmos-detail-desc">${l(u.label)}</div></div>
    </div>`)}let n=i.wind_shear_0_6_km||"",c=n?a.states[n]:null;if(c){let u=Number(c.state)||0,w=c?.attributes?.unit_of_measurement||"km/h",{color:f,tier:y}=fa(u,t.attrs),b=Tt[y];r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${h(f)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${h(f)}">${l(String(Math.round(u)))} ${l(w)}</div>
      <div class="pw-atmos-detail-label">Wind Shear</div>
      <div class="pw-atmos-detail-desc">${l(b?.label||y)}</div></div>
    </div>`)}let d=i.lapse_rate_700_500_hpa||"",s=d?a.states[d]:null;if(s){let u=Number(s.state)||0,w=s?.attributes?.unit_of_measurement||"\xB0C/km",{color:f,tier:y}=bo(u,t.attrs),b=Tt[y];r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${h(f)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${h(f)}">${l(u.toFixed(1))} ${l(w)}</div>
      <div class="pw-atmos-detail-label">Lapse Rate</div>
      <div class="pw-atmos-detail-desc">${l(b?.label||y)}</div></div>
    </div>`)}if(i.freezing_level_height&&a.states[i.freezing_level_height]){let u=Number(a.states[i.freezing_level_height].state)||0,w=a.states[i.freezing_level_height]?.attributes?.unit_of_measurement||"m",f="#5ac8fa";r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${h(f)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${h(f)}">${l(String(Math.round(u)))}${l(w)}</div>
      <div class="pw-atmos-detail-label">Freeze Level</div>
      <div class="pw-atmos-detail-desc">Snow level</div></div>
    </div>`)}if(i.lcl_height&&a.states[i.lcl_height]){let u=Number(a.states[i.lcl_height].state)||0,w=a.states[i.lcl_height]?.attributes?.unit_of_measurement||"m";r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:#d0d0d0"></div>
      <div><div class="pw-atmos-detail-value">${l(String(Math.round(u)))} ${l(w)}</div>
      <div class="pw-atmos-detail-label">Cloud Base</div>
      <div class="pw-atmos-detail-desc">LCL height</div></div>
    </div>`)}let p=i.cloud_cover_low&&a.states[i.cloud_cover_low]?Number(a.states[i.cloud_cover_low].state)||0:-1,g=i.cloud_cover_mid&&a.states[i.cloud_cover_mid]?Number(a.states[i.cloud_cover_mid].state)||0:-1,m=i.cloud_cover_high&&a.states[i.cloud_cover_high]?Number(a.states[i.cloud_cover_high].state)||0:-1;if(p>=0||g>=0||m>=0){let u=[];p>=0&&u.push(`Low ${Math.round(p)}%`),g>=0&&u.push(`Mid ${Math.round(g)}%`),m>=0&&u.push(`High ${Math.round(m)}%`),r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:rgba(255,255,255,0.3)"></div>
      <div><div class="pw-atmos-detail-value">${l(u.join(" \xB7 "))}</div>
      <div class="pw-atmos-detail-label">Cloud Cover</div></div>
    </div>`)}return r.length===0?"":`<div class="pw-atmos-detail-grid">${r.join("")}</div>`}function yi(t){let a=Math.max(0,Math.min(100,t)),o=a/100;return{count:a<=10?0:Math.round(2+o*6),minSize:2+Math.round(o),maxSize:3+Math.round(o),minDur:4-o*2.2,maxDur:4-o*1.2}}function ga(t,a,o=Math.random){let e=document.createDocumentFragment(),i=yi(t);if(i.count===0)return e;let r=h(a);for(let n=0;n<i.count;n++){let c=document.createElement("div");c.className="pw-thermal-particle";let d=i.minSize+o()*(i.maxSize-i.minSize),s=10+o()*80,p=o()*30,g=i.minDur+o()*(i.maxDur-i.minDur),m=o()*g,u=.4+o()*.3,w=-(50+o()*60);c.setAttribute("style",[`width:${d.toFixed(1)}px`,`height:${d.toFixed(1)}px`,`left:${s.toFixed(1)}%`,`bottom:${p.toFixed(1)}%`,`background:${r}`,`--rise-dur:${g.toFixed(2)}s`,`--rise-dist:${w.toFixed(0)}px`,`--peak-op:${u.toFixed(2)}`,`animation-delay:${m.toFixed(2)}s`].join(";")),e.appendChild(c)}return e}function ha({hass:t,config:a,discovery:o}){let e=o.atmosCe;if(!e.cape&&!e.lifted_index&&!e.freezing_level_height)return console.debug("Pulse Weather: Atmosphere section requires Atmos CE sensors \u2014 skipping"),null;let i=gi(t,o),{score:r,capeValue:n,liValue:c,hasCape:d,hasLI:s}=i,p=i.label!=="Unknown"?i:null,g=e.freezing_level_height&&t.states[e.freezing_level_height]&&Number(t.states[e.freezing_level_height].state)||0,m=e.lcl_height&&t.states[e.lcl_height]&&Number(t.states[e.lcl_height].state)||0,{scaleMax:u,labels:w}=wi(g,m),f=r!==null?hi(r):0,y=p?.color||"#30d158",b=d||s?`
        <div class="pw-atmos-cape-fill" style="height:${Number(f)}%;background:linear-gradient(to top, ${h(y)}40, ${h(y)}08)">
          <div class="pw-atmos-fx" data-atmos-score="${Number(r)}" data-atmos-color="${h(y)}"></div>
        </div>`:"",_=r!==null?_t(r,0,100):0,A=_>.1?`
        <div class="pw-atmos-column-glow${_>.3?" pulsing":""}" style="--glow-color:${h(y)}40;--pulse-dur:${Bt(_,3,.8).toFixed(2)}s"></div>`:"",M=e.freezing_level_height&&t.states[e.freezing_level_height]?(()=>{let $=Number(t.states[e.freezing_level_height].state)||0,I=t.states[e.freezing_level_height]?.attributes?.unit_of_measurement||"m",P=Qt($,u);return`
        <div class="pw-atmos-freeze-marker" style="bottom:${Number(P)}%">
          <span class="pw-atmos-freeze-label">\u2744 ${l(String(Math.round($)))}${l(I)}</span>
          <div class="pw-atmos-freeze-line"></div>
        </div>`})():"",O=e.lcl_height&&t.states[e.lcl_height]?(()=>{let $=Number(t.states[e.lcl_height].state)||0,I=t.states[e.lcl_height]?.attributes?.unit_of_measurement||"m",P=Qt($,u);return`
        <div class="pw-atmos-lcl-marker" style="bottom:${Number(P)}%">
          <span class="pw-atmos-lcl-label">\u2601 LCL ${l(String(Math.round($)))}${l(I)}</span>
          <div class="pw-atmos-lcl-line"></div>
        </div>`})():"",z=e.wind_shear_0_6_km||"",N=z?t.states[z]:null,x=N&&Number(N.state)||0,k=N?fa(x,i.attrs):null,R=N?(()=>{let I=(.2+Math.min(1,x/80)*.6).toFixed(2),P=k?.color||"#888888",tt=N?.attributes?.unit_of_measurement||"km/h";return`
        <div class="pw-atmos-shear-arrow" style="--shear-color:${h(P)};opacity:${I}" title="Wind shear: ${l(String(Math.round(x)))} ${l(tt)}">
          <svg width="16" height="100%" viewBox="0 0 16 100" preserveAspectRatio="none" style="display:block">
            <line x1="8" y1="5" x2="8" y2="95" stroke="${h(P)}" stroke-width="1.5" stroke-dasharray="4 3"/>
            <polygon points="4,8 8,0 12,8" fill="${h(P)}"/>
            <polygon points="4,92 8,100 12,92" fill="${h(P)}"/>
          </svg>
          <span class="pw-atmos-shear-label" style="color:${h(P)}">${l(String(Math.round(x)))} ${l(tt)}</span>
        </div>`})():"",F=e.lapse_rate_700_500_hpa||"",S=F?t.states[F]:null,D=S&&Number(S.state)||0,B=S?(()=>{let{color:$}=bo(D,i.attrs),I=D<6?.15:D<7.5?.25:.35,P=It($,I),tt=Qt(3e3,u),St=Qt(5500,u),kt=S?.attributes?.unit_of_measurement||"\xB0C/km";return`
        <div class="pw-atmos-lapse-overlay" style="bottom:${Number(tt)}%;top:${Number(100-St)}%;background:linear-gradient(to top, transparent, ${h(P)} 30%, ${h(P)} 70%, transparent)" title="Lapse rate: ${l(D.toFixed(1))} \xB0C/km">
          <span class="pw-atmos-lapse-label" style="color:${h($)}">${l(D.toFixed(1))} ${l(kt)}</span>
        </div>`})():"",Y=e.cloud_cover_low&&t.states[e.cloud_cover_low]&&Number(t.states[e.cloud_cover_low].state)||0,et=e.cloud_cover_mid&&t.states[e.cloud_cover_mid]&&Number(t.states[e.cloud_cover_mid].state)||0,ot=e.cloud_cover_high&&t.states[e.cloud_cover_high]&&Number(t.states[e.cloud_cover_high].state)||0,J="";if(Y>0){let $=Qt(2e3,u),I=xo(Y);J+=`<div class="pw-atmos-cloud-band" style="bottom:0%;top:${Number(100-$)}%;background:rgba(255,255,255,${I.toFixed(3)})"></div>`}if(et>0){let $=Qt(2e3,u),I=Qt(Math.min(6e3,u),u),P=xo(et);J+=`<div class="pw-atmos-cloud-band" style="bottom:${Number($)}%;top:${Number(100-I)}%;background:rgba(255,255,255,${P.toFixed(3)})"></div>`}if(ot>0){let $=xo(ot);J+=`<div class="pw-atmos-cloud-high" style="opacity:${$.toFixed(3)};background:linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)"></div>`}let H=[],v=[];if(d){let $=wo(n);H.push(j(`${l(String(Math.round(n)))} J/kg`,"CAPE",$))}if(s){let $=ma(c);H.push(j(`${l(c>=0?"+":"")}${l(c.toFixed(1))}`,"Lifted Idx",$.color))}if(N){let $=Number(N.state)||0,I=N?.attributes?.unit_of_measurement||"km/h",P=k?.color||"";H.push(j(`${l(String(Math.round($)))} ${l(I)}`,"Shear",P))}if(S){let $=S?.attributes?.unit_of_measurement||"\xB0C/km",I=bo(D,i.attrs);H.push(j(`${l(D.toFixed(1))} ${l($)}`,"Lapse Rate",I.color))}if(e.freezing_level_height&&t.states[e.freezing_level_height]){let $=Number(t.states[e.freezing_level_height].state)||0,I=t.states[e.freezing_level_height]?.attributes?.unit_of_measurement||"m";v.push(j(`${l(String(Math.round($)))}${l(I)}`,"Freeze Lvl","#5ac8fa"))}if(e.lcl_height&&t.states[e.lcl_height]){let $=Number(t.states[e.lcl_height].state)||0,I=t.states[e.lcl_height]?.attributes?.unit_of_measurement||"m";v.push(j(`${l(String(Math.round($)))} ${l(I)}`,"Cloud Base","#d0d0d0"))}if(e.soil_temperature&&t.states[e.soil_temperature]){let $=Number(t.states[e.soil_temperature].state)||0,I=t.states[e.soil_temperature]?.attributes?.unit_of_measurement||"\xB0C";v.push(j(`${l($.toFixed(1))}${l(I)}`,"Soil Temp",""))}if(e.soil_moisture&&t.states[e.soil_moisture]){let $=Number(t.states[e.soil_moisture].state)||0;v.push(j(`${l(String(Math.round($)))}%`,"Soil Moist",""))}let V=[...H,...v],X="";if(H.length>0&&(X+=`<div class="pulse-stats-row" style="margin:0 20px;border-top:none;padding-top:8px" role="img" aria-label="Instability indices">${H.join("")}</div>`),v.length>0&&(X+=`<div class="pulse-stats-row" style="margin:0 20px;border-top:none;padding-top:4px" role="img" aria-label="Vertical profile and surface">${v.join("")}</div>`),!p&&V.length===0)return null;let at=p?.color||"#30d158",Ft=_<.15?ht("#30d158",.08):ht(at,_),$t=_>.3?`<div class="pw-tension-wash breathing" style="background:${h(ht(at,_))};--breathe-dur:${Bt(_).toFixed(2)}s"></div>`:"",Nt=vi(i,t,o,u),lt=Nt.length>0,Ct=w.map($=>`<span class="pw-atmos-scale-label">${$>=1e3?`${$/1e3}km`:String($)}</span>`).join(`
          `);return`
    <div class="pw-section pw-atmos" style="background:${h(Ft)}">
      ${$t}
      <div class="pw-section-header">
        <span class="pw-section-title">Atmosphere</span>
      </div>
      ${p?`<div class="pw-status-label" style="color:${h(p.color)}">${l(p.label)}</div>`:""}
      ${p?`<div class="pw-atmos-tier-desc">${l(p.desc)}</div>`:""}
      <div class="pw-atmos-column-wrap${lt?" pw-atmos-tappable":""}" role="img" aria-label="Atmospheric instability ${r!==null?l(String(r))+"%, "+l(p?.label||""):"unknown"}"${lt?' aria-expanded="false" data-has-detail':""}>
        <div class="pw-atmos-scale">
          ${Ct}
        </div>
        <div class="pw-atmos-column">
          ${b}
          ${J}
          ${A}
          ${B}
          ${M}
          ${O}
          ${R}
          <div class="pw-atmos-ground-label">Surface</div>
        </div>
      </div>
      ${lt?`<div class="pw-atmos-detail" aria-label="Atmospheric detail" role="region" style="max-height:0">${Nt}</div>`:""}
      ${X}
    </div>`}ft();var _i={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},$i="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",wa={dry:"#30d158",comfortable:"#30d158",slightly_humid:"#ffd60a",humid:"#ff9f0a",oppressive:"#ff453a",clear:"#30d158",good:"#30d158",moderate:"#ffd60a",poor:"#ff9f0a",fog:"#ff453a"};function Si(t){return t<=30?"#5ac8fa":t<=60?"#30d158":t<=80?"#ff9f0a":"#ff453a"}function ki(t,a){if(t==null)return"Press";let o=Math.abs(Number(t));if(o<=1)return"Press";let e=a==="rising"?"Rising":a==="falling"?"Falling":"Press";return o>3?`${e} rapidly`:e}function Mi({precipNow:t,precipLabel:a,slots:o,windSpeed:e,uvIndex:i,stabilityState:r}){if(t>0)return{icon:"\u{1F327}",text:a};let n=o.slice(0,2);for(let s of n)if((Number(s.precipitation_probability)||0)>=60)return{icon:"\u{1F327}",text:`${Number(s.snowfall)>0?"Snow":"Rain"} likely within ${n.indexOf(s)+1}h`};for(let s of n)if((Number(s.precipitation_probability)||0)>=40)return{icon:"\u{1F327}",text:`${Number(s.snowfall)>0?"Snow":"Rain"} possible within ${n.indexOf(s)+1}h`};if(r&&["slight","enhanced","moderate","high"].includes(r)){let s=Math.max(...n.map(p=>Number(p.cape)||0));if(s>1e3)return{icon:"\u26A1",text:`Thunderstorms possible \u2014 CAPE ${s}J/kg`}}if(e>=39)return{icon:"\u{1F4A8}",text:`Strong winds ${Math.round(e)} km/h`};if(i>=6)return{icon:"\u2600\uFE0F",text:"High UV \u2014 protection needed"};let d=0;for(let s of o)if((Number(s.precipitation_probability)||0)<20)d++;else break;return d>=2?{icon:"\u2713",text:`Clear for the next ${d}h`}:{icon:"",text:""}}function Ti(t,a,o){let e=t.map(p=>{let g=Number(p.cape);return Number.isFinite(g)?g:0}),i=Math.max(...e,300),r=Math.max(...e),n=e.indexOf(r),d=e.map((p,g)=>({x:g/Math.max(t.length-1,1)*a,y:o-p/i*o})).map((p,g)=>`${g===0?"M":"L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" "),s=`${d} L${a},${o} L0,${o} Z`;return{svgPath:d,areaPath:s,peakValue:r,peakIndex:n,maxCape:i}}function Ci(t,a,o,e,i,r,n,c){let d=[];return n>0&&d.push({name:"Snow",value:n,unit:c}),o>0&&d.push({name:"Rain",value:o,unit:e}),i>0&&d.push({name:"Showers",value:i,unit:r}),d.length>0?`${d.map(p=>`${l(p.name)} ${l(p.value.toFixed(1))} ${l(p.unit)}`).join(" \xB7 ")} now`:t>0?`Precipitation \u2014 next 12h \xB7 ${l(t.toFixed(1))} ${l(a)} now`:"Precipitation \u2014 next 12h"}function At(t){return!t||isNaN(t.getTime())?"":`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function xa({hass:t,config:a,discovery:o,weatherEntity:e,forecastData:i}){let r=e.attributes,n=o.atmosCe,c=e.state||"sunny",d=c==="clear-night"||t.states["sun.sun"]?.state==="below_horizon";function s(L,W){if(n[L]){let C=Number(t.states[n[L]]?.state);if(!isNaN(C))return C}return Number(r[W]??0)||0}let p=s("temperature","temperature"),g=s("apparent_temperature","apparent_temperature")||p,m=s("humidity","humidity"),u=s("wind_speed","wind_speed"),w=s("wind_direction","wind_bearing"),f=s("wind_gusts","wind_gusts"),y=s("dew_point","dew_point"),b=s("visibility","visibility"),_=s("pressure","pressure");function A(L,W){return n[L]&&t.states[n[L]]?.attributes?.unit_of_measurement||W}let M=A("temperature","\xB0C"),O=A("visibility","km"),z=A("pressure","hPa"),N=A("dew_point","\xB0C"),x=i?.daily,k=i?.hourly,R=r.forecast,F=p,S=p;if(x&&x.length>0){let L=x[0],W=Number(L.templow),C=Number(L.temperature);Number.isFinite(W)&&Number.isFinite(C)&&(F=Math.min(W,C),S=Math.max(W,C))}else if(k&&k.length>0){let L=Date.now(),W=new Date;W.setHours(23,59,59,999);let C=W.getTime(),ct=1/0,rt=-1/0;for(let nt of k.slice(0,24)){let pt=Date.parse(String(nt.datetime??""));if(Number.isFinite(pt)&&(pt<L||pt>C))continue;let Z=Number(nt.temperature);Number.isFinite(Z)&&(Z<ct&&(ct=Z),Z>rt&&(rt=Z))}Number.isFinite(ct)&&Number.isFinite(rt)&&ct!==rt&&(F=Math.min(ct,p),S=Math.max(rt,p))}else if(R&&R.length>0){let L=R[0],W=Number(L.templow),C=Number(L.temperature);Number.isFinite(W)&&Number.isFinite(C)&&(F=Math.min(W,C),S=Math.max(W,C))}let D=o.atmosCe.uv_index,B=D?Number(t.states[D]?.state)||0:Number(r.uv_index??0),Y=n.precipitation?t.states[n.precipitation]:null,et=Y&&Number(Y.state)||0,ot=Y?.attributes?.unit_of_measurement||"mm",J=n.rain?t.states[n.rain]:null,H=n.showers?t.states[n.showers]:null,v=n.snowfall?t.states[n.snowfall]:null,V=J&&Number(J.state)||0,X=H&&Number(H.state)||0,at=v&&Number(v.state)||0,Ft=J?.attributes?.unit_of_measurement||"mm",$t=H?.attributes?.unit_of_measurement||"mm",Nt=v?.attributes?.unit_of_measurement||"cm",lt=n.uv_index_clear_sky?t.states[n.uv_index_clear_sky]:null,Ct=lt&&Number(lt.state)||0,$=n.dew_point_comfort?t.states[n.dew_point_comfort]:null,I=n.visibility_category?t.states[n.visibility_category]:null,P=n.feels_like_context?t.states[n.feels_like_context]:null,tt=n.pressure_trend?t.states[n.pressure_trend]:null,St=n.golden_hour_morning_start?new Date(String(t.states[n.golden_hour_morning_start]?.state)):null,kt=n.golden_hour_evening_start?new Date(String(t.states[n.golden_hour_evening_start]?.state)):null,it=n.golden_hour_evening_end?new Date(String(t.states[n.golden_hour_evening_end]?.state)):null,te=n.blue_hour_morning_start?new Date(String(t.states[n.blue_hour_morning_start]?.state)):null,ee=n.blue_hour_evening_start?new Date(String(t.states[n.blue_hour_evening_start]?.state)):null,Ut=null;o.atmosCe.cloud_cover&&(Ut={total:Number(t.states[o.atmosCe.cloud_cover]?.state)||0,low:Number(t.states[o.atmosCe.cloud_cover_low]?.state)||0,mid:Number(t.states[o.atmosCe.cloud_cover_mid]?.state)||0,high:Number(t.states[o.atmosCe.cloud_cover_high]?.state)||0});let oe=n.freezing_level_height?t.states[n.freezing_level_height]:null,ke=oe&&Number(oe.state)||0,ae=(n.stability_assessment?t.states[n.stability_assessment]:null)?.state||"",Vt=n.lifted_index?t.states[n.lifted_index]:null,de=Vt&&Number(Vt.state)||0,T=h(_i[c]||$i),Q=Math.max(S-F,1),U=Math.max(0,Math.min(100,(p-F)/Q*100)),zt=Ue(w),Rt=`data-condition="${l(c)}" data-night="${d}" data-cloud='${l(JSON.stringify(Ut||""))}'`,ie=_t(p,20,42),Ze=_t(p,15,-10),qt=Math.max(ie,Ze),re=q(p),Me=qt>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${ye(re,qt)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",ue=Ge(qt),Te=ue?`<div class="pw-tension-vignette" style="background: ${h(ue)}"></div>`:"",me=at>0?`<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${l(at.toFixed(1))} ${l(Nt)}</div>`:"",So=P?.state||"",ne=P?.attributes?.difference,Je="";So==="wind_chill"&&ne!==null&&ne!==void 0?Je=`<div class="pw-feels-context">Wind chill ${l(String(Math.round(Number(ne))))}\xB0</div>`:So==="heat_index"&&ne!==null&&ne!==void 0&&(Je=`<div class="pw-feels-context">Heat index +${l(String(Math.round(Number(ne))))}\xB0</div>`);let Wa=["marginal","slight","enhanced","moderate","high"],ko="";if(ae&&Wa.includes(ae)){let L=Tt[ae];if(L){let W=h(L.color),C=`\u26A1 ${l(L.label)}`;if(Vt&&de<0){let ct=jt.find(rt=>de>=rt.min)||jt[jt.length-1];C+=` \xB7 <span style="color:${h(ct.color)}">LI ${l(String(de))}</span>`}ko=` <span class="pw-stability-badge" style="background:${W}33; color:${W}">${C}</span>`}}let to=I?.state||"",Ua=to&&!["unavailable","unknown"].includes(to)&&wa[to]||"",eo=$?.state||"",ja=eo&&!["unavailable","unknown"].includes(eo)&&wa[eo]||"",Mo=tt?.attributes?.trend_symbol||"",To=tt?.state==="rising"?"#30d158":tt?.state==="falling"?"#ff9f0a":tt?.state==="steady"?"#5ac8fa":"",Ba=lt&&Math.abs(Ct-B)>=.5,oo=tt?.attributes?.change_3h,Ce=ki(oo!=null?Number(oo):null,tt?.state||"");if(Ce==="Press"&&tt?.state){let L=tt.state;L==="rising"?Ce="Rising":L==="falling"&&(Ce="Falling")}let Ga=To||(tt?"#5ac8fa":""),Co=na(u),Va=We(u),qa=f>u+5,Ya=u>0&&f/u>1.5,Xa=qa?Ya?` / <b>${l(Math.round(f))}</b>`:` / ${l(Math.round(f))}`:"",Ka=`<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(w)||0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${h(Co)}" opacity="0.8"/></svg>`,Qa=`${l(Math.round(u))}${Xa} ${Ka}${l(zt)}`,Za=`linear-gradient(to right, ${h(q(F))}, ${h(q(S))})`,Eo="";if(oe&&ke<5e3&&F<=0){let L=Math.max(0,Math.min(100,(0-F)/Q*100)),W=oe?.attributes?.unit_of_measurement||"m";Eo=`<div class="pw-arc-freeze" style="left:${Number(L)}%">
            <div class="pw-arc-freeze-label">\u2744 ${l(String(Math.round(ke)))}${l(W)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`}let Ao="",Ee=t.states["sun.sun"];if(Ee){let L=Ee.attributes?.next_rising,W=Ee.attributes?.next_setting;if(L&&W){let C=new Date(L),ct=new Date(W),rt=new Date,nt=C.getTime()>rt.getTime()?new Date(C.getTime()-864e5):C,pt=ct.getTime()>rt.getTime()?ct:new Date(ct.getTime()-864e5);pt.getTime()>nt.getTime()+864e5&&(pt=new Date(pt.getTime()-864e5)),nt.getTime()>pt.getTime()&&(nt=new Date(nt.getTime()-864e5));let Z=Be(rt,nt,pt,St,it,te,ee,kt),dt=je[Z],fe=Ee.state==="above_horizon",G=0,ut=nt.getTime(),xt=pt.getTime(),mt=rt.getTime();if(Z===3){let yt=xt-ut;yt>0&&(G=Math.max(0,Math.min(100,(mt-ut)/yt*100)))}else if(Z===1){let yt=te?te.getTime():ut-36e5,ge=(St?St.getTime():ut-18e5)-yt;ge>0&&(G=Math.max(0,Math.min(100,(mt-yt)/ge*100)))}else if(Z===2){let yt=St?St.getTime():ut-18e5,Kt=ut-yt;Kt>0&&(G=Math.max(0,Math.min(100,(mt-yt)/Kt*100)))}else if(Z===4){let Kt=(it?it.getTime():xt+18e5)-xt;Kt>0&&(G=Math.max(0,Math.min(100,(mt-xt)/Kt*100)))}else if(Z===5){let yt=it?it.getTime():xt+18e5,ge=(it?it.getTime()+36e5:ee?ee.getTime()+18e5:xt+36e5)-yt;ge>0&&(G=Math.max(0,Math.min(100,(mt-yt)/ge*100)))}let bt="";switch(Z){case 1:bt="background: #5ac8fa";break;case 2:bt="background: #ff9f0a";break;case 3:bt="background: linear-gradient(to right, #ff9f0a, #ffd60a)";break;case 4:bt="background: #ff6b35";break;case 5:bt="background: #5ac8fa";break}let vt="",Yt="",Xt="";switch(Z){case 0:break;case 1:vt=At(te),Yt=At(St),Xt="#5ac8fa";break;case 2:vt=At(St),Yt=At(nt),Xt="#ff9f0a";break;case 3:vt=At(nt),Yt=At(pt);break;case 4:vt=At(kt||pt),Yt=At(it),Xt="#ff6b35";break;case 5:vt=At(ee),Yt=At(it?new Date(it.getTime()+36e5):null),Xt="#5ac8fa";break}let ao=G,Ae=fe?"":Z===0?"\u{1F319}":"",io=Z===0?"0.7":"1",ii=`left:${Number(ao)}%; background:${h(dt.labelColor)}; box-shadow: 0 0 6px ${h(dt.labelColor)}66`,Io=Xt?` style="color:${h(Xt)}"`:"";Ao=`
      <div class="pw-day-arc" style="opacity:${io}">
        <span class="pw-day-arc-label"${Io}>${l(vt)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(G)}%${bt?"; "+bt:""}"></div>
          <div class="pw-day-arc-marker" style="${ii}">${Ae}</div>
        </div>
        <span class="pw-day-arc-label"${Io}>${l(Yt)}</span>
      </div>`}}let Fo="",No="",zo="",Ro="",Do=i?.hourly||[];if(Do.length>0){let C=ce(Do,new Date).slice(0,12),ct=C.some(dt=>Number(dt.precipitation_probability)>0),rt=Ci(et,ot,V,Ft,X,$t,at,Nt),nt=Mi({precipNow:et,precipLabel:rt,slots:C,windSpeed:u,uvIndex:B,stabilityState:ae});if(nt.text&&(Ro=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">${l(nt.icon)}</span> ${l(nt.text)}
      </div>`),ct){let dt=C.map(ut=>{let xt=Math.min(100,Math.max(0,Number(ut.precipitation_probability)||0)),mt=Number(ut.snowfall)||0,bt=(Number(ut.rain)||0)+(Number(ut.showers)||0),vt=mt>0;if(vt&&bt>0){let ao=mt+bt,Ae=Math.round(xt*mt/ao),io=xt-Ae;return`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number(io)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number(Ae)}%"></div></div>`}return`<div class="pulse-precip-slot"><div class="${vt?"pulse-precip-fill pw-precip-snow":"pulse-precip-fill"}" style="height: ${xt}%"></div></div>`}).join(""),G=C[Math.floor(C.length/2)]?`+${Math.floor(C.length/2)}h`:"";Fo=`
      <div style="position: relative; z-index: 2; margin: 16px 20px 0;">
        <div class="pw-precip-label">${rt}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${dt}</div>
        <div class="pw-precip-times"><span>Now</span><span>${l(G)}</span><span>+${l(String(C.length))}h</span></div>
      </div>`}if(C.some(dt=>Number(dt.cape)>300)){let G=Ti(C,200,24),ut=G.peakIndex/Math.max(C.length-1,1)*200,xt=G.peakValue>=1e3?`${(G.peakValue/1e3).toFixed(1)}k`:String(Math.round(G.peakValue)),mt=C[G.peakIndex]?.datetime?new Date(C[G.peakIndex].datetime):null,bt=mt?`${String(mt.getHours()).padStart(2,"0")}:${String(mt.getMinutes()).padStart(2,"0")}`:"",vt=Et("pw-cape-grad");No=`
      <div style="position: relative; z-index: 2; margin: 4px 20px 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="${vt}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${G.areaPath}" fill="url(#${vt})"/>
            <path d="${G.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${G.peakValue>0?`<div class="pw-cape-peak" style="left:${Number(ut)}px">${l(xt)} ${l(bt)}</div>`:""}
        </div>
      </div>`}C.some(dt=>dt.dew_point!==void 0&&dt.dew_point!==null)&&(zo=`
      <div style="position: relative; z-index: 2; margin: 2px 20px 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${C.map(fe=>{let G=Number(fe.dew_point)||0;return`<div class="pw-comfort-slot" style="background:${h(pa(G))}"></div>`}).join("")}</div>
      </div>`)}let Ja=q(g),ti=Ut!==null?ca(Ut.total):"",ei=Si(m),oi=`${l(Math.round(_))} ${l(z)}${Mo?` <span style="color:${h(To)}">${l(Mo)}</span>`:""}`,ai=`${l(Math.round(B))}${Ba?` <span style="opacity:0.5">/ ${l(String(Math.round(Ct)))}</span>`:""}`;return`
    <div class="pw-section pw-atmosphere" style="background: ${T}; min-height: 280px;">
      ${Te}
      <div class="pw-fx" ${Rt} role="img" aria-label="${l(c)} weather effects"></div>
      <div class="pw-section-header">
        <span class="pw-section-title">Weather</span>
      </div>
      <div class="pw-hero">
        <div class="pw-hero-temp" style="color: ${h(q(p))}; ${Me}">${l(p.toFixed(1))}${l(M)}</div>
        <div class="pw-hero-condition">${l(da(c))}${ko}</div>
        ${me}
        ${Je}
      </div>
      <div class="pw-temp-arc">
        <span class="pw-arc-label" style="color:${h(q(F))}">L:${l(Math.round(F))}\xB0</span>
        <div class="pw-arc-bar" style="background:${Za}" role="img" aria-label="Temperature range ${Math.round(F)}${l(M)} to ${Math.round(S)}${l(M)}">
          <div class="pw-arc-marker" style="left: ${Number(U)}%"></div>
          ${Eo}
        </div>
        <span class="pw-arc-label" style="color:${h(q(S))}">H:${l(Math.round(S))}\xB0</span>
      </div>
      ${Ao}
      ${Ro}
      ${Fo}
      ${zo}
      ${No}
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2; border-top: none; padding-top: 8px;" role="img" aria-label="Wind and surface observations">
        ${j(Qa,Va.name,Co)}
        ${j(`${l(g.toFixed(1))}${l(M)}`,"Feels",Ja)}
        ${j(`${l(Math.round(b))} ${l(O)}`,"Vis",Ua)}
        ${j(`${l(y.toFixed(1))}${l(N)}`,"Dew",ja)}
      </div>
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2; padding-bottom: 16px; border-top: none; padding-top: 4px;" role="img" aria-label="Atmospheric conditions">
        ${j(Ut!==null?l(Math.round(Ut.total)+"%"):"--","Cloud",ti)}
        ${j(`${l(Math.round(m))}%`,"Humid",ei)}
        ${j(oi,Ce,Ga)}
        ${j(ai,"UV",la(B))}
      </div>
    </div>`}function Ei(t,a){if(a)return"Now";try{return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}catch(o){return console.debug("Pulse Weather: formatHour fallback for",t,o),""}}function Ai(t,a){if(a===0)return"Today";try{return new Date(t).toLocaleDateString([],{weekday:"short"})}catch(o){return console.debug("Pulse Weather: formatDay fallback for",t,o),""}}function Fi(t,a,o){if(!t)return{linePath:"",areaPath:"",min:0,max:0};let e=Pe(t,m=>Number(m.temperature));if(e.length<2)return{linePath:"",areaPath:"",min:0,max:0};let i=e.map(m=>Number(m.temperature)),r=Math.min(...i),n=Math.max(...i),c=n-r||1,d=4,p=i.map((m,u)=>{let w=u/(i.length-1)*a,f=d+(n-m)/c*(o-d*2);return{x:w,y:f}}).map((m,u)=>`${u===0?"M":"L"}${m.x.toFixed(1)},${m.y.toFixed(1)}`).join(" "),g=`${p} L${a},${o} L0,${o} Z`;return{linePath:p,areaPath:g,min:r,max:n}}function ba({hass:t,config:a,discovery:o,forecastData:e}){let i=a.mode||"both",r=e?.hourly||[],n=e?.daily||[];if(r.length===0&&n.length===0)return null;let c=o.atmosCe,s=(c.temperature?t.states[c.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",p=i==="both"||i==="hourly",g=i==="both"||i==="daily",m=["both","hourly","daily"].map(f=>`<button class="pw-tab" role="tab" aria-selected="${f===i}" tabindex="${f===i?"0":"-1"}" data-mode="${l(f)}">${l(f.charAt(0).toUpperCase()+f.slice(1))}</button>`).join(""),u="";if(p&&r.length>0){let f=ce(r),y=f.slice(0,24).map((z,N)=>{let x=K(z.temperature,0),k=K(z.precipitation_probability,0),R=_t(k,0,100),F=R>.1?` style="background: rgba(90,200,250,${(R*.12).toFixed(3)})"`:"";return`
        <div class="pw-hour-col ${N===0?"pw-current":""}"${F}>
          <div class="pw-hour-time">${l(Ei(String(z.datetime||""),N===0))}</div>
          <div class="pw-hour-icon">${ve(String(z.condition||""))}</div>
          <div class="pw-hour-temp" style="color: ${h(q(x))}">${l(Math.round(x))}${l(s)}</div>
          ${k>0?`<div class="pw-hour-precip">${l(Math.round(k))}%</div>`:""}
        </div>`}).join(""),b=300,_=40,A=Fi(f.slice(0,24),b,_),M=Et("pw-spark-grad"),O=A.linePath?`
      <div class="pw-sparkline-wrap">
        <svg width="100%" height="${_}" viewBox="0 0 ${b} ${_}" preserveAspectRatio="none" role="img" aria-label="Temperature trend">
          <title>Temperature sparkline</title>
          <defs>
            <linearGradient id="${M}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${h(q(A.max))}" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="${h(q(A.min))}" stop-opacity="0.05"/>
            </linearGradient>
          </defs>
          <path d="${l(A.areaPath)}" fill="url(#${M})"/>
          <path d="${l(A.linePath)}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        </svg>
      </div>`:"";u=`
      <div class="pw-hourly-strip">${y}</div>
      ${O}`}let w="";if(g&&n.length>0){let f=n.flatMap(M=>[K(M.temperature,0),K(M.templow,0)]),y=Math.min(...f),b=Math.max(...f),_=b-y||1;w=`<div class="pw-daily-rows">${n.slice(0,7).map((M,O)=>{let z=K(M.temperature,0),N=K(M.templow,0),x=K(M.precipitation_probability,0),k=(N-y)/_*100,R=(z-N)/_*100,F=_t(x,0,100),S=F>.1?` style="background: rgba(90,200,250,${(F*.08).toFixed(3)}); border-radius: 4px"`:"",D=z===b,B=N===y,Y=D?`; text-shadow: ${ye(h(q(z)),.6)}`:"",et=B?`; text-shadow: ${ye(h(q(N)),.6)}`:"";return`
        <div class="pw-daily-row"${S}>
          <span class="pw-daily-day">${l(Ai(String(M.datetime||""),O))}</span>
          <span class="pw-daily-icon">${ve(String(M.condition||""))}</span>
          <span class="pw-daily-precip">${x>0?`${l(Math.round(x))}%`:""}</span>
          <div class="pw-daily-bar-wrap" role="img" aria-label="Temperature range ${Math.round(N)}${l(s)} to ${Math.round(z)}${l(s)}">
            <div class="pw-daily-bar" style="left: ${Number(k)}%; width: ${Number(R)}%; background: linear-gradient(to right, ${h(q(N))}, ${h(q(z))})"></div>
          </div>
          <span class="pw-daily-low" style="color: var(--pulse-text-secondary)${et}">${l(Math.round(N))}${l(s)}</span>
          <span class="pw-daily-high" style="${Y?Y.slice(2):""}">${l(Math.round(z))}${l(s)}</span>
        </div>`}).join("")}</div>`}return`
    <div class="pw-section pw-forecast" style="background: radial-gradient(ellipse at 50% 20%, rgba(90,200,250,0.06) 0%, transparent 70%)">
      <div class="pw-section-header">
        <span class="pw-section-title">Forecast</span>
        <div class="pw-tabs" role="tablist">${m}</div>
      </div>
      ${u}
      ${w}
    </div>`}ft();var pe=240,Lt=pe/2,Ot=pe/2,Ye=90,va=.12,Ve=6,qe=.5,ya=.25,Ni=.3,zi=6,_a=.7,Ri=.2,Di=4,Ii=3.3,Li=15,Oi=35,Hi=.08,Pi=.2,Wi=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function $a(t){return(t-90)*Math.PI/180}function Ui(t){let a=t*Math.PI/180;return{x:Math.sin(a),y:-Math.cos(a)}}function Gt(t,a){return{x:Lt+a*Math.cos(t),y:Ot+a*Math.sin(t)}}function ji(t,a,o,e){let i=Math.min(t/Le,1)*Ye,r=Gt(a-ya,i),n=Gt(a+ya,i),c=o>Ni?"pw-gust-sweep":"",d=Math.max(.6,2.5-o*2).toFixed(2),s=(.15+o*.3).toFixed(2),p=`transform-origin:${Lt}px ${Ot}px;--gust-dur:${d}s;--gust-peak:${s}`;return Mt("path",{class:c,d:`M${Lt},${Ot} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${n.x.toFixed(1)},${n.y.toFixed(1)} Z`,fill:e,opacity:.15,style:p})}function Bi(t,a,o,e){let i=Math.min(t/Le,1)*Ye,r=Gt(a,i),n=Gt(a-va,i*.7),c=Gt(a+va,i*.7),d={x:r.x-Ve*Math.cos(a-qe),y:r.y-Ve*Math.sin(a-qe)},s={x:r.x-Ve*Math.cos(a+qe),y:r.y-Ve*Math.sin(a+qe)},p=o*zi,g=Math.max(.4,4-o*3.6),m=p>Ri?`animation:pw-arrowSway ${g.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(p*_a).toFixed(2)}deg;--sway-back:${(-p*(1-_a)).toFixed(2)}deg`:"",u=`transform-origin:${Lt}px ${Ot}px;filter:drop-shadow(0 0 6px ${It(e,.38)});${m}`,w=Mt("path",{d:`M${Lt},${Ot} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} Z`,fill:e,opacity:.5}),f=Mt("line",{x1:Lt,y1:Ot,x2:r.x.toFixed(1),y2:r.y.toFixed(1),stroke:e,"stroke-width":2.5,"stroke-linecap":"round"}),y=Mt("path",{d:`M${r.x.toFixed(1)},${r.y.toFixed(1)} L${d.x.toFixed(1)},${d.y.toFixed(1)} L${s.x.toFixed(1)},${s.y.toFixed(1)} Z`,fill:e});return Mt("g",{style:u},w+f+y)}function Sa({hass:t,config:a,discovery:o,weatherEntity:e}){let i=e.attributes,r=o.atmosCe,n=a.speed_mode||"speed";function c(v,V){if(r[v]){let X=Number(t.states[r[v]]?.state);if(!isNaN(X))return X}return Number(i[V]??0)||0}let d=c("wind_speed","wind_speed"),s=c("wind_gusts","wind_gust_speed")||c("wind_gusts","wind_gusts")||d,p=c("wind_direction","wind_bearing"),m=(r.wind_speed?t.states[r.wind_speed]:null)?.attributes?.unit_of_measurement||i.wind_speed_unit||"km/h",u=n==="gust"?s:d,w=Math.min(d/Le,1),f=We(u),y=ho(u),b=le[y]||le.calm,_=Ue(p),A=$a(p),M=Ui(p),O=Math.round(w*Oo),z=Di-w*Ii,N=Hi+w*Pi,x=Li+w*Oi,k=-M.y,R=M.x,F=[];for(let v=0;v<O;v++){let V=(Math.random()-.5)*400,X=-120-Math.random()*60,at=420+Math.random()*60,Ft=(x*(.6+Math.random()*.8)).toFixed(1),$t=(z+Math.random()*z*.5).toFixed(2),Nt=(Math.random()*3).toFixed(2),lt=(N*(.5+Math.random()*.5)).toFixed(3),Ct=(X*M.x+V*k).toFixed(1),$=(X*M.y+V*R).toFixed(1),I=(at*M.x+V*k).toFixed(1),P=(at*M.y+V*R).toFixed(1);F.push(`<div class="pw-streak" style="left:50%;top:50%;width:${Ft}px;height:1px;transform:rotate(${p-90}deg);animation-duration:${$t}s;animation-delay:${Nt}s;opacity:${lt};background:linear-gradient(to right, transparent, ${It(b,.27)}, transparent);--sx:${Ct}px;--sy:${$}px;--ex:${I}px;--ey:${P}px"></div>`)}let S=[];for(let v=1;v<=3;v++)S.push(Mt("circle",{cx:Lt,cy:Ot,r:v*30,fill:"none",stroke:b,"stroke-width":.5,opacity:.08+v*.02}));for(let v of Wi){let V=$a(v.a),X=Gt(V,20),at=Gt(V,Ye+4),Ft=Gt(V,Ye+16),$t=v.l.length===1;S.push(Mt("line",{x1:X.x.toFixed(1),y1:X.y.toFixed(1),x2:at.x.toFixed(1),y2:at.y.toFixed(1),stroke:b,"stroke-width":.5,opacity:.12})),S.push(Mt("text",{x:Ft.x.toFixed(1),y:Ft.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:$t?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":$t?11:9,"font-weight":$t?600:400},l(v.l)))}S.push(ji(s,A,w,b)),S.push(Bi(u,A,w,b)),S.push(Mt("circle",{cx:Lt,cy:Ot,r:18,fill:b,opacity:.06})),S.push(Mt("circle",{cx:Lt,cy:Ot,r:3,fill:b}));let D=w>no?(w-no)*5:0,B=Math.max(.15,.4-w*.25),Y="";D>.1&&(Y=`--dx:${(D*M.x).toFixed(2)}px;--dy:${(D*M.y).toFixed(2)}px;animation:pw-roseShake ${B.toFixed(2)}s ease-in-out infinite`);let et=Math.round(12+w*50).toString(16).padStart(2,"0"),ot=Math.round(6+w*25).toString(16).padStart(2,"0"),J=`radial-gradient(ellipse at 50% 50%, ${b}${et} 0%, ${b}${ot} 40%, transparent 85%)`,H=["speed","gust"].map(v=>`<button class="pw-tab" role="tab" aria-selected="${v===n}" tabindex="${v===n?"0":"-1"}" data-mode="${l(v)}">${l(v.charAt(0).toUpperCase()+v.slice(1))}</button>`).join("");return`
    <div class="pw-section pw-wind" style="background: ${h(J)}">
      <div class="pw-section-header">
        <span class="pw-section-title">Wind</span>
        <div class="pw-tabs" role="tablist">${H}</div>
      </div>
      <div class="pw-wind-streaks">${F.join("")}</div>
      <div class="pw-rose-wrap" style="${Y}">
        <svg class="pw-rose-svg" width="${pe}" height="${pe}" viewBox="0 0 ${pe} ${pe}" style="display:block" role="img" aria-label="Wind compass rose showing ${l(Math.round(u))} ${l(m)} from ${l(_)}">
          <title>Wind direction compass</title>
          ${S.join("")}
        </svg>
        <div class="pw-wind-center">
          <div class="pw-wind-speed" style="color: ${h(b)}">${l(Math.round(u))}</div>
          <div class="pw-wind-unit">${l(m)} \xB7 ${l(Math.round(p))}\xB0 ${l(_)}</div>
          <div class="pw-wind-beaufort" style="color: ${h(b)}">${l(f.name)}</div>
          <div class="pw-wind-beaufort-desc">${l(f.desc)}</div>
        </div>
      </div>
    </div>`}ft();function Gi(t,a,o,e){if(o&&e){let n=(a==="us"?xe:we).find(c=>c.label.toLowerCase()===o.toLowerCase());return{label:o,color:e,desc:n?.desc||""}}let i=a==="us"?xe:we;for(let r of i)if(t<=r.max)return r;return i[i.length-1]}function Vi(t,a){let o=t/a;return o<.3?"#30d158":o<.6?"#ff9f0a":"#ff453a"}function ka({hass:t,config:a,discovery:o,weatherEntity:e}){let i=a.scale||"eu",r=i==="us"?"us_aqi":"european_aqi",n=a.aqi_entity||o.atmosCe[r];if(!n||!t.states[n])return null;let c=t.states[n],d=Number(c.state)||0,s=c.attributes?.category||null,p=c.attributes?.color||null,g=Gi(d,i,s,p),m=sa(d,s,p),u=i==="us"?300:100,w=Math.min(100,d/u*100),f=_t(d,0,u),y=Bt(f,3,.8).toFixed(2),b=88,_=110,A=110,M=12,O=Math.PI*b,z=w/100*O,N=`M${_-b},${A} A${b},${b} 0 0 1 ${_+b},${A}`,x=`
    <div class="pw-aqi-gauge-unit" role="img" aria-label="Air quality index ${d}, ${l(g.label)}">
      <svg width="220" height="120" viewBox="0 0 220 120" style="display:block;--gc:${h(m)};--glow-color:${h(m)};animation:pw-gaugeGlow ${y}s ease-in-out infinite">
        <title>AQI gauge: ${l(String(d))} - ${l(g.label)}</title>
        <path d="${N}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="${M}" stroke-linecap="round"/>
        <path d="${N}" fill="none" stroke="${h(m)}" stroke-width="${M}" stroke-linecap="round"
          stroke-dasharray="${z.toFixed(1)} ${O.toFixed(1)}"/>
      </svg>
      <div class="pw-aqi-gauge-center">
        <div class="pw-aqi-value" style="color: ${h(m)}">${l(String(d))}</div>
        <div class="pw-aqi-scale-label">${l(i==="us"?"US AQI":"European AQI")}</div>
      </div>
    </div>`,k=["eu","us"].map(H=>`<button class="pw-tab" role="tab" aria-selected="${H===i}" tabindex="${H===i?"0":"-1"}" data-scale="${l(H)}">${l(H.toUpperCase())}</button>`).join(""),R=[];for(let H of Vo){let v=o.atmosCe[H.key];if(!v||!t.states[v])continue;let V=Number(t.states[v].state)||0,X=Vi(V,H.maxEu);R.push(`
      <div class="stat">
        <div class="pw-stat-value">${l(V.toFixed(1))}</div>
        <div class="pw-stat-label"><span style="background: ${h(X)}; display:inline-block; width:5px; height:5px; border-radius:50%; margin-right:3px; vertical-align:middle"></span>${l(H.label)}</div>
      </div>`)}let F=R.length>0?R.join(""):"",S=o.atmosCe.pm2_5,D=o.atmosCe.pm10,B=S&&Number(t.states[S]?.state)||0,Y=D&&Number(t.states[D]?.state)||0,et=f<.15?ht("#30d158",.12):ht(m,f),ot=Ge(f,"80,70,50"),J=ot?`<div class="pw-tension-vignette" style="background: ${h(ot)}"></div>`:"";return`
    <div class="pw-section pw-aqi" data-pm25="${Number(B)}" data-pm10="${Number(Y)}" style="background: ${h(et)}">
      ${J}
      <div class="pw-section-header">
        <span class="pw-section-title">Air Quality</span>
        <div class="pw-tabs" role="tablist">${k}</div>
      </div>
      <div class="pw-fx" role="img" aria-label="Air quality atmospheric effects"></div>
      ${x}
      <div class="pw-aqi-category" style="color: ${h(m)}">${l(g.label)}</div>
      <div class="pw-aqi-desc">${l(g.desc)}</div>
      ${F?`<div class="pulse-stats-row" style="margin: 16px 20px 0; padding-top: 12px">${F}</div>`:""}
    </div>`}ft();var Na=360,za=190,Ht=130,$e=Na/2,Zt=za-24,Ma=$e-Ht,Ta=$e+Ht,Xe=Math.PI*Ht,qi=8,Ca=12,Ea=16,Yi=[{top:"#0a0a2a",bottom:"#1a1a3a"},{top:"#1a2a5a",bottom:"#3a5a8a"},{top:"#8a4a1a",bottom:"#cc7a2a"},{top:"#2a5a9a",bottom:"#6aacdc"},{top:"#8a3a1a",bottom:"#cc5a2a"},{top:"#1a2050",bottom:"#3a4a7a"}];function vo(t){let a=Math.PI*(1-t);return{x:$e+Ht*Math.cos(a),y:Zt-Ht*Math.sin(a)}}function Xi(t){let a=(t%Dt+Dt)%Dt;return Qo[Math.floor(a/Dt*8)%8]}function Ki(t){return(t%Dt+Dt)%Dt<Dt/2}var Aa=864e5;function Qi(t,a,o){let e=t.getTime(),i=a.getTime(),r=o.getTime();if(i<=e){if(r>i&&r>=e){let n=r-i;return{visible:!0,progress:Math.max(0,Math.min(1,(e-i)/n))}}if(r<i){let n=r+Aa;if(e<=n){let c=n-i;return{visible:!0,progress:Math.max(0,Math.min(1,(e-i)/c))}}}return{visible:!1,progress:0}}if(r<i&&e<r){let n=i-Aa,c=r-n;return{visible:!0,progress:Math.max(0,Math.min(1,(e-n)/c))}}return{visible:!1,progress:0}}function Zi(t){if(!t||isNaN(t)||t<=0)return"--";let a=Math.floor(t),o=Math.round((t-a)*60);return a+" hr "+String(o).padStart(2,"0")+" min"}function _e(t){return!t||isNaN(t.getTime())?"--:--":t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}function wt(t,a,o){let e=Object.entries(a).map(([i,r])=>" "+i+'="'+l(String(r))+'"').join("");return o!==void 0?"<"+t+e+">"+o+"</"+t+">":"<"+t+e+"/>"}var Ji=[{offset:"0%",color:"#fe9d36",opacity:.05},{offset:"8%",color:"#fe9d36",opacity:.3},{offset:"15%",color:"#fe9d36",opacity:.6},{offset:"25%",color:"#fe9d36",opacity:.8},{offset:"35%",color:"#fe8d36",opacity:.8},{offset:"45%",color:"#fc6540",opacity:.8},{offset:"55%",color:"#df3de7",opacity:.8},{offset:"65%",color:"#613be8",opacity:.8},{offset:"75%",color:"#223fd3",opacity:.8},{offset:"85%",color:"#183fd0",opacity:.7},{offset:"95%",color:"#183fd0",opacity:.3},{offset:"100%",color:"#183fd0",opacity:.05}];function tr(t){switch(t){case 2:case 4:return 1;case 1:case 5:return 1;case 0:return 1;default:return 1}}function Fa(t,a){let o=Et("pw-twi-grad-"+t),e=t==="am"?"M12,4 Q8,60 8,116 Q9,170 34,227":"M34,4 Q38,60 38,116 Q37,170 12,227",i=Ji.map(function(r){return'<stop offset="'+r.offset+'" stop-color="'+r.color+'" stop-opacity="'+r.opacity+'"/>'}).join("");return'<svg class="pw-twilight-arc pw-twilight-arc-'+t+'" viewBox="0 0 46 233" preserveAspectRatio="none" style="opacity:'+a+'"><defs><linearGradient id="'+o+'" x1="0" y1="0" x2="0" y2="1">'+i+'</linearGradient></defs><path d="'+e+'" fill="none" stroke="url(#'+o+')" stroke-width="17" stroke-linecap="round"/></svg>'}function Ra({hass:t,config:a,discovery:o}){let e=new Date,i=o.sunEntityId?t.states[o.sunEntityId]:null;if(!i)return null;let r=i.attributes||{},n=new Date(r.next_rising||r.sunrise||e.toISOString()),c=new Date(r.next_setting||r.sunset||e.toISOString()),d=n.getTime()>e.getTime()?new Date(n.getTime()-864e5):n,s=c.getTime()>e.getTime()?c:new Date(c.getTime()-864e5);s.getTime()>d.getTime()+864e5&&(s=new Date(s.getTime()-864e5)),d.getTime()>s.getTime()&&(d=new Date(d.getTime()-864e5));let p=n.getTime()>e.getTime()?n:new Date(n.getTime()+864e5),g=c.getTime()>e.getTime()?c:new Date(c.getTime()+864e5),m=o.atmosCe,u=m.golden_hour_morning_start?new Date(String(t.states[m.golden_hour_morning_start]?.state)):null,w=m.golden_hour_morning_end?new Date(String(t.states[m.golden_hour_morning_end]?.state)):null,f=m.golden_hour_evening_start?new Date(String(t.states[m.golden_hour_evening_start]?.state)):null,y=m.golden_hour_evening_end?new Date(String(t.states[m.golden_hour_evening_end]?.state)):null,b=m.blue_hour_morning_start?new Date(String(t.states[m.blue_hour_morning_start]?.state)):null,_=m.blue_hour_morning_end?new Date(String(t.states[m.blue_hour_morning_end]?.state)):null,A=m.blue_hour_evening_start?new Date(String(t.states[m.blue_hour_evening_start]?.state)):null,M=m.blue_hour_evening_end?new Date(String(t.states[m.blue_hour_evening_end]?.state)):null,O=s.getTime()-d.getTime(),z=function(T){return T&&O>0?Math.max(0,Math.min(1,(T.getTime()-d.getTime())/O)):-1},N=m.moon_phase?t.states[m.moon_phase]:null,x=N?.attributes||{},k=x.moon_age!==void 0?Number(x.moon_age):null,R=x.illumination!==void 0?Number(x.illumination):null,F=k!==null?Xi(k):N?.state||null,S=m.moonrise?new Date(t.states[m.moonrise]?.state):null,D=m.moonset?new Date(t.states[m.moonset]?.state):null,B=Be(e,d,s,u,y,b,A,f),Y=je[B],et=z(e),ot=e.getTime()>=d.getTime()&&e.getTime()<=s.getTime(),J="M"+Ma+","+Zt+" A"+Ht+","+Ht+" 0 0 1 "+Ta+","+Zt,H=J+" Z",v=[],V=Et("pw-arc-fill"),X=Yi[B];if(v.push('<defs><linearGradient id="'+V+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+X.top+'"/><stop offset="100%" stop-color="'+X.bottom+'"/></linearGradient></defs>'),v.push(wt("path",{d:H,fill:"url(#"+V+")"})),v.push(wt("line",{x1:Ma,y1:Zt,x2:Ta,y2:Zt,stroke:"rgba(255,255,255,0.2)","stroke-width":1})),ot&&et>=0){let T=vo(et),Q=et*Xe;v.push(wt("path",{d:J,fill:"none",stroke:"rgba(255,220,100,0.1)","stroke-width":2,"stroke-dasharray":Q.toFixed(1)+" "+Xe}));let U=wt("circle",{cx:T.x.toFixed(1),cy:T.y.toFixed(1),r:11,fill:"#ffd60a"});U+=wt("circle",{cx:T.x.toFixed(1),cy:T.y.toFixed(1),r:7,fill:"#ffe066",opacity:.5});for(let zt=0;zt<qi;zt++){let Rt=zt*45*Math.PI/180;U+=wt("line",{x1:(T.x+Ca*Math.cos(Rt)).toFixed(1),y1:(T.y+Ca*Math.sin(Rt)).toFixed(1),x2:(T.x+Ea*Math.cos(Rt)).toFixed(1),y2:(T.y+Ea*Math.sin(Rt)).toFixed(1),stroke:"#ffd60a","stroke-width":1.5,"stroke-linecap":"round",opacity:.4})}v.push('<g style="animation: pw-sunGlow 4s ease-in-out infinite">'+U+"</g>")}function at(T,Q,U,zt,Rt){if(zt==null)return wt("circle",{cx:T.toFixed(1),cy:Q.toFixed(1),r:U,fill:"#c8d0e0"});let ie=Math.max(0,Math.min(1,zt/100)),Ze=Rt!==null?Ki(Rt):!0,qt=wt("circle",{cx:T.toFixed(1),cy:Q.toFixed(1),r:U,fill:"#2a2a3a"});if(ie>=.99)qt+=wt("circle",{cx:T.toFixed(1),cy:Q.toFixed(1),r:U,fill:"#e8e0d0"});else if(ie>.01){let re=Q-U,Me=Q+U,ue=(U*Math.abs(2*ie-1)).toFixed(1),Te=ie>.5?1:0,me;Ze?me="M"+T.toFixed(1)+","+re.toFixed(1)+" A"+U+","+U+" 0 0 1 "+T.toFixed(1)+","+Me.toFixed(1)+" A"+ue+","+U+" 0 0 "+Te+" "+T.toFixed(1)+","+re.toFixed(1)+" Z":me="M"+T.toFixed(1)+","+re.toFixed(1)+" A"+U+","+U+" 0 0 0 "+T.toFixed(1)+","+Me.toFixed(1)+" A"+ue+","+U+" 0 0 "+(1-Te)+" "+T.toFixed(1)+","+re.toFixed(1)+" Z",qt+=wt("path",{d:me,fill:"#e8e0d0"})}return qt}if(S&&D&&!isNaN(S.getTime())&&!isNaN(D.getTime())){let T=Qi(e,S,D);if(T.visible){let Q=vo(T.progress),U=T.progress*Xe;v.push(wt("path",{d:J,fill:"none",stroke:"rgba(200,210,230,0.06)","stroke-width":1.5,"stroke-dasharray":U.toFixed(1)+" "+Xe})),v.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">'+at(Q.x,Q.y,8,R,k)+"</g>")}}else if(!ot){let T=vo(.5);v.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">'+at(T.x,T.y,8,R,k)+"</g>")}let $t=Zt-Ht*.48,Nt=Zt-Ht*.28,lt,Ct;ot?(lt="Daylight",Ct=(s.getTime()-e.getTime())/36e5):(lt="Nighttime",Ct=(p.getTime()-e.getTime())/36e5);let $=Zi(Ct);v.push(wt("text",{x:$e,y:$t,"text-anchor":"middle",fill:"rgba(255,255,255,0.9)","font-size":18,"font-weight":400},lt)),v.push(wt("text",{x:$e,y:Nt,"text-anchor":"middle",fill:Y.labelColor,"font-size":22,"font-weight":500},l($)));let I='<svg style="display:block;width:100%;overflow:visible" viewBox="0 0 '+Na+" "+za+'" role="img" aria-label="Sun and moon arc">'+v.join("")+"</svg>",P=tr(B),tt=Fa("am",P),St=Fa("pm",P);function kt(T,Q,U){return!T||isNaN(T.getTime())?"":'<div class="'+Q+'"><span class="pw-twilight-time" style="color:'+h(U)+'">'+l(_e(T))+"</span></div>"}function it(T,Q){return'<div class="'+Q+'"><span class="pw-twilight-label">'+l(T)+"</span></div>"}let te='<div class="pw-twilight-col pw-twilight-am">'+tt+kt(w,"pw-twilight-time-golden","#ff9f0a")+it("Golden hour","pw-twilight-label-golden")+kt(_,"pw-twilight-time-blue","#5ac8fa")+it("Blue hour","pw-twilight-label-blue")+kt(b,"pw-twilight-time-end","#5ac8fa")+"</div>",ee='<div class="pw-twilight-col pw-twilight-pm">'+St+kt(f,"pw-twilight-time-golden","#ff9f0a")+it("Golden hour","pw-twilight-label-golden")+kt(A,"pw-twilight-time-blue","#5ac8fa")+it("Blue hour","pw-twilight-label-blue")+kt(M,"pw-twilight-time-end","#5ac8fa")+"</div>",Ut=ot?d:p,oe=ot?s:g,ke='<div class="pw-sunrise-sunset"><div class="pw-sun-time"><div class="pw-sun-time-value">'+l(_e(Ut))+'</div><div class="pw-sun-time-label">Sunrise</div></div><div class="pw-sun-time"><div class="pw-sun-time-value">'+l(_e(oe))+'</div><div class="pw-sun-time-label">Sunset</div></div></div>',$o=B===2||B===4,ae=B===0,Vt="";$o?Vt='<div class="pw-tension-wash" style="background: '+h(ht("#ff9f0a",.2))+'"></div>':ae&&(Vt='<div class="pw-tension-wash" style="background: '+h(ht("#5ac8fa",.1))+'"></div>');let de='<div class="pulse-stats-row pw-moon-stats" role="img" aria-label="Moon statistics">'+(F?j(R!==null?Math.round(R)+"%":l(F),"Moon Phase",""):"")+j(l(_e(S)),"Moonrise","")+j(l(_e(D)),"Moonset","")+"</div>";return'<div class="pw-section pw-astro"><div class="pw-sky-wash" style="background: '+h(Y.gradient)+'"></div>'+Vt+'<div class="pw-fx" data-astro-stars="'+Y.stars+'" data-astro-day="'+Y.isDay+'" role="img" aria-label="Sky atmospheric effects"></div><div class="pw-astro-content"><div class="pw-section-header"><span class="pw-section-title">Sun &amp; Moon</span></div><div class="pw-astro-layout">'+te+'<div class="pw-arc-center"><div class="pw-arc-wrap">'+I+"</div>"+ke+"</div>"+ee+"</div>"+de+"</div></div>"}ft();function er(t,a){let o=(t?.state||"").toLowerCase();if(!t||o==="none"||o==="no alerts"||o==="unavailable"||o==="0"||o==="off")return[];let e=t.entity_id||"";if(e.endsWith("_alert_count")||e.startsWith("binary_sensor."))return[];let i=t.attributes,r=[],n=i.alert_type||i.type||"wind",c=Number(i.level),d=Number.isFinite(c)&&c>0?c:1,s=i.color||lo[d]||lo[1],p=Go[n]||"mdi:alert",g=Number(i.progress)||0,m=Array.isArray(i.locations)?i.locations:[],u=i.end_time??"",w=null,f=null,y=!1;if(u==="")y=!0;else if(u){let b=new Date(u),_=new Date,A=b.getTime()-_.getTime();if(A/(1e3*60*60*24)>jo)y=!0;else if(a)w=Math.max(0,A/(1e3*60*60));else{let O=i.start_time||i.datetime;if(O){let z=new Date(String(O));f=Math.max(0,(z.getTime()-_.getTime())/(1e3*60*60))}}}return r.push({type:n,icon:p,severity:d,color:s,summary:String(i.headline||i.summary||t.state||""),desc:String(i.description||""),active:a,hoursLeft:w,hoursUntil:f,progress:g,locations:m,link:i.link?String(i.link):null,endTime:String(u),isUntilFurtherNotice:y}),r}function Da({hass:t,config:a,discovery:o}){let e=[];o.atmosCe.active_alert&&t.states[o.atmosCe.active_alert];for(let x of o.alertEntityIds){let k=t.states[x];if(!k)continue;let R=x.includes("active")||k.state==="on";e.push(...er(k,R))}let r=e.length>0,n=r?e.reduce((x,k)=>k.severity>x.severity?k:x,e[0]).severity:0,c=r?e.reduce((x,k)=>k.severity>x.severity?k:x,e[0]).color:"#30d158",d=_t(n,0,4),s=r?Math.min(1.5,1+(e.length-1)*.15):1,p=ua(d,3,1.2).toFixed(2),g=Bt(d).toFixed(2),m=Bt(d,2,.6).toFixed(2),u=r?ht(c,d*s):ht("#30d158",.08),w=140,f=w/2,y=w/2,b=r?{bgInner:n>=4?"#1a0000":n>=3?"#1a0e00":"#1a1500",bgOuter:n>=4?"#0a0000":n>=3?"#0a0500":"#0a0800",ring:h(It(c,.15)),line:h(It(c,.08)),sweep:h(It(c,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},_=e.map((x,k)=>{let R=x.active?18+k*7:40+k*7,F=k*137.5*Math.PI/180,S=f+Math.cos(F)*R,D=y+Math.sin(F)*R,B=(k*137.5%360/360*Number(p)).toFixed(2);return x.active?`<div class="pw-radar-blip" style="left:${S.toFixed(1)}px;top:${D.toFixed(1)}px;--pw-blip-color:${h(x.color)};animation-delay:${B}s"></div>`:`<div style="position:absolute;left:${S.toFixed(1)}px;top:${D.toFixed(1)}px;width:4px;height:4px;border-radius:50%;background:${h(x.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),A=`
    <div style="display:flex;justify-content:center;padding:12px 20px;position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${b.bgInner};--pw-radar-bg-outer:${b.bgOuter};--pw-radar-color:${b.ring};--pw-radar-line:${b.line};--pw-radar-sweep:${b.sweep};--pw-radar-dur:${p}s" role="img" aria-label="${r?`${e.length} weather alerts`:"No active alerts"}">
        ${_}
      </div>
    </div>`,M=`<span class="pw-severity-dot" style="background: ${h(c)}; animation-duration: ${m}s"></span>`,O=n>=4,z=e.map(x=>{let k=x.isUntilFurtherNotice?"Until further notice":x.active&&x.hoursLeft!==null?`${Math.round(x.hoursLeft)}h left`:x.hoursUntil!==null?`${Math.round(x.hoursUntil)}h until`:"",R=x.active?"active":"upcoming",F=x.active?`--pw-alert-color:${h(x.color)}`:"",S=x.link&&/^https?:\/\//i.test(x.link)?x.link:null,D=S?`<a class="pw-alert-link" href="${l(S)}" target="_blank" rel="noopener noreferrer">More info</a>`:"";return`
      <div class="pw-alert-row ${R}" style="${F}">
        <div class="pw-alert-dot" style="background:${h(x.color)}"></div>
        <div class="pw-alert-body">
          <div class="pw-alert-headline">${l(x.summary)}</div>
          <div class="pw-alert-type">${l(x.type)}</div>
          ${x.desc?`<div class="pw-alert-desc">${l(x.desc)}</div>`:""}
          ${x.locations.length>0?`<div class="pw-alert-locations">${l(x.locations.join(", "))}</div>`:""}
          ${D}
        </div>
        <span class="pw-alert-time">${l(k)}</span>
      </div>`}).join("");return`
    <div class="pw-section pw-alerts"${O?` style="border-top: 2px solid ${h(c)}"`:""}>
      <div class="pw-tension-wash${r?" breathing":""}" style="background: ${h(u)}; --breathe-dur: ${g}s"></div>
      <div class="pw-alerts-content">
        <div class="pw-section-header">
          <span class="pw-section-title">Alerts</span>
          ${M}
        </div>
        ${A}
        ${r?"":'<div class="pw-all-clear">All Clear</div>'}
        ${z?`<div class="pw-alert-list">${z}</div>`:""}
      </div>
    </div>`}var Pt=300,yo=180,Ke=8,Se=12,Wt=140,Ia=172,or=.9,ar=3,ir=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Jt(t,a){return a<=1?Pt/2:Ke+t/(a-1)*(Pt-2*Ke)}function La(t,a,o){if(!Number.isFinite(t)||!Number.isFinite(a)||!Number.isFinite(o))return(Se+Wt)/2;let e=o-a||1;return Se+(o-t)/e*(Wt-Se)}function rr(t){try{let a=new Date(t);return isNaN(a.getTime())?"":String(a.getHours()).padStart(2,"0")}catch(a){return console.debug("Pulse Weather: formatHourLabel fallback for",t,a),""}}var nr=500;function sr(t,a=24){if(!Array.isArray(t))return null;let o=t.slice(0,nr),i=ce(o,new Date).slice(0,a);if(i.length<2)return null;let r=i[0],n="cloud_cover"in r,c="cloud_cover_low"in r&&"cloud_cover_mid"in r&&"cloud_cover_high"in r,d="wind_speed"in r&&("wind_bearing"in r||"wind_direction"in r),s=i.map(f=>{let y=Number(f.temperature),b=K(f.precipitation_probability,0),_=K(f.snowfall,0),A=K(f.rain,0),M=K(f.showers,0),O=String(f.condition||""),z=_>0||O==="snowy"||O==="snowy-rainy"?"snow":"rain",N=z==="snow"?_:A+M;return{temp:y,precip:b,precipMm:N,precipType:z,condition:O,cloudCover:n?K(f.cloud_cover,0):null,cloudLow:c?K(f.cloud_cover_low,0):null,cloudMid:c?K(f.cloud_cover_mid,0):null,cloudHigh:c?K(f.cloud_cover_high,0):null,windSpeed:d?K(f.wind_speed,0):null,windBearing:d?K(f.wind_bearing??f.wind_direction,0):null,timeLabel:rr(String(f.datetime||"")),datetime:String(f.datetime||"")}}),p=Pe(s,f=>f.temp);if(p.length<2)return null;let g=p.map(f=>f.temp),m=Math.min(...g),u=Math.max(...g),w=Math.max(...p.map(f=>f.precipMm),0);return{points:p,n:p.length,min:m,max:u,minIdx:g.indexOf(m),maxIdx:g.indexOf(u),maxPrecipMm:w,hasCloud:n,hasLayeredCloud:c,hasWind:d}}function lr(t){let{points:a,n:o,hasLayeredCloud:e}=t,i="",r=o>1?(Pt-2*Ke)/(o-1)/2:Pt/2;for(let n=0;n<o;n++){let c=Jt(n,o),d=n===0?0:c-r,p=(n===o-1?Pt:c+r)-d;if(e){let g=(Number(a[n].cloudHigh)||0)/100*.06,m=(Number(a[n].cloudMid)||0)/100*.08,u=(Number(a[n].cloudLow)||0)/100*.1,w=Math.min(g+m+u,.15);i+=`<rect x="${d.toFixed(1)}" y="0" width="${p.toFixed(1)}" height="${yo}" fill="rgba(180,190,200,1)" opacity="${w.toFixed(3)}"/>`}else{let g=(Number(a[n].cloudCover)||0)/100*.12;i+=`<rect x="${d.toFixed(1)}" y="0" width="${p.toFixed(1)}" height="${yo}" fill="rgba(180,190,200,1)" opacity="${g.toFixed(3)}"/>`}}return i}function cr(t){let{points:a,n:o,maxPrecipMm:e}=t,i=(Wt-Se)*.7,r=(Pt-2*Ke)/(o-1)*or,n=e>0,c=n?Math.max(e,2):100,d="";for(let s=0;s<o;s++){let{precipMm:p,precip:g,precipType:m}=a[s],u=n?p:g;if(u<=0)continue;let w=u/c*i,f=Jt(s,o)-r/2,y=r;f<0&&(y+=f,f=0),f+y>Pt&&(y=Pt-f);let b=Wt-w,_=m==="snow"?"rgba(200,220,240,0.45)":"rgba(90,200,250,0.4)";d+=`<rect x="${f.toFixed(1)}" y="${b.toFixed(1)}" width="${y.toFixed(1)}" height="${w.toFixed(1)}" fill="${_}" rx="1"/>`}return d}function pr(t){let{points:a,n:o,maxPrecipMm:e}=t,i=(Wt-Se)*.7,r=e>0,n=r?Math.max(e,2):100,c="";for(let d=0;d<o;d++){let{precipMm:s,precip:p}=a[d],g=r?s:p;if(g<=0)continue;let m=Jt(d,o),u=g/n*i,w=Wt-u-2,f=r?s>=10?String(Math.round(s)):s.toFixed(1):`${Math.round(p)}%`;c+=`<text x="${m.toFixed(1)}" y="${w.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="7" font-family="var(--ha-card-header-font-family, inherit)">${l(f)}</text>`}return c}function dr(t,a){let{points:o,n:e,min:i,max:r}=t,n=o.map(w=>parseFloat(w.temp.toFixed(1))),c=o.map((w,f)=>({x:Jt(f,e),y:La(n[f],i,r)})),d=c.map((w,f)=>`${f===0?"M":"L"}${w.x.toFixed(1)},${w.y.toFixed(1)}`).join(" "),s=`${d} L${c[c.length-1].x.toFixed(1)},${Wt} L${c[0].x.toFixed(1)},${Wt} Z`,p=Et("pw-meteogram-grad"),g=q(r),m=q(i),u=`<defs><linearGradient id="${p}" x1="0" y1="0" x2="0" y2="1">`;u+=`<stop offset="0%" stop-color="${h(g)}" stop-opacity="0.25"/>`,u+=`<stop offset="100%" stop-color="${h(m)}" stop-opacity="0.03"/>`,u+="</linearGradient></defs>",u+=`<path d="${s}" fill="url(#${p})"/>`,u+=`<path d="${d}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;for(let w=1;w<c.length;w+=2){let f=c[w].x,y=c[w].y-2,b=n[w],_=b===Math.round(b)?`${Math.round(b)}\xB0`:`${b}\xB0`;u+=`<text x="${f.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" fill="${h(q(b))}" font-size="9" font-weight="500">${_}</text>`}return u}function ur(t){let{points:a,n:o,min:e,max:i}=t,r="";for(let n=0;n<o;n+=2){let{condition:c,temp:d}=a[n];if(!c)continue;let s=Jt(n,o),p=La(d,e,i)+14,g=ve(c);r+=`<text x="${s.toFixed(1)}" y="${p.toFixed(1)}" text-anchor="middle" font-size="12">${g}</text>`}return r}function mr(t,a){let{points:o,n:e}=t,i=(Wt+Ia)/2,r="";for(let n=0;n<e;n+=a){let{windSpeed:c,windBearing:d}=o[n];if(c===null||d===null||Number(c)<1)continue;let s=Jt(n,e),p=(Number(d)%360+360)%360,g=Math.round(p/22.5)%16,m=ir[g],u=Number(c),w=5,f="rgba(255,255,255,0.5)";r+=`<g transform="translate(${s.toFixed(1)},${i.toFixed(1)}) rotate(${p.toFixed(0)})" aria-label="Wind from ${l(m)} at ${Math.round(u)} km/h">`,r+=`<line x1="0" y1="${w}" x2="0" y2="${-w}" stroke="${f}" stroke-width="0.8" stroke-linecap="round"/>`;let y=Math.floor(u/10),b=u%10>=5?1:0,_=-w;for(let A=0;A<y&&A<5;A++)r+=`<line x1="0" y1="${_.toFixed(1)}" x2="3" y2="${(_-2).toFixed(1)}" stroke="${f}" stroke-width="0.8" stroke-linecap="round"/>`,_+=2;b&&(r+=`<line x1="0" y1="${_.toFixed(1)}" x2="2" y2="${(_-1.5).toFixed(1)}" stroke="${f}" stroke-width="0.8" stroke-linecap="round"/>`),r+="</g>"}return r}function fr(t){let{points:a,n:o}=t,e="";for(let i=0;i<o;i+=ar){let r=Jt(i,o);e+=`<text x="${r.toFixed(1)}" y="${Ia}" text-anchor="middle" fill="var(--primary-text-color, rgba(255,255,255,0.6))" font-size="9" font-family="var(--ha-card-header-font-family, inherit)">${l(a[i].timeLabel)}</text>`}return e}function Oa({config:t,forecastData:a}){let o=a?.hourly||[];if(o.length<2)return null;let e=sr(o,Math.max(4,Math.min(48,Number(t.hours)||12)));if(!e)return null;let i=1,r=t.show_dots!==!1,n=t.show_cloud==="auto"||t.show_cloud===void 0?e.hasCloud:!!t.show_cloud,c=t.show_wind==="auto"||t.show_wind===void 0?e.hasWind:!!t.show_wind,d=[];n&&e.hasCloud&&d.push(lr(e)),d.push(cr(e)),d.push(pr(e)),d.push(dr(e,r)),d.push(ur(e)),c&&e.hasWind&&d.push(mr(e,i)),d.push(fr(e));let s="24-hour meteogram showing temperature, precipitation, cloud cover, and wind",p=`Temperature ranges from ${Math.round(e.min)}\xB0C to ${Math.round(e.max)}\xB0C over the next 24 hours`,g=t.meteogram_height&&t.meteogram_height!=="auto"?` style="height: ${h(String(t.meteogram_height))}"`:"",m=Et("pw-meteogram-title");return`
    <div class="pw-section pw-meteogram">
      <div class="pw-section-header">
        <span class="pw-section-title" id="${m}">Meteogram</span>
      </div>
      <div class="pw-meteogram-chart" aria-labelledby="${m}"${g}>
        <svg viewBox="0 0 ${Pt} ${yo}" style="width:100%; height:auto" role="img" aria-label="${l(s)}">
          <title>${l(p)}</title>
          ${d.join(`
`)}
        </svg>
      </div>
    </div>`}var gr={overview:xa,forecast:ba,wind:Sa,air_quality:ka,astro:Ra,alerts:Da,atmosphere:ha,meteogram:Oa},_o=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null}setConfig(a){if(!a)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=ea(a),this._warnedMissingEntity=null,this._hass&&this._fullRender()}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(a){if(this._hass=a,!this._config)return;let o=this._config.weather_entity,e=o||Object.keys(a.states).find(c=>c.startsWith("weather."))||"",i=a.states[e];if(!i){o&&this._warnedMissingEntity!==o&&(console.warn('Pulse Weather: weather_entity "%s" not found in hass.states',o),this._warnedMissingEntity=o);return}let r=`${i.state}|${JSON.stringify(i.attributes)}`;r!==this._lastWeatherState&&(this._lastWeatherState=r,this._fullRender()),this._subscribeForecast(a,e)}async _subscribeForecast(a,o){let e=Date.now()-this._forecastLastFetch>=Uo;if(!(this._subscribedEntityId===o&&this._forecastData&&!e)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=o;try{if(!a.callWS)return;let i=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let g=(await a.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(m=>m.platform==="atmos_ce");this._atmosConfigEntryId=g?.config_entry_id||null}if(this._atmosConfigEntryId){let m=(await a.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;m?.forecast&&(i=m.forecast)}}catch(p){console.debug("Pulse Weather: extended forecast fetch failed, using standard",p)}let r=null;o&&a.states[o]&&(r=await a.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let n=null;!i&&o&&a.states[o]&&(n=(await a.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[o]?.forecast||[]);let s=r?.response?.[o];this._forecastData={hourly:i||n||[],daily:s?.forecast||[]},this._forecastLastFetch=Date.now(),this._fullRender()}catch(i){console.warn("Pulse Weather: forecast fetch failed, throttling retries",i),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let a=uo(this._hass.states,this._config);this._discovery=a;let o=this._hass.states[a.weatherEntityId];if(!o)return;let e=["<style>",Jo,"</style>",'<div class="pw-card">'];for(let i of this._config.sections||[]){let r=gr[i.type];if(r)try{let n=r({hass:this._hass,config:i,discovery:a,weatherEntity:o,forecastData:this._forecastData});n&&e.push(n)}catch(n){console.warn(`Pulse Weather: section "${i?.type}" renderer threw`,n)}}e.push("</div>"),this.shadowRoot.innerHTML=e.join(""),this._postRender(a),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let i=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!i){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let r=Number(i.dataset.target)-Date.now();if(r<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let n=Math.floor(r/1e3),c=Math.floor(n/3600),d=Math.floor(n%3600/60),s=n%60;i.textContent=(c>0?c+"h "+d+"m":d+"m "+s+"s")+(i.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let a=uo(this._hass.states,this._config),o=a.atmosCe,e=this._hass.states[a.sunEntityId||""];if(!e)return;let i=Date.now(),r=[],n=new Date(e.attributes?.next_rising||"").getTime(),c=new Date(e.attributes?.next_setting||"").getTime();n>i&&r.push(n),c>i&&r.push(c);for(let p of["golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end"])if(o[p]){let g=new Date(String(this._hass.states[o[p]]?.state||"")).getTime();g>i&&r.push(g)}if(r.length===0)return;let s=Math.min(...r)-i+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},s)}_postRender(a){if(!this.shadowRoot||!this._hass)return;let o=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let s of o){let p=s.getAttribute("data-condition")||"",g=s.getAttribute("data-night")==="true",m=null;try{let w=s.getAttribute("data-cloud");w&&w!=='""'&&w!==""&&(m=JSON.parse(w))}catch{}let u=ia(p,g,m);s.replaceChildren(u)}let e=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let s of e){let p=Number(s.getAttribute("data-pm25"))||0,g=Number(s.getAttribute("data-pm10"))||0,m=s.querySelector(".pw-fx");if(m&&(p>0||g>0)){let u=document.createDocumentFragment();aa(u,p,g),m.replaceChildren(u)}}let i=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let s of i){let p=s.getAttribute("data-astro-stars")==="true",g=s.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();p&&fo(m),g&&(st(m,3,.5),He(m)),s.replaceChildren(m)}let r=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let s of r){let p=Number(s.getAttribute("data-atmos-score"))||0,g=s.getAttribute("data-atmos-color")||"#30d158",m=ga(p,g);s.replaceChildren(m)}let n=this.shadowRoot.querySelectorAll(".pw-tab");for(let s of n)s.addEventListener("click",p=>{let g=p.currentTarget,m=g.dataset.mode,u=g.dataset.scale;if(m||u){if(!this._config)return;let w=[...this._config.sections||[]];for(let f of w)m&&("mode"in f||f.type==="forecast"||f.type==="wind")&&(f.type==="forecast"&&m&&(f.mode=m),f.type==="wind"&&m&&(f.speed_mode=m)),u&&f.type==="air_quality"&&(f.scale=u);this._config={...this._config,sections:w},this._fullRender()}});let c=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let s of c){let p=!1,g=0,m=0;s.addEventListener("mousedown",u=>{p=!0,g=u.pageX-s.offsetLeft,m=s.scrollLeft,s.style.cursor="grabbing"}),s.addEventListener("mouseleave",()=>{p=!1,s.style.cursor=""}),s.addEventListener("mouseup",()=>{p=!1,s.style.cursor=""}),s.addEventListener("mousemove",u=>{if(!p)return;u.preventDefault();let w=u.pageX-s.offsetLeft;s.scrollLeft=m-(w-g)}),s.addEventListener("touchstart",u=>{u.stopPropagation()},{passive:!0}),s.addEventListener("touchmove",u=>{u.stopPropagation()},{passive:!0}),s.addEventListener("wheel",u=>{let w=u;Math.abs(w.deltaX)<Math.abs(w.deltaY)&&(u.preventDefault(),s.scrollLeft+=w.deltaY)},{passive:!1})}let d=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(d){let s=this.shadowRoot.querySelector(".pw-atmos-detail");s&&(this._atmosExpanded&&(s.style.maxHeight=`${s.scrollHeight}px`,d.setAttribute("aria-expanded","true")),d.addEventListener("click",()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(s.style.maxHeight=`${s.scrollHeight}px`,d.setAttribute("aria-expanded","true")):(s.style.maxHeight="0",d.setAttribute("aria-expanded","false"))}))}}getCardSize(){let a=this._config?.sections?.length||1;return Math.max(3,a*3)}getGridOptions(){return{columns:12,min_columns:6,rows:this.getCardSize(),min_rows:3}}static async getConfigElement(){return await Promise.resolve().then(()=>(Pa(),Ha)),document.createElement(he)}static getStubConfig(a){let o=Object.keys(a.states).find(e=>e.startsWith("weather."));return{type:`custom:${se}`,weather_entity:o||"weather.home",sections:[{type:"overview"}]}}};customElements.get(se)||(customElements.define(se,_o),console.info(`%c ${se.toUpperCase()} %c v${Lo} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:se,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});})();

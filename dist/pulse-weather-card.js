"use strict";(()=>{var Zo=Object.defineProperty;var Je=(t,o)=>()=>(t&&(o=t(t=0)),o);var Jo=(t,o)=>{for(var a in o)Zo(t,a,{get:o[a],enumerable:!0})};var Ca,te,pe,ke,ee,Me,Te,Ce,Ee,de,ue,Ae,Pt,Fe,Ea,ta,Aa,Fa,Na,ea,za,Ra,Da,La,aa,Ia,Oa,Ha,oa,Pa,Wa,zt,Ua,lt=Je(()=>{"use strict";Ca="0.1.0",te="pulse-weather-card",pe="pulse-weather-card-editor",ke=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],ee={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},Me=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],Te=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],Ce=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}],Ee=[{max:2,color:"#30d158",label:"Low"},{max:5,color:"#ffd60a",label:"Moderate"},{max:7,color:"#ff9f0a",label:"High"},{max:10,color:"#ff453a",label:"Very High"},{max:1/0,color:"#bf5af2",label:"Extreme"}],de=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],ue=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}],Ae=[{max:300,color:"#30d158",label:"Stable"},{max:1e3,color:"#ffd60a",label:"Marginal"},{max:2500,color:"#ff9f0a",label:"Moderate"},{max:1/0,color:"#ff453a",label:"High"}],Pt=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],Fe=80,Ea=35,ta=.6,Aa=90,Fa=60,Na=40,ea=8,za=1800*1e3,Ra=7,Da=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],La={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"},aa={1:"#FFFF00",2:"#FFA500",3:"#FF0000",4:"#8B0000"},Ia=[{key:"pm2_5",label:"PM2.5",unit:"\xB5g/m\xB3",maxEu:75},{key:"pm10",label:"PM10",unit:"\xB5g/m\xB3",maxEu:150},{key:"nitrogen_dioxide",label:"NO\u2082",unit:"\xB5g/m\xB3",maxEu:400},{key:"ozone",label:"O\u2083",unit:"\xB5g/m\xB3",maxEu:240},{key:"sulphur_dioxide",label:"SO\u2082",unit:"\xB5g/m\xB3",maxEu:500},{key:"carbon_monoxide",label:"CO",unit:"\xB5g/m\xB3",maxEu:2e4},{key:"carbon_dioxide",label:"CO\u2082",unit:"ppm",maxEu:5e3}],Oa=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],Ha=["active_alert","upcoming_alert","alert_count"],oa="_weather",Pa=3,Wa={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},zt=29.53,Ua=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"]});function l(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function g(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}var Ne=Je(()=>{"use strict"});var No={};Jo(No,{PulseWeatherCardEditor:()=>Ge});var Ge,zo=Je(()=>{"use strict";lt();Ne();Ge=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null}setConfig(o){this._config={...o},this._render()}set hass(o){this._hass=o}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_render(){if(!this.shadowRoot||!this._config)return;let a=(this._config.sections||[{type:"overview"}]).map((i,r)=>`
      <div class="editor-section-row" data-index="${r}">
        <select class="editor-select" data-index="${r}" data-field="type">
          ${ke.map(n=>`<option value="${l(n)}" ${n===i.type?"selected":""}>${l(n)}</option>`).join("")}
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
        ${a}
        <button class="editor-btn editor-add">+ Add Section</button>
      </div>
    `,this.shadowRoot.querySelectorAll(".editor-input").forEach(i=>{i.addEventListener("change",r=>{if(!this._config)return;let n=r.target.dataset.field;n&&(this._config[n]=r.target.value||void 0,this._fireConfigChanged())})}),this.shadowRoot.querySelectorAll(".editor-select").forEach(i=>{i.addEventListener("change",r=>{if(!this._config)return;let n=Number(r.target.dataset.index),c=[...this._config.sections||[]];c[n]={...c[n],type:r.target.value},this._config.sections=c,this._fireConfigChanged(),this._render()})}),this.shadowRoot.querySelectorAll(".editor-remove").forEach(i=>{i.addEventListener("click",r=>{if(!this._config)return;let n=Number(r.target.dataset.index),c=[...this._config.sections||[]];c.splice(n,1),this._config.sections=c.length>0?c:[{type:"overview"}],this._fireConfigChanged(),this._render()})});let e=this.shadowRoot.querySelector(".editor-add");e&&e.addEventListener("click",()=>{if(!this._config)return;let i=[...this._config.sections||[]];i.push({type:"overview"}),this._config.sections=i,this._fireConfigChanged(),this._render()})}};customElements.get(pe)||customElements.define(pe,Ge)});lt();var ja=`
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
`;var Ba=`${ja}
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
`;lt();var Ga=[{type:"overview"}],ti={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function ia(t){if(!t||typeof t!="object")return{type:"overview"};let o=ke.includes(t.type)?t.type:"overview";return{...ti[o]||{},...t,type:o}}function Va(t){if(!t||typeof t!="object")return{type:"custom:pulse-weather-card",sections:Ga.map(ia)};let o=t,a=Array.isArray(o.sections)&&o.sections.length>0?o.sections.map(ia):Ga.map(ia);return{type:o.type||"custom:pulse-weather-card",weather_entity:o.weather_entity||void 0,atmos_source:o.atmos_source||void 0,sections:a}}Ne();lt();function ei(t){let o=t.replace(/^weather\./,"");return o.endsWith(oa)&&(o=o.slice(0,-oa.length)),o}function ra(t,o){let a=o.weather_entity||Object.keys(t).find(s=>s.startsWith("weather."))||"",e=o.atmos_source||ei(a),i={};for(let s of Oa){let d=`sensor.${e}_${s}`;d in t&&(i[s]=d)}let r=Object.keys(i).length>=Pa,n=r?i:{},c=[];if(o.alert_entities&&o.alert_entities.length>0)for(let s of o.alert_entities)s in t&&c.push(s);else if(r){for(let h of Ha){let m=`sensor.${e}_${h}`,u=`sensor.${e}_warnings_${h}`;m in t?c.push(m):u in t&&c.push(u)}let s=`binary_sensor.${e}_alert_active`,d=`binary_sensor.${e}_warnings_alert_active`;s in t?c.push(s):d in t&&c.push(d)}let p="sun.sun"in t?"sun.sun":null;return{weatherEntityId:a,atmosCe:n,sunEntityId:p,atmosSource:r?e:null,alertEntityIds:c}}lt();function ct(t,o,a){let e=document.createElement(t);if(e.className=o,a)for(let[i,r]of Object.entries(a))e.style.setProperty(i,r);return e}function C(t,o){return Math.random()*(o-t)+t}function me(t,o=60,a=1,e=2){let i=Math.min(o,Aa);for(let r=0;r<i;r++){let n=ct("div","pw-rain-drop"),c=C(15,30),p=C(.4,.8)/a;Object.assign(n.style,{left:`${C(0,100)}%`,top:`${C(-10,20)}%`,width:`${e}px`,height:`${c}px`,borderRadius:`0 0 ${e}px ${e}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${p}s linear ${C(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(n)}}function na(t,o=40){let a=Math.min(o,Fa);for(let e=0;e<a;e++){let i=ct("div","pw-snowflake"),r=C(2,5);Object.assign(i.style,{left:`${C(0,100)}%`,top:`${C(-5,10)}%`,width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${C(3,6)}s linear ${C(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(i)}}function ai(t){for(let o=0;o<4;o++){let a=ct("div","pw-fog-layer");Object.assign(a.style,{position:"absolute",width:"200%",height:"40px",top:`${30+o*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${C(15,25)}s linear ${o*2}s infinite`,animationFillMode:"backwards"}),t.appendChild(a)}}function ze(t){for(let o=0;o<8;o++){let a=ct("div","pw-sun-ray");Object.assign(a.style,{position:"absolute",top:"-20px",left:`${10+o*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+o*4}deg)`,animation:`pw-rayPulse ${C(3,5)}s ease-in-out ${C(0,2)}s infinite`,animationFillMode:"backwards"}),t.appendChild(a)}}function tt(t,o=4,a=1){let e=Math.min(o,ea);for(let i=0;i<e;i++){let r=ct("div","pw-cloud"),n=C(80,160),c=C(30,60),p=C(20,40)/a;Object.assign(r.style,{position:"absolute",width:`${n}px`,height:`${c}px`,top:`${C(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${p}s linear ${C(0,15)}s infinite`,animationFillMode:"backwards"}),t.appendChild(r)}}function sa(t){for(let o=0;o<Na;o++){let a=ct("div","pw-star"),e=C(1,3);Object.assign(a.style,{position:"absolute",left:`${C(0,100)}%`,top:`${C(0,70)}%`,width:`${e}px`,height:`${e}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${C(2,5)}s ease-in-out ${C(0,3)}s infinite`,animationFillMode:"backwards"}),t.appendChild(a)}}function qa(t,o){let a=[],e=t,i=0,r=Math.floor(C(4,8)),n=o/r;a.push(`${e},${i}`);for(let c=0;c<r;c++)e+=C(-15,15),i+=n,a.push(`${e},${i}`);return a.join(" ")}function Ya(t,o=2,a){let e=a||Array.from({length:o},(r,n)=>n*3),i=ct("div","pw-lightning-flash");Object.assign(i.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${e[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),t.appendChild(i);for(let r=0;r<o;r++){let n="http://www.w3.org/2000/svg",c=document.createElementNS(n,"svg");c.setAttribute("class","pw-lightning-bolt"),c.setAttribute("width","60"),c.setAttribute("height","200"),c.setAttribute("viewBox","0 0 60 200"),c.style.position="absolute",c.style.top="0",c.style.left=`${C(15,75)}%`,c.style.pointerEvents="none",c.style.zIndex="2",c.style.animation=`pw-boltStrike 6s ease-in-out ${e[r]||0}s infinite`,c.style.animationFillMode="backwards";let p=document.createElementNS(n,"polyline");p.setAttribute("points",qa(30,180)),p.setAttribute("fill","none"),p.setAttribute("stroke","rgba(200,220,255,0.4)"),p.setAttribute("stroke-width","6"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),c.appendChild(p);let s=document.createElementNS(n,"polyline");s.setAttribute("points",qa(30,180)),s.setAttribute("fill","none"),s.setAttribute("stroke","#fff"),s.setAttribute("stroke-width","2"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),c.appendChild(s),t.appendChild(c)}}function oi(t){let o=ct("div","pw-heat-shimmer");Object.assign(o.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),t.appendChild(o);let a=ct("div","pw-heat-ripple");Object.assign(a.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),t.appendChild(a)}function Xa(t,o,a){let e=Math.min(1,(o/75+a/150)/2);if(e<.05)return;let i=ct("div","pw-smog-overlay");i.style.background=`rgba(120,110,80,${.05+e*.15})`,t.appendChild(i);let r=ct("div","pw-haze-vignette");r.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${e*.3}) 100%)`,t.appendChild(r);let n=Math.floor(e*20);for(let p=0;p<n;p++){let s=ct("div","pw-dust-particle"),d=C(1,3+e*3);Object.assign(s.style,{left:`${C(0,100)}%`,top:`${C(10,90)}%`,width:`${d}px`,height:`${d}px`,animationDelay:`${C(0,8)}s`,animationFillMode:"backwards"}),t.appendChild(s)}let c=Math.floor(e*5);for(let p=0;p<c;p++){let s=ct("div","pw-haze-blob"),d=C(60,120);Object.assign(s.style,{left:`${C(-10,80)}%`,top:`${C(10,70)}%`,width:`${d}px`,height:`${d*.6}px`,animationDelay:`${C(0,12)}s`,animationFillMode:"backwards"}),t.appendChild(s)}}function Ka(t,o,a){let e=document.createDocumentFragment();try{o&&sa(e);let i=a?Math.round(a.total/100*ea):0;switch(t){case"sunny":o||ze(e),a&&i>0&&tt(e,i);break;case"clear-night":a&&i>0&&tt(e,i);break;case"partlycloudy":o||ze(e),tt(e,a?i:3);break;case"cloudy":tt(e,a?Math.max(i,4):6);break;case"rainy":me(e,40,1,2),tt(e,a?Math.max(i,3):4);break;case"pouring":me(e,80,1.5,3),tt(e,a?Math.max(i,5):6);break;case"snowy":na(e,40),tt(e,a?Math.max(i,3):4);break;case"snowy-rainy":na(e,20),me(e,20,.8,1),tt(e,a?Math.max(i,3):4);break;case"hail":me(e,30,1.2,3),na(e,15),tt(e,a?Math.max(i,4):5);break;case"lightning":Ya(e,2,[0,3]),tt(e,a?Math.max(i,5):6);break;case"lightning-rainy":Ya(e,3,[0,2,4]),me(e,60,1.3,2),tt(e,a?Math.max(i,5):6);break;case"fog":ai(e);break;case"windy":case"windy-variant":tt(e,a?i:3,1.5);break;case"exceptional":oi(e);break;default:a&&i>0&&tt(e,i);break}}catch{}return e}lt();Ne();function B(t){let o=Number(t);for(let a of Me)if(o<=a.max)return a.color;return Me[Me.length-1].color}function la(t){let o=Number(t);for(let a of Te)if(o<=a.max)return a.tier;return Te[Te.length-1].tier}function Za(t){return ee[la(t)]||ee.calm}function Re(t){let o=Number(t);for(let a of Ce)if(o<=a.max)return a;return Ce[Ce.length-1]}function De(t){let o=(Number(t)%360+360)%360,a=Math.round(o/22.5)%16;return Da[a]}function Ja(t,o,a){if(a)return a;let e=Number(t),i=e<=100?de:ue;for(let r of i)if(e<=r.max)return r.color;return i[i.length-1].color}function to(t){let o=Number(t);for(let a of Ee)if(o<=a.max)return a.color;return Ee[Ee.length-1].color}function ca(t){let o=Number(t);for(let a of Ae)if(o<=a.max)return a.color;return Ae[Ae.length-1].color}function eo(t){return t<=12?"#30d158":t<=50?"#5ac8fa":t<=87?"#ff9f0a":"#ff453a"}function ao(t){return t<10?"#5ac8fa":t<16?"#30d158":t<19?"#ffd60a":t<22?"#ff9f0a":"#ff453a"}var Le=[{name:"Night",gradient:"linear-gradient(180deg, #050510, #0a0a1a 50%, transparent)",labelColor:"#636366",stars:!0,isDay:!1},{name:"Blue Hour",gradient:"linear-gradient(180deg, #0a1628, #1a3050 60%, transparent)",labelColor:"#5ac8fa",stars:!0,isDay:!1},{name:"Golden Hour",gradient:"linear-gradient(180deg, #1a2a4a, #3a4a5a 40%, #6a4a30)",labelColor:"#ff9f0a",stars:!1,isDay:!0},{name:"Daytime",gradient:"linear-gradient(180deg, #1a3a5f, #2c5a8e 50%, transparent)",labelColor:"#ffd60a",stars:!1,isDay:!0},{name:"Golden Hour",gradient:"linear-gradient(180deg, #2a2a3a, #5a3a2a 50%, #8a4a1a)",labelColor:"#ff6b35",stars:!1,isDay:!0},{name:"Blue Hour",gradient:"linear-gradient(180deg, #0a1020, #1a2a40 60%, transparent)",labelColor:"#5ac8fa",stars:!0,isDay:!1}];function Ie(t,o,a,e,i,r,n,c){let p=t.getTime(),s=o.getTime(),d=a.getTime(),h=r?r.getTime():s-36e5,m=e?e.getTime():s-18e5,u=c?c.getTime():d-18e5,f=i?i.getTime():d+18e5,w=i?i.getTime()+36e5:n?n.getTime()+18e5:d+36e5;return p<h?0:p<m?1:p<s?2:p<u?3:p<f?4:p<w?5:0}function bt(t,o,a){let e=o?Object.entries(o).map(([i,r])=>` ${i}="${r}"`).join(""):"";return a!=null?`<${t}${e}>${a}</${t}>`:`<${t}${e}/>`}function fe(t){return Wa[t]||"\u{1F324}\uFE0F"}function U(t,o,a){let e=a?` style="color:${g(a)}"`:"";return`<div class="stat"${a?` style="background:${g(a)}14; border-radius:6px"`:""}>
          <div class="pw-stat-value"${e}>${t}</div>
          <div class="pw-stat-label">${l(o)}</div>
        </div>`}var Qa={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function oo(t){return Object.hasOwn(Qa,t)?Qa[t]:t.replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase())}function ht(t,o,a){return a===o?0:Math.max(0,Math.min(1,(t-o)/(a-o)))}function pt(t,o,a="ellipse"){let e=Math.max(0,Math.min(1,o)),i=Math.round(3+e*50),r=Math.round(2+e*25),n=Math.round(50+e*30),c=p=>p.toString(16).padStart(2,"0");return`radial-gradient(${a} at 50% 30%, ${t}${c(i)} 0%, ${t}${c(r)} ${n}%, transparent 90%)`}function Wt(t,o=6,a=1.2){let e=Math.max(0,Math.min(1,t));return o-e*(o-a)}function ge(t,o){let a=Math.max(0,Math.min(1,o)),e=Math.round(4+a*20),i=Math.round(a*8),n=Math.round((.15+a*.55)*255).toString(16).padStart(2,"0");return`0 0 ${e}px ${i}px ${t}${n}`}function Oe(t,o="0,0,0"){let a=Math.max(0,Math.min(1,t));if(a<.1)return"";let e=Math.round(60-a*30),i=(a*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${e}%, rgba(${o},${i}) 100%)`}function io(t,o=8,a=2){let e=Math.max(0,Math.min(1,t));return o-e*(o-a)}lt();var vt=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),ii=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function ro(t){for(let o of Pt)if(t>=o.min)return o;return Pt[Pt.length-1]}function ri(t,o){let a=Math.min(100,t/4e3*100),e=Math.min(100,Math.max(0,(6-o)/12*100));return Math.round(a*.6+e*.4)}function ni(t){return t<=10?{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:t<=30?{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:t<=55?{label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:t<=80?{label:"High",color:"#ff453a",desc:"Severe storms expected"}:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function si(t,o){let a=o.atmosCe,e=a.cape&&t.states[a.cape]&&Number(t.states[a.cape].state)||0,i=a.lifted_index&&t.states[a.lifted_index]&&Number(t.states[a.lifted_index].state)||0,r=!!(a.cape&&t.states[a.cape]),n=!!(a.lifted_index&&t.states[a.lifted_index]),c=r||n?ri(e,i):null;if(a.stability_assessment&&t.states[a.stability_assessment]){let s=t.states[a.stability_assessment].state,d=t.states[a.stability_assessment].attributes||{},h=vt[s];if(h){let m=ii[s]??0;return{...h,score:m,source:"composite",attrs:d,capeValue:e,liValue:i,hasCape:r,hasLI:n}}}return{...(c!==null?ni(c):null)||{label:"Unknown",color:"#888888",desc:""},score:c,source:"fallback",attrs:null,capeValue:e,liValue:i,hasCape:r,hasLI:n}}function li(t){return Math.max(0,Math.min(100,t))}function Xt(t,o=5e3){return o<=0?0:Math.max(0,Math.min(100,t/o*100))}function ci(t,o){let r=Math.max(t,o),n=5e3;r>5e3*.8&&(n=Math.max(5e3,Math.ceil(r*1.25/1e3)*1e3));let c=Math.ceil(n/5e3)*1e3,p=[];for(let s=n;s>=0;s-=c)p.push(s);return p[p.length-1]!==0&&p.push(0),{scaleMax:n,labelInterval:c,labels:p}}function pa(t){return Math.max(0,Math.min(100,t))/100*.35}var pi=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);function no(t,o){if(o&&typeof o.wind_shear_tier=="string"){let a=o.wind_shear_tier,e=vt[a];if(e)return{color:e.color,tier:a}}for(let{max:a,tier:e}of pi)if(t<a)return{color:vt[e]?.color||"#888888",tier:e};return{color:vt.high?.color||"#8b0000",tier:"high"}}var di=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function da(t,o){if(o&&typeof o.lapse_rate_tier=="string"){let a=o.lapse_rate_tier,e=vt[a];if(e)return{color:e.color,tier:a}}for(let{max:a,tier:e}of di)if(t<a)return{color:vt[e]?.color||"#888888",tier:e};return{color:vt.high?.color||"#8b0000",tier:"high"}}function ui(t,o,a,e){let i=a.atmosCe,r=[];if(t.hasCape){let u=ca(t.capeValue);r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${g(u)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${g(u)}">${l(String(Math.round(t.capeValue)))} J/kg</div>
      <div class="pw-atmos-detail-label">CAPE</div>
      <div class="pw-atmos-detail-desc">${l(t.desc||"")}</div></div>
    </div>`)}if(t.hasLI){let u=ro(t.liValue);r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${g(u.color)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${g(u.color)}">${l(t.liValue>=0?"+":"")}${l(t.liValue.toFixed(1))}</div>
      <div class="pw-atmos-detail-label">Lifted Index</div>
      <div class="pw-atmos-detail-desc">${l(u.label)}</div></div>
    </div>`)}let n=i.wind_shear_0_6_km||"",c=n?o.states[n]:null;if(c){let u=Number(c.state)||0,f=c?.attributes?.unit_of_measurement||"km/h",{color:w,tier:$}=no(u,t.attrs),x=vt[$];r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${g(w)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${g(w)}">${l(String(Math.round(u)))} ${l(f)}</div>
      <div class="pw-atmos-detail-label">Wind Shear</div>
      <div class="pw-atmos-detail-desc">${l(x?.label||$)}</div></div>
    </div>`)}let p=i.lapse_rate_700_500_hpa||"",s=p?o.states[p]:null;if(s){let u=Number(s.state)||0,f=s?.attributes?.unit_of_measurement||"\xB0C/km",{color:w,tier:$}=da(u,t.attrs),x=vt[$];r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${g(w)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${g(w)}">${l(u.toFixed(1))} ${l(f)}</div>
      <div class="pw-atmos-detail-label">Lapse Rate</div>
      <div class="pw-atmos-detail-desc">${l(x?.label||$)}</div></div>
    </div>`)}if(i.freezing_level_height&&o.states[i.freezing_level_height]){let u=Number(o.states[i.freezing_level_height].state)||0,f=o.states[i.freezing_level_height]?.attributes?.unit_of_measurement||"m",w="#5ac8fa";r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:${g(w)}"></div>
      <div><div class="pw-atmos-detail-value" style="color:${g(w)}">${l(String(Math.round(u)))}${l(f)}</div>
      <div class="pw-atmos-detail-label">Freeze Level</div>
      <div class="pw-atmos-detail-desc">Snow level</div></div>
    </div>`)}if(i.lcl_height&&o.states[i.lcl_height]){let u=Number(o.states[i.lcl_height].state)||0,f=o.states[i.lcl_height]?.attributes?.unit_of_measurement||"m";r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:#d0d0d0"></div>
      <div><div class="pw-atmos-detail-value">${l(String(Math.round(u)))} ${l(f)}</div>
      <div class="pw-atmos-detail-label">Cloud Base</div>
      <div class="pw-atmos-detail-desc">LCL height</div></div>
    </div>`)}let d=i.cloud_cover_low&&o.states[i.cloud_cover_low]?Number(o.states[i.cloud_cover_low].state)||0:-1,h=i.cloud_cover_mid&&o.states[i.cloud_cover_mid]?Number(o.states[i.cloud_cover_mid].state)||0:-1,m=i.cloud_cover_high&&o.states[i.cloud_cover_high]?Number(o.states[i.cloud_cover_high].state)||0:-1;if(d>=0||h>=0||m>=0){let u=[];d>=0&&u.push(`Low ${Math.round(d)}%`),h>=0&&u.push(`Mid ${Math.round(h)}%`),m>=0&&u.push(`High ${Math.round(m)}%`),r.push(`<div class="pw-atmos-detail-row">
      <div class="pw-atmos-detail-indicator" style="background:rgba(255,255,255,0.3)"></div>
      <div><div class="pw-atmos-detail-value">${l(u.join(" \xB7 "))}</div>
      <div class="pw-atmos-detail-label">Cloud Cover</div></div>
    </div>`)}return r.length===0?"":`<div class="pw-atmos-detail-grid">${r.join("")}</div>`}function mi(t){let o=Math.max(0,Math.min(100,t)),a=o/100;return{count:o<=10?0:Math.round(2+a*6),minSize:2+Math.round(a),maxSize:3+Math.round(a),minDur:4-a*2.2,maxDur:4-a*1.2}}function so(t,o,a=Math.random){let e=document.createDocumentFragment(),i=mi(t);if(i.count===0)return e;for(let r=0;r<i.count;r++){let n=document.createElement("div");n.className="pw-thermal-particle";let c=i.minSize+a()*(i.maxSize-i.minSize),p=10+a()*80,s=a()*30,d=i.minDur+a()*(i.maxDur-i.minDur),h=a()*d,m=.4+a()*.3,u=-(50+a()*60);n.setAttribute("style",[`width:${c.toFixed(1)}px`,`height:${c.toFixed(1)}px`,`left:${p.toFixed(1)}%`,`bottom:${s.toFixed(1)}%`,`background:${o}`,`--rise-dur:${d.toFixed(2)}s`,`--rise-dist:${u.toFixed(0)}px`,`--peak-op:${m.toFixed(2)}`,`animation-delay:${h.toFixed(2)}s`].join(";")),e.appendChild(n)}return e}function lo({hass:t,config:o,discovery:a}){let e=a.atmosCe;if(!e.cape&&!e.lifted_index&&!e.freezing_level_height)return console.debug("Pulse Weather: Atmosphere section requires Atmos CE sensors \u2014 skipping"),null;let i=si(t,a),{score:r,capeValue:n,liValue:c,hasCape:p,hasLI:s}=i,d=i.label!=="Unknown"?i:null,h=e.freezing_level_height&&t.states[e.freezing_level_height]&&Number(t.states[e.freezing_level_height].state)||0,m=e.lcl_height&&t.states[e.lcl_height]&&Number(t.states[e.lcl_height].state)||0,{scaleMax:u,labels:f}=ci(h,m),w=r!==null?li(r):0,$=d?.color||"#30d158",x=p||s?`
        <div class="pw-atmos-cape-fill" style="height:${Number(w)}%;background:linear-gradient(to top, ${g($)}40, ${g($)}08)">
          <div class="pw-atmos-fx" data-atmos-score="${Number(r)}" data-atmos-color="${g($)}"></div>
        </div>`:"",k=r!==null?ht(r,0,100):0,z=k>.1?`
        <div class="pw-atmos-column-glow${k>.3?" pulsing":""}" style="--glow-color:${g($)}40;--pulse-dur:${Wt(k,3,.8).toFixed(2)}s"></div>`:"",y=e.freezing_level_height&&t.states[e.freezing_level_height]?(()=>{let S=Number(t.states[e.freezing_level_height].state)||0,T=t.states[e.freezing_level_height]?.attributes?.unit_of_measurement||"m",R=Xt(S,u);return`
        <div class="pw-atmos-freeze-marker" style="bottom:${Number(R)}%">
          <span class="pw-atmos-freeze-label">\u2744 ${l(String(Math.round(S)))}${l(T)}</span>
          <div class="pw-atmos-freeze-line"></div>
        </div>`})():"",O=e.lcl_height&&t.states[e.lcl_height]?(()=>{let S=Number(t.states[e.lcl_height].state)||0,T=t.states[e.lcl_height]?.attributes?.unit_of_measurement||"m",R=Xt(S,u);return`
        <div class="pw-atmos-lcl-marker" style="bottom:${Number(R)}%">
          <span class="pw-atmos-lcl-label">\u2601 LCL ${l(String(Math.round(S)))}${l(T)}</span>
          <div class="pw-atmos-lcl-line"></div>
        </div>`})():"",N=e.wind_shear_0_6_km||"",E=N?t.states[N]:null,b=E&&Number(E.state)||0,_=E?no(b,i.attrs):null,F=E?(()=>{let T=(.2+Math.min(1,b/80)*.6).toFixed(2),R=_?.color||"#888888",Mt=E?.attributes?.unit_of_measurement||"km/h";return`
        <div class="pw-atmos-shear-arrow" style="--shear-color:${g(R)};opacity:${T}" title="Wind shear: ${l(String(Math.round(b)))} ${l(Mt)}">
          <svg width="16" height="100%" viewBox="0 0 16 100" preserveAspectRatio="none" style="display:block">
            <line x1="8" y1="5" x2="8" y2="95" stroke="${g(R)}" stroke-width="1.5" stroke-dasharray="4 3"/>
            <polygon points="4,8 8,0 12,8" fill="${g(R)}"/>
            <polygon points="4,92 8,100 12,92" fill="${g(R)}"/>
          </svg>
          <span class="pw-atmos-shear-label" style="color:${g(R)}">${l(String(Math.round(b)))} ${l(Mt)}</span>
        </div>`})():"",L=e.lapse_rate_700_500_hpa||"",A=L?t.states[L]:null,D=A&&Number(A.state)||0,G=A?(()=>{let{color:S}=da(D,i.attrs),T=D<6?.15:D<7.5?.25:.35,R=`${S}${Math.round(T*255).toString(16).padStart(2,"0")}`,Mt=Xt(3e3,u),et=Xt(5500,u),it=A?.attributes?.unit_of_measurement||"\xB0C/km";return`
        <div class="pw-atmos-lapse-overlay" style="bottom:${Number(Mt)}%;top:${Number(100-et)}%;background:linear-gradient(to top, transparent, ${g(R)} 30%, ${g(R)} 70%, transparent)" title="Lapse rate: ${l(D.toFixed(1))} \xB0C/km">
          <span class="pw-atmos-lapse-label" style="color:${g(S)}">${l(D.toFixed(1))} ${l(it)}</span>
        </div>`})():"",Y=e.cloud_cover_low&&t.states[e.cloud_cover_low]&&Number(t.states[e.cloud_cover_low].state)||0,K=e.cloud_cover_mid&&t.states[e.cloud_cover_mid]&&Number(t.states[e.cloud_cover_mid].state)||0,X=e.cloud_cover_high&&t.states[e.cloud_cover_high]&&Number(t.states[e.cloud_cover_high].state)||0,Q="";if(Y>0){let S=Xt(2e3,u),T=pa(Y);Q+=`<div class="pw-atmos-cloud-band" style="bottom:0%;top:${Number(100-S)}%;background:rgba(255,255,255,${T.toFixed(3)})"></div>`}if(K>0){let S=Xt(2e3,u),T=Xt(Math.min(6e3,u),u),R=pa(K);Q+=`<div class="pw-atmos-cloud-band" style="bottom:${Number(S)}%;top:${Number(100-T)}%;background:rgba(255,255,255,${R.toFixed(3)})"></div>`}if(X>0){let S=pa(X);Q+=`<div class="pw-atmos-cloud-high" style="opacity:${S.toFixed(3)};background:linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)"></div>`}let H=[],v=[];if(p){let S=ca(n);H.push(U(`${l(String(Math.round(n)))} J/kg`,"CAPE",S))}if(s){let S=ro(c);H.push(U(`${l(c>=0?"+":"")}${l(c.toFixed(1))}`,"Lifted Idx",S.color))}if(E){let S=Number(E.state)||0,T=E?.attributes?.unit_of_measurement||"km/h",R=_?.color||"";H.push(U(`${l(String(Math.round(S)))} ${l(T)}`,"Shear",R))}if(A){let S=A?.attributes?.unit_of_measurement||"\xB0C/km",T=da(D,i.attrs);H.push(U(`${l(D.toFixed(1))} ${l(S)}`,"Lapse Rate",T.color))}if(e.freezing_level_height&&t.states[e.freezing_level_height]){let S=Number(t.states[e.freezing_level_height].state)||0,T=t.states[e.freezing_level_height]?.attributes?.unit_of_measurement||"m";v.push(U(`${l(String(Math.round(S)))}${l(T)}`,"Freeze Lvl","#5ac8fa"))}if(e.lcl_height&&t.states[e.lcl_height]){let S=Number(t.states[e.lcl_height].state)||0,T=t.states[e.lcl_height]?.attributes?.unit_of_measurement||"m";v.push(U(`${l(String(Math.round(S)))} ${l(T)}`,"Cloud Base","#d0d0d0"))}if(e.soil_temperature&&t.states[e.soil_temperature]){let S=Number(t.states[e.soil_temperature].state)||0,T=t.states[e.soil_temperature]?.attributes?.unit_of_measurement||"\xB0C";v.push(U(`${l(S.toFixed(1))}${l(T)}`,"Soil Temp",""))}if(e.soil_moisture&&t.states[e.soil_moisture]){let S=Number(t.states[e.soil_moisture].state)||0;v.push(U(`${l(String(Math.round(S)))}%`,"Soil Moist",""))}let P=[...H,...v],V="";if(H.length>0&&(V+=`<div class="pulse-stats-row" style="margin:0 20px;border-top:none;padding-top:8px" role="img" aria-label="Instability indices">${H.join("")}</div>`),v.length>0&&(V+=`<div class="pulse-stats-row" style="margin:0 20px;border-top:none;padding-top:4px" role="img" aria-label="Vertical profile and surface">${v.join("")}</div>`),!d&&P.length===0)return null;let at=d?.color||"#30d158",yt=k<.15?pt("#30d158",.08):pt(at,k),ot=k>.3?`<div class="pw-tension-wash breathing" style="background:${g(pt(at,k))};--breathe-dur:${Wt(k).toFixed(2)}s"></div>`:"",St=ui(i,t,a,u),wt=St.length>0,kt=f.map(S=>`<span class="pw-atmos-scale-label">${S>=1e3?`${S/1e3}km`:String(S)}</span>`).join(`
          `);return`
    <div class="pw-section pw-atmos" style="background:${g(yt)}">
      ${ot}
      <div class="pw-section-header">
        <span class="pw-section-title">Atmosphere</span>
      </div>
      ${d?`<div class="pw-status-label" style="color:${g(d.color)}">${l(d.label)}</div>`:""}
      ${d?`<div class="pw-atmos-tier-desc">${l(d.desc)}</div>`:""}
      <div class="pw-atmos-column-wrap${wt?" pw-atmos-tappable":""}" role="img" aria-label="Atmospheric instability ${r!==null?l(String(r))+"%, "+l(d?.label||""):"unknown"}"${wt?' aria-expanded="false" data-has-detail':""}>
        <div class="pw-atmos-scale">
          ${kt}
        </div>
        <div class="pw-atmos-column">
          ${x}
          ${Q}
          ${z}
          ${G}
          ${y}
          ${O}
          ${F}
          <div class="pw-atmos-ground-label">Surface</div>
        </div>
      </div>
      ${wt?`<div class="pw-atmos-detail" aria-label="Atmospheric detail" role="region" style="max-height:0">${St}</div>`:""}
      ${V}
    </div>`}lt();var fi={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},gi="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",co={dry:"#30d158",comfortable:"#30d158",slightly_humid:"#ffd60a",humid:"#ff9f0a",oppressive:"#ff453a",clear:"#30d158",good:"#30d158",moderate:"#ffd60a",poor:"#ff9f0a",fog:"#ff453a"};function hi(t){return t<=30?"#5ac8fa":t<=60?"#30d158":t<=80?"#ff9f0a":"#ff453a"}function wi(t,o){if(t==null)return"Press";let a=Math.abs(Number(t));if(a<=1)return"Press";let e=o==="rising"?"Rising":o==="falling"?"Falling":"Press";return a>3?`${e} rapidly`:e}function xi({precipNow:t,precipLabel:o,slots:a,windSpeed:e,uvIndex:i,stabilityState:r}){if(t>0)return{icon:"\u{1F327}",text:o};let n=a.slice(0,2);for(let s of n)if((Number(s.precipitation_probability)||0)>=60)return{icon:"\u{1F327}",text:`${Number(s.snowfall)>0?"Snow":"Rain"} likely within ${n.indexOf(s)+1}h`};for(let s of n)if((Number(s.precipitation_probability)||0)>=40)return{icon:"\u{1F327}",text:`${Number(s.snowfall)>0?"Snow":"Rain"} possible within ${n.indexOf(s)+1}h`};if(r&&["slight","enhanced","moderate","high"].includes(r)){let s=Math.max(...n.map(d=>Number(d.cape)||0));if(s>1e3)return{icon:"\u26A1",text:`Thunderstorms possible \u2014 CAPE ${s}J/kg`}}if(e>=39)return{icon:"\u{1F4A8}",text:`Strong winds ${Math.round(e)} km/h`};if(i>=6)return{icon:"\u2600\uFE0F",text:"High UV \u2014 protection needed"};let p=0;for(let s of a)if((Number(s.precipitation_probability)||0)<20)p++;else break;return p>=2?{icon:"\u2713",text:`Clear for the next ${p}h`}:{icon:"",text:""}}function bi(t,o,a){let e=t.map(d=>Number(d.cape)||0),i=Math.max(...e,300),r=Math.max(...e),n=e.indexOf(r),p=e.map((d,h)=>({x:h/Math.max(t.length-1,1)*o,y:a-d/i*a})).map((d,h)=>`${h===0?"M":"L"}${d.x.toFixed(1)},${d.y.toFixed(1)}`).join(" "),s=`${p} L${o},${a} L0,${a} Z`;return{svgPath:p,areaPath:s,peakValue:r,peakIndex:n,maxCape:i}}function vi(t,o,a,e,i,r,n,c){let p=[];return n>0&&p.push({name:"Snow",value:n,unit:c}),a>0&&p.push({name:"Rain",value:a,unit:e}),i>0&&p.push({name:"Showers",value:i,unit:r}),p.length>0?`${p.map(d=>`${l(d.name)} ${l(d.value.toFixed(1))} ${l(d.unit)}`).join(" \xB7 ")} now`:t>0?`Precipitation \u2014 next 12h \xB7 ${l(t.toFixed(1))} ${l(o)} now`:"Precipitation \u2014 next 12h"}function $t(t){return!t||isNaN(t.getTime())?"":`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function po({hass:t,config:o,discovery:a,weatherEntity:e,forecastData:i}){let r=e.attributes,n=a.atmosCe,c=e.state||"sunny",p=c==="clear-night"||t.states["sun.sun"]?.state==="below_horizon";function s(q,rt){if(n[q]){let I=Number(t.states[n[q]]?.state);if(!isNaN(I))return I}return Number(r[rt]??0)||0}let d=s("temperature","temperature"),h=s("apparent_temperature","apparent_temperature")||d,m=s("humidity","humidity"),u=s("wind_speed","wind_speed"),f=s("wind_direction","wind_bearing"),w=s("wind_gusts","wind_gusts"),$=s("dew_point","dew_point"),x=s("visibility","visibility"),k=s("pressure","pressure");function z(q,rt){return n[q]&&t.states[n[q]]?.attributes?.unit_of_measurement||rt}let y=z("temperature","\xB0C"),O=z("visibility","km"),N=z("pressure","hPa"),E=z("dew_point","\xB0C"),b=r.forecast,_=Number(b?.[0]?.templow??d-5),F=Number(b?.[0]?.temperature??d+5),L=a.atmosCe.uv_index,A=L?Number(t.states[L]?.state)||0:Number(r.uv_index??0),D=n.precipitation?t.states[n.precipitation]:null,G=D&&Number(D.state)||0,Y=D?.attributes?.unit_of_measurement||"mm",K=n.rain?t.states[n.rain]:null,X=n.showers?t.states[n.showers]:null,Q=n.snowfall?t.states[n.snowfall]:null,H=K&&Number(K.state)||0,v=X&&Number(X.state)||0,P=Q&&Number(Q.state)||0,V=K?.attributes?.unit_of_measurement||"mm",at=X?.attributes?.unit_of_measurement||"mm",yt=Q?.attributes?.unit_of_measurement||"cm",ot=n.uv_index_clear_sky?t.states[n.uv_index_clear_sky]:null,St=ot&&Number(ot.state)||0,wt=n.dew_point_comfort?t.states[n.dew_point_comfort]:null,kt=n.visibility_category?t.states[n.visibility_category]:null,S=n.feels_like_context?t.states[n.feels_like_context]:null,T=n.pressure_trend?t.states[n.pressure_trend]:null,R=n.golden_hour_morning_start?new Date(String(t.states[n.golden_hour_morning_start]?.state)):null,Mt=n.golden_hour_evening_start?new Date(String(t.states[n.golden_hour_evening_start]?.state)):null,et=n.golden_hour_evening_end?new Date(String(t.states[n.golden_hour_evening_end]?.state)):null,it=n.blue_hour_morning_start?new Date(String(t.states[n.blue_hour_morning_start]?.state)):null,Tt=n.blue_hour_evening_start?new Date(String(t.states[n.blue_hour_evening_start]?.state)):null,Ot=null;a.atmosCe.cloud_cover&&(Ot={total:Number(t.states[a.atmosCe.cloud_cover]?.state)||0,low:Number(t.states[a.atmosCe.cloud_cover_low]?.state)||0,mid:Number(t.states[a.atmosCe.cloud_cover_mid]?.state)||0,high:Number(t.states[a.atmosCe.cloud_cover_high]?.state)||0});let Zt=n.freezing_level_height?t.states[n.freezing_level_height]:null,xe=Zt&&Number(Zt.state)||0,Jt=(n.stability_assessment?t.states[n.stability_assessment]:null)?.state||"",oe=n.lifted_index?t.states[n.lifted_index]:null,ie=oe&&Number(oe.state)||0,re=g(fi[c]||gi),be=Math.max(F-_,1),M=Math.max(0,Math.min(100,(d-_)/be*100)),Z=De(f),W=`data-condition="${l(c)}" data-night="${p}" data-cloud='${l(JSON.stringify(Ot||""))}'`,Ct=ht(d,20,42),Et=ht(d,15,-10),Ht=Math.max(Ct,Et),Ve=B(d),ne=Ht>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${ge(Ve,Ht)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",Bt=Oe(Ht),ve=Bt?`<div class="pw-tension-vignette" style="background: ${g(Bt)}"></div>`:"",ye=P>0?`<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${l(P.toFixed(1))} ${l(yt)}</div>`:"",se=S?.state||"",_t=S?.attributes?.difference,qe="";se==="wind_chill"&&_t!==null&&_t!==void 0?qe=`<div class="pw-feels-context">Wind chill ${l(String(Math.round(Number(_t))))}\xB0</div>`:se==="heat_index"&&_t!==null&&_t!==void 0&&(qe=`<div class="pw-feels-context">Heat index +${l(String(Math.round(Number(_t))))}\xB0</div>`);let Ro=["marginal","slight","enhanced","moderate","high"],ha="";if(Jt&&Ro.includes(Jt)){let q=vt[Jt];if(q){let rt=g(q.color),I=`\u26A1 ${l(q.label)}`;if(oe&&ie<0){let Gt=Pt.find(At=>ie>=At.min)||Pt[Pt.length-1];I+=` \xB7 <span style="color:${g(Gt.color)}">LI ${l(String(ie))}</span>`}ha=` <span class="pw-stability-badge" style="background:${rt}33; color:${rt}">${I}</span>`}}let Ye=kt?.state||"",Do=Ye&&!["unavailable","unknown"].includes(Ye)&&co[Ye]||"",Xe=wt?.state||"",Lo=Xe&&!["unavailable","unknown"].includes(Xe)&&co[Xe]||"",wa=T?.attributes?.trend_symbol||"",xa=T?.state==="rising"?"#30d158":T?.state==="falling"?"#ff9f0a":T?.state==="steady"?"#5ac8fa":"",Io=ot&&Math.abs(St-A)>=.5,Ke=T?.attributes?.change_3h,_e=wi(Ke!=null?Number(Ke):null,T?.state||"");if(_e==="Press"&&T?.state){let q=T.state;q==="rising"?_e="Rising":q==="falling"&&(_e="Falling")}let Oo=xa||(T?"#5ac8fa":""),ba=Za(u),Ho=Re(u),Po=w>u+5,Wo=u>0&&w/u>1.5,Uo=Po?Wo?` / <b>${l(Math.round(w))}</b>`:` / ${l(Math.round(w))}`:"",jo=`<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(f)}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${g(ba)}" opacity="0.8"/></svg>`,Bo=`${l(Math.round(u))}${Uo} ${jo}${l(Z)}`,Go=`linear-gradient(to right, ${g(B(_))}, ${g(B(F))})`,va="";if(Zt&&xe<5e3&&_<=0){let q=Math.max(0,Math.min(100,(0-_)/be*100)),rt=Zt?.attributes?.unit_of_measurement||"m";va=`<div class="pw-arc-freeze" style="left:${Number(q)}%">
            <div class="pw-arc-freeze-label">\u2744 ${l(String(Math.round(xe)))}${l(rt)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`}let ya="",$e=t.states["sun.sun"];if($e){let q=$e.attributes?.next_rising,rt=$e.attributes?.next_setting;if(q&&rt){let I=new Date(q),Gt=new Date(rt),At=new Date,ut=I.getTime()>At.getTime()?new Date(I.getTime()-864e5):I,Ft=Gt.getTime()>At.getTime()?Gt:new Date(Gt.getTime()-864e5);Ft.getTime()>ut.getTime()+864e5&&(Ft=new Date(Ft.getTime()-864e5)),ut.getTime()>Ft.getTime()&&(ut=new Date(ut.getTime()-864e5));let xt=Ie(At,ut,Ft,R,et,it,Tt,Mt),J=Le[xt],le=$e.state==="above_horizon",j=0,nt=ut.getTime(),mt=Ft.getTime(),st=At.getTime();if(xt===3){let gt=mt-nt;gt>0&&(j=Math.max(0,Math.min(100,(st-nt)/gt*100)))}else if(xt===1){let gt=it?it.getTime():nt-36e5,ce=(R?R.getTime():nt-18e5)-gt;ce>0&&(j=Math.max(0,Math.min(100,(st-gt)/ce*100)))}else if(xt===2){let gt=R?R.getTime():nt-18e5,Yt=nt-gt;Yt>0&&(j=Math.max(0,Math.min(100,(st-gt)/Yt*100)))}else if(xt===4){let Yt=(et?et.getTime():mt+18e5)-mt;Yt>0&&(j=Math.max(0,Math.min(100,(st-mt)/Yt*100)))}else if(xt===5){let gt=et?et.getTime():mt+18e5,ce=(et?et.getTime()+36e5:Tt?Tt.getTime()+18e5:mt+36e5)-gt;ce>0&&(j=Math.max(0,Math.min(100,(st-gt)/ce*100)))}let ft="";switch(xt){case 1:ft="background: #5ac8fa";break;case 2:ft="background: #ff9f0a";break;case 3:ft="background: linear-gradient(to right, #ff9f0a, #ffd60a)";break;case 4:ft="background: #ff6b35";break;case 5:ft="background: #5ac8fa";break}let Nt="",Vt="",qt="";switch(xt){case 0:break;case 1:Nt=$t(it),Vt=$t(R),qt="#5ac8fa";break;case 2:Nt=$t(R),Vt=$t(ut),qt="#ff9f0a";break;case 3:Nt=$t(ut),Vt=$t(Ft);break;case 4:Nt=$t(Mt||Ft),Vt=$t(et),qt="#ff6b35";break;case 5:Nt=$t(Tt),Vt=$t(et?new Date(et.getTime()+36e5):null),qt="#5ac8fa";break}let Qe=j,Se=le?"":xt===0?"\u{1F319}":"",Ze=xt===0?"0.7":"1",Qo=`left:${Number(Qe)}%; background:${g(J.labelColor)}; box-shadow: 0 0 6px ${g(J.labelColor)}66`,Ta=qt?` style="color:${g(qt)}"`:"";ya=`
      <div class="pw-day-arc" style="opacity:${Ze}">
        <span class="pw-day-arc-label"${Ta}>${l(Nt)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(j)}%${ft?"; "+ft:""}"></div>
          <div class="pw-day-arc-marker" style="${Qo}">${Se}</div>
        </div>
        <span class="pw-day-arc-label"${Ta}>${l(Vt)}</span>
      </div>`}}let _a="",$a="",Sa="",ka="",Ma=i?.hourly||[];if(Ma.length>0){let q=new Date,I=Ma.filter(J=>new Date(J.datetime)>=q).slice(0,12),Gt=I.some(J=>Number(J.precipitation_probability)>0),At=vi(G,Y,H,V,v,at,P,yt),ut=xi({precipNow:G,precipLabel:At,slots:I,windSpeed:u,uvIndex:A,stabilityState:Jt});if(ut.text&&(ka=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">${l(ut.icon)}</span> ${l(ut.text)}
      </div>`),Gt){let J=I.map(nt=>{let mt=Math.min(100,Math.max(0,Number(nt.precipitation_probability)||0)),st=Number(nt.snowfall)||0,ft=(Number(nt.rain)||0)+(Number(nt.showers)||0),Nt=st>0;if(Nt&&ft>0){let Qe=st+ft,Se=Math.round(mt*st/Qe),Ze=mt-Se;return`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number(Ze)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number(Se)}%"></div></div>`}return`<div class="pulse-precip-slot"><div class="${Nt?"pulse-precip-fill pw-precip-snow":"pulse-precip-fill"}" style="height: ${mt}%"></div></div>`}).join(""),j=I[Math.floor(I.length/2)]?`+${Math.floor(I.length/2)}h`:"";_a=`
      <div style="position: relative; z-index: 2; margin: 16px 20px 0;">
        <div class="pw-precip-label">${At}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${J}</div>
        <div class="pw-precip-times"><span>Now</span><span>${l(j)}</span><span>+${l(String(I.length))}h</span></div>
      </div>`}if(I.some(J=>Number(J.cape)>300)){let j=bi(I,200,24),nt=j.peakIndex/Math.max(I.length-1,1)*200,mt=j.peakValue>=1e3?`${(j.peakValue/1e3).toFixed(1)}k`:String(Math.round(j.peakValue)),st=I[j.peakIndex]?.datetime?new Date(I[j.peakIndex].datetime):null,ft=st?`${String(st.getHours()).padStart(2,"0")}:${String(st.getMinutes()).padStart(2,"0")}`:"";$a=`
      <div style="position: relative; z-index: 2; margin: 4px 20px 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="capeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${j.areaPath}" fill="url(#capeGrad)"/>
            <path d="${j.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${j.peakValue>0?`<div class="pw-cape-peak" style="left:${Number(nt)}px">${l(mt)} ${l(ft)}</div>`:""}
        </div>
      </div>`}I.some(J=>J.dew_point!==void 0&&J.dew_point!==null)&&(Sa=`
      <div style="position: relative; z-index: 2; margin: 2px 20px 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${I.map(le=>{let j=Number(le.dew_point)||0;return`<div class="pw-comfort-slot" style="background:${g(ao(j))}"></div>`}).join("")}</div>
      </div>`)}let Vo=B(h),qo=Ot!==null?eo(Ot.total):"",Yo=hi(m),Xo=`${l(Math.round(k))} ${l(N)}${wa?` <span style="color:${g(xa)}">${l(wa)}</span>`:""}`,Ko=`${l(Math.round(A))}${Io?` <span style="opacity:0.5">/ ${l(String(Math.round(St)))}</span>`:""}`;return`
    <div class="pw-section pw-atmosphere" style="background: ${re}; min-height: 280px;">
      ${ve}
      <div class="pw-fx" ${W} role="img" aria-label="${l(c)} weather effects"></div>
      <div class="pw-section-header">
        <span class="pw-section-title">Weather</span>
      </div>
      <div class="pw-hero">
        <div class="pw-hero-temp" style="color: ${g(B(d))}; ${ne}">${l(d.toFixed(1))}${l(y)}</div>
        <div class="pw-hero-condition">${l(oo(c))}${ha}</div>
        ${ye}
        ${qe}
      </div>
      <div class="pw-temp-arc">
        <span class="pw-arc-label" style="color:${g(B(_))}">L:${l(Math.round(_))}\xB0</span>
        <div class="pw-arc-bar" style="background:${Go}" role="img" aria-label="Temperature range ${Math.round(_)}${l(y)} to ${Math.round(F)}${l(y)}">
          <div class="pw-arc-marker" style="left: ${Number(M)}%"></div>
          ${va}
        </div>
        <span class="pw-arc-label" style="color:${g(B(F))}">H:${l(Math.round(F))}\xB0</span>
      </div>
      ${ya}
      ${ka}
      ${_a}
      ${Sa}
      ${$a}
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2; border-top: none; padding-top: 8px;" role="img" aria-label="Wind and surface observations">
        ${U(Bo,Ho.name,ba)}
        ${U(`${l(h.toFixed(1))}${l(y)}`,"Feels",Vo)}
        ${U(`${l(Math.round(x))} ${l(O)}`,"Vis",Do)}
        ${U(`${l($.toFixed(1))}${l(E)}`,"Dew",Lo)}
      </div>
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2; padding-bottom: 16px; border-top: none; padding-top: 4px;" role="img" aria-label="Atmospheric conditions">
        ${U(Ot!==null?l(Math.round(Ot.total)+"%"):"--","Cloud",qo)}
        ${U(`${l(Math.round(m))}%`,"Humid",Yo)}
        ${U(Xo,_e,Oo)}
        ${U(Ko,"UV",to(A))}
      </div>
    </div>`}function yi(t,o){if(o)return"Now";try{return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}function _i(t,o){if(o===0)return"Today";try{return new Date(t).toLocaleDateString([],{weekday:"short"})}catch{return""}}function $i(t,o,a){if(!t||t.length<2)return{linePath:"",areaPath:"",min:0,max:0};let e=t.map(h=>Number(h.temperature)||0),i=Math.min(...e),r=Math.max(...e),n=r-i||1,c=4,s=e.map((h,m)=>{let u=m/(e.length-1)*o,f=c+(r-h)/n*(a-c*2);return{x:u,y:f}}).map((h,m)=>`${m===0?"M":"L"}${h.x.toFixed(1)},${h.y.toFixed(1)}`).join(" "),d=`${s} L${o},${a} L0,${a} Z`;return{linePath:s,areaPath:d,min:i,max:r}}function uo({hass:t,config:o,discovery:a,forecastData:e}){let i=o.mode||"both",r=e?.hourly||[],n=e?.daily||[];if(r.length===0&&n.length===0)return null;let c=a.atmosCe,s=(c.temperature?t.states[c.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",d=i==="both"||i==="hourly",h=i==="both"||i==="daily",m=["both","hourly","daily"].map(w=>`<button class="pw-tab" role="tab" aria-selected="${w===i}" tabindex="${w===i?"0":"-1"}" data-mode="${l(w)}">${l(w.charAt(0).toUpperCase()+w.slice(1))}</button>`).join(""),u="";if(d&&r.length>0){let w=Date.now(),$=r.filter(N=>{let E=new Date(String(N.datetime||""));return!isNaN(E.getTime())&&E.getTime()>=w-36e5}),x=$.slice(0,24).map((N,E)=>{let b=Number(N.temperature)||0,_=Number(N.precipitation_probability)||0,F=ht(_,0,100),L=F>.1?` style="background: rgba(90,200,250,${(F*.12).toFixed(3)})"`:"";return`
        <div class="pw-hour-col ${E===0?"pw-current":""}"${L}>
          <div class="pw-hour-time">${l(yi(String(N.datetime||""),E===0))}</div>
          <div class="pw-hour-icon">${fe(String(N.condition||""))}</div>
          <div class="pw-hour-temp" style="color: ${g(B(b))}">${l(Math.round(b))}${l(s)}</div>
          ${_>0?`<div class="pw-hour-precip">${l(Math.round(_))}%</div>`:""}
        </div>`}).join(""),k=300,z=40,y=$i($.slice(0,24),k,z),O=y.linePath?`
      <div class="pw-sparkline-wrap">
        <svg width="100%" height="${z}" viewBox="0 0 ${k} ${z}" preserveAspectRatio="none" role="img" aria-label="Temperature trend">
          <title>Temperature sparkline</title>
          <defs>
            <linearGradient id="pw-spark-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${g(B(y.max))}" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="${g(B(y.min))}" stop-opacity="0.05"/>
            </linearGradient>
          </defs>
          <path d="${l(y.areaPath)}" fill="url(#pw-spark-grad)"/>
          <path d="${l(y.linePath)}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        </svg>
      </div>`:"";u=`
      <div class="pw-hourly-strip">${x}</div>
      ${O}`}let f="";if(h&&n.length>0){let w=n.map(y=>[Number(y.temperature)||0,Number(y.templow)||0]).flat(),$=Math.min(...w),x=Math.max(...w),k=x-$||1;f=`<div class="pw-daily-rows">${n.slice(0,7).map((y,O)=>{let N=Number(y.temperature)||0,E=Number(y.templow)||0,b=Number(y.precipitation_probability)||0,_=(E-$)/k*100,F=(N-E)/k*100,L=ht(b,0,100),A=L>.1?` style="background: rgba(90,200,250,${(L*.08).toFixed(3)}); border-radius: 4px"`:"",D=N===x,G=E===$,Y=D?`; text-shadow: ${ge(g(B(N)),.6)}`:"",K=G?`; text-shadow: ${ge(g(B(E)),.6)}`:"";return`
        <div class="pw-daily-row"${A}>
          <span class="pw-daily-day">${l(_i(String(y.datetime||""),O))}</span>
          <span class="pw-daily-icon">${fe(String(y.condition||""))}</span>
          <span class="pw-daily-precip">${b>0?`${l(Math.round(b))}%`:""}</span>
          <div class="pw-daily-bar-wrap" role="img" aria-label="Temperature range ${Math.round(E)}${l(s)} to ${Math.round(N)}${l(s)}">
            <div class="pw-daily-bar" style="left: ${Number(_)}%; width: ${Number(F)}%; background: linear-gradient(to right, ${g(B(E))}, ${g(B(N))})"></div>
          </div>
          <span class="pw-daily-low" style="color: var(--pulse-text-secondary)${K}">${l(Math.round(E))}${l(s)}</span>
          <span class="pw-daily-high" style="${Y?Y.slice(2):""}">${l(Math.round(N))}${l(s)}</span>
        </div>`}).join("")}</div>`}return`
    <div class="pw-section pw-forecast" style="background: radial-gradient(ellipse at 50% 20%, rgba(90,200,250,0.06) 0%, transparent 70%)">
      <div class="pw-section-header">
        <span class="pw-section-title">Forecast</span>
        <div class="pw-tabs" role="tablist">${m}</div>
      </div>
      ${u}
      ${f}
    </div>`}lt();var ae=240,Rt=ae/2,Dt=ae/2,We=90,mo=.12,He=6,Pe=.5,fo=.25,Si=.3,ki=6,go=.7,Mi=.2,Ti=4,Ci=3.3,Ei=15,Ai=35,Fi=.08,Ni=.2,zi=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function ho(t){return(t-90)*Math.PI/180}function Ri(t){let o=t*Math.PI/180;return{x:Math.sin(o),y:-Math.cos(o)}}function Ut(t,o){return{x:Rt+o*Math.cos(t),y:Dt+o*Math.sin(t)}}function Di(t,o,a,e){let i=Math.min(t/Fe,1)*We,r=Ut(o-fo,i),n=Ut(o+fo,i),c=a>Si?"pw-gust-sweep":"",p=Math.max(.6,2.5-a*2).toFixed(2),s=(.15+a*.3).toFixed(2),d=`transform-origin:${Rt}px ${Dt}px;--gust-dur:${p}s;--gust-peak:${s}`;return bt("path",{class:c,d:`M${Rt},${Dt} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${n.x.toFixed(1)},${n.y.toFixed(1)} Z`,fill:e,opacity:.15,style:d})}function Li(t,o,a,e){let i=Math.min(t/Fe,1)*We,r=Ut(o,i),n=Ut(o-mo,i*.7),c=Ut(o+mo,i*.7),p={x:r.x-He*Math.cos(o-Pe),y:r.y-He*Math.sin(o-Pe)},s={x:r.x-He*Math.cos(o+Pe),y:r.y-He*Math.sin(o+Pe)},d=a*ki,h=Math.max(.4,4-a*3.6),m=d>Mi?`animation:pw-arrowSway ${h.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(d*go).toFixed(2)}deg;--sway-back:${(-d*(1-go)).toFixed(2)}deg`:"",u=`transform-origin:${Rt}px ${Dt}px;filter:drop-shadow(0 0 6px ${e}60);${m}`,f=bt("path",{d:`M${Rt},${Dt} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} Z`,fill:e,opacity:.5}),w=bt("line",{x1:Rt,y1:Dt,x2:r.x.toFixed(1),y2:r.y.toFixed(1),stroke:e,"stroke-width":2.5,"stroke-linecap":"round"}),$=bt("path",{d:`M${r.x.toFixed(1)},${r.y.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)} L${s.x.toFixed(1)},${s.y.toFixed(1)} Z`,fill:e});return bt("g",{style:u},f+w+$)}function wo({hass:t,config:o,discovery:a,weatherEntity:e}){let i=e.attributes,r=a.atmosCe,n=o.speed_mode||"speed";function c(v,P){if(r[v]){let V=Number(t.states[r[v]]?.state);if(!isNaN(V))return V}return Number(i[P]??0)||0}let p=c("wind_speed","wind_speed"),s=c("wind_gusts","wind_gust_speed")||c("wind_gusts","wind_gusts")||p,d=c("wind_direction","wind_bearing"),m=(r.wind_speed?t.states[r.wind_speed]:null)?.attributes?.unit_of_measurement||i.wind_speed_unit||"km/h",u=n==="gust"?s:p,f=Math.min(p/Fe,1),w=Re(u),$=la(u),x=ee[$]||ee.calm,k=De(d),z=ho(d),y=Ri(d),O=Math.round(f*Ea),N=Ti-f*Ci,E=Fi+f*Ni,b=Ei+f*Ai,_=-y.y,F=y.x,L=[];for(let v=0;v<O;v++){let P=(Math.random()-.5)*400,V=-120-Math.random()*60,at=420+Math.random()*60,yt=(b*(.6+Math.random()*.8)).toFixed(1),ot=(N+Math.random()*N*.5).toFixed(2),St=(Math.random()*3).toFixed(2),wt=(E*(.5+Math.random()*.5)).toFixed(3),kt=(V*y.x+P*_).toFixed(1),S=(V*y.y+P*F).toFixed(1),T=(at*y.x+P*_).toFixed(1),R=(at*y.y+P*F).toFixed(1);L.push(`<div class="pw-streak" style="left:50%;top:50%;width:${yt}px;height:1px;transform:rotate(${d-90}deg);animation-duration:${ot}s;animation-delay:${St}s;opacity:${wt};background:linear-gradient(to right, transparent, ${x}44, transparent);--sx:${kt}px;--sy:${S}px;--ex:${T}px;--ey:${R}px"></div>`)}let A=[];for(let v=1;v<=3;v++)A.push(bt("circle",{cx:Rt,cy:Dt,r:v*30,fill:"none",stroke:x,"stroke-width":.5,opacity:.08+v*.02}));for(let v of zi){let P=ho(v.a),V=Ut(P,20),at=Ut(P,We+4),yt=Ut(P,We+16),ot=v.l.length===1;A.push(bt("line",{x1:V.x.toFixed(1),y1:V.y.toFixed(1),x2:at.x.toFixed(1),y2:at.y.toFixed(1),stroke:x,"stroke-width":.5,opacity:.12})),A.push(bt("text",{x:yt.x.toFixed(1),y:yt.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:ot?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":ot?11:9,"font-weight":ot?600:400},l(v.l)))}A.push(Di(s,z,f,x)),A.push(Li(u,z,f,x)),A.push(bt("circle",{cx:Rt,cy:Dt,r:18,fill:x,opacity:.06})),A.push(bt("circle",{cx:Rt,cy:Dt,r:3,fill:x}));let D=f>ta?(f-ta)*5:0,G=Math.max(.15,.4-f*.25),Y="";D>.1&&(Y=`--dx:${(D*y.x).toFixed(2)}px;--dy:${(D*y.y).toFixed(2)}px;animation:pw-roseShake ${G.toFixed(2)}s ease-in-out infinite`);let K=Math.round(12+f*50).toString(16).padStart(2,"0"),X=Math.round(6+f*25).toString(16).padStart(2,"0"),Q=`radial-gradient(ellipse at 50% 50%, ${x}${K} 0%, ${x}${X} 40%, transparent 85%)`,H=["speed","gust"].map(v=>`<button class="pw-tab" role="tab" aria-selected="${v===n}" tabindex="${v===n?"0":"-1"}" data-mode="${l(v)}">${l(v.charAt(0).toUpperCase()+v.slice(1))}</button>`).join("");return`
    <div class="pw-section pw-wind" style="background: ${g(Q)}">
      <div class="pw-section-header">
        <span class="pw-section-title">Wind</span>
        <div class="pw-tabs" role="tablist">${H}</div>
      </div>
      <div class="pw-wind-streaks">${L.join("")}</div>
      <div class="pw-rose-wrap" style="${Y}">
        <svg class="pw-rose-svg" width="${ae}" height="${ae}" viewBox="0 0 ${ae} ${ae}" style="display:block" role="img" aria-label="Wind compass rose showing ${l(Math.round(u))} ${l(m)} from ${l(k)}">
          <title>Wind direction compass</title>
          ${A.join("")}
        </svg>
        <div class="pw-wind-center">
          <div class="pw-wind-speed" style="color: ${g(x)}">${l(Math.round(u))}</div>
          <div class="pw-wind-unit">${l(m)} \xB7 ${l(Math.round(d))}\xB0 ${l(k)}</div>
          <div class="pw-wind-beaufort" style="color: ${g(x)}">${l(w.name)}</div>
          <div class="pw-wind-beaufort-desc">${l(w.desc)}</div>
        </div>
      </div>
    </div>`}lt();function Ii(t,o,a,e){if(a&&e){let n=(o==="us"?ue:de).find(c=>c.label.toLowerCase()===a.toLowerCase());return{label:a,color:e,desc:n?.desc||""}}let i=o==="us"?ue:de;for(let r of i)if(t<=r.max)return r;return i[i.length-1]}function Oi(t,o){let a=t/o;return a<.3?"#30d158":a<.6?"#ff9f0a":"#ff453a"}function xo({hass:t,config:o,discovery:a,weatherEntity:e}){let i=o.scale||"eu",r=i==="us"?"us_aqi":"european_aqi",n=o.aqi_entity||a.atmosCe[r];if(!n||!t.states[n])return null;let c=t.states[n],p=Number(c.state)||0,s=c.attributes?.category||null,d=c.attributes?.color||null,h=Ii(p,i,s,d),m=Ja(p,s,d),u=i==="us"?300:100,f=Math.min(100,p/u*100),w=ht(p,0,u),$=Wt(w,3,.8).toFixed(2),x=88,k=110,z=110,y=12,O=Math.PI*x,N=f/100*O,E=`M${k-x},${z} A${x},${x} 0 0 1 ${k+x},${z}`,b=`
    <div class="pw-aqi-gauge-unit" role="img" aria-label="Air quality index ${p}, ${l(h.label)}">
      <svg width="220" height="120" viewBox="0 0 220 120" style="display:block;--gc:${g(m)};--glow-color:${g(m)};animation:pw-gaugeGlow ${$}s ease-in-out infinite">
        <title>AQI gauge: ${l(String(p))} - ${l(h.label)}</title>
        <path d="${E}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="${y}" stroke-linecap="round"/>
        <path d="${E}" fill="none" stroke="${g(m)}" stroke-width="${y}" stroke-linecap="round"
          stroke-dasharray="${N.toFixed(1)} ${O.toFixed(1)}"/>
      </svg>
      <div class="pw-aqi-gauge-center">
        <div class="pw-aqi-value" style="color: ${g(m)}">${l(String(p))}</div>
        <div class="pw-aqi-scale-label">${l(i==="us"?"US AQI":"European AQI")}</div>
      </div>
    </div>`,_=["eu","us"].map(H=>`<button class="pw-tab" role="tab" aria-selected="${H===i}" tabindex="${H===i?"0":"-1"}" data-scale="${l(H)}">${l(H.toUpperCase())}</button>`).join(""),F=[];for(let H of Ia){let v=a.atmosCe[H.key];if(!v||!t.states[v])continue;let P=Number(t.states[v].state)||0,V=Oi(P,H.maxEu);F.push(`
      <div class="stat">
        <div class="pw-stat-value">${l(P.toFixed(1))}</div>
        <div class="pw-stat-label"><span style="background: ${g(V)}; display:inline-block; width:5px; height:5px; border-radius:50%; margin-right:3px; vertical-align:middle"></span>${l(H.label)}</div>
      </div>`)}let L=F.length>0?F.join(""):"",A=a.atmosCe.pm2_5,D=a.atmosCe.pm10,G=A&&Number(t.states[A]?.state)||0,Y=D&&Number(t.states[D]?.state)||0,K=w<.15?pt("#30d158",.12):pt(m,w),X=Oe(w,"80,70,50"),Q=X?`<div class="pw-tension-vignette" style="background: ${g(X)}"></div>`:"";return`
    <div class="pw-section pw-aqi" data-pm25="${Number(G)}" data-pm10="${Number(Y)}" style="background: ${g(K)}">
      ${Q}
      <div class="pw-section-header">
        <span class="pw-section-title">Air Quality</span>
        <div class="pw-tabs" role="tablist">${_}</div>
      </div>
      <div class="pw-fx" role="img" aria-label="Air quality atmospheric effects"></div>
      ${b}
      <div class="pw-aqi-category" style="color: ${g(m)}">${l(h.label)}</div>
      <div class="pw-aqi-desc">${l(h.desc)}</div>
      ${L?`<div class="pulse-stats-row" style="margin: 16px 20px 0; padding-top: 12px">${L}</div>`:""}
    </div>`}lt();var ko=360,Mo=190,Lt=130,we=ko/2,Kt=Mo-24,bo=we-Lt,vo=we+Lt,Ue=Math.PI*Lt,Hi=8,yo=12,_o=16,Pi=[{top:"#0a0a2a",bottom:"#1a1a3a"},{top:"#1a2a5a",bottom:"#3a5a8a"},{top:"#8a4a1a",bottom:"#cc7a2a"},{top:"#2a5a9a",bottom:"#6aacdc"},{top:"#8a3a1a",bottom:"#cc5a2a"},{top:"#1a2050",bottom:"#3a4a7a"}];function ua(t){let o=Math.PI*(1-t);return{x:we+Lt*Math.cos(o),y:Kt-Lt*Math.sin(o)}}function Wi(t){let o=(t%zt+zt)%zt;return Ua[Math.floor(o/zt*8)%8]}function Ui(t){return(t%zt+zt)%zt<zt/2}var $o=864e5;function ji(t,o,a){let e=t.getTime(),i=o.getTime(),r=a.getTime();if(i<=e){if(r>i&&r>=e){let n=r-i;return{visible:!0,progress:Math.max(0,Math.min(1,(e-i)/n))}}if(r<i){let n=r+$o;if(e<=n){let c=n-i;return{visible:!0,progress:Math.max(0,Math.min(1,(e-i)/c))}}}return{visible:!1,progress:0}}if(r<i&&e<r){let n=i-$o,c=r-n;return{visible:!0,progress:Math.max(0,Math.min(1,(e-n)/c))}}return{visible:!1,progress:0}}function Bi(t){if(!t||isNaN(t)||t<=0)return"--";let o=Math.floor(t),a=Math.round((t-o)*60);return o+" hr "+String(a).padStart(2,"0")+" min"}function he(t){return!t||isNaN(t.getTime())?"--:--":t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}function dt(t,o,a){let e=Object.entries(o).map(([i,r])=>" "+i+'="'+r+'"').join("");return a!==void 0?"<"+t+e+">"+a+"</"+t+">":"<"+t+e+"/>"}var Gi=[{offset:"0%",color:"#fe9d36",opacity:.05},{offset:"8%",color:"#fe9d36",opacity:.3},{offset:"15%",color:"#fe9d36",opacity:.6},{offset:"25%",color:"#fe9d36",opacity:.8},{offset:"35%",color:"#fe8d36",opacity:.8},{offset:"45%",color:"#fc6540",opacity:.8},{offset:"55%",color:"#df3de7",opacity:.8},{offset:"65%",color:"#613be8",opacity:.8},{offset:"75%",color:"#223fd3",opacity:.8},{offset:"85%",color:"#183fd0",opacity:.7},{offset:"95%",color:"#183fd0",opacity:.3},{offset:"100%",color:"#183fd0",opacity:.05}];function Vi(t){switch(t){case 2:case 4:return 1;case 1:case 5:return 1;case 0:return 1;default:return 1}}function So(t,o){let a="pw-twi-grad-"+t,e=t==="am"?"M12,4 Q8,60 8,116 Q9,170 34,227":"M34,4 Q38,60 38,116 Q37,170 12,227",i=Gi.map(function(r){return'<stop offset="'+r.offset+'" stop-color="'+r.color+'" stop-opacity="'+r.opacity+'"/>'}).join("");return'<svg class="pw-twilight-arc pw-twilight-arc-'+t+'" viewBox="0 0 46 233" preserveAspectRatio="none" style="opacity:'+o+'"><defs><linearGradient id="'+a+'" x1="0" y1="0" x2="0" y2="1">'+i+'</linearGradient></defs><path d="'+e+'" fill="none" stroke="url(#'+a+')" stroke-width="17" stroke-linecap="round"/></svg>'}function To({hass:t,config:o,discovery:a}){let e=new Date,i=a.sunEntityId?t.states[a.sunEntityId]:null;if(!i)return null;let r=i.attributes||{},n=new Date(r.next_rising||r.sunrise||e.toISOString()),c=new Date(r.next_setting||r.sunset||e.toISOString()),p=n.getTime()>e.getTime()?new Date(n.getTime()-864e5):n,s=c.getTime()>e.getTime()?c:new Date(c.getTime()-864e5);s.getTime()>p.getTime()+864e5&&(s=new Date(s.getTime()-864e5)),p.getTime()>s.getTime()&&(p=new Date(p.getTime()-864e5));let d=n.getTime()>e.getTime()?n:new Date(n.getTime()+864e5),h=c.getTime()>e.getTime()?c:new Date(c.getTime()+864e5),m=a.atmosCe,u=m.golden_hour_morning_start?new Date(String(t.states[m.golden_hour_morning_start]?.state)):null,f=m.golden_hour_morning_end?new Date(String(t.states[m.golden_hour_morning_end]?.state)):null,w=m.golden_hour_evening_start?new Date(String(t.states[m.golden_hour_evening_start]?.state)):null,$=m.golden_hour_evening_end?new Date(String(t.states[m.golden_hour_evening_end]?.state)):null,x=m.blue_hour_morning_start?new Date(String(t.states[m.blue_hour_morning_start]?.state)):null,k=m.blue_hour_morning_end?new Date(String(t.states[m.blue_hour_morning_end]?.state)):null,z=m.blue_hour_evening_start?new Date(String(t.states[m.blue_hour_evening_start]?.state)):null,y=m.blue_hour_evening_end?new Date(String(t.states[m.blue_hour_evening_end]?.state)):null,O=s.getTime()-p.getTime(),N=function(M){return M&&O>0?Math.max(0,Math.min(1,(M.getTime()-p.getTime())/O)):-1},E=m.moon_phase?t.states[m.moon_phase]:null,b=E?.attributes||{},_=b.moon_age!==void 0?Number(b.moon_age):null,F=b.illumination!==void 0?Number(b.illumination):null,L=_!==null?Wi(_):E?.state||null,A=m.moonrise?new Date(t.states[m.moonrise]?.state):null,D=m.moonset?new Date(t.states[m.moonset]?.state):null,G=Ie(e,p,s,u,$,x,z,w),Y=Le[G],K=N(e),X=e.getTime()>=p.getTime()&&e.getTime()<=s.getTime(),Q="M"+bo+","+Kt+" A"+Lt+","+Lt+" 0 0 1 "+vo+","+Kt,H=Q+" Z",v=[],P="pw-arc-fill",V=Pi[G];if(v.push('<defs><linearGradient id="'+P+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+V.top+'"/><stop offset="100%" stop-color="'+V.bottom+'"/></linearGradient></defs>'),v.push(dt("path",{d:H,fill:"url(#"+P+")"})),v.push(dt("line",{x1:bo,y1:Kt,x2:vo,y2:Kt,stroke:"rgba(255,255,255,0.2)","stroke-width":1})),X&&K>=0){let M=ua(K),Z=K*Ue;v.push(dt("path",{d:Q,fill:"none",stroke:"rgba(255,220,100,0.1)","stroke-width":2,"stroke-dasharray":Z.toFixed(1)+" "+Ue}));let W=dt("circle",{cx:M.x.toFixed(1),cy:M.y.toFixed(1),r:11,fill:"#ffd60a"});W+=dt("circle",{cx:M.x.toFixed(1),cy:M.y.toFixed(1),r:7,fill:"#ffe066",opacity:.5});for(let Ct=0;Ct<Hi;Ct++){let Et=Ct*45*Math.PI/180;W+=dt("line",{x1:(M.x+yo*Math.cos(Et)).toFixed(1),y1:(M.y+yo*Math.sin(Et)).toFixed(1),x2:(M.x+_o*Math.cos(Et)).toFixed(1),y2:(M.y+_o*Math.sin(Et)).toFixed(1),stroke:"#ffd60a","stroke-width":1.5,"stroke-linecap":"round",opacity:.4})}v.push('<g style="animation: pw-sunGlow 4s ease-in-out infinite">'+W+"</g>")}function at(M,Z,W,Ct,Et){if(Ct==null)return dt("circle",{cx:M.toFixed(1),cy:Z.toFixed(1),r:W,fill:"#c8d0e0"});let Ht=Math.max(0,Math.min(1,Ct/100)),Ve=Et!==null?Ui(Et):!0,ne=dt("circle",{cx:M.toFixed(1),cy:Z.toFixed(1),r:W,fill:"#2a2a3a"});if(Ht>=.99)ne+=dt("circle",{cx:M.toFixed(1),cy:Z.toFixed(1),r:W,fill:"#e8e0d0"});else if(Ht>.01){let Bt=Z-W,ve=Z+W,ye=(W*Math.abs(2*Ht-1)).toFixed(1),se=Ht>.5?1:0,_t;Ve?_t="M"+M.toFixed(1)+","+Bt.toFixed(1)+" A"+W+","+W+" 0 0 1 "+M.toFixed(1)+","+ve.toFixed(1)+" A"+ye+","+W+" 0 0 "+se+" "+M.toFixed(1)+","+Bt.toFixed(1)+" Z":_t="M"+M.toFixed(1)+","+Bt.toFixed(1)+" A"+W+","+W+" 0 0 0 "+M.toFixed(1)+","+ve.toFixed(1)+" A"+ye+","+W+" 0 0 "+(1-se)+" "+M.toFixed(1)+","+Bt.toFixed(1)+" Z",ne+=dt("path",{d:_t,fill:"#e8e0d0"})}return ne}if(A&&D&&!isNaN(A.getTime())&&!isNaN(D.getTime())){let M=ji(e,A,D);if(M.visible){let Z=ua(M.progress),W=M.progress*Ue;v.push(dt("path",{d:Q,fill:"none",stroke:"rgba(200,210,230,0.06)","stroke-width":1.5,"stroke-dasharray":W.toFixed(1)+" "+Ue})),v.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">'+at(Z.x,Z.y,8,F,_)+"</g>")}}else if(!X){let M=ua(.5);v.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">'+at(M.x,M.y,8,F,_)+"</g>")}let ot=Kt-Lt*.48,St=Kt-Lt*.28,wt,kt;X?(wt="Daylight",kt=(s.getTime()-e.getTime())/36e5):(wt="Nighttime",kt=(d.getTime()-e.getTime())/36e5);let S=Bi(kt);v.push(dt("text",{x:we,y:ot,"text-anchor":"middle",fill:"rgba(255,255,255,0.9)","font-size":18,"font-weight":400},wt)),v.push(dt("text",{x:we,y:St,"text-anchor":"middle",fill:Y.labelColor,"font-size":22,"font-weight":500},l(S)));let T='<svg style="display:block;width:100%;overflow:visible" viewBox="0 0 '+ko+" "+Mo+'" role="img" aria-label="Sun and moon arc">'+v.join("")+"</svg>",R=Vi(G),Mt=So("am",R),et=So("pm",R);function it(M,Z,W){return!M||isNaN(M.getTime())?"":'<div class="'+Z+'"><span class="pw-twilight-time" style="color:'+g(W)+'">'+l(he(M))+"</span></div>"}function Tt(M,Z){return'<div class="'+Z+'"><span class="pw-twilight-label">'+l(M)+"</span></div>"}let Ot='<div class="pw-twilight-col pw-twilight-am">'+Mt+it(f,"pw-twilight-time-golden","#ff9f0a")+Tt("Golden hour","pw-twilight-label-golden")+it(k,"pw-twilight-time-blue","#5ac8fa")+Tt("Blue hour","pw-twilight-label-blue")+it(x,"pw-twilight-time-end","#5ac8fa")+"</div>",Zt='<div class="pw-twilight-col pw-twilight-pm">'+et+it(w,"pw-twilight-time-golden","#ff9f0a")+Tt("Golden hour","pw-twilight-label-golden")+it(z,"pw-twilight-time-blue","#5ac8fa")+Tt("Blue hour","pw-twilight-label-blue")+it(y,"pw-twilight-time-end","#5ac8fa")+"</div>",xe=X?p:d,ga=X?s:h,Jt='<div class="pw-sunrise-sunset"><div class="pw-sun-time"><div class="pw-sun-time-value">'+l(he(xe))+'</div><div class="pw-sun-time-label">Sunrise</div></div><div class="pw-sun-time"><div class="pw-sun-time-value">'+l(he(ga))+'</div><div class="pw-sun-time-label">Sunset</div></div></div>',oe=G===2||G===4,ie=G===0,re="";oe?re='<div class="pw-tension-wash" style="background: '+g(pt("#ff9f0a",.2))+'"></div>':ie&&(re='<div class="pw-tension-wash" style="background: '+g(pt("#5ac8fa",.1))+'"></div>');let be='<div class="pulse-stats-row pw-moon-stats" role="img" aria-label="Moon statistics">'+(L?U(F!==null?Math.round(F)+"%":l(L),"Moon Phase",""):"")+U(l(he(A)),"Moonrise","")+U(l(he(D)),"Moonset","")+"</div>";return'<div class="pw-section pw-astro"><div class="pw-sky-wash" style="background: '+g(Y.gradient)+'"></div>'+re+'<div class="pw-fx" data-astro-stars="'+Y.stars+'" data-astro-day="'+Y.isDay+'" role="img" aria-label="Sky atmospheric effects"></div><div class="pw-astro-content"><div class="pw-section-header"><span class="pw-section-title">Sun &amp; Moon</span></div><div class="pw-astro-layout">'+Ot+'<div class="pw-arc-center"><div class="pw-arc-wrap">'+T+"</div>"+Jt+"</div>"+Zt+"</div>"+be+"</div></div>"}lt();function qi(t,o){let a=(t?.state||"").toLowerCase();if(!t||a==="none"||a==="no alerts"||a==="unavailable"||a==="0"||a==="off")return[];let e=t.entity_id||"";if(e.endsWith("_alert_count")||e.startsWith("binary_sensor."))return[];let i=t.attributes,r=[],n=i.alert_type||i.type||"wind",c=Number(i.level)||1,p=i.color||aa[c]||aa[1],s=La[n]||"mdi:alert",d=Number(i.progress)||0,h=Array.isArray(i.locations)?i.locations:[],m=i.end_time??"",u=null,f=null,w=!1;if(m==="")w=!0;else if(m){let $=new Date(m),x=new Date,k=$.getTime()-x.getTime();if(k/(1e3*60*60*24)>Ra)w=!0;else if(o)u=Math.max(0,k/(1e3*60*60));else{let y=i.start_time||i.datetime;if(y){let O=new Date(String(y));f=Math.max(0,(O.getTime()-x.getTime())/(1e3*60*60))}}}return r.push({type:n,icon:s,severity:c,color:p,summary:String(i.headline||i.summary||t.state||""),desc:String(i.description||""),active:o,hoursLeft:u,hoursUntil:f,progress:d,locations:h,link:i.link?String(i.link):null,endTime:String(m),isUntilFurtherNotice:w}),r}function Co({hass:t,config:o,discovery:a}){let e=[];a.atmosCe.active_alert&&t.states[a.atmosCe.active_alert];for(let b of a.alertEntityIds){let _=t.states[b];if(!_)continue;let F=b.includes("active")||_.state==="on";e.push(...qi(_,F))}let r=e.length>0,n=r?e.reduce((b,_)=>_.severity>b.severity?_:b,e[0]).severity:0,c=r?e.reduce((b,_)=>_.severity>b.severity?_:b,e[0]).color:"#30d158",p=ht(n,0,4),s=r?Math.min(1.5,1+(e.length-1)*.15):1,d=io(p,3,1.2).toFixed(2),h=Wt(p).toFixed(2),m=Wt(p,2,.6).toFixed(2),u=r?pt(c,p*s):pt("#30d158",.08),f=140,w=f/2,$=f/2,x=r?{bgInner:n>=4?"#1a0000":n>=3?"#1a0e00":"#1a1500",bgOuter:n>=4?"#0a0000":n>=3?"#0a0500":"#0a0800",ring:g(c.replace(")",",0.15)").replace("rgb(","rgba(")),line:g(c.replace(")",",0.08)").replace("rgb(","rgba(")),sweep:g(c.replace(")",",0.4)").replace("rgb(","rgba("))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},k=e.map((b,_)=>{let F=b.active?18+_*7:40+_*7,L=_*137.5*Math.PI/180,A=w+Math.cos(L)*F,D=$+Math.sin(L)*F,G=(_*137.5%360/360*Number(d)).toFixed(2);return b.active?`<div class="pw-radar-blip" style="left:${A.toFixed(1)}px;top:${D.toFixed(1)}px;--pw-blip-color:${g(b.color)};animation-delay:${G}s"></div>`:`<div style="position:absolute;left:${A.toFixed(1)}px;top:${D.toFixed(1)}px;width:4px;height:4px;border-radius:50%;background:${g(b.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),z=`
    <div style="display:flex;justify-content:center;padding:12px 20px;position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${x.bgInner};--pw-radar-bg-outer:${x.bgOuter};--pw-radar-color:${x.ring};--pw-radar-line:${x.line};--pw-radar-sweep:${x.sweep};--pw-radar-dur:${d}s" role="img" aria-label="${r?`${e.length} weather alerts`:"No active alerts"}">
        ${k}
      </div>
    </div>`,y=`<span class="pw-severity-dot" style="background: ${g(c)}; animation-duration: ${m}s"></span>`,O=n>=4,N=e.map(b=>{let _=b.isUntilFurtherNotice?"Until further notice":b.active&&b.hoursLeft!==null?`${Math.round(b.hoursLeft)}h left`:b.hoursUntil!==null?`${Math.round(b.hoursUntil)}h until`:"",F=b.active?"active":"upcoming",L=b.active?`--pw-alert-color:${g(b.color)}`:"";return`
      <div class="pw-alert-row ${F}" style="${L}">
        <div class="pw-alert-dot" style="background:${g(b.color)}"></div>
        <div class="pw-alert-body">
          <div class="pw-alert-headline">${l(b.summary)}</div>
          <div class="pw-alert-type">${l(b.type)}</div>
          ${b.desc?`<div class="pw-alert-desc">${l(b.desc)}</div>`:""}
          ${b.locations.length>0?`<div class="pw-alert-locations">${l(b.locations.join(", "))}</div>`:""}
        </div>
        <span class="pw-alert-time">${l(_)}</span>
      </div>`}).join("");return`
    <div class="pw-section pw-alerts"${O?` style="border-top: 2px solid ${g(c)}"`:""}>
      <div class="pw-tension-wash${r?" breathing":""}" style="background: ${g(u)}; --breathe-dur: ${h}s"></div>
      <div class="pw-alerts-content">
        <div class="pw-section-header">
          <span class="pw-section-title">Alerts</span>
          ${y}
        </div>
        ${z}
        ${r?"":'<div class="pw-all-clear">All Clear</div>'}
        ${N?`<div class="pw-alert-list">${N}</div>`:""}
      </div>
    </div>`}var It=300,ma=180,je=8,Be=12,jt=140,Eo=172,Yi=.9,Xi=3,Ki=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Qt(t,o){return o<=1?It/2:je+t/(o-1)*(It-2*je)}function Ao(t,o,a){let e=a-o||1;return Be+(a-t)/e*(jt-Be)}function Qi(t){try{let o=new Date(t);return isNaN(o.getTime())?"":String(o.getHours()).padStart(2,"0")}catch{return""}}function Zi(t,o=24){let a=Date.now(),i=t.filter(f=>{let w=new Date(String(f.datetime||""));return!isNaN(w.getTime())&&w.getTime()>=a-36e5}).slice(0,o);if(i.length<2)return null;let r=i[0],n="cloud_cover"in r,c="cloud_cover_low"in r&&"cloud_cover_mid"in r&&"cloud_cover_high"in r,p="wind_speed"in r&&("wind_bearing"in r||"wind_direction"in r),s=i.map(f=>{let w=Number(f.temperature)||0,$=Number(f.precipitation_probability)||0,x=Number(f.snowfall)||0,k=Number(f.rain)||0,z=Number(f.showers)||0,y=String(f.condition||""),O=x>0||y==="snowy"||y==="snowy-rainy"?"snow":"rain",N=O==="snow"?x:k+z;return{temp:w,precip:$,precipMm:N,precipType:O,condition:y,cloudCover:n?Number(f.cloud_cover)||0:null,cloudLow:c?Number(f.cloud_cover_low)||0:null,cloudMid:c?Number(f.cloud_cover_mid)||0:null,cloudHigh:c?Number(f.cloud_cover_high)||0:null,windSpeed:p?Number(f.wind_speed)||0:null,windBearing:p?Number(f.wind_bearing??f.wind_direction)||0:null,timeLabel:Qi(String(f.datetime||"")),datetime:String(f.datetime||"")}}),d=s.map(f=>f.temp),h=Math.min(...d),m=Math.max(...d),u=Math.max(...s.map(f=>f.precipMm),0);return{points:s,n:s.length,min:h,max:m,minIdx:d.indexOf(h),maxIdx:d.indexOf(m),maxPrecipMm:u,hasCloud:n,hasLayeredCloud:c,hasWind:p}}function Ji(t){let{points:o,n:a,hasLayeredCloud:e}=t,i="",r=a>1?(It-2*je)/(a-1)/2:It/2;for(let n=0;n<a;n++){let c=Qt(n,a),p=n===0?0:c-r,d=(n===a-1?It:c+r)-p;if(e){let h=(Number(o[n].cloudHigh)||0)/100*.06,m=(Number(o[n].cloudMid)||0)/100*.08,u=(Number(o[n].cloudLow)||0)/100*.1,f=Math.min(h+m+u,.15);i+=`<rect x="${p.toFixed(1)}" y="0" width="${d.toFixed(1)}" height="${ma}" fill="rgba(180,190,200,1)" opacity="${f.toFixed(3)}"/>`}else{let h=(Number(o[n].cloudCover)||0)/100*.12;i+=`<rect x="${p.toFixed(1)}" y="0" width="${d.toFixed(1)}" height="${ma}" fill="rgba(180,190,200,1)" opacity="${h.toFixed(3)}"/>`}}return i}function tr(t){let{points:o,n:a,maxPrecipMm:e}=t,i=(jt-Be)*.7,r=(It-2*je)/(a-1)*Yi,n=e>0,c=n?Math.max(e,2):100,p="";for(let s=0;s<a;s++){let{precipMm:d,precip:h,precipType:m}=o[s],u=n?d:h;if(u<=0)continue;let f=u/c*i,w=Qt(s,a)-r/2,$=r;w<0&&($+=w,w=0),w+$>It&&($=It-w);let x=jt-f,k=m==="snow"?"rgba(200,220,240,0.45)":"rgba(90,200,250,0.4)";p+=`<rect x="${w.toFixed(1)}" y="${x.toFixed(1)}" width="${$.toFixed(1)}" height="${f.toFixed(1)}" fill="${k}" rx="1"/>`}return p}function er(t){let{points:o,n:a,maxPrecipMm:e}=t,i=(jt-Be)*.7,r=e>0,n=r?Math.max(e,2):100,c="";for(let p=0;p<a;p++){let{precipMm:s,precip:d}=o[p],h=r?s:d;if(h<=0)continue;let m=Qt(p,a),u=h/n*i,f=jt-u-2,w=r?s>=10?String(Math.round(s)):s.toFixed(1):`${Math.round(d)}%`;c+=`<text x="${m.toFixed(1)}" y="${f.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="7" font-family="var(--ha-card-header-font-family, inherit)">${l(w)}</text>`}return c}function ar(t,o){let{points:a,n:e,min:i,max:r}=t,n=a.map(f=>parseFloat(f.temp.toFixed(1))),c=a.map((f,w)=>({x:Qt(w,e),y:Ao(n[w],i,r)})),p=c.map((f,w)=>`${w===0?"M":"L"}${f.x.toFixed(1)},${f.y.toFixed(1)}`).join(" "),s=`${p} L${c[c.length-1].x.toFixed(1)},${jt} L${c[0].x.toFixed(1)},${jt} Z`,d="pw-meteogram-grad",h=B(r),m=B(i),u=`<defs><linearGradient id="${d}" x1="0" y1="0" x2="0" y2="1">`;u+=`<stop offset="0%" stop-color="${g(h)}" stop-opacity="0.25"/>`,u+=`<stop offset="100%" stop-color="${g(m)}" stop-opacity="0.03"/>`,u+="</linearGradient></defs>",u+=`<path d="${s}" fill="url(#${d})"/>`,u+=`<path d="${p}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;for(let f=1;f<c.length;f+=2){let w=c[f].x,$=c[f].y-2,x=n[f],k=x===Math.round(x)?`${Math.round(x)}\xB0`:`${x}\xB0`;u+=`<text x="${w.toFixed(1)}" y="${$.toFixed(1)}" text-anchor="middle" fill="${g(B(x))}" font-size="9" font-weight="500">${k}</text>`}return u}function or(t){let{points:o,n:a,min:e,max:i}=t,r="";for(let n=0;n<a;n+=2){let{condition:c,temp:p}=o[n];if(!c)continue;let s=Qt(n,a),d=Ao(p,e,i)+14,h=fe(c);r+=`<text x="${s.toFixed(1)}" y="${d.toFixed(1)}" text-anchor="middle" font-size="12">${h}</text>`}return r}function ir(t,o){let{points:a,n:e}=t,i=(jt+Eo)/2,r="";for(let n=0;n<e;n+=o){let{windSpeed:c,windBearing:p}=a[n];if(c===null||p===null||Number(c)<1)continue;let s=Qt(n,e),d=(Number(p)%360+360)%360,h=Math.round(d/22.5)%16,m=Ki[h],u=Number(c),f=5,w="rgba(255,255,255,0.5)";r+=`<g transform="translate(${s.toFixed(1)},${i.toFixed(1)}) rotate(${d.toFixed(0)})" aria-label="Wind from ${l(m)} at ${Math.round(u)} km/h">`,r+=`<line x1="0" y1="${f}" x2="0" y2="${-f}" stroke="${w}" stroke-width="0.8" stroke-linecap="round"/>`;let $=Math.floor(u/10),x=u%10>=5?1:0,k=-f;for(let z=0;z<$&&z<5;z++)r+=`<line x1="0" y1="${k.toFixed(1)}" x2="3" y2="${(k-2).toFixed(1)}" stroke="${w}" stroke-width="0.8" stroke-linecap="round"/>`,k+=2;x&&(r+=`<line x1="0" y1="${k.toFixed(1)}" x2="2" y2="${(k-1.5).toFixed(1)}" stroke="${w}" stroke-width="0.8" stroke-linecap="round"/>`),r+="</g>"}return r}function rr(t){let{points:o,n:a}=t,e="";for(let i=0;i<a;i+=Xi){let r=Qt(i,a);e+=`<text x="${r.toFixed(1)}" y="${Eo}" text-anchor="middle" fill="var(--primary-text-color, rgba(255,255,255,0.6))" font-size="9" font-family="var(--ha-card-header-font-family, inherit)">${l(o[i].timeLabel)}</text>`}return e}function Fo({config:t,forecastData:o}){let a=o?.hourly||[];if(a.length<2)return null;let e=Zi(a,Math.max(4,Math.min(48,Number(t.hours)||12)));if(!e)return null;let i=1,r=t.show_dots!==!1,n=t.show_cloud==="auto"||t.show_cloud===void 0?e.hasCloud:!!t.show_cloud,c=t.show_wind==="auto"||t.show_wind===void 0?e.hasWind:!!t.show_wind,p=[];n&&e.hasCloud&&p.push(Ji(e)),p.push(tr(e)),p.push(er(e)),p.push(ar(e,r)),p.push(or(e)),c&&e.hasWind&&p.push(ir(e,i)),p.push(rr(e));let s="24-hour meteogram showing temperature, precipitation, cloud cover, and wind",d=`Temperature ranges from ${Math.round(e.min)}\xB0C to ${Math.round(e.max)}\xB0C over the next 24 hours`;return`
    <div class="pw-section pw-meteogram">
      <div class="pw-section-header">
        <span class="pw-section-title" id="pw-meteogram-title">Meteogram</span>
      </div>
      <div class="pw-meteogram-chart" aria-labelledby="pw-meteogram-title"${t.meteogram_height&&t.meteogram_height!=="auto"?` style="height: ${g(String(t.meteogram_height))}"`:""}>
        <svg viewBox="0 0 ${It} ${ma}" style="width:100%; height:auto" role="img" aria-label="${l(s)}">
          <title>${l(d)}</title>
          ${p.join(`
`)}
        </svg>
      </div>
    </div>`}var nr={overview:po,forecast:uo,wind:wo,air_quality:xo,astro:To,alerts:Co,atmosphere:lo,meteogram:Fo},fa=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null}setConfig(o){if(!o)throw new Error("Invalid configuration");this._config=Va(o),this._hass&&this._fullRender()}set hass(o){if(this._hass=o,!this._config)return;let a=this._config.weather_entity||Object.keys(o.states).find(n=>n.startsWith("weather."))||"",e=o.states[a];if(!e)return;let i=`${e.state}|${JSON.stringify(e.attributes)}`;i!==this._lastWeatherState&&(this._lastWeatherState=i,this._fullRender()),this._subscribeForecast(o,a)}async _subscribeForecast(o,a){let e=Date.now()-this._forecastLastFetch>=za;if(!(this._subscribedEntityId===a&&this._forecastData&&!e)&&!this._forecastFetching&&(this._forecastFetching=!0,this._subscribedEntityId=a,!!o.callWS))try{let i=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let h=(await o.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(m=>m.platform==="atmos_ce");this._atmosConfigEntryId=h?.config_entry_id||null}if(this._atmosConfigEntryId){let m=(await o.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;m?.forecast&&(i=m.forecast)}}catch{}let r=null;a&&o.states[a]&&(r=await o.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:a},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let n=null;!i&&a&&o.states[a]&&(n=(await o.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:a},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[a]?.forecast||[]);let s=r?.response?.[a];this._forecastData={hourly:i||n||[],daily:s?.forecast||[]},this._forecastLastFetch=Date.now(),this._forecastFetching=!1,this._fullRender()}catch{this._forecastLastFetch=Date.now(),this._forecastFetching=!1}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let o=ra(this._hass.states,this._config);this._discovery=o;let a=this._hass.states[o.weatherEntityId];if(!a)return;let e=["<style>",Ba,"</style>",'<div class="pw-card">'];for(let i of this._config.sections||[]){let r=nr[i.type];if(r)try{let n=r({hass:this._hass,config:i,discovery:o,weatherEntity:a,forecastData:this._forecastData});n&&e.push(n)}catch{}}e.push("</div>"),this.shadowRoot.innerHTML=e.join(""),this._postRender(o),this._schedulePhaseTransition(),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null),this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let i=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!i){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let r=Number(i.dataset.target)-Date.now();if(r<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let n=Math.floor(r/1e3),c=Math.floor(n/3600),p=Math.floor(n%3600/60),s=n%60;i.textContent=(c>0?c+"h "+p+"m":p+"m "+s+"s")+(i.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let o=ra(this._hass.states,this._config),a=o.atmosCe,e=this._hass.states[o.sunEntityId||""];if(!e)return;let i=Date.now(),r=[],n=new Date(e.attributes?.next_rising||"").getTime(),c=new Date(e.attributes?.next_setting||"").getTime();n>i&&r.push(n),c>i&&r.push(c);for(let d of["golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end"])if(a[d]){let h=new Date(String(this._hass.states[a[d]]?.state||"")).getTime();h>i&&r.push(h)}if(r.length===0)return;let s=Math.min(...r)-i+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},s)}_postRender(o){if(!this.shadowRoot||!this._hass)return;let a=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let s of a){let d=s.getAttribute("data-condition")||"",h=s.getAttribute("data-night")==="true",m=null;try{let f=s.getAttribute("data-cloud");f&&f!=='""'&&f!==""&&(m=JSON.parse(f))}catch{}let u=Ka(d,h,m);s.replaceChildren(u)}let e=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let s of e){let d=Number(s.getAttribute("data-pm25"))||0,h=Number(s.getAttribute("data-pm10"))||0,m=s.querySelector(".pw-fx");if(m&&(d>0||h>0)){let u=document.createDocumentFragment();Xa(u,d,h),m.replaceChildren(u)}}let i=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let s of i){let d=s.getAttribute("data-astro-stars")==="true",h=s.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();d&&sa(m),h&&(tt(m,3,.5),ze(m)),s.replaceChildren(m)}let r=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let s of r){let d=Number(s.getAttribute("data-atmos-score"))||0,h=s.getAttribute("data-atmos-color")||"#30d158",m=so(d,h);s.replaceChildren(m)}let n=this.shadowRoot.querySelectorAll(".pw-tab");for(let s of n)s.addEventListener("click",d=>{let h=d.currentTarget,m=h.dataset.mode,u=h.dataset.scale;if(m||u){if(!this._config)return;let f=[...this._config.sections||[]];for(let w of f)m&&("mode"in w||w.type==="forecast"||w.type==="wind")&&(w.type==="forecast"&&m&&(w.mode=m),w.type==="wind"&&m&&(w.speed_mode=m)),u&&w.type==="air_quality"&&(w.scale=u);this._config={...this._config,sections:f},this._fullRender()}});let c=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let s of c){let d=!1,h=0,m=0;s.addEventListener("mousedown",u=>{d=!0,h=u.pageX-s.offsetLeft,m=s.scrollLeft,s.style.cursor="grabbing"}),s.addEventListener("mouseleave",()=>{d=!1,s.style.cursor=""}),s.addEventListener("mouseup",()=>{d=!1,s.style.cursor=""}),s.addEventListener("mousemove",u=>{if(!d)return;u.preventDefault();let f=u.pageX-s.offsetLeft;s.scrollLeft=m-(f-h)}),s.addEventListener("touchstart",u=>{u.stopPropagation()},{passive:!0}),s.addEventListener("touchmove",u=>{u.stopPropagation()},{passive:!0}),s.addEventListener("wheel",u=>{let f=u;Math.abs(f.deltaX)<Math.abs(f.deltaY)&&(u.preventDefault(),s.scrollLeft+=f.deltaY)},{passive:!1})}let p=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(p){let s=this.shadowRoot.querySelector(".pw-atmos-detail");s&&(this._atmosExpanded&&(s.style.maxHeight=`${s.scrollHeight}px`,p.setAttribute("aria-expanded","true")),p.addEventListener("click",()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(s.style.maxHeight=`${s.scrollHeight}px`,p.setAttribute("aria-expanded","true")):(s.style.maxHeight="0",p.setAttribute("aria-expanded","false"))}))}}getCardSize(){let o=this._config?.sections?.length||1;return Math.max(3,o*3)}getGridOptions(){return{columns:12,min_columns:6,rows:this.getCardSize(),min_rows:3}}static async getConfigElement(){return await Promise.resolve().then(()=>(zo(),No)),document.createElement(pe)}static getStubConfig(o){let a=Object.keys(o.states).find(e=>e.startsWith("weather."));return{type:`custom:${te}`,weather_entity:a||"weather.home",sections:[{type:"overview"}]}}};customElements.get(te)||(customElements.define(te,fa),console.info(`%c ${te.toUpperCase()} %c v${Ca} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:te,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});})();

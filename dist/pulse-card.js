var O=`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
  }

  .pulse-card {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-gap, 12px);
  }

  /* Multi-column grid */
  .pulse-card[class*="columns-"] {
    display: grid;
    grid-template-columns: repeat(var(--pulse-columns, 1), 1fr);
    gap: var(--pulse-gap, 16px);
  }

  /* Bar row \u2014 each entity */
  .bar-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  /* Labels row (outside mode \u2014 default) */
  .bar-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px;
  }

  .bar-label-left, .bar-label-right {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bar-label-left {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .bar-name {
    font-size: 14px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
  }

  /* Bar container */
  .bar-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  /* Track (background) */
  .bar-track {
    position: absolute;
    inset: 0;
    background: var(--primary-color, #03A9F4);
    opacity: 0.12;
    border-radius: inherit;
  }

  /* Fill */
  .bar-fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--primary-color, #03A9F4);
    border-radius: inherit;
    transition: width var(--pulse-animation-speed, 0.8s) ease,
                background-color 0.3s ease;
  }

  /* Content overlay (classic/inside mode) */
  .bar-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 100%;
    z-index: 1;
  }

  /* Target marker \u2014 visually distinct from fill [AC-7.3] */
  .bar-target {
    position: absolute;
    top: -1px;
    bottom: -1px;
    width: 2px;
    background: var(--primary-text-color, #333);
    opacity: 0.6;
    border-radius: 1px;
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
  }

  /* Target label [AC-7.4] */
  .bar-target-label {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: 500;
    color: var(--primary-text-color, #333);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0.7;
  }

  /* Indicator */
  .bar-indicator {
    font-size: 12px;
    font-weight: 500;
  }
  .bar-indicator.up { color: var(--label-badge-green, #4CAF50); }
  .bar-indicator.down { color: var(--label-badge-red, #F44336); }
  .bar-indicator.neutral { color: var(--secondary-text-color); }

  /* Icon */
  .bar-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }

  /* Unavailable state */
  .bar-row.unavailable .bar-fill {
    background: var(--disabled-color, #bdbdbd) !important;
    width: 100% !important;
    opacity: 0.2;
  }
  .bar-row.unavailable .bar-name,
  .bar-row.unavailable .bar-value {
    opacity: 0.5;
  }

  /* Charge animation */
  @keyframes pulse-charge {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }
  .bar-fill.charge {
    animation: pulse-charge 2s ease-in-out infinite;
  }

  /* Entity row mode */
  .entity-row {
    padding: 8px 0;
  }

  /* Title header */
  .pulse-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    padding-bottom: 4px;
  }

  /* Hover feedback */
  .bar-row:active {
    opacity: 0.8;
  }
  @media (hover: hover) {
    .bar-row:hover .bar-fill {
      filter: brightness(1.1);
    }
  }

  /* Keyboard focus indicator */
  .bar-row:focus-visible {
    outline: 2px solid var(--primary-color, #03A9F4);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;var P="0.1.7",R="Pulse Card:",h={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function z(i,t,n){i.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function J(i,t,n,e){if(!(!n||n.action==="none"))switch(n.action){case"more-info":z(i,"hass-more-info",{entityId:n.entity||e});break;case"navigate":history.pushState(null,"",n.navigation_path),z(i,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let o=n.service||n.perform_action;if(!o)break;let[a,r]=o.split(".");t.callService(a,r,n.service_data||n.data);break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break}}function Q(i,t,n){let e=t?.[i],o=n?.[i];return e||o||{action:i==="tap_action"?"more-info":"none"}}function C(i,t,n,e,o){let a=Q(o,e,n);J(i,t,a,e.entity)}function N(i){let t=i.__pulseCleanup;typeof t=="function"&&t()}function U(i,t,n,e,o){N(i);let a=new AbortController,{signal:r}=a,s=0,l=null,c=null,d=!1;i.__pulseCleanup=()=>{a.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete i.__pulseCleanup},i.setAttribute("tabindex","0"),i.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),n&&C(t,n,e,o,"tap_action"))},{signal:r}),i.addEventListener("click",u=>{if(u.preventDefault(),d){d=!1;return}s++,s===1?l=setTimeout(()=>{s=0,n&&C(t,n,e,o,"tap_action")},250):s===2&&(l&&clearTimeout(l),s=0,n&&C(t,n,e,o,"double_tap_action"))},{signal:r}),i.addEventListener("pointerdown",()=>{d=!1,c=setTimeout(()=>{d=!0,n&&C(t,n,e,o,"hold_action")},500)},{signal:r});let f=()=>{c&&clearTimeout(c)};i.addEventListener("pointerup",f,{signal:r}),i.addEventListener("pointercancel",f,{signal:r}),i.addEventListener("contextmenu",u=>u.preventDefault(),{signal:r})}function y(i,t,n){return Math.min(Math.max(i,t),n)}function Z(i,t,n,e=!1){let o=parseFloat(i);if(isNaN(o))return 0;let a=n-t;if(a<=0)return 0;let r=e?n-o:o;return y((r-t)/a,0,1)*100}function tt(i,t){if(!t||t.length===0)return null;let n=parseFloat(i);if(isNaN(n))return null;for(let e of t)if(n>=e.from&&n<=e.to)return e;return null}function B(i){let t=i.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function et(i,t,n){let e=B(i),o=B(t),a=Math.round(e.r+(o.r-e.r)*n),r=Math.round(e.g+(o.g-e.g)*n),s=Math.round(e.b+(o.b-e.b)*n);return`rgb(${a}, ${r}, ${s})`}function nt(i,t){if(!t||t.length<2)return null;let n=parseFloat(i);if(isNaN(n))return null;let e=t[0].from<=t[t.length-1].from?t:[...t].sort((o,a)=>o.from-a.from);for(let o=0;o<e.length-1;o++){let a=e[o],r=e[o+1];if(n>=a.from&&n<=r.to){let s=r.from-a.from,l=s>0?(n-a.from)/s:0;return et(a.color,r.color,y(l,0,1))}}return n<=e[0].from?e[0].color:e[e.length-1].color}function it(i,t){let n=i.min,e=i.max;return n==null&&(n=t?.attributes?.min??h.min),e==null&&(e=t?.attributes?.max??h.max),{min:parseFloat(String(n)),max:parseFloat(String(e))}}function ot(i,t,n){let e=parseFloat(i);if(isNaN(e))return String(i);let o=t!=null?e.toFixed(t):e.toString();return n?`${o}${n}`:o}function W(i,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(i),e=parseFloat(t);if(isNaN(n)||isNaN(e))return{direction:"neutral",delta:0};let o=Math.round((n-e)*100)/100;return{direction:o>0?"up":o<0?"down":"neutral",delta:o}}function M(i,t,n){let e=i==="up"?"\u25B2":i==="down"?"\u25BC":"\u25B6",o=n?` ${t>0?"+":""}${t}`:"";return{arrow:e,text:`${e}${o}`}}function S(i){return i==null||i===""?"":String(i).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function L(i,...t){console.warn(`${R} ${i}`,...t)}async function q(i,t,n=60){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,a=new Date(o.getTime()-n*60*1e3);try{let r=await i.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let s of t){let l=r?.[s];if(!l||l.length===0){e[s]=null;continue}let c=parseFloat(l[0].s);e[s]=isNaN(c)?null:c}}catch(r){L("Failed to fetch history for %s: %O",t.join(", "),r);for(let s of t)e[s]=null}return e}function T(i){if(i==null||i==="")return"";let t=String(i);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function p(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function H(i){return!Array.isArray(i)||i.length<2?i:[...i].sort((t,n)=>t.from-n.from)}function j(i){if(!i)throw new Error("Please define an entity or entities");if(!i.entity&&!i.entities)throw new Error("Please define an entity or entities");let t={...h,...i,animation:{...h.animation,...i.animation},positions:{...h.positions,...i.positions}};t.severity&&(t.severity=H(t.severity)),t.entities=i.entities?i.entities.map(e=>{let o=typeof e=="string"?{entity:e}:{...e};return o.severity&&(o.severity=H(o.severity)),o}):[{entity:i.entity}],t.entities.length===1&&t.entities[0].severity&&(t.entities[0].severity=H(t.entities[0].severity));let n=new Set;for(let e of t.entities)n.has(e.entity)&&L('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',e.entity),n.add(e.entity);return t}function I(i,t){if(i==null)return{value:null,showLabel:!1};if(typeof i=="number")return{value:isNaN(i)?null:i,showLabel:!1};if(typeof i=="string"){let n=t?.states[i];if(!n)return{value:null,showLabel:!1};let e=parseFloat(n.state);return{value:isNaN(e)?null:e,showLabel:!1}}return typeof i=="object"&&i.value!==void 0?{value:I(i.value,t).value,showLabel:i.show_label===!0}:{value:null,showLabel:!1}}function D(i,t,n){let e=n?.states[i.entity],o=!e||e.state==="unavailable"||e.state==="unknown"||e.state==="error",{min:a,max:r}=it(i,e),s=i.attribute?e?.attributes?.[i.attribute]:e?.state,l=parseFloat(s),c=i.complementary??t.complementary,d=o?0:Z(s,a,r,c),f=i.unit_of_measurement??e?.attributes?.unit_of_measurement??"",u=i.decimal??t.decimal??n?.entities?.[i.entity]?.display_precision??null,g=(i.limit_value??t.limit_value)&&!isNaN(l)?y(l,a,r):s,_=o?"Unavailable":ot(g,u,f),w=i.name??e?.attributes?.friendly_name??i.entity,x="",k="";if(!o){let v=i.severity??t.severity;if(v&&v.length>0)if(v.some(m=>m.mode==="gradient")){let m=nt(l,v);m&&(x=m)}else{let m=tt(l,v);m&&(x=m.color,m.icon&&(k=m.icon))}}let F=x||i.color||t.color||"",A=i.icon||e?.attributes?.icon||"";return{isUnavailable:o,min:a,max:r,numValue:l,fill:d,displayValue:_,name:w,color:F,resolvedIcon:k||A}}function $(i,t){let n=i.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}var E=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=O,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)N(n)}setConfig(t){this._config=j(t),this._elements={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let e of this._cfg.entities){let o=t.states[e.entity],a=this._prevStates[e.entity];if(!a||a.state!==o?.state||a.last_updated!==o?.last_updated){n=!0;break}let r=e.target??this._cfg.target;if(typeof r=="string"){let s=t.states[r],l=this._prevStates[`__target__${r}`];if(!l||l.state!==s?.state||l.last_updated!==s?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,e=n>1?` columns-${n}`:"",o=t.entity_row?" entity-row":"",a=t.gap,r="";if(n>1||a!==void 0){let u=[];n>1&&u.push(`--pulse-columns:${n}`),a!==void 0&&u.push(`--pulse-gap:${S(T(a))}`),r=` style="${u.join(";")}"`}let s=r,l="";t.title&&(l+=`<div class="pulse-title">${p(t.title)}</div>`),l+=`<div class="pulse-card${e}${o}"${s}>`;for(let u of t.entities)l+=this._renderBarRow(u);l+="</div>";let c=t.entity_row?l:`<ha-card>${l}</ha-card>`,d=this._shadow.querySelector("ha-card, .pulse-card");d&&d.remove();let f=document.createElement("template");f.innerHTML=c,this._shadow.appendChild(f.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements()}_renderBarRow(t){let n=this._cfg,e=D(t,n,this._hass),o=t.positions?.name??n.positions?.name??h.positions.name,a=t.positions?.value??n.positions?.value??h.positions.value,r=t.positions?.icon??n.positions?.icon??h.positions.icon,s=t.positions?.indicator??n.positions?.indicator??h.positions.indicator,c=(t.indicator??n.indicator)?.show===!0&&s==="off"?"outside":s,d=t.animation??{},f=d.speed??n.animation.speed,u=d.effect??n.animation.effect,b=d.state??n.animation.state,g=this._buildIndicatorHtml(t,n,c),_=this._buildPositionHtml(e,o,a,r,c,g,"outside"),w=this._buildPositionHtml(e,o,a,r,c,g,"inside"),x=S(T(t.height??n.height)),k=S(T(t.border_radius??n.border_radius)),F=e.color?`background-color:${S(e.color)};`:"",A=u==="charge"&&!e.isUnavailable?" charge":"",V=b==="off"?"transition:none;":"",v=$(t,n),m=`width:${e.fill*v}%;${V}${F}`,X=this._buildTargetHtml(t,n,e.min,e.max),Y=`
      <div class="bar-container" style="height:${x};border-radius:${k};--pulse-animation-speed:${f}s;">
        <div class="bar-track"></div>
        <div class="bar-fill${A}" data-entity="${p(t.entity)}" style="${m}"></div>
        ${X}
        ${w}
      </div>`,K=e.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${p(e.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${e.numValue}" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${p(e.name)}: ${p(e.displayValue)}"`;return`<div class="bar-row${e.isUnavailable?" unavailable":""}" data-entity="${p(t.entity)}" ${K}>${_}${Y}</div>`}_buildIndicatorHtml(t,n,e){let o=t.indicator??n.indicator;if(!(o?.show===!0&&e!=="off"))return"";let r=this._indicators[t.entity],s=r?.direction??"neutral",l=o?.show_delta===!0&&!!r,{text:c}=M(s,r?.delta??0,l);return`<span class="bar-indicator ${s}">${c}</span>`}_buildPositionHtml(t,n,e,o,a,r,s){if(n!==s&&e!==s&&o!==s&&a!==s)return"";let c=`<div class="${s==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return o===s&&t.resolvedIcon&&(c+=`<ha-icon class="bar-icon" icon="${p(t.resolvedIcon)}"></ha-icon>`),n===s&&(c+=`<span class="bar-name">${p(t.name)}</span>`),c+='</div><div class="bar-label-right">',e===s&&(c+=`<span class="bar-value">${p(t.displayValue)}</span>`),a===s&&r&&(c+=r),c+="</div></div>",c}_buildTargetHtml(t,n,e,o){let a=t.target??n.target,{value:r,showLabel:s}=I(a,this._hass);if(r===null)return"";let l=y((r-e)/(o-e),0,1)*100,c=$(t,n),d=`left:${l*c}%`,f=s?`<span class="bar-target-label">${p(r)}</span>`:"";return`<div class="bar-target${s?" show-label":""}" style="${d}">${f}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let e=D(n,t,this._hass),o=this._elements.rows?.[n.entity];if(!o)continue;o.classList.toggle("unavailable",e.isUnavailable);let a=o.querySelector(".bar-fill");if(a){let f=$(n,t);a.style.width=`${e.fill*f}%`,a.style.backgroundColor=e.color||"";let u=o.querySelector(".bar-icon");u&&e.resolvedIcon&&u.setAttribute("icon",e.resolvedIcon)}let r=o.querySelectorAll(".bar-name");for(let f of r)f.textContent=e.name;let s=o.querySelectorAll(".bar-value");for(let f of s)f.textContent=e.displayValue;o.setAttribute("aria-valuenow",e.isUnavailable?"0":String(e.numValue)),o.setAttribute("aria-valuemin",String(e.min)),o.setAttribute("aria-valuemax",String(e.max)),o.setAttribute("aria-label",`${p(e.name)}: ${p(e.displayValue)}`);let l=o.querySelector(".bar-target"),c=n.target??t.target,{value:d}=I(c,this._hass);if(d!==null){let f=y((d-e.min)/(e.max-e.min),0,1)*100,u=$(n,t);if(l){l.style.left=`${f*u}%`,l.style.display="";let b=l.querySelector(".bar-target-label");b&&(b.textContent=String(d))}}else l&&(l.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(e=>(e.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=new Map;for(let o of t.entities){let a=o.indicator??t.indicator;if(!a?.show)continue;let r=a.period??60;e.has(r)||e.set(r,[]),e.get(r).push({entity:o.entity,icfg:a})}for(let[o,a]of e){let r=a.map(l=>l.entity),s=await q(this._hass,r,o);for(let{entity:l,icfg:c}of a){let d=n.get(l),f=this._hass?.states[l],u=d?.attribute?f?.attributes?.[d.attribute]:f?.state,b=W(u,s[l]);this._indicators[l]=b;let g=this._elements.rows?.[l];if(!g)continue;let _=g.querySelector(".bar-indicator");if(_){let{text:w}=M(b.direction,b.delta,c.show_delta===!0);_.textContent=w,_.className=`bar-indicator ${b.direction}`}}}}catch(n){L("Indicator fetch failed: %O",n)}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let e=this._hass?.states[n.entity];e&&(this._prevStates[n.entity]={state:e.state,last_updated:e.last_updated});let o=n.target??t.target;if(typeof o=="string"){let a=this._hass?.states[o];a&&(this._prevStates[`__target__${o}`]={state:a.state,last_updated:a.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=this._shadow.querySelectorAll(".bar-row");for(let o of e){let a=o.dataset.entity;if(a){this._elements.rows[a]=o;let r=n.get(a);r&&U(o,this,this._hass,t,r)}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,e=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,e),min_rows:1}}static async getConfigElement(){return await import("./editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(e=>{let o=t.states[e];return e.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",E);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${P} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var ht=E;export{ht as default};

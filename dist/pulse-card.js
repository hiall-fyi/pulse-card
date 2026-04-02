var U=`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
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
    color: var(--pulse-name-color, var(--primary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--pulse-value-color, var(--primary-text-color));
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
    opacity: var(--pulse-track-opacity, 0.12);
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
    color: var(--pulse-indicator-color);
  }
  .bar-indicator.up { color: var(--pulse-indicator-color, var(--label-badge-green, #4CAF50)); }
  .bar-indicator.down { color: var(--pulse-indicator-color, var(--label-badge-red, #F44336)); }
  .bar-indicator.neutral { color: var(--pulse-indicator-color, var(--secondary-text-color)); }

  /* Inverted indicator \u2014 up is bad, down is good (CPU, memory, disk usage) */
  .bar-indicator.inverted.up { color: var(--pulse-indicator-color, var(--label-badge-red, #F44336)); }
  .bar-indicator.inverted.down { color: var(--pulse-indicator-color, var(--label-badge-green, #4CAF50)); }

  /* Icon */
  .bar-icon {
    --mdc-icon-size: 18px;
    color: var(--pulse-icon-color, var(--secondary-text-color));
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
`;var O="0.1.8",z="Pulse Card:",b={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function B(i,t,n){i.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function Z(i,t,n,e){if(!(!n||n.action==="none"))switch(n.action){case"more-info":B(i,"hass-more-info",{entityId:n.entity||e});break;case"navigate":history.pushState(null,"",n.navigation_path),B(i,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let o=n.service||n.perform_action;if(!o)break;let[r,a]=o.split(".");t.callService(r,a,n.service_data||n.data);break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break}}function tt(i,t,n){let e=t?.[i],o=n?.[i];return e||o||{action:i==="tap_action"?"more-info":"none"}}function I(i,t,n,e,o){let r=tt(o,e,n);Z(i,t,r,e.entity)}function M(i){let t=i.__pulseCleanup;typeof t=="function"&&t()}function W(i,t,n,e,o){M(i);let r=new AbortController,{signal:a}=r,s=0,l=null,c=null,u=!1;i.__pulseCleanup=()=>{r.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete i.__pulseCleanup},i.setAttribute("tabindex","0"),i.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),n&&I(t,n,e,o,"tap_action"))},{signal:a}),i.addEventListener("click",d=>{if(d.preventDefault(),u){u=!1;return}s++,s===1?l=setTimeout(()=>{s=0,n&&I(t,n,e,o,"tap_action")},250):s===2&&(l&&clearTimeout(l),s=0,n&&I(t,n,e,o,"double_tap_action"))},{signal:a}),i.addEventListener("pointerdown",()=>{u=!1,c=setTimeout(()=>{u=!0,n&&I(t,n,e,o,"hold_action")},500)},{signal:a});let p=()=>{c&&clearTimeout(c)};i.addEventListener("pointerup",p,{signal:a}),i.addEventListener("pointercancel",p,{signal:a}),i.addEventListener("contextmenu",d=>d.preventDefault(),{signal:a})}function x(i,t,n){return Math.min(Math.max(i,t),n)}function et(i,t,n,e=!1){let o=parseFloat(i);if(isNaN(o))return 0;let r=n-t;if(r<=0)return 0;let a=e?n-o:o;return x((a-t)/r,0,1)*100}function nt(i,t){if(!t||t.length===0)return null;let n=parseFloat(i);if(isNaN(n))return null;for(let e of t)if(n>=e.from&&n<=e.to)return e;return null}function q(i){let t=i.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function it(i,t,n){let e=q(i),o=q(t),r=Math.round(e.r+(o.r-e.r)*n),a=Math.round(e.g+(o.g-e.g)*n),s=Math.round(e.b+(o.b-e.b)*n);return`rgb(${r}, ${a}, ${s})`}function ot(i,t){if(!t||t.length<2)return null;let n=parseFloat(i);if(isNaN(n))return null;let e=t[0].from<=t[t.length-1].from?t:[...t].sort((o,r)=>o.from-r.from);for(let o=0;o<e.length-1;o++){let r=e[o],a=e[o+1];if(n>=r.from&&n<=a.to){let s=a.from-r.from,l=s>0?(n-r.from)/s:0;return it(r.color,a.color,x(l,0,1))}}return n<=e[0].from?e[0].color:e[e.length-1].color}function rt(i,t){let n=i.min,e=i.max;return n==null&&(n=t?.attributes?.min??b.min),e==null&&(e=t?.attributes?.max??b.max),{min:parseFloat(String(n)),max:parseFloat(String(e))}}function L(i,t,n){return i.decimal??t.decimal??n?.entities?.[i.entity]?.display_precision??null}function T(i,t){return i.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function at(i,t,n){let e=parseFloat(i);if(isNaN(e))return String(i);let o=t!=null?e.toFixed(t):e.toString();return n?`${o}${n}`:o}function j(i,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(i),e=parseFloat(t);if(isNaN(n)||isNaN(e))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(e))return{direction:"neutral",delta:0};let o=Math.abs(n-e),r=Math.max(Math.abs(n),1);if(o>r*1e3)return{direction:"neutral",delta:0};let a=Math.round((n-e)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function V(i,t,n,e,o){let r=i==="up"?"\u25B2":i==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:r,text:r};let a=e!=null?t.toFixed(e):String(Math.round(t*100)/100),s=t>0?"+":"";return{arrow:r,text:`${r} ${s}${a}${o||""}`}}function C(i){return i==null||i===""?"":String(i).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function E(i,...t){console.warn(`${z} ${i}`,...t)}async function G(i,t,n=60){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,r=new Date(o.getTime()-n*60*1e3);try{let a=await i.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let s of t){let l=a?.[s];if(!l||l.length===0){e[s]=null;continue}let c=parseFloat(l[0].s);e[s]=isNaN(c)?null:c}}catch(a){E("Failed to fetch history for %s: %O",t.join(", "),a);for(let s of t)e[s]=null}return e}function A(i){if(i==null||i==="")return"";let t=String(i);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function f(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function D(i){return!Array.isArray(i)||i.length<2?i:[...i].sort((t,n)=>t.from-n.from)}function X(i){if(!i)throw new Error("Please define an entity or entities");if(!i.entity&&!i.entities)throw new Error("Please define an entity or entities");let t={...b,...i,animation:{...b.animation,...i.animation},positions:{...b.positions,...i.positions}};t.severity&&(t.severity=D(t.severity)),t.entities=i.entities?i.entities.map(e=>{let o=typeof e=="string"?{entity:e}:{...e};return o.severity&&(o.severity=D(o.severity)),o}):[{entity:i.entity}],t.entities.length===1&&t.entities[0].severity&&(t.entities[0].severity=D(t.entities[0].severity));let n=new Set;for(let e of t.entities)n.has(e.entity)&&E('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',e.entity),n.add(e.entity);return t}function N(i,t){if(i==null)return{value:null,showLabel:!1};if(typeof i=="number")return{value:isNaN(i)?null:i,showLabel:!1};if(typeof i=="string"){let n=t?.states[i];if(!n)return{value:null,showLabel:!1};let e=parseFloat(n.state);return{value:isNaN(e)?null:e,showLabel:!1}}return typeof i=="object"&&i.value!==void 0?{value:N(i.value,t).value,showLabel:i.show_label===!0}:{value:null,showLabel:!1}}function P(i,t,n){let e=n?.states[i.entity],o=!e||e.state==="unavailable"||e.state==="unknown"||e.state==="error",{min:r,max:a}=rt(i,e),s=i.attribute?e?.attributes?.[i.attribute]:e?.state,l=parseFloat(s),c=i.complementary??t.complementary,u=o?0:et(s,r,a,c),p=T(i,e),d=L(i,t,n),g=(i.limit_value??t.limit_value)&&!isNaN(l)?x(l,r,a):s,v=o?"Unavailable":at(g,d,p),S=i.name??e?.attributes?.friendly_name??i.entity,_="",w="";if(!o){let y=i.severity??t.severity;if(y&&y.length>0)if(y.some(h=>h.mode==="gradient")){let h=ot(l,y);h&&(_=h)}else{let h=nt(l,y);h&&(_=h.color,h.icon&&(w=h.icon))}}let $=_||i.color||t.color||"",k=i.icon||e?.attributes?.icon||"";return{isUnavailable:o,min:r,max:a,numValue:l,fill:u,displayValue:v,name:S,color:$,resolvedIcon:w||k}}function F(i,t){let n=i.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}var H=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=U,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)M(n)}setConfig(t){this._config=X(t),this._elements={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let e of this._cfg.entities){let o=t.states[e.entity],r=this._prevStates[e.entity];if(!r||r.state!==o?.state||r.last_updated!==o?.last_updated){n=!0;break}let a=e.target??this._cfg.target;if(typeof a=="string"){let s=t.states[a],l=this._prevStates[`__target__${a}`];if(!l||l.state!==s?.state||l.last_updated!==s?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,e=n>1?` columns-${n}`:"",o=t.entity_row?" entity-row":"",r=t.gap,a="";if(n>1||r!==void 0){let d=[];n>1&&d.push(`--pulse-columns:${n}`),r!==void 0&&d.push(`--pulse-gap:${C(A(r))}`),a=` style="${d.join(";")}"`}let s=a,l="";t.title&&(l+=`<div class="pulse-title">${f(t.title)}</div>`),l+=`<div class="pulse-card${e}${o}"${s}>`;for(let d of t.entities)l+=this._renderBarRow(d);l+="</div>";let c=t.entity_row?l:`<ha-card>${l}</ha-card>`,u=this._shadow.querySelector("ha-card, .pulse-card");u&&u.remove();let p=document.createElement("template");p.innerHTML=c,this._shadow.appendChild(p.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements()}_renderBarRow(t){let n=this._cfg,e=P(t,n,this._hass),o=t.positions?.name??n.positions?.name??b.positions.name,r=t.positions?.value??n.positions?.value??b.positions.value,a=t.positions?.icon??n.positions?.icon??b.positions.icon,s=t.positions?.indicator??n.positions?.indicator??b.positions.indicator,c=(t.indicator??n.indicator)?.show===!0&&s==="off"?"outside":s,u=t.animation??{},p=u.speed??n.animation.speed,d=u.effect??n.animation.effect,m=u.state??n.animation.state,g=this._buildIndicatorHtml(t,n,c),v=this._buildPositionHtml(e,o,r,a,c,g,"outside"),S=this._buildPositionHtml(e,o,r,a,c,g,"inside"),_=C(A(t.height??n.height)),w=C(A(t.border_radius??n.border_radius)),$=e.color?`background-color:${C(e.color)};`:"",k=d==="charge"&&!e.isUnavailable?" charge":"",R=m==="off"?"transition:none;":"",y=F(t,n),h=`width:${e.fill*y}%;${R}${$}`,K=this._buildTargetHtml(t,n,e.min,e.max),J=`
      <div class="bar-container" style="height:${_};border-radius:${w};--pulse-animation-speed:${p}s;">
        <div class="bar-track"></div>
        <div class="bar-fill${k}" data-entity="${f(t.entity)}" style="${h}"></div>
        ${K}
        ${S}
      </div>`,Q=e.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${f(e.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${e.numValue}" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${f(e.name)}: ${f(e.displayValue)}"`;return`<div class="bar-row${e.isUnavailable?" unavailable":""}" data-entity="${f(t.entity)}" ${Q}>${v}${J}</div>`}_buildIndicatorHtml(t,n,e){let o=t.indicator??n.indicator;if(!(o?.show===!0&&e!=="off"))return"";let a=this._indicators[t.entity],s=a?.direction??"neutral",l=o?.show_delta===!0&&!!a,c=this._hass?.states[t.entity],u=T(t,c),p=L(t,n,this._hass),{text:d}=V(s,a?.delta??0,l,p,u),m=o?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${s}${m}">${d}</span>`}_buildPositionHtml(t,n,e,o,r,a,s){if(n!==s&&e!==s&&o!==s&&r!==s)return"";let c=`<div class="${s==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return o===s&&t.resolvedIcon&&(c+=`<ha-icon class="bar-icon" icon="${f(t.resolvedIcon)}"></ha-icon>`),n===s&&(c+=`<span class="bar-name">${f(t.name)}</span>`),c+='</div><div class="bar-label-right">',e===s&&(c+=`<span class="bar-value">${f(t.displayValue)}</span>`),r===s&&a&&(c+=a),c+="</div></div>",c}_buildTargetHtml(t,n,e,o){let r=t.target??n.target,{value:a,showLabel:s}=N(r,this._hass);if(a===null)return"";let l=x((a-e)/(o-e),0,1)*100,c=F(t,n),u=`left:${l*c}%`,p=s?`<span class="bar-target-label">${f(a)}</span>`:"";return`<div class="bar-target${s?" show-label":""}" style="${u}">${p}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let e=P(n,t,this._hass),o=this._elements.rows?.[n.entity];if(!o)continue;o.classList.toggle("unavailable",e.isUnavailable);let r=o.querySelector(".bar-fill");if(r){let p=F(n,t);r.style.width=`${e.fill*p}%`,r.style.backgroundColor=e.color||"";let d=o.querySelector(".bar-icon");d&&e.resolvedIcon&&d.setAttribute("icon",e.resolvedIcon)}let a=o.querySelectorAll(".bar-name");for(let p of a)p.textContent=e.name;let s=o.querySelectorAll(".bar-value");for(let p of s)p.textContent=e.displayValue;o.setAttribute("aria-valuenow",e.isUnavailable?"0":String(e.numValue)),o.setAttribute("aria-valuemin",String(e.min)),o.setAttribute("aria-valuemax",String(e.max)),o.setAttribute("aria-label",`${f(e.name)}: ${f(e.displayValue)}`);let l=o.querySelector(".bar-target"),c=n.target??t.target,{value:u}=N(c,this._hass);if(u!==null){let p=x((u-e.min)/(e.max-e.min),0,1)*100,d=F(n,t);if(l){l.style.left=`${p*d}%`,l.style.display="";let m=l.querySelector(".bar-target-label");m&&(m.textContent=String(u))}}else l&&(l.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(e=>(e.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=new Map;for(let o of t.entities){let r=o.indicator??t.indicator;if(!r?.show)continue;let a=r.period??60;e.has(a)||e.set(a,[]),e.get(a).push({entity:o.entity,icfg:r})}for(let[o,r]of e){let a=r.map(l=>l.entity),s=await G(this._hass,a,o);for(let{entity:l,icfg:c}of r){let u=n.get(l),p=this._hass?.states[l],d=u?.attribute?p?.attributes?.[u.attribute]:p?.state,m=j(d,s[l]);this._indicators[l]=m;let g=this._elements.rows?.[l];if(!g)continue;let v=g.querySelector(".bar-indicator");if(v&&u){let S=this._hass?.states[l],_=T(u,S),w=L(u,t,this._hass),{text:$}=V(m.direction,m.delta,c.show_delta===!0,w,_),k=c.inverted===!0?" inverted":"";v.textContent=$,v.className=`bar-indicator ${m.direction}${k}`}}}}catch(n){E("Indicator fetch failed: %O",n)}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let e=this._hass?.states[n.entity];e&&(this._prevStates[n.entity]={state:e.state,last_updated:e.last_updated});let o=n.target??t.target;if(typeof o=="string"){let r=this._hass?.states[o];r&&(this._prevStates[`__target__${o}`]={state:r.state,last_updated:r.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=this._shadow.querySelectorAll(".bar-row");for(let o of e){let r=o.dataset.entity;if(r){this._elements.rows[r]=o;let a=n.get(r);a&&W(o,this,this._hass,t,a)}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,e=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,e),min_rows:1}}static async getConfigElement(){return await import("./editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(e=>{let o=t.states[e];return e.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",H);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${O} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var gt=H;export{gt as default};

var R=`
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
    font-size: var(--pulse-font-size, 14px);
    color: var(--pulse-name-color, var(--primary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-value {
    font-size: var(--pulse-font-size, 14px);
    font-weight: 500;
    color: var(--pulse-value-color, var(--primary-text-color));
    white-space: nowrap;
  }

  /* Bar container */
  .bar-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    container-type: size;
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
    z-index: 3;
    /* Auto-scale font to bar height: 30% of container, clamped 10px\u201316px */
    font-size: var(--pulse-font-size, clamp(10px, 40cqh, 16px));
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
    --mdc-icon-size: 1.3em;
    font-size: var(--pulse-font-size, 14px);
    color: var(--pulse-icon-color, var(--secondary-text-color));
    flex-shrink: 0;
  }
  .bar-content .bar-icon {
    color: var(--pulse-icon-color, var(--pulse-name-color, var(--primary-text-color)));
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

  /* Sparkline overlay [US-1] */
  .bar-sparkline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.45;
    color: var(--pulse-sparkline-color, var(--primary-text-color, #333));
  }
  .bar-sparkline path {
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Compact mode [US-3] */
  ha-card:has(.compact) {
    padding: 10px;
  }
  .pulse-card.compact {
    gap: var(--pulse-gap, 6px);
  }
  .compact .bar-row {
    gap: 3px;
  }
  .compact .bar-labels {
    padding: 0;
  }
  .compact .bar-name {
    font-size: var(--pulse-font-size, 12px);
  }
  .compact .bar-value {
    font-size: var(--pulse-font-size, 12px);
  }
  .compact .bar-indicator {
    font-size: 10px;
  }
`;var U="0.2.1",W="Pulse Card:",_={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function F(i,t,n){return Math.min(Math.max(i,t),n)}function ot(i,t,n,e=!1){let o=parseFloat(i);if(isNaN(o))return 0;let s=n-t;if(s<=0)return 0;let r=e?n-o:o;return F((r-t)/s,0,1)*100}function rt(i,t){if(!t||t.length===0)return null;let n=parseFloat(i);if(isNaN(n))return null;for(let e of t)if(n>=e.from&&n<=e.to)return e;return null}function O(i){let t=i.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function st(i,t,n){let e=O(i),o=O(t),s=Math.round(e.r+(o.r-e.r)*n),r=Math.round(e.g+(o.g-e.g)*n),a=Math.round(e.b+(o.b-e.b)*n);return`rgb(${s}, ${r}, ${a})`}function at(i,t){if(!t||t.length<2)return null;let n=parseFloat(i);if(isNaN(n))return null;let e=t[0].from<=t[t.length-1].from?t:[...t].sort((o,s)=>o.from-s.from);for(let o=0;o<e.length-1;o++){let s=e[o],r=e[o+1];if(n>=s.from&&n<=r.to){let a=r.from-s.from,l=a>0?(n-s.from)/a:0;return st(s.color,r.color,F(l,0,1))}}return n<=e[0].from?e[0].color:e[e.length-1].color}function lt(i,t){let n=i.min,e=i.max;return n==null&&(n=t?.attributes?.min??_.min),e==null&&(e=t?.attributes?.max??_.max),{min:parseFloat(String(n)),max:parseFloat(String(e))}}function E(i,t,n){return i.decimal??t.decimal??n?.entities?.[i.entity]?.display_precision??null}function N(i,t){return i.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function ct(i,t,n){let e=parseFloat(i);if(isNaN(e))return String(i);let o=t!=null?e.toFixed(t):e.toString();return n?`${o}${n}`:o}function j(i,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(i),e=parseFloat(t);if(isNaN(n)||isNaN(e))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(e))return{direction:"neutral",delta:0};let o=Math.abs(n-e),s=Math.max(Math.abs(n),1);if(o>s*1e3)return{direction:"neutral",delta:0};let r=Math.round((n-e)*100)/100;return{direction:r>0?"up":r<0?"down":"neutral",delta:r}}function D(i,t,n,e,o){let s=i==="up"?"\u25B2":i==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:s,text:s};let r=e!=null?t.toFixed(e):String(Math.round(t*100)/100),a=t>0?"+":"";return{arrow:s,text:`${s} ${a}${r}${o||""}`}}function x(i){return i==null||i===""?"":String(i).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function S(i,...t){console.warn(`${W} ${i}`,...t)}async function X(i,t,n=60){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,s=new Date(o.getTime()-n*60*1e3);try{let r=await i.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let a of t){let l=r?.[a];if(!l||l.length===0){e[a]=null;continue}let c=parseFloat(l[0].s);e[a]=isNaN(c)?null:c}}catch(r){S("Failed to fetch history for %s: %O",t.join(", "),r);for(let a of t)e[a]=null}return e}function L(i){if(i==null||i==="")return"";let t=String(i);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function b(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function B(i){return!Array.isArray(i)||i.length<2?i:[...i].sort((t,n)=>t.from-n.from)}function Y(i){if(!i)throw new Error("Please define an entity or entities");if(!i.entity&&!i.entities)throw new Error("Please define an entity or entities");let t={..._,...i,animation:{..._.animation,...i.animation},positions:{..._.positions,...i.positions}};t.severity&&(t.severity=B(t.severity)),t.entities=i.entities?i.entities.map(e=>{let o=typeof e=="string"?{entity:e}:{...e};return o.severity&&(o.severity=B(o.severity)),o}):[{entity:i.entity}];let n=new Set;for(let e of t.entities)n.has(e.entity)&&S('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',e.entity),n.add(e.entity);return t}function A(i,t){if(i==null)return{value:null,showLabel:!1};if(typeof i=="number")return{value:isNaN(i)?null:i,showLabel:!1};if(typeof i=="string"){let n=t?.states[i];if(!n)return{value:null,showLabel:!1};let e=parseFloat(n.state);return{value:isNaN(e)?null:e,showLabel:!1}}return typeof i=="object"&&i.value!==void 0?{value:A(i.value,t).value,showLabel:i.show_label===!0}:{value:null,showLabel:!1}}function T(i,t,n){let e=n?.states[i.entity],o=!e||e.state==="unavailable"||e.state==="unknown"||e.state==="error",{min:s,max:r}=lt(i,e),a=i.attribute?e?.attributes?.[i.attribute]:e?.state,l=parseFloat(a),c=i.complementary??t.complementary,d=o?0:ot(a,s,r,c),p=N(i,e),u=E(i,t,n),m=(i.limit_value??t.limit_value)&&!isNaN(l)?F(l,s,r):a,h=o?"Unavailable":ct(m,u,p),g=i.name??e?.attributes?.friendly_name??i.entity,y="",w="";if(!o){let $=i.severity??t.severity;if($&&$.length>0)if($.some(v=>v.mode==="gradient")){let v=at(l,$);v&&(y=v)}else{let v=rt(l,$);v&&(y=v.color,v.icon&&(w=v.icon))}}let C=y||i.color||t.color||"",I=i.icon||e?.attributes?.icon||"";return{isUnavailable:o,min:s,max:r,numValue:l,fill:d,displayValue:h,name:g,color:C,resolvedIcon:w||I}}function k(i,t){let n=i.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}async function K(i,t,n=24){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,s=new Date(o.getTime()-n*60*60*1e3);try{let r=await i.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let a of t){let l=r?.[a];if(!l||l.length<2){e[a]=[];continue}let c=[];for(let d of l){let p=parseFloat(d.s);if(!isNaN(p)){let u=d.lu??d.last_updated,f=typeof u=="number"?u*1e3:new Date(u).getTime();c.push({t:f,v:p})}}e[a]=c}}catch(r){S("Sparkline fetch failed: %O",r);for(let a of t)e[a]=[]}return e}var G={avg:i=>i.reduce((t,n)=>t+n,0)/i.length,min:i=>Math.min(...i),max:i=>Math.max(...i),median:i=>{let t=[...i].sort((e,o)=>e-o),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},first:i=>i[0],last:i=>i[i.length-1],sum:i=>i.reduce((t,n)=>t+n,0),delta:i=>Math.max(...i)-Math.min(...i),diff:i=>i[i.length-1]-i[0]};function ut(i,t,n="avg"){if(i.length===0||t<1)return[];if(i.length<=t){let p=i[0].t,u=i[i.length-1].t-p||1;return i.map(f=>({x:(f.t-p)/u,v:f.v}))}let e=G[n]||G.avg,o=i[0].t,a=(i[i.length-1].t-o||1)/t,l=[],c=0,d=i[0].v;for(let p=0;p<t;p++){let u=o+(p+1)*a,f=[];for(;c<i.length&&i[c].t<u;)f.push(i[c].v),c++;f.length>0&&(d=e(f)),l.push({x:p/(t-1||1),v:d})}return l}function H(i,t,n,e=24,o="avg",s=!0){if(i.length<2)return"";let r=ut(i,e,o);if(r.length<2)return"";let a=r[0].v,l=r[0].v;for(let h=1;h<r.length;h++)r[h].v<a&&(a=r[h].v),r[h].v>l&&(l=r[h].v);let c=l-a||1,d=2,p=n-d*2,u=r.map(h=>({x:h.x*t,y:d+p-(h.v-a)/c*p}));if(u.length===2||!s){let h=`M${u[0].x.toFixed(1)},${u[0].y.toFixed(1)}`;for(let g=1;g<u.length;g++)h+=`L${u[g].x.toFixed(1)},${u[g].y.toFixed(1)}`;return h}let f=u[0],m=`M${f.x.toFixed(1)},${f.y.toFixed(1)}`;for(let h=1;h<u.length;h++){let g=u[h],y=(f.x+g.x)/2,w=(f.y+g.y)/2;m+=` ${y.toFixed(1)},${w.toFixed(1)}`,m+=` Q${g.x.toFixed(1)},${g.y.toFixed(1)}`,f=g}return m+=` ${f.x.toFixed(1)},${f.y.toFixed(1)}`,m}function V(i,t){if(!i.visibility)return!0;let n=t?.states[i.entity];if(!n)return!1;let e=i.visibility,o=i.attribute?n.attributes?.[i.attribute]:n.state;if(!i.attribute&&(n.state==="unavailable"||n.state==="unknown"||n.state==="error"))return e.state_equal!==void 0&&String(e.state_equal)===n.state;let s=parseFloat(o);return!(e.state_above!==void 0&&(isNaN(s)||s<=e.state_above)||e.state_below!==void 0&&(isNaN(s)||s>=e.state_below)||e.state_equal!==void 0&&String(o)!==String(e.state_equal)||e.state_not_equal!==void 0&&String(o)===String(e.state_not_equal))}var dt=250,pt=500;function Q(i,t,n){i.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function ft(i,t,n,e){if(!(!n||n.action==="none"))switch(n.action){case"more-info":Q(i,"hass-more-info",{entityId:n.entity||e});break;case"navigate":history.pushState(null,"",n.navigation_path),Q(i,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let o=n.service||n.perform_action;if(!o)break;let[s,r]=o.split(".");t.callService(s,r,n.service_data||n.data).catch(a=>S("Service call %s failed: %O",o,a));break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break}}function ht(i,t,n){let e=t?.[i],o=n?.[i];return e||o||{action:i==="tap_action"?"more-info":"none"}}function M(i,t,n,e,o){let s=ht(o,e,n);ft(i,t,s,e.entity)}function q(i){let t=i.__pulseCleanup;typeof t=="function"&&t()}function J(i,t,n,e,o){q(i);let s=new AbortController,{signal:r}=s,a=0,l=null,c=null,d=!1;i.__pulseCleanup=()=>{s.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete i.__pulseCleanup},i.setAttribute("tabindex","0"),i.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),n&&M(t,n,e,o,"tap_action"))},{signal:r}),i.addEventListener("click",u=>{if(u.preventDefault(),d){d=!1;return}a++,a===1?l=setTimeout(()=>{a=0,n&&M(t,n,e,o,"tap_action")},dt):a===2&&(l&&clearTimeout(l),a=0,n&&M(t,n,e,o,"double_tap_action"))},{signal:r}),i.addEventListener("pointerdown",()=>{d=!1,c=setTimeout(()=>{d=!0,n&&M(t,n,e,o,"hold_action")},pt)},{signal:r});let p=()=>{c&&clearTimeout(c)};i.addEventListener("pointerup",p,{signal:r}),i.addEventListener("pointercancel",p,{signal:r}),i.addEventListener("contextmenu",u=>u.preventDefault(),{signal:r})}var z=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=R,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)q(n)}setConfig(t){this._config=Y(t),this._elements={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let e of this._cfg.entities){let o=t.states[e.entity],s=this._prevStates[e.entity];if(!s||s.state!==o?.state||s.last_updated!==o?.last_updated){n=!0;break}let r=e.target??this._cfg.target;if(typeof r=="string"){let a=t.states[r],l=this._prevStates[`__target__${r}`];if(!l||l.state!==a?.state||l.last_updated!==a?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,e=n>1?` columns-${n}`:"",o=t.entity_row?" entity-row":"",s=t.layout==="compact"?" compact":"",r=[];n>1&&r.push(`--pulse-columns:${n}`),t.gap!==void 0&&r.push(`--pulse-gap:${x(L(t.gap))}`),t.font_size!==void 0&&r.push(`--pulse-font-size:${x(L(t.font_size))}`);let a=r.length>0?` style="${r.join(";")}"`:"",l="";t.title&&(l+=`<div class="pulse-title">${b(t.title)}</div>`),l+=`<div class="pulse-card${e}${o}${s}"${a}>`;for(let u of t.entities)l+=this._renderBarRow(u);l+="</div>";let c=t.entity_row?l:`<ha-card>${l}</ha-card>`,d=this._shadow.querySelector("ha-card, .pulse-card");d&&d.remove();let p=document.createElement("template");p.innerHTML=c,this._shadow.appendChild(p.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let u of t.entities){let f=this._elements.rows?.[u.entity];f&&(f.style.display=V(u,this._hass)?"":"none")}}_renderBarRow(t){let n=this._cfg,e=T(t,n,this._hass),o=t.positions?.name??n.positions?.name??_.positions.name,s=t.positions?.value??n.positions?.value??_.positions.value,r=t.positions?.icon??n.positions?.icon??_.positions.icon,a=t.positions?.indicator??n.positions?.indicator??_.positions.indicator,c=(t.indicator??n.indicator)?.show===!0&&a==="off"?"outside":a,d=t.animation??{},p=d.speed??n.animation.speed,u=d.effect??n.animation.effect,f=d.state??n.animation.state,m=this._buildIndicatorHtml(t,n,c),h=this._buildPositionHtml(e,o,s,r,c,m,"outside"),g=this._buildPositionHtml(e,o,s,r,c,m,"inside"),y=x(L(t.height??n.height)),w=x(L(t.border_radius??n.border_radius)),C=e.color?`background-color:${x(e.color)};`:"",I=u==="charge"&&!e.isUnavailable?" charge":"",P=f==="off"?"transition:none;":"",$=k(t,n),v=`width:${e.fill*$}%;${P}${C}`,tt=this._buildTargetHtml(t,n,e.min,e.max),et=this._buildSparklineHtml(t,n),nt=`
      <div class="bar-container" style="height:${y};border-radius:${w};--pulse-animation-speed:${p}s;">
        <div class="bar-track"></div>
        ${et}
        <div class="bar-fill${I}" data-entity="${b(t.entity)}" style="${v}"></div>
        ${tt}
        ${g}
      </div>`,it=e.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${e.numValue}" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: ${b(e.displayValue)}"`;return`<div class="bar-row${e.isUnavailable?" unavailable":""}" data-entity="${b(t.entity)}" ${it}>${h}${nt}</div>`}_buildIndicatorHtml(t,n,e){let o=t.indicator??n.indicator;if(!(o?.show===!0&&e!=="off"))return"";let r=this._indicators[t.entity],a=r?.direction??"neutral",l=o?.show_delta===!0&&!!r,c=this._hass?.states[t.entity],d=N(t,c),p=E(t,n,this._hass),{text:u}=D(a,r?.delta??0,l,p,d),f=o?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${a}${f}">${u}</span>`}_buildPositionHtml(t,n,e,o,s,r,a){if(n!==a&&e!==a&&o!==a&&s!==a)return"";let c=`<div class="${a==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return o===a&&t.resolvedIcon&&(c+=`<ha-icon class="bar-icon" icon="${b(t.resolvedIcon)}"></ha-icon>`),n===a&&(c+=`<span class="bar-name">${b(t.name)}</span>`),c+='</div><div class="bar-label-right">',e===a&&(c+=`<span class="bar-value">${b(t.displayValue)}</span>`),s===a&&r&&(c+=r),c+="</div></div>",c}_buildTargetHtml(t,n,e,o){let s=t.target??n.target,{value:r,showLabel:a}=A(s,this._hass);if(r===null)return"";let l=F((r-e)/(o-e),0,1)*100,c=k(t,n),d=`left:${l*c}%`,p=a?`<span class="bar-target-label">${b(r)}</span>`:"";return`<div class="bar-target${a?" show-label":""}" style="${d}">${p}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let e=T(n,t,this._hass),o=this._elements.rows?.[n.entity];if(!o)continue;let s=V(n,this._hass);if(o.style.display=s?"":"none",!s)continue;o.classList.toggle("unavailable",e.isUnavailable);let r=o.querySelector(".bar-fill");if(r){let u=k(n,t);r.style.width=`${e.fill*u}%`,r.style.backgroundColor=e.color||"";let f=o.querySelector(".bar-sparkline");f&&(f.style.width=`${e.fill*u}%`);let m=o.querySelector(".bar-icon");m&&e.resolvedIcon&&m.setAttribute("icon",e.resolvedIcon)}let a=o.querySelectorAll(".bar-name");for(let u of a)u.textContent=e.name;let l=o.querySelectorAll(".bar-value");for(let u of l)u.textContent=e.displayValue;o.setAttribute("aria-valuenow",e.isUnavailable?"0":String(e.numValue)),o.setAttribute("aria-valuemin",String(e.min)),o.setAttribute("aria-valuemax",String(e.max)),o.setAttribute("aria-label",`${b(e.name)}: ${b(e.displayValue)}`);let c=o.querySelector(".bar-target"),d=n.target??t.target,{value:p}=A(d,this._hass);if(p!==null){let u=F((p-e.min)/(e.max-e.min),0,1)*100,f=k(n,t);if(c){c.style.left=`${u*f}%`,c.style.display="";let m=c.querySelector(".bar-target-label");m&&(m.textContent=String(p))}}else c&&(c.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(e=>(e.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=new Map;for(let o of t.entities){let s=o.indicator??t.indicator;if(!s?.show)continue;let r=s.period??60;e.has(r)||e.set(r,[]),e.get(r).push({entity:o.entity,icfg:s})}for(let[o,s]of e){let r=s.map(l=>l.entity),a=await X(this._hass,r,o);for(let{entity:l,icfg:c}of s){let d=n.get(l),p=this._hass?.states[l],u=d?.attribute?p?.attributes?.[d.attribute]:p?.state,f=j(u,a[l]);this._indicators[l]=f;let m=this._elements.rows?.[l];if(!m)continue;let h=m.querySelector(".bar-indicator");if(h&&d){let g=this._hass?.states[l],y=N(d,g),w=E(d,t,this._hass),{text:C}=D(f.direction,f.delta,c.show_delta===!0,w,y),I=c.inverted===!0?" inverted":"";h.textContent=C,h.className=`bar-indicator ${f.direction}${I}`}}}}catch(n){S("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(t,n){let e=t.sparkline??n.sparkline;if(!e)return null;let o=e===!0?{}:e.show?e:null;if(!o)return null;let s=o.hours_to_show??24,r=o.points_per_hour??1;return{hours:s,pointsPerHour:r,slots:Math.max(s*r,2),aggregateFunc:o.aggregate_func??"avg",smoothing:o.smoothing!==!1,strokeWidth:o.line_width??o.stroke_width??1.5,color:o.color??null,updateInterval:o.update_interval??300}}_buildSparklineHtml(t,n){let e=this._resolveSparklineConfig(t,n);if(!e)return"";let o=this._sparklineData[t.entity];if(!o||o.length<2)return"";let s=H(o,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!s)return"";let r=T(t,n,this._hass),a=k(t,n),l=r.fill*a,c=e.color?`color:${x(e.color)};`:"";return`<svg class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="${`width:${l}%;${c}`}"><path d="${s}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(s=>!!this._resolveSparklineConfig(s,t)))return;let e=300;for(let s of t.entities){let r=this._resolveSparklineConfig(s,t);r&&r.updateInterval<e&&(e=r.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<e&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let n=new Map;for(let e of t.entities){let o=this._resolveSparklineConfig(e,t);if(!o)continue;let s=o.hours;n.has(s)||n.set(s,[]),n.get(s).push(e.entity)}for(let[e,o]of n){let s=await K(this._hass,o,e);for(let r of o)this._sparklineData[r]=s[r]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){S("Sparkline fetch failed: %O",n)}}_updateSparklines(){let t=this._cfg;if(t)for(let n of t.entities){let e=this._resolveSparklineConfig(n,t);if(!e)continue;let o=this._elements.rows?.[n.entity];if(!o)continue;let s=this._sparklineData[n.entity];if(!s||s.length<2)continue;let r=H(s,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!r)continue;let a=o.querySelector(".bar-sparkline");if(a){let l=a.querySelector("path");l&&l.setAttribute("d",r);let c=T(n,t,this._hass),d=k(n,t);a.style.width=`${c.fill*d}%`}else{let l=o.querySelector(".bar-container");if(!l)continue;let c=T(n,t,this._hass),d=k(n,t),p=c.fill*d,u=e.color?`color:${x(e.color)};`:"",f=`<svg xmlns="http://www.w3.org/2000/svg" class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${p}%;${u}"><path d="${r}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`,m=new DOMParser().parseFromString(f,"image/svg+xml"),h=document.importNode(m.documentElement,!0),g=l.querySelector(".bar-track");g&&g.nextSibling?l.insertBefore(h,g.nextSibling):l.appendChild(h)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let e=this._hass?.states[n.entity];e&&(this._prevStates[n.entity]={state:e.state,last_updated:e.last_updated});let o=n.target??t.target;if(typeof o=="string"){let s=this._hass?.states[o];s&&(this._prevStates[`__target__${o}`]={state:s.state,last_updated:s.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=this._shadow.querySelectorAll(".bar-row");for(let o of e){let s=o.dataset.entity;if(s){this._elements.rows[s]=o;let r=n.get(s);r&&J(o,this,this._hass,t,r)}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,e=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,e),min_rows:1}}static async getConfigElement(){return await import("./editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(e=>{let o=t.states[e];return e.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",z);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${U} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Ft=z;export{Ft as default};

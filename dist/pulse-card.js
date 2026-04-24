var we=`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
    container-type: inline-size;
  }

  .pulse-card {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-gap, 12px);
  }

  /* Multi-column grid \u2014 responsive: auto-collapse on narrow screens */
  .pulse-card[class*="columns-"] {
    display: grid;
    grid-template-columns: repeat(var(--pulse-columns, 1), 1fr);
    gap: var(--pulse-gap, 16px);
  }

  @container (max-width: 300px) {
    .pulse-card[class*="columns-"] {
      grid-template-columns: 1fr;
    }
  }

  /* Bar row \u2014 each entity */
  .bar-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
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

  /* Target marker \u2014 visually distinct from fill */
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

  /* Target label */
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
    display: flex;
    align-items: center;
    line-height: 0;
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
  .bar-row:not(.has-ripple):active {
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

  /* Secondary info group \u2014 wraps name + secondary line */
  .bar-name-group {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 1px;
  }

  /* Secondary info text */
  .bar-secondary {
    font-size: 0.75em;
    opacity: 0.85;
    color: var(--pulse-secondary-color, var(--secondary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Inside bar \u2014 inherit text color from parent, reduce opacity */
  .bar-content .bar-secondary {
    color: var(--pulse-secondary-color, inherit);
    opacity: 0.6;
  }

  /* Sparkline overlay */
  .bar-sparkline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.45;
    color: var(--pulse-sparkline-color, var(--primary-text-color));
  }
  .bar-sparkline path {
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Interactive slider bars */
  .bar-row[data-interactive] .bar-container {
    touch-action: none;
    cursor: pointer;
  }
  .bar-row[data-interactive].sliding .bar-container {
    cursor: grabbing;
  }
  .bar-row[data-interactive].sliding .bar-fill {
    transition: none;
  }

  /* Step buttons for interactive bars */
  .bar-step-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    min-width: 28px;
    height: 100%;
    cursor: pointer;
    opacity: 0.6;
    color: var(--primary-text-color);
    font-size: 18px;
    font-weight: 500;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    overflow: hidden;
    transition: opacity 0.15s;
  }
  .bar-step-btn:hover {
    opacity: 1;
  }
  .bar-step-btn:not(.has-ripple):active {
    opacity: 0.4;
  }

  /* Interactive bar row layout \u2014 bar-container between step buttons */
  .bar-row[data-interactive] .bar-interactive-row {
    display: flex;
    align-items: stretch;
    gap: 2px;
  }
  .bar-row[data-interactive] .bar-interactive-row .bar-container {
    flex: 1;
    min-width: 0;
  }

  /* Compact mode */
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

  /* Reduced motion \u2014 respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .bar-fill.charge { animation: none; }
    .bar-fill, .bar-row { transition: none; }
  }
`;var $e="1.0.0",Se="Pulse Card:",Y={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function h(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function A(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function J(e,t,n){return Math.min(Math.max(e,t),n)}function pt(e){if(e==null||e==="")return"";let t=String(e);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function ot(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}var vo=new Set(["on","open","home","locked","playing","active"]),yo=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function Te(e,t,n){if(typeof e!="string")return null;let o=e.toLowerCase();return vo.has(o)?n:yo.has(o)?t:null}function _o(e,t){let n=String(e),o=n.charAt(0).toUpperCase()+n.slice(1);return t?`${o}${t}`:o}function bo(e,t,n,o=!1){let i=Te(e,t,n),s=i!==null?i:parseFloat(e);if(isNaN(s))return 0;let a=n-t;if(a<=0)return 0;let r=o?n-s:s;return J((r-t)/a,0,1)*100}function xo(e,t){if(!t||t.length===0)return null;let n=parseFloat(e);if(isNaN(n))return null;for(let o of t)if(n>=o.from&&n<=o.to)return o;return null}function ke(e){let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function wo(e,t,n){let o=ke(e),i=ke(t),s=Math.round(o.r+(i.r-o.r)*n),a=Math.round(o.g+(i.g-o.g)*n),r=Math.round(o.b+(i.b-o.b)*n);return`rgb(${s}, ${a}, ${r})`}function $o(e,t){if(!t||t.length<2)return null;let n=parseFloat(e);if(isNaN(n))return null;let o=t[0].from<=t[t.length-1].from?t:[...t].sort((i,s)=>i.from-s.from);for(let i=0;i<o.length-1;i++){let s=o[i],a=o[i+1];if(n>=s.from&&n<=a.to){let r=a.from-s.from,l=r>0?(n-s.from)/r:0;return wo(s.color,a.color,J(l,0,1))}}return n<=o[0].from?o[0].color:o[o.length-1].color}function So(e,t,n){let o=e.min??n?.min,i=e.max??n?.max;return o==null&&(o=t?.attributes?.min??t?.attributes?.min_temp??Y.min),i==null&&(i=t?.attributes?.max??t?.attributes?.max_temp??Y.max),{min:parseFloat(String(o)),max:parseFloat(String(i))}}function kt(e,t,n){return e.decimal??t.decimal??n?.entities?.[e.entity]?.display_precision??null}function ut(e,t){return e.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function ko(e){return!isFinite(e)||e<0?"0":e>=1e9?`${(e/1e9).toFixed(1)}G`:e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString()}function Co(e,t,n){let o=parseFloat(e);if(isNaN(o))return String(e);let i=t!=null?o.toFixed(t):o.toString();return n?`${i}${n}`:i}function Fe(e,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(e),o=parseFloat(t);if(isNaN(n)||isNaN(o))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(o))return{direction:"neutral",delta:0};let i=Math.abs(n-o),s=Math.max(Math.abs(n),1);if(i>s*1e3)return{direction:"neutral",delta:0};let a=Math.round((n-o)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function Vt(e,t,n,o,i){let s=e==="up"?"\u25B2":e==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:s,text:s};let a=o!=null?t.toFixed(o):String(Math.round(t*100)/100),r=t>0?"+":"";return{arrow:s,text:`${s} ${r}${a}${i||""}`}}function Q(e,...t){console.warn(`${Se} ${e}`,...t)}async function Me(e,t,n=60){let o={};if(!e?.callWS||t.length===0)return o;let i=new Date,s=new Date(i.getTime()-n*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:i.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let r of t){let l=a?.[r];if(!l||l.length===0){o[r]=null;continue}let d=parseFloat(l[0].s);o[r]=isNaN(d)?null:d}}catch(a){Q("Failed to fetch history for %s: %O",t.join(", "),a);for(let r of t)o[r]=null}return o}function Ce(e){return!Array.isArray(e)||e.length<2?e:[...e].sort((t,n)=>t.from-n.from)}function ze(e){if(!e)throw new Error("Please define an entity or entities");if(!e.entity&&!e.entities)throw new Error("Please define an entity or entities");let t={...Y,...e,animation:{...Y.animation,...e.animation},positions:{...Y.positions,...e.positions}};t.columns!==null&&t.columns!==void 0&&(t.columns=Number(t.columns)||1),t.animation.speed!==null&&t.animation.speed!==void 0&&(t.animation.speed=Number(t.animation.speed)||Y.animation.speed),t.severity&&(t.severity=Ce(t.severity)),t.entities=e.entities?e.entities.map(o=>{let i=typeof o=="string"?{entity:o}:{...o};return i.severity&&(i.severity=Ce(i.severity)),!i.secondary_info&&t.secondary_info&&(i._cardSecondaryInfo=t.secondary_info),i}):[{entity:e.entity}];let n=new Set;for(let o of t.entities)n.has(o.entity)&&Q('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',o.entity),n.add(o.entity);return t}function Ct(e,t){if(e==null)return{value:null,showLabel:!1};if(typeof e=="number")return{value:isNaN(e)?null:e,showLabel:!1};if(typeof e=="string"){let n=t?.states[e];if(!n)return{value:null,showLabel:!1};let o=parseFloat(n.state);return{value:isNaN(o)?null:o,showLabel:!1}}return typeof e=="object"&&e.value!==void 0?{value:Ct(e.value,t).value,showLabel:e.show_label===!0}:{value:null,showLabel:!1}}function Ot(e,t,n){let o=n?.states[e.entity],i=!o||o.state==="unavailable"||o.state==="unknown"||o.state==="error",{min:s,max:a}=So(e,o,t),r=e.attribute?o?.attributes?.[e.attribute]:o?.state,l=e.attribute?null:Te(r,s,a),d=l!==null,c=d?l:parseFloat(r),f=e.complementary??t.complementary,u=i?0:bo(r,s,a,f),p=ut(e,o),m=kt(e,t,n),y=(e.limit_value??t.limit_value)&&!isNaN(c)?J(c,s,a):r,v=i?"Unavailable":e.state_map?.[r]?e.state_map[r]:d?_o(r,p):Co(y,m,p),_=e.name??o?.attributes?.friendly_name??e.entity,S="",b="";if(!i){let E=e.state_color,M=o?.state;if(E&&M&&E[M])S=E[M];else{let C=e.attribute_color??t.attribute_color;if(C?.attribute&&C?.map){let $=o.attributes?.[C.attribute];if($!=null){let x=C.map[String($)];x&&(S=x)}}if(!S){let $=e.severity??t.severity;if($&&$.length>0)if($.some(I=>I.mode==="gradient")){let I=$o(c,$);I&&(S=I)}else{let I=xo(c,$);I&&(S=I.color,I.icon&&(b=I.icon))}}}}let w=S||e.color||t.color||"",k=e.icon||o?.attributes?.icon||"";return{isUnavailable:i,min:s,max:a,numValue:c,fill:u,displayValue:v,name:_,color:w,resolvedIcon:b||k}}function ft(e,t){let n=e.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}async function At(e,t,n=24){let o={};if(!e?.callWS||t.length===0)return o;let i=new Date,s=new Date(i.getTime()-n*60*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:i.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let r of t)try{let l=a?.[r];if(!l||l.length<2){o[r]=[];continue}let d=[];for(let c of l){let f=parseFloat(c.s);if(!isNaN(f)){let u=c.lu??c.last_updated,p=typeof u=="number"?u*1e3:new Date(u).getTime();isFinite(p)&&d.push({t:p,v:f})}}o[r]=d}catch{o[r]=[]}}catch(a){Q("Sparkline fetch failed: %O",a);for(let r of t)o[r]=[]}return o}var Ae={avg:e=>e.reduce((t,n)=>t+n,0)/e.length,min:e=>Math.min(...e),max:e=>Math.max(...e),median:e=>{let t=[...e].sort((o,i)=>o-i),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},first:e=>e[0],last:e=>e[e.length-1],sum:e=>e.reduce((t,n)=>t+n,0),delta:e=>Math.max(...e)-Math.min(...e),diff:e=>e[e.length-1]-e[0]};function Ao(e,t,n="avg"){if(e.length===0||t<1)return[];if(e.length<=t){let f=e[0].t,u=e[e.length-1].t-f||1;return e.map(p=>({x:(p.t-f)/u,v:p.v}))}let o=Ae[n]||Ae.avg,i=e[0].t,r=(e[e.length-1].t-i||1)/t,l=[],d=0,c=e[0].v;for(let f=0;f<t;f++){let u=i+(f+1)*r,p=[];for(;d<e.length&&e[d].t<u;)p.push(e[d].v),d++;p.length>0&&(c=o(p)),l.push({x:f/(t-1||1),v:c})}return l}function yt(e,t,n,o=24,i="avg",s=!0){if(e.length<2)return"";let a=Ao(e,o,i);if(a.length<2)return"";let r=a[0].v,l=a[0].v;for(let g=1;g<a.length;g++)a[g].v<r&&(r=a[g].v),a[g].v>l&&(l=a[g].v);let d=l-r||1,c=2,f=n-c*2,u=a.map(g=>({x:g.x*t,y:c+f-(g.v-r)/d*f}));if(u.length===2||!s){let g=`M${u[0].x.toFixed(1)},${u[0].y.toFixed(1)}`;for(let y=1;y<u.length;y++)g+=`L${u[y].x.toFixed(1)},${u[y].y.toFixed(1)}`;return g}let p=u[0],m=`M${p.x.toFixed(1)},${p.y.toFixed(1)}`;for(let g=1;g<u.length;g++){let y=u[g],v=(p.x+y.x)/2,_=(p.y+y.y)/2;m+=` ${v.toFixed(1)},${_.toFixed(1)}`,m+=` Q${y.x.toFixed(1)},${y.y.toFixed(1)}`,p=y}return m+=` ${p.x.toFixed(1)},${p.y.toFixed(1)}`,m}function Ut(e,t){if(!e.visibility)return!0;let n=t?.states[e.entity];if(!n)return!1;let o=e.visibility,i=e.attribute?n.attributes?.[e.attribute]:n.state;if(!e.attribute&&(n.state==="unavailable"||n.state==="unknown"||n.state==="error"))return o.state_equal!==void 0&&String(o.state_equal)===n.state;let s=parseFloat(i);return!(o.state_above!==void 0&&(isNaN(s)||s<=o.state_above)||o.state_below!==void 0&&(isNaN(s)||s>=o.state_below)||o.state_equal!==void 0&&String(i)!==String(o.state_equal)||o.state_not_equal!==void 0&&String(i)===String(o.state_not_equal))}var Ee={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:e=>e/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function Tt(e,t,n,o){if(o<=0)return J(e,t,n);let i=Math.round((e-t)/o)*o+t,s=(String(o).split(".")[1]||"").length,a=Number(i.toFixed(s));return J(a,t,n)}function Ie(e,t,n){if(n?.service){let a=n.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let r={entity_id:e};if(n.data)for(let[l,d]of Object.entries(n.data))r[l]=d==="$value"?t:d;return{domain:a[0],service:a[1],data:r}}let o=e.split(".")[0],i=Ee[o];if(!i)return null;let s=i.transform?i.transform(t):t;return{domain:o,service:i.service,data:{entity_id:e,[i.dataKey]:s}}}function _t(e,t,n,o){let i=e.split(".")[0],a=Ee[i]?.fixedRange,r=t?.attributes,l=o?.min??r?.min??r?.min_temp??a?.min??0,d=o?.max??r?.max??r?.max_temp??a?.max??100,c=n?.step??r?.step??r?.target_temp_step??r?.percentage_step??a?.step??1;return{min:Number(l),max:Number(d),step:Number(c)||1}}function To(e){if(!e)return"";let t=new Date(e).getTime();if(isNaN(t))return"";let n=Date.now()-t;if(n<0)return"just now";let o=Math.floor(n/1e3);if(o<60)return"just now";let i=Math.floor(o/60);if(i<60)return`${i} min ago`;let s=Math.floor(i/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function Wt(e,t){let n=e.secondary_info??e._cardSecondaryInfo;if(!n)return"";if(n.text!==void 0&&n.text!==null&&n.text!=="")return String(n.text);let o=t?.states[e.entity];if(!o)return"";if(n.template)return n.template.replace(/\{(\w+)\}/g,(i,s)=>{let a=o.attributes?.[s];return a==null?"":(s==="bytes"||s==="packets")&&typeof a=="number"?ko(a):String(a)});if(n.attribute){let i=o.attributes?.[n.attribute];return i!=null?String(i):""}return n.type==="last_changed"?To(o.last_changed):""}function Ft(e,t,n){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function ht(e,t,n,o,i){if(!(!n||n.action==="none"))switch(n.action){case"more-info":Ft(e,"hass-more-info",{entityId:n.entity||o});break;case"navigate":n.navigation_path&&(history.pushState(null,"",n.navigation_path),Ft(e,"location-changed",{replace:!1}));break;case"call-service":case"perform-action":{let s=n.service||n.perform_action;if(!s)break;let[a,r]=s.split(".");t.callService(a,r,n.service_data||n.data).catch(l=>i("Service call %s failed: %O",s,l));break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break;case"toggle":t.callService("homeassistant","toggle",{entity_id:n.entity||o}).catch(s=>i("Toggle %s failed: %O",n.entity||o,s));break}}function Fo(e,t,n){let o=t?.[e],i=n?.[e];return o||i||{action:e==="tap_action"?"more-info":"none"}}function Mt(e,t,n,o,i){let s=Fo(i,o,n);ht(e,t,s,o.entity,Q)}function jt(e){let t=e.__pulseCleanup;typeof t=="function"&&t()}function Le(e,t,n,o,i){jt(e);let s=new AbortController,{signal:a}=s,r=0,l=null,d=null,c=!1;e.__pulseCleanup=()=>{s.abort(),l&&clearTimeout(l),d&&clearTimeout(d),delete e.__pulseCleanup},e.setAttribute("tabindex","0"),e.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),t._hass&&Mt(t,t._hass,o,i,"tap_action"))},{signal:a}),e.addEventListener("click",u=>{if(u.preventDefault(),c){c=!1;return}e.__pulseSliding||(r++,r===1?l=setTimeout(()=>{r=0,t._hass&&Mt(t,t._hass,o,i,"tap_action")},250):r===2&&(l&&clearTimeout(l),r=0,t._hass&&Mt(t,t._hass,o,i,"double_tap_action")))},{signal:a}),e.addEventListener("pointerdown",()=>{c=!1,d=setTimeout(()=>{c=!0,t._hass&&Mt(t,t._hass,o,i,"hold_action")},500)},{signal:a});let f=()=>{d&&clearTimeout(d)};e.addEventListener("pointerup",f,{signal:a}),e.addEventListener("pointercancel",f,{signal:a}),e.addEventListener("contextmenu",u=>u.preventDefault(),{signal:a})}var Mo=50;function Zt(e){let t=e.__pulseSliderCleanup;typeof t=="function"&&t()}function Ne(e,t,n,o){Zt(e);let i=e.querySelector(".bar-container");if(!i)return;let s=i,a=new AbortController,{signal:r}=a,l=null;e.__pulseSliderCleanup=()=>{a.abort(),l&&clearTimeout(l),g&&clearInterval(g),delete e.__pulseSliderCleanup};let d=typeof o.interactive=="object"?o.interactive:typeof n.interactive=="object"?n.interactive:void 0,c=null;function f(_){let S=s.getBoundingClientRect(),b=Math.max(0,Math.min(_-S.left,S.width)),w=S.width>0?b/S.width:0,F=t._hass?.states[o.entity],{min:E,max:M,step:C}=_t(o.entity,F,d,o),$=E+w*(M-E);return Tt($,E,M,C)}function u(_){let b=t._hass?.states[o.entity],{min:w,max:k,step:F}=_t(o.entity,b,d,o),E=k-w,M=E>0?(_-w)/E*100:0,C=s.querySelector(".bar-fill");C&&(C.style.width=`${M}%`);let $=ut(o,b),x=(String(F).split(".")[1]||"").length,I=x>0?_.toFixed(x):String(Math.round(_)),z=$?`${I}${$}`:I,T=e.querySelectorAll(".bar-value");for(let P of T)P.textContent=z}function p(){if(!c)return;let _=s.querySelector(".bar-fill");_&&(_.style.transition="",_.style.width=c.fillWidth);let S=e.querySelectorAll(".bar-value");for(let b of S)b.textContent=c.displayValue}function m(_){let S=Ie(o.entity,_,d);if(!S){Q("No slider service mapping for %s",o.entity),p();return}let b=t._hass;if(!b){p();return}b.callService(S.domain,S.service,S.data).catch(w=>{Q("Slider service call failed for %s: %O",o.entity,w),p()})}s.addEventListener("pointerdown",_=>{if(!t._hass)return;_.preventDefault();let S=s.querySelector(".bar-fill"),b=e.querySelector(".bar-value");c={fillWidth:S?.style.width||"0%",displayValue:b?.textContent||"",pointerId:_.pointerId,startX:_.clientX},e.__pulseSliding=!0,s.setPointerCapture(_.pointerId),e.classList.add("sliding"),S&&(S.style.transition="none");let w=f(_.clientX);u(w)},{signal:r}),s.addEventListener("pointermove",_=>{if(!c||_.pointerId!==c.pointerId)return;_.preventDefault();let S=f(_.clientX);u(S)},{signal:r}),s.addEventListener("pointerup",_=>{if(!c||_.pointerId!==c.pointerId)return;_.preventDefault();let S=s.querySelector(".bar-fill");S&&(S.style.transition=""),e.classList.remove("sliding"),s.releasePointerCapture(_.pointerId);let b=f(_.clientX);u(b),m(b),c=null,l=setTimeout(()=>{e.__pulseSliding=!1},Mo)},{signal:r}),s.addEventListener("pointercancel",_=>{if(!c||_.pointerId!==c.pointerId)return;let S=s.querySelector(".bar-fill");S&&(S.style.transition=""),e.classList.remove("sliding"),s.releasePointerCapture(_.pointerId),p(),c=null,e.__pulseSliding=!1},{signal:r});let g=null;function y(_){let S=t._hass;if(!S)return;let b=S.states[o.entity],{min:w,max:k,step:F}=_t(o.entity,b,d,o),E=o.attribute?parseFloat(b?.attributes?.[o.attribute]):parseFloat(b?.state);if(isNaN(E))return;let M=Tt(E+_*F,w,k,F);M!==E&&(u(M),m(M))}let v=e.querySelectorAll(".bar-step-btn");for(let _ of v){let S=Number(_.dataset.step);_.addEventListener("click",w=>{w.stopPropagation(),y(S)},{signal:r}),_.addEventListener("pointerdown",w=>{w.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>y(S),200)},{signal:r});let b=()=>{g&&(clearInterval(g),g=null)};_.addEventListener("pointerup",b,{signal:r}),_.addEventListener("pointercancel",b,{signal:r}),_.addEventListener("pointerleave",b,{signal:r})}e.addEventListener("keydown",_=>{let S=t._hass;if(!S||_.key!=="ArrowRight"&&_.key!=="ArrowUp"&&_.key!=="ArrowLeft"&&_.key!=="ArrowDown")return;_.preventDefault();let b=S.states[o.entity],{min:w,max:k,step:F}=_t(o.entity,b,d,o),E=o.attribute?parseFloat(b?.attributes?.[o.attribute]):parseFloat(b?.state);if(isNaN(E))return;let M=_.key==="ArrowRight"||_.key==="ArrowUp"?1:-1,C=Tt(E+M*F,w,k,F);C!==E&&(u(C),m(C))},{signal:r})}function tt(e){if(!customElements.get("ha-ripple")||e.querySelector("ha-ripple"))return;let t=document.createElement("ha-ripple");e.appendChild(t),e.classList.add("has-ripple")}var He="1.0.0",Et="pulse-climate-card",De="pulse-climate-card-editor",Re="Pulse Climate Card:",ct={heating:{icon:"mdi:fire",cssVar:"--label-badge-yellow",fallback:"#FF9800",label:"Heating"},cooling:{icon:"mdi:snowflake",cssVar:"--label-badge-blue",fallback:"#2196F3",label:"Cooling"},drying:{icon:"mdi:water-off",cssVar:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",cssVar:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",cssVar:"--secondary-text-color",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",cssVar:"--disabled-color",fallback:"#616161",label:"Off"}},Xt={None:{cssVar:"--label-badge-green",fallback:"#4CAF50"},Low:{cssVar:"--label-badge-green",fallback:"#8BC34A"},Medium:{cssVar:"--label-badge-yellow",fallback:"#FF9800"},High:{cssVar:"--label-badge-red",fallback:"#F44336"},Critical:{cssVar:"--label-badge-red",fallback:"#B71C1C"}},Pe=["zones"];var et=["var(--label-badge-blue, #2196F3)","var(--label-badge-red, #F44336)","var(--label-badge-green, #4CAF50)","var(--label-badge-yellow, #FF9800)","var(--accent-color, #9C27B0)","var(--info-color, #00BCD4)","var(--warning-color, #FF5722)","var(--success-color, #8BC34A)"],rt={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},qe={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var Be=`
:host { display: block; }

ha-card {
  overflow: hidden;
  padding: 16px;
  background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
  container-type: inline-size;
  color: var(--primary-text-color);
}

/* Title */
.pulse-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-text-color);
  margin-bottom: 12px;
}

/* Section container */
.section { margin-top: 12px; }
.section:first-child { margin-top: 0; }
.section-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--secondary-text-color);
  opacity: 0.7;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

/* Zone row */
.zone-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.zone-row:focus-visible {
  outline: 2px solid var(--primary-color, #03A9F4);
  outline-offset: 2px;
  border-radius: 4px;
}
.zone-row.unavailable { opacity: 0.5; }
.zone-row.unavailable .power-bar-fill {
  background: var(--disabled-color, #bdbdbd) !important;
  width: 100% !important;
  opacity: 0.2;
}

/* Zone header: name + current temp */
.zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: 4px;
  min-width: 0;
}
.zone-name {
  font-size: var(--pulse-font-size, 14px);
  color: var(--pulse-name-color, var(--primary-text-color));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
.zone-temp {
  font-size: var(--pulse-font-size, 14px);
  font-weight: 600;
  color: var(--pulse-value-color, var(--primary-text-color));
  white-space: nowrap;
  flex-shrink: 0;
}
.zone-target {
  font-size: 0.8em;
  color: var(--secondary-text-color);
  margin-left: 4px;
}
.zone-humidity {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--secondary-text-color);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 1px;
  margin-left: 4px;
}
.zone-humidity ha-icon {
  --mdc-icon-size: 12px;
}

/* Temperature gauge bar */
.temp-gauge {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-gauge-height, 6px);
  border-radius: var(--pulse-gauge-radius, 3px);
}
.temp-gauge-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.25;
}
.temp-gauge-current {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 3px;
  background: var(--primary-text-color);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}
.temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--primary-text-color);
  opacity: 0.5;
  border-radius: 1px;
  z-index: 1;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}

/* Heating/cooling power bar */
.power-bar-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-bar-height, 8px);
  border-radius: var(--pulse-bar-radius, 4px);
}
.power-bar-track {
  position: absolute;
  inset: 0;
  background: var(--primary-color, #03A9F4);
  opacity: 0.12;
  border-radius: inherit;
}
.power-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  transition: width 0.8s ease, background-color 0.3s ease;
}
.power-bar-fill.bar-active {
  box-shadow: 0 0 8px 1px var(--bar-glow-color, rgba(255, 152, 0, 0.4));
  animation: barPulse 2.5s ease-in-out infinite;
}
@keyframes barPulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--bar-glow-color, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--bar-glow-color, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 2px 0;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--pulse-chip-color, var(--secondary-text-color));
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.chip ha-icon { --mdc-icon-size: 14px; }
.chip.severity-high { color: var(--label-badge-red, #F44336); }
.chip.severity-medium { color: var(--label-badge-yellow, #FF9800); }
.chip.severity-critical { color: var(--label-badge-red, #B71C1C); font-weight: 600; }

/* Multi-column zone grid */
.section-zones.columns {
  display: grid;
  gap: var(--pulse-gap, 16px);
}

@container (max-width: 300px) {
  .section-zones.columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.compact .zone-row { gap: 2px; }
.compact .zone-name { font-size: 12px; }
.compact .zone-chips { gap: 4px; }
.compact .chip { font-size: 10px; }

/* System section rows */
.system-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
}
.system-label {
  font-size: 12px;
  color: var(--secondary-text-color);
  min-width: 80px;
}
/* \u2500\u2500 Chart Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Graph container */
.chart-container {
  position: relative;
  width: 100%;
  height: var(--pulse-graph-height, 80px);
  overflow: hidden;
  border-radius: 4px;
}
.chart-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.chart-svg path {
  stroke-width: var(--pulse-chart-line-width, 1.5);
  vector-effect: non-scaling-stroke;
}
.chart-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  color: var(--secondary-text-color);
  opacity: 0.6;
}

/* Legend chips */
.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 0;
}
.legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--secondary-text-color);
  white-space: nowrap;
}
.legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Donut container */
.donut-container {
  position: relative;
  margin: 8px auto;
}
.donut-container svg {
  width: 100%;
  height: 100%;
}
.donut-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
}

/* Responsive: hide legend at narrow widths */
@container (max-width: 200px) {
  .chart-legend { display: none; }
  .chart-container { height: 50px; }
}

/* \u2500\u2500 Visual Identity Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Filled sparkline (shared by pulse mode, graph, bridge, api) */
.sparkline-filled {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  touch-action: pan-y;
}
.sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Zone Pulse mode \u2014 waveform as row background */
.zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--pulse-row-bg, var(--secondary-background-color, rgba(58, 58, 60, 0.6)));
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y;
}
.zone-row-pulse:focus-visible {
  outline: 2px solid var(--primary-color, #03A9F4);
  outline-offset: 2px;
}
.zone-row-pulse .pulse-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
}
.zone-row-pulse .pulse-info {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pulse-info-left { display: flex; flex-direction: column; gap: 2px; }
.pulse-info-right { display: flex; align-items: baseline; gap: 6px; }
.pulse-current {
  font-size: 20px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}
.pulse-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--secondary-text-color);
}
.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.heating-glow { animation: glowPulse 3s ease-in-out infinite; }

/* Heating row glow \u2014 warm border shadow */
.zone-row-pulse.heating {
  animation: rowGlow 3s ease-in-out infinite;
}
@keyframes rowGlow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Thermal Timeline layout */
.section-thermal-strip .timeline-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.section-thermal-strip .timeline-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.section-thermal-strip .timeline-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-thermal-strip .timeline-row.selected .strip-container,
.section-comfort-strip .heatmap-row.selected .strip-container { height: 18px; }
.section-thermal-strip .timeline-row.selected .zone-label { color: var(--primary-text-color, #e5e5e7); font-weight: 500; }
.section-thermal-strip .zone-label {
  width: 76px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 10px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Strip container \u2014 shared by thermal strip and comfort strip (timeline mode) */
.section-thermal-strip .strip-container,
.section-comfort-strip .strip-container {
  flex: 1;
  height: 14px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
}
.section-thermal-strip .now-marker,
.section-comfort-strip .now-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: var(--primary-text-color, #333);
  opacity: 0.4;
  z-index: 2;
}
.section-thermal-strip .time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
}
.section-thermal-strip .time-label {
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
  opacity: 0.7;
}

/* Strip tooltip \u2014 shared by timeline and heatmap */
.strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: 10px;
  color: var(--primary-text-color, #e5e5e7);
  background: var(--pulse-glass-bg, var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75))));
  backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  transform: translateX(-50%);
}
.strip-tooltip-fixed {
  position: fixed;
  top: auto;
  z-index: 9999;
}

/* Strip crosshair \u2014 vertical line across all zone rows */
.strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--primary-text-color, #333);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
}

/* Drag selection highlight */
.strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--primary-color, #03A9F4);
  opacity: 0.12;
  border-radius: 2px;
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap \u2014 HTML div cells for hover/click */
.section-comfort-strip .heatmap-body { padding: 4px 0; }
.section-comfort-strip .heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.section-comfort-strip .heatmap-row:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent); }
.section-comfort-strip .heatmap-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-comfort-strip .zone-label {
  width: 66px;
  font-size: 10px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  transition: color 0.2s;
}
.section-comfort-strip .heatmap-row.selected .zone-label {
  color: var(--primary-text-color);
  font-weight: 500;
}
/* Heatmap cells \u2014 shared by comfort strip and thermal strip (heatmap mode) */
.section-comfort-strip .cells,
.section-thermal-strip .cells {
  display: flex;
  gap: 1px;
  flex: 1;
  touch-action: pan-y;
}
.section-comfort-strip .cell,
.section-thermal-strip .cell {
  flex: 1;
  height: 16px;
  border-radius: 2px;
  transition: transform 0.15s, height 0.2s;
}
.section-comfort-strip .heatmap-row.selected .cell,
.section-thermal-strip .timeline-row.selected .cell { height: 20px; }
.section-comfort-strip .cell:hover,
.section-thermal-strip .cell:hover { transform: scaleY(1.2); z-index: 1; }
.section-comfort-strip .cell-empty,
.section-thermal-strip .cell-empty {
  background: var(--divider-color, rgba(0,0,0,0.08));
}
.heatmap-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  justify-content: center;
}
.heatmap-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--secondary-text-color, #8e8e93);
}
.heatmap-legend .legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}
.heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 66px;
  padding: 4px 0 14px;
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
}

/* Energy Flow */
.ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.ribbon { cursor: pointer; transition: opacity 0.2s; }
.ribbon:hover { opacity: 1 !important; }
.ribbon.dimmed { opacity: 0.2; }

/* Radial */
.section-radial { text-align: center; }
.radial-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.center-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: opacity 0.25s;
  background: var(--pulse-glass-bg, var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75))));
  backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center-value {
  font-size: 28px;
  font-weight: 300;
  color: var(--primary-text-color);
  transition: font-size 0.25s;
}
.center-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
}
.center-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 2px;
}
.arc-group {
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: 0.6;
}
.arc-group.arc-active { opacity: 1; }
.arc-group:hover { opacity: 1 !important; }
.arc-group.dimmed { opacity: 0.2 !important; }
.arc-group.selected { opacity: 1 !important; }
.arc-path {
  cursor: pointer;
}
.arc-path:hover { opacity: 1 !important; }

/* Radial legend */
.radial-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 16px;
  justify-content: center;
}
.radial-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;
}
.radial-legend .legend-item:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 8%, transparent); }
.radial-legend .legend-item.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 16%, transparent); color: var(--primary-text-color); }
.radial-legend .legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
  padding: 0;
}
.zone-detail.active {
  max-height: 240px;
  opacity: 1;
  padding: 14px 0 16px;
  background: var(--pulse-glass-bg, var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75))));
  backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  border-radius: 8px;
}
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.detail-name { font-size: 15px; font-weight: 500; }
.detail-close {
  font-size: 11px;
  color: var(--secondary-text-color, #636366);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.detail-close:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 10%, transparent); }
.detail-stats { display: flex; gap: 16px; }
.stat { flex: 1; }
.stat-value {
  font-size: 22px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.stat-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 1px;
}
.detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: 3px;
  background: var(--pulse-row-bg, var(--secondary-background-color, #3a3a3c));
  overflow: hidden;
}
.detail-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}
.detail-sparkline {
  border-radius: 6px;
  overflow: hidden;
}

/* API Dashboard */
.api-dashboard {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.api-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.usage-gauge {
  position: relative;
  flex-shrink: 0;
}
.gauge-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
  line-height: 1.2;
}

/* HomeKit pulse dot */
.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.pulse-dot.connected {
  background: var(--label-badge-green, #4CAF50);
  animation: pulse-glow 2s ease-in-out infinite;
}
.pulse-dot.disconnected {
  background: var(--label-badge-red, #F44336);
}
@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.flow-temp-value {
  font-size: 18px;
  font-weight: 600;
}
.flow-sparkline {
  display: inline-block;
  vertical-align: middle;
}

/* Responsive degradation for new sections */
@container (max-width: 200px) {
  .section-thermal-strip .time-axis { display: none; }
  .section-comfort-strip svg text { display: none; }
  .api-row { flex-direction: column; }
}

/* Temperature transition glow \u2014 brief brightness flash on temp change */
.temp-transitioning {
  filter: brightness(1.4);
  transition: filter 0.3s ease-in, filter 0.8s ease-out 0.3s;
}

/* Reduced motion \u2014 respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  .power-bar-fill.bar-active { animation: none; }
  .heating-glow { animation: none; }
  .zone-row-pulse.heating { animation: none; }
  .pulse-dot.connected { animation: none; }
  .temp-transitioning { filter: none; transition: none; }
}
`;function dt(e,...t){console.warn(`${Re} ${e}`,...t)}function mt(e){return ct[e]||ct.idle}function bt(e,t,n){let o=nt(e,{},t,n||{entity:e},{});return{name:o.name,temp:o.currentTemp??void 0,target:o.targetTemp??void 0,humidity:o.humidity??void 0,hvacAction:o.hvacAction,unit:o.unit}}function It(e){return Xt[e]||Xt.None}function xt(e,t,n){return n<=t?50:J((e-t)/(n-t),0,1)*100}function zo(e,t,n,o){let i=[],s=!o,a=l=>s||o.includes(l);if(o&&a("humidity")&&e.humidity!==null&&i.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(e.humidity)}%`}),a("hvac_action")){let l=mt(e.hvacAction);i.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(a("overlay")&&e.overlayType){let l=e.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";i.push({type:"overlay",icon:l,label:e.overlayType,entityId:t.overlay})}if(a("preset")&&e.presetMode){let l=e.presetMode==="away"?"mdi:home-export-outline":"mdi:home";i.push({type:"preset",icon:l,label:e.presetMode==="away"?"Away":"Home"})}let r=(l,d,c)=>{if(!a(l)||!t[c])return;let f=n[t[c]];if(f&&f.state!=="unavailable"&&f.state!=="None"){let u=It(f.state);i.push({type:l,icon:d,label:f.state,color:u.fallback,severity:f.state,entityId:t[c]})}};if(a("open_window")&&t.open_window){let l=n[t.open_window];if(l){let d=l.state==="on";i.push({type:"open_window",icon:d?"mdi:window-open":"mdi:window-closed",label:d?"Open":"Closed",color:d?"#F44336":void 0,entityId:t.open_window})}}if(a("window_predicted")&&t.window_predicted){let l=n[t.window_predicted];l&&l.state==="on"&&i.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"#FF9800",entityId:t.window_predicted})}if(r("mold_risk","mdi:mushroom","mold_risk"),r("condensation","mdi:water-alert","condensation"),a("comfort_level")&&t.comfort_level){let l=n[t.comfort_level];l&&l.state!=="unavailable"&&i.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:t.comfort_level})}if(a("preheat_now")&&t.preheat_now){let l=n[t.preheat_now];l&&l.state==="on"&&i.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"#FF9800",entityId:t.preheat_now})}if(a("battery")&&t.battery){let l=n[t.battery];if(l&&l.state!=="unavailable"){let d=l.state==="LOW"||l.state==="CRITICAL"?"mdi:battery-alert":"mdi:battery",c=l.state==="CRITICAL"?"#F44336":l.state==="LOW"?"#FF9800":void 0;i.push({type:"battery",icon:d,label:l.state,color:c,entityId:t.battery})}}if(a("valve_control")){let d=n[e.entityId]?.attributes||{},c=d.valve_control_active,f=d.valve_target;d.valve_control_backed_off===!0?i.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"#9E9E9E"}):c===!0&&f!==void 0&&i.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${f}${e.unit}`,color:"#FF9800"})}if(o&&a("temp_source")){let d=n[e.entityId]?.attributes?.temperature_source;if(d&&d!=="cloud"){let c=d==="external"?"mdi:thermometer-probe":d==="homekit"?"mdi:apple":"mdi:cloud-outline";i.push({type:"temp_source",icon:c,label:d.charAt(0).toUpperCase()+d.slice(1)})}}return i}function nt(e,t,n,o,i){let s=n[e],a=!s||s.state==="unavailable"||s.state==="unknown",r=s?.attributes||{},l=e.startsWith("sensor."),d=l?a?null:parseFloat(s?.state)||null:r.current_temperature??null,c=a||s?.state==="off"?null:r.temperature??null,f=l?null:r.current_humidity??null,u=l?"idle":r.hvac_action||(s?.state==="off"?"off":"idle"),p=l?"sensor":s?.state||"off",m=r.preset_mode||"",g=Number(r.min_temp??5),y=Number(r.max_temp??35),v=Number(r.target_temp_step??.5),_=r.unit_of_measurement||"\xB0C",S=0;if(t.heating_power){let C=n[t.heating_power];C&&C.state!=="unavailable"&&(S=parseFloat(C.state)||0)}else r.heating_power!==void 0&&(S=parseFloat(r.heating_power)||0);let b=0;if(t.ac_power){let C=n[t.ac_power];C&&C.state!=="unavailable"&&(b=parseFloat(C.state)||0)}let w="";if(t.overlay){let C=n[t.overlay];C&&C.state!=="unavailable"&&(w=C.state)}else r.overlay_type&&(w=r.overlay_type);let k=o.name||r.friendly_name||e.replace(/^(climate|sensor)\./,""),F=o.icon||r.icon||"mdi:thermometer",E=o.chips||i.chips||null,M={entityId:e,name:k,icon:F,isUnavailable:a,currentTemp:d,targetTemp:c,humidity:f,heatingPower:S,coolingPower:b,hvacAction:u,hvacMode:p,presetMode:m,overlayType:w,minTemp:g,maxTemp:y,tempStep:v,unit:_,chips:[]};return M.chips=zo(M,t,n,E),M}var Ve=280;function Kt(e,t=Ve){return e<=50?0:(2+(e-50)/50*3)*(t/Ve)}function Oe(e,t=20,n=1){if(n<=0)return 0;let o=Math.min(4,Math.max(2,Math.round(e/30))),i=Math.floor(t/n);return Math.min(o,i)}function Ue(e){return 4-e/100*2.5}function We(e,t){return 1.5+e/t*1.5}function gt(e,t){return 3*(e/t)}function Ge(e){if(!e)throw new Error("Please define an entity or zones");if(!e.entity&&!e.zones)throw new Error("Please define an entity or zones");if(e.entity&&typeof e.entity=="string"&&!e.entity.startsWith("climate.")&&!e.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let t;e.zones?t=e.zones.map(o=>typeof o=="string"?{entity:o}:{...o}):t=[{entity:e.entity}];for(let o of t)if(!o.entity||typeof o.entity!="string")throw new Error("Each zone must have an entity ID");let n={...e,columns:Number(e.columns)||rt.columns,layout:e.layout||rt.layout,show_temp_bar:e.show_temp_bar??rt.show_temp_bar,show_power_bar:e.show_power_bar??rt.show_power_bar,tap_action:e.tap_action||{...rt.tap_action},hold_action:e.hold_action||{...rt.hold_action},double_tap_action:e.double_tap_action||{...rt.double_tap_action},sections:e.sections||[...Pe],_zones:t};return Array.isArray(n.sections)&&(n.sections=n.sections.map(o=>{let i=typeof o=="string"?{type:o}:{...o},s=qe[i.type];if(s)for(let[a,r]of Object.entries(s))i[a]===void 0||i[a]===null?i[a]=r:typeof r=="number"&&(i[a]=Number(i[a])||r);return i})),n}var Eo={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_battery"]},connection:{platform:"binary_sensor",suffixes:["_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},je={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function Ze(e,t){let n=Object.keys(e).some(a=>a.startsWith("sensor.tado_ce_")),o={},i=[];if(n){let a=Object.keys(e);for(let[r,{platform:l,suffixes:d}]of Object.entries(je))for(let c of d){let f=a.find(u=>u.startsWith(`${l}.tado_ce`)&&u.endsWith(c));if(f){o[r]=f;break}}i=Object.keys(je).filter(r=>!o[r])}let s={};for(let a of t){s[a]={};for(let[r,{platform:l,suffixes:d}]of Object.entries(Eo))for(let c of d){let f=`${l}.${a}${c}`;if(e[f]){s[a][r]=f;break}}}return{isTadoCE:n,hubEntities:o,zoneEntities:s,missingHubKeys:i}}function D(e){return e.replace(/^(climate|sensor|binary_sensor)\./,"")}function Yt(){return{timestamp:0,data:{}}}function Xe(e){return e.timestamp>0&&Date.now()-e.timestamp<3e5}function Ke(e,t){let n={...e.data};for(let[o,i]of Object.entries(t))i.length>0&&(n[o]=i);return{timestamp:Date.now(),data:n}}function Jt(e,t){if(e.length===0||t<1)return[];let n=e[0].t,s=(e[e.length-1].t-n||1)/t,a=[],r=0,l=e[0].v;for(let d=0;d<t;d++){let c=n+(d+1)*s,f=0,u=0;for(;r<e.length&&e[r].t<c;)f+=e[r].v,u++,r++;u>0&&(l=f/u),a.push({x:d/(t-1||1),v:l})}return a}function Ye(e,t,n,o,i){let a=n-4,r=i-o||1,l=e.map(f=>({x:f.x*t,y:2+a-(f.v-o)/r*a}));if(l.length<2)return"";if(l.length===2)return`M${l[0].x.toFixed(1)},${l[0].y.toFixed(1)}L${l[1].x.toFixed(1)},${l[1].y.toFixed(1)}`;let d=l[0],c=`M${d.x.toFixed(1)},${d.y.toFixed(1)}`;for(let f=1;f<l.length;f++){let u=l[f],p=(d.x+u.x)/2,m=(d.y+u.y)/2;c+=` ${p.toFixed(1)},${m.toFixed(1)}`,c+=` Q${u.x.toFixed(1)},${u.y.toFixed(1)}`,d=u}return c+=` ${d.x.toFixed(1)},${d.y.toFixed(1)}`,c}function Je(e,t,n,o=48){if(!e||e.length===0)return[];let i=1/0,s=-1/0;for(let a of e)for(let r of a.data)isFinite(r.v)&&(r.v<i&&(i=r.v),r.v>s&&(s=r.v));return isFinite(i)||(i=0),isFinite(s)||(s=100),e.map(a=>{let r=a.data.filter(c=>isFinite(c.v));if(r.length<2)return{entityId:a.entityId,color:a.color,d:""};let l=Jt(r,o),d=Ye(l,t,n,i,s);return{entityId:a.entityId,color:a.color,d}})}function Lt(e,t,n,o){if(!e||e.length===0)return[];let i=n??t/2-2,s=o??i*.6,a=t/2,r=t/2,l=e.map(u=>Math.max(0,u.value)),d=l.reduce((u,p)=>u+p,0);if(d===0)return[];let c=[],f=-90;for(let u=0;u<e.length;u++){if(l[u]===0)continue;let p=l[u]/d*360;p>=360&&(p=359.9);let m=f+p,g=Nt(a,r,s,i,f,m);c.push({label:e[u].label,color:e[u].color,d:g,angle:p}),f=m}return c}function vt(e){if(!e||e.length===0)return"";let t='<div class="chart-legend">';for(let n of e){let o=A(n.color),i=h(n.label),s=n.value!==void 0&&n.value!==null?` ${h(n.value)}`:"";t+=`<span class="legend-chip"><span class="legend-dot" style="background:${o}"></span>${i}${s}</span>`}return t+="</div>",t}function G(e){return e<=14?"#1565C0":e<=16?"#4FC3F7":e<=17?"#4DB6AC":e<=18?"#81C784":e<=19?"#AED581":e<=20?"#C5E1A5":e<=21?"#FFF176":e<=22?"#FFB74D":e<=23?"#FF8A65":e<=24?"#EF5350":"#C62828"}function wt(e){return e<=20?"#C62828":e<=30?"#EF5350":e<=35?"#FF8A65":e<=40?"#FFB74D":e<=45?"#AED581":e<=55?"#4CAF50":e<=60?"#AED581":e<=65?"#4DB6AC":e<=70?"#4FC3F7":e<=80?"#1E88E5":"#1565C0"}function Nt(e,t,n,o,i,s){let a=i*Math.PI/180,r=s*Math.PI/180,l=s-i,d=Math.abs(l)>180?1:0,c=e+o*Math.cos(a),f=t+o*Math.sin(a),u=e+o*Math.cos(r),p=t+o*Math.sin(r),m=e+n*Math.cos(r),g=t+n*Math.sin(r),y=e+n*Math.cos(a),v=t+n*Math.sin(a);return[`M${c.toFixed(2)},${f.toFixed(2)}`,`A${o.toFixed(2)},${o.toFixed(2)} 0 ${d} 1 ${u.toFixed(2)},${p.toFixed(2)}`,`L${m.toFixed(2)},${g.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${d} 0 ${y.toFixed(2)},${v.toFixed(2)}`,"Z"].join(" ")}function it(e,t,n,o=48){if(!e||e.length<2)return null;let i=e.filter(u=>isFinite(u.v));if(i.length<2)return null;let s=Date.now(),a=i[i.length-1];s-a.t>6e5&&i.push({t:s,v:a.v});let r=Jt(i,o);if(r.length<2)return null;let l=1/0,d=-1/0;for(let u of r)u.v<l&&(l=u.v),u.v>d&&(d=u.v);isFinite(l)||(l=0),isFinite(d)||(d=100);let c=Ye(r,t,n,l,d);if(!c)return null;let f=`${c} L${t.toFixed(1)},${n.toFixed(1)} L0,${n.toFixed(1)} Z`;return{linePath:c,areaPath:f}}function Qt(e,t=24,n=""){if(!e||e.length<2)return"";let o=e.filter(d=>isFinite(d.v));if(o.length<2)return"";let i=Jt(o,t),s=o[0].t,a=o[o.length-1].t,r=o.every(d=>Number.isInteger(d.v)),l={u:n,d:[]};return l.d=i.map(d=>{let c=s+d.x*(a-s),f=new Date(c),u=`${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}`,p=r?Math.round(d.v):Math.round(d.v*10)/10;return{l:u,v:p}}),JSON.stringify(l)}function st(e,t,n,o,i,s=""){if(!e||e.length<2)return"";let a=it(e,t,n,24);if(!a)return"";let r=A(o),l=`<div class="sparkline-filled" style="height:${n}px">`;return l+=`<svg viewBox="0 0 ${t} ${n}" role="img" aria-label="${h(s)}" preserveAspectRatio="none" style="width:100%;height:${n}px;display:block">`,l+=`<defs><linearGradient id="${h(i)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${a.areaPath}" fill="url(#${h(i)})" />`,l+=`<path d="${a.linePath}" fill="none" stroke="${r}" stroke-width="1.5" />`,l+="</svg></div>",l}var Io=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function Ht(e,t){let n=[],o=0;if(Array.isArray(e.chart_data)&&e.chart_data.length>0){for(let i of e.chart_data)i.type&&typeof i.count=="number"&&(n.push({label:i.type,value:Math.max(0,i.count),color:t[o%t.length]}),o++);return n}if(e.breakdown_24h&&typeof e.breakdown_24h=="object"){for(let[i,s]of Object.entries(e.breakdown_24h)){let a=Number(s);!isNaN(a)&&a>0&&(n.push({label:i,value:a,color:t[o%t.length]}),o++)}return n}for(let[i,s]of Object.entries(e)){if(Io.has(i))continue;let a=Number(s);isNaN(a)||(n.push({label:i,value:Math.max(0,a),color:t[o%t.length]}),o++)}return n}function Lo(e,t,n,o){let i=t.show_temp_bar??n.show_temp_bar??!0,s=t.show_power_bar??n.show_power_bar??!0,a=e.isUnavailable?" unavailable":"",r=e.isUnavailable?"Unavailable":e.currentTemp!==null?`${e.currentTemp}${h(e.unit)}`:"--",l=!e.isUnavailable&&e.targetTemp!==null?`<span class="zone-target">\u2192 ${e.targetTemp}${h(e.unit)}</span>`:"",d=!e.isUnavailable&&e.humidity!==null?` <span class="zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(e.humidity)}%</span>`:"",c=e.isUnavailable?`${h(e.name)}: Unavailable`:`${h(e.name)}: ${r}${e.targetTemp!==null?`, target ${e.targetTemp}${e.unit}`:""}${e.humidity!==null?`, ${Math.round(e.humidity)}% humidity`:""}, ${e.hvacAction}`,f=`<div class="zone-row${a}" tabindex="0" role="button"
    aria-label="${h(c)}" data-entity="${h(e.entityId)}">`;if(f+='<div class="zone-header">',f+=`<span class="zone-name">${h(e.name)}${d}</span>`,f+=`<span class="zone-temp">${r}${l}</span>`,f+="</div>",i&&!e.isUnavailable){let p=e.currentTemp!==null?xt(e.currentTemp,e.minTemp,e.maxTemp):50,m=e.targetTemp!==null?xt(e.targetTemp,e.minTemp,e.maxTemp):null,g=G(e.minTemp),y=G((e.minTemp+e.maxTemp)/2),v=G(e.maxTemp),_=`linear-gradient(to right, ${A(g)}, ${A(y)}, ${A(v)})`;f+='<div class="temp-gauge">',f+=`<div class="temp-gauge-bg" style="background:${_}"></div>`,f+=`<div class="temp-gauge-current" style="left:${A(p.toFixed(1))}%"></div>`,m!==null&&(f+=`<div class="temp-gauge-target" style="left:${A(m.toFixed(1))}%"></div>`),f+="</div>"}if(s&&!e.isUnavailable){let p=e.heatingPower||e.coolingPower||0,m=mt(e.hvacAction),g=m.cssVar?`var(${m.cssVar}, ${m.fallback})`:m.fallback;if(p>0||e.hvacAction==="heating"||e.hvacAction==="cooling"){let y=Math.min(100,Math.max(0,p)),v=p>0?" bar-active":"";f+='<div class="power-bar-container">',f+='<div class="power-bar-track"></div>',f+=`<div class="power-bar-fill${v}" style="width:${A(y.toFixed(1))}%;background:${A(g)};--bar-glow-color:${A(m.fallback)}40"></div>`,f+="</div>"}}if(e.chips.length>0){f+='<div class="zone-chips">';for(let p of e.chips){let m=p.severity?` severity-${p.severity.toLowerCase()}`:"",g=p.color?` style="color:${A(p.color)}"`:"",y=p.entityId?` data-entity="${h(p.entityId)}"`:"";f+=`<span class="chip${m}"${g}${y} data-chip-type="${h(p.type)}">`,f+=`<ha-icon icon="${h(p.icon)}"></ha-icon>`,f+=`${h(p.label)}`,f+="</span>"}f+="</div>"}let u=t.sparkline?.mode||"overlay";if(u==="pulse"&&!e.isUnavailable)return No(e,t,o);if(!e.isUnavailable&&o&&o.length>=2){let p=mt(e.hvacAction),m=t.color||p.fallback;u==="prominent"&&(f+=Ho(m,o,e.unit))}return f+="</div>",f}function No(e,t,n){let o=mt(e.hvacAction),i=e.heatingPower>0||e.hvacAction==="heating",s=e.hvacAction==="cooling",a=i||s,r=a?t.color||o.fallback:"var(--secondary-text-color, #9E9E9E)",l=A(r),d=h(e.entityId).replace(/\./g,"-"),c=e.heatingPower||e.coolingPower||0,f=e.hvacAction==="heating"?`Heating ${Math.round(c)}%`:e.hvacAction==="cooling"?`Cooling ${Math.round(c)}%`:"Idle",u=e.currentTemp!==null?`${e.currentTemp}${h(e.unit)}`:"--",p=e.targetTemp!==null?`\u2192 ${e.targetTemp}${h(e.unit)}`:"",m=`${h(e.name)}: ${u}, ${f}`,g=`zone-row zone-row-pulse${i?" heating":""}`,y=Qt(n||[],24,e.unit),v=`<div class="${g}" tabindex="0" role="button"
    aria-label="${h(m)}" data-entity="${h(e.entityId)}"${y?` data-sparkline='${h(y)}'`:""}>`;if(n&&n.length>=2){let _=it(n,360,56,60);if(_){let S=`pulse-grad-${d}`,b=`pulse-glow-${d}`,w=a?" heating-glow":"",k=a?"0.55":"0.2",F=a?"0.05":"0.02",E=a?"2":"1.5",M=a?"1":"0.5";v+='<svg class="pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',v+="<defs>",v+=`<linearGradient id="${S}" x1="0" y1="0" x2="0" y2="1">`,v+=`<stop offset="0%" stop-color="${l}" stop-opacity="${k}"/>`,v+=`<stop offset="100%" stop-color="${l}" stop-opacity="${F}"/>`,v+="</linearGradient>",a&&(v+=`<filter id="${b}"><feGaussianBlur stdDeviation="${gt(360,360).toFixed(1)}" result="b"/>`,v+='<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'),v+="</defs>",v+=`<path d="${_.areaPath}" fill="url(#${S})" />`,v+=`<path d="${_.linePath}" fill="none" stroke="${l}" stroke-width="${E}" opacity="${M}"`,a&&(v+=` filter="url(#${b})" class="${w}"`),v+=" />",v+="</svg>"}}return v+='<div class="pulse-info">',v+='<div class="pulse-info-left">',v+=`<div class="zone-name">${h(e.name)}</div>`,v+='<div class="pulse-status">',v+=`<span class="status-dot" style="background:${l}"></span>`,v+=`${h(f)}`,v+="</div>",v+="</div>",v+='<div class="pulse-info-right">',v+=`<span class="pulse-current">${h(u)}</span>`,p&&(v+=`<span class="zone-target">${p}</span>`),v+="</div>",v+="</div>",v+="</div>",v}function Ho(e,t,n){let o=it(t,300,40,48);if(!o){let r=yt(t,300,40,48,"avg",!0);return r?`<div class="sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${r}" fill="none" stroke="${A(e)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let i=A(e),s=Qt(t,24,n),a=`<div class="sparkline-filled" style="height:40px"${s?` data-sparkline='${h(s)}'`:""}>`;return a+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',a+='<defs><linearGradient id="prom-grad" x1="0" y1="0" x2="0" y2="1">',a+=`<stop offset="0%" stop-color="${i}" stop-opacity="0.3"/>`,a+=`<stop offset="100%" stop-color="${i}" stop-opacity="0"/>`,a+="</linearGradient></defs>",a+=`<path d="${o.areaPath}" fill="url(#prom-grad)" />`,a+=`<path d="${o.linePath}" fill="none" stroke="${i}" stroke-width="1.5" opacity="0.7" />`,a+="</svg></div>",a}function te(e,t,n,o,i){if(!e||e.length===0)return"";let s=Number(t.columns)||1,a=s>1?" columns":"",r=s>1?` style="grid-template-columns:repeat(${Number(s)}, 1fr)"`:"",l=`<div class="section section-zones${a}"${r}>`,d=o?.hubEntities?.home_state,c=d?n[d]:null;if(c&&c.state!=="unavailable"){let f=c.state==="on",u=f?"mdi:home":"mdi:home-export-outline",p=f?"Home":"Away",m=f?"var(--label-badge-green, #4CAF50)":"var(--secondary-text-color)";l+='<div style="display:flex;justify-content:space-between;align-items:center">',l+='<div class="section-label">Zones</div>',l+=`<span class="chip" data-entity="${h(d)}" style="color:${A(m)}">`,l+=`<ha-icon icon="${h(u)}"></ha-icon>${h(p)}</span>`,l+="</div>"}else l+='<div class="section-label">Zones</div>';for(let f of e){let u=f.entity,p=D(u),m=o?.zoneEntities?.[p]||{},g=nt(u,m,n,f,t),y=f.temperature_entity||m.temperature||u,v=i?.data?.[y]||i?.data?.[u]||[];l+=Lo(g,f,t,v)}return l+="</div>",l}function Qe(e,t,n,o,i,s){if(!e||!t)return;let a=e.querySelectorAll(".zone-row");for(let r=0;r<t.length;r++){let l=t[r],d=l.entity,c=D(d),f=i?.zoneEntities?.[c]||{},u=o[d],p=s[d];if(u===p&&a[r])continue;let m=nt(d,f,o,l,n),g=a[r];if(!g)continue;let y=g.querySelector(".zone-temp");if(y){let w=m.isUnavailable?"Unavailable":m.currentTemp!==null?`${m.currentTemp}${m.unit}`:"--",k=!m.isUnavailable&&m.targetTemp!==null?`<span class="zone-target">\u2192 ${m.targetTemp}${h(m.unit)}</span>`:"";y.innerHTML=`${h(w)}${k}`}let v=g.querySelector(".power-bar-fill");if(v){let w=m.heatingPower||m.coolingPower||0,k=mt(m.hvacAction),F=k.cssVar?`var(${k.cssVar}, ${k.fallback})`:k.fallback;v.style.width=`${Math.min(100,Math.max(0,w)).toFixed(1)}%`,v.style.background=F,v.style.setProperty("--bar-glow-color",`${k.fallback}40`),v.classList.toggle("bar-active",w>0)}let _=g.querySelector(".temp-gauge-current");if(_&&m.currentTemp!==null){let w=xt(m.currentTemp,m.minTemp,m.maxTemp);_.style.left=`${w.toFixed(1)}%`}let S=g.querySelector(".temp-gauge-target");if(S&&m.targetTemp!==null){let w=xt(m.targetTemp,m.minTemp,m.maxTemp);S.style.left=`${w.toFixed(1)}%`}let b=g.querySelector(".temp-gauge-bg");if(b&&!m.isUnavailable){let w=G(m.minTemp),k=G((m.minTemp+m.maxTemp)/2),F=G(m.maxTemp);b.style.background=`linear-gradient(to right, ${w}, ${k}, ${F})`}m.isUnavailable?g.classList.add("unavailable"):g.classList.remove("unavailable")}}function to(e){return e>95?"var(--label-badge-red, #F44336)":e>80?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-green, #4CAF50)"}function Do(e){let t=(e||"").toLowerCase();return t==="ok"||t==="healthy"?"var(--label-badge-green, #4CAF50)":t==="warning"?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function Ro(e,t){let n=t>0?Math.min(100,e/t*100):0,o=to(n),i=80,s=i/2,a=i/2,r=i/2-4,l=r*.7,d=Nt(s,a,l,r,-90,269.9),c=-90+n/100*360,f=n>0?Nt(s,a,l,r,-90,Math.min(c,269.9)):"",u=n>95,p=n>80,m=u||p,g='<div class="usage-gauge">';if(g+=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="API usage: ${Math.round(e)} of ${Math.round(t)}" style="width:${i}px;height:${i}px">`,m&&(g+='<defs><filter id="gauge-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'),g+=`<path d="${d}" fill="var(--divider-color, rgba(0,0,0,0.12))" />`,f){if(g+=`<path d="${f}" fill="${A(o)}"${m?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(n)}%</title>`,m){let y=u?"1":"2.5";ot()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${y}s" repeatCount="indefinite"/>`)}g+="</path>"}return g+="</svg>",g+=`<div class="gauge-center">${h(Math.round(e))}<br><span style="font-size:10px;opacity:0.6">/ ${h(Math.round(t))}</span></div>`,g+="</div>",g}function Po(e,t,n){let o=t?.data?.[e]||[];return st(o,200,40,n,"api-hist-grad","API usage history")}function qo(e){let t=Ht(e,et);if(t.length===0)return"";let n=60,o=Lt(t,n),i=t.reduce((l,d)=>l+d.value,0),s='<div style="display:flex;align-items:center;gap:12px">';s+=`<div class="donut-container" style="width:${n}px;height:${n}px;flex-shrink:0;margin:0">`,s+=`<svg viewBox="0 0 ${n} ${n}" role="img" aria-label="API call breakdown">`;let a=n/2-2,r=a*.6;s+=`<circle cx="${n/2}" cy="${n/2}" r="${((a+r)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(a-r).toFixed(1)}" />`;for(let l of o)s+=`<path d="${l.d}" fill="${A(l.color)}"><title>${h(l.label)}: ${Math.round(l.angle/360*i)}</title></path>`;return s+="</svg>",s+=`<div class="donut-center" style="font-size:12px">${h(Math.round(i))}</div>`,s+="</div>",s+=vt(t.map(l=>({label:l.label,color:l.color,value:String(Math.round(l.value))}))),s+="</div>",s}function ee(e,t,n,o){if(!e.api_usage||!e.api_limit)return"";let i=parseFloat(t[e.api_usage]?.state)||0,s=parseFloat(t[e.api_limit]?.state)||100,a=s>0?Math.min(100,i/s*100):0,r=to(a),l=t[e.api_status]?.state||"unknown",d=Do(l),c='<div class="section section-api">';c+='<div class="section-label">API Usage</div>',c+='<div class="api-dashboard">',c+='<div class="api-row">',c+=Ro(i,s);let f=e.api_usage;if(f&&o&&(c+=Po(f,o,r)),c+="</div>",e.api_breakdown&&t[e.api_breakdown]&&(c+='<div class="api-row">',c+=qo(t[e.api_breakdown].attributes||{}),c+="</div>"),c+='<div class="zone-chips">',e.call_history&&t[e.call_history]){let u=t[e.call_history].attributes?.calls_per_hour;u!=null&&Number(u)>0&&(c+=`<span class="chip" data-entity="${h(e.call_history)}">`,c+=`<ha-icon icon="mdi:speedometer"></ha-icon>${h(Math.round(Number(u)))}/hr</span>`)}if(e.polling_interval&&t[e.polling_interval]){let u=t[e.polling_interval],p=u.attributes?.unit_of_measurement||"";c+=`<span class="chip" data-entity="${h(e.polling_interval)}">Poll: ${h(u.state)}${p?h(p):""}</span>`}if(e.next_sync&&t[e.next_sync]){let u=t[e.next_sync].state,p=u,m=0;if(u&&u.includes("T"))try{let g=new Date(u);m=g.getTime();let y=m-Date.now();if(y>0&&y<36e5){let v=Math.floor(y/6e4),_=Math.floor(y%6e4/1e3);p=v>0?`${v}m ${_}s`:`${_}s`}else p=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`}catch{}c+=`<span class="chip chip-next-sync" data-entity="${h(e.next_sync)}" data-target="${m}">Next: ${h(p)}</span>`}if(e.api_reset&&t[e.api_reset]){let u=t[e.api_reset].state,p=u;if(u&&u.includes("T"))try{let m=new Date(u);p=`${String(m.getHours()).padStart(2,"0")}:${String(m.getMinutes()).padStart(2,"0")}`}catch{}c+=`<span class="chip" data-entity="${h(e.api_reset)}">Reset: ${h(p)}</span>`}return e.token_status&&t[e.token_status]&&(c+=`<span class="chip" data-entity="${h(e.token_status)}">Token: ${h(t[e.token_status].state)}</span>`),c+=`<span class="chip" data-entity="${e.api_status?h(e.api_status):""}" style="color:${A(d)}">${h(l)}</span>`,c+="</div>",c+="</div>",c+="</div>",c}function oe(e,t,n){if(!e.bridge_connected)return"";let o=t[e.bridge_connected];if(!o)return"";let i=o.state==="on",s=i?"var(--label-badge-green, #4CAF50)":"var(--label-badge-red, #F44336)",a=i?"Connected":"Disconnected",r=i?"pulse-dot connected":"pulse-dot disconnected",l=o.attributes||{},d=l.response_time_ms,c=l.consecutive_failures,f=l.last_error,u=e.boiler_flow_temp&&t[e.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",p='<div class="section section-bridge">';if(p+='<div class="section-label">Bridge</div>',p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${h(e.bridge_connected)}" style="color:${A(s)}">`,p+=`<span class="${r}"></span>`,p+=`${h(a)}</span>`,d!==void 0&&(p+=`<span class="chip" data-entity="${h(e.bridge_connected)}">${h(Math.round(d))}ms</span>`),c!==void 0&&c>0&&(p+=`<span class="chip" data-entity="${h(e.bridge_connected)}" style="color:var(--label-badge-red, #F44336)">Failures: ${h(c)}</span>`),p+="</div>",e.boiler_flow_temp&&t[e.boiler_flow_temp]){let y=parseFloat(t[e.boiler_flow_temp].state),v=t[e.boiler_flow_temp].state,_=isNaN(y)?"var(--primary-text-color)":G(y);if(p+='<div style="display:flex;align-items:center;gap:8px;margin-top:4px">',p+=`<span class="flow-temp-value" style="color:${A(_)}">${h(v)}${h(u)}</span>`,n){let S=n.data?.[e.boiler_flow_temp]||[],b=st(S,120,30,_,"bridge-flow-grad","Boiler flow temperature history");b&&(p+=`<div class="flow-sparkline">${b}</div>`)}p+="</div>"}let m=e.wc_status&&t[e.wc_status],g=e.wc_target_flow&&t[e.wc_target_flow];if((m||g)&&(p+='<div class="zone-chips">',m&&(p+=`<span class="chip" data-entity="${h(e.wc_status)}">${h(t[e.wc_status].state)}</span>`),g&&(p+=`<span class="chip" data-entity="${h(e.wc_target_flow)}">Target: ${h(t[e.wc_target_flow].state)}${h(u)}</span>`),p+="</div>"),e.boiler_max_output&&t[e.boiler_max_output]){let y=t[e.boiler_max_output].state;y!=="unavailable"&&y!=="unknown"&&(p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${h(e.boiler_max_output)}">`,p+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${h(y)}${h(u)}</span>`,p+="</div>")}return f&&f!=="None"&&f!=="null"&&(p+='<div class="zone-chips">',p+=`<span class="chip" style="color:var(--label-badge-red, #F44336)">Error: ${h(f)}</span>`,p+="</div>"),p+="</div>",p}var Dt="var(--label-badge-green, #4CAF50)",eo="var(--accent-color, #9C27B0)";function ne(e,t,n){if(!e.homekit_connected)return"";let o=t[e.homekit_connected];if(!o)return"";let i=o.state==="on",s=i?Dt:"var(--label-badge-red, #F44336)",a=i?"Connected":"Disconnected",r=i?"pulse-dot connected":"pulse-dot disconnected",l=o.attributes||{},d=l.uptime||"",c=l.mapped_zones,f=l.reconnect_count,u=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,p=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,m=u?Number(u.state)||0:Number(l.reads_saved_today)||0,g=p?Number(p.state)||0:Number(l.writes_saved_today)||0,y=m+g,v='<div class="section section-homekit">',_=y>0?` \xB7 ${y} saved`:"";if(v+=`<div class="section-label">HomeKit${h(_)}</div>`,v+='<div class="zone-chips">',v+=`<span class="chip" data-entity="${h(e.homekit_connected)}" style="color:${A(s)}">`,v+=`<span class="${r}"></span>`,v+=`${h(a)}`,d&&(v+=` <span style="opacity:0.6;font-size:10px">${h(d)}</span>`),v+="</span>",c!==void 0&&(v+=`<span class="chip">${h(c)} zones</span>`),f!==void 0&&f>0&&(v+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Reconnects: ${h(f)}</span>`),v+="</div>",m>0||g>0){let F=y>0?m/y*100:100;v+='<div style="margin-top:4px">',v+='<div class="power-bar-container">',v+='<div class="power-bar-track"></div>',v+=`<div class="power-bar-fill" style="width:100%;background:${A(eo)}"></div>`,v+=`<div class="power-bar-fill" style="width:${A(F.toFixed(1))}%;background:${A(Dt)}"></div>`,v+="</div>",v+="</div>";let E=e.homekit_reads_saved;if(E&&n){let $=n.data?.[E]||[];v+=st($,200,30,Dt,"hk-spark-grad","HomeKit saved calls history")}v+='<div class="zone-chips">';let M=e.homekit_reads_saved||"",C=e.homekit_writes_saved||"";v+=`<span class="chip"${M?` data-entity="${h(M)}"`:""} style="color:${A(Dt)}">Reads: ${h(m)}</span>`,g>0&&(v+=`<span class="chip"${C?` data-entity="${h(C)}"`:""} style="color:${A(eo)}">Writes: ${h(g)}</span>`),v+="</div>"}let S=Number(l.write_attempts)||0,b=Number(l.write_successes)||0,w=Number(l.write_fallbacks)||0,k=Number(l.write_avg_latency_ms)||0;return(S>0||b>0||w>0)&&(v+='<div class="zone-chips">',S>0&&(v+=`<span class="chip">Attempts: ${h(S)}</span>`),b>0&&(v+=`<span class="chip">Successes: ${h(b)}</span>`),w>0&&(v+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Fallbacks: ${h(w)}</span>`),k>0&&(v+=`<span class="chip">Latency: ${h(k)}ms</span>`),v+="</div>"),v+="</div>",v}function Bo(e){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(e||"").toLowerCase()]||"mdi:weather-cloudy"}function ie(e,t,n){if(!e.outside_temp)return"";let o=t[e.outside_temp]?.state,i=t[e.weather]?.state||"",s=e.solar_intensity?t[e.solar_intensity]?.state:null,a='<div class="section section-weather">';a+='<div class="section-label">Weather</div>',a+='<div class="zone-chips">',i&&(a+=`<span class="chip"${e.weather?` data-entity="${h(e.weather)}"`:""}><ha-icon icon="${h(Bo(i))}"></ha-icon>${h(i)}</span>`),o!=null&&(a+=`<span class="chip" data-entity="${h(e.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${h(o)}${h(t[e.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),s!=null&&(a+=`<span class="chip"${e.solar_intensity?` data-entity="${h(e.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${h(s)}%</span>`),a+="</div>";let r=e.outside_temp;if(r&&n){let l=n.data?.[r]||[],d=parseFloat(o||"0"),c=isNaN(d)?"var(--primary-text-color)":G(d);a+=st(l,200,30,c,"weather-spark-grad","Outdoor temperature history")}return a+="</div>",a}function re(e,t,n){let o=!1,i='<div class="section section-environment">';i+='<div class="section-label">Environment</div>';for(let s of e){let a=D(s.entity),r=n?.zoneEntities?.[a]||{},l=r.mold_risk&&t[r.mold_risk],d=r.condensation&&t[r.condensation],c=r.comfort_level&&t[r.comfort_level],f=r.surface_temp&&t[r.surface_temp],u=r.dew_point&&t[r.dew_point];if(!l&&!d&&!c&&!f&&!u)continue;o=!0;let p=s.name||t[s.entity]?.attributes?.friendly_name||a;if(i+=`<div class="system-row"><span class="system-label">${h(p)}</span>`,i+='<div class="zone-chips">',l){let m=t[r.mold_risk].state,g=It(m);i+=`<span class="chip" data-entity="${h(r.mold_risk)}" style="color:${A(g.fallback)}">`,i+=`<ha-icon icon="mdi:mushroom"></ha-icon>${h(m)}</span>`}if(d){let m=t[r.condensation].state,g=It(m);i+=`<span class="chip" data-entity="${h(r.condensation)}" style="color:${A(g.fallback)}">`,i+=`<ha-icon icon="mdi:water-alert"></ha-icon>${h(m)}</span>`}c&&(i+=`<span class="chip" data-entity="${h(r.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${h(t[r.comfort_level].state)}</span>`),f&&(i+=`<span class="chip" data-entity="${h(r.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${h(t[r.surface_temp].state)}${t[r.surface_temp]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),u&&(i+=`<span class="chip" data-entity="${h(r.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${h(t[r.dew_point].state)}${t[r.dew_point]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function se(e,t,n){let o=!1,i='<div class="section section-thermal">';i+='<div class="section-label">Thermal Analytics</div>';for(let s of e){let a=D(s.entity),r=n?.zoneEntities?.[a]||{},l=r.heating_rate&&t[r.heating_rate],d=r.thermal_inertia&&t[r.thermal_inertia],c=r.preheat_time&&t[r.preheat_time],f=r.confidence&&t[r.confidence],u=r.heat_accel&&t[r.heat_accel],p=r.approach_factor&&t[r.approach_factor];if(!l&&!d&&!c&&!f&&!u&&!p)continue;o=!0;let m=s.name||t[s.entity]?.attributes?.friendly_name||a;i+=`<div class="system-row"><span class="system-label">${h(m)}</span>`,i+='<div class="zone-chips">',l&&(i+=`<span class="chip" data-entity="${h(r.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${h(t[r.heating_rate].state)}${t[r.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr"}</span>`),d&&(i+=`<span class="chip" data-entity="${h(r.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${h(t[r.thermal_inertia].state)}</span>`),c&&(i+=`<span class="chip" data-entity="${h(r.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${h(t[r.preheat_time].state)} min</span>`),f&&(i+=`<span class="chip" data-entity="${h(r.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${h(t[r.confidence].state)}%</span>`),u&&(i+=`<span class="chip" data-entity="${h(r.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${h(t[r.heat_accel].state)}${t[r.heat_accel]?.attributes?.unit_of_measurement||""}</span>`),p&&(i+=`<span class="chip" data-entity="${h(r.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${h(t[r.approach_factor].state)}${t[r.approach_factor]?.attributes?.unit_of_measurement||""}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function ae(e,t,n){let o=!1,i='<div class="section section-schedule">';i+='<div class="section-label">Schedule</div>';for(let s of e){let a=D(s.entity),r=n?.zoneEntities?.[a]||{},l=r.next_schedule&&t[r.next_schedule],d=r.schedule_deviation&&t[r.schedule_deviation],c=r.preheat_advisor&&t[r.preheat_advisor],f=r.comfort_target&&t[r.comfort_target];if(!l&&!d&&!c&&!f)continue;o=!0;let u=s.name||t[s.entity]?.attributes?.friendly_name||a;if(i+=`<div class="system-row"><span class="system-label">${h(u)}</span>`,i+='<div class="zone-chips">',l){let p=r.next_sched_temp&&t[r.next_sched_temp]?` \u2192 ${h(t[r.next_sched_temp].state)}${t[r.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C"}`:"";i+=`<span class="chip" data-entity="${h(r.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${h(t[r.next_schedule].state)}${p}</span>`}d&&(i+=`<span class="chip" data-entity="${h(r.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${h(t[r.schedule_deviation].state)}${t[r.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),c&&(i+=`<span class="chip" data-entity="${h(r.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${h(t[r.preheat_advisor].state)}</span>`),f&&(i+=`<span class="chip" data-entity="${h(r.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${h(t[r.comfort_target].state)}${t[r.comfort_target]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function Vo(e,t){let n=t&&t.length>0?t:et;return n[e%n.length]}function Oo(e,t,n){let i=[];for(let a of e){let r=it(a.data,300,t,48);r&&i.push({...r,color:a.color,entityId:a.entityId})}if(i.length===0){let a=Je(e,300,t);if(!a.some(d=>d.d!==""))return'<div class="chart-empty">No data available</div>';let l=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${h(n)}" class="chart-svg" preserveAspectRatio="none">`;for(let d of a)d.d!==""&&(l+=`<path d="${d.d}" fill="none" stroke="${A(d.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${h(d.entityId)}" />`);return l+="</svg>",l}let s=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${h(n)}" class="chart-svg" preserveAspectRatio="none">`;s+="<defs>";for(let a=0;a<i.length;a++){let r=`graph-grad-${a}`;s+=`<linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">`,s+=`<stop offset="0%" stop-color="${A(i[a].color)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${A(i[a].color)}" stop-opacity="0"/>`,s+="</linearGradient>"}s+="</defs>";for(let a=0;a<i.length;a++){let r=i[a];s+=`<path d="${r.areaPath}" fill="url(#graph-grad-${a})" />`,s+=`<path d="${r.linePath}" fill="none" stroke="${A(r.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${h(r.entityId)}" />`}return s+="</svg>",s}function oo(e,t,n,o,i){let s=e.attribute||"current_temperature",a=e.stacked===!0,r=Number(e.height)||80,l=e.palette||void 0,d=e.entities||t.map(f=>f.entity);if(d.length===0)return"";let c='<div class="section section-graph">';return a?(c+=le(d,"current_temperature","Temperature",r,l,n,o,i,t),c+=le(d,"current_humidity","Humidity",r,l,n,o,i,t)):c+=le(d,s,s==="current_humidity"?"Humidity":"Temperature",r,l,n,o,i,t),c+="</div>",c}function Uo(e,t,n,o){let i=D(e),s=n?.zoneEntities?.[i]||{},a=o?.find(r=>r.entity===e);return t==="current_temperature"||t==="temperature"?a?.temperature_entity||s.temperature||e:(t==="current_humidity"||t==="humidity")&&(a?.humidity_entity||s.humidity)||e}function le(e,t,n,o,i,s,a,r,l){let d=[],c=[];for(let m=0;m<e.length;m++){let g=e[m],y=Vo(m,i),v=Uo(g,t,r,l),_=s.data[v]||[],S=D(g),w=l?.find(E=>E.entity===g)?.name||a[g]?.attributes?.friendly_name||S,k=a[g]?.attributes?.[t],F=t==="current_humidity"?"%":a[g]?.attributes?.unit_of_measurement||"\xB0C";d.push({entityId:v,data:_,color:y}),c.push({label:w,color:y,value:k!=null?`${k}${F}`:"--"})}let f=c.map(m=>m.label).join(", "),u=`${n} history for ${f}`,p=`<div class="section-label">${h(n)}</div>`;return p+=`<div class="chart-container" style="height:${A(o)}px">`,p+=Oo(d,o,u),p+="</div>",p+=vt(c),p}function ce(e,t,n){let o=Number(e.size)||120,i=e.source,s=[];if(i==="api_breakdown"?s=Wo(t,n):i==="homekit_saved"?s=Go(t,n):e.segments&&(s=jo(e.segments,n)),s.length===0)return"";let a=s.reduce((g,y)=>g+y.value,0),r=Lt(s,o),l='<div class="section section-donut">',c=i&&{api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"}[i]||"Breakdown";l+=`<div class="section-label">${h(c)}</div>`;let f=s.map(g=>`${g.label} ${g.value}`).join(", ");l+=`<div class="donut-container" style="width:${A(o)}px;height:${A(o)}px">`,l+=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="${h(f)}">`;let u=o/2-2,p=u*.6;l+=`<circle cx="${o/2}" cy="${o/2}" r="${((u+p)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(u-p).toFixed(1)}" />`;for(let g of r)l+=`<path d="${g.d}" fill="${A(g.color)}" data-segment="${h(g.label)}"><title>${h(g.label)}: ${Math.round(g.angle/360*a)}</title></path>`;l+="</svg>",l+=`<div class="donut-center">${h(Math.round(a))}</div>`,l+="</div>";let m=s.map(g=>({label:g.label,color:g.color,value:String(Math.round(g.value))}));return l+=vt(m),l+="</div>",l}function Wo(e,t){let n=e.api_breakdown;if(!n||!t[n])return[];let o=t[n].attributes;return!o||typeof o!="object"?(dt("api_call_breakdown entity has no attributes"),[]):Ht(o,et)}function Go(e,t){if(!e.homekit_connected)return[];let n=t[e.homekit_connected];if(!n)return[];let o=n.attributes||{},i=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,s=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,a=i?Number(i.state)||0:Number(o.reads_saved_today)||0,r=s?Number(s.state)||0:Number(o.writes_saved_today)||0,l=[];return(a>0||r>0)&&(l.push({label:"Reads Saved",value:a,color:et[0]}),l.push({label:"Writes Saved",value:r,color:et[1]})),l}function jo(e,t){return e.map((n,o)=>({label:n.label||n.entity,value:Math.max(0,Number(t[n.entity]?.state)||0),color:n.color||et[o%et.length]}))}function no(e,t,n){let i=Date.now()-n,s=n/t,a=[],r=null,l=0;for(let d=0;d<t;d++){let c=i+d*s,f=c+s,u=c+s/2,p=0,m=0;for(;l<e.length&&e[l].t<f;)e[l].t>=c&&isFinite(e[l].v)&&(p+=e[l].v,m++),l++;m>0&&(r=Math.round(p/m*10)/10);let g=new Date(u),y=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`;a.push({value:r,time:u,label:y})}return a}function Rt(e,t,n={}){let o=e.length;if(o===0)return'<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">No data</div></div>';let i=n.emptyColor||"var(--disabled-color, #9E9E9E)",s=n.emptyOpacity??.3,a=n.ariaLabel||"",r=JSON.stringify(e.map(d=>({v:d.value,l:d.label}))),l=`<div class="strip-container" data-slots='${h(r)}'>`;l+=`<svg viewBox="0 0 ${o} 1" preserveAspectRatio="none" role="img" aria-label="${h(a)}" style="width:100%;height:100%;display:block">`;for(let d=0;d<o;d++){let c=e[d].value,f=c!==null?t(c):i,u=c!==null?1:s;l+=`<rect x="${d}" y="0" width="1.05" height="1" fill="${A(f)}" opacity="${u}"/>`}if(l+="</svg>",n.nowPct!==void 0){let d=Math.min(100,Math.max(0,n.nowPct));l+=`<div class="now-marker" style="left:${d.toFixed(1)}%"></div>`}return l+="</div>",l}function Pt(e,t,n={}){let o=e.length;if(o===0)return'<div class="cells"><div class="chart-empty" style="height:16px;font-size:10px">No data</div></div>';let i=JSON.stringify(e.map(a=>({v:a.value,l:a.label}))),s=`<div class="cells" data-slots='${h(i)}'>`;for(let a=0;a<o;a++){let r=e[a].value,l=e[a].label;if(r!==null){let d=t(r);s+=`<div class="cell" style="background:${A(d)}" data-hour="${h(l)}" data-score="${r}"></div>`}else s+=`<div class="cell cell-empty" data-hour="${h(l)}"></div>`}return s+="</div>",s}function de(){let e=document.createElement("div");e.className="strip-tooltip",e.style.display="none";let t=null;return{element:e,show(n,o,i){t&&(clearTimeout(t),t=null),e.textContent=i,e.style.display="",e.style.left=`${o}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function io(){let e=document.createElement("div");e.className="strip-tooltip strip-tooltip-fixed",e.style.display="none";let t=null;return{element:e,show(n,o,i){t&&(clearTimeout(t),t=null),e.textContent=i,e.style.display="",e.style.left=`${o}px`,e.style.top=`${n.top-28}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function qt(e,t=5){let n=new Date,o=Date.now()-e,i="";for(let s=0;s<t-1;s++){let a=new Date(o+s/(t-1)*e);i+=`<span class="time-label">${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}</span>`}return i+=`<span class="time-label">${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}</span>`,i}function at(e,t,n){let o=Math.max(0,Math.min(1,(e-t.left)/t.width));return Math.min(n-1,Math.floor(o*n))}var Zo=2e3;function pe(e,t,n,o){let i=null,s=r=>{let l=n.getBoundingClientRect(),d=r-l.left;d>=0&&d<=l.width&&(t.style.left=`${o+d}px`,t.style.display="")},a=()=>{t.style.display="none",i&&(clearTimeout(i),i=null)};e.addEventListener("pointermove",r=>{r.pointerType!=="touch"&&s(r.clientX)}),e.addEventListener("pointerleave",a),e.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(s(r.clientX),i&&clearTimeout(i),i=setTimeout(a,Zo))}),e.addEventListener("pointerup",r=>{r.pointerType})}function ue(e,t,n,o=""){if(!t||t.length===0)return;let i=t.length,s=null,a=null;e.addEventListener("pointerdown",r=>{if(r.pointerType==="touch"&&r.isPrimary===!1)return;let l=e.getBoundingClientRect();s=at(r.clientX,l,i),e.setPointerCapture(r.pointerId),a||(a=document.createElement("div"),a.className="strip-drag-highlight",e.style.position="relative",e.appendChild(a)),a.style.display="",a.style.left=`${(s/i*100).toFixed(1)}%`,a.style.width="0%"}),e.addEventListener("pointermove",r=>{if(s===null||!a)return;let l=e.getBoundingClientRect(),d=at(r.clientX,l,i),c=Math.min(s,d),f=Math.max(s,d);a.style.left=`${(c/i*100).toFixed(1)}%`,a.style.width=`${((f-c+1)/i*100).toFixed(1)}%`}),e.addEventListener("pointerup",r=>{if(s===null){s=null;return}let l=e.getBoundingClientRect(),d=at(r.clientX,l,i),c=Math.min(s,d),f=Math.max(s,d),u=t.slice(c,f+1).filter(p=>p.v!==null);if(u.length>0){let p=u.map(w=>w.v),m=(p.reduce((w,k)=>w+k,0)/p.length).toFixed(1),g=Math.min(...p),y=Math.max(...p),v=t[c]?.l||"",_=t[f]?.l||"",S=`${v} \u2013 ${_}: avg ${m}${o}, ${g}${o} \u2013 ${y}${o}`,b=e.getBoundingClientRect();n.show(b,(c+f)/2/i*b.width,S),setTimeout(()=>n.hide(),3e3)}s=null})}function ro(e,t,n,o,i){if(!e||e.length===0)return"";let s=Number(t?.hours_to_show)||24,a=t?.mode||"timeline",r=Number(t?.slots_per_hour)||2,d=(t?.attribute||"temperature")==="humidity",c=d?wt:G,f=a==="heatmap"?s:s*r,u=s*36e5,p=Date.now()-u,m=(Date.now()-p)/u*100,g=d?"Humidity":"Thermal",y=a==="heatmap"?"Heatmap":"Timeline",v='<div class="section section-thermal-strip">';v+='<div style="display:flex;justify-content:space-between;align-items:baseline">',v+=`<div class="section-label">${A(s)}h ${h(g)} ${h(y)}</div>`,v+='<span class="card-subtitle section-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',v+="</div>",v+='<div class="zone-detail" id="timeline-detail"></div>',v+='<div class="strip-rows" style="position:relative">',v+='<div class="strip-crosshair" style="display:none"></div>';for(let _ of e){let S=_.entity,b=D(S),w=o?.zoneEntities?.[b]||{},k=d?_.humidity_entity||w.humidity||S:_.temperature_entity||w.temperature||S,F=_.name||n[S]?.attributes?.friendly_name||b,E=i?.data?.[k]||[];if(v+=`<div class="timeline-row" data-zone="${h(b)}" data-entity="${h(S)}">`,v+=`<span class="zone-label">${h(F)}</span>`,E.length<2)v+='<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">No data</div></div>';else{let M=no(E,f,u),$=`${F} ${d?"humidity":"temperature"} over ${s}h`;a==="heatmap"?v+=Pt(M,c,{ariaLabel:$}):v+=Rt(M,c,{ariaLabel:$,nowPct:m})}v+="</div>"}return v+="</div>",v+='<div class="time-axis" style="margin-left:76px">',v+=qt(u),v+="</div>",v+="</div>",v}var Xo={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function Ko(e,t,n,o){if(e==null||t===null||t===void 0||isNaN(e)||isNaN(t))return null;let i=100;if(i-=Math.min(50,Math.abs(e-t)*10),n!=null&&(i-=Math.min(25,Math.abs(n-45)*.5)),o!=null){let s=Xo[o]??50;i=i*.7+s*.3}return Math.max(0,Math.min(100,Math.round(i)))}function so(e){if(e>=80)return`rgba(52, 199, 89, ${(.35+e/100*.55).toFixed(2)})`;if(e>=50){let t=(e-50)/30;return`rgba(${Math.round(255-t*50)}, ${Math.round(159+t*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-e)/50*.5).toFixed(2)})`}function ao(e,t,n=72e5){if(e.length===0)return null;let o=0,i=e.length-1;for(;o<i;){let r=o+i>>1;e[r].t<t?o=r+1:i=r}let s=null,a=1/0;for(let r=Math.max(0,o-1);r<=Math.min(e.length-1,o);r++){let l=Math.abs(e[r].t-t);l<a&&isFinite(e[r].v)&&(a=l,s=e[r].v)}return a<=n?s:null}function lo(e,t,n,o,i){if(!e||e.length===0)return"";let s=Number(t?.slots_per_hour)||1,a=Number(t?.hours_to_show)||24,r=t?.mode||"heatmap",l=s*a,d=a*36e5,c=Date.now()-d,f=(Date.now()-c)/d*100,u=r==="timeline"?"Comfort Timeline":"Comfort Heatmap",p='<div class="section section-comfort-strip">';p+='<div style="display:flex;justify-content:space-between;align-items:baseline">',p+=`<div class="section-label">${A(a)}h ${h(u)}</div>`,p+='<span class="card-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',p+="</div>",p+='<div class="zone-detail" id="heatmap-detail"></div>',p+='<div class="heatmap-body" style="position:relative">',p+='<div class="strip-crosshair" style="display:none"></div>';for(let m=0;m<e.length;m++){let g=e[m],y=g.entity,v=D(y),_=o?.zoneEntities?.[v]||{},S=g.name||n[y]?.attributes?.friendly_name||v,b=g.temperature_entity||_.temperature||y,w=g.humidity_entity||_.humidity,k=i?.data?.[b]||[],F=w?i?.data?.[w]||[]:[],E=n[y]?.attributes?.temperature??null,M=_.comfort_level,C=M&&n[M]?.state||null,$=[],x=null,I=d/l;for(let T=0;T<l;T++){let R=c+T*I+I/2,N=ao(k,R),B=ao(F,R),V=Ko(N,E,B,C);V!==null&&(x=V);let Z=new Date(R),O=`${String(Z.getHours()).padStart(2,"0")}:${String(Z.getMinutes()).padStart(2,"0")}`;$.push({value:x,time:R,label:O})}p+=`<div class="heatmap-row" data-zone="${h(v)}" data-idx="${m}">`,p+=`<span class="zone-label">${h(S)}</span>`;let z=`${S} comfort over ${a}h`;r==="timeline"?p+=Rt($,so,{ariaLabel:z,nowPct:f}):p+=Pt($,so),p+="</div>"}return p+="</div>",p+='<div class="heatmap-time-axis">',p+=qt(d),p+="</div>",p+='<div class="heatmap-legend">',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(52,199,89,0.7)"></div>\u226580</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,159,10,0.65)"></div>50\u201379</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,69,58,0.6)"></div>&lt;50</div>',p+="</div>",p+="</div>",p}function co(e,t,n,o,i,s,a){let r=s+(a-s)*.35,l=s+(a-s)*.65,d=e-n,c=t-o,f=e+n,u=t+o,p=`M${s},${d.toFixed(1)}`;return p+=` C${r.toFixed(1)},${d.toFixed(1)} ${l.toFixed(1)},${c.toFixed(1)} ${a},${c.toFixed(1)}`,p+=` L${a},${u.toFixed(1)}`,p+=` C${l.toFixed(1)},${u.toFixed(1)} ${r.toFixed(1)},${f.toFixed(1)} ${s},${f.toFixed(1)}`,p+=" Z",p}function Yo(e,t,n,o){let i=n+(o-n)*.35,s=n+(o-n)*.65;return`M${n},${e.toFixed(1)} C${i.toFixed(1)},${e.toFixed(1)} ${s.toFixed(1)},${t.toFixed(1)} ${o},${t.toFixed(1)}`}function fe(e,t,n){if(!e||e.length===0)return"";let o=ot(),i=[],s=!1;for(let $ of e){let x=$.entity,I=D(x),z=n?.zoneEntities?.[I]||{},T=nt(x,z,t,$,{});(T.heatingPower>0||z.heating_power||t[x]?.attributes?.heating_power!==void 0)&&(s=!0),i.push({name:T.name,power:T.heatingPower,temp:T.currentTemp,target:T.targetTemp,unit:T.unit,hvacAction:T.hvacAction})}let a=i.length>0?Math.round(i.reduce(($,x)=>$+x.power,0)/i.length):0,r='<div class="section section-energy-flow">';if(r+='<div style="display:flex;justify-content:space-between;align-items:baseline">',r+='<div class="section-label">Energy Flow</div>',s&&(r+=`<span style="font-size:11px;color:${A(ct.heating.fallback)};font-weight:500">${h(a)}% avg</span>`),r+="</div>",!s)return r+='<div class="chart-empty">No heating data</div></div>',r;let l=360,d=i.length<=3?44:i.length<=6?38:34,c=15,f=Math.max(80,i.length*d+30),u=i.length*d,p=Math.max(40,Math.min(u*.7,u-16)),m=Math.max(36,p*.6),g=Math.max(50,m/2+14),y=l-60,v=f/2,_=22,S=2,b=p/Math.max(i.length,1)*.7,w=ct.heating.fallback,k="var(--disabled-color, #9E9E9E)",F=i.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),E=i.filter($=>$.power>0).length;r+=`<svg viewBox="0 0 ${l} ${f}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${A(f)}px;display:block">`,r+="<defs>",r+=`<filter id="flow-glow"><feGaussianBlur stdDeviation="${gt(l,360).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;for(let $=0;$<i.length;$++){let x=i[$].power>0||i[$].hvacAction==="heating"||i[$].hvacAction==="cooling",I=x?w:k,z=i[$].power;if(x){let T=z>0?(4.5-z/100*3.3).toFixed(1):"5.0";r+=`<linearGradient id="flow-g${$}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,r+=`<stop offset="0%" stop-color="${A(I)}" stop-opacity="0.3"/>`,r+=`<stop offset="50%" stop-color="${A(I)}" stop-opacity="1.0"/>`,r+=`<stop offset="100%" stop-color="${A(I)}" stop-opacity="0.3"/>`,o||(r+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${T}s" repeatCount="indefinite"/>`,r+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${T}s" repeatCount="indefinite"/>`),r+="</linearGradient>"}else r+=`<linearGradient id="flow-g${$}" x1="0" y1="0" x2="1" y2="0">`,r+=`<stop offset="0%" stop-color="${A(I)}" stop-opacity="0.15"/>`,r+=`<stop offset="50%" stop-color="${A(I)}" stop-opacity="0.25"/>`,r+=`<stop offset="100%" stop-color="${A(I)}" stop-opacity="0.1"/>`,r+="</linearGradient>"}r+="</defs>";let M=F?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)",C=F?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)";r+=`<rect x="${g-m/2}" y="${v-p/2}" width="${m}" height="${p}" rx="8" fill="${A(M)}" stroke="${A(C)}" stroke-width="1"/>`,r+=`<text x="${g}" y="${v-p/2-6}" text-anchor="middle" font-size="10" fill="var(--secondary-text-color, #8e8e93)">Boiler</text>`;for(let $=0;$<i.length;$++){let x=i[$],I=c+$*d+20,z=x.power>0?S+x.power/100*(_-S):S,T=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",P=T?' class="ribbon-active"':"",R=v+($-(i.length-1)/2)*b,N=co(R,I,z/2,z/2,l,g+m/2,y-12);if(r+=`<path d="${N}" fill="url(#flow-g${$})"${P}${T?' filter="url(#flow-glow)"':""} data-zone="${h(x.name)}">`,r+=`<title>${h(x.name)}: ${Math.round(x.power)}% heating power</title></path>`,x.power>0&&!o){let j=Oe(x.power,20,E),K=Ue(x.power),U=We(z,_),W=(U*.8).toFixed(1),L=Yo(R,I,g+m/2,y-12);r+=`<g class="flow-particles" data-zone="${h(x.name)}" style="will-change:transform">`;for(let H=0;H<j;H++){let q=(H*(K/j)).toFixed(2);r+=`<circle r="${U.toFixed(1)}" fill="${A(w)}" opacity="0.8"`,r+=` filter="drop-shadow(0 0 ${W}px ${A(w)})">`,r+=`<animateMotion dur="${K.toFixed(1)}s" begin="${q}s" repeatCount="indefinite"`,r+=` path="${L}"/>`,r+="</circle>"}r+="</g>"}let B=T?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)",V=T?' font-weight="600"':"";r+=`<text x="${y}" y="${(I-1).toFixed(1)}" font-size="11" fill="${A(B)}"${V}>${h(x.name)}</text>`;let Z=T?A(w):"var(--secondary-text-color, #8e8e93)",O=T?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`;r+=`<text x="${y}" y="${(I+12).toFixed(1)}" font-size="9" fill="${Z}">${h(O)}</text>`}return r+="</svg>",r+="</div>",r}function po(e,t,n,o){if(!e||!t||t.length===0)return!1;let i=e.querySelector("svg");if(!i)return!1;let s=[];for(let $ of t){let x=$.entity,I=D(x),z=o?.zoneEntities?.[I]||{},T=nt(x,z,n,$,{});s.push({name:T.name,power:T.heatingPower,temp:T.currentTemp,unit:T.unit,hvacAction:T.hvacAction})}let a=i.querySelectorAll("path[data-zone]");if(a.length!==s.length)return!1;let r=ct.heating.fallback,l="var(--disabled-color, #9E9E9E)",d=s.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),c=360,f=s.length<=3?44:s.length<=6?38:34,u=15,p=Math.max(80,s.length*f+30),m=s.length*f,g=Math.max(40,Math.min(m*.7,m-16)),y=Math.max(36,g*.6),v=Math.max(50,y/2+14),_=c-60,S=p/2,b=22,w=2,k=g/Math.max(s.length,1)*.7,F=Math.round(s.reduce(($,x)=>$+x.power,0)/s.length),E=e.querySelector(".section-label + span, div > span");E&&(E.textContent=`${F}% avg`);let M=i.querySelector("rect");M&&(M.setAttribute("fill",d?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)"),M.setAttribute("stroke",d?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)"),M.setAttribute("stroke-width",d?"0.5":"1"));let C=i.querySelectorAll("text");for(let $=0;$<s.length;$++){let x=s[$],I=a[$],z=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",T=u+$*f+20,P=x.power>0?w+x.power/100*(b-w):w,R=S+($-(s.length-1)/2)*k,N=co(R,T,P/2,P/2,c,v+y/2,_-12);I.setAttribute("d",N),z?(I.classList.add("ribbon-active"),I.setAttribute("filter","url(#flow-glow)")):(I.classList.remove("ribbon-active"),I.removeAttribute("filter"));let B=I.querySelector("title");B&&(B.textContent=`${x.name}: ${Math.round(x.power)}% heating power`);let V=i.querySelector(`g.flow-particles[data-zone="${x.name}"]`);V&&(V.style.display=x.power>0?"":"none");let Z=i.querySelector(`#flow-g${$}`);if(Z){let W=z?r:l,L=Z.querySelectorAll("stop"),H=Z.querySelectorAll("animate");if(z){let q=x.power>0?(4.5-x.power/100*3.3).toFixed(1):"5.0";L.length>=3&&(L[0].setAttribute("stop-color",W),L[0].setAttribute("stop-opacity","0.3"),L[1].setAttribute("stop-color",W),L[1].setAttribute("stop-opacity","1.0"),L[2].setAttribute("stop-color",W),L[2].setAttribute("stop-opacity","0.3"));for(let X of H)X.setAttribute("dur",`${q}s`);Z.setAttribute("gradientUnits","objectBoundingBox")}else{L.length>=3&&(L[0].setAttribute("stop-color",W),L[0].setAttribute("stop-opacity","0.15"),L[1].setAttribute("stop-color",W),L[1].setAttribute("stop-opacity","0.25"),L[2].setAttribute("stop-color",W),L[2].setAttribute("stop-opacity","0.1"));for(let q of H)q.remove()}}let O=1+$*2,j=2+$*2,K=C[O],U=C[j];if(K&&(K.textContent=x.name,K.setAttribute("fill",z?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)"),z?K.setAttribute("font-weight","600"):K.removeAttribute("font-weight")),U){let W=z?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`;U.textContent=W,U.setAttribute("fill",z?r:"var(--secondary-text-color, #8e8e93)")}}return!0}var uo=6,he=2;function me(e,t,n,o,i,s){let a=i*Math.PI/180,r=s*Math.PI/180,l=s-i>180?1:0;return`M${(e+n*Math.cos(a)).toFixed(2)},${(t+n*Math.sin(a)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 1 ${(e+n*Math.cos(r)).toFixed(2)},${(t+n*Math.sin(r)).toFixed(2)} L${(e+o*Math.cos(r)).toFixed(2)},${(t+o*Math.sin(r)).toFixed(2)} A${o.toFixed(2)},${o.toFixed(2)} 0 ${l} 0 ${(e+o*Math.cos(a)).toFixed(2)},${(t+o*Math.sin(a)).toFixed(2)} Z`}function ge(e,t,n,o,i){if(!e||e.length===0)return"";let s=ot(),a=Number(t?.size)||280,r=t?.attribute||"temperature",l=r==="temperature"||r==="both",d=r==="humidity"||r==="both",c=a/2,f=a/2,u=a*120/280,p=1.5,y=(360-p*e.length)/e.length,v=[];for(let z of e){let T=z.entity,P=D(T),R=o?.zoneEntities?.[P]||{},N=nt(T,R,n,z,{});v.push({name:N.name,temp:N.currentTemp,target:N.targetTemp,power:N.heatingPower,humidity:N.humidity,hvacAction:N.hvacAction,entityId:T,unit:N.unit})}let _=t?.outdoor_temp_entity,S=_||o?.hubEntities?.outside_temp,b=null;if(S&&n[S]){let z=n[S];z.state!=="unavailable"&&z.state!=="unknown"&&(b=z.attributes?.temperature!==void 0?String(z.attributes.temperature):z.state)}let w=S&&n[S]?.attributes?.unit_of_measurement||"\xB0C",k=t?.outdoor_humidity_entity,F=null;if(k&&n[k]){let z=n[k];z.state!=="unavailable"&&z.state!=="unknown"&&(F=z.attributes?.humidity!==void 0?String(z.attributes.humidity):z.state)}let E="",M=r==="humidity"?F!==null?`${h(F)}%`:"--":b!==null?`${h(b)}${h(w)}`:"--";r!=="humidity"&&d&&F!==null&&(E=`${h(F)}%`);let $={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[r]||"Home Thermal View",x=`<div class="section section-radial" data-attribute="${h(r)}"${_?` data-outdoor-temp-entity="${h(_)}"`:""}${k?` data-outdoor-humidity-entity="${h(k)}"`:""}>`;if(x+=`<div class="section-label">${h($)}</div>`,x+='<div class="radial-container">',x+=`<svg viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" role="img" aria-label="${h($)}" style="display:block;margin:0 auto">`,x+="<defs>",x+=`<filter id="radial-glow"><feGaussianBlur stdDeviation="${gt(a,280).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`,!s)for(let z=0;z<v.length;z++){let T=v[z],P=Kt(T.power,a);if(P<=0)continue;let R=45/Math.max(y,10),N=(.02*R).toFixed(4),B=(.04*R).toFixed(4);x+=`<filter id="heat-shimmer-${z}" x="-5%" y="-5%" width="110%" height="110%">`,x+=`<feTurbulence type="turbulence" baseFrequency="${N} ${B}" numOctaves="2" result="turb">`,x+=`<animate attributeName="baseFrequency" values="${N} ${B};${(parseFloat(N)*1.5).toFixed(4)} ${B};${N} ${B}" dur="4s" repeatCount="indefinite"/>`,x+="</feTurbulence>",x+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${P.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,x+="</filter>"}x+="</defs>";for(let z=0;z<v.length;z++){let T=v[z],P=z*(y+p)-90,R=P+y,N=T.power>0||T.hvacAction==="heating"||T.hvacAction==="cooling",B=N?" arc-active":"",V=[h(T.name)];l&&V.push(T.temp!==null?`${T.temp}${T.unit}`:"--"),d&&T.humidity!==null&&V.push(`${Math.round(T.humidity)}%`),V.push(N?`${T.hvacAction==="cooling"?"Cooling":"Heating"} ${T.power}%`:"Idle");let Z=V.join(", ");x+=`<g class="arc-group${B}" data-idx="${z}">`;let O=d&&r==="both"?u+he+uo+4:u+4,j=u-28-4,K=me(c,f,O,j,P-p/2,R+p/2);if(x+=`<path d="${K}" fill="transparent" class="arc-hit"/>`,l){let U=T.temp!==null?G(T.temp):"var(--disabled-color, #9E9E9E)",W=8+T.power/100*20,L=u-W,H=me(c,f,u,L,P,R);if(x+=`<path d="${H}" fill="${A(U)}" class="arc-path"`,Kt(T.power,a)>0&&!s?x+=` filter="url(#heat-shimmer-${z})"`:N&&(x+=' filter="url(#radial-glow)"'),x+=`><title>${Z}</title>`,N&&!s){let X=T.power>0?(4.5-T.power/100*3).toFixed(1):"5.0";x+=`<animate attributeName="opacity" values="1;0.65;1" dur="${X}s" repeatCount="indefinite"/>`}x+="</path>"}if(d&&T.humidity!==null){let U=wt(T.humidity),W,L;if(r==="both")W=u+he+uo,L=u+he;else{let q=8+T.power/100*20;W=u,L=u-q}let H=me(c,f,W,L,P,R);x+=`<path d="${H}" fill="${A(U)}" class="arc-path" opacity="0.8">`,x+=`<title>${Z}</title>`,x+="</path>"}x+="</g>"}x+="</svg>";let I=Math.round((u-28-8)*2);x+=`<div class="center-info" id="radial-center" style="width:${I}px;height:${I}px">`,x+=`<div class="center-value">${M}</div>`,x+='<div class="center-label">Outdoor</div>',x+=`<div class="center-sub">${E}</div>`,x+="</div>",x+="</div>",x+='<div class="zone-detail" id="radial-detail"></div>',x+='<div class="radial-legend">';for(let z=0;z<v.length;z++){let T=v[z],P=r==="humidity"?T.humidity!==null?wt(T.humidity):"var(--disabled-color, #9E9E9E)":T.temp!==null?G(T.temp):"var(--disabled-color, #9E9E9E)",R="";l&&(R+=T.temp!==null?`${T.temp}${T.unit}`:"--"),l&&d&&(R+=" \xB7 "),d&&(R+=T.humidity!==null?`${Math.round(T.humidity)}%`:"--"),x+=`<div class="legend-item" data-idx="${z}">`,x+=`<span class="legend-dot" style="background:${A(P)}"></span>`,x+=`${h(T.name)} <span class="legend-temp">${h(R)}</span>`,x+="</div>"}return x+="</div>",x+="</div>",x}var fo=!1,ve=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=Yt()}setConfig(t){this._config=Ge(t),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender())}set hass(t){if(this._hass=t,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._updateZones(),this._updateSections(),this._refreshHistoryIfNeeded(),this._prevStates={...t.states}}}_runDiscovery(){if(!this._hass||!this._config)return;let n=(this._config._zones||[]).map(o=>D(o.entity));if(this._discovery=Ze(this._hass.states,n),!fo&&this._discovery.isTadoCE){fo=!0;let o=Object.entries(this._discovery.hubEntities).map(([i,s])=>`${i}=${s}`);console.info("Pulse Climate: hub discovery \u2014 found:",o.join(", ")),this._discovery.missingHubKeys.length>0&&console.warn("Pulse Climate: hub discovery \u2014 missing:",this._discovery.missingHubKeys.join(", "))}}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,n=this._hass.states,o=this._discovery,i=t._zones||[],s=t.layout==="compact",a=t.entity_row===!0,r="";r+=`<style>${Be}</style>`,a||(r+=`<ha-card${s?' class="compact"':""}>`),t.title&&(r+=`<div class="pulse-title">${h(t.title)}</div>`);let l=t.sections||[{type:"zones"}];for(let d of l)r+=this._renderSection(d,i,n,o);a||(r+="</ha-card>"),this._shadow.innerHTML=r,this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._elements.apiSection=this._shadow.querySelector(".section-api"),this._prevStates={...n},this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let t=this._shadow.querySelectorAll(".zone-row"),n=this._config._zones||[];for(let o=0;o<t.length&&o<n.length;o++){let i=t[o],s=n[o],a=s.entity,r=i.__pulseCleanup;typeof r=="function"&&r();let l=new AbortController,{signal:d}=l,c=0,f=null,u=null,p=!1;i.__pulseCleanup=()=>{l.abort(),f&&clearTimeout(f),u&&clearTimeout(u),delete i.__pulseCleanup},i.addEventListener("keydown",g=>{let y=g;(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),this._fireAction(a,s,"tap_action"))},{signal:d}),i.addEventListener("click",g=>{if(g.preventDefault(),p){p=!1;return}c++,c===1?f=setTimeout(()=>{c=0,this._fireAction(a,s,"tap_action")},250):c===2&&(f&&clearTimeout(f),c=0,this._fireAction(a,s,"double_tap_action"))},{signal:d}),i.addEventListener("pointerdown",()=>{p=!1,u=setTimeout(()=>{p=!0,this._fireAction(a,s,"hold_action")},500)},{signal:d});let m=()=>{u&&clearTimeout(u)};i.addEventListener("pointerup",m,{signal:d}),i.addEventListener("pointercancel",m,{signal:d}),i.addEventListener("contextmenu",g=>g.preventDefault(),{signal:d}),tt(i)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs()}_bindChipActions(){if(!this._config||!this._hass)return;let t=this._config._zones||[],n=this._shadow.querySelectorAll(".zone-row");for(let o=0;o<n.length&&o<t.length;o++){let i=t[o],s=i.entity,a=n[o].querySelectorAll(".chip");for(let r of a){let l=r,d=l.dataset.chipType||"",c=l.dataset.entity||s,f=i.chip_actions,u=this._config.chip_actions,p=f?.[d]||u?.[d]||{},m=p.tap_action||{action:"more-info",entity:c},g=p.hold_action||{action:"none"};l.style.cursor="pointer",tt(l),l.addEventListener("click",v=>{v.stopPropagation(),this._hass&&ht(this,this._hass,m,c,dt)});let y=null;l.addEventListener("pointerdown",v=>{v.stopPropagation(),y=setTimeout(()=>{!this._hass||g.action==="none"||ht(this,this._hass,g,c,dt)},500)}),l.addEventListener("pointerup",v=>{v.stopPropagation(),y&&clearTimeout(y)}),l.addEventListener("pointercancel",()=>{y&&clearTimeout(y)}),l.addEventListener("contextmenu",v=>v.preventDefault())}}}_bindSectionChipActions(){let t=this._shadow.querySelectorAll(".section .chip[data-entity]");for(let n of t){let o=n;o.closest(".zone-row")||(o.style.cursor="pointer",tt(o),o.addEventListener("click",i=>{i.stopPropagation();let s=o.dataset.entity;s&&Ft(this,"hass-more-info",{entityId:s})}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let t=this._shadow.querySelector(".chip-next-sync");if(!t)return;let n=Number(t.getAttribute("data-target"));if(!n||!isFinite(n))return;let o=()=>{let i=n-Date.now();if(i<=0){t.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let s=Math.floor(i/6e4),a=Math.floor(i%6e4/1e3);t.textContent=s>0?`Next: ${s}m ${a}s`:`Next: ${a}s`};o(),this._countdownTimer=setInterval(o,1e3)}_bindRadialInteractions(){let t=this._shadow.querySelectorAll(".arc-group"),n=this._shadow.querySelectorAll(".radial-legend .legend-item"),o=this._shadow.querySelector("#radial-center"),i=this._shadow.querySelector("#radial-detail"),s=this._shadow.querySelector(".section-radial svg");if(t.length===0||!o)return;let r=(s&&Number(s.getAttribute("width"))||280)/2,l=this._config?._zones||[],d=this._hass?.states||{},c=this._discovery,f=null,p=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-temp-entity")||c?.hubEntities?.outside_temp,m=this._shadow.querySelector(".section-radial")?.getAttribute("data-attribute")||"temperature",g="--",y="";if(m!=="humidity"&&p&&d[p]){let b=d[p];b.state!=="unavailable"&&b.state!=="unknown"&&(g=`${b.attributes?.temperature!==void 0?b.attributes.temperature:b.state}${b.attributes?.unit_of_measurement||"\xB0C"}`)}let v=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-humidity-entity");if(v&&d[v]){let b=d[v];if(b.state!=="unavailable"&&b.state!=="unknown"){let w=b.attributes?.humidity!==void 0?b.attributes.humidity:b.state;m==="humidity"?g=`${w}%`:y=`${w}%`}}let _=b=>{if(f===b){S();return}f=b;let w=l[b];if(!w)return;let k=w.entity,F=D(k),E=c?.zoneEntities?.[F]||{},M=bt(k,d,w),{name:C,temp:$,target:x,humidity:I}=M,z=M.hvacAction,T=0;if(E.heating_power){let O=d[E.heating_power];O&&O.state!=="unavailable"&&(T=parseFloat(O.state)||0)}else d[k]?.attributes?.heating_power!==void 0&&(T=parseFloat(d[k].attributes.heating_power)||0);let R=T>0||z==="heating"||z==="cooling"?`${z==="cooling"?"Cooling":"Heating"} ${Math.round(T)}%`:"Idle",N=o.querySelector(".center-value"),B=o.querySelector(".center-label"),V=o.querySelector(".center-sub");N&&(N.textContent=$!==void 0?`${$}${M.unit}`:"--"),B&&(B.textContent=C);let Z=I!==void 0?` \xB7 ${I}%`:"";V&&(V.textContent=`${R}${Z}`),t.forEach((O,j)=>{O.classList.toggle("dimmed",j!==b),O.classList.toggle("selected",j===b),j===b?O.setAttribute("transform",`translate(${r}, ${r}) scale(1.06) translate(${-r}, ${-r})`):O.removeAttribute("transform")}),n.forEach((O,j)=>{O.classList.toggle("selected",j===b)}),i&&(i.innerHTML=`<div class="detail-stats">
          <div class="stat"><div class="stat-value">${x!==void 0?h(x)+h(M.unit):"--"}</div><div class="stat-label">Target</div></div>
          <div class="stat"><div class="stat-value">${I!==void 0?h(I)+"%":"--"}</div><div class="stat-label">Humidity</div></div>
          <div class="stat"><div class="stat-value">${h(z)}</div><div class="stat-label">Action</div></div>
        </div>`,i.classList.add("active"))},S=()=>{f=null;let b=o.querySelector(".center-value"),w=o.querySelector(".center-label"),k=o.querySelector(".center-sub");b&&(b.textContent=g),w&&(w.textContent="Outdoor"),k&&(k.textContent=y),t.forEach(F=>{F.classList.remove("dimmed","selected"),F.removeAttribute("transform")}),n.forEach(F=>{F.classList.remove("selected")}),i&&(i.classList.remove("active"),i.innerHTML="")};if(t.forEach((b,w)=>{b.addEventListener("click",()=>_(w))}),n.forEach((b,w)=>{tt(b),b.addEventListener("click",()=>_(w))}),t.length>1&&!ot()){let b=!0,w=0,k=1,F=()=>{if(!b||f!==null){setTimeout(F,500);return}let M=t[w];if(!M){setTimeout(F,300);return}if(M.style.filter="brightness(1.4)",M.style.transition="filter 0.3s ease-in",setTimeout(()=>{M.style.filter="",M.style.transition="filter 0.5s ease-out"},250),w+=k,w>=t.length||w<0){w=k>0?0:t.length-1;let C=1e3+Math.random()*2e3;Math.random()<.4&&(k*=-1),setTimeout(F,C)}else{let C=80+Math.random()*170;setTimeout(F,C)}};setTimeout(F,1500);let E=t[0];E&&(E.__shimmerStop=()=>{b=!1})}}_bindTimelineInteractions(){let t=this._shadow.querySelectorAll(".section-thermal-strip .timeline-row"),n=this._shadow.querySelector(".section-thermal-strip");if(t.length===0||!n)return;let o=this._config?._zones||[],i=this._hass?.states||{},s=this._discovery,a=this._historyCache,r=n.querySelector(".section-subtitle"),l="Tap a zone for details",d=i[o[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C",c=null,f=null,u=b=>{f=null;let w=b.querySelector(".comparison-path");w&&w.remove();let k=b.querySelector(".comparison-legend");k&&k.remove()};t.forEach((b,w)=>{tt(b),b.addEventListener("click",()=>{if(n.querySelectorAll(".strip-drag-highlight").forEach(L=>{L.style.display="none"}),c!==null&&c!==w){let L=n.querySelector(".zone-detail"),H=L?.querySelector(".detail-sparkline svg");if(L&&H){if(f===w){u(L);return}u(L),f=w;let q=o[w];if(!q)return;let X=q.entity,$t=D(X),ye=s?.zoneEntities?.[$t]||{},ho=q.temperature_entity||ye.temperature||X,_e=a?.data?.[ho]||[];if(_e.length>=2){let xe=it(_e,340,36,48);if(xe){let lt=document.createElementNS("http://www.w3.org/2000/svg","path");lt.setAttribute("d",xe.linePath),lt.setAttribute("fill","none"),lt.setAttribute("stroke","var(--info-color, #4FC3F7)"),lt.setAttribute("stroke-width","1.5"),lt.setAttribute("opacity","0.5"),lt.classList.add("comparison-path"),H.appendChild(lt)}}let be=o[c],mo=bt(be?.entity||"",i,be).name,go=bt(X,i,q).name,St=document.createElement("div");St.className="comparison-legend",St.style.cssText="display:flex;gap:12px;font-size:10px;margin-top:4px;color:var(--secondary-text-color,#8e8e93)",St.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;margin-right:4px"></span>${h(mo)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--info-color, #4FC3F7);margin-right:4px"></span>${h(go)}</span>`,L.appendChild(St);return}}if(c===w){c=null,f=null,t.forEach(H=>H.classList.remove("selected"));let L=n.querySelector(".zone-detail");L&&L.classList.remove("active"),r&&(r.textContent=l);return}c=w,t.forEach((L,H)=>L.classList.toggle("selected",H===w));let k=o[w];if(!k)return;let F=k.entity,E=i[F]?.attributes||{},M=bt(F,i,k),{name:C,temp:$,target:x,humidity:I,hvacAction:z}=M;r&&(r.textContent=C);let T=D(F),P=s?.zoneEntities?.[T]||{},R=k.temperature_entity||P.temperature||F,N=a?.data?.[R]||[],B="";if(N.length>=2){let L=N[N.length-1],H=N[N.length-2],q=L.v-H.v,X=(L.t-H.t)/36e5;if(X>0&&isFinite(q)&&isFinite(X)){let $t=q/X;B=`${$t>=0?"+":""}${$t.toFixed(1)}${M.unit}/hr`}}let V=0;if(P.heating_power){let L=i[P.heating_power];L&&L.state!=="unavailable"&&(V=parseFloat(L.state)||0)}else E.heating_power!==void 0&&(V=parseFloat(E.heating_power)||0);let O=V>0||z==="heating"||z==="cooling"?`${z==="cooling"?"Cooling":"Heating"} ${Math.round(V)}%`:"Idle",j="";if(N.length>=2){let L=1/0,H=-1/0;for(let q of N)isFinite(q.v)&&(q.v<L&&(L=q.v),q.v>H&&(H=q.v));isFinite(L)&&isFinite(H)&&(j=`${L.toFixed(1)}${M.unit} \u2013 ${H.toFixed(1)}${M.unit} today`)}let K="";if(N.length>=2){let L=z==="heating"?"#FF9800":$!==void 0&&isFinite(Number($))?G(Number($)):"var(--primary-text-color)",H=A(L),q=it(N,340,36,48);if(q){let X=`tl-detail-grad-${w}`;K=`<div class="detail-sparkline sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${h(X)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${H}" stop-opacity="0.3"/><stop offset="100%" stop-color="${H}" stop-opacity="0"/></linearGradient></defs><path d="${q.areaPath}" fill="url(#${h(X)})" /><path d="${q.linePath}" fill="none" stroke="${H}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let U=n.querySelector(".zone-detail");U||(U=document.createElement("div"),U.className="zone-detail",n.insertBefore(U,n.querySelector(".timeline-row"))),U.innerHTML=`<div class="detail-header"><span class="detail-name">${h(C)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${$!==void 0?h($)+h(M.unit):"--"}</div><div class="stat-label">Current</div>${B?`<div class="stat-sub">${h(B)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${x!==void 0?h(x)+h(M.unit):"--"}</div><div class="stat-label">Target</div>${O?`<div class="stat-sub">${h(O)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${I!==void 0?h(I)+"%":"--"}</div><div class="stat-label">Humidity</div>${j?`<div class="stat-sub">${h(j)}</div>`:""}</div>
          </div>${K}`,U.classList.add("active");let W=U.querySelector(".detail-close");W&&W.addEventListener("click",L=>{L.stopPropagation(),c=null,f=null,t.forEach(H=>H.classList.remove("selected")),U.classList.remove("active"),r&&(r.textContent=l)})})});let p=de(),m=n.querySelector(".strip-rows");m&&(m.style.position="relative",m.appendChild(p.element)),n.querySelectorAll(".strip-container").forEach(b=>{let w=b.getAttribute("data-slots"),k=null;try{w&&(k=JSON.parse(w))}catch{}b.addEventListener("pointermove",F=>{if(F.pointerType==="touch"||!k)return;let E=b.getBoundingClientRect(),M=at(F.clientX,E,k.length),C=k[M];if(C){let $=C.v!==null?`${C.l}: ${C.v}${d}`:`${C.l}: --`;p.show(E,F.clientX-E.left,$)}}),b.addEventListener("pointerleave",()=>p.hide()),b.addEventListener("pointerdown",F=>{if(F.pointerType!=="touch"||!k)return;let E=b.getBoundingClientRect(),M=at(F.clientX,E,k.length),C=k[M];if(C){let $=C.v!==null?`${C.l}: ${C.v}${d}`:`${C.l}: --`;p.show(E,F.clientX-E.left,$),setTimeout(()=>p.hide(),2e3)}})}),n.querySelectorAll(".cells").forEach(b=>{b.addEventListener("pointermove",w=>{if(w.pointerType==="touch")return;let k=w.target?.closest?.(".cell");if(!k){p.hide();return}let F=k.getAttribute("data-hour")||"",E=k.getAttribute("data-score"),M=E?`${F}: ${E}${d}`:`${F}: --`,C=b.getBoundingClientRect();p.show(C,w.clientX-C.left,M)}),b.addEventListener("pointerleave",()=>p.hide()),b.addEventListener("pointerdown",w=>{if(w.pointerType!=="touch")return;let k=w.target?.closest?.(".cell");if(!k)return;let F=k.getAttribute("data-hour")||"",E=k.getAttribute("data-score"),M=E?`${F}: ${E}${d}`:`${F}: --`,C=b.getBoundingClientRect();p.show(C,w.clientX-C.left,M),setTimeout(()=>p.hide(),2e3)})});let v=m?.querySelector(".strip-crosshair"),_=m?.querySelector(".strip-container")||m?.querySelector(".cells");if(m&&v&&_){let b=_.getBoundingClientRect().left-m.getBoundingClientRect().left;pe(m,v,_,b)}n.querySelectorAll(".strip-container, .cells").forEach(b=>{let w=b.getAttribute("data-slots"),k=null;try{w&&(k=JSON.parse(w))}catch{}ue(b,k,p,d)})}_bindHeatmapInteractions(){let t=this._shadow.querySelectorAll(".section-comfort-strip .heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(t.length===0||!n)return;let o=null;t.forEach((u,p)=>{tt(u),u.addEventListener("click",()=>{let m=this._shadow.querySelector(".section-comfort-strip");if(m&&m.querySelectorAll(".strip-drag-highlight").forEach(C=>{C.style.display="none"}),o===p){o=null,t.forEach(C=>C.classList.remove("selected")),n.classList.remove("active");return}o=p,t.forEach((C,$)=>C.classList.toggle("selected",$===p));let g=u.querySelectorAll(".cell"),y=[],v=[];if(g.length>0)g.forEach(C=>{let $=C.getAttribute("data-score");$&&(y.push(Number($)),v.push(C.getAttribute("data-hour")||"--"))});else{let $=u.querySelector(".strip-container")?.getAttribute("data-slots");if($)try{let x=JSON.parse($);for(let I of x)I.v!==null&&I.v!==void 0&&(y.push(I.v),v.push(I.l||"--"))}catch{}}if(y.length===0)return;let _=Math.round(y.reduce((C,$)=>C+$,0)/y.length),S=0,b=0;for(let C=1;C<y.length;C++)y[C]>y[S]&&(S=C),y[C]<y[b]&&(b=C);let w=v[S]||"--",k=v[b]||"--",F=_>=80?"#34c759":_>=50?"#ff9f0a":"#ff453a",E=u.querySelector(".zone-label")?.textContent||"";n.innerHTML=`<div class="detail-header"><span class="detail-name">${h(E)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${_}</div><div class="stat-label">Avg Score</div></div>
            <div class="stat"><div class="stat-value">${h(w)}</div><div class="stat-label">Best Hour</div></div>
            <div class="stat"><div class="stat-value">${h(k)}</div><div class="stat-label">Worst Hour</div></div>
          </div>
          <div class="detail-bar"><div class="detail-bar-fill" style="width:${_}%;background:${A(F)}"></div></div>`,n.classList.add("active");let M=n.querySelector(".detail-close");M&&M.addEventListener("click",C=>{C.stopPropagation(),o=null,t.forEach($=>$.classList.remove("selected")),n.classList.remove("active")})})});let i=this._shadow.querySelector(".section-comfort-strip");if(!i)return;let s=de(),a=i.querySelector(".heatmap-body");a&&(a.style.position="relative",a.appendChild(s.element));let r=a?.querySelector(".cells")||a?.querySelector(".strip-container");i.querySelectorAll(".cells").forEach(u=>{u.addEventListener("pointermove",p=>{if(p.pointerType==="touch")return;let m=p.target?.closest?.(".cell");if(!m){s.hide();return}let g=m.getAttribute("data-hour")||"",y=m.getAttribute("data-score"),v=y?`${g}: Score ${y}`:`${g}: --`,_=r?.getBoundingClientRect();_&&s.show(_,p.clientX-_.left,v)}),u.addEventListener("pointerleave",()=>s.hide()),u.addEventListener("pointerdown",p=>{if(p.pointerType!=="touch")return;let m=p.target?.closest?.(".cell");if(!m)return;let g=m.getAttribute("data-hour")||"",y=m.getAttribute("data-score"),v=y?`${g}: Score ${y}`:`${g}: --`,_=r?.getBoundingClientRect();_&&(s.show(_,p.clientX-_.left,v),setTimeout(()=>s.hide(),2e3))})}),i.querySelectorAll(".strip-container").forEach(u=>{let p=u.getAttribute("data-slots"),m=null;try{p&&(m=JSON.parse(p))}catch{}u.addEventListener("pointermove",g=>{if(g.pointerType==="touch"||!m)return;let y=u.getBoundingClientRect(),v=at(g.clientX,y,m.length),_=m[v];if(_){let S=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;s.show(y,g.clientX-y.left,S)}}),u.addEventListener("pointerleave",()=>s.hide()),u.addEventListener("pointerdown",g=>{if(g.pointerType!=="touch"||!m)return;let y=u.getBoundingClientRect(),v=at(g.clientX,y,m.length),_=m[v];if(_){let S=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;s.show(y,g.clientX-y.left,S),setTimeout(()=>s.hide(),2e3)}})});let c=a?.querySelector(".strip-crosshair");if(a&&c&&r){let u=r.getBoundingClientRect().left-a.getBoundingClientRect().left;pe(a,c,r,u)}i.querySelectorAll(".cells, .strip-container").forEach(u=>{let p=u.getAttribute("data-slots"),m=null;try{p&&(m=JSON.parse(p))}catch{}ue(u,m,s)})}_bindEnergyFlowInteractions(){let t=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),n=this._shadow.querySelector(".section-energy-flow");if(t.length===0||!n)return;let o=null;t.forEach(i=>{i.classList.add("ribbon"),i.addEventListener("click",()=>{let s=i.getAttribute("data-zone");if(s){if(o===s){o=null,t.forEach(a=>a.classList.remove("dimmed"));return}o=s,t.forEach(a=>{a.classList.toggle("dimmed",a.getAttribute("data-zone")!==s)})}})})}_bindSparklineCrosshairs(){this._shadow.querySelectorAll(".strip-tooltip-fixed").forEach(o=>o.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(o=>o.remove());let t=this._shadow.querySelectorAll(".section-zones .sparkline-filled, .section-zones .zone-row-pulse");if(t.length===0)return;let n=io();this._shadow.appendChild(n.element),t.forEach(o=>{let i=o;i.style.position="relative";let s=document.createElement("div");s.className="strip-crosshair sparkline-crosshair",s.style.display="none",s.style.top="0",s.style.bottom="0",i.appendChild(s);let a=i.getAttribute("data-sparkline"),r=null;try{a&&(r=JSON.parse(a))}catch{}i.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let c=i.getBoundingClientRect(),f=d.clientX-c.left;if(!(f<0||f>c.width)&&(s.style.left=`${f}px`,s.style.display="",r)){let u=r.d,p=r.u||"",m=Math.min(u.length-1,Math.floor(f/c.width*u.length)),g=u[m];if(g){let y=g.v!==null?`${g.l}: ${g.v}${p}`:`${g.l}: --`;n.show(c,d.clientX,y)}}}),i.addEventListener("pointerleave",()=>{s.style.display="none",n.hide()});let l=null;i.addEventListener("pointerdown",d=>{if(d.pointerType!=="touch")return;let c=i.getBoundingClientRect(),f=d.clientX-c.left;if(!(f<0||f>c.width)){if(s.style.left=`${f}px`,s.style.display="",r){let u=r.d,p=r.u||"",m=Math.min(u.length-1,Math.floor(f/c.width*u.length)),g=u[m];if(g){let y=g.v!==null?`${g.l}: ${g.v}${p}`:`${g.l}: --`;n.show(c,d.clientX,y)}}l&&clearTimeout(l),l=setTimeout(()=>{s.style.display="none",n.hide(),l=null},2e3)}})})}_renderSection(t,n,o,i){let s=typeof t=="string"?t:t.type,a=this._config,r=i.hubEntities,l=this._historyCache;switch(s){case"zones":return te(n,a,o,i,l);case"api":return ee(r,o,t,l);case"graph":return oo(t,n,l,o,i);case"donut":return ce(t,r,o);case"bridge":return oe(r,o,l);case"homekit":return ne(r,o,l);case"weather":return ie(r,o,l);case"environment":return re(n,o,i);case"thermal":return se(n,o,i);case"schedule":return ae(n,o,i);case"thermal_strip":return ro(n,t,o,i,l);case"comfort_strip":return lo(n,t,o,i,l);case"energy_flow":return fe(n,o,i);case"radial":return ge(n,t,o,i,l);default:return""}}_fireAction(t,n,o){if(!this._hass)return;let i=n[o]||this._config?.[o]||(o==="tap_action"?{action:"more-info"}:{action:"none"});ht(this,this._hass,i,t,dt)}_applyTransitionGlow(t){let n=a=>{a&&(a.classList.add("temp-transitioning"),setTimeout(()=>a.classList.remove("temp-transitioning"),1100))},o=this._shadow.querySelectorAll(".zone-row");o[t]&&n(o[t].querySelector(".power-bar-fill"));let i=this._shadow.querySelectorAll(".zone-row-pulse");n(i[t]||null);let s=this._shadow.querySelectorAll(".arc-group");s[t]&&n(s[t].querySelector(".arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!ot()){let t=this._config._zones||[],n=this._hass.states;for(let o=0;o<t.length;o++){let i=t[o].entity,s=this._prevStates[i],a=n[i];if(!s||!a)continue;let r=s.attributes?.current_temperature,l=a.attributes?.current_temperature;r!==void 0&&l!==void 0&&r!==l&&this._applyTransitionGlow(o)}}Qe(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let t=this._hass.states,n=this._discovery,o=n.hubEntities,i=this._config._zones||[],s=[{selector:".section-zones",watchIds:[o.home_state].filter(Boolean),render:()=>{let l=this._config;return te(i,l,t,n,this._historyCache)}},{selector:".section-api",watchIds:[o.api_usage,o.api_limit,o.api_status,o.next_sync,o.token_status].filter(Boolean),render:()=>{let d=(this._config?.sections||[{type:"zones"}]).find(c=>(typeof c=="string"?c:c.type)==="api")||{};return ee(o,t,d,this._historyCache)}},{selector:".section-homekit",watchIds:[o.homekit_connected,o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean),render:()=>ne(o,t,this._historyCache)},{selector:".section-bridge",watchIds:[o.bridge_connected,o.boiler_flow_temp,o.wc_status,o.wc_target_flow].filter(Boolean),render:()=>oe(o,t,this._historyCache)},{selector:".section-weather",watchIds:[o.outside_temp,o.weather,o.solar_intensity].filter(Boolean),render:()=>ie(o,t,this._historyCache)},{selector:".section-environment",watchIds:i.flatMap(l=>{let d=D(l.entity),c=n.zoneEntities?.[d]||{};return[c.mold_risk,c.condensation,c.comfort_level,c.surface_temp,c.dew_point].filter(Boolean)}),render:()=>re(i,t,n)},{selector:".section-thermal",watchIds:i.flatMap(l=>{let d=D(l.entity),c=n.zoneEntities?.[d]||{};return[c.heating_rate,c.thermal_inertia,c.preheat_time,c.confidence].filter(Boolean)}),render:()=>se(i,t,n)},{selector:".section-schedule",watchIds:i.flatMap(l=>{let d=D(l.entity),c=n.zoneEntities?.[d]||{};return[c.next_schedule,c.next_sched_temp,c.schedule_deviation,c.preheat_advisor,c.comfort_target].filter(Boolean)}),render:()=>ae(i,t,n)},{selector:".section-radial",watchIds:i.map(l=>l.entity),render:()=>{let d=(this._config?.sections||[{type:"zones"}]).find(c=>(typeof c=="string"?c:c.type)==="radial")||{};return ge(i,d,t,n,this._historyCache)}},{selector:".section-donut",watchIds:(()=>{let c=(this._config?.sections||[]).find(f=>(typeof f=="string"?f:f.type)==="donut")?.source;return c==="api_breakdown"&&o.api_breakdown?[o.api_breakdown]:c==="homekit_saved"?[o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let d=(this._config?.sections||[]).find(c=>(typeof c=="string"?c:c.type)==="donut")||{};return ce(d,o,t)}}],a=new Set;for(let l of s){let d=this._shadow.querySelector(l.selector);if(!d||l.watchIds.length===0||!l.watchIds.some(m=>{let g=t[m],y=this._prevStates[m];return!y||y.state!==g?.state||y.last_updated!==g?.last_updated}))continue;let f=l.render();if(!f)continue;let u=document.createElement("template");u.innerHTML=f;let p=u.content.firstElementChild;p&&(d.replaceWith(p),a.add(l.selector))}(a.has(".section-zones")||a.size>0)&&this._bindSectionChipActions(),a.has(".section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._bindZoneActions(),this._bindChipActions()),a.has(".section-api")&&(this._elements.apiSection=this._shadow.querySelector(".section-api"),this._startCountdownTimer());let r=this._shadow.querySelector(".section-energy-flow");if(r&&i.some(d=>{let c=D(d.entity),f=n.zoneEntities?.[c]||{};return[d.entity,f.heating_power,f.ac_power].filter(Boolean).some(p=>{let m=t[p],g=this._prevStates[p];return!g||g.state!==m?.state||g.last_updated!==m?.last_updated})})&&!po(r,i,t,n)){let c=fe(i,t,n);if(c){let f=document.createElement("template");f.innerHTML=c;let u=f.content.firstElementChild;u&&(r.replaceWith(u),a.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,n=this._hass.states,o=this._discovery,i=t._zones||[],s=t.sections||[{type:"zones"}],a={zones:".section-zones",api:".section-api",graph:".section-graph",bridge:".section-bridge",thermal_strip:".section-thermal-strip",comfort_strip:".section-comfort-strip",homekit:".section-homekit",weather:".section-weather",radial:".section-radial",donut:".section-donut"};for(let r of s){let l=typeof r=="string"?r:r.type,d=a[l];if(!d)continue;let c=this._shadow.querySelector(d);if(!c)continue;let f=this._renderSection(r,i,n,o);if(!f)continue;let u=document.createElement("template");u.innerHTML=f;let p=u.content.firstElementChild;p&&c.replaceWith(p)}this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._elements.apiSection=this._shadow.querySelector(".section-api"),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||Xe(this._historyCache))return;let t=this._config._zones||[],n=[];for(let i of t){let s=D(i.entity),a=this._discovery?.zoneEntities?.[s]||{};n.push(i.temperature_entity||a.temperature||i.entity);let r=i.humidity_entity||a.humidity;r&&n.push(r)}if(this._discovery?.hubEntities?.call_history&&n.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&n.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&n.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&n.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&n.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&n.push(this._discovery.hubEntities.outside_temp),n.length===0)return;let o=n.filter(i=>i&&typeof i=="string"&&i.includes("."));if(o.length!==0)try{let i=await At(this._hass,o,24);this._historyCache=Ke(this._historyCache,i),Object.values(i).filter(a=>a.length>=2).length>0&&this._updateHistorySections()}catch{dt("History fetch failed, using cached data")}}disconnectedCallback(){this._historyCache=Yt(),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);let t=this._shadow?.querySelectorAll(".zone-row")||[];for(let n of t){let o=n.__pulseCleanup;typeof o=="function"&&o()}}connectedCallback(){this._config&&this._hass&&!this._shadow.querySelector("ha-card")&&(this._discovery||this._runDiscovery(),this._fullRender())}getCardSize(){let t=this._config?._zones?.length||1,n=this._config?.sections?.length||1;return Math.max(1,t+n)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(De)}static getStubConfig(t){return{entity:Object.keys(t.states).find(o=>o.startsWith("climate."))||"climate.living_room"}}};customElements.get(Et)||customElements.define(Et,ve);window.customCards=window.customCards||[];window.customCards.push({type:Et,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${He} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Bt=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=we,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)jt(n),Zt(n)}setConfig(t){this._config=ze(t),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let o of this._cfg.entities){let i=t.states[o.entity],s=this._prevStates[o.entity];if(!s||s.state!==i?.state||s.last_updated!==i?.last_updated){n=!0;break}let a=o.target??this._cfg.target;if(typeof a=="string"){let r=t.states[a],l=this._prevStates[`__target__${a}`];if(!l||l.state!==r?.state||l.last_updated!==r?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,o=n>1?` columns-${n}`:"",i=t.entity_row?" entity-row":"",s=t.layout==="compact"?" compact":"",a=[];n>1&&a.push(`--pulse-columns:${n}`),t.gap!==void 0&&a.push(`--pulse-gap:${A(pt(t.gap))}`),t.font_size!==void 0&&a.push(`--pulse-font-size:${A(pt(t.font_size))}`);let r=a.length>0?` style="${a.join(";")}"`:"",l="";t.title&&(l+=`<div class="pulse-title">${h(t.title)}</div>`),l+=`<div class="pulse-card${o}${i}${s}"${r}>`;for(let u of t.entities)l+=this._renderBarRow(u);l+="</div>";let d=t.entity_row?l:`<ha-card>${l}</ha-card>`,c=this._shadow.querySelector("ha-card, .pulse-card");c&&c.remove();let f=document.createElement("template");f.innerHTML=d,this._shadow.appendChild(f.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let u of t.entities){let p=this._elements.rows?.[u.entity];p&&(p.style.display=Ut(u,this._hass)?"":"none")}}_renderBarRow(t){let n=this._cfg,o=Ot(t,n,this._hass),i=t.positions?.name??n.positions?.name??Y.positions.name,s=t.positions?.value??n.positions?.value??Y.positions.value,a=t.positions?.icon??n.positions?.icon??Y.positions.icon,r=t.positions?.indicator??n.positions?.indicator??Y.positions.indicator,d=(t.indicator??n.indicator)?.show===!0&&r==="off"?"outside":r,c=t.animation??{},f=c.speed??n.animation.speed,u=c.effect??n.animation.effect,p=c.state??n.animation.state,m=this._buildIndicatorHtml(t,n,d),g=Wt(t,this._hass),y=this._buildPositionHtml(o,i,s,a,d,m,"outside",g),v=this._buildPositionHtml(o,i,s,a,d,m,"inside",g),_=A(pt(t.height??n.height)),S=A(pt(t.border_radius??n.border_radius)),b=o.color?`background-color:${A(o.color)};`:"",w=u==="charge"&&!o.isUnavailable?" charge":"",k=p==="off"?"transition:none;":"",F=ft(t,n),M=`width:${o.fill*F}%;${k}${b}`,C=this._buildTargetHtml(t,n,o.min,o.max),$=this._buildSparklineHtml(t,n),x=`
      <div class="bar-container" style="height:${_};border-radius:${S};--pulse-animation-speed:${f}s;">
        <div class="bar-track"></div>
        ${$}
        <div class="bar-fill${w}" data-entity="${h(t.entity)}" style="${M}"></div>
        ${C}
        ${v}
      </div>`,I=!!(t.interactive??n.interactive),z=I?`<div class="bar-interactive-row"><div class="bar-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${x}<div class="bar-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:x,T=I?"slider":"progressbar",P=o.isUnavailable?`role="${T}" aria-valuenow="0" aria-valuemin="${o.min}" aria-valuemax="${o.max}" aria-label="${h(o.name)}: Unavailable"`:`role="${T}" aria-valuenow="${o.numValue}" aria-valuemin="${o.min}" aria-valuemax="${o.max}" aria-label="${h(o.name)}: ${h(o.displayValue)}"`,R=o.isUnavailable?" unavailable":"",N=I?" data-interactive":"",B=o.isUnavailable?'data-state="unavailable"':`data-state="${h(o.numValue)}"`,V=o.color?` data-severity-color="${h(o.color)}"`:"";return`<div class="bar-row${R}" data-entity="${h(t.entity)}"${N} ${B}${V} ${P}>${y}${z}</div>`}_buildIndicatorHtml(t,n,o){let i=t.indicator??n.indicator;if(!(i?.show===!0&&o!=="off"))return"";let a=this._indicators[t.entity],r=a?.direction??"neutral",l=i?.show_delta===!0&&!!a,d=this._hass?.states[t.entity],c=ut(t,d),f=kt(t,n,this._hass),{text:u}=Vt(r,a?.delta??0,l,f,c),p=i?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${r}${p}">${u}</span>`}_buildPositionHtml(t,n,o,i,s,a,r,l){if(n!==r&&o!==r&&i!==r&&s!==r)return"";let c=`<div class="${r==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return i===r&&t.resolvedIcon&&(c+=`<ha-icon class="bar-icon" icon="${h(t.resolvedIcon)}"></ha-icon>`),n===r&&(l?(c+='<div class="bar-name-group">',c+=`<span class="bar-name">${h(t.name)}</span>`,c+=`<span class="bar-secondary">${h(l)}</span>`,c+="</div>"):c+=`<span class="bar-name">${h(t.name)}</span>`),c+='</div><div class="bar-label-right">',o===r&&(c+=`<span class="bar-value">${h(t.displayValue)}</span>`),s===r&&a&&(c+=a),c+="</div></div>",c}_buildTargetHtml(t,n,o,i){let s=t.target??n.target,{value:a,showLabel:r}=Ct(s,this._hass);if(a===null)return"";let l=J((a-o)/(i-o),0,1)*100,d=ft(t,n),c=`left:${l*d}%`,f=r?`<span class="bar-target-label">${h(a)}</span>`:"";return`<div class="bar-target" style="${c}">${f}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let o=Ot(n,t,this._hass),i=ft(n,t),s=this._elements.rows?.[n.entity];if(!s||s.__pulseSliding)continue;let a=Ut(n,this._hass);if(s.style.display=a?"":"none",!a)continue;s.classList.toggle("unavailable",o.isUnavailable);let r=s.querySelector(".bar-fill");if(r){let m=`${o.fill*i}%`;r.style.width=m,r.style.backgroundColor=o.color||"";let g=s.querySelector(".bar-sparkline");g&&(g.style.width=`${i*100}%`);let y=s.querySelector(".bar-icon");y&&o.resolvedIcon&&y.setAttribute("icon",o.resolvedIcon)}let l=s.querySelectorAll(".bar-name");for(let m of l)m.textContent=o.name;let d=s.querySelectorAll(".bar-value");for(let m of d)m.textContent=o.displayValue;let c=s.querySelectorAll(".bar-secondary");if(c.length>0){let m=Wt(n,this._hass);for(let g of c)g.textContent=m}s.setAttribute("aria-valuenow",o.isUnavailable?"0":String(o.numValue)),s.setAttribute("aria-valuemin",String(o.min)),s.setAttribute("aria-valuemax",String(o.max)),s.setAttribute("aria-label",`${h(o.name)}: ${h(o.displayValue)}`),s.setAttribute("data-state",o.isUnavailable?"unavailable":String(o.numValue)),o.color?s.setAttribute("data-severity-color",o.color):s.removeAttribute("data-severity-color");let f=s.querySelector(".bar-target"),u=n.target??t.target,{value:p}=Ct(u,this._hass);if(p!==null){let m=J((p-o.min)/(o.max-o.min),0,1)*100;if(f){f.style.left=`${m*i}%`,f.style.display="";let g=f.querySelector(".bar-target-label");g&&(g.textContent=String(p))}}else f&&(f.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(o=>(o.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let i of t.entities)n.set(i.entity,i);let o=new Map;for(let i of t.entities){let s=i.indicator??t.indicator;if(!s?.show)continue;let a=s.period??60;o.has(a)||o.set(a,[]),o.get(a).push({entity:i.entity,icfg:s})}for(let[i,s]of o){let a=s.map(l=>l.entity),r=await Me(this._hass,a,i);for(let{entity:l,icfg:d}of s){let c=n.get(l),f=this._hass?.states[l],u=c?.attribute?f?.attributes?.[c.attribute]:f?.state,p=Fe(u,r[l]);this._indicators[l]=p;let m=this._elements.rows?.[l];if(!m)continue;let g=m.querySelector(".bar-indicator");if(g&&c){let y=this._hass?.states[l],v=ut(c,y),_=kt(c,t,this._hass),{text:S}=Vt(p.direction,p.delta,d.show_delta===!0,_,v),b=d.inverted===!0?" inverted":"";g.textContent=S,g.className=`bar-indicator ${p.direction}${b}`}}}}catch(n){Q("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(t,n){let o=t.sparkline??n.sparkline;if(!o)return null;let i=o===!0?{}:o.show?o:null;if(!i)return null;let s=i.hours_to_show??24,a=i.points_per_hour??1;return{hours:s,pointsPerHour:a,slots:Math.max(s*a,2),aggregateFunc:i.aggregate_func??"avg",smoothing:i.smoothing!==!1,strokeWidth:Number(i.line_width??i.stroke_width??1.5)||1.5,color:i.color??null,updateInterval:i.update_interval??300}}_buildSparklineHtml(t,n){let o=this._resolveSparklineConfig(t,n);if(!o)return"";let i=this._sparklineData[t.entity];if(!i||i.length<2)return"";let s=yt(i,200,50,o.slots,o.aggregateFunc,o.smoothing);if(!s)return"";let r=ft(t,n)*100,l=o.color?`color:${A(o.color)};`:"";return`<svg class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="${`width:${r}%;${l}`}"><path d="${s}" fill="none" stroke="currentColor" stroke-width="${o.strokeWidth}" /></svg>`}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(s=>!!this._resolveSparklineConfig(s,t)))return;let o=300;for(let s of t.entities){let a=this._resolveSparklineConfig(s,t);a&&a.updateInterval<o&&(o=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<o&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let n=new Map;for(let o of t.entities){let i=this._resolveSparklineConfig(o,t);if(!i)continue;let s=i.hours;n.has(s)||n.set(s,[]),n.get(s).push(o.entity)}for(let[o,i]of n){let s=await At(this._hass,i,o);for(let a of i)this._sparklineData[a]=s[a]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){Q("Sparkline fetch failed: %O",n)}}_updateSparklines(){let t=this._cfg;if(t)for(let n of t.entities){let o=this._resolveSparklineConfig(n,t);if(!o)continue;let i=this._elements.rows?.[n.entity];if(!i)continue;let s=this._sparklineData[n.entity];if(!s||s.length<2)continue;let a=yt(s,200,50,o.slots,o.aggregateFunc,o.smoothing);if(!a)continue;let r=i.querySelector(".bar-sparkline"),d=`${ft(n,t)*100}%`;if(r){let c=r.querySelector("path");c&&c.setAttribute("d",a),r.style.width=d}else{let c=i.querySelector(".bar-container");if(!c)continue;let f=o.color?`color:${A(o.color)};`:"",u=`<svg xmlns="http://www.w3.org/2000/svg" class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${d};${f}"><path d="${a}" fill="none" stroke="currentColor" stroke-width="${o.strokeWidth}" /></svg>`,p=new DOMParser().parseFromString(u,"image/svg+xml"),m=document.importNode(p.documentElement,!0),g=c.querySelector(".bar-track");g&&g.nextSibling?c.insertBefore(m,g.nextSibling):c.appendChild(m)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let o=this._hass?.states[n.entity];o&&(this._prevStates[n.entity]={state:o.state,last_updated:o.last_updated});let i=n.target??t.target;if(typeof i=="string"){let s=this._hass?.states[i];s&&(this._prevStates[`__target__${i}`]={state:s.state,last_updated:s.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let i of t.entities)n.set(i.entity,i);let o=this._shadow.querySelectorAll(".bar-row");for(let i of o){let s=i.dataset.entity;if(s){this._elements.rows[s]=i;let a=n.get(s);a&&(Le(i,this,this._hass,t,a),(a.interactive??t.interactive)&&Ne(i,this,t,a)),tt(i);for(let r of i.querySelectorAll(".bar-step-btn"))tt(r)}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,o=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,o),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(o=>{let i=t.states[o];return o.startsWith("sensor.")&&!isNaN(parseFloat(i.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",Bt);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${$e} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var sr=Bt;export{sr as default};

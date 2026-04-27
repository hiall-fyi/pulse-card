var Le=`
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
`;var Ne="1.3.0",He="Pulse Card:",J={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function f(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function Q(t,e,n){return Math.min(Math.max(t,e),n)}function ft(t){if(t==null||t==="")return"";let e=String(t);return/^\d+(\.\d+)?$/.test(e)?`${e}px`:e}function et(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}var Ho=new Set(["on","open","home","locked","playing","active"]),Ro=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function qe(t,e,n){if(typeof t!="string")return null;let o=t.toLowerCase();return Ho.has(o)?n:Ro.has(o)?e:null}function Do(t,e){let n=String(t),o=n.charAt(0).toUpperCase()+n.slice(1);return e?`${o}${e}`:o}function Po(t,e,n,o=!1){let i=qe(t,e,n),s=i!==null?i:parseFloat(t);if(isNaN(s))return 0;let a=n-e;if(a<=0)return 0;let r=o?n-s:s;return Q((r-e)/a,0,1)*100}function qo(t,e){if(!e||e.length===0)return null;let n=parseFloat(t);if(isNaN(n))return null;for(let o of e)if(n>=o.from&&n<=o.to)return o;return null}function Re(t){let e=t.replace("#","");return e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16)}}function Oo(t,e,n){let o=Re(t),i=Re(e),s=Math.round(o.r+(i.r-o.r)*n),a=Math.round(o.g+(i.g-o.g)*n),r=Math.round(o.b+(i.b-o.b)*n);return`rgb(${s}, ${a}, ${r})`}function Vo(t,e){if(!e||e.length<2)return null;let n=parseFloat(t);if(isNaN(n))return null;let o=e[0].from<=e[e.length-1].from?e:[...e].sort((i,s)=>i.from-s.from);for(let i=0;i<o.length-1;i++){let s=o[i],a=o[i+1];if(n>=s.from&&n<=a.to){let r=a.from-s.from,l=r>0?(n-s.from)/r:0;return Oo(s.color,a.color,Q(l,0,1))}}return n<=o[0].from?o[0].color:o[o.length-1].color}function Bo(t,e,n){let o=t.min??n?.min,i=t.max??n?.max;return o==null&&(o=e?.attributes?.min??e?.attributes?.min_temp??J.min),i==null&&(i=e?.attributes?.max??e?.attributes?.max_temp??J.max),{min:parseFloat(String(o)),max:parseFloat(String(i))}}function Ft(t,e,n){return t.decimal??e.decimal??n?.entities?.[t.entity]?.display_precision??null}function mt(t,e){return t.unit_of_measurement??e?.attributes?.unit_of_measurement??""}function Uo(t){return!isFinite(t)||t<0?"0":t>=1e9?`${(t/1e9).toFixed(1)}G`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString()}function Wo(t,e,n){let o=parseFloat(t);if(isNaN(o))return String(t);let i=e!=null?o.toFixed(e):o.toString();return n?`${i}${n}`:i}function Oe(t,e){if(e==null)return{direction:"neutral",delta:0};let n=parseFloat(t),o=parseFloat(e);if(isNaN(n)||isNaN(o))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(o))return{direction:"neutral",delta:0};let i=Math.abs(n-o),s=Math.max(Math.abs(n),1);if(i>s*1e3)return{direction:"neutral",delta:0};let a=Math.round((n-o)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function Kt(t,e,n,o,i){let s=t==="up"?"\u25B2":t==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:s,text:s};let a=o!=null?e.toFixed(o):String(Math.round(e*100)/100),r=e>0?"+":"";return{arrow:s,text:`${s} ${r}${a}${i||""}`}}function tt(t,...e){console.warn(`${He} ${t}`,...e)}async function Ve(t,e,n=60){let o={};if(!t?.callWS||e.length===0)return o;let i=new Date,s=new Date(i.getTime()-n*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let r of e){let l=a?.[r];if(!l||l.length===0){o[r]=null;continue}let c=parseFloat(l[0].s);o[r]=isNaN(c)?null:c}}catch(a){tt("Failed to fetch history for %s: %O",e.join(", "),a);for(let r of e)o[r]=null}return o}function De(t){return!Array.isArray(t)||t.length<2?t:[...t].sort((e,n)=>e.from-n.from)}function Be(t){if(!t)throw new Error("Please define an entity or entities");if(!t.entity&&!t.entities)throw new Error("Please define an entity or entities");let e={...J,...t,animation:{...J.animation,...t.animation},positions:{...J.positions,...t.positions}};e.columns!==null&&e.columns!==void 0&&(e.columns=Number(e.columns)||1),e.animation.speed!==null&&e.animation.speed!==void 0&&(e.animation.speed=Number(e.animation.speed)||J.animation.speed),e.severity&&(e.severity=De(e.severity)),e.entities=t.entities?t.entities.map(o=>{let i=typeof o=="string"?{entity:o}:{...o};return i.severity&&(i.severity=De(i.severity)),!i.secondary_info&&e.secondary_info&&(i._cardSecondaryInfo=e.secondary_info),i}):[{entity:t.entity}];let n=new Set;for(let o of e.entities)n.has(o.entity)&&tt('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',o.entity),n.add(o.entity);return e}function Et(t,e){if(t==null)return{value:null,showLabel:!1};if(typeof t=="number")return{value:isNaN(t)?null:t,showLabel:!1};if(typeof t=="string"){let n=e?.states[t];if(!n)return{value:null,showLabel:!1};let o=parseFloat(n.state);return{value:isNaN(o)?null:o,showLabel:!1}}return typeof t=="object"&&t.value!==void 0?{value:Et(t.value,e).value,showLabel:t.show_label===!0}:{value:null,showLabel:!1}}function Xt(t,e,n){let o=n?.states[t.entity],i=!o||o.state==="unavailable"||o.state==="unknown"||o.state==="error",{min:s,max:a}=Bo(t,o,e),r=t.attribute?o?.attributes?.[t.attribute]:o?.state,l=t.attribute?null:qe(r,s,a),c=l!==null,d=c?l:parseFloat(r),u=t.complementary??e.complementary,h=i?0:Po(r,s,a,u),p=mt(t,o),m=Ft(t,e,n),b=(t.limit_value??e.limit_value)&&!isNaN(d)?Q(d,s,a):r,v=i?"Unavailable":t.state_map?.[r]?t.state_map[r]:c?Do(r,p):Wo(b,m,p),_=t.name??o?.attributes?.friendly_name??t.entity,y="",w="";if(!i){let I=t.state_color,M=o?.state;if(I&&M&&I[M])y=I[M];else{let T=t.attribute_color??e.attribute_color;if(T?.attribute&&T?.map){let S=o.attributes?.[T.attribute];if(S!=null){let x=T.map[String(S)];x&&(y=x)}}if(!y){let S=t.severity??e.severity;if(S&&S.length>0)if(S.some(z=>z.mode==="gradient")){let z=Vo(d,S);z&&(y=z)}else{let z=qo(d,S);z&&(y=z.color,z.icon&&(w=z.icon))}}}}let $=y||t.color||e.color||"",C=t.icon||o?.attributes?.icon||"";return{isUnavailable:i,min:s,max:a,numValue:d,fill:h,displayValue:v,name:_,color:$,resolvedIcon:w||C}}function gt(t,e){let n=t.bar_width??e.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}async function It(t,e,n=24){let o={};if(!t?.callWS||e.length===0)return o;let i=new Date,s=new Date(i.getTime()-n*60*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:i.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let r of e)try{let l=a?.[r];if(!l||l.length<2){o[r]=[];continue}let c=[];for(let d of l){let u=parseFloat(d.s);if(!isNaN(u)){let h=d.lu??d.last_updated,p=typeof h=="number"?h*1e3:new Date(h).getTime();isFinite(p)&&c.push({t:p,v:u})}}o[r]=c}catch{o[r]=[]}}catch(a){tt("Sparkline fetch failed: %O",a);for(let r of e)o[r]=[]}return o}var Pe={avg:t=>t.reduce((e,n)=>e+n,0)/t.length,min:t=>Math.min(...t),max:t=>Math.max(...t),median:t=>{let e=[...t].sort((o,i)=>o-i),n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2},first:t=>t[0],last:t=>t[t.length-1],sum:t=>t.reduce((e,n)=>e+n,0),delta:t=>Math.max(...t)-Math.min(...t),diff:t=>t[t.length-1]-t[0]};function jo(t,e,n="avg"){if(t.length===0||e<1)return[];if(t.length<=e){let u=t[0].t,h=t[t.length-1].t-u||1;return t.map(p=>({x:(p.t-u)/h,v:p.v}))}let o=Pe[n]||Pe.avg,i=t[0].t,r=(t[t.length-1].t-i||1)/e,l=[],c=0,d=t[0].v;for(let u=0;u<e;u++){let h=i+(u+1)*r,p=[];for(;c<t.length&&t[c].t<h;)p.push(t[c].v),c++;p.length>0&&(d=o(p)),l.push({x:u/(e-1||1),v:d})}return l}function wt(t,e,n,o=24,i="avg",s=!0){if(t.length<2)return"";let a=jo(t,o,i);if(a.length<2)return"";let r=a[0].v,l=a[0].v;for(let g=1;g<a.length;g++)a[g].v<r&&(r=a[g].v),a[g].v>l&&(l=a[g].v);let c=l-r||1,d=2,u=n-d*2,h=a.map(g=>({x:g.x*e,y:d+u-(g.v-r)/c*u}));if(h.length===2||!s){let g=`M${h[0].x.toFixed(1)},${h[0].y.toFixed(1)}`;for(let b=1;b<h.length;b++)g+=`L${h[b].x.toFixed(1)},${h[b].y.toFixed(1)}`;return g}let p=h[0],m=`M${p.x.toFixed(1)},${p.y.toFixed(1)}`;for(let g=1;g<h.length;g++){let b=h[g],v=(p.x+b.x)/2,_=(p.y+b.y)/2;m+=` ${v.toFixed(1)},${_.toFixed(1)}`,m+=` Q${b.x.toFixed(1)},${b.y.toFixed(1)}`,p=b}return m+=` ${p.x.toFixed(1)},${p.y.toFixed(1)}`,m}function Yt(t,e){if(!t.visibility)return!0;let n=e?.states[t.entity];if(!n)return!1;let o=t.visibility,i=t.attribute?n.attributes?.[t.attribute]:n.state;if(!t.attribute&&(n.state==="unavailable"||n.state==="unknown"||n.state==="error"))return o.state_equal!==void 0&&String(o.state_equal)===n.state;let s=parseFloat(i);return!(o.state_above!==void 0&&(isNaN(s)||s<=o.state_above)||o.state_below!==void 0&&(isNaN(s)||s>=o.state_below)||o.state_equal!==void 0&&String(i)!==String(o.state_equal)||o.state_not_equal!==void 0&&String(i)===String(o.state_not_equal))}var Ue={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:t=>t/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function Mt(t,e,n,o){if(o<=0)return Q(t,e,n);let i=Math.round((t-e)/o)*o+e,s=(String(o).split(".")[1]||"").length,a=Number(i.toFixed(s));return Q(a,e,n)}function We(t,e,n){if(n?.service){let a=n.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let r={entity_id:t};if(n.data)for(let[l,c]of Object.entries(n.data))r[l]=c==="$value"?e:c;return{domain:a[0],service:a[1],data:r}}let o=t.split(".")[0],i=Ue[o];if(!i)return null;let s=i.transform?i.transform(e):e;return{domain:o,service:i.service,data:{entity_id:t,[i.dataKey]:s}}}function $t(t,e,n,o){let i=t.split(".")[0],a=Ue[i]?.fixedRange,r=e?.attributes,l=o?.min??r?.min??r?.min_temp??a?.min??0,c=o?.max??r?.max??r?.max_temp??a?.max??100,d=n?.step??r?.step??r?.target_temp_step??r?.percentage_step??a?.step??1;return{min:Number(l),max:Number(c),step:Number(d)||1}}function Zo(t){if(!t)return"";let e=new Date(t).getTime();if(isNaN(e))return"";let n=Date.now()-e;if(n<0)return"just now";let o=Math.floor(n/1e3);if(o<60)return"just now";let i=Math.floor(o/60);if(i<60)return`${i} min ago`;let s=Math.floor(i/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function Jt(t,e){let n=t.secondary_info??t._cardSecondaryInfo;if(!n)return"";if(n.text!==void 0&&n.text!==null&&n.text!=="")return String(n.text);let o=e?.states[t.entity];if(!o)return"";if(n.template)return n.template.replace(/\{(\w+)\}/g,(i,s)=>{let a=o.attributes?.[s];return a==null?"":(s==="bytes"||s==="packets")&&typeof a=="number"?Uo(a):String(a)});if(n.attribute){let i=o.attributes?.[n.attribute];return i!=null?String(i):""}return n.type==="last_changed"?Zo(o.last_changed):""}function zt(t,e,n){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:n}))}function vt(t,e,n,o,i){if(!(!n||n.action==="none"))switch(n.action){case"more-info":zt(t,"hass-more-info",{entityId:n.entity||o});break;case"navigate":n.navigation_path&&(history.pushState(null,"",n.navigation_path),zt(t,"location-changed",{replace:!1}));break;case"call-service":case"perform-action":{let s=n.service||n.perform_action;if(!s)break;let[a,r]=s.split(".");e.callService(a,r,n.service_data||n.data).catch(l=>i("Service call %s failed: %O",s,l));break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break;case"toggle":e.callService("homeassistant","toggle",{entity_id:n.entity||o}).catch(s=>i("Toggle %s failed: %O",n.entity||o,s));break}}function Go(t,e,n){let o=e?.[t],i=n?.[t];return o||i||{action:t==="tap_action"?"more-info":"none"}}function Lt(t,e,n,o,i){let s=Go(i,o,n);vt(t,e,s,o.entity,tt)}function te(t){let e=t.__pulseCleanup;typeof e=="function"&&e()}function je(t,e,n,o,i){te(t);let s=new AbortController,{signal:a}=s,r=0,l=null,c=null,d=!1;t.__pulseCleanup=()=>{s.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete t.__pulseCleanup},t.setAttribute("tabindex","0"),t.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),e._hass&&Lt(e,e._hass,o,i,"tap_action"))},{signal:a}),t.addEventListener("click",h=>{if(h.preventDefault(),d){d=!1;return}t.__pulseSliding||(r++,r===1?l=setTimeout(()=>{r=0,e._hass&&Lt(e,e._hass,o,i,"tap_action")},250):r===2&&(l&&clearTimeout(l),r=0,e._hass&&Lt(e,e._hass,o,i,"double_tap_action")))},{signal:a}),t.addEventListener("pointerdown",()=>{d=!1,c=setTimeout(()=>{d=!0,e._hass&&Lt(e,e._hass,o,i,"hold_action")},500)},{signal:a});let u=()=>{c&&clearTimeout(c)};t.addEventListener("pointerup",u,{signal:a}),t.addEventListener("pointercancel",u,{signal:a}),t.addEventListener("contextmenu",h=>h.preventDefault(),{signal:a})}var Ko=50;function ee(t){let e=t.__pulseSliderCleanup;typeof e=="function"&&e()}function Ze(t,e,n,o){ee(t);let i=t.querySelector(".bar-container");if(!i)return;let s=i,a=new AbortController,{signal:r}=a,l=null;t.__pulseSliderCleanup=()=>{a.abort(),l&&clearTimeout(l),g&&clearInterval(g),delete t.__pulseSliderCleanup};let c=typeof o.interactive=="object"?o.interactive:typeof n.interactive=="object"?n.interactive:void 0,d=null;function u(_){let y=s.getBoundingClientRect(),w=Math.max(0,Math.min(_-y.left,y.width)),$=y.width>0?w/y.width:0,A=e._hass?.states[o.entity],{min:I,max:M,step:T}=$t(o.entity,A,c,o),S=I+$*(M-I);return Mt(S,I,M,T)}function h(_){let w=e._hass?.states[o.entity],{min:$,max:C,step:A}=$t(o.entity,w,c,o),I=C-$,M=I>0?(_-$)/I*100:0,T=s.querySelector(".bar-fill");T&&(T.style.width=`${M}%`);let S=mt(o,w),x=(String(A).split(".")[1]||"").length,z=x>0?_.toFixed(x):String(Math.round(_)),E=S?`${z}${S}`:z,F=t.querySelectorAll(".bar-value");for(let P of F)P.textContent=E}function p(){if(!d)return;let _=s.querySelector(".bar-fill");_&&(_.style.transition="",_.style.width=d.fillWidth);let y=t.querySelectorAll(".bar-value");for(let w of y)w.textContent=d.displayValue}function m(_){let y=We(o.entity,_,c);if(!y){tt("No slider service mapping for %s",o.entity),p();return}let w=e._hass;if(!w){p();return}w.callService(y.domain,y.service,y.data).catch($=>{tt("Slider service call failed for %s: %O",o.entity,$),p()})}s.addEventListener("pointerdown",_=>{if(!e._hass)return;_.preventDefault();let y=s.querySelector(".bar-fill"),w=t.querySelector(".bar-value");d={fillWidth:y?.style.width||"0%",displayValue:w?.textContent||"",pointerId:_.pointerId,startX:_.clientX},t.__pulseSliding=!0,s.setPointerCapture(_.pointerId),t.classList.add("sliding"),y&&(y.style.transition="none");let $=u(_.clientX);h($)},{signal:r}),s.addEventListener("pointermove",_=>{if(!d||_.pointerId!==d.pointerId)return;_.preventDefault();let y=u(_.clientX);h(y)},{signal:r}),s.addEventListener("pointerup",_=>{if(!d||_.pointerId!==d.pointerId)return;_.preventDefault();let y=s.querySelector(".bar-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),s.releasePointerCapture(_.pointerId);let w=u(_.clientX);h(w),m(w),d=null,l=setTimeout(()=>{t.__pulseSliding=!1},Ko)},{signal:r}),s.addEventListener("pointercancel",_=>{if(!d||_.pointerId!==d.pointerId)return;let y=s.querySelector(".bar-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),s.releasePointerCapture(_.pointerId),p(),d=null,t.__pulseSliding=!1},{signal:r});let g=null;function b(_){let y=e._hass;if(!y)return;let w=y.states[o.entity],{min:$,max:C,step:A}=$t(o.entity,w,c,o),I=o.attribute?parseFloat(w?.attributes?.[o.attribute]):parseFloat(w?.state);if(isNaN(I))return;let M=Mt(I+_*A,$,C,A);M!==I&&(h(M),m(M))}let v=t.querySelectorAll(".bar-step-btn");for(let _ of v){let y=Number(_.dataset.step);_.addEventListener("click",$=>{$.stopPropagation(),b(y)},{signal:r}),_.addEventListener("pointerdown",$=>{$.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>b(y),200)},{signal:r});let w=()=>{g&&(clearInterval(g),g=null)};_.addEventListener("pointerup",w,{signal:r}),_.addEventListener("pointercancel",w,{signal:r}),_.addEventListener("pointerleave",w,{signal:r})}t.addEventListener("keydown",_=>{let y=e._hass;if(!y||_.key!=="ArrowRight"&&_.key!=="ArrowUp"&&_.key!=="ArrowLeft"&&_.key!=="ArrowDown")return;_.preventDefault();let w=y.states[o.entity],{min:$,max:C,step:A}=$t(o.entity,w,c,o),I=o.attribute?parseFloat(w?.attributes?.[o.attribute]):parseFloat(w?.state);if(isNaN(I))return;let M=_.key==="ArrowRight"||_.key==="ArrowUp"?1:-1,T=Mt(I+M*A,$,C,A);T!==I&&(h(T),m(T))},{signal:r})}function ot(t){if(!customElements.get("ha-ripple")||t.querySelector("ha-ripple"))return;let e=document.createElement("ha-ripple");t.appendChild(e),t.classList.add("has-ripple")}var Ge="1.3.0",Ht="pulse-climate-card",Ke="pulse-climate-card-editor",Xe="Pulse Climate Card:",pt={heating:{icon:"mdi:fire",cssVar:"--label-badge-yellow",fallback:"#FF9800",label:"Heating"},cooling:{icon:"mdi:snowflake",cssVar:"--label-badge-blue",fallback:"#2196F3",label:"Cooling"},drying:{icon:"mdi:water-off",cssVar:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",cssVar:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",cssVar:"--secondary-text-color",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",cssVar:"--disabled-color",fallback:"#616161",label:"Off"}},oe={None:{cssVar:"--label-badge-green",fallback:"#4CAF50"},Low:{cssVar:"--label-badge-green",fallback:"#8BC34A"},Medium:{cssVar:"--label-badge-yellow",fallback:"#FF9800"},High:{cssVar:"--label-badge-red",fallback:"#F44336"},Critical:{cssVar:"--label-badge-red",fallback:"#B71C1C"}},Ye=["zones"];var nt=["var(--label-badge-blue, #2196F3)","var(--label-badge-red, #F44336)","var(--label-badge-green, #4CAF50)","var(--label-badge-yellow, #FF9800)","var(--accent-color, #9C27B0)","var(--info-color, #00BCD4)","var(--warning-color, #FF5722)","var(--success-color, #8BC34A)"],st={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},Je={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var ne=`
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
  background: repeating-linear-gradient(
    45deg,
    var(--divider-color, rgba(255,255,255,0.06)) 0px,
    var(--divider-color, rgba(255,255,255,0.06)) 2px,
    transparent 2px,
    transparent 4px
  );
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
  overflow: hidden;
}
.center-sheen {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle farthest-side at 0 0, rgba(255,255,255,0) 88%, rgba(255,255,255,0.5) 96%, rgba(255,255,255,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.center-sheen.light-theme {
  background: radial-gradient(circle farthest-side at 0 0, rgba(0,0,0,0) 88%, rgba(0,0,0,0.12) 96%, rgba(0,0,0,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
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

/* Home Status section */
.section-home-status { }
.home-status-hero {
  text-align: center;
  padding: 16px 0 20px;
}
.home-status-icon {
  --mdc-icon-size: 36px;
  display: block;
  margin: 0 auto 6px;
}
.home-status-label {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
}
.home-status-detail {
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-zones {
  display: flex;
  flex-direction: column;
}
.home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.home-status-row:last-child { border-bottom: none; }
.home-status-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.home-status-row:focus-visible {
  outline: 2px solid var(--primary-color, #03A9F4);
  outline-offset: 2px;
  border-radius: 4px;
}
.home-status-zone-name {
  width: 70px;
  flex-shrink: 0;
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
}
.home-status-actual {
  font-size: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  min-width: 52px;
}
.home-status-actual.off {
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-arrow {
  font-size: 11px;
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-target {
  font-size: 13px;
  color: var(--secondary-text-color, #9E9E9E);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.home-status-delta {
  display: flex;
  align-items: center;
  gap: 4px;
}
.home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  overflow: hidden;
}
.home-status-bar-center {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: color-mix(in srgb, white 15%, transparent);
}
.home-status-bar-fill {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 3px;
}
.home-status-delta-text {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
}
.home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  padding-top: 14px;
  margin-top: 16px;
}
.home-status-summary .stat { text-align: center; }
.home-status-summary .stat-value {
  font-size: 18px;
  font-weight: 300;
}
.home-status-summary .stat-label {
  font-size: 9px;
}

/* Zone Ranking section */
.section-zone-ranking { }
.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.ranking-tabs {
  display: flex;
  gap: 4px;
}
.ranking-tab {
  font-size: 10px;
  color: var(--secondary-text-color, #9E9E9E);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.ranking-tab:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.ranking-tab.active {
  background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  color: var(--primary-text-color);
  border-color: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.ranking-list { }
.rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.rank-row:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.rank-row:focus-visible {
  outline: 2px solid var(--primary-color, #03A9F4);
  outline-offset: 2px;
}
.rank-num {
  width: 24px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--secondary-text-color, #9E9E9E);
  flex-shrink: 0;
}
.rank-num.top { color: #FFD60A; }
.rank-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rank-bar-track {
  flex: 2;
  height: 8px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  border-radius: 4px;
  margin: 0 12px;
  overflow: hidden;
}
.rank-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease, background 0.4s ease;
}
.rank-value {
  font-size: 13px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  width: 50px;
  text-align: right;
  flex-shrink: 0;
}
.ranking-summary {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.ranking-summary .stat { text-align: center; }
.ranking-summary .stat-value {
  font-size: 18px;
  font-weight: 300;
}
.ranking-summary .stat-label {
  font-size: 9px;
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
`;function ut(t,...e){console.warn(`${Xe} ${t}`,...e)}function _t(t){return pt[t]||pt.idle}function St(t,e,n){let o=Y(t,{},e,n||{entity:t},{});return{name:o.name,temp:o.currentTemp??void 0,target:o.targetTemp??void 0,humidity:o.humidity??void 0,hvacAction:o.hvacAction,unit:o.unit}}function Rt(t){let e=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();return oe[e]||oe.Low}function kt(t,e,n){return n<=e?50:Q((t-e)/(n-e),0,1)*100}function Xo(t,e,n,o){let i=[],s=!o,a=l=>s||o.includes(l);if(o&&a("humidity")&&t.humidity!==null&&i.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(t.humidity)}%`}),a("hvac_action")){let l=_t(t.hvacAction);i.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(a("overlay")&&t.overlayType){let l=t.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";i.push({type:"overlay",icon:l,label:t.overlayType,entityId:e.overlay})}if(a("preset")&&t.presetMode){let l=t.presetMode==="away"?"mdi:home-export-outline":"mdi:home";i.push({type:"preset",icon:l,label:t.presetMode==="away"?"Away":"Home"})}let r=(l,c,d)=>{if(!a(l)||!e[d])return;let u=n[e[d]];if(u&&!["unavailable","unknown","none"].includes(u.state.toLowerCase())){let h=Rt(u.state);i.push({type:l,icon:c,label:u.state,color:h.fallback,severity:u.state,entityId:e[d]})}};if(a("open_window")&&e.open_window){let l=n[e.open_window];if(l){let c=l.state==="on";i.push({type:"open_window",icon:c?"mdi:window-open":"mdi:window-closed",label:c?"Open":"Closed",color:c?"#F44336":void 0,entityId:e.open_window})}}if(a("window_predicted")&&e.window_predicted){let l=n[e.window_predicted];l&&l.state==="on"&&i.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"#FF9800",entityId:e.window_predicted})}if(r("mold_risk","mdi:mushroom","mold_risk"),r("condensation","mdi:water-alert","condensation"),a("comfort_level")&&e.comfort_level){let l=n[e.comfort_level];l&&l.state!=="unavailable"&&i.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:e.comfort_level})}if(a("preheat_now")&&e.preheat_now){let l=n[e.preheat_now];l&&l.state==="on"&&i.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"#FF9800",entityId:e.preheat_now})}if(a("battery")||a("battery_all")){let l=o&&o.includes("battery_all"),c=[],d=["battery"],u=2;for(;e[`battery_${u}`];)d.push(`battery_${u}`),u++;for(let h of d){let p=e[h];if(!p)continue;let m=n[p];!m||m.state==="unavailable"||c.push({eid:p,state:m.state,lower:m.state.toLowerCase()})}if(c.length>0)if(l)for(let h=0;h<c.length;h++){let p=c[h],m=p.lower==="low"||p.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=p.lower==="critical"?"#F44336":p.lower==="low"?"#FF9800":void 0;i.push({type:`battery${h>0?`_${h+1}`:""}`,icon:m,label:p.state,color:g,entityId:p.eid})}else{let h={critical:3,low:2,normal:1},p=c[0];for(let b of c)(h[b.lower]||0)>(h[p.lower]||0)&&(p=b);let m=p.lower==="low"||p.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=p.lower==="critical"?"#F44336":p.lower==="low"?"#FF9800":void 0;i.push({type:"battery",icon:m,label:p.state,color:g,entityId:p.eid})}}if(a("valve_control")){let c=n[t.entityId]?.attributes||{},d=c.valve_control_active,u=c.valve_target;c.valve_control_backed_off===!0?i.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"#9E9E9E"}):d===!0&&u!==void 0&&i.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${u}${t.unit}`,color:"#FF9800"})}if(o&&a("temp_source")){let c=n[t.entityId]?.attributes?.temperature_source;if(c&&c!=="cloud"){let d=c==="external"?"mdi:thermometer-probe":c==="homekit"?"mdi:apple":"mdi:cloud-outline";i.push({type:"temp_source",icon:d,label:c.charAt(0).toUpperCase()+c.slice(1)})}}return i}function Y(t,e,n,o,i){let s=n[t],a=!s||s.state==="unavailable"||s.state==="unknown",r=s?.attributes||{},l=t.startsWith("sensor."),c=l?a?null:parseFloat(s?.state)||null:r.current_temperature??null,d=a||s?.state==="off"?null:r.temperature??null,u=l?null:r.current_humidity??null,h=l?"idle":r.hvac_action||(s?.state==="off"?"off":"idle"),p=l?"sensor":s?.state||"off",m=r.preset_mode||"",g=Number(r.min_temp??5),b=Number(r.max_temp??35),v=Number(r.target_temp_step??.5),_=r.unit_of_measurement||"\xB0C",y=0;if(e.heating_power){let T=n[e.heating_power];T&&T.state!=="unavailable"&&(y=parseFloat(T.state)||0)}else r.heating_power!==void 0&&(y=parseFloat(r.heating_power)||0);let w=0;if(e.ac_power){let T=n[e.ac_power];T&&T.state!=="unavailable"&&(w=parseFloat(T.state)||0)}let $="";if(e.overlay){let T=n[e.overlay];T&&T.state!=="unavailable"&&($=T.state)}else r.overlay_type&&($=r.overlay_type);let C=o.name||r.friendly_name||t.replace(/^(climate|sensor)\./,""),A=o.icon||r.icon||"mdi:thermometer",I=o.chips||i.chips||null,M={entityId:t,name:C,icon:A,isUnavailable:a,currentTemp:c,targetTemp:d,humidity:u,heatingPower:y,coolingPower:w,hvacAction:h,hvacMode:p,presetMode:m,overlayType:$,minTemp:g,maxTemp:b,tempStep:v,unit:_,chips:[]};return M.chips=Xo(M,e,n,I),M}var Qe=280;function ie(t,e=Qe){return t<=50?0:(2+(t-50)/50*3)*(e/Qe)}function to(t,e=20,n=1){if(n<=0)return 0;let o=Math.min(4,Math.max(2,Math.round(t/30))),i=Math.floor(e/n);return Math.min(o,i)}function eo(t){return 4-t/100*2.5}function oo(t,e){return 1.5+t/e*1.5}function bt(t,e){return 3*(t/e)}function no(t){if(!t)throw new Error("Please define an entity or zones");if(!t.entity&&!t.zones)throw new Error("Please define an entity or zones");if(t.entity&&typeof t.entity=="string"&&!t.entity.startsWith("climate.")&&!t.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let e;t.zones?e=t.zones.map(o=>typeof o=="string"?{entity:o}:{...o}):e=[{entity:t.entity}];for(let o of e)if(!o.entity||typeof o.entity!="string")throw new Error("Each zone must have an entity ID");let n={...t,columns:Number(t.columns)||st.columns,layout:t.layout||st.layout,show_temp_bar:t.show_temp_bar??st.show_temp_bar,show_power_bar:t.show_power_bar??st.show_power_bar,tap_action:t.tap_action||{...st.tap_action},hold_action:t.hold_action||{...st.hold_action},double_tap_action:t.double_tap_action||{...st.double_tap_action},sections:t.sections||[...Ye],_zones:e};return Array.isArray(n.sections)&&(n.sections=n.sections.map(o=>{let i=typeof o=="string"?{type:o}:{...o},s=Je[i.type];if(s)for(let[a,r]of Object.entries(s))i[a]===void 0||i[a]===null?i[a]=r:typeof r=="number"&&(i[a]=Number(i[a])||r);return i})),n}var so={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},Yo={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},Jo={battery:"battery",connection:"connection"},Qo={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},tn={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function en(t){let e=new Map;for(let[n,o]of Object.entries(t))o.platform==="tado_ce"&&o.translation_key&&(e.has(o.translation_key)||e.set(o.translation_key,n));return{byTranslationKey:e}}function on(t,e){let n={};for(let[o,i]of Object.entries(so)){let s=e.byTranslationKey.get(i);s&&(n[o]=s)}return n}function nn(t,e,n){let o={},i={...Yo,...Jo};for(let s of e){o[s]={};let a=`climate.${s}`,r=t[a];if(!r?.device_id||r.platform!=="tado_ce")continue;let l=r.device_id;for(let[c,d]of Object.entries(t)){if(d.platform!=="tado_ce"||d.device_id!==l||!d.translation_key||!n[c])continue;let u=d.translation_key;if(u.endsWith("_suffixed")){let h=u.replace("_suffixed",""),p=Object.keys(i).find(m=>i[m]===h);if(!p)continue;if(!o[s][p])o[s][p]=c;else{let m=2;for(;o[s][`${p}_${m}`];)m++;o[s][`${p}_${m}`]=c}}else{let h=Object.keys(i).find(p=>i[p]===u);if(!h)continue;o[s][h]||(o[s][h]=c)}}}return o}function io(t){let e={},n=Object.keys(t);for(let[o,{platform:i,suffixes:s}]of Object.entries(tn))for(let a of s){let r=n.find(l=>l.startsWith(`${i}.tado_ce`)&&l.endsWith(a));if(r){e[o]=r;break}}return e}function ro(t,e){let n={};for(let o of e){n[o]={};for(let[i,{platform:s,suffixes:a}]of Object.entries(Qo))for(let r of a){let l=`${s}.${o}${r}`;if(t[l]){n[o][i]=l;break}}}return n}var ht={states:null,zoneNames:null,result:null};function ao(t,e,n){if(ht.result&&ht.states===t&&ht.zoneNames!==null&&ht.zoneNames.length===e.length&&ht.zoneNames.every((c,d)=>c===e[d]))return ht.result;let o=!1,i=!1;n&&(o=Object.values(n).some(c=>c.platform==="tado_ce"),i=o),o||(o=Object.keys(t).some(c=>c.startsWith("sensor.tado_ce_")));let s={};if(o)if(i){let c=en(n);s=on(n,c);let d=io(t);for(let[u,h]of Object.entries(d))s[u]||(s[u]=h)}else s=io(t);let a;if(i){a=nn(n,e,t);let c=ro(t,e);for(let d of e){a[d]||(a[d]={});let u=c[d]||{};for(let[h,p]of Object.entries(u))a[d][h]||(a[d][h]=p)}}else a=ro(t,e);let r=Object.keys(so).filter(c=>!s[c]),l={isTadoCE:o,hubEntities:s,zoneEntities:a,missingHubKeys:r};if(o)for(let[c,d]of Object.entries(a))Object.keys(d).length===0&&console.debug('Pulse Climate: zone "%s" \u2014 no Tado CE entities discovered',c);return ht={states:t,zoneNames:[...e],result:l},l}function H(t){return t.replace(/^(climate|sensor|binary_sensor)\./,"")}function yt(t){return typeof t=="string"&&t.length>0}function it(t,e,n,o){if(yt(o?.temperature_entity))return{entityId:o.temperature_entity,source:"yaml_override"};let s=e[t]?.attributes?.external_temp_sensor;return yt(s)&&e[s]?{entityId:s,source:"external"}:yt(n?.temperature)?{entityId:n.temperature,source:"discovery"}:{entityId:t,source:"climate_fallback"}}function at(t,e,n,o){if(yt(o?.humidity_entity))return{entityId:o.humidity_entity,source:"yaml_override"};let s=e[t]?.attributes?.external_humidity_sensor;return yt(s)&&e[s]?{entityId:s,source:"external"}:yt(n?.humidity)?{entityId:n.humidity,source:"discovery"}:null}var Dt={timestamp:0,data:{}};function lo(){return Dt}function co(t){let e={...Dt.data};for(let[n,o]of Object.entries(t))o.length>0&&(e[n]=o);return Dt={timestamp:Date.now(),data:e},Dt}function po(){return{timestamp:0,data:{}}}function re(t){return t.timestamp>0&&Date.now()-t.timestamp<3e5}function uo(t,e){let n={...t.data};for(let[o,i]of Object.entries(e))i.length>0&&(n[o]=i);return{timestamp:Date.now(),data:n}}function se(t,e){if(t.length===0||e<1)return[];let n=t[0].t,s=(t[t.length-1].t-n||1)/e,a=[],r=0,l=t[0].v;for(let c=0;c<e;c++){let d=n+(c+1)*s,u=0,h=0;for(;r<t.length&&t[r].t<d;)u+=t[r].v,h++,r++;h>0&&(l=u/h),a.push({x:c/(e-1||1),v:l})}return a}function ho(t,e,n,o,i){let a=n-4,r=i-o||1,l=t.map(u=>({x:u.x*e,y:2+a-(u.v-o)/r*a}));if(l.length<2)return"";if(l.length===2)return`M${l[0].x.toFixed(1)},${l[0].y.toFixed(1)}L${l[1].x.toFixed(1)},${l[1].y.toFixed(1)}`;let c=l[0],d=`M${c.x.toFixed(1)},${c.y.toFixed(1)}`;for(let u=1;u<l.length;u++){let h=l[u],p=(c.x+h.x)/2,m=(c.y+h.y)/2;d+=` ${p.toFixed(1)},${m.toFixed(1)}`,d+=` Q${h.x.toFixed(1)},${h.y.toFixed(1)}`,c=h}return d+=` ${c.x.toFixed(1)},${c.y.toFixed(1)}`,d}function fo(t,e,n,o=48){if(!t||t.length===0)return[];let i=1/0,s=-1/0;for(let a of t)for(let r of a.data)isFinite(r.v)&&(r.v<i&&(i=r.v),r.v>s&&(s=r.v));return isFinite(i)||(i=0),isFinite(s)||(s=100),t.map(a=>{let r=a.data.filter(d=>isFinite(d.v));if(r.length<2)return{entityId:a.entityId,color:a.color,d:""};let l=se(r,o),c=ho(l,e,n,i,s);return{entityId:a.entityId,color:a.color,d:c}})}function Pt(t,e,n,o){if(!t||t.length===0)return[];let i=n??e/2-2,s=o??i*.6,a=e/2,r=e/2,l=t.map(h=>Math.max(0,h.value)),c=l.reduce((h,p)=>h+p,0);if(c===0)return[];let d=[],u=-90;for(let h=0;h<t.length;h++){if(l[h]===0)continue;let p=l[h]/c*360;p>=360&&(p=359.9);let m=u+p,g=qt(a,r,s,i,u,m);d.push({label:t[h].label,color:t[h].color,d:g,angle:p}),u=m}return d}function xt(t){if(!t||t.length===0)return"";let e='<div class="chart-legend">';for(let n of t){let o=k(n.color),i=f(n.label),s=n.value!==void 0&&n.value!==null?` ${f(n.value)}`:"";e+=`<span class="legend-chip"><span class="legend-dot" style="background:${o}"></span>${i}${s}</span>`}return e+="</div>",e}function j(t){return t<=14?"#1565C0":t<=16?"#4FC3F7":t<=17?"#4DB6AC":t<=18?"#81C784":t<=19?"#AED581":t<=20?"#C5E1A5":t<=21?"#FFF176":t<=22?"#FFB74D":t<=23?"#FF8A65":t<=24?"#EF5350":"#C62828"}function Ct(t){return t<=20?"#C62828":t<=30?"#EF5350":t<=35?"#FF8A65":t<=40?"#FFB74D":t<=45?"#AED581":t<=55?"#4CAF50":t<=60?"#AED581":t<=65?"#4DB6AC":t<=70?"#4FC3F7":t<=80?"#1E88E5":"#1565C0"}function qt(t,e,n,o,i,s){let a=i*Math.PI/180,r=s*Math.PI/180,l=s-i,c=Math.abs(l)>180?1:0,d=t+o*Math.cos(a),u=e+o*Math.sin(a),h=t+o*Math.cos(r),p=e+o*Math.sin(r),m=t+n*Math.cos(r),g=e+n*Math.sin(r),b=t+n*Math.cos(a),v=e+n*Math.sin(a);return[`M${d.toFixed(2)},${u.toFixed(2)}`,`A${o.toFixed(2)},${o.toFixed(2)} 0 ${c} 1 ${h.toFixed(2)},${p.toFixed(2)}`,`L${m.toFixed(2)},${g.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${c} 0 ${b.toFixed(2)},${v.toFixed(2)}`,"Z"].join(" ")}function rt(t,e,n,o=48){if(!t||t.length<2)return null;let i=t.filter(h=>isFinite(h.v));if(i.length<2)return null;let s=Date.now(),a=i[i.length-1];s-a.t>6e5&&i.push({t:s,v:a.v});let r=se(i,o);if(r.length<2)return null;let l=1/0,c=-1/0;for(let h of r)h.v<l&&(l=h.v),h.v>c&&(c=h.v);isFinite(l)||(l=0),isFinite(c)||(c=100);let d=ho(r,e,n,l,c);if(!d)return null;let u=`${d} L${e.toFixed(1)},${n.toFixed(1)} L0,${n.toFixed(1)} Z`;return{linePath:d,areaPath:u}}function ae(t,e=24,n=""){if(!t||t.length<2)return"";let o=t.filter(c=>isFinite(c.v));if(o.length<2)return"";let i=se(o,e),s=o[0].t,a=o[o.length-1].t,r=o.every(c=>Number.isInteger(c.v)),l={u:n,d:[]};return l.d=i.map(c=>{let d=s+c.x*(a-s),u=new Date(d),h=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`,p=r?Math.round(c.v):Math.round(c.v*10)/10;return{l:h,v:p}}),JSON.stringify(l)}function lt(t,e,n,o,i,s=""){if(!t||t.length<2)return"";let a=rt(t,e,n,24);if(!a)return"";let r=k(o),l=`<div class="sparkline-filled" style="height:${n}px">`;return l+=`<svg viewBox="0 0 ${e} ${n}" role="img" aria-label="${f(s)}" preserveAspectRatio="none" style="width:100%;height:${n}px;display:block">`,l+=`<defs><linearGradient id="${f(i)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${a.areaPath}" fill="url(#${f(i)})" />`,l+=`<path d="${a.linePath}" fill="none" stroke="${r}" stroke-width="1.5" />`,l+="</svg></div>",l}var rn=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function Ot(t,e){let n=[],o=0;if(Array.isArray(t.chart_data)&&t.chart_data.length>0){for(let i of t.chart_data)i.type&&typeof i.count=="number"&&(n.push({label:i.type,value:Math.max(0,i.count),color:e[o%e.length]}),o++);return n}if(t.breakdown_24h&&typeof t.breakdown_24h=="object"){for(let[i,s]of Object.entries(t.breakdown_24h)){let a=Number(s);!isNaN(a)&&a>0&&(n.push({label:i,value:a,color:e[o%e.length]}),o++)}return n}for(let[i,s]of Object.entries(t)){if(rn.has(i))continue;let a=Number(s);isNaN(a)||(n.push({label:i,value:Math.max(0,a),color:e[o%e.length]}),o++)}return n}function sn(t,e,n,o){let i=e.show_temp_bar??n.show_temp_bar??!0,s=e.show_power_bar??n.show_power_bar??!0,a=t.isUnavailable?" unavailable":"",r=t.isUnavailable?"Unavailable":t.currentTemp!==null?`${t.currentTemp}${f(t.unit)}`:"--",l=!t.isUnavailable&&t.targetTemp!==null?`<span class="zone-target">\u2192 ${t.targetTemp}${f(t.unit)}</span>`:"",c=!t.isUnavailable&&t.humidity!==null?` <span class="zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(t.humidity)}%</span>`:"",d=t.isUnavailable?`${f(t.name)}: Unavailable`:`${f(t.name)}: ${r}${t.targetTemp!==null?`, target ${t.targetTemp}${t.unit}`:""}${t.humidity!==null?`, ${Math.round(t.humidity)}% humidity`:""}, ${t.hvacAction}`,u=`<div class="zone-row${a}" tabindex="0" role="button"
    aria-label="${f(d)}" data-entity="${f(t.entityId)}">`;if(u+='<div class="zone-header">',u+=`<span class="zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${f(t.icon)}"></ha-icon> `:""}${f(t.name)}${c}</span>`,u+=`<span class="zone-temp">${r}${l}</span>`,u+="</div>",i&&!t.isUnavailable){let p=t.currentTemp!==null?kt(t.currentTemp,t.minTemp,t.maxTemp):50,m=t.targetTemp!==null?kt(t.targetTemp,t.minTemp,t.maxTemp):null,g=j(t.minTemp),b=j((t.minTemp+t.maxTemp)/2),v=j(t.maxTemp),_=`linear-gradient(to right, ${k(g)}, ${k(b)}, ${k(v)})`;u+='<div class="temp-gauge">',u+=`<div class="temp-gauge-bg" style="background:${_}"></div>`,u+=`<div class="temp-gauge-current" style="left:${k(p.toFixed(1))}%"></div>`,m!==null&&(u+=`<div class="temp-gauge-target" style="left:${k(m.toFixed(1))}%"></div>`),u+="</div>"}if(s&&!t.isUnavailable){let p=t.heatingPower||t.coolingPower||0,m=_t(t.hvacAction),g=m.cssVar?`var(${m.cssVar}, ${m.fallback})`:m.fallback;if(p>0||t.hvacAction==="heating"||t.hvacAction==="cooling"){let b=Math.min(100,Math.max(0,p)),v=p>0?" bar-active":"";u+='<div class="power-bar-container">',u+='<div class="power-bar-track"></div>',u+=`<div class="power-bar-fill${v}" style="width:${k(b.toFixed(1))}%;background:${k(g)};--bar-glow-color:${k(m.fallback)}40"></div>`,u+="</div>"}}if(t.chips.length>0){u+='<div class="zone-chips">';for(let p of t.chips){let m=p.severity?` severity-${p.severity.toLowerCase()}`:"",g=p.color?` style="color:${k(p.color)}"`:"",b=p.entityId?` data-entity="${f(p.entityId)}"`:"";u+=`<span class="chip${m}"${g}${b} data-chip-type="${f(p.type)}">`,u+=`<ha-icon icon="${f(p.icon)}"></ha-icon>`,u+=`${f(p.label)}`,u+="</span>"}u+="</div>"}let h=e.sparkline?.mode||"overlay";if(h==="pulse"&&!t.isUnavailable)return an(t,e,o);if(!t.isUnavailable&&o&&o.length>=2){let p=_t(t.hvacAction),m=e.color||p.fallback;h==="prominent"&&(u+=ln(m,o,t.unit,t.entityId))}return u+="</div>",u}function an(t,e,n){let o=_t(t.hvacAction),i=t.heatingPower>0||t.hvacAction==="heating",s=t.hvacAction==="cooling",a=i||s,r=a?e.color||o.fallback:"var(--secondary-text-color, #9E9E9E)",l=k(r),c=f(t.entityId).replace(/\./g,"-"),d=t.heatingPower||t.coolingPower||0,u=t.hvacAction==="heating"?`Heating ${Math.round(d)}%`:t.hvacAction==="cooling"?`Cooling ${Math.round(d)}%`:"Idle",h=t.currentTemp!==null?`${t.currentTemp}${f(t.unit)}`:"--",p=t.targetTemp!==null?`\u2192 ${t.targetTemp}${f(t.unit)}`:"",m=`${f(t.name)}: ${h}, ${u}`,g=`zone-row zone-row-pulse${i?" heating":""}`,b=ae(n||[],24,t.unit),v=`<div class="${g}" tabindex="0" role="button"
    aria-label="${f(m)}" data-entity="${f(t.entityId)}"${b?` data-sparkline='${f(b)}'`:""}>`;if(n&&n.length>=2){let _=rt(n,360,56,60);if(_){let y=`pulse-grad-${c}`,w=`pulse-glow-${c}`,$=a?" heating-glow":"",C=a?"0.55":"0.2",A=a?"0.05":"0.02",I=a?"2":"1.5",M=a?"1":"0.5";v+='<svg class="pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',v+="<defs>",v+=`<linearGradient id="${y}" x1="0" y1="0" x2="0" y2="1">`,v+=`<stop offset="0%" stop-color="${l}" stop-opacity="${C}"/>`,v+=`<stop offset="100%" stop-color="${l}" stop-opacity="${A}"/>`,v+="</linearGradient>",a&&(v+=`<filter id="${w}"><feGaussianBlur stdDeviation="${bt(360,360).toFixed(1)}" result="b"/>`,v+='<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'),v+="</defs>",v+=`<path d="${_.areaPath}" fill="url(#${y})" />`,v+=`<path d="${_.linePath}" fill="none" stroke="${l}" stroke-width="${I}" opacity="${M}"`,a&&(v+=` filter="url(#${w})" class="${$}"`),v+=" />",v+="</svg>"}}return v+='<div class="pulse-info">',v+='<div class="pulse-info-left">',v+=`<div class="zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${f(t.icon)}"></ha-icon> `:""}${f(t.name)}</div>`,v+='<div class="pulse-status">',v+=`<span class="status-dot" style="background:${l}"></span>`,v+=`${f(u)}`,v+="</div>",v+="</div>",v+='<div class="pulse-info-right">',v+=`<span class="pulse-current">${f(h)}</span>`,p&&(v+=`<span class="zone-target">${p}</span>`),v+="</div>",v+="</div>",v+="</div>",v}function ln(t,e,n,o){let i=rt(e,300,40,48);if(!i){let d=wt(e,300,40,48,"avg",!0);return d?`<div class="sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${d}" fill="none" stroke="${k(t)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let a=`prom-grad-${o?o.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,r=k(t),l=ae(e,24,n),c=`<div class="sparkline-filled" style="height:40px"${l?` data-sparkline='${f(l)}'`:""}>`;return c+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',c+=`<defs><linearGradient id="${f(a)}" x1="0" y1="0" x2="0" y2="1">`,c+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,c+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,c+="</linearGradient></defs>",c+=`<path d="${i.areaPath}" fill="url(#${f(a)})" />`,c+=`<path d="${i.linePath}" fill="none" stroke="${r}" stroke-width="1.5" opacity="0.7" />`,c+="</svg></div>",c}function le(t,e,n,o,i){if(!t||t.length===0)return"";let s=Number(e.columns)||1,a=s>1?" columns":"",r=s>1?` style="grid-template-columns:repeat(${Number(s)}, 1fr)"`:"",l=`<div class="section section-zones${a}"${r}>`,c=o?.hubEntities?.home_state,d=c?n[c]:null;if(d&&d.state!=="unavailable"){let u=d.state==="on",h=u?"mdi:home":"mdi:home-export-outline",p=u?"Home":"Away",m=u?"var(--label-badge-green, #4CAF50)":"var(--secondary-text-color)";l+='<div style="display:flex;justify-content:space-between;align-items:center">',l+='<div class="section-label">Zones</div>',l+=`<span class="chip" data-entity="${f(c)}" style="color:${k(m)}">`,l+=`<ha-icon icon="${f(h)}"></ha-icon>${f(p)}</span>`,l+="</div>"}else l+='<div class="section-label">Zones</div>';for(let u of t){let h=u.entity,p=H(h),m=o?.zoneEntities?.[p]||{},g=Y(h,m,n,u,e),b=it(h,n,m,u),v=i?.data?.[b.entityId]||i?.data?.[h]||[];l+=sn(g,u,e,v)}return l+="</div>",l}function mo(t,e,n,o,i,s){if(!t||!e)return;let a=t.querySelectorAll(".zone-row");for(let r=0;r<e.length;r++){let l=e[r],c=l.entity,d=H(c),u=i?.zoneEntities?.[d]||{},h=o[c],p=s[c];if(h===p&&a[r])continue;let m=Y(c,u,o,l,n),g=a[r];if(!g)continue;let b=g.querySelector(".zone-temp");if(b){let $=m.isUnavailable?"Unavailable":m.currentTemp!==null?`${m.currentTemp}${m.unit}`:"--",C=!m.isUnavailable&&m.targetTemp!==null?`<span class="zone-target">\u2192 ${m.targetTemp}${f(m.unit)}</span>`:"";b.innerHTML=`${f($)}${C}`}let v=g.querySelector(".power-bar-fill");if(v){let $=m.heatingPower||m.coolingPower||0,C=_t(m.hvacAction),A=C.cssVar?`var(${C.cssVar}, ${C.fallback})`:C.fallback;v.style.width=`${Math.min(100,Math.max(0,$)).toFixed(1)}%`,v.style.background=A,v.style.setProperty("--bar-glow-color",`${C.fallback}40`),v.classList.toggle("bar-active",$>0)}let _=g.querySelector(".temp-gauge-current");if(_&&m.currentTemp!==null){let $=kt(m.currentTemp,m.minTemp,m.maxTemp);_.style.left=`${$.toFixed(1)}%`}let y=g.querySelector(".temp-gauge-target");if(y&&m.targetTemp!==null){let $=kt(m.targetTemp,m.minTemp,m.maxTemp);y.style.left=`${$.toFixed(1)}%`}let w=g.querySelector(".temp-gauge-bg");if(w&&!m.isUnavailable){let $=j(m.minTemp),C=j((m.minTemp+m.maxTemp)/2),A=j(m.maxTemp);w.style.background=`linear-gradient(to right, ${$}, ${C}, ${A})`}m.isUnavailable?g.classList.add("unavailable"):g.classList.remove("unavailable")}}function go(t){return t>95?"var(--label-badge-red, #F44336)":t>80?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-green, #4CAF50)"}function cn(t){let e=(t||"").toLowerCase();return e==="ok"||e==="healthy"?"var(--label-badge-green, #4CAF50)":e==="warning"?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function dn(t,e){let n=e>0?Math.min(100,t/e*100):0,o=go(n),i=80,s=i/2,a=i/2,r=i/2-4,l=r*.7,c=qt(s,a,l,r,-90,269.9),d=-90+n/100*360,u=n>0?qt(s,a,l,r,-90,Math.min(d,269.9)):"",h=n>95,p=n>80,m=h||p,g='<div class="usage-gauge">';if(g+=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="API usage: ${Math.round(t)} of ${Math.round(e)}" style="width:${i}px;height:${i}px">`,m&&(g+='<defs><filter id="gauge-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'),g+=`<path d="${c}" fill="var(--divider-color, rgba(0,0,0,0.12))" />`,u){if(g+=`<path d="${u}" fill="${k(o)}"${m?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(n)}%</title>`,m){let b=h?"1":"2.5";et()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${b}s" repeatCount="indefinite"/>`)}g+="</path>"}return g+="</svg>",g+=`<div class="gauge-center">${f(Math.round(t))}<br><span style="font-size:10px;opacity:0.6">/ ${f(Math.round(e))}</span></div>`,g+="</div>",g}function pn(t,e,n){let o=e?.data?.[t]||[];return lt(o,200,40,n,"api-hist-grad","API usage history")}function un(t){let e=Ot(t,nt);if(e.length===0)return"";let n=60,o=Pt(e,n),i=e.reduce((l,c)=>l+c.value,0),s='<div style="display:flex;align-items:center;gap:12px">';s+=`<div class="donut-container" style="width:${n}px;height:${n}px;flex-shrink:0;margin:0">`,s+=`<svg viewBox="0 0 ${n} ${n}" role="img" aria-label="API call breakdown">`;let a=n/2-2,r=a*.6;s+=`<circle cx="${n/2}" cy="${n/2}" r="${((a+r)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(a-r).toFixed(1)}" />`;for(let l of o)s+=`<path d="${l.d}" fill="${k(l.color)}"><title>${f(l.label)}: ${Math.round(l.angle/360*i)}</title></path>`;return s+="</svg>",s+=`<div class="donut-center" style="font-size:12px">${f(Math.round(i))}</div>`,s+="</div>",s+=xt(e.map(l=>({label:l.label,color:l.color,value:String(Math.round(l.value))}))),s+="</div>",s}function ce(t,e,n,o){if(!t.api_usage||!t.api_limit)return"";let i=parseFloat(e[t.api_usage]?.state)||0,s=parseFloat(e[t.api_limit]?.state)||100,a=s>0?Math.min(100,i/s*100):0,r=go(a),l=e[t.api_status]?.state||"unknown",c=cn(l),d='<div class="section section-api">';d+='<div class="section-label">API Usage</div>',d+='<div class="api-dashboard">',d+='<div class="api-row">',d+=dn(i,s);let u=t.api_usage;if(u&&o&&(d+=pn(u,o,r)),d+="</div>",t.api_breakdown&&e[t.api_breakdown]&&(d+='<div class="api-row">',d+=un(e[t.api_breakdown].attributes||{}),d+="</div>"),d+='<div class="zone-chips">',t.call_history&&e[t.call_history]){let h=e[t.call_history].attributes?.calls_per_hour;h!=null&&Number(h)>0&&(d+=`<span class="chip" data-entity="${f(t.call_history)}">`,d+=`<ha-icon icon="mdi:speedometer"></ha-icon>${f(Math.round(Number(h)))}/hr</span>`)}if(t.polling_interval&&e[t.polling_interval]){let h=e[t.polling_interval],p=h.attributes?.unit_of_measurement||"";d+=`<span class="chip" data-entity="${f(t.polling_interval)}">Poll: ${f(h.state)}${p?f(p):""}</span>`}if(t.next_sync&&e[t.next_sync]){let h=e[t.next_sync].state,p=h,m=0;if(h&&h.includes("T"))try{let g=new Date(h);m=g.getTime();let b=m-Date.now();if(b>0&&b<36e5){let v=Math.floor(b/6e4),_=Math.floor(b%6e4/1e3);p=v>0?`${v}m ${_}s`:`${_}s`}else p=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`}catch{}d+=`<span class="chip chip-next-sync" data-entity="${f(t.next_sync)}" data-target="${m}">Next: ${f(p)}</span>`}if(t.api_reset&&e[t.api_reset]){let h=e[t.api_reset].state,p=h;if(h&&h.includes("T"))try{let m=new Date(h);p=`${String(m.getHours()).padStart(2,"0")}:${String(m.getMinutes()).padStart(2,"0")}`}catch{}d+=`<span class="chip" data-entity="${f(t.api_reset)}">Reset: ${f(p)}</span>`}return t.token_status&&e[t.token_status]&&(d+=`<span class="chip" data-entity="${f(t.token_status)}">Token: ${f(e[t.token_status].state)}</span>`),d+=`<span class="chip" data-entity="${t.api_status?f(t.api_status):""}" style="color:${k(c)}">${f(l)}</span>`,d+="</div>",d+="</div>",d+="</div>",d}function de(t,e,n){if(!t.bridge_connected)return"";let o=e[t.bridge_connected];if(!o)return"";let i=o.state==="on",s=i?"var(--label-badge-green, #4CAF50)":"var(--label-badge-red, #F44336)",a=i?"Connected":"Disconnected",r=i?"pulse-dot connected":"pulse-dot disconnected",l=o.attributes||{},c=l.response_time_ms,d=l.consecutive_failures,u=l.last_error,h=t.boiler_flow_temp&&e[t.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",p='<div class="section section-bridge">';if(p+='<div class="section-label">Bridge</div>',p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${f(t.bridge_connected)}" style="color:${k(s)}">`,p+=`<span class="${r}"></span>`,p+=`${f(a)}</span>`,c!==void 0&&(p+=`<span class="chip" data-entity="${f(t.bridge_connected)}">${f(Math.round(c))}ms</span>`),d!==void 0&&d>0&&(p+=`<span class="chip" data-entity="${f(t.bridge_connected)}" style="color:var(--label-badge-red, #F44336)">Failures: ${f(d)}</span>`),p+="</div>",t.boiler_flow_temp&&e[t.boiler_flow_temp]){let b=parseFloat(e[t.boiler_flow_temp].state),v=e[t.boiler_flow_temp].state,_=isNaN(b)?"var(--primary-text-color)":j(b);if(p+='<div style="display:flex;align-items:center;gap:8px;margin-top:4px">',p+=`<span class="flow-temp-value" style="color:${k(_)}">${f(v)}${f(h)}</span>`,n){let y=n.data?.[t.boiler_flow_temp]||[],w=lt(y,120,30,_,"bridge-flow-grad","Boiler flow temperature history");w&&(p+=`<div class="flow-sparkline">${w}</div>`)}p+="</div>"}let m=t.wc_status&&e[t.wc_status],g=t.wc_target_flow&&e[t.wc_target_flow];if((m||g)&&(p+='<div class="zone-chips">',m&&(p+=`<span class="chip" data-entity="${f(t.wc_status)}">${f(e[t.wc_status].state)}</span>`),g&&(p+=`<span class="chip" data-entity="${f(t.wc_target_flow)}">Target: ${f(e[t.wc_target_flow].state)}${f(h)}</span>`),p+="</div>"),t.boiler_max_output&&e[t.boiler_max_output]){let b=e[t.boiler_max_output].state;b!=="unavailable"&&b!=="unknown"&&(p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${f(t.boiler_max_output)}">`,p+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${f(b)}${f(h)}</span>`,p+="</div>")}return u&&u!=="None"&&u!=="null"&&(p+='<div class="zone-chips">',p+=`<span class="chip" style="color:var(--label-badge-red, #F44336)">Error: ${f(u)}</span>`,p+="</div>"),p+="</div>",p}var Vt="var(--label-badge-green, #4CAF50)",vo="var(--accent-color, #9C27B0)";function pe(t,e,n){if(!t.homekit_connected)return"";let o=e[t.homekit_connected];if(!o)return"";let i=o.state==="on",s=i?Vt:"var(--label-badge-red, #F44336)",a=i?"Connected":"Disconnected",r=i?"pulse-dot connected":"pulse-dot disconnected",l=o.attributes||{},c=l.uptime||"",d=l.mapped_zones,u=l.reconnect_count,h=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,p=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,m=h?Number(h.state)||0:Number(l.reads_saved_today)||0,g=p?Number(p.state)||0:Number(l.writes_saved_today)||0,b=m+g,v='<div class="section section-homekit">',_=b>0?` \xB7 ${b} saved`:"";if(v+=`<div class="section-label">HomeKit${f(_)}</div>`,v+='<div class="zone-chips">',v+=`<span class="chip" data-entity="${f(t.homekit_connected)}" style="color:${k(s)}">`,v+=`<span class="${r}"></span>`,v+=`${f(a)}`,c&&(v+=` <span style="opacity:0.6;font-size:10px">${f(c)}</span>`),v+="</span>",d!==void 0&&(v+=`<span class="chip">${f(d)} zones</span>`),u!==void 0&&u>0&&(v+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Reconnects: ${f(u)}</span>`),v+="</div>",m>0||g>0){let A=b>0?m/b*100:100;v+='<div style="margin-top:4px">',v+='<div class="power-bar-container">',v+='<div class="power-bar-track"></div>',v+=`<div class="power-bar-fill" style="width:100%;background:${k(vo)}"></div>`,v+=`<div class="power-bar-fill" style="width:${k(A.toFixed(1))}%;background:${k(Vt)}"></div>`,v+="</div>",v+="</div>";let I=t.homekit_reads_saved;if(I&&n){let S=n.data?.[I]||[];v+=lt(S,200,30,Vt,"hk-spark-grad","HomeKit saved calls history")}v+='<div class="zone-chips">';let M=t.homekit_reads_saved||"",T=t.homekit_writes_saved||"";v+=`<span class="chip"${M?` data-entity="${f(M)}"`:""} style="color:${k(Vt)}">Reads: ${f(m)}</span>`,g>0&&(v+=`<span class="chip"${T?` data-entity="${f(T)}"`:""} style="color:${k(vo)}">Writes: ${f(g)}</span>`),v+="</div>"}let y=Number(l.write_attempts)||0,w=Number(l.write_successes)||0,$=Number(l.write_fallbacks)||0,C=Number(l.write_avg_latency_ms)||0;return(y>0||w>0||$>0)&&(v+='<div class="zone-chips">',y>0&&(v+=`<span class="chip">Attempts: ${f(y)}</span>`),w>0&&(v+=`<span class="chip">Successes: ${f(w)}</span>`),$>0&&(v+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Fallbacks: ${f($)}</span>`),C>0&&(v+=`<span class="chip">Latency: ${f(C)}ms</span>`),v+="</div>"),v+="</div>",v}function hn(t){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(t||"").toLowerCase()]||"mdi:weather-cloudy"}function ue(t,e,n){if(!t.outside_temp)return"";let o=e[t.outside_temp]?.state,i=e[t.weather]?.state||"",s=t.solar_intensity?e[t.solar_intensity]?.state:null,a='<div class="section section-weather">';a+='<div class="section-label">Weather</div>',a+='<div class="zone-chips">',i&&(a+=`<span class="chip"${t.weather?` data-entity="${f(t.weather)}"`:""}><ha-icon icon="${f(hn(i))}"></ha-icon>${f(i)}</span>`),o!=null&&(a+=`<span class="chip" data-entity="${f(t.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${f(o)}${f(e[t.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),s!=null&&(a+=`<span class="chip"${t.solar_intensity?` data-entity="${f(t.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${f(s)}%</span>`),a+="</div>";let r=t.outside_temp;if(r&&n){let l=n.data?.[r]||[],c=parseFloat(o||"0"),d=isNaN(c)?"var(--primary-text-color)":j(c);a+=lt(l,200,30,d,"weather-spark-grad","Outdoor temperature history")}return a+="</div>",a}function he(t,e,n){let o=!1,i='<div class="section section-environment">';i+='<div class="section-label">Environment</div>';for(let s of t){let a=H(s.entity),r=n?.zoneEntities?.[a]||{},l=r.mold_risk&&e[r.mold_risk],c=r.condensation&&e[r.condensation],d=r.comfort_level&&e[r.comfort_level],u=r.surface_temp&&e[r.surface_temp],h=r.dew_point&&e[r.dew_point];if(!l&&!c&&!d&&!u&&!h)continue;o=!0;let p=s.name||e[s.entity]?.attributes?.friendly_name||a;if(i+=`<div class="system-row"><span class="system-label">${f(p)}</span>`,i+='<div class="zone-chips">',l){let m=e[r.mold_risk].state,g=Rt(m);i+=`<span class="chip" data-entity="${f(r.mold_risk)}" style="color:${k(g.fallback)}">`,i+=`<ha-icon icon="mdi:mushroom"></ha-icon>${f(m)}</span>`}if(c){let m=e[r.condensation].state,g=Rt(m);i+=`<span class="chip" data-entity="${f(r.condensation)}" style="color:${k(g.fallback)}">`,i+=`<ha-icon icon="mdi:water-alert"></ha-icon>${f(m)}</span>`}d&&(i+=`<span class="chip" data-entity="${f(r.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${f(e[r.comfort_level].state)}</span>`),u&&(i+=`<span class="chip" data-entity="${f(r.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${f(e[r.surface_temp].state)}${e[r.surface_temp]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),h&&(i+=`<span class="chip" data-entity="${f(r.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${f(e[r.dew_point].state)}${e[r.dew_point]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function fe(t,e,n){let o=!1,i='<div class="section section-thermal">';i+='<div class="section-label">Thermal Analytics</div>';for(let s of t){let a=H(s.entity),r=n?.zoneEntities?.[a]||{},l=r.heating_rate&&e[r.heating_rate],c=r.thermal_inertia&&e[r.thermal_inertia],d=r.preheat_time&&e[r.preheat_time],u=r.confidence&&e[r.confidence],h=r.heat_accel&&e[r.heat_accel],p=r.approach_factor&&e[r.approach_factor];if(!l&&!c&&!d&&!u&&!h&&!p)continue;o=!0;let m=s.name||e[s.entity]?.attributes?.friendly_name||a;i+=`<div class="system-row"><span class="system-label">${f(m)}</span>`,i+='<div class="zone-chips">',l&&(i+=`<span class="chip" data-entity="${f(r.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${f(e[r.heating_rate].state)}${e[r.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr"}</span>`),c&&(i+=`<span class="chip" data-entity="${f(r.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${f(e[r.thermal_inertia].state)}</span>`),d&&(i+=`<span class="chip" data-entity="${f(r.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${f(e[r.preheat_time].state)} min</span>`),u&&(i+=`<span class="chip" data-entity="${f(r.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${f(e[r.confidence].state)}%</span>`),h&&(i+=`<span class="chip" data-entity="${f(r.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${f(e[r.heat_accel].state)}${e[r.heat_accel]?.attributes?.unit_of_measurement||""}</span>`),p&&(i+=`<span class="chip" data-entity="${f(r.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${f(e[r.approach_factor].state)}${e[r.approach_factor]?.attributes?.unit_of_measurement||""}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function me(t,e,n){let o=!1,i='<div class="section section-schedule">';i+='<div class="section-label">Schedule</div>';for(let s of t){let a=H(s.entity),r=n?.zoneEntities?.[a]||{},l=r.next_schedule&&e[r.next_schedule],c=r.schedule_deviation&&e[r.schedule_deviation],d=r.preheat_advisor&&e[r.preheat_advisor],u=r.comfort_target&&e[r.comfort_target];if(!l&&!c&&!d&&!u)continue;o=!0;let h=s.name||e[s.entity]?.attributes?.friendly_name||a;if(i+=`<div class="system-row"><span class="system-label">${f(h)}</span>`,i+='<div class="zone-chips">',l){let p=r.next_sched_temp&&e[r.next_sched_temp]?` \u2192 ${f(e[r.next_sched_temp].state)}${e[r.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C"}`:"";i+=`<span class="chip" data-entity="${f(r.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${f(e[r.next_schedule].state)}${p}</span>`}c&&(i+=`<span class="chip" data-entity="${f(r.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${f(e[r.schedule_deviation].state)}${e[r.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),d&&(i+=`<span class="chip" data-entity="${f(r.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${f(e[r.preheat_advisor].state)}</span>`),u&&(i+=`<span class="chip" data-entity="${f(r.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${f(e[r.comfort_target].state)}${e[r.comfort_target]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function fn(t,e){let n=e&&e.length>0?e:nt;return n[t%n.length]}function mn(t,e,n){let i=[];for(let a of t){let r=rt(a.data,300,e,48);r&&i.push({...r,color:a.color,entityId:a.entityId})}if(i.length===0){let a=fo(t,300,e);if(!a.some(c=>c.d!==""))return'<div class="chart-empty">No data available</div>';let l=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${f(n)}" class="chart-svg" preserveAspectRatio="none">`;for(let c of a)c.d!==""&&(l+=`<path d="${c.d}" fill="none" stroke="${k(c.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${f(c.entityId)}" />`);return l+="</svg>",l}let s=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${f(n)}" class="chart-svg" preserveAspectRatio="none">`;s+="<defs>";for(let a=0;a<i.length;a++){let r=`graph-grad-${a}`;s+=`<linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">`,s+=`<stop offset="0%" stop-color="${k(i[a].color)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${k(i[a].color)}" stop-opacity="0"/>`,s+="</linearGradient>"}s+="</defs>";for(let a=0;a<i.length;a++){let r=i[a];s+=`<path d="${r.areaPath}" fill="url(#graph-grad-${a})" />`,s+=`<path d="${r.linePath}" fill="none" stroke="${k(r.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${f(r.entityId)}" />`}return s+="</svg>",s}function ve(t,e,n,o,i){let s=t.attribute||"current_temperature",a=t.stacked===!0,r=Number(t.height)||80,l=t.palette||void 0,c=t.entities||e.map(u=>u.entity);if(c.length===0)return"";let d='<div class="section section-graph">';return a?(d+=ge(c,"current_temperature","Temperature",r,l,n,o,i,e),d+=ge(c,"current_humidity","Humidity",r,l,n,o,i,e)):d+=ge(c,s,s==="current_humidity"?"Humidity":"Temperature",r,l,n,o,i,e),d+="</div>",d}function ge(t,e,n,o,i,s,a,r,l){let c=[],d=[],u=e==="current_humidity"||e==="humidity";for(let g=0;g<t.length;g++){let b=t[g],v=fn(g,i),_=H(b),y=r?.zoneEntities?.[_]||{},w=l?.find(S=>S.entity===b),C=(u?at(b,a,y,w):it(b,a,y,w))?.entityId||b,A=s.data[C]||[],I=w?.name||a[b]?.attributes?.friendly_name||_,M=a[b]?.attributes?.[e],T=u?"%":a[b]?.attributes?.unit_of_measurement||"\xB0C";c.push({entityId:C,data:A,color:v}),d.push({label:I,color:v,value:M!=null?`${M}${T}`:"--"})}let h=d.map(g=>g.label).join(", "),p=`${n} history for ${h}`,m=`<div class="section-label">${f(n)}</div>`;return m+=`<div class="chart-container" style="height:${k(o)}px">`,m+=mn(c,o,p),m+="</div>",m+=xt(d),m}function _e(t,e,n){let o=Number(t.size)||120,i=t.source,s=[];if(i==="api_breakdown"?s=gn(e,n):i==="homekit_saved"?s=vn(e,n):t.segments&&(s=_n(t.segments,n)),s.length===0)return"";let a=s.reduce((g,b)=>g+b.value,0),r=Pt(s,o),l='<div class="section section-donut">',d=i&&{api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"}[i]||"Breakdown";l+=`<div class="section-label">${f(d)}</div>`;let u=s.map(g=>`${g.label} ${g.value}`).join(", ");l+=`<div class="donut-container" style="width:${k(o)}px;height:${k(o)}px">`,l+=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="${f(u)}">`;let h=o/2-2,p=h*.6;l+=`<circle cx="${o/2}" cy="${o/2}" r="${((h+p)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(h-p).toFixed(1)}" />`;for(let g of r)l+=`<path d="${g.d}" fill="${k(g.color)}" data-segment="${f(g.label)}"><title>${f(g.label)}: ${Math.round(g.angle/360*a)}</title></path>`;l+="</svg>",l+=`<div class="donut-center">${f(Math.round(a))}</div>`,l+="</div>";let m=s.map(g=>({label:g.label,color:g.color,value:String(Math.round(g.value))}));return l+=xt(m),l+="</div>",l}function gn(t,e){let n=t.api_breakdown;if(!n||!e[n])return[];let o=e[n].attributes;return!o||typeof o!="object"?(ut("api_call_breakdown entity has no attributes"),[]):Ot(o,nt)}function vn(t,e){if(!t.homekit_connected)return[];let n=e[t.homekit_connected];if(!n)return[];let o=n.attributes||{},i=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,s=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,a=i?Number(i.state)||0:Number(o.reads_saved_today)||0,r=s?Number(s.state)||0:Number(o.writes_saved_today)||0,l=[];return(a>0||r>0)&&(l.push({label:"Reads Saved",value:a,color:nt[0]}),l.push({label:"Writes Saved",value:r,color:nt[1]})),l}function _n(t,e){return t.map((n,o)=>({label:n.label||n.entity,value:Math.max(0,Number(e[n.entity]?.state)||0),color:n.color||nt[o%nt.length]}))}function _o(t,e,n){let i=Date.now()-n,s=n/e,a=[],r=0,l=null;for(;r<t.length&&t[r].t<i;)isFinite(t[r].v)&&(l=Math.round(t[r].v*10)/10),r++;for(let c=0;c<e;c++){let d=i+c*s,u=d+s,h=d+s/2,p=0,m=0;for(;r<t.length&&t[r].t<u;)t[r].t>=d&&isFinite(t[r].v)&&(p+=t[r].v,m++),r++;m>0&&(l=Math.round(p/m*10)/10);let g=new Date(h),b=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`;a.push({value:l,time:h,label:b})}return a}function Bt(t,e,n={}){let o=t.length;if(o===0)return'<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">No data</div></div>';let i=n.emptyColor||"var(--disabled-color, #9E9E9E)",s=n.emptyOpacity??.3,a=n.ariaLabel||"",r=JSON.stringify(t.map(c=>({v:c.value,l:c.label}))),l=`<div class="strip-container" data-slots='${f(r)}'>`;l+=`<svg viewBox="0 0 ${o} 1" preserveAspectRatio="none" role="img" aria-label="${f(a)}" style="width:100%;height:100%;display:block">`;for(let c=0;c<o;c++){let d=t[c].value,u=d!==null?e(d):i,h=d!==null?1:s;l+=`<rect x="${c}" y="0" width="1.05" height="1" fill="${k(u)}" opacity="${h}"/>`}if(l+="</svg>",n.nowPct!==void 0){let c=Math.min(100,Math.max(0,n.nowPct));l+=`<div class="now-marker" style="left:${c.toFixed(1)}%"></div>`}return l+="</div>",l}function Ut(t,e,n={}){let o=t.length;if(o===0)return'<div class="cells"><div class="chart-empty" style="height:16px;font-size:10px">No data</div></div>';let i=JSON.stringify(t.map(a=>({v:a.value,l:a.label}))),s=`<div class="cells" data-slots='${f(i)}'>`;for(let a=0;a<o;a++){let r=t[a].value,l=t[a].label;if(r!==null){let c=e(r);s+=`<div class="cell" style="background:${k(c)}" data-hour="${f(l)}" data-score="${r}"></div>`}else s+=`<div class="cell cell-empty" data-hour="${f(l)}"></div>`}return s+="</div>",s}function be(){let t=document.createElement("div");t.className="strip-tooltip",t.style.display="none";let e=null;return{element:t,show(n,o,i){e&&(clearTimeout(e),e=null),t.textContent=i,t.style.display="",t.style.left=`${o}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function bo(){let t=document.createElement("div");t.className="strip-tooltip strip-tooltip-fixed",t.style.display="none";let e=null;return{element:t,show(n,o,i){e&&(clearTimeout(e),e=null),t.textContent=i,t.style.display="",t.style.left=`${o}px`,t.style.top=`${n.top-28}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function Wt(t,e=5){let n=new Date,o=Date.now()-t,i="";for(let s=0;s<e-1;s++){let a=new Date(o+s/(e-1)*t);i+=`<span class="time-label">${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}</span>`}return i+=`<span class="time-label">${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}</span>`,i}function ct(t,e,n){let o=Math.max(0,Math.min(1,(t-e.left)/e.width));return Math.min(n-1,Math.floor(o*n))}var bn=2e3;function ye(t,e,n,o){let i=null,s=r=>{let l=n.getBoundingClientRect(),c=r-l.left;c>=0&&c<=l.width&&(e.style.left=`${o+c}px`,e.style.display="")},a=()=>{e.style.display="none",i&&(clearTimeout(i),i=null)};t.addEventListener("pointermove",r=>{r.pointerType!=="touch"&&s(r.clientX)}),t.addEventListener("pointerleave",a),t.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(s(r.clientX),i&&clearTimeout(i),i=setTimeout(a,bn))}),t.addEventListener("pointerup",r=>{r.pointerType})}function xe(t,e,n,o=""){if(!e||e.length===0)return;let i=e.length,s=null,a=null;t.addEventListener("pointerdown",r=>{if(r.pointerType==="touch"&&r.isPrimary===!1)return;let l=t.getBoundingClientRect();s=ct(r.clientX,l,i),t.setPointerCapture(r.pointerId),a||(a=document.createElement("div"),a.className="strip-drag-highlight",t.style.position="relative",t.appendChild(a)),a.style.display="",a.style.left=`${(s/i*100).toFixed(1)}%`,a.style.width="0%"}),t.addEventListener("pointermove",r=>{if(s===null||!a)return;let l=t.getBoundingClientRect(),c=ct(r.clientX,l,i),d=Math.min(s,c),u=Math.max(s,c);a.style.left=`${(d/i*100).toFixed(1)}%`,a.style.width=`${((u-d+1)/i*100).toFixed(1)}%`}),t.addEventListener("pointerup",r=>{if(s===null){s=null;return}let l=t.getBoundingClientRect(),c=ct(r.clientX,l,i),d=Math.min(s,c),u=Math.max(s,c),h=e.slice(d,u+1).filter(p=>p.v!==null);if(h.length>0){let p=h.map($=>$.v),m=(p.reduce(($,C)=>$+C,0)/p.length).toFixed(1),g=Math.min(...p),b=Math.max(...p),v=e[d]?.l||"",_=e[u]?.l||"",y=`${v} \u2013 ${_}: avg ${m}${o}, ${g}${o} \u2013 ${b}${o}`,w=t.getBoundingClientRect();n.show(w,(d+u)/2/i*w.width,y),setTimeout(()=>n.hide(),3e3)}s=null})}function yo(t,e,n,o,i){if(!t||t.length===0)return"";let s=Number(e?.hours_to_show)||24,a=e?.mode||"timeline",r=Number(e?.slots_per_hour)||2,c=(e?.attribute||"temperature")==="humidity",d=c?Ct:j,u=a==="heatmap"?s:s*r,h=s*36e5,p=Date.now()-h,m=(Date.now()-p)/h*100,g=c?"Humidity":"Thermal",b=a==="heatmap"?"Heatmap":"Timeline",v='<div class="section section-thermal-strip">';v+='<div style="display:flex;justify-content:space-between;align-items:baseline">',v+=`<div class="section-label">${k(s)}h ${f(g)} ${f(b)}</div>`,v+='<span class="card-subtitle section-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',v+="</div>",v+='<div class="zone-detail" id="timeline-detail"></div>',v+='<div class="strip-rows" style="position:relative">',v+='<div class="strip-crosshair" style="display:none"></div>';for(let _ of t){let y=_.entity,w=H(y),$=o?.zoneEntities?.[w]||{},A=(c?at(y,n,$,_):it(y,n,$,_))?.entityId||y,I=_.name||n[y]?.attributes?.friendly_name||w,M=i?.data?.[A]||[];if(v+=`<div class="timeline-row" data-zone="${f(w)}" data-entity="${f(y)}">`,v+=`<span class="zone-label">${f(I)}</span>`,M.length<2){let T=!!n[A],S=A in(i?.data||{});v+=`<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">${f(T&&!S?"Waiting for data":"No data")}</div></div>`}else{let T=_o(M,u,h),x=`${I} ${c?"humidity":"temperature"} over ${s}h`;a==="heatmap"?v+=Ut(T,d,{ariaLabel:x}):v+=Bt(T,d,{ariaLabel:x,nowPct:m})}v+="</div>"}return v+="</div>",v+='<div class="time-axis" style="margin-left:76px">',v+=Wt(h),v+="</div>",v+="</div>",v}var yn={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function xo(t,e,n,o){if(t==null||e===null||e===void 0||isNaN(t)||isNaN(e))return null;let i=100;if(i-=Math.min(50,Math.abs(t-e)*10),n!=null&&(i-=Math.min(25,Math.abs(n-45)*.5)),o!=null){let s=yn[o]??50;i=i*.7+s*.3}return Math.max(0,Math.min(100,Math.round(i)))}function wo(t){if(t>=80)return`rgba(52, 199, 89, ${(.35+t/100*.55).toFixed(2)})`;if(t>=50){let e=(t-50)/30;return`rgba(${Math.round(255-e*50)}, ${Math.round(159+e*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-t)/50*.5).toFixed(2)})`}function jt(t,e,n=72e5){if(t.length===0)return null;let o=0,i=t.length-1;for(;o<i;){let r=o+i>>1;t[r].t<e?o=r+1:i=r}let s=null,a=1/0;for(let r=Math.max(0,o-1);r<=Math.min(t.length-1,o);r++){let l=Math.abs(t[r].t-e);l<a&&isFinite(t[r].v)&&(a=l,s=t[r].v)}return a<=n?s:null}function $o(t,e,n,o,i){if(!t||t.length===0)return"";let s=Number(e?.slots_per_hour)||1,a=Number(e?.hours_to_show)||24,r=e?.mode||"heatmap",l=s*a,c=a*36e5,d=Date.now()-c,u=(Date.now()-d)/c*100,h=r==="timeline"?"Comfort Timeline":"Comfort Heatmap",p='<div class="section section-comfort-strip">';p+='<div style="display:flex;justify-content:space-between;align-items:baseline">',p+=`<div class="section-label">${k(a)}h ${f(h)}</div>`,p+='<span class="card-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',p+="</div>",p+='<div class="zone-detail" id="heatmap-detail"></div>',p+='<div class="heatmap-body" style="position:relative">',p+='<div class="strip-crosshair" style="display:none"></div>';for(let m=0;m<t.length;m++){let g=t[m],b=g.entity,v=H(b),_=o?.zoneEntities?.[v]||{},y=g.name||n[b]?.attributes?.friendly_name||v,$=it(b,n,_,g).entityId,A=at(b,n,_,g)?.entityId||null,I=i?.data?.[$]||[],M=A?i?.data?.[A]||[]:[],T=n[b]?.attributes?.temperature??null,S=_.comfort_level,x=S&&n[S]?.state||null,z=[],E=c/l,F=null;if(I.length>0){let R=jt(I,d,1/0),N=M.length>0?jt(M,d,1/0):null;R!==null&&(F=xo(R,T,N,x))}for(let R=0;R<l;R++){let O=d+R*E+E/2,B=jt(I,O),V=jt(M,O),Z=xo(B,T,V,x);Z!==null&&(F=Z);let X=new Date(O),G=`${String(X.getHours()).padStart(2,"0")}:${String(X.getMinutes()).padStart(2,"0")}`;z.push({value:F,time:O,label:G})}p+=`<div class="heatmap-row" data-zone="${f(v)}" data-idx="${m}">`,p+=`<span class="zone-label">${f(y)}</span>`;let P=`${y} comfort over ${a}h`;r==="timeline"?p+=Bt(z,wo,{ariaLabel:P,nowPct:u}):p+=Ut(z,wo),p+="</div>"}return p+="</div>",p+='<div class="heatmap-time-axis">',p+=Wt(c),p+="</div>",p+='<div class="heatmap-legend">',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(52,199,89,0.7)"></div>\u226580</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,159,10,0.65)"></div>50\u201379</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,69,58,0.6)"></div>&lt;50</div>',p+="</div>",p+="</div>",p}function So(t,e,n,o,i,s,a){let r=s+(a-s)*.35,l=s+(a-s)*.65,c=t-n,d=e-o,u=t+n,h=e+o,p=`M${s},${c.toFixed(1)}`;return p+=` C${r.toFixed(1)},${c.toFixed(1)} ${l.toFixed(1)},${d.toFixed(1)} ${a},${d.toFixed(1)}`,p+=` L${a},${h.toFixed(1)}`,p+=` C${l.toFixed(1)},${h.toFixed(1)} ${r.toFixed(1)},${u.toFixed(1)} ${s},${u.toFixed(1)}`,p+=" Z",p}function xn(t,e,n,o){let i=n+(o-n)*.35,s=n+(o-n)*.65;return`M${n},${t.toFixed(1)} C${i.toFixed(1)},${t.toFixed(1)} ${s.toFixed(1)},${e.toFixed(1)} ${o},${e.toFixed(1)}`}function we(t,e,n){if(!t||t.length===0)return"";let o=et(),i=[],s=!1;for(let S of t){let x=S.entity,z=H(x),E=n?.zoneEntities?.[z]||{},F=Y(x,E,e,S,{});(F.heatingPower>0||E.heating_power||e[x]?.attributes?.heating_power!==void 0)&&(s=!0),i.push({name:F.name,power:F.heatingPower,temp:F.currentTemp,target:F.targetTemp,unit:F.unit,hvacAction:F.hvacAction})}let a=i.length>0?Math.round(i.reduce((S,x)=>S+x.power,0)/i.length):0,r='<div class="section section-energy-flow">';if(r+='<div style="display:flex;justify-content:space-between;align-items:baseline">',r+='<div class="section-label">Energy Flow</div>',s&&(r+=`<span style="font-size:11px;color:${k(pt.heating.fallback)};font-weight:500">${f(a)}% avg</span>`),r+="</div>",!s)return r+='<div class="chart-empty">No heating data</div></div>',r;let l=360,c=i.length<=3?44:i.length<=6?38:34,d=15,u=Math.max(80,i.length*c+30),h=i.length*c,p=Math.max(40,Math.min(h*.7,h-16)),m=Math.max(36,p*.6),g=Math.max(50,m/2+14),b=l-60,v=u/2,_=22,y=2,w=p/Math.max(i.length,1)*.7,$=pt.heating.fallback,C="var(--disabled-color, #9E9E9E)",A=i.some(S=>S.power>0||S.hvacAction==="heating"||S.hvacAction==="cooling"),I=i.filter(S=>S.power>0).length;r+=`<svg viewBox="0 0 ${l} ${u}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${k(u)}px;display:block">`,r+="<defs>",r+=`<filter id="flow-glow"><feGaussianBlur stdDeviation="${bt(l,360).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;for(let S=0;S<i.length;S++){let x=i[S].power>0||i[S].hvacAction==="heating"||i[S].hvacAction==="cooling",z=x?$:C,E=i[S].power;if(x){let F=E>0?(4.5-E/100*3.3).toFixed(1):"5.0";r+=`<linearGradient id="flow-g${S}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,r+=`<stop offset="0%" stop-color="${k(z)}" stop-opacity="0.3"/>`,r+=`<stop offset="50%" stop-color="${k(z)}" stop-opacity="1.0"/>`,r+=`<stop offset="100%" stop-color="${k(z)}" stop-opacity="0.3"/>`,o||(r+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${F}s" repeatCount="indefinite"/>`,r+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${F}s" repeatCount="indefinite"/>`),r+="</linearGradient>"}else r+=`<linearGradient id="flow-g${S}" x1="0" y1="0" x2="1" y2="0">`,r+=`<stop offset="0%" stop-color="${k(z)}" stop-opacity="0.15"/>`,r+=`<stop offset="50%" stop-color="${k(z)}" stop-opacity="0.25"/>`,r+=`<stop offset="100%" stop-color="${k(z)}" stop-opacity="0.1"/>`,r+="</linearGradient>"}r+="</defs>";let M=A?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)",T=A?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)";r+=`<rect x="${g-m/2}" y="${v-p/2}" width="${m}" height="${p}" rx="8" fill="${k(M)}" stroke="${k(T)}" stroke-width="1"/>`,r+=`<text x="${g}" y="${v-p/2-6}" text-anchor="middle" font-size="10" fill="var(--secondary-text-color, #8e8e93)">Boiler</text>`;for(let S=0;S<i.length;S++){let x=i[S],z=d+S*c+20,E=x.power>0?y+x.power/100*(_-y):y,F=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",P=F?' class="ribbon-active"':"",R=v+(S-(i.length-1)/2)*w,N=So(R,z,E/2,E/2,l,g+m/2,b-12);if(r+=`<path d="${N}" fill="url(#flow-g${S})"${P}${F?' filter="url(#flow-glow)"':""} data-zone="${f(x.name)}">`,r+=`<title>${f(x.name)}: ${Math.round(x.power)}% heating power</title></path>`,x.power>0&&!o){let X=to(x.power,20,I),G=eo(x.power),U=oo(E,_),W=(U*.8).toFixed(1),L=xn(R,z,g+m/2,b-12);r+=`<g class="flow-particles" data-zone="${f(x.name)}" style="will-change:transform">`;for(let D=0;D<X;D++){let q=(D*(G/X)).toFixed(2);r+=`<circle r="${U.toFixed(1)}" fill="${k($)}" opacity="0.8"`,r+=` filter="drop-shadow(0 0 ${W}px ${k($)})">`,r+=`<animateMotion dur="${G.toFixed(1)}s" begin="${q}s" repeatCount="indefinite"`,r+=` path="${L}"/>`,r+="</circle>"}r+="</g>"}let O=F?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)",B=F?' font-weight="600"':"";r+=`<text x="${b}" y="${(z-1).toFixed(1)}" font-size="11" fill="${k(O)}"${B}>${f(x.name)}</text>`;let V=F?k($):"var(--secondary-text-color, #8e8e93)",Z=F?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`;r+=`<text x="${b}" y="${(z+12).toFixed(1)}" font-size="9" fill="${V}">${f(Z)}</text>`}return r+="</svg>",r+="</div>",r}function ko(t,e,n,o){if(!t||!e||e.length===0)return!1;let i=t.querySelector("svg");if(!i)return!1;let s=[];for(let S of e){let x=S.entity,z=H(x),E=o?.zoneEntities?.[z]||{},F=Y(x,E,n,S,{});s.push({name:F.name,power:F.heatingPower,temp:F.currentTemp,unit:F.unit,hvacAction:F.hvacAction})}let a=i.querySelectorAll("path[data-zone]");if(a.length!==s.length)return!1;let r=pt.heating.fallback,l="var(--disabled-color, #9E9E9E)",c=s.some(S=>S.power>0||S.hvacAction==="heating"||S.hvacAction==="cooling"),d=360,u=s.length<=3?44:s.length<=6?38:34,h=15,p=Math.max(80,s.length*u+30),m=s.length*u,g=Math.max(40,Math.min(m*.7,m-16)),b=Math.max(36,g*.6),v=Math.max(50,b/2+14),_=d-60,y=p/2,w=22,$=2,C=g/Math.max(s.length,1)*.7,A=Math.round(s.reduce((S,x)=>S+x.power,0)/s.length),I=t.querySelector(".section-label + span, div > span");I&&(I.textContent=`${A}% avg`);let M=i.querySelector("rect");M&&(M.setAttribute("fill",c?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)"),M.setAttribute("stroke",c?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)"),M.setAttribute("stroke-width",c?"0.5":"1"));let T=i.querySelectorAll("text");for(let S=0;S<s.length;S++){let x=s[S],z=a[S],E=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",F=h+S*u+20,P=x.power>0?$+x.power/100*(w-$):$,R=y+(S-(s.length-1)/2)*C,N=So(R,F,P/2,P/2,d,v+b/2,_-12);z.setAttribute("d",N),E?(z.classList.add("ribbon-active"),z.setAttribute("filter","url(#flow-glow)")):(z.classList.remove("ribbon-active"),z.removeAttribute("filter"));let O=z.querySelector("title");O&&(O.textContent=`${x.name}: ${Math.round(x.power)}% heating power`);let B=i.querySelector(`g.flow-particles[data-zone="${x.name}"]`);B&&(B.style.display=x.power>0?"":"none");let V=i.querySelector(`#flow-g${S}`);if(V){let W=E?r:l,L=V.querySelectorAll("stop"),D=V.querySelectorAll("animate");if(E){let q=x.power>0?(4.5-x.power/100*3.3).toFixed(1):"5.0";L.length>=3&&(L[0].setAttribute("stop-color",W),L[0].setAttribute("stop-opacity","0.3"),L[1].setAttribute("stop-color",W),L[1].setAttribute("stop-opacity","1.0"),L[2].setAttribute("stop-color",W),L[2].setAttribute("stop-opacity","0.3"));for(let K of D)K.setAttribute("dur",`${q}s`);V.setAttribute("gradientUnits","objectBoundingBox")}else{L.length>=3&&(L[0].setAttribute("stop-color",W),L[0].setAttribute("stop-opacity","0.15"),L[1].setAttribute("stop-color",W),L[1].setAttribute("stop-opacity","0.25"),L[2].setAttribute("stop-color",W),L[2].setAttribute("stop-opacity","0.1"));for(let q of D)q.remove()}}let Z=1+S*2,X=2+S*2,G=T[Z],U=T[X];if(G&&(G.textContent=x.name,G.setAttribute("fill",E?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)"),E?G.setAttribute("font-weight","600"):G.removeAttribute("font-weight")),U){let W=E?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${x.temp}${x.unit}`:""}`;U.textContent=W,U.setAttribute("fill",E?r:"var(--secondary-text-color, #8e8e93)")}}return!0}var Co=6,$e=2;function Se(t,e,n,o,i,s){let a=i*Math.PI/180,r=s*Math.PI/180,l=s-i>180?1:0;return`M${(t+n*Math.cos(a)).toFixed(2)},${(e+n*Math.sin(a)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 1 ${(t+n*Math.cos(r)).toFixed(2)},${(e+n*Math.sin(r)).toFixed(2)} L${(t+o*Math.cos(r)).toFixed(2)},${(e+o*Math.sin(r)).toFixed(2)} A${o.toFixed(2)},${o.toFixed(2)} 0 ${l} 0 ${(t+o*Math.cos(a)).toFixed(2)},${(e+o*Math.sin(a)).toFixed(2)} Z`}function ke(t,e,n,o,i){if(!t||t.length===0)return"";let s=et(),a=Number(e?.size)||280,r=e?.attribute||"temperature",l=r==="temperature"||r==="both",c=r==="humidity"||r==="both",d=a/2,u=a/2,h=a*120/280,p=1.5,b=(360-p*t.length)/t.length,v=[];for(let E of t){let F=E.entity,P=H(F),R=o?.zoneEntities?.[P]||{},N=Y(F,R,n,E,{});v.push({name:N.name,temp:N.currentTemp,target:N.targetTemp,power:N.heatingPower,humidity:N.humidity,hvacAction:N.hvacAction,entityId:F,unit:N.unit})}let _=e?.outdoor_temp_entity,y=_||o?.hubEntities?.outside_temp,w=null;if(y&&n[y]){let E=n[y];E.state!=="unavailable"&&E.state!=="unknown"&&(w=E.attributes?.temperature!==void 0?String(E.attributes.temperature):E.state)}let $=y&&n[y]?.attributes?.unit_of_measurement||"\xB0C",C=e?.outdoor_humidity_entity,A=null;if(C&&n[C]){let E=n[C];E.state!=="unavailable"&&E.state!=="unknown"&&(A=E.attributes?.humidity!==void 0?String(E.attributes.humidity):E.state)}let I="",M=r==="humidity"?A!==null?`${f(A)}%`:"--":w!==null?`${f(w)}${f($)}`:"--";r!=="humidity"&&c&&A!==null&&(I=`${f(A)}%`);let S={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[r]||"Home Thermal View",x=`<div class="section section-radial" data-attribute="${f(r)}"${_?` data-outdoor-temp-entity="${f(_)}"`:""}${C?` data-outdoor-humidity-entity="${f(C)}"`:""}>`;if(x+=`<div class="section-label">${f(S)}</div>`,x+='<div class="radial-container">',x+=`<svg viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" role="img" aria-label="${f(S)}" style="display:block;margin:0 auto">`,x+="<defs>",x+=`<filter id="radial-glow"><feGaussianBlur stdDeviation="${bt(a,280).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`,!s)for(let E=0;E<v.length;E++){let F=v[E],P=ie(F.power,a);if(P<=0)continue;let R=45/Math.max(b,10),N=(.02*R).toFixed(4),O=(.04*R).toFixed(4);x+=`<filter id="heat-shimmer-${E}" x="-5%" y="-5%" width="110%" height="110%">`,x+=`<feTurbulence type="turbulence" baseFrequency="${N} ${O}" numOctaves="2" result="turb">`,x+=`<animate attributeName="baseFrequency" values="${N} ${O};${(parseFloat(N)*1.5).toFixed(4)} ${O};${N} ${O}" dur="4s" repeatCount="indefinite"/>`,x+="</feTurbulence>",x+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${P.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,x+="</filter>"}x+="</defs>";for(let E=0;E<v.length;E++){let F=v[E],P=E*(b+p)-90,R=P+b,N=F.power>0||F.hvacAction==="heating"||F.hvacAction==="cooling",O=N?" arc-active":"",B=[f(F.name)];l&&B.push(F.temp!==null?`${F.temp}${F.unit}`:"--"),c&&F.humidity!==null&&B.push(`${Math.round(F.humidity)}%`),B.push(N?`${F.hvacAction==="cooling"?"Cooling":"Heating"} ${F.power}%`:"Idle");let V=B.join(", ");x+=`<g class="arc-group${O}" data-idx="${E}">`;let Z=c&&r==="both"?h+$e+Co+4:h+4,X=h-28-4,G=Se(d,u,Z,X,P-p/2,R+p/2);if(x+=`<path d="${G}" fill="transparent" class="arc-hit"/>`,l){let U=F.temp!==null?j(F.temp):"var(--disabled-color, #9E9E9E)",W=8+F.power/100*20,L=h-W,D=Se(d,u,h,L,P,R);if(x+=`<path d="${D}" fill="${k(U)}" class="arc-path"`,ie(F.power,a)>0&&!s?x+=` filter="url(#heat-shimmer-${E})"`:N&&(x+=' filter="url(#radial-glow)"'),x+=`><title>${V}</title>`,N&&!s){let K=F.power>0?(4.5-F.power/100*3).toFixed(1):"5.0";x+=`<animate attributeName="opacity" values="1;0.82;1" dur="${K}s" repeatCount="indefinite"/>`}x+="</path>"}if(c&&F.humidity!==null){let U=Ct(F.humidity),W,L;if(r==="both")W=h+$e+Co,L=h+$e;else{let q=8+F.power/100*20;W=h,L=h-q}let D=Se(d,u,W,L,P,R);x+=`<path d="${D}" fill="${k(U)}" class="arc-path" opacity="0.8">`,x+=`<title>${V}</title>`,x+="</path>"}x+="</g>"}x+="</svg>";let z=Math.round((h-28-8)*2);x+=`<div class="center-info" id="radial-center" style="width:${z}px;height:${z}px">`,x+='<div class="center-sheen" id="radial-sheen"></div>',x+=`<div class="center-value">${M}</div>`,x+='<div class="center-label">Outdoor</div>',x+=`<div class="center-sub">${I}</div>`,x+="</div>",x+="</div>",x+='<div class="zone-detail" id="radial-detail"></div>',x+='<div class="radial-legend">';for(let E=0;E<v.length;E++){let F=v[E],P=r==="humidity"?F.humidity!==null?Ct(F.humidity):"var(--disabled-color, #9E9E9E)":F.temp!==null?j(F.temp):"var(--disabled-color, #9E9E9E)",R="";l&&(R+=F.temp!==null?`${F.temp}${F.unit}`:"--"),l&&c&&(R+=" \xB7 "),c&&(R+=F.humidity!==null?`${Math.round(F.humidity)}%`:"--"),x+=`<div class="legend-item" data-idx="${E}">`,x+=`<span class="legend-dot" style="background:${k(P)}"></span>`,x+=`${f(F.name)} <span class="legend-temp">${f(R)}</span>`,x+="</div>"}return x+="</div>",x+="</div>",x}var wn=5,Ao={green:"var(--label-badge-green, #4CAF50)",amber:"var(--label-badge-yellow, #FF9800)",red:"var(--label-badge-red, #F44336)"},$n={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function Sn(t){if(t.length===0)return{label:"All Good",color:"green",detail:"All zones off"};let e=t.filter(s=>s.currentTemp!==null&&s.currentTemp!==void 0&&s.targetTemp!==null&&s.targetTemp!==void 0&&Math.abs(s.currentTemp-s.targetTemp)<=1).length,n=t.length,o=e/n,i=n-e;return o>=.8?{label:"All Good",color:"green",detail:`${e} of ${n} zones at target`}:o>=.4?{label:"Warming Up",color:"amber",detail:`${i} zone${i!==1?"s":""} still catching up`}:{label:"Cold Start",color:"red",detail:`${i} of ${n} zones below target`}}function kn(t){let e=[],n=[],o=[];for(let i of t)i.isUnavailable?o.push(i):i.hvacAction==="off"||!i.targetTemp?n.push(i):e.push(i);return e.sort((i,s)=>{let a=i.currentTemp!==null&&i.currentTemp!==void 0&&i.targetTemp!==null?Math.abs(i.currentTemp-i.targetTemp):0;return(s.currentTemp!==null&&s.currentTemp!==void 0&&s.targetTemp!==null?Math.abs(s.currentTemp-s.targetTemp):0)-a}),n.sort((i,s)=>i.name.localeCompare(s.name)),o.sort((i,s)=>i.name.localeCompare(s.name)),[...e,...n,...o]}function Cn(t){if(t.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let e=t.filter(r=>r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null&&r.targetTemp!==void 0&&Math.abs(r.currentTemp-r.targetTemp)<=1).length,n=t.length,o=(t.reduce((r,l)=>r+(l.currentTemp??0),0)/n).toFixed(1),i=(t.reduce((r,l)=>r+(l.targetTemp??0),0)/n).toFixed(1),s=Math.round(t.reduce((r,l)=>r+l.heatingPower,0)/n),a=t[0].unit||"\xB0C";return{onTarget:`${e}/${n}`,avgActual:`${o}${a}`,avgTarget:`${i}${a}`,avgPower:`${s}%`}}function An(t){let e=f(t.entityId),n=f(t.name),o=f(t.unit||"\xB0C"),i=!t.isUnavailable&&t.hvacAction!=="off"&&t.targetTemp,s,a;if(t.isUnavailable)s='<span class="home-status-actual off">--</span><span class="home-status-arrow">\u2192</span><span class="home-status-target">Unavailable</span>',a='<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div></div><span class="home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">--</span></div>';else if(!i)s=`<span class="home-status-actual off">${t.currentTemp!==null&&t.currentTemp!==void 0?`${f(t.currentTemp)}${o}`:"--"}</span><span class="home-status-arrow"></span><span class="home-status-target">Off</span>`,a='<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div></div><span class="home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">Off</span></div>';else if(s=`<span class="home-status-actual">${t.currentTemp!==null&&t.currentTemp!==void 0?`${f(t.currentTemp)}${o}`:"--"}</span><span class="home-status-arrow">\u2192</span><span class="home-status-target">${f(t.targetTemp)}${o}</span>`,t.currentTemp!==null&&t.currentTemp!==void 0){let l=t.currentTemp-t.targetTemp,c=Math.abs(l),d=Math.min(c/wn,1)*50,u=l<0?`${k(50-d)}%`:"50%",h=`${k(d)}%`,p=c<1?"green":c<=2.5?"amber":"red",m=Ao[p],b=`${l>=0?"+":"\u2212"}${f(c.toFixed(1))}\xB0`;a=`<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div><div class="home-status-bar-fill" style="left:${u};width:${h};background:${k(m)}"></div></div><span class="home-status-delta-text" style="color:${k(m)}">${b}</span></div>`}else a='<div class="home-status-delta"><div class="home-status-bar-track"><div class="home-status-bar-center"></div></div><span class="home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">--</span></div>';return`<div class="home-status-row" role="button" tabindex="0" data-entity="${e}"><span class="home-status-zone-name">${n}</span><div class="home-status-temps">${s}</div>`+a+"</div>"}function Ce(t,e,n){if(!t||t.length===0)return"";let o=t.map(u=>{let h=u.entity,p=H(h),m=n?.zoneEntities?.[p]||{};return Y(h,m,e,u,{})}),i=o.filter(u=>!u.isUnavailable&&u.hvacAction!=="off"&&u.targetTemp),s=Sn(i),a=Ao[s.color],r=$n[s.color],l=kn(o),c=Cn(i),d='<div class="section section-home-status">';d+='<div class="section-label">Home Status</div>',d+='<div class="home-status-hero">',d+=`<ha-icon class="home-status-icon" icon="${f(r)}" style="color:${k(a)}"></ha-icon>`,d+=`<div class="home-status-label" style="color:${k(a)}">${f(s.label)}</div>`,d+=`<div class="home-status-detail">${f(s.detail)}</div>`,d+="</div>",d+='<div class="home-status-zones">';for(let u of l)d+=An(u);return d+="</div>",d+='<div class="home-status-summary">',d+=`<div class="stat"><div class="stat-value">${f(c.onTarget)}</div><div class="stat-label">On Target</div></div>`,d+=`<div class="stat"><div class="stat-value">${f(c.avgActual)}</div><div class="stat-label">Avg Actual</div></div>`,d+=`<div class="stat"><div class="stat-value">${f(c.avgTarget)}</div><div class="stat-label">Avg Target</div></div>`,d+=`<div class="stat"><div class="stat-value">${f(c.avgPower)}</div><div class="stat-label">Avg Power</div></div>`,d+="</div>",d+="</div>",d}var Ae={comfort:"comfort_level"};function Tn(t,e,n,o){if(!(t in Ae))return!0;let i=Ae[t];if(!e||e.length===0)return!1;for(let s of e){let a=H(s.entity),l=(n?.zoneEntities?.[a]||{})[i];if(l&&o[l]&&o[l].state!=="unavailable")return!0}return!1}function To(t,e,n,o){let i=Ae[t];if(!i)return null;let a=(n?.zoneEntities?.[e]||{})[i];if(!a)return null;let r=o[a];if(!r||r.state==="unavailable"||r.state==="unknown")return null;if(t==="comfort"){let c=r.attributes||{},d=parseFloat(c.temperature),u=parseFloat(c.comfort_target);if(!Number.isFinite(d)||!Number.isFinite(u))return null;let h=Math.abs(d-u);return Math.max(0,Math.min(100,Math.round(100-h*10)))}let l=parseFloat(r.state);return Number.isFinite(l)?l:null}function Fo(t,e,n){let o=["power","temp","humidity"];return Tn("comfort",t,e,n)&&o.push("comfort"),o}var Eo="var(--info-color, #5AC8FA)";function Fn(t){return t<=40?"var(--label-badge-green, #4CAF50)":t<=70?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function En(t){return t>=80?"var(--label-badge-green, #4CAF50)":t>=50?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}var Io={power:{label:"Power",unit:"%",max:100,colorFn:Fn},temp:{label:"Temp",unit:null,max:null,colorFn:()=>Eo},humidity:{label:"Humidity",unit:"%",max:100,colorFn:()=>Eo},comfort:{label:"Comfort",unit:"",max:100,colorFn:En}};function In(t,e,n,o,i){if(e.isUnavailable)return null;switch(t){case"power":return e.heatingPower;case"temp":return e.currentTemp;case"humidity":return e.humidity;case"comfort":return To("comfort",n,o,i);default:return null}}function Mn(t,e){let n=t.filter(l=>l!=null);if(n.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let o=(n.reduce((l,c)=>l+c,0)/n.length).toFixed(1),i=Math.max(...n),s=Math.min(...n),a=(i-s).toFixed(1),r=e||"";return{avg:`${o}${r}`,high:`${Number.isInteger(i)?i:i.toFixed(1)}${r}`,low:`${Number.isInteger(s)?s:s.toFixed(1)}${r}`,spread:`${a}${r}`}}function Zt(t,e,n,o="power"){if(!t||t.length===0)return"";let i=Fo(t,n,e),s=i.includes(o)?o:"power",a=Io[s];if(!a)return"";let r=[];for(let m of t){let g=m.entity,b=H(g),v=n?.zoneEntities?.[b]||{},_=Y(g,v,e,m,{}),y=In(s,_,b,n,e);r.push({entityId:g,name:_.name,value:y,unit:_.unit||"\xB0C"})}r.sort((m,g)=>m.value===null&&g.value===null?0:m.value===null?1:g.value===null?-1:g.value-m.value);let l=r.map(m=>m.value).filter(m=>m!==null),c=a.max;c===null&&(c=l.length>0?Math.max(...l,30):30);let d=a.unit!==null?a.unit:r[0]?.unit||"\xB0C",u=`<div class="section section-zone-ranking" data-metric="${f(s)}">`;u+='<div class="ranking-header">',u+='<div class="section-label">Zone Ranking</div>',u+='<div class="ranking-tabs">';for(let m of i){let g=Io[m];if(!g)continue;u+=`<div class="ranking-tab${m===s?" active":""}" data-metric="${f(m)}">${f(g.label)}</div>`}u+="</div></div>",u+='<div class="ranking-list">';for(let m=0;m<r.length;m++){let g=r[m],b=m+1,v=b===1&&g.value!==null?" top":"",_=g.value!==null&&c>0?Math.round(g.value/c*100):0,y=g.value!==null?a.colorFn(g.value):"",w=g.value!==null?`${_}%`:"0%",$;g.value===null?$="--":s==="temp"?$=`${g.value}${g.unit}`:$=`${g.value}${d}`,u+=`<div class="rank-row" role="button" tabindex="0" data-entity="${f(g.entityId)}">`,u+=`<div class="rank-num${v}">${b}</div>`,u+=`<div class="rank-name">${f(g.name)}</div>`,u+=`<div class="rank-bar-track"><div class="rank-bar-fill" style="width:${k(w)};background:${k(y)}"></div></div>`,u+=`<div class="rank-value">${f($)}</div>`,u+="</div>"}u+="</div>";let h=r.map(m=>m.value),p=Mn(h,d);return u+='<div class="ranking-summary">',u+=`<div class="stat"><div class="stat-value">${f(p.avg)}</div><div class="stat-label">Average</div></div>`,u+=`<div class="stat"><div class="stat-value">${f(p.high)}</div><div class="stat-label">Highest</div></div>`,u+=`<div class="stat"><div class="stat-value">${f(p.low)}</div><div class="stat-label">Lowest</div></div>`,u+=`<div class="stat"><div class="stat-value">${f(p.spread)}</div><div class="stat-label">Spread</div></div>`,u+="</div>",u+="</div>",u}var Mo=!1,zn=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),zo=zn?(()=>{let t=new CSSStyleSheet;return t.replaceSync(ne),t})():null,Ln=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut"]),Nn={zones:".section-zones",api:".section-api",graph:".section-graph",bridge:".section-bridge",thermal_strip:".section-thermal-strip",comfort_strip:".section-comfort-strip",homekit:".section-homekit",weather:".section-weather",radial:".section-radial",donut:".section-donut",environment:".section-environment",thermal:".section-thermal",schedule:".section-schedule",energy_flow:".section-energy-flow",home_status:".section-home-status",zone_ranking:".section-zone-ranking"},Te=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_sparklinePathCache=new Map;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=po()}setConfig(e){this._config=no(e),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(e){if(this._hass=e,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let n=Date.now();if(n-this._lastUpdateTime<200)return;this._lastUpdateTime=n;let o=this._hass.states;(this._config._zones||[]).some(s=>o[s.entity]!==this._prevStates[s.entity])&&this._updateZones(),this._updateSections(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;let n=(this._config._zones||[]).map(o=>H(o.entity));if(this._discovery=ao(this._hass.states,n,this._hass.entities),!Mo&&this._discovery.isTadoCE){Mo=!0;let o=Object.entries(this._discovery.hubEntities).map(([i,s])=>`${i}=${s}`);console.info("Pulse Climate: hub discovery \u2014 found:",o.join(", ")),this._discovery.missingHubKeys.length>0&&console.warn("Pulse Climate: hub discovery \u2014 missing:",this._discovery.missingHubKeys.join(", "))}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let e=this._historyCache?.data;if(e)for(let[n,o]of Object.entries(e)){if(!o||o.length<2)continue;let i=rt(o,340,36,48);i&&this._sparklinePathCache.set(n,i)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let e=this._discovery,n=e.hubEntities,o=this._config._zones||[];this._rerenderTargets=[{selector:".section-zones",watchIds:[n.home_state].filter(Boolean),render:()=>{let i=this._config,s=this._hass?.states||{};return le(o,i,s,e,this._historyCache)}},{selector:".section-api",watchIds:[n.api_usage,n.api_limit,n.api_status,n.next_sync,n.token_status].filter(Boolean),render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="api")||{};return ce(n,i,a,this._historyCache)}},{selector:".section-homekit",watchIds:[n.homekit_connected,n.homekit_reads_saved,n.homekit_writes_saved].filter(Boolean),render:()=>{let i=this._hass?.states||{};return pe(n,i,this._historyCache)}},{selector:".section-bridge",watchIds:[n.bridge_connected,n.boiler_flow_temp,n.wc_status,n.wc_target_flow].filter(Boolean),render:()=>{let i=this._hass?.states||{};return de(n,i,this._historyCache)}},{selector:".section-weather",watchIds:[n.outside_temp,n.weather,n.solar_intensity].filter(Boolean),render:()=>{let i=this._hass?.states||{};return ue(n,i,this._historyCache)}},{selector:".section-environment",watchIds:o.flatMap(i=>{let s=H(i.entity),a=e.zoneEntities?.[s]||{};return[a.mold_risk,a.condensation,a.comfort_level,a.surface_temp,a.dew_point].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return he(o,i,e)}},{selector:".section-thermal",watchIds:o.flatMap(i=>{let s=H(i.entity),a=e.zoneEntities?.[s]||{};return[a.heating_rate,a.thermal_inertia,a.preheat_time,a.confidence].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return fe(o,i,e)}},{selector:".section-schedule",watchIds:o.flatMap(i=>{let s=H(i.entity),a=e.zoneEntities?.[s]||{};return[a.next_schedule,a.next_sched_temp,a.schedule_deviation,a.preheat_advisor,a.comfort_target].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return me(o,i,e)}},{selector:".section-radial",watchIds:o.map(i=>i.entity),render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="radial")||{};return ke(o,a,i,e,this._historyCache)}},{selector:".section-donut",watchIds:(()=>{let a=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")?.source;return a==="api_breakdown"&&n.api_breakdown?[n.api_breakdown]:a==="homekit_saved"?[n.homekit_reads_saved,n.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")||{};return _e(a,n,i)}},{selector:".section-graph",watchIds:[],render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="graph")||{};return ve(a,o,this._historyCache,i,e)}},{selector:".section-home-status",watchIds:o.map(i=>i.entity),render:()=>{let i=this._hass?.states||{};return Ce(o,i,e)}},{selector:".section-zone-ranking",watchIds:o.map(i=>i.entity),render:()=>{let i=this._hass?.states||{},a=this._shadow.querySelector(".section-zone-ranking")?.getAttribute("data-metric")||"power";return Zt(o,i,e,a)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,n=this._hass.states,o=this._discovery,i=e._zones||[],s=e.layout==="compact",a=e.entity_row===!0,r="";zo?this._shadow.adoptedStyleSheets=[zo]:r+=`<style>${ne}</style>`,a||(r+=`<ha-card${s?' class="compact"':""}>`),e.title&&(r+=`<div class="pulse-title">${f(e.title)}</div>`);let l=e.sections||[{type:"zones"}];for(let c of l)r+=this._renderSection(c,i,n,o);a||(r+="</ha-card>"),this._shadow.innerHTML=r,this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._elements.apiSection=this._shadow.querySelector(".section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let e=this._shadow.querySelectorAll(".zone-row"),n=this._config._zones||[];for(let o=0;o<e.length&&o<n.length;o++){let i=e[o],s=n[o],a=s.entity,r=i.__pulseCleanup;typeof r=="function"&&r();let l=new AbortController,{signal:c}=l,d=0,u=null,h=null,p=!1;i.__pulseCleanup=()=>{l.abort(),u&&clearTimeout(u),h&&clearTimeout(h),delete i.__pulseCleanup},i.addEventListener("keydown",g=>{let b=g;(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),this._fireAction(a,s,"tap_action"))},{signal:c}),i.addEventListener("click",g=>{if(g.preventDefault(),p){p=!1;return}d++,d===1?u=setTimeout(()=>{d=0,this._fireAction(a,s,"tap_action")},250):d===2&&(u&&clearTimeout(u),d=0,this._fireAction(a,s,"double_tap_action"))},{signal:c}),i.addEventListener("pointerdown",()=>{p=!1,h=setTimeout(()=>{p=!0,this._fireAction(a,s,"hold_action")},500)},{signal:c});let m=()=>{h&&clearTimeout(h)};i.addEventListener("pointerup",m,{signal:c}),i.addEventListener("pointercancel",m,{signal:c}),i.addEventListener("contextmenu",g=>g.preventDefault(),{signal:c}),ot(i)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs()}_bindChipActions(){if(!this._config||!this._hass)return;this._chipAbort&&this._chipAbort.abort(),this._chipAbort=new AbortController;let{signal:e}=this._chipAbort,n=this._config._zones||[],o=this._shadow.querySelectorAll(".zone-row");for(let i=0;i<o.length&&i<n.length;i++){let s=n[i],a=s.entity,r=o[i].querySelectorAll(".chip");for(let l of r){let c=l,d=c.dataset.chipType||"",u=c.dataset.entity||a,h=s.chip_actions,p=this._config.chip_actions,m=h?.[d]||p?.[d]||{},g=m.tap_action||{action:"more-info",entity:u},b=m.hold_action||{action:"none"};c.style.cursor="pointer",ot(c),c.addEventListener("click",_=>{_.stopPropagation(),this._hass&&vt(this,this._hass,g,u,ut)},{signal:e});let v=null;c.addEventListener("pointerdown",_=>{_.stopPropagation(),v=setTimeout(()=>{!this._hass||b.action==="none"||vt(this,this._hass,b,u,ut)},500)},{signal:e}),c.addEventListener("pointerup",_=>{_.stopPropagation(),v&&clearTimeout(v)},{signal:e}),c.addEventListener("pointercancel",()=>{v&&clearTimeout(v)},{signal:e}),c.addEventListener("contextmenu",_=>_.preventDefault(),{signal:e})}}}_bindSectionChipActions(){this._sectionChipAbort&&this._sectionChipAbort.abort(),this._sectionChipAbort=new AbortController;let{signal:e}=this._sectionChipAbort,n=this._shadow.querySelectorAll(".section [data-entity]");for(let o of n){let i=o;i.closest(".zone-row")&&i.classList.contains("chip")||i.classList.contains("zone-row")||(i.style.cursor="pointer",ot(i),i.addEventListener("click",s=>{s.stopPropagation();let a=i.dataset.entity;a&&zt(this,"hass-more-info",{entityId:a})},{signal:e}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let e=this._shadow.querySelector(".chip-next-sync");if(!e)return;let n=Number(e.getAttribute("data-target"));if(!n||!isFinite(n))return;let o=()=>{let i=n-Date.now();if(i<=0){e.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let s=Math.floor(i/6e4),a=Math.floor(i%6e4/1e3);e.textContent=s>0?`Next: ${s}m ${a}s`:`Next: ${a}s`};o(),this._countdownTimer=setInterval(o,1e3)}_bindRadialInteractions(){this._radialAbort&&this._radialAbort.abort(),this._radialAbort=new AbortController;let{signal:e}=this._radialAbort,n=this._shadow.querySelectorAll(".arc-group"),o=this._shadow.querySelectorAll(".radial-legend .legend-item"),i=this._shadow.querySelector("#radial-center"),s=this._shadow.querySelector("#radial-detail"),a=this._shadow.querySelector(".section-radial svg");if(n.length===0||!i)return;let l=(a&&Number(a.getAttribute("width"))||280)/2,c=this._config?._zones||[],d=null,u=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-temp-entity"),h=this._shadow.querySelector(".section-radial")?.getAttribute("data-attribute")||"temperature",p=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-humidity-entity"),m=()=>{let v=this._hass?.states||{},_=this._discovery,y=u||_?.hubEntities?.outside_temp,w="--",$="";if(h!=="humidity"&&y&&v[y]){let C=v[y];C.state!=="unavailable"&&C.state!=="unknown"&&(w=`${C.attributes?.temperature!==void 0?C.attributes.temperature:C.state}${C.attributes?.unit_of_measurement||"\xB0C"}`)}if(p&&v[p]){let C=v[p];if(C.state!=="unavailable"&&C.state!=="unknown"){let A=C.attributes?.humidity!==void 0?C.attributes.humidity:C.state;h==="humidity"?w=`${A}%`:$=`${A}%`}}return{center:w,centerSub:$}},g=v=>{let _=this._hass?.states||{},y=this._discovery;if(d===v){b();return}d=v;let w=c[v];if(!w)return;let $=w.entity,C=H($),A=y?.zoneEntities?.[C]||{},I=St($,_,w),{name:M,temp:T,target:S,humidity:x}=I,z=I.hvacAction,E=0;if(A.heating_power){let V=_[A.heating_power];V&&V.state!=="unavailable"&&(E=parseFloat(V.state)||0)}else _[$]?.attributes?.heating_power!==void 0&&(E=parseFloat(_[$].attributes.heating_power)||0);let P=E>0||z==="heating"||z==="cooling"?`${z==="cooling"?"Cooling":"Heating"} ${Math.round(E)}%`:"Idle",R=i.querySelector(".center-value"),N=i.querySelector(".center-label"),O=i.querySelector(".center-sub");R&&(R.textContent=T!==void 0?`${T}${I.unit}`:"--"),N&&(N.textContent=M);let B=x!==void 0?` \xB7 ${x}%`:"";O&&(O.textContent=`${P}${B}`),n.forEach((V,Z)=>{V.classList.toggle("dimmed",Z!==v),V.classList.toggle("selected",Z===v),Z===v?V.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):V.removeAttribute("transform")}),o.forEach((V,Z)=>{V.classList.toggle("selected",Z===v)}),s&&(s.innerHTML=`<div class="detail-stats">
          <div class="stat"><div class="stat-value">${S!==void 0?f(S)+f(I.unit):"--"}</div><div class="stat-label">Target</div></div>
          <div class="stat"><div class="stat-value">${x!==void 0?f(x)+"%":"--"}</div><div class="stat-label">Humidity</div></div>
          <div class="stat"><div class="stat-value">${f(z)}</div><div class="stat-label">Action</div></div>
        </div>`,s.classList.add("active"))},b=()=>{d=null;let{center:v,centerSub:_}=m(),y=i.querySelector(".center-value"),w=i.querySelector(".center-label"),$=i.querySelector(".center-sub");y&&(y.textContent=v),w&&(w.textContent="Outdoor"),$&&($.textContent=_),n.forEach(C=>{C.classList.remove("dimmed","selected"),C.removeAttribute("transform")}),o.forEach(C=>{C.classList.remove("selected")}),s&&(s.classList.remove("active"),s.innerHTML="")};if(n.forEach((v,_)=>{v.addEventListener("click",()=>g(_),{signal:e})}),o.forEach((v,_)=>{ot(v),v.addEventListener("click",()=>g(_),{signal:e})}),n.length>1&&!et()){let v=!0,_=0,y=1,w=()=>{if(!v||d!==null){setTimeout(w,500);return}let C=n[_];if(!C){setTimeout(w,300);return}if(C.style.filter="brightness(1.8)",C.style.transition="filter 0.3s ease-in",setTimeout(()=>{C.style.filter="",C.style.transition="filter 0.5s ease-out"},250),_+=y,_>=n.length||_<0){_=y>0?0:n.length-1;let A=1e3+Math.random()*2e3;Math.random()<.4&&(y*=-1),setTimeout(w,A)}else{let A=80+Math.random()*170;setTimeout(w,A)}};setTimeout(w,1500);let $=n[0];$&&($.__shimmerStop=()=>{v=!1})}if(!et()){let v=this._shadow.querySelector("#radial-sheen");if(v){let y=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(y?(.299*Number(y[1])+.587*Number(y[2])+.114*Number(y[3]))/255>=.5:!1)?v.classList.add("light-theme"):v.classList.remove("light-theme");let $=!0,C=()=>{if(!$)return;let I=Math.random()>.5,M=I?"-100% 50%":"200% 50%",T=I?"200% 50%":"-100% 50%",S=1.2+Math.random()*1.5;v.style.transition="none",v.style.backgroundPosition=M,v.offsetWidth,v.style.transition=`background-position ${S}s ease-in-out`,v.style.backgroundPosition=T,setTimeout(()=>{let x=4e3+Math.random()*6e3;setTimeout(C,x)},S*1e3)};setTimeout(C,2e3+Math.random()*3e3);let A=n[0];if(A){let I=A.__shimmerStop;A.__shimmerStop=()=>{$=!1,typeof I=="function"&&I()}}}}}_bindTimelineInteractions(){this._timelineAbort&&this._timelineAbort.abort(),this._timelineAbort=new AbortController;let e=this._shadow.querySelectorAll(".section-thermal-strip .timeline-row"),n=this._shadow.querySelector(".section-thermal-strip");if(e.length===0||!n)return;let o=this._config?._zones||[],i=n.querySelector(".section-subtitle"),s="Tap a zone for details",a=this._hass?.states?.[o[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C",r=null,l=null,c=v=>{l=null;let _=v.querySelector(".comparison-path");_&&_.remove();let y=v.querySelector(".comparison-legend");y&&y.remove()};e.forEach((v,_)=>{ot(v),v.addEventListener("click",()=>{let y=this._hass?.states||{},w=this._discovery,$=this._historyCache;if(n.querySelectorAll(".strip-drag-highlight").forEach(L=>{L.style.display="none"}),r!==null&&r!==_){let L=n.querySelector(".zone-detail"),D=L?.querySelector(".detail-sparkline svg");if(L&&D){if(l===_){c(L);return}c(L),l=_;let q=o[_];if(!q)return;let K=q.entity,At=H(K),Fe=w?.zoneEntities?.[At]||{},Ee=q.temperature_entity||Fe.temperature||K,Ie=$?.data?.[Ee]||[];if(Ie.length>=2){let ze=this._sparklinePathCache.get(Ee)||rt(Ie,340,36,48);if(ze){let dt=document.createElementNS("http://www.w3.org/2000/svg","path");dt.setAttribute("d",ze.linePath),dt.setAttribute("fill","none"),dt.setAttribute("stroke","var(--info-color, #4FC3F7)"),dt.setAttribute("stroke-width","1.5"),dt.setAttribute("opacity","0.5"),dt.classList.add("comparison-path"),D.appendChild(dt)}}let Me=o[r],Lo=St(Me?.entity||"",y,Me).name,No=St(K,y,q).name,Tt=document.createElement("div");Tt.className="comparison-legend",Tt.style.cssText="display:flex;gap:12px;font-size:10px;margin-top:4px;color:var(--secondary-text-color,#8e8e93)",Tt.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;margin-right:4px"></span>${f(Lo)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--info-color, #4FC3F7);margin-right:4px"></span>${f(No)}</span>`,L.appendChild(Tt);return}}if(r===_){r=null,l=null,e.forEach(D=>D.classList.remove("selected"));let L=n.querySelector(".zone-detail");L&&L.classList.remove("active"),i&&(i.textContent=s);return}r=_,e.forEach((L,D)=>L.classList.toggle("selected",D===_));let C=o[_];if(!C)return;let A=C.entity,I=y[A]?.attributes||{},M=St(A,y,C),{name:T,temp:S,target:x,humidity:z,hvacAction:E}=M;i&&(i.textContent=T);let F=H(A),P=w?.zoneEntities?.[F]||{},R=C.temperature_entity||P.temperature||A,N=$?.data?.[R]||[],O="";if(N.length>=2){let L=N[N.length-1],D=N[N.length-2],q=L.v-D.v,K=(L.t-D.t)/36e5;if(K>0&&isFinite(q)&&isFinite(K)){let At=q/K;O=`${At>=0?"+":""}${At.toFixed(1)}${M.unit}/hr`}}let B=0;if(P.heating_power){let L=y[P.heating_power];L&&L.state!=="unavailable"&&(B=parseFloat(L.state)||0)}else I.heating_power!==void 0&&(B=parseFloat(I.heating_power)||0);let Z=B>0||E==="heating"||E==="cooling"?`${E==="cooling"?"Cooling":"Heating"} ${Math.round(B)}%`:"Idle",X="";if(N.length>=2){let L=1/0,D=-1/0;for(let q of N)isFinite(q.v)&&(q.v<L&&(L=q.v),q.v>D&&(D=q.v));isFinite(L)&&isFinite(D)&&(X=`${L.toFixed(1)}${M.unit} \u2013 ${D.toFixed(1)}${M.unit} today`)}let G="";if(N.length>=2){let L=E==="heating"?"#FF9800":S!==void 0&&isFinite(Number(S))?j(Number(S)):"var(--primary-text-color)",D=k(L),q=this._sparklinePathCache.get(R)||rt(N,340,36,48);if(q){let K=`tl-detail-grad-${_}`;G=`<div class="detail-sparkline sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${f(K)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${D}" stop-opacity="0.3"/><stop offset="100%" stop-color="${D}" stop-opacity="0"/></linearGradient></defs><path d="${q.areaPath}" fill="url(#${f(K)})" /><path d="${q.linePath}" fill="none" stroke="${D}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let U=n.querySelector(".zone-detail");U||(U=document.createElement("div"),U.className="zone-detail",n.insertBefore(U,n.querySelector(".timeline-row"))),U.innerHTML=`<div class="detail-header"><span class="detail-name">${f(T)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${S!==void 0?f(S)+f(M.unit):"--"}</div><div class="stat-label">Current</div>${O?`<div class="stat-sub">${f(O)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${x!==void 0?f(x)+f(M.unit):"--"}</div><div class="stat-label">Target</div>${Z?`<div class="stat-sub">${f(Z)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${z!==void 0?f(z)+"%":"--"}</div><div class="stat-label">Humidity</div>${X?`<div class="stat-sub">${f(X)}</div>`:""}</div>
          </div>${G}`,U.classList.add("active");let W=U.querySelector(".detail-close");W&&W.addEventListener("click",L=>{L.stopPropagation(),r=null,l=null,e.forEach(D=>D.classList.remove("selected")),U.classList.remove("active"),i&&(i.textContent=s)})})});let d=be(),u=n.querySelector(".strip-rows");u&&(u.style.position="relative",u.appendChild(d.element)),n.querySelectorAll(".strip-container").forEach(v=>{let _=v.getAttribute("data-slots"),y=null;try{_&&(y=JSON.parse(_))}catch{}v.addEventListener("pointermove",w=>{if(w.pointerType==="touch"||!y)return;let $=v.getBoundingClientRect(),C=ct(w.clientX,$,y.length),A=y[C];if(A){let I=A.v!==null?`${A.l}: ${A.v}${a}`:`${A.l}: --`;d.show($,w.clientX-$.left,I)}}),v.addEventListener("pointerleave",()=>d.hide()),v.addEventListener("pointerdown",w=>{if(w.pointerType!=="touch"||!y)return;let $=v.getBoundingClientRect(),C=ct(w.clientX,$,y.length),A=y[C];if(A){let I=A.v!==null?`${A.l}: ${A.v}${a}`:`${A.l}: --`;d.show($,w.clientX-$.left,I),setTimeout(()=>d.hide(),2e3)}})}),n.querySelectorAll(".cells").forEach(v=>{v.addEventListener("pointermove",_=>{if(_.pointerType==="touch")return;let y=_.target?.closest?.(".cell");if(!y){d.hide();return}let w=y.getAttribute("data-hour")||"",$=y.getAttribute("data-score"),C=$?`${w}: ${$}${a}`:`${w}: --`,A=v.getBoundingClientRect();d.show(A,_.clientX-A.left,C)}),v.addEventListener("pointerleave",()=>d.hide()),v.addEventListener("pointerdown",_=>{if(_.pointerType!=="touch")return;let y=_.target?.closest?.(".cell");if(!y)return;let w=y.getAttribute("data-hour")||"",$=y.getAttribute("data-score"),C=$?`${w}: ${$}${a}`:`${w}: --`,A=v.getBoundingClientRect();d.show(A,_.clientX-A.left,C),setTimeout(()=>d.hide(),2e3)})});let m=u?.querySelector(".strip-crosshair"),g=u?.querySelector(".strip-container")||u?.querySelector(".cells");if(u&&m&&g){let v=g.getBoundingClientRect().left-u.getBoundingClientRect().left;ye(u,m,g,v)}n.querySelectorAll(".strip-container, .cells").forEach(v=>{let _=v.getAttribute("data-slots"),y=null;try{_&&(y=JSON.parse(_))}catch{}xe(v,y,d,a)})}_bindHeatmapInteractions(){this._heatmapAbort&&this._heatmapAbort.abort(),this._heatmapAbort=new AbortController;let e=this._shadow.querySelectorAll(".section-comfort-strip .heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(e.length===0||!n)return;let o=null;e.forEach((h,p)=>{ot(h),h.addEventListener("click",()=>{let m=this._shadow.querySelector(".section-comfort-strip");if(m&&m.querySelectorAll(".strip-drag-highlight").forEach(T=>{T.style.display="none"}),o===p){o=null,e.forEach(T=>T.classList.remove("selected")),n.classList.remove("active");return}o=p,e.forEach((T,S)=>T.classList.toggle("selected",S===p));let g=h.querySelectorAll(".cell"),b=[],v=[];if(g.length>0)g.forEach(T=>{let S=T.getAttribute("data-score");S&&(b.push(Number(S)),v.push(T.getAttribute("data-hour")||"--"))});else{let S=h.querySelector(".strip-container")?.getAttribute("data-slots");if(S)try{let x=JSON.parse(S);for(let z of x)z.v!==null&&z.v!==void 0&&(b.push(z.v),v.push(z.l||"--"))}catch{}}if(b.length===0)return;let _=Math.round(b.reduce((T,S)=>T+S,0)/b.length),y=0,w=0;for(let T=1;T<b.length;T++)b[T]>b[y]&&(y=T),b[T]<b[w]&&(w=T);let $=v[y]||"--",C=v[w]||"--",A=_>=80?"#34c759":_>=50?"#ff9f0a":"#ff453a",I=h.querySelector(".zone-label")?.textContent||"";n.innerHTML=`<div class="detail-header"><span class="detail-name">${f(I)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${_}</div><div class="stat-label">Avg Score</div></div>
            <div class="stat"><div class="stat-value">${f($)}</div><div class="stat-label">Best Hour</div></div>
            <div class="stat"><div class="stat-value">${f(C)}</div><div class="stat-label">Worst Hour</div></div>
          </div>
          <div class="detail-bar"><div class="detail-bar-fill" style="width:${_}%;background:${k(A)}"></div></div>`,n.classList.add("active");let M=n.querySelector(".detail-close");M&&M.addEventListener("click",T=>{T.stopPropagation(),o=null,e.forEach(S=>S.classList.remove("selected")),n.classList.remove("active")})})});let i=this._shadow.querySelector(".section-comfort-strip");if(!i)return;let s=be(),a=i.querySelector(".heatmap-body");a&&(a.style.position="relative",a.appendChild(s.element));let r=a?.querySelector(".cells")||a?.querySelector(".strip-container");i.querySelectorAll(".cells").forEach(h=>{h.addEventListener("pointermove",p=>{if(p.pointerType==="touch")return;let m=p.target?.closest?.(".cell");if(!m){s.hide();return}let g=m.getAttribute("data-hour")||"",b=m.getAttribute("data-score"),v=b?`${g}: Score ${b}`:`${g}: --`,_=r?.getBoundingClientRect();_&&s.show(_,p.clientX-_.left,v)}),h.addEventListener("pointerleave",()=>s.hide()),h.addEventListener("pointerdown",p=>{if(p.pointerType!=="touch")return;let m=p.target?.closest?.(".cell");if(!m)return;let g=m.getAttribute("data-hour")||"",b=m.getAttribute("data-score"),v=b?`${g}: Score ${b}`:`${g}: --`,_=r?.getBoundingClientRect();_&&(s.show(_,p.clientX-_.left,v),setTimeout(()=>s.hide(),2e3))})}),i.querySelectorAll(".strip-container").forEach(h=>{let p=h.getAttribute("data-slots"),m=null;try{p&&(m=JSON.parse(p))}catch{}h.addEventListener("pointermove",g=>{if(g.pointerType==="touch"||!m)return;let b=h.getBoundingClientRect(),v=ct(g.clientX,b,m.length),_=m[v];if(_){let y=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;s.show(b,g.clientX-b.left,y)}}),h.addEventListener("pointerleave",()=>s.hide()),h.addEventListener("pointerdown",g=>{if(g.pointerType!=="touch"||!m)return;let b=h.getBoundingClientRect(),v=ct(g.clientX,b,m.length),_=m[v];if(_){let y=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;s.show(b,g.clientX-b.left,y),setTimeout(()=>s.hide(),2e3)}})});let d=a?.querySelector(".strip-crosshair");if(a&&d&&r){let h=r.getBoundingClientRect().left-a.getBoundingClientRect().left;ye(a,d,r,h)}i.querySelectorAll(".cells, .strip-container").forEach(h=>{let p=h.getAttribute("data-slots"),m=null;try{p&&(m=JSON.parse(p))}catch{}xe(h,m,s)})}_bindEnergyFlowInteractions(){this._energyFlowAbort&&this._energyFlowAbort.abort(),this._energyFlowAbort=new AbortController;let{signal:e}=this._energyFlowAbort,n=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),o=this._shadow.querySelector(".section-energy-flow");if(n.length===0||!o)return;let i=null;n.forEach(s=>{s.classList.add("ribbon"),s.addEventListener("click",()=>{let a=s.getAttribute("data-zone");if(a){if(i===a){i=null,n.forEach(r=>r.classList.remove("dimmed"));return}i=a,n.forEach(r=>{r.classList.toggle("dimmed",r.getAttribute("data-zone")!==a)})}},{signal:e})})}_bindSparklineCrosshairs(){this._sparklineAbort&&this._sparklineAbort.abort(),this._sparklineAbort=new AbortController,this._shadow.querySelectorAll(".strip-tooltip-fixed").forEach(o=>o.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(o=>o.remove());let e=this._shadow.querySelectorAll(".section-zones .sparkline-filled, .section-zones .zone-row-pulse");if(e.length===0)return;let n=bo();this._shadow.appendChild(n.element),e.forEach(o=>{let i=o;i.style.position="relative";let s=document.createElement("div");s.className="strip-crosshair sparkline-crosshair",s.style.display="none",s.style.top="0",s.style.bottom="0",i.appendChild(s);let a=i.getAttribute("data-sparkline"),r=null;try{a&&(r=JSON.parse(a))}catch{}i.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let d=i.getBoundingClientRect(),u=c.clientX-d.left;if(!(u<0||u>d.width)&&(s.style.left=`${u}px`,s.style.display="",r)){let h=r.d,p=r.u||"",m=Math.min(h.length-1,Math.floor(u/d.width*h.length)),g=h[m];if(g){let b=g.v!==null?`${g.l}: ${g.v}${p}`:`${g.l}: --`;n.show(d,c.clientX,b)}}}),i.addEventListener("pointerleave",()=>{s.style.display="none",n.hide()});let l=null;i.addEventListener("pointerdown",c=>{if(c.pointerType!=="touch")return;let d=i.getBoundingClientRect(),u=c.clientX-d.left;if(!(u<0||u>d.width)){if(s.style.left=`${u}px`,s.style.display="",r){let h=r.d,p=r.u||"",m=Math.min(h.length-1,Math.floor(u/d.width*h.length)),g=h[m];if(g){let b=g.v!==null?`${g.l}: ${g.v}${p}`:`${g.l}: --`;n.show(d,c.clientX,b)}}l&&clearTimeout(l),l=setTimeout(()=>{s.style.display="none",n.hide(),l=null},2e3)}})})}_bindZoneRankingTabs(){let e=this._shadow.querySelector(".section-zone-ranking");if(!e)return;let n=e.querySelectorAll(".ranking-tab");if(n.length===0)return;let o=this._config?._zones||[],i=this._discovery;if(i)for(let s of n)s.addEventListener("click",()=>{let a=s.dataset.metric;if(!a)return;let r=this._hass?.states||{},l=Zt(o,r,i,a);if(!l)return;let c=document.createElement("template");c.innerHTML=l;let d=c.content.firstElementChild;d&&(e.replaceWith(d),this._bindZoneRankingTabs(),this._bindSectionChipActions())})}_renderSection(e,n,o,i){let s=typeof e=="string"?e:e.type,a=this._config,r=i.hubEntities,l=this._historyCache;switch(s){case"zones":return le(n,a,o,i,l);case"api":return ce(r,o,e,l);case"graph":return ve(e,n,l,o,i);case"donut":return _e(e,r,o);case"bridge":return de(r,o,l);case"homekit":return pe(r,o,l);case"weather":return ue(r,o,l);case"environment":return he(n,o,i);case"thermal":return fe(n,o,i);case"schedule":return me(n,o,i);case"thermal_strip":return yo(n,e,o,i,l);case"comfort_strip":return $o(n,e,o,i,l);case"energy_flow":return we(n,o,i);case"radial":return ke(n,e,o,i,l);case"home_status":return Ce(n,o,i);case"zone_ranking":return Zt(n,o,i);default:return""}}_fireAction(e,n,o){if(!this._hass)return;let i=n[o]||this._config?.[o]||(o==="tap_action"?{action:"more-info"}:{action:"none"});vt(this,this._hass,i,e,ut)}_applyTransitionGlow(e){let n=a=>{a&&(a.classList.add("temp-transitioning"),setTimeout(()=>a.classList.remove("temp-transitioning"),1100))},o=this._shadow.querySelectorAll(".zone-row");o[e]&&n(o[e].querySelector(".power-bar-fill"));let i=this._shadow.querySelectorAll(".zone-row-pulse");n(i[e]||null);let s=this._shadow.querySelectorAll(".arc-group");s[e]&&n(s[e].querySelector(".arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!et()){let e=this._config._zones||[],n=this._hass.states;for(let o=0;o<e.length;o++){let i=e[o].entity,s=this._prevStates[i],a=n[i];if(!s||!a)continue;let r=s.attributes?.current_temperature,l=a.attributes?.current_temperature;r!==void 0&&l!==void 0&&r!==l&&this._applyTransitionGlow(o)}}mo(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let e=this._hass.states,n=this._discovery,o=this._config._zones||[],i=this._rerenderTargets;if(!i)return;let s=new Set;for(let c of i){let d=this._shadow.querySelector(c.selector);if(!d||c.watchIds.length===0||!c.watchIds.some(g=>{let b=e[g],v=this._prevStates[g];return!v||v.state!==b?.state||v.last_updated!==b?.last_updated}))continue;let h=c.render();if(!h)continue;let p=document.createElement("template");p.innerHTML=h;let m=p.content.firstElementChild;m&&(d.replaceWith(m),s.add(c.selector))}let a=new Set([".section-zones",".section-api",".section-bridge",".section-homekit",".section-weather",".section-environment",".section-thermal",".section-schedule",".section-home-status",".section-zone-ranking"]);[...s].some(c=>a.has(c))&&this._bindSectionChipActions(),s.has(".section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._bindZoneActions(),this._bindChipActions()),s.has(".section-api")&&(this._elements.apiSection=this._shadow.querySelector(".section-api"),this._startCountdownTimer()),s.has(".section-radial")&&this._bindRadialInteractions(),s.has(".section-zone-ranking")&&this._bindZoneRankingTabs();let l=this._shadow.querySelector(".section-energy-flow");if(l&&o.some(d=>{let u=H(d.entity),h=n.zoneEntities?.[u]||{};return[d.entity,h.heating_power,h.ac_power].filter(Boolean).some(m=>{let g=e[m],b=this._prevStates[m];return!b||b.state!==g?.state||b.last_updated!==g?.last_updated})})&&!ko(l,o,e,n)){let u=we(o,e,n);if(u){let h=document.createElement("template");h.innerHTML=u;let p=h.content.firstElementChild;p&&(l.replaceWith(p),s.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,n=this._hass.states,o=this._discovery,i=e._zones||[],s=e.sections||[{type:"zones"}],a=[];for(let l of s){let c=typeof l=="string"?l:l.type;if(!Ln.has(c))continue;let d=Nn[c];if(!d)continue;let u=this._shadow.querySelector(d);if(!u)continue;let h=this._renderSection(l,i,n,o);if(!h)continue;let p=document.createElement("template");p.innerHTML=h;let m=p.content.firstElementChild;m&&(u.replaceWith(m),a.push(c))}if(a.length===0)return;a.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),a.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".section-api"),this._startCountdownTimer()),a.includes("radial")&&this._bindRadialInteractions(),a.includes("thermal_strip")&&this._bindTimelineInteractions(),a.includes("comfort_strip")&&this._bindHeatmapInteractions(),a.includes("energy_flow")&&this._bindEnergyFlowInteractions(),a.some(l=>["zones","api","bridge","homekit","weather"].includes(l))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||re(this._historyCache))return;let e=lo();if(re(e)){this._historyCache=e,this._rebuildSparklinePathCache(),Object.values(e.data).filter(r=>r.length>=2).length>0&&this._updateHistorySections();return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let n=this._config._zones||[],o=[],i=this._hass.states;for(let a of n){let r=H(a.entity),l=this._discovery?.zoneEntities?.[r]||{},c=it(a.entity,i,l,a);o.push(c.entityId);let d=at(a.entity,i,l,a);d&&o.push(d.entityId)}if(this._discovery?.hubEntities?.call_history&&o.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&o.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&o.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&o.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&o.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&o.push(this._discovery.hubEntities.outside_temp),o.length===0){this._historyFetchInProgress=!1;return}let s=[...new Set(o.filter(a=>a&&typeof a=="string"&&a.includes(".")))];if(s.length===0){this._historyFetchInProgress=!1;return}try{let a=await It(this._hass,s,24);this._historyCache=uo(this._historyCache,a),this._rebuildSparklinePathCache(),co(a),Object.values(a).filter(l=>l.length>=2).length>0&&this._updateHistorySections()}catch{ut("History fetch failed, using cached data")}finally{this._historyFetchInProgress=!1}}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let e=this._hass.states,n=this._config._zones||[],o=this._discovery.hubEntities,i={};for(let s of n){let a=s.entity;e[a]&&(i[a]=e[a]);let r=H(a),l=this._discovery.zoneEntities?.[r]||{};for(let c of Object.values(l))c&&e[c]&&(i[c]=e[c])}for(let s of Object.values(o))s&&e[s]&&(i[s]=e[s]);this._prevStates=i}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort();let e=this._shadow?.querySelector(".arc-group");e&&typeof e.__shimmerStop=="function"&&e.__shimmerStop();let n=this._shadow?.querySelectorAll(".zone-row")||[];for(let o of n){let i=o.__pulseCleanup;typeof i=="function"&&i()}}connectedCallback(){this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer())}getCardSize(){let e=this._config?._zones?.length||1,n=this._config?.sections?.length||1;return Math.max(1,e+n)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(Ke)}static getStubConfig(e){return{entity:Object.keys(e.states).find(o=>o.startsWith("climate."))||"climate.living_room"}}};customElements.get(Ht)||customElements.define(Ht,Te);window.customCards=window.customCards||[];window.customCards.push({type:Ht,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${Ge} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Gt=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=Le,this._shadow.appendChild(e)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let e=this._shadow.querySelectorAll(".bar-row");for(let n of e)te(n),ee(n)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(e){this._config=Be(e),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(e){if(this._hass=e,!this._config)return;let n=!1;for(let o of this._cfg.entities){let i=e.states[o.entity],s=this._prevStates[o.entity];if(!s||s.state!==i?.state||s.last_updated!==i?.last_updated){n=!0;break}let a=o.target??this._cfg.target;if(typeof a=="string"){let r=e.states[a],l=this._prevStates[`__target__${a}`];if(!l||l.state!==r?.state||l.last_updated!==r?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let e=this._cfg;if(!e)return;let n=e.columns??1,o=n>1?` columns-${n}`:"",i=e.entity_row?" entity-row":"",s=e.layout==="compact"?" compact":"",a=[];n>1&&a.push(`--pulse-columns:${n}`),e.gap!==void 0&&a.push(`--pulse-gap:${k(ft(e.gap))}`),e.font_size!==void 0&&a.push(`--pulse-font-size:${k(ft(e.font_size))}`);let r=a.length>0?` style="${a.join(";")}"`:"",l="";e.title&&(l+=`<div class="pulse-title">${f(e.title)}</div>`),l+=`<div class="pulse-card${o}${i}${s}"${r}>`;for(let h of e.entities)l+=this._renderBarRow(h);l+="</div>";let c=e.entity_row?l:`<ha-card>${l}</ha-card>`,d=this._shadow.querySelector("ha-card, .pulse-card");d&&d.remove();let u=document.createElement("template");u.innerHTML=c,this._shadow.appendChild(u.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let h of e.entities){let p=this._elements.rows?.[h.entity];p&&(p.style.display=Yt(h,this._hass)?"":"none")}}_renderBarRow(e){let n=this._cfg,o=Xt(e,n,this._hass),i=e.positions?.name??n.positions?.name??J.positions.name,s=e.positions?.value??n.positions?.value??J.positions.value,a=e.positions?.icon??n.positions?.icon??J.positions.icon,r=e.positions?.indicator??n.positions?.indicator??J.positions.indicator,c=(e.indicator??n.indicator)?.show===!0&&r==="off"?"outside":r,d=e.animation??{},u=d.speed??n.animation.speed,h=d.effect??n.animation.effect,p=d.state??n.animation.state,m=this._buildIndicatorHtml(e,n,c),g=Jt(e,this._hass),b=this._buildPositionHtml(o,i,s,a,c,m,"outside",g),v=this._buildPositionHtml(o,i,s,a,c,m,"inside",g),_=k(ft(e.height??n.height)),y=k(ft(e.border_radius??n.border_radius)),w=o.color?`background-color:${k(o.color)};`:"",$=h==="charge"&&!o.isUnavailable?" charge":"",C=p==="off"?"transition:none;":"",A=gt(e,n),M=`width:${o.fill*A}%;${C}${w}`,T=this._buildTargetHtml(e,n,o.min,o.max),S=this._buildSparklineHtml(e,n),x=`
      <div class="bar-container" style="height:${_};border-radius:${y};--pulse-animation-speed:${u}s;">
        <div class="bar-track"></div>
        ${S}
        <div class="bar-fill${$}" data-entity="${f(e.entity)}" style="${M}"></div>
        ${T}
        ${v}
      </div>`,z=!!(e.interactive??n.interactive),E=z?`<div class="bar-interactive-row"><div class="bar-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${x}<div class="bar-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:x,F=z?"slider":"progressbar",P=o.isUnavailable?`role="${F}" aria-valuenow="0" aria-valuemin="${o.min}" aria-valuemax="${o.max}" aria-label="${f(o.name)}: Unavailable"`:`role="${F}" aria-valuenow="${o.numValue}" aria-valuemin="${o.min}" aria-valuemax="${o.max}" aria-label="${f(o.name)}: ${f(o.displayValue)}"`,R=o.isUnavailable?" unavailable":"",N=z?" data-interactive":"",O=o.isUnavailable?'data-state="unavailable"':`data-state="${f(o.numValue)}"`,B=o.color?` data-severity-color="${f(o.color)}"`:"";return`<div class="bar-row${R}" data-entity="${f(e.entity)}"${N} ${O}${B} ${P}>${b}${E}</div>`}_buildIndicatorHtml(e,n,o){let i=e.indicator??n.indicator;if(!(i?.show===!0&&o!=="off"))return"";let a=this._indicators[e.entity],r=a?.direction??"neutral",l=i?.show_delta===!0&&!!a,c=this._hass?.states[e.entity],d=mt(e,c),u=Ft(e,n,this._hass),{text:h}=Kt(r,a?.delta??0,l,u,d),p=i?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${r}${p}">${h}</span>`}_buildPositionHtml(e,n,o,i,s,a,r,l){if(n!==r&&o!==r&&i!==r&&s!==r)return"";let d=`<div class="${r==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return i===r&&e.resolvedIcon&&(d+=`<ha-icon class="bar-icon" icon="${f(e.resolvedIcon)}"></ha-icon>`),n===r&&(l?(d+='<div class="bar-name-group">',d+=`<span class="bar-name">${f(e.name)}</span>`,d+=`<span class="bar-secondary">${f(l)}</span>`,d+="</div>"):d+=`<span class="bar-name">${f(e.name)}</span>`),d+='</div><div class="bar-label-right">',o===r&&(d+=`<span class="bar-value">${f(e.displayValue)}</span>`),s===r&&a&&(d+=a),d+="</div></div>",d}_buildTargetHtml(e,n,o,i){let s=e.target??n.target,{value:a,showLabel:r}=Et(s,this._hass);if(a===null)return"";let l=Q((a-o)/(i-o),0,1)*100,c=gt(e,n),d=`left:${l*c}%`,u=r?`<span class="bar-target-label">${f(a)}</span>`:"";return`<div class="bar-target" style="${d}">${u}</div>`}_updateBars(){let e=this._cfg;for(let n of e.entities){let o=Xt(n,e,this._hass),i=gt(n,e),s=this._elements.rows?.[n.entity];if(!s||s.__pulseSliding)continue;let a=Yt(n,this._hass);if(s.style.display=a?"":"none",!a)continue;s.classList.toggle("unavailable",o.isUnavailable);let r=s.querySelector(".bar-fill");if(r){let m=`${o.fill*i}%`;r.style.width=m,r.style.backgroundColor=o.color||"";let g=s.querySelector(".bar-sparkline");g&&(g.style.width=`${i*100}%`);let b=s.querySelector(".bar-icon");b&&o.resolvedIcon&&b.setAttribute("icon",o.resolvedIcon)}let l=s.querySelectorAll(".bar-name");for(let m of l)m.textContent=o.name;let c=s.querySelectorAll(".bar-value");for(let m of c)m.textContent=o.displayValue;let d=s.querySelectorAll(".bar-secondary");if(d.length>0){let m=Jt(n,this._hass);for(let g of d)g.textContent=m}s.setAttribute("aria-valuenow",o.isUnavailable?"0":String(o.numValue)),s.setAttribute("aria-valuemin",String(o.min)),s.setAttribute("aria-valuemax",String(o.max)),s.setAttribute("aria-label",`${f(o.name)}: ${f(o.displayValue)}`),s.setAttribute("data-state",o.isUnavailable?"unavailable":String(o.numValue)),o.color?s.setAttribute("data-severity-color",o.color):s.removeAttribute("data-severity-color");let u=s.querySelector(".bar-target"),h=n.target??e.target,{value:p}=Et(h,this._hass);if(p!==null){let m=Q((p-o.min)/(o.max-o.min),0,1)*100;if(u){u.style.left=`${m*i}%`,u.style.display="";let g=u.querySelector(".bar-target-label");g&&(g.textContent=String(p))}}else u&&(u.style.display="none")}}_scheduleIndicatorFetch(){let e=this._cfg;!e||!e.entities.some(o=>(o.indicator??e.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let e=this._cfg;if(e)try{let n=new Map;for(let i of e.entities)n.set(i.entity,i);let o=new Map;for(let i of e.entities){let s=i.indicator??e.indicator;if(!s?.show)continue;let a=s.period??60;o.has(a)||o.set(a,[]),o.get(a).push({entity:i.entity,icfg:s})}for(let[i,s]of o){let a=s.map(l=>l.entity),r=await Ve(this._hass,a,i);for(let{entity:l,icfg:c}of s){let d=n.get(l),u=this._hass?.states[l],h=d?.attribute?u?.attributes?.[d.attribute]:u?.state,p=Oe(h,r[l]);this._indicators[l]=p;let m=this._elements.rows?.[l];if(!m)continue;let g=m.querySelector(".bar-indicator");if(g&&d){let b=this._hass?.states[l],v=mt(d,b),_=Ft(d,e,this._hass),{text:y}=Kt(p.direction,p.delta,c.show_delta===!0,_,v),w=c.inverted===!0?" inverted":"";g.textContent=y,g.className=`bar-indicator ${p.direction}${w}`}}}}catch(n){tt("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(e,n){let o=e.sparkline??n.sparkline;if(!o)return null;let i=o===!0?{}:o.show?o:null;if(!i)return null;let s=i.hours_to_show??24,a=i.points_per_hour??1;return{hours:s,pointsPerHour:a,slots:Math.max(s*a,2),aggregateFunc:i.aggregate_func??"avg",smoothing:i.smoothing!==!1,strokeWidth:Number(i.line_width??i.stroke_width??1.5)||1.5,color:i.color??null,updateInterval:i.update_interval??300}}_buildSparklineHtml(e,n){let o=this._resolveSparklineConfig(e,n);if(!o)return"";let i=this._sparklineData[e.entity];if(!i||i.length<2)return"";let s=wt(i,200,50,o.slots,o.aggregateFunc,o.smoothing);if(!s)return"";let r=gt(e,n)*100,l=o.color?`color:${k(o.color)};`:"";return`<svg class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="${`width:${r}%;${l}`}"><path d="${s}" fill="none" stroke="currentColor" stroke-width="${o.strokeWidth}" /></svg>`}_scheduleSparklineFetch(){let e=this._cfg;if(!e||!e.entities.some(s=>!!this._resolveSparklineConfig(s,e)))return;let o=300;for(let s of e.entities){let a=this._resolveSparklineConfig(s,e);a&&a.updateInterval<o&&(o=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<o&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let e=this._cfg;if(e)try{let n=new Map;for(let o of e.entities){let i=this._resolveSparklineConfig(o,e);if(!i)continue;let s=i.hours;n.has(s)||n.set(s,[]),n.get(s).push(o.entity)}for(let[o,i]of n){let s=await It(this._hass,i,o);for(let a of i)this._sparklineData[a]=s[a]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){tt("Sparkline fetch failed: %O",n)}}_updateSparklines(){let e=this._cfg;if(e)for(let n of e.entities){let o=this._resolveSparklineConfig(n,e);if(!o)continue;let i=this._elements.rows?.[n.entity];if(!i)continue;let s=this._sparklineData[n.entity];if(!s||s.length<2)continue;let a=wt(s,200,50,o.slots,o.aggregateFunc,o.smoothing);if(!a)continue;let r=i.querySelector(".bar-sparkline"),c=`${gt(n,e)*100}%`;if(r){let d=r.querySelector("path");d&&d.setAttribute("d",a),r.style.width=c}else{let d=i.querySelector(".bar-container");if(!d)continue;let u=o.color?`color:${k(o.color)};`:"",h=`<svg xmlns="http://www.w3.org/2000/svg" class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${c};${u}"><path d="${a}" fill="none" stroke="currentColor" stroke-width="${o.strokeWidth}" /></svg>`,p=new DOMParser().parseFromString(h,"image/svg+xml"),m=document.importNode(p.documentElement,!0),g=d.querySelector(".bar-track");g&&g.nextSibling?d.insertBefore(m,g.nextSibling):d.appendChild(m)}}}_cacheStates(){let e=this._cfg;this._prevStates={};for(let n of e.entities){let o=this._hass?.states[n.entity];o&&(this._prevStates[n.entity]={state:o.state,last_updated:o.last_updated});let i=n.target??e.target;if(typeof i=="string"){let s=this._hass?.states[i];s&&(this._prevStates[`__target__${i}`]={state:s.state,last_updated:s.last_updated})}}}_cacheBarElements(){let e=this._cfg;this._elements.rows={};let n=new Map;for(let i of e.entities)n.set(i.entity,i);let o=this._shadow.querySelectorAll(".bar-row");for(let i of o){let s=i.dataset.entity;if(s){this._elements.rows[s]=i;let a=n.get(s);a&&(je(i,this,this._hass,e,a),(a.interactive??e.interactive)&&Ze(i,this,e,a)),ot(i);for(let r of i.querySelectorAll(".bar-step-btn"))ot(r)}}}getCardSize(){let e=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(e/n)+(this._config?.title?1:0)}getGridOptions(){let e=this._config?.entities?.length||1,n=this._config?.columns||1,o=Math.ceil(e/n);return{columns:12,min_columns:3,rows:Math.max(1,o),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(e){return{entity:Object.keys(e.states).filter(o=>{let i=e.states[o];return o.startsWith("sensor.")&&!isNaN(parseFloat(i.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",Gt);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${Ne} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var ls=Gt;export{ls as default};

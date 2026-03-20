var yt=`
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
`;var vt="0.1.3",$t="Pulse Card:",$={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function wt(n,t,i){n.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:i}))}function Kt(n,t,i,e){if(!(!i||i.action==="none"))switch(i.action){case"more-info":wt(n,"hass-more-info",{entityId:i.entity||e});break;case"navigate":history.pushState(null,"",i.navigation_path),wt(n,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let s=i.service||i.perform_action;if(!s)break;let[o,r]=s.split(".");t.callService(o,r,i.service_data||i.data);break}case"url":i.url_path&&window.open(i.url_path,"_blank","noopener,noreferrer");break}}function Gt(n,t,i){let e=t?.[n],s=i?.[n];return e||s||{action:n==="tap_action"?"more-info":"none"}}function z(n,t,i,e,s){let o=Gt(s,e,i);Kt(n,t,o,e.entity)}function J(n){let t=n.__pulseCleanup;typeof t=="function"&&t()}function xt(n,t,i,e,s){J(n);let o=new AbortController,{signal:r}=o,a=0,l=null,c=null,h=!1;n.__pulseCleanup=()=>{o.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete n.__pulseCleanup},n.setAttribute("tabindex","0"),n.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),i&&z(t,i,e,s,"tap_action"))},{signal:r}),n.addEventListener("click",u=>{if(u.preventDefault(),h){h=!1;return}a++,a===1?l=setTimeout(()=>{a=0,i&&z(t,i,e,s,"tap_action")},250):a===2&&(l&&clearTimeout(l),a=0,i&&z(t,i,e,s,"double_tap_action"))},{signal:r}),n.addEventListener("pointerdown",()=>{h=!1,c=setTimeout(()=>{h=!0,i&&z(t,i,e,s,"hold_action")},500)},{signal:r});let d=()=>{c&&clearTimeout(c)};n.addEventListener("pointerup",d,{signal:r}),n.addEventListener("pointercancel",d,{signal:r}),n.addEventListener("contextmenu",u=>u.preventDefault(),{signal:r})}var B=globalThis,q=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),At=new WeakMap,M=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o,i=this.t;if(q&&t===void 0){let e=i!==void 0&&i.length===1;e&&(t=At.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&At.set(i,t))}return t}toString(){return this.cssText}},St=n=>new M(typeof n=="string"?n:n+"",void 0,Z),Q=(n,...t)=>{let i=n.length===1?n[0]:t.reduce((e,s,o)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new M(i,n,Z)},Et=(n,t)=>{if(q)n.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of t){let e=document.createElement("style"),s=B.litNonce;s!==void 0&&e.setAttribute("nonce",s),e.textContent=i.cssText,n.appendChild(e)}},tt=q?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let i="";for(let e of t.cssRules)i+=e.cssText;return St(i)})(n):n;var{is:Yt,defineProperty:Xt,getOwnPropertyDescriptor:Jt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Qt,getPrototypeOf:te}=Object,W=globalThis,Ct=W.trustedTypes,ee=Ct?Ct.emptyScript:"",ie=W.reactiveElementPolyfillSupport,R=(n,t)=>n,et={toAttribute(n,t){switch(t){case Boolean:n=n?ee:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let i=n;switch(t){case Boolean:i=n!==null;break;case Number:i=n===null?null:Number(n);break;case Object:case Array:try{i=JSON.parse(n)}catch{i=null}}return i}},Lt=(n,t)=>!Yt(n,t),Tt={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Tt){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){let e=Symbol(),s=this.getPropertyDescriptor(t,e,i);s!==void 0&&Xt(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){let{get:s,set:o}=Jt(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get:s,set(r){let a=s?.call(this);o?.call(this,r),this.requestUpdate(t,a,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Tt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let t=te(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let i=this.properties,e=[...Zt(i),...Qt(i)];for(let s of e)this.createProperty(s,i[s])}let t=this[Symbol.metadata];if(t!==null){let i=litPropertyMetadata.get(t);if(i!==void 0)for(let[e,s]of i)this.elementProperties.set(e,s)}this._$Eh=new Map;for(let[i,e]of this.elementProperties){let s=this._$Eu(i,e);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let e=new Set(t.flat(1/0).reverse());for(let s of e)i.unshift(tt(s))}else t!==void 0&&i.push(tt(t));return i}static _$Eu(t,i){let e=i.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,i=this.constructor.elementProperties;for(let e of i.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Et(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$ET(t,i){let e=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,e);if(s!==void 0&&e.reflect===!0){let o=(e.converter?.toAttribute!==void 0?e.converter:et).toAttribute(i,e.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,i){let e=this.constructor,s=e._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=e.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:et;this._$Em=s;let a=r.fromAttribute(i,o.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,i,e,s=!1,o){if(t!==void 0){let r=this.constructor;if(s===!1&&(o=this[t]),e??=r.getPropertyOptions(t),!((e.hasChanged??Lt)(o,i)||e.useDefault&&e.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,e))))return;this.C(t,i,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:e,reflect:s,wrapped:o},r){e&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??i??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||e||(i=void 0),this._$AL.set(t,i)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[s,o]of e){let{wrapped:r}=o,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,o,a)}}let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(i)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[R("elementProperties")]=new Map,A[R("finalized")]=new Map,ie?.({ReactiveElement:A}),(W.reactiveElementVersions??=[]).push("2.1.2");var lt=globalThis,Pt=n=>n,K=lt.trustedTypes,kt=K?K.createPolicy("lit-html",{createHTML:n=>n}):void 0,Rt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+S,se=`<${It}>`,P=document,D=()=>P.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",ct=Array.isArray,ne=n=>ct(n)||typeof n?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,Ht=/>/g,T=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Ut=/"/g,Dt=/^(?:script|style|textarea|title)$/i,dt=n=>(t,...i)=>({_$litType$:n,strings:t,values:i}),ht=dt(1),Se=dt(2),Ee=dt(3),k=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Mt=new WeakMap,L=P.createTreeWalker(P,129);function Vt(n,t){if(!ct(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}var oe=(n,t)=>{let i=n.length-1,e=[],s,o=t===2?"<svg>":t===3?"<math>":"",r=I;for(let a=0;a<i;a++){let l=n[a],c,h,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,h=r.exec(l),h!==null);)u=r.lastIndex,r===I?h[1]==="!--"?r=Nt:h[1]!==void 0?r=Ht:h[2]!==void 0?(Dt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=T):h[3]!==void 0&&(r=T):r===T?h[0]===">"?(r=s??I,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?T:h[3]==='"'?Ut:Ot):r===Ut||r===Ot?r=T:r===Nt||r===Ht?r=I:(r=T,s=void 0);let p=r===T&&n[a+1].startsWith("/>")?" ":"";o+=r===I?l+se:d>=0?(e.push(c),l.slice(0,d)+Rt+l.slice(d)+S+p):l+S+(d===-2?a:p)}return[Vt(n,o+(n[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),e]},F=class n{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,r=0,a=t.length-1,l=this.parts,[c,h]=oe(t,i);if(this.el=n.createElement(c,e),L.currentNode=this.el.content,i===2||i===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=L.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Rt)){let u=h[r++],p=s.getAttribute(d).split(S),_=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:_[2],strings:p,ctor:_[1]==="."?nt:_[1]==="?"?ot:_[1]==="@"?rt:O}),s.removeAttribute(d)}else d.startsWith(S)&&(l.push({type:6,index:o}),s.removeAttribute(d));if(Dt.test(s.tagName)){let d=s.textContent.split(S),u=d.length-1;if(u>0){s.textContent=K?K.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],D()),L.nextNode(),l.push({type:2,index:++o});s.append(d[u],D())}}}else if(s.nodeType===8)if(s.data===It)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(S,d+1))!==-1;)l.push({type:7,index:o}),d+=S.length-1}o++}}static createElement(t,i){let e=P.createElement("template");return e.innerHTML=t,e}};function H(n,t,i=n,e){if(t===k)return t;let s=e!==void 0?i._$Co?.[e]:i._$Cl,o=V(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,i,e)),e!==void 0?(i._$Co??=[])[e]=s:i._$Cl=s),s!==void 0&&(t=H(n,s._$AS(n,t.values),s,e)),t}var st=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:i},parts:e}=this._$AD,s=(t?.creationScope??P).importNode(i,!0);L.currentNode=s;let o=L.nextNode(),r=0,a=0,l=e[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new j(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new at(o,this,t)),this._$AV.push(c),l=e[++a]}r!==l?.index&&(o=L.nextNode(),r++)}return L.currentNode=P,s}p(t){let i=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}},j=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,e,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=H(this,t,i),V(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ne(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){let{values:i,_$litType$:e}=t,s=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=F.createElement(Vt(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===s)this._$AH.p(i);else{let o=new st(s,this),r=o.u(this.options);o.p(i),this.T(r),this._$AH=o}}_$AC(t){let i=Mt.get(t.strings);return i===void 0&&Mt.set(t.strings,i=new F(t)),i}k(t){ct(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,e,s=0;for(let o of t)s===i.length?i.push(e=new n(this.O(D()),this.O(D()),this,this.options)):e=i[s],e._$AI(o),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){let e=Pt(t).nextSibling;Pt(t).remove(),t=e}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,s,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=f}_$AI(t,i=this,e,s){let o=this.strings,r=!1;if(o===void 0)t=H(this,t,i,0),r=!V(t)||t!==this._$AH&&t!==k,r&&(this._$AH=t);else{let a=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=H(this,a[e+l],i,l),c===k&&(c=this._$AH[l]),r||=!V(c)||c!==this._$AH[l],c===f?t=f:t!==f&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},nt=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},ot=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},rt=class extends O{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){if((t=H(this,t,i,0)??f)===k)return;let e=this._$AH,s=t===f&&e!==f||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==f&&(e===f||s);s&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}};var re=lt.litHtmlPolyfillSupport;re?.(F,j),(lt.litHtmlVersions??=[]).push("3.3.2");var Ft=(n,t,i)=>{let e=i?.renderBefore??t,s=e._$litPart$;if(s===void 0){let o=i?.renderBefore??null;e._$litPart$=s=new j(t.insertBefore(D(),o),o,void 0,i??{})}return s._$AI(n),s};var ut=globalThis,E=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ft(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};E._$litElement$=!0,E.finalized=!0,ut.litElementHydrateSupport?.({LitElement:E});var ae=ut.litElementPolyfillSupport;ae?.({LitElement:E});(ut.litElementVersions??=[]).push("4.2.2");var G=[{value:"outside",label:"Outside"},{value:"inside",label:"Inside"},{value:"off",label:"Off"}],le=[{name:"title",label:"Title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"height",label:"Height",selector:{text:{}}},{name:"border_radius",label:"Border Radius",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"color",label:"Color",selector:{text:{}}},{name:"decimal",label:"Decimals",selector:{number:{min:0,max:6,mode:"box"}}}]}],ce=[{name:"",type:"grid",schema:[{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"gap",label:"Gap",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"min",label:"Min",selector:{number:{mode:"box"}}},{name:"max",label:"Max",selector:{number:{mode:"box"}}}]},{name:"target_value",label:"Target",selector:{text:{}}}],de=[{name:"",type:"grid",schema:[{name:"pos_name",label:"Name",selector:{select:{options:G,mode:"dropdown"}}},{name:"pos_value",label:"Value",selector:{select:{options:G,mode:"dropdown"}}}]},{name:"",type:"grid",schema:[{name:"pos_icon",label:"Icon",selector:{select:{options:G,mode:"dropdown"}}},{name:"pos_indicator",label:"Indicator",selector:{select:{options:G,mode:"dropdown"}}}]},{name:"",type:"grid",schema:[{name:"indicator_period",label:"Lookback (min)",selector:{number:{min:1,max:1440,mode:"box"}}},{name:"show_delta",label:"Show Change Amount",selector:{boolean:{}}}]},{name:"",type:"grid",schema:[{name:"anim_effect",label:"Effect",selector:{select:{options:[{value:"none",label:"None"},{value:"charge",label:"Charge"}],mode:"dropdown"}}},{name:"anim_speed",label:"Speed (s)",selector:{number:{min:0,max:5,step:.1,mode:"box"}}}]}],pt=class extends E{static get properties(){return{hass:{attribute:!1},_config:{state:!0},_helpers:{state:!0}}}async connectedCallback(){if(super.connectedCallback(),!this._helpers&&window.loadCardHelpers)try{let t=await window.loadCardHelpers();this._helpers=t,(await t.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement()}catch{}}setConfig(t){this._config=t}_getEntities(){let t=this._config;return t.entities?t.entities.map(i=>typeof i=="string"?{entity:i}:{...i}):t.entity?[{entity:t.entity}]:[]}_fireConfigChanged(t){this._config=t;let i=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}_entityChanged(t,i){let e=i.detail.value,s=this._getEntities();e===""||e===void 0?s.splice(t,1):s[t]={...s[t],entity:e},this._updateEntities(s)}_removeEntity(t){let i=this._getEntities();i.splice(t,1),this._updateEntities(i)}_addEntity(t){let i=t.detail.value;if(!i)return;let e=this._getEntities();e.push({entity:i}),t.target.value="",this._updateEntities(e)}_updateEntities(t){let i={...this._config},e=this._config;t.length<=1&&!e.entities?(i.entity=t[0]?.entity||"",delete i.entities):(i.entities=t,delete i.entity),this._fireConfigChanged(i)}_settingsChanged(t){t.stopPropagation();let i=t.detail.value,e={...this._config},s=["title","height","border_radius","color","columns","gap","min","max"];for(let m of s){let y=i[m];y==null||y===""?delete e[m]:e[m]=y}let o=i.decimal;o!=null&&o!==""?e.decimal=o:delete e.decimal;let r=["complementary","limit_value","entity_row"];for(let m of r)i[m]===!0?e[m]=!0:i[m]===!1&&delete e[m];let a=i.target_value;if(a!=null&&a!==""){let m=parseFloat(a),y=isNaN(m)?a:m,w=this._config?.target;typeof w=="object"&&w!==null?e.target={...w,value:y}:e.target=y}else delete e.target;let l={pos_name:"name",pos_value:"value",pos_icon:"icon",pos_indicator:"indicator"},c={...e.positions||{}},h=!1;for(let[m,y]of Object.entries(l)){let w=i[m];w&&w!==""?(c[y]=w,h=!0):delete c[y]}h&&Object.keys(c).length>0?e.positions=c:delete e.positions;let d=i.anim_effect,u=i.anim_speed,p={...e.animation||{}};d&&d!=="none"?p.effect=d:delete p.effect,u!=null&&u!==""?p.speed=u:delete p.speed,Object.keys(p).length>0?e.animation=p:delete e.animation;let _=i.pos_indicator,v=i.indicator_period,N=i.show_delta,g={...e.indicator||{}};_&&_!=="off"?g.show=!0:delete g.show,v!=null&&v!==""?g.period=v:delete g.period,N===!0?g.show_delta=!0:delete g.show_delta,Object.keys(g).length>0?e.indicator=g:delete e.indicator,this._fireConfigChanged(e)}_computeLabel(t){return t.label||t.name||""}render(){let t=this.hass;if(!t||!this._config)return f;let i=this._getEntities(),e=this._config.target,s="";e!=null&&(typeof e=="object"&&e.value!==void 0?s=String(e.value):s=String(e));let o={title:this._config.title||"",height:this._config.height||"",border_radius:this._config.border_radius||"",color:this._config.color||"",decimal:this._config.decimal??"",columns:this._config.columns||1,gap:this._config.gap||"",target_value:s,min:this._config.min??"",max:this._config.max??"",pos_name:this._config.positions?.name??"outside",pos_value:this._config.positions?.value??"outside",pos_icon:this._config.positions?.icon??"off",pos_indicator:this._config.positions?.indicator??"off",indicator_period:this._config.indicator?.period??"",show_delta:this._config.indicator?.show_delta||!1,anim_effect:this._config.animation?.effect??"none",anim_speed:this._config.animation?.speed??""};return ht`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${i.map((r,a)=>ht`
              <div class="entity-row">
                <ha-entity-picker
                  .hass=${t}
                  .value=${r.entity}
                  .index=${a}
                  allow-custom-entity
                  @value-changed=${l=>this._entityChanged(a,l)}
                ></ha-entity-picker>
                <ha-icon-button
                  .label=${"Remove"}
                  .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                  class="remove-icon"
                  @click=${()=>this._removeEntity(a)}
                ></ha-icon-button>
              </div>
            `)}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${t}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${le}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Layout</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${ce}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Display</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${de}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `}static get styles(){return Q`
      .editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--primary-text-color);
      }
      h3:first-child {
        margin-top: 0;
      }
      .entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .entity-row {
        display: flex;
        align-items: center;
      }
      .entity-row ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
    `}};customElements.get("pulse-card-editor")||customElements.define("pulse-card-editor",pt);function U(n,t,i){return Math.min(Math.max(n,t),i)}function he(n,t,i,e=!1){let s=parseFloat(n);if(isNaN(s))return 0;let o=i-t;if(o<=0)return 0;let r=e?i-s:s;return U((r-t)/o,0,1)*100}function ue(n,t){if(!t||t.length===0)return null;let i=parseFloat(n);if(isNaN(i))return null;for(let e of t)if(i>=e.from&&i<=e.to)return e;return null}function jt(n){let t=n.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function pe(n,t,i){let e=jt(n),s=jt(t),o=Math.round(e.r+(s.r-e.r)*i),r=Math.round(e.g+(s.g-e.g)*i),a=Math.round(e.b+(s.b-e.b)*i);return`rgb(${o}, ${r}, ${a})`}function fe(n,t){if(!t||t.length<2)return null;let i=parseFloat(n);if(isNaN(i))return null;let e=t[0].from<=t[t.length-1].from?t:[...t].sort((s,o)=>s.from-o.from);for(let s=0;s<e.length-1;s++){let o=e[s],r=e[s+1];if(i>=o.from&&i<=r.to){let a=r.from-o.from,l=a>0?(i-o.from)/a:0;return pe(o.color,r.color,U(l,0,1))}}return i<=e[0].from?e[0].color:e[e.length-1].color}function me(n,t){let i=n.min,e=n.max;return i==null&&(i=t?.attributes?.min??$.min),e==null&&(e=t?.attributes?.max??$.max),{min:parseFloat(String(i)),max:parseFloat(String(e))}}function _e(n,t,i){let e=parseFloat(n);if(isNaN(e))return String(n);let s=t!=null?e.toFixed(t):e.toString();return i?`${s}${i}`:s}function zt(n,t){if(t==null)return{direction:"neutral",delta:0};let i=parseFloat(n),e=parseFloat(t);if(isNaN(i)||isNaN(e))return{direction:"neutral",delta:0};let s=Math.round((i-e)*100)/100;return{direction:s>0?"up":s<0?"down":"neutral",delta:s}}function mt(n,...t){console.warn(`${$t} ${n}`,...t)}async function Bt(n,t,i=60){let e={};if(!n?.callWS||t.length===0)return e;let s=new Date,o=new Date(s.getTime()-i*60*1e3);try{let r=await n.callWS({type:"history/history_during_period",start_time:o.toISOString(),end_time:s.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let a of t){let l=r?.[a];if(!l||l.length===0){e[a]=null;continue}let c=parseFloat(l[0].s);e[a]=isNaN(c)?null:c}}catch(r){mt("Failed to fetch history for %s: %O",t.join(", "),r);for(let a of t)e[a]=null}return e}function Y(n){if(n==null||n==="")return"";let t=String(n);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function b(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ft(n){return!Array.isArray(n)||n.length<2?n:[...n].sort((t,i)=>t.from-i.from)}function qt(n){if(!n)throw new Error("Please define an entity or entities");if(!n.entity&&!n.entities)throw new Error("Please define an entity or entities");let t={...$,...n,animation:{...$.animation,...n.animation},positions:{...$.positions,...n.positions}};return t.severity&&(t.severity=ft(t.severity)),t.entities=n.entities?n.entities.map(i=>{let e=typeof i=="string"?{entity:i}:{...i};return e.severity&&(e.severity=ft(e.severity)),e}):[{entity:n.entity,...n}],t.entities.length===1&&t.entities[0].severity&&(t.entities[0].severity=ft(t.entities[0].severity)),t}function _t(n,t,i){let e=i?.states[n.entity],s=!e||e.state==="unavailable"||e.state==="unknown",{min:o,max:r}=me(n,e),a=n.attribute?e?.attributes?.[n.attribute]:e?.state,l=parseFloat(a),c=n.complementary??t.complementary,h=s?0:he(a,o,r,c),d=n.unit_of_measurement??e?.attributes?.unit_of_measurement??"",u=n.decimal??t.decimal??null,_=(n.limit_value??t.limit_value)&&!isNaN(l)?U(l,o,r):a,v=s?"Unavailable":_e(_,u,d),N=n.name??e?.attributes?.friendly_name??n.entity,g="",m="";if(!s){let C=n.severity??t.severity;if(C&&C.length>0)if(C.some(x=>x.mode==="gradient")){let x=fe(l,C);x&&(g=x)}else{let x=ue(l,C);x&&(g=x.color,x.icon&&(m=x.icon))}}let y=g||n.color||t.color||"",w=n.icon||e?.attributes?.icon||"";return{isUnavailable:s,min:o,max:r,numValue:l,fill:h,displayValue:v,name:N,color:y,resolvedIcon:m||w}}var X=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=yt,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let i of t)J(i)}setConfig(t){this._config=qt(t),this._elements={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let i=!1;for(let e of this._cfg.entities){let s=t.states[e.entity],o=this._prevStates[e.entity];if(!o||o.state!==s?.state||o.last_updated!==s?.last_updated){i=!0;break}let r=e.target??this._cfg.target;if(typeof r=="string"){let a=t.states[r],l=this._prevStates[`__target__${r}`];if(!l||l.state!==a?.state||l.last_updated!==a?.last_updated){i=!0;break}}}i&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch())}_fullRender(){let t=this._cfg;if(!t)return;let i=t.columns??1,e=i>1?` columns-${i}`:"",s=t.entity_row?" entity-row":"",o=t.gap,r="";if(i>1||o!==void 0){let u=[];i>1&&u.push(`--pulse-columns:${i}`),o!==void 0&&u.push(`--pulse-gap:${Y(o)}`),r=` style="${u.join(";")}"`}let a=r,l="";t.title&&(l+=`<div class="pulse-title">${b(t.title)}</div>`),l+=`<div class="pulse-card${e}${s}"${a}>`;for(let u of t.entities)l+=this._renderBarRow(u);l+="</div>";let c=t.entity_row?l:`<ha-card>${l}</ha-card>`,h=this._shadow.querySelector("ha-card, .pulse-card");h&&h.remove();let d=document.createElement("template");d.innerHTML=c,this._shadow.appendChild(d.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements()}_renderBarRow(t){let i=this._cfg,e=_t(t,i,this._hass),s=t.positions?.name??i.positions?.name??"outside",o=t.positions?.value??i.positions?.value??"outside",r=t.positions?.icon??i.positions?.icon??"off",a=t.positions?.indicator??i.positions?.indicator??"off",c=(t.indicator??i.indicator)?.show===!0&&a==="off"?"outside":a,h=t.animation??{},d=h.speed??i.animation?.speed??$.animation.speed,u=h.effect??i.animation?.effect??$.animation.effect,p=h.state??i.animation?.state??$.animation.state,_=this._buildIndicatorHtml(t,i,c),v=this._buildLabelsHtml(e,s,o,r,c,_),N=this._buildContentHtml(e,s,o,r,c,_),g=Y(t.height??i.height??$.height),m=Y(t.border_radius??i.border_radius??$.border_radius),y=e.color?`background-color:${e.color};`:"",w=u==="charge"&&!e.isUnavailable?" charge":"",gt=p==="off"?"transition:none;":"",C=`width:${e.fill}%;${gt}${y}`,bt=this._buildTargetHtml(t,i,e.min,e.max),x=`
      <div class="bar-container" style="height:${g};border-radius:${m};--pulse-animation-speed:${d}s;">
        <div class="bar-track"></div>
        <div class="bar-fill${w}" data-entity="${b(t.entity)}" style="${C}"></div>
        ${bt}
        ${N}
      </div>`,Wt=e.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${e.numValue}" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: ${b(e.displayValue)}"`;return`<div class="bar-row${e.isUnavailable?" unavailable":""}" data-entity="${b(t.entity)}" ${Wt}>${v}${x}</div>`}_buildIndicatorHtml(t,i,e){let s=t.indicator??i.indicator;if(!(s?.show===!0&&e!=="off"))return"";let r=this._indicators[t.entity],a=r?.direction??"neutral",l=a==="up"?"\u25B2":a==="down"?"\u25BC":"\u25B6",h=s?.show_delta===!0&&r?` ${r.delta>0?"+":""}${r.delta}`:"";return`<span class="bar-indicator ${a}">${l}${h}</span>`}_buildLabelsHtml(t,i,e,s,o,r){if(i!=="outside"&&e!=="outside"&&s!=="outside"&&o!=="outside")return"";let a='<div class="bar-labels"><div class="bar-label-left">';return s==="outside"&&t.resolvedIcon&&(a+=`<ha-icon class="bar-icon" icon="${b(t.resolvedIcon)}"></ha-icon>`),i==="outside"&&(a+=`<span class="bar-name">${b(t.name)}</span>`),a+='</div><div class="bar-label-right">',e==="outside"&&(a+=`<span class="bar-value">${b(t.displayValue)}</span>`),o==="outside"&&r&&(a+=r),a+="</div></div>",a}_buildContentHtml(t,i,e,s,o,r){if(i!=="inside"&&e!=="inside"&&s!=="inside"&&o!=="inside")return"";let a='<div class="bar-content">';return s==="inside"&&t.resolvedIcon&&(a+=`<ha-icon class="bar-icon" icon="${b(t.resolvedIcon)}"></ha-icon>`),i==="inside"&&(a+=`<span class="bar-name">${b(t.name)}</span>`),e==="inside"&&(a+=`<span class="bar-value">${b(t.displayValue)}</span>`),o==="inside"&&r&&(a+=r),a+="</div>",a}_buildTargetHtml(t,i,e,s){let o=t.target??i.target,r=this._resolveTargetValue(o);if(r===null)return"";let l=`left:${U((r-e)/(s-e),0,1)*100}%`,c=this._shouldShowTargetLabel(o),h=c?`<span class="bar-target-label">${b(r)}</span>`:"";return`<div class="bar-target${c?" show-label":""}" style="${l}">${h}</div>`}_updateBars(){let t=this._cfg;for(let i of t.entities){let e=_t(i,t,this._hass),s=this._elements.rows?.[i.entity];if(!s)continue;s.classList.toggle("unavailable",e.isUnavailable);let o=s.querySelector(".bar-fill");if(o){o.style.width=`${e.fill}%`,o.style.backgroundColor=e.color||"";let d=s.querySelector(".bar-icon");d&&e.resolvedIcon&&d.setAttribute("icon",e.resolvedIcon)}let r=s.querySelectorAll(".bar-name");for(let d of r)d.textContent=e.name;let a=s.querySelectorAll(".bar-value");for(let d of a)d.textContent=e.displayValue;s.setAttribute("aria-valuenow",e.isUnavailable?"0":String(e.numValue)),s.setAttribute("aria-valuemin",String(e.min)),s.setAttribute("aria-valuemax",String(e.max)),s.setAttribute("aria-label",`${b(e.name)}: ${b(e.displayValue)}`);let l=s.querySelector(".bar-target"),c=i.target??t.target,h=this._resolveTargetValue(c);if(h!==null){let d=U((h-e.min)/(e.max-e.min),0,1)*100;if(l){l.style.left=`${d}%`,l.style.display="";let u=l.querySelector(".bar-target-label");u&&(u.textContent=String(h))}}else l&&(l.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(e=>(e.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let i=new Map;for(let e of t.entities){let s=e.indicator??t.indicator;if(!s?.show)continue;let o=s.period??60;i.has(o)||i.set(o,[]),i.get(o).push({entity:e.entity,icfg:s})}for(let[e,s]of i){let o=s.map(a=>a.entity),r=await Bt(this._hass,o,e);for(let{entity:a,icfg:l}of s){let c=t.entities.find(v=>v.entity===a),h=this._hass?.states[a],d=c?.attribute?h?.attributes?.[c.attribute]:h?.state,u=zt(d,r[a]);this._indicators[a]=u;let p=this._elements.rows?.[a];if(!p)continue;let _=p.querySelector(".bar-indicator");if(_){let v=u.direction==="up"?"\u25B2":u.direction==="down"?"\u25BC":"\u25B6",g=l.show_delta===!0?` ${u.delta>0?"+":""}${u.delta}`:"";_.textContent=`${v}${g}`,_.className=`bar-indicator ${u.direction}`}}}}catch(i){mt("Indicator fetch failed: %O",i)}}_resolveTargetValue(t){if(t==null)return null;if(typeof t=="number")return isNaN(t)?null:t;if(typeof t=="string"){let i=this._hass?.states[t];if(!i)return null;let e=parseFloat(i.state);return isNaN(e)?null:e}return typeof t=="object"&&t.value!==void 0?this._resolveTargetValue(t.value):null}_shouldShowTargetLabel(t){return typeof t=="object"&&t!==null?t.show_label===!0:!1}_cacheStates(){let t=this._cfg;this._prevStates={};for(let i of t.entities){let e=this._hass?.states[i.entity];e&&(this._prevStates[i.entity]={state:e.state,last_updated:e.last_updated});let s=i.target??t.target;if(typeof s=="string"){let o=this._hass?.states[s];o&&(this._prevStates[`__target__${s}`]={state:o.state,last_updated:o.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let i=this._shadow.querySelectorAll(".bar-row");for(let e of i){let s=e.dataset.entity;if(s){this._elements.rows[s]=e;let o=t.entities.find(r=>r.entity===s);o&&xt(e,this,this._hass,t,o)}}}getCardSize(){let t=this._config?.entities?.length||1,i=this._config?.columns||1;return Math.ceil(t/i)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,i=this._config?.columns||1,e=Math.ceil(t/i);return{columns:12,min_columns:3,rows:Math.max(1,e),min_rows:1}}static getConfigElement(){return document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(e=>{let s=t.states[e];return e.startsWith("sensor.")&&!isNaN(parseFloat(s.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",X);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${vt} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Ge=X;export{Ge as default};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/

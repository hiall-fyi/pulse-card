var gt=`
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
`;var bt="Pulse Card:",_={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function yt(n,t,e){n.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}function jt(n,t,e,i){if(!(!e||e.action==="none"))switch(e.action){case"more-info":yt(n,"hass-more-info",{entityId:e.entity||i});break;case"navigate":history.pushState(null,"",e.navigation_path),yt(n,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let s=e.service||e.perform_action;if(!s)break;let[o,r]=s.split(".");t.callService(o,r,e.service_data||e.data);break}case"url":e.url_path&&window.open(e.url_path,"_blank");break}}function qt(n,t,e){let i=t?.[n],s=e?.[n];return i||s||{action:n==="tap_action"?"more-info":"none"}}function D(n,t,e,i,s){let o=qt(s,i,e);jt(n,t,o,i.entity)}function $t(n,t,e,i,s){let o=0,r=null,l=null,a=!1;n.setAttribute("tabindex","0"),n.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),e&&D(t,e,i,s,"tap_action"))}),n.addEventListener("click",c=>{if(c.preventDefault(),a){a=!1;return}o++,o===1?r=setTimeout(()=>{o=0,e&&D(t,e,i,s,"tap_action")},250):o===2&&(r&&clearTimeout(r),o=0,e&&D(t,e,i,s,"double_tap_action"))}),n.addEventListener("pointerdown",()=>{a=!1,l=setTimeout(()=>{a=!0,e&&D(t,e,i,s,"hold_action")},500)});let h=()=>{l&&clearTimeout(l)};n.addEventListener("pointerup",h),n.addEventListener("pointercancel",h),n.addEventListener("contextmenu",c=>c.preventDefault())}var F=globalThis,V=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),vt=new WeakMap,N=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(V&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&vt.set(e,t))}return t}toString(){return this.cssText}},wt=n=>new N(typeof n=="string"?n:n+"",void 0,X),J=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new N(e,n,X)},xt=(n,t)=>{if(V)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},Y=V?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return wt(e)})(n):n;var{is:Wt,defineProperty:Gt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Xt,getOwnPropertySymbols:Jt,getPrototypeOf:Yt}=Object,z=globalThis,At=z.trustedTypes,Zt=At?At.emptyScript:"",Qt=z.reactiveElementPolyfillSupport,k=(n,t)=>n,Z={toAttribute(n,t){switch(t){case Boolean:n=n?Zt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Et=(n,t)=>!Wt(n,t),St={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:Et};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=St){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Gt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:o}=Kt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let l=s?.call(this);o?.call(this,r),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??St}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let t=Yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let e=this.properties,i=[...Xt(e),...Jt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(Y(s))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:Z).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Z;this._$Em=s;let l=r.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){let r=this.constructor;if(s===!1&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??Et)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:r}=o,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[k("elementProperties")]=new Map,y[k("finalized")]=new Map,Qt?.({ReactiveElement:y}),(z.reactiveElementVersions??=[]).push("2.1.2");var ot=globalThis,Ct=n=>n,B=ot.trustedTypes,Tt=B?B.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ot="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+$,te=`<${Ut}>`,S=document,O=()=>S.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",rt=Array.isArray,ee=n=>rt(n)||typeof n?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Lt=/>/g,x=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nt=/'/g,kt=/"/g,Mt=/^(?:script|style|textarea|title)$/i,at=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),lt=at(1),ve=at(2),we=at(3),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ht=new WeakMap,A=S.createTreeWalker(S,129);function Rt(n,t){if(!rt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(t):t}var ie=(n,t)=>{let e=n.length-1,i=[],s,o=t===2?"<svg>":t===3?"<math>":"",r=H;for(let l=0;l<e;l++){let a=n[l],h,c,d=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===H?c[1]==="!--"?r=Pt:c[1]!==void 0?r=Lt:c[2]!==void 0?(Mt.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=x):c[3]!==void 0&&(r=x):r===x?c[0]===">"?(r=s??H,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,h=c[1],r=c[3]===void 0?x:c[3]==='"'?kt:Nt):r===kt||r===Nt?r=x:r===Pt||r===Lt?r=H:(r=x,s=void 0);let f=r===x&&n[l+1].startsWith("/>")?" ":"";o+=r===H?a+te:d>=0?(i.push(h),a.slice(0,d)+Ot+a.slice(d)+$+f):a+$+(d===-2?l:f)}return[Rt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},M=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0,l=t.length-1,a=this.parts,[h,c]=ie(t,e);if(this.el=n.createElement(h,i),A.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=A.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Ot)){let u=c[r++],f=s.getAttribute(d).split($),b=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:b[2],strings:f,ctor:b[1]==="."?et:b[1]==="?"?it:b[1]==="@"?st:T}),s.removeAttribute(d)}else d.startsWith($)&&(a.push({type:6,index:o}),s.removeAttribute(d));if(Mt.test(s.tagName)){let d=s.textContent.split($),u=d.length-1;if(u>0){s.textContent=B?B.emptyScript:"";for(let f=0;f<u;f++)s.append(d[f],O()),A.nextNode(),a.push({type:2,index:++o});s.append(d[u],O())}}}else if(s.nodeType===8)if(s.data===Ut)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)a.push({type:7,index:o}),d+=$.length-1}o++}}static createElement(t,e){let i=S.createElement("template");return i.innerHTML=t,i}};function C(n,t,e=n,i){if(t===E)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,o=U(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=C(n,s._$AS(n,t.values),s,i)),t}var tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??S).importNode(e,!0);A.currentNode=s;let o=A.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let h;a.type===2?h=new R(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new nt(o,this,t)),this._$AV.push(h),a=i[++l]}r!==a?.index&&(o=A.nextNode(),r++)}return A.currentNode=S,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},R=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ee(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=M.createElement(Rt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new tt(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=Ht.get(t.strings);return e===void 0&&Ht.set(t.strings,e=new M(t)),e}k(t){rt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new n(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ct(t).nextSibling;Ct(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){let o=this.strings,r=!1;if(o===void 0)t=C(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{let l=t,a,h;for(t=o[0],a=0;a<o.length-1;a++)h=C(this,l[i+a],e,a),h===E&&(h=this._$AH[a]),r||=!U(h)||h!==this._$AH[a],h===p?t=p:t!==p&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}r&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},it=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},st=class extends T{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??p)===E)return;let i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var se=ot.litHtmlPolyfillSupport;se?.(M,R),(ot.litHtmlVersions??=[]).push("3.3.2");var It=(n,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let o=e?.renderBefore??null;i._$litPart$=s=new R(t.insertBefore(O(),o),o,void 0,e??{})}return s._$AI(n),s};var ct=globalThis,v=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};v._$litElement$=!0,v.finalized=!0,ct.litElementHydrateSupport?.({LitElement:v});var ne=ct.litElementPolyfillSupport;ne?.({LitElement:v});(ct.litElementVersions??=[]).push("4.2.2");var dt=[{value:"outside",label:"Outside"},{value:"inside",label:"Inside"},{value:"off",label:"Off"}],oe=[{name:"title",label:"Title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"height",label:"Height",selector:{text:{}}},{name:"border_radius",label:"Border Radius",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"color",label:"Color",selector:{text:{}}},{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}}]},{name:"",type:"grid",schema:[{name:"gap",label:"Gap",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"min",label:"Min",selector:{number:{mode:"box"}}},{name:"max",label:"Max",selector:{number:{mode:"box"}}}]},{name:"",type:"grid",schema:[{name:"pos_name",label:"Name Position",selector:{select:{options:dt,mode:"dropdown"}}},{name:"pos_value",label:"Value Position",selector:{select:{options:dt,mode:"dropdown"}}}]},{name:"",type:"grid",schema:[{name:"pos_icon",label:"Icon Position",selector:{select:{options:dt,mode:"dropdown"}}},{name:"anim_effect",label:"Animation",selector:{select:{options:[{value:"none",label:"None"},{value:"charge",label:"Charge"}],mode:"dropdown"}}}]}],ht=class extends v{static get properties(){return{hass:{attribute:!1},_config:{state:!0},_helpers:{state:!0}}}async connectedCallback(){if(super.connectedCallback(),this._helpers||!window.loadCardHelpers)return;let t=await window.loadCardHelpers();this._helpers=t,(await t.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement()}setConfig(t){this._config=t}_getEntities(){let t=this._config;return t.entities?t.entities.map(e=>typeof e=="string"?{entity:e}:{...e}):t.entity?[{entity:t.entity}]:[]}_fireConfigChanged(t){this._config=t;let e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_entityChanged(t,e){let i=e.detail.value,s=this._getEntities();i===""||i===void 0?s.splice(t,1):s[t]={...s[t],entity:i},this._updateEntities(s)}_removeEntity(t){let e=this._getEntities();e.splice(t,1),this._updateEntities(e)}_addEntity(t){let e=t.detail.value;if(!e)return;let i=this._getEntities();i.push({entity:e}),t.target.value="",this._updateEntities(i)}_updateEntities(t){let e={...this._config},i=this._config;t.length<=1&&!i.entities?(e.entity=t[0]?.entity||"",delete e.entities):(e.entities=t,delete e.entity),this._fireConfigChanged(e)}_settingsChanged(t){t.stopPropagation();let e=t.detail.value,i={...this._config},s=["title","height","border_radius","color","columns","gap","min","max"];for(let h of s){let c=e[h];c==null||c===""?delete i[h]:i[h]=c}let o={pos_name:"name",pos_value:"value",pos_icon:"icon"},r={...i.positions||{}},l=!1;for(let[h,c]of Object.entries(o)){let d=e[h];d&&d!==""?(r[c]=d,l=!0):delete r[c]}l&&Object.keys(r).length>0?i.positions=r:delete i.positions;let a=e.anim_effect;a&&a!=="none"?i.animation={...i.animation||{},effect:a}:i.animation&&(delete i.animation.effect,Object.keys(i.animation).length===0&&delete i.animation),this._fireConfigChanged(i)}_computeLabel(t){return t.label||t.name||""}render(){let t=this.hass;if(!t||!this._config)return p;let e=this._getEntities(),i={title:this._config.title||"",height:this._config.height||"",border_radius:this._config.border_radius||"",color:this._config.color||"",columns:this._config.columns||1,gap:this._config.gap||"",min:this._config.min??"",max:this._config.max??"",pos_name:this._config.positions?.name??"outside",pos_value:this._config.positions?.value??"outside",pos_icon:this._config.positions?.icon??"off",anim_effect:this._config.animation?.effect??"none"};return lt`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${e.map((s,o)=>lt`
              <div class="entity-row">
                <ha-entity-picker
                  .hass=${t}
                  .value=${s.entity}
                  .index=${o}
                  allow-custom-entity
                  @value-changed=${r=>this._entityChanged(o,r)}
                ></ha-entity-picker>
                <ha-icon-button
                  .label=${"Remove"}
                  .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                  class="remove-icon"
                  @click=${()=>this._removeEntity(o)}
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
          .data=${i}
          .schema=${oe}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `}static get styles(){return J`
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
    `}};customElements.define("pulse-card-editor",ht);function P(n,t,e){return Math.min(Math.max(n,t),e)}function re(n,t,e,i=!1){let s=parseFloat(n);if(isNaN(s))return 0;let o=e-t;if(o<=0)return 0;let r=i?e-s:s;return P((r-t)/o,0,1)*100}function ae(n,t){if(!t||t.length===0)return null;let e=parseFloat(n);if(isNaN(e))return null;for(let i of t)if(e>=i.from&&e<=i.to)return i;return null}function Dt(n){let t=n.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function le(n,t,e){let i=Dt(n),s=Dt(t),o=Math.round(i.r+(s.r-i.r)*e),r=Math.round(i.g+(s.g-i.g)*e),l=Math.round(i.b+(s.b-i.b)*e);return`rgb(${o}, ${r}, ${l})`}function ce(n,t){if(!t||t.length<2)return null;let e=parseFloat(n);if(isNaN(e))return null;let i=t[0].from<=t[t.length-1].from?t:[...t].sort((s,o)=>s.from-o.from);for(let s=0;s<i.length-1;s++){let o=i[s],r=i[s+1];if(e>=o.from&&e<=r.to){let l=r.from-o.from,a=l>0?(e-o.from)/l:0;return le(o.color,r.color,P(a,0,1))}}return e<=i[0].from?i[0].color:i[i.length-1].color}function de(n,t){let e=n.min,i=n.max;return e==null&&(e=t?.attributes?.min??_.min),i==null&&(i=t?.attributes?.max??_.max),{min:parseFloat(String(e)),max:parseFloat(String(i))}}function he(n,t,e){let i=parseFloat(n);if(isNaN(i))return String(n);let s=t!=null?i.toFixed(t):i.toString();return e?`${s}${e}`:s}function Ft(n,t){if(t==null)return{direction:"neutral",delta:0};let e=parseFloat(n),i=parseFloat(t);if(isNaN(e)||isNaN(i))return{direction:"neutral",delta:0};let s=Math.round((e-i)*100)/100;return{direction:s>0?"up":s<0?"down":"neutral",delta:s}}function ue(n,...t){console.warn(`${bt} ${n}`,...t)}async function Vt(n,t,e=60){if(!n?.callWS)return null;let i=new Date,s=new Date(i.getTime()-e*60*1e3);try{let r=(await n.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:i.toISOString(),entity_ids:[t],minimal_response:!0,significant_changes_only:!0}))?.[t];if(!r||r.length===0)return null;let l=parseFloat(r[0].s);return isNaN(l)?null:l}catch(o){return ue("Failed to fetch history for %s: %O",t,o),null}}function pt(n){if(n==null||n==="")return"";let t=String(n);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function m(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ut(n){return!Array.isArray(n)||n.length<2?n:[...n].sort((t,e)=>t.from-e.from)}function zt(n){if(!n)throw new Error("Please define an entity or entities");if(!n.entity&&!n.entities)throw new Error("Please define an entity or entities");let t={..._,...n,animation:{..._.animation,...n.animation},positions:{..._.positions,...n.positions}};return t.severity&&(t.severity=ut(t.severity)),t.entities=n.entities?n.entities.map(e=>{let i=typeof e=="string"?{entity:e}:{...e};return i.severity&&(i.severity=ut(i.severity)),i}):[{entity:n.entity,...n}],t.entities.length===1&&t.entities[0].severity&&(t.entities[0].severity=ut(t.entities[0].severity)),t}function ft(n,t,e){let i=e?.states[n.entity],s=!i||i.state==="unavailable"||i.state==="unknown",{min:o,max:r}=de(n,i),l=n.attribute?i?.attributes?.[n.attribute]:i?.state,a=parseFloat(l),h=n.complementary??t.complementary,c=s?0:re(l,o,r,h),d=n.unit_of_measurement??i?.attributes?.unit_of_measurement??"",u=n.decimal??t.decimal??null,b=(n.limit_value??t.limit_value)&&!isNaN(a)?P(a,o,r):l,q=s?"Unavailable":he(b,u,d),W=n.name??i?.attributes?.friendly_name??n.entity,L="",I="";if(!s){let w=n.severity??t.severity;if(w&&w.length>0)if(w.some(g=>g.mode==="gradient")){let g=ce(a,w);g&&(L=g)}else{let g=ae(a,w);g&&(L=g.color,g.icon&&(I=g.icon))}}let G=L||n.color||t.color||"",K=n.icon||i?.attributes?.icon||"";return{isUnavailable:s,min:o,max:r,numValue:a,fill:c,displayValue:q,name:W,color:G,resolvedIcon:I||K}}var j=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=gt,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null)}setConfig(t){this._config=zt(t),this._elements={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let e=!1;for(let i of this._cfg.entities){let s=t.states[i.entity],o=this._prevStates[i.entity];if(!o||o.state!==s?.state||o.last_updated!==s?.last_updated){e=!0;break}let r=i.target??this._cfg.target;if(typeof r=="string"){let l=t.states[r],a=this._prevStates[`__target__${r}`];if(!a||a.state!==l?.state||a.last_updated!==l?.last_updated){e=!0;break}}}e&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch())}_fullRender(){let t=this._cfg;if(!t)return;let e=t.columns??1,i=e>1?` columns-${e}`:"",s=t.entity_row?" entity-row":"",o=t.gap,r="";if(e>1||o!==void 0){let u=[];if(e>1&&u.push(`--pulse-columns:${e}`),o!==void 0){let f=typeof o=="number"||/^\d+(\.\d+)?$/.test(String(o))?`${o}px`:o;u.push(`--pulse-gap:${f}`)}r=` style="${u.join(";")}"`}let l=r,a="";t.title&&(a+=`<div class="pulse-title">${m(t.title)}</div>`),a+=`<div class="pulse-card${i}${s}"${l}>`;for(let u of t.entities)a+=this._renderBarRow(u);a+="</div>";let h=t.entity_row?a:`<ha-card>${a}</ha-card>`,c=this._shadow.querySelector("ha-card, .pulse-card");c&&c.remove();let d=document.createElement("template");d.innerHTML=h,this._shadow.appendChild(d.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements()}_renderBarRow(t){let e=this._cfg,i=ft(t,e,this._hass),s=t.positions?.name??e.positions?.name??"outside",o=t.positions?.value??e.positions?.value??"outside",r=t.positions?.icon??e.positions?.icon??"off",l=t.positions?.indicator??e.positions?.indicator??"off",h=(t.indicator??e.indicator)?.show===!0&&l==="off"?"outside":l,c=t.animation??{},d=c.speed??e.animation?.speed??_.animation.speed,u=c.effect??e.animation?.effect??_.animation.effect,f=c.state??e.animation?.state??_.animation.state,b=this._buildIndicatorHtml(t,e,h),q=this._buildLabelsHtml(i,s,o,r,h,b),W=this._buildContentHtml(i,s,o,r,h,b),L=pt(t.height??e.height??_.height),I=pt(t.border_radius??e.border_radius??_.border_radius),G=i.color?`background-color:${i.color};`:"",K=u==="charge"&&!i.isUnavailable?" charge":"",mt=f==="off"?"transition:none;":"",w=`width:${i.fill}%;${mt}${G}`,_t=this._buildTargetHtml(t,e,i.min,i.max),g=`
      <div class="bar-container" style="height:${L};border-radius:${I};--pulse-animation-speed:${d}s;">
        <div class="bar-track"></div>
        <div class="bar-fill${K}" data-entity="${t.entity}" style="${w}"></div>
        ${_t}
        ${W}
      </div>`,Bt=i.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${i.min}" aria-valuemax="${i.max}" aria-label="${m(i.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${i.numValue}" aria-valuemin="${i.min}" aria-valuemax="${i.max}" aria-label="${m(i.name)}: ${m(i.displayValue)}"`;return`<div class="bar-row${i.isUnavailable?" unavailable":""}" data-entity="${t.entity}" ${Bt}>${q}${g}</div>`}_buildIndicatorHtml(t,e,i){let s=t.indicator??e.indicator;if(!(s?.show===!0&&i!=="off"))return"";let r=this._indicators[t.entity],l=r?.direction??"neutral",a=l==="up"?"\u25B2":l==="down"?"\u25BC":"\u25B6",c=s?.show_delta===!0&&r?` ${r.delta>0?"+":""}${r.delta}`:"";return`<span class="bar-indicator ${l}">${a}${c}</span>`}_buildLabelsHtml(t,e,i,s,o,r){if(e!=="outside"&&i!=="outside"&&s!=="outside"&&o!=="outside")return"";let l='<div class="bar-labels"><div class="bar-label-left">';return s==="outside"&&t.resolvedIcon&&(l+=`<ha-icon class="bar-icon" icon="${m(t.resolvedIcon)}"></ha-icon>`),e==="outside"&&(l+=`<span class="bar-name">${m(t.name)}</span>`),l+='</div><div class="bar-label-right">',i==="outside"&&(l+=`<span class="bar-value">${m(t.displayValue)}</span>`),o==="outside"&&r&&(l+=r),l+="</div></div>",l}_buildContentHtml(t,e,i,s,o,r){if(e!=="inside"&&i!=="inside"&&s!=="inside"&&o!=="inside")return"";let l='<div class="bar-content">';return s==="inside"&&t.resolvedIcon&&(l+=`<ha-icon class="bar-icon" icon="${m(t.resolvedIcon)}"></ha-icon>`),e==="inside"&&(l+=`<span class="bar-name">${m(t.name)}</span>`),i==="inside"&&(l+=`<span class="bar-value">${m(t.displayValue)}</span>`),o==="inside"&&r&&(l+=r),l+="</div>",l}_buildTargetHtml(t,e,i,s){let o=t.target??e.target,r=this._resolveTargetValue(o);if(r===null)return"";let a=`left:${P((r-i)/(s-i),0,1)*100}%`,h=this._shouldShowTargetLabel(o),c=h?`<span class="bar-target-label">${m(r)}</span>`:"";return`<div class="bar-target${h?" show-label":""}" style="${a}">${c}</div>`}_updateBars(){let t=this._cfg;for(let e of t.entities){let i=ft(e,t,this._hass),s=this._elements.rows?.[e.entity];if(!s)continue;s.classList.toggle("unavailable",i.isUnavailable);let o=s.querySelector(".bar-fill");if(o){o.style.width=`${i.fill}%`,o.style.backgroundColor=i.color||"";let d=s.querySelector(".bar-icon");d&&d.setAttribute("icon",i.resolvedIcon)}let r=s.querySelectorAll(".bar-name");for(let d of r)d.textContent=i.name;let l=s.querySelectorAll(".bar-value");for(let d of l)d.textContent=i.displayValue;s.setAttribute("aria-valuenow",i.isUnavailable?"0":String(i.numValue)),s.setAttribute("aria-valuemin",String(i.min)),s.setAttribute("aria-valuemax",String(i.max)),s.setAttribute("aria-label",`${m(i.name)}: ${m(i.displayValue)}`);let a=s.querySelector(".bar-target"),h=e.target??t.target,c=this._resolveTargetValue(h);if(c!==null){let d=P((c-i.min)/(i.max-i.min),0,1)*100;if(a){a.style.left=`${d}%`,a.style.display="";let u=a.querySelector(".bar-target-label");u&&(u.textContent=String(c))}}else a&&(a.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(i=>(i.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)for(let e of t.entities){let i=e.indicator??t.indicator;if(!i?.show)continue;let s=i.period??60,o=await Vt(this._hass,e.entity,s),r=this._hass?.states[e.entity],l=e.attribute?r?.attributes?.[e.attribute]:r?.state,a=Ft(l,o);this._indicators[e.entity]=a;let h=this._elements.rows?.[e.entity];if(!h)continue;let c=h.querySelector(".bar-indicator");if(c){let d=a.direction==="up"?"\u25B2":a.direction==="down"?"\u25BC":"\u25B6",f=i.show_delta===!0?` ${a.delta>0?"+":""}${a.delta}`:"";c.textContent=`${d}${f}`,c.className=`bar-indicator ${a.direction}`}}}_resolveTargetValue(t){if(t==null)return null;if(typeof t=="number")return isNaN(t)?null:t;if(typeof t=="string"){let e=this._hass?.states[t];if(!e)return null;let i=parseFloat(e.state);return isNaN(i)?null:i}return typeof t=="object"&&t.value!==void 0?this._resolveTargetValue(t.value):null}_shouldShowTargetLabel(t){return typeof t=="object"&&t!==null?t.show_label===!0:!1}_cacheStates(){let t=this._cfg;this._prevStates={};for(let e of t.entities){let i=this._hass?.states[e.entity];i&&(this._prevStates[e.entity]={state:i.state,last_updated:i.last_updated});let s=e.target??t.target;if(typeof s=="string"){let o=this._hass?.states[s];o&&(this._prevStates[`__target__${s}`]={state:o.state,last_updated:o.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let e=this._shadow.querySelectorAll(".bar-row");for(let i of e){let s=i.dataset.entity;if(s){this._elements.rows[s]=i;let o=t.entities.find(r=>r.entity===s);o&&$t(i,this,this._hass,t,o)}}}getCardSize(){let t=this._config?.entities?.length||1,e=this._config?.columns||1;return Math.ceil(t/e)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,e=this._config?.columns||1,i=Math.ceil(t/e);return{columns:12,min_columns:3,rows:Math.max(1,i),min_rows:1}}static getConfigElement(){return document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(i=>{let s=t.states[i];return i.startsWith("sensor.")&&!isNaN(parseFloat(s.state))})[0]||"sensor.example"}}};customElements.define("pulse-card",j);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});var je=j;export{je as default};
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

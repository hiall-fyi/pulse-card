var U=globalThis,M=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),te=new WeakMap,E=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(M&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(t,e))}return e}toString(){return this.cssText}},ie=o=>new E(typeof o=="string"?o:o+"",void 0,D),x=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new E(t,o,D)},se=(o,e)=>{if(M)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},Z=M?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return ie(t)})(o):o;var{is:Ce,defineProperty:Ee,getOwnPropertyDescriptor:xe,getOwnPropertyNames:ke,getOwnPropertySymbols:Pe,getPrototypeOf:Le}=Object,z=globalThis,oe=z.trustedTypes,Oe=oe?oe.emptyScript:"",Te=z.reactiveElementPolyfillSupport,k=(o,e)=>o,B={toAttribute(o,e){switch(e){case Boolean:o=o?Oe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},re=(o,e)=>!Ce(o,e),ne={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ee(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:r}=xe(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let l=s?.call(this);r?.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let e=Le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let t=this.properties,i=[...ke(t),...Pe(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(Z(s))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return se(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:B).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:B;this._$Em=s;let l=n.fromAttribute(t,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){let n=this.constructor;if(s===!1&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??re)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[k("elementProperties")]=new Map,m[k("finalized")]=new Map,Te?.({ReactiveElement:m}),(z.reactiveElementVersions??=[]).push("2.1.2");var G=globalThis,ae=o=>o,I=G.trustedTypes,le=I?I.createPolicy("lit-html",{createHTML:o=>o}):void 0,_e="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+g,Ne=`<${me}>`,y=document,L=()=>y.createComment(""),O=o=>o===null||typeof o!="object"&&typeof o!="function",Y=Array.isArray,Re=o=>Y(o)||typeof o?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ce=/>/g,v=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,pe=/"/g,fe=/^(?:script|style|textarea|title)$/i,J=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=J(1),Ke=J(2),Ge=J(3),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ue=new WeakMap,b=y.createTreeWalker(y,129);function ge(o,e){if(!Y(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return le!==void 0?le.createHTML(e):e}var He=(o,e)=>{let t=o.length-1,i=[],s,r=e===2?"<svg>":e===3?"<math>":"",n=P;for(let l=0;l<t;l++){let a=o[l],h,p,c=-1,_=0;for(;_<a.length&&(n.lastIndex=_,p=n.exec(a),p!==null);)_=n.lastIndex,n===P?p[1]==="!--"?n=he:p[1]!==void 0?n=ce:p[2]!==void 0?(fe.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=v):p[3]!==void 0&&(n=v):n===v?p[0]===">"?(n=s??P,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?v:p[3]==='"'?pe:de):n===pe||n===de?n=v:n===he||n===ce?n=P:(n=v,s=void 0);let f=n===v&&o[l+1].startsWith("/>")?" ":"";r+=n===P?a+Ne:c>=0?(i.push(h),a.slice(0,c)+_e+a.slice(c)+g+f):a+g+(c===-2?l:f)}return[ge(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},T=class o{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0,l=e.length-1,a=this.parts,[h,p]=He(e,t);if(this.el=o.createElement(h,i),b.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=b.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let c of s.getAttributeNames())if(c.endsWith(_e)){let _=p[n++],f=s.getAttribute(c).split(g),H=/([.?@])?(.*)/.exec(_);a.push({type:1,index:r,name:H[2],strings:f,ctor:H[1]==="."?F:H[1]==="?"?q:H[1]==="@"?W:A}),s.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:r}),s.removeAttribute(c));if(fe.test(s.tagName)){let c=s.textContent.split(g),_=c.length-1;if(_>0){s.textContent=I?I.emptyScript:"";for(let f=0;f<_;f++)s.append(c[f],L()),b.nextNode(),a.push({type:2,index:++r});s.append(c[_],L())}}}else if(s.nodeType===8)if(s.data===me)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:r}),c+=g.length-1}r++}}static createElement(e,t){let i=y.createElement("template");return i.innerHTML=e,i}};function S(o,e,t=o,i){if(e===w)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,r=O(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=S(o,s._$AS(o,e.values),s,i)),e}var V=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??y).importNode(t,!0);b.currentNode=s;let r=b.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new N(r,r.nextSibling,this,e):a.type===1?h=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(h=new K(r,this,e)),this._$AV.push(h),a=i[++l]}n!==a?.index&&(r=b.nextNode(),n++)}return b.currentNode=y,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},N=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),O(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Re(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(ge(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new V(s,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new T(e)),t}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new o(this.O(L()),this.O(L()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=ae(e).nextSibling;ae(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},A=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){let r=this.strings,n=!1;if(r===void 0)e=S(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==w,n&&(this._$AH=e);else{let l=e,a,h;for(e=r[0],a=0;a<r.length-1;a++)h=S(this,l[i+a],t,a),h===w&&(h=this._$AH[a]),n||=!O(h)||h!==this._$AH[a],h===d?e=d:e!==d&&(e+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},F=class extends A{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},q=class extends A{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},W=class extends A{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??d)===w)return;let i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},K=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}};var Ue=G.litHtmlPolyfillSupport;Ue?.(T,N),(G.litHtmlVersions??=[]).push("3.3.2");var $e=(o,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let r=t?.renderBefore??null;i._$litPart$=s=new N(e.insertBefore(L(),r),r,void 0,t??{})}return s._$AI(o),s};var X=globalThis,$=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};$._$litElement$=!0,$.finalized=!0,X.litElementHydrateSupport?.({LitElement:$});var Me=X.litElementPolyfillSupport;Me?.({LitElement:$});(X.litElementVersions??=[]).push("4.2.2");var Q="pulse-climate-card-editor";var ve=x`
  .pulse-move-icon {
    color: var(--pulse-text-secondary);
    --mdc-icon-button-size: 36px;
  }
  .pulse-remove-icon {
    color: var(--pulse-text-secondary);
    --mdc-icon-button-size: 36px;
  }
  .pulse-move-icon[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`,ze="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Ie="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",De="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";async function be(o){if(!window.loadCardHelpers)return!1;try{return(await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),!0}catch(e){return console.warn(`${o} failed to load card helpers:`,e),!1}}function ye(o,e,t,i){return u`
    ${e>1?u`
      <ha-icon-button
        .label=${"Move up"}
        .path=${ze}
        class="pulse-move-icon"
        .disabled=${o===0}
        @click=${()=>t(o,-1)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${"Move down"}
        .path=${Ie}
        class="pulse-move-icon"
        .disabled=${o===e-1}
        @click=${()=>t(o,1)}
      ></ha-icon-button>
    `:d}
    <ha-icon-button
      .label=${"Remove"}
      .path=${De}
      class="pulse-remove-icon"
      @click=${()=>i(o)}
    ></ha-icon-button>
  `}function C(o){return o.label||o.name||""}function R(o,e,t,i){let s=o.map(r=>({...r}));return i===""||i===void 0?delete s[e][t]:s[e][t]=i,s}function we(o,e,t,i,s){let r=o.map(l=>({...l})),n={...r[e][t]||{}};return s===""||s===void 0?delete n[i]:n[i]=s,Object.keys(n).length===0?delete r[e][t]:r[e][t]=n,r}function Se(o,e,t){let i=e+t;if(i<0||i>=o.length)return o;let s=o.map(r=>({...r}));return[s[e],s[i]]=[s[i],s[e]],s}function Ae(o,e){let t=o.map(i=>({...i}));return t.splice(e,1),t}var Ze=[{value:"default",label:"Default"},{value:"compact",label:"Compact"}],Be=[{label:"Charts & Visuals",sections:[{value:"zones",label:"Zones"},{value:"home_status",label:"Home status"},{value:"zone_ranking",label:"Zone ranking"},{value:"graph",label:"Graph"},{value:"radial",label:"Radial"},{value:"donut",label:"Donut"},{value:"thermal_strip",label:"Thermal strip"},{value:"comfort_strip",label:"Comfort strip"},{value:"energy_flow",label:"Energy flow"},{value:"timeline_group",label:"24h Timeline (tabbed)"}]},{label:"Tado CE",hint:"Requires Tado CE integration",sections:[{value:"api",label:"API"},{value:"bridge",label:"Bridge"},{value:"homekit",label:"HomeKit"},{value:"system_health_group",label:"System Health (Bridge / HomeKit / API tabs)"},{value:"weather",label:"Weather"},{value:"environment",label:"Environment"},{value:"thermal",label:"Thermal"},{value:"schedule",label:"Schedule"}]}];function je(){return[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"title",label:"Title",selector:{text:{}}},{name:"layout",label:"Layout",selector:{select:{options:Ze,mode:"dropdown"}}},{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"show_temp_bar",label:"Temp bar",selector:{boolean:{}}},{name:"show_power_bar",label:"Power bar",selector:{boolean:{}}},{name:"interactive",label:"Slider",selector:{boolean:{}}}]}]}var ee=class extends ${_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}async connectedCallback(){super.connectedCallback(),!this._helpersLoaded&&(this._helpersLoaded=await be("Pulse Climate Card:"),this.requestUpdate())}setConfig(e){this._config={...e}}_getZones(){return this._config?.zones?this._config.zones.map(e=>typeof e=="string"?{entity:e}:{...e}):this._config?.entity?[{entity:this._config.entity}]:[]}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_updateZones(e){if(!this._config)return;let t={...this._config,zones:e};delete t.entity,this._fireConfigChanged(t)}_zoneChanged(e,t){this._config&&this._updateZones(R(this._getZones(),e,"entity",t.detail?.value||""))}_removeZone(e){this._config&&this._updateZones(Ae(this._getZones(),e))}_moveZone(e,t){if(!this._config)return;let i=this._getZones(),s=Se(i,e,t);s!==i&&this._updateZones(s)}_addZone(e){let t=e.detail?.value;!t||!this._config||(e.target.value="",this._updateZones([...this._getZones(),{entity:t}]))}_zoneFieldChanged(e,t,i){if(!this._config)return;let s=i.target.value??"";this._updateZones(R(this._getZones(),e,t,s))}_zoneSparklineChanged(e,t){if(!this._config)return;let i=t.target.value??"";this._updateZones(we(this._getZones(),e,"sparkline","mode",i))}_zoneToggleChanged(e,t,i){if(!this._config)return;let s=i.target.value,r=s==="on"?!0:s==="off"?!1:"";this._updateZones(R(this._getZones(),e,t,r))}_zoneOverrideChanged(e,t,i){if(!this._config)return;let s=i.detail?.value||"";this._updateZones(R(this._getZones(),e,t,s))}_getSections(){return this._config?.sections?this._config.sections.map(e=>typeof e=="string"?e:e.type):["zones"]}_getSectionsRaw(){return this._config?.sections?this._config.sections.map(e=>typeof e=="string"?e:{...e}):["zones"]}_getSectionConfig(e){let i=this._getSectionsRaw().find(s=>(typeof s=="string"?s:s.type)===e);return!i||typeof i=="string"?{}:i}_toggleSection(e,t){let i=this._getSectionsRaw();t&&!i.some(s=>(typeof s=="string"?s:s.type)===e)?i.push(e):t||(i=i.filter(s=>(typeof s=="string"?s:s.type)!==e)),this._fireConfigChanged({...this._config,sections:i})}_updateSectionProp(e,t,i){let s=this._getSectionsRaw(),r=s.findIndex(a=>(typeof a=="string"?a:a.type)===e);if(r===-1)return;let n=s[r];typeof n=="string"?n={type:n}:n={...n},i===""||i===void 0||i===null?delete n[t]:n[t]=i;let l=Object.keys(n).filter(a=>a!=="type");s[r]=l.length===0?n.type:n,this._fireConfigChanged({...this._config,sections:s})}_settingsChanged(e){let t=e.detail?.value;if(!t)return;let i={...this._config};t.title!==void 0&&(i.title=t.title||void 0),t.layout!==void 0&&(i.layout=t.layout),t.columns!==void 0&&(i.columns=Number(t.columns)||1),t.show_temp_bar!==void 0&&(i.show_temp_bar=t.show_temp_bar),t.show_power_bar!==void 0&&(i.show_power_bar=t.show_power_bar),t.interactive!==void 0&&(i.interactive=t.interactive),this._fireConfigChanged(i)}_renderSectionSettings(e,t){if(!this._getSections().includes(e))return d;switch(e){case"graph":return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{hours_to_show:this._getSectionConfig("graph").hours_to_show||24,height:this._getSectionConfig("graph").height||80,stacked:this._getSectionConfig("graph").stacked||!1}}
              .schema=${[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Graph hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"height",label:"Graph height (px)",selector:{number:{min:40,max:200,mode:"box"}}}]},{name:"stacked",label:"Stacked (temp + humidity)",selector:{boolean:{}}}]}
              .computeLabel=${C}
              @value-changed=${i=>{let s=i.detail?.value;s&&(s.hours_to_show!==void 0&&this._updateSectionProp("graph","hours_to_show",Number(s.hours_to_show)||24),s.height!==void 0&&this._updateSectionProp("graph","height",Number(s.height)||80),s.stacked!==void 0&&this._updateSectionProp("graph","stacked",s.stacked||void 0))}}
            ></ha-form>
          </div>
        `;case"radial":{let i=this._getSectionConfig("radial"),s=i.attribute||"temperature",r=s==="temperature"||s==="both",n=s==="humidity"||s==="both";return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{attribute:s}}
              .schema=${[{name:"attribute",label:"Display",selector:{select:{options:[{value:"temperature",label:"Temperature"},{value:"humidity",label:"Humidity"},{value:"both",label:"Both"}],mode:"dropdown"}}}]}
              .computeLabel=${C}
              @value-changed=${l=>{let a=l.detail?.value?.attribute;a!==void 0&&this._updateSectionProp("radial","attribute",a==="temperature"?void 0:a)}}
            ></ha-form>
            ${r?u`
              <ha-entity-picker
                .hass=${t}
                .value=${i.outdoor_temp_entity||""}
                .includeDomains=${["sensor","weather"]}
                .label=${"Outdoor temperature entity"}
                allow-custom-entity
                @value-changed=${l=>this._updateSectionProp("radial","outdoor_temp_entity",l.detail?.value||"")}
              ></ha-entity-picker>
            `:d}
            ${n?u`
              <ha-entity-picker
                .hass=${t}
                .value=${i.outdoor_humidity_entity||""}
                .includeDomains=${["sensor"]}
                .label=${"Outdoor humidity entity"}
                allow-custom-entity
                @value-changed=${l=>this._updateSectionProp("radial","outdoor_humidity_entity",l.detail?.value||"")}
              ></ha-entity-picker>
            `:d}
          </div>
        `}case"thermal_strip":return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{attribute:this._getSectionConfig("thermal_strip").attribute||"temperature",hours_to_show:this._getSectionConfig("thermal_strip").hours_to_show||24,slots_per_hour:this._getSectionConfig("thermal_strip").slots_per_hour||2}}
              .schema=${[{name:"attribute",label:"Display",selector:{select:{options:[{value:"temperature",label:"Temperature"},{value:"humidity",label:"Humidity"}],mode:"dropdown"}}},{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"slots_per_hour",label:"Slots/hr",selector:{number:{min:1,max:12,mode:"box"}}}]}]}
              .computeLabel=${C}
              @value-changed=${i=>{let s=i.detail?.value;s&&(s.attribute!==void 0&&this._updateSectionProp("thermal_strip","attribute",s.attribute==="temperature"?void 0:s.attribute),s.hours_to_show!==void 0&&this._updateSectionProp("thermal_strip","hours_to_show",Number(s.hours_to_show)||24),s.slots_per_hour!==void 0&&this._updateSectionProp("thermal_strip","slots_per_hour",Number(s.slots_per_hour)||2))}}
            ></ha-form>
          </div>
        `;case"comfort_strip":return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{hours_to_show:this._getSectionConfig("comfort_strip").hours_to_show||24,slots_per_hour:this._getSectionConfig("comfort_strip").slots_per_hour||1}}
              .schema=${[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Comfort hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"slots_per_hour",label:"Comfort slots/hr",selector:{number:{min:1,max:12,mode:"box"}}}]}]}
              .computeLabel=${C}
              @value-changed=${i=>{let s=i.detail?.value;s&&(s.hours_to_show!==void 0&&this._updateSectionProp("comfort_strip","hours_to_show",Number(s.hours_to_show)||24),s.slots_per_hour!==void 0&&this._updateSectionProp("comfort_strip","slots_per_hour",Number(s.slots_per_hour)||1))}}
            ></ha-form>
          </div>
        `;default:return d}}render(){let e=this.hass;if(!e||!this._config)return d;let t=this._getZones(),i=this._getSections(),s={title:this._config.title||"",layout:this._config.layout||"default",columns:this._config.columns||1,show_temp_bar:this._config.show_temp_bar!==!1,show_power_bar:this._config.show_power_bar!==!1,interactive:this._config.interactive===!0},r=i.length;return u`
      <div class="pc-editor">
        <h3>Zones</h3>
        <div class="pc-editor-entities">
          ${t.map((n,l)=>{let a=h=>n[h]===void 0?"default":n[h]?"on":"off";return u`
              <div class="pc-editor-zone-row">
                <div class="pc-editor-zone-main">
                  <ha-entity-picker
                    .hass=${e}
                    .value=${n.entity}
                    .includeDomains=${["climate","water_heater"]}
                    allow-custom-entity
                    @value-changed=${h=>this._zoneChanged(l,h)}
                  ></ha-entity-picker>
                  ${ye(l,t.length,(h,p)=>this._moveZone(h,p),h=>this._removeZone(h))}
                </div>

                <div class="pc-editor-zone-fields">
                  <ha-textfield
                    .label=${"Name"}
                    .value=${n.name||""}
                    @input=${h=>this._zoneFieldChanged(l,"name",h)}
                  ></ha-textfield>
                  <ha-icon-picker
                    .hass=${e}
                    .label=${"Icon"}
                    .value=${n.icon||""}
                    @value-changed=${h=>this._zoneFieldChanged(l,"icon",{target:{value:h.detail?.value||""}})}
                  ></ha-icon-picker>
                  <ha-textfield
                    .label=${"Color"}
                    .value=${n.color||""}
                    @input=${h=>this._zoneFieldChanged(l,"color",h)}
                  ></ha-textfield>
                  <ha-select
                    .label=${"Sparkline"}
                    .value=${n.sparkline?.mode||"overlay"}
                    @selected=${h=>this._zoneSparklineChanged(l,h)}
                    @closed=${h=>h.stopPropagation()}
                  >
                    <mwc-list-item value="overlay">Overlay</mwc-list-item>
                    <mwc-list-item value="prominent">Prominent</mwc-list-item>
                    <mwc-list-item value="pulse">Pulse</mwc-list-item>
                  </ha-select>
                </div>

                <div class="pc-editor-zone-toggles">
                  ${[["show_temp_bar","Temp bar"],["show_power_bar","Power bar"],["interactive","Interactive"]].map(([h,p])=>u`
                      <ha-select
                        .label=${p}
                        .value=${a(h)}
                        @selected=${c=>this._zoneToggleChanged(l,h,c)}
                        @closed=${c=>c.stopPropagation()}
                      >
                        <mwc-list-item value="default">Default</mwc-list-item>
                        <mwc-list-item value="on">On</mwc-list-item>
                        <mwc-list-item value="off">Off</mwc-list-item>
                      </ha-select>
                    `)}
                </div>

                <ha-expansion-panel .header=${"Sensor overrides"} outlined>
                  ${[["temperature_entity","Temperature"],["humidity_entity","Humidity"],["open_window_entity","Open window"],["battery_entity","Battery"],["mold_risk_entity","Mold risk"],["heating_power_entity","Heating power"]].map(([h,p])=>u`
                    <ha-entity-picker
                      .hass=${e}
                      .label=${p}
                      .value=${n[h]||""}
                      allow-custom-entity
                      @value-changed=${c=>this._zoneOverrideChanged(l,h,c)}
                    ></ha-entity-picker>
                  `)}
                </ha-expansion-panel>
              </div>
            `})}
        </div>
        <ha-entity-picker
          class="pc-editor-add-entity"
          .hass=${e}
          .includeDomains=${["climate","water_heater"]}
          @value-changed=${this._addZone}
        ></ha-entity-picker>

        <h3>Card Settings</h3>
        <ha-form
          .hass=${e}
          .data=${s}
          .schema=${je()}
          .computeLabel=${C}
          @value-changed=${this._settingsChanged}
        ></ha-form>

        ${r===0?u`
          <div class="pc-editor-section-hint">No sections enabled — the card will be empty.</div>
        `:d}

        ${Be.map(n=>u`
          <ha-expansion-panel .header=${n.label} outlined>
            ${n.hint?u`<div slot="secondary">${n.hint}</div>`:d}
            <div class="pc-editor-section-grid">
              ${n.sections.map(l=>u`
                <label class="pc-editor-section-chip ${i.includes(l.value)?"pc-editor-active":""}">
                  <ha-switch
                    .checked=${i.includes(l.value)}
                    @change=${a=>this._toggleSection(l.value,a.target.checked)}
                  ></ha-switch>
                  <span>${l.label}</span>
                </label>
              `)}
            </div>
            ${n.sections.map(l=>this._renderSectionSettings(l.value,e))}
          </ha-expansion-panel>
        `)}
      </div>
    `}static get styles(){return x`
      .pc-editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--pulse-text-primary);
      }
      h3:first-child { margin-top: 0; }
      .pc-editor-entities {
        display: flex;
        flex-direction: column;
        gap: var(--pulse-space-element);
      }
      .pc-editor-zone-row {
        display: flex;
        flex-direction: column;
        gap: var(--pulse-space-tight);
        padding: var(--pulse-space-element);
        border: 1px solid var(--pulse-border-divider);
        border-radius: var(--pulse-radius-element);
        margin-bottom: var(--pulse-space-element);
      }
      .pc-editor-zone-main {
        display: flex;
        align-items: center;
      }
      .pc-editor-zone-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .pc-editor-zone-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--pulse-space-tight);
      }
      .pc-editor-zone-toggles {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--pulse-space-tight);
      }
      ${ve}
      .pc-editor-add-entity {
        display: block;
        margin-top: 8px;
      }
      ha-expansion-panel {
        margin-bottom: 4px;
      }
      .pc-editor-section-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--pulse-space-element);
        padding: 8px 0;
      }
      .pc-editor-section-chip {
        display: flex;
        align-items: center;
        gap: var(--pulse-space-chip);
        font-size: 13px;
        color: var(--pulse-text-primary);
        cursor: pointer;
      }
      .pc-editor-section-chip ha-switch {
        --switch-unchecked-button-color: var(--pulse-disabled);
      }
      .pc-editor-section-chip.pc-editor-active {
        /* Reserved for future active styling. */
      }
      .pc-editor-section-settings {
        padding: 4px 0 8px;
        border-top: 1px solid var(--pulse-border-divider);
        margin-top: 4px;
      }
      .pc-editor-section-hint {
        font-size: 12px;
        color: var(--pulse-tier-strong);
        padding: 4px 0 8px;
      }
    `}};customElements.get(Q)||customElements.define(Q,ee);
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

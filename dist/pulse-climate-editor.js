var R=globalThis,U=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),ee=new WeakMap,E=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(U&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ee.set(t,e))}return e}toString(){return this.cssText}},te=o=>new E(typeof o=="string"?o:o+"",void 0,D),z=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new E(t,o,D)},se=(o,e)=>{if(U)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,o.appendChild(s)}},I=U?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return te(t)})(o):o;var{is:ye,defineProperty:ve,getOwnPropertyDescriptor:we,getOwnPropertyNames:Ae,getOwnPropertySymbols:Se,getPrototypeOf:Ce}=Object,H=globalThis,ie=H.trustedTypes,Ee=ie?ie.emptyScript:"",xe=H.reactiveElementPolyfillSupport,x=(o,e)=>o,V={toAttribute(o,e){switch(e){case Boolean:o=o?Ee:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ne=(o,e)=>!ye(o,e),oe={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&ve(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=we(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){let l=i?.call(this);r?.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let e=Ce(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let t=this.properties,s=[...Ae(t),...Se(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(I(i))}else e!==void 0&&t.push(I(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return se(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:V).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:V;this._$Em=i;let l=n.fromAttribute(t,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){if(e!==void 0){let n=this.constructor;if(i===!1&&(r=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??ne)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[x("elementProperties")]=new Map,m[x("finalized")]=new Map,xe?.({ReactiveElement:m}),(H.reactiveElementVersions??=[]).push("2.1.2");var K=globalThis,re=o=>o,M=K.trustedTypes,ae=M?M.createPolicy("lit-html",{createHTML:o=>o}):void 0,ue="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,_e="?"+g,Pe=`<${_e}>`,v=document,L=()=>v.createComment(""),O=o=>o===null||typeof o!="object"&&typeof o!="function",G=Array.isArray,Le=o=>G(o)||typeof o?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,he=/>/g,b=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,de=/"/g,me=/^(?:script|style|textarea|title)$/i,J=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=J(1),Fe=J(2),Ze=J(3),w=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),pe=new WeakMap,y=v.createTreeWalker(v,129);function fe(o,e){if(!G(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(e):e}var Oe=(o,e)=>{let t=o.length-1,s=[],i,r=e===2?"<svg>":e===3?"<math>":"",n=P;for(let l=0;l<t;l++){let a=o[l],d,p,c=-1,_=0;for(;_<a.length&&(n.lastIndex=_,p=n.exec(a),p!==null);)_=n.lastIndex,n===P?p[1]==="!--"?n=le:p[1]!==void 0?n=he:p[2]!==void 0?(me.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=b):p[3]!==void 0&&(n=b):n===b?p[0]===">"?(n=i??P,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?b:p[3]==='"'?de:ce):n===de||n===ce?n=b:n===le||n===he?n=P:(n=b,i=void 0);let f=n===b&&o[l+1].startsWith("/>")?" ":"";r+=n===P?a+Pe:c>=0?(s.push(d),a.slice(0,c)+ue+a.slice(c)+g+f):a+g+(c===-2?l:f)}return[fe(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},k=class o{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,n=0,l=e.length-1,a=this.parts,[d,p]=Oe(e,t);if(this.el=o.createElement(d,s),y.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=y.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(ue)){let _=p[n++],f=i.getAttribute(c).split(g),T=/([.?@])?(.*)/.exec(_);a.push({type:1,index:r,name:T[2],strings:f,ctor:T[1]==="."?Z:T[1]==="?"?j:T[1]==="@"?q:S}),i.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:r}),i.removeAttribute(c));if(me.test(i.tagName)){let c=i.textContent.split(g),_=c.length-1;if(_>0){i.textContent=M?M.emptyScript:"";for(let f=0;f<_;f++)i.append(c[f],L()),y.nextNode(),a.push({type:2,index:++r});i.append(c[_],L())}}}else if(i.nodeType===8)if(i.data===_e)a.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:r}),c+=g.length-1}r++}}static createElement(e,t){let s=v.createElement("template");return s.innerHTML=e,s}};function A(o,e,t=o,s){if(e===w)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,r=O(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=A(o,i._$AS(o,e.values),i,s)),e}var F=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??v).importNode(t,!0);y.currentNode=i;let r=y.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new N(r,r.nextSibling,this,e):a.type===1?d=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(d=new W(r,this,e)),this._$AV.push(d),a=s[++l]}n!==a?.index&&(r=y.nextNode(),n++)}return y.currentNode=v,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},N=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),O(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Le(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=k.createElement(fe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new F(i,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new k(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let r of e)i===t.length?t.push(s=new o(this.O(L()),this.O(L()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=re(e).nextSibling;re(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){let r=this.strings,n=!1;if(r===void 0)e=A(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==w,n&&(this._$AH=e);else{let l=e,a,d;for(e=r[0],a=0;a<r.length-1;a++)d=A(this,l[s+a],t,a),d===w&&(d=this._$AH[a]),n||=!O(d)||d!==this._$AH[a],d===h?e=h:e!==h&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Z=class extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},j=class extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},q=class extends S{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??h)===w)return;let s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},W=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}};var ke=K.litHtmlPolyfillSupport;ke?.(k,N),(K.litHtmlVersions??=[]).push("3.3.2");var ge=(o,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let r=t?.renderBefore??null;s._$litPart$=i=new N(e.insertBefore(L(),r),r,void 0,t??{})}return i._$AI(o),i};var Y=globalThis,$=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};$._$litElement$=!0,$.finalized=!0,Y.litElementHydrateSupport?.({LitElement:$});var Ne=Y.litElementPolyfillSupport;Ne?.({LitElement:$});(Y.litElementVersions??=[]).push("4.2.2");var X="pulse-climate-card-editor";var Te="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Re="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Ue="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";async function $e(o){if(!window.loadCardHelpers)return!1;try{return(await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),!0}catch(e){return console.warn(`${o} failed to load card helpers:`,e),!1}}function be(o,e,t,s){return u`
    ${e>1?u`
      <ha-icon-button
        .label=${"Move up"}
        .path=${Te}
        class="move-icon"
        .disabled=${o===0}
        @click=${()=>t(o,-1)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${"Move down"}
        .path=${Re}
        class="move-icon"
        .disabled=${o===e-1}
        @click=${()=>t(o,1)}
      ></ha-icon-button>
    `:h}
    <ha-icon-button
      .label=${"Remove"}
      .path=${Ue}
      class="remove-icon"
      @click=${()=>s(o)}
    ></ha-icon-button>
  `}function C(o){return o.label||o.name||""}var He=[{value:"default",label:"Default"},{value:"compact",label:"Compact"}],Me=[{label:"Charts & Visuals",sections:[{value:"zones",label:"Zones"},{value:"graph",label:"Graph"},{value:"radial",label:"Radial"},{value:"donut",label:"Donut"},{value:"thermal_strip",label:"Thermal strip"},{value:"comfort_strip",label:"Comfort strip"},{value:"energy_flow",label:"Energy flow"}]},{label:"Tado CE",hint:"Requires Tado CE integration",sections:[{value:"api",label:"API"},{value:"bridge",label:"Bridge"},{value:"homekit",label:"HomeKit"},{value:"weather",label:"Weather"},{value:"environment",label:"Environment"},{value:"thermal",label:"Thermal"},{value:"schedule",label:"Schedule"}]}];function De(){return[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"title",label:"Title",selector:{text:{}}},{name:"layout",label:"Layout",selector:{select:{options:He,mode:"dropdown"}}},{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"show_temp_bar",label:"Temp bar",selector:{boolean:{}}},{name:"show_power_bar",label:"Power bar",selector:{boolean:{}}},{name:"interactive",label:"Slider",selector:{boolean:{}}}]}]}var Q=class extends ${_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{type:Object}}}_config=null;async connectedCallback(){super.connectedCallback(),!this._helpersLoaded&&(this._helpersLoaded=await $e("Pulse Climate Card:"),this.requestUpdate())}setConfig(e){this._config={...e}}_getZones(){return this._config?.zones?this._config.zones.map(e=>typeof e=="string"?{entity:e}:{...e}):this._config?.entity?[{entity:this._config.entity}]:[]}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_zoneChanged(e,t){if(!this._config)return;let s=this._getZones();s[e]={...s[e],entity:t.detail?.value||""};let i={...this._config,zones:s};delete i.entity,this._fireConfigChanged(i)}_removeZone(e){if(!this._config)return;let t=this._getZones();t.splice(e,1),this._fireConfigChanged({...this._config,zones:t})}_moveZone(e,t){if(!this._config)return;let s=this._getZones(),i=e+t;i<0||i>=s.length||([s[e],s[i]]=[s[i],s[e]],this._fireConfigChanged({...this._config,zones:s}))}_addZone(e){let t=e.detail?.value;if(!t||!this._config)return;e.target.value="";let s=[...this._getZones(),{entity:t}],i={...this._config,zones:s};delete i.entity,this._fireConfigChanged(i)}_getSections(){return this._config?.sections?this._config.sections.map(e=>typeof e=="string"?e:e.type):["zones"]}_getSectionsRaw(){return this._config?.sections?this._config.sections.map(e=>typeof e=="string"?e:{...e}):["zones"]}_getSectionConfig(e){let s=this._getSectionsRaw().find(i=>(typeof i=="string"?i:i.type)===e);return!s||typeof s=="string"?{}:s}_toggleSection(e,t){let s=this._getSectionsRaw();t&&!s.some(i=>(typeof i=="string"?i:i.type)===e)?s.push(e):t||(s=s.filter(i=>(typeof i=="string"?i:i.type)!==e)),this._fireConfigChanged({...this._config,sections:s})}_updateSectionProp(e,t,s){let i=this._getSectionsRaw(),r=i.findIndex(a=>(typeof a=="string"?a:a.type)===e);if(r===-1)return;let n=i[r];typeof n=="string"?n={type:n}:n={...n},s===""||s===void 0||s===null?delete n[t]:n[t]=s;let l=Object.keys(n).filter(a=>a!=="type");i[r]=l.length===0?n.type:n,this._fireConfigChanged({...this._config,sections:i})}_settingsChanged(e){let t=e.detail?.value;if(!t)return;let s={...this._config};t.title!==void 0&&(s.title=t.title||void 0),t.layout!==void 0&&(s.layout=t.layout),t.columns!==void 0&&(s.columns=Number(t.columns)||1),t.show_temp_bar!==void 0&&(s.show_temp_bar=t.show_temp_bar),t.show_power_bar!==void 0&&(s.show_power_bar=t.show_power_bar),t.interactive!==void 0&&(s.interactive=t.interactive),this._fireConfigChanged(s)}_renderSectionSettings(e,t){if(!this._getSections().includes(e))return h;switch(e){case"graph":return u`
          <div class="section-settings">
            <ha-form
              .hass=${t}
              .data=${{hours_to_show:this._getSectionConfig("graph").hours_to_show||24,height:this._getSectionConfig("graph").height||80,stacked:this._getSectionConfig("graph").stacked||!1}}
              .schema=${[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Graph hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"height",label:"Graph height (px)",selector:{number:{min:40,max:200,mode:"box"}}}]},{name:"stacked",label:"Stacked (temp + humidity)",selector:{boolean:{}}}]}
              .computeLabel=${C}
              @value-changed=${s=>{let i=s.detail?.value;i&&(i.hours_to_show!==void 0&&this._updateSectionProp("graph","hours_to_show",Number(i.hours_to_show)||24),i.height!==void 0&&this._updateSectionProp("graph","height",Number(i.height)||80),i.stacked!==void 0&&this._updateSectionProp("graph","stacked",i.stacked||void 0))}}
            ></ha-form>
          </div>
        `;case"radial":{let s=this._getSectionConfig("radial"),i=s.attribute||"temperature",r=i==="temperature"||i==="both",n=i==="humidity"||i==="both";return u`
          <div class="section-settings">
            <ha-form
              .hass=${t}
              .data=${{attribute:i}}
              .schema=${[{name:"attribute",label:"Display",selector:{select:{options:[{value:"temperature",label:"Temperature"},{value:"humidity",label:"Humidity"},{value:"both",label:"Both"}],mode:"dropdown"}}}]}
              .computeLabel=${C}
              @value-changed=${l=>{let a=l.detail?.value?.attribute;a!==void 0&&this._updateSectionProp("radial","attribute",a==="temperature"?void 0:a)}}
            ></ha-form>
            ${r?u`
              <ha-entity-picker
                .hass=${t}
                .value=${s.outdoor_temp_entity||""}
                .includeDomains=${["sensor","weather"]}
                .label=${"Outdoor temperature entity"}
                allow-custom-entity
                @value-changed=${l=>this._updateSectionProp("radial","outdoor_temp_entity",l.detail?.value||"")}
              ></ha-entity-picker>
            `:h}
            ${n?u`
              <ha-entity-picker
                .hass=${t}
                .value=${s.outdoor_humidity_entity||""}
                .includeDomains=${["sensor"]}
                .label=${"Outdoor humidity entity"}
                allow-custom-entity
                @value-changed=${l=>this._updateSectionProp("radial","outdoor_humidity_entity",l.detail?.value||"")}
              ></ha-entity-picker>
            `:h}
          </div>
        `}case"thermal_strip":return u`
          <div class="section-settings">
            <ha-form
              .hass=${t}
              .data=${{attribute:this._getSectionConfig("thermal_strip").attribute||"temperature",hours_to_show:this._getSectionConfig("thermal_strip").hours_to_show||24,slots_per_hour:this._getSectionConfig("thermal_strip").slots_per_hour||2}}
              .schema=${[{name:"attribute",label:"Display",selector:{select:{options:[{value:"temperature",label:"Temperature"},{value:"humidity",label:"Humidity"}],mode:"dropdown"}}},{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"slots_per_hour",label:"Slots/hr",selector:{number:{min:1,max:12,mode:"box"}}}]}]}
              .computeLabel=${C}
              @value-changed=${s=>{let i=s.detail?.value;i&&(i.attribute!==void 0&&this._updateSectionProp("thermal_strip","attribute",i.attribute==="temperature"?void 0:i.attribute),i.hours_to_show!==void 0&&this._updateSectionProp("thermal_strip","hours_to_show",Number(i.hours_to_show)||24),i.slots_per_hour!==void 0&&this._updateSectionProp("thermal_strip","slots_per_hour",Number(i.slots_per_hour)||2))}}
            ></ha-form>
          </div>
        `;case"comfort_strip":return u`
          <div class="section-settings">
            <ha-form
              .hass=${t}
              .data=${{hours_to_show:this._getSectionConfig("comfort_strip").hours_to_show||24,slots_per_hour:this._getSectionConfig("comfort_strip").slots_per_hour||1}}
              .schema=${[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Comfort hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"slots_per_hour",label:"Comfort slots/hr",selector:{number:{min:1,max:12,mode:"box"}}}]}]}
              .computeLabel=${C}
              @value-changed=${s=>{let i=s.detail?.value;i&&(i.hours_to_show!==void 0&&this._updateSectionProp("comfort_strip","hours_to_show",Number(i.hours_to_show)||24),i.slots_per_hour!==void 0&&this._updateSectionProp("comfort_strip","slots_per_hour",Number(i.slots_per_hour)||1))}}
            ></ha-form>
          </div>
        `;default:return h}}render(){let e=this.hass;if(!e||!this._config)return h;let t=this._getZones(),s=this._getSections(),i={title:this._config.title||"",layout:this._config.layout||"default",columns:this._config.columns||1,show_temp_bar:this._config.show_temp_bar!==!1,show_power_bar:this._config.show_power_bar!==!1,interactive:this._config.interactive===!0},r=s.length;return u`
      <div class="editor">
        <h3>Zones</h3>
        <div class="entities">
          ${t.map((n,l)=>u`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${e}
                    .value=${n.entity}
                    .includeDomains=${["climate","water_heater"]}
                    allow-custom-entity
                    @value-changed=${a=>this._zoneChanged(l,a)}
                  ></ha-entity-picker>
                  ${be(l,t.length,(a,d)=>this._moveZone(a,d),a=>this._removeZone(a))}
                </div>
              </div>
            `)}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${e}
          .includeDomains=${["climate","water_heater"]}
          @value-changed=${this._addZone}
        ></ha-entity-picker>

        <h3>Card Settings</h3>
        <ha-form
          .hass=${e}
          .data=${i}
          .schema=${De()}
          .computeLabel=${C}
          @value-changed=${this._settingsChanged}
        ></ha-form>

        ${r===0?u`
          <div class="section-hint">No sections enabled — the card will be empty.</div>
        `:h}

        ${Me.map(n=>u`
          <ha-expansion-panel .header=${n.label} outlined>
            ${n.hint?u`<div slot="secondary">${n.hint}</div>`:h}
            <div class="section-grid">
              ${n.sections.map(l=>u`
                <label class="section-chip ${s.includes(l.value)?"active":""}">
                  <ha-switch
                    .checked=${s.includes(l.value)}
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
    `}static get styles(){return z`
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
      h3:first-child { margin-top: 0; }
      .entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .entity-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
      }
      .entity-row-main {
        display: flex;
        align-items: center;
      }
      .entity-row-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .move-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
      ha-expansion-panel {
        margin-bottom: 4px;
      }
      .section-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        padding: 8px 0;
      }
      .section-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--primary-text-color);
        cursor: pointer;
      }
      .section-chip ha-switch {
        --switch-unchecked-button-color: var(--disabled-color, #bdbdbd);
      }
      .section-settings {
        padding: 4px 0 8px;
        border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
        margin-top: 4px;
      }
      .section-hint {
        font-size: 12px;
        color: var(--warning-color, #FF9800);
        padding: 4px 0 8px;
      }
    `}};customElements.get(X)||customElements.define(X,Q);
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

var U=globalThis,T=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),ee=new WeakMap,w=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(T&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(t,e))}return e}toString(){return this.cssText}},te=n=>new w(typeof n=="string"?n:n+"",void 0,I),j=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new w(t,n,I)},ie=(n,e)=>{if(T)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},z=T?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return te(t)})(n):n;var{is:$e,defineProperty:ye,getOwnPropertyDescriptor:be,getOwnPropertyNames:ve,getOwnPropertySymbols:Ae,getPrototypeOf:Ee}=Object,N=globalThis,se=N.trustedTypes,xe=se?se.emptyScript:"",we=N.reactiveElementPolyfillSupport,S=(n,e)=>n,B={toAttribute(n,e){switch(e){case Boolean:n=n?xe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},oe=(n,e)=>!$e(n,e),ne={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&ye(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:o}=be(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let l=s?.call(this);o?.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let e=Ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let t=this.properties,i=[...ve(t),...Ae(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(z(s))}else e!==void 0&&t.push(z(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:B).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:B;this._$Em=s;let l=r.fromAttribute(t,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){if(e!==void 0){let r=this.constructor;if(s===!1&&(o=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??oe)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:r}=o,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[S("elementProperties")]=new Map,_[S("finalized")]=new Map,we?.({ReactiveElement:_}),(N.reactiveElementVersions??=[]).push("2.1.2");var G=globalThis,re=n=>n,H=G.trustedTypes,ae=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,ue="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+f,Se=`<${me}>`,b=document,L=()=>b.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",J=Array.isArray,Ce=n=>J(n)||typeof n?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,he=/>/g,$=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,de=/"/g,_e=/^(?:script|style|textarea|title)$/i,Y=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),R=Y(1),De=Y(2),Ie=Y(3),v=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pe=new WeakMap,y=b.createTreeWalker(b,129);function fe(n,e){if(!J(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(e):e}var Le=(n,e)=>{let t=n.length-1,i=[],s,o=e===2?"<svg>":e===3?"<math>":"",r=C;for(let l=0;l<t;l++){let a=n[l],c,d,h=-1,m=0;for(;m<a.length&&(r.lastIndex=m,d=r.exec(a),d!==null);)m=r.lastIndex,r===C?d[1]==="!--"?r=le:d[1]!==void 0?r=he:d[2]!==void 0?(_e.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=$):d[3]!==void 0&&(r=$):r===$?d[0]===">"?(r=s??C,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?$:d[3]==='"'?de:ce):r===de||r===ce?r=$:r===le||r===he?r=C:(r=$,s=void 0);let u=r===$&&n[l+1].startsWith("/>")?" ":"";o+=r===C?a+Se:h>=0?(i.push(c),a.slice(0,h)+ue+a.slice(h)+f+u):a+f+(h===-2?l:u)}return[fe(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},O=class n{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0,l=e.length-1,a=this.parts,[c,d]=Le(e,t);if(this.el=n.createElement(c,i),y.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(ue)){let m=d[r++],u=s.getAttribute(h).split(f),M=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:M[2],strings:u,ctor:M[1]==="."?K:M[1]==="?"?W:M[1]==="@"?q:x}),s.removeAttribute(h)}else h.startsWith(f)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(_e.test(s.tagName)){let h=s.textContent.split(f),m=h.length-1;if(m>0){s.textContent=H?H.emptyScript:"";for(let u=0;u<m;u++)s.append(h[u],L()),y.nextNode(),a.push({type:2,index:++o});s.append(h[m],L())}}}else if(s.nodeType===8)if(s.data===me)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(f,h+1))!==-1;)a.push({type:7,index:o}),h+=f.length-1}o++}}static createElement(e,t){let i=b.createElement("template");return i.innerHTML=e,i}};function E(n,e,t=n,i){if(e===v)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,o=P(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=E(n,s._$AS(n,e.values),s,i)),e}var V=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??b).importNode(t,!0);y.currentNode=s;let o=y.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new k(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new Z(o,this,e)),this._$AV.push(c),a=i[++l]}r!==a?.index&&(o=y.nextNode(),r++)}return y.currentNode=b,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},k=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),P(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==v&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(fe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let o=new V(s,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new O(e)),t}k(e){J(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let o of e)s===t.length?t.push(i=new n(this.O(L()),this.O(L()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=re(e).nextSibling;re(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},x=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,s){let o=this.strings,r=!1;if(o===void 0)e=E(this,e,t,0),r=!P(e)||e!==this._$AH&&e!==v,r&&(this._$AH=e);else{let l=e,a,c;for(e=o[0],a=0;a<o.length-1;a++)c=E(this,l[i+a],t,a),c===v&&(c=this._$AH[a]),r||=!P(c)||c!==this._$AH[a],c===p?e=p:e!==p&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}r&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},K=class extends x{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},W=class extends x{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}},q=class extends x{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??p)===v)return;let i=this._$AH,s=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Z=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}};var Pe=G.litHtmlPolyfillSupport;Pe?.(O,k),(G.litHtmlVersions??=[]).push("3.3.2");var ge=(n,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let o=t?.renderBefore??null;i._$litPart$=s=new k(e.insertBefore(L(),o),o,void 0,t??{})}return s._$AI(n),s};var X=globalThis,g=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return v}};g._$litElement$=!0,g.finalized=!0,X.litElementHydrateSupport?.({LitElement:g});var Oe=X.litElementPolyfillSupport;Oe?.({LitElement:g});(X.litElementVersions??=[]).push("4.2.2");var A={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};var D=[{value:"outside",label:"Outside"},{value:"inside",label:"Inside"},{value:"off",label:"Off"}],ke=[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"title",label:"Title",selector:{text:{}}},{name:"layout",label:"Layout",selector:{select:{options:[{value:"default",label:"Default"},{value:"compact",label:"Compact"}],mode:"dropdown"}}},{name:"sparkline_show",label:"Sparkline",selector:{boolean:{}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"height",label:"Height",selector:{text:{}}},{name:"border_radius",label:"Radius",selector:{text:{}}},{name:"color",label:"Color",selector:{text:{}}}]}],Me=[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"gap",label:"Gap",selector:{text:{}}},{name:"decimal",label:"Decimals",selector:{number:{min:0,max:6,mode:"box"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"min",label:"Min",selector:{number:{mode:"box"}}},{name:"max",label:"Max",selector:{number:{mode:"box"}}},{name:"target_value",label:"Target",selector:{text:{}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"bar_width",label:"Bar Width (%)",selector:{number:{min:1,max:100,mode:"box"}}},{name:"font_size",label:"Font Size",selector:{text:{}}},{name:"complementary",label:"Invert Fill",selector:{boolean:{}}}]}],Ue=[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"pos_name",label:"Name",selector:{select:{options:D,mode:"dropdown"}}},{name:"pos_value",label:"Value",selector:{select:{options:D,mode:"dropdown"}}},{name:"pos_icon",label:"Icon",selector:{select:{options:D,mode:"dropdown"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"pos_indicator",label:"Indicator",selector:{select:{options:D,mode:"dropdown"}}},{name:"indicator_period",label:"Lookback (min)",selector:{number:{min:1,max:1440,mode:"box"}}},{name:"show_delta",label:"Show Delta",selector:{boolean:{}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"anim_effect",label:"Effect",selector:{select:{options:[{value:"none",label:"None"},{value:"charge",label:"Charge"}],mode:"dropdown"}}},{name:"anim_speed",label:"Speed (s)",selector:{number:{min:0,max:5,step:.1,mode:"box"}}},{name:"limit_value",label:"Clamp Value",selector:{boolean:{}}}]}],Q=class extends g{_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}async connectedCallback(){if(super.connectedCallback(),!this._helpersLoaded&&window.loadCardHelpers)try{let e=await window.loadCardHelpers();this._helpersLoaded=!0,(await e.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement()}catch(e){console.warn("Pulse Card: failed to load card helpers:",e)}}setConfig(e){this._config=e}_getEntities(){let e=this._config;return e.entities?e.entities.map(t=>typeof t=="string"?{entity:t}:{...t}):e.entity?[{entity:e.entity}]:[]}_fireConfigChanged(e){this._config=e;let t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_entityChanged(e,t){let i=t.detail.value,s=this._getEntities();i===""||i===void 0?s.splice(e,1):s[e]={...s[e],entity:i},this._updateEntities(s)}_entityFieldChanged(e,t,i){let s=i.target.value??"",o=this._getEntities();s===""||s===void 0?delete o[e][t]:o[e]={...o[e],[t]:s},this._updateEntities(o)}_removeEntity(e){let t=this._getEntities();t.splice(e,1),this._updateEntities(t)}_moveEntity(e,t){let i=this._getEntities(),s=e+t;s<0||s>=i.length||([i[e],i[s]]=[i[s],i[e]],this._updateEntities(i))}_addEntity(e){let t=e.detail.value;if(!t)return;let i=this._getEntities();i.push({entity:t}),e.target.value="",this._updateEntities(i)}_updateEntities(e){let t={...this._config},i=this._config;e.length<=1&&!i.entities?(t.entity=e[0]?.entity||"",delete t.entities):(t.entities=e,delete t.entity),this._fireConfigChanged(t)}_settingsChanged(e){e.stopPropagation();let t=e.detail.value,i={...this._config},s=["title","height","border_radius","color","columns","gap","min","max","decimal","bar_width","font_size"];for(let l of s){let a=t[l];a==null||a===""?delete i[l]:i[l]=a}let o=["complementary","limit_value","entity_row"];for(let l of o)t[l]===!0?i[l]=!0:t[l]===!1&&delete i[l];this._applyTarget(i,t.target_value);let r=[["positions",{pos_name:"name",pos_value:"value",pos_icon:"icon",pos_indicator:"indicator"}],["animation",{anim_effect:"effect",anim_speed:"speed"},(l,a)=>l==="effect"&&a==="none"?void 0:a],["indicator",{pos_indicator:"show",indicator_period:"period",show_delta:"show_delta"},(l,a)=>l==="show"?a&&a!=="off"?!0:void 0:l==="show_delta"?a===!0?!0:void 0:a]];for(let[l,a,c]of r){let d={...i[l]||{}};for(let[h,m]of Object.entries(a)){let u=t[h];c&&(u=c(m,u)),u==null||u===""?delete d[m]:d[m]=u}Object.keys(d).length>0?i[l]=d:delete i[l]}if(t.sparkline_show===!0){let l=typeof i.sparkline=="object"&&i.sparkline!==null?i.sparkline:{};i.sparkline={...l,show:!0}}else t.sparkline_show===!1&&delete i.sparkline;t.layout&&t.layout!=="default"?i.layout=t.layout:delete i.layout,this._fireConfigChanged(i)}_applyTarget(e,t){if(t==null||t===""){delete e.target;return}let i=parseFloat(t),s=isNaN(i)?t:i,o=this._config?.target;typeof o=="object"&&o!==null?e.target={...o,value:s}:e.target=s}_computeLabel(e){return e.label||e.name||""}render(){let e=this.hass;if(!e||!this._config)return p;let t=this._getEntities(),i=this._config.target,s="";i!=null&&(typeof i=="object"&&i.value!==void 0?s=String(i.value):s=String(i));let o={title:this._config.title||"",height:this._config.height||"",border_radius:this._config.border_radius||"",color:this._config.color||"",decimal:this._config.decimal??"",columns:this._config.columns||A.columns,gap:this._config.gap||"",target_value:s,bar_width:this._config.bar_width??"",font_size:this._config.font_size||"",complementary:this._config.complementary||!1,limit_value:this._config.limit_value||!1,min:this._config.min??"",max:this._config.max??"",pos_name:this._config.positions?.name??A.positions.name,pos_value:this._config.positions?.value??A.positions.value,pos_icon:this._config.positions?.icon??A.positions.icon,pos_indicator:this._config.positions?.indicator??A.positions.indicator,indicator_period:this._config.indicator?.period??"",show_delta:this._config.indicator?.show_delta||!1,anim_effect:this._config.animation?.effect??A.animation.effect,anim_speed:this._config.animation?.speed??"",sparkline_show:typeof this._config.sparkline=="object"?this._config.sparkline?.show||!1:this._config.sparkline===!0,layout:this._config.layout||"default"};return R`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${t.map((r,l)=>R`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${e}
                    .value=${r.entity}
                    .index=${l}
                    allow-custom-entity
                    @value-changed=${a=>this._entityChanged(l,a)}
                  ></ha-entity-picker>
                  ${t.length>1?R`
                    <ha-icon-button
                      .label=${"Move up"}
                      .path=${"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}
                      class="move-icon"
                      .disabled=${l===0}
                      @click=${()=>this._moveEntity(l,-1)}
                    ></ha-icon-button>
                    <ha-icon-button
                      .label=${"Move down"}
                      .path=${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
                      class="move-icon"
                      .disabled=${l===t.length-1}
                      @click=${()=>this._moveEntity(l,1)}
                    ></ha-icon-button>
                  `:p}
                  <ha-icon-button
                    .label=${"Remove"}
                    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                    class="remove-icon"
                    @click=${()=>this._removeEntity(l)}
                  ></ha-icon-button>
                </div>
                <div class="entity-row-fields">
                  <ha-textfield
                    .label=${"Name"}
                    .value=${r.name||""}
                    @input=${a=>this._entityFieldChanged(l,"name",a)}
                  ></ha-textfield>
                  <ha-textfield
                    .label=${"Color"}
                    .value=${r.color||""}
                    @input=${a=>this._entityFieldChanged(l,"color",a)}
                  ></ha-textfield>
                </div>
              </div>
            `)}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${e}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${e}
          .data=${o}
          .schema=${ke}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Layout</h3>
        <ha-form
          .hass=${e}
          .data=${o}
          .schema=${Me}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Display</h3>
        <ha-form
          .hass=${e}
          .data=${o}
          .schema=${Ue}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `}static get styles(){return j`
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
      .entity-row-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon[disabled] {
        opacity: 0.3;
        pointer-events: none;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
    `}};customElements.get("pulse-card-editor")||customElements.define("pulse-card-editor",Q);export{Q as PulseCardEditor};
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

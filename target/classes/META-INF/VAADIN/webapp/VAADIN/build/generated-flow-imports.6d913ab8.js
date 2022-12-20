import{i as y,r as v,T as M,t as pt,a as Ps,b as Ts,c as Os,d as $,e as Ss,x as Ns,f as zs,Z as Ms,w as Is,g as Ls,h as ks,_ as Ds}from"./indexhtml.185923cd.js";/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hs=y`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,gi=document.createElement("template");gi.innerHTML=`<style>${Hs.toString().replace(":host","html")}</style>`;document.head.appendChild(gi.content);const Fs=y`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;v("vaadin-button",Fs,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(i,t){return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Rs=/(url\()([^)]*)(\))/g,Bs=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,ft,x;function ot(i,t){if(i&&Bs.test(i)||i==="//")return i;if(ft===void 0){ft=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",ft=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),ft)try{return new URL(i,t).href}catch{return i}return x||(x=document.implementation.createHTMLDocument("temp"),x.base=x.createElement("base"),x.head.appendChild(x.base),x.anchor=x.createElement("a"),x.body.appendChild(x.anchor)),x.base.href=t,x.anchor.href=i,x.anchor.href||i}function he(i,t){return i.replace(Rs,function(e,o,s,n){return o+"'"+ot(s.replace(/["']/g,""),t)+"'"+n})}function ue(i){return i.substring(0,i.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vs=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Us=Vs&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const i=new CSSStyleSheet;i.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[i],t.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})();let js=window.Polymer&&window.Polymer.rootPath||ue(document.baseURI||window.location.href),wt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,ca=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Ct=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,qs=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,$s=window.Polymer&&window.Polymer.legacyOptimizations||!1,yi=window.Polymer&&window.Polymer.legacyWarnings||!1,Ys=window.Polymer&&window.Polymer.syncInitialRender||!1,Wt=window.Polymer&&window.Polymer.legacyUndefined||!1,Ws=window.Polymer&&window.Polymer.orderedComputed||!1,Gs=!0;const Ks=function(i){Gs=i};let Ie=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Js=window.Polymer&&window.Polymer.fastDomIf||!1,ha=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,ua=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Xs=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Zs=0;const m=function(i){let t=i.__mixinApplications;t||(t=new WeakMap,i.__mixinApplications=t);let e=Zs++;function o(s){let n=s.__mixinSet;if(n&&n[e])return s;let r=t,a=r.get(s);if(!a){a=i(s),r.set(s,a);let l=Object.create(a.__mixinSet||n||null);l[e]=!0,a.__mixinSet=l}return a}return o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let pe={},vi={};function Le(i,t){pe[i]=vi[i.toLowerCase()]=t}function ke(i){return pe[i]||vi[i.toLowerCase()]}function Qs(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}class Y extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let o=ke(t);return o&&e?o.querySelector(e):o}return null}attributeChangedCallback(t,e,o,s){e!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=ot(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ue(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Ct&&ke(t)!==void 0)throw Le(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Le(t,this),Qs(this)}}}Y.prototype.modules=pe;customElements.define("dom-module",Y);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const to="link[rel=import][type~=css]",eo="include",De="shady-unscoped";function fe(i){return Y.import(i)}function He(i){let t=i.body?i.body:i;const e=he(t.textContent,i.baseURI),o=document.createElement("style");return o.textContent=e,o}function io(i){const t=i.trim().split(/\s+/),e=[];for(let o=0;o<t.length;o++)e.push(...so(t[o]));return e}function so(i){const t=fe(i);if(!t)return console.warn("Could not find style data in module named",i),[];if(t._styles===void 0){const e=[];e.push(..._e(t));const o=t.querySelector("template");o&&e.push(...St(o,t.assetpath)),t._styles=e}return t._styles}function St(i,t){if(!i._styles){const e=[],o=i.content.querySelectorAll("style");for(let s=0;s<o.length;s++){let n=o[s],r=n.getAttribute(eo);r&&e.push(...io(r).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(n.textContent=he(n.textContent,t)),e.push(n)}i._styles=e}return i._styles}function oo(i){let t=fe(i);return t?_e(t):[]}function _e(i){const t=[],e=i.querySelectorAll(to);for(let o=0;o<e.length;o++){let s=e[o];if(s.import){const n=s.import,r=s.hasAttribute(De);if(r&&!n._unscopedStyle){const a=He(n);a.setAttribute(De,""),n._unscopedStyle=a}else n._style||(n._style=He(n));t.push(r?n._unscopedStyle:n._style)}}return t}function pa(i){let t=i.trim().split(/\s+/),e="";for(let o=0;o<t.length;o++)e+=no(t[o]);return e}function no(i){let t=fe(i);if(t&&t._cssText===void 0){let e=ao(t),o=t.querySelector("template");o&&(e+=ro(o,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",i),t&&t._cssText||""}function ro(i,t){let e="";const o=St(i,t);for(let s=0;s<o.length;s++){let n=o[s];n.parentNode&&n.parentNode.removeChild(n),e+=n.textContent}return e}function ao(i){let t="",e=_e(i);for(let o=0;o<e.length;o++)t+=e[o].textContent;return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const g=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Gt(i){return i.indexOf(".")>=0}function F(i){let t=i.indexOf(".");return t===-1?i:i.slice(0,t)}function bi(i,t){return i.indexOf(t+".")===0}function rt(i,t){return t.indexOf(i+".")===0}function xt(i,t,e){return t+e.slice(i.length)}function fa(i,t){return i===t||bi(i,t)||rt(i,t)}function it(i){if(Array.isArray(i)){let t=[];for(let e=0;e<i.length;e++){let o=i[e].toString().split(".");for(let s=0;s<o.length;s++)t.push(o[s])}return t.join(".")}else return i}function wi(i){return Array.isArray(i)?it(i).split("."):i.toString().split(".")}function b(i,t,e){let o=i,s=wi(t);for(let n=0;n<s.length;n++){if(!o)return;let r=s[n];o=o[r]}return e&&(e.path=s.join(".")),o}function Fe(i,t,e){let o=i,s=wi(t),n=s[s.length-1];if(s.length>1){for(let r=0;r<s.length-1;r++){let a=s[r];if(o=o[a],!o)return}o[n]=e}else o[t]=e;return s.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const At={},lo=/-[a-z]/g,co=/([A-Z])/g;function Ci(i){return At[i]||(At[i]=i.indexOf("-")<0?i:i.replace(lo,t=>t[1].toUpperCase()))}function Nt(i){return At[i]||(At[i]=i.replace(co,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ho=0,xi=0,V=[],uo=0,Kt=!1,Ai=document.createTextNode("");new window.MutationObserver(po).observe(Ai,{characterData:!0});function po(){Kt=!1;const i=V.length;for(let t=0;t<i;t++){let e=V[t];if(e)try{e()}catch(o){setTimeout(()=>{throw o})}}V.splice(0,i),xi+=i}const _a={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},ma={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},ga={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},Ei={run(i){return Kt||(Kt=!0,Ai.textContent=uo++),V.push(i),ho++},cancel(i){const t=i-xi;if(t>=0){if(!V[t])throw new Error("invalid async handle: "+i);V[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fo=Ei,Pi=m(i=>{class t extends i{static createProperties(o){const s=this.prototype;for(let n in o)n in s||s._createPropertyAccessor(n)}static attributeNameForProperty(o){return o.toLowerCase()}static typeForProperty(o){}_createPropertyAccessor(o,s){this._addPropertyToAttributeMap(o),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[o]||(this.__dataHasAccessor[o]=!0,this._definePropertyAccessor(o,s))}_addPropertyToAttributeMap(o){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[o];return s||(s=this.constructor.attributeNameForProperty(o),this.__dataAttributes[s]=o),s}_definePropertyAccessor(o,s){Object.defineProperty(this,o,{get(){return this.__data[o]},set:s?function(){}:function(n){this._setPendingProperty(o,n,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let o in this.__dataHasAccessor)this.hasOwnProperty(o)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[o]=this[o],delete this[o])}_initializeInstanceProperties(o){Object.assign(this,o)}_setProperty(o,s){this._setPendingProperty(o,s)&&this._invalidateProperties()}_getProperty(o){return this.__data[o]}_setPendingProperty(o,s,n){let r=this.__data[o],a=this._shouldPropertyChange(o,s,r);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(o in this.__dataOld)&&(this.__dataOld[o]=r),this.__data[o]=s,this.__dataPending[o]=s),a}_isPropertyPending(o){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(o))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,fo.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const o=this.__data,s=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(o,s,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(o,s,n)),this.__dataCounter--}_shouldPropertiesChange(o,s,n){return Boolean(s)}_propertiesChanged(o,s,n){}_shouldPropertyChange(o,s,n){return n!==s&&(n===n||s===s)}attributeChangedCallback(o,s,n,r){s!==n&&this._attributeToProperty(o,n),super.attributeChangedCallback&&super.attributeChangedCallback(o,s,n,r)}_attributeToProperty(o,s,n){if(!this.__serializing){const r=this.__dataAttributes,a=r&&r[o]||o;this[a]=this._deserializeValue(s,n||this.constructor.typeForProperty(a))}}_propertyToAttribute(o,s,n){this.__serializing=!0,n=arguments.length<3?this[o]:n,this._valueToNodeAttribute(this,n,s||this.constructor.attributeNameForProperty(o)),this.__serializing=!1}_valueToNodeAttribute(o,s,n){const r=this._serializeValue(s);(n==="class"||n==="name"||n==="slot")&&(o=g(o)),r===void 0?o.removeAttribute(n):o.setAttribute(n,r===""&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(o){switch(typeof o){case"boolean":return o?"":void 0;default:return o!=null?o.toString():void 0}}_deserializeValue(o,s){switch(s){case Boolean:return o!==null;case Number:return Number(o);default:return o}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ti={};let _t=HTMLElement.prototype;for(;_t;){let i=Object.getOwnPropertyNames(_t);for(let t=0;t<i.length;t++)Ti[i[t]]=!0;_t=Object.getPrototypeOf(_t)}const _o=(()=>window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1)();function mo(i,t){if(!Ti[t]){let e=i[t];e!==void 0&&(i.__data?i._setPendingProperty(t,e):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[t]=e))}}const go=m(i=>{const t=Pi(i);class e extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let n=0;n<s.length;n++)this.prototype._createPropertyAccessor(Ci(s[n]))}static attributeNameForProperty(s){return Nt(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let n in s)this._setProperty(n,s[n])}_ensureAttribute(s,n){const r=this;r.hasAttribute(s)||this._valueToNodeAttribute(r,n,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(_o(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,n){let r;switch(n){case Object:try{r=JSON.parse(s)}catch{r=s}break;case Array:try{r=JSON.parse(s)}catch{r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:r=isNaN(s)?String(s):Number(s),r=new Date(r);break;default:r=super._deserializeValue(s,n);break}return r}_definePropertyAccessor(s,n){mo(this,s),super._definePropertyAccessor(s,n)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return Boolean(this.__dataPending&&s in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yo={"dom-if":!0,"dom-repeat":!0};let Re=!1,Be=!1;function vo(){if(!Re){Re=!0;const i=document.createElement("textarea");i.placeholder="a",Be=i.placeholder===i.textContent}return Be}function bo(i){vo()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}const wo=(()=>{const i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,o)=>{const s=e.getAttribute(o);if(i&&o.startsWith("on-")){t.setAttribute(o,i.createScript(s,o));return}t.setAttribute(o,s)}})();function Co(i){let t=i.getAttribute("is");if(t&&yo[t]){let e=i;for(e.removeAttribute("is"),i=e.ownerDocument.createElement(t),e.parentNode.replaceChild(i,e),i.appendChild(e);e.attributes.length;){const{name:o}=e.attributes[0];wo(i,e,o),e.removeAttribute(o)}}return i}function Oi(i,t){let e=t.parentInfo&&Oi(i,t.parentInfo);if(e){for(let o=e.firstChild,s=0;o;o=o.nextSibling)if(t.parentIndex===s++)return o}else return i}function xo(i,t,e,o){o.id&&(t[o.id]=e)}function Ao(i,t,e){if(e.events&&e.events.length)for(let o=0,s=e.events,n;o<s.length&&(n=s[o]);o++)i._addMethodEventListenerToNode(t,n.name,n.value,i)}function Eo(i,t,e,o){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=o)}function Po(i,t,e){return i=i._methodHost||i,function(s){i[e]?i[e](s,s.detail):console.warn("listener method `"+e+"` not defined")}}const To=m(i=>{class t extends i{static _parseTemplate(o,s){if(!o._templateInfo){let n=o._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(s),n.stripWhiteSpace=s&&s.stripWhiteSpace||o.hasAttribute&&o.hasAttribute("strip-whitespace"),this._parseTemplateContent(o,n,{parent:null})}return o._templateInfo}static _parseTemplateContent(o,s,n){return this._parseTemplateNode(o.content,s,n)}static _parseTemplateNode(o,s,n){let r=!1,a=o;return a.localName=="template"&&!a.hasAttribute("preserve-content")?r=this._parseTemplateNestedTemplate(a,s,n)||r:a.localName==="slot"&&(s.hasInsertionPoint=!0),bo(a),a.firstChild&&this._parseTemplateChildNodes(a,s,n),a.hasAttributes&&a.hasAttributes()&&(r=this._parseTemplateNodeAttributes(a,s,n)||r),r||n.noted}static _parseTemplateChildNodes(o,s,n){if(!(o.localName==="script"||o.localName==="style"))for(let r=o.firstChild,a=0,l;r;r=l){if(r.localName=="template"&&(r=Co(r)),l=r.nextSibling,r.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)r.textContent+=c.textContent,l=c.nextSibling,o.removeChild(c),c=l;if(s.stripWhiteSpace&&!r.textContent.trim()){o.removeChild(r);continue}}let d={parentIndex:a,parentInfo:n};this._parseTemplateNode(r,s,d)&&(d.infoIndex=s.nodeInfoList.push(d)-1),r.parentNode&&a++}}static _parseTemplateNestedTemplate(o,s,n){let r=o,a=this._parseTemplate(r,s);return(a.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=a,!0}static _parseTemplateNodeAttributes(o,s,n){let r=!1,a=Array.from(o.attributes);for(let l=a.length-1,d;d=a[l];l--)r=this._parseTemplateNodeAttribute(o,s,n,d.name,d.value)||r;return r}static _parseTemplateNodeAttribute(o,s,n,r,a){return r.slice(0,3)==="on-"?(o.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:a}),!0):r==="id"?(n.id=a,!0):!1}static _contentForTemplate(o){let s=o._templateInfo;return s&&s.content||o.content}_stampTemplate(o,s){o&&!o.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(o),s=s||this.constructor._parseTemplate(o);let n=s.nodeInfoList,r=s.content||o.content,a=document.importNode(r,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(n.length);a.$={};for(let d=0,c=n.length,h;d<c&&(h=n[d]);d++){let u=l[d]=Oi(a,h);xo(this,a.$,u,h),Eo(this,u,h,s),Ao(this,u,h)}return a=a,a}_addMethodEventListenerToNode(o,s,n,r){r=r||o;let a=Po(r,s,n);return this._addEventListenerToNode(o,s,a),a}_addEventListenerToNode(o,s,n){o.addEventListener(s,n)}_removeEventListenerFromNode(o,s,n){o.removeEventListener(s,n)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let at=0;const lt=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Si="__computeInfo",Oo=/[A-Z]/;function Dt(i,t,e){let o=i[t];if(!o)o=i[t]={};else if(!i.hasOwnProperty(t)&&(o=i[t]=Object.create(i[t]),e))for(let s in o){let n=o[s],r=o[s]=Array(n.length);for(let a=0;a<n.length;a++)r[a]=n[a]}return o}function st(i,t,e,o,s,n){if(t){let r=!1;const a=at++;for(let l in e){let d=s?F(l):l,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==a)&&(!s||me(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(i,l,e,o,p.info,s,n),r=!0)}return r}return!1}function So(i,t,e,o,s,n,r,a){let l=!1,d=r?F(o):o,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==e)&&(!r||me(o,p.trigger))&&(p.info&&(p.info.lastRun=e),p.fn(i,o,s,n,p.info,r,a),l=!0);return l}function me(i,t){if(t){let e=t.name;return e==i||!!(t.structured&&bi(e,i))||!!(t.wildcard&&rt(e,i))}else return!0}function Ve(i,t,e,o,s){let n=typeof s.method=="string"?i[s.method]:s.method,r=s.property;n?n.call(i,i.__data[r],o[r]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function No(i,t,e,o,s){let n=i[f.NOTIFY],r,a=at++;for(let d in t)t[d]&&(n&&So(i,n,a,d,e,o,s)||s&&zo(i,d,e))&&(r=!0);let l;r&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function zo(i,t,e){let o=F(t);if(o!==t){let s=Nt(o)+"-changed";return Ni(i,s,e[t],t),!0}return!1}function Ni(i,t,e,o){let s={value:e,queueProperty:!0};o&&(s.path=o),g(i).dispatchEvent(new CustomEvent(t,{detail:s}))}function Mo(i,t,e,o,s,n){let a=(n?F(t):t)!=t?t:null,l=a?b(i,a):i.__data[t];a&&l===void 0&&(l=e[t]),Ni(i,s.eventName,l,a)}function Io(i,t,e,o,s){let n,r=i.detail,a=r&&r.path;a?(o=xt(e,o,a),n=r&&r.value):n=i.currentTarget[e],n=s?!n:n,(!t[f.READ_ONLY]||!t[f.READ_ONLY][o])&&t._setPendingPropertyOrPath(o,n,!0,Boolean(a))&&(!r||!r.queueProperty)&&t._invalidateProperties()}function Lo(i,t,e,o,s){let n=i.__data[t];wt&&(n=wt(n,s.attrName,"attribute",i)),i._propertyToAttribute(t,s.attrName,n)}function ko(i,t,e,o){let s=i[f.COMPUTE];if(s)if(Ws){at++;const n=Ho(i),r=[];for(let l in t)Ue(l,s,r,n,o);let a;for(;a=r.shift();)zi(i,"",t,e,a)&&Ue(a.methodInfo,s,r,n,o);Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),i.__dataPending=null}else{let n=t;for(;st(i,s,n,e,o);)Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),n=i.__dataPending,i.__dataPending=null}}const Do=(i,t,e)=>{let o=0,s=t.length-1,n=-1;for(;o<=s;){const r=o+s>>1,a=e.get(t[r].methodInfo)-e.get(i.methodInfo);if(a<0)o=r+1;else if(a>0)s=r-1;else{n=r;break}}n<0&&(n=s+1),t.splice(n,0,i)},Ue=(i,t,e,o,s)=>{const n=s?F(i):i,r=t[n];if(r)for(let a=0;a<r.length;a++){const l=r[a];l.info.lastRun!==at&&(!s||me(i,l.trigger))&&(l.info.lastRun=at,Do(l.info,e,o))}};function Ho(i){let t=i.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=i[f.COMPUTE];let{counts:o,ready:s,total:n}=Fo(i),r;for(;r=s.shift();){t.set(r,t.size);const a=e[r];a&&a.forEach(l=>{const d=l.info.methodInfo;--n,--o[d]===0&&s.push(d)})}n!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=t}return t}function Fo(i){const t=i[Si],e={},o=i[f.COMPUTE],s=[];let n=0;for(let r in t){const a=t[r];n+=e[r]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let r in o)t[r]||s.push(r);return{counts:e,ready:s,total:n}}function zi(i,t,e,o,s){let n=Jt(i,t,e,o,s);if(n===lt)return!1;let r=s.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[r]?i._setPendingProperty(r,n,!0):(i[r]=n,!1)}function Ro(i,t,e){let o=i.__dataLinkedPaths;if(o){let s;for(let n in o){let r=o[n];rt(n,t)?(s=xt(n,r,t),i._setPendingPropertyOrPath(s,e,!0,!0)):rt(r,t)&&(s=xt(r,n,t),i._setPendingPropertyOrPath(s,e,!0,!0))}}}function Ht(i,t,e,o,s,n,r){e.bindings=e.bindings||[];let a={kind:o,target:s,parts:n,literal:r,isCompound:n.length!==1};if(e.bindings.push(a),qo(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||Nt(s)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,Bo(i,t,a,c,l)}}function Bo(i,t,e,o,s){if(!o.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let n=o.dependencies,r={index:s,binding:e,part:o,evaluator:i};for(let a=0;a<n.length;a++){let l=n[a];typeof l=="string"&&(l=Ii(l),l.wildcard=!0),i._addTemplatePropertyEffect(t,l.rootProperty,{fn:Vo,info:r,trigger:l})}}}function Vo(i,t,e,o,s,n,r){let a=r[s.index],l=s.binding,d=s.part;if(n&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=xt(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&i._enqueueClient(a)}else{let c=s.evaluator._evaluateBinding(i,d,t,e,o,n);c!==lt&&Uo(i,a,l,d,c)}}function Uo(i,t,e,o,s){if(s=jo(t,s,e,o),wt&&(s=wt(s,e.target,e.kind,t)),e.kind=="attribute")i._valueToNodeAttribute(t,s,e.target);else{let n=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?(!t[f.READ_ONLY]||!t[f.READ_ONLY][n])&&t._setPendingProperty(n,s)&&i._enqueueClient(t):i._setUnmanagedPropertyToNode(t,n,s)}}function jo(i,t,e,o){if(e.isCompound){let s=i.__dataCompoundStorage[e.target];s[o.compoundIndex]=t,t=s.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(t=t==null?"":t),t}function qo(i){return Boolean(i.target)&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function $o(i,t){let{nodeList:e,nodeInfoList:o}=t;if(o.length)for(let s=0;s<o.length;s++){let n=o[s],r=e[s],a=n.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];Yo(r,d),Wo(r,i,d)}r.__dataHost=i}}function Yo(i,t){if(t.isCompound){let e=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),o=t.parts,s=new Array(o.length);for(let r=0;r<o.length;r++)s[r]=o[r].literal;let n=t.target;e[n]=s,t.literal&&t.kind=="property"&&(n==="className"&&(i=g(i)),i[n]=t.literal)}}function Wo(i,t,e){if(e.listenerEvent){let o=e.parts[0];i.addEventListener(e.listenerEvent,function(s){Io(s,t,e.target,o.source,o.negate)})}}function je(i,t,e,o,s,n){n=t.static||n&&(typeof n!="object"||n[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:n};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,e,{fn:o,info:r,trigger:l});return n&&i._addPropertyEffect(t.methodName,e,{fn:o,info:r}),r}function Jt(i,t,e,o,s){let n=i._methodHost||i,r=n[s.methodName];if(r){let a=i._marshalArgs(s.args,t,e);return a===lt?lt:r.apply(n,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Go=[],Mi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ko="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Jo="(?:'(?:[^'\\\\]|\\\\.)*')",Xo='(?:"(?:[^"\\\\]|\\\\.)*")',Zo="(?:"+Jo+"|"+Xo+")",qe="(?:("+Mi+"|"+Ko+"|"+Zo+")\\s*)",Qo="(?:"+qe+"(?:,\\s*"+qe+")*)",tn="(?:\\(\\s*(?:"+Qo+"?)\\)\\s*)",en="("+Mi+"\\s*"+tn+"?)",sn="(\\[\\[|{{)\\s*",on="(?:]]|}})",nn="(?:(!)\\s*)?",rn=sn+nn+en+on,$e=new RegExp(rn,"g");function Ye(i){let t="";for(let e=0;e<i.length;e++){let o=i[e].literal;t+=o||""}return t}function Ft(i){let t=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let o={methodName:t[1],static:!0,args:Go};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return an(s,o)}else return o}return null}function an(i,t){return t.args=i.map(function(e){let o=Ii(e);return o.literal||(t.static=!1),o},this),t}function Ii(i){let t=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},o=t[0];switch(o==="-"&&(o=t[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=F(t),e.structured=Gt(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function We(i,t,e){let o=b(i,e);return o===void 0&&(o=t[e]),o}function Li(i,t,e,o){const s={indexSplices:o};Wt&&!i._overrideLegacyUndefined&&(t.splices=s),i.notifyPath(e+".splices",s),i.notifyPath(e+".length",t.length),Wt&&!i._overrideLegacyUndefined&&(s.indexSplices=[])}function G(i,t,e,o,s,n){Li(i,t,e,[{index:o,addedCount:s,removed:n,object:t,type:"splice"}])}function ln(i){return i[0].toUpperCase()+i.substring(1)}const ge=m(i=>{const t=To(go(i));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(K.length){let s=K[K.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let n=this[f.READ_ONLY];for(let r in s)(!n||!n[r])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=s[r])}_addPropertyEffect(s,n,r){this._createPropertyAccessor(s,n==f.READ_ONLY);let a=Dt(this,n,!0)[s];a||(a=this[n][s]=[]),a.push(r)}_removePropertyEffect(s,n,r){let a=Dt(this,n,!0)[s],l=a.indexOf(r);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,n){let r=this[n];return Boolean(r&&r[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,f.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,f.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,f.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,f.COMPUTE)}_setPendingPropertyOrPath(s,n,r,a){if(a||F(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=b(this,s);if(s=Fe(this,s,n),!s||!super._shouldPropertyChange(s,n,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,n,r))return Ro(this,s,n),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,n,r);this[s]=n}return!1}_setUnmanagedPropertyToNode(s,n,r){(r!==s[n]||typeof r=="object")&&(n==="className"&&(s=g(s)),s[n]=r)}_setPendingProperty(s,n,r){let a=this.__dataHasPaths&&Gt(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,n,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=n:this.__data[s]=n,this.__dataPending[s]=n,(a||this[f.NOTIFY]&&this[f.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=r),!0):!1}_setProperty(s,n){this._setPendingProperty(s,n,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let n=0;n<s.length;n++){let r=s[n];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,n){for(let r in s)(n||!this[f.READ_ONLY]||!this[f.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,s[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,n,r){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ko(this,n,r,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(n,r,a),this._flushClients(),st(this,this[f.REFLECT],n,r,a),st(this,this[f.OBSERVE],n,r,a),l&&No(this,l,n,r,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,n,r){this[f.PROPAGATE]&&st(this,this[f.PROPAGATE],s,n,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,n,r)}_runEffectsForTemplate(s,n,r,a){const l=(d,c)=>{st(this,s.propertyEffects,d,r,c,s.nodeList);for(let h=s.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,r,c)};s.runEffects?s.runEffects(l,n,a):l(n,a)}linkPaths(s,n){s=it(s),n=it(n),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=n}unlinkPaths(s){s=it(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,n){let r={path:""},a=b(this,s,r);Li(this,a,r.path,n)}get(s,n){return b(n||this,s)}set(s,n,r){r?Fe(r,s,n):(!this[f.READ_ONLY]||!this[f.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,n,!0)&&this._invalidateProperties()}push(s,...n){let r={path:""},a=b(this,s,r),l=a.length,d=a.push(...n);return n.length&&G(this,a,r.path,l,n.length,[]),d}pop(s){let n={path:""},r=b(this,s,n),a=Boolean(r.length),l=r.pop();return a&&G(this,r,n.path,r.length,0,[l]),l}splice(s,n,r,...a){let l={path:""},d=b(this,s,l);n<0?n=d.length-Math.floor(-n):n&&(n=Math.floor(n));let c;return arguments.length===2?c=d.splice(n):c=d.splice(n,r,...a),(a.length||c.length)&&G(this,d,l.path,n,a.length,c),c}shift(s){let n={path:""},r=b(this,s,n),a=Boolean(r.length),l=r.shift();return a&&G(this,r,n.path,0,0,[l]),l}unshift(s,...n){let r={path:""},a=b(this,s,r),l=a.unshift(...n);return n.length&&G(this,a,r.path,0,n.length,[]),l}notifyPath(s,n){let r;if(arguments.length==1){let a={path:""};n=b(this,s,a),r=a.path}else Array.isArray(s)?r=it(s):r=s;this._setPendingPropertyOrPath(r,n,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,n){this._addPropertyEffect(s,f.READ_ONLY),n&&(this["_set"+ln(s)]=function(r){this._setProperty(s,r)})}_createPropertyObserver(s,n,r){let a={property:s,method:n,dynamicFn:Boolean(r)};this._addPropertyEffect(s,f.OBSERVE,{fn:Ve,info:a,trigger:{name:s}}),r&&this._addPropertyEffect(n,f.OBSERVE,{fn:Ve,info:a,trigger:{name:n}})}_createMethodObserver(s,n){let r=Ft(s);if(!r)throw new Error("Malformed observer expression '"+s+"'");je(this,r,f.OBSERVE,Jt,null,n)}_createNotifyingProperty(s){this._addPropertyEffect(s,f.NOTIFY,{fn:Mo,info:{eventName:Nt(s)+"-changed",property:s}})}_createReflectedProperty(s){let n=this.constructor.attributeNameForProperty(s);n[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+n+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,f.REFLECT,{fn:Lo,info:{attrName:n}})}_createComputedProperty(s,n,r){let a=Ft(n);if(!a)throw new Error("Malformed computed expression '"+n+"'");const l=je(this,a,f.COMPUTE,zi,s,r);Dt(this,Si)[s]=l}_marshalArgs(s,n,r){const a=this.__data,l=[];for(let d=0,c=s.length;d<c;d++){let{name:h,structured:u,wildcard:p,value:_,literal:A}=s[d];if(!A)if(p){const E=rt(h,n),w=We(a,r,E?n:h);_={path:E?n:h,value:w,base:E?b(a,h):w}}else _=u?We(a,r,h):a[h];if(Wt&&!this._overrideLegacyUndefined&&_===void 0&&s.length>1)return lt;l[d]=_}return l}static addPropertyEffect(s,n,r){this.prototype._addPropertyEffect(s,n,r)}static createPropertyObserver(s,n,r){this.prototype._createPropertyObserver(s,n,r)}static createMethodObserver(s,n){this.prototype._createMethodObserver(s,n)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,n){this.prototype._createReadOnlyProperty(s,n)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,n,r){this.prototype._createComputedProperty(s,n,r)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,n){let r=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==r;if(!a)for(let l in r.propertyEffects)this._createPropertyAccessor(l);if(n)if(r=Object.create(r),r.wasPreBound=a,!this.__templateInfo)this.__templateInfo=r;else{const l=s._parentTemplateInfo||this.__templateInfo,d=l.lastChild;r.parent=l,l.lastChild=r,r.previousSibling=d,d?d.nextSibling=r:l.firstChild=r}else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(s,n,r){let a=s.hostProps=s.hostProps||{};a[n]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[n]=l[n]||[]).push(r)}_stampTemplate(s,n){n=n||this._bindTemplate(s,!0),K.push(this);let r=super._stampTemplate(s,n);if(K.pop(),n.nodeList=r.nodeList,!n.wasPreBound){let a=n.childNodes=[];for(let l=r.firstChild;l;l=l.nextSibling)a.push(l)}return r.templateInfo=n,$o(this,n),this.__dataClientsReady&&(this._runEffectsForTemplate(n,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(s){const n=s.templateInfo,{previousSibling:r,nextSibling:a,parent:l}=n;r?r.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=r:l&&(l.lastChild=r),n.nextSibling=n.previousSibling=null;let d=n.childNodes;for(let c=0;c<d.length;c++){let h=d[c];g(g(h).parentNode).removeChild(h)}}static _parseTemplateNode(s,n,r){let a=t._parseTemplateNode.call(this,s,n,r);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,n);l&&(s.textContent=Ye(l)||" ",Ht(this,n,r,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,n,r,a,l){let d=this._parseBindings(l,n);if(d){let c=a,h="property";Oo.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let u=Ye(d);return u&&h=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(u+=" "+s.getAttribute(a)),s.setAttribute(a,u)),h=="attribute"&&c=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&c==="value"&&s.setAttribute(c,""),s.removeAttribute(c),h==="property"&&(a=Ci(a)),Ht(this,n,r,h,a,d,u),!0}else return t._parseTemplateNodeAttribute.call(this,s,n,r,a,l)}static _parseTemplateNestedTemplate(s,n,r){let a=t._parseTemplateNestedTemplate.call(this,s,n,r);const l=s.parentNode,d=r.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";Ie&&(c||h)&&(l.removeChild(s),r=r.parentInfo,r.templateInfo=d,r.noted=!0,a=!1);let u=d.hostProps;if(Js&&c)u&&(n.hostProps=Object.assign(n.hostProps||{},u),Ie||(r.parentInfo.noted=!0));else{let p="{";for(let _ in u){let A=[{mode:p,source:_,dependencies:[_],hostProp:!0}];Ht(this,n,r,"property","_host_"+_,A)}}return a}static _parseBindings(s,n){let r=[],a=0,l;for(;(l=$e.exec(s))!==null;){l.index>a&&r.push({literal:s.slice(a,l.index)});let d=l[1][0],c=Boolean(l[2]),h=l[3].trim(),u=!1,p="",_=-1;d=="{"&&(_=h.indexOf("::"))>0&&(p=h.substring(_+2),h=h.substring(0,_),u=!0);let A=Ft(h),E=[];if(A){let{args:w,methodName:C}=A;for(let kt=0;kt<w.length;kt++){let Me=w[kt];Me.literal||E.push(Me)}let R=n.dynamicFns;(R&&R[C]||A.static)&&(E.push(C),A.dynamicFn=!0)}else E.push(h);r.push({source:h,mode:d,negate:c,customEvent:u,signature:A,dependencies:E,event:p}),a=$e.lastIndex}if(a&&a<s.length){let d=s.substring(a);d&&r.push({literal:d})}return r.length?r:null}static _evaluateBinding(s,n,r,a,l,d){let c;return n.signature?c=Jt(s,r,a,l,n.signature):r!=n.source?c=b(s,n.source):d&&Gt(r)?c=b(s,r):c=s.__data[r],n.negate&&(c=!c),c}}return e}),K=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ya(i){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function dn(i){const t={};for(let e in i){const o=i[e];t[e]=typeof o=="function"?{type:o}:o}return t}const cn=m(i=>{const t=Pi(i);function e(n){const r=Object.getPrototypeOf(n);return r.prototype instanceof s?r:null}function o(n){if(!n.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",n))){let r=null;if(n.hasOwnProperty(JSCompiler_renameProperty("properties",n))){const a=n.properties;a&&(r=dn(a))}n.__ownProperties=r}return n.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const r=this._properties;this.__observedAttributes=r?Object.keys(r).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const r=e(this);r&&r.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const r=o(this);r&&this.createProperties(r)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const r=e(this);this.__properties=Object.assign({},r&&r._properties,o(this))}return this.__properties}static typeForProperty(r){const a=this._properties[r];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const hn="3.5.1",Ge=window.ShadyCSS&&window.ShadyCSS.cssBuild,un=m(i=>{const t=cn(ge(i));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function o(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function n(l,d,c,h){if(!Ge){const u=d.content.querySelectorAll("style"),p=St(d),_=oo(c),A=d.content.firstElementChild;for(let w=0;w<_.length;w++){let C=_[w];C.textContent=l._processStyleText(C.textContent,h),d.content.insertBefore(C,A)}let E=0;for(let w=0;w<p.length;w++){let C=p[w],R=u[E];R!==C?(C=C.cloneNode(!0),R.parentNode.insertBefore(C,R)):E++,C.textContent=l._processStyleText(C.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),Xs&&Ge&&Us){const u=d.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(_=>{p+=_.textContent,_.parentNode.removeChild(_)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function r(l){let d=null;if(l&&(!Ct||qs)&&(d=Y.import(l,"template"),Ct&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return hn}static _finalizeClass(){t._finalizeClass.call(this);const d=o(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):$s||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)s(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&r(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=ue(d.url);else{const c=Y.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=js,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(!!d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return he(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?ot(h):"";n(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=g(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ys&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=ot(this.importPath)),ot(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return yi&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ke=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i});class ki{constructor(t,e){Hi(t,e);const o=e.reduce((s,n,r)=>s+Di(n)+t[r+1],t[0]);this.value=o.toString()}toString(){return this.value}}function Di(i){if(i instanceof ki)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function pn(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof ki)return Di(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}const N=function(t,...e){Hi(t,e);const o=document.createElement("template");let s=e.reduce((n,r,a)=>n+pn(r)+t[a+1],t[0]);return Ke&&(s=Ke.createHTML(s)),o.innerHTML=s,o},Hi=(i,t)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||t.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=un(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zt=m(i=>class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),fn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,bt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function _n(){function i(){return!0}return Fi(i)}function mn(){try{return gn()?!0:yn()?bt?!vn():!_n():!1}catch{return!1}}function gn(){return localStorage.getItem("vaadin.developmentmode.force")}function yn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function vn(){return!!(bt&&Object.keys(bt).map(t=>bt[t]).filter(t=>t.productionMode).length>0)}function Fi(i,t){if(typeof i!="function")return;const e=fn.exec(i.toString());if(e)try{i=new Function(e[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return i(t)}window.Vaadin=window.Vaadin||{};const Je=function(i,t){if(window.Vaadin.developmentMode)return Fi(i,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=mn());function bn(){}const wn=function(){if(typeof Je=="function")return Je(bn)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Xe=0,Ri=0;const U=[];let Ze=0,Xt=!1;const Bi=document.createTextNode("");new window.MutationObserver(Cn).observe(Bi,{characterData:!0});function Cn(){Xt=!1;const i=U.length;for(let t=0;t<i;t++){const e=U[t];if(e)try{e()}catch(o){setTimeout(()=>{throw o})}}U.splice(0,i),Ri+=i}const Vi={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},ba={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},xn={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},An={run(i){Xt||(Xt=!0,Bi.textContent=Ze,Ze+=1),U.push(i);const t=Xe;return Xe+=1,t},cancel(i){const t=i-Ri;if(t>=0){if(!U[t])throw new Error(`invalid async handle: ${i}`);U[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class W{static debounce(t,e,o){return t instanceof W?t._cancelAsync():t=new W,t.setConfig(e,o),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,dt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),dt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}let dt=new Set;function En(i){dt.add(i)}function Pn(){const i=Boolean(dt.size);return dt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),i}const wa=()=>{let i;do i=Pn();while(i)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rt{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,o){const{scrollLeft:s}=o;if(e!=="rtl"||!t)return s;switch(t){case"negative":return o.scrollWidth-o.clientWidth+s;case"reverse":return o.scrollWidth-o.clientWidth-s;default:return s}}static setNormalizedScrollLeft(t,e,o,s){if(e!=="rtl"||!t){o.scrollLeft=s;return}switch(t){case"negative":o.scrollLeft=o.clientWidth-o.scrollWidth+s;break;case"reverse":o.scrollLeft=o.scrollWidth-o.clientWidth-s;break;default:o.scrollLeft=s;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const T=[];function Tn(){const i=Qt();T.forEach(t=>{Zt(t,i)})}let mt;const On=new MutationObserver(Tn);On.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function Zt(i,t,e=i.getAttribute("dir")){t?i.setAttribute("dir",t):e!=null&&i.removeAttribute("dir")}function Qt(){return document.documentElement.getAttribute("dir")}const ye=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}static finalize(){super.finalize(),mt||(mt=Rt.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Zt(this,Qt(),null))}attributeChangedCallback(e,o,s){if(super.attributeChangedCallback(e,o,s),e!=="dir")return;const n=Qt(),r=s===n&&T.indexOf(this)===-1,a=!s&&o&&T.indexOf(this)===-1;r||a?(this.__subscribe(),Zt(this,n,s)):s!==n&&o===n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=T.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,o,s){s==="dir"&&o===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,o,s)}_attributeToProperty(e,o,s){e==="dir"&&!o?this.dir="":super._attributeToProperty(e,o,s)}__subscribe(){T.includes(this)||T.push(this)}__unsubscribe(){T.includes(this)&&T.splice(T.indexOf(this),1)}__getNormalizedScrollLeft(e){return Rt.getNormalizedScrollLeft(mt,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,o){return Rt.setNormalizedScrollLeft(mt,this.getAttribute("dir")||"ltr",e,o)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ks(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){wn()};let Bt;const Qe=new Set,I=i=>class extends ye(i){static get version(){return"23.3.0"}static finalize(){super.finalize();const{is:e}=this;e&&!Qe.has(e)&&(window.Vaadin.registrations.push(this),Qe.add(e),window.Vaadin.developmentModeCallback&&(Bt=W.debounce(Bt,xn,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),En(Bt)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function J(i,t,e){return{index:i,removed:t,addedCount:e}}const Ui=0,ji=1,te=2,ee=3;function Sn(i,t,e,o,s,n){let r=n-s+1,a=e-t+1,l=new Array(r);for(let d=0;d<r;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<r;d++)for(let c=1;c<a;c++)if(ve(i[t+c-1],o[s+d-1]))l[d][c]=l[d-1][c-1];else{let h=l[d-1][c]+1,u=l[d][c-1]+1;l[d][c]=h<u?h:u}return l}function Nn(i){let t=i.length-1,e=i[0].length-1,o=i[t][e],s=[];for(;t>0||e>0;){if(t==0){s.push(te),e--;continue}if(e==0){s.push(ee),t--;continue}let n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1],l;r<a?l=r<n?r:n:l=a<n?a:n,l==n?(n==o?s.push(Ui):(s.push(ji),o=n),t--,e--):l==r?(s.push(ee),t--,o=r):(s.push(te),e--,o=a)}return s.reverse(),s}function zn(i,t,e,o,s,n){let r=0,a=0,l,d=Math.min(e-t,n-s);if(t==0&&s==0&&(r=Mn(i,o,d)),e==i.length&&n==o.length&&(a=In(i,o,d-r)),t+=r,s+=r,e-=a,n-=a,e-t==0&&n-s==0)return[];if(t==e){for(l=J(t,[],0);s<n;)l.removed.push(o[s++]);return[l]}else if(s==n)return[J(t,[],e-t)];let c=Nn(Sn(i,t,e,o,s,n));l=void 0;let h=[],u=t,p=s;for(let _=0;_<c.length;_++)switch(c[_]){case Ui:l&&(h.push(l),l=void 0),u++,p++;break;case ji:l||(l=J(u,[],0)),l.addedCount++,u++,l.removed.push(o[p]),p++;break;case te:l||(l=J(u,[],0)),l.addedCount++,u++;break;case ee:l||(l=J(u,[],0)),l.removed.push(o[p]),p++;break}return l&&h.push(l),h}function Mn(i,t,e){for(let o=0;o<e;o++)if(!ve(i[o],t[o]))return o;return e}function In(i,t,e){let o=i.length,s=t.length,n=0;for(;n<e&&ve(i[--o],t[--s]);)n++;return n}function Ln(i,t){return zn(i,0,i.length,t,0,t.length)}function ve(i,t){return i===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function B(i){return i.localName==="slot"}let qi=class{static getFlattenedNodes(i){const t=g(i);return B(i)?(i=i,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>B(e)?(e=e,g(e).assignedNodes({flatten:!0})):[e]).reduce((e,o)=>e.concat(o),[])}constructor(i,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=i,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){B(this._target)?this._listenSlots([this._target]):g(this._target).children&&(this._listenSlots(g(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,i=>{this._processMutations(i)}):(this._nativeChildrenObserver=new MutationObserver(i=>{this._processMutations(i)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){B(this._target)?this._unlistenSlots([this._target]):g(this._target).children&&(this._unlistenSlots(g(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ei.run(()=>this.flush()))}_processMutations(i){this._processSlotMutations(i),this.flush()}_processSlotMutations(i){if(i)for(let t=0;t<i.length;t++){let e=i[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let i={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=Ln(t,this._effectiveNodes);for(let s=0,n;s<e.length&&(n=e[s]);s++)for(let r=0,a;r<n.removed.length&&(a=n.removed[r]);r++)i.removedNodes.push(a);for(let s=0,n;s<e.length&&(n=e[s]);s++)for(let r=n.index;r<n.index+n.addedCount;r++)i.addedNodes.push(t[r]);this._effectiveNodes=t;let o=!1;return(i.addedNodes.length||i.removedNodes.length)&&(o=!0,this.callback.call(this._target,i)),o}_listenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];B(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];B(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let kn=0;function $i(){return kn++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class L extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${$i()}`}constructor(t,e,o,s,n){super(),this.host=t,this.slotName=e,this.slotFactory=o,this.slotInitializer=s,n&&(this.defaultId=L.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:o}=this;let s=this.defaultNode;return!s&&o&&(s=o(t),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.node=s,this.defaultNode=s)),s&&t.appendChild(s),s}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,o=this.host.shadowRoot.querySelector(e);this.__slotObserver=new qi(o,s=>{const n=this.node,r=s.addedNodes.find(a=>a!==n);s.removedNodes.length&&s.removedNodes.forEach(a=>{this.teardownNode(a)}),r&&(n&&n.isConnected&&this.host.removeChild(n),this.node=r,r!==this.defaultNode&&(this.initCustomNode(r),this.initNode(r)))})}}/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mt extends L{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yi=m(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dn=!1,Hn=i=>i,be=typeof document.head.style.touchAction=="string",Et="__polymerGestures",Vt="__polymerGesturesHandled",ie="__polymerGesturesTouchAction",ti=25,ei=5,Fn=2,Rn=["mousedown","mousemove","mouseup","click"],Bn=[0,1,4,2],Vn=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function we(i){return Rn.indexOf(i)>-1}let Wi=!1;(function(){try{const i=Object.defineProperty({},"passive",{get(){Wi=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function Gi(i){if(!(we(i)||i==="touchend")&&be&&Wi&&Dn)return{passive:!0}}const Un=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),jn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function H(i){const t=i.type;if(!we(t))return!1;if(t==="mousemove"){let o=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!Vn&&(o=Bn[i.which]||0),Boolean(o&1)}return(i.button===void 0?0:i.button)===0}function qn(i){if(i.type==="click"){if(i.detail===0)return!0;const t=z(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),o=i.pageX,s=i.pageY;return!(o>=e.left&&o<=e.right&&s>=e.top&&s<=e.bottom)}return!1}const O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function $n(i){let t="auto";const e=Ji(i);for(let o=0,s;o<e.length;o++)if(s=e[o],s[ie]){t=s[ie];break}return t}function Ki(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function j(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Ji=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],ht={},D=[];function Yn(i,t){let e=document.elementFromPoint(i,t),o=e;for(;o&&o.shadowRoot&&!window.ShadyDOM;){const s=o;if(o=o.shadowRoot.elementFromPoint(i,t),s===o)break;o&&(e=o)}return e}function z(i){const t=Ji(i);return t.length>0?t[0]:i.target}function Xi(i){const t=i.type,o=i.currentTarget[Et];if(!o)return;const s=o[t];if(!s)return;if(!i[Vt]&&(i[Vt]={},t.startsWith("touch"))){const r=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(O.touch.id=r.identifier),O.touch.id!==r.identifier)return;be||(t==="touchstart"||t==="touchmove")&&Wn(i)}const n=i[Vt];if(!n.skip){for(let r=0,a;r<D.length;r++)a=D[r],s[a.name]&&!n[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let r=0,a;r<D.length;r++)a=D[r],s[a.name]&&!n[a.name]&&(n[a.name]=!0,a[t](i))}}function Wn(i){const t=i.changedTouches[0],e=i.type;if(e==="touchstart")O.touch.x=t.clientX,O.touch.y=t.clientY,O.touch.scrollDecided=!1;else if(e==="touchmove"){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;const o=$n(i);let s=!1;const n=Math.abs(O.touch.x-t.clientX),r=Math.abs(O.touch.y-t.clientY);i.cancelable&&(o==="none"?s=!0:o==="pan-x"?s=r>n:o==="pan-y"&&(s=n>r)),s?i.preventDefault():Pt("track")}}function ii(i,t,e){return ht[t]?(Gn(i,t,e),!0):!1}function Ea(i,t,e){return ht[t]?(Kn(i,t,e),!0):!1}function Gn(i,t,e){const o=ht[t],s=o.deps,n=o.name;let r=i[Et];r||(i[Et]=r={});for(let a=0,l,d;a<s.length;a++)l=s[a],!(Un&&we(l)&&l!=="click")&&(d=r[l],d||(r[l]=d={_count:0}),d._count===0&&i.addEventListener(l,Xi,Gi(l)),d[n]=(d[n]||0)+1,d._count=(d._count||0)+1);i.addEventListener(t,e),o.touchAction&&Xn(i,o.touchAction)}function Kn(i,t,e){const o=ht[t],s=o.deps,n=o.name,r=i[Et];if(r)for(let a=0,l,d;a<s.length;a++)l=s[a],d=r[l],d&&d[n]&&(d[n]=(d[n]||1)-1,d._count=(d._count||1)-1,d._count===0&&i.removeEventListener(l,Xi,Gi(l)));i.removeEventListener(t,e)}function Ce(i){D.push(i);for(let t=0;t<i.emits.length;t++)ht[i.emits[t]]=i}function Jn(i){for(let t=0,e;t<D.length;t++){e=D[t];for(let o=0,s;o<e.emits.length;o++)if(s=e.emits[o],s===i)return e}return null}function Xn(i,t){be&&i instanceof HTMLElement&&An.run(()=>{i.style.touchAction=t}),i[ie]=t}function xe(i,t,e){const o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=e,Hn(i).dispatchEvent(o),o.defaultPrevented){const s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Pt(i){const t=Jn(i);t.info&&(t.info.prevent=!0)}Ce({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){j(this.info)},mousedown(i){if(!H(i))return;const t=z(i),e=this,o=n=>{H(n)||(X("up",t,n),j(e.info))},s=n=>{H(n)&&X("up",t,n),j(e.info)};Ki(this.info,o,s),X("down",t,i)},touchstart(i){X("down",z(i),i.changedTouches[0],i)},touchend(i){X("up",z(i),i.changedTouches[0],i)}});function X(i,t,e,o){!t||xe(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:o,prevent(s){return Pt(s)}})}Ce({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>Fn&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,j(this.info)},mousedown(i){if(!H(i))return;const t=z(i),e=this,o=n=>{const r=n.clientX,a=n.clientY;si(e.info,r,a)&&(e.info.state=e.info.started?n.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Pt("tap"),e.info.addMove({x:r,y:a}),H(n)||(e.info.state="end",j(e.info)),t&&Ut(e.info,t,n),e.info.started=!0)},s=n=>{e.info.started&&o(n),j(e.info)};Ki(this.info,o,s),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(i){const t=z(i),e=i.changedTouches[0],o=e.clientX,s=e.clientY;si(this.info,o,s)&&(this.info.state==="start"&&Pt("tap"),this.info.addMove({x:o,y:s}),Ut(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(i){const t=z(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Ut(this.info,t,e))}});function si(i,t,e){if(i.prevent)return!1;if(i.started)return!0;const o=Math.abs(i.x-t),s=Math.abs(i.y-e);return o>=ei||s>=ei}function Ut(i,t,e){if(!t)return;const o=i.moves[i.moves.length-2],s=i.moves[i.moves.length-1],n=s.x-i.x,r=s.y-i.y;let a,l=0;o&&(a=s.x-o.x,l=s.y-o.y),xe(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:n,dy:r,ddx:a,ddy:l,sourceEvent:e,hover(){return Yn(e.clientX,e.clientY)}})}Ce({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){H(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){H(i)&&oi(this.info,i)},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(i){oi(this.info,i.changedTouches[0],i)}});function oi(i,t,e){const o=Math.abs(t.clientX-i.x),s=Math.abs(t.clientY-i.y),n=z(e||t);!n||jn[n.localName]&&n.hasAttribute("disabled")||(isNaN(o)||isNaN(s)||o<=ti&&s<=ti||qn(t))&&(i.prevent||xe(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zi=m(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zn=i=>class extends Yi(Zi(i)){get _activeKeys(){return[" "]}ready(){super.ready(),ii(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),ii(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",o=>{this._activeKeys.includes(o.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ae=!1;window.addEventListener("keydown",()=>{Ae=!0},{capture:!0});window.addEventListener("mousedown",()=>{Ae=!1},{capture:!0});function Qi(){return Ae}function ts(i){const t=i.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(i);return e.visibility==="hidden"||e.display==="none"}function Qn(i){if(!ir(i))return-1;const t=i.getAttribute("tabindex")||0;return Number(t)}function tr(i,t){const e=Math.max(i.tabIndex,0),o=Math.max(t.tabIndex,0);return e===0||o===0?o>e:e>o}function er(i,t){const e=[];for(;i.length>0&&t.length>0;)tr(i[0],t[0])?e.push(t.shift()):e.push(i.shift());return e.concat(i,t)}function se(i){const t=i.length;if(t<2)return i;const e=Math.ceil(t/2),o=se(i.slice(0,e)),s=se(i.slice(e));return er(o,s)}function es(i,t){if(i.nodeType!==Node.ELEMENT_NODE||ts(i))return!1;const e=i,o=Qn(e);let s=o>0;o>=0&&t.push(e);let n=[];return e.localName==="slot"?n=e.assignedNodes({flatten:!0}):n=(e.shadowRoot||e).children,[...n].forEach(r=>{s=es(r,t)||s}),s}function Oa(i){return i.offsetParent===null?!0:ts(i)}function ir(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function sr(i){return i.getRootNode().activeElement===i}function or(i){const t=[];return es(i,t)?se(t):t}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const is=m(i=>class extends i{get _keyboardActive(){return Qi()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ss=i=>class extends Yi(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,o){super._disabledChanged(e,o),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):o&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nr=i=>class extends Zn(ss(is(i))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ni extends nr(I(M(zt(P)))){static get is(){return"vaadin-button"}static get template(){return N`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Mt(this),this.addController(this._tooltipController)}}customElements.define(ni.is,ni);const rr=y`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;v("vaadin-horizontal-layout",rr,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ri extends I(M(P)){static get template(){return N`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(ri.is,ri);v("vaadin-input-container",y`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ai extends M(ye(P)){static get is(){return"vaadin-input-container"}static get template(){return N`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(ai.is,ai);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const os=document.createElement("template");os.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(os.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ee=y`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;v("",Ee,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ar=y`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ns=y`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;v("",ns,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lr=y`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,It=[ns,Ee,ar,lr];v("",It,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dr=y`
  :host {
    width: 8em;
  }

  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;v("vaadin-number-field",[It,Ee,dr],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rs extends L{constructor(t,e){super(t,"input",()=>document.createElement("input"),(o,s)=>{o.value&&s.setAttribute("value",o.value),o.type&&s.setAttribute("type",o.type),s.id=this.defaultId,typeof e=="function"&&e(s)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cr=m(i=>class extends is(ss(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,o){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):o&&this._removeFocusListeners(o)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_disabledChanged(e,o){super._disabledChanged(e,o),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hr extends L{constructor(t){super(t,"error-message",()=>document.createElement("div"),(e,o)=>{this.__updateErrorId(o),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ur(i){const t=[];for(;i;){if(i.nodeType===Node.DOCUMENT_NODE){t.push(i);break}if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(i),i=i.host;continue}if(i.assignedSlot){i=i.assignedSlot;continue}i=i.parentNode}return t}function as(i){return i?new Set(i.split(" ")):new Set}function ls(i){return[...i].join(" ")}function ds(i,t,e){const o=as(i.getAttribute(t));o.add(e),i.setAttribute(t,ls(o))}function cs(i,t,e){const o=as(i.getAttribute(t));if(o.delete(e),o.size===0){i.removeAttribute(t);return}i.setAttribute(t,ls(o))}function Ia(i){return i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pr{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){!this.__target||["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(t,e,o){!this.__target||(o&&cs(this.__target,t,o),e&&ds(this.__target,t,e))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fr extends L{constructor(t){super(t,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const o=this.__hasHelper(e);this.__toggleHasHelper(o)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();(!e||e===this.defaultNode)&&this.__applyDefaultHelper(t,e)}__hasHelper(t){return t?t.children.length>0||t.nodeType===Node.ELEMENT_NODE&&customElements.get(t.localName)||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return t&&t.trim()!==""}__applyDefaultHelper(t,e){const o=this.__isNotEmpty(t);o&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(o)}__observeHelper(t){this.__helperObserver=new MutationObserver(e=>{e.forEach(o=>{const s=o.target,n=s===this.node;if(o.type==="attributes")n&&s.id!==this.defaultId&&this.__updateHelperId(s);else if(n||s.parentElement===this.node){const r=this.__hasHelper(this.node);this.__toggleHasHelper(r)}})}),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _r extends L{constructor(t){super(t,"label",()=>document.createElement("label"),(e,o)=>{this.__updateLabelId(o),this.__updateDefaultLabel(this.label),this.__observeLabel(o)},!0)}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e));const o=this.__hasLabel(e);this.__toggleHasLabel(o)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return t?t.children.length>0||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__observeLabel(t){this.__labelObserver=new MutationObserver(e=>{e.forEach(o=>{const s=o.target,n=s===this.node;if(o.type==="attributes")n&&s.id!==this.defaultId&&this.__updateLabelId(s);else if(n||s.parentElement===this.node){const r=this.__hasLabel(this.node);this.__toggleHasLabel(r)}})}),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mr=m(i=>class extends zt(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new _r(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hs=m(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gr=i=>class extends hs(mr(zt(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new pr(this),this._helperController=new fr(this),this._errorController=new hr(this),this._labelController.addEventListener("label-changed",e=>{const{hasLabel:o,node:s}=e.detail;this.__labelChanged(o,s)}),this._helperController.addEventListener("helper-changed",e=>{const{hasHelper:o,node:s}=e.detail;this.__helperChanged(o,s)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,o){e?this._fieldAriaController.setHelperId(o.id):this._fieldAriaController.setHelperId(null)}__labelChanged(e,o){e?this._fieldAriaController.setLabelId(o.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{e?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yr=m(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((o,s)=>{this._delegateAttribute(o,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((o,s)=>{this._delegateProperty(o,e[s])})}_delegateAttribute(e,o){!this.stateTarget||(e==="invalid"&&this._delegateAttribute("aria-invalid",o?"true":!1),typeof o=="boolean"?this.stateTarget.toggleAttribute(e,o):o?this.stateTarget.setAttribute(e,o):this.stateTarget.removeAttribute(e))}_delegateProperty(e,o){!this.stateTarget||(this.stateTarget[e]=o)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vr=m(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){!this.inputElement||(e!=null?this.inputElement.value=e:this.inputElement.value="")}_inputElementChanged(e,o){e?this._addInputListeners(e):o&&this._removeInputListeners(o)}_hasInputValueChanged(e,o){(e||o)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const o=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=o.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,o){this._toggleHasValue(this._hasValue),!(e===""&&o===void 0)&&(this.__userInput||this._forwardInputValue(e))}get _hasValue(){return this.value!=null&&this.value!==""}_setHasInputValue(e){const o=e.composedPath()[0];this._hasInputValue=o.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const us=m(i=>class extends yr(hs(vr(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(o=>this.__isValidConstraint(o))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...o){if(!e)return;const s=this._hasValidConstraints(o),n=this.__previousHasConstraints&&!s;(this._hasValue||this.invalid)&&s?this.validate():n&&this._setInvalid(!1),this.__previousHasConstraints=s}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return Boolean(e)||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jt=new WeakMap;function br(i){return jt.has(i)||jt.set(i,new Set),jt.get(i)}function wr(i,t){const e=document.createElement("style");e.textContent=i,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const Cr=m(i=>class extends i{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),o=br(e);this.slotStyles.forEach(s=>{o.has(s)||(wr(s,e),o.add(s))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xr=i=>class extends Cr(cr(us(gr(Zi(i))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&!!this.value&&(e.stopPropagation(),this.__clear())}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=W.debounce(this._preventInputDebouncer,Vi.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const o=e.clipboardData.getData("text");this.__allowedTextRegExp.test(o)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const o=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(o)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`),this.__allowedTextRegExp=new RegExp(`^${e}*$`)}catch(o){console.error(o)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pe=i=>class extends xr(i){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_setFocused(e){super._setFocused(e),e||this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,o){super._valueChanged(e,o),o!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Te{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",o=>{this.__initLabel(o.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ar=y`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Er=y`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=y`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oe=[Er,Pr,Ar];/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */v("vaadin-number-field",Oe,{moduleId:"vaadin-number-field-styles"});class oe extends Pe(M(I(P))){static get is(){return"vaadin-number-field"}static get template(){return N`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t} input[type="number"]::-webkit-outer-spin-button,
        ${t} input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        ${t} input[type="number"] {
          -moz-appearance: textfield;
        }

        ${t}[dir='rtl'] input[type="number"]::placeholder {
          direction: rtl;
        }

        ${t}[dir='rtl']:not([has-controls]) input[type="number"]::placeholder {
          text-align: left;
        }
      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new rs(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Te(this.inputElement,this._labelController)),this._tooltipController=new Mt(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}checkValidity(){return this.inputElement&&this.inputElement.validity.badInput?!1:super.checkValidity()}_decreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;const e=this.step||1;let o=parseFloat(this.value);this.value?o<this.min?(t=0,o=this.min):o>this.max&&(t=0,o=this.max):this.min===0&&t<0||this.max===0&&t>0||this.max===0&&this.min===0?(t=0,o=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?o=0:this.min>0?(o=this.min,this.max<0&&t<0&&(o=this.max),t=0):this.max<0&&(o=this.max,t<0?t=0:this._getIncrement(1,o-e)>this.max?o-=2*e:o-=e);const s=this._getIncrement(t,o);(!this.value||t===0||this._incrementIsInsideTheLimits(t,o))&&this._setValue(s)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,e){let o=this.step||1,s=this.min||0;const n=Math.max(this._getMultiplier(e),this._getMultiplier(o),this._getMultiplier(s));o*=n,e=Math.round(e*n),s*=n;const r=(e-s)%o;return t>0?(e-r+o)/n:t<0?(e-(r||o))/n:e/n}_getDecimalCount(t){const e=String(t),o=e.indexOf(".");return o===-1?1:e.length-o-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,e){return t<0?this.min==null||this._getIncrement(t,e)>=this.min:t>0?this.max==null||this._getIncrement(t,e)<=this.max:this._getIncrement(t,e)<=this.max&&this._getIncrement(t,e)>=this.min}_allowed(t){const e=t*(this.step||1),o=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(e,o)}_stepChanged(t,e){e&&(e.step=t||"any")}_valueChanged(t,e){t&&isNaN(parseFloat(t))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,e)}_onKeyDown(t){t.key==="ArrowUp"?(t.preventDefault(),this._increaseValue()):t.key==="ArrowDown"&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}_isStepButtonVisible(t,e){return t||e}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0||e.validity.badInput}}customElements.define(oe.is,oe);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class li extends oe{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(t,e){if(t!==""&&!this.__isInteger(t)){console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(t,e)}_stepChanged(t,e){if(t!=null&&!this.__hasOnlyDigits(t)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${t}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/.test(String(t))}__hasOnlyDigits(t){return/^\d+$/.test(String(t))}}customElements.define(li.is,li);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let di=0;function ps(i,t=[],e={}){const o=e.moduleId||`custom-style-module-${di}`;di+=1;const s=document.createElement("dom-module");i&&s.setAttribute("theme-for",i);const n=!!(t.length&&e.moduleId),r=[].concat(e.include||[]);r.length===0?s.__allStyles=t:n||(s.__partialStyles=t),s.innerHTML=`
    <template>
      ${r.map(a=>`<style include=${a}></style>`)}
      ${n?`<style>${t.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,s.register(o)}function Tr(i){return St(i.querySelector("template")).map(t=>Ps(t.textContent))}function Or(){const t=Y.prototype.modules;return Object.keys(t).map(e=>{const o=t[e],s=o.getAttribute("theme-for");return o.__allStyles=o.__allStyles||Tr(o).concat(o.__partialStyles||[]),{themeFor:s,moduleId:e,styles:o.__allStyles}})}window.Vaadin=window.Vaadin||{};window.Vaadin.styleModules={getAllThemes:Or,registerStyles:ps};pt&&pt.length>0&&(pt.forEach(i=>{ps(i.themeFor,i.styles,{moduleId:i.moduleId,include:i.include})}),pt.length=0);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sr=y`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(iron-icon),
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;v("vaadin-text-area",[It,Sr],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gt=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),Nr=m(i=>class extends i{connectedCallback(){if(super.connectedCallback(),gt.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,gt.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),gt.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const o=e.resizables;o&&(o.delete(this),o.size===0&&gt.unobserve(e)),this.__parent=null}}get _observeParent(){return!1}_onResize(e){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fs=i=>class extends us(i){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const e=this.inputElement;e&&e.value.length>0&&!this.checkValidity()&&(e.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=W.debounce(this._inputDebouncer,Vi.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(e){this._checkInputValue(),super._onInput(e)}_preventInvalidInputChanged(e){e&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zr extends L{constructor(t,e){super(t,"textarea",()=>document.createElement("textarea"),(o,s)=>{const n=o.getAttribute("value");n&&(s.value=n);const r=o.getAttribute("name");r&&s.setAttribute("name",r),s.id=this.defaultId,typeof e=="function"&&e(s)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */v("vaadin-text-area",Oe,{moduleId:"vaadin-text-area-styles"});class ci extends Nr(fs(Pe(M(I(P))))){static get is(){return"vaadin-text-area"}static get template(){return N`
      <style>
        :host {
          animation: 1ms vaadin-text-area-appear;
        }

        .vaadin-text-area-container {
          flex: auto;
        }

        /* The label, helper text and the error message should neither grow nor shrink. */
        [part='label'],
        [part='helper-text'],
        [part='error-message'] {
          flex: none;
        }

        [part='input-field'] {
          flex: auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        ::slotted(textarea) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          resize: none;
          margin: 0;
          padding: 0 0.25em;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          font-size: 1em;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        /* Override styles from <vaadin-input-container> */
        [part='input-field'] ::slotted(textarea) {
          align-self: stretch;
          white-space: pre-wrap;
        }

        [part='input-field'] ::slotted(:not(textarea)) {
          align-self: flex-start;
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }

        @keyframes vaadin-text-area-appear {
          to {
            opacity: 1;
          }
        }
      </style>

      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="__scrollPositionUpdated"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}get clearElement(){return this.$.clearButton}_onResize(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new zr(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Te(this.inputElement,this._labelController)),this._tooltipController=new Mt(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",t=>{const e=this._inputField.scrollTop;this._inputField.scrollTop+=t.deltaY,e!==this._inputField.scrollTop&&(t.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(t){t.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(t,e){super._valueChanged(t,e),this._updateHeight()}_updateHeight(){const t=this.inputElement,e=this._inputField;if(!t||!e)return;const o=e.scrollTop,s=this.value?this.value.length:0;if(this._oldValueLength>=s){const r=getComputedStyle(e).height,a=getComputedStyle(t).width;e.style.display="block",e.style.height=r,t.style.maxWidth=a,t.style.height="auto"}this._oldValueLength=s;const n=t.scrollHeight;n>t.clientHeight&&(t.style.height=`${n}px`),t.style.removeProperty("max-width"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=o}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const t=this.inputElement.value.match(this.pattern);return t?t[0]===t.input:!1}catch{return!0}}}customElements.define(ci.is,ci);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */v("vaadin-text-field",It,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */v("vaadin-text-field",Oe,{moduleId:"vaadin-text-field-styles"});class hi extends fs(Pe(M(I(P)))){static get is(){return"vaadin-text-field"}static get template(){return N`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new rs(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Te(this.inputElement,this._labelController)),this._tooltipController=new Mt(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(hi.is,hi);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Se=y`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;v("",Se,{moduleId:"lumo-overlay"});v("vaadin-overlay",Se,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Tt=!1,_s=[],ms=[];function gs(){Tt=!0,requestAnimationFrame(function(){Tt=!1,Mr(_s),setTimeout(function(){Ir(ms)})})}function Mr(i){for(;i.length;)ys(i.shift())}function Ir(i){for(let t=0,e=i.length;t<e;t++)ys(i.shift())}function ys(i){const t=i[0],e=i[1],o=i[2];try{e.apply(t,o)}catch(s){setTimeout(()=>{throw s})}}function $a(i,t,e){Tt||gs(),_s.push([i,t,e])}function Lr(i,t,e){Tt||gs(),ms.push([i,t,e])}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ne(i,t,e,o,s){let n;s&&(n=typeof e=="object"&&e!==null,n&&(o=i.__dataTemp[t]));let r=o!==e&&(o===o||e===e);return n&&r&&(i.__dataTemp[t]=e),r}const ze=m(i=>{class t extends i{_shouldPropertyChange(o,s,n){return Ne(this,o,s,n,!0)}}return t}),Ya=m(i=>{class t extends i{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(o,s,n){return Ne(this,o,s,n,this.mutableData)}}return t});ze._mutablePropertyChange=Ne;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ne=null;function re(){return ne}re.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:re,writable:!0}});const vs=ge(re),kr=ze(vs);function Dr(i,t){ne=i,Object.setPrototypeOf(i,t.prototype),new t,ne=null}const Hr=ge(class{});function Fr(i,t){for(let e=0;e<t.length;e++){let o=t[e];if(Boolean(i)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)i?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if(o.localName==="slot")if(i)o.__polymerReplaced__=document.createComment("hidden-slot"),g(g(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const s=o.__polymerReplaced__;s&&g(g(s).parentNode).replaceChild(o,s)}else o.style&&(i?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=i,o._showHideChildren&&o._showHideChildren(i)}}class k extends Hr{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let s=this.root.firstChild;s;s=s.nextSibling)e.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let o=this.__templatizeOptions;(t&&o.instanceProps||!o.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let o in this.__hostProps)this._setPendingProperty(o,this.__dataHost["_host_"+o]);for(let o in t)this._setPendingProperty(o,t[o])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,o){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,s=>{s.model=this,o(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,o)}}_showHideChildren(t){Fr(t,this.children)}_setUnmanagedPropertyToNode(t,e,o){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=o:super._setUnmanagedPropertyToNode(t,e,o)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}k.prototype.__dataHost;k.prototype.__templatizeOptions;k.prototype._methodHost;k.prototype.__templatizeOwner;k.prototype.__hostProps;const Rr=ze(k);function ui(i){let t=i.__dataHost;return t&&t._methodHost||t}function Br(i,t,e){let o=e.mutableData?Rr:k;ae.mixin&&(o=ae.mixin(o));let s=class extends o{};return s.prototype.__templatizeOptions=e,s.prototype._bindTemplate(i),jr(s,i,t,e),s}function Vr(i,t,e,o){let s=e.forwardHostProp;if(s&&t.hasHostProps){const n=i.localName=="template";let r=t.templatizeTemplateClass;if(!r){if(n){let l=e.mutableData?kr:vs;class d extends l{}r=t.templatizeTemplateClass=d}else{const l=i.constructor;class d extends l{}r=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)r.prototype._addPropertyEffect("_host_"+l,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Ur(l,s)}),r.prototype._createNotifyingProperty("_host_"+l);yi&&o&&Yr(t,e,o)}if(i.__dataProto&&Object.assign(i.__data,i.__dataProto),n)Dr(i,r),i.__dataTemp={},i.__dataPending=null,i.__dataOld=null,i._enableProperties();else{Object.setPrototypeOf(i,r.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in i){const d=i[l];delete i[l],i.__data[l]=d}}}}function Ur(i,t){return function(o,s,n){t.call(o.__templatizeOwner,s.substring(6),n[s])}}function jr(i,t,e,o){let s=e.hostProps||{};for(let n in o.instanceProps){delete s[n];let r=o.notifyInstanceProp;r&&i.prototype._addPropertyEffect(n,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:qr(n,r)})}if(o.forwardHostProp&&t.__dataHost)for(let n in s)e.hasHostProps||(e.hasHostProps=!0),i.prototype._addPropertyEffect(n,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:$r()})}function qr(i,t){return function(o,s,n){t.call(o.__templatizeOwner,o,s,n[s])}}function $r(){return function(t,e,o){t.__dataHost._setPendingPropertyOrPath("_host_"+e,o[e],!0,!0)}}function ae(i,t,e){if(Ct&&!ui(i))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},i.__templatizeOwner)throw new Error("A <template> can only be templatized once");i.__templatizeOwner=t;let s=(t?t.constructor:k)._parseTemplate(i),n=s.templatizeInstanceClass;n||(n=Br(i,s,e),s.templatizeInstanceClass=n);const r=ui(i);Vr(i,s,e,r);let a=class extends n{};return a.prototype._methodHost=r,a.prototype.__dataHost=i,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=s.hostProps,a=a,a}function Yr(i,t,e){const o=e.constructor._properties,{propertyEffects:s}=i,{instanceProps:n}=t;for(let r in s)if(!o[r]&&!(n&&n[r])){const a=s[r];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Ga(i,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=i)t=e.__dataHost;else return e;else t=g(t).parentNode;return null}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lt=i=>i.test(navigator.userAgent),le=i=>i.test(navigator.platform),Wr=i=>i.test(navigator.vendor),Ka=Lt(/Android/),Ja=Lt(/Chrome/)&&Wr(/Google Inc/),Xa=Lt(/Firefox/),Gr=le(/^iPad/)||le(/^Mac/)&&navigator.maxTouchPoints>1,Kr=le(/^iPhone/),Jr=Kr||Gr,Za=Lt(/^((?!chrome|android).)*safari/i),Qa=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qt=[];class Xr{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");qt.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,qt.pop()}__onKeyDown(t){if(!!this.__trapNode&&this===Array.from(qt).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,o=t?-1:1,s=this.__focusedElementIndex,n=(e.length+s+o)%e.length,r=e[n];r.focus(),r.localName==="input"&&r.select()}get __focusableElements(){return or(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(sr).pop())}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class S extends M(ye(zt(P))){static get template(){return N`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new qi(this,t=>{this._setTemplateFromNodes(t.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),Jr&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new Xr(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,o=window.innerWidth>t,s=document.documentElement.clientHeight;o&&s>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${s-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(t){this.template=t.find(e=>e.localName&&e.localName==="template")||this.template}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(t){t.preventDefault()}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(!!this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(t,e){this._instance||this._ensureTemplatized(),t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Lr(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const o=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(o)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(t,e){const o=`__${t}Handler`,s=n=>{n&&n.target!==this||(e(),this.removeEventListener("animationend",s),delete this[o])};this[o]=s,this.addEventListener("animationend",s)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout(()=>t.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof S&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}get _last(){return this===S.__attachedInstances.pop()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),S.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=S.__attachedInstances;let e;for(;(e=t.pop())&&!(e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!e.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(t=>{t.parentNode===this.content&&this.content.removeChild(t)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(t){this._removeOldContent(),t._Templatizer||(t._Templatizer=ae(t,this,{forwardHostProp(o,s){this._instance&&this._instance.forwardHostProp(o,s)}})),this._instance=new t._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const e=t._templateRoot||(t._templateRoot=t.getRootNode());if(e!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let o=Array.from(e.querySelectorAll("style")).reduce((s,n)=>s+n.textContent,"");if(o=o.replace(/:host/g,":host-nomatch"),o){const s=document.createElement("style");s.textContent=o,this.$.content.shadowRoot.appendChild(s),this._contentNodes.unshift(s)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(t,e,o,s){t!==e?this.template=void 0:o!==s&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,o,s,n){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const r=this._oldOwner!==o||this._oldModel!==s;this._oldModel=s,this._oldOwner=o;const a=this._oldTemplate!==t;this._oldTemplate=t;const l=this._oldRenderer!==e;this._oldRenderer=e;const d=this._oldOpened!==n;this._oldOpened=n,l&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),t&&a?this._stampOverlayTemplate(t):e&&(l||d||r)&&n&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const o=t.ownerDocument;for(;e&&e!==o&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=S.__attachedInstances.filter(o=>o!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(S.is,S);const Zr=y`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;v("vaadin-tooltip-overlay",[Se,Zr],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $t={start:"top",end:"bottom"},Yt={start:"left",end:"right"},pi=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),Qr=i=>class extends i{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=ur(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,o){if(this.__removeUpdatePositionEventListeners(),o&&(o.__overlay=null,pi.unobserve(o),e&&(this.__addUpdatePositionEventListeners(),o.__overlay=this,pi.observe(o))),e){const s=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(s[n],10)})),this.setAttribute("dir",s.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),o=this.__shouldAlignStartVertically(e);this.style.justifyContent=o?"flex-start":"flex-end";const s=this.__shouldAlignStartHorizontally(e,this.__isRTL),n=!this.__isRTL&&s||this.__isRTL&&!s;this.style.alignItems=n?"flex-start":"flex-end";const r=this.getBoundingClientRect(),a=this.__calculatePositionInOneDimension(e,r,this.noVerticalOverlap,$t,this,o),l=this.__calculatePositionInOneDimension(e,r,this.noHorizontalOverlap,Yt,this,s);Object.assign(this.style,a,l),this.toggleAttribute("bottom-aligned",!o),this.toggleAttribute("top-aligned",o),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,o){const s=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!o&&this.horizontalAlign==="start"||o&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,s,n,this.__margins,r,this.noHorizontalOverlap,Yt)}__shouldAlignStartVertically(e){const o=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const s=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(e,o,s,this.__margins,n,this.noVerticalOverlap,$t)}__shouldAlignStart(e,o,s,n,r,a,l){const d=s-e[a?l.end:l.start]-n[l.end],c=e[a?l.start:l.end]-n[l.start],h=r?d:c,p=h>(r?c:d)||h>o;return r===p}__adjustBottomProperty(e,o,s){let n;if(e===o.end){if(o.end===$t.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(s>r&&this.__oldViewportHeight){const a=this.__oldViewportHeight-r;n=s-a}this.__oldViewportHeight=r}if(o.end===Yt.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(s>r&&this.__oldViewportWidth){const a=this.__oldViewportWidth-r;n=s-a}this.__oldViewportWidth=r}}return n}__calculatePositionInOneDimension(e,o,s,n,r,a){const l=a?n.start:n.end,d=a?n.end:n.start,c=parseFloat(r.style[l]||getComputedStyle(r)[l]),h=this.__adjustBottomProperty(l,n,c),u=o[a?n.start:n.end]-e[s===a?n.end:n.start],p=h?`${h}px`:`${c+u*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */v("vaadin-tooltip-overlay",y`
    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let yt;class fi extends Qr(S){static get is(){return"vaadin-tooltip-overlay"}static get template(){return yt||(yt=super.template.cloneNode(!0),yt.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),yt}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,t.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),o=t.width/2-e.width/2;if(this.style.left){const s=e.left+o;s>0&&(this.style.left=`${s}px`)}if(this.style.right){const s=parseFloat(this.style.right)+o;s>0&&(this.style.right=`${s}px`)}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),o=t.height/2-e.height/2;this.style.top=`${e.top+o}px`}}}}customElements.define(fi.is,fi);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const q=0;let bs=q,ws=q,Cs=q;const vt=new Set;let Z=!1,Q=null,tt=null;class ta{constructor(t){this.host=t}open(t={immediate:!1}){const{immediate:e,hover:o,focus:s}=t,n=o&&this.hoverDelay>0,r=s&&this.focusDelay>0;!e&&(n||r)&&!this.__closeTimeout?this.__warmupTooltip(r):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),Z&&(this.__abortCooldown(),this.__scheduleCooldown())}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:bs}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:ws}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:Cs}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){vt.forEach(t=>{t._stateController.close(!0),vt.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),Z=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(Z?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){tt&&(clearTimeout(tt),tt=null)}__abortWarmUp(){Q&&(clearTimeout(Q),Q=null)}__scheduleClose(){this._isOpened()&&(vt.add(this.host),this.__closeTimeout=setTimeout(()=>{vt.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){tt=setTimeout(()=>{tt=null,Z=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;Q=setTimeout(()=>{Q=null,Z=!0,this.__showTooltip()},e)}}class nt extends Ts(I(P)){static get is(){return"vaadin-tooltip"}static get template(){return N`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(t,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},_overlayElement:Object,__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(t){bs=t!=null&&t>=0?t:q}static setDefaultHideDelay(t){Cs=t!=null&&t>=0?t:q}static setDefaultHoverDelay(t){ws=t!=null&&t>=0?t:q}constructor(){super(),this._uniqueId=`vaadin-tooltip-${$i()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1}),this._stateController=new ta(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computeOpened(t,e,o,s){return s&&(t?e:o)}__computePosition(t,e){return t||e}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(t,e){t?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(t){if(t){const e=this.getRootNode().getElementById(t);e?this.target=e:console.warn(`No element with id="${t}" found to show tooltip.`)}}__targetChanged(t,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e),cs(e,"aria-describedby",this._uniqueId)),t&&(t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)}),ds(t,"aria-describedby",this._uniqueId))}__onFocusin(t){this.manual||!Qi()||this.target.contains(t.relatedTarget)||!this.__isShouldShow()||(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0}))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||!this.__isShouldShow()||this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0}))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const e=this.__isTargetHidden;if(this.__isTargetHidden=!t,e&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,e){this._overlayElement&&(t||e)&&this._overlayElement.requestContentUpdate()}__generatorChanged(t,e,o){t&&((e!==this.__oldTextGenerator||o!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=o)}}customElements.define(nt.is,nt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ea={HTML:1,SVG:2},ia=(i,t)=>t===void 0?(i==null?void 0:i._$litType$)!==void 0:(i==null?void 0:i._$litType$)===t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends Os{constructor(t){if(super(t),this.it=$,t.type!==Ss.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===Ns)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}de.directiveName="unsafeHTML",de.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ce extends de{}ce.directiveName="unsafeSVG",ce.resultType=2;const sa=zs(ce);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function oa(i){let t=$;if(i){const e=i.cloneNode(!0);e.removeAttribute("id"),t=Is`${sa(e.outerHTML)}`}return t}function na(i){return ia(i,ea.SVG)||i===$}function ra(i){let t=i==null||i===""?$:i;return na(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=$),t}function el(i,t){const e=ra(i);Ms(e,t)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const et={};class Ot extends I(P){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=et[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,et[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){this._icons=this._icons||this.__createIconMap();const e=this._icons[this.__getIconId(t)];return{svg:oa(e),size:this.size,viewBox:e?e.getAttribute("viewBox"):null}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach(e=>{t[this.__getIconId(e.id)]=e}),t}__getIconId(t){return(t||"").replace(`${this.name}:`,"")}__nameChanged(t,e){e&&(et[t]=Ot.getIconset(e),delete et[e]),t&&(et[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(Ot.is,Ot);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xs=document.createElement("template");xs.innerHTML=`<vaadin-iconset name="lumo" size="1000">
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs>
</svg>
</vaadin-iconset>`;document.head.appendChild(xs.content);const aa=y`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;v("vaadin-vertical-layout",aa,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _i extends I(M(P)){static get template(){return N`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(_i.is,_i);const As=document.createElement("template");As.innerHTML=`<style>
  ${Ls.cssText}
  ${ks.cssText}
</style>`;document.head.appendChild(As.content);const ct=window;ct.Vaadin=ct.Vaadin||{};ct.Vaadin.Flow=ct.Vaadin.Flow||{};ct.Vaadin.Flow.tooltip={setDefaultHideDelay:i=>nt.setDefaultHideDelay(i),setDefaultFocusDelay:i=>nt.setDefaultFocusDelay(i),setDefaultHoverDelay:i=>nt.setDefaultHoverDelay(i)};const la=function(i,t=!1){const e=document.createElement("template");e.innerHTML=i,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};document.documentElement.setAttribute("theme","dark");let ut;const mi=document.getElementsByTagName("script");for(let i=0;i<mi.length;i++){const t=mi[i];if(t.getAttribute("type")=="module"&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){ut=t;break}}if(!ut)throw new Error("Could not find the bundle script to identify the application id");ut["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const Es=window.Vaadin.Flow.fallbacks;Es[ut.getAttribute("data-app-id")]={};Es[ut.getAttribute("data-app-id")].loadFallback=function(){return Ds(()=>import("./generated-flow-imports-fallback.4ac78715.js"),["./generated-flow-imports-fallback.4ac78715.js","./indexhtml.185923cd.js"],import.meta.url)};const il=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:la},Symbol.toStringTag,{value:"Module"}));export{ge as $,Zn as A,Ja as B,zt as C,yr as D,I as E,qi as F,Gs as G,_a as H,vr as I,g as J,Ei as K,mr as L,ca as M,go as N,un as O,P,Ge as Q,Nr as R,ua as S,Mt as T,ya as U,$s as V,b as W,ae as X,Ga as Y,Vs as Z,Ya as _,Yi as a,Ct as a0,ha as a1,fa as a2,xt as a3,Js as a4,F as a5,Fr as a6,Ln as a7,pa as a8,ze as a9,Xn as aA,us as aB,hi as aC,Ot as aD,ra as aE,el as aF,L as aG,Y as aH,ci as aI,Ee as aJ,ai as aK,ia as aL,nr as aM,Er as aN,Pr as aO,il as aP,ma as aa,ga as ab,Zi as ac,$i as ad,Oa as ae,Xr as af,Lr as ag,Fs as ah,ni as ai,Ia as aj,is as ak,Rt as al,Se as am,Qr as an,S as ao,ns as ap,ar as aq,gr as ar,It as as,fs as at,xr as au,Oe as av,Ce as aw,Pt as ax,ht as ay,Ea as az,cr as b,rs as c,m as d,Te as e,W as f,ba as g,N as h,sr as i,ye as j,xn as k,wa as l,An as m,En as n,Za as o,ii as p,ds as q,cs as r,Qi as s,Vi as t,ss as u,Jr as v,Xa as w,Ka as x,Qa as y,$a as z};

import{a as F}from"./react-vendor-DWPARcIf.js";var C={exports:{}},r={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function V(){if(O)return r;O=1;var o=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),v=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),a=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),t=Symbol.for("react.lazy"),u=Symbol.for("react.view_transition"),i=Symbol.for("react.client.reference");function n(e){if(typeof e=="object"&&e!==null){var s=e.$$typeof;switch(s){case o:switch(e=e.type,e){case E:case m:case S:case c:case a:case u:return e;default:switch(e=e&&e.$$typeof,e){case v:case _:case t:case f:return e;case d:return e;default:return s}}case R:return s}}}return r.ContextConsumer=d,r.ContextProvider=v,r.Element=o,r.ForwardRef=_,r.Fragment=E,r.Lazy=t,r.Memo=f,r.Portal=R,r.Profiler=m,r.StrictMode=S,r.Suspense=c,r.SuspenseList=a,r.isContextConsumer=function(e){return n(e)===d},r.isContextProvider=function(e){return n(e)===v},r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===o},r.isForwardRef=function(e){return n(e)===_},r.isFragment=function(e){return n(e)===E},r.isLazy=function(e){return n(e)===t},r.isMemo=function(e){return n(e)===f},r.isPortal=function(e){return n(e)===R},r.isProfiler=function(e){return n(e)===m},r.isStrictMode=function(e){return n(e)===S},r.isSuspense=function(e){return n(e)===c},r.isSuspenseList=function(e){return n(e)===a},r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===E||e===m||e===S||e===c||e===a||typeof e=="object"&&e!==null&&(e.$$typeof===t||e.$$typeof===f||e.$$typeof===v||e.$$typeof===d||e.$$typeof===_||e.$$typeof===i||e.getModuleId!==void 0)},r.typeOf=n,r}var Y;function g(){return Y||(Y=1,C.exports=V()),C.exports}var k=g(),h={exports:{}},P={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b;function W(){if(b)return P;b=1;var o=F();function R(t,u){return t===u&&(t!==0||1/t===1/u)||t!==t&&u!==u}var E=typeof Object.is=="function"?Object.is:R,S=o.useState,m=o.useEffect,d=o.useLayoutEffect,v=o.useDebugValue;function _(t,u){var i=u(),n=S({inst:{value:i,getSnapshot:u}}),e=n[0].inst,s=n[1];return d(function(){e.value=i,e.getSnapshot=u,c(e)&&s({inst:e})},[t,i,u]),m(function(){return c(e)&&s({inst:e}),t(function(){c(e)&&s({inst:e})})},[t]),v(i),i}function c(t){var u=t.getSnapshot;t=t.value;try{var i=u();return!E(t,i)}catch{return!0}}function a(t,u){return u()}var f=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?a:_;return P.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:f,P}var L;function z(){return L||(L=1,h.exports=W()),h.exports}var A={exports:{}},I={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function D(){if(N)return I;N=1;var o=F(),R=z();function E(a,f){return a===f&&(a!==0||1/a===1/f)||a!==a&&f!==f}var S=typeof Object.is=="function"?Object.is:E,m=R.useSyncExternalStore,d=o.useRef,v=o.useEffect,_=o.useMemo,c=o.useDebugValue;return I.useSyncExternalStoreWithSelector=function(a,f,t,u,i){var n=d(null);if(n.current===null){var e={hasValue:!1,value:null};n.current=e}else e=n.current;n=_(function(){function w(l){if(!x){if(x=!0,p=l,l=u(l),i!==void 0&&e.hasValue){var T=e.value;if(i(T,l))return y=T}return y=l}if(T=y,S(p,l))return T;var M=u(l);return i!==void 0&&i(T,M)?(p=l,T):(p=l,y=M)}var x=!1,p,y,$=t===void 0?null:t;return[function(){return w(f())},$===null?void 0:function(){return w($())}]},[f,t,u,i]);var s=m(a,n[0],n[1]);return v(function(){e.hasValue=!0,e.value=s},[s]),c(s),s},I}var q;function U(){return q||(q=1,A.exports=D()),A.exports}var X=U();export{k as a,z as r,X as w};

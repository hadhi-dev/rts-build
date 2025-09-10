import{K as N,g as V,b as D}from"./index-B9FQTHBN.js";var W=N();const B=V(W);function F(r){var s,i,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var E=r.length;for(s=0;s<E;s++)r[s]&&(i=F(r[s]))&&(o&&(o+=" "),o+=i)}else for(i in r)r[i]&&(o&&(o+=" "),o+=i);return o}function H(){for(var r,s,i=0,o="",E=arguments.length;i<E;i++)(r=arguments[i])&&(s=F(r))&&(o&&(o+=" "),o+=s);return o}var h={exports:{}},t={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M;function z(){if(M)return t;M=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),R=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),l=Symbol.for("react.memo"),n=Symbol.for("react.lazy"),a=Symbol.for("react.view_transition"),f=Symbol.for("react.client.reference");function u(e){if(typeof e=="object"&&e!==null){var m=e.$$typeof;switch(m){case r:switch(e=e.type,e){case i:case E:case o:case S:case c:case a:return e;default:switch(e=e&&e.$$typeof,e){case R:case _:case n:case l:return e;case d:return e;default:return m}}case s:return m}}}return t.ContextConsumer=d,t.ContextProvider=R,t.Element=r,t.ForwardRef=_,t.Fragment=i,t.Lazy=n,t.Memo=l,t.Portal=s,t.Profiler=E,t.StrictMode=o,t.Suspense=S,t.SuspenseList=c,t.isContextConsumer=function(e){return u(e)===d},t.isContextProvider=function(e){return u(e)===R},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===r},t.isForwardRef=function(e){return u(e)===_},t.isFragment=function(e){return u(e)===i},t.isLazy=function(e){return u(e)===n},t.isMemo=function(e){return u(e)===l},t.isPortal=function(e){return u(e)===s},t.isProfiler=function(e){return u(e)===E},t.isStrictMode=function(e){return u(e)===o},t.isSuspense=function(e){return u(e)===S},t.isSuspenseList=function(e){return u(e)===c},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===E||e===o||e===S||e===c||typeof e=="object"&&e!==null&&(e.$$typeof===n||e.$$typeof===l||e.$$typeof===R||e.$$typeof===d||e.$$typeof===_||e.$$typeof===f||e.getModuleId!==void 0)},t.typeOf=u,t}var O;function U(){return O||(O=1,h.exports=z()),h.exports}var J=U(),C={exports:{}},P={},A={exports:{}},x={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g;function G(){if(g)return x;g=1;var r=D();function s(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var i=typeof Object.is=="function"?Object.is:s,o=r.useState,E=r.useEffect,d=r.useLayoutEffect,R=r.useDebugValue;function _(n,a){var f=a(),u=o({inst:{value:f,getSnapshot:a}}),e=u[0].inst,m=u[1];return d(function(){e.value=f,e.getSnapshot=a,S(e)&&m({inst:e})},[n,f,a]),E(function(){return S(e)&&m({inst:e}),n(function(){S(e)&&m({inst:e})})},[n]),R(f),f}function S(n){var a=n.getSnapshot;n=n.value;try{var f=a();return!i(n,f)}catch{return!0}}function c(n,a){return a()}var l=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:_;return x.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:l,x}var Y;function k(){return Y||(Y=1,A.exports=G()),A.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L;function K(){if(L)return P;L=1;var r=D(),s=k();function i(c,l){return c===l&&(c!==0||1/c===1/l)||c!==c&&l!==l}var o=typeof Object.is=="function"?Object.is:i,E=s.useSyncExternalStore,d=r.useRef,R=r.useEffect,_=r.useMemo,S=r.useDebugValue;return P.useSyncExternalStoreWithSelector=function(c,l,n,a,f){var u=d(null);if(u.current===null){var e={hasValue:!1,value:null};u.current=e}else e=u.current;u=_(function(){function I(v){if(!w){if(w=!0,p=v,v=a(v),f!==void 0&&e.hasValue){var T=e.value;if(f(T,v))return y=T}return y=v}if(T=y,o(p,v))return T;var $=a(v);return f!==void 0&&f(T,$)?(p=v,T):(p=v,y=$)}var w=!1,p,y,b=n===void 0?null:n;return[function(){return I(l())},b===null?void 0:function(){return I(b())}]},[l,n,a,f]);var m=E(c,u[0],u[1]);return R(function(){e.hasValue=!0,e.value=m},[m]),S(m),m},P}var q;function X(){return q||(q=1,C.exports=K()),C.exports}var Q=X();export{B as R,W as a,k as b,H as c,J as r,Q as w};

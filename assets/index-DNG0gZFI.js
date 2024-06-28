function fI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lv={exports:{}},Nl={},Dv={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),hI=Symbol.for("react.portal"),pI=Symbol.for("react.fragment"),mI=Symbol.for("react.strict_mode"),gI=Symbol.for("react.profiler"),vI=Symbol.for("react.provider"),yI=Symbol.for("react.context"),wI=Symbol.for("react.forward_ref"),_I=Symbol.for("react.suspense"),EI=Symbol.for("react.memo"),CI=Symbol.for("react.lazy"),qp=Symbol.iterator;function SI(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fv=Object.assign,Uv={};function $i(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Mv}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bv(){}Bv.prototype=$i.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Mv}var Yd=Kd.prototype=new Bv;Yd.constructor=Kd;Fv(Yd,$i.prototype);Yd.isPureReactComponent=!0;var Gp=Array.isArray,jv=Object.prototype.hasOwnProperty,Qd={current:null},zv={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jv.call(e,r)&&!zv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ko,type:t,key:s,ref:o,props:i,_owner:Qd.current}}function II(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function kI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kp=/\/+/g;function Lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kI(""+t.key):e.toString(36)}function ya(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case hI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lu(o,0):r,Gp(i)?(n="",t!=null&&(n=t.replace(Kp,"$&/")+"/"),ya(i,e,n,"",function(d){return d})):i!=null&&(Jd(i)&&(i=II(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Lu(s,l);o+=ya(s,e,n,u,i)}else if(u=SI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Lu(s,l++),o+=ya(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],i=0;return ya(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ke={current:null},wa={transition:null},bI={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:wa,ReactCurrentOwner:Qd};function Wv(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=$i;Y.Fragment=pI;Y.Profiler=gI;Y.PureComponent=Kd;Y.StrictMode=mI;Y.Suspense=_I;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bI;Y.act=Wv;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)jv.call(e,u)&&!zv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ko,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:yI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vI,_context:t},t.Consumer=t};Y.createElement=Vv;Y.createFactory=function(t){var e=Vv.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:wI,render:t}};Y.isValidElement=Jd;Y.lazy=function(t){return{$$typeof:CI,_payload:{_status:-1,_result:t},_init:TI}};Y.memo=function(t,e){return{$$typeof:EI,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};Y.unstable_act=Wv;Y.useCallback=function(t,e){return Ke.current.useCallback(t,e)};Y.useContext=function(t){return Ke.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return Ke.current.useDeferredValue(t)};Y.useEffect=function(t,e){return Ke.current.useEffect(t,e)};Y.useId=function(){return Ke.current.useId()};Y.useImperativeHandle=function(t,e,n){return Ke.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return Ke.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return Ke.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return Ke.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return Ke.current.useReducer(t,e,n)};Y.useRef=function(t){return Ke.current.useRef(t)};Y.useState=function(t){return Ke.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return Ke.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return Ke.current.useTransition()};Y.version="18.3.1";Dv.exports=Y;var O=Dv.exports;const PI=Ov(O),xI=fI({__proto__:null,default:PI},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RI=O,AI=Symbol.for("react.element"),NI=Symbol.for("react.fragment"),OI=Object.prototype.hasOwnProperty,LI=RI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DI={key:!0,ref:!0,__self:!0,__source:!0};function Hv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OI.call(e,r)&&!DI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AI,type:t,key:s,ref:o,props:i,_owner:LI.current}}Nl.Fragment=NI;Nl.jsx=Hv;Nl.jsxs=Hv;Lv.exports=Nl;var x=Lv.exports,Tc={},$v={exports:{}},vt={},qv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var $=D.length;D.push(N);e:for(;0<$;){var de=$-1>>>1,we=D[de];if(0<i(we,N))D[de]=N,D[$]=we,$=de;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var N=D[0],$=D.pop();if($!==N){D[0]=$;e:for(var de=0,we=D.length,Jr=we>>>1;de<Jr;){var S=2*(de+1)-1,rs=D[S],wt=S+1,dr=D[wt];if(0>i(rs,$))wt<we&&0>i(dr,rs)?(D[de]=dr,D[wt]=$,de=wt):(D[de]=rs,D[S]=$,de=S);else if(wt<we&&0>i(dr,$))D[de]=dr,D[wt]=$,de=wt;else break e}}return N}function i(D,N){var $=D.sortIndex-N.sortIndex;return $!==0?$:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],m=1,p=null,g=3,E=!1,C=!1,I=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=D)r(d),N.sortIndex=N.expirationTime,e(u,N);else break;N=n(d)}}function T(D){if(I=!1,_(D),!C)if(n(u)!==null)C=!0,ye(A);else{var N=n(d);N!==null&&cr(T,N.startTime-D)}}function A(D,N){C=!1,I&&(I=!1,w(B),B=-1),E=!0;var $=g;try{for(_(N),p=n(u);p!==null&&(!(p.expirationTime>N)||D&&!ut());){var de=p.callback;if(typeof de=="function"){p.callback=null,g=p.priorityLevel;var we=de(p.expirationTime<=N);N=t.unstable_now(),typeof we=="function"?p.callback=we:p===n(u)&&r(u),_(N)}else r(u);p=n(u)}if(p!==null)var Jr=!0;else{var S=n(d);S!==null&&cr(T,S.startTime-N),Jr=!1}return Jr}finally{p=null,g=$,E=!1}}var F=!1,U=null,B=-1,Z=5,W=-1;function ut(){return!(t.unstable_now()-W<Z)}function lr(){if(U!==null){var D=t.unstable_now();W=D;var N=!0;try{N=U(!0,D)}finally{N?ur():(F=!1,U=null)}}else F=!1}var ur;if(typeof y=="function")ur=function(){y(lr)};else if(typeof MessageChannel<"u"){var jo=new MessageChannel,mu=jo.port2;jo.port1.onmessage=lr,ur=function(){mu.postMessage(null)}}else ur=function(){P(lr,0)};function ye(D){U=D,F||(F=!0,ur())}function cr(D,N){B=P(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){C||E||(C=!0,ye(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(D){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var $=g;g=N;try{return D()}finally{g=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=g;g=D;try{return N()}finally{g=$}},t.unstable_scheduleCallback=function(D,N,$){var de=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?de+$:de):$=de,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=$+we,D={id:m++,callback:N,priorityLevel:D,startTime:$,expirationTime:we,sortIndex:-1},$>de?(D.sortIndex=$,e(d,D),n(u)===null&&D===n(d)&&(I?(w(B),B=-1):I=!0,cr(T,$-de))):(D.sortIndex=we,e(u,D),C||E||(C=!0,ye(A))),D},t.unstable_shouldYield=ut,t.unstable_wrapCallback=function(D){var N=g;return function(){var $=g;g=N;try{return D.apply(this,arguments)}finally{g=$}}}})(Gv);qv.exports=Gv;var MI=qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FI=O,gt=MI;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kv=new Set,Ks={};function $r(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Ks[t]=e,t=0;t<e.length;t++)Kv.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=Object.prototype.hasOwnProperty,UI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yp={},Qp={};function BI(t){return bc.call(Qp,t)?!0:bc.call(Yp,t)?!1:UI.test(t)?Qp[t]=!0:(Yp[t]=!0,!1)}function jI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zI(t,e,n,r){if(e===null||typeof e>"u"||jI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Zd);Fe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Zd);Fe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Zd);Fe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zI(e,n,i,r)&&(n=null),r||i===null?BI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _n=FI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),li=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Jv=Symbol.for("react.offscreen"),Jp=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=Jp&&t[Jp]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Du;function Ts(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Mu=!1;function Fu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function VI(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=Fu(t.type,!1),t;case 11:return t=Fu(t.type.render,!1),t;case 1:return t=Fu(t.type,!0),t;default:return""}}function Ac(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ui:return"Fragment";case li:return"Portal";case Pc:return"Profiler";case tf:return"StrictMode";case xc:return"Suspense";case Rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Yv:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:Ac(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return Ac(t(e))}catch{}}return null}function WI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ac(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HI(t){var e=Xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=HI(t))}function Zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ey(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Oc(t,e){ey(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lc(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lc(t,e,n){(e!=="number"||Ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bs=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(bs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function ty(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,ry=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$I=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){$I.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function iy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function sy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qI=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fc(t,e){if(e){if(qI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bc=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,Si=null,Ii=null;function nm(t){if(t=Po(t)){if(typeof jc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Fl(e),jc(t.stateNode,t.type,e))}}function oy(t){Si?Ii?Ii.push(t):Ii=[t]:Si=t}function ay(){if(Si){var t=Si,e=Ii;if(Ii=Si=null,nm(t),e)for(t=0;t<e.length;t++)nm(e[t])}}function ly(t,e){return t(e)}function uy(){}var Uu=!1;function cy(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return ly(t,e,n)}finally{Uu=!1,(Si!==null||Ii!==null)&&(uy(),ay())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var zc=!1;if(hn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){zc=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{zc=!1}function GI(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var Os=!1,Fa=null,Ua=!1,Vc=null,KI={onError:function(t){Os=!0,Fa=t}};function YI(t,e,n,r,i,s,o,l,u){Os=!1,Fa=null,GI.apply(KI,arguments)}function QI(t,e,n,r,i,s,o,l,u){if(YI.apply(this,arguments),Os){if(Os){var d=Fa;Os=!1,Fa=null}else throw Error(b(198));Ua||(Ua=!0,Vc=d)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rm(t){if(qr(t)!==t)throw Error(b(188))}function JI(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rm(i),t;if(s===r)return rm(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function fy(t){return t=JI(t),t!==null?hy(t):null}function hy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hy(t);if(e!==null)return e;t=t.sibling}return null}var py=gt.unstable_scheduleCallback,im=gt.unstable_cancelCallback,XI=gt.unstable_shouldYield,ZI=gt.unstable_requestPaint,Ce=gt.unstable_now,ek=gt.unstable_getCurrentPriorityLevel,of=gt.unstable_ImmediatePriority,my=gt.unstable_UserBlockingPriority,Ba=gt.unstable_NormalPriority,tk=gt.unstable_LowPriority,gy=gt.unstable_IdlePriority,Ol=null,Kt=null;function nk(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:sk,rk=Math.log,ik=Math.LN2;function sk(t){return t>>>=0,t===0?32:31-(rk(t)/ik|0)|0}var na=64,ra=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ps(l):(s&=o,s!==0&&(r=Ps(s)))}else o=n&~i,o!==0?r=Ps(o):s!==0&&(r=Ps(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function ok(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ak(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=ok(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Wc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vy(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function Bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function lk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function yy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wy,lf,_y,Ey,Cy,Hc=!1,ia=[],Un=null,Bn=null,jn=null,Js=new Map,Xs=new Map,xn=[],uk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sm(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Po(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ck(t,e,n,r,i){switch(e){case"focusin":return Un=ps(Un,t,e,n,r,i),!0;case"dragenter":return Bn=ps(Bn,t,e,n,r,i),!0;case"mouseover":return jn=ps(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,ps(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xs.set(s,ps(Xs.get(s)||null,t,e,n,r,i)),!0}return!1}function Sy(t){var e=Sr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=dy(n),e!==null){t.blockedOn=e,Cy(t.priority,function(){_y(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$c(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bc=r,n.target.dispatchEvent(r),Bc=null}else return e=Po(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function om(t,e,n){_a(t)&&n.delete(e)}function dk(){Hc=!1,Un!==null&&_a(Un)&&(Un=null),Bn!==null&&_a(Bn)&&(Bn=null),jn!==null&&_a(jn)&&(jn=null),Js.forEach(om),Xs.forEach(om)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Hc||(Hc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,dk)))}function Zs(t){function e(i){return ms(i,t)}if(0<ia.length){ms(ia[0],t);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&ms(Un,t),Bn!==null&&ms(Bn,t),jn!==null&&ms(jn,t),Js.forEach(e),Xs.forEach(e),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)Sy(n),n.blockedOn===null&&xn.shift()}var ki=_n.ReactCurrentBatchConfig,za=!0;function fk(t,e,n,r){var i=te,s=ki.transition;ki.transition=null;try{te=1,uf(t,e,n,r)}finally{te=i,ki.transition=s}}function hk(t,e,n,r){var i=te,s=ki.transition;ki.transition=null;try{te=4,uf(t,e,n,r)}finally{te=i,ki.transition=s}}function uf(t,e,n,r){if(za){var i=$c(t,e,n,r);if(i===null)Yu(t,e,r,Va,n),sm(t,r);else if(ck(i,t,e,n,r))r.stopPropagation();else if(sm(t,r),e&4&&-1<uk.indexOf(t)){for(;i!==null;){var s=Po(i);if(s!==null&&wy(s),s=$c(t,e,n,r),s===null&&Yu(t,e,r,Va,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yu(t,e,r,null,n)}}var Va=null;function $c(t,e,n,r){if(Va=null,t=sf(r),t=Sr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Va=t,null}function Iy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ek()){case of:return 1;case my:return 4;case Ba:case tk:return 16;case gy:return 536870912;default:return 16}default:return 16}}var Dn=null,cf=null,Ea=null;function ky(){if(Ea)return Ea;var t,e=cf,n=e.length,r,i="value"in Dn?Dn.value:Dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ea=i.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function am(){return!1}function yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:am,this.isPropagationStopped=am,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=yt(qi),bo=pe({},qi,{view:0,detail:0}),pk=yt(bo),ju,zu,gs,Ll=pe({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(ju=t.screenX-gs.screenX,zu=t.screenY-gs.screenY):zu=ju=0,gs=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),lm=yt(Ll),mk=pe({},Ll,{dataTransfer:0}),gk=yt(mk),vk=pe({},bo,{relatedTarget:0}),Vu=yt(vk),yk=pe({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),wk=yt(yk),_k=pe({},qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ek=yt(_k),Ck=pe({},qi,{data:0}),um=yt(Ck),Sk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ik={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kk[t])?!!e[t]:!1}function ff(){return Tk}var bk=pe({},bo,{key:function(t){if(t.key){var e=Sk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ik[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pk=yt(bk),xk=pe({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=yt(xk),Rk=pe({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),Ak=yt(Rk),Nk=pe({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ok=yt(Nk),Lk=pe({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=yt(Lk),Mk=[9,13,27,32],hf=hn&&"CompositionEvent"in window,Ls=null;hn&&"documentMode"in document&&(Ls=document.documentMode);var Fk=hn&&"TextEvent"in window&&!Ls,Ty=hn&&(!hf||Ls&&8<Ls&&11>=Ls),dm=" ",fm=!1;function by(t,e){switch(t){case"keyup":return Mk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Py(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ci=!1;function Uk(t,e){switch(t){case"compositionend":return Py(e);case"keypress":return e.which!==32?null:(fm=!0,dm);case"textInput":return t=e.data,t===dm&&fm?null:t;default:return null}}function Bk(t,e){if(ci)return t==="compositionend"||!hf&&by(t,e)?(t=ky(),Ea=cf=Dn=null,ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ty&&e.locale!=="ko"?null:e.data;default:return null}}var jk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jk[t.type]:e==="textarea"}function xy(t,e,n,r){oy(r),e=Wa(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,eo=null;function zk(t){jy(t,0)}function Dl(t){var e=hi(t);if(Zv(e))return t}function Vk(t,e){if(t==="change")return e}var Ry=!1;if(hn){var Wu;if(hn){var Hu="oninput"in document;if(!Hu){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),Hu=typeof pm.oninput=="function"}Wu=Hu}else Wu=!1;Ry=Wu&&(!document.documentMode||9<document.documentMode)}function mm(){Ds&&(Ds.detachEvent("onpropertychange",Ay),eo=Ds=null)}function Ay(t){if(t.propertyName==="value"&&Dl(eo)){var e=[];xy(e,eo,t,sf(t)),cy(zk,e)}}function Wk(t,e,n){t==="focusin"?(mm(),Ds=e,eo=n,Ds.attachEvent("onpropertychange",Ay)):t==="focusout"&&mm()}function Hk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(eo)}function $k(t,e){if(t==="click")return Dl(e)}function qk(t,e){if(t==="input"||t==="change")return Dl(e)}function Gk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:Gk;function to(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bc.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,e){var n=gm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gm(n)}}function Ny(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ny(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Oy(){for(var t=window,e=Ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ma(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Kk(t){var e=Oy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ny(n.ownerDocument.documentElement,n)){if(r!==null&&pf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vm(n,s);var o=vm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yk=hn&&"documentMode"in document&&11>=document.documentMode,di=null,qc=null,Ms=null,Gc=!1;function ym(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gc||di==null||di!==Ma(r)||(r=di,"selectionStart"in r&&pf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&to(Ms,r)||(Ms=r,r=Wa(qc,"onSelect"),0<r.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},$u={},Ly={};hn&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Ml(t){if($u[t])return $u[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ly)return $u[t]=e[n];return t}var Dy=Ml("animationend"),My=Ml("animationiteration"),Fy=Ml("animationstart"),Uy=Ml("transitionend"),By=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){By.set(t,e),$r(e,[t])}for(var qu=0;qu<wm.length;qu++){var Gu=wm[qu],Qk=Gu.toLowerCase(),Jk=Gu[0].toUpperCase()+Gu.slice(1);er(Qk,"on"+Jk)}er(Dy,"onAnimationEnd");er(My,"onAnimationIteration");er(Fy,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Uy,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xk=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function _m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QI(r,e,void 0,t),t.currentTarget=null}function jy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;_m(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;_m(i,l,d),s=u}}}if(Ua)throw t=Vc,Ua=!1,Vc=null,t}function ae(t,e){var n=e[Xc];n===void 0&&(n=e[Xc]=new Set);var r=t+"__bubble";n.has(r)||(zy(e,t,2,!1),n.add(r))}function Ku(t,e,n){var r=0;e&&(r|=4),zy(n,t,r,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[aa]){t[aa]=!0,Kv.forEach(function(n){n!=="selectionchange"&&(Xk.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,Ku("selectionchange",!1,e))}}function zy(t,e,n,r){switch(Iy(e)){case 1:var i=fk;break;case 4:i=hk;break;default:i=uf}n=i.bind(null,e,n,t),i=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}cy(function(){var d=s,m=sf(n),p=[];e:{var g=By.get(t);if(g!==void 0){var E=df,C=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":E=Pk;break;case"focusin":C="focus",E=Vu;break;case"focusout":C="blur",E=Vu;break;case"beforeblur":case"afterblur":E=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=gk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Ak;break;case Dy:case My:case Fy:E=wk;break;case Uy:E=Ok;break;case"scroll":E=pk;break;case"wheel":E=Dk;break;case"copy":case"cut":case"paste":E=Ek;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=cm}var I=(e&4)!==0,P=!I&&t==="scroll",w=I?g!==null?g+"Capture":null:g;I=[];for(var y=d,_;y!==null;){_=y;var T=_.stateNode;if(_.tag===5&&T!==null&&(_=T,w!==null&&(T=Qs(y,w),T!=null&&I.push(ro(y,T,_)))),P)break;y=y.return}0<I.length&&(g=new E(g,C,null,n,m),p.push({event:g,listeners:I}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==Bc&&(C=n.relatedTarget||n.fromElement)&&(Sr(C)||C[pn]))break e;if((E||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,E?(C=n.relatedTarget||n.toElement,E=d,C=C?Sr(C):null,C!==null&&(P=qr(C),C!==P||C.tag!==5&&C.tag!==6)&&(C=null)):(E=null,C=d),E!==C)){if(I=lm,T="onMouseLeave",w="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(I=cm,T="onPointerLeave",w="onPointerEnter",y="pointer"),P=E==null?g:hi(E),_=C==null?g:hi(C),g=new I(T,y+"leave",E,n,m),g.target=P,g.relatedTarget=_,T=null,Sr(m)===d&&(I=new I(w,y+"enter",C,n,m),I.target=_,I.relatedTarget=P,T=I),P=T,E&&C)t:{for(I=E,w=C,y=0,_=I;_;_=si(_))y++;for(_=0,T=w;T;T=si(T))_++;for(;0<y-_;)I=si(I),y--;for(;0<_-y;)w=si(w),_--;for(;y--;){if(I===w||w!==null&&I===w.alternate)break t;I=si(I),w=si(w)}I=null}else I=null;E!==null&&Em(p,g,E,I,!1),C!==null&&P!==null&&Em(p,P,C,I,!0)}}e:{if(g=d?hi(d):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var A=Vk;else if(hm(g))if(Ry)A=qk;else{A=Hk;var F=Wk}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=$k);if(A&&(A=A(t,d))){xy(p,A,n,m);break e}F&&F(t,g,d),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Lc(g,"number",g.value)}switch(F=d?hi(d):window,t){case"focusin":(hm(F)||F.contentEditable==="true")&&(di=F,qc=d,Ms=null);break;case"focusout":Ms=qc=di=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,ym(p,n,m);break;case"selectionchange":if(Yk)break;case"keydown":case"keyup":ym(p,n,m)}var U;if(hf)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else ci?by(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Ty&&n.locale!=="ko"&&(ci||B!=="onCompositionStart"?B==="onCompositionEnd"&&ci&&(U=ky()):(Dn=m,cf="value"in Dn?Dn.value:Dn.textContent,ci=!0)),F=Wa(d,B),0<F.length&&(B=new um(B,t,null,n,m),p.push({event:B,listeners:F}),U?B.data=U:(U=Py(n),U!==null&&(B.data=U)))),(U=Fk?Uk(t,n):Bk(t,n))&&(d=Wa(d,"onBeforeInput"),0<d.length&&(m=new um("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=U))}jy(p,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(ro(t,s,i)),s=Qs(t,e),s!=null&&r.push(ro(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Em(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Qs(n,s),u!=null&&o.unshift(ro(n,u,l))):i||(u=Qs(n,s),u!=null&&o.push(ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zk=/\r\n?/g,eT=/\u0000|\uFFFD/g;function Cm(t){return(typeof t=="string"?t:""+t).replace(Zk,`
`).replace(eT,"")}function la(t,e,n){if(e=Cm(e),Cm(t)!==e&&n)throw Error(b(425))}function Ha(){}var Kc=null,Yc=null;function Qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,tT=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,nT=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(t){return Sm.resolve(null).then(t).catch(rT)}:Jc;function rT(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zs(e)}function zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Gi,io="__reactProps$"+Gi,pn="__reactContainer$"+Gi,Xc="__reactEvents$"+Gi,iT="__reactListeners$"+Gi,sT="__reactHandles$"+Gi;function Sr(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Im(t);t!==null;){if(n=t[qt])return n;t=Im(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[qt]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Fl(t){return t[io]||null}var Zc=[],pi=-1;function tr(t){return{current:t}}function ue(t){0>pi||(t.current=Zc[pi],Zc[pi]=null,pi--)}function oe(t,e){pi++,Zc[pi]=t.current,t.current=e}var Jn={},We=tr(Jn),rt=tr(!1),Ar=Jn;function Di(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function it(t){return t=t.childContextTypes,t!=null}function $a(){ue(rt),ue(We)}function km(t,e,n){if(We.current!==Jn)throw Error(b(168));oe(We,e),oe(rt,n)}function Vy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,WI(t)||"Unknown",i));return pe({},n,r)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Ar=We.current,oe(We,t),oe(rt,rt.current),!0}function Tm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Vy(t,e,Ar),r.__reactInternalMemoizedMergedChildContext=t,ue(rt),ue(We),oe(We,t)):ue(rt),oe(rt,n)}var nn=null,Ul=!1,Ju=!1;function Wy(t){nn===null?nn=[t]:nn.push(t)}function oT(t){Ul=!0,Wy(t)}function nr(){if(!Ju&&nn!==null){Ju=!0;var t=0,e=te;try{var n=nn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nn=null,Ul=!1}catch(i){throw nn!==null&&(nn=nn.slice(t+1)),py(of,nr),i}finally{te=e,Ju=!1}}return null}var mi=[],gi=0,Ga=null,Ka=0,Et=[],Ct=0,Nr=null,rn=1,sn="";function yr(t,e){mi[gi++]=Ka,mi[gi++]=Ga,Ga=t,Ka=e}function Hy(t,e,n){Et[Ct++]=rn,Et[Ct++]=sn,Et[Ct++]=Nr,Nr=t;var r=rn;t=sn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rn=1<<32-Dt(e)+i|n<<i|r,sn=s+t}else rn=1<<s|n<<i|r,sn=t}function mf(t){t.return!==null&&(yr(t,1),Hy(t,1,0))}function gf(t){for(;t===Ga;)Ga=mi[--gi],mi[gi]=null,Ka=mi[--gi],mi[gi]=null;for(;t===Nr;)Nr=Et[--Ct],Et[Ct]=null,sn=Et[--Ct],Et[Ct]=null,rn=Et[--Ct],Et[Ct]=null}var pt=null,ht=null,ce=!1,At=null;function $y(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ht=zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ht=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(ce){var e=ht;if(e){var n=e;if(!bm(t,e)){if(ed(t))throw Error(b(418));e=zn(n.nextSibling);var r=pt;e&&bm(t,e)?$y(r,n):(t.flags=t.flags&-4097|2,ce=!1,pt=t)}}else{if(ed(t))throw Error(b(418));t.flags=t.flags&-4097|2,ce=!1,pt=t}}}function Pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function ua(t){if(t!==pt)return!1;if(!ce)return Pm(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qc(t.type,t.memoizedProps)),e&&(e=ht)){if(ed(t))throw qy(),Error(b(418));for(;e;)$y(t,e),e=zn(e.nextSibling)}if(Pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ht=zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ht=null}}else ht=pt?zn(t.stateNode.nextSibling):null;return!0}function qy(){for(var t=ht;t;)t=zn(t.nextSibling)}function Mi(){ht=pt=null,ce=!1}function vf(t){At===null?At=[t]:At.push(t)}var aT=_n.ReactCurrentBatchConfig;function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xm(t){var e=t._init;return e(t._payload)}function Gy(t){function e(w,y){if(t){var _=w.deletions;_===null?(w.deletions=[y],w.flags|=16):_.push(y)}}function n(w,y){if(!t)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function i(w,y){return w=$n(w,y),w.index=0,w.sibling=null,w}function s(w,y,_){return w.index=_,t?(_=w.alternate,_!==null?(_=_.index,_<y?(w.flags|=2,y):_):(w.flags|=2,y)):(w.flags|=1048576,y)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,y,_,T){return y===null||y.tag!==6?(y=ic(_,w.mode,T),y.return=w,y):(y=i(y,_),y.return=w,y)}function u(w,y,_,T){var A=_.type;return A===ui?m(w,y,_.props.children,T,_.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bn&&xm(A)===y.type)?(T=i(y,_.props),T.ref=vs(w,y,_),T.return=w,T):(T=xa(_.type,_.key,_.props,null,w.mode,T),T.ref=vs(w,y,_),T.return=w,T)}function d(w,y,_,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=sc(_,w.mode,T),y.return=w,y):(y=i(y,_.children||[]),y.return=w,y)}function m(w,y,_,T,A){return y===null||y.tag!==7?(y=Rr(_,w.mode,T,A),y.return=w,y):(y=i(y,_),y.return=w,y)}function p(w,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ic(""+y,w.mode,_),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zo:return _=xa(y.type,y.key,y.props,null,w.mode,_),_.ref=vs(w,null,y),_.return=w,_;case li:return y=sc(y,w.mode,_),y.return=w,y;case bn:var T=y._init;return p(w,T(y._payload),_)}if(bs(y)||fs(y))return y=Rr(y,w.mode,_,null),y.return=w,y;ca(w,y)}return null}function g(w,y,_,T){var A=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:l(w,y,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:return _.key===A?u(w,y,_,T):null;case li:return _.key===A?d(w,y,_,T):null;case bn:return A=_._init,g(w,y,A(_._payload),T)}if(bs(_)||fs(_))return A!==null?null:m(w,y,_,T,null);ca(w,_)}return null}function E(w,y,_,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return w=w.get(_)||null,l(y,w,""+T,A);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Zo:return w=w.get(T.key===null?_:T.key)||null,u(y,w,T,A);case li:return w=w.get(T.key===null?_:T.key)||null,d(y,w,T,A);case bn:var F=T._init;return E(w,y,_,F(T._payload),A)}if(bs(T)||fs(T))return w=w.get(_)||null,m(y,w,T,A,null);ca(y,T)}return null}function C(w,y,_,T){for(var A=null,F=null,U=y,B=y=0,Z=null;U!==null&&B<_.length;B++){U.index>B?(Z=U,U=null):Z=U.sibling;var W=g(w,U,_[B],T);if(W===null){U===null&&(U=Z);break}t&&U&&W.alternate===null&&e(w,U),y=s(W,y,B),F===null?A=W:F.sibling=W,F=W,U=Z}if(B===_.length)return n(w,U),ce&&yr(w,B),A;if(U===null){for(;B<_.length;B++)U=p(w,_[B],T),U!==null&&(y=s(U,y,B),F===null?A=U:F.sibling=U,F=U);return ce&&yr(w,B),A}for(U=r(w,U);B<_.length;B++)Z=E(U,w,B,_[B],T),Z!==null&&(t&&Z.alternate!==null&&U.delete(Z.key===null?B:Z.key),y=s(Z,y,B),F===null?A=Z:F.sibling=Z,F=Z);return t&&U.forEach(function(ut){return e(w,ut)}),ce&&yr(w,B),A}function I(w,y,_,T){var A=fs(_);if(typeof A!="function")throw Error(b(150));if(_=A.call(_),_==null)throw Error(b(151));for(var F=A=null,U=y,B=y=0,Z=null,W=_.next();U!==null&&!W.done;B++,W=_.next()){U.index>B?(Z=U,U=null):Z=U.sibling;var ut=g(w,U,W.value,T);if(ut===null){U===null&&(U=Z);break}t&&U&&ut.alternate===null&&e(w,U),y=s(ut,y,B),F===null?A=ut:F.sibling=ut,F=ut,U=Z}if(W.done)return n(w,U),ce&&yr(w,B),A;if(U===null){for(;!W.done;B++,W=_.next())W=p(w,W.value,T),W!==null&&(y=s(W,y,B),F===null?A=W:F.sibling=W,F=W);return ce&&yr(w,B),A}for(U=r(w,U);!W.done;B++,W=_.next())W=E(U,w,B,W.value,T),W!==null&&(t&&W.alternate!==null&&U.delete(W.key===null?B:W.key),y=s(W,y,B),F===null?A=W:F.sibling=W,F=W);return t&&U.forEach(function(lr){return e(w,lr)}),ce&&yr(w,B),A}function P(w,y,_,T){if(typeof _=="object"&&_!==null&&_.type===ui&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:e:{for(var A=_.key,F=y;F!==null;){if(F.key===A){if(A=_.type,A===ui){if(F.tag===7){n(w,F.sibling),y=i(F,_.props.children),y.return=w,w=y;break e}}else if(F.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bn&&xm(A)===F.type){n(w,F.sibling),y=i(F,_.props),y.ref=vs(w,F,_),y.return=w,w=y;break e}n(w,F);break}else e(w,F);F=F.sibling}_.type===ui?(y=Rr(_.props.children,w.mode,T,_.key),y.return=w,w=y):(T=xa(_.type,_.key,_.props,null,w.mode,T),T.ref=vs(w,y,_),T.return=w,w=T)}return o(w);case li:e:{for(F=_.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(w,y.sibling),y=i(y,_.children||[]),y.return=w,w=y;break e}else{n(w,y);break}else e(w,y);y=y.sibling}y=sc(_,w.mode,T),y.return=w,w=y}return o(w);case bn:return F=_._init,P(w,y,F(_._payload),T)}if(bs(_))return C(w,y,_,T);if(fs(_))return I(w,y,_,T);ca(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(w,y.sibling),y=i(y,_),y.return=w,w=y):(n(w,y),y=ic(_,w.mode,T),y.return=w,w=y),o(w)):n(w,y)}return P}var Fi=Gy(!0),Ky=Gy(!1),Ya=tr(null),Qa=null,vi=null,yf=null;function wf(){yf=vi=Qa=null}function _f(t){var e=Ya.current;ue(Ya),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){Qa=t,yf=vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function Tt(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},vi===null){if(Qa===null)throw Error(b(308));vi=t,Qa.dependencies={lanes:0,firstContext:t}}else vi=vi.next=t;return e}var Ir=null;function Ef(t){Ir===null?Ir=[t]:Ir.push(t)}function Yy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}function Rm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,r){var i=t.updateQueue;Pn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,m=d=u=null,l=s;do{var g=l.lane,E=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,I=l;switch(g=e,E=n,I.tag){case 1:if(C=I.payload,typeof C=="function"){p=C.call(E,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=I.payload,g=typeof C=="function"?C.call(E,p,g):C,g==null)break e;p=pe({},p,g);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else E={eventTime:E,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=E,u=p):m=m.next=E,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=p),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=p}}function Am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var xo={},Yt=tr(xo),so=tr(xo),oo=tr(xo);function kr(t){if(t===xo)throw Error(b(174));return t}function Sf(t,e){switch(oe(oo,e),oe(so,t),oe(Yt,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mc(e,t)}ue(Yt),oe(Yt,e)}function Ui(){ue(Yt),ue(so),ue(oo)}function Jy(t){kr(oo.current);var e=kr(Yt.current),n=Mc(e,t.type);e!==n&&(oe(so,t),oe(Yt,n))}function If(t){so.current===t&&(ue(Yt),ue(so))}var fe=tr(0);function Xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function kf(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Ia=_n.ReactCurrentDispatcher,Zu=_n.ReactCurrentBatchConfig,Or=0,he=null,ke=null,Re=null,Za=!1,Fs=!1,ao=0,lT=0;function Be(){throw Error(b(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function bf(t,e,n,r,i,s){if(Or=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ia.current=t===null||t.memoizedState===null?fT:hT,t=n(r,i),Fs){s=0;do{if(Fs=!1,ao=0,25<=s)throw Error(b(301));s+=1,Re=ke=null,e.updateQueue=null,Ia.current=pT,t=n(r,i)}while(Fs)}if(Ia.current=el,e=ke!==null&&ke.next!==null,Or=0,Re=ke=he=null,Za=!1,e)throw Error(b(300));return t}function Pf(){var t=ao!==0;return ao=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?he.memoizedState=Re=t:Re=Re.next=t,Re}function bt(){if(ke===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Re===null?he.memoizedState:Re.next;if(e!==null)Re=e,ke=t;else{if(t===null)throw Error(b(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Re===null?he.memoizedState=Re=t:Re=Re.next=t}return Re}function lo(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var m=d.lane;if((Or&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,he.lanes|=m,Lr|=m}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,Ut(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xy(){}function Zy(t,e){var n=he,r=bt(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,xf(nw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,uo(9,tw.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(b(349));Or&30||ew(n,e,i)}return i}function ew(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tw(t,e,n,r){e.value=n,e.getSnapshot=r,rw(e)&&iw(t)}function nw(t,e,n){return n(function(){rw(e)&&iw(t)})}function rw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function iw(t){var e=mn(t,1);e!==null&&Mt(e,t,1,-1)}function Nm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=dT.bind(null,he,t),[e.memoizedState,t]}function uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sw(){return bt().memoizedState}function ka(t,e,n,r){var i=$t();he.flags|=t,i.memoizedState=uo(1|e,n,void 0,r===void 0?null:r)}function Bl(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&Tf(r,o.deps)){i.memoizedState=uo(e,n,s,r);return}}he.flags|=t,i.memoizedState=uo(1|e,n,s,r)}function Om(t,e){return ka(8390656,8,t,e)}function xf(t,e){return Bl(2048,8,t,e)}function ow(t,e){return Bl(4,2,t,e)}function aw(t,e){return Bl(4,4,t,e)}function lw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uw(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,lw.bind(null,e,t),n)}function Rf(){}function cw(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dw(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fw(t,e,n){return Or&21?(Ut(n,e)||(n=vy(),he.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function uT(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=Zu.transition;Zu.transition={};try{t(!1),e()}finally{te=n,Zu.transition=r}}function hw(){return bt().memoizedState}function cT(t,e,n){var r=Hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pw(t))mw(e,n);else if(n=Yy(t,e,n,r),n!==null){var i=Ge();Mt(n,t,r,i),gw(n,e,r)}}function dT(t,e,n){var r=Hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pw(t))mw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,o)){var u=e.interleaved;u===null?(i.next=i,Ef(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Yy(t,e,i,r),n!==null&&(i=Ge(),Mt(n,t,r,i),gw(n,e,r))}}function pw(t){var e=t.alternate;return t===he||e!==null&&e===he}function mw(t,e){Fs=Za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}var el={readContext:Tt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},fT={readContext:Tt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:Tt,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,lw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cT.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:Nm,useDebugValue:Rf,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=Nm(!1),e=t[0];return t=uT.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=$t();if(ce){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Oe===null)throw Error(b(349));Or&30||ew(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Om(nw.bind(null,r,s,t),[t]),r.flags|=2048,uo(9,tw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Oe.identifierPrefix;if(ce){var n=sn,r=rn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hT={readContext:Tt,useCallback:cw,useContext:Tt,useEffect:xf,useImperativeHandle:uw,useInsertionEffect:ow,useLayoutEffect:aw,useMemo:dw,useReducer:ec,useRef:sw,useState:function(){return ec(lo)},useDebugValue:Rf,useDeferredValue:function(t){var e=bt();return fw(e,ke.memoizedState,t)},useTransition:function(){var t=ec(lo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Zy,useId:hw,unstable_isNewReconciler:!1},pT={readContext:Tt,useCallback:cw,useContext:Tt,useEffect:xf,useImperativeHandle:uw,useInsertionEffect:ow,useLayoutEffect:aw,useMemo:dw,useReducer:tc,useRef:sw,useState:function(){return tc(lo)},useDebugValue:Rf,useDeferredValue:function(t){var e=bt();return ke===null?e.memoizedState=t:fw(e,ke.memoizedState,t)},useTransition:function(){var t=tc(lo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Zy,useId:hw,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Hn(t),s=cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vn(t,s,i),e!==null&&(Mt(e,t,i,r),Sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Hn(t),s=cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vn(t,s,i),e!==null&&(Mt(e,t,i,r),Sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=Hn(t),i=cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vn(t,i,r),e!==null&&(Mt(e,t,r,n),Sa(e,t,r))}};function Lm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!to(n,r)||!to(i,s):!0}function vw(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(i=it(e)?Ar:We.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function id(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tt(s):(s=it(e)?Ar:We.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jl.enqueueReplaceState(i,i.state,null),Ja(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bi(t,e){try{var n="",r=e;do n+=VI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mT=typeof WeakMap=="function"?WeakMap:Map;function yw(t,e,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,md=r),sd(t,e)},n}function ww(t,e,n){n=cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(t,e),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xT.bind(null,t,e,n),e.then(t,t))}function Fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Um(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cn(-1,1),e.tag=2,Vn(n,e,1))),n.lanes|=1),t)}var gT=_n.ReactCurrentOwner,et=!1;function qe(t,e,n,r){e.child=t===null?Ky(e,null,n,r):Fi(e,t.child,n,r)}function Bm(t,e,n,r,i){n=n.render;var s=e.ref;return Ti(e,i),r=bf(t,e,n,r,s,i),n=Pf(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(ce&&n&&mf(e),e.flags|=1,qe(t,e,r,i),e.child)}function jm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_w(t,e,s,r,i)):(t=xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function _w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(to(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,gn(t,e,i)}return od(t,e,n,r,i)}function Ew(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(wi,ft),ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(wi,ft),ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(wi,ft),ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(wi,ft),ft|=r;return qe(t,e,i,n),e.child}function Cw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,r,i){var s=it(n)?Ar:We.current;return s=Di(e,s),Ti(e,i),n=bf(t,e,n,r,s,i),r=Pf(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(ce&&r&&mf(e),e.flags|=1,qe(t,e,n,i),e.child)}function zm(t,e,n,r,i){if(it(n)){var s=!0;qa(e)}else s=!1;if(Ti(e,i),e.stateNode===null)Ta(t,e),vw(e,n,r),id(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tt(d):(d=it(n)?Ar:We.current,d=Di(e,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Dm(e,o,r,d),Pn=!1;var g=e.memoizedState;o.state=g,Ja(e,r,o,i),u=e.memoizedState,l!==r||g!==u||rt.current||Pn?(typeof m=="function"&&(rd(e,n,m,r),u=e.memoizedState),(l=Pn||Lm(e,n,l,r,g,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qy(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:xt(e.type,l),o.props=d,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=it(n)?Ar:We.current,u=Di(e,u));var E=n.getDerivedStateFromProps;(m=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Dm(e,o,r,u),Pn=!1,g=e.memoizedState,o.state=g,Ja(e,r,o,i);var C=e.memoizedState;l!==p||g!==C||rt.current||Pn?(typeof E=="function"&&(rd(e,n,E,r),C=e.memoizedState),(d=Pn||Lm(e,n,d,r,g,C,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ad(t,e,n,r,s,i)}function ad(t,e,n,r,i,s){Cw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tm(e,n,!1),gn(t,e,s);r=e.stateNode,gT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,l,s)):qe(t,e,l,s),e.memoizedState=r.state,i&&Tm(e,n,!0),e.child}function Sw(t){var e=t.stateNode;e.pendingContext?km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&km(t,e.context,!1),Sf(t,e.containerInfo)}function Vm(t,e,n,r,i){return Mi(),vf(i),e.flags|=256,qe(t,e,n,r),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iw(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(fe,i&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=ld,t):Af(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$n(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=$n(l,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ld,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&vf(r),Fi(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nc(Error(b(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=nc(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,et||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Mt(r,t,i,-1))}return Ff(),r=nc(Error(b(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ht=zn(i.nextSibling),pt=e,ce=!0,At=null,t!==null&&(Et[Ct++]=rn,Et[Ct++]=sn,Et[Ct++]=Nr,rn=t.id,sn=t.overflow,Nr=e),e=Af(e,r.children),e.flags|=4096,e)}function Wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nd(t.return,e,n)}function rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yT(t,e,n){switch(e.tag){case 3:Sw(e),Mi();break;case 5:Jy(e);break;case 1:it(e.type)&&qa(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Ya,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?Iw(t,e,n):(oe(fe,fe.current&1),t=gn(t,e,n),t!==null?t.sibling:null);oe(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,Ew(t,e,n)}return gn(t,e,n)}var Tw,cd,bw,Pw;Tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};bw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(Yt.current);var s=null;switch(n){case"input":i=Nc(t,i),r=Nc(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=Dc(t,i),r=Dc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ha)}Fc(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ks.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ae("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ys(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wT(t,e,n){var r=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(e),null;case 1:return it(e.type)&&$a(),je(e),null;case 3:return r=e.stateNode,Ui(),ue(rt),ue(We),kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,At!==null&&(yd(At),At=null))),cd(t,e),je(e),null;case 5:If(e);var i=kr(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)bw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return je(e),null}if(t=kr(Yt.current),ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[io]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)ae(xs[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Xp(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":em(r,s),ae("invalid",r)}Fc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",""+l]):Ks.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":ea(r),Zp(r,s,!0);break;case"textarea":ea(r),tm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[io]=r,Tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uc(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)ae(xs[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":Xp(t,r),i=Nc(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ae("invalid",t);break;case"textarea":em(t,r),i=Dc(t,r),ae("invalid",t);break;default:i=r}Fc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?sy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ry(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ys(t,u):typeof u=="number"&&Ys(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ae("scroll",t):u!=null&&ef(t,s,u,o))}switch(n){case"input":ea(t),Zp(t,r,!1);break;case"textarea":ea(t),tm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return je(e),null;case 6:if(t&&e.stateNode!=null)Pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=kr(oo.current),kr(Yt.current),ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:la(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return je(e),null;case 13:if(ue(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&ht!==null&&e.mode&1&&!(e.flags&128))qy(),Mi(),e.flags|=98560,s=!1;else if(s=ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[qt]=e}else Mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;je(e),s=!1}else At!==null&&(yd(At),At=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?be===0&&(be=3):Ff())),e.updateQueue!==null&&(e.flags|=4),je(e),null);case 4:return Ui(),cd(t,e),t===null&&no(e.stateNode.containerInfo),je(e),null;case 10:return _f(e.type._context),je(e),null;case 17:return it(e.type)&&$a(),je(e),null;case 19:if(ue(fe),s=e.memoizedState,s===null)return je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ys(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xa(t),o!==null){for(e.flags|=128,ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>ji&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return je(e),null}else 2*Ce()-s.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=fe.current,oe(fe,r?n&1|2:n&1),e):(je(e),null);case 22:case 23:return Mf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ft&1073741824&&(je(e),e.subtreeFlags&6&&(e.flags|=8192)):je(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function _T(t,e){switch(gf(e),e.tag){case 1:return it(e.type)&&$a(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),ue(rt),ue(We),kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return If(e),null;case 13:if(ue(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(fe),null;case 4:return Ui(),null;case 10:return _f(e.type._context),null;case 22:case 23:return Mf(),null;case 24:return null;default:return null}}var fa=!1,ze=!1,ET=typeof WeakSet=="function"?WeakSet:Set,M=null;function yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function dd(t,e,n){try{n()}catch(r){ge(t,e,r)}}var Hm=!1;function CT(t,e){if(Kc=za,t=Oy(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,m=0,p=t,g=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)g=p,p=E;for(;;){if(p===t)break t;if(g===n&&++d===i&&(l=o),g===s&&++m===r&&(u=o),(E=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:t,selectionRange:n},za=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var I=C.memoizedProps,P=C.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?I:xt(e.type,I),P);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(T){ge(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return C=Hm,Hm=!1,C}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dd(e,n,s)}i=i.next}while(i!==r)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xw(t){var e=t.alternate;e!==null&&(t.alternate=null,xw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[io],delete e[Xc],delete e[iT],delete e[sT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rw(t){return t.tag===5||t.tag===3||t.tag===4}function $m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ha));else if(r!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Le=null,Rt=!1;function kn(t,e,n){for(n=n.child;n!==null;)Aw(t,e,n),n=n.sibling}function Aw(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:ze||yi(n,e);case 6:var r=Le,i=Rt;Le=null,kn(t,e,n),Le=r,Rt=i,Le!==null&&(Rt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Rt?(t=Le,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),Zs(t)):Qu(Le,n.stateNode));break;case 4:r=Le,i=Rt,Le=n.stateNode.containerInfo,Rt=!0,kn(t,e,n),Le=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(n,e,o),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!ze&&(yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,e,l)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,kn(t,e,n),ze=r):kn(t,e,n);break;default:kn(t,e,n)}}function qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ET),e.forEach(function(r){var i=AT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Rt=!1;break e;case 3:Le=l.stateNode.containerInfo,Rt=!0;break e;case 4:Le=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Le===null)throw Error(b(160));Aw(s,o,i),Le=null,Rt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){ge(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nw(e,t),e=e.sibling}function Nw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Ht(t),r&4){try{Us(3,t,t.return),zl(3,t)}catch(I){ge(t,t.return,I)}try{Us(5,t,t.return)}catch(I){ge(t,t.return,I)}}break;case 1:Pt(e,t),Ht(t),r&512&&n!==null&&yi(n,n.return);break;case 5:if(Pt(e,t),Ht(t),r&512&&n!==null&&yi(n,n.return),t.flags&32){var i=t.stateNode;try{Ys(i,"")}catch(I){ge(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ey(i,s),Uc(l,o);var d=Uc(l,s);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?sy(i,p):m==="dangerouslySetInnerHTML"?ry(i,p):m==="children"?Ys(i,p):ef(i,m,p,d)}switch(l){case"input":Oc(i,s);break;case"textarea":ty(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Ci(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[io]=s}catch(I){ge(t,t.return,I)}}break;case 6:if(Pt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){ge(t,t.return,I)}}break;case 3:if(Pt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(I){ge(t,t.return,I)}break;case 4:Pt(e,t),Ht(t);break;case 13:Pt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lf=Ce())),r&4&&qm(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ze=(d=ze)||m,Pt(e,t),ze=d):Pt(e,t),Ht(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(M=t,m=t.child;m!==null;){for(p=M=m;M!==null;){switch(g=M,E=g.child,g.tag){case 0:case 11:case 14:case 15:Us(4,g,g.return);break;case 1:yi(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(I){ge(r,n,I)}}break;case 5:yi(g,g.return);break;case 22:if(g.memoizedState!==null){Km(p);continue}}E!==null?(E.return=g,M=E):Km(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=iy("display",o))}catch(I){ge(t,t.return,I)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(I){ge(t,t.return,I)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pt(e,t),Ht(t),r&4&&qm(t);break;case 21:break;default:Pt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rw(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ys(i,""),r.flags&=-33);var s=$m(t);pd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$m(t);hd(t,l,o);break;default:throw Error(b(161))}}catch(u){ge(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ST(t,e,n){M=t,Ow(t)}function Ow(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ze;l=fa;var d=ze;if(fa=o,(ze=u)&&!d)for(M=i;M!==null;)o=M,u=o.child,o.tag===22&&o.memoizedState!==null?Ym(i):u!==null?(u.return=o,M=u):Ym(i);for(;s!==null;)M=s,Ow(s),s=s.sibling;M=i,fa=l,ze=d}Gm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Gm(t)}}function Gm(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ze||zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Am(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Am(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Zs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ze||e.flags&512&&fd(e)}catch(g){ge(e,e.return,g)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Km(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Ym(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(u){ge(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ge(e,i,u)}}var s=e.return;try{fd(e)}catch(u){ge(e,s,u)}break;case 5:var o=e.return;try{fd(e)}catch(u){ge(e,o,u)}}}catch(u){ge(e,e.return,u)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var IT=Math.ceil,tl=_n.ReactCurrentDispatcher,Nf=_n.ReactCurrentOwner,It=_n.ReactCurrentBatchConfig,J=0,Oe=null,Ie=null,Me=0,ft=0,wi=tr(0),be=0,co=null,Lr=0,Vl=0,Of=0,Bs=null,Ze=null,Lf=0,ji=1/0,tn=null,nl=!1,md=null,Wn=null,ha=!1,Mn=null,rl=0,js=0,gd=null,ba=-1,Pa=0;function Ge(){return J&6?Ce():ba!==-1?ba:ba=Ce()}function Hn(t){return t.mode&1?J&2&&Me!==0?Me&-Me:aT.transition!==null?(Pa===0&&(Pa=vy()),Pa):(t=te,t!==0||(t=window.event,t=t===void 0?16:Iy(t.type)),t):1}function Mt(t,e,n,r){if(50<js)throw js=0,gd=null,Error(b(185));To(t,n,r),(!(J&2)||t!==Oe)&&(t===Oe&&(!(J&2)&&(Vl|=n),be===4&&Rn(t,Me)),st(t,r),n===1&&J===0&&!(e.mode&1)&&(ji=Ce()+500,Ul&&nr()))}function st(t,e){var n=t.callbackNode;ak(t,e);var r=ja(t,t===Oe?Me:0);if(r===0)n!==null&&im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&im(n),e===1)t.tag===0?oT(Qm.bind(null,t)):Wy(Qm.bind(null,t)),nT(function(){!(J&6)&&nr()}),n=null;else{switch(yy(r)){case 1:n=of;break;case 4:n=my;break;case 16:n=Ba;break;case 536870912:n=gy;break;default:n=Ba}n=zw(n,Lw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lw(t,e){if(ba=-1,Pa=0,J&6)throw Error(b(327));var n=t.callbackNode;if(bi()&&t.callbackNode!==n)return null;var r=ja(t,t===Oe?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=il(t,r);else{e=r;var i=J;J|=2;var s=Mw();(Oe!==t||Me!==e)&&(tn=null,ji=Ce()+500,xr(t,e));do try{bT();break}catch(l){Dw(t,l)}while(!0);wf(),tl.current=s,J=i,Ie!==null?e=0:(Oe=null,Me=0,e=be)}if(e!==0){if(e===2&&(i=Wc(t),i!==0&&(r=i,e=vd(t,i))),e===1)throw n=co,xr(t,0),Rn(t,r),st(t,Ce()),n;if(e===6)Rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!kT(i)&&(e=il(t,r),e===2&&(s=Wc(t),s!==0&&(r=s,e=vd(t,s))),e===1))throw n=co,xr(t,0),Rn(t,r),st(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:wr(t,Ze,tn);break;case 3:if(Rn(t,r),(r&130023424)===r&&(e=Lf+500-Ce(),10<e)){if(ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jc(wr.bind(null,t,Ze,tn),e);break}wr(t,Ze,tn);break;case 4:if(Rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IT(r/1960))-r,10<r){t.timeoutHandle=Jc(wr.bind(null,t,Ze,tn),r);break}wr(t,Ze,tn);break;case 5:wr(t,Ze,tn);break;default:throw Error(b(329))}}}return st(t,Ce()),t.callbackNode===n?Lw.bind(null,t):null}function vd(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=il(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&yd(e)),t}function yd(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function kT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e){for(e&=~Of,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function Qm(t){if(J&6)throw Error(b(327));bi();var e=ja(t,0);if(!(e&1))return st(t,Ce()),null;var n=il(t,e);if(t.tag!==0&&n===2){var r=Wc(t);r!==0&&(e=r,n=vd(t,r))}if(n===1)throw n=co,xr(t,0),Rn(t,e),st(t,Ce()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,Ze,tn),st(t,Ce()),null}function Df(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(ji=Ce()+500,Ul&&nr())}}function Dr(t){Mn!==null&&Mn.tag===0&&!(J&6)&&bi();var e=J;J|=1;var n=It.transition,r=te;try{if(It.transition=null,te=1,t)return t()}finally{te=r,It.transition=n,J=e,!(J&6)&&nr()}}function Mf(){ft=wi.current,ue(wi)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tT(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$a();break;case 3:Ui(),ue(rt),ue(We),kf();break;case 5:If(r);break;case 4:Ui();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:_f(r.type._context);break;case 22:case 23:Mf()}n=n.return}if(Oe=t,Ie=t=$n(t.current,null),Me=ft=e,be=0,co=null,Of=Vl=Lr=0,Ze=Bs=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ir=null}return t}function Dw(t,e){do{var n=Ie;try{if(wf(),Ia.current=el,Za){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Za=!1}if(Or=0,Re=ke=he=null,Fs=!1,ao=0,Nf.current=null,n===null||n.return===null){be=1,co=e,Ie=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Me,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var E=Fm(o);if(E!==null){E.flags&=-257,Um(E,o,l,s,e),E.mode&1&&Mm(s,d,e),e=E,u=d;var C=e.updateQueue;if(C===null){var I=new Set;I.add(u),e.updateQueue=I}else C.add(u);break e}else{if(!(e&1)){Mm(s,d,e),Ff();break e}u=Error(b(426))}}else if(ce&&l.mode&1){var P=Fm(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Um(P,o,l,s,e),vf(Bi(u,l));break e}}s=u=Bi(u,l),be!==4&&(be=2),Bs===null?Bs=[s]:Bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=yw(s,u,e);Rm(s,w);break e;case 1:l=u;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wn===null||!Wn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=ww(s,l,e);Rm(s,T);break e}}s=s.return}while(s!==null)}Uw(n)}catch(A){e=A,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function Mw(){var t=tl.current;return tl.current=el,t===null?el:t}function Ff(){(be===0||be===3||be===2)&&(be=4),Oe===null||!(Lr&268435455)&&!(Vl&268435455)||Rn(Oe,Me)}function il(t,e){var n=J;J|=2;var r=Mw();(Oe!==t||Me!==e)&&(tn=null,xr(t,e));do try{TT();break}catch(i){Dw(t,i)}while(!0);if(wf(),J=n,tl.current=r,Ie!==null)throw Error(b(261));return Oe=null,Me=0,be}function TT(){for(;Ie!==null;)Fw(Ie)}function bT(){for(;Ie!==null&&!XI();)Fw(Ie)}function Fw(t){var e=jw(t.alternate,t,ft);t.memoizedProps=t.pendingProps,e===null?Uw(t):Ie=e,Nf.current=null}function Uw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_T(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Ie=null;return}}else if(n=wT(n,e,ft),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);be===0&&(be=5)}function wr(t,e,n){var r=te,i=It.transition;try{It.transition=null,te=1,PT(t,e,n,r)}finally{It.transition=i,te=r}return null}function PT(t,e,n,r){do bi();while(Mn!==null);if(J&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lk(t,s),t===Oe&&(Ie=Oe=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,zw(Ba,function(){return bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var o=te;te=1;var l=J;J|=4,Nf.current=null,CT(t,n),Nw(n,t),Kk(Yc),za=!!Kc,Yc=Kc=null,t.current=n,ST(n),ZI(),J=l,te=o,It.transition=s}else t.current=n;if(ha&&(ha=!1,Mn=t,rl=i),s=t.pendingLanes,s===0&&(Wn=null),nk(n.stateNode),st(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,t=md,md=null,t;return rl&1&&t.tag!==0&&bi(),s=t.pendingLanes,s&1?t===gd?js++:(js=0,gd=t):js=0,nr(),null}function bi(){if(Mn!==null){var t=yy(rl),e=It.transition,n=te;try{if(It.transition=null,te=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,rl=0,J&6)throw Error(b(331));var i=J;for(J|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(M=d;M!==null;){var m=M;switch(m.tag){case 0:case 11:case 15:Us(8,m,s)}var p=m.child;if(p!==null)p.return=m,M=p;else for(;M!==null;){m=M;var g=m.sibling,E=m.return;if(xw(m),m===d){M=null;break}if(g!==null){g.return=E,M=g;break}M=E}}}var C=s.alternate;if(C!==null){var I=C.child;if(I!==null){C.child=null;do{var P=I.sibling;I.sibling=null,I=P}while(I!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,M=w;break e}M=s.return}}var y=t.current;for(M=y;M!==null;){o=M;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,M=_;else e:for(o=y;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(A){ge(l,l.return,A)}if(l===o){M=null;break e}var T=l.sibling;if(T!==null){T.return=l.return,M=T;break e}M=l.return}}if(J=i,nr(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Ol,t)}catch{}r=!0}return r}finally{te=n,It.transition=e}}return!1}function Jm(t,e,n){e=Bi(n,e),e=yw(t,e,1),t=Vn(t,e,1),e=Ge(),t!==null&&(To(t,1,e),st(t,e))}function ge(t,e,n){if(t.tag===3)Jm(t,t,n);else for(;e!==null;){if(e.tag===3){Jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){t=Bi(n,t),t=ww(e,t,1),e=Vn(e,t,1),t=Ge(),e!==null&&(To(e,1,t),st(e,t));break}}e=e.return}}function xT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Me&n)===n&&(be===4||be===3&&(Me&130023424)===Me&&500>Ce()-Lf?xr(t,0):Of|=n),st(t,e)}function Bw(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var n=Ge();t=mn(t,e),t!==null&&(To(t,e,n),st(t,n))}function RT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bw(t,n)}function AT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Bw(t,n)}var jw;jw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,yT(t,e,n);et=!!(t.flags&131072)}else et=!1,ce&&e.flags&1048576&&Hy(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ta(t,e),t=e.pendingProps;var i=Di(e,We.current);Ti(e,n),i=bf(null,e,r,t,i,n);var s=Pf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,it(r)?(s=!0,qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cf(e),i.updater=jl,e.stateNode=i,i._reactInternals=e,id(e,r,t,n),e=ad(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&mf(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ta(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OT(r),t=xt(r,t),i){case 0:e=od(null,e,r,t,n);break e;case 1:e=zm(null,e,r,t,n);break e;case 11:e=Bm(null,e,r,t,n);break e;case 14:e=jm(null,e,r,xt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),od(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),zm(t,e,r,i,n);case 3:e:{if(Sw(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qy(t,e),Ja(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bi(Error(b(423)),e),e=Vm(t,e,r,n,i);break e}else if(r!==i){i=Bi(Error(b(424)),e),e=Vm(t,e,r,n,i);break e}else for(ht=zn(e.stateNode.containerInfo.firstChild),pt=e,ce=!0,At=null,n=Ky(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){e=gn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Jy(e),t===null&&td(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qc(r,i)?o=null:s!==null&&Qc(r,s)&&(e.flags|=32),Cw(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return Iw(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Bm(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(Ya,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!rt.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=cn(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),nd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ti(e,n),i=Tt(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),jm(t,e,r,i,n);case 15:return _w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Ta(t,e),e.tag=1,it(r)?(t=!0,qa(e)):t=!1,Ti(e,n),vw(e,r,i),id(e,r,i,n),ad(null,e,r,!0,t,n);case 19:return kw(t,e,n);case 22:return Ew(t,e,n)}throw Error(b(156,e.tag))};function zw(t,e){return py(t,e)}function NT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new NT(t,e,n,r)}function Uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OT(t){if(typeof t=="function")return Uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ui:return Rr(n.children,i,s,e);case tf:o=8,i|=8;break;case Pc:return t=St(12,n,e,i|2),t.elementType=Pc,t.lanes=s,t;case xc:return t=St(13,n,e,i),t.elementType=xc,t.lanes=s,t;case Rc:return t=St(19,n,e,i),t.elementType=Rc,t.lanes=s,t;case Jv:return Wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yv:o=10;break e;case Qv:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case bn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=St(22,t,r,e),t.elementType=Jv,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,r,i,s,o,l,u){return t=new LT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(s),t}function DT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Vw(t){if(!t)return Jn;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(it(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(it(n))return Vy(t,n,e)}return e}function Ww(t,e,n,r,i,s,o,l,u){return t=Bf(n,r,!0,t,i,s,o,l,u),t.context=Vw(null),n=t.current,r=Ge(),i=Hn(n),s=cn(r,i),s.callback=e??null,Vn(n,s,i),t.current.lanes=i,To(t,i,r),st(t,r),t}function Hl(t,e,n,r){var i=e.current,s=Ge(),o=Hn(i);return n=Vw(n),e.context===null?e.context=n:e.pendingContext=n,e=cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vn(i,e,o),t!==null&&(Mt(t,i,o,s),Sa(t,i,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){Xm(t,e),(t=t.alternate)&&Xm(t,e)}function MT(){return null}var Hw=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}$l.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Hl(t,e,null,null)};$l.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Hl(null,t,null,null)}),e[pn]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ey();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xn.length&&e!==0&&e<xn[n].priority;n++);xn.splice(n,0,t),n===0&&Sy(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zm(){}function FT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=sl(o);s.call(d)}}var o=Ww(e,r,t,0,null,!1,!1,"",Zm);return t._reactRootContainer=o,t[pn]=o.current,no(t.nodeType===8?t.parentNode:t),Dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=sl(u);l.call(d)}}var u=Bf(t,0,!1,null,null,!1,!1,"",Zm);return t._reactRootContainer=u,t[pn]=u.current,no(t.nodeType===8?t.parentNode:t),Dr(function(){Hl(e,u,n,r)}),u}function Gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=sl(o);l.call(u)}}Hl(e,o,t,i)}else o=FT(n,e,t,i,r);return sl(o)}wy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(af(e,n|1),st(e,Ce()),!(J&6)&&(ji=Ce()+500,nr()))}break;case 13:Dr(function(){var r=mn(t,1);if(r!==null){var i=Ge();Mt(r,t,1,i)}}),jf(t,1)}};lf=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=Ge();Mt(e,t,134217728,n)}jf(t,134217728)}};_y=function(t){if(t.tag===13){var e=Hn(t),n=mn(t,e);if(n!==null){var r=Ge();Mt(n,t,e,r)}jf(t,e)}};Ey=function(){return te};Cy=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};jc=function(t,e,n){switch(e){case"input":if(Oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fl(r);if(!i)throw Error(b(90));Zv(r),Oc(r,i)}}}break;case"textarea":ty(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};ly=Df;uy=Dr;var UT={usingClientEntryPoint:!1,Events:[Po,hi,Fl,oy,ay,Df]},ws={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BT={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fy(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||MT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Ol=pa.inject(BT),Kt=pa}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UT;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(b(200));return DT(t,e,null,n)};vt.createRoot=function(t,e){if(!Vf(t))throw Error(b(299));var n=!1,r="",i=Hw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,no(t.nodeType===8?t.parentNode:t),new zf(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=fy(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return Dr(t)};vt.hydrate=function(t,e,n){if(!ql(e))throw Error(b(200));return Gl(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ww(e,null,t,1,n??null,i,!1,s,o),t[pn]=e.current,no(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $l(e)};vt.render=function(t,e,n){if(!ql(e))throw Error(b(200));return Gl(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!ql(t))throw Error(b(40));return t._reactRootContainer?(Dr(function(){Gl(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};vt.unstable_batchedUpdates=Df;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ql(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Gl(t,e,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(t){console.error(t)}}$w(),$v.exports=vt;var jT=$v.exports,eg=jT;Tc.createRoot=eg.createRoot,Tc.hydrateRoot=eg.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fo.apply(this,arguments)}var Fn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fn||(Fn={}));const tg="popstate";function zT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return wd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ol(i)}return WT(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VT(){return Math.random().toString(36).substr(2,8)}function ng(t,e){return{usr:t.state,key:t.key,idx:e}}function wd(t,e,n,r){return n===void 0&&(n=null),fo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ki(e):e,{state:n,key:e&&e.key||r||VT()})}function ol(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ki(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function WT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Fn.Pop,u=null,d=m();d==null&&(d=0,o.replaceState(fo({},o.state,{idx:d}),""));function m(){return(o.state||{idx:null}).idx}function p(){l=Fn.Pop;let P=m(),w=P==null?null:P-d;d=P,u&&u({action:l,location:I.location,delta:w})}function g(P,w){l=Fn.Push;let y=wd(I.location,P,w);d=m()+1;let _=ng(y,d),T=I.createHref(y);try{o.pushState(_,"",T)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(T)}s&&u&&u({action:l,location:I.location,delta:1})}function E(P,w){l=Fn.Replace;let y=wd(I.location,P,w);d=m();let _=ng(y,d),T=I.createHref(y);o.replaceState(_,"",T),s&&u&&u({action:l,location:I.location,delta:0})}function C(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof P=="string"?P:ol(P);return y=y.replace(/ $/,"%20"),Se(w,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,w)}let I={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(tg,p),u=P,()=>{i.removeEventListener(tg,p),u=null}},createHref(P){return e(i,P)},createURL:C,encodeLocation(P){let w=C(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:E,go(P){return o.go(P)}};return I}var rg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(rg||(rg={}));function HT(t,e,n){return n===void 0&&(n="/"),$T(t,e,n,!1)}function $T(t,e,n,r){let i=typeof e=="string"?Ki(e):e,s=Wf(i.pathname||"/",n);if(s==null)return null;let o=Gw(t);qT(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=r1(s);l=t1(o[u],d,r)}return l}function Gw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=qn([r,u.relativePath]),m=n.concat(u);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Gw(s.children,e,m,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:ZT(d,s.index),routesMeta:m})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Kw(s.path))i(s,o,u)}),e}function Kw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Kw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function qT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:e1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const GT=/^:[\w-]+$/,KT=3,YT=2,QT=1,JT=10,XT=-2,ig=t=>t==="*";function ZT(t,e){let n=t.split("/"),r=n.length;return n.some(ig)&&(r+=XT),e&&(r+=YT),n.filter(i=>!ig(i)).reduce((i,s)=>i+(GT.test(s)?KT:s===""?QT:JT),r)}function e1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function t1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,m=s==="/"?e:e.slice(s.length)||"/",p=sg({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),g=u.route;if(!p&&d&&n&&!r[r.length-1].route.index&&(p=sg({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:qn([s,p.pathname]),pathnameBase:a1(qn([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=qn([s,p.pathnameBase]))}return o}function sg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=n1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,m,p)=>{let{paramName:g,isOptional:E}=m;if(g==="*"){let I=l[p]||"";o=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const C=l[p];return E&&!C?d[g]=void 0:d[g]=(C||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function n1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function r1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function i1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ki(t):t;return{pathname:n?n.startsWith("/")?n:s1(n,e):e,search:l1(r),hash:u1(i)}}function s1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hf(t,e){let n=o1(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $f(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ki(t):(i=fo({},t),Se(!i.pathname||!i.pathname.includes("?"),oc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),oc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),oc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=i1(i,l),d=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}const qn=t=>t.join("/").replace(/\/\/+/g,"/"),a1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),l1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,u1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function c1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Yw=["post","put","patch","delete"];new Set(Yw);const d1=["get",...Yw];new Set(d1);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ho.apply(this,arguments)}const qf=O.createContext(null),f1=O.createContext(null),rr=O.createContext(null),Kl=O.createContext(null),ir=O.createContext({outlet:null,matches:[],isDataRoute:!1}),Qw=O.createContext(null);function h1(t,e){let{relative:n}=e===void 0?{}:e;Yi()||Se(!1);let{basename:r,navigator:i}=O.useContext(rr),{hash:s,pathname:o,search:l}=Xw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:qn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Yi(){return O.useContext(Kl)!=null}function Ro(){return Yi()||Se(!1),O.useContext(Kl).location}function Jw(t){O.useContext(rr).static||O.useLayoutEffect(t)}function Yl(){let{isDataRoute:t}=O.useContext(ir);return t?T1():p1()}function p1(){Yi()||Se(!1);let t=O.useContext(qf),{basename:e,future:n,navigator:r}=O.useContext(rr),{matches:i}=O.useContext(ir),{pathname:s}=Ro(),o=JSON.stringify(Hf(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return Jw(()=>{l.current=!0}),O.useCallback(function(d,m){if(m===void 0&&(m={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=$f(d,JSON.parse(o),s,m.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:qn([e,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[e,r,o,s,t])}function Xw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(rr),{matches:i}=O.useContext(ir),{pathname:s}=Ro(),o=JSON.stringify(Hf(i,r.v7_relativeSplatPath));return O.useMemo(()=>$f(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function m1(t,e){return g1(t,e)}function g1(t,e,n,r){Yi()||Se(!1);let{navigator:i}=O.useContext(rr),{matches:s}=O.useContext(ir),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=Ro(),m;if(e){var p;let P=typeof e=="string"?Ki(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||Se(!1),m=P}else m=d;let g=m.pathname||"/",E=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let C=HT(t,{pathname:E}),I=E1(C&&C.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:qn([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:qn([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&I?O.createElement(Kl.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Fn.Pop}},I):I}function v1(){let t=k1(),e=c1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const y1=O.createElement(v1,null);class w1 extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(ir.Provider,{value:this.props.routeContext},O.createElement(Qw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _1(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(qf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(ir.Provider,{value:e},r)}function E1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let m=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);m>=0||Se(!1),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:E}=n,C=p.route.loader&&g[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||C){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,p,g)=>{let E,C=!1,I=null,P=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,I=p.route.errorElement||y1,u&&(d<0&&g===0?(C=!0,P=null):d===g&&(C=!0,P=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),y=()=>{let _;return E?_=I:C?_=P:p.route.Component?_=O.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,O.createElement(_1,{match:p,routeContext:{outlet:m,matches:w,isDataRoute:n!=null},children:_})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?O.createElement(w1,{location:n.location,revalidation:n.revalidation,component:I,error:E,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}var Zw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Zw||{}),al=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(al||{});function C1(t){let e=O.useContext(qf);return e||Se(!1),e}function S1(t){let e=O.useContext(f1);return e||Se(!1),e}function I1(t){let e=O.useContext(ir);return e||Se(!1),e}function e_(t){let e=I1(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function k1(){var t;let e=O.useContext(Qw),n=S1(al.UseRouteError),r=e_(al.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function T1(){let{router:t}=C1(Zw.UseNavigateStable),e=e_(al.UseNavigateStable),n=O.useRef(!1);return Jw(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ho({fromRouteId:e},s)))},[t,e])}function oi(t){let{to:e,replace:n,state:r,relative:i}=t;Yi()||Se(!1);let{future:s,static:o}=O.useContext(rr),{matches:l}=O.useContext(ir),{pathname:u}=Ro(),d=Yl(),m=$f(e,Hf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(m);return O.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:i}),[d,p,i,n,r]),null}function _r(t){Se(!1)}function b1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:s,static:o=!1,future:l}=t;Yi()&&Se(!1);let u=e.replace(/^\/*/,"/"),d=O.useMemo(()=>({basename:u,navigator:s,static:o,future:ho({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ki(r));let{pathname:m="/",search:p="",hash:g="",state:E=null,key:C="default"}=r,I=O.useMemo(()=>{let P=Wf(m,u);return P==null?null:{location:{pathname:P,search:p,hash:g,state:E,key:C},navigationType:i}},[u,m,p,g,E,C,i]);return I==null?null:O.createElement(rr.Provider,{value:d},O.createElement(Kl.Provider,{children:n,value:I}))}function P1(t){let{children:e,location:n}=t;return m1(_d(e),n)}new Promise(()=>{});function _d(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,_d(r.props.children,s));return}r.type!==_r&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_d(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ed(){return Ed=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ed.apply(this,arguments)}function x1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function R1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function A1(t,e){return t.button===0&&(!e||e==="_self")&&!R1(t)}const N1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],O1="6";try{window.__reactRouterVersion=O1}catch{}const L1="startTransition",og=xI[L1];function D1(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=zT({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},m=O.useCallback(p=>{d&&og?og(()=>u(p)):u(p)},[u,d]);return O.useLayoutEffect(()=>o.listen(m),[o,m]),O.createElement(b1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const M1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",F1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ra=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:m,unstable_viewTransition:p}=e,g=x1(e,N1),{basename:E}=O.useContext(rr),C,I=!1;if(typeof d=="string"&&F1.test(d)&&(C=d,M1))try{let _=new URL(window.location.href),T=d.startsWith("//")?new URL(_.protocol+d):new URL(d),A=Wf(T.pathname,E);T.origin===_.origin&&A!=null?d=A+T.search+T.hash:I=!0}catch{}let P=h1(d,{relative:i}),w=U1(d,{replace:o,state:l,target:u,preventScrollReset:m,relative:i,unstable_viewTransition:p});function y(_){r&&r(_),_.defaultPrevented||w(_)}return O.createElement("a",Ed({},g,{href:C||P,onClick:I||s?r:y,ref:n,target:u}))});var ag;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ag||(ag={}));var lg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lg||(lg={}));function U1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Yl(),d=Ro(),m=Xw(t,{relative:o});return O.useCallback(p=>{if(A1(p,n)){p.preventDefault();let g=r!==void 0?r:ol(d)===ol(m);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[d,u,m,r,i,n,t,s,o,l])}const B1="_pie_1qzsu_1",j1={pie:B1};function z1(){const t=()=>{window.open("https://www.instagram.com/teenagekickk/","_blank")};return x.jsx("footer",{children:x.jsx("p",{className:j1.pie,onClick:t,children:"feria de medias - Teenage Kicks ©"})})}const V1="_navegador_1ndij_1",W1={navegador:V1};function H1(){return x.jsx("header",{children:x.jsx("nav",{children:x.jsxs("div",{className:W1.navegador,children:[x.jsx(Ra,{to:"/teenagekicks/home",children:"Soy"}),x.jsx(Ra,{to:"/teenagekicks/inventario",children:"Medias"}),x.jsx(Ra,{to:"/teenagekicks/carrito",children:"Carrito"})]})})})}function $1(t){const{children:e}=t;return x.jsxs(x.Fragment,{children:[x.jsx(H1,{}),e,x.jsx(z1,{})]})}var ug={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw Qi(e)},Qi=function(t){return new Error("Firebase Database ("+t_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,m=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,E=d&63;u||(E=64,o||(g=64)),r.push(n[m],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||p==null)throw new G1;const g=s<<2|l>>4;if(r.push(g),d!==64){const E=l<<4&240|d>>2;if(r.push(E),p!==64){const C=d<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r_=function(t){const e=n_(t);return Gf.encodeByteArray(e,!0)},ll=function(t){return r_(t).replace(/\./g,"")},ul=function(t){try{return Gf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){return i_(void 0,t)}function i_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y1(n)||(t[n]=i_(t[n],e[n]));return t}function Y1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=()=>Q1().__FIREBASE_DEFAULTS__,X1=()=>{if(typeof process>"u"||typeof ug>"u")return;const t=ug.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ul(t[1]);return e&&JSON.parse(e)},Kf=()=>{try{return J1()||X1()||Z1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},s_=t=>{var e,n;return(n=(e=Kf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eb=t=>{const e=s_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o_=()=>{var t;return(t=Kf())===null||t===void 0?void 0:t.config},a_=t=>{var e;return(e=Kf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ll(JSON.stringify(n)),ll(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function l_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function u_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nb(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function c_(){return t_.NODE_ADMIN===!0}function d_(){try{return typeof indexedDB=="object"}catch{return!1}}function f_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function rb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ib,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sb(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,l,r)}}function sb(t,e){return t.replace(ob,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ob=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=po(ul(s[0])||""),n=po(ul(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ab=function(t){const e=h_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lb=function(t){const e=h_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cg(s)&&cg(o)){if(!mo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function As(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],d,m;for(let p=0;p<80;p++){p<40?p<20?(d=l^s&(o^l),m=1518500249):(d=s^o^l,m=1859775393):p<60?(d=s&o|l&(s|o),m=2400959708):(d=s^o^l,m=3395469782);const g=(i<<5|i>>>27)+d+u+m+r[p]&4294967295;u=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function cb(t,e){const n=new db(t,e);return n.subscribe.bind(n)}class db{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ac),i.error===void 0&&(i.error=ac),i.complete===void 0&&(i.complete=ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}function Qf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=1e3,mb=2,gb=4*60*60*1e3,vb=.5;function dg(t,e=pb,n=mb){const r=e*Math.pow(n,t),i=Math.round(vb*r*(Math.random()-.5)*2);return Math.min(gb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ql;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_b(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wb(t){return t===Er?void 0:t}function _b(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Cb={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Sb=ne.INFO,Ib={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},kb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ib[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=Sb,this._logHandler=kb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Tb=(t,e)=>e.some(n=>t instanceof n);let fg,hg;function bb(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pb(){return hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p_=new WeakMap,Sd=new WeakMap,m_=new WeakMap,lc=new WeakMap,Jf=new WeakMap;function xb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&p_.set(n,t)}).catch(()=>{}),Jf.set(e,t),e}function Rb(t){if(Sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sd.set(t,e)}let Id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||m_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ab(t){Id=t(Id)}function Nb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uc(this),e,...n);return m_.set(r,e.sort?e.sort():[e]),Gn(r)}:Pb().includes(t)?function(...e){return t.apply(uc(this),e),Gn(p_.get(this))}:function(...e){return Gn(t.apply(uc(this),e))}}function Ob(t){return typeof t=="function"?Nb(t):(t instanceof IDBTransaction&&Rb(t),Tb(t,bb())?new Proxy(t,Id):t)}function Gn(t){if(t instanceof IDBRequest)return xb(t);if(lc.has(t))return lc.get(t);const e=Ob(t);return e!==t&&(lc.set(t,e),Jf.set(e,t)),e}const uc=t=>Jf.get(t);function g_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Gn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Gn(o.result),u.oldVersion,u.newVersion,Gn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Lb=["get","getKey","getAll","getAllKeys","count"],Db=["put","add","delete","clear"],cc=new Map;function pg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Db.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return cc.set(e,s),s}Ab(t=>({...t,get:(e,n,r)=>pg(e,n)||t.get(e,n,r),has:(e,n)=>!!pg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",mg="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Xl("@firebase/app"),Ub="@firebase/app-compat",Bb="@firebase/analytics-compat",jb="@firebase/analytics",zb="@firebase/app-check-compat",Vb="@firebase/app-check",Wb="@firebase/auth",Hb="@firebase/auth-compat",$b="@firebase/database",qb="@firebase/database-compat",Gb="@firebase/functions",Kb="@firebase/functions-compat",Yb="@firebase/installations",Qb="@firebase/installations-compat",Jb="@firebase/messaging",Xb="@firebase/messaging-compat",Zb="@firebase/performance",eP="@firebase/performance-compat",tP="@firebase/remote-config",nP="@firebase/remote-config-compat",rP="@firebase/storage",iP="@firebase/storage-compat",sP="@firebase/firestore",oP="@firebase/vertexai-preview",aP="@firebase/firestore-compat",lP="firebase",uP="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="[DEFAULT]",cP={[kd]:"fire-core",[Ub]:"fire-core-compat",[jb]:"fire-analytics",[Bb]:"fire-analytics-compat",[Vb]:"fire-app-check",[zb]:"fire-app-check-compat",[Wb]:"fire-auth",[Hb]:"fire-auth-compat",[$b]:"fire-rtdb",[qb]:"fire-rtdb-compat",[Gb]:"fire-fn",[Kb]:"fire-fn-compat",[Yb]:"fire-iid",[Qb]:"fire-iid-compat",[Jb]:"fire-fcm",[Xb]:"fire-fcm-compat",[Zb]:"fire-perf",[eP]:"fire-perf-compat",[tP]:"fire-rc",[nP]:"fire-rc-compat",[rP]:"fire-gcs",[iP]:"fire-gcs-compat",[sP]:"fire-fst",[aP]:"fire-fst-compat",[oP]:"fire-vertex","fire-js":"fire-js",[lP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Map,dP=new Map,bd=new Map;function gg(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(bd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;bd.set(e,t);for(const n of dl.values())gg(n,t);for(const n of dP.values())gg(n,t);return!0}function Kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Gr("app","Firebase",fP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=uP;function v_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Td,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=o_()),!n)throw Kn.create("no-options");const s=dl.get(i);if(s){if(mo(n,s.options)&&mo(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const o=new Eb(i);for(const u of bd.values())o.addComponent(u);const l=new hP(n,r,o);return dl.set(i,l),l}function Xf(t=Td){const e=dl.get(t);if(!e&&t===Td&&o_())return v_();if(!e)throw Kn.create("no-app",{appName:t});return e}function kt(t,e,n){var r;let i=(r=cP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(l.join(" "));return}Xt(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="firebase-heartbeat-database",mP=1,go="firebase-heartbeat-store";let dc=null;function y_(){return dc||(dc=g_(pP,mP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),dc}async function gP(t){try{const n=(await y_()).transaction(go),r=await n.objectStore(go).get(w_(t));return await n.done,r}catch(e){if(e instanceof Zt)Mr.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function vg(t,e){try{const r=(await y_()).transaction(go,"readwrite");await r.objectStore(go).put(e,w_(t)),await r.done}catch(n){if(n instanceof Zt)Mr.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function w_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=1024,yP=30*24*60*60*1e3;class wP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=yP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yg(),{heartbeatsToSend:r,unsentEntries:i}=_P(this._heartbeatsCache.heartbeats),s=ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yg(){return new Date().toISOString().substring(0,10)}function _P(t,e=vP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d_()?f_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wg(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){Xt(new Bt("platform-logger",e=>new Mb(e),"PRIVATE")),Xt(new Bt("heartbeat",e=>new wP(e),"PRIVATE")),kt(kd,mg,t),kt(kd,mg,"esm2017"),kt("fire-js","")}CP("");function Zf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function __(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SP=__,E_=new Gr("auth","Firebase",__());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Xl("@firebase/auth");function IP(t,...e){fl.logLevel<=ne.WARN&&fl.warn(`Auth (${Xi}): ${t}`,...e)}function Aa(t,...e){fl.logLevel<=ne.ERROR&&fl.error(`Auth (${Xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw eh(t,...e)}function Qt(t,...e){return eh(t,...e)}function C_(t,e,n){const r=Object.assign(Object.assign({},SP()),{[e]:n});return new Gr("auth","Firebase",r).create(e,{appName:t.name})}function dn(t){return C_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E_.create(t,...e)}function j(t,e,...n){if(!t)throw eh(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function vn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kP(){return _g()==="http:"||_g()==="https:"}function _g(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kP()||l_()||"connection"in navigator)?navigator.onLine:!0}function bP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yf()||u_()}get(){return TP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=new Ao(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,i={}){return I_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ji(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),S_.fetch()(k_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function I_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PP),e);try{const i=new AP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw C_(t,m,d);jt(t,m)}}catch(i){if(i instanceof Zt)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function No(t,e,n,r,i={}){const s=await or(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function k_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?th(t.config,i):`${t.config.apiScheme}://${i}`}function RP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),xP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}function Eg(t){return t!==void 0&&t.enterprise!==void 0}class NP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function OP(t,e){return or(t,"GET","/v2/recaptchaConfig",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function T_(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DP(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=nh(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(fc(i.auth_time)),issuedAtTime:zs(fc(i.iat)),expirationTime:zs(fc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=ul(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cg(t){const e=nh(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&MP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vo(t,T_(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?b_(s.providerUserInfo):[],l=BP(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),m=u?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new xd(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,p)}async function UP(t){const e=$e(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function b_(t){return t.map(e=>{var{providerId:n}=e,r=Zf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e){const n=await I_(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=k_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",S_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zP(t,e){return or(t,"POST","/v2/accounts:revokeToken",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=Cg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pi;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DP(this,e)}reload(){return UP(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await vo(this,LP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,m;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(d=n.createdAt)!==null&&d!==void 0?d:void 0,y=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:_,emailVerified:T,isAnonymous:A,providerData:F,stsTokenManager:U}=n;j(_&&U,e,"internal-error");const B=Pi.fromJSON(this.name,U);j(typeof _=="string",e,"internal-error"),Tn(p,e.name),Tn(g,e.name),j(typeof T=="boolean",e,"internal-error"),j(typeof A=="boolean",e,"internal-error"),Tn(E,e.name),Tn(C,e.name),Tn(I,e.name),Tn(P,e.name),Tn(w,e.name),Tn(y,e.name);const Z=new an({uid:_,auth:e,email:g,emailVerified:T,displayName:p,isAnonymous:A,photoURL:C,phoneNumber:E,tenantId:I,stsTokenManager:B,createdAt:w,lastLoginAt:y});return F&&Array.isArray(F)&&(Z.providerData=F.map(W=>Object.assign({},W))),P&&(Z._redirectEventId=P),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?b_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Pi;l.updateFromIdToken(r);const u=new an({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Map;function ln(t){vn(t instanceof Function,"Expected a class definition");let e=Sg.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}P_.type="NONE";const Ig=P_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Na(this.userKey,i.apiKey,s),this.fullPersistenceKey=Na("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(ln(Ig),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ln(Ig);const o=Na(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(o);if(m){const p=an._fromJSON(e,m);d!==s&&(l=p),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(L_(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||R_(e))&&!e.includes("edge/"))return"Chrome";if(N_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function x_(t=He()){return/firefox\//i.test(t)}function rh(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R_(t=He()){return/crios\//i.test(t)}function A_(t=He()){return/iemobile/i.test(t)}function N_(t=He()){return/android/i.test(t)}function O_(t=He()){return/blackberry/i.test(t)}function L_(t=He()){return/webos/i.test(t)}function Zl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VP(t=He()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WP(){return nb()&&document.documentMode===10}function D_(t=He()){return Zl(t)||N_(t)||L_(t)||O_(t)||/windows phone/i.test(t)||A_(t)}function HP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t,e=[]){let n;switch(t){case"Browser":n=kg(He());break;case"Worker":n=`${kg(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e={}){return or(t,"GET","/v2/passwordPolicy",sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=6;class KP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tg(this),this.idTokenSubscription=new Tg(this),this.beforeStateQueue=new $P(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await T_(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(dn(this));const n=e?$e(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qP(this),n=new KP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return $e(t)}class Tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=cb(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QP(t){eu=t}function F_(t){return eu.loadJS(t)}function JP(){return eu.recaptchaEnterpriseScript}function XP(){return eu.gapiScript}function ZP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const e2="recaptcha-enterprise",t2="NO_RECAPTCHA";class n2{constructor(e){this.type=e2,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{OP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new NP(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Eg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(t2)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Eg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=JP();u.length!==0&&(u+=l),F_(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function bg(t,e,n,r=!1){const i=new n2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await bg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t,e){const n=Kr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mo(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function i2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function s2(t,e,n){const r=Yr(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=U_(e),{host:o,port:l}=o2(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),a2()}function U_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function o2(t){const e=U_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pg(o)}}}function Pg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function a2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function l2(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e){return No(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function d2(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends ih{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,n,"signInWithPassword",u2);case"emailLink":return c2(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,r,"signUpPassword",l2);case"emailLink":return d2(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e){return No(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2="http://localhost";class Fr extends ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:f2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p2(t){const e=Rs(As(t)).link,n=e?Rs(As(e)).deep_link_id:null,r=Rs(As(t)).deep_link_id;return(r?Rs(As(r)).link:null)||r||n||e||t}class sh{constructor(e){var n,r,i,s,o,l;const u=Rs(As(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,p=h2((i=u.mode)!==null&&i!==void 0?i:null);j(d&&m&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=m,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=p2(e);try{return new sh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sh.parseLink(n);return j(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends B_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Oo{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Oo{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Oo{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(t,e){return No(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await an._fromIdTokenResponse(e,r,i),o=xg(r);return new Ur({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xg(r);return new Ur({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pl(e,n,r,i)}}function j_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,s,e,r):s})}async function g2(t,e,n=!1){const r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(dn(r));const i="reauthenticate";try{const s=await vo(t,j_(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=nh(s.idToken);j(o,r,"internal-error");const{sub:l}=o;return j(t.uid===l,r,"user-mismatch"),Ur._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(t,e,n=!1){if(Gt(t.app))return Promise.reject(dn(t));const r="signIn",i=await j_(t,r,e),s=await Ur._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function y2(t,e){return z_(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w2(t,e,n){if(Gt(t.app))return Promise.reject(dn(t));const r=Yr(t),o=await Rd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",m2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&V_(t),u}),l=await Ur._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function _2(t,e,n){return Gt(t.app)?Promise.reject(dn(t)):y2($e(t),Zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V_(t),r})}function E2(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function C2(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function Rg(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function S2(t){return $e(t).signOut()}const ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ml,"1"),this.storage.removeItem(ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(){const t=He();return rh(t)||Zl(t)}const k2=1e3,T2=10;class H_ extends W_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=I2()&&HP(),this.fallbackToPolling=D_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);WP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,T2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},k2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}H_.type="LOCAL";const b2=H_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_ extends W_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$_.type="SESSION";const q_=$_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await P2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=oh("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(m),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function R2(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function A2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function O2(){return G_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="firebaseLocalStorageDb",L2=1,gl="firebaseLocalStorage",Y_="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function D2(){const t=indexedDB.deleteDatabase(K_);return new Lo(t).toPromise()}function Ad(){const t=indexedDB.open(K_,L2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gl,{keyPath:Y_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gl)?e(r):(r.close(),await D2(),e(await Ad()))})})}async function Ag(t,e,n){const r=nu(t,!0).put({[Y_]:e,value:n});return new Lo(r).toPromise()}async function M2(t,e){const n=nu(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function Ng(t,e){const n=nu(t,!0).delete(e);return new Lo(n).toPromise()}const F2=800,U2=3;class Q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>U2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(O2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A2(),!this.activeServiceWorker)return;this.sender=new x2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ad();return await Ag(e,ml,"1"),await Ng(e,ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ng(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nu(i,!1).getAll();return new Lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Q_.type="LOCAL";const B2=Q_;new Ao(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t,e){return e?ln(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z2(t){return z_(t.auth,new ah(t),t.bypassAuthState)}function V2(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),v2(n,new ah(t),t.bypassAuthState)}async function W2(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),g2(n,new ah(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z2;case"linkViaPopup":case"linkViaRedirect":return W2;case"reauthViaPopup":case"reauthViaRedirect":return V2;default:jt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=new Ao(2e3,1e4);class _i extends J_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H2.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="pendingRedirect",Oa=new Map;class q2 extends J_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await G2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G2(t,e){const n=Q2(e),r=Y2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function K2(t,e){Oa.set(t._key(),e)}function Y2(t){return ln(t._redirectPersistence)}function Q2(t){return Na($2,t.config.apiKey,t.name)}async function J2(t,e,n=!1){if(Gt(t.app))return Promise.reject(dn(t));const r=Yr(t),i=j2(r,e),o=await new q2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=10*60*1e3;class Z2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ex(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!X_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Og(e))}saveEventToCache(e){this.cachedEventUids.add(Og(e)),this.lastProcessedEventTime=Date.now()}}function Og(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function X_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ex(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return X_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rx=/^https?/;async function ix(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tx(t);for(const n of e)try{if(sx(n))return}catch{}jt(t,"unauthorized-domain")}function sx(t){const e=Pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rx.test(n))return!1;if(nx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=new Ao(3e4,6e4);function Lg(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ax(t){return new Promise((e,n)=>{var r,i,s;function o(){Lg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lg(),n(Qt(t,"network-request-failed"))},timeout:ox.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const l=ZP("iframefcb");return Jt()[l]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},F_(`${XP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw La=null,e})}let La=null;function lx(t){return La=La||ax(t),La}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new Ao(5e3,15e3),cx="__/auth/iframe",dx="emulator/auth/iframe",fx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function px(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?th(e,dx):`https://${t.config.authDomain}/${cx}`,r={apiKey:e.apiKey,appName:t.name,v:Xi},i=hx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ji(r).slice(1)}`}async function mx(t){const e=await lx(t),n=Jt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:px(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),l=Jt().setTimeout(()=>{s(o)},ux.get());function u(){Jt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vx=500,yx=600,wx="_blank",_x="http://localhost";class Dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ex(t,e,n,r=vx,i=yx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},gx),{width:r.toString(),height:i.toString(),top:s,left:o}),d=He().toLowerCase();n&&(l=R_(d)?wx:n),x_(d)&&(e=e||_x,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(VP(d)&&l!=="_self")return Cx(e||"",l),new Dg(null);const p=window.open(e||"",l,m);j(p,t,"popup-blocked");try{p.focus()}catch{}return new Dg(p)}function Cx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="__/auth/handler",Ix="emulator/auth/handler",kx=encodeURIComponent("fac");async function Mg(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xi,eventId:i};if(e instanceof B_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof Oo){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),d=u?`#${kx}=${encodeURIComponent(u)}`:"";return`${Tx(t)}?${Ji(l).slice(1)}${d}`}function Tx({config:t}){return t.emulator?th(t,Ix):`https://${t.authDomain}/${Sx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="webStorageSupport";class bx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q_,this._completeRedirectFn=J2,this._overrideRedirectResult=K2}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mg(e,n,r,Pd(),i);return Ex(e,o,oh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Mg(e,n,r,Pd(),i);return R2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mx(e),r=new Z2(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hc,{type:hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hc];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ix(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D_()||rh()||Zl()}}const Px=bx;var Fg="@firebase/auth",Ug="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ax(t){Xt(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M_(t)},d=new YP(r,i,s,u);return i2(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xt(new Bt("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new xx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Fg,Ug,Rx(t)),kt(Fg,Ug,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=5*60,Ox=a_("authIdTokenMaxAge")||Nx;let Bg=null;const Lx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ox)return;const i=n==null?void 0:n.token;Bg!==i&&(Bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ru(t=Xf()){const e=Kr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=r2(t,{popupRedirectResolver:Px,persistence:[B2,b2,q_]}),r=a_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Lx(s.toString());C2(n,o,()=>o(n.currentUser)),E2(n,l=>o(l))}}const i=s_("auth");return i&&s2(n,`http://${i}`),n}function Dx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Dx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ax("Browser");const Mx="https://javit1986.github.io/teenagekicks/assets/rayo-CqY0wgQf.png",Fx="https://javit1986.github.io/teenagekicks/assets/salir-C5zKFcXo.png",Z_=O.createContext();function Ux({children:t}){const e={medias:[],medias_elegidas:[]},[n,r]=O.useState(!1),i=()=>{r(!0)},s=()=>{S2(l).then(()=>{r(!1)}).catch(u=>{})},o=()=>{console.log("seguro que se quiere ir?"),s()},l=ru();return Rg(l,u=>{u?(u.uid,i()):s()}),x.jsx(Z_.Provider,{value:{estadoinicial:e,sesion:n,login:i,logout:s,rayo:Mx,salirPNG:Fx,handleCerrarSesion:o,onAuthStateChanged:Rg},children:t})}const iu=()=>O.useContext(Z_);var e0={exports:{}};/*!
* sweetalert2 v11.12.0
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(In,function(){function n(h,a){(a==null||a>h.length)&&(a=h.length);for(var c=0,f=Array(a);c<a;c++)f[c]=h[c];return f}function r(h){if(Array.isArray(h))return h}function i(h){if(Array.isArray(h))return n(h)}function s(h,a,c){if(typeof h=="function"?h===a:h.has(a))return arguments.length<3?a:c;throw new TypeError("Private element is not present on this object")}function o(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function l(h,a,c){return a=y(a),Z(h,T()?Reflect.construct(a,c||[],y(h).constructor):a.apply(h,c))}function u(h,a){if(a.has(h))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(h,a){if(!(h instanceof a))throw new TypeError("Cannot call a class as a function")}function m(h,a){return h.get(s(h,a))}function p(h,a,c){u(h,a),a.set(h,c)}function g(h,a,c){return h.set(s(h,a),c),c}function E(h,a,c){if(T())return Reflect.construct.apply(null,arguments);var f=[null];f.push.apply(f,a);var v=new(h.bind.apply(h,f));return v}function C(h,a){for(var c=0;c<a.length;c++){var f=a[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(h,mu(f.key),f)}}function I(h,a,c){return a&&C(h.prototype,a),Object.defineProperty(h,"prototype",{writable:!1}),h}function P(h,a){var c=typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(!c){if(Array.isArray(h)||(c=cr(h))||a){c&&(h=c);var f=0,v=function(){};return{s:v,n:function(){return f>=h.length?{done:!0}:{done:!1,value:h[f++]}},e:function(V){throw V},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var k,L=!0,H=!1;return{s:function(){c=c.call(h)},n:function(){var V=c.next();return L=V.done,V},e:function(V){H=!0,k=V},f:function(){try{L||c.return==null||c.return()}finally{if(H)throw k}}}}function w(){return w=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(h,a,c){var f=lr(h,a);if(f){var v=Object.getOwnPropertyDescriptor(f,a);return v.get?v.get.call(arguments.length<3?h:c):v.value}},w.apply(null,arguments)}function y(h){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},y(h)}function _(h,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(a&&a.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),Object.defineProperty(h,"prototype",{writable:!1}),a&&W(h,a)}function T(){try{var h=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(T=function(){return!!h})()}function A(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function F(h,a){var c=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(c!=null){var f,v,k,L,H=[],V=!0,me=!1;try{if(k=(c=c.call(h)).next,a!==0)for(;!(V=(f=k.call(c)).done)&&(H.push(f.value),H.length!==a);V=!0);}catch(ds){me=!0,v=ds}finally{try{if(!V&&c.return!=null&&(L=c.return(),Object(L)!==L))return}finally{if(me)throw v}}return H}}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(h,a){if(a&&(typeof a=="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(h)}function W(h,a){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},W(h,a)}function ut(h,a){return r(h)||F(h,a)||cr(h,a)||U()}function lr(h,a){for(;!{}.hasOwnProperty.call(h,a)&&(h=y(h))!==null;);return h}function ur(h){return i(h)||A(h)||cr(h)||B()}function jo(h,a){if(typeof h!="object"||!h)return h;var c=h[Symbol.toPrimitive];if(c!==void 0){var f=c.call(h,a);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}function mu(h){var a=jo(h,"string");return typeof a=="symbol"?a:a+""}function ye(h){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ye(h)}function cr(h,a){if(h){if(typeof h=="string")return n(h,a);var c={}.toString.call(h).slice(8,-1);return c==="Object"&&h.constructor&&(c=h.constructor.name),c==="Map"||c==="Set"?Array.from(h):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?n(h,a):void 0}}var D=100,N={},$=function(){N.previousActiveElement instanceof HTMLElement?(N.previousActiveElement.focus(),N.previousActiveElement=null):document.body&&document.body.focus()},de=function(a){return new Promise(function(c){if(!a)return c();var f=window.scrollX,v=window.scrollY;N.restoreFocusTimeout=setTimeout(function(){$(),c()},D),window.scrollTo(f,v)})},we="swal2-",Jr=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],S=Jr.reduce(function(h,a){return h[a]=we+a,h},{}),rs=["success","warning","info","question","error"],wt=rs.reduce(function(h,a){return h[a]=we+a,h},{}),dr="SweetAlert2:",gu=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},Qe=function(a){console.warn("".concat(dr," ").concat(ye(a)==="object"?a.join(" "):a))},fr=function(a){console.error("".concat(dr," ").concat(a))},Gh=[],ME=function(a){Gh.includes(a)||(Gh.push(a),Qe(a))},Kh=function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ME('"'.concat(a,'" is deprecated and will be removed in the next major release.').concat(c?' Use "'.concat(c,'" instead.'):""))},zo=function(a){return typeof a=="function"?a():a},vu=function(a){return a&&typeof a.toPromise=="function"},is=function(a){return vu(a)?a.toPromise():Promise.resolve(a)},yu=function(a){return a&&Promise.resolve(a)===a},Je=function(){return document.body.querySelector(".".concat(S.container))},ss=function(a){var c=Je();return c?c.querySelector(a):null},ct=function(a){return ss(".".concat(a))},ee=function(){return ct(S.popup)},os=function(){return ct(S.icon)},FE=function(){return ct(S["icon-content"])},Yh=function(){return ct(S.title)},wu=function(){return ct(S["html-container"])},Qh=function(){return ct(S.image)},_u=function(){return ct(S["progress-steps"])},Vo=function(){return ct(S["validation-message"])},zt=function(){return ss(".".concat(S.actions," .").concat(S.confirm))},Xr=function(){return ss(".".concat(S.actions," .").concat(S.cancel))},hr=function(){return ss(".".concat(S.actions," .").concat(S.deny))},UE=function(){return ct(S["input-label"])},Zr=function(){return ss(".".concat(S.loader))},as=function(){return ct(S.actions)},Jh=function(){return ct(S.footer)},Wo=function(){return ct(S["timer-progress-bar"])},Eu=function(){return ct(S.close)},BE=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Cu=function(){var a=ee();if(!a)return[];var c=a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),f=Array.from(c).sort(function(L,H){var V=parseInt(L.getAttribute("tabindex")||"0"),me=parseInt(H.getAttribute("tabindex")||"0");return V>me?1:V<me?-1:0}),v=a.querySelectorAll(BE),k=Array.from(v).filter(function(L){return L.getAttribute("tabindex")!=="-1"});return ur(new Set(f.concat(k))).filter(function(L){return Xe(L)})},Su=function(){return en(document.body,S.shown)&&!en(document.body,S["toast-shown"])&&!en(document.body,S["no-backdrop"])},Ho=function(){var a=ee();return a?en(a,S.toast):!1},jE=function(){var a=ee();return a?a.hasAttribute("data-loading"):!1},dt=function(a,c){if(a.textContent="",c){var f=new DOMParser,v=f.parseFromString(c,"text/html"),k=v.querySelector("head");k&&Array.from(k.childNodes).forEach(function(H){a.appendChild(H)});var L=v.querySelector("body");L&&Array.from(L.childNodes).forEach(function(H){H instanceof HTMLVideoElement||H instanceof HTMLAudioElement?a.appendChild(H.cloneNode(!0)):a.appendChild(H)})}},en=function(a,c){if(!c)return!1;for(var f=c.split(/\s+/),v=0;v<f.length;v++)if(!a.classList.contains(f[v]))return!1;return!0},zE=function(a,c){Array.from(a.classList).forEach(function(f){!Object.values(S).includes(f)&&!Object.values(wt).includes(f)&&!Object.values(c.showClass||{}).includes(f)&&a.classList.remove(f)})},_t=function(a,c,f){if(zE(a,c),c.customClass&&c.customClass[f]){if(typeof c.customClass[f]!="string"&&!c.customClass[f].forEach){Qe("Invalid type of customClass.".concat(f,'! Expected string or iterable object, got "').concat(ye(c.customClass[f]),'"'));return}Q(a,c.customClass[f])}},$o=function(a,c){if(!c)return null;switch(c){case"select":case"textarea":case"file":return a.querySelector(".".concat(S.popup," > .").concat(S[c]));case"checkbox":return a.querySelector(".".concat(S.popup," > .").concat(S.checkbox," input"));case"radio":return a.querySelector(".".concat(S.popup," > .").concat(S.radio," input:checked"))||a.querySelector(".".concat(S.popup," > .").concat(S.radio," input:first-child"));case"range":return a.querySelector(".".concat(S.popup," > .").concat(S.range," input"));default:return a.querySelector(".".concat(S.popup," > .").concat(S.input))}},Xh=function(a){if(a.focus(),a.type!=="file"){var c=a.value;a.value="",a.value=c}},Zh=function(a,c,f){!a||!c||(typeof c=="string"&&(c=c.split(/\s+/).filter(Boolean)),c.forEach(function(v){Array.isArray(a)?a.forEach(function(k){f?k.classList.add(v):k.classList.remove(v)}):f?a.classList.add(v):a.classList.remove(v)}))},Q=function(a,c){Zh(a,c,!0)},Vt=function(a,c){Zh(a,c,!1)},Cn=function(a,c){for(var f=Array.from(a.children),v=0;v<f.length;v++){var k=f[v];if(k instanceof HTMLElement&&en(k,c))return k}},pr=function(a,c,f){f==="".concat(parseInt(f))&&(f=parseInt(f)),f||parseInt(f)===0?a.style.setProperty(c,typeof f=="number"?"".concat(f,"px"):f):a.style.removeProperty(c)},Pe=function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";a&&(a.style.display=c)},Ue=function(a){a&&(a.style.display="none")},Iu=function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";a&&new MutationObserver(function(){ls(a,a.innerHTML,c)}).observe(a,{childList:!0,subtree:!0})},ep=function(a,c,f,v){var k=a.querySelector(c);k&&k.style.setProperty(f,v)},ls=function(a,c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";c?Pe(a,f):Ue(a)},Xe=function(a){return!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length))},VE=function(){return!Xe(zt())&&!Xe(hr())&&!Xe(Xr())},tp=function(a){return a.scrollHeight>a.clientHeight},np=function(a){var c=window.getComputedStyle(a),f=parseFloat(c.getPropertyValue("animation-duration")||"0"),v=parseFloat(c.getPropertyValue("transition-duration")||"0");return f>0||v>0},ku=function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=Wo();f&&Xe(f)&&(c&&(f.style.transition="none",f.style.width="100%"),setTimeout(function(){f.style.transition="width ".concat(a/1e3,"s linear"),f.style.width="0%"},10))},WE=function(){var a=Wo();if(a){var c=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";var f=parseInt(window.getComputedStyle(a).width),v=c/f*100;a.style.width="".concat(v,"%")}},rp=function(){return typeof window>"u"||typeof document>"u"},HE=`
 <div aria-labelledby="`.concat(S.title,'" aria-describedby="').concat(S["html-container"],'" class="').concat(S.popup,`" tabindex="-1">
   <button type="button" class="`).concat(S.close,`"></button>
   <ul class="`).concat(S["progress-steps"],`"></ul>
   <div class="`).concat(S.icon,`"></div>
   <img class="`).concat(S.image,`" />
   <h2 class="`).concat(S.title,'" id="').concat(S.title,`"></h2>
   <div class="`).concat(S["html-container"],'" id="').concat(S["html-container"],`"></div>
   <input class="`).concat(S.input,'" id="').concat(S.input,`" />
   <input type="file" class="`).concat(S.file,`" />
   <div class="`).concat(S.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(S.select,'" id="').concat(S.select,`"></select>
   <div class="`).concat(S.radio,`"></div>
   <label class="`).concat(S.checkbox,`">
     <input type="checkbox" id="`).concat(S.checkbox,`" />
     <span class="`).concat(S.label,`"></span>
   </label>
   <textarea class="`).concat(S.textarea,'" id="').concat(S.textarea,`"></textarea>
   <div class="`).concat(S["validation-message"],'" id="').concat(S["validation-message"],`"></div>
   <div class="`).concat(S.actions,`">
     <div class="`).concat(S.loader,`"></div>
     <button type="button" class="`).concat(S.confirm,`"></button>
     <button type="button" class="`).concat(S.deny,`"></button>
     <button type="button" class="`).concat(S.cancel,`"></button>
   </div>
   <div class="`).concat(S.footer,`"></div>
   <div class="`).concat(S["timer-progress-bar-container"],`">
     <div class="`).concat(S["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),$E=function(){var a=Je();return a?(a.remove(),Vt([document.documentElement,document.body],[S["no-backdrop"],S["toast-shown"],S["has-column"]]),!0):!1},mr=function(){N.currentInstance.resetValidationMessage()},qE=function(){var a=ee(),c=Cn(a,S.input),f=Cn(a,S.file),v=a.querySelector(".".concat(S.range," input")),k=a.querySelector(".".concat(S.range," output")),L=Cn(a,S.select),H=a.querySelector(".".concat(S.checkbox," input")),V=Cn(a,S.textarea);c.oninput=mr,f.onchange=mr,L.onchange=mr,H.onchange=mr,V.oninput=mr,v.oninput=function(){mr(),k.value=v.value},v.onchange=function(){mr(),k.value=v.value}},GE=function(a){return typeof a=="string"?document.querySelector(a):a},KE=function(a){var c=ee();c.setAttribute("role",a.toast?"alert":"dialog"),c.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||c.setAttribute("aria-modal","true")},YE=function(a){window.getComputedStyle(a).direction==="rtl"&&Q(Je(),S.rtl)},QE=function(a){var c=$E();if(rp()){fr("SweetAlert2 requires document to initialize");return}var f=document.createElement("div");f.className=S.container,c&&Q(f,S["no-transition"]),dt(f,HE);var v=GE(a.target);v.appendChild(f),KE(a),YE(v),qE()},Tu=function(a,c){a instanceof HTMLElement?c.appendChild(a):ye(a)==="object"?JE(a,c):a&&dt(c,a)},JE=function(a,c){a.jquery?XE(c,a):dt(c,a.toString())},XE=function(a,c){if(a.textContent="",0 in c)for(var f=0;f in c;f++)a.appendChild(c[f].cloneNode(!0));else a.appendChild(c.cloneNode(!0))},gr=function(){if(rp())return!1;var h=document.createElement("div");return typeof h.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof h.style.animation<"u"?"animationend":!1}(),ZE=function(a,c){var f=as(),v=Zr();!f||!v||(!c.showConfirmButton&&!c.showDenyButton&&!c.showCancelButton?Ue(f):Pe(f),_t(f,c,"actions"),eC(f,v,c),dt(v,c.loaderHtml||""),_t(v,c,"loader"))};function eC(h,a,c){var f=zt(),v=hr(),k=Xr();!f||!v||!k||(bu(f,"confirm",c),bu(v,"deny",c),bu(k,"cancel",c),tC(f,v,k,c),c.reverseButtons&&(c.toast?(h.insertBefore(k,f),h.insertBefore(v,f)):(h.insertBefore(k,a),h.insertBefore(v,a),h.insertBefore(f,a))))}function tC(h,a,c,f){if(!f.buttonsStyling){Vt([h,a,c],S.styled);return}Q([h,a,c],S.styled),f.confirmButtonColor&&(h.style.backgroundColor=f.confirmButtonColor,Q(h,S["default-outline"])),f.denyButtonColor&&(a.style.backgroundColor=f.denyButtonColor,Q(a,S["default-outline"])),f.cancelButtonColor&&(c.style.backgroundColor=f.cancelButtonColor,Q(c,S["default-outline"]))}function bu(h,a,c){var f=gu(a);ls(h,c["show".concat(f,"Button")],"inline-block"),dt(h,c["".concat(a,"ButtonText")]||""),h.setAttribute("aria-label",c["".concat(a,"ButtonAriaLabel")]||""),h.className=S[a],_t(h,c,"".concat(a,"Button"))}var nC=function(a,c){var f=Eu();f&&(dt(f,c.closeButtonHtml||""),_t(f,c,"closeButton"),ls(f,c.showCloseButton),f.setAttribute("aria-label",c.closeButtonAriaLabel||""))},rC=function(a,c){var f=Je();f&&(iC(f,c.backdrop),sC(f,c.position),oC(f,c.grow),_t(f,c,"container"))};function iC(h,a){typeof a=="string"?h.style.background=a:a||Q([document.documentElement,document.body],S["no-backdrop"])}function sC(h,a){a&&(a in S?Q(h,S[a]):(Qe('The "position" parameter is not valid, defaulting to "center"'),Q(h,S.center)))}function oC(h,a){a&&Q(h,S["grow-".concat(a)])}var ie={innerParams:new WeakMap,domCache:new WeakMap},aC=["input","file","range","select","radio","checkbox","textarea"],lC=function(a,c){var f=ee();if(f){var v=ie.innerParams.get(a),k=!v||c.input!==v.input;aC.forEach(function(L){var H=Cn(f,S[L]);H&&(dC(L,c.inputAttributes),H.className=S[L],k&&Ue(H))}),c.input&&(k&&uC(c),fC(c))}},uC=function(a){if(a.input){if(!_e[a.input]){fr("Unexpected type of input! Expected ".concat(Object.keys(_e).join(" | "),', got "').concat(a.input,'"'));return}var c=ip(a.input),f=_e[a.input](c,a);Pe(c),a.inputAutoFocus&&setTimeout(function(){Xh(f)})}},cC=function(a){for(var c=0;c<a.attributes.length;c++){var f=a.attributes[c].name;["id","type","value","style"].includes(f)||a.removeAttribute(f)}},dC=function(a,c){var f=$o(ee(),a);if(f){cC(f);for(var v in c)f.setAttribute(v,c[v])}},fC=function(a){var c=ip(a.input);ye(a.customClass)==="object"&&Q(c,a.customClass.input)},Pu=function(a,c){(!a.placeholder||c.inputPlaceholder)&&(a.placeholder=c.inputPlaceholder)},us=function(a,c,f){if(f.inputLabel){var v=document.createElement("label"),k=S["input-label"];v.setAttribute("for",a.id),v.className=k,ye(f.customClass)==="object"&&Q(v,f.customClass.inputLabel),v.innerText=f.inputLabel,c.insertAdjacentElement("beforebegin",v)}},ip=function(a){return Cn(ee(),S[a]||S.input)},qo=function(a,c){["string","number"].includes(ye(c))?a.value="".concat(c):yu(c)||Qe('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(ye(c),'"'))},_e={};_e.text=_e.email=_e.password=_e.number=_e.tel=_e.url=_e.search=_e.date=_e["datetime-local"]=_e.time=_e.week=_e.month=function(h,a){return qo(h,a.inputValue),us(h,h,a),Pu(h,a),h.type=a.input,h},_e.file=function(h,a){return us(h,h,a),Pu(h,a),h},_e.range=function(h,a){var c=h.querySelector("input"),f=h.querySelector("output");return qo(c,a.inputValue),c.type=a.input,qo(f,a.inputValue),us(c,h,a),h},_e.select=function(h,a){if(h.textContent="",a.inputPlaceholder){var c=document.createElement("option");dt(c,a.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,h.appendChild(c)}return us(h,h,a),h},_e.radio=function(h){return h.textContent="",h},_e.checkbox=function(h,a){var c=$o(ee(),"checkbox");c.value="1",c.checked=!!a.inputValue;var f=h.querySelector("span");return dt(f,a.inputPlaceholder),c},_e.textarea=function(h,a){qo(h,a.inputValue),Pu(h,a),us(h,h,a);var c=function(v){return parseInt(window.getComputedStyle(v).marginLeft)+parseInt(window.getComputedStyle(v).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var f=parseInt(window.getComputedStyle(ee()).width),v=function(){if(document.body.contains(h)){var L=h.offsetWidth+c(h);L>f?ee().style.width="".concat(L,"px"):pr(ee(),"width",a.width)}};new MutationObserver(v).observe(h,{attributes:!0,attributeFilter:["style"]})}}),h};var hC=function(a,c){var f=wu();f&&(Iu(f),_t(f,c,"htmlContainer"),c.html?(Tu(c.html,f),Pe(f,"block")):c.text?(f.textContent=c.text,Pe(f,"block")):Ue(f),lC(a,c))},pC=function(a,c){var f=Jh();f&&(Iu(f),ls(f,c.footer,"block"),c.footer&&Tu(c.footer,f),_t(f,c,"footer"))},mC=function(a,c){var f=ie.innerParams.get(a),v=os();if(v){if(f&&c.icon===f.icon){op(v,c),sp(v,c);return}if(!c.icon&&!c.iconHtml){Ue(v);return}if(c.icon&&Object.keys(wt).indexOf(c.icon)===-1){fr('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(c.icon,'"')),Ue(v);return}Pe(v),op(v,c),sp(v,c),Q(v,c.showClass&&c.showClass.icon)}},sp=function(a,c){for(var f=0,v=Object.entries(wt);f<v.length;f++){var k=ut(v[f],2),L=k[0],H=k[1];c.icon!==L&&Vt(a,H)}Q(a,c.icon&&wt[c.icon]),wC(a,c),gC(),_t(a,c,"icon")},gC=function(){var a=ee();if(a)for(var c=window.getComputedStyle(a).getPropertyValue("background-color"),f=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),v=0;v<f.length;v++)f[v].style.backgroundColor=c},vC=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,yC=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,op=function(a,c){if(!(!c.icon&&!c.iconHtml)){var f=a.innerHTML,v="";if(c.iconHtml)v=ap(c.iconHtml);else if(c.icon==="success")v=vC,f=f.replace(/ style=".*?"/g,"");else if(c.icon==="error")v=yC;else if(c.icon){var k={question:"?",warning:"!",info:"i"};v=ap(k[c.icon])}f.trim()!==v.trim()&&dt(a,v)}},wC=function(a,c){if(c.iconColor){a.style.color=c.iconColor,a.style.borderColor=c.iconColor;for(var f=0,v=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];f<v.length;f++){var k=v[f];ep(a,k,"background-color",c.iconColor)}ep(a,".swal2-success-ring","border-color",c.iconColor)}},ap=function(a){return'<div class="'.concat(S["icon-content"],'">').concat(a,"</div>")},_C=function(a,c){var f=Qh();if(f){if(!c.imageUrl){Ue(f);return}Pe(f,""),f.setAttribute("src",c.imageUrl),f.setAttribute("alt",c.imageAlt||""),pr(f,"width",c.imageWidth),pr(f,"height",c.imageHeight),f.className=S.image,_t(f,c,"image")}},EC=function(a,c){var f=Je(),v=ee();if(!(!f||!v)){if(c.toast){pr(f,"width",c.width),v.style.width="100%";var k=Zr();k&&v.insertBefore(k,os())}else pr(v,"width",c.width);pr(v,"padding",c.padding),c.color&&(v.style.color=c.color),c.background&&(v.style.background=c.background),Ue(Vo()),CC(v,c)}},CC=function(a,c){var f=c.showClass||{};a.className="".concat(S.popup," ").concat(Xe(a)?f.popup:""),c.toast?(Q([document.documentElement,document.body],S["toast-shown"]),Q(a,S.toast)):Q(a,S.modal),_t(a,c,"popup"),typeof c.customClass=="string"&&Q(a,c.customClass),c.icon&&Q(a,S["icon-".concat(c.icon)])},SC=function(a,c){var f=_u();if(f){var v=c.progressSteps,k=c.currentProgressStep;if(!v||v.length===0||k===void 0){Ue(f);return}Pe(f),f.textContent="",k>=v.length&&Qe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),v.forEach(function(L,H){var V=IC(L);if(f.appendChild(V),H===k&&Q(V,S["active-progress-step"]),H!==v.length-1){var me=kC(c);f.appendChild(me)}})}},IC=function(a){var c=document.createElement("li");return Q(c,S["progress-step"]),dt(c,a),c},kC=function(a){var c=document.createElement("li");return Q(c,S["progress-step-line"]),a.progressStepsDistance&&pr(c,"width",a.progressStepsDistance),c},TC=function(a,c){var f=Yh();f&&(Iu(f),ls(f,c.title||c.titleText,"block"),c.title&&Tu(c.title,f),c.titleText&&(f.innerText=c.titleText),_t(f,c,"title"))},lp=function(a,c){EC(a,c),rC(a,c),SC(a,c),mC(a,c),_C(a,c),TC(a,c),nC(a,c),hC(a,c),ZE(a,c),pC(a,c);var f=ee();typeof c.didRender=="function"&&f&&c.didRender(f)},bC=function(){return Xe(ee())},up=function(){var a;return(a=zt())===null||a===void 0?void 0:a.click()},PC=function(){var a;return(a=hr())===null||a===void 0?void 0:a.click()},xC=function(){var a;return(a=Xr())===null||a===void 0?void 0:a.click()},ei=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),cp=function(a){a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},RC=function(a,c,f){cp(a),c.toast||(a.keydownHandler=function(v){return NC(c,v,f)},a.keydownTarget=c.keydownListenerCapture?window:ee(),a.keydownListenerCapture=c.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},xu=function(a,c){var f,v=Cu();if(v.length){a=a+c,a===v.length?a=0:a===-1&&(a=v.length-1),v[a].focus();return}(f=ee())===null||f===void 0||f.focus()},dp=["ArrowRight","ArrowDown"],AC=["ArrowLeft","ArrowUp"],NC=function(a,c,f){a&&(c.isComposing||c.keyCode===229||(a.stopKeydownPropagation&&c.stopPropagation(),c.key==="Enter"?OC(c,a):c.key==="Tab"?LC(c):[].concat(dp,AC).includes(c.key)?DC(c.key):c.key==="Escape"&&MC(c,a,f)))},OC=function(a,c){if(zo(c.allowEnterKey)){var f=$o(ee(),c.input);if(a.target&&f&&a.target instanceof HTMLElement&&a.target.outerHTML===f.outerHTML){if(["textarea","file"].includes(c.input))return;up(),a.preventDefault()}}},LC=function(a){for(var c=a.target,f=Cu(),v=-1,k=0;k<f.length;k++)if(c===f[k]){v=k;break}a.shiftKey?xu(v,-1):xu(v,1),a.stopPropagation(),a.preventDefault()},DC=function(a){var c=as(),f=zt(),v=hr(),k=Xr();if(!(!c||!f||!v||!k)){var L=[f,v,k];if(!(document.activeElement instanceof HTMLElement&&!L.includes(document.activeElement))){var H=dp.includes(a)?"nextElementSibling":"previousElementSibling",V=document.activeElement;if(V){for(var me=0;me<c.children.length;me++){if(V=V[H],!V)return;if(V instanceof HTMLButtonElement&&Xe(V))break}V instanceof HTMLButtonElement&&V.focus()}}}},MC=function(a,c,f){zo(c.allowEscapeKey)&&(a.preventDefault(),f(ei.esc))},ti={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},FC=function(){var a=Je(),c=Array.from(document.body.children);c.forEach(function(f){f.contains(a)||(f.hasAttribute("aria-hidden")&&f.setAttribute("data-previous-aria-hidden",f.getAttribute("aria-hidden")||""),f.setAttribute("aria-hidden","true"))})},fp=function(){var a=Array.from(document.body.children);a.forEach(function(c){c.hasAttribute("data-previous-aria-hidden")?(c.setAttribute("aria-hidden",c.getAttribute("data-previous-aria-hidden")||""),c.removeAttribute("data-previous-aria-hidden")):c.removeAttribute("aria-hidden")})},hp=typeof window<"u"&&!!window.GestureEvent,UC=function(){if(hp&&!en(document.body,S.iosfix)){var a=document.body.scrollTop;document.body.style.top="".concat(a*-1,"px"),Q(document.body,S.iosfix),BC()}},BC=function(){var a=Je();if(a){var c;a.ontouchstart=function(f){c=jC(f)},a.ontouchmove=function(f){c&&(f.preventDefault(),f.stopPropagation())}}},jC=function(a){var c=a.target,f=Je(),v=wu();return!f||!v||zC(a)||VC(a)?!1:c===f||!tp(f)&&c instanceof HTMLElement&&c.tagName!=="INPUT"&&c.tagName!=="TEXTAREA"&&!(tp(v)&&v.contains(c))},zC=function(a){return a.touches&&a.touches.length&&a.touches[0].touchType==="stylus"},VC=function(a){return a.touches&&a.touches.length>1},WC=function(){if(en(document.body,S.iosfix)){var a=parseInt(document.body.style.top,10);Vt(document.body,S.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},HC=function(){var a=document.createElement("div");a.className=S["scrollbar-measure"],document.body.appendChild(a);var c=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),c},ni=null,$C=function(a){ni===null&&(document.body.scrollHeight>window.innerHeight||a==="scroll")&&(ni=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(ni+HC(),"px"))},qC=function(){ni!==null&&(document.body.style.paddingRight="".concat(ni,"px"),ni=null)};function pp(h,a,c,f){Ho()?gp(h,f):(de(c).then(function(){return gp(h,f)}),cp(N)),hp?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),Su()&&(qC(),WC(),fp()),GC()}function GC(){Vt([document.documentElement,document.body],[S.shown,S["height-auto"],S["no-backdrop"],S["toast-shown"]])}function Sn(h){h=YC(h);var a=ti.swalPromiseResolve.get(this),c=KC(this);this.isAwaitingPromise?h.isDismissed||(cs(this),a(h)):c&&a(h)}var KC=function(a){var c=ee();if(!c)return!1;var f=ie.innerParams.get(a);if(!f||en(c,f.hideClass.popup))return!1;Vt(c,f.showClass.popup),Q(c,f.hideClass.popup);var v=Je();return Vt(v,f.showClass.backdrop),Q(v,f.hideClass.backdrop),QC(a,c,f),!0};function mp(h){var a=ti.swalPromiseReject.get(this);cs(this),a&&a(h)}var cs=function(a){a.isAwaitingPromise&&(delete a.isAwaitingPromise,ie.innerParams.get(a)||a._destroy())},YC=function(a){return typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a)},QC=function(a,c,f){var v=Je(),k=gr&&np(c);typeof f.willClose=="function"&&f.willClose(c),k?JC(a,c,v,f.returnFocus,f.didClose):pp(a,v,f.returnFocus,f.didClose)},JC=function(a,c,f,v,k){gr&&(N.swalCloseEventFinishedCallback=pp.bind(null,a,f,v,k),c.addEventListener(gr,function(L){L.target===c&&(N.swalCloseEventFinishedCallback(),delete N.swalCloseEventFinishedCallback)}))},gp=function(a,c){setTimeout(function(){typeof c=="function"&&c.bind(a.params)(),a._destroy&&a._destroy()})},ri=function(a){var c=ee();if(c||new Jo,c=ee(),!!c){var f=Zr();Ho()?Ue(os()):XC(c,a),Pe(f),c.setAttribute("data-loading","true"),c.setAttribute("aria-busy","true"),c.focus()}},XC=function(a,c){var f=as(),v=Zr();!f||!v||(!c&&Xe(zt())&&(c=zt()),Pe(f),c&&(Ue(c),v.setAttribute("data-button-to-replace",c.className),f.insertBefore(v,c)),Q([a,f],S.loading))},ZC=function(a,c){c.input==="select"||c.input==="radio"?iS(a,c):["text","email","number","tel","textarea"].some(function(f){return f===c.input})&&(vu(c.inputValue)||yu(c.inputValue))&&(ri(zt()),sS(a,c))},eS=function(a,c){var f=a.getInput();if(!f)return null;switch(c.input){case"checkbox":return tS(f);case"radio":return nS(f);case"file":return rS(f);default:return c.inputAutoTrim?f.value.trim():f.value}},tS=function(a){return a.checked?1:0},nS=function(a){return a.checked?a.value:null},rS=function(a){return a.files&&a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null},iS=function(a,c){var f=ee();if(f){var v=function(L){c.input==="select"?oS(f,vp(L),c):c.input==="radio"&&aS(f,vp(L),c)};vu(c.inputOptions)||yu(c.inputOptions)?(ri(zt()),is(c.inputOptions).then(function(k){a.hideLoading(),v(k)})):ye(c.inputOptions)==="object"?v(c.inputOptions):fr("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(ye(c.inputOptions)))}},sS=function(a,c){var f=a.getInput();f&&(Ue(f),is(c.inputValue).then(function(v){f.value=c.input==="number"?"".concat(parseFloat(v)||0):"".concat(v),Pe(f),f.focus(),a.hideLoading()}).catch(function(v){fr("Error in inputValue promise: ".concat(v)),f.value="",Pe(f),f.focus(),a.hideLoading()}))};function oS(h,a,c){var f=Cn(h,S.select);if(f){var v=function(L,H,V){var me=document.createElement("option");me.value=V,dt(me,H),me.selected=yp(V,c.inputValue),L.appendChild(me)};a.forEach(function(k){var L=k[0],H=k[1];if(Array.isArray(H)){var V=document.createElement("optgroup");V.label=L,V.disabled=!1,f.appendChild(V),H.forEach(function(me){return v(V,me[1],me[0])})}else v(f,H,L)}),f.focus()}}function aS(h,a,c){var f=Cn(h,S.radio);if(f){a.forEach(function(k){var L=k[0],H=k[1],V=document.createElement("input"),me=document.createElement("label");V.type="radio",V.name=S.radio,V.value=L,yp(L,c.inputValue)&&(V.checked=!0);var ds=document.createElement("span");dt(ds,H),ds.className=S.label,me.appendChild(V),me.appendChild(ds),f.appendChild(me)});var v=f.querySelectorAll("input");v.length&&v[0].focus()}}var vp=function h(a){var c=[];return a instanceof Map?a.forEach(function(f,v){var k=f;ye(k)==="object"&&(k=h(k)),c.push([v,k])}):Object.keys(a).forEach(function(f){var v=a[f];ye(v)==="object"&&(v=h(v)),c.push([f,v])}),c},yp=function(a,c){return!!c&&c.toString()===a.toString()},Go=void 0,lS=function(a){var c=ie.innerParams.get(a);a.disableButtons(),c.input?wp(a,"confirm"):Au(a,!0)},uS=function(a){var c=ie.innerParams.get(a);a.disableButtons(),c.returnInputValueOnDeny?wp(a,"deny"):Ru(a,!1)},cS=function(a,c){a.disableButtons(),c(ei.cancel)},wp=function(a,c){var f=ie.innerParams.get(a);if(!f.input){fr('The "input" parameter is needed to be set when using returnInputValueOn'.concat(gu(c)));return}var v=a.getInput(),k=eS(a,f);f.inputValidator?dS(a,k,c):v&&!v.checkValidity()?(a.enableButtons(),a.showValidationMessage(f.validationMessage||v.validationMessage)):c==="deny"?Ru(a,k):Au(a,k)},dS=function(a,c,f){var v=ie.innerParams.get(a);a.disableInput();var k=Promise.resolve().then(function(){return is(v.inputValidator(c,v.validationMessage))});k.then(function(L){a.enableButtons(),a.enableInput(),L?a.showValidationMessage(L):f==="deny"?Ru(a,c):Au(a,c)})},Ru=function(a,c){var f=ie.innerParams.get(a||Go);if(f.showLoaderOnDeny&&ri(hr()),f.preDeny){a.isAwaitingPromise=!0;var v=Promise.resolve().then(function(){return is(f.preDeny(c,f.validationMessage))});v.then(function(k){k===!1?(a.hideLoading(),cs(a)):a.close({isDenied:!0,value:typeof k>"u"?c:k})}).catch(function(k){return Ep(a||Go,k)})}else a.close({isDenied:!0,value:c})},_p=function(a,c){a.close({isConfirmed:!0,value:c})},Ep=function(a,c){a.rejectPromise(c)},Au=function(a,c){var f=ie.innerParams.get(a||Go);if(f.showLoaderOnConfirm&&ri(),f.preConfirm){a.resetValidationMessage(),a.isAwaitingPromise=!0;var v=Promise.resolve().then(function(){return is(f.preConfirm(c,f.validationMessage))});v.then(function(k){Xe(Vo())||k===!1?(a.hideLoading(),cs(a)):_p(a,typeof k>"u"?c:k)}).catch(function(k){return Ep(a||Go,k)})}else _p(a,c)};function Ko(){var h=ie.innerParams.get(this);if(h){var a=ie.domCache.get(this);Ue(a.loader),Ho()?h.icon&&Pe(os()):fS(a),Vt([a.popup,a.actions],S.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}}var fS=function(a){var c=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));c.length?Pe(c[0],"inline-block"):VE()&&Ue(a.actions)};function Cp(){var h=ie.innerParams.get(this),a=ie.domCache.get(this);return a?$o(a.popup,h.input):null}function Sp(h,a,c){var f=ie.domCache.get(h);a.forEach(function(v){f[v].disabled=c})}function Ip(h,a){var c=ee();if(!(!c||!h))if(h.type==="radio")for(var f=c.querySelectorAll('[name="'.concat(S.radio,'"]')),v=0;v<f.length;v++)f[v].disabled=a;else h.disabled=a}function kp(){Sp(this,["confirmButton","denyButton","cancelButton"],!1)}function Tp(){Sp(this,["confirmButton","denyButton","cancelButton"],!0)}function bp(){Ip(this.getInput(),!1)}function Pp(){Ip(this.getInput(),!0)}function xp(h){var a=ie.domCache.get(this),c=ie.innerParams.get(this);dt(a.validationMessage,h),a.validationMessage.className=S["validation-message"],c.customClass&&c.customClass.validationMessage&&Q(a.validationMessage,c.customClass.validationMessage),Pe(a.validationMessage);var f=this.getInput();f&&(f.setAttribute("aria-invalid","true"),f.setAttribute("aria-describedby",S["validation-message"]),Xh(f),Q(f,S.inputerror))}function Rp(){var h=ie.domCache.get(this);h.validationMessage&&Ue(h.validationMessage);var a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),Vt(a,S.inputerror))}var ii={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},hS=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],pS={},mS=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ap=function(a){return Object.prototype.hasOwnProperty.call(ii,a)},Np=function(a){return hS.indexOf(a)!==-1},Op=function(a){return pS[a]},gS=function(a){Ap(a)||Qe('Unknown parameter "'.concat(a,'"'))},vS=function(a){mS.includes(a)&&Qe('The parameter "'.concat(a,'" is incompatible with toasts'))},yS=function(a){var c=Op(a);c&&Kh(a,c)},wS=function(a){a.backdrop===!1&&a.allowOutsideClick&&Qe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var c in a)gS(c),a.toast&&vS(c),yS(c)};function Lp(h){var a=ee(),c=ie.innerParams.get(this);if(!a||en(a,c.hideClass.popup)){Qe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var f=_S(h),v=Object.assign({},c,f);lp(this,v),ie.innerParams.set(this,v),Object.defineProperties(this,{params:{value:Object.assign({},this.params,h),writable:!1,enumerable:!0}})}var _S=function(a){var c={};return Object.keys(a).forEach(function(f){Np(f)?c[f]=a[f]:Qe("Invalid parameter to update: ".concat(f))}),c};function Dp(){var h=ie.domCache.get(this),a=ie.innerParams.get(this);if(!a){Mp(this);return}h.popup&&N.swalCloseEventFinishedCallback&&(N.swalCloseEventFinishedCallback(),delete N.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),ES(this)}var ES=function(a){Mp(a),delete a.params,delete N.keydownHandler,delete N.keydownTarget,delete N.currentInstance},Mp=function(a){a.isAwaitingPromise?(Nu(ie,a),a.isAwaitingPromise=!0):(Nu(ti,a),Nu(ie,a),delete a.isAwaitingPromise,delete a.disableButtons,delete a.enableButtons,delete a.getInput,delete a.disableInput,delete a.enableInput,delete a.hideLoading,delete a.disableLoading,delete a.showValidationMessage,delete a.resetValidationMessage,delete a.close,delete a.closePopup,delete a.closeModal,delete a.closeToast,delete a.rejectPromise,delete a.update,delete a._destroy)},Nu=function(a,c){for(var f in a)a[f].delete(c)},CS=Object.freeze({__proto__:null,_destroy:Dp,close:Sn,closeModal:Sn,closePopup:Sn,closeToast:Sn,disableButtons:Tp,disableInput:Pp,disableLoading:Ko,enableButtons:kp,enableInput:bp,getInput:Cp,handleAwaitingPromise:cs,hideLoading:Ko,rejectPromise:mp,resetValidationMessage:Rp,showValidationMessage:xp,update:Lp}),SS=function(a,c,f){a.toast?IS(a,c,f):(TS(c),bS(c),PS(a,c,f))},IS=function(a,c,f){c.popup.onclick=function(){a&&(kS(a)||a.timer||a.input)||f(ei.close)}},kS=function(a){return!!(a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton)},Yo=!1,TS=function(a){a.popup.onmousedown=function(){a.container.onmouseup=function(c){a.container.onmouseup=function(){},c.target===a.container&&(Yo=!0)}}},bS=function(a){a.container.onmousedown=function(c){c.target===a.container&&c.preventDefault(),a.popup.onmouseup=function(f){a.popup.onmouseup=function(){},(f.target===a.popup||f.target instanceof HTMLElement&&a.popup.contains(f.target))&&(Yo=!0)}}},PS=function(a,c,f){c.container.onclick=function(v){if(Yo){Yo=!1;return}v.target===c.container&&zo(a.allowOutsideClick)&&f(ei.backdrop)}},xS=function(a){return ye(a)==="object"&&a.jquery},Fp=function(a){return a instanceof Element||xS(a)},RS=function(a){var c={};return ye(a[0])==="object"&&!Fp(a[0])?Object.assign(c,a[0]):["title","html","icon"].forEach(function(f,v){var k=a[v];typeof k=="string"||Fp(k)?c[f]=k:k!==void 0&&fr("Unexpected type of ".concat(f,'! Expected "string" or "Element", got ').concat(ye(k)))}),c};function AS(){for(var h=this,a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return E(h,c)}function NS(h){var a=function(c){function f(){return d(this,f),l(this,f,arguments)}return _(f,c),I(f,[{key:"_main",value:function(k,L){return w(y(f.prototype),"_main",this).call(this,k,Object.assign({},h,L))}}])}(this);return a}var OS=function(){return N.timeout&&N.timeout.getTimerLeft()},Up=function(){if(N.timeout)return WE(),N.timeout.stop()},Bp=function(){if(N.timeout){var a=N.timeout.start();return ku(a),a}},LS=function(){var a=N.timeout;return a&&(a.running?Up():Bp())},DS=function(a){if(N.timeout){var c=N.timeout.increase(a);return ku(c,!0),c}},MS=function(){return!!(N.timeout&&N.timeout.isRunning())},jp=!1,Ou={};function FS(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ou[h]=this,jp||(document.body.addEventListener("click",US),jp=!0)}var US=function(a){for(var c=a.target;c&&c!==document;c=c.parentNode)for(var f in Ou){var v=c.getAttribute(f);if(v){Ou[f].fire({template:v});return}}},BS=Object.freeze({__proto__:null,argsToParams:RS,bindClickHandler:FS,clickCancel:xC,clickConfirm:up,clickDeny:PC,enableLoading:ri,fire:AS,getActions:as,getCancelButton:Xr,getCloseButton:Eu,getConfirmButton:zt,getContainer:Je,getDenyButton:hr,getFocusableElements:Cu,getFooter:Jh,getHtmlContainer:wu,getIcon:os,getIconContent:FE,getImage:Qh,getInputLabel:UE,getLoader:Zr,getPopup:ee,getProgressSteps:_u,getTimerLeft:OS,getTimerProgressBar:Wo,getTitle:Yh,getValidationMessage:Vo,increaseTimer:DS,isDeprecatedParameter:Op,isLoading:jE,isTimerRunning:MS,isUpdatableParameter:Np,isValidParameter:Ap,isVisible:bC,mixin:NS,resumeTimer:Bp,showLoading:ri,stopTimer:Up,toggleTimer:LS}),jS=function(){function h(a,c){d(this,h),this.callback=a,this.remaining=c,this.running=!1,this.start()}return I(h,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(c){var f=this.running;return f&&this.stop(),this.remaining+=c,f&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),zp=["swal-title","swal-html","swal-footer"],zS=function(a){var c=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!c)return{};var f=c.content;YS(f);var v=Object.assign(VS(f),WS(f),HS(f),$S(f),qS(f),GS(f),KS(f,zp));return v},VS=function(a){var c={},f=Array.from(a.querySelectorAll("swal-param"));return f.forEach(function(v){vr(v,["name","value"]);var k=v.getAttribute("name"),L=v.getAttribute("value");typeof ii[k]=="boolean"?c[k]=L!=="false":ye(ii[k])==="object"?c[k]=JSON.parse(L):c[k]=L}),c},WS=function(a){var c={},f=Array.from(a.querySelectorAll("swal-function-param"));return f.forEach(function(v){var k=v.getAttribute("name"),L=v.getAttribute("value");c[k]=new Function("return ".concat(L))()}),c},HS=function(a){var c={},f=Array.from(a.querySelectorAll("swal-button"));return f.forEach(function(v){vr(v,["type","color","aria-label"]);var k=v.getAttribute("type");c["".concat(k,"ButtonText")]=v.innerHTML,c["show".concat(gu(k),"Button")]=!0,v.hasAttribute("color")&&(c["".concat(k,"ButtonColor")]=v.getAttribute("color")),v.hasAttribute("aria-label")&&(c["".concat(k,"ButtonAriaLabel")]=v.getAttribute("aria-label"))}),c},$S=function(a){var c={},f=a.querySelector("swal-image");return f&&(vr(f,["src","width","height","alt"]),f.hasAttribute("src")&&(c.imageUrl=f.getAttribute("src")||void 0),f.hasAttribute("width")&&(c.imageWidth=f.getAttribute("width")||void 0),f.hasAttribute("height")&&(c.imageHeight=f.getAttribute("height")||void 0),f.hasAttribute("alt")&&(c.imageAlt=f.getAttribute("alt")||void 0)),c},qS=function(a){var c={},f=a.querySelector("swal-icon");return f&&(vr(f,["type","color"]),f.hasAttribute("type")&&(c.icon=f.getAttribute("type")),f.hasAttribute("color")&&(c.iconColor=f.getAttribute("color")),c.iconHtml=f.innerHTML),c},GS=function(a){var c={},f=a.querySelector("swal-input");f&&(vr(f,["type","label","placeholder","value"]),c.input=f.getAttribute("type")||"text",f.hasAttribute("label")&&(c.inputLabel=f.getAttribute("label")),f.hasAttribute("placeholder")&&(c.inputPlaceholder=f.getAttribute("placeholder")),f.hasAttribute("value")&&(c.inputValue=f.getAttribute("value")));var v=Array.from(a.querySelectorAll("swal-input-option"));return v.length&&(c.inputOptions={},v.forEach(function(k){vr(k,["value"]);var L=k.getAttribute("value"),H=k.innerHTML;c.inputOptions[L]=H})),c},KS=function(a,c){var f={};for(var v in c){var k=c[v],L=a.querySelector(k);L&&(vr(L,[]),f[k.replace(/^swal-/,"")]=L.innerHTML.trim())}return f},YS=function(a){var c=zp.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(function(f){var v=f.tagName.toLowerCase();c.includes(v)||Qe("Unrecognized element <".concat(v,">"))})},vr=function(a,c){Array.from(a.attributes).forEach(function(f){c.indexOf(f.name)===-1&&Qe(['Unrecognized attribute "'.concat(f.name,'" on <').concat(a.tagName.toLowerCase(),">."),"".concat(c.length?"Allowed attributes are: ".concat(c.join(", ")):"To set the value, use HTML within the element.")])})},Vp=10,QS=function(a){var c=Je(),f=ee();typeof a.willOpen=="function"&&a.willOpen(f);var v=window.getComputedStyle(document.body),k=v.overflowY;eI(c,f,a),setTimeout(function(){XS(c,f)},Vp),Su()&&(ZS(c,a.scrollbarPadding,k),FC()),!Ho()&&!N.previousActiveElement&&(N.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(function(){return a.didOpen(f)}),Vt(c,S["no-transition"])},JS=function h(a){var c=ee();if(!(a.target!==c||!gr)){var f=Je();c.removeEventListener(gr,h),f.style.overflowY="auto"}},XS=function(a,c){gr&&np(c)?(a.style.overflowY="hidden",c.addEventListener(gr,JS)):a.style.overflowY="auto"},ZS=function(a,c,f){UC(),c&&f!=="hidden"&&$C(f),setTimeout(function(){a.scrollTop=0})},eI=function(a,c,f){Q(a,f.showClass.backdrop),f.animation?(c.style.setProperty("opacity","0","important"),Pe(c,"grid"),setTimeout(function(){Q(c,f.showClass.popup),c.style.removeProperty("opacity")},Vp)):Pe(c,"grid"),Q([document.documentElement,document.body],S.shown),f.heightAuto&&f.backdrop&&!f.toast&&Q([document.documentElement,document.body],S["height-auto"])},Wp={email:function(a,c){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)?Promise.resolve():Promise.resolve(c||"Invalid email address")},url:function(a,c){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(c||"Invalid URL")}};function tI(h){h.inputValidator||(h.input==="email"&&(h.inputValidator=Wp.email),h.input==="url"&&(h.inputValidator=Wp.url))}function nI(h){(!h.target||typeof h.target=="string"&&!document.querySelector(h.target)||typeof h.target!="string"&&!h.target.appendChild)&&(Qe('Target parameter is not valid, defaulting to "body"'),h.target="body")}function rI(h){tI(h),h.showLoaderOnConfirm&&!h.preConfirm&&Qe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),nI(h),typeof h.title=="string"&&(h.title=h.title.split(`
`).join("<br />")),QE(h)}var Wt,Qo=new WeakMap,Ee=function(){function h(){if(d(this,h),p(this,Qo,void 0),!(typeof window>"u")){Wt=this;for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];var v=Object.freeze(this.constructor.argsToParams(c));this.params=v,this.isAwaitingPromise=!1,g(Qo,this,this._main(Wt.params))}}return I(h,[{key:"_main",value:function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(wS(Object.assign({},f,c)),N.currentInstance){var v=ti.swalPromiseResolve.get(N.currentInstance),k=N.currentInstance.isAwaitingPromise;N.currentInstance._destroy(),k||v({isDismissed:!0}),Su()&&fp()}N.currentInstance=Wt;var L=sI(c,f);rI(L),Object.freeze(L),N.timeout&&(N.timeout.stop(),delete N.timeout),clearTimeout(N.restoreFocusTimeout);var H=oI(Wt);return lp(Wt,L),ie.innerParams.set(Wt,L),iI(Wt,H,L)}},{key:"then",value:function(c){return m(Qo,this).then(c)}},{key:"finally",value:function(c){return m(Qo,this).finally(c)}}])}(),iI=function(a,c,f){return new Promise(function(v,k){var L=function(V){a.close({isDismissed:!0,dismiss:V})};ti.swalPromiseResolve.set(a,v),ti.swalPromiseReject.set(a,k),c.confirmButton.onclick=function(){lS(a)},c.denyButton.onclick=function(){uS(a)},c.cancelButton.onclick=function(){cS(a,L)},c.closeButton.onclick=function(){L(ei.close)},SS(f,c,L),RC(N,f,L),ZC(a,f),QS(f),aI(N,f,L),lI(c,f),setTimeout(function(){c.container.scrollTop=0})})},sI=function(a,c){var f=zS(a),v=Object.assign({},ii,c,f,a);return v.showClass=Object.assign({},ii.showClass,v.showClass),v.hideClass=Object.assign({},ii.hideClass,v.hideClass),v.animation===!1&&(v.showClass={backdrop:"swal2-noanimation"},v.hideClass={}),v},oI=function(a){var c={popup:ee(),container:Je(),actions:as(),confirmButton:zt(),denyButton:hr(),cancelButton:Xr(),loader:Zr(),closeButton:Eu(),validationMessage:Vo(),progressSteps:_u()};return ie.domCache.set(a,c),c},aI=function(a,c,f){var v=Wo();Ue(v),c.timer&&(a.timeout=new jS(function(){f("timer"),delete a.timeout},c.timer),c.timerProgressBar&&(Pe(v),_t(v,c,"timerProgressBar"),setTimeout(function(){a.timeout&&a.timeout.running&&ku(c.timer)})))},lI=function(a,c){if(!c.toast){if(!zo(c.allowEnterKey)){Kh("allowEnterKey"),dI();return}uI(a)||cI(a,c)||xu(-1,1)}},uI=function(a){var c=a.popup.querySelectorAll("[autofocus]"),f=P(c),v;try{for(f.s();!(v=f.n()).done;){var k=v.value;if(k instanceof HTMLElement&&Xe(k))return k.focus(),!0}}catch(L){f.e(L)}finally{f.f()}return!1},cI=function(a,c){return c.focusDeny&&Xe(a.denyButton)?(a.denyButton.focus(),!0):c.focusCancel&&Xe(a.cancelButton)?(a.cancelButton.focus(),!0):c.focusConfirm&&Xe(a.confirmButton)?(a.confirmButton.focus(),!0):!1},dI=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Hp=new Date,$p=localStorage.getItem("swal-initiation");$p?(Hp.getTime()-Date.parse($p))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var h=document.createElement("audio");h.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",h.loop=!0,document.body.appendChild(h),setTimeout(function(){h.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Hp))}Ee.prototype.disableButtons=Tp,Ee.prototype.enableButtons=kp,Ee.prototype.getInput=Cp,Ee.prototype.disableInput=Pp,Ee.prototype.enableInput=bp,Ee.prototype.hideLoading=Ko,Ee.prototype.disableLoading=Ko,Ee.prototype.showValidationMessage=xp,Ee.prototype.resetValidationMessage=Rp,Ee.prototype.close=Sn,Ee.prototype.closePopup=Sn,Ee.prototype.closeModal=Sn,Ee.prototype.closeToast=Sn,Ee.prototype.rejectPromise=mp,Ee.prototype.update=Lp,Ee.prototype._destroy=Dp,Object.assign(Ee,BS),Object.keys(CS).forEach(function(h){Ee[h]=function(){if(Wt&&Wt[h]){var a;return(a=Wt)[h].apply(a,arguments)}return null}}),Ee.DismissReason=ei,Ee.version="11.12.0";var Jo=Ee;return Jo.default=Jo,Jo}),typeof In<"u"&&In.Sweetalert2&&(In.swal=In.sweetAlert=In.Swal=In.SweetAlert=In.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(e0);var Bx=e0.exports;const _s=Ov(Bx),jx=({tipo:t,mensajito:e})=>((()=>{switch(t){case"error":e==="Firebase: Error (auth/email-already-in-use)."?_s.fire({icon:"error",title:"E-mail ya está en uso",html:"colgade!"}):_s.fire({icon:"error",title:"Uh! Error...",html:`Ha ocurrido un error: ${e}`});break;case"success":_s.fire({icon:"success",title:"¡Bienvenido!",html:`${e} <br/><p>safaste que por ahora no validamos casilla de correo</p>`});break;case"info":_s.fire({icon:"info",title:"Éxito",html:"<p>Operación exitosa</p>"});break;case"info_complete":_s.fire({icon:"info",title:"Completá!",html:`<p>${e}</p>`});break}})(),null),lh=O.createContext();function zx({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(""),s=(o,l)=>{n(o),i(l),setTimeout(()=>{n(null),i("")},2e3)};return x.jsxs(lh.Provider,{value:{mostrarAlerta:s},children:[t,e&&x.jsx(jx,{tipo:e,mensajito:r})]})}const Vx="_titulo_login_7mnv4_1",Wx="_img_7mnv4_13",pc={titulo_login:Vx,img:Wx};function jg(){const{login:t,rayo:e}=iu(),[n,r]=O.useState(""),[i,s]=O.useState(""),{mostrarAlerta:o}=O.useContext(lh),l=ru(),u=Yl(),d=()=>{_2(l,n,i).then(p=>{const g=p.user;t(),console.log("epa si entro!"),console.log("Usuario autenticado:",g.uid),o("success","¡Inicio de sesión exitoso!"),setTimeout(()=>{u("/teenagekicks/home")},1500)}).catch(p=>{const g=p.message;console.log(g),o("error","usuario y/o contraseña inválidos")})},m=p=>{switch(p.target.name){case"email":r(p.target.value);break;case"password":s(p.target.value);break}};return x.jsxs("div",{className:pc.contenedor,children:[x.jsxs("div",{className:pc.titulo_login,children:[x.jsx("h1",{children:"Teenage Kicks Feria "})," ",x.jsx("img",{src:e,alt:"Rayo",className:pc.img})]}),x.jsx("input",{type:"email",onChange:m,name:"email",placeholder:"email"}),x.jsx("input",{type:"password",onChange:m,name:"password",placeholder:"contraseña"}),x.jsx("button",{onClick:d,children:" login "}),x.jsx(Ra,{to:"/teenagekicks/registrate",children:x.jsx("button",{children:" registrate "})})]})}const Hx="_contenedor_1hgvs_47",$x="_saludo_1hgvs_61",qx="_imgsalir_1hgvs_85",Gx="_listaMedias_1hgvs_119",Kx="_media_1hgvs_131",Es={contenedor:Hx,saludo:$x,imgsalir:qx,listaMedias:Gx,media:Kx};var zg={};const Vg="@firebase/database",Wg="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0="";function Yx(t){t0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return En(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qx(e)}}catch{}return new Jx},Tr=n0("localStorage"),Xx=n0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Xl("@firebase/database"),Zx=function(){let t=1;return function(){return t++}}(),r0=function(t){const e=hb(t),n=new ub;n.update(e);const r=n.digest();return Gf.encodeByteArray(r)},Do=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Do.apply(null,r):typeof r=="object"?e+=Ne(r):e+=r,e+=" "}return e};let Vs=null,Hg=!0;const eR=function(t,e){R(!e,"Can't turn on custom loggers persistently."),Ai.logLevel=ne.VERBOSE,Vs=Ai.log.bind(Ai)},Ve=function(...t){if(Hg===!0&&(Hg=!1,Vs===null&&Xx.get("logging_enabled")===!0&&eR()),Vs){const e=Do.apply(null,t);Vs(e)}},Mo=function(t){return function(...e){Ve(t,...e)}},Nd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Do(...t);Ai.error(e)},yn=function(...t){const e=`FIREBASE FATAL ERROR: ${Do(...t)}`;throw Ai.error(e),new Error(e)},ot=function(...t){const e="FIREBASE WARNING: "+Do(...t);Ai.warn(e)},tR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},i0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vi="[MIN_NAME]",Br="[MAX_NAME]",es=function(t,e){if(t===e)return 0;if(t===Vi||e===Br)return-1;if(e===Vi||t===Br)return 1;{const n=$g(t),r=$g(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},rR=function(t,e){return t===e?0:t<e?-1:1},Cs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},uh=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ne(e[r]),n+=":",n+=uh(t[e[r]]);return n+="}",n},s0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const o0=function(t){R(!i0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const d=[];for(u=n;u;u-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)d.push(s%2?1:0),s=Math.floor(s/2);d.push(i?1:0),d.reverse();const m=d.join("");let p="";for(u=0;u<64;u+=8){let g=parseInt(m.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},iR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const aR=new RegExp("^-?(0*)\\d{1,10}$"),lR=-2147483648,uR=2147483647,$g=function(t){if(aR.test(t)){const e=Number(t);if(e>=lR&&e<=uR)return e}return null},ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},cR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class Da{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Da.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="5",a0="v",l0="s",u0="r",c0="f",d0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,f0="ls",h0="p",Od="ac",p0="websocket",m0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,i,s=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function v0(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===p0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===m0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hR(t)&&(n.ns=t.namespace);const i=[];return lt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.counters_={}}incrementCounter(e,n=1){En(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return K1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={},gc={};function dh(t){const e=t.toString();return mc[e]||(mc[e]=new pR),mc[e]}function mR(t,e){const n=t.toString();return gc[n]||(gc[n]=e()),gc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ts(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="start",vR="close",yR="pLPCommand",wR="pRTLPCB",y0="id",w0="pw",_0="ser",_R="cb",ER="seg",CR="ts",SR="d",IR="dframe",E0=1870,C0=30,kR=E0-C0,TR=25e3,bR=3e4;class Ei{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mo(e),this.stats_=dh(n),this.urlFn=u=>(this.appCheckToken&&(u[Od]=this.appCheckToken),v0(n,m0,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bR)),nR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fh((...s)=>{const[o,l,u,d,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qg)this.id=l,this.password=u;else if(o===vR)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[qg]="t",r[_0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_R]=this.scriptTagHolder.uniqueCallbackIdentifier),r[a0]=ch,this.transportSessionId&&(r[l0]=this.transportSessionId),this.lastSessionId&&(r[f0]=this.lastSessionId),this.applicationId&&(r[h0]=this.applicationId),this.appCheckToken&&(r[Od]=this.appCheckToken),typeof location<"u"&&location.hostname&&d0.test(location.hostname)&&(r[u0]=c0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ei.forceAllow_=!0}static forceDisallow(){Ei.forceDisallow_=!0}static isAvailable(){return Ei.forceAllow_?!0:!Ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iR()&&!sR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=r_(n),i=s0(r,kR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[IR]="t",r[y0]=e,r[w0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zx(),window[yR+this.uniqueCallbackIdentifier]=e,window[wR+this.uniqueCallbackIdentifier]=n,this.myIFrame=fh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ve("frame writing exception"),l.stack&&Ve(l.stack),Ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y0]=this.myID,e[w0]=this.myPW,e[_0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+C0+r.length<=E0;){const o=this.pendingSegs.shift();r=r+"&"+ER+i+"="+o.seg+"&"+CR+i+"="+o.ts+"&"+SR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(TR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=16384,xR=45e3;let vl=null;typeof MozWebSocket<"u"?vl=MozWebSocket:typeof WebSocket<"u"&&(vl=WebSocket);class Nt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mo(this.connId),this.stats_=dh(n),this.connURL=Nt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[a0]=ch,typeof location<"u"&&location.hostname&&d0.test(location.hostname)&&(o[u0]=c0),n&&(o[l0]=n),r&&(o[f0]=r),i&&(o[Od]=i),s&&(o[h0]=s),v0(e,p0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let r;c_(),this.mySock=new vl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vl!==null&&!Nt.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=po(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=s0(n,PR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2;Nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ei,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Nt&&Nt.isAvailable();let r=n&&!Nt.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nt];else{const i=this.transports_=[];for(const s of wo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);wo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=6e4,AR=5e3,NR=10*1024,OR=100*1024,vc="t",Gg="d",LR="s",Kg="r",DR="e",Yg="o",Qg="a",Jg="n",Xg="p",MR="h";class FR{constructor(e,n,r,i,s,o,l,u,d,m){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=d,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mo("c:"+this.id+":"),this.transportManager_=new wo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vc in e){const n=e[vc];n===Qg?this.upgradeIfSecondaryHealthy_():n===Kg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Cs("t",e),r=Cs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Cs("t",e),r=Cs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Cs(vc,e);if(Gg in e){const r=e[Gg];if(n===MR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Jg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===LR?this.onConnectionShutdown_(r):n===Kg?this.onReset_(r):n===DR?Nd("Server Error: "+r):n===Yg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ch!==r&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends I0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yl}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=32,ev=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xn(t){return t.pieces_.length-t.pieceNum_}function se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function k0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function T0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function b0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function Te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return tt(se(t),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hh(t,e){if(Xn(t)!==Xn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Xn(t)>Xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class BR{constructor(e,n){this.errorPrefix_=n,this.parts_=T0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jl(this.parts_[r]);P0(this)}}function jR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jl(e),P0(t)}function zR(t){const e=t.parts_.pop();t.byteLength_-=Jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function P0(t){if(t.byteLength_>ev)throw new Error(t.errorPrefix_+"has a key path longer than "+ev+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zg+") or object contains a cycle "+Cr(t))}function Cr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends I0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ph}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=1e3,VR=60*5*1e3,tv=30*1e3,WR=1.3,HR=3e4,$R="server_kill",nv=3;class fn extends S0{constructor(e,n,r,i,s,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=fn.nextPersistentConnectionId_++,this.log_=Mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ss,this.maxReconnectDelay_=VR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!c_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ph.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ne(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ql,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const u=l.d,d=l.s;fn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),d!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(d,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&En(e,"w")){const r=zi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ab(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nd("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HR&&(this.reconnectDelay_=Ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},d=function(p){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:d};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new FR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,E=>{ot(E+" ("+this.repoInfo_.toString()+")"),this.interrupt($R)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ot(p),u())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cd(this.interruptReasons_)&&(this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>uh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nv&&(this.reconnectDelay_=tv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+t0.replace(/\./g,"-")]=1,Yf()?e["framework.cordova"]=1:u_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yl.getInstance().currentlyOnline();return Cd(this.interruptReasons_)&&e}}fn.nextPersistentConnectionId_=0;fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(Vi,e),i=new G(Vi,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;class x0 extends su{static get __EMPTY_NODE(){return ga}static set __EMPTY_NODE(e){ga=e}compare(e,n){return es(e.name,n.name)}isDefinedOn(e){throw Qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Br,ga)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,ga)}toString(){return".key"}}const Ni=new x0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??nt.EMPTY_NODE,this.right=s??nt.EMPTY_NODE}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ae.RED=!0;Ae.BLACK=!1;class qR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new va(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new va(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new qR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e){return es(t.name,e.name)}function mh(t,e){return es(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ld;function KR(t){Ld=t}const R0=function(t){return typeof t=="number"?"number:"+o0(t):"string:"+t},A0=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&En(e,".sv"),"Priority must be a string or number.")}else R(t===Ld||t.isEmpty(),"priority of unexpected type.");R(t===Ld||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),A0(this.priorityNode_)}static set __childrenNodeConstructor(e){rv=e}static get __childrenNodeConstructor(){return rv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:q(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+R0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=o0(this.value_):e+=this.value_,this.lazyHash_=r0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N0,O0;function YR(t){N0=t}function QR(t){O0=t}class JR extends su{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?es(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Br,new xe("[PRIORITY-POST]",O0))}makePost(e,n){const r=N0(e);return new G(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new JR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=Math.log(2);class ZR{constructor(e){const n=s=>parseInt(Math.log(s)/XR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wl=function(t,e,n,r){t.sort(e);const i=function(u,d){const m=d-u;let p,g;if(m===0)return null;if(m===1)return p=t[u],g=n?n(p):p,new Ae(g,p.node,Ae.BLACK,null,null);{const E=parseInt(m/2,10)+u,C=i(u,E),I=i(E+1,d);return p=t[E],g=n?n(p):p,new Ae(g,p.node,Ae.BLACK,C,I)}},s=function(u){let d=null,m=null,p=t.length;const g=function(C,I){const P=p-C,w=p;p-=C;const y=i(P+1,w),_=t[P],T=n?n(_):_;E(new Ae(T,_.node,I,null,y))},E=function(C){d?(d.left=C,d=C):(m=C,d=C)};for(let C=0;C<u.count;++C){const I=u.nextBitIsOne(),P=Math.pow(2,u.count-(C+1));I?g(P,Ae.BLACK):(g(P,Ae.BLACK),g(P,Ae.RED))}return m},o=new ZR(t.length),l=s(o);return new nt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;const ai={};class un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(ai&&ve,"ChildrenNode.ts has not been loaded"),yc=yc||new un({".priority":ai},{".priority":ve}),yc}get(e){const n=zi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return En(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=wl(r,e.getCompare()):l=ai;const u=e.toString(),d=Object.assign({},this.indexSet_);d[u]=e;const m=Object.assign({},this.indexes_);return m[u]=l,new un(m,d)}addToIndexes(e,n){const r=cl(this.indexes_,(i,s)=>{const o=zi(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===ai)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(G.Wrap);let d=u.getNext();for(;d;)d.name!==e.name&&l.push(d),d=u.getNext();return l.push(e),wl(l,o.getCompare())}else return ai;else{const l=n.get(e.name);let u=i;return l&&(u=u.remove(new G(e.name,l))),u.insert(e,e.node)}});return new un(r,this.indexSet_)}removeFromIndexes(e,n){const r=cl(this.indexes_,i=>{if(i===ai)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new un(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is;class z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&A0(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Is||(Is=new z(new nt(mh),null,un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Is}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Is:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Is:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{R(q(e)!==".priority"||Xn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ve,(o,l)=>{n[o]=l.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+R0(this.getPriority().val())+":"),this.forEachChild(ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":r0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fo?-1:0}withIndex(e){if(e===Ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ve),i=n.getIterator(ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ni?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eA extends z{constructor(){super(new nt(mh),z.EMPTY_NODE,un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const Fo=new eA;Object.defineProperties(G,{MIN:{value:new G(Vi,z.EMPTY_NODE)},MAX:{value:new G(Br,Fo)}});x0.__EMPTY_NODE=z.EMPTY_NODE;xe.__childrenNodeConstructor=z;KR(Fo);QR(Fo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=!0;function De(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,De(e))}if(!(t instanceof Array)&&tA){const n=[];let r=!1;if(lt(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=De(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new G(o,u)))}}),n.length===0)return z.EMPTY_NODE;const s=wl(n,GR,o=>o.name,mh);if(r){const o=wl(n,ve.getCompare());return new z(s,De(e),new un({".priority":o},{".priority":ve}))}else return new z(s,De(e),un.Default)}else{let n=z.EMPTY_NODE;return lt(t,(r,i)=>{if(En(t,r)&&r.substring(0,1)!=="."){const s=De(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(De(e))}}YR(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA extends su{constructor(e){super(),this.indexPath_=e,R(!K(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?es(e.name,n.name):s}makePost(e,n){const r=De(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,Fo);return new G(Br,e)}toString(){return T0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA extends su{compare(e,n){const r=e.node.compareTo(n.node);return r===0?es(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=De(e);return new G(n,r)}toString(){return".value"}}const iA=new rA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){return{type:"value",snapshotNode:t}}function Wi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _o(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Eo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_o(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Wi(n,r)):o.trackChildChange(Eo(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(_o(i,s))}),n.isLeafNode()||n.forEachChild(ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Eo(i,s,o))}else r.trackChildChange(Wi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.indexedFilter_=new gh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Co.getStartPost_(e),this.endPost_=Co.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,l)=>{s.matches(new G(o,l))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Co(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,E)=>p(E,g)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const u=new G(n,r),d=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),m=this.rangedFilter_.matches(u);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,d,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const E=g==null?1:o(g,u);if(m&&!r.isEmpty()&&E>=0)return s!=null&&s.trackChildChange(Eo(n,r,p)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(_o(n,p));const I=l.updateImmediateChild(n,z.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(s!=null&&s.trackChildChange(Wi(g.name,g.node)),I.updateImmediateChild(g.name,g.node)):I}}else return r.isEmpty()?e:m&&o(d,u)>=0?(s!=null&&(s.trackChildChange(_o(d.name,d.node)),s.trackChildChange(Wi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(d.name,z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new vh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aA(t){return t.loadsAllData()?new gh(t.getIndex()):t.hasLimit()?new oA(t):new Co(t)}function iv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===iA?n="$value":t.index_===Ni?n="$key":(R(t.index_ instanceof nA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ne(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ne(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ne(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ne(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends S0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Mo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_l.getListenId_(e,r),l={};this.listens_[o]=l;const u=iv(e._queryParams);this.restRequest_(s+".json",u,(d,m)=>{let p=m;if(d===404&&(p=null,d=null),d===null&&this.onDataUpdate_(s,p,!1,r),zi(this.listens_,o)===l){let g;d?d===401?g="permission_denied":g="rest_error:"+d:g="ok",i(g,null)}})}unlisten(e,n){const r=_l.getListenId_(e,n);delete this.listens_[r]}get(e){const n=iv(e._queryParams),r=e._path.toString(),i=new Ql;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ji(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=po(l.responseText)}catch{ot("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&ot("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return{value:null,children:new Map}}function D0(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,El());const i=t.children.get(r);e=se(e),D0(i,e,n)}}function Dd(t,e,n){t.value!==null?n(e,t.value):uA(t,(r,i)=>{const s=new re(e.toString()+"/"+r);Dd(i,s,n)})}function uA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=10*1e3,dA=30*1e3,fA=5*60*1e3;class hA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cA(e);const r=ov+(dA-ov)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;lt(e,(i,s)=>{s>0&&En(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*fA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Lt||(Lt={}));function M0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Lt.ACK_USER_WRITE,this.source=M0()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new Cl(X(),n,this.revert)}}else return R(q(this.path)===e,"operationForChild called for unrelated child."),new Cl(se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.source=e,this.path=n,this.type=Lt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new So(this.source,X()):new So(this.source,se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Lt.OVERWRITE}operationForChild(e){return K(this.path)?new jr(this.source,X(),this.snap.getImmediateChild(e)):new jr(this.source,se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Lt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new jr(this.source,X(),n.value):new Io(this.source,X(),n)}else return R(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Io(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(sA(o.childName,o.snapshotNode))}),ks(t,i,"child_removed",e,r,n),ks(t,i,"child_added",e,r,n),ks(t,i,"child_moved",s,r,n),ks(t,i,"child_changed",e,r,n),ks(t,i,"value",e,r,n),i}function ks(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,u)=>vA(t,l,u)),o.forEach(l=>{const u=gA(t,l,s);i.forEach(d=>{d.respondsTo(l.type)&&e.push(d.createEvent(u,t.query_))})})}function gA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vA(t,e,n){if(e.childName==null||n.childName==null)throw Qi("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){return{eventCache:t,serverCache:e}}function Hs(t,e,n,r){return ou(new zr(e,n,r),t.serverCache)}function F0(t,e,n,r){return ou(t.eventCache,new zr(e,n,r))}function Md(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;const yA=()=>(wc||(wc=new nt(rR)),wc);class le{constructor(e,n=yA()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return lt(e,(r,i)=>{n=n.set(new re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(K(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(se(e),n);return s!=null?{path:Te(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(se(e)):new le(null)}}set(e,n){if(K(e))return new le(n,this.children);{const r=q(e),s=(this.children.get(r)||new le(null)).set(se(e),n),o=this.children.insert(r,s);return new le(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new le(null):new le(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(se(e)):null}}setTree(e,n){if(K(e))return n;{const r=q(e),s=(this.children.get(r)||new le(null)).setTree(se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new le(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(se(e),Te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(se(e),Te(n,i),r):new le(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.writeTree_=e}static empty(){return new Ft(new le(null))}}function $s(t,e,n){if(K(e))return new Ft(new le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tt(i,e);return s=s.updateChild(o,n),new Ft(t.writeTree_.set(i,s))}else{const i=new le(n),s=t.writeTree_.setTree(e,i);return new Ft(s)}}}function av(t,e,n){let r=t;return lt(n,(i,s)=>{r=$s(r,Te(e,i),s)}),r}function lv(t,e){if(K(e))return Ft.empty();{const n=t.writeTree_.setTree(e,new le(null));return new Ft(n)}}function Fd(t,e){return Qr(t,e)!=null}function Qr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function uv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function Yn(t,e){if(K(e))return t;{const n=Qr(t,e);return n!=null?new Ft(new le(n)):new Ft(t.writeTree_.subtree(e))}}function Ud(t){return t.writeTree_.isEmpty()}function Hi(t,e){return U0(X(),t.writeTree_,e)}function U0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=U0(Te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t,e){return V0(e,t)}function wA(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=$s(t.visibleWrites,e,n)),t.lastWriteId=r}function _A(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function EA(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&CA(l,r.path)?i=!1:Ot(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return SA(t),!0;if(r.snap)t.visibleWrites=lv(t.visibleWrites,r.path);else{const l=r.children;lt(l,u=>{t.visibleWrites=lv(t.visibleWrites,Te(r.path,u))})}return!0}else return!1}function CA(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot(Te(t.path,n),e))return!0;return!1}function SA(t){t.visibleWrites=B0(t.allWrites,IA,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IA(t){return t.visible}function B0(t,e,n){let r=Ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ot(n,o)?(l=tt(n,o),r=$s(r,l,s.snap)):Ot(o,n)&&(l=tt(o,n),r=$s(r,X(),s.snap.getChild(l)));else if(s.children){if(Ot(n,o))l=tt(n,o),r=av(r,l,s.children);else if(Ot(o,n))if(l=tt(o,n),K(l))r=av(r,X(),s.children);else{const u=zi(s.children,q(l));if(u){const d=u.getChild(se(l));r=$s(r,X(),d)}}}else throw Qi("WriteRecord should have .snap or .children")}}return r}function j0(t,e,n,r,i){if(!r&&!i){const s=Qr(t.visibleWrites,e);if(s!=null)return s;{const o=Yn(t.visibleWrites,e);if(Ud(o))return n;if(n==null&&!Fd(o,X()))return null;{const l=n||z.EMPTY_NODE;return Hi(o,l)}}}else{const s=Yn(t.visibleWrites,e);if(!i&&Ud(s))return n;if(!i&&n==null&&!Fd(s,X()))return null;{const o=function(d){return(d.visible||i)&&(!r||!~r.indexOf(d.writeId))&&(Ot(d.path,e)||Ot(e,d.path))},l=B0(t.allWrites,o,e),u=n||z.EMPTY_NODE;return Hi(l,u)}}}function kA(t,e,n){let r=z.EMPTY_NODE;const i=Qr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Yn(t.visibleWrites,e);return n.forEachChild(ve,(o,l)=>{const u=Hi(Yn(s,new re(o)),l);r=r.updateImmediateChild(o,u)}),uv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Yn(t.visibleWrites,e);return uv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function TA(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Te(e,n);if(Fd(t.visibleWrites,s))return null;{const o=Yn(t.visibleWrites,s);return Ud(o)?i.getChild(n):Hi(o,i.getChild(n))}}function bA(t,e,n,r){const i=Te(e,n),s=Qr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Yn(t.visibleWrites,i);return Hi(o,r.getNode().getImmediateChild(n))}else return null}function PA(t,e){return Qr(t.visibleWrites,e)}function xA(t,e,n,r,i,s,o){let l;const u=Yn(t.visibleWrites,e),d=Qr(u,X());if(d!=null)l=d;else if(n!=null)l=Hi(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const m=[],p=o.getCompare(),g=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let E=g.getNext();for(;E&&m.length<i;)p(E,r)!==0&&m.push(E),E=g.getNext();return m}else return[]}function RA(){return{visibleWrites:Ft.empty(),allWrites:[],lastWriteId:-1}}function Sl(t,e,n,r){return j0(t.writeTree,t.treePath,e,n,r)}function Eh(t,e){return kA(t.writeTree,t.treePath,e)}function cv(t,e,n,r){return TA(t.writeTree,t.treePath,e,n,r)}function Il(t,e){return PA(t.writeTree,Te(t.treePath,e))}function AA(t,e,n,r,i,s){return xA(t.writeTree,t.treePath,e,n,r,i,s)}function Ch(t,e,n){return bA(t.writeTree,t.treePath,e,n)}function z0(t,e){return V0(Te(t.treePath,e),t.writeTree)}function V0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Eo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,_o(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Wi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Eo(r,e.snapshotNode,i.oldSnap));else throw Qi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const W0=new OA;class Sh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ch(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vr(this.viewCache_),s=AA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){return{filter:t}}function DA(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function MA(t,e,n,r,i){const s=new NA;let o,l;if(n.type===Lt.OVERWRITE){const d=n;d.source.fromUser?o=Bd(t,e,d.path,d.snap,r,i,s):(R(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered()&&!K(d.path),o=kl(t,e,d.path,d.snap,r,i,l,s))}else if(n.type===Lt.MERGE){const d=n;d.source.fromUser?o=UA(t,e,d.path,d.children,r,i,s):(R(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered(),o=jd(t,e,d.path,d.children,r,i,l,s))}else if(n.type===Lt.ACK_USER_WRITE){const d=n;d.revert?o=zA(t,e,d.path,r,i,s):o=BA(t,e,d.path,d.affectedTree,r,i,s)}else if(n.type===Lt.LISTEN_COMPLETE)o=jA(t,e,n.path,r,s);else throw Qi("Unknown operation type: "+n.type);const u=s.getChanges();return FA(e,o,u),{viewCache:o,changes:u}}function FA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Md(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(L0(Md(e)))}}function H0(t,e,n,r,i,s){const o=e.eventCache;if(Il(r,n)!=null)return e;{let l,u;if(K(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Vr(e),m=d instanceof z?d:z.EMPTY_NODE,p=Eh(r,m);l=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const d=Sl(r,Vr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const d=q(n);if(d===".priority"){R(Xn(n)===1,"Can't have a priority with additional path components");const m=o.getNode();u=e.serverCache.getNode();const p=cv(r,n,m,u);p!=null?l=t.filter.updatePriority(m,p):l=o.getNode()}else{const m=se(n);let p;if(o.isCompleteForChild(d)){u=e.serverCache.getNode();const g=cv(r,n,o.getNode(),u);g!=null?p=o.getNode().getImmediateChild(d).updateChild(m,g):p=o.getNode().getImmediateChild(d)}else p=Ch(r,d,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),d,p,m,i,s):l=o.getNode()}}return Hs(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function kl(t,e,n,r,i,s,o,l){const u=e.serverCache;let d;const m=o?t.filter:t.filter.getIndexedFilter();if(K(n))d=m.updateFullNode(u.getNode(),r,null);else if(m.filtersNodes()&&!u.isFiltered()){const E=u.getNode().updateChild(n,r);d=m.updateFullNode(u.getNode(),E,null)}else{const E=q(n);if(!u.isCompleteForPath(n)&&Xn(n)>1)return e;const C=se(n),P=u.getNode().getImmediateChild(E).updateChild(C,r);E===".priority"?d=m.updatePriority(u.getNode(),P):d=m.updateChild(u.getNode(),E,P,C,W0,null)}const p=F0(e,d,u.isFullyInitialized()||K(n),m.filtersNodes()),g=new Sh(i,p,s);return H0(t,p,n,i,g,l)}function Bd(t,e,n,r,i,s,o){const l=e.eventCache;let u,d;const m=new Sh(i,e,s);if(K(n))d=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Hs(e,d,!0,t.filter.filtersNodes());else{const p=q(n);if(p===".priority")d=t.filter.updatePriority(e.eventCache.getNode(),r),u=Hs(e,d,l.isFullyInitialized(),l.isFiltered());else{const g=se(n),E=l.getNode().getImmediateChild(p);let C;if(K(g))C=r;else{const I=m.getCompleteChild(p);I!=null?k0(g)===".priority"&&I.getChild(b0(g)).isEmpty()?C=I:C=I.updateChild(g,r):C=z.EMPTY_NODE}if(E.equals(C))u=e;else{const I=t.filter.updateChild(l.getNode(),p,C,g,m,o);u=Hs(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function dv(t,e){return t.eventCache.isCompleteForChild(e)}function UA(t,e,n,r,i,s,o){let l=e;return r.foreach((u,d)=>{const m=Te(n,u);dv(e,q(m))&&(l=Bd(t,l,m,d,i,s,o))}),r.foreach((u,d)=>{const m=Te(n,u);dv(e,q(m))||(l=Bd(t,l,m,d,i,s,o))}),l}function fv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function jd(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,d;K(n)?d=r:d=new le(null).setTree(n,r);const m=e.serverCache.getNode();return d.children.inorderTraversal((p,g)=>{if(m.hasChild(p)){const E=e.serverCache.getNode().getImmediateChild(p),C=fv(t,E,g);u=kl(t,u,new re(p),C,i,s,o,l)}}),d.children.inorderTraversal((p,g)=>{const E=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!m.hasChild(p)&&!E){const C=e.serverCache.getNode().getImmediateChild(p),I=fv(t,C,g);u=kl(t,u,new re(p),I,i,s,o,l)}}),u}function BA(t,e,n,r,i,s,o){if(Il(i,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(K(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return kl(t,e,n,u.getNode().getChild(n),i,s,l,o);if(K(n)){let d=new le(null);return u.getNode().forEachChild(Ni,(m,p)=>{d=d.set(new re(m),p)}),jd(t,e,n,d,i,s,l,o)}else return e}else{let d=new le(null);return r.foreach((m,p)=>{const g=Te(n,m);u.isCompleteForPath(g)&&(d=d.set(m,u.getNode().getChild(g)))}),jd(t,e,n,d,i,s,l,o)}}function jA(t,e,n,r,i){const s=e.serverCache,o=F0(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return H0(t,o,n,r,W0,i)}function zA(t,e,n,r,i,s){let o;if(Il(r,n)!=null)return e;{const l=new Sh(r,e,i),u=e.eventCache.getNode();let d;if(K(n)||q(n)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=Sl(r,Vr(e));else{const p=e.serverCache.getNode();R(p instanceof z,"serverChildren would be complete if leaf node"),m=Eh(r,p)}m=m,d=t.filter.updateFullNode(u,m,s)}else{const m=q(n);let p=Ch(r,m,e.serverCache);p==null&&e.serverCache.isCompleteForChild(m)&&(p=u.getImmediateChild(m)),p!=null?d=t.filter.updateChild(u,m,p,se(n),l,s):e.eventCache.getNode().hasChild(m)?d=t.filter.updateChild(u,m,z.EMPTY_NODE,se(n),l,s):d=u,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sl(r,Vr(e)),o.isLeafNode()&&(d=t.filter.updateFullNode(d,o,s)))}return o=e.serverCache.isFullyInitialized()||Il(r,X())!=null,Hs(e,d,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gh(r.getIndex()),s=aA(r);this.processor_=LA(s);const o=n.serverCache,l=n.eventCache,u=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),d=s.updateFullNode(z.EMPTY_NODE,l.getNode(),null),m=new zr(u,o.isFullyInitialized(),i.filtersNodes()),p=new zr(d,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ou(p,m),this.eventGenerator_=new pA(this.query_)}get query(){return this.query_}}function WA(t){return t.viewCache_.serverCache.getNode()}function HA(t,e){const n=Vr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function hv(t){return t.eventRegistrations_.length===0}function $A(t,e){t.eventRegistrations_.push(e)}function pv(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function mv(t,e,n,r){e.type===Lt.MERGE&&e.source.queryId!==null&&(R(Vr(t.viewCache_),"We should always have a full cache before handling merges"),R(Md(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=MA(t.processor_,i,e,n,r);return DA(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,$0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function qA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{r.push(Wi(s,o))}),n.isFullyInitialized()&&r.push(L0(n.getNode())),$0(t,r,n.getNode(),e)}function $0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return mA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;class GA{constructor(){this.views=new Map}}function KA(t){R(!Tl,"__referenceConstructor has already been defined"),Tl=t}function YA(){return R(Tl,"Reference.ts has not been loaded"),Tl}function QA(t){return t.views.size===0}function Ih(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),mv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(mv(o,e,n,r));return s}}function JA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Sl(n,i?r:null),u=!1;l?u=!0:r instanceof z?(l=Eh(n,r),u=!1):(l=z.EMPTY_NODE,u=!1);const d=ou(new zr(l,u,!1),new zr(r,i,!1));return new VA(e,d)}return o}function XA(t,e,n,r,i,s){const o=JA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$A(o,n),qA(o,n)}function ZA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Zn(t);if(i==="default")for(const[u,d]of t.views.entries())o=o.concat(pv(d,n,r)),hv(d)&&(t.views.delete(u),d.query._queryParams.loadsAllData()||s.push(d.query));else{const u=t.views.get(i);u&&(o=o.concat(pv(u,n,r)),hv(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return l&&!Zn(t)&&s.push(new(YA())(e._repo,e._path)),{removed:s,events:o}}function q0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Oi(t,e){let n=null;for(const r of t.views.values())n=n||HA(r,e);return n}function G0(t,e){if(e._queryParams.loadsAllData())return au(t);{const r=e._queryIdentifier;return t.views.get(r)}}function K0(t,e){return G0(t,e)!=null}function Zn(t){return au(t)!=null}function au(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;function eN(t){R(!bl,"__referenceConstructor has already been defined"),bl=t}function tN(){return R(bl,"Reference.ts has not been loaded"),bl}let nN=1;class gv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=RA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Y0(t,e,n,r,i){return wA(t.pendingWriteTree_,e,n,r,i),i?Uo(t,new jr(M0(),e,n)):[]}function br(t,e,n=!1){const r=_A(t.pendingWriteTree_,e);if(EA(t.pendingWriteTree_,e)){let s=new le(null);return r.snap!=null?s=s.set(X(),!0):lt(r.children,o=>{s=s.set(new re(o),!0)}),Uo(t,new Cl(r.path,s,n))}else return[]}function lu(t,e,n){return Uo(t,new jr(yh(),e,n))}function rN(t,e,n){const r=le.fromObject(n);return Uo(t,new Io(yh(),e,r))}function iN(t,e){return Uo(t,new So(yh(),e))}function sN(t,e,n){const r=Th(t,n);if(r){const i=bh(r),s=i.path,o=i.queryId,l=tt(s,e),u=new So(wh(o),l);return Ph(t,s,u)}else return[]}function zd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||K0(o,e))){const u=ZA(o,e,n,r);QA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const d=u.removed;if(l=u.events,!i){const m=d.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(g,E)=>Zn(E));if(m&&!p){const g=t.syncPointTree_.subtree(s);if(!g.isEmpty()){const E=lN(g);for(let C=0;C<E.length;++C){const I=E[C],P=I.query,w=X0(t,I);t.listenProvider_.startListening(qs(P),Pl(t,P),w.hashFn,w.onComplete)}}}!p&&d.length>0&&!r&&(m?t.listenProvider_.stopListening(qs(e),null):d.forEach(g=>{const E=t.queryToTagMap.get(uu(g));t.listenProvider_.stopListening(qs(g),E)}))}uN(t,d)}return l}function oN(t,e,n,r){const i=Th(t,r);if(i!=null){const s=bh(i),o=s.path,l=s.queryId,u=tt(o,e),d=new jr(wh(l),u,n);return Ph(t,o,d)}else return[]}function aN(t,e,n,r){const i=Th(t,r);if(i){const s=bh(i),o=s.path,l=s.queryId,u=tt(o,e),d=le.fromObject(n),m=new Io(wh(l),u,d);return Ph(t,o,m)}else return[]}function vv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,E)=>{const C=tt(g,i);s=s||Oi(E,C),o=o||Zn(E)});let l=t.syncPointTree_.get(i);l?(o=o||Zn(l),s=s||Oi(l,X())):(l=new GA,t.syncPointTree_=t.syncPointTree_.set(i,l));let u;s!=null?u=!0:(u=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((E,C)=>{const I=Oi(C,X());I&&(s=s.updateImmediateChild(E,I))}));const d=K0(l,e);if(!d&&!e._queryParams.loadsAllData()){const g=uu(e);R(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const E=cN();t.queryToTagMap.set(g,E),t.tagToQueryMap.set(E,g)}const m=_h(t.pendingWriteTree_,i);let p=XA(l,e,n,m,s,u);if(!d&&!o&&!r){const g=G0(l,e);p=p.concat(dN(t,e,g))}return p}function kh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=tt(o,e),d=Oi(l,u);if(d)return d});return j0(i,e,s,n,!0)}function Uo(t,e){return Q0(e,t.syncPointTree_,null,_h(t.pendingWriteTree_,X()))}function Q0(t,e,n,r){if(K(t.path))return J0(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=Oi(i,X()));let s=[];const o=q(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const d=n?n.getImmediateChild(o):null,m=z0(r,o);s=s.concat(Q0(l,u,d,m))}return i&&(s=s.concat(Ih(i,t,r,n))),s}}function J0(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=Oi(i,X()));let s=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,d=z0(r,o),m=t.operationForChild(o);m&&(s=s.concat(J0(m,l,u,d)))}),i&&(s=s.concat(Ih(i,t,r,n))),s}function X0(t,e){const n=e.query,r=Pl(t,n);return{hashFn:()=>(WA(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?sN(t,n._path,r):iN(t,n._path);{const s=oR(i,n);return zd(t,n,null,s)}}}}function Pl(t,e){const n=uu(e);return t.queryToTagMap.get(n)}function uu(t){return t._path.toString()+"$"+t._queryIdentifier}function Th(t,e){return t.tagToQueryMap.get(e)}function bh(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Ph(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=_h(t.pendingWriteTree_,e);return Ih(r,n,i,null)}function lN(t){return t.fold((e,n,r)=>{if(n&&Zn(n))return[au(n)];{let i=[];return n&&(i=q0(n)),lt(r,(s,o)=>{i=i.concat(o)}),i}})}function qs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tN())(t._repo,t._path):t}function uN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=uu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function cN(){return nN++}function dN(t,e,n){const r=e._path,i=Pl(t,e),s=X0(t,n),o=t.listenProvider_.startListening(qs(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!Zn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((d,m,p)=>{if(!K(d)&&m&&Zn(m))return[au(m).query];{let g=[];return m&&(g=g.concat(q0(m).map(E=>E.query))),lt(p,(E,C)=>{g=g.concat(C)}),g}});for(let d=0;d<u.length;++d){const m=u[d];t.listenProvider_.stopListening(qs(m),Pl(t,m))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xh(n)}node(){return this.node_}}class Rh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new Rh(this.syncTree_,n)}node(){return kh(this.syncTree_,this.path_)}}const fN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yv=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pN(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},pN=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},mN=function(t,e,n,r){return Ah(e,new Rh(n,t),r)},Z0=function(t,e,n){return Ah(t,new xh(e),n)};function Ah(t,e,n){const r=t.getPriority().val(),i=yv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=yv(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new xe(l,De(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(ve,(l,u)=>{const d=Ah(u,e.getImmediateChild(l),n);d!==u&&(s=s.updateImmediateChild(l,d))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Oh(t,e){let n=e instanceof re?e:new re(e),r=t,i=q(n);for(;i!==null;){const s=zi(r.node.children,i)||{children:{},childCount:0};r=new Nh(i,r,s),n=se(n),i=q(n)}return r}function ns(t){return t.node.value}function eE(t,e){t.node.value=e,Vd(t)}function tE(t){return t.node.childCount>0}function gN(t){return ns(t)===void 0&&!tE(t)}function cu(t,e){lt(t.node.children,(n,r)=>{e(new Nh(n,t,r))})}function nE(t,e,n,r){n&&!r&&e(t),cu(t,i=>{nE(i,e,!0,r)}),n&&r&&e(t)}function vN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Bo(t){return new re(t.parent===null?t.name:Bo(t.parent)+"/"+t.name)}function Vd(t){t.parent!==null&&yN(t.parent,t.name,t)}function yN(t,e,n){const r=gN(n),i=En(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=/[\[\].#$\/\u0000-\u001F\u007F]/,_N=/[\[\].#$\u0000-\u001F\u007F]/,_c=10*1024*1024,rE=function(t){return typeof t=="string"&&t.length!==0&&!wN.test(t)},iE=function(t){return typeof t=="string"&&t.length!==0&&!_N.test(t)},EN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iE(t)},CN=function(t,e,n,r){Lh(Qf(t,"value"),e,n)},Lh=function(t,e,n){const r=n instanceof re?new BR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Cr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Cr(r)+" with contents = "+e.toString());if(i0(e))throw new Error(t+"contains "+e.toString()+" "+Cr(r));if(typeof e=="string"&&e.length>_c/3&&Jl(e)>_c)throw new Error(t+"contains a string greater than "+_c+" utf8 bytes "+Cr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(lt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!rE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Cr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jR(r,o),Lh(t,l,r),zR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Cr(r)+" in addition to actual children.")}},sE=function(t,e,n,r){if(!iE(n))throw new Error(Qf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sE(t,e,n)},IN=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EN(n))throw new Error(Qf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function oE(t,e,n){Dh(t,n),aE(t,r=>hh(r,e))}function wn(t,e,n){Dh(t,n),aE(t,r=>Ot(r,e)||Ot(e,r))}function aE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(bN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Vs&&Ve("event: "+n.toString()),ts(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="repo_interrupt",xN=25;class RN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=El(),this.transactionQueueTree_=new Nh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AN(t,e,n){if(t.stats_=dh(t.repoInfo_),t.forceRestClient_||cR())t.server_=new _l(t.repoInfo_,(r,i,s,o)=>{wv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_v(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new fn(t.repoInfo_,e,(r,i,s,o)=>{wv(t,r,i,s,o)},r=>{_v(t,r)},r=>{ON(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=mR(t.repoInfo_,()=>new hA(t.stats_,t.server_)),t.infoData_=new lA,t.infoSyncTree_=new gv({startListening:(r,i,s,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=lu(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Fh(t,"connected",!1),t.serverSyncTree_=new gv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,u)=>{const d=o(l,u);wn(t.eventQueue_,r._path,d)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function NN(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mh(t){return fN({timestamp:NN(t)})}function wv(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=cl(n,d=>De(d));o=aN(t.serverSyncTree_,s,u,i)}else{const u=De(n);o=oN(t.serverSyncTree_,s,u,i)}else if(r){const u=cl(n,d=>De(d));o=rN(t.serverSyncTree_,s,u)}else{const u=De(n);o=lu(t.serverSyncTree_,s,u)}let l=s;o.length>0&&(l=du(t,s)),wn(t.eventQueue_,l,o)}function _v(t,e){Fh(t,"connected",e),e===!1&&DN(t)}function ON(t,e){lt(e,(n,r)=>{Fh(t,n,r)})}function Fh(t,e,n){const r=new re("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(r,i);const s=lu(t.infoSyncTree_,r,i);wn(t.eventQueue_,r,s)}function lE(t){return t.nextWriteId_++}function LN(t,e,n,r,i){Uh(t,"set",{path:e.toString(),value:n,priority:r});const s=Mh(t),o=De(n,r),l=kh(t.serverSyncTree_,e),u=Z0(o,l,s),d=lE(t),m=Y0(t.serverSyncTree_,e,u,d,!0);Dh(t.eventQueue_,m),t.server_.put(e.toString(),o.val(!0),(g,E)=>{const C=g==="ok";C||ot("set at "+e+" failed: "+g);const I=br(t.serverSyncTree_,d,!C);wn(t.eventQueue_,e,I),UN(t,i,g,E)});const p=hE(t,e);du(t,p),wn(t.eventQueue_,p,[])}function DN(t){Uh(t,"onDisconnectEvents");const e=Mh(t),n=El();Dd(t.onDisconnect_,X(),(i,s)=>{const o=mN(i,s,t.serverSyncTree_,e);D0(n,i,o)});let r=[];Dd(n,X(),(i,s)=>{r=r.concat(lu(t.serverSyncTree_,i,s));const o=hE(t,i);du(t,o)}),t.onDisconnect_=El(),wn(t.eventQueue_,X(),r)}function MN(t,e,n){let r;q(e._path)===".info"?r=vv(t.infoSyncTree_,e,n):r=vv(t.serverSyncTree_,e,n),oE(t.eventQueue_,e._path,r)}function Ev(t,e,n){let r;q(e._path)===".info"?r=zd(t.infoSyncTree_,e,n):r=zd(t.serverSyncTree_,e,n),oE(t.eventQueue_,e._path,r)}function FN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PN)}function Uh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function UN(t,e,n,r){e&&ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function uE(t,e,n){return kh(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function Bh(t,e=t.transactionQueueTree_){if(e||fu(t,e),ns(e)){const n=dE(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BN(t,Bo(e),n)}else tE(e)&&cu(e,n=>{Bh(t,n)})}function BN(t,e,n){const r=n.map(d=>d.currentWriteId),i=uE(t,e,r);let s=i;const o=i.hash();for(let d=0;d<n.length;d++){const m=n[d];R(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const p=tt(e,m.path);s=s.updateChild(p,m.currentOutputSnapshotRaw)}const l=s.val(!0),u=e;t.server_.put(u.toString(),l,d=>{Uh(t,"transaction put response",{path:u.toString(),status:d});let m=[];if(d==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,m=m.concat(br(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();fu(t,Oh(t.transactionQueueTree_,e)),Bh(t,t.transactionQueueTree_),wn(t.eventQueue_,e,m);for(let g=0;g<p.length;g++)ts(p[g])}else{if(d==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{ot("transaction at "+u.toString()+" failed: "+d);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=d}du(t,e)}},o)}function du(t,e){const n=cE(t,e),r=Bo(n),i=dE(t,n);return jN(t,i,r),r}function jN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],d=tt(n,u.path);let m=!1,p;if(R(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)m=!0,p=u.abortReason,i=i.concat(br(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=xN)m=!0,p="maxretry",i=i.concat(br(t.serverSyncTree_,u.currentWriteId,!0));else{const g=uE(t,u.path,o);u.currentInputSnapshot=g;const E=e[l].update(g.val());if(E!==void 0){Lh("transaction failed: Data returned ",E,u.path);let C=De(E);typeof E=="object"&&E!=null&&En(E,".priority")||(C=C.updatePriority(g.getPriority()));const P=u.currentWriteId,w=Mh(t),y=Z0(C,g,w);u.currentOutputSnapshotRaw=C,u.currentOutputSnapshotResolved=y,u.currentWriteId=lE(t),o.splice(o.indexOf(P),1),i=i.concat(Y0(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(br(t.serverSyncTree_,P,!0))}else m=!0,p="nodata",i=i.concat(br(t.serverSyncTree_,u.currentWriteId,!0))}wn(t.eventQueue_,n,i),i=[],m&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}fu(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ts(r[l]);Bh(t,t.transactionQueueTree_)}function cE(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&ns(r)===void 0;)r=Oh(r,n),e=se(e),n=q(e);return r}function dE(t,e){const n=[];return fE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function fE(t,e,n){const r=ns(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);cu(e,i=>{fE(t,i,n)})}function fu(t,e){const n=ns(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,eE(e,n.length>0?n:void 0)}cu(e,r=>{fu(t,r)})}function hE(t,e){const n=Bo(cE(t,e)),r=Oh(t.transactionQueueTree_,e);return vN(r,i=>{Ec(t,i)}),Ec(t,r),nE(r,i=>{Ec(t,i)}),n}function Ec(t,e){const n=ns(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(br(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?eE(e,void 0):n.length=s+1,wn(t.eventQueue_,Bo(e),i);for(let o=0;o<r.length;o++)ts(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function VN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cv=function(t,e){const n=WN(t),r=n.namespace;n.domain==="firebase.com"&&yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new g0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},WN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",u=443;if(typeof t=="string"){let d=t.indexOf("//");d>=0&&(l=t.substring(0,d-1),t=t.substring(d+2));let m=t.indexOf("/");m===-1&&(m=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(m,p)),m<p&&(i=zN(t.substring(m,p)));const g=VN(t.substring(Math.min(t.length,p)));d=e.indexOf(":"),d>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(d+1),10)):d=e.length;const E=e.slice(0,d);if(E.toLowerCase()==="localhost")n="localhost";else if(E.split(".").length<=2)n=E;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class $N{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:k0(this._path)}get ref(){return new ar(this._repo,this._path)}get _queryIdentifier(){const e=sv(this._queryParams),n=uh(e);return n==="{}"?"default":n}get _queryObject(){return sv(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof jh))return!1;const n=this._repo===e._repo,r=hh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+UR(this._path)}}class ar extends jh{constructor(e,n){super(e,n,new vh,!1)}get parent(){const e=b0(this._path);return e===null?null:new ar(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),r=Hd(this.ref,e);return new xl(this._node.getChild(n),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xl(i,Hd(this.ref,r),ve)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wd(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?Hd(t._root,e):t._root}function Hd(t,e){return t=$e(t),q(t._path)===null?SN("child","path",e):sE("child","path",e),new ar(t._repo,Te(t._path,e))}function GN(t,e){t=$e(t),IN("set",t._path),CN("set",e,t._path);const n=new Ql;return LN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class zh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new HN("value",this,new xl(e.snapshotNode,new ar(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $N(this,e,n):null}matches(e){return e instanceof zh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function KN(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const u=n,d=(m,p)=>{Ev(t._repo,t,l),u(m,p)};d.userCallback=n.userCallback,d.context=n.context,n=d}const o=new qN(n,s||void 0),l=new zh(o);return MN(t._repo,t,l),()=>Ev(t._repo,t,l)}function Sv(t,e,n,r){return KN(t,"value",e,n,r)}KA(ar);eN(ar);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="FIREBASE_DATABASE_EMULATOR_HOST",$d={};let QN=!1;function JN(t,e,n,r){t.repoInfo_=new g0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function XN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cv(s,i),l=o.repoInfo,u;typeof process<"u"&&zg&&(u=zg[YN]),u?(s=`http://${u}?ns=${l.namespace}`,o=Cv(s,i),l=o.repoInfo):o.repoInfo.secure;const d=new fR(t.name,t.options,e);kN("Invalid Firebase Database URL",o),K(o.path)||yn("Database URL must point to the root of a Firebase Database (not including a child path).");const m=eO(l,t,d,new dR(t.name,n));return new tO(m,t)}function ZN(t,e){const n=$d[e];(!n||n[t.key]!==t)&&yn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),FN(t),delete n[t.key]}function eO(t,e,n,r){let i=$d[e.name];i||(i={},$d[e.name]=i);let s=i[t.toURLString()];return s&&yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new RN(t,QN,n,r),i[t.toURLString()]=s,s}class tO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ar(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yn("Cannot call "+e+" on a deleted database.")}}function qd(t=Xf(),e){const n=Kr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=eb("database");r&&nO(n,...r)}return n}function nO(t,e,n,r={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Da(Da.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:tb(r.mockUserToken,t.app.options.projectId);s=new Da(o)}JN(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){Yx(Xi),Xt(new Bt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return XN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),kt(Vg,Wg,t),kt(Vg,Wg,"esm2017")}fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rO();function Iv(){const[t,e]=O.useState([]),[n,r]=O.useState(""),{login:i,salirPNG:s,handleCerrarSesion:o}=iu();return O.useEffect(()=>{(async()=>{const p=ru().currentUser;if(p){const g=qd();console.log("quien es ese hoooombre: ",p);const E=Wd(g,`usuarios/${p.uid}`);Sv(E,C=>{const I=C.val();r(I.nombre)},{onlyOnce:!0})}else console.log("Usuario no autenticado")})();const u=qd(),d=Wd(u,"productos/medias");return Sv(d,m=>{const p=m.val();if(p){const g=Object.keys(p).map(E=>({tipo:E,precio:p[E]}));e(g)}else e([])}),()=>{}},[]),x.jsxs(x.Fragment,{children:[x.jsxs("h2",{className:Es.saludo,children:["Hola, ",n,"!"]}),x.jsx("img",{src:s,alt:"Rayo",className:Es.imgsalir,onClick:o}),x.jsxs("div",{className:Es.contenedor,children:[x.jsx("h1",{children:"Inventario de Medias"}),x.jsx("div",{className:Es.listaMedias,children:t.map((l,u)=>x.jsxs("div",{className:Es.media,children:[x.jsx("h3",{children:l.tipo}),x.jsxs("p",{children:["Precio: $",l.precio,". pesos Arg"]}),x.jsx("button",{children:"Agregar al Carrito"})]},u))})]})]})}const iO="_parrafo_erl11_1",sO="_parrafo2_erl11_15",oO="_img_erl11_27",Cc={parrafo:iO,parrafo2:sO,img:oO};function aO(){const{login:t,rayo:e}=iu(),{mostrarAlerta:n}=O.useContext(lh),r=ru(),i=Yl(),[s,o]=O.useState({nombre:"",apellido:"",email:"",nombre_usuario:"",password:"",valida_password:"",telefono:"",codigo_postal:"",localidad:"",direccion:{calle:"",altura:""},carrito:{elementos:""}}),l=d=>{const{name:m,value:p}=d.target;o(m==="calle"||m==="altura"?g=>({...g,direccion:{...g.direccion,[m]:p}}):g=>({...g,[m]:p}))},u=()=>{const{nombre:d,apellido:m,email:p,nombre_usuario:g,password:E,valida_password:C,telefono:I,codigo_postal:P,localidad:w,direccion:y,carrito:_}=s;if(g===""||E===""||p===""){n("info_complete","Todos los campos son obligatorios");return}if(E!==C){n("error","Las contraseñas no coinciden");return}w2(r,p,E).then(T=>{const A=T.user,F=qd(),U=Wd(F,"usuarios/"+A.uid);console.log("cuantas veces pasamos por aca? "),console.log("userCredential: ",T),console.log("user ",A),GN(U,{nombre:d,apellido:m,email:p,nombre_usuario:g,telefono:I,codigo_postal:P,localidad:w,direccion:y,carrito:_}).then(()=>{n("success","Registro exitoso"),t(),i("/teenagekicks/home")}).catch(B=>{const Z=B.message;n("error",Z)})}).catch(T=>{const A=T.message;n("error",A)})};return x.jsxs(x.Fragment,{children:[x.jsx("img",{src:e,alt:"Rayo",className:Cc.img}),x.jsx("h3",{children:"Necesitamos tus datos para registrarte"}),x.jsxs("div",{className:Cc.parrafo,children:[x.jsx("p",{children:"es importante para que las medias"}),x.jsx("p",{className:Cc.parrafo2,children:"lleguen a tus patas"})]}),x.jsxs("div",{className:"contiene",children:[x.jsx("input",{type:"text",onChange:l,name:"nombre_usuario",placeholder:"Nombre de usuario*",value:s.nombre_usuario}),x.jsx("input",{type:"email",onChange:l,name:"email",placeholder:"Email*",value:s.email}),x.jsx("input",{type:"text",onChange:l,name:"nombre",placeholder:"Nombre",value:s.nombre}),x.jsx("input",{type:"text",onChange:l,name:"apellido",placeholder:"Apellido",value:s.apellido}),x.jsx("input",{type:"telephone",onChange:l,name:"telefono",placeholder:"Teléfono",value:s.telefono}),x.jsx("input",{type:"number",onChange:l,name:"codigo_postal",placeholder:"Código Postal",value:s.codigo_postal}),x.jsx("input",{type:"text",onChange:l,name:"localidad",placeholder:"Localidad",value:s.localidad}),x.jsx("input",{type:"text",onChange:l,name:"calle",placeholder:"Calle",value:s.direccion.calle}),x.jsx("input",{type:"number",onChange:l,name:"altura",placeholder:"Altura",value:s.direccion.altura}),x.jsx("input",{type:"password",onChange:l,name:"password",placeholder:"Contraseña*",value:s.password}),x.jsx("input",{type:"password",onChange:l,name:"valida_password",placeholder:"Confirma contraseña*",value:s.valida_password}),x.jsx("button",{onClick:u,children:"Registrarse"})]})]})}function lO(){return x.jsxs(x.Fragment,{children:[x.jsx("h3",{children:"items seleccinados"}),x.jsx("h3",{children:"coordina la forma de entrega"})]})}const uO=()=>{const{sesion:t}=iu();return console.log("estado de sesion: ",t),x.jsxs(P1,{children:[x.jsx(_r,{path:"/teenagekicks/",element:t?x.jsx(oi,{to:"/teenagekicks/login"}):x.jsx(jg,{})}),x.jsx(_r,{path:"/teenagekicks/login",element:t?x.jsx(oi,{to:"/teenagekicks/home"}):x.jsx(jg,{})}),x.jsx(_r,{path:"/teenagekicks/registrate",element:t?x.jsx(oi,{to:"/teenagekicks/home"}):x.jsx(aO,{})}),x.jsx(_r,{path:"/teenagekicks/home",element:t?x.jsx(Iv,{}):x.jsx(oi,{to:"/teenagekicks/login"})}),x.jsx(_r,{path:"/teenagekicks/inventario",element:t?x.jsx(Iv,{}):x.jsx(oi,{to:"/teenagekicks/login"})}),x.jsx(_r,{path:"/teenagekicks/carrito",element:t?x.jsx(lO,{}):x.jsx(oi,{to:"/teenagekicks/login"})})]})};var cO="firebase",dO="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(cO,dO,"app");const pE="@firebase/installations",Vh="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=1e4,gE=`w:${Vh}`,vE="FIS_v2",fO="https://firebaseinstallations.googleapis.com/v1",hO=60*60*1e3,pO="installations",mO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wr=new Gr(pO,mO,gO);function yE(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE({projectId:t}){return`${fO}/projects/${t}/installations`}function _E(t){return{token:t.token,requestStatus:2,expiresIn:yO(t.expiresIn),creationTime:Date.now()}}async function EE(t,e){const r=(await e.json()).error;return Wr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function CE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vO(t,{refreshToken:e}){const n=CE(t);return n.append("Authorization",wO(e)),n}async function SE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function yO(t){return Number(t.replace("s","000"))}function wO(t){return`${vE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=wE(t),i=CE(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:vE,appId:t.appId,sdkVersion:gE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await SE(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:_E(d.authToken)}}else throw await EE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=/^[cdef][\w-]{21}$/,Gd="";function SO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=IO(t);return CO.test(n)?n:Gd}catch{return Gd}}function IO(t){return EO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new Map;function TE(t,e){const n=hu(t);bE(n,e),kO(n,e)}function bE(t,e){const n=kE.get(t);if(n)for(const r of n)r(e)}function kO(t,e){const n=TO();n&&n.postMessage({key:t,fid:e}),bO()}let Pr=null;function TO(){return!Pr&&"BroadcastChannel"in self&&(Pr=new BroadcastChannel("[Firebase] FID Change"),Pr.onmessage=t=>{bE(t.data.key,t.data.fid)}),Pr}function bO(){kE.size===0&&Pr&&(Pr.close(),Pr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="firebase-installations-database",xO=1,Hr="firebase-installations-store";let Sc=null;function Wh(){return Sc||(Sc=g_(PO,xO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hr)}}})),Sc}async function Rl(t,e){const n=hu(t),i=(await Wh()).transaction(Hr,"readwrite"),s=i.objectStore(Hr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&TE(t,e.fid),e}async function PE(t){const e=hu(t),r=(await Wh()).transaction(Hr,"readwrite");await r.objectStore(Hr).delete(e),await r.done}async function pu(t,e){const n=hu(t),i=(await Wh()).transaction(Hr,"readwrite"),s=i.objectStore(Hr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&TE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t){let e;const n=await pu(t.appConfig,r=>{const i=RO(r),s=AO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Gd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function RO(t){const e=t||{fid:SO(),registrationStatus:0};return xE(e)}function AO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:OO(t)}:{installationEntry:e}}async function NO(t,e){try{const n=await _O(t,e);return Rl(t.appConfig,n)}catch(n){throw yE(n)&&n.customData.serverCode===409?await PE(t.appConfig):await Rl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function OO(t){let e=await kv(t.appConfig);for(;e.registrationStatus===1;)await IE(100),e=await kv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hh(t);return r||n}return e}function kv(t){return pu(t,e=>{if(!e)throw Wr.create("installation-not-found");return xE(e)})}function xE(t){return LO(t)?{fid:t.fid,registrationStatus:0}:t}function LO(t){return t.registrationStatus===1&&t.registrationTime+mE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO({appConfig:t,heartbeatServiceProvider:e},n){const r=MO(t,n),i=vO(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:gE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await SE(()=>fetch(r,l));if(u.ok){const d=await u.json();return _E(d)}else throw await EE("Generate Auth Token",u)}function MO(t,{fid:e}){return`${wE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $h(t,e=!1){let n;const r=await pu(t.appConfig,s=>{if(!RE(s))throw Wr.create("not-registered");const o=s.authToken;if(!e&&BO(o))return s;if(o.requestStatus===1)return n=FO(t,e),s;{if(!navigator.onLine)throw Wr.create("app-offline");const l=zO(s);return n=UO(t,l),l}});return n?await n:r.authToken}async function FO(t,e){let n=await Tv(t.appConfig);for(;n.authToken.requestStatus===1;)await IE(100),n=await Tv(t.appConfig);const r=n.authToken;return r.requestStatus===0?$h(t,e):r}function Tv(t){return pu(t,e=>{if(!RE(e))throw Wr.create("not-registered");const n=e.authToken;return VO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function UO(t,e){try{const n=await DO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Rl(t.appConfig,r),n}catch(n){if(yE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await PE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rl(t.appConfig,r)}throw n}}function RE(t){return t!==void 0&&t.registrationStatus===2}function BO(t){return t.requestStatus===2&&!jO(t)}function jO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hO}function zO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VO(t){return t.requestStatus===1&&t.requestTime+mE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hh(e);return r?r.catch(console.error):$h(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e=!1){const n=t;return await $O(n),(await $h(n,e)).token}async function $O(t){const{registrationPromise:e}=await Hh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t){if(!t||!t.options)throw Ic("App Configuration");if(!t.name)throw Ic("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ic(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ic(t){return Wr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="installations",GO="installations-internal",KO=t=>{const e=t.getProvider("app").getImmediate(),n=qO(e),r=Kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YO=t=>{const e=t.getProvider("app").getImmediate(),n=Kr(e,AE).getImmediate();return{getId:()=>WO(n),getToken:i=>HO(n,i)}};function QO(){Xt(new Bt(AE,KO,"PUBLIC")),Xt(new Bt(GO,YO,"PRIVATE"))}QO();kt(pE,Vh);kt(pE,Vh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="analytics",JO="firebase_id",XO="origin",ZO=60*1e3,eL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Xl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mt=new Gr("analytics","Analytics",tL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){if(!t.startsWith(qh)){const e=mt.create("invalid-gtag-resource",{gtagURL:t});return at.warn(e.message),""}return t}function NE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function rL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function iL(t,e){const n=rL("firebase-js-sdk-policy",{createScriptURL:nL}),r=document.createElement("script"),i=`${qh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function sL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function oL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await NE(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){at.error(l)}t("config",i,s)}async function aL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await NE(n);for(const u of o){const d=l.find(p=>p.measurementId===u),m=d&&e[d.appId];if(m)s.push(m);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){at.error(s)}}function lL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await aL(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await oL(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){at.error(l)}}return i}function uL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=lL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function cL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(qh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL=30,fL=1e3;class hL{constructor(e={},n=fL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const OE=new hL;function pL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function mL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:pL(r)},s=eL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function gL(t,e=OE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw mt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw mt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new wL;return setTimeout(async()=>{l.abort()},ZO),LE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function LE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=OE){var s;const{appId:o,measurementId:l}=t;try{await vL(r,e)}catch(u){if(l)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await mL(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!yL(d)){if(i.deleteThrottleMetadata(o),l)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const m=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?dg(n,i.intervalMillis,dL):dg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return i.setThrottleMetadata(o,p),at.debug(`Calling attemptFetch again in ${m} millis`),LE(t,p,r,i)}}function vL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yL(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _L(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EL(){if(d_())try{await f_()}catch(t){return at.warn(mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return at.warn(mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CL(t,e,n,r,i,s,o){var l;const u=gL(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>at.error(E)),e.push(u);const d=EL().then(E=>{if(E)return r.getId()}),[m,p]=await Promise.all([u,d]);cL(s)||iL(s,m.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[XO]="firebase",g.update=!0,p!=null&&(g[JO]=p),i("config",m.measurementId,g),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.app=e}_delete(){return delete Gs[this.app.options.appId],Promise.resolve()}}let Gs={},bv=[];const Pv={};let kc="dataLayer",IL="gtag",xv,DE,Rv=!1;function kL(){const t=[];if(l_()&&t.push("This is a browser extension environment."),rb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=mt.create("invalid-analytics-context",{errorInfo:e});at.warn(n.message)}}function TL(t,e,n){kL();const r=t.options.appId;if(!r)throw mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mt.create("no-api-key");if(Gs[r]!=null)throw mt.create("already-exists",{id:r});if(!Rv){sL(kc);const{wrappedGtag:s,gtagCore:o}=uL(Gs,bv,Pv,kc,IL);DE=s,xv=o,Rv=!0}return Gs[r]=CL(t,bv,Pv,e,xv,kc,n),new SL(t)}function bL(t=Xf()){t=$e(t);const e=Kr(t,Al);return e.isInitialized()?e.getImmediate():PL(t)}function PL(t,e={}){const n=Kr(t,Al);if(n.isInitialized()){const i=n.getImmediate();if(mo(e,n.getOptions()))return i;throw mt.create("already-initialized")}return n.initialize({options:e})}function xL(t,e,n,r){t=$e(t),_L(DE,Gs[t.app.options.appId],e,n,r).catch(i=>at.error(i))}const Av="@firebase/analytics",Nv="0.10.4";function RL(){Xt(new Bt(Al,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return TL(r,i,n)},"PUBLIC")),Xt(new Bt("analytics-internal",t,"PRIVATE")),kt(Av,Nv),kt(Av,Nv,"esm2017");function t(e){try{const n=e.getProvider(Al).getImmediate();return{logEvent:(r,i,s)=>xL(n,r,i,s)}}catch(n){throw mt.create("interop-component-reg-failed",{reason:n})}}}RL();const AL={apiKey:"AIzaSyDZytsINVMTyPEs2VCkX1WqCjmmYCalqNA",authDomain:"virtua-feria.firebaseapp.com",databaseURL:"https://virtua-feria-default-rtdb.firebaseio.com",projectId:"virtua-feria",storageBucket:"virtua-feria.appspot.com",messagingSenderId:"730472869715",appId:"1:730472869715:web:30a7af802079604b233ba6",measurementId:"G-PWSQCTP3Q5"},NL=v_(AL);bL(NL);function OL(){return x.jsx(D1,{children:x.jsx(Ux,{children:x.jsx(zx,{children:x.jsx($1,{children:x.jsx(uO,{})})})})})}Tc.createRoot(document.getElementById("root")).render(x.jsx(OL,{}));

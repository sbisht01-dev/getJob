function yR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var FE={exports:{}},mc={},UE={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),ER=Symbol.for("react.portal"),wR=Symbol.for("react.fragment"),TR=Symbol.for("react.strict_mode"),IR=Symbol.for("react.profiler"),SR=Symbol.for("react.provider"),CR=Symbol.for("react.context"),RR=Symbol.for("react.forward_ref"),AR=Symbol.for("react.suspense"),PR=Symbol.for("react.memo"),kR=Symbol.for("react.lazy"),y_=Symbol.iterator;function NR(t){return t===null||typeof t!="object"?null:(t=y_&&t[y_]||t["@@iterator"],typeof t=="function"?t:null)}var BE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jE=Object.assign,zE={};function bs(t,e,n){this.props=t,this.context=e,this.refs=zE,this.updater=n||BE}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $E(){}$E.prototype=bs.prototype;function Xf(t,e,n){this.props=t,this.context=e,this.refs=zE,this.updater=n||BE}var Jf=Xf.prototype=new $E;Jf.constructor=Xf;jE(Jf,bs.prototype);Jf.isPureReactComponent=!0;var v_=Array.isArray,WE=Object.prototype.hasOwnProperty,Zf={current:null},HE={key:!0,ref:!0,__self:!0,__source:!0};function qE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)WE.call(e,r)&&!HE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ma,type:t,key:s,ref:o,props:i,_owner:Zf.current}}function OR(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function xR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var E_=/\/+/g;function Ph(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xR(""+t.key):e.toString(36)}function Wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case ER:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ph(o,0):r,v_(i)?(n="",t!=null&&(n=t.replace(E_,"$&/")+"/"),Wl(i,e,n,"",function(c){return c})):i!=null&&(ep(i)&&(i=OR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(E_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",v_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ph(s,a);o+=Wl(s,e,n,u,i)}else if(u=NR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ph(s,a++),o+=Wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function El(t,e,n){if(t==null)return t;var r=[],i=0;return Wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},Hl={transition:null},LR={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Zf};function GE(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:El,forEach:function(t,e,n){El(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=bs;ie.Fragment=wR;ie.Profiler=IR;ie.PureComponent=Xf;ie.StrictMode=TR;ie.Suspense=AR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LR;ie.act=GE;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)WE.call(e,u)&&!HE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ma,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:CR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:SR,_context:t},t.Consumer=t};ie.createElement=qE;ie.createFactory=function(t){var e=qE.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:RR,render:t}};ie.isValidElement=ep;ie.lazy=function(t){return{$$typeof:kR,_payload:{_status:-1,_result:t},_init:DR}};ie.memo=function(t,e){return{$$typeof:PR,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};ie.unstable_act=GE;ie.useCallback=function(t,e){return wt.current.useCallback(t,e)};ie.useContext=function(t){return wt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return wt.current.useEffect(t,e)};ie.useId=function(){return wt.current.useId()};ie.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return wt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};ie.useRef=function(t){return wt.current.useRef(t)};ie.useState=function(t){return wt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return wt.current.useTransition()};ie.version="18.3.1";UE.exports=ie;var $=UE.exports;const KE=vR($),MR=yR({__proto__:null,default:KE},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bR=$,VR=Symbol.for("react.element"),FR=Symbol.for("react.fragment"),UR=Object.prototype.hasOwnProperty,BR=bR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jR={key:!0,ref:!0,__self:!0,__source:!0};function QE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UR.call(e,r)&&!jR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VR,type:t,key:s,ref:o,props:i,_owner:BR.current}}mc.Fragment=FR;mc.jsx=QE;mc.jsxs=QE;FE.exports=mc;var ee=FE.exports,vd={},YE={exports:{}},Ut={},XE={exports:{}},JE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,z){var J=j.length;j.push(z);e:for(;0<J;){var ve=J-1>>>1,fe=j[ve];if(0<i(fe,z))j[ve]=z,j[J]=fe,J=ve;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var z=j[0],J=j.pop();if(J!==z){j[0]=J;e:for(var ve=0,fe=j.length,xe=fe>>>1;ve<xe;){var Sn=2*(ve+1)-1,Cn=j[Sn],Rn=Sn+1,An=j[Rn];if(0>i(Cn,J))Rn<fe&&0>i(An,Cn)?(j[ve]=An,j[Rn]=J,ve=Rn):(j[ve]=Cn,j[Sn]=J,ve=Sn);else if(Rn<fe&&0>i(An,J))j[ve]=An,j[Rn]=J,ve=Rn;else break e}}return z}function i(j,z){var J=j.sortIndex-z.sortIndex;return J!==0?J:j.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,y=!1,R=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(j){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=j)r(c),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(c)}}function D(j){if(P=!1,C(j),!R)if(n(u)!==null)R=!0,$r(F);else{var z=n(c);z!==null&&Qt(D,z.startTime-j)}}function F(j,z){R=!1,P&&(P=!1,T(_),_=-1),y=!0;var J=m;try{for(C(z),f=n(u);f!==null&&(!(f.expirationTime>z)||j&&!A());){var ve=f.callback;if(typeof ve=="function"){f.callback=null,m=f.priorityLevel;var fe=ve(f.expirationTime<=z);z=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(u)&&r(u),C(z)}else r(u);f=n(u)}if(f!==null)var xe=!0;else{var Sn=n(c);Sn!==null&&Qt(D,Sn.startTime-z),xe=!1}return xe}finally{f=null,m=J,y=!1}}var U=!1,w=null,_=-1,E=5,I=-1;function A(){return!(t.unstable_now()-I<E)}function k(){if(w!==null){var j=t.unstable_now();I=j;var z=!0;try{z=w(!0,j)}finally{z?S():(U=!1,w=null)}}else U=!1}var S;if(typeof v=="function")S=function(){v(k)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,In=It.port2;It.port1.onmessage=k,S=function(){In.postMessage(null)}}else S=function(){O(k,0)};function $r(j){w=j,U||(U=!0,S())}function Qt(j,z){_=O(function(){j(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){R||y||(R=!0,$r(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var J=m;m=z;try{return j()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var J=m;m=j;try{return z()}finally{m=J}},t.unstable_scheduleCallback=function(j,z,J){var ve=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,j){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,j={id:d++,callback:z,priorityLevel:j,startTime:J,expirationTime:fe,sortIndex:-1},J>ve?(j.sortIndex=J,e(c,j),n(u)===null&&j===n(c)&&(P?(T(_),_=-1):P=!0,Qt(D,J-ve))):(j.sortIndex=fe,e(u,j),R||y||(R=!0,$r(F))),j},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(j){var z=m;return function(){var J=m;m=z;try{return j.apply(this,arguments)}finally{m=J}}}})(JE);XE.exports=JE;var zR=XE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $R=$,Ft=zR;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ZE=new Set,Xo={};function Ai(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(Xo[t]=e,t=0;t<e.length;t++)ZE.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,WR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w_={},T_={};function HR(t){return Ed.call(T_,t)?!0:Ed.call(w_,t)?!1:WR.test(t)?T_[t]=!0:(w_[t]=!0,!1)}function qR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GR(t,e,n,r){if(e===null||typeof e>"u"||qR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tp=/[\-:]([a-z])/g;function np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tp,np);tt[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tp,np);tt[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tp,np);tt[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GR(e,n,i,r)&&(n=null),r||i===null?HR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=$R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),Wi=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),e0=Symbol.for("react.provider"),t0=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Id=Symbol.for("react.suspense_list"),op=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),n0=Symbol.for("react.offscreen"),I_=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=I_&&t[I_]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,kh;function So(t){if(kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kh=e&&e[1]||""}return`
`+kh+t}var Nh=!1;function Oh(t,e){if(!t||Nh)return"";Nh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Nh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function KR(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Oh(t.type,!1),t;case 11:return t=Oh(t.type.render,!1),t;case 1:return t=Oh(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hi:return"Fragment";case Wi:return"Portal";case wd:return"Profiler";case ip:return"StrictMode";case Td:return"Suspense";case Id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case t0:return(t.displayName||"Context")+".Consumer";case e0:return(t._context.displayName||"Context")+".Provider";case sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case op:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function QR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YR(t){var e=r0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=YR(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=r0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function S_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s0(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function Rd(t,e){s0(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ad(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function C_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ad(t,e,n){(e!=="number"||du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Co(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function o0(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function A_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Il,l0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XR=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){XR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function u0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function c0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=u0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JR=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(t,e){if(e){if(JR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dd=null,ss=null,os=null;function P_(t){if(t=Fa(t)){if(typeof Dd!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ec(e),Dd(t.stateNode,t.type,e))}}function h0(t){ss?os?os.push(t):os=[t]:ss=t}function d0(){if(ss){var t=ss,e=os;if(os=ss=null,P_(t),e)for(t=0;t<e.length;t++)P_(e[t])}}function f0(t,e){return t(e)}function p0(){}var xh=!1;function m0(t,e,n){if(xh)return t(e,n);xh=!0;try{return f0(t,e,n)}finally{xh=!1,(ss!==null||os!==null)&&(p0(),d0())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ec(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Ld=!1;if(Wn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Ld=!1}function ZR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Do=!1,fu=null,pu=!1,Md=null,eA={onError:function(t){Do=!0,fu=t}};function tA(t,e,n,r,i,s,o,a,u){Do=!1,fu=null,ZR.apply(eA,arguments)}function nA(t,e,n,r,i,s,o,a,u){if(tA.apply(this,arguments),Do){if(Do){var c=fu;Do=!1,fu=null}else throw Error(b(198));pu||(pu=!0,Md=c)}}function Pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function k_(t){if(Pi(t)!==t)throw Error(b(188))}function rA(t){var e=t.alternate;if(!e){if(e=Pi(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return k_(i),t;if(s===r)return k_(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function _0(t){return t=rA(t),t!==null?y0(t):null}function y0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y0(t);if(e!==null)return e;t=t.sibling}return null}var v0=Ft.unstable_scheduleCallback,N_=Ft.unstable_cancelCallback,iA=Ft.unstable_shouldYield,sA=Ft.unstable_requestPaint,De=Ft.unstable_now,oA=Ft.unstable_getCurrentPriorityLevel,lp=Ft.unstable_ImmediatePriority,E0=Ft.unstable_UserBlockingPriority,mu=Ft.unstable_NormalPriority,aA=Ft.unstable_LowPriority,w0=Ft.unstable_IdlePriority,gc=null,pn=null;function lA(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:hA,uA=Math.log,cA=Math.LN2;function hA(t){return t>>>=0,t===0?32:31-(uA(t)/cA|0)|0}var Sl=64,Cl=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ro(a):(s&=o,s!==0&&(r=Ro(s)))}else o=n&~i,o!==0?r=Ro(o):s!==0&&(r=Ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function dA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=dA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function T0(){var t=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),t}function Dh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function pA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function I0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var S0,cp,C0,R0,A0,Vd=!1,Rl=[],yr=null,vr=null,Er=null,ea=new Map,ta=new Map,ur=[],mA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function O_(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function fo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fa(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gA(t,e,n,r,i){switch(e){case"focusin":return yr=fo(yr,t,e,n,r,i),!0;case"dragenter":return vr=fo(vr,t,e,n,r,i),!0;case"mouseover":return Er=fo(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ea.set(s,fo(ea.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ta.set(s,fo(ta.get(s)||null,t,e,n,r,i)),!0}return!1}function P0(t){var e=Jr(t.target);if(e!==null){var n=Pi(e);if(n!==null){if(e=n.tag,e===13){if(e=g0(n),e!==null){t.blockedOn=e,A0(t.priority,function(){C0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xd=r,n.target.dispatchEvent(r),xd=null}else return e=Fa(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function x_(t,e,n){ql(t)&&n.delete(e)}function _A(){Vd=!1,yr!==null&&ql(yr)&&(yr=null),vr!==null&&ql(vr)&&(vr=null),Er!==null&&ql(Er)&&(Er=null),ea.forEach(x_),ta.forEach(x_)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,Vd||(Vd=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,_A)))}function na(t){function e(i){return po(i,t)}if(0<Rl.length){po(Rl[0],t);for(var n=1;n<Rl.length;n++){var r=Rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&po(yr,t),vr!==null&&po(vr,t),Er!==null&&po(Er,t),ea.forEach(e),ta.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)P0(n),n.blockedOn===null&&ur.shift()}var as=Jn.ReactCurrentBatchConfig,_u=!0;function yA(t,e,n,r){var i=de,s=as.transition;as.transition=null;try{de=1,hp(t,e,n,r)}finally{de=i,as.transition=s}}function vA(t,e,n,r){var i=de,s=as.transition;as.transition=null;try{de=4,hp(t,e,n,r)}finally{de=i,as.transition=s}}function hp(t,e,n,r){if(_u){var i=Fd(t,e,n,r);if(i===null)$h(t,e,r,yu,n),O_(t,r);else if(gA(i,t,e,n,r))r.stopPropagation();else if(O_(t,r),e&4&&-1<mA.indexOf(t)){for(;i!==null;){var s=Fa(i);if(s!==null&&S0(s),s=Fd(t,e,n,r),s===null&&$h(t,e,r,yu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $h(t,e,r,null,n)}}var yu=null;function Fd(t,e,n,r){if(yu=null,t=ap(r),t=Jr(t),t!==null)if(e=Pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=g0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oA()){case lp:return 1;case E0:return 4;case mu:case aA:return 16;case w0:return 536870912;default:return 16}default:return 16}}var pr=null,dp=null,Gl=null;function N0(){if(Gl)return Gl;var t,e=dp,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function D_(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Al:D_,this.isPropagationStopped=D_,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=Bt(Vs),Va=Ae({},Vs,{view:0,detail:0}),EA=Bt(Va),Lh,Mh,mo,_c=Ae({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Lh=t.screenX-mo.screenX,Mh=t.screenY-mo.screenY):Mh=Lh=0,mo=t),Lh)},movementY:function(t){return"movementY"in t?t.movementY:Mh}}),L_=Bt(_c),wA=Ae({},_c,{dataTransfer:0}),TA=Bt(wA),IA=Ae({},Va,{relatedTarget:0}),bh=Bt(IA),SA=Ae({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),CA=Bt(SA),RA=Ae({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AA=Bt(RA),PA=Ae({},Vs,{data:0}),M_=Bt(PA),kA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OA[t])?!!e[t]:!1}function pp(){return xA}var DA=Ae({},Va,{key:function(t){if(t.key){var e=kA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LA=Bt(DA),MA=Ae({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b_=Bt(MA),bA=Ae({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),VA=Bt(bA),FA=Ae({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),UA=Bt(FA),BA=Ae({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jA=Bt(BA),zA=[9,13,27,32],mp=Wn&&"CompositionEvent"in window,Lo=null;Wn&&"documentMode"in document&&(Lo=document.documentMode);var $A=Wn&&"TextEvent"in window&&!Lo,O0=Wn&&(!mp||Lo&&8<Lo&&11>=Lo),V_=" ",F_=!1;function x0(t,e){switch(t){case"keyup":return zA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function WA(t,e){switch(t){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:(F_=!0,V_);case"textInput":return t=e.data,t===V_&&F_?null:t;default:return null}}function HA(t,e){if(qi)return t==="compositionend"||!mp&&x0(t,e)?(t=N0(),Gl=dp=pr=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var qA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qA[t.type]:e==="textarea"}function L0(t,e,n,r){h0(r),e=vu(e,"onChange"),0<e.length&&(n=new fp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mo=null,ra=null;function GA(t){H0(t,0)}function yc(t){var e=Qi(t);if(i0(e))return t}function KA(t,e){if(t==="change")return e}var M0=!1;if(Wn){var Vh;if(Wn){var Fh="oninput"in document;if(!Fh){var B_=document.createElement("div");B_.setAttribute("oninput","return;"),Fh=typeof B_.oninput=="function"}Vh=Fh}else Vh=!1;M0=Vh&&(!document.documentMode||9<document.documentMode)}function j_(){Mo&&(Mo.detachEvent("onpropertychange",b0),ra=Mo=null)}function b0(t){if(t.propertyName==="value"&&yc(ra)){var e=[];L0(e,ra,t,ap(t)),m0(GA,e)}}function QA(t,e,n){t==="focusin"?(j_(),Mo=e,ra=n,Mo.attachEvent("onpropertychange",b0)):t==="focusout"&&j_()}function YA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(ra)}function XA(t,e){if(t==="click")return yc(e)}function JA(t,e){if(t==="input"||t==="change")return yc(e)}function ZA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:ZA;function ia(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ed.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function z_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $_(t,e){var n=z_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=z_(n)}}function V0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?V0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F0(){for(var t=window,e=du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=du(t.document)}return e}function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function e1(t){var e=F0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&V0(n.ownerDocument.documentElement,n)){if(r!==null&&gp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$_(n,s);var o=$_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t1=Wn&&"documentMode"in document&&11>=document.documentMode,Gi=null,Ud=null,bo=null,Bd=!1;function W_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||Gi==null||Gi!==du(r)||(r=Gi,"selectionStart"in r&&gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&ia(bo,r)||(bo=r,r=vu(Ud,"onSelect"),0<r.length&&(e=new fp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gi)))}function Pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ki={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Uh={},U0={};Wn&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function vc(t){if(Uh[t])return Uh[t];if(!Ki[t])return t;var e=Ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in U0)return Uh[t]=e[n];return t}var B0=vc("animationend"),j0=vc("animationiteration"),z0=vc("animationstart"),$0=vc("transitionend"),W0=new Map,H_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){W0.set(t,e),Ai(e,[t])}for(var Bh=0;Bh<H_.length;Bh++){var jh=H_[Bh],n1=jh.toLowerCase(),r1=jh[0].toUpperCase()+jh.slice(1);Ur(n1,"on"+r1)}Ur(B0,"onAnimationEnd");Ur(j0,"onAnimationIteration");Ur(z0,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur($0,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function q_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nA(r,e,void 0,t),t.currentTarget=null}function H0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;q_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;q_(i,a,c),s=u}}}if(pu)throw t=Md,pu=!1,Md=null,t}function we(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var r=t+"__bubble";n.has(r)||(q0(e,t,2,!1),n.add(r))}function zh(t,e,n){var r=0;e&&(r|=4),q0(n,t,r,e)}var kl="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[kl]){t[kl]=!0,ZE.forEach(function(n){n!=="selectionchange"&&(i1.has(n)||zh(n,!1,t),zh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kl]||(e[kl]=!0,zh("selectionchange",!1,e))}}function q0(t,e,n,r){switch(k0(e)){case 1:var i=yA;break;case 4:i=vA;break;default:i=hp}n=i.bind(null,e,n,t),i=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $h(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}m0(function(){var c=s,d=ap(n),f=[];e:{var m=W0.get(t);if(m!==void 0){var y=fp,R=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":y=LA;break;case"focusin":R="focus",y=bh;break;case"focusout":R="blur",y=bh;break;case"beforeblur":case"afterblur":y=bh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=L_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=TA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=VA;break;case B0:case j0:case z0:y=CA;break;case $0:y=UA;break;case"scroll":y=EA;break;case"wheel":y=jA;break;case"copy":case"cut":case"paste":y=AA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=b_}var P=(e&4)!==0,O=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,C;v!==null;){C=v;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,T!==null&&(D=Zo(v,T),D!=null&&P.push(oa(v,D,C)))),O)break;v=v.return}0<P.length&&(m=new y(m,R,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==xd&&(R=n.relatedTarget||n.fromElement)&&(Jr(R)||R[Hn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(R=n.relatedTarget||n.toElement,y=c,R=R?Jr(R):null,R!==null&&(O=Pi(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(y=null,R=c),y!==R)){if(P=L_,D="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=b_,D="onPointerLeave",T="onPointerEnter",v="pointer"),O=y==null?m:Qi(y),C=R==null?m:Qi(R),m=new P(D,v+"leave",y,n,d),m.target=O,m.relatedTarget=C,D=null,Jr(d)===c&&(P=new P(T,v+"enter",R,n,d),P.target=C,P.relatedTarget=O,D=P),O=D,y&&R)t:{for(P=y,T=R,v=0,C=P;C;C=Fi(C))v++;for(C=0,D=T;D;D=Fi(D))C++;for(;0<v-C;)P=Fi(P),v--;for(;0<C-v;)T=Fi(T),C--;for(;v--;){if(P===T||T!==null&&P===T.alternate)break t;P=Fi(P),T=Fi(T)}P=null}else P=null;y!==null&&G_(f,m,y,P,!1),R!==null&&O!==null&&G_(f,O,R,P,!0)}}e:{if(m=c?Qi(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var F=KA;else if(U_(m))if(M0)F=JA;else{F=YA;var U=QA}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=XA);if(F&&(F=F(t,c))){L0(f,F,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Ad(m,"number",m.value)}switch(U=c?Qi(c):window,t){case"focusin":(U_(U)||U.contentEditable==="true")&&(Gi=U,Ud=c,bo=null);break;case"focusout":bo=Ud=Gi=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,W_(f,n,d);break;case"selectionchange":if(t1)break;case"keydown":case"keyup":W_(f,n,d)}var w;if(mp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else qi?x0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(O0&&n.locale!=="ko"&&(qi||_!=="onCompositionStart"?_==="onCompositionEnd"&&qi&&(w=N0()):(pr=d,dp="value"in pr?pr.value:pr.textContent,qi=!0)),U=vu(c,_),0<U.length&&(_=new M_(_,t,null,n,d),f.push({event:_,listeners:U}),w?_.data=w:(w=D0(n),w!==null&&(_.data=w)))),(w=$A?WA(t,n):HA(t,n))&&(c=vu(c,"onBeforeInput"),0<c.length&&(d=new M_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}H0(f,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zo(t,n),s!=null&&r.unshift(oa(t,s,i)),s=Zo(t,e),s!=null&&r.push(oa(t,s,i))),t=t.return}return r}function Fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function G_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Zo(n,s),u!=null&&o.unshift(oa(n,u,a))):i||(u=Zo(n,s),u!=null&&o.push(oa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var s1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function K_(t){return(typeof t=="string"?t:""+t).replace(s1,`
`).replace(o1,"")}function Nl(t,e,n){if(e=K_(e),K_(t)!==e&&n)throw Error(b(425))}function Eu(){}var jd=null,zd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,a1=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(t){return Q_.resolve(null).then(t).catch(u1)}:Wd;function u1(t){setTimeout(function(){throw t})}function Wh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);na(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Y_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),fn="__reactFiber$"+Fs,aa="__reactProps$"+Fs,Hn="__reactContainer$"+Fs,Hd="__reactEvents$"+Fs,c1="__reactListeners$"+Fs,h1="__reactHandles$"+Fs;function Jr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Y_(t);t!==null;){if(n=t[fn])return n;t=Y_(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[fn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ec(t){return t[aa]||null}var qd=[],Yi=-1;function Br(t){return{current:t}}function Ie(t){0>Yi||(t.current=qd[Yi],qd[Yi]=null,Yi--)}function _e(t,e){Yi++,qd[Yi]=t.current,t.current=e}var xr={},pt=Br(xr),kt=Br(!1),hi=xr;function ys(t,e){var n=t.type.contextTypes;if(!n)return xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function wu(){Ie(kt),Ie(pt)}function X_(t,e,n){if(pt.current!==xr)throw Error(b(168));_e(pt,e),_e(kt,n)}function G0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,QR(t)||"Unknown",i));return Ae({},n,r)}function Tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,hi=pt.current,_e(pt,t),_e(kt,kt.current),!0}function J_(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=G0(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,Ie(kt),Ie(pt),_e(pt,t)):Ie(kt),_e(kt,n)}var xn=null,wc=!1,Hh=!1;function K0(t){xn===null?xn=[t]:xn.push(t)}function d1(t){wc=!0,K0(t)}function jr(){if(!Hh&&xn!==null){Hh=!0;var t=0,e=de;try{var n=xn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,wc=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),v0(lp,jr),i}finally{de=e,Hh=!1}}return null}var Xi=[],Ji=0,Iu=null,Su=0,jt=[],zt=0,di=null,Ln=1,Mn="";function Kr(t,e){Xi[Ji++]=Su,Xi[Ji++]=Iu,Iu=t,Su=e}function Q0(t,e,n){jt[zt++]=Ln,jt[zt++]=Mn,jt[zt++]=di,di=t;var r=Ln;t=Mn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-on(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function _p(t){t.return!==null&&(Kr(t,1),Q0(t,1,0))}function yp(t){for(;t===Iu;)Iu=Xi[--Ji],Xi[Ji]=null,Su=Xi[--Ji],Xi[Ji]=null;for(;t===di;)di=jt[--zt],jt[zt]=null,Mn=jt[--zt],jt[zt]=null,Ln=jt[--zt],jt[zt]=null}var bt=null,Mt=null,Se=!1,en=null;function Y0(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Z_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Mt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Mt=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(Se){var e=Mt;if(e){var n=e;if(!Z_(t,e)){if(Gd(t))throw Error(b(418));e=wr(n.nextSibling);var r=bt;e&&Z_(t,e)?Y0(r,n):(t.flags=t.flags&-4097|2,Se=!1,bt=t)}}else{if(Gd(t))throw Error(b(418));t.flags=t.flags&-4097|2,Se=!1,bt=t}}}function ey(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function Ol(t){if(t!==bt)return!1;if(!Se)return ey(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=Mt)){if(Gd(t))throw X0(),Error(b(418));for(;e;)Y0(t,e),e=wr(e.nextSibling)}if(ey(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=bt?wr(t.stateNode.nextSibling):null;return!0}function X0(){for(var t=Mt;t;)t=wr(t.nextSibling)}function vs(){Mt=bt=null,Se=!1}function vp(t){en===null?en=[t]:en.push(t)}var f1=Jn.ReactCurrentBatchConfig;function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function xl(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ty(t){var e=t._init;return e(t._payload)}function J0(t){function e(T,v){if(t){var C=T.deletions;C===null?(T.deletions=[v],T.flags|=16):C.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=Cr(T,v),T.index=0,T.sibling=null,T}function s(T,v,C){return T.index=C,t?(C=T.alternate,C!==null?(C=C.index,C<v?(T.flags|=2,v):C):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,v,C,D){return v===null||v.tag!==6?(v=Jh(C,T.mode,D),v.return=T,v):(v=i(v,C),v.return=T,v)}function u(T,v,C,D){var F=C.type;return F===Hi?d(T,v,C.props.children,D,C.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===or&&ty(F)===v.type)?(D=i(v,C.props),D.ref=go(T,v,C),D.return=T,D):(D=tu(C.type,C.key,C.props,null,T.mode,D),D.ref=go(T,v,C),D.return=T,D)}function c(T,v,C,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Zh(C,T.mode,D),v.return=T,v):(v=i(v,C.children||[]),v.return=T,v)}function d(T,v,C,D,F){return v===null||v.tag!==7?(v=si(C,T.mode,D,F),v.return=T,v):(v=i(v,C),v.return=T,v)}function f(T,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jh(""+v,T.mode,C),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wl:return C=tu(v.type,v.key,v.props,null,T.mode,C),C.ref=go(T,null,v),C.return=T,C;case Wi:return v=Zh(v,T.mode,C),v.return=T,v;case or:var D=v._init;return f(T,D(v._payload),C)}if(Co(v)||co(v))return v=si(v,T.mode,C,null),v.return=T,v;xl(T,v)}return null}function m(T,v,C,D){var F=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return F!==null?null:a(T,v,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case wl:return C.key===F?u(T,v,C,D):null;case Wi:return C.key===F?c(T,v,C,D):null;case or:return F=C._init,m(T,v,F(C._payload),D)}if(Co(C)||co(C))return F!==null?null:d(T,v,C,D,null);xl(T,C)}return null}function y(T,v,C,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(C)||null,a(v,T,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case wl:return T=T.get(D.key===null?C:D.key)||null,u(v,T,D,F);case Wi:return T=T.get(D.key===null?C:D.key)||null,c(v,T,D,F);case or:var U=D._init;return y(T,v,C,U(D._payload),F)}if(Co(D)||co(D))return T=T.get(C)||null,d(v,T,D,F,null);xl(v,D)}return null}function R(T,v,C,D){for(var F=null,U=null,w=v,_=v=0,E=null;w!==null&&_<C.length;_++){w.index>_?(E=w,w=null):E=w.sibling;var I=m(T,w,C[_],D);if(I===null){w===null&&(w=E);break}t&&w&&I.alternate===null&&e(T,w),v=s(I,v,_),U===null?F=I:U.sibling=I,U=I,w=E}if(_===C.length)return n(T,w),Se&&Kr(T,_),F;if(w===null){for(;_<C.length;_++)w=f(T,C[_],D),w!==null&&(v=s(w,v,_),U===null?F=w:U.sibling=w,U=w);return Se&&Kr(T,_),F}for(w=r(T,w);_<C.length;_++)E=y(w,T,_,C[_],D),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?_:E.key),v=s(E,v,_),U===null?F=E:U.sibling=E,U=E);return t&&w.forEach(function(A){return e(T,A)}),Se&&Kr(T,_),F}function P(T,v,C,D){var F=co(C);if(typeof F!="function")throw Error(b(150));if(C=F.call(C),C==null)throw Error(b(151));for(var U=F=null,w=v,_=v=0,E=null,I=C.next();w!==null&&!I.done;_++,I=C.next()){w.index>_?(E=w,w=null):E=w.sibling;var A=m(T,w,I.value,D);if(A===null){w===null&&(w=E);break}t&&w&&A.alternate===null&&e(T,w),v=s(A,v,_),U===null?F=A:U.sibling=A,U=A,w=E}if(I.done)return n(T,w),Se&&Kr(T,_),F;if(w===null){for(;!I.done;_++,I=C.next())I=f(T,I.value,D),I!==null&&(v=s(I,v,_),U===null?F=I:U.sibling=I,U=I);return Se&&Kr(T,_),F}for(w=r(T,w);!I.done;_++,I=C.next())I=y(w,T,_,I.value,D),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?_:I.key),v=s(I,v,_),U===null?F=I:U.sibling=I,U=I);return t&&w.forEach(function(k){return e(T,k)}),Se&&Kr(T,_),F}function O(T,v,C,D){if(typeof C=="object"&&C!==null&&C.type===Hi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case wl:e:{for(var F=C.key,U=v;U!==null;){if(U.key===F){if(F=C.type,F===Hi){if(U.tag===7){n(T,U.sibling),v=i(U,C.props.children),v.return=T,T=v;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===or&&ty(F)===U.type){n(T,U.sibling),v=i(U,C.props),v.ref=go(T,U,C),v.return=T,T=v;break e}n(T,U);break}else e(T,U);U=U.sibling}C.type===Hi?(v=si(C.props.children,T.mode,D,C.key),v.return=T,T=v):(D=tu(C.type,C.key,C.props,null,T.mode,D),D.ref=go(T,v,C),D.return=T,T=D)}return o(T);case Wi:e:{for(U=C.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(T,v.sibling),v=i(v,C.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Zh(C,T.mode,D),v.return=T,T=v}return o(T);case or:return U=C._init,O(T,v,U(C._payload),D)}if(Co(C))return R(T,v,C,D);if(co(C))return P(T,v,C,D);xl(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,C),v.return=T,T=v):(n(T,v),v=Jh(C,T.mode,D),v.return=T,T=v),o(T)):n(T,v)}return O}var Es=J0(!0),Z0=J0(!1),Cu=Br(null),Ru=null,Zi=null,Ep=null;function wp(){Ep=Zi=Ru=null}function Tp(t){var e=Cu.current;Ie(Cu),t._currentValue=e}function Qd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){Ru=t,Ep=Zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},Zi===null){if(Ru===null)throw Error(b(308));Zi=t,Ru.dependencies={lanes:0,firstContext:t}}else Zi=Zi.next=t;return e}var Zr=null;function Ip(t){Zr===null?Zr=[t]:Zr.push(t)}function ew(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}function ny(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Au(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,P=a;switch(m=e,y=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){f=R.call(y,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(y,f,m):R,m==null)break e;f=Ae({},f,m);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pi|=o,t.lanes=o,t.memoizedState=f}}function ry(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Ua={},mn=Br(Ua),la=Br(Ua),ua=Br(Ua);function ei(t){if(t===Ua)throw Error(b(174));return t}function Cp(t,e){switch(_e(ua,e),_e(la,t),_e(mn,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}Ie(mn),_e(mn,e)}function ws(){Ie(mn),Ie(la),Ie(ua)}function nw(t){ei(ua.current);var e=ei(mn.current),n=kd(e,t.type);e!==n&&(_e(la,t),_e(mn,n))}function Rp(t){la.current===t&&(Ie(mn),Ie(la))}var Ce=Br(0);function Pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qh=[];function Ap(){for(var t=0;t<qh.length;t++)qh[t]._workInProgressVersionPrimary=null;qh.length=0}var Yl=Jn.ReactCurrentDispatcher,Gh=Jn.ReactCurrentBatchConfig,fi=0,Re=null,Fe=null,qe=null,ku=!1,Vo=!1,ca=0,p1=0;function ot(){throw Error(b(321))}function Pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,i,s){if(fi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?y1:v1,t=n(r,i),Vo){s=0;do{if(Vo=!1,ca=0,25<=s)throw Error(b(301));s+=1,qe=Fe=null,e.updateQueue=null,Yl.current=E1,t=n(r,i)}while(Vo)}if(Yl.current=Nu,e=Fe!==null&&Fe.next!==null,fi=0,qe=Fe=Re=null,ku=!1,e)throw Error(b(300));return t}function Np(){var t=ca!==0;return ca=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Re.memoizedState=qe=t:qe=qe.next=t,qe}function Kt(){if(Fe===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?Re.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(b(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?Re.memoizedState=qe=t:qe=qe.next=t}return qe}function ha(t,e){return typeof e=="function"?e(t):e}function Kh(t){var e=Kt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((fi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Re.lanes|=d,pi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,cn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qh(t){var e=Kt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rw(){}function iw(t,e){var n=Re,r=Kt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,Op(aw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,da(9,ow.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(b(349));fi&30||sw(n,e,i)}return i}function sw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ow(t,e,n,r){e.value=n,e.getSnapshot=r,lw(e)&&uw(t)}function aw(t,e,n){return n(function(){lw(e)&&uw(t)})}function lw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function uw(t){var e=qn(t,1);e!==null&&an(e,t,1,-1)}function iy(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=_1.bind(null,Re,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cw(){return Kt().memoizedState}function Xl(t,e,n,r){var i=dn();Re.flags|=t,i.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Tc(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Pp(r,o.deps)){i.memoizedState=da(e,n,s,r);return}}Re.flags|=t,i.memoizedState=da(1|e,n,s,r)}function sy(t,e){return Xl(8390656,8,t,e)}function Op(t,e){return Tc(2048,8,t,e)}function hw(t,e){return Tc(4,2,t,e)}function dw(t,e){return Tc(4,4,t,e)}function fw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pw(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4,4,fw.bind(null,e,t),n)}function xp(){}function mw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _w(t,e,n){return fi&21?(cn(n,e)||(n=T0(),Re.lanes|=n,pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function m1(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Gh.transition;Gh.transition={};try{t(!1),e()}finally{de=n,Gh.transition=r}}function yw(){return Kt().memoizedState}function g1(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vw(t))Ew(e,n);else if(n=ew(t,e,n,r),n!==null){var i=Et();an(n,t,r,i),ww(n,e,r)}}function _1(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vw(t))Ew(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var u=e.interleaved;u===null?(i.next=i,Ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ew(t,e,i,r),n!==null&&(i=Et(),an(n,t,r,i),ww(n,e,r))}}function vw(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function Ew(t,e){Vo=ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ww(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}var Nu={readContext:Gt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},y1={readContext:Gt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:sy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,fw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=g1.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:iy,useDebugValue:xp,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=iy(!1),e=t[0];return t=m1.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=dn();if(Se){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Qe===null)throw Error(b(349));fi&30||sw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,sy(aw.bind(null,r,s,t),[t]),r.flags|=2048,da(9,ow.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Qe.identifierPrefix;if(Se){var n=Mn,r=Ln;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=p1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},v1={readContext:Gt,useCallback:mw,useContext:Gt,useEffect:Op,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:Kh,useRef:cw,useState:function(){return Kh(ha)},useDebugValue:xp,useDeferredValue:function(t){var e=Kt();return _w(e,Fe.memoizedState,t)},useTransition:function(){var t=Kh(ha)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:rw,useSyncExternalStore:iw,useId:yw,unstable_isNewReconciler:!1},E1={readContext:Gt,useCallback:mw,useContext:Gt,useEffect:Op,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:Qh,useRef:cw,useState:function(){return Qh(ha)},useDebugValue:xp,useDeferredValue:function(t){var e=Kt();return Fe===null?e.memoizedState=t:_w(e,Fe.memoizedState,t)},useTransition:function(){var t=Qh(ha)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:rw,useSyncExternalStore:iw,useId:yw,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Sr(t),s=jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(an(e,t,i,r),Ql(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Sr(t),s=jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(an(e,t,i,r),Ql(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Sr(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(an(e,t,r,n),Ql(e,t,r))}};function oy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,r)||!ia(i,s):!0}function Tw(t,e,n){var r=!1,i=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Nt(e)?hi:pt.current,r=e.contextTypes,s=(r=r!=null)?ys(t,i):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ay(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function Xd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Nt(e)?hi:pt.current,i.context=ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ic.enqueueReplaceState(i,i.state,null),Au(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",r=e;do n+=KR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function Iw(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xu||(xu=!0,uf=r),Jd(t,e)},n}function Sw(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jd(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ly(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new w1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=M1.bind(null,t,e,n),e.then(t,t))}function uy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var T1=Jn.ReactCurrentOwner,Rt=!1;function vt(t,e,n,r){e.child=t===null?Z0(e,null,n,r):Es(e,t.child,n,r)}function hy(t,e,n,r,i){n=n.render;var s=e.ref;return ls(e,i),r=kp(t,e,n,r,s,i),n=Np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Se&&n&&_p(e),e.flags|=1,vt(t,e,r,i),e.child)}function dy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cw(t,e,s,r,i)):(t=tu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ia(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Zd(t,e,n,r,i)}function Rw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(ts,Lt),Lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(ts,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(ts,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(ts,Lt),Lt|=r;return vt(t,e,i,n),e.child}function Aw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,r,i){var s=Nt(n)?hi:pt.current;return s=ys(e,s),ls(e,i),n=kp(t,e,n,r,s,i),r=Np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Se&&r&&_p(e),e.flags|=1,vt(t,e,n,i),e.child)}function fy(t,e,n,r,i){if(Nt(n)){var s=!0;Tu(e)}else s=!1;if(ls(e,i),e.stateNode===null)Jl(t,e),Tw(e,n,r),Xd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=Nt(n)?hi:pt.current,c=ys(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ay(e,o,r,c),ar=!1;var m=e.memoizedState;o.state=m,Au(e,r,o,i),u=e.memoizedState,a!==r||m!==u||kt.current||ar?(typeof d=="function"&&(Yd(e,n,d,r),u=e.memoizedState),(a=ar||oy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jt(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=Nt(n)?hi:pt.current,u=ys(e,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&ay(e,o,r,u),ar=!1,m=e.memoizedState,o.state=m,Au(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||kt.current||ar?(typeof y=="function"&&(Yd(e,n,y,r),R=e.memoizedState),(c=ar||oy(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return ef(t,e,n,r,s,i)}function ef(t,e,n,r,i,s){Aw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&J_(e,n,!1),Gn(t,e,s);r=e.stateNode,T1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&J_(e,n,!0),e.child}function Pw(t){var e=t.stateNode;e.pendingContext?X_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&X_(t,e.context,!1),Cp(t,e.containerInfo)}function py(t,e,n,r,i){return vs(),vp(i),e.flags|=256,vt(t,e,n,r),e.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function kw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ce,i&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nf(n),e.memoizedState=tf,t):Dp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return I1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tf,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dp(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dl(t,e,n,r){return r!==null&&vp(r),Es(e,t.child,null,n),t=Dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function I1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yh(Error(b(422))),Dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rc({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=nf(o),e.memoizedState=tf,s);if(!(e.mode&1))return Dl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Yh(s,r,void 0),Dl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),an(r,t,i,-1))}return Up(),r=Yh(Error(b(421))),Dl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=b1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=wr(i.nextSibling),bt=e,Se=!0,en=null,t!==null&&(jt[zt++]=Ln,jt[zt++]=Mn,jt[zt++]=di,Ln=t.id,Mn=t.overflow,di=e),e=Dp(e,r.children),e.flags|=4096,e)}function my(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qd(t.return,e,n)}function Xh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&my(t,n,e);else if(t.tag===19)my(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xh(e,!0,n,null,s);break;case"together":Xh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function S1(t,e,n){switch(e.tag){case 3:Pw(e),vs();break;case 5:nw(e);break;case 1:Nt(e.type)&&Tu(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Cu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?kw(t,e,n):(_e(Ce,Ce.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);_e(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Nw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Rw(t,e,n)}return Gn(t,e,n)}var Ow,rf,xw,Dw;Ow=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};xw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ei(mn.current);var s=null;switch(n){case"input":i=Cd(t,i),r=Cd(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Pd(t,i),r=Pd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eu)}Nd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dw=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function C1(t,e,n){var r=e.pendingProps;switch(yp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Nt(e.type)&&wu(),at(e),null;case 3:return r=e.stateNode,ws(),Ie(kt),Ie(pt),Ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(df(en),en=null))),rf(t,e),at(e),null;case 5:Rp(e);var i=ei(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)xw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return at(e),null}if(t=ei(mn.current),Ol(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[aa]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Ao.length;i++)we(Ao[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":S_(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":R_(r,s),we("invalid",r)}Nd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,a,t),i=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Tl(r),C_(r,s,!0);break;case"textarea":Tl(r),A_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[aa]=r,Ow(t,e,!1,!1),e.stateNode=t;e:{switch(o=Od(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ao.length;i++)we(Ao[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":S_(t,r),i=Cd(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),we("invalid",t);break;case"textarea":R_(t,r),i=Pd(t,r),we("invalid",t);break;default:i=r}Nd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?c0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&l0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jo(t,u):typeof u=="number"&&Jo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&rp(t,s,u,o))}switch(n){case"input":Tl(t),C_(t,r,!1);break;case"textarea":Tl(t),A_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?is(t,!!r.multiple,s,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)Dw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=ei(ua.current),ei(mn.current),Ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:Nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return at(e),null;case 13:if(Ie(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Mt!==null&&e.mode&1&&!(e.flags&128))X0(),vs(),e.flags|=98560,s=!1;else if(s=Ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[fn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else en!==null&&(df(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?je===0&&(je=3):Up())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return ws(),rf(t,e),t===null&&sa(e.stateNode.containerInfo),at(e),null;case 10:return Tp(e.type._context),at(e),null;case 17:return Nt(e.type)&&wu(),at(e),null;case 19:if(Ie(Ce),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_o(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pu(t),o!==null){for(e.flags|=128,_o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Is&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return at(e),null}else 2*De()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ce.current,_e(Ce,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Fp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function R1(t,e){switch(yp(e),e.tag){case 1:return Nt(e.type)&&wu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),Ie(kt),Ie(pt),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(Ie(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ce),null;case 4:return ws(),null;case 10:return Tp(e.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var Ll=!1,ct=!1,A1=typeof WeakSet=="function"?WeakSet:Set,W=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function sf(t,e,n){try{n()}catch(r){ke(t,e,r)}}var gy=!1;function P1(t,e){if(jd=_u,t=F0(),gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},_u=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,O=R.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Jt(e.type,P),O);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(D){ke(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=gy,gy=!1,R}function Fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sf(e,n,s)}i=i.next}while(i!==r)}}function Sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lw(t){var e=t.alternate;e!==null&&(t.alternate=null,Lw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[aa],delete e[Hd],delete e[c1],delete e[h1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mw(t){return t.tag===5||t.tag===3||t.tag===4}function _y(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eu));else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}function lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}var Xe=null,Zt=!1;function ir(t,e,n){for(n=n.child;n!==null;)bw(t,e,n),n=n.sibling}function bw(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:ct||es(n,e);case 6:var r=Xe,i=Zt;Xe=null,ir(t,e,n),Xe=r,Zt=i,Xe!==null&&(Zt?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Zt?(t=Xe,n=n.stateNode,t.nodeType===8?Wh(t.parentNode,n):t.nodeType===1&&Wh(t,n),na(t)):Wh(Xe,n.stateNode));break;case 4:r=Xe,i=Zt,Xe=n.stateNode.containerInfo,Zt=!0,ir(t,e,n),Xe=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sf(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!ct&&(es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,ir(t,e,n),ct=r):ir(t,e,n);break;default:ir(t,e,n)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A1),e.forEach(function(r){var i=V1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,Zt=!1;break e;case 3:Xe=a.stateNode.containerInfo,Zt=!0;break e;case 4:Xe=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(Xe===null)throw Error(b(160));bw(s,o,i),Xe=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vw(e,t),e=e.sibling}function Vw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),hn(t),r&4){try{Fo(3,t,t.return),Sc(3,t)}catch(P){ke(t,t.return,P)}try{Fo(5,t,t.return)}catch(P){ke(t,t.return,P)}}break;case 1:Xt(e,t),hn(t),r&512&&n!==null&&es(n,n.return);break;case 5:if(Xt(e,t),hn(t),r&512&&n!==null&&es(n,n.return),t.flags&32){var i=t.stateNode;try{Jo(i,"")}catch(P){ke(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&s0(i,s),Od(a,o);var c=Od(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?c0(i,f):d==="dangerouslySetInnerHTML"?l0(i,f):d==="children"?Jo(i,f):rp(i,d,f,c)}switch(a){case"input":Rd(i,s);break;case"textarea":o0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?is(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[aa]=s}catch(P){ke(t,t.return,P)}}break;case 6:if(Xt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){ke(t,t.return,P)}}break;case 3:if(Xt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(P){ke(t,t.return,P)}break;case 4:Xt(e,t),hn(t);break;case 13:Xt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bp=De())),r&4&&yy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||d,Xt(e,t),ct=c):Xt(e,t),hn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(f=W=d;W!==null;){switch(m=W,y=m.child,m.tag){case 0:case 11:case 14:case 15:Fo(4,m,m.return);break;case 1:es(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){ke(r,n,P)}}break;case 5:es(m,m.return);break;case 22:if(m.memoizedState!==null){Ey(f);continue}}y!==null?(y.return=m,W=y):Ey(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=u0("display",o))}catch(P){ke(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){ke(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Xt(e,t),hn(t),r&4&&yy(t);break;case 21:break;default:Xt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mw(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jo(i,""),r.flags&=-33);var s=_y(t);lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_y(t);af(t,a,o);break;default:throw Error(b(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k1(t,e,n){W=t,Fw(t)}function Fw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ll;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ct;a=Ll;var c=ct;if(Ll=o,(ct=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?wy(i):u!==null?(u.return=o,W=u):wy(i);for(;s!==null;)W=s,Fw(s),s=s.sibling;W=i,Ll=a,ct=c}vy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):vy(t)}}function vy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Sc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ry(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ry(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ct||e.flags&512&&of(e)}catch(m){ke(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ey(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function wy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sc(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{of(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{of(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var N1=Math.ceil,Ou=Jn.ReactCurrentDispatcher,Lp=Jn.ReactCurrentOwner,Ht=Jn.ReactCurrentBatchConfig,le=0,Qe=null,be=null,Ze=0,Lt=0,ts=Br(0),je=0,fa=null,pi=0,Cc=0,Mp=0,Uo=null,St=null,bp=0,Is=1/0,On=null,xu=!1,uf=null,Ir=null,Ml=!1,mr=null,Du=0,Bo=0,cf=null,Zl=-1,eu=0;function Et(){return le&6?De():Zl!==-1?Zl:Zl=De()}function Sr(t){return t.mode&1?le&2&&Ze!==0?Ze&-Ze:f1.transition!==null?(eu===0&&(eu=T0()),eu):(t=de,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function an(t,e,n,r){if(50<Bo)throw Bo=0,cf=null,Error(b(185));ba(t,n,r),(!(le&2)||t!==Qe)&&(t===Qe&&(!(le&2)&&(Cc|=n),je===4&&cr(t,Ze)),Ot(t,r),n===1&&le===0&&!(e.mode&1)&&(Is=De()+500,wc&&jr()))}function Ot(t,e){var n=t.callbackNode;fA(t,e);var r=gu(t,t===Qe?Ze:0);if(r===0)n!==null&&N_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&N_(n),e===1)t.tag===0?d1(Ty.bind(null,t)):K0(Ty.bind(null,t)),l1(function(){!(le&6)&&jr()}),n=null;else{switch(I0(r)){case 1:n=lp;break;case 4:n=E0;break;case 16:n=mu;break;case 536870912:n=w0;break;default:n=mu}n=qw(n,Uw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uw(t,e){if(Zl=-1,eu=0,le&6)throw Error(b(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var r=gu(t,t===Qe?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lu(t,r);else{e=r;var i=le;le|=2;var s=jw();(Qe!==t||Ze!==e)&&(On=null,Is=De()+500,ii(t,e));do try{D1();break}catch(a){Bw(t,a)}while(!0);wp(),Ou.current=s,le=i,be!==null?e=0:(Qe=null,Ze=0,e=je)}if(e!==0){if(e===2&&(i=bd(t),i!==0&&(r=i,e=hf(t,i))),e===1)throw n=fa,ii(t,0),cr(t,r),Ot(t,De()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!O1(i)&&(e=Lu(t,r),e===2&&(s=bd(t),s!==0&&(r=s,e=hf(t,s))),e===1))throw n=fa,ii(t,0),cr(t,r),Ot(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Qr(t,St,On);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=bp+500-De(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wd(Qr.bind(null,t,St,On),e);break}Qr(t,St,On);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N1(r/1960))-r,10<r){t.timeoutHandle=Wd(Qr.bind(null,t,St,On),r);break}Qr(t,St,On);break;case 5:Qr(t,St,On);break;default:throw Error(b(329))}}}return Ot(t,De()),t.callbackNode===n?Uw.bind(null,t):null}function hf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=St,St=n,e!==null&&df(e)),t}function df(t){St===null?St=t:St.push.apply(St,t)}function O1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Mp,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Ty(t){if(le&6)throw Error(b(327));us();var e=gu(t,0);if(!(e&1))return Ot(t,De()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var r=bd(t);r!==0&&(e=r,n=hf(t,r))}if(n===1)throw n=fa,ii(t,0),cr(t,e),Ot(t,De()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,St,On),Ot(t,De()),null}function Vp(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Is=De()+500,wc&&jr())}}function mi(t){mr!==null&&mr.tag===0&&!(le&6)&&us();var e=le;le|=1;var n=Ht.transition,r=de;try{if(Ht.transition=null,de=1,t)return t()}finally{de=r,Ht.transition=n,le=e,!(le&6)&&jr()}}function Fp(){Lt=ts.current,Ie(ts)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,a1(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(yp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wu();break;case 3:ws(),Ie(kt),Ie(pt),Ap();break;case 5:Rp(r);break;case 4:ws();break;case 13:Ie(Ce);break;case 19:Ie(Ce);break;case 10:Tp(r.type._context);break;case 22:case 23:Fp()}n=n.return}if(Qe=t,be=t=Cr(t.current,null),Ze=Lt=e,je=0,fa=null,Mp=Cc=pi=0,St=Uo=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zr=null}return t}function Bw(t,e){do{var n=be;try{if(wp(),Yl.current=Nu,ku){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ku=!1}if(fi=0,qe=Fe=Re=null,Vo=!1,ca=0,Lp.current=null,n===null||n.return===null){je=1,fa=e,be=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ze,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=uy(o);if(y!==null){y.flags&=-257,cy(y,o,a,s,e),y.mode&1&&ly(s,c,e),e=y,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){ly(s,c,e),Up();break e}u=Error(b(426))}}else if(Se&&a.mode&1){var O=uy(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),cy(O,o,a,s,e),vp(Ts(u,a));break e}}s=u=Ts(u,a),je!==4&&(je=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Iw(s,u,e);ny(s,T);break e;case 1:a=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ir===null||!Ir.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Sw(s,a,e);ny(s,D);break e}}s=s.return}while(s!==null)}$w(n)}catch(F){e=F,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function jw(){var t=Ou.current;return Ou.current=Nu,t===null?Nu:t}function Up(){(je===0||je===3||je===2)&&(je=4),Qe===null||!(pi&268435455)&&!(Cc&268435455)||cr(Qe,Ze)}function Lu(t,e){var n=le;le|=2;var r=jw();(Qe!==t||Ze!==e)&&(On=null,ii(t,e));do try{x1();break}catch(i){Bw(t,i)}while(!0);if(wp(),le=n,Ou.current=r,be!==null)throw Error(b(261));return Qe=null,Ze=0,je}function x1(){for(;be!==null;)zw(be)}function D1(){for(;be!==null&&!iA();)zw(be)}function zw(t){var e=Hw(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?$w(t):be=e,Lp.current=null}function $w(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=R1(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,be=null;return}}else if(n=C1(n,e,Lt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);je===0&&(je=5)}function Qr(t,e,n){var r=de,i=Ht.transition;try{Ht.transition=null,de=1,L1(t,e,n,r)}finally{Ht.transition=i,de=r}return null}function L1(t,e,n,r){do us();while(mr!==null);if(le&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pA(t,s),t===Qe&&(be=Qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ml||(Ml=!0,qw(mu,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=de;de=1;var a=le;le|=4,Lp.current=null,P1(t,n),Vw(n,t),e1(zd),_u=!!jd,zd=jd=null,t.current=n,k1(n),sA(),le=a,de=o,Ht.transition=s}else t.current=n;if(Ml&&(Ml=!1,mr=t,Du=i),s=t.pendingLanes,s===0&&(Ir=null),lA(n.stateNode),Ot(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xu)throw xu=!1,t=uf,uf=null,t;return Du&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===cf?Bo++:(Bo=0,cf=t):Bo=0,jr(),null}function us(){if(mr!==null){var t=I0(Du),e=Ht.transition,n=de;try{if(Ht.transition=null,de=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,Du=0,le&6)throw Error(b(331));var i=le;for(le|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Fo(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var m=d.sibling,y=d.return;if(Lw(d),d===c){W=null;break}if(m!==null){m.return=y,W=m;break}W=y}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,W=C;else e:for(o=v;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(F){ke(a,a.return,F)}if(a===o){W=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,W=D;break e}W=a.return}}if(le=i,jr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(gc,t)}catch{}r=!0}return r}finally{de=n,Ht.transition=e}}return!1}function Iy(t,e,n){e=Ts(n,e),e=Iw(t,e,1),t=Tr(t,e,1),e=Et(),t!==null&&(ba(t,1,e),Ot(t,e))}function ke(t,e,n){if(t.tag===3)Iy(t,t,n);else for(;e!==null;){if(e.tag===3){Iy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=Ts(n,t),t=Sw(e,t,1),e=Tr(e,t,1),t=Et(),e!==null&&(ba(e,1,t),Ot(e,t));break}}e=e.return}}function M1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(Ze&n)===n&&(je===4||je===3&&(Ze&130023424)===Ze&&500>De()-bp?ii(t,0):Mp|=n),Ot(t,e)}function Ww(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=Et();t=qn(t,e),t!==null&&(ba(t,e,n),Ot(t,n))}function b1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ww(t,n)}function V1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Ww(t,n)}var Hw;Hw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,S1(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Se&&e.flags&1048576&&Q0(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jl(t,e),t=e.pendingProps;var i=ys(e,pt.current);ls(e,n),i=kp(null,e,r,t,i,n);var s=Np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sp(e),i.updater=Ic,e.stateNode=i,i._reactInternals=e,Xd(e,r,t,n),e=ef(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&_p(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=U1(r),t=Jt(r,t),i){case 0:e=Zd(null,e,r,t,n);break e;case 1:e=fy(null,e,r,t,n);break e;case 11:e=hy(null,e,r,t,n);break e;case 14:e=dy(null,e,r,Jt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Zd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),fy(t,e,r,i,n);case 3:e:{if(Pw(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tw(t,e),Au(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ts(Error(b(423)),e),e=py(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error(b(424)),e),e=py(t,e,r,n,i);break e}else for(Mt=wr(e.stateNode.containerInfo.firstChild),bt=e,Se=!0,en=null,n=Z0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=Gn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return nw(e),t===null&&Kd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$d(r,i)?o=null:s!==null&&$d(r,s)&&(e.flags|=32),Aw(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return kw(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),hy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Cu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!kt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=jn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Qd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ls(e,n),i=Gt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),dy(t,e,r,i,n);case 15:return Cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Jl(t,e),e.tag=1,Nt(r)?(t=!0,Tu(e)):t=!1,ls(e,n),Tw(e,r,i),Xd(e,r,i,n),ef(null,e,r,!0,t,n);case 19:return Nw(t,e,n);case 22:return Rw(t,e,n)}throw Error(b(156,e.tag))};function qw(t,e){return v0(t,e)}function F1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new F1(t,e,n,r)}function Bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U1(t){if(typeof t=="function")return Bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sp)return 11;if(t===op)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hi:return si(n.children,i,s,e);case ip:o=8,i|=8;break;case wd:return t=Wt(12,n,e,i|2),t.elementType=wd,t.lanes=s,t;case Td:return t=Wt(13,n,e,i),t.elementType=Td,t.lanes=s,t;case Id:return t=Wt(19,n,e,i),t.elementType=Id,t.lanes=s,t;case n0:return Rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case e0:o=10;break e;case t0:o=9;break e;case sp:o=11;break e;case op:o=14;break e;case or:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Rc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=n0,t.lanes=n,t.stateNode={isHidden:!1},t}function Jh(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Zh(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function B1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dh(0),this.expirationTimes=Dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jp(t,e,n,r,i,s,o,a,u){return t=new B1(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sp(s),t}function j1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gw(t){if(!t)return xr;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Nt(n))return G0(t,n,e)}return e}function Kw(t,e,n,r,i,s,o,a,u){return t=jp(n,r,!0,t,i,s,o,a,u),t.context=Gw(null),n=t.current,r=Et(),i=Sr(n),s=jn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,ba(t,i,r),Ot(t,r),t}function Ac(t,e,n,r){var i=e.current,s=Et(),o=Sr(i);return n=Gw(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(an(t,i,o,s),Ql(t,i,o)),o}function Mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zp(t,e){Sy(t,e),(t=t.alternate)&&Sy(t,e)}function z1(){return null}var Qw=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}Pc.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Ac(t,e,null,null)};Pc.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mi(function(){Ac(null,t,null,null)}),e[Hn]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=R0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&P0(t)}};function Wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cy(){}function $1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Mu(o);s.call(c)}}var o=Kw(e,r,t,0,null,!1,!1,"",Cy);return t._reactRootContainer=o,t[Hn]=o.current,sa(t.nodeType===8?t.parentNode:t),mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Mu(u);a.call(c)}}var u=jp(t,0,!1,null,null,!1,!1,"",Cy);return t._reactRootContainer=u,t[Hn]=u.current,sa(t.nodeType===8?t.parentNode:t),mi(function(){Ac(e,u,n,r)}),u}function Nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Mu(o);a.call(u)}}Ac(e,o,t,i)}else o=$1(n,e,t,i,r);return Mu(o)}S0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(up(e,n|1),Ot(e,De()),!(le&6)&&(Is=De()+500,jr()))}break;case 13:mi(function(){var r=qn(t,1);if(r!==null){var i=Et();an(r,t,1,i)}}),zp(t,1)}};cp=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=Et();an(e,t,134217728,n)}zp(t,134217728)}};C0=function(t){if(t.tag===13){var e=Sr(t),n=qn(t,e);if(n!==null){var r=Et();an(n,t,e,r)}zp(t,e)}};R0=function(){return de};A0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Dd=function(t,e,n){switch(e){case"input":if(Rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ec(r);if(!i)throw Error(b(90));i0(r),Rd(r,i)}}}break;case"textarea":o0(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};f0=Vp;p0=mi;var W1={usingClientEntryPoint:!1,Events:[Fa,Qi,Ec,h0,d0,Vp]},yo={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H1={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_0(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||z1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{gc=bl.inject(H1),pn=bl}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(e))throw Error(b(200));return j1(t,e,null,n)};Ut.createRoot=function(t,e){if(!Wp(t))throw Error(b(299));var n=!1,r="",i=Qw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jp(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,sa(t.nodeType===8?t.parentNode:t),new $p(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=_0(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return mi(t)};Ut.hydrate=function(t,e,n){if(!kc(e))throw Error(b(200));return Nc(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!Wp(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Qw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Kw(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,sa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pc(e)};Ut.render=function(t,e,n){if(!kc(e))throw Error(b(200));return Nc(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!kc(t))throw Error(b(40));return t._reactRootContainer?(mi(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Vp;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Nc(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function Yw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yw)}catch(t){console.error(t)}}Yw(),YE.exports=Ut;var q1=YE.exports,Ry=q1;vd.createRoot=Ry.createRoot,vd.hydrateRoot=Ry.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const Ay="popstate";function G1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ff("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jw(i)}return Q1(e,n,null,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function K1(){return Math.random().toString(36).substr(2,8)}function Py(t,e){return{usr:t.state,key:t.key,idx:e}}function ff(t,e,n,r){return n===void 0&&(n=null),pa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:n,key:e&&e.key||r||K1()})}function Jw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Q1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(pa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=gr.Pop;let O=d(),T=O==null?null:O-c;c=O,u&&u({action:a,location:P.location,delta:T})}function m(O,T){a=gr.Push;let v=ff(P.location,O,T);c=d()+1;let C=Py(v,c),D=P.createHref(v);try{o.pushState(C,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:a,location:P.location,delta:1})}function y(O,T){a=gr.Replace;let v=ff(P.location,O,T);c=d();let C=Py(v,c),D=P.createHref(v);o.replaceState(C,"",D),s&&u&&u({action:a,location:P.location,delta:0})}function R(O){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof O=="string"?O:Jw(O);return v=v.replace(/ $/,"%20"),ze(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let P={get action(){return a},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ay,f),u=O,()=>{i.removeEventListener(Ay,f),u=null}},createHref(O){return e(i,O)},createURL:R,encodeLocation(O){let T=R(O);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:y,go(O){return o.go(O)}};return P}var ky;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ky||(ky={}));function Y1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Us(e):e,i=tT(r.pathname||"/",n);if(i==null)return null;let s=Zw(t);X1(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=uP(i);o=oP(s[a],u)}return o}function Zw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=oi([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:iP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of eT(s.path))i(s,o,u)}),e}function eT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=eT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function X1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J1=/^:[\w-]+$/,Z1=3,eP=2,tP=1,nP=10,rP=-2,Ny=t=>t==="*";function iP(t,e){let n=t.split("/"),r=n.length;return n.some(Ny)&&(r+=rP),e&&(r+=eP),n.filter(i=>!Ny(i)).reduce((i,s)=>i+(J1.test(s)?Z1:s===""?tP:nP),r)}function sP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=aP({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:oi([i,d.pathname]),pathnameBase:mP(oi([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=oi([i,d.pathnameBase]))}return s}function aP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=a[f];return y&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function lP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function tT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function cP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Us(t):t;return{pathname:n?n.startsWith("/")?n:hP(n,e):e,search:gP(r),hash:_P(i)}}function hP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ed(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fP(t,e){let n=dP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pP(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Us(t):(i=pa({},t),ze(!i.pathname||!i.pathname.includes("?"),ed("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),ed("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),ed("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=cP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),mP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_P=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nT=["post","put","patch","delete"];new Set(nT);const vP=["get",...nT];new Set(vP);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}const Hp=$.createContext(null),EP=$.createContext(null),Oc=$.createContext(null),xc=$.createContext(null),Bs=$.createContext({outlet:null,matches:[],isDataRoute:!1}),rT=$.createContext(null);function Dc(){return $.useContext(xc)!=null}function iT(){return Dc()||ze(!1),$.useContext(xc).location}function sT(t){$.useContext(Oc).static||$.useLayoutEffect(t)}function qp(){let{isDataRoute:t}=$.useContext(Bs);return t?DP():wP()}function wP(){Dc()||ze(!1);let t=$.useContext(Hp),{basename:e,future:n,navigator:r}=$.useContext(Oc),{matches:i}=$.useContext(Bs),{pathname:s}=iT(),o=JSON.stringify(fP(i,n.v7_relativeSplatPath)),a=$.useRef(!1);return sT(()=>{a.current=!0}),$.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=pP(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:oi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function TP(t,e){return IP(t,e)}function IP(t,e,n,r){Dc()||ze(!1);let{navigator:i}=$.useContext(Oc),{matches:s}=$.useContext(Bs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=iT(),d;if(e){var f;let O=typeof e=="string"?Us(e):e;u==="/"||(f=O.pathname)!=null&&f.startsWith(u)||ze(!1),d=O}else d=c;let m=d.pathname||"/",y=m;if(u!=="/"){let O=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(O.length).join("/")}let R=Y1(t,{pathname:y}),P=PP(R&&R.map(O=>Object.assign({},O,{params:Object.assign({},a,O.params),pathname:oi([u,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?u:oi([u,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r);return e&&P?$.createElement(xc.Provider,{value:{location:ma({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gr.Pop}},P):P}function SP(){let t=xP(),e=yP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:i},n):null,null)}const CP=$.createElement(SP,null);class RP extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(Bs.Provider,{value:this.props.routeContext},$.createElement(rT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AP(t){let{routeContext:e,match:n,children:r}=t,i=$.useContext(Hp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(Bs.Provider,{value:e},r)}function PP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ze(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:y}=n,R=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let y,R=!1,P=null,O=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||CP,u&&(c<0&&m===0?(R=!0,O=null):c===m&&(R=!0,O=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),v=()=>{let C;return y?C=P:R?C=O:f.route.Component?C=$.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=d,$.createElement(AP,{match:f,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?$.createElement(RP,{location:n.location,revalidation:n.revalidation,component:P,error:y,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var oT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(oT||{}),bu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bu||{});function kP(t){let e=$.useContext(Hp);return e||ze(!1),e}function NP(t){let e=$.useContext(EP);return e||ze(!1),e}function OP(t){let e=$.useContext(Bs);return e||ze(!1),e}function aT(t){let e=OP(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function xP(){var t;let e=$.useContext(rT),n=NP(bu.UseRouteError),r=aT(bu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function DP(){let{router:t}=kP(oT.UseNavigateStable),e=aT(bu.UseNavigateStable),n=$.useRef(!1);return sT(()=>{n.current=!0}),$.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ma({fromRouteId:e},s)))},[t,e])}function Po(t){ze(!1)}function LP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1,future:a}=t;Dc()&&ze(!1);let u=e.replace(/^\/*/,"/"),c=$.useMemo(()=>({basename:u,navigator:s,static:o,future:ma({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Us(r));let{pathname:d="/",search:f="",hash:m="",state:y=null,key:R="default"}=r,P=$.useMemo(()=>{let O=tT(d,u);return O==null?null:{location:{pathname:O,search:f,hash:m,state:y,key:R},navigationType:i}},[u,d,f,m,y,R,i]);return P==null?null:$.createElement(Oc.Provider,{value:c},$.createElement(xc.Provider,{children:n,value:P}))}function MP(t){let{children:e,location:n}=t;return TP(pf(e),n)}new Promise(()=>{});function pf(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(r,i)=>{if(!$.isValidElement(r))return;let s=[...e,i];if(r.type===$.Fragment){n.push.apply(n,pf(r.props.children,s));return}r.type!==Po&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const bP="6";try{window.__reactRouterVersion=bP}catch{}const VP="startTransition",Oy=MR[VP];function FP(t){let{basename:e,children:n,future:r,window:i}=t,s=$.useRef();s.current==null&&(s.current=G1({window:i,v5Compat:!0}));let o=s.current,[a,u]=$.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=$.useCallback(f=>{c&&Oy?Oy(()=>u(f)):u(f)},[u,c]);return $.useLayoutEffect(()=>o.listen(d),[o,d]),$.createElement(LP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var xy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xy||(xy={}));var Dy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));var Ly={};/**
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
 */const lT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const V=function(t,e){if(!t)throw js(e)},js=function(t){return new Error("Firebase Database ("+lT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const uT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[d],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new BP;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cT=function(t){const e=uT(t);return Gp.encodeByteArray(e,!0)},Vu=function(t){return cT(t).replace(/\./g,"")},Fu=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jP(t){return hT(void 0,t)}function hT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zP(n)||(t[n]=hT(t[n],e[n]));return t}function zP(t){return t!=="__proto__"}/**
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
 */function $P(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WP=()=>$P().__FIREBASE_DEFAULTS__,HP=()=>{if(typeof process>"u"||typeof Ly>"u")return;const t=Ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fu(t[1]);return e&&JSON.parse(e)},Lc=()=>{try{return WP()||HP()||qP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dT=t=>{var e,n;return(n=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fT=t=>{const e=dT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pT=()=>{var t;return(t=Lc())===null||t===void 0?void 0:t.config},mT=t=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Kp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vu(JSON.stringify(n)),Vu(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function GP(){var t;const e=(t=Lc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QP(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yT(){return lT.NODE_ADMIN===!0}function YP(){return!GP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XP(){try{return typeof indexedDB=="object"}catch{return!1}}function JP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ZP="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZP,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ek(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,r)}}function ek(t,e){return t.replace(tk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tk=/\{\$([^}]+)}/g;/**
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
 */function ga(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const vT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ga(Fu(s[0])||""),n=ga(Fu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},nk=function(t){const e=vT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rk=function(t){const e=vT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function er(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Bu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(My(s)&&My(o)){if(!Bu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function My(t){return t!==null&&typeof t=="object"}/**
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
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class ik{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function sk(t,e){const n=new ok(t,e);return n.subscribe.bind(n)}class ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ak(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=td),i.error===void 0&&(i.error=td),i.complete===void 0&&(i.complete=td);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ak(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function td(){}function ET(t,e){return`${t} failed: ${e} argument `}/**
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
 */const lk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,V(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class uk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hk(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ck(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ck(t){return t===Yr?void 0:t}function hk(t){return t.instantiationMode==="EAGER"}/**
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
 */class dk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const fk={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},pk=se.INFO,mk={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},gk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=pk,this._logHandler=gk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const _k=(t,e)=>e.some(n=>t instanceof n);let by,Vy;function yk(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vk(){return Vy||(Vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wT=new WeakMap,gf=new WeakMap,TT=new WeakMap,nd=new WeakMap,Yp=new WeakMap;function Ek(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wT.set(n,t)}).catch(()=>{}),Yp.set(e,t),e}function wk(t){if(gf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gf.set(t,e)}let _f={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tk(t){_f=t(_f)}function Ik(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rd(this),e,...n);return TT.set(r,e.sort?e.sort():[e]),Rr(r)}:vk().includes(t)?function(...e){return t.apply(rd(this),e),Rr(wT.get(this))}:function(...e){return Rr(t.apply(rd(this),e))}}function Sk(t){return typeof t=="function"?Ik(t):(t instanceof IDBTransaction&&wk(t),_k(t,yk())?new Proxy(t,_f):t)}function Rr(t){if(t instanceof IDBRequest)return Ek(t);if(nd.has(t))return nd.get(t);const e=Sk(t);return e!==t&&(nd.set(t,e),Yp.set(e,t)),e}const rd=t=>Yp.get(t);function Ck(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Rk=["get","getKey","getAll","getAllKeys","count"],Ak=["put","add","delete","clear"],id=new Map;function Fy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ak.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Rk.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return id.set(e,s),s}Tk(t=>({...t,get:(e,n,r)=>Fy(e,n)||t.get(e,n,r),has:(e,n)=>!!Fy(e,n)||t.has(e,n)}));/**
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
 */class Pk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yf="@firebase/app",Uy="0.10.5";/**
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
 */const gi=new bc("@firebase/app"),Nk="@firebase/app-compat",Ok="@firebase/analytics-compat",xk="@firebase/analytics",Dk="@firebase/app-check-compat",Lk="@firebase/app-check",Mk="@firebase/auth",bk="@firebase/auth-compat",Vk="@firebase/database",Fk="@firebase/database-compat",Uk="@firebase/functions",Bk="@firebase/functions-compat",jk="@firebase/installations",zk="@firebase/installations-compat",$k="@firebase/messaging",Wk="@firebase/messaging-compat",Hk="@firebase/performance",qk="@firebase/performance-compat",Gk="@firebase/remote-config",Kk="@firebase/remote-config-compat",Qk="@firebase/storage",Yk="@firebase/storage-compat",Xk="@firebase/firestore",Jk="@firebase/vertexai-preview",Zk="@firebase/firestore-compat",eN="firebase",tN="10.12.2";/**
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
 */const vf="[DEFAULT]",nN={[yf]:"fire-core",[Nk]:"fire-core-compat",[xk]:"fire-analytics",[Ok]:"fire-analytics-compat",[Lk]:"fire-app-check",[Dk]:"fire-app-check-compat",[Mk]:"fire-auth",[bk]:"fire-auth-compat",[Vk]:"fire-rtdb",[Fk]:"fire-rtdb-compat",[Uk]:"fire-fn",[Bk]:"fire-fn-compat",[jk]:"fire-iid",[zk]:"fire-iid-compat",[$k]:"fire-fcm",[Wk]:"fire-fcm-compat",[Hk]:"fire-perf",[qk]:"fire-perf-compat",[Gk]:"fire-rc",[Kk]:"fire-rc-compat",[Qk]:"fire-gcs",[Yk]:"fire-gcs-compat",[Xk]:"fire-fst",[Zk]:"fire-fst-compat",[Jk]:"fire-vertex","fire-js":"fire-js",[eN]:"fire-js-all"};/**
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
 */const ju=new Map,rN=new Map,Ef=new Map;function By(t,e){try{t.container.addComponent(e)}catch(n){gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _i(t){const e=t.name;if(Ef.has(e))return gi.debug(`There were multiple attempts to register component ${e}.`),!1;Ef.set(e,t);for(const n of ju.values())By(n,t);for(const n of rN.values())By(n,t);return!0}function Vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bn(t){return t.settings!==void 0}/**
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
 */const iN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ar=new Ba("app","Firebase",iN);/**
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
 */class sN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ar.create("app-deleted",{appName:this._name})}}/**
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
 */const ki=tN;function IT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ar.create("bad-app-name",{appName:String(i)});if(n||(n=pT()),!n)throw Ar.create("no-options");const s=ju.get(i);if(s){if(Bu(n,s.options)&&Bu(r,s.config))return s;throw Ar.create("duplicate-app",{appName:i})}const o=new dk(i);for(const u of Ef.values())o.addComponent(u);const a=new sN(n,r,o);return ju.set(i,a),a}function Xp(t=vf){const e=ju.get(t);if(!e&&t===vf&&pT())return IT();if(!e)throw Ar.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=nN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gi.warn(a.join(" "));return}_i(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const oN="firebase-heartbeat-database",aN=1,_a="firebase-heartbeat-store";let sd=null;function ST(){return sd||(sd=Ck(oN,aN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ar.create("idb-open",{originalErrorMessage:t.message})})),sd}async function lN(t){try{const n=(await ST()).transaction(_a),r=await n.objectStore(_a).get(CT(t));return await n.done,r}catch(e){if(e instanceof Zn)gi.warn(e.message);else{const n=Ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gi.warn(n.message)}}}async function jy(t,e){try{const r=(await ST()).transaction(_a,"readwrite");await r.objectStore(_a).put(e,CT(t)),await r.done}catch(n){if(n instanceof Zn)gi.warn(n.message);else{const r=Ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gi.warn(r.message)}}}function CT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uN=1024,cN=30*24*60*60*1e3;class hN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=cN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zy(),{heartbeatsToSend:r,unsentEntries:i}=dN(this._heartbeatsCache.heartbeats),s=Vu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zy(){return new Date().toISOString().substring(0,10)}function dN(t,e=uN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$y(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XP()?JP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $y(t){return Vu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pN(t){_i(new Dr("platform-logger",e=>new Pk(e),"PRIVATE")),_i(new Dr("heartbeat",e=>new hN(e),"PRIVATE")),gn(yf,Uy,t),gn(yf,Uy,"esm2017"),gn("fire-js","")}pN("");var mN="firebase",gN="10.12.2";/**
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
 */gn(mN,gN,"app");const _N={apiKey:"AIzaSyDEoIOdrFe2NPDUVxORGGTA7Ky8Y28Xefg",authDomain:"getjob-2bdca.firebaseapp.com",databaseURL:"https://getjob-2bdca-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"getjob-2bdca",storageBucket:"getjob-2bdca.appspot.com",messagingSenderId:"338998159739",appId:"1:338998159739:web:042319b66c6d427b80b5de",measurementId:"G-9YLB73PZ2Q"},ai=IT(_N);function Jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function RT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yN=RT,AT=new Ba("auth","Firebase",RT());/**
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
 */const zu=new bc("@firebase/auth");function vN(t,...e){zu.logLevel<=se.WARN&&zu.warn(`Auth (${ki}): ${t}`,...e)}function nu(t,...e){zu.logLevel<=se.ERROR&&zu.error(`Auth (${ki}): ${t}`,...e)}/**
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
 */function En(t,...e){throw em(t,...e)}function ln(t,...e){return em(t,...e)}function Zp(t,e,n){const r=Object.assign(Object.assign({},yN()),{[e]:n});return new Ba("auth","Firebase",r).create(e,{appName:t.name})}function li(t){return Zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function EN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(t,"argument-error"),Zp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return AT.create(t,...e)}function Q(t,e,...n){if(!t)throw em(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nu(e),new Error(e)}function Kn(t,e){t||Vn(e)}/**
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
 */function wf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wN(){return Wy()==="http:"||Wy()==="https:"}function Wy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wN()||KP()||"connection"in navigator)?navigator.onLine:!0}function IN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qp()||_T()}get(){return TN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tm(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class PT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CN=new ja(3e4,6e4);function nm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $s(t,e,n,r,i={}){return kT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),PT.fetch()(NT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function kT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SN),e);try{const i=new AN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zp(t,d,c);En(t,d)}}catch(i){if(i instanceof Zn)throw i;En(t,"network-request-failed",{message:String(i)})}}async function RN(t,e,n,r,i={}){const s=await $s(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}function NT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tm(t.config,i):`${t.config.apiScheme}://${i}`}class AN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),CN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function PN(t,e){return $s(t,"POST","/v1/accounts:delete",e)}async function OT(t,e){return $s(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kN(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=rm(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(od(i.auth_time)),issuedAtTime:jo(od(i.iat)),expirationTime:jo(od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function od(t){return Number(t)*1e3}function rm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fu(n);return i?JSON.parse(i):(nu("Failed to decode base64 JWT payload"),null)}catch(i){return nu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hy(t){const e=rm(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ya(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&NN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ON{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ya(t,OT(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xT(s.providerUserInfo):[],a=DN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function xN(t){const e=mt(t);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xT(t){return t.map(e=>{var{providerId:n}=e,r=Jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function LN(t,e){const n=await kT(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=NT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MN(t,e){return $s(t,"POST","/v2/accounts:revokeToken",nm(t,e))}/**
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
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Hy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cs;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function sr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ON(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ya(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kN(this,e)}reload(){return xN(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(li(this.auth));const e=await this.getIdToken();return await ya(this,PN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:D,isAnonymous:F,providerData:U,stsTokenManager:w}=n;Q(C&&w,e,"internal-error");const _=cs.fromJSON(this.name,w);Q(typeof C=="string",e,"internal-error"),sr(f,e.name),sr(m,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof F=="boolean",e,"internal-error"),sr(y,e.name),sr(R,e.name),sr(P,e.name),sr(O,e.name),sr(T,e.name),sr(v,e.name);const E=new Fn({uid:C,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:F,photoURL:R,phoneNumber:y,tenantId:P,stsTokenManager:_,createdAt:T,lastLoginAt:v});return U&&Array.isArray(U)&&(E.providerData=U.map(I=>Object.assign({},I))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new cs;i.updateFromServerResponse(n);const s=new Fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $u(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new cs;a.updateFromIdToken(r);const u=new Fn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const qy=new Map;function Un(t){Kn(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
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
 */class DT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}DT.type="NONE";const Gy=DT;/**
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
 */function ru(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ru(this.userKey,i.apiKey,s),this.fullPersistenceKey=ru("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(Un(Gy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(Gy);const o=ru(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Fn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new hs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new hs(s,e,r))}}/**
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
 */function Ky(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FT(e))return"Blackberry";if(UT(e))return"Webos";if(im(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(VT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LT(t=nt()){return/firefox\//i.test(t)}function im(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(t=nt()){return/crios\//i.test(t)}function bT(t=nt()){return/iemobile/i.test(t)}function VT(t=nt()){return/android/i.test(t)}function FT(t=nt()){return/blackberry/i.test(t)}function UT(t=nt()){return/webos/i.test(t)}function Fc(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bN(t=nt()){var e;return Fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VN(){return QP()&&document.documentMode===10}function BT(t=nt()){return Fc(t)||VT(t)||UT(t)||FT(t)||/windows phone/i.test(t)||bT(t)}function FN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jT(t,e=[]){let n;switch(t){case"Browser":n=Ky(nt());break;case"Worker":n=`${Ky(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
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
 */class UN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BN(t,e={}){return $s(t,"GET","/v2/passwordPolicy",nm(t,e))}/**
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
 */const jN=6;class zN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $N{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qy(this),this.idTokenSubscription=new Qy(this),this.beforeStateQueue=new UN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await OT(this,{idToken:e}),r=await Fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(li(this));const n=e?mt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BN(this),n=new zN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Uc(t){return mt(t)}class Qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=sk(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WN(t){sm=t}function HN(t){return sm.loadJS(t)}function qN(){return sm.gapiScript}function GN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function KN(t,e){const n=Vc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bu(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function QN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YN(t,e,n){const r=Uc(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zT(e),{host:o,port:a}=XN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),JN()}function zT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XN(t){const e=zT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yy(o)}}}function Yy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $T{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
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
 */async function ds(t,e){return RN(t,"POST","/v1/accounts:signInWithIdp",nm(t,e))}/**
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
 */const ZN="http://localhost";class yi extends $T{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:ZN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
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
 */class om{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class za extends om{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends za{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class Dn extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
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
 */class dr extends za{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class fr extends za{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fn._fromIdTokenResponse(e,r,i),o=Xy(r);return new Cs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xy(r);return new Cs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wu extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wu(e,n,r,i)}}function WT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(t,s,e,r):s})}async function eO(t,e,n=!1){const r=await ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
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
 */async function tO(t,e,n=!1){const{auth:r}=t;if(bn(r.app))return Promise.reject(li(r));const i="reauthenticate";try{const s=await ya(t,WT(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=rm(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Cs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
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
 */async function nO(t,e,n=!1){if(bn(t.app))return Promise.reject(li(t));const r="signIn",i=await WT(t,r,e),s=await Cs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function rO(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function iO(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function am(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function lm(t){return mt(t).signOut()}const Hu="__sak";/**
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
 */class HT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sO(){const t=nt();return im(t)||Fc(t)}const oO=1e3,aO=10;class qT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sO()&&FN(),this.fallbackToPolling=BT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qT.type="LOCAL";const lO=qT;/**
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
 */class GT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GT.type="SESSION";const KT=GT;/**
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
 */function uO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await uO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bc.receivers=[];/**
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
 */function um(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=um("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function hO(t){_n().location.href=t}/**
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
 */function QT(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function dO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pO(){return QT()?self:null}/**
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
 */const YT="firebaseLocalStorageDb",mO=1,qu="firebaseLocalStorage",XT="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function gO(){const t=indexedDB.deleteDatabase(YT);return new $a(t).toPromise()}function If(){const t=indexedDB.open(YT,mO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qu,{keyPath:XT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qu)?e(r):(r.close(),await gO(),e(await If()))})})}async function Jy(t,e,n){const r=jc(t,!0).put({[XT]:e,value:n});return new $a(r).toPromise()}async function _O(t,e){const n=jc(t,!1).get(e),r=await new $a(n).toPromise();return r===void 0?null:r.value}function Zy(t,e){const n=jc(t,!0).delete(e);return new $a(n).toPromise()}const yO=800,vO=3;class JT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bc._getInstance(pO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dO(),!this.activeServiceWorker)return;this.sender=new cO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await Jy(e,Hu,"1"),await Zy(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_O(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jc(i,!1).getAll();return new $a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JT.type="LOCAL";const EO=JT;new ja(3e4,6e4);/**
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
 */function ZT(t,e){return e?Un(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cm extends $T{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wO(t){return nO(t.auth,new cm(t),t.bypassAuthState)}function TO(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tO(n,new cm(t),t.bypassAuthState)}async function IO(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),eO(n,new cm(t),t.bypassAuthState)}/**
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
 */class eI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wO;case"linkViaPopup":case"linkViaRedirect":return IO;case"reauthViaPopup":case"reauthViaRedirect":return TO;default:En(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SO=new ja(2e3,1e4);async function CO(t,e,n){if(bn(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Uc(t);EN(t,e,om);const i=ZT(r,n);return new ti(r,"signInViaPopup",e,i).executeNotNull()}class ti extends eI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=um();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SO.get())};e()}}ti.currentPopupAction=null;/**
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
 */const RO="pendingRedirect",iu=new Map;class AO extends eI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=iu.get(this.auth._key());if(!e){try{const r=await PO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}iu.set(this.auth._key(),e)}return this.bypassAuthState||iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PO(t,e){const n=OO(e),r=NO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kO(t,e){iu.set(t._key(),e)}function NO(t){return Un(t._redirectPersistence)}function OO(t){return ru(RO,t.config.apiKey,t.name)}async function xO(t,e,n=!1){if(bn(t.app))return Promise.reject(li(t));const r=Uc(t),i=ZT(r,e),o=await new AO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DO=10*60*1e3;class LO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DO&&this.cachedEventUids.clear(),this.cachedEventUids.has(ev(e))}saveEventToCache(e){this.cachedEventUids.add(ev(e)),this.lastProcessedEventTime=Date.now()}}function ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tI(t);default:return!1}}/**
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
 */async function bO(t,e={}){return $s(t,"GET","/v1/projects",e)}/**
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
 */const VO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FO=/^https?/;async function UO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bO(t);for(const n of e)try{if(BO(n))return}catch{}En(t,"unauthorized-domain")}function BO(t){const e=wf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FO.test(n))return!1;if(VO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jO=new ja(3e4,6e4);function tv(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zO(t){return new Promise((e,n)=>{var r,i,s;function o(){tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tv(),n(ln(t,"network-request-failed"))},timeout:jO.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=GN("iframefcb");return _n()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},HN(`${qN()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw su=null,e})}let su=null;function $O(t){return su=su||zO(t),su}/**
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
 */const WO=new ja(5e3,15e3),HO="__/auth/iframe",qO="emulator/auth/iframe",GO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QO(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tm(e,qO):`https://${t.config.authDomain}/${HO}`,r={apiKey:e.apiKey,appName:t.name,v:ki},i=KO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zs(r).slice(1)}`}async function YO(t){const e=await $O(t),n=_n().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:QO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},WO.get());function u(){_n().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const XO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JO=500,ZO=600,ex="_blank",tx="http://localhost";class nv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nx(t,e,n,r=JO,i=ZO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},XO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=nt().toLowerCase();n&&(a=MT(c)?ex:n),LT(c)&&(e=e||tx,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[y,R])=>`${m}${y}=${R},`,"");if(bN(c)&&a!=="_self")return rx(e||"",a),new nv(null);const f=window.open(e||"",a,d);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new nv(f)}function rx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ix="__/auth/handler",sx="emulator/auth/handler",ox=encodeURIComponent("fac");async function rv(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(e instanceof om){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof za){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${ox}=${encodeURIComponent(u)}`:"";return`${ax(t)}?${zs(a).slice(1)}${c}`}function ax({config:t}){return t.emulator?tm(t,sx):`https://${t.authDomain}/${ix}`}/**
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
 */const ad="webStorageSupport";class lx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KT,this._completeRedirectFn=xO,this._overrideRedirectResult=kO}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rv(e,n,r,wf(),i);return nx(e,o,um())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rv(e,n,r,wf(),i);return hO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YO(e),r=new LO(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ad,{type:ad},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ad];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return BT()||im()||Fc()}}const ux=lx;var iv="@firebase/auth",sv="1.7.4";/**
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
 */class cx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dx(t){_i(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jT(t)},c=new $N(r,i,s,u);return QN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_i(new Dr("auth-internal",e=>{const n=Uc(e.getProvider("auth").getImmediate());return(r=>new cx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(iv,sv,hx(t)),gn(iv,sv,"esm2017")}/**
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
 */const fx=5*60,px=mT("authIdTokenMaxAge")||fx;let ov=null;const mx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>px)return;const i=n==null?void 0:n.token;ov!==i&&(ov=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hm(t=Xp()){const e=Vc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KN(t,{popupRedirectResolver:ux,persistence:[EO,lO,KT]}),r=mT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mx(s.toString());iO(n,o,()=>o(n.currentUser)),rO(n,a=>o(a))}}const i=dT("auth");return i&&YN(n,`http://${i}`),n}function gx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dx("Browser");var av=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,nI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.D=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,A,k){for(var S=Array(arguments.length-2),It=2;It<arguments.length;It++)S[It-2]=arguments[It];return _.prototype[A].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,E){E||(E=0);var I=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)I[A]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(A=0;16>A;++A)I[A]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],A=w.g[2];var k=w.g[3],S=_+(k^E&(A^k))+I[0]+3614090360&4294967295;_=E+(S<<7&4294967295|S>>>25),S=k+(A^_&(E^A))+I[1]+3905402710&4294967295,k=_+(S<<12&4294967295|S>>>20),S=A+(E^k&(_^E))+I[2]+606105819&4294967295,A=k+(S<<17&4294967295|S>>>15),S=E+(_^A&(k^_))+I[3]+3250441966&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(k^E&(A^k))+I[4]+4118548399&4294967295,_=E+(S<<7&4294967295|S>>>25),S=k+(A^_&(E^A))+I[5]+1200080426&4294967295,k=_+(S<<12&4294967295|S>>>20),S=A+(E^k&(_^E))+I[6]+2821735955&4294967295,A=k+(S<<17&4294967295|S>>>15),S=E+(_^A&(k^_))+I[7]+4249261313&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(k^E&(A^k))+I[8]+1770035416&4294967295,_=E+(S<<7&4294967295|S>>>25),S=k+(A^_&(E^A))+I[9]+2336552879&4294967295,k=_+(S<<12&4294967295|S>>>20),S=A+(E^k&(_^E))+I[10]+4294925233&4294967295,A=k+(S<<17&4294967295|S>>>15),S=E+(_^A&(k^_))+I[11]+2304563134&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(k^E&(A^k))+I[12]+1804603682&4294967295,_=E+(S<<7&4294967295|S>>>25),S=k+(A^_&(E^A))+I[13]+4254626195&4294967295,k=_+(S<<12&4294967295|S>>>20),S=A+(E^k&(_^E))+I[14]+2792965006&4294967295,A=k+(S<<17&4294967295|S>>>15),S=E+(_^A&(k^_))+I[15]+1236535329&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(A^k&(E^A))+I[1]+4129170786&4294967295,_=E+(S<<5&4294967295|S>>>27),S=k+(E^A&(_^E))+I[6]+3225465664&4294967295,k=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(k^_))+I[11]+643717713&4294967295,A=k+(S<<14&4294967295|S>>>18),S=E+(k^_&(A^k))+I[0]+3921069994&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(A^k&(E^A))+I[5]+3593408605&4294967295,_=E+(S<<5&4294967295|S>>>27),S=k+(E^A&(_^E))+I[10]+38016083&4294967295,k=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(k^_))+I[15]+3634488961&4294967295,A=k+(S<<14&4294967295|S>>>18),S=E+(k^_&(A^k))+I[4]+3889429448&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(A^k&(E^A))+I[9]+568446438&4294967295,_=E+(S<<5&4294967295|S>>>27),S=k+(E^A&(_^E))+I[14]+3275163606&4294967295,k=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(k^_))+I[3]+4107603335&4294967295,A=k+(S<<14&4294967295|S>>>18),S=E+(k^_&(A^k))+I[8]+1163531501&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(A^k&(E^A))+I[13]+2850285829&4294967295,_=E+(S<<5&4294967295|S>>>27),S=k+(E^A&(_^E))+I[2]+4243563512&4294967295,k=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(k^_))+I[7]+1735328473&4294967295,A=k+(S<<14&4294967295|S>>>18),S=E+(k^_&(A^k))+I[12]+2368359562&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(E^A^k)+I[5]+4294588738&4294967295,_=E+(S<<4&4294967295|S>>>28),S=k+(_^E^A)+I[8]+2272392833&4294967295,k=_+(S<<11&4294967295|S>>>21),S=A+(k^_^E)+I[11]+1839030562&4294967295,A=k+(S<<16&4294967295|S>>>16),S=E+(A^k^_)+I[14]+4259657740&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(E^A^k)+I[1]+2763975236&4294967295,_=E+(S<<4&4294967295|S>>>28),S=k+(_^E^A)+I[4]+1272893353&4294967295,k=_+(S<<11&4294967295|S>>>21),S=A+(k^_^E)+I[7]+4139469664&4294967295,A=k+(S<<16&4294967295|S>>>16),S=E+(A^k^_)+I[10]+3200236656&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(E^A^k)+I[13]+681279174&4294967295,_=E+(S<<4&4294967295|S>>>28),S=k+(_^E^A)+I[0]+3936430074&4294967295,k=_+(S<<11&4294967295|S>>>21),S=A+(k^_^E)+I[3]+3572445317&4294967295,A=k+(S<<16&4294967295|S>>>16),S=E+(A^k^_)+I[6]+76029189&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(E^A^k)+I[9]+3654602809&4294967295,_=E+(S<<4&4294967295|S>>>28),S=k+(_^E^A)+I[12]+3873151461&4294967295,k=_+(S<<11&4294967295|S>>>21),S=A+(k^_^E)+I[15]+530742520&4294967295,A=k+(S<<16&4294967295|S>>>16),S=E+(A^k^_)+I[2]+3299628645&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(A^(E|~k))+I[0]+4096336452&4294967295,_=E+(S<<6&4294967295|S>>>26),S=k+(E^(_|~A))+I[7]+1126891415&4294967295,k=_+(S<<10&4294967295|S>>>22),S=A+(_^(k|~E))+I[14]+2878612391&4294967295,A=k+(S<<15&4294967295|S>>>17),S=E+(k^(A|~_))+I[5]+4237533241&4294967295,E=A+(S<<21&4294967295|S>>>11),S=_+(A^(E|~k))+I[12]+1700485571&4294967295,_=E+(S<<6&4294967295|S>>>26),S=k+(E^(_|~A))+I[3]+2399980690&4294967295,k=_+(S<<10&4294967295|S>>>22),S=A+(_^(k|~E))+I[10]+4293915773&4294967295,A=k+(S<<15&4294967295|S>>>17),S=E+(k^(A|~_))+I[1]+2240044497&4294967295,E=A+(S<<21&4294967295|S>>>11),S=_+(A^(E|~k))+I[8]+1873313359&4294967295,_=E+(S<<6&4294967295|S>>>26),S=k+(E^(_|~A))+I[15]+4264355552&4294967295,k=_+(S<<10&4294967295|S>>>22),S=A+(_^(k|~E))+I[6]+2734768916&4294967295,A=k+(S<<15&4294967295|S>>>17),S=E+(k^(A|~_))+I[13]+1309151649&4294967295,E=A+(S<<21&4294967295|S>>>11),S=_+(A^(E|~k))+I[4]+4149444226&4294967295,_=E+(S<<6&4294967295|S>>>26),S=k+(E^(_|~A))+I[11]+3174756917&4294967295,k=_+(S<<10&4294967295|S>>>22),S=A+(_^(k|~E))+I[2]+718787259&4294967295,A=k+(S<<15&4294967295|S>>>17),S=E+(k^(A|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var E=_-this.blockSize,I=this.B,A=this.h,k=0;k<_;){if(A==0)for(;k<=E;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<_;)if(I[A++]=w.charCodeAt(k++),A==this.blockSize){i(this,I),A=0;break}}else for(;k<_;)if(I[A++]=w[k++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var E=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=E&255,E/=256;for(this.u(w),w=Array(16),_=E=0;4>_;++_)for(var I=0;32>I;I+=8)w[E++]=this.g[_]>>>I&255;return w};function s(w,_){var E=a;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;for(var E=[],I=!0,A=w.length-1;0<=A;A--){var k=w[A]|0;I&&k==_||(E[A]=k,I=!1)}this.g=E}var a={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return O(c(-w));for(var _=[],E=1,I=0;w>=E;I++)_[I]=w/E|0,E*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return O(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),I=f,A=0;A<w.length;A+=8){var k=Math.min(8,w.length-A),S=parseInt(w.substring(A,A+k),_);8>k?(k=c(Math.pow(_,k)),I=I.j(k).add(c(S))):(I=I.j(E),I=I.add(c(S)))}return I}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var w=0,_=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+O(this).toString(w);for(var _=c(Math.pow(w,6)),E=this,I="";;){var A=D(E,_).g;E=T(E,A.j(_));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=A,R(E))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=T(this,w),P(w)?-1:R(w)?0:1};function O(w){for(var _=w.g.length,E=[],I=0;I<_;I++)E[I]=~w.g[I];return new o(E,~w.h).add(m)}t.abs=function(){return P(this)?O(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0,A=0;A<=_;A++){var k=I+(this.i(A)&65535)+(w.i(A)&65535),S=(k>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=S>>>16,k&=65535,S&=65535,E[A]=S<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,_){return w.add(O(_))}t.j=function(w){if(R(this)||R(w))return f;if(P(this))return P(w)?O(this).j(O(w)):O(O(this).j(w));if(P(w))return O(this.j(O(w)));if(0>this.l(y)&&0>w.l(y))return c(this.m()*w.m());for(var _=this.g.length+w.g.length,E=[],I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var k=this.i(I)>>>16,S=this.i(I)&65535,It=w.i(A)>>>16,In=w.i(A)&65535;E[2*I+2*A]+=S*In,v(E,2*I+2*A),E[2*I+2*A+1]+=k*In,v(E,2*I+2*A+1),E[2*I+2*A+1]+=S*It,v(E,2*I+2*A+1),E[2*I+2*A+2]+=k*It,v(E,2*I+2*A+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new o(E,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function C(w,_){this.g=w,this.h=_}function D(w,_){if(R(_))throw Error("division by zero");if(R(w))return new C(f,f);if(P(w))return _=D(O(w),_),new C(O(_.g),O(_.h));if(P(_))return _=D(w,O(_)),new C(O(_.g),_.h);if(30<w.g.length){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=_;0>=I.l(w);)E=F(E),I=F(I);var A=U(E,1),k=U(I,1);for(I=U(I,2),E=U(E,2);!R(I);){var S=k.add(I);0>=S.l(w)&&(A=A.add(E),k=S),I=U(I,1),E=U(E,1)}return _=T(w,A.j(_)),new C(A,_)}for(A=f;0<=w.l(_);){for(E=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=c(E),S=k.j(_);P(S)||0<S.l(w);)E-=I,k=c(E),S=k.j(_);R(k)&&(k=m),A=A.add(k),w=T(w,S)}return new C(A,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)&w.i(I);return new o(E,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)|w.i(I);return new o(E,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)^w.i(I);return new o(E,this.h^w.h)};function F(w){for(var _=w.g.length+1,E=[],I=0;I<_;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(E,w.h)}function U(w,_){var E=_>>5;_%=32;for(var I=w.g.length-E,A=[],k=0;k<I;k++)A[k]=0<_?w.i(k+E)>>>_|w.i(k+E+1)<<32-_:w.i(k+E);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ui=o}).apply(typeof av<"u"?av:typeof self<"u"?self:typeof window<"u"?window:{});var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rI,iI,ko,sI,ou,Sf,oI,aI,lI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fl=="object"&&Fl];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var N=l[g];if(!(N in p))break e;p=p[N]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,g=!1,N={next:function(){if(!g&&p<l.length){var x=p++;return{value:h(x,l[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),l.apply(h,N)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function y(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function R(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,N,x){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return h.prototype[N].apply(g,B)}}function P(l){const h=l.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function O(l,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const N=l.length||0,x=g.length||0;l.length=N+x;for(let B=0;B<x;B++)l[N+B]=g[B]}else l.push(g)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var F=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function U(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function w(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function _(l){const h={};for(const p in l)h[p]=l[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,h){let p,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(p in g)l[p]=g[p];for(let x=0;x<E.length;x++)p=E[x],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function A(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function k(l){a.setTimeout(()=>{throw l},0)}function S(){var l=z;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class It{constructor(){this.h=this.g=null}add(h,p){const g=In.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var In=new T(()=>new $r,l=>l.reset());class $r{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Qt,j=!1,z=new It,J=()=>{const l=a.Promise.resolve(void 0);Qt=()=>{l.then(ve)}};var ve=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(p){k(p)}var h=In;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}j=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Cn(l,h){if(xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{D(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Rn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Cn.aa.h.call(this)}}R(Cn,xe);var Rn={2:"touch",3:"pen",4:"mouse"};Cn.prototype.h=function(){Cn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var An="closure_listenable_"+(1e6*Math.random()|0),jC=0;function zC(l,h,p,g,N){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=N,this.key=++jC,this.da=this.fa=!1}function rl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function il(l){this.src=l,this.g={},this.h=0}il.prototype.add=function(l,h,p,g,N){var x=l.toString();l=this.g[x],l||(l=this.g[x]=[],this.h++);var B=oh(l,h,g,N);return-1<B?(h=l[B],p||(h.fa=!1)):(h=new zC(h,this.src,x,!!g,N),h.fa=p,l.push(h)),h};function sh(l,h){var p=h.type;if(p in l.g){var g=l.g[p],N=Array.prototype.indexOf.call(g,h,void 0),x;(x=0<=N)&&Array.prototype.splice.call(g,N,1),x&&(rl(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function oh(l,h,p,g){for(var N=0;N<l.length;++N){var x=l[N];if(!x.da&&x.listener==h&&x.capture==!!p&&x.ha==g)return N}return-1}var ah="closure_lm_"+(1e6*Math.random()|0),lh={};function vg(l,h,p,g,N){if(Array.isArray(h)){for(var x=0;x<h.length;x++)vg(l,h[x],p,g,N);return null}return p=Tg(p),l&&l[An]?l.K(h,p,c(g)?!!g.capture:!!g,N):$C(l,h,p,!1,g,N)}function $C(l,h,p,g,N,x){if(!h)throw Error("Invalid event type");var B=c(N)?!!N.capture:!!N,pe=ch(l);if(pe||(l[ah]=pe=new il(l)),p=pe.add(h,p,g,B,x),p.proxy)return p;if(g=WC(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)Sn||(N=B),N===void 0&&(N=!1),l.addEventListener(h.toString(),g,N);else if(l.attachEvent)l.attachEvent(wg(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function WC(){function l(p){return h.call(l.src,l.listener,p)}const h=HC;return l}function Eg(l,h,p,g,N){if(Array.isArray(h))for(var x=0;x<h.length;x++)Eg(l,h[x],p,g,N);else g=c(g)?!!g.capture:!!g,p=Tg(p),l&&l[An]?(l=l.i,h=String(h).toString(),h in l.g&&(x=l.g[h],p=oh(x,p,g,N),-1<p&&(rl(x[p]),Array.prototype.splice.call(x,p,1),x.length==0&&(delete l.g[h],l.h--)))):l&&(l=ch(l))&&(h=l.g[h.toString()],l=-1,h&&(l=oh(h,p,g,N)),(p=-1<l?h[l]:null)&&uh(p))}function uh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[An])sh(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(wg(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=ch(h))?(sh(p,l),p.h==0&&(p.src=null,h[ah]=null)):rl(l)}}}function wg(l){return l in lh?lh[l]:lh[l]="on"+l}function HC(l,h){if(l.da)l=!0;else{h=new Cn(h,this);var p=l.listener,g=l.ha||l.src;l.fa&&uh(l),l=p.call(g,h)}return l}function ch(l){return l=l[ah],l instanceof il?l:null}var hh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tg(l){return typeof l=="function"?l:(l[hh]||(l[hh]=function(h){return l.handleEvent(h)}),l[hh])}function rt(){fe.call(this),this.i=new il(this),this.M=this,this.F=null}R(rt,fe),rt.prototype[An]=!0,rt.prototype.removeEventListener=function(l,h,p,g){Eg(this,l,h,p,g)};function _t(l,h){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new xe(h,l);else if(h instanceof xe)h.target=h.target||l;else{var N=h;h=new xe(g,l),I(h,N)}if(N=!0,p)for(var x=p.length-1;0<=x;x--){var B=h.g=p[x];N=sl(B,g,!0,h)&&N}if(B=h.g=l,N=sl(B,g,!0,h)&&N,N=sl(B,g,!1,h)&&N,p)for(x=0;x<p.length;x++)B=h.g=p[x],N=sl(B,g,!1,h)&&N}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],g=0;g<p.length;g++)rl(p[g]);delete l.g[h],l.h--}}this.F=null},rt.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},rt.prototype.L=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function sl(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,x=0;x<h.length;++x){var B=h[x];if(B&&!B.da&&B.capture==p){var pe=B.listener,Ye=B.ha||B.src;B.fa&&sh(l.i,B),N=pe.call(Ye,g)!==!1&&N}}return N&&!g.defaultPrevented}function Ig(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Sg(l){l.g=Ig(()=>{l.g=null,l.i&&(l.i=!1,Sg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class qC extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Sg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ys(l){fe.call(this),this.h=l,this.g={}}R(Ys,fe);var Cg=[];function Rg(l){U(l.g,function(h,p){this.g.hasOwnProperty(p)&&uh(h)},l),l.g={}}Ys.prototype.N=function(){Ys.aa.N.call(this),Rg(this)},Ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dh=a.JSON.stringify,GC=a.JSON.parse,KC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function fh(){}fh.prototype.h=null;function Ag(l){return l.h||(l.h=l.i())}function Pg(){}var Xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ph(){xe.call(this,"d")}R(ph,xe);function mh(){xe.call(this,"c")}R(mh,xe);var Wr={},kg=null;function ol(){return kg=kg||new rt}Wr.La="serverreachability";function Ng(l){xe.call(this,Wr.La,l)}R(Ng,xe);function Js(l){const h=ol();_t(h,new Ng(h))}Wr.STAT_EVENT="statevent";function Og(l,h){xe.call(this,Wr.STAT_EVENT,l),this.stat=h}R(Og,xe);function yt(l){const h=ol();_t(h,new Og(h,l))}Wr.Ma="timingevent";function xg(l,h){xe.call(this,Wr.Ma,l),this.size=h}R(xg,xe);function Zs(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function eo(){this.g=!0}eo.prototype.xa=function(){this.g=!1};function QC(l,h,p,g,N,x){l.info(function(){if(l.g)if(x)for(var B="",pe=x.split("&"),Ye=0;Ye<pe.length;Ye++){var ue=pe[Ye].split("=");if(1<ue.length){var it=ue[0];ue=ue[1];var st=it.split("_");B=2<=st.length&&st[1]=="type"?B+(it+"="+ue+"&"):B+(it+"=redacted&")}}else B=null;else B=x;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+p+`
`+B})}function YC(l,h,p,g,N,x,B){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+p+`
`+x+" "+B})}function Li(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+JC(l,p)+(g?" "+g:"")})}function XC(l,h){l.info(function(){return"TIMEOUT: "+h})}eo.prototype.info=function(){};function JC(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var x=N[0];if(x!="noop"&&x!="stop"&&x!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return dh(p)}catch{return h}}var al={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gh;function ll(){}R(ll,fh),ll.prototype.g=function(){return new XMLHttpRequest},ll.prototype.i=function(){return{}},gh=new ll;function tr(l,h,p,g){this.j=l,this.i=h,this.l=p,this.R=g||1,this.U=new Ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lg}function Lg(){this.i=null,this.g="",this.h=!1}var Mg={},_h={};function yh(l,h,p){l.L=1,l.v=dl(Pn(h)),l.m=p,l.P=!0,bg(l,null)}function bg(l,h){l.F=Date.now(),ul(l),l.A=Pn(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),Yg(p.i,"t",g),l.C=0,p=l.j.J,l.h=new Lg,l.g=p_(l.j,p?h:null,!l.m),0<l.O&&(l.M=new qC(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,g=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Cg[0]=N.toString()),N=Cg);for(var x=0;x<N.length;x++){var B=vg(p,N[x],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Js(),QC(l.i,l.u,l.A,l.l,l.R,l.m)}tr.prototype.ca=function(l){l=l.target;const h=this.M;h&&kn(l)==3?h.j():this.Y(l)},tr.prototype.Y=function(l){try{if(l==this.g)e:{const st=kn(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||r_(this.g)))){this.J||st!=4||h==7||(h==8||0>=Vi?Js(3):Js(2)),vh(this);var p=this.g.Z();this.X=p;t:if(Vg(this)){var g=r_(this.g);l="";var N=g.length,x=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hr(this),to(this);var B="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(x&&h==N-1)});g.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,YC(this.i,this.u,this.A,this.l,this.R,st,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ye=this.g;if((pe=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var ue=pe;break t}}ue=null}if(p=ue)Li(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eh(this,p);else{this.o=!1,this.s=3,yt(12),Hr(this),to(this);break e}}if(this.P){p=!0;let Yt;for(;!this.J&&this.C<B.length;)if(Yt=ZC(this,B),Yt==_h){st==4&&(this.s=4,yt(14),p=!1),Li(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Mg){this.s=4,yt(15),Li(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else Li(this.i,this.l,Yt,null),Eh(this,Yt);if(Vg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||B.length!=0||this.h.h||(this.s=1,yt(16),p=!1),this.o=this.o&&p,!p)Li(this.i,this.l,B,"[Invalid Chunked Response]"),Hr(this),to(this);else if(0<B.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Rh(it),it.M=!0,yt(11))}}else Li(this.i,this.l,B,null),Eh(this,B);st==4&&Hr(this),this.o&&!this.J&&(st==4?c_(this.j,this):(this.o=!1,ul(this)))}else gR(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Hr(this),to(this)}}}catch{}finally{}};function Vg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ZC(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?_h:(p=Number(h.substring(p,g)),isNaN(p)?Mg:(g+=1,g+p>h.length?_h:(h=h.slice(g,g+p),l.C=g+p,h)))}tr.prototype.cancel=function(){this.J=!0,Hr(this)};function ul(l){l.S=Date.now()+l.I,Fg(l,l.I)}function Fg(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Zs(m(l.ba,l),h)}function vh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}tr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(XC(this.i,this.A),this.L!=2&&(Js(),yt(17)),Hr(this),this.s=2,to(this)):Fg(this,this.S-l)};function to(l){l.j.G==0||l.J||c_(l.j,l)}function Hr(l){vh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Rg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Eh(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||wh(p.h,l))){if(!l.K&&wh(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)_l(p),ml(p);else break e;Ch(p),yt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Zs(m(p.Za,p),6e3));if(1>=jg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Gr(p,11)}else if((l.K||p.g==l)&&_l(p),!v(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let ue=N[h];if(p.T=ue[0],ue=ue[1],p.G==2)if(ue[0]=="c"){p.K=ue[1],p.ia=ue[2];const it=ue[3];it!=null&&(p.la=it,p.j.info("VER="+p.la));const st=ue[4];st!=null&&(p.Aa=st,p.j.info("SVER="+p.Aa));const Vi=ue[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(g=1.5*Vi,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Yt=l.g;if(Yt){const vl=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vl){var x=g.h;x.g||vl.indexOf("spdy")==-1&&vl.indexOf("quic")==-1&&vl.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Th(x,x.h),x.h=null))}if(g.D){const Ah=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ah&&(g.ya=Ah,Ee(g.I,g.D,Ah))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var B=l;if(g.qa=f_(g,g.J?g.ia:null,g.W),B.K){zg(g.h,B);var pe=B,Ye=g.L;Ye&&(pe.I=Ye),pe.B&&(vh(pe),ul(pe)),g.g=B}else l_(g);0<p.i.length&&gl(p)}else ue[0]!="stop"&&ue[0]!="close"||Gr(p,7);else p.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Gr(p,7):Sh(p):ue[0]!="noop"&&p.l&&p.l.ta(ue),p.v=0)}}Js(4)}catch{}}var eR=class{constructor(l,h){this.g=l,this.map=h}};function Ug(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function jg(l){return l.h?1:l.g?l.g.size:0}function wh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Th(l,h){l.g?l.g.add(h):l.h=h}function zg(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Ug.prototype.cancel=function(){if(this.i=$g(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function $g(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return P(l.i)}function tR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,g=0;g<p;g++)h.push(l[g]);return h}h=[],p=0;for(g in l)h[p++]=l[g];return h}function nR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const g in l)h[p++]=g;return h}}}function Wg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=nR(l),g=tR(l),N=g.length,x=0;x<N;x++)h.call(void 0,g[x],p&&p[x],l)}var Hg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rR(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),N=null;if(0<=g){var x=l[p].substring(0,g);N=l[p].substring(g+1)}else x=l[p];h(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function qr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof qr){this.h=l.h,cl(this,l.j),this.o=l.o,this.g=l.g,hl(this,l.s),this.l=l.l;var h=l.i,p=new io;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),qg(this,p),this.m=l.m}else l&&(h=String(l).match(Hg))?(this.h=!1,cl(this,h[1]||"",!0),this.o=no(h[2]||""),this.g=no(h[3]||"",!0),hl(this,h[4]),this.l=no(h[5]||"",!0),qg(this,h[6]||"",!0),this.m=no(h[7]||"")):(this.h=!1,this.i=new io(null,this.h))}qr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ro(h,Gg,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ro(h,Gg,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ro(p,p.charAt(0)=="/"?oR:sR,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ro(p,lR)),l.join("")};function Pn(l){return new qr(l)}function cl(l,h,p){l.j=p?no(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function hl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function qg(l,h,p){h instanceof io?(l.i=h,uR(l.i,l.h)):(p||(h=ro(h,aR)),l.i=new io(h,l.h))}function Ee(l,h,p){l.i.set(h,p)}function dl(l){return Ee(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function no(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ro(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,iR),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function iR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Gg=/[#\/\?@]/g,sR=/[#\?:]/g,oR=/[#\?]/g,aR=/[#\?@]/g,lR=/#/g;function io(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function nr(l){l.g||(l.g=new Map,l.h=0,l.i&&rR(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=io.prototype,t.add=function(l,h){nr(this),this.i=null,l=Mi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Kg(l,h){nr(l),h=Mi(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Qg(l,h){return nr(l),h=Mi(l,h),l.g.has(h)}t.forEach=function(l,h){nr(this),this.g.forEach(function(p,g){p.forEach(function(N){l.call(h,N,g,this)},this)},this)},t.na=function(){nr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const N=l[g];for(let x=0;x<N.length;x++)p.push(h[g])}return p},t.V=function(l){nr(this);let h=[];if(typeof l=="string")Qg(this,l)&&(h=h.concat(this.g.get(Mi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return nr(this),this.i=null,l=Mi(this,l),Qg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Yg(l,h,p){Kg(l,h),0<p.length&&(l.i=null,l.g.set(Mi(l,h),P(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const x=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var N=x;B[g]!==""&&(N+="="+encodeURIComponent(String(B[g]))),l.push(N)}}return this.i=l.join("&")};function Mi(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function uR(l,h){h&&!l.j&&(nr(l),l.i=null,l.g.forEach(function(p,g){var N=g.toLowerCase();g!=N&&(Kg(this,g),Yg(this,N,p))},l)),l.j=h}function cR(l,h){const p=new eo;if(a.Image){const g=new Image;g.onload=y(rr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=y(rr,p,"TestLoadImage: error",!1,h,g),g.onabort=y(rr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(rr,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function hR(l,h){const p=new eo,g=new AbortController,N=setTimeout(()=>{g.abort(),rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(x=>{clearTimeout(N),x.ok?rr(p,"TestPingServer: ok",!0,h):rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),rr(p,"TestPingServer: error",!1,h)})}function rr(l,h,p,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(p)}catch{}}function dR(){this.g=new KC}function fR(l,h,p){const g=p||"";try{Wg(l,function(N,x){let B=N;c(N)&&(B=dh(N)),h.push(g+x+"="+encodeURIComponent(B))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function so(l){this.l=l.Ub||null,this.j=l.eb||!1}R(so,fh),so.prototype.g=function(){return new fl(this.l,this.j)},so.prototype.i=function(l){return function(){return l}}({});function fl(l,h){rt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(fl,rt),t=fl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ao(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?oo(this):ao(this),this.readyState==3&&Xg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,oo(this))},t.Qa=function(l){this.g&&(this.response=l,oo(this))},t.ga=function(){this.g&&oo(this)};function oo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ao(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function ao(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Jg(l){let h="";return U(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Ih(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Jg(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ee(l,h,p))}function Pe(l){rt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Pe,rt);var pR=/^https?$/i,mR=["POST","PUT"];t=Pe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gh.g(),this.v=this.o?Ag(this.o):Ag(gh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(x){Zg(this,x);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)p.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())p.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(mR,h,void 0))||g||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,B]of p)this.g.setRequestHeader(x,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{n_(this),this.u=!0,this.g.send(l),this.u=!1}catch(x){Zg(this,x)}};function Zg(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,e_(l),pl(l)}function e_(l){l.A||(l.A=!0,_t(l,"complete"),_t(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,_t(this,"complete"),_t(this,"abort"),pl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?t_(this):this.bb())},t.bb=function(){t_(this)};function t_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||kn(l)!=4||l.Z()!=2)){if(l.u&&kn(l)==4)Ig(l.Ea,0,l);else if(_t(l,"readystatechange"),kn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=B===0){var N=String(l.D).match(Hg)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),g=!pR.test(N?N.toLowerCase():"")}p=g}if(p)_t(l,"complete"),_t(l,"success");else{l.m=6;try{var x=2<kn(l)?l.g.statusText:""}catch{x=""}l.l=x+" ["+l.Z()+"]",e_(l)}}finally{pl(l)}}}}function pl(l,h){if(l.g){n_(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||_t(l,"ready");try{p.onreadystatechange=g}catch{}}}function n_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),GC(h)}};function r_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function gR(l){const h={};l=(l.g&&2<=kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(v(l[g]))continue;var p=A(l[g]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=h[N]||[];h[N]=x,x.push(p)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function i_(l){this.Aa=0,this.i=[],this.j=new eo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lo("baseRetryDelayMs",5e3,l),this.cb=lo("retryDelaySeedMs",1e4,l),this.Wa=lo("forwardChannelMaxRetries",2,l),this.wa=lo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ug(l&&l.concurrentRequestLimit),this.Da=new dR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=i_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,g){yt(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=f_(this,null,this.W),gl(this)};function Sh(l){if(s_(l),l.G==3){var h=l.U++,p=Pn(l.I);if(Ee(p,"SID",l.K),Ee(p,"RID",h),Ee(p,"TYPE","terminate"),uo(l,p),h=new tr(l,l.j,h),h.L=2,h.v=dl(Pn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=p_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ul(h)}d_(l)}function ml(l){l.g&&(Rh(l),l.g.cancel(),l.g=null)}function s_(l){ml(l),l.u&&(a.clearTimeout(l.u),l.u=null),_l(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function gl(l){if(!Bg(l.h)&&!l.s){l.s=!0;var h=l.Ga;Qt||J(),j||(Qt(),j=!0),z.add(h,l),l.B=0}}function _R(l,h){return jg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Zs(m(l.Ga,l,h),h_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new tr(this,this.j,l);let x=this.o;if(this.S&&(x?(x=_(x),I(x,this.S)):x=this.S),this.m!==null||this.O||(N.H=x,x=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=a_(this,N,h),p=Pn(this.I),Ee(p,"RID",l),Ee(p,"CVER",22),this.D&&Ee(p,"X-HTTP-Session-Id",this.D),uo(this,p),x&&(this.O?h="headers="+encodeURIComponent(String(Jg(x)))+"&"+h:this.m&&Ih(p,this.m,x)),Th(this.h,N),this.Ua&&Ee(p,"TYPE","init"),this.P?(Ee(p,"$req",h),Ee(p,"SID","null"),N.T=!0,yh(N,p,null)):yh(N,p,h),this.G=2}}else this.G==3&&(l?o_(this,l):this.i.length==0||Bg(this.h)||o_(this))};function o_(l,h){var p;h?p=h.l:p=l.U++;const g=Pn(l.I);Ee(g,"SID",l.K),Ee(g,"RID",p),Ee(g,"AID",l.T),uo(l,g),l.m&&l.o&&Ih(g,l.m,l.o),p=new tr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=a_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Th(l.h,p),yh(p,g,h)}function uo(l,h){l.H&&U(l.H,function(p,g){Ee(h,g,p)}),l.l&&Wg({},function(p,g){Ee(h,g,p)})}function a_(l,h,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let x=-1;for(;;){const B=["count="+p];x==-1?0<p?(x=N[0].g,B.push("ofs="+x)):x=0:B.push("ofs="+x);let pe=!0;for(let Ye=0;Ye<p;Ye++){let ue=N[Ye].g;const it=N[Ye].map;if(ue-=x,0>ue)x=Math.max(0,N[Ye].g-100),pe=!1;else try{fR(it,B,"req"+ue+"_")}catch{g&&g(it)}}if(pe){g=B.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,g}function l_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Qt||J(),j||(Qt(),j=!0),z.add(h,l),l.v=0}}function Ch(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Zs(m(l.Fa,l),h_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,u_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Zs(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),ml(this),u_(this))};function Rh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function u_(l){l.g=new tr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Pn(l.qa);Ee(h,"RID","rpc"),Ee(h,"SID",l.K),Ee(h,"AID",l.T),Ee(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ee(h,"TO",l.ja),Ee(h,"TYPE","xmlhttp"),uo(l,h),l.m&&l.o&&Ih(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=dl(Pn(h)),p.m=null,p.P=!0,bg(p,l)}t.Za=function(){this.C!=null&&(this.C=null,ml(this),Ch(this),yt(19))};function _l(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function c_(l,h){var p=null;if(l.g==h){_l(l),Rh(l),l.g=null;var g=2}else if(wh(l.h,h))p=h.D,zg(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=l.B;g=ol(),_t(g,new xg(g,p)),gl(l)}else l_(l);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&_R(l,h)||g==2&&Ch(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),N){case 1:Gr(l,5);break;case 4:Gr(l,10);break;case 3:Gr(l,6);break;default:Gr(l,2)}}}function h_(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Gr(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),g=l.Xa;const N=!g;g=new qr(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||cl(g,"https"),dl(g),N?cR(g.toString(),p):hR(g.toString(),p)}else yt(2);l.G=0,l.l&&l.l.sa(h),d_(l),s_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function d_(l){if(l.G=0,l.ka=[],l.l){const h=$g(l.h);(h.length!=0||l.i.length!=0)&&(O(l.ka,h),O(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function f_(l,h,p){var g=p instanceof qr?Pn(p):new qr(p);if(g.g!="")h&&(g.g=h+"."+g.g),hl(g,g.s);else{var N=a.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var x=new qr(null);g&&cl(x,g),h&&(x.g=h),N&&hl(x,N),p&&(x.l=p),g=x}return p=l.D,h=l.ya,p&&h&&Ee(g,p,h),Ee(g,"VER",l.la),uo(l,g),g}function p_(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Pe(new so({eb:p})):new Pe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function m_(){}t=m_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yl(){}yl.prototype.g=function(l,h){return new Dt(l,h)};function Dt(l,h){rt.call(this),this.g=new i_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!v(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new bi(this)}R(Dt,rt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Sh(this.g)},Dt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=dh(l),l=p);h.i.push(new eR(h.Ya++,l)),h.G==3&&gl(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Sh(this.g),delete this.g,Dt.aa.N.call(this)};function g_(l){ph.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(g_,ph);function __(){mh.call(this),this.status=1}R(__,mh);function bi(l){this.g=l}R(bi,m_),bi.prototype.ua=function(){_t(this.g,"a")},bi.prototype.ta=function(l){_t(this.g,new g_(l))},bi.prototype.sa=function(l){_t(this.g,new __)},bi.prototype.ra=function(){_t(this.g,"b")},yl.prototype.createWebChannel=yl.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,lI=function(){return new yl},aI=function(){return ol()},oI=Wr,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},al.NO_ERROR=0,al.TIMEOUT=8,al.HTTP_ERROR=6,ou=al,Dg.COMPLETE="complete",sI=Dg,Pg.EventType=Xs,Xs.OPEN="a",Xs.CLOSE="b",Xs.ERROR="c",Xs.MESSAGE="d",rt.prototype.listen=rt.prototype.K,ko=Pg,iI=so,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,rI=Pe}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});const lv="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Ws="10.12.1";/**
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
 */const vi=new bc("@firebase/firestore");function vo(){return vi.logLevel}function H(t,...e){if(vi.logLevel<=se.DEBUG){const n=e.map(dm);vi.debug(`Firestore (${Ws}): ${t}`,...n)}}function Qn(t,...e){if(vi.logLevel<=se.ERROR){const n=e.map(dm);vi.error(`Firestore (${Ws}): ${t}`,...n)}}function Rs(t,...e){if(vi.logLevel<=se.WARN){const n=e.map(dm);vi.warn(`Firestore (${Ws}): ${t}`,...n)}}function dm(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function ye(t,e){t||Y()}function Z(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class uI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class yx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vx{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new uI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new ut(e)}}class Ex{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ex(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ix{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new Tx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Sx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Sx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new $e(0,0))}static max(){return new X(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class va{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends va{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const Cx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends va{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return Cx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ne.fromString(e))}static fromName(e){return new q(Ne.fromString(e).popFirst(5))}static empty(){return new q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ne(e.slice()))}}function Rx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Lr(i,q.empty(),e)}function Ax(t){return new Lr(t.readTime,t.key,-1)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(X.min(),q.empty(),-1)}static max(){return new Lr(X.max(),q.empty(),-1)}}function Px(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const kx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wa(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==kx)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ox(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ha(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class fm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fm.oe=-1;function zc(t){return t==null}function Gu(t){return t===0&&1/t==-1/0}function xx(t){return typeof t=="number"&&Number.isInteger(t)&&!Gu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Ve=class Cf{constructor(e,n){this.comparator=e,this.root=n||kr.EMPTY}insert(e,n){return new Cf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,kr.BLACK,null,null))}remove(e){return new Cf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ul(this.root,e,this.comparator,!0)}},Ul=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},kr=class Nn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Nn.RED,this.left=i??Nn.EMPTY,this.right=s??Nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Nn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Nn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}};kr.EMPTY=null,kr.RED=!0,kr.BLACK=!1;kr.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new kr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cv(this.data.getIterator())}getIteratorFrom(e){return new cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class cv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new nn([])}unionWith(e){let n=new et(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dI("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const Dx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=Dx.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ei(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function pm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mm(t){const e=t.mapValue.fields.__previous_value__;return pm(e)?mm(e):e}function Ea(t){const e=Mr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class Lx{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class wa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Bl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pm(t)?4:Mx(t)?9007199254740991:10:Y()}function wn(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ea(t).isEqual(Ea(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Mr(i.timestampValue),a=Mr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ei(i.bytesValue).isEqual(Ei(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?Gu(o)===Gu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(uv(o)!==uv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!wn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function Ta(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return hv(t.timestampValue,e.timestampValue);case 4:return hv(Ea(t),Ea(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ei(s),u=Ei(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ce(a[c],u[c]);if(d!==0)return d}return ce(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Me(s.latitude),Me(o.latitude));return a!==0?a:ce(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Ps(a[c],u[c]);if(d)return d}return ce(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Bl.mapValue&&o===Bl.mapValue)return 0;if(s===Bl.mapValue)return 1;if(o===Bl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ce(u[f],d[f]);if(m!==0)return m;const y=Ps(a[u[f]],c[d[f]]);if(y!==0)return y}return ce(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function hv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Mr(t),r=Mr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function ks(t){return Rf(t)}function Rf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rf(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Af(t){return!!t&&"integerValue"in t}function gm(t){return!!t&&"arrayValue"in t}function dv(t){return!!t&&"nullValue"in t}function fv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function au(t){return!!t&&"mapValue"in t}function zo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!au(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zo(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=zo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());au(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];au(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(zo(this.value))}}function fI(t){const e=[];return Hs(t.fields,(n,r)=>{const i=new Je([n]);if(au(r)){const s=fI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class ht{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,X.min(),X.min(),X.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,X.min(),X.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,X.min(),X.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ku{constructor(e,n){this.position=e,this.inclusive=n}}function pv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qu{constructor(e,n="asc"){this.field=e,this.dir=n}}function bx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pI{}class Ue extends pI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Fx(e,n,r):n==="array-contains"?new jx(e,r):n==="in"?new zx(e,r):n==="not-in"?new $x(e,r):n==="array-contains-any"?new Wx(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ux(e,r):new Bx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends pI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return mI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mI(t){return t.op==="and"}function gI(t){return Vx(t)&&mI(t)}function Vx(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Pf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(gI(t))return t.filters.map(e=>Pf(e)).join(",");{const e=t.filters.map(n=>Pf(n)).join(",");return`${t.op}(${e})`}}function _I(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&wn(r.value,i.value)}(t,e):t instanceof Tn?function(r,i){return i instanceof Tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_I(o,i.filters[a]),!0):!1}(t,e):void Y()}function yI(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(yI).join(" ,")+"}"}(t):"Filter"}class Fx extends Ue{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ux extends Ue{constructor(e,n){super(e,"in",n),this.keys=vI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bx extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=vI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class jx extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gm(n)&&Ta(n.arrayValue,this.value)}}class zx extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ta(this.value.arrayValue,n)}}class $x extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ta(this.value.arrayValue,n)}}class Wx extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ta(this.value.arrayValue,r))}}/**
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
 */class Hx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function gv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Hx(t,e,n,r,i,s,o)}function _m(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function ym(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_I(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mv(t.startAt,e.startAt)&&mv(t.endAt,e.endAt)}function kf(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $c{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qx(t,e,n,r,i,s,o,a){return new $c(t,e,n,r,i,s,o,a)}function vm(t){return new $c(t)}function _v(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Gx(t){return t.collectionGroup!==null}function $o(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new et(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Qu(s,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new Qu(Je.keyField(),r))}return e.ce}function yn(t){const e=Z(t);return e.le||(e.le=Kx(e,$o(t))),e.le}function Kx(t,e){if(t.limitType==="F")return gv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qu(i.field,s)});const n=t.endAt?new Ku(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ku(t.startAt.position,t.startAt.inclusive):null;return gv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nf(t,e,n){return new $c(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wc(t,e){return ym(yn(t),yn(e))&&t.limitType===e.limitType}function EI(t){return`${_m(yn(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yI(i)).join(", ")}]`),zc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ks(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ks(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=pv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,$o(r),i)||r.endAt&&!function(o,a,u){const c=pv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,$o(r),i))}(t,e)}function Qx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wI(t){return(e,n)=>{let r=!1;for(const i of $o(t)){const s=Yx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Yx(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ps(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hI(this.inner)}size(){return this.innerSize}}/**
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
 */const Xx=new Ve(q.comparator);function Yn(){return Xx}const TI=new Ve(q.comparator);function No(...t){let e=TI;for(const n of t)e=e.insert(n.key,n);return e}function II(t){let e=TI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ni(){return Wo()}function SI(){return Wo()}function Wo(){return new qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jx=new Ve(q.comparator),Zx=new et(q.comparator);function oe(...t){let e=Zx;for(const n of t)e=e.add(n);return e}const eD=new et(ce);function tD(){return eD}/**
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
 */function CI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gu(e)?"-0":e}}function RI(t){return{integerValue:""+t}}function nD(t,e){return xx(e)?RI(e):CI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class qc{constructor(){this._=void 0}}function rD(t,e,n){return t instanceof Yu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pm(s)&&(s=mm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ia?PI(t,e):t instanceof Sa?kI(t,e):function(i,s){const o=AI(i,s),a=yv(o)+yv(i.Pe);return Af(o)&&Af(i.Pe)?RI(a):CI(i.serializer,a)}(t,e)}function iD(t,e,n){return t instanceof Ia?PI(t,e):t instanceof Sa?kI(t,e):n}function AI(t,e){return t instanceof Xu?function(r){return Af(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Yu extends qc{}class Ia extends qc{constructor(e){super(),this.elements=e}}function PI(t,e){const n=NI(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends qc{constructor(e){super(),this.elements=e}}function kI(t,e){let n=NI(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class Xu extends qc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yv(t){return Me(t.integerValue||t.doubleValue)}function NI(t){return gm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ia&&i instanceof Ia||r instanceof Sa&&i instanceof Sa?As(r.elements,i.elements,wn):r instanceof Xu&&i instanceof Xu?wn(r.Pe,i.Pe):r instanceof Yu&&i instanceof Yu}(t.transform,e.transform)}class oD{constructor(e,n){this.version=e,this.transformResults=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gc{}function OI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new DI(t.key,zn.none()):new qa(t.key,t.data,zn.none());{const n=t.data,r=$t.empty();let i=new et(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ni(t.key,r,new nn(i.toArray()),zn.none())}}function aD(t,e,n){t instanceof qa?function(i,s,o){const a=i.value.clone(),u=Ev(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ni?function(i,s,o){if(!lu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ev(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(xI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ho(t,e,n,r){return t instanceof qa?function(s,o,a,u){if(!lu(s.precondition,o))return a;const c=s.value.clone(),d=wv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ni?function(s,o,a,u){if(!lu(s.precondition,o))return a;const c=wv(s.fieldTransforms,u,o),d=o.data;return d.setAll(xI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return lu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AI(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&As(r,i,(s,o)=>sD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qa extends Gc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ni extends Gc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ev(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,iD(o,a,n[i]))}return r}function wv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rD(s,o,e))}return r}class DI extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uD extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=SI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=OI(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>vv(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>vv(n,r))}}class Em{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return Jx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Em(e,n,r,i)}}/**
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
 */class hD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class dD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,ae;function fD(t){switch(t){default:return Y();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function LI(t){if(t===void 0)return Qn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return Y()}}(ae=Le||(Le={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pD(){return new TextEncoder}/**
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
 */const mD=new ui([4294967295,4294967295],0);function Tv(t){const e=pD().encode(t),n=new nI;return n.update(e),new Uint8Array(n.digest())}function Iv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ui([n,r],0),new ui([i,s],0)]}class wm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oo(`Invalid padding: ${n}`);if(r<0)throw new Oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ui.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ui.fromNumber(r)));return i.compare(mD)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tv(e),[r,i]=Iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Tv(e),[r,i]=Iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kc(X.min(),i,new Ve(ce),Yn(),oe())}}class Ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ga(r,n,oe(),oe(),oe())}}/**
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
 */class uu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class MI{constructor(e,n){this.targetId=e,this.me=n}}class bI{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sv{constructor(){this.fe=0,this.ge=Rv(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ga(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Rv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=Cv(),this.Qe=new Ve(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(kf(s))if(r===0){const o=new q(s.path);this.Ue(n,o,ht.newNoDocument(o,X.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ei(r).toUint8Array()}catch(u){if(u instanceof dI)return Rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new wm(o,i,s)}catch(u){return Rs(u instanceof Oo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&kf(a.target)){const u=new q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Kc(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=Cv(),this.Qe=new Ve(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Sv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new et(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cv(){return new Ve(q.comparator)}function Rv(){return new Ve(q.comparator)}const _D={asc:"ASCENDING",desc:"DESCENDING"},yD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vD={and:"AND",or:"OR"};class ED{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Of(t,e){return t.useProto3Json||zc(e)?e:{value:e}}function Ju(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wD(t,e){return Ju(t,e.toTimestamp())}function vn(t){return ye(!!t),X.fromTimestamp(function(n){const r=Mr(n);return new $e(r.seconds,r.nanos)}(t))}function Tm(t,e){return xf(t,e).canonicalString()}function xf(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FI(t){const e=Ne.fromString(t);return ye($I(e)),e}function Df(t,e){return Tm(t.databaseId,e.path)}function ld(t,e){const n=FI(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(BI(n))}function UI(t,e){return Tm(t.databaseId,e)}function TD(t){const e=FI(t);return e.length===4?Ne.emptyPath():BI(e)}function Lf(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BI(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Av(t,e,n){return{name:Df(t,e),fields:n.value.mapValue.fields}}function ID(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ye(d===void 0||typeof d=="string"),gt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?M.UNKNOWN:LI(c.code);return new G(d,c.message||"")}(o);n=new bI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ld(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):X.min(),a=new $t({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new uu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ld(t,r.document),s=r.readTime?vn(r.readTime):X.min(),o=ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new uu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ld(t,r.document),s=r.removedTargetIds||[];n=new uu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dD(i,s),a=r.targetId;n=new MI(a,o)}}return n}function SD(t,e){let n;if(e instanceof qa)n={update:Av(t,e.key,e.value)};else if(e instanceof DI)n={delete:Df(t,e.key)};else if(e instanceof Ni)n={update:Av(t,e.key,e.data),updateMask:DD(e.fieldMask)};else{if(!(e instanceof uD))return Y();n={verify:Df(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Yu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function CD(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(X.min())&&(o=vn(s)),new oD(o,i.transformResults||[])}(n,e))):[]}function RD(t,e){return{documents:[UI(t,e.path)]}}function AD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=UI(t,i);const s=function(c){if(c.length!==0)return zI(Tn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:zi(m.field),direction:ND(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Of(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function PD(t){let e=TD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=jI(f);return m instanceof Tn&&gI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new Qu($i(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,zc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new Ku(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new Ku(y,m)}(n.endAt)),qx(e,i,o,s,a,"F",u,c)}function kD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$i(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$i(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>jI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function ND(t){return _D[t]}function OD(t){return yD[t]}function xD(t){return vD[t]}function zi(t){return{fieldPath:t.canonicalString()}}function $i(t){return Je.fromServerFormat(t.fieldPath)}function zI(t){return t instanceof Ue?function(n){if(n.op==="=="){if(fv(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NAN"}};if(dv(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fv(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NOT_NAN"}};if(dv(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zi(n.field),op:OD(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(i=>zI(i));return r.length===1?r[0]:{compositeFilter:{op:xD(n.op),filters:r}}}(t):Y()}function DD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $I(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,i,s=X.min(),o=X.min(),a=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LD{constructor(e){this.ct=e}}function MD(t){const e=PD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
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
 */class bD{constructor(){this._n=new VD}addToCollectionParentIndex(e,n){return this._n.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Lr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class VD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new et(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Ne.comparator)).toArray()}}/**
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
 */class Ns{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ns(0)}static Ln(){return new Ns(-1)}}/**
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
 */class FD{constructor(){this.changes=new qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class UD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ho(r.mutation,i,nn.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=No();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yn();const o=Wo(),a=function(){return Wo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ni)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ho(d.mutation,c,d.mutation.getFieldMask(),$e.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new UD(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Wo();let i=new Ve((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||nn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=SI();d.forEach(m=>{if(!s.has(m)){const y=OI(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(ni());let a=-1,u=s;return o.next(c=>L.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:a,changes:II(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=No();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=No();return this.indexManager.getCollectionParents(e,s).next(a=>L.forEach(a,u=>{const c=function(f,m){return new $c(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ht.newInvalidDocument(d)))});let a=No();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ho(d.mutation,c,nn.empty(),$e.now()),Hc(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class jD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return L.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:MD(i.bundledQuery),readTime:vn(i.readTime)}}(n)),L.resolve()}}/**
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
 */class zD{constructor(){this.overlays=new Ve(q.comparator),this.hr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ni();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=ni(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ni(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ni(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return L.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hD(n,r));let s=this.hr.get(n);s===void 0&&(s=oe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Im{constructor(){this.Pr=new et(He.Ir),this.Tr=new et(He.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new He(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new q(new Ne([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new q(new Ne([])),r=new He(n,e),i=new He(n,e+1);let s=oe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return q.comparator(e.key,n.key)||ce(e.pr,n.pr)}static Er(e,n){return ce(e.pr,n.pr)||q.comparator(e.key,n.key)}}/**
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
 */class $D{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new et(He.Ir)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ce);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),L.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new He(new q(s),0);let a=new et(ce);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),L.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return L.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new He(n,0),i=this.wr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WD{constructor(e){this.vr=e,this.docs=function(){return new Ve(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,a=new q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Px(Ax(d),r)<=0||(i.has(d.key)||Hc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HD(this)}getSize(e){return L.resolve(this.size)}}class HD extends FD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class qD{constructor(e){this.persistence=e,this.Mr=new qs(n=>_m(n),ym),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Im,this.targetCount=0,this.Lr=Ns.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),L.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.qn(n),L.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Nr.containsKey(n))}}/**
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
 */class GD{constructor(e,n){this.Br={},this.overlays={},this.kr=new fm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new qD(this),this.indexManager=new bD,this.remoteDocumentCache=function(i){return new WD(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new LD(n),this.$r=new jD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new $D(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new KD(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return L.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class KD extends Nx{constructor(e){super(),this.currentSequenceNumber=e}}class Sm{constructor(e){this.persistence=e,this.zr=new Im,this.jr=null}static Hr(e){return new Sm(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),L.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Jr,r=>{const i=q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return L.or([()=>L.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Cm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cm(e,n.fromCache,r,i)}}/**
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
 */class QD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YD{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return YP()?8:Ox(nt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QD;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(vo()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),L.resolve()):(vo()<=se.DEBUG&&H("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(vo()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):L.resolve())}ji(e,n){if(_v(n))return L.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nf(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Nf(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return _v(n)||i.isEqual(X.min())?L.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?L.resolve(null):(vo()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.es(e,o,n,Rx(i,-1)).next(a=>a))})}Zi(e,n){let r=new et(wI(e));return n.forEach((i,s)=>{Hc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return vo()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ji(n)),this.zi.getDocumentsMatchingQuery(e,n,Lr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class XD{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ve(ce),this.rs=new qs(s=>_m(s),ym),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function JD(t,e,n,r){return new XD(t,e,n,r)}async function WI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function ZD(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let y=L.resolve();return m.forEach(R=>{y=y.next(()=>d.getEntry(u,R)).next(P=>{const O=c.docVersions.get(R);ye(O!==null),P.version.compareTo(O)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function HI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function eL(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(gt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(P,O,T){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,y,d)&&a.push(n.Qr.updateTargetData(s,y))});let u=Yn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(tL(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(X.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function tL(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function nL(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rL(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Mf(t,e,n){const r=Z(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ha(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Pv(t,e,n){const r=Z(t);let i=X.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=Z(u),m=f.rs.get(d);return m!==void 0?L.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:oe())).next(a=>(iL(r,Qx(e),a),{documents:a,hs:s})))}function iL(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class kv{constructor(){this.activeTargetIds=tD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sL{constructor(){this.no=new kv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new kv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class oL{io(e){}shutdown(){}}/**
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
 */class Nv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jl=null;function ud(){return jl===null?jl=function(){return 268435456+Math.round(2147483648*Math.random())}():jl++,"0x"+jl.toString(16)}/**
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
 */const aL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const lt="WebChannelConnection";class uL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=ud(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Rs("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ws}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=aL[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ud();return new Promise((o,a)=>{const u=new rI;u.setWithCredentials(!0),u.listenOnce(sI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ou.NO_ERROR:const d=u.getResponseJson();H(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ou.TIMEOUT:H(lt,`RPC '${e}' ${s} timed out`),a(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case ou.HTTP_ERROR:const f=u.getStatus();if(H(lt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const R=function(O){const T=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(y.status);a(new G(R,y.message))}else a(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(M.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(lt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ud(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lI(),a=aI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new iI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(lt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,y=!1;const R=new lL({lo:O=>{y?H(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(H(lt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),H(lt,`RPC '${e}' stream ${i} sending:`,O),f.send(O))},ho:()=>f.close()}),P=(O,T,v)=>{O.listen(T,C=>{try{v(C)}catch(D){setTimeout(()=>{throw D},0)}})};return P(f,ko.EventType.OPEN,()=>{y||(H(lt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),P(f,ko.EventType.CLOSE,()=>{y||(y=!0,H(lt,`RPC '${e}' stream ${i} transport closed`),R.po())}),P(f,ko.EventType.ERROR,O=>{y||(y=!0,Rs(lt,`RPC '${e}' stream ${i} transport errored:`,O),R.po(new G(M.UNAVAILABLE,"The operation could not be completed")))}),P(f,ko.EventType.MESSAGE,O=>{var T;if(!y){const v=O.data[0];ye(!!v);const C=v,D=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(D){H(lt,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let U=function(E){const I=Le[E];if(I!==void 0)return LI(I)}(F),w=D.message;U===void 0&&(U=M.INTERNAL,w="Unknown error status: "+F+" with message "+D.message),y=!0,R.po(new G(U,w)),f.close()}else H(lt,`RPC '${e}' stream ${i} received:`,v),R.yo(v)}}),P(a,oI.STAT_EVENT,O=>{O.stat===Sf.PROXY?H(lt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Sf.NOPROXY&&H(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}function cd(){return typeof document<"u"?document:null}/**
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
 */function Qc(t){return new ED(t,!0)}/**
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
 */class qI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class GI{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new qI(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cL extends GI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=ID(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?vn(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Lf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=kf(u)?{documents:RD(s,u)}:{query:AD(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=VI(s,o.resumeToken);const c=Of(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Ju(s,o.snapshotVersion.toTimestamp());const c=Of(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=kD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Lf(this.serializer),n.removeTarget=e,this.i_(n)}}class hL extends GI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=CD(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.A_(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Lf(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SD(this.serializer,r))};this.i_(n)}}/**
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
 */class dL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,xf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,xf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class fL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Qn(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class pL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Oi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.M_.add(4),await Ka(c),c.N_.set("Unknown"),c.M_.delete(4),await Yc(c)}(this))})}),this.N_=new fL(r,i)}}async function Yc(t){if(Oi(t))for(const e of t.x_)await e(!0)}async function Ka(t){for(const e of t.x_)await e(!1)}function KI(t,e){const n=Z(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),km(n)?Pm(n):Gs(n).Xo()&&Am(n,e))}function Rm(t,e){const n=Z(t),r=Gs(n);n.F_.delete(e),r.Xo()&&QI(n,e),n.F_.size===0&&(r.Xo()?r.n_():Oi(n)&&n.N_.set("Unknown"))}function Am(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).P_(e)}function QI(t,e){t.L_.xe(e),Gs(t).I_(e)}function Pm(t){t.L_=new gD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.N_.w_()}function km(t){return Oi(t)&&!Gs(t).Zo()&&t.F_.size>0}function Oi(t){return Z(t).M_.size===0}function YI(t){t.L_=void 0}async function mL(t){t.N_.set("Online")}async function gL(t){t.F_.forEach((e,n)=>{Am(t,e)})}async function _L(t,e){YI(t),km(t)?(t.N_.D_(e),Pm(t)):t.N_.set("Unknown")}async function yL(t,e,n){if(t.N_.set("Online"),e instanceof bI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zu(t,r)}else if(e instanceof uu?t.L_.Ke(e):e instanceof MI?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await HI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),QI(s,u);const f=new _r(d.target,u,c,d.sequenceNumber);Am(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Zu(t,r)}}async function Zu(t,e,n){if(!Ha(e))throw e;t.M_.add(1),await Ka(t),t.N_.set("Offline"),n||(n=()=>HI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Yc(t)})}function XI(t,e){return e().catch(n=>Zu(t,n,e))}async function Xc(t){const e=Z(t),n=br(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;vL(e);)try{const i=await nL(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,EL(e,i)}catch(i){await Zu(e,i)}JI(e)&&ZI(e)}function vL(t){return Oi(t)&&t.v_.length<10}function EL(t,e){t.v_.push(e);const n=br(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function JI(t){return Oi(t)&&!br(t).Zo()&&t.v_.length>0}function ZI(t){br(t).start()}async function wL(t){br(t).V_()}async function TL(t){const e=br(t);for(const n of t.v_)e.d_(n.mutations)}async function IL(t,e,n){const r=t.v_.shift(),i=Em.from(r,e,n);await XI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xc(t)}async function SL(t,e){e&&br(t).E_&&await async function(r,i){if(function(o){return fD(o)&&o!==M.ABORTED}(i.code)){const s=r.v_.shift();br(r).t_(),await XI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xc(r)}}(t,e),JI(t)&&ZI(t)}async function Ov(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Oi(n);n.M_.add(3),await Ka(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Yc(n)}async function CL(t,e){const n=Z(t);e?(n.M_.delete(2),await Yc(n)):e||(n.M_.add(2),await Ka(n),n.N_.set("Unknown"))}function Gs(t){return t.B_||(t.B_=function(n,r,i){const s=Z(n);return s.f_(),new cL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:mL.bind(null,t),To:gL.bind(null,t),Ao:_L.bind(null,t),h_:yL.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),km(t)?Pm(t):t.N_.set("Unknown")):(await t.B_.stop(),YI(t))})),t.B_}function br(t){return t.k_||(t.k_=function(n,r,i){const s=Z(n);return s.f_(),new hL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:wL.bind(null,t),Ao:SL.bind(null,t),R_:TL.bind(null,t),A_:IL.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Xc(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Nm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Nm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Om(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Ha(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=No(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class xv{constructor(){this.q_=new Ve(q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Y():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Os{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Os(e,n,fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class RL{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class AL{constructor(){this.queries=new qs(e=>EI(e),Wc),this.onlineState="Unknown",this.z_=new Set}}async function PL(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new RL,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Om(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&xm(n)}async function kL(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NL(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&xm(n)}function OL(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function xm(t){t.z_.forEach(e=>{e.next()})}var bf,Dv;(Dv=bf||(bf={})).J_="default",Dv.Cache="cache";class xL{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==bf.Cache}}/**
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
 */class eS{constructor(e){this.key=e}}class tS{constructor(e){this.key=e}}class DL{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=wI(e),this.Ta=new fs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new xv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),y=Hc(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;m&&y?m.data.isEqual(y.data)?R!==P&&(r.track({type:3,doc:y}),O=!0):this.Ra(m,y)||(r.track({type:2,doc:y}),O=!0,(u&&this.Ia(y,u)>0||c&&this.Ia(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),O=!0):m&&!y&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(a=!0)),O&&(y?(o=o.add(y),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(y,R){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return P(y)-P(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Os(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new xv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new tS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new eS(r))}),n}pa(e){this.la=e.hs,this.Pa=oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Os.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class LL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ML{constructor(e){this.key=e,this.wa=!1}}class bL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new qs(a=>EI(a),Wc),this.Da=new Map,this.Ca=new Set,this.va=new Ve(q.comparator),this.Fa=new Map,this.Ma=new Im,this.xa={},this.Oa=new Map,this.Na=Ns.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function VL(t,e,n=!0){const r=aS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await nS(r,e,n,!0),i}async function FL(t,e){const n=aS(t);await nS(n,e,!0,!1)}async function nS(t,e,n,r){const i=await rL(t.localStore,yn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await UL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&KI(t.remoteStore,i),a}async function UL(t,e,n,r,i){t.Ba=(f,m,y)=>async function(P,O,T,v){let C=O.view.da(T);C.Xi&&(C=await Pv(P.localStore,O.query,!1).then(({documents:w})=>O.view.da(w,C)));const D=v&&v.targetChanges.get(O.targetId),F=v&&v.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(C,P.isPrimaryClient,D,F);return Mv(P,O.targetId,U.fa),U.snapshot}(t,f,m,y);const s=await Pv(t.localStore,e,!0),o=new DL(e,s.hs),a=o.da(s.documents),u=Ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Mv(t,n,c.fa);const d=new LL(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function BL(t,e,n){const r=Z(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Wc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Mf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rm(r.remoteStore,i.targetId),Vf(r,i.targetId)}).catch(Wa)):(Vf(r,i.targetId),await Mf(r.localStore,i.targetId,!0))}async function jL(t,e){const n=Z(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rm(n.remoteStore,r.targetId))}async function zL(t,e,n){const r=QL(t);try{const i=await function(o,a){const u=Z(o),c=$e.now(),d=a.reduce((y,R)=>y.add(R.key),oe());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=Yn(),P=oe();return u.os.getEntries(y,d).next(O=>{R=O,R.forEach((T,v)=>{v.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,R)).next(O=>{f=O;const T=[];for(const v of a){const C=lD(v,f.get(v.key).overlayedDocument);C!=null&&T.push(new Ni(v.key,C,fI(C.value.mapValue),zn.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,T,a)}).next(O=>{m=O;const T=O.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(y,O.batchId,T)})}).then(()=>({batchId:m.batchId,changes:II(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Ve(ce)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Qa(r,i.changes),await Xc(r.remoteStore)}catch(i){const s=Om(i,"Failed to persist write");n.reject(s)}}async function rS(t,e){const n=Z(t);try{const r=await eL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ye(o.wa):i.removedDocuments.size>0&&(ye(o.wa),o.wa=!1))}),await Qa(n,r,e)}catch(r){await Wa(r)}}function Lv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Z(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&xm(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $L(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ve(q.comparator);o=o.insert(s,ht.newNoDocument(s,X.min()));const a=oe().add(s),u=new Kc(X.min(),new Map,new Ve(ce),o,a);await rS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Dm(r)}else await Mf(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(Wa)}async function WL(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await ZD(n.localStore,e);sS(n,r,null),iS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qa(n,i)}catch(i){await Wa(i)}}async function HL(t,e,n){const r=Z(t);try{const i=await function(o,a){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ye(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);sS(r,e,n),iS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qa(r,i)}catch(i){await Wa(i)}}function iS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function sS(t,e,n){const r=Z(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||oS(t,r)})}function oS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Rm(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Dm(t))}function Mv(t,e,n){for(const r of n)r instanceof eS?(t.Ma.addReference(r.key,e),qL(t,r)):r instanceof tS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||oS(t,r.key)):Y()}function qL(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Dm(t))}function Dm(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new q(Ne.fromString(e)),r=t.Na.next();t.Fa.set(r,new ML(n)),t.va=t.va.insert(n,r),KI(t.remoteStore,new _r(yn(vm(n.path)),r,"TargetPurposeLimboResolution",fm.oe))}}async function Qa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Cm.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(c,m=>L.forEach(m.qi,y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>L.forEach(m.Qi,y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!Ha(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=d.ns.get(m),R=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(m,P)}}}(r.localStore,s))}async function GL(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await WI(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qa(n,r.us)}}function KL(t,e){const n=Z(t),r=n.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let i=oe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function aS(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$L.bind(null,e),e.Sa.h_=NL.bind(null,e.eventManager),e.Sa.ka=OL.bind(null,e.eventManager),e}function QL(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HL.bind(null,e),e}class bv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JD(this.persistence,new YD,e.initialUser,this.serializer)}createPersistence(e){return new GD(Sm.Hr,this.serializer)}createSharedClientState(e){return new sL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GL.bind(null,this.syncEngine),await CL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AL}()}createDatastore(e){const n=Qc(e.databaseInfo.databaseId),r=function(s){return new uL(s)}(e.databaseInfo);return function(s,o,a,u){return new dL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new pL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lv(this.syncEngine,n,0),function(){return Nv.D()?new Nv:new oL}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new bL(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Z(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ka(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class XL{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class JL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=cI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Om(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eM(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ov(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ov(e.remoteStore,i)),t._onlineComponents=e}function ZL(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZL(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await hd(t,new bv)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await hd(t,new bv);return t._offlineComponents}async function lS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Vv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Vv(t,new YL))),t._onlineComponents}function tM(t){return lS(t).then(e=>e.syncEngine)}async function nM(t){const e=await lS(t),n=e.eventManager;return n.onListen=VL.bind(null,e.syncEngine),n.onUnlisten=BL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jL.bind(null,e.syncEngine),n}function rM(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new XL({next:m=>{o.enqueueAndForget(()=>kL(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new xL(vm(a.path),d,{includeMetadataChanges:!0,ra:!0});return PL(s,f)}(await nM(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function uS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Fv=new Map;/**
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
 */function iM(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sM(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uv(t){if(!q.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ca(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lm(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Bv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _x;switch(r.type){case"firstParty":return new wx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fv.get(n);r&&(H("ComponentProvider","Removing Datastore"),Fv.delete(n),r.terminate())}(this),Promise.resolve()}}function oM(t,e,n,r={}){var i;const s=(t=Ca(t,Mm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ut.MOCK_USER;else{a=gT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(c)}t._authCredentials=new yx(new uI(a,u))}}/**
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
 */class bm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bm(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Ra extends bm{constructor(e,n,r){super(e,n,vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new q(e))}withConverter(e){return new Ra(this.firestore,e,this._path)}}function Vm(t,e,...n){if(t=mt(t),arguments.length===1&&(e=cI.newId()),iM("doc","path",e),t instanceof Mm){const r=Ne.fromString(e,...n);return Uv(r),new qt(t,null,new q(r))}{if(!(t instanceof qt||t instanceof Ra))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Uv(r),new qt(t.firestore,t instanceof Ra?t.converter:null,new q(r))}}/**
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
 */class aM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new qI(this,"async_queue_retry"),this.hu=()=>{const n=cd();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=cd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Pr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ha(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Nm.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Y()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Fm extends Mm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new aM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hS(this),this._firestoreClient.terminate()}}function Um(t,e){const n=typeof t=="object"?t:Xp(),r=typeof t=="string"?t:"(default)",i=Vc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fT("firestore");s&&oM(i,...s)}return i}function cS(t){return t._firestoreClient||hS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new Lx(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,uS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new JL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xs(gt.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xs(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class dS{constructor(e){this._methodName=e}}/**
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
 */class jm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const lM=/^__.*__$/;class uM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new qa(e,this.data,n,this.fieldTransforms)}}function fS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class zm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new zm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ec(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(fS(this.fu)&&lM.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class cM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qc(e)}Fu(e,n,r,i=!1){return new zm({fu:e,methodName:n,vu:r,path:Je.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hM(t){const e=t._freezeSettings(),n=Qc(t._databaseId);return new cM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dM(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);_S("Data must be an object, but it was:",o,r);const a=mS(r,o);let u,c;if(s.merge)u=new nn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=fM(e,f,n);if(!o.contains(m))throw new G(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);mM(d,m)||d.push(m)}u=new nn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new uM(new $t(a),u,c)}function pS(t,e){if(gS(t=mt(t)))return _S("Unsupported field value:",e,t),mS(t,e);if(t instanceof dS)return function(r,i){if(!fS(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=pS(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:Ju(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ju(i.serializer,s)}}if(r instanceof jm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xs)return{bytesValue:VI(i.serializer,r._byteString)};if(r instanceof qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Lm(r)}`)}(t,e)}function mS(t,e){const n={};return hI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(t,(r,i)=>{const s=pS(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function gS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof jm||t instanceof xs||t instanceof qt||t instanceof dS)}function _S(t,e,n){if(!gS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Lm(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function fM(t,e,n){if((e=mt(e))instanceof Bm)return e._internalPath;if(typeof e=="string")return yS(t,e);throw ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const pM=new RegExp("[~\\*/\\[\\]]");function yS(t,e,n){if(e.search(pM)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bm(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ec(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(M.INVALID_ARGUMENT,a+t+u)}function mM(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ES("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gM extends vS{data(){return super.data()}}function ES(t,e){return typeof e=="string"?yS(t,e):e instanceof Bm?e._internalPath:e._delegate._internalPath}class _M{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new jm(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const n=Mr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);ye($I(r));const i=new wa(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function yM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class vM{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wS extends vS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new EM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ES("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class EM extends wS{data(e={}){return super.data(e)}}/**
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
 */function TS(t){t=Ca(t,qt);const e=Ca(t.firestore,Fm);return rM(cS(e),t._key).then(n=>SM(e,t,n))}class wM extends _M{constructor(e){super(),this.firestore=e}convertBytes(e){return new xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function TM(t,e,n){t=Ca(t,qt);const r=Ca(t.firestore,Fm),i=yM(t.converter,e);return IM(r,[dM(hM(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zn.none())])}function IM(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>zL(await tM(r),i,s)),s.promise}(cS(t),e)}function SM(t,e,n){const r=n.docs.get(e._key),i=new wM(t);return new wS(t,i,e._key,r,new vM(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ws=i})(ki),_i(new Dr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fm(new vx(r.getProvider("auth-internal")),new Ix(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gn(lv,"4.6.3",e),gn(lv,"4.6.3","esm2017")})();function CM(){const t=hm(ai),e=Um(ai),n=qp(),[r,i]=$.useState(""),[s,o]=$.useState("");let a={UID:r,Email:s};$.useEffect(()=>{am(t,d=>{if(d){async function f(){console.log(r);const m=Vm(e,"user",`${d.uid}`);try{(await TS(m)).exists()?n("/homepage"):n("/profilecreation",{state:a})}catch(y){console.log(y)}}f()}else console.log("No user")})},[t]);const u=()=>{const d=new Dn;CO(t,d).then(f=>{o(f.email),i(f.uid)}).catch(f=>{console.log(f)})},c=()=>{lm(t).then(()=>{}).catch(d=>{console.log(d),console.log("No user")})};return ee.jsxs("div",{className:"Container",children:[ee.jsx("button",{id:"signin",onClick:u,children:"Sign In"}),ee.jsx("button",{id:"signout",onClick:c,children:" Sign Out"})]})}function RM(){return ee.jsx("div",{children:ee.jsx("p",{children:"Test"})})}var jv={};const zv="@firebase/database",$v="1.0.5";/**
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
 */let IS="";function AM(t){IS=t}/**
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
 */class PM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ga(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const SS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PM(e)}}catch{}return new kM},ri=SS("localStorage"),NM=SS("sessionStorage");/**
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
 */const ps=new bc("@firebase/database"),OM=function(){let t=1;return function(){return t++}}(),CS=function(t){const e=lk(t),n=new ik;n.update(e);const r=n.digest();return Gp.encodeByteArray(r)},Ya=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ya.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let qo=null,Wv=!0;const xM=function(t,e){V(!e,"Can't turn on custom loggers persistently."),ps.logLevel=se.VERBOSE,qo=ps.log.bind(ps)},dt=function(...t){if(Wv===!0&&(Wv=!1,qo===null&&NM.get("logging_enabled")===!0&&xM()),qo){const e=Ya.apply(null,t);qo(e)}},Xa=function(t){return function(...e){dt(t,...e)}},Ff=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ya(...t);ps.error(e)},Xn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ya(...t)}`;throw ps.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+Ya(...t);ps.warn(e)},DM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},RS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ds="[MIN_NAME]",Ti="[MAX_NAME]",Ks=function(t,e){if(t===e)return 0;if(t===Ds||e===Ti)return-1;if(e===Ds||t===Ti)return 1;{const n=Hv(t),r=Hv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},MM=function(t,e){return t===e?0:t<e?-1:1},Eo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},$m=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=$m(t[e[r]]);return n+="}",n},AS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function xt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const PS=function(t){V(!RS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},bM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},VM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function FM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const UM=new RegExp("^-?(0*)\\d{1,10}$"),BM=-2147483648,jM=2147483647,Hv=function(t){if(UM.test(t)){const e=Number(t);if(e>=BM&&e<=jM)return e}return null},Ja=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},zM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Go=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class $M{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class WM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class cu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cu.OWNER="owner";/**
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
 */const Wm="5",kS="v",NS="s",OS="r",xS="f",DS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LS="ls",MS="p",Uf="ac",bS="websocket",VS="long_polling";/**
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
 */class FS{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ri.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ri.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function US(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let r;if(e===bS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===VS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HM(t)&&(n.ns=t.namespace);const i=[];return xt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class qM{constructor(){this.counters_={}}incrementCounter(e,n=1){er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jP(this.counters_)}}/**
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
 */const dd={},fd={};function Hm(t){const e=t.toString();return dd[e]||(dd[e]=new qM),dd[e]}function GM(t,e){const n=t.toString();return fd[n]||(fd[n]=e()),fd[n]}/**
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
 */class KM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ja(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qv="start",QM="close",YM="pLPCommand",XM="pRTLPCB",BS="id",jS="pw",zS="ser",JM="cb",ZM="seg",eb="ts",tb="d",nb="dframe",$S=1870,WS=30,rb=$S-WS,ib=25e3,sb=3e4;class ns{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xa(e),this.stats_=Hm(n),this.urlFn=u=>(this.appCheckToken&&(u[Uf]=this.appCheckToken),US(n,VS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new KM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sb)),LM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qm((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qv)this.id=a,this.password=u;else if(o===QM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[qv]="t",r[zS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[JM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kS]=Wm,this.transportSessionId&&(r[NS]=this.transportSessionId),this.lastSessionId&&(r[LS]=this.lastSessionId),this.applicationId&&(r[MS]=this.applicationId),this.appCheckToken&&(r[Uf]=this.appCheckToken),typeof location<"u"&&location.hostname&&DS.test(location.hostname)&&(r[OS]=xS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ns.forceAllow_=!0}static forceDisallow(){ns.forceDisallow_=!0}static isAvailable(){return ns.forceAllow_?!0:!ns.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bM()&&!VM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cT(n),i=AS(r,rb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nb]="t",r[BS]=e,r[jS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OM(),window[YM+this.uniqueCallbackIdentifier]=e,window[XM+this.uniqueCallbackIdentifier]=n,this.myIFrame=qm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[BS]=this.myID,e[jS]=this.myPW,e[zS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+WS+r.length<=$S;){const o=this.pendingSegs.shift();r=r+"&"+ZM+i+"="+o.seg+"&"+eb+i+"="+o.ts+"&"+tb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ib)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ob=16384,ab=45e3;let tc=null;typeof MozWebSocket<"u"?tc=MozWebSocket:typeof WebSocket<"u"&&(tc=WebSocket);class tn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xa(this.connId),this.stats_=Hm(n),this.connURL=tn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kS]=Wm,typeof location<"u"&&location.hostname&&DS.test(location.hostname)&&(o[OS]=xS),n&&(o[NS]=n),r&&(o[LS]=r),i&&(o[Uf]=i),s&&(o[MS]=s),US(e,bS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ri.set("previous_websocket_failure",!0);try{let r;yT(),this.mySock=new tc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&tc!==null&&!tn.forceDisallow_}static previouslyFailed(){return ri.isInMemoryStorage||ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){ri.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ga(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=AS(n,ob);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ab))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
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
 */class Aa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ns,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of Aa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Aa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Aa.globalTransportInitialized_=!1;/**
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
 */const lb=6e4,ub=5e3,cb=10*1024,hb=100*1024,pd="t",Gv="d",db="s",Kv="r",fb="e",Qv="o",Yv="a",Xv="n",Jv="p",pb="h";class mb{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xa("c:"+this.id+":"),this.transportManager_=new Aa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Go(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pd in e){const n=e[pd];n===Yv?this.upgradeIfSecondaryHealthy_():n===Kv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Eo("t",e),r=Eo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Eo("t",e),r=Eo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Eo(pd,e);if(Gv in e){const r=e[Gv];if(n===pb){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===db?this.onConnectionShutdown_(r):n===Kv?this.onReset_(r):n===fb?Ff("Server Error: "+r):n===Qv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ff("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wm!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Go(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Go(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ub))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class HS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class qS{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class nc extends qS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nc}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zv=32,eE=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new me("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vr(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function GS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function KS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function QS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof me)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new me(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function At(t,e){const n=ne(t),r=ne(e);if(n===null)return e;if(n===r)return At(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gm(t,e){if(Vr(t)!==Vr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Vr(t)>Vr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _b{constructor(e,n){this.errorPrefix_=n,this.parts_=KS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Mc(this.parts_[r]);YS(this)}}function yb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Mc(e),YS(t)}function vb(t){const e=t.parts_.pop();t.byteLength_-=Mc(e),t.parts_.length>0&&(t.byteLength_-=1)}function YS(t){if(t.byteLength_>eE)throw new Error(t.errorPrefix_+"has a key path longer than "+eE+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zv+") or object contains a cycle "+Xr(t))}function Xr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Km extends qS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Km}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const wo=1e3,Eb=60*5*1e3,tE=30*1e3,wb=1.3,Tb=3e4,Ib="server_kill",nE=3;class $n extends HS{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=$n.nextPersistentConnectionId_++,this.log_=Xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wo,this.maxReconnectDelay_=Eb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!yT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Km.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ke(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Kp,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;$n.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&er(e,"w")){const r=Ss(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ff("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Tb&&(this.reconnectDelay_=wo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new mb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Vt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ib)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Vt(f),u())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mf(this.interruptReasons_)&&(this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$m(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new me(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nE&&(this.reconnectDelay_=tE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+IS.replace(/\./g,"-")]=1,Qp()?e["framework.cordova"]=1:_T()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nc.getInstance().currentlyOnline();return mf(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
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
 */class Jc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(Ds,e),i=new te(Ds,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
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
 */let zl;class XS extends Jc{static get __EMPTY_NODE(){return zl}static set __EMPTY_NODE(e){zl=e}compare(e,n){return Ks(e.name,n.name)}isDefinedOn(e){throw js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Ti,zl)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,zl)}toString(){return".key"}}const ms=new XS;/**
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
 */class $l{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Pt.EMPTY_NODE,this.right=s??Pt.EMPTY_NODE}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Pt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class Sb{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pt{constructor(e,n=Pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $l(this.root_,null,this.comparator_,!0,e)}}Pt.EMPTY_NODE=new Sb;/**
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
 */function Cb(t,e){return Ks(t.name,e.name)}function Qm(t,e){return Ks(t,e)}/**
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
 */let Bf;function Rb(t){Bf=t}const JS=function(t){return typeof t=="number"?"number:"+PS(t):"string:"+t},ZS=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&er(e,".sv"),"Priority must be a string or number.")}else V(t===Bf||t.isEmpty(),"priority of unexpected type.");V(t===Bf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let rE;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ZS(this.priorityNode_)}static set __childrenNodeConstructor(e){rE=e}static get __childrenNodeConstructor(){return rE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ne(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ne(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(V(r!==".priority"||Vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+JS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=PS(this.value_):e+=this.value_,this.lazyHash_=CS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=We.VALUE_TYPE_ORDER.indexOf(n),s=We.VALUE_TYPE_ORDER.indexOf(r);return V(i>=0,"Unknown leaf type: "+n),V(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let eC,tC;function Ab(t){eC=t}function Pb(t){tC=t}class kb extends Jc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ks(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Ti,new We("[PRIORITY-POST]",tC))}makePost(e,n){const r=eC(e);return new te(n,new We("[PRIORITY-POST]",r))}toString(){return".priority"}}const Oe=new kb;/**
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
 */const Nb=Math.log(2);class Ob{constructor(e){const n=s=>parseInt(Math.log(s)/Nb,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new Ge(m,f.node,Ge.BLACK,null,null);{const y=parseInt(d/2,10)+u,R=i(u,y),P=i(y+1,c);return f=t[y],m=n?n(f):f,new Ge(m,f.node,Ge.BLACK,R,P)}},s=function(u){let c=null,d=null,f=t.length;const m=function(R,P){const O=f-R,T=f;f-=R;const v=i(O+1,T),C=t[O],D=n?n(C):C;y(new Ge(D,C.node,P,null,v))},y=function(R){c?(c.left=R,c=R):(d=R,c=R)};for(let R=0;R<u.count;++R){const P=u.nextBitIsOne(),O=Math.pow(2,u.count-(R+1));P?m(O,Ge.BLACK):(m(O,Ge.BLACK),m(O,Ge.RED))}return d},o=new Ob(t.length),a=s(o);return new Pt(r||e,a)};/**
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
 */let md;const Ui={};class Bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(Ui&&Oe,"ChildrenNode.ts has not been loaded"),md=md||new Bn({".priority":Ui},{".priority":Oe}),md}get(e){const n=Ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pt?n:null}hasIndex(e){return er(this.indexSet_,e.toString())}addIndex(e,n){V(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=rc(r,e.getCompare()):a=Ui;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Bn(d,c)}addToIndexes(e,n){const r=Uu(this.indexes_,(i,s)=>{const o=Ss(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),i===Ui)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(te.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),rc(a,o.getCompare())}else return Ui;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new te(e.name,a))),u.insert(e,e.node)}});return new Bn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Uu(this.indexes_,i=>{if(i===Ui)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Bn(r,this.indexSet_)}}/**
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
 */let To;class K{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ZS(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return To||(To=new K(new Pt(Qm),null,Bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||To}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?To:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?To:this.priorityNode_;return new K(i,o,s)}}updateChild(e,n){const r=ne(e);if(r===null)return n;{V(ne(e)!==".priority"||Vr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ge(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+JS(this.getPriority().val())+":"),this.forEachChild(Oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":CS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Za?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Oe),i=n.getIterator(Oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xb extends K{constructor(){super(new Pt(Qm),K.EMPTY_NODE,Bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Za=new xb;Object.defineProperties(te,{MIN:{value:new te(Ds,K.EMPTY_NODE)},MAX:{value:new te(Ti,Za)}});XS.__EMPTY_NODE=K.EMPTY_NODE;We.__childrenNodeConstructor=K;Rb(Za);Pb(Za);/**
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
 */const Db=!0;function ft(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new We(n,ft(e))}if(!(t instanceof Array)&&Db){const n=[];let r=!1;if(xt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ft(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new te(o,u)))}}),n.length===0)return K.EMPTY_NODE;const s=rc(n,Cb,o=>o.name,Qm);if(r){const o=rc(n,Oe.getCompare());return new K(s,ft(e),new Bn({".priority":o},{".priority":Oe}))}else return new K(s,ft(e),Bn.Default)}else{let n=K.EMPTY_NODE;return xt(t,(r,i)=>{if(er(t,r)&&r.substring(0,1)!=="."){const s=ft(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ft(e))}}Ab(ft);/**
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
 */class Lb extends Jc{constructor(e){super(),this.indexPath_=e,V(!re(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ks(e.name,n.name):s}makePost(e,n){const r=ft(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Za);return new te(Ti,e)}toString(){return KS(this.indexPath_,0).join("/")}}/**
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
 */class Mb extends Jc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ks(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=ft(e);return new te(n,r)}toString(){return".value"}}const bb=new Mb;/**
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
 */function nC(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Pa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ka(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ym{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Pa(n,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,r)):o.trackChildChange(ka(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Pa(i,s))}),n.isLeafNode()||n.forEachChild(Oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ka(i,s,o))}else r.trackChildChange(Ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Na{constructor(e){this.indexedFilter_=new Ym(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Na.getStartPost_(e),this.endPost_=Na.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new te(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const s=this;return n.forEachChild(Oe,(o,a)=>{s.matches(new te(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Fb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Na(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new te(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const u=new te(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,u);if(d&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ka(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Pa(n,f));const P=a.updateImmediateChild(n,K.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Ls(m.name,m.node)),P.updateImmediateChild(m.name,m.node)):P}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Pa(c.name,c.node)),s.trackChildChange(Ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
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
 */class Xm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ds}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Xm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ub(t){return t.loadsAllData()?new Ym(t.getIndex()):t.hasLimit()?new Fb(t):new Na(t)}function iE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===bb?n="$value":t.index_===ms?n="$key":(V(t.index_ instanceof Lb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
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
 */class ic extends HS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Xa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ic.getListenId_(e,r),a={};this.listens_[o]=a;const u=iE(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Ss(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=ic.getListenId_(e,n);delete this.listens_[r]}get(e){const n=iE(e._queryParams),r=e._path.toString(),i=new Kp;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=ga(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Bb{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function sc(){return{value:null,children:new Map}}function rC(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ne(e);t.children.has(r)||t.children.set(r,sc());const i=t.children.get(r);e=ge(e),rC(i,e,n)}}function jf(t,e,n){t.value!==null?n(e,t.value):jb(t,(r,i)=>{const s=new me(e.toString()+"/"+r);jf(i,s,n)})}function jb(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class zb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const oE=10*1e3,$b=30*1e3,Wb=5*60*1e3;class Hb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zb(e);const r=oE+($b-oE)*Math.random();Go(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;xt(e,(i,s)=>{s>0&&er(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Go(this.reportStats_.bind(this),Math.floor(Math.random()*2*Wb))}}/**
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
 */var sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function iC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class oc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=sn.ACK_USER_WRITE,this.source=iC()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new oc(he(),n,this.revert)}}else return V(ne(this.path)===e,"operationForChild called for unrelated child."),new oc(ge(this.path),this.affectedTree,this.revert)}}/**
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
 */class Oa{constructor(e,n){this.source=e,this.path=n,this.type=sn.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Oa(this.source,he()):new Oa(this.source,ge(this.path))}}/**
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
 */class Ii{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=sn.OVERWRITE}operationForChild(e){return re(this.path)?new Ii(this.source,he(),this.snap.getImmediateChild(e)):new Ii(this.source,ge(this.path),this.snap)}}/**
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
 */class xa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=sn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new Ii(this.source,he(),n.value):new xa(this.source,he(),n)}else return V(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xa(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Si{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class qb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gb(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Vb(o.childName,o.snapshotNode))}),Io(t,i,"child_removed",e,r,n),Io(t,i,"child_added",e,r,n),Io(t,i,"child_moved",s,r,n),Io(t,i,"child_changed",e,r,n),Io(t,i,"value",e,r,n),i}function Io(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>Qb(t,a,u)),o.forEach(a=>{const u=Kb(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function Kb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qb(t,e,n){if(e.childName==null||n.childName==null)throw js("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Zc(t,e){return{eventCache:t,serverCache:e}}function Ko(t,e,n,r){return Zc(new Si(e,n,r),t.serverCache)}function sC(t,e,n,r){return Zc(t.eventCache,new Si(e,n,r))}function zf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let gd;const Yb=()=>(gd||(gd=new Pt(MM)),gd);class Te{constructor(e,n=Yb()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return xt(e,(r,i)=>{n=n.set(new me(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(re(e))return null;{const r=ne(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ge(e),n);return s!=null?{path:Be(new me(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ne(e),r=this.children.get(n);return r!==null?r.subtree(ge(e)):new Te(null)}}set(e,n){if(re(e))return new Te(n,this.children);{const r=ne(e),s=(this.children.get(r)||new Te(null)).set(ge(e),n),o=this.children.insert(r,s);return new Te(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=ne(e),r=this.children.get(n);if(r){const i=r.remove(ge(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Te(null):new Te(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ne(e),r=this.children.get(n);return r?r.get(ge(e)):null}}setTree(e,n){if(re(e))return n;{const r=ne(e),s=(this.children.get(r)||new Te(null)).setTree(ge(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Te(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ne(e),o=this.children.get(s);return o?o.findOnPath_(ge(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ne(e),s=this.children.get(i);return s?s.foreachOnPath_(ge(e),Be(n,i),r):new Te(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new Te(null))}}function Qo(t,e,n){if(re(e))return new un(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=At(i,e);return s=s.updateChild(o,n),new un(t.writeTree_.set(i,s))}else{const i=new Te(n),s=t.writeTree_.setTree(e,i);return new un(s)}}}function aE(t,e,n){let r=t;return xt(n,(i,s)=>{r=Qo(r,Be(e,i),s)}),r}function lE(t,e){if(re(e))return un.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new un(n)}}function $f(t,e){return xi(t,e)!=null}function xi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(At(n.path,e)):null}function uE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function Nr(t,e){if(re(e))return t;{const n=xi(t,e);return n!=null?new un(new Te(n)):new un(t.writeTree_.subtree(e))}}function Wf(t){return t.writeTree_.isEmpty()}function Ms(t,e){return oC(he(),t.writeTree_,e)}function oC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=oC(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
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
 */function eg(t,e){return cC(e,t)}function Xb(t,e,n,r,i){V(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Qo(t.visibleWrites,e,n)),t.lastWriteId=r}function Jb(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Zb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&eV(a,r.path)?i=!1:rn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return tV(t),!0;if(r.snap)t.visibleWrites=lE(t.visibleWrites,r.path);else{const a=r.children;xt(a,u=>{t.visibleWrites=lE(t.visibleWrites,Be(r.path,u))})}return!0}else return!1}function eV(t,e){if(t.snap)return rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rn(Be(t.path,n),e))return!0;return!1}function tV(t){t.visibleWrites=aC(t.allWrites,nV,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nV(t){return t.visible}function aC(t,e,n){let r=un.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)rn(n,o)?(a=At(n,o),r=Qo(r,a,s.snap)):rn(o,n)&&(a=At(o,n),r=Qo(r,he(),s.snap.getChild(a)));else if(s.children){if(rn(n,o))a=At(n,o),r=aE(r,a,s.children);else if(rn(o,n))if(a=At(o,n),re(a))r=aE(r,he(),s.children);else{const u=Ss(s.children,ne(a));if(u){const c=u.getChild(ge(a));r=Qo(r,he(),c)}}}else throw js("WriteRecord should have .snap or .children")}}return r}function lC(t,e,n,r,i){if(!r&&!i){const s=xi(t.visibleWrites,e);if(s!=null)return s;{const o=Nr(t.visibleWrites,e);if(Wf(o))return n;if(n==null&&!$f(o,he()))return null;{const a=n||K.EMPTY_NODE;return Ms(o,a)}}}else{const s=Nr(t.visibleWrites,e);if(!i&&Wf(s))return n;if(!i&&n==null&&!$f(s,he()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(rn(c.path,e)||rn(e,c.path))},a=aC(t.allWrites,o,e),u=n||K.EMPTY_NODE;return Ms(a,u)}}}function rV(t,e,n){let r=K.EMPTY_NODE;const i=xi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nr(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const u=Ms(Nr(s,new me(o)),a);r=r.updateImmediateChild(o,u)}),uE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nr(t.visibleWrites,e);return uE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function iV(t,e,n,r,i){V(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if($f(t.visibleWrites,s))return null;{const o=Nr(t.visibleWrites,s);return Wf(o)?i.getChild(n):Ms(o,i.getChild(n))}}function sV(t,e,n,r){const i=Be(e,n),s=xi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,i);return Ms(o,r.getNode().getImmediateChild(n))}else return null}function oV(t,e){return xi(t.visibleWrites,e)}function aV(t,e,n,r,i,s,o){let a;const u=Nr(t.visibleWrites,e),c=xi(u,he());if(c!=null)a=c;else if(n!=null)a=Ms(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&d.length<i;)f(y,r)!==0&&d.push(y),y=m.getNext();return d}else return[]}function lV(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function ac(t,e,n,r){return lC(t.writeTree,t.treePath,e,n,r)}function tg(t,e){return rV(t.writeTree,t.treePath,e)}function cE(t,e,n,r){return iV(t.writeTree,t.treePath,e,n,r)}function lc(t,e){return oV(t.writeTree,Be(t.treePath,e))}function uV(t,e,n,r,i,s){return aV(t.writeTree,t.treePath,e,n,r,i,s)}function ng(t,e,n){return sV(t.writeTree,t.treePath,e,n)}function uC(t,e){return cC(Be(t.treePath,e),t.writeTree)}function cC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class cV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ka(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Pa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ka(r,e.snapshotNode,i.oldSnap));else throw js("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const hC=new hV;class rg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ng(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ci(this.viewCache_),s=uV(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function dV(t){return{filter:t}}function fV(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pV(t,e,n,r,i){const s=new cV;let o,a;if(n.type===sn.OVERWRITE){const c=n;c.source.fromUser?o=Hf(t,e,c.path,c.snap,r,i,s):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=uc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===sn.MERGE){const c=n;c.source.fromUser?o=gV(t,e,c.path,c.children,r,i,s):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=qf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===sn.ACK_USER_WRITE){const c=n;c.revert?o=vV(t,e,c.path,r,i,s):o=_V(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===sn.LISTEN_COMPLETE)o=yV(t,e,n.path,r,s);else throw js("Unknown operation type: "+n.type);const u=s.getChanges();return mV(e,o,u),{viewCache:o,changes:u}}function mV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(nC(zf(e)))}}function dC(t,e,n,r,i,s){const o=e.eventCache;if(lc(r,n)!=null)return e;{let a,u;if(re(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ci(e),d=c instanceof K?c:K.EMPTY_NODE,f=tg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=ac(r,Ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ne(n);if(c===".priority"){V(Vr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=cE(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=ge(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=cE(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=ng(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return Ko(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function uc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),y,null)}else{const y=ne(n);if(!u.isCompleteForPath(n)&&Vr(n)>1)return e;const R=ge(n),O=u.getNode().getImmediateChild(y).updateChild(R,r);y===".priority"?c=d.updatePriority(u.getNode(),O):c=d.updateChild(u.getNode(),y,O,R,hC,null)}const f=sC(e,c,u.isFullyInitialized()||re(n),d.filtersNodes()),m=new rg(i,f,s);return dC(t,f,n,i,m,a)}function Hf(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new rg(i,e,s);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ko(e,c,!0,t.filter.filtersNodes());else{const f=ne(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ko(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=ge(n),y=a.getNode().getImmediateChild(f);let R;if(re(m))R=r;else{const P=d.getCompleteChild(f);P!=null?GS(m)===".priority"&&P.getChild(QS(m)).isEmpty()?R=P:R=P.updateChild(m,r):R=K.EMPTY_NODE}if(y.equals(R))u=e;else{const P=t.filter.updateChild(a.getNode(),f,R,m,d,o);u=Ko(e,P,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function hE(t,e){return t.eventCache.isCompleteForChild(e)}function gV(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=Be(n,u);hE(e,ne(d))&&(a=Hf(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=Be(n,u);hE(e,ne(d))||(a=Hf(t,a,d,c,i,s,o))}),a}function dE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function qf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;re(n)?c=r:c=new Te(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),R=dE(t,y,m);u=uc(t,u,new me(f),R,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!y){const R=e.serverCache.getNode().getImmediateChild(f),P=dE(t,R,m);u=uc(t,u,new me(f),P,i,s,o,a)}}),u}function _V(t,e,n,r,i,s,o){if(lc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(re(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return uc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(re(n)){let c=new Te(null);return u.getNode().forEachChild(ms,(d,f)=>{c=c.set(new me(d),f)}),qf(t,e,n,c,i,s,a,o)}else return e}else{let c=new Te(null);return r.foreach((d,f)=>{const m=Be(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),qf(t,e,n,c,i,s,a,o)}}function yV(t,e,n,r,i){const s=e.serverCache,o=sC(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return dC(t,o,n,r,hC,i)}function vV(t,e,n,r,i,s){let o;if(lc(r,n)!=null)return e;{const a=new rg(r,e,i),u=e.eventCache.getNode();let c;if(re(n)||ne(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ac(r,Ci(e));else{const f=e.serverCache.getNode();V(f instanceof K,"serverChildren would be complete if leaf node"),d=tg(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ne(n);let f=ng(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,ge(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,K.EMPTY_NODE,ge(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ac(r,Ci(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||lc(r,he())!=null,Ko(e,c,o,t.filter.filtersNodes())}}/**
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
 */class EV{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ym(r.getIndex()),s=Ub(r);this.processor_=dV(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(K.EMPTY_NODE,a.getNode(),null),d=new Si(u,o.isFullyInitialized(),i.filtersNodes()),f=new Si(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zc(f,d),this.eventGenerator_=new qb(this.query_)}get query(){return this.query_}}function wV(t){return t.viewCache_.serverCache.getNode()}function TV(t,e){const n=Ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function fE(t){return t.eventRegistrations_.length===0}function IV(t,e){t.eventRegistrations_.push(e)}function pE(t,e,n){const r=[];if(n){V(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function mE(t,e,n,r){e.type===sn.MERGE&&e.source.queryId!==null&&(V(Ci(t.viewCache_),"We should always have a full cache before handling merges"),V(zf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=pV(t.processor_,i,e,n,r);return fV(t.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,fC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function SV(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(s,o)=>{r.push(Ls(s,o))}),n.isFullyInitialized()&&r.push(nC(n.getNode())),fC(t,r,n.getNode(),e)}function fC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Gb(t.eventGenerator_,e,n,i)}/**
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
 */let cc;class CV{constructor(){this.views=new Map}}function RV(t){V(!cc,"__referenceConstructor has already been defined"),cc=t}function AV(){return V(cc,"Reference.ts has not been loaded"),cc}function PV(t){return t.views.size===0}function ig(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return V(s!=null,"SyncTree gave us an op for an invalid query."),mE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(mE(o,e,n,r));return s}}function kV(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ac(n,i?r:null),u=!1;a?u=!0:r instanceof K?(a=tg(n,r),u=!1):(a=K.EMPTY_NODE,u=!1);const c=Zc(new Si(a,u,!1),new Si(r,i,!1));return new EV(e,c)}return o}function NV(t,e,n,r,i,s){const o=kV(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),IV(o,n),SV(o,n)}function OV(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Fr(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(pE(c,n,r)),fE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(pE(u,n,r)),fE(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Fr(t)&&s.push(new(AV())(e._repo,e._path)),{removed:s,events:o}}function pC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function gs(t,e){let n=null;for(const r of t.views.values())n=n||TV(r,e);return n}function mC(t,e){if(e._queryParams.loadsAllData())return eh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function gC(t,e){return mC(t,e)!=null}function Fr(t){return eh(t)!=null}function eh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let hc;function xV(t){V(!hc,"__referenceConstructor has already been defined"),hc=t}function DV(){return V(hc,"Reference.ts has not been loaded"),hc}let LV=1;class gE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=lV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function MV(t,e,n,r,i){return Xb(t.pendingWriteTree_,e,n,r,i),i?el(t,new Ii(iC(),e,n)):[]}function rs(t,e,n=!1){const r=Jb(t.pendingWriteTree_,e);if(Zb(t.pendingWriteTree_,e)){let s=new Te(null);return r.snap!=null?s=s.set(he(),!0):xt(r.children,o=>{s=s.set(new me(o),!0)}),el(t,new oc(r.path,s,n))}else return[]}function th(t,e,n){return el(t,new Ii(Jm(),e,n))}function bV(t,e,n){const r=Te.fromObject(n);return el(t,new xa(Jm(),e,r))}function VV(t,e){return el(t,new Oa(Jm(),e))}function FV(t,e,n){const r=sg(t,n);if(r){const i=og(r),s=i.path,o=i.queryId,a=At(s,e),u=new Oa(Zm(o),a);return ag(t,s,u)}else return[]}function Gf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||gC(o,e))){const u=OV(o,e,n,r);PV(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const d=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,y)=>Fr(y));if(d&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const y=jV(m);for(let R=0;R<y.length;++R){const P=y[R],O=P.query,T=EC(t,P);t.listenProvider_.startListening(Yo(O),dc(t,O),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Yo(e),null):c.forEach(m=>{const y=t.queryToTagMap.get(nh(m));t.listenProvider_.stopListening(Yo(m),y)}))}zV(t,c)}return a}function UV(t,e,n,r){const i=sg(t,r);if(i!=null){const s=og(i),o=s.path,a=s.queryId,u=At(o,e),c=new Ii(Zm(a),u,n);return ag(t,o,c)}else return[]}function BV(t,e,n,r){const i=sg(t,r);if(i){const s=og(i),o=s.path,a=s.queryId,u=At(o,e),c=Te.fromObject(n),d=new xa(Zm(a),u,c);return ag(t,o,d)}else return[]}function _E(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,y)=>{const R=At(m,i);s=s||gs(y,R),o=o||Fr(y)});let a=t.syncPointTree_.get(i);a?(o=o||Fr(a),s=s||gs(a,he())):(a=new CV,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=K.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,R)=>{const P=gs(R,he());P&&(s=s.updateImmediateChild(y,P))}));const c=gC(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=nh(e);V(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=$V();t.queryToTagMap.set(m,y),t.tagToQueryMap.set(y,m)}const d=eg(t.pendingWriteTree_,i);let f=NV(a,e,n,d,s,u);if(!c&&!o&&!r){const m=mC(a,e);f=f.concat(WV(t,e,m))}return f}function _C(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=At(o,e),c=gs(a,u);if(c)return c});return lC(i,e,s,n,!0)}function el(t,e){return yC(e,t.syncPointTree_,null,eg(t.pendingWriteTree_,he()))}function yC(t,e,n,r){if(re(t.path))return vC(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=gs(i,he()));let s=[];const o=ne(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=uC(r,o);s=s.concat(yC(a,u,c,d))}return i&&(s=s.concat(ig(i,t,r,n))),s}}function vC(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=gs(i,he()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=uC(r,o),d=t.operationForChild(o);d&&(s=s.concat(vC(d,a,u,c)))}),i&&(s=s.concat(ig(i,t,r,n))),s}function EC(t,e){const n=e.query,r=dc(t,n);return{hashFn:()=>(wV(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?FV(t,n._path,r):VV(t,n._path);{const s=FM(i,n);return Gf(t,n,null,s)}}}}function dc(t,e){const n=nh(e);return t.queryToTagMap.get(n)}function nh(t){return t._path.toString()+"$"+t._queryIdentifier}function sg(t,e){return t.tagToQueryMap.get(e)}function og(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function ag(t,e,n){const r=t.syncPointTree_.get(e);V(r,"Missing sync point for query tag that we're tracking");const i=eg(t.pendingWriteTree_,e);return ig(r,n,i,null)}function jV(t){return t.fold((e,n,r)=>{if(n&&Fr(n))return[eh(n)];{let i=[];return n&&(i=pC(n)),xt(r,(s,o)=>{i=i.concat(o)}),i}})}function Yo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(DV())(t._repo,t._path):t}function zV(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=nh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function $V(){return LV++}function WV(t,e,n){const r=e._path,i=dc(t,e),s=EC(t,n),o=t.listenProvider_.startListening(Yo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)V(!Fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!re(c)&&d&&Fr(d))return[eh(d).query];{let m=[];return d&&(m=m.concat(pC(d).map(y=>y.query))),xt(f,(y,R)=>{m=m.concat(R)}),m}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(Yo(d),dc(t,d))}}return o}/**
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
 */class lg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lg(n)}node(){return this.node_}}class ug{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new ug(this.syncTree_,n)}node(){return _C(this.syncTree_,this.path_)}}const HV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yE=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return GV(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},GV=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&V(!1,"Unexpected increment value: "+r);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},KV=function(t,e,n,r){return cg(e,new ug(n,t),r)},QV=function(t,e,n){return cg(t,new lg(e),n)};function cg(t,e,n){const r=t.getPriority().val(),i=yE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=yE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new We(a,ft(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new We(i))),o.forEachChild(Oe,(a,u)=>{const c=cg(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class hg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function dg(t,e){let n=e instanceof me?e:new me(e),r=t,i=ne(n);for(;i!==null;){const s=Ss(r.node.children,i)||{children:{},childCount:0};r=new hg(i,r,s),n=ge(n),i=ne(n)}return r}function Qs(t){return t.node.value}function wC(t,e){t.node.value=e,Kf(t)}function TC(t){return t.node.childCount>0}function YV(t){return Qs(t)===void 0&&!TC(t)}function rh(t,e){xt(t.node.children,(n,r)=>{e(new hg(n,t,r))})}function IC(t,e,n,r){n&&!r&&e(t),rh(t,i=>{IC(i,e,!0,r)}),n&&r&&e(t)}function XV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function tl(t){return new me(t.parent===null?t.name:tl(t.parent)+"/"+t.name)}function Kf(t){t.parent!==null&&JV(t.parent,t.name,t)}function JV(t,e,n){const r=YV(n),i=er(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Kf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Kf(t))}/**
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
 */const ZV=/[\[\].#$\/\u0000-\u001F\u007F]/,e2=/[\[\].#$\u0000-\u001F\u007F]/,_d=10*1024*1024,SC=function(t){return typeof t=="string"&&t.length!==0&&!ZV.test(t)},CC=function(t){return typeof t=="string"&&t.length!==0&&!e2.test(t)},t2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),CC(t)},RC=function(t,e,n){const r=n instanceof me?new _b(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xr(r)+" with contents = "+e.toString());if(RS(e))throw new Error(t+"contains "+e.toString()+" "+Xr(r));if(typeof e=="string"&&e.length>_d/3&&Mc(e)>_d)throw new Error(t+"contains a string greater than "+_d+" utf8 bytes "+Xr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(xt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!SC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yb(r,o),RC(t,a,r),vb(r)}),i&&s)throw new Error(t+' contains ".value" child '+Xr(r)+" in addition to actual children.")}},AC=function(t,e,n,r){if(!CC(n))throw new Error(ET(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},n2=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),AC(t,e,n)},r2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!SC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!t2(n))throw new Error(ET(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class i2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function PC(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function kC(t,e,n){PC(t,n),NC(t,r=>Gm(r,e))}function Di(t,e,n){PC(t,n),NC(t,r=>rn(r,e)||rn(e,r))}function NC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(s2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function s2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qo&&dt("event: "+n.toString()),Ja(r)}}}/**
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
 */const o2="repo_interrupt",a2=25;class l2{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new i2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sc(),this.transactionQueueTree_=new hg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u2(t,e,n){if(t.stats_=Hm(t.repoInfo_),t.forceRestClient_||zM())t.server_=new ic(t.repoInfo_,(r,i,s,o)=>{vE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>EE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $n(t.repoInfo_,e,(r,i,s,o)=>{vE(t,r,i,s,o)},r=>{EE(t,r)},r=>{h2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=GM(t.repoInfo_,()=>new Hb(t.stats_,t.server_)),t.infoData_=new Bb,t.infoSyncTree_=new gE({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=th(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fg(t,"connected",!1),t.serverSyncTree_=new gE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);Di(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function c2(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function OC(t){return HV({timestamp:c2(t)})}function vE(t,e,n,r,i){t.dataUpdateCount++;const s=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Uu(n,c=>ft(c));o=BV(t.serverSyncTree_,s,u,i)}else{const u=ft(n);o=UV(t.serverSyncTree_,s,u,i)}else if(r){const u=Uu(n,c=>ft(c));o=bV(t.serverSyncTree_,s,u)}else{const u=ft(n);o=th(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=mg(t,s)),Di(t.eventQueue_,a,o)}function EE(t,e){fg(t,"connected",e),e===!1&&f2(t)}function h2(t,e){xt(e,(n,r)=>{fg(t,n,r)})}function fg(t,e,n){const r=new me("/.info/"+e),i=ft(n);t.infoData_.updateSnapshot(r,i);const s=th(t.infoSyncTree_,r,i);Di(t.eventQueue_,r,s)}function d2(t){return t.nextWriteId_++}function f2(t){xC(t,"onDisconnectEvents");const e=OC(t),n=sc();jf(t.onDisconnect_,he(),(i,s)=>{const o=KV(i,s,t.serverSyncTree_,e);rC(n,i,o)});let r=[];jf(n,he(),(i,s)=>{r=r.concat(th(t.serverSyncTree_,i,s));const o=v2(t,i);mg(t,o)}),t.onDisconnect_=sc(),Di(t.eventQueue_,he(),r)}function p2(t,e,n){let r;ne(e._path)===".info"?r=_E(t.infoSyncTree_,e,n):r=_E(t.serverSyncTree_,e,n),kC(t.eventQueue_,e._path,r)}function m2(t,e,n){let r;ne(e._path)===".info"?r=Gf(t.infoSyncTree_,e,n):r=Gf(t.serverSyncTree_,e,n),kC(t.eventQueue_,e._path,r)}function g2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(o2)}function xC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),dt(n,...e)}function DC(t,e,n){return _C(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function pg(t,e=t.transactionQueueTree_){if(e||ih(t,e),Qs(e)){const n=MC(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_2(t,tl(e),n)}else TC(e)&&rh(e,n=>{pg(t,n)})}function _2(t,e,n){const r=n.map(c=>c.currentWriteId),i=DC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];V(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=At(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{xC(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(rs(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();ih(t,dg(t.transactionQueueTree_,e)),pg(t,t.transactionQueueTree_),Di(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)Ja(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Vt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}mg(t,e)}},o)}function mg(t,e){const n=LC(t,e),r=tl(n),i=MC(t,n);return y2(t,i,r),r}function y2(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=At(n,u.path);let d=!1,f;if(V(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(rs(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=a2)d=!0,f="maxretry",i=i.concat(rs(t.serverSyncTree_,u.currentWriteId,!0));else{const m=DC(t,u.path,o);u.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){RC("transaction failed: Data returned ",y,u.path);let R=ft(y);typeof y=="object"&&y!=null&&er(y,".priority")||(R=R.updatePriority(m.getPriority()));const O=u.currentWriteId,T=OC(t),v=QV(R,m,T);u.currentOutputSnapshotRaw=R,u.currentOutputSnapshotResolved=v,u.currentWriteId=d2(t),o.splice(o.indexOf(O),1),i=i.concat(MV(t.serverSyncTree_,u.path,v,u.currentWriteId,u.applyLocally)),i=i.concat(rs(t.serverSyncTree_,O,!0))}else d=!0,f="nodata",i=i.concat(rs(t.serverSyncTree_,u.currentWriteId,!0))}Di(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}ih(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ja(r[a]);pg(t,t.transactionQueueTree_)}function LC(t,e){let n,r=t.transactionQueueTree_;for(n=ne(e);n!==null&&Qs(r)===void 0;)r=dg(r,n),e=ge(e),n=ne(e);return r}function MC(t,e){const n=[];return bC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function bC(t,e,n){const r=Qs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);rh(e,i=>{bC(t,i,n)})}function ih(t,e){const n=Qs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,wC(e,n.length>0?n:void 0)}rh(e,r=>{ih(t,r)})}function v2(t,e){const n=tl(LC(t,e)),r=dg(t.transactionQueueTree_,e);return XV(r,i=>{yd(t,i)}),yd(t,r),IC(r,i=>{yd(t,i)}),n}function yd(t,e){const n=Qs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?wC(e,void 0):n.length=s+1,Di(t.eventQueue_,tl(e),i);for(let o=0;o<r.length;o++)Ja(r[o])}}/**
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
 */function E2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function w2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const wE=function(t,e){const n=T2(t),r=n.namespace;n.domain==="firebase.com"&&Xn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Xn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new FS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new me(n.pathString)}},T2=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=E2(t.substring(d,f)));const m=w2(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const R=e.indexOf(".");r=e.substring(0,R).toLowerCase(),n=e.substring(R+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class I2{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class S2{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class C2{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:GS(this._path)}get ref(){return new zr(this._repo,this._path)}get _queryIdentifier(){const e=sE(this._queryParams),n=$m(e);return n==="{}"?"default":n}get _queryObject(){return sE(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof gg))return!1;const n=this._repo===e._repo,r=Gm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gb(this._path)}}class zr extends gg{constructor(e,n){super(e,n,new Xm,!1)}get parent(){const e=QS(this._path);return e===null?null:new zr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),r=Qf(this.ref,e);return new fc(this._node.getChild(n),r,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new fc(i,Qf(this.ref,r),Oe)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function R2(t,e){return t=mt(t),t._checkNotDeleted("ref"),Qf(t._root,e)}function Qf(t,e){return t=mt(t),ne(t._path)===null?n2("child","path",e):AC("child","path",e),new zr(t._repo,Be(t._path,e))}class _g{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new I2("value",this,new fc(e.snapshotNode,new zr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new S2(this,e,n):null}matches(e){return e instanceof _g?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function A2(t,e,n,r,i){const s=new C2(n,void 0),o=new _g(s);return p2(t._repo,t,o),()=>m2(t._repo,t,o)}function P2(t,e,n,r){return A2(t,"value",e)}RV(zr);xV(zr);/**
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
 */const k2="FIREBASE_DATABASE_EMULATOR_HOST",Yf={};let N2=!1;function O2(t,e,n,r){t.repoInfo_=new FS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function x2(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Xn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wE(s,i),a=o.repoInfo,u;typeof process<"u"&&jv&&(u=jv[k2]),u?(s=`http://${u}?ns=${a.namespace}`,o=wE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new WM(t.name,t.options,e);r2("Invalid Firebase Database URL",o),re(o.path)||Xn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=L2(a,t,c,new $M(t.name,n));return new M2(d,t)}function D2(t,e){const n=Yf[e];(!n||n[t.key]!==t)&&Xn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),g2(t),delete n[t.key]}function L2(t,e,n,r){let i=Yf[e.name];i||(i={},Yf[e.name]=i);let s=i[t.toURLString()];return s&&Xn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new l2(t,N2,n,r),i[t.toURLString()]=s,s}class M2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zr(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(D2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xn("Cannot call "+e+" on a deleted database.")}}function b2(t=Xp(),e){const n=Vc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=fT("database");r&&V2(n,...r)}return n}function V2(t,e,n,r={}){t=mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Xn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Xn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new cu(cu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:gT(r.mockUserToken,t.app.options.projectId);s=new cu(o)}O2(i,e,n,s)}/**
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
 */function F2(t){AM(ki),_i(new Dr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return x2(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gn(zv,$v,t),gn(zv,$v,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};F2();var TE;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(TE||(TE={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var IE;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(IE||(IE={}));var SE;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(SE||(SE={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const CE=["user","model","function","system"];var RE;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(RE||(RE={}));var AE;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(AE||(AE={}));var PE;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(PE||(PE={}));var kE;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(kE||(kE={}));var pc;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(pc||(pc={}));var NE;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(NE||(NE={}));var OE;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(OE||(OE={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ct extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Bi extends Ct{constructor(e,n){super(e),this.response=n}}class VC extends Ct{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class ci extends Ct{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const U2="https://generativelanguage.googleapis.com",B2="v1beta",j2="0.14.1",z2="genai-js";var Ri;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Ri||(Ri={}));class $2{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||B2;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||U2}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function W2(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${z2}/${j2}`),e.join(" ")}async function H2(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",W2(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new ci(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new ci(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new ci(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function q2(t,e,n,r,i,s){const o=new $2(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},Y2(s)),{method:"POST",headers:await H2(o),body:i})}}async function nl(t,e,n,r,i,s,o=fetch){const{url:a,fetchOptions:u}=await q2(t,e,n,r,i,s);return G2(a,u,o)}async function G2(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){K2(i,t)}return r.ok||await Q2(r,t),r}function K2(t,e){let n=t;throw t instanceof VC||t instanceof ci||(n=new Ct(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function Q2(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new VC(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function Y2(t){const e={};if((t==null?void 0:t.timeout)>=0){const n=new AbortController,r=n.signal;setTimeout(()=>n.abort(),t.timeout),e.signal=r}return e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function yg(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),hu(t.candidates[0]))throw new Bi(`${lr(t)}`,t);return X2(t)}else if(t.promptFeedback)throw new Bi(`Text not available. ${lr(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),hu(t.candidates[0]))throw new Bi(`${lr(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),xE(t)[0]}else if(t.promptFeedback)throw new Bi(`Function call not available. ${lr(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),hu(t.candidates[0]))throw new Bi(`${lr(t)}`,t);return xE(t)}else if(t.promptFeedback)throw new Bi(`Function call not available. ${lr(t)}`,t)},t}function X2(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```python\n"+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function xE(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const J2=[pc.RECITATION,pc.SAFETY];function hu(t){return!!t.finishReason&&J2.includes(t.finishReason)}function lr(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];hu(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function Da(t){return this instanceof Da?(this.v=t,this):new Da(t)}function Z2(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(m){r[m]&&(i[m]=function(y){return new Promise(function(R,P){s.push([m,y,R,P])>1||a(m,y)})})}function a(m,y){try{u(r[m](y))}catch(R){f(s[0][3],R)}}function u(m){m.value instanceof Da?Promise.resolve(m.value.v).then(c,d):f(s[0][2],m)}function c(m){a("next",m)}function d(m){a("throw",m)}function f(m,y){m(y),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const DE=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function eF(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=rF(e),[r,i]=n.tee();return{stream:nF(r),response:tF(i)}}async function tF(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return yg(iF(e));e.push(i)}}function nF(t){return Z2(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield Da(n.read());if(i)break;yield yield Da(yg(r))}})}function rF(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:a})=>{if(a){if(i.trim()){r.error(new Ct("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(DE),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new Ct(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),i=i.substring(u[0].length),u=i.match(DE)}return s()})}}})}function iF(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const a of i.content.parts)a.text&&(o.text=a.text),a.functionCall&&(o.functionCall=a.functionCall),a.executableCode&&(o.executableCode=a.executableCode),a.codeExecutionResult&&(o.codeExecutionResult=a.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function FC(t,e,n,r){const i=await nl(e,Ri.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return eF(i)}async function UC(t,e,n,r){const s=await(await nl(e,Ri.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:yg(s)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function BC(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function La(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return sF(e)}function sF(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new Ct("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new Ct("No content is provided for sending chat message.");return r?e:n}function oF(t,e){let n={};const r=t.generateContentRequest!=null;if(t.contents){if(r)throw new ci("CountTokensRequest must have one of contents or generateContentRequest, not both.");n=Object.assign({},t)}else if(r)n=Object.assign({},t),n.generateContentRequest.model=e;else{const i=La(t);n.contents=[i]}return n}function LE(t){let e;return t.contents?e=t:e={contents:[La(t)]},t.systemInstruction&&(e.systemInstruction=BC(t.systemInstruction)),e}function aF(t){return typeof t=="string"||Array.isArray(t)?{content:La(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ME=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],lF={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function uF(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new Ct(`First content should be with role 'user', got ${r}`);if(!CE.includes(r))throw new Ct(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(CE)}`);if(!Array.isArray(i))throw new Ct("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new Ct("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of i)for(const u of ME)u in a&&(s[u]+=1);const o=lF[r];for(const a of ME)if(!o.includes(a)&&s[a]>0)throw new Ct(`Content with role '${r}' can't contain '${a}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const bE="SILENT_ERROR";class cF{constructor(e,n,r,i){this.model=n,this.params=r,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(uF(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var n,r,i,s,o,a;await this._sendPromise;const u=La(e),c={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(s=this.params)===null||s===void 0?void 0:s.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,cachedContent:(a=this.params)===null||a===void 0?void 0:a.cachedContent,contents:[...this._history,u]};let d;return this._sendPromise=this._sendPromise.then(()=>UC(this._apiKey,this.model,c,this.requestOptions)).then(f=>{var m;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(u);const y=Object.assign({parts:[],role:"model"},(m=f.response.candidates)===null||m===void 0?void 0:m[0].content);this._history.push(y)}else{const y=lr(f.response);y&&console.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}d=f}),await this._sendPromise,d}async sendMessageStream(e){var n,r,i,s,o,a;await this._sendPromise;const u=La(e),c={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(s=this.params)===null||s===void 0?void 0:s.toolConfig,systemInstruction:(o=this.params)===null||o===void 0?void 0:o.systemInstruction,cachedContent:(a=this.params)===null||a===void 0?void 0:a.cachedContent,contents:[...this._history,u]},d=FC(this._apiKey,this.model,c,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>d).catch(f=>{throw new Error(bE)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(u);const m=Object.assign({},f.candidates[0].content);m.role||(m.role="model"),this._history.push(m)}else{const m=lr(f);m&&console.warn(`sendMessageStream() was unsuccessful. ${m}. Inspect response object for details.`)}}).catch(f=>{f.message!==bE&&console.error(f)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function hF(t,e,n,r){return(await nl(e,Ri.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function dF(t,e,n,r){return(await nl(e,Ri.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function fF(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await nl(e,Ri.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class VE{constructor(e,n,r){this.apiKey=e,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=BC(n.systemInstruction),this.cachedContent=n.cachedContent,this.requestOptions=r||{}}async generateContent(e){var n;const r=LE(e);return UC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},r),this.requestOptions)}async generateContentStream(e){var n;const r=LE(e);return FC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},r),this.requestOptions)}startChat(e){var n;return new cF(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this.requestOptions)}async countTokens(e){const n=oF(e,this.model);return hF(this.apiKey,this.model,n,this.requestOptions)}async embedContent(e){const n=aF(e);return dF(this.apiKey,this.model,n,this.requestOptions)}async batchEmbedContents(e){return fF(this.apiKey,this.model,e,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class pF{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new Ct("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new VE(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n){if(!e.name)throw new ci("Cached content must contain a `name` field.");if(!e.model)throw new ci("Cached content must contain a `model` field.");const r={model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e};return new VE(this.apiKey,r,n)}}function mF(t){const e=hm(ai),n=Um(ai),r=b2(ai);let i;const s=R2(r,"Prompts");P2(s,z=>{i=z.val().bioConditions});const o=qp();let a;$.useEffect(()=>{am(e,z=>{z?a=z.uid:o("/")})});let[u,c]=$.useState(""),[d,f]=$.useState(""),[m,y]=$.useState(""),[R,P]=$.useState(""),[O,T]=$.useState(""),[v,C]=$.useState(""),[D,F]=$.useState("");const U=z=>c(z.target.value),w=z=>f(z.target.value),_=z=>y(z.target.value),E=z=>P(z.target.value),I=z=>T(z.target.value),A=z=>C(z.target.value),k="AIzaSyAba0MMGHatote56-vfiY7_Jxd57BXpx-4",It=new pF(k).getGenerativeModel({model:"gemini-1.5-flash",systemInstruction:`${i}`}),In={temperature:.75,topP:.95,topK:64,maxOutputTokens:65,responseMimeType:"text/plain"};async function $r(z){const ve=await It.startChat({generationConfig:In}).sendMessage(z);F(ve.response.text())}const Qt=()=>{$r(v),console.log("Profile data");const z=Vm(n,"user",`${a}`);try{TM(z,{fullName:`${u}`,profilePicture:"url_to_profile_picture",contactInformation:{email:"john.doe@example.com",phoneNumber:"123-456-7890",address:{city:"New York"}},profileInfo:{bio:`${D}`,experience:[{title:"Senior Software Engineer",company:"Tech Solutions Inc.",description:"Led a team of developers in building scalable web applications..."},{title:"Software Engineer"}],education:[{degree:"Bachelor of Science in Computer Science"}],certifications:[{name:"AWS Certified Solutions Architect - Associate"}]}})}catch{console.log(error)}},j=()=>{lm(e).then(()=>{console.log("Signout successfull")}).catch(z=>{console.log(z),console.log(z)})};return ee.jsxs(ee.Fragment,{children:[ee.jsxs("form",{className:"form",children:[ee.jsx("input",{type:"text",onChange:U,placeholder:"Name"}),ee.jsx("input",{type:"text",onChange:w,placeholder:"Age"}),ee.jsx("input",{type:"date",onChange:_,placeholder:"DOB"}),ee.jsx("input",{type:"text",onChange:E,placeholder:"Experience"}),ee.jsx("input",{type:"text",onChange:A,placeholder:"Skill"}),ee.jsxs("div",{children:[ee.jsx("input",{type:"radio",name:"userrole",value:"Recruiter",id:"recruiter",onClick:I}),ee.jsx("label",{className:"form-label",htmlFor:"recruiter",children:"Recruiter"}),ee.jsx("input",{type:"radio",name:"userrole",value:"Seeker",id:"seeker",onClick:I}),ee.jsx("label",{htmlFor:"seeker",children:"Seeker"})]})]}),ee.jsx("button",{onClick:Qt,children:"Submit"}),ee.jsx("button",{onClick:j,children:"Sign Out"})]})}function gF(){const t=qp(),e=Um(ai),n=hm(ai);$.useEffect(()=>{am(n,i=>{i||t("/");async function s(){const o=Vm(e,"user",`${i.uid}`);try{const a=await TS(o);if(a.exists()){console.log(a.data());let u=a.data().bio,c=document.getElementById("bio");c.innerText=`${u}`}}catch(a){console.log(a)}}s()})},[n]);const r=()=>{lm(n).then(()=>{t("/")}).catch(i=>{console.log(i),console.log("No user")})};return ee.jsxs(ee.Fragment,{children:[ee.jsx("h1",{children:"Welcome back"}),ee.jsx("button",{id:"signout",onClick:r,children:" Sign Out"}),ee.jsx("p",{id:"bio",children:" "})]})}function _F(){return ee.jsx("div",{children:ee.jsx(FP,{children:ee.jsxs(MP,{children:[ee.jsx(Po,{path:"/",element:ee.jsx(CM,{})}),ee.jsx(Po,{path:"/test",element:ee.jsx(RM,{})}),ee.jsx(Po,{path:"/profilecreation",element:ee.jsx(mF,{})}),ee.jsx(Po,{path:"/homepage",element:ee.jsx(gF,{})})]})})})}vd.createRoot(document.getElementById("root")).render(ee.jsx(KE.StrictMode,{children:ee.jsx(_F,{})}));

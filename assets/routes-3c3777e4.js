import{r as u,a as te}from"./index-8db94870.js";/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));const D="popstate";function ne(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:i,hash:c}=r.location;return B("",{pathname:o,search:i,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:U(a)}return re(t,n,null,e)}function g(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ae(){return Math.random().toString(36).substr(2,8)}function K(e,t){return{usr:e.state,key:e.key,idx:t}}function B(e,t,n,r){return n===void 0&&(n=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?L(t):t,{state:n,key:t&&t.key||r||ae()})}function U(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function L(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function re(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,c=b.Pop,s=null,l=f();l==null&&(l=0,i.replaceState(S({},i.state,{idx:l}),""));function f(){return(i.state||{idx:null}).idx}function p(){c=b.Pop;let h=f(),m=h==null?null:h-l;l=h,s&&s({action:c,location:v.location,delta:m})}function y(h,m){c=b.Push;let d=B(v.location,h,m);n&&n(d,h),l=f()+1;let C=K(d,l),P=v.createHref(d);try{i.pushState(C,"",P)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(P)}o&&s&&s({action:c,location:v.location,delta:1})}function R(h,m){c=b.Replace;let d=B(v.location,h,m);n&&n(d,h),l=f();let C=K(d,l),P=v.createHref(d);i.replaceState(C,"",P),o&&s&&s({action:c,location:v.location,delta:0})}function x(h){let m=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof h=="string"?h:U(h);return g(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return c},get location(){return e(a,i)},listen(h){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(D,p),s=h,()=>{a.removeEventListener(D,p),s=null}},createHref(h){return t(a,h)},createURL:x,encodeLocation(h){let m=x(h);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:y,replace:R,go(h){return i.go(h)}};return v}var $;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($||($={}));function V(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ie(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?L(e):e;return{pathname:n?n.startsWith("/")?n:le(n,t):t,search:oe(r),hash:se(a)}}function le(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function j(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function J(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=L(e):(a=S({},e),g(!a.pathname||!a.pathname.includes("?"),j("?","pathname","search",a)),g(!a.pathname||!a.pathname.includes("#"),j("#","pathname","hash",a)),g(!a.search||!a.search.includes("#"),j("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,c;if(r||i==null)c=n;else{let p=t.length-1;if(i.startsWith("..")){let y=i.split("/");for(;y[0]==="..";)y.shift(),p-=1;a.pathname=y.join("/")}c=p>=0?t[p]:"/"}let s=ie(a,c),l=i&&i!=="/"&&i.endsWith("/"),f=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(l||f)&&(s.pathname+="/"),s}const q=e=>e.join("/").replace(/\/\/+/g,"/"),oe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,se=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,X=["post","put","patch","delete"];new Set(X);const ue=["get",...X];new Set(ue);/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}const ce="startTransition";var z=te[ce];const Y=u.createContext(null),w=u.createContext(null),A=u.createContext(null),E=u.createContext({outlet:null,matches:[],isDataRoute:!1});function fe(e,t){let{relative:n}=t===void 0?{}:t;O()||g(!1);let{basename:r,navigator:a}=u.useContext(w),{hash:o,pathname:i,search:c}=ee(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:q([r,i])),a.createHref({pathname:s,search:c,hash:o})}function O(){return u.useContext(A)!=null}function N(){return O()||g(!1),u.useContext(A).location}function Q(e){u.useContext(w).static||u.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=u.useContext(E);return e?ve():he()}function he(){O()||g(!1);let e=u.useContext(Y),{basename:t,navigator:n}=u.useContext(w),{matches:r}=u.useContext(E),{pathname:a}=N(),o=JSON.stringify(_(r).map(s=>s.pathnameBase)),i=u.useRef(!1);return Q(()=>{i.current=!0}),u.useCallback(function(s,l){if(l===void 0&&(l={}),!i.current)return;if(typeof s=="number"){n.go(s);return}let f=J(s,JSON.parse(o),a,l.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:q([t,f.pathname])),(l.replace?n.replace:n.push)(f,l.state,l)},[t,n,o,a,e])}function ee(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=u.useContext(E),{pathname:a}=N(),o=JSON.stringify(_(r).map(i=>i.pathnameBase));return u.useMemo(()=>J(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}var k;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(k||(k={}));var M;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(M||(M={}));function de(e){let t=u.useContext(Y);return t||g(!1),t}function pe(e){let t=u.useContext(E);return t||g(!1),t}function me(e){let t=pe(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function ve(){let{router:e}=de(k.UseNavigateStable),t=me(M.UseNavigateStable),n=u.useRef(!1);return Q(()=>{n.current=!0}),u.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,T({fromRouteId:t},o)))},[e,t])}function Ee(e){let{to:t,replace:n,state:r,relative:a}=e;O()||g(!1);let{matches:o}=u.useContext(E),{pathname:i}=N(),c=Z(),s=J(t,_(o).map(f=>f.pathnameBase),i,a==="path"),l=JSON.stringify(s);return u.useEffect(()=>c(JSON.parse(l),{replace:n,state:r,relative:a}),[c,l,a,n,r]),null}function ge(e){let{basename:t="/",children:n=null,location:r,navigationType:a=b.Pop,navigator:o,static:i=!1}=e;O()&&g(!1);let c=t.replace(/^\/*/,"/"),s=u.useMemo(()=>({basename:c,navigator:o,static:i}),[c,o,i]);typeof r=="string"&&(r=L(r));let{pathname:l="/",search:f="",hash:p="",state:y=null,key:R="default"}=r,x=u.useMemo(()=>{let v=V(l,c);return v==null?null:{location:{pathname:v,search:f,hash:p,state:y,key:R},navigationType:a}},[c,l,f,p,y,R,a]);return x==null?null:u.createElement(w.Provider,{value:s},u.createElement(A.Provider,{children:n,value:x}))}var F;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(F||(F={}));new Promise(()=>{});/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function ye(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function xe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ce(e,t){return e.button===0&&(!t||t==="_self")&&!xe(e)}const Re=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Oe(e){let{basename:t,children:n,future:r,window:a}=e,o=u.useRef();o.current==null&&(o.current=ne({window:a,v5Compat:!0}));let i=o.current,[c,s]=u.useState({action:i.action,location:i.location}),{v7_startTransition:l}=r||{},f=u.useCallback(p=>{l&&z?z(()=>s(p)):s(p)},[s,l]);return u.useLayoutEffect(()=>i.listen(f),[i,f]),u.createElement(ge,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:i})}const Pe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=u.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:i,state:c,target:s,to:l,preventScrollReset:f}=t,p=ye(t,Re),{basename:y}=u.useContext(w),R,x=!1;if(typeof l=="string"&&be.test(l)&&(R=l,Pe))try{let d=new URL(window.location.href),C=l.startsWith("//")?new URL(d.protocol+l):new URL(l),P=V(C.pathname,y);C.origin===d.origin&&P!=null?l=P+C.search+C.hash:x=!0}catch{}let v=fe(l,{relative:a}),h=Se(l,{replace:i,state:c,target:s,preventScrollReset:f,relative:a});function m(d){r&&r(d),d.defaultPrevented||h(d)}return u.createElement("a",W({},p,{href:R||v,onClick:x||o?r:m,ref:n,target:s}))});var G;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(G||(G={}));var H;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(H||(H={}));function Se(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i}=t===void 0?{}:t,c=Z(),s=N(),l=ee(e,{relative:i});return u.useCallback(f=>{if(Ce(f,n)){f.preventDefault();let p=r!==void 0?r:U(s)===U(l);c(e,{replace:p,state:a,preventScrollReset:o,relative:i})}},[s,c,l,r,a,n,e,o,i])}const Le={BASE:"/",REGISTER:"/register",PASSWORD_RECOVERY:"password_recovery",HOME:"/home",NOTES:"/home/notes",TODO_LIST:"/home/to-do_list"};export{Oe as B,Ue as L,Ee as N,Le as R,N as a,Z as u};
//# sourceMappingURL=routes-3c3777e4.js.map

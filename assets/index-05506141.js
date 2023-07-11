import{_ as oe}from"./extends-98964cd2.js";import{r as $}from"./index-8db94870.js";import{r as ht}from"./index-8ce4a492.js";import{$ as ge}from"./index-37144071.js";import{a as Ve}from"./index-ba8d3fc7.js";import{a as gt,d as wt,$ as Oe}from"./index-83c8a788.js";import{$ as yt}from"./index-266ebce9.js";function U(e){return e.split("-")[1]}function Ee(e){return e==="y"?"height":"width"}function B(e){return e.split("-")[0]}function q(e){return["top","bottom"].includes(B(e))?"x":"y"}function _e(e,t,n){let{reference:o,floating:i}=e;const r=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,l=q(t),c=Ee(l),s=o[c]/2-i[c]/2,m=l==="x";let f;switch(B(t)){case"top":f={x:r,y:o.y-i.height};break;case"bottom":f={x:r,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:a};break;case"left":f={x:o.x-i.width,y:a};break;default:f={x:o.x,y:o.y}}switch(U(t)){case"start":f[l]-=s*(n&&m?-1:1);break;case"end":f[l]+=s*(n&&m?-1:1)}return f}const xt=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:a}=n,l=r.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let s=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:m,y:f}=_e(s,o,c),h=o,d={},p=0;for(let u=0;u<l.length;u++){const{name:g,fn:v}=l[u],{x:w,y,data:x,reset:b}=await v({x:m,y:f,initialPlacement:o,placement:h,strategy:i,middlewareData:d,rects:s,platform:a,elements:{reference:e,floating:t}});m=w??m,f=y??f,d={...d,[g]:{...d[g],...x}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(s=b.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):b.rects),{x:m,y:f}=_e(s,h,c)),u=-1)}return{x:m,y:f,placement:h,strategy:i,middlewareData:d}};function V(e,t){return typeof e=="function"?e(t):e}function Ye(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function de(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function ee(e,t){var n;t===void 0&&(t={});const{x:o,y:i,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:s="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:h=!1,padding:d=0}=V(t,e),p=Ye(d),u=l[h?f==="floating"?"reference":"floating":f],g=de(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(u)))==null||n?u:u.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:s,rootBoundary:m,strategy:c})),v=f==="floating"?{...a.floating,x:o,y:i}:a.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),y=await(r.isElement==null?void 0:r.isElement(w))&&await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1},x=de(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:c}):v);return{top:(g.top-x.top+p.top)/y.y,bottom:(x.bottom-g.bottom+p.bottom)/y.y,left:(g.left-x.left+p.left)/y.x,right:(x.right-g.right+p.right)/y.x}}const te=Math.min,I=Math.max;function Re(e,t,n){return I(e,te(t,n))}const Le=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:i,rects:r,platform:a,elements:l}=t,{element:c,padding:s=0}=V(e,t)||{};if(c==null)return{};const m=Ye(s),f={x:n,y:o},h=q(i),d=Ee(h),p=await a.getDimensions(c),u=h==="y",g=u?"top":"left",v=u?"bottom":"right",w=u?"clientHeight":"clientWidth",y=r.reference[d]+r.reference[h]-f[h]-r.floating[d],x=f[h]-r.reference[h],b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let R=b?b[w]:0;R&&await(a.isElement==null?void 0:a.isElement(b))||(R=l.floating[w]||r.floating[d]);const S=y/2-x/2,C=R/2-p[d]/2-1,L=te(m[g],C),H=te(m[v],C),A=L,O=R-p[d]-H,E=R/2-p[d]/2+S,D=Re(A,E,O),_=U(i)!=null&&E!=D&&r.reference[d]/2-(E<A?L:H)-p[d]/2<0?E<A?A-E:O-E:0;return{[h]:f[h]-_,data:{[h]:D,centerOffset:E-D+_}}}}),Ie=["top","right","bottom","left"];Ie.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const vt={left:"right",right:"left",bottom:"top",top:"bottom"};function ue(e){return e.replace(/left|right|bottom|top/g,t=>vt[t])}function $t(e,t,n){n===void 0&&(n=!1);const o=U(e),i=q(e),r=Ee(i);let a=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=ue(a)),{main:a,cross:ue(a)}}const bt={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,t=>bt[t])}const Rt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:s=!0,crossAxis:m=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:p=!0,...u}=V(e,t),g=B(o),v=B(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),y=f||(v||!p?[ue(a)]:function(A){const O=ue(A);return[be(A),O,be(O)]}(a));f||d==="none"||y.push(...function(A,O,E,D){const _=U(A);let P=function(k,T,xe){const Z=["left","right"],re=["right","left"],ie=["top","bottom"],ve=["bottom","top"];switch(k){case"top":case"bottom":return xe?T?re:Z:T?Z:re;case"left":case"right":return T?ie:ve;default:return[]}}(B(A),E==="start",D);return _&&(P=P.map(k=>k+"-"+_),O&&(P=P.concat(P.map(be)))),P}(a,p,d,w));const x=[a,...y],b=await ee(t,u),R=[];let S=((n=i.flip)==null?void 0:n.overflows)||[];if(s&&R.push(b[g]),m){const{main:A,cross:O}=$t(o,r,w);R.push(b[A],b[O])}if(S=[...S,{placement:o,overflows:R}],!R.every(A=>A<=0)){var C,L;const A=(((C=i.flip)==null?void 0:C.index)||0)+1,O=x[A];if(O)return{data:{index:A,overflows:S},reset:{placement:O}};let E=(L=S.filter(D=>D.overflows[0]<=0).sort((D,_)=>D.overflows[1]-_.overflows[1])[0])==null?void 0:L.placement;if(!E)switch(h){case"bestFit":{var H;const D=(H=S.map(_=>[_.placement,_.overflows.filter(P=>P>0).reduce((P,k)=>P+k,0)]).sort((_,P)=>_[1]-P[1])[0])==null?void 0:H[0];D&&(E=D);break}case"initialPlacement":E=a}if(o!==E)return{reset:{placement:E}}}return{}}}};function Te(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function He(e){return Ie.some(t=>e[t]>=0)}const Pt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...i}=V(e,t);switch(o){case"referenceHidden":{const r=Te(await ee(t,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:He(r)}}}case"escaped":{const r=Te(await ee(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:r,escaped:He(r)}}}default:return{}}}}},At=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,i=await async function(r,a){const{placement:l,platform:c,elements:s}=r,m=await(c.isRTL==null?void 0:c.isRTL(s.floating)),f=B(l),h=U(l),d=q(l)==="x",p=["left","top"].includes(f)?-1:1,u=m&&d?-1:1,g=V(a,r);let{mainAxis:v,crossAxis:w,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return h&&typeof y=="number"&&(w=h==="end"?-1*y:y),d?{x:w*u,y:v*p}:{x:v*p,y:w*u}}(t,e);return{x:n+i.x,y:o+i.y,data:i}}}};function Xe(e){return e==="x"?"y":"x"}const Et=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:g=>{let{x:v,y:w}=g;return{x:v,y:w}}},...c}=V(e,t),s={x:n,y:o},m=await ee(t,c),f=q(B(i)),h=Xe(f);let d=s[f],p=s[h];if(r){const g=f==="y"?"bottom":"right";d=Re(d+m[f==="y"?"top":"left"],d,d-m[g])}if(a){const g=h==="y"?"bottom":"right";p=Re(p+m[h==="y"?"top":"left"],p,p-m[g])}const u=l.fn({...t,[f]:d,[h]:p});return{...u,data:{x:u.x-n,y:u.y-o}}}}},St=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:i,rects:r,middlewareData:a}=t,{offset:l=0,mainAxis:c=!0,crossAxis:s=!0}=V(e,t),m={x:n,y:o},f=q(i),h=Xe(f);let d=m[f],p=m[h];const u=V(l,t),g=typeof u=="number"?{mainAxis:u,crossAxis:0}:{mainAxis:0,crossAxis:0,...u};if(c){const y=f==="y"?"height":"width",x=r.reference[f]-r.floating[y]+g.mainAxis,b=r.reference[f]+r.reference[y]-g.mainAxis;d<x?d=x:d>b&&(d=b)}if(s){var v,w;const y=f==="y"?"width":"height",x=["top","left"].includes(B(i)),b=r.reference[h]-r.floating[y]+(x&&((v=a.offset)==null?void 0:v[h])||0)+(x?0:g.crossAxis),R=r.reference[h]+r.reference[y]+(x?0:((w=a.offset)==null?void 0:w[h])||0)-(x?g.crossAxis:0);p<b?p=b:p>R&&(p=R)}return{[f]:d,[h]:p}}}},Dt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:i,elements:r}=t,{apply:a=()=>{},...l}=V(e,t),c=await ee(t,l),s=B(n),m=U(n),f=q(n)==="x",{width:h,height:d}=o.floating;let p,u;s==="top"||s==="bottom"?(p=s,u=m===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(u=s,p=m==="end"?"top":"bottom");const g=d-c[p],v=h-c[u],w=!t.middlewareData.shift;let y=g,x=v;if(f){const R=h-c.left-c.right;x=m||w?te(v,R):R}else{const R=d-c.top-c.bottom;y=m||w?te(g,R):R}if(w&&!m){const R=I(c.left,0),S=I(c.right,0),C=I(c.top,0),L=I(c.bottom,0);f?x=h-2*(R!==0||S!==0?R+S:I(c.left,c.right)):y=d-2*(C!==0||L!==0?C+L:I(c.top,c.bottom))}await a({...t,availableWidth:x,availableHeight:y});const b=await i.getDimensions(r.floating);return h!==b.width||d!==b.height?{reset:{rects:!0}}:{}}}};function M(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function W(e){return M(e).getComputedStyle(e)}function je(e){return e instanceof M(e).Node}function Y(e){return je(e)?(e.nodeName||"").toLowerCase():"#document"}function F(e){return e instanceof M(e).HTMLElement}function N(e){return e instanceof M(e).Element}function ke(e){return typeof ShadowRoot<"u"&&(e instanceof M(e).ShadowRoot||e instanceof ShadowRoot)}function ne(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function Ct(e){return["table","td","th"].includes(Y(e))}function Pe(e){const t=Se(),n=W(e);return n.transform!=="none"||n.perspective!=="none"||!t&&!!n.backdropFilter&&n.backdropFilter!=="none"||!t&&!!n.filter&&n.filter!=="none"||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Se(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function we(e){return["html","body","#document"].includes(Y(e))}const Ae=Math.min,J=Math.max,pe=Math.round,le=Math.floor,X=e=>({x:e,y:e});function qe(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=F(e),r=i?e.offsetWidth:n,a=i?e.offsetHeight:o,l=pe(n)!==r||pe(o)!==a;return l&&(n=r,o=a),{width:n,height:o,$:l}}function De(e){return N(e)?e:e.contextElement}function K(e){const t=De(e);if(!F(t))return X(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:r}=qe(t);let a=(r?pe(n.width):n.width)/o,l=(r?pe(n.height):n.height)/i;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Me=X(0);function Ze(e,t,n){var o,i;if(t===void 0&&(t=!0),!Se())return Me;const r=e?M(e):window;return!n||t&&n!==r?Me:{x:((o=r.visualViewport)==null?void 0:o.offsetLeft)||0,y:((i=r.visualViewport)==null?void 0:i.offsetTop)||0}}function j(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),r=De(e);let a=X(1);t&&(o?N(o)&&(a=K(o)):a=K(e));const l=Ze(r,n,o);let c=(i.left+l.x)/a.x,s=(i.top+l.y)/a.y,m=i.width/a.x,f=i.height/a.y;if(r){const h=M(r),d=o&&N(o)?M(o):o;let p=h.frameElement;for(;p&&o&&d!==h;){const u=K(p),g=p.getBoundingClientRect(),v=getComputedStyle(p),w=g.left+(p.clientLeft+parseFloat(v.paddingLeft))*u.x,y=g.top+(p.clientTop+parseFloat(v.paddingTop))*u.y;c*=u.x,s*=u.y,m*=u.x,f*=u.y,c+=w,s+=y,p=M(p).frameElement}}return de({width:m,height:f,x:c,y:s})}function z(e){return((je(e)?e.ownerDocument:e.document)||window.document).documentElement}function ye(e){return N(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ge(e){return j(z(e)).left+ye(e).scrollLeft}function Q(e){if(Y(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ke(e)&&e.host||z(e);return ke(t)?t.host:t}function Je(e){const t=Q(e);return we(t)?e.ownerDocument?e.ownerDocument.body:e.body:F(t)&&ne(t)?t:Je(t)}function me(e,t){var n;t===void 0&&(t=[]);const o=Je(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),r=M(o);return i?t.concat(r,r.visualViewport||[],ne(o)?o:[]):t.concat(o,me(o))}function We(e,t,n){let o;if(t==="viewport")o=function(i,r){const a=M(i),l=z(i),c=a.visualViewport;let s=l.clientWidth,m=l.clientHeight,f=0,h=0;if(c){s=c.width,m=c.height;const d=Se();(!d||d&&r==="fixed")&&(f=c.offsetLeft,h=c.offsetTop)}return{width:s,height:m,x:f,y:h}}(e,n);else if(t==="document")o=function(i){const r=z(i),a=ye(i),l=i.ownerDocument.body,c=J(r.scrollWidth,r.clientWidth,l.scrollWidth,l.clientWidth),s=J(r.scrollHeight,r.clientHeight,l.scrollHeight,l.clientHeight);let m=-a.scrollLeft+Ge(i);const f=-a.scrollTop;return W(l).direction==="rtl"&&(m+=J(r.clientWidth,l.clientWidth)-c),{width:c,height:s,x:m,y:f}}(z(e));else if(N(t))o=function(i,r){const a=j(i,!0,r==="fixed"),l=a.top+i.clientTop,c=a.left+i.clientLeft,s=F(i)?K(i):X(1);return{width:i.clientWidth*s.x,height:i.clientHeight*s.y,x:c*s.x,y:l*s.y}}(t,n);else{const i=Ze(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return de(o)}function Ke(e,t){const n=Q(e);return!(n===t||!N(n)||we(n))&&(W(n).position==="fixed"||Ke(n,t))}function Fe(e,t){return F(e)&&W(e).position!=="fixed"?t?t(e):e.offsetParent:null}function Be(e,t){const n=M(e);if(!F(e))return n;let o=Fe(e,t);for(;o&&Ct(o)&&W(o).position==="static";)o=Fe(o,t);return o&&(Y(o)==="html"||Y(o)==="body"&&W(o).position==="static"&&!Pe(o))?n:o||function(i){let r=Q(i);for(;F(r)&&!we(r);){if(Pe(r))return r;r=Q(r)}return null}(e)||n}function Ot(e,t,n){const o=F(t),i=z(t),r=n==="fixed",a=j(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=X(0);if(o||!o&&!r)if((Y(t)!=="body"||ne(i))&&(l=ye(t)),F(t)){const s=j(t,!0,r,t);c.x=s.x+t.clientLeft,c.y=s.y+t.clientTop}else i&&(c.x=Ge(i));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}const _t={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const r=n==="clippingAncestors"?function(s,m){const f=m.get(s);if(f)return f;let h=me(s).filter(g=>N(g)&&Y(g)!=="body"),d=null;const p=W(s).position==="fixed";let u=p?Q(s):s;for(;N(u)&&!we(u);){const g=W(u),v=Pe(u);v||g.position!=="fixed"||(d=null),(p?!v&&!d:!v&&g.position==="static"&&d&&["absolute","fixed"].includes(d.position)||ne(u)&&!v&&Ke(s,u))?h=h.filter(w=>w!==u):d=g,u=Q(u)}return m.set(s,h),h}(t,this._c):[].concat(n),a=[...r,o],l=a[0],c=a.reduce((s,m)=>{const f=We(t,m,i);return s.top=J(f.top,s.top),s.right=Ae(f.right,s.right),s.bottom=Ae(f.bottom,s.bottom),s.left=J(f.left,s.left),s},We(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const i=F(n),r=z(n);if(n===r)return t;let a={scrollLeft:0,scrollTop:0},l=X(1);const c=X(0);if((i||!i&&o!=="fixed")&&((Y(n)!=="body"||ne(r))&&(a=ye(n)),F(n))){const s=j(n);l=K(n),c.x=s.x+n.clientLeft,c.y=s.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+c.x,y:t.y*l.y-a.scrollTop*l.y+c.y}},isElement:N,getDimensions:function(e){return qe(e)},getOffsetParent:Be,getDocumentElement:z,getScale:K,async getElementRects(e){let{reference:t,floating:n,strategy:o}=e;const i=this.getOffsetParent||Be,r=this.getDimensions;return{reference:Ot(t,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>W(e).direction==="rtl"};function Lt(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:a=!0,layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,s=De(e),m=i||r?[...s?me(s):[],...me(t)]:[];m.forEach(u=>{i&&u.addEventListener("scroll",n,{passive:!0}),r&&u.addEventListener("resize",n)});const f=s&&l?function(u,g){let v,w=null;const y=z(u);function x(){clearTimeout(v),w&&w.disconnect(),w=null}return function b(R,S){R===void 0&&(R=!1),S===void 0&&(S=1),x();const{left:C,top:L,width:H,height:A}=u.getBoundingClientRect();if(R||g(),!H||!A)return;const O=le(L),E=le(y.clientWidth-(C+H)),D=le(y.clientHeight-(L+A)),_=le(C);let P=!0;w=new IntersectionObserver(k=>{const T=k[0].intersectionRatio;if(T!==S){if(!P)return b();T?b(!1,T):v=setTimeout(()=>{b(!1,1e-7)},100)}P=!1},{rootMargin:-O+"px "+-E+"px "+-D+"px "+-_+"px",threshold:J(0,Ae(1,S))||1}),w.observe(u)}(!0),x}(s,n):null;let h,d=null;a&&(d=new ResizeObserver(n),s&&!c&&d.observe(s),d.observe(t));let p=c?j(e):null;return c&&function u(){const g=j(e);!p||g.x===p.x&&g.y===p.y&&g.width===p.width&&g.height===p.height||n(),p=g,h=requestAnimationFrame(u)}(),n(),()=>{m.forEach(u=>{i&&u.removeEventListener("scroll",n),r&&u.removeEventListener("resize",n)}),f&&f(),d&&d.disconnect(),d=null,c&&cancelAnimationFrame(h)}}const Tt=(e,t,n)=>{const o=new Map,i={platform:_t,...n},r={...i.platform,_c:o};return xt(e,t,{...i,platform:r})},Ht=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:i}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Le({element:o.current,padding:i}).fn(n):{}:o?Le({element:o,padding:i}).fn(n):{}}}};var fe=typeof document<"u"?$.useLayoutEffect:$.useEffect;function he(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!he(e[o],t[o]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&e.$$typeof)&&!he(e[r],t[r]))return!1}return!0}return e!==e&&t!==t}function Qe(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ne(e,t){const n=Qe(e);return Math.round(t*n)/n}function ze(e){const t=$.useRef(e);return fe(()=>{t.current=e}),t}function kt(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:a}={},transform:l=!0,whileElementsMounted:c,open:s}=e,[m,f]=$.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,d]=$.useState(o);he(h,o)||d(o);const[p,u]=$.useState(null),[g,v]=$.useState(null),w=$.useCallback(P=>{P!=R.current&&(R.current=P,u(P))},[u]),y=$.useCallback(P=>{P!==S.current&&(S.current=P,v(P))},[v]),x=r||p,b=a||g,R=$.useRef(null),S=$.useRef(null),C=$.useRef(m),L=ze(c),H=ze(i),A=$.useCallback(()=>{if(!R.current||!S.current)return;const P={placement:t,strategy:n,middleware:h};H.current&&(P.platform=H.current),Tt(R.current,S.current,P).then(k=>{const T={...k,isPositioned:!0};O.current&&!he(C.current,T)&&(C.current=T,ht.flushSync(()=>{f(T)}))})},[h,t,n,H]);fe(()=>{s===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,f(P=>({...P,isPositioned:!1})))},[s]);const O=$.useRef(!1);fe(()=>(O.current=!0,()=>{O.current=!1}),[]),fe(()=>{if(x&&(R.current=x),b&&(S.current=b),x&&b){if(L.current)return L.current(x,b,A);A()}},[x,b,A,L]);const E=$.useMemo(()=>({reference:R,floating:S,setReference:w,setFloating:y}),[w,y]),D=$.useMemo(()=>({reference:x,floating:b}),[x,b]),_=$.useMemo(()=>{const P={position:n,left:0,top:0};if(!D.floating)return P;const k=Ne(D.floating,m.x),T=Ne(D.floating,m.y);return l?{...P,transform:"translate("+k+"px, "+T+"px)",...Qe(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:k,top:T}},[n,l,D.floating,m.x,m.y]);return $.useMemo(()=>({...m,update:A,refs:E,elements:D,floatingStyles:_}),[m,A,E,D,_])}const Mt=$.forwardRef((e,t)=>{const{children:n,width:o=10,height:i=5,...r}=e;return $.createElement(ge.svg,oe({},r,{ref:t,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:$.createElement("polygon",{points:"0,0 30,0 15,10"}))}),Wt=Mt,Ue="Popper",[et,rn]=gt(Ue),[Ft,tt]=et(Ue),Bt=e=>{const{__scopePopper:t,children:n}=e,[o,i]=$.useState(null);return $.createElement(Ft,{scope:t,anchor:o,onAnchorChange:i},n)},Nt="PopperAnchor",zt=$.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...i}=e,r=tt(Nt,n),a=$.useRef(null),l=Ve(t,a);return $.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||a.current)}),o?null:$.createElement(ge.div,oe({},i,{ref:l}))}),nt="PopperContent",[Vt,Yt]=et(nt),It=$.forwardRef((e,t)=>{var n,o,i,r,a,l,c,s;const{__scopePopper:m,side:f="bottom",sideOffset:h=0,align:d="center",alignOffset:p=0,arrowPadding:u=0,collisionBoundary:g=[],collisionPadding:v=0,sticky:w="partial",hideWhenDetached:y=!1,avoidCollisions:x=!0,onPlaced:b,...R}=e,S=tt(nt,m),[C,L]=$.useState(null),H=Ve(t,$e=>L($e)),[A,O]=$.useState(null),E=yt(A),D=(n=E==null?void 0:E.width)!==null&&n!==void 0?n:0,_=(o=E==null?void 0:E.height)!==null&&o!==void 0?o:0,P=f+(d!=="center"?"-"+d:""),k=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},T=Array.isArray(g)?g:[g],xe=T.length>0,Z={padding:k,boundary:T.filter(Zt),altBoundary:xe},{refs:re,floatingStyles:ie,placement:ve,isPositioned:ae,middlewareData:G}=kt({strategy:"fixed",placement:P,whileElementsMounted:Lt,elements:{reference:S.anchor},middleware:[At({mainAxis:h+_,alignmentAxis:p}),x&&Et({mainAxis:!0,crossAxis:!1,limiter:w==="partial"?St():void 0,...Z}),x&&Rt({...Z}),Dt({...Z,apply:({elements:$e,rects:ft,availableWidth:dt,availableHeight:ut})=>{const{width:pt,height:mt}=ft.reference,se=$e.floating.style;se.setProperty("--radix-popper-available-width",`${dt}px`),se.setProperty("--radix-popper-available-height",`${ut}px`),se.setProperty("--radix-popper-anchor-width",`${pt}px`),se.setProperty("--radix-popper-anchor-height",`${mt}px`)}}),A&&Ht({element:A,padding:u}),Gt({arrowWidth:D,arrowHeight:_}),y&&Pt({strategy:"referenceHidden"})]}),[Ce,rt]=ot(ve),ce=wt(b);Oe(()=>{ae&&(ce==null||ce())},[ae,ce]);const it=(i=G.arrow)===null||i===void 0?void 0:i.x,at=(r=G.arrow)===null||r===void 0?void 0:r.y,ct=((a=G.arrow)===null||a===void 0?void 0:a.centerOffset)!==0,[st,lt]=$.useState();return Oe(()=>{C&&lt(window.getComputedStyle(C).zIndex)},[C]),$.createElement("div",{ref:re.setFloating,"data-radix-popper-content-wrapper":"",style:{...ie,transform:ae?ie.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:st,["--radix-popper-transform-origin"]:[(l=G.transformOrigin)===null||l===void 0?void 0:l.x,(c=G.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:e.dir},$.createElement(Vt,{scope:m,placedSide:Ce,onArrowChange:O,arrowX:it,arrowY:at,shouldHideArrow:ct},$.createElement(ge.div,oe({"data-side":Ce,"data-align":rt},R,{ref:H,style:{...R.style,animation:ae?void 0:"none",opacity:(s=G.hide)!==null&&s!==void 0&&s.referenceHidden?0:void 0}}))))}),Xt="PopperArrow",jt={top:"bottom",right:"left",bottom:"top",left:"right"},qt=$.forwardRef(function(t,n){const{__scopePopper:o,...i}=t,r=Yt(Xt,o),a=jt[r.placedSide];return $.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},$.createElement(Wt,oe({},i,{ref:n,style:{...i.style,display:"block"}})))});function Zt(e){return e!==null}const Gt=e=>({name:"transformOrigin",options:e,fn(t){var n,o,i,r,a;const{placement:l,rects:c,middlewareData:s}=t,f=((n=s.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=f?0:e.arrowWidth,d=f?0:e.arrowHeight,[p,u]=ot(l),g={start:"0%",center:"50%",end:"100%"}[u],v=((o=(i=s.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+h/2,w=((r=(a=s.arrow)===null||a===void 0?void 0:a.y)!==null&&r!==void 0?r:0)+d/2;let y="",x="";return p==="bottom"?(y=f?g:`${v}px`,x=`${-d}px`):p==="top"?(y=f?g:`${v}px`,x=`${c.floating.height+d}px`):p==="right"?(y=`${-d}px`,x=f?g:`${w}px`):p==="left"&&(y=`${c.floating.width+d}px`,x=f?g:`${w}px`),{data:{x:y,y:x}}}});function ot(e){const[t,n="center"]=e.split("-");return[t,n]}const an=Bt,cn=zt,sn=It,ln=qt,Jt=$.forwardRef((e,t)=>$.createElement(ge.span,oe({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),fn=Jt;export{rn as $,an as a,cn as b,Jt as c,sn as d,fn as e,ln as f};
//# sourceMappingURL=index-05506141.js.map

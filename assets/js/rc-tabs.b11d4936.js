import{f as H,g as Te,h as oe,e as G,c as T,d as ze,b as _e}from"./@babel_runtime.0b96ec9f.js";import{r as t,R as et}from"./react.017637b6.js";import{c as j}from"./classnames.96a48171.js";import{f as be,K as Z,d as Lt,B as At,h as tt}from"./rc-util.88348ebb.js";import{C as Bt}from"./rc-motion.8586b577.js";import{R as at}from"./rc-resize-observer.c02c0b35.js";import{E as Dt,M as Kt}from"./rc-menu.d9a789e6.js";import{D as zt}from"./rc-dropdown.04c040c7.js";const Re=t.exports.createContext(null);var dt=t.exports.forwardRef(function(e,a){var n=e.prefixCls,i=e.className,r=e.style,o=e.id,s=e.active,c=e.tabKey,d=e.children;return t.exports.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!s,style:r,className:j(n,s&&"".concat(n,"-active"),i),ref:a},d)}),$t=["key","forceRender","style","className"];function Wt(e){var a=e.id,n=e.activeKey,i=e.animated,r=e.tabPosition,o=e.destroyInactiveTabPane,s=t.exports.useContext(Re),c=s.prefixCls,d=s.tabs,b=i.tabPane,S="".concat(c,"-tabpane");return t.exports.createElement("div",{className:j("".concat(c,"-content-holder"))},t.exports.createElement("div",{className:j("".concat(c,"-content"),"".concat(c,"-content-").concat(r),H({},"".concat(c,"-content-animated"),b))},d.map(function(f){var x=f.key,I=f.forceRender,h=f.style,P=f.className,L=Te(f,$t),K=x===n;return t.exports.createElement(Bt,oe({key:x,visible:K,forceRender:I,removeOnLeave:!!o,leavedClassName:"".concat(S,"-hidden")},i.tabPaneMotion),function(M,N){var F=M.style,A=M.className;return t.exports.createElement(dt,oe({},L,{prefixCls:S,id:a,tabKey:x,animated:b,active:K,style:G(G({},h),F),className:j(P,A),ref:N}))})})))}function vt(e){var a=t.exports.useRef(),n=t.exports.useRef(!1);function i(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];n.current||(be.cancel(a.current),a.current=be(function(){e.apply(void 0,o)}))}return t.exports.useEffect(function(){return n.current=!1,function(){n.current=!0,be.cancel(a.current)}},[]),i}function Ot(e){var a=t.exports.useRef([]),n=t.exports.useState({}),i=T(n,2),r=i[1],o=t.exports.useRef(typeof e=="function"?e():e),s=vt(function(){var d=o.current;a.current.forEach(function(b){d=b(d)}),a.current=[],o.current=d,r({})});function c(d){a.current.push(d),s()}return[o.current,c]}function Vt(e,a){var n,i=e.prefixCls,r=e.id,o=e.active,s=e.tab,c=s.key,d=s.label,b=s.disabled,S=s.closeIcon,f=e.closable,x=e.renderWrapper,I=e.removeAriaLabel,h=e.editable,P=e.onClick,L=e.onRemove,K=e.onFocus,M=e.style,N="".concat(i,"-tab");t.exports.useEffect(function(){return L},[]);var F=h&&f!==!1&&!b;function A(y){b||P(y)}function W(y){y.preventDefault(),y.stopPropagation(),h.onEdit("remove",{key:c,event:y})}var z=t.exports.createElement("div",{key:c,ref:a,className:j(N,(n={},H(n,"".concat(N,"-with-remove"),F),H(n,"".concat(N,"-active"),o),H(n,"".concat(N,"-disabled"),b),n)),style:M,onClick:A},t.exports.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(N,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":b,tabIndex:b?null:0,onClick:function(u){u.stopPropagation(),A(u)},onKeyDown:function(u){[Z.SPACE,Z.ENTER].includes(u.which)&&(u.preventDefault(),A(u))},onFocus:K},d),F&&t.exports.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(N,"-remove"),onClick:function(u){u.stopPropagation(),W(u)}},S||h.removeIcon||"×"));return x?x(z):z}const Ft=t.exports.forwardRef(Vt);var nt={width:0,height:0,left:0,top:0};function Ut(e,a,n){return t.exports.useMemo(function(){for(var i,r=new Map,o=a.get((i=e[0])===null||i===void 0?void 0:i.key)||nt,s=o.left+o.width,c=0;c<e.length;c+=1){var d=e[c].key,b=a.get(d);if(!b){var S;b=a.get((S=e[c-1])===null||S===void 0?void 0:S.key)||nt}var f=r.get(d)||G({},b);f.right=s-f.left-f.width,r.set(d,f)}return r},[e.map(function(i){return i.key}).join("_"),a,n])}var rt={width:0,height:0,left:0,top:0,right:0};function Ht(e,a,n,i,r,o,s){var c=s.tabs,d=s.tabPosition,b=s.rtl,S,f,x;return["top","bottom"].includes(d)?(S="width",f=b?"right":"left",x=Math.abs(n)):(S="height",f="top",x=-n),t.exports.useMemo(function(){if(!c.length)return[0,0];for(var I=c.length,h=I,P=0;P<I;P+=1){var L=e.get(c[P].key)||rt;if(L[f]+L[S]>x+a){h=P-1;break}}for(var K=0,M=I-1;M>=0;M-=1){var N=e.get(c[M].key)||rt;if(N[f]<x){K=M+1;break}}return[K,h]},[e,a,i,r,o,x,d,c.map(function(I){return I.key}).join("_"),b])}function Gt(e,a){var n=e.prefixCls,i=e.editable,r=e.locale,o=e.style;return!i||i.showAdd===!1?null:t.exports.createElement("button",{ref:a,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(r==null?void 0:r.addAriaLabel)||"Add tab",onClick:function(c){i.onEdit("add",{event:c})}},i.addIcon||"+")}const pt=t.exports.forwardRef(Gt);function jt(e,a){var n=e.prefixCls,i=e.id,r=e.tabs,o=e.locale,s=e.mobile,c=e.moreIcon,d=c===void 0?"More":c,b=e.moreTransitionName,S=e.style,f=e.className,x=e.editable,I=e.tabBarGutter,h=e.rtl,P=e.removeAriaLabel,L=e.onTabClick,K=e.getPopupContainer,M=e.popupClassName,N=t.exports.useState(!1),F=T(N,2),A=F[0],W=F[1],z=t.exports.useState(null),y=T(z,2),u=y[0],E=y[1],R="".concat(i,"-more-popup"),g="".concat(n,"-dropdown"),p=u!==null?"".concat(R,"-").concat(u):null,B=o==null?void 0:o.dropdownAriaLabel;function k(l,w){l.preventDefault(),l.stopPropagation(),x.onEdit("remove",{key:w,event:l})}var ce=t.exports.createElement(Dt,{onClick:function(w){var X=w.key,U=w.domEvent;L(X,U),W(!1)},prefixCls:"".concat(g,"-menu"),id:R,tabIndex:-1,role:"listbox","aria-activedescendant":p,selectedKeys:[u],"aria-label":B!==void 0?B:"expanded dropdown"},r.map(function(l){var w=x&&l.closable!==!1&&!l.disabled;return t.exports.createElement(Kt,{key:l.key,id:"".concat(R,"-").concat(l.key),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(l.key),disabled:l.disabled},t.exports.createElement("span",null,l.label),w&&t.exports.createElement("button",{type:"button","aria-label":P||"remove",tabIndex:0,className:"".concat(g,"-menu-item-remove"),onClick:function(U){U.stopPropagation(),k(U,l.key)}},l.closeIcon||x.removeIcon||"×"))}));function Q(l){for(var w=r.filter(function(ne){return!ne.disabled}),X=w.findIndex(function(ne){return ne.key===u})||0,U=w.length,ae=0;ae<U;ae+=1){X=(X+l+U)%U;var ie=w[X];if(!ie.disabled){E(ie.key);return}}}function $(l){var w=l.which;if(!A){[Z.DOWN,Z.SPACE,Z.ENTER].includes(w)&&(W(!0),l.preventDefault());return}switch(w){case Z.UP:Q(-1),l.preventDefault();break;case Z.DOWN:Q(1),l.preventDefault();break;case Z.ESC:W(!1);break;case Z.SPACE:case Z.ENTER:u!==null&&L(u,l);break}}t.exports.useEffect(function(){var l=document.getElementById(p);l&&l.scrollIntoView&&l.scrollIntoView(!1)},[u]),t.exports.useEffect(function(){A||E(null)},[A]);var J=H({},h?"marginRight":"marginLeft",I);r.length||(J.visibility="hidden",J.order=1);var le=j(H({},"".concat(g,"-rtl"),h)),te=s?null:t.exports.createElement(zt,{prefixCls:g,overlay:ce,trigger:["hover"],visible:r.length?A:!1,transitionName:b,onVisibleChange:W,overlayClassName:j(le,M),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:K},t.exports.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:J,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":R,id:"".concat(i,"-more"),"aria-expanded":A,onKeyDown:$},d));return t.exports.createElement("div",{className:j("".concat(n,"-nav-operations"),f),style:S,ref:a},te,t.exports.createElement(pt,{prefixCls:n,locale:o,editable:x}))}const Xt=t.exports.memo(t.exports.forwardRef(jt),function(e,a){return a.tabMoving});var Yt=.1,ot=.01,Ce=20,it=Math.pow(.995,Ce);function Zt(e,a){var n=t.exports.useState(),i=T(n,2),r=i[0],o=i[1],s=t.exports.useState(0),c=T(s,2),d=c[0],b=c[1],S=t.exports.useState(0),f=T(S,2),x=f[0],I=f[1],h=t.exports.useState(),P=T(h,2),L=P[0],K=P[1],M=t.exports.useRef();function N(u){var E=u.touches[0],R=E.screenX,g=E.screenY;o({x:R,y:g}),window.clearInterval(M.current)}function F(u){if(!!r){u.preventDefault();var E=u.touches[0],R=E.screenX,g=E.screenY;o({x:R,y:g});var p=R-r.x,B=g-r.y;a(p,B);var k=Date.now();b(k),I(k-d),K({x:p,y:B})}}function A(){if(!!r&&(o(null),K(null),L)){var u=L.x/x,E=L.y/x,R=Math.abs(u),g=Math.abs(E);if(Math.max(R,g)<Yt)return;var p=u,B=E;M.current=window.setInterval(function(){if(Math.abs(p)<ot&&Math.abs(B)<ot){window.clearInterval(M.current);return}p*=it,B*=it,a(p*Ce,B*Ce)},Ce)}}var W=t.exports.useRef();function z(u){var E=u.deltaX,R=u.deltaY,g=0,p=Math.abs(E),B=Math.abs(R);p===B?g=W.current==="x"?E:R:p>B?(g=E,W.current="x"):(g=R,W.current="y"),a(-g,-g)&&u.preventDefault()}var y=t.exports.useRef(null);y.current={onTouchStart:N,onTouchMove:F,onTouchEnd:A,onWheel:z},t.exports.useEffect(function(){function u(p){y.current.onTouchStart(p)}function E(p){y.current.onTouchMove(p)}function R(p){y.current.onTouchEnd(p)}function g(p){y.current.onWheel(p)}return document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",R,{passive:!1}),e.current.addEventListener("touchstart",u,{passive:!1}),e.current.addEventListener("wheel",g),function(){document.removeEventListener("touchmove",E),document.removeEventListener("touchend",R)}},[])}function Jt(){var e=t.exports.useRef(new Map);function a(i){return e.current.has(i)||e.current.set(i,t.exports.createRef()),e.current.get(i)}function n(i){e.current.delete(i)}return[a,n]}function st(e,a){var n=t.exports.useRef(e),i=t.exports.useState({}),r=T(i,2),o=r[1];function s(c){var d=typeof c=="function"?c(n.current):c;d!==n.current&&a(d,n.current),n.current=d,o({})}return[n.current,s]}function ct(e){var a;return e instanceof Map?(a={},e.forEach(function(n,i){a[i]=n})):a=e,JSON.stringify(a)}var lt=t.exports.forwardRef(function(e,a){var n=e.position,i=e.prefixCls,r=e.extra;if(!r)return null;var o,s={};return ze(r)==="object"&&!t.exports.isValidElement(r)?s=r:s.right=r,n==="right"&&(o=s.right),n==="left"&&(o=s.left),o?t.exports.createElement("div",{className:"".concat(i,"-extra-content"),ref:a},o):null}),se=function(a){var n=a.current||{},i=n.offsetWidth,r=i===void 0?0:i,o=n.offsetHeight,s=o===void 0?0:o;return[r,s]},Ee=function(a,n){return a[n?0:1]};function qt(e,a){var n,i=t.exports.useContext(Re),r=i.prefixCls,o=i.tabs,s=e.className,c=e.style,d=e.id,b=e.animated,S=e.activeKey,f=e.rtl,x=e.extra,I=e.editable,h=e.locale,P=e.tabPosition,L=e.tabBarGutter,K=e.children,M=e.onTabClick,N=e.onTabScroll,F=t.exports.useRef(),A=t.exports.useRef(),W=t.exports.useRef(),z=t.exports.useRef(),y=t.exports.useRef(),u=t.exports.useRef(),E=t.exports.useRef(),R=Jt(),g=T(R,2),p=g[0],B=g[1],k=P==="top"||P==="bottom",ce=st(0,function(m,O){k&&N&&N({direction:m>O?"left":"right"})}),Q=T(ce,2),$=Q[0],J=Q[1],le=st(0,function(m,O){!k&&N&&N({direction:m>O?"top":"bottom"})}),te=T(le,2),l=te[0],w=te[1],X=t.exports.useState([0,0]),U=T(X,2),ae=U[0],ie=U[1],ne=t.exports.useState([0,0]),ue=T(ne,2),xe=ue[0],ke=ue[1],Ne=t.exports.useState([0,0]),fe=T(Ne,2),Pe=fe[0],we=fe[1],C=t.exports.useState([0,0]),_=T(C,2),de=_[0],mt=_[1],bt=Ot(new Map),$e=T(bt,2),xt=$e[0],ht=$e[1],he=Ut(o,xt,xe[0]),re=Ee(ae,k),q=Ee(xe,k),Ie=Ee(Pe,k),We=Ee(de,k),yt=re<q+Ie,Y=yt?re-We:re-Ie,gt="".concat(r,"-nav-operations-hidden"),ve=0,pe=0;k&&f?(ve=0,pe=Math.max(0,q-Y)):(ve=Math.min(0,Y-q),pe=0);function Me(m){return m<ve?ve:m>pe?pe:m}var Oe=t.exports.useRef(),St=t.exports.useState(),Ve=T(St,2),ye=Ve[0],Fe=Ve[1];function Le(){Fe(Date.now())}function Ae(){window.clearTimeout(Oe.current)}Zt(z,function(m,O){function v(D,V){D(function(Se){var Mt=Me(Se+V);return Mt})}return re>=q?!1:(k?v(J,m):v(w,O),Ae(),Le(),!0)}),t.exports.useEffect(function(){return Ae(),ye&&(Oe.current=window.setTimeout(function(){Fe(0)},100)),Ae},[ye]);var Et=Ht(he,Y,k?$:l,q,Ie,We,G(G({},e),{},{tabs:o})),Ue=T(Et,2),Ct=Ue[0],Tt=Ue[1],He=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:S,v=he.get(O)||{width:0,height:0,left:0,right:0,top:0};if(k){var D=$;f?v.right<$?D=v.right:v.right+v.width>$+Y&&(D=v.right+v.width-Y):v.left<-$?D=-v.left:v.left+v.width>-$+Y&&(D=-(v.left+v.width-Y)),w(0),J(Me(D))}else{var V=l;v.top<-l?V=-v.top:v.top+v.height>-l+Y&&(V=-(v.top+v.height-Y)),J(0),w(Me(V))}},ge={};P==="top"||P==="bottom"?ge[f?"marginRight":"marginLeft"]=L:ge.marginTop=L;var Ge=o.map(function(m,O){var v=m.key;return t.exports.createElement(Ft,{id:d,prefixCls:r,key:v,tab:m,style:O===0?void 0:ge,closable:m.closable,editable:I,active:v===S,renderWrapper:K,removeAriaLabel:h==null?void 0:h.removeAriaLabel,ref:p(v),onClick:function(V){M(v,V)},onRemove:function(){B(v)},onFocus:function(){He(v),Le(),z.current&&(f||(z.current.scrollLeft=0),z.current.scrollTop=0)}})}),Rt=function(){return ht(function(){var O=new Map;return o.forEach(function(v){var D=v.key,V=p(D).current;V&&O.set(D,{width:V.offsetWidth,height:V.offsetHeight,left:V.offsetLeft,top:V.offsetTop})}),O})};t.exports.useEffect(function(){Rt()},[o.map(function(m){return m.key}).join("_")]);var Be=vt(function(){var m=se(F),O=se(A),v=se(W);ie([m[0]-O[0]-v[0],m[1]-O[1]-v[1]]);var D=se(E);we(D);var V=se(u);mt(V);var Se=se(y);ke([Se[0]-D[0],Se[1]-D[1]])}),kt=o.slice(0,Ct),Nt=o.slice(Tt+1),je=[].concat(_e(kt),_e(Nt)),Pt=t.exports.useState(),Xe=T(Pt,2),wt=Xe[0],It=Xe[1],ee=he.get(S),Ye=t.exports.useRef();function Ze(){be.cancel(Ye.current)}t.exports.useEffect(function(){var m={};return ee&&(k?(f?m.right=ee.right:m.left=ee.left,m.width=ee.width):(m.top=ee.top,m.height=ee.height)),Ze(),Ye.current=be(function(){It(m)}),Ze},[ee,k,f]),t.exports.useEffect(function(){He()},[S,ct(ee),ct(he),k]),t.exports.useEffect(function(){Be()},[f]);var Je=!!je.length,me="".concat(r,"-nav-wrap"),De,Ke,qe,Qe;return k?f?(Ke=$>0,De=$+re<q):(De=$<0,Ke=-$+re<q):(qe=l<0,Qe=-l+re<q),t.exports.createElement(at,{onResize:Be},t.exports.createElement("div",{ref:Lt(a,F),role:"tablist",className:j("".concat(r,"-nav"),s),style:c,onKeyDown:function(){Le()}},t.exports.createElement(lt,{ref:A,position:"left",extra:x,prefixCls:r}),t.exports.createElement("div",{className:j(me,(n={},H(n,"".concat(me,"-ping-left"),De),H(n,"".concat(me,"-ping-right"),Ke),H(n,"".concat(me,"-ping-top"),qe),H(n,"".concat(me,"-ping-bottom"),Qe),n)),ref:z},t.exports.createElement(at,{onResize:Be},t.exports.createElement("div",{ref:y,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat($,"px, ").concat(l,"px)"),transition:ye?"none":void 0}},Ge,t.exports.createElement(pt,{ref:E,prefixCls:r,locale:h,editable:I,style:G(G({},Ge.length===0?void 0:ge),{},{visibility:Je?"hidden":null})}),t.exports.createElement("div",{className:j("".concat(r,"-ink-bar"),H({},"".concat(r,"-ink-bar-animated"),b.inkBar)),style:wt})))),t.exports.createElement(Xt,oe({},e,{removeAriaLabel:h==null?void 0:h.removeAriaLabel,ref:u,prefixCls:r,tabs:je,className:!Je&&gt,tabMoving:!!ye})),t.exports.createElement(lt,{ref:W,position:"right",extra:x,prefixCls:r})))}const ut=t.exports.forwardRef(qt);var Qt=["renderTabBar"],_t=["label","key"];function ea(e){var a=e.renderTabBar,n=Te(e,Qt),i=t.exports.useContext(Re),r=i.tabs;if(a){var o=G(G({},n),{},{panes:r.map(function(s){var c=s.label,d=s.key,b=Te(s,_t);return et.createElement(dt,oe({tab:c,key:d,tabKey:d},b))})});return a(o,ut)}return et.createElement(ut,n)}function ta(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=G({inkBar:!0},ze(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var aa=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],ft=0;function na(e,a){var n,i=e.id,r=e.prefixCls,o=r===void 0?"rc-tabs":r,s=e.className,c=e.items,d=e.direction,b=e.activeKey,S=e.defaultActiveKey,f=e.editable,x=e.animated,I=e.tabPosition,h=I===void 0?"top":I,P=e.tabBarGutter,L=e.tabBarStyle,K=e.tabBarExtraContent,M=e.locale,N=e.moreIcon,F=e.moreTransitionName,A=e.destroyInactiveTabPane,W=e.renderTabBar,z=e.onChange,y=e.onTabClick,u=e.onTabScroll,E=e.getPopupContainer,R=e.popupClassName,g=Te(e,aa),p=t.exports.useMemo(function(){return(c||[]).filter(function(C){return C&&ze(C)==="object"&&"key"in C})},[c]),B=d==="rtl",k=ta(x),ce=t.exports.useState(!1),Q=T(ce,2),$=Q[0],J=Q[1];t.exports.useEffect(function(){J(At())},[]);var le=tt(function(){var C;return(C=p[0])===null||C===void 0?void 0:C.key},{value:b,defaultValue:S}),te=T(le,2),l=te[0],w=te[1],X=t.exports.useState(function(){return p.findIndex(function(C){return C.key===l})}),U=T(X,2),ae=U[0],ie=U[1];t.exports.useEffect(function(){var C=p.findIndex(function(de){return de.key===l});if(C===-1){var _;C=Math.max(0,Math.min(ae,p.length-1)),w((_=p[C])===null||_===void 0?void 0:_.key)}ie(C)},[p.map(function(C){return C.key}).join("_"),l,ae]);var ne=tt(null,{value:i}),ue=T(ne,2),xe=ue[0],ke=ue[1];t.exports.useEffect(function(){i||(ke("rc-tabs-".concat(ft)),ft+=1)},[]);function Ne(C,_){y==null||y(C,_);var de=C!==l;w(C),de&&(z==null||z(C))}var fe={id:xe,activeKey:l,animated:k,tabPosition:h,rtl:B,mobile:$},Pe,we=G(G({},fe),{},{editable:f,locale:M,moreIcon:N,moreTransitionName:F,tabBarGutter:P,onTabClick:Ne,onTabScroll:u,extra:K,style:L,panes:null,getPopupContainer:E,popupClassName:R});return t.exports.createElement(Re.Provider,{value:{tabs:p,prefixCls:o}},t.exports.createElement("div",oe({ref:a,id:i,className:j(o,"".concat(o,"-").concat(h),(n={},H(n,"".concat(o,"-mobile"),$),H(n,"".concat(o,"-editable"),f),H(n,"".concat(o,"-rtl"),B),n),s)},g),Pe,t.exports.createElement(ea,oe({},we,{renderTabBar:W})),t.exports.createElement(Wt,oe({destroyInactiveTabPane:A},fe,{animated:k}))))}var da=t.exports.forwardRef(na);export{da as F};

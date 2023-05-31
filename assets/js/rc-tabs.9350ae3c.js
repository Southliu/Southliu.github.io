import{b as W,n as Ee,g as ie,f as F,e as k,c as Ke,d as Je}from"./@babel_runtime.e68bd868.js";import{r as t}from"./react.ab566f72.js";import{c as _}from"./classnames.8cb16634.js";import{X as Pt,S as Y,f as wt,q as et,n as It,x as Mt,P as tt}from"./rc-util.1a6f23f3.js";import{C as Lt}from"./rc-motion.b9a33c17.js";import{a as at}from"./rc-resize-observer.4edb5df2.js";import{D as At}from"./rc-dropdown.e8f2ad94.js";import{E as Bt,M as Dt}from"./rc-menu.81d150fa.js";const Ce=t.createContext(null);var ft=t.forwardRef(function(e,a){var r=e.prefixCls,i=e.className,o=e.style,n=e.id,c=e.active,s=e.tabKey,l=e.children;return t.createElement("div",{id:n&&"".concat(n,"-panel-").concat(s),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":n&&"".concat(n,"-tab-").concat(s),"aria-hidden":!c,style:o,className:_(r,c&&"".concat(r,"-active"),i),ref:a},l)}),Kt=["key","forceRender","style","className"];function zt(e){var a=e.id,r=e.activeKey,i=e.animated,o=e.tabPosition,n=e.destroyInactiveTabPane,c=t.useContext(Ce),s=c.prefixCls,l=c.tabs,S=i.tabPane,g="".concat(s,"-tabpane");return t.createElement("div",{className:_("".concat(s,"-content-holder"))},t.createElement("div",{className:_("".concat(s,"-content"),"".concat(s,"-content-").concat(o),W({},"".concat(s,"-content-animated"),S))},l.map(function(u){var y=u.key,P=u.forceRender,N=u.style,I=u.className,L=Ee(u,Kt),w=y===r;return t.createElement(Lt,ie({key:y,visible:w,forceRender:P,removeOnLeave:!!n,leavedClassName:"".concat(g,"-hidden")},i.tabPaneMotion),function(M,A){var U=M.style,K=M.className;return t.createElement(ft,ie({},L,{prefixCls:g,id:a,tabKey:y,animated:S,active:w,style:F(F({},N),U),className:_(I,K),ref:A}))})})))}var nt={width:0,height:0,left:0,top:0};function $t(e,a,r){return t.useMemo(function(){for(var i,o=new Map,n=a.get((i=e[0])===null||i===void 0?void 0:i.key)||nt,c=n.left+n.width,s=0;s<e.length;s+=1){var l=e[s].key,S=a.get(l);if(!S){var g;S=a.get((g=e[s-1])===null||g===void 0?void 0:g.key)||nt}var u=o.get(l)||F({},S);u.right=c-u.left-u.width,o.set(l,u)}return o},[e.map(function(i){return i.key}).join("_"),a,r])}function rt(e,a){var r=t.useRef(e),i=t.useState({}),o=k(i,2),n=o[1];function c(s){var l=typeof s=="function"?s(r.current):s;l!==r.current&&a(l,r.current),r.current=l,n({})}return[r.current,c]}var Ot=.1,ot=.01,ge=20,it=Math.pow(.995,ge);function Wt(e,a){var r=t.useState(),i=k(r,2),o=i[0],n=i[1],c=t.useState(0),s=k(c,2),l=s[0],S=s[1],g=t.useState(0),u=k(g,2),y=u[0],P=u[1],N=t.useState(),I=k(N,2),L=I[0],w=I[1],M=t.useRef();function A(h){var C=h.touches[0],d=C.screenX,x=C.screenY;n({x:d,y:x}),window.clearInterval(M.current)}function U(h){if(o){h.preventDefault();var C=h.touches[0],d=C.screenX,x=C.screenY;n({x:d,y:x});var m=d-o.x,p=x-o.y;a(m,p);var H=Date.now();S(H),P(H-l),w({x:m,y:p})}}function K(){if(o&&(n(null),w(null),L)){var h=L.x/y,C=L.y/y,d=Math.abs(h),x=Math.abs(C);if(Math.max(d,x)<Ot)return;var m=h,p=C;M.current=window.setInterval(function(){if(Math.abs(m)<ot&&Math.abs(p)<ot){window.clearInterval(M.current);return}m*=it,p*=it,a(m*ge,p*ge)},ge)}}var R=t.useRef();function E(h){var C=h.deltaX,d=h.deltaY,x=0,m=Math.abs(C),p=Math.abs(d);m===p?x=R.current==="x"?C:d:m>p?(x=C,R.current="x"):(x=d,R.current="y"),a(-x,-x)&&h.preventDefault()}var z=t.useRef(null);z.current={onTouchStart:A,onTouchMove:U,onTouchEnd:K,onWheel:E},t.useEffect(function(){function h(m){z.current.onTouchStart(m)}function C(m){z.current.onTouchMove(m)}function d(m){z.current.onTouchEnd(m)}function x(m){z.current.onWheel(m)}return document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",d,{passive:!1}),e.current.addEventListener("touchstart",h,{passive:!1}),e.current.addEventListener("wheel",x),function(){document.removeEventListener("touchmove",C),document.removeEventListener("touchend",d)}},[])}function vt(e){var a=t.useState(0),r=k(a,2),i=r[0],o=r[1],n=t.useRef(0),c=t.useRef();return c.current=e,Pt(function(){var s;(s=c.current)===null||s===void 0||s.call(c)},[i]),function(){n.current===i&&(n.current+=1,o(n.current))}}function Ut(e){var a=t.useRef([]),r=t.useState({}),i=k(r,2),o=i[1],n=t.useRef(typeof e=="function"?e():e),c=vt(function(){var l=n.current;a.current.forEach(function(S){l=S(l)}),a.current=[],n.current=l,o({})});function s(l){a.current.push(l),c()}return[n.current,s]}var ct={width:0,height:0,left:0,top:0,right:0};function Vt(e,a,r,i,o,n,c){var s=c.tabs,l=c.tabPosition,S=c.rtl,g,u,y;return["top","bottom"].includes(l)?(g="width",u=S?"right":"left",y=Math.abs(r)):(g="height",u="top",y=-r),t.useMemo(function(){if(!s.length)return[0,0];for(var P=s.length,N=P,I=0;I<P;I+=1){var L=e.get(s[I].key)||ct;if(L[u]+L[g]>y+a){N=I-1;break}}for(var w=0,M=P-1;M>=0;M-=1){var A=e.get(s[M].key)||ct;if(A[u]<y){w=M+1;break}}return[w,N]},[e,a,i,o,n,y,l,s.map(function(P){return P.key}).join("_"),S])}function st(e){var a;return e instanceof Map?(a={},e.forEach(function(r,i){a[i]=r})):a=e,JSON.stringify(a)}var Ft="TABS_DQ";function mt(e){return String(e).replace(/"/g,Ft)}function _t(e,a){var r=e.prefixCls,i=e.editable,o=e.locale,n=e.style;return!i||i.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(r,"-nav-add"),style:n,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(s){i.onEdit("add",{event:s})}},i.addIcon||"+")}const bt=t.forwardRef(_t);var lt=t.forwardRef(function(e,a){var r=e.position,i=e.prefixCls,o=e.extra;if(!o)return null;var n,c={};return Ke(o)==="object"&&!t.isValidElement(o)?c=o:c.right=o,r==="right"&&(n=c.right),r==="left"&&(n=c.left),n?t.createElement("div",{className:"".concat(i,"-extra-content"),ref:a},n):null});function Ht(e,a){var r=e.prefixCls,i=e.id,o=e.tabs,n=e.locale,c=e.mobile,s=e.moreIcon,l=s===void 0?"More":s,S=e.moreTransitionName,g=e.style,u=e.className,y=e.editable,P=e.tabBarGutter,N=e.rtl,I=e.removeAriaLabel,L=e.onTabClick,w=e.getPopupContainer,M=e.popupClassName,A=t.useState(!1),U=k(A,2),K=U[0],R=U[1],E=t.useState(null),z=k(E,2),h=z[0],C=z[1],d="".concat(i,"-more-popup"),x="".concat(r,"-dropdown"),m=h!==null?"".concat(d,"-").concat(h):null,p=n==null?void 0:n.dropdownAriaLabel;function H(f,B){f.preventDefault(),f.stopPropagation(),y.onEdit("remove",{key:B,event:f})}var le=t.createElement(Bt,{onClick:function(B){var G=B.key,O=B.domEvent;L(G,O),R(!1)},prefixCls:"".concat(x,"-menu"),id:d,tabIndex:-1,role:"listbox","aria-activedescendant":m,selectedKeys:[h],"aria-label":p!==void 0?p:"expanded dropdown"},o.map(function(f){var B=y&&f.closable!==!1&&!f.disabled;return t.createElement(Dt,{key:f.key,id:"".concat(d,"-").concat(f.key),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(f.key),disabled:f.disabled},t.createElement("span",null,f.label),B&&t.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(x,"-menu-item-remove"),onClick:function(O){O.stopPropagation(),H(O,f.key)}},f.closeIcon||y.removeIcon||"×"))}));function Q(f){for(var B=o.filter(function(re){return!re.disabled}),G=B.findIndex(function(re){return re.key===h})||0,O=B.length,Z=0;Z<O;Z+=1){G=(G+f+O)%O;var ce=B[G];if(!ce.disabled){C(ce.key);return}}}function V(f){var B=f.which;if(!K){[Y.DOWN,Y.SPACE,Y.ENTER].includes(B)&&(R(!0),f.preventDefault());return}switch(B){case Y.UP:Q(-1),f.preventDefault();break;case Y.DOWN:Q(1),f.preventDefault();break;case Y.ESC:R(!1);break;case Y.SPACE:case Y.ENTER:h!==null&&L(h,f);break}}t.useEffect(function(){var f=document.getElementById(m);f&&f.scrollIntoView&&f.scrollIntoView(!1)},[h]),t.useEffect(function(){K||C(null)},[K]);var q=W({},N?"marginRight":"marginLeft",P);o.length||(q.visibility="hidden",q.order=1);var ue=_(W({},"".concat(x,"-rtl"),N)),ne=c?null:t.createElement(At,{prefixCls:x,overlay:le,trigger:["hover"],visible:o.length?K:!1,transitionName:S,onVisibleChange:R,overlayClassName:_(ue,M),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:w},t.createElement("button",{type:"button",className:"".concat(r,"-nav-more"),style:q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":d,id:"".concat(i,"-more"),"aria-expanded":K,onKeyDown:V},l));return t.createElement("div",{className:_("".concat(r,"-nav-operations"),u),style:g,ref:a},ne,t.createElement(bt,{prefixCls:r,locale:n,editable:y}))}const Gt=t.memo(t.forwardRef(Ht),function(e,a){return a.tabMoving});function jt(e){var a,r=e.prefixCls,i=e.id,o=e.active,n=e.tab,c=n.key,s=n.label,l=n.disabled,S=n.closeIcon,g=e.closable,u=e.renderWrapper,y=e.removeAriaLabel,P=e.editable,N=e.onClick,I=e.onFocus,L=e.style,w="".concat(r,"-tab"),M=P&&g!==!1&&!l;function A(R){l||N(R)}function U(R){R.preventDefault(),R.stopPropagation(),P.onEdit("remove",{key:c,event:R})}var K=t.createElement("div",{key:c,"data-node-key":mt(c),className:_(w,(a={},W(a,"".concat(w,"-with-remove"),M),W(a,"".concat(w,"-active"),o),W(a,"".concat(w,"-disabled"),l),a)),style:L,onClick:A},t.createElement("div",{role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(c),className:"".concat(w,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(c),"aria-disabled":l,tabIndex:l?null:0,onClick:function(E){E.stopPropagation(),A(E)},onKeyDown:function(E){[Y.SPACE,Y.ENTER].includes(E.which)&&(E.preventDefault(),A(E))},onFocus:I},s),M&&t.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(E){E.stopPropagation(),U(E)}},S||P.removeIcon||"×"));return u?u(K):K}var se=function(a){var r=a.current||{},i=r.offsetWidth,o=i===void 0?0:i,n=r.offsetHeight,c=n===void 0?0:n;return[o,c]},Se=function(a,r){return a[r?0:1]};function Xt(e,a){var r,i=t.useContext(Ce),o=i.prefixCls,n=i.tabs,c=e.className,s=e.style,l=e.id,S=e.animated,g=e.activeKey,u=e.rtl,y=e.extra,P=e.editable,N=e.locale,I=e.tabPosition,L=e.tabBarGutter,w=e.children,M=e.onTabClick,A=e.onTabScroll,U=t.useRef(),K=t.useRef(),R=t.useRef(),E=t.useRef(),z=t.useRef(),h=t.useRef(),C=t.useRef(),d=I==="top"||I==="bottom",x=rt(0,function(b,v){d&&A&&A({direction:b>v?"left":"right"})}),m=k(x,2),p=m[0],H=m[1],le=rt(0,function(b,v){!d&&A&&A({direction:b>v?"top":"bottom"})}),Q=k(le,2),V=Q[0],q=Q[1],ue=t.useState([0,0]),ne=k(ue,2),f=ne[0],B=ne[1],G=t.useState([0,0]),O=k(G,2),Z=O[0],ce=O[1],re=t.useState([0,0]),de=k(re,2),xe=de[0],Te=de[1],ke=t.useState([0,0]),fe=k(ke,2),Ne=fe[0],Re=fe[1],T=Ut(new Map),J=k(T,2),ve=J[0],pt=J[1],pe=$t(n,ve,Z[0]),Pe=Se(f,d),me=Se(Z,d),we=Se(xe,d),ze=Se(Ne,d),$e=Pe<me+we,j=$e?Pe-ze:Pe-we,ht="".concat(o,"-nav-operations-hidden"),ee=0,oe=0;d&&u?(ee=0,oe=Math.max(0,me-j)):(ee=Math.min(0,j-me),oe=0);function Ie(b){return b<ee?ee:b>oe?oe:b}var Oe=t.useRef(),yt=t.useState(),We=k(yt,2),he=We[0],Ue=We[1];function Me(){Ue(Date.now())}function Le(){window.clearTimeout(Oe.current)}Wt(E,function(b,v){function D($,ae){$(function(X){var Rt=Ie(X+ae);return Rt})}return $e?(d?D(H,b):D(q,v),Le(),Me(),!0):!1}),t.useEffect(function(){return Le(),he&&(Oe.current=window.setTimeout(function(){Ue(0)},100)),Le},[he]);var St=Vt(pe,j,d?p:V,me,we,ze,F(F({},e),{},{tabs:n})),Ve=k(St,2),gt=Ve[0],Et=Ve[1],Fe=wt(function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g,v=pe.get(b)||{width:0,height:0,left:0,right:0,top:0};if(d){var D=p;u?v.right<p?D=v.right:v.right+v.width>p+j&&(D=v.right+v.width-j):v.left<-p?D=-v.left:v.left+v.width>-p+j&&(D=-(v.left+v.width-j)),q(0),H(Ie(D))}else{var $=V;v.top<-V?$=-v.top:v.top+v.height>-V+j&&($=-(v.top+v.height-j)),H(0),q(Ie($))}}),ye={};I==="top"||I==="bottom"?ye[u?"marginRight":"marginLeft"]=L:ye.marginTop=L;var _e=n.map(function(b,v){var D=b.key;return t.createElement(jt,{id:l,prefixCls:o,key:D,tab:b,style:v===0?void 0:ye,closable:b.closable,editable:P,active:D===g,renderWrapper:w,removeAriaLabel:N==null?void 0:N.removeAriaLabel,onClick:function(ae){M(D,ae)},onFocus:function(){Fe(D),Me(),E.current&&(u||(E.current.scrollLeft=0),E.current.scrollTop=0)}})}),He=function(){return pt(function(){var v=new Map;return n.forEach(function(D){var $,ae=D.key,X=($=z.current)===null||$===void 0?void 0:$.querySelector('[data-node-key="'.concat(mt(ae),'"]'));X&&v.set(ae,{width:X.offsetWidth,height:X.offsetHeight,left:X.offsetLeft,top:X.offsetTop})}),v})};t.useEffect(function(){He()},[n.map(function(b){return b.key}).join("_")]);var Ae=vt(function(){var b=se(U),v=se(K),D=se(R);B([b[0]-v[0]-D[0],b[1]-v[1]-D[1]]);var $=se(C);Te($);var ae=se(h);Re(ae);var X=se(z);ce([X[0]-$[0],X[1]-$[1]]),He()}),Ct=n.slice(0,gt),xt=n.slice(Et+1),Ge=[].concat(Je(Ct),Je(xt)),Tt=t.useState(),je=k(Tt,2),kt=je[0],Nt=je[1],te=pe.get(g),Xe=t.useRef();function Ye(){et.cancel(Xe.current)}t.useEffect(function(){var b={};return te&&(d?(u?b.right=te.right:b.left=te.left,b.width=te.width):(b.top=te.top,b.height=te.height)),Ye(),Xe.current=et(function(){Nt(b)}),Ye},[te,d,u]),t.useEffect(function(){Fe()},[g,ee,oe,st(te),st(pe),d]),t.useEffect(function(){Ae()},[u]);var qe=!!Ge.length,be="".concat(o,"-nav-wrap"),Be,De,Qe,Ze;return d?u?(De=p>0,Be=p!==oe):(Be=p<0,De=p!==ee):(Qe=V<0,Ze=V!==ee),t.createElement(at,{onResize:Ae},t.createElement("div",{ref:It(a,U),role:"tablist",className:_("".concat(o,"-nav"),c),style:s,onKeyDown:function(){Me()}},t.createElement(lt,{ref:K,position:"left",extra:y,prefixCls:o}),t.createElement("div",{className:_(be,(r={},W(r,"".concat(be,"-ping-left"),Be),W(r,"".concat(be,"-ping-right"),De),W(r,"".concat(be,"-ping-top"),Qe),W(r,"".concat(be,"-ping-bottom"),Ze),r)),ref:E},t.createElement(at,{onResize:Ae},t.createElement("div",{ref:z,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(p,"px, ").concat(V,"px)"),transition:he?"none":void 0}},_e,t.createElement(bt,{ref:C,prefixCls:o,locale:N,editable:P,style:F(F({},_e.length===0?void 0:ye),{},{visibility:qe?"hidden":null})}),t.createElement("div",{className:_("".concat(o,"-ink-bar"),W({},"".concat(o,"-ink-bar-animated"),S.inkBar)),style:kt})))),t.createElement(Gt,ie({},e,{removeAriaLabel:N==null?void 0:N.removeAriaLabel,ref:h,prefixCls:o,tabs:Ge,className:!qe&&ht,tabMoving:!!he})),t.createElement(lt,{ref:R,position:"right",extra:y,prefixCls:o})))}const ut=t.forwardRef(Xt);var Yt=["renderTabBar"],qt=["label","key"];function Qt(e){var a=e.renderTabBar,r=Ee(e,Yt),i=t.useContext(Ce),o=i.tabs;if(a){var n=F(F({},r),{},{panes:o.map(function(c){var s=c.label,l=c.key,S=Ee(c,qt);return t.createElement(ft,ie({tab:s,key:l,tabKey:l},S))})});return a(n,ut)}return t.createElement(ut,r)}function Zt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=F({inkBar:!0},Ke(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var Jt=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],dt=0;function ea(e,a){var r,i=e.id,o=e.prefixCls,n=o===void 0?"rc-tabs":o,c=e.className,s=e.items,l=e.direction,S=e.activeKey,g=e.defaultActiveKey,u=e.editable,y=e.animated,P=e.tabPosition,N=P===void 0?"top":P,I=e.tabBarGutter,L=e.tabBarStyle,w=e.tabBarExtraContent,M=e.locale,A=e.moreIcon,U=e.moreTransitionName,K=e.destroyInactiveTabPane,R=e.renderTabBar,E=e.onChange,z=e.onTabClick,h=e.onTabScroll,C=e.getPopupContainer,d=e.popupClassName,x=Ee(e,Jt),m=t.useMemo(function(){return(s||[]).filter(function(T){return T&&Ke(T)==="object"&&"key"in T})},[s]),p=l==="rtl",H=Zt(y),le=t.useState(!1),Q=k(le,2),V=Q[0],q=Q[1];t.useEffect(function(){q(Mt())},[]);var ue=tt(function(){var T;return(T=m[0])===null||T===void 0?void 0:T.key},{value:S,defaultValue:g}),ne=k(ue,2),f=ne[0],B=ne[1],G=t.useState(function(){return m.findIndex(function(T){return T.key===f})}),O=k(G,2),Z=O[0],ce=O[1];t.useEffect(function(){var T=m.findIndex(function(ve){return ve.key===f});if(T===-1){var J;T=Math.max(0,Math.min(Z,m.length-1)),B((J=m[T])===null||J===void 0?void 0:J.key)}ce(T)},[m.map(function(T){return T.key}).join("_"),f,Z]);var re=tt(null,{value:i}),de=k(re,2),xe=de[0],Te=de[1];t.useEffect(function(){i||(Te("rc-tabs-".concat(dt)),dt+=1)},[]);function ke(T,J){z==null||z(T,J);var ve=T!==f;B(T),ve&&(E==null||E(T))}var fe={id:xe,activeKey:f,animated:H,tabPosition:N,rtl:p,mobile:V},Ne,Re=F(F({},fe),{},{editable:u,locale:M,moreIcon:A,moreTransitionName:U,tabBarGutter:I,onTabClick:ke,onTabScroll:h,extra:w,style:L,panes:null,getPopupContainer:C,popupClassName:d});return t.createElement(Ce.Provider,{value:{tabs:m,prefixCls:n}},t.createElement("div",ie({ref:a,id:i,className:_(n,"".concat(n,"-").concat(N),(r={},W(r,"".concat(n,"-mobile"),V),W(r,"".concat(n,"-editable"),u),W(r,"".concat(n,"-rtl"),p),r),c)},x),Ne,t.createElement(Qt,ie({},Re,{renderTabBar:R})),t.createElement(zt,ie({destroyInactiveTabPane:K},fe,{animated:H}))))}var la=t.forwardRef(ea);export{la as F};

import{d as U,b as ke,a as H,c as N,_ as Oe,e as nt}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as n}from"./react@18.2.0-44b760b7.js";import{c as G}from"./classnames@2.3.2-d75d9a59.js";import{e as xe,K as Z,b as Bt,A as Dt,f as rt}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{C as Kt}from"./rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y-81256ecd.js";import{j as b,b as ce}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";import{R as ot}from"./rc-resize-observer@1.2.0_biqbaboplfbrettd7655fr4n2y-05be0dca.js";import{E as zt,M as $t}from"./rc-menu@9.7.2_biqbaboplfbrettd7655fr4n2y-5ef1a485.js";import{D as Wt}from"./rc-dropdown@4.0.1_biqbaboplfbrettd7655fr4n2y-7caff546.js";const Ee=n.exports.createContext(null);var bt=n.exports.forwardRef(function(e,t){var a=e.prefixCls,i=e.className,r=e.style,o=e.id,s=e.active,c=e.tabKey,f=e.children;return b("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!s,style:r,className:G(a,s&&"".concat(a,"-active"),i),ref:t,children:f})}),Ot=["key","forceRender","style","className"];function Vt(e){var t=e.id,a=e.activeKey,i=e.animated,r=e.tabPosition,o=e.destroyInactiveTabPane,s=n.exports.useContext(Ee),c=s.prefixCls,f=s.tabs,m=i.tabPane,C="".concat(c,"-tabpane");return b("div",{className:G("".concat(c,"-content-holder")),children:b("div",{className:G("".concat(c,"-content"),"".concat(c,"-content-").concat(r),U({},"".concat(c,"-content-animated"),m)),children:f.map(function(d){var h=d.key,M=d.forceRender,y=d.style,w=d.className,A=ke(d,Ot),K=h===a;return b(Kt,{visible:K,forceRender:M,removeOnLeave:!!o,leavedClassName:"".concat(C,"-hidden"),...i.tabPaneMotion,children:function(L,E){var O=L.style,B=L.className;return b(bt,{...A,prefixCls:C,id:t,tabKey:h,animated:m,active:K,style:H(H({},y),O),className:G(w,B),ref:E})}},h)})})})}function mt(e){var t=n.exports.useRef(),a=n.exports.useRef(!1);function i(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];a.current||(xe.cancel(t.current),t.current=xe(function(){e.apply(void 0,o)}))}return n.exports.useEffect(function(){return a.current=!1,function(){a.current=!0,xe.cancel(t.current)}},[]),i}function Ft(e){var t=n.exports.useRef([]),a=n.exports.useState({}),i=N(a,2),r=i[1],o=n.exports.useRef(typeof e=="function"?e():e),s=mt(function(){var f=o.current;t.current.forEach(function(m){f=m(f)}),t.current=[],o.current=f,r({})});function c(f){t.current.push(f),s()}return[o.current,c]}function Ut(e,t){var a,i=e.prefixCls,r=e.id,o=e.active,s=e.tab,c=s.key,f=s.label,m=s.disabled,C=s.closeIcon,d=e.closable,h=e.renderWrapper,M=e.removeAriaLabel,y=e.editable,w=e.onClick,A=e.onRemove,K=e.onFocus,L=e.style,E="".concat(i,"-tab");n.exports.useEffect(function(){return A},[]);var O=y&&d!==!1&&!m;function B(g){m||w(g)}function W(g){g.preventDefault(),g.stopPropagation(),y.onEdit("remove",{key:c,event:g})}var z=ce("div",{ref:t,className:G(E,(a={},U(a,"".concat(E,"-with-remove"),O),U(a,"".concat(E,"-active"),o),U(a,"".concat(E,"-disabled"),m),a)),style:L,onClick:B,children:[b("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(E,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":m,tabIndex:m?null:0,onClick:function(u){u.stopPropagation(),B(u)},onKeyDown:function(u){[Z.SPACE,Z.ENTER].includes(u.which)&&(u.preventDefault(),B(u))},onFocus:K,children:f}),O&&b("button",{type:"button","aria-label":M||"remove",tabIndex:0,className:"".concat(E,"-remove"),onClick:function(u){u.stopPropagation(),W(u)},children:C||y.removeIcon||"\xD7"})]},c);return h?h(z):z}const jt=n.exports.forwardRef(Ut);var it={width:0,height:0,left:0,top:0};function Ht(e,t,a){return n.exports.useMemo(function(){for(var i,r=new Map,o=t.get((i=e[0])===null||i===void 0?void 0:i.key)||it,s=o.left+o.width,c=0;c<e.length;c+=1){var f=e[c].key,m=t.get(f);if(!m){var C;m=t.get((C=e[c-1])===null||C===void 0?void 0:C.key)||it}var d=r.get(f)||H({},m);d.right=s-d.left-d.width,r.set(f,d)}return r},[e.map(function(i){return i.key}).join("_"),t,a])}var st={width:0,height:0,left:0,top:0,right:0};function Gt(e,t,a,i,r,o,s){var c=s.tabs,f=s.tabPosition,m=s.rtl,C,d,h;return["top","bottom"].includes(f)?(C="width",d=m?"right":"left",h=Math.abs(a)):(C="height",d="top",h=-a),n.exports.useMemo(function(){if(!c.length)return[0,0];for(var M=c.length,y=M,w=0;w<M;w+=1){var A=e.get(c[w].key)||st;if(A[d]+A[C]>h+t){y=w-1;break}}for(var K=0,L=M-1;L>=0;L-=1){var E=e.get(c[L].key)||st;if(E[d]<h){K=L+1;break}}return[K,y]},[e,t,i,r,o,h,f,c.map(function(M){return M.key}).join("_"),m])}function Xt(e,t){var a=e.prefixCls,i=e.editable,r=e.locale,o=e.style;return!i||i.showAdd===!1?null:b("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(r==null?void 0:r.addAriaLabel)||"Add tab",onClick:function(c){i.onEdit("add",{event:c})},children:i.addIcon||"+"})}const ht=n.exports.forwardRef(Xt);function Yt(e,t){var a=e.prefixCls,i=e.id,r=e.tabs,o=e.locale,s=e.mobile,c=e.moreIcon,f=c===void 0?"More":c,m=e.moreTransitionName,C=e.style,d=e.className,h=e.editable,M=e.tabBarGutter,y=e.rtl,w=e.removeAriaLabel,A=e.onTabClick,K=e.getPopupContainer,L=e.popupClassName,E=n.exports.useState(!1),O=N(E,2),B=O[0],W=O[1],z=n.exports.useState(null),g=N(z,2),u=g[0],T=g[1],P="".concat(i,"-more-popup"),S="".concat(a,"-dropdown"),v=u!==null?"".concat(P,"-").concat(u):null,D=o==null?void 0:o.dropdownAriaLabel;function k(l,I){l.preventDefault(),l.stopPropagation(),h.onEdit("remove",{key:I,event:l})}var le=b(zt,{onClick:function(I){var X=I.key,V=I.domEvent;A(X,V),W(!1)},prefixCls:"".concat(S,"-menu"),id:P,tabIndex:-1,role:"listbox","aria-activedescendant":v,selectedKeys:[u],"aria-label":D!==void 0?D:"expanded dropdown",children:r.map(function(l){var I=h&&l.closable!==!1&&!l.disabled;return ce($t,{id:"".concat(P,"-").concat(l.key),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(l.key),disabled:l.disabled,children:[b("span",{children:l.label}),I&&b("button",{type:"button","aria-label":w||"remove",tabIndex:0,className:"".concat(S,"-menu-item-remove"),onClick:function(V){V.stopPropagation(),k(V,l.key)},children:l.closeIcon||h.removeIcon||"\xD7"})]},l.key)})});function _(l){for(var I=r.filter(function(re){return!re.disabled}),X=I.findIndex(function(re){return re.key===u})||0,V=I.length,ne=0;ne<V;ne+=1){X=(X+l+V)%V;var ie=I[X];if(!ie.disabled){T(ie.key);return}}}function $(l){var I=l.which;if(!B){[Z.DOWN,Z.SPACE,Z.ENTER].includes(I)&&(W(!0),l.preventDefault());return}switch(I){case Z.UP:_(-1),l.preventDefault();break;case Z.DOWN:_(1),l.preventDefault();break;case Z.ESC:W(!1);break;case Z.SPACE:case Z.ENTER:u!==null&&A(u,l);break}}n.exports.useEffect(function(){var l=document.getElementById(v);l&&l.scrollIntoView&&l.scrollIntoView(!1)},[u]),n.exports.useEffect(function(){B||T(null)},[B]);var J=U({},y?"marginRight":"marginLeft",M);r.length||(J.visibility="hidden",J.order=1);var ue=G(U({},"".concat(S,"-rtl"),y)),ae=s?null:b(Wt,{prefixCls:S,overlay:le,trigger:["hover"],visible:r.length?B:!1,transitionName:m,onVisibleChange:W,overlayClassName:G(ue,L),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:K,children:b("button",{type:"button",className:"".concat(a,"-nav-more"),style:J,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":P,id:"".concat(i,"-more"),"aria-expanded":B,onKeyDown:$,children:f})});return ce("div",{className:G("".concat(a,"-nav-operations"),d),style:C,ref:t,children:[ae,b(ht,{prefixCls:a,locale:o,editable:h})]})}const Zt=n.exports.memo(n.exports.forwardRef(Yt),function(e,t){return t.tabMoving});var Jt=.1,ct=.01,Pe=20,lt=Math.pow(.995,Pe);function qt(e,t){var a=n.exports.useState(),i=N(a,2),r=i[0],o=i[1],s=n.exports.useState(0),c=N(s,2),f=c[0],m=c[1],C=n.exports.useState(0),d=N(C,2),h=d[0],M=d[1],y=n.exports.useState(),w=N(y,2),A=w[0],K=w[1],L=n.exports.useRef();function E(u){var T=u.touches[0],P=T.screenX,S=T.screenY;o({x:P,y:S}),window.clearInterval(L.current)}function O(u){if(!!r){u.preventDefault();var T=u.touches[0],P=T.screenX,S=T.screenY;o({x:P,y:S});var v=P-r.x,D=S-r.y;t(v,D);var k=Date.now();m(k),M(k-f),K({x:v,y:D})}}function B(){if(!!r&&(o(null),K(null),A)){var u=A.x/h,T=A.y/h,P=Math.abs(u),S=Math.abs(T);if(Math.max(P,S)<Jt)return;var v=u,D=T;L.current=window.setInterval(function(){if(Math.abs(v)<ct&&Math.abs(D)<ct){window.clearInterval(L.current);return}v*=lt,D*=lt,t(v*Pe,D*Pe)},Pe)}}var W=n.exports.useRef();function z(u){var T=u.deltaX,P=u.deltaY,S=0,v=Math.abs(T),D=Math.abs(P);v===D?S=W.current==="x"?T:P:v>D?(S=T,W.current="x"):(S=P,W.current="y"),t(-S,-S)&&u.preventDefault()}var g=n.exports.useRef(null);g.current={onTouchStart:E,onTouchMove:O,onTouchEnd:B,onWheel:z},n.exports.useEffect(function(){function u(v){g.current.onTouchStart(v)}function T(v){g.current.onTouchMove(v)}function P(v){g.current.onTouchEnd(v)}function S(v){g.current.onWheel(v)}return document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",P,{passive:!1}),e.current.addEventListener("touchstart",u,{passive:!1}),e.current.addEventListener("wheel",S),function(){document.removeEventListener("touchmove",T),document.removeEventListener("touchend",P)}},[])}function Qt(){var e=n.exports.useRef(new Map);function t(i){return e.current.has(i)||e.current.set(i,n.exports.createRef()),e.current.get(i)}function a(i){e.current.delete(i)}return[t,a]}function ut(e,t){var a=n.exports.useRef(e),i=n.exports.useState({}),r=N(i,2),o=r[1];function s(c){var f=typeof c=="function"?c(a.current):c;f!==a.current&&t(f,a.current),a.current=f,o({})}return[a.current,s]}function dt(e){var t;return e instanceof Map?(t={},e.forEach(function(a,i){t[i]=a})):t=e,JSON.stringify(t)}var ft=n.exports.forwardRef(function(e,t){var a=e.position,i=e.prefixCls,r=e.extra;if(!r)return null;var o,s={};return Oe(r)==="object"&&!n.exports.isValidElement(r)?s=r:s.right=r,a==="right"&&(o=s.right),a==="left"&&(o=s.left),o?b("div",{className:"".concat(i,"-extra-content"),ref:t,children:o}):null}),se=function(t){var a=t.current||{},i=a.offsetWidth,r=i===void 0?0:i,o=a.offsetHeight,s=o===void 0?0:o;return[r,s]},Ne=function(t,a){return t[a?0:1]};function _t(e,t){var a,i=n.exports.useContext(Ee),r=i.prefixCls,o=i.tabs,s=e.className,c=e.style,f=e.id,m=e.animated,C=e.activeKey,d=e.rtl,h=e.extra,M=e.editable,y=e.locale,w=e.tabPosition,A=e.tabBarGutter,K=e.children,L=e.onTabClick,E=e.onTabScroll,O=n.exports.useRef(),B=n.exports.useRef(),W=n.exports.useRef(),z=n.exports.useRef(),g=n.exports.useRef(),u=n.exports.useRef(),T=n.exports.useRef(),P=Qt(),S=N(P,2),v=S[0],D=S[1],k=w==="top"||w==="bottom",le=ut(0,function(x,j){k&&E&&E({direction:x>j?"left":"right"})}),_=N(le,2),$=_[0],J=_[1],ue=ut(0,function(x,j){!k&&E&&E({direction:x>j?"top":"bottom"})}),ae=N(ue,2),l=ae[0],I=ae[1],X=n.exports.useState([0,0]),V=N(X,2),ne=V[0],ie=V[1],re=n.exports.useState([0,0]),de=N(re,2),ye=de[0],we=de[1],Ie=n.exports.useState([0,0]),fe=N(Ie,2),Me=fe[0],Le=fe[1],R=n.exports.useState([0,0]),ee=N(R,2),ve=ee[0],xt=ee[1],yt=Ft(new Map),Ve=N(yt,2),gt=Ve[0],St=Ve[1],ge=Ht(o,gt,ye[0]),oe=Ne(ne,k),q=Ne(ye,k),Ae=Ne(Me,k),Fe=Ne(ve,k),Ct=oe<q+Ae,Y=Ct?oe-Fe:oe-Ae,Tt="".concat(r,"-nav-operations-hidden"),pe=0,be=0;k&&d?(pe=0,be=Math.max(0,q-Y)):(pe=Math.min(0,Y-q),be=0);function Be(x){return x<pe?pe:x>be?be:x}var Ue=n.exports.useRef(),Rt=n.exports.useState(),je=N(Rt,2),Se=je[0],He=je[1];function De(){He(Date.now())}function Ke(){window.clearTimeout(Ue.current)}qt(z,function(x,j){function p(F,Q){F(function(Te){var Re=Be(Te+Q);return Re})}return oe>=q?!1:(k?p(J,x):p(I,j),Ke(),De(),!0)}),n.exports.useEffect(function(){return Ke(),Se&&(Ue.current=window.setTimeout(function(){He(0)},100)),Ke},[Se]);var Nt=Gt(ge,Y,k?$:l,q,Ae,Fe,H(H({},e),{},{tabs:o})),Ge=N(Nt,2),Pt=Ge[0],kt=Ge[1],Xe=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:C,p=ge.get(j)||{width:0,height:0,left:0,right:0,top:0};if(k){var F=$;d?p.right<$?F=p.right:p.right+p.width>$+Y&&(F=p.right+p.width-Y):p.left<-$?F=-p.left:p.left+p.width>-$+Y&&(F=-(p.left+p.width-Y)),I(0),J(Be(F))}else{var Q=l;p.top<-l?Q=-p.top:p.top+p.height>-l+Y&&(Q=-(p.top+p.height-Y)),J(0),I(Be(Q))}},Ce={};w==="top"||w==="bottom"?Ce[d?"marginRight":"marginLeft"]=A:Ce.marginTop=A;var Ye=o.map(function(x,j){var p=x.key;return b(jt,{id:f,prefixCls:r,tab:x,style:j===0?void 0:Ce,closable:x.closable,editable:M,active:p===C,renderWrapper:K,removeAriaLabel:y==null?void 0:y.removeAriaLabel,ref:v(p),onClick:function(Q){L(p,Q)},onRemove:function(){D(p)},onFocus:function(){Xe(p),De(),z.current&&(d||(z.current.scrollLeft=0),z.current.scrollTop=0)}},p)}),ze=mt(function(){var x=se(O),j=se(B),p=se(W);ie([x[0]-j[0]-p[0],x[1]-j[1]-p[1]]);var F=se(T);Le(F);var Q=se(u);xt(Q);var Te=se(g);we([Te[0]-F[0],Te[1]-F[1]]),St(function(){var Re=new Map;return o.forEach(function(At){var at=At.key,he=v(at).current;he&&Re.set(at,{width:he.offsetWidth,height:he.offsetHeight,left:he.offsetLeft,top:he.offsetTop})}),Re})}),Et=o.slice(0,Pt),wt=o.slice(kt+1),Ze=[].concat(nt(Et),nt(wt)),It=n.exports.useState(),Je=N(It,2),Mt=Je[0],Lt=Je[1],te=ge.get(C),qe=n.exports.useRef();function Qe(){xe.cancel(qe.current)}n.exports.useEffect(function(){var x={};return te&&(k?(d?x.right=te.right:x.left=te.left,x.width=te.width):(x.top=te.top,x.height=te.height)),Qe(),qe.current=xe(function(){Lt(x)}),Qe},[te,k,d]),n.exports.useEffect(function(){Xe()},[C,dt(te),dt(ge),k]),n.exports.useEffect(function(){ze()},[d]);var _e=!!Ze.length,me="".concat(r,"-nav-wrap"),$e,We,et,tt;return k?d?(We=$>0,$e=$+oe<q):($e=$<0,We=-$+oe<q):(et=l<0,tt=-l+oe<q),b(ot,{onResize:ze,children:ce("div",{ref:Bt(t,O),role:"tablist",className:G("".concat(r,"-nav"),s),style:c,onKeyDown:function(){De()},children:[b(ft,{ref:B,position:"left",extra:h,prefixCls:r}),b("div",{className:G(me,(a={},U(a,"".concat(me,"-ping-left"),$e),U(a,"".concat(me,"-ping-right"),We),U(a,"".concat(me,"-ping-top"),et),U(a,"".concat(me,"-ping-bottom"),tt),a)),ref:z,children:b(ot,{onResize:ze,children:ce("div",{ref:g,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat($,"px, ").concat(l,"px)"),transition:Se?"none":void 0},children:[Ye,b(ht,{ref:T,prefixCls:r,locale:y,editable:M,style:H(H({},Ye.length===0?void 0:Ce),{},{visibility:_e?"hidden":null})}),b("div",{className:G("".concat(r,"-ink-bar"),U({},"".concat(r,"-ink-bar-animated"),m.inkBar)),style:Mt})]})})}),b(Zt,{...e,removeAriaLabel:y==null?void 0:y.removeAriaLabel,ref:u,prefixCls:r,tabs:Ze,className:!_e&&Tt,tabMoving:!!Se}),b(ft,{ref:W,position:"right",extra:h,prefixCls:r})]})})}const vt=n.exports.forwardRef(_t);var ea=["renderTabBar"],ta=["label","key"];function aa(e){var t=e.renderTabBar,a=ke(e,ea),i=n.exports.useContext(Ee),r=i.tabs;if(t){var o=H(H({},a),{},{panes:r.map(function(s){var c=s.label,f=s.key,m=ke(s,ta);return b(bt,{tab:c,tabKey:f,...m},f)})});return t(o,vt)}return b(vt,{...a})}function na(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=H({inkBar:!0},Oe(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var ra=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],pt=0;function oa(e,t){var a,i=e.id,r=e.prefixCls,o=r===void 0?"rc-tabs":r,s=e.className,c=e.items,f=e.direction,m=e.activeKey,C=e.defaultActiveKey,d=e.editable,h=e.animated,M=e.tabPosition,y=M===void 0?"top":M,w=e.tabBarGutter,A=e.tabBarStyle,K=e.tabBarExtraContent,L=e.locale,E=e.moreIcon,O=e.moreTransitionName,B=e.destroyInactiveTabPane,W=e.renderTabBar,z=e.onChange,g=e.onTabClick,u=e.onTabScroll,T=e.getPopupContainer,P=e.popupClassName,S=ke(e,ra),v=n.exports.useMemo(function(){return(c||[]).filter(function(R){return R&&Oe(R)==="object"&&"key"in R})},[c]),D=f==="rtl",k=na(h),le=n.exports.useState(!1),_=N(le,2),$=_[0],J=_[1];n.exports.useEffect(function(){J(Dt())},[]);var ue=rt(function(){var R;return(R=v[0])===null||R===void 0?void 0:R.key},{value:m,defaultValue:C}),ae=N(ue,2),l=ae[0],I=ae[1],X=n.exports.useState(function(){return v.findIndex(function(R){return R.key===l})}),V=N(X,2),ne=V[0],ie=V[1];n.exports.useEffect(function(){var R=v.findIndex(function(ve){return ve.key===l});if(R===-1){var ee;R=Math.max(0,Math.min(ne,v.length-1)),I((ee=v[R])===null||ee===void 0?void 0:ee.key)}ie(R)},[v.map(function(R){return R.key}).join("_"),l,ne]);var re=rt(null,{value:i}),de=N(re,2),ye=de[0],we=de[1];n.exports.useEffect(function(){i||(we("rc-tabs-".concat(pt)),pt+=1)},[]);function Ie(R,ee){g==null||g(R,ee);var ve=R!==l;I(R),ve&&(z==null||z(R))}var fe={id:ye,activeKey:l,animated:k,tabPosition:y,rtl:D,mobile:$},Me,Le=H(H({},fe),{},{editable:d,locale:L,moreIcon:E,moreTransitionName:O,tabBarGutter:w,onTabClick:Ie,onTabScroll:u,extra:K,style:A,panes:null,getPopupContainer:T,popupClassName:P});return b(Ee.Provider,{value:{tabs:v,prefixCls:o},children:ce("div",{ref:t,id:i,className:G(o,"".concat(o,"-").concat(y),(a={},U(a,"".concat(o,"-mobile"),$),U(a,"".concat(o,"-editable"),d),U(a,"".concat(o,"-rtl"),D),a),s),...S,children:[Me,b(aa,{...Le,renderTabBar:W}),b(Vt,{destroyInactiveTabPane:B,...fe,animated:k})]})})}var ba=n.exports.forwardRef(oa);export{ba as F};

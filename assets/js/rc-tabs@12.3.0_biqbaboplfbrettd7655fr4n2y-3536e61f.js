import{d as U,b as Pe,a as H,c as N,_ as Oe,e as nt}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as n}from"./react@18.2.0-9cdefec6.js";import{c as G}from"./classnames@2.3.2-d75d9a59.js";import{e as ye,K as Z,b as Bt,A as Dt,f as rt}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-ae37cd3a.js";import{C as Kt}from"./rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y-c6acc879.js";import{j as m,b as ce}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-7910088d.js";import{R as ot}from"./rc-resize-observer@1.2.0_biqbaboplfbrettd7655fr4n2y-ca5d3367.js";import{E as zt,M as $t}from"./rc-menu@9.7.2_biqbaboplfbrettd7655fr4n2y-101d13a1.js";import{D as Wt}from"./rc-dropdown@4.0.1_biqbaboplfbrettd7655fr4n2y-dfe0caa9.js";const ke=n.createContext(null);var mt=n.forwardRef(function(e,t){var a=e.prefixCls,i=e.className,r=e.style,o=e.id,s=e.active,c=e.tabKey,f=e.children;return m("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!s,style:r,className:G(a,s&&"".concat(a,"-active"),i),ref:t,children:f})}),Ot=["key","forceRender","style","className"];function Vt(e){var t=e.id,a=e.activeKey,i=e.animated,r=e.tabPosition,o=e.destroyInactiveTabPane,s=n.useContext(ke),c=s.prefixCls,f=s.tabs,p=i.tabPane,C="".concat(c,"-tabpane");return m("div",{className:G("".concat(c,"-content-holder")),children:m("div",{className:G("".concat(c,"-content"),"".concat(c,"-content-").concat(r),U({},"".concat(c,"-content-animated"),p)),children:f.map(function(d){var h=d.key,M=d.forceRender,g=d.style,w=d.className,A=Pe(d,Ot),K=h===a;return m(Kt,{visible:K,forceRender:M,removeOnLeave:!!o,leavedClassName:"".concat(C,"-hidden"),...i.tabPaneMotion,children:function(L,k){var O=L.style,B=L.className;return m(mt,{...A,prefixCls:C,id:t,tabKey:h,animated:p,active:K,style:H(H({},g),O),className:G(w,B),ref:k})}},h)})})})}function pt(e){var t=n.useRef(),a=n.useRef(!1);function i(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];a.current||(ye.cancel(t.current),t.current=ye(function(){e.apply(void 0,o)}))}return n.useEffect(function(){return a.current=!1,function(){a.current=!0,ye.cancel(t.current)}},[]),i}function Ft(e){var t=n.useRef([]),a=n.useState({}),i=N(a,2),r=i[1],o=n.useRef(typeof e=="function"?e():e),s=pt(function(){var f=o.current;t.current.forEach(function(p){f=p(f)}),t.current=[],o.current=f,r({})});function c(f){t.current.push(f),s()}return[o.current,c]}function Ut(e,t){var a,i=e.prefixCls,r=e.id,o=e.active,s=e.tab,c=s.key,f=s.label,p=s.disabled,C=s.closeIcon,d=e.closable,h=e.renderWrapper,M=e.removeAriaLabel,g=e.editable,w=e.onClick,A=e.onRemove,K=e.onFocus,L=e.style,k="".concat(i,"-tab");n.useEffect(function(){return A},[]);var O=g&&d!==!1&&!p;function B(S){p||w(S)}function W(S){S.preventDefault(),S.stopPropagation(),g.onEdit("remove",{key:c,event:S})}var z=ce("div",{ref:t,className:G(k,(a={},U(a,"".concat(k,"-with-remove"),O),U(a,"".concat(k,"-active"),o),U(a,"".concat(k,"-disabled"),p),a)),style:L,onClick:B,children:[m("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(k,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":p,tabIndex:p?null:0,onClick:function(u){u.stopPropagation(),B(u)},onKeyDown:function(u){[Z.SPACE,Z.ENTER].includes(u.which)&&(u.preventDefault(),B(u))},onFocus:K,children:f}),O&&m("button",{type:"button","aria-label":M||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(u){u.stopPropagation(),W(u)},children:C||g.removeIcon||"\xD7"})]},c);return h?h(z):z}const jt=n.forwardRef(Ut);var it={width:0,height:0,left:0,top:0};function Ht(e,t,a){return n.useMemo(function(){for(var i,r=new Map,o=t.get((i=e[0])===null||i===void 0?void 0:i.key)||it,s=o.left+o.width,c=0;c<e.length;c+=1){var f=e[c].key,p=t.get(f);if(!p){var C;p=t.get((C=e[c-1])===null||C===void 0?void 0:C.key)||it}var d=r.get(f)||H({},p);d.right=s-d.left-d.width,r.set(f,d)}return r},[e.map(function(i){return i.key}).join("_"),t,a])}var st={width:0,height:0,left:0,top:0,right:0};function Gt(e,t,a,i,r,o,s){var c=s.tabs,f=s.tabPosition,p=s.rtl,C,d,h;return["top","bottom"].includes(f)?(C="width",d=p?"right":"left",h=Math.abs(a)):(C="height",d="top",h=-a),n.useMemo(function(){if(!c.length)return[0,0];for(var M=c.length,g=M,w=0;w<M;w+=1){var A=e.get(c[w].key)||st;if(A[d]+A[C]>h+t){g=w-1;break}}for(var K=0,L=M-1;L>=0;L-=1){var k=e.get(c[L].key)||st;if(k[d]<h){K=L+1;break}}return[K,g]},[e,t,i,r,o,h,f,c.map(function(M){return M.key}).join("_"),p])}function Xt(e,t){var a=e.prefixCls,i=e.editable,r=e.locale,o=e.style;return!i||i.showAdd===!1?null:m("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(r==null?void 0:r.addAriaLabel)||"Add tab",onClick:function(c){i.onEdit("add",{event:c})},children:i.addIcon||"+"})}const ht=n.forwardRef(Xt);function Yt(e,t){var a=e.prefixCls,i=e.id,r=e.tabs,o=e.locale,s=e.mobile,c=e.moreIcon,f=c===void 0?"More":c,p=e.moreTransitionName,C=e.style,d=e.className,h=e.editable,M=e.tabBarGutter,g=e.rtl,w=e.removeAriaLabel,A=e.onTabClick,K=e.getPopupContainer,L=e.popupClassName,k=n.useState(!1),O=N(k,2),B=O[0],W=O[1],z=n.useState(null),S=N(z,2),u=S[0],T=S[1],E="".concat(i,"-more-popup"),x="".concat(a,"-dropdown"),v=u!==null?"".concat(E,"-").concat(u):null,D=o==null?void 0:o.dropdownAriaLabel;function P(l,I){l.preventDefault(),l.stopPropagation(),h.onEdit("remove",{key:I,event:l})}var le=m(zt,{onClick:function(I){var X=I.key,V=I.domEvent;A(X,V),W(!1)},prefixCls:"".concat(x,"-menu"),id:E,tabIndex:-1,role:"listbox","aria-activedescendant":v,selectedKeys:[u],"aria-label":D!==void 0?D:"expanded dropdown",children:r.map(function(l){var I=h&&l.closable!==!1&&!l.disabled;return ce($t,{id:"".concat(E,"-").concat(l.key),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(l.key),disabled:l.disabled,children:[m("span",{children:l.label}),I&&m("button",{type:"button","aria-label":w||"remove",tabIndex:0,className:"".concat(x,"-menu-item-remove"),onClick:function(V){V.stopPropagation(),P(V,l.key)},children:l.closeIcon||h.removeIcon||"\xD7"})]},l.key)})});function _(l){for(var I=r.filter(function(re){return!re.disabled}),X=I.findIndex(function(re){return re.key===u})||0,V=I.length,ne=0;ne<V;ne+=1){X=(X+l+V)%V;var ie=I[X];if(!ie.disabled){T(ie.key);return}}}function $(l){var I=l.which;if(!B){[Z.DOWN,Z.SPACE,Z.ENTER].includes(I)&&(W(!0),l.preventDefault());return}switch(I){case Z.UP:_(-1),l.preventDefault();break;case Z.DOWN:_(1),l.preventDefault();break;case Z.ESC:W(!1);break;case Z.SPACE:case Z.ENTER:u!==null&&A(u,l);break}}n.useEffect(function(){var l=document.getElementById(v);l&&l.scrollIntoView&&l.scrollIntoView(!1)},[u]),n.useEffect(function(){B||T(null)},[B]);var J=U({},g?"marginRight":"marginLeft",M);r.length||(J.visibility="hidden",J.order=1);var ue=G(U({},"".concat(x,"-rtl"),g)),ae=s?null:m(Wt,{prefixCls:x,overlay:le,trigger:["hover"],visible:r.length?B:!1,transitionName:p,onVisibleChange:W,overlayClassName:G(ue,L),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:K,children:m("button",{type:"button",className:"".concat(a,"-nav-more"),style:J,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":E,id:"".concat(i,"-more"),"aria-expanded":B,onKeyDown:$,children:f})});return ce("div",{className:G("".concat(a,"-nav-operations"),d),style:C,ref:t,children:[ae,m(ht,{prefixCls:a,locale:o,editable:h})]})}const Zt=n.memo(n.forwardRef(Yt),function(e,t){return t.tabMoving});var Jt=.1,ct=.01,Ee=20,lt=Math.pow(.995,Ee);function qt(e,t){var a=n.useState(),i=N(a,2),r=i[0],o=i[1],s=n.useState(0),c=N(s,2),f=c[0],p=c[1],C=n.useState(0),d=N(C,2),h=d[0],M=d[1],g=n.useState(),w=N(g,2),A=w[0],K=w[1],L=n.useRef();function k(u){var T=u.touches[0],E=T.screenX,x=T.screenY;o({x:E,y:x}),window.clearInterval(L.current)}function O(u){if(!!r){u.preventDefault();var T=u.touches[0],E=T.screenX,x=T.screenY;o({x:E,y:x});var v=E-r.x,D=x-r.y;t(v,D);var P=Date.now();p(P),M(P-f),K({x:v,y:D})}}function B(){if(!!r&&(o(null),K(null),A)){var u=A.x/h,T=A.y/h,E=Math.abs(u),x=Math.abs(T);if(Math.max(E,x)<Jt)return;var v=u,D=T;L.current=window.setInterval(function(){if(Math.abs(v)<ct&&Math.abs(D)<ct){window.clearInterval(L.current);return}v*=lt,D*=lt,t(v*Ee,D*Ee)},Ee)}}var W=n.useRef();function z(u){var T=u.deltaX,E=u.deltaY,x=0,v=Math.abs(T),D=Math.abs(E);v===D?x=W.current==="x"?T:E:v>D?(x=T,W.current="x"):(x=E,W.current="y"),t(-x,-x)&&u.preventDefault()}var S=n.useRef(null);S.current={onTouchStart:k,onTouchMove:O,onTouchEnd:B,onWheel:z},n.useEffect(function(){function u(v){S.current.onTouchStart(v)}function T(v){S.current.onTouchMove(v)}function E(v){S.current.onTouchEnd(v)}function x(v){S.current.onWheel(v)}return document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",E,{passive:!1}),e.current.addEventListener("touchstart",u,{passive:!1}),e.current.addEventListener("wheel",x),function(){document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E)}},[])}function Qt(){var e=n.useRef(new Map);function t(i){return e.current.has(i)||e.current.set(i,n.createRef()),e.current.get(i)}function a(i){e.current.delete(i)}return[t,a]}function ut(e,t){var a=n.useRef(e),i=n.useState({}),r=N(i,2),o=r[1];function s(c){var f=typeof c=="function"?c(a.current):c;f!==a.current&&t(f,a.current),a.current=f,o({})}return[a.current,s]}function dt(e){var t;return e instanceof Map?(t={},e.forEach(function(a,i){t[i]=a})):t=e,JSON.stringify(t)}var ft=n.forwardRef(function(e,t){var a=e.position,i=e.prefixCls,r=e.extra;if(!r)return null;var o,s={};return Oe(r)==="object"&&!n.isValidElement(r)?s=r:s.right=r,a==="right"&&(o=s.right),a==="left"&&(o=s.left),o?m("div",{className:"".concat(i,"-extra-content"),ref:t,children:o}):null}),se=function(t){var a=t.current||{},i=a.offsetWidth,r=i===void 0?0:i,o=a.offsetHeight,s=o===void 0?0:o;return[r,s]},Ne=function(t,a){return t[a?0:1]};function _t(e,t){var a,i=n.useContext(ke),r=i.prefixCls,o=i.tabs,s=e.className,c=e.style,f=e.id,p=e.animated,C=e.activeKey,d=e.rtl,h=e.extra,M=e.editable,g=e.locale,w=e.tabPosition,A=e.tabBarGutter,K=e.children,L=e.onTabClick,k=e.onTabScroll,O=n.useRef(),B=n.useRef(),W=n.useRef(),z=n.useRef(),S=n.useRef(),u=n.useRef(),T=n.useRef(),E=Qt(),x=N(E,2),v=x[0],D=x[1],P=w==="top"||w==="bottom",le=ut(0,function(y,j){P&&k&&k({direction:y>j?"left":"right"})}),_=N(le,2),$=_[0],J=_[1],ue=ut(0,function(y,j){!P&&k&&k({direction:y>j?"top":"bottom"})}),ae=N(ue,2),l=ae[0],I=ae[1],X=n.useState([0,0]),V=N(X,2),ne=V[0],ie=V[1],re=n.useState([0,0]),de=N(re,2),ge=de[0],we=de[1],Ie=n.useState([0,0]),fe=N(Ie,2),Me=fe[0],Le=fe[1],R=n.useState([0,0]),ee=N(R,2),ve=ee[0],yt=ee[1],gt=Ft(new Map),Ve=N(gt,2),St=Ve[0],xt=Ve[1],Se=Ht(o,St,ge[0]),oe=Ne(ne,P),q=Ne(ge,P),Ae=Ne(Me,P),Fe=Ne(ve,P),Ct=oe<q+Ae,Y=Ct?oe-Fe:oe-Ae,Tt="".concat(r,"-nav-operations-hidden"),be=0,me=0;P&&d?(be=0,me=Math.max(0,q-Y)):(be=Math.min(0,Y-q),me=0);function Be(y){return y<be?be:y>me?me:y}var Ue=n.useRef(),Rt=n.useState(),je=N(Rt,2),xe=je[0],He=je[1];function De(){He(Date.now())}function Ke(){window.clearTimeout(Ue.current)}qt(z,function(y,j){function b(F,Q){F(function(Te){var Re=Be(Te+Q);return Re})}return oe>=q?!1:(P?b(J,y):b(I,j),Ke(),De(),!0)}),n.useEffect(function(){return Ke(),xe&&(Ue.current=window.setTimeout(function(){He(0)},100)),Ke},[xe]);var Nt=Gt(Se,Y,P?$:l,q,Ae,Fe,H(H({},e),{},{tabs:o})),Ge=N(Nt,2),Et=Ge[0],Pt=Ge[1],Xe=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:C,b=Se.get(j)||{width:0,height:0,left:0,right:0,top:0};if(P){var F=$;d?b.right<$?F=b.right:b.right+b.width>$+Y&&(F=b.right+b.width-Y):b.left<-$?F=-b.left:b.left+b.width>-$+Y&&(F=-(b.left+b.width-Y)),I(0),J(Be(F))}else{var Q=l;b.top<-l?Q=-b.top:b.top+b.height>-l+Y&&(Q=-(b.top+b.height-Y)),J(0),I(Be(Q))}},Ce={};w==="top"||w==="bottom"?Ce[d?"marginRight":"marginLeft"]=A:Ce.marginTop=A;var Ye=o.map(function(y,j){var b=y.key;return m(jt,{id:f,prefixCls:r,tab:y,style:j===0?void 0:Ce,closable:y.closable,editable:M,active:b===C,renderWrapper:K,removeAriaLabel:g==null?void 0:g.removeAriaLabel,ref:v(b),onClick:function(Q){L(b,Q)},onRemove:function(){D(b)},onFocus:function(){Xe(b),De(),z.current&&(d||(z.current.scrollLeft=0),z.current.scrollTop=0)}},b)}),ze=pt(function(){var y=se(O),j=se(B),b=se(W);ie([y[0]-j[0]-b[0],y[1]-j[1]-b[1]]);var F=se(T);Le(F);var Q=se(u);yt(Q);var Te=se(S);we([Te[0]-F[0],Te[1]-F[1]]),xt(function(){var Re=new Map;return o.forEach(function(At){var at=At.key,he=v(at).current;he&&Re.set(at,{width:he.offsetWidth,height:he.offsetHeight,left:he.offsetLeft,top:he.offsetTop})}),Re})}),kt=o.slice(0,Et),wt=o.slice(Pt+1),Ze=[].concat(nt(kt),nt(wt)),It=n.useState(),Je=N(It,2),Mt=Je[0],Lt=Je[1],te=Se.get(C),qe=n.useRef();function Qe(){ye.cancel(qe.current)}n.useEffect(function(){var y={};return te&&(P?(d?y.right=te.right:y.left=te.left,y.width=te.width):(y.top=te.top,y.height=te.height)),Qe(),qe.current=ye(function(){Lt(y)}),Qe},[te,P,d]),n.useEffect(function(){Xe()},[C,dt(te),dt(Se),P]),n.useEffect(function(){ze()},[d]);var _e=!!Ze.length,pe="".concat(r,"-nav-wrap"),$e,We,et,tt;return P?d?(We=$>0,$e=$+oe<q):($e=$<0,We=-$+oe<q):(et=l<0,tt=-l+oe<q),m(ot,{onResize:ze,children:ce("div",{ref:Bt(t,O),role:"tablist",className:G("".concat(r,"-nav"),s),style:c,onKeyDown:function(){De()},children:[m(ft,{ref:B,position:"left",extra:h,prefixCls:r}),m("div",{className:G(pe,(a={},U(a,"".concat(pe,"-ping-left"),$e),U(a,"".concat(pe,"-ping-right"),We),U(a,"".concat(pe,"-ping-top"),et),U(a,"".concat(pe,"-ping-bottom"),tt),a)),ref:z,children:m(ot,{onResize:ze,children:ce("div",{ref:S,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat($,"px, ").concat(l,"px)"),transition:xe?"none":void 0},children:[Ye,m(ht,{ref:T,prefixCls:r,locale:g,editable:M,style:H(H({},Ye.length===0?void 0:Ce),{},{visibility:_e?"hidden":null})}),m("div",{className:G("".concat(r,"-ink-bar"),U({},"".concat(r,"-ink-bar-animated"),p.inkBar)),style:Mt})]})})}),m(Zt,{...e,removeAriaLabel:g==null?void 0:g.removeAriaLabel,ref:u,prefixCls:r,tabs:Ze,className:!_e&&Tt,tabMoving:!!xe}),m(ft,{ref:W,position:"right",extra:h,prefixCls:r})]})})}const vt=n.forwardRef(_t);var ea=["renderTabBar"],ta=["label","key"];function aa(e){var t=e.renderTabBar,a=Pe(e,ea),i=n.useContext(ke),r=i.tabs;if(t){var o=H(H({},a),{},{panes:r.map(function(s){var c=s.label,f=s.key,p=Pe(s,ta);return m(mt,{tab:c,tabKey:f,...p},f)})});return t(o,vt)}return m(vt,{...a})}function na(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=H({inkBar:!0},Oe(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var ra=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],bt=0;function oa(e,t){var a,i=e.id,r=e.prefixCls,o=r===void 0?"rc-tabs":r,s=e.className,c=e.items,f=e.direction,p=e.activeKey,C=e.defaultActiveKey,d=e.editable,h=e.animated,M=e.tabPosition,g=M===void 0?"top":M,w=e.tabBarGutter,A=e.tabBarStyle,K=e.tabBarExtraContent,L=e.locale,k=e.moreIcon,O=e.moreTransitionName,B=e.destroyInactiveTabPane,W=e.renderTabBar,z=e.onChange,S=e.onTabClick,u=e.onTabScroll,T=e.getPopupContainer,E=e.popupClassName,x=Pe(e,ra),v=n.useMemo(function(){return(c||[]).filter(function(R){return R&&Oe(R)==="object"&&"key"in R})},[c]),D=f==="rtl",P=na(h),le=n.useState(!1),_=N(le,2),$=_[0],J=_[1];n.useEffect(function(){J(Dt())},[]);var ue=rt(function(){var R;return(R=v[0])===null||R===void 0?void 0:R.key},{value:p,defaultValue:C}),ae=N(ue,2),l=ae[0],I=ae[1],X=n.useState(function(){return v.findIndex(function(R){return R.key===l})}),V=N(X,2),ne=V[0],ie=V[1];n.useEffect(function(){var R=v.findIndex(function(ve){return ve.key===l});if(R===-1){var ee;R=Math.max(0,Math.min(ne,v.length-1)),I((ee=v[R])===null||ee===void 0?void 0:ee.key)}ie(R)},[v.map(function(R){return R.key}).join("_"),l,ne]);var re=rt(null,{value:i}),de=N(re,2),ge=de[0],we=de[1];n.useEffect(function(){i||(we("rc-tabs-".concat(bt)),bt+=1)},[]);function Ie(R,ee){S==null||S(R,ee);var ve=R!==l;I(R),ve&&(z==null||z(R))}var fe={id:ge,activeKey:l,animated:P,tabPosition:g,rtl:D,mobile:$},Me,Le=H(H({},fe),{},{editable:d,locale:L,moreIcon:k,moreTransitionName:O,tabBarGutter:w,onTabClick:Ie,onTabScroll:u,extra:K,style:A,panes:null,getPopupContainer:T,popupClassName:E});return m(ke.Provider,{value:{tabs:v,prefixCls:o},children:ce("div",{ref:t,id:i,className:G(o,"".concat(o,"-").concat(g),(a={},U(a,"".concat(o,"-mobile"),$),U(a,"".concat(o,"-editable"),d),U(a,"".concat(o,"-rtl"),D),a),s),...x,children:[Me,m(aa,{...Le,renderTabBar:W}),m(Vt,{destroyInactiveTabPane:B,...fe,animated:P})]})})}var ma=n.forwardRef(oa);export{ma as F};

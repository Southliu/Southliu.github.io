import{b as q,a as E,e as ge,d as R,g as gn,h as bn,i as In,j as yn,_ as Mn,c as U}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as i}from"./react@18.2.0-44b760b7.js";import{c as pe}from"./classnames@2.3.2-d75d9a59.js";import{s as Et}from"./shallowequal@1.1.0-be60d069.js";import{d as Sn,w as Dt,o as Ot,K as re,t as Pn,e as Le,x as Rn,f as qe}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{F as ke}from"./rc-overflow@1.2.8_biqbaboplfbrettd7655fr4n2y-f578c107.js";import{j as p,b as $e}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";import{T as Kn}from"./rc-trigger@5.3.1_biqbaboplfbrettd7655fr4n2y-a0d11962.js";import{C as Nn}from"./rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y-81256ecd.js";var wn=["children","locked"],X=i.exports.createContext(null);function _n(n,e){var r=E({},n);return Object.keys(e).forEach(function(o){var t=e[o];t!==void 0&&(r[o]=t)}),r}function Te(n){var e=n.children,r=n.locked,o=q(n,wn),t=i.exports.useContext(X),l=Sn(function(){return _n(t,o)},[t,o],function(a,u){return!r&&(a[0]!==u[0]||!Et(a[1],u[1]))});return p(X.Provider,{value:l,children:e})}function At(n,e,r,o){var t=i.exports.useContext(X),l=t.activeKey,a=t.onActive,u=t.onInactive,s={active:l===n};return e||(s.onMouseEnter=function(c){r==null||r({key:n,domEvent:c}),a(n)},s.onMouseLeave=function(c){o==null||o({key:n,domEvent:c}),u(n)}),s}var En=["item"];function Xe(n){var e=n.item,r=q(n,En);return Object.defineProperty(r,"item",{get:function(){return Dt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),r}function Lt(n){var e=n.icon,r=n.props,o=n.children,t;return typeof e=="function"?t=i.exports.createElement(e,E({},r)):t=e,t||o||null}function kt(n){var e=i.exports.useContext(X),r=e.mode,o=e.rtl,t=e.inlineIndent;if(r!=="inline")return null;var l=n;return o?{paddingRight:l*t}:{paddingLeft:l*t}}var Dn=[],$t=i.exports.createContext(null);function Je(){return i.exports.useContext($t)}var Tt=i.exports.createContext(Dn);function Fe(n){var e=i.exports.useContext(Tt);return i.exports.useMemo(function(){return n!==void 0?[].concat(ge(e),[n]):e},[e,n])}var Ft=i.exports.createContext(null),Vt=i.exports.createContext(null);function dt(n,e){return n===void 0?null:"".concat(n,"-").concat(e)}function Ut(n){var e=i.exports.useContext(Vt);return dt(e,n)}var vt=i.exports.createContext({}),On=["title","attribute","elementRef"],An=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Ln=["active"],kn=function(n){gn(r,n);var e=bn(r);function r(){return In(this,r),e.apply(this,arguments)}return yn(r,[{key:"render",value:function(){var t=this.props,l=t.title,a=t.attribute,u=t.elementRef,s=q(t,On),c=Ot(s,["eventKey"]);return Dt(!a,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p(ke.Item,{...a,title:typeof l=="string"?l:void 0,...c,ref:u})}}]),r}(i.exports.Component),$n=function(e){var r,o=e.style,t=e.className,l=e.eventKey;e.warnKey;var a=e.disabled,u=e.itemIcon,s=e.children,c=e.role,v=e.onMouseEnter,N=e.onMouseLeave,h=e.onClick,K=e.onKeyDown,m=e.onFocus,b=q(e,An),y=Ut(l),I=i.exports.useContext(X),w=I.prefixCls,C=I.onItemClick,f=I.disabled,x=I.overflowDisabled,d=I.itemIcon,z=I.selectedKeys,M=I.onActive,j=i.exports.useContext(vt),H=j._internalRenderMenuItem,D="".concat(w,"-item"),$=i.exports.useRef(),J=i.exports.useRef(),G=f||a,A=Fe(l),O=function(L){return{key:l,keyPath:ge(A).reverse(),item:$.current,domEvent:L}},_=u||d,te=At(l,G,v,N),be=te.active,ae=q(te,Ln),Z=z.includes(l),oe=kt(A.length),ue=function(L){if(!G){var Q=O(L);h==null||h(Xe(Q)),C(Q)}},T=function(L){if(K==null||K(L),L.which===re.ENTER){var Q=O(L);h==null||h(Xe(Q)),C(Q)}},W=function(L){M(l),m==null||m(L)},se={};e.role==="option"&&(se["aria-selected"]=Z);var ce=$e(kn,{ref:$,elementRef:J,role:c===null?"none":c||"menuitem",tabIndex:a?null:-1,"data-menu-id":x&&y?null:y,...b,...ae,...se,component:"li","aria-disabled":a,style:E(E({},oe),o),className:pe(D,(r={},R(r,"".concat(D,"-active"),be),R(r,"".concat(D,"-selected"),Z),R(r,"".concat(D,"-disabled"),G),r),t),onClick:ue,onKeyDown:T,onFocus:W,children:[s,p(Lt,{props:E(E({},e),{},{isSelected:Z}),icon:_})]});return H&&(ce=H(ce,e,{selected:Z})),ce};function ft(n){var e=n.eventKey,r=Je(),o=Fe(e);return i.exports.useEffect(function(){if(r)return r.registerPath(e,o),function(){r.unregisterPath(e,o)}},[o]),r?null:p($n,{...n})}var Tn=["label","children","key","type"];function pt(n,e){return Pn(n).map(function(r,o){if(i.exports.isValidElement(r)){var t,l,a=r.key,u=(t=(l=r.props)===null||l===void 0?void 0:l.eventKey)!==null&&t!==void 0?t:a,s=u==null;s&&(u="tmp_key-".concat([].concat(ge(e),[o]).join("-")));var c={key:u,eventKey:u};return i.exports.cloneElement(r,c)}return r})}function it(n){return(n||[]).map(function(e,r){if(e&&Mn(e)==="object"){var o=e,t=o.label,l=o.children,a=o.key,u=o.type,s=q(o,Tn),c=a!=null?a:"tmp-".concat(r);return l||u==="group"?u==="group"?p(Gt,{...s,title:t,children:it(l)},c):p(ht,{...s,title:t,children:it(l)},c):u==="divider"?p(Wt,{...s},c):p(ft,{...s,children:t},c)}return null}).filter(function(e){return e})}function Fn(n,e,r){var o=n;return e&&(o=it(e)),pt(o,r)}function Ce(n){var e=i.exports.useRef(n);e.current=n;var r=i.exports.useCallback(function(){for(var o,t=arguments.length,l=new Array(t),a=0;a<t;a++)l[a]=arguments[a];return(o=e.current)===null||o===void 0?void 0:o.call.apply(o,[e].concat(l))},[]);return n?r:void 0}var Vn=["className","children"],Un=function(e,r){var o=e.className,t=e.children,l=q(e,Vn),a=i.exports.useContext(X),u=a.prefixCls,s=a.mode,c=a.rtl;return p("ul",{className:pe(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o),...l,"data-menu-list":!0,ref:r,children:t})},mt=i.exports.forwardRef(Un);mt.displayName="SubMenuList";var le={adjustX:1,adjustY:1},zn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},jn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:le,offset:[4,0]}};function zt(n,e,r){if(e)return e;if(r)return r[n]||r.other}var Hn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Gn(n){var e=n.prefixCls,r=n.visible,o=n.children,t=n.popup,l=n.popupClassName,a=n.popupOffset,u=n.disabled,s=n.mode,c=n.onVisibleChange,v=i.exports.useContext(X),N=v.getPopupContainer,h=v.rtl,K=v.subMenuOpenDelay,m=v.subMenuCloseDelay,b=v.builtinPlacements,y=v.triggerSubMenuAction,I=v.forceSubMenuRender,w=v.rootClassName,C=v.motion,f=v.defaultMotions,x=i.exports.useState(!1),d=U(x,2),z=d[0],M=d[1],j=h?E(E({},jn),b):E(E({},zn),b),H=Hn[s],D=zt(s,C,f),$=E(E({},D),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),J=i.exports.useRef();return i.exports.useEffect(function(){return J.current=Le(function(){M(r)}),function(){Le.cancel(J.current)}},[r]),p(Kn,{prefixCls:e,popupClassName:pe("".concat(e,"-popup"),R({},"".concat(e,"-rtl"),h),l,w),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:N,builtinPlacements:j,popupPlacement:H,popupVisible:z,popup:t,popupAlign:a&&{offset:a},action:u?[]:[y],mouseEnterDelay:K,mouseLeaveDelay:m,onPopupVisibleChange:c,forceRender:I,popupMotion:$,children:o})}function Wn(n){var e=n.id,r=n.open,o=n.keyPath,t=n.children,l="inline",a=i.exports.useContext(X),u=a.prefixCls,s=a.forceSubMenuRender,c=a.motion,v=a.defaultMotions,N=a.mode,h=i.exports.useRef(!1);h.current=N===l;var K=i.exports.useState(!h.current),m=U(K,2),b=m[0],y=m[1],I=h.current?r:!1;i.exports.useEffect(function(){h.current&&y(!1)},[N]);var w=E({},zt(l,c,v));o.length>1&&(w.motionAppear=!1);var C=w.onVisibleChanged;return w.onVisibleChanged=function(f){return!h.current&&!f&&y(!0),C==null?void 0:C(f)},b?null:p(Te,{mode:l,locked:!h.current,children:p(Nn,{visible:I,...w,forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden"),children:function(f){var x=f.className,d=f.style;return p(mt,{id:e,className:x,style:d,children:t})}})})}var qn=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Yn=["active"],Bn=function(e){var r,o=e.style,t=e.className,l=e.title,a=e.eventKey;e.warnKey;var u=e.disabled,s=e.internalPopupClose,c=e.children,v=e.itemIcon,N=e.expandIcon,h=e.popupClassName,K=e.popupOffset,m=e.onClick,b=e.onMouseEnter,y=e.onMouseLeave,I=e.onTitleClick,w=e.onTitleMouseEnter,C=e.onTitleMouseLeave,f=q(e,qn),x=Ut(a),d=i.exports.useContext(X),z=d.prefixCls,M=d.mode,j=d.openKeys,H=d.disabled,D=d.overflowDisabled,$=d.activeKey,J=d.selectedKeys,G=d.itemIcon,A=d.expandIcon,O=d.onItemClick,_=d.onOpenChange,te=d.onActive,be=i.exports.useContext(vt),ae=be._internalRenderSubMenuItem,Z=i.exports.useContext(Ft),oe=Z.isSubPathKey,ue=Fe(),T="".concat(z,"-submenu"),W=H||u,se=i.exports.useRef(),ce=i.exports.useRef(),de=v||G,L=N||A,Q=j.includes(a),ne=!D&&Q,Ve=oe(J,a),Ue=At(a,W,w,C),Ie=Ue.active,ye=q(Ue,Yn),Me=i.exports.useState(!1),ze=U(Me,2),Se=ze[0],je=ze[1],He=function(k){W||je(k)},ee=function(k){He(!0),b==null||b({key:a,domEvent:k})},Qe=function(k){He(!1),y==null||y({key:a,domEvent:k})},Pe=i.exports.useMemo(function(){return Ie||(M!=="inline"?Se||oe([$],a):!1)},[M,Ie,$,Se,a,oe]),Ge=kt(ue.length),et=function(k){W||(I==null||I({key:a,domEvent:k}),M==="inline"&&_(a,!Q))},me=Ce(function(Y){m==null||m(Xe(Y)),O(Y)}),Re=function(k){M!=="inline"&&_(a,k)},Ke=function(){te(a)},Ne=x&&"".concat(x,"-popup"),he=$e("div",{role:"menuitem",style:Ge,className:"".concat(T,"-title"),tabIndex:W?null:-1,ref:se,title:typeof l=="string"?l:null,"data-menu-id":D&&x?null:x,"aria-expanded":ne,"aria-haspopup":!0,"aria-controls":Ne,"aria-disabled":W,onClick:et,onFocus:Ke,...ye,children:[l,p(Lt,{icon:M!=="horizontal"?L:null,props:E(E({},e),{},{isOpen:ne,isSubMenu:!0}),children:p("i",{className:"".concat(T,"-arrow")})})]}),F=i.exports.useRef(M);if(M!=="inline"&&ue.length>1?F.current="vertical":F.current=M,!D){var we=F.current;he=p(Gn,{mode:we,prefixCls:T,visible:!s&&ne&&M!=="inline",popupClassName:h,popupOffset:K,popup:p(Te,{mode:we==="horizontal"?"vertical":we,children:p(mt,{id:Ne,ref:ce,children:c})}),disabled:W,onVisibleChange:Re,children:he})}var _e=$e(ke.Item,{role:"none",...f,component:"li",style:o,className:pe(T,"".concat(T,"-").concat(M),t,(r={},R(r,"".concat(T,"-open"),ne),R(r,"".concat(T,"-active"),Pe),R(r,"".concat(T,"-selected"),Ve),R(r,"".concat(T,"-disabled"),W),r)),onMouseEnter:ee,onMouseLeave:Qe,children:[he,!D&&p(Wn,{id:Ne,open:ne,keyPath:ue,children:c})]});return ae&&(_e=ae(_e,e,{selected:Ve,active:Pe,open:ne,disabled:W})),p(Te,{onItemClick:me,mode:M==="horizontal"?"vertical":M,itemIcon:de,expandIcon:L,children:_e})};function ht(n){var e=n.eventKey,r=n.children,o=Fe(e),t=pt(r,o),l=Je();i.exports.useEffect(function(){if(l)return l.registerPath(e,o),function(){l.unregisterPath(e,o)}},[o]);var a;return l?a=t:a=p(Bn,{...n,children:t}),p(Tt.Provider,{value:o,children:a})}var lt=re.LEFT,ut=re.RIGHT,st=re.UP,Ye=re.DOWN,Be=re.ENTER,jt=re.ESC,Oe=re.HOME,Ae=re.END,Kt=[st,Ye,lt,ut];function Xn(n,e,r,o){var t,l,a,u,s="prev",c="next",v="children",N="parent";if(n==="inline"&&o===Be)return{inlineTrigger:!0};var h=(t={},R(t,st,s),R(t,Ye,c),t),K=(l={},R(l,lt,r?c:s),R(l,ut,r?s:c),R(l,Ye,v),R(l,Be,v),l),m=(a={},R(a,st,s),R(a,Ye,c),R(a,Be,v),R(a,jt,N),R(a,lt,r?v:N),R(a,ut,r?N:v),a),b={inline:h,horizontal:K,vertical:m,inlineSub:h,horizontalSub:m,verticalSub:m},y=(u=b["".concat(n).concat(e?"":"Sub")])===null||u===void 0?void 0:u[o];switch(y){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case N:return{offset:-1,sibling:!1};case v:return{offset:1,sibling:!1};default:return null}}function Jn(n){for(var e=n;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function Zn(n,e){for(var r=n||document.activeElement;r;){if(e.has(r))return r;r=r.parentElement}return null}function Ht(n,e){var r=Rn(n,!0);return r.filter(function(o){return e.has(o)})}function Nt(n,e,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var t=Ht(n,e),l=t.length,a=t.findIndex(function(u){return r===u});return o<0?a===-1?a=l-1:a-=1:o>0&&(a+=1),a=(a+l)%l,t[a]}function Qn(n,e,r,o,t,l,a,u,s,c){var v=i.exports.useRef(),N=i.exports.useRef();N.current=e;var h=function(){Le.cancel(v.current)};return i.exports.useEffect(function(){return function(){h()}},[]),function(K){var m=K.which;if([].concat(Kt,[Be,jt,Oe,Ae]).includes(m)){var b,y,I,w=function(){b=new Set,y=new Map,I=new Map;var A=l();return A.forEach(function(O){var _=document.querySelector("[data-menu-id='".concat(dt(o,O),"']"));_&&(b.add(_),I.set(_,O),y.set(O,_))}),b};w();var C=y.get(e),f=Zn(C,b),x=I.get(f),d=Xn(n,a(x,!0).length===1,r,m);if(!d&&m!==Oe&&m!==Ae)return;(Kt.includes(m)||[Oe,Ae].includes(m))&&K.preventDefault();var z=function(A){if(A){var O=A,_=A.querySelector("a");_!=null&&_.getAttribute("href")&&(O=_);var te=I.get(A);u(te),h(),v.current=Le(function(){N.current===te&&O.focus()})}};if([Oe,Ae].includes(m)||d.sibling||!f){var M;!f||n==="inline"?M=t.current:M=Jn(f);var j,H=Ht(M,b);m===Oe?j=H[0]:m===Ae?j=H[H.length-1]:j=Nt(M,b,f,d.offset),z(j)}else if(d.inlineTrigger)s(x);else if(d.offset>0)s(x,!0),h(),v.current=Le(function(){w();var G=f.getAttribute("aria-controls"),A=document.getElementById(G),O=Nt(A,b);z(O)},5);else if(d.offset<0){var D=a(x,!0),$=D[D.length-2],J=y.get($);s($,!1),z(J)}}c==null||c(K)}}var er=Math.random().toFixed(5).toString().slice(2),wt=0;function tr(n){var e=qe(n,{value:n}),r=U(e,2),o=r[0],t=r[1];return i.exports.useEffect(function(){wt+=1;var l="".concat(er,"-").concat(wt);t("rc-menu-uuid-".concat(l))},[]),o}function nr(n){Promise.resolve().then(n)}var xt="__RC_UTIL_PATH_SPLIT__",_t=function(e){return e.join(xt)},rr=function(e){return e.split(xt)},ct="rc-menu-more";function ar(){var n=i.exports.useState({}),e=U(n,2),r=e[1],o=i.exports.useRef(new Map),t=i.exports.useRef(new Map),l=i.exports.useState([]),a=U(l,2),u=a[0],s=a[1],c=i.exports.useRef(0),v=i.exports.useRef(!1),N=function(){v.current||r({})},h=i.exports.useCallback(function(C,f){var x=_t(f);t.current.set(x,C),o.current.set(C,x),c.current+=1;var d=c.current;nr(function(){d===c.current&&N()})},[]),K=i.exports.useCallback(function(C,f){var x=_t(f);t.current.delete(x),o.current.delete(C)},[]),m=i.exports.useCallback(function(C){s(C)},[]),b=i.exports.useCallback(function(C,f){var x=o.current.get(C)||"",d=rr(x);return f&&u.includes(d[0])&&d.unshift(ct),d},[u]),y=i.exports.useCallback(function(C,f){return C.some(function(x){var d=b(x,!0);return d.includes(f)})},[b]),I=function(){var f=ge(o.current.keys());return u.length&&f.push(ct),f},w=i.exports.useCallback(function(C){var f="".concat(o.current.get(C)).concat(xt),x=new Set;return ge(t.current.keys()).forEach(function(d){d.startsWith(f)&&x.add(t.current.get(d))}),x},[]);return i.exports.useEffect(function(){return function(){v.current=!0}},[]),{registerPath:h,unregisterPath:K,refreshOverflowKeys:m,isSubPathKey:y,getKeyPath:b,getKeys:I,getSubPathKeys:w}}var or=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],xe=[],ir=i.exports.forwardRef(function(n,e){var r,o,t=n,l=t.prefixCls,a=l===void 0?"rc-menu":l,u=t.rootClassName,s=t.style,c=t.className,v=t.tabIndex,N=v===void 0?0:v,h=t.items,K=t.children,m=t.direction,b=t.id,y=t.mode,I=y===void 0?"vertical":y,w=t.inlineCollapsed,C=t.disabled,f=t.disabledOverflow,x=t.subMenuOpenDelay,d=x===void 0?.1:x,z=t.subMenuCloseDelay,M=z===void 0?.1:z,j=t.forceSubMenuRender,H=t.defaultOpenKeys,D=t.openKeys,$=t.activeKey,J=t.defaultActiveFirst,G=t.selectable,A=G===void 0?!0:G,O=t.multiple,_=O===void 0?!1:O,te=t.defaultSelectedKeys,be=t.selectedKeys,ae=t.onSelect,Z=t.onDeselect,oe=t.inlineIndent,ue=oe===void 0?24:oe,T=t.motion,W=t.defaultMotions,se=t.triggerSubMenuAction,ce=se===void 0?"hover":se,de=t.builtinPlacements,L=t.itemIcon,Q=t.expandIcon,ne=t.overflowedIndicator,Ve=ne===void 0?"...":ne,Ue=t.overflowedIndicatorPopupClassName,Ie=t.getPopupContainer,ye=t.onClick,Me=t.onOpenChange,ze=t.onKeyDown;t.openAnimation,t.openTransitionName;var Se=t._internalRenderMenuItem,je=t._internalRenderSubMenuItem,He=q(t,or),ee=i.exports.useMemo(function(){return Fn(K,h,xe)},[K,h]),Qe=i.exports.useState(!1),Pe=U(Qe,2),Ge=Pe[0],et=Pe[1],me=i.exports.useRef(),Re=tr(b),Ke=m==="rtl",Ne=i.exports.useMemo(function(){return(I==="inline"||I==="vertical")&&w?["vertical",w]:[I,!1]},[I,w]),he=U(Ne,2),F=he[0],we=he[1],_e=i.exports.useState(0),Y=U(_e,2),k=Y[0],qt=Y[1],tt=k>=ee.length-1||F!=="horizontal"||f,Yt=qe(H,{value:D,postState:function(g){return g||xe}}),Ct=U(Yt,2),ie=Ct[0],gt=Ct[1],nt=function(g){gt(g),Me==null||Me(g)},Bt=i.exports.useState(ie),bt=U(Bt,2),Xt=bt[0],Jt=bt[1],rt=F==="inline",at=i.exports.useRef(!1);i.exports.useEffect(function(){rt&&Jt(ie)},[ie]),i.exports.useEffect(function(){!at.current||(rt?gt(Xt):nt(xe))},[rt]),i.exports.useEffect(function(){return at.current=!0,function(){at.current=!1}},[]);var ve=ar(),It=ve.registerPath,yt=ve.unregisterPath,Zt=ve.refreshOverflowKeys,Mt=ve.isSubPathKey,Qt=ve.getKeyPath,en=ve.getKeys,tn=ve.getSubPathKeys,nn=i.exports.useMemo(function(){return{registerPath:It,unregisterPath:yt}},[It,yt]),rn=i.exports.useMemo(function(){return{isSubPathKey:Mt}},[Mt]);i.exports.useEffect(function(){Zt(tt?xe:ee.slice(k+1).map(function(S){return S.key}))},[k,tt]);var an=qe($||J&&((r=ee[0])===null||r===void 0?void 0:r.key),{value:$}),St=U(an,2),Ee=St[0],ot=St[1],on=Ce(function(S){ot(S)}),ln=Ce(function(){ot(void 0)});i.exports.useImperativeHandle(e,function(){return{list:me.current,focus:function(g){var P,B=Ee!=null?Ee:(P=ee.find(function(Cn){return!Cn.props.disabled}))===null||P===void 0?void 0:P.key;if(B){var V,fe,De;(V=me.current)===null||V===void 0||(fe=V.querySelector("li[data-menu-id='".concat(dt(Re,B),"']")))===null||fe===void 0||(De=fe.focus)===null||De===void 0||De.call(fe,g)}}}});var un=qe(te||[],{value:be,postState:function(g){return Array.isArray(g)?g:g==null?xe:[g]}}),Pt=U(un,2),We=Pt[0],sn=Pt[1],cn=function(g){if(A){var P=g.key,B=We.includes(P),V;_?B?V=We.filter(function(De){return De!==P}):V=[].concat(ge(We),[P]):V=[P],sn(V);var fe=E(E({},g),{},{selectedKeys:V});B?Z==null||Z(fe):ae==null||ae(fe)}!_&&ie.length&&F!=="inline"&&nt(xe)},dn=Ce(function(S){ye==null||ye(Xe(S)),cn(S)}),Rt=Ce(function(S,g){var P=ie.filter(function(V){return V!==S});if(g)P.push(S);else if(F!=="inline"){var B=tn(S);P=P.filter(function(V){return!B.has(V)})}Et(ie,P)||nt(P)}),vn=Ce(Ie),fn=function(g,P){var B=P!=null?P:!ie.includes(g);Rt(g,B)},pn=Qn(F,Ee,Ke,Re,me,en,Qt,ot,fn,ze);i.exports.useEffect(function(){et(!0)},[]);var mn=i.exports.useMemo(function(){return{_internalRenderMenuItem:Se,_internalRenderSubMenuItem:je}},[Se,je]),hn=F!=="horizontal"||f?ee:ee.map(function(S,g){return p(Te,{overflowDisabled:g>k,children:S},S.key)}),xn=p(ke,{id:b,ref:me,prefixCls:"".concat(a,"-overflow"),component:"ul",itemComponent:ft,className:pe(a,"".concat(a,"-root"),"".concat(a,"-").concat(F),c,(o={},R(o,"".concat(a,"-inline-collapsed"),we),R(o,"".concat(a,"-rtl"),Ke),o),u),dir:m,style:s,role:"menu",tabIndex:N,data:hn,renderRawItem:function(g){return g},renderRawRest:function(g){var P=g.length,B=P?ee.slice(-P):null;return p(ht,{eventKey:ct,title:Ve,disabled:tt,internalPopupClose:P===0,popupClassName:Ue,children:B})},maxCount:F!=="horizontal"||f?ke.INVALIDATE:ke.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(g){qt(g)},onKeyDown:pn,...He});return p(vt.Provider,{value:mn,children:p(Vt.Provider,{value:Re,children:$e(Te,{prefixCls:a,rootClassName:u,mode:F,openKeys:ie,rtl:Ke,disabled:C,motion:Ge?T:null,defaultMotions:Ge?W:null,activeKey:Ee,onActive:on,onInactive:ln,selectedKeys:We,inlineIndent:ue,subMenuOpenDelay:d,subMenuCloseDelay:M,forceSubMenuRender:j,builtinPlacements:de,triggerSubMenuAction:ce,getPopupContainer:vn,itemIcon:L,expandIcon:Q,onItemClick:dn,onOpenChange:Rt,children:[p(Ft.Provider,{value:rn,children:xn}),p("div",{style:{display:"none"},"aria-hidden":!0,children:p($t.Provider,{value:nn,children:ee})})]})})})}),lr=["className","title","eventKey","children"],ur=["children"],sr=function(e){var r=e.className,o=e.title;e.eventKey;var t=e.children,l=q(e,lr),a=i.exports.useContext(X),u=a.prefixCls,s="".concat(u,"-item-group");return $e("li",{...l,onClick:function(v){return v.stopPropagation()},className:pe(s,r),children:[p("div",{className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0,children:o}),p("ul",{className:"".concat(s,"-list"),children:t})]})};function Gt(n){var e=n.children,r=q(n,ur),o=Fe(r.eventKey),t=pt(e,o),l=Je();return l?t:p(sr,{...Ot(r,["warnKey"]),children:t})}function Wt(n){var e=n.className,r=n.style,o=i.exports.useContext(X),t=o.prefixCls,l=Je();return l?null:p("li",{className:pe("".concat(t,"-item-divider"),e),style:r})}var Ze=ir;Ze.Item=ft;Ze.SubMenu=ht;Ze.ItemGroup=Gt;Ze.Divider=Wt;export{Wt as D,Ze as E,ft as M,ht as S,Gt as a,Fe as u};

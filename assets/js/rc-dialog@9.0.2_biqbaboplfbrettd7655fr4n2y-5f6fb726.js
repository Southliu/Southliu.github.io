import{a as C,c as q}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as i}from"./react@18.2.0-9cdefec6.js";import{P as le}from"./@rc-component_portal@1.0.3_biqbaboplfbrettd7655fr4n2y-d4a2a6b2.js";import{c as O}from"./classnames@2.3.2-d75d9a59.js";import{q as se,v as ce,m as Y,K as F}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-ae37cd3a.js";import{C as Z}from"./rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y-c6acc879.js";import{j as o,b as B}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-7910088d.js";function fe(e){var n=e.prefixCls,t=e.style,a=e.visible,r=e.maskProps,l=e.motionName;return o(Z,{visible:a,motionName:l,leavedClassName:"".concat(n,"-mask-hidden"),children:function(c,f){var d=c.className,m=c.style;return o("div",{ref:f,style:C(C({},m),t),className:O("".concat(n,"-mask"),d),...r})}},"mask")}function G(e,n,t){var a=n;return!a&&t&&(a="".concat(e,"-").concat(t)),a}function J(e,n){var t=e["page".concat(n?"Y":"X","Offset")],a="scroll".concat(n?"Top":"Left");if(typeof t!="number"){var r=e.document;t=r.documentElement[a],typeof t!="number"&&(t=r.body[a])}return t}function ue(e){var n=e.getBoundingClientRect(),t={left:n.left,top:n.top},a=e.ownerDocument,r=a.defaultView||a.parentWindow;return t.left+=J(r),t.top+=J(r,!0),t}const de=i.memo(function(e){var n=e.children;return n},function(e,n){var t=n.shouldUpdate;return!t});var Q={width:0,height:0,overflow:"hidden",outline:"none"},me=i.forwardRef(function(e,n){var t=e.prefixCls,a=e.className,r=e.style,l=e.title,c=e.ariaId,f=e.footer,d=e.closable,m=e.closeIcon,y=e.onClose,b=e.children,h=e.bodyStyle,N=e.bodyProps,g=e.modalRender,x=e.onMouseDown,I=e.onMouseUp,P=e.holderRef,D=e.visible,S=e.forceRender,u=e.width,A=e.height,R=i.useRef(),k=i.useRef();i.useImperativeHandle(n,function(){return{focus:function(){var v;(v=R.current)===null||v===void 0||v.focus()},changeActive:function(v){var W=document,E=W.activeElement;v&&E===k.current?R.current.focus():!v&&E===R.current&&k.current.focus()}}});var _={};u!==void 0&&(_.width=u),A!==void 0&&(_.height=A);var T;f&&(T=o("div",{className:"".concat(t,"-footer"),children:f}));var $;l&&($=o("div",{className:"".concat(t,"-header"),children:o("div",{className:"".concat(t,"-title"),id:c,children:l})}));var V;d&&(V=o("button",{type:"button",onClick:y,"aria-label":"Close",className:"".concat(t,"-close"),children:m||o("span",{className:"".concat(t,"-close-x")})}));var w=B("div",{className:"".concat(t,"-content"),children:[V,$,o("div",{className:"".concat(t,"-body"),style:h,...N,children:b}),T]});return B("div",{role:"dialog","aria-labelledby":l?c:null,"aria-modal":"true",ref:P,style:C(C({},r),_),className:O(t,a),onMouseDown:x,onMouseUp:I,children:[o("div",{tabIndex:0,ref:R,style:Q,"aria-hidden":"true"}),o(de,{shouldUpdate:D||S,children:g?g(w):w}),o("div",{tabIndex:0,ref:k,style:Q,"aria-hidden":"true"})]},"dialog-element")}),p=i.forwardRef(function(e,n){var t=e.prefixCls,a=e.title,r=e.style,l=e.className,c=e.visible,f=e.forceRender,d=e.destroyOnClose,m=e.motionName,y=e.ariaId,b=e.onVisibleChanged,h=e.mousePosition,N=i.useRef(),g=i.useState(),x=q(g,2),I=x[0],P=x[1],D={};I&&(D.transformOrigin=I);function S(){var u=ue(N.current);P(h?"".concat(h.x-u.left,"px ").concat(h.y-u.top,"px"):"")}return o(Z,{visible:c,onVisibleChanged:b,onAppearPrepare:S,onEnterPrepare:S,forceRender:f,motionName:m,removeOnLeave:d,ref:N,children:function(u,A){var R=u.className,k=u.style;return o(me,{...e,ref:n,title:a,ariaId:y,prefixCls:t,holderRef:A,style:C(C(C({},k),r),D),className:O(l,R)})}})});p.displayName="Content";function ve(e){var n=e.prefixCls,t=n===void 0?"rc-dialog":n,a=e.zIndex,r=e.visible,l=r===void 0?!1:r,c=e.keyboard,f=c===void 0?!0:c,d=e.focusTriggerAfterClose,m=d===void 0?!0:d,y=e.wrapStyle,b=e.wrapClassName,h=e.wrapProps,N=e.onClose,g=e.afterClose,x=e.transitionName,I=e.animation,P=e.closable,D=P===void 0?!0:P,S=e.mask,u=S===void 0?!0:S,A=e.maskTransitionName,R=e.maskAnimation,k=e.maskClosable,_=k===void 0?!0:k,T=e.maskStyle,$=e.maskProps,V=e.rootClassName,w=i.useRef(),M=i.useRef(),v=i.useRef(),W=i.useState(l),E=q(W,2),K=E[0],H=E[1],ee=se();function te(){Y(M.current,document.activeElement)||(w.current=document.activeElement)}function ne(){if(!Y(M.current,document.activeElement)){var s;(s=v.current)===null||s===void 0||s.focus()}}function ae(s){if(s)ne();else{if(H(!1),u&&w.current&&m){try{w.current.focus({preventScroll:!0})}catch{}w.current=null}K&&(g==null||g())}}function j(s){N==null||N(s)}var U=i.useRef(!1),z=i.useRef(),oe=function(){clearTimeout(z.current),U.current=!0},ie=function(){z.current=setTimeout(function(){U.current=!1})},X=null;_&&(X=function(L){U.current?U.current=!1:M.current===L.target&&j(L)});function re(s){if(f&&s.keyCode===F.ESC){s.stopPropagation(),j(s);return}l&&s.keyCode===F.TAB&&v.current.changeActive(!s.shiftKey)}return i.useEffect(function(){l&&(H(!0),te())},[l]),i.useEffect(function(){return function(){clearTimeout(z.current)}},[]),B("div",{className:O("".concat(t,"-root"),V),...ce(e,{data:!0}),children:[o(fe,{prefixCls:t,visible:u&&l,motionName:G(t,A,R),style:C({zIndex:a},T),maskProps:$}),o("div",{tabIndex:-1,onKeyDown:re,className:O("".concat(t,"-wrap"),b),ref:M,onClick:X,style:C(C({zIndex:a},y),{},{display:K?null:"none"}),...h,children:o(p,{...e,onMouseDown:oe,onMouseUp:ie,ref:v,closable:D,ariaId:ee,prefixCls:t,visible:l&&K,onClose:j,onVisibleChanged:ae,motionName:G(t,x,I)})})]})}var Ce=function(n){var t=n.visible,a=n.getContainer,r=n.forceRender,l=n.destroyOnClose,c=l===void 0?!1:l,f=n.afterClose,d=i.useState(t),m=q(d,2),y=m[0],b=m[1];return i.useEffect(function(){t&&b(!0)},[t]),!r&&c&&!y?null:o(le,{open:t||r||y,autoDestroy:!1,getContainer:a,autoLock:t||y,children:o(ve,{...n,destroyOnClose:c,afterClose:function(){f==null||f(),b(!1)}})})};Ce.displayName="Dialog";export{Ce as D};

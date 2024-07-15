import{l as e,j as n,g as t,h as a,b as o}from"./@babel_runtime@7.24.7.uphKh7BM.js";import{P as r}from"./@rc-component_portal@1.1.2_react-dom@18.3.1_react@18.3.1.y_smBASD.js";import{d as l,z as s,E as c,K as i,u}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1.bvtOFkwB.js";import{r as d}from"./react@18.3.1.zIIbIvjs.js";import{c as f}from"./classnames@2.5.1.Xo58IrnT.js";import{C as v}from"./rc-motion@2.9.2_react-dom@18.3.1_react@18.3.1.4o6u3OvH.js";var m=d.createContext(null),p=d.createContext({}),h=["prefixCls","className","containerRef"],y=function(t){var a=t.prefixCls,o=t.className,r=t.containerRef,c=e(t,h),i=d.useContext(p).panel,u=l(i,r);return d.createElement("div",n({className:f("".concat(a,"-content"),o),role:"dialog",ref:u},s(t,{aria:!0}),{"aria-modal":"true"},c))};function C(e){return"string"==typeof e&&String(Number(e))===e?(c(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var k={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function b(e,r){var l,c,u,p=e.prefixCls,h=e.open,b=e.placement,E=e.inline,w=e.push,x=e.forceRender,g=e.autoFocus,N=e.keyboard,M=e.classNames,R=e.rootClassName,K=e.rootStyle,S=e.zIndex,D=e.className,O=e.id,_=e.style,j=e.motion,I=e.width,L=e.height,P=e.children,U=e.mask,z=e.maskClosable,F=e.maskMotion,A=e.maskClassName,B=e.maskStyle,T=e.afterOpenChange,X=e.onClose,Y=e.onMouseEnter,H=e.onMouseOver,V=e.onMouseLeave,q=e.onClick,G=e.onKeyDown,J=e.onKeyUp,Q=e.styles,W=e.drawerRender,Z=d.useRef(),$=d.useRef(),ee=d.useRef();d.useImperativeHandle(r,(function(){return Z.current}));d.useEffect((function(){var e;h&&g&&(null===(e=Z.current)||void 0===e||e.focus({preventScroll:!0}))}),[h]);var ne=d.useState(!1),te=t(ne,2),ae=te[0],oe=te[1],re=d.useContext(m),le=null!==(l=null!==(c=null===(u="boolean"==typeof w?w?{}:{distance:0}:w||{})||void 0===u?void 0:u.distance)&&void 0!==c?c:null==re?void 0:re.pushDistance)&&void 0!==l?l:180,se=d.useMemo((function(){return{pushDistance:le,push:function(){oe(!0)},pull:function(){oe(!1)}}}),[le]);d.useEffect((function(){var e,n;h?null==re||null===(e=re.push)||void 0===e||e.call(re):null==re||null===(n=re.pull)||void 0===n||n.call(re)}),[h]),d.useEffect((function(){return function(){var e;null==re||null===(e=re.pull)||void 0===e||e.call(re)}}),[]);var ce=U&&d.createElement(v,n({key:"mask"},F,{visible:h}),(function(e,n){var t=e.className,o=e.style;return d.createElement("div",{className:f("".concat(p,"-mask"),t,null==M?void 0:M.mask,A),style:a(a(a({},o),B),null==Q?void 0:Q.mask),onClick:z&&h?X:void 0,ref:n})})),ie="function"==typeof j?j(b):j,ue={};if(ae&&le)switch(b){case"top":ue.transform="translateY(".concat(le,"px)");break;case"bottom":ue.transform="translateY(".concat(-le,"px)");break;case"left":ue.transform="translateX(".concat(le,"px)");break;default:ue.transform="translateX(".concat(-le,"px)")}"left"===b||"right"===b?ue.width=C(I):ue.height=C(L);var de={onMouseEnter:Y,onMouseOver:H,onMouseLeave:V,onClick:q,onKeyDown:G,onKeyUp:J},fe=d.createElement(v,n({key:"panel"},ie,{visible:h,forceRender:x,onVisibleChanged:function(e){null==T||T(e)},removeOnLeave:!1,leavedClassName:"".concat(p,"-content-wrapper-hidden")}),(function(t,o){var r=t.className,l=t.style,c=d.createElement(y,n({id:O,containerRef:o,prefixCls:p,className:f(D,null==M?void 0:M.content),style:a(a({},_),null==Q?void 0:Q.content)},s(e,{aria:!0}),de),P);return d.createElement("div",n({className:f("".concat(p,"-content-wrapper"),null==M?void 0:M.wrapper,r),style:a(a(a({},ue),l),null==Q?void 0:Q.wrapper)},s(e,{data:!0})),W?W(c):c)})),ve=a({},K);return S&&(ve.zIndex=S),d.createElement(m.Provider,{value:se},d.createElement("div",{className:f(p,"".concat(p,"-").concat(b),R,o(o({},"".concat(p,"-open"),h),"".concat(p,"-inline"),E)),style:ve,tabIndex:-1,ref:Z,onKeyDown:function(e){var n=e.keyCode,t=e.shiftKey;switch(n){case i.TAB:var a;if(n===i.TAB)if(t||document.activeElement!==ee.current){if(t&&document.activeElement===$.current){var o;null===(o=ee.current)||void 0===o||o.focus({preventScroll:!0})}}else null===(a=$.current)||void 0===a||a.focus({preventScroll:!0});break;case i.ESC:X&&N&&(e.stopPropagation(),X(e))}}},ce,d.createElement("div",{tabIndex:0,ref:$,style:k,"aria-hidden":"true","data-sentinel":"start"}),fe,d.createElement("div",{tabIndex:0,ref:ee,style:k,"aria-hidden":"true","data-sentinel":"end"})))}var E=d.forwardRef(b),w=function(e){var n=e.open,o=void 0!==n&&n,l=e.prefixCls,s=void 0===l?"rc-drawer":l,c=e.placement,i=void 0===c?"right":c,f=e.autoFocus,v=void 0===f||f,m=e.keyboard,h=void 0===m||m,y=e.width,C=void 0===y?378:y,k=e.mask,b=void 0===k||k,w=e.maskClosable,x=void 0===w||w,g=e.getContainer,N=e.forceRender,M=e.afterOpenChange,R=e.destroyOnClose,K=e.onMouseEnter,S=e.onMouseOver,D=e.onMouseLeave,O=e.onClick,_=e.onKeyDown,j=e.onKeyUp,I=e.panelRef,L=d.useState(!1),P=t(L,2),U=P[0],z=P[1],F=d.useState(!1),A=t(F,2),B=A[0],T=A[1];u((function(){T(!0)}),[]);var X=!!B&&o,Y=d.useRef(),H=d.useRef();u((function(){X&&(H.current=document.activeElement)}),[X]);var V=d.useMemo((function(){return{panel:I}}),[I]);if(!N&&!U&&!X&&R)return null;var q={onMouseEnter:K,onMouseOver:S,onMouseLeave:D,onClick:O,onKeyDown:_,onKeyUp:j},G=a(a({},e),{},{open:X,prefixCls:s,placement:i,autoFocus:v,keyboard:h,width:C,mask:b,maskClosable:x,inline:!1===g,afterOpenChange:function(e){var n,t;(z(e),null==M||M(e),e||!H.current||null!==(n=Y.current)&&void 0!==n&&n.contains(H.current))||(null===(t=H.current)||void 0===t||t.focus({preventScroll:!0}))},ref:Y},q);return d.createElement(p.Provider,{value:V},d.createElement(r,{open:X||N||U,autoDestroy:!1,getContainer:g,autoLock:b&&(X||U)},d.createElement(E,G)))};export{w as D};

import{c as e,d as t,h as o}from"./@babel_runtime.d775819b.js";import{T as r}from"./@rc-component_trigger.52678524.js";import{r as i}from"./react.a7da97a2.js";import{c as a}from"./classnames.71976509.js";var n={shiftX:64,adjustY:1},s={adjustX:1,shiftY:!0},l=[0,0],f={left:{points:["cr","cl"],overflow:s,offset:[-4,0],targetOffset:l},right:{points:["cl","cr"],overflow:s,offset:[4,0],targetOffset:l},top:{points:["bc","tc"],overflow:n,offset:[0,-4],targetOffset:l},bottom:{points:["tc","bc"],overflow:n,offset:[0,4],targetOffset:l},topLeft:{points:["bl","tl"],overflow:n,offset:[0,-4],targetOffset:l},leftTop:{points:["tr","tl"],overflow:s,offset:[-4,0],targetOffset:l},topRight:{points:["br","tr"],overflow:n,offset:[0,-4],targetOffset:l},rightTop:{points:["tl","tr"],overflow:s,offset:[4,0],targetOffset:l},bottomRight:{points:["tr","br"],overflow:n,offset:[0,4],targetOffset:l},rightBottom:{points:["bl","br"],overflow:s,offset:[4,0],targetOffset:l},bottomLeft:{points:["tl","bl"],overflow:n,offset:[0,4],targetOffset:l},leftBottom:{points:["br","bl"],overflow:s,offset:[-4,0],targetOffset:l}};function p(e){var t=e.children,o=e.prefixCls,r=e.id,n=e.overlayInnerStyle,s=e.className,l=e.style;return i.createElement("div",{className:a("".concat(o,"-content"),s),style:l},i.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:n},"function"==typeof t?t():t))}var m=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],v=function(a,n){var s=a.overlayClassName,l=a.trigger,v=void 0===l?["hover"]:l,c=a.mouseEnterDelay,u=void 0===c?0:c,g=a.mouseLeaveDelay,d=void 0===g?.1:g,y=a.overlayStyle,b=a.prefixCls,h=void 0===b?"rc-tooltip":b,w=a.children,C=a.onVisibleChange,O=a.afterVisibleChange,V=a.transitionName,N=a.animation,T=a.motion,D=a.placement,E=void 0===D?"right":D,P=a.align,S=void 0===P?{}:P,j=a.destroyTooltipOnHide,x=void 0!==j&&j,I=a.defaultVisible,L=a.getTooltipContainer,A=a.overlayInnerStyle;a.arrowContent;var R=a.overlay,H=a.id,B=a.showArrow,X=void 0===B||B,Y=e(a,m),_=i.useRef(null);i.useImperativeHandle(n,(function(){return _.current}));var k=t({},Y);"visible"in a&&(k.popupVisible=a.visible);return i.createElement(r,o({popupClassName:s,prefixCls:h,popup:function(){return i.createElement(p,{key:"content",prefixCls:h,id:H,overlayInnerStyle:A},R)},action:v,builtinPlacements:f,popupPlacement:E,ref:_,popupAlign:S,getPopupContainer:L,onPopupVisibleChange:C,afterPopupVisibleChange:O,popupTransitionName:V,popupAnimation:N,popupMotion:T,defaultPopupVisible:I,autoDestroy:x,mouseLeaveDelay:d,popupStyle:y,mouseEnterDelay:u,arrow:X},k),w)};const c=i.forwardRef(v);export{p as P,c as T};

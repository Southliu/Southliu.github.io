import{e as M,h as A,c as b,q as Me,m as ae,g as Te,f as u,i as Pe,j as ye,a as ke,k as l,_ as be}from"./@babel_runtime.0b96ec9f.js";import{r}from"./react.017637b6.js";import{R as Se}from"./react-dom.9b851fd7.js";import{k as we,f as E,b as ue,B as De,n as Q,E as Ne,p as $,s as Ee,j as Ae,P as Oe}from"./rc-util.88348ebb.js";import{c as z}from"./classnames.96a48171.js";import{C as K}from"./rc-motion.8586b577.js";import{R as Re}from"./rc-align.5cb7de13.js";function He(n,d,c){return c?n[0]===d[0]:n[0]===d[0]&&n[1]===d[1]}function Ve(n,d,c){var m=n[d]||{};return M(M({},m),c)}function _e(n,d,c,m){for(var h=c.points,s=Object.keys(n),e=0;e<s.length;e+=1){var i=s[e];if(He(n[i].points,h,m))return"".concat(d,"-placement-").concat(i)}return""}function ce(n){var d=n.prefixCls,c=n.motion,m=n.animation,h=n.transitionName;return c||(m?{motionName:"".concat(d,"-").concat(m)}:h?{motionName:h}:null)}function Le(n){var d=n.prefixCls,c=n.visible,m=n.zIndex,h=n.mask,s=n.maskMotion,e=n.maskAnimation,i=n.maskTransitionName;if(!h)return null;var t={};return(s||i||e)&&(t=M({motionAppear:!0},ce({motion:s,prefixCls:d,transitionName:i,animation:e}))),r.exports.createElement(K,A({},t,{visible:c,removeOnLeave:!0}),function(o){var a=o.className;return r.exports.createElement("div",{style:{zIndex:m},className:z("".concat(d,"-mask"),a)})})}var le=["measure","alignPre","align",null,"motion"];const Ie=function(n,d){var c=we(null),m=b(c,2),h=m[0],s=m[1],e=r.exports.useRef();function i(a){s(a,!0)}function t(){E.cancel(e.current)}function o(a){t(),e.current=E(function(){i(function(f){switch(h){case"align":return"motion";case"motion":return"stable"}return f}),a==null||a()})}return r.exports.useEffect(function(){i("measure")},[n]),r.exports.useEffect(function(){switch(h){case"measure":d();break}h&&(e.current=E(Me(ae().mark(function a(){var f,g;return ae().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:f=le.indexOf(h),g=le[f+1],g&&f!==-1&&i(g);case 3:case"end":return p.stop()}},a)}))))},[h]),r.exports.useEffect(function(){return function(){t()}},[]),[h,o]},Fe=function(n){var d=r.exports.useState({width:0,height:0}),c=b(d,2),m=c[0],h=c[1];function s(i){var t=i.offsetWidth,o=i.offsetHeight,a=i.getBoundingClientRect(),f=a.width,g=a.height;Math.abs(t-f)<1&&Math.abs(o-g)<1&&(t=f,o=g),h({width:t,height:o})}var e=r.exports.useMemo(function(){var i={};if(n){var t=m.width,o=m.height;n.indexOf("height")!==-1&&o?i.height=o:n.indexOf("minHeight")!==-1&&o&&(i.minHeight=o),n.indexOf("width")!==-1&&t?i.width=t:n.indexOf("minWidth")!==-1&&t&&(i.minWidth=t)}return i},[n,m]);return[e,s]};var fe=r.exports.forwardRef(function(n,d){var c=n.visible,m=n.prefixCls,h=n.className,s=n.style,e=n.children,i=n.zIndex,t=n.stretch,o=n.destroyPopupOnHide,a=n.forceRender,f=n.align,g=n.point,v=n.getRootDomNode,p=n.getClassNameFromAlign,C=n.onAlign,T=n.onMouseEnter,S=n.onMouseLeave,y=n.onMouseDown,O=n.onTouchStart,R=n.onClick,L=r.exports.useRef(),D=r.exports.useRef(),B=r.exports.useState(),I=b(B,2),F=I[0],W=I[1],U=Fe(t),H=b(U,2),j=H[0],X=H[1];function Y(){t&&X(v())}var w=Ie(c,Y),Z=b(w,2),P=Z[0],q=Z[1],he=r.exports.useState(0),ee=b(he,2),te=ee[0],oe=ee[1],G=r.exports.useRef();ue(function(){P==="alignPre"&&oe(0)},[P]);function ve(){return g||v}function ie(){var x;(x=L.current)===null||x===void 0||x.forceAlign()}function ge(x,k){var N=p(k);F!==N&&W(N),oe(function(_){return _+1}),P==="align"&&(C==null||C(x,k))}ue(function(){P==="align"&&(te<3?ie():q(function(){var x;(x=G.current)===null||x===void 0||x.call(G)}))},[te]);var V=M({},ce(n));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(x){var k=V[x];V[x]=function(N,_){return q(),k==null?void 0:k(N,_)}});function ne(){return new Promise(function(x){G.current=x})}r.exports.useEffect(function(){!V.motionName&&P==="motion"&&q()},[V.motionName,P]),r.exports.useImperativeHandle(d,function(){return{forceAlign:ie,getElement:function(){return D.current}}});var xe=M(M({},j),{},{zIndex:i,opacity:P==="motion"||P==="stable"||!c?void 0:0,pointerEvents:!c&&P!=="stable"?"none":void 0},s),se=!0;f!=null&&f.points&&(P==="align"||P==="stable")&&(se=!1);var re=e;return r.exports.Children.count(e)>1&&(re=r.exports.createElement("div",{className:"".concat(m,"-content")},e)),r.exports.createElement(K,A({visible:c,ref:D,leavedClassName:"".concat(m,"-hidden")},V,{onAppearPrepare:ne,onEnterPrepare:ne,removeOnLeave:o,forceRender:a}),function(x,k){var N=x.className,_=x.style,Ce=z(m,h,F,N);return r.exports.createElement(Re,{target:ve(),key:"popup",ref:L,monitorWindowResize:!0,disabled:se,align:f,onAlign:ge},r.exports.createElement("div",{ref:k,className:Ce,onMouseEnter:T,onMouseLeave:S,onMouseDownCapture:y,onTouchStartCapture:O,onClick:R,style:M(M({},_),xe)},re))})});fe.displayName="PopupInner";var de=r.exports.forwardRef(function(n,d){var c=n.prefixCls,m=n.visible,h=n.zIndex,s=n.children,e=n.mobile;e=e===void 0?{}:e;var i=e.popupClassName,t=e.popupStyle,o=e.popupMotion,a=o===void 0?{}:o,f=e.popupRender,g=n.onClick,v=r.exports.useRef();r.exports.useImperativeHandle(d,function(){return{forceAlign:function(){},getElement:function(){return v.current}}});var p=M({zIndex:h},t),C=s;return r.exports.Children.count(s)>1&&(C=r.exports.createElement("div",{className:"".concat(c,"-content")},s)),f&&(C=f(C)),r.exports.createElement(K,A({visible:m,ref:v,removeOnLeave:!0},a),function(T,S){var y=T.className,O=T.style,R=z(c,i,y);return r.exports.createElement("div",{ref:S,className:R,onClick:g,style:M(M({},O),p)},C)})});de.displayName="MobilePopupInner";var $e=["visible","mobile"],me=r.exports.forwardRef(function(n,d){var c=n.visible,m=n.mobile,h=Te(n,$e),s=r.exports.useState(c),e=b(s,2),i=e[0],t=e[1],o=r.exports.useState(!1),a=b(o,2),f=a[0],g=a[1],v=M(M({},h),{},{visible:i});r.exports.useEffect(function(){t(c),c&&m&&g(De())},[c,m]);var p=f?r.exports.createElement(de,A({},v,{mobile:m,ref:d})):r.exports.createElement(fe,A({},v,{ref:d}));return r.exports.createElement("div",null,r.exports.createElement(Le,v),p)});me.displayName="Popup";var pe=r.exports.createContext(null);function J(){}function ze(){return""}function Be(n){return n?n.ownerDocument:window.document}var We=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function Ue(n){var d=function(c){Pe(h,c);var m=ye(h);function h(s){var e;ke(this,h),e=m.call(this,s),u(l(e),"popupRef",r.exports.createRef()),u(l(e),"triggerRef",r.exports.createRef()),u(l(e),"portalContainer",void 0),u(l(e),"attachId",void 0),u(l(e),"clickOutsideHandler",void 0),u(l(e),"touchOutsideHandler",void 0),u(l(e),"contextMenuOutsideHandler1",void 0),u(l(e),"contextMenuOutsideHandler2",void 0),u(l(e),"mouseDownTimeout",void 0),u(l(e),"focusTime",void 0),u(l(e),"preClickTime",void 0),u(l(e),"preTouchTime",void 0),u(l(e),"delayTimer",void 0),u(l(e),"hasPopupMouseDown",void 0),u(l(e),"onMouseEnter",function(t){var o=e.props.mouseEnterDelay;e.fireEvents("onMouseEnter",t),e.delaySetPopupVisible(!0,o,o?null:t)}),u(l(e),"onMouseMove",function(t){e.fireEvents("onMouseMove",t),e.setPoint(t)}),u(l(e),"onMouseLeave",function(t){e.fireEvents("onMouseLeave",t),e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)}),u(l(e),"onPopupMouseEnter",function(){e.clearDelayTimer()}),u(l(e),"onPopupMouseLeave",function(t){var o;t.relatedTarget&&!t.relatedTarget.setTimeout&&Q((o=e.popupRef.current)===null||o===void 0?void 0:o.getElement(),t.relatedTarget)||e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)}),u(l(e),"onFocus",function(t){e.fireEvents("onFocus",t),e.clearDelayTimer(),e.isFocusToShow()&&(e.focusTime=Date.now(),e.delaySetPopupVisible(!0,e.props.focusDelay))}),u(l(e),"onMouseDown",function(t){e.fireEvents("onMouseDown",t),e.preClickTime=Date.now()}),u(l(e),"onTouchStart",function(t){e.fireEvents("onTouchStart",t),e.preTouchTime=Date.now()}),u(l(e),"onBlur",function(t){e.fireEvents("onBlur",t),e.clearDelayTimer(),e.isBlurToHide()&&e.delaySetPopupVisible(!1,e.props.blurDelay)}),u(l(e),"onContextMenu",function(t){t.preventDefault(),e.fireEvents("onContextMenu",t),e.setPopupVisible(!0,t)}),u(l(e),"onContextMenuClose",function(){e.isContextMenuToShow()&&e.close()}),u(l(e),"onClick",function(t){if(e.fireEvents("onClick",t),e.focusTime){var o;if(e.preClickTime&&e.preTouchTime?o=Math.min(e.preClickTime,e.preTouchTime):e.preClickTime?o=e.preClickTime:e.preTouchTime&&(o=e.preTouchTime),Math.abs(o-e.focusTime)<20)return;e.focusTime=0}e.preClickTime=0,e.preTouchTime=0,e.isClickToShow()&&(e.isClickToHide()||e.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault();var a=!e.state.popupVisible;(e.isClickToHide()&&!a||a&&e.isClickToShow())&&e.setPopupVisible(!e.state.popupVisible,t)}),u(l(e),"onPopupMouseDown",function(){if(e.hasPopupMouseDown=!0,clearTimeout(e.mouseDownTimeout),e.mouseDownTimeout=window.setTimeout(function(){e.hasPopupMouseDown=!1},0),e.context){var t;(t=e.context).onPopupMouseDown.apply(t,arguments)}}),u(l(e),"onDocumentClick",function(t){if(!(e.props.mask&&!e.props.maskClosable)){var o=t.target,a=e.getRootDomNode(),f=e.getPopupDomNode();(!Q(a,o)||e.isContextMenuOnly())&&!Q(f,o)&&!e.hasPopupMouseDown&&e.close()}}),u(l(e),"getRootDomNode",function(){var t=e.props.getTriggerDOMNode;if(t)return t(e.triggerRef.current);try{var o=Ne(e.triggerRef.current);if(o)return o}catch{}return Se.findDOMNode(l(e))}),u(l(e),"getPopupClassNameFromAlign",function(t){var o=[],a=e.props,f=a.popupPlacement,g=a.builtinPlacements,v=a.prefixCls,p=a.alignPoint,C=a.getPopupClassNameFromAlign;return f&&g&&o.push(_e(g,v,t,p)),C&&o.push(C(t)),o.join(" ")}),u(l(e),"getComponent",function(){var t=e.props,o=t.prefixCls,a=t.destroyPopupOnHide,f=t.popupClassName,g=t.onPopupAlign,v=t.popupMotion,p=t.popupAnimation,C=t.popupTransitionName,T=t.popupStyle,S=t.mask,y=t.maskAnimation,O=t.maskTransitionName,R=t.maskMotion,L=t.zIndex,D=t.popup,B=t.stretch,I=t.alignPoint,F=t.mobile,W=t.forceRender,U=t.onPopupClick,H=e.state,j=H.popupVisible,X=H.point,Y=e.getPopupAlign(),w={};return e.isMouseEnterToShow()&&(w.onMouseEnter=e.onPopupMouseEnter),e.isMouseLeaveToHide()&&(w.onMouseLeave=e.onPopupMouseLeave),w.onMouseDown=e.onPopupMouseDown,w.onTouchStart=e.onPopupMouseDown,r.exports.createElement(me,A({prefixCls:o,destroyPopupOnHide:a,visible:j,point:I&&X,className:f,align:Y,onAlign:g,animation:p,getClassNameFromAlign:e.getPopupClassNameFromAlign},w,{stretch:B,getRootDomNode:e.getRootDomNode,style:T,mask:S,zIndex:L,transitionName:C,maskAnimation:y,maskTransitionName:O,maskMotion:R,ref:e.popupRef,motion:v,mobile:F,forceRender:W,onClick:U}),typeof D=="function"?D():D)}),u(l(e),"attachParent",function(t){E.cancel(e.attachId);var o=e.props,a=o.getPopupContainer,f=o.getDocument,g=e.getRootDomNode(),v;a?(g||a.length===0)&&(v=a(g)):v=f(e.getRootDomNode()).body,v?v.appendChild(t):e.attachId=E(function(){e.attachParent(t)})}),u(l(e),"getContainer",function(){if(!e.portalContainer){var t=e.props.getDocument,o=t(e.getRootDomNode()).createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",e.portalContainer=o}return e.attachParent(e.portalContainer),e.portalContainer}),u(l(e),"setPoint",function(t){var o=e.props.alignPoint;!o||!t||e.setState({point:{pageX:t.pageX,pageY:t.pageY}})}),u(l(e),"handlePortalUpdate",function(){e.state.prevPopupVisible!==e.state.popupVisible&&e.props.afterPopupVisibleChange(e.state.popupVisible)}),u(l(e),"triggerContextValue",{onPopupMouseDown:e.onPopupMouseDown});var i;return"popupVisible"in s?i=!!s.popupVisible:i=!!s.defaultPopupVisible,e.state={prevPopupVisible:i,popupVisible:i},We.forEach(function(t){e["fire".concat(t)]=function(o){e.fireEvents(t,o)}}),e}return be(h,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props,i=this.state;if(i.popupVisible){var t;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(t=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=$(t,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(t=t||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=$(t,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(t=t||e.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=$(t,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=$(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),E.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return((e=this.popupRef.current)===null||e===void 0?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,i=e.popupPlacement,t=e.popupAlign,o=e.builtinPlacements;return i&&o?Ve(o,i,t):t}},{key:"setPopupVisible",value:function(e,i){var t=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),t&&i&&e&&this.setPoint(i)}},{key:"delaySetPopupVisible",value:function(e,i,t){var o=this,a=i*1e3;if(this.clearDelayTimer(),a){var f=t?{pageX:t.pageX,pageY:t.pageY}:null;this.delayTimer=window.setTimeout(function(){o.setPopupVisible(e,f),o.clearDelayTimer()},a)}else this.setPopupVisible(e,t)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var i=this.props.children.props,t=this.props;return i[e]&&t[e]?this["fire".concat(e)]:i[e]||t[e]}},{key:"isClickToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return e==="contextMenu"||e.length===1&&e[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("contextMenu")!==-1||t.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("hover")!==-1||t.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("hover")!==-1||t.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("focus")!==-1||t.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("focus")!==-1||t.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var e;(e=this.popupRef.current)===null||e===void 0||e.forceAlign()}}},{key:"fireEvents",value:function(e,i){var t=this.props.children.props[e];t&&t(i);var o=this.props[e];o&&o(i)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,i=this.props,t=i.children,o=i.forceRender,a=i.alignPoint,f=i.className,g=i.autoDestroy,v=r.exports.Children.only(t),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,a&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var C=z(v&&v.props&&v.props.className,f);C&&(p.className=C);var T=M({},p);Ee(v)&&(T.ref=Ae(this.triggerRef,v.ref));var S=r.exports.cloneElement(v,T),y;return(e||this.popupRef.current||o)&&(y=r.exports.createElement(n,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!e&&g&&(y=null),r.exports.createElement(pe.Provider,{value:this.triggerContextValue},S,y)}}],[{key:"getDerivedStateFromProps",value:function(e,i){var t=e.popupVisible,o={};return t!==void 0&&i.popupVisible!==t&&(o.popupVisible=t,o.prevPopupVisible=i.popupVisible),o}}]),h}(r.exports.Component);return u(d,"contextType",pe),u(d,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:ze,getDocument:Be,onPopupVisibleChange:J,afterPopupVisibleChange:J,onPopupAlign:J,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),d}const Ke=Ue(Oe);export{Ke as T};

import{p as t}from"./@babel_runtime@7.24.5.vhYC90HJ.js";import{r as e}from"./react@18.3.1.BYZOCa2p.js";import{r as n}from"./prop-types@15.8.1.DWAhyubz.js";import{r}from"./react-dom@18.3.1_react@18.3.1.DSJXmJ_W.js";import{r as o}from"./clsx@1.2.1.DcLS2XQw.js";var a={exports:{}},i={},s={},l={};Object.defineProperty(l,"__esModule",{value:!0}),l.dontSetMe=function(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))},l.findInArray=function(t,e){for(let n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]},l.int=function(t){return parseInt(t,10)},l.isFunction=function(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)},l.isNum=function(t){return"number"==typeof t&&!isNaN(t)};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.browserPrefixToKey=f,u.browserPrefixToStyle=function(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t},u.default=void 0,u.getPrefix=c;const d=["Moz","Webkit","O","ms"];function c(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const n=null===(t=window.document)||void 0===t||null===(t=t.documentElement)||void 0===t?void 0:t.style;if(!n)return"";if(e in n)return"";for(let r=0;r<d.length;r++)if(f(e,d[r])in n)return d[r];return""}function f(t,e){return e?"".concat(e).concat(function(t){let e="",n=!0;for(let r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):"-"===t[r]?n=!0:e+=t[r];return e}(t)):t}u.default=c(),Object.defineProperty(s,"__esModule",{value:!0}),s.addClassName=v,s.addEvent=function(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},s.addUserSelectStyles=function(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",e.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(e));t.body&&v(t.body,"react-draggable-transparent-selection")},s.createCSSTransform=function(t,e){const n=b(t,e,"px");return{[(0,g.browserPrefixToKey)("transform",g.default)]:n}},s.createSVGTransform=function(t,e){return b(t,e,"")},s.getTouch=function(t,e){return t.targetTouches&&(0,p.findInArray)(t.targetTouches,(t=>e===t.identifier))||t.changedTouches&&(0,p.findInArray)(t.changedTouches,(t=>e===t.identifier))},s.getTouchIdentifier=function(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier},s.getTranslation=b,s.innerHeight=function(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,p.int)(n.paddingTop),e-=(0,p.int)(n.paddingBottom),e},s.innerWidth=function(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,p.int)(n.paddingLeft),e-=(0,p.int)(n.paddingRight),e},s.matchesSelector=y,s.matchesSelectorAndParentsTo=function(t,e,n){let r=t;do{if(y(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},s.offsetXYFromParent=function(t,e,n){const r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),o=(t.clientX+e.scrollLeft-r.left)/n,a=(t.clientY+e.scrollTop-r.top)/n;return{x:o,y:a}},s.outerHeight=function(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,p.int)(n.borderTopWidth),e+=(0,p.int)(n.borderBottomWidth),e},s.outerWidth=function(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,p.int)(n.borderLeftWidth),e+=(0,p.int)(n.borderRightWidth),e},s.removeClassName=D,s.removeEvent=function(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null},s.removeUserSelectStyles=function(t){if(!t)return;try{if(t.body&&D(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&"Caret"!==e.type&&e.removeAllRanges()}}catch(e){}};var p=l,g=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=h(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}r.default=t,n&&n.set(t,r);return r}(u);function h(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(h=function(t){return t?n:e})(t)}let m="";function y(t,e){return m||(m=(0,p.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(e){return(0,p.isFunction)(t[e])}))),!!(0,p.isFunction)(t[m])&&t[m](e)}function b(t,e,n){let{x:r,y:o}=t,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){const t="".concat("string"==typeof e.x?e.x:e.x+n),r="".concat("string"==typeof e.y?e.y:e.y+n);a="translate(".concat(t,", ").concat(r,")")+a}return a}function v(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function D(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var S={};Object.defineProperty(S,"__esModule",{value:!0}),S.canDragX=function(t){return"both"===t.props.axis||"x"===t.props.axis},S.canDragY=function(t){return"both"===t.props.axis||"y"===t.props.axis},S.createCoreData=function(t,e,n){const r=!(0,w.isNum)(t.lastX),o=M(t);return r?{node:o,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:o,deltaX:e-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:n}},S.createDraggableData=function(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}},S.getBoundPosition=function(t,e,n){if(!t.props.bounds)return[e,n];let{bounds:r}=t.props;r="string"==typeof r?r:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(r);const o=M(t);if("string"==typeof r){const{ownerDocument:t}=o,e=t.defaultView;let n;if(n="parent"===r?o.parentNode:t.querySelector(r),!(n instanceof e.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const a=n,i=e.getComputedStyle(o),s=e.getComputedStyle(a);r={left:-o.offsetLeft+(0,w.int)(s.paddingLeft)+(0,w.int)(i.marginLeft),top:-o.offsetTop+(0,w.int)(s.paddingTop)+(0,w.int)(i.marginTop),right:(0,x.innerWidth)(a)-(0,x.outerWidth)(o)-o.offsetLeft+(0,w.int)(s.paddingRight)-(0,w.int)(i.marginRight),bottom:(0,x.innerHeight)(a)-(0,x.outerHeight)(o)-o.offsetTop+(0,w.int)(s.paddingBottom)-(0,w.int)(i.marginBottom)}}(0,w.isNum)(r.right)&&(e=Math.min(e,r.right));(0,w.isNum)(r.bottom)&&(n=Math.min(n,r.bottom));(0,w.isNum)(r.left)&&(e=Math.max(e,r.left));(0,w.isNum)(r.top)&&(n=Math.max(n,r.top));return[e,n]},S.getControlPosition=function(t,e,n){const r="number"==typeof e?(0,x.getTouch)(t,e):null;if("number"==typeof e&&!r)return null;const o=M(n),a=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,x.offsetXYFromParent)(r||t,a,n.props.scale)},S.snapToGrid=function(t,e,n){const r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]};var w=l,x=s;function M(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var P={},O={};Object.defineProperty(O,"__esModule",{value:!0}),O.default=function(){},Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var N=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=_(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}r.default=t,n&&n.set(t,r);return r}(e),T=Y(n()),j=Y(r),C=s,E=S,k=l,X=Y(O);function Y(t){return t&&t.__esModule?t:{default:t}}function _(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(_=function(t){return t?n:e})(t)}function W(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const L={start:"touchstart",move:"touchmove",stop:"touchend"},U={start:"mousedown",move:"mousemove",stop:"mouseup"};let A=U,H=class extends N.Component{constructor(){super(...arguments),W(this,"dragging",!1),W(this,"lastX",NaN),W(this,"lastY",NaN),W(this,"touchIdentifier",null),W(this,"mounted",!1),W(this,"handleDragStart",(t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;const e=this.findDOMNode();if(!e||!e.ownerDocument||!e.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=e;if(this.props.disabled||!(t.target instanceof n.defaultView.Node)||this.props.handle&&!(0,C.matchesSelectorAndParentsTo)(t.target,this.props.handle,e)||this.props.cancel&&(0,C.matchesSelectorAndParentsTo)(t.target,this.props.cancel,e))return;"touchstart"===t.type&&t.preventDefault();const r=(0,C.getTouchIdentifier)(t);this.touchIdentifier=r;const o=(0,E.getControlPosition)(t,r,this);if(null==o)return;const{x:a,y:i}=o,s=(0,E.createCoreData)(this,a,i);(0,X.default)("DraggableCore: handleDragStart: %j",s),(0,X.default)("calling",this.props.onStart);!1!==this.props.onStart(t,s)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,C.addUserSelectStyles)(n),this.dragging=!0,this.lastX=a,this.lastY=i,(0,C.addEvent)(n,A.move,this.handleDrag),(0,C.addEvent)(n,A.stop,this.handleDragStop))})),W(this,"handleDrag",(t=>{const e=(0,E.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:n,y:r}=e;if(Array.isArray(this.props.grid)){let t=n-this.lastX,e=r-this.lastY;if([t,e]=(0,E.snapToGrid)(this.props.grid,t,e),!t&&!e)return;n=this.lastX+t,r=this.lastY+e}const o=(0,E.createCoreData)(this,n,r);(0,X.default)("DraggableCore: handleDrag: %j",o);if(!1!==this.props.onDrag(t,o)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(a){const t=document.createEvent("MouseEvents");t.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(t)}})),W(this,"handleDragStop",(t=>{if(!this.dragging)return;const e=(0,E.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:n,y:r}=e;if(Array.isArray(this.props.grid)){let t=n-this.lastX||0,e=r-this.lastY||0;[t,e]=(0,E.snapToGrid)(this.props.grid,t,e),n=this.lastX+t,r=this.lastY+e}const o=(0,E.createCoreData)(this,n,r);if(!1===this.props.onStop(t,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,C.removeUserSelectStyles)(a.ownerDocument),(0,X.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,X.default)("DraggableCore: Removing handlers"),(0,C.removeEvent)(a.ownerDocument,A.move,this.handleDrag),(0,C.removeEvent)(a.ownerDocument,A.stop,this.handleDragStop))})),W(this,"onMouseDown",(t=>(A=U,this.handleDragStart(t)))),W(this,"onMouseUp",(t=>(A=U,this.handleDragStop(t)))),W(this,"onTouchStart",(t=>(A=L,this.handleDragStart(t)))),W(this,"onTouchEnd",(t=>(A=L,this.handleDragStop(t))))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,C.addEvent)(t,L.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:e}=t;(0,C.removeEvent)(e,U.move,this.handleDrag),(0,C.removeEvent)(e,L.move,this.handleDrag),(0,C.removeEvent)(e,U.stop,this.handleDragStop),(0,C.removeEvent)(e,L.stop,this.handleDragStop),(0,C.removeEvent)(t,L.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,C.removeUserSelectStyles)(e)}}findDOMNode(){var t,e;return null!==(t=this.props)&&void 0!==t&&t.nodeRef?null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current:j.default.findDOMNode(this)}render(){return N.cloneElement(N.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};P.default=H,W(H,"displayName","DraggableCore"),W(H,"propTypes",{allowAnyClick:T.default.bool,children:T.default.node.isRequired,disabled:T.default.bool,enableUserSelectHack:T.default.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:T.default.arrayOf(T.default.number),handle:T.default.string,cancel:T.default.string,nodeRef:T.default.object,onStart:T.default.func,onDrag:T.default.func,onStop:T.default.func,onMouseDown:T.default.func,scale:T.default.number,className:k.dontSetMe,style:k.dontSetMe,transform:k.dontSetMe}),W(H,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return g.default}}),t.default=void 0;var a=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=y(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}r.default=t,n&&n.set(t,r);return r}(e),i=m(n()),u=m(r),d=m(o),c=s,f=S,p=l,g=m(P),h=m(O);function m(t){return t&&t.__esModule?t:{default:t}}function y(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(y=function(t){return t?n:e})(t)}function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b.apply(this,arguments)}function v(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class D extends a.Component{static getDerivedStateFromProps(t,e){let{position:n}=t,{prevPropsPosition:r}=e;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,h.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(t){super(t),v(this,"onDragStart",((t,e)=>{(0,h.default)("Draggable: onDragStart: %j",e);if(!1===this.props.onStart(t,(0,f.createDraggableData)(this,e)))return!1;this.setState({dragging:!0,dragged:!0})})),v(this,"onDrag",((t,e)=>{if(!this.state.dragging)return!1;(0,h.default)("Draggable: onDrag: %j",e);const n=(0,f.createDraggableData)(this,e),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:t,y:e}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[o,a]=(0,f.getBoundPosition)(this,r.x,r.y);r.x=o,r.y=a,r.slackX=this.state.slackX+(t-r.x),r.slackY=this.state.slackY+(e-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(t,n))return!1;this.setState(r)})),v(this,"onDragStop",((t,e)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(t,(0,f.createDraggableData)(this,e)))return!1;(0,h.default)("Draggable: onDragStop: %j",e);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:t,y:e}=this.props.position;n.x=t,n.y=e}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:{...t.position},slackX:0,slackY:0,isElementSVG:!1},t.position&&!t.onDrag&&t.onStop}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var t,e;return null!==(t=null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current)&&void 0!==t?t:u.default.findDOMNode(this)}render(){const{axis:t,bounds:e,children:n,defaultPosition:r,defaultClassName:o,defaultClassNameDragging:i,defaultClassNameDragged:s,position:l,positionOffset:u,scale:p,...h}=this.props;let m={},y=null;const v=!Boolean(l)||this.state.dragging,D=l||r,S={x:(0,f.canDragX)(this)&&v?this.state.x:D.x,y:(0,f.canDragY)(this)&&v?this.state.y:D.y};this.state.isElementSVG?y=(0,c.createSVGTransform)(S,u):m=(0,c.createCSSTransform)(S,u);const w=(0,d.default)(n.props.className||"",o,{[i]:this.state.dragging,[s]:this.state.dragged});return a.createElement(g.default,b({},h,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),a.cloneElement(a.Children.only(n),{className:w,style:{...n.props.style,...m},transform:y}))}}t.default=D,v(D,"displayName","Draggable"),v(D,"propTypes",{...g.default.propTypes,axis:i.default.oneOf(["both","x","y","none"]),bounds:i.default.oneOfType([i.default.shape({left:i.default.number,right:i.default.number,top:i.default.number,bottom:i.default.number}),i.default.string,i.default.oneOf([!1])]),defaultClassName:i.default.string,defaultClassNameDragging:i.default.string,defaultClassNameDragged:i.default.string,defaultPosition:i.default.shape({x:i.default.number,y:i.default.number}),positionOffset:i.default.shape({x:i.default.oneOfType([i.default.number,i.default.string]),y:i.default.oneOfType([i.default.number,i.default.string])}),position:i.default.shape({x:i.default.number,y:i.default.number}),className:p.dontSetMe,style:p.dontSetMe,transform:p.dontSetMe}),v(D,"defaultProps",{...g.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})}(i);const{default:R,DraggableCore:V}=i;a.exports=R,a.exports.default=R,a.exports.DraggableCore=V;var I=a.exports;const B=t(I);export{B as D,I as c};

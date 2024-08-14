import{r as e,e as n}from"./react@18.3.1.zIIbIvjs.js";import"./react-is@18.3.1.D9jp0pkd.js";import{K as t,w as o,e as r,z as a,E as u,l as i,d as l,u as c,A as s,n as d,x as p,c as f,v}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1.bvtOFkwB.js";import{c as m}from"./classnames@2.5.1.Xo58IrnT.js";import{F as h}from"./rc-overflow@1.3.2_react-dom@18.3.1_react@18.3.1.D9yQQx8t.js";import"./react-dom@18.3.1_react@18.3.1.D2tCNtKO.js";import"./rc-resize-observer@1.4.0_react-dom@18.3.1_react@18.3.1.sEitUVxo.js";import"./rc-motion@2.9.2_react-dom@18.3.1_react@18.3.1.4o6u3OvH.js";import{f as g,g as b,h as w,b as y,j as C,l as E,o as S,i as x}from"./@babel_runtime@7.24.7.uphKh7BM.js";import{T as I}from"./@rc-component_trigger@2.2.0_react-dom@18.3.1_react@18.3.1.Ddv5iqFm.js";import{L as D}from"./rc-virtual-list@3.12.0_react-dom@18.3.1_react@18.3.1.DDXxZg14.js";var M=function(n){var t=n.className,o=n.customizeIcon,r=n.customizeIconProps,a=n.children,u=n.onMouseDown,i=n.onClick,l="function"==typeof o?o(r):o;return e.createElement("span",{className:t,onMouseDown:function(e){e.preventDefault(),null==u||u(e)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:i,"aria-hidden":!0},void 0!==l?l:e.createElement("span",{className:m(t.split(/\s+/).map((function(e){return"".concat(e,"-icon")})))},a))},N=e.createContext(null);function R(){return e.useContext(N)}function P(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,t=e.useRef(null),o=e.useRef(null);return e.useEffect((function(){return function(){window.clearTimeout(o.current)}}),[]),[function(){return t.current},function(e){(e||null===t.current)&&(t.current=e),window.clearTimeout(o.current),o.current=window.setTimeout((function(){t.current=null}),n)}]}var V=function(n,t){var a,u=n.prefixCls,i=n.id,l=n.inputElement,c=n.disabled,s=n.tabIndex,d=n.autoFocus,p=n.autoComplete,f=n.editable,v=n.activeDescendantId,h=n.value,g=n.maxLength,b=n.onKeyDown,y=n.onMouseDown,C=n.onChange,E=n.onPaste,S=n.onCompositionStart,x=n.onCompositionEnd,I=n.open,D=n.attrs,M=l||e.createElement("input",null),N=M,R=N.ref,P=N.props,V=P.onKeyDown,O=P.onChange,T=P.onMouseDown,k=P.onCompositionStart,A=P.onCompositionEnd,_=P.style;return o(!("maxLength"in M.props)),M=e.cloneElement(M,w(w(w({type:"search"},P),{},{id:i,ref:r(t,R),disabled:c,tabIndex:s,autoComplete:p||"off",autoFocus:d,className:m("".concat(u,"-selection-search-input"),null===(a=M)||void 0===a||null===(a=a.props)||void 0===a?void 0:a.className),role:"combobox","aria-expanded":I||!1,"aria-haspopup":"listbox","aria-owns":"".concat(i,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(i,"_list"),"aria-activedescendant":I?v:void 0},D),{},{value:f?h:"",maxLength:g,readOnly:!f,unselectable:f?null:"on",style:w(w({},_),{},{opacity:f?null:0}),onKeyDown:function(e){b(e),V&&V(e)},onMouseDown:function(e){y(e),T&&T(e)},onChange:function(e){C(e),O&&O(e)},onCompositionStart:function(e){S(e),k&&k(e)},onCompositionEnd:function(e){x(e),A&&A(e)},onPaste:E}))},O=e.forwardRef(V);function T(e){return Array.isArray(e)?e:void 0!==e?[e]:[]}var k="undefined"!=typeof window&&window.document&&window.document.documentElement;function A(e){return["string","number"].includes(g(e))}function _(e){var n=void 0;return e&&(A(e.title)?n=e.title.toString():A(e.label)&&(n=e.label.toString())),n}function F(e){var n;return null!==(n=e.key)&&void 0!==n?n:e.value}var K=function(e){e.preventDefault(),e.stopPropagation()},L=function(n){var t,o,r=n.id,u=n.prefixCls,i=n.values,l=n.open,c=n.searchValue,s=n.autoClearSearchValue,d=n.inputRef,p=n.placeholder,f=n.disabled,v=n.mode,g=n.showSearch,w=n.autoFocus,C=n.autoComplete,E=n.activeDescendantId,S=n.tabIndex,x=n.removeIcon,I=n.maxTagCount,D=n.maxTagTextLength,N=n.maxTagPlaceholder,R=void 0===N?function(e){return"+ ".concat(e.length," ...")}:N,P=n.tagRender,V=n.onToggleOpen,T=n.onRemove,A=n.onInputChange,L=n.onInputPaste,j=n.onInputKeyDown,z=n.onInputMouseDown,W=n.onInputCompositionStart,H=n.onInputCompositionEnd,U=e.useRef(null),B=e.useState(0),Y=b(B,2),G=Y[0],X=Y[1],J=e.useState(!1),Q=b(J,2),$=Q[0],q=Q[1],Z="".concat(u,"-selection"),ee=l||"multiple"===v&&!1===s||"tags"===v?c:"",ne="tags"===v||"multiple"===v&&!1===s||g&&(l||$);t=function(){X(U.current.scrollWidth)},o=[ee],k?e.useLayoutEffect(t,o):e.useEffect(t,o);var te=function(n,t,o,r,a){return e.createElement("span",{title:_(n),className:m("".concat(Z,"-item"),y({},"".concat(Z,"-item-disabled"),o))},e.createElement("span",{className:"".concat(Z,"-item-content")},t),r&&e.createElement(M,{className:"".concat(Z,"-item-remove"),onMouseDown:K,onClick:a,customizeIcon:x},"×"))},oe=function(n,t,o,r,a,u){return e.createElement("span",{onMouseDown:function(e){K(e),V(!l)}},P({label:t,value:n,disabled:o,closable:r,onClose:a,isMaxTag:!!u}))},re=e.createElement("div",{className:"".concat(Z,"-search"),style:{width:G},onFocus:function(){q(!0)},onBlur:function(){q(!1)}},e.createElement(O,{ref:d,open:l,prefixCls:u,id:r,inputElement:null,disabled:f,autoFocus:w,autoComplete:C,editable:ne,activeDescendantId:E,value:ee,onKeyDown:j,onMouseDown:z,onChange:A,onPaste:L,onCompositionStart:W,onCompositionEnd:H,tabIndex:S,attrs:a(n,!0)}),e.createElement("span",{ref:U,className:"".concat(Z,"-search-mirror"),"aria-hidden":!0},ee," ")),ae=e.createElement(h,{prefixCls:"".concat(Z,"-overflow"),data:i,renderItem:function(e){var n=e.disabled,t=e.label,o=e.value,r=!f&&!n,a=t;if("number"==typeof D&&("string"==typeof t||"number"==typeof t)){var u=String(a);u.length>D&&(a="".concat(u.slice(0,D),"..."))}var i=function(n){n&&n.stopPropagation(),T(e)};return"function"==typeof P?oe(o,a,n,r,i):te(e,a,n,r,i)},renderRest:function(e){var n="function"==typeof R?R(e):R;return"function"==typeof P?oe(void 0,n,!1,!1,void 0,!0):te({title:n},n,!1)},suffix:re,itemKey:F,maxCount:I});return e.createElement(e.Fragment,null,ae,!i.length&&!ee&&e.createElement("span",{className:"".concat(Z,"-placeholder")},p))},j=function(n){var t=n.inputElement,o=n.prefixCls,r=n.id,u=n.inputRef,i=n.disabled,l=n.autoFocus,c=n.autoComplete,s=n.activeDescendantId,d=n.mode,p=n.open,f=n.values,v=n.placeholder,m=n.tabIndex,h=n.showSearch,g=n.searchValue,w=n.activeValue,y=n.maxLength,C=n.onInputKeyDown,E=n.onInputMouseDown,S=n.onInputChange,x=n.onInputPaste,I=n.onInputCompositionStart,D=n.onInputCompositionEnd,M=n.title,N=e.useState(!1),R=b(N,2),P=R[0],V=R[1],T="combobox"===d,k=T||h,A=f[0],F=g||"";T&&w&&!P&&(F=w),e.useEffect((function(){T&&V(!1)}),[T,w]);var K=!("combobox"!==d&&!p&&!h)&&!!F,L=void 0===M?_(A):M,j=e.useMemo((function(){return A?null:e.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:K?{visibility:"hidden"}:void 0},v)}),[A,K,v,o]);return e.createElement(e.Fragment,null,e.createElement("span",{className:"".concat(o,"-selection-search")},e.createElement(O,{ref:u,prefixCls:o,id:r,open:p,inputElement:t,disabled:i,autoFocus:l,autoComplete:c,editable:k,activeDescendantId:s,value:F,onKeyDown:C,onMouseDown:E,onChange:function(e){V(!0),S(e)},onPaste:x,onCompositionStart:I,onCompositionEnd:D,tabIndex:m,attrs:a(n,!0),maxLength:T?y:void 0})),!T&&A?e.createElement("span",{className:"".concat(o,"-selection-item"),title:L,style:K?{visibility:"hidden"}:void 0},A.label):null,j)},z=function(n,o){var r=e.useRef(null),a=e.useRef(!1),u=n.prefixCls,i=n.open,l=n.mode,c=n.showSearch,s=n.tokenWithEnter,d=n.disabled,p=n.autoClearSearchValue,f=n.onSearch,v=n.onSearchSubmit,m=n.onToggleOpen,h=n.onInputKeyDown,g=n.domRef;e.useImperativeHandle(o,(function(){return{focus:function(e){r.current.focus(e)},blur:function(){r.current.blur()}}}));var w=P(0),y=b(w,2),E=y[0],S=y[1],x=e.useRef(null),I=function(e){!1!==f(e,!0,a.current)&&m(!0)},D={inputRef:r,onInputKeyDown:function(e){var n,o=e.which;o!==t.UP&&o!==t.DOWN||e.preventDefault(),h&&h(e),o!==t.ENTER||"tags"!==l||a.current||i||null==v||v(e.target.value),n=o,[t.ESC,t.SHIFT,t.BACKSPACE,t.TAB,t.WIN_KEY,t.ALT,t.META,t.WIN_KEY_RIGHT,t.CTRL,t.SEMICOLON,t.EQUALS,t.CAPS_LOCK,t.CONTEXT_MENU,t.F1,t.F2,t.F3,t.F4,t.F5,t.F6,t.F7,t.F8,t.F9,t.F10,t.F11,t.F12].includes(n)||m(!0)},onInputMouseDown:function(){S(!0)},onInputChange:function(e){var n=e.target.value;if(s&&x.current&&/[\r\n]/.test(x.current)){var t=x.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");n=n.replace(t,x.current)}x.current=null,I(n)},onInputPaste:function(e){var n=e.clipboardData,t=null==n?void 0:n.getData("text");x.current=t||""},onInputCompositionStart:function(){a.current=!0},onInputCompositionEnd:function(e){a.current=!1,"combobox"!==l&&I(e.target.value)}},M="multiple"===l||"tags"===l?e.createElement(L,C({},n,D)):e.createElement(j,C({},n,D));return e.createElement("div",{ref:g,className:"".concat(u,"-selector"),onClick:function(e){e.target!==r.current&&(void 0!==document.body.style.msTouchAction?setTimeout((function(){r.current.focus()})):r.current.focus())},onMouseDown:function(e){var n=E();e.target===r.current||n||"combobox"===l&&d||e.preventDefault(),("combobox"===l||c&&n)&&i||(i&&!1!==p&&f("",!0,!1),m())}},M)},W=e.forwardRef(z),H=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],U=function(n,t){var o=n.prefixCls;n.disabled;var r=n.visible,a=n.children,u=n.popupElement,i=n.animation,l=n.transitionName,c=n.dropdownStyle,s=n.dropdownClassName,d=n.direction,p=void 0===d?"ltr":d,f=n.placement,v=n.builtinPlacements,h=n.dropdownMatchSelectWidth,g=n.dropdownRender,b=n.dropdownAlign,S=n.getPopupContainer,x=n.empty,D=n.getTriggerDOMNode,M=n.onPopupVisibleChange,N=n.onPopupMouseEnter,R=E(n,H),P="".concat(o,"-dropdown"),V=u;g&&(V=g(u));var O=e.useMemo((function(){return v||function(e){var n=!0===e?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"}}}(h)}),[v,h]),T=i?"".concat(P,"-").concat(i):l,k="number"==typeof h,A=e.useMemo((function(){return k?null:!1===h?"minWidth":"width"}),[h,k]),_=c;k&&(_=w(w({},_),{},{width:h}));var F=e.useRef(null);return e.useImperativeHandle(t,(function(){return{getPopupElement:function(){var e;return null===(e=F.current)||void 0===e?void 0:e.popupElement}}})),e.createElement(I,C({},R,{showAction:M?["click"]:[],hideAction:M?["click"]:[],popupPlacement:f||("rtl"===p?"bottomRight":"bottomLeft"),builtinPlacements:O,prefixCls:P,popupTransitionName:T,popup:e.createElement("div",{onMouseEnter:N},V),ref:F,stretch:A,popupAlign:b,popupVisible:r,getPopupContainer:S,popupClassName:m(s,y({},"".concat(P,"-empty"),x)),popupStyle:_,getTriggerDOMNode:D,onPopupVisibleChange:M}),a)},B=e.forwardRef(U);function Y(e,n){var t,o=e.key;return"value"in e&&(t=e.value),null!=o?o:void 0!==t?t:"rc-index-key-".concat(n)}function G(e){return void 0!==e&&!Number.isNaN(e)}function X(e,n){var t=e||{},o=t.label||(n?"children":"label");return{label:o,value:t.value||"value",options:t.options||"options",groupLabel:t.groupLabel||o}}function J(e){var n=w({},e);return"props"in n||Object.defineProperty(n,"props",{get:function(){return u(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),n}}),n}var Q=e.createContext(null);function $(n){var t=n.visible,o=n.values;if(!t)return null;return e.createElement("span",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"".concat(o.slice(0,50).map((function(e){var n=e.label,t=e.value;return["number","string"].includes(g(n))?n:t})).join(", ")),o.length>50?", ...":null)}var q=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Z=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"],ee=function(e){return"tags"===e||"multiple"===e},ne=e.forwardRef((function(o,r){var a,u=o.id,d=o.prefixCls,p=o.className,f=o.showSearch,v=o.tagRender,h=o.direction,I=o.omitDomProps,D=o.displayValues,R=o.onDisplayValuesChange,V=o.emptyOptions,O=o.notFoundContent,T=void 0===O?"Not Found":O,k=o.onClear,A=o.mode,_=o.disabled,F=o.loading,K=o.getInputElement,L=o.getRawInputElement,j=o.open,z=o.defaultOpen,H=o.onDropdownVisibleChange,U=o.activeValue,Y=o.onActiveValueChange,X=o.activeDescendantId,J=o.searchValue,ne=o.autoClearSearchValue,te=o.onSearch,oe=o.onSearchSplit,re=o.tokenSeparators,ae=o.allowClear,ue=o.suffixIcon,ie=o.clearIcon,le=o.OptionList,ce=o.animation,se=o.transitionName,de=o.dropdownStyle,pe=o.dropdownClassName,fe=o.dropdownMatchSelectWidth,ve=o.dropdownRender,me=o.dropdownAlign,he=o.placement,ge=o.builtinPlacements,be=o.getPopupContainer,we=o.showAction,ye=void 0===we?[]:we,Ce=o.onFocus,Ee=o.onBlur,Se=o.onKeyUp,xe=o.onKeyDown,Ie=o.onMouseDown,De=E(o,q),Me=ee(A),Ne=(void 0!==f?f:Me)||"combobox"===A,Re=w({},De);Z.forEach((function(e){delete Re[e]})),null==I||I.forEach((function(e){delete Re[e]}));var Pe=e.useState(!1),Ve=b(Pe,2),Oe=Ve[0],Te=Ve[1];e.useEffect((function(){Te(i())}),[]);var ke=e.useRef(null),Ae=e.useRef(null),_e=e.useRef(null),Fe=e.useRef(null),Ke=e.useRef(null),Le=e.useRef(!1),je=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=e.useState(!1),o=b(t,2),r=o[0],a=o[1],u=e.useRef(null),i=function(){window.clearTimeout(u.current)};return e.useEffect((function(){return i}),[]),[r,function(e,t){i(),u.current=window.setTimeout((function(){a(e),t&&t()}),n)},i]}(),ze=b(je,3),We=ze[0],He=ze[1],Ue=ze[2];e.useImperativeHandle(r,(function(){var e,n;return{focus:null===(e=Fe.current)||void 0===e?void 0:e.focus,blur:null===(n=Fe.current)||void 0===n?void 0:n.blur,scrollTo:function(e){var n;return null===(n=Ke.current)||void 0===n?void 0:n.scrollTo(e)},nativeElement:ke.current||Ae.current}}));var Be=e.useMemo((function(){var e;if("combobox"!==A)return J;var n=null===(e=D[0])||void 0===e?void 0:e.value;return"string"==typeof n||"number"==typeof n?String(n):""}),[J,A,D]),Ye="combobox"===A&&"function"==typeof K&&K()||null,Ge="function"==typeof L&&L(),Xe=l(Ae,null==Ge||null===(a=Ge.props)||void 0===a?void 0:a.ref),Je=e.useState(!1),Qe=b(Je,2),$e=Qe[0],qe=Qe[1];c((function(){qe(!0)}),[]);var Ze=s(!1,{defaultValue:z,value:j}),en=b(Ze,2),nn=en[0],tn=en[1],on=!!$e&&nn,rn=!T&&V;(_||rn&&on&&"combobox"===A)&&(on=!1);var an=!rn&&on,un=e.useCallback((function(e){var n=void 0!==e?e:!on;_||(tn(n),on!==n&&(null==H||H(n)))}),[_,on,tn,H]),ln=e.useMemo((function(){return(re||[]).some((function(e){return["\n","\r\n"].includes(e)}))}),[re]),cn=e.useContext(Q)||{},sn=cn.maxCount,dn=cn.rawValues,pn=function(e,n,t){if(!(Me&&G(sn)&&(null==dn?void 0:dn.size)>=sn)){var o=!0,r=e;null==Y||Y(null);var a=function(e,n,t){if(!n||!n.length)return null;var o=!1,r=function e(n,t){var r=S(t),a=r[0],u=r.slice(1);if(!a)return[n];var i=n.split(a);return o=o||i.length>1,i.reduce((function(n,t){return[].concat(x(n),x(e(t,u)))}),[]).filter(Boolean)}(e,n);return o?void 0!==t?r.slice(0,t):r:null}(e,re,G(sn)?sn-dn.size:void 0),u=t?null:a;return"combobox"!==A&&u&&(r="",null==oe||oe(u),un(!1),o=!1),te&&Be!==r&&te(r,{source:n?"typing":"effect"}),o}};e.useEffect((function(){on||Me||"combobox"===A||pn("",!1,!1)}),[on]),e.useEffect((function(){nn&&_&&tn(!1),_&&!Le.current&&He(!1)}),[_]);var fn=P(),vn=b(fn,2),mn=vn[0],hn=vn[1],gn=e.useRef(!1),bn=[];e.useEffect((function(){return function(){bn.forEach((function(e){return clearTimeout(e)})),bn.splice(0,bn.length)}}),[]);var wn,yn=e.useState({}),Cn=b(yn,2)[1];Ge&&(wn=function(e){un(e)}),function(n,t,o,r){var a=e.useRef(null);a.current={open:t,triggerOpen:o,customizedTrigger:r},e.useEffect((function(){function e(e){var t;if(null===(t=a.current)||void 0===t||!t.customizedTrigger){var o=e.target;o.shadowRoot&&e.composed&&(o=e.composedPath()[0]||o),a.current.open&&n().filter((function(e){return e})).every((function(e){return!e.contains(o)&&e!==o}))&&a.current.triggerOpen(!1)}}return window.addEventListener("mousedown",e),function(){return window.removeEventListener("mousedown",e)}}),[])}((function(){var e;return[ke.current,null===(e=_e.current)||void 0===e?void 0:e.getPopupElement()]}),an,un,!!Ge);var En,Sn=e.useMemo((function(){return w(w({},o),{},{notFoundContent:T,open:on,triggerOpen:an,id:u,showSearch:Ne,multiple:Me,toggleOpen:un})}),[o,T,an,on,u,Ne,Me,un]),xn=!!ue||F;xn&&(En=e.createElement(M,{className:m("".concat(d,"-arrow"),y({},"".concat(d,"-arrow-loading"),F)),customizeIcon:ue,customizeIconProps:{loading:F,searchValue:Be,open:on,focused:We,showSearch:Ne}}));var In,Dn=function(e,t,o,r,a){var u=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,c=n.useMemo((function(){return"object"===g(r)?r.clearIcon:a||void 0}),[r,a]);return{allowClear:n.useMemo((function(){return!(u||!r||!o.length&&!i||"combobox"===l&&""===i)}),[r,u,o.length,i,l]),clearIcon:n.createElement(M,{className:"".concat(e,"-clear"),onMouseDown:t,customizeIcon:c},"×")}}(d,(function(){var e;null==k||k(),null===(e=Fe.current)||void 0===e||e.focus(),R([],{type:"clear",values:D}),pn("",!1,!1)}),D,ae,ie,_,Be,A),Mn=Dn.allowClear,Nn=Dn.clearIcon,Rn=e.createElement(le,{ref:Ke}),Pn=m(d,p,y(y(y(y(y(y(y(y(y(y({},"".concat(d,"-focused"),We),"".concat(d,"-multiple"),Me),"".concat(d,"-single"),!Me),"".concat(d,"-allow-clear"),ae),"".concat(d,"-show-arrow"),xn),"".concat(d,"-disabled"),_),"".concat(d,"-loading"),F),"".concat(d,"-open"),on),"".concat(d,"-customize-input"),Ye),"".concat(d,"-show-search"),Ne)),Vn=e.createElement(B,{ref:_e,disabled:_,prefixCls:d,visible:an,popupElement:Rn,animation:ce,transitionName:se,dropdownStyle:de,dropdownClassName:pe,direction:h,dropdownMatchSelectWidth:fe,dropdownRender:ve,dropdownAlign:me,placement:he,builtinPlacements:ge,getPopupContainer:be,empty:V,getTriggerDOMNode:function(e){return Ae.current||e},onPopupVisibleChange:wn,onPopupMouseEnter:function(){Cn({})}},Ge?e.cloneElement(Ge,{ref:Xe}):e.createElement(W,C({},o,{domRef:Ae,prefixCls:d,inputElement:Ye,ref:Fe,id:u,showSearch:Ne,autoClearSearchValue:ne,mode:A,activeDescendantId:X,tagRender:v,values:D,open:on,onToggleOpen:un,activeValue:U,searchValue:Be,onSearch:pn,onSearchSubmit:function(e){e&&e.trim()&&te(e,{source:"submit"})},onRemove:function(e){var n=D.filter((function(n){return n!==e}));R(n,{type:"remove",values:[e]})},tokenWithEnter:ln})));return In=Ge?Vn:e.createElement("div",C({className:Pn},Re,{ref:ke,onMouseDown:function(e){var n,t=e.target,o=null===(n=_e.current)||void 0===n?void 0:n.getPopupElement();if(o&&o.contains(t)){var r=setTimeout((function(){var e,n=bn.indexOf(r);-1!==n&&bn.splice(n,1),Ue(),Oe||o.contains(document.activeElement)||null===(e=Fe.current)||void 0===e||e.focus()}));bn.push(r)}for(var a=arguments.length,u=new Array(a>1?a-1:0),i=1;i<a;i++)u[i-1]=arguments[i];null==Ie||Ie.apply(void 0,[e].concat(u))},onKeyDown:function(e){var n,o=mn(),r=e.which;if(r===t.ENTER&&("combobox"!==A&&e.preventDefault(),on||un(!0)),hn(!!Be),r===t.BACKSPACE&&!o&&Me&&!Be&&D.length){for(var a=x(D),u=null,i=a.length-1;i>=0;i-=1){var l=a[i];if(!l.disabled){a.splice(i,1),u=l;break}}u&&R(a,{type:"remove",values:[u]})}for(var c=arguments.length,s=new Array(c>1?c-1:0),d=1;d<c;d++)s[d-1]=arguments[d];on&&(null===(n=Ke.current)||void 0===n||n.onKeyDown.apply(n,[e].concat(s))),null==xe||xe.apply(void 0,[e].concat(s))},onKeyUp:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r;on&&(null===(r=Ke.current)||void 0===r||r.onKeyUp.apply(r,[e].concat(t))),null==Se||Se.apply(void 0,[e].concat(t))},onFocus:function(){He(!0),_||(Ce&&!gn.current&&Ce.apply(void 0,arguments),ye.includes("focus")&&un(!0)),gn.current=!0},onBlur:function(){Le.current=!0,He(!1,(function(){gn.current=!1,Le.current=!1,un(!1)})),_||(Be&&("tags"===A?te(Be,{source:"submit"}):"multiple"===A&&te("",{source:"blur"})),Ee&&Ee.apply(void 0,arguments))}}),e.createElement($,{visible:We&&!on,values:D}),Vn,En,Mn&&Nn),e.createElement(N.Provider,{value:Sn},In)})),te=function(){return null};te.isSelectOptGroup=!0;var oe=function(){return null};oe.isSelectOption=!0;var re=["disabled","title","children","style","className"];function ae(e){return"string"==typeof e||"number"==typeof e}var ue=function(n,o){var r=R(),u=r.prefixCls,i=r.id,l=r.open,c=r.multiple,s=r.mode,f=r.searchValue,v=r.toggleOpen,h=r.notFoundContent,g=r.onPopupScroll,w=e.useContext(Q),S=w.maxCount,I=w.flattenOptions,N=w.onActiveValue,P=w.defaultActiveFirstOption,V=w.onSelect,O=w.menuItemSelectedIcon,T=w.rawValues,k=w.fieldNames,A=w.virtual,_=w.direction,F=w.listHeight,K=w.listItemHeight,L=w.optionRender,j="".concat(u,"-item"),z=d((function(){return I}),[l,I],(function(e,n){return n[0]&&e[1]!==n[1]})),W=e.useRef(null),H=e.useMemo((function(){return c&&G(S)&&(null==T?void 0:T.size)>=S}),[c,S,null==T?void 0:T.size]),U=function(e){e.preventDefault()},B=function(e){var n;null===(n=W.current)||void 0===n||n.scrollTo("number"==typeof e?{index:e}:e)},Y=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=z.length,o=0;o<t;o+=1){var r=(e+o*n+t)%t,a=z[r]||{},u=a.group,i=a.data;if(!(u||null!=i&&i.disabled||H))return r}return-1},X=e.useState((function(){return Y(0)})),J=b(X,2),$=J[0],q=J[1],Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];q(e);var t={source:n?"keyboard":"mouse"},o=z[e];o?N(o.value,e,t):N(null,-1,t)};e.useEffect((function(){Z(!1!==P?Y(0):-1)}),[z.length,f]);var ee=e.useCallback((function(e){return T.has(e)&&"combobox"!==s}),[s,x(T).toString(),T.size]);e.useEffect((function(){var e,n=setTimeout((function(){if(!c&&l&&1===T.size){var e=Array.from(T)[0],n=z.findIndex((function(n){return n.data.value===e}));-1!==n&&(Z(n),B(n))}}));l&&(null===(e=W.current)||void 0===e||e.scrollTo(void 0));return function(){return clearTimeout(n)}}),[l,f]);var ne=function(e){void 0!==e&&V(e,{selected:!T.has(e)}),c||v(!1)};if(e.useImperativeHandle(o,(function(){return{onKeyDown:function(e){var n=e.which,o=e.ctrlKey;switch(n){case t.N:case t.P:case t.UP:case t.DOWN:var r=0;if(n===t.UP?r=-1:n===t.DOWN?r=1:/(mac\sos|macintosh)/i.test(navigator.appVersion)&&o&&(n===t.N?r=1:n===t.P&&(r=-1)),0!==r){var a=Y($+r,r);B(a),Z(a,!0)}break;case t.ENTER:var u,i=z[$];!i||null!=i&&null!==(u=i.data)&&void 0!==u&&u.disabled||H?ne(void 0):ne(i.value),l&&e.preventDefault();break;case t.ESC:v(!1),l&&e.stopPropagation()}},onKeyUp:function(){},scrollTo:function(e){B(e)}}})),0===z.length)return e.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(j,"-empty"),onMouseDown:U},h);var te=Object.keys(k).map((function(e){return k[e]})),oe=function(e){return e.label};function ue(e,n){return{role:e.group?"presentation":"option",id:"".concat(i,"_list_").concat(n)}}var ie=function(n){var t=z[n];if(!t)return null;var o=t.data||{},r=o.value,u=t.group,i=a(o,!0),l=oe(t);return t?e.createElement("div",C({"aria-label":"string"!=typeof l||u?null:l},i,{key:n},ue(t,n),{"aria-selected":ee(r)}),r):null},le={role:"listbox",id:"".concat(i,"_list")};return e.createElement(e.Fragment,null,A&&e.createElement("div",C({},le,{style:{height:0,width:0,overflow:"hidden"}}),ie($-1),ie($),ie($+1)),e.createElement(D,{itemKey:"key",ref:W,data:z,height:F,itemHeight:K,fullHeight:!1,onMouseDown:U,onScroll:g,virtual:A,direction:_,innerProps:A?null:le},(function(n,t){var o=n.group,r=n.groupOption,u=n.data,i=n.label,l=n.value,c=u.key;if(o){var s,d=null!==(s=u.title)&&void 0!==s?s:ae(i)?i.toString():void 0;return e.createElement("div",{className:m(j,"".concat(j,"-group"),u.className),title:d},void 0!==i?i:c)}var f=u.disabled,v=u.title;u.children;var h=u.style,g=u.className,b=E(u,re),w=p(b,te),S=ee(l),x=f||!S&&H,I="".concat(j,"-option"),D=m(j,I,g,y(y(y(y({},"".concat(I,"-grouped"),r),"".concat(I,"-active"),$===t&&!x),"".concat(I,"-disabled"),x),"".concat(I,"-selected"),S)),N=oe(n),R=!O||"function"==typeof O||S,P="number"==typeof N?N:N||l,V=ae(P)?P.toString():void 0;return void 0!==v&&(V=v),e.createElement("div",C({},a(w),A?{}:ue(n,t),{"aria-selected":S,className:D,title:V,onMouseMove:function(){$===t||x||Z(t)},onClick:function(){x||ne(l)},style:h}),e.createElement("div",{className:"".concat(I,"-content")},"function"==typeof L?L(n,{index:t}):P),e.isValidElement(O)||S,R&&e.createElement(M,{className:"".concat(j,"-option-state"),customizeIcon:O,customizeIconProps:{value:l,disabled:x,isSelected:S}},S?"✓":null))})))},ie=e.forwardRef(ue);function le(e,n){return T(e).join("").toUpperCase().includes(n)}var ce=0,se=f();function de(n){var t=e.useState(),o=b(t,2),r=o[0],a=o[1];return e.useEffect((function(){var e;a("rc_select_".concat((se?(e=ce,ce+=1):e="TEST_OR_SSR",e)))}),[]),n||r}var pe=["children","value"],fe=["children"];function ve(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return v(n).map((function(n,o){if(!e.isValidElement(n)||!n.type)return null;var r=n,a=r.type.isSelectOptGroup,u=r.key,i=r.props,l=i.children,c=E(i,fe);return t||!a?function(e){var n=e,t=n.key,o=n.props,r=o.children,a=o.value,u=E(o,pe);return w({key:t,value:void 0!==a?a:t,children:r},u)}(n):w(w({key:"__RC_SELECT_GRP__".concat(null===u?o:u,"__"),label:u},c),{},{options:ve(l)})})).filter((function(e){return e}))}function me(n){var t=e.useRef();t.current=n;var o=e.useCallback((function(){return t.current.apply(t,arguments)}),[]);return o}var he=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","labelRender","value","defaultValue","labelInValue","onChange","maxCount"],ge=["inputValue"];var be=e.forwardRef((function(n,t){var o=n.id,r=n.mode,a=n.prefixCls,u=void 0===a?"rc-select":a,i=n.backfill,l=n.fieldNames,c=n.inputValue,d=n.searchValue,p=n.onSearch,f=n.autoClearSearchValue,v=void 0===f||f,m=n.onSelect,h=n.onDeselect,S=n.dropdownMatchSelectWidth,I=void 0===S||S,D=n.filterOption,M=n.filterSort,N=n.optionFilterProp,R=n.optionLabelProp,P=n.options,V=n.optionRender,O=n.children,k=n.defaultActiveFirstOption,A=n.menuItemSelectedIcon,_=n.virtual,F=n.direction,K=n.listHeight,L=void 0===K?200:K,j=n.listItemHeight,z=void 0===j?20:j,W=n.labelRender,H=n.value,U=n.defaultValue,B=n.labelInValue,G=n.onChange,$=n.maxCount,q=E(n,he),Z=de(o),te=ee(r),oe=!(P||!O),re=e.useMemo((function(){return(void 0!==D||"combobox"!==r)&&D}),[D,r]),ae=e.useMemo((function(){return X(l,oe)}),[JSON.stringify(l),oe]),ue=s("",{value:void 0!==d?d:c,postState:function(e){return e||""}}),ce=b(ue,2),se=ce[0],pe=ce[1],fe=function(n,t,o,r,a){return e.useMemo((function(){var e=n;!n&&(e=ve(t));var u=new Map,i=new Map,l=function(e,n,t){t&&"string"==typeof t&&e.set(n[t],n)};return function e(n){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=0;c<n.length;c+=1){var s=n[c];!s[o.options]||t?(u.set(s[o.value],s),l(i,s,o.label),l(i,s,r),l(i,s,a)):e(s[o.options],!0)}}(e),{options:e,valueOptions:u,labelOptions:i}}),[n,t,o,r,a])}(P,O,ae,N,R),be=fe.valueOptions,we=fe.labelOptions,ye=fe.options,Ce=e.useCallback((function(e){return T(e).map((function(e){var n,t,o,r,a,u;(function(e){return!e||"object"!==g(e)})(e)?n=e:(o=e.key,t=e.label,n=null!==(u=e.value)&&void 0!==u?u:o);var i,l=be.get(n);l&&(void 0===t&&(t=null==l?void 0:l[R||ae.label]),void 0===o&&(o=null!==(i=null==l?void 0:l.key)&&void 0!==i?i:n),r=null==l?void 0:l.disabled,a=null==l?void 0:l.title);return{label:t,value:n,key:o,disabled:r,title:a}}))}),[ae,R,be]),Ee=s(U,{value:H}),Se=b(Ee,2),xe=Se[0],Ie=Se[1],De=e.useMemo((function(){var e,n=Ce(te&&null===xe?[]:xe);return"combobox"===r&&function(e){return!e&&0!==e}(null===(e=n[0])||void 0===e?void 0:e.value)?[]:n}),[xe,Ce,r,te]),Me=function(n,t){var o=e.useRef({values:new Map,options:new Map});return[e.useMemo((function(){var e=o.current,r=e.values,a=e.options,u=n.map((function(e){var n;return void 0===e.label?w(w({},e),{},{label:null===(n=r.get(e.value))||void 0===n?void 0:n.label}):e})),i=new Map,l=new Map;return u.forEach((function(e){i.set(e.value,e),l.set(e.value,t.get(e.value)||a.get(e.value))})),o.current.values=i,o.current.options=l,u}),[n,t]),e.useCallback((function(e){return t.get(e)||o.current.options.get(e)}),[t])]}(De,be),Ne=b(Me,2),Re=Ne[0],Pe=Ne[1],Ve=e.useMemo((function(){if(!r&&1===Re.length){var e=Re[0];if(null===e.value&&(null===e.label||void 0===e.label))return[]}return Re.map((function(e){var n;return w(w({},e),{},{label:null!==(n="function"==typeof W?W(e):e.label)&&void 0!==n?n:e.value})}))}),[r,Re,W]),Oe=e.useMemo((function(){return new Set(Re.map((function(e){return e.value})))}),[Re]);e.useEffect((function(){if("combobox"===r){var e,n=null===(e=Re[0])||void 0===e?void 0:e.value;pe(function(e){return null!=e}(n)?String(n):"")}}),[Re]);var Te=me((function(e,n){var t=null!=n?n:e;return y(y({},ae.value,e),ae.label,t)})),ke=function(n,t,o,r,a){return e.useMemo((function(){if(!o||!1===r)return n;var e=t.options,u=t.label,i=t.value,l=[],c="function"==typeof r,s=o.toUpperCase(),d=c?r:function(n,t){return a?le(t[a],s):t[e]?le(t["children"!==u?u:"label"],s):le(t[i],s)},p=c?function(e){return J(e)}:function(e){return e};return n.forEach((function(n){if(n[e])if(d(o,p(n)))l.push(n);else{var t=n[e].filter((function(e){return d(o,p(e))}));t.length&&l.push(w(w({},n),{},y({},e,t)))}else d(o,p(n))&&l.push(n)})),l}),[n,r,a,o,t])}(e.useMemo((function(){if("tags"!==r)return ye;var e=x(ye);return x(Re).sort((function(e,n){return e.value<n.value?-1:1})).forEach((function(n){var t=n.value;(function(e){return be.has(e)})(t)||e.push(Te(t,n.label))})),e}),[Te,ye,be,Re,r]),ae,se,re,N),Ae=e.useMemo((function(){return"tags"!==r||!se||ke.some((function(e){return e[N||"value"]===se}))||ke.some((function(e){return e[ae.value]===se}))?ke:[Te(se)].concat(x(ke))}),[Te,N,r,ke,se,ae]),_e=e.useMemo((function(){return M?x(Ae).sort((function(e,n){return M(e,n,{searchValue:se})})):Ae}),[Ae,M,se]),Fe=e.useMemo((function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.fieldNames,o=n.childrenAsData,r=[],a=X(t,!1),u=a.label,i=a.value,l=a.options,c=a.groupLabel;return function e(n,t){Array.isArray(n)&&n.forEach((function(n){if(t||!(l in n)){var a=n[i];r.push({key:Y(n,r.length),groupOption:t,data:n,label:n[u],value:a})}else{var s=n[c];void 0===s&&o&&(s=n.label),r.push({key:Y(n,r.length),group:!0,data:n,label:s}),e(n[l],!0)}}))}(e,!1),r}(_e,{fieldNames:ae,childrenAsData:oe})}),[_e,ae,oe]),Ke=function(e){var n=Ce(e);if(Ie(n),G&&(n.length!==Re.length||n.some((function(e,n){var t;return(null===(t=Re[n])||void 0===t?void 0:t.value)!==(null==e?void 0:e.value)})))){var t=B?n:n.map((function(e){return e.value})),o=n.map((function(e){return J(Pe(e.value))}));G(te?t:t[0],te?o:o[0])}},Le=e.useState(null),je=b(Le,2),ze=je[0],We=je[1],He=e.useState(0),Ue=b(He,2),Be=Ue[0],Ye=Ue[1],Ge=void 0!==k?k:"combobox"!==r,Xe=e.useCallback((function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).source,o=void 0===t?"keyboard":t;Ye(n),i&&"combobox"===r&&null!==e&&"keyboard"===o&&We(String(e))}),[i,r]),Je=function(e,n,t){var o=function(){var n,t=Pe(e);return[B?{label:null==t?void 0:t[ae.label],value:e,key:null!==(n=null==t?void 0:t.key)&&void 0!==n?n:e}:e,J(t)]};if(n&&m){var r=o(),a=b(r,2),u=a[0],i=a[1];m(u,i)}else if(!n&&h&&"clear"!==t){var l=o(),c=b(l,2),s=c[0],d=c[1];h(s,d)}},Qe=me((function(e,n){var t,o=!te||n.selected;t=o?te?[].concat(x(Re),[e]):[e]:Re.filter((function(n){return n.value!==e})),Ke(t),Je(e,o),"combobox"===r?We(""):ee&&!v||(pe(""),We(""))})),$e=e.useMemo((function(){var e=!1!==_&&!1!==I;return w(w({},fe),{},{flattenOptions:Fe,onActiveValue:Xe,defaultActiveFirstOption:Ge,onSelect:Qe,menuItemSelectedIcon:A,rawValues:Oe,fieldNames:ae,virtual:e,direction:F,listHeight:L,listItemHeight:z,childrenAsData:oe,maxCount:$,optionRender:V})}),[$,fe,Fe,Xe,Ge,Qe,A,Oe,ae,_,I,F,L,z,oe,V]);return e.createElement(Q.Provider,{value:$e},e.createElement(ne,C({},q,{id:Z,prefixCls:u,ref:t,omitDomProps:ge,mode:r,displayValues:Ve,onDisplayValuesChange:function(e,n){Ke(e);var t=n.type,o=n.values;"remove"!==t&&"clear"!==t||o.forEach((function(e){Je(e.value,!1,t)}))},direction:F,searchValue:se,onSearch:function(e,n){if(pe(e),We(null),"submit"!==n.source)"blur"!==n.source&&("combobox"===r&&Ke(e),null==p||p(e));else{var t=(e||"").trim();if(t){var o=Array.from(new Set([].concat(x(Oe),[t])));Ke(o),Je(t,!0),pe("")}}},autoClearSearchValue:v,onSearchSplit:function(e){var n=e;"tags"!==r&&(n=e.map((function(e){var n=we.get(e);return null==n?void 0:n.value})).filter((function(e){return void 0!==e})));var t=Array.from(new Set([].concat(x(Oe),x(n))));Ke(t),t.forEach((function(e){Je(e,!0)}))},dropdownMatchSelectWidth:I,OptionList:ie,emptyOptions:!Fe.length,activeValue:ze,activeDescendantId:"".concat(Z,"_list_").concat(Be)})))}));be.Option=oe,be.OptGroup=te;export{ne as B,oe as O,be as T,te as a,de as b,R as u};
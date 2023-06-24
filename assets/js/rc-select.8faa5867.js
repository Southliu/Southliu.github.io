import{r as t}from"./react.402eeaf7.js";import"./react-is.f75b9dc6.js";import{w as st,p as dt,F as un,K as E,b as ft,t as vt,l as mt,h as Nn,E as hn,c as pt,C as gt,y as ht,x as bt}from"./rc-util.aac9ba6f.js";import{c as Be}from"./classnames.e70b85e0.js";import{e as q,f as Z,c as wn,b as te,g as Fe,n as Xe,z as St,d as Ee}from"./@babel_runtime.d5939a32.js";import{F as wt}from"./rc-overflow.a002648e.js";import{T as Ct}from"./@rc-component_trigger.34874bdf.js";import{L as yt}from"./rc-virtual-list.2be15ac8.js";var kn=t.createContext(null);function It(){return t.useContext(kn)}function Et(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=q(e,2),o=a[0],i=a[1],r=t.useRef(null),c=function(){window.clearTimeout(r.current)};t.useEffect(function(){return c},[]);var d=function(b,h){c(),r.current=window.setTimeout(function(){i(b),h&&h()},n)};return[o,d,c]}function Kn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(i){(i||e.current===null)&&(e.current=i),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function Dt(n,e,a,o){var i=t.useRef(null);i.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function r(c){var d;if(!((d=i.current)!==null&&d!==void 0&&d.customizedTrigger)){var f=c.target;f.shadowRoot&&c.composed&&(f=c.composedPath()[0]||f),i.current.open&&n().filter(function(b){return b}).every(function(b){return!b.contains(f)&&b!==f})&&i.current.triggerOpen(!1)}}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}var ln=function(e){var a=e.className,o=e.customizeIcon,i=e.customizeIconProps,r=e.onMouseDown,c=e.onClick,d=e.children,f;return typeof o=="function"?f=o(i):f=o,t.createElement("span",{className:a,onMouseDown:function(h){h.preventDefault(),r&&r(h)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:c,"aria-hidden":!0},f!==void 0?f:t.createElement("span",{className:Be(a.split(/\s+/).map(function(b){return"".concat(b,"-icon")}))},d))},Rt=function(e,a){var o,i,r=e.prefixCls,c=e.id,d=e.inputElement,f=e.disabled,b=e.tabIndex,h=e.autoFocus,s=e.autoComplete,w=e.editable,u=e.activeDescendantId,C=e.value,_=e.maxLength,B=e.onKeyDown,M=e.onMouseDown,T=e.onChange,A=e.onPaste,ee=e.onCompositionStart,J=e.onCompositionEnd,U=e.open,ue=e.attrs,j=d||t.createElement("input",null),z=j,F=z.ref,W=z.props,oe=W.onKeyDown,Q=W.onChange,V=W.onMouseDown,ae=W.onCompositionStart,L=W.onCompositionEnd,y=W.style;return st(!("maxLength"in j.props)),j=t.cloneElement(j,Z(Z(Z({type:"search"},W),{},{id:c,ref:dt(a,F),disabled:f,tabIndex:b,autoComplete:s||"off",autoFocus:h,className:Be("".concat(r,"-selection-search-input"),(o=j)===null||o===void 0||(i=o.props)===null||i===void 0?void 0:i.className),role:"combobox","aria-expanded":U,"aria-haspopup":"listbox","aria-owns":"".concat(c,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(c,"_list"),"aria-activedescendant":u},ue),{},{value:w?C:"",maxLength:_,readOnly:!w,unselectable:w?null:"on",style:Z(Z({},y),{},{opacity:w?null:0}),onKeyDown:function(N){B(N),oe&&oe(N)},onMouseDown:function(N){M(N),V&&V(N)},onChange:function(N){T(N),Q&&Q(N)},onCompositionStart:function(N){ee(N),ae&&ae(N)},onCompositionEnd:function(N){J(N),L&&L(N)},onPaste:A})),j},Cn=t.forwardRef(Rt);Cn.displayName="Input";function $n(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var Ot=typeof window<"u"&&window.document&&window.document.documentElement,Mt=Ot;function xt(n){return n!=null}function Vn(n){return["string","number"].includes(wn(n))}function Wn(n){var e=void 0;return n&&(Vn(n.title)?e=n.title.toString():Vn(n.label)&&(e=n.label.toString())),e}function Pt(n,e){Mt?t.useLayoutEffect(n,e):t.useEffect(n,e)}function Nt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var Tn=function(e){e.preventDefault(),e.stopPropagation()},Vt=function(e){var a=e.id,o=e.prefixCls,i=e.values,r=e.open,c=e.searchValue,d=e.autoClearSearchValue,f=e.inputRef,b=e.placeholder,h=e.disabled,s=e.mode,w=e.showSearch,u=e.autoFocus,C=e.autoComplete,_=e.activeDescendantId,B=e.tabIndex,M=e.removeIcon,T=e.maxTagCount,A=e.maxTagTextLength,ee=e.maxTagPlaceholder,J=ee===void 0?function(O){return"+ ".concat(O.length," ...")}:ee,U=e.tagRender,ue=e.onToggleOpen,j=e.onRemove,z=e.onInputChange,F=e.onInputPaste,W=e.onInputKeyDown,oe=e.onInputMouseDown,Q=e.onInputCompositionStart,V=e.onInputCompositionEnd,ae=t.useRef(null),L=t.useState(0),y=q(L,2),P=y[0],N=y[1],De=t.useState(!1),ve=q(De,2),se=ve[0],Le=ve[1],H="".concat(o,"-selection"),we=r||s==="multiple"&&d===!1||s==="tags"?c:"",_e=s==="tags"||s==="multiple"&&d===!1||w&&(r||se);Pt(function(){N(ae.current.scrollWidth)},[we]);function D(O,G,le,de,me){return t.createElement("span",{className:Be("".concat(H,"-item"),te({},"".concat(H,"-item-disabled"),le)),title:Wn(O)},t.createElement("span",{className:"".concat(H,"-item-content")},G),de&&t.createElement(ln,{className:"".concat(H,"-item-remove"),onMouseDown:Tn,onClick:me,customizeIcon:M},"×"))}function v(O,G,le,de,me){var ce=function(re){Tn(re),ue(!r)};return t.createElement("span",{onMouseDown:ce},U({label:G,value:O,disabled:le,closable:de,onClose:me}))}function R(O){var G=O.disabled,le=O.label,de=O.value,me=!h&&!G,ce=le;if(typeof A=="number"&&(typeof le=="string"||typeof le=="number")){var Pe=String(ce);Pe.length>A&&(ce="".concat(Pe.slice(0,A),"..."))}var re=function(Re){Re&&Re.stopPropagation(),j(O)};return typeof U=="function"?v(de,ce,G,me,re):D(O,ce,G,me,re)}function k(O){var G=typeof J=="function"?J(O):J;return D({title:G},G,!1)}var K=t.createElement("div",{className:"".concat(H,"-search"),style:{width:P},onFocus:function(){Le(!0)},onBlur:function(){Le(!1)}},t.createElement(Cn,{ref:f,open:r,prefixCls:o,id:a,inputElement:null,disabled:h,autoFocus:u,autoComplete:C,editable:_e,activeDescendantId:_,value:we,onKeyDown:W,onMouseDown:oe,onChange:z,onPaste:F,onCompositionStart:Q,onCompositionEnd:V,tabIndex:B,attrs:un(e,!0)}),t.createElement("span",{ref:ae,className:"".concat(H,"-search-mirror"),"aria-hidden":!0},we," ")),$=t.createElement(wt,{prefixCls:"".concat(H,"-overflow"),data:i,renderItem:R,renderRest:k,suffix:K,itemKey:Nt,maxCount:T});return t.createElement(t.Fragment,null,$,!i.length&&!we&&t.createElement("span",{className:"".concat(H,"-placeholder")},b))},Tt=function(e){var a=e.inputElement,o=e.prefixCls,i=e.id,r=e.inputRef,c=e.disabled,d=e.autoFocus,f=e.autoComplete,b=e.activeDescendantId,h=e.mode,s=e.open,w=e.values,u=e.placeholder,C=e.tabIndex,_=e.showSearch,B=e.searchValue,M=e.activeValue,T=e.maxLength,A=e.onInputKeyDown,ee=e.onInputMouseDown,J=e.onInputChange,U=e.onInputPaste,ue=e.onInputCompositionStart,j=e.onInputCompositionEnd,z=e.title,F=t.useState(!1),W=q(F,2),oe=W[0],Q=W[1],V=h==="combobox",ae=V||_,L=w[0],y=B||"";V&&M&&!oe&&(y=M),t.useEffect(function(){V&&Q(!1)},[V,M]);var P=h!=="combobox"&&!s&&!_?!1:!!y,N=z===void 0?Wn(L):z,De=function(){if(L)return null;var se=P?{visibility:"hidden"}:void 0;return t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:se},u)};return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(Cn,{ref:r,prefixCls:o,id:i,open:s,inputElement:a,disabled:c,autoFocus:d,autoComplete:f,editable:ae,activeDescendantId:b,value:y,onKeyDown:A,onMouseDown:ee,onChange:function(se){Q(!0),J(se)},onPaste:U,onCompositionStart:ue,onCompositionEnd:j,tabIndex:C,attrs:un(e,!0),maxLength:V?T:void 0})),!V&&L?t.createElement("span",{className:"".concat(o,"-selection-item"),title:N,style:P?{visibility:"hidden"}:void 0},L.label):null,De())};function Lt(n){return![E.ESC,E.SHIFT,E.BACKSPACE,E.TAB,E.WIN_KEY,E.ALT,E.META,E.WIN_KEY_RIGHT,E.CTRL,E.SEMICOLON,E.EQUALS,E.CAPS_LOCK,E.CONTEXT_MENU,E.F1,E.F2,E.F3,E.F4,E.F5,E.F6,E.F7,E.F8,E.F9,E.F10,E.F11,E.F12].includes(n)}var _t=function(e,a){var o=t.useRef(null),i=t.useRef(!1),r=e.prefixCls,c=e.open,d=e.mode,f=e.showSearch,b=e.tokenWithEnter,h=e.autoClearSearchValue,s=e.onSearch,w=e.onSearchSubmit,u=e.onToggleOpen,C=e.onInputKeyDown,_=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var B=Kn(0),M=q(B,2),T=M[0],A=M[1],ee=function(y){var P=y.which;(P===E.UP||P===E.DOWN)&&y.preventDefault(),C&&C(y),P===E.ENTER&&d==="tags"&&!i.current&&!c&&(w==null||w(y.target.value)),Lt(P)&&u(!0)},J=function(){A(!0)},U=t.useRef(null),ue=function(y){s(y,!0,i.current)!==!1&&u(!0)},j=function(){i.current=!0},z=function(y){i.current=!1,d!=="combobox"&&ue(y.target.value)},F=function(y){var P=y.target.value;if(b&&U.current&&/[\r\n]/.test(U.current)){var N=U.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");P=P.replace(N,U.current)}U.current=null,ue(P)},W=function(y){var P=y.clipboardData,N=P.getData("text");U.current=N},oe=function(y){var P=y.target;if(P!==o.current){var N=document.body.style.msTouchAction!==void 0;N?setTimeout(function(){o.current.focus()}):o.current.focus()}},Q=function(y){var P=T();y.target!==o.current&&!P&&d!=="combobox"&&y.preventDefault(),(d!=="combobox"&&(!f||!P)||!c)&&(c&&h!==!1&&s("",!0,!1),u())},V={inputRef:o,onInputKeyDown:ee,onInputMouseDown:J,onInputChange:F,onInputPaste:W,onInputCompositionStart:j,onInputCompositionEnd:z},ae=d==="multiple"||d==="tags"?t.createElement(Vt,Fe({},e,V)):t.createElement(Tt,Fe({},e,V));return t.createElement("div",{ref:_,className:"".concat(r,"-selector"),onClick:oe,onMouseDown:Q},ae)},Bn=t.forwardRef(_t);Bn.displayName="Selector";var At=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Ft=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"}}},kt=function(e,a){var o=e.prefixCls;e.disabled;var i=e.visible,r=e.children,c=e.popupElement,d=e.containerWidth,f=e.animation,b=e.transitionName,h=e.dropdownStyle,s=e.dropdownClassName,w=e.direction,u=w===void 0?"ltr":w,C=e.placement,_=e.builtinPlacements,B=e.dropdownMatchSelectWidth,M=e.dropdownRender,T=e.dropdownAlign,A=e.getPopupContainer,ee=e.empty,J=e.getTriggerDOMNode,U=e.onPopupVisibleChange,ue=e.onPopupMouseEnter,j=Xe(e,At),z="".concat(o,"-dropdown"),F=c;M&&(F=M(c));var W=t.useMemo(function(){return _||Ft(B)},[_,B]),oe=f?"".concat(z,"-").concat(f):b,Q=t.useRef(null);t.useImperativeHandle(a,function(){return{getPopupElement:function(){return Q.current}}});var V=Z({minWidth:d},h);return typeof B=="number"?V.width=B:B&&(V.width=d),t.createElement(Ct,Fe({},j,{showAction:U?["click"]:[],hideAction:U?["click"]:[],popupPlacement:C||(u==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:W,prefixCls:z,popupTransitionName:oe,popup:t.createElement("div",{ref:Q,onMouseEnter:ue},F),popupAlign:T,popupVisible:i,getPopupContainer:A,popupClassName:Be(s,te({},"".concat(z,"-empty"),ee)),popupStyle:V,getTriggerDOMNode:J,onPopupVisibleChange:U}),r)},zn=t.forwardRef(kt);zn.displayName="SelectTrigger";function Ln(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a??(o!==void 0?o:"rc-index-key-".concat(e))}function Hn(n,e){var a=n||{},o=a.label,i=a.value,r=a.options,c=a.groupLabel,d=o||(e?"children":"label");return{label:d,value:i||"value",options:r||"options",groupLabel:c||d}}function Kt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,i=[],r=Hn(a,!1),c=r.label,d=r.value,f=r.options,b=r.groupLabel;function h(s,w){s.forEach(function(u){if(w||!(f in u)){var C=u[d];i.push({key:Ln(u,i.length),groupOption:w,data:u,label:u[c],value:C})}else{var _=u[b];_===void 0&&o&&(_=u.label),i.push({key:Ln(u,i.length),group:!0,data:u,label:_}),h(u[f],!0)}})}return h(n,!1),i}function bn(n){var e=Z({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return ft(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}function $t(n,e){if(!e||!e.length)return null;var a=!1;function o(r,c){var d=St(c),f=d[0],b=d.slice(1);if(!f)return[r];var h=r.split(f);return a=a||h.length>1,h.reduce(function(s,w){return[].concat(Ee(s),Ee(o(w,b)))},[]).filter(function(s){return s})}var i=o(n,e);return a?i:null}var Wt=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Bt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Sn(n){return n==="tags"||n==="multiple"}var zt=t.forwardRef(function(n,e){var a,o,i=n.id,r=n.prefixCls,c=n.className,d=n.showSearch,f=n.tagRender,b=n.direction,h=n.omitDomProps,s=n.displayValues,w=n.onDisplayValuesChange,u=n.emptyOptions,C=n.notFoundContent,_=C===void 0?"Not Found":C,B=n.onClear,M=n.mode,T=n.disabled,A=n.loading,ee=n.getInputElement,J=n.getRawInputElement,U=n.open,ue=n.defaultOpen,j=n.onDropdownVisibleChange,z=n.activeValue,F=n.onActiveValueChange,W=n.activeDescendantId,oe=n.searchValue,Q=n.autoClearSearchValue,V=n.onSearch,ae=n.onSearchSplit,L=n.tokenSeparators,y=n.allowClear,P=n.showArrow,N=n.inputIcon,De=n.clearIcon,ve=n.OptionList,se=n.animation,Le=n.transitionName,H=n.dropdownStyle,we=n.dropdownClassName,_e=n.dropdownMatchSelectWidth,D=n.dropdownRender,v=n.dropdownAlign,R=n.placement,k=n.builtinPlacements,K=n.getPopupContainer,$=n.showAction,O=$===void 0?[]:$,G=n.onFocus,le=n.onBlur,de=n.onKeyUp,me=n.onKeyDown,ce=n.onMouseDown,Pe=Xe(n,Wt),re=Sn(M),X=(d!==void 0?d:re)||M==="combobox",Re=Z({},Pe);Bt.forEach(function(I){delete Re[I]}),h==null||h.forEach(function(I){delete Re[I]});var Ye=t.useState(!1),pe=q(Ye,2),be=pe[0],Je=pe[1];t.useEffect(function(){Je(vt())},[]);var Ce=t.useRef(null),Ae=t.useRef(null),Ne=t.useRef(null),ye=t.useRef(null),ge=t.useRef(null),cn=Et(),Ue=q(cn,3),Qe=Ue[0],ke=Ue[1],sn=Ue[2];t.useImperativeHandle(e,function(){var I,g;return{focus:(I=ye.current)===null||I===void 0?void 0:I.focus,blur:(g=ye.current)===null||g===void 0?void 0:g.blur,scrollTo:function(he){var ne;return(ne=ge.current)===null||ne===void 0?void 0:ne.scrollTo(he)}}});var Ie=t.useMemo(function(){var I;if(M!=="combobox")return oe;var g=(I=s[0])===null||I===void 0?void 0:I.value;return typeof g=="string"||typeof g=="number"?String(g):""},[oe,M,s]),en=M==="combobox"&&typeof ee=="function"&&ee()||null,Ve=typeof J=="function"&&J(),nn=mt(Ae,Ve==null||(a=Ve.props)===null||a===void 0?void 0:a.ref),tn=t.useState(!1),ze=q(tn,2),on=ze[0],dn=ze[1];Nn(function(){dn(!0)},[]);var fn=hn(!1,{defaultValue:ue,value:U}),an=q(fn,2),rn=an[0],p=an[1],l=on?rn:!1,m=!_&&u;(T||m&&l&&M==="combobox")&&(l=!1);var S=m?!1:l,x=t.useCallback(function(I){var g=I!==void 0?I:!l;T||(p(g),l!==g&&(j==null||j(g)))},[T,l,p,j]),Y=t.useMemo(function(){return(L||[]).some(function(I){return[`
`,`\r
`].includes(I)})},[L]),Oe=function(g,fe,he){var ne=!0,Se=g;F==null||F(null);var xe=he?null:$t(g,L);return M!=="combobox"&&xe&&(Se="",ae==null||ae(xe),x(!1),ne=!1),V&&Ie!==Se&&V(Se,{source:fe?"typing":"effect"}),ne},Te=function(g){!g||!g.trim()||V(g,{source:"submit"})};t.useEffect(function(){!l&&!re&&M!=="combobox"&&Oe("",!1,!1)},[l]),t.useEffect(function(){rn&&T&&p(!1),T&&ke(!1)},[T]);var He=Kn(),ie=q(He,2),Ke=ie[0],vn=ie[1],mn=function(g){var fe=Ke(),he=g.which;if(he===E.ENTER&&(M!=="combobox"&&g.preventDefault(),l||x(!0)),vn(!!Ie),he===E.BACKSPACE&&!fe&&re&&!Ie&&s.length){for(var ne=Ee(s),Se=null,xe=ne.length-1;xe>=0;xe-=1){var Ze=ne[xe];if(!Ze.disabled){ne.splice(xe,1),Se=Ze;break}}Se&&w(ne,{type:"remove",values:[Se]})}for(var $e=arguments.length,Ge=new Array($e>1?$e-1:0),We=1;We<$e;We++)Ge[We-1]=arguments[We];if(l&&ge.current){var Pn;(Pn=ge.current).onKeyDown.apply(Pn,[g].concat(Ge))}me==null||me.apply(void 0,[g].concat(Ge))},yn=function(g){for(var fe=arguments.length,he=new Array(fe>1?fe-1:0),ne=1;ne<fe;ne++)he[ne-1]=arguments[ne];if(l&&ge.current){var Se;(Se=ge.current).onKeyUp.apply(Se,[g].concat(he))}de==null||de.apply(void 0,[g].concat(he))},qe=function(g){var fe=s.filter(function(he){return he!==g});w(fe,{type:"remove",values:[g]})},Me=t.useRef(!1),Qn=function(){ke(!0),T||(G&&!Me.current&&G.apply(void 0,arguments),O.includes("focus")&&x(!0)),Me.current=!0},qn=function(){ke(!1,function(){Me.current=!1,x(!1)}),!T&&(Ie&&(M==="tags"?V(Ie,{source:"submit"}):M==="multiple"&&V("",{source:"blur"})),le&&le.apply(void 0,arguments))},je=[];t.useEffect(function(){return function(){je.forEach(function(I){return clearTimeout(I)}),je.splice(0,je.length)}},[]);var Zn=function(g){var fe,he=g.target,ne=(fe=Ne.current)===null||fe===void 0?void 0:fe.getPopupElement();if(ne&&ne.contains(he)){var Se=setTimeout(function(){var Ge=je.indexOf(Se);if(Ge!==-1&&je.splice(Ge,1),sn(),!be&&!ne.contains(document.activeElement)){var We;(We=ye.current)===null||We===void 0||We.focus()}});je.push(Se)}for(var xe=arguments.length,Ze=new Array(xe>1?xe-1:0),$e=1;$e<xe;$e++)Ze[$e-1]=arguments[$e];ce==null||ce.apply(void 0,[g].concat(Ze))},et=t.useState(null),In=q(et,2),En=In[0],nt=In[1],tt=t.useState({}),ot=q(tt,2),at=ot[1];function rt(){at({})}Nn(function(){if(S){var I,g=Math.ceil((I=Ce.current)===null||I===void 0?void 0:I.offsetWidth);En!==g&&!Number.isNaN(g)&&nt(g)}},[S]);var Dn;Ve&&(Dn=function(g){x(g)}),Dt(function(){var I;return[Ce.current,(I=Ne.current)===null||I===void 0?void 0:I.getPopupElement()]},S,x,!!Ve);var it=t.useMemo(function(){return Z(Z({},n),{},{notFoundContent:_,open:l,triggerOpen:S,id:i,showSearch:X,multiple:re,toggleOpen:x})},[n,_,S,l,i,X,re,x]),Rn=P!==void 0?P:A||!re&&M!=="combobox",On;Rn&&(On=t.createElement(ln,{className:Be("".concat(r,"-arrow"),te({},"".concat(r,"-arrow-loading"),A)),customizeIcon:N,customizeIconProps:{loading:A,searchValue:Ie,open:l,focused:Qe,showSearch:X}}));var Mn,ut=function(){var g;B==null||B(),(g=ye.current)===null||g===void 0||g.focus(),w([],{type:"clear",values:s}),Oe("",!1,!1)};!T&&y&&(s.length||Ie)&&!(M==="combobox"&&Ie==="")&&(Mn=t.createElement(ln,{className:"".concat(r,"-clear"),onMouseDown:ut,customizeIcon:De},"×"));var lt=t.createElement(ve,{ref:ge}),ct=Be(r,c,(o={},te(o,"".concat(r,"-focused"),Qe),te(o,"".concat(r,"-multiple"),re),te(o,"".concat(r,"-single"),!re),te(o,"".concat(r,"-allow-clear"),y),te(o,"".concat(r,"-show-arrow"),Rn),te(o,"".concat(r,"-disabled"),T),te(o,"".concat(r,"-loading"),A),te(o,"".concat(r,"-open"),l),te(o,"".concat(r,"-customize-input"),en),te(o,"".concat(r,"-show-search"),X),o)),xn=t.createElement(zn,{ref:Ne,disabled:T,prefixCls:r,visible:S,popupElement:lt,containerWidth:En,animation:se,transitionName:Le,dropdownStyle:H,dropdownClassName:we,direction:b,dropdownMatchSelectWidth:_e,dropdownRender:D,dropdownAlign:v,placement:R,builtinPlacements:k,getPopupContainer:K,empty:u,getTriggerDOMNode:function(){return Ae.current},onPopupVisibleChange:Dn,onPopupMouseEnter:rt},Ve?t.cloneElement(Ve,{ref:nn}):t.createElement(Bn,Fe({},n,{domRef:Ae,prefixCls:r,inputElement:en,ref:ye,id:i,showSearch:X,autoClearSearchValue:Q,mode:M,activeDescendantId:W,tagRender:f,values:s,open:l,onToggleOpen:x,activeValue:z,searchValue:Ie,onSearch:Oe,onSearchSubmit:Te,onRemove:qe,tokenWithEnter:Y}))),pn;return Ve?pn=xn:pn=t.createElement("div",Fe({className:ct},Re,{ref:Ce,onMouseDown:Zn,onKeyDown:mn,onKeyUp:yn,onFocus:Qn,onBlur:qn}),Qe&&!l&&t.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(s.map(function(I){var g=I.label,fe=I.value;return["number","string"].includes(wn(g))?g:fe}).join(", "))),xn,On,Mn),t.createElement(kn.Provider,{value:it},pn)});const Ht=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var r=a.current,c=r.values,d=r.options,f=n.map(function(s){if(s.label===void 0){var w;return Z(Z({},s),{},{label:(w=c.get(s.value))===null||w===void 0?void 0:w.label})}return s}),b=new Map,h=new Map;return f.forEach(function(s){b.set(s.value,s),h.set(s.value,e.get(s.value)||d.get(s.value))}),a.current.values=b,a.current.options=h,f},[n,e]),i=t.useCallback(function(r){return e.get(r)||a.current.options.get(r)},[e]);return[o,i]};function gn(n,e){return $n(n).join("").toUpperCase().includes(e)}const Ut=function(n,e,a,o,i){return t.useMemo(function(){if(!a||o===!1)return n;var r=e.options,c=e.label,d=e.value,f=[],b=typeof o=="function",h=a.toUpperCase(),s=b?o:function(u,C){return i?gn(C[i],h):C[r]?gn(C[c!=="children"?c:"label"],h):gn(C[d],h)},w=b?function(u){return bn(u)}:function(u){return u};return n.forEach(function(u){if(u[r]){var C=s(a,w(u));if(C)f.push(u);else{var _=u[r].filter(function(B){return s(a,w(B))});_.length&&f.push(Z(Z({},u),{},te({},r,_)))}return}s(a,w(u))&&f.push(u)}),f},[n,o,i,a,e])};var _n=0,jt=pt();function Gt(){var n;return jt?(n=_n,_n+=1):n="TEST_OR_SSR",n}function Xt(n){var e=t.useState(),a=q(e,2),o=a[0],i=a[1];return t.useEffect(function(){i("rc_select_".concat(Gt()))},[]),n||o}var Yt=["children","value"],Jt=["children"];function Qt(n){var e=n,a=e.key,o=e.props,i=o.children,r=o.value,c=Xe(o,Yt);return Z({key:a,value:r!==void 0?r:a,children:i},c)}function Un(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return gt(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var i=a,r=i.type.isSelectOptGroup,c=i.key,d=i.props,f=d.children,b=Xe(d,Jt);return e||!r?Qt(a):Z(Z({key:"__RC_SELECT_GRP__".concat(c===null?o:c,"__"),label:c},b),{},{options:Un(f)})}).filter(function(a){return a})}function qt(n,e,a,o,i){return t.useMemo(function(){var r=n,c=!n;c&&(r=Un(e));var d=new Map,f=new Map,b=function(w,u,C){C&&typeof C=="string"&&w.set(u[C],u)};function h(s){for(var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=0;u<s.length;u+=1){var C=s[u];!C[a.options]||w?(d.set(C[a.value],C),b(f,C,a.label),b(f,C,o),b(f,C,i)):h(C[a.options],!0)}}return h(r),{options:r,valueOptions:d,labelOptions:f}},[n,e,a,o,i])}function An(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var jn=function(){return null};jn.isSelectOptGroup=!0;var Gn=function(){return null};Gn.isSelectOption=!0;var Xn=t.createContext(null);function Zt(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var eo=["disabled","title","children","style","className"];function Fn(n){return typeof n=="string"||typeof n=="number"}var no=function(e,a){var o=It(),i=o.prefixCls,r=o.id,c=o.open,d=o.multiple,f=o.mode,b=o.searchValue,h=o.toggleOpen,s=o.notFoundContent,w=o.onPopupScroll,u=t.useContext(Xn),C=u.flattenOptions,_=u.onActiveValue,B=u.defaultActiveFirstOption,M=u.onSelect,T=u.menuItemSelectedIcon,A=u.rawValues,ee=u.fieldNames,J=u.virtual,U=u.direction,ue=u.listHeight,j=u.listItemHeight,z="".concat(i,"-item"),F=ht(function(){return C},[c,C],function(D,v){return v[0]&&D[1]!==v[1]}),W=t.useRef(null),oe=function(v){v.preventDefault()},Q=function(v){W.current&&W.current.scrollTo(typeof v=="number"?{index:v}:v)},V=function(v){for(var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,k=F.length,K=0;K<k;K+=1){var $=(v+K*R+k)%k,O=F[$],G=O.group,le=O.data;if(!G&&!le.disabled)return $}return-1},ae=t.useState(function(){return V(0)}),L=q(ae,2),y=L[0],P=L[1],N=function(v){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;P(v);var k={source:R?"keyboard":"mouse"},K=F[v];if(!K){_(null,-1,k);return}_(K.value,v,k)};t.useEffect(function(){N(B!==!1?V(0):-1)},[F.length,b]);var De=t.useCallback(function(D){return A.has(D)&&f!=="combobox"},[f,Ee(A).toString(),A.size]);t.useEffect(function(){var D=setTimeout(function(){if(!d&&c&&A.size===1){var R=Array.from(A)[0],k=F.findIndex(function(K){var $=K.data;return $.value===R});k!==-1&&(N(k),Q(k))}});if(c){var v;(v=W.current)===null||v===void 0||v.scrollTo(void 0)}return function(){return clearTimeout(D)}},[c,b,C.length]);var ve=function(v){v!==void 0&&M(v,{selected:!A.has(v)}),d||h(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(v){var R=v.which,k=v.ctrlKey;switch(R){case E.N:case E.P:case E.UP:case E.DOWN:{var K=0;if(R===E.UP?K=-1:R===E.DOWN?K=1:Zt()&&k&&(R===E.N?K=1:R===E.P&&(K=-1)),K!==0){var $=V(y+K,K);Q($),N($,!0)}break}case E.ENTER:{var O=F[y];O&&!O.data.disabled?ve(O.value):ve(void 0),c&&v.preventDefault();break}case E.ESC:h(!1),c&&v.stopPropagation()}},onKeyUp:function(){},scrollTo:function(v){Q(v)}}}),F.length===0)return t.createElement("div",{role:"listbox",id:"".concat(r,"_list"),className:"".concat(z,"-empty"),onMouseDown:oe},s);var se=Object.keys(ee).map(function(D){return ee[D]}),Le=function(v){return v.label};function H(D,v){var R=D.group;return{role:R?"presentation":"option",id:"".concat(r,"_list_").concat(v)}}var we=function(v){var R=F[v];if(!R)return null;var k=R.data||{},K=k.value,$=R.group,O=un(k,!0),G=Le(R);return R?t.createElement("div",Fe({"aria-label":typeof G=="string"&&!$?G:null},O,{key:v},H(R,v),{"aria-selected":De(K)}),K):null},_e={role:"listbox",id:"".concat(r,"_list")};return t.createElement(t.Fragment,null,J&&t.createElement("div",Fe({},_e,{style:{height:0,width:0,overflow:"hidden"}}),we(y-1),we(y),we(y+1)),t.createElement(yt,{itemKey:"key",ref:W,data:F,height:ue,itemHeight:j,fullHeight:!1,onMouseDown:oe,onScroll:w,virtual:J,direction:U,innerProps:J?null:_e},function(D,v){var R,k=D.group,K=D.groupOption,$=D.data,O=D.label,G=D.value,le=$.key;if(k){var de,me=(de=$.title)!==null&&de!==void 0?de:Fn(O)?O.toString():void 0;return t.createElement("div",{className:Be(z,"".concat(z,"-group")),title:me},O!==void 0?O:le)}var ce=$.disabled,Pe=$.title;$.children;var re=$.style,X=$.className,Re=Xe($,eo),Ye=bt(Re,se),pe=De(G),be="".concat(z,"-option"),Je=Be(z,be,X,(R={},te(R,"".concat(be,"-grouped"),K),te(R,"".concat(be,"-active"),y===v&&!ce),te(R,"".concat(be,"-disabled"),ce),te(R,"".concat(be,"-selected"),pe),R)),Ce=Le(D),Ae=!T||typeof T=="function"||pe,Ne=typeof Ce=="number"?Ce:Ce||G,ye=Fn(Ne)?Ne.toString():void 0;return Pe!==void 0&&(ye=Pe),t.createElement("div",Fe({},un(Ye),J?{}:H(D,v),{"aria-selected":pe,className:Je,title:ye,onMouseMove:function(){y===v||ce||N(v)},onClick:function(){ce||ve(G)},style:re}),t.createElement("div",{className:"".concat(be,"-content")},Ne),t.isValidElement(T)||pe,Ae&&t.createElement(ln,{className:"".concat(z,"-option-state"),customizeIcon:T,customizeIconProps:{isSelected:pe}},pe?"✓":null))}))},Yn=t.forwardRef(no);Yn.displayName="OptionList";var to=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],oo=["inputValue"];function ao(n){return!n||wn(n)!=="object"}var ro=t.forwardRef(function(n,e){var a=n.id,o=n.mode,i=n.prefixCls,r=i===void 0?"rc-select":i,c=n.backfill,d=n.fieldNames,f=n.inputValue,b=n.searchValue,h=n.onSearch,s=n.autoClearSearchValue,w=s===void 0?!0:s,u=n.onSelect,C=n.onDeselect,_=n.dropdownMatchSelectWidth,B=_===void 0?!0:_,M=n.filterOption,T=n.filterSort,A=n.optionFilterProp,ee=n.optionLabelProp,J=n.options,U=n.children,ue=n.defaultActiveFirstOption,j=n.menuItemSelectedIcon,z=n.virtual,F=n.direction,W=n.listHeight,oe=W===void 0?200:W,Q=n.listItemHeight,V=Q===void 0?20:Q,ae=n.value,L=n.defaultValue,y=n.labelInValue,P=n.onChange,N=Xe(n,to),De=Xt(a),ve=Sn(o),se=!!(!J&&U),Le=t.useMemo(function(){return M===void 0&&o==="combobox"?!1:M},[M,o]),H=t.useMemo(function(){return Hn(d,se)},[JSON.stringify(d),se]),we=hn("",{value:b!==void 0?b:f,postState:function(l){return l||""}}),_e=q(we,2),D=_e[0],v=_e[1],R=qt(J,U,H,A,ee),k=R.valueOptions,K=R.labelOptions,$=R.options,O=t.useCallback(function(p){var l=$n(p);return l.map(function(m){var S,x,Y,Oe,Te;if(ao(m))S=m;else{var He;Y=m.key,x=m.label,S=(He=m.value)!==null&&He!==void 0?He:Y}var ie=k.get(S);if(ie){var Ke;x===void 0&&(x=ie==null?void 0:ie[ee||H.label]),Y===void 0&&(Y=(Ke=ie==null?void 0:ie.key)!==null&&Ke!==void 0?Ke:S),Oe=ie==null?void 0:ie.disabled,Te=ie==null?void 0:ie.title}return{label:x,value:S,key:Y,disabled:Oe,title:Te}})},[H,ee,k]),G=hn(L,{value:ae}),le=q(G,2),de=le[0],me=le[1],ce=t.useMemo(function(){var p,l=O(de);return o==="combobox"&&!((p=l[0])!==null&&p!==void 0&&p.value)?[]:l},[de,O,o]),Pe=Ht(ce,k),re=q(Pe,2),X=re[0],Re=re[1],Ye=t.useMemo(function(){if(!o&&X.length===1){var p=X[0];if(p.value===null&&(p.label===null||p.label===void 0))return[]}return X.map(function(l){var m;return Z(Z({},l),{},{label:(m=l.label)!==null&&m!==void 0?m:l.value})})},[o,X]),pe=t.useMemo(function(){return new Set(X.map(function(p){return p.value}))},[X]);t.useEffect(function(){if(o==="combobox"){var p,l=(p=X[0])===null||p===void 0?void 0:p.value;v(xt(l)?String(l):"")}},[X]);var be=An(function(p,l){var m,S=l??p;return m={},te(m,H.value,p),te(m,H.label,S),m}),Je=t.useMemo(function(){if(o!=="tags")return $;var p=Ee($),l=function(S){return k.has(S)};return Ee(X).sort(function(m,S){return m.value<S.value?-1:1}).forEach(function(m){var S=m.value;l(S)||p.push(be(S,m.label))}),p},[be,$,k,X,o]),Ce=Ut(Je,H,D,Le,A),Ae=t.useMemo(function(){return o!=="tags"||!D||Ce.some(function(p){return p[A||"value"]===D})?Ce:[be(D)].concat(Ee(Ce))},[be,A,o,Ce,D]),Ne=t.useMemo(function(){return T?Ee(Ae).sort(function(p,l){return T(p,l)}):Ae},[Ae,T]),ye=t.useMemo(function(){return Kt(Ne,{fieldNames:H,childrenAsData:se})},[Ne,H,se]),ge=function(l){var m=O(l);if(me(m),P&&(m.length!==X.length||m.some(function(Y,Oe){var Te;return((Te=X[Oe])===null||Te===void 0?void 0:Te.value)!==(Y==null?void 0:Y.value)}))){var S=y?m:m.map(function(Y){return Y.value}),x=m.map(function(Y){return bn(Re(Y.value))});P(ve?S:S[0],ve?x:x[0])}},cn=t.useState(null),Ue=q(cn,2),Qe=Ue[0],ke=Ue[1],sn=t.useState(0),Ie=q(sn,2),en=Ie[0],Ve=Ie[1],nn=ue!==void 0?ue:o!=="combobox",tn=t.useCallback(function(p,l){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},S=m.source,x=S===void 0?"keyboard":S;Ve(l),c&&o==="combobox"&&p!==null&&x==="keyboard"&&ke(String(p))},[c,o]),ze=function(l,m,S){var x=function(){var qe,Me=Re(l);return[y?{label:Me==null?void 0:Me[H.label],value:l,key:(qe=Me==null?void 0:Me.key)!==null&&qe!==void 0?qe:l}:l,bn(Me)]};if(m&&u){var Y=x(),Oe=q(Y,2),Te=Oe[0],He=Oe[1];u(Te,He)}else if(!m&&C&&S!=="clear"){var ie=x(),Ke=q(ie,2),vn=Ke[0],mn=Ke[1];C(vn,mn)}},on=An(function(p,l){var m,S=ve?l.selected:!0;S?m=ve?[].concat(Ee(X),[p]):[p]:m=X.filter(function(x){return x.value!==p}),ge(m),ze(p,S),o==="combobox"?ke(""):(!Sn||w)&&(v(""),ke(""))}),dn=function(l,m){ge(l);var S=m.type,x=m.values;(S==="remove"||S==="clear")&&x.forEach(function(Y){ze(Y.value,!1,S)})},fn=function(l,m){if(v(l),ke(null),m.source==="submit"){var S=(l||"").trim();if(S){var x=Array.from(new Set([].concat(Ee(pe),[S])));ge(x),ze(S,!0),v("")}return}m.source!=="blur"&&(o==="combobox"&&ge(l),h==null||h(l))},an=function(l){var m=l;o!=="tags"&&(m=l.map(function(x){var Y=K.get(x);return Y==null?void 0:Y.value}).filter(function(x){return x!==void 0}));var S=Array.from(new Set([].concat(Ee(pe),Ee(m))));ge(S),S.forEach(function(x){ze(x,!0)})},rn=t.useMemo(function(){var p=z!==!1&&B!==!1;return Z(Z({},R),{},{flattenOptions:ye,onActiveValue:tn,defaultActiveFirstOption:nn,onSelect:on,menuItemSelectedIcon:j,rawValues:pe,fieldNames:H,virtual:p,direction:F,listHeight:oe,listItemHeight:V,childrenAsData:se})},[R,ye,tn,nn,on,j,pe,H,z,B,oe,V,se]);return t.createElement(Xn.Provider,{value:rn},t.createElement(zt,Fe({},N,{id:De,prefixCls:r,ref:e,omitDomProps:oo,mode:o,displayValues:Ye,onDisplayValuesChange:dn,direction:F,searchValue:D,onSearch:fn,autoClearSearchValue:w,onSearchSplit:an,dropdownMatchSelectWidth:B,OptionList:Yn,emptyOptions:!ye.length,activeValue:Qe,activeDescendantId:"".concat(De,"_list_").concat(en)})))}),Jn=ro;Jn.Option=Gn;Jn.OptGroup=jn;export{zt as B,Gn as O,Jn as T,jn as a,Xt as b,It as u};

import{r as d,R as c}from"./react.017637b6.js";import{c as _}from"./classnames.96a48171.js";import{f as h,d as Y,g as p,c as Q,h as U,b as ee}from"./@babel_runtime.0b96ec9f.js";import{h as ne,o as ae}from"./rc-util.88348ebb.js";function V(e){return!!(e.addonBefore||e.addonAfter)}function Z(e){return!!(e.prefix||e.suffix||e.allowClear)}function W(e,n,i,t){if(!!i){var r=n;if(n.type==="click"){var o=e.cloneNode(!0);r=Object.create(n,{target:{value:o},currentTarget:{value:o}}),o.value="",i(r);return}if(t!==void 0){r=Object.create(n,{target:{value:e},currentTarget:{value:e}}),e.value=t,i(r);return}i(r)}}function te(e,n){if(!!e){e.focus(n);var i=n||{},t=i.cursor;if(t){var r=e.value.length;switch(t){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}function X(e){return typeof e>"u"||e===null?"":String(e)}var re=function(n){var i=n.inputElement,t=n.prefixCls,r=n.prefix,o=n.suffix,B=n.addonBefore,C=n.addonAfter,F=n.className,v=n.style,N=n.affixWrapperClassName,H=n.groupClassName,j=n.wrapperClassName,y=n.disabled,w=n.readOnly,E=n.focused,b=n.triggerFocus,s=n.allowClear,R=n.value,T=n.handleReset,D=n.hidden,k=d.exports.useRef(null),z=function(m){var g;(g=k.current)!==null&&g!==void 0&&g.contains(m.target)&&(b==null||b())},O=function(){var m;if(!s)return null;var g=!y&&!w&&R,M="".concat(t,"-clear-icon"),u=Y(s)==="object"&&s!==null&&s!==void 0&&s.clearIcon?s.clearIcon:"✖";return c.createElement("span",{onClick:T,onMouseDown:function(I){return I.preventDefault()},className:_(M,(m={},h(m,"".concat(M,"-hidden"),!g),h(m,"".concat(M,"-has-suffix"),!!o),m)),role:"button",tabIndex:-1},u)},A=d.exports.cloneElement(i,{value:R,hidden:D});if(Z(n)){var f,x="".concat(t,"-affix-wrapper"),K=_(x,(f={},h(f,"".concat(x,"-disabled"),y),h(f,"".concat(x,"-focused"),E),h(f,"".concat(x,"-readonly"),w),h(f,"".concat(x,"-input-with-clear-btn"),o&&s&&R),f),!V(n)&&F,N),l=(o||s)&&c.createElement("span",{className:"".concat(t,"-suffix")},O(),o);A=c.createElement("span",{className:K,style:v,hidden:!V(n)&&D,onClick:z,ref:k},r&&c.createElement("span",{className:"".concat(t,"-prefix")},r),d.exports.cloneElement(i,{style:null,value:R,hidden:null}),l)}if(V(n)){var S="".concat(t,"-group"),L="".concat(S,"-addon"),q=_("".concat(t,"-wrapper"),S,j),G=_("".concat(t,"-group-wrapper"),F,H);return c.createElement("span",{className:G,style:v,hidden:D},c.createElement("span",{className:q},B&&c.createElement("span",{className:L},B),d.exports.cloneElement(A,{style:null,hidden:null}),C&&c.createElement("span",{className:L},C)))}return A},ue=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","inputClassName"],se=d.exports.forwardRef(function(e,n){var i=e.autoComplete,t=e.onChange,r=e.onFocus,o=e.onBlur,B=e.onPressEnter,C=e.onKeyDown,F=e.prefixCls,v=F===void 0?"rc-input":F,N=e.disabled,H=e.htmlSize,j=e.className,y=e.maxLength,w=e.suffix,E=e.showCount,b=e.type,s=b===void 0?"text":b,R=e.inputClassName,T=p(e,ue),D=ne(e.defaultValue,{value:e.value}),k=Q(D,2),z=k[0],O=k[1],A=d.exports.useState(!1),f=Q(A,2),x=f[0],K=f[1],l=d.exports.useRef(null),S=function(a){l.current&&te(l.current,a)};d.exports.useImperativeHandle(n,function(){return{focus:S,blur:function(){var a;(a=l.current)===null||a===void 0||a.blur()},setSelectionRange:function(a,I,P){var $;($=l.current)===null||$===void 0||$.setSelectionRange(a,I,P)},select:function(){var a;(a=l.current)===null||a===void 0||a.select()},input:l.current}}),d.exports.useEffect(function(){K(function(u){return u&&N?!1:u})},[N]);var L=function(a){e.value===void 0&&O(a.target.value),l.current&&W(l.current,a,t)},q=function(a){B&&a.key==="Enter"&&B(a),C==null||C(a)},G=function(a){K(!0),r==null||r(a)},J=function(a){K(!1),o==null||o(a)},m=function(a){O(""),S(),l.current&&W(l.current,a,t)},g=function(){var a=ae(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName","htmlSize"]);return c.createElement("input",U({autoComplete:i},a,{onChange:L,onFocus:G,onBlur:J,onKeyDown:q,className:_(v,h({},"".concat(v,"-disabled"),N),R,!V(e)&&!Z(e)&&j),ref:l,size:H,type:s}))},M=function(){var a=Number(y)>0;if(w||E){var I=X(z),P=ee(I).length,$=Y(E)==="object"?E.formatter({value:I,count:P,maxLength:y}):"".concat(P).concat(a?" / ".concat(y):"");return c.createElement(c.Fragment,null,!!E&&c.createElement("span",{className:_("".concat(v,"-show-count-suffix"),h({},"".concat(v,"-show-count-has-suffix"),!!w))},$),w)}return null};return c.createElement(re,U({},T,{prefixCls:v,className:j,inputElement:g(),handleReset:m,value:X(z),focused:x,triggerFocus:S,suffix:M(),disabled:N}))});export{se as I};
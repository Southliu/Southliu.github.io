import{i as k,j as D,a as x,_ as S,e as V,f as F}from"./@babel_runtime@7.20.1-c09c1810.js";import{R}from"./react@18.2.0-693b9b6f.js";import{K as y,E as K}from"./rc-util@5.24.6_biqbaboplfbrettd7655fr4n2y-0f35c327.js";import{c as L}from"./classnames@2.3.2-d75d9a59.js";import{j as g,b as $}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-8bfcb13e.js";function I(v){var f=v.pageXOffset,i="scrollLeft";if(typeof f!="number"){var n=v.document;f=n.documentElement[i],typeof f!="number"&&(f=n.body[i])}return f}function B(v){var f,i,n=v.ownerDocument,e=n.body,t=n&&n.documentElement,a=v.getBoundingClientRect();return f=a.left,i=a.top,f-=t.clientLeft||e.clientLeft||0,i-=t.clientTop||e.clientTop||0,{left:f,top:i}}function O(v){var f=B(v),i=v.ownerDocument,n=i.defaultView||i.parentWindow;return f.left+=I(n),f.left}var T=function(v){k(i,v);var f=D(i);function i(){var n;x(this,i);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return n=f.call.apply(f,[this].concat(t)),n.onHover=function(r){var l=n.props,o=l.onHover,s=l.index;o(r,s)},n.onClick=function(r){var l=n.props,o=l.onClick,s=l.index;o(r,s)},n.onKeyDown=function(r){var l=n.props,o=l.onClick,s=l.index;r.keyCode===13&&o(r,s)},n}return S(i,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,a=e.index,r=e.value,l=e.allowHalf,o=e.focused,s=a+1,u=t;return r===0&&a===0&&o?u+=" ".concat(t,"-focused"):l&&r+.5>=s&&r<s?(u+=" ".concat(t,"-half ").concat(t,"-active"),o&&(u+=" ".concat(t,"-focused"))):(u+=s<=r?" ".concat(t,"-full"):" ".concat(t,"-zero"),s===r&&o&&(u+=" ".concat(t,"-focused"))),u}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,a=this.onKeyDown,r=this.props,l=r.disabled,o=r.prefixCls,s=r.character,u=r.characterRender,p=r.index,d=r.count,c=r.value,h=typeof s=="function"?s(this.props):s,C=g("li",{className:this.getClassName(),children:$("div",{onClick:l?null:t,onKeyDown:l?null:a,onMouseMove:l?null:e,role:"radio","aria-checked":c>p?"true":"false","aria-posinset":p+1,"aria-setsize":d,tabIndex:l?-1:0,children:[g("div",{className:"".concat(o,"-first"),children:h}),g("div",{className:"".concat(o,"-second"),children:h})]})});return u&&(C=u(C,this.props)),C}}]),i}(R.Component);function H(){}var j=function(v){k(i,v);var f=D(i);function i(n){var e;x(this,i),e=f.call(this,n),e.stars=void 0,e.rate=void 0,e.onHover=function(a,r){var l=e.props.onHoverChange,o=e.getStarValue(r,a.pageX),s=e.state.cleanedValue;o!==s&&e.setState({hoverValue:o,cleanedValue:null}),l(o)},e.onMouseLeave=function(){var a=e.props.onHoverChange;e.setState({hoverValue:void 0,cleanedValue:null}),a(void 0)},e.onClick=function(a,r){var l=e.props.allowClear,o=e.state.value,s=e.getStarValue(r,a.pageX),u=!1;l&&(u=s===o),e.onMouseLeave(),e.changeValue(u?0:s),e.setState({cleanedValue:u?s:null})},e.onFocus=function(){var a=e.props.onFocus;e.setState({focused:!0}),a&&a()},e.onBlur=function(){var a=e.props.onBlur;e.setState({focused:!1}),a&&a()},e.onKeyDown=function(a){var r=a.keyCode,l=e.props,o=l.count,s=l.allowHalf,u=l.onKeyDown,p=l.direction,d=p==="rtl",c=e.state.value;r===y.RIGHT&&c<o&&!d?(s?c+=.5:c+=1,e.changeValue(c),a.preventDefault()):r===y.LEFT&&c>0&&!d||r===y.RIGHT&&c>0&&d?(s?c-=.5:c-=1,e.changeValue(c),a.preventDefault()):r===y.LEFT&&c<o&&d&&(s?c+=.5:c+=1,e.changeValue(c),a.preventDefault()),u&&u(a)},e.saveRef=function(a){return function(r){e.stars[a]=r}},e.saveRate=function(a){e.rate=a};var t=n.value;return t===void 0&&(t=n.defaultValue),e.stars={},e.state={value:t,focused:!1,cleanedValue:null},e}return S(i,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,a=e.disabled;t&&!a&&this.focus()}},{key:"getStarDOM",value:function(e){return K(this.stars[e])}},{key:"getStarValue",value:function(e,t){var a=this.props,r=a.allowHalf,l=a.direction,o=l==="rtl",s=e+1;if(r){var u=this.getStarDOM(e),p=O(u),d=u.clientWidth;(o&&t-p>d/2||!o&&t-p<d/2)&&(s-=.5)}return s}},{key:"focus",value:function(){var e=this.props.disabled;e||this.rate.focus()}},{key:"blur",value:function(){var e=this.props.disabled;e||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,a=e.allowHalf,r=e.style,l=e.prefixCls,o=e.disabled,s=e.className,u=e.character,p=e.characterRender,d=e.tabIndex,c=e.direction,h=this.state,C=h.value,b=h.hoverValue,_=h.focused,w=[],N=o?"".concat(l,"-disabled"):"",m=0;m<t;m+=1)w.push(g(T,{ref:this.saveRef(m),index:m,count:t,disabled:o,prefixCls:"".concat(l,"-star"),allowHalf:a,value:b===void 0?C:b,onClick:this.onClick,onHover:this.onHover,character:u,characterRender:p,focused:_},m));var M=L(l,N,s,F({},"".concat(l,"-rtl"),c==="rtl"));return g("ul",{className:M,style:r,onMouseLeave:o?null:this.onMouseLeave,tabIndex:o?-1:d,onFocus:o?null:this.onFocus,onBlur:o?null:this.onBlur,onKeyDown:o?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup",children:w})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&e.value!==void 0?V(V({},t),{},{value:e.value}):t}}]),i}(R.Component);j.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:H,character:"\u2605",onHoverChange:H,tabIndex:0,direction:"ltr"};export{j as R};

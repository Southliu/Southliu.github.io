import{i as S,j as U,a as O,e as u,_ as q,g as E,f as k}from"./@babel_runtime@7.20.1-5f192e20.js";import{r as $}from"./react@18.2.0-52f219d3.js";import{c as W}from"./classnames@2.3.2-d75d9a59.js";import{b as z,j as v}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-bf6e9dad.js";var A=function(o){S(s,o);var b=U(s);function s(t){var n;O(this,s),n=b.call(this,t),n.handleChange=function(a){var c=n.props,l=c.disabled,i=c.onChange;l||("checked"in n.props||n.setState({checked:a.target.checked}),i&&i({target:u(u({},n.props),{},{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a.nativeEvent}))},n.saveInput=function(a){n.input=a};var e="checked"in t?t.checked:t.defaultChecked;return n.state={checked:e},n}return q(s,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var n,e=this.props,a=e.prefixCls,c=e.className,l=e.style,i=e.name,d=e.id,m=e.type,p=e.disabled,C=e.readOnly,g=e.tabIndex,K=e.onClick,x=e.onFocus,P=e.onBlur,_=e.onKeyDown,F=e.onKeyPress,D=e.onKeyUp,N=e.autoFocus,j=e.value,w=e.required,h=E(e,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),B=Object.keys(h).reduce(function(y,r){return(r.substr(0,5)==="aria-"||r.substr(0,5)==="data-"||r==="role")&&(y[r]=h[r]),y},{}),f=this.state.checked,I=W(a,c,(n={},k(n,"".concat(a,"-checked"),f),k(n,"".concat(a,"-disabled"),p),n));return z("span",{className:I,style:l,children:[v("input",{name:i,id:d,type:m,required:w,readOnly:C,disabled:p,tabIndex:g,className:"".concat(a,"-input"),checked:!!f,onClick:K,onFocus:x,onBlur:P,onKeyUp:D,onKeyDown:_,onKeyPress:F,onChange:this.handleChange,autoFocus:N,ref:this.saveInput,value:j,...B}),v("span",{className:"".concat(a,"-inner")})]})}}],[{key:"getDerivedStateFromProps",value:function(n,e){return"checked"in n?u(u({},e),{},{checked:n.checked}):null}}]),s}($.exports.Component);A.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};export{A as C};
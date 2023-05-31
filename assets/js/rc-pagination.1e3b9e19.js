import{y as se,z as oe,a as le,_ as ue,b as P,f as de,g as G}from"./@babel_runtime.e68bd868.js";import{c as b}from"./classnames.8cb16634.js";import{e as u,r as k}from"./react.ab566f72.js";const Ie={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};var z={ZERO:48,NINE:57,NUMPAD_ZERO:96,NUMPAD_NINE:105,BACKSPACE:8,DELETE:46,ENTER:13,ARROW_UP:38,ARROW_DOWN:40};const ve={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};var ce=function(N){se(g,N);var p=oe(g);function g(){var i;le(this,g);for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return i=p.call.apply(p,[this].concat(a)),i.state={goInputText:""},i.getValidValue=function(){var r=i.state.goInputText;return!r||Number.isNaN(r)?void 0:Number(r)},i.buildOptionText=function(r){return"".concat(r," ").concat(i.props.locale.items_per_page)},i.changeSize=function(r){i.props.changeSize(Number(r))},i.handleChange=function(r){i.setState({goInputText:r.target.value})},i.handleBlur=function(r){var c=i.props,t=c.goButton,s=c.quickGo,o=c.rootPrefixCls,l=i.state.goInputText;t||l===""||(i.setState({goInputText:""}),!(r.relatedTarget&&(r.relatedTarget.className.indexOf("".concat(o,"-item-link"))>=0||r.relatedTarget.className.indexOf("".concat(o,"-item"))>=0))&&s(i.getValidValue()))},i.go=function(r){var c=i.state.goInputText;c!==""&&(r.keyCode===z.ENTER||r.type==="click")&&(i.setState({goInputText:""}),i.props.quickGo(i.getValidValue()))},i}return ue(g,[{key:"getPageSizeOptions",value:function(){var e=this.props,a=e.pageSize,n=e.pageSizeOptions;return n.some(function(r){return r.toString()===a.toString()})?n:n.concat([a.toString()]).sort(function(r,c){var t=Number.isNaN(Number(r))?0:Number(r),s=Number.isNaN(Number(c))?0:Number(c);return t-s})}},{key:"render",value:function(){var e=this,a=this.props,n=a.pageSize,r=a.locale,c=a.rootPrefixCls,t=a.changeSize,s=a.quickGo,o=a.goButton,l=a.selectComponentClass,h=a.buildOptionText,C=a.selectPrefixCls,f=a.disabled,E=this.state.goInputText,S="".concat(c,"-options"),d=l,D=null,O=null,T=null;if(!t&&!s)return null;var U=this.getPageSizeOptions();if(t&&d){var W=U.map(function(w,_){return u.createElement(d.Option,{key:_,value:w.toString()},(h||e.buildOptionText)(w))});D=u.createElement(d,{disabled:f,prefixCls:C,showSearch:!1,className:"".concat(S,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(n||U[0]).toString(),onChange:this.changeSize,getPopupContainer:function(_){return _.parentNode},"aria-label":r.page_size,defaultOpen:!1},W)}return s&&(o&&(T=typeof o=="boolean"?u.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:f,className:"".concat(S,"-quick-jumper-button")},r.jump_to_confirm):u.createElement("span",{onClick:this.go,onKeyUp:this.go},o)),O=u.createElement("div",{className:"".concat(S,"-quick-jumper")},r.jump_to,u.createElement("input",{disabled:f,type:"text",value:E,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":r.page}),r.page,T)),u.createElement("li",{className:"".concat(S)},D,O)}}]),g}(u.Component);ce.defaultProps={pageSizeOptions:["10","20","50","100"]};var J=function(p){var g,i=p.rootPrefixCls,e=p.page,a=p.active,n=p.className,r=p.showTitle,c=p.onClick,t=p.onKeyPress,s=p.itemRender,o="".concat(i,"-item"),l=b(o,"".concat(o,"-").concat(e),(g={},P(g,"".concat(o,"-active"),a),P(g,"".concat(o,"-disabled"),!e),P(g,p.className,n),g)),h=function(){c(e)},C=function(E){t(E,c,e)};return u.createElement("li",{title:r?e.toString():null,className:l,onClick:h,onKeyPress:C,tabIndex:0},s(e,"page",u.createElement("a",{rel:"nofollow"},e)))};function Q(){}function ie(N){var p=Number(N);return typeof p=="number"&&!Number.isNaN(p)&&isFinite(p)&&Math.floor(p)===p}var xe=function(p,g,i){return i};function y(N,p,g){var i=typeof N>"u"?p.pageSize:N;return Math.floor((g.total-1)/i)+1}var Ce=function(N){se(g,N);var p=oe(g);function g(i){var e;le(this,g),e=p.call(this,i),e.paginationNode=u.createRef(),e.getJumpPrevPage=function(){return Math.max(1,e.state.current-(e.props.showLessItems?3:5))},e.getJumpNextPage=function(){return Math.min(y(void 0,e.state,e.props),e.state.current+(e.props.showLessItems?3:5))},e.getItemIcon=function(t,s){var o=e.props.prefixCls,l=t||u.createElement("button",{type:"button","aria-label":s,className:"".concat(o,"-item-link")});return typeof t=="function"&&(l=u.createElement(t,de({},e.props))),l},e.isValid=function(t){var s=e.props.total;return ie(t)&&t!==e.state.current&&ie(s)&&s>0},e.shouldDisplayQuickJumper=function(){var t=e.props,s=t.showQuickJumper,o=t.total,l=e.state.pageSize;return o<=l?!1:s},e.handleKeyDown=function(t){(t.keyCode===z.ARROW_UP||t.keyCode===z.ARROW_DOWN)&&t.preventDefault()},e.handleKeyUp=function(t){var s=e.getValidValue(t),o=e.state.currentInputValue;s!==o&&e.setState({currentInputValue:s}),t.keyCode===z.ENTER?e.handleChange(s):t.keyCode===z.ARROW_UP?e.handleChange(s-1):t.keyCode===z.ARROW_DOWN&&e.handleChange(s+1)},e.handleBlur=function(t){var s=e.getValidValue(t);e.handleChange(s)},e.changePageSize=function(t){var s=e.state.current,o=y(t,e.state,e.props);s=s>o?o:s,o===0&&(s=e.state.current),typeof t=="number"&&("pageSize"in e.props||e.setState({pageSize:t}),"current"in e.props||e.setState({current:s,currentInputValue:s})),e.props.onShowSizeChange(s,t),"onChange"in e.props&&e.props.onChange&&e.props.onChange(s,t)},e.handleChange=function(t){var s=e.props,o=s.disabled,l=s.onChange,h=e.state,C=h.pageSize,f=h.current,E=h.currentInputValue;if(e.isValid(t)&&!o){var S=y(void 0,e.state,e.props),d=t;return t>S?d=S:t<1&&(d=1),"current"in e.props||e.setState({current:d}),d!==E&&e.setState({currentInputValue:d}),l(d,C),d}return f},e.prev=function(){e.hasPrev()&&e.handleChange(e.state.current-1)},e.next=function(){e.hasNext()&&e.handleChange(e.state.current+1)},e.jumpPrev=function(){e.handleChange(e.getJumpPrevPage())},e.jumpNext=function(){e.handleChange(e.getJumpNextPage())},e.hasPrev=function(){return e.state.current>1},e.hasNext=function(){return e.state.current<y(void 0,e.state,e.props)},e.runIfEnter=function(t,s){if(t.key==="Enter"||t.charCode===13){for(var o=arguments.length,l=new Array(o>2?o-2:0),h=2;h<o;h++)l[h-2]=arguments[h];s.apply(void 0,l)}},e.runIfEnterPrev=function(t){e.runIfEnter(t,e.prev)},e.runIfEnterNext=function(t){e.runIfEnter(t,e.next)},e.runIfEnterJumpPrev=function(t){e.runIfEnter(t,e.jumpPrev)},e.runIfEnterJumpNext=function(t){e.runIfEnter(t,e.jumpNext)},e.handleGoTO=function(t){(t.keyCode===z.ENTER||t.type==="click")&&e.handleChange(e.state.currentInputValue)},e.renderPrev=function(t){var s=e.props,o=s.prevIcon,l=s.itemRender,h=l(t,"prev",e.getItemIcon(o,"prev page")),C=!e.hasPrev();return k.isValidElement(h)?k.cloneElement(h,{disabled:C}):h},e.renderNext=function(t){var s=e.props,o=s.nextIcon,l=s.itemRender,h=l(t,"next",e.getItemIcon(o,"next page")),C=!e.hasNext();return k.isValidElement(h)?k.cloneElement(h,{disabled:C}):h};var a=i.onChange!==Q,n="current"in i;n&&!a&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var r=i.defaultCurrent;"current"in i&&(r=i.current);var c=i.defaultPageSize;return"pageSize"in i&&(c=i.pageSize),r=Math.min(r,y(c,void 0,i)),e.state={current:r,currentInputValue:r,pageSize:c},e}return ue(g,[{key:"componentDidUpdate",value:function(e,a){var n=this.props.prefixCls;if(a.current!==this.state.current&&this.paginationNode.current){var r=this.paginationNode.current.querySelector(".".concat(n,"-item-").concat(a.current));if(r&&document.activeElement===r){var c;r==null||(c=r.blur)===null||c===void 0||c.call(r)}}}},{key:"getValidValue",value:function(e){var a=e.target.value,n=y(void 0,this.state,this.props),r=this.state.currentInputValue,c;return a===""?c=a:Number.isNaN(Number(a))?c=r:a>=n?c=n:c=Number(a),c}},{key:"getShowSizeChanger",value:function(){var e=this.props,a=e.showSizeChanger,n=e.total,r=e.totalBoundaryShowSizeChanger;return typeof a<"u"?a:n>r}},{key:"render",value:function(){var e=this,a=this.props,n=a.prefixCls,r=a.className,c=a.style,t=a.disabled,s=a.hideOnSinglePage,o=a.total,l=a.locale,h=a.showQuickJumper,C=a.showLessItems,f=a.showTitle,E=a.showTotal,S=a.simple,d=a.itemRender,D=a.showPrevNextJumpers,O=a.jumpPrevIcon,T=a.jumpNextIcon,U=a.selectComponentClass,W=a.selectPrefixCls,w=a.pageSizeOptions,_=this.state,m=_.current,R=_.pageSize,pe=_.currentInputValue;if(s===!0&&o<=R)return null;var v=y(void 0,this.state,this.props),x=[],F=null,Z=null,Y=null,H=null,V=null,A=h&&h.goButton,I=C?1:2,X=m-1>0?m-1:0,ee=m+1<v?m+1:v,te=Object.keys(this.props).reduce(function(re,B){return(B.substr(0,5)==="data-"||B.substr(0,5)==="aria-"||B==="role")&&(re[B]=e.props[B]),re},{}),ne=E&&u.createElement("li",{className:"".concat(n,"-total-text")},E(o,[o===0?0:(m-1)*R+1,m*R>o?o:m*R]));if(S)return A&&(typeof A=="boolean"?V=u.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},l.jump_to_confirm):V=u.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},A),V=u.createElement("li",{title:f?"".concat(l.jump_to).concat(m,"/").concat(v):null,className:"".concat(n,"-simple-pager")},V)),u.createElement("ul",G({className:b(n,"".concat(n,"-simple"),P({},"".concat(n,"-disabled"),t),r),style:c,ref:this.paginationNode},te),ne,u.createElement("li",{title:f?l.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:b("".concat(n,"-prev"),P({},"".concat(n,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},this.renderPrev(X)),u.createElement("li",{title:f?"".concat(m,"/").concat(v):null,className:"".concat(n,"-simple-pager")},u.createElement("input",{type:"text",value:pe,disabled:t,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:3}),u.createElement("span",{className:"".concat(n,"-slash")},"/"),v),u.createElement("li",{title:f?l.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:b("".concat(n,"-next"),P({},"".concat(n,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(ee)),V);if(v<=3+I*2){var ae={locale:l,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:f,itemRender:d};v||x.push(u.createElement(J,G({},ae,{key:"noPager",page:1,className:"".concat(n,"-item-disabled")})));for(var j=1;j<=v;j+=1){var he=m===j;x.push(u.createElement(J,G({},ae,{key:j,page:j,active:he})))}}else{var ge=C?l.prev_3:l.prev_5,fe=C?l.next_3:l.next_5;D&&(F=u.createElement("li",{title:f?ge:null,key:"prev",onClick:this.jumpPrev,tabIndex:0,onKeyPress:this.runIfEnterJumpPrev,className:b("".concat(n,"-jump-prev"),P({},"".concat(n,"-jump-prev-custom-icon"),!!O))},d(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(O,"prev page"))),Z=u.createElement("li",{title:f?fe:null,key:"next",tabIndex:0,onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:b("".concat(n,"-jump-next"),P({},"".concat(n,"-jump-next-custom-icon"),!!T))},d(this.getJumpNextPage(),"jump-next",this.getItemIcon(T,"next page")))),H=u.createElement(J,{locale:l,last:!0,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:v,page:v,active:!1,showTitle:f,itemRender:d}),Y=u.createElement(J,{locale:l,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:f,itemRender:d});var M=Math.max(1,m-I),$=Math.min(m+I,v);m-1<=I&&($=1+I*2),v-m<=I&&(M=v-I*2);for(var K=M;K<=$;K+=1){var me=m===K;x.push(u.createElement(J,{locale:l,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:K,page:K,active:me,showTitle:f,itemRender:d}))}m-1>=I*2&&m!==1+2&&(x[0]=k.cloneElement(x[0],{className:"".concat(n,"-item-after-jump-prev")}),x.unshift(F)),v-m>=I*2&&m!==v-2&&(x[x.length-1]=k.cloneElement(x[x.length-1],{className:"".concat(n,"-item-before-jump-next")}),x.push(Z)),M!==1&&x.unshift(Y),$!==v&&x.push(H)}var q=!this.hasPrev()||!v,L=!this.hasNext()||!v;return u.createElement("ul",G({className:b(n,r,P({},"".concat(n,"-disabled"),t)),style:c,ref:this.paginationNode},te),ne,u.createElement("li",{title:f?l.prev_page:null,onClick:this.prev,tabIndex:q?null:0,onKeyPress:this.runIfEnterPrev,className:b("".concat(n,"-prev"),P({},"".concat(n,"-disabled"),q)),"aria-disabled":q},this.renderPrev(X)),x,u.createElement("li",{title:f?l.next_page:null,onClick:this.next,tabIndex:L?null:0,onKeyPress:this.runIfEnterNext,className:b("".concat(n,"-next"),P({},"".concat(n,"-disabled"),L)),"aria-disabled":L},this.renderNext(ee)),u.createElement(ce,{disabled:t,locale:l,rootPrefixCls:n,selectComponentClass:U,selectPrefixCls:W,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:m,pageSize:R,pageSizeOptions:w,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:A}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var n={};if("current"in e&&(n.current=e.current,e.current!==a.current&&(n.currentInputValue=n.current)),"pageSize"in e&&e.pageSize!==a.pageSize){var r=a.current,c=y(e.pageSize,a,e);r=r>c?c:r,"current"in e||(n.current=r,n.currentInputValue=r),n.pageSize=e.pageSize}return n}}]),g}(u.Component);Ce.defaultProps={defaultCurrent:1,total:0,defaultPageSize:10,onChange:Q,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:Q,locale:ve,style:{},itemRender:xe,totalBoundaryShowSizeChanger:50};export{Ce as P,ve as a,Ie as e};

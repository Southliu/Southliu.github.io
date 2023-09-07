import{d as e,c as n,g as t,f as o,b as r,h as a,q as d,r as i,a as s,j as l,_ as c,e as p,t as u}from"./@babel_runtime.d775819b.js";import{r as f}from"./react.a7da97a2.js";import{d as v,x as h,y,C as g,b as k,K}from"./rc-util.b2252098.js";import{c as N}from"./classnames.71976509.js";import"./react-is.90ab392a.js";import{L as x}from"./rc-virtual-list.e4d0feea.js";import{C as m}from"./rc-motion.477113fa.js";function E(e,n){var t=new Set;return e.forEach((function(e){n.has(e)||t.add(e)})),t}function C(e){var n=e||{},t=n.disabled,o=n.disableCheckbox,r=n.checkable;return!(!t&&!o)||!1===r}function b(e,n,t,o){var r,a=[];r=o||C;var d,i=new Set(e.filter((function(e){var n=!!t[e];return n||a.push(e),n}))),s=new Map,l=0;return Object.keys(t).forEach((function(e){var n=t[e],o=n.level,r=s.get(o);r||(r=new Set,s.set(o,r)),r.add(n),l=Math.max(l,o)})),v(!a.length,"Tree missing follow keys: ".concat(a.slice(0,100).map((function(e){return"'".concat(e,"'")})).join(", "))),d=!0===n?function(e,n,t,o){for(var r=new Set(e),a=new Set,d=0;d<=t;d+=1)(n.get(d)||new Set).forEach((function(e){var n=e.key,t=e.node,a=e.children,d=void 0===a?[]:a;r.has(n)&&!o(t)&&d.filter((function(e){return!o(e.node)})).forEach((function(e){r.add(e.key)}))}));for(var i=new Set,s=t;s>=0;s-=1)(n.get(s)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!o(t)&&e.parent&&!i.has(e.parent.key))if(o(e.parent.node))i.add(n.key);else{var d=!0,s=!1;(n.children||[]).filter((function(e){return!o(e.node)})).forEach((function(e){var n=e.key,t=r.has(n);d&&!t&&(d=!1),s||!t&&!a.has(n)||(s=!0)})),d&&r.add(n.key),s&&a.add(n.key),i.add(n.key)}}));return{checkedKeys:Array.from(r),halfCheckedKeys:Array.from(E(a,r))}}(i,s,l,r):function(e,n,t,o,r){for(var a=new Set(e),d=new Set(n),i=0;i<=o;i+=1)(t.get(i)||new Set).forEach((function(e){var n=e.key,t=e.node,o=e.children,i=void 0===o?[]:o;a.has(n)||d.has(n)||r(t)||i.filter((function(e){return!r(e.node)})).forEach((function(e){a.delete(e.key)}))}));d=new Set;for(var s=new Set,l=o;l>=0;l-=1)(t.get(l)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!r(t)&&e.parent&&!s.has(e.parent.key))if(r(e.parent.node))s.add(n.key);else{var o=!0,i=!1;(n.children||[]).filter((function(e){return!r(e.node)})).forEach((function(e){var n=e.key,t=a.has(n);o&&!t&&(o=!1),i||!t&&!d.has(n)||(i=!0)})),o||a.delete(n.key),i&&d.add(n.key),s.add(n.key)}}));return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(E(d,a))}}(i,n.halfCheckedKeys,s,l,r),d}var D=["children"];function S(e,n){return"".concat(e,"-").concat(n)}function w(e,n){return null!=e?e:n}function O(e){var n=e||{},t=n.title||"title";return{title:t,_title:n._title||[t],key:n.key||"key",children:n.children||"children"}}function P(t){return function t(o){return h(o).map((function(o){if(!function(e){return e&&e.type&&e.type.isTreeNode}(o))return v(!o,"Tree/TreeNode can only accept TreeNode as children."),null;var r=o.key,a=o.props,d=a.children,i=n(a,D),s=e({key:r},i),l=t(d);return l.length&&(s.children=l),s})).filter((function(e){return e}))}(t)}function L(n,o,r){var a=O(r),d=a._title,i=a.key,s=a.children,l=new Set(!0===o?[]:o),c=[];return function n(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.map((function(p,u){for(var f,v=S(a?a.pos:"0",u),h=w(p[i],v),g=0;g<d.length;g+=1){var k=d[g];if(void 0!==p[k]){f=p[k];break}}var K=e(e({},y(p,[].concat(t(d),[i,s]))),{},{title:f,key:h,parent:a,pos:v,children:null,data:p,isStart:[].concat(t(a?a.isStart:[]),[0===u]),isEnd:[].concat(t(a?a.isEnd:[]),[u===r.length-1])});return c.push(K),!0===o||l.has(h)?K.children=n(p[s]||[],K):K.children=[],K}))}(n),c}function T(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.initWrapper,a=n.processEntity,d=n.onProcessFinished,i=n.externalGetKey,s=n.childrenPropName,l=n.fieldNames,c=i||(arguments.length>2?arguments[2]:void 0),p={},u={},f={posEntities:p,keyEntities:u};return r&&(f=r(f)||f),function(e,n,r){var a,d=("object"===o(r)?r:{externalGetKey:r})||{},i=d.childrenPropName,s=d.externalGetKey,l=O(d.fieldNames),c=l.key,p=l.children,u=i||p;s?"string"==typeof s?a=function(e){return e[s]}:"function"==typeof s&&(a=function(e){return s(e)}):a=function(e,n){return w(e[c],n)},function o(r,d,i,s){var l=r?r[u]:e,c=r?S(i.pos,d):"0",p=r?[].concat(t(s),[r]):[];if(r){var f=a(r,c),v={node:r,index:d,pos:c,key:f,parentPos:i.node?i.pos:null,level:i.level+1,nodes:p};n(v)}l&&l.forEach((function(e,n){o(e,n,{node:r,pos:c,level:i?i.level+1:-1},p)}))}(null)}(e,(function(e){var n=e.node,t=e.index,o=e.pos,r=e.key,d=e.parentPos,i=e.level,s={node:n,nodes:e.nodes,index:t,key:r,pos:o,level:i},l=w(r,o);p[o]=s,u[l]=s,s.parent=p[d],s.parent&&(s.parent.children=s.parent.children||[],s.parent.children.push(s)),a&&a(s,f)}),{externalGetKey:c,childrenPropName:s,fieldNames:l}),d&&d(f),f}function M(e,n){var t=n.expandedKeys,o=n.selectedKeys,r=n.loadedKeys,a=n.loadingKeys,d=n.checkedKeys,i=n.halfCheckedKeys,s=n.dragOverNodeKey,l=n.dropPosition,c=n.keyEntities[e];return{eventKey:e,expanded:-1!==t.indexOf(e),selected:-1!==o.indexOf(e),loaded:-1!==r.indexOf(e),loading:-1!==a.indexOf(e),checked:-1!==d.indexOf(e),halfChecked:-1!==i.indexOf(e),pos:String(c?c.pos:""),dragOver:s===e&&0===l,dragOverGapTop:s===e&&-1===l,dragOverGapBottom:s===e&&1===l}}function A(n){var t=n.data,o=n.expanded,r=n.selected,a=n.checked,d=n.loaded,i=n.loading,s=n.halfChecked,l=n.dragOver,c=n.dragOverGapTop,p=n.dragOverGapBottom,u=n.pos,f=n.active,h=n.eventKey,y=e(e({},t),{},{expanded:o,selected:r,checked:a,loaded:d,loading:i,halfChecked:s,dragOver:l,dragOverGapTop:c,dragOverGapBottom:p,pos:u,active:f,key:h});return"props"in y||Object.defineProperty(y,"props",{get:function(){return v(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),n}}),y}var I=f.createContext(null),R=function(e){for(var n=e.prefixCls,t=e.level,o=e.isStart,a=e.isEnd,d="".concat(n,"-indent-unit"),i=[],s=0;s<t;s+=1){var l;i.push(f.createElement("span",{key:s,className:N(d,(l={},r(l,"".concat(d,"-start"),o[s]),r(l,"".concat(d,"-end"),a[s]),l))}))}return f.createElement("span",{"aria-hidden":"true",className:"".concat(n,"-indent")},i)};const j=f.memo(R);var H=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],U="open",G="close",_=function(t){d(p,t);var o=i(p);function p(){var n;s(this,p);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=o.call.apply(o,[this].concat(r))).state={dragNodeHighlight:!1},n.selectHandle=void 0,n.cacheIndent=void 0,n.onSelectorClick=function(e){(0,n.props.context.onNodeClick)(e,A(n.props)),n.isSelectable()?n.onSelect(e):n.onCheck(e)},n.onSelectorDoubleClick=function(e){(0,n.props.context.onNodeDoubleClick)(e,A(n.props))},n.onSelect=function(e){n.isDisabled()||(0,n.props.context.onNodeSelect)(e,A(n.props))},n.onCheck=function(e){if(!n.isDisabled()){var t=n.props,o=t.disableCheckbox,r=t.checked,a=n.props.context.onNodeCheck;if(n.isCheckable()&&!o){var d=!r;a(e,A(n.props),d)}}},n.onMouseEnter=function(e){(0,n.props.context.onNodeMouseEnter)(e,A(n.props))},n.onMouseLeave=function(e){(0,n.props.context.onNodeMouseLeave)(e,A(n.props))},n.onContextMenu=function(e){(0,n.props.context.onNodeContextMenu)(e,A(n.props))},n.onDragStart=function(e){var t=n.props.context.onNodeDragStart;e.stopPropagation(),n.setState({dragNodeHighlight:!0}),t(e,l(n));try{e.dataTransfer.setData("text/plain","")}catch(o){}},n.onDragEnter=function(e){var t=n.props.context.onNodeDragEnter;e.preventDefault(),e.stopPropagation(),t(e,l(n))},n.onDragOver=function(e){var t=n.props.context.onNodeDragOver;e.preventDefault(),e.stopPropagation(),t(e,l(n))},n.onDragLeave=function(e){var t=n.props.context.onNodeDragLeave;e.stopPropagation(),t(e,l(n))},n.onDragEnd=function(e){var t=n.props.context.onNodeDragEnd;e.stopPropagation(),n.setState({dragNodeHighlight:!1}),t(e,l(n))},n.onDrop=function(e){var t=n.props.context.onNodeDrop;e.preventDefault(),e.stopPropagation(),n.setState({dragNodeHighlight:!1}),t(e,l(n))},n.onExpand=function(e){var t=n.props,o=t.loading,r=t.context.onNodeExpand;o||r(e,A(n.props))},n.setSelectHandle=function(e){n.selectHandle=e},n.getNodeState=function(){var e=n.props.expanded;return n.isLeaf()?null:e?U:G},n.hasChildren=function(){var e=n.props.eventKey;return!!((n.props.context.keyEntities[e]||{}).children||[]).length},n.isLeaf=function(){var e=n.props,t=e.isLeaf,o=e.loaded,r=n.props.context.loadData,a=n.hasChildren();return!1!==t&&(t||!r&&!a||r&&o&&!a)},n.isDisabled=function(){var e=n.props.disabled;return!(!n.props.context.disabled&&!e)},n.isCheckable=function(){var e=n.props.checkable,t=n.props.context.checkable;return!(!t||!1===e)&&t},n.syncLoadData=function(e){var t=e.expanded,o=e.loading,r=e.loaded,a=n.props.context,d=a.loadData,i=a.onNodeLoad;o||d&&t&&!n.isLeaf()&&(n.hasChildren()||r||i(A(n.props)))},n.isDraggable=function(){var e=n.props,t=e.data,o=e.context.draggable;return!(!o||o.nodeDraggable&&!o.nodeDraggable(t))},n.renderDragHandler=function(){var e=n.props.context,t=e.draggable,o=e.prefixCls;return(null==t?void 0:t.icon)?f.createElement("span",{className:"".concat(o,"-draggable-icon")},t.icon):null},n.renderSwitcherIconDom=function(t){var o=n.props.switcherIcon,r=n.props.context.switcherIcon,a=o||r;return"function"==typeof a?a(e(e({},n.props),{},{isLeaf:t})):a},n.renderSwitcher=function(){var e=n.props.expanded,t=n.props.context.prefixCls;if(n.isLeaf()){var o=n.renderSwitcherIconDom(!0);return!1!==o?f.createElement("span",{className:N("".concat(t,"-switcher"),"".concat(t,"-switcher-noop"))},o):null}var r=N("".concat(t,"-switcher"),"".concat(t,"-switcher_").concat(e?U:G)),a=n.renderSwitcherIconDom(!1);return!1!==a?f.createElement("span",{onClick:n.onExpand,className:r},a):null},n.renderCheckbox=function(){var e=n.props,t=e.checked,o=e.halfChecked,r=e.disableCheckbox,a=n.props.context.prefixCls,d=n.isDisabled(),i=n.isCheckable();if(!i)return null;var s="boolean"!=typeof i?i:null;return f.createElement("span",{className:N("".concat(a,"-checkbox"),t&&"".concat(a,"-checkbox-checked"),!t&&o&&"".concat(a,"-checkbox-indeterminate"),(d||r)&&"".concat(a,"-checkbox-disabled")),onClick:n.onCheck},s)},n.renderIcon=function(){var e=n.props.loading,t=n.props.context.prefixCls;return f.createElement("span",{className:N("".concat(t,"-iconEle"),"".concat(t,"-icon__").concat(n.getNodeState()||"docu"),e&&"".concat(t,"-icon_loading"))})},n.renderSelector=function(){var e,t,o=n.state.dragNodeHighlight,r=n.props,a=r.title,d=void 0===a?"---":a,i=r.selected,s=r.icon,l=r.loading,c=r.data,p=n.props.context,u=p.prefixCls,v=p.showIcon,h=p.icon,y=p.loadData,g=p.titleRender,k=n.isDisabled(),K="".concat(u,"-node-content-wrapper");if(v){var x=s||h;e=x?f.createElement("span",{className:N("".concat(u,"-iconEle"),"".concat(u,"-icon__customize"))},"function"==typeof x?x(n.props):x):n.renderIcon()}else y&&l&&(e=n.renderIcon());t="function"==typeof d?d(c):g?g(c):d;var m=f.createElement("span",{className:"".concat(u,"-title")},t);return f.createElement("span",{ref:n.setSelectHandle,title:"string"==typeof d?d:"",className:N("".concat(K),"".concat(K,"-").concat(n.getNodeState()||"normal"),!k&&(i||o)&&"".concat(u,"-node-selected")),onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,onContextMenu:n.onContextMenu,onClick:n.onSelectorClick,onDoubleClick:n.onSelectorDoubleClick},e,m,n.renderDropIndicator())},n.renderDropIndicator=function(){var e=n.props,t=e.disabled,o=e.eventKey,r=n.props.context,a=r.draggable,d=r.dropLevelOffset,i=r.dropPosition,s=r.prefixCls,l=r.indent,c=r.dropIndicatorRender,p=r.dragOverNodeKey,u=r.direction,f=!t&&!!a&&p===o,v=null!=l?l:n.cacheIndent;return n.cacheIndent=l,f?c({dropPosition:i,dropLevelOffset:d,indent:v,prefixCls:s,direction:u}):null},n}return c(p,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var e=this.props.selectable,n=this.props.context.selectable;return"boolean"==typeof e?e:n}},{key:"render",value:function(){var e,t=this.props,o=t.eventKey,d=t.className,i=t.style,s=t.dragOver,l=t.dragOverGapTop,c=t.dragOverGapBottom,p=t.isLeaf,u=t.isStart,v=t.isEnd,h=t.expanded,y=t.selected,k=t.checked,K=t.halfChecked,x=t.loading,m=t.domRef,E=t.active;t.data;var C=t.onMouseMove,b=t.selectable,D=n(t,H),S=this.props.context,w=S.prefixCls,O=S.filterTreeNode,P=S.keyEntities,L=S.dropContainerKey,T=S.dropTargetKey,M=S.draggingNodeKey,I=this.isDisabled(),R=g(D,{aria:!0,data:!0}),U=(P[o]||{}).level,G=v[v.length-1],_=this.isDraggable(),B=!I&&_,F=M===o,W=void 0!==b?{"aria-selected":!!b}:void 0;return f.createElement("div",a({ref:m,className:N(d,"".concat(w,"-treenode"),(e={},r(e,"".concat(w,"-treenode-disabled"),I),r(e,"".concat(w,"-treenode-switcher-").concat(h?"open":"close"),!p),r(e,"".concat(w,"-treenode-checkbox-checked"),k),r(e,"".concat(w,"-treenode-checkbox-indeterminate"),K),r(e,"".concat(w,"-treenode-selected"),y),r(e,"".concat(w,"-treenode-loading"),x),r(e,"".concat(w,"-treenode-active"),E),r(e,"".concat(w,"-treenode-leaf-last"),G),r(e,"".concat(w,"-treenode-draggable"),_),r(e,"dragging",F),r(e,"drop-target",T===o),r(e,"drop-container",L===o),r(e,"drag-over",!I&&s),r(e,"drag-over-gap-top",!I&&l),r(e,"drag-over-gap-bottom",!I&&c),r(e,"filter-node",O&&O(A(this.props))),e)),style:i,draggable:B,"aria-grabbed":F,onDragStart:B?this.onDragStart:void 0,onDragEnter:_?this.onDragEnter:void 0,onDragOver:_?this.onDragOver:void 0,onDragLeave:_?this.onDragLeave:void 0,onDrop:_?this.onDrop:void 0,onDragEnd:_?this.onDragEnd:void 0,onMouseMove:C},W,R),f.createElement(j,{prefixCls:w,level:U,isStart:u,isEnd:v}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),p}(f.Component),B=function(e){return f.createElement(I.Consumer,null,(function(n){return f.createElement(_,a({},e,{context:n}))}))};function F(e,n){if(!e)return[];var t=e.slice(),o=t.indexOf(n);return o>=0&&t.splice(o,1),t}function W(e,n){var t=(e||[]).slice();return-1===t.indexOf(n)&&t.push(n),t}function q(e){return e.split("-")}function X(e,n){var t=[];return function e(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(n){var o=n.key,r=n.children;t.push(o),e(r)}))}(n[e].children),t}function V(e){if(e.parent){var n=q(e.pos);return Number(n[n.length-1])===e.parent.children.length-1}return!1}function Y(e,n,t,o,r,a,d,i,s,l){var c,p=e.clientX,u=e.clientY,f=e.target.getBoundingClientRect(),v=f.top,h=f.height,y=(("rtl"===l?-1:1)*(((null==r?void 0:r.x)||0)-p)-12)/o,g=i[t.props.eventKey];if(u<v+h/2){var k=d.findIndex((function(e){return e.key===g.key})),K=d[k<=0?0:k-1].key;g=i[K]}var N=g.key,x=g,m=g.key,E=0,C=0;if(!s.includes(N))for(var b=0;b<y&&V(g);b+=1)g=g.parent,C+=1;var D,S=n.props.data,w=g.node,O=!0;return D=q(g.pos),0===Number(D[D.length-1])&&0===g.level&&u<v+h/2&&a({dragNode:S,dropNode:w,dropPosition:-1})&&g.key===t.props.eventKey?E=-1:(x.children||[]).length&&s.includes(m)?a({dragNode:S,dropNode:w,dropPosition:0})?E=0:O=!1:0===C?y>-1.5?a({dragNode:S,dropNode:w,dropPosition:1})?E=1:O=!1:a({dragNode:S,dropNode:w,dropPosition:0})?E=0:a({dragNode:S,dropNode:w,dropPosition:1})?E=1:O=!1:a({dragNode:S,dropNode:w,dropPosition:1})?E=1:O=!1,{dropPosition:E,dropLevelOffset:C,dropTargetKey:g.key,dropTargetPos:g.pos,dragOverNodeKey:m,dropContainerKey:0===E?null:(null===(c=g.parent)||void 0===c?void 0:c.key)||null,dropAllowed:O}}function z(e,n){if(e)return n.multiple?e.slice():e.length?[e[0]]:e}function J(e){if(!e)return null;var n;if(Array.isArray(e))n={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==o(e))return v(!1,"`checkedKeys` is not an array or an object"),null;n={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return n}function Q(e,n){var o=new Set;function r(e){if(!o.has(e)){var t=n[e];if(t){o.add(e);var a=t.parent;t.node.disabled||a&&r(a.key)}}}return(e||[]).forEach((function(e){r(e)})),t(o)}B.displayName="TreeNode",B.isTreeNode=1;var Z=["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"],$=function(e,t){var o=e.className,r=e.style,d=e.motion,i=e.motionNodes,s=e.motionType,l=e.onMotionStart,c=e.onMotionEnd,v=e.active,h=e.treeNodeRequiredProps,y=n(e,Z),g=f.useState(!0),K=p(g,2),x=K[0],E=K[1],C=f.useContext(I).prefixCls,b=i&&"hide"!==s;k((function(){i&&b!==x&&E(b)}),[i]);var D=f.useRef(!1),S=function(){i&&!D.current&&(D.current=!0,c())};!function(e,n){var t=f.useState(!1),o=p(t,2),r=o[0],a=o[1];f.useLayoutEffect((function(){if(r)return e(),function(){n()}}),[r]),f.useLayoutEffect((function(){return a(!0),function(){a(!1)}}),[])}((function(){i&&l()}),S);return i?f.createElement(m,a({ref:t,visible:x},d,{motionAppear:"show"===s,onVisibleChanged:function(e){b===e&&S()}}),(function(e,n){var t=e.className,o=e.style;return f.createElement("div",{ref:n,className:N("".concat(C,"-treenode-motion"),t),style:o},i.map((function(e){var n=a({},(u(e.data),e.data)),t=e.title,o=e.key,r=e.isStart,d=e.isEnd;delete n.children;var i=M(o,h);return f.createElement(B,a({},n,i,{title:t,active:v,data:e.data,key:o,isStart:r,isEnd:d}))})))})):f.createElement(B,a({domRef:t,className:o,style:r},y,{active:v}))};$.displayName="MotionTreeNode";var ee=f.forwardRef($);function ne(e,n,t){var o=e.findIndex((function(e){return e.key===t})),r=e[o+1],a=n.findIndex((function(e){return e.key===t}));if(r){var d=n.findIndex((function(e){return e.key===r.key}));return n.slice(a+1,d)}return n.slice(a+1)}var te=["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"],oe={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},re=function(){},ae="RC_TREE_MOTION_".concat(Math.random()),de={key:ae},ie={key:ae,level:0,index:0,pos:"0",node:de,nodes:[de]},se={parent:null,children:[],pos:ie.pos,data:de,title:null,key:ae,isStart:[],isEnd:[]};function le(e,n,t,o){return!1!==n&&t?e.slice(0,Math.ceil(t/o)+1):e}function ce(e){return w(e.key,e.pos)}var pe=f.forwardRef((function(e,t){var o=e.prefixCls,r=e.data;e.selectable,e.checkable;var d=e.expandedKeys,i=e.selectedKeys,s=e.checkedKeys,l=e.loadedKeys,c=e.loadingKeys,v=e.halfCheckedKeys,h=e.keyEntities,y=e.disabled,g=e.dragging,K=e.dragOverNodeKey,N=e.dropPosition,m=e.motion,E=e.height,C=e.itemHeight,b=e.virtual,D=e.focusable,S=e.activeItem,O=e.focused,P=e.tabIndex,L=e.onKeyDown,T=e.onFocus,A=e.onBlur,I=e.onActiveChange,R=e.onListChangeStart,j=e.onListChangeEnd,H=n(e,te),U=f.useRef(null),G=f.useRef(null);f.useImperativeHandle(t,(function(){return{scrollTo:function(e){U.current.scrollTo(e)},getIndentWidth:function(){return G.current.offsetWidth}}}));var _=f.useState(d),B=p(_,2),F=B[0],W=B[1],q=f.useState(r),X=p(q,2),V=X[0],Y=X[1],z=f.useState(r),J=p(z,2),Q=J[0],Z=J[1],$=f.useState([]),de=p($,2),ie=de[0],pe=de[1],ue=f.useState(null),fe=p(ue,2),ve=fe[0],he=fe[1],ye=f.useRef(r);function ge(){var e=ye.current;Y(e),Z(e),pe([]),he(null),j()}ye.current=r,k((function(){W(d);var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=e.length,o=n.length;if(1!==Math.abs(t-o))return{add:!1,key:null};function r(e,n){var t=new Map;e.forEach((function(e){t.set(e,!0)}));var o=n.filter((function(e){return!t.has(e)}));return 1===o.length?o[0]:null}return t<o?{add:!0,key:r(e,n)}:{add:!1,key:r(n,e)}}(F,d);if(null!==e.key)if(e.add){var n=V.findIndex((function(n){return n.key===e.key})),t=le(ne(V,r,e.key),b,E,C),o=V.slice();o.splice(n+1,0,se),Z(o),pe(t),he("show")}else{var a=r.findIndex((function(n){return n.key===e.key})),i=le(ne(r,V,e.key),b,E,C),s=r.slice();s.splice(a+1,0,se),Z(s),pe(i),he("hide")}else V!==r&&(Y(r),Z(r))}),[d,r]),f.useEffect((function(){g||ge()}),[g]);var ke=m?Q:r,Ke={expandedKeys:d,selectedKeys:i,loadedKeys:l,loadingKeys:c,checkedKeys:s,halfCheckedKeys:v,dragOverNodeKey:K,dropPosition:N,keyEntities:h};return f.createElement(f.Fragment,null,O&&S&&f.createElement("span",{style:oe,"aria-live":"assertive"},function(e){for(var n=String(e.data.key),t=e;t.parent;)t=t.parent,n="".concat(t.data.key," > ").concat(n);return n}(S)),f.createElement("div",null,f.createElement("input",{style:oe,disabled:!1===D||y,tabIndex:!1!==D?P:null,onKeyDown:L,onFocus:T,onBlur:A,value:"",onChange:re,"aria-label":"for screen reader"})),f.createElement("div",{className:"".concat(o,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden",border:0,padding:0}},f.createElement("div",{className:"".concat(o,"-indent")},f.createElement("div",{ref:G,className:"".concat(o,"-indent-unit")}))),f.createElement(x,a({},H,{data:ke,itemKey:ce,height:E,fullHeight:!1,virtual:b,itemHeight:C,prefixCls:"".concat(o,"-list"),ref:U,onVisibleChange:function(e,n){var t=new Set(e);n.filter((function(e){return!t.has(e)})).some((function(e){return ce(e)===ae}))&&ge()}}),(function(e){var n=e.pos,t=a({},(u(e.data),e.data)),o=e.title,r=e.key,d=e.isStart,i=e.isEnd,s=w(r,n);delete t.key,delete t.children;var l=M(s,Ke);return f.createElement(ee,a({},t,l,{title:o,active:!!S&&r===S.key,pos:n,data:e.data,isStart:d,isEnd:i,motion:m,motionNodes:r===ae?ie:null,motionType:ve,onMotionStart:R,onMotionEnd:ge,treeNodeRequiredProps:Ke,onMouseMove:function(){I(null)}}))})))}));pe.displayName="NodeList";var ue=function(n){d(u,n);var p=i(u);function u(){var n;s(this,u);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=p.call.apply(p,[this].concat(r))).destroyed=!1,n.delayedDragEnterLogic=void 0,n.loadingRetryTimes={},n.state={keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null,fieldNames:O()},n.dragStartMousePosition=null,n.dragNode=void 0,n.currentMouseOverDroppableNodeKey=null,n.listRef=f.createRef(),n.onNodeDragStart=function(e,t){var o=n.state,r=o.expandedKeys,a=o.keyEntities,d=n.props.onDragStart,i=t.props.eventKey;n.dragNode=t,n.dragStartMousePosition={x:e.clientX,y:e.clientY};var s=F(r,i);n.setState({draggingNodeKey:i,dragChildrenKeys:X(i,a),indent:n.listRef.current.getIndentWidth()}),n.setExpandedKeys(s),window.addEventListener("dragend",n.onWindowDragEnd),null==d||d({event:e,node:A(t.props)})},n.onNodeDragEnter=function(e,o){var r=n.state,a=r.expandedKeys,d=r.keyEntities,i=r.dragChildrenKeys,s=r.flattenNodes,c=r.indent,p=n.props,u=p.onDragEnter,f=p.onExpand,v=p.allowDrop,h=p.direction,y=o.props,g=y.pos,k=y.eventKey,K=l(n).dragNode;if(n.currentMouseOverDroppableNodeKey!==k&&(n.currentMouseOverDroppableNodeKey=k),K){var N=Y(e,K,o,c,n.dragStartMousePosition,v,s,d,a,h),x=N.dropPosition,m=N.dropLevelOffset,E=N.dropTargetKey,C=N.dropContainerKey,b=N.dropTargetPos,D=N.dropAllowed,S=N.dragOverNodeKey;-1===i.indexOf(E)&&D?(n.delayedDragEnterLogic||(n.delayedDragEnterLogic={}),Object.keys(n.delayedDragEnterLogic).forEach((function(e){clearTimeout(n.delayedDragEnterLogic[e])})),K.props.eventKey!==o.props.eventKey&&(e.persist(),n.delayedDragEnterLogic[g]=window.setTimeout((function(){if(null!==n.state.draggingNodeKey){var r=t(a),i=d[o.props.eventKey];i&&(i.children||[]).length&&(r=W(a,o.props.eventKey)),"expandedKeys"in n.props||n.setExpandedKeys(r),null==f||f(r,{node:A(o.props),expanded:!0,nativeEvent:e.nativeEvent})}}),800)),K.props.eventKey!==E||0!==m?(n.setState({dragOverNodeKey:S,dropPosition:x,dropLevelOffset:m,dropTargetKey:E,dropContainerKey:C,dropTargetPos:b,dropAllowed:D}),null==u||u({event:e,node:A(o.props),expandedKeys:a})):n.resetDragState()):n.resetDragState()}else n.resetDragState()},n.onNodeDragOver=function(e,t){var o=n.state,r=o.dragChildrenKeys,a=o.flattenNodes,d=o.keyEntities,i=o.expandedKeys,s=o.indent,c=n.props,p=c.onDragOver,u=c.allowDrop,f=c.direction,v=l(n).dragNode;if(v){var h=Y(e,v,t,s,n.dragStartMousePosition,u,a,d,i,f),y=h.dropPosition,g=h.dropLevelOffset,k=h.dropTargetKey,K=h.dropContainerKey,N=h.dropAllowed,x=h.dropTargetPos,m=h.dragOverNodeKey;-1===r.indexOf(k)&&N&&(v.props.eventKey===k&&0===g?null===n.state.dropPosition&&null===n.state.dropLevelOffset&&null===n.state.dropTargetKey&&null===n.state.dropContainerKey&&null===n.state.dropTargetPos&&!1===n.state.dropAllowed&&null===n.state.dragOverNodeKey||n.resetDragState():y===n.state.dropPosition&&g===n.state.dropLevelOffset&&k===n.state.dropTargetKey&&K===n.state.dropContainerKey&&x===n.state.dropTargetPos&&N===n.state.dropAllowed&&m===n.state.dragOverNodeKey||n.setState({dropPosition:y,dropLevelOffset:g,dropTargetKey:k,dropContainerKey:K,dropTargetPos:x,dropAllowed:N,dragOverNodeKey:m}),null==p||p({event:e,node:A(t.props)}))}},n.onNodeDragLeave=function(e,t){n.currentMouseOverDroppableNodeKey!==t.props.eventKey||e.currentTarget.contains(e.relatedTarget)||(n.resetDragState(),n.currentMouseOverDroppableNodeKey=null);var o=n.props.onDragLeave;null==o||o({event:e,node:A(t.props)})},n.onWindowDragEnd=function(e){n.onNodeDragEnd(e,null,!0),window.removeEventListener("dragend",n.onWindowDragEnd)},n.onNodeDragEnd=function(e,t){var o=n.props.onDragEnd;n.setState({dragOverNodeKey:null}),n.cleanDragState(),null==o||o({event:e,node:A(t.props)}),n.dragNode=null,window.removeEventListener("dragend",n.onWindowDragEnd)},n.onNodeDrop=function(t,o){var r,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=n.state,i=d.dragChildrenKeys,s=d.dropPosition,l=d.dropTargetKey,c=d.dropTargetPos;if(d.dropAllowed){var p=n.props.onDrop;if(n.setState({dragOverNodeKey:null}),n.cleanDragState(),null!==l){var u=e(e({},M(l,n.getTreeNodeRequiredProps())),{},{active:(null===(r=n.getActiveItem())||void 0===r?void 0:r.key)===l,data:n.state.keyEntities[l].node}),f=-1!==i.indexOf(l);v(!f,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var h=q(c),y={event:t,node:A(u),dragNode:n.dragNode?A(n.dragNode.props):null,dragNodesKeys:[n.dragNode.props.eventKey].concat(i),dropToGap:0!==s,dropPosition:s+Number(h[h.length-1])};a||null==p||p(y),n.dragNode=null}}},n.cleanDragState=function(){null!==n.state.draggingNodeKey&&n.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),n.dragStartMousePosition=null,n.currentMouseOverDroppableNodeKey=null},n.triggerExpandActionExpand=function(t,o){var r=n.state,a=r.expandedKeys,d=r.flattenNodes,i=o.expanded,s=o.key;if(!(o.isLeaf||t.shiftKey||t.metaKey||t.ctrlKey)){var l=d.filter((function(e){return e.key===s}))[0],c=A(e(e({},M(s,n.getTreeNodeRequiredProps())),{},{data:l.data}));n.setExpandedKeys(i?F(a,s):W(a,s)),n.onNodeExpand(t,c)}},n.onNodeClick=function(e,t){var o=n.props,r=o.onClick;"click"===o.expandAction&&n.triggerExpandActionExpand(e,t),null==r||r(e,t)},n.onNodeDoubleClick=function(e,t){var o=n.props,r=o.onDoubleClick;"doubleClick"===o.expandAction&&n.triggerExpandActionExpand(e,t),null==r||r(e,t)},n.onNodeSelect=function(e,t){var o=n.state.selectedKeys,r=n.state,a=r.keyEntities,d=r.fieldNames,i=n.props,s=i.onSelect,l=i.multiple,c=t.selected,p=t[d.key],u=!c,f=(o=u?l?W(o,p):[p]:F(o,p)).map((function(e){var n=a[e];return n?n.node:null})).filter((function(e){return e}));n.setUncontrolledState({selectedKeys:o}),null==s||s(o,{event:"select",selected:u,node:t,selectedNodes:f,nativeEvent:e.nativeEvent})},n.onNodeCheck=function(e,o,r){var a,d=n.state,i=d.keyEntities,s=d.checkedKeys,l=d.halfCheckedKeys,c=n.props,p=c.checkStrictly,u=c.onCheck,f=o.key,v={event:"check",node:o,checked:r,nativeEvent:e.nativeEvent};if(p){var h=r?W(s,f):F(s,f);a={checked:h,halfChecked:F(l,f)},v.checkedNodes=h.map((function(e){return i[e]})).filter((function(e){return e})).map((function(e){return e.node})),n.setUncontrolledState({checkedKeys:h})}else{var y=b([].concat(t(s),[f]),!0,i),g=y.checkedKeys,k=y.halfCheckedKeys;if(!r){var K=new Set(g);K.delete(f);var N=b(Array.from(K),{checked:!1,halfCheckedKeys:k},i);g=N.checkedKeys,k=N.halfCheckedKeys}a=g,v.checkedNodes=[],v.checkedNodesPositions=[],v.halfCheckedKeys=k,g.forEach((function(e){var n=i[e];if(n){var t=n.node,o=n.pos;v.checkedNodes.push(t),v.checkedNodesPositions.push({node:t,pos:o})}})),n.setUncontrolledState({checkedKeys:g},!1,{halfCheckedKeys:k})}null==u||u(a,v)},n.onNodeLoad=function(e){var t=e.key,o=new Promise((function(o,r){n.setState((function(a){var d=a.loadedKeys,i=void 0===d?[]:d,s=a.loadingKeys,l=void 0===s?[]:s,c=n.props,p=c.loadData,u=c.onLoad;return p&&-1===i.indexOf(t)&&-1===l.indexOf(t)?(p(e).then((function(){var r=W(n.state.loadedKeys,t);null==u||u(r,{event:"load",node:e}),n.setUncontrolledState({loadedKeys:r}),n.setState((function(e){return{loadingKeys:F(e.loadingKeys,t)}})),o()})).catch((function(e){if(n.setState((function(e){return{loadingKeys:F(e.loadingKeys,t)}})),n.loadingRetryTimes[t]=(n.loadingRetryTimes[t]||0)+1,n.loadingRetryTimes[t]>=10){var a=n.state.loadedKeys;v(!1,"Retry for `loadData` many times but still failed. No more retry."),n.setUncontrolledState({loadedKeys:W(a,t)}),o()}r(e)})),{loadingKeys:W(l,t)}):null}))}));return o.catch((function(){})),o},n.onNodeMouseEnter=function(e,t){var o=n.props.onMouseEnter;null==o||o({event:e,node:t})},n.onNodeMouseLeave=function(e,t){var o=n.props.onMouseLeave;null==o||o({event:e,node:t})},n.onNodeContextMenu=function(e,t){var o=n.props.onRightClick;o&&(e.preventDefault(),o({event:e,node:t}))},n.onFocus=function(){var e=n.props.onFocus;n.setState({focused:!0});for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];null==e||e.apply(void 0,o)},n.onBlur=function(){var e=n.props.onBlur;n.setState({focused:!1}),n.onActiveChange(null);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];null==e||e.apply(void 0,o)},n.getTreeNodeRequiredProps=function(){var e=n.state;return{expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],loadedKeys:e.loadedKeys||[],loadingKeys:e.loadingKeys||[],checkedKeys:e.checkedKeys||[],halfCheckedKeys:e.halfCheckedKeys||[],dragOverNodeKey:e.dragOverNodeKey,dropPosition:e.dropPosition,keyEntities:e.keyEntities}},n.setExpandedKeys=function(e){var t=n.state,o=L(t.treeData,e,t.fieldNames);n.setUncontrolledState({expandedKeys:e,flattenNodes:o},!0)},n.onNodeExpand=function(e,t){var o=n.state.expandedKeys,r=n.state,a=r.listChanging,d=r.fieldNames,i=n.props,s=i.onExpand,l=i.loadData,c=t.expanded,p=t[d.key];if(!a){var u=o.indexOf(p),f=!c;if(v(c&&-1!==u||!c&&-1===u,"Expand state not sync with index check"),o=f?W(o,p):F(o,p),n.setExpandedKeys(o),null==s||s(o,{node:t,expanded:f,nativeEvent:e.nativeEvent}),f&&l){var h=n.onNodeLoad(t);h&&h.then((function(){var e=L(n.state.treeData,o,d);n.setUncontrolledState({flattenNodes:e})})).catch((function(){var e=F(n.state.expandedKeys,p);n.setExpandedKeys(e)}))}}},n.onListChangeStart=function(){n.setUncontrolledState({listChanging:!0})},n.onListChangeEnd=function(){setTimeout((function(){n.setUncontrolledState({listChanging:!1})}))},n.onActiveChange=function(e){var t=n.state.activeKey,o=n.props.onActiveChange;t!==e&&(n.setState({activeKey:e}),null!==e&&n.scrollTo({key:e}),null==o||o(e))},n.getActiveItem=function(){var e=n.state,t=e.activeKey,o=e.flattenNodes;return null===t?null:o.find((function(e){return e.key===t}))||null},n.offsetActiveKey=function(e){var t=n.state,o=t.flattenNodes,r=t.activeKey,a=o.findIndex((function(e){return e.key===r}));-1===a&&e<0&&(a=o.length);var d=o[a=(a+e+o.length)%o.length];if(d){var i=d.key;n.onActiveChange(i)}else n.onActiveChange(null)},n.onKeyDown=function(t){var o=n.state,r=o.activeKey,a=o.expandedKeys,d=o.checkedKeys,i=o.fieldNames,s=n.props,l=s.onKeyDown,c=s.checkable,p=s.selectable;switch(t.which){case K.UP:n.offsetActiveKey(-1),t.preventDefault();break;case K.DOWN:n.offsetActiveKey(1),t.preventDefault()}var u=n.getActiveItem();if(u&&u.data){var f=n.getTreeNodeRequiredProps(),v=!1===u.data.isLeaf||!!(u.data[i.children]||[]).length,h=A(e(e({},M(r,f)),{},{data:u.data,active:!0}));switch(t.which){case K.LEFT:v&&a.includes(r)?n.onNodeExpand({},h):u.parent&&n.onActiveChange(u.parent.key),t.preventDefault();break;case K.RIGHT:v&&!a.includes(r)?n.onNodeExpand({},h):u.children&&u.children.length&&n.onActiveChange(u.children[0].key),t.preventDefault();break;case K.ENTER:case K.SPACE:!c||h.disabled||!1===h.checkable||h.disableCheckbox?c||!p||h.disabled||!1===h.selectable||n.onNodeSelect({},h):n.onNodeCheck({},h,!d.includes(r))}}null==l||l(t)},n.setUncontrolledState=function(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!n.destroyed){var a=!1,d=!0,i={};Object.keys(t).forEach((function(e){e in n.props?d=!1:(a=!0,i[e]=t[e])})),!a||o&&!d||n.setState(e(e({},i),r))}},n.scrollTo=function(e){n.listRef.current.scrollTo(e)},n}return c(u,[{key:"componentDidMount",value:function(){this.destroyed=!1,this.onUpdated()}},{key:"componentDidUpdate",value:function(){this.onUpdated()}},{key:"onUpdated",value:function(){var e=this.props.activeKey;void 0!==e&&e!==this.state.activeKey&&(this.setState({activeKey:e}),null!==e&&this.scrollTo({key:e}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"resetDragState",value:function(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}},{key:"render",value:function(){var e,n,t=this.state,d=t.focused,i=t.flattenNodes,s=t.keyEntities,l=t.draggingNodeKey,c=t.activeKey,p=t.dropLevelOffset,u=t.dropContainerKey,v=t.dropTargetKey,h=t.dropPosition,y=t.dragOverNodeKey,k=t.indent,K=this.props,x=K.prefixCls,m=K.className,E=K.style,C=K.showLine,b=K.focusable,D=K.tabIndex,S=void 0===D?0:D,w=K.selectable,O=K.showIcon,P=K.icon,L=K.switcherIcon,T=K.draggable,M=K.checkable,A=K.checkStrictly,R=K.disabled,j=K.motion,H=K.loadData,U=K.filterTreeNode,G=K.height,_=K.itemHeight,B=K.virtual,F=K.titleRender,W=K.dropIndicatorRender,q=K.onContextMenu,X=K.onScroll,V=K.direction,Y=K.rootClassName,z=K.rootStyle,J=g(this.props,{aria:!0,data:!0});return T&&(n="object"===o(T)?T:"function"==typeof T?{nodeDraggable:T}:{}),f.createElement(I.Provider,{value:{prefixCls:x,selectable:w,showIcon:O,icon:P,switcherIcon:L,draggable:n,draggingNodeKey:l,checkable:M,checkStrictly:A,disabled:R,keyEntities:s,dropLevelOffset:p,dropContainerKey:u,dropTargetKey:v,dropPosition:h,dragOverNodeKey:y,indent:k,direction:V,dropIndicatorRender:W,loadData:H,filterTreeNode:U,titleRender:F,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop}},f.createElement("div",{role:"tree",className:N(x,m,Y,(e={},r(e,"".concat(x,"-show-line"),C),r(e,"".concat(x,"-focused"),d),r(e,"".concat(x,"-active-focused"),null!==c),e)),style:z},f.createElement(pe,a({ref:this.listRef,prefixCls:x,style:E,data:i,disabled:R,selectable:w,checkable:!!M,motion:j,dragging:null!==l,height:G,itemHeight:_,virtual:B,focusable:b,focused:d,tabIndex:S,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:q,onScroll:X},this.getTreeNodeRequiredProps(),J))))}}],[{key:"getDerivedStateFromProps",value:function(n,t){var o,a=t.prevProps,d={prevProps:n};function i(e){return!a&&e in n||a&&a[e]!==n[e]}var s=t.fieldNames;if(i("fieldNames")&&(s=O(n.fieldNames),d.fieldNames=s),i("treeData")?o=n.treeData:i("children")&&(v(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),o=P(n.children)),o){d.treeData=o;var l=T(o,{fieldNames:s});d.keyEntities=e(r({},ae,ie),l.keyEntities)}var c,p=d.keyEntities||t.keyEntities;if(i("expandedKeys")||a&&i("autoExpandParent"))d.expandedKeys=n.autoExpandParent||!a&&n.defaultExpandParent?Q(n.expandedKeys,p):n.expandedKeys;else if(!a&&n.defaultExpandAll){var u=e({},p);delete u[ae],d.expandedKeys=Object.keys(u).map((function(e){return u[e].key}))}else!a&&n.defaultExpandedKeys&&(d.expandedKeys=n.autoExpandParent||n.defaultExpandParent?Q(n.defaultExpandedKeys,p):n.defaultExpandedKeys);if(d.expandedKeys||delete d.expandedKeys,o||d.expandedKeys){var f=L(o||t.treeData,d.expandedKeys||t.expandedKeys,s);d.flattenNodes=f}if((n.selectable&&(i("selectedKeys")?d.selectedKeys=z(n.selectedKeys,n):!a&&n.defaultSelectedKeys&&(d.selectedKeys=z(n.defaultSelectedKeys,n))),n.checkable)&&(i("checkedKeys")?c=J(n.checkedKeys)||{}:!a&&n.defaultCheckedKeys?c=J(n.defaultCheckedKeys)||{}:o&&(c=J(n.checkedKeys)||{checkedKeys:t.checkedKeys,halfCheckedKeys:t.halfCheckedKeys}),c)){var h=c,y=h.checkedKeys,g=void 0===y?[]:y,k=h.halfCheckedKeys,K=void 0===k?[]:k;if(!n.checkStrictly){var N=b(g,!0,p);g=N.checkedKeys,K=N.halfCheckedKeys}d.checkedKeys=g,d.halfCheckedKeys=K}return i("loadedKeys")&&(d.loadedKeys=n.loadedKeys),d}}]),u}(f.Component);ue.defaultProps={prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:function(e){var n=e.dropPosition,t=e.dropLevelOffset,o=e.indent,r={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(n){case-1:r.top=0,r.left=-t*o;break;case 1:r.bottom=0,r.left=-t*o;break;case 0:r.bottom=0,r.left=o}return f.createElement("div",{style:r})},allowDrop:function(){return!0},expandAction:!1},ue.TreeNode=B;export{B as C,ue as T,Q as a,P as b,T as c,b as d,F as e,W as f};

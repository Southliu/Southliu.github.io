import{j as d,a as p,F as R}from"./components_Bottom.f649ec7b.js";import{r as g}from"./react.017637b6.js";import{I as y}from"./@iconify_react.5fde6161.js";import{u as Q}from"./ahooks.0bfe52b7.js";import{u as T,a as D}from"./react-redux.dedf6ab1.js";import{c as I}from"./@reduxjs_toolkit.d0210b58.js";import{u as E}from"./react-router.fee81168.js";import{M as W,I as X,T as Y}from"./antd.b8eb8a06.js";const Z=[{label:"系统管理",key:"system",icon:d(y,{icon:"ion:settings-outline"}),children:[{label:"用户管理",key:"/system/user",rule:"/authority/user"},{label:"菜单管理",key:"/system/menu",rule:"/authority/menu"}]}],V=[{label:"组件",key:"demo",icon:d(y,{icon:"fluent:box-20-regular"}),children:[{label:"剪切板",key:"/demo/copy",rule:"/demo/copy"},{label:"水印",key:"/demo/watermark",rule:"/demo/watermark"},{label:"虚拟滚动",key:"/demo/virtualScroll",rule:"/demo/virtualScroll"},{label:"富文本",key:"/demo/editor",rule:"/demo/editor"},{label:"层级1",key:"/demo/level1",children:[{label:"层级2",key:"/demo/level1/level2",children:[{label:"层级3",key:"/demo/level1/level2/level3",rule:"/demo/watermark"}]}]}]}],ee=[{label:"内容管理",key:"content",icon:d(y,{icon:"majesticons:article-search-line"}),children:[{label:"文章管理",key:"/content/article",rule:"/content/article"}]}],L=[{label:"仪表盘",key:"dashboard",icon:d(y,{icon:"la:tachometer-alt"}),children:[{label:"数据总览",key:"/dashboard",rule:"/dashboard"}]},...V,...Z,...ee];function j(e){const n=N(e),t=[];if(n.length>0&&t.push(n[0]),n.length>2){let s="/"+n[0];for(let l=1;l<n.length-1;l++)s+="/"+n[l],t.push(s)}return t}function ne(e,n){const t=[],s=N(e);let l=0;const c=s.length;for(let o=0;o<n.length;o++){const{path:a}=n[o];if((a==null?void 0:a[l])===s[l]&&(t.push(n[o].label),l<c-1&&l++),l===c)return t}return t}function N(e){if(!e||typeof e!="string")return[];const n=(e==null?void 0:e.split("/"))||[];return(n==null?void 0:n[0])===""&&n.shift(),n}function B(e){var o,a;const{menus:n,permissions:t,value:s}=e;let{currentPath:l,result:c}=e;if(!(n!=null&&n.length)||!s)return[];l||(l=[]),c||(c=[]);for(let r=0;r<n.length;r++)if(b(n[r])){l.push({label:n[r].label,path:N(n[r].key)});const u={menus:n[r].children,permissions:t,value:s,currentPath:l,result:c},i=B(u);i.length?c.concat(i):l.pop()}else if(((a=(o=n[r])==null?void 0:o.label)==null?void 0:a.includes(s))&&A(n[r],t)){l.push({label:n[r].label,path:N(n[r].key)});const u=ne(n[r].key,l),{label:i,key:x}=n[r];c.push({label:i,key:x,nav:u})}return c}function M(e){var o;const{menus:n,permissions:t,key:s}=e;let{fatherNav:l,result:c}=e;if(!(n!=null&&n.length))return c;l||(l=[]),c!=null&&c.key||(c={key:"",label:"",nav:[]});for(let a=0;a<n.length;a++){if(!s||c.key)return c;if(b(n[a])){l.push(n[a].label);const r={menus:n[a].children,permissions:t,key:s,fatherNav:l,result:c},u=M(r);u!=null&&u.key?c=u:l.pop()}else if(((o=n[a])==null?void 0:o.key)===s&&A(n[a],t)){l.push(n[a].label);const{label:r,key:u}=n[a];u&&(c={label:r,key:u,nav:l})}}return c}function te(e,n){const t=[];for(let s=0;s<e.length;s++){if(b(e[s])){const l=te(e[s].children,n);e[s].children=l!=null&&l.length?l:void 0}(A(e[s],n)||b(e[s]))&&t.push(e[s])}return t}function le(e,n,t=""){if(t)return t;for(let s=0;s<e.length;s++){if(b(e[s])&&!t){const l=le(e[s].children,n,t);if(l)return t=l,t}A(e[s],n)&&!b(e[s])&&(t=e[s].key)}return t}function A(e,n){return n==null?void 0:n.includes((e==null?void 0:e.rule)||"")}function b(e){var n;return Boolean((n=e.children)==null?void 0:n.length)}const O=I({name:"tabs",initialState:{isLock:!1,isMaximize:!1,activeKey:"",nav:[],tabs:[]},reducers:{toggleLock:(e,n)=>{e.isLock=!!n.payload},toggleMaximize:(e,n)=>{e.isMaximize=!!n.payload},setActiveKey:(e,n)=>{e.activeKey=n.payload},setNav:(e,n)=>{e.nav=n.payload},addTabs:(e,n)=>{const{tabs:t}=e,{payload:s}=n;t.find(c=>c.key===s.key)||t.push(s),t!=null&&t.length&&(t[0].closable=(t==null?void 0:t.length)>1)},closeTabs:(e,n)=>{var c;const{tabs:t}=e,{payload:s}=n,l=t.findIndex(o=>o.key===s);if(l>=0&&t.splice(l,1),s===e.activeKey){let o="";l===0?o=((c=t==null?void 0:t[l])==null?void 0:c.key)||"":o=t[l-1].key,e.activeKey=o,e.isLock=!0}t!=null&&t.length&&(t[0].closable=(t==null?void 0:t.length)>1)},closeTabGoNext:(e,n)=>{const{tabs:t}=e,{payload:s}=n,{key:l,nextPath:c}=s,o=t.findIndex(a=>a.key===l);o>=0&&t.splice(o,1),l===e.activeKey&&(e.activeKey=c,e.isLock=!0),t!=null&&t.length&&(t[0].closable=(t==null?void 0:t.length)>1)},closeLeft:(e,n)=>{const{tabs:t}=e,{payload:s}=n,l=t.findIndex(c=>c.key===s);l>=0&&t.splice(0,l),e.activeKey=t[0].key,t!=null&&t.length&&(t[0].closable=(t==null?void 0:t.length)>1)},closeRight:(e,n)=>{const{tabs:t}=e,{payload:s}=n,l=t.findIndex(c=>c.key===s);l>=0&&t.splice(l+1,t.length-l-1),e.activeKey=t[t.length-1].key,t!=null&&t.length&&(t[0].closable=(t==null?void 0:t.length)>1)},closeOther:(e,n)=>{const{tabs:t}=e,{payload:s}=n,l=t.find(c=>c.key===s);l&&(e.tabs=[l],e.activeKey=l.key,e.isLock=!0),t[0].closable=!1},closeAllTab:e=>{e.tabs=[]}}}),{toggleLock:ge,toggleMaximize:xe,setActiveKey:F,setNav:ke,addTabs:$,closeTabs:ve,closeTabGoNext:be,closeLeft:we,closeRight:Ke,closeOther:Ne,closeAllTab:Ae}=O.actions,Se=O.reducer,z=I({name:"menu",initialState:{isPhone:!1,isCollapsed:!1,selectedKeys:"dashboard",openKeys:["Dashboard"]},reducers:{toggleCollapsed:(e,n)=>{e.isCollapsed=!!n.payload},togglePhone:(e,n)=>{e.isPhone=!!n.payload},setSelectedKeys:(e,n)=>{e.selectedKeys=n.payload},setOpenKeys:(e,n)=>{e.openKeys=n.payload}}}),{toggleCollapsed:Pe,togglePhone:Le,setSelectedKeys:Me,setOpenKeys:G}=z.actions,Ce=z.reducer;function se(e){return[t=>{var s,l,c,o,a;switch(t.key){case"ArrowUp":(s=e.ArrowUp)==null||s.call(e);break;case"ArrowDown":(l=e.ArrowDown)==null||l.call(e);break;case"ArrowLeft":(c=e.ArrowLeft)==null||c.call(e);break;case"ArrowRight":(o=e.ArrowRight)==null||o.call(e);break;case"Enter":(a=e.Enter)==null||a.call(e);break}}]}function ce(e){const{list:n,active:t,onCancel:s,changActive:l}=e,c=E(),o=T(),a=D(i=>i.user.permissions),r=i=>{c(i);const k=M({menus:L,permissions:a,key:i});o($(k)),o(F(i));const v=j(i);o(G(v)),s()},u=i=>{l(i)};return p(R,{children:[!(n!=null&&n.length)&&p("div",{className:"flex flex-col items-center pt-5 text-warm-gray-400",children:[d(y,{className:"text-40px",icon:"mdi:archive-cancel-outline"}),d("span",{className:"mt-1",children:"暂无搜索结构"})]}),(n==null?void 0:n.length)>0&&d("div",{className:"mt-5",children:n==null?void 0:n.map(i=>{var x;return p("div",{className:`
                h-56px
                mt-8px
                px-14px
                rounded-4px
                cursor-pointer
                flex
                items-center
                justify-between
                shadow-md
                border
                border-light-500
                ${t===i.key?"bg-blue-500 text-white":""}
              `,onClick:()=>r(i.key),onMouseEnter:()=>u(i.key),children:[p("div",{className:"flex items-center",children:[d(y,{className:"text-lg mr-1",icon:"gg:menu-boxed"}),i.nav&&((x=i.nav)==null?void 0:x.length)>0&&i.nav.map((k,v)=>p(g.exports.Fragment,{children:[v>0&&d("span",{className:"mx-5px",children:">"}),d("span",{children:k})]},k)),!i.nav&&d("span",{children:i.label})]}),d(y,{className:"icon text-20px p-2px mr-5px",icon:"ant-design:enter-outlined"})]},i.key)})})]})}const oe="_icon_1eshe_1",K={icon:oe};function ae(){return p("div",{className:"flex items-center text-dark-50",children:[p("span",{className:"mr-14px flex items-center",children:[d(y,{className:`${K.icon} text-20px p-2px mr-5px`,icon:"ant-design:enter-outlined"}),d("span",{children:"确认"})]}),p("span",{className:"mr-14px flex items-center",children:[d(y,{className:`${K.icon} text-20px p-2px mr-5px`,icon:"mdi-arrow-up-thin"}),d(y,{className:`${K.icon} text-20px p-2px mr-5px`,icon:"mdi-arrow-down-thin"}),d("span",{children:"切换"})]}),p("span",{className:"flex items-center",children:[d(y,{className:`${K.icon} text-20px p-2px mr-5px`,icon:"mdi:keyboard-esc"}),d("span",{children:"关闭"})]})]})}function re(e){const n=E(),t=g.exports.useRef(null),{modalRef:s}=e,[l,c]=g.exports.useState(""),[o,a]=g.exports.useState(""),[r,u]=g.exports.useState([]),[i,x]=g.exports.useState(!1),k=T(),v=D(h=>h.user.permissions);g.exports.useImperativeHandle(s,()=>({toggle:()=>{x(!i)}})),g.exports.useLayoutEffect(()=>(i&&setTimeout(()=>{var h;(h=t.current)==null||h.focus({cursor:"end"})},0),()=>{c(""),a(""),u([])}),[i]);const U=h=>{a(h)},S=()=>{x(!1)},C=()=>{if(o){n(o);const m=M({menus:L,permissions:v,key:o});k($(m)),k(F(o));const f=j(o);k(G(f)),S()}},_=Q(h=>{var w;const f=B({menus:L,permissions:v,value:h});f!=null&&f.length?(a(((w=f==null?void 0:f[0])==null?void 0:w.key)||""),u(f)):(a(""),u([]))},{wait:200}),q=h=>{const{value:m}=h.target;c(m),_.run(m)},H=()=>{if(!r.length)return null;const h=r.findIndex(f=>f.key===o);if(h===0)return null;const m=r[h-1].key;a(m)},J=()=>{if(!r.length)return null;const h=r.length-1,m=r.findIndex(w=>w.key===o);if(m===h)return null;const f=r[m+1].key;a(f)},[P]=se({ArrowUp:H,ArrowDown:J,Enter:C});return g.exports.useEffect(()=>{if(r.length)return window.addEventListener("keydown",P),()=>{window.removeEventListener("keydown",P)}},[r,o,P]),p(W,{className:"rounded-100px",open:i,closable:!1,onCancel:S,footer:d(ae,{}),children:[d(X,{ref:t,value:l,placeholder:"请输入关键词搜索",allowClear:!0,prefix:d(y,{className:"text-lg text-warm-gray-400",icon:"ant-design:search-outlined"}),onChange:q,onPressEnter:C}),d(ce,{list:r,active:o,onCancel:S,changActive:U})]})}function Re(){const e=g.exports.useRef(null);return p(R,{children:[d(Y,{title:"搜索",children:d(y,{className:"flex items-center justify-center text-lg mr-3 cursor-pointer",icon:"uil-search",onClick:()=>{var t;(t=e.current)==null||t.toggle()}})}),d(re,{modalRef:e})]})}export{Re as G,M as a,$ as b,j as c,L as d,G as e,Me as f,le as g,ke as h,be as i,te as j,N as k,Ae as l,Ke as m,we as n,Ne as o,ve as p,xe as q,ge as r,F as s,Pe as t,Le as u,Ce as v,Se as w};

import{r as u,j as r}from"./react.402eeaf7.js";import{m as l,I as d,B as g}from"./antd.2a715811.js";import{I as m}from"./@iconify_react.233ce0ee.js";function y(){const o=u.useRef(null),n=u.useCallback(a=>new Promise((c,e)=>{var i;try{let t=a;if(t||(t=(i=o.current)==null?void 0:i.value),!t){e("复制的内容不能为空");return}if(typeof t!="string"&&typeof t!="number"){e("复制的内容必须是字符串或数字");return}navigator.clipboard.writeText(t.toString()).then(()=>{c(t)}).catch(p=>{e(p)})}catch(t){e(t)}}),[]),s=u.useCallback(()=>navigator.clipboard.readText(),[]);return[o,n,s]}const{Search:x}=d;function b(o){const[n,s]=l.useMessage(),[,a]=y(),c=e=>{if(!e)return n.warning({content:"请输入复制内容",key:"copy"});try{a(e),n.success({content:"复制成功",key:"copy"})}catch{n.warning({content:"复制失败",key:"copy"})}};return r.jsxs(r.Fragment,{children:[s,r.jsx(x,{...o,placeholder:"请输入",enterButton:"复制",onSearch:c})]})}function k(o){const{text:n,value:s}=o,[,a]=y(),[c,e]=l.useMessage(),i=()=>{try{a(s),c.success({content:"复制成功",key:"copy"})}catch{c.warning({content:"复制失败",key:"copy"})}};return r.jsxs(r.Fragment,{children:[e,r.jsx(g,{...o,icon:r.jsx(m,{icon:"ant-design:copy-outlined"}),onClick:i,children:n})]})}export{b as C,k as a};

import{j as u}from"./components_Bottom.ec4afff7.js";import{I as f,m as c,B as d}from"./antd.9976a9b6.js";import{r as p}from"./react.017637b6.js";import{I as C}from"./@iconify_react.5fde6161.js";function l(){const t=p.exports.useRef(null),n=p.exports.useCallback(r=>new Promise((s,e)=>{var y;try{let o=r;if(o||(o=(y=t.current)==null?void 0:y.value),!o){e("复制的内容不能为空");return}if(typeof o!="string"&&typeof o!="number"){e("复制的内容必须是字符串或数字");return}navigator.clipboard.writeText(o.toString()).then(()=>{s(o)}).catch(i=>{e(i)})}catch(o){e(o)}}),[]),a=p.exports.useCallback(()=>navigator.clipboard.readText(),[]);return[t,n,a]}const{Search:m}=f;function x(t){const[,n]=l();return u(m,{...t,placeholder:"请输入",enterButton:"复制",onSearch:r=>{if(!r)return c.warning({content:"请输入复制内容",key:"copy"});try{n(r),c.success({content:"复制成功",key:"copy"})}catch{c.warning({content:"复制失败",key:"copy"})}}})}function T(t){const{text:n,value:a}=t,[,r]=l();return u(d,{...t,icon:u(C,{icon:"ant-design:copy-outlined"}),onClick:()=>{try{r(a),c.success({content:"复制成功",key:"copy"})}catch{c.warning({content:"复制失败",key:"copy"})}},children:n})}export{x as C,T as a};
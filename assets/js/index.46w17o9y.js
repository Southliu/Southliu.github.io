import{r as e,j as l}from"./react@18.3.1.BYZOCa2p.js";import{P as n,c as s,g as t,h as a}from"./antd@5.17.2_react-dom@18.3.1_react@18.3.1.BZgddzRx.js";import{Y as i}from"./@ant-design_icons@5.3.7_react-dom@18.3.1_react@18.3.1.Da2NRIyD.js";function r(){const[l,n]=e.useState(!0);return[(e,s)=>{if(!(null==s?void 0:s.length)||!(null==e?void 0:e.length))return e||[];if(l)return n(!1),e||[];for(let l=0;l<(null==e?void 0:e.length);l++){const n=e[l];n.hidden=!s.includes(n.dataIndex)}return e}]}function c(r){const{columns:c,getTableChecks:o}=r,[d,u]=e.useState(!1),[x,h]=e.useState([]),[m,p]=e.useState([]),f={...r};delete f.getTableChecks,e.useEffect((()=>{v(c)}),[c]);const j=()=>{u(!d)},v=e=>{if(!(null==e?void 0:e.length))return[];const l=[],n=[];for(let s=0;s<(null==e?void 0:e.length);s++){const t=e[s],{dataIndex:a}=t;!t.hidden&&a&&(null==n||n.push(a)),l.push({label:t.title,value:a})}h(l),p(n)},g=e=>{p(e)},b=()=>{j(),o(m)};return l.jsx(n,{content:()=>l.jsxs("div",{className:"min-w-130px",children:[l.jsx(t.Group,{className:"flex flex-col !px-12px",value:m,onChange:g,children:null==x?void 0:x.map((e=>l.jsx("div",{children:l.jsx(t,{value:e.value,children:e.label})},e.value)))}),l.jsx(a,{className:"!mt-10px !mb-5px"}),l.jsxs("div",{className:"flex justify-end px-10px",children:[l.jsx(s,{size:"small",className:"mr-5px",onClick:j,children:"取消"}),l.jsx(s,{type:"primary",size:"small",onClick:b,children:"筛选"})]})]}),trigger:"click",placement:"bottom",overlayInnerStyle:{padding:"12px 0 10px"},open:d,onOpenChange:j,children:l.jsx(s,{icon:l.jsx(i,{}),...f,children:(null==r?void 0:r.children)||"字段筛选"})})}export{c as F,r as u};

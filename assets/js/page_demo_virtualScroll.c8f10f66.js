import{j as e}from"./react.a7da97a2.js";import{u as t}from"./page_content_article.c737e8e9.js";import{F as r}from"./react-window.5ab8d0de.js";import{u as n}from"./components_Fullscreen.805c0516.js";import{A as o}from"./react-virtualized-auto-sizer.a6c3058a.js";import{B as l}from"./components_Table.fcebe246.js";import{u as s}from"./react-i18next.1d91db1a.js";function i(){const{theme:t}=n(),l=({index:r,style:n})=>e.jsxs("div",{className:`\n        text-center\n        ${r%2?"bg-#f8f8f0":""}\n        ${"dark"===t&&r%2?"!bg-#141414":""}\n      `,style:n,children:["Row ",r+1]});return e.jsx(o,{children:({height:t,width:n})=>e.jsx(e.Fragment,{children:t&&e.jsx(r,{height:t,itemCount:1e4,itemSize:35,width:n,children:l})})})}const a=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));function c(){const{t:t}=s(),r=[{title:"ID",dataIndex:"id",width:200},{title:t("public.name"),dataIndex:"name",width:200},{title:t("system.phone"),dataIndex:"phone",width:200},{title:t("system.age"),dataIndex:"number",width:200}],n=new Array(0).fill({});for(let e=0;e<1e4;e++){const t=e+1;n.push({id:t,name:"name"+t,phone:13*t,number:3*t})}return e.jsx(l,{isVirtual:!0,columns:r,dataSource:n,scrollY:500})}const d=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));const m=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{t:r}=s();return t(r,r("content.virtualScroll")),e.jsxs("div",{className:"flex px-30px h-full py-5 bg-white",children:[e.jsxs("div",{className:"flex flex-col mr-30px",children:[e.jsxs("h2",{children:[r("content.virtualScroll1"),"："]}),e.jsx("div",{className:"h-500px w-300px border border-cool-gray-100",children:e.jsx(i,{})})]}),e.jsxs("div",{children:[e.jsxs("h2",{children:[r("content.virtualScroll2"),"："]}),e.jsx(c,{})]})]})}},Symbol.toStringTag,{value:"Module"}));export{a as V,d as a,m as i};

import{r as e,j as a}from"./react@18.3.1.BYZOCa2p.js";import{h as l,a as s,b as r}from"./componentMap.BGcj87r5.js";import{u as i}from"./react-i18next@14.1.1_i18next@23.11.4_react-dom@18.3.1_react@18.3.1.CqynWAnl.js";import{F as t,c as n}from"./antd@5.17.2_react-dom@18.3.1_react@18.3.1.BZgddzRx.js";import{g as o,l as c}from"./@ant-design_icons@5.3.7_react-dom@18.3.1_react@18.3.1.Da2NRIyD.js";const m=e.forwardRef(((e,m)=>{const{list:p,data:d,isLoading:h,isSearch:x,isCreate:u,children:j,labelCol:b,wrapperCol:f,handleFinish:C}=e,{t:y}=i(),[w]=t.useForm(),_={...e};delete _.isSearch,delete _.isCreate,delete _.isLoading,delete _.onCreate,delete _.handleFinish;const F=()=>{null==w||w.submit()};return a.jsx("div",{id:"searches",className:"py-3",children:a.jsxs(t,{layout:"inline",..._,ref:m,form:w,labelCol:b||{span:8},wrapperCol:f||{span:16},initialValues:d,onFinish:e=>{if(C){const a=r(e,p);null==C||C(a)}},onFinishFailed:e=>{},autoComplete:"off",children:[null==p?void 0:p.map((e=>a.jsx(t.Item,{label:e.label,name:e.name,className:"!mb-5px",labelCol:{style:{width:e.labelCol}},wrapperCol:{style:{width:e.wrapperCol}},rules:e.rules,valuePropName:l(e.component),children:s(y,e,F)},`${e.name}`))),a.jsxs("div",{className:"flex items-center flex-wrap",children:[!1!==x&&a.jsx(t.Item,{children:a.jsx(n,{type:"primary",htmlType:"submit",className:"!mb-5px",loading:h,icon:a.jsx(o,{}),children:y("public.search")})}),!1!==u&&a.jsx(t.Item,{children:a.jsx(n,{type:"primary",className:"!mb-5px",icon:a.jsx(c,{}),onClick:()=>{var a;null==(a=e.onCreate)||a.call(e)},children:y("public.create")})}),j]})]})})}));export{m as B};

import{r as e,j as l}from"./react@18.3.1.BUluQGWx.js";import{h as s,b as a,c as i}from"./componentMap.Rzt_UD6W.js";import{u as n}from"./react-i18next@14.1.1_i18next@23.11.4_react-dom@18.3.1_react@18.3.1.DSyy_3gc.js";import{F as t,g as r,f as o,c as d}from"./antd@5.20.2_react-dom@18.3.1_react@18.3.1.BK3BHicj.js";import{l as c,m,n as h}from"./@ant-design_icons@5.3.7_react-dom@18.3.1_react@18.3.1.DP1d7j6P.js";const p=e.forwardRef(((p,u)=>{var f;const{list:x,data:j,isLoading:b,isSearch:C=!0,isClear:w=!0,isRowExpand:v=!0,children:g,labelCol:F,wrapperCol:y,defaultColCount:_=4,defaultRowExpand:N=2,handleFinish:S}=p,{t:k}=n(),[E]=t.useForm(),[I,R]=e.useState(!1),[L,V]=e.useState(v);e.useEffect((()=>{if(V(v),v){V(_*N<x.length)}}),[_,N,v,x.length]);const B={...p};delete B.isSearch,delete B.isClear,delete B.isLoading,delete B.handleFinish;const J=()=>{null==E||E.submit()},K=e=>(null==e?void 0:e.labelCol)?{style:{width:e.labelCol}}:F||{span:6},M=e=>(null==e?void 0:e.wrapperCol)?{style:{width:e.wrapperCol}}:y||{span:18};return l.jsx("div",{id:"searches",children:l.jsx(t,{layout:"inline",...B,ref:u,form:E,initialValues:j,onFinish:e=>{if(S){const l=i(e,x);null==S||S(l)}},onFinishFailed:e=>{},autoComplete:"off",children:l.jsxs(r,{wrap:!0,className:"w-full",children:[null==(f=(e=>{if(!L)return e;const l=_*N;for(let s=0;s<e.length;s++){const a=e[s];s<l?a.hidden=!1:a.hidden=!I}return e})(x))?void 0:f.map((e=>l.jsx("div",{style:{width:e.hidden?0:100/_+"%"},children:l.jsx(t.Item,{label:e.label,name:e.name,className:"!mb-5px",hidden:e.hidden,labelCol:K(e),wrapperCol:M(e),rules:e.rules,valuePropName:s(e.component),children:a(k,e,J)})},`${e.name}`))),l.jsx(o,{flex:(null==x?void 0:x.length)%_==0||L?"auto":void 0,children:l.jsx(r,{justify:"flex-end",children:l.jsxs("div",{className:"flex items-center flex-wrap",children:[!!C&&l.jsx(t.Item,{children:l.jsx(d,{type:"primary",htmlType:"submit",className:"!mb-5px",loading:b,icon:l.jsx(c,{}),children:k("public.search")})}),!!w&&l.jsx(t.Item,{children:l.jsx(d,{className:"!mb-5px",icon:l.jsx(m,{}),onClick:()=>{null==E||E.resetFields(),null==E||E.setFieldsValue(j?{...j}:{}),null==E||E.submit()},children:k("public.clear")})}),g,!!L&&l.jsxs("div",{className:"text-12px cursor-pointer color-#1677ff hover:color-#69b1ff",onClick:()=>{R(!I)},children:[l.jsx(h,{rotate:I?180:0}),I?"收缩":"展开"]})]})})})]})})})}));export{p as B};
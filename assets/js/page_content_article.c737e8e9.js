import{r as e,j as t}from"./react.a7da97a2.js";import{a as n,u as a}from"./react-redux.5cd65198.js";import{u as s,b as o}from"./components_Fullscreen.805c0516.js";import{c as r}from"./layouts.379b63e3.js";import{U as i,D as c}from"./components_Buttons.19c6045b.js";import{B as l}from"./components_Content.8061cca8.js";import{B as u}from"./components_Search.8b93898e.js";import{B as m}from"./components_Table.fcebe246.js";import{B as p}from"./components_Pagination.732bb587.js";import{u as d}from"./react-i18next.1d91db1a.js";import{u as f,a as g}from"./react-router.31c22429.js";import{I as b,m as j,i as h}from"./antd.850acb68.js";import{c as x,I as y,b as S,A as _,d as v}from"./components_Business.13a3a6ce.js";import{g as $}from"./components_Count.a83ac5a4.js";import{r as I}from"./react-activation.cb49eacd.js";import{g as k,s as w,a as z,i as C,j as F,k as P,w as B}from"./components_GlobalSearch.b83cc5c8.js";import{B as N}from"./components_Form.a2b9bd44.js";import{S as E}from"./components_Bottom.4148c2a0.js";function T(t,n){const a=x(t)+n?`${n} - ${x(t)}`:"";e.useEffect((()=>{document.title=a}),[a]),I.useActivate((()=>{document.title=a}))}function O(e){const{t:n}=d();return t.jsxs(t.Fragment,{children:[t.jsx(b,{...e,placeholder:n("public.inputPleaseEnter")}),t.jsx("div",{className:"mb-5px text-red",children:n("content.sensitiveInfo")})]})}const R=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),D=e=>[{label:e("login.username"),name:"username",component:"Input"},{label:e("public.title"),name:"title",component:"Input"}],M=(e,t)=>[{title:"ID",dataIndex:"id",width:400,fixed:"left"},{title:e("login.username"),dataIndex:"username",width:400,fixed:"left"},{title:e("public.title"),dataIndex:"title",width:400},{title:e("public.content"),dataIndex:"content",width:400},{title:e("public.operate"),dataIndex:"operate",width:200,fixed:"right",render:(e,n)=>t(e,n)}],A=e=>[{label:e("login.username"),name:"username",rules:y(e),component:"Input"},{label:e("content.nestedData"),name:["user","name","test"],rules:y(e),component:"Input"},{label:e("public.title"),name:"title",rules:y(e),component:"customize",render:O},{label:e("public.content"),name:"content",component:"Editor"}];const L={page:1,pageSize:20};const V=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{t:g}=d();T(g,g("content.articleTitle"));const b=f(),h=n(),x=e.useRef(null),{permissions:y}=s(),[_,v]=e.useState(!1),[$,I]=e.useState(L.page),[k,w]=e.useState(L.pageSize),[z,C]=e.useState(0),[F,P]=e.useState([]),[B,N]=j.useMessage(),E=a((e=>e.public.isRefreshPage)),O="/content/article",R={page:r(`${O}/index`,y),create:r(`${O}/create`,y),update:r(`${O}/update`,y),delete:r(`${O}/delete`,y)},A=e.useCallback((async e=>{try{v(!0);const{code:t,data:n}=await function(e){return S.get("/content/article/index",{params:e})}(e);if(200===Number(t)){const{items:e,total:t}=n;C(t),P(e)}}finally{v(!1)}}),[]);e.useEffect((()=>{R.page&&!E&&A({...L})}),[R.page]),e.useEffect((()=>{E&&(h(o(!1)),V())}),[E]);const V=()=>{var e;const t={...(null==(e=x.current)?void 0:e.getFieldsValue())||{},page:$,pageSize:k};A(t)},q=async e=>{try{v(!0);const{code:t,message:n}=await function(e){return S.delete(`/content/article/${e}`)}(e);200===Number(t)&&(B.success(n||g("public.successfullyDeleted")),V())}finally{v(!1)}};return t.jsx(l,{isPermission:R.page,children:t.jsxs(t.Fragment,{children:[N,t.jsx(u,{formRef:x,list:D(g),data:L,isLoading:_,isCreate:R.create,onCreate:()=>{b("/content/article/option?type=create")},handleFinish:e=>{I(1),A({page:1,pageSize:k,...e})}}),t.jsx(m,{loading:_,columns:M(g,((e,n)=>t.jsxs(t.Fragment,{children:[!0===R.update&&t.jsx(i,{className:"mr-5px",isLoading:_,onClick:()=>{return e=n.id,void b(`/content/article/option?type=update&id=${e}`);var e}}),!0===R.delete&&t.jsx(c,{className:"mr-5px",isLoading:_,handleDelete:()=>q(n.id)})]}))),dataSource:F}),t.jsx(p,{disabled:_,current:$,pageSize:k,total:z,onChange:(e,t)=>{var n;I(e),w(t);const a=null==(n=x.current)?void 0:n.getFieldsValue();A({...a,page:e,pageSize:t})}})]})})}},Symbol.toStringTag,{value:"Module"})),q={content:"<h4>初始化内容</h4>",transfer:Array.from({length:20}).map(((e,t)=>({key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`}))).filter((e=>Number(e.key)>10)).map((e=>e.key))},G="/content/article";const Q=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{t:a}=d(),{pathname:i,search:c}=g(),u=i+c,m=$(c,"id"),p=e.useRef(null),f=n(),[b,x]=e.useState(!1),[y,O]=e.useState(""),[R,D]=e.useState(q),[M,L]=j.useMessage(),{permissions:V,isCollapsed:Q,isPhone:U}=s(),H=a("content.articleTitle"),J=`${_(a,H)}`,K=`${v(a,m,H)}`;T(a,m?K:J);const W="/content/article",X={create:r(`${W}/create`,V),update:r(`${W}/update`,V)};e.useEffect((()=>{const e=k(G);U||Q||(f(w(e)),f(z(G)))}),[]);const Y=e.useCallback(((e=i)=>{if("/"===e)return;const t=m?K:J,n={label:t,key:u,nav:[a("content.contentTitle"),a("content.articleTitle"),t]};f(C(n.key)),f(F(n.nav)),f(P(n))}),[m,i,c]);e.useEffect((()=>{Y()}),[Y]),I.useActivate((()=>{Y()})),e.useEffect((()=>{m?ee(m):Z()}),[]);const Z=()=>{O(""),D(q)},ee=async e=>{try{O(e),x(!0);const{code:t,data:n}=await function(e){return S.get(`/content/article/${e}`)}(e);if(200!==Number(t))return;D(n)}finally{x(!1)}},te=e=>{var t;null==(t=p.current)||t.handleReset(),e&&f(o(!0)),f(B({key:u,nextPath:G}))};return t.jsx(l,{isPermission:m?X.update:X.create,children:t.jsxs(t.Fragment,{children:[L,t.jsx("div",{className:"mb-50px",children:t.jsx(h,{spinning:b,children:t.jsx(N,{formRef:p,list:A(a),data:R,labelCol:{span:5},handleFinish:async e=>{var t;try{x(!0);const n=()=>{return y?function(e,t){return S.put(`/content/article/${e}`,t)}(y,e):(t=e,S.post("/content/article",t));var t},{code:s,message:o}=await n();if(200!==Number(s))return;M.success(o||a("public.successfulOperation")),null==(t=p.current)||t.handleReset(),te(!0)}finally{x(!1)}}})})}),t.jsx(E,{isLoading:b,goBack:()=>te(),handleSubmit:()=>{var e;null==(e=p.current)||e.handleSubmit()}})]})})}},Symbol.toStringTag,{value:"Module"}));export{R as C,V as i,Q as o,T as u};

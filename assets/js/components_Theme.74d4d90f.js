import{r as e,j as t}from"./react.a7da97a2.js";import{s}from"./components_Fullscreen.805c0516.js";import{I as r}from"./@iconify_react.bcaf6c88.js";import{T as o}from"./components_Business.13a3a6ce.js";import{a}from"./react-redux.5cd65198.js";import{r as i}from"./react-activation.cb49eacd.js";import{u as n}from"./react-i18next.1d91db1a.js";import{T as c}from"./antd.850acb68.js";function m(){const{t:m}=n(),{clear:l,refresh:d,getCachingNodes:f}=i.useAliveController(),h=a(),u=localStorage.getItem(o)||"light",[g,j]=e.useState(u);e.useEffect((()=>{u||localStorage.setItem(o,"light"),"dark"===u&&(document.body.className="theme-dark"),h(s("dark"===u?"dark":"light"))}),[u]);const p=e=>{if(localStorage.setItem(o,e),h(s(e)),j(e),l(),(()=>{const e=f();for(let t=0;t<(null==e?void 0:e.length);t++){const{name:s}=e[t];s&&d(s)}})(),"dark"===e)document.body.className="theme-dark";else document.body.className="theme-primary"};return t.jsx(c,{title:m("public.themes"),children:t.jsxs("div",{className:"flex items-center justify-center text-lg mr-4 cursor-pointer",children:["light"===g&&t.jsx(r,{icon:"mdi-white-balance-sunny",onClick:()=>p("dark")}),"light"!==g&&t.jsx(r,{icon:"mdi-moon-waning-crescent",onClick:()=>p("light")})]})})}export{m as T};

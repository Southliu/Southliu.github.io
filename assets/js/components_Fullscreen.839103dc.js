import{j as r,a as u}from"./components_Bottom.f649ec7b.js";import{I as t}from"./@iconify_react.5fde6161.js";import{c as i}from"./@reduxjs_toolkit.d0210b58.js";import{u as o,a}from"./react-redux.dedf6ab1.js";import{T as m}from"./antd.b8eb8a06.js";const n=i({name:"public",initialState:{theme:"light",isFullscreen:!1,isRefresh:!1,isRefreshPage:!1},reducers:{setThemeValue:(e,s)=>{e.theme=s.payload},setFullscreen:(e,s)=>{e.isFullscreen=s.payload},setRefresh:(e,s)=>{e.isRefresh=s.payload},setRefreshPage:(e,s)=>{e.isRefreshPage=s.payload}}}),{setThemeValue:x,setFullscreen:c,setRefresh:b,setRefreshPage:y}=n.actions,j=n.reducer;function f(){const e=o(),s=a(l=>l.public.isFullscreen);return[s,()=>{var l;if(!s&&((l=document.documentElement)==null?void 0:l.requestFullscreen))return document.documentElement.requestFullscreen(),e(c(!0)),!0;if(s&&(document==null?void 0:document.exitFullscreen))return document.exitFullscreen(),e(c(!1)),!0}]}function P(){const[e,s]=f();return r(m,{title:e?"退出全屏":"全屏",children:u("div",{className:"flex items-center justify-center text-lg mr-3 cursor-pointer",onClick:s,children:[e&&r(t,{icon:"gridicons-fullscreen-exit"}),!e&&r(t,{icon:"gridicons-fullscreen"})]})})}export{P as F,y as a,b,j as p,x as s};

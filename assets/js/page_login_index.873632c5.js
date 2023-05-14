import{r as d,j as e}from"./react.981c89a4.js";import{a as I}from"./react-redux.013ca0b6.js";import{T as g,e as P,u as v}from"./components_Business.0c4299c0.js";import{g as M,p as x,s as j,a as k,L as S,l as C}from"./layouts.26760549.js";import{u as O}from"./page_content_article.3e44a9cb.js";import{u as _,s as B}from"./components_Fullscreen.5c803250.js";import{c as u,d as p}from"./components_GlobalSearch.2deb09dd.js";import{u as U}from"./react-router.c2da9238.js";import{F as l,I as b,B as R,m as q}from"./antd.c52db168.js";import{Z as A,_ as D}from"./@ant-design_icons.ba8f7b85.js";function Q(){O("登录");const m=U(),r=I(),[w,y]=v(),[F,n]=d.useState(!1),{permissions:h}=_(),a=localStorage.getItem(g)||"light";d.useEffect(()=>{a||localStorage.setItem(g,"light"),a==="dark"&&(document.body.className="theme-dark"),r(B(a==="dark"?"dark":"light"))},[a]),d.useEffect(()=>{if(w())if(!h.length)N();else{const s=u(p,h);m(s)}},[]);const N=async()=>{try{n(!0);const{data:s}=await M({refresh_cache:!1});if(s){const{data:{user:c,permissions:o}}=s,i=x(o),t=u(p,i);r(j(c)),r(k(i)),m(t)}}finally{n(!1)}},L=async s=>{try{n(!0);const{data:c}=await C(s),{data:{token:o,user:i,permissions:t}}=c;if(!(t!=null&&t.length)||!o)return q.error({content:"用户暂无权限登录",key:"permissions"});const f=x(t),E=u(p,f);y(o),r(j(i)),r(k(f)),m(E)}finally{n(!1)}},T=s=>{console.error("错误信息:",s)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:`
        ${a==="dark"?"bg-black text-white":"bg-light-400"}
        w-screen
        h-screen
        relative
      `,children:e.jsxs("div",{className:`
          w-300px
          h-290px
          p-30px
          rounded-5px
          ${a==="dark"?"bg-black bg-dark-200":"bg-white"}
          box-border
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        `,children:[e.jsxs("div",{className:"pb-30px pt-10px flex items-center justify-center",children:[e.jsx("img",{className:"mr-2 object-contain",width:"30",height:"30",src:S,alt:"LOGO"}),e.jsx("span",{className:"text-xl font-bold tracking-2px",children:"系统登录"})]}),e.jsxs(l,{name:"horizontal_login",autoComplete:"on",onFinish:L,onFinishFailed:T,initialValues:{username:"admin",password:"admin123456"},children:[e.jsx(l.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:e.jsx(b,{"allow-clear":"true",placeholder:"用户名","data-test":"username",autoComplete:"username",addonBefore:e.jsx(A,{className:"change"})})}),e.jsx(l.Item,{name:"password",rules:[{required:!0,message:"请输入密码"},P],children:e.jsx(b.Password,{placeholder:"密码",autoComplete:"current-password",addonBefore:e.jsx(D,{className:"change"})})}),e.jsx(l.Item,{children:e.jsx(R,{type:"primary",htmlType:"submit",className:"w-full mt-5px rounded-5px tracking-2px",loading:F,children:"登录"})})]})]})})})}export{Q as L};

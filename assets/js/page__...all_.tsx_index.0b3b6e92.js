import{j as e}from"./react.e58b2294.js";import{c as m,d as n,e as c,h as u,j as l}from"./components_GlobalSearch.77d489aa.js";import{u as p,a as x}from"./react-redux.95773f8e.js";import{s as d}from"./page_all.module.less_used_index.99cf6f97.js";import{u as f}from"./react-router.d965eaa6.js";import{B as y}from"./antd.a9b3ffac.js";function v(){const r=f(),a=p(),o=x(t=>t.user.permissions),i=()=>{const t=m(n,o);r(t);const s=c({menus:n,permissions:o,key:t});s!=null&&s.key&&(a(u(s.key)),a(l(s)))};return e.jsxs("div",{className:"absolute left-50% top-50% -translate-x-1/2 -translate-y-1/2 text-center",children:[e.jsx("h1",{className:`${d.animation} w-full text-6rem font-bold`,children:"404"}),e.jsx("p",{className:"w-full text-20px font-bold mt-15px text-dark-700",children:"当前页面无法访问，可能没权限或已删除"}),e.jsx(y,{className:"mt-25px margin-auto",onClick:i,children:"返回首页"})]})}export{v as N};
import{j as a,r as e}from"./react.a7da97a2.js";import{M as t}from"./components_Business.13a3a6ce.js";import{u as n}from"./react-i18next.1d91db1a.js";import{i as l,d as o,S as s}from"./antd.850acb68.js";function i(){return a.jsx("div",{className:"absolute left-50% top-50% -translate-x-1/2 -translate-y-1/2 text-center",children:a.jsx(l,{spinning:!0})})}function r(l){const{t:s}=n(),[r,u]=e.useState(!1),[c,p]=e.useState([]),d={...l};delete d.api,delete d.params;const m=e.useCallback((async()=>{try{if(u(!0),l.api){const{code:a,data:e}=await l.api(null==l?void 0:l.params);200===Number(a)&&p(e||[])}}finally{u(!1)}}),[l]);e.useEffect((()=>{l.value&&0===(null==c?void 0:c.length)&&m()}),[l.value]);return a.jsx(o,{allowClear:!0,maxTagCount:t,placeholder:s("public.inputPleaseSelect"),...d,loading:r,treeData:c,notFoundContent:r&&a.jsx(i,{}),onDropdownVisibleChange:a=>{var e;a&&m(),null==(e=l.onDropdownVisibleChange)||e.call(l,a)}})}function u(l){const{t:o}=n(),[r,u]=e.useState(!1),[c,p]=e.useState([]),d={...l};delete d.api,delete d.params;const m=e.useCallback((async()=>{try{if(u(!0),l.api){const{code:a,data:e}=await l.api(null==l?void 0:l.params);200===Number(a)&&p(e||[])}}finally{u(!1)}}),[l]);e.useEffect((()=>{l.value&&0===c.length&&m()}),[l.value]);return a.jsx(s,{allowClear:!0,maxTagCount:t,placeholder:o("public.inputPleaseSelect"),optionFilterProp:"label",...d,loading:r,options:c,notFoundContent:r&&a.jsx(i,{}),onDropdownVisibleChange:a=>{var e;a&&m(),null==(e=l.onDropdownVisibleChange)||e.call(l,a)}})}export{r as A,u as a};

import{r}from"./react.76efb1e3.js";import{d,t as m}from"./lodash.f7a6337e.js";import"./dayjs.2c8f58dc.js";import"./resize-observer-polyfill.0f9f8adb.js";const a=e=>typeof e=="function",p=!1,i=p;function f(e){const t=r.useRef(e);return t.current=e,t}const v=e=>{i&&a(e);const t=f(e);r.useEffect(()=>()=>{t.current()},[])},l=v;function b(e,t){var o;i&&a(e);const c=f(e),u=(o=t==null?void 0:t.wait)!==null&&o!==void 0?o:1e3,n=r.useMemo(()=>d((...s)=>c.current(...s),u,t),[]);return l(()=>{n.cancel()}),{run:n,cancel:n.cancel,flush:n.flush}}function w(e,t){var o;i&&a(e);const c=f(e),u=(o=t==null?void 0:t.wait)!==null&&o!==void 0?o:1e3,n=r.useMemo(()=>m((...s)=>c.current(...s),u,t),[]);return l(()=>{n.cancel()}),{run:n,cancel:n.cancel,flush:n.flush}}export{w as a,b as u};

import{r as s,j as u}from"./react.76efb1e3.js";import{i as f}from"./echarts.ccbcc37e.js";import{u as l}from"./components_Fullscreen.5db0d3c8.js";const d=(e,n)=>{const t=s.useRef(),o=s.useRef(null),a=()=>{var i;o.current&&((i=t.current)==null||i.dispose())},r=s.useCallback(()=>{e&&(a(),o.current&&(t.current=f(o.current),t.current.setOption(e)))},[e]);return s.useEffect(()=>{e&&r()},[r,e]),s.useEffect(()=>(r(),window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r),a()}),[]),s.useEffect(()=>{var i;n&&((i=t==null?void 0:t.current)==null||i.setOption(e))},[n]),[o,r]},c=[962,1023,1112,1123,1239,1382,1420,1523,1622,1643,1782,1928],p={title:{text:"当日充值排行",left:30,top:5},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["孤独的霸气","凌云齐天","夏至未至","叶璃溪","良辰美景奈何天","凹凸曼","六月离别","离歌","终极战犯","水洗晴空","安城如沫","渣渣灰"]},series:[{name:"充值数",type:"bar",data:c}]};function m(){const{permissions:e}=l(),[n,t]=d(p,c);return e.length&&n.current&&t(),u.jsx("div",{className:"w-38% h-550px border border-gray-200 rounded-10px",children:u.jsx("div",{ref:n,className:"w-full h-full"})})}const g=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}));export{m as B,g as a,d as u};

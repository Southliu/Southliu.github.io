import{o as s}from"./compute-scroll-into-view.620fa8c1.js";let b=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function p(e,t){let r=e.isConnected||e.ownerDocument.documentElement.contains(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(r?s(e,t):[]);if(!r)return;let l=b(t),a=s(e,l),f="scrollBehavior"in document.body.style;a.forEach(o=>{let{el:n,top:c,left:i}=o;n.scroll&&f?n.scroll({top:c,left:i,behavior:l.behavior}):(n.scrollTop=c,n.scrollLeft=i)})}export{p as o};

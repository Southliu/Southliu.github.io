import{i as r,r as n,a}from"./@ctrl_tinycolor.4982d949.js";var o=2,e=.16,t=.05,i=.05,u=.15,c=5,d=4,h=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function p(r){var a=r.r,o=r.g,e=r.b,t=n(a,o,e);return{h:360*t.h,s:t.s,v:t.v}}function v(r){var n=r.r,o=r.g,e=r.b;return"#".concat(a(n,o,e,!1))}function y(r,n,a){var e;return(e=Math.round(r.h)>=60&&Math.round(r.h)<=240?a?Math.round(r.h)-o*n:Math.round(r.h)+o*n:a?Math.round(r.h)+o*n:Math.round(r.h)-o*n)<0?e+=360:e>=360&&(e-=360),e}function s(r,n,a){return 0===r.h&&0===r.s?r.s:((o=a?r.s-e*n:n===d?r.s+e:r.s+t*n)>1&&(o=1),a&&n===c&&o>.1&&(o=.1),o<.06&&(o=.06),Number(o.toFixed(2)));var o}function g(r,n,a){var o;return(o=a?r.v+i*n:r.v-u*n)>1&&(o=1),Number(o.toFixed(2))}function b(n){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],e=r(n),t=c;t>0;t-=1){var i=p(e),u=v(r({h:y(i,t,!0),s:s(i,t,!0),v:g(i,t,!0)}));o.push(u)}o.push(v(e));for(var b=1;b<=d;b+=1){var x=p(e),l=v(r({h:y(x,b),s:s(x,b),v:g(x,b)}));o.push(l)}return"dark"===a.theme?h.map((function(n){var e,t,i,u=n.index,c=n.opacity;return v((e=r(a.backgroundColor||"#141414"),t=r(o[u]),i=100*c/100,{r:(t.r-e.r)*i+e.r,g:(t.g-e.g)*i+e.g,b:(t.b-e.b)*i+e.b}))})):o}var x={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},l={},f={};Object.keys(x).forEach((function(r){l[r]=b(x[r]),l[r].primary=l[r][5],f[r]=b(x[r],{theme:"dark",backgroundColor:"#141414"}),f[r].primary=f[r][5]}));var F=l.blue,m=2,A=.16,C=.05,k=.05,M=.15,D=5,E=4,B=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function N(r){var a=r.r,o=r.g,e=r.b,t=n(a,o,e);return{h:360*t.h,s:t.s,v:t.v}}function j(r){var n=r.r,o=r.g,e=r.b;return"#".concat(a(n,o,e,!1))}function w(r,n,a){var o;return(o=Math.round(r.h)>=60&&Math.round(r.h)<=240?a?Math.round(r.h)-m*n:Math.round(r.h)+m*n:a?Math.round(r.h)+m*n:Math.round(r.h)-m*n)<0?o+=360:o>=360&&(o-=360),o}function O(r,n,a){return 0===r.h&&0===r.s?r.s:((o=a?r.s-A*n:n===E?r.s+A:r.s+C*n)>1&&(o=1),a&&n===D&&o>.1&&(o=.1),o<.06&&(o=.06),Number(o.toFixed(2)));var o}function _(r,n,a){var o;return(o=a?r.v+k*n:r.v-M*n)>1&&(o=1),Number(o.toFixed(2))}function q(n){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],e=r(n),t=D;t>0;t-=1){var i=N(e),u=j(r({h:w(i,t,!0),s:O(i,t,!0),v:_(i,t,!0)}));o.push(u)}o.push(j(e));for(var c=1;c<=E;c+=1){var d=N(e),h=j(r({h:w(d,c),s:O(d,c),v:_(d,c)}));o.push(h)}return"dark"===a.theme?B.map((function(n){var e,t,i,u=n.index,c=n.opacity;return j((e=r(a.backgroundColor||"#141414"),t=r(o[u]),i=100*c/100,{r:(t.r-e.r)*i+e.r,g:(t.g-e.g)*i+e.g,b:(t.b-e.b)*i+e.b}))})):o}var z={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},G={},H={};Object.keys(z).forEach((function(r){G[r]=q(z[r]),G[r].primary=G[r][5],H[r]=q(z[r],{theme:"dark",backgroundColor:"#141414"}),H[r].primary=H[r][5]}));export{q as a,F as b,b as g,x as p};

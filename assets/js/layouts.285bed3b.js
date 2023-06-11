import{r as h,j as e}from"./react.ab566f72.js";import{r as D,P as le,u as _}from"./components_Business.a1227ce9.js";import{a as T,u as F}from"./react-redux.7715edfc.js";import{c as ue}from"./@reduxjs_toolkit.b31fae26.js";import{g as me,s as q,a as de,f as fe,d as R,b as J,c as he,t as H,e as K,h as S,i as z,j as $,G as pe,k as xe,l as ge,m as ve,n as je,o as ee,p as be,q as ye,r as Ne}from"./components_GlobalSearch.43da730b.js";import{u as M,F as Ce,a as Q}from"./components_Fullscreen.548d6423.js";import{u as Ae}from"./ahooks.956023c0.js";import{I as E}from"./@iconify_react.95751c9c.js";import{u as I,a as W,b as ke}from"./react-router.e8592fb4.js";import"./hoist-non-react-statics.2204367e.js";import"./react-is.4e9f7c39.js";import{k as Oe,F as B,I as Me,m as L,l as we,n as V,M as Pe,T as se,o as Te,h as Xe}from"./antd.d195a08c.js";import{r as te,K as Be}from"./react-activation.8e58fa4c.js";import{D as Ee}from"./components_DataScreen.09476d2a.js";import{T as Ie}from"./components_Theme.5bd5fb9e.js";import{B as Re}from"./components_Modal.87933c15.js";import{P as G}from"./components_PasswordStrength.ca4af586.js";import{K as Ke,N as Se,O as ze,T as We,B as Le,V as De,W as He,X as Ve,Y}from"./@ant-design_icons.2b89cbc2.js";import Ue from"./page_403.tsx_index.d81f5c0b.js";function Fe(s){return D.get("/authority/user/refresh-permissions",{params:s})}const qe=s=>{const t=[];for(let o=0;o<s.length;o++){const{id:m,operation:r}=s[o];t.push(`/${m}`);for(let a=0;a<r.length;a++)t.push(`/${m}/${r[a]}`)}return t},Ws=(s,t)=>!t||t.length===0?!1:t.includes(s),ne=ue({name:"user",initialState:{permissions:[],userInfo:{id:0,username:"",email:"",phone:""}},reducers:{setUserInfo:(s,t)=>{s.userInfo=t.payload},setPermissions:(s,t)=>{s.permissions=t.payload},clearInfo:s=>{s.userInfo={id:0,username:"",email:"",phone:""}}}}),{setUserInfo:Je,setPermissions:Z,clearInfo:Qe}=ne.actions,Ls=ne.reducer,Ge="_header_17bj0_1",Ye="_headerCloseMenu_17bj0_14",Ze="_headerDriver_17bj0_17",_e="_menu_17bj0_20",$e="_menuClose_17bj0_28",es="_con_17bj0_31",ss="_conCloseMenu_17bj0_39",ts="_conMaximize_17bj0_43",ns="_headerNone_17bj0_47",os="_none_17bj0_51",as="_menuNone_17bj0_54",rs="_conPhone_17bj0_58",is="_headerPhone_17bj0_61",cs="_leftDivide_17bj0_64",b={header:Ge,headerCloseMenu:Ye,headerDriver:Ze,menu:_e,menuClose:$e,con:es,conCloseMenu:ss,conMaximize:ts,headerNone:ns,none:os,menuNone:as,conPhone:rs,headerPhone:is,leftDivide:cs},ls="/assets/svg/logo.17e50649.svg";function us(){const s=I(),{pathname:t}=W(),o=T(),[m,r]=h.useState([]),{isMaximize:a,isCollapsed:i,isPhone:c,openKeys:l,selectedKeys:x,permissions:g}=M();h.useEffect(()=>{const n=me(t);!c&&!i&&(o(q(n)),o(de(t)))},[t]);const d=h.useCallback(n=>{var j,v,C;for(let N=0;N<n.length;N++)(j=n[N])!=null&&j.icon&&(n[N].icon=e.jsx(E,{icon:n[N].icon})),(C=(v=n[N])==null?void 0:v.children)!=null&&C.length&&d(n[N].children)},[]);h.useEffect(()=>{if(g.length>0){const n=fe(R,g);d(n),r(n||[])}},[d,g]);const u=n=>{s(n);const v=K({menus:m,permissions:g,key:n});v&&(o(S(v.key)),o(z(v.nav)),o($(v)))},y=n=>{u(n.key),c&&O()},p=(n,j)=>{let v=!0;for(let C=0;C<n.length;C++)if(n[C]!==j[C]){v=!1;break}return v},A=n=>{const j=[];let v="";if(n.length>0){v=n[n.length-1];const C=J(v);j.push(v);for(let N=n.length-2;N>=0;N--){const X=J(n[N]);p(X,C)&&j.unshift(n[N])}}o(q(j))},w=()=>{const n=he(m,g);u(n),c&&O()},O=()=>{o(H(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`
          transition-all
          overflow-auto
          z-2
          ${b.menu}
          ${i?b.menuClose:""}
          ${a||c&&i?b.menuNone:""}
          ${c?"!z-1002":""}
        `,children:[e.jsxs("div",{className:`
            text-white
            flex
            content-center
            px-5
            py-2
            cursor-pointer
            ${i?"justify-center":""}
          `,onClick:w,children:[e.jsx("img",{src:ls,width:30,height:30,className:"object-contain",alt:"logo"}),e.jsx("span",{className:`
            text-white
            ml-3
            text-xl
            font-bold
            truncate
            ${i?"hidden":""}
          `,children:"后台管理系统"})]}),e.jsx(Oe,{className:"z-1000",selectedKeys:[x],openKeys:l,mode:"inline",theme:"dark",inlineCollapsed:i,items:m,onClick:y,onOpenChange:A})]}),c&&!i&&e.jsx("div",{className:`
            ${b.cover}
            fixed
            w-full
            h-full
            bg-gray-500
            bg-opacity-10
            z-1001
          `,onClick:O})]})}const ms="data:image/png;base64,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";function Ds(s){return D.post("/login",s)}function ds(s){return D.post("/update-password",s)}function fs(s){const{passwordRef:t}=s,[o]=B.useForm(),[m,r]=h.useState(!1),[a,i]=h.useState(!1);h.useImperativeHandle(t,()=>({open:()=>{r(!0)}}));const c=()=>{o.submit()},l=async x=>{if(x.password!==x.confirmPassword)return L.warning({content:"密码和确认密码不相同!",key:"confirmPassword"});try{i(!0);const g=await ds(x);g.code===200&&(r(!1),L.success(g.message))}finally{i(!1)}};return e.jsx(Re,{title:"修改密码",open:m,confirmLoading:a,onOk:c,onCancel:()=>r(!1),children:e.jsxs(B,{name:"UpdatePassword",form:o,labelCol:{span:5},wrapperCol:{span:16},onFinish:l,autoComplete:"off",children:[e.jsx(B.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}],children:e.jsx(Me,{placeholder:le})}),e.jsx(B.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}],children:e.jsx(G,{})}),e.jsx(B.Item,{label:"确认密码",name:"confirmPassword",rules:[{required:!0,message:"请输入确认密码!"}],children:e.jsx(G,{})})]})})}function hs(s){const{className:t,list:o}=s,{isPhone:m}=M(),r=a=>{const i=[];if(!(a!=null&&a.length))return[];for(let c=0;c<(a==null?void 0:a.length);c++){const l=a==null?void 0:a[c];i.push({title:l})}return i};return e.jsx(e.Fragment,{children:!m&&e.jsx("div",{className:`${t} flex items-center`,children:e.jsx(we,{items:r(o)})})})}function ps(){const s=T(),t=I(),[,,o]=_(),{clear:m}=te.useAliveController(),{isCollapsed:r,isMaximize:a,username:i,nav:c}=M(),l=h.useRef(null),x=[{key:"password",label:e.jsx("span",{children:"修改密码"}),icon:e.jsx(ze,{className:"mr-1"})},{key:"logout",label:e.jsx("span",{children:"退出登录"}),icon:e.jsx(We,{className:"mr-1"})}],g=p=>{var A;switch(p.key){case"password":(A=l.current)==null||A.open();break;case"logout":d();break}},d=()=>{Pe.confirm({title:"温馨提示",icon:e.jsx(Le,{}),content:"是否确定退出系统?",onOk(){s(Qe()),s(xe()),s(S("")),o(),m(),t("/login")}})},u=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(Ee,{}),e.jsx(pe,{}),e.jsx(Ce,{}),e.jsx(Ie,{}),e.jsx(V,{className:"min-w-50px",menu:{items:x,onClick:g},children:e.jsxs("div",{className:"ant-dropdown-link flex items-center cursor-pointer",onClick:p=>p.preventDefault(),children:[e.jsx("img",{src:ms,width:27,height:27,alt:"头像",className:"rounded-1/2 overflow-hidden object-cover bg-light-500"}),e.jsx("span",{className:"ml-2 text-15px min-w-50px truncate",children:i||"south-admin"})]})})]}),y=()=>e.jsxs("div",{className:"text-lg cursor-pointer",onClick:()=>s(H(!r)),children:[r&&e.jsx(Ke,{}),!r&&e.jsx(Se,{})]});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:`
          border-bottom
          flex
          items-center
          justify-between
          px-6
          py-6px
          box-border
          transition-all
          ${b.headerDriver}
          ${a?b.none:""}
        `,children:[e.jsxs("div",{className:"flex item-center",children:[e.jsx(y,{}),e.jsx(hs,{className:"ml-15px",list:c})]}),e.jsx(u,{})]}),e.jsx(fs,{passwordRef:l})]})}function oe(s){const{activeKey:t,onOpenChange:o,handleRefresh:m}=s,{pathname:r}=W(),{tabs:a,permissions:i}=M(),c=I(),l=T();return[(d=t)=>{const u=a.findIndex(y=>y.key===d);return[{key:"refresh",label:"重新加载",disabled:d!==r,icon:e.jsx(De,{className:"mr-5px transform rotate-270"})},{key:"close_current",label:"关闭标签",disabled:a.length<=1,icon:e.jsx(He,{className:"mr-5px"})},{key:"close_other",label:"关闭其他",disabled:a.length<=1,icon:e.jsx(Ve,{className:"mr-5px transform rotate-90"})},{key:"close_left",label:"关闭左侧",disabled:u===0,icon:e.jsx(Y,{className:"mr-5px transform rotate-270"})},{key:"close_right",label:"关闭右侧",disabled:u===a.length-1,icon:e.jsx(Y,{className:"mr-5px transform rotate-90"})}]},(d,u=t)=>{switch(o==null||o(!1),d){case"refresh":m(u);break;case"close_current":l(ee(u));break;case"close_other":l(je(u));break;case"close_left":if(l(ve(u)),r!==u){const p=K({menus:R,permissions:i,key:u});p!=null&&p.key&&(c(u),l(z(p.nav)))}break;case"close_right":if(l(ge(u)),r!==u){const p=K({menus:R,permissions:i,key:u});p!=null&&p.key&&(c(u),l(z(p.nav)))}break}}]}function xs(s){const{isRefresh:t,onClick:o}=s;return e.jsx(se,{title:"重新加载",placement:"bottom",children:e.jsx(E,{className:`
          change
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          ${t?"animate-spin pointer-events-none":""}
        `,onClick:()=>o(),icon:"ant-design:reload-outlined"})})}function gs(){const s=T(),{isMaximize:t}=M(),o=()=>{s(be(!t))};return e.jsx(se,{title:t?"最小化":"最大化",placement:"bottom",children:e.jsx(E,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
        `,icon:t?"ant-design:compress-outlined":"ant-design:expand-outlined",onClick:o})})}function vs(s){const{activeKey:t,handleRefresh:o}=s,[m,r]=h.useState(!1),a=x=>{r(x)},i={activeKey:t,onOpenChange:a,handleRefresh:o},[c,l]=oe(i);return e.jsx(V,{trigger:["click"],menu:{items:c(),onClick:x=>l(x.key)},onOpenChange:a,children:e.jsx(E,{className:`
          flex
          items-center
          justify-center
          text-lg
          cursor-pointer
          transition-all
          transform
          ${m?"rotate-180":"rotate-0"}
        `,icon:"ant-design:down-outlined"})})}function js(){const s=I(),{pathname:t,search:o}=W(),m=t+o,r=T(),{refresh:a}=te.useAliveController(),[i,c]=h.useState(null),[l,x]=h.useState(null),g=F(f=>f.tabs.isLock),d=F(f=>f.tabs.activeKey),{tabs:u,permissions:y,isMaximize:p}=M(),A=h.useCallback((f=m)=>{if(y.length>0){if(f==="/")return;const k=K({menus:R,permissions:y,key:f});k!=null&&k.key?(r(S(k.key)),r(z(k.nav)),r($(k))):r(S(f))}},[y]);h.useEffect(()=>{A()},[A]),h.useEffect(()=>()=>{i&&(clearTimeout(i),c(null)),l&&(clearTimeout(l),x(null))},[]),h.useEffect(()=>{if(d!==m){const f=g?d:m;A(f),g&&(s(f),r(ye(!1)))}},[d,m]);const w=f=>{s(f)},O=f=>{r(ee(f))},n=(f,P)=>{P==="remove"&&O(f)},j=h.useCallback((f=d)=>{typeof f=="string"&&(i||(r(Q(!0)),a(f),c(setTimeout(()=>{L.success({content:"刷新成功",key:"refresh"}),r(Q(!1)),c(null)},100)),x(setTimeout(()=>{x(null)},1e3))))},[d,i]),v=h.useMemo(()=>e.jsx(xs,{isRefresh:!!l,onClick:j}),[l,j]),C=h.useMemo(()=>e.jsx(vs,{activeKey:d,handleRefresh:j}),[d,j]),N=h.useMemo(()=>e.jsx(gs,{}),[]),X=[{element:v},{element:C},{element:N}],U={activeKey:d,handleRefresh:j},[ae,re]=oe(U),ie=(f,P)=>e.jsx(P,{...f,children:k=>e.jsx(V,{menu:{items:ae(k.key),onClick:ce=>re(ce.key,k.key)},trigger:["contextMenu"],children:e.jsx("div",{className:"mr-3px",children:k})},k.key)});return e.jsxs("div",{className:`
      flex
      items-center
      justify-between
      mx-2
      transition-all
      ${p?b.conMaximize:""}
    `,children:[u.length>0?e.jsx(Te,{hideAdd:!0,className:"w-full h-30px py-0",onChange:w,activeKey:d,type:"editable-card",onEdit:n,items:u,renderTabBar:ie}):e.jsx("span",{}),e.jsx("div",{className:"flex",children:X==null?void 0:X.map((f,P)=>e.jsx("div",{className:`
                ${b.leftDivide}
                change
                divide-solid
                w-36px
                h-36px
                hover:opacity-70
                flex
                place-content-center
                items-center
              `,children:f.element},P))})]})}function Hs(){const s=T(),t=I(),[o]=_(),{pathname:m,search:r}=W(),a=m+r,i=o(),c=ke(),[l,x]=h.useState(!0),{permissions:g,userId:d,isMaximize:u,isCollapsed:y,isPhone:p,isRefresh:A}=M(),w=h.useCallback(async()=>{try{x(!0);const{data:n}=await Fe({refresh_cache:!1}),{user:j,permissions:v}=n,C=qe(v);s(Je(j)),s(Z(C))}catch(n){console.error("获取用户数据失败:",n),Z([])}finally{x(!1)}},[]);h.useEffect(()=>{i||t("/login"),i&&!d&&w()},[w,t,i,d]);const O=Ae(()=>{const n=window.innerWidth<=768;n&&s(H(!0)),s(Ne(n))},{wait:500});return h.useEffect(()=>(window.addEventListener("resize",O.run()),()=>{window.removeEventListener("resize",O.run())}),[]),e.jsxs("div",{id:"layout",children:[e.jsx(us,{}),e.jsxs("div",{className:b.layout_right,children:[e.jsxs("div",{id:"header",className:`
            border-bottom
            transition-all
            ${b.header}
            ${y?b.headerCloseMenu:""}
            ${u?b.headerNone:""}
            ${p?"!left-0 z-999":""}
          `,children:[e.jsx(ps,{}),e.jsx(js,{})]}),e.jsxs("div",{id:"layoutContent",className:`
            overflow-auto
            transition-all
            ${b.con}
            ${u?b.conMaximize:""}
            ${y?b.conCloseMenu:""}
            ${p?"!left-0 !w-full":""}
          `,children:[l&&g.length===0&&e.jsx(Xe,{active:!0,className:"p-30px",paragraph:{rows:10}}),!l&&g.length===0&&e.jsx(Ue,{}),A&&e.jsx("div",{className:`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `,children:e.jsx(E,{className:"text-40px animate-spin",icon:"ri:loader-2-fill"})}),g.length>0&&!A&&e.jsx(Be,{id:a,name:a,children:c})]})]})]})}export{ls as L,Z as a,Hs as b,Ws as c,Fe as g,Ds as l,qe as p,Je as s,Ls as u};
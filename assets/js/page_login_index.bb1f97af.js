import{r as c,j as t}from"./react.402eeaf7.js";import{a as P}from"./react-redux.a23d062c.js";import{T as g,d as v,u as S}from"./components_Business.97a40718.js";import{g as C,p as x,s as j,a as k,L as O,l as _}from"./layouts.81f68454.js";import{u as B}from"./page_content_article.b28bf86b.js";import{u as U,s as A}from"./components_Fullscreen.dc33051e.js";import{c as d,d as u}from"./components_GlobalSearch.04adc41b.js";import{u as R}from"./react-router.6ca0c4e9.js";import{m as q,F as p,I as b,B as D}from"./antd.2a715811.js";import{Z as H,_ as V}from"./@ant-design_icons.27f5aa5e.js";import"./@babel_runtime.d5939a32.js";import"./react-dom.1f6fe482.js";import"./scheduler.765c72db.js";import"./hoist-non-react-statics.a2c7d45a.js";import"./react-is.f75b9dc6.js";import"./use-sync-external-store.68aec48d.js";import"./components_Form.e497ef41.js";import"./components_Dates.ce0ac0d1.js";import"./dayjs.0690ff2e.js";import"./components_Selects.8d89575c.js";import"./components_Transfer.638a9013.js";import"./components_PasswordStrength.4fbe8d0d.js";import"./ahooks.59ab49ed.js";import"./lodash.1f8fe616.js";import"./resize-observer-polyfill.0f9f8adb.js";import"./components_WangEditor.03a42f74.js";import"./@wangeditor_editor.05ad238b.js";import"./@wangeditor_editor-for-react.fcb1f452.js";import"./axios.71a4b307.js";import"./crypto-js.679ed3eb.js";import"./@reduxjs_toolkit.884780f1.js";import"./immer.75da4564.js";import"./redux.b7c8acfc.js";import"./redux-thunk.ef899f4c.js";import"./@iconify_react.233ce0ee.js";import"./react-activation.23049be8.js";import"./szfe-tools.8ada2a91.js";import"./create-react-context.f174d706.js";import"./prop-types.08c7c3df.js";import"./gud.6fcd163f.js";import"./warning.07d0fac9.js";import"./react-node-key.0a3a071a.js";import"./components_DataScreen.a229f6cf.js";import"./components_Theme.1166b8ab.js";import"./components_Modal.4a9be453.js";import"./react-draggable.b9bed26e.js";import"./clsx.3332c473.js";import"./page_403.tsx_index.c5a8cf1e.js";import"./page_all.module.less_used_index.99cf6f97.js";import"./@remix-run_router.c338daa4.js";import"./rc-util.aac9ba6f.js";import"./classnames.e70b85e0.js";import"./rc-resize-observer.9077b9bf.js";import"./rc-motion.81f00164.js";import"./rc-notification.b487e1d0.js";import"./@ant-design_icons-svg.dd025d44.js";import"./@ant-design_colors.ae61a330.js";import"./@ctrl_tinycolor.fb5a5473.js";import"./@ant-design_cssinjs.ca794f33.js";import"./@emotion_hash.8a8e73f6.js";import"./@emotion_unitless.ede54c47.js";import"./stylis.24eb1ffd.js";import"./rc-picker.1fcdb711.js";import"./@rc-component_trigger.34874bdf.js";import"./@rc-component_portal.ad9c281a.js";import"./rc-tabs.c116b048.js";import"./rc-dropdown.dee6e26d.js";import"./rc-menu.72e9c2ec.js";import"./rc-overflow.a002648e.js";import"./rc-select.8faa5867.js";import"./rc-virtual-list.2be15ac8.js";import"./rc-tree.baa00096.js";import"./rc-input-number.673385fb.js";import"./@rc-component_mini-decimal.f4c7fe24.js";import"./rc-drawer.14d0cda4.js";import"./rc-field-form.c8651927.js";import"./async-validator.dee29e8b.js";import"./scroll-into-view-if-needed.5d1e5d87.js";import"./compute-scroll-into-view.620fa8c1.js";import"./rc-dialog.fe508e7f.js";import"./rc-rate.8fcc98e4.js";import"./rc-slider.26ca63b9.js";import"./rc-switch.05e145e6.js";import"./rc-table.68330ded.js";import"./@rc-component_context.e592198d.js";import"./throttle-debounce.87e7e444.js";import"./rc-checkbox.b1de8915.js";import"./rc-pagination.dd514d48.js";import"./rc-input.f0ba2c06.js";import"./rc-textarea.3dfe5a09.js";import"./rc-tree-select.94f88212.js";import"./rc-upload.44f90eb6.js";import"./rc-progress.941068c3.js";import"./rc-tooltip.11007305.js";import"./components_Buttons.72d70265.js";import"./components_Content.6a26484c.js";import"./components_Search.00df5fcf.js";import"./components_Table.240f2427.js";import"./react-resizable.6d898423.js";import"./components_Pagination.752ec5df.js";import"./components_Count.3df16e01.js";import"./components_Bottom.f8da3917.js";function Ar(){B("登录");const n=R(),e=P(),[w,y]=S(),[F,s]=c.useState(!1),[N,T]=q.useMessage(),{permissions:h}=U(),o=localStorage.getItem(g)||"light";c.useEffect(()=>{o||localStorage.setItem(g,"light"),o==="dark"&&(document.body.className="theme-dark"),e(A(o==="dark"?"dark":"light"))},[o]),c.useEffect(()=>{if(w())if(!h.length)E();else{const r=d(u,h);n(r)}},[]);const E=async()=>{try{s(!0);const{data:r}=await C({refresh_cache:!1}),{user:l,permissions:m}=r,a=x(m),i=d(u,a);e(j(l)),e(k(a)),n(i)}finally{s(!1)}},I=async r=>{try{s(!0);const{data:l}=await _(r),{token:m,user:a,permissions:i}=l;if(!(i!=null&&i.length)||!m)return N.error({content:"用户暂无权限登录",key:"permissions"});const f=x(i),M=d(u,f);y(m),e(j(a)),e(k(f)),n(M)}finally{s(!1)}},L=r=>{console.error("错误信息:",r)};return t.jsxs(t.Fragment,{children:[T,t.jsx("div",{className:`
        ${o==="dark"?"bg-black text-white":"bg-light-400"}
        w-screen
        h-screen
        relative
      `,children:t.jsxs("div",{className:`
          w-300px
          h-290px
          p-30px
          rounded-5px
          ${o==="dark"?"bg-black bg-dark-200":"bg-white"}
          box-border
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        `,children:[t.jsxs("div",{className:"pb-30px pt-10px flex items-center justify-center",children:[t.jsx("img",{className:"mr-2 object-contain",width:"30",height:"30",src:O,alt:"LOGO"}),t.jsx("span",{className:"text-xl font-bold tracking-2px",children:"系统登录"})]}),t.jsxs(p,{name:"horizontal_login",autoComplete:"on",onFinish:I,onFinishFailed:L,initialValues:{username:"admin",password:"admin123456"},children:[t.jsx(p.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:t.jsx(b,{"allow-clear":"true",placeholder:"用户名","data-test":"username",autoComplete:"username",addonBefore:t.jsx(H,{className:"change"})})}),t.jsx(p.Item,{name:"password",rules:[{required:!0,message:"请输入密码"},v],children:t.jsx(b.Password,{placeholder:"密码",autoComplete:"current-password",addonBefore:t.jsx(V,{className:"change"})})}),t.jsx(p.Item,{children:t.jsx(D,{type:"primary",htmlType:"submit",className:"w-full mt-5px rounded-5px tracking-2px",loading:F,children:"登录"})})]})]})})]})}export{Ar as default};

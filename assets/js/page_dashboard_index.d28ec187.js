import{r as m,j as r}from"./react.ab566f72.js";import{r as e}from"./components_Business.e86afd58.js";import{s as n}from"./page_dashboard_model.ts.d4c4a16f.js";import{u as l}from"./page_content_article.2e2db743.js";import{B as c}from"./components_Search.d2aa1755.js";import{B as f}from"./components_Content.895e60b0.js";import d from"./page_dashboard_comp_Line.435cc1a8.js";import{B as u}from"./page_dashboard_comp_Bar.4721bd90.js";import x from"./page_dashboard_comp_Block.701d381a.js";import"./@babel_runtime.e68bd868.js";import"./components_Form.27d9c057.js";import"./components_Dates.84372df2.js";import"./antd.48274a52.js";import"./rc-util.1a6f23f3.js";import"./react-is.f75b9dc6.js";import"./react-dom.16493159.js";import"./scheduler.765c72db.js";import"./classnames.8cb16634.js";import"./rc-resize-observer.4edb5df2.js";import"./resize-observer-polyfill.0f9f8adb.js";import"./rc-motion.b9a33c17.js";import"./@ant-design_cssinjs.4f26f57d.js";import"./@emotion_hash.8a8e73f6.js";import"./@emotion_unitless.ede54c47.js";import"./stylis.24eb1ffd.js";import"./@ant-design_icons.91d4d686.js";import"./@ant-design_icons-svg.dd025d44.js";import"./@ant-design_colors.bf657a05.js";import"./@ctrl_tinycolor.e8348ba7.js";import"./rc-picker.55ac6437.js";import"./dayjs.9d1519f5.js";import"./@rc-component_trigger.148cbac2.js";import"./@rc-component_portal.58570fc9.js";import"./rc-tabs.9350ae3c.js";import"./rc-dropdown.e8f2ad94.js";import"./rc-menu.81d150fa.js";import"./rc-overflow.adeec26c.js";import"./rc-trigger.938eb880.js";import"./rc-align.7694a7bd.js";import"./dom-align.529d0cdc.js";import"./rc-select.2d26b536.js";import"./rc-virtual-list.b6f70710.js";import"./rc-tree.c08bf9fa.js";import"./rc-input-number.cc54d532.js";import"./@rc-component_mini-decimal.45fe6f9b.js";import"./rc-drawer.b94ba60d.js";import"./rc-field-form.8a3393bb.js";import"./async-validator.dee29e8b.js";import"./scroll-into-view-if-needed.5d1e5d87.js";import"./compute-scroll-into-view.620fa8c1.js";import"./rc-dialog.415df727.js";import"./rc-notification.c07d1a9a.js";import"./rc-rate.cdd4f09e.js";import"./rc-slider.06af7e3c.js";import"./rc-switch.598a70c2.js";import"./rc-table.3800ec2a.js";import"./@rc-component_context.510d4b9a.js";import"./throttle-debounce.87e7e444.js";import"./rc-checkbox.86dd1e83.js";import"./rc-pagination.1e3b9e19.js";import"./rc-input.b300df81.js";import"./rc-textarea.7eb929f9.js";import"./rc-tree-select.67b07ba5.js";import"./rc-upload.54b89cba.js";import"./rc-progress.9a25a7f4.js";import"./rc-tooltip.de4e5f7f.js";import"./components_Selects.fe4cad6a.js";import"./components_Transfer.ea5c198c.js";import"./components_PasswordStrength.02e78404.js";import"./ahooks.956023c0.js";import"./lodash.eb2487d4.js";import"./components_WangEditor.1101c222.js";import"./@wangeditor_editor.05ad238b.js";import"./@wangeditor_editor-for-react.c2b208fb.js";import"./axios.c63e6c88.js";import"./crypto-js.38a0309c.js";import"./react-redux.78c9a1ec.js";import"./hoist-non-react-statics.a9ac02f4.js";import"./use-sync-external-store.b6f75e5b.js";import"./components_Fullscreen.481a352b.js";import"./@iconify_react.95751c9c.js";import"./@reduxjs_toolkit.b31fae26.js";import"./immer.75da4564.js";import"./redux.653dbeae.js";import"./redux-thunk.ef899f4c.js";import"./layouts.85ff6a98.js";import"./components_GlobalSearch.8bb08a40.js";import"./react-router.e8592fb4.js";import"./@remix-run_router.c338daa4.js";import"./react-activation.d4cbb67c.js";import"./szfe-tools.167c5518.js";import"./create-react-context.764da92b.js";import"./prop-types.08c7c3df.js";import"./gud.01aa418c.js";import"./warning.07d0fac9.js";import"./react-node-key.5d28e406.js";import"./components_DataScreen.5a9ca441.js";import"./components_Theme.1b22f36b.js";import"./components_Modal.5308b120.js";import"./react-draggable.7ed11f7a.js";import"./clsx.46bf6300.js";import"./page_403.tsx_index.83e72398.js";import"./page_all.module.less_used_index.99cf6f97.js";import"./components_Buttons.327385ed.js";import"./components_Table.13bbcbdb.js";import"./react-resizable.95320b3f.js";import"./components_Pagination.7c5a4ae7.js";import"./components_Count.86d84d70.js";import"./components_Bottom.02e118ee.js";import"./echarts.e83bf849.js";import"./tslib.54e39b60.js";import"./zrender.5212c9b9.js";function h(t){return e.get("/dashboard",{params:t})}const s={pay_date:["2022-10-19","2022-10-29"]};function bt(){l("数据展览");const[t,p]=m.useState(!1),i=m.useCallback(async o=>{o.all_pay=o.all_pay?1:void 0;const a={...o};try{p(!0),await h(a)}finally{p(!1)}},[]);return m.useEffect(()=>{i(s)},[i]),r.jsx(f,{isPermission:!0,children:r.jsxs(r.Fragment,{children:[r.jsx(c,{list:n,data:s,isLoading:t,isCreate:!1,handleFinish:i}),r.jsx("div",{className:"py-10px",children:r.jsx(x,{})}),r.jsxs("div",{className:"flex justify-between w-full",children:[r.jsx(d,{}),r.jsx(u,{})]})]})})}export{bt as default};

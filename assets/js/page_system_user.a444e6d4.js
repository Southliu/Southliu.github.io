import{j as n,a as _,F}from"./components_Bottom.f649ec7b.js";import{r as s}from"./react.017637b6.js";import{I as w,S as ue,r as x,A as K,d as me}from"./components_Business.4504c7d5.js";import{O as de}from"./components_Dates.73ee45d7.js";import{u as pe,c as g}from"./page_content_article.6a3255e3.js";import{a as fe}from"./react-redux.dedf6ab1.js";import{U as he,D as ge}from"./components_Buttons.6453ecd4.js";import{s as xe,g as ye}from"./page_system_menu.a666d202.js";import{B as Se}from"./components_Content.6cc24515.js";import{B as Ce}from"./components_Search.8995727e.js";import{B as be}from"./components_Modal.ef1b2b8a.js";import{B as Ie}from"./components_Form.1ef0af4d.js";import{B as Pe}from"./components_Table.6befc622.js";import{B as De}from"./components_Pagination.dce7768e.js";import{l as ke,n as Be,B as N,m as R}from"./antd.b8eb8a06.js";const Te=[{label:"年龄",name:"age",component:"InputNumber"},{label:"名字",name:"keyword",component:"Input"}],we=a=>[{title:"ID",dataIndex:"id",width:400,fixed:"left"},{title:"用户名",dataIndex:"username",width:400,fixed:"left"},{title:"姓名",dataIndex:"real_name",width:400},{title:"角色",dataIndex:"roles_name",width:400},{title:"手机号",dataIndex:"phone",width:400},{title:"状态",dataIndex:"status",width:200,render:o=>n("span",{children:o?"开启":"关闭"})},{title:"操作",dataIndex:"operate",width:200,fixed:"right",render:(o,i)=>a(o,i)}],Re=[{label:"用户名",name:"username",rules:w,component:"Input"},{label:"姓名",name:"real_name",rules:w,component:"Input"},{label:"角色",name:"roles_name",rules:w,component:"Input"},{label:"状态",name:"status",rules:ue,component:"Select",componentProps:{options:de}}];function Ee(a){return x.get("/authority/user/index",{params:a})}function $e(a){return x.get(`/authority/user/${a}`)}function Le(a){return x.post("/authority/user",a)}function Ue(a,o){return x.put(`/authority/user/${a}`,o)}function _e(a){return x.delete(`/authority/user/${a}`)}function Fe(a){const{title:o,isVisible:i,treeData:c,checkedKeys:S,onClose:m,onSubmit:C}=a,[l,b]=s.exports.useState(S);return n(ke,{visible:i,title:o||"权限配置",placement:"right",extra:n(N,{type:"primary",onClick:()=>{C(l)},children:"提交"}),onClose:m,children:n(Be,{checkable:!0,checkedKeys:l,treeData:c,onCheck:k=>{b(k)}})})}const y={page:1,pageSize:20},O={status:1};function Xe(){pe("用户管理");const a=s.exports.useRef(null),o=s.exports.useRef(null),[i,c]=s.exports.useState(!1),[S,m]=s.exports.useState(!1),[C,l]=s.exports.useState(!1),[b,I]=s.exports.useState(K),[P,D]=s.exports.useState(""),[k,E]=s.exports.useState(O),[$,L]=s.exports.useState(y.page),[B,V]=s.exports.useState(y.pageSize),[j,z]=s.exports.useState(0),[v,A]=s.exports.useState([]),[Q,q]=s.exports.useState(""),[M,T]=s.exports.useState(!1),[G,H]=s.exports.useState([]),[J,W]=s.exports.useState([]),p=fe(e=>e.user.permissions),f="/authority/user",u={page:g(`${f}/index`,p),create:g(`${f}/create`,p),update:g(`${f}/update`,p),delete:g(`${f}/delete`,p),permission:g(`${f}/authority`,p)},X=e=>{L(1),h({page:1,pageSize:B,...e})},h=s.exports.useCallback(async e=>{try{c(!0);const{data:{data:t}}=await Ee(e),{items:r,total:d}=t;z(d),A(r)}finally{c(!1)}},[]);s.exports.useEffect(()=>{u.page&&h({...y})},[h,u.page]);const Y=async e=>{try{c(!0);const t={userId:e},{data:r}=await ye(t),{data:{defaultCheckedKeys:d,treeData:le}}=r;q(e),W(le),H(Object.values(d)),T(!0)}finally{c(!1)}},Z=()=>{T(!1)},ee=async e=>{try{c(!0);const t={menuIds:e,userId:Q},{data:r}=await xe(t);R.success(r.message||"授权成功"),T(!1)}finally{c(!1)}},te=()=>{l(!0),I(K),D(""),E(O)},se=async e=>{try{l(!0),I(me(e)),D(e),m(!0);const{data:{data:t}}=await $e(e);E(t)}finally{m(!1)}},ae=()=>{var e;(e=o.current)==null||e.handleSubmit()},re=()=>{l(!1)},U=()=>{var r;const t={...((r=a.current)==null?void 0:r.getFieldsValue())||{},page:$,pageSize:B};h(t)},ne=async e=>{try{m(!0);const t=()=>P?Ue(P,e):Le(e),{data:r}=await t();R.success((r==null?void 0:r.message)||"操作成功"),l(!1),U()}finally{m(!1)}},oe=async e=>{try{c(!0);const{data:t}=await _e(e);(t==null?void 0:t.code)===200&&(R.success((t==null?void 0:t.message)||"删除成功"),U())}finally{c(!1)}},ie=(e,t)=>{var d;L(e),V(t);const r=(d=a.current)==null?void 0:d.getFieldsValue();h({...r,page:e,pageSize:t})},ce=(e,t)=>_(F,{children:[u.permission===!0&&n(N,{className:"mr-2",loading:i,onClick:()=>Y(t.id),children:"权限"}),u.update===!0&&n(he,{className:"mr-5px",isLoading:i,onClick:()=>se(t.id)}),u.delete===!0&&n(ge,{className:"mr-5px",isLoading:i,handleDelete:()=>oe(t.id)})]});return n(Se,{isPermission:u.page,children:_(F,{children:[n(Ce,{formRef:a,list:Te,data:y,isLoading:i,isCreate:u.create,onCreate:te,handleFinish:X}),n(Pe,{loading:i,columns:we(ce),dataSource:v}),n(De,{disabled:i,current:$,pageSize:B,total:j,onChange:ie}),n(be,{title:b,open:C,confirmLoading:S,onOk:ae,onCancel:re,children:n(Ie,{formRef:o,list:Re,data:k,labelCol:{span:6},handleFinish:ne})}),n(Fe,{isVisible:M,treeData:J,checkedKeys:G,onClose:Z,onSubmit:ee})]})})}export{Xe as P};

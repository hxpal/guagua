var p=(v,e,r)=>new Promise((g,t)=>{var a=f=>{try{D(r.next(f))}catch(b){t(b)}},i=f=>{try{D(r.throw(f))}catch(b){t(b)}},D=f=>f.done?g(f.value):Promise.resolve(f.value).then(a,i);D((r=r.apply(v,e)).next())});import{_ as P}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DsJXUzxn.js";import{c as M,_ as A}from"./index-BdvF35nf.js";import{_ as N}from"./Search.vue_vue_type_script_setup_true_lang-BoCXElaV.js";import{g as E}from"./index-B8vqXQhE.js";import{a as h,n as J,u as o,l as Q,I as U,ag as j,m as q,p as z,M as n,Q as s,U as d,V as l,O as H}from"./vue-chunks-ApmF_VrE.js";/* empty css                *//* empty css                  */import"./element-plus-BmqQxCtl.js";import"./Form-D_p7JRAU.js";/* empty css                     *//* empty css               *//* empty css               *//* empty css                    */import"./el-radio-button-B66upebR.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-BMd1kx-D.js";import"./style.css_vue_type_style_index_0_src_true_lang-C7vJ0MHN.js";import"./wang-editor-CANOApoX.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DgseZAml.js";import"./IconPicker-PZ8eWYgt.js";/* empty css                      */import"./IAgree.vue_vue_type_script_setup_true_lang-DTDyKFOi.js";import"./Highlight.vue_vue_type_script_lang-BXlvUSBi.js";import"./useForm-DeuCuIY6.js";import"./useIcon-D-qhIUOz.js";const K=()=>{const v=h(),e=t=>{v.value=t},r=()=>p(void 0,null,function*(){yield J();const t=o(v);return t||console.error("The Search is not registered. Please use the register method to register"),t});return{searchRegister:e,searchMethods:{setProps:(...a)=>p(void 0,[...a],function*(t={}){const i=yield r();i==null||i.setProps(t),t.model&&(i==null||i.setValues(t.model))}),setValues:t=>p(void 0,null,function*(){const a=yield r();a==null||a.setValues(t)}),setSchema:t=>p(void 0,null,function*(){const a=yield r();a==null||a.setSchema(t)}),addSchema:(t,a)=>p(void 0,null,function*(){const i=yield r();i==null||i.addSchema(t,a)}),delSchema:t=>p(void 0,null,function*(){const a=yield r();a==null||a.delSchema(t)}),getFormData:()=>p(void 0,null,function*(){const t=yield r();return t==null?void 0:t.getFormData()})}}},W=Q({__name:"Search",setup(v){const{t:e}=M(),{searchRegister:r,searchMethods:g}=K(),{setSchema:t,setProps:a,setValues:i,getFormData:D}=g,f=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],b=()=>new Promise(m=>{setTimeout(()=>{m(f)},3e3)}),R=U([{field:"field1",label:e("formDemo.input"),component:"Input"},{field:"field2",label:e("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],on:{change:m=>{}}}},{field:"field3",label:e("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:e("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:e("formDemo.timeSelect")},{field:"field8",label:e("formDemo.input"),component:"Input"},{field:"field9",label:e("formDemo.input"),component:"Input"},{field:"field10",label:e("formDemo.input"),component:"Input"},{field:"field11",label:e("formDemo.input"),component:"Input"},{field:"field12",label:e("formDemo.input"),component:"Input"},{field:"field13",label:e("formDemo.input"),component:"Input"},{field:"field14",label:e("formDemo.input"),component:"Input"},{field:"field15",label:e("formDemo.input"),component:"Input"},{field:"field16",label:e("formDemo.input"),component:"Input"},{field:"field17",label:e("formDemo.input"),component:"Input"},{field:"field18",label:e("formDemo.input"),component:"Input"},{field:"field19",label:`${e("formDemo.treeSelect")}`,component:"TreeSelect",optionApi:()=>p(this,null,function*(){return yield b()})}]),$=h(!1),k=m=>{a({isCol:m})},_=h("inline"),x=()=>{_.value=o(_)==="inline"?"bottom":"inline"},C=h("left"),y=m=>{_.value="bottom",C.value=m},T=()=>p(this,null,function*(){const m=yield E();m&&t([{field:"field2",path:"componentProps.options",value:m.data}])}),I=m=>p(this,null,function*(){yield D()}),V=()=>{t([{field:"field3",path:"remove",value:!0}])},B=()=>{t([{field:"field3",path:"remove",value:!1}])},F=()=>{i({field1:"Joy"})},w=h(!1),O=()=>{w.value=!0,setTimeout(()=>{w.value=!1},2e3)},L=h(!1),G=()=>{L.value=!0,setTimeout(()=>{L.value=!1},2e3)};return(m,u)=>{const c=j("BaseButton");return q(),z(H,null,[n(o(P),{title:`${o(e)("searchDemo.search")} ${o(e)("searchDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:s(()=>[n(c,{onClick:u[0]||(u[0]=S=>k(!0))},{default:s(()=>[d(l(o(e)("searchDemo.grid")),1)]),_:1}),n(c,{onClick:u[1]||(u[1]=S=>k(!1))},{default:s(()=>[d(l(o(e)("searchDemo.restore"))+" "+l(o(e)("searchDemo.grid")),1)]),_:1}),n(c,{onClick:x},{default:s(()=>[d(l(o(e)("searchDemo.button"))+" "+l(o(e)("searchDemo.position")),1)]),_:1}),n(c,{onClick:u[2]||(u[2]=S=>y("left"))},{default:s(()=>[d(l(o(e)("searchDemo.bottom"))+" "+l(o(e)("searchDemo.position"))+"-"+l(o(e)("searchDemo.left")),1)]),_:1}),n(c,{onClick:u[3]||(u[3]=S=>y("center"))},{default:s(()=>[d(l(o(e)("searchDemo.bottom"))+" "+l(o(e)("searchDemo.position"))+"-"+l(o(e)("searchDemo.center")),1)]),_:1}),n(c,{onClick:u[4]||(u[4]=S=>y("right"))},{default:s(()=>[d(l(o(e)("searchDemo.bottom"))+" "+l(o(e)("searchDemo.position"))+"-"+l(o(e)("searchDemo.right")),1)]),_:1}),n(c,{onClick:T},{default:s(()=>[d(l(o(e)("formDemo.select"))+" "+l(o(e)("searchDemo.dynamicOptions")),1)]),_:1}),n(c,{onClick:V},{default:s(()=>[d(l(o(e)("searchDemo.deleteRadio")),1)]),_:1}),n(c,{onClick:B},{default:s(()=>[d(l(o(e)("searchDemo.restoreRadio")),1)]),_:1}),n(c,{onClick:F},{default:s(()=>[d(l(o(e)("formDemo.setValue")),1)]),_:1}),n(c,{onClick:O},{default:s(()=>[d(l(o(e)("searchDemo.search"))+" "+l(o(e)("searchDemo.loading")),1)]),_:1}),n(c,{onClick:G},{default:s(()=>[d(l(o(e)("searchDemo.reset"))+" "+l(o(e)("searchDemo.loading")),1)]),_:1})]),_:1},8,["title"]),n(o(P),{title:o(e)("searchDemo.search"),message:o(e)("searchDemo.searchDes")},{default:s(()=>[n(o(N),{schema:R,"is-col":$.value,layout:_.value,"button-position":C.value,"search-loading":w.value,"reset-loading":L.value,"show-expand":"","expand-field":"field6",onSearch:I,onReset:I,onRegister:o(r)},null,8,["schema","is-col","layout","button-position","search-loading","reset-loading","onRegister"])]),_:1},8,["title","message"])],64)}}}),Ie=A(W,[["__scopeId","data-v-f979135c"]]);export{Ie as default};
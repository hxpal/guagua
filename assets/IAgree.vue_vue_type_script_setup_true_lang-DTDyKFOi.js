import"./index-BdvF35nf.js";/* empty css                    */import{_ as d}from"./Highlight.vue_vue_type_script_lang-BXlvUSBi.js";import{l as c,aJ as p,aK as f,e as x,m as k,p as V,M as n,u as r,Q as y,U as C,V as _}from"./vue-chunks-ApmF_VrE.js";import{z as g}from"./element-plus-BmqQxCtl.js";const h={class:"flex items-center"},E=c({__name:"IAgree",props:p({text:{type:String,default:""},link:{type:Array,default:void 0}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=l,s=f(l,"modelValue"),i=x(()=>{var t;return((t=a.link)==null?void 0:t.map(e=>e.text))||[]}),m=t=>{var o;const e=(o=a.link)==null?void 0:o.find(u=>u.text===t);if(e!=null&&e.url){window.open(e.url);return}e!=null&&e.onClick&&e.onClick()};return(t,e)=>(k(),V("div",h,[n(r(g),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o),class:"mr-0px!"},null,8,["modelValue"]),n(r(d),{class:"ml-10px",keys:i.value,onClick:m},{default:y(()=>[C(_(l.text),1)]),_:1},8,["keys"])]))}});export{E as _};
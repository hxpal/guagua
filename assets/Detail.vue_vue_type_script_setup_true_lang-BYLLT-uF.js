import{D as m}from"./Descriptions-BcI_UTLZ.js";import{c as n}from"./index-BdvF35nf.js";/* empty css               */import{l as r}from"./element-plus-BmqQxCtl.js";import{l as i,I as s,M as a,m as p,R as c,u}from"./vue-chunks-ApmF_VrE.js";const g=i({__name:"Detail",props:{currentRow:{type:Object,default:()=>null}},setup(l){const{t:e}=n(),o=s([{field:"title",label:e("exampleDemo.title"),span:24},{field:"author",label:e("exampleDemo.author")},{field:"display_time",label:e("exampleDemo.displayTime")},{field:"importance",label:e("exampleDemo.importance"),slots:{default:t=>a(r,{type:t.importance===1?"success":t.importance===2?"warning":"danger"},{default:()=>[t.importance===1?e("tableDemo.important"):t.importance===2?e("tableDemo.good"):e("tableDemo.commonly")]})}},{field:"pageviews",label:e("exampleDemo.pageviews")},{field:"content",label:e("exampleDemo.content"),span:24,slots:{default:t=>a("div",{innerHTML:t.content},null)}}]);return(t,f)=>(p(),c(u(m),{schema:o,data:l.currentRow||{}},null,8,["schema","data"]))}});export{g as _};
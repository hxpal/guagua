var c=(l,m,o)=>new Promise((i,a)=>{var n=e=>{try{t(o.next(e))}catch(r){a(r)}},u=e=>{try{t(o.throw(e))}catch(r){a(r)}},t=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,u);t((o=o.apply(l,m)).next())});import{_ as d}from"./Detail.vue_vue_type_script_setup_true_lang-BYLLT-uF.js";import{_ as x}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-sE30Zl7O.js";import{c as B}from"./index-BdvF35nf.js";import{l as g,aB as D,aL as k,a as v,ag as w,m as b,R as C,Q as p,M as f,U as R,V as T,u as s}from"./vue-chunks-ApmF_VrE.js";import{c as $}from"./index-S59pQOLl.js";import"./Descriptions-BcI_UTLZ.js";/* empty css                  *//* empty css               */import"./element-plus-BmqQxCtl.js";/* empty css               *//* empty css                */const h=g({__name:"ExampleDetail",setup(l){const{push:m,go:o}=D(),{query:i}=k(),{t:a}=B(),n=v(null);return c(this,null,function*(){const t=yield $(i.id);t&&(n.value=t.data)}),(t,e)=>{const r=w("BaseButton");return b(),C(s(x),{title:s(a)("exampleDemo.detail"),onBack:e[1]||(e[1]=_=>s(m)("/example/example-page"))},{header:p(()=>[f(r,{onClick:e[0]||(e[0]=_=>s(o)(-1))},{default:p(()=>[R(T(s(a)("common.back")),1)]),_:1})]),default:p(()=>[f(d,{"current-row":n.value},null,8,["current-row"])]),_:1},8,["title"])}}});export{h as default};

var f=(_,p,o)=>new Promise((r,m)=>{var c=t=>{try{a(o.next(t))}catch(d){m(d)}},i=t=>{try{a(o.throw(t))}catch(d){m(d)}},a=t=>t.done?r(t.value):Promise.resolve(t.value).then(c,i);a((o=o.apply(_,p)).next())});import{_ as v}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DsJXUzxn.js";import{c as b}from"./index-BdvF35nf.js";import{_ as k}from"./Table.vue_vue_type_script_lang-1Hd7KsCw.js";import{b as C}from"./index-S59pQOLl.js";/* empty css                *//* empty css                   */import{u,k as T}from"./element-plus-BmqQxCtl.js";import{l as y,a as x,m as L,R as B,Q as n,M as l,q as e,V as g,u as s,U as h}from"./vue-chunks-ApmF_VrE.js";/* empty css                *//* empty css                  *//* empty css                        *//* empty css                    *//* empty css               *//* empty css                      *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-radio-button-B66upebR.js";/* empty css                         *//* empty css                  */import"./index-Bqr511hu.js";const D={class:"flex cursor-pointer"},V={class:"pr-16px"},w=["src"],z={class:"mb-12px font-700 font-size-16px"},N={class:"line-clamp-3 font-size-12px"},E={class:"flex justify-center items-center"},I=["onClick"],R=["onClick"],at=y({__name:"CardTable",setup(_){const{t:p}=b(),o=x(!0),r=x([]);(i=>f(this,null,function*(){const a=yield C({pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{o.value=!1});a&&(r.value=a.data.list)}))();const c=i=>{};return(i,a)=>(L(),B(s(v),{title:s(p)("tableDemo.cardTable")},{default:n(()=>[l(s(k),{columns:[],data:r.value,loading:o.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:n(t=>[e("div",D,[e("div",V,[e("img",{src:t.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,w)]),e("div",null,[e("div",z,g(t.name),1),e("div",N,g(t.desc),1)])])]),"content-footer":n(t=>[e("div",E,[e("div",{class:"flex-1 text-center",onClick:()=>c(t)},[l(s(u),{underline:!1},{default:n(()=>[h("操作一")]),_:1})],8,I),l(s(T),{direction:"vertical"}),e("div",{class:"flex-1 text-center",onClick:()=>c(t)},[l(s(u),{underline:!1},{default:n(()=>[h("操作二")]),_:1})],8,R)])]),_:1},8,["data","loading"])]),_:1},8,["title"]))}});export{at as default};
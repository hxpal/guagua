var c=(v,i,o)=>new Promise((m,d)=>{var p=l=>{try{r(o.next(l))}catch(f){d(f)}},g=l=>{try{r(o.throw(l))}catch(f){d(f)}},r=l=>l.done?m(l.value):Promise.resolve(l.value).then(p,g);r((o=o.apply(v,i)).next())});import{P as w,g as b,a as O,b as E}from"./PanelGroup-5O25fxPb.js";import{c as S}from"./index-BdvF35nf.js";/* empty css               *//* empty css                *//* empty css                         */import{p as k,b as D,l as C,_ as h}from"./Echart.vue_vue_type_script_setup_true_lang-cx1i94QA.js";import{p as _,q as y,r as x,s as U,t as u}from"./element-plus-BmqQxCtl.js";import{l as I,a as M,I as A,m as P,p as q,M as t,Q as n,u as s,O as B}from"./vue-chunks-ApmF_VrE.js";import"./CountTo.vue_vue_type_script_setup_true_lang-B37IXzqo.js";import"./echarts-Dz9MjGyW.js";const J=I({__name:"Analysis",setup(v){const{t:i}=S(),o=M(!0),m=A(k),d=()=>c(this,null,function*(){const e=yield b().catch(()=>{});e&&(u(m,"legend.data",e.data.map(a=>i(a.name))),m.series[0].data=e.data.map(a=>({name:i(a.name),value:a.value})))}),p=A(D),g=()=>c(this,null,function*(){const e=yield O().catch(()=>{});e&&(u(p,"xAxis.data",e.data.map(a=>i(a.name))),u(p,"series",[{name:i("analysis.activeQuantity"),data:e.data.map(a=>a.value),type:"bar"}]))}),r=A(C),l=()=>c(this,null,function*(){const e=yield E().catch(()=>{});e&&(u(r,"xAxis.data",e.data.map(a=>i(a.name))),u(r,"series",[{name:i("analysis.estimate"),smooth:!0,type:"line",data:e.data.map(a=>a.estimate),animationDuration:2800,animationEasing:"cubicInOut"},{name:i("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:e.data.map(a=>a.actual),animationDuration:2800,animationEasing:"quadraticOut"}]))});return c(this,null,function*(){yield Promise.all([d(),g(),l()]),o.value=!1}),(e,a)=>(P(),q(B,null,[t(w),t(s(U),{gutter:20,justify:"space-between"},{default:n(()=>[t(s(_),{xl:10,lg:10,md:24,sm:24,xs:24},{default:n(()=>[t(s(y),{shadow:"hover",class:"mb-20px"},{default:n(()=>[t(s(x),{loading:o.value,animated:""},{default:n(()=>[t(s(h),{options:m,height:300},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),t(s(_),{xl:14,lg:14,md:24,sm:24,xs:24},{default:n(()=>[t(s(y),{shadow:"hover",class:"mb-20px"},{default:n(()=>[t(s(x),{loading:o.value,animated:""},{default:n(()=>[t(s(h),{options:p,height:300},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),t(s(_),{span:24},{default:n(()=>[t(s(y),{shadow:"hover",class:"mb-20px"},{default:n(()=>[t(s(x),{loading:o.value,animated:"",rows:4},{default:n(()=>[t(s(h),{options:r,height:350},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64))}});export{J as default};
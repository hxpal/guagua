var L=(t,a,n)=>new Promise((s,i)=>{var m=e=>{try{o(n.next(e))}catch(r){i(r)}},p=e=>{try{o(n.throw(e))}catch(r){i(r)}},o=e=>e.done?s(e.value):Promise.resolve(e.value).then(m,p);o((n=n.apply(t,a)).next())});import{u as x,b as S,_ as E,q as g,s as V,t as C,e as M,v as T,p as y,w as P}from"./index-BdvF35nf.js";import"./Form-D_p7JRAU.js";import{u as w}from"./useIcon-D-qhIUOz.js";import{H as O,I as R,J as j,K as z}from"./element-plus-BmqQxCtl.js";import{l as b,a as A,m as d,R as f,K as v,u as c,e as I,ag as B,Q as u,M as D,p as H,a6 as N,U as $,V as K,O as U}from"./vue-chunks-ApmF_VrE.js";/* empty css                         *//* empty css                  */const _="var(--el-color-black)",q=b({__name:"ThemeSwitch",emits:["change"],setup(t,{emit:a}){const{getPrefixCls:n}=S(),s=a,i=n("theme-switch"),m=w({icon:"vi-emojione-monotone:sun",color:"#fde047"}),p=w({icon:"vi-emojione-monotone:crescent-moon",color:"#fde047"}),o=x(),e=A(o.getIsDark),r=l=>{o.setIsDark(l),s("change",l)};return(l,h)=>(d(),f(c(O),{class:v(c(i)),modelValue:e.value,"onUpdate:modelValue":h[0]||(h[0]=k=>e.value=k),"inline-prompt":"","border-color":_,"inactive-color":_,"active-color":_,"active-icon":c(m),"inactive-icon":c(p),onChange:r},null,8,["class","modelValue","active-icon","inactive-icon"]))}}),ae=E(q,[["__scopeId","data-v-c5407881"]]),F=t=>{const a=M();g.mode==="legacy"?g.global.locale=t:g.global.locale.value=t,a.setCurrentLocale({lang:t}),T(t)},J=()=>({changeLocale:a=>L(void 0,null,function*(){const n=g.global,s=yield V(Object.assign({"../../locales/en.ts":()=>C(()=>import("./en-BUoR8NGc.js"),[]),"../../locales/zh-CN.ts":()=>C(()=>import("./zh-CN-B8aBLgII.js"),[])}),`../../locales/${a}.ts`,4);n.setLocaleMessage(a,s.default),F(a)})}),te=b({__name:"LocaleDropdown",props:{color:y.string.def("")},setup(t){const{getPrefixCls:a}=S(),n=a("locale-dropdown"),s=P(),i=I(()=>s.getLocaleMap),m=I(()=>s.getCurrentLocale),p=o=>{if(o===c(m).lang)return;window.location.reload(),s.setCurrentLocale({lang:o});const{changeLocale:e}=J();e(o)};return(o,e)=>{const r=B("Icon");return d(),f(c(z),{class:v(c(n)),trigger:"click",onCommand:p},{dropdown:u(()=>[D(c(j),null,{default:u(()=>[(d(!0),H(U,null,N(i.value,l=>(d(),f(c(R),{key:l.lang,command:l.lang},{default:u(()=>[$(K(l.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:u(()=>[D(r,{size:18,icon:"vi-ion:language-sharp",class:v(["cursor-pointer !p-0",o.$attrs.class]),color:t.color},null,8,["class","color"])]),_:1},8,["class"])}}});export{ae as T,te as _};
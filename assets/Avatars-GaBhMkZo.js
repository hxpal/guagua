import{_ as f}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DsJXUzxn.js";import{b as y,_ as g,c as x}from"./index-BdvF35nf.js";/* empty css                  */import{ab as c,a2 as b}from"./element-plus-BmqQxCtl.js";import{l as h,e as z,m as s,p as i,O as d,a6 as _,R as l,Q as v,M as p,T as m,u as a,q as k,V as A,W as C,K as B,a as D}from"./vue-chunks-ApmF_VrE.js";/* empty css                */const I=h({__name:"Avatars",props:{size:{type:[String,Number],default:""},max:{type:Number,default:5},data:{type:Array,default:()=>[]},showTooltip:{type:Boolean,default:!0}},setup(t){const{getPrefixCls:n}=y(),u=n("avatars"),o=t,r=z(()=>o.data.slice(0,o.max));return(T,O)=>(s(),i("div",{class:B([a(u),"flex items-center"])},[(s(!0),i(d,null,_(r.value,e=>(s(),i(d,{key:e.url},[t.showTooltip&&e.name?(s(),l(a(b),{key:0,content:e.name,placement:"top"},{default:v(()=>[p(a(c),{size:t.size,src:e.url,class:"relative",style:m({zIndex:r.value.indexOf(e)})},null,8,["size","src","style"])]),_:2},1032,["content"])):(s(),l(a(c),{key:1,size:t.size,src:e.url,class:"relative",style:m({zIndex:r.value.indexOf(e)})},null,8,["size","src","style"]))],64))),128)),t.data.length>t.max?(s(),l(a(c),{key:0,style:m({zIndex:t.data.length})},{default:v(()=>[k("span",null,"+"+A(t.data.length-t.max),1)]),_:1},8,["style"])):C("",!0)],2))}}),N=g(I,[["__scopeId","data-v-54633af2"]]),W=h({__name:"Avatars",setup(t){const{t:n}=x(),u=D([{name:"Lily",url:"https://avatars.githubusercontent.com/u/3459374?v=4"},{name:"Amanda",url:"https://avatars.githubusercontent.com/u/3459375?v=4"},{name:"Daisy",url:"https://avatars.githubusercontent.com/u/3459376?v=4"},{name:"Olivia",url:"https://avatars.githubusercontent.com/u/3459377?v=4"},{name:"Tina",url:"https://avatars.githubusercontent.com/u/3459378?v=4"},{name:"Kitty",url:"https://avatars.githubusercontent.com/u/3459323?v=4"},{name:"Helen",url:"https://avatars.githubusercontent.com/u/3459324?v=4"},{name:"Sophia",url:"https://avatars.githubusercontent.com/u/3459325?v=4"},{name:"Wendy",url:"https://avatars.githubusercontent.com/u/3459326?v=4"}]);return(o,r)=>(s(),l(a(f),{title:a(n)("router.avatars"),message:a(n)("avatarsDemo.title")},{default:v(()=>[p(a(N),{data:u.value},null,8,["data"])]),_:1},8,["title","message"]))}});export{W as default};

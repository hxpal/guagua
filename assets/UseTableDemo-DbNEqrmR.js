var v=(c,x,f)=>new Promise((g,D)=>{var w=m=>{try{p(f.next(m))}catch(u){D(u)}},_=m=>{try{p(f.throw(m))}catch(u){D(u)}},p=m=>m.done?g(m.value):Promise.resolve(m.value).then(w,_);p((f=f.apply(c,x)).next())});import{_ as R}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DsJXUzxn.js";import{i as s,c as G,_ as J}from"./index-BdvF35nf.js";import{_ as K}from"./Table.vue_vue_type_script_lang-1Hd7KsCw.js";import{g as W}from"./index-S59pQOLl.js";/* empty css               */import{u as X}from"./useTable-C3WM7m76.js";import{l as Y}from"./element-plus-BmqQxCtl.js";import{l as Z,I as ee,d as te,M as a,U as i,a as b,m as oe,p as le,Q as r,u as e,V as d,B as E,O as ae,y as ne}from"./vue-chunks-ApmF_VrE.js";/* empty css                *//* empty css                  *//* empty css                        *//* empty css                    *//* empty css                      *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-radio-button-B66upebR.js";/* empty css                         *//* empty css                  */import"./index-Bqr511hu.js";function U(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!ne(c)}const ie=Z({__name:"UseTableDemo",setup(c){const{tableRegister:x,tableMethods:f,tableState:g}=X({fetchDataApi:()=>v(this,null,function*(){const{currentPage:l,pageSize:t}=g,n=yield W({pageIndex:e(l),pageSize:e(t)});return{list:n.data.list,total:n.data.total}})}),{loading:D,dataList:w,total:_,currentPage:p,pageSize:m}=g,{setProps:u,setColumn:y,getElTableExpose:k,addColumn:z,delColumn:N,refresh:H}=f,{t:o}=G(),j=ee([]);te(()=>{setTimeout(()=>{u({columns:[{field:"expand",type:"expand",slots:{default:l=>{const{row:t}=l;return a("div",{class:"ml-30px"},[a("div",null,[o("tableDemo.title"),i("："),t.title]),a("div",null,[o("tableDemo.author"),i("："),t.author]),a("div",null,[o("tableDemo.displayTime"),i("："),t.display_time])])}}},{field:"selection",type:"selection"},{field:"index",label:o("tableDemo.index"),type:"index"},{field:"title",label:o("tableDemo.title")},{field:"author",label:o("tableDemo.author")},{field:"display_time",label:o("tableDemo.displayTime")},{field:"importance",label:o("tableDemo.importance"),formatter:(l,t,n)=>a(Y,{type:n===1?"success":n===2?"warning":"danger"},{default:()=>[o(n===1?"tableDemo.important":n===2?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:o("tableDemo.pageviews")},{field:"action",label:o("tableDemo.action"),slots:{default:l=>{let t;return a(s,{type:"primary",onClick:()=>A(l)},U(t=o("tableDemo.action"))?t:{default:()=>[t]})}}}]})},2e3)});const A=l=>{},$=b(!0),T=l=>{$.value=l},O=l=>{u({reserveIndex:l})},F=l=>{y([{field:"selection",path:"hidden",value:!l}])},I=b(1),B=()=>{y([{field:"title",path:"label",value:`${o("tableDemo.title")}${e(I)}`}]),I.value++},P=l=>{y([{field:"expand",path:"hidden",value:!l}])},M=()=>v(this,null,function*(){const l=yield k();l==null||l.toggleAllSelection()}),S=b(!0),L=()=>{e(S)?(N("action"),S.value=!1):(z({field:"action",label:o("tableDemo.action"),slots:{default:l=>{let t;return a(s,{type:"primary",onClick:()=>A(l)},U(t=o("tableDemo.action"))?t:{default:()=>[t]})}}}),S.value=!0)},C=b(!1),Q=()=>{u({stripe:!e(C)}),C.value=!e(C)},h=b("auto"),V=()=>{e(h)==="auto"?(u({height:300}),h.value=300):(u({height:"auto"}),h.value="auto")},q=()=>v(this,null,function*(){const l=yield k(),t=l==null?void 0:l.getSelectionRows()});return(l,t)=>(oe(),le(ae,null,[a(e(R),{title:`UseTable ${e(o)("tableDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:r(()=>[a(e(s),{onClick:t[0]||(t[0]=n=>T(!0))},{default:r(()=>[i(d(e(o)("tableDemo.show"))+" "+d(e(o)("tableDemo.pagination")),1)]),_:1}),a(e(s),{onClick:t[1]||(t[1]=n=>T(!1))},{default:r(()=>[i(d(e(o)("tableDemo.hidden"))+" "+d(e(o)("tableDemo.pagination")),1)]),_:1}),a(e(s),{onClick:t[2]||(t[2]=n=>O(!0))},{default:r(()=>[i(d(e(o)("tableDemo.reserveIndex")),1)]),_:1}),a(e(s),{onClick:t[3]||(t[3]=n=>O(!1))},{default:r(()=>[i(d(e(o)("tableDemo.restoreIndex")),1)]),_:1}),a(e(s),{onClick:t[4]||(t[4]=n=>F(!0))},{default:r(()=>[i(d(e(o)("tableDemo.showSelections")),1)]),_:1}),a(e(s),{onClick:t[5]||(t[5]=n=>F(!1))},{default:r(()=>[i(d(e(o)("tableDemo.hiddenSelections")),1)]),_:1}),a(e(s),{onClick:B},{default:r(()=>[i(d(e(o)("tableDemo.changeTitle")),1)]),_:1}),a(e(s),{onClick:t[6]||(t[6]=n=>P(!0))},{default:r(()=>[i(d(e(o)("tableDemo.showExpandedRows")),1)]),_:1}),a(e(s),{onClick:t[7]||(t[7]=n=>P(!1))},{default:r(()=>[i(d(e(o)("tableDemo.hiddenExpandedRows")),1)]),_:1}),a(e(s),{onClick:M},{default:r(()=>[i(d(e(o)("tableDemo.selectAllNone")),1)]),_:1}),a(e(s),{onClick:L},{default:r(()=>[i(d(e(o)("tableDemo.delOrAddAction")),1)]),_:1}),a(e(s),{onClick:Q},{default:r(()=>[i(d(e(o)("tableDemo.showOrHiddenStripe")),1)]),_:1}),a(e(s),{onClick:V},{default:r(()=>[i(d(e(o)("tableDemo.fixedHeaderOrAuto")),1)]),_:1}),a(e(s),{onClick:q},{default:r(()=>[i(d(e(o)("tableDemo.getSelections")),1)]),_:1})]),_:1},8,["title"]),a(e(R),{title:`UseTable ${e(o)("tableDemo.example")}`},{default:r(()=>[a(e(K),{pageSize:e(m),"onUpdate:pageSize":t[8]||(t[8]=n=>E(m)?m.value=n:null),currentPage:e(p),"onUpdate:currentPage":t[9]||(t[9]=n=>E(p)?p.value=n:null),showAction:"",showSummary:"","default-expand-all":"",columns:j,"row-key":"id",data:e(w),loading:e(D),pagination:$.value?{total:e(_)}:void 0,onRegister:e(x),onRefresh:e(H)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister","onRefresh"])]),_:1},8,["title"])],64))}}),$e=J(ie,[["__scopeId","data-v-25cad1cb"]]);export{$e as default};
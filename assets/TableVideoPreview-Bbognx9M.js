var c=(p,e,i)=>new Promise((l,o)=>{var n=a=>{try{t(i.next(a))}catch(m){o(m)}},r=a=>{try{t(i.throw(a))}catch(m){o(m)}},t=a=>a.done?l(a.value):Promise.resolve(a.value).then(n,r);t((i=i.apply(p,e)).next())});import{_ as u}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DsJXUzxn.js";import{c as f}from"./index-BdvF35nf.js";import{_}from"./Table.vue_vue_type_script_lang-1Hd7KsCw.js";import{g as b}from"./index-S59pQOLl.js";import{l as v,a as d,m as g,R as w,Q as D,M as h,u as s}from"./vue-chunks-ApmF_VrE.js";/* empty css                *//* empty css                  */import"./element-plus-BmqQxCtl.js";/* empty css                        *//* empty css                    *//* empty css               *//* empty css                      *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-radio-button-B66upebR.js";/* empty css                         *//* empty css                  */import"./index-Bqr511hu.js";const E=v({__name:"TableVideoPreview",setup(p){const{t:e}=f(),i=[{field:"title",label:e("tableDemo.title")},{field:"video_uri",label:e("tableDemo.videoPreview")},{field:"author",label:e("tableDemo.author")},{field:"display_time",label:e("tableDemo.displayTime")},{field:"pageviews",label:e("tableDemo.pageviews")}],l=d(!0),o=d([]);return(r=>c(this,null,function*(){const t=yield b({pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{l.value=!1});t&&(o.value=t.data.list)}))(),(r,t)=>(g(),w(s(u),{title:s(e)("router.PicturePreview")},{default:D(()=>[h(s(_),{columns:i,data:o.value,loading:l.value,"video-preview":["image_uri","video_uri"]},null,8,["data","loading"])]),_:1},8,["title"]))}});export{E as default};

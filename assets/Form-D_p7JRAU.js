var Ee=Object.defineProperty;var w=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var N=(o,t,l)=>t in o?Ee(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,R=(o,t)=>{for(var l in t||(t={}))m.call(t,l)&&N(o,l,t[l]);if(w)for(var l of w(t))ee.call(t,l)&&N(o,l,t[l]);return o};var L=(o,t)=>{var l={};for(var r in o)m.call(o,r)&&t.indexOf(r)<0&&(l[r]=o[r]);if(o!=null&&w)for(var r of w(o))t.indexOf(r)<0&&ee.call(o,r)&&(l[r]=o[r]);return l};var oe=(o,t,l)=>new Promise((r,s)=>{var b=u=>{try{E(l.next(u))}catch(c){s(c)}},f=u=>{try{E(l.throw(u))}catch(c){s(c)}},E=u=>u.done?r(u.value):Promise.resolve(u.value).then(b,f);E((l=l.apply(o,t)).next())});import{M as C,F as h,l as Te,a as x,e as le,d as Oe,u as p,b as Ie,_ as Se,$ as Re,y as Ce,O as Pe}from"./vue-chunks-ApmF_VrE.js";import{c as _e,x as ve,y as re,z as ge,p as O,b as Ae,A as ke,_ as he}from"./index-BdvF35nf.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import{g as De}from"./el-radio-button-B66upebR.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import{I as xe}from"./InputPassword-BMd1kx-D.js";import{_ as ye}from"./style.css_vue_type_style_index_0_src_true_lang-C7vJ0MHN.js";import{_ as Ue}from"./JsonEditor.vue_vue_type_script_setup_true_lang-DgseZAml.js";import{I as Me}from"./IconPicker-PZ8eWYgt.js";import{_ as Be}from"./IAgree.vue_vue_type_script_setup_true_lang-DTDyKFOi.js";import{L as te,M as se,B as Ge,N as we,G as Fe,O as Le,P as Ve,H as Ke,Q as je,R as $e,S as He,T as We,U as Xe,V as ze,k as Je,W as qe,X as Qe,Y as Ye,Z as Ze,_ as y,t as K,w as Ne,v as me,x as eo,y as oo,z as lo,A as ro,$ as to,s as so,p as ao,C as no}from"./element-plus-BmqQxCtl.js";const ae={RadioGroup:te,RadioButton:te,CheckboxGroup:se,CheckboxButton:se,Input:Ge,Autocomplete:we,InputNumber:Fe,Select:Le,Cascader:Ve,Switch:Ke,Slider:je,TimePicker:$e,DatePicker:He,Rate:We,ColorPicker:Xe,Transfer:ze,Divider:Je,TimeSelect:qe,SelectV2:Qe,InputPassword:xe,Editor:ye,TreeSelect:Ye,Upload:Ze,JsonEditor:Ue,IconPicker:Me,IAgree:Be};var i=(o=>(o.RADIO_GROUP="RadioGroup",o.RADIO_BUTTON="RadioButton",o.CHECKBOX_GROUP="CheckboxGroup",o.CHECKBOX_BUTTON="CheckboxButton",o.INPUT="Input",o.AUTOCOMPLETE="Autocomplete",o.INPUT_NUMBER="InputNumber",o.SELECT="Select",o.CASCADER="Cascader",o.SWITCH="Switch",o.SLIDER="Slider",o.TIME_PICKER="TimePicker",o.DATE_PICKER="DatePicker",o.RATE="Rate",o.COLOR_PICKER="ColorPicker",o.TRANSFER="Transfer",o.DIVIDER="Divider",o.TIME_SELECT="TimeSelect",o.SELECT_V2="SelectV2",o.INPUT_PASSWORD="InputPassword",o.EDITOR="Editor",o.TREE_SELECT="TreeSelect",o.UPLOAD="Upload",o.JSON_EDITOR="JsonEditor",o.ICON_PICKER="IconPicker",o.I_AGREE="IAgree",o))(i||{});const{t:F}=_e(),ne=o=>{var r,s;const t=[i.INPUT,i.AUTOCOMPLETE,i.INPUT_NUMBER,i.INPUT_PASSWORD],l=[i.SELECT,i.TIME_PICKER,i.DATE_PICKER,i.TIME_SELECT,i.SELECT_V2];return t.includes(o==null?void 0:o.component)?{placeholder:F("common.inputText")}:l.includes(o==null?void 0:o.component)?["datetimerange","daterange","monthrange","datetimerange","daterange"].includes(((r=o==null?void 0:o.componentProps)==null?void 0:r.type)||((s=o==null?void 0:o.componentProps)==null?void 0:s.isRange))?{startPlaceholder:F("common.startTimeText"),endPlaceholder:F("common.endTimeText"),rangeSeparator:"-"}:{placeholder:F("common.selectText")}:{}},co=(o={})=>R(R({},o.span?{}:{xs:24,sm:12,md:12,lg:12,xl:12}),o),ce=o=>{var s;const t=((s=o==null?void 0:o.componentProps)==null?void 0:s.on)||{},l={};for(const b in t)t[b]&&(l[`on${ge(b)}`]=(...f)=>{t[b](...f)});const r=R(R({clearable:!0},o.componentProps),l);return r.slots&&delete r.slots,r.on&&delete r.on,r},fo=(o={})=>{const t={};for(const l in o)o[l]&&(ve(o[l])?t[re(l)]=(...r)=>{var s;return(s=o[l])==null?void 0:s.call(o,...r)}:t[re(l)]=()=>o[l]);return t},uo=(o,t)=>{const l=R({},t);o.map(r=>{if(r.remove)delete l[r.field];else if(r.component!=="Divider"){const s=y(l,r.field);K(l,r.field,s!==void 0?y(l,r.field):r.value!==void 0?r.value:void 0)}});for(let r=0;r<o.length;r++){const s=o[r].field;!y(l,s)&&y(l,s)!==0&&delete l[s]}return l},po=()=>{const o=l=>{var E,u,c,I;const r=l==null?void 0:l.componentProps,s=(E=r==null?void 0:r.slots)==null?void 0:E.optionGroupDefault,b=(u=r==null?void 0:r.props)==null?void 0:u.label,f=(c=r==null?void 0:r.props)==null?void 0:c.key;return(I=r==null?void 0:r.options)==null?void 0:I.map(d=>{var P;return(P=d==null?void 0:d.options)!=null&&P.length?s?s(d):C(Ne,{label:d[b||"label"],key:d[f||"key"]},{default:()=>{var U;return(U=d==null?void 0:d.options)==null?void 0:U.map(M=>t(l,M))}}):t(l,d)})},t=(l,r)=>{var c,I,d,P;const s=l.componentProps,b=(c=s==null?void 0:s.props)==null?void 0:c.label,f=(I=s==null?void 0:s.props)==null?void 0:I.value,E=(d=s==null?void 0:s.props)==null?void 0:d.key,u=(P=s.slots)==null?void 0:P.optionDefault;return C(me,h(r,{key:r[E||"key"],label:r[b||"label"],value:r[f||"value"]}),{default:()=>u?u(r):void 0})};return{renderSelectOptions:o}},io=()=>({renderRadioOptions:t=>{var E,u,c,I;const l=t==null?void 0:t.componentProps,r=((E=l==null?void 0:l.props)==null?void 0:E.value)||"value",s=((u=l==null?void 0:l.props)==null?void 0:u.label)||"label",b=((c=l==null?void 0:l.props)==null?void 0:c.disabled)||"disabled",f=t.component===i.RADIO_GROUP?eo:oo;return(I=l==null?void 0:l.options)==null?void 0:I.map(d=>{const P=L(d,[]);return C(f,h(P,{disabled:d[b||"disabled"],label:d[s||"label"],value:d[r||"value"]}),null)})}}),bo=()=>({renderCheckboxOptions:t=>{var E,u,c,I;const l=t==null?void 0:t.componentProps,r=((E=l==null?void 0:l.props)==null?void 0:E.value)||"value",s=((u=l==null?void 0:l.props)==null?void 0:u.label)||"label",b=((c=l==null?void 0:l.props)==null?void 0:c.disabled)||"disabled",f=t.component===i.CHECKBOX_GROUP?lo:ro;return(I=l==null?void 0:l.options)==null?void 0:I.map(d=>{const P=L(d,[]);return C(f,h(P,{disabled:d[b||"disabled"],label:d[s||"label"],value:d[r||"value"]}),null)})}});function V(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!Ce(o)}const{renderSelectOptions:Eo}=po(),{renderRadioOptions:To}=io(),{renderCheckboxOptions:Oo}=bo(),{getPrefixCls:Io}=Ae(),So=Io("form"),Ro=Te({name:"Form",props:{schema:{type:Array,default:()=>[]},isCol:O.bool.def(!0),model:{type:Object,default:()=>({})},autoSetPlaceholder:O.bool.def(!0),isCustom:O.bool.def(!1),labelWidth:O.oneOfType([String,Number]).def("auto"),rules:{type:Object,default:()=>({})},labelPosition:O.oneOf(["left","right","top"]).def("right"),labelSuffix:O.string.def(""),hideRequiredAsterisk:O.bool.def(!1),requireAsteriskPosition:O.oneOf(["left","right"]).def("left"),showMessage:O.bool.def(!0),inlineMessage:O.bool.def(!1),statusIcon:O.bool.def(!1),validateOnRuleChange:O.bool.def(!0),size:{type:String,default:void 0},disabled:O.bool.def(!1),scrollToError:O.bool.def(!1),scrollToErrorOffset:O.oneOfType([Boolean,Object]).def(void 0)},emits:["register"],setup(o,{slots:t,expose:l,emit:r}){const s=x(),b=x({}),f=le(()=>{const e=R({},o);return Object.assign(e,p(b)),e}),E=x({}),u=x({}),c=x(o.model);Oe(()=>{var e;r("register",(e=p(s))==null?void 0:e.$parent,p(s))});const I=(e={})=>{c.value=Object.assign(p(c),e)},d=(e={})=>{b.value=Object.assign(p(b),e)},P=e=>{const{schema:a}=p(f),n=ke(a,S=>S.field===e);n>-1&&a.splice(n,1)},U=(e,a)=>{const{schema:n}=p(f);if(a!==void 0){n.splice(a,0,e);return}n.push(e)},M=e=>{const{schema:a}=p(f);for(const n of a)for(const S of e)n.field===S.field&&K(n,S.path,S.value)},de=(e,a)=>oe(this,null,function*(){const n=yield e();M([{field:a.field,path:a.component===i.TREE_SELECT||a.component===i.TRANSFER?"componentProps.data":"componentProps.options",value:n}])}),fe=e=>p(E)[e],ue=e=>p(u)[e],j=(e,a)=>{E.value[a]=e},pe=(e,a)=>{u.value[a]=e};l({setValues:I,formModel:c,setProps:d,delSchema:P,addSchema:U,setSchema:M,getComponentExpose:fe,getFormItemExpose:ue}),Ie(()=>p(f).schema,(e=[])=>{c.value=uo(e,p(c))},{immediate:!0,deep:!0});const ie=()=>{let e;const{isCol:a}=p(f);return a?C(so,{gutter:20},V(e=$())?e:{default:()=>[e]}):$()},$=()=>{const{schema:e=[],isCol:a}=p(f);return e.filter(n=>!n.remove).map(n=>{let S;const B=n.component==="Divider",G=ae.Divider;return B?C(G,R({contentPosition:"left"},n.componentProps),{default:()=>[n==null?void 0:n.label]}):a?C(ao,co(n.colProps),V(S=H(n))?S:{default:()=>[S]}):H(n)})},H=e=>{var n,S,B,G,W,X;e.optionApi&&(!((n=e.componentProps)!=null&&n.options)||!((S=e.componentProps)!=null&&S.options.length))&&de(e.optionApi,e);const a={default:()=>{var g,A,k,z,J;if((A=(g=e==null?void 0:e.formItemProps)==null?void 0:g.slots)!=null&&A.default)return(z=(k=e==null?void 0:e.formItemProps)==null?void 0:k.slots)==null?void 0:z.default(c.value);{const q=ae[e.component],{autoSetPlaceholder:Q}=p(f),_=((J=e==null?void 0:e.componentProps)==null?void 0:J.slots)||{},D=R({},fo(_));return e.component===i.SELECT&&(D.default=_.default?()=>{var T;return _.default(p((T=e==null?void 0:e.componentProps)==null?void 0:T.options))}:()=>Eo(e)),e.component===i.SELECT_V2&&_.default&&(D.default=({item:T})=>_.default(T)),(e.component===i.RADIO_GROUP||e.component===i.RADIO_BUTTON)&&(D.default=_.default?()=>{var T;return _.default(p((T=e==null?void 0:e.componentProps)==null?void 0:T.options))}:()=>To(e)),(e.component===i.CHECKBOX_GROUP||e.component===i.CHECKBOX_BUTTON)&&(D.default=_.default?()=>{var T;return _.default(p((T=e==null?void 0:e.componentProps)==null?void 0:T.options))}:()=>Oo(e)),C(Pe,null,[(()=>{var Y,Z;const T=le({get:()=>y(c.value,e.field),set:v=>{K(c.value,e.field,v)}});return e.component===i.UPLOAD?C(q,h({"file-list":T.value,"onUpdate:file-list":v=>T.value=v,ref:v=>j(v,e.field)},Q&&ne(e),ce(e),{style:((Y=e.componentProps)==null?void 0:Y.style)||{width:"100%"}}),R({},D)):C(q,h({modelValue:T.value,"onUpdate:modelValue":v=>T.value=v,ref:v=>j(v,e.field)},Q&&ne(e),ce(e),{style:((Z=e.componentProps)==null?void 0:Z.style)||{width:"100%"}}),R({},D))})()])}}};return(G=(B=e==null?void 0:e.formItemProps)==null?void 0:B.slots)!=null&&G.label&&(a.label=(...g)=>{var A,k;return(k=(A=e==null?void 0:e.formItemProps)==null?void 0:A.slots)==null?void 0:k.label(...g)}),(X=(W=e==null?void 0:e.formItemProps)==null?void 0:W.slots)!=null&&X.error&&(a.error=(...g)=>{var A,k;return(k=(A=e==null?void 0:e.formItemProps)==null?void 0:A.slots)==null?void 0:k.error(...g)}),Se(C(no,h({ref:g=>pe(g,e.field)},e.formItemProps||{},{prop:e.field,label:e.label||""}),V(a)?a:{default:()=>[a]}),[[Re,!e.hidden]])},be=()=>{const e=["schema","isCol","autoSetPlaceholder","isCustom","model"],a=R({},p(f));for(const n in a)e.indexOf(n)!==-1&&delete a[n];return a};return()=>C(to,h({ref:s},be(),{model:p(f).isCustom?p(f).model:c,class:So,onSubmit:e=>{e.preventDefault()}}),{default:()=>{const{isCustom:e}=p(f);return e?De(t,"default"):ie()}})}}),$o=he(Ro,[["__scopeId","data-v-6f2b9b53"]]);export{$o as F,uo as i};

import{_ as q}from"./nuxt-img.d55336ec.js";import{j as f,o as _,e as d,p as A,i as w,f as e,k as M,a as k,w as z,b as x,l as S,m as C,u as l,F as B,r as T,c as P,q as D,h as I,t as H,s as V}from"./entry.a7f4d8e4.js";import{u as E,a as L}from"./useStrapi.6b9d5af3.js";import{a as j,_ as F}from"./BlogPost.6c9b3d19.js";import{_ as U}from"./logo.ea5b8689.js";const J={},X=t=>(A("data-v-50bbe94c"),t=t(),w(),t),R={id:"newsletter"},Z=X(()=>e("div",{class:"sib-form"},[e("div",{id:"sib-form-container",class:"sib-form-container"},[e("div",{id:"sib-container",class:"sib-container--large sib-container--vertical"},[e("form",{id:"sib-form",method:"POST",action:"https://3a9f4d41.sibforms.com/serve/MUIEABILml20CIoyT1X6peOMMDKSUhnMRMey9uQENiIWgD5KC3gr6OzT294ztWoQgmofNNXLjT7_qeCxPPUNk-bNss-4KgOiE33P6E3X4ALeYcUZno0tZoggz_586xAYVl7xSJU0LX5E-sWhsHp_ojPXmGOek7oLZmvhjovdA1a3e35oXm2AMVZc0bH8PKp1Mki0w2AnrAB3C4Dt"},[e("div",{class:"form-line"},[e("input",{class:"input",maxlength:"200",type:"text",id:"VORNAME",name:"VORNAME",autocomplete:"off",placeholder:"Vorname","data-required":"true",required:""}),e("input",{class:"input",maxlength:"200",type:"text",id:"NACHNAME",name:"NACHNAME",autocomplete:"off",placeholder:"Nachname","data-required":"true",required:""})]),e("div",{class:"form-line"},[e("input",{class:"input",type:"text",id:"EMAIL",name:"EMAIL",autocomplete:"off",placeholder:"E-Mail","data-required":"true",required:""})]),e("div",{class:"form-line"},[e("input",{type:"tel",class:"input",id:"TELEFON",name:"TELEFON",autocomplete:"off",placeholder:"Telefonnummer","data-required":"true",required:""})]),e("div",{class:"form-line"},[e("input",{class:"input",maxlength:"200",type:"text",id:"MEDIUM",name:"MEDIUM",autocomplete:"off",placeholder:"Dein Medium"})]),e("div",{class:"form-line"},[e("label",null,[e("input",{type:"checkbox",class:"input_replaced",value:"1",id:"OPT_IN",name:"OPT_IN"}),e("span",{class:"checkbox"}),e("p",null,[M(" Ich möchte den KKJ23-Newsletter erhalten und akzeptiere die "),e("a",{href:"/datenschutz"},"Datenschutzerklärung"),M(". Der Newsletter kann jederzeit abbestellt werden. ")])])]),e("button",{class:"sib-form-block__button sib-form-block__button-with-loader",form:"sib-form",type:"submit"}," Anmelden "),e("input",{type:"hidden",name:"email_address_check",value:"",class:"input--hidden"}),e("input",{type:"hidden",name:"locale",value:"de"}),e("input",{type:"hidden",name:"html_type",value:"simple"})])])])],-1)),W=[Z];function Q(t,n){return _(),d("div",R,W)}const Y=f(J,[["render",Q],["__scopeId","data-v-50bbe94c"]]),G=""+new URL("kkj.ca3f48a3.svg",import.meta.url).href,O=t=>(A("data-v-16751803"),t=t(),w(),t),ee=O(()=>e("img",{src:G,alt:""},null,-1)),te=["innerHTML"],ne={class:"image-dummy"},oe=O(()=>e("img",{src:j,alt:"rest des intros anzeigen"},null,-1)),se=[oe],ae=k({__name:"Konferenz",async setup(t){let n,c;const{findOne:u}=E(),a=([n,c]=z(()=>L("konferenz",()=>u("konferenz",{populate:"InlineBilder"}))),n=await n,c(),n),o=x(()=>{var s;return((s=a==null?void 0:a.data.value)==null?void 0:s.data.attributes)??null}),r=S(!1);C(()=>{var s,i;o.value&&((i=(s=o.value)==null?void 0:s.Inhalt)==null?void 0:i.search("<hr>"))===-1&&(r.value=!0)});function N(){r.value=!0}const h=x(()=>{var s,i,p,m;return r.value?(i=(s=o.value)==null?void 0:s.Inhalt)==null?void 0:i.replace("<hr>",""):(m=(p=o.value)==null?void 0:p.Inhalt)==null?void 0:m.split("<hr>")[0]});return(s,i)=>{var v,b;const p=q,m=Y;return _(),d("section",null,[ee,e("div",{class:"content",innerHTML:l(h)},null,8,te),e("div",ne,[(_(!0),d(B,null,T((b=(v=l(o))==null?void 0:v.InlineBilder)==null?void 0:b.data,g=>{var y;return _(),P(p,{format:"avif",src:"https://kkj-backend.perspective-daily.de"+((y=g.attributes)==null?void 0:y.url),alt:""},null,8,["src"])}),256))]),l(r)?D("",!0):(_(),d("div",{key:0,class:"showmore",onClick:i[0]||(i[0]=g=>N())},se)),I(m)])}}});const re=f(ae,[["__scopeId","data-v-16751803"]]),_e=["href"],ie=k({__name:"PdfButton",props:{url:{type:String,required:!0},label:{type:String,required:!0}},async setup(t){return(n,c)=>(_(),d("a",{href:t.url},[e("button",null,H(t.label),1)],8,_e))}});const ce=f(ie,[["__scopeId","data-v-4faa4117"]]),le={class:"divided"},de=["innerHTML"],ue=k({__name:"Programm",async setup(t){let n,c;const{findOne:u}=E(),a=([n,c]=z(()=>L("programm",()=>u("programm",{populate:"PDF"}))),n=await n,c(),n),o=x(()=>{var r;return((r=a==null?void 0:a.data.value)==null?void 0:r.data.attributes)??null});return x(()=>"https://kkj-backend.perspective-daily.de"),(r,N)=>{var s,i,p,m,v,b,g,y,K;const h=ce;return _(),d("section",le,[e("div",{class:"content",innerHTML:(s=l(o))==null?void 0:s.Inhalt},null,8,de),(v=(m=(p=(i=l(o))==null?void 0:i.PDF)==null?void 0:p.data)==null?void 0:m.attributes)!=null&&v.url&&((b=l(o))!=null&&b.Button)?(_(),P(h,{key:0,url:(K=(y=(g=l(o).PDF)==null?void 0:g.data)==null?void 0:y.attributes)==null?void 0:K.url,label:l(o).Button},null,8,["url","label"])):D("",!0)])}}});const pe=f(ue,[["__scopeId","data-v-d139ca4e"]]),me={class:"divided"},fe=k({__name:"Blog",async setup(t){let n,c;const{find:u}=E(),a=([n,c]=z(()=>L("blogeintrags",()=>u("blogeintrags",{populate:["Media","InlineBilder"]}))),n=await n,c(),n),o=x(()=>{var r;return((r=a==null?void 0:a.data.value)==null?void 0:r.data.slice(0,5))??[]});return(r,N)=>{const h=F;return _(),d("section",me,[(_(!0),d(B,null,T(l(o),s=>(_(),P(h,{post:s.attributes,id:s.id},null,8,["post","id"]))),256))])}}});const he=f(fe,[["__scopeId","data-v-17735b66"]]),$=t=>(A("data-v-f252124f"),t=t(),w(),t),ve=$(()=>e("div",{class:"logo"},[e("img",{src:U,alt:""})],-1)),be={id:"content"},ge=$(()=>e("div",{id:"konferenz"},[e("div",{class:"label"},[M("Konferenz"),e("br"),M("& Anmeldung")])],-1)),ye=$(()=>e("div",{id:"programm"},[e("div",{class:"label"},"Programm")],-1)),xe=$(()=>e("div",{id:"blog"},[e("div",{class:"label"},"Blog")],-1)),ke=k({__name:"index",setup(t){return V({title:"Konferenz KJ",meta:[{name:"description",content:"Am 6. und 7. Juli findet im taz Haus in Berlin die Konferenz für Konstruktiven Journalismus 2023 statt. Jetzt anmelden!"}]}),(n,c)=>{const u=re,a=pe,o=he;return _(),d(B,null,[ve,e("div",be,[ge,I(u),ye,I(a),xe,I(o)])],64)}}});const we=f(ke,[["__scopeId","data-v-f252124f"]]);export{we as default};

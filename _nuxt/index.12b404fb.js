import{f as x,o as l,e as f,p as T,h as S,i as n,a as O,w as k,b as I,u as h,j as y,t as w,c as A,k as V,l as Z,m as G,q as J,s as Y,v as ee,x as te,y as z,F as E,r as B,z as C,A as ne}from"./entry.7b498f80.js";import{u as P,a as $}from"./useStrapi.21bc3f82.js";import{_ as se,a as ae}from"./BlogPost.c2768f22.js";import{_ as oe}from"./logo.5bbc3df5.js";const re={},ie=e=>(T("data-v-325a1c4e"),e=e(),S(),e),ce={id:"newsletter"},_e=ie(()=>n("div",{class:"sib-form"},[n("div",{id:"sib-form-container",class:"sib-form-container"},[n("div",{id:"sib-container",class:"sib-container--large sib-container--vertical"},[n("form",{id:"sib-form",method:"POST",action:"https://3a9f4d41.sibforms.com/serve/MUIEABILml20CIoyT1X6peOMMDKSUhnMRMey9uQENiIWgD5KC3gr6OzT294ztWoQgmofNNXLjT7_qeCxPPUNk-bNss-4KgOiE33P6E3X4ALeYcUZno0tZoggz_586xAYVl7xSJU0LX5E-sWhsHp_ojPXmGOek7oLZmvhjovdA1a3e35oXm2AMVZc0bH8PKp1Mki0w2AnrAB3C4Dt"},[n("div",{class:"form-line"},[n("input",{class:"input",maxlength:"200",type:"text",id:"VORNAME",name:"VORNAME",autocomplete:"off",placeholder:"Vorname","data-required":"true",required:""}),n("input",{class:"input",maxlength:"200",type:"text",id:"NACHNAME",name:"NACHNAME",autocomplete:"off",placeholder:"Nachname","data-required":"true",required:""})]),n("div",{class:"form-line"},[n("input",{class:"input",type:"text",id:"EMAIL",name:"EMAIL",autocomplete:"off",placeholder:"E-Mail","data-required":"true",required:""})]),n("div",{class:"form-line"},[n("input",{type:"tel",class:"input",id:"TELEFON",name:"TELEFON",autocomplete:"off",placeholder:"Telefonnummer","data-required":"true",required:""})]),n("div",{class:"form-line"},[n("input",{class:"input",maxlength:"200",type:"text",id:"MEDIUM",name:"MEDIUM",autocomplete:"off",placeholder:"Dein Medium"})]),n("div",{class:"form-line"},[n("label",null,[n("input",{type:"checkbox",class:"input_replaced",value:"1",id:"OPT_IN",name:"OPT_IN"}),n("span",{class:"checkbox"}),n("p",null," Ich möchte Ihren Newsletter erhalten und akzeptiere die Datenschutzerklärung. Sie können den Newsletter jederzeit über den Link in unserem Newsletter abbestellen. ")])]),n("button",{class:"sib-form-block__button sib-form-block__button-with-loader",form:"sib-form",type:"submit"}," Anmelden "),n("input",{type:"hidden",name:"email_address_check",value:"",class:"input--hidden"}),n("input",{type:"hidden",name:"locale",value:"de"}),n("input",{type:"hidden",name:"html_type",value:"simple"})])])])],-1)),le=[_e];function ue(e,t){return l(),f("div",ce,le)}const de=x(re,[["render",ue],["__scopeId","data-v-325a1c4e"]]),pe=""+new URL("kkj.ca3f48a3.svg",import.meta.url).href,me=e=>(T("data-v-27e7f657"),e=e(),S(),e),fe=me(()=>n("img",{src:pe,alt:""},null,-1)),he=["innerHTML"],ve=["innerHTML"],be=O({__name:"Konferenz",async setup(e){let t,s;const{findOne:c}=P(),a=([t,s]=k(()=>$("konferenz",()=>c("konferenz"))),t=await t,s(),t),i=I(()=>{var o;return((o=a==null?void 0:a.data.value)==null?void 0:o.data.attributes)??null});return(o,u)=>{var r,m;const d=de;return l(),f("section",null,[fe,n("div",{class:"content",innerHTML:(r=h(i))==null?void 0:r.Inhalt},null,8,he),n("div",{class:"content",innerHTML:(m=h(i))==null?void 0:m.Programm},null,8,ve),y(d)])}}});const ge=x(be,[["__scopeId","data-v-27e7f657"]]),ye=["href"],W=O({__name:"PdfButton",props:{url:{type:String,required:!0},label:{type:String,required:!0}},async setup(e){return(t,s)=>(l(),f("a",{href:e.url},[n("button",null,w(e.label),1)],8,ye))}}),Ie={class:"divided"},xe=["innerHTML"],Oe=O({__name:"Charta",async setup(e){let t,s;const{findOne:c}=P(),a=([t,s]=k(()=>$("charta",()=>c("charta",{populate:"PDF"}))),t=await t,s(),t),i=I(()=>{var o;return((o=a==null?void 0:a.data.value)==null?void 0:o.data.attributes)??null});return I(()=>"https://kkj-backend.perspective-daily.de"),(o,u)=>{var r,m,v,_,p,b,g,M;const d=W;return l(),f("section",Ie,[n("div",{class:"content",innerHTML:(r=h(i))==null?void 0:r.Inhalt},null,8,xe),(p=(_=(v=(m=h(i))==null?void 0:m.PDF)==null?void 0:v.data)==null?void 0:_.attributes)!=null&&p.url?(l(),A(d,{key:0,url:(M=(g=(b=h(i).PDF)==null?void 0:b.data)==null?void 0:g.attributes)==null?void 0:M.url,label:"hier geht es zum PDF"},null,8,["url"])):V("",!0)])}}});const we=x(Oe,[["__scopeId","data-v-6c8d1db6"]]);var H;const R=typeof window<"u",L=()=>{};R&&((H=window==null?void 0:window.navigator)!=null&&H.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ke(e){return typeof e=="function"?e():h(e)}function $e(e){return e}function Ne(e){return Z()?(G(e),!0):!1}function Me(e,t=!0){J()?Y(e):t?e():ee(e)}function F(e){var t;const s=ke(e);return(t=s==null?void 0:s.$el)!=null?t:s}const Pe=R?window:void 0;function Ee(e,t=!1){const s=z(),c=()=>s.value=!!e();return c(),Me(c,t),s}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q="__vueuse_ssr_handlers__";j[q]=j[q]||{};function X(e,t,s={}){const{root:c,rootMargin:a="0px",threshold:i=.1,window:o=Pe}=s,u=Ee(()=>o&&"IntersectionObserver"in o);let d=L;const r=u.value?te(()=>({el:F(e),root:F(c)}),({el:v,root:_})=>{if(d(),!v)return;const p=new IntersectionObserver(t,{root:_,rootMargin:a,threshold:i});p.observe(v),d=()=>{p.disconnect(),d=L}},{immediate:!0,flush:"post"}):L,m=()=>{d(),r()};return Ne(m),{isSupported:u,stop:m}}var K;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(K||(K={}));var Te=Object.defineProperty,Q=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,U=(e,t,s)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Be=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&U(e,s,t[s]);if(Q)for(var s of Q(t))Le.call(t,s)&&U(e,s,t[s]);return e};const Ce={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Be({linear:$e},Ce);const Ae={class:"divided"},ze=["innerHTML"],De=O({__name:"Studie",async setup(e){let t,s;const{findOne:c}=P(),a=([t,s]=k(()=>$("studie",()=>c("studie",{populate:"PDF"}))),t=await t,s(),t),i=I(()=>{var u;return((u=a==null?void 0:a.data.value)==null?void 0:u.data.attributes)??null});I(()=>"https://kkj-backend.perspective-daily.de");const o=z(null);return X(o,([{isIntersecting:u}],d)=>{console.debug("studie",u)}),(u,d)=>{var m,v,_,p,b,g,M,D;const r=W;return l(),f("section",Ae,[n("div",{class:"content",innerHTML:(m=h(i))==null?void 0:m.Inhalt},null,8,ze),(b=(p=(_=(v=h(i))==null?void 0:v.PDF)==null?void 0:_.data)==null?void 0:p.attributes)!=null&&b.url?(l(),A(r,{key:0,url:(D=(M=(g=h(i).PDF)==null?void 0:g.data)==null?void 0:M.attributes)==null?void 0:D.url,label:"hier geht es zum PDF"},null,8,["url"])):V("",!0)])}}});const He=x(De,[["__scopeId","data-v-de9767b8"]]),Fe={class:"divided"},je=O({__name:"Blog",async setup(e){let t,s;const{find:c}=P(),a=([t,s]=k(()=>$("blogeintrags",()=>c("blogeintrags",{populate:["Media","InlineBilder"]}))),t=await t,s(),t),i=I(()=>{var o;return((o=a==null?void 0:a.data.value)==null?void 0:o.data.slice(0,5))??[]});return(o,u)=>{const d=se;return l(),f("section",Fe,[(l(!0),f(E,null,B(h(i),r=>(l(),A(d,{post:r.attributes,id:r.id},null,8,["post","id"]))),256))])}}});const qe=x(je,[["__scopeId","data-v-17735b66"]]),Ke=e=>(T("data-v-b4c66f61"),e=e(),S(),e),Qe={class:"divided"},Ue={class:"members"},Ve={class:"member"},We={class:"name"},Re=Ke(()=>n("br",null,null,-1)),Xe={class:"partners"},Ze={class:"partner"},Ge=O({__name:"Team",async setup(e){let t,s;const c=z(null);X(c,([{isIntersecting:r}],m)=>{console.debug("team",r)});const{find:a}=P(),i=([t,s]=k(()=>$("partners",()=>a("partners",{populate:"Logo"}))),t=await t,s(),t),o=([t,s]=k(()=>$("teammitglieder",()=>a("teammitglieder",{populate:"Bild"}))),t=await t,s(),t),u=I(()=>{var r;return((r=o==null?void 0:o.data.value)==null?void 0:r.data)??[]}),d=I(()=>{var r;return((r=i==null?void 0:i.data.value)==null?void 0:r.data)??[]});return(r,m)=>{const v=ae;return l(),f("section",Qe,[n("div",Ue,[(l(!0),f(E,null,B(h(u),_=>{var p,b,g;return l(),f("div",Ve,[y(v,{modifiers:{resize:"160x160"},src:"https://kkj-backend.perspective-daily.de"+((g=(b=(p=_.attributes.Bild)==null?void 0:p.data)==null?void 0:b.attributes)==null?void 0:g.url),alt:"",width:"160",height:"160"},null,8,["src"]),n("div",We,[C(w(_.attributes.Name)+" ",1),Re,n("span",null,w(_.attributes.Org),1)]),n("div",null,w(_.attributes.Beschreibung),1)])}),256))]),n("div",Xe,[(l(!0),f(E,null,B(h(d),_=>{var p,b,g;return l(),f("div",Ze,[y(v,{modifiers:{w:"200"},src:"https://kkj-backend.perspective-daily.de"+((g=(b=(p=_.attributes.Logo)==null?void 0:p.data)==null?void 0:b.attributes)==null?void 0:g.url),alt:"",width:"200"},null,8,["src"]),n("h4",null,w(_.attributes.Name),1),n("div",null,w(_.attributes.Beschreibung),1)])}),256))])])}}});const Je=x(Ge,[["__scopeId","data-v-b4c66f61"]]),N=e=>(T("data-v-42fa15b7"),e=e(),S(),e),Ye=N(()=>n("div",{class:"logo"},[n("img",{src:oe,alt:""})],-1)),et={id:"content"},tt=N(()=>n("div",{id:"konferenz"},[n("div",{class:"label"},"Konferenz")],-1)),nt=N(()=>n("div",{id:"charta"},[n("div",{class:"label"},"Charta")],-1)),st=N(()=>n("div",{id:"studie"},[n("div",{class:"label"},"Studie")],-1)),at=N(()=>n("div",{id:"blog"},[n("div",{class:"label"},[C("Blog &"),n("br"),C("Newsletter")])],-1)),ot=N(()=>n("div",{id:"team"},[n("div",{class:"label"},"Team")],-1)),rt=O({__name:"index",setup(e){return ne({title:"Konferenz KJ",meta:[{name:"description",content:"My amazing site."}]}),(t,s)=>{const c=ge,a=we,i=He,o=qe,u=Je;return l(),f(E,null,[Ye,n("div",et,[tt,y(c),nt,y(a),st,y(i),at,y(o),ot,y(u)])],64)}}});const ut=x(rt,[["__scopeId","data-v-42fa15b7"]]);export{ut as default};

import{_ as V}from"./nuxt-img.3f585073.js";import{u as z,a as C}from"./useStrapi.37fb084f.js";import{z as M,m as G,A as H,u as g,B as K,C as R,D as $,l as W,a as q,w as E,b as k,e as c,f as n,F as S,r as x,o as d,h as B,k as J,t as p,p as X,i as Y,j as Z}from"./entry.d26f9d3a.js";var T;const F=typeof window<"u",P=()=>{};F&&((T=window==null?void 0:window.navigator)!=null&&T.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ee(e){return typeof e=="function"?e():g(e)}function te(e){return e}function se(e){return K()?(R(e),!0):!1}function ne(e,t=!0){M()?G(e):t?e():H(e)}function Q(e){var t;const s=ee(e);return(t=s==null?void 0:s.$el)!=null?t:s}const ae=F?window:void 0;function re(e,t=!1){const s=W(),f=()=>s.value=!!e();return f(),ne(f,t),s}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j="__vueuse_ssr_handlers__";L[j]=L[j]||{};function oe(e,t,s={}){const{root:f,rootMargin:b="0px",threshold:m=.1,window:h=ae}=s,l=re(()=>h&&"IntersectionObserver"in h);let v=P;const N=l.value?$(()=>({el:Q(e),root:Q(f)}),({el:I,root:a})=>{if(v(),!I)return;const _=new IntersectionObserver(t,{root:a,rootMargin:b,threshold:m});_.observe(I),v=()=>{_.disconnect(),v=P}},{immediate:!0,flush:"post"}):P,O=()=>{v(),N()};return se(O),{isSupported:l,stop:O}}var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ue=Object.defineProperty,U=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,D=(e,t,s)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ce=(e,t)=>{for(var s in t||(t={}))ie.call(t,s)&&D(e,s,t[s]);if(U)for(var s of U(t))le.call(t,s)&&D(e,s,t[s]);return e};const de={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ce({linear:te},de);const w=e=>(X("data-v-a018c5f2"),e=e(),Y(),e),pe=w(()=>n("h1",null,"Das Team",-1)),_e={class:"members"},fe={class:"member"},he={class:"name"},ve=w(()=>n("br",null,null,-1)),be=w(()=>n("h1",null,"Unsere Partner",-1)),me={class:"partners"},ge={class:"partner"},we=w(()=>n("h1",null,"Unser Sponsor",-1)),Oe={class:"partners"},Ie={class:"partner"},ye=w(()=>n("h1",null,"Wir danken für die Unterstützung von",-1)),ke={class:"partners"},Se={class:"partner"},xe=q({__name:"team",async setup(e){let t,s;const f=W(null);oe(f,([{isIntersecting:a}],_)=>{console.debug("team",a)});const{find:b}=z(),m=([t,s]=E(()=>C("teammitglieder",()=>b("teammitglieder",{populate:"Bild",sort:"rank"}))),t=await t,s(),t),h=([t,s]=E(()=>C("partners",()=>b("partners",{populate:"Logo",sort:"rank"}))),t=await t,s(),t),l=([t,s]=E(()=>C("sponsors",()=>b("sponsors",{populate:"Logo",sort:"rank"}))),t=await t,s(),t),v=k(()=>{var a;return((a=m==null?void 0:m.data.value)==null?void 0:a.data)??[]}),N=k(()=>{var a;return((a=h==null?void 0:h.data.value)==null?void 0:a.data)??[]}),O=k(()=>{var a;return((a=l==null?void 0:l.data.value)==null?void 0:a.data.filter(_=>_.attributes.Art==="Sponsor"))??[]}),I=k(()=>{var a;return((a=l==null?void 0:l.data.value)==null?void 0:a.data.filter(_=>_.attributes.Art==="Kooperationspartner"))??[]});return(a,_)=>{const y=V;return d(),c("section",null,[pe,n("div",_e,[(d(!0),c(S,null,x(g(v),r=>{var o,u,i;return d(),c("div",fe,[B(y,{modifiers:{resize:"200x200"},src:"https://kkj-backend.perspective-daily.de"+((i=(u=(o=r.attributes.Bild)==null?void 0:o.data)==null?void 0:u.attributes)==null?void 0:i.url),alt:"",width:"200",height:"200"},null,8,["src"]),n("div",he,[J(p(r.attributes.Name)+" ",1),ve,n("span",null,p(r.attributes.Org),1)]),n("div",null,p(r.attributes.Beschreibung),1)])}),256))]),be,n("div",me,[(d(!0),c(S,null,x(g(N),r=>{var o,u,i;return d(),c("div",ge,[B(y,{modifiers:{w:"200"},src:"https://kkj-backend.perspective-daily.de"+((i=(u=(o=r.attributes.Logo)==null?void 0:o.data)==null?void 0:u.attributes)==null?void 0:i.url),alt:"",width:"200"},null,8,["src"]),n("h4",null,p(r.attributes.Name),1),n("div",null,p(r.attributes.Beschreibung),1)])}),256))]),we,n("div",Oe,[(d(!0),c(S,null,x(g(O),r=>{var o,u,i;return d(),c("div",Ie,[B(y,{modifiers:{w:"200"},src:"https://kkj-backend.perspective-daily.de"+((i=(u=(o=r.attributes.Logo)==null?void 0:o.data)==null?void 0:u.attributes)==null?void 0:i.url),alt:"",width:"200"},null,8,["src"]),n("h4",null,p(r.attributes.Name),1),n("div",null,p(r.attributes.Beschreibung),1)])}),256))]),ye,n("div",ke,[(d(!0),c(S,null,x(g(I),r=>{var o,u,i;return d(),c("div",Se,[B(y,{modifiers:{w:"200"},src:"https://kkj-backend.perspective-daily.de"+((i=(u=(o=r.attributes.Logo)==null?void 0:o.data)==null?void 0:u.attributes)==null?void 0:i.url),alt:"",width:"200"},null,8,["src"]),n("h4",null,p(r.attributes.Name),1),n("div",null,p(r.attributes.Beschreibung),1)])}),256))])])}}});const Ee=Z(xe,[["__scopeId","data-v-a018c5f2"]]);export{Ee as default};

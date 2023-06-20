import{_ as F}from"./nuxt-img.10043a17.js";import{u as U,a as y}from"./useStrapi.38aeda39.js";import{z as V,m as W,A as M,u as w,B as z,C as G,D as H,l as D,a as R,w as x,b as k,e as f,f as o,F as S,r as B,o as m,h as C,k as $,t as v,p as K,i as q,j as J}from"./entry.b0ec17a4.js";var E;const L=typeof window<"u",g=()=>{};L&&((E=window==null?void 0:window.navigator)!=null&&E.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function X(e){return typeof e=="function"?e():w(e)}function Y(e){return e}function Z(e){return z()?(G(e),!0):!1}function ee(e,t=!0){V()?W(e):t?e():M(e)}function N(e){var t;const n=X(e);return(t=n==null?void 0:n.$el)!=null?t:n}const te=L?window:void 0;function ne(e,t=!1){const n=D(),u=()=>n.value=!!e();return u(),ee(u,t),n}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";P[T]=P[T]||{};function se(e,t,n={}){const{root:u,rootMargin:h="0px",threshold:l=.1,window:i=te}=n,O=ne(()=>i&&"IntersectionObserver"in i);let c=g;const s=O.value?H(()=>({el:N(e),root:N(u)}),({el:d,root:a})=>{if(c(),!d)return;const r=new IntersectionObserver(t,{root:a,rootMargin:h,threshold:l});r.observe(d),c=()=>{r.disconnect(),c=g}},{immediate:!0,flush:"post"}):g,b=()=>{c(),s()};return Z(b),{isSupported:O,stop:b}}var Q;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Q||(Q={}));var ae=Object.defineProperty,j=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ue=(e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&A(e,n,t[n]);if(j)for(var n of j(t))re.call(t,n)&&A(e,n,t[n]);return e};const ie={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ue({linear:Y},ie);const I=e=>(K("data-v-9cd9c348"),e=e(),q(),e),ce=I(()=>o("h1",null,"Das Team",-1)),le={class:"members"},de={class:"member"},pe={class:"name"},_e=I(()=>o("br",null,null,-1)),fe=I(()=>o("h1",null,"Unsere Partner",-1)),me={class:"partners"},ve={class:"partner"},he=R({__name:"team",async setup(e){let t,n;const u=D(null);se(u,([{isIntersecting:s}],b)=>{console.debug("team",s)});const{find:h}=U(),l=([t,n]=x(()=>y("partners",()=>h("partners",{populate:"Logo",sort:"rank"}))),t=await t,n(),t),i=([t,n]=x(()=>y("teammitglieder",()=>h("teammitglieder",{populate:"Bild",sort:"rank"}))),t=await t,n(),t),O=k(()=>{var s;return((s=i==null?void 0:i.data.value)==null?void 0:s.data)??[]}),c=k(()=>{var s;return((s=l==null?void 0:l.data.value)==null?void 0:s.data)??[]});return(s,b)=>{const d=F;return m(),f("section",null,[ce,o("div",le,[(m(!0),f(S,null,B(w(O),a=>{var r,p,_;return m(),f("div",de,[C(d,{modifiers:{resize:"200x200"},src:"https://kkj-backend.perspective-daily.de"+((_=(p=(r=a.attributes.Bild)==null?void 0:r.data)==null?void 0:p.attributes)==null?void 0:_.url),alt:"",width:"200",height:"200"},null,8,["src"]),o("div",pe,[$(v(a.attributes.Name)+" ",1),_e,o("span",null,v(a.attributes.Org),1)]),o("div",null,v(a.attributes.Beschreibung),1)])}),256))]),fe,o("div",me,[(m(!0),f(S,null,B(w(c),a=>{var r,p,_;return m(),f("div",ve,[C(d,{modifiers:{w:"200"},src:"https://kkj-backend.perspective-daily.de"+((_=(p=(r=a.attributes.Logo)==null?void 0:r.data)==null?void 0:p.attributes)==null?void 0:_.url),alt:"",width:"200"},null,8,["src"]),o("h4",null,v(a.attributes.Name),1),o("div",null,v(a.attributes.Beschreibung),1)])}),256))])])}}});const we=J(he,[["__scopeId","data-v-9cd9c348"]]);export{we as default};
import{u as o,a as _}from"./useStrapi.f26d7316.js";import{a as u,w as r,b as d,e as p,u as i,o as l,f}from"./entry.c4baac0d.js";const h=["innerHTML"],m=u({__name:"datenschutz",async setup(z){let t,n;const{findOne:s}=o(),e=([t,n]=r(()=>_("datenschutz",()=>s("datenschutz",{populate:"PDF"}))),t=await t,n(),t),c=d(()=>{var a;return((a=e==null?void 0:e.data.value)==null?void 0:a.data.attributes.Inhalt)??""});return(a,x)=>(l(),p("section",{innerHTML:i(c)},null,8,h))}});const w=f(m,[["__scopeId","data-v-9289fe21"]]);export{w as default};

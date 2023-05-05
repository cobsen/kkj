import{C as x,b as l,D as v,a as B,y as p,A as N,s as I,E as $,o as g,e as _,j,G as q,i as h,t as b,F as S,r as k,c as w,u as z,k as A,H as C,p as L,h as P,f as H}from"./entry.0ef2c0e8.js";const M=()=>x().$img,O={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},E=e=>{const s=l(()=>({provider:e.provider,preset:e.preset})),n=l(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=l(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:s,attrs:n,modifiers:i}},F={...O,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},T=B({name:"NuxtImg",props:F,emits:["load"],setup:(e,s)=>{const n=M(),i=E(e),y=p(!1),o=l(()=>n.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:v(e.width),height:v(e.height)}})),d=l(()=>{const t={...i.attrs.value,"data-nuxt-img":""};return e.sizes&&(t.sizes=o.value.sizes,t.srcset=o.value.srcset),t}),r=l(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||y.value)return!1;if(typeof t=="string")return t;const a=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return n(e.src,{...i.modifiers.value,width:a[0],height:a[1],quality:a[2]||50},i.options.value)}),f=l(()=>e.sizes?o.value.src:n(e.src,i.modifiers.value,i.options.value)),u=l(()=>r.value?r.value:f.value);if(e.preload){const t=Object.values(o.value).every(a=>a);N({link:[{rel:"preload",as:"image",...t?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:u.value}}]})}const c=p();return I(()=>{if(r.value){const t=new Image;t.src=f.value,t.onload=a=>{c.value.src=f.value,y.value=!0,s.emit("load",a)}}else c.value.onload=t=>{s.emit("load",t)}}),()=>$("img",{ref:c,key:u.value,src:u.value,...d.value,...s.attrs})}}),V=""+new URL("blog.6b9f0b4d.svg",import.meta.url).href,D=e=>(L("data-v-35b9ca87"),e=e(),P(),e),R={class:"blogpost"},G={class:"date"},U=["innerHTML"],J=D(()=>h("img",{src:V,alt:"rest des blogposts anzeigen"},null,-1)),K=[J],Q={class:"image-dummy"},W=B({__name:"BlogPost",props:{post:{type:Object,required:!0},single:{type:Boolean,default:!1},id:{type:[Number,String],required:!0}},setup(e){const s=e,n=p(!1),i=p(null);I(()=>{var d;(s.single||((d=s.post.Inhalt)==null?void 0:d.search("<hr>"))===-1)&&(n.value=!0)});function y(){n.value=!0}const o=l(()=>{var d,r;return s.single||n.value?(d=s.post.Inhalt)==null?void 0:d.replace("<hr>",""):(r=s.post.Inhalt)==null?void 0:r.split("<hr>")[0]});return(d,r)=>{var c,t;const f=C,u=T;return g(),_("div",R,[j(f,{to:`/nachrichten/${e.id}`},{default:q(()=>[h("h3",null,b(e.post.Titel),1)]),_:1},8,["to"]),h("div",G,b(e.post.datum),1),(g(!0),_(S,null,k((c=e.post.Media)==null?void 0:c.data,a=>{var m;return g(),w(u,{format:"avif",src:"https://kkj-backend.perspective-daily.de"+((m=a.attributes)==null?void 0:m.url),alt:""},null,8,["src"])}),256)),h("div",{ref_key:"$content",ref:i,class:"content",innerHTML:z(o)},null,8,U),z(n)?A("",!0):(g(),_("div",{key:0,class:"showmore",onClick:r[0]||(r[0]=a=>y())},K)),h("div",Q,[(g(!0),_(S,null,k((t=e.post.InlineBilder)==null?void 0:t.data,a=>{var m;return g(),w(u,{format:"avif",src:"https://kkj-backend.perspective-daily.de"+((m=a.attributes)==null?void 0:m.url),alt:""},null,8,["src"])}),256))])])}}});const Y=H(W,[["__scopeId","data-v-35b9ca87"]]);export{Y as _,T as a};

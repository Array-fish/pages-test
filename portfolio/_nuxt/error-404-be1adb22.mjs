import{a as n,j as r,o as c,b as i,f as e,t as o,h as d,w as l,e as p,i as u,p as x,k as _}from"./entry-7bbd1b7e.mjs";const m=t=>(x("data-v-227f42e8"),t=t(),_(),t),f={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},h=m(()=>e("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),g={class:"max-w-520px text-center z-20"},y=["textContent"],b=["textContent"],k={class:"w-full flex items-center justify-center"},v={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"404"},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const s=t;return r({title:`${s.statusCode} - ${s.statusMessage} | ${s.appName}`,script:[],style:[{children:""}]}),(S,w)=>{const a=u;return c(),i("div",f,[h,e("div",g,[e("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:o(t.statusCode)},null,8,y),e("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:o(t.description)},null,8,b),e("div",k,[d(a,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:l(()=>[p(o(t.backHome),1)]),_:1})])])])}}};var N=n(v,[["__scopeId","data-v-227f42e8"]]);export{N as default};

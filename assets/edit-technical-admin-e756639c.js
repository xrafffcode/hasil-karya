import{j as R,R as N,r,S,l as B,n as C,q as l,c as a,Y as _,I as v,Z as E,x as e,s as U}from"./index-a69e0c82.js";import{u as h}from"./technicalAdmin-1e8e9081.js";import{V as i,b as K,a as k}from"./VRow-03344ab6.js";import{V as j}from"./VForm-fb065eef.js";import{V as p}from"./VTextField-03e38bc1.js";import"./VGrid-b0831086.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";const F=U("h2",{class:"mb-0"}," Edit Admin Teknik ",-1),H={__name:"edit-technical-admin",setup(I){const T=R(),{loading:s,error:o}=N(h()),{fetchTechnicalAdmin:A,updateTechnicalAdmin:w}=h(),V=T.params.id,m=r(""),u=r(""),c=r(""),f=r(""),g=r(0),b=async()=>{try{const t=await A(V);m.value=t.code,u.value=t.name,c.value=t.email,g.value=t.is_active===!0?1:0}catch(t){console.error(t)}};S(()=>{b(),document.title="Edit Admin Teknik"});const y=()=>{w({id:V,code:m.value,name:u.value,email:c.value,password:f.value,is_active:g.value})},x=()=>{b()};return(t,d)=>(B(),C(k,null,{default:l(()=>[a(i,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[F,a(_,{to:"/admin/technical-admin",color:"primary"},{default:l(()=>[v(" Kembali ")]),_:1})]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(K,null,{default:l(()=>[a(j,{onSubmit:E(y,["prevent"])},{default:l(()=>[a(k,null,{default:l(()=>[a(i,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=n=>m.value=n),label:"Kode",placeholder:"Kode Admin Teknik","error-messages":e(o)&&e(o).code?[e(o).code]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(i,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=n=>u.value=n),label:"Nama",placeholder:"Nama Admin Teknik","error-messages":e(o)&&e(o).name?[e(o).name]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(i,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:c.value,"onUpdate:modelValue":d[2]||(d[2]=n=>c.value=n),label:"Email",placeholder:"Email Admin Teknik","error-messages":e(o)&&e(o).email?[e(o).email]:[],disabled:"",loading:e(s)},null,8,["modelValue","error-messages","loading"])]),_:1}),a(i,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:f.value,"onUpdate:modelValue":d[3]||(d[3]=n=>f.value=n),label:"Password",placeholder:"Password Admin Teknik","error-messages":e(o)&&e(o).password?[e(o).password]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(i,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[a(_,{type:"submit",loading:e(s),color:"primary"},{default:l(()=>[v(" Simpan ")]),_:1},8,["loading"]),a(_,{type:"reset",color:"secondary",variant:"tonal",onClick:x},{default:l(()=>[v(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{H as default};
import{u as f}from"./vendor-1d98b441.js";import{j as x,P as h,r as u,Q as T,l as N,n as w,q as l,c as a,S as B,I as U,x as e,s as C}from"./index-d8570b98.js";import{V as t,b as K,a as _}from"./VRow-ae8b4a94.js";import{V as R}from"./VForm-c95c40f9.js";import{V as p}from"./VTextField-d53f6a8a.js";import{V as j}from"./VTextarea-c1327748.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";const k=C("h2",{class:"mb-0"}," Vendor ",-1),z={__name:"vendor",setup(A){const g=x(),{loading:d,error:o}=h(f()),{fetchVendor:v}=f(),b=g.params.id,m=u(""),i=u(""),V=u(""),c=u(""),y=async()=>{try{const r=await v(b);m.value=r.code,i.value=r.name,V.value=r.address,c.value=r.phone}catch(r){console.error(r)}};return T(()=>{y(),document.title="Vendor"}),(r,s)=>(N(),w(_,null,{default:l(()=>[a(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[k,a(B,{to:{name:"admin-vendor"},color:"primary"},{default:l(()=>[U(" Kembali ")]),_:1})]),_:1}),a(t,{cols:"12"},{default:l(()=>[a(K,null,{default:l(()=>[a(R,null,{default:l(()=>[a(_,null,{default:l(()=>[a(t,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=n=>m.value=n),label:"Kode",placeholder:"Kode Vendor","error-messages":e(o)&&e(o).code?[e(o).code]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=n=>i.value=n),label:"Nama",placeholder:"Nama Vendor","error-messages":e(o)&&e(o).name?[e(o).name]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"12"},{default:l(()=>[a(j,{modelValue:V.value,"onUpdate:modelValue":s[2]||(s[2]=n=>V.value=n),label:"Alamat",placeholder:"Alamat Vendor","error-messages":e(o)&&e(o).address?[e(o).address]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"12"},{default:l(()=>[a(p,{modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=n=>c.value=n),label:"Telepon",placeholder:"Telepon Vendor","error-messages":e(o)&&e(o).phone?[e(o).phone]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{z as default};
import{u as p}from"./checker-8e08a759.js";import{j as b,P as v,r as n,Q as C,l as y,n as x,q as l,c as a,S as N,I as w,x as e,s as B}from"./index-d8570b98.js";import{V as c,b as K,a as V}from"./VRow-ae8b4a94.js";import{V as R}from"./VForm-c95c40f9.js";import{V as f}from"./VTextField-d53f6a8a.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";const T=B("h2",{class:"mb-0"}," Checker ",-1),M={__name:"checker",setup(U){const _=b(),{loading:r,error:o}=v(p()),{fetchChecker:h}=p(),g=_.params.id,m=n(""),u=n(""),i=n("");n(""),n(0);const k=async()=>{try{const s=await h(g);m.value=s.code,u.value=s.name,i.value=s.email}catch(s){console.error(s)}};return C(()=>{k(),document.title="Checker"}),(s,d)=>(y(),x(V,null,{default:l(()=>[a(c,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[T,a(N,{to:"/admin/checker",color:"primary"},{default:l(()=>[w(" Kembali ")]),_:1})]),_:1}),a(c,{cols:"12"},{default:l(()=>[a(K,null,{default:l(()=>[a(R,null,{default:l(()=>[a(V,null,{default:l(()=>[a(c,{cols:"12",md:"6"},{default:l(()=>[a(f,{modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=t=>m.value=t),label:"Kode",placeholder:"Kode Checker","error-messages":e(o)&&e(o).code?[e(o).code]:[],disabled:e(r),loading:e(r),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(f,{modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=t=>u.value=t),label:"Nama",placeholder:"Nama Client","error-messages":e(o)&&e(o).name?[e(o).name]:[],disabled:e(r),loading:e(r),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(c,{cols:"12",md:"12"},{default:l(()=>[a(f,{modelValue:i.value,"onUpdate:modelValue":d[2]||(d[2]=t=>i.value=t),label:"Email",placeholder:"Email Checker","error-messages":e(o)&&e(o).email?[e(o).email]:[],disabled:e(r),loading:e(r),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{M as default};
import{P as x,r as p,Q as G,X as T,l as y,n as U,q as l,c as e,S as f,I as V,T as h,x as a,A as i,s as N}from"./index-d8570b98.js";import{u as v}from"./gasOperator-497adca5.js";import{V as t,b as R,a as g}from"./VRow-ae8b4a94.js";import{V as S}from"./VForm-c95c40f9.js";import{V as c}from"./VTextField-d53f6a8a.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";const B=N("h2",{class:"mb-0"}," Tambah Gas Operator ",-1),q={__name:"create-gas-operator",setup(C){const{loading:b,error:o}=x(v()),{createGasOperator:O}=v(),d=p("AUTO"),u=p(""),m=p(""),n=p(""),_=()=>{d.value="AUTO",u.value="",m.value="",n.value=""},w=()=>{O({code:d.value,name:u.value,email:m.value,password:n.value,is_active:1})};return G(()=>{document.title="Tambah Gas Operator"}),T(()=>{_(),o.value=null}),(k,s)=>(y(),U(g,null,{default:l(()=>[e(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[B,e(f,{to:"/admin/gas-operator",color:"primary"},{default:l(()=>[V(" Kembali ")]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(R,null,{default:l(()=>[e(S,{onSubmit:h(w,["prevent"])},{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(d),"onUpdate:modelValue":s[0]||(s[0]=r=>i(d)?d.value=r:null),label:"Kode",placeholder:"Kode Gas Operator","error-messages":a(o)&&a(o).code?[a(o).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(u),"onUpdate:modelValue":s[1]||(s[1]=r=>i(u)?u.value=r:null),label:"Nama",placeholder:"Nama Gas Operator","error-messages":a(o)&&a(o).name?[a(o).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(m),"onUpdate:modelValue":s[2]||(s[2]=r=>i(m)?m.value=r:null),label:"Email",placeholder:"Email Gas Operator","error-messages":a(o)&&a(o).email?[a(o).email]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(n),"onUpdate:modelValue":s[3]||(s[3]=r=>i(n)?n.value=r:null),label:"Password",placeholder:"Password Gas Operator","error-messages":a(o)&&a(o).password?[a(o).password]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(f,{type:"submit",loading:a(b),color:"primary"},{default:l(()=>[V(" Simpan ")]),_:1},8,["loading"]),e(f,{color:"secondary",variant:"tonal",onClick:_},{default:l(()=>[V(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{q as default};
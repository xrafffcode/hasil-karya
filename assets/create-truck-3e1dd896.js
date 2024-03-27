import{R as k,r as d,S as C,_ as K,l as w,n as A,q as o,c as l,Y as v,I as _,Z as B,x as e,A as u,s as N}from"./index-a69e0c82.js";import{u as y}from"./truck-8406cd86.js";import{u as T}from"./vendor-e11f4308.js";import{V as s,b as F,a as x}from"./VRow-03344ab6.js";import{V as O}from"./VForm-fb065eef.js";import{V as f}from"./VTextField-03e38bc1.js";import{V as P}from"./VAutocomplete-1e982d1d.js";import"./VGrid-b0831086.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";import"./VSelect-2adf8cee.js";import"./VMenu-97c043ff.js";import"./VDivider-e33b9f13.js";import"./VOverlay-64f59fed.js";import"./VSelectionControl-88f5bb81.js";import"./VChip-707cc8ab.js";const j=N("h2",{class:"mb-0"}," Tambah Truck ",-1),oe={__name:"create-truck",setup(q){const{loading:U,error:a}=k(y()),{createTruck:h}=y(),{vendors:M}=k(T()),{fetchVendors:R}=T();R();const m=d("AUTO"),n=d(""),i=d(""),c=d(""),p=d(""),V=d(),b=d(1),g=()=>{m.value="AUTO",n.value="",i.value="",c.value=0,p.value="",V.value=0,b.value=1},S=()=>{h({code:m.value,brand:n.value,model:i.value,capacity:c.value,production_year:p.value,vendor_id:V.value,is_active:b.value})};return C(()=>{document.title="Tambah Truck"}),K(()=>{g(),a.value=null}),(I,t)=>(w(),A(x,null,{default:o(()=>[l(s,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:o(()=>[j,l(v,{to:"/admin/truck",color:"primary"},{default:o(()=>[_(" Kembali ")]),_:1})]),_:1}),l(s,{cols:"12"},{default:o(()=>[l(F,null,{default:o(()=>[l(O,{onSubmit:B(S,["prevent"])},{default:o(()=>[l(x,null,{default:o(()=>[l(s,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(m),"onUpdate:modelValue":t[0]||(t[0]=r=>u(m)?m.value=r:null),label:"Kode",placeholder:"Kode Checker","error-messages":e(a)&&e(a).code?[e(a).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(n),"onUpdate:modelValue":t[1]||(t[1]=r=>u(n)?n.value=r:null),label:"Merk",placeholder:"Merk","error-messages":e(a)&&e(a).brand?[e(a).brand]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(i),"onUpdate:modelValue":t[2]||(t[2]=r=>u(i)?i.value=r:null),label:"Model",placeholder:"Model","error-messages":e(a)&&e(a).model?[e(a).model]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(p),"onUpdate:modelValue":t[3]||(t[3]=r=>u(p)?p.value=r:null),label:"Tahun Produksi",placeholder:"Tahun Produksi","error-messages":e(a)&&e(a).production_year?[e(a).production_year]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(P,{modelValue:e(V),"onUpdate:modelValue":t[4]||(t[4]=r=>u(V)?V.value=r:null),items:e(M),"item-title":r=>r.name,"item-value":r=>r.id,label:"Vendor",placeholder:"Vendor","error-messages":e(a)&&e(a).vendor_id?[e(a).vendor_id]:[]},null,8,["modelValue","items","item-title","item-value","error-messages"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(c),"onUpdate:modelValue":t[5]||(t[5]=r=>u(c)?c.value=r:null),label:"Kapasitas/m³",placeholder:"Kapasitas/m³","error-messages":e(a)&&e(a).capacity?[e(a).capacity]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(s,{cols:"12",class:"d-flex gap-4"},{default:o(()=>[l(v,{type:"submit",loading:e(U),color:"primary"},{default:o(()=>[_(" Simpan ")]),_:1},8,["loading"]),l(v,{color:"secondary",variant:"tonal",onClick:g},{default:o(()=>[_(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{oe as default};

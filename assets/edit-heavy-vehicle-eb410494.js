import{j as A,R as g,r as u,S as K,l as N,n as j,q as l,c as e,Y as V,I as f,Z as E,x as a,s as F}from"./index-a69e0c82.js";import{u as x}from"./heavyVehicle-a28caf3e.js";import{u as k}from"./vendor-e11f4308.js";import{V as d,b as I,a as B}from"./VRow-03344ab6.js";import{V as P}from"./VForm-fb065eef.js";import{V as v}from"./VTextField-03e38bc1.js";import{V as q}from"./VAutocomplete-1e982d1d.js";import"./VGrid-b0831086.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";import"./VSelect-2adf8cee.js";import"./VMenu-97c043ff.js";import"./VDivider-e33b9f13.js";import"./VOverlay-64f59fed.js";import"./VSelectionControl-88f5bb81.js";import"./VChip-707cc8ab.js";const D=F("h2",{class:"mb-0"}," Edit Alat Berat ",-1),se={__name:"edit-heavy-vehicle",setup(O){const M=A(),{loading:R,error:o}=g(x()),{fetchHeavyVehicle:S,updateHeavyVehicle:T}=x(),{vendors:U}=g(k()),{fetchVendors:w}=k();w();const _=M.params.id,n=u("AUTO"),i=u(""),m=u(""),y=u(0),c=u(""),p=u(),h=u(1),b=async()=>{try{const r=await S(_);n.value=r.code,i.value=r.brand,m.value=r.model,y.value=r.capacity,c.value=r.production_year,p.value=r.vendor.id,h.value=r.is_active===!0?1:0}catch(r){console.error(r)}};K(()=>{b(),document.title="Edit Alat Berat"});const C=()=>{T({id:_,code:n.value,brand:i.value,model:m.value,capacity:y.value,production_year:c.value,vendor_id:p.value,is_active:h.value})},H=()=>{b()};return(r,s)=>(N(),j(B,null,{default:l(()=>[e(d,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[D,e(V,{to:{name:"admin-heavy-vehicle"},color:"primary"},{default:l(()=>[f(" Kembali ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(I,null,{default:l(()=>[e(P,{onSubmit:E(C,["prevent"])},{default:l(()=>[e(B,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t),label:"Kode",placeholder:"Kode Checker","error-messages":a(o)&&a(o).code?[a(o).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=t=>i.value=t),label:"Merk",placeholder:"Merk","error-messages":a(o)&&a(o).brand?[a(o).brand]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=t=>m.value=t),label:"Model",placeholder:"Model","error-messages":a(o)&&a(o).model?[a(o).model]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=t=>c.value=t),label:"Tahun Produksi",placeholder:"Tahun Produksi","error-messages":a(o)&&a(o).production_year?[a(o).production_year]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"12"},{default:l(()=>[e(q,{modelValue:p.value,"onUpdate:modelValue":s[4]||(s[4]=t=>p.value=t),items:a(U),"item-title":t=>t.name,"item-value":t=>t.id,label:"Vendor",placeholder:"Vendor","error-messages":a(o)&&a(o).vendor_id?[a(o).vendor_id]:[]},null,8,["modelValue","items","item-title","item-value","error-messages"])]),_:1}),e(d,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(V,{type:"submit",loading:a(R),color:"primary"},{default:l(()=>[f(" Simpan ")]),_:1},8,["loading"]),e(V,{color:"secondary",variant:"tonal",onClick:H},{default:l(()=>[f(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{se as default};
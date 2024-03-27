import{j as O,R as I,r as u,S as Q,w as S,l as W,n as X,q as i,c as t,Y as T,I as B,Z as $,x as e,s as ee}from"./index-a69e0c82.js";import{u as M}from"./client-5537c3a9.js";import{u as q}from"./region-7f4b6c0d.js";import{V as r,b as ae,a as Y}from"./VRow-03344ab6.js";import{V as le}from"./VForm-fb065eef.js";import{V as K}from"./VTextField-03e38bc1.js";import{V as w}from"./VAutocomplete-1e982d1d.js";import{V as te}from"./VTextarea-d6921a11.js";import"./VGrid-b0831086.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";import"./VSelect-2adf8cee.js";import"./VMenu-97c043ff.js";import"./VDivider-e33b9f13.js";import"./VOverlay-64f59fed.js";import"./VSelectionControl-88f5bb81.js";import"./VChip-707cc8ab.js";const se=ee("h2",{class:"mb-0"}," Edit Client ",-1),Ke={__name:"edit-client",setup(oe){const Z=O(),{loading:o,error:l}=I(M()),{fetchClient:z,updateClient:G}=M(),{provinces:x,regencies:N,districts:U,subdistricts:R}=I(q()),{fetchProvinces:H,fetchRegencies:D,fetchDistricts:E,fetchSubdistricts:k}=q(),A=Z.params.id,f=u(""),b=u(""),v=u(null),p=u(null),g=u(null),V=u(null),_=u(""),y=u(""),C=u(""),P=async()=>{var n,s,a,h;try{const d=await z(A);f.value=d.code,b.value=d.name,v.value=(n=x.value.find(m=>m.nama===d.province))==null?void 0:n.id,await D(v.value),p.value=(s=N.value.find(m=>m.nama===d.regency))==null?void 0:s.id,await E(p.value),g.value=(a=U.value.find(m=>m.nama===d.district))==null?void 0:a.id,await k(g.value),V.value=(h=R.value.find(m=>m.nama===d.subdistrict))==null?void 0:h.id,_.value=d.address,y.value=d.phone,C.value=d.email}catch(d){console.error(d)}};Q(()=>{P(),document.title="Edit Client"});const J=()=>{var d,m,j,F;const n=(d=x.value.find(c=>c.id===v.value))==null?void 0:d.nama,s=(m=N.value.find(c=>c.id===p.value))==null?void 0:m.nama,a=(j=U.value.find(c=>c.id===g.value))==null?void 0:j.nama,h=(F=R.value.find(c=>c.id===V.value))==null?void 0:F.nama;G({id:A,code:f.value,name:b.value,province:n,regency:s,district:a,subdistrict:h,address:_.value,phone:y.value,email:C.value})};H(),S(v,n=>{D(n)}),S(p,n=>{E(n)}),S(g,n=>{k(n)});const L=()=>{P()};return(n,s)=>(W(),X(Y,null,{default:i(()=>[t(r,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:i(()=>[se,t(T,{to:{name:"admin-client"},color:"primary"},{default:i(()=>[B(" Kembali ")]),_:1})]),_:1}),t(r,{cols:"12"},{default:i(()=>[t(ae,null,{default:i(()=>[t(le,{onSubmit:$(J,["prevent"])},{default:i(()=>[t(Y,null,{default:i(()=>[t(r,{cols:"12",md:"6"},{default:i(()=>[t(K,{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=a=>f.value=a),label:"Kode",placeholder:"Kode Client","error-messages":e(l)&&e(l).code?[e(l).code]:[],disabled:e(o),loading:e(o)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"6"},{default:i(()=>[t(K,{modelValue:b.value,"onUpdate:modelValue":s[1]||(s[1]=a=>b.value=a),label:"Nama",placeholder:"Nama Client","error-messages":e(l)&&e(l).name?[e(l).name]:[],disabled:e(o),loading:e(o)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"6"},{default:i(()=>[t(w,{modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=a=>v.value=a),label:"Provinsi",items:e(x),"item-title":a=>a.nama,"item-value":a=>a.id,placeholder:"Provinsi","error-messages":e(l)&&e(l).province?[e(l).province]:[],disabled:e(o),loading:e(o),clearable:""},null,8,["modelValue","items","item-title","item-value","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"6"},{default:i(()=>[t(w,{modelValue:p.value,"onUpdate:modelValue":s[3]||(s[3]=a=>p.value=a),label:"Kabupaten/Kota",items:e(N),"item-title":a=>a.nama,"item-value":a=>a.id,placeholder:"Kabupaten/Kota","error-messages":e(l)&&e(l).regency?[e(l).regency]:[],disabled:e(o),loading:e(o),clearable:""},null,8,["modelValue","items","item-title","item-value","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"6"},{default:i(()=>[t(w,{modelValue:g.value,"onUpdate:modelValue":s[4]||(s[4]=a=>g.value=a),label:"Kecamatan",items:e(U),"item-title":a=>a.nama,"item-value":a=>a.id,placeholder:"Kecamatan","error-messages":e(l)&&e(l).district?[e(l).district]:[],disabled:e(o),loading:e(o),clearable:""},null,8,["modelValue","items","item-title","item-value","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"6"},{default:i(()=>[t(w,{modelValue:V.value,"onUpdate:modelValue":s[5]||(s[5]=a=>V.value=a),label:"Kelurahan/Desa",items:e(R),"item-title":a=>a.nama,"item-value":a=>a.id,placeholder:"Kelurahan/Desa","error-messages":e(l)&&e(l).subdistrict?[e(l).subdistrict]:[],disabled:e(o),loading:e(o),clearable:""},null,8,["modelValue","items","item-title","item-value","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"12"},{default:i(()=>[t(e(te),{modelValue:_.value,"onUpdate:modelValue":s[6]||(s[6]=a=>_.value=a),label:"Alamat",placeholder:"Alamat Client","error-messages":e(l)&&e(l).address?[e(l).address]:[],disabled:e(o),loading:e(o)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"6"},{default:i(()=>[t(K,{modelValue:y.value,"onUpdate:modelValue":s[7]||(s[7]=a=>y.value=a),label:"Telepon",placeholder:"Telepon Client","error-messages":e(l)&&e(l).phone?[e(l).phone]:[],disabled:e(o),loading:e(o)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",md:"6"},{default:i(()=>[t(K,{modelValue:C.value,"onUpdate:modelValue":s[8]||(s[8]=a=>C.value=a),label:"Email",placeholder:"Email Client","error-messages":e(l)&&e(l).email?[e(l).email]:[],disabled:e(o),loading:e(o)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),t(r,{cols:"12",class:"d-flex gap-4"},{default:i(()=>[t(T,{type:"submit",loading:e(o),color:"primary"},{default:i(()=>[B(" Simpan ")]),_:1},8,["loading"]),t(T,{type:"reset",color:"secondary",variant:"tonal",onClick:L},{default:i(()=>[B(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Ke as default};
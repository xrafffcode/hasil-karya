import{R as h,r as u,S as x,_ as R,l as y,n as T,q as a,c as e,Y as d,I as c,Z as j,x as l,A as p,s as k}from"./index-a69e0c82.js";import{u as b}from"./notificationRecepient-ffe8bc1a.js";import{V as n,b as S,a as V}from"./VRow-03344ab6.js";import{V as w}from"./VForm-fb065eef.js";import{V as f}from"./VTextField-03e38bc1.js";import"./VGrid-b0831086.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";const B=k("h2",{class:"mb-0"}," Tambah Penerima Notifikasi ",-1),Y={__name:"create-notification-recepient",setup(C){const{loading:v,error:o}=h(b()),{createRecepient:g}=b(),s=u(""),r=u(""),i=u(""),_=()=>{s.value="",r.value="",i.value=""},N=()=>{g({name:s.value,phone_number:r.value,job_title:i.value,is_active:1})};return x(()=>{document.title="Tambah Penerima Notifikasi"}),R(()=>{_(),o.value=null}),(U,t)=>(y(),T(V,null,{default:a(()=>[e(n,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[B,e(d,{to:"/admin/notification-recepient",color:"primary"},{default:a(()=>[c(" Kembali ")]),_:1})]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(S,null,{default:a(()=>[e(w,{onSubmit:j(N,["prevent"])},{default:a(()=>[e(V,null,{default:a(()=>[e(n,{cols:"12",md:"6"},{default:a(()=>[e(f,{modelValue:l(s),"onUpdate:modelValue":t[0]||(t[0]=m=>p(s)?s.value=m:null),label:"Nama",placeholder:"Nama Penerima","error-messages":l(o)&&l(o).name?[l(o).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(f,{modelValue:l(r),"onUpdate:modelValue":t[1]||(t[1]=m=>p(r)?r.value=m:null),label:"Nomor Telepon",placeholder:"Nomor Telepon","error-messages":l(o)&&l(o).phone_number?[l(o).phone_number]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",md:"12"},{default:a(()=>[e(f,{modelValue:l(i),"onUpdate:modelValue":t[2]||(t[2]=m=>p(i)?i.value=m:null),label:"Jabatan",placeholder:"Jabatan","error-messages":l(o)&&l(o).job_title?[l(o).job_title]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[e(d,{type:"submit",loading:l(v),color:"primary"},{default:a(()=>[c(" Simpan ")]),_:1},8,["loading"]),e(d,{color:"secondary",variant:"tonal",onClick:_},{default:a(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Y as default};

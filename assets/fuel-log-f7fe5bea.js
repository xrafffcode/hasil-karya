import{u as T}from"./fuelLog-8188d5dc.js";import{j as F,P as w,r as u,Q as A,l as i,n as v,q as s,c as r,s as C,v as h,S as H,I as N,x as a,O as p}from"./index-d8570b98.js";import{V as t,b as D,a as x}from"./VRow-ae8b4a94.js";import{V as P}from"./VForm-c95c40f9.js";import{V as d}from"./VTextField-d53f6a8a.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";const R={class:"mb-0"},X={__name:"fuel-log",setup(j){const K=F(),{loading:I,error:l}=w(T()),{fetchFuelLog:L}=T(),M=K.params.id,V=u("AUTO"),g=u(""),m=u(""),n=u(""),c=u(""),f=u(""),_=u(""),S=u("diesel"),y=u(""),b=u(""),k=u(""),U=u(""),O=async()=>{var B,o;try{const e=await L(M);V.value=e.code,g.value=e.date,m.value=(B=e.truck)==null?void 0:B.brand,n.value=(o=e.heavy_vehicle)==null?void 0:o.brand,c.value=e.driver.name,f.value=e.station.name,_.value=e.gas_operator.name,S.value=e.fuel_type,y.value=e.volume*1,b.value=e.odometer*1,k.value=e.hourmeter*1,U.value=e.remarks}catch(e){console.error(e)}};return A(()=>{O(),document.title="Pencatatan BBM Kendaraan"}),(B,o)=>(i(),v(x,null,{default:s(()=>[r(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:s(()=>[C("h2",R," Detail Pengisian BBM "+h(m.value?"( Truk )":"")+" "+h(n.value?"( Alat Berat )":""),1),r(H,{to:"/admin/fuel-log",color:"primary"},{default:s(()=>[N(" Kembali ")]),_:1})]),_:1}),r(t,{cols:"12"},{default:s(()=>[r(D,null,{default:s(()=>[r(P,null,{default:s(()=>[r(x,null,{default:s(()=>[r(t,{cols:"12",md:"6"},{default:s(()=>[r(d,{modelValue:V.value,"onUpdate:modelValue":o[0]||(o[0]=e=>V.value=e),label:"Kode",placeholder:"Kode","error-messages":a(l)&&a(l).code?[a(l).code]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),r(t,{cols:"12",md:"6"},{default:s(()=>[r(d,{modelValue:g.value,"onUpdate:modelValue":o[1]||(o[1]=e=>g.value=e),label:"Tanggal",placeholder:"Tanggal",type:"datetime-local","error-messages":a(l)&&a(l).date?[a(l).date]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),r(t,{cols:"12",md:"6"},{default:s(()=>[m.value?(i(),v(d,{key:0,modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=e=>m.value=e),label:"Truk",placeholder:"Truk","error-messages":a(l)&&a(l).truck_id?[a(l).truck_id]:[],readonly:""},null,8,["modelValue","error-messages"])):p("",!0),n.value?(i(),v(d,{key:1,modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value=e),label:"Alat Berat",placeholder:"Alat Berat","error-messages":a(l)&&a(l).heavy_vehicle_id?[a(l).heavy_vehicle_id]:[],readonly:""},null,8,["modelValue","error-messages"])):p("",!0)]),_:1}),r(t,{cols:"12",md:"6"},{default:s(()=>[r(d,{modelValue:c.value,"onUpdate:modelValue":o[4]||(o[4]=e=>c.value=e),label:"Sopir",placeholder:"Sopir","error-messages":a(l)&&a(l).driver_id?[a(l).driver_id]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),r(t,{cols:"12",md:"6"},{default:s(()=>[r(d,{modelValue:f.value,"onUpdate:modelValue":o[5]||(o[5]=e=>f.value=e),label:"Stasiun",placeholder:"Stasiun","error-messages":a(l)&&a(l).station_id?[a(l).station_id]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),r(t,{cols:"12",md:"6"},{default:s(()=>[r(d,{modelValue:_.value,"onUpdate:modelValue":o[6]||(o[6]=e=>_.value=e),label:"Operator",placeholder:"Operator","error-messages":a(l)&&a(l).gas_operator_id?[a(l).gas_operator_id]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),r(t,{cols:"12",md:"6"},{default:s(()=>[r(d,{modelValue:y.value,"onUpdate:modelValue":o[7]||(o[7]=e=>y.value=e),label:"Volume (L)",placeholder:"Volume (L)","error-messages":a(l)&&a(l).volume?[a(l).volume]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),r(t,{cols:"12",md:"6"},{default:s(()=>[m.value?(i(),v(d,{key:0,modelValue:b.value,"onUpdate:modelValue":o[8]||(o[8]=e=>b.value=e),label:"Odometer (KM)",placeholder:"Odometer (KM)","error-messages":a(l)&&a(l).odometer?[a(l).odometer]:[],readonly:""},null,8,["modelValue","error-messages"])):p("",!0),n.value?(i(),v(d,{key:1,modelValue:k.value,"onUpdate:modelValue":o[9]||(o[9]=e=>k.value=e),label:"Hourmeter (HM)",placeholder:"Hourmeter (HM)","error-messages":a(l)&&a(l).hourmeter?[a(l).hourmeter]:[],readonly:""},null,8,["modelValue","error-messages"])):p("",!0)]),_:1}),r(t,{cols:"12",md:"12"},{default:s(()=>[r(d,{modelValue:U.value,"onUpdate:modelValue":o[10]||(o[10]=e=>U.value=e),label:"Keterangan",placeholder:"Keterangan","error-messages":a(l)&&a(l).remarks?[a(l).remarks]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{X as default};
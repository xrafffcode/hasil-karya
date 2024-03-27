import{u as b}from"./fuelLogErrorLog-3d27d3ed.js";import{j as K,R as M,r as d,S as T,l as S,n as F,q as a,c as e,Y as w,I as H,s as O}from"./index-a69e0c82.js";import{V as r,b as R,a as B}from"./VRow-03344ab6.js";import{V as C}from"./VForm-fb065eef.js";import{V as t}from"./VTextField-03e38bc1.js";import"./VGrid-b0831086.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";const D=O("h2",{class:"mb-0"}," Detail Error Log Pengisian Bahan Bakar ",-1),z={__name:"fuel-log-error-log",setup(N){const U=K();M(b());const{fetchFuelLogErrorLog:k}=b(),E=U.params.id,n=d(""),m=d(""),s=d(""),V=d(""),p=d(""),i=d(""),v=d(""),f=d(""),g=d(""),_=d(""),c=d(""),y=d(""),L=d(""),x=async()=>{try{const u=await k(E);n.value=u.code,m.value=u.date,s.value=u.truck_id,V.value=u.heavy_vehicle_id,p.value=u.driver_id,i.value=u.station_id,v.value=u.gas_operator_id,f.value=u.fuel_type,g.value=u.volume,_.value=u.odometer,c.value=u.hourmeter,y.value=u.remarks,L.value=u.error_log}catch(u){console.error(u)}};return T(()=>{x(),document.title="Detail Error Log Pengisian Bahan Bakar"}),(u,l)=>(S(),F(B,null,{default:a(()=>[e(r,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[D,e(w,{to:"/admin/fuel-log-error-log",color:"primary"},{default:a(()=>[H(" Kembali ")]),_:1})]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(R,null,{default:a(()=>[e(C,null,{default:a(()=>[e(B,null,{default:a(()=>[e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o),label:"Kode",placeholder:"Kode",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=o=>m.value=o),label:"Tanggal",placeholder:"Tanggal",type:"datetime-local",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=o=>s.value=o),label:"Truk",placeholder:"Truk",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=o=>V.value=o),label:"Alat Berat",placeholder:"Alat Berat",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=o=>p.value=o),label:"Sopir",placeholder:"Sopir",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:i.value,"onUpdate:modelValue":l[5]||(l[5]=o=>i.value=o),label:"Stasiun",placeholder:"Stasiun",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:v.value,"onUpdate:modelValue":l[6]||(l[6]=o=>v.value=o),label:"Operator",placeholder:"Operator",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:f.value,"onUpdate:modelValue":l[7]||(l[7]=o=>f.value=o),label:"Jenis BBM",placeholder:"Jenis BBM",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=o=>g.value=o),label:"Volume (L)",placeholder:"Volume (L)",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:_.value,"onUpdate:modelValue":l[9]||(l[9]=o=>_.value=o),label:"Odometer (KM)",placeholder:"Odometer (KM)",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:c.value,"onUpdate:modelValue":l[10]||(l[10]=o=>c.value=o),label:"Hourmeter (HM)",placeholder:"Hourmeter (HM)",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:y.value,"onUpdate:modelValue":l[11]||(l[11]=o=>y.value=o),label:"Keterangan",placeholder:"Keterangan",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(t,{modelValue:L.value,"onUpdate:modelValue":l[12]||(l[12]=o=>L.value=o),label:"Error Log",placeholder:"Error Log",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{z as default};
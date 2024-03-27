import{u as y}from"./materialMovementErrorLog-23cbf237.js";import{j as E,R as L,r as d,S as T,_ as R,l as K,n as h,q as o,c as e,Y as D,I as C,s as w}from"./index-a69e0c82.js";import{V as t,b as B,a as b}from"./VRow-03344ab6.js";import{V as I}from"./VForm-fb065eef.js";import{V as u}from"./VTextField-03e38bc1.js";import"./VGrid-b0831086.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";const S=w("h2",{class:"mb-0"}," Detail Error Log Perpindahan Material ",-1),O={__name:"material-movement-error-log",setup(N){const k=E(),{loading:j,error:M}=L(y()),{fetchMaterialMovementErrorLog:U}=y(),P=k.params.id,n=d(""),s=d(""),m=d(""),i=d(""),v=d(""),p=d(""),c=d(""),V=d(""),_=d(""),f=d(""),g=d(""),x=async()=>{try{const r=await U(P);n.value=r.code,s.value=r.driver_id,m.value=r.truck_id,i.value=r.station_id,v.value=r.checker_id,p.value=r.date,c.value=r.truck_capacity,V.value=r.observation_ratio_percentage,_.value=r.solid_ratio,g.value=r.remarks,f.value=r.error_log}catch(r){console.error(r)}};return T(()=>{x(),document.title="Detail Error Log Perpindahan Material"}),R(()=>{M.value=null}),(r,l)=>(K(),h(b,null,{default:o(()=>[e(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:o(()=>[S,e(D,{to:{name:"admin-material-movement-error-log"},color:"primary"},{default:o(()=>[C(" Kembali ")]),_:1})]),_:1}),e(t,{cols:"12"},{default:o(()=>[e(B,null,{default:o(()=>[e(I,null,{default:o(()=>[e(b,null,{default:o(()=>[e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a),label:"Kode",placeholder:"Kode Material Movement",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=a=>s.value=a),label:"Driver",placeholder:"Pilih Driver",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=a=>m.value=a),label:"Truck",placeholder:"Pilih Truck",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=a=>i.value=a),label:"Stasiun",placeholder:"Pilih Stasiun",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:v.value,"onUpdate:modelValue":l[4]||(l[4]=a=>v.value=a),label:"Checker",placeholder:"Pilih Checker",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=a=>p.value=a),label:"Tanggal",placeholder:"Tanggal Material Movement",type:"datetime-local",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:c.value,"onUpdate:modelValue":l[6]||(l[6]=a=>c.value=a),label:"Kapasitas Truck",placeholder:"Kapasitas Truck",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:V.value,"onUpdate:modelValue":l[7]||(l[7]=a=>V.value=a),label:"Presentase Rasio Index",placeholder:"Presentase Rasio Index",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:_.value,"onUpdate:modelValue":l[8]||(l[8]=a=>_.value=a),label:"Rasio Padat",placeholder:"Rasio Padat",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:g.value,"onUpdate:modelValue":l[9]||(l[9]=a=>g.value=a),label:"Keterangan",placeholder:"Keterangan",readonly:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(u,{modelValue:f.value,"onUpdate:modelValue":l[10]||(l[10]=a=>f.value=a),label:"Error Log",placeholder:"Error Log",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{O as default};

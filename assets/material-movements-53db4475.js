import{u as v}from"./materialMovement-7e598da6.js";import{f as y,a as C,t as d}from"./formatters-87109f83.js";import{R as P,r as T,S as D,_ as R,k as A,l as f,J as B,x as o,n as N,q as e,c as t,I as l,v as r,Y as s,A as h,O as E,K as S,s as U}from"./index-a69e0c82.js";import{b as x,d as z,e as I,V as u,a as K}from"./VRow-03344ab6.js";import{V as F}from"./VDialog-d7a653e8.js";import{V as O}from"./VTextField-03e38bc1.js";import"./VGrid-b0831086.js";import"./VOverlay-64f59fed.js";import"./forwardRefs-e658ad70.js";import"./index-7cec823b.js";const j=U("h2",{class:"mb-0"}," Perpindahan Material ",-1),ee={__name:"material-movements",setup(q){const V=[{text:"Tanggal",value:"date"},{text:"Driver",value:"driver.name",width:200},{text:"Truck",value:"truck.name",width:200},{text:"POS",value:"station.name",width:200},{text:"Material",value:"station.material.name",width:200},{text:"Pemeriksa",value:"checker.name",width:200},{text:"Kapasitas Truk",value:"truck_capacity",width:200},{text:"Presentase Rasio Index",value:"observation_ratio_percentage",width:200},{text:"Rasio Index",value:"observation_ratio_number",width:200},{text:"Rasio Padat",value:"solid_ratio",width:200},{text:"Estimasi Volume",value:"solid_volume_estimate",width:200},{text:"Keterangan",value:"remarks",width:200},{text:"Aksi",value:"operation",width:300}],{movements:b,loading:c,error:k,success:n}=P(v()),{fetchMaterialMovements:p,deleteMaterialMovement:g}=v();p();async function w(_){confirm("Apakah Anda yakin ingin menghapus Perpindahan material ini?")&&(await g(_.id),p())}const m=T("");return D(()=>{document.title="Perpindahan Material"}),R(()=>{k.value=null}),(_,i)=>{const M=A("EasyDataTable");return f(),B(S,null,[o(n)?(f(),N(F,{key:0,modelValue:o(n),"onUpdate:modelValue":i[1]||(i[1]=a=>h(n)?n.value=a:null),"max-width":"400"},{default:e(()=>[t(x,null,{default:e(()=>[t(z,null,{default:e(()=>[l(r(o(n)),1)]),_:1}),t(I,null,{default:e(()=>[t(s,{color:"primary",text:"",onClick:i[0]||(i[0]=()=>n.value=null)},{default:e(()=>[l(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):E("",!0),t(K,null,{default:e(()=>[t(u,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:e(()=>[j,t(s,{to:{name:"admin-material-movement-create"},color:"primary"},{default:e(()=>[l(" Tambah Perpindahan Material ")]),_:1})]),_:1}),t(u,{cols:"12"},{default:e(()=>[t(O,{modelValue:o(m),"onUpdate:modelValue":i[2]||(i[2]=a=>h(m)?m.value=a:null),label:"Cari Perpindahan Material",placeholder:"Cari Perpindahan Material",clearable:"",loading:o(c),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),t(u,{cols:"12"},{default:e(()=>[t(x,null,{default:e(()=>[t(M,{headers:V,items:o(b),loading:o(c),"search-value":o(m),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-date":e(a=>[l(r(o(y)(a.date)),1)]),"item-observation_ratio_percentage":e(a=>[l(r(o(C)(a.observation_ratio_percentage)),1)]),"item-truck_capacity":e(a=>[l(r(o(d)(a.truck_capacity))+" m³ ",1)]),"item-observation_ratio_number":e(a=>[l(r(o(d)(a.observation_ratio_number))+" m³ ",1)]),"item-solid_ratio":e(a=>[l(r(o(d)(a.solid_ratio)),1)]),"item-solid_volume_estimate":e(a=>[l(r(o(d)(a.solid_volume_estimate))+" m³ ",1)]),"item-operation":e(a=>[t(s,{to:{name:"admin-material-movement-edit",params:{id:a.id}},color:"primary",size:"small",class:"m-5"},{default:e(()=>[l(" Ubah ")]),_:2},1032,["to"]),t(s,{to:{name:"admin-material-movement-view",params:{id:a.id}},color:"info",size:"small"},{default:e(()=>[l(" Detail ")]),_:2},1032,["to"]),t(s,{color:"error",size:"small",class:"m-5",onClick:()=>w(a)},{default:e(()=>[l(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{ee as default};
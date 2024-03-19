import{d as D}from"./qrHelper-ce6183b3.js";import{u as p}from"./station-56b545b2.js";import{P as T,r as A,Q as R,X as U,k as B,l as _,J as N,x as l,n as z,q as a,c as e,I as i,v as Q,S as r,A as V,O as E,K as F,s as K}from"./index-d8570b98.js";import{b as v,d as P,e as j,V as m,a as q}from"./VRow-ae8b4a94.js";import{V as H}from"./VDialog-029e5a82.js";import{V as I}from"./VTextField-d53f6a8a.js";import{V as J}from"./VSwitch-eb604b8d.js";import"./VGrid-aa4a8c47.js";import"./VOverlay-f87aa014.js";import"./forwardRefs-49923578.js";import"./VSelectionControl-d26b90d8.js";const M=K("h2",{class:"mb-0"}," Station ",-1),la={__name:"stations",setup(O){const C=[{text:"Kode",value:"code",width:200},{text:"Nama",value:"name"},{text:"Kategori",value:"category"},{text:"Aktif",value:"is_active"},{text:"Aksi",value:"operation",width:400}],{stations:h,loading:c,error:g,success:s}=T(p()),{fetchStations:u,deleteStation:x,activateStation:S}=p();u();async function k(n){confirm("Apakah Anda yakin ingin menghapus stasiun ini?")&&(await x(n.id),u())}async function w(n){const o=new FormData;o.append("is_active",n.is_active?1:0),await S(n.id,o),u()}const d=A("");function y(n,o){D(n,"Pos "+o)}return R(()=>{document.title="Station"}),U(()=>{g.value=null}),(n,o)=>{const b=B("EasyDataTable");return _(),N(F,null,[l(s)?(_(),z(H,{key:0,modelValue:l(s),"onUpdate:modelValue":o[1]||(o[1]=t=>V(s)?s.value=t:null),"max-width":"400"},{default:a(()=>[e(v,null,{default:a(()=>[e(P,null,{default:a(()=>[i(Q(l(s)),1)]),_:1}),e(j,null,{default:a(()=>[e(r,{color:"primary",text:"",onClick:o[0]||(o[0]=()=>s.value=null)},{default:a(()=>[i(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):E("",!0),e(q,null,{default:a(()=>[e(m,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[M,e(r,{to:{name:"admin-station-create"},color:"primary"},{default:a(()=>[i(" Tambah Station ")]),_:1})]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(I,{modelValue:l(d),"onUpdate:modelValue":o[2]||(o[2]=t=>V(d)?d.value=t:null),label:"Cari Station",placeholder:"Cari Station",clearable:"",loading:l(c),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(v,null,{default:a(()=>[e(b,{headers:C,items:l(h),loading:l(c),"search-value":l(d),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-is_active":a(t=>[e(J,{modelValue:t.is_active,"onUpdate:modelValue":f=>t.is_active=f,color:"primary",onChange:()=>w(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),"item-operation":a(t=>[e(r,{color:"info",size:"small",class:"m-5",onClick:f=>y(t.id,t.name)},{default:a(()=>[i(" Print QR Code ")]),_:2},1032,["onClick"]),e(r,{to:{name:"admin-station-edit",params:{id:t.id}},color:"primary",size:"small",class:"m-5"},{default:a(()=>[i(" Ubah ")]),_:2},1032,["to"]),e(r,{to:{name:"admin-station-view",params:{id:t.id}},color:"info",size:"small"},{default:a(()=>[i(" Detail ")]),_:2},1032,["to"]),e(r,{color:"error",size:"small",class:"m-5",onClick:()=>k(t)},{default:a(()=>[i(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{la as default};
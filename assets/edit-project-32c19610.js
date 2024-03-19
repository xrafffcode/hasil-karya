import{j as Je,P as V,r as i,Q as Ee,w as X,k as Fe,l as v,n as x,q as t,c as l,S as Y,I as n,T as Ie,x as a,s as g,J as A,K as S,N as P,v as j}from"./index-d8570b98.js";import{u as fe}from"./project-9843e9f7.js";import{u as Ve}from"./region-9ed148fc.js";import{u as ge}from"./client-8eddd01b.js";import{u as be}from"./driver-4b8ac86d.js";import{u as _e}from"./truck-17634e1b.js";import{u as ye}from"./heavyVehicle-a6827fb6.js";import{u as ke}from"./station-56b545b2.js";import{u as xe}from"./checker-8e08a759.js";import{u as Ue}from"./technicalAdmin-5ea7466e.js";import{u as Ae}from"./gasOperator-497adca5.js";import{V as r,b as H,a as q}from"./VRow-ae8b4a94.js";import{V as Le}from"./VForm-c95c40f9.js";import{V as He}from"./VStepper-ae4d1886.js";import{V as c}from"./VTextField-d53f6a8a.js";import{V as d}from"./VAutocomplete-90f07087.js";import{V as qe}from"./VTextarea-c1327748.js";import{b as T}from"./VSelect-e5c25370.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";import"./VOverlay-f87aa014.js";import"./VMenu-f39875ea.js";import"./VSelectionControl-d26b90d8.js";const Qe=g("h2",{class:"mb-0"}," Edit Project ",-1),$e=g("span",{class:"text-body-2"}," Rp ",-1),ze={class:"d-flex flex-wrap"},We={class:"d-flex flex-wrap"},Xe={class:"d-flex flex-wrap"},Ye={class:"d-flex flex-wrap"},Ze={class:"d-flex flex-wrap"},el={class:"d-flex flex-wrap"},ll={class:"d-flex flex-wrap"},jl={__name:"edit-project",setup(al){const Se=Je(),{projectStatus:Pe,loading:tl,error:o}=V(fe()),{updateProject:je,fetchProjectStatus:Te,fetchProject:we}=fe();Te();const{provinces:Q,regencies:$,districts:z,subdistricts:W}=V(Ve()),{fetchProvinces:Z,fetchRegencies:ee,fetchDistricts:le,fetchSubdistricts:ae}=Ve();Z();const{clients:te}=V(ge()),{fetchClients:he}=ge(),{drivers:se}=V(be()),{fetchDrivers:Ce}=be(),{trucks:oe}=V(_e()),{fetchTrucks:De}=_e(),{heavyVehicles:re}=V(ye()),{fetchHeavyVehicles:Ke}=ye(),{stations:ue}=V(ke()),{fetchStations:Ne}=ke(),{checkers:me}=V(xe()),{fetchCheckers:Oe}=xe(),{technicalAdmins:ie}=V(Ue()),{fetchTechnicalAdmins:Be}=Ue(),{gasOperators:de}=V(Ae()),{fetchGasOperators:Re}=Ae();he(),Ce(),De(),Ke(),Ne(),Oe(),Be(),Re();const ne=Se.params.id,w=i("AUTO"),h=i(""),C=i(""),D=i(""),K=i(""),N=i(""),b=i(""),O=i(""),_=i(""),y=i(""),k=i(""),B=i(""),R=i(""),G=i([]),M=i([]),J=i([]),E=i([]),F=i([]),I=i([]),L=i([]),ve=async()=>{var f,s,p,e;try{const u=await we(ne);w.value=u.code,h.value=u.name,C.value=u.description,D.value=u.start_date,K.value=u.end_date,N.value=u.person_in_charge,b.value=u.amount,O.value=u.client.id,_.value=(f=Q.value.find(m=>m.nama===u.province))==null?void 0:f.id,await ee(_.value),y.value=(s=$.value.find(m=>m.nama===u.regency))==null?void 0:s.id,await le(y.value),k.value=(p=z.value.find(m=>m.nama===u.district))==null?void 0:p.id,await ae(k.value),B.value=(e=W.value.find(m=>m.nama===u.subdistrict))==null?void 0:e.id,R.value=u.status,G.value=u.drivers.map(m=>m.id),M.value=u.trucks.map(m=>m.id),J.value=u.heavy_vehicles.map(m=>m.id),E.value=u.stations.map(m=>m.id),F.value=u.checkers.map(m=>m.id),I.value=u.technical_admins.map(m=>m.id),L.value=u.gas_operators.map(m=>m.id)}catch(u){console.error(u)}};Ee(()=>{ve(),document.title="Edit Project"});const Ge=()=>{var u,m,ce,pe;const f=(u=Q.value.find(U=>U.id===_.value))==null?void 0:u.nama,s=(m=$.value.find(U=>U.id===y.value))==null?void 0:m.nama,p=(ce=z.value.find(U=>U.id===k.value))==null?void 0:ce.nama,e=(pe=W.value.find(U=>U.id===B.value))==null?void 0:pe.nama;je({id:ne,code:w.value,name:h.value,description:C.value,start_date:D.value,end_date:K.value,person_in_charge:N.value,amount:b.value,client_id:O.value,province:f,regency:s,district:p,subdistrict:e,status:R.value,drivers:G.value,trucks:M.value,heavy_vehicles:J.value,stations:E.value,checkers:F.value,technical_admins:I.value,gas_operators:L.value})};Z(),X(_,f=>{ee(f)}),X(y,f=>{le(f)}),X(k,f=>{ae(f)});const Me=()=>{ve()};return(f,s)=>{const p=Fe("Text");return v(),x(q,null,{default:t(()=>[l(r,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:t(()=>[Qe,l(Y,{to:{name:"admin-project"},color:"primary"},{default:t(()=>[n(" Kembali ")]),_:1})]),_:1}),l(r,{cols:"12"},{default:t(()=>[l(H,null,{default:t(()=>[l(Le,{onSubmit:Ie(Ge,["prevent"])},{default:t(()=>[l(He,{items:["Umum","Lokasi","Personil","Preview"],"next-text":"Selanjutnya","prev-text":"Sebelumnya","alt-labels":""},{"item.1":t(()=>[l(H,{title:"Umum",flat:""},{default:t(()=>[l(q,null,{default:t(()=>[l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=e=>w.value=e),label:"Kode",placeholder:"Kode Projek","error-messages":a(o)&&a(o).code?[a(o).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:h.value,"onUpdate:modelValue":s[1]||(s[1]=e=>h.value=e),label:"Nama",placeholder:"Nama Projek","error-messages":a(o)&&a(o).name?[a(o).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:D.value,"onUpdate:modelValue":s[2]||(s[2]=e=>D.value=e),label:"Tanggal Mulai",placeholder:"Tanggal Mulai Projek",type:"date","error-messages":a(o)&&a(o).start_date?[a(o).start_date]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:K.value,"onUpdate:modelValue":s[3]||(s[3]=e=>K.value=e),label:"Tanggal Selesai",placeholder:"Tanggal Selesai Projek",type:"date","error-messages":a(o)&&a(o).end_date?[a(o).end_date]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:N.value,"onUpdate:modelValue":s[4]||(s[4]=e=>N.value=e),label:"Penanggung Jawab",placeholder:"Penanggung Jawab Projek","error-messages":a(o)&&a(o).person_in_charge?[a(o).person_in_charge]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:b.value,"onUpdate:modelValue":s[5]||(s[5]=e=>b.value=e),label:"Nilai Projek",placeholder:"Nilai Projek","error-messages":a(o)&&a(o).amount?[a(o).amount]:[],onInput:s[6]||(s[6]=e=>b.value=b.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","))},{"prepend-inner":t(()=>[$e]),_:1},8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:O.value,"onUpdate:modelValue":s[7]||(s[7]=e=>O.value=e),label:"Client",items:a(te),"error-messages":a(o)&&a(o).client_id?[a(o).client_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:R.value,"onUpdate:modelValue":s[8]||(s[8]=e=>R.value=e),label:"Status",items:a(Pe),"item-title":e=>e.name,"error-messages":a(o)&&a(o).status?[a(o).status]:[]},null,8,["modelValue","items","item-title","error-messages"])]),_:1}),l(r,{cols:"12",md:"12"},{default:t(()=>[l(qe,{modelValue:C.value,"onUpdate:modelValue":s[9]||(s[9]=e=>C.value=e),label:"Deskripsi",placeholder:"Deskripsi Projek","error-messages":a(o)&&a(o).description?[a(o).description]:[]},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1})]),"item.2":t(()=>[l(H,{title:"Lokasi",flat:""},{default:t(()=>[l(q,null,{default:t(()=>[l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:_.value,"onUpdate:modelValue":s[10]||(s[10]=e=>_.value=e),label:"Provinsi",items:a(Q),"error-messages":a(o)&&a(o).province?[a(o).province]:[],"item-title":e=>e.nama,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:y.value,"onUpdate:modelValue":s[11]||(s[11]=e=>y.value=e),label:"Kabupaten/Kota",items:a($),"error-messages":a(o)&&a(o).regency?[a(o).regency]:[],"item-title":e=>e.nama,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:k.value,"onUpdate:modelValue":s[12]||(s[12]=e=>k.value=e),label:"Kecamatan",items:a(z),"error-messages":a(o)&&a(o).district?[a(o).district]:[],"item-title":e=>e.nama,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:B.value,"onUpdate:modelValue":s[13]||(s[13]=e=>B.value=e),label:"Kelurahan/Desa",items:a(W),"error-messages":a(o)&&a(o).subdistrict?[a(o).subdistrict]:[],"item-title":e=>e.nama,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1})]),_:1})]),_:1})]),"item.3":t(()=>[l(H,{title:"Personil",flat:""},{default:t(()=>[l(q,null,{default:t(()=>[l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:G.value,"onUpdate:modelValue":s[14]||(s[14]=e=>G.value=e),label:"Driver",items:a(se),multiple:"","error-messages":a(o)&&a(o).driverArr?[a(o).driverArr]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:M.value,"onUpdate:modelValue":s[15]||(s[15]=e=>M.value=e),label:"Truck",items:a(oe),multiple:"","error-messages":a(o)&&a(o).truckArr?[a(o).truckArr]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:J.value,"onUpdate:modelValue":s[16]||(s[16]=e=>J.value=e),label:"Alat Berat",items:a(re),multiple:"","error-messages":a(o)&&a(o).heavyVehicleArr?[a(o).heavyVehicleArr]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:E.value,"onUpdate:modelValue":s[17]||(s[17]=e=>E.value=e),label:"Station",items:a(ue),multiple:"","error-messages":a(o)&&a(o).stationArr?[a(o).stationArr]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:F.value,"onUpdate:modelValue":s[18]||(s[18]=e=>F.value=e),label:"Checker",items:a(me),multiple:"","error-messages":a(o)&&a(o).checkerArr?[a(o).checkerArr]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:I.value,"onUpdate:modelValue":s[19]||(s[19]=e=>I.value=e),label:"Technical Admin",items:a(ie),multiple:"","error-messages":a(o)&&a(o).technicalAdminArr?[a(o).technicalAdminArr]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"12"},{default:t(()=>[l(d,{modelValue:L.value,"onUpdate:modelValue":s[20]||(s[20]=e=>L.value=e),label:"Gas Operator",items:a(de),multiple:"","error-messages":a(o)&&a(o).gasOperatorArr?[a(o).gasOperatorArr]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1})]),_:1})]),_:1})]),"item.4":t(()=>[l(H,{title:"Preview",flat:""},{default:t(()=>[l(q,null,{default:t(()=>[l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:w.value,"onUpdate:modelValue":s[21]||(s[21]=e=>w.value=e),label:"Kode",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:h.value,"onUpdate:modelValue":s[22]||(s[22]=e=>h.value=e),label:"Nama",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:C.value,"onUpdate:modelValue":s[23]||(s[23]=e=>C.value=e),label:"Deskripsi",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:D.value,"onUpdate:modelValue":s[24]||(s[24]=e=>D.value=e),label:"Tanggal Mulai",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:K.value,"onUpdate:modelValue":s[25]||(s[25]=e=>K.value=e),label:"Tanggal Selesai",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:N.value,"onUpdate:modelValue":s[26]||(s[26]=e=>N.value=e),label:"Penanggung Jawab",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:b.value,"onUpdate:modelValue":s[27]||(s[27]=e=>b.value=e),label:"Pendapatan",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:O.value,"onUpdate:modelValue":s[28]||(s[28]=e=>O.value=e),label:"Client",items:a(te),"item-title":e=>e.name,"item-value":e=>e.id,readonly:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:_.value,"onUpdate:modelValue":s[29]||(s[29]=e=>_.value=e),label:"Provinsi",items:a(Q),"item-title":e=>e.nama,"item-value":e=>e.id,readonly:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:y.value,"onUpdate:modelValue":s[30]||(s[30]=e=>y.value=e),label:"Kabupaten/Kota",items:a($),"item-title":e=>e.nama,"item-value":e=>e.id,readonly:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:k.value,"onUpdate:modelValue":s[31]||(s[31]=e=>k.value=e),label:"Kecamatan",items:a(z),"item-title":e=>e.nama,"item-value":e=>e.id,readonly:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:B.value,"onUpdate:modelValue":s[32]||(s[32]=e=>B.value=e),label:"Kelurahan/Desa",items:a(W),"item-title":e=>e.nama,"item-value":e=>e.id,readonly:""},null,8,["modelValue","items","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(c,{modelValue:R.value,"onUpdate:modelValue":s[33]||(s[33]=e=>R.value=e),label:"Status",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex flex-column"},{default:t(()=>[l(p,null,{default:t(()=>[n(" Driver ")]),_:1}),g("div",ze,[(v(!0),A(S,null,P(a(se).filter(e=>G.value.includes(e.id)),(e,u)=>(v(),x(T,{key:u,label:"Driver",color:"primary",class:"mr-2 mb-2"},{default:t(()=>[n(j(e.name),1)]),_:2},1024))),128))])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex flex-column"},{default:t(()=>[l(p,null,{default:t(()=>[n(" Truck ")]),_:1}),g("div",We,[(v(!0),A(S,null,P(a(oe).filter(e=>M.value.includes(e.id)),(e,u)=>(v(),x(T,{key:u,label:"Truck",color:"primary",class:"mr-2 mb-2"},{default:t(()=>[n(j(e.name),1)]),_:2},1024))),128))])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex flex-column"},{default:t(()=>[l(p,null,{default:t(()=>[n(" Alat Berat ")]),_:1}),g("div",Xe,[(v(!0),A(S,null,P(a(re).filter(e=>J.value.includes(e.id)),(e,u)=>(v(),x(T,{key:u,label:"Alat Berat",color:"primary",class:"mr-2 mb-2"},{default:t(()=>[n(j(e.name),1)]),_:2},1024))),128))])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex flex-column"},{default:t(()=>[l(p,null,{default:t(()=>[n(" Station ")]),_:1}),g("div",Ye,[(v(!0),A(S,null,P(a(ue).filter(e=>E.value.includes(e.id)),(e,u)=>(v(),x(T,{key:u,label:"Station",color:"primary",class:"mr-2 mb-2"},{default:t(()=>[n(j(e.name),1)]),_:2},1024))),128))])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex flex-column"},{default:t(()=>[l(p,null,{default:t(()=>[n(" Checker ")]),_:1}),g("div",Ze,[(v(!0),A(S,null,P(a(me).filter(e=>F.value.includes(e.id)),(e,u)=>(v(),x(T,{key:u,label:"Checker",color:"primary",class:"mr-2 mb-2"},{default:t(()=>[n(j(e.name),1)]),_:2},1024))),128))])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex flex-column"},{default:t(()=>[l(p,null,{default:t(()=>[n(" Technical Admin ")]),_:1}),g("div",el,[(v(!0),A(S,null,P(a(ie).filter(e=>I.value.includes(e.id)),(e,u)=>(v(),x(T,{key:u,label:"Technical Admin",color:"primary",class:"mr-2 mb-2"},{default:t(()=>[n(j(e.name),1)]),_:2},1024))),128))])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex flex-column"},{default:t(()=>[l(p,null,{default:t(()=>[n(" Gas Operator ")]),_:1}),g("div",ll,[(v(!0),A(S,null,P(a(de).filter(e=>L.value.includes(e.id)),(e,u)=>(v(),x(T,{key:u,label:"Gas Operator",color:"primary",class:"mr-2 mb-2"},{default:t(()=>[n(j(e.name),1)]),_:2},1024))),128))])]),_:1}),l(r,{cols:"12",md:"12"},{default:t(()=>[l(Y,{type:"submit",color:"primary",class:"float-right"},{default:t(()=>[n(" Simpan ")]),_:1}),l(Y,{type:"reset",color:"error",class:"float-right mr-2",onClick:Me},{default:t(()=>[n(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{jl as default};
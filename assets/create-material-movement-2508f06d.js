import{P as p,H as F,r as u,Q as q,X as E,l as S,J as H,x as a,n as I,q as t,c as l,I as _,v as J,S as b,A as Q,O as X,T as j,K as z}from"./index-d8570b98.js";import{u as h}from"./materialMovement-e98d519d.js";import{u as x}from"./driver-4b8ac86d.js";import{u as T}from"./truck-17634e1b.js";import{u as M}from"./station-56b545b2.js";import{b as y,d as G,e as L,V as s,a as C}from"./VRow-ae8b4a94.js";import{V as W}from"./VDialog-029e5a82.js";import{V as Y}from"./VForm-c95c40f9.js";import{V as f}from"./VAutocomplete-90f07087.js";import{V as Z}from"./VTextarea-c1327748.js";import"./VGrid-aa4a8c47.js";import"./VOverlay-f87aa014.js";import"./forwardRefs-49923578.js";import"./VTextField-d53f6a8a.js";import"./VSelect-e5c25370.js";import"./VMenu-f39875ea.js";import"./VSelectionControl-d26b90d8.js";const be={__name:"create-material-movement",setup($){const{drivers:P}=p(x()),{trucks:R}=p(T()),{stations:U}=p(M()),{user:k,checkAuth:D}=F(),{fetchDrivers:A}=x(),{fetchTrucks:O}=T(),{fetchStations:w}=M();A(),O(),w({type:"station"}),D();const{success:i,loading:B,error:r}=p(h()),{createMaterialMovementCheckers:K}=h(),m=u(""),n=u(""),d=u(""),g=u(k.checker.id),v=u(""),c=u(""),V=()=>{m.value="",n.value="",d.value="",g.value=k.checker.id,v.value="",c.value=""},N=()=>{K({driver_id:m.value,truck_id:n.value,station_id:d.value,checker_id:g.value,observation_ratio_percentage:v.value/100,remarks:c.value}),V()};return q(()=>{document.title="Tambah Material Movement"}),E(()=>{V(),r.value=null}),(ee,o)=>(S(),H(z,null,[a(i)?(S(),I(W,{key:0,modelValue:a(i),"onUpdate:modelValue":o[1]||(o[1]=e=>Q(i)?i.value=e:null),"max-width":"400"},{default:t(()=>[l(y,null,{default:t(()=>[l(G,null,{default:t(()=>[_(J(a(i)),1)]),_:1}),l(L,null,{default:t(()=>[l(b,{color:"primary",text:"",onClick:o[0]||(o[0]=()=>i.value=null)},{default:t(()=>[_(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):X("",!0),l(C,null,{default:t(()=>[l(s,{cols:"12"},{default:t(()=>[l(y,null,{default:t(()=>[l(Y,{onSubmit:j(N,["prevent"])},{default:t(()=>[l(C,null,{default:t(()=>[l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=e=>m.value=e),items:a(P),label:"Driver",placeholder:"Pilih Driver","error-messages":a(r)&&a(r).driver_id?[a(r).driver_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value=e),items:a(R),label:"Truck",placeholder:"Pilih Truck","error-messages":a(r)&&a(r).truck_id?[a(r).truck_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:v.value,"onUpdate:modelValue":o[4]||(o[4]=e=>v.value=e),items:[{label:"30%",value:30},{label:"40%",value:40},{label:"50%",value:50},{label:"60%",value:60},{label:"70%",value:70},{label:"80%",value:80},{label:"90%",value:90},{label:"100%",value:100}],label:"Observation Ratio",placeholder:"Pilih Observation Ratio","error-messages":a(r)&&a(r).observation_ratio_percentage?[a(r).observation_ratio_percentage]:[],"item-title":e=>e.label,"item-value":e=>e.value},null,8,["modelValue","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:d.value,"onUpdate:modelValue":o[5]||(o[5]=e=>d.value=e),items:a(U),label:"POS",placeholder:"Pilih POS","error-messages":a(r)&&a(r).station_id?[a(r).station_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"12"},{default:t(()=>[l(Z,{modelValue:c.value,"onUpdate:modelValue":o[6]||(o[6]=e=>c.value=e),label:"Keterangan",placeholder:"Keterangan","error-messages":a(r)&&a(r).remarks?[a(r).remarks]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(s,{cols:"12",class:"d-flex gap-4"},{default:t(()=>[l(b,{type:"submit",loading:a(B),color:"primary"},{default:t(()=>[_(" Simpan ")]),_:1},8,["loading"]),l(b,{color:"secondary",variant:"tonal",onClick:V},{default:t(()=>[_(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{be as default};
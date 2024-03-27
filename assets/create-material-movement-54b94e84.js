import{R as p,H as F,r as u,S as q,_ as E,l as S,J as H,x as a,n as I,q as t,c as l,I as _,v as J,Y as b,A as Y,O as Z,Z as j,K as z}from"./index-a69e0c82.js";import{u as h}from"./materialMovement-7e598da6.js";import{u as x}from"./driver-fb3fe64c.js";import{u as M}from"./truck-8406cd86.js";import{u as T}from"./station-88358ae3.js";import{b as y,d as G,e as L,V as s,a as C}from"./VRow-03344ab6.js";import{V as Q}from"./VDialog-d7a653e8.js";import{V as W}from"./VForm-fb065eef.js";import{V as f}from"./VAutocomplete-1e982d1d.js";import{V as X}from"./VTextarea-d6921a11.js";import"./VGrid-b0831086.js";import"./VOverlay-64f59fed.js";import"./forwardRefs-e658ad70.js";import"./VTextField-03e38bc1.js";import"./index-7cec823b.js";import"./VSelect-2adf8cee.js";import"./VMenu-97c043ff.js";import"./VDivider-e33b9f13.js";import"./VSelectionControl-88f5bb81.js";import"./VChip-707cc8ab.js";const Se={__name:"create-material-movement",setup($){const{drivers:R}=p(x()),{trucks:U}=p(M()),{stations:D}=p(T()),{user:k,checkAuth:P}=F(),{fetchDrivers:A}=x(),{fetchTrucks:O}=M(),{fetchStations:w}=T();A(),O(),w({type:"station"}),P();const{success:i,loading:B,error:r}=p(h()),{createMaterialMovementCheckers:K}=h(),m=u(""),n=u(""),d=u(""),g=u(k.checker.id),v=u(""),c=u(""),V=()=>{m.value="",n.value="",d.value="",g.value=k.checker.id,v.value="",c.value=""},N=()=>{K({driver_id:m.value,truck_id:n.value,station_id:d.value,checker_id:g.value,observation_ratio_percentage:v.value/100,remarks:c.value}),V()};return q(()=>{document.title="Tambah Material Movement"}),E(()=>{V(),r.value=null}),(ee,o)=>(S(),H(z,null,[a(i)?(S(),I(Q,{key:0,modelValue:a(i),"onUpdate:modelValue":o[1]||(o[1]=e=>Y(i)?i.value=e:null),"max-width":"400"},{default:t(()=>[l(y,null,{default:t(()=>[l(G,null,{default:t(()=>[_(J(a(i)),1)]),_:1}),l(L,null,{default:t(()=>[l(b,{color:"primary",text:"",onClick:o[0]||(o[0]=()=>i.value=null)},{default:t(()=>[_(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):Z("",!0),l(C,null,{default:t(()=>[l(s,{cols:"12"},{default:t(()=>[l(y,null,{default:t(()=>[l(W,{onSubmit:j(N,["prevent"])},{default:t(()=>[l(C,null,{default:t(()=>[l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=e=>m.value=e),items:a(R),label:"Driver",placeholder:"Pilih Driver","error-messages":a(r)&&a(r).driver_id?[a(r).driver_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value=e),items:a(U),label:"Truck",placeholder:"Pilih Truck","error-messages":a(r)&&a(r).truck_id?[a(r).truck_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:v.value,"onUpdate:modelValue":o[4]||(o[4]=e=>v.value=e),items:[{label:"30%",value:30},{label:"40%",value:40},{label:"50%",value:50},{label:"60%",value:60},{label:"70%",value:70},{label:"80%",value:80},{label:"90%",value:90},{label:"100%",value:100}],label:"Observation Ratio",placeholder:"Pilih Observation Ratio","error-messages":a(r)&&a(r).observation_ratio_percentage?[a(r).observation_ratio_percentage]:[],"item-title":e=>e.label,"item-value":e=>e.value},null,8,["modelValue","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"6"},{default:t(()=>[l(f,{modelValue:d.value,"onUpdate:modelValue":o[5]||(o[5]=e=>d.value=e),items:a(D),label:"POS",placeholder:"Pilih POS","error-messages":a(r)&&a(r).station_id?[a(r).station_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(s,{cols:"12",md:"12"},{default:t(()=>[l(X,{modelValue:c.value,"onUpdate:modelValue":o[6]||(o[6]=e=>c.value=e),label:"Keterangan",placeholder:"Keterangan","error-messages":a(r)&&a(r).remarks?[a(r).remarks]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(s,{cols:"12",class:"d-flex gap-4"},{default:t(()=>[l(b,{type:"submit",loading:a(B),color:"primary"},{default:t(()=>[_(" Simpan ")]),_:1},8,["loading"]),l(b,{color:"secondary",variant:"tonal",onClick:V},{default:t(()=>[_(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{Se as default};
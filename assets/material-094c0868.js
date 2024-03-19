import{b2 as i,b3 as e,b4 as r,b5 as s}from"./index-d8570b98.js";const n=i({id:"material",state:()=>({materials:[],loading:!1,error:null,success:null}),actions:{async fetchMaterials(){try{this.loading=!0;const t=await e.get("/materials");this.materials=t.data.data}catch(t){this.handleError(t)}finally{this.loading=!1}},async fetchMaterial(t){try{return this.loading=!0,(await e.get(`/material/${t}`)).data.data}catch(a){this.handleError(a)}finally{this.loading=!1}},async createMaterial(t){try{this.loading=!0;const a=await e.post("/material",t);this.success=a.data.message,r.push({name:"admin-material"})}catch(a){this.error=s(a)}finally{this.loading=!1}},async updateMaterial(t){try{this.loading=!0;const a=await e.post(`/material/${t.id}`,t);this.success=a.data.message,r.push({name:"admin-material"})}catch(a){this.error=s(a)}finally{this.loading=!1}},async deleteMaterial(t){try{this.loading=!0;const a=await e.delete(`/material/${t}`);this.success=a.data.message}catch(a){this.error=s(a)}finally{this.loading=!1}}}});export{n as u};
import{P as t,Q as a,b4 as o,b5 as s}from"./index-a69e0c82.js";const i=t({id:"materialMovementErrorLog",state:()=>({movements:[],loading:!1,error:null,success:null}),actions:{async fetchMaterialMovementErrorLogs(){try{this.loading=!0;const r=await a.get("/material-movement-error-logs");this.movements=r.data.data}catch(r){this.handleError(r)}finally{this.loading=!1}},async fetchMaterialMovementErrorLog(r){try{return this.loading=!0,(await a.get(`/material-movement-error-log/${r}`)).data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async createMaterialMovementErrorLog(r){try{this.loading=!0;const e=await a.post("/material-movement-error-log",r);this.success=e.data.message,o.push({name:"admin-material-movement-error-log"})}catch(e){this.error=s(e)}finally{this.loading=!1}}}});export{i as u};

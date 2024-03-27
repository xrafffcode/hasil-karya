import{P as i,Q as a,b4 as c,b5 as r}from"./index-a69e0c82.js";const o=i({id:"truck",state:()=>({trucks:[],loading:!1,error:null,success:null}),actions:{async fetchTrucks(){try{this.loading=!0;const t=await a.get("/trucks");t.data.data.forEach(s=>{s.name=`${s.brand} ${s.model}`}),this.trucks=t.data.data}catch(t){this.handleError(t)}finally{this.loading=!1}},async fetchTruck(t){try{return this.loading=!0,(await a.get(`/truck/${t}`)).data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async createTruck(t){try{this.loading=!0;const s=await a.post("/truck",t);this.success=s.data.message,c.push({name:"admin-truck"})}catch(s){this.error=r(s)}finally{this.loading=!1}},async updateTruck(t){try{this.loading=!0;const s=await a.post(`/truck/${t.id}`,t);this.success=s.data.message,c.push({name:"admin-truck"})}catch(s){this.error=r(s)}finally{this.loading=!1}},async deleteTruck(t){try{this.loading=!0;const s=await a.delete(`/truck/${t}`);this.success=s.data.message}catch(s){this.error=r(s)}finally{this.loading=!1}},async activateTruck(t,s){try{this.loading=!0;const e=await a.post(`/truck/active/${t}`,s);this.success=e.data.message}catch(e){this.error=r(e)}finally{this.loading=!1}}}});export{o as u};

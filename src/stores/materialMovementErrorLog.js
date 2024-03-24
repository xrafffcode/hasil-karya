import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { handleError } from "@/helpers/errorHelper"

import { defineStore } from "pinia"

export const useMaterialMovementErrorLogStore = defineStore({
  id: "materialMovementErrorLog",
  state: () => ({
    errorLogs: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMaterialMovementErrorLogs() {
      try {
        this.loading = true

        const response = await axiosInstance.get("/material-movement-error-logs")

        response.data.data.forEach(movement => {
          movement.truck.name = `${movement.truck.brand} ${movement.truck.model}`
        })

        this.errorLogs = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchMaterialMovementErrorLog(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/material-movement-error-log/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createMaterialMovementErrorLog(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post("/material-movement-error-log", payload)

        this.success = response.data.message

        router.push({ name: "admin-material-movement-error-log" })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
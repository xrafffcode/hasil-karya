import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { handleError } from "@/helpers/errorHelper"

import { defineStore } from "pinia"

export const useFuelLogErrorLogStore = defineStore({
  id: "fuelLogErrorLog",
  state: () => ({
    fuelLogErrorLogs: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchFuelLogErrorLogs() {
      try {
        this.loading = true

        const response = await axiosInstance.get("/fuel-log-error-logs")

        this.fuelLogErrorLogs = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchFuelLogErrorLog(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/fuel-log-error-log/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
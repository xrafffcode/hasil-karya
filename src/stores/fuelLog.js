import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useFuelLogStore = defineStore({
  id: 'fuelLog',
  state: () => ({
    fuelLogs: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchFuelLogs() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/fuel-logs')

        this.fuelLogs = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchFuelLog(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/fuel-log/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createFuelLog(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/fuel-log', payload)

        this.success = response.data.message

        router.push({ name: 'admin-fuel-log' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createFuelLogTruckGasOperator(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/gas-operator/fuel-log/truck/store', payload)

        this.success = response.data.message

        router.push({ name: 'gas-operator-fuel-log' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createFuelLogHeavyVehicleGasOperator(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/gas-operator/fuel-log/heavy-vehicle/store', payload)

        this.success = response.data.message

        router.push({ name: 'gas-operator-fuel-log' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateFuelLog(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/fuel-log/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-fuel-log' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteFuelLog(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/fuel-log/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

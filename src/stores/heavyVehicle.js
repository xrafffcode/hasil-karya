import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useHeavyVehicleStore = defineStore({
  id: 'heavyVehicle',
  state: () => ({
    heavyVehicles: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchHeavyVehicles() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/heavy-vehicles')

        response.data.data.forEach(heavyVehicle => {
          heavyVehicle.name = `${heavyVehicle.brand} ${heavyVehicle.model}`
        })

        this.heavyVehicles = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchHeavyVehicle(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/heavy-vehicle/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createHeavyVehicle(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/heavy-vehicle', payload)

        this.success = response.data.message

        router.push({ name: 'admin-heavy-vehicle' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateHeavyVehicle(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/heavy-vehicle/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-heavy-vehicle' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteHeavyVehicle(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/heavy-vehicle/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async activateHeavyVehicle(id, payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/heavy-vehicle/active/${id}`, payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useTruckStore = defineStore({
  id: 'truck',
  state: () => ({
    trucks: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchTrucks() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/trucks')
        
        response.data.data.forEach(truck => {
          truck.name = `${truck.brand} ${truck.model}`
        })

        this.trucks = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchTruck(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/truck/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createTruck(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/truck', payload)

        this.success = response.data.message

        router.push({ name: 'admin-truck' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateTruck(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/truck/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-truck' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteTruck(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/truck/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async activateTruck(id, payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/truck/active/${id}`, payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

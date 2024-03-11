import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useMaterialStore = defineStore({
  id: 'material',
  state: () => ({
    materials: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMaterials() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/materials')

        this.materials = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchMaterial(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/material/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createMaterial(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/material', payload)

        this.success = response.data.message

        router.push({ name: 'admin-material' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateMaterial(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/material/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-material' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteMaterial(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/material/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

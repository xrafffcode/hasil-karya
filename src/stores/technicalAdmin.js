import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useTechnicalAdminStore = defineStore({
  id: 'technicalAdmin',
  state: () => ({
    technicalAdmins: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchTechnicalAdmins() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/technical-admins')

        this.technicalAdmins = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchTechnicalAdmin(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/technical-admin/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createTechnicalAdmin(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/technical-admin', payload)

        this.success = response.data.message

        router.push({ name: 'admin-technical-admin' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateTechnicalAdmin(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/technical-admin/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-technical-admin' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteTechnicalAdmin(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/technical-admin/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async activateTechnicalAdmin(id, payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/technical-admin/active/${id}`, payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

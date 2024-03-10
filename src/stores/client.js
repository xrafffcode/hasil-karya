import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useClientStore = defineStore({
  id: 'client',
  state: () => ({
    clients: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchClients() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/clients')

        this.clients = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchClient(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/client/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createClient(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/client', payload)

        this.success = response.data.message

        router.push({ name: 'admin-client' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateClient(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/client/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-client' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteClient(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/client/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

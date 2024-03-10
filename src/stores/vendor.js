
import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useVendorStore = defineStore({
  id: 'vendor',
  state: () => ({
    vendors: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchVendors() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/vendors')

        this.vendors = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchVendor(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/vendor/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createVendor(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/vendor', payload)

        this.success = response.data.message

        router.push({ name: 'admin-vendor' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateVendor(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/vendor/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-vendor' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteVendor(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/vendor/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

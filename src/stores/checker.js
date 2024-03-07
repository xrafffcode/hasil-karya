import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useCheckerStore = defineStore({
  id: 'checker',
  state: () => ({
    checkers: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchCheckers() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/checkers')

        this.checkers = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchChecker(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/checker/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createChecker(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/checker', payload)

        this.success = response.data.message

        router.push({ name: 'admin-checker' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateChecker(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/checker/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-checker' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteChecker(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/checker/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async activateChecker(id, payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/checker/active/${id}`, payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

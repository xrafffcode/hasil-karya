import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useGasOperatorStore = defineStore({
  id: 'gasOperator',
  state: () => ({
    gasOperators: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchGasOperators() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/gas-operators')

        this.gasOperators = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchGasOperator(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/gas-operator/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createGasOperator(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/gas-operator', payload)

        this.success = response.data.message

        router.push({ name: 'admin-gas-operator' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateGasOperator(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/gas-operator/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-gas-operator' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteGasOperator(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/gas-operator/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async activateGasOperator(id, payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/gas-operator/active/${id}`, payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

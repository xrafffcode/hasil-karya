import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useMaterialMovementStore = defineStore({
  id: 'materialMovement',
  state: () => ({
    movements: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMaterialMovements() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/material-movements')

        response.data.data.forEach(movement => {
          movement.truck.name = `${movement.truck.brand} ${movement.truck.model}`
        })

        this.movements = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchMaterialMovement(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/material-movement/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createMaterialMovement(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/material-movement', payload)

        this.success = response.data.message

        router.push({ name: 'admin-material-movement' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createMaterialMovementCheckers(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/checker/material-movement/store', payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
        this.error = null
      }
    },
    async updateMaterialMovement(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/material-movement/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-material-movement' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteMaterialMovement(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/material-movement/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

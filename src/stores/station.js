import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useStationStore = defineStore({
  id: 'station',
  state: () => ({
    stations: [],
    categories: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchStations(params) {
      try {
        this.loading = true

        const response = await axiosInstance.get('/stations', { params })

        this.stations = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchStationCategories() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/station/read/categories')

        this.categories = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchStation(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/station/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createStation(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/station', payload)

        this.success = response.data.message

        router.push({ name: 'admin-station' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateStation(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/station/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-station' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteStation(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/station/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async activateStation(id, payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/station/active/${id}`, payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

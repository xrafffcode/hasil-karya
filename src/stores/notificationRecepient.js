import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useNotificationRecepientStore = defineStore({
  id: 'notificationRecepient',
  state: () => ({
    recepients: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchRecepients() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/notification-recepient')

        this.recepients = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchRecepient(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/notification-recepient/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createRecepient(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/notification-recepient', payload)

        this.success = response.data.message

        router.push({ name: 'admin-notification-recepient' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateRecepient(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/notification-recepient/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-notification-recepient' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteRecepient(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/notification-recepient/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async activateRecepient(id, payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/notification-recepient/active/${id}`, payload)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

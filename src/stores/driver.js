import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useDriverStore = defineStore({
    id: 'driver',
    state: () => ({
        drivers: [],
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        async fetchDrivers() {
            try {
                this.loading = true

                const response = await axiosInstance.get('/drivers')

                this.drivers = response.data.data
            } catch (error) {
                this.handleError(error)
            } finally {
                this.loading = false
            }
        },
        async fetchDriver(id) {
            try {
                this.loading = true

                const response = await axiosInstance.get(`/driver/${id}`)

                return response.data.data
            } catch (error) {
                this.handleError(error)
            } finally {
                this.loading = false
            }
        },
        async createDriver(payload) {
            try {
                this.loading = true

                const response = await axiosInstance.post('/driver', payload)

                this.success = response.data.message

                router.push({ name: 'admin-driver' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async updateDriver(payload) {
            try {
                this.loading = true

                const response = await axiosInstance.put(`/driver/${payload.id}`, payload)

                this.success = response.data.message

                router.push({ name: 'admin-driver' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async deleteDriver(id) {
            try {
                this.loading = true

                const response = await axiosInstance.delete(`/driver/${id}`)

                this.success = response.data.message
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async activateDriver(id, payload) {
            try {
                this.loading = true

                const response = await axiosInstance.post(`/driver/activate/${id}`, payload)

                this.success = response.data.message
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        }
    },
})

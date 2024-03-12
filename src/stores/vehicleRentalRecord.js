import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useVehicleRentalRecordStore = defineStore({
  id: 'vehicleRentalRecord',
  state: () => ({
    vehicleRentalRecords: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchVehicleRentalRecords() {
      try {
        this.loading = true
    
        const response = await axiosInstance.get('/vehicle-rental-records')
    
        this.vehicleRentalRecords = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchVehicleRentalRecord(id) {
      try {
        this.loading = true
    
        const response = await axiosInstance.get(`/vehicle-rental-record/${id}`)
    
        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createVehicleRentalRecord(payload) {
      try {
        this.loading = true
    
        const response = await axiosInstance.post('/vehicle-rental-record', payload)
    
        this.success = response.data.message
    
        router.push({ name: 'admin-vehicle-rental-record' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateVehicleRentalRecord(payload) {
      try {
        this.loading = true
    
        const response = await axiosInstance.post(`/vehicle-rental-record/${payload.id}`, payload)
    
        this.success = response.data.message
    
        router.push({ name: 'admin-vehicle-rental-record' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteVehicleRentalRecord(id) {
      try {
        this.loading = true
    
        const response = await axiosInstance.delete(`/vehicle-rental-record/${id}`)
    
        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async paymentVehicleRentalRecord(id, payload) {
      try {
        this.loading = true
    
        const response = await axiosInstance.post(`/vehicle-rental-record/payment/${id}`, payload)
    
        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
    
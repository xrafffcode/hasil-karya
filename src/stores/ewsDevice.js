import router from '@/router'
import { handleError } from '@/helpers/errorHelper'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useEwsDeviceStore = defineStore({
  id: 'ewsDevice',
  state: () => ({
    devices: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchEwsDevices() {
      try {
        this.loading = true
        
        const response = await axios.get('https://ews.hasilkarya.co.id/api/v1/ews-devices', {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })

        this.devices = response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchEwsDevice(id) {
      try {
        this.loading = true

        const response = await axios.get(`https://ews.hasilkarya.co.id/api/v1/ews-device/${id}`, {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })

        return response.data.data
      }
      catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createEwsDevice(payload) {
      try {
        this.loading = true
      
        const response = await axios.post('https://ews.hasilkarya.co.id/api/v1/ews-device', payload, {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })

        this.success = response.data.message
        
        router.push({ name: 'admin-ews-device' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateEwsDevice(payload) {
      try {
        this.loading = true

        const response = await axios.post(`https://ews.hasilkarya.co.id/api/v1/ews-device/${payload.id}`, payload, {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })

        this.success = response.data.message

        router.push({ name: 'admin-ews-device' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteEwsDevice(id) {
      try {
        this.loading = true
  
        const response = await axios.delete(`https://ews.hasilkarya.co.id/api/v1/ews-device/${id}`, {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })

        this.success = response.data.message

        router.push({ name: 'admin-ews-device' })
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

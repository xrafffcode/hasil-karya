import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

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
      

        const response = await fetch('https://ews.hasilkarya.co.id/api/v1/ews-devices', {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })

        const data = await response.json()

        this.devices = data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchEwsDevice(id) {
      try {
        this.loading = true
        
        const response = await fetch(`https://ews.hasilkarya.co.id/api/v1/ews-device/${id}`, {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })

        const data = await response.json()

        return data.data
      }
      catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createEwsDevice(payload) {
      try {
        this.loading = true
        
        fetch('https://ews.hasilkarya.co.id/api/v1/ews-device', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
          body: JSON.stringify(payload),
        })
          .then(response => response.json())
          .then(data => {
            this.success = data.message

            router.push({ name: 'admin-ews-device' })
          })
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateEwsDevice(payload) {
      try {
        this.loading = true
        
        fetch(`https://ews.hasilkarya.co.id/api/v1/ews-device/${payload.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
          body: JSON.stringify(payload),
        })
          .then(response => response.json())
          .then(data => {
            this.success = data.message

            router.push({ name: 'admin-ews-device' })
          })
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteEwsDevice(id) {
      try {
        this.loading = true
        
        fetch(`https://ews.hasilkarya.co.id/api/v1/ews-device/${id}`, {
          method: 'DELETE',
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })
          .then(response => response.json())
          .then(data => {
            this.success = data.message
          })
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

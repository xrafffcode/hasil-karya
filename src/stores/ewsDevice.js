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
        
        fetch('https://ews.hasilkarya.co.id/api/v1/ews-devices', {
          headers: {
            'X-API-KEY': 'CmNrYrcnOVQ92hDd',
          },
        })
          .then(response => response.json())
          .then(data => {
            this.devices = data.data
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

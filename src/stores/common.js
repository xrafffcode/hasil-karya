import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    datePeriods: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchDatePeriods() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/commons/read/date-periods')

        this.datePeriods = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

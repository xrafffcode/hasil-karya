import { defineStore } from 'pinia'

export const useRegionStore = defineStore({
  id: 'region',
  state: () => ({
    provinces: [],
    regencies: [],
    districts: [],
    subdistricts: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchProvinces() {
      try {
        this.loading = true

        const response = await fetch('../../../src/json/provinces.json')
        
        const provinces = await response.json()

        this.provinces = provinces
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchRegencies(provinceId) {
      try {
        this.loading = true
    
        const response = await fetch(`../../../src/json/regencies/${provinceId}.json`)
            
        const regencies = await response.json()

        this.regencies = regencies
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchDistricts(regencyId) {
      try {
        this.loading = true
    
        const response = await fetch(`../../../src/json/districts/${regencyId}.json`)
            
        const districts = await response.json()

        this.districts = districts
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchSubdistricts(districtId) {
      try {
        this.loading = true
    
        const response = await fetch(`../../../src/json/villages/${districtId}.json`)
            
        const subdistricts = await response.json()

        this.subdistricts = subdistricts
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})

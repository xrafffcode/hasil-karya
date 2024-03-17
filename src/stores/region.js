import axios from '@axios'
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

        const response = await axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      

        this.provinces = response.data.provinsi
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchRegencies(provinceId) {
      try {
        this.loading = true
    
        const response = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`)

        this.regencies = response.data.kota_kabupaten

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
    
        const response = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${regencyId}`)

        this.districts = response.data.kecamatan

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
    
        const response = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${districtId}`)

        this.subdistricts = response.data.kelurahan

        this.subdistricts = subdistricts
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})

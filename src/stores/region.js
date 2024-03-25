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

        const response = await fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        const data = await response.json()

        this.provinces = data.provinsi
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchRegencies(provinceId) {
      try {
        this.loading = true

        const response = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`)
        const data = await response.json()

        this.regencies = data.kota_kabupaten
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchDistricts(regencyId) {
      try {
        this.loading = true

        const response = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${regencyId}`)
        const data = await response.json()

        this.districts = data.kecamatan
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchSubdistricts(districtId) {
      try {
        this.loading = true

        const response = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${districtId}`)
        const data = await response.json()

        this.subdistricts = data.kelurahan
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
})

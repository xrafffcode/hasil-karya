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

        fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
          .then(response => response.json())
          .then(data => {
            this.provinces = data.provinsi
          })
          .catch(error => {
            console.error(error)
          })

      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchRegencies(provinceId) {
      try {
        this.loading = true

        fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`)
          .then(response => response.json())
          .then(data => {
            this.regencies = data.kota_kabupaten

            this.regencies = regencies
          })
          .catch(error => {
            console.error(error)
          })
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchDistricts(regencyId) {
      try {
        this.loading = true

        fetch(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${regencyId}`)
          .then(response => response.json())
          .then(data => {
            this.districts = data.kecamatan

            this.districts = districts
          })
          .catch(error => {
            console.error(error)
          })
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchSubdistricts(districtId) {
      try {
        this.loading = true

        fetch(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${districtId}`)
          .then(response => response.json())
          .then(data => {
            this.subdistricts = data.kelurahan

            this.subdistricts = subdistricts
          })
          .catch(error => {
            console.error(error)
          })
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})

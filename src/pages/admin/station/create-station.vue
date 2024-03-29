<script setup>
import { useStationStore } from '@/stores/station' 
import { useRegionStore } from '@/stores/region'
import { useMaterialStore } from '@/stores/material'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

const { categories, loading, error } = storeToRefs(useStationStore())
const { createStation, fetchStationCategories } = useStationStore()

fetchStationCategories()

const { provinces, regencies, districts, subdistricts } = storeToRefs(useRegionStore())
const { fetchProvinces, fetchRegencies, fetchDistricts, fetchSubdistricts } = useRegionStore()

fetchProvinces()

const { materials } = storeToRefs(useMaterialStore())
const { fetchMaterials } = useMaterialStore()

fetchMaterials()

const code = ref('AUTO')
const name = ref('')
const province = ref('')
const regency = ref('')
const district = ref('')
const subdistrict = ref('')
const address = ref('')
const category = ref('')
const material_id = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  province.value = ''
  regency.value = ''
  district.value = ''
  subdistrict.value = ''
  address.value = ''
  category.value = ''
  material_id.value = ''
}

const handleSubmit = () => {
  const provinceName = provinces.value.find(item => item.id === province.value)?.nama
  const regencyName = regencies.value.find(item => item.id === regency.value)?.nama
  const districtName = districts.value.find(item => item.id === district.value)?.nama
  const subdistrictName = subdistricts.value.find(item => item.id === subdistrict.value)?.nama

  createStation({
    code: code.value,
    name: name.value,
    province: provinceName,
    regency: regencyName,
    district: districtName,
    subdistrict: subdistrictName,
    address: address.value,
    category: category.value,
    material_id: material_id.value,
    is_active: 1,
  })
}

onMounted(() => {
  document.title = 'Tambah Station'
})

onUnmounted(() => {
  handleReset()
  error.value = null
})


watch(province, value => {
  fetchRegencies(value)
})

watch(regency, value => {
  fetchDistricts(value)
})

watch(district, value => {
  fetchSubdistricts(value)
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Station
      </h2>

      <VBtn
        to="/admin/station"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="code"
                label="Kode"
                placeholder="Kode Station"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Station"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="province"
                label="Provinsi"
                :items="provinces"
                :error-messages="error && error.province ? [error.province] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="regency"
                label="Kabupaten/Kota"
                :items="regencies"
                :error-messages="error && error.regency ? [error.regency] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="district"
                label="Kecamatan"
                :items="districts"
                :error-messages="error && error.district ? [error.district] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="subdistrict"
                label="Kelurahan/Desa"
                :items="subdistricts"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="address"
                label="Alamat"
                placeholder="Alamat Station"
                :error-messages="error && error.address ? [error.address] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="category"
                label="Kategori"
                :items="categories"
                item-title="name"
                item-value="name"
                placeholder="Pilih Kategori Station"
                :error-messages="error && error.category ? [error.category] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="material_id"
                label="Material"
                :items="materials"
                :error-messages="error && error.material_id ? [error.material_id] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Simpan
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

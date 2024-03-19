<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Station 
      </h2>

      <VBtn
        :to="{ name: 'admin-station' }"
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

<script setup>
import { useStationStore } from '@/stores/station'
import { useRegionStore } from '@/stores/region'
import { useMaterialStore } from '@/stores/material'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { categories, loading, error } = storeToRefs(useStationStore())
const { fetchStation, fetchStationCategories, updateStation } = useStationStore()

const { materials } = storeToRefs(useMaterialStore())
const { fetchMaterials } = useMaterialStore()

fetchMaterials()

fetchStationCategories()

const { provinces, regencies, districts, subdistricts } = storeToRefs(useRegionStore())
const { fetchProvinces, fetchRegencies, fetchDistricts, fetchSubdistricts } = useRegionStore()


const stationId = route.params.id

const code = ref('AUTO')
const name = ref('')
const province = ref(null)
const regency = ref(null)
const district = ref(null)
const subdistrict = ref(null)
const address = ref('')
const category = ref('')
const material_id = ref('')

const fetchStationData = async () => {
  try {
    const station = await fetchStation(stationId)

    code.value = station.code
    name.value = station.name
    province.value = provinces.value.find(item => item.nama === station.province)?.id

    await fetchRegencies(province.value)
    
    regency.value = regencies.value.find(item => item.nama === station.regency)?.id

    await fetchDistricts(regency.value)

    district.value = districts.value.find(item => item.nama === station.district)?.id

    await fetchSubdistricts(district.value)

    subdistrict.value = subdistricts.value.find(item => item.nama === station.subdistrict)?.id

    address.value = station.address
    category.value = station.category
    material_id.value = station.material.id
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchStationData()

  document.title = 'Edit Station'
})

const handleSubmit = () => {
  const provinceName = provinces.value.find(item => item.id === province.value)?.nama
  const regencyName = regencies.value.find(item => item.id === regency.value)?.nama
  const districtName = districts.value.find(item => item.id === district.value)?.nama
  const subdistrictName = subdistricts.value.find(item => item.id === subdistrict.value)?.nama


  updateStation({
    id: stationId,
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

fetchProvinces()


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

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

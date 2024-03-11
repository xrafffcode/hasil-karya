<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Station
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
        <VForm>
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
                :disabled="loading"
                :loading="loading"
                readonly
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
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>
            
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="province"
                label="Provinsi"
                placeholder="Provinsi"
                :error-messages="error && error.province ? [error.province] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="regency"
                label="Kabupaten/Kota"
                placeholder="Kabupaten/Kota"
                :error-messages="error && error.regency ? [error.regency] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="district"
                label="Kecamatan"
                placeholder="Kecamatan"
                :error-messages="error && error.district ? [error.district] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="subdistrict"
                label="Kelurahan/Desa"
                placeholder="Kelurahan/Desa"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []"
                :disabled="loading"
                :loading="loading"
                readonly
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
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="category"
                label="Kategori"
                placeholder="Kategori Station"
                :error-messages="error && error.category ? [error.category] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="material"
                label="Material"
                placeholder="Material Station"
                :error-messages="error && error.material ? [error.material] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useStationStore } from '@/stores/station' // assuming you have a station store
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useStationStore())
const { fetchStation } = useStationStore()


const stationId = route.params.id

const code = ref('')
const name = ref('')
const province = ref(null)
const regency = ref(null)
const district = ref(null)
const subdistrict = ref(null)
const category = ref('')
const material = ref('')


const fetchStationData = async () => {
  try {
    const station = await fetchStation(stationId)


    code.value = station.code
    name.value = station.name
    province.value = station.province
    regency.value =   station.regency
    district.value = station.district
    subdistrict.value = station.subdistrict
    category.value = station.category
    material.value = station.material.name
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchStationData()

  document.title = 'Station'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Client
      </h2>

      <VBtn
        :to="{ name: 'admin-client' }"
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
                placeholder="Kode Client"
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
                placeholder="Nama Client"
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
                placeholder="Alamat"
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
                v-model="phone"
                label="Telepon"
                placeholder="Telepon"
                :error-messages="error && error.phone ? [error.phone] : []"
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
                v-model="email"
                label="Email"
                placeholder="Email"
                :error-messages="error && error.email ? [error.email] : []"
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
import { useClientStore } from '@/stores/client'
import { useRegionStore } from '@/stores/region'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useClientStore())
const { fetchClient } = useClientStore()

const { provinces, regencies, districts, subdistricts } = storeToRefs(useRegionStore())
const { fetchProvinces, fetchRegencies, fetchDistricts, fetchSubdistricts } = useRegionStore()

fetchProvinces()


const clientId = route.params.id

const code = ref('')
const name = ref('')
const province = ref(null)
const regency = ref(null)
const district = ref(null)
const subdistrict = ref(null)
const address = ref('')
const phone = ref('')
const email = ref('')

const fetchClientData = async () => {
  try { 

    const client = await fetchClient(clientId)

    const provinceName = provinces.value.find(item => item.id === client.province)?.name
    
    fetchRegencies(client.province)

    const regencyName = regencies.value.find(item => item.id === client.regency)?.name

    fetchDistricts(client.regency)

    const districtName = districts.value.find(item => item.id === client.district)?.name

    fetchSubdistricts(client.district)

    const subdistrictName = subdistricts.value.find(item => item.id === client.subdistrict)?.name
    

    code.value = client.code
    name.value = client.name
    province.value = provinceName
    regency.value = regencyName
    district.value = districtName
    subdistrict.value = subdistrictName
    address.value = client.address
    phone.value = client.phone
    email.value = client.email
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchClientData()

  document.title = 'Client'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

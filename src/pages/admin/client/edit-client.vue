<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Client
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
        <VForm @submit.prevent="handleSubmit">
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
                :item-title="item => item.nama"
                :item-value="item => item.id"
                placeholder="Provinsi"
                :error-messages="error && error.province ? [error.province] : []"
                :disabled="loading"
                :loading="loading"
                clearable
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
                :item-title="item => item.nama"
                :item-value="item => item.id"
                placeholder="Kabupaten/Kota"
                :error-messages="error && error.regency ? [error.regency] : []"
                :disabled="loading"
                :loading="loading"
                clearable
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
                :item-title="item => item.nama"
                :item-value="item => item.id"
                placeholder="Kecamatan"
                :error-messages="error && error.district ? [error.district] : []"
                :disabled="loading"
                :loading="loading"
                clearable
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
                :item-title="item => item.nama" 
                :item-value="item => item.id"
                placeholder="Kelurahan/Desa"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []"
                :disabled="loading"
                :loading="loading"
                clearable
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="address"
                label="Alamat"
                placeholder="Alamat Client"
                :error-messages="error && error.address ? [error.address] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="phone"
                label="Telepon"
                placeholder="Telepon Client"
                :error-messages="error && error.phone ? [error.phone] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="email"
                label="Email"
                placeholder="Email Client"
                :error-messages="error && error.email ? [error.email] : []"
                :disabled="loading"
                :loading="loading"
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
                type="reset"
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
import { useClientStore } from '@/stores/client'
import { useRegionStore } from '@/stores/region'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { VTextarea } from 'vuetify/lib/components/index.mjs'

const route = useRoute()

const { loading, error } = storeToRefs(useClientStore())
const { fetchClient, updateClient } = useClientStore()

const { provinces, regencies, districts, subdistricts } = storeToRefs(useRegionStore())
const { fetchProvinces, fetchRegencies, fetchDistricts, fetchSubdistricts } = useRegionStore()

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

    code.value = client.code
    name.value = client.name
    province.value = provinces.value.find(item => item.nama === client.province)?.id

    await fetchRegencies(province.value)

    regency.value = regencies.value.find(item => item.nama === client.regency)?.id

    await fetchDistricts(regency.value)

    district.value = districts.value.find(item => item.nama === client.district)?.id

    await fetchSubdistricts(district.value)

    subdistrict.value = subdistricts.value.find(item => item.nama === client.subdistrict)?.id

    address.value = client.address
    phone.value = client.phone
    email.value = client.email
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchClientData()

  document.title = 'Edit Client'
})

const handleSubmit = () => {
  const provinceName = provinces.value.find(item => item.id === province.value)?.nama
  const regencyName = regencies.value.find(item => item.id === regency.value)?.nama
  const districtName = districts.value.find(item => item.id === district.value)?.nama
  const subdistrictName = subdistricts.value.find(item => item.id === subdistrict.value)?.nama

  updateClient({
    id: clientId,
    code: code.value,
    name: name.value,
    province: provinceName,
    regency: regencyName,
    district: districtName,
    subdistrict: subdistrictName,
    address: address.value,
    phone: phone.value,
    email: email.value,
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

const handleReset = () => {
  fetchClientData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

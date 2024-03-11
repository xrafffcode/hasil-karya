<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Alat Berat
      </h2>

      <VBtn
        :to="{ name: 'admin-heavy-vehicle' }"
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
                placeholder="Kode Alat Berat"
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
                v-model="brand"
                label="Merk"
                placeholder="Merk Alat Berat"
                :error-messages="error && error.brand ? [error.brand] : []"
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
                v-model="model"
                label="Model"
                placeholder="Model Alat Berat"
                :error-messages="error && error.model ? [error.model] : []"
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
                v-model="production_year"
                label="Tahun Produksi"
                placeholder="Tahun Produksi Alat Berat"
                :error-messages="error && error.production_year ? [error.production_year] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="vendor_id"
                label="Vendor"
                placeholder="Vendor Alat Berat"
                :error-messages="error && error.vendor_id ? [error.vendor_id] : []"
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
import { useHeavyVehicleStore } from '@/stores/heavyVehicle' 
import { useVendorStore } from '@/stores/vendor'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useHeavyVehicleStore())
const { fetchHeavyVehicle } = useHeavyVehicleStore()

const heavyVehicleId = route.params.id

const code = ref('')
const brand = ref('')
const model = ref('')
const production_year = ref('')
const vendor_id = ref()
const is_active = ref(1)

const fetchHeavyVehicleData = async () => {
  try {
    const heavyVehicle = await fetchHeavyVehicle(heavyVehicleId)

    code.value = heavyVehicle.code
    brand.value = heavyVehicle.brand
    model.value = heavyVehicle.model
    production_year.value = heavyVehicle.production_year
    vendor_id.value = heavyVehicle.vendor.name
    is_active.value = heavyVehicle.is_active
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchHeavyVehicleData()

  document.title = 'Alat Berat'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

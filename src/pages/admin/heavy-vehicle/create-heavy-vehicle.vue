<script setup>
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { useVendorStore } from '@/stores/vendor'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useHeavyVehicleStore())
const { createHeavyVehicle } = useHeavyVehicleStore()

const { vendors } = storeToRefs(useVendorStore())
const { fetchVendors } = useVendorStore()

fetchVendors()


const code = ref('AUTO')
const brand = ref('')
const model = ref('')
const capacity = ref(0)
const production_year = ref('')
const vendor_id = ref()
const is_active = ref(1)

const handleReset = () => {
  code.value = 'AUTO'
  brand.value = ''
  model.value = ''
  capacity.value = 0
  production_year.value = ''
  vendor_id.value = 0
  is_active.value = 1  
}

const handleSubmit = () => {
  createHeavyVehicle({
    code: code.value,
    brand: brand.value,
    model: model.value,
    capacity: capacity.value,
    production_year: production_year.value,
    vendor_id: vendor_id.value,
    is_active: is_active.value,
  })
}

onMounted(() => {
  document.title = 'Tambah Alat Berat'
})

onUnmounted(() => {
  handleReset()
  error.value = null
})
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Alat Berat
      </h2>

      <VBtn
        to="/admin/heavy-vehicle"
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
                placeholder="Kode Checker"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="brand"
                label="Merk"
                placeholder="Merk"
                :error-messages="error && error.brand ? [error.brand] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="model"
                label="Model"
                placeholder="Model"
                :error-messages="error && error.model ? [error.model] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="production_year"
                label="Tahun Produksi"
                placeholder="Tahun Produksi"
                :error-messages="error && error.production_year ? [error.production_year] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="vendor_id"
                :items="vendors"
                :item-title="item => item.name"
                :item-value="item => item.id"
                label="Vendor"
                placeholder="Vendor"
                :error-messages="error && error.vendor_id ? [error.vendor_id] : []"
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

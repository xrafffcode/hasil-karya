<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Alat Berat 
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
              md="6"
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
              md="6"
            >
              <VTextField
                v-model="capacity"
                label="Kapasitas"
                placeholder="Kapasitas"
                :error-messages="error && error.capacity ? [error.capacity] : []"
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
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { useVendorStore } from '@/stores/vendor'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useHeavyVehicleStore())
const { fetchHeavyVehicle, updateHeavyVehicle } = useHeavyVehicleStore()

const { vendors } = storeToRefs(useVendorStore())
const { fetchVendors } = useVendorStore()

fetchVendors()

const heavyVehicleId = route.params.id

const code = ref('AUTO')
const brand = ref('')
const model = ref('')
const capacity = ref(0)
const production_year = ref('')
const vendor_id = ref()
const is_active = ref(1)

const fetchHeavyVehicleData = async () => {
  try {
    const heavyVehicle = await fetchHeavyVehicle(heavyVehicleId)

    code.value = heavyVehicle.code
    brand.value = heavyVehicle.brand
    model.value = heavyVehicle.model
    capacity.value = heavyVehicle.capacity
    production_year.value = heavyVehicle.production_year
    vendor_id.value = heavyVehicle.vendor.id
    is_active.value = heavyVehicle.is_active === true ? 1 : 0
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchHeavyVehicleData()

  document.title = 'Edit Alat Berat'
})

const handleSubmit = () => {
  updateHeavyVehicle({
    id: heavyVehicleId,
    code: code.value,
    brand: brand.value,
    model: model.value,
    capacity: capacity.value,
    production_year: production_year.value,
    vendor_id: vendor_id.value,
    is_active: is_active.value,
  })
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

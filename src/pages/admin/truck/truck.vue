<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Truck <!-- Changed title to Truck -->
      </h2>

      <VBtn
        :to="{ name: 'admin-truck' }"
        color="primary"
      >
        <!-- Update the route -->
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
                placeholder="Kode Truck"
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
                placeholder="Merk Truck"
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
                placeholder="Model Truck"
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
                placeholder="Tahun Produksi Truck"
                :error-messages="error && error.production_year ? [error.production_year] : []"
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
                v-model="vendor_id"
                label="Vendor"
                placeholder="Vendor Truck"
                :error-messages="error && error.vendor_id ? [error.vendor_id] : []"
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
                v-model="capacity"
                label="Kapasitas"
                placeholder="Kapasitas Truck"
                :error-messages="error && error.capacity ? [error.capacity] : []"
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
import { useTruckStore } from '@/stores/truck' 
import { useVendorStore } from '@/stores/vendor'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useTruckStore())
const { fetchTruck } = useTruckStore()

const truckId = route.params.id

const code = ref('')
const brand = ref('')
const model = ref('')
const capacity = ref(0)
const production_year = ref('')
const vendor_id = ref()
const is_active = ref(1)

const fetchTruckData = async () => {
  try {
    const truck = await fetchTruck(truckId)

    code.value = truck.code
    brand.value = truck.brand
    model.value = truck.model
    capacity.value = truck.capacity
    production_year.value = truck.production_year
    vendor_id.value = truck.vendor.name
    is_active.value = truck.is_active
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchTruckData()

  document.title = 'Truck'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

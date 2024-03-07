<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Truck <!-- Changed title to Truck -->
      </h2>

      <VBtn :to="{ name: 'admin-truck' }" color="primary"> <!-- Update the route -->
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="code" label="Kode" placeholder="Kode Truck"
                :error-messages="error && error.code ? [error.code] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Nama" placeholder="Nama Truck"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="capacity" label="Kapasitas" placeholder="Kapasitas Truck"
                :error-messages="error && error.capacity ? [error.capacity] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useTruckStore } from '@/stores/truck'; // assuming you have a truck store
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useTruckStore())
const { fetchTruck } = useTruckStore()

const truckId = route.params.id

const code = ref('')
const name = ref('')
const capacity = ref(0)

const fetchTruckData = async () => {
  try {
    const truck = await fetchTruck(truckId)

    code.value = truck.code
    name.value = truck.name
    capacity.value = truck.capacity
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

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Truck <!-- Changed title to Edit Truck -->
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
        <VForm @submit.prevent="handleSubmit">
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
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Truck"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="capacity"
                label="Kapasitas"
                placeholder="Kapasitas Truck"
                :error-messages="error && error.capacity ? [error.capacity] : []"
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
import { useTruckStore } from '@/stores/truck' // assuming you have a truck store
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useTruckStore())
const { fetchTruck, updateTruck } = useTruckStore()

const truckId = route.params.id

const code = ref('')
const name = ref('')
const capacity = ref(0)
const is_active = ref(0)

const fetchTruckData = async () => {
  try {
    const truck = await fetchTruck(truckId)

    code.value = truck.code
    name.value = truck.name
    capacity.value = truck.capacity
    is_active.value = truck.is_active === true ? 1 : 0
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchTruckData()

  document.title = 'Edit Truck'
})

const handleSubmit = () => {
  updateTruck({
    id: truckId,
    code: code.value,
    name: name.value,
    capacity: capacity.value,
    is_active: is_active.value,
  })
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Edit Station <!-- Changed title to Edit Station -->
      </h2>

      <VBtn :to="{ name: 'admin-station' }" color="primary"> <!-- Update the route -->
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="code" label="Kode" placeholder="Kode Station"
                :error-messages="error && error.code ? [error.code] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Nama" placeholder="Nama Station"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="category" label="Kategori" placeholder="Kategori Station"
                :error-messages="error && error.category ? [error.category] : []" :disabled="loading"
                :loading="loading" />
            </VCol>

            <VCol cols="12" class="d-flex gap-4">
              <VBtn type="submit" :loading="loading" color="primary">
                Simpan
              </VBtn>

              <VBtn type="reset" color="secondary" variant="tonal" @click="handleReset">
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
import { useStationStore } from '@/stores/station'; // assuming you have a station store
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useStationStore())
const { fetchStation, updateStation } = useStationStore()

const stationId = route.params.id

const code = ref('')
const name = ref('')
const category = ref('')

const fetchStationData = async () => {
  try {
    const station = await fetchStation(stationId)

    code.value = station.code
    name.value = station.name
    category.value = station.category
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchStationData()

  document.title = 'Edit Station'
})

const handleSubmit = () => {
  updateStation({
    id: stationId,
    code: code.value,
    name: name.value,
    category: category.value,
    is_active: 1
  })
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

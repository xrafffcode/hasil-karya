<script setup>
import { useStationStore } from '@/stores/station' // Assuming you have a station store
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

const { categories, loading, error } = storeToRefs(useStationStore())
const { createStation, fetchStationCategories } = useStationStore()

fetchStationCategories()


const code = ref('AUTO')
const name = ref('')
const category = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  category.value = ''
}

const handleSubmit = () => {
  createStation({
    code: code.value,
    name: name.value,
    category: category.value,
    is_active: 1,
  })
}

onMounted(() => {
  document.title = 'Tambah Station'
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
        Tambah Station
      </h2>

      <VBtn
        to="/admin/station"
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
                placeholder="Kode Station"
                :error-messages="error && error.code ? [error.code] : []"
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
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VSelect
                v-model="category"
                label="Kategori"
                :items="categories"
                item-title="name"
                item-value="name"
                placeholder="Pilih Kategori Station"
                :error-messages="error && error.category ? [error.category] : []"
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

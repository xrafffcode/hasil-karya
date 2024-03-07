<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Driver
      </h2>

      <VBtn
        :to="{ name: 'admin-driver' }"
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
                placeholder="Kode Checker"
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
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useDriverStore } from '@/stores/driver'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useDriverStore())
const { fetchDriver } = useDriverStore()

const driverId = route.params.id

const code = ref('')
const name = ref('')


const fetchDriverData = async () => {
  try {
    const driver = await fetchDriver(driverId)

    code.value = driver.code
    name.value = driver.name
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchDriverData()

  document.title = 'Driver'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

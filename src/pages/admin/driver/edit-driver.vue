<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Driver
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
import { useDriverStore } from '@/stores/driver'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useDriverStore())
const { fetchDriver, updateDriver } = useDriverStore()

const driverId = route.params.id

const code = ref('')
const name = ref('')
const is_active = ref(0)

const fetchDriverData = async () => {
  try {
    const driver = await fetchDriver(driverId)

    code.value = driver.code
    name.value = driver.name
    is_active.value = driver.is_active === true ? 1 : 0
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchDriverData()

  document.title = 'Edit Driver'
})

const handleSubmit = () => {
  updateDriver({
    id: driverId,
    code: code.value,
    name: name.value,
    is_active: is_active.value,
  })
}

const handleReset = () => {
  fetchDriverData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

<script setup>
import { useDriverStore } from '@/stores/driver'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useDriverStore())
const { createDriver } = useDriverStore()

const code = ref('AUTO')
const name = ref('')


const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
}

const handleSubmit = () => {
  createDriver({
    code: code.value,
    name: name.value,
    is_active: 1,
  })
}

onMounted(() => {
  document.title = 'Tambah Driver'
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
        Tambah Driver
      </h2>

      <VBtn
        to="/admin/driver"
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
                v-model="name"
                label="Nama"
                placeholder="Nama Client"
                :error-messages="error && error.name ? [error.name] : []"
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

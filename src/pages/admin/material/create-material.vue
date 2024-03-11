<script setup>
import { useMaterialStore } from '@/stores/material'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

const { loading, error } = storeToRefs(useMaterialStore())
const { createMaterial } = useMaterialStore()

const code = ref('AUTO')
const name = ref('')


const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
}

const handleSubmit = () => {
  createMaterial({
    code: code.value,
    name: name.value,
  })
}

onMounted(() => {
  document.title = 'Tambah Material'
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
        Tambah Material
      </h2>

      <VBtn
        to="/admin/material"
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
                placeholder="Kode Material"
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
                placeholder="Nama Material"
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

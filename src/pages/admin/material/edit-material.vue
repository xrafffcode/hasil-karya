<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Material
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
                placeholder="Nama Material"
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
import { useMaterialStore } from '@/stores/material'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useMaterialStore())
const { fetchMaterial, updateMaterial } = useMaterialStore()

const materialId = route.params.id

const code = ref('')
const name = ref('')

const fetchMaterialData = async () => {
  try {
    const material = await fetchMaterial(materialId)

    code.value = material.code
    name.value = material.name
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchMaterialData()

  document.title = 'Edit Material'
})

const handleSubmit = () => {
  updateMaterial({
    id: materialId,
    code: code.value,
    name: name.value,
  })
}

const handleReset = () => {
  code.value = ''
  name.value = ''
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

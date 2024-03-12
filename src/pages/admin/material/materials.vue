<script setup>
import { useMaterialStore } from '@/stores/material'

const headers = [
  {
    text: 'Kode',
    value: 'code',
    width: 200,
  },
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { materials, loading, error, success } = storeToRefs(useMaterialStore())
const { fetchMaterials, deleteMaterial } = useMaterialStore()

fetchMaterials()

async function handleDeleteMaterial(material) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus material ini?')
  if (confirmed) {
    await deleteMaterial(material.id)
    fetchMaterials()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Material'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VDialog
    v-if="success"
    v-model="success"
    max-width="400"
  >
    <VCard>
      <VCardText>{{ success }}</VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (success = null)"
        >
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Material
      </h2>
      <VBtn
        to="/admin/material/create"
        color="primary"
      >
        Tambah Material
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Material"
        placeholder="Cari Material"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="materials"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #loading>
            <img
              src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
              style="width: 100px; height: 80px;"
            >
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-material-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-material-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteMaterial(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

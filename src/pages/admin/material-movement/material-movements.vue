<script setup>
import { useMaterialMovementStore } from '@/stores/materialMovement'

const headers = [
  {
    text: 'Tanggal',
    value: 'formatted_date',
  }, 
  {
    text: 'Driver',
    value: 'driver.name',
  },
  {
    text: 'Truck',
    value: 'truck.name',
  },
  {
    text: 'POS',
    value: 'station.name',
  },
  {
    text: 'Pemeriksa',
    value: 'checker.name',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { movements, loading, error, success } = storeToRefs(useMaterialMovementStore())
const { fetchMaterialMovements, deleteMaterialMovement } = useMaterialMovementStore()

fetchMaterialMovements()

async function handleDeleteMaterialMovement(materialMovement) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus Perpindahan material ini?')
  if (confirmed) {
    await deleteMaterialMovement(materialMovement.id)
    fetchMaterialMovements()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Material Movement'
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
      <VCardText>
        {{ success }}
      </VCardText>
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
        Perpindahan Material
      </h2>

      <VBtn
        :to="{ name: 'admin-material-movement-create' }"
        color="primary"
      >
        Tambah Perpindahan Material
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Perpindahan Material"
        placeholder="Cari Perpindahan Material"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="movements"
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
              :to="{ name: 'admin-material-movement-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-material-movement-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteMaterialMovement(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

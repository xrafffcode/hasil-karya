<script setup>
import { useMaterialMovementStore } from '@/stores/materialMovement'
import { toNumeral, toPercentage } from '@/@core/utils/formatters'

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
    text: 'Material',
    value: 'station.material.name',
  },
  {
    text: 'Pemeriksa',
    value: 'checker.name',
  },
  {
    text: 'Presentase Rasio Index',
    value: 'observation_ratio_percentage',
  },
  {
    text: 'Kapasitas Truk',
    value: 'truck_capacity',
  },
  {
    text: 'Rasio Index',
    value: 'observation_ratio_number',
  },
  {
    text: 'Rasio Padat',
    value: 'solid_ratio',
  },
  {
    text: 'Estimasi Volume',
    value: 'solid_volume_estimate',
  },
  {
    text: 'Keterangan',
    value: 'remarks',
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
          <template #item-observation_ratio_percentage="item">
            {{ toPercentage(item.observation_ratio_percentage) }}
          </template>
          
          <template #item-truck_capacity="item">
            {{ toNumeral(item.truck_capacity) }} m³
          </template>

          <template #item-observation_ratio_number="item">
            {{ toNumeral(item.observation_ratio_number) }} m³
          </template>

          <template #item-solid_ratio="item">
            {{ toPercentage(item.solid_ratio) }}
          </template>

          <template #item-solid_volume_estimate="item">
            {{ toNumeral(item.solid_volume_estimate) }} m³
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

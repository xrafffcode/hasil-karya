<script setup>
import { useMaterialMovementErrorLogStore } from '@/stores/materialMovementErrorLog'
import { onUnmounted, onMounted } from 'vue'


const headers = [
  {
    text: 'Tanggal',
    value: 'date',
  },
  {
    text: 'Driver',
    value: 'driver_id',
  },
  {
    text: 'Truck',
    value: 'truck_id',
  },
  {
    text: 'POS',
    value: 'station_id',
  },
  {
    text: 'Pemeriksa',
    value: 'checker_id',
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

const { movement, loading, error, success } = useMaterialMovementErrorLogStore()
const { fetchMaterialMovementErrorLogs } = useMaterialMovementErrorLogStore()

fetchMaterialMovementErrorLogs()

const search = ref('')

onMounted(() => {
  document.title = 'Error Logs Perpindahan Material'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VDialog v-if="success" v-model="success" max-width="400">
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn color="primary" @click="() => (success = null)">
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Error Logs Perpindahan Material
      </h2>
    </VCol>

    <VBtn :to="{ name: 'material-movement-error-log-create' }" color="primary">
      Tambah Error Log Perpindahan Material
    </VBtn>

    <VCol cols="12">
      <VTextField v-model="search" label="Cari Error Log Perpindahan Material"
        placeholder="Cari Error Log Perpindahan Material" clearable :loading="loading" variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="movement" :loading="loading" :search-value="search" button-pagination
          show-index class="data-table">
          <template #item-date="item">
            {{ item.date }}
          </template>

          <template #item-observation_ratio_percentage="item">
            {{ item.observation_ratio_percentage }}
          </template>

          <template #item-truck_capacity="item">
            {{ item.truck_capacity }} m³
          </template>

          <template #item-observation_ratio_number="item">
            {{ item.observation_ratio_number }} m³
          </template>

          <template #item-solid_ratio="item">
            {{ item.solid_ratio }}
          </template>

          <template #item-solid_volume_estimate="item">
            {{ item.solid_volume_estimate }} m³
          </template>

          <template #item-operation="item">
            <VBtn :to="{ name: 'material-movement-error-log-view', params: { id: item.id } }" color="info" size="small">
              Lihat
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup>
import { useFuelLogStore } from '@/stores/fuelLog'

const headers = [
  {
    text: 'Kode',
    value: 'code',
    width: 200,
  },
  {
    text: 'Tanggal',
    value: 'date',
  },
  {
    text: 'Kendaraan',
    value: 'vehicle',
  },
  {
    text: 'Jumlah Liter',
    value: 'volume',
  },
  {
    text: 'Operator',
    value: 'gas_operator.name',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { fuelLogs, loading, error, success } = storeToRefs(useFuelLogStore())
const { fetchFuelLogs, deleteFuelLog } = useFuelLogStore()

fetchFuelLogs()

async function handleDeleteFuelLog(fuelLogTruck) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus fuel log truck ini?')
  if (confirmed) {
    await deleteFuelLog(fuelLogTruck.id)
    fetchFuelLogs()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Cek Log BBM'
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
        Pencatatan BBM Kendaraan
      </h2>

      <VBtn
        to="/admin/fuel-log/create"
        color="primary"
      >
        Tambah Log BBM Truck
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Log"
        placeholder="Cari Log"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="fuelLogs"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-vehicle="item">
            <span v-if="item.truck">{{ item.truck.brand }} {{ item.truck.model }}</span>
            <span v-if="item.heavy_vehicle">{{ item.heavy_vehicle.brand }} {{ item.heavy_vehicle.model }}</span>
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-fuel-log-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-fuel-log-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteFuelLog(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

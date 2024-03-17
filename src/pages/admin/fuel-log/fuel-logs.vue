<script setup>
import { useFuelLogStore } from '@/stores/fuelLog'
import { toNumeral, formatDate } from '@/@core/utils/formatters'

const headers = [
  {
    text: 'Kode',
    value: 'code',
  },
  {
    text: 'Tanggal',
    value: 'date',
  },
  {
    text: 'Jenis Kendaraan',
    value: 'type',
  },
  {
    text: 'Kendaraan',
    value: 'vehicle',
  },
  {
    text: 'Volume (L)',
    value: 'volume',
  },
  {
    text: 'Solar Man',
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

      <div class="d-flex align-items-center">
        <VBtn
          to="/admin/fuel-log-truck/create"
          color="primary"
          class="mr-5"
        >
          Tambah Pencatatan Truk
        </VBtn>

        <VBtn
          to="/admin/fuel-log-heavy-vehicle/create"
          color="primary"
        >
          Tambah Pencatatan Kendaraan Berat
        </VBtn>
      </div>
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
          <template #item-date="item">
            {{ formatDate(item.date) }}
          </template>

          <template #item-type="item">
            <span v-if="item.truck">
              Truk <br>
              (KM {{ toNumeral(item.odometer) }})
            </span>
            <span v-if="item.heavy_vehicle">
              Kendaraan Berat <br>
              (HM {{ toNumeral(item.hourmeter) }})
            </span>
          </template>

          <template #item-vehicle="item">
            <span v-if="item.truck">{{ item.truck.brand }} {{ item.truck.model }}</span>
            <span v-if="item.heavy_vehicle">{{ item.heavy_vehicle.brand }} {{ item.heavy_vehicle.model
            }}</span>
          </template>

          <template #item-volume="item">
            {{ toNumeral(item.volume) }}
          </template>
          
          <template #item-operation="item">
            <VBtn
              v-if="item.truck"
              :to="{ name: 'admin-fuel-log-truck-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="item.heavy_vehicle"
              :to="{ name: 'admin-fuel-log-heavy-vehicle-edit', params: { id: item.id } }"
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

<script setup>
import { useVehicleRentalRecordStore } from '@/stores/vehicleRentalRecord' 
import { toRupiah } from '@/@core/utils/formatters'

const headers = [
  {
    text: 'Kode',
    value: 'code',
    width: 100,
  },
  {
    text: 'Nama Truk/Alat Berat',
    value: 'brand',
  },
  {
    text: 'Tanggal Sewa',
    value: 'start_date',
  },
  {
    text: 'Lama Sewa',
    value: 'rental_duration',
  },
  {
    text: 'Tanggal Kembali',
    value: 'end_date',
  },
  {
    text: 'Harga Sewa',
    value: 'rental_cost',
  },
  {
    text: 'Status Bayar',
    value: 'is_paid',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { vehicleRentalRecords, loading, error, success } = storeToRefs(useVehicleRentalRecordStore())
const { fetchVehicleRentalRecords, deleteVehicleRentalRecord, paymentVehicleRentalRecord } = useVehicleRentalRecordStore()

fetchVehicleRentalRecords()

async function handleDeleteVehicleRentalRecord(record) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus catatan penyewaan kendaraan ini?')
  if (confirmed) {
    await deleteVehicleRentalRecord(record.id)
    fetchVehicleRentalRecords()
  }
}

async function handlePaymentVehicleRentalRecord(record) {
  const formData = new FormData()

  formData.append('is_paid', record.is_paid ? 1 : 0)
  await paymentVehicleRentalRecord(record.id, formData)
  fetchVehicleRentalRecords()
}

const search = ref('')

onMounted(() => {
  document.title = 'Catatan Penyewaan Kendaraan'
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
        Catatan Penyewaan Kendaraan
      </h2>

      <VBtn
        :to="{ name: 'admin-vehicle-rental-record-create' }"
        color="primary"
      >
        Tambah Catatan Penyewaan Kendaraan
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Catatan Penyewaan Kendaraan"
        placeholder="Cari Catatan Penyewaan Kendaraan"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="vehicleRentalRecords"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
        >
          <template #loading>
            <img
              src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
              style="width: 100px; height: 80px;"
            >
          </template>
          <template #item-brand="item">
            <span v-if="item.truck">{{ item.truck.brand }} {{ item.truck.model }}</span>
            <span v-if="item.heavy_vehicle">{{ item.heavy_vehicle.brand }} {{ item.heavy_vehicle.model }}</span>
          </template>
          <template #item-rental_cost="item">
            {{ toRupiah(item.rental_cost) }}
          </template>
          <template #item-is_paid="item">
            <VSwitch
              v-model="item.is_paid"
              color="primary"
              @change="() => handlePaymentVehicleRentalRecord(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-vehicle-rental-record-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-vehicle-rental-record-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteVehicleRentalRecord(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
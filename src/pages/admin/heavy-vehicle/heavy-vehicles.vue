<script setup>
import { downloadQRCode } from '@/helpers/qrHelper'
import { useHeavyVehicleStore } from '@/stores/heavyVehicle' // Assuming you have a Alat Berat store

const headers = [
  {
    text: 'Kode',
    value: 'code',
    width: 200,
  },
  {
    text: 'Merek',
    value: 'brand',
  },
  {
    text: 'Model',
    value: 'model',
  },
  {
    text: 'Tahun Produksi',
    value: 'production_year',
  },
  {
    text: 'Vendor',
    value: 'vendor.name',
  },
  {
    text: 'Aktif',
    value: 'is_active',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 400,
  },
]

const { heavyVehicles, loading, error, success } = storeToRefs(useHeavyVehicleStore())
const { fetchHeavyVehicles, deleteHeavyVehicle, activateHeavyVehicle } = useHeavyVehicleStore()

fetchHeavyVehicles()

async function handleDeleteHeavyVehicle(heavyVehicle) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus kendaraan berat ini?')
  if (confirmed) {
    await deleteHeavyVehicle(heavyVehicle.id)
    fetchHeavyVehicles()
  }
}

async function handleActivateHeavyVehicle(heavyVehicle) {
  const formData = new FormData()

  formData.append('is_active', heavyVehicle.is_active ? 1 : 0)
  await activateHeavyVehicle(heavyVehicle.id, formData)
  fetchHeavyVehicles()
}

const search = ref('')

function printQRCode(id, name) {
  downloadQRCode(id, 'Alat Berat ' + name)
}

onMounted(() => {
  document.title = 'Alat Berat'
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
        Alat Berat
      </h2>

      <VBtn
        :to="{ name: 'admin-heavy-vehicle-create' }"
        color="primary"
      >
        Tambah Alat Berat
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Alat Berat"
        placeholder="Cari Alat Berat"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="heavyVehicles"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-is_active="item">
            <VSwitch
              v-model="item.is_active"
              color="primary"
              @change="() => handleActivateHeavyVehicle(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              color="info"
              size="small"
              class="m-5"
              @click="printQRCode(item.id, item.brand + ' ' + item.model)"
            >
              Print QR Code
            </VBtn>
            <VBtn
              :to="{ name: 'admin-heavy-vehicle-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-heavy-vehicle-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteHeavyVehicle(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

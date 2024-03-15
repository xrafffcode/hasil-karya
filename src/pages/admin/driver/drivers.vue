<script setup>
import { downloadQRCode } from '@/helpers/qrHelper'
import { useDriverStore } from '@/stores/driver'

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
    text: 'Aktif',
    value: 'is_active',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 400,
  },
]



const { drivers, loading, error, success } = storeToRefs(useDriverStore())
const { fetchDrivers, deleteDriver, activateDriver } = useDriverStore()

fetchDrivers()

async function handleDeleteDriver(driver) {

  const confirmed = confirm('Apakah Anda yakin ingin menghapus driver ini?')

  if (confirmed) {
    await deleteDriver(driver.id)
    fetchDrivers()
  }
}

async function handleActivateDriver(driver) {
  const formData = new FormData()

  formData.append('is_active', driver.is_active ? 1 : 0)

  await activateDriver(driver.id, formData)

  fetchDrivers()
}


const search = ref('')

function printQRCode(id) {
  downloadQRCode(id)
}

onMounted(() => {
  document.title = 'Driver'
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
        Driver
      </h2>

      <VBtn
        :to="{ name: 'admin-driver-create' }"
        color="primary"
      >
        Tambah Driver
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Driver"
        placeholder="Cari Driver"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="drivers"
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
              @change="() => handleActivateDriver(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              color="info"
              size="small"
              class="m-5"
              @click="printQRCode(item.id)"
            >
              Print QR Code
            </VBtn>
            <VBtn
              :to="{ name: 'admin-driver-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-driver-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteDriver(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useEwsDeviceStore } from '@/stores/ewsDevice'

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
    text: 'Jenis',
    value: 'type',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 400,
  },
]



const { devices, loading, error, success } = storeToRefs(useEwsDeviceStore())
const { fetchEwsDevices, deleteEwsDevice } = useEwsDeviceStore()

fetchEwsDevices()

async function handleDeleteEwsDevice(device) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus device ini?')

  if (confirmed) {
    await deleteEwsDevice(device.id)
    fetchEwsDevices()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'EWS Device'
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
        Daftar EWS Device
      </h2>

      <VBtn
        :to="{ name: 'admin-driver-create' }"
        color="primary"
      >
        Tambah EWS Device
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Device"
        placeholder="Cari Device"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="devices"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >         
          <template #item-operation="item">          
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
              @click="() => handleDeleteEwsDevice(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

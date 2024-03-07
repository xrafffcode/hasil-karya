<script setup>
import { useStationStore } from '@/stores/station' // Assuming you have a station store

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
    text: 'Kategori',
    value: 'category',
  },
  {
    text: 'Aktif',
    value: 'is_active',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { stations, loading, error, success } = storeToRefs(useStationStore())
const { fetchStations, deleteStation, activateStation } = useStationStore()

fetchStations()

async function handleDeleteStation(station) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus stasiun ini?')
  if (confirmed) {
    await deleteStation(station.id)
    fetchStations()
  }
}

async function handleActivateStation(station) {
  const formData = new FormData()

  formData.append('is_active', station.is_active ? 1 : 0)
  await activateStation(station.id, formData)
  fetchStations()
}

const search = ref('')

onMounted(() => {
  document.title = 'Station'
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
        Station
      </h2>

      <VBtn
        :to="{ name: 'admin-station-create' }"
        color="primary"
      >
        Tambah Station
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Station"
        placeholder="Cari Station"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="stations"
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
          <template #item-is_active="item">
            <VSwitch
              v-model="item.is_active"
              color="primary"
              @change="() => handleActivateStation(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-station-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-station-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteStation(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

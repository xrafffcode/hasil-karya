<script setup>
import { useNotificationRecepientStore } from '@/stores/notificationRecepient'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'No HP',
    value: 'phone_number',
  },
  {
    text: 'Jabatan',
    value: 'job_title',
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



const { recepients, loading, error, success } = storeToRefs(useNotificationRecepientStore())
const { fetchRecepients, deleteRecepient, activateRecepient } = useNotificationRecepientStore()

fetchRecepients()

async function handleDeleteRecepient(recepient) {

  const confirmed = confirm('Apakah Anda yakin ingin menghapus recepient ini?')

  if (confirmed) {
    await deleteRecepient(recepient.id)
    fetchRecepients()
  }
}


async function handleActivateRecepient(recepient) {
  const formData = new FormData()

  formData.append('is_active', recepient.is_active ? 1 : 0)

  await activateRecepient(recepient.id, formData)

  fetchRecepients()
}


const search = ref('')

onMounted(() => {
  document.title = 'Penerima Notifikasi'
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
        Penerima Notifikasi
      </h2>

      <VBtn
        to="/admin/notification-recepient/create"
        color="primary"
      >
        Tambah Penerima Notifikasi
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Penerima Notifikasi"
        placeholder="Cari Penerima Notifikasi"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="recepients"
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
              @change="() => handleActivateRecepient(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-notification-recepient-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-notification-recepient-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteRecepient(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

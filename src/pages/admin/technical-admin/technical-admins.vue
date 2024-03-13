<script setup>
import { useTechnicalAdminStore } from '@/stores/technicalAdmin'

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
    text: 'Email',
    value: 'email',
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



const { technicalAdmins, loading, error, success } = storeToRefs(useTechnicalAdminStore())
const { fetchTechnicalAdmins, deleteTechnicalAdmin, activateTechnicalAdmin } = useTechnicalAdminStore()

fetchTechnicalAdmins()

async function handleDeleteTechnicalAdmin(technicalAdmin) {

  const confirmed = confirm('Apakah Anda yakin ingin menghapus technicalAdmin ini?')

  if (confirmed) {
    await deleteTechnicalAdmin(technicalAdmin.id)
    fetchTechnicalAdmins()
  }
}

async function handleActivateTechincalAdmin(technicalAdmin) {
  const formData = new FormData()

  formData.append('is_active', technicalAdmin.is_active ? 1 : 0)

  await activateTechnicalAdmin(technicalAdmin.id, formData)

  fetchTechnicalAdmins()
}


const search = ref('')

onMounted(() => {
  document.title = 'Admin Teknik'
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
        Admin Teknik
      </h2>

      <VBtn
        to="/admin/technical-admin/create"
        color="primary"
      >
        Tambah Admin Teknik
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Admin Teknik"
        placeholder="Cari Admin Teknik"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="technicalAdmins"
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
              @change="() => handleActivateTechincalAdmin(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-technical-admin-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-technical-admin-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteTechnicalAdmin(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useProjectStore } from '@/stores/project'

const headers = [
  {
    text: 'Kode',
    value: 'code',
    width: 100,
  },
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Klien',
    value: 'client.name',
  },
  {
    text: 'Tanggal Mulai',
    value: 'start_date',
    width: 200,
  },
  {
    text: 'Tanggal Selesai',
    value: 'end_date',
    width: 200,
  },
  {
    text: 'Status',
    value: 'status',
    width: 100,
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { projects, loading, error, success } = storeToRefs(useProjectStore())
const { fetchProjects, deleteProject } = useProjectStore()

fetchProjects()

async function handleDeleteProject(project) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus project ini?')

  if (confirmed) {
    await deleteProject(project.id)
    fetchProjects()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Projek'
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
        Projek
      </h2>

      <VBtn
        :to="{ name: 'admin-project-create' }"
        color="primary"
      >
        Tambah Projek
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari projek"
        placeholder="Cari projek"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="projects"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-project-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteProject(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

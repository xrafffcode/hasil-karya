<script setup>
import { useCheckerStore } from '@/stores/checker'

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



const { checkers, loading, error, success } = storeToRefs(useCheckerStore())
const { fetchCheckers, deleteChecker, activateChecker } = useCheckerStore()

fetchCheckers()

async function handleDeleteChecker(checker) {

  const confirmed = confirm('Apakah Anda yakin ingin menghapus checker ini?')

  if (confirmed) {
    await deleteChecker(checker.id)
    fetchCheckers()
  }
}

async function handleActivateChecker(checker) {
  const formData = new FormData()

  formData.append('is_active', checker.is_active ? 1 : 0)

  await activateChecker(checker.id, formData)

  fetchCheckers()
}


const search = ref('')

onMounted(() => {
  document.title = 'Checker'
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
        Checker
      </h2>

      <VBtn
        to="/admin/checker/create"
        color="primary"
      >
        Tambah Checker
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Checker"
        placeholder="Cari Checker"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="checkers"
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
              @change="() => handleActivateChecker(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-checker-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-checker-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteChecker(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

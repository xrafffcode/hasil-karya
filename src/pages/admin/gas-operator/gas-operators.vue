<script setup>
import { useGasOperatorStore } from '@/stores/gasOperator'

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

const { gasOperators, loading, error, success } = storeToRefs(useGasOperatorStore())
const { fetchGasOperators, deleteGasOperator, activateGasOperator } = useGasOperatorStore()

fetchGasOperators()

async function handleDeleteGasOperator(gasOperator) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus gas operator ini?')
  if (confirmed) {
    await deleteGasOperator(gasOperator.id)
    fetchGasOperators()
  }
}

async function handleActivateGasOperator(gasOperator) {
  const formData = new FormData()

  formData.append('is_active', gasOperator.is_active ? 1 : 0)
  
  await activateGasOperator(gasOperator.id, formData)
  fetchGasOperators()
}

const search = ref('')

onMounted(() => {
  document.title = 'Gas Operator'
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
        Gas Operator
      </h2>

      <VBtn
        to="/admin/gas-operator/create"
        color="primary"
      >
        Tambah Gas Operator
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Gas Operator"
        placeholder="Cari Gas Operator"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="gasOperators"
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
              @change="() => handleActivateGasOperator(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-gas-operator-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-gas-operator-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteGasOperator(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useMaterialMovementErrorLogStore } from '@/stores/materialMovementErrorLog'
import { formatDate } from '@/@core/utils/formatters'


const headers = [
  {
    text: 'Jenis Akun',
    value: 'creator_type',
    width: 50,
  },
  {
    text: 'Dibuat Oleh',
    value: 'created_by',
  },
  {
    text: 'Tgl Error Log',
    value: 'created_at',
    width: 100,
  },
  {
    text: 'Error Log',
    value: 'error_log',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 100,
  },
]

const { movements, loading, error, success } = storeToRefs(useMaterialMovementErrorLogStore())
const { fetchMaterialMovementErrorLogs } = useMaterialMovementErrorLogStore()

fetchMaterialMovementErrorLogs()

const search = ref('')

onMounted(() => {
  document.title = 'Error Logs Perpindahan Material'
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
        Error Logs Perpindahan Material
      </h2>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Error Log"
        placeholder="Cari Error Log"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="movements"
          :loading="loading"
          :search-value="search"
          button-pagination
          show-index
          class="data-table"
        >
          <template #item-created_at="item">
            {{ formatDate(item.created_at) }}
          </template>

          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-material-movement-error-log-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
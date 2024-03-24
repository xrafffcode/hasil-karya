<script setup>
import { useFuelLogErrorLogStore } from '@/stores/fuelLogErrorLog'
import { toNumeral, formatDate } from '@/@core/utils/formatters'

const headers = [
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

const { fuelLogErrorLogs, loading, error, success } = storeToRefs(useFuelLogErrorLogStore())
const { fetchFuelLogErrorLogs } = useFuelLogErrorLogStore()

fetchFuelLogErrorLogs()

const search = ref('')

onMounted(() => {
  document.title = 'Error Logs Pengisian Bahan Bakar'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VDialog v-if="success" v-model="success" max-width="400">
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn color="primary" @click="() => (success = null)">
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Error Logs Pencatatan Bahan Bakar
      </h2>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Cari Error Log" placeholder="Cari Error Log" clearable :loading="loading"
        variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="fuelLogErrorLogs" :loading="loading" :search-value="search"
          button-pagination show-index class="data-table">
          <template #item-created_at="item">
            {{ formatDate(item.created_at) }}
          </template>

          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-fuel-log-error-log-view', params: { id: item.id } }" color="info"
              size="small">
              Detail
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
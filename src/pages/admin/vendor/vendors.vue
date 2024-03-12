<script setup>
import { useVendorStore } from '@/stores/vendor'

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
    text: 'Alamat',
    value: 'address',
  },
  {
    text: 'No. Telp',
    value: 'phone',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { vendors, loading, error, success } = storeToRefs(useVendorStore())
const { fetchVendors, deleteVendor } = useVendorStore()

fetchVendors()

async function handleDeleteVendor(vendor) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus vendor ini?')
  if (confirmed) {
    await deleteVendor(vendor.id)
    fetchVendors()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Vendor'
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
      <VCardText>{{ success }}</VCardText>
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
        Vendor
      </h2>

      <VBtn
        :to="{ name: 'admin-vendor-create' }"
        color="primary"
      >
        Tambah Vendor
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Vendor"
        placeholder="Cari Vendor"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="vendors"
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
              @change="() => handleActivateVendor(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-vendor-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-vendor-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteVendor(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>


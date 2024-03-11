<script setup>
import { useVendorStore } from '@/stores/vendor'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useVendorStore())
const { createVendor } = useVendorStore()

const code = ref('AUTO')
const name = ref('')
const address = ref('')
const phone = ref('')
const is_active = ref(1)

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  address.value = ''
  phone.value = ''
  is_active.value = 1
}

const handleSubmit = () => {
  createVendor({
    code: code.value,
    name: name.value,
    address: address.value,
    phone: phone.value,
    is_active: is_active.value,
  })
}

onMounted(() => {
  document.title = 'Tambah Vendor'
})

onUnmounted(() => {
  handleReset()
  error.value = null
})
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Vendor
      </h2>

      <VBtn
        to="/admin/vendor"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="code"
                label="Kode"
                placeholder="Kode Vendor"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Vendor"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="address"
                label="Alamat"
                placeholder="Alamat Vendor"
                :error-messages="error && error.address ? [error.address] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="phone"
                label="Telepon"
                placeholder="Telepon Vendor"
                :error-messages="error && error.phone ? [error.phone] : []"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Simpan
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

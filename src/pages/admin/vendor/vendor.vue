<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Vendor
      </h2>

      <VBtn
        :to="{ name: 'admin-vendor' }"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
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
                :disabled="loading"
                :loading="loading"
                readonly
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
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="address"
                label="Alamat"
                placeholder="Alamat Vendor"
                :error-messages="error && error.address ? [error.address] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="phone"
                label="Telepon"
                placeholder="Telepon Vendor"
                :error-messages="error && error.phone ? [error.phone] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useVendorStore } from '@/stores/vendor'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useVendorStore())
const { fetchVendor } = useVendorStore()

const vendorId = route.params.id

const code = ref('')
const name = ref('')
const address = ref('')
const phone = ref('')


const fetchVendorData = async () => {
  try {
    const vendor = await fetchVendor(vendorId)

    code.value = vendor.code
    name.value = vendor.name
    address.value = vendor.address
    phone.value = vendor.phone
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchVendorData()

  document.title = 'Vendor'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

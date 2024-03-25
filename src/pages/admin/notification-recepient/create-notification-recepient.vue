<script setup>
import { useNotificationRecepientStore } from '@/stores/notificationRecepient'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useNotificationRecepientStore())
const { createRecepient } = useNotificationRecepientStore()

const name = ref('')
const phone_number = ref('')
const job_title = ref('')

const handleReset = () => {
  name.value = ''
  phone_number.value = ''
  job_title.value = ''
}

const handleSubmit = () => {
  createRecepient({
    name: name.value,
    phone_number: phone_number.value,
    job_title: job_title.value,
    is_active: 1,
  })
}

onMounted(() => {
  document.title = 'Tambah Penerima Notifikasi'
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
        Tambah Penerima Notifikasi
      </h2>

      <VBtn
        to="/admin/notification-recepient"
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
                v-model="name"
                label="Nama"
                placeholder="Nama Penerima"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="phone_number"
                label="Nomor Telepon"
                placeholder="Nomor Telepon"
                :error-messages="error && error.phone_number ? [error.phone_number] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="job_title"
                label="Jabatan"
                placeholder="Jabatan"
                :error-messages="error && error.job_title ? [error.job_title] : []"
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

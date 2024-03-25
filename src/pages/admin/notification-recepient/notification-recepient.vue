<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Penerima Notifikasi
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
        <VForm>
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
                v-model="phone_number"
                label="Nomor Telepon"
                placeholder="Nomor Telepon"
                :error-messages="error && error.phone_number ? [error.phone_number] : []"
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
                v-model="job_title"
                label="Jabatan"
                placeholder="Jabatan"
                :error-messages="error && error.job_title ? [error.job_title] : []"
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
import { useNotificationRecepientStore } from '@/stores/notificationRecepient'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useNotificationRecepientStore())
const { fetchRecepient } = useNotificationRecepientStore()

const recepientId = route.params.id

const name = ref('')
const phone_number = ref('')
const job_title = ref('')

const fetchRecepientData = async () => {
  try {
    const recepient = await fetchRecepient(recepientId)

    name.value = recepient.name
    phone_number.value = recepient.phone_number
    job_title.value = recepient.job_title
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchRecepientData()

  document.title = 'Penerima Notifikasi'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

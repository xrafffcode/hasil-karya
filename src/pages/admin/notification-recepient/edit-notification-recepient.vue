<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Penerima Notifikasi
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
                :disabled="loading"
                :loading="loading"
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

<script setup>
import { useNotificationRecepientStore } from '@/stores/notificationRecepient'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useNotificationRecepientStore())
const { fetchRecepient, updateRecepient } = useNotificationRecepientStore()

const recepientId = route.params.id

const name = ref('')
const phone_number = ref('')
const job_title = ref('')
const is_active = ref(1)

const fetchRecepientData = async () => {
  try {
    const recepient = await fetchRecepient(recepientId)

    name.value = recepient.name
    phone_number.value = recepient.phone_number
    job_title.value = recepient.job_title
    is_active.value = recepient.is_active === true ? 1 : 0
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchRecepientData()

  document.title = 'Edit Penerima'
})

const handleSubmit = () => {
  updateRecepient({
    id: recepientId,
    name: name.value,
    phone_number: phone_number.value,
    job_title: job_title.value,
    is_active: is_active.value,
  })
}

const handleReset = () => {
  fetchRecepientData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

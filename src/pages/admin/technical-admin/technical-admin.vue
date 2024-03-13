<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Admin Teknik
      </h2>

      <VBtn
        to="/admin/technical-admin"
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
                placeholder="Kode Admin Teknik"
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
                placeholder="Nama Admin Teknik"
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
              <VTextField
                v-model="email"
                label="Email"
                placeholder="Email Admin Teknik"
                :error-messages="error && error.email ? [error.email] : []"
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
import { useTechnicalAdminStore } from '@/stores/technicalAdmin'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useTechnicalAdminStore())
const { fetchTechnicalAdmin } = useTechnicalAdminStore()

const technicalAdminId = route.params.id

const code = ref('')
const name = ref('')
const email = ref('')

const fetchTechnicalAdminData = async () => {
  try {
    const technicalAdmin = await fetchTechnicalAdmin(technicalAdminId)

    code.value = technicalAdmin.code
    name.value = technicalAdmin.name
    email.value = technicalAdmin.email
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  document.title = 'Admin Teknik'

  fetchTechnicalAdminData()
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

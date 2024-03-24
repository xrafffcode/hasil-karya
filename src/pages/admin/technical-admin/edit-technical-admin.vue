<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Admin Teknik
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
        <VForm @submit.prevent="handleSubmit">
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
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="email"
                label="Email"
                placeholder="Email Admin Teknik"
                :error-messages="error && error.email ? [error.email] : []"
                disabled
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="password"
                label="Password"
                placeholder="Password Admin Teknik"
                :error-messages="error && error.password ? [error.password] : []"
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
                type="reset"
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
import { useTechnicalAdminStore } from '@/stores/technicalAdmin'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useTechnicalAdminStore())
const { fetchTechnicalAdmin, updateTechnicalAdmin } = useTechnicalAdminStore()

const technicalAdminId = route.params.id

const code = ref('')
const name = ref('')
const email = ref('')
const password = ref('')
const is_active = ref(0)

const fetchTechnicalAdminData = async () => {
  try {
    const technicalAdmin = await fetchTechnicalAdmin(technicalAdminId)

    code.value = technicalAdmin.code
    name.value = technicalAdmin.name
    email.value = technicalAdmin.email
    is_active.value = technicalAdmin.is_active === true ? 1 : 0
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchTechnicalAdminData()

  document.title =  'Edit Admin Teknik'
})

const handleSubmit = () => {
  updateTechnicalAdmin({
    id: technicalAdminId,
    code: code.value,
    name: name.value,
    email: email.value,
    password: password.value,
    is_active: is_active.value,
  })
}

const handleReset = () => {
  fetchTechnicalAdminData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

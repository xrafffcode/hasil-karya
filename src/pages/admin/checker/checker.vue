<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Checker
      </h2>

      <VBtn
        to="/admin/checker"
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
                placeholder="Kode Checker"
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
                placeholder="Nama Client"
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
                v-model="email"
                label="Email"
                placeholder="Email Checker"
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
import { useCheckerStore } from '@/stores/checker'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useCheckerStore())
const { fetchChecker } = useCheckerStore()

const checkerId = route.params.id

const code = ref('')
const name = ref('')
const email = ref('')
const password = ref('')
const is_active = ref(0)

const fetchCheckerData = async () => {
  try {
    const checker = await fetchChecker(checkerId)

    code.value = checker.code
    name.value = checker.name
    email.value = checker.email
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchCheckerData()

  document.title = 'Checker'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

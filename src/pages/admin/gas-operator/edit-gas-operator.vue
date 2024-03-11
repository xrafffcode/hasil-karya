<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Gas Operator
      </h2>

      <VBtn
        to="/admin/gas-operator"
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
                placeholder="Kode Gas Operator"
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
                placeholder="Nama Gas Operator"
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
                placeholder="Email Gas Operator"
                :error-messages="error && error.email ? [error.email] : []"
                :disabled="loading"
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
                placeholder="Password Gas Operator"
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
import { useGasOperatorStore } from '@/stores/gasOperator'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useGasOperatorStore())
const { fetchGasOperator, updateGasOperator } = useGasOperatorStore()

const gasOperatorId = route.params.id

const code = ref('')
const name = ref('')
const email = ref('')
const password = ref('')
const is_active = ref(0)

const fetchGasOperatorData = async () => {
  try {
    const gasOperator = await fetchGasOperator(gasOperatorId)

    code.value = gasOperator.code
    name.value = gasOperator.name
    email.value = gasOperator.email
    is_active.value = gasOperator.is_active === true ? 1 : 0
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchGasOperatorData()
  document.title = 'Edit Gas Operator'
})

const handleSubmit = () => {
  updateGasOperator({
    id: gasOperatorId,
    code: code.value,
    name: name.value,
    email: email.value,
    password: password.value,
    is_active: is_active.value,
  })
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

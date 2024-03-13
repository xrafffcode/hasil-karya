<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Gas Operator
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
        <VForm>
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
                placeholder="Nama Gas Operator"
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
                placeholder="Email Gas Operator"
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
import { useGasOperatorStore } from '@/stores/gasOperator'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useGasOperatorStore())
const { fetchGasOperator } = useGasOperatorStore()

const gasOperatorId = route.params.id

const code = ref('')
const name = ref('')
const email = ref('')

const fetchGasOperatorData = async () => {
  try {
    const gasOperator = await fetchGasOperator(gasOperatorId)

    code.value = gasOperator.code
    name.value = gasOperator.name
    email.value = gasOperator.email
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchGasOperatorData()
  document.title = 'Gas Operator'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

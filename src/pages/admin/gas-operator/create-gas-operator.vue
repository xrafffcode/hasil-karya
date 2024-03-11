<script setup>
import { useGasOperatorStore } from '@/stores/gasOperator'
import { storeToRefs } from 'pinia'

const { loading, error } = storeToRefs(useGasOperatorStore())
const { createGasOperator } = useGasOperatorStore()

const code = ref('AUTO')
const name = ref('')
const email = ref('')
const password = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  email.value = ''
  password.value = ''
}

const handleSubmit = () => {
  createGasOperator({
    code: code.value,
    name: name.value,
    email: email.value,
    password: password.value,
    is_active: 1,
  })
}

onMounted(() => {
  document.title = 'Tambah Gas Operator'
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
        Tambah Gas Operator
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

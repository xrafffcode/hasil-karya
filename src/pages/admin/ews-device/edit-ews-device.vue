<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit EWS Device
      </h2>

      <VBtn
        :to="{ name: 'admin-ews-device' }"
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
                placeholder="Kode EWS Device"
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
                placeholder="Nama EWS Device"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="type"
                label="Tipe"
                placeholder="Tipe EWS Device"
                :error-messages="error && error.type ? [error.type] : []"
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
import { useEwsDeviceStore } from '@/stores/ewsDevice'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useEwsDeviceStore())
const { fetchEwsDevice, updateEwsDevice } = useEwsDeviceStore()

const ewsDeviceId = route.params.id

const code = ref('')
const name = ref('')
const type = ref('')

const fetchEwsDeviceData = async () => {
  try {
    const device = await fetchEwsDevice(ewsDeviceId)

    code.value = device.code
    name.value = device.name
    type.value = device.type
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchEwsDeviceData()

  document.title = 'Edit EWS Device'
})

const handleSubmit = () => {
  updateEwsDevice({
    id: ewsDeviceId,
    code: code.value,
    name: name.value,
    type: type.value,
  })
}

const handleReset = () => {
  fetchEwsDeviceData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

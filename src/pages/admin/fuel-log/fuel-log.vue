
<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Pencatatan BBM Kendaraan
      </h2>

      <VBtn
        to="/admin/fuel-log"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow />
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useFuelLogStore } from '@/stores/fuelLog'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useFuelLogStore())
const { fetchFuelLog } = useFuelLogStore()

const fuelLogId = route.params.id

const code = ref('')
const date = ref('')

const fetchFuelLogData = async () => {
  try {
    const fuelLog = await fetchFuelLog(fuelLogId)

  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchFuelLogData()
  document.title = 'Pencatatan BBM Kendaraan'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

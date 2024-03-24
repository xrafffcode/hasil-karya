<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Detail Error Log Perpindahan Material
      </h2>

      <VBtn
        :to="{ name: 'admin-material-movement-error-log' }"
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
                placeholder="Kode Material Movement"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="date"
                label="Tanggal"
                placeholder="Tanggal Material Movement"
                type="datetime-local"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="driver_id"
                label="Driver"
                placeholder="Pilih Driver"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="truck_id"
                label="Truck"
                placeholder="Pilih Truck"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="station_id"
                label="Stasiun"
                placeholder="Pilih Stasiun"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="checker_id"
                label="Checker"
                placeholder="Pilih Checker"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="observation_ratio_percentage"
                label="Observation Ratio Percentage"
                placeholder="Masukan Observation Ratio Percentage"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="observation_ratio_number"
                label="Observation Ratio Number"
                placeholder="Masukan Observation Ratio Number"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="solid_ratio"
                label="Solid Ratio"
                placeholder="Masukan Solid Ratio"
                readonly=""
              />
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useMaterialMovementErrorLogStore } from '@/stores/materialMovementErrorLog'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = useMaterialMovementErrorLogStore()
const { fetchMaterialMovementErrorLog } = useMaterialMovementErrorLogStore()

const materialMovementErrorLogId = route.params.id

const code = ref('')
const date = ref('')
const driver_id = ref('')
const truck_id = ref('')
const station_id = ref('')
const checker_id = ref('')
const observation_ratio_percentage = ref('')
const observation_ratio_number = ref('')
const solid_ratio = ref('')
const solid_volume_estimate = ref('')
const remarks = ref('')

const fetchMaterialMovementData = async () => {
  try {
    const materialMovementErrorLogData = await fetchMaterialMovementErrorLog(materialMovementErrorLogId)

    code.value = materialMovementErrorLogData.code
    date.value = materialMovementErrorLogData.date
    driver_id.value = materialMovementErrorLogData.driver_id
    truck_id.value = materialMovementErrorLogData.truck_id
    station_id.value = materialMovementErrorLogData.station_id
    checker_id.value = materialMovementErrorLogData.checker_id
    observation_ratio_percentage.value = materialMovementErrorLogData.observation_ratio_percentage
    observation_ratio_number.value = materialMovementErrorLogData.observation_ratio_number
    solid_ratio.value = materialMovementErrorLogData.solid_ratio
    solid_volume_estimate.value = materialMovementErrorLogData.solid_volume_estimate
    remarks.value = materialMovementErrorLogData.remarks
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchMaterialMovementData()
  document.title = 'Detail Error Log Perpindahan Material'
})

onUnmounted(() => {
  error.value = null
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
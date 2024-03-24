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
                v-model="truck_capacity"
                label="Kapasitas Truck"
                placeholder="Kapasitas Truck"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="observation_ratio_percentage"
                label="Presentase Rasio Index"
                placeholder="Presentase Rasio Index"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="solid_ratio"
                label="Rasio Padat"
                placeholder="Rasio Padat"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="remarks"
                label="Keterangan"
                placeholder="Keterangan"
                readonly=""
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="error_log"
                label="Error Log"
                placeholder="Error Log"
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useMaterialMovementErrorLogStore())
const { fetchMaterialMovementErrorLog } = useMaterialMovementErrorLogStore()

const materialMovementErrorLogId = route.params.id

const code = ref('')
const driver_id = ref('')
const truck_id = ref('')
const station_id = ref('')
const checker_id = ref('')
const date = ref('')
const truck_capacity = ref('')
const observation_ratio_percentage = ref('')
const solid_ratio = ref('')
const error_log = ref('')
const remarks = ref('')

const fetchMaterialMovementData = async () => {
  try {
    const materialMovementErrorLogData = await fetchMaterialMovementErrorLog(materialMovementErrorLogId)

    code.value = materialMovementErrorLogData.code
    driver_id.value = materialMovementErrorLogData.driver_id
    truck_id.value = materialMovementErrorLogData.truck_id
    station_id.value = materialMovementErrorLogData.station_id
    checker_id.value = materialMovementErrorLogData.checker_id
    date.value = materialMovementErrorLogData.date
    truck_capacity.value = materialMovementErrorLogData.truck_capacity
    observation_ratio_percentage.value = materialMovementErrorLogData.observation_ratio_percentage
    solid_ratio.value = materialMovementErrorLogData.solid_ratio
    remarks.value = materialMovementErrorLogData.remarks
    error_log.value = materialMovementErrorLogData.error_log
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
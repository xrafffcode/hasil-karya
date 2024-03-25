<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Detail Error Log Pengisian Bahan Bakar
      </h2>

      <VBtn
        to="/admin/fuel-log-error-log"
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
                placeholder="Kode"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="date"
                label="Tanggal"
                placeholder="Tanggal"
                type="datetime-local"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="truck_id"
                label="Truk"
                placeholder="Truk"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="heavy_vehicle_id"
                label="Alat Berat"
                placeholder="Alat Berat"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="driver_id"
                label="Sopir"
                placeholder="Sopir"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="station_id"
                label="Stasiun"
                placeholder="Stasiun"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="gas_operator_id"
                label="Operator"
                placeholder="Operator"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="fuel_type"
                label="Jenis BBM"
                placeholder="Jenis BBM"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="volume"
                label="Volume (L)"
                placeholder="Volume (L)"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="odometer"
                label="Odometer (KM)"
                placeholder="Odometer (KM)"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="hourmeter"
                label="Hourmeter (HM)"
                placeholder="Hourmeter (HM)"
                readonly
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
                readonly
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
import { useFuelLogErrorLogStore } from '@/stores/fuelLogErrorLog'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'

const route = useRoute()

const { loading, error } = storeToRefs(useFuelLogErrorLogStore())
const { fetchFuelLogErrorLog } = useFuelLogErrorLogStore()

const fuelLogErrorLogId = route.params.id

const code = ref('')
const date = ref('')
const truck_id = ref('')
const heavy_vehicle_id = ref('')
const driver_id = ref('')
const station_id = ref('')
const gas_operator_id = ref('')
const fuel_type = ref('')
const volume = ref('')
const odometer = ref('')
const hourmeter = ref('')
const remarks = ref('')
const error_log = ref('')

const fetchFuelLogErrorLogData = async () => {
  try {
    const fuelLogErrorLog = await fetchFuelLogErrorLog(fuelLogErrorLogId)

    code.value = fuelLogErrorLog.code
    date.value = fuelLogErrorLog.date
    truck_id.value = fuelLogErrorLog.truck_id
    heavy_vehicle_id.value = fuelLogErrorLog.heavy_vehicle_id
    driver_id.value = fuelLogErrorLog.driver_id
    station_id.value = fuelLogErrorLog.station_id
    gas_operator_id.value = fuelLogErrorLog.gas_operator_id
    fuel_type.value = fuelLogErrorLog.fuel_type
    volume.value = fuelLogErrorLog.volume
    odometer.value = fuelLogErrorLog.odometer
    hourmeter.value = fuelLogErrorLog.hourmeter
    remarks.value = fuelLogErrorLog.remarks
    error_log.value = fuelLogErrorLog.error_log
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchFuelLogErrorLogData()
  document.title = 'Detail Error Log Pengisian Bahan Bakar'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
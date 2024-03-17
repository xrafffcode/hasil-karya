
<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Pencatatan Pengisian BBM
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
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="code"
                label="Kode"
                placeholder="Kode"
                :error-messages="error && error.code ? [error.code] : []"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-if="truck_id"
                v-model="truck_id"
                label="Truk"
                placeholder="Truk"
                :error-messages="error && error.truck_id ? [error.truck_id] : []"
                readonly
              />

              <VTextField
                v-if="heavy_vehicle_id"
                v-model="heavy_vehicle_id"
                label="Alat Berat"
                placeholder="Alat Berat"
                :error-messages="error && error.heavy_vehicle_id ? [error.heavy_vehicle_id] : []"
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
                :error-messages="error && error.driver_id ? [error.driver_id] : []"
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
                :error-messages="error && error.station_id ? [error.station_id] : []"
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
                :error-messages="error && error.gas_operator_id ? [error.gas_operator_id] : []"
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
                :error-messages="error && error.fuel_type ? [error.fuel_type] : []"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="volume"
                label="Volume/liter"
                placeholder="Volume BBM/liter"
                :error-messages="error && error.volume ? [error.volume] : []"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-if="truck_id"
                v-model="odometer"
                label="Odometer"
                placeholder="Odometer"
                :error-messages="error && error.odometer ? [error.odometer] : []"
                readonly
              />
              <VTextField
                v-if="heavy_vehicle_id"
                v-model="hourmeter"
                label="Hourmeter"
                placeholder="Hourmeter"
                :error-messages="error && error.hourmeter ? [error.hourmeter] : []"
                readonly
              />
            </VCol>
            
            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="remarks"
                label="Keterangan"
                placeholder="Keterangan"
                :error-messages="error && error.remarks ? [error.remarks] : []"
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
import { useFuelLogStore } from '@/stores/fuelLog'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useFuelLogStore())
const { fetchFuelLog } = useFuelLogStore()

const fuelLogId = route.params.id

const code = ref('AUTO')
const truck_id = ref('')
const heavy_vehicle_id = ref('')
const driver_id = ref('')
const station_id = ref('')
const gas_operator_id = ref('')
const fuel_type = ref('diesel')
const volume = ref('')
const odometer = ref('')
const hourmeter = ref('')
const remarks = ref('')


const fetchFuelLogData = async () => {
  try {
    const fuelLog = await fetchFuelLog(fuelLogId)

    code.value = fuelLog.code
    truck_id.value = fuelLog.truck?.brand
    heavy_vehicle_id.value = fuelLog.heavy_vehicle?.brand
    driver_id.value = fuelLog.driver.name
    station_id.value = fuelLog.station.name
    gas_operator_id.value = fuelLog.gas_operator.name
    fuel_type.value = fuelLog.fuel_type
    volume.value = fuelLog.volume
    odometer.value = fuelLog.odometer
    hourmeter.value = fuelLog.hourmeter
    remarks.value = fuelLog.remarks

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

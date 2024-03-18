<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Ubah Data Pengisian BBM Alat Berat
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
        <VForm @submit.prevent="handleSubmit">
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
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="date"
                label="Tanggal"
                placeholder="Tanggal Mulai"
                type="datetime-local"
                :error-messages="error && error.date ? [error.date] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="gas_operator_id"
                :items="gasOperators"
                label="Solar Man"
                placeholder="Pilih Solar Man"
                :error-messages="error && error.gas_operator_id ? [error.gas_operator_id] : []"
                :item-title="gasOperator => gasOperator.name"
                :item-value="gasOperator => gasOperator.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="driver_id"
                :items="drivers"
                label="Driver"
                placeholder="Pilih Driver"
                :error-messages="error && error.driver_id ? [error.driver_id] : []"
                :item-title="driver => driver.name"
                :item-value="driver => driver.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="heavy_vehicle_id"
                :items="heavyVehicles"
                label="Alat Berat"
                placeholder="Pilih Alat Berat"
                :error-messages="error && error.heavy_vehicle_id ? [error.heavy_vehicle_id] : []"
                :item-title="heavyVehicle => heavyVehicle.name"
                :item-value="heavyVehicle => heavyVehicle.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="station_id"
                :items="stations"
                label="POS"
                placeholder="Pilih POS"
                :error-messages="error && error.station_id ? [error.station_id] : []"
                :item-title="station => station.name"
                :item-value="station => station.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="volume"
                label="Volume BBM (L)"
                placeholder="Masukan Volume BBM (L)"
                :error-messages="error && error.volume ? [error.volume] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="hourmeter"
                label="Hourmeter (HM)"
                placeholder="Masukan Hourmeter (HM)"
                :error-messages="error && error.hourmeter ? [error.hourmeter] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="remarks"
                label="Keterangan"
                placeholder="Keterangan"
                :error-messages="error && error.remarks ? [error.remarks] : []"
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

<script setup>
import { useGasOperatorStore } from '@/stores/gasOperator'
import { useFuelLogStore } from '@/stores/fuelLog'
import { useDriverStore } from '@/stores/driver'
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { useStationStore } from '@/stores/station'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { drivers } = storeToRefs(useDriverStore())
const { heavyVehicles } = storeToRefs(useHeavyVehicleStore())
const { stations } = storeToRefs(useStationStore())

const { fetchDrivers } = useDriverStore()
const { fetchHeavyVehicles } = useHeavyVehicleStore()
const { fetchStations } = useStationStore()

fetchDrivers()
fetchHeavyVehicles()
fetchStations()

const route = useRoute()

const { gasOperators, loading, error } = storeToRefs(useGasOperatorStore())
const { fetchGasOperators } = useGasOperatorStore()

fetchGasOperators() 

const { fetchFuelLog, updateFuelLogHeavyVehicle } = useFuelLogStore()

const fuelLogId = route.params.id

const code = ref('')
const date = ref('')
const gas_operator_id = ref('')
const heavy_vehicle_id = ref('')
const driver_id = ref('')
const station_id = ref('')
const fuel_type = ref('diesel')
const volume = ref('')
const hourmeter = ref('')
const remarks = ref('')

const fetchFuelLogData = async () => {
  try {
    const fuelLog = await fetchFuelLog(fuelLogId)

    code.value = fuelLog.code
    date.value = fuelLog.date
    gas_operator_id.value = fuelLog.gas_operator.id
    heavy_vehicle_id.value = fuelLog.heavy_vehicle.id
    driver_id.value = fuelLog.driver.id
    station_id.value = fuelLog.station.id
    fuel_type.value = fuelLog.fuel_type
    volume.value = fuelLog.volume * 1
    hourmeter.value = fuelLog.hourmeter * 1
    remarks.value = fuelLog.remarks
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchFuelLogData()
  document.title = 'Ubah Data Pengisian BBM Alat Berat'
})

onUnmounted(() => {
  handleReset()
  error.value = null
})

const handleSubmit = () => {
  updateFuelLogHeavyVehicle({
    id: fuelLogId,
    code: code.value,
    date: date.value,
    gas_operator_id: gas_operator_id.value,
    heavy_vehicle_id: heavy_vehicle_id.value,
    driver_id: driver_id.value,
    station_id: station_id.value,
    fuel_type: fuel_type.value,
    volume: volume.value,
    hourmeter: hourmeter.value,
    remarks: remarks.value,
  })
}

const handleReset = () => {
  fetchFuelLogData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

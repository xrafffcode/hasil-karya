<script setup>
import { useFuelLogStore } from '@/stores/fuelLog'
import { useDriverStore } from '@/stores/driver'
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { useStationStore } from '@/stores/station'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const { drivers } = storeToRefs(useDriverStore())
const { heavyVehicles } = storeToRefs(useHeavyVehicleStore())
const { stations } = storeToRefs(useStationStore())
const { user, checkAuth } = useAuthStore()



const { fetchDrivers } = useDriverStore()
const { fetchHeavyVehicles } = useHeavyVehicleStore()
const { fetchStations } = useStationStore()

fetchDrivers()
fetchHeavyVehicles()
fetchStations({ type: 'gas_station' })
checkAuth()

const { success, loading, error } = storeToRefs(useFuelLogStore())
const { createFuelLogHeavyVehicleGasOperator } = useFuelLogStore()


const code = ref('AUTO')
const heavy_vehicle_id = ref('')
const driver_id = ref('')
const station_id = ref('')
const gas_operator_id = ref(user.gas_operator.id)
const fuel_type = ref('diesel')
const volume = ref('')
const hourmeter = ref('')
const remarks = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  heavy_vehicle_id.value = ''
  driver_id.value = ''
  station_id.value = ''
  gas_operator_id.value = user.gas_operator.id
  fuel_type.value = 'diesel'
  volume.value = ''
  hourmeter.value = ''
  remarks.value = ''
}

const handleSubmit = () => {
  createFuelLogHeavyVehicleGasOperator({
    code: code.value,
    heavy_vehicle_id: heavy_vehicle_id.value,
    driver_id: driver_id.value,
    station_id: station_id.value,
    gas_operator_id: gas_operator_id.value,
    fuel_type: fuel_type.value,
    volume: volume.value,
    hourmeter: hourmeter.value,
    remarks: remarks.value,
  })

  handleReset()
}

onMounted(() => {
  document.title = 'Catat BBM Alat Berat'
})

onUnmounted(() => {
  handleReset()
  error.value = null
})
</script>

<template>
  <VDialog
    v-if="success"
    v-model="success"
    max-width="400"
  >
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (success = null)"
        >
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
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
              md="12"
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
                label="Volume"
                placeholder="Volume BBM"
                :error-messages="error && error.volume ? [error.volume] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="hourmeter"
                label="Hourmeter"
                placeholder="Hourmeter"
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
                placeholder="Keterangan Material Movement"
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

\
<style lang="scss">
.v-row {
  margin: 0px !important
}
</style>
@/stores/fuelLogTruck

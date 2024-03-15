<script setup>
import { useFuelLogStore } from '@/stores/fuelLog'
import { useDriverStore } from '@/stores/driver'
import { useTruckStore } from '@/stores/truck'
import { useStationStore } from '@/stores/station'
import { useGasOperatorStore } from '@/stores/gasOperator'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

const { gasOperators } = storeToRefs(useGasOperatorStore())
const { drivers } = storeToRefs(useDriverStore())
const { trucks } = storeToRefs(useTruckStore())
const { stations } = storeToRefs(useStationStore())


const { fetchGasOperators } = useGasOperatorStore()
const { fetchDrivers } = useDriverStore()
const { fetchTrucks } = useTruckStore()
const { fetchStations } = useStationStore()

fetchGasOperators()
fetchDrivers()
fetchTrucks()
fetchStations({ type: 'gas_station' })

const { success, loading, error } = storeToRefs(useFuelLogStore())
const { createFuelLogTruck } = useFuelLogStore()

const code = ref('AUTO')
const truck_id = ref('')
const driver_id = ref('')
const station_id = ref('')
const gas_operator_id = ref('')
const fuel_type = ref('diesel')
const volume = ref('')
const odometer = ref('')
const remarks = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  truck_id.value = ''
  driver_id.value = ''
  station_id.value = ''
  gas_operator_id.value = ''
  fuel_type.value = 'diesel'
  volume.value = ''
  odometer.value = ''
  remarks.value = ''
}

const handleSubmit = () => {
  createFuelLogTruck({
    code: code.value,
    truck_id: truck_id.value,
    driver_id: driver_id.value,
    station_id: station_id.value,
    gas_operator_id: gas_operator_id.value,
    fuel_type: fuel_type.value,
    volume: volume.value,
    odometer: odometer.value,
    remarks: remarks.value,
  })

  handleReset()
}

onMounted(() => {
  document.title = 'Catat BBM Truk'
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
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Catat BBM Truk
      </h2>

      <VBtn
        to="/admin/fuel-log"
        color="primary"
        text
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
              <VAutocomplete
                v-model="gas_operator_id"
                :items="gasOperators"
                label="Operator"
                placeholder="Pilih Operator"
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
                v-model="truck_id"
                :items="trucks"
                label="Truck"
                placeholder="Pilih Truck"
                :error-messages="error && error.truck_id ? [error.truck_id] : []"
                :item-title="truck => truck.name"
                :item-value="truck => truck.id"
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
                label="Volume/liter"
                placeholder="Volume BBM/liter"
                :error-messages="error && error.volume ? [error.volume] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="odometer"
                label="Odometer/km"
                placeholder="Odometer/km"
                :error-messages="error && error.odometer ? [error.odometer] : []"
              />
            </VCol>
            

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="remarks"
                label="Keterangan"
                placeholder="Keterangan Material"
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
</style>@/stores/fuelLogTruck@/stores/fuelLog

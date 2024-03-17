<script setup>
import { useFuelLogStore } from '@/stores/fuelLog'
import { useDriverStore } from '@/stores/driver'
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { useStationStore } from '@/stores/station'
import { useGasOperatorStore } from '@/stores/gasOperator'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

const { gasOperators } = storeToRefs(useGasOperatorStore())
const { drivers } = storeToRefs(useDriverStore())
const { heavyVehicles } = storeToRefs(useHeavyVehicleStore())
const { stations } = storeToRefs(useStationStore())

const { fetchGasOperators } = useGasOperatorStore()
const { fetchDrivers } = useDriverStore()
const { fetchHeavyVehicles } = useHeavyVehicleStore()
const { fetchStations } = useStationStore()

fetchGasOperators()
fetchDrivers()
fetchHeavyVehicles()
fetchStations({ type: 'gas_station' })


const { success, loading, error } = storeToRefs(useFuelLogStore())
const { createFuelLogHeavyVehicle } = useFuelLogStore()


const code = ref('AUTO')
const date = ref(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 16))
const heavy_vehicle_id = ref('')
const driver_id = ref('')
const station_id = ref('')
const gas_operator_id = ref('')
const fuel_type = ref('diesel')
const volume = ref('')
const hourmeter = ref('')
const remarks = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  date.value = null
  heavy_vehicle_id.value = ''
  driver_id.value = ''
  station_id.value = ''
  gas_operator_id.value = ''
  fuel_type.value = 'diesel'
  volume.value = ''
  hourmeter.value = ''
  remarks.value = ''
}

const handleSubmit = () => {
  createFuelLogHeavyVehicle({
    code: code.value,
    date: date.value.split('T').join(' ') + ':00',
    heavy_vehicle_id: heavy_vehicle_id.value,
    driver_id: driver_id.value,
    station_id: station_id.value,
    gas_operator_id: gas_operator_id.value,
    fuel_type: fuel_type.value,
    volume: volume.value.replace(/\D/g, ''),
    hourmeter: hourmeter.value.replace(/\D/g, ''),
    remarks: remarks.value,
  })

  handleReset()
}

onMounted(() => {
  document.title = 'Tambah Data Pencatatan BBM Alat Berat'
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
        Catat BBM Alat Berat
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
              <VTextField
                v-model="date"
                label="Tanggal Mulai"
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
                placeholder="Volume BBM (L)"
                :error-messages="error && error.volume ? [error.volume] : []"
                @input="volume = volume.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
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
                :error-messages="error && error.hourmeter ? [error.hourmeter] : []"
                @input="hourmeter = hourmeter.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="remarks"
                label="Keterangan"
                placeholder="Keterangan Pengisian Bahan Bakar"
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

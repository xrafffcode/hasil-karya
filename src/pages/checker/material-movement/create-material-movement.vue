<script setup>
import { useMaterialMovementStore } from '@/stores/materialMovement'
import { useDriverStore } from '@/stores/driver'
import { useTruckStore } from '@/stores/truck'
import { useStationStore } from '@/stores/station'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const { drivers } = storeToRefs(useDriverStore())
const { trucks } = storeToRefs(useTruckStore())
const { stations } = storeToRefs(useStationStore())
const { user, checkAuth } = useAuthStore()



const { fetchDrivers } = useDriverStore()
const { fetchTrucks } = useTruckStore()
const { fetchStations } = useStationStore()

fetchDrivers()
fetchTrucks()
fetchStations({ type: 'station' })
checkAuth()

const { success, loading, error } = storeToRefs(useMaterialMovementStore())
const { createMaterialMovementCheckers } = useMaterialMovementStore()



const driver_id = ref('')
const truck_id = ref('')
const station_id = ref('')
const checker_id = ref(user.checker.id)
const observation_ratio_percentage = ref('')
const remarks = ref('')

const handleReset = () => {
  driver_id.value = ''
  truck_id.value = ''
  station_id.value = ''
  checker_id.value = user.checker.id
  observation_ratio_percentage.value = ''
  remarks.value = ''
}

const handleSubmit = () => {
  createMaterialMovementCheckers({
    driver_id: driver_id.value,
    truck_id: truck_id.value,
    station_id: station_id.value,
    checker_id: checker_id.value,
    observation_ratio_percentage: observation_ratio_percentage.value / 100,
    remarks: remarks.value,
  })

  handleReset()
}

onMounted(() => {
  document.title = 'Tambah Material Movement'
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
              md="6"
            >
              <VAutocomplete
                v-model="observation_ratio_percentage"
                :items="[{ label: '30%', value: 30 }, { label: '40%', value: 40 }, { label: '50%', value: 50 }, { label: '60%', value: 60 }, { label: '70%', value: 70 }, { label: '80%', value: 80 }, { label: '90%', value: 90 }, { label: '100%', value: 100 }]"
                label="Observation Ratio"
                placeholder="Pilih Observation Ratio"
                :error-messages="error && error.observation_ratio_percentage ? [error.observation_ratio_percentage] : []"
                :item-title="ratio => ratio.label"
                :item-value="ratio => ratio.value"
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

\
<style lang="scss">
.v-row {
  margin: 0px !important
}
</style>

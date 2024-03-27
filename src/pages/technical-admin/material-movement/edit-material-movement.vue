<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Material Movement
      </h2>

      <VBtn
        :to="{ name: 'technical-admin-material-movement' }"
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
                placeholder="Kode Material Movement"
                :error-messages="error && error.code ? [error.code] : []"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="date"
                label="Tanggal"
                placeholder="Masukan Tanggal"
                :error-messages="error && error.date ? [error.date] : []"
                type="datetime-local"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="driver_id"
                :items="drivers"
                label="Driver"
                placeholder="Pilih Driver"
                :error-messages="error && error.driver_id ? [error.driver_id] : []"
                :item-title="driver => driver.name"
                :item-value="driver => driver.id"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="truck_id"
                :items="trucks"
                label="Truck"
                placeholder="Pilih Truck"
                :error-messages="error && error.truck_id ? [error.truck_id] : []"
                :item-title="truck => truck.name"
                :item-value="truck => truck.id"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="station_id"
                :items="stations"
                label="POS"
                placeholder="Pilih POS"
                :error-messages="error && error.station_id ? [error.station_id] : []"
                :item-title="station => station.name"
                :item-value="station => station.id"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="checker_id"
                :items="checkers"
                label="Pemeriksa"
                placeholder="Pilih Pemeriksa"
                :error-messages="error && error.checker_id ? [error.checker_id] : []"
                :item-title="checker => checker.name"
                :item-value="checker => checker.id"
                disabled
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="observation_ratio_percentage"
                label="Presentase Rasio Index"
                placeholder="Masukan Presentase Rasio Index"
                :error-messages="error && error.observation_ratio_percentage ? [error.observation_ratio_percentage] : []"
                type="number"
                step="1"
                suffix="%"
                disabled
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
                :error-messages="error && error.solid_ratio ? [error.solid_ratio] : []"
                type="number"
                step="1"
                suffix="%"
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

<script setup>
import { useMaterialMovementStore } from '@/stores/materialMovement'
import { useDriverStore } from '@/stores/driver'
import { useTruckStore } from '@/stores/truck'
import { useStationStore } from '@/stores/station'
import { useCheckerStore } from '@/stores/checker'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDate } from 'vuetify'

const route = useRoute()
const adapter = useDate()

const { drivers } = storeToRefs(useDriverStore())
const { trucks } = storeToRefs(useTruckStore())
const { stations } = storeToRefs(useStationStore())
const { checkers } = storeToRefs(useCheckerStore())

const { fetchDrivers } = useDriverStore()
const { fetchTrucks } = useTruckStore()
const { fetchStations } = useStationStore()
const { fetchCheckers } = useCheckerStore()

fetchDrivers()
fetchTrucks()
fetchStations({ type: 'station' }) 
fetchCheckers()

const {  loading, error } = storeToRefs(useMaterialMovementStore())
const { fetchMaterialMovementTechnicalAdmin, updateMaterialMovementTechnicalAdmin } = useMaterialMovementStore()

const materialMovementId = route.params.id

const code = ref('')
const date = ref('')
const driver_id = ref('')
const truck_id = ref('')
const station_id = ref('')
const checker_id = ref('')
const observation_ratio_percentage = ref('')
const solid_ratio = ref('')
const remarks = ref('')
const payment_proof_image = ref(null)

const fetchMaterialMovementTechnicalAdminData = async () => {
  try {
    const materialMovementData = await fetchMaterialMovementTechnicalAdmin(materialMovementId)

    code.value = materialMovementData.code
    date.value = materialMovementData.date
    driver_id.value = materialMovementData.driver.id
    truck_id.value = materialMovementData.truck.id
    station_id.value = materialMovementData.station.id
    checker_id.value = materialMovementData.checker.id
    observation_ratio_percentage.value = materialMovementData.observation_ratio_percentage * 100
    solid_ratio.value = materialMovementData.solid_ratio * 100
    remarks.value = materialMovementData.remarks
    payment_proof_image.value = materialMovementData.payment_proof_image
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchMaterialMovementTechnicalAdminData()
  document.title = 'Edit Material Movement'
})

const handleReset = () => {
  fetchMaterialMovementTechnicalAdminData()
}

const handleSubmit = () => {
  updateMaterialMovementTechnicalAdmin({
    id: materialMovementId,
    code: code.value,
    date: date.value,
    driver_id: driver_id.value,
    truck_id: truck_id.value,
    station_id: station_id.value,
    checker_id: checker_id.value,
    observation_ratio_percentage: observation_ratio_percentage.value / 100,
    solid_ratio: solid_ratio.value / 100,
    remarks: remarks.value,
  })
}

onUnmounted(() => {
  handleReset()
  error.value = null
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

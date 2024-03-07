<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Material Movement
      </h2>

      <VBtn
        :to="{ name: 'admin-material-movement' }"
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
                :error-messages="error && error.code ? [error.code] : []"
                readonly=""
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
                readonly=""
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
                readonly=""
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
                readonly=""
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
                :error-messages="error && error.date ? [error.date] : []"
                type="datetime-local"          
                readonly=""  
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="amount"
                label="Jumlah"
                placeholder="Jumlah Material Movement"
                :error-messages="error && error.amount ? [error.amount] : []"
                readonly=""
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
import { useMaterialMovementStore } from '@/stores/materialMovement'
import { useDriverStore } from '@/stores/driver'
import { useTruckStore } from '@/stores/truck'
import { useStationStore } from '@/stores/station'
import { useCheckerStore } from '@/stores/checker'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

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
fetchStations()
fetchCheckers()

const { loading, error } = storeToRefs(useMaterialMovementStore())
const { fetchMaterialMovement } = useMaterialMovementStore()

const materialMovementId = route.params.id

const code = ref('')
const driver_id = ref('')
const truck_id = ref('')
const station_id = ref('')
const checker_id = ref('')
const date = ref(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 16))
const amount = ref('')
const remarks = ref('')

const fetchMaterialMovementData = async () => {
  try {
    const materialMovementData = await fetchMaterialMovement(materialMovementId)

    code.value = materialMovementData.code
    driver_id.value = materialMovementData.driver.id
    truck_id.value = materialMovementData.truck.id
    station_id.value = materialMovementData.station.id
    checker_id.value = materialMovementData.checker.id
    date.value = materialMovementData.date
    amount.value = materialMovementData.amount
    remarks.value = materialMovementData.remarks
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchMaterialMovementData()
  document.title = 'Edit Material Movement'
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

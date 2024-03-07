<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDriverStore } from '@/stores/driver'
import { useStationStore } from '@/stores/station'
import { useTruckStore } from '@/stores/truck'
import { useCheckerStore } from '@/stores/checker'

const { drivers } = storeToRefs(useDriverStore())
const { fetchDrivers } = useDriverStore()

const { stations } = storeToRefs(useStationStore())
const { fetchStations } = useStationStore()

const { trucks } = storeToRefs(useTruckStore())
const { fetchTrucks } = useTruckStore()

const { checkers } = storeToRefs(useCheckerStore())
const { fetchCheckers } = useCheckerStore()

fetchDrivers()
fetchStations()
fetchTrucks()
fetchCheckers()


onMounted(() => {
  document.title = 'Dashboard'
})
</script>

<template>
  <VCol>
    <VRow>
      <h1>Dashboard</h1>
    </VRow>

    <VRow class="mt-3">
      <VCol
        sm="12"
        md="6"
        lg="3"
      >
        <VCard>
          <VCardTitle>
            Total Driver
          </VCardTitle>
          <VCardText>
            {{ drivers.length }}
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="3"
      >
        <VCard>
          <VCardTitle>
            Total Station
          </VCardTitle>
          <VCardText>
            {{ stations.length }}
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="3"
      >
        <VCard>
          <VCardTitle>
            Total Truck
          </VCardTitle>
          <VCardText>
            {{ trucks.length }}
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="3"
      >
        <VCard>
          <VCardTitle>
            Total Checker
          </VCardTitle>
          <VCardText>
            {{ checkers.length }}
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCol>
</template>

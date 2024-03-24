<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDriverStore } from '@/stores/driver'
import { useStationStore } from '@/stores/station'
import { useTruckStore } from '@/stores/truck'
import { useCheckerStore } from '@/stores/checker'
import { useMaterialMovementStore } from '@/stores/materialMovement'
import { useCommonStore } from '@/stores/common'

async function fetchData(fetchFunction, options) {
  return await fetchFunction(options)
}

const { fetchDrivers } = useDriverStore()
const { fetchStations, fetchStationCategoriesWithoutGas } = useStationStore()
const { fetchTrucks } = useTruckStore()
const { fetchCheckers } = useCheckerStore()
const { fetchStatisticTruckPerDayByStation, fetchStatisticRitagePerDayByStation, fetchStatisticMeasurementVolumeByStation, fetchStatisticRitageVolumeByStation } = useMaterialMovementStore()
const { fetchDatePeriods } = useCommonStore()

const drivers = storeToRefs(useDriverStore()).drivers
const stations = storeToRefs(useStationStore()).stations
const categories = storeToRefs(useStationStore()).categories
const trucks = storeToRefs(useTruckStore()).trucks
const checkers = storeToRefs(useCheckerStore()).checkers
const datePeriods = storeToRefs(useCommonStore()).datePeriods

fetchDatePeriods()
fetchDrivers()
fetchStations()
fetchStationCategoriesWithoutGas()
fetchTrucks()
fetchCheckers()

const dateTypeStatisticTruckPerDayByStation = ref('all')
const dateTypeStatisticRitagePerDayByStation = ref('all')
const dateTypeStatisticMeasurementVolumeByStation = ref('all')
const dateTypeStatisticRitageVolumeByStation = ref('all')

const stationCategoryStatisticTruckPerDayByStation = ref('Quary')
const stationCategoryStatisticRitagePerDayByStation = ref('Quary')
const stationCategoryStatisticMeasurementVolumeByStation = ref('Quary')
const stationCategoryStatisticRitageVolumeByStation = ref('Quary')

const chartOptionsStatisticTruckPerDayByStation = ref({})
const chartSeriesStatisticTruckPerDayByStation = ref([])
const chartOptionsStatisticRitagePerDayByStation = ref({})
const chartSeriesStatisticRitagePerDayByStation = ref([])
const chartOptionsStatisticMeasurementVolumeByStation = ref({})
const chartSeriesStatisticMeasurementVolumeByStation = ref([])
const chartOptionsStatisticRitageVolumeByStation = ref({})
const chartSeriesStatisticRitageVolumeByStation = ref([])


async function fetchDataAndSetupChart(fetchFunction, options, chartOptions, chartSeries) {
  const data = await fetchData(fetchFunction, options)

  chartOptions.value = {
    chart: {
      width: '100%',
      type: 'pie',
    },
    legend: {
      position: 'right',
    },
    labels: data.map(item => item.station),
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
  chartSeries.value = data.map(item => item.value)
}

async function fetchDataForCharts() {
  await fetchDataAndSetupChart(fetchStatisticTruckPerDayByStation, { statistic_type: 'count', date_type: dateTypeStatisticTruckPerDayByStation.value, station_category: stationCategoryStatisticTruckPerDayByStation.value }, chartOptionsStatisticTruckPerDayByStation, chartSeriesStatisticTruckPerDayByStation)
  await fetchDataAndSetupChart(fetchStatisticRitagePerDayByStation, { statistic_type: 'avg', date_type: dateTypeStatisticRitagePerDayByStation.value, station_category: stationCategoryStatisticRitagePerDayByStation.value }, chartOptionsStatisticRitagePerDayByStation, chartSeriesStatisticRitagePerDayByStation)
  await fetchDataAndSetupChart(fetchStatisticMeasurementVolumeByStation, { statistic_type: 'sum', date_type: dateTypeStatisticMeasurementVolumeByStation.value, station_category: stationCategoryStatisticMeasurementVolumeByStation.value }, chartOptionsStatisticMeasurementVolumeByStation, chartSeriesStatisticMeasurementVolumeByStation)
  await fetchDataAndSetupChart(fetchStatisticRitageVolumeByStation, { statistic_type: 'sum', date_type: dateTypeStatisticRitageVolumeByStation.value, station_category: stationCategoryStatisticRitageVolumeByStation.value }, chartOptionsStatisticRitageVolumeByStation, chartSeriesStatisticRitageVolumeByStation)
}

fetchDataForCharts()

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

      <VCol
        sm="12"
        md="6"
        lg="6"
      >
        <VCard class="pa-3">
          <h3>Mumet 1 Truk</h3>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="datePeriod in datePeriods"
              :key="datePeriod"
            >
              <button
                class="btn-filter"
                :class="{ active: dateTypeStatisticTruckPerDayByStation === datePeriod.name }"
                @click="dateTypeStatisticTruckPerDayByStation = datePeriod.name; fetchDataForCharts()"
              >
                {{ datePeriod.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="category in categories"
              :key="category"
            >
              <button
                class="btn-filter"
                :class="{ active: stationCategoryStatisticTruckPerDayByStation === category.name }"
                @click="stationCategoryStatisticTruckPerDayByStation = category.name; fetchDataForCharts()"
              >
                {{ category.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <VCardText>
            <apexchart
              width="500"
              type="pie"
              :options="chartOptionsStatisticTruckPerDayByStation"
              :series="chartSeriesStatisticTruckPerDayByStation"
            />
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="6"
      >
        <VCard class="pa-3">
          <h3>Mumet 2 Ritage</h3>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="datePeriod in datePeriods"
              :key="datePeriod"
            >
              <button
                class="btn-filter"
                :class="{ active: dateTypeStatisticRitagePerDayByStation === datePeriod.name }"
                @click="dateTypeStatisticRitagePerDayByStation = datePeriod.name; fetchDataForCharts()"
              >
                {{ datePeriod.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="category in categories"
              :key="category"
            >
              <button
                class="btn-filter"
                :class="{ active: stationCategoryStatisticRitagePerDayByStation === category.name }"
                @click="stationCategoryStatisticRitagePerDayByStation = category.name; fetchDataForCharts()"
              >
                {{ category.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <VCardText>
            <apexchart
              width="500"
              type="pie"
              :options="chartOptionsStatisticRitagePerDayByStation"
              :series="chartSeriesStatisticRitagePerDayByStation"
            />
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="6"
      >
        <VCard class="pa-3">
          <h3>Mumet 3 Volume</h3>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="datePeriod in datePeriods"
              :key="datePeriod"
            >
              <button
                class="btn-filter"
                :class="{ active: dateTypeStatisticMeasurementVolumeByStation === datePeriod.name }"
                @click="dateTypeStatisticMeasurementVolumeByStation = datePeriod.name; fetchDataForCharts()"
              >
                {{ datePeriod.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="category in categories"
              :key="category"
            >
              <button
                class="btn-filter"
                :class="{ active: stationCategoryStatisticMeasurementVolumeByStation === category.name }"
                @click="stationCategoryStatisticMeasurementVolumeByStation = category.name; fetchDataForCharts()"
              >
                {{ category.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <VCardText>
            <apexchart
              width="500"
              type="pie"
              :options="chartOptionsStatisticMeasurementVolumeByStation"
              :series="chartSeriesStatisticMeasurementVolumeByStation"
            />
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="6"
      >
        <VCard class="pa-3">
          <h3>Mumet 4 Volume</h3>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="datePeriod in datePeriods"
              :key="datePeriod"
            >
              <button
                class="btn-filter"
                :class="{ active: dateTypeStatisticRitageVolumeByStation === datePeriod.name }"
                @click="dateTypeStatisticRitageVolumeByStation = datePeriod.name; fetchDataForCharts()"
              >
                {{ datePeriod.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <div class="d-flex gap-3 mt-3">
            <div
              v-for="category in categories"
              :key="category"
            >
              <button
                class="btn-filter"
                :class="{ active: stationCategoryStatisticRitageVolumeByStation === category.name }"
                @click="stationCategoryStatisticRitageVolumeByStation = category.name; fetchDataForCharts()"
              >
                {{ category.name.toUpperCase() }}
              </button>
            </div>
          </div>
          <VCardText>
            <apexchart
              width="500"
              type="pie"
              :options="chartOptionsStatisticRitageVolumeByStation"
              :series="chartSeriesStatisticRitageVolumeByStation"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCol>
</template>

<style scoped>
.btn-filter {
  padding: 5px 10px;
  border: 1px solid rgb(105,108,255);
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.btn-filter:hover {
  background-color: rgb(105,108,255);
  color: white;
}

.btn-filter.active {
  background-color: rgb(105,108,255);
  color: white;
}
</style>

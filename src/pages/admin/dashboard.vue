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
const { fetchStatisticTruckPerDayByStation, fetchStatisticRitagePerDayByStation, fetchStatisticMeasurementVolumeByStation, fetchStatisticRitageVolumeByStation, fetchRatioMeasurementByRitage } = useMaterialMovementStore()
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
const chartOptionsRatioMeasurementByRitage = ref({})
const chartSeriesRatioMeasurementByRitage = ref([])


async function fetchDataAndSetupChart(fetchFunction, options, chartOptions, chartSeries, chartType) {
  const data = await fetchData(fetchFunction, options)


  chartOptions.value = {
    chart: {
      width: '100%',
      type: chartType,
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

  if (chartType === 'bar') {
    chartOptions.value = {
      chart: {
        width: '100%',
        type: chartType,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: data.map(item => item.station),
      },
      legend: {
        position: 'right',
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(2) + "%"
        },
        offsetY: -20, 
      },
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

    chartSeries.value = [
      {
        name: 'Ratio',
        data: data.map(item => item.value),
      },
    ]
  }
}

async function fetchDataForCharts() {
  await fetchDataAndSetupChart(fetchStatisticTruckPerDayByStation, { statistic_type: 'count', date_type: dateTypeStatisticTruckPerDayByStation.value, station_category: stationCategoryStatisticTruckPerDayByStation.value }, chartOptionsStatisticTruckPerDayByStation, chartSeriesStatisticTruckPerDayByStation, 'pie')
  await fetchDataAndSetupChart(fetchStatisticRitagePerDayByStation, { statistic_type: 'avg', date_type: dateTypeStatisticRitagePerDayByStation.value, station_category: stationCategoryStatisticRitagePerDayByStation.value }, chartOptionsStatisticRitagePerDayByStation, chartSeriesStatisticRitagePerDayByStation, 'pie')
  await fetchDataAndSetupChart(fetchStatisticMeasurementVolumeByStation, { statistic_type: 'sum', date_type: dateTypeStatisticMeasurementVolumeByStation.value, station_category: stationCategoryStatisticMeasurementVolumeByStation.value }, chartOptionsStatisticMeasurementVolumeByStation, chartSeriesStatisticMeasurementVolumeByStation, 'pie')
  await fetchDataAndSetupChart(fetchStatisticRitageVolumeByStation, { statistic_type: 'sum', date_type: dateTypeStatisticRitageVolumeByStation.value, station_category: stationCategoryStatisticRitageVolumeByStation.value }, chartOptionsStatisticRitageVolumeByStation, chartSeriesStatisticRitageVolumeByStation, 'pie')
  await fetchDataAndSetupChart(fetchRatioMeasurementByRitage, { statistic_type: 'avg', date_type: dateTypeStatisticRitageVolumeByStation.value, station_category: stationCategoryStatisticRitageVolumeByStation.value }, chartOptionsRatioMeasurementByRitage, chartSeriesRatioMeasurementByRitage, 'bar')
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
        md="12"
        lg="12"
      >
        <div class="d-flex gap-3 mt-3">
          <div
            v-for="datePeriod in datePeriods"
            :key="datePeriod"
          >
            <button
              class="btn-filter"
              :class="{ active: dateTypeStatisticTruckPerDayByStation === datePeriod.name && dateTypeStatisticRitagePerDayByStation === datePeriod.name }"
              @click="dateTypeStatisticTruckPerDayByStation = datePeriod.name; dateTypeStatisticRitagePerDayByStation = datePeriod.name; fetchDataForCharts()"
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
              :class="{ active: stationCategoryStatisticTruckPerDayByStation === category.name && stationCategoryStatisticRitagePerDayByStation === category.name }"
              @click="stationCategoryStatisticTruckPerDayByStation = category.name; stationCategoryStatisticRitagePerDayByStation = category.name; fetchDataForCharts()"
            >
              {{ category.name.toUpperCase() }}
            </button>
          </div>
        </div>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="6"
      >
        <VCard class="pa-3">
          <h3>DUMPTRUCK</h3>
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
          <h3>RITAGE / DAY</h3>
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
        md="12"
        lg="12"
      >
        <div class="d-flex gap-3 mt-3">
          <div
            v-for="datePeriod in datePeriods"
            :key="datePeriod"
          >
            <button
              class="btn-filter"
              :class="{ active: dateTypeStatisticMeasurementVolumeByStation === datePeriod.name && dateTypeStatisticRitageVolumeByStation === datePeriod.name }"
              @click="dateTypeStatisticMeasurementVolumeByStation = datePeriod.name; dateTypeStatisticRitageVolumeByStation = datePeriod.name; fetchDataForCharts()"
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
              :class="{ active: stationCategoryStatisticMeasurementVolumeByStation === category.name && stationCategoryStatisticRitageVolumeByStation === category.name }"
              @click="stationCategoryStatisticMeasurementVolumeByStation = category.name; stationCategoryStatisticRitageVolumeByStation = category.name; fetchDataForCharts()"
            >
              {{ category.name.toUpperCase() }}
            </button>
          </div>
        </div>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="6"
      >
        <VCard class="pa-3">
          <h3>MEASUREMENT VOLUME</h3>
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

      <VCol
        sm="12"
        md="6"
        lg="6"
      >
        <VCard class="pa-3">
          <h3>RITAGE VOLUME</h3>
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
        md="12"
        lg="12"
      >
        <h4>
          Ratio / Measurement by Ritage
        </h4>

        <apexchart
          width="100%"
          type="bar"
          :options="chartOptionsRatioMeasurementByRitage"
          :series="chartSeriesRatioMeasurementByRitage"
        />
      </VCol>
    </VRow>
  </VCol>
</template>

<style scoped>
.btn-filter {
  padding: 5px 10px;
  border: 1px solid rgb(105, 108, 255);
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.btn-filter:hover {
  background-color: rgb(105, 108, 255);
  color: white;
}

.btn-filter.active {
  background-color: rgb(105, 108, 255);
  color: white;
}
</style>

<template>
  <VRow>
    <VCol cols="9">
      <VCard>
        <VCardTitle>
          Chart Grafik Getaran
        </VCardTitle>
        <VCardBody>
          <canvas ref="chartCanvas" />
        </VCardBody>
      </VCard>
    </VCol>

    <VCol
      cols="3"
      class="d-flex flex-column justify-content-between"
    >
      <VCard>
        <VCardTitle>
          Detail Getaran
        </VCardTitle>
        <VCardBody>
          <VRow class="p-5">
            <VCol cols="12">
              <VText class="fw-bold">0 mm/s</VText>
            </VCol>
            <VCol cols="12">
              <VText class="fw-bold">0 dB</VText>
            </VCol>
            <VCol cols="12">
              <VText class="fw-bold">-</VText>
            </VCol>
          </VRow>
        </VCardBody>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'
import 'chartjs-plugin-datalabels'

const chartCanvas = ref(null)
let chart = null
let timer = null

const fetchData = () => {
  fetch('https://ews.hasilkarya.co.id/api/v1/ews-device-measurements/chart?code=EWS001', {
    headers: {
      'X-API-KEY': 'CmNrYrcnOVQ92hDd',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.success) {

        const data = responseData.data.map(item => {
          return {
            ...item,
            time: formatTime(item.time),
          }
        })

        updateChart(data)

        const { vibration_value, db_value, time } = responseData.data[0]

        const vibrationText = document.querySelectorAll('VText')[0]
        const dbText = document.querySelectorAll('VText')[1]
        const timeText = document.querySelectorAll('VText')[2]

        vibrationText.innerText = `${vibration_value} mm/s`
        dbText.innerText = `${db_value} dB`
        timeText.innerText = time
      } else {
        console.error('Failed to fetch data')
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })
}

const updateChart = latestData => {
  const { vibration_value, db_value, time } = latestData[0]

  if (!chart) {
    chart = new Chart(chartCanvas.value.getContext('2d'), {
      type: 'line',
      data: {
        labels: [time], 
        datasets: [
          {
            label: 'Vibration Value',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            tension: 0.5,
            data: [vibration_value],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
       
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart',
        },
      },
    })
  } else {
    chart.data.labels.push(time)
    chart.data.datasets[0].data.push(vibration_value)
    chart.update()
  }
}

function formatTime(waktu) {
  return waktu.split(' ')[1]
}

onMounted(() => {
  fetchData()
  timer = setInterval(fetchData, 3000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
canvas {
  width: 100%;
  height: 300px;
}

.p-5 {
  padding: 1.25rem !important;
}
</style>

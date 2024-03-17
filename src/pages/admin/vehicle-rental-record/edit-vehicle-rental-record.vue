<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Ubah Data Penyewaan Kendaraan
      </h2>

      <VBtn
        to="/admin/vehicle-rental-record"
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
                placeholder="Kode Penyewaan Kendaraan"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="truck_id"
                :items="trucks"
                :item-title="item => item.brand + ' ' + item.model"
                :item-value="item => item.id"
                label="Truk"
                placeholder="Pilih Truk"
                :error-messages="error && error.truck_id ? [error.truck_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="heavy_vehicle_id"
                :items="heavyVehicles"
                :item-title="item => item.brand + ' ' + item.model"
                :item-value="item => item.id"
                label="Alat Berat"
                placeholder="Pilih Alat Berat"
                :error-messages="error && error.heavy_vehicle_id ? [error.heavy_vehicle_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="start_date"
                label="Tanggal Mulai"
                placeholder="Tanggal Mulai"
                type="datetime-local"
                :error-messages="error && error.start_date ? [error.start_date] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="rental_duration"
                label="Durasi Penyewaan"
                placeholder="Durasi Penyewaan"
                :error-messages="error && error.rental_duration ? [error.rental_duration] : []"
                type="number"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="rental_cost"
                label="Biaya Penyewaan"
                placeholder="Biaya Penyewaan"
                :error-messages="error && error.rental_cost ? [error.rental_cost] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="is_paid"
                label="Status Pembayaran"
                :items="[
                  { text: 'Belum Dibayar', value: 0 },
                  { text: 'Sudah Dibayar', value: 1 }
                ]"
                :item-title="item => item.text"
                :item-value="item => item.value"
                :error-messages="error && error.is_paid ? [error.is_paid] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="remarks"
                label="Catatan"
                placeholder="Catatan"
                :error-messages="error && error.remarks ? [error.remarks] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VFileInput
                v-model="payment_proof_image"
                label="Bukti Pembayaran"
                placeholder="Pilih Berkas"
                :error-messages="error && error.payment_proof_image ? [error.payment_proof_image] : []"
              />
              <VImg
                v-if="payment_proof_image_url"
                :src="payment_proof_image_url"
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
import { useVehicleRentalRecordStore } from '@/stores/vehicleRentalRecord'
import { useTruckStore } from '@/stores/truck'
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { VFileInput } from 'vuetify/lib/components/index.mjs'


const { loading, error } = storeToRefs(useVehicleRentalRecordStore())
const { fetchVehicleRentalRecord, updateVehicleRentalRecord } = useVehicleRentalRecordStore()

const { trucks } = storeToRefs(useTruckStore())
const { fetchTrucks } = useTruckStore()

const { heavyVehicles } = storeToRefs(useHeavyVehicleStore())
const { fetchHeavyVehicles } = useHeavyVehicleStore()

fetchTrucks()
fetchHeavyVehicles()

const vehicleRentalRecordId = useRoute().params.id

const code = ref('AUTO')
const truck_id = ref()
const heavy_vehicle_id = ref()
const start_date = ref()
const rental_duration = ref()
const rental_cost = ref()
const is_paid = ref(0)
const remarks = ref('')
const payment_proof_image = ref(null)
const payment_proof_image_url = ref(null)

const fetchVehicleRentalRecordData = async () => {

  try {
    const vehicleRentalRecord = await fetchVehicleRentalRecord(vehicleRentalRecordId)

    if (vehicleRentalRecord.payment_proof_image_url != null) {
      fetch(vehicleRentalRecord.payment_proof_image_url)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          
          a.href = url
          a.download = 'image.jpg'
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
        })
        .catch(error => {
          console.error('Gagal mengunduh gambar:', error)
          alert('Gagal mengunduh gambar.')
        })
    }

    code.value = vehicleRentalRecord.code
    truck_id.value = vehicleRentalRecord.truck?.id
    heavy_vehicle_id.value = vehicleRentalRecord.heavy_vehicle?.id
    start_date.value = vehicleRentalRecord.start_date.split(':').slice(0, 2).join(':')
    rental_duration.value = vehicleRentalRecord.rental_duration
    rental_cost.value = vehicleRentalRecord.rental_cost
    is_paid.value = vehicleRentalRecord.is_paid === true ? 1 : 0
    remarks.value = vehicleRentalRecord.remarks
    payment_proof_image.value = vehicleRentalRecord.payment_proof_image
    payment_proof_image_url.value = vehicleRentalRecord.payment_proof_image_url
  } catch (e) {
    console.error(e)
  }
}


const handleSubmit = () => {
  updateVehicleRentalRecord({
    code: code.value,
    id: vehicleRentalRecordId,
    truck_id: truck_id.value,
    heavy_vehicle_id: heavy_vehicle_id.value,
    start_date: start_date.value.split('T').join(' ') + ':00',
    rental_duration: rental_duration.value,
    rental_cost: rental_cost.value,
    is_paid: is_paid.value,
    remarks: remarks.value,
    payment_proof_image: payment_proof_image.value,
  })
}

const handleReset = () => {
  code.value = 'AUTO'
  truck_id.value = null
  heavy_vehicle_id.value = null
  start_date.value = null
  rental_duration.value = null
  rental_cost.value = null
  is_paid.value = 0
  remarks.value = ''
  payment_proof_image.value = null
  payment_proof_image_url.value = null
}



onMounted(() => {
  fetchVehicleRentalRecordData()

  document.title = 'Edit Penyewaan Kendaraan'
})

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

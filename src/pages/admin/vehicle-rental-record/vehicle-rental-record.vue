<template>
  <VDialog
    v-if="showPaymentProofImage"
    v-model="showPaymentProofImage"
    width="500"
  >
    <VCard>
      <div class="d-flex justify-space-between align-center pa-4">
        Bukti Pembayaran

        <VSpacer />

       
        <VIcon @click="togglePaymentProofImage">
          mdi-close
        </VIcon>
      </div>

      <VImg
        :src="payment_proof_image_url"
        width="100%"
        height="auto"
        alt="Bukti Pembayaran"
      />
    </VCard>
  </VDialog>

  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Detail Penyewaan Kendaraan
      </h2>

      <VBtn
        :to="{ name: 'admin-vehicle-rental-record' }"
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
                placeholder="Kode Detail Penyewaan Kendaraan"
                :error-messages="error && error.code ? [error.code] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="category"
                label="Jenis Kendaraan"
                placeholder="Jenis Kendaraan Detail Penyewaan Kendaraan"
                :error-messages="error && error.model ? [error.model] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="brand"
                label="Merk"
                placeholder="Merk Detail Penyewaan Kendaraan"
                :error-messages="error && error.brand ? [error.brand] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="model"
                label="Model"
                placeholder="Model Detail Penyewaan Kendaraan"
                :error-messages="error && error.model ? [error.model] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="vendor"
                label="Vendor"
                placeholder="Vendor Detail Penyewaan Kendaraan"
                :error-messages="error && error.vendor ? [error.vendor] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="start_date"
                label="Tanggal Mulai"
                placeholder="Tanggal Mulai Detail Penyewaan Kendaraan"
                :error-messages="error && error.start_date ? [error.start_date] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="rental_duration"
                label="Durasi Penyewaan"
                placeholder="Durasi
                Penyewaan Detail Penyewaan Kendaraan"
                :error-messages="error && error.rental_duration ? [error.rental_duration] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </vcol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="end_date"
                label="Tanggal Selesai"
                placeholder="Tanggal Selesai Detail Penyewaan Kendaraan"
                :error-messages="error && error.end_date ? [error.end_date] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="rental_cost"
                label="Biaya Penyewaan"
                placeholder="Biaya Penyewaan Detail Penyewaan Kendaraan"
                :error-messages="error && error.rental_cost ? [error.rental_cost] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VBtn
                v-if="payment_proof_image"
                color="primary"
                @click="togglePaymentProofImage"
              >
                Lihat Bukti Pembayaran
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
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { toRupiah } from '@/@core/utils/formatters'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useVehicleRentalRecordStore())
const { fetchVehicleRentalRecord } = useVehicleRentalRecordStore()

const vehicleRentalRecordId = route.params.id

const code = ref('')
const category = ref('')
const brand = ref('')
const model = ref('')
const vendor = ref()
const start_date = ref('')
const rental_duration = ref('')
const end_date = ref('')
const rental_cost = ref('')
const payment_proof_image = ref('')
const payment_proof_image_url = ref('')

const fetchVehicleRentalRecordData = async () => {
  try {
    const vehicleRentalRecord = await fetchVehicleRentalRecord(vehicleRentalRecordId)

    code.value = vehicleRentalRecord.code
    category.value = vehicleRentalRecord.truck ? 'Truk' : 'Alat Berat'
    brand.value = vehicleRentalRecord.truck?.brand || vehicleRentalRecord.heavy_vehicle?.brand
    model.value = vehicleRentalRecord.truck?.model || vehicleRentalRecord.heavy_vehicle?.model
    vendor.value = vehicleRentalRecord.truck?.vendor?.name || vehicleRentalRecord.heavy_vehicle?.vendor?.name
    start_date.value = vehicleRentalRecord.start_date
    rental_duration.value = vehicleRentalRecord.rental_duration
    rental_cost.value = toRupiah(vehicleRentalRecord.rental_cost)
    end_date.value = vehicleRentalRecord.end_date
    payment_proof_image.value = vehicleRentalRecord.payment_proof_image
    payment_proof_image_url.value = vehicleRentalRecord.payment_proof_image_url

  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchVehicleRentalRecordData()

  document.title = 'Detail Penyewaan Kendaraan'
})

const showPaymentProofImage = ref(false)

const togglePaymentProofImage = () => {
  showPaymentProofImage.value = !showPaymentProofImage.value
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

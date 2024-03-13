<script setup>
import { useProjectStore } from '@/stores/project'
import { useRegionStore } from '@/stores/region'
import { useClientStore } from '@/stores/client'
import { useDriverStore } from '@/stores/driver'
import { useTruckStore } from '@/stores/truck'
import { useHeavyVehicleStore } from '@/stores/heavyVehicle'
import { useStationStore } from '@/stores/station'
import { useCheckerStore } from '@/stores/checker'
import { useTechnicalAdminStore } from '@/stores/technicalAdmin'
import { useGasOperatorStore } from '@/stores/gasOperator'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(useProjectStore())
const { createProject } = useProjectStore()

const { provinces, regencies, districts, subdistricts } = storeToRefs(useRegionStore())
const { fetchProvinces, fetchRegencies, fetchDistricts, fetchSubdistricts } = useRegionStore()

fetchProvinces()

const { clients } = storeToRefs(useClientStore())
const { fetchClients } = useClientStore()

const { drivers } = storeToRefs(useDriverStore())
const { fetchDrivers } = useDriverStore()

const { trucks } = storeToRefs(useTruckStore())
const { fetchTrucks } = useTruckStore()

const { heavyVehicles } = storeToRefs(useHeavyVehicleStore())
const { fetchHeavyVehicles } = useHeavyVehicleStore()

const { stations } = storeToRefs(useStationStore())
const { fetchStations } = useStationStore()

const { checkers } = storeToRefs(useCheckerStore())
const { fetchCheckers } = useCheckerStore()

const { technicalAdmins } = storeToRefs(useTechnicalAdminStore())
const { fetchTechnicalAdmins } = useTechnicalAdminStore()

const { gasOperators } = storeToRefs(useGasOperatorStore())
const { fetchGasOperators } = useGasOperatorStore()

fetchClients()
fetchDrivers()
fetchTrucks()
fetchHeavyVehicles()
fetchStations()
fetchCheckers()
fetchTechnicalAdmins()
fetchGasOperators()

const code = ref('AUTO')
const name = ref('')
const description = ref('')
const start_date = ref('')
const end_date = ref('')
const person_in_charge = ref('')
const amount = ref('')
const client_id = ref('')
const province = ref('')
const regency = ref('')
const district = ref('')
const subdistrict = ref('')
const status = ref('')
const driverArr = ref([])
const truckArr = ref([])
const heavyVehicleArr = ref([])
const stationArr = ref([])
const checkerArr = ref([])
const technicalAdminArr = ref([])
const gasOperatorArr = ref([])

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  description.value = ''
  start_date.value = ''
  end_date.value = ''
  person_in_charge.value = ''
  amount.value = ''
  client_id.value = ''
  province.value = ''
  regency.value = ''
  district.value = ''
  subdistrict.value = ''
  status.value = ''
  driverArr.value = []
  truckArr.value = []
  heavyVehicleArr.value = []
  stationArr.value = []
  checkerArr.value = []
  technicalAdminArr.value = []
  gasOperatorArr.value = []
}

const handleSubmit = () => {
  const provinceName = provinces.value.find(item => item.id === province.value)?.nama
  const regencyName = regencies.value.find(item => item.id === regency.value)?.nama
  const districtName = districts.value.find(item => item.id === district.value)?.nama
  const subdistrictName = subdistricts.value.find(item => item.id === subdistrict.value)?.nama

  
  createProject({
    code: code.value,
    name: name.value,
    description: description.value,
    start_date: start_date.value,
    end_date: end_date.value,
    person_in_charge: person_in_charge.value,
    amount: amount.value,
    client_id: client_id.value,
    province: provinceName,
    regency: regencyName,
    district: districtName,
    subdistrict: subdistrictName,
    status: status.value,
    drivers: driverArr.value,
    trucks: truckArr.value,
    heavy_vehicles: heavyVehicleArr.value,
    stations: stationArr.value,
    checkers: checkerArr.value,
    technical_admins: technicalAdminArr.value,
    gas_operators: gasOperatorArr.value,
  })
}

onMounted(() => {
  document.title = 'Tambah Projek'
})

onUnmounted(() => {
  handleReset()
  error.value = null
})

watch(province, value => {
  fetchRegencies(value)
})

watch(regency, value => {
  fetchDistricts(value)
})

watch(district, value => {
  fetchSubdistricts(value)
})
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Projek
      </h2>

      <VBtn
        to="/admin/project"
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
                placeholder="Kode Projek"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Projek"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="description"
                label="Deskripsi"
                placeholder="Deskripsi Projek"
                :error-messages="error && error.description ? [error.description] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="start_date"
                label="Tanggal Mulai"
                placeholder="Tanggal Mulai Projek"
                type="date"
                :error-messages="error && error.start_date ? [error.start_date] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="end_date"
                label="Tanggal Selesai"
                placeholder="Tanggal Selesai Projek"
                type="date"
                :error-messages="error && error.end_date ? [error.end_date] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="person_in_charge"
                label="Penanggung Jawab"
                placeholder="Penanggung Jawab Projek"
                :error-messages="error && error.person_in_charge ? [error.person_in_charge] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="amount"
                label="Pendapatan"
                placeholder="Pendapatan Projek"
                :error-messages="error && error.amount ? [error.amount] : []"
              />
            </VCol>
            
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="client_id"
                label="Client"
                :items="clients"
                :error-messages="error && error.client_id ? [error.client_id] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="status"
                label="Status"
                :items="['DRAFT', 'PENDING', 'ONGOING', 'FINISHED']"
                :error-messages="error && error.status ? [error.status] : []"
              />
            </VCol>
            
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="driverArr"
                label="Driver"
                :items="drivers"
                multiple
                :error-messages="error && error.driverArr ? [error.driverArr] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="truckArr"
                label="Truck"
                :items="trucks"
                multiple
                :error-messages="error && error.truckArr ? [error.truckArr] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="heavyVehicleArr"
                label="Alat Berat"
                :items="heavyVehicles"
                multiple
                :error-messages="error && error.heavyVehicleArr ? [error.heavyVehicleArr] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="stationArr"
                label="Station"
                :items="stations"
                multiple
                :error-messages="error && error.stationArr ? [error.stationArr] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="checkerArr"
                label="Checker"
                :items="checkers"
                multiple
                :error-messages="error && error.checkerArr ? [error.checkerArr] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="technicalAdminArr"
                label="Technical Admin"
                :items="technicalAdmins"
                multiple
                :error-messages="error && error.technicalAdminArr ? [error.technicalAdminArr] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="gasOperatorArr"
                label="Gas Operator"
                :items="gasOperators"
                multiple
                :error-messages="error && error.gasOperatorArr ? [error.gasOperatorArr] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="province"
                label="Provinsi"
                :items="provinces"
                :error-messages="error && error.province ? [error.province] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="regency"
                label="Kabupaten/Kota"
                :items="regencies"
                :error-messages="error && error.regency ? [error.regency] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="district"
                label="Kecamatan"
                :items="districts"
                :error-messages="error && error.district ? [error.district] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="subdistrict"
                label="Kelurahan/Desa"
                :items="subdistricts"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []"
                :item-title="item => item.nama"
                :item-value="item => item.id"
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

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

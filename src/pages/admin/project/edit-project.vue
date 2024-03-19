<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Project
      </h2>

      <VBtn
        :to="{ name: 'admin-project' }"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VStepper 
            :items="['Umum', 'Lokasi', 'Personil', 'Preview']"
            next-text="Selanjutnya"
            prev-text="Sebelumnya"
            alt-labels
          >
            <template #item.1>
              <VCard
                title="Umum"
                flat
              >
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
                      label="Nilai Projek"
                      placeholder="Nilai Projek"
                      :error-messages="error && error.amount ? [error.amount] : []"
                      @input="amount = amount.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                    >
                      <template #prepend-inner>
                        <span class="text-body-2">
                          Rp
                        </span>
                      </template>
                    </VTextField>
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
                    md="12"
                  >
                    <VAutocomplete
                      v-model="status"
                      label="Status"
                      :items="projectStatus"
                      :item-title="item => item.name"
                      :error-messages="error && error.status ? [error.status] : []"
                    />
                  </VCol>
                </VRow>
              </VCard>
            </template>

            <template #item.2>
              <VCard
                title="Lokasi"
                flat
              >
                <VRow>
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
                </VRow>
              </VCard>
            </template>

            <template #item.3>
              <VCard
                title="Personil"
                flat
              >
                <VRow>
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
                    md="12"
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
                </VRow>
              </VCard>
            </template>

            <template #item.4>
              <VCard
                title="Preview"
                flat
              >
                <VRow>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="code"
                      label="Kode"
                      readonly
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="name"
                      label="Nama"
                      readonly
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="description"
                      label="Deskripsi"
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
                      readonly
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="end_date"
                      label="Tanggal Selesai"
                      readonly
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="person_in_charge"
                      label="Penanggung Jawab"
                      readonly
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="amount"
                      label="Pendapatan"
                      readonly
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
                      :item-title="item => item.name"
                      :item-value="item => item.id"
                      readonly
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
                      :item-title="item => item.nama"
                      :item-value="item => item.id"
                      readonly
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
                      :item-title="item => item.nama"
                      :item-value="item => item.id"
                      readonly
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
                      :item-title="item => item.nama"
                      :item-value="item => item.id"
                      readonly
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
                      :item-title="item => item.nama"
                      :item-value="item => item.id"
                      readonly
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="status"
                      label="Status"
                      readonly
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                    class="d-flex flex-column"
                  >
                    <Text>
                      Driver
                    </Text>
                   
                    <div class="d-flex flex-wrap">
                      <VChip
                        v-for="(item, index) in drivers.filter(item => driverArr.includes(item.id))"
                        :key="index"
                        label="Driver"
                        color="primary"
                        class="mr-2 mb-2"
                      >
                        {{ item.name }}
                      </VChip>
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                    class="d-flex flex-column"
                  >
                    <Text>
                      Truck
                    </Text>

                    <div class="d-flex flex-wrap">
                      <VChip
                        v-for="(item, index) in trucks.filter(item => truckArr.includes(item.id))"
                        :key="index"
                        label="Truck"
                        color="primary"
                        class="mr-2 mb-2"
                      >
                        {{ item.name }}
                      </VChip>
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                    class="d-flex flex-column"
                  >
                    <Text>
                      Alat Berat
                    </Text>

                    <div class="d-flex flex-wrap">
                      <VChip
                        v-for="(item, index) in heavyVehicles.filter(item => heavyVehicleArr.includes(item.id))"
                        :key="index"
                        label="Alat Berat"
                        color="primary"
                        class="mr-2 mb-2"
                      >
                        {{ item.name }}
                      </VChip>
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                    class="d-flex flex-column"
                  >
                    <Text>
                      Station
                    </Text>

                    <div class="d-flex flex-wrap">
                      <VChip
                        v-for="(item, index) in stations.filter(item => stationArr.includes(item.id))"
                        :key="index"
                        label="Station"
                        color="primary"
                        class="mr-2 mb-2"
                      >
                        {{ item.name }}
                      </VChip>
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                    class="d-flex flex-column"
                  >
                    <Text>
                      Checker
                    </Text>

                    <div class="d-flex flex-wrap">
                      <VChip
                        v-for="(item, index) in checkers.filter(item => checkerArr.includes(item.id))"
                        :key="index"
                        label="Checker"
                        color="primary"
                        class="mr-2 mb-2"
                      >
                        {{ item.name }}
                      </VChip>
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                    class="d-flex flex-column"
                  >
                    <Text>
                      Technical Admin
                    </Text>

                    <div class="d-flex flex-wrap">
                      <VChip
                        v-for="(item, index) in technicalAdmins.filter(item => technicalAdminArr.includes(item.id))"
                        :key="index"
                        label="Technical Admin"
                        color="primary"
                        class="mr-2 mb-2"
                      >
                        {{ item.name }}
                      </VChip>
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                    class="d-flex flex-column"
                  >
                    <Text>
                      Gas Operator
                    </Text>

                    <div class="d-flex flex-wrap">
                      <VChip
                        v-for="(item, index) in gasOperators.filter(item => gasOperatorArr.includes(item.id))"
                        :key="index"
                        label="Gas Operator"
                        color="primary"
                        class="mr-2 mb-2"
                      >
                        {{ item.name }}
                      </VChip>
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="12"
                  >
                    <VBtn
                      type="submit"
                      color="primary"
                      class="float-right"
                    >
                      Simpan
                    </VBtn>
                  </VCol>
                </VRow>
              </VCard>
            </template>
          </VStepper>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

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
import { useRoute } from 'vue-router'

const route = useRoute()

const { projectStatus, loading, error } = storeToRefs(useProjectStore())
const { updateProject, fetchProjectStatus, fetchProject } = useProjectStore()

fetchProjectStatus()

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

const projectId = route.params.id

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

const fetchProjectData = async () => {
  try {
    const project = await fetchProject(projectId)

    code.value = project.code
    name.value = project.name
    description.value = project.description
    start_date.value = project.start_date
    end_date.value = project.end_date
    person_in_charge.value = project.person_in_charge
    amount.value = project.amount
    client_id.value = project.client.id
    province.value = provinces.value.find(item => item.nama === project.province)?.id

    await fetchRegencies(province.value)

    regency.value = regencies.value.find(item => item.nama === project.regency)?.id

    await fetchDistricts(regency.value)

    district.value = districts.value.find(item => item.nama === project.district)?.id

    await fetchSubdistricts(district.value)

    subdistrict.value = subdistricts.value.find(item => item.nama === project.subdistrict)?.id

    status.value = project.status
    driverArr.value = project.drivers.map(item => item.id)
    truckArr.value = project.trucks.map(item => item.id)
    heavyVehicleArr.value = project.heavy_vehicles.map(item => item.id)
    stationArr.value = project.stations.map(item => item.id)
    checkerArr.value = project.checkers.map(item => item.id)
    technicalAdminArr.value = project.technical_admins.map(item => item.id)
    gasOperatorArr.value = project.gas_operators.map(item => item.id)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchProjectData()

  document.title = 'Edit Project'
})

const handleSubmit = () => {
  const provinceName = provinces.value.find(item => item.id === province.value)?.nama
  const regencyName = regencies.value.find(item => item.id === regency.value)?.nama
  const districtName = districts.value.find(item => item.id === district.value)?.nama
  const subdistrictName = subdistricts.value.find(item => item.id === subdistrict.value)?.nama

  updateProject({
    id: projectId,
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

fetchProvinces()

watch(province, value => {
  fetchRegencies(value)
})

watch(regency, value => {
  fetchDistricts(value)
})

watch(district, value => {
  fetchSubdistricts(value)
})

const handleReset = () => {
  fetchProjectData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

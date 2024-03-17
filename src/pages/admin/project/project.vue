<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Projek
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
        <VForm>
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
                v-model="name"
                label="Nama"
                placeholder="Nama Projek"
                :error-messages="error && error.name ? [error.name] : []"
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
                v-model="description"
                label="Deskripsi"
                placeholder="Deskripsi Projek"
                :error-messages="error && error.description ? [error.description] : []"
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
                v-model="startDate"
                label="Tanggal Mulai"
                placeholder="Tanggal Mulai Projek"
                :error-messages="error && error.startDate ? [error.startDate] : []"
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
                v-model="endDate"
                label="Tanggal Selesai"
                placeholder="Tanggal Selesai Projek"
                :error-messages="error && error.endDate ? [error.endDate] : []"
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
                v-model="personInCharge"
                label="Penanggung Jawab"
                placeholder="Penanggung Jawab Projek"
                :error-messages="error && error.personInCharge ? [error.personInCharge] : []"
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
                v-model="amount"
                label="Jumlah"
                placeholder="Jumlah Projek"
                :error-messages="error && error.amount ? [error.amount] : []"
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
                v-model="client"
                label="Pelanggan"
                placeholder="Pelanggan Projek"
                :error-messages="error && error.client ? [error.client] : []"
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
                v-model="province"
                label="Provinsi"
                placeholder="Provinsi"
                :error-messages="error && error.province ? [error.province] : []"
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
                v-model="regency"
                label="Kabupaten/Kota"
                placeholder="Kabupaten/Kota"
                :error-messages="error && error.regency ? [error.regency] : []"
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
                v-model="district"
                label="Kecamatan"
                placeholder="Kecamatan"
                :error-messages="error && error.district ? [error.district] : []"
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
                v-model="subdistrict"
                label="Kelurahan"
                placeholder="Kelurahan"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []"
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
                v-model="status"
                label="Status"
                placeholder="Status Projek"
                :error-messages="error && error.status ? [error.status] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>
            
            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="drivers"
                label="Driver"
                :items="drivers"
                :item-title="item => item.name"
                :item-value="item => item.id"
                :error-messages="error && error.drivers ? [error.drivers] : []"
                :disabled="loading"
                :loading="loading"
                readonly
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="trucks"
                label="Truk"
                :items="trucks"
                :item-title="item => item.brand + ' ' + item.model"
                :item-value="item => item.id"
                :error-messages="error && error.trucks ? [error.trucks] : []"
                :disabled="loading"
                :loading="loading"
                readonly
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="heavyVehicles"
                label="Kendaraan Berat"
                :items="heavyVehicles"
                :item-title="item => item.brand + ' ' + item.model"
                :item-value="item => item.id"
                :error-messages="error && error.heavyVehicles ? [error.heavyVehicles] : []"
                :disabled="loading"
                :loading="loading"
                readonly
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="stations"
                label="Stasiun"
                :items="stations"
                :item-title="item => item.name"
                :item-value="item => item.id"
                :error-messages="error && error.stations ? [error.stations] : []"
                :disabled="loading"
                :loading="loading"
                readonly
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="checkers"
                label="Checker"
                :items="checkers"
                :item-title="item => item.name"
                :item-value="item => item.id"
                :error-messages="error && error.checkers ? [error.checkers] : []"
                :disabled="loading"
                :loading="loading"
                readonly
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="technicalAdmins"
                label="Admin Teknis"
                :items="technicalAdmins"
                :item-title="item => item.name"
                :item-value="item => item.id"
                :error-messages="error && error.technicalAdmins ? [error.technicalAdmins] : []"
                :disabled="loading"
                :loading="loading"
                readonly
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VSelect
                v-model="gasOperators"
                label="Operator Gas"
                :items="gasOperators"
                :item-title="item => item.name"
                :item-value="item => item.id"
                :error-messages="error && error.gasOperators ? [error.gasOperators] : []"
                :disabled="loading"
                :loading="loading"
                readonly
                multiple
              />
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toRupiah } from '@/@core/utils/formatters'

const route = useRoute()

const { loading, error } = storeToRefs(useProjectStore())
const { fetchProject } = useProjectStore()

const projectId = route.params.id

const code = ref('')
const name = ref('')
const description = ref('')
const startDate = ref('')
const endDate = ref('')
const personInCharge = ref('')
const amount = ref('')
const client = ref('')
const province = ref('')
const regency = ref('')
const district = ref('')
const subdistrict = ref('')
const status = ref('')
const drivers = ref([])
const trucks = ref([])
const heavyVehicles = ref([])
const stations = ref([])
const checkers = ref([])
const technicalAdmins = ref([])
const gasOperators = ref([])

const fetchProjectData = async () => {
  try { 

    const project = await fetchProject(projectId)
  
    code.value = project.code
    name.value = project.name
    description.value = project.description
    startDate.value = project.start_date
    endDate.value = project.end_date
    personInCharge.value = project.person_in_charge
    amount.value = toRupiah(project.amount)
    client.value = project.client.name
    province.value = project.province
    regency.value = project.regency
    district.value = project.district
    subdistrict.value = project.subdistrict
    status.value = project.status
    drivers.value = project.drivers
    trucks.value = project.trucks
    heavyVehicles.value = project.heavyVehicles
    stations.value = project.stations
    checkers.value = project.checkers
    technicalAdmins.value = project.technical_admins
    gasOperators.value = project.gas_operators
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchProjectData()

  document.title = 'Proyek'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>

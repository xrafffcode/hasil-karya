<template>
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
      <VRow>
        <VCol
          cols="12"
          md="12"
        >
          <h3>Infromasi Projek</h3>

          <VDivider class="my-4" />
              
          <table class="table table-bordered">
            <tr>
              <td>Kode</td>
              <td>{{ code }}</td>
            </tr>
            <tr>
              <td>Nama</td>
              <td>{{ name }}</td>
            </tr>
            <tr>
              <td>Deskripsi</td>
              <td>{{ description }}</td>
            </tr>
            <tr>
              <td>Tanggal Mulai</td>
              <td>{{ startDate }}</td>
            </tr>
            <tr>
              <td>Tanggal Selesai</td>
              <td>{{ endDate }}</td>
            </tr>
            <tr>
              <td>Penanggung Jawab</td>
              <td>{{ personInCharge }}</td>
            </tr>
            <tr>
              <td>Jumlah</td>
              <td>{{ amount }}</td>
            </tr>
            <tr>
              <td>Pelanggan</td>
              <td>{{ client }}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <VChip
                  :color="status === 'On Going' ? 'success' : 'error'"
                  label="status"
                >
                  {{ status }}
                </VChip>
              </td>
            </tr>
          </table>
        </VCol>

        <VCol
          cols="12"
          md="12
            "
        >
          <h3>Informasi Lokasi</h3>

          <VDivider class="my-4" />

          <table class="table table-bordered">
            <tr>
              <td>Provinsi</td>
              <td>{{ province }}</td>
            </tr>
            <tr>
              <td>Kabupaten/Kota</td>
              <td>{{ regency }}</td>
            </tr>
            <tr>
              <td>Kecamatan</td>
              <td>{{ district }}</td>
            </tr>
            <tr>
              <td>Kelurahan</td>
              <td>{{ subdistrict }}</td>
            </tr>
          </table>
        </VCol>
    
        <VCol
          cols="12"
          md="12"
        >
          <h3>Informasi Personil</h3>

          <VDivider class="my-4" />

          <table class="table table-bordered">
            <tr>
              <th>Driver</th>
              <th>Truk</th>
              <th>Alat Berat</th>
              <th>Stasiun</th>
              <th>Checker</th>
              <th>Admin Teknis</th>
              <th>Operator Gas</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li
                    v-for="driver in drivers"
                    :key="driver.id"
                  >
                    {{ driver.name }}
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li
                    v-for="truck in trucks"
                    :key="truck.id"
                  >
                    {{ truck.brand }} {{ truck.model }}
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li
                    v-for="heavyVehicle in heavyVehicles"
                    :key="heavyVehicle.id"
                  >
                    {{ heavyVehicle.brand }} {{ heavyVehicle.model }}
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li
                    v-for="station in stations"
                    :key="station.id"
                  >
                    {{ station.name }}
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li
                    v-for="checker in checkers"
                    :key="checker.id"
                  >
                    {{ checker.name }}
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li
                    v-for="technicalAdmin in technicalAdmins"
                    :key="technicalAdmin.id"
                  >
                    {{ technicalAdmin.name }}
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li
                    v-for="gasOperator in gasOperators"
                    :key="gasOperator.id"
                  >
                    {{ gasOperator.name }}
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </VCol>
      </VRow>
    </VCard>
  </VCol>
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
    heavyVehicles.value = project.heavy_vehicles
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

.table {
  width: 100%;
}

.table-bordered {
  border-collapse: collapse;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #e0e0e0;
  padding: 8px;
  text-align: left;
}

.table-bordered th {
  background-color: #f5f5f5;
  font-weight: 500;
}

.table-bordered td {
  background-color: #fff;
}

.table-bordered tr:nth-child(even) td {
  background-color: #f9f9f9;
}

.table-bordered tr:nth-child(odd) td {
  background-color: #fff;
}

.table-bordered tr:last-child td {
  border-bottom: 0;
}

.table-bordered tr td:last-child {
  border-right: 0;
}

.table-bordered tr td:first-child {
  border-left: 0;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  list-style: none;
}
</style>

import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { handleError } from '@/helpers/errorHelper'

import { defineStore } from 'pinia'

export const useProjectStore = defineStore({
  id: 'project',
  state: () => ({
    projects: [],
    projectStatus: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchProjects() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/projects')


        this.projects = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchProjectStatus() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/project/read/status')

        this.projectStatus = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchProject(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/project/${id}`)

        response.data.data.trucks.forEach(truck => {
          truck.name = `${truck.brand} ${truck.model}`
        })

        response.data.data.heavy_vehicles.forEach(heavy_vehicle => {
          heavy_vehicle.name = `${heavy_vehicle.brand} ${heavy_vehicle.model}`
        })

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createProject(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/project', payload)

        this.success = response.data.message

        router.push({ name: 'admin-project' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateProject(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/project/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-project' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteProject(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/project/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})

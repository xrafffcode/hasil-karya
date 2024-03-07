const adminStationRoutes = [
  {
    path: 'station',
    component: () => import('../pages/admin/station/stations.vue'),
    name: 'admin-station',
  },
  {
    path: 'station/:id',
    component: () => import('../pages/admin/station/station.vue'),
    name: 'admin-station-view',
  },
  {
    path: 'station/create',
    component: () => import('../pages/admin/station/create-station.vue'),
    name: 'admin-station-create',
  },
  {
    path: 'station/:id/edit',
    component: () => import('../pages/admin/station/edit-station.vue'),
    name: 'admin-station-edit',
  },
]

export default adminStationRoutes

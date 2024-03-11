const adminHeavyVehicleRoutes = [
  {
    path: 'heavy-vehicle',
    component: () => import('../pages/admin/heavy-vehicle/heavy-vehicles.vue'),
    name: 'admin-heavy-vehicle',
  },
  {
    path: 'heavy-vehicle/:id',
    component: () => import('../pages/admin/heavy-vehicle/heavy-vehicle.vue'),
    name: 'admin-heavy-vehicle-view',
  },
  {
    path: 'heavy-vehicle/create',
    component: () => import('../pages/admin/heavy-vehicle/create-heavy-vehicle.vue'),
    name: 'admin-heavy-vehicle-create',
  },
  {
    path: 'heavy-vehicle/:id/edit',
    component: () => import('../pages/admin/heavy-vehicle/edit-heavy-vehicle.vue'),
    name: 'admin-heavy-vehicle-edit',
  },
]

export default adminHeavyVehicleRoutes

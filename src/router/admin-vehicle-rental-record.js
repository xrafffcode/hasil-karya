const adminVehicleRentalRecordRoutes = [
  {
    path: 'vehicle-rental-record',
    component: () => import('../pages/admin/vehicle-rental-record/vehicle-rental-records.vue'),
    name: 'admin-vehicle-rental-record',
  },
  {
    path: 'vehicle-rental-record/:id',
    component: () => import('../pages/admin/vehicle-rental-record/vehicle-rental-record.vue'),
    name: 'admin-vehicle-rental-record-view',
  },
  {
    path: 'vehicle-rental-record/create',
    component: () => import('../pages/admin/vehicle-rental-record/create-vehicle-rental-record.vue'),
    name: 'admin-vehicle-rental-record-create',
  },
  {
    path: 'vehicle-rental-record/:id/edit',
    component: () => import('../pages/admin/vehicle-rental-record/edit-vehicle-rental-record.vue'),
    name: 'admin-vehicle-rental-record-edit',
  },
]

export default adminVehicleRentalRecordRoutes

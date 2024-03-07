const adminTruckRoutes = [
  {
    path: 'truck',
    component: () => import('../pages/admin/truck/trucks.vue'),
    name: 'admin-truck',
  },
  {
    path: 'truck/:id',
    component: () => import('../pages/admin/truck/truck.vue'),
    name: 'admin-truck-view',
  },
  {
    path: 'truck/create',
    component: () => import('../pages/admin/truck/create-truck.vue'),
    name: 'admin-truck-create',
  },
  {
    path: 'truck/:id/edit',
    component: () => import('../pages/admin/truck/edit-truck.vue'),
    name: 'admin-truck-edit',
  },
]

export default adminTruckRoutes

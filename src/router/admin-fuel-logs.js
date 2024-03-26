const adminFuelLogRoutes = [
  {
    path: 'fuel-log',
    component: () => import('../pages/admin/fuel-log/fuel-logs.vue'),
    name: 'admin-fuel-log',
  },
  {
    path: 'fuel-log-truck/create',
    component: () => import('../pages/admin/fuel-log/create-fuel-log-truck.vue'),
    name: 'admin-fuel-log-truck-create',
  },
  {
    path: 'fuel-log-heavy-vehicle/create',
    component: () => import('../pages/admin/fuel-log/create-fuel-log-heavy-vehicle.vue'),
    name: 'admin-fuel-log-heavy-vehicle-create',
  },
  
  {
    path: 'fuel-log-truck/:id/edit',
    component: () => import('../pages/admin/fuel-log/edit-fuel-log-truck.vue'),
    name: 'admin-fuel-log-truck-edit',
  },
  {
    path: 'fuel-log-heavy-vehicle/:id/edit',
    component: () => import('../pages/admin/fuel-log/edit-fuel-log-heavy-vehicle.vue'),
    name: 'admin-fuel-log-heavy-vehicle-edit',
  },
  {
    path: 'fuel-log/:id',
    component: () => import('../pages/admin/fuel-log/fuel-log.vue'),
    name: 'admin-fuel-log-view',
  },
]

export default adminFuelLogRoutes

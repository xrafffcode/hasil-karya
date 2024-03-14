const adminFuelLogRoutes = [
  {
    path: '/admin/fuel-log',
    component: () => import('../pages/admin/fuel-log/fuel-logs.vue'),
    name: 'admin-fuel-log',
  },
  {
    path: '/admin/fuel-log/create',
    component: () => import('../pages/admin/fuel-log/create-fuel-log.vue'),
    name: 'admin-fuel-log-create',
  },
  {
    path: '/admin/fuel-log/:id/edit',
    component: () => import('../pages/admin/fuel-log/edit-fuel-log.vue'),
    name: 'admin-fuel-log-edit',
  },
  {
    path: '/admin/fuel-log/:id',
    component: () => import('../pages/admin/fuel-log/fuel-log.vue'),
    name: 'admin-fuel-log-view',
  },
]

export default adminFuelLogRoutes

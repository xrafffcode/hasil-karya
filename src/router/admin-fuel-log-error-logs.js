const adminFuelLogErrorLogRoutes = [
  {
    path: 'fuel-log-error-log',
    component: () => import('../pages/admin/fuel-log-error-log/fuel-log-error-logs.vue'),
    name: 'admin-fuel-log-error-log',
  },
  {
    path: 'fuel-log-error-log/:id',
    component: () => import('../pages/admin/fuel-log-error-log/fuel-log-error-log.vue'),
    name: 'admin-fuel-log-error-log-view',
  },
]

export default adminFuelLogErrorLogRoutes

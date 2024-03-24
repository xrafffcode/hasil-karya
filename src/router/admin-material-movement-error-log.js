const adminMaterialMovementRoutes = [
  {
    path: 'material-movement-error-log',
    component: () => import('../pages/admin/material-movement-error-log/material-movement-error-logs.vue'),
    name: 'admin-material-movement-error-log',
  },
  {
    path: 'material-movement-error-log/:id',
    component: () => import('../pages/admin/material-movement-error-log/material-movement-error-log.vue'),
    name: 'admin-material-movement-error-log-view',
  },
]

export default adminMaterialMovementRoutes
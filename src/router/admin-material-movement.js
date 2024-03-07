const adminMaterialMovementRoutes = [
  {
    path: 'material-movement',
    component: () => import('../pages/admin/material-movement/material-movements.vue'),
    name: 'admin-material-movement',
  },
  {
    path: 'material-movement/:id',
    component: () => import('../pages/admin/material-movement/material-movement.vue'),
    name: 'admin-material-movement-view',
  },
  {
    path: 'material-movement/create',
    component: () => import('../pages/admin/material-movement/create-material-movement.vue'),
    name: 'admin-material-movement-create',
  },
  {
    path: 'material-movement/:id/edit',
    component: () => import('../pages/admin/material-movement/edit-material-movement.vue'),
    name: 'admin-material-movement-edit',
  },
]

export default adminMaterialMovementRoutes

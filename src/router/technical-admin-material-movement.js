const technicalAdminMaterialMovementRoutes = [
  {
    path: 'material-movement',
    component: () => import('../pages/technical-admin/material-movement/material-movements.vue'),
    name: 'technical-admin-material-movement',
  },
  {
    path: 'material-movement/:id',
    component: () => import('../pages/technical-admin/material-movement/material-movement.vue'),
    name: 'technical-admin-material-movement-view',
  },
  {
    path: 'material-movement/:id/edit',
    component: () => import('../pages/technical-admin/material-movement/edit-material-movement.vue'),
    name: 'technical-admin-material-movement-edit',
  },
]
  
export default technicalAdminMaterialMovementRoutes
  
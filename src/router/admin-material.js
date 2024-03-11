const adminMaterialRoutes = [
  {
    path: 'material',
    component: () => import('../pages/admin/material/materials.vue'),
    name: 'admin-material',
  },
  {
    path: 'material/:id',
    component: () => import('../pages/admin/material/material.vue'),
    name: 'admin-material-view',
  },
  {
    path: 'material/create',
    component: () => import('../pages/admin/material/create-material.vue'),
    name: 'admin-material-create',
  },
  {
    path: 'material/:id/edit',
    component: () => import('../pages/admin/material/edit-material.vue'),
    name: 'admin-material-edit',
  },
]
  
export default adminMaterialRoutes
  
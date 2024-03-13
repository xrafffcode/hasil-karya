const adminTechnicalAdminRoutes = [
  {
    path: 'technical-admin',
    component: () => import('../pages/admin/technical-admin/technical-admins.vue'),
    name: 'admin-technical-admin',
  },
  {
    path: 'technical-admin/:id',
    component: () => import('../pages/admin/technical-admin/technical-admin.vue'),
    name: 'admin-technical-admin-view',
  },
  {
    path: 'technical-admin/create',
    component: () => import('../pages/admin/technical-admin/create-technical-admin.vue'),
    name: 'admin-technical-admin-create',
  },
  {
    path: 'technical-admin/:id/edit',
    component: () => import('../pages/admin/technical-admin/edit-technical-admin.vue'),
    name: 'admin-technical-admin-edit',
  },
]

export default adminTechnicalAdminRoutes

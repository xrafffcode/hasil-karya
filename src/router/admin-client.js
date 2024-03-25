const adminClientRoutes = [
  {
    path: 'client',
    component: () => import('../pages/admin/client/clients.vue'),
    name: 'admin-client',
  },
  {
    path: 'client/:id',
    component: () => import('../pages/admin/client/client.vue'),
    name: 'admin-client-view',
  },
  {
    path: 'client/create',
    component: () => import('../pages/admin/client/create-client.vue'),
    name: 'admin-client-create',
  },
  {
    path: 'client/:id/edit',
    component: () => import('../pages/admin/client/edit-client.vue'),
    name: 'admin-client-edit',
  },
]
  
export default adminClientRoutes
  
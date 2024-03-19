const adminClientRoutes = [
  {
    path: '/admin/client',
    component: () => import('../pages/admin/client/clients.vue'),
    name: 'admin-client',
  },
  {
    path: '/admin/client/:id',
    component: () => import('../pages/admin/client/client.vue'),
    name: 'admin-client-view',
  },
  {
    path: '/admin/client/create',
    component: () => import('../pages/admin/client/create-client.vue'),
    name: 'admin-client-create',
  },
  {
    path: '/admin/client/:id/edit',
    component: () => import('../pages/admin/client/edit-client.vue'),
    name: 'admin-client-edit',
  },
]
  
export default adminClientRoutes
  
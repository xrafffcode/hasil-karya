const adminCheckerRoutes = [
  {
    path: 'checker',
    component: () => import('../pages/admin/checker/chekers.vue'),
    name: 'admin-checker',
  },
  {
    path: 'checker/:id',
    component: () => import('../pages/admin/checker/checker.vue'),
    name: 'admin-checker-view',
  },
  {
    path: 'checker/create',
    component: () => import('../pages/admin/checker/create-checker.vue'),
    name: 'admin-checker-create',
  },
  {
    path: 'checker/:id/edit',
    component: () => import('../pages/admin/checker/edit-checker.vue'),
    name: 'admin-checker-edit',
  },
]

export default adminCheckerRoutes

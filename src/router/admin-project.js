const adminProjectRoutes = [
  {
    path: 'project',
    component: () => import('../pages/admin/project/projects.vue'),
    name: 'admin-project',
  },
  {
    path: 'project/:id',
    component: () => import('../pages/admin/project/project.vue'),
    name: 'admin-project-view',
  },
  {
    path: 'project/create',
    component: () => import('../pages/admin/project/create-project.vue'),
    name: 'admin-project-create',
  },
  {
    path: 'project/:id/edit',
    component: () => import('../pages/admin/project/edit-project.vue'),
    name: 'admin-project-edit',
  },
]

export default adminProjectRoutes

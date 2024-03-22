const adminNotificationRecepientRoutes = [
  {
    path: 'notification-recepient',
    component: () => import('../pages/admin/notification-recepient/notification-recepients.vue'),
    name: 'admin-notification-recepient',
  },
  {
    path: 'notification-recepient/:id',
    component: () => import('../pages/admin/notification-recepient/notification-recepient.vue'),
    name: 'admin-notification-recepient-view',
  },
  {
    path: 'notification-recepient/create',
    component: () => import('../pages/admin/notification-recepient/create-notification-recepient.vue'),
    name: 'admin-notification-recepient-create',
  },
  {
    path: 'notification-recepient/:id/edit',
    component: () => import('../pages/admin/notification-recepient/edit-notification-recepient.vue'),
    name: 'admin-notification-recepient-edit',
  },
]

export default adminNotificationRecepientRoutes

const adminEwsDeviceRoutes = [
  {
    path: 'ews-device',
    component: () => import('../pages/admin/ews-device/ews-devices.vue'),
    name: 'admin-ews-device',
  },
  {
    path: 'ews-device/:id',
    component: () => import('../pages/admin/ews-device/ews-device.vue'),
    name: 'admin-ews-device-view',
  },
  {
    path: 'ews-device/create',
    component: () => import('../pages/admin/ews-device/create-ews-device.vue'),
    name: 'admin-ews-device-create',
  },
  {
    path: 'ews-device/:id/edit',
    component: () => import('../pages/admin/ews-device/edit-ews-device.vue'),
    name: 'admin-ews-device-edit',
  },
]
    
export default adminEwsDeviceRoutes
    
const adminVendorRoutes = [
  {
    path: 'vendor',
    component: () => import('../pages/admin/vendor/vendors.vue'),
    name: 'admin-vendor',
  },
  {
    path: 'vendor/:id',
    component: () => import('../pages/admin/vendor/vendor.vue'),
    name: 'admin-vendor-view',
  },
  {
    path: 'vendor/create',
    component: () => import('../pages/admin/vendor/create-vendor.vue'),
    name: 'admin-vendor-create',
  },
  {
    path: 'vendor/:id/edit',
    component: () => import('../pages/admin/vendor/edit-vendor.vue'),
    name: 'admin-vendor-edit',
  },
]
  
export default adminVendorRoutes
  
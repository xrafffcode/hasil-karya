const adminDriverRoutes = [
    {
        path: 'driver',
        component: () => import('../pages/admin/driver/drivers.vue'),
        name: 'admin-driver'
    },
    {
        path: 'driver/:id',
        component: () => import('../pages/admin/driver/driver.vue'),
        name: 'admin-driver-view'
    },
    {
        path: 'driver/create',
        component: () => import('../pages/admin/driver/create-driver.vue'),
        name: 'admin-driver-create'
    },
    {
        path: 'driver/:id/edit',
        component: () => import('../pages/admin/driver/edit-driver.vue'),
        name: 'admin-driver-edit'
    }
]

export default adminDriverRoutes

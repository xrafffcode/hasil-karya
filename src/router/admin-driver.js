const adminDriverRoutes = [
    {
        path: '/admin/driver',
        component: () => import('../pages/admin/driver/drivers.vue'),
        name: 'admin-driver'
    }
]

export default adminDriverRoutes

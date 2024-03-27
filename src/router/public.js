const publicRouter = [
  {
    path: '',
    redirect: 'admin/dashboard',
  },
  {
    path: '/403',
    component: () => import('@/pages/403.vue'),
    name: '403',
  },
]

export default publicRouter

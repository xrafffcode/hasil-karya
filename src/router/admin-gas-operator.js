const adminGasOperatorRoutes = [
  {
    path: 'gas-operator',
    component: () => import('../pages/admin/gas-operator/gas-operators.vue'),
    name: 'admin-gas-operator',
  },
  {
    path: 'gas-operator/:id',
    component: () => import('../pages/admin/gas-operator/gas-operator.vue'),
    name: 'admin-gas-operator-view',
  },
  {
    path: 'gas-operator/create',
    component: () => import('../pages/admin/gas-operator/create-gas-operator.vue'),
    name: 'admin-gas-operator-create',
  },
  {
    path: 'gas-operator/:id/edit',
    component: () => import('../pages/admin/gas-operator/edit-gas-operator.vue'),
    name: 'admin-gas-operator-edit',
  },
]

export default adminGasOperatorRoutes

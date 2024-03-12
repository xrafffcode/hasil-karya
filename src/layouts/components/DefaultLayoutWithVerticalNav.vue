<script setup>
import { useAuthStore } from '@/stores/auth'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const { user, checkAuth } = useAuthStore()

checkAuth()
</script>

<template>
  <VerticalNavLayout>
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="bx-menu" />
        </IconBtn>

        <VSpacer />

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin' || user?.roles[0].name === 'checker'"
        :item="{
          title: 'Dashboard',
          icon: 'bx-home',
          to: '/admin/dashboard',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Client',
          icon: 'bx-user',
          to: '/admin/client',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Vendor',
          icon: 'bx-store',
          to: '/admin/vendor',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Material',
          icon: 'bx-package',
          to: '/admin/material',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Station',
          icon: 'bx-building',
          to: '/admin/station',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Material Movement',
          icon: 'bx-transfer',
          to: '/admin/material-movement',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Fuel Log',
          icon: 'bx-gas-pump',
          to: '/admin/fuel-log',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'checker'"
        :item="{
          title: 'Material Movement',
          icon: 'bx-transfer',
          to: '/checker/material-movement/create',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'gas-operator'"
        :item="{
          title: 'Catat BBM Truk',
          icon: 'bx-gas-pump',
          to: '/gas-operator/fuel-log-truck/create',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'gas-operator'"
        :item="{
          title: 'Catat BBM Alat Berat',
          icon: 'bx-gas-pump',
          to: '/gas-operator/fuel-log-heavy-vehicle/create',
        }"
      />

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Manajemen Kendaraan',
          icon: 'bx-car',
          children: [
            {
              title: 'Penyewaan Kendaraan',
              to: '/admin/vehicle-rental-record',
            },
            {
              title: 'Truk',
              to: '/admin/truck',
            },
            {
              title: 'Alat Berat',
              to: '/admin/heavy-vehicle',
            },
          ],
        }"
      />

      

      <VerticalNavLink
        v-if="user?.roles[0].name === 'admin'"
        :item="{
          title: 'Manajemen User',
          icon: 'bx-user',
          children: [
            {
              title: 'Checker',
              to: '/admin/checker',
            },
            {
              title: 'Driver',
              to: '/admin/driver',
            },
            {
              title: 'Gas Operator',
              to: '/admin/gas-operator',
            },
          ],
        }"
      />
    </template>
    <slot />
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>

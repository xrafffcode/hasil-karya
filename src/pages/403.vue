<script setup>
import ErrorHeader from '@/components/ErrorHeader.vue'
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-code="403"
      error-title="Forbidden ⚠️"
      error-description="You don't have permission to access this page."
    />

    <div class="misc-avatar w-100 text-center">
      <VBtn
        to="/"
        class="mt-10"
      >
        Back to Home
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";
</style>

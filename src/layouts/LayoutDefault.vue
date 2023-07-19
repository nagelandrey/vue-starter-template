<template>
  <div>
    <TheHeader />
    <Breadcrumbs />
    <slot />
  </div>
</template>

<script setup lang="ts">
  import TheHeader from '@/components/TheHeader.vue'
  import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

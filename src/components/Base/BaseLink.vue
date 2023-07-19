<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router'

  defineProps<{
    to: RouteLocationRaw
  }>()
</script>

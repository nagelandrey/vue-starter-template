<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import LayoutAuth from '@/layouts/LayoutAuth.vue'
  import LayoutDefault from '@/layouts/LayoutDefault.vue'

  const route = useRoute()

  const layout = computed(() => {
    switch (route.meta.layout) {
      case 'auth':
        return LayoutAuth
    }
    return LayoutDefault
  })
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

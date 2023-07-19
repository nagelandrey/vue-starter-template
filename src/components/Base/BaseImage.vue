<template>
  <img v-if="src" :src="src" :alt="alt || ''" />
  <div v-else class="bg-gray-100" />
</template>

<script setup lang="ts">
  defineProps<{
    src?: string
    alt?: string
  }>()
</script>

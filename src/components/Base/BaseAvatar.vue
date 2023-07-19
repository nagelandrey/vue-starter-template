<template>
  <BaseImage
    class="h-12.5 min-h-12.5 w-12.5 min-w-12.5 rounded-full border border-primary"
    :src="src"
  />
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import BaseImage from './BaseImage.vue'

  const props = defineProps<{
    avatarId?: number
  }>()

  const src = ref('')

  onMounted(async () => {
    if (!props.avatarId) {
      return
    }

    src.value = '/images/avatar.png'
  })
</script>

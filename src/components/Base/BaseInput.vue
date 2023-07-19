<template>
  <label class="flex w-full flex-col items-start justify-start gap-1">
    <span v-if="props.label" class="text-text-grey">{{ props.label }}</span>
    <input
      v-model="value"
      :name="props.name"
      :type="type"
      class="w-full rounded-lg border border-primary px-3 py-2 outline-none focus:outline-primary"
    />
  </label>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string
    label?: string
    placeholder?: string
    type?: 'text' | 'number' | 'password'
  }>()

  const value = defineModel()
</script>

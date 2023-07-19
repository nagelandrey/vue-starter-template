<template>
  <div class="bg-lightBlue">
    <div
      class="container flex w-menuOpened items-center justify-start gap-5 py-4"
    >
      <div>
        <button>
          <IconMenu class="h-6 w-6" />
        </button>
      </div>

      <ul class="flex items-center justify-start">
        <li>Элемент хлебных крошек</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import IconMenu from '@/assets/icons/icon-menu.svg'
</script>

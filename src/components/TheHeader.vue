<template>
  <header class="w-full bg-pink">
    <nav>
      <ul class="container flex items-center justify-start gap-20 py-2.5">
        <li>
          <BaseLink :to="{ name: RouteNames.Home }">
            <IconLogo />
          </BaseLink>
        </li>
        <li class="ml-auto flex items-center justify-start gap-5">
          <IconSearch class="h-6 w-6" />
          <IconChat class="h-6 w-6" />
        </li>
        <li class="flex items-center justify-start gap-4 pr-5">
          <BaseAvatar />
          <div class="space-y-1">
            <div class="text-lg leading-[21px]">{{ me?.name }}</div>
            <div class="leading-[18px] text-text-grey">
              {{ me?.role?.descr }}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import IconLogo from '@/assets/icons/logo.svg'
  import IconChat from '@/assets/icons/icon-chat.svg'
  import IconSearch from '@/assets/icons/icon-search.svg'
  import BaseAvatar from './Base/BaseAvatar.vue'
  import BaseLink from './Base/BaseLink.vue'
  import { RouteNames } from '@/models/RouteNames'
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'
  import { watch } from 'vue'

  const authStore = useAuthStore()
  const { me } = storeToRefs(authStore)

  watch(
    () => authStore.me,
    () => {
      console.log(authStore.me)
    }
  )
</script>

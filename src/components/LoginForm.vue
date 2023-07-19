<template>
  <section class="w-full max-w-[300px]">
    <form
      class="flex w-full flex-col items-start justify-center gap-5"
      @submit.prevent="login"
    >
      <div class="flex items-center justify-start py-5">
        <IconLogo class="h-25 w-15" />
        <div class="space-y-1">
          <h1 class="text-xl font-medium">Base template</h1>
        </div>
      </div>
      <BaseInput v-model="form.email" name="email" value="" label="Email" />
      <BaseInput
        v-model="form.password"
        name="password"
        value=""
        type="password"
        label="Пароль"
      />
      <BaseButton class="self-center"> Войти </BaseButton>
    </form>
  </section>
</template>

<script setup lang="ts">
  import BaseButton from '@/components/Base/BaseButton.vue'
  import BaseInput from './Base/BaseInput.vue'
  import { IRequestLogin } from '@/models/requests/IRequestLogin'
  import { useAuthStore } from '@/stores/auth'
  import IconLogo from '@/assets/icons/logo.svg'
  import router from '@/router'
  import { RouteNames } from '@/models/RouteNames'
  import { ref } from 'vue'

  const authStore = useAuthStore()

  const form = ref<IRequestLogin>({
    email: '',
    password: '',
  })

  const login = async () => {
    await authStore.login(form.value)

    await router.push({ name: RouteNames.Home })
  }
</script>

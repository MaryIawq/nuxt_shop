<script setup lang="ts">
import LoginForm from "~/components/forms/LoginForm.vue";
import RegisterForm from "~/components/forms/RegisterForm.vue";
useHead({
  title: 'Авторизация | Nuxt Shop'
})
definePageMeta({
  middleware: 'guest'
})
</script>
<template>
  <div class='container h-lvh flex flex-col items-center justify-start md:py-36 py-32'>
    <h1 class="sm:block hidden sm:text-1.5xl text-md py-1 font-bold uppercase text-center">Вход и регистрация</h1>
    <UiTabs class="pt-8" default-value="login">
      <UiTabsList class="">
        <UiTabsTrigger value="login">
          Войти
        </UiTabsTrigger>
        <UiTabsTrigger value="register">
          Зарегистрироваться
        </UiTabsTrigger>
      </UiTabsList>
      <UiTabsContent value="login">
        <LoginForm></LoginForm>
      </UiTabsContent>
      <UiTabsContent value="register">
        <RegisterForm></RegisterForm>
      </UiTabsContent>
    </UiTabs>
  </div>
</template>

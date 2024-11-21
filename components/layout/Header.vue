<script setup lang="ts">
import {useAuthStore} from '~/store/auth.store';
import {NAV_DATA} from "~/components/layout/navigation.data";

const authStore = useAuthStore();

import {useThemeStore} from "~/store/theme.store";

const themeStore = useThemeStore();
onMounted(() => {
  themeStore.initTheme();
});


</script>

<template>
  <header class="w-full fixed shadow-md">
    <div class="flex justify-between items-center p-2  border-b-2">
      <div class="lg:hidden">
        <UiSheet>
          <UiSheetTrigger>
            <icon name="line-md:list-3" size="2rem"></icon>
          </UiSheetTrigger>
          <UiSheetContent :class="themeStore.theme">
            <UiSheetHeader>
              <UiSheetTitle>Меню</UiSheetTitle>
              <UiSheetDescription>
                <div class="flex flex-col sm:items-start items-center gap-2"
                     :key="item.title"
                     v-for="item in NAV_DATA">
                  <div class="flex items-center gap-2">
                    <Icon size="1.2rem" :name="item.icon"></Icon>
                    <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
                  </div>
                  <div class="flex flex-col gap-1">
                    <NuxtLink :to="link.url"
                              class="ml-6 text-muted hover:text-foreground transition cursor-pointer"
                              v-for="link in item.links"
                              :key="link.name">{{ link.name }}
                    </NuxtLink>
                  </div>
                </div>
              </UiSheetDescription>
            </UiSheetHeader>
          </UiSheetContent>
        </UiSheet>
      </div>
      <NuxtLink to="/" class="lg:block hidden">
        <Icon name="solar:atom-broken" size="2.5rem"></Icon>
      </NuxtLink>
      <LayoutNavigation class="lg:flex hidden"></LayoutNavigation>
      <div class="flex items-center">
        <UiButton>
          <Icon name="line-md:account" size="1.5rem"></Icon>
        </UiButton>
        <p class="text-sm">{{ authStore.isAuth ? authStore.userName : 'Гость' }}</p>
        <UiAlertDialog v-if="authStore.isAuth">
          <UiAlertDialogTrigger as-child>
            <UiButton>
              <Icon name="line-md:log-out" size="1.5rem"/>
            </UiButton>
          </UiAlertDialogTrigger>
          <UiAlertDialogContent :class="themeStore.theme">
            <UiAlertDialogHeader>
              <UiAlertDialogTitle>Вы уверены, что хотите выйти?</UiAlertDialogTitle>
              <UiAlertDialogDescription>
                Вы выйдете из своего аккаунта, для повторного входа потребуется email и пароль.
              </UiAlertDialogDescription>
            </UiAlertDialogHeader>
            <UiAlertDialogFooter>
              <UiAlertDialogCancel>Отмена</UiAlertDialogCancel>
              <UiAlertDialogAction @click="authStore.logout">Продолжить</UiAlertDialogAction>
            </UiAlertDialogFooter>
          </UiAlertDialogContent>
        </UiAlertDialog>
        <NuxtLink to="/auth" v-else>
          <UiButton>
            <Icon name="line-md:login" size="1.5rem"/>
          </UiButton>
        </NuxtLink>
      </div>
    </div>

    <div class="flex items-center p-2 shadow-md border-b-2 gap-2">
      <UiButton>
        <Icon @click='themeStore.toggleTheme()'
              :name="themeStore.theme === 'light' ? 'line-md:sun-rising-loop' : 'line-md:sunny-outline-to-moon-loop-transition' "
              size="1.4rem"></Icon>
      </UiButton>
      <UiButton>
        <Drawer></Drawer>
      </UiButton>
      <UiButton>
        <NuxtLink to="/favorites" class="flex items-center">
          <Icon name="ph:heart" size="1.4rem"></Icon>
        </NuxtLink>
      </UiButton>
      <UiButton>
        <NuxtLink to="/" class="flex items-center">
          <Icon name="ph:house" size="1.4rem"></Icon>
        </NuxtLink>
      </UiButton>
    </div>
  </header>

</template>

<style scoped>

</style>
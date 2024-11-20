<script setup lang="ts">
import { useThemeStore } from "~/store/theme.store";
const themeStore = useThemeStore();
onMounted(() => {
  themeStore.initTheme();
});
</script>
<template>
    <NuxtLayout :class="themeStore.theme" >
      <NuxtPage :class="themeStore.theme"/>
    </NuxtLayout>
</template>
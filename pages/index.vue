<script setup lang="ts">
useHead({
  title: 'Главная | Nuxt Shop'
})

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div class='container md:px-10 px-0 md:py-36 py-32 flex flex-col'>
    <NuxtLink to="/" class="md:hidden self-center">
      <Icon name="solar:atom-broken" size="2.5rem"></Icon>
    </NuxtLink>
    <h1 class="sm:text-1.5xl text-md py-1 font-bold uppercase text-center">Интернет магазин товаров</h1>
    <CardsList></CardsList>
  </div>
</template>

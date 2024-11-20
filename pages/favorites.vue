<script setup lang="ts">
useHead({
  title: 'Избранное | Nuxt Shop'
})

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <h1>favs</h1>
</template>
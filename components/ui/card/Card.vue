<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col justify-between rounded-xl border bg-card border-border shadow md:w-72 sm:w-52 w-44 sm:h-fit h-80 sm:m-2 m-0.5 mb-5',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
<style>

</style>

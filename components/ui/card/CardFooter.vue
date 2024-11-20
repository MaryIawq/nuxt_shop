<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('justify-between flex flex-col md:flex-row md:p-3 p-0', props.class)">
    <slot />
  </div>
</template>

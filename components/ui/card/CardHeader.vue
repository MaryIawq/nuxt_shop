<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex flex-col sm:px-5 px-1 sm:pt-1 sm:pb-3 gap-y-0.5', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenuLink,
  type NavigationMenuLinkEmits,
  type NavigationMenuLinkProps,
  useForwardPropsEmits,
} from 'radix-vue'
import {cn} from "~/lib/utils";

const props = defineProps<NavigationMenuLinkProps>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink :class="cn('cursor-pointer hover:text-black hover:bg-accent rounded transition', props.class)"
                      v-bind="forwarded">
    <slot />
  </NavigationMenuLink>
</template>

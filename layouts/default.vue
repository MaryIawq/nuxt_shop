<script setup lang="ts">
import {useDrawerStore} from "~/store/drawer.store";

const drawerStore = useDrawerStore()
const router = useRouter()

</script>

<template>
  <div
      class="text-foreground md:text-sm text-xs">
    <LayoutHeader class="z-10 bg-layout"></LayoutHeader>
    <div class="bg-background">
      <slot></slot>
    </div>
<!--    <footer>-->
<!--      <h5>this is footer</h5>-->
<!--    </footer>-->
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">

import {NAV_DATA} from "~/components/layout/navigation.data";
</script>

<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem v-for="item in NAV_DATA"
                            :key="item.title">
        <UiNavigationMenuTrigger>
          <Icon :name="item.icon" size="1.2rem" class="mr-1"></Icon>
          <span>{{ item.title }}</span>
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
          <ul class="grid gap-1 p-4 grid-cols-2 w-[800px] ">
            <li v-for="link in item.links"
                :key="link.name">
              <UiNavigationMenuLink as-child>
                <NuxtLink :to="link.url" class="flex items-center gap-1 p-2">
                  <Icon :name="link.icon" size="1.1rem"></Icon>
                  <span>{{ link.name }}</span>
                </NuxtLink>
              </UiNavigationMenuLink>
            </li>
          </ul>
        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>
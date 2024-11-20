<script setup lang="ts">

import {NAV_DATA} from "~/components/layout/navigation.data";
import {navigationMenuTriggerStyle} from '@/components/ui/navigation-menu'
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
          <ul class="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
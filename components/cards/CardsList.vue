<script setup lang="ts">
import {CARDS_DATA} from './cards.data.ts';
import {CARD_ACTIONS_DATA} from './card.actions.data.ts';
import {useDrawerStore} from "~/store/drawer.store";
import {Toaster} from '@/components/ui/sonner';
import {toast} from 'vue-sonner';
import { useThemeStore } from "~/store/theme.store";
const themeStore = useThemeStore();
const drawerStore = useDrawerStore();
const cards = ref(CARDS_DATA);
const grid = ref(false);
</script>

<template>
  <Toaster/>
  <div
      class="flex flex-wrap items-center justify-center">
    <client-only>
      <UiCard v-for="card in cards">
        <UiCardHeader>
          <div class="md:flex hidden pt-2 pb-1">
            <div class="flex items-center gap-4">
              <NuxtLink v-for="link in CARD_ACTIONS_DATA"
                        :key="link.name"
                        :to="link.url"
                        class="h-6 flex gap-1">
                <Icon :name="link.icon" size="1.2rem"></Icon>
                <p v-if="link.name === 'Отзывы'">4.8</p>
              </NuxtLink>
            </div>
          </div>
          <div class="md:hidden" >
            <UiPopover>
              <UiPopoverTrigger class="flex items-center gap-0.5 pt-1 text-muted">
                <Icon name="line-md:alert-circle-loop" size="0.9rem"></Icon>
                <span>О товаре</span>
              </UiPopoverTrigger>
              <UiPopoverContent :class="themeStore.theme" class="flex flex-col text-xs gap-2">
                <NuxtLink class="flex items-center gap-2 hover:text-accent-foreground transition"
                          :key="item.name"
                          :to="item.url"
                          v-for="item in CARD_ACTIONS_DATA">
                  <Icon :name="item.icon" size="1rem"></Icon>
                  <span>{{ item.name }}</span>
                </NuxtLink>
              </UiPopoverContent>
            </UiPopover>
          </div>
          <UiCardTitle role="button">{{ card.title }}</UiCardTitle>
          <UiCardDescription>{{ card.subtitle }}</UiCardDescription>
          <div class="md:flex hidden text-muted" role="button">
            <Icon name="material-symbols-light:precision-manufacturing" size="1.2rem"></Icon>
            <p>Производитель: {{ card.manufacturer }}</p>
          </div>
        </UiCardHeader>

        <UiCardContent role="button">
          <NuxtImg class="w-full" src="./product.svg"></NuxtImg>
        </UiCardContent>

        <UiCardFooter>
          <div class="flex items-center justify-center my-2">
            <span>{{ card.price }}</span>
            <Icon class="ml-1" size="0.9rem" name="formkit:ruble"/>
          </div>
          <UiButton
              @click="drawerStore.add(card.id),
              toast (`Вы добавили ${card.title} в корзину`, {
                description: `${ card.subtitle }`,
                  action: {
                  label: 'Отмена',
                  onClick: () => drawerStore.remove(card.id),}
                  ,})"
              variant="primary"
              size="default">
            <Icon size="1rem" class="mr-0.5" name="material-symbols-light:add-shopping-cart"/>
            <span>Купить</span>
          </UiButton>
        </UiCardFooter>
      </UiCard>
    </client-only>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {useDrawerStore} from "~/store/drawer.store";
const drawerStore = useDrawerStore();
import { useThemeStore } from "~/store/theme.store";
</script>

<template>
  <client-only>
    <UiDrawer>
      <UiButton class="relative">
        <UiDrawerTrigger class="flex items-center justify-center">
          <div class="absolute top-0 right-0 text-xs">{{ drawerStore.cardsTotal }}</div>
          <Icon name="material-symbols:shopping-cart-outline" size="1.3em"/>
        </UiDrawerTrigger>
      </UiButton>
      <UiDrawerContent v-if="drawerStore.formattedDrawer.length">
        <UiDrawerHeader>
          <UiDrawerTitle>Корзина</UiDrawerTitle>
        </UiDrawerHeader>
        <div class="flex flex-col">
          <div v-for="item in drawerStore.formattedDrawer"
                  :key="item.name"
                  class="rounded-sm border bg-white m-1 flex flex-row w-full h-fit">
            <NuxtImg class="w-fit" src="./product.svg"></NuxtImg>

            <div class="flex w-full justify-between sm:px-3 p-0 items-center">
              <div class="flex flex-col items-center sm:mx-3 mx-1">
                <UiCardTitle class="sm:text-sm text-xs">{{ item.title }}</UiCardTitle>
                <div class="flex items-center">
                  <UiButton  @click="drawerStore.remove(item.id)">
                    <Icon size="0.85rem"
                          name="line-md:minus" ></Icon>
                  </UiButton>
                  <span class="sm:text-lg text-xs">{{ item.quantity }}</span>
                  <UiButton @click="drawerStore.add(item.id)">
                    <Icon name="line-md:plus"
                          size="0.85rem"></Icon>
                  </UiButton>
                </div>
              </div>
              <UiCardDescription class="flex items-center text-foreground">
                  <span>
                {{ item.quantity }}
                X
                {{ item.price }}
                =
                {{ item.cost }}
              </span>
                <UiButton @click="drawerStore.removeCard(item.id)">
                  <Icon name="material-symbols-light:delete-forever-outline"
                        size="1.5rem"></Icon>
                </UiButton>
              </UiCardDescription>
            </div>

          </div>
        </div>
        <UiDrawerFooter>
          <div>
            <p>Выбрано товаров: {{ drawerStore.cardsTotal }}</p>
            <p>Итоговая цена: {{ drawerStore.total }} ₽</p>
          </div>
          <UiButton class="sm:w-fit px-4 w-full" variant="primary">
            Оформить заказ
          </UiButton>
          <UiDrawerClose>
            <UiButton class=" px-4 text-sm" variant="default">
              Отмена
            </UiButton>
          </UiDrawerClose>
        </UiDrawerFooter>
      </UiDrawerContent>


      <UiDrawerContent class="flex items-center min-h-60 gap-10" v-else>
        <UiDrawerTitle>Ваша корзина пуста</UiDrawerTitle>
        <UiDrawerClose>
          <UiButton variant="primary" size="lg">Вернуться к выбору товаров</UiButton>
        </UiDrawerClose>
      </UiDrawerContent>

    </UiDrawer>
  </client-only>
</template>

<style scoped>

</style>
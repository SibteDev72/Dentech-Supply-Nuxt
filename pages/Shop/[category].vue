<template>
  <div
    class="text-textPrimary px-6 md:px-8 lg:px-[4rem] flex flex-col mt-[96px] lg:mt-[192px] w-full min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-192px)]"
  >
    <div class="flex flex-col py-8">
      <p class="text-3xl font-extrabold">New products</p>
    </div>
    <div class="flex flex-row gap-6">
      <div class="w-[25%]">
        <BarSideBarCategories />
      </div>
      <div class="flex flex-col gap-[2rem] w-[75%]">
        <div
          class="flex flex-row justify-between items-center w-full h-fit bg-bgPrimary shadow-lg rounded-full"
        >
          <span
            class="bg-bgColor3 rounded-full text-textColor5 font-bold px-[5rem] py-[1rem]"
          >
            {{ route.params.category }}
          </span>
        </div>
        <article class="grid grid-cols-3 gap-2">
          <CardsProduct
            v-for="(item, index) in sortedProducts"
            :key="index"
            :data="item"
          />
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Products } from "~/constant/data";

const route = useRoute();
const sortedProducts = [...Products].sort((a, b) => b.id - a.id);
</script>

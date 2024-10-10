<template>
  <div class="mt-[192px] w-full min-h-[calc(100vh-192px)] flex flex-col">
    <div
      class="w-full text-4xl font-extrabold h-[5rem] flex flex-col justify-center items-center bg-bgColor3 text-textColor5"
    >
      About Us
    </div>
    <section
      class="flex flex-col justify-center items-center bg-cover bg-[url('/new/images/aboutUSPagePoster.png')] w-full h-[22rem]"
    >
      <p class="text-xl font-extrabold text-center w-[50vw]">
        At Dentech Supply, we’re not just about dental products; we’re about
        elevating your practice. Our mission? To ensure every smile you create
        is a masterpiece.
      </p>
    </section>
    <section
      class="w-full pt-8 px-16 flex flex-col gap-8 items-start justify-center"
    >
      <div
        :class="`w-full flex ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        } gap-6 items-center justify-between`"
        v-for="(item, index) in aboutPoints"
        :key="index"
      >
        <img class="w-[581px] h-[387px]" :src="`/new/images/${item.imgSrc}`" />
        <div class="text-left flex flex-col">
          <p class="text-lg font-extrabold">{{ item.title }}</p>
          <p class="text-sm">{{ item.text }}</p>
          <ul class="flex flex-col gap-1">
            <li v-for="(li, index) in item.points" :key="index">
              {{ li }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { aboutPoints } from "~/constant/data";
</script>

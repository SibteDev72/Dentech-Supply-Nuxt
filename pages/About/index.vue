<template>
  <div
    class="mt-[96px] lg:mt-[192px] w-full min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-192px)] flex flex-col"
  >
    <div
      class="w-full text-2xl lg:text-4xl font-extrabold h-[3rem] lg:h-[5rem] flex flex-col justify-center items-center bg-bgColor3 text-textColor5"
    >
      About Us
    </div>
    <section
      class="px-6 md:px-8 lg:px-[4rem] flex flex-col justify-center items-center bg-cover bg-[url('/new/images/aboutUSPagePoster.png')] w-full h-[12rem] sm:h-[15rem] md:h-[18rem] lg:h-[22rem]"
    >
      <p
        class="text-sm sm:text-lg md:text-xl font-extrabold text-center w-full"
      >
        At Dentech Supply, we’re not just about dental products; we’re about
        elevating your practice. Our mission? To ensure every smile you create
        is a masterpiece.
      </p>
    </section>
    <section
      class="w-full px-6 md:px-8 lg:px-[4rem] pt-8 flex flex-col gap-8 items-start justify-center"
    >
      <div
        :class="`w-full flex flex-col ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        } gap-6 items-center justify-between`"
        v-for="(item, index) in aboutPoints"
        :key="index"
      >
        <img
          class="w-[500px] md:w-[400px] lg:w-[400px] xl:w-[550px] h-auto"
          :src="`/new/images/${item.imgSrc}`"
        />
        <div class="text-left flex flex-col">
          <p class="text-lg font-extrabold">{{ item.title }}</p>
          <p class="text-sm md:text-xs lg:text-sm xl:text-lg">
            {{ item.text }}
          </p>
          <ul class="flex flex-col gap-1">
            <li
              class="text-sm md:text-xs lg:text-sm xl:text-lg"
              v-for="(li, index) in item.points"
              :key="index"
            >
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

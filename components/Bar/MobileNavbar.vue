<template>
  <section class="w-full h-[38px] bg-bgColor3 lg:hidden"></section>
  <section
    class="h-[58px] px-6 bg-bgSecondary flex flex-row items-center justify-between md:px-8 lg:hidden"
  >
    <div
      @click="
        () => {
          navStatus = !navStatus;
        }
      "
      class="z-[300] relative cursor-pointer lg:hidden"
    >
      <div
        :class="`absolute left-0 top-[0px] bg-black w-[1.4rem] h-[0.15rem] transition-all duration-300 ease-in-out ${
          !!navStatus && 'rotate-[45deg]'
        }`"
      />
      <div
        :class="`absolute left-0 top-[0px] bg-black w-[1.4rem] h-[0.15rem] transition-all duration-300 ease-in-out ${
          !!navStatus && 'rotate-[-45deg]'
        }`"
      />
      <div
        :class="`absolute left-0 top-[-5px] bg-black w-[1.4rem] h-[0.15rem] ${
          !!navStatus && 'hidden'
        }`"
      />
      <div
        :class="`absolute left-0 top-[5px] bg-black w-[1.4rem] h-[0.15rem] ${
          !!navStatus && 'hidden'
        }`"
      />
    </div>
    <div
      :class="`capitalize py-[6rem] flex flex-col gap-2 items-start pl-6 absolute z-[200] left-0 top-0 w-[50vw] h-screen bg-bgSecondary transition-all duration-300 ease-in-out md:w-[30vw] lg:hidden ${
        !!navStatus
          ? 'translate-x-[0vw]'
          : 'translate-x-[-50vw] md:translate-x-[-30vw]'
      }`"
    >
      <div class="absolute bottom-2 left-2 flex flex-none flex-row">
        <img class="w-5" src="/new/icons/user.png" />
        <div class="flex flex-row items-center">
          <NuxtLink class="border-r-2 px-1 text-xs border-black" to="#"
            >sign in
          </NuxtLink>
          <NuxtLink class="border-r-1 px-1 text-xs border-black" to="#"
            >sign up
          </NuxtLink>
        </div>
      </div>
      <div v-for="(link, index) in navLinks" :key="index">
        <NuxtLink
          :class="`${
            path.fullPath === link.path && 'text-textColor4'
          } capitalize text-sm cursor-pointer`"
          :to="link.path"
        >
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-row gap-2 items-center leading-tight">
      <img class="w-6" src="/new/icons/logo.png" />
      <div class="border-l-2 border-borderPrimary flex flex-col pl-2">
        <p class="text-[14px] font-extrabold">Dental Supply</p>
        <p class="text-[10px] text-textColor4">your supply destination</p>
      </div>
    </div>

    <div class="flex flex-row gap-3">
      <img
        @click="
          () => {
            navStatus = !navStatus;
          }
        "
        class="w-5"
        src="/new/icons/search-outline.png"
      />
      <img class="w-5" src="/new/icons/cart-outline.png" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { navLinks } from "~/constant/data";
const path = useRoute();
const navStatus = ref<boolean>(false);
</script>

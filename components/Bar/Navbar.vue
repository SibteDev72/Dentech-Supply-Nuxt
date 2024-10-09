<template>
  <div :class="`z-[200] fixed shadow-lg bg-bgPrimary w-full flex flex-col`">
    <section
      class="h-[70px] px-16 bg-bgSecondary flex flex-row items-center justify-between"
    >
      <div class="flex-1 flex justify-center">
        <div class="flex flex-row gap-12">
          <div v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              class="capitalize text-sm cursor-pointer"
              :to="{ path: '/', hash: link.hash }"
            >
              {{ link.title }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex-none flex flex-row gap-2">
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
    </section>
    <section
      :class="`${
        scrollPosition > 112 && 'hidden transition-all duration-300'
      } h-[122px] flex flex-row justify-evenly items-center`"
    >
      <div class="flex flex-row gap-2 items-center leading-tight">
        <img class="w-14" src="/new/icons/logo.png" />
        <div class="border-l-2 border-borderPrimary flex flex-col pl-2">
          <p class="text-[33px] font-extrabold">Dental Supply</p>
          <p class="text-sm text-textColor4">your supply destination</p>
        </div>
        <p class="text-lg font-bold ml-2">+92 123 456 7890</p>
      </div>
      <button
        class="px-12 text-md shadow-lg py-1 border-2 border-borderPrimary rounded-full hover:text-white hover:bg-buttonHover transition-colors duration-300"
      >
        Call us
      </button>
      <div class="flex flex-row items-center">
        <InputsSearch />
        <button
          class="ml-[-30px] flex flex-col justify-center items-center rounded-[100%] w-[56px] h-[56px] bg-buttonSecondary"
        >
          <img class="w-7" src="/new/icons/cart.png" />
        </button>
        <p
          class="ml-[-15px] text-white text-xs mt-[30px] flex flex-col justify-center items-center rounded-[100%] w-5 h-5 bg-black"
        >
          2
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { navLinks } from "~/constant/data";
const scrollPosition: any = ref(window);

onMounted(() => {
  const handleScroll = () => {
    scrollPosition.value = window.scrollY;
    console.log(scrollPosition.value);
  };
  window.addEventListener("scroll", handleScroll);
});
</script>

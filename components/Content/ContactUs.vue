<template>
  <div
    id="contactUs"
    class="w-full min-h-[60vh] bg-bgSecondary flex flex-col justify-between items-center"
  >
    <section
      class="px-16 py-[4rem] w-full grid grid-cols-4 gap-[2rem] place-items-start"
    >
      <div class="flex flex-col items-start">
        <div class="flex flex-row gap-2 items-center">
          <img class="w-14" src="/new/icons/logo.png" />
          <div
            class="border-l-2 border-borderPrimary flex flex-col pl-2 leading-tight"
          >
            <p class="text-2xl font-extrabold">Dental Supply</p>
            <p class="text-sm text-textColor4">your supply destination</p>
          </div>
        </div>
        <div
          class="flex flex-col items-start gap-2 mt-4 text-textSecondary text-sm"
        >
          <span class="flex flex-row items-center">
            <img src="/new/icons/location.png" class="w-4 mr-3" />address: xyz
          </span>
          <span class="flex flex-row items-center">
            <img src="/new/icons/phone.png" class="w-4 mr-3" />Phone: 010000000
          </span>
          <span class="flex flex-row items-center">
            <img src="/new/icons/mail.png" class="w-4 mr-3" />Email: xyz
          </span>
        </div>
      </div>

      <div class="flex flex-col items-start">
        <p class="text-xl font-extrabold">Menu</p>
        <div
          class="flex flex-col gap-2 items-start mt-4 text-textSecondary text-sm"
        >
          <div v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              class="capitalize cursor-pointer"
              :to="{ path: '/', hash: link.hash }"
            >
              {{ link.title }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start">
        <p class="text-xl font-extrabold">Categories</p>
        <div
          class="flex flex-col gap-2 items-start mt-4 text-textSecondary text-sm"
        >
          <div v-for="(item, index) in categories.slice(0, 5)" :key="index">
            <p class="capitalize cursor-pointer">{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start">
        <p class="text-xl font-extrabold">UseFul Links</p>
        <div
          class="flex flex-col gap-2 items-start mt-4 text-textSecondary text-sm"
        >
          <p>Privacy Policy</p>
          <p>Contact Us</p>
          <p>Shop</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </section>
    <section
      class="w-full flex flex-row justify-between items-center px-16 py-4 border-t-2 border-borderSecondary"
    >
      <p class="text-sm text-textSecondary">
        Copyright © 2024 Humayun Dental. All rights reserved.
      </p>
      <img class="w-[220px]" src="/new/icons/footerIcon.png" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { navLinks, categories } from "~/constant/data";
</script>

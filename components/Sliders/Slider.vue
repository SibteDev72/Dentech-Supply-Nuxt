<template>
  <div class="w-full px-[4rem] flex flex-col">
    <section class="flex flex-row justify-between mb-4">
      <div class="flex flex-row items-center space-x-2">
        <p class="text-2xl font-extrabold mr-4">{{ props.data.name }}</p>
        <button
          v-if="props.data.variant === 'category'"
          @click="sliderInstance?.prev()"
          class="bg-buttonSecondary w-12 h-12 rounded-[100%] shadow-xl text-textColor5"
        >
          <
        </button>
        <button
          v-if="props.data.variant === 'category'"
          @click="sliderInstance?.next()"
          class="bg-buttonSecondary w-12 h-12 rounded-[100%] shadow-xl text-textColor5"
        >
          >
        </button>
      </div>
      <button
        :class="`${
          props.data.variant === 'brand'
            ? 'hidden'
            : 'w-fit h-fit flex flex-row items-center gap-4 shadow-black shadow-sm font-extrabold px-4 py-2 text-sm rounded-full bg-bgPrimary'
        }`"
      >
        view all categories <img class="" src="/new/icons/forwardArrow.png" />
      </button>
    </section>

    <section class="relative">
      <button
        v-if="props.data.variant === 'brand'"
        @click="sliderInstance?.prev()"
        class="z-50 absolute top-1/2 transform -translate-y-1/2 left-[-20px] bg-buttonSecondary w-12 h-12 rounded-[100%] shadow-xl text-textColor5"
      >
        <
      </button>
      <article
        ref="sliderRef"
        :class="`keen-slider p-2 ${
          props.data.variant === 'brand' && 'shadow-xl'
        }`"
      >
        <slot />
      </article>
      <button
        v-if="props.data.variant === 'brand'"
        @click="sliderInstance?.next()"
        class="z-50 absolute top-1/2 transform -translate-y-1/2 right-[-20px] bg-buttonSecondary w-12 h-12 rounded-[100%] shadow-xl text-textColor5"
      >
        >
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { KeenSliderInstance } from "keen-slider";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const props = defineProps<{
  data: { name: string; variant: string };
}>();

const sliderRef = ref<HTMLElement | null>(null);
let sliderInstance: KeenSliderInstance | null = null;

onMounted(() => {
  if (sliderRef.value) {
    sliderInstance = new KeenSlider(sliderRef.value, {
      slides: {
        perView: props.data.variant === "category" ? 3 : 5,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            perView: props.data.variant === "category" ? 3 : 5,
            spacing: 10,
          },
        },
        "(min-width: 768px) and (max-width: 1023px)": {
          slides: { perView: 3 },
        },
        "(max-width: 767px)": {
          slides: { perView: 1 },
        },
      },
      loop: true,
      mode: "snap",
    });
  }
});
</script>

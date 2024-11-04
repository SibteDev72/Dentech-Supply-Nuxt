<template>
  <div class="flex flex-row items-center gap-2">
    <p class="text-sm lg:text-lg font-bold">{{ props.title }}:</p>
    <div
      class="flex bg-bgPrimary px-0.5 py-1 shadow-sm shadow-black flex-row gap-6 lg:gap-8 justify-between items-center rounded-full"
    >
      <button
        @click="handleCounter('dec')"
        :class="`${
          counterValue === 1 ? 'bg-buttonColor3' : 'bg-buttonSecondary'
        } transition-all duration-300 text-textColor5 w-6 lg:w-8 h-6 lg:h-8 text-xs flex flex-col justify-center items-center rounded-[100%]`"
        :disabled="counterValue === 1"
      >
        -
      </button>
      <p class="text-xs lg:text-lg font-bold">{{ counterValue }}</p>
      <button
        @click="handleCounter('inc')"
        class="bg-buttonSecondary text-textColor5 w-6 lg:w-8 h-6 lg:h-8 text-xs flex flex-col justify-center items-center rounded-[100%]"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: "" },
});
const counterValue = ref<number>(1);
const emits = defineEmits(["update:counterValue"]);

const handleCounter = (type: string) => {
  type === "dec" ? (counterValue.value -= 1) : (counterValue.value += 1);
  emits("update:counterValue", counterValue.value);
};
</script>

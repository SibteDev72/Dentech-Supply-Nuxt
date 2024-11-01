<template>
  <div class="relative w-full">
    <div class="flex flex-row w-full">
      <label
        :class="`min-w-max lg:px-2 font-bold text-xs lg:text-sm ${
          variant === 'Mobile' && label === 'Sort by' && 'hidden'
        }`"
      >
        {{ props.label }}:
      </label>
      <div class="relative w-full">
        <div
          class="flex flex-row justify-between items-center cursor-pointer px-1 lg:px-2 font-bold text-xs lg:text-sm"
          @click="toggleDropdown"
          :class="{ 'border border-gray-300': isOpen }"
        >
          <span
            :class="`capitalize px-2 lg:px-4 ${
              variant === 'Mobile' && label === 'Sort by' && 'hidden'
            }`"
            >{{ selectedOption }}</span
          >
          <img
            v-if="variant === 'Mobile' && label === 'Sort by'"
            class="w-5 lg:hidden"
            src="/new/icons/filter.png"
          />
          <ChevronDownIcon
            :class="`w-4 h-4 transition-transform duration-300 text-textColor4 ${
              variant === 'Mobile' && label === 'Sort by'
                ? 'hidden'
                : isOpen && 'rotate-180'
            }`"
          />
        </div>
        <transition name="fade">
          <ul
            v-if="isOpen"
            class="absolute z-10 min-w-max bg-white shadow-lg mt-1 rounded-md overflow-hidden"
          >
            <li
              v-for="(opt, index) in props.options"
              :key="index"
              @click="selectOption(opt)"
              :class="`text-xs lg:text-sm capitalize px-4 lg:px-6 py-2 cursor-pointer hover:bg-bgColor3 hover:text-textColor5 ${
                selectedOption === opt ? 'bg-bgColor3 text-textColor5' : ''
              }`"
            >
              {{ opt }}
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  label: { type: String, default: "" },
  options: { type: Array, default: () => [""] },
  variant: { type: String, default: "" },
});

const emits = defineEmits(["update-method"]);

const isOpen = ref(false);
const selectedOption = ref(props.options[0]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: string) => {
  selectedOption.value = option;
  emits("update-method", option);
  isOpen.value = false;
};

watch(
  () => props.options,
  (newOptions) => {
    if (!newOptions.includes(selectedOption.value)) {
      selectedOption.value = newOptions[0];
    }
  }
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

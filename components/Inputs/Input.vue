<template>
  <div class="flex flex-col w-full">
    <label class="text-textSecondary text-sm px-1">{{ label }}</label>
    <input
      class="outline-none text-[12px] pl-2 bg-bgColor4 h-10"
      v-model="input"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "" },
});
const emits = defineEmits(["update:modelValue"]);
const input = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

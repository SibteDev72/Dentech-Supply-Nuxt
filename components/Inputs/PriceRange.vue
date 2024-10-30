<template>
  <div class="w-[90%] flex flex-col gap-4 range_container">
    <p class="font-bold text-lg">Filter by price</p>
    <div class="relative">
      <input
        id="fromSlider"
        type="range"
        :value="fromValue"
        :min="min"
        :max="max"
        step="100"
        @input="updateFromSlider"
        @change="logFinalValues"
      />
      <input
        id="toSlider"
        type="range"
        :value="toValue"
        :min="min"
        :max="max"
        step="100"
        @input="updateToSlider"
        @change="logFinalValues"
      />
    </div>
    <p class="text-sm text-textSecondary">
      Price: Rs {{ fromValue }}-Rs{{ toValue }}
    </p>
  </div>
</template>

<script setup lang="ts">
const fiteredRange = useFiteredRange();

const min: number = 1000;
const max: number = 3000;
const scaleSteps: number = 50;
const COLOR_TRACK: string = "#B5B5B5";
const COLOR_RANGE: string = "#3EBBA4";

const fromValue = ref<number>(1000);
const toValue = ref<number>(3000);

interface Marker {
  value: number;
  percent: number;
}

computed<Marker[]>(() => {
  const markers: Marker[] = [];
  for (let value = min; value <= max; value += scaleSteps) {
    markers.push({
      value,
      percent: ((value - min) / (max - min)) * 100,
    });
  }
  return markers;
});

function updateFromSlider(event: Event) {
  const target = event.target as HTMLInputElement;
  fromValue.value = Math.min(Number(target.value), toValue.value);
  updateSliderBackground();
}

function updateToSlider(event: Event) {
  const target = event.target as HTMLInputElement;
  toValue.value = Math.max(Number(target.value), fromValue.value);
  updateSliderBackground();
}

function logFinalValues() {
  fiteredRange.value.min = fromValue.value;
  fiteredRange.value.max = toValue.value;
}

function updateSliderBackground() {
  const rangeDistance = max - min;
  const fromPercent = ((fromValue.value - min) / rangeDistance) * 100;
  const toPercent = ((toValue.value - min) / rangeDistance) * 100;

  const toSliderElement = document.querySelector(
    "#toSlider"
  ) as HTMLInputElement | null;
  if (toSliderElement) {
    toSliderElement.style.background = `linear-gradient(
      to right,
      ${COLOR_TRACK} 0%,
      ${COLOR_TRACK} ${fromPercent}%,
      ${COLOR_RANGE} ${fromPercent}%,
      ${COLOR_RANGE} ${toPercent}%,
      ${COLOR_TRACK} ${toPercent}%, 
      ${COLOR_TRACK} 100%
    )`;
  }
}

onMounted(() => {
  updateSliderBackground();
});
</script>

<style scoped>
.range_container {
  --_marker-border-clr: #3ebba4;
  --_marker-size: 10px;
  --_track-heigt: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: var(--_marker-size);
  height: var(--_marker-size);
  background-color: var(--_marker-border-clr);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--_marker-border-clr);
  cursor: pointer;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: var(--_track-heigt);
  width: 100%;
  position: absolute;
  background-color: var(--_marker-border-clr);
  pointer-events: none;
}

#fromSlider {
  height: 0;
  z-index: 1;
}
</style>

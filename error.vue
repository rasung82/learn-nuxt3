<template>
  <div class="flex flex-center column window-height text-center">
    <div class="text-h1">{{ error?.statusCode }}</div>
    <p class="q-my-lg text-subtitle1">{{ error?.message }}</p>
    <div class="text-h6">error props</div>
    <p class="text-subtitle2">
      {{ JSON.stringify(error) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
  },
});

console.log("woors) Error...", props.error);
</script>

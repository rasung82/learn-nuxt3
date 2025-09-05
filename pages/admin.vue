<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["admin-only"],
});
console.log("woors) Pages.admin...");
</script>

<style scoped></style>

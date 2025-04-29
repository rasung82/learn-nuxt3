<template>
  <p-page padding>
    <div class="q-my-xl tetxt-center">
      <div class="text-h4">Admin Page</div>
      <p class="q-mt-sm text-gray-8">Admin Layout 페이지</p>
    </div>
  </p-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "admin-only",
});

console.log("woors) Pages.admin.index...");
</script>

<style scoped></style>

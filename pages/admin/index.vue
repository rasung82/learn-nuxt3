<template>
  <p-page padding>
    <div class="q-my-xl tetxt-center">
      <PageTitle title="Admin Page" />
      <pageDescription description="Admin Layout 페이지" />
    </div>
  </p-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

console.log("woors) Pages.admin.index...");
</script>

<style scoped></style>

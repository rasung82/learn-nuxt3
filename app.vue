<template>
  <NuxtLayout>
    <NuxtPage :page-key="(route) => route.fullPath" />
  </NuxtLayout>
</template>
<script setup lang="ts">
console.log('woors) App...');
</script>

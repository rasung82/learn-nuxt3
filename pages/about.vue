<template>
  <main class="min-h-screen">
    <div class="text-center">
      <div class="text-4xl">About</div>
      <p class="mt-2 text-gray-600">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class="flex flex-col">
        <RouterLink to="/">Home(RouterLink)</RouterLink>
        <RouterLink to="https://youtube.com">Youtube(RouterLink)</RouterLink>
        <br />
        <NuxtLink to="/">Home(NuxtLink)</NuxtLink>
        <NuxtLink to="https://youtube.com">Youtube(NuxtLink)</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
console.log("woors) Page.About...");
// RouterLink vs NuxtLink
// RouterLink 내부로 이동하는 링크이다.
// NuxtLink 컴포넌트 : RouterLink + <a> 태그를 즉시 대체
// 링크가 외부인지 내부인지 결정하고, 그에 따라 사용 가능한 최적화를 사용하여 렌더링한다.
</script>

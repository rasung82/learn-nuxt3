<template>
  <NuxtLayout>
    <!-- <RouterView /> -->
    <!-- <NuxtPage page-key="test" /> -->
    <!-- <NuxtPage :page-key="(route) => route.fullPath" /> -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
/**
 * useNuxtApp는 공유 런타임컨텍스트(nuxtApp)에 접근할 수 있는 내장 컴포저블함수이다.
 * 런타임컨텍스트(nuxtApp)는 코드가 실행되는 동안 앱의 상태와 설정을 말한다.
 *   - provide
 *   - hook
 */
const nuxtApp = useNuxtApp();
// nuxtApp.provide("hello", (message: string) => `Hello ${message}`);
// console.log("woors) App...", nuxtApp.vueApp);

/**
 * RouterView VS NuxtPage
 * RouterView : 컴포넌트가 마운트 될 때 한번만 렌더링된다.
 * NuxtPage : 기본적으로 라우트의 패스가 변경 되었을 때 다시 렌더링된다.
 *   - pageKey 속성에 정적인 키를 전달하면 한번만 렌더링된다.
 *   - 단, NuxtPage는 query가 추가 변경될때는 렌더링은 되지 않는다.
 *   - pageKey는 /pages 디렉토리에 있는 컴포넌트에서 definePageMeta함수를 통해 key 값 가능
 */

/**
 * Nuxt3 강의 목차
 * 4) Error Handling
 * 5) Route Middleware
 *  - Global Middleware
 *  - Named Middleware
 *  - Inline Middleware
 * 6) State Management
 *   - useState
 *   - Pinia
 * 7) Server Routing
 */
</script>

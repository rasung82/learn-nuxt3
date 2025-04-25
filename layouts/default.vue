<template>
  <div class="min-h-lvh">
    <header class="header">
      <div>
        <h3 class="text-[21px]">Vue & Nuxt Master Class</h3>
      </div>
      <nav class="flex justify-between gap-x-1 h-full">
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <button
            class="nav-button"
            @click="(event) => handleClick(event, navigate)"
          >
            {{ $t("home") }}
          </button>
        </NuxtLink>
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <button
            class="nav-button"
            @click="(event) => handleClick(event, navigate)"
          >
            {{ $t("about") }}
          </button>
        </NuxtLink>
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <button
            class="nav-button"
            @click="(event) => handleClick(event, navigate)"
          >
            {{ $t("admin") }}
          </button>
        </NuxtLink>
      </nav>
    </header>
    <div class="container mx-auto p-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useI18n } from "vue-i18n";
/**
 * 레이아웃 이름은 Kebab-case로 정규화된다.
 * 레이아웃을 지정하지 않으면 layouts/default.vue가 사용된다.
 * 애플리케이션이 단일 레이아웃만 있는 경우 대신 app.vue를 사용하는 것이 좋다
 * 특정 레이아웃을 사용하려면
 *  1) 페이지 컴포넌트에서 사용자 정의 레이아웃을 지정할 수 있다.
 *     - definePageMeta({ layout: 'custom'})
 *  2) NuxtLayout의 name 속성을 사용
 *     - <NuxtLayout name='custom'>
 */
console.log("woors) Layout.default...");

const handleClick = (_: Event, navigate: () => void) => {
  navigate();
};

interface Languages {
  name: string;
  code: "en" | "ko";
}

const languages = ref<Languages[]>([
  { name: "English", code: "en" },
  { name: "한국어", code: "ko" },
]);

const { locale } = useI18n();
const selectedLanguageName = computed(
  () => languages.value.find((item) => item.code === locale.value)?.name
);
</script>

<style scoped>
.header {
  @apply fixed top-0 h-12 w-full bg-gray-900 px-3.5 text-white flex justify-between items-center;
}
.nav-button {
  @apply w-16 text-sm hover:bg-gray-700 transition-colors duration-300;
}
</style>

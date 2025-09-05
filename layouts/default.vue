<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat :label="$t('home')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn
            stretch
            flat
            :label="$t('about')"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn
          stretch
          flat
          :label="$t('youtube')"
          no-caps
          @click="moveYoutube"
        />
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn
            stretch
            flat
            :label="$t('admin')"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps :label="selectedLanguageName">
          <q-list padding dense>
            <q-item
              v-for="{ code, name } in languages"
              :key="code"
              v-close-popup
              clickable
              :active="code === $i18n.locale"
              @click="$i18n.locale = code"
            >
              <q-item-section>
                <q-item-label>{{ name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator dark vertical />
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <q-btn
            stretch
            flat
            :label="$t('login')"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <q-btn
          v-else
          stretch
          flat
          :label="$t('logout')"
          no-caps
          @click="signOut()"
        />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <q-banner v-if="isAuthenticated" class="bg-primary text-white">
        {{ authUser }}
      </q-banner>
      <slot></slot>
    </q-page-container>
  </q-layout>
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
const { signOut } = useAuth();
const authUser = useAuthUser();
const isAuthenticated = useAuthenticated();

const pageContainerStyle = computed(() => ({
  maxWidth: "1080px",
  margin: "0 auto",
}));

const moveYoutube = async () => {
  await navigateTo("https://youtube.com/@gymcoding", {
    external: true,
    open: { target: "_blank" },
  });
};

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

/**
 * 전역 상태 관리 = useState
 * clearNuxtState : 캐시된 상태를 삭제
 */
const counter = useState<number>("counter");
</script>

<style scoped>
.header {
  @apply fixed top-0 h-12 w-full bg-gray-900 px-3.5 text-white flex justify-between items-center;
}
.nav-button {
  @apply w-16 text-sm hover:bg-gray-700 transition-colors duration-300;
}
</style>

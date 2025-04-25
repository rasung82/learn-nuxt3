<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Vue & Nuxt Master Admin</q-toolbar-title>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin/dynamic-layout">
          <q-btn
            stretch
            flat
            label="Dynamic Layout"
            no-caps
            @click="(event) => handleClick(event, navigate)"
          />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn
            stretch
            flat
            label="Home"
            no-caps
            @click="(event) => handleClick(event, navigate)"
          />
        </NuxtLink>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
console.log('woors) Layout.default...');

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const handleClick = (_: Event, navigate: () => void) => {
  navigate();
};

/**
 * 레이아웃 이름은 Kebab-case로 정규화된다.
 * 레이아웃을 지정하지 않으면 layouts/default.vue가 사용된다.
 */
</script>

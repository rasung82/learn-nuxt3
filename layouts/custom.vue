<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <header class="header">
      <div>
        <h3 class="text-[21px]">Vue & Nuxt Master Class {{ counter }}</h3>
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
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <button
            class="nav-button"
            @click="(event) => handleClick(event, navigate)"
          >
            {{ $t("login") }}
          </button>
        </NuxtLink>
        <button v-else class="nav-button" @click="(event) => signOut()">
          {{ $t("logout") }}
        </button>
      </nav>
    </header>
    <q-page-container :style="pageContainerStyle">
      <q-banner v-if="isAuthenticated" class="bg-primary text-white">
        {{ authUser }}
      </q-banner>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
console.log("woors) Layout.default...");

const counter = useState<number>("counter");

const authUser = useAuthUser();
const isAuthenticated = useAuthenticated();
const { signOut } = useAuth();

const handleClick = (_: Event, navigate: () => void) => {
  navigate();
};

const pageContainerStyle = computed(() => ({
  maxWidth: "1080px",
  margin: "0 auto",
}));
</script>

<style scoped>
.header {
  @apply fixed top-0 h-12 w-full bg-gray-900 px-3.5 text-white flex justify-between items-center;
}
.nav-button {
  @apply w-16 text-sm hover:bg-gray-700 transition-colors duration-300;
}
</style>

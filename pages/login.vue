<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageAuthTitle title="Login" />
      <PageAuthDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSucess" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "guest-only",
});

// const isAdmin = useAdmin();
const { isAdmin } = storeToRefs(useAuthStore());

const handleLoginSucess = async () => {
  console.log("woors) handleLoginSucess...");
  const redirect = isAdmin.value ? "/admin" : "/";
  // navigateTo 함수는 비동기 함수이기에 async-await 구문을 사용해야한다.
  await navigateTo(redirect);
};
</script>

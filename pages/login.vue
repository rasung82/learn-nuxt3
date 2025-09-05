<template>
  <div>
    <div class="flex flex-col items-center mt-12">
      <div class="text-6xl mt-12 mb-6">Login</div>
      <p class="text-base">Hello :)</p>
      <FormLogin style="width: 400px" @success="handleLoginSucess" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "guest-only",
});

const isAdmin = useAdmin();

const handleLoginSucess = async () => {
  console.log("woors) handleLoginSucess...");
  const redirect = isAdmin.value ? "/admin" : "/";
  await navigateTo(redirect);
};
</script>

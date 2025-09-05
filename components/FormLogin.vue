<template>
  <div class="">
    <form class="space-y-4" @submit.prevent="handleLoginSubmit">
      <div>
        <input
          v-model="form.email"
          id="email"
          type="email"
          placeholder="이메일"
          class="w-96 h-14 p-4 bg-gray-50 border-b-2 outline-none text-gray-500 rounded-t-lg focus:border-blue-300 hover:bg-gray-100 transition-colors duration-500"
        />
      </div>
      <div>
        <input
          v-model="form.passwowrd"
          id="password"
          type="password"
          placeholder="패스워드"
          class="w-96 h-14 p-4 bg-gray-50 border-b-2 outline-none text-gray-500 rounded-b-lg focus:border-blue-300 hover:bg-gray-100 transition-colors duration-500"
        />
      </div>

      <div v-if="error" class="text-red text-center">{{ error.message }}</div>

      <div>
        <button
          type="submit"
          class="w-96 h-14 shadow-md text-white font-bold text-xl rounded-lg bg-blue-500 hover:bg-blue-400 transition-colors duration-500"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
const emit = defineEmits<{
  success: [];
}>();
// const emit = defineEmits(['success']);

const form = ref({
  email: "",
  passwowrd: "",
});
const error = ref<Error | null>(null);
const loading = ref(false);

const handleLoginSubmit = () => {
  console.log("woors) handleLoginSubmit...");
  try {
    error.value = null;
    loading.value = true;

    signIn(form.value.email, form.value.passwowrd);
    emit("success");
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err;
    } else {
      throw Error;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>

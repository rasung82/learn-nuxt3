import { getUser } from "~/composables/auth/usersData";
import type { UserWithoutPassword } from "~/types/user";

/**
 *
 * Pinia 상태 유지
 *  - persist: true --- 쿠키에 정보를 저장한다.
 *  - persist: { key: 'auth', storage: localStorage } --- 로컬 스토리지에 정보를 저장한다.
 *  - persist: { key: 'auth', storage: sessionStorage } --- 세션 스토리지에 정보를 저장한다.
 *
 *
 */
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>(null);

    const setUser = (user: Maybe<UserWithoutPassword>) =>
      (authUser.value = user);

    const isAuthenticated = computed(() => !!authUser.value);

    const isAdmin = computed(() =>
      !authUser.value ? false : authUser.value.roles.includes("ADMIN")
    );

    const signIn = (email: string, password: string) => {
      const foundUser = getUser(email, password);
      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: "Invalid email or password",
        });
      }
      setUser(foundUser);
    };

    const signOut = () => setUser(null);

    return {
      authUser,
      isAuthenticated,
      isAdmin,
      signIn,
      signOut,
    };
  },
  {
    persist: true, // 쿠키에 정보를 저장한다.
  }
);

import { useAuthUser } from "./useAuthUser";

/**
 * 로그인한 사용자가 관리자 권한이 있는지 확인한다.
 */
export const useAdmin = () => {
  const authUser = useAuthUser();
  return computed(() => {
    if (!authUser.value) {
      return false;
    }
    return authUser.value?.roles.includes("ADMIN");
  });
};

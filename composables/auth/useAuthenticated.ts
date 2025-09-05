import { useAuthUser } from "./useAuthUser";

/**
 * 로그인한 사용자가 있는지 확인한다.
 */
export const useAuthenticated = () => computed(() => !!useAuthUser().value);

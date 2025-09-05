import type { UserWithoutPassword } from "~/types/user";

/**
 * 로그인한 사용자를 가져오는 컴퍼저블
 */
export const useAuthUser = () => {
  // 컴퍼저블 함수는 컴포넌트 단위로 생성이 된다.
  // 하여, 아래 주석 된 authUser는 컴포넌트 단위로 생성이 된다.
  // 공용으로 사용하려면 전역으로 변경하던지 상태관리(uesState, pinia)를 사용해야 한다.
  // const authUser = ref<Maybe<UserWithoutPassword>>(null);
  return useState<Maybe<UserWithoutPassword>>("user", () => null);
};

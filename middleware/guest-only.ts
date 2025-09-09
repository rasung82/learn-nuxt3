/**
 * 'guest-only' 네임드 미들웨어 적용
 *  - 로그인이 되어 있을 경우 라우팅을 취소한다.
 */
export default defineNuxtRouteMiddleware(() => {
  console.log("woors) guest-only middleware...");
  // const isAuthenticated = useAuthenticated();
  const { isAuthenticated } = storeToRefs(useAuthStore());
  if (isAuthenticated.value) {
    return abortNavigation();
  }
});

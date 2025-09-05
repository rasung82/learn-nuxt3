/**
 * 네임드 미들웨어 적용
 */
export default defineNuxtRouteMiddleware(() => {
  console.log("woors) guest-only");
  const isAuthenticated = useAuthenticated();
  if (isAuthenticated.value) {
    return abortNavigation();
  }
});

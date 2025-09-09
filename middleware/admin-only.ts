/**
 * 네임드 미들웨어 적용
 */
export default defineNuxtRouteMiddleware(() => {
  console.log("woors) admin-only middleware...");
  // const isAdmin = useAdmin();
  // const isAuthenticated = useAuthenticated();
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());

  // 로그인한 사용자가 없을 경우 로그인 화면으로 이동
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }

  // 로그인한 사용자가 관리자 권한을 없을 경우 '/' 로 이동
  if (!isAdmin.value) {
    return navigateTo("/");
  }
});

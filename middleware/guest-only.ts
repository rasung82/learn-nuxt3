export default defineNuxtRouteMiddleware(() => {
  console.log("woors) guest-only");
  const isAuthenticated = useAuthenticated();
  if (isAuthenticated.value) {
    return abortNavigation();
  }
});

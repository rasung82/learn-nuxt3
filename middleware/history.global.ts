export default defineNuxtRouteMiddleware((to) => {
  console.log("woors) history.global", to.fullPath);
});

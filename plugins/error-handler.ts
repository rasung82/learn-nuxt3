export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue:error", (err) => {
    console.log("vue:error:", err);
  });
});

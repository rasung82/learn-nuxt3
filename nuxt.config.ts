// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    /* */
  },
  imports: {
    presets: [{ from: "vue-i18n", imports: ["useI18n"] }],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
});

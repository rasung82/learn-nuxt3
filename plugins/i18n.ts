import { createI18n } from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "ko",
    messages: {
      en: {
        home: "Home",
        about: "About",
        youtube: "Youtube",
        admin: "Admin",
        login: "Login",
        logout: "Logout",
      },
      ko: {
        home: "홈",
        about: "소개",
        youtube: "유튜브",
        admin: "관리자",
        login: "로그인",
        logout: "로그아웃",
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});

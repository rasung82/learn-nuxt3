export const useDefaultLocale = (fallback = "en") => {
  const locale = ref(fallback);

  // navigator는 브라우저 객체임으로 클라이언트 사이드에서만 실행 가능
  // locale.value = navigator?.language.split("-")[0];
  console.log("accept-language: ", useRequestHeaders()["accept-language"]);

  return locale;
};

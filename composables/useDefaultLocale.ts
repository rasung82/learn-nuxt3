/**
 * useRequestHeaders 컴포저블 함수에 대해서 알아본다.
 *  - 서버사이드에서 요청 헤더를 가져올 수 있다.
 *  - 클라이언트 사이드에서는 빈 객체를 반환한다.
 *  - 서버사이드 렌더링(SSR) 중에만 사용할 수 있다.
 *  - page, component, plugins 들어오는 요청 헤더에 접근하기 위한 내장 컴포저블
 *
 * HTTP 요청 헤더에서 사용자의 기본 언어를 감지하고 이를 언어 상태로 유지하는 예제.
 */
export const useDefaultLocale = (fallback = "en") => {
  const locale = ref(fallback);

  if (process.server) {
    // useRequestHeaders 서버 사이드에서만 실행 가능.
    const acceptLanguage = useRequestHeaders()
      ["accept-language"].split(";")[0]
      .split(",")[1];
    console.log("woors) acceptLanguage:", acceptLanguage);
    locale.value = acceptLanguage;
  }

  if (process.client) {
    // navigator는 브라우저 객체임으로 클라이언트 사이드에서만 실행 가능
    const acceptLanguage = navigator?.language.split("-")[0];
    console.log("woors) acceptLanguage:", acceptLanguage);
    locale.value = acceptLanguage;
  }

  return locale;
};

/**
 * Nuxt는 애플리케이션 전체에서 사용할 수 있는 커스터마이즈 가능한 라우트 미들웨어를 제공한다.
 * 특정 라우터로 이동하기 전에 실행하고 싶은 코드를 추출하는데 이상적이다.
 *
 * 라우터 미들웨어는 세 가지 종류가 있다.
 * 1) Anonymous Middleware = Inline Middleware
 *   - definePageMeta({middleware: () => {}})
 *
 * 2) Named Middleware.
 *   - middleware/ 디렉토리에 배치되어 자동으로 로드된다.
 *   - 네이밍은 케밥 케이스로 한다.
 *
 * 3) Global Middleware.
 *   - middleware/ 디렉토리에 배치되어 모든 라우트 변경시 자동으로 실행된다.
 *   - .global 접미사를 포함한다.
 *
 * 라우터 미들웨어는 다음 라우트(to)와 현재 라우트(from)를 매개변수로 받는 내비게이션 가드이다.
 *   - 인증 체크
 *   - abortNavigation, navigateTo를 사용하여 라우팅을 조정
 *
 * 로그인 페이지 및 기능을 생성한 후 페이지별로 사용자의 접근 권한을 설정해본다.
 *   - admin-only.ts
 *   - user-only.ts
 *
 * 미들웨어 실행 순서
 *   1) 전역 미들웨어 (알파벳 순)
 *   2) 페이지에 정의(definePageMeta)되어 있는 미들웨어 순서
 *
 */

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("woors) history.global: %s -> %s", from.fullPath, to.fullPath);
  if (process.server) {
    console.log("woors) 서버에서만 실행되는 코드...");
  }
  if (process.client) {
    console.log("woors) 클라이언트에서만 실행되는 코드...");
  }
});

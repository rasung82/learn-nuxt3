<template>
  <div>
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}명의 수강생</span>
          <q-space />
          <a class="text-bold" :href="course?.reviewsUrl" target="_blank">
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">{{ course?.content }}</p>
      <q-separator class="q-mb-lg" />
      <q-form class="q-gutter-y-md">
        <q-btn
          label="수강완료"
          class="full-width"
          color="green"
          unelevated
          :outline="completed ? false : true"
          :icon="completed ? 'check' : undefined"
          @click="completed = !completed"
        />
        <q-input
          v-model="memo"
          type="textarea"
          outlined
          dense
          placeholder="메모를 작성해주세요."
          rows="3"
          autogrow
        />
      </q-form>
      <template #footer>
        <ClientOnly>
          <q-btn
            v-if="prevCourse"
            label="이전 강의"
            color="primary"
            unelevated
            :to="`${prevCourse?.courseSlug}`"
          />
          <q-btn
            label="쿼리 추가"
            color="dark"
            unelevated
            :to="{ path: $route.path, query: { timestamp: Date.now() } }"
          />
          {{ $route.fullPath }}
          <q-space />
          <q-btn
            v-if="nextCourse"
            label="다음 강의"
            color="primary"
            unelevated
            :to="`${nextCourse?.courseSlug}`"
          />
        </ClientOnly>
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;
const { course, prevCourse, nextCourse } = await useCourse(courseSlug);
console.log("woors) Page.courseSlug...%s, %s", route.meta.title, course?.title);

/**
 * definePageMeta는 페이지 컴포넌트에 대한 메타데이터를 설정하는데 사용
 * 컴퍼일러 매크로 함수이며 컴포넌트 내에서 참조할 수 없도록 컴파일된다. 하여, 페이지 메타 객체는 컴포넌트를 참조할 수 없다.
 * keepalive : 컴포넌트의 상태를 유지, 캐싱한다.
 */
definePageMeta({
  key: (route) => route.fullPath,
  title: "Course Detail Page",
  keepalive: true,
  layout: "custom",
  // validate: (route) => {
  //   const courseSlug = route.params.courseSlug as string;
  //   const { course } = useCourse(courseSlug);
  //   if (!course) {
  //     throw createError({
  //       statusCode: 404,
  //       statusMessage: "Page not found",
  //       fatal: false,
  //     });
  //   }
  //   return true;
  // },
  middleware: async (route) => {
    console.log("woors) Inline Middleware");
    const courseSlug = route.params.courseSlug as string;
    const { course } = await useCourse(courseSlug);
    if (!course) {
      // 네비케이션 중단 후 에러 메세지를 노출한다.
      return abortNavigation(
        createError({
          statusCode: 404,
          statusMessage: "Course not found",
          fatal: false,
        })
      );
      // return navigateTo('/')
    }
  },
});

const memo = ref("");
const completed = ref(false);

/**
 * 서버 측에서는 전체 화면 오류 페이지를 트리거, ClearError를 사용하여 오류 페이지를 정정할 수 있다.
 * 클라 측에서는 처리할 수 있는 비치명적인 오류를 발생
 */
// if (!course) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: "Page not found",
//     fatal: false,
//   });
// }
</script>

<style scoped></style>

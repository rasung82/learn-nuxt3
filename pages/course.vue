<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-3">
        <q-card>
          <q-item-label header
            >강의 로드맵 {{ $hello("Rasung, woo") }}</q-item-label
          >
          <q-list bordered separator>
            <q-item
              v-for="(course, index) in courses"
              :key="course.courseSlug"
              v-ripple
              clickable
              :to="`/course/${course?.courseSlug}`"
            >
              <q-item-section>
                {{ index + 1 }}. {{ course.title }}
              </q-item-section>
            </q-item>
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-1">
              <q-item clickable @click="navigate()">Prefetching Test 1</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-2">
              <q-item clickable @click="navigate()">Prefetching Test 2</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-3">
              <q-item clickable @click="navigate()">Prefetching Test 3</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/course/empty">
              <q-item clickable @click="navigate()">Example createError</q-item>
            </NuxtLink>
          </q-list>
        </q-card>
      </div>
      <div class="col">
        <NuxtPage />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = await useCourses();

console.log("woors) Pages.course...", useNuxtApp()?.$hello("Rasung. woo"));

// 중첩 라우팅 : NuxtPage 컴포넌트를 사용하여 중첩된 경로를 표시할 수 있다.
</script>

<template>
  <main class="min-h-screen">
    <div class="text-center">
      <PageTitle title="About" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      />
      <div class="flex flex-col">
        <RouterLink to="/">Home(RouterLink)</RouterLink>
        <RouterLink to="https://youtube.com">Youtube(RouterLink)</RouterLink>
        <br />
        <NuxtLink to="/">Home(NuxtLink)</NuxtLink>
        <NuxtLink to="https://youtube.com">Youtube(NuxtLink)</NuxtLink>

        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useState('counter')</div>
          <div>
            counter: {{ counter }}
            <q-btn
              label="counter"
              color="primary"
              dense
              no-caps
              @click="counter++"
            />
          </div>
          <div>
            sameCounter: {{ sameCounter }}
            <q-btn
              label="counter"
              color="primary"
              dense
              no-caps
              @click="sameCounter++"
            />
          </div>
          <div>
            <q-btn label="clear" @click="clearNuxtState('counter')" />
          </div>
        </div>
        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useCounterStore()</div>
          <div>counter: {{ count }}</div>
          <div>doubleCounter: {{ doubleCounter }}</div>
          <div>
            <q-btn label="Increment" @click="counterStore.increment()" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
console.log("woors) Page.About...");
/**
 * RouterLink vs NuxtLink
 * RouterLink 내부로 이동하는 링크이다.
 * NuxtLink 컴포넌트 : RouterLink + <a> 태그를 즉시 대체
 * 링크가 외부인지 내부인지 결정하고, 그에 따라 사용 가능한 최적화를 사용하여 렌더링한다.
 */

/**
 * Nuxt3는 강력한 상태 관리 라이브러리와 useState 컴포저블을 통해 공유 상태를 생성한다.
 *
 * useState 내부의 데이터는 JSON으로 직렬화되므로
 * 클래스, 함수 등 직렬화할 수 없는 어떤 것도 포함하지 않는 것이 중요하다.
 *
 * <사용법>
 *  - useState<T>(key, defaultValue?) : key에 해당하는 상태를 생성 또는 반환
 *  - 컴포넌트 간에 반응적이고 SSR 친화적인 상태를 쉽게 공유할 수 있다.
 *  - 해당 값은 서버 측 렌더링 후 하이드레이션 중 유지되며 고유 키를 사용하여 모든 컴포넌트에 공유된다.
 *
 * <초기화>
 *  - clearNuxtState(): 모든 상태를 삭제
 *  - clearNuxtState('key'): 특정 키에 해당하는 상태 삭제
 *  - clearNuxtState((key) => key.startsWith('prefix')): 조건에 따른 키 상태 삭제
 */

// const counter = useState<number>("counter", () => 1);
// const sameCounter = useState<number>("counter");

// Using shared state. (composables/states.ts)
const counter = useCounter();
const sameCounter = useCounter();

// Using Pinia store. (stores/counter.ts)
const counterStore = useCounterStore();
const { counter: count, doubleCounter } = storeToRefs(counterStore);
</script>

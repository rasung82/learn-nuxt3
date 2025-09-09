/**
 *
 */
export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);
  const name = ref("Eduaro");
  const doubleCounter = computed(() => counter.value * 2);
  function increment() {
    counter.value++;
  }

  return { counter, name, doubleCounter, increment };
});

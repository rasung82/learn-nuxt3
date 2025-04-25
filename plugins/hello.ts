export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (message: string) => `Hello ${message}`,
    },
  };
});

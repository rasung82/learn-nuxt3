<template>
  <q-card class="card">
    <q-card-section v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </q-card-section>

    <q-card-section class="card__body">
      <slot></slot>
    </q-card-section>

    <q-separator />

    <q-card-actions v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
// 런타임 선언
// defineProps({
//   title: { type: String, required: true, default: '' },
// });

// 타입기반 선언, 보통은 제네릭 타입 인수를 사용하여 순수 타입으로 Props를 정의하는 것이 더 직곽적이다.
defineProps<{
  title?: { type: string };
}>();

// 타입기반 선언 (기본값을 설정할 수 없다.)
// interface Props {
//   title?: string;
// }
// defineProps<Props>();
</script>

<style scoped>
.card__header {
  padding: 32px 32px 0px 32px;
}
.card__body {
  padding: 32px;
}
.card__footer {
  padding: 16px 32px 16px 32px;
}
</style>

<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
// 런타임 기반 선언 (Vue3.0 스펙)
// defineProps({
//   title: { type: String, default: '' },
//   subtitle: { type: String, default: '' },
//   thumbnail: { type: String, default: '' },
// });
// defineEmits(['click']);

// 타입 기반 선언 (Using pure-type syntax)
interface Props {
  thumbnail: string;
  subtitle: string;
  title: string;
}
defineProps<Props>();

defineEmits<{
  click: [];
}>();
</script>

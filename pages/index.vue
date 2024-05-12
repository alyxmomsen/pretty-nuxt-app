<script setup lang="ts">
import axios, { AxiosError } from 'axios';

definePageMeta({
  layout: "default",
  // layout:false
});

const responsed = ref<null|string>(null);

// defined in nuxt.config.ts
const rtc = useRuntimeConfig() ;

console.log({rtc})

// const {isAuth} = useIsAuth();
</script>

<template>
  <div>
    {{ responsed }}
    <h1>index</h1>
    <div>
      {{ rtc }}
    </div>
  </div>
</template>

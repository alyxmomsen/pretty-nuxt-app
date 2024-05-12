<script setup lang="ts">
import axios, { AxiosError } from 'axios';

definePageMeta({
  layout: "default",
  // layout:false
});

const av2 = useAxiosV2();

console.log({av2});

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
      <pre>
        {{ rtc }}
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">

const {ifAuth , isAuth , axiosResponse} = useIsAuth();

isAuth();

</script>

<template>
  <h1>default layout</h1>
  <MainMenu :is-auth="!!ifAuth" />
  <div>
  </div>
  <slot></slot>
  <pre></pre>
</template>

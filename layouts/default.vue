<script setup lang="ts">

const {ifAuth , isAuth , axiosResponse} = useIsAuth();

isAuth();

</script>

<template>
  <h1>default layout</h1>
  <MainMenu :is-auth="!!ifAuth">
    <template v-slot:foobar>
      <div>bar baz</div>
    </template>
    <template v-slot:barfoo>
      <div>baz bar</div>
    </template>
  </MainMenu>
  <div>
  </div>
  <slot name="default"></slot>
  <pre></pre>
</template>

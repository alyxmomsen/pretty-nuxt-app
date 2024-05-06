<script setup>
const props = defineProps({
  isAuth:{
    type:Boolean ,
    required:true ,
  }
});

console.log(props);
</script>

<template>
  <div class="regular-wrapper main-menu">
    <slot name="foobar"></slot>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/gallery">gallery</NuxtLink>
    <NuxtLink to="/auth/registration">registration</NuxtLink>
    <NuxtLink to="/auth/login">login</NuxtLink>
    <Suspense on-fallback="hello world">
      <NuxtLink v-if="$props.isAuth" to="/account">account</NuxtLink>
    </Suspense>
    <slot name="barfoo"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  anyprop: {
    type: String,
  },
});

console.log(props);
</script>

<template>
  <div class="regular-wrapper main-menu">
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/auth/registration">registration</NuxtLink>
    <NuxtLink to="/auth/login">login</NuxtLink>
  </div>
</template>

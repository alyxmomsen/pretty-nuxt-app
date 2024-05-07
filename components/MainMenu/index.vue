<script setup>
// const props = defineProps({
//   isAuth:{
//     type:Boolean ,
//     required:true ,
//   }
// });

const { checkIfAuth, isAuth } = useIsAuth();

// const isAuth = ref(false) ;

onMounted(async () => {
  await checkIfAuth();
});

// console.log('isAuth' , isAuth.value);

// new Promise((resolve  , reject) => {});
</script>

<template>
  <div class="regular-wrapper main-menu">
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/gallery">gallery</NuxtLink>
    <NuxtLink to="/auth/registration">registration</NuxtLink>
    <NuxtLink to="/auth/login">login</NuxtLink>
    <NuxtLink v-if="isAuth" to="/account">account</NuxtLink>
  </div>
</template>

<script></script>

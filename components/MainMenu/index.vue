<script setup>

// const props = defineProps({
//   isAuth:{
//     type:Boolean ,
//     required:true ,
//   }
// });

const { checkIfAuth, isAuth } = useIsAuth();

onMounted(async () => {
  await checkIfAuth();
});

</script>

<template>
  <div class="wrapper main-menu">
    <NuxtLink class="button-13"to="/">home</NuxtLink>
    <NuxtLink class="button-13" to="/gallery">gallery</NuxtLink>
    <NuxtLink class="button-13" to="/auth/registration">registration</NuxtLink>
    <NuxtLink class="button-13" to="/auth/login">login</NuxtLink>
    <NuxtLink class="button-13" v-if="isAuth" to="/account">account</NuxtLink>
  </div>
</template>

<script></script> 

<script setup lang="ts">

// onMounted(() => {

// });

const {checkIfAuth} = useIsAuth() ;



// navigateTo('/');

const title = computed(() => useMyUtils().prettyText('the my account') )

// checkIfAuth();
// console.log('isAuth' , isAuth.value);

// if(!isAuth.value) {

//     navigateTo('/');
// }

function onclick () {

    localStorage.removeItem('my_access_token');
    
    reloadNuxtApp({
        path:'/'
    });
}


</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div>hello</div>
        <button @click="onclick">log out</button>
    </div>
</template>

<style scoped>

</style>
<script setup lang="ts">

    import data from "~/assets/data/main.json" ;

    const images = ref(data);

    

    console.log(images.value);

   const {prettyText} = useMyUtils();

    function f () {
        alert();
    }

</script>


<template>
    <div>
        <h1>{{ prettyText('the pretty gallery') }}</h1>
        <div class="regular-wrapper flex wrap flex-center-x">
            <NuxtImg width="200" v-for="image in images.images" :src="'/' + image.src" />
        </div>
    </div>
</template>



<style scoped>

</style>
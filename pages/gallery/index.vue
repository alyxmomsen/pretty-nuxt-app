<script setup lang="ts">
import data from "~/assets/data/images_map.json";

// const axios = useAxiosPro('http://localhost:3001'); 

// axios.post('api/test' , {});

const images = ref(data);

const { prettyText } = useMyUtils();

function f() {
  alert();
}
</script>

<template>
  <div>
    <h1>{{ prettyText("the pretty gallery") }}</h1>
    <div class="regular-wrapper flex wrap flex-center-x">
      <NuxtImg
        @click="''"
        width="200"
        v-for="image in images.images"
        :src="'/' + image.src"
      />
    </div>
  </div>
</template>

<style scoped></style>

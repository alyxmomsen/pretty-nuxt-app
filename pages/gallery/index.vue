<script setup lang="ts">
import axios from "axios";
import data from "~/assets/data/images_map.json";

async function foo () {

  // const stat = useAppConfig();

  const rc = useRuntimeConfig();

  const ip = rc.public ;
  // ip.helloworld

  console.log({ip:ip.helloworld});

  try {

    const re = await axios.post('/api/my-api');

    console.log(re);


  }
  catch (e) {

    console.log('its error ...');

  }


}


foo();

const images = ref(data);

const { prettyText } = useMyUtils();

function f() {
  alert();
}
</script>

<template>
  <div>
    <h1>{{ prettyText("the pretty gallery") }}</h1>
    <div class="wrapper grid">
      <NuxtImg
        @click="''"
        width="100%"
        v-for="image in images.images"
        :src="'/' + image.src"
      />
    </div>
  </div>
</template>

<style scoped></style>

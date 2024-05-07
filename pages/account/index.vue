<script setup lang="ts">
interface ResponsePayloadDataType<T = any> {
  status: boolean;
  message: string;
  payload: null | {
    subject: string;
    content: {
      type: string;
      data: T;
    };
  };
}

import axios, { Axios, AxiosError } from "axios";

// onMounted(() => {

// });

// const {checkIfAuth} = useIsAuth() ;

const ifNotify = ref(true);
const notifications = ref<string[]>([]);

async function subscribe() {
  ifNotify.value = false;

  console.log("on mounted");
  try {
    const response = await axios.post<
      ResponsePayloadDataType<{ username: string }>
    >("http://localhost:3001/api/notifications");

    const data = response.data;

    const username = data.payload
      ? data.payload.content.data.username
      : "undefined";

    ifNotify.value = true;
    notifications.value = ((arr) => [...arr, username])(notifications.value);

    console.log({ data });
  } catch (e) {
    const err = e as AxiosError;

    console.log("axios error");
  }
}

// onMounted(sendSubscribe);
// navigateTo('/');

const title = computed(() => useMyUtils().prettyText("the my account"));

// const notyfication = computed()

// checkIfAuth();
// console.log('isAuth' , isAuth.value);

// if(!isAuth.value) {

//     navigateTo('/');
// }

function a() {
  alert();
}
</script>

<template>
  <h1>{{ title }}</h1>
  <AccauntControlPanel
    v-on:describe="subscribe"
    :if-notification-is="ifNotify"
  />
  <Notifycations v-if="notifications.length" :notifications="notifications" />
</template>

<style scoped></style>

<script setup lang="ts">
const ifUsersLoading = ref(false);
const ifUsersLoaded = ref(false);

// AxiosError

const baseURL = "http://localhost:3001";
const url = "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app"

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

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

const users = ref<User[]>([]);

async function subscribe() {
  ifNotify.value = false;

  console.log("on mounted");
  try {
    const response = await axios.post<
      ResponsePayloadDataType<{ username: string }>
    >(`${/* baseURL */url}/api/notifications`);

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

const title = computed(() => useMyUtils().prettyText("the my account"));

async function deleteUser(method: "get" | "post" | "delete", endpoint: string , userId:string) {
  ifUsersLoading.value = true;

  const token = localStorage.getItem("my_access_token");

  // console.log({token});

  try {
    const response = await axios.delete<ResponsePayloadDataType<User[]>>(
      `${/* baseURL */url}/${endpoint}?userId=${userId}` ,
      {
        headers: {
          Authorization: token,
        },
      },
    );

    if (response.data.payload) {
      const responsedContentData = response.data.payload.content.data;

      users.value = [...responsedContentData];
    }
    else {
        
        console.log(response.data.message);

    }

  } catch (e) {
    const error = e as AxiosError<ResponsePayloadDataType<any>>;

    const response = error.response;

    if (response) {
      const message = response.data.message;
      console.log({ message });
    }
  }

  ifUsersLoading.value = false;
}

async function getUsers(method: "get" | "post" | "delete", endpoint: string) {
  ifUsersLoading.value = true;

  const token = localStorage.getItem("my_access_token");

  // console.log({token});

  try {
    const response = await axios[method]<ResponsePayloadDataType<User[]>>(
      `${/* baseURL */url}/${endpoint}`,
      {
        headers: {
          Authorization: token,
        },
      },
    );

    if (response.data.payload) {
      const responsedContentData = response.data.payload.content.data;

      users.value = [...responsedContentData];
    }
  } catch (e) {
    const error = e as AxiosError<ResponsePayloadDataType<any>>;

    const response = error.response;

    if (response) {
      const message = response.data.message;
      console.log({ message });
    }
  }

  ifUsersLoading.value = false;
}

function test(value: any) {
  alert(JSON.stringify(value));
}
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="regular-wrapper flex">
    <div class="regular-wrapper">
      <AccauntControlPanel
        v-on:describe="subscribe"
        v-on:getUsers="getUsers('get', 'api/users')"
        :if-notification-is="ifNotify"
        :if-users-loading="ifUsersLoading"
      />
    </div>
    <AccauntUsersList v-on:delete_user="deleteUser('delete' , 'api/users' , $event)" :users-list="users" />
  </div>
  <Notifycations v-if="notifications.length" :notifications="notifications" />
</template>

<style scoped></style>

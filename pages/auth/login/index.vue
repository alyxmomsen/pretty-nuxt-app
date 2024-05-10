<script setup lang="ts">
const input_email = ref("");
const input_password = ref("");

const submitted = ref(false);

const {
  data,
  errorSubject,
  responseMessage,
  custom_response_status,
  send_post_request,
} = useAxios(3001);

definePageMeta({
  layout: "default",
});

async function onSubmit() {
  submitted.value = true;

  await send_post_request("/api/login", {
    email: input_email.value,
    password: input_password.value,
  });

  /**
   * reloading the app after request
   */

  if (data.value?.status) {
    reloadNuxtApp({
      path: "/account",
    });
  }

  console.log(data.value);
}

const { prettyText } = useMyUtils();

const {mailRegExp , passwordRegExp } = useMyRegExp();

</script>

<template>
  <h1>{{ prettyText("log-in form") }}</h1>
  <form @submit.prevent="onSubmit">
    <button>{{ prettyText("click at this") }}</button>
    <CustomSpan
    :isValid="(() => !!mailRegExp.exec(input_email))()"
      @update="(payload) => (input_email = payload)"
      name="e-mail"
      type="string"
      :success="'welldone'"
      :denied="'too short'"
      :forbidden="errorSubject && errorSubject === 'email' ? true : false"
      :forbidden_mesage="'wrong'"
    />
    <CustomSpan
      :isValid="(() => !!passwordRegExp.exec(input_password))()"
      @update="(payload) => (input_password = payload)"
      name="password"
      type="string"
      :success="'welldone'"
      denied="too short"
      :forbidden="errorSubject && errorSubject === 'password' ? true : false"
      :forbidden_mesage="'wrong'"
    />
    <button type="submit">submit button</button>
  </form>
  <h3
    v-if="responseMessage"
    :style="{ color: custom_response_status ? 'green' : '#bf4242' }"
  >
    {{ responseMessage }}
  </h3>
</template>

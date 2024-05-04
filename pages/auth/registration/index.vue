<script setup lang="ts">

const input_email = ref("");
const input_username = ref("");
const input_password = ref("");

const submitted = ref(false);

const {data , errorSubject , responseMessage , custom_response_status , send_post_request } = useAxios(3001) ;

definePageMeta({
  layout: "default",
});

function updateInputs() {}

function onSubmit(): void {
    submitted.value = true ;

    send_post_request('/api/registration' , {email:input_email.value , password:input_password.value , username:input_username.value });

}
</script>

<template>
  <h1>registration</h1>
  <form @submit.prevent="onSubmit">
    <CustomSpan
      @update="(payload) => (input_email = payload)"
      name="e-mail"
      type="string"
      :success="'welldone'"
      :denied="'too short'"
      :depricated="(errorSubject && errorSubject === 'email') ? true : false"
    />
    <CustomSpan
      @update="(payload) => (input_password = payload)"
      name="password"
      type="string"
      :success="'welldone'"
      denied="too short"
      :depricated="(errorSubject && errorSubject === 'password') ? true : false"
    />
    <CustomSpan
      @update="(payload) => (input_username = payload)"
      name="user-name"
      type="string"
      :success="'welldone'"
      denied="too short"
      :depricated="(errorSubject && errorSubject === 'username') ? true : false"
    />
    <button type="submit">submit button</button>
  </form>
  <h3 v-if="responseMessage" :style="{color: custom_response_status ? 'green' :'#bf4242'}">{{ responseMessage }}</h3>
</template>

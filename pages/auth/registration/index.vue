<script setup lang="ts">

const input_email = ref("");
const input_username = ref("");
const input_password = ref("");

const submitted = ref(false);



// ==============================================

const myAxiosPro = useAxiosPro('http://localhost:3001');

function tryRegistration () {

  myAxiosPro.post('api/registration' , {
    email:input_email.value ,
    password:input_password.value ,
    username:input_username.value ,
  });

  return 'DICK'
}

console.log({envtest:process.env.TEST});

// ==============================================

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

const {mailRegExp , passwordRegExp , userNameRegExp} = useMyRegExp();

function onSubmit(): void {

  submitted.value = true ;

  send_post_request("/api/registration", {

    email: input_email.value,
    password: input_password.value,
    username: input_username.value,
  });
}

function onsubmit() {}

const { prettyText } = useMyUtils();


</script>

<template>
  <h1>{{ prettyText("registration form") }}</h1>
  <form @submit.prevent="tryRegistration">
    <UProgress v-if="myAxiosPro.ifInProcess.value" animation="carousel" />
    <button>{{ prettyText("you registration") }}</button>
    <CustomSpan
      :isValid="(() => !!mailRegExp.exec(input_email))()"
      @update="(payload) => {
        // console.log(payload);
        input_email = payload ;
      }"
      name="e-mail"
      type="string"
      :success="'valid'"
      :denied="'too short'"
      :forbidden="errorSubject && errorSubject === 'email' ? true : false"
      :forbidden_mesage="'already in use'"
    />
    <CustomSpan
      :isValid="(() => !!passwordRegExp.exec(input_password))()"
      @update="(payload) => (input_password = payload)"
      name="password"
      type="string"
      :success="'welldone'"
      denied="too short"
      :forbidden="errorSubject && errorSubject === 'password' ? true : false"
      :forbidden_mesage="'already in use'"
    />
    <CustomSpan
      :isValid="(() => !!userNameRegExp.exec(input_username))()"
      :validator="() => {}" 
      @update="(payload) => (input_username = payload)"
      name="user-name"
      type="string"
      :success="'welldone'"
      denied="too short"
      :forbidden="errorSubject && errorSubject === 'username' ? true : false"
      :forbidden_mesage="'already in use'"
    />
    <button type="submit">submit button</button>
  </form>
  <div v-if="myAxiosPro.responsedData.value?.status"> {{ myAxiosPro.responsedData.value.message }}</div>
</template>

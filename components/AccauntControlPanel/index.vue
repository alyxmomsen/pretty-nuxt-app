<script setup lang="ts">
function onclick() {
  localStorage.removeItem("my_access_token");
  reloadNuxtApp({
    path: "/",
  });
}
  
const props = defineProps({
  ifNotificationIs: {
    type: Boolean,
    required:true ,
  },
  ifUsersLoading: {
    type:Boolean , 
    required:true ,
  }
});
</script>

<template>
  <div class="wrapper main-menu">
    <button class="button-13"@click="onclick">log out</button>
    <UProgress v-if="!ifNotificationIs" animation="elastic" />
    <button
      class="button-13"
      :disabled="!ifNotificationIs"
      :class="ifNotificationIs ? '' : 'btn-held'"
      @click="$emit('subscribe', null)"
    >
      {{ ifNotificationIs ? 'subscribe' : 'subsribed' }}
    </button>
    <UProgress v-if="ifUsersLoading" animation="carousel" />
    <button
      class="button-13"
      :class="!ifUsersLoading ? '' : 'btn-held'"
      :disabled="ifUsersLoading ? true : false"
      @click="$emit('getUsers')"
    >
      Get Users
    </button>
  </div>
</template>

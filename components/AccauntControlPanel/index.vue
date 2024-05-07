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
  <div class="flex flex-col">
    <button @click="onclick">log out</button>
    <button
      :disabled="!ifNotificationIs"
      :class="ifNotificationIs ? '' : 'btn-held'"
      @click="$emit('describe', null)"
    >
      subscribe
    </button>
    <button
      :class="!ifUsersLoading ? '' : 'btn-held'"
      :disabled="ifUsersLoading ? true : false"
      @click="$emit('getUsers')"
    >
      Get Users
    </button>
  </div>
</template>

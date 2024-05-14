<template>
  <div v-if="$props.usersList.length" class="wrapper grid"><!-- flex wrap -->
    <div :class="user.isDeleted ? 'marked-to-delete' : ''" class="wrapper flex flex-col flex-gap marilin-manson" v-for="user of $props.usersList">
      <div class="wrapper flex flex-col"><span class="description">status: </span><span>{{ user.isDeleted ? 'deleted' : ''}}</span></div>
      <div class="wrapper flex flex-col"><span class="description">user id: </span><span>{{ user.id }}</span></div>
      <div class="wrapper flex flex-col"><span class="description">user name: </span><span>{{ user.username }}</span></div>
      <div class="wrapper flex flex-col"><span class="description">user email: </span><span>{{ user.email }}</span></div>
      <p class="wrapper flex flex-col"><span class="description">user password: </span><span>{{ user.password }}</span></p>
      <button @click="$emit('delete_user', user.id)">delete user</button>
    </div>
  </div>
</template>

<script setup lang="ts">

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  isDeleted:boolean ;
  hold:boolean ;
}

const props = defineProps({
  usersList: {
    type: Array<User>,
    required: true,
  },
});

</script>

<style scoped>

</style>

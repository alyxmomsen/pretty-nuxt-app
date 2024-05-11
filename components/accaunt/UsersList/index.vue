<template>
  <div v-if="$props.usersList.length" class="regular-wrapper grid-container"><!-- flex wrap -->
    <div :class="user.isDeleted ? 'marked-to-delete' : ''" class="regular-wrapper m-9" v-for="user of $props.usersList">
      <div>{{ user.isDeleted}}</div>
      <div>{{ user.id }}</div>
      <div>{{ user.username }}</div>
      <div>{{ user.email }}</div>
      <p>{{ user.password }}</p>
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

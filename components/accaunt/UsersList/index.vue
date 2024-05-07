<template>
  <div v-if="$props.usersList.length" class="regular-wrapper flex wrap">
    <div class="regular-wrapper m-9" clas v-for="user of $props.usersList">
      <div>{{ user.id }}</div>
      <div>{{ user.username }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.password }}</div>
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
}

const props = defineProps({
  usersList: {
    type: Array<User>,
    required: true,
  },
});
</script>

<style scoped></style>

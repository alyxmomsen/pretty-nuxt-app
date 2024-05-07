<script setup lang="ts">
function onclick() {
  localStorage.removeItem("my_access_token");
  reloadNuxtApp({
    path: "/",
  });
}

const props = defineProps({
  // onDescribe:{
  //     type:
  // }

  ifNotificationIs: {
    type: Boolean,
  },
});
</script>

<template>
  <div>
    <button @click="onclick">log out</button>
    <button
      :disabled="!ifNotificationIs"
      :class="ifNotificationIs ? '' : 'btn-held'"
      :style="!ifNotificationIs ? { cursor: 'default' } : ''"
      @click="$emit('describe', null)"
    >
      subscribe
    </button>
  </div>
</template>

<style scoped></style>

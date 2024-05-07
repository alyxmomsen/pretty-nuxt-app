<script setup lang="ts">
const props = defineProps({
  notifications: {
    type: Array<string>,
    required: true,
  },
});

const notification = (uesrname: string) =>
  `user ${uesrname.toUpperCase()} registred !!`;
</script>

<template>
  <div
    class="regular-wrapper notifications-wrapper"
    :style="{ backgroundColor: 'transparent' }"
  >
    <div
      class="regular-wrapper m-9"
      :style="{ backgroundColor: '#6b727a', color: '#202e3c' }"
      v-for="notify of $props.notifications"
    >
      <h5>NOTIFICATION:</h5>
      <div>
        {{ notification(notify) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update"]);

const props = defineProps({
  success: {
    type: String,
    required: true,
  },
  denied: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  forbidden: {
    type: Boolean,
    required: true,
  },
  forbidden_mesage: {
    type: String,
    required: true,
  },
  isValid: {
    type:Boolean ,
    required:true ,
  }
});

const input_password = ref("");



</script>

<template>
  <div class="input-wrapper">
    <input
      @input="
        (e: InputEvent) => {
          $emit('update', (e.currentTarget as HTMLInputElement).value)
        }
      "
      :placeholder="$props.name"
      v-model="input_password"
      :type="$props.type"
    />
    <label>{{ $props.name }}</label>
    <span
      class="alert"
      :class="
        (input_password.length > 1) && isValid ? 'x-option-success' : 'x-option-warning'
      "
      >{{ input_password.length > 1 && isValid ? $props.success : $props.denied }}</span
    >
    <span v-if="$props.forbidden" :style="{ color: '#bf4242' }">{{
      $props.forbidden_mesage
    }}</span>
  </div>
</template>

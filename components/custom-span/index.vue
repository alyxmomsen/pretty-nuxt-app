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
  depricated:{
    type:Boolean,
    required:true ,
  }
});

const input_password = ref("");
</script>

<template>
  <div class="input-wrapper">
    <input 
      @input="
        (e: InputEvent) =>
          $emit('update', (e.currentTarget as HTMLInputElement).value)
      "
      :placeholder="$props.name"
      v-model="input_password"
      :type="$props.type"
    />
    <label>{{ $props.name }}</label>
    <span
      class="alert"
      :class="
        input_password.length > 3 ? 'x-option-success' : 'x-option-warning'
      "
      >{{ input_password.length > 3 ? $props.success : $props.denied }}</span
    >
    <span v-if="$props.depricated" :style="{color:'#bf4242'}">already in use!</span>
  </div>
</template>

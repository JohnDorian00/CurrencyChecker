<template>
  <v-text-field name="not-pass" type="number" v-model="internalValue" @input="$emit('input', internalValue)" />
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true
  }
})

const internalValue = ref(props.value)

watch(
  () => props.value,
  () => {
    internalValue.value = props.value
  }
)
</script>

<style scoped>
.v-text-field input {
  font-size: 10em;
}
</style>

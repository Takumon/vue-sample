<script setup lang="ts">
import type { ToastMessage } from '@/stores/toast'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  message: ToastMessage
}>()

const emit = defineEmits<{
  remove: []
}>()

const timer = ref<ReturnType<typeof setTimeout> | null>(null)

onMounted(() => {
  if (props.message.timeout) {
    timer.value = setTimeout(() => {
      emit('remove')
    }, props.message.timeout)
  }
})

onBeforeUnmount(() => {
  if (timer.value) {
    clearTimeout(timer.value)
  }
})
</script>
<template>
  <v-alert
    :type="props.message.type"
    :closable="props.message.showCloseButton"
    @click:close="emit('remove')"
    >{{ props.message.text }}</v-alert
  >
</template>

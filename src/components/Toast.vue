<script setup lang="ts">
import { useToastStore } from '@/stores/toast'
import ToastItem from './ToastItem.vue'
const toastStore = useToastStore()
</script>

<template>
  <v-snackbar
    v-model="toastStore.isNotEmpty"
    multi-line
    :timeout="-1"
    location="top center"
    color="transparent"
    variant="text"
    @on-vnode-unmounted="toastStore.unset()"
  >
    <template v-for="item in toastStore.messages" :key="item.id">
      <template v-if="toastStore.isLast(item.id)">
        <ToastItem :message="item" @remove="toastStore.remove(item.id)"></ToastItem>
      </template>
      <template v-else>
        <div class="mb-2">
          <ToastItem :message="item" @remove="toastStore.remove(item.id)"></ToastItem>
        </div>
      </template>
    </template>
  </v-snackbar>
</template>

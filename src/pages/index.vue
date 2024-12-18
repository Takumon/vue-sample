<script setup lang="ts">
import { useToastStore } from '@/stores/toast'

const toastStore = useToastStore()
</script>
<template>
  <v-container>
    <v-breadcrumbs
      :items="[
        {
          title: 'ホーム',
          disabled: false,
        },
      ]"
    >
      <template v-slot:prepend>/</template>
    </v-breadcrumbs>

    <h3 class="text-h3 mb-12">ホーム</h3>

    <v-container>
      <v-row class="ma-2 pa-2">
        <v-btn color="success" @click="toastStore.showSuccess('成功です'.repeat(20))">
          成功トーストの表示</v-btn
        >
      </v-row>
      <v-row class="ma-2 pa-2">
        <v-btn color="error" @click="toastStore.showError('エラーです'.repeat(20))">
          エラートーストの表示</v-btn
        >
      </v-row>
      <v-row class="ma-2 pa-2">
        <v-btn color="warning" @click="toastStore.showWarning('警告です'.repeat(20))">
          警告トーストの表示</v-btn
        >
      </v-row>
      <v-row class="ma-2 pa-2">
        <v-btn color="info" @click="toastStore.showInfo('情報です'.repeat(20))">
          情報トーストの表示</v-btn
        >
      </v-row>
    </v-container>
  </v-container>
</template>

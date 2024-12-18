<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import type { PageContainerProps } from '@/types/page'
import { useRoute } from 'vue-router'

const route = useRoute('/users/[id]/edit/confirm')

const page: PageContainerProps = {
  title: 'ユーザー編集 - 確認',
  breadcrumbs: [
    { title: 'ユーザー一覧', href: '/users/list' },
    { title: 'ユーザー詳細', href: `/users/${route.params.id}/details` },
    { title: 'ユーザー編集', disabled: false },
  ],
}
</script>
<template>
  <PageContainer v-bind="page">
    <v-btn :to="`/users/${route.params.id}/edit/input`" variant="outlined" color="secondary"
      >入力を修正する</v-btn
    >
  </PageContainer>
</template>

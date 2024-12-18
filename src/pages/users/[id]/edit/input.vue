<script setup lang="ts">
import { axios } from '@/api/axios'
import PageContainer from '@/components/PageContainer.vue'
import type { PageContainerProps } from '@/types/page'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'

const route = useRoute('/users/[id]/edit/input')

const page: PageContainerProps = {
  title: 'ユーザー編集 - 入力',
  breadcrumbs: [
    { title: 'ユーザー一覧', href: '/users/list' },
    { title: 'ユーザー詳細', href: `/users/${route.params.id}/details` },
    { title: 'ユーザー編集', disabled: false },
  ],
}

const { isPending, isError, data } = useQuery({
  queryKey: ['users/:id'],
  // queryFn: () => Promise.resolve(5),
  queryFn: () => axios.get(`users/${route.params.id}`).then((res) => res.data),
})
</script>
<template>
  <PageContainer v-bind="page">
    <template v-if="isPending">
      <v-progress-circular color="secondary" indeterminate></v-progress-circular>
    </template>
    <span v-else-if="isError">取得に失敗しました</span>
    <template v-else>
      <div>{{ data.name }}</div>
      <v-btn :to="`/users/${route.params.id}/edit/confirm`" variant="outlined" color="secondary"
        >確認に進む</v-btn
      >
    </template>
  </PageContainer>
</template>

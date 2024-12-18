<script setup lang="ts">
import { Api } from '@/api/axios'
import type { User } from '@/api/type/users'
import PageContainer from '@/components/PageContainer.vue'
import UserDetails from '@/components/UserDetails.vue'
import type { AppError } from '@/types/api'
import type { PageContainerProps } from '@/types/page'
import { useQuery } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'

const page: PageContainerProps = {
  title: 'ユーザー詳細',
  breadcrumbs: [
    { title: 'ユーザー一覧', href: '/users/list' },
    { title: 'ユーザー詳細', disabled: false },
  ],
}

const route = useRoute('/users/[id]/details')
const router = useRouter()
const { isFetching, isError, data, error, refetch } = useQuery<User, AppError>({
  queryKey: ['users/:id'],
  queryFn: () => Api.get(`users/${route.params.id}`).then((res) => res.data),
})
</script>
<template>
  <PageContainer v-bind="page">
    <div v-if="isFetching">
      <v-row class="mb-4" justify="end">
        <v-col cols="12">
          <div class="mb-2">取得しています...</div>
          <v-progress-linear color="secondary" indeterminate></v-progress-linear>
        </v-col>
      </v-row>

      <v-row class="mb-4" justify="end">
        <v-skeleton-loader type="button"></v-skeleton-loader>
      </v-row>
      <v-card class="pa-4">
        <v-skeleton-loader type="article@4"></v-skeleton-loader>
      </v-card>
    </div>

    <div v-if="isError">
      <template v-if="error?.response?.status === 404">
        <div class="mb-2">ユーザーが見つかりません。</div>
        <div>
          <v-btn color="secondary" @click="router.push('/users')">一覧に戻る</v-btn>
        </div>
      </template>

      <template v-else>
        <div class="mb-2">取得に失敗しました。</div>
        <div>
          <v-btn color="secondary" @click="refetch">再取得</v-btn>
        </div>
      </template>
    </div>

    <template v-if="data">
      <v-row class="mb-4" justify="end">
        <v-col cols="1">
          <v-btn :to="`/users/${data.id}/edit`" variant="outlined" color="secondary"> 編集 </v-btn>
        </v-col>
      </v-row>

      <UserDetails :data="data" class="pa-4" />
    </template>
  </PageContainer>
</template>

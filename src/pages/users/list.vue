<script setup lang="ts">
import { Api } from '@/api/axios'
import type { PaginationResponse } from '@/api/type/pagination'
import type { User } from '@/api/type/users'
import PageContainer from '@/components/PageContainer.vue'
import type { PageContainerProps } from '@/types/page'
import { keepPreviousData, useQuery } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const page: PageContainerProps = {
  title: 'ユーザー一覧',
  breadcrumbs: [{ title: 'ユーザー一覧', disabled: false }],
}

const router = useRouter()

const currentPage = ref<number>(1)
const { isLoading, isFetching, isError, data, isPlaceholderData, refetch } = useQuery<
  PaginationResponse<User>,
  AxiosError<{ error: string }>
>({
  queryKey: ['users', currentPage],
  queryFn: () => Api.get(`users?page=${currentPage.value}`).then((res) => res.data),
  placeholderData: keepPreviousData,
})
</script>
<template>
  <PageContainer v-bind="page">
    <v-row class="mb-4" justify="end">
      <transition name="fade">
        <template v-if="!isLoading && isFetching">
          <v-col cols="11">
            <div class="mb-2">取得しています...</div>
            <v-progress-linear color="secondary" indeterminate></v-progress-linear>
          </v-col>
        </template>
      </transition>

      <v-col cols="1">
        <v-btn color="secondary" variant="outlined" @click="router.push('/users/new')"
          >新規登録</v-btn
        >
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-left col-name">名前</th>
              <th class="text-left col-email">メールアドレス</th>
              <th class="col-action"></th>
            </tr>
          </thead>

          <template v-if="isError">
            <tbody>
              <tr>
                <td colspan="3" class="pa-3">
                  <div class="mb-2">取得に失敗しました。</div>
                  <div>
                    <v-btn color="secondary" @click="refetch">再取得</v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>

          <template v-else-if="data">
            <tbody>
              <tr v-for="item in data.records" :key="item.id">
                <td class="col-name">
                  <RouterLink :to="`/users/${item.id}/details`">{{ item.name }}</RouterLink>
                </td>
                <td class="col-email">{{ item.email }}</td>
                <td class="col-action">
                  <v-btn
                    color="secondary"
                    variant="outlined"
                    size="small"
                    @click="router.push(`/users/${item.id}/edit`)"
                    >編集</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>

          <template v-else>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <td class="col-naem">
                  <v-skeleton-loader type="list-item" loading-text="名前"></v-skeleton-loader>
                </td>
                <td class="col-email">
                  <v-skeleton-loader type="list-item"></v-skeleton-loader>
                </td>
                <td class="col-action">
                  <v-skeleton-loader type="list-item"></v-skeleton-loader>
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-col>
    </v-row>

    <template v-if="data">
      <v-row justify="end">
        <v-pagination
          :length="data.pagination.pages"
          :disabled="isPlaceholderData"
          v-model="currentPage"
        ></v-pagination>
      </v-row>
    </template>
  </PageContainer>
</template>
<style scoped>
/* フェイドイン・フェイドアウトのアニメーション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.col-name {
  width: 30%;
}

.col-email {
  width: 60%;
}

.col-action {
  width: 10%;
}
</style>

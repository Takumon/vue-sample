<script setup lang="ts">
import type { PageContainerProps } from '@/types/page'
import PageContainer from '@/components/PageContainer.vue'
import { usePageStore, type FormValue } from '../new.helper'
import UserDetails from '@/components/UserDetails.vue'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast'
import { useMutation } from '@tanstack/vue-query'
import type { AxiosResponse } from 'axios'
import type { User } from '@/api/type/users'
import type { AppError, ValidationError } from '@/types/api'
import { Api } from '@/api/axios'

const page: PageContainerProps = {
  title: 'ユーザー新規登録 - 確認',
  breadcrumbs: [
    { title: 'ユーザー一覧', href: '/users/list' },
    { title: '新規登録', disabled: false },
  ],
}

const router = useRouter()
const toastStore = useToastStore()
const pageStore = usePageStore()
const mutation = useMutation<AxiosResponse<User>, AppError, FormValue>({
  mutationFn: (formValue) => Api.post('/users', formValue),
  onError: (error) => {
    console.log(error)
    if (!error.response) {
      return
    }

    if (error.response.status === 400) {
      pageStore.setError(error.response.data.error as ValidationError)
      router.push(`/users/new/input`)
      return
    }

    toastStore.showSuccess(error.message)
  },
  onSuccess: (res) => {
    toastStore.showSuccess('ユーザーを登録しました')
    router.push(`/users/${res.data.id}/details`)
  },
})

const submit = () => {
  mutation.mutate(pageStore.formValue.value)
}
</script>
<template>
  <PageContainer v-bind="page">
    <div class="mb-4">
      <v-alert color="info" variant="outlined" icon="mdi-information">
        以下内容で登録しますか。
      </v-alert>
    </div>
    <div class="mb-4">
      <UserDetails :data="pageStore.formValue.value" class="pa-4" />
    </div>
    <v-row justify="end">
      <v-col cols="1">
        <v-btn
          color="secondary"
          variant="outlined"
          size="large"
          @click="router.push('/users/new/input')"
          >戻る</v-btn
        >
      </v-col>
      <v-col cols="10"></v-col>
      <v-col cols="1">
        <v-btn
          type="submit"
          color="primary"
          size="large"
          :loading="mutation.isPending.value"
          @click="submit"
          >登録</v-btn
        >
      </v-col>
    </v-row>
  </PageContainer>
</template>

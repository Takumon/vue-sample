<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { PageContainerProps } from '@/types/page'
import PageContainer from '@/components/PageContainer.vue'
import { usePageStore, type FormValue } from '../new.helper'
import { setErrors } from '@formkit/vue'
import { onMounted } from 'vue'

const page: PageContainerProps = {
  title: 'ユーザー新規登録 - 入力',
  breadcrumbs: [
    { title: 'ユーザー一覧', href: '/users/list' },
    { title: '新規登録', disabled: false },
  ],
}

const router = useRouter()

const pageStore = usePageStore()
const create = async (formValue: FormValue) => {
  pageStore.setFormValue(formValue)
  router.push('/users/new/confirm')
}

onMounted(() => {
  if (pageStore.error.value) {
    setErrors('user-create-form', {}, { ...pageStore.error.value })
    pageStore.clearError()
  }
})
</script>
<template>
  <PageContainer v-bind="page">
    <FormKit
      id="user-create-form"
      type="form"
      @submit="create"
      :actions="false"
      :value="pageStore.formValue.value"
      #default="{ value }"
    >
      <FormKit
        label="氏名"
        type="text"
        name="name"
        id="name"
        :help="`${(value as FormValue).name.length}/80`"
        placeholder="福岡太郎"
        validation="required|length:1,80"
        full-width
        v-focus
      />
      <FormKit
        label="メールアドレス"
        type="email"
        name="email"
        id="email"
        placeholder="sample@gmail.com"
        validation="required|email"
      />
      <FormKit
        label="性別"
        type="radio"
        name="gender"
        id="gender"
        :options="[
          { value: 1, label: '男性' },
          { value: 2, label: '女性' },
        ]"
        validation="required"
      />
      <FormKit
        label="誕生日"
        type="date"
        name="birthday"
        id="birthday"
        :validation="`required|date|date_after_or_equal:1900-01-01|date_before_or_equal:${$dayjs().format('YYYY M-DD')}`"
        placeholder="1990-01-01"
      />
      <FormKit
        label="自己紹介"
        type="textarea"
        name="bio"
        id="bio"
        :help="`${(value as FormValue).bio.length}/500`"
        placeholder="簡単な自己紹介"
        validation="length:1,500"
      >
        <template #label="{ label }">
          <label class="formkit-label">
            {{ label }} <span style="color: gray; font-size: 0.9em">(任意)</span>
          </label>
        </template>
      </FormKit>

      <FormKit
        label="数値下限"
        type="number"
        name="amountMin"
        id="amountMin"
        placeholder="1000"
        validation="required"
      />

      <FormKit
        label="数値上限"
        type="number"
        name="amountMax"
        id="amountMax"
        placeholder="10000"
        validation="required|greaterOrEqual:amountMin"
      />

      <v-btn type="submit" color="primary" size="large">確認に進む</v-btn>
    </FormKit>
  </PageContainer>
</template>

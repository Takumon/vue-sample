<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useProvidePageStore } from './new.helper'

// 親にアクセスしてきた時に新規登録画面にリダイレクトする
const router = useRouter()
const route = useRoute()
if (route.path === '/users/new') {
  router.push('/users/new/input')
}

useProvidePageStore()
</script>
<template>
  <router-view />
</template>

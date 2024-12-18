<script setup lang="ts">
import type { FormValue } from '@/pages/users/new.helper'

defineProps<{
  data: FormValue & { createdAt?: string; updatedAt?: string }
}>()
</script>
<template>
  <v-card>
    <v-list>
      <v-list-item>
        <v-list-item-title>名前</v-list-item-title>
        <v-list-item-subtitle>{{ data.name }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>メールアドレス</v-list-item-title>
        <v-list-item-subtitle>{{ data.email }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>誕生日</v-list-item-title>
        <v-list-item-subtitle v-format-date="data.birthday"></v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>性別</v-list-item-title>
        <v-list-item-subtitle v-format-gender="data.gender"></v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>自己紹介</v-list-item-title>
        <v-list-item-subtitle>{{ data.bio }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>最小金額</v-list-item-title>
        <v-list-item-subtitle v-format-currency="data.amountMin"></v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>最大金額</v-list-item-title>
        <v-list-item-subtitle v-format-currency="data.amountMax"></v-list-item-subtitle>
      </v-list-item>
      <v-list-item v-if="data.createdAt">
        <v-list-item-title>作成日</v-list-item-title>
        <v-list-item-subtitle v-format-datetime="data.createdAt"></v-list-item-subtitle>
      </v-list-item>
      <v-list-item v-if="data.updatedAt">
        <v-list-item-title>更新日</v-list-item-title>
        <v-list-item-subtitle v-format-datetime="data.updatedAt"></v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

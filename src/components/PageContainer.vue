<script setup lang="ts">
import type { PageContainerProps } from '@/types/page'

const props = defineProps<PageContainerProps>()
</script>
<template>
  <v-container class="ma-8">
    <v-row class="mb-2">
      <v-col>
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:prepend>/</template>
        </v-breadcrumbs>
      </v-col>
    </v-row>

    <v-row class="mb-16">
      <v-col>
        <h3 class="text-h3 text-center">{{ props.title }}</h3>
      </v-col>
    </v-row>

    <slot></slot>
  </v-container>
</template>

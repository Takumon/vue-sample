<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toast from '@/components/Toast.vue'
import { useLayoutStore } from './stores/layout'

const layout = useLayoutStore()
</script>

<template>
  <v-layout>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="() => layout.toggleDrawer()"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Vue Sample App</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="layout.isShowDrawer" permanent>
      <v-list density="compact" nav>
        <v-list-item class="link-list" to="/" activeClass="link-active"> ホーム </v-list-item>
        <v-list-item class="link-list" to="/users" activeClass="link-active">ユーザー</v-list-item>
        <v-list-item class="link-list" to="/about" activeClass="link-active">About</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="d-flex align-center justify-center">
      <Toast />
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped>
.container {
  height: 100vh;
}

.link-list.isActive {
  background-color: var(--color-background-mute);
}
</style>

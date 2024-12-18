import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(), // vueより前に定義（参考：https://github.com/posva/unplugin-vue-router?tab=readme-ov-file#install）
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    Vuetify(), // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

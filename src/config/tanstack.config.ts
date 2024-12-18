import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import type { App } from 'vue'

const options: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 10, // 10sec
      },
    },
  },
}

export function useTanstackQuery(app: App<Element>) {
  app.use(VueQueryPlugin, options)
}

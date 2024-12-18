import { createPinia } from 'pinia'
import type { App } from 'vue'

export function usePinia(app: App<Element>) {
  app.use(createPinia())
}

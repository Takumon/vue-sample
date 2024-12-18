import type { App } from 'vue'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export function useVuetify(app: App<Element>) {
  app.use(
    createVuetify({
      theme: {
        defaultTheme: 'light',
      },
    }),
  )
}

import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'
import { useFormkit } from './config/formkit.config'
import { useVuetify } from './config/vuetify.config'
import { usePinia } from './config/pinia.config'
import { useDayjs } from './config/dayjs.config'
import { useTanstackQuery } from './config/tanstack.config'
import { useDirectives } from './config/directive.config.'

const app = createApp(App)

usePinia(app)
app.use(router)
useFormkit(app)
useVuetify(app)
useDayjs(app)
useTanstackQuery(app)
useDirectives(app)

app.mount('#app')

import type { App } from 'vue'
import { vFormatCurrency } from '@/directives/v-currency'
import vFormatDateTime from '@/directives/v-format-datetime'
import vFromatDate from '@/directives/v-format-date'
import vFormatGender from '@/directives/v-format-gender'
import vFocus from '@/directives/v-focus'

export function useDirectives(app: App<Element>) {
  app.directive('format-currency', vFormatCurrency)
  app.directive('format-datetime', vFormatDateTime)
  app.directive('format-date', vFromatDate)
  app.directive('format-gender', vFormatGender)
  app.directive('focus', vFocus)
}

import type { App } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

export const dayjsOutsideSFC = dayjs
export function useDayjs(app: App<Element>) {
  app.config.globalProperties.$dayjs = dayjs
}

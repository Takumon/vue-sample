import type { Directive } from 'vue'
import dayjs from 'dayjs'

const vFormatDateTime: Directive = {
  mounted(el, binding) {
    el.textContent = formatDateTime(binding.value)
  },
  updated(el, binding) {
    el.textContent = formatDateTime(binding.value)
  },
}

const formatDateTime = (value: string): string => {
  return dayjs(value).format('YYYY年MM月DD日 HH時mm分')
}

export default vFormatDateTime

import type { Directive } from 'vue'
import dayjs from 'dayjs'

const vFromatDate: Directive = {
  mounted(el, binding) {
    el.textContent = formatDate(binding.value)
  },
  updated(el, binding) {
    el.textContent = formatDate(binding.value)
  },
}

const formatDate = (value: string): string => {
  return dayjs(value).format('YYYY年MM月DD日')
}

export default vFromatDate

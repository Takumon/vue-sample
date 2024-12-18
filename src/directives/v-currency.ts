// export const formatCurrency = (value: number): string => {
//   return new Intl.NumberFormat('ja-JP').format(value) + ' 円'
// }

import type { Directive } from 'vue'

export const vFormatCurrency: Directive = {
  mounted(el, binding) {
    el.textContent = formatCurrency(binding.value)
  },
  updated(el, binding) {
    el.textContent = formatCurrency(binding.value)
  },
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('ja-JP').format(value) + ' 円'
}

import type { Directive } from 'vue'
import { toGender } from '@/constants/codes'

const vFormatGender: Directive = {
  mounted(el, binding) {
    el.textContent = toGender(binding.value)
  },
  updated(el, binding) {
    el.textContent = toGender(binding.value)
  },
}

export default vFormatGender

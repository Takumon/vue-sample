import type { Directive } from 'vue'

const vFocus: Directive = {
  mounted(el) {
    const target = el.tagName === 'INPUT' ? el : el.querySelector('input') // FormKit用にinput要素を探す
    if (!target) return

    target.focus()
  },
}

export default vFocus

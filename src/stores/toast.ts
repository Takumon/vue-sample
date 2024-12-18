import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export type ToastMessage = {
  id: string
  text: string
  type: 'success' | 'error' | 'warning' | 'info'
  showCloseButton: boolean
  timeout: number | null
}
type ToastState = { messages: ToastMessage[] }
type Arg = ToastMessage['text']
const FIVE_SECONDS = 5 * 1000
export const useToastStore = defineStore('toast', {
  state: (): ToastState => {
    return { messages: [] as ToastMessage[] }
  },
  getters: {
    isNotEmpty: (state) => {
      return state.messages.length > 0
    },
    isLast: (state) => (id: ToastMessage['id']) => {
      return state.messages[state.messages.length - 1].id === id
    },
  },
  actions: {
    remove(id: ToastMessage['id']) {
      this.messages = this.messages.filter((item) => item.id !== id)
    },
    showSuccess(text: Arg) {
      this._add({ text, type: 'success', showCloseButton: false, timeout: FIVE_SECONDS })
    },
    showError(text: Arg) {
      this._add({ text, type: 'error', showCloseButton: true, timeout: null })
    },
    showWarning(text: Arg) {
      this._add({ text, type: 'warning', showCloseButton: true, timeout: null })
    },
    showInfo(text: Arg) {
      this._add({ text, type: 'info', showCloseButton: false, timeout: FIVE_SECONDS })
    },
    unset() {
      this.$reset()
    },
    _add(message: Omit<ToastMessage, 'id'>) {
      this.messages.push({
        ...message,
        id: uuidv4(),
      })
    },
  },
})

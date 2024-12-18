import { defineStore } from 'pinia'

const STORAGE_KEY_PREFIX = 'VUE_SAMPLE_APP__'
const STORAGE_KEYS = {
  IS_SHOW_DRAWER: STORAGE_KEY_PREFIX + 'IS_SHOW_DRAWER',
}

/**
 * 画面全体の状態を管理する
 */
export const useLayoutStore = defineStore('layout', {
  state: () => {
    const isShowDrawer = localStorage.getItem(STORAGE_KEYS.IS_SHOW_DRAWER) === 'true'
    localStorage.setItem(STORAGE_KEYS.IS_SHOW_DRAWER, isShowDrawer.toString())

    return { isShowDrawer }
  },
  actions: {
    toggleDrawer() {
      this.isShowDrawer = !this.isShowDrawer
      localStorage.setItem(STORAGE_KEYS.IS_SHOW_DRAWER, this.isShowDrawer.toString())
    },
  },
})

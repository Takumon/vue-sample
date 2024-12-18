import type { ValidationError } from '@/types/api'
import { inject, provide, ref, type InjectionKey, type Ref } from 'vue'

export type FormValue = {
  name: string
  email: string
  birthday: string
  gender: number
  bio: string
  amountMin: number
  amountMax: number
}

const defaultFormValue: FormValue = {
  name: '',
  email: '',
  gender: 1,
  birthday: '1990-01-01',
  bio: '',
  amountMin: 0,
  amountMax: 0,
}

export const usersNewKey = Symbol() as InjectionKey<{
  formValue: Ref<FormValue>
  error: Ref<ValidationError>
  setFormValue: (formValude: FormValue) => void
  setError: (error: ValidationError) => void
  clearError: () => void
}>

export const useProvidePageStore = () => {
  const formValue = ref(defaultFormValue)
  const error = ref({} as ValidationError)
  function setFormValue(value: FormValue) {
    console.log('setFormValue', value)
    formValue.value = value
  }
  function setError(value: ValidationError) {
    error.value = value
  }
  function clearError() {
    error.value = {} as ValidationError
  }

  provide(usersNewKey, {
    formValue,
    error,
    setFormValue,
    setError,
    clearError,
  })
}

export const usePageStore = () => inject(usersNewKey)!

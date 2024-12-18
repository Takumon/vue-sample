import type { AxiosError } from 'axios'

type GeneralErrorData = {
  error: string
}

type AppGeneralError = AxiosError<GeneralErrorData>

type ValidationErrorData = {
  error: ValidationError
}

export type ValidationError = Record<string, string[]>

type AppValidationError = AxiosError<ValidationErrorData>

export type AppError = AppGeneralError | AppValidationError

import { ChangeEvent } from 'react'

export enum CustomInputTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
}

export interface CustomInputProps {
  label?: string
  name?: string
  placeholder?: string
  type: CustomInputTypes
  value?: string | number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  readOnly?: boolean
  className?: string
  errorMessage?: string
  required?: boolean
}

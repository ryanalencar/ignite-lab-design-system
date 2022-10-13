import { ReactNode } from "react"
import { clsx } from 'clsx'

export interface ITextInputProps {
}

export function TextInput({ }: ITextInputProps) {
  const textInputClassName = clsx('')

  return <input className={textInputClassName} />
}
import { ReactNode } from "react"
import { clsx } from 'clsx'

export interface IButtonProps {
  children: ReactNode
}

export function Button({ children }: IButtonProps) {
  const buttonClassName = clsx(
    'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-gray-100'
  )

  return <button className={buttonClassName}>
    {children}
  </button>
}
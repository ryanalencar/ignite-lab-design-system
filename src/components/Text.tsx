import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ITextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Text({ size = 'md', children, asChild }: ITextProps) {
  const Comp = asChild ? Slot : 'span'

  const textClassName = clsx('text-gray-100', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg',
  })

  return (
    <Comp className={textClassName}>{children}</Comp>
  )
}

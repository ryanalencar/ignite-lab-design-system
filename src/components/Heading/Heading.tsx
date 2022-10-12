import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface IHeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Heading({ size = 'md', children, asChild }: IHeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  const headingClassName = clsx('text-gray-100 font-bold', {
    'text-lg': size === 'sm',
    'text-xl': size === 'md',
    'text-2xl': size === 'lg',
  })

  return (
    <Comp className={headingClassName}>{children}</Comp>
  )
}

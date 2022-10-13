import { ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ITextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Text({ size = 'md', children, asChild, className }: ITextProps) {
  const Comp = asChild ? Slot : 'span';

  const textClassName = clsx('text-gray-100', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg',
  }, className);

  return (
    <Comp className={textClassName}>{children}</Comp>
  );
}

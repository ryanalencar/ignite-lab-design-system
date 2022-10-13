import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, type = 'button', className, ...props }: IButtonProps) {
  return (
    <button
      type={type}
      className={clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-gray-100', className)}
      {...props}
    >
      {children}
    </button>
  );
}

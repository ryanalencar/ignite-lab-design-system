import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, type = 'button', ...props }: IButtonProps) {
  return (
    <button
      type={type}
      className="py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-gray-100"
      {...props}
    >
      {children}
    </button>
  );
}

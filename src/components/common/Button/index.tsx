'use client'
import { cn } from '@/lib/core'

export type ButtonProps = {
  children: React.ReactNode
  type: 'default' | 'gradient' | 'disabled' | 'black' | 'light'
  width?: number
  isFullWidth?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  children,
  type,
  width,
  isFullWidth = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        `py-4 px-6 text-onSurface-300 rounded-lg w-fit font-medium leading-6`,
        {
          'bg-gray-800 hover:bg-gray-700': type === 'default',
          'bg-btn-gradient hover:bg-btn-gradient-hover text-background':
            type === 'gradient',
          'bg-background': type === 'black',
          'bg-gray-800 text-onSurface-100 cursor-default': type === 'disabled',
          'bg-gray-600 hover:bg-gray-500': type === 'light',
          'w-full': isFullWidth,
        },
      )}
      style={{ width: width && `${width}px` }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

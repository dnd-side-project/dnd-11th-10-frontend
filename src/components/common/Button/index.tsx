'use client'
import { cn } from '@/lib/core'

export type ButtonProps = {
  children: React.ReactNode
  type: 'default' | 'gradient' | 'black' | 'disabled' | 'light' | 'white'
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
          'text-onSurface-200 bg-background hover:bg-gray-800':
            type === 'black',
          'bg-gray-800 text-onSurface-100': type === 'disabled',
          'bg-gray-600 hover:bg-gray-500': type === 'light',
          'bg-white text-black': type === 'white',
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

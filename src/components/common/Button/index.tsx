'use client'
import { cn } from '@/lib/core'

type ButtonProps = {
  children: React.ReactNode
  type: 'default' | 'gradient' | 'black' | 'disabled' | 'light'
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
      className={cn(`py-4 text-onSurface-300 text-sub2 rounded-lg`, {
        'bg-gray-800 hover:bg-gray-700': type === 'default',
        'bg-btn-gradient hover:bg-btn-gradient-hover': type === 'gradient',
        'bg-background': type === 'black',
        ' bg-gray-800 text-onSurface-100': type === 'disabled',
        'bg-gray-600 hover:bg-gray-500': type === 'light',
        'w-full': isFullWidth,
      })}
      style={{ width: width && `${width}px` }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

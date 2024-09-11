import { cn } from '@/lib/core'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        'resize-none w-full flex items-center justify-center py-4 px-4 rounded-lg outline outline-[0.5px] outline-primary-400 focus:outline-[1.5px] ',
        className,
      )}
      onChange={props.onChange}
    />
  )
})

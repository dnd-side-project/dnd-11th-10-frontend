import { cn } from '@/lib/core'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

export default forwardRef<HTMLTextAreaElement, InputProps>(function Textarea(
  { className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      {...props}
      className={cn(
        'resize-none w-full flex items-center justify-center py-4 px-4 rounded-lg outline outline-[0.5px] outline-primary-400 bg-gray-700 placeholder:text-onSurface-200 placeholder:leading-6 placeholder:text-body3 focus:outline-[1.5px] ',
        className,
      )}
      onChange={props.onChange}
      style={{ height: props.height }}
    />
  )
})

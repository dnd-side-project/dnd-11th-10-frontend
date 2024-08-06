import { cn } from '@/lib/core'

export type TagProps = {
  text: string
  color: string
}

export default function Tag({ text, color }: TagProps) {
  return (
    <span className={cn('w-fit py-1 px-[10px] rounded-[4px] text-xs', color)}>
      {text}
    </span>
  )
}

import { cn } from '@/lib/core'

export type CategoryProps = {
  category: '비즈니스' | '디자인' | '개발'
}

const categoryColor = {
  비즈니스: 'primary',
  디자인: 'designPurple',
  개발: 'devBlue',
}

export default function CategoryTag({ category }: CategoryProps) {
  return (
    <label
      className={cn(
        'w-fit py-1 px-[10px] rounded-[4px] text-xs',
        `bg-${categoryColor[category]}-0`,
        `text-${categoryColor[category]}-50`,
      )}
    >
      {category} 용어
    </label>
  )
}

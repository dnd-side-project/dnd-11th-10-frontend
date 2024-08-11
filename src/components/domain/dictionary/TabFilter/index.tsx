'use client'
import { cn } from '@/lib/core'
import { FilterType } from '@/types/word'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

type TabFilterProps = {
  filter: FilterType
  isSelected: boolean
}

export default function TabFilter({
  filter = '전체',
  isSelected,
}: TabFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(key, value)
      return params.toString()
    },
    [searchParams],
  )

  const handleSelect = () => {
    router.push(pathname + '?' + createQueryString('category', filter))
  }

  return (
    <button
      className={cn('w-fit px-3 py-2 rounded-full text-sm leading-[18px]', {
        'bg-primary-400 text-background font-medium': isSelected,
        'bg-none text-onSurface-300 font-normal outline outline-outline':
          !isSelected,
      })}
      onClick={handleSelect}
    >
      {filter}
    </button>
  )
}

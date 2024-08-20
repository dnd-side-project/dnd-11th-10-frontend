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
    router.replace(pathname + '?' + createQueryString('category', filter))
  }

  return (
    <button
      className={cn('w-fit px-3 py-[7px] rounded-full ', {
        'bg-primary-400 text-background': isSelected,
        'bg-none text-onSurface-300 outline outline-outline': !isSelected,
      })}
      onClick={handleSelect}
    >
      <p className={cn({ 'text-sub3': isSelected, 'text-body3': !isSelected })}>
        {filter}
      </p>
    </button>
  )
}

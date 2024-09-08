'use client'
import BottomSheet from '@/components/common/BottomSheet'
import { FILTER_MENUS } from '@/constants/bottomSheet'
import Image from 'next/image'
import { cn } from '@/lib/core'
import useUIStore from '@/store/useUIStore'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import { WordSortType } from '@/types/word'
import { sortValue } from '@/hooks/word/useGetAllWords'

export type BottomSheetProps = {
  isOpen: boolean
  target: 'words' | 'comments'
  selected: string
}

export default function FilterBottomSheet({
  isOpen,
  target,
  selected,
}: BottomSheetProps) {
  const { closeBottomSheet } = useUIStore()
  const { replacePathname } = useCreateQueryString()
  const menuItems = FILTER_MENUS[target]

  if (!isOpen) return null

  const handleClick = (menu: WordSortType) => {
    replacePathname('sortBy', sortValue[menu] ?? 'name')
    closeBottomSheet()
  }

  return (
    <BottomSheet>
      {menuItems.map((menu, idx) => (
        <li
          key={idx}
          className={cn('flex justify-between py-6 list-none cursor-pointer', {
            'text-primary-400': selected === menu,
          })}
          onClick={() => handleClick(menu as WordSortType)}
        >
          <p className="text-sub1">{menu}</p>
          {selected === menu && (
            <Image
              alt="check"
              src={'/icons/check.svg'}
              width={24}
              height={24}
            />
          )}
        </li>
      ))}
    </BottomSheet>
  )
}

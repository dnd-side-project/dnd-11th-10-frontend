'use client'
import BottomSheet from '@/components/common/BottomSheet'
import { FILTER_MENUS } from '@/constants/bottomSheet'
import Image from 'next/image'
import { cn } from '@/lib/core'
import useUIStore from '@/store/useUIStore'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import { CommentSortType, WordSortType } from '@/types/word'
import { sortValue as wordSort } from '@/hooks/word/useGetAllWords'

export type BottomSheetProps = {
  isOpen: boolean
  target: 'words' | 'comments'
  selected: string
  setSortType?: any
}
export const CommentsortValue: any = {
  likeCount: '좋아요순',
  createdAt: '최신순',
}
export default function FilterBottomSheet({
  isOpen,
  target,
  selected,
  setSortType,
}: BottomSheetProps) {
  const { closeBottomSheet } = useUIStore()
  const { replacePathname } = useCreateQueryString()
  const menuItems = FILTER_MENUS[target]

  if (!isOpen) return null

  const handleClick = (menu: WordSortType | CommentSortType) => {
    if (target === 'words') {
      replacePathname('sortBy', wordSort[menu] ?? 'name')
    } else if (target === 'comments') {
      setSortType(menu ?? 'likeCount')
    }
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
          <p className="text-sub1">{CommentsortValue[menu]}</p>
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

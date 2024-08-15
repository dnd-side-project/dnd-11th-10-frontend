import BottomSheet from '@/components/common/BottomSheet'
import { FILTER_MENUS } from '@/constants/bottomSheet'
import Image from 'next/image'
import { cn } from '@/lib/core'
import useUIStore from '@/store/useUIStore'

export type BottomSheetProps = {
  isOpen: boolean
  target: 'words' | 'comments'
  selected: string
  setSelected: (menu: string) => void
}

export default function FilterBottomSheet({
  isOpen,
  target,
  selected,
  setSelected,
}: BottomSheetProps) {
  const { closeBottomSheet } = useUIStore()
  const menuItems = FILTER_MENUS[target]

  if (!isOpen) return null

  const handleClick = (menu: string) => {
    setSelected(menu)
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
          onClick={() => handleClick(menu)}
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

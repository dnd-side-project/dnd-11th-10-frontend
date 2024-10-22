import BottomSheet from '@/components/common/BottomSheet'
import { COMMENT_MENUS } from '@/constants/bottomSheet'
import useBottomSheetAction from '@/hooks/usetBottomSheetAction'

export type BottomSheetProps = {
  isOpen: boolean
  target: 'mine' | 'others'
  targetId: number
  wordId: number
}

export default function CommentBottomSheet({
  isOpen,
  target,
  targetId,
  wordId,
}: BottomSheetProps) {
  const actions = useBottomSheetAction(targetId, wordId)
  if (!isOpen) return null
  const menuItems = COMMENT_MENUS[target]
  return (
    <BottomSheet>
      {menuItems.map((menu, idx) => (
        <li
          key={idx}
          className="flex justify-between py-6 list-none cursor-pointer"
          onClick={() =>
            actions.find((action) => action.menu === menu)?.onClick(targetId)
          }
        >
          <p className="text-sub1">{menu}</p>
        </li>
      ))}
    </BottomSheet>
  )
}

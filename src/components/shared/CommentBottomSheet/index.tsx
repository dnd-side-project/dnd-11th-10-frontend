import BottomSheet from '@/components/common/BottomSheet'
import { COMMENT_MENUS } from '@/constants/bottomSheet'
import useBottomSheetAction from '@/hooks/usetBottomSheetAction'
import useUIStore from '@/store/useUIStore'

export type BottomSheetProps = {
  isOpen: boolean
  target: 'mine' | 'others'
  commentId: number
}

export default function CommentBottomSheet({
  isOpen,
  target,
  commentId,
}: BottomSheetProps) {
  const { closeBottomSheet } = useUIStore()
  const actions = useBottomSheetAction()
  if (!isOpen) return null
  const menuItems = COMMENT_MENUS[target]
  return (
    <BottomSheet onClose={closeBottomSheet}>
      {menuItems.map((menu, idx) => (
        <li
          key={idx}
          className="flex justify-between py-6 list-none cursor-pointer"
          onClick={() =>
            actions.find((action) => action.menu === menu)?.onClick(commentId)
          }
        >
          <p className="text-lg font-medium leading-6">{menu}</p>
        </li>
      ))}
    </BottomSheet>
  )
}

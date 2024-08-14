'use client'
import BottomSheet from '@/components/common/BottomSheet'
import { RADIOBTN_MENUS } from '@/constants/bottomSheet'
import useUIStore from '@/store/useUIStore'
import OneRadioBtn from './OneRadioBtn'

type BottomSheetProps = {
  isOpen: boolean
  type: 'experience' | 'company'
  value: number
  onChange: (id: number) => void
  onSubmit: () => void
}

export default function RadioBtnBottomSheet({
  isOpen,
  type,
  value,
  onChange,
  onSubmit,
}: BottomSheetProps) {
  const { closeBottomSheet } = useUIStore()
  const { title, options, btnText } = RADIOBTN_MENUS[type]
  const nickname = '상큼한화성009'

  if (!isOpen) return null
  return (
    <BottomSheet onClose={closeBottomSheet}>
      <p className="text-h2 mb-5">{`${nickname}님,` + `\n` + title}</p>
      <ul className="mb-5">
        {options.map(({ id, item }, idx) => (
          <OneRadioBtn
            key={id}
            id={id}
            isChecked={value === id}
            item={item}
            onChange={() => onChange(id)}
          />
        ))}
      </ul>
      <button onClick={onSubmit}>{btnText}</button>
    </BottomSheet>
  )
}

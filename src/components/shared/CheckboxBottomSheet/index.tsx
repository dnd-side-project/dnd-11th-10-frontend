import BottomSheet from '@/components/common/BottomSheet'
import { CHECKBOX_MENUS } from '@/constants/bottomSheet'
import useUIStore from '@/store/useUIStore'
import { useState } from 'react'
import OneCheckbox from './OneCheckbox'
import Button from '@/components/common/Button'

type BottomSheetProps = {
  isOpen: boolean
  type: 'report'
}

export default function CheckboxBottomSheet({
  isOpen,
  type,
}: BottomSheetProps) {
  const { closeBottomSheet } = useUIStore()
  const [checked, setChecked] = useState(new Set<number>())
  const { title, description, options, btnText } = CHECKBOX_MENUS[type]

  const handleCheck = (id: number) => {
    const newChecked = new Set(checked)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setChecked(newChecked)
  }

  const handleSubmit = () => {
    console.log('checked list 전송')
    setChecked(new Set()) // checked 리스트 초기화
    closeBottomSheet()
  }

  if (!isOpen) return null
  return (
    <BottomSheet>
      <p className="text-h2 mb-1">{title}</p>
      <p className="text-body2 text-onSurface-200 mb-5">{description}</p>
      <ul className="mb-5">
        {options.map(({ id, text }, idx) => (
          <OneCheckbox
            key={id}
            text={text}
            isChecked={checked.has(id)}
            onChange={() => handleCheck(id)}
          />
        ))}
      </ul>
      <Button
        type={checked.size ? 'gradient' : 'disabled'}
        isFullWidth
        onClick={handleSubmit}
      >
        {btnText}
      </Button>
    </BottomSheet>
  )
}

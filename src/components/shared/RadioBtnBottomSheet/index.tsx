import BottomSheet from '@/components/common/BottomSheet'
import { RADIOBTN_MENUS } from '@/constants/bottomSheet'
import OneRadioBtn from './OneRadioBtn'
import Button from '@/components/common/Button'

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
  const { title, options, btnText } = RADIOBTN_MENUS[type]
  const nickname = '상큼한화성009'

  if (!isOpen) return null
  return (
    <BottomSheet>
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
      <Button type="gradient" isFullWidth onClick={onSubmit}>
        {btnText}
      </Button>
    </BottomSheet>
  )
}

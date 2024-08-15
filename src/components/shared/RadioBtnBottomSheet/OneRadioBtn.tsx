import { cn } from '@/lib/core'

type OneRadioBtnProps = {
  id: number
  item: string
  isChecked: boolean
  onChange: () => void
}

export default function OneRadioBtn({
  id,
  item,
  isChecked,
  onChange,
}: OneRadioBtnProps) {
  return (
    <label className="text-sub2 flex items-center gap-3 py-4">
      <input
        type="radio"
        checked={isChecked}
        value={id}
        onChange={onChange}
        className={cn(
          'w-6 h-6 appearance-none border-[1.5px] border-gray-500 rounded-full',
          {
            'bg-primary-400 border-[6px] border-gray-700 shadow-[0_0_0_1.5px_rgb(117,240,208,1)]':
              isChecked,
          },
        )}
      />
      {item}
    </label>
  )
}

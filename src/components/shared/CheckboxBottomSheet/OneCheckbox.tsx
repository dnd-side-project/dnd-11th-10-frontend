import { cn } from '@/lib/core'
import React from 'react'

type CheckboxProps = {
  text: string
  isChecked: boolean
  onChange: () => void
}

export default function OneCheckbox({
  text,
  isChecked,
  onChange,
}: CheckboxProps) {
  return (
    <label className="flex gap-3 py-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className={cn(
          'appearance-none w-[22px] h-[22px] outline-gray-500 outline outline-[1.5px] p-1 rounded-[4px]',
          {
            "bg-primary-400 outline-0 bg-[url('/icons/check_black.svg')] bg-no-repeat bg-center":
              isChecked,
          },
        )}
      />
      {text}
    </label>
  )
}

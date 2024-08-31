import { cn } from '@/lib/core'
import React, { ChangeEventHandler } from 'react'

type CheckboxProps = {
  text: string
  isChecked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Checkbox({ text, isChecked, onChange }: CheckboxProps) {
  return (
    <label className="flex gap-3 py-4 items-center">
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

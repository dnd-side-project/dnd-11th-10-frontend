import React from 'react'
import { ProfileChip } from '@/types/profileChip'

export default function Chip({ id, name }: ProfileChip) {
  return (
    <div
      className="w-fit px-5 py-2 border-solid border-[1.5px] border-outline text-sub3 text-onSurface-300 rounded-[0.25rem] hover:cursor-pointer"
      key={id}
    >
      {name}
    </div>
  )
}

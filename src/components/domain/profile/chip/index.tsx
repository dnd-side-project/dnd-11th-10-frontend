import React, { useState } from 'react'
import { ProfileChip } from '@/types/profileChip'

export default function Chip({ id, type, name }: ProfileChip) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
    console.log(`${type}: ${name}`)
  }

  return (
    <div
      className={`w-fit px-5 py-2 rounded-[0.25rem] hover:cursor-pointer ${
        selected
          ? 'bg-primary-400 text-background'
          : 'border-solid border-[1.5px] border-outline text-onSurface-300'
      }`}
      key={id}
      onClick={handleClick}
    >
      {name}
    </div>
  )
}

import React, { useState } from 'react'
import Image from 'next/image'
import { JobGroup } from '@/types/profile'

export default function JobGroupCard({ id, name }: JobGroup) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  return (
    <div
      className={`flex p-4 bg-gray-800 rounded-2xl text-onSurface-300 ${
        selected &&
        'bg-primary-0 text-background border-solid border-[1.5px] border-primary-400'
      }`}
      onClick={handleClick}
    >
      <Image
        src={`/icons/job_group_0${id}.svg`}
        alt={`job_group_${id}.svg`}
        width={63}
        height={63}
      />
      <p className="p-6 text-h2">{name}</p>
    </div>
  )
}

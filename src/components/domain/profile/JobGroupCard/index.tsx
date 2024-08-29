import React from 'react'
import Image from 'next/image'
import { JobGroup } from '@/types/profile'

export default function JobGroupCard({ id, name }: JobGroup) {
  return (
    <div className="flex p-4 bg-gray-800 rounded-2xl text-onSurface-300">
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

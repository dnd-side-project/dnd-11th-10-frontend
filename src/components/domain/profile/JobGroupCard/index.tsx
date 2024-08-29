import React from 'react'
import { JobGroup } from '@/types/profile'
import Image from 'next/image'

export default function JobGroupCard({ id, name }: JobGroup) {
  return (
    <div>
      <Image
        src={`/icons/job_group_0${id}.svg`}
        alt={`job_group_${id}.svg`}
        width={63}
        height={63}
      />
      {name}
    </div>
  )
}

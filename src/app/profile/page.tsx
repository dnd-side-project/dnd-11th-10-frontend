'use client'

import Button from '@/components/common/Button'
import JobGroupCard from '@/components/domain/profile/JobGroupCard'
import { useState } from 'react'

function Profile() {
  const jobGroupData = ['개발자', '디자이너', '기타']

  const [isCategorySelect, setIsCategorySelect] = useState<boolean[]>(
    Array(jobGroupData.length).fill(false),
  )

  const handleClick = (idx: number) => {
    const newArr = [...isCategorySelect]

    if (newArr[idx]) {
      newArr[idx] = false
    } else {
      newArr.fill(false)
      newArr[idx] = true
    }
    setIsCategorySelect(newArr)
  }

  const isAnyCategorySelected = isCategorySelect.some((selected) => selected)

  return (
    <div className="px-4 flex flex-col justify-between h-full text-slate-100">
      <div>
        <p className="text-h1 text-onSurface-300">
          반가워요! <br />
          어떤 직군이신가요?
        </p>
        <div className="mt-4 gap-4">
          {jobGroupData.map((job, idx) => (
            <JobGroupCard
              key={idx}
              id={idx + 1}
              name={job}
              selected={isCategorySelect[idx]}
              onClick={() => handleClick(idx)}
            />
          ))}
        </div>
      </div>
      <Button
        isFullWidth
        type={isAnyCategorySelected ? 'gradient' : 'default'}
        disabled={!isAnyCategorySelected}
      >
        다음
      </Button>
    </div>
  )
}

export default Profile

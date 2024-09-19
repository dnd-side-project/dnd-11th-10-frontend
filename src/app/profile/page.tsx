'use client'

import Button from '@/components/common/Button'
import Chip from '@/components/domain/profile/Chip'
import JobGroupCard from '@/components/domain/profile/JobGroupCard'
import { useState } from 'react'

function Profile() {
  const [step, setStep] = useState<'직군' | '기업' | '경력'>('직군')
  const jobGroupData = ['개발자', '디자이너', '기타']
  const companyData = [
    '비공개',
    '대기업',
    '중견기업',
    '중소기업',
    '스타트업',
    '외국계',
  ]

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
    <div className="px-4 flex flex-col gap-[351] justify-between h-full text-slate-100">
      {step === '직군' && (
        <>
          <div className="mt-[90px] flex flex-col gap-[72px]">
            <p className="text-h1 text-onSurface-300">
              반가워요! <br />
              어떤 직군이신가요?
            </p>
            <div className="mt-4 flex flex-col gap-4">
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
            onClick={() => setStep('기업')}
            disabled={!isAnyCategorySelected}
          >
            다음
          </Button>
        </>
      )}
      {step === '기업' && (
        <>
          <div className="mt-[90px] flex flex-col gap-10">
            <p className="text-h1 text-onSurface-300">
              어느 기업에서 근무 중이신가요?
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {companyData.map((company, idx) => (
                <Chip id={idx} name={company} key={idx} />
              ))}
            </div>
          </div>

          <Button
            isFullWidth
            type={isAnyCategorySelected ? 'gradient' : 'default'}
            onClick={() => setStep('경력')}
            disabled={!isAnyCategorySelected}
          >
            다음
          </Button>
        </>
      )}
    </div>
  )
}

export default Profile

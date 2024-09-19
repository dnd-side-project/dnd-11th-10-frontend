'use client'

import { jobGroupData } from '@/constants/profileData'
import JobGroupCard from '../../JobGroupCard'
import Button from '@/components/common/Button'

interface JobGroupSelectionProps {
  profileData: {
    jobGroup: string | null
  }
  isAnyJobGroupSelected: boolean
  handleJobGroupClick: (idx: number) => void
  setStep: (step: '직군' | '기업 및 경력') => void
}

function JobGroup({
  profileData,
  isAnyJobGroupSelected,
  handleJobGroupClick,
  setStep,
}: JobGroupSelectionProps) {
  return (
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
              selected={profileData.jobGroup === job}
              onClick={() => handleJobGroupClick(idx)}
            />
          ))}
        </div>
      </div>
      <Button
        isFullWidth
        type={isAnyJobGroupSelected ? 'gradient' : 'disabled'}
        onClick={() => setStep('기업 및 경력')}
      >
        다음
      </Button>
    </>
  )
}

export default JobGroup

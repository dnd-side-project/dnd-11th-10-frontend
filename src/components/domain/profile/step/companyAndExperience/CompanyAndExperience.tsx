'use client'
import Chip from '../../Chip'
import Button from '@/components/common/Button'
import { companyData, experienceData } from '@/constants/profileData'

interface CompanyAndExperienceProps {
  profileData: {
    company: string | null
    experience: string | null
  }
  companySelected: boolean
  isAnyCompanySelected: boolean
  isAnyExperienceSelected: boolean
  handleCompanyClick: (idx: string) => void
  handleExperienceClick: (idx: string) => void
  setStep: (step: '직군' | '기업 및 경력') => void
  setCompanySelected: (select: boolean) => void
  handleSubmit: () => void
}

function CompanyAndExperience({
  profileData,
  handleCompanyClick,
  handleExperienceClick,
  companySelected,
  isAnyCompanySelected,
  isAnyExperienceSelected,
  setCompanySelected,
  handleSubmit,
}: CompanyAndExperienceProps) {
  return (
    <>
      <div className="mt-[90px] flex flex-col gap-10">
        <p className="text-h1 text-onSurface-300">
          어느 기업에서 근무 중이신가요?
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {companyData.map((company, idx) => (
            <Chip
              id={idx}
              name={company}
              selected={profileData.company === company}
              onClick={() => handleCompanyClick(company)}
              key={idx}
            />
          ))}
        </div>
      </div>

      {!companySelected && (
        <Button
          isFullWidth
          type={isAnyCompanySelected ? 'gradient' : 'disabled'}
          onClick={() => setCompanySelected(true)}
        >
          다음
        </Button>
      )}

      {companySelected && (
        <>
          <div className="mt-[40px] flex flex-col gap-10">
            <p className="text-h1 text-onSurface-300">
              현재 경력이 어떻게 되시나요?
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {experienceData.map((experience, idx) => (
                <Chip
                  id={idx}
                  name={experience}
                  selected={profileData.experience === experience}
                  onClick={() => handleExperienceClick(experience)}
                  key={idx}
                />
              ))}
            </div>
          </div>

          <Button
            isFullWidth
            type={isAnyExperienceSelected ? 'gradient' : 'disabled'}
            onClick={handleSubmit}
          >
            다음
          </Button>
        </>
      )}
    </>
  )
}

export default CompanyAndExperience

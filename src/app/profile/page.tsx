'use client'

import { JobGroup } from '@/components/domain/profile'
import { CompanyAndExperience } from '@/components/domain/profile'
import useProfile from '@/hooks/profile/useProfile'

function Profile() {
  const {
    step,
    setStep,
    profileData,
    companySelected,
    setCompanySelected,
    handleJobGroupClick,
    handleCompanyClick,
    handleExperienceClick,
    isAnyJobGroupSelected,
    isAnyCompanySelected,
    isAnyExperienceSelected,
    handleSubmit,
  } = useProfile()

  return (
    <div className="px-4 flex flex-col gap-[351] justify-between h-full text-slate-100">
      {step === '직군' && (
        <JobGroup
          profileData={profileData}
          isAnyJobGroupSelected={isAnyJobGroupSelected}
          handleJobGroupClick={handleJobGroupClick}
          setStep={setStep}
        />
      )}

      {step === '기업 및 경력' && (
        <CompanyAndExperience
          profileData={profileData}
          isAnyCompanySelected={isAnyCompanySelected}
          isAnyExperienceSelected={isAnyExperienceSelected}
          handleCompanyClick={handleCompanyClick}
          handleExperienceClick={handleExperienceClick}
          setStep={setStep}
          setCompanySelected={setCompanySelected}
          handleSubmit={handleSubmit}
          companySelected={companySelected}
        />
      )}
    </div>
  )
}

export default Profile

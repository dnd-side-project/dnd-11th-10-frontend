import { useState } from 'react'
import { jobGroupData } from '@/constants/profileData'

export const useProfile = () => {
  const [step, setStep] = useState<'직군' | '기업 및 경력'>('직군')
  const [profileData, setProfileData] = useState({
    jobGroup: null as string | null,
    company: null as string | null,
    experience: null as string | null,
  })

  const [companySelected, setCompanySelected] = useState<boolean>(false)

  const handleJobGroupClick = (idx: number) => {
    const selectedJobGroup = jobGroupData[idx]
    setProfileData((prev) => ({
      ...prev,
      jobGroup: prev.jobGroup === selectedJobGroup ? null : selectedJobGroup,
    }))
  }

  const handleCompanyClick = (name: string) => {
    setProfileData((prev) => ({
      ...prev,
      company: prev.company === name ? null : name,
    }))
  }

  const handleExperienceClick = (experience: string) => {
    setProfileData((prev) => ({
      ...prev,
      experience: prev.experience === experience ? null : experience,
    }))
  }

  const isAnyJobGroupSelected = profileData.jobGroup !== null
  const isAnyCompanySelected = profileData.company !== null
  const isAnyExperienceSelected = profileData.experience !== null

  const handleSubmit = () => {
    console.log('API 호출: ', profileData)
  }

  return {
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
  }
}

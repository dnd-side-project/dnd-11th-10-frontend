'use client'

import { useState } from 'react'
import { jobGroupData } from '@/constants/profileData'
import { post } from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { AxiosResponse } from 'axios'

function useProfile() {
  const router = useRouter()
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

  const handleSubmit = async () => {
    try {
      const response: AxiosResponse = await post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/profile`,
        profileData,
      )

      if (response.status === 204) {
        router.push('/skillcheck')
      }
    } catch (error) {
      console.error('프로필 제출 중 오류 발생:', error)
    }
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

export default useProfile

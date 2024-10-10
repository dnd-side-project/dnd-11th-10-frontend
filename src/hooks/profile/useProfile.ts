'use client'

import { useState } from 'react'
import { jobGroupData } from '@/constants/profileData'
import { post } from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { AxiosResponse } from 'axios'
import { ProfileData } from '@/types/profile'
import { useMutation } from '@tanstack/react-query'
import { postProfileData } from '@/api/profile'

function useProfile() {
  const router = useRouter()
  const [step, setStep] = useState<'직군' | '기업 및 경력'>('직군')
  const [profileData, setProfileData] = useState<ProfileData>({
    jobGroup: null,
    company: null,
    experience: null,
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

  const profileMutation = useMutation({
    mutationFn: (profileData: ProfileData) => {
      return postProfileData(profileData)
    },
    onSuccess: () => {
      router.push('/skillcheck')
    },
    onError: (error) => {
      console.error('Error adding todo:', error)
    },
  })

  const handleSubmit = async () => {
    profileMutation.mutate(profileData)
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

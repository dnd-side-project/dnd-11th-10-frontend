import React from 'react'
import Button from '@/components/common/Button'
import Image from 'next/image'

interface Account {
  nickname: string
  profileImage: string
  careerInfo: {
    jobGroup: string
    company: string
    experience: string
  }
  quizInfo: {
    totalCategoryQuizCount: number
    designQuizCount: number
    businessQuizCount: number
    developQuizCount: number
  }
}

const accountData: Account = {
  nickname: '상큼한화성009',
  profileImage: '/images/profile.svg',
  careerInfo: {
    jobGroup: '개발자',
    company: '비공개',
    experience: '1년 차 미만',
  },
  quizInfo: {
    totalCategoryQuizCount: 0,
    designQuizCount: 0,
    businessQuizCount: 0,
    developQuizCount: 0,
  },
}

function MyPage() {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-5 bg-gray-800 px-4 py-6 rounded-2xl">
        <div className="flex gap-2">
          <Image
            src={accountData.profileImage}
            alt="profile.svg"
            width={40}
            height={40}
          />
          <div>
            <p className="text-body2 text-onSurface-300">
              {accountData.nickname}
            </p>
            <p className="flex text-onSurface-200">
              {accountData.careerInfo.jobGroup}
              <span className="px-1 py-3">
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none">
                  <circle cx="1" cy="1" r="1" fill="white" fill-opacity="0.6" />
                </svg>
              </span>
              {accountData.careerInfo.company}
              <span className="px-1 py-3">
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none">
                  <circle cx="1" cy="1" r="1" fill="white" fill-opacity="0.6" />
                </svg>
              </span>
              {accountData.careerInfo.experience}
            </p>
          </div>
        </div>
        <Button isFullWidth type={'light'}>
          프로필 편집하기
        </Button>
        <div></div>
      </div>
    </div>
  )
}

export default MyPage

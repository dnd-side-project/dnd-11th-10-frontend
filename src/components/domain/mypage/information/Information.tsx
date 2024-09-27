import Button from '@/components/common/Button'
import { accountData } from '@/constants/account'
import Image from 'next/image'
import React from 'react'

function Information() {
  return (
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
                <circle cx="1" cy="1" r="1" fill="white" fillOpacity="0.6" />
              </svg>
            </span>
            {accountData.careerInfo.company}
            <span className="px-1 py-3">
              <svg width="2" height="2" viewBox="0 0 2 2" fill="none">
                <circle cx="1" cy="1" r="1" fill="white" fillOpacity="0.6" />
              </svg>
            </span>
            {accountData.careerInfo.experience}
          </p>
        </div>
      </div>
      <Button isFullWidth type={'light'}>
        프로필 편집하기
      </Button>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex">
            <span className={'text-secondary-200'}>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            <p className="text-onSurface-300">전체</p>
          </div>
          <p>{accountData.quizInfo.totalCategoryQuizCount}회</p>
          <p>퀴즈 완료</p>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span className={'text-devBlue-200'}>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            <p className="text-onSurface-300">개발</p>
          </div>
          <p>{accountData.quizInfo.developQuizCount}회</p>
          <p>퀴즈 완료</p>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span className={'text-designPurple-200'}>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            <p className="text-onSurface-300">디자인</p>
          </div>
          <p>{accountData.quizInfo.designQuizCount}회</p>
          <p>퀴즈 완료</p>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span className={'text-primary-200'}>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            <p className="text-onSurface-300">비즈니스</p>
          </div>
          <p>{accountData.quizInfo.businessQuizCount}회</p>
          <p>퀴즈 완료</p>
        </div>
      </div>
    </div>
  )
}

export default Information

import Image from 'next/image'
import Button from '@/components/common/Button'
import { accountData } from '@/constants/account'
import { QuizStatus } from '../QuizStatus'

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
        <QuizStatus
          colorClass="text-secondary-200"
          label="전체"
          count={accountData.quizInfo.totalCategoryQuizCount}
        />
        <QuizStatus
          colorClass="text-devBlue-200"
          label="개발"
          count={accountData.quizInfo.developQuizCount}
        />
        <QuizStatus
          colorClass="text-designPurple-200"
          label="디자인"
          count={accountData.quizInfo.designQuizCount}
        />
        <QuizStatus
          colorClass="text-primary-200"
          label="비즈니스"
          count={accountData.quizInfo.businessQuizCount}
        />
      </div>
    </div>
  )
}

export default Information

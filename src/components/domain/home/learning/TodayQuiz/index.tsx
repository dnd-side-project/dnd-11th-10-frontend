'use client'
import Button from '@/components/common/Button'
import LoginBottomSheet from '@/components/shared/LoginBottomSheet'
import { useGetTodayParticipants } from '@/hooks/quiz/useGetTodayParticipants'
import { useAuthStore } from '@/store/useAuthStore'
import useUIStore from '@/store/useUIStore'
import { getTodayDate } from '@/utils/date'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function TodayQuiz() {
  const { participants } = useGetTodayParticipants()
  const { userId } = useAuthStore()
  const { bottomSheetType, openBottomSheet } = useUIStore()
  const router = useRouter()
  const [skipLogin, setSkipLogin] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === undefined) return
    setSkipLogin(localStorage.getItem('skipLogin'))
    if (!userId && skipLogin === 'false') {
      openBottomSheet('login')
    }
  }, [userId, openBottomSheet, skipLogin])

  const handleClick = () => {
    if (!userId) {
      openBottomSheet('login')
      return
    }
    router.push('/') // quiz url로 변경
  }
  return (
    <>
      <div className="w-full px-4 text-onSurface-300 ">
        <p className="text-h2 text-onSurface-300 mb-3">
          <span className="text-primary-400">{getTodayDate() + ' '}</span>
          용어 퀴즈💫
        </p>
        <div
          className="w-full flex justify-between p-5 rounded-2xl"
          style={{
            backgroundImage:
              'linear-gradient(120deg, #0FB -25.6%, #3D7DF3 31.25%, #6E32E6 86.98%)',
          }}
        >
          <div className="flex flex-col justify-between text-onSurface-300">
            <p className="text-h1 mb-2">용어 퀴즈</p>
            <p className="mb-5">
              오늘&nbsp;
              <span className="text-primary-100 text-h3">{participants}</span>
              명이 퀴즈에
              <br />
              참여했어요.
            </p>
            <Button type="black" width={36 * 4} onClick={handleClick}>
              퀴즈 풀러 가기
            </Button>
          </div>
          <Image
            alt="quiz_img"
            src={'/images/home_quiz.svg'}
            width={179}
            height={166}
          />
        </div>
      </div>
      <LoginBottomSheet isOpen={bottomSheetType === 'login'} type="loginBtn" />
    </>
  )
}

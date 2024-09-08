'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/common/Button'

export default function QuizStart() {
  const router = useRouter()
  return (
    <div className="px-4 flex flex-col justify-between h-full">
      <p className="text-center text-onSurface-300 text-xl">
        업무 소통 능력을 상승하러 가볼까요?
      </p>
      <Image
        src="/images/quiz_start.svg"
        alt="quiz_start.svg"
        width={430}
        height={380}
      />
      <Button
        type="gradient"
        isFullWidth
        onClick={() => router.push('/quiz/categorychoice')}
      >
        시작하기
      </Button>
    </div>
  )
}

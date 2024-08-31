'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
      <button
        className="px-6 w-full h-14 bg-gradient-to-r from-gradient-201 to-gradient-202 to-95% rounded-md text-background hover:opacity-80"
        onClick={() => router.push('/quiz/categorychoice')}
      >
        시작하기
      </button>
    </div>
  )
}

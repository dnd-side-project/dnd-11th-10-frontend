'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function QuizStart() {
  const router = useRouter()
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="text-center text-onSurface-300 text-xl mt-[90px]">
        <p>업무 소통 능력을 상승 시켜줄</p>
        <p>실무 용어 퀴즈를 진행하러 가볼까요?</p>
      </div>
      <div className="flex-grow bg-gray-800" />
      <button
        className="px-6 w-full h-14 bg-gradient-to-tr from-gradient-201 to-gradient-202 to-70% rounded-md text-onSurface-300"
        onClick={() => router.push('/quiz/typechoice')}
      >
        시작하기
      </button>
    </div>
  )
}

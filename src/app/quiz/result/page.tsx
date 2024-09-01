'use client'

import React from 'react'
import Image from 'next/image'

interface ResultData {
  id: number
  result: string
}

function QuizResult() {
  const correctAnswer = 0
  const resultData: ResultData[] = [
    {
      id: 0,
      result: '아직은 외계어 같은 용어들 👽',
    },
    {
      id: 1,
      result: '업무 소통계의 떠오르는 샛별 ✨',
    },
    {
      id: 2,
      result: '업무 소통 역량 로켓 상승 중 🚀',
    },
    {
      id: 3,
      result: '혜성처럼 나타난 업무 소통 능력자 ☄️',
    },
  ]
  return (
    <div className="px-4 flex flex-col items-center justify-between h-full">
      <Image
        src={`/images/quiz_result_01.svg`}
        alt={`quiz_result_01.svg`}
        width={180}
        height={180}
      />
      <p className="text-body1 text-onSurface-300">{resultData[0].result}</p>
      <div className="flex text-h1">
        <p className="text-primary-400">{correctAnswer}</p>
        <p className="text-onSurface-300">개 정답!</p>
      </div>
    </div>
  )
}

export default QuizResult

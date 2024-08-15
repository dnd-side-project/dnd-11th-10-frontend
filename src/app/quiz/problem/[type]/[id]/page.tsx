'use client'

import React, { useState } from 'react'
import { quizData } from '@/components/domain/quiz/data'
import CategoryTag from '@/components/shared/CategoryTag'

function Quiz() {
  const [problemIndex, setProblemIndex] = useState(0)
  const problem = quizData.problemInfo[problemIndex]

  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null)

  const handleClick = (optionWordId: number) => {
    setSelectedOptionId(optionWordId)
  }

  const handleNext = () => {
    console.log('다음 버튼')
  }

  if (!problem) {
    return <div>없는 문제입니다.</div>
  }

  return (
    <div className="mt-10">
      <div className="m-10">
        <div className="mx-[116px]">
          <CategoryTag category={problem.category} />
        </div>
        <div className="flex flex-wrap my-6 text-onSurface-300 text-xl text-center">
          아래 예문 속 ’{problem.name}’의 의미는 무엇일까요?
        </div>
      </div>

      <div className="my-[60px] mx-auto px-[calc(8px+12.427px)] py-6 w-[calc(363px+12.427px)] h-24 bg-gray-700 rounded-xl text-onSurface-300 text-[18px] text-center break-keep">
        <p>
          {'"'}
          {problem.question}
          {'"'}
        </p>
      </div>

      <ul>
        {problem.optionInfo.map((option) => (
          <li key={option.optionWordId} className="mb-3 text-onSurface-300">
            <div
              className={`p-5 bg-gray-800 rounded-xl text-center text-[1rem] ${
                selectedOptionId === option.optionWordId
                  ? 'bg-gray-700 border-[1px] border-primary-400'
                  : ''
              }`}
              onClick={() => handleClick(option.optionWordId)}
            >
              {option.meaning}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button className="mt-5 px-6 w-[116px] h-14 bg-outline rounded-md text-onSurface-300">
          이전
        </button>
        <button
          disabled={!selectedOptionId}
          className={`mt-5 px-6 w-[270px] h-14 rounded-md text-onSurface-300 ${
            selectedOptionId
              ? 'bg-gradient-to-br from-gradient-201 to-gradient-202 to-70% text-onSurface-100'
              : 'bg-outline text-onSurface-100'
          }`}
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default Quiz

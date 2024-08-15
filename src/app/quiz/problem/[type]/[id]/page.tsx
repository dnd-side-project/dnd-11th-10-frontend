'use client'

import React, { useState } from 'react'
import { quizData } from '@/components/domain/quiz/data'
import CategoryTag from '@/components/shared/CategoryTag'
import { useStore } from '@/lib/store'

function Quiz() {
  const [problemIndex, setProblemIndex] = useState(0)
  const problem = quizData.problemInfo[problemIndex]

  const { setCurrentProblem, setCurrentPersent } = useStore()

  // 클릭된 옵션을 추적하기 위한 상태
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null)

  const handleClick = (optionWordId: number) => {
    setSelectedOptionId(optionWordId)
  }

  const handleNext = () => {
    if (problemIndex < quizData.problemInfo.length - 1) {
      setProblemIndex((prevIndex) => prevIndex + 1)
      setCurrentProblem(problemIndex)
      setCurrentPersent(problemIndex)
      setSelectedOptionId(null)
    }
  }

  if (!problem) {
    return <div>없는 문제입니다.</div>
  }

  return (
    <div className="mt-10">
      <div className="m-10">
        <div className="mx-20 px-4">
          <CategoryTag category={problem.category} />
        </div>
        <div className="flex flex-wrap my-6 text-onSurface-300 text-xl text-center">
          아래 예문 속 ’{problem.name}’의 의미는 무엇일까요?
        </div>
      </div>

      <ul>
        {problem.optionInfo.map((option) => (
          <li key={option.optionWordId} className="mb-3 text-onSurface-300">
            <div
              className={`p-5 bg-gray-800 rounded-xl text-center text-xl ${
                selectedOptionId === option.optionWordId
                  ? 'border-2 border-primary-400'
                  : ''
              }`}
              onClick={() => handleClick(option.optionWordId)}
            >
              {option.meaning}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div className="mt-28 flex justify-between">
          <button className="mt-5 px-6 w-[116px] h-14 bg-outline rounded-md text-onSurface-300">
            이전
          </button>
          <button
            disabled={!selectedOptionId}
            className={`mt-5 px-6 w-[270px] h-14 rounded-md text-onSurface-300 ${
              selectedOptionId
                ? 'bg-gradient-to-tr from-gradient-201 to-gradient-202 to-70% text-onSurface-100'
                : 'bg-outline text-onSurface-100'
            }`}
            onClick={() => console.log('다음')}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quiz

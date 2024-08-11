'use client'

import React, { useState } from 'react'
import { quizData } from '@/components/domain/quiz/data'
import CategoryTag from '@/components/shared/CategoryTag'
import { useStore } from '@/lib/store'

function Quiz() {
  const [problemIndex, setProblemIndex] = useState(0)
  const { setCurrentProblem, setCurrentPersent } = useStore()

  const problem = quizData.problemInfo[problemIndex]

  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    setIsActive(!isActive)
  }

  const handleNext = () => {
    if (problemIndex < quizData.problemInfo.length - 1) {
      setProblemIndex((prevIndex) => prevIndex + 1)
      setCurrentProblem(problemIndex)
      setCurrentPersent(problemIndex)
    }
  }

  if (!problem) {
    return <div>없는 문제입니다.</div>
  }

  return (
    <div className="mt-10">
      <div className="m-10">
        <div className="mx-20 px-8">
          <CategoryTag category={problem.category} />
        </div>
        <div className="my-6 text-onSurface-300 text-xl text-center">
          <p>{problem.question}</p>
        </div>
      </div>

      <ul>
        {problem.optionInfo.map((option) => (
          <li key={option.optionWordId} className="mb-3 text-onSurface-300">
            <div
              className="p-5 bg-gray-800 rounded-xl text-center text-xl"
              onClick={handleClick}
            >
              {option.meaning}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div className="mt-28 flex justify-around ">
          <button className="mt-5 px-6 w-32 h-14 bg-outline rounded-md text-onSurface-300">
            이전
          </button>
          <button
            className={`mt-5 px-6 w-60 h-14 bg-outline text-onSurface-100 active:bg-gradient-to-tr from-gradient-201 to-gradient-202 to-70% rounded-md text-onSurface-300`}
            onClick={handleNext}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quiz

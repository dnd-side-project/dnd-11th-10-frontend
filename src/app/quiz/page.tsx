'use client'

import React, { useState } from 'react'
import { quizData } from '@/components/domain/quiz/data'
import { OptionInfoType } from '@/types/quiz'
import CategoryTag from '@/components/shared/CategoryTag'
import { useStore } from '@/lib/store'

function Quiz() {
  const [problemIndex, setProblemIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<OptionInfoType | null>(
    null,
  )
  const { setCurrentProblem, setCurrentPersent } = useStore()

  const problem = quizData.problemInfo[problemIndex]

  const handleNext = () => {
    if (problemIndex < quizData.problemInfo.length - 1) {
      setProblemIndex((prevIndex) => prevIndex + 1)
      setSelectedOption(null)
    }
    setCurrentProblem(problemIndex);
    setCurrentPersent(problemIndex);
  }

  const handleOptionSelect = (option: OptionInfoType) => {
    setSelectedOption(option)
  }

  if (!problem) {
    return <div>없는 문제입니다.</div>
  }

  return (
    <div className="mt-10">
      <CategoryTag category={`${problem.category}`} />
      <div className="text-onSurface-300">
        <p>{problem.question}</p>
      </div>

      <ul>
        {problem.optionInfo.map((option) => (
          <li key={option.optionWordId}>
            <label className="text-onSurface-300">
              <input
                type="radio"
                name="option"
                value={option.optionWordId}
                onChange={() => handleOptionSelect(option)}
                checked={selectedOption?.optionWordId === option.optionWordId}
              />
              {option.meaning}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNext}
        disabled={!selectedOption}
        className="text-primary-200"
      >
        다음
      </button>
    </div>
  )
}

export default Quiz

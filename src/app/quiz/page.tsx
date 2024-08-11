'use client'

import React, { useState } from 'react'
import { quizData } from '@/components/domain/quiz/data'
import { OptionInfoType } from '@/types/quiz'

function Quiz() {
  const [problemIndex, setProblemIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<OptionInfoType | null>(
    null,
  )

  const problem = quizData.problemInfo[problemIndex]

  const handleNext = () => {
    if (problemIndex < quizData.problemInfo.length - 1) {
      setProblemIndex((prevIndex) => prevIndex + 1)
      setSelectedOption(null)
    }
  }

  const handleOptionSelect = (option: OptionInfoType) => {
    setSelectedOption(option)
  }

  if (!problem) {
    return <div>Problem not found</div>
  }

  return (
    <div className="mt-10">
      <h1>{problem.name}</h1>
      <p>{problem.question}</p>
      <ul>
        {problem.optionInfo.map((option) => (
          <li key={option.optionWordId}>
            <label>
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
      <button onClick={handleNext} disabled={!selectedOption}>
        다음
      </button>
    </div>
  )
}

export default Quiz

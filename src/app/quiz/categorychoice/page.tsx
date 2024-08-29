'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CategoryCard } from '@/components/domain/quiz/typechoice'
import { quizCategory } from '@/components/domain/quiz/typechoice/categoryCard/data'

function QuizTypeChoice() {
  const router = useRouter()
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null)

  const handleClick = (quizName: string) => {
    setSelectedQuiz(quizName)
  }

  return (
    <div className="px-4 flex flex-col justify-between h-full">
      <p className="text-center text-onSurface-300 text-xl">
        어떤 분야를 학습하시겠어요?
      </p>

      <div className="flex flex-wrap justify-between">
        {quizCategory.map((quiz, index) => {
          const isSelected = selectedQuiz === quiz.name
          return (
            <CategoryCard
              quiz={quiz}
              index={index}
              isSelected={isSelected}
              handleClick={handleClick}
              key={quiz.name}
            />
          )
        })}
      </div>
      <div className="flex justify-between">
        <button
          className="px-6 py-4 w-[116px] bg-gray-700 rounded-md text-onSurface-300"
          onClick={() => router.back()}
        >
          이전
        </button>
        <button
          disabled={!selectedQuiz}
          className={`px-6 py-4 w-[270px] rounded-md ${
            selectedQuiz
              ? 'bg-gradient-to-r from-gradient-201 to-gradient-202 to-95% text-background'
              : 'bg-gray-800 text-onSurface-100'
          }`}
          onClick={() => router.push(`/quiz/problem/${selectedQuiz}/1`)}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default QuizTypeChoice

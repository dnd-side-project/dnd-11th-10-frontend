'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CategoryCard } from '@/components/domain/quiz/typechoice'
import { quizCategory } from '@/components/domain/quiz/typechoice/categoryCard/data'
import Button from '@/components/common/Button'

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
        <Button
          isFullWidth
          width={116}
          type="default"
          onClick={() => router.back()}
        >
          이전
        </Button>
        <Button
          isFullWidth
          width={270}
          type={selectedQuiz ? 'gradient' : 'disabled'}
          onClick={() => router.push(`/quiz/problem/${selectedQuiz}/1`)}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export default QuizTypeChoice

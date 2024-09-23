'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CategoryCard } from '@/components/domain/quiz/typechoice'
import { quizCategory } from '@/components/domain/quiz/typechoice/categoryCard/data'
import Button from '@/components/common/Button'
import { useMutation } from '@tanstack/react-query'
import { post } from '@/lib/axios'

function QuizTypeChoice() {
  const router = useRouter()
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null)

  const handleClick = (quizName: string) => {
    setSelectedQuiz(quizName)
  }

  // 추후 함수 분리 필요
  const mutation = useMutation({
    mutationFn: async (categoryName: string) => {
      return post(`${process.env.NEXT_PUBLIC_BASE_URL}/learnings/tests`, {
        categoryName,
        answerIds: [5, 2, 1],
      })
    },
    onSuccess: (data) => {
      // data 확인
      console.log(data)
    },
    onError: (error) => {
      console.error('[ERROR] 데이터를 가져오는 도중 오류가 발생했습니다.', error)
    },
  })

  const handleNextClick = () => {
    if (selectedQuiz) {
      mutation.mutate(selectedQuiz)
    }
  }

  return (
    <div className="px-4 flex flex-col justify-between h-full">
      <p className="text-center text-onSurface-300 text-h1">
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
          onClick={handleNextClick}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export default QuizTypeChoice

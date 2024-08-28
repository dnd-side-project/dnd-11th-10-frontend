'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface QuizCategory {
  participantCount: number
  name: string
  color: string
}

const quizCategory: QuizCategory[] = [
  {
    participantCount: 10,
    name: '전체 실무',
    color: 'text-secondary-200',
  },
  {
    participantCount: 10,
    name: '개발',
    color: 'text-devBlue-200',
  },
  {
    participantCount: 10,
    name: '디자인',
    color: 'text-designPurple-200',
  },
  {
    participantCount: 10,
    name: '비즈니스',
    color: 'text-primary-400',
  },
]

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
            <div
              className={`flex justify-between mt-4 p-4 w-[396px] h-[95px] bg-gray-800 text-onSurface-200 rounded-xl cursor-pointer ${
                isSelected
                  ? 'bg-primary-0 border-[1.5px] border-primary-400'
                  : ''
              }`}
              key={quiz.name}
              onClick={() => handleClick(quiz.name)}
            >
              <Image
                alt={`type_${index + 1}`}
                src={`/icons/type_0${index + 1}.svg`}
                width={63}
                height={63}
              />
              <div className="mr-24">
                <div className="mt-2 flex text-xl">
                  <p className={`${quiz.color}`}>{quiz.name}&nbsp;</p>
                  <p>용어</p>
                </div>
                <div className="flex">
                  오늘&nbsp;
                  <p className={`${quiz.color}`}>{quiz.participantCount}</p>
                  명이 참여 중
                </div>
              </div>
              <div className="py-4">
                <Image
                  alt="front.svg"
                  src={'/icons/front.svg'}
                  width={24}
                  height={24}
                />
              </div>
            </div>
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

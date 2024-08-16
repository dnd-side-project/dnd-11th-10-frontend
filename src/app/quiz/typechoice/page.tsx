'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface QuizType {
  participantCount: number
  name: string
  color: string
}

const quizType: QuizType[] = [
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
    <div>
      <div className="text-center text-onSurface-300 text-xl">
        <p>어떤 분야를 학습하시겠어요?</p>
      </div>

      <div className="mt-5 flex flex-wrap justify-between">
        {quizType.map((quiz) => {
          const isSelected = selectedQuiz === quiz.name
          return (
            <div
              className={`mt-4 p-4 w-[190px] h-[248px] bg-gray-800 text-onSurface-200 rounded-xl cursor-pointer ${
                isSelected ? 'bg-gray-700 border-[1px] border-primary-400' : ''
              }`}
              key={quiz.name}
              onClick={() => handleClick(quiz.name)}
            >
              <div className="flex">
                오늘&nbsp;
                <p className={`${quiz.color}`}>{quiz.participantCount}</p>
                명이 참여 중
              </div>
              <div className="mt-2 flex text-xl">
                <p className={`${quiz.color}`}>{quiz.name}</p>
                <p>용어</p>
              </div>
              <p className="text-xl">퀴즈하기</p>
              <div
                className={`mt-2 w-[158px] h-[120px] ${isSelected ? 'bg-gray-600' : 'bg-gray-700'}`}
              />
            </div>
          )
        })}
      </div>
      <div className="mt-28 flex justify-between">
        <button className="mt-5 px-6 w-[116px] h-14 bg-outline rounded-md text-onSurface-300">
          이전
        </button>
        <button
          disabled={!selectedQuiz}
          className={`mt-5 px-6 w-[270px] h-14 rounded-md text-onSurface-300 ${
            selectedQuiz
              ? 'bg-gradient-to-br from-gradient-201 to-gradient-202 to-70% text-onSurface-100'
              : 'bg-outline text-onSurface-100'
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

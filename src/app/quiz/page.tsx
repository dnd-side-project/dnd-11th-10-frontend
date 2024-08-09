'use client'

import Start from '@/components/domain/quiz/Start'
import React from 'react'

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

function Quiz() {
  return (
    <div className="mt-10">
      <div className="text-center text-onSurface-300 text-xl">
        <p>어떤 분야의 퀴즈를 진행할까요?</p>
      </div>

      <div className="mt-5 flex flex-wrap justify-around">
        {quizType.map((quiz) => {
          return (
            <div
              className="mt-8 w-40 h-56 bg-gray-800 text-onSurface-200"
              key={quiz.name}
            >
              <div className="">
                오늘 <p className={`${quiz.color}`}>{quiz.participantCount}</p>
                명이 참여 중
              </div>
              <p className={`${quiz.color}`}>{quiz.name}</p>
              <p>용어</p>
              <p>퀴즈하기</p>
              <div className="" />
            </div>
          )
        })}
      </div>
      <div className="flex justify-between px-5">
        <button className="mt-5 px-6 w-28 h-14 bg-outline rounded-md text-onSurface-300">
          이전
        </button>
        <button
          disabled={true}
          className="mt-5 px-6 w-56 h-14 bg-outline active:bg-gradient-to-tr from-gradient-201 to-gradient-202 to-70% rounded-md text-onSurface-300"
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default Quiz

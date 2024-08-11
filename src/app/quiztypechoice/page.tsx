'use client'

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

function QuizTypeChoice() {
  return (
    <div>
      <div className="text-center text-onSurface-300 text-xl">
        <p>어떤 분야의 퀴즈를 진행할까요?</p>
      </div>

      <div className="mt-5 flex flex-wrap justify-around">
        {quizType.map((quiz) => {
          return (
            <div
              className="mt-4 p-4 w-44 h-56 bg-gray-800 text-onSurface-200 rounded-xl"
              key={quiz.name}
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
              <div className="mt-2 w-36 h-24 bg-gray-600" />
            </div>
          )
        })}
      </div>
      <div className="mt-28 flex justify-around ">
        <button className="mt-5 px-6 w-32 h-14 bg-outline rounded-md text-onSurface-300">
          이전
        </button>
        <button
          disabled={true}
          className="mt-5 px-6 w-60 h-14 bg-outline text-onSurface-100 active:bg-gradient-to-tr from-gradient-201 to-gradient-202 to-70% rounded-md text-onSurface-300"
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default QuizTypeChoice

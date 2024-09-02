'use client'

import React from 'react'
import Image from 'next/image'
import QuizResultCard from '@/components/domain/quiz/result/QuizResultCard/QuizResultCard'
import { quizCardResultData, resultData } from '@/constants/resultData'

function QuizResult() {
  const correctAnswer = 0

  return (
    <div className="px-4 flex flex-col items-center justify-between h-full">
      <Image
        src={`/images/quiz_result_01.svg`}
        alt={`quiz_result_01.svg`}
        width={180}
        height={180}
      />
      <p className="text-body1 text-onSurface-300">{resultData[0].result}</p>
      <div className="flex text-h1">
        <p className="text-primary-400">{correctAnswer}</p>
        <p className="text-onSurface-300">개 정답!</p>
      </div>
      {quizCardResultData.map((card, index) => {
        return (
          <QuizResultCard
            key={index}
            wordId={card.wordId}
            isCorrect={card.isCorrect}
            isMarked={card.isMarked}
            name={card.name}
            selectedOptionDescription={card.selectedOptionDescription}
            answerOptionDescription={card.answerOptionDescription}
          />
        )
      })}
    </div>
  )
}

export default QuizResult

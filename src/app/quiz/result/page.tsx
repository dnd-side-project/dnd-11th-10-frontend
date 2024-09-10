'use client'

import React from 'react'
import Image from 'next/image'
import { QuizResultCard } from '@/components/domain/quiz/result'
import { quizCardResultData } from '@/constants/resultData'
import { getQuizResult } from '@/utils/getQuizResult'

function QuizResult() {
  const correctCount = quizCardResultData.correctCount
  const { imageSrc, altText, resultText } = getQuizResult(correctCount)

  return (
    <div className="px-4 flex flex-col items-center justify-between h-full">
      <Image src={imageSrc} alt={altText} width={180} height={180} />
      <p className="text-body1 text-onSurface-300">{resultText}</p>
      <div className="flex text-h1">
        <p className="text-primary-400">{quizCardResultData.correctCount}</p>
        <p className="text-onSurface-300">개 정답!</p>
      </div>
      {quizCardResultData.explanationInfo.map((card, index) => {
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

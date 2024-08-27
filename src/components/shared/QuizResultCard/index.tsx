import React from 'react'
import Image from 'next/image'
import { ExplanationInfo } from '@/types/quizresult'
import BookmarkButton from '../BookmarkButton'

export default function QuizResultCard({
  wordId,
  isCorrect,
  isMarked,
  name,
  selectedOptionDescription,
  answerOptionDescription,
}: ExplanationInfo) {
  return (
    <div className="px-3 py-6 w-full bg-gray-800  rounded-xl" key={name}>
      <div className="mb-3 flex justify-between">
        <div className="flex">
          <Image
            src={isCorrect ? '/icons/correct.svg' : '/icons/wrong.svg'}
            alt={isCorrect ? 'correct.svg' : 'wrong.svg'}
            width={20}
            height={20}
          />
          <p className="ml-2 text-onSurface-300 font-medium">{name}</p>
        </div>
        <BookmarkButton wordId={wordId} isMarked={isMarked} />
      </div>
      {isCorrect && (
        <div className="line-through text-sm text-onSurface-100 font-normal">
          <p>{selectedOptionDescription}</p>
        </div>
      )}
      <div className="flex justify-start break-keep text-lg text-onSurface-200">
        정답 :&nbsp;<p>{answerOptionDescription}</p>
      </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import { ExplanationInfo } from '@/types/quizresult'
import BookmarkButton from '@/components/shared/BookmarkButton'

function QuizResultCard({
  wordId,
  isCorrect,
  isMarked,
  name,
  selectedOptionDescription,
  answerOptionDescription,
}: ExplanationInfo) {
  return (
    <div className="px-3 py-6 w-full bg-gray-800 rounded-xl" key={name}>
      <div className="mb-3 flex justify-between">
        <div className="flex">
          <Image
            src={isCorrect ? '/icons/correct.svg' : '/icons/wrong.svg'}
            alt={isCorrect ? 'correct.svg' : 'wrong.svg'}
            width={20}
            height={20}
          />
          <p className="ml-2 text-sub1 text-onSurface-300">{name}</p>
        </div>
        <BookmarkButton wordId={wordId} isMarked={isMarked} />
      </div>
      {!isCorrect && (
        <p className="line-through text-onSurface-100 text-body3">
          {selectedOptionDescription}
        </p>
      )}
      <p className="break-keep text-body2 text-onSurface-200">
        정답 : &nbsp;{answerOptionDescription}
      </p>
    </div>
  )
}

export default QuizResultCard

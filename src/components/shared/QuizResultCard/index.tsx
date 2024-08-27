import { ExplanationInfo } from '@/types/quizresult'
import React from 'react'
import BookmarkButton from '../BookmarkButton'
import Image from 'next/image'

export default function QuizReultCard({
  wordId,
  isCorrect,
  isMarked,
  name,
  selectedOptionDescription,
  answerOptionDescription,
}: ExplanationInfo) {
  return (
    <div className="w-full bg-gray-800 text-onSurface-200" key={name}>
      {isCorrect ? (
        <Image
          src={'/icons/correct.svg'}
          alt={'correct.svg'}
          width={20}
          height={20}
        />
      ) : (
        <Image
          src={'/icons/wrong.svg'}
          alt={'wrong.svg'}
          width={20}
          height={20}
        />
      )}
      <BookmarkButton wordId={wordId} isMarked={isMarked} />
      {isCorrect ? null : (
        <div>
          <p>{selectedOptionDescription}</p>
        </div>
      )}
      <p>{answerOptionDescription}</p>
    </div>
  )
}

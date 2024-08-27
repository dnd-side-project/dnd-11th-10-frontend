import React from 'react'
import Image from 'next/image'
import { ExplanationInfo } from '@/types/quizresult'
import BookmarkButton from '../BookmarkButton'

export default function QuizReultCard({
  wordId,
  isCorrect,
  isMarked,
  name,
  selectedOptionDescription,
  answerOptionDescription,
}: ExplanationInfo) {
  return (
    <div
      className="p-6 w-full bg-gray-800 text-onSurface-200 rounded-xl"
      key={name}
    >
      <div className="flex justify-between text-[18px]">
        <div className="flex">
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
          <p className="ml-2">{name}</p>
        </div>
        <BookmarkButton wordId={wordId} isMarked={isMarked} />
      </div>
      {isCorrect ? null : (
        <div className="line-through">
          <p>{selectedOptionDescription}</p>
        </div>
      )}
      <div className="flex break-keep">
        정답 :&nbsp;<p>{answerOptionDescription}</p>
      </div>
    </div>
  )
}

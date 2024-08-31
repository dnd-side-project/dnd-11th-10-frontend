import React from 'react'
import Image from 'next/image'
import { QuizCategory } from './data'

interface Props {
  isSelected: boolean
  quiz: QuizCategory
  handleClick: (quizName: string) => void
  index: number
}

function CategoryCard({ isSelected, quiz, handleClick, index }: Props) {
  return (
    <div
      className={`flex justify-between mt-4 p-4 w-[396px] h-[95px] bg-gray-800 text-onSurface-200 rounded-xl cursor-pointer ${
        isSelected && 'bg-primary-0 border-[1.5px] border-primary-400'
      }`}
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
}

export default CategoryCard

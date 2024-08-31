'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import CategoryTag from '@/components/shared/CategoryTag'
import { quizData } from '@/components/domain/quiz/data'
import { useQuizStore } from '@/lib/store'

function Quiz() {
  const router = useRouter()
  const pathname = usePathname()
  const {
    problemIndex,
    setProblemIndex,
    currentProblem,
    setCurrentProblem,
    answer,
    addAnswer,
    setCurrentPercent,
    removeAnswer,
  } = useQuizStore()
  const problem = quizData.problemInfo[problemIndex]
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null)

  console.log(pathname)
  console.log(answer)

  const handleClick = (optionWordId: number) => {
    setSelectedOptionId(optionWordId)
  }

  const handleNext = () => {
    const category = pathname.split('/').at(-2)
    if (selectedOptionId === null) return

    addAnswer(selectedOptionId)
    if (problemIndex < quizData.problemInfo.length - 1) {
      setProblemIndex(problemIndex + 1)
      setCurrentProblem(currentProblem + 1)
      setCurrentPercent(problemIndex);
      router.push(`/quiz/problem/${category}/${currentProblem + 1}`)
    } else {
      alert('마지막 문제입니다.')
    }
  }

  const handleBack = () => {
    if (problemIndex > 0) {
      setProblemIndex(problemIndex - 1)
      setCurrentProblem(currentProblem - 1)
      removeAnswer()
      const category = pathname.split('/').at(-2)
      router.push(`/quiz/problem/${category}/${currentProblem - 1}`)
    } else {
      alert('첫 번째 문제입니다.')
    }
  }

  if (!problem) {
    return <div>없는 문제입니다.</div>
  }

  return (
    <div className="px-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-center">
          <CategoryTag category={problem.category} />
        </div>
        <p className="my-6 text-onSurface-300 text-xl text-center break-keep">
          아래 예문 속 ’{problem.name}’의 의미는 무엇일까요?
        </p>

        <div className="relative mx-auto px-[calc(8px+12.427px)] py-6 w-[calc(360px+12.427px)] bg-gray-200 rounded-xl text-background text-[18px] text-center break-keep">
          <p>{`"${problem.question}"`}</p>
          <Image
            src={'/images/speach_bubble_tail.svg'}
            alt="speach_bubble_tail.svg"
            width={23}
            height={23}
            className="absolute -bottom-0 -left-[0.4rem]"
          />
        </div>
      </div>

      <ul>
        {problem.optionInfo.map((option) => (
          <li key={option.optionWordId} className="mb-3 text-onSurface-300">
            <div
              className={`p-5 bg-gray-800 rounded-xl text-center text-[1rem] break-keep ${
                selectedOptionId === option.optionWordId &&
                'bg-primary-0 border-[1px] border-primary-400'
              }`}
              onClick={() => handleClick(option.optionWordId)}
            >
              {option.meaning}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button
          className="px-6 py-4 w-[116px] bg-gray-700 rounded-md text-onSurface-300"
          onClick={handleBack}
        >
          이전
        </button>
        <button
          disabled={!selectedOptionId}
          className={`px-6 py-4 w-[270px] rounded-md ${
            selectedOptionId
              ? 'bg-gradient-to-r from-gradient-201 to-gradient-202 to-95% text-background'
              : 'bg-gray-800 text-onSurface-100'
          }`}
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default Quiz

'use client'

import React from 'react'
import Image from 'next/image'

import { useQuizStore } from '@/store/useQuizStore'
import useUIStore from '@/store/useUIStore'
import QuizProblemStopModal from '../QuizProblemStopModal'

function Header() {
  const { currentProblem, currentPercent } = useQuizStore()
  const problems = 5
  const { isModalOpen, openModal, closeModal } = useUIStore()

  return (
    <div className="p-4 flex justify-between h-20">
      <Image
        src={'/icons/cross.svg'}
        alt="corss.svg"
        onClick={openModal}
        width={20}
        height={20}
      />
      <QuizProblemStopModal
        isModalOpen={isModalOpen}
        totalProblem={problems}
        currentProblem={currentProblem}
        closeModal={closeModal}
      />

      <div className="my-auto p-[0.05rem] w-72 h-3 bg-outline rounded-2xl">
        <div
          className="bg-gradient-to-tr from-gradient-201 to-gradient-202 to-70% h-2.5 rounded-2xl"
          style={{ width: `${currentPercent}%` }}
        />
      </div>

      <div className="my-auto flex text-onSurface-300 text-xl">
        {currentProblem}
        <p className="text-onSurface-200">
          {'/'}
          {problems}
        </p>
      </div>
    </div>
  )
}

export default Header

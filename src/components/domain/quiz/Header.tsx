'use client'

import React from 'react'
import Image from 'next/image'

import Cross from '/public/icons/cross.svg'
import { useStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()
  const { currentProblem, currentPersent } = useStore()
  const problems = 5

  return (
    <div className="flex justify-around p-4 h-20 ">
      <div className="mt-3">
        <Image
          src={Cross}
          alt="cross.svg"
          onClick={() => router.push('/home/dictionary')}
          className="cursor-pointer"
        />
      </div>

      <div className="mt-4 p-[0.05rem] w-72 h-3 bg-outline rounded-2xl">
        <div
          className="bg-gradient-to-tr from-gradient-201 to-gradient-202 to-70% h-2.5 rounded-2xl"
          style={{ width: `${currentPersent}%` }}
        />
      </div>

      <div className="flex mt-2 text-onSurface-300 text-xl">
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

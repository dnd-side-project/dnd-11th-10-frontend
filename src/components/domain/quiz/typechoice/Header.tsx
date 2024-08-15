'use client'

import React from 'react'
import Image from 'next/image'

import Cross from '/public/icons/cross.svg'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()
  return (
    <div className="flex justify-start h-20 mt-3">
      <div className="mt-3">
        <Image
          src={Cross}
          alt="Back.svg"
          onClick={() => router.push('/home/dictionary')}
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Header

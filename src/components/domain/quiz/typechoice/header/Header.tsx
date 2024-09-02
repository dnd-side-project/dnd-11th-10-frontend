'use client'

import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()
  return (
    <div className="px-4 flex justify-start h-20">
      <Image
        src={'/icons/cross.svg'}
        alt="cross.svg"
        onClick={() => router.push('/home/dictionary')}
        className="cursor-pointer"
        width={24}
        height={24}
      />
    </div>
  )
}

export default Header

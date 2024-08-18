'use client'

import React from 'react'
import Image from 'next/image'

import Back from '/public/icons/back.svg'

function Header() {
  return (
    <div className="flex justify-start h-20">
      <div className="mt-3">
        <Image
          src={Back}
          alt="Back.svg"
          onClick={() => console.log('back logo clicked')}
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Header

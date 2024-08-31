import Image from 'next/image'
import React from 'react'

export default function TopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-4 w-14 h-14 p-4 rounded-full bg-gray-800"
    >
      <Image alt="top" src={'/icons/arrow_up.svg'} width={24} height={24} />
    </button>
  )
}

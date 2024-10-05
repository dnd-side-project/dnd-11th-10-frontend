'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSearchStore } from '@/store/useSearchStore'

function Header() {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const inputRef = useRef<HTMLDivElement | null>(null)
  const { keyword, setKeyword } = useSearchStore()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsActive(false)
    }
  }

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="p-4 flex justify-between gap-4 h-20">
      <Image
        src={'/icons/back.svg'}
        alt="back.svg"
        onClick={() => router.push('/home/dictionary')}
        className="cursor-pointer"
        width={24}
        height={24}
      />
      <div
        ref={inputRef}
        className={`flex justify-between gap-[0.625rem] w-full px-3 py-[0.625rem] bg-gray-800 rounded-lg ${isActive && 'border-solid border-[1px] border-primary-400'}`}
      >
        <Image
          src={'/icons/search.svg'}
          alt="search.svg"
          width={24}
          height={24}
        />
        <input
          className="w-full bg-gray-800 focus:outline-none caret-primary-400 text-onSurface-300"
          onFocus={() => setIsActive(true)}
          onKeyDown={handleKeyDown}
          onChange={handleUserInput}
          value={keyword}
          placeholder="단어, 뜻, 예문, 발음으로 검색해보세요."
        />
      </div>
    </div>
  )
}

export default Header

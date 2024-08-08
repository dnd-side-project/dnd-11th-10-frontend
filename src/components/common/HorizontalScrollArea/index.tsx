'use client'

import Image from 'next/image'
import { useRef } from 'react'

type HorizontalScrollAreaProps = {
  children: React.ReactNode
  title: string
}

export default function HorizontalScrollArea({
  children,
  title,
}: HorizontalScrollAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePrevClick = () => {
    scrollTo(-containerRef.current!.offsetWidth / 2)
  }

  const handleNextClick = () => {
    scrollTo(containerRef.current!.offsetWidth / 2)
  }

  const scrollTo = (moveX: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: moveX,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-hidden justify-between mb-3 px-4">
        <p className="text-xl font-semibold text-[#f3f3f3] ">{title}</p>
        <div className="flex gap-3">
          <Image
            alt="left"
            src={'/icons/left_arrow.svg'}
            width={24}
            height={24}
            onClick={handlePrevClick}
          />
          <Image
            alt="right"
            src={'/icons/right_arrow.svg'}
            width={24}
            height={24}
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 relative px-4 overflow-x-auto transition-transform duration-500"
      >
        {children}
      </div>
    </div>
  )
}

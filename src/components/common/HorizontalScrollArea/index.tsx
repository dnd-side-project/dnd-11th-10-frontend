'use client'
import { cn } from '@/lib/core'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type HorizontalScrollAreaProps = {
  children: React.ReactNode
  titleSize?: 'normal' | 'small'
  title: string
  scrollDivisor: number
}

export default function HorizontalScrollArea({
  children,
  titleSize = 'normal',
  title,
  scrollDivisor,
}: HorizontalScrollAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isStart, setIsStart] = useState<boolean>(true)
  const [isEnd, setIsEnd] = useState<boolean>(false)

  const handlePrevClick = () => {
    scrollTo(-containerRef.current!.offsetWidth / scrollDivisor)
  }

  const handleNextClick = () => {
    scrollTo(containerRef.current!.offsetWidth / scrollDivisor)
  }

  const scrollTo = (moveX: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: moveX,
        behavior: 'smooth',
      })
    }
    updateScrollPosition()
  }

  // scroll 위치 업데이트
  const updateScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current

      setIsStart(scrollLeft <= 0)
      setIsEnd(scrollLeft + clientWidth >= scrollWidth - 1)
    }
  }

  useEffect(() => {
    containerRef.current!.addEventListener('scroll', updateScrollPosition)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-hidden justify-between items-center mb-3 px-4 text-[#f3f3f3]">
        <p
          className={cn({
            'text-h2': titleSize === 'normal',
            'text-h3': titleSize === 'small',
          })}
        >
          {title}
        </p>
        <div className="flex gap-3">
          <Image
            alt="left"
            src={'/icons/left_arrow.svg'}
            width={24}
            height={24}
            onClick={handlePrevClick}
            className={isStart ? 'opacity-60' : 'opacity-100 cursor-pointer'}
          />
          <Image
            alt="right"
            src={'/icons/right_arrow.svg'}
            width={24}
            height={24}
            onClick={handleNextClick}
            className={isEnd ? 'opacity-60' : 'opacity-100 cursor-pointer'}
          />
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 relative px-4 overflow-x-auto transition-transform transition-duration-500"
      >
        {children}
      </div>
    </div>
  )
}

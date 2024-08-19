'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type HorizontalScrollAreaProps = {
  children: React.ReactNode
  title: string
}

export default function HorizontalScrollArea({
  children,
  title,
}: HorizontalScrollAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isStart, setIsStart] = useState<boolean>(true)
  const [isEnd, setIsEnd] = useState<boolean>(false)

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
    updateScrollPosition()
  }

  // scroll 위치 업데이트
  const updateScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current

      setIsStart(scrollLeft <= 2)
      setIsEnd(scrollLeft + clientWidth >= scrollWidth)
    }
  }

  useEffect(() => {
    containerRef.current!.addEventListener('scroll', updateScrollPosition)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-hidden justify-between mb-3 px-4">
        <p className="text-h2 text-[#f3f3f3] ">{title}</p>
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

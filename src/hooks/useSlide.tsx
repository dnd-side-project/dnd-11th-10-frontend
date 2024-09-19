'use client'

import { useEffect, useState } from 'react'
import { splashData } from '@/constants/splashData'

function useSlide() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide: number) =>
        prevSlide === splashData.length - 1 ? 0 : prevSlide + 1,
      )
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return { currentSlide }
}

export default useSlide

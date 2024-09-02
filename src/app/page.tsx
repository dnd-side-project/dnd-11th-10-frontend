'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import GoogleLoginButton from '@/components/shared/GoogleLoginButton'
import Image from 'next/image'
import Link from 'next/link'

interface SplashData {
  id?: number
  text: string
  img: string
}

const splashData: SplashData[] = [
  {
    id: 1,
    text: '실무 용어를 검색하고\n뜻과 예문을 알아보아요',
    img: '/images/splash_01.svg',
  },
  {
    id: 2,
    text: '업무에서 일어나는 일을\n댓글로 남기고 소통해요',
    img: '/images/splash_02.svg',
  },
  {
    id: 3,
    text: '퀴즈를 풀어서 개발, 디자인,\n비지니스 용어를 학습할 수 있어요',
    img: '/images/splash_03.svg',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === splashData.length - 1 ? 0 : prevSlide + 1,
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col justify-between">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {splashData.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center"
            >
              <Image
                src={slide.img}
                alt={slide.text}
                width={398}
                height={320}
              />
              <p className="text-white text-center">{slide.text}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 flex justify-center w-full">
          {splashData.map((_, index) => (
            <Image
              src={`${currentSlide === index ? `/icons/splash_dot.fill.svg` : `/icons/splash_dot_empty.svg`}`}
              alt="dot.svg"
              width={12}
              height={12}
              key={index}
              className="mr-[10px]"
            />
          ))}
        </div>
      </div>
      <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/login/google`}>
        <GoogleLoginButton />
      </Link>
      <div className="mt-[10px]">
        <Button type={'black'} isFullWidth={true}>
          비회원으로 시작하기
        </Button>
      </div>
    </div>
  )
}

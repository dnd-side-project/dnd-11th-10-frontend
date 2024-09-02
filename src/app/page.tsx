'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import GoogleLoginButton from '@/components/shared/GoogleLoginButton'
import Image from 'next/image'
import Link from 'next/link'
import { splashData } from '@/constants/splashData'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === splashData.length - 1 ? 0 : prevSlide + 1,
      )
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-20 m-auto w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {splashData.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 flex flex-col gap-20 items-center justify-center"
            >
              <p className="text-onSurface-300 text-center text-h1">
                {slide.text}
              </p>
              <Image
                src={slide.img}
                alt={slide.text}
                width={398}
                height={320}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full">
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
      <div>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/login/google`}>
          <GoogleLoginButton />
        </Link>
        <div className="mt-[10px]">
          <Button
            type={'black'}
            isFullWidth={true}
            onClick={() => router.push('/home/dictionary')}
          >
            비회원으로 시작하기
          </Button>
        </div>
      </div>
    </div>
  )
}

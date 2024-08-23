'use client'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { loginWithGoogle } from '@/api/auth/[...nextauth]/route'

interface SplashData {
  text: string
  img: string
}

const splashData: SplashData[] = [
  {
    text: '실무 용어를 검색하고\n뜻과 예문을 알아보아요',
    img: '/images/splash_01.svg',
  },
  {
    text: '업무에서 일어나는 일을\n댓글로 남기고 소통해요',
    img: '/images/splash_02.svg',
  },
  {
    text: '퀴즈를 풀어서 개발, 디자인,\n비지니스 용어를 학습할 수 있어요',
    img: '/images/splash_03.svg',
  },
]

export default function Home() {
  return (
    <div className="">
      <Button
        type={'white'}
        isFullWidth={true}
        onClick={() => loginWithGoogle()}
      >
        <div className="flex justify-center">
          <Image
            src={'/icons/google.svg'}
            alt={'google.svg'}
            width={23}
            height={23}
            className="mr-3"
          />
          <p>Google로 시작하기</p>
        </div>
      </Button>
      <div className="mt-[10px]">
        <Button type={'black'} isFullWidth={true}>
          비회원으로 시작하기
        </Button>
      </div>
    </div>
  )
}

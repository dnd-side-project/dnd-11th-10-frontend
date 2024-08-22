'use client'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { signIn, useSession } from 'next-auth/react'

interface SplashData {
  text1: string
  text2: string
  img: string
}

const splashData: SplashData[] = [
  {
    text1: '실무 용어를 검색하고',
    text2: '뜻과 예문을 알아보아요',
    img: '/images/splash_01.svg',
  },
  {
    text1: '업무에서 일어나는 일을',
    text2: '댓글로 남기고 소통해요',
    img: '/images/splash_02.svg',
  },
  {
    text1: '퀴즈를 풀어서 개발, 디자인,',
    text2: '비지니스 용어를 학습할 수 있어요',
    img: '/images/splash_03.svg',
  },
]

const loginPath = {
  google: `${process.env.NEXT_PUBLIC_API_URL}/login/google`,
}

export default function Home() {
  const { data: session } = useSession()
  return (
    <div className="">
      {session ? (
        <Button type={'white'} isFullWidth={true} onClick={() => signIn()}>
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
      ) : (
        <Button type={'white'} isFullWidth={true} onClick={() => signIn()}>
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
      )}
      <div className="mt-[10px]">
        <Button type={'black'} isFullWidth={true}>
          비회원으로 시작하기
        </Button>
      </div>
    </div>
  )
}

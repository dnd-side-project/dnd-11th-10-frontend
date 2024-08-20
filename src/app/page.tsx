import Image from 'next/image'
import Button from '@/components/common/Button'

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

export default function Home() {
  return (
    <div className="">
      <div className="flex">
        <div className="w-full text-onSurface-300 text-[24px] text-center overflow-hidden">
          {splashData.map((splash, index) => {
            return (
              <div key={index} className="w-full flex-shrink-0">
                <p>{splash.text1}</p>
                <p>{splash.text2}</p>
                <Image
                  src={`${splash.img}`}
                  alt={`splasg_0${index + 1}.svg`}
                  width={398}
                  height={320}
                />
              </div>
            )
          })}
        </div>
      </div>
      <Button type={'white'} isFullWidth={true}>
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

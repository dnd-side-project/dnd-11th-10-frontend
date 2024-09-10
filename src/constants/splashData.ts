export interface SplashData {
  id?: number
  text: string
  img: string
}

export const splashData: SplashData[] = [
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

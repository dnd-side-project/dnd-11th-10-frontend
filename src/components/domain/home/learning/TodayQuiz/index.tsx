import { getTodayDate } from '@/utils/date'
import Image from 'next/image'
import Link from 'next/link'

type TodayQuizProps = {
  todaySolvedCnt: number
}

export default function TodayQuiz({ todaySolvedCnt }: TodayQuizProps) {
  return (
    <div className="w-full px-4 text-onSurface-300 ">
      <p className="text-h2 text-onSurface-300 mb-3">
        <span className="text-primary-400">{getTodayDate() + ' '}</span>
        실무 용어 퀴즈💫
      </p>
      <div className="w-full flex justify-between p-5 rounded-2xl bg-btn-gradient">
        <div className="flex flex-col justify-between text-background">
          <p className="text-h1 mb-2">실무 용어 퀴즈</p>
          <p className="mb-5">
            오늘&nbsp;
            <span className="text-secondary-300 text-h3">{todaySolvedCnt}</span>
            명이 퀴즈에
            <br />
            참여했어요.
          </p>
          <Link
            href={'#'}
            className="w-36 py-4 px-6 text-center text-sub2 bg-background rounded-lg text-onSurface-300"
          >
            퀴즈 풀러 가기
          </Link>
        </div>
        <Image
          alt="quiz_img"
          src={'/images/logo.svg'}
          width={120}
          height={120}
        />
      </div>
    </div>
  )
}

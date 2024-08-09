import { getTodayDate } from '@/utils/date'
import Image from 'next/image'
import Link from 'next/link'

type TodayQuizProps = {
  todaySolvedCnt: number
}

export default function TodayQuiz({ todaySolvedCnt }: TodayQuizProps) {
  return (
    <div className="w-full px-4 text-onSurface-300 ">
      <p className="text-xl font-semibold text-onSurface-300 mb-3">
        <span className="text-primary-400">{getTodayDate() + ' '}</span>
        실무 용어 퀴즈💫
      </p>
      <div
        className="w-full flex justify-between p-5 rounded-2xl"
        style={{
          backgroundImage:
            'linear-gradient(120deg, #0FB -25.6%, #3D7DF3 31.25%, #6E32E6 86.98%)',
        }}
      >
        <div className="flex flex-col justify-between">
          <p className="text-2xl font-semibold mb-2">실무 용어 퀴즈</p>
          <p className="mb-5">
            오늘&nbsp;
            <span className="text-primary-200 font-semibold">
              {todaySolvedCnt}
            </span>
            명이 퀴즈에
            <br /> 참여했어요.
          </p>
          <Link
            href={'#'}
            className="w-36 py-4 px-6 text-center font-medium bg-background rounded-lg"
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

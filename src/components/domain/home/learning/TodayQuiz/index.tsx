import Button from '@/components/common/Button'
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
        용어 퀴즈💫
      </p>
      <div
        className="w-full flex justify-between p-5 rounded-2xl"
        style={{
          backgroundImage:
            'linear-gradient(120deg, #0FB -25.6%, #3D7DF3 31.25%, #6E32E6 86.98%)',
        }}
      >
        <div className="flex flex-col justify-between text-onSurface-300">
          <p className="text-h1 mb-2">용어 퀴즈</p>
          <p className="mb-5">
            오늘&nbsp;
            <span className="text-primary-100 text-h3">{todaySolvedCnt}</span>
            명이 퀴즈에
            <br />
            참여했어요.
          </p>
          <Link href={'#'}>
            <Button type="black" width={36 * 4}>
              퀴즈 풀러 가기
            </Button>
          </Link>
        </div>
        <Image
          alt="quiz_img"
          src={'/images/home_quiz.svg'}
          width={179}
          height={166}
        />
      </div>
    </div>
  )
}

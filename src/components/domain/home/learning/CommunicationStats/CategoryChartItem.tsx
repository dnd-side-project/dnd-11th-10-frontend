import { cn } from '@/lib/core'
import { Category } from '.'
import ChartProgressBar from './ChartProgressBar'

const values = {
  business: {
    name: '비즈니스',
    gradient: ['#1FD5BC', '#358BF2'],
    textColor: 'text-primary-200',
  },
  design: {
    name: '디자인',
    gradient: ['#C439F1', '#6D32E6'],
    textColor: 'text-designPurple-200',
  },
  develop: {
    name: '개발',
    gradient: ['#1A90E8', '#5143E3'],
    textColor: 'text-devBlue-200',
  },
}

export type HalfPieChartProps = {
  percent: number
  cnt: number
  totalCnt: number
  category: Category
}

export default function CategoryChartItem({
  category,
  percent,
  cnt,
  totalCnt,
}: HalfPieChartProps) {
  return (
    <>
      <div className="w-1/3 max-xs:w-full flex flex-col text-center gap-3 p-4 rounded-lg text-onSurface-300 bg-gray-800">
        <div className="flex gap-1 justify-center items-center">
          <span className={values[category].textColor}>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
              <circle cx="3" cy="3" r="3" />
            </svg>
          </span>
          <p>{values[category].name}</p>
        </div>
        <div className="flex justify-center px-[6.5px]">
          <div className="relative w-fit h-fit rounded-3xl">
            <ChartProgressBar
              gradientArr={values[category].gradient}
              percent={100}
            />
            <div className="absolute top-0">
              <ChartProgressBar
                id={`${category}-gradient`}
                gradientArr={values[category].gradient}
                percent={percent}
                isGradient
              />
            </div>
            <p
              className={cn(
                values[category].textColor,
                'w-full absolute bottom-0 font-semibold',
              )}
            >
              {percent}%
            </p>
          </div>
        </div>
        <p className="text-caption text-onSurface-200">
          <span className={values[category].textColor}>{cnt}</span>/{totalCnt}
          문제 정답
        </p>
      </div>
    </>
  )
}

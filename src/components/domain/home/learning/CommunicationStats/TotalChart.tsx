import ChartProgressBar from './ChartProgressBar'

type TotalChartProps = {
  topPercent: number | '??'
  percent: number
}

export default function TotalChart({ topPercent, percent }: TotalChartProps) {
  const gradientArr = ['#00FFBB', '#3D7DF3', '#6E32E6']

  return (
    <>
      <div className="px-4">
        <div className="relative w-fit h-fit rounded-3xl">
          <ChartProgressBar
            size="large"
            gradientArr={gradientArr}
            percent={100}
          />
          <div className="absolute top-0">
            <ChartProgressBar
              id="total-gradient"
              size="large"
              gradientArr={gradientArr}
              percent={percent}
              isGradient
            />
          </div>
          <div className="w-full absolute -bottom-1 text-center">
            <p className="text-caption">전체</p>
            <p className={'text-h1 text-primary-200'}>{Math.round(percent)}%</p>
          </div>
          <span className="absolute -top-[18px] -right-4 text-caption rounded py-1 px-2 bg-[#8C5EE4]">
            상위 {topPercent}%
          </span>
        </div>
      </div>
    </>
  )
}

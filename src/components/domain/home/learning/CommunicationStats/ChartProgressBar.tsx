type ProgressBarProps = {
  id?: string
  size?: 'normal' | 'large'
  gradientArr: string[]
  percent: number
  isGradient?: boolean
}

export default function ChartProgressBar({
  id,
  size = 'normal',
  gradientArr,
  percent,
  isGradient,
}: ProgressBarProps) {
  const [radius, cx, cy, strokeWidth] = getValues(size)
  const dashArray = (Math.PI * radius * percent) / 100

  return (
    <>
      <svg width={cx * 2} height={cy + 5} viewBox={`0 3 ${cx * 2} ${cy}`}>
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDashoffset={-1 * Math.PI * radius}
          strokeDasharray={`${dashArray} 10000`}
          stroke={isGradient ? `url(#${id})` : '#2F363E'}
        ></circle>
        {isGradient && (
          <defs>
            <linearGradient id={id}>
              {gradientArr.map((color: string, idx: number) => (
                <stop
                  key={color}
                  offset={`${(100 / (gradientArr.length - 1)) * idx}%`}
                  stopColor={color}
                />
              ))}
            </linearGradient>
          </defs>
        )}
      </svg>
    </>
  )
}

function getValues(size: ProgressBarProps['size']): number[] {
  if (size === 'large') {
    return [54, 59, 59, 10]
  }
  return [35, 39, 39, 7]
}

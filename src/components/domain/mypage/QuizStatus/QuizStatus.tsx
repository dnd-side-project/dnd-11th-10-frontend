import React from 'react'

interface Props {
  colorClass: string
  label: string
  count: number
}

function QuizStatus({ colorClass, label, count }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center m-auto gap-1">
        <span className={colorClass}>
          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
            <circle cx="3" cy="3" r="3" />
          </svg>
        </span>
        <p className="text-onSurface-300">{label}</p>
      </div>
      <div className="flex items-center m-auto">
        <p className={`${colorClass} text-h3`}>{count}</p>
        <p className="text-onSurface-200 text-caption">회</p>
      </div>
      <p className="text-onSurface-200">퀴즈 완료</p>
    </div>
  )
}

export default QuizStatus

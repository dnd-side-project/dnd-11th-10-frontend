import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function QuizLayout({ children }: LayoutProps) {
  return (
    <div>
      <div className="h-fit">{children}</div>
    </div>
  )
}

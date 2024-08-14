import Header from '@/components/domain/quiz/Header'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function QuizLayout({ children }: LayoutProps) {
  return (
    <>
      {/* <Header /> */}
      <div className="h-fit px-4">{children}</div>
    </>
  )
}

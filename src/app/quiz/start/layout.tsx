import React from 'react'
import Header from '@/components/domain/quiz/start/Header'

type LayoutProps = {
  children: React.ReactNode
}
export default function QuizStartLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="h-[calc(100%-80px)] px-4 pb-8">{children}</div>
    </>
  )
}

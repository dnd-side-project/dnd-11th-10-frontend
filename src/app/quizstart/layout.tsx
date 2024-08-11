import React from 'react'
import Header from '@/components/domain/quizstart/Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function QuizStartLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="h-fit px-4">{children}</div>
    </>
  )
}

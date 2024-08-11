import React from 'react'
import Header from '@/components/domain/quiztypechoice/Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function QuizTypeChoiceLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="h-fit px-4">{children}</div>
    </>
  )
}

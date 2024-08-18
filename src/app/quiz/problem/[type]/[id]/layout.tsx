import Header from '@/components/domain/quiz/problem/Header'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function QuizLayout({ children }: LayoutProps) {
  return (
    <div className='p-4'>
      <Header />
      <div className="h-[calc(100%-80px)]">{children}</div>
    </div>
  )
}

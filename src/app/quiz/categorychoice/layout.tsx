import React from 'react'
import { Header } from '@/components/domain/quiz/typechoice'

type LayoutProps = {
  children: React.ReactNode
}
export default function QuizCategoryLayout({ children }: LayoutProps) {
  return (
    <div className="p-4">
      <Header />
      <div className="h-[calc(100%-80px)]">{children}</div>
    </div>
  )
}
